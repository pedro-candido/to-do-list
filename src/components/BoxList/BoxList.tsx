import { Box } from "components";

const BoxList = (): JSX.Element => {
  const listArr = [
    {
      title: "Task 1",
      description: "Description 1",
    },
    {
      title: "Task 2",
      description: "Description 2",
    },
    {
      title: "Task 3",
      description: "Description 3",
    },
  ];

  return (
    <div>
      {listArr.map((task) => (
        <Box
          key={task.title}
          title={task.title}
          description={task.description}
        />
      ))}
    </div>
  );
};

export default BoxList;
