import assert from 'assert';
import { readFile, writeFile, unlink, mkdir } from 'fs/promises'
import { parse } from 'csv-parse';
import { promisify } from 'util';
import _ from 'lodash';
import YAML from 'yaml';
import { glob } from 'glob'


const parseAsync = promisify(parse)

const SOURCE_PEOPLE_CSV = '../_about-us/people.csv'
const STAFF_TEMPLATE_MD = './staff.md.template'
const TARGET_ABOUT_US_COLLECTION_DIR = '../_about-us/'
const TARGET_ABOUT_US_COLLECTION_YML = '../_about-us/collection.yml'
const TARGET_STAFF_INSERT_SQL = './staff.sql'

const functionNameToFunctionId = {
    'Software Engineering': 'eng',
    'Product Management': 'pm',
    'Corporate Team': 'corporate',
    'People Team': 'corporate',
    'Marketing Team': 'corporate',
    'Corporate Operations': 'corporate',
    'Product Design': 'design',
    'Product Operations': 'ops',
    'Partnerships & Transformation': 'transformation',
    'Policy & Transformation': 'transformation',
}

const functionIdToFunctionName = {
    corporate: 'Corporate Team',
    eng: 'Software Engineering',
    pm: 'Product Management',
    design: 'Product Design',
    ops: 'Product Operations',
    transformation: 'Policy & Transformation',
}

const csvContent = await readFile(`${SOURCE_PEOPLE_CSV}`);

const records = (await parseAsync(csvContent, {bom: true})).slice(1) // drop header

// 0 remove all user files to stick to the incoming list exclusively
// all js files, but don't look in node_modules
const staffFiles = await glob(`${TARGET_ABOUT_US_COLLECTION_DIR}/*/*.md`)

await Promise.all(staffFiles.filter(file => !/all.md$/.test(file)).map(file => unlink(file)))


function getCleanProductList(products) {
    return (products || '')
        .split(/[\r\n]+/)
        .map(product => product.trim().replace(/^[*-]\s*/, '')) // remove "bullet point"
        .filter(v => v)
}

// 1 generate the data file
const namedRecords = records.map(([_sn, _done, _batch, _by, name, email, func, jobTitle, joinDate, quote, linkedinId, _workingDocLink, curProducts, pastProducts, accomplishments]) => {
    const id = email.trim().split('@')[0].toLowerCase();

    const record = {
        staffId: id,
        name,
        joinDate: joinDate || '1970-01-01',
        functionId: functionNameToFunctionId[func] || (functionIdToFunctionName[func] ? func : 'eng'), // stupid default, but to make sure things don't break 🤷
        jobTitle: jobTitle || 'Job Title',
        curProducts: curProducts || '', // 'currentProducts',
        pastProducts: pastProducts || '', // 'pastProducts',
        accomplishments: accomplishments?.split(/[\r\n]+/).join('\n') || '',
        quote: quote || '',
        linkedinId: linkedinId || '',
    }

    record.curProducts = getCleanProductList(record.curProducts)
    record.pastProducts = getCleanProductList(record.pastProducts)

    return record
}).filter(record => record.staffId)

// order the record by name
namedRecords.sort((r1, r2) => r1.name.toLowerCase() < r2.name.toLowerCase() ? -1 : 1)



// 2. generate the page files
const templateContent = (await readFile(STAFF_TEMPLATE_MD)).toString() // assumes UTF-8

for (const record of namedRecords) {
    // augment the record with new fields
    record.yamlData = YAML.stringify(record)
    record.functionName = functionIdToFunctionName[record.functionId]

    const processed = templateContent.replace(/\{\{([a-z]+)\}\}/gi, (_match, itemId) => {
        if (!(itemId in record)) {
            console.warn(`${record.staffId}: placeholder item [${itemId}] not found in record - wiping`)
            return 'CLEARED'
        }
        return record[itemId]
    });

    const functionDir = `${TARGET_ABOUT_US_COLLECTION_DIR}${record.functionId}`
    const staffPageFile = `${functionDir}/${record.staffId}.md`

    console.log(`Writing file for ${record.name} into ${staffPageFile}`);

    try {
        await unlink(staffPageFile);
    }
    catch(err) {
        // console.log(err)
    }
    try {
        await mkdir(`${functionDir}`);
    }
    catch(err) {
        // console.log(err)
    }
    await writeFile(staffPageFile, processed);
}


// 3. Generate "About Us" Navigation
const first = 'About us.md';
const last = 'Board of Advisors.md';
const functionIds = [
    'corporate',
    'design',
    'eng',
    'ops',
    'pm',
    'transformation',
];
const pages = [first];

functionIds.forEach((functionId) => {
    pages.push(`${functionId}/all.md`);
    namedRecords
        .filter(record => record.functionId === functionId)
        .forEach(record =>
            pages.push(`${functionId}/${record.staffId}.md`)
        )
});

pages.push(last);

const aboutUsCollectionStruct = {
    collections: {
        'about-us': {
            output: true,
            order: pages
        }
    }
}

await writeFile(TARGET_ABOUT_US_COLLECTION_YML, YAML.stringify(aboutUsCollectionStruct))


// 4. Generate sql insertion script for the report card DB
// NOTE: SQL interpolation is bad, this assumes the data is clean! User beware!
const statements = namedRecords.map(record => {
    const { staffId: id, name } = record;

    return `INSERT INTO staff (id, name) VALUES ('${id}', '${name}') ON CONFLICT(id) DO UPDATE SET name='${name}';`;

});
await writeFile(TARGET_STAFF_INSERT_SQL, statements.join('\n'));
