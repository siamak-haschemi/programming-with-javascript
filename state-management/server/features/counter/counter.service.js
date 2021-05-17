let counter = 0;

module.exports = {
  incrementByValue,
  reset
};

async function incrementByValue(req) {
  counter += req.body.value;
  return {value: counter};
}

async function reset(req) {
  counter = 0;
  return {value: counter};
}