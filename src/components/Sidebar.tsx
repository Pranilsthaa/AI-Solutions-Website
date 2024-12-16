import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link, Outlet, useLocation } from "react-router-dom";

const sidebarItems = [
  { name: "Dashboard", href: "/admin" },
  { name: "Client Inquiries", href: "/admin/inquiries" },
  { name: "View Events", href: "/admin/events" },
  { name: "Client Feedback", href: "/admin/feedback" },
  { name: "Create Event", href: "/admin/events_create" },
  { name: "Post Article", href: "/admin/post_article" },
];

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="flex h-screen">
      <div className="w-64 border-r bg-gray-100/40 dark:bg-gray-800/40">
        <ScrollArea className="h-full py-6">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Admin Panel</h2>
            <div className="space-y-1">
              {sidebarItems.map((item) => (
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
              ))}
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
