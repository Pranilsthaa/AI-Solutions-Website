import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home/index.tsx";
import Navbar from "@/components/Navbar/index.tsx";
import ContactUs from "./Pages/Contact/index.tsx";
import EventPage from "./Pages/-Events/index.tsx";
import { Sidebar } from "@/components/Sidebar.tsx";
import CreateEvent from "./Pages/Admin/eventss/CreateEvent.tsx";
import ClientInquiries from "./Pages/Admin/inquiry/Inquiry.tsx";
import AdminDashboard from "./Pages/Admin/Dashboard.tsx";
import ClientFeedbacks from "./Pages/Admin/Feedback/Feedback.tsx";
import ViewEvents from "./Pages/Admin/eventss/ViewEvents.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          // loader: teamLoader,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path: "/events",
          element: <EventPage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <Sidebar />,
      children: [
        {
          path: "/admin",
          element: <AdminDashboard />,
        },
        {
          path: "events",
          element: <ViewEvents />,
        },
        {
          path: "events_create",
          element: <CreateEvent />,
        },
        {
          path: "inquiries",
          element: <ClientInquiries />,
        },
        {
          path: "feedback",
          element: <ClientFeedbacks />,
        },
      ],
    },
  ],
  {
    future: {
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
    },
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>
);
