import assert from 'assert';
import { readFile, writeFile, unlink } from 'fs/promises'
import { parse } from 'csv-parse';
import { promisify } from 'util';
import _ from 'lodash';
import YAML from 'yaml';

const parseAsync = promisify(parse)

const SOURCE_PEOPLE_CSV = '../_people/people.csv'
const STAFF_TEMPLATE_MD = './staff.md.template'
const TARGET_PEOPLE_DATA_FILE_YML = '../_data/people.yml'
const TARGET_PEOPLE_COLLECTION_DIR = '../_people/'

// https://www.shutterfly.com/ideas/family-quotes/
const familyQuotes = [
    'The most important thing in the world is family and love.',
    'Nothing is better than going home to family and eating good food and relaxing',
    'To us, family means putting your arms around each other and being there.',
    'In family life, love is the oil that eases friction, the cement that binds closer together, and the music that brings harmony.',
    'Other things may change us, but we start and end with the family.',
    'Having somewhere to go is home. Having someone to love is family. And having both is a blessing.',
    'Being a family means you are a part of something very wonderful. It means you will love and be loved for the rest of your life.',
    'Happiness is having a large, loving, caring, close-knit family in another city.',
    'The informality of family life is a blessed condition that allows us all to become our best while looking our worst.',
    'Families are like fudge – mostly sweet with a few nuts.',
    'Being part of a family means smiling for photos.',
    'Family ties mean that no matter how much you might want to run from your family, you can’t.',
    'Family is not an important thing. It’s everything.',
    'The memories we make with our family is everything.',
    'Family is family.',
    'The family is one of nature’s masterpieces.',
    'In time of test, family is best.',
    'It’s all about the quality of life and finding a happy balance between work and friends and family.',
    'Family and friendships are two of the greatest facilitators of happiness.',
    'Treat your family like friends and your friends like family.',
    'Family and friends are hidden treasures, seek them and enjoy their riches.',
    'Stick to the basics, hold on to your family and friends – they will never go out of fashion.',
    'My family is my life, and everything else comes second as far as what’s important to me.',
    'A happy family is but an earlier heaven.',
    'The family is the test of freedom; because the family is the only thing that the free man makes for himself and by himself.',
    'Think of your family today and every day thereafter, don’t let the busy world of today keep you from showing how much you love and appreciate your family.',
    'Our family is a circle of strength of love with every birth and every union the circle grows.',
    'There is no doubt that it is around the family and the home that all the greatest virtues… are created, strengthened and maintained.',
    'Blended families: woven together by choice, strengthened together by love, tested by everything, and each uniquely ours.',
    'Family isn’t always blood. It’s the people in your life who want you in theirs; the ones who accept you for who you are. The ones that would do anything to see you smile and who love you no matter what.',
    'Family is not defined by our genes, it is built and maintained through love.',
    'I didn’t give you the gift of life, but life gave me the gift of you.',
    'Ohana means family and family means nobody gets left behind or forgotten.',
    'This is my family. I found it all on my own. It’s little, and broken, but still good. Yeah. Still good.',
    'Some people are worth melting for.',
    'We may have our differences, but nothing’s more important than family.',
    'Life is beautiful. It’s about giving. It’s about family.',
    'Rejoice with your family in the beautiful land of life.',
    'Family: A social unit where the father is concerned with parking space, the children with outer space, and the mother with closet space.',
    'Where there is family, there is love.',
    'Family gives you the roots to stand tall and strong.',
    'Family is the heart of a home.',
    'The family – that dear octopus from whose tentacles we never quite escape, nor, in our inmost hearts, ever quite wish to.',
    'It didn’t matter how big our house was; it mattered that there was love in it.',
    'To us, family means putting your arms around each other and being there.',
    'The bond that links your true family is not one of blood, but of respect and joy in each other’s life.',
    'Call it a clan, call it a network, call it a tribe, call it a family: Whatever you call it, whoever you are, you need one.',
    'Families are the compass that guides us. They are the inspiration to reach great heights, and our comfort when we occasionally falter.',
    'The only rock I know that stays steady, the only institution I know that works, is the family.',
    'When trouble comes, it’s your family that supports you.',
];

const csvContent = await readFile(`${SOURCE_PEOPLE_CSV}`);

const records = (await parseAsync(csvContent, {bom: true})).slice(1) // drop header

let quoteIndex = 0

// 1 generate the data file
const namedRecords = records.map(([name, joinDate, email, func, jobTitle, curProducts, pastProducts, accomplishments, quote, linkedinId]) => {
    const id = email.split('@')[0].toLowerCase();

    return {
        id,
        name,
        joinDate: joinDate || '1970-01-01',
        function: func || 'eng', // stupid default, but to make sure things don't break 🤷
        jobTitle: jobTitle || 'Serious Title',
        curProducts: curProducts || 'currentProducts',
        pastProducts: pastProducts || 'pastProducts',
        accomplishments: accomplishments || '',
        quote: quote || familyQuotes[quoteIndex++%familyQuotes.length],
        linkedinId: linkedinId || id, // warning: using id is NOT correct, this is just to have something there for now
    }
})

// order the record by name
namedRecords.sort((r1, r2) => r1.name < r2.name ? -1 : 1)

await writeFile(TARGET_PEOPLE_DATA_FILE_YML, YAML.stringify(namedRecords))


// 2. generate the page files
const templateContent = (await readFile(STAFF_TEMPLATE_MD)).toString() // assumes UTF-8

for (const record of namedRecords) {
    console.log(`Writing file for ${record.id} (${record.name})`
    )

    record.yamlData = YAML.stringify(record)

    const processed = templateContent.replace(/\{\{([a-z]+)\}\}/gi, (_match, itemId) => {
        if (!(itemId in record)) {
            console.warn(`${record.id}: placeholder item [${itemId}] not found in record - wiping`)
            return 'CLEARED'
        }
        return record[itemId]
    });

    try {
        await unlink(`${TARGET_PEOPLE_COLLECTION_DIR}${record.id}.md`)
    }
    catch(err) {}
    await writeFile(`${TARGET_PEOPLE_COLLECTION_DIR}${record.id}.md`, processed)
}
