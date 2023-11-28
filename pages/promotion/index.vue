<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'
const activeTab = ref('first')

useHead({ title: "Khuyến mãi" })

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
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">

    </div>


    <!-- thành viên và các ưu đãi -->
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
        <div class="flex flex-col items-center justify-center">
            <!-- thành viên -->
            <h1 class="text-[30px] text-white pb-0 font-Futurab py-[40px]">THÀNH VIÊN</h1>
            <div class="w-[70%] flex gap-6 my-10 items-center">
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
            <!-- các ưu đãi -->
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
                        <CarouselProduct v-model:model-value="slideshowCurrent" />
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
</template>