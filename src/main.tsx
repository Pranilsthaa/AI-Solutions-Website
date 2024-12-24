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
import EventDetailPage from "./Pages/-Events/EventDetail/index.tsx";
import ArticleSection from "./Pages/Article/Articles.tsx";
import ArticleDetailsPage from "./Pages/Article/articleDetail.tsx";
import PostArticle from "./Pages/Admin/Article/postArticle.tsx";
import AdminAccountList from "./Pages/Admin/account-list/adminAccountList.tsx";
import { AdminLoginForm } from "./Pages/Admin/adminLogin/adminLogin.tsx";
import ProtectedRoute from "./hooks/checkAuth.tsx";
import { Toaster } from "sonner";
import CheckSuperAdmin from "./hooks/checkSuperAdmin.tsx";

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
        {
          path: "/events/:id",
          element: <EventDetailPage />,
        },
        {
          path: "/articles",
          element: <ArticleSection />,
        },
        {
          path: "/articles/:slug",
          element: <ArticleDetailsPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <AdminLoginForm />,
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute>
          <Sidebar />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/admin",
          element: <AdminDashboard />,
        },
        {
          path: "accounts",
          element: (
            <CheckSuperAdmin>
              <AdminAccountList />
            </CheckSuperAdmin>
          ),
        },
        {
          path: "events",
          element: <ViewEvents />,
        },
        {
          path: "events_create",
          element: <CreateEvent key="create-event" />,
        },
        {
          path: "events-edit/:id",
          element: <CreateEvent key="view-event" />,
        },
        {
          path: "inquiries",
          element: <ClientInquiries />,
        },
        {
          path: "feedback",
          element: <ClientFeedbacks />,
        },
        {
          path: "post_article",
          element: <PostArticle />,
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
    <Toaster />
  </StrictMode>
);
