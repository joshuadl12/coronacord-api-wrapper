const fetch = require("node-fetch");

module.exports.all = async () => {
  const res = await fetch(`http://localhost:3000/api/covid/all`).then(r => r.json());
  return res;
}

module.exports.countries = async () => {
  const res = await fetch(`http://localhost:3000/api/covid/countries`).then(r => r.json());
  return res;
};

module.exports.states = async () => {
  const res = await fetch("http://localhost:3000/api/covid/states").then(r => r.json());
  return res;
};
