import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from './../layout/Main';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: async () =>{
                  return fetch('https://openapi.programming-hero.com/api/quiz')
                }
              },

        ]
    }
]);