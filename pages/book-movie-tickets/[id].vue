<script setup lang="ts">
const id = useRoute().params.id;
const dataApi = reactive({})

useAsyncData("fetch", async () => {
  try {
    const response = await useApiBridge({
      url: "QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=" + id,
      method: "get",
    });

    dataApi.value = response

    useHead({title: dataApi?.value?.thongTinPhim?.tenPhim})
  } catch (error) {
    console.error(error);
  }
})

const getThoiGian = (thoigian: string): object => {
  const dateTimeObject = new Date(thoigian);

  const ngay = dateTimeObject.getDate();
  const thang = dateTimeObject.getMonth() + 1;
  const nam = dateTimeObject.getFullYear();

  // Định dạng thành chuỗi "ngày - tháng - năm"
  const ngayChieu = `${ngay}/${thang}/${nam}`;

  const gioChieu = dateTimeObject.toLocaleTimeString('en-US', {hour12: false, hour: '2-digit', minute: '2-digit'});

  return {
    ngayChieu: ngayChieu,
    gioChieu: gioChieu
  }
}

const rows = computed(() => {
  const itemsPerPage = 16;
  return dataApi?.value?.danhSachGhe.reduce((rows, item, index) => {
    const row = Math.floor(index / itemsPerPage);
    const hang = String.fromCharCode(65 + Math.floor(index / itemsPerPage));
    if (!rows[row]) {
      rows[row] = [];
    }
    item.hangGhe = hang;
    item.active = false;
    rows[row].push(item);
    return rows;
  }, []);
});

const gheDuocChon = ref([])
const tongtien = ref(0)

const toggleActive = (row: object, itemIndex: number) => {
  if (row.daDat) {
    return
  }

  row.active = !row.active
  row.index = itemIndex
  row.tenDayDu = row.hangGhe + (itemIndex < 10 ? '0' + itemIndex : itemIndex)

  if (row.active) {
    gheDuocChon.value.push(row)
    tongtien.value += row.giaVe
  } else {
    let index = gheDuocChon.value.findIndex(item => item === row);
    if (index !== -1) {
      gheDuocChon.value.splice(index, 1);
    }
    tongtien.value -= row.giaVe
  }
}

const thanhtoan = async () => {
  const danhSachVe = gheDuocChon.value

  const data = {
    amount: tongtien.value,
    maLichChieu: id,
    taiKhoanNguoiDung: "Admin"
  }

  danhSachVe.forEach((value, index) => {
    data[`danhSachVe[${index}]`] = value;
  });

  const queryString = Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');

  const response = await useApiBridge({
    url: "create_payment_url?" + queryString,
    method: "get",
  });

  window.location.href = response
}
</script>

