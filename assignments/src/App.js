import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root_layout from "./components/Root-layout/Root_layout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Signup from "./components/Signup/Signup";
import Success from "./components/Success/Success";
import Todolistapp from "./components/Todolistapp/Todolistapp";
import UsersDashboard from "./components/UsersDashboard/UsersDashboard";
import Body from "./components/Body/Body";


function App() {
  let router = createBrowserRouter([{
    path:'',
    element: <Root_layout/>,
  children:[
  {
    path:'main',
    element:<Body/>
  },
  {
    path:'login',
    element: <Login/>
  },
  {
    path:'home',
    element: <Home/>
  },
  {
    path:'blog',
    element: <Blog/>
  },
  {
    path:'about',
    element: <About/>
  },
{
  path:'signup',
  element:<Signup/>,
},
    { path:'signup/success',
    element:<Success/>
    },

{
  path:'main/todolist',
  element:<Todolistapp/>
},
{
  path:'usersdashboard/:username',
  element:<UsersDashboard/>
}]}])
  
  return (
    
    <div>
    <RouterProvider router ={router} />
     
    </div>
   
  );
}

export default App;
