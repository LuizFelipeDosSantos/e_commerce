const router = require("express").Router();
const UserService = require("../services/user.service");
const service = new UserService();

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/list", isLoggedIn, async (req, res) => {
  try {
    const adresses = await service.getAdresses(req.session.user._id);

    return res.status(200).json({ adresses });
  } catch (error) {
    return res.status(400).json({ errorMessage: error.errorMessage });  
  }
});

router.post("/create", isLoggedIn, async (req, res) => {
  try {
    const { address } = req.body;

    await service.createAddress(req.session.user._id, address);

    return res.status(200).json({ message: "Successfully created." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: "Something went wrong." });
  }
});

router.put("/edit", isLoggedIn, async (req, res) => {
  try {
    const { address } = req.body;

    await service.editAddress(address);

    return res.status(200).json({ message: "Successfully updated." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: "Something went wrong." });
  }
});

router.delete("/delete", isLoggedIn, async (req, res) => {
  try {
    const { addressId } = req.query;

    await service.deleteAddress(req.session.user._id, addressId);

    return res.status(200).json({ message: "Successfully deleted." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: "Something went wrong." });
  }
});

module.exports = router;