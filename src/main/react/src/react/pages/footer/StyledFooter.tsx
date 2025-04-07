import { JSX } from 'react';

import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material';

import {
  Wrap,
  Container,
  FooterContentsLeft,
  FooterContentsRight,
  MainBox,
  LogoContainer,
  Logo,
  MainLeftBox,
  MainRightBox,
  TermsLink,
  MainMobileBox,
} from '../../styles/footer/StyledFooter';

const StyledFooter = (): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Wrap>
        <Container>
          <LogoContainer>
            <Logo theme={theme.palette.mode} />
          </LogoContainer>
          <MainBox>
            <MainLeftBox>
              <FooterContentsLeft>
                데볼트 / 서울특별시 강남구 테헤란로14길 6 / 000-00-00000 / devolt.service@gmail.com
              </FooterContentsLeft>
              <FooterContentsLeft>
                모든 콘텐츠, 정보, 소스 등에 대한 무단 복제, 전송, 배포, 크롤링 등의 행위를
                거부하며, 이러한 행위는 관련 법령에 의해 엄격히 금지됩니다.
              </FooterContentsLeft>
            </MainLeftBox>
            <MainRightBox>
              <FooterContentsRight>
                <TermsLink
                  onClick={() => {
                    navigate('/legal/terms');
                  }}
                >
                  이용약관
                </TermsLink>{' '}
                /
                <TermsLink
                  onClick={() => {
                    navigate('/legal/privacy');
                  }}
                >
                  개인정보처리방침
                </TermsLink>
              </FooterContentsRight>
              <FooterContentsRight>© 2025 devolt. All rights reserved.</FooterContentsRight>
            </MainRightBox>
            <MainMobileBox>
              데볼트 / 서울특별시 강남구 테헤란로14길 6 / 000-00-00000
              <br />
              문의메일 devolt.service@gmail.com
              <br />
              <br />
              모든 콘텐츠, 정보, 소스 등에 대한 무단 복제, 전송, 배포, 크롤링 등의 행위를 거부하며,
              이러한 행위는 관련 법령에 의해 엄격히 금지됩니다.
              <br />© 2025 devolt. All rights reserved.
            </MainMobileBox>
            <MainMobileBox>
              <TermsLink
                onClick={() => {
                  navigate('/legal/terms');
                }}
              >
                이용약관
              </TermsLink>{' '}
              /
              <TermsLink
                onClick={() => {
                  navigate('/legal/privacy');
                }}
              >
                개인정보처리방침
              </TermsLink>
            </MainMobileBox>
          </MainBox>
        </Container>
      </Wrap>
    </>
  );
};

export default StyledFooter;
