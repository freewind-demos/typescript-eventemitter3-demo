import EventEmitter from 'eventemitter3';

const eventEmitter = new EventEmitter();
eventEmitter.on('hello', (message) => {
  console.log("on hello event:", message);
})

eventEmitter.emit('hello', 'world');
