const express=require('express');

const port=8000;
const path=require('path');

const db=require('./config/mongoose');
const Contact=require('./config/models/contact');
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
//middeleware1
//app.use(function(req,res,next)
//{ 
  //req.myname="honey";
  //console.log("middleware1 called");
  //next();
//});
//midleware2
//app.use(function(req,res,next)
//{ 
  
 //console.log("middleware2 called");
 //next();

//});
var contact_list=[
{
  name:"vijay",
  phone:"55555"
},
{
    name:"kumar",
    phone:"6666"
  },
  {
    name:"aditya",
    phone:"33333"
  },
  

];




app.get('/',function(req,res)
{
    
    return res.render('home',{var:"my list",
    contact:contact_list});
});
app.get('/profile',function(req,res)
{   
    return res.render('profile',{name:"lets play with ejs"})
});
app.post('/create-contact',function(req,res)
{ 
 // contact_list.push(req.body);
  Contact.create({
    name:req.body.name,
    phone:req.body.phone
  },function(err,newContact)
  {
    if(err)
    {
      console.log('error in creating to a contact');
      return ;
    }
    console.log('*****',newContact);
    return res.redirect('back');
  });
  
});


app.listen(port,function(err)
{
    if(err)
    {
        comsole.log("error on running the server");
        return;
    }
    console.log("server running fine on port ",port);
})