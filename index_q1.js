const path = require('path');
const os = require('os');
const process = require('process');

function printCurrentWorkingDirectory() {
  console.log('Current Working Directory:', process.cwd());
}

function printSeparator(filePath) {
  console.log('Separator of the given file path:', path.sep);
}

function printExtensionName(filePath) {
  const extension = path.extname(filePath);
  console.log('Extension name of the file path:', extension);
}

function printProcessId() {
  console.log('Process ID of the current running process:', process.pid);
}

function printUserInfo() {
  console.log('User information of the OS:');
  console.log('Username:', os.userInfo().username);
  console.log('User ID:', os.userInfo().uid);
  console.log('Group ID:', os.userInfo().gid);
}

function printOperatingSystemPlatform() {
  console.log('Operating System Platform:', process.platform);
}

// Replace this with your desired file path
const filePath = 'example.txt';

printCurrentWorkingDirectory();
printSeparator(filePath);
printExtensionName(filePath);
printProcessId();
printUserInfo();
printOperatingSystemPlatform();
