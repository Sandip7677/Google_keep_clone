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
          element: <Notes />,
        },
        {
          path: "/Notes",
          element: <Notes />,
        },
        {
          path: "/Reminder",
          element: <Reminder />,
        },
        {
          path: "/Archive",
          element: <Archive />,
        },
        {
          path: "/Trash",
          element: <Trash />,
        },
        {
          path: "*",
          element: <Notes />,
        },
      ],
    },
  ]);
}

export default RouterPage