import StyledSingleMeal from "./styled/SingleMeal.styled";

const SingleMeal = ({ meal }) => {
  return (
    <StyledSingleMeal>
      <div>
        <img src={meal.strMealThumb} alt="food img" />
      </div>
      <h1>{meal.strMeal}</h1>
      <section>
        <h3>{meal.strCategory}</h3>
        <h3>{meal.strArea}</h3>
      </section>
      <p>{
        
        
      }</p>
    </StyledSingleMeal>
  );
};

export default SingleMeal;
