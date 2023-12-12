<script setup lang="ts">
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import {ref, watch} from 'vue'

interface Option {
  value: string | number
  label: string
}

interface IProps {
  options: Array<Option>
  modelValue: string
  placeholder?: string
}

const emits = defineEmits(["update:modelValue"]);

const props = withDefaults(defineProps<IProps>(), {
  modelValue: ''
})

const selectedValue = ref(props.modelValue)

watch(selectedValue, async (newQuestion) => {
  emits('update:modelValue', newQuestion)
})
</script>

<template>
  <v-select ref="select-search" class="bg-[rgba(0,0,0,0.7)] text-white hover:bg-[#e00d7a]" :placeholder="placeholder"
            v-model="selectedValue" :options="options" label="label" :reduce="search => search.value"/>
</template>

<style lang="scss">
.vs__dropdown-toggle {
  border: none;
  border: 0;

  input[type=search] {
    background-color: transparent;
    border: 0;
  }

  .vs__selected {
    color: #fff;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    height: 20px;
  }

  .vs__actions {
    .vs__clear {
      svg {
        stroke: #fff;
        fill: #fff;
      }
    }

    .vs__open-indicator {
      stroke: #fff;
      fill: #fff;
    }
  }

  .vs__selected-options {
    flex-wrap: inherit;
  }

  .vs__dropdown-menu {
    transition: opacity 0.5s ease;
  }
}

.vs__dropdown-menu {
  color: #707070;

  li {
    border-bottom: 1px solid #e00d7a;
    padding: 10px;

    &:hover {
      background-color: #e00d7a;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>