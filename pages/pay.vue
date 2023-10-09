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
</script>

<template>
    
    <!-- table  -->
    <div class="flex justify-center text-start bg-gradient-to-tr from-[#4E0045] to-[#23001C]"> 
        <div>
            <h1 class="text-white text-3xl">tên phim</h1>
            <h1 class="text-white text-4xl">shin - cậu bé bút chì</h1>   
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
    <!-- bảng thanh toán -->
    <div class="flex justify-center">
        <div class="pt-5">
            <div class="flex justify-center bg-red-400 w-[1000px]">
                <div>   
                    <h2 class="">Cảm ơn quý khách đã đến với Cinestar ! <br>
                        Xin quý khách vui lòng kiểm tra lại thông tin đặt vé</h2>
                </div>
            </div>
            <div class="flex flex-col-2">
                <div>
                    <div>
                    <img src="../public/images/shin-cau-be-but-chi.jpg" alt="" class="w-[400px] h-[500px]">
                    </div>
                </div>
                <div>
                    <div class="pt-2">
                    <h2 class="text-2xl">3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT <br>(P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY</h2> <br>
                    <p class="text-xl">công chiếu ngày 19/09/2023</p> <br>
                    <p class="text-xl">vào lúc: 18:25</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center gap-0.5">
        <div class="flex flex-col-3 bg-slate-500 w-[80px] h-8">
            <div>
                <h2 class="pt-1 pl-6">Ghế</h2>
            </div>
        </div>
        <div class="flex flex-col-3 bg-slate-500 w-[480px] h-8">
            <div>
                <h2 class="pt-1 pl-1">L03</h2>
            </div>
        </div>
        <div class="flex flex-col-3 bg-slate-500 w-[400px] h-8 justify-end pr-1">
            <div>
                <h2 class="pt-1">145000vnđ</h2>
            </div>
        </div>
    </div>
    <div class="flex justify-center gap-0.5 pt-5">
        <div class="flex flex-col-2  w-[500px] h-8">
            <div>
                <h2 class="pt-1 pl-6 text-3xl">Tổng tiền</h2>
            </div>
        </div>
        <div class="flex flex-col-3  w-[470px] h-8 justify-end pr-1">
            <div>
                <h2 class="pt-1 text-3xl">145000vnđ</h2>
            </div>
        </div>
    </div>
    <div class="flex justify-center pt-5">
        <div class="w-[960px]">
            <div> <h1 class="text-xl">Quý khách vui lòng nhập mã giảm giá (nếu có)</h1></div>
            <div class="flex flex-col-3 gap-2 pt-1">
                <div class="flex justify-center pt-2 bg-red-500 w-[120px] h-[40px] rounded-xl"> <h1>Mã giảm giá</h1></div>
                <div>
                    <div><textarea name="#" id="#" cols="10" rows="1" class="rounded-xl">nhập...</textarea></div>
                </div>
                <div>
                    <nuxt-link to="#">
                        <button class="w-[40px] h-[40px] rounded-xl bg-violet-300">Gửi</button>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col-2 justify-center pt-5">
        <div class="w-[920px]">
            <div><h1>số tiền giảm</h1></div>
        </div>
        <div>
            <div><h1>0.vnđ</h1></div>
        </div>
    </div>
    <div class="flex justify-center"><p>....................................................................................................................................................................................................................</p></div>
    <div class="flex justify-center pt-3">
        <div class="w-[800px]">
            <div>
                <h1 class="text-3xl">số tiền cần thanh toán</h1>
            </div>
        </div>
        <div>
            <div>
                <h1 class="text-3xl">145000 vnđ</h1>
            </div>
        </div>
    </div>

    <!-- thanh toán -->
    <div class="pt-5">
        <div class="flex justify-center">
            <div>
                <h1>ĐIỀU KHOẢN CHUNG</h1>
                <textarea name="#" id="#" cols="90" rows="10"> Việc bạn sử dụng website này đồng nghĩa với việc bạn đồng ý với những thỏa thuận dưới đây.
Nếu bạn không đồng ý, xin vui lòng không sử dụng website.
1. Trách nhiệm của người sử dụng:
Khi truy cập vào trang web này, bạn đồng ý chấp nhận mọi rủi ro. Cinestar và các bên đối tác khác không chịu trách nhiệm về bất kỳ tổn thất nào do những hậu quả trực tiếp, tình cờ hay gián tiếp; những thất thoát, chi phí (bao gồm chi phí pháp lý, chi phí tư vấn hoặc các khoản chi tiêu khác) có thể phát sinh trực tiếp hoặc gián tiếp do việc truy cập trang web hoặc khi tải dữ liệu về máy; những tổn hại gặp phải do virus, hành động phá hoại trực tiếp hay gián tiếp của hệ thống máy tính khác, đường dây điện thoại, phần cứng, phần mềm, lỗi chương trình, hoặc bất kì các lỗi nào khác; đường truyền dẫn của máy tính hoặc nối kết mạng bị chậm…

2. Về nội dung trên trang web:
Tất cả những thông tin ở đây được cung cấp cho bạn một cách trung thực như bản thân sự việc. Cinestar và các bên liên quan không bảo đảm, hay có bất kỳ tuyên bố nào liên quan đến tính chính xác, tin cậy của việc sử dụng hay kết quả của việc sử dụng nội dung trên trang web này. Nột dung trên website được cung cấp vì lợi ích của cộng đồng và có tính phi thương mại. Các cá nhân và tổ chức không được phếp sử dụng nội dung trên website này với mục đích thương mại mà không có sự ưng thuận của Cinestar bằng văn bản. Mặc dù Cinestar luôn cố gắng cập nhật thường xuyên các nội dung tại trang web, nhưng chúng tôi không bảo đảm rằng các thông tin đó là mới nhất, chính xác hay đầy đủ. Tất cả các nội dung website có thể được thay đổi bất kỳ lúc nào.

3. Về bản quyền:
Cinestar là chủ bản quyền của trang web này. Việc chỉnh sửa trang, nội dung, và sắp xếp thuộc về thẩm quyền của Cinestar. Sự chỉnh sửa, thay đổi, phân phối hoặc tái sử dụng những nội dung trong trang này vì bất kì mục đích nào khác được xem như vi phạm quyền lợi hợp pháp của Cinestar.

4. Về việc sử dụng thông tin:
Chúng tôi sẽ không sử dụng thông tin cá nhân của bạn trên website này nếu không được phép. Nếu bạn đồng ý cung cấp thông tin cá nhân, bạn sẽ được bảo vệ. Thông tin của bạn sẽ được sử dụng với mục đích, liên lạc với bạn để thông báo các thông tin cập nhật của Cinestar như lịch chiếu phim, khuyến mại qua email hoặc bưu điện. Thông tin cá nhân của bạn sẽ không được gửi cho bất kỳ ai sử dụng ngoài trang web Cinestar, ngoại trừ những mở rộng cần thiết để bạn có thể tham gia vào trang web (những nhà cung cấp dịch vụ, đối tác, các công ty quảng cáo) và yêu cầu cung cấp bởi luật pháp. Nếu chúng tôi chia sẻ thông tin cá nhân của bạn cho các nhà cung cấp dịch vụ, công ty quảng cáo, các công ty đối tác liên quan, thì chúng tôi cũng yêu cầu họ bảo vệ thông tin cá nhân của bạn như cách chúng tôi thực hiện.

5. Vể việc tải dữ liệu:
Nếu bạn tải về máy những phần mềm từ trang này, thì phần mềm và các dữ liệu tải sẽ thuộc bản quyền của Cinestar và cho phép bạn sử dụng. Bạn không được sở hữu những phầm mềm đã tải và Cinestar không nhượng quyền cho bạn. Bạn cũng không được phép bán, phân phối lại, hay bẻ khóa phần mềm…

6. Thay đổi nội dung:
Cinestar giữ quyền thay đổi, chỉnh sửa và loại bỏ những thông tin hợp pháp vào bất kỳ thời điểm nào vì bất kỳ lý do nào.

7. Liên kết với các trang khác:
Mặc dù trang web này có thể được liên kết với những trang khác, Cinestar không trực tiếp hoặc gián tiếp tán thành, tổ chức, tài trợ, đứng sau hoặc sát nhập với những trang đó, trừ phi điều này được nêu ra rõ ràng. Khi truy cập vào trang web bạn phải hiểu và chấp nhận rằng Cinestar không thể kiểm soát tất cả những trang liên kết với trang Cinestar và cũng không chịu trách nhiệm cho nội dung của những trang liên kết.

8. Đưa thông tin lên trang web:
Bạn không được đưa lên, hoặc chuyển tải lên trang web tất cả những hình ảnh, từ ngữ khiêu dâm, thô tục, xúc phạm, phỉ báng, bôi nhọ, đe dọa, những thông tin không hợp pháp hoặc những thông tin có thể đưa đến việc vi phạm pháp luật, trách nhiệm pháp lý. Cinestar và tất cả các bên có liên quan đến việc xây dựng và quản lý trang web không chịu trách nhiệm hoặc có nghĩa vụ pháp lý đối với những phát sinh từ nội dung do bạn tải lên trang web.

9. Luật áp dụng:
                Mọi hoạt động phát sinh từ trang web có thể sẽ được phân tích và đánh giá theo luật pháp Việt Nam và toà án Tp. Hồ Chí Minh. Và bạn phải đồng ý tuân theo các điều khoản riêng của các toà án này.</textarea>
            </div>
        </div>
        <div class="flex flex-col-2 justify-center gap-2">
            <div class="w-[40px]">
                <div>
                    <p>check</p>
                </div>
                </div><div class="w-[800px]">
                <div>
                    <p>Tôi đảm bảo mua vé phim này theo đúng độ tuổi quy định</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col-2 justify-center gap-2    ">
            <div class="w-[40px]">
                <div>
                    <p>check</p> 
                </div>
            </div>
            <div class="w-[800px]">
                <div>
                    <p>Thanh Toán qua momo</p> 
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="w-[850px]">
                <img src="../public/images/momo.jpg" alt="">
            </div>
        </div>
    </div>

    <!-- điền thông tin -->
    <div class="text-center">
        <p>VUI LÒNG NHẬP TÊN - SỐ ĐIỆN THOẠI - EMAIL</p>
        <div class="justify-center ">
            <div>
                <div>
                    <textarea name="#" id="#" cols="98" rows="1">họ tên</textarea>
                </div>
            </div>
            <div>
                <div>
                    <textarea name="#" id="#" cols="98" rows="1">họ tên</textarea>
                </div>
            </div>
            <div>
                <div>
                    <textarea name="#" id="#" cols="98" rows="1">họ tên</textarea>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col-2 gap-5 justify-center">
        <div class="bg-orange-300 w-[120px] h-[40px] text-center pt-2 rounded-xl">
            <div>
                <h1>quay lại</h1>
            </div>
        </div>
        <div class="bg-pink-300 w-[120px] h-[40px] text-center pt-2 rounded-xl">
            <div>
                <h1>Thanh toán</h1>
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
    box-shadow: 10px 0 0 rgba(0,0,0,0.1);
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