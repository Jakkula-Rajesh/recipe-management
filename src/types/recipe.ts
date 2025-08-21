export interface Recipe {
  id: number;
  title: string;
  cuisine: string;
  rating: number | null;
  prep_time: number | null;
  cook_time: number | null;
  total_time: number | null;
  description: string;
  nutrients: {
    calories?: string;
    carbohydrateContent?: string;
    cholesterolContent?: string;
    fiberContent?: string;
    proteinContent?: string;
    saturatedFatContent?: string;
    sodiumContent?: string;
    sugarContent?: string;
    fatContent?: string;
    unsaturatedFatContent?: string;
  };
  serves: string;
  ingredients?: string[];
  instructions?: string[];
  url?: string;
}

export interface RecipeSearchFilters {
  title?: string;
  cuisine?: string;
  rating?: string; // e.g., ">=4.5"
  total_time?: string; // e.g., "<=60"
  calories?: string; // e.g., "<=400"
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface RecipeResponse {
  data: Recipe[];
  page: number;
  limit: number;
  total: number;
}