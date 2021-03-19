
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/contact_list_db',{useNewUrlParser: true});
const db=mongoose.connection;
db.on('error',console.error.bind(console,' error connecting to db '));
db.once('open',function()
{
    console.log('succesfully connected to the database');
});