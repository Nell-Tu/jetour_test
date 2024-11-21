(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[0,0,738,418],[0,420,300,600]]},
		{name:"index_atlas_NP_1", frames: [[0,0,420,600]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.cars2 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fon = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.road = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.s9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.51)").s().p("AhoGUQgegJgcgQICPlcQAIAEAKAAQAGAAAHgCIByFiQgdAKgbAHQgwALgrAAQgrAAgogLgAmiACIF4gOQAAAJAEAHQADAIAFAFIkSD8Qh9iCALiJgAAkAYQAGgHACgKQACgHAAgGIF0gTQANCzhgBigAlqjgQBaicCGgcIB5FmQgJADgGAHQgFAFgDAFgAAXgwQgGgEgHgCIBgloQCwAqA/B6Ik0DXQgFgIgJgFg");
	this.shape.setTransform(41.96,41.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s9, new cjs.Rectangle(0,0,83.9,83), null);


(lib.rec = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmFAiIAAgKIgnAAIAAAKIgHAAIAAgQQADAAACgCIADgEIACgGIADgmIAkAAIAAAyIAEAAIAAAQgAmiAIIgCAGIgCAEIAdAAIAAgrIgWAAgAQZAXQgFgDgCgEQgDgFAAgFIAAgUQAAgFADgFQACgEAFgDQAFgCAFAAQAFAAAFACQADACAEAFQACAFAAAFIAAAUQAAAFgCAFIgHAHQgFADgFAAQgFAAgFgDgAQdgZQgDACgCADQgBACAAAEIAAAVIABAGQACADADABQACACAEAAQAEAAACgCQADgBABgDIACgGIAAgVQAAgEgCgCQgBgDgDgCQgCgBgEAAQgEAAgCABgAOSAXQgFgDgCgEQgDgEAAgHIAAgSQAAgGADgEQACgEAFgEQAFgCAFAAQAFAAAEACQAEABADAEIgFAFQgCgDgDgBIgGgBQgDAAgDABIgFAFQgCADAAAEIAAAHIAFgDQAEgDAFAAQAEAAAFADQAFADACAEQACADAAAFQAAAFgCAFIgHAHQgFADgFAAQgFAAgFgDgAOVgDIgEADQgCADAAADQAAAEACADIAEAEQADACAEAAQADAAADgCIAFgEQABgDAAgEIgBgGIgFgDIgGgCIgHACgANjAYIgGgEIgEgHIAHgCQAAADAEADQACACAFAAQAEAAACgCQADgBABgDQABgCAAgEQAAgGgDgCQgDgDgFAAIgDAAIgDABIgEgFIATgRIgZAAIAAgHIAiAAIAAAHIgQAPIAIACQAEACACAEQADADAAAGQAAAFgDAFQgCAEgEACQgFADgFAAIgIgCgAMyAXQgFgEgBgDQgDgDAAgHIAAgUQAAgGADgEQACgEAEgDQAFgCAFAAQAGAAAEACQAFADACAEQADAEAAAGIAAAUQAAAHgDADQgBAEgGADQgEADgGAAQgFAAgFgDgAM2gZIgEAFQgCACAAAEIAAAVIACAGIAEAEIAGACQAEAAADgCIAEgEIACgGIAAgVQAAgEgCgCIgEgFQgDgBgEAAIgGABgAMBAXQgEgDgDgEQgDgFAAgGIAAgSQAAgFADgFQADgFAEgDQAFgCAGAAQAFAAADACQAFABACAEIgFAFIgEgEIgGgBQgEAAgDABIgFAFQgBADAAAEIAAAHIAEgDQAFgDAEAAQAFAAAEADQAGADABAEQADAEAAAEQAAAGgDAEQgCAEgFADQgFADgFAAQgFAAgFgDgAMFgDQgDABgCACIgBAGQAAAEABADQACADADABIAGACQADAAADgCQADgBACgDQABgDAAgEIgBgGQgCgCgDgBIgGgCIgGACgAJ4AYQgFgDgBgDIAFgFIAEAEIAGACQAEAAADgCIAFgFQABgDAAgDIAAgHIgEADQgFACgEAAQgFAAgEgCQgFgDgCgDQgDgFAAgFQAAgFADgFQACgDAFgEQAFgCAFAAQAFAAAFACQAEADADAFQADAFAAAFIAAASQAAAGgDAFQgDAEgEADQgFADgGAAQgFAAgEgCgAJ8gZQgDACgCADQgBADAAADIABAGQACADADACIAGABQADAAADgBQADgCACgDIABgGQAAgDgBgDQgCgDgDgCIgGgBQgDAAgDABgAE1AWQgGgEgDgHQgDgGAAgIQAAgJADgHQADgGAGgFQAGgDAJAAQALAAAFAFQAHAFACAIIgHACQgCgGgEgEQgEgDgIAAQgHAAgEACQgEADgCAGQgCAEAAAIQAAAGACAFQACAGAEACQAFADAGAAQAIAAAEgEQAEgDACgHIAHACQgCAIgHAGQgFAFgLAAQgIAAgHgEgABZAWQgGgEgDgHQgDgGAAgIQAAgJADgHQADgGAGgFQAGgDAJAAQAJAAAGADQAGAFADAGQADAHAAAJQAAAIgDAGQgDAHgGAEQgHAEgIAAQgIAAgHgEgABdgYQgEADgCAGQgCAEAAAIQAAAGACAFQACAFAEADQAFADAGAAQAGAAAFgDQAEgCACgGQACgFAAgGQAAgIgCgEQgCgGgEgDQgFgCgGAAIgCAAQgEAAgFACgAgPAWQgGgEgDgHQgDgGAAgIQAAgJADgHQADgGAGgFQAGgDAJAAQAIAAAGADQAGAFADAGQADAHAAAJQAAAIgDAGQgDAHgGAEQgHAEgHAAQgIAAgHgEgAgLgYQgEADgCAGQgCAEAAAIQAAAGACAFQACAFAEADQAFADAGAAQAFAAAFgDQAEgCACgGQACgFAAgGQAAgIgCgEQgCgGgEgDQgFgCgFAAIgCAAQgEAAgFACgAoeAWQgFgEgEgHQgDgGAAgIQAAgJADgHQADgGAGgFQAGgDAJAAQAJAAAFADQAGAFADAGQAEAHAAAJQAAAIgEAGQgDAHgGAEQgGAEgIAAQgIAAgHgEgAoagYQgEADgCAGQgDAGAAAGQAAAEACAHQACAEAFAEQAEADAHAAQAGAAAEgDQAEgCADgGQACgGAAgFQAAgGgCgGQgDgGgEgDQgEgCgGAAIgCAAQgFAAgEACgApZAWQgGgEgDgHQgDgGAAgIQAAgJADgHQADgGAGgFQAGgDAJAAQAJAAAGADQAGAFADAGQADAHAAAJQAAAIgDAGQgDAHgGAEQgHAEgIAAQgIAAgHgEgApVgYQgEAEgCAFQgCAHAAAFQAAAGACAFQACAFAEADQAFADAGAAQAGAAAFgDQAEgCACgGQACgFAAgGQAAgIgCgEQgCgGgEgDQgFgCgGAAIgBAAQgFAAgFACgAqTAWQgGgEgDgHQgDgGAAgIQAAgJADgHQADgGAGgFQAFgDAJAAQAKAAAFADQAGAFADAGQADAHAAAJQAAAIgDAGQgDAHgGAEQgGAEgJAAQgIAAgGgEgAqPgYQgEADgDAGQgCAEAAAIQAAAGACAFQACAFAFADQAEADAGAAQAGAAAFgDQAEgCADgGQACgFAAgGQAAgIgCgEQgDgGgEgDQgFgCgGAAIgBAAQgFAAgEACgAupAYIAAgGIADAAIADgCIABgDIABgHIACgJIACgdIAlAAIAAA4IgHAAIAAgxIgXAAIgFApIgDAGIgEADIgDAAIgEgBgAP4AYIAAgKIgaAAIAAgHIATgnIAIAAIgTAnIASAAIAAgPIAIAAIAAAPIAGAAIAAAHIgGAAIAAAKgAO9AYIAVgxIgbAAIAAgHIAiAAIAAAHIgUAxgALHAYIABgGIAZgWQAEgDAAgCIABgGIgBgGIgEgEQgCgBgEAAIgGABIgEAEIgCAGIgHAAQAAgFACgEQACgEAFgDQAFgCAFAAQAFAAAFACQAEADACAEQADAFAAAEIgBAHQgBACgCADIgYAVIAcAAIAAAGgAKjAYIAVgxIgaAAIAAgHIAhAAIAAAHIgUAxgAJNAYIAAgYIgfAAIAAAYIgHAAIAAg4IAHAAIAAAZIAfAAIAAgZIAHAAIAAA4gAIVAYIAAgYIgeAAIAAAYIgHAAIAAg4IAHAAIAAAZIAeAAIAAgZIAHAAIAAA4gAHdAYIAAgsIgeAsIgHAAIAAg4IAHAAIAAAsIAegsIAHAAIAAA4gAGUAYIAAgHIAIAAIAAAHgAEGAYIAHgOIgUgqIAIAAIAQAjIAQgjIAIAAIgbA4gADMAYIAAg4IAZAAIACAAIAIADQADADACAEQABAEAAAEQAAAFgBADQgCAFgDABQgDACgFABIgCAAIgSAAIAAAVgADTgDIATAAQADAAACgCIACgEIABgFIgBgFIgCgEQgBAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAIgCAAIgRAAgACLAYIAAg4IAZAAIACAAQAFABADACIAFAHQABAEAAAEQAAAFgCADQgCAFgCABQgDACgFABIgCAAIgSAAIAAAVgACSgDIATAAQACAAACgCIADgEIABgFIgBgFIgDgEQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAIgCAAIgRAAgAAvAYIAAgxIgTAAIAAgHIAuAAIAAAHIgUAAIAAAxgAgqAYIAAgoIgTAoIgEAAIgUgoIAAAoIgGAAIAAg4IAGAAIAWAtIAWgtIAGAAIAAA4gAidAYIAAg4IAZAAIACAAQAFABADACIAFAHQACAEAAAEQAAAFgCADQgCAFgDABQgDACgFABIgCAAIgRAAIAAAVgAiVgDIATAAIAEgCIADgEIAAgFIAAgFIgDgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgCAAIgRAAgAjGAYIAHgOIgUgqIAIAAIAQAjIAQgjIAIAAIgbA4gAjwAYIAAgxIgUAAIAAgHIAvAAIAAAHIgUAAIAAAxgAktAYIAAg4IAlAAIAAAHIgeAAIAAASIAZAAIAAAGIgZAAIAAATIAeAAIAAAGgAk8AYIgXgaIAAAaIgHAAIAAgaIgXAaIgJAAIAZgcIgXgcIAJAAIAVAbIAAgbIAHAAIAAAbIAVgbIAJAAIgXAcIAZAcgArAAYIAAgHIAHAAIAAAHgArQAYIgFgNIgYAAIgFANIgHAAIATg4IAKAAIATA4gArrAEIAUAAIgKgdgAsHAYIAAgoIgUAoIgEAAIgTgoIAAAoIgHAAIAAg4IAGAAIAWAtIAWgtIAGAAIAAA4gAtIAYIgEgNIgZAAIgEANIgIAAIAUg4IAKAAIATA4gAtiAEIAUAAIgKgcgAu0AYIgbgbIAAAbIgHAAIAAg4IAHAAIAAAbIAZgbIAJAAIgaAcIAcAcgAwEAYIAAg4IAkAAIAAAHIgdAAIAAASIAYAAIAAAGIgYAAIAAATIAdAAIAAAGgAw1AYIAAg4IAYAAIADAAIAHADQAEADABAEQACAEAAAEQAAAFgCADQgCAFgDABQgDACgEABIgDAAIgRAAIAAAVgAwugDIATAAQACAAACgCIADgEIABgFIgBgFIgDgEQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAIgCAAIgRAAgAF0AKIAMgNIgMgPIAEgDIAOASIgOAQgAFmAKIALgNIgLgPIAEgDIAOASIgOAQgAnNgDIAOgSIAEADIgLAPIALANIgEADgAncgDIAOgSIAEADIgLAPIALANIgEADg");
	this.shape.setTransform(107.825,3.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rec, new cjs.Rectangle(0,0,215.7,6.9), null);


(lib.poloski2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjljAIBmgCIFlGAIiSAFg");
	this.shape.setTransform(77.125,86.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjWizIBigCIFMFmIiMAFg");
	this.shape_1.setTransform(73,81.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjIilIBegCIEzFLIiEAEg");
	this.shape_2.setTransform(68.825,76.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai6iYIBbgCIEaExIh9AEg");
	this.shape_3.setTransform(64.7,72.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AisiLIBXgBIECEWIh3ADg");
	this.shape_4.setTransform(60.55,67.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Aidh9IBSgCIDqD8IhwADg");
	this.shape_5.setTransform(56.4,62.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiQhwIBQgBIDQDhIhpACg");
	this.shape_6.setTransform(52.25,58.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiBhjIBLgBIC4DHIhiACg");
	this.shape_7.setTransform(48.125,53.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhzhWIBIgBICfCtIhbACg");
	this.shape_8.setTransform(43.95,48.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhlhIIBEgBICHCSIhVABg");
	this.shape_9.setTransform(39.825,43.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer_3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag8glIAzgBIBGBMIg8ABg");
	this.shape_10.setTransform(23.775,25.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag6gjIAygBIBDBJIg7AAg");
	this.shape_11.setTransform(22.775,24.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag4giIAxAAIBABFIg5AAg");
	this.shape_12.setTransform(21.775,23.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1ggIAvgBIA8BCIg2ABg");
	this.shape_13.setTransform(20.75,22.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0gfIAvAAIA6A+Ig1ABg");
	this.shape_14.setTransform(19.75,21.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgBAeIgwg7IAsAAIA3A7g");
	this.shape_15.setTransform(18.775,19.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCAdIgtg5IArAAIA0A5g");
	this.shape_16.setTransform(17.775,18.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCAbIgrg1IAqAAIAxA1g");
	this.shape_17.setTransform(16.75,17.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDAZIgogxIApAAIAuAxg");
	this.shape_18.setTransform(15.75,16.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAYIgmgvIAoAAIArAvg");
	this.shape_19.setTransform(14.75,15.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	// Layer_6
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFAQIgagfIAiAAIAdAfg");
	this.shape_20.setTransform(8.975,8.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAPIgZgdIAhAAIAcAdg");
	this.shape_21.setTransform(8.55,8.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFAPIgYgdIAgAAIAbAdg");
	this.shape_22.setTransform(8.075,7.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdgOIAgAAIAbAcIgjABg");
	this.shape_23.setTransform(7.65,7.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgcgNIAfAAIAaAaIgiABg");
	this.shape_24.setTransform(7.175,6.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFANIgWgZIAfAAIAYAZg");
	this.shape_25.setTransform(6.75,6.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFANIgVgZIAeAAIAXAZg");
	this.shape_26.setTransform(6.275,5.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgZgLIAdAAIAWAXIgfABg");
	this.shape_27.setTransform(5.85,5.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgZgLIAdAAIAWAWIgfABg");
	this.shape_28.setTransform(5.375,4.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYgKIAcAAIAVAVIgeAAg");
	this.shape_29.setTransform(4.95,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

	// Layer_7
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(102,102,102,0.302)").s().p("AgGAIIgOgPIAZAAIAQAPg");
	this.shape_30.setTransform(2.05,0.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,105.8);


(lib.poloski = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjljAIBmgCIFlGAIiSAFg");
	this.shape.setTransform(77.125,86.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjQisIBhgCIE/FZIiHAEg");
	this.shape_1.setTransform(70.9,79.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai6iYIBbgCIEaExIh9AEg");
	this.shape_2.setTransform(64.7,72.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiliEIBVgBID2EIIhzAEg");
	this.shape_3.setTransform(58.475,65.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiQhwIBQgBIDQDhIhpACg");
	this.shape_4.setTransform(52.25,58.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah6hcIBJgBICsC5IhfACg");
	this.shape_5.setTransform(46.05,51);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhlhIIBEgBICHCSIhVABg");
	this.shape_6.setTransform(39.825,43.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// Layer_4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhlhIIBEgBICHCSIhVABg");
	this.shape_7.setTransform(39.825,43.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhehCIBBgBIB8CGIhQABg");
	this.shape_8.setTransform(37.15,40.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhXg9IA+AAIBxB7IhMAAg");
	this.shape_9.setTransform(34.475,37.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhQg3IA7AAIBmBuIhIABg");
	this.shape_10.setTransform(31.825,34.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhJgwIA4gBIBbBjIhEABg");
	this.shape_11.setTransform(29.125,31.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhCgrIA1gBIBRBYIhAAAg");
	this.shape_12.setTransform(26.45,28.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8glIAzgBIBGBMIg8ABg");
	this.shape_13.setTransform(23.775,25.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// Layer_3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag8glIAzgBIBGBMIg8ABg");
	this.shape_14.setTransform(23.775,25.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag5gjIAxAAIBCBHIg6AAg");
	this.shape_15.setTransform(22.275,23.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag1ggIAvgBIA8BCIg2ABg");
	this.shape_16.setTransform(20.75,22.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgygeIAtAAIA4A9Ig0AAg");
	this.shape_17.setTransform(19.275,20.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCAdIgtg5IArAAIA0A5g");
	this.shape_18.setTransform(17.775,18.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCAaIgqgzIAqAAIAvAzg");
	this.shape_19.setTransform(16.25,17.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgDAYIgmgvIAoAAIArAvg");
	this.shape_20.setTransform(14.75,15.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Layer_5
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDAYIgmgvIAoAAIArAvg");
	this.shape_21.setTransform(14.75,15.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAWIgkgrIAnAAIAoArg");
	this.shape_22.setTransform(13.775,14.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEAVIgigpIAmAAIAnApg");
	this.shape_23.setTransform(12.825,13.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAUIgggnIAlAAIAkAng");
	this.shape_24.setTransform(11.875,12.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEASIgegjIAkAAIAhAjg");
	this.shape_25.setTransform(10.9,10.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFARIgcghIAjAAIAgAhg");
	this.shape_26.setTransform(9.95,9.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFAQIgagfIAiAAIAdAfg");
	this.shape_27.setTransform(8.975,8.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).wait(1));

	// Layer_6
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFAQIgagfIAiAAIAdAfg");
	this.shape_28.setTransform(8.975,8.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgFAPIgZgdIAhAAIAbAdg");
	this.shape_29.setTransform(8.3,8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdgOIAgAAIAbAcIgjABg");
	this.shape_30.setTransform(7.65,7.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFANIgWgaIAeAAIAZAag");
	this.shape_31.setTransform(6.975,6.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgFANIgVgZIAeAAIAXAZg");
	this.shape_32.setTransform(6.275,5.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZgLIAdAAIAWAXIgfAAg");
	this.shape_33.setTransform(5.625,4.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYgKIAcAAIAVAVIgeAAg");
	this.shape_34.setTransform(4.95,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).wait(1));

	// Layer_8
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYgKIAcAAIAVAVIgeAAg");
	this.shape_35.setTransform(4.95,4.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXgKIAbAAIAUAUIgeABg");
	this.shape_36.setTransform(4.475,3.65);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgGAKIgRgTIAbAAIAUATg");
	this.shape_37.setTransform(4,3.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgGAKIgQgTIAaAAIATATg");
	this.shape_38.setTransform(3.525,2.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgVgJIAZAAIASASIgcAAg");
	this.shape_39.setTransform(3,1.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGAJIgOgRIAZAAIAQARg");
	this.shape_40.setTransform(2.525,1.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGAIIgOgPIAZAAIAQAPg");
	this.shape_41.setTransform(2.05,0.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35}]}).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).wait(1));

	// Layer_7
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(102,102,102,0.302)").s().p("AgGAIIgOgPIAZAAIAQAPg");
	this.shape_42.setTransform(2.05,0.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,105.8);


(lib.logo_car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIcBHQgGAAgEgEQgEgEAAgGIAAhvQAAgGAEgEQAEgEAGAAIDBAAIABABIAAAAIABAAIAAAaIgBABIioAAIgCACIAABOIABABIAAABIABAAICAAAIABAAIABgCIAAgVIgBgCIgCAAIhiAAIgBgBIAAgYIABgCIABAAICJAAIABAAIABACIAABBQAAAGgEAEQgEAEgGAAgAHFBHQgJAAgEgCQgGgCgLgKIhehXQgHgGgBAFIAABlIgCAAIgjAAIgBgBIAAiHIAAgBIABgBIAkAAQAIAAAEACQAGACALAKIBgBZQAGAFACgEIAAhmIAAgBIACgBIAjAAIAAABIABAAIAAAAIAACIIAAABIgBABgADFBHQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIAAiHQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAoAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAACHQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAgAgtBHIgBgBIAAAAIgBAAIAAiIIABgBIABgBIAjAAIABABIABAAIAAA2IAAABIABABICAAAIABgBIABgBIAAg2IAAAAIABgBIAkAAIAAABIABABIAACHIgBABIgBAAIgjAAIgBAAIgBgBIAAgyIgBgCIgBAAIh9AAIgCAAIgBACIAAAyIgBABIAAAAIAAAAIgBABgAkgBHIgCgBIAAgBIAAgXIAAgBIACgBICgAAIAAgBIABgBIAAgZIgBgBIgBgBIiUAAQgGAAgEgEIgCgEIgBgFIAAg4QAAgFADgFQAEgEAGAAIC5AAIAAABIABAAIABACIAAAXIgBABIgBABIifAAIgCAAIAAABIAAAZIAAABIACABICTAAQAGAAAEAFQAEAEAAAFIAAA3QgBAHgDADQgEAEgGAAgAlyBHIgCgBIAAgBIAAgtIgCgCIgBAAIh+AAIgCAAIgBACIAAAtIAAABIgCABIgiAAIgCgBIgBgBIAAh0QAAgIAGgHQAHgGAIAAICpAAIgBABQAIAAAGAGQAGAFAAAJIAAB0IAAABIgCABgAn3goIgBACIAAAeIABABIABABICBAAIABgBIABgBIAAgeIgBgCIgBAAIiBAAgAsQBHIgCgBIAAiJIACgBICmAAQASABALALQAMAMAAARIAAA5QAAARgMAMQgMAMgRAAgArqgnIgBACIAABPIABABIBtAAQAIAAAHgGQAGgGAAgJIgBgpQAAgIgGgGQgGgGgIAAIhsAAgAL2gaIAAgGIASgRIADgDIABgEQAAgDgCgCQgCgCgEAAIgEABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIgBADIgHAAQAAgEACgDQABgDAEgCIAHgCQAEAAAEACQADACACADQACADAAAEIgBAFIgDAEIgOAOIASAAIAAAHg");
	this.shape.setTransform(109.6745,149.642,1.2498,1.2498);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_car, new cjs.Rectangle(11.4,140.8,196.6,17.69999999999999), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFVB+IgHgCQgDgBgDgDIgEgFIgCgHIAAghIABAAIAOAAIAAAiIABADIADACIAEABIALAAIADgBIADgCIACgDIAAgiIAAAAIAOAAIAAAYIAAAJIgCAHIgDAFQgCADgEABIgIACgADcB+IgHgCIgHgEQgDgDAAgCIgCgHIAAghIAAAAIAMAAIAAAdIABAFIACADIADACIAEABIAKAAIAEgBIADgBIACgFIAAghIAOAAIAAAhIgBAHIgFAFQgCADgEABIgHACgAAGB+IgHgCQgDgBgDgDIgEgFIAAgHIAAgJIAAgYIALAAIAAABIAAAcIAAAFIACADIADACIADABIALAAIAEgBIADgCIABgDQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAIAAgdIABgBIAOAAIAAAYIAAAJIgBAHIgEAFQgCADgEABIgHACgAEmB9IgIgBIgFgEQgDgDgBgDQgBgDAAgDIAAgWIgJAAIgBgBIAAgKIABAAIAIAAIAAgNIABgBIANAAIAAABIAAANIAXAAIAAALIgXAAIAAAWQAAAAABABQAAABAAAAQAAABAAAAQABABAAAAIACACIACAAIAQAAIABABIAAAKgACJB9IgBgBIAAhGIA2AAQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABIAAALIgnAAIAAAQIAmAAIAAALIgmAAIAAAcIgBABgAg/B9IgIgBQgEgBgCgDIgEgFIgCgHIAAgIIAAgIQABgEABgDIAEgGQADgCADgBIAJgCIAUAAQAFAAADACIAHADQADADABADQACAEAAADIAAAQIgCAHQgBACgDADIgHAEQgDABgFAAgAhDBYIgBADIAAAEIAAAFIAAAFIAAAEIABADIADACIAYAAIACgCIACgDIAAgSIgCgDIgCgCIgYAAgAk8B9IgDgBIgEgCIgDgFIgSgpIAAgCIALAAIACABIACABIAOAiIABAAIAPgiIABgBIACgBIAOAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIgSApIgDAFQgCACgDAAIgCABgAluB9IgBgBIAAgxIABAAIAMAAIABAAIAAAxIgBABgAnyB9IgBgBIAAhFIABgBIAtAAQAFAAAEACIAIAFIAEAIIADAJIAAAXIgDAKQgBAEgDADQgEAEgEABQgEACgFAAgAnjBxIAcAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIADgDIADgEIABgEIAAgWIgBgFIgDgDQAAgBAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgEgCIgcAAgAHKB9QgEAAgDgCIgFgEQgFgFgBgIIAAgNQABgEABgDIAEgGIAFgEQADgCAEAAIAYABQADAAAEABQACABADADIAEAGIABAGIAAAJQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgoAAIAAACIACAEIABACIADAAIAkAAIAAAKIAAABgAHJBXQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIAAADIAcAAIACgBIAAgBIAAgBIAAgDIgBgCIgEgBIgTAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAAAAAgAGEB9IAAgiQAAgDABgEIAEgFQAIgFAJABIAUAAIABABIAAAJIgBABIgZAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgCACIAAADIAAAgIAAABgAA1B9IAAgiIABgHQACgDADgCQAHgFAKABIAUAAIABAAIAAAKIgBABIgaAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgCACIAAAjIgBABgAiKB9IgBgBIAAgaIgmgqIAAgBIAQAAIACAAIACABIAZAcIADAAIAZgcIACgBIABAAIAQgBIAAABIgnAqIAAAbIAAABgAj/B9QgEAAgDgCIgGgEIgDgGQgCgDABgEIAAgNQgBgEACgDIADgGIAGgDQADgCAEAAIAXAAQAFAAACABIAGAEIADAGQACADAAADIAAAJQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgBABIgCABIgoAAIAAACQAAABABAAQAAABAAAAQAAABAAABQABAAAAAAIACACIACAAIAkAAIAAAKIgBABgAj/BXIgCABQgBAAAAABQAAAAAAABQgBABAAAAQAAABAAAAIAAADIAfAAIAAgBIAAAAIAAgCQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgBgDIgFgBIgTAAgAmkB9IAAgiQAAgDABgEIAEgFQAIgFAJABIAVAAIABABIAAAJIgBABIgYAAIgEABIgBACIAAAjIgBABgAIUBkIAAgFIB6AAIAAAFgAqOBkIAAgFIB6AAIAAAFgAIBBiIAAgdIgHAEIAAgHIAHgEIAGAAIAAAkgAlvBCIAAgLIABAAIAMgBIABAAIAAAMgAhjAAIAAgBIgiAAIgBAAIAAhiIhMAAIgBgBIAAgYIABgBIC+AAIABABIAAAZIgBAAIhMAAIAABiIgBABgAHQgBIgBAAIAAh7IABgBICvAAIAGABIAEADIADAFIABAFIAAAuQAAAGgEAEQgEAEgGAAIg3AAIBHAwIgCAAIABAAIAAABIgBABIgzAAIhnhHIAABGIgBABgAH0hjIAAAWIBxAAIAAgXIhyAAgAD/gBQgGAAgEgEQgEgEAAgFIAAhuIAAAAIABgBIAkAAIABABIAABhIByAAIAAhiIAjAAIABABIAABuQAAAFgEAEQgEAEgGAAgAAbgBIgFgBQgDAAgCgDQgBgBgBgDIgBgFIAAhhQAAgGADgEQAFgEAFAAICoAAIAEABIAFADIADAFIABAFIAABhQAAAFgEAEQgEAEgFAAgAAzgbIB3AAIAAhIIh3AAgAmhgBQgGAAgEgEQgEgDAAgGIAAhhIABgFIADgFIAEgDIAGgBICsAAIABABIAAAAIAAAXIAAABIgBABIiWAAIAAAYICNAAIAAABIAAAXIAAABIAAAAIAAABIiNAAIAAAXICWAAIAAAAIABAAIAAABIAAAAIAAAXIAAABIgBAAgAqAgBQgGAAgEgEQgEgEAAgFIAAgiIABgBIAkAAIAAABIABABIAAAUIByAAIAAhhIAAgBIABAAIAjAAIABABIAABuQAAAFgEAEQgFAEgFAAg");
	this.shape.setTransform(65.5,12.6125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,131,25.2), null);


(lib.line2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGvBSQgOgIgIgOQgIgPAAgTIAAgzQAAgUAIgOQAIgOAOgIQAOgIAUAAQATAAAPAIQAOAIAIAOQAIAPAAATIAAAzQAAASgIAQQgIAOgOAIQgQAIgSAAQgTAAgPgIgAHBg2QgHAEgEAHQgEAHAAAIIAAA4QAAAJAEAHQAEAHAHAEQAHAEAJAAQAIAAAIgEQAGgEAFgHQAEgHAAgJIAAg4QAAgIgEgHQgFgIgGgDQgIgFgIAAQgJAAgHAFgAENBSQgOgIgIgOQgIgPAAgTIAAgzQAAgUAIgOQAIgOAOgIQAOgIAUAAQATAAAOAIQAPAIAIAOQAIAPAAATIAAAzQAAASgIAQQgIAOgPAIQgPAIgSAAQgTAAgPgIgAEfg2QgHAEgEAHQgEAGAAAJIAAA4QAAAKAEAGQAEAHAHAEQAHAEAJAAQAJAAAGgEQAHgEAFgHQAEgHAAgJIAAg4QAAgIgEgHQgFgIgHgDQgGgFgJAAQgJAAgHAFgAB1BWQgMgEgJgIIAXgYQAFAFAFACQAGADAGAAQAJAAAHgFQAHgEAEgHQADgHAAgIIAAgPQgEAEgHADQgLAEgKAAQgQAAgMgIQgNgHgHgMQgHgMAAgRQAAgRAIgMQAIgOAOgHQAPgIAPAAQARAAAOAIQAPAIAHAOQAIAOAAAUIAAAxQAAAVgIAOQgHAPgPAIQgQAIgSAAQgMAAgMgEgACDg2QgHAEgDAGQgEAFAAAIQAAAIAEAGQAEAGAGAEQAFADAIAAQAIAAAGgDQAGgDAEgHQADgGAAgIQAAgIgDgFQgEgHgGgDQgGgEgIAAQgIAAgFAEgAhbBWQgMgEgJgIIAXgYQAFAFAFACQAHADAFAAQAKAAAGgFQAHgEAEgHQAEgHAAgIIAAgPIgMAHQgKAEgKAAQgQAAgNgIQgMgHgIgMQgHgNAAgQQAAgQAJgNQAIgOAOgHQAOgIAQAAQAQAAAPAIQANAIAIAOQAIAOAAAUIAAAxQAAAVgIAOQgIAPgOAIQgPAIgTAAQgLAAgNgEgAhNg2QgHAEgDAGQgDAFAAAIQAAAIADAGQAEAGAGAEQAGADAIAAQAIAAAFgDQAGgEAEgGQAEgGAAgIQAAgIgEgFQgEgHgGgDQgFgEgIAAQgIAAgGAEgAjyBTQgOgHgHgNQgIgMAAgQQAAgPAGgLQAFgJAHgGQgFgGgEgGQgFgKAAgMQAAgOAIgMQAHgLAMgGQANgGAQAAQARAAAMAGQANAGAHALQAHAMAAAOQAAANgFAJQgDAGgFAGQAHAGAFAJQAGAMAAAOQAAAQgIAMQgIANgNAHQgPAHgRAAQgRAAgOgHgAjlAQQgHAGAAANQAAAMAHAGQAHAGALAAQAMAAAHgGQAHgHAAgLQAAgNgHgGQgHgGgMAAQgMAAgGAGgAjig2QgGAFAAAJQAAAKAGAFQAGAEAJAAQAKAAAGgEQAFgEAAgLQAAgKgFgEQgGgFgKAAQgKAAgFAFgAmHBWQgLgEgKgIIAYgYQAFAFAFACQAGADAFAAQAKAAAHgFQAGgEAEgHQAEgHAAgIIAAgPIgLAHQgLAEgKAAQgQAAgNgIQgMgHgHgMQgHgNAAgQQAAgQAIgNQAIgOAOgHQAPgIAPAAQAQAAAPAIQANAIAJAOQAIAPAAATIAAAxQAAATgIAQQgIAPgPAIQgPAIgTAAQgMAAgMgEgAl4g2QgHADgDAHQgEAFAAAIQAAAIAEAGQAEAGAFAEQAGADAIAAQAIAAAGgDQAGgEADgGQAEgHAAgHQAAgGgDgHQgEgGgGgEQgGgEgIAAQgIAAgFAEgAsFBTQgJgFgFgKQgFgJAAgNQAAgNAFgKQAFgJAJgGQAJgFAMAAQAMAAAJAFQAJAFAFAKQAFAKAAANQAAANgFAJQgFAKgJAFQgJAGgMAAQgMAAgJgGgAr9AVQgGAEgCAGQgCAHAAAIQAAANAGAHQAGAIALAAQAMAAAFgIQAGgIAAgMQAAgNgGgIQgGgHgLAAQgIAAgFADgAJ1BWIAAgZIgSAAIAAgUIASAAIAAgTIgSAAIAAgWIASAAIAAhWIBGAAIAIABQAOACAKAIQAKAIAFALQAFALAAAPQAAAVgLANQgMAOgVADIgIABIgtAAIAAATIA4AAIAAAUIg4AAIAAAZgAKOAAIAsAAIAGAAQALgDAFgIQAFgIAAgLQAAgGgCgHQgBgFgGgGQgFgFgHgCIgLgBIgnAAgAoiBWIAAiIIggAUIAAgkIAggUIAiAAIAACsgAqkBWIAAhDIgcAAIAAgOIBHAAIAAAOIgbAAIAABDgAMCgoQgEgCgBgFIAGgCQAAABABABQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAABAAQADAAACgCQACgDAAgDQAAgCgCgDQgCgDgDAAIgEABIgDgFIANgLIgTAAIAAgGIAaAAIAAAGIgKAKQABAAAAAAQABAAABABQAAAAABAAQAAAAABABQADABABADQACADAAAEQAAAFgCACQgCAEgDABQgDACgEAAQgFAAgEgDg");
	this.shape.setTransform(93.875,19.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhnBFIAAhuIANAAIAAAHIAEgDQAIgGALAAQAKAAAIAGQAIAFAEAJQAFAJAAAMQAAAKgFAJQgEAKgIAFQgIAFgKAAQgLAAgIgFIgCgCIAAAngAhRgaQgEADgDAHQgCAFAAAHIAAAEQAAAGACAFQACAGAFADQAEAEAIAAQAHAAAEgEQAFgDACgHQADgGAAgGQAAgHgDgHQgCgGgFgEQgEgDgIAAQgHAAgEADgAr5BFIAAhuIAOAAIAAAHIAEgDQAIgGAKAAQAKAAAJAGQAIAFAEAJQAEAJAAAMQAAAKgEAJQgFAKgHAFQgIAFgLAAQgKAAgIgFIgDgCIAAAngArjgaQgEADgCAHQgCAFAAAHIAAAEQAAAGACAFQACAGAEADQAEAEAIAAQAHAAAFgEQAEgDADgHQACgFAAgHQAAgJgCgFQgCgGgFgEQgEgDgIAAQgIAAgEADgAGYAiQgGgEgCgEQgDgFAAgHQAAgEACgGIAGgGIAKgGIAigFQgBgIgDgEQgEgEgJAAQgGAAgGADQgFADgCAGIgNgEQACgJAIgHQAJgGANAAQAKAAAIAEQAHADAEAIIACAIIAAA3IgNAAIAAgLQgDAFgGAEQgIAEgKAAQgJAAgGgDgAGuABIgIACIgFACIgEAEIgBAFIABAGIAFAEQADABAEAAQAGAAAFgCQAFgDACgDQAEgEAAgDIABgLgACaAiQgGgEgDgEQgCgFAAgHQAAgGACgEQABgEAFgCQADgDAHgDIAhgFQAAgHgDgFQgEgEgKAAQgGAAgFADQgFADgCAGIgOgEQADgKAIgGQAIgGANAAQALAAAHAEQAJAEACAHIADAIIAAA3IgNAAIAAgLQgEAGgGADQgGAEgMAAQgIAAgGgDgACoADIgGACIgDAEQgCACAAADIACAGIAEAEQADABAFAAQAGAAAFgCQAEgCADgEQADgDABgEQABgDAAgFIAAgDgAgEAgQgHgEgGgKQgEgJAAgLQAAgNAFgIQAEgJAJgGQAIgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAALgFAJQgEAJgJAFQgJAFgLAAQgKAAgJgFgAADgZQgDACgDAHQgCAFAAAJQAAAMAFAGQAFAHAKAAQAMAAAFgHQAFgIAAgKQAAgMgFgHQgFgIgMAAQgIAAgEAEgAj9AgQgJgEgFgJIAMgHQADAFAGADQAGADAGAAQAIAAAEgDQAEgDAAgGQAAgEgDgCQgBgCgFgBIgJgBIgHAAIAAgKIAHAAQAFAAAGgCQAEgCAAgGQAAgFgDgCQgDgDgHAAQgFAAgGADQgGACgEAEIgJgKQAHgGAHgDQAIgEAJAAQAHAAAHADQAGADAEAFQAEAFAAAHQAAAFgDAFIgEAGIADACQAEADAAADIACAJQAAAIgEAFQgEAFgHADQgHADgIAAQgMAAgIgFgAnqAgQgIgEgFgKQgFgKAAgKQAAgLAFgKQAEgJAJgGQAJgFAKAAQALAAAJAFQAIAFAFAKQAFAIAAANQAAAKgFAKQgEAJgJAFQgJAFgLAAQgLAAgIgFgAnjgZQgEADgDAGQgCAGAAAIQAAALAFAHQAGAHAKAAQAMAAAFgHQAFgIAAgKQAAgMgFgHQgFgIgMAAQgIAAgEAEgAo/AgQgIgEgEgJQgFgKAAgKIAAgOQAAgHACgHQAAgHADgEQACgGADgEQAFgFADgCQAFgDAFgCIAMgDIAYgDIACANIgfAFQgGABgDACQgFAEgDAGQgDAGgBAHQAFgGAHgDQAHgDAHAAQAJAAAIAFQAHAEAFAJQAEAJAAAJQAAALgFAIQgEAJgJAFQgIAEgLAAQgLAAgIgFgAo7gQQgFAHAAAJQAAALAFAGQAGAGAJAAQALAAAFgGQAFgGAAgLQAAgKgFgGQgGgGgKAAQgJAAgGAGgAqVAgQgHgEgGgKQgFgJAAgLQAAgNAFgIQAFgJAIgGQAJgFALAAQALAAAJAFQAIAGAFAJQAEAJAAAMQAAALgEAJQgFAJgIAFQgJAFgLAAQgLAAgJgFgAqNgZQgEACgEAHQgCAFAAAJQAAALAGAHQAFAHALAAQALAAAFgHQAGgIAAgKQAAgMgGgHQgFgIgLAAQgIAAgEAEgALrAjIAAhXIgzAAIAABXIgPAAIAAhlIBRAAIAABlgAKMAjIgugwIAAAwIgPAAIAAhlIAPAAIAAAwIArgwIASAAIgtAyIAxAzgAIQAjIAAgbIgSAAIgRAbIgPAAIASgdQgGgCgFgEQgFgFAAgKQAAgKAFgHQAGgGAIgBIAHgBIAHgBIAeAAIAABMgAH4gcIgFADIgDAEQgBACAAADQAAAFADAEQACACAEACIAIABIAQAAIAAgbIgUAAgAFuAjIAAgfIglAAIAAAfIgPAAIAAhMIAPAAIAAAgIAlAAIAAggIAPAAIAABMgAEYAjIAAgfIgmAAIAAAfIgPAAIAAhMIAPAAIAAAgIAmAAIAAggIAOAAIAABMgABEAjIAAhMIAiAAIANACQAFACAFAEQAEAGAAAHQAAAFgCADIgEAGIgCABIgDACIAGABQADACADADQADAEAAAHQAAAHgEAGQgEAEgHADIgGABgABUAXIAYAAIADgBQADAAACgDIABgGQAAgEgCgCQgCgDgDgBIgDAAIgXAAgABUgIIAUAAIAEgBQADgCABgCIABgFIgBgGQgCgDgDgBIgEgBIgTAAgAiJAjIAAg0IgmA0IgMAAIAAhMIAOAAIAAA0IAmg0IAMAAIAABMgAknAjIAAg0IgmA0IgMAAIAAhMIAOAAIAAA0IAng0IAMAAIAABMgAmPAjIAAg+IgaAAIAAgOIBDAAIAAAOIgaAAIAAA+g");
	this.shape_1.setTransform(91.125,40.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#39AEB2").s().p("AuSEOIAAobIclAAIAAIbg");
	this.shape_2.setTransform(91.5,27);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line2, new cjs.Rectangle(0,0,183,54), null);


(lib.line = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKgBhIAAgbIhkAAIAAAbIgcAAIAAg1QAIAAAGgEQAFgEADgHQAEgGABgKIADgTIAGhXIBrAAIAACJIAMAAIAAA1gAJWASIgEAPQgBAEgGAHIBJAAIAAhvIg3AAgAGeA/QgRgLgJgTQgKgTAAgZQAAgaAKgSQAJgUARgKQASgLAZAAQAYAAASALQARAKAKAUQAJAUAAAYQAAAXgJAVQgKATgRALQgSAKgYAAQgZAAgSgKgAGtg/QgLAHgFAOQgGAOAAARQAAARAGANQAFAOALAHQAKAHASABQAQAAALgIQALgHAFgOQAGgMAAgSQAAgSgGgNQgFgNgLgIQgLgHgQAAQgSAAgKAHgANfBGIAAijIAbAAIAACjgALUBGIAAijIAbAAIAAA5IA2ABQAPADAIAHQAKAIAEAKQAFALAAANQAAANgFALQgEALgKAIQgIAHgPACIgHABgALvAsIAtAAIAFgBQAHgBAEgFQAEgFABgFQACgFAAgFIgCgLQgBgFgEgEQgEgEgHgCIgFgBIgtAAgAEHBGIAAijIBqAAIAAAaIhOAAIAACJgADMBGIAAijIAcAAIAACjgABBBGIAAijIAcAAIAAA5IA1ABQAOACAKAIQAJAHAEALQAFALAAANQAAANgFALQgEALgJAIQgKAHgOACIgHABgABdAsIAsAAIAFgBQAHgBAEgFQADgDADgHQABgFAAgFIgBgLQgDgGgDgDQgEgEgHgCIgFgBIgsAAgAhNBGIAAijIBBAAQAQAAAKAHQALAHAFAKQAFALAAAKQAAAOgGAJQgEAGgGAEQAKAEAGAIQAIAKAAAOQAAAPgGALQgFALgLAGQgLAGgPAAgAgxAsIAoAAQAHAAAFgDQAGgDADgFQADgFAAgHQAAgHgDgFQgDgGgFgDQgFgCgHAAIgpAAgAgxgbIAlAAQAFAAAFgDQAEgCADgEQACgFAAgGQAAgJgFgGQgFgFgJAAIglAAgAi2BGIAAg5IgnAAIgbA5IgfAAIAeg+QgMgFgGgIQgKgOAAgUQAAgOAFgLQAFgMAIgGQAKgIAOgCIAHgBIBKAAIAACjgAjnhCQgHACgEAEQgDADgDAHQgBAFAAAGQAAAFABAFQADAHADADQAEAEAHACIAKABIAnAAIAAg3IgnAAgAlKBGIAAhoIgyBoIgLAAIgzhoIAABoIgZAAIAAijIAYAAIA5BzIA5hzIAYAAIAACjgApYBGIAAijIBpAAIAAAaIhOAAIAAAoIBBAAIAAAaIhBAAIAAAtIBOAAIAAAagArqBGIAAijIBKAAIAHABQAOACAKAIQAIAGAFAMQAFALAAAOQAAANgFALQgFAMgJAFQgIAHgPADIgHABIguAAIAAA5gArOgMIAnAAIAKgBQAHgCAEgEQADgDACgHQACgEAAgGQAAgHgCgEQgCgHgDgDQgEgEgHgCIgKgBIgnAAgAt5BGIAAijIBBAAQARAAAKAHQAKAGAGALQAFAKAAALQAAAOgGAJQgEAGgGAEQAJAEAHAIQAIALAAANQAAAPgGALQgGALgLAGQgKAGgRAAgAtdAsIAoAAQAIAAAFgDQAGgDADgFQADgFAAgHQAAgIgDgEQgDgGgFgDQgFgCgIAAIgpAAgAtdgbIAkAAQAFAAAGgDQAFgCACgEQADgFAAgGQAAgIgFgHQgGgFgKAAIgkAAg");
	this.shape.setTransform(78.1942,44.5901,1.2477,1.2477);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(-32.9,32.5,222.20000000000002,24.200000000000003), null);


(lib.fon_muv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.fon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fon_muv, new cjs.Rectangle(0,0,420,600), null);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25282A").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(150,300,1.25,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,600), null);


(lib.s8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_3
	this.instance = new lib.s9();
	this.instance.setTransform(42.1,43.25,1,1,0,0,0,42,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-0.4,87.3,87.30000000000001);


(lib.road_p2_muv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.poloski2();
	this.instance.setTransform(207.85,58.65,0.7986,1.6197,0,-65.23,0.9404,50.4,53.6);

	this.instance_1 = new lib.poloski2();
	this.instance_1.setTransform(-128.25,124.2,0.7986,3.215,0,55.1858,6.1332,51,53.5);
	this.instance_1.alpha = 0.3984;

	this.instance_2 = new lib.poloski2();
	this.instance_2.setTransform(136.75,141.35,0.7986,2.7731,0,-34.4194,6.1332,51.4,53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.road_p2_muv, new cjs.Rectangle(-263.7,14.6,587.9,250.4), null);


(lib.road_p_muv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.poloski();
	this.instance.setTransform(81.95,114.2,0.1684,2.1675,0,35.8363,22.0732,51.1,52.9);

	this.instance_1 = new lib.poloski();
	this.instance_1.setTransform(303.05,106.85,0.1684,2.8147,0,-52.8552,-66.6159,50.2,53.1);

	this.instance_2 = new lib.poloski();
	this.instance_2.setTransform(289.15,74.8,0.1684,2.289,0,-59.5749,-73.3405,49.5,53.1);

	this.instance_3 = new lib.poloski();
	this.instance_3.setTransform(274,140,0.1684,2.8857,0,-38.435,-52.1933,50.4,53.1);

	this.instance_4 = new lib.poloski();
	this.instance_4.setTransform(85.9,141.25,0.1685,2.599,0,30.6784,16.9184,50.8,53);

	this.instance_5 = new lib.poloski();
	this.instance_5.setTransform(114.9,153.75,0.1685,2.6658,0,19.4989,5.738,50.4,53);

	this.instance_6 = new lib.poloski();
	this.instance_6.setTransform(147.4,147.1,0.1685,2.4084,0,7.4964,-6.2611,50.9,53.1);

	this.instance_7 = new lib.poloski();
	this.instance_7.setTransform(177.7,141.25,0.1684,2.1652,0,-5.6321,-19.3856,51.2,53.1);

	this.instance_8 = new lib.poloski();
	this.instance_8.setTransform(200.7,130.55,0.1684,1.8813,0,-14.962,-28.7198,50.6,53);

	this.instance_9 = new lib.poloski();
	this.instance_9.setTransform(274.85,45.75,0.1683,1.8811,0,-68.0453,-81.8082,49.6,53);

	this.instance_10 = new lib.poloski();
	this.instance_10.setTransform(265.95,52.9,0.1684,1.8812,0,-63.5574,-77.3191,49.9,53);

	this.instance_11 = new lib.poloski();
	this.instance_11.setTransform(272.55,74.65,0.1684,1.8812,0,-55.3279,-69.0896,49.8,53);

	this.instance_12 = new lib.poloski();
	this.instance_12.setTransform(264.15,88.55,0.1684,1.8812,0,-46.6177,-60.3775,50,53);

	this.instance_13 = new lib.poloski();
	this.instance_13.setTransform(251.35,99.3,0.1684,1.8812,0,-39.9218,-53.6825,49.9,53);

	this.instance_14 = new lib.poloski();
	this.instance_14.setTransform(57.05,102.35,0.1684,1.9987,0,47.7963,34.0328,52.1,52.9);

	this.instance_15 = new lib.poloski();
	this.instance_15.setTransform(75.25,103.6,0.1684,1.8813,0,41.8043,28.0462,50.9,53);

	this.instance_16 = new lib.poloski();
	this.instance_16.setTransform(95,107.65,0.1685,1.8813,0,32.6293,18.8698,50.3,53);

	this.instance_17 = new lib.poloski();
	this.instance_17.setTransform(235.2,118.95,0.1684,1.8812,0,-30.6949,-44.4567,50,53);

	this.instance_18 = new lib.poloski();
	this.instance_18.setTransform(210.15,117.9,0.1684,1.8813,0,-21.4686,-35.2293,50.1,53);

	this.instance_19 = new lib.poloski();
	this.instance_19.setTransform(183.1,117.65,0.1684,1.8813,0,-9.4784,-23.2368,50.4,53);

	this.instance_20 = new lib.poloski();
	this.instance_20.setTransform(161.35,117.65,0.1685,1.8813,0,1.5021,-12.2586,50.2,53);

	this.instance_21 = new lib.poloski();
	this.instance_21.setTransform(136.85,117.65,0.1685,1.8813,0,15.4629,1.7024,50.2,53);

	this.instance_22 = new lib.poloski();
	this.instance_22.setTransform(115.65,117.65,0.1685,1.8813,0,25.9418,12.181,50,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.road_p_muv, new cjs.Rectangle(-20.9,16,445.4,271.2), null);


(lib.fon_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.fon_muv();
	this.instance.setTransform(169,200,1,1,0,0,0,169,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:89},479).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,0,500,600);


(lib.cars2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.instance = new lib.s8();
	this.instance.setTransform(43.1,123.35,0.0864,0.418,0,0.6421,0.2125,48.2,45.6);
	this.instance.alpha = 0.8008;

	this.instance_1 = new lib.s8();
	this.instance_1.setTransform(102.05,138.15,0.1723,0.5366,0,-1.3444,-1.7561,45.8,44.8);
	this.instance_1.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой_1
	this.instance_2 = new lib.cars2();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cars2_1, new cjs.Rectangle(0,0,369,209), null);


(lib.cars2_muv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.cars2_1();
	this.instance.setTransform(70,41.5,1,1,0,0,0,70,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:62},99,cjs.Ease.quadInOut).to({x:70},100,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,0,377,209);


(lib.muv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rec_svg
	this.instance = new lib.rec();
	this.instance.setTransform(149.25,590.25,1.25,1.25,0,0,0,107.9,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(548));

	// logo_svg
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(150.75,78.85,1.2481,1.2481,0,0,0,65.5,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(548));

	// bg
	this.instance_2 = new lib.bg();
	this.instance_2.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},44).to({_off:true},1).wait(503));

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(519).to({_off:false},0).to({alpha:1},28).wait(1));

	// bg
	this.instance_4 = new lib.bg();
	this.instance_4.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(339).to({_off:false},0).to({alpha:1},28).to({alpha:0},28).to({_off:true},1).wait(152));

	// ligal
	this.text = new cjs.Text("1. управляй будущим. 2. Дэшинг. \n3. Стоимость 1 989 900 р. действует на автомобили Dashing (Дэшинг) в комплектации Комфорт при покупке в кредит по стандартным ставкам, сдаче вашего авто в трейд-ин и с прямой выгодой 300 000 рублей. Кредит предоставляют: ПАО «Совкомбанк», АО «Альфа-банк», Банк ВТБ (ПАО), ПАО «РОСБАНК». Предложение ограничено и действует с 01 по 30 ноября. Не является публичной офертой. Подробные условия на сайте jetour-ru.com. Реклама. ООО «Джетур Мотор Рус»", "11px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 13;
	this.text.lineWidth = 238;
	this.text.parent = this;
	this.text.setTransform(25.95,160.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(367).to({_off:false},0).wait(181));

	// line_svg
	this.instance_5 = new lib.line();
	this.instance_5.setTransform(120,127.75,1,1,0,0,0,48.4,22.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).wait(1).to({regX:78.2,regY:44.6,x:149.8,y:149.8,alpha:0.0434},0).wait(1).to({y:149.35,alpha:0.0875},0).wait(1).to({y:148.9,alpha:0.132},0).wait(1).to({y:148.45,alpha:0.1771},0).wait(1).to({y:148,alpha:0.2226},0).wait(1).to({y:147.55,alpha:0.2683},0).wait(1).to({y:147.1,alpha:0.3142},0).wait(1).to({y:146.6,alpha:0.3601},0).wait(1).to({y:146.15,alpha:0.4055},0).wait(1).to({y:145.7,alpha:0.4503},0).wait(1).to({y:145.3,alpha:0.494},0).wait(1).to({y:144.85,alpha:0.5363},0).wait(1).to({y:144.45,alpha:0.5767},0).wait(1).to({y:144.1,alpha:0.6149},0).wait(1).to({y:143.7,alpha:0.6506},0).wait(1).to({y:143.4,alpha:0.6837},0).wait(1).to({y:143.1,alpha:0.7141},0).wait(1).to({y:142.8,alpha:0.7417},0).wait(1).to({y:142.55,alpha:0.7668},0).wait(1).to({y:142.35,alpha:0.7894},0).wait(1).to({y:142.15,alpha:0.8097},0).wait(1).to({y:141.95,alpha:0.8281},0).wait(1).to({y:141.8,alpha:0.8445},0).wait(1).to({y:141.65,alpha:0.8594},0).wait(1).to({y:141.5,alpha:0.8727},0).wait(1).to({y:141.4,alpha:0.8847},0).wait(1).to({y:141.25,alpha:0.8956},0).wait(1).to({y:141.15,alpha:0.9054},0).wait(1).to({y:141.1,alpha:0.9143},0).wait(1).to({y:141,alpha:0.9224},0).wait(1).to({y:140.95,alpha:0.9297},0).wait(1).to({y:140.85,alpha:0.9363},0).wait(1).to({y:140.8,alpha:0.9424},0).wait(1).to({y:140.75,alpha:0.9479},0).wait(1).to({y:140.7,alpha:0.9529},0).wait(1).to({y:140.65,alpha:0.9575},0).wait(1).to({y:140.6,alpha:0.9617},0).wait(1).to({y:140.55,alpha:0.9655},0).wait(1).to({alpha:0.969},0).wait(1).to({y:140.5,alpha:0.9722},0).wait(1).to({y:140.45,alpha:0.9752},0).wait(1).to({alpha:0.9778},0).wait(1).to({y:140.4,alpha:0.9803},0).wait(1).to({alpha:0.9825},0).wait(1).to({alpha:0.9845},0).wait(1).to({y:140.35,alpha:0.9864},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.9896},0).wait(1).to({y:140.3,alpha:0.9909},0).wait(1).to({alpha:0.9922},0).wait(1).to({alpha:0.9933},0).wait(1).to({alpha:0.9943},0).wait(1).to({y:140.25,alpha:0.9952},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.9968},0).wait(1).to({alpha:0.9974},0).wait(1).to({alpha:0.9979},0).wait(1).to({alpha:0.9984},0).wait(1).to({alpha:0.9988},0).wait(1).to({alpha:0.9991},0).wait(1).to({alpha:0.9994},0).wait(1).to({alpha:0.9996},0).wait(1).to({alpha:0.9998},0).wait(1).to({alpha:0.9999},0).wait(1).to({alpha:1},0).wait(1).to({regX:48.4,regY:22.1,x:120,y:117.75},0).to({_off:true},284).wait(180));

	// logo_car_svg
	this.instance_6 = new lib.logo_car();
	this.instance_6.setTransform(123.6,295.2,1,1,0,0,0,78.7,7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({_off:false},0).wait(1).to({regX:109.7,regY:149.6,x:154.6,y:437.45,alpha:0.0434},0).wait(1).to({y:437.1,alpha:0.0875},0).wait(1).to({y:436.7,alpha:0.132},0).wait(1).to({y:436.35,alpha:0.1771},0).wait(1).to({y:436,alpha:0.2226},0).wait(1).to({y:435.65,alpha:0.2683},0).wait(1).to({y:435.25,alpha:0.3142},0).wait(1).to({y:434.9,alpha:0.3601},0).wait(1).to({y:434.55,alpha:0.4055},0).wait(1).to({y:434.15,alpha:0.4503},0).wait(1).to({y:433.8,alpha:0.494},0).wait(1).to({y:433.5,alpha:0.5363},0).wait(1).to({y:433.15,alpha:0.5767},0).wait(1).to({y:432.85,alpha:0.6149},0).wait(1).to({y:432.55,alpha:0.6506},0).wait(1).to({y:432.3,alpha:0.6837},0).wait(1).to({y:432.05,alpha:0.7141},0).wait(1).to({y:431.85,alpha:0.7417},0).wait(1).to({y:431.65,alpha:0.7668},0).wait(1).to({y:431.45,alpha:0.7894},0).wait(1).to({y:431.3,alpha:0.8097},0).wait(1).to({y:431.15,alpha:0.8281},0).wait(1).to({y:431,alpha:0.8445},0).wait(1).to({y:430.9,alpha:0.8594},0).wait(1).to({y:430.8,alpha:0.8727},0).wait(1).to({y:430.7,alpha:0.8847},0).wait(1).to({y:430.6,alpha:0.8956},0).wait(1).to({y:430.55,alpha:0.9054},0).wait(1).to({y:430.45,alpha:0.9143},0).wait(1).to({y:430.4,alpha:0.9224},0).wait(1).to({y:430.35,alpha:0.9297},0).wait(1).to({y:430.3,alpha:0.9363},0).wait(1).to({y:430.25,alpha:0.9424},0).wait(1).to({y:430.2,alpha:0.9479},0).wait(1).to({y:430.15,alpha:0.9529},0).wait(1).to({y:430.1,alpha:0.9575},0).wait(1).to({alpha:0.9617},0).wait(1).to({y:430.05,alpha:0.9655},0).wait(1).to({y:430,alpha:0.969},0).wait(1).to({alpha:0.9722},0).wait(1).to({y:429.95,alpha:0.9752},0).wait(1).to({alpha:0.9778},0).wait(1).to({alpha:0.9803},0).wait(1).to({y:429.9,alpha:0.9825},0).wait(1).to({alpha:0.9845},0).wait(1).to({alpha:0.9864},0).wait(1).to({y:429.85,alpha:0.988},0).wait(1).to({alpha:0.9896},0).wait(1).to({alpha:0.9909},0).wait(1).to({alpha:0.9922},0).wait(1).to({alpha:0.9933},0).wait(1).to({y:429.8,alpha:0.9943},0).wait(1).to({alpha:0.9952},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.9968},0).wait(1).to({alpha:0.9974},0).wait(1).to({alpha:0.9979},0).wait(1).to({alpha:0.9984},0).wait(1).to({alpha:0.9988},0).wait(1).to({alpha:0.9991},0).wait(1).to({alpha:0.9994},0).wait(1).to({alpha:0.9996},0).wait(1).to({alpha:0.9998},0).wait(1).to({alpha:0.9999},0).wait(1).to({alpha:1},0).wait(1).to({regX:78.7,regY:7,x:123.6,y:287.2},0).to({_off:true},243).wait(180));

	// maska (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EgPbAjfIAArfMAkYAAAIAALfg");
	var mask_graphics_60 = new cjs.Graphics().p("EgPbAjfIAArfMAkYAAAIAALfg");
	var mask_graphics_61 = new cjs.Graphics().p("EgPbAjfIAArfMAkYAAAIAALfg");
	var mask_graphics_62 = new cjs.Graphics().p("EgPbAjfIAArfMAkYAAAIAALfg");
	var mask_graphics_63 = new cjs.Graphics().p("EgPbAjfIAArfMAkYAAAIAALfg");
	var mask_graphics_64 = new cjs.Graphics().p("EgPbAjfIAAreMAkYAAAIAALeg");
	var mask_graphics_65 = new cjs.Graphics().p("EgPbAjgIAArfMAkYAAAIAALfg");
	var mask_graphics_66 = new cjs.Graphics().p("EgPbAjgIAAreMAkYAAAIAALeg");
	var mask_graphics_67 = new cjs.Graphics().p("EgPbAjhIAAreMAkYAAAIAALeg");
	var mask_graphics_68 = new cjs.Graphics().p("EgPbAjiIAAreMAkYAAAIAALeg");
	var mask_graphics_69 = new cjs.Graphics().p("EgPbAjkIAArfMAkYAAAIAALfg");
	var mask_graphics_70 = new cjs.Graphics().p("EgPbAjlIAAreMAkYAAAIAALeg");
	var mask_graphics_71 = new cjs.Graphics().p("EgPbAjoIAArfMAkYAAAIAALfg");
	var mask_graphics_72 = new cjs.Graphics().p("EgPbAjqIAArfMAkYAAAIAALfg");
	var mask_graphics_73 = new cjs.Graphics().p("EgPbAjtIAArfMAkYAAAIAALfg");
	var mask_graphics_74 = new cjs.Graphics().p("EgPbAjwIAAreMAkYAAAIAALeg");
	var mask_graphics_75 = new cjs.Graphics().p("EgPbAj0IAArfMAkYAAAIAALfg");
	var mask_graphics_76 = new cjs.Graphics().p("EgPbAj4IAAreMAkYAAAIAALeg");
	var mask_graphics_77 = new cjs.Graphics().p("EgPbAj9IAArfMAkYAAAIAALfg");
	var mask_graphics_78 = new cjs.Graphics().p("EgPbAkCIAAreMAkYAAAIAALeg");
	var mask_graphics_79 = new cjs.Graphics().p("EgPbAkIIAAreMAkYAAAIAALeg");
	var mask_graphics_80 = new cjs.Graphics().p("EgPbAkPIAArfMAkYAAAIAALfg");
	var mask_graphics_81 = new cjs.Graphics().p("EgPbAkWIAAreMAkYAAAIAALeg");
	var mask_graphics_82 = new cjs.Graphics().p("EgPbAkeIAArfMAkYAAAIAALfg");
	var mask_graphics_83 = new cjs.Graphics().p("EgPbAknIAArfMAkYAAAIAALfg");
	var mask_graphics_84 = new cjs.Graphics().p("EgPbAkwIAAreMAkYAAAIAALeg");
	var mask_graphics_85 = new cjs.Graphics().p("EgPbAk6IAAreMAkYAAAIAALeg");
	var mask_graphics_86 = new cjs.Graphics().p("EgPbAlFIAAreMAkYAAAIAALeg");
	var mask_graphics_87 = new cjs.Graphics().p("EgPbAlRIAAreMAkYAAAIAALeg");
	var mask_graphics_88 = new cjs.Graphics().p("EgPbAleIAArfMAkYAAAIAALfg");
	var mask_graphics_89 = new cjs.Graphics().p("EgPbAlrIAAreMAkYAAAIAALeg");
	var mask_graphics_90 = new cjs.Graphics().p("EgPbAl6IAArfMAkYAAAIAALfg");
	var mask_graphics_91 = new cjs.Graphics().p("EgPbAmJIAAreMAkYAAAIAALeg");
	var mask_graphics_92 = new cjs.Graphics().p("EgPbAmaIAArfMAkYAAAIAALfg");
	var mask_graphics_93 = new cjs.Graphics().p("EgPbAmrIAArfMAkYAAAIAALfg");
	var mask_graphics_94 = new cjs.Graphics().p("EgPbAm6IAAreMAkYAAAIAALeg");
	var mask_graphics_95 = new cjs.Graphics().p("EgPbAnJIAArfMAkYAAAIAALfg");
	var mask_graphics_96 = new cjs.Graphics().p("EgPbAnWIAAreMAkYAAAIAALeg");
	var mask_graphics_97 = new cjs.Graphics().p("EgPbAnjIAArfMAkYAAAIAALfg");
	var mask_graphics_98 = new cjs.Graphics().p("EgPbAnvIAArfMAkYAAAIAALfg");
	var mask_graphics_99 = new cjs.Graphics().p("EgPbAn6IAArfMAkYAAAIAALfg");
	var mask_graphics_100 = new cjs.Graphics().p("EgPbAoEIAArfMAkYAAAIAALfg");
	var mask_graphics_101 = new cjs.Graphics().p("EgPbAoNIAAreMAkYAAAIAALeg");
	var mask_graphics_102 = new cjs.Graphics().p("EgPbAoWIAAreMAkYAAAIAALeg");
	var mask_graphics_103 = new cjs.Graphics().p("EgPbAoeIAArfMAkYAAAIAALfg");
	var mask_graphics_104 = new cjs.Graphics().p("EgPbAolIAAreMAkYAAAIAALeg");
	var mask_graphics_105 = new cjs.Graphics().p("EgPbAosIAArfMAkYAAAIAALfg");
	var mask_graphics_106 = new cjs.Graphics().p("EgPbAoyIAArfMAkYAAAIAALfg");
	var mask_graphics_107 = new cjs.Graphics().p("EgPbAo3IAAreMAkYAAAIAALeg");
	var mask_graphics_108 = new cjs.Graphics().p("EgPbAo8IAArfMAkYAAAIAALfg");
	var mask_graphics_109 = new cjs.Graphics().p("EgPbApAIAAreMAkYAAAIAALeg");
	var mask_graphics_110 = new cjs.Graphics().p("EgPbApEIAArfMAkYAAAIAALfg");
	var mask_graphics_111 = new cjs.Graphics().p("EgPbApHIAAreMAkYAAAIAALeg");
	var mask_graphics_112 = new cjs.Graphics().p("EgPbApKIAAreMAkYAAAIAALeg");
	var mask_graphics_113 = new cjs.Graphics().p("EgPbApMIAAreMAkYAAAIAALeg");
	var mask_graphics_114 = new cjs.Graphics().p("EgPbApPIAArfMAkYAAAIAALfg");
	var mask_graphics_115 = new cjs.Graphics().p("EgPbApQIAAreMAkYAAAIAALeg");
	var mask_graphics_116 = new cjs.Graphics().p("EgPbApSIAArfMAkYAAAIAALfg");
	var mask_graphics_117 = new cjs.Graphics().p("EgPbApTIAArfMAkYAAAIAALfg");
	var mask_graphics_118 = new cjs.Graphics().p("EgPbApUIAArfMAkYAAAIAALfg");
	var mask_graphics_119 = new cjs.Graphics().p("EgPbApUIAAreMAkYAAAIAALeg");
	var mask_graphics_120 = new cjs.Graphics().p("EgPbApVIAArfMAkYAAAIAALfg");
	var mask_graphics_121 = new cjs.Graphics().p("EgPbApVIAAreMAkYAAAIAALeg");
	var mask_graphics_122 = new cjs.Graphics().p("EgPbApVIAAreMAkYAAAIAALeg");
	var mask_graphics_123 = new cjs.Graphics().p("EgPbApVIAAreMAkYAAAIAALeg");
	var mask_graphics_124 = new cjs.Graphics().p("EgPbApVIAAreMAkYAAAIAALeg");
	var mask_graphics_125 = new cjs.Graphics().p("EgPbApVIAAreMAkYAAAIAALeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:134.05,y:227.0501}).wait(1).to({graphics:mask_graphics_60,x:134.05,y:227.0506}).wait(1).to({graphics:mask_graphics_61,x:134.05,y:227.0543}).wait(1).to({graphics:mask_graphics_62,x:134.05,y:227.0642}).wait(1).to({graphics:mask_graphics_63,x:134.05,y:227.0835}).wait(1).to({graphics:mask_graphics_64,x:134.05,y:227.1153}).wait(1).to({graphics:mask_graphics_65,x:134.05,y:227.1628}).wait(1).to({graphics:mask_graphics_66,x:134.05,y:227.2291}).wait(1).to({graphics:mask_graphics_67,x:134.05,y:227.3172}).wait(1).to({graphics:mask_graphics_68,x:134.05,y:227.4305}).wait(1).to({graphics:mask_graphics_69,x:134.05,y:227.5719}).wait(1).to({graphics:mask_graphics_70,x:134.05,y:227.7445}).wait(1).to({graphics:mask_graphics_71,x:134.05,y:227.9517}).wait(1).to({graphics:mask_graphics_72,x:134.05,y:228.1964}).wait(1).to({graphics:mask_graphics_73,x:134.05,y:228.4818}).wait(1).to({graphics:mask_graphics_74,x:134.05,y:228.811}).wait(1).to({graphics:mask_graphics_75,x:134.05,y:229.1872}).wait(1).to({graphics:mask_graphics_76,x:134.05,y:229.6134}).wait(1).to({graphics:mask_graphics_77,x:134.05,y:230.0929}).wait(1).to({graphics:mask_graphics_78,x:134.05,y:230.6288}).wait(1).to({graphics:mask_graphics_79,x:134.05,y:231.2241}).wait(1).to({graphics:mask_graphics_80,x:134.05,y:231.882}).wait(1).to({graphics:mask_graphics_81,x:134.05,y:232.6057}).wait(1).to({graphics:mask_graphics_82,x:134.05,y:233.3982}).wait(1).to({graphics:mask_graphics_83,x:134.05,y:234.2627}).wait(1).to({graphics:mask_graphics_84,x:134.05,y:235.2024}).wait(1).to({graphics:mask_graphics_85,x:134.05,y:236.2203}).wait(1).to({graphics:mask_graphics_86,x:134.05,y:237.3196}).wait(1).to({graphics:mask_graphics_87,x:134.05,y:238.5035}).wait(1).to({graphics:mask_graphics_88,x:134.05,y:239.775}).wait(1).to({graphics:mask_graphics_89,x:134.05,y:241.1373}).wait(1).to({graphics:mask_graphics_90,x:134.05,y:242.5935}).wait(1).to({graphics:mask_graphics_91,x:134.05,y:244.1467}).wait(1).to({graphics:mask_graphics_92,x:134.05,y:245.8001}).wait(1).to({graphics:mask_graphics_93,x:134.05,y:247.4535}).wait(1).to({graphics:mask_graphics_94,x:134.05,y:249.0068}).wait(1).to({graphics:mask_graphics_95,x:134.05,y:250.463}).wait(1).to({graphics:mask_graphics_96,x:134.05,y:251.8252}).wait(1).to({graphics:mask_graphics_97,x:134.05,y:253.0967}).wait(1).to({graphics:mask_graphics_98,x:134.05,y:254.2806}).wait(1).to({graphics:mask_graphics_99,x:134.05,y:255.3799}).wait(1).to({graphics:mask_graphics_100,x:134.05,y:256.3978}).wait(1).to({graphics:mask_graphics_101,x:134.05,y:257.3375}).wait(1).to({graphics:mask_graphics_102,x:134.05,y:258.202}).wait(1).to({graphics:mask_graphics_103,x:134.05,y:258.9945}).wait(1).to({graphics:mask_graphics_104,x:134.05,y:259.7182}).wait(1).to({graphics:mask_graphics_105,x:134.05,y:260.3761}).wait(1).to({graphics:mask_graphics_106,x:134.05,y:260.9714}).wait(1).to({graphics:mask_graphics_107,x:134.05,y:261.5073}).wait(1).to({graphics:mask_graphics_108,x:134.05,y:261.9868}).wait(1).to({graphics:mask_graphics_109,x:134.05,y:262.413}).wait(1).to({graphics:mask_graphics_110,x:134.05,y:262.7892}).wait(1).to({graphics:mask_graphics_111,x:134.05,y:263.1184}).wait(1).to({graphics:mask_graphics_112,x:134.05,y:263.4038}).wait(1).to({graphics:mask_graphics_113,x:134.05,y:263.6485}).wait(1).to({graphics:mask_graphics_114,x:134.05,y:263.8557}).wait(1).to({graphics:mask_graphics_115,x:134.05,y:264.0284}).wait(1).to({graphics:mask_graphics_116,x:134.05,y:264.1698}).wait(1).to({graphics:mask_graphics_117,x:134.05,y:264.283}).wait(1).to({graphics:mask_graphics_118,x:134.05,y:264.3711}).wait(1).to({graphics:mask_graphics_119,x:134.05,y:264.4374}).wait(1).to({graphics:mask_graphics_120,x:134.05,y:264.4849}).wait(1).to({graphics:mask_graphics_121,x:134.05,y:264.5167}).wait(1).to({graphics:mask_graphics_122,x:134.05,y:264.536}).wait(1).to({graphics:mask_graphics_123,x:134.05,y:264.5459}).wait(1).to({graphics:mask_graphics_124,x:134.05,y:264.5496}).wait(1).to({graphics:mask_graphics_125,x:134.05,y:264.5501}).wait(423));

	// line2_svg
	this.instance_7 = new lib.line2();
	this.instance_7.setTransform(152.1,492.2,1.2451,1.2444,0,0,0,91.5,27.1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(59).to({_off:false},0).to({_off:true},309).wait(180));

	// cars2_png
	this.instance_8 = new lib.cars2_muv();
	this.instance_8.setTransform(70,238.5,1,1,0,0,0,70,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},368).wait(180));

	// road_p2
	this.instance_9 = new lib.road_p2_muv();
	this.instance_9.setTransform(105.5,435.5,1.5695,1.5695,0,0,0,122.7,125.3);
	this.instance_9.alpha = 0.5;
	this.instance_9.compositeOperation = "overlay";

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},368).wait(180));

	// road_p
	this.instance_10 = new lib.road_p_muv();
	this.instance_10.setTransform(0.9,452,1.9317,1.9317,-2.2137,0,0,183.9,109.5);
	this.instance_10.alpha = 0.0898;
	this.instance_10.compositeOperation = "overlay";

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},368).wait(180));

	// road_png
	this.instance_11 = new lib.road();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},368).wait(180));

	// fon_jpg
	this.instance_12 = new lib.fon_1();
	this.instance_12.setTransform(169,200,1,1,0,0,0,169,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},368).wait(180));

	// bg
	this.instance_13 = new lib.bg();
	this.instance_13.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(548));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500.8,0,972.1,802.9);


// stage content:
(lib.jetour_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var domOverlay = document.getElementById("dom_overlay_container");
		domOverlay.style.border = '1px solid #dadada';
		domOverlay.style.boxSizing = 'border-box';
		canvas.style.cursor = "pointer";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// muv
	this.instance = new lib.muv();
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgY/gwbMAx/AAAMAAABg3Mgx/AAAg");
	this.shape.setTransform(150,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgY/AwcMAAAhg3MAx/AAAMAAABg3g");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-350.8,300,822.1,502.9);
// library properties:
lib.properties = {
	id: 'C956187204212A468B397A4008BBDD5C',
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"index_atlas_P_1.png", id:"index_atlas_P_1"},
		{src:"index_atlas_NP_1.jpg", id:"index_atlas_NP_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C956187204212A468B397A4008BBDD5C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;