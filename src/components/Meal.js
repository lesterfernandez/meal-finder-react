import StyledMeal from "./styled/Meal.styled";

const Meal = ({ meal }) => {
  return (
    <StyledMeal>
      <div>
        <p>{meal.strMeal}</p>
      </div>
      <img key={meal.idMeal} src={meal.strMealThumb} alt="meal img" />
    </StyledMeal>
  );
};

export default Meal;
