let config = {};

config.mongodb = {};
config.twilio = {};

config.mongodb.url = 'mongodb://localhost/smsData';
config.mongodb.port = 27017;
config.mongodb.username: '';
config.mongodb.password: '';

config.twilio.sid = 'ACxxx';
config.twilio.key = 'yyy';
config.twilio.smsWebhook = 'http://localhost/vote/sms';
config.twilio.voiceWebhook = 'http://localhost/vote/voice';
config.disableTwilioSigCheck = false;

module.exports = config;
