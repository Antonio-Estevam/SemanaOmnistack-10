import React,{ useState, useEffect} from 'react';
import api from './services/api';
import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';
import DevItem from './componets/Devitem';
import DevForm from './componets/DevForm';
//Três conceitos basicos do React:
  // Componente>  Bloco insolado de HTML, CSS, ou JS, o qual não interfere no restante da aplicação 
  // Esado>       informações mantidas pelo componrnte (lembrar IMUTABILIDADE)
  // Propriedade> Informações que um componente pai parassa para o componente filho 
function App() {
  const [devs, setDevs] = useState([]);

  useEffect(()=>{
    async function loadDev(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDev();
  }, []);

  async function hendleAddDev(data){
    const response = await api.post('/devs',data);

      setDevs([...devs, response.data]);
  }
  return (
    <div id="app">
       <aside>
         <strong>Cadastrar</strong>
         <DevForm onSubmit={hendleAddDev}/> 
       </aside>
       
       <main>
         <ul>

         {devs.map( dev => (
            <DevItem  key={dev._id}  dev={dev} />
         ))}                
         </ul>
       </main>
    </div>
    
  );
}

export default App;
