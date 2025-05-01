import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { getQueryFn } from "@/lib/queryClient";
import { Content } from "@shared/schema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Home, Image, MessageSquare, Users, Mail, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { user, logoutMutation } = useAuth();
  const { toast } = useToast();

  const {
    data: contentData,
    isLoading: contentLoading,
    error: contentError,
  } = useQuery<Content[], Error>({
    queryKey: ["/api/content"],
    queryFn: getQueryFn({ on401: "throw" }),
  });

  const {
    data: contactsData,
    isLoading: contactsLoading,
  } = useQuery<any[], Error>({
    queryKey: ["/api/contact/all"],
    queryFn: getQueryFn({ on401: "throw" }),
    enabled: activeTab === "contacts",
  });

  const {
    data: newsletterData,
    isLoading: newsletterLoading,
  } = useQuery<any[], Error>({
    queryKey: ["/api/newsletter/all"],
    queryFn: getQueryFn({ on401: "throw" }),
    enabled: activeTab === "newsletter",
  });

  if (contentError) {
    toast({
      title: "Error loading data",
      description: contentError.message,
      variant: "destructive",
    });
  }

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-border" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border p-4">
        <div className="flex items-center mb-8">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        
        <nav className="space-y-2">
          <Button 
            variant={activeTab === "dashboard" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("dashboard")}
          >
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button 
            variant={activeTab === "content" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("content")}
          >
            <Image className="mr-2 h-4 w-4" />
            Content
          </Button>
          <Button 
            variant={activeTab === "contacts" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("contacts")}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Contacts
          </Button>
          <Button 
            variant={activeTab === "newsletter" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("newsletter")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Newsletter
          </Button>
          <Button 
            variant={activeTab === "users" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("users")}
          >
            <Users className="mr-2 h-4 w-4" />
            Users
          </Button>
        </nav>
        
        <div className="mt-auto pt-4 border-t border-border mt-8">
          <div className="flex items-center mb-4">
            <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">
              {user.username.charAt(0).toUpperCase()}
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium">{user.username}</p>
              <p className="text-xs text-muted-foreground">
                {user.isAdmin ? 'Administrator' : 'User'}
              </p>
            </div>
          </div>
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={handleLogout}
            disabled={logoutMutation.isPending}
          >
            {logoutMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging out...
              </>
            ) : (
              <>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </>
            )}
          </Button>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsContent value="dashboard" className="mt-0">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {contentLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      contentData?.length || 0
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Editable website content items
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Contact Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {contactsLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      contactsData?.length || 0
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Total contact form submissions
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {newsletterLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      newsletterData?.length || 0
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Total newsletter subscribers
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Admin Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {user?.isAdmin ? 1 : 0}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Users with admin privileges
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-xl font-bold mt-10 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button 
                className="h-auto py-4 flex flex-col items-center justify-center gap-2"
                onClick={() => setActiveTab("content")}
              >
                <Image className="h-6 w-6 mb-2" />
                <div className="text-sm font-medium">Edit Website Content</div>
                <p className="text-xs text-primary-foreground/80">
                  Update text and images on your site
                </p>
              </Button>
              <Button 
                variant="outline"
                className="h-auto py-4 flex flex-col items-center justify-center gap-2"
                onClick={() => setActiveTab("contacts")}
              >
                <MessageSquare className="h-6 w-6 mb-2" />
                <div className="text-sm font-medium">View Contact Requests</div>
                <p className="text-xs text-muted-foreground">
                  Review customer inquiries
                </p>
              </Button>
              <Button 
                variant="outline"
                className="h-auto py-4 flex flex-col items-center justify-center gap-2"
                onClick={() => setActiveTab("newsletter")}
              >
                <Mail className="h-6 w-6 mb-2" />
                <div className="text-sm font-medium">Manage Newsletter</div>
                <p className="text-xs text-muted-foreground">
                  View and export subscriber list
                </p>
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="content" className="mt-0">
            <h1 className="text-3xl font-bold mb-6">Content Management</h1>
            <p className="text-lg mb-6">
              Edit website content and upload images for different sections of your tree nursery website.
            </p>

            {contentLoading ? (
              <div className="flex justify-center my-12">
                <Loader2 className="h-8 w-8 animate-spin text-border" />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Hero Section</CardTitle>
                    <CardDescription>
                      Edit the main headline, subheading, and hero images
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>Edit Hero Content</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Featured Products</CardTitle>
                    <CardDescription>
                      Manage the tree products and seedlings featured on the homepage
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>Edit Products</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Services Section</CardTitle>
                    <CardDescription>
                      Update the tree nursery services information
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>Edit Services</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>
                      Update your business contact details and location
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>Edit Contact Details</Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="contacts" className="mt-0">
            <h1 className="text-3xl font-bold mb-6">Contact Requests</h1>
            {contactsLoading ? (
              <div className="flex justify-center my-12">
                <Loader2 className="h-8 w-8 animate-spin text-border" />
              </div>
            ) : contactsData && contactsData.length > 0 ? (
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-3 font-medium">Name</th>
                      <th className="text-left p-3 font-medium">Email</th>
                      <th className="text-left p-3 font-medium">Subject</th>
                      <th className="text-left p-3 font-medium">Date</th>
                      <th className="text-left p-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contactsData.map((contact) => (
                      <tr key={contact.id} className="border-t">
                        <td className="p-3">{contact.name}</td>
                        <td className="p-3">{contact.email}</td>
                        <td className="p-3">{contact.subject}</td>
                        <td className="p-3">{new Date(contact.createdAt).toLocaleDateString()}</td>
                        <td className="p-3">
                          <Button variant="outline" size="sm">View</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <Card>
                <CardContent className="py-10 text-center">
                  <p className="text-muted-foreground">No contact requests yet.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="newsletter" className="mt-0">
            <h1 className="text-3xl font-bold mb-6">Newsletter Subscribers</h1>
            {newsletterLoading ? (
              <div className="flex justify-center my-12">
                <Loader2 className="h-8 w-8 animate-spin text-border" />
              </div>
            ) : newsletterData && newsletterData.length > 0 ? (
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-3 font-medium">Email</th>
                      <th className="text-left p-3 font-medium">Date Subscribed</th>
                      <th className="text-left p-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newsletterData.map((subscriber) => (
                      <tr key={subscriber.id} className="border-t">
                        <td className="p-3">{subscriber.email}</td>
                        <td className="p-3">{new Date(subscriber.createdAt).toLocaleDateString()}</td>
                        <td className="p-3">
                          <Button variant="outline" size="sm">Remove</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <Card>
                <CardContent className="py-10 text-center">
                  <p className="text-muted-foreground">No newsletter subscribers yet.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="users" className="mt-0">
            <h1 className="text-3xl font-bold mb-6">User Management</h1>
            <p className="text-muted-foreground mb-6">
              Manage administrator accounts for content management access.
            </p>
            <Card>
              <CardContent className="py-10">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-medium">{user.username}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user.isAdmin ? 'Administrator' : 'Regular User'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}