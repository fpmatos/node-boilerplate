const filesystem = require('./filesystem');

const directoryName = 'dist';

if(!filesystem.directoryExists(directoryName))
    filesystem.createDirectory(directoryName)
else
    filesystem.clearDirectory(directoryName);
