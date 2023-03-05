import './App.css';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import Restlist from './Componets/Restlist';
import Viewrest from './Componets/Viewrest';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Restlist/>} />
          <Route path='/viewrest/:id' element={<Viewrest/>} />
        </Routes>
        <Footer/>

      
       
      
    </div>
  );
}

export default App;
