import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", {
    state: () => {
        return {
            categories: [],
        };
    },
    actions: {
        async getCategories() {
            const response = await useApiBridge({
                url: "categories",
                method: "get",
            });
            if (response.code === 200) {
                this.categories = response.data
            }
        },
    },
});
