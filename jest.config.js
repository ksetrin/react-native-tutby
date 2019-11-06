const fs = require('fs');
const path = require('path');

function getFolderList(rootDir) {
  let files = fs.readdirSync(rootDir);
  files = files.map(file => {
    const filePath = path.join(rootDir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      return getFolderList(filePath);
    } else if (stats.isFile()) {
      return path.dirname(filePath);
    }
  });

  const fileList = files.reduce(
    (all, folderContents) => all.concat(folderContents),
    [],
  );
  const folderList = fileList.filter(
    (filePath, index) => fileList.indexOf(filePath) === index,
  );
  return folderList;
}

const moduleDirectories = [
  'node_modules',
  ...getFolderList(__dirname + '/node_modules/react-native/Libraries'),
];
module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-navigation|@react-navigation/.*))',
  ],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jest/jest-setup.js',
  ],
  moduleDirectories,
};
