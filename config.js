let config = {};

config.couchdb = {};
config.twilio = {};

config.couchdb.url = 'couchdb://localhost/smsData';
config.couchdb.port = 5984;
config.couchdb.username = process.env.couchdb.username || 'admin';
config.couchdb.password = process.env.couchdb.password || 'apple123';

config.twilio.sid = process.env.twilio.sid || 'ACxxx';
config.twilio.key = process.env.twilio.key || 'yyy';
config.twilio.smsWebhook = process.env.twilio.smsWebhook || 'http://localhost/vote/sms';
config.twilio.voiceWebhook = process.env.twilio.voiceWebhook || 'http://localhost/vote/voice';
config.disableTwilioSigCheck = false;
module.exports = config;
