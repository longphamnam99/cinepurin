import axios, { AxiosResponse, AxiosError } from "axios";
import Cookies from "js-cookie";

interface RuntimeConfig {
    public: {
        baseURL: string;
    };
}

interface Header {
    Authorization: string;
}

export async function useApiBridge({
    url,
    method = "get",
    data = null,
    useToken = false,
    headers = {
        Authorization: "",
    },
}: {
    url: string;
    method?: "get" | "post" | "put" | "delete";
    data?: any;
    useToken?: boolean;
    headers?: Header;
}): Promise<any> {
    const config: RuntimeConfig = useRuntimeConfig();
    const objSend = {
        method,
        url: config.public.baseURL + url,
        headers: {
            "Content-Type": "application/json",
        },
        timeout: 100000,
    };

    if (data !== null && data !== undefined) {
        objSend.data = data;
    }

    if (useToken) {
        const token = Cookies.get("token") || "";
        axios.defaults.headers.common = { Authorization: "Bearer " + token };
    }

    try {
        const response: AxiosResponse = await axios(objSend);

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
