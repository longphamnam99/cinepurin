<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'
const dangChieu = ref([])
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


useAsyncData("fetch", async () => {
    try {
        dangChieu.value = await useFetchApi('QuanLyPhim/LayDanhSachPhim?dangchieu=1')
    } catch (error) {
        console.error(error);
    }
})

</script>

<template>
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">

    </div>

    <!--tin tức -->
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative pt-5">
        <div class="relative z-10 tabs-panel">
            <tabs ref="tabsref" variant="default" v-model="activeTab">
                <tab name="first" title="Hệ Thống Rạp Chiếu Liên Kết Của CinePurin" class="rounded-es-xl">
                    <div>
                        <div class="flex justify-center py-3 gap-2">
                            <div>
                                <div class="intro-pic">
                                    <img src="/images/ltcnm.jpg" alt=""
                                        class="h-[300px] w-[300px] block rounded-full">
                                </div>
                            </div>
                            <div class="pt-16">
                                <div class="w-[600px] ">
                                    <h2 class="bg-pink-100 w-full h-full text-3xl rounded-xl font-bold py-2">Lotte Cinema</h2>
                                    <p class="pt-2 text-white">Địa chỉ : Địa chỉ : Tầng 3, TTTM Lotte, số 469 đường Nguyễn Hữu Thọ, Phường Tân Hưng, Quận 7, TPHCM, Việt Nam.

                                        Hotline: +(028) 3775 2524</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-center gap-2 pt-16">
                            <div>
                                <div class="w-[600px] pt-16">
                                    <h2 class="bg-pink-100 w-full text-3xl rounded-xl font-bold py-2"> BHD CineFlex</h2>
                                    <p class="pt-2 text-white">Địa chỉ : Maximark 3/2 (nay là Vincom 3/2).

                                        Hotline: 026 3730 0008 (Bấm phím 0)</p>
                                </div>
                            </div>
                            <div class="">
                                <div class="intro-pic">
                                    <img src="/images/bhd.jpg" alt=""
                                        class="h-[300px] w-[300px] block rounded-full">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-center py-3 gap-2">
                            <div>
                                <div class="intro-pic">
                                    <img src="/images/cgv.jpg" alt=""
                                        class="h-[300px] w-[300px] block rounded-full">
                                </div>
                            </div>
                            <div class="pt-16">
                                <div class="w-[600px]  ">
                                    <h2 class="bg-pink-100 w-full text-3xl rounded-xl font-bold py-2"> CGV Cinemas VietNam</h2>
                                    <p class="pt-2 text-white">Địa chỉ: Lầu 2, số 7/28, Đường Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam/
                                        <br>
                                        Hotline: 1900 6017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-center py-3 gap-2">
                            <div>
                                <div class="w-[600px] pt-16">
                                    <h2 class="bg-pink-100 w-40 text-3xl rounded-xl font-bold py-2">Galaxy Cine</h2>
                                    <p class="pt-2 text-white">Địa chỉ: Toà nhà Bitexco Nam Long, 63A Võ Văn Tần, Phường 6, Quận 3, Tp. Hồ Chí Minh, Việt Nam
                                        <br>
                                        Hotline: 19002224</p>
                                </div>
                            </div>
                            <div class="">


                                <div class="intro-pic">
                                    <img src="/images/galaxy.jpg" alt=""
                                        class="h-[300px] w-[300px] block rounded-full">
                                </div>
                            </div>
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

    <!-- phim đang chiếu -->
    <div class="overflow-x-hidden">
            <div class="bg-gradient-to-tr from-[#4E0045] to-[#410434]">
            <h1 class="text-center text-[30px] py-[40px] uppercase text-white font-Futurab">Phim hay trong tuần</h1>
            <div class="relative">
                <div
                    class="px-[10%] absolute flex justify-between w-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                    <CarouselProduct v-model:model-value="slideshowCurrent" :data="dangChieu" />
                </div>
            </div>
            <NewsAndPromotion />
        </div>   
    </div>
</template>