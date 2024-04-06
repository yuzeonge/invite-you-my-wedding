import { atom } from "recoil";

const infoModalState = atom({
  key: "modal",
  default: false,
});

export default infoModalState;
