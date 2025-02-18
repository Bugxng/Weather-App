import axios, {AxiosResponse} from "axios";

const BaseUrl = "https://front-learning-backend-playground.vercel.app/api/v1";

export const httpInstance = axios.create({
	baseURL: BaseUrl,
	timeout: 10000,
});
