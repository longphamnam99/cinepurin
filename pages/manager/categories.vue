<script setup lang="ts">
definePageMeta({
    layout: 'admin'
})

const result = reactive({});

useAsyncData("fetch", async () => {
    try {
        await getData()
    } catch (error) {
        console.error(error);
    }
});

const getData = async (): Promise<void> => {
    const response = await useApiBridge({
        url: "categories",
        method: "get",
    })
    if (response.code === 200) {
        result.value = response.data
    }
}

const idDelete = ref()

const showModal = ref(false)

const showModalDelete = (id: number | string): void => {
    showModal.value = true
    idDelete.value = id
}

const model = ref({
    name: null,
    description: null
})


const acceptHandler = async (isAccept: boolean): Promise<void> => {
    const response = await useApiBridge({
        url: "categories/" + idDelete.value,
        method: "delete",
        useToken: true
    })

    if (response.code === 200) getData()
}

const isEdit = ref(false)
const typeSubmit = ref("add")
const editId = ref()

const editHandler = (data: object): void => {
    typeSubmit.value = "edit"
    isEdit.value = true
    editId.value = data.id
    model.value.name = data.name
    model.value.description = data.description
}

const submitForm = async (): Promise<void> => {
    if (model.value.name == "" || model.value.name == undefined || model.value.name == null) {
        alert("Vui lòng nhập tên")
        return
    }

    const response = await useApiBridge({
        url: typeSubmit.value == "add" ? "categories" : "categories/" + editId.value,
        method: typeSubmit.value == "add" ? "post" : "put",
        data: model.value,
        useToken: true
    })

    if (response.code != 200) {
        return
    } else {
        getData()
        model.value.name = null
        model.value.description = null
        if (isEdit.value) {
            isEdit.value = false
        }
    }
}
</script>
<template>
    <div class="bg-white shadow-md rounded my-6 p-6">
        <h2 class="text-2xl font-semibold mb-4">Danh mục</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
            <div>
                <label for="studentName" class="block text-sm font-medium text-gray-700">Tên danh mục</label>
                <input v-model="model.name" type="text" class="w-full border border-gray-300 rounded p-2">
            </div>
            <div>
                <label for="studentName" class="block text-sm font-medium text-gray-700">Mô tả</label>
                <input v-model="model.description" type="text" class="w-full border border-gray-300 rounded p-2">
            </div>
            <div v-if="!isEdit">
                <button type="submit"
                    class="bg-blue-500 text-white font-semibold rounded p-2 hover:bg-blue-700">Thêm</button>
            </div>
            <div v-else class="flex gap-2">
                <button type="submit"
                    class="bg-blue-500 text-white font-semibold rounded p-2 hover:bg-blue-700">Sửa</button>
                <button
                    class="bg-red-500 text-white font-semibold rounded p-2 hover:bg-blue-700" @click="isEdit = false">Huỷ</button>
            </div>
        </form>
    </div>
    <div class="bg-white shadow-md rounded my-6 text-center">
        <table class="min-w-full table-auto">
            <thead>
                <tr>
                    <th class="bg-gray-200 text-gray-600 border border-gray-300">STT</th>
                    <th class="bg-gray-200 text-gray-600 border border-gray-300">Tên Phim</th>
                    <th class="bg-gray-200 text-gray-600 border border-gray-300">Mô tả</th>
                    <th class="bg-gray-200 text-gray-600 border border-gray-300">Thao tác</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) in result.value" :key="data?.name">
                    <td class="border border-gray-300">{{ index + 1 }}</td>
                    <td class="border border-gray-300">{{ data.name }}</td>
                    <td class="border border-gray-300">{{ data.description }}</td>
                    <td class="border border-gray-300 flex gap-2">
                        <button class="bg-blue-500 text-white font-semibold rounded p-2 hover:bg-blue-700"
                            @click="editHandler(data)">Sửa</button>
                        <button class="bg-red-500 text-white font-semibold rounded p-2 hover:bg-red-700"
                            @click="showModalDelete(data.id)">
                            Xóa
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <teleport to="body">
        <ModalConfirmDelete v-model:model-value="showModal" @accept="acceptHandler" />
    </teleport>
</template>