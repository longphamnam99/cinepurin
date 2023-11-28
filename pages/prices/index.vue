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
        <NewsAndPromotion />
    </div>
</template>