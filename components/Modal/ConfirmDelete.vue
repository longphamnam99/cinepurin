
<script setup lang="ts">
import { Button, Modal } from 'flowbite-vue'

interface IProps {
    modelValue: boolean
}

const props = withDefaults(defineProps<IProps>(), {
    modelValue: false
})

const emits = defineEmits(["update:modelValue", "accept"]);

const closeModal = (): void => {
    emits('update:modelValue', false);
}

const acceptModal = (): void => {
    emits("accept", true);
    emits('update:modelValue', false);
}
</script>

<template>
    <Modal v-if="modelValue" @close="closeModal">
        <template #header>
            <div class="flex items-center text-lg">
                Bạn có chắc xoá không?
            </div>
        </template>
        <template #body>
            <div>
                Dữ liệu sẽ bị xoá và không thể khôi phục lại bạn có chắc điều đó không?
            </div>
        </template>
        <template #footer>
            <div class="flex justify-between">
                <Button @click="acceptModal" color="green">
                    Chấp nhận
                </Button>
                <Button @click="closeModal" color="red">
                    Từ chối
                </Button>
            </div>
        </template>
    </Modal>
</template>