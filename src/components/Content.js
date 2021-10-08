import Meal from "./Meal";
import SingleMeal from "./SingleMeal";
import StyledContent from "./styled/Content.styled";

const Content = ({ meals, setMeals }) => {
  return (
    <StyledContent>
      {meals.length > 1 ? (
        meals.map(meal => <Meal meal={meal} setMeals={setMeals} key={meal.idMeal} />)
      ) : meals.length === 1 ? (
        <SingleMeal meal={meals[0]} />
      ) : (
        ""
      )}
    </StyledContent>
  );
};

export default Content;
