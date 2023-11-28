<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css'
useHead({ title: "Rạp và giá" })
</script>

<template>
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
                        <img src="/images/logo.png" alt="" class="w-50 h-36">
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- lich chieu -->
    <div class="flex justify-center bg-cover from-[#4E0045] to-[#23001C] relative pt-2 pb-2" style="background-image: url(/images/vt.jpg)">
        <div class="px-[50px] py-[10px]">
            <div>
                <img src="/images/bg.jpg" alt="" class="w-[100%] h-[auto]">
            </div>
            <div class="pt-5">
                <img src="/images/cqt_3d.png" alt="" class="w-[100%] h-[auto]">
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
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-2">
                    <div class=" grid xl:grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tr-3xl rounded-bl-3xl">
                    <div class="text-white font-MyriadRegular">
                        <h1 class="text-base mb-2">
                        Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
                        </h1>
                        <p class="text-sm hidden xl:block">
                        Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay Cinestar
                        Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
                        </p>
                    </div>
                    <div class="w-full h-full">
                        <img src="/images/c_monday.jpg" alt="" class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
                    </div>
                    </div>
                    <div class=" grid xl:grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tr-3xl rounded-bl-3xl">
                    <div class="text-white font-MyriadRegular">
                        <h1 class="text-base mb-2">
                        Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
                        </h1>
                        <p class="text-sm hidden xl:block">
                        Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay Cinestar
                        Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
                        </p>
                    </div>
                    <div class="w-full h-full">
                        <img src="/images/c_monday.jpg" alt="" class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
                    </div>
                    </div>
                    <div class=" grid xl:grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tr-3xl rounded-bl-3xl">
                    <div class="text-white font-MyriadRegular">
                        <h1 class="text-base mb-2">
                        Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
                        </h1>
                        <p class="text-sm hidden xl:block">
                        Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến ngay Cinestar
                        Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
                        </p>
                    </div>
                    <div class="w-full h-full">
                        <img src="/images/c_monday.jpg" alt="" class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
                    </div>
                    </div>
                    <div class=" grid xl:grid-cols-2 p-4 bg-[#e00d7a] gap-2 rounded-tr-3xl rounded-bl-3xl">
                    <div class="text-white font-MyriadRegular">
                        <h1 class="text-base mb-2">
                        Khai trương chi nhánh mới khuyến mãi 100% cho các vé xem phim
                        </h1>
                        <p class="text-sm hidden xl:block">
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
    </div>
</template>