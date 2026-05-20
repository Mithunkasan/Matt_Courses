import { Star } from 'lucide-react';
import FeaturedReviews from '../components/feedback';

export default function StudentReview({review}: {review?: React.Ref<HTMLDivElement>}) {
  const reviewData = {
    courseName: "",
    rating: "5.0",
    totalReviews: 1250,
    breakdown: [
      { stars: 5, percentage: 97, count: 1212 },
      { stars: 4, percentage: 3, count: 38 },
      { stars: 3, percentage: 0, count: 0 },
      { stars: 2, percentage: 0, count: 0 },
      { stars: 1, percentage: 0, count: 0 }
    ]
  };

  const renderStars = (rating: number, filled = true) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${filled && index < rating
          ? 'text-orange-400 fill-orange-400'
          : 'text-gray-300'
          }`}
      />
    ));
  };

  return (
    <div className="flex items-center  justify-center min-h-screen p-4 w-full" ref={review}>
      <div className="w-full">

        {/* Review Card */}
        <div className=" bg-white  rounded-2xl shadow-lg p-8">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Student Review</h1>
            <h2 className="text-lg text-gray-600">{reviewData.courseName}</h2>
          </div>

          <div className="flex flex-row gap-0">

            {/* Left Side - Rating Summary */}
            <div className="w-[35%] text-center justify-center flex flex-col items-start algin-center">
              <div className="  text-6xl font-bold text-gray-800 mb-2">
                {reviewData.rating}
              </div>

              <div className="flex justify-start mb-2">
                {renderStars(5)}
              </div>

              <div className="text-orange-400 font-semibold text-lg">
                Course Rating
              </div>

              <div className="text-gray-500 text-sm mt-2">
                Based on {reviewData.totalReviews.toLocaleString()} reviews
              </div>
            </div>

            {/* Right Side - Rating Breakdown */}
            <div className="w-full space-y-2">
              {reviewData.breakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-2">

                  {/* Stars */}
                  <div className="flex">
                    {renderStars(item.stars)}
                  </div>

                  {/* Progress Bar */}
                  <div className="flex-1 bg-gray-200 h-3 overflow-hidden">
                    <div
                      className="h-full bg-orange-400 transition-all duration-1000 ease-out"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>

                  {/* Percentage */}
                  <div className="text-gray-600 font-semibold min-w-12 text-right">
                    {item.percentage}%
                  </div>

                </div>
              ))}

            </div>

          </div>
          
        </div>
        <FeaturedReviews />
      </div>
    </div>
  );

}