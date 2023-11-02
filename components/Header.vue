<script setup lang="ts">
import { ref, watch } from 'vue'
import { Modal } from 'flowbite-vue'
import { useAuthStore } from '~/stores/auth'
import Cookies from 'js-cookie'
import axios from 'axios'

const authStore = useAuthStore()

const router = [
  {
    path: "/cine",
    name: "Phim",
  },
  {
    path: "/showtimes",
    name: "Lịch chiếu",
  },
  {
    path: "/theaters_prices",
    name: "Rạp và giá",
  },
  {
    path: "/promotion",
    name: "Khuyến mãi",
  },
  {
    path: "/askandanswer",
    name: "Hỏi và đáp",
  },
  {
    path: "/news",
    name: "Tin tức",
  },
  {
    path: "/introduce",
    name: "Giới thiệu",
  },
  {
    path: "/contact",
    name: "Liên hệ",
  },
]

const token = Cookies.get('token') || ""

const isShowModalRegister = ref(false)
const closeModal = () => {
  isShowModalRegister.value = false
}

const isShowModalLogin = ref(false)
const showModal = () => {
  isShowModalRegister.value = true
}

const form = ref({
  username: null,
  password: null
})

const formRegister = ref({
  gender: 0,
  fullname: null,
  birthday: null,
  address: null,
  idcard: null,
  phone: null,
  email: null,
  username: null,
  password: null,
  repassword: null,
})

const isShowLogin = ref(true)

watch(token, (newToken) => {
  if (token.length) {
    isShowLogin.value = false
  }
}, {
  immediate: true,
})

const submitForm = async () => {
  const data = await useApiBridge({
    url: "auth/signin",
    method: "post",
    data: form.value
  })

  if (data.code === 200) {
    Cookies.set('token', data.data.token)
    isShowLogin.value = false
    isShowModalLogin.value = false
  }
}

const logout = async () => {
  const data = await useApiBridge({
    url: "auth/logout",
    method: "post",
    data: {
      data: null
    },
    useToken: true
  })
  if (data.code === 200) {
    Cookies.set('token', "")
    isShowLogin.value = true
  }
}

const register = async () => {
  const data = await useApiBridge({
    url: "auth/signup",
    method: "post",
    data: formRegister.value
  })
  console.log(data)
}
</script>

