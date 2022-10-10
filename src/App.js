import Profile from "./views/Profile";
import Inventory from './views/Inventorys'
import NewInv from "./views/NewInv";
import Home from "./views/Home";
import CarSingle from "./views/CarSingle";
import { AuthContext } from "./contexts/AuthProvider";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useContext } from 'react' 

function App() {
  const { login, logout, user } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/inventory">Inventory</Link>
            <Link className="nav-link" to="/profile">Profile</Link>
            <Link className="nav-link" to="/newinv">New Inventory</Link>
          </div>
          <div className="navbar-nav ml-auto">
            {
              (user.loggedIn) ?
              <button onClick={logout} className="btn btn-primary">Logout</button>
              :
              <button onClick={login} className="btn btn-primary">Login</button>
            }

          </div>
        </div>
      </nav>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars">
            <Route path=":id" element={<CarSingle />} />
          </Route>
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newinv" element={<NewInv />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;