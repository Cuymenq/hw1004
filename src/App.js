import Profile from "./views/Profile";
import Inventory from './views/Inventorys'
import NewInv from "./views/NewInv";
import Home from "./views/Home";
import CarSingle from "./views/CarSingle";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/newinv">New Inventory</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars">
          <Route path=":id" element={<CarSingle />} />
        </Route>
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newinv" element={<NewInv />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;