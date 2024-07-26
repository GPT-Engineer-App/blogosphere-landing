import { Home, PenTool, BookOpen, Users } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Write",
    to: "/write",
    icon: <PenTool className="h-4 w-4" />,
    page: <div>Write Page</div>,
  },
  {
    title: "Explore",
    to: "/explore",
    icon: <BookOpen className="h-4 w-4" />,
    page: <div>Explore Page</div>,
  },
  {
    title: "Community",
    to: "/community",
    icon: <Users className="h-4 w-4" />,
    page: <div>Community Page</div>,
  },
];
