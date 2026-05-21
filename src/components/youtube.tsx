/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState, useEffect} from 'react';
import { Play, ExternalLink, Calendar, Eye, ThumbsUp, Youtube } from 'lucide-react';

// Mock YouTube data - In production, replace with actual YouTube API calls
const mockVideoData = [
  {
   id: 'kT5cN7alK60',
    title: 'How to learn coding In Tamil How to learn programming ',
    thumbnail: 'tamb6.jpg',
    duration: '12:34',
    views: '45,231',
    likes: '892',
    publishedAt: '2024-05-15',
    description: 'Learn advanced engineering techniques from Matt Engineering channel.'
  },
  {
    id: '9RqsB18cNcw',
    title: 'Learn Machine Learning: Types, Resources & Certification',
    thumbnail: 'tamb1.jpg',
    duration: '18:42',
    views: '32,156',
    likes: '892',
    publishedAt: '2024-05-10',
    description: 'Deep dive into machine learning concepts, resources, and certification paths.'
  },
  {
    id: 'F0SCKrj6x9Q',
    title: 'Cybersecurity Tutorial: Basics to Advanced',
    thumbnail: 'tamb3.jpg',
    duration: '15:28',
    views: '28,934',
    likes: '756',
    publishedAt: '2024-05-05',
    description: 'Master CSS animations and 3D transforms to create stunning visual effects in your web applications.'
  },
  {
    id: 'wCdk6kESEqE',
    title: 'AI PROJECT IDEAS IN TAMIL | ML PROJECT IDEAS IN TAMIL',
    thumbnail: 'tamb5.jpg',
    duration: '22:15',
    views: '19,847',
    likes: '543',
    publishedAt: '2024-04-30',
    description: 'Comprehensive guide to database optimization techniques for high-performance applications.'
  }
];

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  likes: string;
  publishedAt: string;
  description: string;
}

