module.exports = (app, route, payload) =>{
  console.log('\x1b[43m\x1b[34m%s\n\x1b[0m',route,payload);
  app.get(route, function (req, res) {
    res.send(payload);
  });
};
