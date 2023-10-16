import axios, { AxiosResponse, AxiosError } from "axios";

interface RuntimeConfig {
    public: {
        baseURL: string;
    };
}

export async function useApiBridge({
    url,
    method = "get",
    data = null,
}: {
    url: string;
    method?: "get" | "post" | "put" | "delete";
    data?: any;
}): Promise<any> {
    const config: RuntimeConfig = useRuntimeConfig();

    try {
        const response: AxiosResponse = await axios({
            method,
            url: config.public.baseURL + url,
            data,
            headers: {
                "Content-Type": "application/json",
            },
            timeout: 100000,
        });

        return response.data;
    } catch (error) {
        const err: {
            code: number;
            message: string;
            data: any;
        } = {
            code: (error as AxiosError).response?.status || 500,
            message: (error as AxiosError).message,
            data: (error as AxiosError).response?.data,
        };
        throw err;
    }
}
