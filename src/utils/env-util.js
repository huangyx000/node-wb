/**
 * @description 环境变量工具类
 * @author Jason
 */

const env = process.env.NODE_ENV;

const isDev = env === 'dev';
const notDev = env !== 'dev';
const isProd = env === 'production';
const notProd = env !== 'production';
const isTest = env === 'test';
const notTest = env !== 'test';

module.exports = { isDev, notDev, isProd, notProd, isTest, notTest }