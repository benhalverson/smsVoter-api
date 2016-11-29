import config from './config';
import utils from './utils';
import mongoose from 'mongoose';


const events = mongoose.connect(config.mongoose.url, (error) => {
  if(error) {
    console.log('An error occured', error);
  }
});


//TODO query events based on either shortname or phonenumber (both are unique keys)
const findBy = exports.findBy = (attr, val, callback, retries) => {
  let retries = (typeof retries !== 'undefined') ? retries : 0;


}

// check to see if this user has voted for this event
const hasVoted = exports.hasVoted = () => {

}

// persist the vote to the DB

const saveVote = exports.saveVote = (event, vote, from, callback) => {
  let index = vote - 1;

  event.voteoptions[index].votes++;
  event.voteoptions[index].numbers.push(from);

  event.save(event._id, event, (err, res) => {
    if(err) {
      let msg = 'Failed to save vote for event id' + event._id + '. ' + JSON.stringify(err);
      console.log(msg);
      callback(msg, null);
    } else {
      callback(null, event.voteoptions[index]);
    }
  });
};
