import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  LayoutDashboard, 
  Users, 
  MessageCircle, 
  Settings, 
  LogOut,
  TrendingUp,
  User
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: "investor" | "entrepreneur";
}

export const DashboardLayout = ({ children, userRole }: DashboardLayoutProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Mock logout - replace with real auth logic
    navigate("/");
  };

  const navigation = userRole === "investor" 
    ? [
        { name: "Dashboard", href: "/dashboard/investor", icon: LayoutDashboard },
        { name: "Entrepreneurs", href: "/dashboard/investor", icon: Users },
        { name: "Portfolio", href: "/dashboard/investor", icon: TrendingUp },
        { name: "Messages", href: "/dashboard/investor", icon: MessageCircle },
      ]
    : [
        { name: "Dashboard", href: "/dashboard/entrepreneur", icon: LayoutDashboard },
        { name: "Investors", href: "/dashboard/entrepreneur", icon: Users },
        { name: "Requests", href: "/dashboard/entrepreneur", icon: MessageCircle },
        { name: "Profile", href: "/profile/entrepreneur/1", icon: User },
      ];

  return (
    <div className="min-h-screen bg-nexus-gray-light">
      {/* Navigation Header */}
      <header className="bg-white border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BN</span>
              </div>
              <span className="text-xl font-bold text-nexus-navy">Business Nexus</span>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 text-nexus-gray hover:text-nexus-navy transition-smooth"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>{userRole === "investor" ? "AP" : "SJ"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 shadow-elevated" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {userRole === "investor" ? "Alex Parker" : "Sarah Johnson"}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {userRole === "investor" ? "alex@venture.com" : "sarah@ecotech.com"}
                    </p>
                    <p className="text-xs leading-none text-nexus-teal capitalize font-medium">
                      {userRole}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};