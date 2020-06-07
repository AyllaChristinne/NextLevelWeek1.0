import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import {errors} from 'celebrate';


const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());

app.listen(3333);