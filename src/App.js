import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Main from './Main';
import Description from './Description';

function App() {
  
 
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/main' element={<Main/>}/>
    <Route path='/description' element={<Description/>}/>


      
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
