import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

class App {

    express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();

    }
    middleware(): void {

       this.express.use(logger('dev'));
       this.express.use(bodyParser.json());
       this.express.use(bodyParser.urlencoded({extended: false}));

    }

    routes(): void { 
        let router = express.Router();

        router.get('/', (req, res, next) => {
            res.send(`Ola Mundo!`);
        });

        this.express.use('/', router);
    }

}

export default new App().express;