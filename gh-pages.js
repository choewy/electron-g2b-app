const fs = require('fs');

fs.writeFileSync(
  './package.json',
  JSON.stringify(
    Object.assign(JSON.parse(fs.readFileSync('./package.json').toString('utf-8')), {
      homepage: 'https://choewy.github.io/g2b-client',
    }),
    null,
    2,
  ),
);
