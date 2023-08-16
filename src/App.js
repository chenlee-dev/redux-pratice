import logo from './logo.svg';
import ListTodo from './Todos/ListToDo';
import Nav from './Nav/Nav';
import Home from './Nav/Example/Home';
import About from './Nav/Example/About';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
    <>
       <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/todo" element={<ListTodo/>} />
            <Route path="/about" element={<About/>} />
          </Routes>

        </header>

        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"/>
      </div>  
      </>
    </BrowserRouter>
    
  );
}

export default App;
