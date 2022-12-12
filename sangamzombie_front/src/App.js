import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/index';
import Home from './components/Home/index';
//import Nav from './Nav/App';
import './App.css';




function App() {
  return(
    <Routes>
      <Route path="" element={<Layout/>}>
        <Route index element={<Home />}></Route>
      </Route>

    </Routes>      
  )
}

export default App;
