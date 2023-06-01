export  const mealFormatter = strMeal => {
    if (strMeal.length > 30) {
      return strMeal.substring(0, 30) + '...';
    } else {
      return strMeal;
    }
  };