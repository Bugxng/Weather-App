import {getAreas} from "@home/services/area";

function run() {
	getAreas().then((areas) => {
		// TODO: 渲染出来
		console.log(areas);
	});
}

run();
