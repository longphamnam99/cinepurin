import { defineStore } from "pinia";

export const useDirectorsStore = defineStore("directors", {
    state: () => {
        return {
            directors: [],
        };
    },
    actions: {
        async getDirectors() {
            const response = await useApiBridge({
                url: "directors",
                method: "get",
            });
            if (response.code === 200) {
                this.directors = response.data
            }
        },
    },
});
