import { Navigate, useRoutes } from "react-router-dom";
import RootLayout from "./RootLayout";
import Notes from "./Notes";
import Reminder from "./reminder";
import Archive from "./Archive";
import Trash from "./Trash";

const RouterPage = () => {
    return useRoutes([
        {
          path: "/",
          element: <RootLayout />,
          children: [
            {
              path: "",
              element: <Notes/>,
            },
            {
              path: "/Notes",
              element:<Notes/>,
            },
            {
              path: "/reminder",
              element: <Reminder/>,
            },
            {
              path: "/archive",
              element:<Archive/>,
            },
            {
              path: "/trash",
              element: <Trash/>,
            },
            {
              path: "*",
              element: <Notes/>,
            },
          ],
        },
      ]);
}

export default RouterPage