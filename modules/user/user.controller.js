const service = require('./user.service');

const index = async (req, res) => {
    const result = await service.index();
    res.json(result);
}

const show = async (req, res) => {
    const { params: { id } } = req;
    const result = await service.show(id);
    res.json(result);
}

const store = async (req, res) => {
    const { body } = req;
    const result = await service.store(body);
    res.json(result);
}

const update = async (req, res) => {
    const { params: { id }, body } = req;
    const result = await service.update(id, body);
    res.json(result);
}

const destroy = async (req, res) => {
    const { params: { id } } = req;
    const result = await service.destroy(id);
    res.json(result);
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
}