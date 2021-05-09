const User = require('./user.model');
const uuid = require('uuid');

const index = async () => {
    const result = await User.find();
    return result;
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

    return result;
}

const show = async (id) => {
    const result = await User.findOne({id});
    return result;
}

const update = async (id, body) => {
    const result = await User.findOneAndUpdate(
        { id },
        body,
        { new: true }
    );
    return result;
}

const destroy = async (id) => {
    const result = await User.findOneAndRemove({id});
    return result;
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy,
}