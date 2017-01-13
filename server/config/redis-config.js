/**
 * Created by deepcoder on 29/12/16.
 */
const redis = require('redis');
const client = redis.createClient();
client.on('connect', () =>{
  console.log('Redis Connected');
});

module.exports = {client};