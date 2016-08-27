module.exports = function () {
    this.get = function (url, done) {
        if(_.isFunction(url)) {
            done = url;
            url = null;
        }
        url = UrlJoin(this.url, url || "/");
        Request.get(url, {json: true}, function (err, res, body) {
            if(err) return done(err);
            done(null, body);
        });
    }
};