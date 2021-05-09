const User = require('./user.model');
const uuid = require('uuid');
const cache = require('../../lib/cache');
const ttl = 60 * 5;

const index = async (query) => {
    if (query.account_number) {
        return getByAccountNumber(query.account_number);
    }
    if (query.identity_number) {
        return getByIdentityNumber(query.identity_number);
    }

    return getAll();
}

const store = async (body) => {
    const data = {
        id: uuid.v4(),
        user_name: body.user_name,
        account_number: body.account_number,
        email_address: body.email_address,
        identity_number: body.identity_number,
    }
    const user = new User(data);
    const result = await user.save();

    const key = result.id;
    await cache.set(`user:id:${key}`, result, ttl);
    await cache.del('user:all');

    return result;
}

const show = async (id) => {
    const key = `user:id:${id}`;
    let result = await cache.get(key);
    if (!result) {
        result = await User.findOne({id});
        await cache.set(key, result, ttl);
    }

    return result;
}

const update = async (id, body) => {
    const result = await User.findOneAndUpdate(
        { id },
        body,
        { new: true }
    );

    const key = `user:id:${id}`;
    await cache.set(key, result, ttl);
    await cache.del('user:all');

    return result;
}

const destroy = async (id) => {
    const result = await User.findOneAndRemove({id});

    const key = `user:id:${id}`;
    await cache.del(key);
    await cache.del('user:all');

    return result;
}

const getAll = async () => {
    const key = 'user:all';
    let result = await cache.get(key);
    if (!result) {
        result = await User.find();
        await cache.set(key, result, ttl);
    }
    
    return result;
}

const getByAccountNumber = async (accountNumber) => {
    const key = `user:account_number:${accountNumber}`;
    let result = await cache.get(key);
    if (!result) {
        result = await User.find({ account_number: accountNumber });
        await cache.set(key, result, ttl);
    }

    return result;
}

const getByIdentityNumber = async (identityNumber) => {
    const key = `user:identity_number:${identityNumber}`;
    let result = await cache.get(key);
    if (!result) {
        result = await User.find({ identity_number: identityNumber });
        await cache.set(key, result, ttl);
    }

    return result;
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy,
}