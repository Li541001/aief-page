export const UESR_HIGH = window.innerHeight;
export const UESR_WIDTH = window.innerWidth;
export const Y = document.scrollingElement.scrollTop;
const BOTTOM = UESR_HIGH * 3;
const PAGE2_1 = UESR_HIGH * 0.92;
const PAGE2_2 = UESR_HIGH * 1.72;
const PAGE2_3 = UESR_HIGH * 2.55;

const PAGE3_1 = UESR_HIGH * 0.92;
const PAGE3_2 = UESR_HIGH * 1.81;
const PAGE3_3 = UESR_HIGH * 2.71;

export const PAGE_TITLE_LIST = {
  1: [
    {
      label: "請好好觀賞",
      pageHigh: 0,
    },
    {
      label: "傳送門禁止使用",
      pageHigh: 0,
    },
  ],
  2: [
    {
      label: "Top",
      pageHigh: 0,
    },
    {
      label: "營運總監",
      pageHigh: PAGE2_1,
    },
    {
      label: "軟體工程師",
      pageHigh: PAGE2_2,
    },
    {
      label: "品質管理",
      pageHigh: PAGE2_3,
    },
    {
      label: "Bottom",
      pageHigh: BOTTOM,
    },
  ],
  3: [
    {
      label: "Top",
      pageHigh: 0,
    },
    {
      label: "圖片展示",
      pageHigh: PAGE3_1,
    },
    {
      label: "影片展示",
      pageHigh: PAGE3_2,
    },
    {
      label: "更多資訊",
      pageHigh: PAGE3_3,
    },
    {
      label: "Bottom",
      pageHigh: BOTTOM,
    },
  ],
  4: [
    { label: "產品特色", link: "" },
    {
      label: "團隊介紹",
      link: "/author",
    },
    {
      label: "產品展示",
      link: "/pic",
    },
  ],
};
