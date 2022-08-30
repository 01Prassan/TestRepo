const Params = require("../database/model/testSchema")
// This method use  to get data from database related to coordinates
exports.getdata = async (req, res, next) => {
  try {
    const _id = '630dcca1edb227c6511ee5a4'
    const data = await Params.findOne({ _id });
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ sucess: false, "error": error },)
  }
}



exports.patchdata = async (req, res, next) => {
  try {
    const id = "630dcca1edb227c6511ee5a4"
    const data = await Params.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data });
  } catch (e) {
    res.status(400).json(e);
  }
}