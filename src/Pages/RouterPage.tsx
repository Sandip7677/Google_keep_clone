import { Navigate, useRoutes } from "react-router-dom";
import RootLayout from "./RootLayout";

const RouterPage = () => {
    return useRoutes([
        {
          path: "/",
          element: <RootLayout />,
          children: [
            {
              path: "",
              element: <Navigate to="Notes" />,
            },
            {
              path: "/Notes",
              element:<Navigate to="Notes" />,
            },
            {
              path: "/reminders",
              element: <Navigate to="reminders" />,
            },
            {
              path: "/archive",
              element:<Navigate to="archive" />,
            },
            {
              path: "/trash",
              element: <Navigate to="trash" />,
            },
            {
              path: "*",
              element: <Navigate to="Notes" />,
            },
          ],
        },
      ]);
}

export default RouterPage