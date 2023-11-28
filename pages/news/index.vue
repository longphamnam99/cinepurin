<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'
const activeTab = ref('first')

useHead({ title: "Tin tức" })

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
    <!--tin tức -->
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative ">
        <div class="relative z-10 tabs-panel">
            <tabs ref="tabsref" variant="default" v-model="activeTab">
                <tab name="first" title="Tin Điện Ảnh ">
                    <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 lg:px-[170px] sm:px-[10px] py-[30px]">
                        <div class="bg-[#fff] relative">
                            <div class="px-[15px] py-[15px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[auto] h-[auto] flex justify-center items-center "></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-[16px] font-MyriadBold text-left text-[#000]">
                                        [MỸ NHÂN ĐẠO CHÍCH] - "Bác sĩ Cha" Uhm Jung Hwa và "con gái" Minah (Girl's Day) 
                                        bắt tay trong phi vụ hài hước nhất màn ảnh năm nay.         
                                    </h2>
                                    <p class="hidden xl:block">Dịp cuối năm 2023, khán giả Việt tiếp tục được thưởng thức một tựa 
                                        phim hài chất lượng tới từ điện ảnh Hàn Quốc - Mỹ Nhân Đạo Chích (tựa tiếng Anh: Miss Fortune),
                                        với sự góp mặt của bộ đôi "bác sĩ Cha" Uhm Jung Hwa và Bang Min Ah (Girl's Day).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#fff] relative">
                            <div class="px-[15px] py-[15px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[auto] h-[auto] flex justify-center items-center "></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-[16px] font-MyriadBold text-left text-[#000]">
                                        [MỸ NHÂN ĐẠO CHÍCH] - "Bác sĩ Cha" Uhm Jung Hwa và "con gái" Minah (Girl's Day) 
                                        bắt tay trong phi vụ hài hước nhất màn ảnh năm nay.         
                                    </h2>
                                    <p class="hidden xl:block">Dịp cuối năm 2023, khán giả Việt tiếp tục được thưởng thức một tựa 
                                        phim hài chất lượng tới từ điện ảnh Hàn Quốc - Mỹ Nhân Đạo Chích (tựa tiếng Anh: Miss Fortune),
                                        với sự góp mặt của bộ đôi "bác sĩ Cha" Uhm Jung Hwa và Bang Min Ah (Girl's Day).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#fff] relative">
                            <div class="px-[15px] py-[15px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[auto] h-[auto] flex justify-center items-center "></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-[16px] font-MyriadBold text-left text-[#000]">
                                        [MỸ NHÂN ĐẠO CHÍCH] - "Bác sĩ Cha" Uhm Jung Hwa và "con gái" Minah (Girl's Day) 
                                        bắt tay trong phi vụ hài hước nhất màn ảnh năm nay.         
                                    </h2>
                                    <p class="hidden xl:block">Dịp cuối năm 2023, khán giả Việt tiếp tục được thưởng thức một tựa 
                                        phim hài chất lượng tới từ điện ảnh Hàn Quốc - Mỹ Nhân Đạo Chích (tựa tiếng Anh: Miss Fortune),
                                        với sự góp mặt của bộ đôi "bác sĩ Cha" Uhm Jung Hwa và Bang Min Ah (Girl's Day).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#fff] relative">
                            <div class="px-[15px] py-[15px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[auto] h-[auto] flex justify-center items-center "></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-[16px] font-MyriadBold text-left text-[#000]">
                                        [MỸ NHÂN ĐẠO CHÍCH] - "Bác sĩ Cha" Uhm Jung Hwa và "con gái" Minah (Girl's Day) 
                                        bắt tay trong phi vụ hài hước nhất màn ảnh năm nay.         
                                    </h2>
                                    <p class="hidden xl:block">Dịp cuối năm 2023, khán giả Việt tiếp tục được thưởng thức một tựa 
                                        phim hài chất lượng tới từ điện ảnh Hàn Quốc - Mỹ Nhân Đạo Chích (tựa tiếng Anh: Miss Fortune),
                                        với sự góp mặt của bộ đôi "bác sĩ Cha" Uhm Jung Hwa và Bang Min Ah (Girl's Day).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#fff] relative">
                            <div class="px-[15px] py-[15px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[auto] h-[auto] flex justify-center items-center "></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-[16px] font-MyriadBold text-left text-[#000]">
                                        [MỸ NHÂN ĐẠO CHÍCH] - "Bác sĩ Cha" Uhm Jung Hwa và "con gái" Minah (Girl's Day) 
                                        bắt tay trong phi vụ hài hước nhất màn ảnh năm nay.         
                                    </h2>
                                    <p class="hidden xl:block">Dịp cuối năm 2023, khán giả Việt tiếp tục được thưởng thức một tựa 
                                        phim hài chất lượng tới từ điện ảnh Hàn Quốc - Mỹ Nhân Đạo Chích (tựa tiếng Anh: Miss Fortune),
                                        với sự góp mặt của bộ đôi "bác sĩ Cha" Uhm Jung Hwa và Bang Min Ah (Girl's Day).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#fff] relative">
                            <div class="px-[15px] py-[15px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[auto] h-[auto] flex justify-center items-center "></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-[16px] font-MyriadBold text-left text-[#000]">
                                        [MỸ NHÂN ĐẠO CHÍCH] - "Bác sĩ Cha" Uhm Jung Hwa và "con gái" Minah (Girl's Day) 
                                        bắt tay trong phi vụ hài hước nhất màn ảnh năm nay.         
                                    </h2>
                                    <p class="hidden xl:block">Dịp cuối năm 2023, khán giả Việt tiếp tục được thưởng thức một tựa 
                                        phim hài chất lượng tới từ điện ảnh Hàn Quốc - Mỹ Nhân Đạo Chích (tựa tiếng Anh: Miss Fortune),
                                        với sự góp mặt của bộ đôi "bác sĩ Cha" Uhm Jung Hwa và Bang Min Ah (Girl's Day).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#fff] relative">
                            <div class="px-[15px] py-[15px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[auto] h-[auto] flex justify-center items-center "></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-[16px] font-MyriadBold text-left text-[#000]">
                                        [MỸ NHÂN ĐẠO CHÍCH] - "Bác sĩ Cha" Uhm Jung Hwa và "con gái" Minah (Girl's Day) 
                                        bắt tay trong phi vụ hài hước nhất màn ảnh năm nay.         
                                    </h2>
                                    <p class="hidden xl:block">Dịp cuối năm 2023, khán giả Việt tiếp tục được thưởng thức một tựa 
                                        phim hài chất lượng tới từ điện ảnh Hàn Quốc - Mỹ Nhân Đạo Chích (tựa tiếng Anh: Miss Fortune),
                                        với sự góp mặt của bộ đôi "bác sĩ Cha" Uhm Jung Hwa và Bang Min Ah (Girl's Day).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#fff] relative">
                            <div class="px-[15px] py-[15px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[auto] h-[auto] flex justify-center items-center "></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-[16px] font-MyriadBold text-left text-[#000]">
                                        [MỸ NHÂN ĐẠO CHÍCH] - "Bác sĩ Cha" Uhm Jung Hwa và "con gái" Minah (Girl's Day) 
                                        bắt tay trong phi vụ hài hước nhất màn ảnh năm nay.         
                                    </h2>
                                    <p class="hidden xl:block">Dịp cuối năm 2023, khán giả Việt tiếp tục được thưởng thức một tựa 
                                        phim hài chất lượng tới từ điện ảnh Hàn Quốc - Mỹ Nhân Đạo Chích (tựa tiếng Anh: Miss Fortune),
                                        với sự góp mặt của bộ đôi "bác sĩ Cha" Uhm Jung Hwa và Bang Min Ah (Girl's Day).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#fff] relative">
                            <div class="px-[15px] py-[15px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[auto] h-[auto] flex justify-center items-center "></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-[16px] font-MyriadBold text-left text-[#000]">
                                        [MỸ NHÂN ĐẠO CHÍCH] - "Bác sĩ Cha" Uhm Jung Hwa và "con gái" Minah (Girl's Day) 
                                        bắt tay trong phi vụ hài hước nhất màn ảnh năm nay.         
                                    </h2>
                                    <p class="hidden xl:block">Dịp cuối năm 2023, khán giả Việt tiếp tục được thưởng thức một tựa 
                                        phim hài chất lượng tới từ điện ảnh Hàn Quốc - Mỹ Nhân Đạo Chích (tựa tiếng Anh: Miss Fortune),
                                        với sự góp mặt của bộ đôi "bác sĩ Cha" Uhm Jung Hwa và Bang Min Ah (Girl's Day).
                                    </p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </tab>
               
                <tab name="third" title="Tuyển Dụng">
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
    </div>
</template>