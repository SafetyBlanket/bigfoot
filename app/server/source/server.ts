import Http from 'http';
import Express from 'express';
import BodyParser from 'body-parser';
import Path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';
import swaggerize from 'swaggerize-express';
import swaggerUiExpress from 'swagger-ui-express';

dotenv.config();

const App = Express();
const Server = Http.createServer(App);
const swaggerDocument = require(`${__dirname}/config/swagger.json`);

App.use(BodyParser.json());

App.use(BodyParser.urlencoded({
    extended: true
}));

App.use(morgan('combined'));

App.use(swaggerize({
    api: Path.resolve(`${__dirname}/config/swagger.json`) as any,
    handlers: Path.resolve(`${__dirname}/routes`)
}));

App.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));

Server.listen(3000, () => {
    const address = (Server.address() as any).address;
    const port = (Server.address() as any).port;

    (App as any).swagger.api.host = `${address}:${port}`;

    /* eslint-disable no-console */
    console.log(`App running on ${address}:${port}`);
    /* eslint-disable no-console */
});
