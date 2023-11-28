<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'
const activeTab = ref('first')

useHead({ title: "Giới thiệu" })

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
</script>

<template>
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">

    </div>

    <!--tin tức -->
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative pt-5">
        <div class="relative z-10 tabs-panel">
            <tabs ref="tabsref" variant="default" v-model="activeTab">
                <tab name="first" title="Hệ Thống CinePurin ">
                    <div>
                        <div class="flex justify-center py-3 gap-2">
                            <div>
                                <div class="intro-pic">
                                    <img src="/images/ld.jpg" alt=""
                                        class="h-[300px] w-[300px] block rounded-full">
                                </div>
                            </div>
                            <div class="pt-16">
                                <div class="w-[600px] ">
                                    <h2 class="bg-pink-100 w-40 text-3xl rounded-xl font-bold py-2"> Cine Purin</h2>
                                    <p class="pt-2 text-white">Địa chỉ : Tầng 4, Trung tâm Thương mại và Dịch vụ Tài chính
                                        Sacombank, 713 Quốc lộ 20, thị trấn Liên Nghĩa, huyện Đức Trọng, tỉnh Lâm Đồng.

                                        Hotline: 026 3730 0008 (Bấm phím 0)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-center gap-2 pt-16">
                            <div>
                                <div class="w-[600px] pt-16">
                                    <h2 class="bg-pink-100 w-40 text-3xl rounded-xl font-bold py-2"> Cine Purin</h2>
                                    <p class="pt-2 text-white">Địa chỉ : Tầng 4, Trung tâm Thương mại và Dịch vụ Tài chính
                                        Sacombank, 713 Quốc lộ 20, thị trấn Liên Nghĩa, huyện Đức Trọng, tỉnh Lâm Đồng.

                                        Hotline: 026 3730 0008 (Bấm phím 0)</p>
                                </div>
                            </div>
                            <div class="">
                                <div class="intro-pic">
                                    <img src="/images/ld.jpg" alt=""
                                        class="h-[300px] w-[300px] block rounded-full">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-center py-3 gap-2">
                            <div>
                                <div class="intro-pic">
                                    <img src="/images/ld.jpg" alt=""
                                        class="h-[300px] w-[300px] block rounded-full">
                                </div>
                            </div>
                            <div class="pt-16">
                                <div class="w-[600px]  ">
                                    <h2 class="bg-pink-100 w-40 text-3xl rounded-xl font-bold py-2"> Cine Purin</h2>
                                    <p class="pt-2 text-white">Địa chỉ : Tầng 4, Trung tâm Thương mại và Dịch vụ Tài chính
                                        Sacombank, 713 Quốc lộ 20, thị trấn Liên Nghĩa, huyện Đức Trọng, tỉnh Lâm Đồng.

                                        Hotline: 026 3730 0008 (Bấm phím 0)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-center py-3 gap-2">
                            <div>
                                <div class="w-[600px] pt-16">
                                    <h2 class="bg-pink-100 w-40 text-3xl rounded-xl font-bold py-2"> Cine Purin</h2>
                                    <p class="pt-2 text-white">Địa chỉ : Tầng 4, Trung tâm Thương mại và Dịch vụ Tài chính
                                        Sacombank, 713 Quốc lộ 20, thị trấn Liên Nghĩa, huyện Đức Trọng, tỉnh Lâm Đồng.

                                        Hotline: 026 3730 0008 (Bấm phím 0)</p>
                                </div>
                            </div>
                            <div class="">


                                <div class="intro-pic">
                                    <img src="/images/ld.jpg" alt=""
                                        class="h-[300px] w-[300px] block rounded-full">
                                </div>
                            </div>
                        </div>
                    </div>

                </tab>
                <tab name="second" title="Dịch Vụ">
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
                            <CarouselProduct v-model:model-value="slideshowCurrent" />
                        </div>
                    </div>
                </tab>
                <tab name="third" title="Công Nghệ Phòng Chiếu">
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
                            <CarouselProduct v-model:model-value="slideshowCurrent" />
                        </div>
                    </div>
                </tab>
            </tabs>
        </div>
        <!-- lời nhắn  -->

        <div class="py-5">
            <div>
                <h1 class="text-white text-center font-bold text-2xl">Đến Ngay CinePurin để trải nghiệm các dịch vụ tốt
                    nhất!!!</h1>
            </div>
        </div>
    </div>



    <!-- các phim đang chiếu  -->

    <div>
        <div class="relative z-10 tabs-panel">
            <tabs ref="tabsref" variant="default" v-model="activeTab">
                <!-- <tab name="first" title="Các phim đang chiếu"> -->
                <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
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
            </tabs>
        </div>
    </div>
</template>