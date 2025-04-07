import React from 'react';

import { useNavigate } from 'react-router-dom';

import type { SideBarProps } from '../navBar/BarType';

import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuLink,
  MenuTitle,
} from '../../styles/sideBar/RoadMapBar';

const RoadMapBar: React.FC<SideBarProps> = ({ isMenuOpen }) => {
  const navigate = useNavigate();

  const handleNavigation = (navigatepath: string): void => {
    navigate(navigatepath);
  };

  const subMenuData = [
    {
      title: '프론트엔드 개발자',
      navigatepath: '/roadmap/frontend',
    },
    {
      title: '백엔드 개발자',
      navigatepath: '/roadmap/backend',
    },
    {
      title: '데브옵스 개발자',
      navigatepath: '/roadmap/devops',
    },
    {
      title: '풀스택 개발자',
      navigatepath: '/roadmap/fullstack',
    },
  ];

  return (
    <Container isMenuOpen={isMenuOpen}>
      <MenuContainer>
        {subMenuData.map((menu, index) => (
          <MenuColumn key={index}>
            <MenuLink onClick={() => handleNavigation(menu.navigatepath)}>
              <MenuTitle>{menu.title}</MenuTitle>
            </MenuLink>
          </MenuColumn>
        ))}
      </MenuContainer>
    </Container>
  );
};

export default RoadMapBar;
