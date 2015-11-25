// mediator.js
var channels = {};
export function subscribe(channel, subscriber) {
  if (!channels[channel]) channels[channel] = [];
  channels[channel].push(subscriber);
}
export function publish(channel, message){
  if (!channels[channel]) return;
  channels[channel].forEach(function(subscriber) {
    subscriber.call(subscriber, message);
  });
}
