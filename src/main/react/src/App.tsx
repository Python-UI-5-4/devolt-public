import React, { JSX, useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material';

import { ResponseInterceptors } from './api/AxiosInstance';
import About from './react/pages/about/About';
import Admin_Cs_Post_Read from './react/pages/admin/components/Board/Cs_Post_Read';
import Admin_Main from './react/pages/admin/pages/Account/Admin_Account';
import Admin_DataCentre from './react/pages/admin/pages/DataCentre/Admin_DataCentre';
import Admin_Report from './react/pages/admin/pages/Report/Admin_Report';
import Admin_SearchUser from './react/pages/admin/pages/SearchUser/Admin_SearchUser';
import Admin_Suggestion from './react/pages/admin/pages/Suggestion/Admin_Suggestion';
import CodingTest_Coding from './react/pages/codingtest/subpages/CodingTest_Coding';
import CodingTest_Main from './react/pages/codingtest/subpages/CodingTest_Main';
import Community_Main from './react/pages/community/pages/Community_Main';
import AcceptMentor from './react/pages/community/pages/mentor/Accept_Mentor';
import Community_Mentor from './react/pages/community/pages/mentor/Community_Mentor';
import Post_Write_Mentor from './react/pages/community/pages/mentor/Post_Write_Mentor';
import Post_Modify from './react/pages/community/pages/Post_Modify';
import Post_Read from './react/pages/community/pages/Post_Read';
import Post_Write from './react/pages/community/pages/Post_Write';
import User_Main from './react/pages/community/pages/User_Main';
import Report from './react/pages/cs/Report';
import Suggestion from './react/pages/cs/Suggestion';
import Exam_MockTest from './react/pages/exam/pages/Exam_MockTest';
import Exam_PreviousTest from './react/pages/exam/pages/Exam_PreviousTest';
import Layout from './react/pages/Layout';
import Privacy from './react/pages/legal/Privacy';
import Terms from './react/pages/legal/Terms';
import FindId from './react/pages/login/FindId';
import FindPw from './react/pages/login/FindPw';
import Login from './react/pages/login/login';
import Main from './react/pages/main/Main';
import Cs_Post_Read from './react/pages/mypage/components/Board/Cs_Post_Read';
import MyPage_Main from './react/pages/mypage/pages/Account/MyPage_Account';
import MyPage_CodingTest from './react/pages/mypage/pages/CodingTest/MyPage_CodingTest';
import MyPage_Community from './react/pages/mypage/pages/Community/MyPage_Community';
import MyPage_MenteeList from './react/pages/mypage/pages/MenteeList/MyPage_MenteeList';
import MyPage_MentorList from './react/pages/mypage/pages/MentorList/MyPage_MentorList';
import MyPage_Report from './react/pages/mypage/pages/Report/MyPage_Report';
import MyPage_Study from './react/pages/mypage/pages/Study/MyPage_Study';
import MyPage_Suggestion from './react/pages/mypage/pages/Suggestion/MyPage_Suggestion';
import MyPage_UserFeed from './react/pages/mypage/pages/UserFeed/MyPage_UserFeed';
import MyPage_Withdrawal from './react/pages/mypage/pages/Withdrawal/MyPage_Withdrawal';
import Roadmap_Backend from './react/pages/roadmap/pages/Roadmap_Backend';
import Roadmap_DevOps from './react/pages/roadmap/pages/Roadmap_DevOps';
import Roadmap_Frontend from './react/pages/roadmap/pages/Roadmap_Frontend';
import Roadmap_Fullstack from './react/pages/roadmap/pages/Roadmap_Fullstack';
import Signup from './react/pages/signup/signup';
import Study_Class from './react/pages/study/pages/Study_Class';
import Study_Main from './react/pages/study/pages/Study_Main';
import GlobalStyle from './react/styles/GlobalStyle';
import { useAppDispatch, useAppSelector } from './redux/hooks/reduxHooks';
import { checkAutoLogin } from './redux/slice/authSlice';
import { setTheme } from './redux/slice/themeSlice';
import RequiredAuth from './util/RequiredAuth';

const App = (): JSX.Element => {
  // 기본은 다크 모드로 설정
  const ClientTheme: 'dark' | 'light' = useAppSelector((state) => state.theme.mode);
  const [mode, setMode] = useState<'light' | 'dark'>(ClientTheme);
  const userStatus = useAppSelector((state) => state.auth.status);

  const dispatch = useAppDispatch();

  // 다크/라이트 모드에 맞는 data-theme 설정
  // 페이지 로딩 시 현재 모드가 무엇인지 확인하고 적용
  useEffect(() => {
    document.body.setAttribute('data-theme', mode);
  }, [mode]);

  const toggleTheme = (): void => {
    setMode((prev) => {
      const newMode = prev === 'dark' ? 'light' : 'dark';
      dispatch(setTheme(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(checkAutoLogin());
    }
  }, [userStatus, dispatch]);

  return (
    <Router>
      <AppContents mode={mode} toggleTheme={toggleTheme} />
    </Router>
  );
};

export default App;

interface AppContentsProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

const AppContents: React.FC<AppContentsProps> = ({ mode, toggleTheme }) => {
  const location = useLocation();
  const isAuthPage = ['/signup', '/login', '/findid', '/findpw'].includes(location.pathname);

  // 테마 객체 생성 및 특정 페이지에서는 항상 다크 모드 적용
  const theme = createTheme({
    palette: {
      mode: isAuthPage ? 'dark' : mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle mode={mode} />
        <ResponseInterceptors />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/findpw" element={<FindPw />} />
          <Route path="/community/:boardType/write" element={<Post_Write />} />
          <Route path="/community/:boardType/modify/:boardId" element={<Post_Modify />} />
          <Route path="/acceptMentor/:mentorId/:menteeKey" element={<AcceptMentor />} />
          <Route path="/community/mentor/write" element={<Post_Write_Mentor />} />
          <Route path="/cs/report/:boardId" element={<Report />} />
          <Route path="/cs/suggestion" element={<Suggestion />} />
          <Route path="/codingtest/:level/:challengeId" element={<CodingTest_Coding />} />
          <Route path="/" element={<Layout mode={mode} toggleTheme={toggleTheme} />}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            {StudyRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {CodingTestRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {ExamRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {CommunityRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {RoadMapRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {MyPageRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {AdminPageRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {LegalRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

const StudyRoutes = [
  { path: '/study/:language', element: <Study_Main /> },
  { path: '/study/:language/:cat1/:cat2', element: <Study_Class /> },
];

const CodingTestRoutes = [{ path: '/codingtest/:level', element: <CodingTest_Main /> }];

const ExamRoutes = [
  { path: '/exam/mock/:chapter', element: <Exam_MockTest /> },
  { path: '/exam/previous/:testdate', element: <Exam_PreviousTest /> },
];

const CommunityRoutes = [
  { path: '/community/:boardType', element: <Community_Main /> },
  { path: '/community/:boardType/post/:boardId', element: <Post_Read /> },
  { path: '/community/mentor', element: <Community_Mentor /> },
  { path: '/community/user/:userId', element: <User_Main /> },
];

const RoadMapRoutes = [
  { path: '/roadmap/frontend', element: <Roadmap_Frontend /> },
  { path: '/roadmap/backend', element: <Roadmap_Backend /> },
  { path: '/roadmap/devops', element: <Roadmap_DevOps /> },
  { path: '/roadmap/fullstack', element: <Roadmap_Fullstack /> },
];

const MyPageRoutes = [
  {
    path: '/mypage/account',
    element: (
      <RequiredAuth>
        <MyPage_Main />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/mypage/userfeed',
    element: (
      <RequiredAuth>
        <MyPage_UserFeed />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/mypage/withdrawal',
    element: (
      <RequiredAuth>
        <MyPage_Withdrawal />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/mypage/study',
    element: (
      <RequiredAuth>
        <MyPage_Study />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/mypage/codingtest',
    element: (
      <RequiredAuth>
        <MyPage_CodingTest />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/mypage/community',
    element: (
      <RequiredAuth>
        <MyPage_Community />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/mypage/report',
    element: (
      <RequiredAuth>
        <MyPage_Report />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/mypage/suggestion',
    element: (
      <RequiredAuth>
        <MyPage_Suggestion />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/mypage/:boardType/post/:boardId',
    element: (
      <RequiredAuth>
        <Cs_Post_Read />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/mypage/mentor',
    element: (
      <RequiredAuth>
        <MyPage_MentorList />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/mypage/mentee',
    element: (
      <RequiredAuth>
        <MyPage_MenteeList />
      </RequiredAuth>
    ),
    auth: true,
  },
];

const AdminPageRoutes = [
  {
    path: '/admin/account',
    element: (
      <RequiredAuth>
        <Admin_Main />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/admin/report',
    element: (
      <RequiredAuth>
        <Admin_Report />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/admin/suggestion',
    element: (
      <RequiredAuth>
        <Admin_Suggestion />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/admin/:boardType/post/:boardId',
    element: (
      <RequiredAuth>
        <Admin_Cs_Post_Read />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/admin/search/users',
    element: (
      <RequiredAuth>
        <Admin_SearchUser />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: '/admin/data/user',
    element: (
      <RequiredAuth>
        <Admin_DataCentre />
      </RequiredAuth>
    ),
    auth: true,
  },
];

const LegalRoutes = [
  { path: '/legal/terms', element: <Terms /> },
  { path: '/legal/privacy', element: <Privacy /> },
];
