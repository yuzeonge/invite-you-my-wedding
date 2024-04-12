export default function transferTime(value) {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return "방금전";
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
}

export function ddayCount() {
  const today = new Date();
  const dday = new Date(2024, 6, 2, 12, 10);

  const timeGap = dday.getTime() - today.getTime();

  const day = Math.ceil(timeGap / (1000 * 60 * 60 * 24));

  const seconds = String(Math.floor(((timeGap / 1000) % 60).padStart(2, "0")));
  const minute = String(Math.floor(((timeGap / (1000 * 60)) % 60).padStart(2, "0")));
  const hours = String(Math.floor(((timeGap / (1000 * 60 * 60)) % 24).padStart(2, "0")));

  if (timeGap <= 0) {
  }
}
