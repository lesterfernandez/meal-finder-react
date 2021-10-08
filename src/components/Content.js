import Meal from "./Meal";
import StyledContent from "./styled/Content.styled";

const Content = ({ meals }) => {
  return (
    <StyledContent>
      {meals.length > 1
        ? meals.map(meal => <Meal meal={meal} />)
        : meals.length === 1
        ? "single meal"
        : ""}
    </StyledContent>
  );
};

export default Content;
