<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'
import { useActorsStore } from "~/stores/actors"
import { useDirectorsStore } from "~/stores/directors"
import { useCategoriesStore } from "~/stores/categories"
import { useMoviesStore } from "~/stores/movies"

useHead({ title: "Trang chủ" })

const param = useRoute().params.id;
const dataApi = reactive({})
const dangChieu = ref([])

useAsyncData("fetch", async () => {
    try {
        const response = await useApiBridge({
            url: "QuanLyRap/LayThongTinLichChieuPhim?MaPhim=" + param,
            method: "get",
        });
        dataApi.value = response

        dangChieu.value = await useFetchApi('QuanLyPhim/LayDanhSachPhim?dangchieu=1')
    } catch (error) {
        console.error(error);
    }
})

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

const config = useRuntimeConfig()

function formatDate(time: Date) {
    const date = new Date(time);

    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
}

const isShowTrailer = ref(false)
const enmbed = ref("")

const getVideoId = (url: string) => {
    const videoIdMatch = url.match(/[?&]v=([^&]+)/);
    return videoIdMatch ? videoIdMatch[1] : '';
};

const trailerHandler = (link: any): void => {
    isShowTrailer.value = true
    enmbed.value = `https://www.youtube.com/embed/${getVideoId(link)}?autoplay=1`;
}

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
    <div v-if="isShowTrailer">
        <div class="w-full h-full fixed z-10 top-0 left-0 bg-red-100">
            <button @click="isShowTrailer = false" class="z-20 absolute right-5 top-5 text-white text-[1rem]">close</button>
            <iframe width="100%" height="100%" :src="enmbed" title="Trót Trao Duyên - NB3 Hoài Bảo | OFFICIAL MUSIC VIDEO"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
    <div class="overflow-x-hidden">
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
                        <img class="absolute -top-10 left-0" :src="useAsset('images/home/icon-ticket.png')"
                            alt="ticket banner">
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
            <div>

            </div>
        </div>
        <div class="px-[10%] bg-[url('/public/images/film-bg.jpg')] pt-5 pb-5">
          <div class="flex items-center justify-center gap-5">
            <div class="border-[9px] border-solid border-[#fae2a2] w-[40%] h-full">
              <img :src="dataApi?.value?.hinhAnh" alt="" class="w-full h-full object-cover">
            </div>
            <div class="film-details-wrap w-[60%] shadow-lg hover:shadow-inner-md bg-[#f18720] p-12">
              <h1 class="text-[28px] font-Futurab text-white pl-5 pr-5 mb-4">{{ dataApi?.value?.tenPhim }}
              </h1>
              <div class="flex flex-col-2 pt-3 gap-5 pl-5">
                <h3 class="pt-2 w-20 text-white font-MyriadLight text-[16px]">Khởi chiếu</h3>
                <h3
                    class="bg-white w-[200px] h-[40px] text-left px-4 pt-2 rounded-tl-2xl rounded-br-2xl font-MyriadBold text-[22px]">
                  Từ {{
                    formatDate(dataApi?.value?.ngayKhoiChieu) }}</h3>
              </div>
              <div class="flex flex-col-2 pt-3 gap-5 pl-5">
                <h3 class="pt-2 w-20 text-white font-MyriadLight text-[16px]">Thể loại:</h3>
                <h3
                    class="bg-white w-[200px] h-[40px] text-left px-4 pt-2 rounded-tl-2xl rounded-br-2xl font-MyriadBold text-[22px]">
                  {{
                    dataApi?.value?.tenTheLoai }}</h3>
              </div>
              <div class="flex flex-col-2 pt-3 gap-5 pl-5">
                <h3 class="pt-2 w-20 text-white font-MyriadLight text-[16px]">Diễn viên:</h3>
                <h3
                    class="bg-white w-[200px] h-[40px] text-left px-4 pt-2 rounded-tl-2xl rounded-br-2xl font-MyriadBold text-[22px]">
                  {{
                    dataApi?.value?.dienVien }}</h3>
              </div>
              <div class="flex flex-col-2 pt-3 gap-5 pl-5">
                <h3 class="pt-2 w-20 text-white font-MyriadLight text-[16px]">Đạo diễn:</h3>
                <h3
                    class="bg-white w-[200px] h-[40px] text-left px-4 pt-2 rounded-tl-2xl rounded-br-2xl font-MyriadBold text-[22px]">
                  {{
                    dataApi?.value?.daoDien }}</h3>
              </div>
              <div class="flex flex-col-2 pt-3 gap-5 pl-5">
                <img v-if="dataApi.value?.type == 1" class="w-10 h-10" src="/images/2d.png" alt="">
                <img v-else-if="dataApi.value?.type == 2" class="w-10 h-10" src="/images/3d.png" alt="">
              </div>
              <p class="pl-5 pt-3 text-white">{{ dataApi?.value?.description }}</p>
              <div class="flex flex-col-2 pt-3 gap-5 pl-5">
                <h3 class="pt-2 w-20 text-white font-MyriadLight text-[16px]">Đánh giá:</h3>
                <div class="flex gap-2" v-for="danhgia in dataApi.value?.danhGia" :key="danhgia">
                  <img src="/images/start-comment.png" alt="">
                </div>
              </div>
              <img src="/images/2d.png" alt="" class="pl-5 w-20 pt-3">
              <p class="pl-5 pt-3 text-white">{{ dataApi?.value?.moTa }}</p>

              <div class="flex flex-cols-3 pt-3 items-center justify-center gap-3">
                <div @click="trailerHandler(dataApi?.value?.trailer)" class="pt-6 cursor-pointer">
                  <div
                      class="rounded-[1000px] p-6 bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.8)] flex flex-col-2 w-[180px] h-[52px] items-center justify-center">
                    <img src="/images/icon-play.png" alt="" class="w-[80px] h-[80px] -ml-8">
                    <p class="font-Futurab text-[24px] text-white uppercase">trailer</p>
                  </div>
                </div>
                <div class="pt-6">
                  <Nuxt-link :to="`/booking/${dataApi?.value?.maPhim}`"
                             class="rounded-tl-[1000px] rounded-bl-[1000px] rounded-br-[1000px] p-6 bg-[#e00d7a] hover:bg-[#fecf06] flex flex-col-2 w-[180px] h-[52px] items-center justify-center font-Futurab text-[24px] text-white uppercase">
                    Mua Vé
                  </Nuxt-link>
                </div>
                <div>
                  <div class="flex flex-col justify-center items-center">
                    <p class="text-[18px] font-MyriadLight text-white">Chia sẻ</p>

                    <div class="flex items-center justify-center gap-2">
                      <img src="/images/facebook_icon-icons.com_59205.png" alt=""
                           class="w-14 h-14 shadow-custom overflow-hidden">
                      <img src="/images/scl_google.png" alt="" class="w-14 h-14 shadow-custom overflow-hidden">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


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
                                    Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường chuyên nghiệp. Đến
                                    ngay
                                    Cinestar
                                    Vietnam để trao cho mình cơ hội tuyển dụng đặc biệt vào 13.12.2022 nhé!
                                </p>
                            </div>
                            <div class="w-full h-full">
                                <img src="/images/c_monday.jpg" alt=""
                                    class="w-full h-full rounded-tr-3xl object-cover mr-[16px]">
                            </div>
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
}
</style>

<style scoped>
.text-shadow {
    text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.1);
}


.film-details-wrap {
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3), 0 0 50px 0 rgba(0, 0, 0, 0.4) inset;
}
</style>
