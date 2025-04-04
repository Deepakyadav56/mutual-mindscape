
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Search, 
  BookOpen, 
  Video, 
  TrendingUp, 
  Lightbulb, 
  ChevronRight, 
  Clock, 
  ChartBar,
  FilePieChart,
  ShieldCheck,
  CreditCard
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LearnSection = () => {
  const navigate = useNavigate();

  const featuredArticles = [
    {
      id: 1,
      title: "Understanding SIP: A Beginner's Guide",
      category: "SIP",
      readTime: "5 min",
      imageUrl: "https://placehold.co/100x100",
      type: "article"
    },
    {
      id: 2,
      title: "How to Choose the Right Mutual Fund",
      category: "Fund Selection",
      readTime: "7 min",
      imageUrl: "https://placehold.co/100x100",
      type: "article"
    },
    {
      id: 3,
      title: "Tax Benefits of ELSS Funds Explained",
      category: "Tax Planning",
      readTime: "6 min",
      imageUrl: "https://placehold.co/100x100",
      type: "article"
    }
  ];

  const topCourses = [
    {
      id: 1,
      title: "Mutual Funds for Beginners",
      lessons: 8,
      duration: "45 min",
      imageUrl: "https://placehold.co/100x100",
      progress: 0
    },
    {
      id: 2,
      title: "Advanced Portfolio Management",
      lessons: 12,
      duration: "1.5 hours",
      imageUrl: "https://placehold.co/100x100",
      progress: 0
    },
    {
      id: 3,
      title: "Investment Strategies for Long-Term Wealth",
      lessons: 10,
      duration: "1.2 hours",
      imageUrl: "https://placehold.co/100x100",
      progress: 0
    }
  ];

  const latestVideos = [
    {
      id: 1,
      title: "Market Analysis: April 2025 Update",
      duration: "12:45",
      imageUrl: "https://placehold.co/200x120",
      date: "Apr 2, 2025"
    },
    {
      id: 2,
      title: "Expert Talk: Navigating Volatile Markets",
      duration: "18:30",
      imageUrl: "https://placehold.co/200x120",
      date: "Mar 27, 2025"
    },
    {
      id: 3,
      title: "SIP vs Lumpsum: What's Better Now?",
      duration: "15:10",
      imageUrl: "https://placehold.co/200x120",
      date: "Mar 20, 2025"
    }
  ];

  const categories = [
    { name: "Mutual Fund Basics", icon: BookOpen, color: "text-blue-600 bg-blue-100" },
    { name: "SIP", icon: TrendingUp, color: "text-green-600 bg-green-100" },
    { name: "Tax Planning", icon: FilePieChart, color: "text-purple-600 bg-purple-100" },
    { name: "Risk Management", icon: ShieldCheck, color: "text-orange-600 bg-orange-100" },
    { name: "Fund Analysis", icon: ChartBar, color: "text-indigo-600 bg-indigo-100" },
    { name: "Investment Strategies", icon: Lightbulb, color: "text-yellow-600 bg-yellow-100" },
    { name: "Financial Planning", icon: CreditCard, color: "text-pink-600 bg-pink-100" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center p-4 border-b">
          <button onClick={() => navigate(-1)} className="text-app-gray-900">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-app-gray-900 ml-4">
            Learn
          </h1>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            className="pl-10 bg-gray-50 border-gray-200" 
            placeholder="Search topics, articles, videos..."
          />
        </div>

        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="w-full bg-gray-50 p-1">
            <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
            <TabsTrigger value="articles" className="flex-1">Articles</TabsTrigger>
            <TabsTrigger value="videos" className="flex-1">Videos</TabsTrigger>
            <TabsTrigger value="courses" className="flex-1">Courses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Categories */}
              <motion.section variants={itemVariants}>
                <h2 className="text-lg font-bold mb-3">Categories</h2>
                <div className="grid grid-cols-4 gap-2">
                  {categories.map((category, index) => (
                    <Link 
                      key={index}
                      to={`/learn/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex flex-col items-center text-center p-2"
                    >
                      <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-2`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-medium">{category.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.section>

              {/* Featured Articles */}
              <motion.section variants={itemVariants}>
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-bold">Featured Articles</h2>
                  <Link to="/learn/articles" className="text-app-primary-green text-sm font-medium flex items-center">
                    View all <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                
                <div className="space-y-3">
                  {featuredArticles.map((article) => (
                    <Link key={article.id} to={`/learn/article/${article.id}`}>
                      <Card className="border-gray-100 hover:border-app-primary-green hover:shadow-sm transition duration-200">
                        <CardContent className="p-3 flex">
                          <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0 mr-3">
                            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h3 className="font-medium text-sm line-clamp-2">{article.title}</h3>
                            <div className="flex items-center mt-1">
                              <span className="text-xs text-app-primary-green bg-app-light-green rounded px-2 py-0.5">{article.category}</span>
                              <span className="text-xs text-gray-500 ml-2 flex items-center">
                                <Clock className="h-3 w-3 mr-1" /> {article.readTime}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </motion.section>

              {/* Latest Videos */}
              <motion.section variants={itemVariants}>
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-bold">Latest Videos</h2>
                  <Link to="/learn/videos" className="text-app-primary-green text-sm font-medium flex items-center">
                    View all <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                
                <div className="flex overflow-x-auto space-x-3 pb-2 no-scrollbar">
                  {latestVideos.map((video) => (
                    <Link key={video.id} to={`/learn/video/${video.id}`} className="min-w-[200px] flex-shrink-0">
                      <Card className="border-gray-100 hover:border-app-primary-green hover:shadow-sm transition duration-200">
                        <CardContent className="p-0">
                          <div className="relative">
                            <img src={video.imageUrl} alt={video.title} className="w-full h-28 object-cover rounded-t-md" />
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                              {video.duration}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white/80 rounded-full p-2">
                                <Video className="h-4 w-4 text-app-primary-green" />
                              </div>
                            </div>
                          </div>
                          <div className="p-3">
                            <h3 className="font-medium text-sm line-clamp-2">{video.title}</h3>
                            <p className="text-xs text-gray-500 mt-1">{video.date}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </motion.section>

              {/* Top Courses */}
              <motion.section variants={itemVariants}>
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-bold">Top Courses</h2>
                  <Link to="/learn/courses" className="text-app-primary-green text-sm font-medium flex items-center">
                    View all <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                
                <div className="space-y-3">
                  {topCourses.map((course) => (
                    <Link key={course.id} to={`/learn/course/${course.id}`}>
                      <Card className="border-gray-100 hover:border-app-primary-green hover:shadow-sm transition duration-200">
                        <CardContent className="p-3 flex">
                          <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0 mr-3">
                            <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-sm line-clamp-2">{course.title}</h3>
                            <div className="flex items-center mt-1">
                              <span className="text-xs text-gray-500">{course.lessons} lessons</span>
                              <span className="text-xs text-gray-500 ml-2 flex items-center">
                                <Clock className="h-3 w-3 mr-1" /> {course.duration}
                              </span>
                            </div>
                            {course.progress > 0 && (
                              <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full">
                                <div 
                                  className="h-full bg-app-primary-green rounded-full" 
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </motion.section>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="articles" className="mt-4">
            <div className="space-y-3">
              {featuredArticles.map((article) => (
                <Link key={article.id} to={`/learn/article/${article.id}`}>
                  <Card className="border-gray-100 hover:border-app-primary-green hover:shadow-sm transition duration-200">
                    <CardContent className="p-3 flex">
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0 mr-3">
                        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm line-clamp-2">{article.title}</h3>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-app-primary-green bg-app-light-green rounded px-2 py-0.5">{article.category}</span>
                          <span className="text-xs text-gray-500 ml-2 flex items-center">
                            <Clock className="h-3 w-3 mr-1" /> {article.readTime}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="videos" className="mt-4">
            <div className="grid grid-cols-2 gap-3">
              {latestVideos.map((video) => (
                <Link key={video.id} to={`/learn/video/${video.id}`}>
                  <Card className="border-gray-100 hover:border-app-primary-green hover:shadow-sm transition duration-200">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img src={video.imageUrl} alt={video.title} className="w-full h-28 object-cover rounded-t-md" />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                          {video.duration}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/80 rounded-full p-2">
                            <Video className="h-4 w-4 text-app-primary-green" />
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-sm line-clamp-2">{video.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">{video.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="courses" className="mt-4">
            <div className="space-y-3">
              {topCourses.map((course) => (
                <Link key={course.id} to={`/learn/course/${course.id}`}>
                  <Card className="border-gray-100 hover:border-app-primary-green hover:shadow-sm transition duration-200">
                    <CardContent className="p-3 flex">
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0 mr-3">
                        <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm line-clamp-2">{course.title}</h3>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-500">{course.lessons} lessons</span>
                          <span className="text-xs text-gray-500 ml-2 flex items-center">
                            <Clock className="h-3 w-3 mr-1" /> {course.duration}
                          </span>
                        </div>
                        {course.progress > 0 && (
                          <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full">
                            <div 
                              className="h-full bg-app-primary-green rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LearnSection;
