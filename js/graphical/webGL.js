let color = 0.0;

export function initWebGL() {
    const canvas = document.querySelector("#glCanvas");

    const gl = canvas.getContext("webgl");
    if (gl === null) {
        alert("Unable to initialize WebGL.");
        return;
    }

    // color += 0.2;
    gl.clearColor(color, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
}

function initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const shaderProgram = gl.createProgram();
    gl.attachShaderProgram(shaderProgram, vertexShader);
    gl.attachShaderProgram(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
}

const triad = [ 0.0, 1.0, 0.0,
               -1.0, 0.5, 0.0,
               1.0, 0.5, 0.0 ]



