import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeContainer from './Containers/HomeContainer'
import EditCandidate from './Components/Home/EditCandidate';
import LayoutContainer from './Components/Layout/Layout';
import {  useState } from 'react';


function App() {
  const [toggleFlag, setToggleFlag] = useState('');
  const callAllProps = (id) =>{
    setToggleFlag('thus '+id);
    console.log(toggleFlag)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutContainer methodcall={callAllProps} />} onClick>
          <Route index element={<HomeContainer />} />
          <Route path='/EditCandidate' element={<EditCandidate Passid={toggleFlag}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
