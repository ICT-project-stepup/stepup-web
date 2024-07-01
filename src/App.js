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
import HmlsMyPage from "./pages/homeless/HmlsMyPage";
import ApplicationHistory from "./pages/homeless/ApplicationHistory";
import InterestPost from "./pages/homeless/InterestPost"
import HmlsModifyInfo from "./pages/homeless/HmlsModifyInfo";
import ManageResume from "./pages/homeless/resume/ManageResume";
import ComuMain from "./pages/community/ComuMain";
import ComuPostDetail from "./pages/community/post/ComuPostDetail";
import PublishComuPost from "./pages/community/post/PublishComuPost";
import CompleteModify from "./pages/popup/CompleteModify";
import NoLogIn from "./pages/popup/NoLogIn";
import NoResume from "./pages/popup/NoResume";
import SignInWelcome from "./pages/popup/SignInWelcome";
import NoAccess from "./pages/popup/NoAccess";
import AboutStep from "./pages/about/aboutstep";
import SearchResult from "./pages/search_result/SearchResult";


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
        <Route path="/showresume/:applicantId" element={<ShowResume />} />
        <Route path="/farmmodifyinfo" element={<FarmModifyInfo />} />
        <Route path="/publishjobad" element={<PublishJobAd />} />
        <Route path="/jobaddetail/:id" element={<JobAdDetail />} />

        <Route path="/homelessmypage" element={<HmlsMyPage />} />
        <Route path="/applicationhistory" element={<ApplicationHistory />} />
        <Route path="/interestpost" element={<InterestPost />} />
        <Route path="/homelessmodifyinfo" element={<HmlsModifyInfo />} />
        <Route path="/manageresume/:userId" element={<ManageResume />} />

        <Route path="/communitymain" element={<ComuMain />} />
        <Route path="/comupostdetail/:id" element={<ComuPostDetail />} />
        <Route path="/publishcomupost" element={<PublishComuPost />} />

        <Route path="/completemodify" element={<CompleteModify />} />
        <Route path="/nologin" element={<NoLogIn />} />
        <Route path="/noresume" element={<NoResume />} />
        <Route path="/signinwelcome" element={<SignInWelcome />} />
        <Route path="/noaccess" element={<NoAccess />} />

        <Route path="/aboutstep" element={<AboutStep/>} />
        <Route path="/searchresult" element={<SearchResult/>} />

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
