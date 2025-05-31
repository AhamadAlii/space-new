
import React, { useState, useEffect } from 'react';
import { Rocket, Satellite, Globe, Calendar, ExternalLink, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  image_url: string;
  published_at: string;
  news_site: string;
  url: string;
}

interface Launch {
  id: string;
  name: string;
  status: string;
  net: string;
  image: string;
  mission: {
    description: string;
    type: string;
  };
}

const Index = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [apod, setApod] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchSpaceData();
  }, []);

  const fetchSpaceData = async () => {
    try {
      console.log('Fetching space data...');
      
      // Fetch space news from Spaceflight News API
      const newsResponse = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=12');
      const newsData = await newsResponse.json();
      setNews(newsData.results || []);
      
      // Fetch upcoming launches
      const launchResponse = await fetch('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=6');
      const launchData = await launchResponse.json();
      setLaunches(launchData.results || []);
      
      // Fetch NASA Astronomy Picture of the Day
      const apodResponse = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
      const apodData = await apodResponse.json();
      setApod(apodData);
      
      console.log('Data fetched successfully');
      setLoading(false);
    } catch (error) {
      console.error('Error fetching space data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch space data. Please try again later.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center">
        <div className="text-center text-white">
          <Rocket className="w-16 h-16 mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl font-bold">Loading Space Data...</h2>
          <p className="text-gray-300">Connecting to mission control</p>
        </div>
      </div>
    );
  }

  const svgPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border-b border-purple-500/20">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url("${svgPattern}")` }}
        ></div>
        <div className="container mx-auto px-6 py-8 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Space Explorer
                </h1>
                <p className="text-gray-300">Your gateway to the cosmos</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <Star className="w-4 h-4" />
                <span className="text-sm">Live Space Data</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section with APOD */}
        {apod && (
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 border-purple-500/20 backdrop-blur-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-gray-300">NASA Astronomy Picture of the Day</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">{apod.title}</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">{apod.explanation?.substring(0, 300)}...</p>
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Learn More
                  </Button>
                </div>
                <div className="relative">
                  <img 
                    src={apod.url} 
                    alt={apod.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Content Tabs */}
        <Tabs defaultValue="news" className="space-y-6">
          <TabsList className="bg-slate-800/50 border border-purple-500/20">
            <TabsTrigger value="news" className="data-[state=active]:bg-purple-600">
              Latest News
            </TabsTrigger>
            <TabsTrigger value="launches" className="data-[state=active]:bg-purple-600">
              Upcoming Launches
            </TabsTrigger>
          </TabsList>

          {/* News Tab */}
          <TabsContent value="news">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((article) => (
                <Card key={article.id} className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image_url} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-500/80 text-white px-2 py-1 rounded text-xs font-medium">
                        {article.news_site}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-lg leading-tight">{article.title}</CardTitle>
                    <CardDescription className="text-gray-400 flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.published_at)}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {article.summary.substring(0, 120)}...
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
                      onClick={() => window.open(article.url, '_blank')}
                    >
                      Read More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Launches Tab */}
          <TabsContent value="launches">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {launches.map((launch) => (
                <Card key={launch.id} className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex gap-4 p-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                        <Satellite className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">{launch.name}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          launch.status === 'Go' ? 'bg-green-500/20 text-green-300' : 
                          launch.status === 'TBD' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {launch.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">
                        {formatDate(launch.net)}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {launch.mission?.description?.substring(0, 150)}...
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-purple-500/20 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Space Explorer. Data provided by NASA, SpaceX, and Spaceflight News API.</p>
            <p className="text-sm mt-2">Exploring the cosmos, one mission at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
