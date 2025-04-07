import { JSX, useLayoutEffect } from 'react';

import { useOutletContext } from 'react-router-dom';

import {
  AboutSubContents,
  AboutSubTitle,
  AboutContents,
  AboutHR,
  AboutTitle,
  Container,
  Wrap,
  AboutSubContainer,
  AboutTitleBox,
} from '../../styles/about/About';
import ScrollToTopButton from '../ScrollToTopButton';

const About = (): JSX.Element => {
  type OutletContextType = React.RefObject<HTMLDivElement>;
  const mainContentRef = useOutletContext<OutletContextType>();

  // 페이지 진입 시 스크롤 위치 초기화
  useLayoutEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  return (
    <>
      <Wrap>
        <Container>
          <AboutTitleBox>
            <AboutTitle>About Us</AboutTitle>
            <AboutHR />
          </AboutTitleBox>
          <AboutContents>
            데볼트는 개발자를 위한 더 나은 배움을, 더 의미 있는 연결을 제공합니다.
            <br />
            프로그래밍 학습부터 실전 테스트, 커뮤니티, 1:1 멘토링까지
            <br />
            개발자가 성장하는 데 필요한 모든 서비스를 제공합니다.
            <br />
            배우고, 도전하고, 소통하며 함께 성장하는 공간
            <br />
            그것이 우리가 만들어가는 개발자 중심의 플랫폼입니다.
          </AboutContents>
          <AboutSubContainer>
            <AboutSubTitle>Who We Are</AboutSubTitle>
            <AboutSubContents>
              2025년, 우리는 개발자들이 쉽고 체계적으로 배우고 성장할 수 있도록 돕기 위해 데볼트를
              시작했습니다. 많은 개발자들이 프로그래밍을 독학하거나, 취업을 준비하거나, 실력을
              향상시키기 위해 다양한 학습 자료를 찾아다닙니다. 하지만 정보가 분산되어 있거나, 원하는
              내용을 체계적으로 학습하기 어렵다는 문제에 직면하곤 합니다. 데볼트는 이러한 문제를
              해결하기 위해 만들어졌습니다.
              <br />
              우리는 프로그래밍 언어별 이론 학습, 실전 코딩 테스트, 자격증 대비 학습, 개발자
              커뮤니티, 그리고 1:1 매칭 멘토링 서비스까지 제공하여 개발자들이 한곳에서 필요한 모든
              것을 해결할 수 있도록 돕습니다.
              <br />
              자바, 파이썬, C, C++, 자바스크립트 등 다양한 프로그래밍 언어에 대한 이론 강의를
              제공하며, 이를 바탕으로 실력을 점검할 수 있도록 실전 코딩 테스트 문제도 함께
              제공합니다.
              <br />
              또한, 정보처리기사 자격증 대비 서비스를 통해 시험을 준비하는 개발자들이 보다
              효율적으로 학습할 수 있도록 도와드립니다.
              <br />
              학습 과정에서 궁금한 점이 생기거나, 다른 개발자들과 정보를 공유하고 싶을 때, 우리는
              커뮤니티 게시판을 통해 개발자들 간의 소통을 돕습니다. 여기서는 코딩 질문, 개발 관련
              진로 고민 상담, 스터디 및 팀 프로젝트 모집 등이 활발하게 이루어지며, 초보 개발자부터
              경험 많은 개발자들까지 자유롭게 의견을 나눌 수 있습니다.
              <br />
            </AboutSubContents>
          </AboutSubContainer>
          <AboutSubContainer>
            <AboutSubTitle>How We Work</AboutSubTitle>
            <AboutSubContents>
              데볼트는 단순한 온라인 학습 플랫폼이 아닙니다. 우리는 개발자들이 각자의 목표와 학습
              스타일에 맞춰 최적의 경험을 할 수 있도록 맞춤형 학습 서비스를 제공합니다. 코딩 학습을
              하다가 막히는 부분이 있거나, 특정한 기술을 깊이 있게 배우고 싶을 때, 경험이 풍부한
              선배 개발자에게 직접 배우는 것이 가장 효과적입니다. 데볼트의 1:1 매칭 멘토링 서비스를
              통해 여러분은 자신에게 꼭 맞는 멘토를 찾아 실무 기반의 조언을 얻을 수 있습니다.
              멘토링은 온라인 또는 오프라인으로 진행되며, 기술 학습뿐만 아니라 취업 전략, 포트폴리오
              개선, 프로젝트 진행 방법 등 다양한 주제로 멘토링을 받을 수 있습니다.
              <br />
              우리는 단순히 강의를 판매하는 것이 아니라, 개발자들이 정말 필요로 하는 것을 제공하고자
              합니다. 필요한 내용을 원하는 방식으로 학습할 수 있도록 온디맨드(On-Demand) 학습 모델을
              적용하여, 자신에게 맞는 속도로 학습할 수 있도록 설계했습니다. 또한, 정직한 가격 정책을
              유지하며 누구나 부담 없이 배울 수 있도록 노력하고 있습니다.
              <br />
            </AboutSubContents>
          </AboutSubContainer>
          <AboutSubContainer>
            <AboutSubTitle>Our Vision</AboutSubTitle>
            <AboutSubContents>
              우리의 목표는 ‘개발자의 성장을 돕는 최고의 플랫폼’이 되는 것입니다. 프로그래밍을
              배우고 싶거나, 실력을 점검하고 싶거나, 더 나은 개발자로 성장하고 싶다면, 데볼트가
              함께하겠습니다. 원하는 언어와 기술을 선택하고, 실전 문제를 풀며 성장하세요.
              커뮤니티에서 동료를 만나고, 스터디를 만들어 함께 학습하세요. 1:1 매칭을 통해 필요한
              도움을 받고, 더욱 깊이 있는 학습을 경험하세요. 데볼트는 개발자들이 자유롭게 배우고,
              소통하고, 성장할 수 있는 공간을 만들어갑니다.
            </AboutSubContents>
          </AboutSubContainer>
          <AboutContents>
            지금 바로 데볼트에 가입하고, 여러분만의 개발 여정을 시작해 보세요!
          </AboutContents>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default About;
