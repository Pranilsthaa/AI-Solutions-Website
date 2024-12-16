import { useState } from "react";
import { Star } from "lucide-react";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

interface StarRatingProps {
  rating: number;
  onRating: (rate: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRating }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`bg-transparent border-none outline-none cursor-pointer ${
              index <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => onRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {index <= (hover || rating) ? (
              <FaStar className="w-6 h-6" />
            ) : (
              <FaRegStar className="w-6 h-6" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
