<script setup lang="ts">
const route = useRoute()

const id = route.params.id

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
      url: "create_qr?url=http://localhost:3000/book-detail/" + id,
      method: "get",
    });
  } catch (error) {
    console.error(error);
  }
})
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
        <!--        {{ JSON.parse(query['danhSachVe[0]']).tenDayDu }}-->
      </td>
    </tr>
    </tbody>
  </table>
  <div v-html="qrCode"></div>
</template>