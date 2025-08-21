import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Recipe } from "@/types/recipe";
import StarRating from "./StarRating";
import { cn } from "@/lib/utils";

interface RecipeDetailDrawerProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeDetailDrawer = ({ recipe, isOpen, onClose }: RecipeDetailDrawerProps) => {
  const [showTimeDetails, setShowTimeDetails] = useState(false);

  if (!recipe) return null;

  const nutritionEntries = Object.entries(recipe.nutrients).filter(([_, value]) => value);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader className="space-y-3 pb-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <SheetTitle className="text-2xl font-bold leading-tight">
                {recipe.title}
              </SheetTitle>
              <Badge variant="secondary" className="w-fit">
                {recipe.cuisine}
              </Badge>
            </div>
            {recipe.url && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(recipe.url, '_blank')}
                className="flex-shrink-0"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </div>
          <StarRating rating={recipe.rating} size="md" />
        </SheetHeader>

        <div className="space-y-6">
          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{recipe.description}</p>
          </div>

          <Separator />

          {/* Time and Servings Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-semibold">Total Time:</span>
                <span>{recipe.total_time ? `${recipe.total_time} minutes` : 'Not specified'}</span>
              </div>
              {(recipe.prep_time || recipe.cook_time) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTimeDetails(!showTimeDetails)}
                  className="flex items-center gap-1"
                >
                  {showTimeDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  Details
                </Button>
              )}
            </div>

            {/* Expandable Time Details */}
            <div className={cn(
              "overflow-hidden transition-all duration-200 ease-in-out",
              showTimeDetails ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
            )}>
              <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                {recipe.prep_time && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Prep Time:</span>
                    <span className="font-medium">{recipe.prep_time} minutes</span>
                  </div>
                )}
                {recipe.cook_time && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Cook Time:</span>
                    <span className="font-medium">{recipe.cook_time} minutes</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold">Serves:</span>
              <span>{recipe.serves}</span>
            </div>
          </div>

          <Separator />

          {/* Nutrition Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Nutrition Information</h3>
            <div className="nutrition-section">
              <div className="grid grid-cols-2 gap-3">
                {nutritionEntries.map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                    </span>
                    <span className="font-medium text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ingredients */}
          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <>
              <Separator />
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Ingredients</h3>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary font-bold text-sm mt-1">•</span>
                      <span className="text-sm leading-relaxed">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Instructions */}
          {recipe.instructions && recipe.instructions.length > 0 && (
            <>
              <Separator />
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Instructions</h3>
                <ol className="space-y-3">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold flex items-center justify-center mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-relaxed">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default RecipeDetailDrawer;