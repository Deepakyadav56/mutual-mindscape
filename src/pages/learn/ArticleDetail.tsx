
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Share2, 
  BookmarkPlus, 
  Clock, 
  Calendar, 
  ChevronRight,
  ThumbsUp,
  MessageSquare
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ArticleDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();

  // Mock article data
  const article = {
    id: parseInt(id || "1"),
    title: "Understanding SIP: A Beginner's Guide",
    category: "SIP",
    readTime: "5 min",
    date: "April 1, 2025",
    author: "Financial Expert",
    authorImage: "https://placehold.co/48x48",
    heroImage: "https://placehold.co/800x400",
    content: `
      <p class="mb-4">Systematic Investment Plan (SIP) is a method of investing a fixed sum regularly in mutual funds. SIP allows investors to buy units on a given date each month, allowing investors to benefit from rupee-cost averaging.</p>
      
      <h2 class="text-xl font-bold mt-6 mb-3 text-teal-800">Why Choose SIP?</h2>
      
      <p class="mb-4">SIP instills financial discipline, as you commit to investing a fixed amount regularly. This approach removes the temptation to time the market, which even professional investors find challenging.</p>
      
      <p class="mb-4">With SIP, investors benefit from rupee-cost averaging. When markets are down, your fixed investment amount buys more units, and when markets are up, it buys fewer units. Over time, this can potentially lower the average cost per unit.</p>
      
      <h2 class="text-xl font-bold mt-6 mb-3 text-teal-800">How SIP Works?</h2>
      
      <p class="mb-4">Let's understand with an example. Suppose you decide to invest ₹5,000 monthly in a mutual fund through SIP.</p>
      
      <ul class="list-disc list-inside mb-4 text-teal-900">
        <li class="mb-2">Month 1: Market price is ₹100 per unit. Your investment buys 50 units (₹5,000 ÷ ₹100).</li>
        <li class="mb-2">Month 2: Market falls, price is ₹80 per unit. Your investment buys 62.5 units (₹5,000 ÷ ₹80).</li>
        <li class="mb-2">Month 3: Market rises, price is ₹120 per unit. Your investment buys 41.67 units (₹5,000 ÷ ₹120).</li>
      </ul>
      
      <p class="mb-4">Total investment: ₹15,000</p>
      <p class="mb-4">Total units purchased: 154.17</p>
      <p class="mb-4">Average cost per unit: ₹97.30 (₹15,000 ÷ 154.17)</p>
      
      <h2 class="text-xl font-bold mt-6 mb-3 text-teal-800">Benefits of SIP</h2>
      
      <p class="mb-4">SIP offers numerous advantages for investors:</p>
      
      <ol class="list-decimal list-inside mb-4">
        <li class="mb-2"><strong class="text-teal-700">Disciplined Investing:</strong> Regular investments build a habit of saving and investing.</li>
        <li class="mb-2"><strong class="text-teal-700">Rupee-Cost Averaging:</strong> Reduces the impact of market volatility over time.</li>
        <li class="mb-2"><strong class="text-teal-700">Start Small:</strong> Begin with amounts as low as ₹500 per month.</li>
        <li class="mb-2"><strong class="text-teal-700">Flexibility:</strong> Modify, pause or stop your SIP as per your financial situation.</li>
        <li class="mb-2"><strong class="text-teal-700">Power of Compounding:</strong> Early and regular investments benefit from compounding returns.</li>
      </ol>
      
      <h2 class="text-xl font-bold mt-6 mb-3 text-teal-800">How to Start a SIP?</h2>
      
      <p class="mb-4">Starting a SIP is straightforward:</p>
      
      <ol class="list-decimal list-inside mb-4 text-teal-900">
        <li class="mb-2">Choose a mutual fund that aligns with your financial goals and risk tolerance.</li>
        <li class="mb-2">Decide on the investment amount.</li>
        <li class="mb-2">Select the frequency (usually monthly) and the date of investment.</li>
        <li class="mb-2">Complete the KYC process if you're a new investor.</li>
        <li class="mb-2">Set up an auto-debit mandate from your bank account.</li>
      </ol>
      
      <p class="mb-4">Remember, consistency is the key to successful SIP investing. Stay invested for the long term to realize the full potential of your investments.</p>
    `,
    relatedArticles: [
      {
        id: 2,
        title: "How to Choose the Right Mutual Fund",
        readTime: "7 min",
        imageUrl: "https://placehold.co/100x100"
      },
      {
        id: 3,
        title: "Tax Benefits of ELSS Funds Explained",
        readTime: "6 min",
        imageUrl: "https://placehold.co/100x100"
      }
    ],
    likes: 125,
    comments: 42
  };

  const handleBookmark = () => {
    toast({
      title: "Article Bookmarked",
      description: "This article has been saved to your bookmarks.",
    });
  };

  const handleShare = () => {
    toast({
      title: "Share",
      description: "Sharing options will appear here.",
    });
  };

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex items-center justify-between p-4 border-b border-teal-100">
          <button onClick={() => navigate(-1)} className="text-teal-700">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-teal-800">
            Article
          </h1>
          <div className="flex space-x-3">
            <button onClick={handleBookmark} className="text-teal-700">
              <BookmarkPlus className="h-5 w-5" />
            </button>
            <button onClick={handleShare} className="text-teal-700">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 border-teal-200 mb-2">
            {article.category}
          </Badge>
          <h1 className="text-2xl font-bold mb-4 text-teal-900">{article.title}</h1>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img 
                src={article.authorImage} 
                alt={article.author} 
                className="w-8 h-8 rounded-full mr-2 border border-teal-200"
              />
              <div>
                <p className="text-sm font-medium text-teal-800">{article.author}</p>
              </div>
            </div>
            
            <div className="flex items-center text-teal-600 text-xs">
              <div className="flex items-center mr-3">
                <Calendar className="h-3 w-3 mr-1" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {article.readTime}
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <img 
            src={article.heroImage} 
            alt={article.title}
            className="w-full h-48 object-cover rounded-lg mb-6 border border-teal-100"
          />
          
          <div 
            className="prose prose-sm max-w-none prose-headings:text-teal-800 prose-p:text-teal-900"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-between mb-8 pt-4 border-t border-teal-100"
        >
          <Button variant="outline" className="flex items-center space-x-1 border-teal-200 text-teal-700">
            <ThumbsUp className="h-4 w-4" />
            <span>{article.likes}</span>
          </Button>
          
          <Button variant="outline" className="flex items-center space-x-1 border-teal-200 text-teal-700">
            <MessageSquare className="h-4 w-4" />
            <span>{article.comments}</span>
          </Button>
          
          <Button variant="outline" onClick={handleShare} className="border-teal-200 text-teal-700">
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-teal-800">Related Articles</h2>
            <button className="text-teal-600 text-sm font-medium flex items-center">
              See all <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            {article.relatedArticles.map((relatedArticle) => (
              <div 
                key={relatedArticle.id}
                className="flex border-b border-teal-100 pb-3"
                onClick={() => navigate(`/learn/article/${relatedArticle.id}`)}
              >
                <div className="w-16 h-16 rounded-md overflow-hidden bg-teal-50 flex-shrink-0 mr-3 border border-teal-100">
                  <img 
                    src={relatedArticle.imageUrl} 
                    alt={relatedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-sm line-clamp-2 text-teal-800">{relatedArticle.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-teal-600 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {relatedArticle.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8">
          <Button 
            className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 shadow-md"
            onClick={() => navigate("/explore")}
          >
            Explore Mutual Funds
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ArticleDetail;
