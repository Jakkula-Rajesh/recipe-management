import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChefHat } from "lucide-react";
import { Recipe, RecipeSearchFilters } from "@/types/recipe";
import { getRecipes, searchRecipes } from "@/data/mockRecipes";
import RecipeTable from "@/components/recipe/RecipeTable";
import RecipeDetailDrawer from "@/components/recipe/RecipeDetailDrawer";
import RecipeFilters from "@/components/recipe/RecipeFilters";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [filters, setFilters] = useState<RecipeSearchFilters>({});
  const [isSearchMode, setIsSearchMode] = useState(false);

  // Fetch recipes with pagination
  const { data: recipeData, isLoading: isLoadingRecipes, refetch } = useQuery({
    queryKey: ['recipes', currentPage, itemsPerPage],
    queryFn: () => getRecipes(currentPage, itemsPerPage),
    enabled: !isSearchMode,
  });

  // Search recipes
  const { data: searchData, isLoading: isSearching, refetch: refetchSearch } = useQuery({
    queryKey: ['searchRecipes', filters],
    queryFn: () => searchRecipes(filters),
    enabled: false, // Manual trigger only
  });

  const totalPages = recipeData ? Math.ceil(recipeData.total / itemsPerPage) : 0;
  const displayedRecipes = isSearchMode ? (searchData?.data || []) : (recipeData?.data || []);
  const totalRecipes = isSearchMode ? (searchData?.data.length || 0) : (recipeData?.total || 0);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsDrawerOpen(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  const handleSearch = async () => {
    setIsSearchMode(true);
    setCurrentPage(1);
    refetchSearch();
  };

  const handleClearFilters = () => {
    setFilters({});
    setIsSearchMode(false);
    setCurrentPage(1);
    refetch();
  };

  // Reset to regular view if no filters are active
  useEffect(() => {
    const hasActiveFilters = Object.values(filters).some(value => value && value.length > 0);
    if (!hasActiveFilters && isSearchMode) {
      setIsSearchMode(false);
    }
  }, [filters, isSearchMode]);

  return (
    <div className="min-h-screen gradient-subtle">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="gradient-primary p-2 rounded-lg shadow-glow">
              <ChefHat className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Recipe Management System
              </h1>
              <p className="text-muted-foreground">
                Discover, search, and explore delicious recipes from around the world
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Search and Filters */}
        <RecipeFilters
          filters={filters}
          onFiltersChange={setFilters}
          onSearch={handleSearch}
          onClearFilters={handleClearFilters}
          isSearching={isSearching}
        />

        {/* Recipe Table */}
        <RecipeTable
          recipes={displayedRecipes}
          currentPage={currentPage}
          totalPages={isSearchMode ? 1 : totalPages}
          totalRecipes={totalRecipes}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
          onRecipeClick={handleRecipeClick}
          isLoading={isLoadingRecipes || isSearching}
        />

        {/* Recipe Detail Drawer */}
        <RecipeDetailDrawer
          recipe={selectedRecipe}
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-muted-foreground text-sm">
            Recipe Management System - Ready to connect with your API backend
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
