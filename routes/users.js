module.exports = function (app) {

  app.get("/", function (req, res) {
    Services.customer.list(function (err, customers) {
      res.json(customers)
    })
  })

  app.get("/money", function (req, res) {
    Services.money.list(function (err, monies) {
      res.json(monies)
    })
  })

  return app;
}
