const express = require('express');
const events = require('events');
const app = express();
const enableWs = require('express-ws')(app);
const port = 3001;

const event = new events.EventEmitter();

function subscribeOnEvent(webs) {
  event.on('generateCourses', function(data) {
    webs.send(data);
  });
}

let initCurrency = {
  base: 0,
  exchangeRates: {
    dollarCourse: Math.round((Math.random() * (3 - 2) + 2) * 100) / 100,
    euroCourse: Math.round((Math.random() * (3 - 2) + 2) * 100) / 100,
    poundCourse: Math.round((Math.random() * (3 - 2) + 2) * 100) / 100,
  },
  type: 'baseCourse',
}

app.get('/api', function(req, res) {
  res.send('Work!');
});


setInterval(() => {
  const randomCurrency = [
    {
      type: 'dollarCourse',
      dollarCourse: Math.round((Math.random() * (3 - 2) + 2) * 100) / 100,
    },
    {
      type: 'euroCourse',
      euroCourse: Math.round((Math.random() * (3 - 2) + 2) * 100) / 100,
    },
    {
      type: 'poundCourse',
      poundCourse: Math.round((Math.random() * (3 - 2) + 2) * 100) / 100,
    },
  ];
  event.emit('generateCourses', JSON.stringify(randomCurrency[parseInt(Math.random() * (3 - 0) + 0)]));
}, 10000);

enableWs.getWss().on('connection', (webs) => {
  webs.send('Sending...');
  webs.send(JSON.stringify(initCurrency));
  subscribeOnEvent(webs);
});

app.ws('/api', (webs, req) => {
  webs.on('message', (msg) => {
    webs.send('Sending...');
    webs.send(JSON.stringify(initCurrency));
  });
});

app.listen(port);
