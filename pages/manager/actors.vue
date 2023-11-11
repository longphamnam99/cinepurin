<script setup lang="ts">
import { useActorsStore } from "~/stores/actors"

definePageMeta({
    layout: 'admin'
})

const actorsStore = useActorsStore();

const result = reactive({});

const formatDate = (dateTimeString: string) => {
    const dateTime = new Date(dateTimeString);

    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1;
    const day = dateTime.getDate();

    const dateString = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

    return dateString
}

const getData = async (): Promise<void> => {
    await actorsStore.getActors()
    result.value = actorsStore.actors
}

useAsyncData("fetch", async () => {
    try {
        await getData()
    } catch (error) {
        console.error(error);
    }
});

const idDelete = ref()

const showModal = ref(false)

const showModalDelete = (id: number | string): void => {
    showModal.value = true
    idDelete.value = id
}

const model = ref({
    name: null,
    image: null,
    description: null,
    birthday: null
})


const acceptHandler = async (isAccept: boolean): Promise<void> => {
    const response = await useApiBridge({
        url: "actors/" + idDelete.value,
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
    model.value.birthday = formatDate(data.birthday)
    model.value.description = data.description
}

const submitForm = async (): Promise<void> => {
    if (model.value.name == "" || model.value.name == undefined || model.value.name == null) {
        alert("Vui lòng nhập tên")
        return
    }

    const response = await useApiBridge({
        url: typeSubmit.value == "add" ? "actors" : "actors/" + editId.value,
        method: typeSubmit.value == "add" ? "post" : "put",
        data: model.value,
        useToken: true,
        useUpload: true,
    })

    if (response.code != 200) {
        alert("Cập nhật thất bại")
        return
    } else {
        getData()
        model.value.name = null
        model.value.birthday = null
        model.value.description = null
        if (isEdit.value) {
            isEdit.value = false
        }
    }
}

const onFileChange = ($event: Event): void => {
    const target = $event.target as HTMLInputElement;
    if (target && target.files) {
        model.value.image = target.files[0];
    }
}

</script>
<template>
    <div class="bg-white shadow-md rounded my-6 p-6">
        <h2 class="text-2xl font-semibold mb-4">Diễn viên</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
            <div>
                <label for="studentName" class="block text-sm font-medium text-gray-700">Tên diễn viên</label>
                <input v-model="model.name" type="text" class="w-full border border-gray-300 rounded p-2">
            </div>
            <div>
                <label for="studentAge" class="block text-sm font-medium text-gray-700">Ngày sinh</label>
                <input v-model="model.birthday" type="date" id="studentAge" name="studentAge"
                    class="w-full border border-gray-300 rounded p-2">
            </div>
            <div>
                <label for="studentAge" class="block text-sm font-medium text-gray-700">Ảnh diễn viên</label>
                <input accept="image/*" @change="onFileChange($event)" type="file" id="studentAge" name="studentAge"
                    class="border-gray-300 rounded p-2">
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
                <button class="bg-red-500 text-white font-semibold rounded p-2 hover:bg-blue-700"
                    @click="isEdit = false">Huỷ</button>
            </div>
        </form>
    </div>
    <div class="bg-white shadow-md rounded my-6 text-center">
        <table class="min-w-full table-auto">
            <thead>
                <tr>
                    <th class="bg-gray-200 text-gray-600 border border-gray-300 w-20">STT</th>
                    <th class="bg-gray-200 text-gray-600 border border-gray-300 text-left pl-2">Diễn viên</th>
                    <th class="bg-gray-200 text-gray-600 border border-gray-300 w-20">Thao tác</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) in result.value" :key="data?.name">
                    <td class="border border-gray-300">{{ index + 1 }}</td>
                    <td class="border border-gray-300 text-left pl-2">{{ data.name }}</td>
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