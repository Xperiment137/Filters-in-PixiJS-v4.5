


	let app = new PIXI.Application({ 
		width:window.innerWidth,
		height:window.innerHeight,
		antialias: true, 
		transparent: false, 
		forceCanvas: false,
	    autoResize: true,
       

	}
	);

document.body.appendChild(app.view);

const shaderFrag = `

precision mediump float;

uniform float iTime;

void main() {
		gl_FragColor = vec4(abs(sin(iTime)),0.0,0.0,1.0);
}

`;

let container = new PIXI.Container();
container.filterArea = app.screen;
app.stage.addChild(container);

let filter = new PIXI.Filter(null, shaderFrag);
//filter.uniforms.iResolution = [app.screen.width, app.screen.height, 1.0];
filter.uniforms.iTime = [1.0];
container.filters = [filter];

app.ticker.add(function(delta) {
    filter.uniforms.iTime[0] += 0.01;
});


