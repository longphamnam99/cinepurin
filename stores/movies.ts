import {defineStore} from "pinia";
import axios, {AxiosError, AxiosResponse} from "axios";

export const useMoviesStore = defineStore("movies", {
    state: () => {
        return {
            movies: [],
        };
    },
    actions: {
        async getMovies() {
            const config: RuntimeConfig = useRuntimeConfig();
            const objSend = {
                method: 'GET',
                url: config.public.baseURL + 'QuanLyPhim/LayDanhSachPhim',
                headers: {
                    "Content-Type": "application/json",
                },
                timeout: 100000,
            };

            try {
                const response: AxiosResponse = await axios(objSend);
                this.movies = response.data;
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        },
    },
});
