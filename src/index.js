import Swiper, {
  Navigation,
} from 'swiper';
// swiper bundle styles
import 'swiper/css';
import 'swiper/css/navigation';

import "./index.css";

// ----------------- Panel 相關 ---------------
const plusBtn = document.getElementById("plus-btn");
const msgBtn = document.getElementById("msg-btn");
const notificationBtn = document.getElementById("notification-btn");
const moresBtn = document.getElementById("more-btn");

const plusPanel = document.getElementById("plus-panel");
const msgPanel = document.getElementById("msg-panel");
const notificationPanel = document.getElementById("notification-panel");
const moresPanel = document.getElementById("more-panel");

const panels = [plusPanel, msgPanel, notificationPanel, moresPanel];

function openPanel(index) {
  panels.forEach((p, idx) => {
    p.classList.add("hidden");

    if (index === idx) {
      p.classList.remove("hidden");
      return;
    }

    if (p.classList.contains("hidden")) {
      return;
    }
  });
}

window.addEventListener("click", function () {
  openPanel(-1);
  console.log('window');
});

plusBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  openPanel(0);
});

msgBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  openPanel(1);
});

notificationBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  openPanel(2);
});

moresBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  openPanel(3);
});

// 取消告訴 window 被點擊的情況
plusPanel.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log('plus');
});

msgPanel.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log('msgPanel');
});

notificationPanel.addEventListener("click", function (event) {
  event.stopPropagation();
});

moresPanel.addEventListener("click", function (event) {
  event.stopPropagation();
});

// ------------- 左側相關 --------------------
const leftBlock = document.getElementById("left-block");

function renderLeftItem(name, imageUrl) {
  const item = `
    <div class="flex items-center justify-items-center w-full p-2 mb-1 rounded hover:bg-fb-input cursor-pointer">
      <div class="w-[32px] overflow-hidden rounded-full mr-4">
        <img src="${imageUrl}" alt="">
      </div>
      <p class="text-white text-[.9rem]">${name}</p>
    </div>
  `;
  return item;
}

function renderLeftBlock() {
  const leftArr = [
    {
      name: "萊恩",
      img: "https://bruce-fe-fb.web.app/image/avator.png",
    },
    {
      name: "活動",
      img: "https://bruce-fe-fb.web.app/image/left/activity.svg",
    },
    {
      name: "天氣",
      img: "https://bruce-fe-fb.web.app/image/left/cloudy.png",
    },
    {
      name: "災害應變中心",
      img: "https://bruce-fe-fb.web.app/image/left/dynamic.svg",
    },
    {
      name: "新冠病毒應變中心",
      img: "https://bruce-fe-fb.web.app/image/left/facemask.svg",
    },
    {
      name: "社團",
      img: "https://bruce-fe-fb.web.app/image/left/friend.svg",
    },
    {
      name: "企業管理平台",
      img: "https://bruce-fe-fb.web.app/image/left/job.png",
    },
    {
      name: "Messenger",
      img: "https://bruce-fe-fb.web.app/image/left/messenger.svg",
    },
    {
      name: "近期廣告動態",
      img: "https://bruce-fe-fb.web.app/image/left/pay.png",
    },
    {
      name: "朋友名單",
      img: "https://bruce-fe-fb.web.app/image/left/sale.png",
    },
    {
      name: "最愛",
      img: "https://bruce-fe-fb.web.app/image/left/star.svg",
    },
    {
      name: "Marketplace",
      img: "https://bruce-fe-fb.web.app/image/left/store.svg",
    },
    {
      name: "Watch",
      img: "https://bruce-fe-fb.web.app/image/left/watchingTv.svg",
    },
  ];
  let htmlStr = "";
  // for (let i = 0; i < 5; i++) {
  //   htmlStr = htmlStr + renderLeftItem('萊恩', 'https://bruce-fe-fb.web.app/image/avator.png');
  // }
  leftArr.forEach((obj) => {
    htmlStr = htmlStr + renderLeftItem(obj.name, obj.img);
  });
  leftBlock.innerHTML = htmlStr;
}

renderLeftBlock();

// ------------- 右側相關 --------------------
const rightBlock = document.getElementById("right-block");

function renderRightBlock() {
  const rightItem = `
<div class="flex items-center w-full py-2 px-1 rounded hover:bg-fb-input cursor-pointer">
    <div class="w-[45px]">
      <div class="relative w-[32px] cursor-pointer">
        <div class="overflow-hidden rounded-full">
          <img src="https://bruce-fe-fb.web.app/image/avator.png" alt="">
        </div>
        <div class="w-[8px] h-[8px] rounded-full bg-green-500 absolute bottom-0 right-0 ring-gray-900 ring"></div>
      </div>
    </div>
    <p class="text-white text-[.9rem]">萊恩</p>
  </div>
`;

  let htmlStr = '<p class="mb-2 text-lg text-gray-400">聯絡人</p>';
  for (let i = 0; i < 10; i++) {
    htmlStr = htmlStr + rightItem;
  }

  rightBlock.innerHTML = htmlStr;
}

renderRightBlock();


// --------------- 限時動態 ---------------

const storyList = document.getElementById('story-list')

function renderStoryItem() {
 

  for (let i = 0; i < 5; i++) {

    const divBox = document.createElement('div');
    divBox.classList.add('flex-1', 'px-[4px]', 'min-w-[120px]', 'cursor-pointer');

    divBox.innerHTML = `
      <div class="relative overflow-hidden" id="story-${i}">
        <div id="story-mask-${i}" class="hidden absolute w-full h-full top-0 left-0 bg-black/20 z-20"></div>
        <div class="w-[32px] h-[32px] absolute top-4 left-4 ring-4 ring-fb bg-fb-card rounded-full flex justify-center items-center z-30">
          <p class="text-white text-sm">萊</p>
        </div>
        <div class="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/30 to-transparent z-20"></div>
        <img id="story-image-${i}" class="w-full h-full duration-200" src="https://picsum.photos/325/577.jpg?random=${i}" alt="" srcset="">
        <p class="absolute bottom-2 left-2 text-white z-10">萊恩</p>
      </div>
    `


    divBox.addEventListener('mouseover', function () {
      const mask = document.getElementById(`story-mask-${i}`)
      const image = document.getElementById(`story-image-${i}`)
      image.classList.add('scale-105')
      mask.classList.remove('hidden')
    })

    divBox.addEventListener('mouseout', function () {
      const mask = document.getElementById(`story-mask-${i}`)
      const image = document.getElementById(`story-image-${i}`)
      image.classList.remove('scale-105')
      mask.classList.add('hidden')
    })

    storyList.appendChild(divBox)
  }

}

renderStoryItem()


// --------------------包廂輪播相關------------------

function renderLiveItem(){

  const swiperWrapperLive = document.getElementById('swiper-wrapper-live');

  for (let i = 0; i <20; i++) {
    const divBox = document.createElement('div');
    divBox.classList.add('swiper-slide');


    const item = `
    <div class="w-[55px]">
      <div class="relative w-[40px] cursor-pointer">
        <div class="overflow-hidden rounded-full">
          <img src="https://bruce-fe-fb.web.app/image/avator.png" alt="">
        </div>
        <div class="w-[10px] h-[10px] rounded-full bg-green-500 absolute right-0 bottom-0 ring ring-gray-900"></div>
      </div>
    </div>
`
    divBox.innerHTML = item;

    swiperWrapperLive.appendChild(divBox)
    
  }

  new Swiper(".fb-live", {
    loop:false,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation],
  });
}

renderLiveItem()
