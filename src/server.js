const express=require ('express');
const morgan =require ('morgan')
const mongoose = require ('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/smoothie')
    .then(db => console.log('DB Conect'))
    .catch(err => console.log(err));

//settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/frutas'));
app.use(require('./routes/liquidos'));
app.use(require('./routes/proteinas'));
//Static Files
app.use(express.static(__dirname+'/public'));

//Server is lostening
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
