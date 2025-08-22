import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Building, 
  TrendingUp, 
  MessageCircle,
  Calendar
} from "lucide-react";

const InvestorProfile = () => {
  const { id } = useParams();
  
  // Mock investor data - replace with real API call
  const investor = {
    id: 1,
    name: "David Park",
    title: "Managing Partner",
    company: "Venture Capital Partners",
    bio: "Experienced investor with 15+ years in venture capital. Passionate about supporting innovative startups in clean technology, healthcare, and fintech sectors.",
    location: "San Francisco, CA",
    email: "david@vcpartners.com",
    phone: "+1 (555) 123-4567",
    website: "www.vcpartners.com",
    founded: "2008",
    aum: "$500M",
    avatar: "/placeholder.svg",
    interests: ["Clean Energy", "Healthcare", "FinTech", "AI/ML", "Enterprise Software"],
    portfolio: [
      { name: "GreenTech Solutions", sector: "Clean Energy", stage: "Series B", year: "2023" },
      { name: "MedAI", sector: "Healthcare", stage: "Series A", year: "2022" },
      { name: "FinanceFlow", sector: "FinTech", stage: "Seed", year: "2023" },
      { name: "DataSync", sector: "Enterprise", stage: "Series C", year: "2021" }
    ],
    stats: [
      { label: "Total Investments", value: "45" },
      { label: "Active Portfolio", value: "32" },
      { label: "Successful Exits", value: "13" },
      { label: "Years Experience", value: "15+" }
    ]
  };

  return (
    <DashboardLayout userRole="entrepreneur">
      <div className="space-y-8">
        {/* Profile Header */}
        <Card className="shadow-card">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <Avatar className="h-32 w-32 mx-auto md:mx-0">
                <AvatarImage src={investor.avatar} />
                <AvatarFallback className="text-2xl">{investor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-nexus-navy">{investor.name}</h1>
                  <p className="text-xl text-nexus-teal">{investor.title}</p>
                  <p className="text-lg text-muted-foreground">{investor.company}</p>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{investor.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Founded {investor.founded}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>{investor.aum} AUM</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {investor.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary">{interest}</Badge>
                  ))}
                </div>
                
                <div className="flex justify-center md:justify-start space-x-3">
                  <Button className="bg-gradient-primary hover:opacity-90">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{investor.bio}</p>
              </CardContent>
            </Card>

            {/* Portfolio */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Portfolio Companies</CardTitle>
                <CardDescription>Recent investments and portfolio highlights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {investor.portfolio.map((company, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-nexus-gray-light rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{company.name}</h4>
                        <p className="text-sm text-muted-foreground">{company.sector}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{company.stage}</Badge>
                        <p className="text-xs text-muted-foreground mt-1">{company.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Investment Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {investor.stats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="font-semibold text-nexus-teal">{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{investor.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{investor.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>{investor.website}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span>{investor.company}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InvestorProfile;