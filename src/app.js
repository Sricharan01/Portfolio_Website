const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
require("./db/conn1");
const Register = require("./models/register");
const Subscribe = require("./models/subscribe");

const port = process.env.PORT || 3000;

//setting the path
const staticpath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const images_path = path.join(__dirname, "../public/images");


app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", template_path);
app.use(express.static(images_path));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/Service", (req, res) => {
    res.render("Service");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.use(express.urlencoded({extended:true}));

app.post("/contact", async (req, res) =>{
    try {
        const workerrecord = new Register({

            firstname: req.body.firstname,
            lastname: req.body.lastname,
            country: req.body.country,
            enteremail: req.body.enteremail,
            phoneNumber: req.body.phoneNumber,
            subject: req.body.subject
            
        });
        const workerstatus = await workerrecord.save();
        res.send("Contact form submitted succesfully");
    
        
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post("/", async (req, res) =>{
    try {
        const subscriberrecord = new Subscribe({

            subscribe:req.body.subscribe
            
        });
        const subscriberstatus = await subscriberrecord.save();
        res.send("You Subscribed to our News Letter");
    
        
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post("/Service", async (req, res) =>{
    try {
        const subscriberrecord = new Subscribe({

            subscribe:req.body.subscribe
            
        });
        const subscriberstatus = await subscriberrecord.save();
        res.send("You Subscribed to our News Letter");
    
        
    } catch (error) {
        res.status(400).send(error);
    }
});


//server
app.listen(port, () =>{console.log(`server is running at port no ${port}`);})

