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
        <div class="flex flex-col-2 gap-10 ">
            <div class="grid gap-5 justify-start items-start ">
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
            <div>
                <div>
                    <a href="#">
                        <img src="../public/images/logo.png" alt="" class="w-50 h-36">
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- lich chieu -->
    <div class="flex justify-center bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative pt-2 pb-2">
        <div class=" flex  ">
            <div>
                <img src="/images/shin-cau-be-but-chi.jpg" alt="" class="w-[550px] h-[430px] pt-5 pl-5">
            </div>
        </div>
    </div>



    <!-- uu dai và tin tức -->
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
        <div class="flex flex-col items-center justify-center">
            <!-- ưu đãi -->
            <div class="w-[70%] flex gap-6 my-10 items-center">
                <div class="flex flex-col w-24 h-24">
                    <h3 class="text-white uppercase font-avantgarde-demi text-3xl">
                        ƯU ĐÃI
                    </h3>
                    <img class="w-24 h-24" :src="useAsset('images/home/icon-promotion.png')" alt="promotion">
                </div>
                <div>
                    <carousel class="slideshow" :autoplay="3000" :wrapAround="true" :itemsToShow="3">
                        <Slide v-for="slide in 10" :key="slide">
                            <div
                                class="p-2 bg-white border-[5px] rounded-tl-3xl rounded-br-3xl border-[#723369] shadow-[7px 7px 0 rgba(0,0,0,0.2)]">
                                <img src="/images/c_monday.jpg" alt=""
                                    class="w-120 h-120 rounded-lg object-cover mr-[16px]">
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
                                Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay
                                Cinestar
                                Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
                            </p>
                        </div>
                        <div class="w-full h-full">
                            <img src="/images/c_monday.jpg" alt=""
                                class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tl-3xl rounded-br-3xl">
                        <div class="text-white font-MyriadRegular">
                            <h1 class="text-base mb-2">
                                Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
                            </h1>
                            <p class="text-sm">
                                Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay
                                Cinestar
                                Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
                            </p>
                        </div>
                        <div class="w-full h-full">
                            <img src="/images/c_monday.jpg" alt=""
                                class="w-full h-full rounded-br-3xl object-cover mr-[16px]">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tl-3xl rounded-br-3xl">
                        <div class="text-white font-MyriadRegular">
                            <h1 class="text-base mb-2">
                                Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
                            </h1>
                            <p class="text-sm">
                                Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay
                                Cinestar
                                Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
                            </p>
                        </div>
                        <div class="w-full h-full">
                            <img src="/images/c_monday.jpg" alt=""
                                class="w-full h-full rounded-br-3xl object-cover mr-[16px]">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tr-3xl rounded-bl-3xl">
                        <div class="text-white font-MyriadRegular">
                            <h1 class="text-base mb-2">
                                Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
                            </h1>
                            <p class="text-sm">
                                Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay
                                Cinestar
                                Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
                            </p>
                        </div>
                        <div class="w-full h-full">
                            <img src="/images/c_monday.jpg" alt=""
                                class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
                        </div>
                    </div>
                </div>
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
    box-shadow: 10px 0 0 rgba(0, 0, 0, 0.1);
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
}</style>

<style scoped>.text-shadow {
    text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
}</style>