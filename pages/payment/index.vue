<script lang="ts" setup>

useAsyncData("fetch", async () => {
    try {
        if (areAllValuesValid(route.query)) {
            const dataSend = {
                orderId: route.query.vnp_TxnRef,
                transDate: route.query.vnp_PayDate
            }

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
        }
    } catch (error) {
        console.error(error);
    }
});

const money = ref(0)

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


const onSubmit = async () => {
    const response = await useApiBridge({
        url: "vnpay",
        method: "post",
        data: {
            url: "http://localhost:3000/payment",
            amount: money.value,
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
    <form @submit.prevent="onSubmit">
        <input type="number" placeholder="số tiền" v-model="money">
        <button>
            Tính tiền
        </button>
    </form>
</template>