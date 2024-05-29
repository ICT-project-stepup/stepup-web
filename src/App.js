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
import FarmMyPage from "./pages/farm/FarmMyPage";
import ShowApplicant from "./pages/farm/ShowApplicant";
import ShowResume from "./pages/farm/ShowResume";
import FarmModifyInfo from "./pages/farm/FarmModifyInfo";
import PublishJobAd from "./pages/farm/job_ad/PublishJobAd";
import JobAdDetail from "./pages/farm/job_ad/JobAdDetail";


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

        <Route path="/farmmypage" element={<FarmMyPage />} />
        <Route path="/showapplicant" element={<ShowApplicant />} />
        <Route path="/showresume" element={<ShowResume />} />
        <Route path="/farmmodifyinfo" element={<FarmModifyInfo />} />
        <Route path="/publishjobad" element={<PublishJobAd />} />
        <Route path="/jobaddetail" element={<JobAdDetail />} />
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