<template>
  <nav>
    <div class="bg-gradient-to-tr from-[#4E0045] to-[#23001C] relative">
      <div class="relative">
        <img src="/images/background-header.png" alt="Top header">
      </div>

      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:px-0 px-4">
        <nuxt-link to="/" class="flex items-center w-[220px] h-[110px] cursor-pointer">
          <img src="/images/logo.png" class="z-10" alt="Flowbite Logo" />
        </nuxt-link>
        <div class="xl:flex flex-col gap-y-3 py-2 hidden md:w-auto justify-between items-end z-10">
          <div class="flex gap-5">
            <form @click.prevent class="relative">
              <input
                class="rounded-[30px] bg-[#000000] opacity-[0.7] border-0 pr-28 pl-[20px] py-3 placeholder-[#d1d1d1] text-sm text-[#d1d1d1] focus:ring-0 focus:placeholder-transparent placeholder:font-avantgarde"
                type="text" placeholder="Tìm kiếm...">
              <button type="submit" class="absolute top-1/2 right-0 transform -translate-y-1/2">
                <img src="/images/icon-search.png" alt="search">
              </button>
            </form>
            <button
              class="rounded-[1000px] bg-[#ba3469] w-[39px] h-[39px] flex items-center justify-center text-white font-bold leading-[39px] text-sm">
              EN
            </button>
          </div>
          <div class="rounded-[30px] border border-[#e00d7a] p-1">
            <ul class="nav z-20 bg-[#e00d7a] rounded-[30px] flex font-avantgarde-demi text-shadow">
              <li v-for="item in router" :key="item.name"
                class="hover:bg-[#f37520] transition-all duration-300 ease-in-out text-[18px] leading-[24px]">
                <nuxt-link :to="item.path" class="block py-2 pl-3 pr-4 text-white uppercase">{{
                  item.name
                }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="absolute top-0 left-0 h-full w-full bg-no-repeat bg-center bg-[url('/images/bg-top.png')] z-1">
      </div>
    </div>
    <div class="bg-[url('/images/pattern.png')] bg-repeat bg-top max-w-full flex items-center justify-center">
      <div class="lg:w-[90%] w-full items-center flex flex-wrap lg:justify-between justify-center gap-x-10">
        <div class="flex items-center sm:gap-x-10 gap-x-8">
          <div v-if="isShowLogin" class="flex items-center gap-x-2 cursor-pointer" @click="isShowModalRegister = true">
            <img class="sm:w-auto sm:h-auto w-[30px]" src="/images/icon-register.png" alt="icon register">
            <p class="uppercase text-[#e00d7a] font-bold sm:text-base text-xs font-avantgarde-demi">
              Đăng ký thành viên
            </p>
          </div>
          <div v-if="isShowLogin" class="flex items-center gap-x-2 cursor-pointer" @click="isShowModalLogin = true">
            <img class="sm:w-auto sm:h-auto w-[30px]" src="/images/icon-login.png" alt="icon login">
            <p class="uppercase text-[#e00d7a] font-bold sm:text-base text-xs font-avantgarde-demi">
              Đăng nhập
            </p>
          </div>
          <div v-else class="cursor-pointer" @click="logout">
            Đăng xuất
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex items-center gap-x-2 cursor-pointer">
            <img class="sm:w-auto sm:h-auto w-[30px]" src="/images/icon-call.png" alt="icon call">
            <p class="uppercase text-[#f37520] font-bold sm:text-[30px] text-2xl font-Futurab">
              +84 89010316
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <teleport to="body">
    <Modal v-if="isShowModalRegister" @close="isShowModalRegister = false">
      <template #header>
        <div class="flex items-center text-lg">
          Đăng ký tài khoản
        </div>
      </template>
      <!-- đăng ký đăng nhập -->
      <template #body>
        <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          <div class="w-72">
            <div class="flex items-center">
              <!-- Nút chọn giới tính Nam -->
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio" name="gender" value="0" v-model="formRegister.gender">
                <span class="ml-2">Nam</span>
              </label>

              <!-- Nút chọn giới tính Nữ -->
              <label class="inline-flex items-center ml-6">
                <input type="radio" class="form-radio" name="gender" value="1" v-model="formRegister.gender">
                <span class="ml-2">Nữ</span>
              </label>
            </div>
            <!-- nhập thông tin -->
          </div>
          <div class="flex gap-[10px]">
            <div>
              <input type="text"
                class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 placeholder-gray-500 w-[290px]"
                placeholder="Họ tên">
            </div>
            <div>
              <input type="date"
                class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 placeholder-gray-500 w-[290px]"
                placeholder="Ngày sinh" v-model="formRegister.birthday">
            </div>
          </div>
          <div class="pt-2">
            <input type="text"
              class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 placeholder-gray-500 w-[590px]"
              placeholder="Địa chỉ" v-model="formRegister.address">
          </div>
          <div class="flex gap-[10px] pt-2">
            <div>
              <input type="text"
                class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 placeholder-gray-500 w-[200px]"
                placeholder="Số CMND/BLX" v-model="formRegister.idcard">
            </div>
            <div>
              <input type="tel"
                class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 placeholder-gray-500 w-[180px]"
                placeholder="Điện Thoại" v-model="formRegister.phone">
            </div>
            <div>
              <input type="email"
                class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 placeholder-gray-500 w-[190px]"
                placeholder="Email" v-model="formRegister.email">
            </div>
          </div>
          <div class="pt-2">
            <input type="text"
              class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 placeholder-gray-500 w-[590px]"
              placeholder="Tên đăng nhập(*)" v-model="formRegister.username">
          </div>
          <div class="flex gap-[10px] pt-2">
            <div>
              <input type="text"
                class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 placeholder-gray-500 w-[290px]"
                placeholder="Mật khẩu(*)" v-model="formRegister.password">
            </div>
            <div>
              <input type="text"
                class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 placeholder-gray-500 w-[290px]"
                placeholder="Nhập lại mật khẩu(*)" v-model="formRegister.repassword">
            </div>
          </div>
          <div>
            <div>
              <h1 class="text-center">CHÍNH SÁCH BẢO MẬT</h1>
            </div>
            <textarea name="" id="" cols="69" rows="8">1. TỔNG QUAN VỀ CHÍNH SÁCH BẢO MẬT
                            CINESTAR hiểu rằng Khách Hàng quan tâm đến việc dữ liệu cá nhân của Khách Hàng sẽ được sử dụng và chia sẻ như thế nào. CINESTAR rất coi trọng sự tin tưởng của Khách Hàng, vì vậy CINESTAR sẽ sử dụng những dữ liệu mà Khách Hàng cung cấp một cách cẩn thận và hợp lý, phù hợp với quy định của pháp luật.
                            Website: www.cinestar.com.vn thuộc quyền sở hữu của Công ty Cổ phần Giải trí – Phát hành phim – Rạp chiếu phim Ngôi Sao (CINESTAR), địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM. Website này được quản lý điều hành bởi CINESTAR. Website này được sử dụng cho các hoạt động của CINESTAR, các chi nhánh trực thuộc, các công ty thành viên và các tổ chức liên quan (được gọi là CINESTAR trong văn bản này).
                            CINESTAR cam kết tôn trọng quyền riêng tư và những vấn đề cá nhân của tất cả Khách Hàng trên website của CINESTAR (sau đây gọi là "Website”). CINESTAR nhận thức được tầm quan trọng của các dữ liệu cá nhân mà Khách Hàng đã cung cấp cho CINESTAR và tin rằng trách nhiệm của CINESTAR là quản lý đúng cách, bảo vệ và xử lý dữ liệu cá nhân của Khách Hàng.
                            Chính Sách Bảo Mật Dữ Liệu Cá Nhân (sau đây gọi tắt là "Chính Sách Bảo Mật" hay "Chính Sách") được tạo ra nhằm cung cấp các thông tin tổng quát về việc CINESTAR sẽ xử lý dữ liệu cá nhân bao gồm việc: thu thập, ghi, phân tích, xác nhận, lưu trữ, chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu hồi, mã hóa, giải mã, sao chép, chia sẻ, truyền đưa, cung cấp, chuyển giao, xóa, hủy dữ liệu cá nhân hoặc các hành động khác có liên quan mà Khách Hàng đã cung cấp cho CINESTAR khi tham gia truy cập, giao dịch trên Website của CINESTAR như thế nào, cho dù ở hiện tại hay trong tương lai; cũng như cách mà CINESTAR sẽ hỗ trợ Khách Hàng trước khi đưa ra bất cứ quyết định nào liên quan đến việc cung cấp dữ liệu cá nhân của Khách Hàng cho CINESTAR.
                            "Dữ liệu cá nhân" là các thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự trên môi trường điện tử gắn liền với một con người cụ thể hoặc giúp xác định một con người cụ thể. Dữ liệu cá nhân bao gồm dữ liệu cá nhân cơ bản và dữ liệu cá nhân nhạy cảm. Dữ liệu cá nhân của Khách Hàng sau đây được gọi chung là “Thông Tin Khách Hàng”.
                            Bằng cách sử dụng dịch vụ, đăng ký tài khoản với CINESTAR, ghé thăm Website của CINESTAR, hoặc truy cập vào dịch vụ, thực hiện giao dịch trên Website của CINESTAR hoặc các sản phẩm liên quan của CINESTAR và đánh dấu vào ô đồng ý với nội dung Chính Sách được hiểu là Khách Hàng đã được đọc, hiểu, thừa nhận và đồng ý các yêu cầu, và/hoặc các Chính Sách, thực tiễn áp dụng nêu trong Chính Sách Bảo Mật này (kể cả các phiên bản sửa đổi, bổ sung của Chính Sách), và Khách Hàng đồng ý với CINESTAR về việc xử lý dữ liệu cá nhân của Khách Hàng theo cách được mô tả trong tài liệu này.
                            Nếu Khách Hàng không đồng ý với Chính Sách Bảo Mật này, vui lòng không sử dụng dịch vụ của CINESTAR hoặc truy cập Website của CINESTAR. Nếu CINESTAR thay đổi Chính Sách Bảo Mật, CINESTAR sẽ cập nhật thay đổi hoặc sửa đổi đó trên Website của CINESTAR. Phiên bản sửa đổi, bổ sung Chính Sách này (nếu có) sẽ có hiệu lực kể từ ngày việc sửa đổi, bổ sung Chính Sách được đăng tải, thông báo trên Website. CINESTAR bảo lưu quyền sửa đổi Chính Sách Bảo Mật này vào bất cứ lúc nào.
                            CINESTAR kính mong Khách Hàng vui lòng đọc Chính Sách Bảo Mật một cách cẩn thận. Nếu Khách Hàng có bất kỳ câu hỏi liên quan đến các thông tin này hoặc thực tiễn bảo mật của CINESTAR, xin vui lòng liên hệ với CINESTAR theo thông tin ở phần cuối của Chính Sách Bảo Mật này.
                            2. PHẠM VI XỬ LÝ THÔNG TIN
                            Thông tin do Khách Hàng cung cấp: CINESTAR thu thập tất cả những thông tin, dữ liệu cá nhân (“Thông Tin Khách Hàng”) mà Khách Hàng đăng tải hoặc các thao tác mà Khách Hàng thực hiện trên Website của CINESTAR.
                            Dữ liệu cá nhân được thu thập trong phạm vi thực hiện Chính Sách này là “Dữ liệu cá nhân cơ bản” bao gồm 09 thông tin cá nhân được liệt kê sau đây:
                            1. Họ và tên;
                            2. Ngày, tháng, năm sinh;
                            3. Giới tính
                            4. Địa chỉ cư trú;
                            5. Số điện thoại;
                            6. Số chứng minh nhân dân, số định danh cá nhân, số hộ chiếu, số giấy phép lái xe;
                            7. Thông tin về tài khoản số thanh toán của cá nhân; và
                            8. Địa chỉ email.
                            Khách Hàng cam kết cung cấp đầy đủ, chính xác dữ liệu cá nhân khi đồng ý với Chính Sách Bảo Mật này. Trong trường hợp (các) dữ liệu được cung cấp không chính xác thì Khách Hàng tự chịu trách nhiệm đối với mọi thiệt hại phát sinh cho CINESTAR và/hoặc bên thứ ba bất kỳ và tự chịu trách nhiệm trước pháp luật.
                            Lưu ý: Khách Hàng là người dưới 16 tuổi chỉ được đánh dấu vào ô đồng ý sau khi được sự đồng ý của cha, mẹ hoặc người giám hộ hợp pháp. Bằng việc đánh dấu vào ô đồng ý, CINESTAR được hiểu rằng Khách Hàng và người người giám hộ hợp pháp của mình đã đồng ý với Chính Sách Bảo Mật này và do đó CINESTAR được quyền miễn trừ mọi hậu quả pháp lý phát sinh (nếu có) trong trường hợp phát hiện có sự gian dối, không trung thực từ phía Khách Hàng tại mục này.
                            3. MỤC ĐÍCH XỬ LÝ THÔNG TIN
                            Mục đích thu thập, xử lý Thông Tin Khách Hàng bao gồm các hoạt động sau đây:
                            1. Cung cấp các dịch vụ, sản phẩm theo nhu cầu của Khách Hàng;
                            2. Liên hệ xác nhận khi Khách Hàng đăng ký sử dụng dịch vụ, xác lập giao dịch trên Website;
                            3. Thực hiện việc quản lý Website, gửi thông tin cập nhật về Website, các chương trình khuyến mại, ưu đãi/tri ân tới Khách Hàng;
                            4. Bảo đảm quyền lợi của Khách Hàng khi phát hiện các hành động giả mạo, phá hoại tài khoản, lừa đảo Khách Hàng;
                            5. Liên lạc, hỗ trợ, giải quyết với Khách Hàng trong các trường hợp đặc biệt.
                            CINESTAR chỉ sử dụng Thông Tin Khách Hàng cho các mục đích nêu trên hoặc mục đích khác (nếu có) với điều kiện đã thông báo và được sự đồng ý của Khách Hàng.
                            Khách Hàng hiểu và đồng ý rằng CINESTAR có nghĩa vụ phải cung cấp Thông Tin Khách Hàng theo yêu cầu/quyết định của Cơ quan nhà nước có thẩm quyền và/hoặc quy định pháp luật. CINESTAR sẽ được miễn trừ mọi trách nhiệm liên quan đến bảo mật thông tin trong trường hợp này.
                            Để tránh nghi ngờ, trong quá trình giao dịch thanh toán tại Website, CINESTAR chỉ lưu giữ thông tin chi tiết về đơn hàng đã thanh toán của khách hàng, các thông tin về tài khoản ngân hàng của khách hàng sẽ không được lưu giữ.
                            4. LƯU GIỮ VÀ BẢO MẬT THÔNG TIN
                            - Thông Tin Khách Hàng, cũng như các thông tin trao đổi giữa Khách Hàng và CINESTAR, đều được lưu giữ và bảo mật bởi hệ thống của CINESTAR.
                            - CINESTAR sẽ lưu trữ Thông Tin Khách Hàng theo quy định pháp luật hiện hành. Nếu Khách Hàng ngừng sử dụng Website, hoặc việc cho phép Khách Hàng sử dụng Website và/hoặc các dịch vụ bị chấm dứt, CINESTAR có thể tiếp tục lưu trữ, sử dụng và/hoặc tiết lộ Thông Tin Khách Hàng phù hợp với Chính Sách Bảo Mật và nghĩa vụ của CINESTAR theo quy định của pháp luật.
                             - Khách Hàng tuyệt đối không được có bất kỳ hành vi sử dụng công cụ, chương trình để can thiệp trái phép vào hệ thống hay làm thay đổi cấu trúc dữ liệu của CINESTAR, cũng như bất kỳ hành vi nào khác nhằm phát tán, cổ vũ cho các hoạt động với mục đích can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống CINESTAR, cũng như các các hành vi mà pháp luật Việt Nam nghiêm cấm. Trong trường hợp CINESTAR phát hiện Khách Hàng có hành vi cố tình giả mạo, gian lận, phát tán các thông tin trái phép,… CINESTAR có quyền chuyển Thông Tin Khách Hàng theo yêu cầu của cơ quan có thẩm quyền để xử lý theo quy định pháp luật.
                            5. THỜI GIAN LƯU TRỮ THÔNG TIN
                            Thông Tin Khách Hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và thực hiện đóng tài khoản. Đối với các tài khoản đã đóng, CINESTAR vẫn lưu trữ Thông Tin Khách Hàng và truy cập của Khách Hàng để phục vụ cho mục đích phòng chống gian lận, điều tra, giải đáp thắc mắc ...
                            Các thông tin này sẽ được CINESTAR lưu trữ trong hệ thống máy chủ tối đa mười hai (12) tháng kể từ ngày Khách Hàng đóng tài khoản trên CINESTAR. Sau khi thời hạn này kết thúc, CINESTAR có thể tiến hành xóa vĩnh viễn thông tin cá nhân của Khách Hàng.
                            6. TỔ CHỨC, CÁ NHÂN ĐƯỢC XỬ LÝ THÔNG TIN
                            CINESTAR và các công ty thành viên, các chi nhánh của mình sẽ thực hiện xử lý dữ liệu thông tin cá nhân của Khách Hàng theo các mục nêu trên. CINESTAR không cung cấp Thông Tin Khách Hàng cho bất kỳ bên thứ ba nào khác trừ các trường hợp ngoại lệ không cần sự đồng ý của Khách Hàng theo quy định của pháp luật.
                            Các tổ chức, cá nhân được liệt kê sau đây có thể được xử lý dữ liệu cá nhân sau khi được sự đồng ý của Khách Hàng:
                            - Nhà thầu, đại lý, nhà cung cấp dịch vụ và các bên thứ ba khác mà CINESTAR sử dụng để hỗ trợ hoạt động kinh doanh của CINESTAR
                            - Các đối tác có ký kết thỏa thuận liên kết chăm sóc khách hàng với CINESTAR. Việc chia sẻ này giúp CINESTAR có thể cung cấp cho Khách Hàng các thông tin về các sản phẩm và dịch vụ, liên quan đến hàng hóa, dịch vụ và vấn đề khác mà Khách Hàng có thể quan tâm. Trong trường hợp các chi nhánh, công ty thành viên của CINESTAR và các công ty liên kết của CINESTAR được cấp quyền truy cập Thông Tin Khách Hàng, họ sẽ phải tuân thủ nghiêm ngặt các quy định được mô tả trong Chính Sách Bảo Mật này.
                            - Các bên thứ ba là đối tác, đại lý của CINESTAR: CINESTAR có thể chuyển Thông Tin Khách Hàng cho các đại lý và nhà thầu phụ để làm phân tích dữ liệu, tiếp thị, quảng cáo và hỗ trợ dịch vụ khách hàng.
                            - Các đơn vị kinh doanh khác mà CINESTAR có kế hoạch sáp nhập hoặc mua lại: Trong trường hợp này, CINESTAR sẽ yêu cầu những đơn vị đó tuân thủ nghiêm ngặt theo Chính Sách Bảo Mật này.
                            Chính Sách Bảo Mật này không phải là một lời hứa rằng dữ liệu cá nhân của Khách Hàng sẽ không bao giờ được tiết lộ, ngoại trừ như được mô tả trong Chính Sách Bảo Mật này.
                            7. QUYỀN VÀ NGHĨA VỤ CỦA KHÁCH HÀNG
                            Trừ trường hợp pháp luật có quy định khác, quyền và nghĩa vụ của Khách Hàng đối với dữ liệu cá nhân được quy định chi tiết như sau:
                            A. Quyền của Khách Hàng
                            1. Quyền được biết
                            Khách Hàng được biết về hoạt động xử lý dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.
                            2. Quyền đồng ý
                            Khách Hàng được đồng ý hoặc không đồng ý cho phép xử lý dữ liệu cá nhân của mình, trừ trường hợp pháp luật cho phép CINESTAR xử lý mà không cần có sự đồng ý của Khách Hàng.
                            3. Quyền truy cập
                            Khách Hàng được truy cập để xem, chỉnh sửa hoặc yêu cầu chỉnh sửa dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.
                            4. Quyền rút lại sự đồng ý
                            Khách Hàng được quyền rút lại sự đồng ý của mình, trừ trường hợp luật có quy định khác.
                            5. Quyền xóa dữ liệu
                            Khách Hàng được xóa hoặc yêu cầu xóa dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.
                            6. Quyền hạn chế xử lý dữ liệu
                            a) Khách Hàng được yêu cầu hạn chế xử lý dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác;
                            b) Việc hạn chế xử lý dữ liệu được thực hiện trong 72 giờ sau khi có yêu cầu của Khách Hàng, với toàn bộ dữ liệu cá nhân mà chủ thể dữ liệu yêu cầu hạn chế, trừ trường hợp luật có quy định khác.
                            7. Quyền cung cấp dữ liệu
                            Khách Hàng được yêu cầu CINESTAR và các bên liên quan cung cấp cho bản thân dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.
                            8. Quyền phản đối xử lý dữ liệu
                            a) Khách Hàng được phản đối CINESTAR và các bên liên quan nhằm ngăn chặn hoặc hạn chế tiết lộ dữ liệu cá nhân hoặc sử dụng cho mục đích quảng cáo, tiếp thị, trừ trường hợp luật có quy định khác;
                            b) CINESTAR và các bên liên quan thực hiện yêu cầu của Khách Hàng trong 72 giờ sau khi nhận được yêu cầu, trừ trường hợp luật có quy định khác.
                            9. Quyền khiếu nại, tố cáo, khởi kiện
                            Khách Hàng có quyền khiếu nại, tố cáo hoặc khởi kiện theo quy định của pháp luật.
                            10. Quyền yêu cầu bồi thường thiệt hại
                            Khách Hàng có quyền yêu cầu bồi thường thiệt hại theo quy định của pháp luật khi xảy ra vi phạm quy định về bảo vệ dữ liệu cá nhân của mình, trừ trường hợp các bên có thỏa thuận khác hoặc luật có quy định khác.
                            11. Quyền tự bảo vệ
                            Khách Hàng có quyền tự bảo vệ theo quy định của Bộ luật Dân sự, luật khác có liên quan, hoặc yêu cầu cơ quan, tổ chức có thẩm quyền thực hiện các phương thức bảo vệ quyền dân sự theo quy định tại Điều 11 Bộ luật Dân sự.
                            B. Nghĩa vụ của Khách Hàng
                            1. Tự bảo vệ dữ liệu cá nhân của mình; yêu cầu các tổ chức, cá nhân khác có liên quan bảo vệ dữ liệu cá nhân của mình.
                            2. Tôn trọng, bảo vệ dữ liệu cá nhân của người khác.
                            3. Cung cấp đầy đủ, chính xác dữ liệu cá nhân khi đồng ý cho phép xử lý dữ liệu cá nhân.
                            4. Tham gia tuyên truyền, phổ biến kỹ năng bảo vệ dữ liệu cá nhân.
                            5. Thực hiện quy định của pháp luật về bảo vệ dữ liệu cá nhân và tham gia phòng, chống các hành vi vi phạm quy định về bảo vệ dữ liệu cá nhân.
                            8. THÔNG BÁO VÀ SỬA ĐỔI
                            Do CINESTAR liên tục cải thiện dịch vụ và sản phẩm để phục vụ Khách Hàng tốt hơn, nên Chính Sách Bảo Mật, Điều Kiện và Điều Khoản Giao Dịch, Quy Định Chung sẽ thường xuyên được thay đổi và cập nhật. CINESTAR có thể đăng tải trên Website hoặc có thể gửi email thông báo cho Khách Hàng về những thay đổi trong những chính sách của CINESTAR. Tuy nhiên, CINESTAR cũng khuyến khích Khách Hàng thường xuyên theo dõi trên Website để cập nhật những thay đổi trong chính sách của CINESTAR. Trừ trường hợp có văn bản với nội dung khác, Chính Sách Bảo Mật hiện tại của CINESTAR được áp dụng cho tất cả những thông tin mà CINESTAR có trong phạm vi xử lý Thông Tin Khách Hàng.
                            9. CAM KẾT CHUNG
                            Mọi thông tin cá nhân của Khách Hàng thu thập được từ Website sẽ được lưu giữ an toàn, chỉ có Khách Hàng mới có thể truy cập vào tài khoản cá nhân của mình bằng tên đăng nhập và mật khẩu do Khách Hàng chọn.
                            CINESTAR cam kết bảo mật thông tin, không chia sẻ, tiết lộ, chuyển giao Thông Tin Khách Hàng, thông tin giao dịch trực tuyến trên Website cho bất kỳ bên thứ ba nào khi chưa được sự đồng ý của Khách Hàng, trừ các trường hợp pháp luật cho phép CINESTAR xử lý thông tin mà không cần đến sự đồng ý của Khách Hàng.

                            

                            CINESTAR, bằng nỗ lực tốt nhất của mình, sẽ áp dụng các giải pháp công nghệ để ngăn chặn các hành vi đánh cắp hoặc tiếp cận thông tin trái phép; sử dụng, thay đổi hoặc phá hủy thông tin trái phép. Tuy nhiên, CINESTAR không thể cam kết sẽ ngăn chặn được tất cả các hành vi xâm phạm, sử dụng thông tin cá nhân trái phép nằm ngoài khả năng kiểm soát của CINESTAR. CINESTAR sẽ không chịu trách nhiệm dưới bất kỳ hình thức nào đối với bất kỳ khiếu nại, tranh chấp hoặc thiệt hại nào phát sinh từ hoặc liên quan đến việc truy cập, xâm nhập, sử dụng thông tin trái phép như vậy.

                            

                            Trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát Thông Tin Khách Hàng, gây ảnh hưởng xấu đến Khách Hàng, CINESTAR sẽ ngay lập tức thông báo cho Khách Hàng và trình vụ việc cho cơ quan chức năng điều tra xử lý.

                            

                            Khách Hàng có nghĩa vụ bảo mật tên đăng ký, mật khẩu và hộp thư điện tử của mình. CINESTAR sẽ không chịu trách nhiệm dưới bất kỳ hình thức nào đối với các thiệt hại, tổn thất (nếu có) do Khách Hàng không tuân thủ quy định bảo mật này.

                            

                            Khách Hàng tuyệt đối không được có các hành vi sử dụng công cụ, chương trình để can thiệp trái phép vào hệ thống hay làm thay dổi dữ liệu của CINESTAR. Trong trường hợp CINESTAR phát hiện Khách Hàng có hành vi cố tình giả mạo, gian lận, phát tán thông tin cá nhân trái phép… CINESTAR có quyền chuyển thông tin cá nhân của Khách Hàng cho các cơ quan có thẩm quyền để xử lý theo quy định của pháp luật.

                            

                            10. THÔNG TIN LIÊN HỆ

                            

                            Bất kỳ lúc nào Khách Hàng có bất kỳ câu hỏi, cần hỗ trợ, cần giải thích, khiếu nại hoặc quan tâm về việc bảo mật của CINESTAR hoặc các giao dịch của Khách Hàng với CINESTAR, xin vui lòng liên hệ CINESTAR theo thông tin sau:
                        </textarea>
          </div>
        </div>
        <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          <div class="w-72">

          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-between">
          <button @click="closeModal" type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Từ Chối
          </button>
          <button @click="register" type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Đồng Ý
          </button>
        </div>
      </template>
    </Modal>
    <Modal v-if="isShowModalLogin" @close="isShowModalLogin = false">
      <template #header>
        <div class="flex items-center text-lg">
          Đăng nhập
        </div>
      </template>
      <template #body>
        <form @submit.prevent="submitForm">
          <div class="relative z-0 w-full mb-6 group">
            <input v-model="form.username" type="text" name="floating_email" id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" " required />
            <label for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tài khoản</label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input v-model="form.password" type="password" name="floating_password" id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" " required />
            <label for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mật
              khẩu</label>
          </div>
          <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Đăng nhập
          </button>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<style scoped>
.nav li:first-child {
  border-radius: 30px 0 0 30px;
  -webkit-border-radius: 30px 0 0 30px;
}

.nav li:last-child {
  border-radius: 0 30px 30px 0;
  -webkit-border-radius: 0 30px 30px 0;
}

.text-shadow {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
</style>