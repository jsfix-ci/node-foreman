var assert = require('assert');
var envs   = require('../lib/envs');

var json = {
  "top": {
    "middle": {
      "bottom": "value"
    },
    "other": [ "zero", "one", "two" ]
  },
  "last": 42
};
var flattened = {
  'LAST': 42,
  'TOP_MIDDLE_BOTTOM': 'value',
  'TOP_OTHER_0': 'zero',
  'TOP_OTHER_1': 'one',
  'TOP_OTHER_2': 'two',
};

var dumped = [
  'LAST=42',
  'TOP_MIDDLE_BOTTOM=value',
  'TOP_OTHER_0=zero',
  'TOP_OTHER_1=one',
  'TOP_OTHER_2=two',
].join('\n') + '\n';

assert.deepEqual(envs.flattenJSON(json), flattened);
assert.equal(envs.dumpEnv(flattened), dumped);
