import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Clock, Users } from "lucide-react";
import { Recipe } from "@/types/recipe";
import StarRating from "./StarRating";
import { cn } from "@/lib/utils";

interface RecipeTableProps {
  recipes: Recipe[];
  currentPage: number;
  totalPages: number;
  totalRecipes: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
  onRecipeClick: (recipe: Recipe) => void;
  isLoading: boolean;
}

const RecipeTable = ({
  recipes,
  currentPage,
  totalPages,
  totalRecipes,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  onRecipeClick,
  isLoading
}: RecipeTableProps) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const truncateText = (text: string, maxLength: number = 50) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  const formatTime = (minutes: number | null) => {
    if (!minutes) return "Not specified";
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  };

  if (isLoading) {
    return (
      <Card className="gradient-card shadow-medium">
        <CardContent className="p-8">
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-12 bg-muted rounded-lg"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (recipes.length === 0) {
    return (
      <Card className="gradient-card shadow-medium">
        <CardContent className="p-12 text-center">
          <div className="space-y-4">
            <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
              <Users className="h-12 w-12 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">No Recipes Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search filters or clear them to see all recipes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="gradient-card shadow-medium">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center justify-between">
            <span>Recipe Collection ({totalRecipes} recipes)</span>
            <Badge variant="secondary" className="text-sm">
              Page {currentPage} of {totalPages}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="recipe-table-header">
                  <TableHead className="w-1/3">Recipe Title</TableHead>
                  <TableHead className="w-1/6">Cuisine</TableHead>
                  <TableHead className="w-1/6">Rating</TableHead>
                  <TableHead className="w-1/6">Total Time</TableHead>
                  <TableHead className="w-1/6">Serves</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recipes.map((recipe) => (
                  <TableRow
                    key={recipe.id}
                    className="recipe-table-row"
                    onClick={() => onRecipeClick(recipe)}
                    onMouseEnter={() => setHoveredRow(recipe.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <TableCell className="font-medium">
                      <div className="space-y-1">
                        <div className={cn(
                          "transition-smooth",
                          hoveredRow === recipe.id && "text-primary"
                        )}>
                          {truncateText(recipe.title, 60)}
                        </div>
                        {recipe.title.length > 60 && (
                          <div className="text-xs text-muted-foreground">
                            Click to view full details
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {recipe.cuisine}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <StarRating rating={recipe.rating} />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          {formatTime(recipe.total_time)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{recipe.serves}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination Controls */}
      <Card className="gradient-card shadow-soft">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Items per page selector */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Show</span>
              <Select
                value={itemsPerPage.toString()}
                onValueChange={(value) => onItemsPerPageChange(Number(value))}
              >
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="35">35</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-muted-foreground">recipes per page</span>
            </div>

            {/* Pagination info and controls */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Showing {((currentPage - 1) * itemsPerPage) + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, totalRecipes)} of {totalRecipes}
              </span>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onPageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className="transition-smooth"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                
                <div className="flex items-center gap-1">
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    const pageNum = Math.max(1, currentPage - 2) + i;
                    if (pageNum > totalPages) return null;
                    
                    return (
                      <Button
                        key={pageNum}
                        variant={pageNum === currentPage ? "default" : "outline"}
                        size="sm"
                        onClick={() => onPageChange(pageNum)}
                        className={cn(
                          "w-10 transition-smooth",
                          pageNum === currentPage && "gradient-primary shadow-glow"
                        )}
                      >
                        {pageNum}
                      </Button>
                    );
                  })}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onPageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className="transition-smooth"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeTable;