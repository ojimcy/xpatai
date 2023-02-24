const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const bodyParser = require("body-parser");
const Handlebars = require('handlebars');
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

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

app.use('/', require('./routes/index'));
app.use('/dashboard', require('./routes/index'));

const PORT = 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
