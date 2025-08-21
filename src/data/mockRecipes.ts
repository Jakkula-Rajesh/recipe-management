import { Recipe } from "@/types/recipe";

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: "Sweet Potato Pie",
    cuisine: "Southern Recipes",
    rating: 4.8,
    prep_time: 15,
    cook_time: 100,
    total_time: 115,
    description: "Shared from a Southern recipe, this homemade sweet potato pie is easy to make with boiled sweet potato. Try it, it may just be the best you've ever tasted!",
    nutrients: {
      calories: "389 kcal",
      carbohydrateContent: "48 g",
      cholesterolContent: "78 mg",
      fiberContent: "3 g",
      proteinContent: "5 g",
      saturatedFatContent: "10 g",
      sodiumContent: "254 mg",
      sugarContent: "28 g",
      fatContent: "21 g",
      unsaturatedFatContent: "0 g"
    },
    serves: "8 servings",
    ingredients: [
      "1 (1 pound) sweet potato, with skin",
      "0.5 cup butter, softened",
      "1 cup white sugar",
      "0.5 cup milk",
      "2 large eggs",
      "0.5 teaspoon ground nutmeg",
      "0.5 teaspoon ground cinnamon",
      "1 teaspoon vanilla extract",
      "1 (9 inch) unbaked pie crust"
    ],
    instructions: [
      "Place whole sweet potato in pot and cover with water; bring to a boil. Boil until tender when pierced with a fork, 40 to 50 minutes.",
      "Preheat the oven to 350 degrees F (175 degrees C).",
      "Remove sweet potato from the pot and run under cold water. Remove and discard skin.",
      "Break sweet potato flesh apart and place in a bowl. Add butter and mix with an electric mixer until well combined. Add sugar, milk, eggs, nutmeg, cinnamon, and vanilla; beat on medium speed until mixture is smooth. Pour filling into unbaked pie crust.",
      "Bake in the preheated oven until a knife inserted in the center comes out clean, 55 to 60 minutes.",
      "Remove from the oven and let cool before serving."
    ]
  },
  {
    id: 2,
    title: "Mediterranean Quinoa Bowl",
    cuisine: "Mediterranean",
    rating: 4.6,
    prep_time: 20,
    cook_time: 15,
    total_time: 35,
    description: "A fresh and healthy Mediterranean quinoa bowl packed with vegetables, feta cheese, and a tangy lemon dressing.",
    nutrients: {
      calories: "425 kcal",
      carbohydrateContent: "52 g",
      cholesterolContent: "25 mg",
      fiberContent: "8 g",
      proteinContent: "15 g",
      saturatedFatContent: "6 g",
      sodiumContent: "680 mg",
      sugarContent: "12 g",
      fatContent: "18 g"
    },
    serves: "4 servings"
  },
  {
    id: 3,
    title: "Spicy Thai Green Curry",
    cuisine: "Thai",
    rating: 4.9,
    prep_time: 25,
    cook_time: 20,
    total_time: 45,
    description: "Authentic Thai green curry with coconut milk, fresh herbs, and your choice of protein. Rich, creamy, and perfectly spiced.",
    nutrients: {
      calories: "520 kcal",
      carbohydrateContent: "35 g",
      cholesterolContent: "85 mg",
      fiberContent: "4 g",
      proteinContent: "28 g",
      saturatedFatContent: "22 g",
      sodiumContent: "1200 mg",
      sugarContent: "8 g",
      fatContent: "32 g"
    },
    serves: "6 servings"
  },
  {
    id: 4,
    title: "Classic Caesar Salad",
    cuisine: "Italian",
    rating: 4.4,
    prep_time: 15,
    cook_time: null,
    total_time: 15,
    description: "Crisp romaine lettuce with homemade Caesar dressing, parmesan cheese, and crunchy croutons.",
    nutrients: {
      calories: "285 kcal",
      carbohydrateContent: "18 g",
      cholesterolContent: "45 mg",
      fiberContent: "3 g",
      proteinContent: "8 g",
      saturatedFatContent: "5 g",
      sodiumContent: "590 mg",
      sugarContent: "4 g",
      fatContent: "22 g"
    },
    serves: "4 servings"
  },
  {
    id: 5,
    title: "Beef Tacos with Cilantro Lime Sauce",
    cuisine: "Mexican",
    rating: 4.7,
    prep_time: 20,
    cook_time: 15,
    total_time: 35,
    description: "Seasoned ground beef tacos topped with fresh cilantro lime sauce, lettuce, tomatoes, and cheese.",
    nutrients: {
      calories: "380 kcal",
      carbohydrateContent: "28 g",
      cholesterolContent: "75 mg",
      fiberContent: "5 g",
      proteinContent: "22 g",
      saturatedFatContent: "8 g",
      sodiumContent: "720 mg",
      sugarContent: "6 g",
      fatContent: "20 g"
    },
    serves: "4 servings"
  },
  {
    id: 6,
    title: "Lemon Herb Salmon",
    cuisine: "American",
    rating: 4.5,
    prep_time: 10,
    cook_time: 18,
    total_time: 28,
    description: "Pan-seared salmon with fresh herbs and a bright lemon sauce. Light, healthy, and delicious.",
    nutrients: {
      calories: "340 kcal",
      carbohydrateContent: "3 g",
      cholesterolContent: "95 mg",
      fiberContent: "1 g",
      proteinContent: "35 g",
      saturatedFatContent: "4 g",
      sodiumContent: "420 mg",
      sugarContent: "2 g",
      fatContent: "20 g"
    },
    serves: "4 servings"
  },
  {
    id: 7,
    title: "Vegetarian Pad Thai",
    cuisine: "Thai",
    rating: 4.3,
    prep_time: 30,
    cook_time: 10,
    total_time: 40,
    description: "Traditional pad thai with tofu, vegetables, and rice noodles in a sweet and tangy sauce.",
    nutrients: {
      calories: "410 kcal",
      carbohydrateContent: "58 g",
      cholesterolContent: "0 mg",
      fiberContent: "6 g",
      proteinContent: "16 g",
      saturatedFatContent: "3 g",
      sodiumContent: "980 mg",
      sugarContent: "18 g",
      fatContent: "14 g"
    },
    serves: "3 servings"
  },
  {
    id: 8,
    title: "Chocolate Chip Cookies",
    cuisine: "American",
    rating: 4.9,
    prep_time: 20,
    cook_time: 12,
    total_time: 32,
    description: "Classic chewy chocolate chip cookies with the perfect balance of crispy edges and soft centers.",
    nutrients: {
      calories: "195 kcal",
      carbohydrateContent: "28 g",
      cholesterolContent: "35 mg",
      fiberContent: "1 g",
      proteinContent: "2 g",
      saturatedFatContent: "5 g",
      sodiumContent: "135 mg",
      sugarContent: "18 g",
      fatContent: "9 g"
    },
    serves: "24 servings"
  }
];

