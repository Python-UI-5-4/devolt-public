import React from 'react';

import type { SideBarProps } from '../navBar/BarType';

import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuLink,
  MenuTitle,
} from '../../styles/sideBar/MoreBar';

const MoreBar: React.FC<SideBarProps> = ({ isMenuOpen }) => {
  return (
    <Container isMenuOpen={isMenuOpen}>
      <MenuContainer>
        <MenuColumn>
          <MenuLink
            onClick={() => window.open('https://www.acmicpc.net', '_blank')}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <MenuTitle>백준 온라인 저지</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn>
          <MenuLink
            onClick={() => window.open('https://swexpertacademy.com/main/main.do', '_blank')}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <MenuTitle>SW Expert Academy</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn>
          <MenuLink
            onClick={() => window.open('https://programmers.co.kr/', '_blank')}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <MenuTitle>프로그래머스</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn>
          <MenuLink
            onClick={() => window.open('https://codeup.kr/', '_blank')}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <MenuTitle>코드업</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn>
          <MenuLink
            onClick={() => window.open('https://leetcode.com/', '_blank')}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <MenuTitle>LeetCode</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn>
          <MenuLink
            onClick={() => window.open('https://codeforces.com/', '_blank')}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <MenuTitle>Codeforces</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn>
          <MenuLink
            onClick={() => window.open('https://www.hackerrank.com/', '_blank')}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <MenuTitle>Hackerrank</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn>
          <MenuLink
            onClick={() => window.open('https://devth.goorm.io/', '_blank')}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <MenuTitle>구름DEVTH</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn>
          <MenuLink
            onClick={() =>
              window.open('https://www.geeksforgeeks.org/top-10-ides-for-programmers/', '_blank')
            }
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <MenuTitle>IDE Top 10</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn>
          <MenuLink
            onClick={() =>
              window.open(
                'https://clickup.com/ko/blog/145498/productivity-tools-for-agencies',
                '_blank',
              )
            }
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <MenuTitle>협업 도구 Top 10</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn>
          <MenuLink
            onClick={() =>
              window.open('https://terms.tta.or.kr/dictionary/searchList.do', '_blank')
            }
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <MenuTitle>IT 용어 사전</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn>
          <MenuLink
            onClick={() =>
              window.open(
                'https://lifebase.kr/011-certi-com-it/?utm_source=chatgpt.com#google_vignette',
                '_blank',
              )
            }
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <MenuTitle>IT 관련 자격증</MenuTitle>
          </MenuLink>
        </MenuColumn>
        <MenuColumn>
          <MenuLink
            onClick={() => window.open('https://pypl.github.io/PYPL.html', '_blank')}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <MenuTitle>연도별 언어 인기 순위</MenuTitle>
          </MenuLink>
        </MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default MoreBar;
