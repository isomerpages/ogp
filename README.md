# OGP Homepage Isomer Site

## Running locally
- `bundle _2.1.4_ install`
- `./serve.sh`

## Updating achievement and job titles
- `cd sripts`
- Download the staff update google sheet as the csv local file ./scripts/accomplishment_updates.csv
- Check that the column ordering is correct
- `npm install`
- `node update_people_accomplishments.js`