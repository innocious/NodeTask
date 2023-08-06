const fs = require('fs');

const oldDirectoryName = 'Students';
const newDirectoryName = 'Names';

fs.rename(oldDirectoryName, newDirectoryName, (err) => {
  if (err) {
    console.error(`Error renaming directory: ${err}`);
  } else {
    console.log('Directory renamed successfully.');
  }
});

const contentToAdd = 'Innocent Onwukanjo\n';

fs.appendFile('user.js', contentToAdd, (err) => {
  if (err) {
    console.error(`Error appending content to user.js: ${err}`);
  } else {
    console.log('Content added to user.js successfully.');
  }
});


const userInfo = {
  name: 'Innocent Onwukanjo',
  age: 26,
  sex: 'male',
  nationality: 'Nigerian',
  phoneNumber: '08161851085',
  education: 'I am a graduate of Computer Engineering and Computer Science.',
};

const contentToAdd2 = JSON.stringify(userInfo, null, 2) + '\n';

fs.writeFile('user.js', contentToAdd2, { flag: 'a' }, (err) => {
  if (err) {
    console.error(`Error updating user.js: ${err}`);
  } else {
    console.log('Information added to user.js successfully.');
  }
});

const oldFileName = 'user.js';
const newFileName = 'innocent.js';

fs.rename(oldFileName, newFileName, (err) => {
  if (err) {
    console.error(`Error renaming file: ${err}`);
  } else {
    console.log('File renamed successfully.');
  }
});

const fileName = 'innocent.js';

fs.open(fileName, 'r', (err, fd) => {
  if (err) {
    console.error(`Error opening file: ${err}`);
  } else {
    fs.readFile(fd, 'utf8', (readErr, data) => {
      if (readErr) {
        console.error(`Error reading file: ${readErr}`);
      } else {
        console.log(`Contents of ${fileName}: \n`, data);
        fs.close(fd, (closeErr) => {
          if (closeErr) {
            console.error(`Error closing file: ${closeErr}`);
          }
        });
      }
    });
  }
});

const fileName2 = 'innocent.js';

fs.unlink(fileName2, (err) => {
  if (err) {
    console.error(`Error deleting file: ${err}`);
  } else {
    console.log('File deleted successfully.');
  }
});

const directoryName = 'Names';

fs.rmdir(directoryName, (err) => {
  if (err) {
    console.error(`Error deleting directory: ${err}`);
  } else {
    console.log('Directory deleted successfully.');
  }
});