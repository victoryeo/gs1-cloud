const gs1apiRoutes = require('./gs1api_routes');

module.exports = function(app, db) {
  gs1apiRoutes(app, db);
};
