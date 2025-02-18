import {AxiosResponse} from "axios";
import {httpInstance} from "./http-instance";

/**
 * 城市信息
 */
interface AreaInfo {
	/**
	 * 城市名字
	 * @example 北京
	 */
	name: string;
	/**
	 * 城市简称
	 * @example 北京
	 */
	short_name: string;
	/**
	 * 城市拼音
	 * @example Beijing
	 */
	pinyin: string;

	/**
	 * 经度
	 */
	lng: number;

	/**
	 * 纬度
	 */
	lat: number;

	/**
	 * 区域编码
	 * @example 110100000000
	 */
	area_code: string;
	/**
	 * 父级区域编码
	 * @example 110000000000
	 */
	parent_code: string;
}

/**
 * 获取全国的城市数据
 * @returns 城市数据
 */
export async function getAreas(): Promise<AreaInfo[]> {
	return httpInstance
		.get<AxiosResponse<AreaInfo[]>>("areas/list")
		.then((res) => {
			return res.data.data;
		});
}
