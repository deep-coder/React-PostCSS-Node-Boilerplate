/**
 * Created by deepcoder on 15/12/16.
 */
const Promise = require("bluebird");
Promise.promisifyAll(require("mongoose"));
Promise.promisifyAll(require('fs'));