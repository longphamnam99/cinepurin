<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'
const activeTab = ref('first')

// useHead({ title: "Trang chủ" })
// const pictures = [
//     {
//         'src': useAsset('images/home/z2161740555616_cf6d683f88aa9447af57b89917e84acb.jpg'),
//         'alt': 'Picture 1',
//     },
//     {
//         'src': useAsset('images/home/z2161740555387_88fc044837bea7695ee9ec8320a39cef.jpg'),
//         'alt': 'Picture 2',
//     },
// ]
const handlePaneClick = (): void => {
    console.log("Click!")
}
</script>

<template>
    
    <!-- table  -->
    <div class="flex justify-center text-start bg-gradient-to-tr from-[#4E0045] to-[#23001C]"> 
        <div>
            <h1 class="text-white text-3xl">tên phim</h1>
            <h1 class="text-white text-4xl">shin - cậu bé bút chì</h1>   
            <div class="flex flex-col-5 text-white pt-2 gap-1">
                <div class="bg-orange-400 w-32 pl-2">
                    <h2 class="text-base">CHỌN XUẤT <br> CHIẾU</h2>
                    <h3 class="text-4xl">23:40</h3>
                </div>
                <div class="bg-orange-400 w-52 pl-2">
                    <h2 class="text-base">NGÀY <br> <br></h2>
                    <h3 class="text-4xl">17/09/2023</h3>
                </div>
                <div class="bg-pink-500  w-32 pl-2">
                    <h2 class="text-base">SỐ LƯỢNG <br> <br></h2>
                    <h3 class="text-4xl"> 0 VÉ</h3>
                </div>
                <div class="bg-pink-500 w-52 pl-2">
                    <h2 class="text-base">TỔNG SỐ TIỀN <br><br></h2>
                    <h3 class="text-4xl">0 VNĐ</h3>
                </div>
                <div class="pt-6 pl-5 ">
                    <h2 class="text-lg">thời gian giứ ghế</h2>
                    <h1 class="text-5xl">05:00</h1>
                </div>
            </div>   
            <div class="flex flex-col-2 gap-1 pb-2">
                <div class="bg-[#4E0045] w-32 h-24">
                    <h2 class="flex justify-center text-white pl-2 pt-8">SỐ GHẾ</h2>
                </div>
                <div class="bg-[#4E0045] w-[552px] h-24 ">

                </div>
            </div>   
        </div>
    </div>
    <!-- chon ghế -->
    <div class="bg-pink-700 text-center text-2xl">
        <h1>Cine HCM</h1>
    </div>
    <div class="flex justify-center pt-5">
        <div class="flex justify-center bg-[#C0C0C0] w-[600px] rounded-xl">
            <h1 class="text-xl">màn hình</h1>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="flex flex-col-8 gap-1 pt-8">
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="flex flex-col-8 gap-1 pt-2">
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="flex flex-col-8 gap-1 pt-2">
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="flex flex-col-8 gap-1 pt-2">
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="flex flex-col-8 gap-1 pt-2">
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
            <div class="bg-red-400 w-[40px] h-[40px] text-center pt-2">
                <h3>A01</h3>
            </div>
        </div>
    </div>
    <div class="flex pt-3 justify-center gap-2">
        <div class="">
            <img src="/images/ghe.jpg" alt="" class="w-[40px] h-[40px] ">  
        </div>
        <p class="pt-1">ghe thuong</p>
        <div class=" ">
            <img src="/images/ghe.jpg" alt="" class="w-[40px] h-[40px]">
        </div>
        <p class="pt-1">ghe thuong</p>
        <div class=" ">
            <img src="/images/ghe.jpg" alt="" class="w-[40px] h-[40px]">
        </div>
        <p class="pt-1">ghe thuong</p>
    </div>
    <div class="flex justify-center">
        <div class="flex flex-col-3 gap-2">
            <div class="bg-red-300 w-[150px] h-[40px] text-center pt-2 rounded-xl">
                <nuxt-link to="/book_movie_tickets">Quay Lại</nuxt-link>
            </div>
            <div class="bg-red-300 w-[150px] h-[40px] text-center pt-2 rounded-xl">
                <nuxt-link to="/eat">Thức Ăn</nuxt-link>
            </div>
            <div class="bg-red-300 w-[150px] h-[40px] text-center pt-2 rounded-xl">
                <nuxt-link to="/pay">Thanh Toán</nuxt-link>
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