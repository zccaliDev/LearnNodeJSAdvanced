module.exports = function () {
  this.list = function (done) {
    this.get("/", done);
  }
}
