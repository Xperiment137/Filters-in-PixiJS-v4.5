


let app = new PIXI.Application({ 
	width:window.innerWidth,      // is for use full the "real" resolution of the screen 
	height:window.innerHeight,
	antialias: true, 
	transparent: false, 
	forceCanvas: false,
	autoResize: true,
	

}
);

document.body.appendChild(app.view);

const shaderFrag = `   //  more info : https://thebookofshaders.com/04/

precision mediump float;

uniform float iTime;    // you  use filter.uniforms.iTime to start and allow color change 

void main() {
	gl_FragColor = vec4(abs(sin(iTime)),0.0,0.0,1.0);   
}

`;

let container = new PIXI.Container();   // create filters container
container.filterArea = app.screen;
app.stage.addChild(container);  //add it to scene

let filter = new PIXI.Filter(null, shaderFrag);
//filter.uniforms.iResolution = [app.screen.width, app.screen.height, 1.0];  // if you want to use resolution variable in Shader
filter.uniforms.iTime = [1.0];  
container.filters = [filter];

app.ticker.add(function(delta) {
	filter.uniforms.iTime[0] += 0.01;  // Change time to animate the transition of red 
});




