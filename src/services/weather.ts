import {Axios, AxiosResponse} from "axios";
import {httpInstance} from "./http-instance";

/**
 * TODO: 补充类型定义，类型定义可以查看
 * https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2#/current
 */
export interface CurrentWeatherResponse {}

/**
 * 获取经纬度对应位置的当前天气
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @returns {Promise<CurrentWeatherResponse>} 当前天气
 */
export async function getCurrentWeather(
	lng: number,
	lat: number
): Promise<CurrentWeatherResponse> {
	return httpInstance
		.post<AxiosResponse<CurrentWeatherResponse>>(`weather/current`, {
			lng,
			lat,
		})
		.then((res) => {
			return res.data.data;
		});
}

/*
 * TODO: 补充类型定义，类型定义可以查看
 * https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2#/forecast
 */
export interface ForecastWeatherResponse {}

/**
 *
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @param {number} [days=14] 天数
 * @returns
 */
export async function getWeatherForecast(
	lng: number,
	lat: number,
	days = 14
): Promise<ForecastWeatherResponse> {
	return httpInstance
		.post<AxiosResponse<ForecastWeatherResponse>>(`weather/forecast`, {
			lng,
			lat,
			days,
		})
		.then((res) => {
			return res.data.data;
		});
}
