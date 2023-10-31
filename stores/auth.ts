import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            auth: ""
        }
    }, 
    actions: {
        setAuth(auth: string) {
            this.auth = auth;
        }
    }
})