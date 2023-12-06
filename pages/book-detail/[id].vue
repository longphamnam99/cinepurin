<script setup lang="ts">
const route = useRoute()

const id = route.params.id

const query = route.query

const dataApi = reactive({})

const qrCode = ref()

useAsyncData("fetch", async () => {
  try {
    const response = await useApiBridge({
      url: "QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=" + id,
      method: "get",
    });
    dataApi.value = response.thongTinPhim

    qrCode.value = await useApiBridge({
      url: "create_qr?url=http://45.117.177.116/book-detail/" + id,
      method: "get",
    });
  } catch (error) {
    console.error(error);
  }
})

const danhSachVe = ref(null);

const danhSachVeArray = computed(() => {
  const data = Object.keys(query)
      .filter((key) => key.startsWith('danhSachVe'))
      .map((key) => {
        const danhSachVeString = query[key];
        try {
          return JSON.parse(JSON.stringify(danhSachVeString));
        } catch (error) {
          console.error(`Error parsing JSON for key ${key}:`, error);
          console.log('Invalid JSON string:', danhSachVeString);
          return null;
        }
      })
      .filter((danhSachVe) => danhSachVe !== null);
  return data;
});


const parseValue = (data: string) => {
  try {
    return JSON.parse(data)
  } catch (e) {
    console.log(e)
  }
}

</script>

<template>
  <table class="min-w-full bg-white border border-gray-300 text-center">
      <thead>
          <tr>
              <th class="py-2 px-4 border-b">Tên phim</th>
              <th class="py-2 px-4 border-b">Rạp</th>
              <th class="py-2 px-4 border-b">Suất chiếu</th>
              <th class="py-2 px-4 border-b">Phòng</th>
              <th class="py-2 px-4 border-b">Ghế</th>
              <th class="py-2 px-4 border-b">Giá tiền</th>
              <th class="py-2 px-4 border-b">Người mua</th>
              <th class="py-2 px-4 border-b">Mã QR</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td class="py-2 px-4">{{ dataApi?.value?.tenPhim }}</td>
              <td class="py-2 px-4">{{ dataApi?.value?.tenCumRap }}</td>
              <td class="py-2 px-4">{{ dataApi?.value?.ngayChieu }}</td>
              <td class="py-2 px-4">{{ dataApi?.value?.tenRap }}</td>
              <td class="py-2 px-4">
                  <div class="flex gap-5">
                      <template v-for="(data, index) in danhSachVeArray" :key="index">
                          {{ parseValue(data)?.tenDayDu }}
                      </template>
                  </div>
              </td>
              <td class="py-2 px-4">{{ query.vnp_Amount }}</td>
              <td class="py-2 px-4">{{ query.taiKhoanNguoiDung }}</td>
              <td class="py-2 px-4"><div v-html="qrCode"></div></td>
          </tr>
      </tbody>
  </table>
</template>