<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css'
useHead({ title: "Rạp và giá" })
</script>

<template>
    

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
        <NewsAndPromotion />
    </div>
</template>