// 3D Animated Play Button Component 1 - Floating Orb Style
const PlayButton3D_Orb = ({ onClick, size = 60 }: { onClick?: (e: React.MouseEvent) => void; size?: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="relative cursor-pointer group"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: size,
        height: size,
        transformStyle: 'preserve-3d',
        transform: isHovered ? 'rotateY(15deg) rotateX(5deg) scale(1.1)' : 'rotateY(0deg) rotateX(0deg) scale(1)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
    >
      {/* Outer glow ring */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-red-600 opacity-20 blur-lg"
        style={{
          transform: `scale(${isHovered ? 1.3 : 1.1})`,
          transition: 'transform 0.4s ease'
        }}
      />
      
      {/* Main button */}
      <div 
        className="relative w-full h-full rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-700 shadow-2xl flex items-center justify-center overflow-hidden"
        style={{
          boxShadow: isHovered 
            ? '0 20px 40px rgba(239, 68, 68, 0.4), inset 0 2px 10px rgba(255,255,255,0.2)' 
            : '0 10px 20px rgba(239, 68, 68, 0.3), inset 0 1px 5px rgba(255,255,255,0.1)',
          transform: `translateZ(${isHovered ? 10 : 0}px)`,
          transition: 'all 0.4s ease'
        }}
      >
        {/* Inner highlight */}
        <div className="absolute top-2 left-2 w-4 h-4 bg-white opacity-30 rounded-full blur-sm" />
        
        {/* Play icon */}
        <Play 
          size={size * 0.4} 
          className="text-white ml-1 drop-shadow-lg"
          style={{
            transform: `scale(${isHovered ? 1.1 : 1})`,
            transition: 'transform 0.3s ease'
          }}
        />
        
        {/* Rotating background pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: 'conic-gradient(from 0deg, transparent, white, transparent)',
            transform: `rotate(${isHovered ? 180 : 0}deg)`,
            transition: 'transform 1s ease'
          }}
        />
      </div>
    </div>
  );
};

// Video Card Component with 3D effects
const VideoCard = ({ video }: { video: Video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  const formatViews = (views: string) => {
    const num = parseInt(views.replace(/,/g, ''));
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return views;
  };
  
  const handlePlayClick = () => {
    // In production, this would open the YouTube video
    console.log(`Playing video: ${video.title}`);
    window.open(`https://youtube.com/watch?v=${video.id}`, '_blank');
  };
  
  return (
    <div
      className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered 
          ? 'translateY(-8px) rotateX(2deg) rotateY(1deg)' 
          : 'translateY(0px) rotateX(0deg) rotateY(0deg)',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Video thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-105' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Play button */}
        <div 
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            transform: `translateZ(${isHovered ? 20 : 0}px)`,
            transition: 'transform 0.3s ease'
          }}
        >
          <PlayButton3D_Orb 
            onClick={handlePlayClick}
            size={80}
          />
        </div>
        
        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-md font-medium">
          {video.duration}
        </div>
        
        {/* YouTube logo badge */}
        <div className="absolute top-3 left-3 bg-red-600 text-white p-1 rounded-md">
          <Youtube size={16} />
        </div>
      </div>
      
      {/* Video info */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-gray-900 dark:text-white text-lg line-clamp-2 leading-tight">
          {video.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
          {video.description}
        </p>
        
        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Eye size={14} />
              <span>{formatViews(video.views)} views</span>
            </div>
            <div className="flex items-center space-x-1">
              <ThumbsUp size={14} />
              <span>{video.likes}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{formatDate(video.publishedAt)}</span>
          </div>
        </div>
        
        {/* Action button */}
        <button
          onClick={handlePlayClick}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
        >
          <Play size={16} className="group-hover/btn:scale-110 transition-transform" />
          <span>Watch Now</span>
          <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

// Loading Skeleton Component
const VideoCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg animate-pulse">
    <div className="aspect-video bg-gray-300 dark:bg-gray-700" />
    <div className="p-4 space-y-3">
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full" />
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3" />
      </div>
      <div className="flex justify-between">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24" />
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20" />
      </div>
      <div className="flex bg-gray-300 dark:bg-gray-700 h-10 rounded" />
    </div>
  </div>
);

// Main YouTube Feed Component
const YouTubeFeed = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Simulate API fetch
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        setVideos(mockVideoData);
      } catch (err) {
        setError('Failed to load videos');
      } finally {
        setLoading(false);
      }
    };
    
    fetchVideos();
  }, []);
  
  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">
          <Youtube size={64} className="mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-semibold">Failed to Load Videos</h3>
          <p className="text-gray-600 mt-2">{error}</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
            <Youtube className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-black">
              Matt Engineering
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Latest engineering tutorials and insights
            </p>
          </div>
        </div>
        
        {/* Featured Content Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            YouTube
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Image 1 */}
            <div className="relative aspect-[16/10] w-full group overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-red-300 transition-all duration-300">
              <img 
                src="/achievement.png" 
                alt="Engineering workshop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h4 className="text-white font-medium capitalize">our achievement</h4>
              </div>
            </div>
            
            {/* Play Button Area */}
            <div className="relative aspect-[16/10] w-full group overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-red-300 transition-all duration-300">
              <img 
                src="/playbutton.png"
                alt="YouTube Play Button Background"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h4 className="text-white font-medium capitalize">youtube play button</h4>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <PlayButton3D_Orb size={60} onClick={() => {}} />
              </div>
            </div>
            
            {/* Image 2 */}
            <div className="relative aspect-[16/10] w-full group overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-red-300 transition-all duration-300">
              <img 
                src="/matt1.png" 
                alt="Engineering tools"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h4 className="text-white font-medium">MATT ENGINEERING SOLUTIONS</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <VideoCardSkeleton key={index} />
            ))
          : videos.map((video) => (
              <VideoCard 
                key={video.id} 
                video={video}
              />
            ))
        }
      </div>

      

    </div>
  );
};

// CSS animations for floating particles
const styles = `
  @keyframes float-0 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(180deg); } }
  @keyframes float-1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(270deg); } }
  @keyframes float-2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-25px) rotate(90deg); } }
  @keyframes float-3 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-18px) rotate(360deg); } }
  @keyframes float-4 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-22px) rotate(45deg); } }
  @keyframes float-5 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-16px) rotate(135deg); } }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default YouTubeFeed;