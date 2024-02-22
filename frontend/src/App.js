import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

const App = () => { 
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
              path = "/"
              element = {<Home />}
            />
            <Route
              path = "/login"
              element = {<Login />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
