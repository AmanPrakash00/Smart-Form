// step 1: express instance
const express = require("express");
const cors = require("cors");
// step 2: server create
const app = express();
// step 3: dotenv
require("dotenv").config();
// step 4: config folder
const PORT = process.env.PORT || 5000;
const dbConnect = require("./configs/database");
dbConnect();
// step 5: middleware
app.use(express.json());
// step 6: connect the frontend
app.use(
	cors({
		origin:process.env.FRONTEND_URL,
		credentials:true,
	})
)
// step 7: route mount
const formRoutes = require("./routes/form");

app.use("/api/v1",formRoutes);
// step 8: listen server
app.listen(PORT,()=>{
    console.log(`server successfully started at ${PORT}`);
});
// step 9: defalult route
app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});