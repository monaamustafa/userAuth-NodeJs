const mongoose = require("mongoose");

exports.connect = () => {
mongoose.connect('mongodb://127.0.0.1:27017/userAuth',(err)=>{
    if(!err) return console.log('DB connected successfully');
    console,log(err)
})
}
// const mongoose = require("mongoose");

// const { MONGO_URI } = process.env;

// exports.connect = () => {
//   // Connecting to the database
//   mongoose
//     .connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     //   useCreateIndex: true,
//     //   useFindAndModify: false,
//     })
//     .then(() => {
//       console.log("Successfully connected to database");
//     })
//     .catch((error) => {
//       console.log("database connection failed. exiting now...");
//       console.error(error);
//       process.exit(1);
//     });
// };