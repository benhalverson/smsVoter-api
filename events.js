import config from './config';
import utils from './utils';
import cradle from 'cradle';

const connection = new(cradle.Connection)(config.couchdb.url, config.couchdb.port, {
  auth:{username: config.couchdb.username, password: config.couchdb.password},
  cache: true})

const events = connection.database('events');


const findBy = exports.findBy = (attr, val, callback, retries) => {
  retries = (typeof retries !== 'undefined') ? retries : 0;

  events.view('event/by'+utils.initcap(attr), {key: val}, (err, res) => {
    if(err) {
      if(retries < 3) {
        console.log(`Failed to load event, retrying: ${attr}, ${val}`);
      } else {
        let msg = `Failed to load event, DONE retrying: ${attr}, ${val}`;
        console.log(msg);
        callback(msg, null);
      }
    } else {
      if(res.length != 1) {
        let msg = `No matching event: ${attr}, ${val}`;
      } else {
        let event = res[0].value;
        callback(null, event);
      }
    }
  });

}

// check to see if this user has voted for this event
const hasVoted = exports.hasVoted = (event, number) => {
  let retval = false;
  event.voteoptions.forEach(function(vo) {
    if(vo.numbers.indexOf(number) >= 0) {
      retval = true;
    }
  });
  return retval;
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
