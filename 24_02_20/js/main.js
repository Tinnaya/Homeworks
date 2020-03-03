function Figure(x, y, color) {
	this.x = x;
	this.y = y;
	this.color = color
}


function Line(x, y, x2, y2, color, lineWidth) {
	Figure.call(this, x, y, color);
	this.x2 = x2;
	this.y2 = y2;
	this.lineWidth = lineWidth;
	this.draw = (context) => {
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x2, y2);
		context.lineWidth = lineWidth;
		// set line color
		context.strokeStyle = color;
		context.stroke();
	};
}

function Circle(x, y, r, color, drawingCircleMethod = 'fill') {
	Figure.call(this, x, y, color);
	this.r = r;
	this.draw = (context) => {
		context.beginPath();
		context.arc(x, y, r , 0, 2*Math.PI);
		//drawingCirclMethod
		// fill-fillCircle
		// stroke-strokeRect
		switch (drawingCircleMethod) {
			case 'fill':
				context.fill();
				context.fillStyle = color;
				context.fill();
				break;
			case 'stroke':
				context.stroke();
				context.strokeStyle = color;
				context.stroke();
				break;
			default:
				break;
		};
	}
}
function Rect(x, y, w, h, color, drawingRectMethod = 'fill') {
	Figure.call(this, x, y, color);
	this.w = w;
	this.h = h;
	//drawingRectMethod
	// fill-fillRect
	// clear-clearRect
	// stroke-strokeRect
	this.draw = (context) => {
		context.fillStyle = color;

		switch (drawingRectMethod) {
			case 'fill':
				context.fillRect(x, y, w, h);
				break;
			case 'clear':
				context.clearRect(x, y, w, h);
				break;
			case 'stroke':
				context.strokeRect(x, y, w, h);
				break;
			default:
				break;
		};
	}
}



// let line = new Line(50, 50, 400, 400, 'navy');
// let circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
// let rect = new Rect(260, 130, 60, 120, 'blue', 'fill'); // x, y, w, h, color


// console.log(line);
// console.log(circle);
// console.log(rect);


function Canvas(elementInd, width = 1000, height = 1000) {
	this.width = width;
	this.height = height;

	this.add = (...arguments) => {
		let canv = document.getElementById(elementInd),
			context = canv.getContext('2d');

			canv.height = this.height;
			canv.width = this.width;

		arguments.forEach((item) => {
			item.draw(context);
		});
	};
}

//eyes and glasses
let circleBody = new Circle(500, 500, 250, '#900cc4', 'fill'),
 	circleGlassesRight = new Circle(431, 431, 75, '#000000', 'fill'),
	circleGlassesLeft = new Circle(568, 431, 75, '#000000', 'fill'),
	circleEyeRight = new Circle(431, 431, 60, '#ffffff', 'fill'),
	circleEyeLeft = new Circle(568, 431, 60, '#ffffff', 'fill'),
	circleEyeRightSmall = new Circle(463, 437, 25, '#000000', 'fill'),
	circleEyeLeftSmall = new Circle(538, 437, 25, '#000000', 'fill'),
	circleEyeRightLittle = new Circle(451, 428, 7, '#ffffff', 'fill'),
	circleEyeLeftLittle = new Circle(526, 428, 7, '#ffffff', 'fill');

// hair
let lineHair_a = new Line(270,500, 82, 332, '#540e82',10),
	lineHair_b = new Line(82,332, 252, 252, '#540e82',10),
	lineHair_c = new Line(252,252, 274, 111, '#540e82',10),
	lineHair_d = new Line(274,111, 414, 161, '#540e82',10),
	lineHair_e = new Line(414,161, 500, 50, '#540e82',10),
	lineHair_f = new Line(500,50, 587, 161, '#540e82',10),
	lineHair_g = new Line(587,161, 726, 111, '#540e82',10),
	lineHair_h = new Line(726,111, 747, 252, '#540e82',10),
	lineHair_i = new Line(747,252, 918, 332, '#540e82',10),
	lineHair_j = new Line(918,332, 730, 500, '#540e82',10);

//glasses
let lineGlasses_right = new Line(323,323, 380, 378, '#000000',30),
	lineGlasses_left = new Line(677,323, 615 , 378, '#000000',30),
	circleGlasses_Right = new Circle(327, 327, 15, '#000000', 'fill'),
	circleGlasses_Left = new Circle(672, 327, 15, '#000000', 'fill'),
	lineEyebrows_right = new Line(421,310, 452, 293, '#000000',10),
	lineEyebrows_left = new Line(579,310, 548, 293, '#000000',10);

// nose and mouth
let line_Nose_a = new Line(465,510, 545, 510, '#000000',10),
	line_Nose_b = new Line(470,510,500 ,540 , '#000000',10),
	line_Nose_c = new Line(540,510, 500, 540, '#000000',10),
	line_Nose_vert_a = new Line(495,530, 495, 560, '#000000',5),
	line_Nose_vert_b = new Line(505,530, 505, 560, '#000000',5),
	line_Mouth_a = new Line(455, 560, 545, 560, '#000000',10),
	line_Mouth_b = new Line(460, 560, 500, 580, '#000000',10),
	line_Mouth_c = new Line(540, 560, 500, 580, '#000000',10);
//legs
let circleLegs_right_top = new Circle(445, 764, 30, '#000000', 'fill'),
	rectLegs_right = new Rect(415, 760, 60, 60, '#000000', 'fill'),
	circleLegs_right_bottom = new Circle(445, 824, 30, '#000000', 'fill');
	circleLegs_left_top = new Circle(555, 764, 30, '#000000', 'fill'),
	rectLegs_left = new Rect(525, 760, 60, 60, '#000000', 'fill'),
	circleLegs_left_bottom = new Circle(555, 824, 30, '#000000', 'fill');
//hands
let circleHands_right = new Circle(270, 718, 30, '#000000', 'fill'),
	rectHands_right = new Rect(240, 600, 60, 120, '#000000', 'fill');
	
	circleHands_left = new Circle(730, 718, 30, '#000000', 'fill'),
	rectHands_left = new Rect(700, 600, 60, 120, '#000000', 'fill');
//ears
let circle_ear_right = new Circle(297, 353, 30, '#900cc4', 'fill'),
	circle_ear_left = new Circle(702, 353, 30, '#900cc4', 'fill');
	
let drawArea = new Canvas('myCanvas');
drawArea.add(lineHair_a, lineHair_j, circleGlasses_Right, circleGlasses_Left,
	circleLegs_right_top, rectLegs_right,circleLegs_right_bottom,
	circleLegs_left_top, rectLegs_left,circleLegs_left_bottom,
	circleHands_right, rectHands_right, circleHands_left, rectHands_left,
	circle_ear_right, circle_ear_left,
	circleBody, lineGlasses_right, 
	circleGlassesRight, circleGlassesLeft, lineGlasses_left,
	circleEyeRight, circleEyeLeft,
	circleEyeRightSmall,circleEyeLeftSmall,
	circleEyeRightLittle,circleEyeLeftLittle,
	lineHair_b, lineHair_c, lineHair_d, lineHair_e,
	lineHair_f, lineHair_g, lineHair_h, lineHair_i,
	lineEyebrows_right, lineEyebrows_left, line_Nose_a, line_Nose_b,line_Nose_c, 
	line_Nose_vert_a, line_Nose_vert_b, line_Mouth_a, line_Mouth_b, line_Mouth_c);
// drawArea.add(lineHair_a);
console.log(circle);


