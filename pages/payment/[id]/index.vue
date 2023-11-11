<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'
const activeTab = ref('first')

// useHead({ title: "Trang chủ" })
// const pictures = [
//     {
//         'src': useAsset('images/home/z2161740555616_cf6d683f88aa9447af57b89917e84acb.jpg'),
//         'alt': 'Picture 1',
//     },
//     {
//         'src': useAsset('images/home/z2161740555387_88fc044837bea7695ee9ec8320a39cef.jpg'),
//         'alt': 'Picture 2',
//     },
// ]
const handlePaneClick = (): void => {
    console.log("Click!")
}

const config = useRuntimeConfig()
const id = useRoute().params.id;

const dataApi = reactive({})

const route = useRoute()

const areAllValuesValid = (obj: object) => {
    if ((Object.keys(obj).length === 0 && obj.constructor === Object)) {
        return false;
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (value === null || value === undefined || value === '') {
                return false;
            }
        }
    }
    return true;
}

const qrcode = ref(null)
const showQr = ref(false)

useAsyncData("fetch", async () => {
    try {
        const response = await useApiBridge({
            url: "products/" + id,
            method: "get",
        });

        if (response.code === 200) {
            dataApi.value = response.data
        }

        if (areAllValuesValid(route.query)) {
            const dataSend = {
                orderId: route.query.vnp_TxnRef,
                transDate: route.query.vnp_PayDate
            }

            console.log(123123)

            const response = await useApiBridge({
                url: "vnpay/check",
                method: "post",
                data: dataSend
            })

            if (response.code === 200) {
                console.log("Thanh toan thanh cong")
            } else {
                console.log("Thanh toan khong thanh cong")
            }

            const createQr = await useApiBridge({
                url: `qrcode?data=http://localhost:3000/order=${id}`,
                method: "get",
            })

            if (createQr.code == 200) {
                qrcode.value = createQr.data
                showQr.value = true
            }
        }
    } catch (error) {
        console.error(error);
    }
})

const onSubmit = async () => {
    const response = await useApiBridge({
        url: "vnpay",
        method: "post",
        data: {
            url: `http://localhost:3000/payment/${id}`,
            amount: "100000",
            bankCode: "VNBANK",
            language: "vn"
        }
    })

    if (response.code === 200) {
        window.location.href = response.data;
    }
}
</script>

<template>
    <div v-if="showQr" class="w-full h-full fixed z-10 top-0 right-0" v-html="qrcode"></div>
    <!-- table  -->
    <div class="flex justify-center text-start bg-gradient-to-tr from-[#4E0045] to-[#23001C]">
        <div>
            <h1 class="text-white text-3xl">tên phim</h1>
            <h1 class="text-white text-4xl">{{ dataApi?.value?.name }}</h1>
            <div class="flex flex-col-5 text-white pt-2 gap-1">
                <div class="bg-orange-400 w-32 pl-2">
                    <h2 class="text-base">CHỌN XUẤT <br> CHIẾU</h2>
                    <h3 class="text-4xl">23:40</h3>
                </div>
                <div class="bg-orange-400 w-52 pl-2">
                    <h2 class="text-base">NGÀY <br> <br></h2>
                    <h3 class="text-4xl">17/09/2023</h3>
                </div>
                <div class="bg-pink-500  w-32 pl-2">
                    <h2 class="text-base">SỐ LƯỢNG <br> <br></h2>
                    <h3 class="text-4xl"> 0 VÉ</h3>
                </div>
                <div class="bg-pink-500 w-52 pl-2">
                    <h2 class="text-base">TỔNG SỐ TIỀN <br><br></h2>
                    <h3 class="text-4xl">0 VNĐ</h3>
                </div>
                <div class="pt-6 pl-5 ">
                    <h2 class="text-lg">thời gian giứ ghế</h2>
                    <h1 class="text-5xl">05:00</h1>
                </div>
            </div>
            <div class="flex flex-col-2 gap-1 pb-2">
                <div class="bg-[#4E0045] w-32 h-24">
                    <h2 class="flex justify-center text-white pl-2 pt-8">SỐ GHẾ</h2>
                </div>
                <div class="bg-[#4E0045] w-[552px] h-24 ">

                </div>
            </div>
        </div>
    </div>
    <!-- chon ve -->
    <div>
        <div class="flex flex-col-4 gap-0.5 justify-center pt-3">
            <div>
                <h2 class="flex justify-center w-52 h-11 text-white bg-orange-400 ">Loại Vé</h2>
            </div>
            <div>
                <h2 class="flex justify-center w-48 h-11 text-white bg-orange-400 ">So luong</h2>
            </div>
            <div>
                <h2 class="flex justify-center w-56 h-11 text-white bg-orange-400 ">Gia(VND)</h2>
            </div>
            <div>
                <h2 class="flex justify-center w-64 h-11 text-white bg-orange-400 ">Tổng Tiền (VNĐ)</h2>
            </div>
        </div>
        <div class="flex flex-col-4 justify-center">
            <div>
                <h2 class="flex justify-center w-52 h-11 text-black bg-[#DCDCDC] ">Người Lớn(Đôi)</h2>
            </div>
            <div>
                <h2 class="flex justify-center w-48 h-11 text-black bg-[#A9A9A9] "></h2>
            </div>
            <div>
                <h2 class="flex justify-center w-56 h-11 text-black bg-[#DCDCDC] ">95000 VNĐ</h2>
            </div>
            <div>
                <h2 class="flex justify-center w-64 h-11 text-black bg-[#DCDCDC] ">0 VNĐ</h2>
            </div>
        </div>
        <div class="flex flex-col-4 justify-center pb-1">
            <div>
                <h2 class="flex justify-center w-52 h-11 text-black bg-[#DCDCDC] ">Người Lớn(Đơn)</h2>
            </div>
            <div>
                <h2 class="flex justify-center w-48 h-11 text-black bg-[#A9A9A9] "></h2>
            </div>
            <div>
                <h2 class="flex justify-center w-56 h-11 text-black bg-[#DCDCDC]">45000 VNĐ</h2>
            </div>
            <div>
                <h2 class="flex justify-center w-64 h-11 text-black bg-[#DCDCDC] ">0 VNĐ</h2>
            </div>
        </div>
    </div>
    <div class="pl-[293px]">
        <div class="flex flex-col-2 justify-center pt-4 bg-[#DCDCDC] w-[880px]">
            <div>
                <h2 class="flex justify-center w-52 h-11 text-black">Số lượng vé: 0 vé</h2>
            </div>
            <div>
                <h2 class="flex justify-center w-48 h-11 text-black  ">Tổng số tiền: 0vnđ</h2>
            </div>
        </div>
    </div>
    <div>
        <div class="flex flex-col-2 gap-4 justify-center pt-3">
            <div class="bg-orange-600 w-[140px] h-[40px] text-center pt-2 rounded-xl">
                <nuxt-link to="/shin">Quay lại</nuxt-link>
            </div>
            <div class="bg-orange-600 w-[140px] h-[40px] text-center pt-2 rounded-xl">
                <nuxt-link to="/book_tables">Chọn ghế</nuxt-link>
            </div>
            <div @click="onSubmit" class="bg-orange-600 w-[140px] h-[40px] text-center pt-2 rounded-xl cursor-pointer">
                Thanh toán
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
</style>