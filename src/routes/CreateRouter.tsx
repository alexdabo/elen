import { createBrowserRouter, Outlet } from 'react-router-dom'
import { MainLayout, PageTransition } from '@layout'
import {
  FORMALITIES_CERTIFICATE_PATH,
  FORMALITIES_CREATE_PATH,
  FORMALITIES_DETAIL_PATH,
  FORMALITIES_INFO_PATH,
  FORMALITIES_INPERSON_PAIMENT_PATH,
  FORMALITIES_ONLINE_PAIMENT_PATH,
  FORMALITIES_PATH,
  HOME_PATH,
  INFO_PATH
} from '@config'
import {
  DeveloperPage,
  FormalitiesProvider,
  FormalitiesInfoPage,
  FormalitiesPage,
  FormalityCertificatePage,
  FormalityDetail,
  FormalityFormPage,
  FormalityPaymentPage,
  FormalityPaymentInPersonPage,
  HomePage,
  LandingPage
} from '@page'

export const router = createBrowserRouter([
  {
    element: <MainLayout isContainer />,
    children: [{ index: true, element: <LandingPage /> }]
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: HOME_PATH,
        element: <PageTransition />, // o envuelve solo HomePage
        children: [{ index: true, element: <HomePage /> }]
      },
      {
        path: INFO_PATH,
        element: <PageTransition />,
        children: [{ index: true, element: <DeveloperPage /> }]
      },
      {
        element: (
          <FormalitiesProvider>
            <Outlet />
          </FormalitiesProvider>
        ),
        children: [
          {
            path: FORMALITIES_PATH,
            element: <PageTransition />,
            children: [
              { index: true, element: <FormalitiesPage /> },
              { path: FORMALITIES_INFO_PATH, element: <FormalitiesInfoPage /> },
              { path: FORMALITIES_CREATE_PATH, element: <FormalityFormPage /> },

              { path: FORMALITIES_DETAIL_PATH, element: <FormalityDetail /> },
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
              }
            ]
          }
        ]
      }
    ]
  }
])
