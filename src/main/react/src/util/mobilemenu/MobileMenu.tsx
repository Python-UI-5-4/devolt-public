export const menus = [
  {
    id: 'about',
    label: '데볼트',
    list: [
      {
        contents: { title: 'about', index: '데볼트 소개', link: '/about' },
      },
    ],
  },

  {
    id: 'study',
    label: '언어공부',
    list: [
      {
        contents: { title: 'java', index: 'Java', link: '/study/java' },
      },
      {
        contents: { title: 'python', index: 'Python', link: '/study/python' },
      },
      {
        contents: { title: 'c', index: 'C', link: '/study/c' },
      },
      {
        contents: { title: 'cplus', index: 'C++', link: '/study/cplus' },
      },
      {
        contents: { title: 'javascript', index: 'JavaScript', link: '/study/javaScript' },
      },
    ],
  },

  {
    id: 'codingtest',
    label: '코딩테스트',
    list: [
      {
        contents: { title: 'practice', index: '연습문제', link: '/codingtest/practice' },
      },
      {
        contents: { title: 'basic', index: '1단계', link: '/codingtest/basic' },
      },
      {
        contents: { title: 'intermediate', index: '2단계', link: '/codingtest/intermediate' },
      },
      {
        contents: { title: 'expoert', index: '3단계', link: '/codingtest/expert' },
      },
    ],
  },

  {
    id: 'exam',
    label: '정보처리기사',
    list: [
      {
        contents: { title: 'mock', index: '랜덤문제풀이', link: '/exam/mock/random' },
      },
      {
        contents: { title: 'previous', index: '기출문제', link: '/exam/previous/220424' },
      },
    ],
  },

  {
    id: 'community',
    label: '커뮤니티',
    list: [
      {
        contents: { title: 'coding', index: '코딩 질문', link: '/community/coding' },
      },
      {
        contents: { title: 'course', index: '진로 질문', link: '/community/course' },
      },
      {
        contents: { title: 'study', index: '스터디', link: '/community/study' },
      },
      {
        contents: { title: 'team', index: '팀 프로젝트', link: '/community/team' },
      },
      {
        contents: { title: 'mentor', index: '멘토링', link: '/community/mentor' },
      },
    ],
  },

  {
    id: 'roadmap',
    label: '로드맵',
    list: [
      {
        contents: { title: 'frontend', index: '프론트엔드 개발자', link: '/roadmap/frontend' },
      },
      {
        contents: { title: 'backend', index: '백엔드 개발자', link: '/roadmap/backend' },
      },
      {
        contents: { title: 'devops', index: '데브옵스 개발자', link: '/roadmap/devops' },
      },
      {
        contents: { title: 'fullstack', index: '풀스택 개발자', link: '/roadmap/fullstack' },
      },
    ],
  },

  {
    id: 'more',
    label: '외부링크',
    list: [
      {
        contents: { title: 'more01', index: '백준 온라인 저지', link: 'https://www.acmicpc.net/' },
      },
      {
        contents: {
          title: 'more02',
          index: '삼성 SW 익스퍼트 아카데미',
          link: 'https://swexpertacademy.com/',
        },
      },
      {
        contents: { title: 'more03', index: '프로그래머스', link: 'https://programmers.co.kr/' },
      },
      {
        contents: { title: 'more04', index: '코드업', link: 'https://codeup.kr/' },
      },
      {
        contents: { title: 'more05', index: 'LeetCode', link: 'https://leetcode.com/' },
      },
      {
        contents: { title: 'more06', index: 'Codeforces', link: 'https://codeforces.com/' },
      },
      {
        contents: { title: 'more07', index: 'Hackerrank', link: 'https://www.hackerrank.com/' },
      },
      {
        contents: { title: 'more08', index: '구름DEVTH', link: 'https://devth.goorm.io/' },
      },
      {
        contents: {
          title: 'more09',
          index: 'IDE Top 10',
          link: 'https://www.geeksforgeeks.org/top-10-ides-for-programmers/',
        },
      },
      {
        contents: {
          title: 'more10',
          index: '협업 도구 Top 10',
          link: 'https://clickup.com/ko/blog/145498/productivity-tools-for-agencies',
        },
      },
      {
        contents: {
          title: 'more11',
          index: 'IT 용어 사전',
          link: 'https://terms.tta.or.kr/dictionary/searchList.do',
        },
      },
      {
        contents: {
          title: 'more12',
          index: 'IT 관련 자격증',
          link: 'https://lifebase.kr/011-certi-com-it/?utm_source=chatgpt.com#google_vignette',
        },
      },
      {
        contents: {
          title: 'more13',
          index: '연도별 언어 인기 순위',
          link: 'https://pypl.github.io/PYPL.html',
        },
      },
    ],
  },

  {
    id: 'cs',
    label: '문의',
    list: [
      {
        contents: { title: 'suggest', index: '데볼트에 문의하기', link: '/cs/suggestion' },
      },
    ],
  },
  {
    id: 'mypage',
    label: '마이페이지',
    list: [
      {
        contents: { title: 'account', index: '계정 관리', link: '/mypage/account' },
      },
      {
        contents: { title: 'userfeed', index: '내 소개', link: '/mypage/userfeed' },
      },
      {
        contents: { title: 'withdrawal', index: '회원 탈퇴', link: '/mypage/withdrawal' },
      },
      {
        contents: { title: 'study', index: '언어 공부', link: '/mypage/study' },
      },
      {
        contents: { title: 'codingtest', index: '코딩테스트', link: '/mypage/codingtest' },
      },
      {
        contents: {
          title: 'community',
          index: '커뮤니티 게시판 작성글',
          link: '/mypage/community',
        },
      },
      {
        contents: { title: 'report', index: '악성 사용자 신고 내역', link: '/mypage/report' },
      },
      {
        contents: { title: 'suggestion', index: '문의 내역', link: '/mypage/suggestion' },
      },
      {
        contents: { title: 'mentor', index: '내 멘토 보기', link: '/mypage/mentor' },
      },
      {
        contents: { title: 'mentee', index: '내 멘티 보기', link: '/mypage/mentee' },
      },
    ],
  },
];
