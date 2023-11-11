import { defineStore } from "pinia";

export const useActorsStore = defineStore("actors", {
    state: () => {
        return {
            actors: [],
        };
    },
    actions: {
        async getActors() {
            const response = await useApiBridge({
                url: "actors",
                method: "get",
            });
            if (response.code === 200) {
                this.actors = response.data
            }
        },
    },
});
