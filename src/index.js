const axios = require('axios').default;
import Swiper, { Navigation, Manipulation } from 'swiper';

// swiper bundle styles
import 'swiper/css/bundle'
import 'swiper/css/navigation';
import 'swiper/css/manipulation';

// custom styles
import "./index.css";


// ----------------- Panel 相關 ---------------
const headerRightPanel = document.getElementById('header-right-panel')

const plusBtn = document.getElementById("plus-btn");
const msgBtn = document.getElementById("msg-btn");
const notificationBtn = document.getElementById("notification-btn");
const moresBtn = document.getElementById("more-btn");
const btns = [plusBtn, msgBtn, notificationBtn, moresBtn]

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

function btnSwitchActive(index) {
  btns.forEach((btn, idx) => {
    if (index === idx) {
      btn.classList.add('bg-fb-active','dark:bg-fb-active-dark', 'dark:hover:bg-fb-hover-active-dark', 'hover:bg-fb-hover-active')
    } else {
      btn.classList.remove('bg-fb-active','dark:bg-fb-active-dark', 'dark:hover:bg-fb-hover-active-dark', 'hover:bg-fb-hover-active')
    }
  })
}
// 取消告訴 window 被點擊的情況
window.addEventListener("click", function () {
  openPanel(-1);
  btnSwitchActive(-1)
  console.log('window');
});

headerRightPanel.addEventListener('click', function togglePanel(e) {
  e.stopPropagation()
  if (e.target.classList.contains('bg-fb-active')) {
    openPanel(-1)
    btnSwitchActive(-1)
    return
  }
  switch (e.target.id) {
    case 'plus-btn':
      openPanel(0)
      btnSwitchActive(0)
      break
    case 'msg-btn':
      openPanel(1)
      btnSwitchActive(1)
      break
    case 'notification-btn':
      openPanel(2)
      btnSwitchActive(2)
      break
    case 'more-btn':
      openPanel(3)
      btnSwitchActive(3)
      break
  }
})



// plusBtn.addEventListener("click", function (event) {
//   event.stopPropagation();
//   openPanel(0);
// });

// msgBtn.addEventListener("click", function (event) {
//   event.stopPropagation();
//   openPanel(1);
// });

// notificationBtn.addEventListener("click", function (event) {
//   event.stopPropagation();
//   openPanel(2);
// });

// moresBtn.addEventListener("click", function (event) {
//   event.stopPropagation();
//   openPanel(3);
// });

// // 取消告訴 window 被點擊的情況
// plusPanel.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log('plus');
// });

// msgPanel.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log('msgPanel');
// });

// notificationPanel.addEventListener("click", function (event) {
//   event.stopPropagation();
// });

// moresPanel.addEventListener("click", function (event) {
//   event.stopPropagation();
// });


// 右側欄 > more > 日間／夜間顯示模式
const colorThemeSwitcher = document.getElementById('color-theme-switcher')
const colorThemeInfo = document.getElementById('color-theme-info')
const logoSun = document.getElementById('logo-sun')
const logoMoon = document.getElementById('logo-moon')

colorThemeSwitcher.addEventListener('click', function switchColor(e) {
  document.documentElement.classList.toggle('dark')
  if (colorThemeInfo.innerText === '顯示：夜晚') {
    colorThemeInfo.innerText = '顯示：白天'
    logoSun.classList.remove('hidden')
    logoMoon.classList.add('hidden')

  } else {
    colorThemeInfo.innerText = '顯示：夜晚'
    logoSun.classList.add('hidden')
    logoMoon.classList.remove('hidden')
  }
})

// ------------- 左側相關 --------------------
const leftBlock = document.getElementById("left-block");

function renderLeftItem(name, imageUrl) {
  const item = `
    <div class="flex items-center justify-items-center w-full p-2 mb-1 rounded hover:bg-fb-input dark:hover:bg-fb-input-dark cursor-pointer">
      <div class="w-[32px] overflow-hidden rounded-full mr-4">
        <img src="${imageUrl}" alt="">
      </div>
      <p class="text-black dark:text-white text-[.9rem]">${name}</p>
    </div>
  `;
  return item;
}

