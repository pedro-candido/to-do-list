import type { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { Modal, Footer, PlusButton, Tasks } from "components";
import { GlobalStyle } from "theme/GlobalStyle";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openModal } from "redux/reducers/modal/modal.reducer";

const Container = styled.main`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const openingModal = () => {
    dispatch(openModal());
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Modal />
        <Tasks />
        <PlusButton onClick={openingModal} />
        <Footer />
      </ThemeProvider>
    </Container>
  );
};

export default Home;
