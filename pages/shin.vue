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
    </div>
    <div class="grid justify-center items-center bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative pt-8 pb-8">
        <div>
            <div class="grid grid-cols-2 gap-5 ">
                <select-search model-value=""
                    class="rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] sm:w-[300px] w-[45vw] py-[10px] border-0 uppercase"
                    :options="[
                        { label: 'Cô thư ký và anh giám đốc', value: '1' },
                        { label: 'Em hàng xóm xinh đẹp', value: '2' },
                        { label: 'Tiếp viên hàng không xinh đẹp', value: '3' },
                    ]" placeholder="Chọn rạp chiếu" />
                <select-search model-value=""
                    class="rounded-tl-[24px] rounded-br-[24px] rounded-bl-[24px] sm:w-[300px] w-[45vw] py-[10px] border-0 uppercase"
                    :options="[
                        { label: 'Cô thư ký và anh giám đốc', value: '1' },
                        { label: 'Em hàng xóm xinh đẹp', value: '2' },
                        { label: 'Tiếp viên hàng không xinh đẹp', value: '3' },
                    ]" placeholder="Chọn thời gian" />
            </div>
        </div>
    </div>

    <!-- lich chieu -->
    <div class="flex justify-center bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative pt-2 pb-2">
        <div class=" flex flex-col-2  bg-[#f37520] w-[1174px] h-[450px] gap-5">
            <div>
                <img src="/images/shin-cau-be-but-chi.jpg" alt="" class="w-[550px] h-[430px] pt-5 pl-5">
            </div>
            <div class="relative w-full h-auto overflow-hidden mb-5 pt-5">
                <h3 class="text-3xl text-white pb-3">3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY</h3>
                
                <h4 class="flex bg-yellow-300 w-[200px] h-[50px] text-xl justify-center items-center">CineStar Đà Lạt</h4>
                <div class="flex flex-col-2">
                    <h3 class="flex bg-yellow-300 w-[70px] h-[60px] justify-center items-center pl-2">16/09 2023 
                    </h3>   
                    <div class="flex flex-col-2 bg-yellow-100 w-[700px] h-[60px] pt-1 pl-5 pr-8 gap-2">
                        <nuxt-link to="/book _movie_tickets">
                            <p class="bg-yellow-50 w-[50px] h-[50px] text-center pt-3"><button>12:30</button></p>
                        </nuxt-link>
                        <nuxt-link to="/book _movie_tickets">
                            <p class="bg-yellow-50 w-[50px] h-[50px] text-center pt-3"><button>15:30</button></p>
                        </nuxt-link>
                        <a href="/book_movie_tickets">
                        <p class="bg-yellow-50 w-[50px] h-[50px] text-center pt-3"><button>12:30</button></p></a>
                        <a href="#"><p class="bg-yellow-50 w-[50px] h-[50px] text-center pt-3"><button>12:30</button></p></a>

                    </div>
                </div>
                       
            </div>
        </div>
    </div>
    

    
    <!-- uu dai -->
  <div class="bg-yellow-200 pb-4">       
        <div class="flex justify-center px-5 ">
            <div class="flex">
                <div class="h-75 md-5 pt-3">
                    <h1 class="text-xl lg:text-4xl  text-green-600 font-serif"><strong>ƯU ĐÃI</strong></h1>
                </div>
                <div>
                    <nuxt-link to="#">
                        <img src="../public/images/icon-promotion.png" alt="" class="w-10 h-17 rounded-lg object-cover">
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
    <div class=" bg-yellow-200 pb-2">
        <div class="flex flex-cols-1 lg:flex flex-cols-3 gap-x-8 max-w-5xl mx-auto pt-2 px-4">
            <div>
                <div class="h-75 md-5">
                    <nuxt-link to="#">
                        <img src="../public/images/c_monday.jpg" alt="" class="w-200 h-200 rounded-lg object-cover">
                    </nuxt-link>
                </div>
            </div>
            <div>
                <div class="h-75 md-5">
                    <nuxt-link to="#">
                        <img src="../public/images/c_monday.jpg" alt="" class="w-200 h-200 rounded-lg object-cover">
                    </nuxt-link>
                </div>
            </div>
            <div>
                <div class="h-75 md-5"> 
                    <nuxt-link to="#">
                        <img src="../public/images/c_monday.jpg" alt="" class="w-200 h-200 rounded-lg object-cover">
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
  <!--  tin tuc-->
  <div class=" bg-red-400 w-auto pb-2 px-2">
        <div class="">  
            <h1 class="flex justify-center text-center pt-2 text-5xl">
                <img src="/images/icon-promotion.png" alt="" class="h-16 w-16">TIN TUC</h1>
            <div class="flex gap-1 max-w-6xl mx-auto pt-2 justify-center items-center"> 
                <div class="flex gap-1">
                    <nuxt-link to="#">
                        <img src="/images/ben-pha-xac-song1.jpg" alt="" class="w-80 h-32 rounded-tl-lg">
                    </nuxt-link>
                    <nuxt-link to="#">
                        <img src="/images/ben-pha-xac-song1.jpg" alt="" class="w-80 h-32 rounded-tr-lg">
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div >  
            <div class="flex gap-1 max-w-6xl mx-auto pt-1 justify-center"> 
                <nuxt-link to="#">
                    <img src="/images/ben-pha-xac-song1.jpg" alt="" class="w-80 h-32 rounded-tl-lg">
                </nuxt-link>
                <nuxt-link to="#">
                    <img src="/images/ben-pha-xac-song1.jpg" alt="" class="w-80 h-32 rounded-tr-lg">
                </nuxt-link>
            </div>
        </div>
    </div>
    <!-- gach -->
    <div class="">
        <img src="/images/background-header.png" alt="">
    </div>
    <!-- chan trang -->
    <div class="bg-red-400 mb-2">
        <div class="flex justify-center pt-2">
            <!-- logo -->
            <img src="/images/logo.png" alt="" class="w-50 h-20">
        </div>
        <div class="grid grid-cols-4 w-[1280px] text-center justify-center pt-4">
            <div class="">
                <h2 class="">LIÊN KẾT</h2>
                <div class="pt-2">
                    <div class="flex justify-center items-center pt-2 gap-2" >
                        <nuxt-link to="#">
                            <img src="/images/facebook_icon-icons.com_59205.png" alt="" class="w-10 h-10">
                        </nuxt-link>
                        <nuxt-link to="#">
                            <img src="/images/th.jpg" alt="" class="w-10 h-10 ">
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div>
                <h2>HỆ THỐNG RẠP</h2>
                <div class="pt-2">
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
                <h2>CINEPURIN</h2>
                <div class="pt-2">
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
                <h2>THÔNG TIN</h2>
                <div class="pt-2">
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