function renderLeftBlock() {
  const leftArr = [
    {
      name: "萊恩",
      img: "https://i.imgur.com/k5wE6L4_d.webp?maxwidth=760&fidelity=grand",
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
  //   htmlStr = htmlStr + renderLeftItem('萊恩', 'https://i.imgur.com/k5wE6L4_d.webp?maxwidth=760&fidelity=grand');
  // }
  leftArr.forEach((obj) => {
    htmlStr = htmlStr + renderLeftItem(obj.name, obj.img);
  });
  leftBlock.innerHTML = htmlStr;
}

renderLeftBlock();

// ------------- 右側相關 --------------------
const rightBlock = document.getElementById("right-block");

function renderRightBlock(pic) {
  let htmlStr = '<p class="mb-2 text-lg text-gray-400">聯絡人</p>';

  for (let i = 0; i < 10; i++) {
    const rightItem = `
      <div class="flex items-center w-full py-2 px-1 rounded hover:bg-fb-input dark:hover:bg-fb-input-dark cursor-pointer">
          <div class="w-[45px]">
            <div class="relative w-[32px] cursor-pointer">
              <div class="overflow-hidden rounded-full">
                <img src="${pic[i].user.profile_image.large}" alt="">
              </div>
              <div class="w-[8px] h-[8px] rounded-full bg-green-500 absolute bottom-0 right-0 dark:ring-gray-900 ring-white ring"></div>
            </div>
          </div>
          <p class="text-black dark:text-white text-[.9rem]">${pic[i].user.name}</p>
        </div>
      `;
    htmlStr = htmlStr + rightItem;
  }
  rightBlock.innerHTML = htmlStr;
}

// --------------- 限時動態 ---------------

const storyList = document.getElementById('story-list')

function renderStoryItem(randomPics) {
 

  for (let i = 0; i < 8; i++) {

    const divBox = document.createElement('div');
    divBox.classList.add('flex-1', 'px-[4px]', 'min-w-[120px]', 'cursor-pointer');

    divBox.innerHTML = `
      <div class="relative overflow-hidden w-full h-full" id="story-${i}">
        <div id="story-mask-${i}" class="hidden absolute w-full h-full top-0 left-0 bg-black/20 z-20"></div>
        <div class="w-[32px] h-[32px] absolute top-4 left-4 ring-4 ring-fb bg-fb-card rounded-full flex justify-center items-center z-30">
          <img class="rounded-full" src="${randomPics[i].user.profile_image.small}">
        </div>
        <div class="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/30 to-transparent z-20"></div>
        <img id="story-image-${i}" class="w-full h-full duration-200 object-cover " src="${randomPics[i].urls.regular}" alt="" srcset="">
        <p class="absolute bottom-2 left-2 text-white z-10"> ${randomPics[i].user.first_name}</p>
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
// renderStoryItem()


// --------------------包廂輪播相關------------------
// 假資料方式呈現
function renderLiveItem(){
  const item = `
    <div class="swiper-slide">
      <div class="w-[55px]">
        <div class="relative w-[40px] cursor-pointer">
          <div class="overflow-hidden rounded-full">
            <img src="https://i.imgur.com/k5wE6L4_d.webp?maxwidth=760&fidelity=grand" alt="">
          </div>
          <div class="w-[10px] h-[10px] rounded-full bg-green-500 absolute right-0 bottom-0 ring ring-white dark:ring-gray-900"></div>
        </div>
      </div>
    </div>
  `
  const swiper = new Swiper(".fb-live", {
    loop:false,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Manipulation],
  });

  for (let i = 0; i <20; i++) {
    swiper.appendSlide(item)    
  }

}
// renderLiveItem()

// 串接 api 方式呈現
function renderLiveItemOnSwApi(pics) {
  let item ="";
  pics.forEach((pic) => {
    item += `
      <div class="swiper-slide">
          <div class="w-[55px]">
            <div class="relative w-[40px] cursor-pointer">
              <div class="overflow-hidden rounded-full">
                <img class="filter hover:brightness-90" src="${pic.user.profile_image.large}" alt="">
              </div>
              <div class="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0 ring ring-white dark:ring-gray-900">
              </div>
            </div>
          </div>
        </div>
    `
    })
    const swiper = new Swiper(".fb-live", {
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: "auto",
      modules: [Navigation, Manipulation],
    });
    
    swiper.appendSlide(item); // 會找到 .swiper-slide 接續到後面
}



// 透過unsplash api取得隨機照片，收到圖片後執行渲染
const randomPics = []
const API_URL = 'https://api.unsplash.com/search/photos?&query=human&orientation=portrait&600*400&client_id=Jb3jHPMSvjP7CBjQfbO-qfKTcdf2l6UEHU65RbVpZ4A&per_page=25'
const getAndRenderPics = function (url) {
  axios
    .get(url)
    .then((res) => {
      console.log(res)
      randomPics.push(...res.data.results)
      console.log('randomPics', randomPics);
      // 渲染動態牆
      renderStoryItem(randomPics)
      // 渲染右側聯絡人
      renderRightBlock(randomPics)
      // 渲染包廂輪播
      renderLiveItemOnSwApi(randomPics);
    })
    .catch((err) => {
      console.error(err)
    })
}

getAndRenderPics(API_URL)

