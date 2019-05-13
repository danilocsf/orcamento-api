const categoryService = require('../service/category');

exports.findAll = async (req, res) => {
    const categories = await categoryService.findAll();
    res.status(200).json({
        data: categories
    });
}

exports.findById = async (req, res) => {
    const id = req.params.id;
    const category = await categoryService.findById(id);
    res.status(200).json({
        data: category
    });
}

exports.findByName = async (req, res) => {
    const name = req.params.name;
    const category = await categoryService.findByName(name);
    res.status(200).json({
        data: category
    });
}