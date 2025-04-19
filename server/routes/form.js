const express = require("express");

const router = express.Router();

// controller import
const {createForm,searchForm,deleteForm} = require("../controller/formController");
// route define
router.post("/create-form",createForm);
router.get("/submissions",searchForm);
router.delete('/delete/:id',deleteForm);
// export router
module.exports = router;