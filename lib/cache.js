const Redis = require('ioredis');

const { REDIS_HOST, REDIS_PORT, REDIS_DB, REDIS_URI } = process.env;
const redisURI = REDIS_URI || `redis://${REDIS_HOST}:${REDIS_PORT}/${REDIS_DB}`;
const redis = new Redis(redisURI);

const get = async (key) => {
    try {
        const string = await redis.get(key);
        return JSON.parse(string);
    } catch (e) {
        console.error(`Redis.get : ${e}`);
    }

    return null;
}

const set = async (key, data, ttl = null) => {
    try {
        const string = JSON.stringify(data);
        let result = null;
        if (ttl) {
            result = await redis.set(key, string, 'EX', ttl);
        } else {
            result = await redis.set(key, string);
        }
        return result;
    } catch (e) {
        console.error(`Redis.set : ${e}`);
    }

    return null;
}

const del = async (key) => {
    try {
        const result = await redis.del(key);
        return result;
    } catch (e) {
        console.error(`Redis.del : ${e}`);
    }

    return null;
}

module.exports = {
    get,
    set,
    del,
}