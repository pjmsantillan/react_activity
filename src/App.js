import Navigation from './components/Navigation';
import Form from './components/Form';

import User from './components/layout/users/user';
import About from './components/About';
import Contact from './components/Contact';
import Todo from './components/Todo';


import  { Route, Routes } from 'react-router-dom';

const App = () => {
 

  return (
    <Routes>
      <Route path='/home' element={<User />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/todo' element={<Todo />} />
      
    </Routes>
  );

}

export default App;
