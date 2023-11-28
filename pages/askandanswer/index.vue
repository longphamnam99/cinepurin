<script setup lang="ts">
import useAsset from "@/helpers/useAsset"
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'
const activeTab = ref('first')

useHead({ title: "Hỏi và đáp" })

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

    <!-- câu hỏi -->
    <div class="mx-2 my-2" style="background-image: url(/images/hhv2dyu.jpg)">
        <div>
            <h1 class="text-center font-Futurab text-[30px] text-white py-[40px]">HỎI VÀ ĐÁP</h1>
        </div>
            <div class="font-MyriadBold pl-[10%]">
                <div class="bg-violet-500 w-[90%]">
                    <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
                    <!-- 11111 -->
                    <h2 id="accordion-color-heading-1">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                            <p class="pl-[20px] text-[#ededed]">01</p>
                            <span class="text-[#fff]">Làm thế nào để mua vé online?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-1" class="hidden" aria-labelledby="accordion-color-heading-1">
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">
                            <div class="answer-wrap h-auto">
                                <div class="answer">
                                    <span class="cycle-num">Trả lời</span>
                                    <div class="answer-detail leading-6">
                                        <p class="text-center">HƯỚNG DẪN MUA VÉ ONLINE</p>

                                        <p class="text-center underline">Điều kiện:</p>

                                        <p>- Bạn phải là thành viên Cinestar</p>

                                        <p>- Nếu không là thành viên vui lòng đăng ký thành viên trên website để được mua vé</p>

                                        <p class="text-center">
                                            <img alt="" src="https://sv1.uphinhnhanh.com/images/2018/06/11/image97da8.png" class="w-full h-auto">
                                        </p>

                                        <p class="text-center underline">Bước 2:</p>

                                        <p>Đăng nhập tài khoản thành viên</p>

                                        <p class="text-center">
                                            <img alt="" src="https://sv1.uphinhnhanh.com/images/2018/06/11/image32ff4.png" class="w-full h-auto">
                                        </p>

                                        <p>Đăng nhập</p>

                                        <p>Trường hợp khách hàng đăng nhập không được vui lòng liên hệ:</p>

                                        <p>- Rạp Cinestar QT:</p>

                                        <p>- Rạp Cinestar Hai Bà Trưng:</p>

                                        <p>- Rạp Cinestar Đà Lạt:</p>

                                        <p class="text-center underline">Bước 3:</p>

                                        <p>- Chọn loại vé và số lượng:</p>

                                        <p class="text-center">
                                            <img alt="" src="https://sv1.uphinhnhanh.com/images/2018/06/11/112.png" class="w-full h-auto">
                                        </p>

                                        <p class="text-center underline">Bước 4:</p>

                                        <p>Chọn ghế:</p>

                                        <p class="text-center">
                                            <img alt="" src="https://sv1.uphinhnhanh.com/images/2018/06/11/113.png" class="w-full h-auto">
                                        </p>

                                        <p>Chọn thức ăn:</p>

                                        <p class="text-center">
                                            <img alt="" src="https://sv1.uphinhnhanh.com/images/2018/06/11/114.png" class="w-full h-auto">
                                        </p>

                                        <p class="text-center underline">Bước 5:</p>

                                        <p>- Đồng ý.</p>

                                        <p>- Đồng ý các điều khoản</p>

                                        <p>- Chọn loại thẻ thanh toán.</p>

                                        <p>- Thanh toán.</p>

                                        <p class="ml-14 text-center">&nbsp;</p>

                                        <p class="text-center">B6:&nbsp;&nbsp;&nbsp; Nhập thông tin tài khoản để thanh toán việc mua online.&nbsp;</p>

                                        <p class="text-center">HOÀN TẤT</p>
                                    </div>
                                </div>
                            </div>
                            </p>
                        </div>
                    </div>
                    <!-- 22222 -->
                    <h2 id="accordion-color-heading-2">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                            <p class="pl-[20px] text-[#ededed]">02</p>
                            <span class="text-[#fff]">Thủ tục đặt vé online và phương thức thanh toán như thế nào?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">
                            <div class="answer-wrap">
                                <div class="answer">
                                    <span class="cycle-num">Trả lời</span>
                                    <div class="answer-detail leading-6">
                                        <p class="line-height-5"><b>CÁCH ĐẶT VÉ ONLINE:</b></p>

                                        <p class="line-height-5"><strong>1/</strong> Đặt vé online trên mục MUA VÉ ONLINE ở trang chủ Cinestar Cinema.</p>

                                        <p class="line-height-5"><strong>2/</strong> Chọn Phim, Rạp, Ngày và Suất chiếu .</p>

                                        <p class="line-height-5"><strong>3/ </strong>Bạn chọn vị trí ghế, nhập thông tin liên hệ.</p>

                                        <p class="line-height-5"><strong>4/ </strong>Bạn chọn phương thức thanh toán.</p>

                                        <p class="line-height-5">
                                            <img alt="" src="https://www.cinestar.com.vn/pictures/3_hoi dap/mua ve/untitled-3.png" class="w-full h-auto">
                                        </p>

                                        <p class="line-height-5"><strong>5/ </strong>Sau khi hoàn tất thanh toán hệ thống sẽ gửi thông tin vé đến liên hệ của bạn. Vui lòng xuất thông tin đặt vé khi đến rạp.</p>

                                        <p class="line-height-5"><strong>CHÚC BẠN XEM PHIM VUI VẺ</strong></p>
                                    </div>
                                </div>
                            </div>
                            </p>
                        </div>
                    </div>
                    <!-- 333333 -->
                    <h2 id="accordion-color-heading-3">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                            <p class="pl-[20px] text-[#ededed]">03</p>
                            <span class="text-[#fff]">Làm sao để được cấp thẻ thành viên?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-1" class="hidden" aria-labelledby="accordion-color-heading-3">
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400"> </p>
                            <div class="answer-wrap">
                                <div class="answer">
                                    <span class="cycle-num">Trả lời</span>
                                    <div class="answer-detail leading-6">
                                        <p>Bạn chỉ cần mua 02 vé xem phim bất kỳ tại rạp Cinestar là đã có thể tạo thẻ C'Friend và thẻ chỉ có giá trị sử dụng từ lần giao dịch sau.</p>

                                        <p>Khi bạn tích đủ 10,000 điểm tích lũy thì sẽ được nâng lên thẻ C'vip</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 44444 -->
                    <h2 id="accordion-color-heading-4">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                            <p class="pl-[20px] text-[#ededed]">04</p>
                            <span class="text-[#fff]">Lợi ích khi tham gia thẻ thành viên là gì?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-4" class="hidden" aria-labelledby="accordion-color-heading-4">
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">
                            <div class="answer-wrap">
                                <div class="answer">
                                    <span class="cycle-num">Trả lời</span>
                                    <div class="answer-detail leading-6">
                                        <p><span class="line-height-7">Thẻ thành viên của Cinestar bao gồm 2 hạng mục là C'Friend và C'Vip. Cụ thể quyền lợi như sau</span></p>

                                        <p>Khi điểm của thẻ đạt mức như sau sẽ có thể đổi được phần thưởng tương ứng.</p>

                                        <p>Khi điểm tích lũy của thẻ đạt 10.000 sẽ được nâng cấp lên thẻ C'Vip (Điểm tích lũy = tổng điểm cộng dồn từ trước đến giờ, không phải điểm còn lại của thẻ)</p>

                                        <p><img alt="" src="https://www.cinestar.com.vn/pictures/moi/2KhuyenMai/1TheThanhVien/mucthuong2.jpg" class="w-full h-auto"></p>

                                        <p><strong>Thẻ C’Friend: </strong></p>

                                        <p>- Được cấp lần đầu khi mua 2 vé xem phim bất kỳ tại Cinestar.</p>

                                        <p>- Được tích lũy điểm theo giá trị mua hàng hóa dịch vụ như trên.</p>

                                        <p>- Được giảm 10% trực tiếp trên giá trị hóa đơn bắp nước khi mua tại quầy.</p>

                                        <p>- Được tặng 1 vé xem phim 2D vào tuần sinh nhật (tính từ Thứ Hai đến Chủ Nhật), Điều kiện: tối thiểu có 500 điểm tích lũy</p>

                                        <p>- Được tham gia các chương trình dành cho thành viên.</p>

                                        <p><strong>Thẻ C’VIP:</strong></p>

                                        <p>- Được cấp cho thành viên C’Friend khi tích lũy được ít nhất 10,000 điểm.</p>

                                        <p>- Được tích lũy điểm theo giá trị mua hàng hóa dịch vụ như trên.</p>

                                        <p>- Được giảm 15% trực tiếp trên giá trị hóa đơn bắp nước khi mua tại quầy.</p>

                                        <p>- Được tặng 2 vé xem phim 2D và 1 combo gồm coke 16oz + popcorn 32oz vào tuần sinh nhật (tính từ Thứ Hai đến Chủ Nhật).</p>

                                        <p>- Có cơ hội nhận vé tham gia Lễ Ra Mắt Phim và các chương trình khuyến mãi khác của Cinestar.</p>

                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                            </div>
                            </p>
                        </div>
                    </div>
                    <!-- 555555-->
                    <h2 id="accordion-color-heading-5">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                            <p class="pl-[20px] text-[#ededed]">05</p>
                            <span class="text-[#fff]">Làm sao để biết được số điểm đã tích lũy?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-5" class="hidden" aria-labelledby="accordion-color-heading-5">
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400"> </p>
                            <div class="answer-wrap">
                                <div class="answer">
                                    <span class="cycle-num">Trả lời</span>
                                    <div class="answer-detail">
                                        <p class="text-sm text-gray-700 font-arial">Khách hàng có thể hỏi nhân viên lúc sử dụng thẻ thành viên để mua vé hoặc kiểm tra thông tin khách hàng trên website cinestar.com.vn bằng tài khoản online.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-[40px] font-Futurab text-[30px] text-white text-center">
            <div>
                <h1>GỬI CÂU HỎI</h1>
            </div>
            <div class="font-MyriadLight">       
                <form class="max-w-sm mx-auto">
                    <div class="mb-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">HỌ TÊN (*)</label>
                        <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nhập họ tên" required>
                    </div>
                    <div class="flex gap-2">
                        <div class="mb-2">
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">ĐIỆN THOẠI (*)</label>
                            <input type="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        </div>
                        <div class="mb-2">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">EMAIL (*)</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[230px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        </div>
                    </div>
                    <div class="mb-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">NHẬP NỘI DUNG (*)</label>
                        <input type="name" id="name" class="bg-gray-50 h-[200px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    </div>
                    <button type="submit" class="text-white bg-orange-500 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-Futurab rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GỬI</button>
                </form>
            </div>    
        </div>
    </div>
    
    <div>
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
            </tabs>
        </div>
    </div>
</template>