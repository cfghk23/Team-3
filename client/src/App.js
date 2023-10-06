/* eslint-disable no-unused-vars */
import React from "react"
import "./style.css"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "./helpers/AnimationRevealPage"
import Hero from "./components/hero/FullWidthWithImage"
import Login from "./pages/Login"
import BlogIndexPage from "./pages/BlogIndex"
import ContestPage from "./pages/ContestPage"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Quiz from "./components/Quiz";
import Dashboard from "./components/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/courses",
    element: <BlogIndexPage />,
  },
  {
    path: "/contest",
    element: <ContestPage />,
  },
]);

//  <Login />
//   // <BlogIndexPage/>
//   <ContestPage/>
function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* {/* Hello World
      <Switch>
          <Route path='/'>
            <div>
              Landing
            </div>
          </Route>

      </Switch> */}
      {/* <Routes>
        <Route exact path='/' Component={<div>Landing Page</div> }/>
        <Route path='/quiz' Component={<Quiz/>}/>
        <Route path='/admin' Component={<div>Admin</div>}/>
      </Routes> */}
    </div>
  );
}

export default App;

// // export default App;
// /* eslint-disable no-unused-vars */
// import React from "react"
// import "./style.css"
// import "tailwindcss/lib/css/preflight.css"
// import AnimationRevealPage from "./helpers/AnimationRevealPage"
// import Hero from "./components/hero/FullWidthWithImage"
// import Login from "./pages/Login"
// import BlogIndexPage from "./pages/BlogIndex"
// import ContestPage from "./pages/ContestPage"
// function App() {
//   return (
//   //  <Login />
//   // <BlogIndexPage/>
//   <ContestPage/>
//   )
// }

// export default App
