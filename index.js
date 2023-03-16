const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const bodyParser = require("body-parser");
const Handlebars = require('handlebars');
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const authRoute = require('./routes/auth')
const homeRoute = require('./routes/index')

const app = express();

//Handlebars
app.engine(
  '.hbs',
  engine({
    defaltLayout: 'layout',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    extname: '.hbs',
  })
);
app.set("view engine", ".hbs");

app.use(bodyParser.urlencoded({ extended: false }));

// set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use('/', homeRoute);

app.use('/', authRoute)

const PORT = 3000;
app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));
