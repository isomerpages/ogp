import { readFile, writeFile, unlink, mkdir } from 'fs/promises'
import { parse } from 'csv-parse';
import { promisify } from 'util';
import _ from 'lodash';
import YAML from 'yaml';
import { glob } from 'glob'
import { getCleanList } from './utils.js'


const parseAsync = promisify(parse)

const SOURCE_ACHIEVEMENTS_CSV = './accomplishment_updates.csv'
const TARGET_ABOUT_US_COLLECTION_DIR = '../_about-us/'
const STAFF_FILE_DELIMITER = '---\n';


const csvContent = await readFile(`${SOURCE_ACHIEVEMENTS_CSV}`);

const records = (await parseAsync(csvContent, {bom: true})).slice(1) // drop header

// 1 generate the data file
const namedRecords = records.map(([name, email, _func, jobTitle, accomplishments]) => {
    const id = email.trim().split('@')[0].toLowerCase();

    const record = {
        staffId: id,
        name: name.trim(),
        jobTitle: jobTitle?.trim() || 'Job Title',
        accomplishments: getCleanList(accomplishments),
    }

    if (record.accomplishments.length === 0) {
        record.accomplishments.push("i'm new, watch this space!");
    }

    return record
}).filter(record => record.staffId)


for (const record of namedRecords) {
    console.log(`Processing ${record.name}`);

    // find the target file
    const targetFiles = await glob(`${TARGET_ABOUT_US_COLLECTION_DIR}/*/${record.staffId}.md`)

    if (!targetFiles || targetFiles.length !== 1) {
        console.warn(`Unable to find staff file for ${record.name} (${record.staffId})`);
        continue;
    }

    const staffFile = targetFiles[0];
    const staffFileContent = await readFile(staffFile);

    const staffFileFragments = staffFileContent.toString().split(STAFF_FILE_DELIMITER)

    const staffData = YAML.parse(staffFileFragments[1]);
    staffData.accomplishments = record.accomplishments;
    staffFileFragments[1] = YAML.stringify(staffData);

    await writeFile(staffFile, staffFileFragments.join(STAFF_FILE_DELIMITER));
}