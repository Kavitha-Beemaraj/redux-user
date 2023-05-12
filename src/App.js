import { Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Contact from './components/Contact'


function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/*' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
