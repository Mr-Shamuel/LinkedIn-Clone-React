import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import SignIn from "./Pages/Sign In page/SignIn";
import SignUp from "./Pages/Sign Up/SignUp";



function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes>


    </div>
  );
}

export default App;
