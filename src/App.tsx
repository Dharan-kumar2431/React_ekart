import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login_component/Login";
import Signup from "./Signup_component/Signup";
import Landingpage from "./Landing_cpmponent/Landingpage";
import { useContext, useState, useCallback } from "react";
import {
  LoginContext,
  LoginContextProvider,
  LoginnameContextProvider,
} from "./Context_component/Logincontext";

interface LoginDetails {
  username: string;
  password: string;
}

 const logindata: LoginDetails[] = [
  {
    username: "person1@gmail.com",
    password: "person1",
  },
  {
    username: "person2@gmail.com",
    password: "person2",
  },
  {
    username: "person3@gmail.com",
    password: "person3",
  },
  {
    username: "person4@gmail.com",
    password: "person4",
  },
  {
    username: "person5@gmail.com",
    password: "person5",
  }
];



function App() {

  const [newUserData, setNewUserData] = useState(logindata);
  console.log("newUserData", newUserData);

  const updateuserData = (values:any) => {
    const updateduserData = [...newUserData, values];
    setNewUserData(updateduserData);
  };
  return (
    <LoginContextProvider value={{newUserData, updateuserData}}>
      <div>
        <Router>
          <Routes>
            <Route index Component={Login} />
            <Route path="/signup" Component={Signup} />
            <Route path="/landingpage" Component={Landingpage} />
          </Routes>
        </Router>
      </div>
    </LoginContextProvider>
  );
}

export default App;
