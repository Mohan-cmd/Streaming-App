import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { CreateFunction } from "@testing-library/react";
import Login from "./Login";
import Browse from "./Browse";

const Body = () =>{
    
    const appRouter = createBrowserRouter([
        {
          path:"/",
          element:<Login/>
        },
        {
          path:"/browse",
          element:<Browse/>
        }
      ]);



      return(
        <RouterProvider router={appRouter}/>
      )
}

export default Body;