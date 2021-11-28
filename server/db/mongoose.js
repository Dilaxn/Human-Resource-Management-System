const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Viha27:Yashodha1127@cluster0.ohdsu.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-ybd5u0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('mongoDB connected successfully');
}).catch((e) => {
    console.log({message: 'something wrong connecting database server', error: e});
});

// mongoose.connect('mongodb://127.0.0.1:27017/hrm-backend', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(() => {
//     console.log('mongoDB connected successfully');
// }).catch(() => {
//     console.log('something wrong connecting database server');
// });



