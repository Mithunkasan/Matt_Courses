import React, { useRef, useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import MarqueeGallery from './Marquee1';

const FeaturedReviews = () => {
    const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});
    const[showall,setshowall]=useState(false)
       const reviewsRef = useRef<HTMLDivElement>(null);

    const reviews = [
        {
            id: 1,
            name: "Lin Ann Jose",
            title: "Data Science Student",
            avatar: "LA",
            avatarColor: "bg-cyan-400",
            rating: 5,
            review: "I recently completed my Data Science course at Luminar Technolab and had a great experience. The course was well-organized, with practical learning that helped me understand key concepts. A special thanks to Sabir Sir, along with all the other faculties, for their guidance and support throughout the program.",
            fullReview: "I recently completed my Data Science course at Luminar Technolab and had a great experience. The course was well-organized, with practical learning that helped me understand key concepts. A special thanks to Sabir Sir, along with all the other faculties, for their guidance and support throughout the program. The hands-on projects and real-world applications made the learning process engaging and practical. I would highly recommend this course to anyone looking to start their career in data science."
        },
        {
            id: 2,
            name: "Sandra Jacob",
            title: "Data Science",
            avatar: "SJ",
            avatarColor: "bg-orange-500",
            rating: 5,
            review: "I recently completed the Data Science course at Luminar Technolab and I must say it was a highly enriching experience. The course covered a wide range of essential topics, including Python, Data Science, Data analysis, SQL, Machine Learning algorithms, Deep Learning, and more.",
            fullReview: "I recently completed the Data Science course at Luminar Technolab and I must say it was a highly enriching experience. The course covered a wide range of essential topics, including Python, Data Science, Data analysis, SQL, Machine Learning algorithms, Deep Learning, and more. The instructors were knowledgeable and always ready to help. The practical approach to learning with real-world projects helped me gain confidence in applying these concepts professionally."
        },
        {
            id: 3,
            name: "Sandra Jacob",
            title: "Data Science",
            avatar: "SJ",
            avatarColor: "bg-orange-500",
            rating: 5,
            review: "I recently completed the Data Science course at Luminar Technolab and I must say it was a highly enriching experience. The course covered a wide range of essential topics, including Python, Data Science, Data analysis, SQL, Machine Learning algorithms, Deep Learning, and more.",
            fullReview: "I recently completed the Data Science course at Luminar Technolab and I must say it was a highly enriching experience. The course covered a wide range of essential topics, including Python, Data Science, Data analysis, SQL, Machine Learning algorithms, Deep Learning, and more. The instructors were knowledgeable and always ready to help. The practical approach to learning with real-world projects helped me gain confidence in applying these concepts professionally."
        },
        {
            id: 4,
            name: "Sandra Jacob",
            title: "Data Science",
            avatar: "SJ",
            avatarColor: "bg-orange-500",
            rating: 5,
            review: "I recently completed the Data Science course at Luminar Technolab and I must say it was a highly enriching experience. The course covered a wide range of essential topics, including Python, Data Science, Data analysis, SQL, Machine Learning algorithms, Deep Learning, and more.",
            fullReview: "I recently completed the Data Science course at Luminar Technolab and I must say it was a highly enriching experience. The course covered a wide range of essential topics, including Python, Data Science, Data analysis, SQL, Machine Learning algorithms, Deep Learning, and more. The instructors were knowledgeable and always ready to help. The practical approach to learning with real-world projects helped me gain confidence in applying these concepts professionally."
        },
          {
            id: 3,
            name: "Sandra Jacob",
            title: "Data Science",
            avatar: "SJ",
            avatarColor: "bg-orange-500",
            rating: 5,
            review: "I recently completed the Data Science course at Luminar Technolab and I must say it was a highly enriching experience. The course covered a wide range of essential topics, including Python, Data Science, Data analysis, SQL, Machine Learning algorithms, Deep Learning, and more.",
            fullReview: "I recently completed the Data Science course at Luminar Technolab and I must say it was a highly enriching experience. The course covered a wide range of essential topics, including Python, Data Science, Data analysis, SQL, Machine Learning algorithms, Deep Learning, and more. The instructors were knowledgeable and always ready to help. The practical approach to learning with real-world projects helped me gain confidence in applying these concepts professionally."
        },
        {
            id: 4,
            name: "Sandra Jacob",
            title: "Data Science",
            avatar: "SJ",
            avatarColor: "bg-orange-500",
            rating: 5,
            review: "I recently completed the Data Science course at Luminar Technolab and I must say it was a highly enriching experience. The course covered a wide range of essential topics, including Python, Data Science, Data analysis, SQL, Machine Learning algorithms, Deep Learning, and more.",
            fullReview: "I recently completed the Data Science course at Luminar Technolab and I must say it was a highly enriching experience. The course covered a wide range of essential topics, including Python, Data Science, Data analysis, SQL, Machine Learning algorithms, Deep Learning, and more. The instructors were knowledgeable and always ready to help. The practical approach to learning with real-world projects helped me gain confidence in applying these concepts professionally."
        }
    ];

    const toggleExpanded = (reviewId: number) => {
        setExpandedReviews(prev => ({
            ...prev,
            [reviewId]: !prev[reviewId]
        }));
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
            />
        ));
    };

    const reviewToShow=showall?reviews:reviews.slice(0,3)


    return (
        <>
        <div className="max-w-4xl mx-auto p-6 mt-5 rounded-lg bg-white" ref={reviewsRef}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured review</h2>

            <div className="space-y-6">
                {reviewToShow.map((review) => (
                    <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                        {/* Header */}
                        <div className="flex items-start space-x-4 mb-4">
                            {/* Avatar */}
                            <div className={`${review.avatarColor} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                                {review.avatar}
                            </div>

                            {/* Name and Title */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-800 text-lg">{review.name}</h3>
                                <p className="text-gray-600 text-sm">{review.title}</p>

                                {/* Star Rating */}
                                <div className="flex items-center mt-2">
                                    {renderStars(review.rating)}
                                </div>
                            </div>
                        </div>

                        {/* Review Content */}
                        <div className="text-gray-700 leading-relaxed">
                            <p className="mb-4">
                                {expandedReviews[review.id] ? review.fullReview : review.review}
                            </p>

                            {/* See More/Less Button */}
                            <button
                                onClick={() => toggleExpanded(review.id)}
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                            >
                                {expandedReviews[review.id] ? (
                                    <>
                                        See Less
                                        <ChevronUp className="w-4 h-4 ml-1" />
                                    </>
                                ) : (
                                    <>
                                        See More
                                        <ChevronDown className="w-4 h-4 ml-1" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Reviews Button */}
            <div className="mt-8 text-center">
               <button
                    onClick={() => {
                        if (showall && reviewsRef.current) {
                            reviewsRef.current.scrollIntoView({ behavior: 'smooth',block: 'start'  }); // Step 3
                        }
                        setshowall(!showall);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                    {showall ? "Show Less" : "Show More"}
                </button>
            </div>
           
        </div>
        </>
    );
};

export default FeaturedReviews;