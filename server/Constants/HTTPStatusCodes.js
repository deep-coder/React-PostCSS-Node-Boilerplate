/**
 * Created by deepcoder on 28/12/16.
 */
const HTTPStatusCode =Object.freeze({
  /* Status Ok 2xx*/
  STATUS_OK :200,
  /* Status Redirection 3xx*/
  /* Status Client Error 4xx*/
  STATUS_BAD_REQUEST: 400,
  /* Status Server Error 5xx*/
  STATUS_INTERNAL_SERVER_ERROR: 500
});

module.exports = HTTPStatusCode;