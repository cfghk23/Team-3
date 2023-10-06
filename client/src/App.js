import "./App.css";
import { Route, Routes } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

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
]);

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

// import './App.css';

// // We use Route in order to define the different routes of our application
// import { Route, Routes } from "react-router-dom";

// // We import all the components we need in our app
// import Navbar from "./components/navbar";
// import RecordList from "./components/recordList";
// import Edit from "./components/edit";
// import Create from "./components/create";
// import Dashboard from './components/reusable/dashboard';

// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route exact path='/' element={<RecordList/>}/>
//         <Route exact path='/edit/:id' element={<Edit/>}/>
//         <Route exact path='/create' element={<Create/>}/>
//         <Route exact path='/dashboard' element={<Dashboard/>}/>
//       </Routes>
//       {/* <h1 className=' text-3xl font-bold underline mt-10'>
//         Hello World!
//       </h1> */}
//     </div>
//   );
// }

// export default App;
