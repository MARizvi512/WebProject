import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import HomeContainer from './Containers/HomeContainer'
import EditCandidate from './Components/Home/EditCandidate';
import Layout from './Components/Layout/Layout';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeContainer />} />
          <Route path='/EditCandidate' element={<EditCandidate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
