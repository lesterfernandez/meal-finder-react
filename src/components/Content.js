import StyledContent from "./styled/Content.styled";

const Content = ({ meals }) => {
  return (
    <StyledContent>
      {meals.length > 0
        ? meals.map(meal => (
            <img key={meal.idMeal} src={meal.strMealThumb} alt="meal img" />
          ))
        : ""}
    </StyledContent>
  );
};

export default Content;
