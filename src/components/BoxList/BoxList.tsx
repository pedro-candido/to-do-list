import { Box } from "components";
import { BoxContainer } from "./style";
import { useSelector } from "react-redux";
import State from "redux/store/IStore";

const Tasks = () => {
  const tasks = useSelector(({ tasks }: State) => tasks);

  return (
    <>
      {tasks.length !== 0 ? (
        tasks.map((task) => (
          <Box
            key={task.name}
            title={task.name}
            description={task.description}
          />
        ))
      ) : (
        <h1> Opa, parece que você não tem tasks </h1>
      )}
    </>
  );
};

const BoxList = (): JSX.Element => {
  return (
    <BoxContainer>
      <Tasks />
    </BoxContainer>
  );
};

export default BoxList;
