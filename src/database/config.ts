import * as fs from 'fs';

export default {
  db: JSON.parse(fs.readFileSync('src/database/db.json', 'utf-8'))
}