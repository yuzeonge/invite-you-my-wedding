require("dotenv").config();

Kakao.init(process.env.REACT_APP_KAKAO_INIT_KEY);
console.log(Kakao.isInitialized()); // 사용하려는 앱의 JavaScript 키 입력

Kakao.Share.createDefaultButton({
  container: "#kakaotalk-sharing-btn",
  objectType: "feed",
  content: {
    title: "소종범 🧡 권유정 결혼합니다.",
    description: "6월 2일 (일) 오후 12시 10분, 창원 힐스카이 10층 힐그랜드홀",
    imageUrl: "%PUBLIC_URL%/image/gallery/8.png",
    link: {
      // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
      webUrl: "https://www.inviteyou.info",
    },
  },
  buttons: [
    {
      title: "초대장 보기",
      link: {
        mobileWebUrl: "https://www.inviteyou.info",
        webUrl: "https://www.inviteyou.info",
      },
    },
  ],
});
