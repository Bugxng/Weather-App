const root = document.querySelector("#app");

function openDetail() {
	window.location.href = "detail/index.html";
}

function run() {
	addEventListeners("#view-detail-id", "click", () => {
		window.location.href = "detail/index.html";
	});

	addEventListeners("#cities-id", "click", () => {
		window.location.href = "cities/index.html";
	});

	addEventListeners("#history-id", "click", () => {
		window.location.href = "history/index.html";
	});
}

function addEventListeners(selector, event, callback) {
	const elements = document.querySelectorAll(selector);
	elements.forEach((element) => {
		element.addEventListener(event, callback);
	});
}

// 执行
run();
