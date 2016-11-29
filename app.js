// const bodyParser = require('body-parser');

// const routes = require('./routes');
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(morgan('dev', {
  skip: function (req, res) { return res.statusCode < 400 }
}));
app.use(bodyParser.json())

//TODO fix routes
// app.post('/vote/sms', routes.voteSMS);

app.get('/', (req, res) => {
  res.send('API Working');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port, ${PORT}`);
})
