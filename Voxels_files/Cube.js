/**
 * @author mr.doob / http://mrdoob.com/
 */

// Width - x
// Height - y
// Depth - z
// Theta - rotation around y axis
var Cube = function (width, height, depth, theta) {

	THREE.Geometry.call(this);

	var scope = this,
	width_half = width / 2,
	height_half = height / 2,
	depth_half = depth / 2;
    
    var radius = Math.sqrt(Math.pow(width_half, 2) + Math.pow(depth_half, 2));
    
    var deg2rad = Math.PI / 180;
    
    // Eight vertices of a cube
	v( radius * Math.cos((theta - 45 +   0) * deg2rad),  height_half, radius * Math.sin((theta - 45 +   0) * deg2rad) ); //0
	v( radius * Math.cos((theta - 45 +   0) * deg2rad), -height_half, radius * Math.sin((theta - 45 +   0) * deg2rad) ); //1
	v( radius * Math.cos((theta - 45 + 270) * deg2rad), -height_half, radius * Math.sin((theta - 45 + 270) * deg2rad) ); //2
	v( radius * Math.cos((theta - 45 + 270) * deg2rad),  height_half, radius * Math.sin((theta - 45 + 270) * deg2rad) ); //3
	v( radius * Math.cos((theta - 45 +  90) * deg2rad),  height_half, radius * Math.sin((theta - 45 +  90) * deg2rad) ); //4
	v( radius * Math.cos((theta - 45 +  90) * deg2rad), -height_half, radius * Math.sin((theta - 45 +  90) * deg2rad) ); //5
	v( radius * Math.cos((theta - 45 + 180) * deg2rad), -height_half, radius * Math.sin((theta - 45 + 180) * deg2rad) ); //6
	v( radius * Math.cos((theta - 45 + 180) * deg2rad),  height_half, radius * Math.sin((theta - 45 + 180) * deg2rad) ); //7
    
    // Six faces of a cube
	f4( 0, 1, 2, 3 );
	f4( 4, 7, 6, 5 );
	f4( 0, 4, 5, 1 );
	f4( 1, 5, 6, 2 );
	f4( 2, 6, 7, 3 );
	f4( 4, 0, 3, 7 );

    // Adds a vertex to the object
	function v(x, y, z) {
		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );
	}

    // Creates a new face
	function f4(a, b, c, d) {
        // Face4 parameters are the indices of the vertices added above
		scope.faces.push( new THREE.Face4( a, b, c, d ) );
	}

	this.computeCentroids();
	this.computeNormals();

}

Cube.prototype = new THREE.Geometry();
Cube.prototype.constructor = Cube;