/**
 * sequelize 实例
 */

const Sequelize = require('sequelize');
const { MYSQL_CONF } = require('../conf/db-conf');
const { isTest } = require('../utils/env-util');

const { user, password, host, database } = MYSQL_CONF;

let conf = {
    host,
    dialect: 'mysql'
}

// 单元测试时不打印sql语句
if (isTest) conf.logging = () => { };


const seq = new Sequelize(database, user, password, conf);

module.exports = seq;