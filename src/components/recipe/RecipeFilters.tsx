import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RecipeSearchFilters } from "@/types/recipe";

interface RecipeFiltersProps {
  filters: RecipeSearchFilters;
  onFiltersChange: (filters: RecipeSearchFilters) => void;
  onSearch: () => void;
  onClearFilters: () => void;
  isSearching: boolean;
}

const RecipeFilters = ({ 
  filters, 
  onFiltersChange, 
  onSearch, 
  onClearFilters, 
  isSearching 
}: RecipeFiltersProps) => {
  const handleFilterChange = (key: keyof RecipeSearchFilters, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value || undefined
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value && value.length > 0);

  return (
    <Card className="gradient-card shadow-medium">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Search & Filter Recipes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Main Search */}
        <div className="space-y-2">
          <Label htmlFor="title-search">Recipe Title</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="title-search"
              placeholder="Search by recipe title..."
              value={filters.title || ""}
              onChange={(e) => handleFilterChange("title", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Filter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cuisine-filter">Cuisine</Label>
            <Input
              id="cuisine-filter"
              placeholder="e.g. Italian, Thai"
              value={filters.cuisine || ""}
              onChange={(e) => handleFilterChange("cuisine", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rating-filter">Rating</Label>
            <Input
              id="rating-filter"
              placeholder="e.g. >=4.5, <4.0"
              value={filters.rating || ""}
              onChange={(e) => handleFilterChange("rating", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time-filter">Total Time (min)</Label>
            <Input
              id="time-filter"
              placeholder="e.g. <=30, >60"
              value={filters.total_time || ""}
              onChange={(e) => handleFilterChange("total_time", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="calories-filter">Calories</Label>
            <Input
              id="calories-filter"
              placeholder="e.g. <=400, >500"
              value={filters.calories || ""}
              onChange={(e) => handleFilterChange("calories", e.target.value)}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button 
            onClick={onSearch} 
            disabled={isSearching}
            className="gradient-primary shadow-soft hover:shadow-glow transition-smooth"
          >
            <Search className="h-4 w-4 mr-2" />
            {isSearching ? "Searching..." : "Search Recipes"}
          </Button>
          
          {hasActiveFilters && (
            <Button 
              variant="outline" 
              onClick={onClearFilters}
              className="transition-smooth"
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
            {Object.entries(filters).map(([key, value]) => {
              if (!value) return null;
              return (
                <Badge key={key} variant="secondary" className="text-xs">
                  {key}: {value}
                </Badge>
              );
            })}
          </div>
        )}

        {/* Filter Help */}
        <div className="text-xs text-muted-foreground bg-muted/50 rounded-md p-3 space-y-1">
          <p><strong>Filter operators:</strong></p>
          <p>• Use {">="}, {"<="}, {">"}, {"<"}, = for numeric comparisons</p>
          <p>• Examples: {">="} 4.5 for rating, {"<="} 30 for time, {"<="} 400 for calories</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeFilters;