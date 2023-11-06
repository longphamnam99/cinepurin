<template>
    <!-- Add your template code here -->
  </template>
  
  <script setup lang="ts">
  import manager_news from "./news.vue";
  
  const news = ref({});
  const list = ref([
    {
      id: 1,
      title: "cô dâu 8 tuổi",
      content: "abc xyz alo alo ở đây có nè",
      publish_date: '01.02.2023',
      policy_id: '1'
    },
    {
      id: 2,
      title: "cô dâu 9 tuổi",
      content: "abc xyz alo alo ở đây có nè",
      publish_date: '01.02.2023',
      policy_id: '1'
    },
    {
      id: 3,
      title: "cô dâu 10 tuổi",
      content: "abc xyz alo alo ở đây có nè",
      publish_date: '01.02.2023',
      policy_id: '1'
    },
  ]);
  
  const clickSave = (itemSave: any) => {
    const index = list.value.findIndex((c) => c.id === itemSave.id);
    if (index >= 0) {
      list.value.splice(index, 1, itemSave);
    } else {
      let max = 0;
      let newID = 0;
      for (let i = 0; i < list.value.length; i++) {
        if (list.value[i].id > max) {
          max = list.value[i].id;
        }
      }
      // Do something with the new ID if needed
    }
  };
  
  const clickDelete = (itemDelete: any) => {
    for (let i = 0; i < list.value.length; i++) {
      if (itemDelete.id === list.value[i].id) {
        list.value.splice(i, 1);
        break;
      }
    }
  };
  
  const clickEdit = (itemEdit: any) => {
    console.log(itemEdit);
    news.value = itemEdit;
  };
  </script>
  