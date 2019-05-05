jQuery(function(){

	jQuery(".main_container").draggable({ scroll: true, handle: "ellipse" });

	var cvTable = jQuery("#table"), ellipses = jQuery(".ellipse_group"), bigEllipse = jQuery("#svg_1"), smallEllipse = jQuery("#svg_9"), firstRect = jQuery("#svg_7"), secondRect = jQuery("#svg_8"), thirdRect = jQuery("#svg_3"), sum = 0;

	function changePosition(json) {
		cvTable.css({ transform: `rotate3d(${ json.coords1}) scale(${ json.scale})` });
		ellipses.animate({ svgTransform: `rotate(${ json.coords2})`, svgCx: `${ json.elX}` }, { duration: 500, queue: false });
		bigEllipse.animate({ svgCy: `${ json.elY1}` }, { duration: 500, queue: false });
		smallEllipse.animate({ svgCy: `${ json.elY2}` }, { duration: 500, queue: false });
		firstRect.animate({ svgTransform: `rotate(${ json.rect1rotate})`, svgX: `${ json.rect1X}`, svgY: `${ json.rect1Y}`, svgHeight: `${ json.rect1height}` }, { duration: 500, queue: false });
		secondRect.animate({ svgTransform: `rotate(${ json.rect2rotate})`, svgX: `${ json.rect2X}`, svgY: `${ json.rect2Y}`, svgHeight: `${ json.rect2height}` }, { duration: 500, queue: false });
		thirdRect.animate({ svgTransform: `rotate(${ json.rect3rotate})`, svgX: `${ json.rect3X}`, svgY: `${ json.rect3Y}`, svgHeight: `${ json.rect3height}` }, { duration: 500, queue: false });
	}
	ellipses.on("dblclick", function () {
		++sum;

		sum % 2 ? changePosition(json2) : changePosition(json1);
	});
});