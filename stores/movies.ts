import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
    state: () => {
        return {
            movies: [],
        };
    },
    actions: {
        async getMovies() {
            const response = await useApiBridge({
                url: "products",
                method: "get",
            });
            if (response.code === 200) {
                this.movies = response.data
            }
        },
    },
});