<template>
  <div class="flex justify-center text-start bg-gradient-to-tr from-[#4E0045] to-[#23001C]">
    <div>
      <div class="py-5">
        <h1 class="text-white text-[15px] font-MyriadBold uppercase">tên phim</h1>
        <h1 class="text-white text-4xl uppercase">{{ dataApi?.value?.thongTinPhim?.tenPhim }}</h1>
      </div>

      <div class="flex flex-col-5 text-white pt-2 gap-0.5">
        <div class="flex flex-col">
          <div class="flex gap-0.5">
            <div class="bg-[#f18720] flex flex-col justify-center items-center px-4 py-2">
              <h2 class="text-[14px] text-left">CHỌN XUẤT CHIẾU</h2>
              <h3 class="text-[22px] font-Futurab">{{
                  getThoiGian(dataApi?.value?.thongTinPhim?.ngayChieu)?.gioChieu
                }}</h3>
            </div>
            <div class="bg-[#f18720] flex flex-col justify-center items-center px-4 py-2">
              <h2 class="text-[14px]">Ngày</h2>
              <h3 class="text-[22px] font-Futurab text-left">{{
                  getThoiGian(dataApi?.value?.thongTinPhim?.ngayChieu)?.ngayChieu
                }}</h3>
            </div>
            <div class="bg-[#e00d7a] flex flex-col justify-center items-center px-4 py-2">
              <h2 class="text-[14px]">Số lượng</h2>
              <h3 class="text-[22px] font-Futurab text-left">
                {{ gheDuocChon.length }} ghế</h3>
            </div>
            <div class="bg-[#e00d7a] flex flex-col justify-center items-center px-4 py-2">
              <h2 class="text-[14px]">Tổng tiền</h2>
              <h3 class="text-[22px] font-Futurab text-left">
                {{ tongtien.toLocaleString('en-US') }} đ</h3>
            </div>
          </div>
          <div class="flex flex-col-2 gap-1 pb-2">
            <div class="bg-[#450828] p-4 flex justify-center items-center w-auto">
              <h2 class="text-white text-sm font-Futurab w-auto">SỐ GHẾ</h2>
            </div>
            <div class="bg-[#450828] p-4 flex-1 flex gap-2">
              <div class="font-Futurab text-[18px]" v-for="ghechon in gheDuocChon" :key="ghechon.maGhe">
                {{ ghechon.hangGhe + ghechon.index }}
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center py-1 px-3">
          <h2 class="text-[20px] uppercase font-MyriadLight">thời gian giứ ghế</h2>
          <h1 class="text-5xl">05:00</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="px-[5%]">
    <h3 class="leading-[42px] text-center text-2xl font-Futurab bg-[#969696] rounded-[1000px] text-white uppercase my-5 shadow-custom">
      Màn hình
    </h3>
    <div class="mx-10">
      <div class="mt-20 mb-10">
        <div v-for="(row, rowIndex) in rows" :key="rowIndex"
             class="flex flex-wrap items-center justify-center gap-2 mb-2">
          <div v-for="(item, itemIndex) in row" :key="itemIndex" @click="toggleActive(row[itemIndex], itemIndex)"
               :class="{
                'bg-yellow-200 text-white cursor-pointer': row[itemIndex].loaiGhe == 'Vip',
                '!bg-blue-600 text-white cursor-pointer': row[itemIndex].active,
                'bg-gray-200 cursor-pointer': !row[itemIndex].active,
                'bg-red-200 text-white cursor-not-allowed': row[itemIndex].daDat
              }"
               class="p-2 w-14 text-center font-Futurab text-[16px]">
            {{ row[itemIndex].hangGhe + itemIndex }}
          </div>
        </div>
      </div>
      <div class="flex gap-10 items-center justify-center mb-10">
        <div class="flex flex-col justify-center items-center">
          <div class="bg-blue-600 text-white p-2 w-12 h-12 cursor-pointer text-center font-Futurab text-[11px]"></div>
          <p>Ghế đang chọn</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="bg-gray-200 text-white p-2 w-12 h-12 cursor-pointer text-center font-Futurab text-[11px]"></div>
          <p>Ghế thường</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="bg-yellow-200 text-white p-2 w-12 h-12 cursor-pointer text-center font-Futurab text-[11px]"></div>
          <p>Ghế VIP</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="bg-red-200 text-white p-2 w-12 h-12 cursor-pointer text-center font-Futurab text-[11px]"></div>
          <p>Ghế đã được mua</p>
        </div>
      </div>
      <div class="flex gap-10 items-center justify-center mb-10">
        <button
            class="bg-[#f37520] text-[22px] uppercase font-Futurab py-[10px] px-[30px] rounded-tl-[24px] rounded-br-[24px] text-white hover:bg-[#e00d7a]">
          <nuxt-link to="/foods">Chọn đồ ăn</nuxt-link>
            
        </button>
        <button @click="thanhtoan"
                class="bg-[#f37520] text-[22px] uppercase font-Futurab py-[10px] px-[30px] rounded-tl-[24px] rounded-br-[24px] text-white hover:bg-[#e00d7a]">
          Thanh toán
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadow-custom {
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
}
</style>