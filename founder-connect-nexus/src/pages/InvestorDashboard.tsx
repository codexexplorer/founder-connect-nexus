import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DashboardLayout } from "@/components/DashboardLayout";
import { MessageCircle, TrendingUp, Users, Star } from "lucide-react";

const InvestorDashboard = () => {
  const [entrepreneurs] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      startup: "EcoTech Solutions",
      industry: "Clean Energy",
      fundingNeeded: "$2M",
      pitch: "Revolutionary solar panel technology that increases efficiency by 40%",
      location: "San Francisco, CA",
      stage: "Series A",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Michael Chen",
      startup: "HealthAI",
      industry: "Healthcare",
      fundingNeeded: "$5M",
      pitch: "AI-powered diagnostic tool for early disease detection",
      location: "Boston, MA",
      stage: "Series B",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      startup: "FinanceFlow",
      industry: "FinTech",
      fundingNeeded: "$1.5M",
      pitch: "Automated financial planning for small businesses",
      location: "Austin, TX",
      stage: "Seed",
      avatar: "/placeholder.svg"
    }
  ]);

  const stats = [
    { label: "Active Deals", value: "12", icon: TrendingUp, change: "+2" },
    { label: "Entrepreneurs", value: "45", icon: Users, change: "+8" },
    { label: "Portfolio Value", value: "$24M", icon: Star, change: "+15%" },
  ];

  return (
    <DashboardLayout userRole="investor">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-primary rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="text-nexus-blue-light text-lg">
            Discover innovative startups and connect with talented entrepreneurs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <Badge variant="secondary" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* entrepreneurs List */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Featured Entrepreneurs</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {entrepreneurs.map((entrepreneur) => (
              <Card key={entrepreneur.id} className="shadow-card hover:shadow-elevated transition-smooth">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={entrepreneur.avatar} />
                        <AvatarFallback>{entrepreneur.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{entrepreneur.name}</CardTitle>
                        <CardDescription>{entrepreneur.startup}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">{entrepreneur.stage}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="font-medium">{entrepreneur.industry}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Funding Needed:</span>
                    <span className="font-semibold text-nexus-teal">{entrepreneur.fundingNeeded}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Location:</span>
                    <span>{entrepreneur.location}</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{entrepreneur.pitch}</p>
                  <div className="flex space-x-3 pt-2">
                    <Button 
                      className="flex-1 bg-gradient-primary hover:opacity-90"
                      asChild
                    >
                      <Link to={`/profile/entrepreneur/${entrepreneur.id}`}>
                        View Profile
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InvestorDashboard;