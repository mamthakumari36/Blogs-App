import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import BlogLists from "./Components/BlogLists";
import UserList from "./Components/UserList";
import DataListProvider from "./Store/Blog-list-store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogComments from "./Components/BlogComments";
import UserDetails from "./Components/UserDetails";
import UserComments from "./Components/UserComments";
import BlogCreatedByUser from "./Components/BlogCreatedByUser";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavBar /><Home /></>
    },
    {
      path: "/posts",
      element: <><NavBar /><BlogLists /></>
    },
    {
      path: "/user",
      element: <><NavBar /><UserList/></>
    },
    {
      path: "/posts/:pid/comments",
      element: <><NavBar/><BlogComments/></>
    },
    {
      path: "/users/:pid",
      element: <><NavBar/><UserDetails/></>
    },
    {
      path: "/users/:pid/comments",
      element: <><NavBar/><UserComments/></>
    },
    {
      path: "/users/:pid/posts",
      element: <><NavBar/><BlogCreatedByUser/></>
    }
  ])

  return (
    <>
      <DataListProvider>
        <RouterProvider router={router} />
      </DataListProvider>
    </>
  )
}

export default App;
