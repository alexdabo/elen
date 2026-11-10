import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@layout";
import { DeveloperPage, FormalitiesInfoPage, FormalitiesLayout, FormalitiesPage, FormalityCertificatePage, FormalityDetail, FormalityFormPage, FormalityPaymentPage, FormalityReview, HomePage, LandingPage } from "@page";
import { FORMALITIES_CERTIFICATE_PATH, FORMALITIES_CREATE_PATH, FORMALITIES_DETAIL_PATH, FORMALITIES_INFO_PATH, FORMALITIES_INPERSON_PAIMENT_PATH, FORMALITIES_ONLINE_PAIMENT_PATH, FORMALITIES_PATH, FORMALITIES_REVIEW_PATH, HOME_PATH, INFO_PATH} from "@config";
import { FormalityPaymentInPersonPage } from "../pages/formalities/PaymentInPerson";



// Define your routes here
export const router = createBrowserRouter([
  {
    element: <MainLayout isContainer />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },]
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: HOME_PATH,
        element: <HomePage />,
      },
      {
        path: INFO_PATH,
        element: <DeveloperPage />,
      },

      // CRUD for formalities
      {
        path: FORMALITIES_PATH,
        element: <FormalitiesLayout />,
        children: [
          {
            index: true,
            element: <FormalitiesPage />
          },
          {
            path: FORMALITIES_INFO_PATH,
            element: <FormalitiesInfoPage />
          },
          {
            path: FORMALITIES_CREATE_PATH,
            element: <FormalityFormPage />
          },
          {
            path: FORMALITIES_REVIEW_PATH,
            element: <FormalityReview />
          },
          {
            path: FORMALITIES_DETAIL_PATH,
            element: <FormalityDetail />
          },
          {
            path: FORMALITIES_ONLINE_PAIMENT_PATH,
            element: <FormalityPaymentPage />
          },
          {
            path: FORMALITIES_INPERSON_PAIMENT_PATH,
            element: <FormalityPaymentInPersonPage />
          },
          {
            path: FORMALITIES_CERTIFICATE_PATH,
            element: <FormalityCertificatePage />
          },

        ],
      },
    ],
  },
]);