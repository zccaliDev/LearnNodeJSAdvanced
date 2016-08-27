
module.exports = function () {
  var services = Util.requireDir("./services/resources");
  var BaseApi = require("./base");
  services = _.mapValues(services, function (fn, key) {
    var baseApi = new BaseApi();

    fn = new fn();
    fn.url = "http://192.168.2.246:9000/" + key;
    // _.each(baseApi, function (val, key) {
    //   fn[key] = val;
    // });
    return _.merge(fn, baseApi);
  });
  return services;
}
