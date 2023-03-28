const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect('mongodb+srv://nitingogula:nitin1023@cluster0.vtyfuhx.mongodb.net/MalwareReact?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{console.log("connected to db")}).catch((err)=>{
    console.log(err);
})
}
module.exports=connectToDb;