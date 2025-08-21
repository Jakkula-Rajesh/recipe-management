import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number | null;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const StarRating = ({ rating, className, size = "sm" }: StarRatingProps) => {
  if (rating === null) {
    return <span className={cn("text-muted-foreground text-sm", className)}>No rating</span>;
  }

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6"
  };

  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star
        key={`full-${i}`}
        className={cn("recipe-star fill-current", sizeClasses[size])}
      />
    );
  }

  // Half star
  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative inline-block">
        <Star className={cn("recipe-star-empty", sizeClasses[size])} />
        <div className="absolute inset-0 overflow-hidden w-1/2">
          <Star className={cn("recipe-star fill-current", sizeClasses[size])} />
        </div>
      </div>
    );
  }

  // Empty stars
  const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(
      <Star
        key={`empty-${i}`}
        className={cn("recipe-star-empty", sizeClasses[size])}
      />
    );
  }

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {stars}
      <span className="ml-2 text-sm font-medium text-foreground">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;