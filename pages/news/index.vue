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
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
    </div>

    <!--tin tức -->
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative pt-5">
        <div class="relative z-10 tabs-panel">
            <tabs ref="tabsref" variant="default" v-model="activeTab">
                <tab name="first" title="Tin Điện Ảnh ">
                    <div class="flex flex-cols-3 px-64 h-[465px] pt-4 gap-2">
                        <div class="bg-[#f18720] relative h-[460px]">
                            <div class="w-[301px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[300px] h-[350px] px-2 py-1 flex justify-center items-center"></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-xs font-bold text-start px-1">Mỹ Nhân Đạo Chích là tác phẩm hài mới nhất
                                        của màn ảnh rộng xứ Kim Chi,
                                        xoay quanh một phi vụ lừa đảo khó tin của một cặp "mẹ con đạo chích".
                                        Uhm Jung Hwa và Minah lần lượt vào vai mẹ con Ji Hye và Joo Yeong,
                                        bộ đôi lừa đảo từng thực hiện nhiều phi vụ thành công, nhưng là...
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#ffff] relative h-[460px]">
                            <div class="w-[301px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[300px] h-[350px] px-2 py-1 flex justify-center items-center"></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-xs font-bold text-start px-1">Mỹ Nhân Đạo Chích là tác phẩm hài mới nhất
                                        của màn ảnh rộng xứ Kim Chi,
                                        xoay quanh một phi vụ lừa đảo khó tin của một cặp "mẹ con đạo chích".
                                        Uhm Jung Hwa và Minah lần lượt vào vai mẹ con Ji Hye và Joo Yeong,
                                        bộ đôi lừa đảo từng thực hiện nhiều phi vụ thành công, nhưng là...
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#ffff] relative h-[460px]">
                            <div class="w-[301px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[300px] h-[350px] px-2 py-1 flex justify-center items-center"></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-xs font-bold text-start px-1">Mỹ Nhân Đạo Chích là tác phẩm hài mới nhất
                                        của màn ảnh rộng xứ Kim Chi,
                                        xoay quanh một phi vụ lừa đảo khó tin của một cặp "mẹ con đạo chích".
                                        Uhm Jung Hwa và Minah lần lượt vào vai mẹ con Ji Hye và Joo Yeong,
                                        bộ đôi lừa đảo từng thực hiện nhiều phi vụ thành công, nhưng là...
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-cols-3 px-64 h-[495px] pt-4 gap-2">
                        <div class="bg-[#f18720] relative h-[460px]">
                            <div class="w-[301px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[300px] h-[350px] px-2 py-1 flex justify-center items-center"></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-xs font-bold text-start px-1">Mỹ Nhân Đạo Chích là tác phẩm hài mới nhất
                                        của màn ảnh rộng xứ Kim Chi,
                                        xoay quanh một phi vụ lừa đảo khó tin của một cặp "mẹ con đạo chích".
                                        Uhm Jung Hwa và Minah lần lượt vào vai mẹ con Ji Hye và Joo Yeong,
                                        bộ đôi lừa đảo từng thực hiện nhiều phi vụ thành công, nhưng là...
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#ffff] relative h-[460px]">
                            <div class="w-[301px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[300px] h-[350px] px-2 py-1 flex justify-center items-center"></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-xs font-bold text-start px-1">Mỹ Nhân Đạo Chích là tác phẩm hài mới nhất
                                        của màn ảnh rộng xứ Kim Chi,
                                        xoay quanh một phi vụ lừa đảo khó tin của một cặp "mẹ con đạo chích".
                                        Uhm Jung Hwa và Minah lần lượt vào vai mẹ con Ji Hye và Joo Yeong,
                                        bộ đôi lừa đảo từng thực hiện nhiều phi vụ thành công, nhưng là...
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#ffff] relative h-[460px]">
                            <div class="w-[301px] ">
                                <div class="">
                                    <nuxt-link to=""><img src="/images/daotrich.jpeg" alt=""
                                            class="w-[300px] h-[350px] px-2 py-1 flex justify-center items-center"></nuxt-link>
                                </div>
                                <div>
                                    <h2 class="text-xs font-bold text-start px-1">Mỹ Nhân Đạo Chích là tác phẩm hài mới nhất
                                        của màn ảnh rộng xứ Kim Chi,
                                        xoay quanh một phi vụ lừa đảo khó tin của một cặp "mẹ con đạo chích".
                                        Uhm Jung Hwa và Minah lần lượt vào vai mẹ con Ji Hye và Joo Yeong,
                                        bộ đôi lừa đảo từng thực hiện nhiều phi vụ thành công, nhưng là...
                                    </h2>
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