import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import omit from 'lodash/omit';
import path from 'path';

const { timestamp, combine, printf, colorize } = winston.format;

const logger = winston.createLogger({
  transports: [
    new DailyRotateFile({
      filename: path.join('/tmp', `fileName.log`),
      datePattern: 'YYYY-MM-DD-HH-mm-ss',
      prepend: true,
      localTime: true,
      level: 'info',
      maxSize: '2m',
      maxFiles: '14d',
      colorize: true
    })
  ],
  exitOnError: false
});

const customFormat = printf(
  (info) =>
    `${info.timestamp} [${info.level}]${
      info.durationMs ? ` [${info.durationMs} ms] ` : ''
    } ${info.message} ${JSON.stringify(
      omit(info, ['message', 'level', 'timestamp', 'durationMs'])
    )}`
);
logger.add(
  new winston.transports.Console({
    format: combine(colorize(), timestamp(), customFormat),
    level: 'debug'
  })
);

export default logger;
