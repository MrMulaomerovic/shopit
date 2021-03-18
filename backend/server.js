const app = require('./app');
const connectDatabase = require('./config/database');

const dotenv = require('dotenv');

//Handele Uncaught exception
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to uncaugth exception');
    process.exit(1)
})

// Seting up config file
dotenv.config({ path: 'backend/config/config.env'});

// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
});

//Handle Unhandeled Promise rejection
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1)
    })
})