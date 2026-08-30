import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@layout";
import { HomePage } from "@page";
import { FORMALITIES_CREATE_PATH, FORMALITIES_DELETE_PATH, FORMALITIES_DETAIL_PATH, FORMALITIES_EDIT_PATH, FORMALITIES_PATH, HOME_PATH } from "@config";

// Define your routes here
export const router = createBrowserRouter([
  {
    path:HOME_PATH,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      // CRUD for formalities
      {
        path: FORMALITIES_PATH,
        children: [
          {
            index: true,
            element: <h1>Formalities</h1>
          },
          {
            path: FORMALITIES_CREATE_PATH,
            element: <h1>FormalitiesCreate</h1>
          },
          {
            path: FORMALITIES_DETAIL_PATH,
            element: <h1>FormalitiesDetail</h1>
          },
          {
            path: FORMALITIES_EDIT_PATH,
            element: <h1>FormalitiesEdit</h1>
          },
          {
            path: FORMALITIES_DELETE_PATH,
            element: <h1>FormalitiesDelete</h1>
          },
        ],
      },
    ],
  },
]);