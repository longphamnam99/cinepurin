<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'
const activeTab = ref('first')

useHead({ title: "Trang chủ" })
const pictures = [
    {
        'src': useAsset('images/home/z2161740555616_cf6d683f88aa9447af57b89917e84acb.jpg'),
        'alt': 'Picture 1',
    },
    {
        'src': useAsset('images/home/z2161740555387_88fc044837bea7695ee9ec8320a39cef.jpg'),
        'alt': 'Picture 2',
    },
]


const slideshowCurrent = ref(0)

const actionSlide = (status: boolean): void => {
  if (status) {
    if (slideshowCurrent.value == 6) {
      return
    }
    slideshowCurrent.value += 1
  } else {
    if (slideshowCurrent.value == 0) {
      return
    }
    slideshowCurrent.value -= 1
  }
}

const handlePaneClick = (): void => {
    console.log("Click!")
}
</script>

<template>
    <carousel :autoplay="3000" :wrap-around="true" class="relative slideshow" ref="slideshow">
        <slide v-for="(item, index) in pictures" :key="index">
            <img :src="item.src" :alt="item.alt" class="carousel-image" />
        </slide>
        <template #addons>
            <navigation />
            <pagination class="sm:block hidden" />
        </template>
    </carousel>
    <div
        class="relative bg-[url('/images/pattern.png')] bg-repeat bg-top max-w-full flex flex-wrap items-center justify-center">
        <div class="relative w-full">
            <img src="/images/background-header.png" alt="Top header">
        </div>
        <div class="flex flex-wrap lg:gap-x-32 gap-5 justify-center items-center py-5">
            <div class="flex items-center justify-between gap-x-10 relative">
                <div class="w-[114px] h-[130px] sm:block hidden">
                    <img class="absolute -top-10 left-0" :src="useAsset('images/home/icon-ticket.png')" alt="ticket banner">
                </div>
                <h2
                    class="uppercase font-bold text-[#e00d7a] leading-[32px] text-[32px] text-shadow-xs text-shadow font-Futurab">
                    mua vé <br>
                    online
                </h2>
            </div>
            <div class="grid grid-cols-2 gap-5">
                <select-search model-value=""
                    class="rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] sm:w-[300px] w-[45vw] py-[10px] border-0 uppercase"
                    :options="[
                        { label: 'Chuyến xe cuối cùng', value: '1' },
                        { label: 'Shin - Cậu bé bút chì', value: '2' },
                        { label: 'Doraemon - Xứ sở thần tiên', value: '3' },
                    ]" placeholder="Chọn phim" />
                <select-search model-value=""
                    class="rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px] sm:w-[300px] w-[45vw] py-[10px] border-0 uppercase"
                    :options="[
                        { label: 'Chuyến xe cuối cùng', value: '1' },
                        { label: 'Shin - Cậu bé bút chì', value: '2' },
                        { label: 'Doraemon - Xứ sở thần tiên', value: '3' },
                    ]" placeholder="Chọn rạp" />
                <select-search model-value=""
                    class="rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] sm:w-[300px] w-[45vw] py-[10px] border-0 uppercase"
                    :options="[
                        { label: 'Chuyến xe cuối cùng', value: '1' },
                        { label: 'Shin - Cậu bé bút chì', value: '2' },
                        { label: 'Doraemon - Xứ sở thần tiên', value: '3' },
                    ]" placeholder="Chọn ngày" />
                <select-search model-value=""
                    class="rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[24px] sm:w-[300px] w-[45vw] py-[10px] border-0 uppercase"
                    :options="[
                        { label: 'Chuyến xe cuối cùng', value: '1' },
                        { label: 'Shin - Cậu bé bút chì', value: '2' },
                        { label: 'Doraemon - Xứ sở thần tiên', value: '3' },
                    ]" placeholder="Chọn suất chiếu" />
            </div>
        </div>
        <div>

        </div>
    </div>
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
    
    </div>

    
   <!-- thành viên và các ưu đãi -->
   <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
        <div class="flex flex-col items-center justify-center">
            <!-- thành viên -->
            <h1 class="pt-6 text-2xl font-bold text-white pb-0">THÀNH VIÊN</h1>
            <div class="w-[70%] flex gap-6 my-10 items-center">
            <div>
                <carousel class="slideshow" :autoplay="3000" :wrapAround="true" :itemsToShow="3">
                <Slide v-for="slide in 10" :key="slide">
                    <div
                        class="p-2 bg-white border-[5px] rounded-tl-3xl rounded-br-3xl border-[#723369] shadow-[7px 7px 0 rgba(0,0,0,0.2)]">
                    <img src="/images/c_monday.jpg" alt="" class="w-120 h-120 rounded-lg object-cover mr-[16px]">
                    </div>
                </Slide>
                </carousel>
            </div>
            </div>
             <!-- tin tức -->
            <div class="w-[70%] flex gap-6 my-10 items-center">
            <div class="flex flex-col w-24 h-24">
                <h3 class="text-white uppercase font-avantgarde-demi text-3xl">
                Tin tức
                </h3>
                <img class="w-24 h-24" :src="useAsset('images/home/icon-news.png')" alt="promotion">
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div class="grid grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tr-3xl rounded-bl-3xl">
                <div class="text-white font-MyriadRegular">
                    <h1 class="text-base mb-2">
                    Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
                    </h1>
                    <p class="text-sm">
                    Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay Cinestar
                    Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
                    </p>
                </div>
                <div class="w-full h-full">
                    <img src="/images/c_monday.jpg" alt="" class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
                </div>
                </div>
                <div class="grid grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tl-3xl rounded-br-3xl">
                <div class="text-white font-MyriadRegular">
                    <h1 class="text-base mb-2">
                    Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
                    </h1>
                    <p class="text-sm">
                    Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay Cinestar
                    Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
                    </p>
                </div>
                <div class="w-full h-full">
                    <img src="/images/c_monday.jpg" alt="" class="w-full h-full rounded-br-3xl object-cover mr-[16px]">
                </div>
                </div>
                <div class="grid grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tl-3xl rounded-br-3xl">
                <div class="text-white font-MyriadRegular">
                    <h1 class="text-base mb-2">
                    Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
                    </h1>
                    <p class="text-sm">
                    Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay Cinestar
                    Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
                    </p>
                </div>
                <div class="w-full h-full">
                    <img src="/images/c_monday.jpg" alt="" class="w-full h-full rounded-br-3xl object-cover mr-[16px]">
                </div>
                </div>
                <div class="grid grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tr-3xl rounded-bl-3xl">
                <div class="text-white font-MyriadRegular">
                    <h1 class="text-base mb-2">
                    Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
                    </h1>
                    <p class="text-sm">
                    Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay Cinestar
                    Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
                    </p>
                </div>
                <div class="w-full h-full">
                    <img src="/images/c_monday.jpg" alt="" class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
                </div>
                </div>
            </div>
            </div>
        </div>

        <!-- phim đang chiếu -->
        <div class="relative z-10 tabs-panel">
            <tabs ref="tabsref" variant="default" v-model="activeTab">
                <!-- <tab name="first" title="Các phim đang chiếu"> -->
                <div class="bg-[#f18720] relative">
                    <div
                        class="absolute flex justify-between w-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button class="border rounded-full shadow-[0 0 20px rgba(0,0,0,0.1)] opacity-1 transition-all"
                            @click="actionSlide(false)">
                        <img :src="useAsset('images/home/icon-start.png')" alt="prev">
                    </button>
                    <button class="border rounded-full shadow-[0 0 20px rgba(0,0,0,0.1)] opacity-1 transition-all"
                            @click="actionSlide(true)">
                        <img :src="useAsset('images/home/icon-start.png')" alt="next">
                    </button>
                    </div>
                    <h1 class="flex justify-center text-center font-bold text-white pt-5 text-2xl">CÁC PHIM ĐANG CHIẾU</h1>
                    <div class="mx-auto max-w-[1200px] py-5">
                    <CarouselProduct v-model:model-value="slideshowCurrent"/>
                    </div>
                </div>
                <!-- </tab> -->
                <!-- <tab name="second" title="Phim sắp chiếu">
                <div class="bg-[#f18720] relative">
                    <div
                        class="absolute flex justify-between w-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button class="border rounded-full shadow-[0 0 20px rgba(0,0,0,0.1)] opacity-1 transition-all"
                            @click="actionSlide(false)">
                        <img :src="useAsset('images/home/icon-start.png')" alt="prev">
                    </button>
                    <button class="border rounded-full shadow-[0 0 20px rgba(0,0,0,0.1)] opacity-1 transition-all"
                            @click="actionSlide(true)">
                        <img :src="useAsset('images/home/icon-start.png')" alt="next">
                    </button>
                    </div>
                    <div class="mx-auto max-w-[1200px] py-10">
                    <CarouselProduct v-model:model-value="slideshowCurrent"/>
                    </div>
                </div>
                </tab>
                <tab name="third" title="Suất chiếu đặc biệt">
                <div class="bg-[#f18720] relative">
                    <div
                        class="absolute flex justify-between w-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button class="border rounded-full shadow-[0 0 20px rgba(0,0,0,0.1)] opacity-1 transition-all"
                            @click="actionSlide(false)">
                        <img :src="useAsset('images/home/icon-start.png')" alt="prev">
                    </button>
                    <button class="border rounded-full shadow-[0 0 20px rgba(0,0,0,0.1)] opacity-1 transition-all"
                            @click="actionSlide(true)">
                        <img :src="useAsset('images/home/icon-start.png')" alt="next">
                    </button>
                    </div>
                    <div class="mx-auto max-w-[1200px] py-10">
                    <CarouselProduct v-model:model-value="slideshowCurrent"/>
                    </div>
                </div>
                </tab> -->
            </tabs>
        </div>
    </div>
    <!-- gach -->
    <div class="">
        <img src="/images/background-header.png" alt="">
    </div>
    <!-- chan trang -->
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
        <div class="flex justify-center pt-2">
            <!-- logo -->
            <img src="/images/logo.png" alt="" class="w-50 h-20">
        </div>
        <div class="grid grid-cols-5 w-[1280px] text-center justify-center pt-4 pl-24">
            <div class="">
              <div class="bg-white bg-opacity-10 px-4 py-2 font-avantgarde-demi text-white text-sm uppercase text-center mb-2 inline-block">
                <h2 class="">LIÊN KẾT</h2>
              </div>
                <div class="pt-2">
                    <div class="flex justify-center items-center pt-2 gap-2" >
                        <nuxt-link to="#">
                            <img src="/images/scl_facebook.png" alt="" class="w-10 h-10">
                        </nuxt-link>
                        <nuxt-link to="#">
                            <img src="/images/scl_youtube.png" alt="" class="w-10 h-10 ">
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div >
              <div class="bg-white bg-opacity-10 px-4 py-2 font-avantgarde-demi text-white text-sm uppercase text-center mb-2 inline-block">
                <h2>HỆ THỐNG RẠP</h2>
              </div>
                <div class="pt-2 text-[#e1dae2]">
                    <div>
                        <nuxt-link to="#">
                            <H3>CINE Bình Dương</H3>
                        </nuxt-link>
                    </div>
                    <div>
                        <nuxt-link to="#">
                            <H3>CINE Bình Phước</H3>
                        </nuxt-link>
                    </div>
                    <div>
                        <nuxt-link to="#">
                            <H3>CINE Đồng Tháp</H3>
                        </nuxt-link>
                    </div>
                    <div>
                        <nuxt-link to="#">
                            <H3>CINE Hồ Chí Minh</H3>
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div>
              <div class="bg-white bg-opacity-10 px-4 py-2 font-avantgarde-demi text-white text-sm uppercase text-center mb-2 inline-block">
                <h2>CINEPURIN</h2>
              </div> 
                <div class="pt-2 text-[#e1dae2]">
                    <div>
                        <nuxt-link to="#">
                            <H3>Phim Đang Chiếu</H3>
                        </nuxt-link>
                    </div>
                    <div>
                        <nuxt-link to="#">
                            <H3>Phim Sắp Chiếu</H3>
                        </nuxt-link>
                    </div>
                    <div>
                        <nuxt-link to="#">
                            <H3>Xuất Chiếu Đặc Biệt</H3>
                        </nuxt-link>
                    </div>
                    <div>
                        <nuxt-link to="#">
                            <H3>CINE Bình Dương</H3>
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div>
              <div class="bg-white bg-opacity-10 px-4 py-2 font-avantgarde-demi text-white text-sm uppercase text-center mb-2 inline-block">
                <h2>THÔNG TIN</h2>
              </div> 
                
                <div class="pt-2 text-[#e1dae2]">
                    <div>
                        <nuxt-link to="#">
                            <H3>Giới Thiệu</H3>
                        </nuxt-link>
                    </div>
                    <div>
                        <nuxt-link to="#">
                            <H3>Tin Tức</H3>
                        </nuxt-link>
                    </div>
                    <div>
                        <nuxt-link to="#">
                            <H3>Hỏi và Đáp</H3>
                        </nuxt-link>
                    </div>
                    <div>
                        <nuxt-link to="#">
                            <H3>Liên Hệ</H3>
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div>
              <div class="bg-white bg-opacity-10 px-4 py-2 font-avantgarde-demi text-white text-sm uppercase text-center mb-2 inline-block">
                <h2>CHÍNH SÁCH VÀ QUY ĐỊNH</h2>
              </div> 
                
                <div class="pt-2 text-[#e1dae2]">
                    <div>
                        <nuxt-link to="#">
                            <H3>Quy Định Chung</H3>
                        </nuxt-link>
                    </div>
                    <div>
                        <nuxt-link to="#">
                            <H3>Điều Khoản Giao Dịch</H3>
                        </nuxt-link>
                    </div>
                    <div>
                        <nuxt-link to="#">
                            <H3>Chính Sách Bảo Mật</H3>
                        </nuxt-link>
                    </div>
                    <div>
                        <nuxt-link to="#">
                            <H3>Thông Tin Công Ty</H3>
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div>
              <div>
                <div class="bg-white bg-opacity-10 px-4 py-2 font-avantgarde-demi text-white text-sm uppercase text-center mb-2 inline-block">
                  <h2 class="">HOTLINE</h2>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center gap-x-2 cursor-pointer">
                      <p class="text-white font-semibold text-2xl pl-12">
                        0389 010 316
                      </p>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="flex flex-col-5 justify-center items-center pt-5 gap-4">
            <div>
                <nuxt-link to="#">
                    <img src="../public/images/dolby2.png" alt="">
                </nuxt-link>
            </div>
            <div>
                <nuxt-link to="#">
                    <img src="../public/images/crhistie.png" alt="">
                </nuxt-link>
            </div>
            <div>
                <nuxt-link to="#">
                    <img src="../public/images/2d.jpg" alt="">
                </nuxt-link>
            </div>
            <div>
                <nuxt-link to="#">
                    <img src="../public/images/3d.png" alt="">
                </nuxt-link>
            </div>    
            <div>
                <nuxt-link to="#">
                    <img src="../public/images/cinestar-coffee-02.png" alt="">
                </nuxt-link>
            </div>
        </div>
    </div>  
    <div class="flex bg-[#552463] text-center justify-center items-center text-white pt-2 pb-2">
        <div>
            <h2>Chấp Nhận Thanh Toán</h2>           
            <div class="flex flex-col-4 gap-2 pt-2" >
                <div>
                    <nuxt-link to="#">
                        <img src="../public/images/napas-40.png" alt="">
                    </nuxt-link>
                </div>
                <div>
                    <nuxt-link to="#">
                        <img src="../public/images/momo.jpg" alt="">
                    </nuxt-link>
                </div>
                <div>
                    <nuxt-link to="#">
                        <img src="../public/images/payment-mastercard.png" alt="">
                    </nuxt-link>
                </div>
                <div>
                    <nuxt-link to="#">
                        <img src="../public/images/payment-visa.png" alt="">
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
    
    <div class="flex bg-black justify-center">
        <div>
            <div><p class="text-white text-center text-sm">CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO <br> </p>
                <!-- ĐỊA CHỈ: 135 HAI BÀ TRƯNG, PHƯỜNG BẾN NGHÉ, QUẬN 1, TP.HCM <br>
                GIẤY CNĐKDN SỐ: 0312742744, ĐĂNG KÝ LẦN ĐẦU NGÀY 18/04/2014, ĐĂNG KÝ THAY ĐỔI LẦN THỨ 2 NGÀY 15/09/2014, CẤP BỞI SỞ KH&ĐT TP.HCM
                <br>
                <br>2015 © CINESTAR. ALL RIGHTS RESERVED.</p> -->
            </div>
        </div>
    </div>
