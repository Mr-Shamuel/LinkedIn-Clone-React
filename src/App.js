import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import SignIn from "./Pages/Sign In page/SignIn";
import SignUp from "./Pages/Sign Up/SignUp";
import { useEffect, useState } from "react";
import Preloading from "./Components/Loding/PreLoading/Preloading";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">


      {isLoading ? <Preloading></Preloading>
        : (<Routes>
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />

          <Route path='/home' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />

          <Route path='*' element={<NotFound />} />




        </Routes>)}

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes> */}


    </div>
  );
}

export default App;
