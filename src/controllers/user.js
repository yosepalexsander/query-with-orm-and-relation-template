// import model here
const { user } = require("../../models");

exports.addUser = async (req, res) => {
  try {
    await user.create(req.body);
    res.send({
      status: "success",
      message: "Add user finished",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};
