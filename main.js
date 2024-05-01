const dotenv = require('dotenv');
dotenv.config();

const config = require('config');

const logger = require('./utils/logger')('main',config );

logger.info('info message : the script is running!');
logger.warn('warn message');
logger.error('error message');
logger.warn('warn message');
logger.error('error message');

const { fn } = require('./secondary');
//fn();
//fn();

const fileSync = require('./file_sync');
fileSync.start('source','target');
const fileSync = require('./file_sync');
fileSync.start('source','target');
