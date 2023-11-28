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
                url: "QuanLyPhim/LayDanhSachPhim",
                method: "get",
            });
            this.movies = response
        },
    },
});
