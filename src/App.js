import { styled } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/Main";
import Footer from "./components/footer/Footer";


export default function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  text-align: center;
  display : flex;
  min-height: 100vh;
  flex-direction: column;
`;
