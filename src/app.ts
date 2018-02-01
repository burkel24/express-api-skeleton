import * as bodyParser  from 'body-parser';
import * as express from 'express';
// import * as cookieParser from 'cookie-parser';
// import * as session from 'express-session';

import * as passport from 'passport';

import configurePassport from '../config/passport';
import tokenMiddleware from '../config/tokenMiddleware';

const app = express();

configurePassport(passport);

app.set('host', '0.0.0.0');
app.set('port', process.env.SERVER_PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(session({ secret: process.env.APP_SECRET || 'DEVELOPMENT_SECRET' }));
app.use(passport.initialize());
app.use(passport.session());
// app.use(tokenMiddleware());
// app.use(flash());

// registerRoutes(app, passport);

export default app;