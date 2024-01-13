import { createBrowserRouter } from "react-router-dom";
import Button from "../TeamButton/Button";
import Title from "../TeamButton/Title";
import Main from "../LayOut/Main";
import Home from "../Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'button',
            element:<Button></Button>
        },
        {
            path:'title',
            element:<Title></Title>
        },
      ]
    },
  ]);