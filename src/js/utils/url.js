

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
  console.log(parameters);
  for (let i in parameters) {
    params.push(`${i}=${parameters[i]}`);
  }
  params.join('&');
  window.location = `${page}?${params}`;
};
