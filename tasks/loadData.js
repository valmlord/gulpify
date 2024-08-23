import fs from 'fs';
import path from 'path';

const loadData = (dir) => {
  const data = {};
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (path.extname(file) === '.json') {
      const key = path.basename(file, '.json');
      const filePath = path.join(dir, file);
      data[key] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  });

  return data;
};

export default loadData;
