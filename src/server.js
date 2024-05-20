import express from 'express';
import routes from '../src/routes.js';

const app = express();
const port = '7070';

// LOCAL
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(routes);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`)
});