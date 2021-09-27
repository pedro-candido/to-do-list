import styled from "styled-components";

const Container = styled.main`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

const Tasks = styled.aside`
  padding: 10px;
`;

export default { Tasks, Container };
