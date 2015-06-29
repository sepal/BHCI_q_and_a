

exports.getParams = function() {
  let parameters = {};
  let params = window.location.search.replace("?", "");
  params = params.split('&');

  for(let i in params) {
    let param = params[i].split('=');
    parameters[param[0]] = param[1];
  }

  return parameters;
};

exports.set = function(page, parameters) {
  let params = [];

  for (let i in parameters) {
    params.push(`${i}=${parameters[i]}`);
  }
  params = params.join('&');
  window.location = `${page}?${params}`;
};

exports.create = function(page, parameters) {
  let params = [];

  for (let i in parameters) {
    params.push(`${i}=${parameters[i]}`);
  }
  console.log(params);
  params = params.join('&');
  console.log(params);

  return `${page}?${params}`;
};
