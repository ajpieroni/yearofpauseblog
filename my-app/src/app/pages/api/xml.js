import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';

export default async function handler(req, res) {
  const filePath = path.resolve('./public', 'squarespace.xml');
  const xmlData = fs.readFileSync(filePath, 'utf8');

  xml2js.parseString(xmlData, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Failed to parse XML' });
      return;
    }

    res.status(200).json(result);
  });
}
