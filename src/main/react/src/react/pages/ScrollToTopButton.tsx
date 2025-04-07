import React from 'react';

import { useOutletContext } from 'react-router-dom';

import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import Fab from '@mui/material/Fab';
import zIndex from '@mui/material/styles/zIndex';

import { OutletContextType } from './study/StudyType';

const ScrollToTopButton: React.FC = () => {
  const mainContentRef = useOutletContext<OutletContextType>();

  const scrollToTop = (): void => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const fabStyle = {
    position: 'fixed',
    bottom: 30,
    right: 30,
  };

  return (
    <Fab sx={fabStyle} size="large" aria-label="edit" onClick={scrollToTop}>
      <VerticalAlignTopIcon />
    </Fab>
  );
};

export default ScrollToTopButton;
