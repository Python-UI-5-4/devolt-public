import { FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

// 찾을려는 파일 검색 EX) ctrl + F //Community_Mentor

interface ThemeProps {
  theme: 'light' | 'dark'; // theme.palette.mode의 값
}

const Mentor_STY = {
  //Community_Mentor
  AllWrap: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  TopBannerBox: styled.div`
    width: 100%;
    height: 200px;
    background-color: #e1fdf4;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  TopBanner: styled.div`
    width: 100%;
    max-width: 1600px;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    background-image: url('/images/mentor/mentor-banner.png');
    background-position: 100% 30%;
    background-repeat: no-repeat;
  `,

  BannerTitle: styled.div`
    width: 100%;
    font-size: 30px;
  `,

  BannerMiddle: styled.div`
    width: 100%;
    font-size: 20px;
  `,

  MainContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  //ContentsFilter
  // 검색,정렬 및 필터 관련-----------------------------------------------------------------------------
  SmartSearchContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  InputSearchContainer: styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
  `,

  InputSearchBox: styled.div<ThemeProps>`
    width: 85%;
    height: 40px;
    border-right: 1px solid var(--devolt-line);
    background-position: 20px;
    background-repeat: no-repeat;
    background-size: 15px;
    background-image: ${({ theme }) =>
      `url(${theme === 'light' ? '/images/icon/search_light.png' : '/images/icon/search.png'})`};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid var(--devolt-line);
    @media (max-width: 768px) {
      width: 80%;
    }
  `,

  InputSearch: styled.input`
    background-color: var(--devolt-dark);
    width: 100%;
    height: 100%;
    margin-left: 55px;
    padding-right: 20px;
    border: none;
    font-size: 12px;
    font-family: bold, sans-serif;
    color: var(--devolt-white);
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--devolt-white);
      opacity: 0.5;
    }
  `,

  InputSearchButton: styled.button`
    width: 15%;
    color: white;
    background-color: black;
    border: none;
    font-size: 12px;
    font-family: bold, sans-serif;
    cursor: pointer;
    &:hover {
      background-color: var(--devolt-hover);
    }
    @media (max-width: 768px) {
      width: 20%;
    }
  `,

  TagSearchContainer: styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
  `,

  TagSearchBox: styled.div<ThemeProps>`
    width: 85%;
    height: 40px;
    border-right: 1px solid var(--devolt-line);
    background-position: 20px;
    background-repeat: no-repeat;
    background-size: 15px;
    background-image: ${({ theme }) =>
      `url(${theme === 'light' ? '/images/icon/tag_light.png' : '/images/icon/tag.png'})`};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid var(--devolt-line);
    @media (max-width: 768px) {
      width: 80%;
    }
  `,

  TagSearch: styled.div`
    background-color: var(--devolt-dark);
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 55px;
    padding-right: 20px;
    border: none;
    font-size: 12px;
    font-family: bold, sans-serif;
    &:focus {
      outline: none;
    }
    &:empty::before {
      content: '태그로 검색해보세요!';
      color: var(--devolt-white);
      opacity: 0.5;
      font-size: 12px;
      font-family: bold, sans-serif;
    }
  `,

  TagSearchItem: styled.div`
    border: none;
    font-size: 12px;
    display: flex;
    border-radius: 5px;
    background-color: var(--devolt-black);
    color: var(--devolt-white);
    position: relative;
    font-family: bold, sans-serif;
    align-items: center;
    justify-content: center;
    padding: 4px 4px;
    &:focus {
      outline: none;
    }
  `,

  ResetButtonBox: styled.div`
    width: 15%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    border-bottom: 1px solid var(--devolt-line);
    @media (max-width: 768px) {
      width: 20%;
    }
  `,

  ResetButtonIcon: styled.div`
    width: 10px;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
    background-repeat: no-repeat;
    background-size: 10px;
    background-position: right;
    background-image: url('/images/icon/reset.png');
    position: relative;
  `,

  ResetButtonText: styled.div`
    color: black;
    border: none;
    text-align: left;
    font-size: 12px;
    font-family: extrabold, sans-serif;
    position: relative;
  `,

  DropDown: styled.select`
    width: 150px;
    padding: 8px;
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  `,

  //Contents
  // 맨토 Content Box 관련-----------------------------------------------------------------------------
  ContentsContainer: styled.div`
    width: 100%;
    display: grid;
    max-width: 1600px;
    align-items: center;
    justify-items: center;
    padding-right: 10px;
    box-sizing: border-box;
    @media (min-width: 760px) {
      grid-template-columns: repeat(4, 1fr);
      /* 4열 패턴 적용 */
      /* 기본: 홀수 행 패턴 */
      & > div:nth-child(4n + 1),
      & > div:nth-child(4n + 3) {
        background-color: var(--devolt-dark);
      }
      & > div:nth-child(4n + 2),
      & > div:nth-child(4n + 4) {
        background-color: var(--devolt-hover);
      }

      /* 짝수 행 반전: 4칸 주기로 반복 */
      & > div:nth-child(8n + 5),
      & > div:nth-child(8n + 7) {
        background-color: var(--devolt-hover);
      }
      & > div:nth-child(8n + 6),
      & > div:nth-child(8n + 8) {
        background-color: var(--devolt-dark);
      }

      /* 🔥 4번째 칸(border-right 제거) */
      & > div:nth-child(4n) {
        border-right: none;
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      /* 3열 패턴 적용 */
      /* 기본: 홀수 행 패턴 */
      & > div:nth-child(3n + 1),
      & > div:nth-child(3n + 3) {
        background-color: var(--devolt-dark);
      }
      & > div:nth-child(3n + 2) {
        background-color: var(--devolt-hover);
      }

      /* 짝수 행 반전: 3칸 주기로 반복 */
      & > div:nth-child(6n + 4),
      & > div:nth-child(6n + 6) {
        background-color: var(--devolt-hover);
      }
      & > div:nth-child(6n + 5) {
        background-color: var(--devolt-dark);
      }
    }
    & > div:hover {
      background-color: var(--devolt-black);
    }
  `,

  MentorContentBox: styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--devolt-line);
    border-right: 1px solid var(--devolt-line);
    cursor: pointer;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  `,

  TopInContentBox: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
  `,

  ProfileUrl: styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    object-fit: cover; // 이미지 비율 유지하며 채우기
    border-radius: 50%; /* 동그랗게 만들기 */
    border: 1px solid var(--devolt-line);
  `,

  RightBox: styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
  `,

  Nickname: styled.div`
    width: 100%;
    font-size: 12px;
    font-family: extrabold;
    color: var(--devolt-white);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      color: var(--devolt-black);
    }
  `,

  ApplyCount: styled.div`
    width: 100%;
    padding-top: 2px;
    font-size: 10px;
    font-family: bold;
    color: var(--devolt-white);
    opacity: 0.5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  `,

  MiddleInContentBox: styled.div`
    width: 100%;
    margin-top: 10px;
  `,

  Title: styled.div`
    width: 100%;
    font-size: 14px;
    line-height: 22px;
    font-family: extrabold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  `,

  BottomInContentBox: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,

  Position: styled.div`
    width: 100%;
    font-size: 12px;
    color: var(--devolt-white);
    margin-top: 15px;
    font-family: bold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
      font-weight: 600;
      color: gray;
    }
  `,

  Career: styled.div`
    width: 100%;
    font-size: 12px;
    color: var(--devolt-white);
    font-family: bold;
    margin-top: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
      font-weight: 600;
      color: gray;
    }
  `,

  CurrentJob: styled.div`
    width: 100%;
    font-size: 12px;
    color: var(--devolt-white);
    font-family: bold;
    margin-top: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
      font-weight: 600;
      color: gray;
    }
  `,

  Box: styled.div`
    width: 100%;
    margin-top: 10px;
    font-size: 12px;
    font-family: bold;
    color: var(--devolt-white);
    display: flex;
    flex-direction: row;
    gap: 2px;
  `,

  StarRating: styled.div`
    width: 50px;
    color: var(--devolt-purple);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    gap: 3px;
    cursor: pointer;
  `,
  ChevronRight: styled(FaChevronRight)`
    font-size: 0.6em;
    opacity: 0.8;
  `,

  DataNotFound: styled.div`
    width: 100%;
    color: var(--devolt-white);
    font-family: bold;
    padding: 30px;
    text-align: center;
    font-size: 14px;
  `,
};

export default Mentor_STY;
