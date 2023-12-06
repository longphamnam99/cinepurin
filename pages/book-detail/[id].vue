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
  <table>
    <thead>
    <tr>
      <td>
        Tên phim
      </td>
      <td>
        Rạp
      </td>
      <td>
        Suất chiếu
      </td>
      <td>
        Phòng
      </td>
      <td>
        Ghế
      </td>
      <td>
        Giá tiền
      </td>
      <td>
        Người mua
      </td>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>
        {{ dataApi?.value?.tenPhim }}
      </td>
      <td>
        {{ dataApi?.value?.tenCumRap }}
      </td>
      <td>
        {{ dataApi?.value?.ngayChieu }}
      </td>
      <td>
        {{ dataApi?.value?.tenRap }}
      </td>
      <td>
        <div class="flex gap-5">
          <template v-for="(data, index) in danhSachVeArray" :key="index">
            {{ parseValue(data)?.tenDayDu }}
          </template>
        </div>
      </td>
      <td>
        {{ query.vnp_Amount }}
      </td>
      <td>
        {{ query.taiKhoanNguoiDung }}
      </td>
    </tr>
    </tbody>
  </table>
  <div v-html="qrCode"></div>
</template>