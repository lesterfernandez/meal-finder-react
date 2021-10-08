import StyledMeal from "./styled/Meal.styled";

const Meal = ({ meal, setMeals }) => {
  const selectMeal = async () => {
    const searchedMeal = await (
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
      )
    ).json();
    setMeals(searchedMeal.meals);
  };

  return (
    <StyledMeal>
      <button onClick={selectMeal}>
        <p>{meal.strMeal}</p>
      </button>
      <img src={meal.strMealThumb} alt="meal img" />
    </StyledMeal>
  );
};

export default Meal;
