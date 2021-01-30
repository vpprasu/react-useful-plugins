const express = require("express")
const fileUpload = require("express-fileupload")
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors");
app.use(cors())
app.options('*', cors());
// const sequelize = require("./connection")
const userVazhippadRoutes = require("./routes/userVazhippad");
const vazhippadRoutes = require("./routes/vazhippad");
const familyInfoRoutes = require("./routes/familyInfo")
const fileUploadRoutes = require("./routes/fileUpload")
const serverAgGridRoutes = require("./routes/serverAgGrid")

app.use(express.static("uploads"))
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())
app.use(fileUpload())
app.use("/user-vazhippad",userVazhippadRoutes);
app.use("/vazhippad",vazhippadRoutes);
app.use("/family-info",familyInfoRoutes);
// file upload
app.use("/upload", fileUploadRoutes)
// server side ag grid
app.use("/serverAgGrid",serverAgGridRoutes);
app.listen(5000);
// sequelize.sync({force:true}).then((result) => {
//     app.listen(5000);
// }).catch(error => {
//     console.log(error);
// })
