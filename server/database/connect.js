const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect(Your MongoDB url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{console.log("connected to db")}).catch((err)=>{
    console.log(err);
})
}
module.exports=connectToDb;