// Mock API functions
export const getRecipes = async (page: number = 1, limit: number = 15): Promise<{ data: Recipe[], total: number, page: number, limit: number }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedRecipes = mockRecipes.slice(start, end);
  
  return {
    data: paginatedRecipes,
    total: mockRecipes.length,
    page,
    limit
  };
};

export const searchRecipes = async (filters: any): Promise<{ data: Recipe[] }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400));
  
  let filteredRecipes = [...mockRecipes];
  
  if (filters.title) {
    filteredRecipes = filteredRecipes.filter(recipe => 
      recipe.title.toLowerCase().includes(filters.title.toLowerCase())
    );
  }
  
  if (filters.cuisine) {
    filteredRecipes = filteredRecipes.filter(recipe => 
      recipe.cuisine.toLowerCase().includes(filters.cuisine.toLowerCase())
    );
  }
  
  if (filters.rating) {
    const ratingMatch = filters.rating.match(/(>=|<=|>|<|=)(\d+\.?\d*)/);
    if (ratingMatch) {
      const [, operator, value] = ratingMatch;
      const numValue = parseFloat(value);
      
      filteredRecipes = filteredRecipes.filter(recipe => {
        if (recipe.rating === null) return false;
        
        switch (operator) {
          case '>=': return recipe.rating >= numValue;
          case '<=': return recipe.rating <= numValue;
          case '>': return recipe.rating > numValue;
          case '<': return recipe.rating < numValue;
          case '=': return recipe.rating === numValue;
          default: return true;
        }
      });
    }
  }
  
  if (filters.total_time) {
    const timeMatch = filters.total_time.match(/(>=|<=|>|<|=)(\d+)/);
    if (timeMatch) {
      const [, operator, value] = timeMatch;
      const numValue = parseInt(value);
      
      filteredRecipes = filteredRecipes.filter(recipe => {
        if (recipe.total_time === null) return false;
        
        switch (operator) {
          case '>=': return recipe.total_time >= numValue;
          case '<=': return recipe.total_time <= numValue;
          case '>': return recipe.total_time > numValue;
          case '<': return recipe.total_time < numValue;
          case '=': return recipe.total_time === numValue;
          default: return true;
        }
      });
    }
  }
  
  if (filters.calories) {
    const caloriesMatch = filters.calories.match(/(>=|<=|>|<|=)(\d+)/);
    if (caloriesMatch) {
      const [, operator, value] = caloriesMatch;
      const numValue = parseInt(value);
      
      filteredRecipes = filteredRecipes.filter(recipe => {
        if (!recipe.nutrients.calories) return false;
        
        const calories = parseInt(recipe.nutrients.calories.split(' ')[0]);
        
        switch (operator) {
          case '>=': return calories >= numValue;
          case '<=': return calories <= numValue;
          case '>': return calories > numValue;
          case '<': return calories < numValue;
          case '=': return calories === numValue;
          default: return true;
        }
      });
    }
  }
  
  return { data: filteredRecipes };
};