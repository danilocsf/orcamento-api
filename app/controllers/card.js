const cardService = require('../service/card');

exports.findAll = async (req, res) => {
    const cards = await cardService.findAll();
    res.status(200).json({
        data: cards
    });
}

exports.findById = async (req, res) => {
    const id = req.params.id;
    const card = await cardService.findById(id);
    res.status(200).json({
        data: card
    });
}

exports.findByParams = async (req, res) => {
    const params = req.body;
    const cards = await cardService.findByParams(params);
    res.status(200).json({
        data: cards
    });
}