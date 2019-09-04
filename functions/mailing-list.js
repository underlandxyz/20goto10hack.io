const Airtable = require('airtable');
const { AIRTABLE_KEY } = process.env;
const base = new Airtable({apiKey: AIRTABLE_KEY}).base('appFgc1lyp34ZmAYB');

exports.handler = function(event, context, callback) {
  const { first, last, email } = JSON.parse(event.body);

  base('Mailing List').create({
    "First Name": first,
    "Last Name": last,
    "Email Address": email,
    "Originator": [
      "20 GO TO 10 Site"
    ]
  }, (err, record) => {
    if(err) {
      callback(err);
      return;
    }
    callback(null, {
      statusCode: 200,
      body: record.getId(),
    });
  });
}