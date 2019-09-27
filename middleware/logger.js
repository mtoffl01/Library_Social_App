//create your own middleware:
const logger = (req, res, next) => {
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
	next();
}; //this logs to the console the url whenever a request is made on the app

module.exports = logger;