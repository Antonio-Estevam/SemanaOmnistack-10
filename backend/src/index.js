const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omi10:omi10@cluster0-uyusg.mongodb.net/omi10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
app.use(cors());
app.use(express.json());  //use siginifica que vai ser valido para todas as rotas da aplicação 
app.use(routes);

//MÉTODOS HTTP: Get> pegar informação, Post> criar informação, Put> editar informação, Delete> excluir informação  
//TIPOS DE PARAMETROS: 
    //Query  Params>  *req.query* serve para filtar um parametro 
    //Route  Params>  *req.params* identificar um recurso na alteração ou remoção
    //body > *request.body* Dados para criação ou alteração de regidtro 



app.listen(3333);//porta que sera acessada o servidor 