import assert from 'assert';
import { readFile, writeFile } from 'fs/promises'
import { parse } from 'csv-parse';
import { promisify } from 'util';
import YAML from 'yaml'

const parseAsync = promisify(parse)

const SOURCE_PEOPLE_CSV = '../_people/people.csv'
const STAFF_TEMPLATE_MD = './staff.md.template'
const TARGET_PEOPLE_DATA_FILE_YML = '../_data/people.yml'
const TARGET_PEOPLE_COLLECTION_DIR = '../_people/'


const csvContent = await readFile(`${SOURCE_PEOPLE_CSV}`);

const records = (await parseAsync(csvContent, {bom: true})).slice(1) // drop header

// 1 generate the data file
const namedRecords = records.map(([name, joinDate, email, func, title]) => ({
    id: email.split('@')[0],
    name,
    joinDate,
    function: func || 'eng', // stupid default, but to make sure things don't break 🤷
    title,
    description: '',
    products: '',
    accomplishments: '',
}))

// order the record by name
namedRecords.sort((r1, r2) => r1.name < r2.name ? -1 : 1)

await writeFile(TARGET_PEOPLE_DATA_FILE_YML, YAML.stringify(namedRecords))


// 2. generate the page files
const templateContent = (await readFile(STAFF_TEMPLATE_MD)).toString() // assumes UTF-8

for (const record of namedRecords) {
    console.log(`Writing file for ${record.id} (${record.name})`
    )
    const processed = templateContent.replace(/\{\{([a-z]+)\}\}/gi, (_match, itemId) => {
        if (!(itemId in record)) {
            console.warn(`${record.id}: placeholder item [${itemId}] not found in record - wiping`)
            return 'CLEARED'
        }
        return record[itemId]
    });

    await writeFile(`${TARGET_PEOPLE_COLLECTION_DIR}${record.id}.md`, processed)
}
