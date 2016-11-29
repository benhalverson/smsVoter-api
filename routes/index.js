import utils from '../utils';
import config from '../config';
import twilio from 'twilio'(config.twilio.sid, config.twilio.key);
import events from '../events';

twilio.messages.create({
  to: '',
  from: '',
  body: 'Hello World'
}, (err, message) => {
  console.log(message.sid);
})
// post new vote by SMS
exports.voteSMS = (request, response) => {

}
