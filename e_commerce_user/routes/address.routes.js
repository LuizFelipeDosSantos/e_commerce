const router = require("express").Router();
const UserService = require("../services/user.service");
const service = new UserService();

router.get("/list", async (req, res) => {
  try {
    const { userId } = req.query;
    const adresses = await service.getAdresses(userId);

    return res.status(200).json({ adresses });
  } catch (error) {
    return res.status(400).json({ errorMessage: error.errorMessage });  
  }
});

router.post("/create", async (req, res) => {
  try {
    const { address, userId } = req.body;

    await service.createAddress(userId, address);

    return res.status(200).json({ message: "Successfully created." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: "Something went wrong." });
  }
});

router.put("/edit", async (req, res) => {
  try {
    const { address } = req.body;

    await service.editAddress(address);

    return res.status(200).json({ message: "Successfully updated." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: "Something went wrong." });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const { addressId, userId } = req.query;

    await service.deleteAddress(req.session.user._id, addressId);

    return res.status(200).json({ message: "Successfully deleted." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: "Something went wrong." });
  }
});

module.exports = router;