import { styled } from "styled-components";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Footer from "./components/footer/Footer";
import LogIn from "./pages/authentication/login/LogIn";
import SignIn from "./pages/authentication/signin/SignIn";
import FindId from "./pages/authentication/login/FindId";
import FarmSignIn from "./pages/authentication/signin/FarmSignIn";
import HmlsSignIn from "./pages/authentication/signin/HmlsSignIn";


export default function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/login" element={<LogIn />} />
        <Route path="/findid" element={<FindId />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/farmsignin" element={<FarmSignIn />} />
        <Route path="/homelesssignin" element={<HmlsSignIn />} />
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
