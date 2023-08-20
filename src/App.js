import logo from './logo.svg';
import ListTodo from  './views/Todos/ListToDo';
import Nav from './views/Nav/Nav';
import Home from './views/Example/Home'
import About from './views/Example/About';
import User from './views/User/User';
import DetailUser from './views/User/DetailUser';


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
            <Route path="/" exact='true' element={<Home/>}/>
            <Route path="/todo" element={<ListTodo/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/user" exact='true' element={<User/>} />
            <Route path="/user/:id" element={<DetailUser/>} />
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
