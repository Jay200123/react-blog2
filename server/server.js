const app = require('./app');

const connectDatabase = require("./config/database")

const path = require("path")



const dotenv = require('dotenv');



dotenv.config({path: './config/.env'});
connectDatabase();



app.listen(process.env.PORT, () => {

	console.log(`server started on port:' ${process.env.PORT} in ${process.env.NODE_ENV} mode`);

});