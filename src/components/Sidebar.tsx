import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

const sidebarItems = [
  { name: "Dashboard", href: "/admin" },
  { name: "Client Inquiries", href: "/admin/inquiries" },
  { name: "View Events", href: "/admin/events" },
  { name: "Client Feedback", href: "/admin/feedback" },
  { name: "Create Event", href: "/admin/events_create" },
  { name: "Post Article", href: "/admin/post_article" },
  { name: "Manage Accounts", href: "/admin/accounts" },
];

export function Sidebar() {
  const { pathname } = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const tokenData = localStorage.getItem("token");
  const parsedToken = tokenData && JSON.parse(tokenData);
  if (!parsedToken) return null;
  const isSuperAdmin = parsedToken && parsedToken.role === "superadmin";
  return (
    <div className="flex h-screen">
      <div className="w-64 border-r bg-gray-100/40 dark:bg-gray-800/40">
        <ScrollArea className="h-full py-6">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Admin Panel</h2>
            <div className="space-y-1">
              {sidebarItems.map((item) => {
                if (item.href === "/admin/accounts" && !isSuperAdmin) return;
                return (
                  <Button
                    key={item.href}
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === item.href && "bg-gray-200 dark:bg-gray-700"
                    )}
                  >
                    <Link to={item.href}>{item.name}</Link>
                  </Button>
                );
              })}
              <AlertDialog>
                <AlertDialogTrigger>
                  <button className="absolute bottom-0 right-0 w-full border-2 bg-black text-white font-poppins py-2">
                    Logout
                  </button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>Are you sure?</AlertDialogHeader>
                  <AlertDialogDescription>
                    You will be logged out
                  </AlertDialogDescription>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogout}>
                      Logout
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </ScrollArea>
      </div>
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
