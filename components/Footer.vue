<template>
  <div class="w-full">
    <img class="w-full" src="/images/background-header.png" alt="">
  </div>
  <!-- chan trang -->
  <div class="bg-cover from-[#4E0045] to-[#23001C] relative" style="background-image: url(/images/Hinh-nen-may-tinh-toi-gian-800x450.jpg)">
        <div class="flex justify-center pt-2">
            <!-- logo -->
            <img src="/images/logo.png" alt="" class="w-50 h-20">
        </div>
    <div class="flex justify-center items-center">
      <div class="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 xl:w-[1280px] lg:w-[1024px] sm:w-[786px] xs:w-[640px] text-center justify-center pt-4">
        <div class="">
          <div class="bg-white bg-opacity-10 px-4 py-2 font-avantgarde-demi text-white text-sm uppercase text-center mb-2 inline-block">
            <h2 class="">LIÊN KẾT</h2>
          </div>
          <div class="pt-2">
            <div class="flex justify-center items-center pt-2 gap-2" >
              <nuxt-link to="#" class="hover:bg-black">
                            <span class="hover:opacity-50">
                                <img src="/images/scl_facebook.png" alt="" class="w-10 h-10">
                            </span>
              </nuxt-link>
              <nuxt-link to="#" class="hover:bg-black">
                            <span class="hover:opacity-50">
                                <img src="/images/scl_youtube.png" alt="" class="w-10 h-10 ">
                            </span>
              </nuxt-link>
            </div>
            <div>
              <div class="bg-white bg-opacity-10 px-4 py-2 font-avantgarde-demi text-white text-sm uppercase text-center mb-2 inline-block">
                <h2>HOTLINE</h2>
              </div>

              <div class="pt-2 text-[#e1dae2]">
                <div>
                  <nuxt-link to="#" class="hover:bg-pink-400">
                                <span class="hover:opacity-50 hover:text-orange-500">
                                    <h3 class="font-avantgarde text-2xl">0389 010 316</h3>
                                </span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div class="bg-white bg-opacity-10 px-4 py-2 font-avantgarde-demi text-white text-sm uppercase text-center mb-2 inline-block">
            <h2>HỆ THỐNG RẠP</h2>
          </div>
          <div class="pt-2 text-[#e1dae2] font-MyriadLight">
                    <span>
                        <div class="hover:opacity-50 hover:text-orange-500">
                            <nuxt-link to="#">
                                <h3>CINE Bình Dương</h3>
                            </nuxt-link>
                        </div>
                        <div class="hover:opacity-50 hover:text-orange-500">
                            <nuxt-link to="#">
                                <h3>CINE Bình Phước</h3>
                            </nuxt-link>
                        </div>
                        <div class="hover:opacity-50 hover:text-orange-500">
                            <nuxt-link to="#">
                                <h3>CINE Đồng Tháp</h3>
                            </nuxt-link>
                        </div>
                        <div class="hover:opacity-50 hover:text-orange-500">
                            <nuxt-link to="#">
                                <h3>CINE Hồ Chí Minh</h3>
                            </nuxt-link>
                        </div>
                    </span>

          </div>
        </div>
        <div>
          <div class="bg-white bg-opacity-10 px-4 py-2 font-avantgarde-demi text-white text-sm uppercase text-center mb-2 inline-block">
            <h2>CINEPURIN</h2>
          </div>
          <div class="pt-2 text-[#e1dae2] font-MyriadLight">
            <div>
              <nuxt-link to="#" class="hover:opacity-50 hover:text-orange-500">
                <h3>Phim Đang Chiếu</h3>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="#" class="hover:opacity-50 hover:text-orange-500">
                <h3>Phim Sắp Chiếu</h3>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="#" class="hover:opacity-50 hover:text-orange-500">
                <h3>Xuất Chiếu Đặc Biệt</h3>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="#" class="hover:opacity-50 hover:text-orange-500">
                <h3>CINE Bình Dương</h3>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white bg-opacity-10 px-4 py-2 font-avantgarde-demi text-white text-sm uppercase text-center mb-2 inline-block">
            <h2>THÔNG TIN</h2>
          </div>

          <div class="pt-2 text-[#e1dae2] font-MyriadLight">
            <div>
              <nuxt-link to="#" class="hover:opacity-50 hover:text-orange-500">
                <h3>Giới Thiệu</h3>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="#" class="hover:opacity-50 hover:text-orange-500">
                <h3>Tin Tức</h3>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="#" class="hover:opacity-50 hover:text-orange-500">
                <h3>Hỏi và Đáp</h3>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="#" class="hover:opacity-50 hover:text-orange-500">
                <h3>Liên Hệ</h3>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="">
          <div class="bg-white bg-opacity-10 px-4 py-2 font-avantgarde-demi text-white text-sm uppercasesm:justify-center sm:items-center text-center mb-2 inline-block">
            <h2>CHÍNH SÁCH VÀ QUY ĐỊNH</h2>
          </div>

          <div class="pt-2 text-[#e1dae2] font-MyriadLight">
            <div>
              <nuxt-link to="#" class="hover:opacity-50 hover:text-orange-500">
                <h3>Quy Định Chung</h3>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="#" class="hover:opacity-50 hover:text-orange-500">
                <h3>Điều Khoản Giao Dịch</h3>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="#" class="hover:opacity-50 hover:text-orange-500">
                <h3>Chính Sách Bảo Mật</h3>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="#" class="hover:opacity-50 hover:text-orange-500">
                <h3>Thông Tin Công Ty</h3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div class="flex flex-col-5 justify-center items-center pt-5 gap-4">
            <div>
                <nuxt-link to="#">
                    <img src="../public/images/dolby2.png" alt="">
                </nuxt-link>
            </div>
            <div>
                <nuxt-link to="#">
                    <img src="../public/images/crhistie.png" alt="">
                </nuxt-link>
            </div>
            <div>
                <nuxt-link to="#">
                    <img src="../public/images/2d.jpg" alt="">
                </nuxt-link>
            </div>
            <div>
                <nuxt-link to="#">
                    <img src="../public/images/3d.png" alt="">
                </nuxt-link>
            </div>    
            <div>
                <nuxt-link to="#">
                    <img src="../public/images/cinestar-coffee-02.png" alt="">
                </nuxt-link>
            </div>
        </div>
    </div>  
    <div class="flex bg-[#4E0045] text-center justify-center items-center text-white py-[15px] px-[20px]">
        <div>
            <h2 class="font-Arial, Helvetica, sans-serif; text-[14px] text-[#b3c4d5]">Chấp Nhận Thanh Toán</h2>           
            <div class="flex flex-col-4 gap-2 pt-2" >
                <div>
                    <nuxt-link to="#">
                        <img src="../public/images/napas-40.png" alt="">
                    </nuxt-link>
                </div>
                <div>
                    <nuxt-link to="#">
                        <img src="../public/images/momo.jpg" alt="">
                    </nuxt-link>
                </div>
                <div>
                    <nuxt-link to="#">
                        <img src="../public/images/payment-mastercard.png" alt="">
                    </nuxt-link>
                </div>
                <div>
                    <nuxt-link to="#">
                        <img src="../public/images/payment-visa.png" alt="">
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
    
    <div class="flex bg-black justify-center">
        <div>
            <div><p class="text-white text-center text-sm">CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO <br> </p>
              
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>