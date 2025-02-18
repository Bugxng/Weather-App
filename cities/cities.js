import {getAreas} from "@home/services/area";
import Handlebars from "handlebars";

const app = document.querySelector("#app");

function run() {
	getAreas().then((areas) => {
		render(areas);
	});
}

run();

function render(areas) {
	const source = document.getElementById("city-item-template")?.innerHTML;
	if (!source) {
		console.error(new Error("city-item-template模板不存在"));
	}
	const template = Handlebars.compile(source, {});
	const citiesDomString = template({
		areas: [
			{
				name: "北京",
			},
		],
	});

	console.log(citiesDomString);

	if (app) {
		app.innerHTML = citiesDomString;
	} else {
		console.error(new Error("app元素不存在"));
	}
}
