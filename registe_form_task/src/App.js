import { Fragment } from 'react';
import {Routes ,Route} from 'react-router-dom';
import Login from './components/pages/register/Login';
import SignUp from './components/pages/register/SignUp';
import Register from './components/pages/register/Register';

function App() {
  return (
    <Fragment>
      <Routes >
        <Route path="/" element={<Login/>} />
        <Route path="/Sign_Up" element={<SignUp/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
    </Fragment>
  );
}

export default App;
