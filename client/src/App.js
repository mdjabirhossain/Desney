import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/sign-in/sign-in.component";
import NavigationUpperBar from "./routes/navigation/navigation-upper.component";
import Home from "./routes/home/home.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigationUpperBar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
