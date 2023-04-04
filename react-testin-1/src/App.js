import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";


const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element= {<Home/>} />
          <Route path="/About" element = {<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
} 
export default App;
