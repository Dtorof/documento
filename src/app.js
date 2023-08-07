import express from "express";
import morgan from "morgan";
import cors from 'cors';
import bodyParser  from 'body-parser';
import helmet from 'helmet';
import { usersRouter } from './routes/users.route.js';
import { loginRouter } from './routes/auth.route.js';
import { statusRouter } from './routes/status.route.js';
import {documentTypeRouter} from './routes/documentType.route.js';
import {departmentRouter} from './routes/department.route.js';
import {usertypeRouter} from './routes/userTypes.route.js';
import {digitalDocumentsRouter} from './routes/digitalDocument.routes.js'

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

// Configurar Multer para manejar los archivos adjuntos

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json())
app.use(usersRouter);
app.use('/login', loginRouter)
app.use(statusRouter)
app.use(documentTypeRouter)
app.use(departmentRouter)
app.use(usertypeRouter)
app.use(digitalDocumentsRouter)

export default app;