</template>
<style>
.slideshow .carousel__pagination {
    gap: 10px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
}

.slideshow .carousel__prev,
.slideshow .carousel__next {
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    display: none;
}

.slideshow .carousel__pagination-button--active {
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    transform: translateY(0);
}

.slideshow .carousel__pagination-button::after {
    background-color: white;
    border-radius: 50%;
    width: 15px;
    height: 15px;
}

@media all and (max-width: 1024px) {
    .slideshow .carousel__pagination {
        right: auto;
        bottom: 10%;
        top: auto;
        left: 10px;
        transform: none;
    }

    .slideshow .carousel__pagination-button::after {
        height: 10px;
        width: 10px;
    }
}

.slideshow .carousel__pagination {
    display: flex;
}

@media all and (max-width: 767px) {
    .slideshow .carousel__pagination {
        display: none;
    }

    .slideshow .carousel__prev,
    .slideshow .carousel__next {
        display: flex;
    }
}

.tabs ul {
    justify-content: center;
}

.tabs ul li {
    background-color: #f18720;
    -webkit-transition: all 0.3s ease-in-out;
    box-shadow: 10px 0 0 rgba(0,0,0,0.1);
}

.tabs ul li:nth-child(1) {
    border-radius: 30px 50px 50px 0;
    -webkit-border-radius: 30px 50px 50px 0;
}

.tabs li:nth-child(2) {
    border-radius: 0 50px 50px 0;
    -webkit-border-radius: 0 50px 50px 0;
    padding-left: 55px;
    margin-left: -80px;
}

.tabs ul li:nth-child(3) {
    padding-left: 55px;
    margin-left: -80px;
    border-radius: 0 30px 0 0;
    -webkit-border-radius: 0 30px 0 0;
}

.tabs ul li div {
    font-family: 'avantgarde-demi';
    font-weight: normal;
    color: #fff;
    font-size: 30px;
    text-transform: uppercase;
    line-height: 74px;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    padding: 0 45px;
}
</style>

<style scoped>
.text-shadow {
    text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
}
</style>