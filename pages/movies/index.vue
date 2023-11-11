<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'
import { useMoviesStore } from '~/stores/movies';

const moviesStore = useMoviesStore();

const resultMovie = reactive({});

const getDataMovie = async (): Promise<void> => {
    await moviesStore.getMovies();
    resultMovie.value = moviesStore.movies;
}

useAsyncData("fetch", async () => {
    try {
        await getDataMovie()
    } catch (error) {
        console.error(error);
    }
})

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
    console.log("Click!")
}
const config = useRuntimeConfig()

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
        <div>

        </div>
    </div>

    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
        <div>

        </div>
        <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
            <div class="flex justify-center items-center gap-x-10 py-10">
                <nuxt-link class="z-10 hover:opacity-[0.5] hover:transition-all hover:duration-300 hover:ease-in-out"
                    to="/">
                    <img :src="useAsset('images/home/dolby.png')" :alt="useAsset('images/home/dolby.png')">
                </nuxt-link>
                <nuxt-link class="z-10 hover:opacity-[0.5] hover:transition-all hover:duration-300 hover:ease-in-out"
                    to="/">
                    <img :src="useAsset('images/home/christie.png')" :alt="useAsset('images/home/christie.png')">
                </nuxt-link>
                <nuxt-link class="z-10 hover:opacity-[0.5] hover:transition-all hover:duration-300 hover:ease-in-out"
                    to="/">
                    <img :src="useAsset('images/home/2d.png')" :alt="useAsset('images/home/2d.png')">
                </nuxt-link>
                <nuxt-link class="z-10 hover:opacity-[0.5] hover:transition-all hover:duration-300 hover:ease-in-out"
                    to="/">
                    <img :src="useAsset('images/home/3d3.png')" :alt="useAsset('images/home/3d3.png')">
                </nuxt-link>
            </div>
            <div class="relative z-10 tabs-panel lg:font-bold md:font-semibold sm:font-light">
                <tabs ref="tabsref" variant="default" v-model="activeTab">
                    <tab name="first" title="Phim đang chiếu">
                        <!-- cinema -->
                        <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
                            <div class="grid grid-cols-1 lg:grid-cols-2 justify-center gap-8 px-8 lg:px-32 py-6">
                                <div v-for="movie in resultMovie.value" :key="movie.id"
                                    class="flex flex-col-2 bg-red-300 w-[full] h-[400px]">
                                    <div class="flex flex-col-2 gap-2">
                                        <div>
                                            <nuxt-link :to="`/movies/${movie.id}`">
                                                <img :src="config.public.baseURLDefault + movie.image" alt=""
                                                    class="w-[full] h-[380px] pt-5 pl-3">
                                            </nuxt-link>
                                        </div>
                                        <div class="w-[50%]">
                                            <h3 class="text-lg pt-5 text-white">
                                                {{ movie.name }}
                                            </h3>
                                            <p class="text-xs pt-2 text-white hidden xl:block">
                                                {{ movie.description }}
                                            </p>
                                            <p class="pt-4 text-white w-[full]">.............................</p>
                                            <img v-if="movie.type == 1" class="w-10 h-10" src="/images/2d.png" alt="">
                                            <img v-else-if="movie.type == 2" class="w-10 h-10" src="/images/3d.png" alt="">
                                            <div class="flex flex-col-2 justify-center px-2 py-2">
                                                <button @click="trailerHandler(movie.trailer)"
                                                    class="flex bg-red-200 w-[140px] h-[40px] justify-center items-center gap-4 rounded-bl-2xl">
                                                    <nuxt-link to="#">
                                                        <img src="/images/th.jpg" class="w-[30px] h-[30px]" alt="Play Icon">
                                                    </nuxt-link>
                                                    <p>Trailer</p>
                                                </button>
                                                <button
                                                    class="fle w-[140px] h-[40px] justify-center items-center gap-4 bg-red-600 rounded-tr-2xl">
                                                    <nuxt-link :to="`/movies/${movie.id}/location`">
                                                        Mua Vé
                                                    </nuxt-link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tab>
                    <tab name="second" title="Phim sắp chiếu">
                        <!-- <div class="bg-[#f18720] relative">
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
            </div> -->
                    </tab>
                    <tab name="third" title="Suất chiếu đặc biệt">
                        <!-- <div class="bg-[#f18720] relative">
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
            </div> -->
                    </tab>
                </tabs>
            </div>
        </div>
        <div class="absolute top-0 left-0 h-full w-full bg-no-repeat bg-center bg-[url('/images/bg-top.png')] z-1"></div>
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
</style>
