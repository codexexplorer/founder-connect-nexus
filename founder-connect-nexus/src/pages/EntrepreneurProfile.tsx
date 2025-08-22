import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  MessageCircle,
  FileText,
  Users,
  Target
} from "lucide-react";

const EntrepreneurProfile = () => {
  const { id } = useParams();
  
  // Mock entrepreneur data - replace with real API call
  const entrepreneur = {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO & Founder",
    startup: "EcoTech Solutions",
    bio: "Passionate entrepreneur with 10+ years in renewable energy. Leading a team of engineers and scientists to revolutionize solar panel technology with breakthrough efficiency improvements.",
    location: "San Francisco, CA",
    email: "sarah@ecotech.com",
    phone: "+1 (555) 987-6543",
    website: "www.ecotechsolutions.com",
    founded: "2021",
    stage: "Series A",
    avatar: "/placeholder.svg",
    industry: "Clean Energy",
    fundingGoal: "$2,000,000",
    fundingRaised: "$1,200,000",
    teamSize: "15",
    pitch: "Revolutionary solar panel technology that increases efficiency by 40% while reducing manufacturing costs by 25%. Our patented nano-coating technology represents the next generation of renewable energy solutions.",
    highlights: [
      "40% efficiency improvement over traditional panels",
      "25% reduction in manufacturing costs",
      "Patent pending on nano-coating technology",
      "Partnerships with 3 major manufacturers",
      "$500K in pre-orders secured"
    ],
    team: [
      { name: "Dr. Michael Chen", role: "CTO", experience: "Former Tesla Senior Engineer" },
      { name: "Lisa Rodriguez", role: "VP Engineering", experience: "10+ years in solar tech" },
      { name: "James Park", role: "Head of Sales", experience: "Former SolarCity" }
    ],
    milestones: [
      { title: "Prototype Development", status: "completed", date: "Q2 2023" },
      { title: "Pilot Testing", status: "completed", date: "Q3 2023" },
      { title: "Series A Funding", status: "in-progress", date: "Q1 2024" },
      { title: "Manufacturing Scale-up", status: "upcoming", date: "Q2 2024" }
    ]
  };

  const fundingProgress = (parseInt(entrepreneur.fundingRaised.replace(/[$,]/g, '')) / parseInt(entrepreneur.fundingGoal.replace(/[$,]/g, ''))) * 100;

  return (
    <DashboardLayout userRole="investor">
      <div className="space-y-8">
        {/* Profile Header */}
        <Card className="shadow-card">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <Avatar className="h-32 w-32 mx-auto md:mx-0">
                <AvatarImage src={entrepreneur.avatar} />
                <AvatarFallback className="text-2xl">{entrepreneur.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-nexus-navy">{entrepreneur.name}</h1>
                  <p className="text-xl text-nexus-teal">{entrepreneur.title}</p>
                  <p className="text-lg text-muted-foreground">{entrepreneur.startup}</p>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{entrepreneur.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Founded {entrepreneur.founded}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{entrepreneur.teamSize} team members</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <Badge variant="secondary">{entrepreneur.industry}</Badge>
                  <Badge variant="outline">{entrepreneur.stage}</Badge>
                </div>
                
                <div className="flex justify-center md:justify-start space-x-3">
                  <Button className="bg-gradient-primary hover:opacity-90">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Pitch Deck
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pitch */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Business Pitch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed mb-6">{entrepreneur.pitch}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-nexus-navy">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {entrepreneur.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Target className="h-4 w-4 text-nexus-teal mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Team */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Leadership Team</CardTitle>
                <CardDescription>Meet the key people behind {entrepreneur.startup}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {entrepreneur.team.map((member, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-nexus-gray-light rounded-lg">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-sm text-nexus-teal">{member.role}</p>
                        <p className="text-xs text-muted-foreground">{member.experience}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Milestones */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Company Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {entrepreneur.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`h-3 w-3 rounded-full ${
                        milestone.status === 'completed' ? 'bg-green-500' :
                        milestone.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{milestone.title}</h4>
                          <span className="text-sm text-muted-foreground">{milestone.date}</span>
                        </div>
                        <Badge 
                          variant={milestone.status === 'completed' ? 'default' : 'secondary'}
                          className="mt-1 text-xs"
                        >
                          {milestone.status.replace('-', ' ')}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Funding Progress */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Funding Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Raised</span>
                    <span className="font-semibold">{entrepreneur.fundingRaised}</span>
                  </div>
                  <Progress value={fundingProgress} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Goal: {entrepreneur.fundingGoal}</span>
                    <span className="text-nexus-teal font-medium">{Math.round(fundingProgress)}%</span>
                  </div>
                </div>
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
                  <span>{entrepreneur.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{entrepreneur.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>{entrepreneur.website}</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Make Investment Offer
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Request Pitch Deck
                </Button>
                <Button variant="outline" className="w-full">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Financials
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EntrepreneurProfile;