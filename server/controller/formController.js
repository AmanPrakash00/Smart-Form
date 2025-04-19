const Form = require("../models/form");

exports.createForm = async(req,res)=>{
    try {
        // step 1: parsing the data
        const {
            name,
            email,
            gender,
            mobilenumber,
            message
        } = req.body;
        // step 2: validation
        if(!name || !email || !gender || !mobilenumber || !message){
            return res.status(403).json({
                message:"All fields are required. Please try again."
            })
        }
        // step 3: create obj
        const form = new Form({
            name,email,gender,mobilenumber,message
        });
        // step 4: push to db
        const savedForm = await form.save();
        // step 5: send response
        return res.status(200).json({
            message:"Successfully created the form.",
            savedForm
        })

    } catch (error) {
        return res.status(403).json({
            message:"Error while creating the form."
        });
    }
}

exports.searchForm = async (req, res) => {
    try {
      const email = req.query.email; 
      const form = await Form.find({ email }).exec();
      res.json(form);
    } catch (error) {
      return res.status(500).json({
        message: "Error while searching the form."
      });
    }
  };

exports.deleteForm = async (req, res) => {
    try {
      await Form.findByIdAndDelete(req.params.id);
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Delete failed' });
    }
};