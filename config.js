let config = {};

config.couchdb = {};
config.twilio = {};

config.couchdb.url = 'couchdb://localhost/smsData';
config.couchdb.port = 5984;
config.couchdb.username = 'admin';
config.couchdb.password = 'apple123';

config.twilio.sid = 'ACxxx';
config.twilio.key = 'yyy';
config.twilio.smsWebhook = 'http://localhost/vote/sms';
config.twilio.voiceWebhook = 'http://localhost/vote/voice';
config.disableTwilioSigCheck = false;
module.exports = config;
