import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Delete from './Pages/Delete/Delete';
import Blogs from './Pages/Blogs/Blogs';
import Inventory from './Pages/Inventory/Inventory';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory></Inventory>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="/delete" element={
          <RequireAuth>
            <Delete></Delete>
          </RequireAuth>
        }></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
