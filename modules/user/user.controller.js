const service = require('./user.service');

const index = async (req, res) => {
    const { query } = req;
    const result = await service.index(query);
    res.status(result.status).json(result);
}

const show = async (req, res) => {
    const { params: { id } } = req;
    const result = await service.show(id);
    res.status(result.status).json(result);
}

const store = async (req, res) => {
    const { body } = req;
    const result = await service.store(body);
    res.status(result.status).json(result);
}

const update = async (req, res) => {
    const { params: { id }, body } = req;
    const result = await service.update(id, body);
    res.status(result.status).json(result);
}

const destroy = async (req, res) => {
    const { params: { id } } = req;
    const result = await service.destroy(id);
    res.status(result.status).json(result);
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
}