import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  TrendingUp, 
  Users, 
  MessageCircle,
  Eye
} from "lucide-react";

const EntrepreneurDashboard = () => {
  const [requests] = useState([
    {
      id: 1,
      investor: "David Park",
      company: "Venture Capital Partners",
      amount: "$2M",
      status: "pending",
      message: "Interested in your EcoTech solution. Let's discuss terms.",
      date: "2024-01-15",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      investor: "Lisa Chen",
      company: "Green Future Investments",
      amount: "$1.5M",
      status: "accepted",
      message: "Excited to partner with your team on this clean energy project.",
      date: "2024-01-12",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      investor: "Robert Johnson",
      company: "Tech Innovators Fund",
      amount: "$3M",
      status: "rejected",
      message: "Great idea, but not aligned with our current portfolio focus.",
      date: "2024-01-10",
      avatar: "/placeholder.svg"
    }
  ]);

  const stats = [
    { label: "Profile Views", value: "124", icon: Eye, change: "+12" },
    { label: "Active Requests", value: "8", icon: Clock, change: "+3" },
    { label: "Connections", value: "32", icon: Users, change: "+5" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "accepted":
        return "bg-green-100 text-green-800 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "accepted":
        return <CheckCircle className="h-4 w-4" />;
      case "rejected":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <DashboardLayout userRole="entrepreneur">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-primary rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h1>
          <p className="text-nexus-blue-light text-lg">
            Track your funding requests and connect with potential investors.
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

        {/* Collaboration Requests */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Collaboration Requests</h2>
            <Button asChild>
              <Link to="/profile/entrepreneur/1">
                Update Profile
              </Link>
            </Button>
          </div>
          
          <div className="space-y-4">
            {requests.map((request) => (
              <Card key={request.id} className="shadow-card hover:shadow-elevated transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={request.avatar} />
                        <AvatarFallback>{request.investor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{request.investor}</h3>
                            <p className="text-sm text-muted-foreground">{request.company}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-lg text-nexus-teal">{request.amount}</p>
                            <p className="text-xs text-muted-foreground">{new Date(request.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                        
                        <p className="text-foreground">{request.message}</p>
                        
                        <div className="flex items-center justify-between pt-2">
                          <Badge 
                            className={`${getStatusColor(request.status)} flex items-center space-x-1 capitalize`}
                            variant="outline"
                          >
                            {getStatusIcon(request.status)}
                            <span>{request.status}</span>
                          </Badge>
                          
                          <div className="flex space-x-2">
                            {request.status === "pending" && (
                              <>
                                <Button size="sm" variant="outline">
                                  Decline
                                </Button>
                                <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                                  Accept
                                </Button>
                              </>
                            )}
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/chat/${request.id}`}>
                                <MessageCircle className="h-4 w-4 mr-1" />
                                Message
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default EntrepreneurDashboard;