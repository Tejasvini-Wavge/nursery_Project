import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from "../src/views/Home/Home"
import AddPlant from "../src/views/AddPlant/AddPlant"
import UpdatePlant from "../src/views/UpdatePlant/UpdatePlant"



const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
{
  path:"/",
  element:<Home/>
},
{
  path:"/add",
  element:<AddPlant/>
},
{
  path:"/update/:id",
  element:<UpdatePlant/>
},
{
path:"*",
  element:<h1>404 Not Found</h1>
}
])

root.render((<div>
  <RouterProvider router={router}/>

  </div>));