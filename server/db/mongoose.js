const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:projectbid@projectbid-cluster.jbt51.mongodb.net/hrm", {
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



