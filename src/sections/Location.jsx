import { Container, Flex, TextCategoryTitle, EmptyBox } from "../styles";
import styled from "styled-components";

export default function Location() {
  return (
    <Container>
      <Flex>
        <Image src="image/image 14.png" />
        <AbsoluteText>함께 자리를 빛내줄 소중한 분들을 초대합니다.</AbsoluteText>
      </Flex>
      <Flex className="blue">
        <EmptyBox />
        <TextCategoryTitle>location</TextCategoryTitle>
        <Text>창원 힐스카이웨딩 10층</Text>
        <Text>힐그랜드홀</Text>
        <Text>2024년 6월 2일</Text>
        <Text>점심 12시 10분</Text>
        <MapWrapper>
          <MapIcon src="nav-icon/kakaomap.png" />
          <MapIcon src="nav-icon/navermap.png" />
          <MapIcon src="nav-icon/tmap.png" />
          <MapIcon src="nav-icon/googlemap.png" />
        </MapWrapper>
      </Flex>
      <Flex className="blue">
        <LocationInfoBox>
          <Text className="t">창원 힐스카이웨딩 & 컨벤션 힐그랜드홀</Text>
          <ImageWedding src="image/weddingholl-image.jpeg" />
          <Text className="tb">도로명 주소</Text>
          <Text>경남 창원시 마산회원구 봉앙로 133</Text>
          <Text className="tb">지번 주소</Text>

          <Text>봉암동 391-205</Text>
          <Text className="tb">버스를 타고 오실 경우</Text>
          <Text>
            <B>봉앙공단 입구</B>에서 하차
          </Text>
          <Text>간선 - 107, 114, 160, 163, 164</Text>
          <Text>지선 - 257</Text>
          <Text>좌석 - 740, 3002</Text>
          <Text className="tb">자가용을 이용하실 경우</Text>
          <Text>
            봉암공단사거리, 창원역, 마산시외버스 터미널, 마산 어시장, 마산역 경전성(<B>마산 봉암수원지 입구</B> 유턴 후 <B>300m 직진</B>)
          </Text>
          <Text>진해, 창원, 시외버스터미널, 창원대로 힐스카이 앞 도착</Text>
          <Text>
            <B>자유지역교 이용시</B> GS셀프 주유소 지나 CU편의점 좌회전
          </Text>
          <Text>
            <B>고속도로 이용 시</B> 동마산 IC 진입 10분 거리
          </Text>
        </LocationInfoBox>
        <EmptyBox />
      </Flex>
    </Container>
  );
}

const Image = styled.img`
  background-color: #4d4d4db5;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const AbsoluteText = styled.p`
  font-size: 1.4rem;
  position: absolute;
  color: white;
  text-shadow: 2px 2px 2px 2px 2em #67676728;
`;

const ImageWedding = styled.img`
  width: 100%;
  margin-top: 12px;
`;

const LocationInfoBox = styled.div`
  width: 80%;
`;

const MapWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const MapIcon = styled.img`
  border-radius: 12px;
  width: 15%;
  margin: 5px;
  box-shadow: 2px 2px 0.3em #67676728;
`;

const Text = styled.p`
  font-size: 1.2rem;

  &.t {
    font-size: 1.5rem;
  }
  &.tb {
    font-weight: bold;
    margin-top: 12px;
  }
`;

const B = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
`;
