const Item = require("../models/itemModel");

exports.getAllItems = async (req, res) => {
  const items = await Item.find();
  return res.json({
    status: "success",
    data: {
      items,
    },
  });
};

exports.createItem = async (req, res) => {
  const { name, price, description, images } = req.body;
  const item = await Item.create({
    name,
    price,
    description,
    images,
  });
  return res.json({
    status: "success",
    data: {
      item,
    },
  });
};

exports.getItem = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);
  if (!item) {
    return res.json({
      status: "fail",
      msg: "Item not found",
    });
  }
  return res.json({
    status: "success",
    data: {
      item,
    },
  });
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findByIdAndDelete(id);
  if (!item) {
    return res.json({
      status: "fail",
      msg: "Item not found",
    });
  }
  return res.json({
    status: "success",
    msg: "Deleted successfully",
  });
};

exports.editItem = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, images } = req.body;
  const item = await Item.findByIdAndUpdate(
    id,
    { name, price, description, images },
    { new: true }
  );
  if (!item) {
    return res.json({
      status: "fail",
      msg: "Item not found",
    });
  }
  return res.json({
    status: "success",
    data: {
      item,
    },
  });
};

exports.searchItem = async (req, res) => {
  const { name } = req.params;
  const items = await Item.find({ name: { $regex: name, $options: "i" } });
  return res.json({ status: "success", data: { items } });
};