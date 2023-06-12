/**
 * @discription redis缓存操作方法
 * @author Jason
 */

const redis = require('redis');
const { REDIS_CONF } = require('../conf/db-conf');

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);

!(async function () {
    // 连接redis
    await redisClient.connect()
        .then(() => console.log('redis connect success!'))
        .catch(err => console.error('redis connect error: ', err));
})()

async function set(key, val) {
    let objVal = val;
    if (typeof val === 'object') objVal = JSON.stringify(val);
    await redisClient.set(key, val);
}

async function get(key) {
    let val = await redisClient.get(key);
    if (val === null) return val
    try {
        val = JSON.parse(val);
    } catch (error) { }
    return val;
}

module.exports = {
    set,
    get
}