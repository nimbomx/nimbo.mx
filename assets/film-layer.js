(()=>{var j$="185";var y$=0,M7=1,v$=2;var j8=1,f$=2,O8=3,R8=0,CJ=1,tJ=2,eJ=0,y8=1,L7=2,V7=3,B7=4,b$=5;var k8=100,h$=101,x$=102,g$=103,p$=104,m$=200,d$=201,l$=202,u$=203,c$=204,n$=205,s$=206,i$=207,o$=208,a$=209,r$=210,t$=211,e$=212,JZ=213,QZ=214,$Z=0,ZZ=1,WZ=2,z7=3,KZ=4,HZ=5,YZ=6,XZ=7,UZ=0,GZ=1,NZ=2,sJ=0,w7=1,I7=2,A7=3,C7=4,P7=5,_7=6,T7=7;var M8=301,g9=302,O6=303,R6=304,v8=306,qZ=1000,k6=1001,EZ=1002,_9=1003,DZ=1004;var f8=1005;var PJ=1006,M6=1007;var p9=1008;var iJ=1009,FZ=1010,OZ=1011,b8=1012,S7=1013,T9=1014,E9=1015,D9=1016,j7=1017,y7=1018,L8=1020,RZ=35902,kZ=35899,MZ=1021,LZ=1022,J9=1023,m9=1026,d9=1027,VZ=1028,v7=1029,l9=1030,f7=1031;var b7=1033,L6=33776,V6=33777,B6=33778,z6=33779,h7=35840,x7=35841,g7=35842,p7=35843,m7=36196,d7=37492,l7=37496,u7=37488,c7=37489,w6=37490,n7=37491,s7=37808,i7=37809,o7=37810,a7=37811,r7=37812,t7=37813,e7=37814,JQ=37815,QQ=37816,$Q=37817,ZQ=37818,WQ=37819,KQ=37820,HQ=37821,YQ=36492,XQ=36494,UQ=36495,GQ=36283,NQ=36284,I6=36285,qQ=36286;var EQ=0,BZ=1,u9="",zZ="srgb",DQ="srgb-linear",FQ="linear",r0="srgb";var wZ=512,IZ=513,AZ=514,A6=515,CZ=516,PZ=517,C6=518,_Z=519;var OQ="300 es",RQ=2000;function jW(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function yW(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function S8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function TZ(){let J=S8("canvas");return J.style.display="block",J}var q$={},F8=null;function kQ(...J){let Q="THREE."+J.shift();if(F8)F8("log",Q,...J);else console.log(Q,...J)}function SZ(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function C0(...J){J=SZ(J);let Q="THREE."+J.shift();if(F8)F8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function P0(...J){J=SZ(J);let Q="THREE."+J.shift();if(F8)F8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function x9(...J){let Q=J.join(" ");if(Q in q$)return;q$[Q]=!0,C0(...J)}function jZ(J,Q,$){return new Promise(function(Z,W){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:Z()}}setTimeout(K,$)})}var yZ={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class F9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,K=Z.length;W<K;W++)Z[W].call(this,J);J.target=null}}}var LJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var o6=Math.PI/180,F6=180/Math.PI;function h8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(LJ[J&255]+LJ[J>>8&255]+LJ[J>>16&255]+LJ[J>>24&255]+"-"+LJ[Q&255]+LJ[Q>>8&255]+"-"+LJ[Q>>16&15|64]+LJ[Q>>24&255]+"-"+LJ[$&63|128]+LJ[$>>8&255]+"-"+LJ[$>>16&255]+LJ[$>>24&255]+LJ[Z&255]+LJ[Z>>8&255]+LJ[Z>>16&255]+LJ[Z>>24&255]).toLowerCase()}function g0(J,Q,$){return Math.max(Q,Math.min($,J))}function vW(J,Q){return(J%Q+Q)%Q}function a6(J,Q,$){return(1-$)*J+$*Q}function A8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function AJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class v0{static{v0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(g0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(g0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,K=this.y-J.y;return this.x=W*$-K*Z+J.x,this.y=W*Z+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class O9{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,K,H){let Y=$[Z+0],X=$[Z+1],U=$[Z+2],N=$[Z+3],q=W[K+0],G=W[K+1],F=W[K+2],L=W[K+3];if(N!==L||Y!==q||X!==G||U!==F){let z=Y*q+X*G+U*F+N*L;if(z<0)q=-q,G=-G,F=-F,L=-L,z=-z;let D=1-H;if(z<0.9995){let E=Math.acos(z),_=Math.sin(E);D=Math.sin(D*E)/_,H=Math.sin(H*E)/_,Y=Y*D+q*H,X=X*D+G*H,U=U*D+F*H,N=N*D+L*H}else{Y=Y*D+q*H,X=X*D+G*H,U=U*D+F*H,N=N*D+L*H;let E=1/Math.sqrt(Y*Y+X*X+U*U+N*N);Y*=E,X*=E,U*=E,N*=E}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,Z,W,K){let H=$[Z],Y=$[Z+1],X=$[Z+2],U=$[Z+3],N=W[K],q=W[K+1],G=W[K+2],F=W[K+3];return J[Q]=H*F+U*N+Y*G-X*q,J[Q+1]=Y*F+U*q+X*N-H*G,J[Q+2]=X*F+U*G+H*q-Y*N,J[Q+3]=U*F-H*N-Y*q-X*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(Z/2),N=H(W/2),q=Y($/2),G=Y(Z/2),F=Y(W/2);switch(K){case"XYZ":this._x=q*U*N+X*G*F,this._y=X*G*N-q*U*F,this._z=X*U*F+q*G*N,this._w=X*U*N-q*G*F;break;case"YXZ":this._x=q*U*N+X*G*F,this._y=X*G*N-q*U*F,this._z=X*U*F-q*G*N,this._w=X*U*N+q*G*F;break;case"ZXY":this._x=q*U*N-X*G*F,this._y=X*G*N+q*U*F,this._z=X*U*F+q*G*N,this._w=X*U*N-q*G*F;break;case"ZYX":this._x=q*U*N-X*G*F,this._y=X*G*N+q*U*F,this._z=X*U*F-q*G*N,this._w=X*U*N+q*G*F;break;case"YZX":this._x=q*U*N+X*G*F,this._y=X*G*N+q*U*F,this._z=X*U*F-q*G*N,this._w=X*U*N-q*G*F;break;case"XZY":this._x=q*U*N-X*G*F,this._y=X*G*N-q*U*F,this._z=X*U*F+q*G*N,this._w=X*U*N+q*G*F;break;default:C0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],N=Q[10],q=$+H+N;if(q>0){let G=0.5/Math.sqrt(q+1);this._w=0.25/G,this._x=(U-Y)*G,this._y=(W-X)*G,this._z=(K-Z)*G}else if($>H&&$>N){let G=2*Math.sqrt(1+$-H-N);this._w=(U-Y)/G,this._x=0.25*G,this._y=(Z+K)/G,this._z=(W+X)/G}else if(H>N){let G=2*Math.sqrt(1+H-$-N);this._w=(W-X)/G,this._x=(Z+K)/G,this._y=0.25*G,this._z=(Y+U)/G}else{let G=2*Math.sqrt(1+N-$-H);this._w=(K-Z)/G,this._x=(W+X)/G,this._y=(Y+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(g0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+Z*X-W*Y,this._y=Z*U+K*Y+W*H-$*X,this._z=W*U+K*X+$*Y-Z*H,this._w=K*U-$*H-Z*Y-W*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=this.dot(J);if(H<0)$=-$,Z=-Z,W=-W,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{static{b.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(E$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(E$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,K=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*K,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*K,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*Z-H*$),U=2*(H*Q-W*Z),N=2*(W*$-K*Q);return this.x=Q+Y*X+K*N-H*U,this.y=$+Y*U+H*X-W*N,this.z=Z+Y*N+W*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this.z=g0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this.z=g0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(g0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=Z*Y-W*H,this.y=W*K-$*Y,this.z=$*H-Z*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return r6.copy(this).projectOnVector(J),this.sub(r6)}reflect(J){return this.sub(r6.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(g0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var r6=new b,E$=new O9;class _0{static{_0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,W,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,Y,X)}set(J,Q,$,Z,W,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=H,U[3]=Q,U[4]=W,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],N=$[7],q=$[2],G=$[5],F=$[8],L=Z[0],z=Z[3],D=Z[6],E=Z[1],_=Z[4],C=Z[7],V=Z[2],I=Z[5],w=Z[8];return W[0]=K*L+H*E+Y*V,W[3]=K*z+H*_+Y*I,W[6]=K*D+H*C+Y*w,W[1]=X*L+U*E+N*V,W[4]=X*z+U*_+N*I,W[7]=X*D+U*C+N*w,W[2]=q*L+G*E+F*V,W[5]=q*z+G*_+F*I,W[8]=q*D+G*C+F*w,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*W*U+$*H*Y+Z*W*X-Z*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=U*K-H*X,q=H*Y-U*W,G=X*W-K*Y,F=Q*N+$*q+Z*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/F;return J[0]=N*L,J[1]=(Z*X-U*$)*L,J[2]=(H*$-Z*K)*L,J[3]=q*L,J[4]=(U*Q-Z*Y)*L,J[5]=(Z*W-H*Q)*L,J[6]=G*L,J[7]=($*Y-X*Q)*L,J[8]=(K*Q-$*W)*L,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,K,H){let Y=Math.cos(W),X=Math.sin(W);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-Z*X,Z*Y,-Z*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return x9("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(t6.makeScale(J,Q)),this}rotate(J){return x9("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(t6.makeRotation(-J)),this}translate(J,Q){return x9("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(t6.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var t6=new _0,D$=new _0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),F$=new _0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function fW(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,H){if(this.enabled===!1||K===H||!K||!H)return W;if(this.spaces[K].transfer==="srgb")W.r=q9(W.r),W.g=q9(W.g),W.b=q9(W.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")W.r=D8(W.r),W.g=D8(W.g),W.b=D8(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,H){return W.copy(this.spaces[K].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,K){return x9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,K)},toWorkingColorSpace:function(W,K){return x9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,K)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:D$,fromXYZ:F$,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:D$,fromXYZ:F$,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var x0=fW();function q9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function D8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var Q8;class MQ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(Q8===void 0)Q8=S8("canvas");Q8.width=J.width,Q8.height=J.height;let Z=Q8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=Q8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=S8("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let K=0;K<W.length;K++)W[K]=q9(W[K]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(q9(Q[$]/255)*255);else Q[$]=q9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return C0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var bW=0;class x8{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bW++}),this.uuid=h8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,H=Z.length;K<H;K++)if(Z[K].isDataTexture)W.push(e6(Z[K].image));else W.push(e6(Z[K]))}else W=e6(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function e6(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return MQ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return C0("Texture: Unable to serialize Texture."),{}}var hW=0,J7=new b;class BJ extends F9{constructor(J=BJ.DEFAULT_IMAGE,Q=BJ.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,K=1008,H=1023,Y=1009,X=BJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:hW++}),this.uuid=h8(),this.name="",this.source=new x8(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new v0(0,0),this.repeat=new v0(1,1),this.center=new v0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(J7).x}get height(){return this.source.getSize(J7).y}get depth(){return this.source.getSize(J7).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){C0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){C0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}BJ.DEFAULT_IMAGE=null;BJ.DEFAULT_MAPPING=300;BJ.DEFAULT_ANISOTROPY=1;class KJ{static{KJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z+K[12]*W,this.y=K[1]*Q+K[5]*$+K[9]*Z+K[13]*W,this.z=K[2]*Q+K[6]*$+K[10]*Z+K[14]*W,this.w=K[3]*Q+K[7]*$+K[11]*Z+K[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],N=Y[8],q=Y[1],G=Y[5],F=Y[9],L=Y[2],z=Y[6],D=Y[10];if(Math.abs(U-q)<0.01&&Math.abs(N-L)<0.01&&Math.abs(F-z)<0.01){if(Math.abs(U+q)<0.1&&Math.abs(N+L)<0.1&&Math.abs(F+z)<0.1&&Math.abs(X+G+D-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let _=(X+1)/2,C=(G+1)/2,V=(D+1)/2,I=(U+q)/4,w=(N+L)/4,P=(F+z)/4;if(_>C&&_>V)if(_<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(_),Z=I/$,W=w/$;else if(C>V)if(C<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(C),$=I/Z,W=P/Z;else if(V<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(V),$=w/W,Z=P/W;return this.set($,Z,W,Q),this}let E=Math.sqrt((z-F)*(z-F)+(N-L)*(N-L)+(q-U)*(q-U));if(Math.abs(E)<0.001)E=1;return this.x=(z-F)/E,this.y=(N-L)/E,this.z=(q-U)/E,this.w=Math.acos((X+G+D-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this.z=g0(this.z,J.z,Q.z),this.w=g0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this.z=g0(this.z,J,Q),this.w=g0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(g0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LQ extends F9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new KJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new KJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},W=new BJ(Z),K=$.count;for(let H=0;H<K;H++)this.textures[H]=W.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new x8(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mJ extends LQ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class P6 extends BJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class VQ extends BJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WJ{static{WJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,W,K,H,Y,X,U,N,q,G,F,L,z){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,Y,X,U,N,q,G,F,L,z)}set(J,Q,$,Z,W,K,H,Y,X,U,N,q,G,F,L,z){let D=this.elements;return D[0]=J,D[4]=Q,D[8]=$,D[12]=Z,D[1]=W,D[5]=K,D[9]=H,D[13]=Y,D[2]=X,D[6]=U,D[10]=N,D[14]=q,D[3]=G,D[7]=F,D[11]=L,D[15]=z,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new WJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/$8.setFromMatrixColumn(J,0).length(),W=1/$8.setFromMatrixColumn(J,1).length(),K=1/$8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(Z),X=Math.sin(Z),U=Math.cos(W),N=Math.sin(W);if(J.order==="XYZ"){let q=K*U,G=K*N,F=H*U,L=H*N;Q[0]=Y*U,Q[4]=-Y*N,Q[8]=X,Q[1]=G+F*X,Q[5]=q-L*X,Q[9]=-H*Y,Q[2]=L-q*X,Q[6]=F+G*X,Q[10]=K*Y}else if(J.order==="YXZ"){let q=Y*U,G=Y*N,F=X*U,L=X*N;Q[0]=q+L*H,Q[4]=F*H-G,Q[8]=K*X,Q[1]=K*N,Q[5]=K*U,Q[9]=-H,Q[2]=G*H-F,Q[6]=L+q*H,Q[10]=K*Y}else if(J.order==="ZXY"){let q=Y*U,G=Y*N,F=X*U,L=X*N;Q[0]=q-L*H,Q[4]=-K*N,Q[8]=F+G*H,Q[1]=G+F*H,Q[5]=K*U,Q[9]=L-q*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let q=K*U,G=K*N,F=H*U,L=H*N;Q[0]=Y*U,Q[4]=F*X-G,Q[8]=q*X+L,Q[1]=Y*N,Q[5]=L*X+q,Q[9]=G*X-F,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let q=K*Y,G=K*X,F=H*Y,L=H*X;Q[0]=Y*U,Q[4]=L-q*N,Q[8]=F*N+G,Q[1]=N,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=G*N+F,Q[10]=q-L*N}else if(J.order==="XZY"){let q=K*Y,G=K*X,F=H*Y,L=H*X;Q[0]=Y*U,Q[4]=-N,Q[8]=X*U,Q[1]=q*N+L,Q[5]=K*U,Q[9]=G*N-F,Q[2]=F*N-G,Q[6]=H*U,Q[10]=L*N+q}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(xW,J,gW)}lookAt(J,Q,$){let Z=this.elements;if(TJ.subVectors(J,Q),TJ.lengthSq()===0)TJ.z=1;if(TJ.normalize(),B9.crossVectors($,TJ),B9.lengthSq()===0){if(Math.abs($.z)===1)TJ.x+=0.0001;else TJ.z+=0.0001;TJ.normalize(),B9.crossVectors($,TJ)}return B9.normalize(),s8.crossVectors(TJ,B9),Z[0]=B9.x,Z[4]=s8.x,Z[8]=TJ.x,Z[1]=B9.y,Z[5]=s8.y,Z[9]=TJ.y,Z[2]=B9.z,Z[6]=s8.z,Z[10]=TJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],N=$[5],q=$[9],G=$[13],F=$[2],L=$[6],z=$[10],D=$[14],E=$[3],_=$[7],C=$[11],V=$[15],I=Z[0],w=Z[4],P=Z[8],R=Z[12],B=Z[1],l=Z[5],A=Z[9],m=Z[13],o=Z[2],p=Z[6],n=Z[10],u=Z[14],h=Z[3],t=Z[7],e=Z[11],H0=Z[15];return W[0]=K*I+H*B+Y*o+X*h,W[4]=K*w+H*l+Y*p+X*t,W[8]=K*P+H*A+Y*n+X*e,W[12]=K*R+H*m+Y*u+X*H0,W[1]=U*I+N*B+q*o+G*h,W[5]=U*w+N*l+q*p+G*t,W[9]=U*P+N*A+q*n+G*e,W[13]=U*R+N*m+q*u+G*H0,W[2]=F*I+L*B+z*o+D*h,W[6]=F*w+L*l+z*p+D*t,W[10]=F*P+L*A+z*n+D*e,W[14]=F*R+L*m+z*u+D*H0,W[3]=E*I+_*B+C*o+V*h,W[7]=E*w+_*l+C*p+V*t,W[11]=E*P+_*A+C*n+V*e,W[15]=E*R+_*m+C*u+V*H0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],N=J[6],q=J[10],G=J[14],F=J[3],L=J[7],z=J[11],D=J[15],E=Y*G-X*q,_=H*G-X*N,C=H*q-Y*N,V=K*G-X*U,I=K*q-Y*U,w=K*N-H*U;return Q*(L*E-z*_+D*C)-$*(F*E-z*V+D*I)+Z*(F*_-L*V+D*w)-W*(F*C-L*I+z*w)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(W*U-H*Y)+Z*(W*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=J[9],q=J[10],G=J[11],F=J[12],L=J[13],z=J[14],D=J[15],E=Q*H-$*K,_=Q*Y-Z*K,C=Q*X-W*K,V=$*Y-Z*H,I=$*X-W*H,w=Z*X-W*Y,P=U*L-N*F,R=U*z-q*F,B=U*D-G*F,l=N*z-q*L,A=N*D-G*L,m=q*D-G*z,o=E*m-_*A+C*l+V*B-I*R+w*P;if(o===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let p=1/o;return J[0]=(H*m-Y*A+X*l)*p,J[1]=(Z*A-$*m-W*l)*p,J[2]=(L*w-z*I+D*V)*p,J[3]=(q*I-N*w-G*V)*p,J[4]=(Y*B-K*m-X*R)*p,J[5]=(Q*m-Z*B+W*R)*p,J[6]=(z*C-F*w-D*_)*p,J[7]=(U*w-q*C+G*_)*p,J[8]=(K*A-H*B+X*P)*p,J[9]=($*B-Q*A-W*P)*p,J[10]=(F*I-L*C+D*E)*p,J[11]=(N*C-U*I-G*E)*p,J[12]=(H*R-K*l-Y*P)*p,J[13]=(Q*l-$*R+Z*P)*p,J[14]=(L*_-F*V-z*E)*p,J[15]=(U*V-N*_+q*E)*p,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,K=J.x,H=J.y,Y=J.z,X=W*K,U=W*H;return this.set(X*K+$,X*H-Z*Y,X*Y+Z*H,0,X*H+Z*Y,U*H+$,U*Y-Z*K,0,X*Y-Z*H,U*Y+Z*K,W*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,K){return this.set(1,$,W,0,J,1,K,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=W+W,U=K+K,N=H+H,q=W*X,G=W*U,F=W*N,L=K*U,z=K*N,D=H*N,E=Y*X,_=Y*U,C=Y*N,V=$.x,I=$.y,w=$.z;return Z[0]=(1-(L+D))*V,Z[1]=(G+C)*V,Z[2]=(F-_)*V,Z[3]=0,Z[4]=(G-C)*I,Z[5]=(1-(q+D))*I,Z[6]=(z+E)*I,Z[7]=0,Z[8]=(F+_)*w,Z[9]=(z-E)*w,Z[10]=(1-(q+L))*w,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let W=this.determinantAffine();if(W===0)return $.set(1,1,1),Q.identity(),this;let K=$8.set(Z[0],Z[1],Z[2]).length(),H=$8.set(Z[4],Z[5],Z[6]).length(),Y=$8.set(Z[8],Z[9],Z[10]).length();if(W<0)K=-K;lJ.copy(this);let X=1/K,U=1/H,N=1/Y;return lJ.elements[0]*=X,lJ.elements[1]*=X,lJ.elements[2]*=X,lJ.elements[4]*=U,lJ.elements[5]*=U,lJ.elements[6]*=U,lJ.elements[8]*=N,lJ.elements[9]*=N,lJ.elements[10]*=N,Q.setFromRotationMatrix(lJ),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2*W/(Q-J),N=2*W/($-Z),q=(Q+J)/(Q-J),G=($+Z)/($-Z),F,L;if(Y)F=W/(K-W),L=K*W/(K-W);else if(H===2000)F=-(K+W)/(K-W),L=-2*K*W/(K-W);else if(H===2001)F=-K/(K-W),L=-K*W/(K-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=q,X[12]=0,X[1]=0,X[5]=N,X[9]=G,X[13]=0,X[2]=0,X[6]=0,X[10]=F,X[14]=L,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),N=2/($-Z),q=-(Q+J)/(Q-J),G=-($+Z)/($-Z),F,L;if(Y)F=1/(K-W),L=K/(K-W);else if(H===2000)F=-2/(K-W),L=-(K+W)/(K-W);else if(H===2001)F=-1/(K-W),L=-W/(K-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=q,X[1]=0,X[5]=N,X[9]=0,X[13]=G,X[2]=0,X[6]=0,X[10]=F,X[14]=L,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var $8=new b,lJ=new WJ,xW=new b(0,0,0),gW=new b(1,1,1),B9=new b,s8=new b,TJ=new b,O$=new WJ,R$=new O9;class P9{constructor(J=0,Q=0,$=0,Z=P9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],K=Z[4],H=Z[8],Y=Z[1],X=Z[5],U=Z[9],N=Z[2],q=Z[6],G=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(g0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-K,W);else this._x=Math.atan2(q,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-g0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,G),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-N,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(g0(q,-1,1)),Math.abs(q)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-g0(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(q,G),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(g0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-N,W);else this._x=0,this._y=Math.atan2(H,G);break;case"XZY":if(this._z=Math.asin(-g0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(q,X),this._y=Math.atan2(H,W);else this._x=Math.atan2(-U,G),this._y=0;break;default:C0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return O$.makeRotationFromQuaternion(J),this.setFromRotationMatrix(O$,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return R$.setFromEuler(this),this.setFromQuaternion(R$,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}P9.DEFAULT_ORDER="XYZ";class _6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var pW=0,k$=new b,Z8=new O9,H9=new WJ,i8=new b,C8=new b,mW=new b,dW=new O9,M$=new b(1,0,0),L$=new b(0,1,0),V$=new b(0,0,1),B$={type:"added"},lW={type:"removed"},W8={type:"childadded",child:null},Q7={type:"childremoved",child:null};class wJ extends F9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:pW++}),this.uuid=h8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wJ.DEFAULT_UP.clone();let J=new b,Q=new P9,$=new O9,Z=new b(1,1,1);function W(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new WJ},normalMatrix:{value:new _0}}),this.matrix=new WJ,this.matrixWorld=new WJ,this.matrixAutoUpdate=wJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return Z8.setFromAxisAngle(J,Q),this.quaternion.multiply(Z8),this}rotateOnWorldAxis(J,Q){return Z8.setFromAxisAngle(J,Q),this.quaternion.premultiply(Z8),this}rotateX(J){return this.rotateOnAxis(M$,J)}rotateY(J){return this.rotateOnAxis(L$,J)}rotateZ(J){return this.rotateOnAxis(V$,J)}translateOnAxis(J,Q){return k$.copy(J).applyQuaternion(this.quaternion),this.position.add(k$.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(M$,J)}translateY(J){return this.translateOnAxis(L$,J)}translateZ(J){return this.translateOnAxis(V$,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(H9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)i8.copy(J);else i8.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),C8.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)H9.lookAt(C8,i8,this.up);else H9.lookAt(i8,C8,this.up);if(this.quaternion.setFromRotationMatrix(H9),Z)H9.extractRotation(Z.matrixWorld),Z8.setFromRotationMatrix(H9),this.quaternion.premultiply(Z8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return P0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(B$),W8.child=J,this.dispatchEvent(W8),W8.child=null;else P0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(lW),Q7.child=J,this.dispatchEvent(Q7),Q7.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),H9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),H9.multiply(J.parent.matrixWorld);return J.applyMatrix4(H9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(B$),W8.child=J,this.dispatchEvent(W8),W8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(C8,J,mW),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(C8,dW,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*$-W[8]*Z,W[13]+=$-W[1]*Q-W[5]*$-W[9]*Z,W[14]+=Z-W[2]*Q-W[6]*$-W[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let W=this.children;for(let K=0,H=W.length;K<H;K++)W[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((H)=>({...H})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let N=Y[X];W(J.shapes,N)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(W(J.materials,this.material[Y]));Z.material=H}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let H=0;H<this.children.length;H++)Z.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];Z.animations.push(W(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),N=K(J.shapes),q=K(J.skeletons),G=K(J.animations),F=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(N.length>0)$.shapes=N;if(q.length>0)$.skeletons=q;if(G.length>0)$.animations=G;if(F.length>0)$.nodes=F}return $.object=Z,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}wJ.DEFAULT_UP=new b(0,1,0);wJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;wJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class E8 extends wJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var uW={type:"move"};class g8{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new E8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new E8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new E8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let L of J.hand.values()){let z=Q.getJointPose(L,$),D=this._getHandJoint(X,L);if(z!==null)D.matrix.fromArray(z.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,D.jointRadius=z.radius;D.visible=z!==null}let U=X.joints["index-finger-tip"],N=X.joints["thumb-tip"],q=U.position.distanceTo(N.position),G=0.02,F=0.005;if(X.inputState.pinching&&q>G+F)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&q<=G-F)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(H.matrix.fromArray(Z.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,Z.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(Z.linearVelocity);else H.hasLinearVelocity=!1;if(Z.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(Z.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(uW)}}}if(H!==null)H.visible=Z!==null;if(Y!==null)Y.visible=W!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new E8;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var vZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},z9={h:0,s:0,l:0},o8={h:0,s:0,l:0};function $7(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class l0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,x0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=x0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,x0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=x0.workingColorSpace){if(J=vW(J,1),Q=g0(Q,0,1),$=g0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-W;this.r=$7(K,W,J+0.3333333333333333),this.g=$7(K,W,J),this.b=$7(K,W,J-0.3333333333333333)}return x0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)C0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,K=Z[1],H=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:C0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(W,16),Q);else C0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=vZ[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else C0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=q9(J.r),this.g=q9(J.g),this.b=q9(J.b),this}copyLinearToSRGB(J){return this.r=D8(J.r),this.g=D8(J.g),this.b=D8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return x0.workingToColorSpace(VJ.copy(this),J),Math.round(g0(VJ.r*255,0,255))*65536+Math.round(g0(VJ.g*255,0,255))*256+Math.round(g0(VJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=x0.workingColorSpace){x0.workingToColorSpace(VJ.copy(this),Q);let{r:$,g:Z,b:W}=VJ,K=Math.max($,Z,W),H=Math.min($,Z,W),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let N=K-H;switch(X=U<=0.5?N/(K+H):N/(2-K-H),K){case $:Y=(Z-W)/N+(Z<W?6:0);break;case Z:Y=(W-$)/N+2;break;case W:Y=($-Z)/N+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=x0.workingColorSpace){return x0.workingToColorSpace(VJ.copy(this),Q),J.r=VJ.r,J.g=VJ.g,J.b=VJ.b,J}getStyle(J="srgb"){x0.workingToColorSpace(VJ.copy(this),J);let{r:Q,g:$,b:Z}=VJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(z9),this.setHSL(z9.h+J,z9.s+Q,z9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(z9),J.getHSL(o8);let $=a6(z9.h,o8.h,Q),Z=a6(z9.s,o8.s,Q),W=a6(z9.l,o8.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var VJ=new l0;l0.NAMES=vZ;class T6 extends wJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new P9,this.environmentIntensity=1,this.environmentRotation=new P9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var uJ=new b,Y9=new b,Z7=new b,X9=new b,K8=new b,H8=new b,z$=new b,W7=new b,K7=new b,H7=new b,Y7=new KJ,X7=new KJ,U7=new KJ;class pJ{constructor(J=new b,Q=new b,$=new b){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),uJ.subVectors(J,Q),Z.cross(uJ);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){uJ.subVectors(Z,Q),Y9.subVectors($,Q),Z7.subVectors(J,Q);let K=uJ.dot(uJ),H=uJ.dot(Y9),Y=uJ.dot(Z7),X=Y9.dot(Y9),U=Y9.dot(Z7),N=K*X-H*H;if(N===0)return W.set(0,0,0),null;let q=1/N,G=(X*Y-H*U)*q,F=(K*U-H*Y)*q;return W.set(1-G-F,F,G)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,X9)===null)return!1;return X9.x>=0&&X9.y>=0&&X9.x+X9.y<=1}static getInterpolation(J,Q,$,Z,W,K,H,Y){if(this.getBarycoord(J,Q,$,Z,X9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,X9.x),Y.addScaledVector(K,X9.y),Y.addScaledVector(H,X9.z),Y}static getInterpolatedAttribute(J,Q,$,Z,W,K){return Y7.setScalar(0),X7.setScalar(0),U7.setScalar(0),Y7.fromBufferAttribute(J,Q),X7.fromBufferAttribute(J,$),U7.fromBufferAttribute(J,Z),K.setScalar(0),K.addScaledVector(Y7,W.x),K.addScaledVector(X7,W.y),K.addScaledVector(U7,W.z),K}static isFrontFacing(J,Q,$,Z){return uJ.subVectors($,Q),Y9.subVectors(J,Q),uJ.cross(Y9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return uJ.subVectors(this.c,this.b),Y9.subVectors(this.a,this.b),uJ.cross(Y9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return pJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return pJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return pJ.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return pJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return pJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,K,H;K8.subVectors(Z,$),H8.subVectors(W,$),W7.subVectors(J,$);let Y=K8.dot(W7),X=H8.dot(W7);if(Y<=0&&X<=0)return Q.copy($);K7.subVectors(J,Z);let U=K8.dot(K7),N=H8.dot(K7);if(U>=0&&N<=U)return Q.copy(Z);let q=Y*N-U*X;if(q<=0&&Y>=0&&U<=0)return K=Y/(Y-U),Q.copy($).addScaledVector(K8,K);H7.subVectors(J,W);let G=K8.dot(H7),F=H8.dot(H7);if(F>=0&&G<=F)return Q.copy(W);let L=G*X-Y*F;if(L<=0&&X>=0&&F<=0)return H=X/(X-F),Q.copy($).addScaledVector(H8,H);let z=U*F-G*N;if(z<=0&&N-U>=0&&G-F>=0)return z$.subVectors(W,Z),H=(N-U)/(N-U+(G-F)),Q.copy(Z).addScaledVector(z$,H);let D=1/(z+L+q);return K=L*D,H=q*D,Q.copy($).addScaledVector(K8,K).addScaledVector(H8,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class c9{constructor(J=new b(1/0,1/0,1/0),Q=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(cJ.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(cJ.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=cJ.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let K=0,H=W.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,cJ);else cJ.fromBufferAttribute(W,K);cJ.applyMatrix4(J.matrixWorld),this.expandByPoint(cJ)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();a8.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();a8.copy($.boundingBox)}a8.applyMatrix4(J.matrixWorld),this.union(a8)}}let Z=J.children;for(let W=0,K=Z.length;W<K;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,cJ),cJ.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(P8),r8.subVectors(this.max,P8),Y8.subVectors(J.a,P8),X8.subVectors(J.b,P8),U8.subVectors(J.c,P8),w9.subVectors(X8,Y8),I9.subVectors(U8,X8),v9.subVectors(Y8,U8);let Q=[0,-w9.z,w9.y,0,-I9.z,I9.y,0,-v9.z,v9.y,w9.z,0,-w9.x,I9.z,0,-I9.x,v9.z,0,-v9.x,-w9.y,w9.x,0,-I9.y,I9.x,0,-v9.y,v9.x,0];if(!G7(Q,Y8,X8,U8,r8))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!G7(Q,Y8,X8,U8,r8))return!1;return t8.crossVectors(w9,I9),Q=[t8.x,t8.y,t8.z],G7(Q,Y8,X8,U8,r8)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,cJ).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(cJ).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return U9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),U9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),U9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),U9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),U9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),U9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),U9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),U9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(U9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var U9=[new b,new b,new b,new b,new b,new b,new b,new b],cJ=new b,a8=new c9,Y8=new b,X8=new b,U8=new b,w9=new b,I9=new b,v9=new b,P8=new b,r8=new b,t8=new b,f9=new b;function G7(J,Q,$,Z,W){for(let K=0,H=J.length-3;K<=H;K+=3){f9.fromArray(J,K);let Y=W.x*Math.abs(f9.x)+W.y*Math.abs(f9.y)+W.z*Math.abs(f9.z),X=Q.dot(f9),U=$.dot(f9),N=Z.dot(f9);if(Math.max(-Math.max(X,U,N),Math.min(X,U,N))>Y)return!1}return!0}var GJ=new b,e8=new v0,cW=0;class NJ extends F9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cW++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)e8.fromBufferAttribute(this,Q),e8.applyMatrix3(J),this.setXY(Q,e8.x,e8.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)GJ.fromBufferAttribute(this,Q),GJ.applyMatrix3(J),this.setXYZ(Q,GJ.x,GJ.y,GJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)GJ.fromBufferAttribute(this,Q),GJ.applyMatrix4(J),this.setXYZ(Q,GJ.x,GJ.y,GJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)GJ.fromBufferAttribute(this,Q),GJ.applyNormalMatrix(J),this.setXYZ(Q,GJ.x,GJ.y,GJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)GJ.fromBufferAttribute(this,Q),GJ.transformDirection(J),this.setXYZ(Q,GJ.x,GJ.y,GJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=A8($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=AJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=A8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=AJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=A8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=AJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=A8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=AJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=A8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=AJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=AJ(Q,this.array),$=AJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=AJ(Q,this.array),$=AJ($,this.array),Z=AJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=AJ(Q,this.array),$=AJ($,this.array),Z=AJ(Z,this.array),W=AJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class S6 extends NJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class j6 extends NJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class nJ extends NJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var nW=new c9,_8=new b,N7=new b;class V8{constructor(J=new b,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else nW.setFromPoints(J).getCenter($);let Z=0;for(let W=0,K=J.length;W<K;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;_8.subVectors(J,this.center);let Q=_8.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(_8,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else N7.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(_8.copy(J.center).add(N7)),this.expandByPoint(_8.copy(J.center).sub(N7));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var sW=0,gJ=new WJ,q7=new wJ,G8=new b,SJ=new c9,T8=new c9,RJ=new b;class yJ extends F9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sW++}),this.uuid=h8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((jW(J))?j6:S6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new _0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return gJ.makeRotationFromQuaternion(J),this.applyMatrix4(gJ),this}rotateX(J){return gJ.makeRotationX(J),this.applyMatrix4(gJ),this}rotateY(J){return gJ.makeRotationY(J),this.applyMatrix4(gJ),this}rotateZ(J){return gJ.makeRotationZ(J),this.applyMatrix4(gJ),this}translate(J,Q,$){return gJ.makeTranslation(J,Q,$),this.applyMatrix4(gJ),this}scale(J,Q,$){return gJ.makeScale(J,Q,$),this.applyMatrix4(gJ),this}lookAt(J){return q7.lookAt(J),q7.updateMatrix(),this.applyMatrix4(q7.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(G8).negate(),this.translate(G8.x,G8.y,G8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new nJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)C0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new c9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){P0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(SJ.setFromBufferAttribute(W),this.morphTargetsRelative)RJ.addVectors(this.boundingBox.min,SJ.min),this.boundingBox.expandByPoint(RJ),RJ.addVectors(this.boundingBox.max,SJ.max),this.boundingBox.expandByPoint(RJ);else this.boundingBox.expandByPoint(SJ.min),this.boundingBox.expandByPoint(SJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))P0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new V8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){P0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(J){let $=this.boundingSphere.center;if(SJ.setFromBufferAttribute(J),Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W];if(T8.setFromBufferAttribute(H),this.morphTargetsRelative)RJ.addVectors(SJ.min,T8.min),SJ.expandByPoint(RJ),RJ.addVectors(SJ.max,T8.max),SJ.expandByPoint(RJ);else SJ.expandByPoint(T8.min),SJ.expandByPoint(T8.max)}SJ.getCenter($);let Z=0;for(let W=0,K=J.count;W<K;W++)RJ.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(RJ));if(Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(RJ.fromBufferAttribute(H,X),Y)G8.fromBufferAttribute(J,X),RJ.add(G8);Z=Math.max(Z,$.distanceToSquared(RJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))P0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){P0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new NJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[];for(let P=0;P<$.count;P++)H[P]=new b,Y[P]=new b;let X=new b,U=new b,N=new b,q=new v0,G=new v0,F=new v0,L=new b,z=new b;function D(P,R,B){X.fromBufferAttribute($,P),U.fromBufferAttribute($,R),N.fromBufferAttribute($,B),q.fromBufferAttribute(W,P),G.fromBufferAttribute(W,R),F.fromBufferAttribute(W,B),U.sub(X),N.sub(X),G.sub(q),F.sub(q);let l=1/(G.x*F.y-F.x*G.y);if(!isFinite(l))return;L.copy(U).multiplyScalar(F.y).addScaledVector(N,-G.y).multiplyScalar(l),z.copy(N).multiplyScalar(G.x).addScaledVector(U,-F.x).multiplyScalar(l),H[P].add(L),H[R].add(L),H[B].add(L),Y[P].add(z),Y[R].add(z),Y[B].add(z)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let P=0,R=E.length;P<R;++P){let B=E[P],l=B.start,A=B.count;for(let m=l,o=l+A;m<o;m+=3)D(J.getX(m+0),J.getX(m+1),J.getX(m+2))}let _=new b,C=new b,V=new b,I=new b;function w(P){V.fromBufferAttribute(Z,P),I.copy(V);let R=H[P];_.copy(R),_.sub(V.multiplyScalar(V.dot(R))).normalize(),C.crossVectors(I,R);let l=C.dot(Y[P])<0?-1:1;K.setXYZW(P,_.x,_.y,_.z,l)}for(let P=0,R=E.length;P<R;++P){let B=E[P],l=B.start,A=B.count;for(let m=l,o=l+A;m<o;m+=3)w(J.getX(m+0)),w(J.getX(m+1)),w(J.getX(m+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new NJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let q=0,G=$.count;q<G;q++)$.setXYZ(q,0,0,0);let Z=new b,W=new b,K=new b,H=new b,Y=new b,X=new b,U=new b,N=new b;if(J)for(let q=0,G=J.count;q<G;q+=3){let F=J.getX(q+0),L=J.getX(q+1),z=J.getX(q+2);Z.fromBufferAttribute(Q,F),W.fromBufferAttribute(Q,L),K.fromBufferAttribute(Q,z),U.subVectors(K,W),N.subVectors(Z,W),U.cross(N),H.fromBufferAttribute($,F),Y.fromBufferAttribute($,L),X.fromBufferAttribute($,z),H.add(U),Y.add(U),X.add(U),$.setXYZ(F,H.x,H.y,H.z),$.setXYZ(L,Y.x,Y.y,Y.z),$.setXYZ(z,X.x,X.y,X.z)}else for(let q=0,G=Q.count;q<G;q+=3)Z.fromBufferAttribute(Q,q+0),W.fromBufferAttribute(Q,q+1),K.fromBufferAttribute(Q,q+2),U.subVectors(K,W),N.subVectors(Z,W),U.cross(N),$.setXYZ(q+0,U.x,U.y,U.z),$.setXYZ(q+1,U.x,U.y,U.z),$.setXYZ(q+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)RJ.fromBufferAttribute(J,Q),RJ.normalize(),J.setXYZ(Q,RJ.x,RJ.y,RJ.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:N}=H,q=new X.constructor(Y.length*U),G=0,F=0;for(let L=0,z=Y.length;L<z;L++){if(H.isInterleavedBufferAttribute)G=Y[L]*H.data.stride+H.offset;else G=Y[L]*U;for(let D=0;D<U;D++)q[F++]=X[G++]}return new NJ(q,U,N)}if(this.index===null)return C0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new yJ,$=this.index.array,Z=this.attributes;for(let H in Z){let Y=Z[H],X=J(Y,$);Q.setAttribute(H,X)}let W=this.morphAttributes;for(let H in W){let Y=[],X=W[H];for(let U=0,N=X.length;U<N;U++){let q=X[U],G=J(q,$);Y.push(G)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let Z={},W=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let N=0,q=X.length;N<q;N++){let G=X[N];U.push(G.toJSON(J.data))}if(U.length>0)Z[Y]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let X in Z){let U=Z[X];this.setAttribute(X,U.clone(Q))}let W=J.morphAttributes;for(let X in W){let U=[],N=W[X];for(let q=0,G=N.length;q<G;q++)U.push(N[q].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let N=K[X];this.addGroup(N.start,N.count,N.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var iW=0;class n9 extends F9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:iW++}),this.uuid=h8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new l0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){C0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){C0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let K=[];for(let H in W){let Y=W[H];delete Y.metadata,K.push(Y)}return K}if(Q){let W=Z(J.textures),K=Z(J.images);if(W.length>0)$.textures=W;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new l0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new v0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new v0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var G9=new b,E7=new b,J6=new b,A9=new b,D7=new b,Q6=new b,F7=new b;class y6{constructor(J=new b,Q=new b(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,G9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=G9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return G9.copy(this.origin).addScaledVector(this.direction,Q),G9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){E7.copy(J).add(Q).multiplyScalar(0.5),J6.copy(Q).sub(J).normalize(),A9.copy(this.origin).sub(E7);let W=J.distanceTo(Q)*0.5,K=-this.direction.dot(J6),H=A9.dot(this.direction),Y=-A9.dot(J6),X=A9.lengthSq(),U=Math.abs(1-K*K),N,q,G,F;if(U>0)if(N=K*Y-H,q=K*H-Y,F=W*U,N>=0)if(q>=-F)if(q<=F){let L=1/U;N*=L,q*=L,G=N*(N+K*q+2*H)+q*(K*N+q+2*Y)+X}else q=W,N=Math.max(0,-(K*q+H)),G=-N*N+q*(q+2*Y)+X;else q=-W,N=Math.max(0,-(K*q+H)),G=-N*N+q*(q+2*Y)+X;else if(q<=-F)N=Math.max(0,-(-K*W+H)),q=N>0?-W:Math.min(Math.max(-W,-Y),W),G=-N*N+q*(q+2*Y)+X;else if(q<=F)N=0,q=Math.min(Math.max(-W,-Y),W),G=q*(q+2*Y)+X;else N=Math.max(0,-(K*W+H)),q=N>0?W:Math.min(Math.max(-W,-Y),W),G=-N*N+q*(q+2*Y)+X;else q=K>0?-W:W,N=Math.max(0,-(K*q+H)),G=-N*N+q*(q+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(E7).addScaledVector(J6,q);return G}intersectSphere(J,Q){G9.subVectors(J.center,this.origin);let $=G9.dot(this.direction),Z=G9.dot(G9)-$*$,W=J.radius*J.radius;if(Z>W)return null;let K=Math.sqrt(W-Z),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,q=this.origin;if(X>=0)$=(J.min.x-q.x)*X,Z=(J.max.x-q.x)*X;else $=(J.max.x-q.x)*X,Z=(J.min.x-q.x)*X;if(U>=0)W=(J.min.y-q.y)*U,K=(J.max.y-q.y)*U;else W=(J.max.y-q.y)*U,K=(J.min.y-q.y)*U;if($>K||W>Z)return null;if(W>$||isNaN($))$=W;if(K<Z||isNaN(Z))Z=K;if(N>=0)H=(J.min.z-q.z)*N,Y=(J.max.z-q.z)*N;else H=(J.max.z-q.z)*N,Y=(J.min.z-q.z)*N;if($>Y||H>Z)return null;if(H>$||$!==$)$=H;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,G9)!==null}intersectTriangle(J,Q,$,Z,W){D7.subVectors(Q,J),Q6.subVectors($,J),F7.crossVectors(D7,Q6);let K=this.direction.dot(F7),H;if(K>0){if(Z)return null;H=1}else if(K<0)H=-1,K=-K;else return null;A9.subVectors(this.origin,J);let Y=H*this.direction.dot(Q6.crossVectors(A9,Q6));if(Y<0)return null;let X=H*this.direction.dot(D7.cross(A9));if(X<0)return null;if(Y+X>K)return null;let U=-H*A9.dot(F7);if(U<0)return null;return this.at(U/K,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class v6 extends n9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new l0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new P9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var w$=new WJ,b9=new y6,$6=new V8,I$=new b,Z6=new b,W6=new b,K6=new b,O7=new b,H6=new b,A$=new b,Y6=new b;class vJ extends wJ{constructor(J=new yJ,Q=new v6){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let H=this.morphTargetInfluences;if(W&&H){H6.set(0,0,0);for(let Y=0,X=W.length;Y<X;Y++){let U=H[Y],N=W[Y];if(U===0)continue;if(O7.fromBufferAttribute(N,J),K)H6.addScaledVector(O7,U);else H6.addScaledVector(O7.sub(Q),U)}Q.add(H6)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if($6.copy($.boundingSphere),$6.applyMatrix4(W),b9.copy(J.ray).recast(J.near),$6.containsPoint(b9.origin)===!1){if(b9.intersectSphere($6,I$)===null)return;if(b9.origin.distanceToSquared(I$)>(J.far-J.near)**2)return}if(w$.copy(W).invert(),b9.copy(J.ray).applyMatrix4(w$),$.boundingBox!==null){if(b9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,b9)}_computeIntersections(J,Q,$){let Z,W=this.geometry,K=this.material,H=W.index,Y=W.attributes.position,X=W.attributes.uv,U=W.attributes.uv1,N=W.attributes.normal,q=W.groups,G=W.drawRange;if(H!==null)if(Array.isArray(K))for(let F=0,L=q.length;F<L;F++){let z=q[F],D=K[z.materialIndex],E=Math.max(z.start,G.start),_=Math.min(H.count,Math.min(z.start+z.count,G.start+G.count));for(let C=E,V=_;C<V;C+=3){let I=H.getX(C),w=H.getX(C+1),P=H.getX(C+2);if(Z=X6(this,D,J,$,X,U,N,I,w,P),Z)Z.faceIndex=Math.floor(C/3),Z.face.materialIndex=z.materialIndex,Q.push(Z)}}else{let F=Math.max(0,G.start),L=Math.min(H.count,G.start+G.count);for(let z=F,D=L;z<D;z+=3){let E=H.getX(z),_=H.getX(z+1),C=H.getX(z+2);if(Z=X6(this,K,J,$,X,U,N,E,_,C),Z)Z.faceIndex=Math.floor(z/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(K))for(let F=0,L=q.length;F<L;F++){let z=q[F],D=K[z.materialIndex],E=Math.max(z.start,G.start),_=Math.min(Y.count,Math.min(z.start+z.count,G.start+G.count));for(let C=E,V=_;C<V;C+=3){let I=C,w=C+1,P=C+2;if(Z=X6(this,D,J,$,X,U,N,I,w,P),Z)Z.faceIndex=Math.floor(C/3),Z.face.materialIndex=z.materialIndex,Q.push(Z)}}else{let F=Math.max(0,G.start),L=Math.min(Y.count,G.start+G.count);for(let z=F,D=L;z<D;z+=3){let E=z,_=z+1,C=z+2;if(Z=X6(this,K,J,$,X,U,N,E,_,C),Z)Z.faceIndex=Math.floor(z/3),Q.push(Z)}}}}function oW(J,Q,$,Z,W,K,H,Y){let X;if(Q.side===1)X=Z.intersectTriangle(H,K,W,!0,Y);else X=Z.intersectTriangle(W,K,H,Q.side===0,Y);if(X===null)return null;Y6.copy(Y),Y6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(Y6);if(U<$.near||U>$.far)return null;return{distance:U,point:Y6.clone(),object:J}}function X6(J,Q,$,Z,W,K,H,Y,X,U){J.getVertexPosition(Y,Z6),J.getVertexPosition(X,W6),J.getVertexPosition(U,K6);let N=oW(J,Q,$,Z,Z6,W6,K6,A$);if(N){let q=new b;if(pJ.getBarycoord(A$,Z6,W6,K6,q),W)N.uv=pJ.getInterpolatedAttribute(W,Y,X,U,q,new v0);if(K)N.uv1=pJ.getInterpolatedAttribute(K,Y,X,U,q,new v0);if(H){if(N.normal=pJ.getInterpolatedAttribute(H,Y,X,U,q,new b),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let G={a:Y,b:X,c:U,normal:new b,materialIndex:0};pJ.getNormal(Z6,W6,K6,G.normal),N.face=G,N.barycoord=q}return N}class BQ extends BJ{constructor(J=null,Q=1,$=1,Z,W,K,H,Y,X=1003,U=1003,N,q){super(null,K,H,Y,X,U,Z,W,N,q);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var R7=new b,aW=new b,rW=new _0;class N9{constructor(J=new b(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=R7.subVectors($,Q).cross(aW.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(R7),W=this.normal.dot(Z);if(W===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/W;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(Z,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||rW.getNormalMatrix(J),Z=this.coplanarPoint(R7).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var h9=new V8,tW=new v0(0.5,0.5),U6=new b;class f6{constructor(J=new N9,Q=new N9,$=new N9,Z=new N9,W=new N9,K=new N9){this.planes=[J,Q,$,Z,W,K]}set(J,Q,$,Z,W,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(Z),H[4].copy(W),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,K=W[0],H=W[1],Y=W[2],X=W[3],U=W[4],N=W[5],q=W[6],G=W[7],F=W[8],L=W[9],z=W[10],D=W[11],E=W[12],_=W[13],C=W[14],V=W[15];if(Z[0].setComponents(X-K,G-U,D-F,V-E).normalize(),Z[1].setComponents(X+K,G+U,D+F,V+E).normalize(),Z[2].setComponents(X+H,G+N,D+L,V+_).normalize(),Z[3].setComponents(X-H,G-N,D-L,V-_).normalize(),$)Z[4].setComponents(Y,q,z,C).normalize(),Z[5].setComponents(X-Y,G-q,D-z,V-C).normalize();else if(Z[4].setComponents(X-Y,G-q,D-z,V-C).normalize(),Q===2000)Z[5].setComponents(X+Y,G+q,D+z,V+C).normalize();else if(Q===2001)Z[5].setComponents(Y,q,z,C).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();h9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();h9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(h9)}intersectsSprite(J){h9.center.set(0,0,0);let Q=tW.distanceTo(J.center);return h9.radius=0.7071067811865476+Q,h9.applyMatrix4(J.matrixWorld),this.intersectsSphere(h9)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(U6.x=Z.normal.x>0?J.max.x:J.min.x,U6.y=Z.normal.y>0?J.max.y:J.min.y,U6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(U6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zQ extends n9{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new l0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var C$=new WJ,k7=new y6,G6=new V8,N6=new b;class b6 extends wJ{constructor(J=new yJ,Q=new zQ){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(G6.copy($.boundingSphere),G6.applyMatrix4(Z),G6.radius+=W,J.ray.intersectsSphere(G6)===!1)return;C$.copy(Z).invert(),k7.copy(J.ray).applyMatrix4(C$);let H=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=$.index,N=$.attributes.position;if(X!==null){let q=Math.max(0,K.start),G=Math.min(X.count,K.start+K.count);for(let F=q,L=G;F<L;F++){let z=X.getX(F);N6.fromBufferAttribute(N,z),P$(N6,z,Y,Z,J,Q,this)}}else{let q=Math.max(0,K.start),G=Math.min(N.count,K.start+K.count);for(let F=q,L=G;F<L;F++)N6.fromBufferAttribute(N,F),P$(N6,F,Y,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}}function P$(J,Q,$,Z,W,K,H){let Y=k7.distanceSqToPoint(J);if(Y<$){let X=new b;k7.closestPointToPoint(J,X),X.applyMatrix4(Z);let U=W.ray.origin.distanceTo(X);if(U<W.near||U>W.far)return;K.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class h6 extends BJ{constructor(J=[],Q=301,$,Z,W,K,H,Y,X,U){super(J,Q,$,Z,W,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class S9 extends BJ{constructor(J,Q,$=1014,Z,W,K,H=1003,Y=1003,X,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let q={width:J,height:Q,depth:N};super(q,Z,W,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new x8(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class wQ extends S9{constructor(J,Q=1014,$=301,Z,W,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,Q,$,Z,W,K,H,Y,X);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class x6 extends BJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class B8 extends yJ{constructor(J=1,Q=1,$=1,Z=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:K};let H=this;Z=Math.floor(Z),W=Math.floor(W),K=Math.floor(K);let Y=[],X=[],U=[],N=[],q=0,G=0;F("z","y","x",-1,-1,$,Q,J,K,W,0),F("z","y","x",1,-1,$,Q,-J,K,W,1),F("x","z","y",1,1,J,$,Q,Z,K,2),F("x","z","y",1,-1,J,$,-Q,Z,K,3),F("x","y","z",1,-1,J,Q,$,Z,W,4),F("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(Y),this.setAttribute("position",new nJ(X,3)),this.setAttribute("normal",new nJ(U,3)),this.setAttribute("uv",new nJ(N,2));function F(L,z,D,E,_,C,V,I,w,P,R){let B=C/w,l=V/P,A=C/2,m=V/2,o=I/2,p=w+1,n=P+1,u=0,h=0,t=new b;for(let e=0;e<n;e++){let H0=e*l-m;for(let M0=0;M0<p;M0++){let k0=M0*B-A;t[L]=k0*E,t[z]=H0*_,t[D]=o,X.push(t.x,t.y,t.z),t[L]=0,t[z]=0,t[D]=I>0?1:-1,U.push(t.x,t.y,t.z),N.push(M0/w),N.push(1-e/P),u+=1}}for(let e=0;e<P;e++)for(let H0=0;H0<w;H0++){let M0=q+H0+p*e,k0=q+H0+p*(e+1),ZJ=q+(H0+1)+p*(e+1),i0=q+(H0+1)+p*e;Y.push(M0,k0,i0),Y.push(k0,ZJ,i0),h+=6}H.addGroup(G,h,R),G+=h,q+=u}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new B8(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class s9 extends yJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(Z),X=H+1,U=Y+1,N=J/H,q=Q/Y,G=[],F=[],L=[],z=[];for(let D=0;D<U;D++){let E=D*q-K;for(let _=0;_<X;_++){let C=_*N-W;F.push(C,-E,0),L.push(0,0,1),z.push(_/H),z.push(1-D/Y)}}for(let D=0;D<Y;D++)for(let E=0;E<H;E++){let _=E+X*D,C=E+X*(D+1),V=E+1+X*(D+1),I=E+1+X*D;G.push(_,C,I),G.push(C,V,I)}this.setIndex(G),this.setAttribute("position",new nJ(F,3)),this.setAttribute("normal",new nJ(L,3)),this.setAttribute("uv",new nJ(z,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new s9(J.width,J.height,J.widthSegments,J.heightSegments)}}function i9(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(_$(W))if(W.isRenderTargetTexture)C0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))if(_$(W[0])){let K=[];for(let H=0,Y=W.length;H<Y;H++)K[H]=W[H].clone();Q[$][Z]=K}else Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function zJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=i9(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function _$(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function eW(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function IQ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return x0.workingColorSpace}var fZ={clone:i9,merge:zJ},JK=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QK=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class IJ extends n9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JK,this.fragmentShader=QK,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=i9(J.uniforms),this.uniformsGroups=eW(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let K=this.uniforms[Z].value;if(K&&K.isTexture)Q.uniforms[Z]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[Z]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[Z]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[Z]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[Z]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[Z]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[Z]={type:"m4",value:K.toArray()};else Q.uniforms[Z]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new l0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new v0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new b().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new KJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new _0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new WJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class AQ extends IJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CQ extends n9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class PQ extends n9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function q6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class o9{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let K;Q:{Z:if(!(J<Z)){for(let H=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(W=Z,Z=Q[++$],J<Z)break J}K=Q.length;break Q}if(!(J>=W)){let H=Q[1];if(J<H)$=2,W=H;for(let Y=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=W,W=Q[--$-1],J>=W)break J}K=$,$=0;break Q}break $}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let K=0;K!==Z;++K)Q[K]=$[W+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class _Q extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,K=J+1,H=Z[W],Y=Z[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,H=2*Q-$;break;case 2402:W=Z.length-2,H=Q+Z[W]-Z[W+1];break;default:W=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+Z[1]-Z[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=W*U,this._offsetNext=K*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,N=this._offsetNext,q=this._weightPrev,G=this._weightNext,F=($-Q)/(Z-Q),L=F*F,z=L*F,D=-q*z+2*q*L-q*F,E=(1+q)*z+(-1.5-2*q)*L+(-0.5+q)*F+1,_=(-1-G)*z+(1.5+G)*L+0.5*F,C=G*z-G*L;for(let V=0;V!==H;++V)W[V]=D*K[U+V]+E*K[X+V]+_*K[Y+V]+C*K[N+V];return W}}class TQ extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(Z-Q),N=1-U;for(let q=0;q!==H;++q)W[q]=K[X+q]*N+K[Y+q]*U;return W}}class SQ extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class jQ extends o9{interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,N=this.outTangents;if(!U||!N){let F=($-Q)/(Z-Q),L=1-F;for(let z=0;z!==H;++z)W[z]=K[X+z]*L+K[Y+z]*F;return W}let q=H*2,G=J-1;for(let F=0;F!==H;++F){let L=K[X+F],z=K[Y+F],D=G*q+F*2,E=N[D],_=N[D+1],C=J*q+F*2,V=U[C],I=U[C+1],w=($-Q)/(Z-Q),P,R,B,l,A;for(let m=0;m<8;m++){P=w*w,R=P*w,B=1-w,l=B*B,A=l*B;let p=A*Q+3*l*w*E+3*B*P*V+R*Z-$;if(Math.abs(p)<0.0000000001)break;let n=3*l*(E-Q)+6*B*w*(V-E)+3*P*(Z-V);if(Math.abs(n)<0.0000000001)break;w=w-p/n,w=Math.max(0,Math.min(1,w))}W[F]=A*L+3*l*w*_+3*B*P*I+R*z}return W}}class dJ{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=q6(Q,this.TimeBufferType),this.values=q6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:q6(J.times,Array),values:q6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new SQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new TQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new _Q(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new jQ(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return C0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,K=Z-1;while(W!==Z&&$[W]<J)++W;while(K!==-1&&$[K]>Q)--K;if(++K,W!==0||K!==Z){if(W>=K)K=Math.max(K,1),W=K-1;let H=this.getValueSize();this.times=$.slice(W,K),this.values=this.values.slice(W*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)P0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)P0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==W;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){P0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){P0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(Z!==void 0){if(yW(Z))for(let H=0,Y=Z.length;H!==Y;++H){let X=Z[H];if(isNaN(X)){P0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,K=1;for(let H=1;H<W;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!Z){let N=H*$,q=N-$,G=N+$;for(let F=0;F!==$;++F){let L=Q[N+F];if(L!==Q[q+F]||L!==Q[G+F]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let N=H*$,q=K*$;for(let G=0;G!==$;++G)Q[q+G]=Q[N+G]}++K}}if(W>0){J[K]=J[W];for(let H=W*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}dJ.prototype.ValueTypeName="";dJ.prototype.TimeBufferType=Float32Array;dJ.prototype.ValueBufferType=Float32Array;dJ.prototype.DefaultInterpolation=2301;class a9 extends dJ{constructor(J,Q,$){super(J,Q,$)}}a9.prototype.ValueTypeName="bool";a9.prototype.ValueBufferType=Array;a9.prototype.DefaultInterpolation=2300;a9.prototype.InterpolantFactoryMethodLinear=void 0;a9.prototype.InterpolantFactoryMethodSmooth=void 0;class yQ extends dJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}yQ.prototype.ValueTypeName="color";class vQ extends dJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}vQ.prototype.ValueTypeName="number";class fQ extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(Z-Q),X=J*H;for(let U=X+H;X!==U;X+=4)O9.slerpFlat(W,0,K,X-H,K,X,Y);return W}}class g6 extends dJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new fQ(this.times,this.values,this.getValueSize(),J)}}g6.prototype.ValueTypeName="quaternion";g6.prototype.InterpolantFactoryMethodSmooth=void 0;class r9 extends dJ{constructor(J,Q,$){super(J,Q,$)}}r9.prototype.ValueTypeName="string";r9.prototype.ValueBufferType=Array;r9.prototype.DefaultInterpolation=2300;r9.prototype.InterpolantFactoryMethodLinear=void 0;r9.prototype.InterpolantFactoryMethodSmooth=void 0;class bQ extends dJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}bQ.prototype.ValueTypeName="vector";class hQ{constructor(J,Q,$){let Z=this,W=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,K,H)}W=!0},this.itemEnd=function(U){if(K++,Z.onProgress!==void 0)Z.onProgress(U,K,H);if(K===H){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,N){return X.push(U,N),this},this.removeHandler=function(U){let N=X.indexOf(U);if(N!==-1)X.splice(N,2);return this},this.getHandler=function(U){for(let N=0,q=X.length;N<q;N+=2){let G=X[N],F=X[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var bZ=new hQ;class xQ{constructor(J){if(this.manager=J!==void 0?J:bZ,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}xQ.DEFAULT_MATERIAL_NAME="__DEFAULT";var E6=new b,D6=new O9,rJ=new b;class p6 extends wJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new WJ,this.projectionMatrix=new WJ,this.projectionMatrixInverse=new WJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(E6,D6,rJ),rJ.x===1&&rJ.y===1&&rJ.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(E6,D6,rJ.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(E6,D6,rJ),rJ.x===1&&rJ.y===1&&rJ.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(E6,D6,rJ.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var C9=new b,T$=new v0,S$=new v0;class jJ extends p6{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=F6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(o6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return F6*2*Math.atan(Math.tan(o6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){C9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(C9.x,C9.y).multiplyScalar(-J/C9.z),C9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(C9.x,C9.y).multiplyScalar(-J/C9.z)}getViewSize(J,Q){return this.getViewBounds(J,T$,S$),Q.subVectors(S$,T$)}setViewOffset(J,Q,$,Z,W,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(o6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;W+=K.offsetX*Z/Y,Q-=K.offsetY*$/X,Z*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)W+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class z8 extends p6{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,K=$+J,H=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=X*this.view.offsetX,K=W+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(W,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}var N8=-90,q8=1;class gQ extends wJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new jJ(N8,q8,J,Q);Z.layers=this.layers,this.add(Z);let W=new jJ(N8,q8,J,Q);W.layers=this.layers,this.add(W);let K=new jJ(N8,q8,J,Q);K.layers=this.layers,this.add(K);let H=new jJ(N8,q8,J,Q);H.layers=this.layers,this.add(H);let Y=new jJ(N8,q8,J,Q);Y.layers=this.layers,this.add(Y);let X=new jJ(N8,q8,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,K,H,Y,X,U]=this.children,N=J.getRenderTarget(),q=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let L=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let z=!1;if(J.isWebGLRenderer===!0)z=J.state.buffers.depth.getReversed();else z=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,1,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),z&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=L,J.setRenderTarget($,5,Z),z&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(N,q,G),J.xr.enabled=F,$.texture.needsPMREMUpdate=!0}}class pQ extends jJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var mQ="\\[\\]\\.:\\/",$K=new RegExp("["+mQ+"]","g"),dQ="[^"+mQ+"]",ZK="[^"+mQ.replace("\\.","")+"]",WK=/((?:WC+[\/:])*)/.source.replace("WC",dQ),KK=/(WCOD+)?/.source.replace("WCOD",ZK),HK=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dQ),YK=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dQ),XK=new RegExp("^"+WK+KK+HK+YK+"$"),UK=["material","materials","bones","map"];class hZ{constructor(J,Q,$){let Z=$||n0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class n0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||n0.parseTrackName(Q),this.node=n0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new n0(J,Q,$);else return new n0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace($K,"")}static parseTrackName(J){let Q=XK.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(UK.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let K=0;K<W.length;K++){let H=W[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=n0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){C0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){P0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){P0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){P0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){P0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){P0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){P0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){P0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[Z];if(K===void 0){let X=Q.nodeName;P0("PropertyBinding: Trying to update property for track: "+X+"."+Z+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){P0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){P0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}n0.Composite=hZ;n0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};n0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};n0.prototype.GetterByBindingType=[n0.prototype._getValue_direct,n0.prototype._getValue_array,n0.prototype._getValue_arrayElement,n0.prototype._getValue_toArray];n0.prototype.SetterByBindingTypeAndVersioning=[[n0.prototype._setValue_direct,n0.prototype._setValue_direct_setNeedsUpdate,n0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[n0.prototype._setValue_array,n0.prototype._setValue_array_setNeedsUpdate,n0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[n0.prototype._setValue_arrayElement,n0.prototype._setValue_arrayElement_setNeedsUpdate,n0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[n0.prototype._setValue_fromArray,n0.prototype._setValue_fromArray_setNeedsUpdate,n0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var UG=new Float32Array(1);class lQ{static{lQ.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=$,W[3]=Z,this}}function uQ(J,Q,$,Z){let W=GK(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function GK(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)C0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function HW(){let J=null,Q=!1,$=null,Z=null;function W(K,H){$(K,H),Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function NK(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:N}=Y,q=U.byteLength,G=J.createBuffer();J.bindBuffer(X,G),J.bufferData(X,U,N),Y.onUploadCallback();let F;if(U instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)F=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)F=J.SHORT;else if(U instanceof Uint32Array)F=J.UNSIGNED_INT;else if(U instanceof Int32Array)F=J.INT;else if(U instanceof Int8Array)F=J.BYTE;else if(U instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:F,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:q}}function Z(Y,X,U){let{array:N,updateRanges:q}=X;if(J.bindBuffer(U,Y),q.length===0)J.bufferSubData(U,0,N);else{q.sort((F,L)=>F.start-L.start);let G=0;for(let F=1;F<q.length;F++){let L=q[G],z=q[F];if(z.start<=L.start+L.count+1)L.count=Math.max(L.count,z.start+z.count-L.start);else++G,q[G]=z}q.length=G+1;for(let F=0,L=q.length;F<L;F++){let z=q[F];J.bufferSubData(U,z.start*N.BYTES_PER_ELEMENT,N,z.start,z.count)}X.clearUpdateRanges()}X.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,X),U.version=Y.version}}return{get:W,remove:K,update:H}}var qK=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EK=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DK=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FK=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OK=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RK=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kK=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MK=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LK=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,VK=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BK=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zK=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wK=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IK=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AK=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CK=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_K=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TK=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SK=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jK=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yK=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vK=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fK=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bK=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hK=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xK=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gK=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pK=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mK=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dK="gl_FragColor = linearToOutputTexel( gl_FragColor );",lK=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uK=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cK=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nK=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sK=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iK=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oK=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aK=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rK=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tK=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eK=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$H=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZH=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,WH=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HH=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XH=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UH=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GH=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN

		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );

		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );

		irradiance *= sheenEnergyComp;

	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NH=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qH=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,EH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DH=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,FH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BH=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IH=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AH=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CH=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PH=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_H=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TH=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SH=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vH=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fH=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bH=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hH=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xH=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gH=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pH=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mH=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER

		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {

	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dH=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lH=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uH=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cH=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nH=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sH=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iH=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif

				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,oH=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aH=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rH=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tH=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eH=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JY=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QY=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$Y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZY=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WY=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KY=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HY=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YY=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NY=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qY=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EY=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FY=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RY=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kY=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,MY=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LY=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VY=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,BY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zY=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wY=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IY=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AY=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CY=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PY=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_Y=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TY=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,SY=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jY=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yY=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vY=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fY=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bY=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hY=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN

		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;

	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xY=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gY=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pY=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mY=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dY=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lY=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uY=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cY=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j0={alphahash_fragment:qK,alphahash_pars_fragment:EK,alphamap_fragment:DK,alphamap_pars_fragment:FK,alphatest_fragment:OK,alphatest_pars_fragment:RK,aomap_fragment:kK,aomap_pars_fragment:MK,batching_pars_vertex:LK,batching_vertex:VK,begin_vertex:BK,beginnormal_vertex:zK,bsdfs:wK,iridescence_fragment:IK,bumpmap_pars_fragment:AK,clipping_planes_fragment:CK,clipping_planes_pars_fragment:PK,clipping_planes_pars_vertex:_K,clipping_planes_vertex:TK,color_fragment:SK,color_pars_fragment:jK,color_pars_vertex:yK,color_vertex:vK,common:fK,cube_uv_reflection_fragment:bK,defaultnormal_vertex:hK,displacementmap_pars_vertex:xK,displacementmap_vertex:gK,emissivemap_fragment:pK,emissivemap_pars_fragment:mK,colorspace_fragment:dK,colorspace_pars_fragment:lK,envmap_fragment:uK,envmap_common_pars_fragment:cK,envmap_pars_fragment:nK,envmap_pars_vertex:sK,envmap_physical_pars_fragment:WH,envmap_vertex:iK,fog_vertex:oK,fog_pars_vertex:aK,fog_fragment:rK,fog_pars_fragment:tK,gradientmap_pars_fragment:eK,lightmap_pars_fragment:JH,lights_lambert_fragment:QH,lights_lambert_pars_fragment:$H,lights_pars_begin:ZH,lights_toon_fragment:KH,lights_toon_pars_fragment:HH,lights_phong_fragment:YH,lights_phong_pars_fragment:XH,lights_physical_fragment:UH,lights_physical_pars_fragment:GH,lights_fragment_begin:NH,lights_fragment_maps:qH,lights_fragment_end:EH,lightprobes_pars_fragment:DH,logdepthbuf_fragment:FH,logdepthbuf_pars_fragment:OH,logdepthbuf_pars_vertex:RH,logdepthbuf_vertex:kH,map_fragment:MH,map_pars_fragment:LH,map_particle_fragment:VH,map_particle_pars_fragment:BH,metalnessmap_fragment:zH,metalnessmap_pars_fragment:wH,morphinstance_vertex:IH,morphcolor_vertex:AH,morphnormal_vertex:CH,morphtarget_pars_vertex:PH,morphtarget_vertex:_H,normal_fragment_begin:TH,normal_fragment_maps:SH,normal_pars_fragment:jH,normal_pars_vertex:yH,normal_vertex:vH,normalmap_pars_fragment:fH,clearcoat_normal_fragment_begin:bH,clearcoat_normal_fragment_maps:hH,clearcoat_pars_fragment:xH,iridescence_pars_fragment:gH,opaque_fragment:pH,packing:mH,premultiplied_alpha_fragment:dH,project_vertex:lH,dithering_fragment:uH,dithering_pars_fragment:cH,roughnessmap_fragment:nH,roughnessmap_pars_fragment:sH,shadowmap_pars_fragment:iH,shadowmap_pars_vertex:oH,shadowmap_vertex:aH,shadowmask_pars_fragment:rH,skinbase_vertex:tH,skinning_pars_vertex:eH,skinning_vertex:JY,skinnormal_vertex:QY,specularmap_fragment:$Y,specularmap_pars_fragment:ZY,tonemapping_fragment:WY,tonemapping_pars_fragment:KY,transmission_fragment:HY,transmission_pars_fragment:YY,uv_pars_fragment:XY,uv_pars_vertex:UY,uv_vertex:GY,worldpos_vertex:NY,background_vert:qY,background_frag:EY,backgroundCube_vert:DY,backgroundCube_frag:FY,cube_vert:OY,cube_frag:RY,depth_vert:kY,depth_frag:MY,distance_vert:LY,distance_frag:VY,equirect_vert:BY,equirect_frag:zY,linedashed_vert:wY,linedashed_frag:IY,meshbasic_vert:AY,meshbasic_frag:CY,meshlambert_vert:PY,meshlambert_frag:_Y,meshmatcap_vert:TY,meshmatcap_frag:SY,meshnormal_vert:jY,meshnormal_frag:yY,meshphong_vert:vY,meshphong_frag:fY,meshphysical_vert:bY,meshphysical_frag:hY,meshtoon_vert:xY,meshtoon_frag:gY,points_vert:pY,points_frag:mY,shadow_vert:dY,shadow_frag:lY,sprite_vert:uY,sprite_frag:cY},U0={common:{diffuse:{value:new l0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _0},alphaMap:{value:null},alphaMapTransform:{value:new _0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _0}},envmap:{envMap:{value:null},envMapRotation:{value:new _0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _0},normalScale:{value:new v0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new l0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new b},probesMax:{value:new b},probesResolution:{value:new b}},points:{diffuse:{value:new l0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _0},alphaTest:{value:0},uvTransform:{value:new _0}},sprite:{diffuse:{value:new l0(16777215)},opacity:{value:1},center:{value:new v0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _0},alphaMap:{value:null},alphaMapTransform:{value:new _0},alphaTest:{value:0}}},$9={basic:{uniforms:zJ([U0.common,U0.specularmap,U0.envmap,U0.aomap,U0.lightmap,U0.fog]),vertexShader:j0.meshbasic_vert,fragmentShader:j0.meshbasic_frag},lambert:{uniforms:zJ([U0.common,U0.specularmap,U0.envmap,U0.aomap,U0.lightmap,U0.emissivemap,U0.bumpmap,U0.normalmap,U0.displacementmap,U0.fog,U0.lights,{emissive:{value:new l0(0)},envMapIntensity:{value:1}}]),vertexShader:j0.meshlambert_vert,fragmentShader:j0.meshlambert_frag},phong:{uniforms:zJ([U0.common,U0.specularmap,U0.envmap,U0.aomap,U0.lightmap,U0.emissivemap,U0.bumpmap,U0.normalmap,U0.displacementmap,U0.fog,U0.lights,{emissive:{value:new l0(0)},specular:{value:new l0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:j0.meshphong_vert,fragmentShader:j0.meshphong_frag},standard:{uniforms:zJ([U0.common,U0.envmap,U0.aomap,U0.lightmap,U0.emissivemap,U0.bumpmap,U0.normalmap,U0.displacementmap,U0.roughnessmap,U0.metalnessmap,U0.fog,U0.lights,{emissive:{value:new l0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:j0.meshphysical_vert,fragmentShader:j0.meshphysical_frag},toon:{uniforms:zJ([U0.common,U0.aomap,U0.lightmap,U0.emissivemap,U0.bumpmap,U0.normalmap,U0.displacementmap,U0.gradientmap,U0.fog,U0.lights,{emissive:{value:new l0(0)}}]),vertexShader:j0.meshtoon_vert,fragmentShader:j0.meshtoon_frag},matcap:{uniforms:zJ([U0.common,U0.bumpmap,U0.normalmap,U0.displacementmap,U0.fog,{matcap:{value:null}}]),vertexShader:j0.meshmatcap_vert,fragmentShader:j0.meshmatcap_frag},points:{uniforms:zJ([U0.points,U0.fog]),vertexShader:j0.points_vert,fragmentShader:j0.points_frag},dashed:{uniforms:zJ([U0.common,U0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:j0.linedashed_vert,fragmentShader:j0.linedashed_frag},depth:{uniforms:zJ([U0.common,U0.displacementmap]),vertexShader:j0.depth_vert,fragmentShader:j0.depth_frag},normal:{uniforms:zJ([U0.common,U0.bumpmap,U0.normalmap,U0.displacementmap,{opacity:{value:1}}]),vertexShader:j0.meshnormal_vert,fragmentShader:j0.meshnormal_frag},sprite:{uniforms:zJ([U0.sprite,U0.fog]),vertexShader:j0.sprite_vert,fragmentShader:j0.sprite_frag},background:{uniforms:{uvTransform:{value:new _0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:j0.background_vert,fragmentShader:j0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _0}},vertexShader:j0.backgroundCube_vert,fragmentShader:j0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:j0.cube_vert,fragmentShader:j0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:j0.equirect_vert,fragmentShader:j0.equirect_frag},distance:{uniforms:zJ([U0.common,U0.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:j0.distance_vert,fragmentShader:j0.distance_frag},shadow:{uniforms:zJ([U0.lights,U0.fog,{color:{value:new l0(0)},opacity:{value:1}}]),vertexShader:j0.shadow_vert,fragmentShader:j0.shadow_frag}};$9.physical={uniforms:zJ([$9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _0},clearcoatNormalScale:{value:new v0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _0},sheen:{value:0},sheenColor:{value:new l0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _0},transmissionSamplerSize:{value:new v0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _0},attenuationDistance:{value:0},attenuationColor:{value:new l0(0)},specularColor:{value:new l0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _0},anisotropyVector:{value:new v0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _0}}]),vertexShader:j0.meshphysical_vert,fragmentShader:j0.meshphysical_frag};var m6={r:0,b:0,g:0},nY=new WJ,YW=new _0;YW.set(-1,0,0,0,1,0,0,0,1);function sY(J,Q,$,Z,W,K){let H=new l0(0),Y=W===!0?0:1,X,U,N=null,q=0,G=null;function F(_){let C=_.isScene===!0?_.background:null;if(C&&C.isTexture){let V=_.backgroundBlurriness>0;C=Q.get(C,V)}return C}function L(_){let C=!1,V=F(_);if(V===null)D(H,Y);else if(V&&V.isColor)D(V,1),C=!0;let I=J.xr.getEnvironmentBlendMode();if(I==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(I==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||C)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function z(_,C){let V=F(C);if(V&&(V.isCubeTexture||V.mapping===v8)){if(U===void 0)U=new vJ(new B8(1,1,1),new IJ({name:"BackgroundCubeMaterial",uniforms:i9($9.backgroundCube.uniforms),vertexShader:$9.backgroundCube.vertexShader,fragmentShader:$9.backgroundCube.fragmentShader,side:CJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(I,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(nY.makeRotationFromEuler(C.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(YW);if(U.material.toneMapped=x0.getTransfer(V.colorSpace)!==r0,N!==V||q!==V.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=V,q=V.version,G=J.toneMapping;U.layers.enableAll(),_.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(X===void 0)X=new vJ(new s9(2,2),new IJ({name:"BackgroundMaterial",uniforms:i9($9.background.uniforms),vertexShader:$9.background.vertexShader,fragmentShader:$9.background.fragmentShader,side:R8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(X);if(X.material.uniforms.t2D.value=V,X.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,X.material.toneMapped=x0.getTransfer(V.colorSpace)!==r0,V.matrixAutoUpdate===!0)V.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(V.matrix),N!==V||q!==V.version||G!==J.toneMapping)X.material.needsUpdate=!0,N=V,q=V.version,G=J.toneMapping;X.layers.enableAll(),_.unshift(X,X.geometry,X.material,0,0,null)}}function D(_,C){_.getRGB(m6,IQ(J)),$.buffers.color.setClear(m6.r,m6.g,m6.b,C,K)}function E(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(_,C=1){H.set(_),Y=C,D(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(_){Y=_,D(H,Y)},render:L,addToRenderList:z,dispose:E}}function iY(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=G(null),K=W,H=!1;function Y(A,m,o,p,n){let u=!1,h=q(A,p,o,m);if(K!==h)K=h,U(K.object);if(u=F(A,p,o,n),u)L(A,p,o,n);if(n!==null)Q.update(n,J.ELEMENT_ARRAY_BUFFER);if(u||H){if(H=!1,V(A,m,o,p),n!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(n).buffer)}}function X(){return J.createVertexArray()}function U(A){return J.bindVertexArray(A)}function N(A){return J.deleteVertexArray(A)}function q(A,m,o,p){let n=p.wireframe===!0,u=Z[m.id];if(u===void 0)u={},Z[m.id]=u;let h=A.isInstancedMesh===!0?A.id:0,t=u[h];if(t===void 0)t={},u[h]=t;let e=t[o.id];if(e===void 0)e={},t[o.id]=e;let H0=e[n];if(H0===void 0)H0=G(X()),e[n]=H0;return H0}function G(A){let m=[],o=[],p=[];for(let n=0;n<$;n++)m[n]=0,o[n]=0,p[n]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:m,enabledAttributes:o,attributeDivisors:p,object:A,attributes:{},index:null}}function F(A,m,o,p){let n=K.attributes,u=m.attributes,h=0,t=o.getAttributes();for(let e in t)if(t[e].location>=0){let M0=n[e],k0=u[e];if(k0===void 0){if(e==="instanceMatrix"&&A.instanceMatrix)k0=A.instanceMatrix;if(e==="instanceColor"&&A.instanceColor)k0=A.instanceColor}if(M0===void 0)return!0;if(M0.attribute!==k0)return!0;if(k0&&M0.data!==k0.data)return!0;h++}if(K.attributesNum!==h)return!0;if(K.index!==p)return!0;return!1}function L(A,m,o,p){let n={},u=m.attributes,h=0,t=o.getAttributes();for(let e in t)if(t[e].location>=0){let M0=u[e];if(M0===void 0){if(e==="instanceMatrix"&&A.instanceMatrix)M0=A.instanceMatrix;if(e==="instanceColor"&&A.instanceColor)M0=A.instanceColor}let k0={};if(k0.attribute=M0,M0&&M0.data)k0.data=M0.data;n[e]=k0,h++}K.attributes=n,K.attributesNum=h,K.index=p}function z(){let A=K.newAttributes;for(let m=0,o=A.length;m<o;m++)A[m]=0}function D(A){E(A,0)}function E(A,m){let{newAttributes:o,enabledAttributes:p,attributeDivisors:n}=K;if(o[A]=1,p[A]===0)J.enableVertexAttribArray(A),p[A]=1;if(n[A]!==m)J.vertexAttribDivisor(A,m),n[A]=m}function _(){let{newAttributes:A,enabledAttributes:m}=K;for(let o=0,p=m.length;o<p;o++)if(m[o]!==A[o])J.disableVertexAttribArray(o),m[o]=0}function C(A,m,o,p,n,u,h){if(h===!0)J.vertexAttribIPointer(A,m,o,n,u);else J.vertexAttribPointer(A,m,o,p,n,u)}function V(A,m,o,p){z();let n=p.attributes,u=o.getAttributes(),h=m.defaultAttributeValues;for(let t in u){let e=u[t];if(e.location>=0){let H0=n[t];if(H0===void 0){if(t==="instanceMatrix"&&A.instanceMatrix)H0=A.instanceMatrix;if(t==="instanceColor"&&A.instanceColor)H0=A.instanceColor}if(H0!==void 0){let{normalized:M0,itemSize:k0}=H0,ZJ=Q.get(H0);if(ZJ===void 0)continue;let{buffer:i0,type:i,bytesPerElement:Z0}=ZJ,D0=i===J.INT||i===J.UNSIGNED_INT||H0.gpuType===S7;if(H0.isInterleavedBufferAttribute){let F0=H0.data,A0=F0.stride,p0=H0.offset;if(F0.isInstancedInterleavedBuffer){for(let f0=0;f0<e.locationSize;f0++)E(e.location+f0,F0.meshPerAttribute);if(A.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=F0.meshPerAttribute*F0.count}else for(let f0=0;f0<e.locationSize;f0++)D(e.location+f0);J.bindBuffer(J.ARRAY_BUFFER,i0);for(let f0=0;f0<e.locationSize;f0++)C(e.location+f0,k0/e.locationSize,i,M0,A0*Z0,(p0+k0/e.locationSize*f0)*Z0,D0)}else{if(H0.isInstancedBufferAttribute){for(let F0=0;F0<e.locationSize;F0++)E(e.location+F0,H0.meshPerAttribute);if(A.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=H0.meshPerAttribute*H0.count}else for(let F0=0;F0<e.locationSize;F0++)D(e.location+F0);J.bindBuffer(J.ARRAY_BUFFER,i0);for(let F0=0;F0<e.locationSize;F0++)C(e.location+F0,k0/e.locationSize,i,M0,k0*Z0,k0/e.locationSize*F0*Z0,D0)}}else if(h!==void 0){let M0=h[t];if(M0!==void 0)switch(M0.length){case 2:J.vertexAttrib2fv(e.location,M0);break;case 3:J.vertexAttrib3fv(e.location,M0);break;case 4:J.vertexAttrib4fv(e.location,M0);break;default:J.vertexAttrib1fv(e.location,M0)}}}}_()}function I(){B();for(let A in Z){let m=Z[A];for(let o in m){let p=m[o];for(let n in p){let u=p[n];for(let h in u)N(u[h].object),delete u[h];delete p[n]}}delete Z[A]}}function w(A){if(Z[A.id]===void 0)return;let m=Z[A.id];for(let o in m){let p=m[o];for(let n in p){let u=p[n];for(let h in u)N(u[h].object),delete u[h];delete p[n]}}delete Z[A.id]}function P(A){for(let m in Z){let o=Z[m];for(let p in o){let n=o[p];if(n[A.id]===void 0)continue;let u=n[A.id];for(let h in u)N(u[h].object),delete u[h];delete n[A.id]}}}function R(A){for(let m in Z){let o=Z[m],p=A.isInstancedMesh===!0?A.id:0,n=o[p];if(n===void 0)continue;for(let u in n){let h=n[u];for(let t in h)N(h[t].object),delete h[t];delete n[u]}if(delete o[p],Object.keys(o).length===0)delete Z[m]}}function B(){if(l(),H=!0,K===W)return;K=W,U(K.object)}function l(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:B,resetDefaultState:l,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfObject:R,releaseStatesOfProgram:P,initAttributes:z,enableAttribute:D,disableUnusedAttributes:_}}function oY(J,Q,$){let Z;function W(X){Z=X}function K(X,U){J.drawArrays(Z,X,U),$.update(U,Z,1)}function H(X,U,N){if(N===0)return;J.drawArraysInstanced(Z,X,U,N),$.update(U,Z,N)}function Y(X,U,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,X,0,U,0,N);let G=0;for(let F=0;F<N;F++)G+=U[F];$.update(G,Z,1)}this.setMode=W,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function aY(J,Q,$,Z){let W;function K(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let P=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function H(P){if(P!==J9&&Z.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(P){let R=P===D9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(P!==iJ&&Z.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==E9&&!R)return!1;return!0}function X(P){if(P==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";P="mediump"}if(P==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",N=X(U);if(N!==U)C0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let q=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)C0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),z=J.getParameter(J.MAX_TEXTURE_SIZE),D=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),_=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),C=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),I=J.getParameter(J.MAX_SAMPLES),w=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:q,reversedDepthBuffer:G,maxTextures:F,maxVertexTextures:L,maxTextureSize:z,maxCubemapSize:D,maxAttributes:E,maxVertexUniforms:_,maxVaryings:C,maxFragmentUniforms:V,maxSamples:I,samples:w}}function rY(J){let Q=this,$=null,Z=0,W=!1,K=!1,H=new N9,Y=new _0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(q,G){let F=q.length!==0||G||Z!==0||W;return W=G,Z=q.length,F},this.beginShadows=function(){K=!0,N(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(q,G){$=N(q,G,0)},this.setState=function(q,G,F){let{clippingPlanes:L,clipIntersection:z,clipShadows:D}=q,E=J.get(q);if(!W||L===null||L.length===0||K&&!D)if(K)N(null);else U();else{let _=K?0:Z,C=_*4,V=E.clippingState||null;X.value=V,V=N(L,G,C,F);for(let I=0;I!==C;++I)V[I]=$[I];E.clippingState=V,this.numIntersection=z?this.numPlanes:0,this.numPlanes+=_}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function N(q,G,F,L){let z=q!==null?q.length:0,D=null;if(z!==0){if(D=X.value,L!==!0||D===null){let E=F+z*4,_=G.matrixWorldInverse;if(Y.getNormalMatrix(_),D===null||D.length<E)D=new Float32Array(E);for(let C=0,V=F;C!==z;++C,V+=4)H.copy(q[C]).applyMatrix4(_,Y),H.normal.toArray(D,V),D[V+3]=H.constant}X.value=D,X.needsUpdate=!0}return Q.numPlanes=z,Q.numIntersection=0,D}}var j9=4,xZ=[0.125,0.215,0.35,0.446,0.526,0.582],t9=20,tY=256,p8=new z8,gZ=new l0,cQ=null,nQ=0,sQ=0,iQ=!1,eY=new b;class rQ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:K=256,position:H=eY}=W;cQ=this._renderer.getRenderTarget(),nQ=this._renderer.getActiveCubeFace(),sQ=this._renderer.getActiveMipmapLevel(),iQ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,H),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=dZ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=mZ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(cQ,nQ,sQ),this._renderer.xr.enabled=iQ,J.scissorTest=!1,w8(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===M8||J.mapping===g9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);cQ=this._renderer.getRenderTarget(),nQ=this._renderer.getActiveCubeFace(),sQ=this._renderer.getActiveMipmapLevel(),iQ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:PJ,minFilter:PJ,generateMipmaps:!1,type:D9,format:J9,colorSpace:DQ,depthBuffer:!1},Z=pZ(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=pZ(J,Q,$);let{_lodMax:W}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=JX(W)),this._blurMaterial=$X(W,J,Q),this._ggxMaterial=QX(W,J,Q)}return Z}_compileMaterial(J){let Q=new vJ(new yJ,J);this._renderer.compile(Q,p8)}_sceneToCubeUV(J,Q,$,Z,W){let Y=new jJ(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],N=this._renderer,q=N.autoClear,G=N.toneMapping;if(N.getClearColor(gZ),N.toneMapping=sJ,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new vJ(new B8,new v6({name:"PMREM.Background",side:CJ,depthWrite:!1,depthTest:!1}));let L=this._backgroundBox,z=L.material,D=!1,E=J.background;if(E){if(E.isColor)z.color.copy(E),J.background=null,D=!0}else z.color.copy(gZ),D=!0;for(let _=0;_<6;_++){let C=_%3;if(C===0)Y.up.set(0,X[_],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x+U[_],W.y,W.z);else if(C===1)Y.up.set(0,0,X[_]),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y+U[_],W.z);else Y.up.set(0,X[_],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y,W.z+U[_]);let V=this._cubeSize;if(w8(Z,C*V,_>2?V:0,V,V),N.setRenderTarget(Z),D)N.render(L,Y);N.render(J,Y)}N.toneMapping=G,N.autoClear=q,J.background=E}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===M8||J.mapping===g9;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=dZ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=mZ();let W=Z?this._cubemapMaterial:this._equirectMaterial,K=this._lodMeshes[0];K.material=W;let H=W.uniforms;H.envMap.value=J;let Y=this._cubeSize;w8(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(K,p8)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let W=1;W<Z;W++)this._applyGGXFilter(J,W-1,W);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,W=this._pingPongRenderTarget,K=this._ggxMaterial,H=this._lodMeshes[$];H.material=K;let Y=K.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),N=Math.sqrt(X*X-U*U),q=0+X*1.25,G=N*q,{_lodMax:F}=this,L=this._sizeLods[$],z=3*L*($>F-j9?$-F+j9:0),D=4*(this._cubeSize-L);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=F-Q,w8(W,z,D,3*L,2*L),Z.setRenderTarget(W),Z.render(H,p8),Y.envMap.value=W.texture,Y.roughness.value=0,Y.mipInt.value=F-$,w8(J,z,D,3*L,2*L),Z.setRenderTarget(J),Z.render(H,p8)}_blur(J,Q,$,Z,W){let K=this._pingPongRenderTarget;this._halfBlur(J,K,Q,$,Z,"latitudinal",W),this._halfBlur(K,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,K,H){let Y=this._renderer,X=this._blurMaterial;if(K!=="latitudinal"&&K!=="longitudinal")P0("blur direction must be either latitudinal or longitudinal!");let U=3,N=this._lodMeshes[Z];N.material=X;let q=X.uniforms,G=this._sizeLods[$]-1,F=isFinite(W)?Math.PI/(2*G):2*Math.PI/(2*t9-1),L=W/F,z=isFinite(W)?1+Math.floor(U*L):t9;if(z>t9)C0(`sigmaRadians, ${W}, is too large and will clip, as it requested ${z} samples when the maximum is set to ${t9}`);let D=[],E=0;for(let w=0;w<t9;++w){let P=w/L,R=Math.exp(-P*P/2);if(D.push(R),w===0)E+=R;else if(w<z)E+=2*R}for(let w=0;w<D.length;w++)D[w]=D[w]/E;if(q.envMap.value=J.texture,q.samples.value=z,q.weights.value=D,q.latitudinal.value=K==="latitudinal",H)q.poleAxis.value=H;let{_lodMax:_}=this;q.dTheta.value=F,q.mipInt.value=_-$;let C=this._sizeLods[Z],V=3*C*(Z>_-j9?Z-_+j9:0),I=4*(this._cubeSize-C);w8(Q,V,I,3*C,2*C),Y.setRenderTarget(Q),Y.render(N,p8)}}function JX(J){let Q=[],$=[],Z=[],W=J,K=J-j9+1+xZ.length;for(let H=0;H<K;H++){let Y=Math.pow(2,W);Q.push(Y);let X=1/Y;if(H>J-j9)X=xZ[H-J+j9-1];else if(H===0)X=0;$.push(X);let U=1/(Y-2),N=-U,q=1+U,G=[N,N,q,N,q,q,N,N,q,q,N,q],F=6,L=6,z=3,D=2,E=1,_=new Float32Array(z*L*F),C=new Float32Array(D*L*F),V=new Float32Array(E*L*F);for(let w=0;w<F;w++){let P=w%3*2/3-1,R=w>2?0:-1,B=[P,R,0,P+0.6666666666666666,R,0,P+0.6666666666666666,R+1,0,P,R,0,P+0.6666666666666666,R+1,0,P,R+1,0];_.set(B,z*L*w),C.set(G,D*L*w);let l=[w,w,w,w,w,w];V.set(l,E*L*w)}let I=new yJ;if(I.setAttribute("position",new NJ(_,z)),I.setAttribute("uv",new NJ(C,D)),I.setAttribute("faceIndex",new NJ(V,E)),Z.push(new vJ(I,null)),W>j9)W--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function pZ(J,Q,$){let Z=new mJ(J,Q,$);return Z.texture.mapping=v8,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function w8(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function QX(J,Q,$){return new IJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tY,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:l6(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:eJ,depthTest:!1,depthWrite:!1})}function $X(J,Q,$){let Z=new Float32Array(t9),W=new b(0,1,0);return new IJ({name:"SphericalGaussianBlur",defines:{n:t9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:l6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:eJ,depthTest:!1,depthWrite:!1})}function mZ(){return new IJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:l6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:eJ,depthTest:!1,depthWrite:!1})}function dZ(){return new IJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:l6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:eJ,depthTest:!1,depthWrite:!1})}function l6(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class J$ extends mJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new h6(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Z=new B8(5,5,5),W=new IJ({name:"CubemapFromEquirect",uniforms:i9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:CJ,blending:eJ});W.uniforms.tEquirect.value=Q;let K=new vJ(Z,W),H=Q.minFilter;if(Q.minFilter===p9)Q.minFilter=PJ;return new gQ(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,Z);J.setRenderTarget(W)}}function ZX(J){let Q=new WeakMap,$=new WeakMap,Z=null;function W(G,F=!1){if(G===null||G===void 0)return null;if(F)return H(G);return K(G)}function K(G){if(G&&G.isTexture){let F=G.mapping;if(F===O6||F===R6)if(Q.has(G)){let L=Q.get(G).texture;return Y(L,G.mapping)}else{let L=G.image;if(L&&L.height>0){let z=new J$(L.height);return z.fromEquirectangularTexture(J,G),Q.set(G,z),G.addEventListener("dispose",U),Y(z.texture,G.mapping)}else return null}}return G}function H(G){if(G&&G.isTexture){let F=G.mapping,L=F===O6||F===R6,z=F===M8||F===g9;if(L||z){let D=$.get(G),E=D!==void 0?D.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==E){if(Z===null)Z=new rQ(J);return D=L?Z.fromEquirectangular(G,D):Z.fromCubemap(G,D),D.texture.pmremVersion=G.pmremVersion,$.set(G,D),D.texture}else if(D!==void 0)return D.texture;else{let _=G.image;if(L&&_&&_.height>0||z&&_&&X(_)){if(Z===null)Z=new rQ(J);return D=L?Z.fromEquirectangular(G):Z.fromCubemap(G),D.texture.pmremVersion=G.pmremVersion,$.set(G,D),G.addEventListener("dispose",N),D.texture}else return null}}}return G}function Y(G,F){if(F===O6)G.mapping=M8;else if(F===R6)G.mapping=g9;return G}function X(G){let F=0,L=6;for(let z=0;z<L;z++)if(G[z]!==void 0)F++;return F===L}function U(G){let F=G.target;F.removeEventListener("dispose",U);let L=Q.get(F);if(L!==void 0)Q.delete(F),L.dispose()}function N(G){let F=G.target;F.removeEventListener("dispose",N);let L=$.get(F);if(L!==void 0)$.delete(F),L.dispose()}function q(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:W,dispose:q}}function WX(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W=J.getExtension(Z);return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)x9("WebGLRenderer: "+Z+" extension not supported.");return W}}}function KX(J,Q,$,Z){let W={},K=new WeakMap;function H(q){let G=q.target;if(G.index!==null)Q.remove(G.index);for(let L in G.attributes)Q.remove(G.attributes[L]);G.removeEventListener("dispose",H),delete W[G.id];let F=K.get(G);if(F)Q.remove(F),K.delete(G);if(Z.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function Y(q,G){if(W[G.id]===!0)return G;return G.addEventListener("dispose",H),W[G.id]=!0,$.memory.geometries++,G}function X(q){let G=q.attributes;for(let F in G)Q.update(G[F],J.ARRAY_BUFFER)}function U(q){let G=[],F=q.index,L=q.attributes.position,z=0;if(L===void 0)return;if(F!==null){let _=F.array;z=F.version;for(let C=0,V=_.length;C<V;C+=3){let I=_[C+0],w=_[C+1],P=_[C+2];G.push(I,w,w,P,P,I)}}else{let _=L.array;z=L.version;for(let C=0,V=_.length/3-1;C<V;C+=3){let I=C+0,w=C+1,P=C+2;G.push(I,w,w,P,P,I)}}let D=new(L.count>=65535?j6:S6)(G,1);D.version=z;let E=K.get(q);if(E)Q.remove(E);K.set(q,D)}function N(q){let G=K.get(q);if(G){let F=q.index;if(F!==null){if(G.version<F.version)U(q)}}else U(q);return K.get(q)}return{get:Y,update:X,getWireframeAttribute:N}}function HX(J,Q,$){let Z;function W(q){Z=q}let K,H;function Y(q){K=q.type,H=q.bytesPerElement}function X(q,G){J.drawElements(Z,G,K,q*H),$.update(G,Z,1)}function U(q,G,F){if(F===0)return;J.drawElementsInstanced(Z,G,K,q*H,F),$.update(G,Z,F)}function N(q,G,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,G,0,K,q,0,F);let z=0;for(let D=0;D<F;D++)z+=G[D];$.update(z,Z,1)}this.setMode=W,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=N}function YX(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:P0("WebGLInfo: Unknown draw mode:",H);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function XX(J,Q,$){let Z=new WeakMap,W=new KJ;function K(H,Y,X){let U=H.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,q=N!==void 0?N.length:0,G=Z.get(Y);if(G===void 0||G.count!==q){let B=function(){P.dispose(),Z.delete(Y),Y.removeEventListener("dispose",B)};if(G!==void 0)G.texture.dispose();let F=Y.morphAttributes.position!==void 0,L=Y.morphAttributes.normal!==void 0,z=Y.morphAttributes.color!==void 0,D=Y.morphAttributes.position||[],E=Y.morphAttributes.normal||[],_=Y.morphAttributes.color||[],C=0;if(F===!0)C=1;if(L===!0)C=2;if(z===!0)C=3;let V=Y.attributes.position.count*C,I=1;if(V>Q.maxTextureSize)I=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let w=new Float32Array(V*I*4*q),P=new P6(w,V,I,q);P.type=E9,P.needsUpdate=!0;let R=C*4;for(let l=0;l<q;l++){let A=D[l],m=E[l],o=_[l],p=V*I*4*l;for(let n=0;n<A.count;n++){let u=n*R;if(F===!0)W.fromBufferAttribute(A,n),w[p+u+0]=W.x,w[p+u+1]=W.y,w[p+u+2]=W.z,w[p+u+3]=0;if(L===!0)W.fromBufferAttribute(m,n),w[p+u+4]=W.x,w[p+u+5]=W.y,w[p+u+6]=W.z,w[p+u+7]=0;if(z===!0)W.fromBufferAttribute(o,n),w[p+u+8]=W.x,w[p+u+9]=W.y,w[p+u+10]=W.z,w[p+u+11]=o.itemSize===4?W.w:1}}G={count:q,texture:P,size:new v0(V,I)},Z.set(Y,G),Y.addEventListener("dispose",B)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let F=0;for(let z=0;z<U.length;z++)F+=U[z];let L=Y.morphTargetsRelative?1:1-F;X.getUniforms().setValue(J,"morphTargetBaseInfluence",L),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:K}}function UX(J,Q,$,Z,W){let K=new WeakMap;function H(U){let N=W.render.frame,q=U.geometry,G=Q.get(U,q);if(K.get(G)!==N)Q.update(G),K.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==N){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,N)}}if(U.isSkinnedMesh){let F=U.skeleton;if(K.get(F)!==N)F.update(),K.set(F,N)}return G}function Y(){K=new WeakMap}function X(U){let N=U.target;if(N.removeEventListener("dispose",X),Z.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:H,dispose:Y}}var GX={[w7]:"LINEAR_TONE_MAPPING",[I7]:"REINHARD_TONE_MAPPING",[A7]:"CINEON_TONE_MAPPING",[C7]:"ACES_FILMIC_TONE_MAPPING",[_7]:"AGX_TONE_MAPPING",[T7]:"NEUTRAL_TONE_MAPPING",[P7]:"CUSTOM_TONE_MAPPING"};function NX(J,Q,$,Z,W,K){let H=new mJ(Q,$,{type:J,depthBuffer:W,stencilBuffer:K,samples:Z?4:0,depthTexture:W?new S9(Q,$):void 0}),Y=new mJ(Q,$,{type:D9,depthBuffer:!1,stencilBuffer:!1}),X=new yJ;X.setAttribute("position",new nJ([-1,3,0,-1,-1,0,3,-1,0],3)),X.setAttribute("uv",new nJ([0,2,0,0,2,0],2));let U=new AQ({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),N=new vJ(X,U),q=new z8(-1,1,1,-1,0,1),G=null,F=null,L=!1,z,D=null,E=[],_=!1;this.setSize=function(C,V){H.setSize(C,V),Y.setSize(C,V);for(let I=0;I<E.length;I++){let w=E[I];if(w.setSize)w.setSize(C,V)}},this.setEffects=function(C){E=C,_=E.length>0&&E[0].isRenderPass===!0;let{width:V,height:I}=H;for(let w=0;w<E.length;w++){let P=E[w];if(P.setSize)P.setSize(V,I)}},this.begin=function(C,V){if(L)return!1;if(C.toneMapping===sJ&&E.length===0)return!1;if(D=V,V!==null){let{width:I,height:w}=V;if(H.width!==I||H.height!==w)this.setSize(I,w)}if(_===!1)C.setRenderTarget(H);return z=C.toneMapping,C.toneMapping=sJ,!0},this.hasRenderPass=function(){return _},this.end=function(C,V){C.toneMapping=z,L=!0;let I=H,w=Y;for(let P=0;P<E.length;P++){let R=E[P];if(R.enabled===!1)continue;if(R.render(C,w,I,V),R.needsSwap!==!1){let B=I;I=w,w=B}}if(G!==C.outputColorSpace||F!==C.toneMapping){if(G=C.outputColorSpace,F=C.toneMapping,U.defines={},x0.getTransfer(G)===r0)U.defines.SRGB_TRANSFER="";let P=GX[F];if(P)U.defines[P]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=I.texture,C.setRenderTarget(D),C.render(N,q),D=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){if(H.depthTexture)H.depthTexture.dispose();H.dispose(),Y.dispose(),X.dispose(),U.dispose()}}var XW=new BJ,tQ=new S9(1,1),UW=new P6,GW=new VQ,NW=new h6,lZ=[],uZ=[],cZ=new Float32Array(16),nZ=new Float32Array(9),sZ=new Float32Array(4);function I8(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,K=lZ[W];if(K===void 0)K=new Float32Array(W),lZ[W]=K;if(Q!==0){Z.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function EJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function DJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function u6(J,Q){let $=uZ[Q];if($===void 0)$=new Int32Array(Q),uZ[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function qX(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function EX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(EJ($,Q))return;J.uniform2fv(this.addr,Q),DJ($,Q)}}function DX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(EJ($,Q))return;J.uniform3fv(this.addr,Q),DJ($,Q)}}function FX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(EJ($,Q))return;J.uniform4fv(this.addr,Q),DJ($,Q)}}function OX(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(EJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),DJ($,Q)}else{if(EJ($,Z))return;sZ.set(Z),J.uniformMatrix2fv(this.addr,!1,sZ),DJ($,Z)}}function RX(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(EJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),DJ($,Q)}else{if(EJ($,Z))return;nZ.set(Z),J.uniformMatrix3fv(this.addr,!1,nZ),DJ($,Z)}}function kX(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(EJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),DJ($,Q)}else{if(EJ($,Z))return;cZ.set(Z),J.uniformMatrix4fv(this.addr,!1,cZ),DJ($,Z)}}function MX(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function LX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(EJ($,Q))return;J.uniform2iv(this.addr,Q),DJ($,Q)}}function VX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(EJ($,Q))return;J.uniform3iv(this.addr,Q),DJ($,Q)}}function BX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(EJ($,Q))return;J.uniform4iv(this.addr,Q),DJ($,Q)}}function zX(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function wX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(EJ($,Q))return;J.uniform2uiv(this.addr,Q),DJ($,Q)}}function IX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(EJ($,Q))return;J.uniform3uiv(this.addr,Q),DJ($,Q)}}function AX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(EJ($,Q))return;J.uniform4uiv(this.addr,Q),DJ($,Q)}}function CX(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_2D_SHADOW)tQ.compareFunction=$.isReversedDepthBuffer()?C6:A6,K=tQ;else K=XW;$.setTexture2D(Q||K,W)}function PX(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||GW,W)}function _X(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||NW,W)}function TX(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||UW,W)}function SX(J){switch(J){case 5126:return qX;case 35664:return EX;case 35665:return DX;case 35666:return FX;case 35674:return OX;case 35675:return RX;case 35676:return kX;case 5124:case 35670:return MX;case 35667:case 35671:return LX;case 35668:case 35672:return VX;case 35669:case 35673:return BX;case 5125:return zX;case 36294:return wX;case 36295:return IX;case 36296:return AX;case 35678:case 36198:case 36298:case 36306:case 35682:return CX;case 35679:case 36299:case 36307:return PX;case 35680:case 36300:case 36308:case 36293:return _X;case 36289:case 36303:case 36311:case 36292:return TX}}function jX(J,Q){J.uniform1fv(this.addr,Q)}function yX(J,Q){let $=I8(Q,this.size,2);J.uniform2fv(this.addr,$)}function vX(J,Q){let $=I8(Q,this.size,3);J.uniform3fv(this.addr,$)}function fX(J,Q){let $=I8(Q,this.size,4);J.uniform4fv(this.addr,$)}function bX(J,Q){let $=I8(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function hX(J,Q){let $=I8(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function xX(J,Q){let $=I8(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function gX(J,Q){J.uniform1iv(this.addr,Q)}function pX(J,Q){J.uniform2iv(this.addr,Q)}function mX(J,Q){J.uniform3iv(this.addr,Q)}function dX(J,Q){J.uniform4iv(this.addr,Q)}function lX(J,Q){J.uniform1uiv(this.addr,Q)}function uX(J,Q){J.uniform2uiv(this.addr,Q)}function cX(J,Q){J.uniform3uiv(this.addr,Q)}function nX(J,Q){J.uniform4uiv(this.addr,Q)}function sX(J,Q,$){let Z=this.cache,W=Q.length,K=u6($,W);if(!EJ(Z,K))J.uniform1iv(this.addr,K),DJ(Z,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=tQ;else H=XW;for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function iX(J,Q,$){let Z=this.cache,W=Q.length,K=u6($,W);if(!EJ(Z,K))J.uniform1iv(this.addr,K),DJ(Z,K);for(let H=0;H!==W;++H)$.setTexture3D(Q[H]||GW,K[H])}function oX(J,Q,$){let Z=this.cache,W=Q.length,K=u6($,W);if(!EJ(Z,K))J.uniform1iv(this.addr,K),DJ(Z,K);for(let H=0;H!==W;++H)$.setTextureCube(Q[H]||NW,K[H])}function aX(J,Q,$){let Z=this.cache,W=Q.length,K=u6($,W);if(!EJ(Z,K))J.uniform1iv(this.addr,K),DJ(Z,K);for(let H=0;H!==W;++H)$.setTexture2DArray(Q[H]||UW,K[H])}function rX(J){switch(J){case 5126:return jX;case 35664:return yX;case 35665:return vX;case 35666:return fX;case 35674:return bX;case 35675:return hX;case 35676:return xX;case 5124:case 35670:return gX;case 35667:case 35671:return pX;case 35668:case 35672:return mX;case 35669:case 35673:return dX;case 5125:return lX;case 36294:return uX;case 36295:return cX;case 36296:return nX;case 35678:case 36198:case 36298:case 36306:case 35682:return sX;case 35679:case 36299:case 36307:return iX;case 35680:case 36300:case 36308:case 36293:return oX;case 36289:case 36303:case 36311:case 36292:return aX}}class qW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=SX(Q.type)}}class EW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=rX(Q.type)}}class DW{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){let H=Z[W];H.setValue(J,Q[H.id],$)}}}var oQ=/(\w+)(\])?(\[|\.)?/g;function iZ(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function tX(J,Q,$){let Z=J.name,W=Z.length;oQ.lastIndex=0;while(!0){let K=oQ.exec(Z),H=oQ.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===W){iZ($,U===void 0?new qW(Y,J,Q):new EW(Y,J,Q));break}else{let q=$.map[Y];if(q===void 0)q=new DW(Y),iZ($,q);$=q}}}class l8{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);tX(H,Y,this)}let Z=[],W=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(K);else W.push(K);if(Z.length>0)this.seq=Z.concat(W)}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,K=Q.length;W!==K;++W){let H=Q[W],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let K=J[Z];if(K.id in Q)$.push(K)}return $}}function oZ(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var eX=37297,JU=0;function QU(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=W;H<K;H++){let Y=H+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return Z.join(`
`)}var aZ=new _0;function $U(J){x0._getMatrix(aZ,x0.workingColorSpace,J);let Q=`mat3( ${aZ.elements.map(($)=>$.toFixed(4))} )`;switch(x0.getTransfer(J)){case FQ:return[Q,"LinearTransferOETF"];case r0:return[Q,"sRGBTransferOETF"];default:return C0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function rZ(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(Z&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+QU(J.getShaderSource(Q),Y)}else return K}function ZU(J,Q){let $=$U(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var WU={[w7]:"Linear",[I7]:"Reinhard",[A7]:"Cineon",[C7]:"ACESFilmic",[_7]:"AgX",[T7]:"Neutral",[P7]:"Custom"};function KU(J,Q){let $=WU[Q];if($===void 0)return C0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var d6=new b;function HU(){x0.getLuminanceCoefficients(d6);let J=d6.x.toFixed(4),Q=d6.y.toFixed(4),$=d6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function YU(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(d8).join(`
`)}function XU(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function UU(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let K=J.getActiveAttrib(Q,W),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function d8(J){return J!==""}function tZ(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function eZ(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var GU=/^[ \t]*#include +<([\w\d./]+)>/gm;function eQ(J){return J.replace(GU,qU)}var NU=new Map;function qU(J,Q){let $=j0[Q];if($===void 0){let Z=NU.get(Q);if(Z!==void 0)$=j0[Z],C0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return eQ($)}var EU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function JW(J){return J.replace(EU,DU)}function DU(J,Q,$,Z){let W="";for(let K=parseInt(Q);K<parseInt($);K++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function QW(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var FU={[j8]:"SHADOWMAP_TYPE_PCF",[O8]:"SHADOWMAP_TYPE_VSM"};function OU(J){return FU[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var RU={[M8]:"ENVMAP_TYPE_CUBE",[g9]:"ENVMAP_TYPE_CUBE",[v8]:"ENVMAP_TYPE_CUBE_UV"};function kU(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return RU[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var MU={[g9]:"ENVMAP_MODE_REFRACTION"};function LU(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return MU[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var VU={[UZ]:"ENVMAP_BLENDING_MULTIPLY",[GZ]:"ENVMAP_BLENDING_MIX",[NZ]:"ENVMAP_BLENDING_ADD"};function BU(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return VU[J.combine]||"ENVMAP_BLENDING_NONE"}function zU(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function wU(J,Q,$,Z){let W=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=OU($),U=kU($),N=LU($),q=BU($),G=zU($),F=YU($),L=XU(K),z=W.createProgram(),D,E,_=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(D=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L].filter(d8).join(`
`),D.length>0)D+=`
`;if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L].filter(d8).join(`
`),E.length>0)E+=`
`}else D=[QW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(d8).join(`
`),E=[QW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,L,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+N:"",$.envMap?"#define "+q:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==sJ?"#define TONE_MAPPING":"",$.toneMapping!==sJ?j0.tonemapping_pars_fragment:"",$.toneMapping!==sJ?KU("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",j0.colorspace_pars_fragment,ZU("linearToOutputTexel",$.outputColorSpace),HU(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(d8).join(`
`);if(H=eQ(H),H=tZ(H,$),H=eZ(H,$),Y=eQ(Y),Y=tZ(Y,$),Y=eZ(Y,$),H=JW(H),Y=JW(Y),$.isRawShaderMaterial!==!0)_=`#version 300 es
`,D=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+D,E=["#define varying in",$.glslVersion===OQ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===OQ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let C=_+D+H,V=_+E+Y,I=oZ(W,W.VERTEX_SHADER,C),w=oZ(W,W.FRAGMENT_SHADER,V);if(W.attachShader(z,I),W.attachShader(z,w),$.index0AttributeName!==void 0)W.bindAttribLocation(z,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)W.bindAttribLocation(z,0,"position");W.linkProgram(z);function P(A){if(J.debug.checkShaderErrors){let m=W.getProgramInfoLog(z)||"",o=W.getShaderInfoLog(I)||"",p=W.getShaderInfoLog(w)||"",n=m.trim(),u=o.trim(),h=p.trim(),t=!0,e=!0;if(W.getProgramParameter(z,W.LINK_STATUS)===!1)if(t=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,z,I,w);else{let H0=rZ(W,I,"vertex"),M0=rZ(W,w,"fragment");P0("WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(z,W.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+n+`
`+H0+`
`+M0)}else if(n!=="")C0("WebGLProgram: Program Info Log:",n);else if(u===""||h==="")e=!1;if(e)A.diagnostics={runnable:t,programLog:n,vertexShader:{log:u,prefix:D},fragmentShader:{log:h,prefix:E}}}W.deleteShader(I),W.deleteShader(w),R=new l8(W,z),B=UU(W,z)}let R;this.getUniforms=function(){if(R===void 0)P(this);return R};let B;this.getAttributes=function(){if(B===void 0)P(this);return B};let l=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(l===!1)l=W.getProgramParameter(z,eX);return l},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(z),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=JU++,this.cacheKey=Q,this.usedTimes=1,this.program=z,this.vertexShader=I,this.fragmentShader=w,this}var IU=0;class FW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new OW(J),Q.set(J,$);return $}}class OW{constructor(J){this.id=IU++,this.code=J,this.usedTimes=0}}function AU(J){return J===l9||J===w6||J===I6}function CU(J,Q,$,Z,W,K){let H=new _6,Y=new FW,X=new Set,U=[],N=new Map,q=Z.logarithmicDepthBuffer,G=Z.precision,F={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(R){if(X.add(R),R===0)return"uv";return`uv${R}`}function z(R,B,l,A,m,o){let p=A.fog,n=m.geometry,u=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?A.environment:null,h=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,t=Q.get(R.envMap||u,h),e=!!t&&t.mapping===v8?t.image.height:null,H0=F[R.type];if(R.precision!==null){if(G=Z.getMaxPrecision(R.precision),G!==R.precision)C0("WebGLProgram.getParameters:",R.precision,"not supported, using",G,"instead.")}let M0=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,k0=M0!==void 0?M0.length:0,ZJ=0;if(n.morphAttributes.position!==void 0)ZJ=1;if(n.morphAttributes.normal!==void 0)ZJ=2;if(n.morphAttributes.color!==void 0)ZJ=3;let i0,i,Z0,D0;if(H0){let T0=$9[H0];i0=T0.vertexShader,i=T0.fragmentShader}else{i0=R.vertexShader,i=R.fragmentShader;let T0=Y.getVertexShaderStage(R),HJ=Y.getFragmentShaderStage(R);Y.update(R,T0,HJ),Z0=T0.id,D0=HJ.id}let F0=J.getRenderTarget(),A0=J.state.buffers.depth.getReversed(),p0=m.isInstancedMesh===!0,f0=m.isBatchedMesh===!0,b0=!!R.map,t0=!!R.matcap,m0=!!t,h0=!!R.aoMap,FJ=!!R.lightMap,bJ=!!R.bumpMap&&R.wireframe===!1,QJ=!!R.normalMap,kJ=!!R.displacementMap,OJ=!!R.emissiveMap,qJ=!!R.metalnessMap,j=!!R.roughnessMap,hJ=R.anisotropy>0,c0=R.clearcoat>0,$J=R.dispersion>0,M=R.iridescence>0,O=R.sheen>0,T=R.transmission>0,g=hJ&&!!R.anisotropyMap,r=c0&&!!R.clearcoatMap,J0=c0&&!!R.clearcoatNormalMap,Y0=c0&&!!R.clearcoatRoughnessMap,d=M&&!!R.iridescenceMap,s=M&&!!R.iridescenceThicknessMap,q0=O&&!!R.sheenColorMap,V0=O&&!!R.sheenRoughnessMap,X0=!!R.specularMap,Q0=!!R.specularColorMap,w0=!!R.specularIntensityMap,I0=T&&!!R.transmissionMap,u0=T&&!!R.thicknessMap,S=!!R.gradientMap,$0=!!R.alphaMap,c=R.alphaTest>0,W0=!!R.alphaHash,E0=!!R.extensions,a=sJ;if(R.toneMapped){if(F0===null||F0.isXRRenderTarget===!0)a=J.toneMapping}let K0={shaderID:H0,shaderType:R.type,shaderName:R.name,vertexShader:i0,fragmentShader:i,defines:R.defines,customVertexShaderID:Z0,customFragmentShaderID:D0,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:G,batching:f0,batchingColor:f0&&m._colorsTexture!==null,instancing:p0,instancingColor:p0&&m.instanceColor!==null,instancingMorph:p0&&m.morphTexture!==null,outputColorSpace:F0===null?J.outputColorSpace:F0.isXRRenderTarget===!0?F0.texture.colorSpace:x0.workingColorSpace,alphaToCoverage:!!R.alphaToCoverage,map:b0,matcap:t0,envMap:m0,envMapMode:m0&&t.mapping,envMapCubeUVHeight:e,aoMap:h0,lightMap:FJ,bumpMap:bJ,normalMap:QJ,displacementMap:kJ,emissiveMap:OJ,normalMapObjectSpace:QJ&&R.normalMapType===BZ,normalMapTangentSpace:QJ&&R.normalMapType===EQ,packedNormalMap:QJ&&R.normalMapType===EQ&&AU(R.normalMap.format),metalnessMap:qJ,roughnessMap:j,anisotropy:hJ,anisotropyMap:g,clearcoat:c0,clearcoatMap:r,clearcoatNormalMap:J0,clearcoatRoughnessMap:Y0,dispersion:$J,iridescence:M,iridescenceMap:d,iridescenceThicknessMap:s,sheen:O,sheenColorMap:q0,sheenRoughnessMap:V0,specularMap:X0,specularColorMap:Q0,specularIntensityMap:w0,transmission:T,transmissionMap:I0,thicknessMap:u0,gradientMap:S,opaque:R.transparent===!1&&R.blending===y8&&R.alphaToCoverage===!1,alphaMap:$0,alphaTest:c,alphaHash:W0,combine:R.combine,mapUv:b0&&L(R.map.channel),aoMapUv:h0&&L(R.aoMap.channel),lightMapUv:FJ&&L(R.lightMap.channel),bumpMapUv:bJ&&L(R.bumpMap.channel),normalMapUv:QJ&&L(R.normalMap.channel),displacementMapUv:kJ&&L(R.displacementMap.channel),emissiveMapUv:OJ&&L(R.emissiveMap.channel),metalnessMapUv:qJ&&L(R.metalnessMap.channel),roughnessMapUv:j&&L(R.roughnessMap.channel),anisotropyMapUv:g&&L(R.anisotropyMap.channel),clearcoatMapUv:r&&L(R.clearcoatMap.channel),clearcoatNormalMapUv:J0&&L(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y0&&L(R.clearcoatRoughnessMap.channel),iridescenceMapUv:d&&L(R.iridescenceMap.channel),iridescenceThicknessMapUv:s&&L(R.iridescenceThicknessMap.channel),sheenColorMapUv:q0&&L(R.sheenColorMap.channel),sheenRoughnessMapUv:V0&&L(R.sheenRoughnessMap.channel),specularMapUv:X0&&L(R.specularMap.channel),specularColorMapUv:Q0&&L(R.specularColorMap.channel),specularIntensityMapUv:w0&&L(R.specularIntensityMap.channel),transmissionMapUv:I0&&L(R.transmissionMap.channel),thicknessMapUv:u0&&L(R.thicknessMap.channel),alphaMapUv:$0&&L(R.alphaMap.channel),vertexTangents:!!n.attributes.tangent&&(QJ||hJ),vertexNormals:!!n.attributes.normal,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!n.attributes.uv&&(b0||$0),fog:!!p,useFog:R.fog===!0,fogExp2:!!p&&p.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||n.attributes.normal===void 0&&QJ===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:q,reversedDepthBuffer:A0,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:n.attributes.position!==void 0,morphTargets:n.morphAttributes.position!==void 0,morphNormals:n.morphAttributes.normal!==void 0,morphColors:n.morphAttributes.color!==void 0,morphTargetsCount:k0,morphTextureStride:ZJ,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:o.length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:R.dithering,shadowMapEnabled:J.shadowMap.enabled&&l.length>0,shadowMapType:J.shadowMap.type,toneMapping:a,decodeVideoTexture:b0&&R.map.isVideoTexture===!0&&x0.getTransfer(R.map.colorSpace)===r0,decodeVideoTextureEmissive:OJ&&R.emissiveMap.isVideoTexture===!0&&x0.getTransfer(R.emissiveMap.colorSpace)===r0,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===tJ,flipSided:R.side===CJ,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:E0&&R.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(E0&&R.extensions.multiDraw===!0||f0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return K0.vertexUv1s=X.has(1),K0.vertexUv2s=X.has(2),K0.vertexUv3s=X.has(3),X.clear(),K0}function D(R){let B=[];if(R.shaderID)B.push(R.shaderID);else B.push(R.customVertexShaderID),B.push(R.customFragmentShaderID);if(R.defines!==void 0)for(let l in R.defines)B.push(l),B.push(R.defines[l]);if(R.isRawShaderMaterial===!1)E(B,R),_(B,R),B.push(J.outputColorSpace);return B.push(R.customProgramCacheKey),B.join()}function E(R,B){R.push(B.precision),R.push(B.outputColorSpace),R.push(B.envMapMode),R.push(B.envMapCubeUVHeight),R.push(B.mapUv),R.push(B.alphaMapUv),R.push(B.lightMapUv),R.push(B.aoMapUv),R.push(B.bumpMapUv),R.push(B.normalMapUv),R.push(B.displacementMapUv),R.push(B.emissiveMapUv),R.push(B.metalnessMapUv),R.push(B.roughnessMapUv),R.push(B.anisotropyMapUv),R.push(B.clearcoatMapUv),R.push(B.clearcoatNormalMapUv),R.push(B.clearcoatRoughnessMapUv),R.push(B.iridescenceMapUv),R.push(B.iridescenceThicknessMapUv),R.push(B.sheenColorMapUv),R.push(B.sheenRoughnessMapUv),R.push(B.specularMapUv),R.push(B.specularColorMapUv),R.push(B.specularIntensityMapUv),R.push(B.transmissionMapUv),R.push(B.thicknessMapUv),R.push(B.combine),R.push(B.fogExp2),R.push(B.sizeAttenuation),R.push(B.morphTargetsCount),R.push(B.morphAttributeCount),R.push(B.numDirLights),R.push(B.numPointLights),R.push(B.numSpotLights),R.push(B.numSpotLightMaps),R.push(B.numHemiLights),R.push(B.numRectAreaLights),R.push(B.numDirLightShadows),R.push(B.numPointLightShadows),R.push(B.numSpotLightShadows),R.push(B.numSpotLightShadowsWithMaps),R.push(B.numLightProbes),R.push(B.shadowMapType),R.push(B.toneMapping),R.push(B.numClippingPlanes),R.push(B.numClipIntersection),R.push(B.depthPacking)}function _(R,B){if(H.disableAll(),B.instancing)H.enable(0);if(B.instancingColor)H.enable(1);if(B.instancingMorph)H.enable(2);if(B.matcap)H.enable(3);if(B.envMap)H.enable(4);if(B.normalMapObjectSpace)H.enable(5);if(B.normalMapTangentSpace)H.enable(6);if(B.clearcoat)H.enable(7);if(B.iridescence)H.enable(8);if(B.alphaTest)H.enable(9);if(B.vertexColors)H.enable(10);if(B.vertexAlphas)H.enable(11);if(B.vertexUv1s)H.enable(12);if(B.vertexUv2s)H.enable(13);if(B.vertexUv3s)H.enable(14);if(B.vertexTangents)H.enable(15);if(B.anisotropy)H.enable(16);if(B.alphaHash)H.enable(17);if(B.batching)H.enable(18);if(B.dispersion)H.enable(19);if(B.batchingColor)H.enable(20);if(B.gradientMap)H.enable(21);if(B.packedNormalMap)H.enable(22);if(B.vertexNormals)H.enable(23);if(R.push(H.mask),H.disableAll(),B.fog)H.enable(0);if(B.useFog)H.enable(1);if(B.flatShading)H.enable(2);if(B.logarithmicDepthBuffer)H.enable(3);if(B.reversedDepthBuffer)H.enable(4);if(B.skinning)H.enable(5);if(B.morphTargets)H.enable(6);if(B.morphNormals)H.enable(7);if(B.morphColors)H.enable(8);if(B.premultipliedAlpha)H.enable(9);if(B.shadowMapEnabled)H.enable(10);if(B.doubleSided)H.enable(11);if(B.flipSided)H.enable(12);if(B.useDepthPacking)H.enable(13);if(B.dithering)H.enable(14);if(B.transmission)H.enable(15);if(B.sheen)H.enable(16);if(B.opaque)H.enable(17);if(B.pointsUvs)H.enable(18);if(B.decodeVideoTexture)H.enable(19);if(B.decodeVideoTextureEmissive)H.enable(20);if(B.alphaToCoverage)H.enable(21);if(B.numLightProbeGrids>0)H.enable(22);if(B.hasPositionAttribute)H.enable(23);R.push(H.mask)}function C(R){let B=F[R.type],l;if(B){let A=$9[B];l=fZ.clone(A.uniforms)}else l=R.uniforms;return l}function V(R,B){let l=N.get(B);if(l!==void 0)++l.usedTimes;else l=new wU(J,B,R,W),U.push(l),N.set(B,l);return l}function I(R){if(--R.usedTimes===0){let B=U.indexOf(R);U[B]=U[U.length-1],U.pop(),N.delete(R.cacheKey),R.destroy()}}function w(R){Y.remove(R)}function P(){Y.dispose()}return{getParameters:z,getProgramCacheKey:D,getUniforms:C,acquireProgram:V,releaseProgram:I,releaseShaderCache:w,programs:U,dispose:P}}function PU(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function Z(H){J.delete(H)}function W(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:K}}function _U(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function $W(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function ZW(){let J=[],Q=0,$=[],Z=[],W=[];function K(){Q=0,$.length=0,Z.length=0,W.length=0}function H(G){let F=0;if(G.isInstancedMesh)F+=2;if(G.isSkinnedMesh)F+=1;return F}function Y(G,F,L,z,D,E){let _=J[Q];if(_===void 0)_={id:G.id,object:G,geometry:F,material:L,materialVariant:H(G),groupOrder:z,renderOrder:G.renderOrder,z:D,group:E},J[Q]=_;else _.id=G.id,_.object=G,_.geometry=F,_.material=L,_.materialVariant=H(G),_.groupOrder=z,_.renderOrder=G.renderOrder,_.z=D,_.group=E;return Q++,_}function X(G,F,L,z,D,E){let _=Y(G,F,L,z,D,E);if(L.transmission>0)Z.push(_);else if(L.transparent===!0)W.push(_);else $.push(_)}function U(G,F,L,z,D,E){let _=Y(G,F,L,z,D,E);if(L.transmission>0)Z.unshift(_);else if(L.transparent===!0)W.unshift(_);else $.unshift(_)}function N(G,F,L){if($.length>1)$.sort(G||_U);if(Z.length>1)Z.sort(F||$W);if(W.length>1)W.sort(F||$W);if(L)$.reverse(),Z.reverse(),W.reverse()}function q(){for(let G=Q,F=J.length;G<F;G++){let L=J[G];if(L.id===null)break;L.id=null,L.object=null,L.geometry=null,L.material=null,L.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:K,push:X,unshift:U,finish:q,sort:N}}function TU(){let J=new WeakMap;function Q(Z,W){let K=J.get(Z),H;if(K===void 0)H=new ZW,J.set(Z,[H]);else if(W>=K.length)H=new ZW,K.push(H);else H=K[W];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function SU(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new b,color:new l0};break;case"SpotLight":$={position:new b,direction:new b,color:new l0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new b,color:new l0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new b,skyColor:new l0,groundColor:new l0};break;case"RectAreaLight":$={color:new l0,position:new b,halfWidth:new b,halfHeight:new b};break}return J[Q.id]=$,$}}}function jU(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new v0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new v0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new v0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var yU=0;function vU(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function fU(J){let Q=new SU,$=jU(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new b);let W=new b,K=new WJ,H=new WJ;function Y(U){let N=0,q=0,G=0;for(let B=0;B<9;B++)Z.probe[B].set(0,0,0);let F=0,L=0,z=0,D=0,E=0,_=0,C=0,V=0,I=0,w=0,P=0;U.sort(vU);for(let B=0,l=U.length;B<l;B++){let A=U[B],m=A.color,o=A.intensity,p=A.distance,n=null;if(A.shadow&&A.shadow.map)if(A.shadow.map.texture.format===l9)n=A.shadow.map.texture;else n=A.shadow.map.depthTexture||A.shadow.map.texture;if(A.isAmbientLight)N+=m.r*o,q+=m.g*o,G+=m.b*o;else if(A.isLightProbe){for(let u=0;u<9;u++)Z.probe[u].addScaledVector(A.sh.coefficients[u],o);P++}else if(A.isDirectionalLight){let u=Q.get(A);if(u.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let h=A.shadow,t=$.get(A);t.shadowIntensity=h.intensity,t.shadowBias=h.bias,t.shadowNormalBias=h.normalBias,t.shadowRadius=h.radius,t.shadowMapSize=h.mapSize,Z.directionalShadow[F]=t,Z.directionalShadowMap[F]=n,Z.directionalShadowMatrix[F]=A.shadow.matrix,_++}Z.directional[F]=u,F++}else if(A.isSpotLight){let u=Q.get(A);u.position.setFromMatrixPosition(A.matrixWorld),u.color.copy(m).multiplyScalar(o),u.distance=p,u.coneCos=Math.cos(A.angle),u.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),u.decay=A.decay,Z.spot[z]=u;let h=A.shadow;if(A.map){if(Z.spotLightMap[I]=A.map,I++,h.updateMatrices(A),A.castShadow)w++}if(Z.spotLightMatrix[z]=h.matrix,A.castShadow){let t=$.get(A);t.shadowIntensity=h.intensity,t.shadowBias=h.bias,t.shadowNormalBias=h.normalBias,t.shadowRadius=h.radius,t.shadowMapSize=h.mapSize,Z.spotShadow[z]=t,Z.spotShadowMap[z]=n,V++}z++}else if(A.isRectAreaLight){let u=Q.get(A);u.color.copy(m).multiplyScalar(o),u.halfWidth.set(A.width*0.5,0,0),u.halfHeight.set(0,A.height*0.5,0),Z.rectArea[D]=u,D++}else if(A.isPointLight){let u=Q.get(A);if(u.color.copy(A.color).multiplyScalar(A.intensity),u.distance=A.distance,u.decay=A.decay,A.castShadow){let h=A.shadow,t=$.get(A);t.shadowIntensity=h.intensity,t.shadowBias=h.bias,t.shadowNormalBias=h.normalBias,t.shadowRadius=h.radius,t.shadowMapSize=h.mapSize,t.shadowCameraNear=h.camera.near,t.shadowCameraFar=h.camera.far,Z.pointShadow[L]=t,Z.pointShadowMap[L]=n,Z.pointShadowMatrix[L]=A.shadow.matrix,C++}Z.point[L]=u,L++}else if(A.isHemisphereLight){let u=Q.get(A);u.skyColor.copy(A.color).multiplyScalar(o),u.groundColor.copy(A.groundColor).multiplyScalar(o),Z.hemi[E]=u,E++}}if(D>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=U0.LTC_FLOAT_1,Z.rectAreaLTC2=U0.LTC_FLOAT_2;else Z.rectAreaLTC1=U0.LTC_HALF_1,Z.rectAreaLTC2=U0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=q,Z.ambient[2]=G;let R=Z.hash;if(R.directionalLength!==F||R.pointLength!==L||R.spotLength!==z||R.rectAreaLength!==D||R.hemiLength!==E||R.numDirectionalShadows!==_||R.numPointShadows!==C||R.numSpotShadows!==V||R.numSpotMaps!==I||R.numLightProbes!==P)Z.directional.length=F,Z.spot.length=z,Z.rectArea.length=D,Z.point.length=L,Z.hemi.length=E,Z.directionalShadow.length=_,Z.directionalShadowMap.length=_,Z.pointShadow.length=C,Z.pointShadowMap.length=C,Z.spotShadow.length=V,Z.spotShadowMap.length=V,Z.directionalShadowMatrix.length=_,Z.pointShadowMatrix.length=C,Z.spotLightMatrix.length=V+I-w,Z.spotLightMap.length=I,Z.numSpotLightShadowsWithMaps=w,Z.numLightProbes=P,R.directionalLength=F,R.pointLength=L,R.spotLength=z,R.rectAreaLength=D,R.hemiLength=E,R.numDirectionalShadows=_,R.numPointShadows=C,R.numSpotShadows=V,R.numSpotMaps=I,R.numLightProbes=P,Z.version=yU++}function X(U,N){let q=0,G=0,F=0,L=0,z=0,D=N.matrixWorldInverse;for(let E=0,_=U.length;E<_;E++){let C=U[E];if(C.isDirectionalLight){let V=Z.directional[q];V.direction.setFromMatrixPosition(C.matrixWorld),W.setFromMatrixPosition(C.target.matrixWorld),V.direction.sub(W),V.direction.transformDirection(D),q++}else if(C.isSpotLight){let V=Z.spot[F];V.position.setFromMatrixPosition(C.matrixWorld),V.position.applyMatrix4(D),V.direction.setFromMatrixPosition(C.matrixWorld),W.setFromMatrixPosition(C.target.matrixWorld),V.direction.sub(W),V.direction.transformDirection(D),F++}else if(C.isRectAreaLight){let V=Z.rectArea[L];V.position.setFromMatrixPosition(C.matrixWorld),V.position.applyMatrix4(D),H.identity(),K.copy(C.matrixWorld),K.premultiply(D),H.extractRotation(K),V.halfWidth.set(C.width*0.5,0,0),V.halfHeight.set(0,C.height*0.5,0),V.halfWidth.applyMatrix4(H),V.halfHeight.applyMatrix4(H),L++}else if(C.isPointLight){let V=Z.point[G];V.position.setFromMatrixPosition(C.matrixWorld),V.position.applyMatrix4(D),G++}else if(C.isHemisphereLight){let V=Z.hemi[z];V.direction.setFromMatrixPosition(C.matrixWorld),V.direction.transformDirection(D),z++}}}return{setup:Y,setupView:X,state:Z}}function WW(J){let Q=new fU(J),$=[],Z=[],W=[];function K(G){q.camera=G,$.length=0,Z.length=0,W.length=0}function H(G){$.push(G)}function Y(G){Z.push(G)}function X(G){W.push(G)}function U(){Q.setup($)}function N(G){Q.setupView($,G)}let q={lightsArray:$,shadowsArray:Z,lightProbeGridArray:W,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:q,setupLights:U,setupLightsView:N,pushLight:H,pushShadow:Y,pushLightProbeGrid:X}}function bU(J){let Q=new WeakMap;function $(W,K=0){let H=Q.get(W),Y;if(H===void 0)Y=new WW(J),Q.set(W,[Y]);else if(K>=H.length)Y=new WW(J),H.push(Y);else Y=H[K];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var hU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gU=[new b(1,0,0),new b(-1,0,0),new b(0,1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1)],pU=[new b(0,-1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1),new b(0,-1,0),new b(0,-1,0)],KW=new WJ,m8=new b,aQ=new b;function mU(J,Q,$){let Z=new f6,W=new v0,K=new v0,H=new KJ,Y=new CQ,X=new PQ,U={},N=$.maxTextureSize,q={[R8]:CJ,[CJ]:R8,[tJ]:tJ},G=new IJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new v0},radius:{value:4}},vertexShader:hU,fragmentShader:xU}),F=G.clone();F.defines.HORIZONTAL_PASS=1;let L=new yJ;L.setAttribute("position",new NJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let z=new vJ(L,G),D=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=j8;let E=this.type;this.render=function(w,P,R){if(D.enabled===!1)return;if(D.autoUpdate===!1&&D.needsUpdate===!1)return;if(w.length===0)return;if(this.type===f$)C0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=j8;let B=J.getRenderTarget(),l=J.getActiveCubeFace(),A=J.getActiveMipmapLevel(),m=J.state;if(m.setBlending(eJ),m.buffers.depth.getReversed()===!0)m.buffers.color.setClear(0,0,0,0);else m.buffers.color.setClear(1,1,1,1);m.buffers.depth.setTest(!0),m.setScissorTest(!1);let o=E!==this.type;if(o)P.traverse(function(p){if(p.material)if(Array.isArray(p.material))p.material.forEach((n)=>n.needsUpdate=!0);else p.material.needsUpdate=!0});for(let p=0,n=w.length;p<n;p++){let u=w[p],h=u.shadow;if(h===void 0){C0("WebGLShadowMap:",u,"has no shadow.");continue}if(h.autoUpdate===!1&&h.needsUpdate===!1)continue;W.copy(h.mapSize);let t=h.getFrameExtents();if(W.multiply(t),K.copy(h.mapSize),W.x>N||W.y>N){if(W.x>N)K.x=Math.floor(N/t.x),W.x=K.x*t.x,h.mapSize.x=K.x;if(W.y>N)K.y=Math.floor(N/t.y),W.y=K.y*t.y,h.mapSize.y=K.y}let e=J.state.buffers.depth.getReversed();if(h.camera._reversedDepth=e,h.map===null||o===!0){if(h.map!==null){if(h.map.depthTexture!==null)h.map.depthTexture.dispose(),h.map.depthTexture=null;h.map.dispose()}if(this.type===O8){if(u.isPointLight){C0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}h.map=new mJ(W.x,W.y,{format:l9,type:D9,minFilter:PJ,magFilter:PJ,generateMipmaps:!1}),h.map.texture.name=u.name+".shadowMap",h.map.depthTexture=new S9(W.x,W.y,E9),h.map.depthTexture.name=u.name+".shadowMapDepth",h.map.depthTexture.format=m9,h.map.depthTexture.compareFunction=null,h.map.depthTexture.minFilter=_9,h.map.depthTexture.magFilter=_9}else{if(u.isPointLight)h.map=new J$(W.x),h.map.depthTexture=new wQ(W.x,T9);else h.map=new mJ(W.x,W.y),h.map.depthTexture=new S9(W.x,W.y,T9);if(h.map.depthTexture.name=u.name+".shadowMap",h.map.depthTexture.format=m9,this.type===j8)h.map.depthTexture.compareFunction=e?C6:A6,h.map.depthTexture.minFilter=PJ,h.map.depthTexture.magFilter=PJ;else h.map.depthTexture.compareFunction=null,h.map.depthTexture.minFilter=_9,h.map.depthTexture.magFilter=_9}h.camera.updateProjectionMatrix()}let H0=h.map.isWebGLCubeRenderTarget?6:1;for(let M0=0;M0<H0;M0++){if(h.map.isWebGLCubeRenderTarget)J.setRenderTarget(h.map,M0),J.clear();else{if(M0===0)J.setRenderTarget(h.map),J.clear();let k0=h.getViewport(M0);H.set(K.x*k0.x,K.y*k0.y,K.x*k0.z,K.y*k0.w),m.viewport(H)}if(u.isPointLight){let{camera:k0,matrix:ZJ}=h,i0=u.distance||k0.far;if(i0!==k0.far)k0.far=i0,k0.updateProjectionMatrix();m8.setFromMatrixPosition(u.matrixWorld),k0.position.copy(m8),aQ.copy(k0.position),aQ.add(gU[M0]),k0.up.copy(pU[M0]),k0.lookAt(aQ),k0.updateMatrixWorld(),ZJ.makeTranslation(-m8.x,-m8.y,-m8.z),KW.multiplyMatrices(k0.projectionMatrix,k0.matrixWorldInverse),h._frustum.setFromProjectionMatrix(KW,k0.coordinateSystem,k0.reversedDepth)}else h.updateMatrices(u);Z=h.getFrustum(),V(P,R,h.camera,u,this.type)}if(h.isPointLightShadow!==!0&&this.type===O8)_(h,R);h.needsUpdate=!1}E=this.type,D.needsUpdate=!1,J.setRenderTarget(B,l,A)};function _(w,P){let R=Q.update(z);if(G.defines.VSM_SAMPLES!==w.blurSamples)G.defines.VSM_SAMPLES=w.blurSamples,F.defines.VSM_SAMPLES=w.blurSamples,G.needsUpdate=!0,F.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new mJ(W.x,W.y,{format:l9,type:D9});G.uniforms.shadow_pass.value=w.map.depthTexture,G.uniforms.resolution.value=w.mapSize,G.uniforms.radius.value=w.radius,J.setRenderTarget(w.mapPass),J.clear(),J.renderBufferDirect(P,null,R,G,z,null),F.uniforms.shadow_pass.value=w.mapPass.texture,F.uniforms.resolution.value=w.mapSize,F.uniforms.radius.value=w.radius,J.setRenderTarget(w.map),J.clear(),J.renderBufferDirect(P,null,R,F,z,null)}function C(w,P,R,B){let l=null,A=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)l=A;else if(l=R.isPointLight===!0?X:Y,J.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let m=l.uuid,o=P.uuid,p=U[m];if(p===void 0)p={},U[m]=p;let n=p[o];if(n===void 0)n=l.clone(),p[o]=n,P.addEventListener("dispose",I);l=n}if(l.visible=P.visible,l.wireframe=P.wireframe,B===O8)l.side=P.shadowSide!==null?P.shadowSide:P.side;else l.side=P.shadowSide!==null?P.shadowSide:q[P.side];if(l.alphaMap=P.alphaMap,l.alphaTest=P.alphaToCoverage===!0?0.5:P.alphaTest,l.map=P.map,l.clipShadows=P.clipShadows,l.clippingPlanes=P.clippingPlanes,l.clipIntersection=P.clipIntersection,l.displacementMap=P.displacementMap,l.displacementScale=P.displacementScale,l.displacementBias=P.displacementBias,l.wireframeLinewidth=P.wireframeLinewidth,l.linewidth=P.linewidth,R.isPointLight===!0&&l.isMeshDistanceMaterial===!0){let m=J.properties.get(l);m.light=R}return l}function V(w,P,R,B,l){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&l===O8)&&(!w.frustumCulled||Z.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let o=Q.update(w),p=w.material;if(Array.isArray(p)){let n=o.groups;for(let u=0,h=n.length;u<h;u++){let t=n[u],e=p[t.materialIndex];if(e&&e.visible){let H0=C(w,e,B,l);w.onBeforeShadow(J,w,P,R,o,H0,t),J.renderBufferDirect(R,null,o,H0,w,t),w.onAfterShadow(J,w,P,R,o,H0,t)}}}else if(p.visible){let n=C(w,p,B,l);w.onBeforeShadow(J,w,P,R,o,n,null),J.renderBufferDirect(R,null,o,n,w,null),w.onAfterShadow(J,w,P,R,o,n,null)}}}let m=w.children;for(let o=0,p=m.length;o<p;o++)V(m[o],P,R,B,l)}function I(w){w.target.removeEventListener("dispose",I);for(let R in U){let B=U[R],l=w.target.uuid;if(l in B)B[l].dispose(),delete B[l]}}}function dU(J,Q){function $(){let S=!1,$0=new KJ,c=null,W0=new KJ(0,0,0,0);return{setMask:function(E0){if(c!==E0&&!S)J.colorMask(E0,E0,E0,E0),c=E0},setLocked:function(E0){S=E0},setClear:function(E0,a,K0,T0,HJ){if(HJ===!0)E0*=T0,a*=T0,K0*=T0;if($0.set(E0,a,K0,T0),W0.equals($0)===!1)J.clearColor(E0,a,K0,T0),W0.copy($0)},reset:function(){S=!1,c=null,W0.set(-1,0,0,0)}}}function Z(){let S=!1,$0=!1,c=null,W0=null,E0=null;return{setReversed:function(a){if($0!==a){let K0=Q.get("EXT_clip_control");if(a)K0.clipControlEXT(K0.LOWER_LEFT_EXT,K0.ZERO_TO_ONE_EXT);else K0.clipControlEXT(K0.LOWER_LEFT_EXT,K0.NEGATIVE_ONE_TO_ONE_EXT);$0=a;let T0=E0;E0=null,this.setClear(T0)}},getReversed:function(){return $0},setTest:function(a){if(a)F0(J.DEPTH_TEST);else A0(J.DEPTH_TEST)},setMask:function(a){if(c!==a&&!S)J.depthMask(a),c=a},setFunc:function(a){if($0)a=yZ[a];if(W0!==a){switch(a){case $Z:J.depthFunc(J.NEVER);break;case ZZ:J.depthFunc(J.ALWAYS);break;case WZ:J.depthFunc(J.LESS);break;case z7:J.depthFunc(J.LEQUAL);break;case KZ:J.depthFunc(J.EQUAL);break;case HZ:J.depthFunc(J.GEQUAL);break;case YZ:J.depthFunc(J.GREATER);break;case XZ:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}W0=a}},setLocked:function(a){S=a},setClear:function(a){if(E0!==a){if(E0=a,$0)a=1-a;J.clearDepth(a)}},reset:function(){S=!1,c=null,W0=null,E0=null,$0=!1}}}function W(){let S=!1,$0=null,c=null,W0=null,E0=null,a=null,K0=null,T0=null,HJ=null;return{setTest:function(e0){if(!S)if(e0)F0(J.STENCIL_TEST);else A0(J.STENCIL_TEST)},setMask:function(e0){if($0!==e0&&!S)J.stencilMask(e0),$0=e0},setFunc:function(e0,oJ,K9){if(c!==e0||W0!==oJ||E0!==K9)J.stencilFunc(e0,oJ,K9),c=e0,W0=oJ,E0=K9},setOp:function(e0,oJ,K9){if(a!==e0||K0!==oJ||T0!==K9)J.stencilOp(e0,oJ,K9),a=e0,K0=oJ,T0=K9},setLocked:function(e0){S=e0},setClear:function(e0){if(HJ!==e0)J.clearStencil(e0),HJ=e0},reset:function(){S=!1,$0=null,c=null,W0=null,E0=null,a=null,K0=null,T0=null,HJ=null}}}let K=new $,H=new Z,Y=new W,X=new WeakMap,U=new WeakMap,N={},q={},G={},F=new WeakMap,L=[],z=null,D=!1,E=null,_=null,C=null,V=null,I=null,w=null,P=null,R=new l0(0,0,0),B=0,l=!1,A=null,m=null,o=null,p=null,n=null,u=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),h=!1,t=0,e=J.getParameter(J.VERSION);if(e.indexOf("WebGL")!==-1)t=parseFloat(/^WebGL (\d)/.exec(e)[1]),h=t>=1;else if(e.indexOf("OpenGL ES")!==-1)t=parseFloat(/^OpenGL ES (\d)/.exec(e)[1]),h=t>=2;let H0=null,M0={},k0=J.getParameter(J.SCISSOR_BOX),ZJ=J.getParameter(J.VIEWPORT),i0=new KJ().fromArray(k0),i=new KJ().fromArray(ZJ);function Z0(S,$0,c,W0){let E0=new Uint8Array(4),a=J.createTexture();J.bindTexture(S,a),J.texParameteri(S,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(S,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let K0=0;K0<c;K0++)if(S===J.TEXTURE_3D||S===J.TEXTURE_2D_ARRAY)J.texImage3D($0,0,J.RGBA,1,1,W0,0,J.RGBA,J.UNSIGNED_BYTE,E0);else J.texImage2D($0+K0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,E0);return a}let D0={};D0[J.TEXTURE_2D]=Z0(J.TEXTURE_2D,J.TEXTURE_2D,1),D0[J.TEXTURE_CUBE_MAP]=Z0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),D0[J.TEXTURE_2D_ARRAY]=Z0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),D0[J.TEXTURE_3D]=Z0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),F0(J.DEPTH_TEST),H.setFunc(z7),bJ(!1),QJ(M7),F0(J.CULL_FACE),h0(eJ);function F0(S){if(N[S]!==!0)J.enable(S),N[S]=!0}function A0(S){if(N[S]!==!1)J.disable(S),N[S]=!1}function p0(S,$0){if(G[S]!==$0){if(J.bindFramebuffer(S,$0),G[S]=$0,S===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=$0;if(S===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=$0;return!0}return!1}function f0(S,$0){let c=L,W0=!1;if(S){if(c=F.get($0),c===void 0)c=[],F.set($0,c);let E0=S.textures;if(c.length!==E0.length||c[0]!==J.COLOR_ATTACHMENT0){for(let a=0,K0=E0.length;a<K0;a++)c[a]=J.COLOR_ATTACHMENT0+a;c.length=E0.length,W0=!0}}else if(c[0]!==J.BACK)c[0]=J.BACK,W0=!0;if(W0)J.drawBuffers(c)}function b0(S){if(z!==S)return J.useProgram(S),z=S,!0;return!1}let t0={[k8]:J.FUNC_ADD,[h$]:J.FUNC_SUBTRACT,[x$]:J.FUNC_REVERSE_SUBTRACT};t0[g$]=J.MIN,t0[p$]=J.MAX;let m0={[m$]:J.ZERO,[d$]:J.ONE,[l$]:J.SRC_COLOR,[c$]:J.SRC_ALPHA,[r$]:J.SRC_ALPHA_SATURATE,[o$]:J.DST_COLOR,[s$]:J.DST_ALPHA,[u$]:J.ONE_MINUS_SRC_COLOR,[n$]:J.ONE_MINUS_SRC_ALPHA,[a$]:J.ONE_MINUS_DST_COLOR,[i$]:J.ONE_MINUS_DST_ALPHA,[t$]:J.CONSTANT_COLOR,[e$]:J.ONE_MINUS_CONSTANT_COLOR,[JZ]:J.CONSTANT_ALPHA,[QZ]:J.ONE_MINUS_CONSTANT_ALPHA};function h0(S,$0,c,W0,E0,a,K0,T0,HJ,e0){if(S===eJ){if(D===!0)A0(J.BLEND),D=!1;return}if(D===!1)F0(J.BLEND),D=!0;if(S!==b$){if(S!==E||e0!==l){if(_!==k8||I!==k8)J.blendEquation(J.FUNC_ADD),_=k8,I=k8;if(e0)switch(S){case y8:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case L7:J.blendFunc(J.ONE,J.ONE);break;case V7:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case B7:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:P0("WebGLState: Invalid blending: ",S);break}else switch(S){case y8:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case L7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case V7:P0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B7:P0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:P0("WebGLState: Invalid blending: ",S);break}C=null,V=null,w=null,P=null,R.set(0,0,0),B=0,E=S,l=e0}return}if(E0=E0||$0,a=a||c,K0=K0||W0,$0!==_||E0!==I)J.blendEquationSeparate(t0[$0],t0[E0]),_=$0,I=E0;if(c!==C||W0!==V||a!==w||K0!==P)J.blendFuncSeparate(m0[c],m0[W0],m0[a],m0[K0]),C=c,V=W0,w=a,P=K0;if(T0.equals(R)===!1||HJ!==B)J.blendColor(T0.r,T0.g,T0.b,HJ),R.copy(T0),B=HJ;E=S,l=!1}function FJ(S,$0){S.side===tJ?A0(J.CULL_FACE):F0(J.CULL_FACE);let c=S.side===CJ;if($0)c=!c;bJ(c),S.blending===y8&&S.transparent===!1?h0(eJ):h0(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),H.setFunc(S.depthFunc),H.setTest(S.depthTest),H.setMask(S.depthWrite),K.setMask(S.colorWrite);let W0=S.stencilWrite;if(Y.setTest(W0),W0)Y.setMask(S.stencilWriteMask),Y.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),Y.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass);OJ(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?F0(J.SAMPLE_ALPHA_TO_COVERAGE):A0(J.SAMPLE_ALPHA_TO_COVERAGE)}function bJ(S){if(A!==S){if(S)J.frontFace(J.CW);else J.frontFace(J.CCW);A=S}}function QJ(S){if(S!==y$){if(F0(J.CULL_FACE),S!==m)if(S===M7)J.cullFace(J.BACK);else if(S===v$)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else A0(J.CULL_FACE);m=S}function kJ(S){if(S!==o){if(h)J.lineWidth(S);o=S}}function OJ(S,$0,c){if(S){if(F0(J.POLYGON_OFFSET_FILL),p!==$0||n!==c){if(p=$0,n=c,H.getReversed())$0=-$0;J.polygonOffset($0,c)}}else A0(J.POLYGON_OFFSET_FILL)}function qJ(S){if(S)F0(J.SCISSOR_TEST);else A0(J.SCISSOR_TEST)}function j(S){if(S===void 0)S=J.TEXTURE0+u-1;if(H0!==S)J.activeTexture(S),H0=S}function hJ(S,$0,c){if(c===void 0)if(H0===null)c=J.TEXTURE0+u-1;else c=H0;let W0=M0[c];if(W0===void 0)W0={type:void 0,texture:void 0},M0[c]=W0;if(W0.type!==S||W0.texture!==$0){if(H0!==c)J.activeTexture(c),H0=c;J.bindTexture(S,$0||D0[S]),W0.type=S,W0.texture=$0}}function c0(){let S=M0[H0];if(S!==void 0&&S.type!==void 0)J.bindTexture(S.type,null),S.type=void 0,S.texture=void 0}function $J(){try{J.compressedTexImage2D(...arguments)}catch(S){P0("WebGLState:",S)}}function M(){try{J.compressedTexImage3D(...arguments)}catch(S){P0("WebGLState:",S)}}function O(){try{J.texSubImage2D(...arguments)}catch(S){P0("WebGLState:",S)}}function T(){try{J.texSubImage3D(...arguments)}catch(S){P0("WebGLState:",S)}}function g(){try{J.compressedTexSubImage2D(...arguments)}catch(S){P0("WebGLState:",S)}}function r(){try{J.compressedTexSubImage3D(...arguments)}catch(S){P0("WebGLState:",S)}}function J0(){try{J.texStorage2D(...arguments)}catch(S){P0("WebGLState:",S)}}function Y0(){try{J.texStorage3D(...arguments)}catch(S){P0("WebGLState:",S)}}function d(){try{J.texImage2D(...arguments)}catch(S){P0("WebGLState:",S)}}function s(){try{J.texImage3D(...arguments)}catch(S){P0("WebGLState:",S)}}function q0(S){if(q[S]!==void 0)return q[S];else return J.getParameter(S)}function V0(S,$0){if(q[S]!==$0)J.pixelStorei(S,$0),q[S]=$0}function X0(S){if(i0.equals(S)===!1)J.scissor(S.x,S.y,S.z,S.w),i0.copy(S)}function Q0(S){if(i.equals(S)===!1)J.viewport(S.x,S.y,S.z,S.w),i.copy(S)}function w0(S,$0){let c=U.get($0);if(c===void 0)c=new WeakMap,U.set($0,c);let W0=c.get(S);if(W0===void 0)W0=J.getUniformBlockIndex($0,S.name),c.set(S,W0)}function I0(S,$0){let W0=U.get($0).get(S);if(X.get($0)!==W0)J.uniformBlockBinding($0,W0,S.__bindingPointIndex),X.set($0,W0)}function u0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},q={},H0=null,M0={},G={},F=new WeakMap,L=[],z=null,D=!1,E=null,_=null,C=null,V=null,I=null,w=null,P=null,R=new l0(0,0,0),B=0,l=!1,A=null,m=null,o=null,p=null,n=null,i0.set(0,0,J.canvas.width,J.canvas.height),i.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:F0,disable:A0,bindFramebuffer:p0,drawBuffers:f0,useProgram:b0,setBlending:h0,setMaterial:FJ,setFlipSided:bJ,setCullFace:QJ,setLineWidth:kJ,setPolygonOffset:OJ,setScissorTest:qJ,activeTexture:j,bindTexture:hJ,unbindTexture:c0,compressedTexImage2D:$J,compressedTexImage3D:M,texImage2D:d,texImage3D:s,pixelStorei:V0,getParameter:q0,updateUBOMapping:w0,uniformBlockBinding:I0,texStorage2D:J0,texStorage3D:Y0,texSubImage2D:O,texSubImage3D:T,compressedTexSubImage2D:g,compressedTexSubImage3D:r,scissor:X0,viewport:Q0,reset:u0}}function lU(J,Q,$,Z,W,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new v0,N=new WeakMap,q=new Set,G,F=new WeakMap,L=!1;try{L=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function z(M,O){return L?new OffscreenCanvas(M,O):S8("canvas")}function D(M,O,T){let g=1,r=$J(M);if(r.width>T||r.height>T)g=T/Math.max(r.width,r.height);if(g<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let J0=Math.floor(g*r.width),Y0=Math.floor(g*r.height);if(G===void 0)G=z(J0,Y0);let d=O?z(J0,Y0):G;return d.width=J0,d.height=Y0,d.getContext("2d").drawImage(M,0,0,J0,Y0),C0("WebGLRenderer: Texture has been resized from ("+r.width+"x"+r.height+") to ("+J0+"x"+Y0+")."),d}else{if("data"in M)C0("WebGLRenderer: Image in DataTexture is too big ("+r.width+"x"+r.height+").");return M}return M}function E(M){return M.generateMipmaps}function _(M){J.generateMipmap(M)}function C(M){if(M.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(M.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(M,O,T,g,r,J0=!1){if(M!==null){if(J[M]!==void 0)return J[M];C0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Y0;if(g){if(Y0=Q.get("EXT_texture_norm16"),!Y0)C0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let d=O;if(O===J.RED){if(T===J.FLOAT)d=J.R32F;if(T===J.HALF_FLOAT)d=J.R16F;if(T===J.UNSIGNED_BYTE)d=J.R8;if(T===J.UNSIGNED_SHORT&&Y0)d=Y0.R16_EXT;if(T===J.SHORT&&Y0)d=Y0.R16_SNORM_EXT}if(O===J.RED_INTEGER){if(T===J.UNSIGNED_BYTE)d=J.R8UI;if(T===J.UNSIGNED_SHORT)d=J.R16UI;if(T===J.UNSIGNED_INT)d=J.R32UI;if(T===J.BYTE)d=J.R8I;if(T===J.SHORT)d=J.R16I;if(T===J.INT)d=J.R32I}if(O===J.RG){if(T===J.FLOAT)d=J.RG32F;if(T===J.HALF_FLOAT)d=J.RG16F;if(T===J.UNSIGNED_BYTE)d=J.RG8;if(T===J.UNSIGNED_SHORT&&Y0)d=Y0.RG16_EXT;if(T===J.SHORT&&Y0)d=Y0.RG16_SNORM_EXT}if(O===J.RG_INTEGER){if(T===J.UNSIGNED_BYTE)d=J.RG8UI;if(T===J.UNSIGNED_SHORT)d=J.RG16UI;if(T===J.UNSIGNED_INT)d=J.RG32UI;if(T===J.BYTE)d=J.RG8I;if(T===J.SHORT)d=J.RG16I;if(T===J.INT)d=J.RG32I}if(O===J.RGB_INTEGER){if(T===J.UNSIGNED_BYTE)d=J.RGB8UI;if(T===J.UNSIGNED_SHORT)d=J.RGB16UI;if(T===J.UNSIGNED_INT)d=J.RGB32UI;if(T===J.BYTE)d=J.RGB8I;if(T===J.SHORT)d=J.RGB16I;if(T===J.INT)d=J.RGB32I}if(O===J.RGBA_INTEGER){if(T===J.UNSIGNED_BYTE)d=J.RGBA8UI;if(T===J.UNSIGNED_SHORT)d=J.RGBA16UI;if(T===J.UNSIGNED_INT)d=J.RGBA32UI;if(T===J.BYTE)d=J.RGBA8I;if(T===J.SHORT)d=J.RGBA16I;if(T===J.INT)d=J.RGBA32I}if(O===J.RGB){if(T===J.UNSIGNED_SHORT&&Y0)d=Y0.RGB16_EXT;if(T===J.SHORT&&Y0)d=Y0.RGB16_SNORM_EXT;if(T===J.UNSIGNED_INT_5_9_9_9_REV)d=J.RGB9_E5;if(T===J.UNSIGNED_INT_10F_11F_11F_REV)d=J.R11F_G11F_B10F}if(O===J.RGBA){let s=J0?FQ:x0.getTransfer(r);if(T===J.FLOAT)d=J.RGBA32F;if(T===J.HALF_FLOAT)d=J.RGBA16F;if(T===J.UNSIGNED_BYTE)d=s===r0?J.SRGB8_ALPHA8:J.RGBA8;if(T===J.UNSIGNED_SHORT&&Y0)d=Y0.RGBA16_EXT;if(T===J.SHORT&&Y0)d=Y0.RGBA16_SNORM_EXT;if(T===J.UNSIGNED_SHORT_4_4_4_4)d=J.RGBA4;if(T===J.UNSIGNED_SHORT_5_5_5_1)d=J.RGB5_A1}if(d===J.R16F||d===J.R32F||d===J.RG16F||d===J.RG32F||d===J.RGBA16F||d===J.RGBA32F)Q.get("EXT_color_buffer_float");return d}function I(M,O){let T;if(M){if(O===null||O===T9||O===L8)T=J.DEPTH24_STENCIL8;else if(O===E9)T=J.DEPTH32F_STENCIL8;else if(O===b8)T=J.DEPTH24_STENCIL8,C0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(O===null||O===T9||O===L8)T=J.DEPTH_COMPONENT24;else if(O===E9)T=J.DEPTH_COMPONENT32F;else if(O===b8)T=J.DEPTH_COMPONENT16;return T}function w(M,O){if(E(M)===!0||M.isFramebufferTexture&&M.minFilter!==_9&&M.minFilter!==PJ)return Math.log2(Math.max(O.width,O.height))+1;else if(M.mipmaps!==void 0&&M.mipmaps.length>0)return M.mipmaps.length;else if(M.isCompressedTexture&&Array.isArray(M.image))return O.mipmaps.length;else return 1}function P(M){let O=M.target;if(O.removeEventListener("dispose",P),B(O),O.isVideoTexture)N.delete(O);if(O.isHTMLTexture)q.delete(O)}function R(M){let O=M.target;O.removeEventListener("dispose",R),A(O)}function B(M){let O=Z.get(M);if(O.__webglInit===void 0)return;let T=M.source,g=F.get(T);if(g){let r=g[O.__cacheKey];if(r.usedTimes--,r.usedTimes===0)l(M);if(Object.keys(g).length===0)F.delete(T)}Z.remove(M)}function l(M){let O=Z.get(M);J.deleteTexture(O.__webglTexture);let T=M.source,g=F.get(T);delete g[O.__cacheKey],H.memory.textures--}function A(M){let O=Z.get(M);if(M.depthTexture)M.depthTexture.dispose(),Z.remove(M.depthTexture);if(M.isWebGLCubeRenderTarget)for(let g=0;g<6;g++){if(Array.isArray(O.__webglFramebuffer[g]))for(let r=0;r<O.__webglFramebuffer[g].length;r++)J.deleteFramebuffer(O.__webglFramebuffer[g][r]);else J.deleteFramebuffer(O.__webglFramebuffer[g]);if(O.__webglDepthbuffer)J.deleteRenderbuffer(O.__webglDepthbuffer[g])}else{if(Array.isArray(O.__webglFramebuffer))for(let g=0;g<O.__webglFramebuffer.length;g++)J.deleteFramebuffer(O.__webglFramebuffer[g]);else J.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer)J.deleteRenderbuffer(O.__webglDepthbuffer);if(O.__webglMultisampledFramebuffer)J.deleteFramebuffer(O.__webglMultisampledFramebuffer);if(O.__webglColorRenderbuffer){for(let g=0;g<O.__webglColorRenderbuffer.length;g++)if(O.__webglColorRenderbuffer[g])J.deleteRenderbuffer(O.__webglColorRenderbuffer[g])}if(O.__webglDepthRenderbuffer)J.deleteRenderbuffer(O.__webglDepthRenderbuffer)}let T=M.textures;for(let g=0,r=T.length;g<r;g++){let J0=Z.get(T[g]);if(J0.__webglTexture)J.deleteTexture(J0.__webglTexture),H.memory.textures--;Z.remove(T[g])}Z.remove(M)}let m=0;function o(){m=0}function p(){return m}function n(M){m=M}function u(){let M=m;if(M>=W.maxTextures)C0("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+W.maxTextures);return m+=1,M}function h(M){let O=[];return O.push(M.wrapS),O.push(M.wrapT),O.push(M.wrapR||0),O.push(M.magFilter),O.push(M.minFilter),O.push(M.anisotropy),O.push(M.internalFormat),O.push(M.format),O.push(M.type),O.push(M.generateMipmaps),O.push(M.premultiplyAlpha),O.push(M.flipY),O.push(M.unpackAlignment),O.push(M.colorSpace),O.join()}function t(M,O){let T=Z.get(M);if(M.isVideoTexture)hJ(M);if(M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&T.__version!==M.version){let g=M.image;if(g===null)C0("WebGLRenderer: Texture marked for update but no image data found.");else if(g.complete===!1)C0("WebGLRenderer: Texture marked for update but image is incomplete");else{A0(T,M,O);return}}else if(M.isExternalTexture)T.__webglTexture=M.sourceTexture?M.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,T.__webglTexture,J.TEXTURE0+O)}function e(M,O){let T=Z.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&T.__version!==M.version){A0(T,M,O);return}else if(M.isExternalTexture)T.__webglTexture=M.sourceTexture?M.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,T.__webglTexture,J.TEXTURE0+O)}function H0(M,O){let T=Z.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&T.__version!==M.version){A0(T,M,O);return}$.bindTexture(J.TEXTURE_3D,T.__webglTexture,J.TEXTURE0+O)}function M0(M,O){let T=Z.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&T.__version!==M.version){p0(T,M,O);return}$.bindTexture(J.TEXTURE_CUBE_MAP,T.__webglTexture,J.TEXTURE0+O)}let k0={[qZ]:J.REPEAT,[k6]:J.CLAMP_TO_EDGE,[EZ]:J.MIRRORED_REPEAT},ZJ={[_9]:J.NEAREST,[DZ]:J.NEAREST_MIPMAP_NEAREST,[f8]:J.NEAREST_MIPMAP_LINEAR,[PJ]:J.LINEAR,[M6]:J.LINEAR_MIPMAP_NEAREST,[p9]:J.LINEAR_MIPMAP_LINEAR},i0={[wZ]:J.NEVER,[_Z]:J.ALWAYS,[IZ]:J.LESS,[A6]:J.LEQUAL,[AZ]:J.EQUAL,[C6]:J.GEQUAL,[CZ]:J.GREATER,[PZ]:J.NOTEQUAL};function i(M,O){if(O.type===E9&&Q.has("OES_texture_float_linear")===!1&&(O.magFilter===PJ||O.magFilter===M6||O.magFilter===f8||O.magFilter===p9||O.minFilter===PJ||O.minFilter===M6||O.minFilter===f8||O.minFilter===p9))C0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(M,J.TEXTURE_WRAP_S,k0[O.wrapS]),J.texParameteri(M,J.TEXTURE_WRAP_T,k0[O.wrapT]),M===J.TEXTURE_3D||M===J.TEXTURE_2D_ARRAY)J.texParameteri(M,J.TEXTURE_WRAP_R,k0[O.wrapR]);if(J.texParameteri(M,J.TEXTURE_MAG_FILTER,ZJ[O.magFilter]),J.texParameteri(M,J.TEXTURE_MIN_FILTER,ZJ[O.minFilter]),O.compareFunction)J.texParameteri(M,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(M,J.TEXTURE_COMPARE_FUNC,i0[O.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(O.magFilter===_9)return;if(O.minFilter!==f8&&O.minFilter!==p9)return;if(O.type===E9&&Q.has("OES_texture_float_linear")===!1)return;if(O.anisotropy>1||Z.get(O).__currentAnisotropy){let T=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(M,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(O.anisotropy,W.getMaxAnisotropy())),Z.get(O).__currentAnisotropy=O.anisotropy}}}function Z0(M,O){let T=!1;if(M.__webglInit===void 0)M.__webglInit=!0,O.addEventListener("dispose",P);let g=O.source,r=F.get(g);if(r===void 0)r={},F.set(g,r);let J0=h(O);if(J0!==M.__cacheKey){if(r[J0]===void 0)r[J0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,T=!0;r[J0].usedTimes++;let Y0=r[M.__cacheKey];if(Y0!==void 0){if(r[M.__cacheKey].usedTimes--,Y0.usedTimes===0)l(O)}M.__cacheKey=J0,M.__webglTexture=r[J0].texture}return T}function D0(M,O,T){return Math.floor(Math.floor(M/T)/O)}function F0(M,O,T,g){let J0=M.updateRanges;if(J0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,O.width,O.height,T,g,O.data);else{J0.sort((V0,X0)=>V0.start-X0.start);let Y0=0;for(let V0=1;V0<J0.length;V0++){let X0=J0[Y0],Q0=J0[V0],w0=X0.start+X0.count,I0=D0(Q0.start,O.width,4),u0=D0(X0.start,O.width,4);if(Q0.start<=w0+1&&I0===u0&&D0(Q0.start+Q0.count-1,O.width,4)===I0)X0.count=Math.max(X0.count,Q0.start+Q0.count-X0.start);else++Y0,J0[Y0]=Q0}J0.length=Y0+1;let d=$.getParameter(J.UNPACK_ROW_LENGTH),s=$.getParameter(J.UNPACK_SKIP_PIXELS),q0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,O.width);for(let V0=0,X0=J0.length;V0<X0;V0++){let Q0=J0[V0],w0=Math.floor(Q0.start/4),I0=Math.ceil(Q0.count/4),u0=w0%O.width,S=Math.floor(w0/O.width),$0=I0,c=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,u0),$.pixelStorei(J.UNPACK_SKIP_ROWS,S),$.texSubImage2D(J.TEXTURE_2D,0,u0,S,$0,1,T,g,O.data)}M.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,d),$.pixelStorei(J.UNPACK_SKIP_PIXELS,s),$.pixelStorei(J.UNPACK_SKIP_ROWS,q0)}}function A0(M,O,T){let g=J.TEXTURE_2D;if(O.isDataArrayTexture||O.isCompressedArrayTexture)g=J.TEXTURE_2D_ARRAY;if(O.isData3DTexture)g=J.TEXTURE_3D;let r=Z0(M,O),J0=O.source;$.bindTexture(g,M.__webglTexture,J.TEXTURE0+T);let Y0=Z.get(J0);if(J0.version!==Y0.__version||r===!0){if($.activeTexture(J.TEXTURE0+T),(typeof ImageBitmap<"u"&&O.image instanceof ImageBitmap)===!1){let c=x0.getPrimaries(x0.workingColorSpace),W0=O.colorSpace===u9?null:x0.getPrimaries(O.colorSpace),E0=O.colorSpace===u9||c===W0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,O.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,E0)}$.pixelStorei(J.UNPACK_ALIGNMENT,O.unpackAlignment);let s=D(O.image,!1,W.maxTextureSize);s=c0(O,s);let q0=K.convert(O.format,O.colorSpace),V0=K.convert(O.type),X0=V(O.internalFormat,q0,V0,O.normalized,O.colorSpace,O.isVideoTexture);i(g,O);let Q0,w0=O.mipmaps,I0=O.isVideoTexture!==!0,u0=Y0.__version===void 0||r===!0,S=J0.dataReady,$0=w(O,s);if(O.isDepthTexture){if(X0=I(O.format===d9,O.type),u0)if(I0)$.texStorage2D(J.TEXTURE_2D,1,X0,s.width,s.height);else $.texImage2D(J.TEXTURE_2D,0,X0,s.width,s.height,0,q0,V0,null)}else if(O.isDataTexture)if(w0.length>0){if(I0&&u0)$.texStorage2D(J.TEXTURE_2D,$0,X0,w0[0].width,w0[0].height);for(let c=0,W0=w0.length;c<W0;c++)if(Q0=w0[c],I0){if(S)$.texSubImage2D(J.TEXTURE_2D,c,0,0,Q0.width,Q0.height,q0,V0,Q0.data)}else $.texImage2D(J.TEXTURE_2D,c,X0,Q0.width,Q0.height,0,q0,V0,Q0.data);O.generateMipmaps=!1}else if(I0){if(u0)$.texStorage2D(J.TEXTURE_2D,$0,X0,s.width,s.height);if(S)F0(O,s,q0,V0)}else $.texImage2D(J.TEXTURE_2D,0,X0,s.width,s.height,0,q0,V0,s.data);else if(O.isCompressedTexture)if(O.isCompressedArrayTexture){if(I0&&u0)$.texStorage3D(J.TEXTURE_2D_ARRAY,$0,X0,w0[0].width,w0[0].height,s.depth);for(let c=0,W0=w0.length;c<W0;c++)if(Q0=w0[c],O.format!==J9)if(q0!==null)if(I0){if(S)if(O.layerUpdates.size>0){let E0=uQ(Q0.width,Q0.height,O.format,O.type);for(let a of O.layerUpdates){let K0=Q0.data.subarray(a*E0/Q0.data.BYTES_PER_ELEMENT,(a+1)*E0/Q0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,a,Q0.width,Q0.height,1,q0,K0)}O.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,0,Q0.width,Q0.height,s.depth,q0,Q0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,c,X0,Q0.width,Q0.height,s.depth,0,Q0.data,0,0);else C0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(I0){if(S)$.texSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,0,Q0.width,Q0.height,s.depth,q0,V0,Q0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,c,X0,Q0.width,Q0.height,s.depth,0,q0,V0,Q0.data)}else{if(I0&&u0)$.texStorage2D(J.TEXTURE_2D,$0,X0,w0[0].width,w0[0].height);for(let c=0,W0=w0.length;c<W0;c++)if(Q0=w0[c],O.format!==J9)if(q0!==null)if(I0){if(S)$.compressedTexSubImage2D(J.TEXTURE_2D,c,0,0,Q0.width,Q0.height,q0,Q0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,c,X0,Q0.width,Q0.height,0,Q0.data);else C0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(I0){if(S)$.texSubImage2D(J.TEXTURE_2D,c,0,0,Q0.width,Q0.height,q0,V0,Q0.data)}else $.texImage2D(J.TEXTURE_2D,c,X0,Q0.width,Q0.height,0,q0,V0,Q0.data)}else if(O.isDataArrayTexture)if(I0){if(u0)$.texStorage3D(J.TEXTURE_2D_ARRAY,$0,X0,s.width,s.height,s.depth);if(S)if(O.layerUpdates.size>0){let c=uQ(s.width,s.height,O.format,O.type);for(let W0 of O.layerUpdates){let E0=s.data.subarray(W0*c/s.data.BYTES_PER_ELEMENT,(W0+1)*c/s.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,W0,s.width,s.height,1,q0,V0,E0)}O.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,s.width,s.height,s.depth,q0,V0,s.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,X0,s.width,s.height,s.depth,0,q0,V0,s.data);else if(O.isData3DTexture)if(I0){if(u0)$.texStorage3D(J.TEXTURE_3D,$0,X0,s.width,s.height,s.depth);if(S)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,s.width,s.height,s.depth,q0,V0,s.data)}else $.texImage3D(J.TEXTURE_3D,0,X0,s.width,s.height,s.depth,0,q0,V0,s.data);else if(O.isFramebufferTexture){if(u0)if(I0)$.texStorage2D(J.TEXTURE_2D,$0,X0,s.width,s.height);else{let{width:c,height:W0}=s;for(let E0=0;E0<$0;E0++)$.texImage2D(J.TEXTURE_2D,E0,X0,c,W0,0,q0,V0,null),c>>=1,W0>>=1}}else if(O.isHTMLTexture){if("texElementImage2D"in J){let c=J.canvas;if(!c.hasAttribute("layoutsubtree"))c.setAttribute("layoutsubtree","true");if(s.parentNode!==c){c.appendChild(s),q.add(O),c.onpaint=(W0)=>{let E0=W0.changedElements;for(let a of q)if(E0.includes(a.image))a.needsUpdate=!0},c.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,s);else{let{RGBA:E0,RGBA:a,UNSIGNED_BYTE:K0}=J;J.texElementImage2D(J.TEXTURE_2D,0,E0,a,K0,s)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(w0.length>0){if(I0&&u0){let c=$J(w0[0]);$.texStorage2D(J.TEXTURE_2D,$0,X0,c.width,c.height)}for(let c=0,W0=w0.length;c<W0;c++)if(Q0=w0[c],I0){if(S)$.texSubImage2D(J.TEXTURE_2D,c,0,0,q0,V0,Q0)}else $.texImage2D(J.TEXTURE_2D,c,X0,q0,V0,Q0);O.generateMipmaps=!1}else if(I0){if(u0){let c=$J(s);$.texStorage2D(J.TEXTURE_2D,$0,X0,c.width,c.height)}if(S)$.texSubImage2D(J.TEXTURE_2D,0,0,0,q0,V0,s)}else $.texImage2D(J.TEXTURE_2D,0,X0,q0,V0,s);if(E(O))_(g);if(Y0.__version=J0.version,O.onUpdate)O.onUpdate(O)}M.__version=O.version}function p0(M,O,T){if(O.image.length!==6)return;let g=Z0(M,O),r=O.source;$.bindTexture(J.TEXTURE_CUBE_MAP,M.__webglTexture,J.TEXTURE0+T);let J0=Z.get(r);if(r.version!==J0.__version||g===!0){$.activeTexture(J.TEXTURE0+T);let Y0=x0.getPrimaries(x0.workingColorSpace),d=O.colorSpace===u9?null:x0.getPrimaries(O.colorSpace),s=O.colorSpace===u9||Y0===d?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,O.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,O.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let q0=O.isCompressedTexture||O.image[0].isCompressedTexture,V0=O.image[0]&&O.image[0].isDataTexture,X0=[];for(let a=0;a<6;a++){if(!q0&&!V0)X0[a]=D(O.image[a],!0,W.maxCubemapSize);else X0[a]=V0?O.image[a].image:O.image[a];X0[a]=c0(O,X0[a])}let Q0=X0[0],w0=K.convert(O.format,O.colorSpace),I0=K.convert(O.type),u0=V(O.internalFormat,w0,I0,O.normalized,O.colorSpace),S=O.isVideoTexture!==!0,$0=J0.__version===void 0||g===!0,c=r.dataReady,W0=w(O,Q0);i(J.TEXTURE_CUBE_MAP,O);let E0;if(q0){if(S&&$0)$.texStorage2D(J.TEXTURE_CUBE_MAP,W0,u0,Q0.width,Q0.height);for(let a=0;a<6;a++){E0=X0[a].mipmaps;for(let K0=0;K0<E0.length;K0++){let T0=E0[K0];if(O.format!==J9)if(w0!==null)if(S){if(c)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,K0,0,0,T0.width,T0.height,w0,T0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,K0,u0,T0.width,T0.height,0,T0.data);else C0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(S){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,K0,0,0,T0.width,T0.height,w0,I0,T0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,K0,u0,T0.width,T0.height,0,w0,I0,T0.data)}}}else{if(E0=O.mipmaps,S&&$0){if(E0.length>0)W0++;let a=$J(X0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,W0,u0,a.width,a.height)}for(let a=0;a<6;a++)if(V0){if(S){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,0,0,X0[a].width,X0[a].height,w0,I0,X0[a].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,u0,X0[a].width,X0[a].height,0,w0,I0,X0[a].data);for(let K0=0;K0<E0.length;K0++){let HJ=E0[K0].image[a].image;if(S){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,K0+1,0,0,HJ.width,HJ.height,w0,I0,HJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,K0+1,u0,HJ.width,HJ.height,0,w0,I0,HJ.data)}}else{if(S){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,0,0,w0,I0,X0[a])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,u0,w0,I0,X0[a]);for(let K0=0;K0<E0.length;K0++){let T0=E0[K0];if(S){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,K0+1,0,0,w0,I0,T0.image[a])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,K0+1,u0,w0,I0,T0.image[a])}}}if(E(O))_(J.TEXTURE_CUBE_MAP);if(J0.__version=r.version,O.onUpdate)O.onUpdate(O)}M.__version=O.version}function f0(M,O,T,g,r,J0){let Y0=K.convert(T.format,T.colorSpace),d=K.convert(T.type),s=V(T.internalFormat,Y0,d,T.normalized,T.colorSpace),q0=Z.get(O),V0=Z.get(T);if(V0.__renderTarget=O,!q0.__hasExternalTextures){let X0=Math.max(1,O.width>>J0),Q0=Math.max(1,O.height>>J0);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)$.texImage3D(r,J0,s,X0,Q0,O.depth,0,Y0,d,null);else $.texImage2D(r,J0,s,X0,Q0,0,Y0,d,null)}if($.bindFramebuffer(J.FRAMEBUFFER,M),j(O))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,g,r,V0.__webglTexture,0,qJ(O));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,g,r,V0.__webglTexture,J0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function b0(M,O,T){if(J.bindRenderbuffer(J.RENDERBUFFER,M),O.depthBuffer){let g=O.depthTexture,r=g&&g.isDepthTexture?g.type:null,J0=I(O.stencilBuffer,r),Y0=O.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(j(O))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,qJ(O),J0,O.width,O.height);else if(T)J.renderbufferStorageMultisample(J.RENDERBUFFER,qJ(O),J0,O.width,O.height);else J.renderbufferStorage(J.RENDERBUFFER,J0,O.width,O.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,Y0,J.RENDERBUFFER,M)}else{let g=O.textures;for(let r=0;r<g.length;r++){let J0=g[r],Y0=K.convert(J0.format,J0.colorSpace),d=K.convert(J0.type),s=V(J0.internalFormat,Y0,d,J0.normalized,J0.colorSpace);if(j(O))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,qJ(O),s,O.width,O.height);else if(T)J.renderbufferStorageMultisample(J.RENDERBUFFER,qJ(O),s,O.width,O.height);else J.renderbufferStorage(J.RENDERBUFFER,s,O.width,O.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function t0(M,O,T){let g=O.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,M),!(O.depthTexture&&O.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let r=Z.get(O.depthTexture);if(r.__renderTarget=O,!r.__webglTexture||O.depthTexture.image.width!==O.width||O.depthTexture.image.height!==O.height)O.depthTexture.image.width=O.width,O.depthTexture.image.height=O.height,O.depthTexture.needsUpdate=!0;if(g){if(r.__webglInit===void 0)r.__webglInit=!0,O.depthTexture.addEventListener("dispose",P);if(r.__webglTexture===void 0){r.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,r.__webglTexture),i(J.TEXTURE_CUBE_MAP,O.depthTexture);let q0=K.convert(O.depthTexture.format),V0=K.convert(O.depthTexture.type),X0;if(O.depthTexture.format===m9)X0=J.DEPTH_COMPONENT24;else if(O.depthTexture.format===d9)X0=J.DEPTH24_STENCIL8;for(let Q0=0;Q0<6;Q0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,0,X0,O.width,O.height,0,q0,V0,null)}}else t(O.depthTexture,0);let J0=r.__webglTexture,Y0=qJ(O),d=g?J.TEXTURE_CUBE_MAP_POSITIVE_X+T:J.TEXTURE_2D,s=O.depthTexture.format===d9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(O.depthTexture.format===m9)if(j(O))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,d,J0,0,Y0);else J.framebufferTexture2D(J.FRAMEBUFFER,s,d,J0,0);else if(O.depthTexture.format===d9)if(j(O))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,d,J0,0,Y0);else J.framebufferTexture2D(J.FRAMEBUFFER,s,d,J0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function m0(M){let O=Z.get(M),T=M.isWebGLCubeRenderTarget===!0;if(O.__boundDepthTexture!==M.depthTexture){let g=M.depthTexture;if(O.__depthDisposeCallback)O.__depthDisposeCallback();if(g){let r=()=>{delete O.__boundDepthTexture,delete O.__depthDisposeCallback,g.removeEventListener("dispose",r)};g.addEventListener("dispose",r),O.__depthDisposeCallback=r}O.__boundDepthTexture=g}if(M.depthTexture&&!O.__autoAllocateDepthBuffer)if(T)for(let g=0;g<6;g++)t0(O.__webglFramebuffer[g],M,g);else{let g=M.texture.mipmaps;if(g&&g.length>0)t0(O.__webglFramebuffer[0],M,0);else t0(O.__webglFramebuffer,M,0)}else if(T){O.__webglDepthbuffer=[];for(let g=0;g<6;g++)if($.bindFramebuffer(J.FRAMEBUFFER,O.__webglFramebuffer[g]),O.__webglDepthbuffer[g]===void 0)O.__webglDepthbuffer[g]=J.createRenderbuffer(),b0(O.__webglDepthbuffer[g],M,!1);else{let r=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,J0=O.__webglDepthbuffer[g];J.bindRenderbuffer(J.RENDERBUFFER,J0),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,J0)}}else{let g=M.texture.mipmaps;if(g&&g.length>0)$.bindFramebuffer(J.FRAMEBUFFER,O.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,O.__webglFramebuffer);if(O.__webglDepthbuffer===void 0)O.__webglDepthbuffer=J.createRenderbuffer(),b0(O.__webglDepthbuffer,M,!1);else{let r=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,J0=O.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,J0),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,J0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function h0(M,O,T){let g=Z.get(M);if(O!==void 0)f0(g.__webglFramebuffer,M,M.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(T!==void 0)m0(M)}function FJ(M){let O=M.texture,T=Z.get(M),g=Z.get(O);M.addEventListener("dispose",R);let r=M.textures,J0=M.isWebGLCubeRenderTarget===!0,Y0=r.length>1;if(!Y0){if(g.__webglTexture===void 0)g.__webglTexture=J.createTexture();g.__version=O.version,H.memory.textures++}if(J0){T.__webglFramebuffer=[];for(let d=0;d<6;d++)if(O.mipmaps&&O.mipmaps.length>0){T.__webglFramebuffer[d]=[];for(let s=0;s<O.mipmaps.length;s++)T.__webglFramebuffer[d][s]=J.createFramebuffer()}else T.__webglFramebuffer[d]=J.createFramebuffer()}else{if(O.mipmaps&&O.mipmaps.length>0){T.__webglFramebuffer=[];for(let d=0;d<O.mipmaps.length;d++)T.__webglFramebuffer[d]=J.createFramebuffer()}else T.__webglFramebuffer=J.createFramebuffer();if(Y0)for(let d=0,s=r.length;d<s;d++){let q0=Z.get(r[d]);if(q0.__webglTexture===void 0)q0.__webglTexture=J.createTexture(),H.memory.textures++}if(M.samples>0&&j(M)===!1){T.__webglMultisampledFramebuffer=J.createFramebuffer(),T.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let d=0;d<r.length;d++){let s=r[d];T.__webglColorRenderbuffer[d]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,T.__webglColorRenderbuffer[d]);let q0=K.convert(s.format,s.colorSpace),V0=K.convert(s.type),X0=V(s.internalFormat,q0,V0,s.normalized,s.colorSpace,M.isXRRenderTarget===!0),Q0=qJ(M);J.renderbufferStorageMultisample(J.RENDERBUFFER,Q0,X0,M.width,M.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+d,J.RENDERBUFFER,T.__webglColorRenderbuffer[d])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),M.depthBuffer)T.__webglDepthRenderbuffer=J.createRenderbuffer(),b0(T.__webglDepthRenderbuffer,M,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(J0){$.bindTexture(J.TEXTURE_CUBE_MAP,g.__webglTexture),i(J.TEXTURE_CUBE_MAP,O);for(let d=0;d<6;d++)if(O.mipmaps&&O.mipmaps.length>0)for(let s=0;s<O.mipmaps.length;s++)f0(T.__webglFramebuffer[d][s],M,O,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+d,s);else f0(T.__webglFramebuffer[d],M,O,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+d,0);if(E(O))_(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(Y0){for(let d=0,s=r.length;d<s;d++){let q0=r[d],V0=Z.get(q0),X0=J.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)X0=M.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(X0,V0.__webglTexture),i(X0,q0),f0(T.__webglFramebuffer,M,q0,J.COLOR_ATTACHMENT0+d,X0,0),E(q0))_(X0)}$.unbindTexture()}else{let d=J.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)d=M.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(d,g.__webglTexture),i(d,O),O.mipmaps&&O.mipmaps.length>0)for(let s=0;s<O.mipmaps.length;s++)f0(T.__webglFramebuffer[s],M,O,J.COLOR_ATTACHMENT0,d,s);else f0(T.__webglFramebuffer,M,O,J.COLOR_ATTACHMENT0,d,0);if(E(O))_(d);$.unbindTexture()}if(M.depthBuffer)m0(M)}function bJ(M){let O=M.textures;for(let T=0,g=O.length;T<g;T++){let r=O[T];if(E(r)){let J0=C(M),Y0=Z.get(r).__webglTexture;$.bindTexture(J0,Y0),_(J0),$.unbindTexture()}}}let QJ=[],kJ=[];function OJ(M){if(M.samples>0){if(j(M)===!1){let{textures:O,width:T,height:g}=M,r=J.COLOR_BUFFER_BIT,J0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Y0=Z.get(M),d=O.length>1;if(d)for(let q0=0;q0<O.length;q0++)$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+q0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+q0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer);let s=M.texture.mipmaps;if(s&&s.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer);for(let q0=0;q0<O.length;q0++){if(M.resolveDepthBuffer){if(M.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(M.stencilBuffer&&M.resolveStencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(d){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[q0]);let V0=Z.get(O[q0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,V0,0)}if(J.blitFramebuffer(0,0,T,g,0,0,T,g,r,J.NEAREST),X===!0){if(QJ.length=0,kJ.length=0,QJ.push(J.COLOR_ATTACHMENT0+q0),M.depthBuffer&&M.resolveDepthBuffer===!1)QJ.push(J0),kJ.push(J0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,kJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,QJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),d)for(let q0=0;q0<O.length;q0++){$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+q0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[q0]);let V0=Z.get(O[q0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+q0,J.TEXTURE_2D,V0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&X){let O=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[O])}}}function qJ(M){return Math.min(W.maxSamples,M.samples)}function j(M){let O=Z.get(M);return M.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&O.__useRenderToTexture!==!1}function hJ(M){let O=H.render.frame;if(N.get(M)!==O)N.set(M,O),M.update()}function c0(M,O){let{colorSpace:T,format:g,type:r}=M;if(M.isCompressedTexture===!0||M.isVideoTexture===!0)return O;if(T!==DQ&&T!==u9)if(x0.getTransfer(T)===r0){if(g!==J9||r!==iJ)C0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else P0("WebGLTextures: Unsupported texture color space:",T);return O}function $J(M){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement)U.width=M.naturalWidth||M.width,U.height=M.naturalHeight||M.height;else if(typeof VideoFrame<"u"&&M instanceof VideoFrame)U.width=M.displayWidth,U.height=M.displayHeight;else U.width=M.width,U.height=M.height;return U}this.allocateTextureUnit=u,this.resetTextureUnits=o,this.getTextureUnits=p,this.setTextureUnits=n,this.setTexture2D=t,this.setTexture2DArray=e,this.setTexture3D=H0,this.setTextureCube=M0,this.rebindTextures=h0,this.setupRenderTarget=FJ,this.updateRenderTargetMipmap=bJ,this.updateMultisampleRenderTarget=OJ,this.setupDepthRenderbuffer=m0,this.setupFrameBufferTexture=f0,this.useMultisampledRTT=j,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function uU(J,Q){function $(Z,W=u9){let K,H=x0.getTransfer(W);if(Z===iJ)return J.UNSIGNED_BYTE;if(Z===j7)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===y7)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===RZ)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===kZ)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===FZ)return J.BYTE;if(Z===OZ)return J.SHORT;if(Z===b8)return J.UNSIGNED_SHORT;if(Z===S7)return J.INT;if(Z===T9)return J.UNSIGNED_INT;if(Z===E9)return J.FLOAT;if(Z===D9)return J.HALF_FLOAT;if(Z===MZ)return J.ALPHA;if(Z===LZ)return J.RGB;if(Z===J9)return J.RGBA;if(Z===m9)return J.DEPTH_COMPONENT;if(Z===d9)return J.DEPTH_STENCIL;if(Z===VZ)return J.RED;if(Z===v7)return J.RED_INTEGER;if(Z===l9)return J.RG;if(Z===f7)return J.RG_INTEGER;if(Z===b7)return J.RGBA_INTEGER;if(Z===L6||Z===V6||Z===B6||Z===z6)if(H===r0)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(Z===L6)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===V6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===B6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===z6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(Z===L6)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===V6)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===B6)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===z6)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===h7||Z===x7||Z===g7||Z===p7)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(Z===h7)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===x7)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===g7)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===p7)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===m7||Z===d7||Z===l7||Z===u7||Z===c7||Z===w6||Z===n7)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(Z===m7||Z===d7)return H===r0?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===l7)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(Z===u7)return K.COMPRESSED_R11_EAC;if(Z===c7)return K.COMPRESSED_SIGNED_R11_EAC;if(Z===w6)return K.COMPRESSED_RG11_EAC;if(Z===n7)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===s7||Z===i7||Z===o7||Z===a7||Z===r7||Z===t7||Z===e7||Z===JQ||Z===QQ||Z===$Q||Z===ZQ||Z===WQ||Z===KQ||Z===HQ)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(Z===s7)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===i7)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===o7)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===a7)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===r7)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===t7)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===e7)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===JQ)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===QQ)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===$Q)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===ZQ)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===WQ)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===KQ)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===HQ)return H===r0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===YQ||Z===XQ||Z===UQ)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(Z===YQ)return H===r0?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===XQ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===UQ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===GQ||Z===NQ||Z===I6||Z===qQ)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(Z===GQ)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===NQ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===I6)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===qQ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===L8)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var cU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new x6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new IJ({vertexShader:cU,fragmentShader:nU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new vJ(new s9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kW extends F9{constructor(J,Q){super();let $=this,Z=null,W=1,K=null,H="local-floor",Y=1,X=null,U=null,N=null,q=null,G=null,F=null,L=typeof XRWebGLBinding<"u",z=new RW,D={},E=Q.getContextAttributes(),_=null,C=null,V=[],I=[],w=new v0,P=null,R=new jJ;R.viewport=new KJ;let B=new jJ;B.viewport=new KJ;let l=[R,B],A=new pQ,m=null,o=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(i){let Z0=V[i];if(Z0===void 0)Z0=new g8,V[i]=Z0;return Z0.getTargetRaySpace()},this.getControllerGrip=function(i){let Z0=V[i];if(Z0===void 0)Z0=new g8,V[i]=Z0;return Z0.getGripSpace()},this.getHand=function(i){let Z0=V[i];if(Z0===void 0)Z0=new g8,V[i]=Z0;return Z0.getHandSpace()};function p(i){let Z0=I.indexOf(i.inputSource);if(Z0===-1)return;let D0=V[Z0];if(D0!==void 0)D0.update(i.inputSource,i.frame,X||K),D0.dispatchEvent({type:i.type,data:i.inputSource})}function n(){Z.removeEventListener("select",p),Z.removeEventListener("selectstart",p),Z.removeEventListener("selectend",p),Z.removeEventListener("squeeze",p),Z.removeEventListener("squeezestart",p),Z.removeEventListener("squeezeend",p),Z.removeEventListener("end",n),Z.removeEventListener("inputsourceschange",u);for(let i=0;i<V.length;i++){let Z0=I[i];if(Z0===null)continue;I[i]=null,V[i].disconnect(Z0)}m=null,o=null,z.reset();for(let i in D)delete D[i];J.setRenderTarget(_),G=null,q=null,N=null,Z=null,C=null,i0.stop(),$.isPresenting=!1,J.setPixelRatio(P),J.setSize(w.width,w.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(i){if(W=i,$.isPresenting===!0)C0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(i){if(H=i,$.isPresenting===!0)C0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(i){X=i},this.getBaseLayer=function(){return q!==null?q:G},this.getBinding=function(){if(N===null&&L)N=new XRWebGLBinding(Z,Q);return N},this.getFrame=function(){return F},this.getSession=function(){return Z},this.setSession=async function(i){if(Z=i,Z!==null){if(_=J.getRenderTarget(),Z.addEventListener("select",p),Z.addEventListener("selectstart",p),Z.addEventListener("selectend",p),Z.addEventListener("squeeze",p),Z.addEventListener("squeezestart",p),Z.addEventListener("squeezeend",p),Z.addEventListener("end",n),Z.addEventListener("inputsourceschange",u),E.xrCompatible!==!0)await Q.makeXRCompatible();if(P=J.getPixelRatio(),J.getSize(w),!(L&&("createProjectionLayer"in XRWebGLBinding.prototype))){let D0={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:W};G=new XRWebGLLayer(Z,Q,D0),Z.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),C=new mJ(G.framebufferWidth,G.framebufferHeight,{format:J9,type:iJ,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1})}else{let D0=null,F0=null,A0=null;if(E.depth)A0=E.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,D0=E.stencil?d9:m9,F0=E.stencil?L8:T9;let p0={colorFormat:Q.RGBA8,depthFormat:A0,scaleFactor:W};N=this.getBinding(),q=N.createProjectionLayer(p0),Z.updateRenderState({layers:[q]}),J.setPixelRatio(1),J.setSize(q.textureWidth,q.textureHeight,!1),C=new mJ(q.textureWidth,q.textureHeight,{format:J9,type:iJ,depthTexture:new S9(q.textureWidth,q.textureHeight,F0,void 0,void 0,void 0,void 0,void 0,void 0,D0),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await Z.requestReferenceSpace(H),i0.setContext(Z),i0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return z.getDepthTexture()};function u(i){for(let Z0=0;Z0<i.removed.length;Z0++){let D0=i.removed[Z0],F0=I.indexOf(D0);if(F0>=0)I[F0]=null,V[F0].disconnect(D0)}for(let Z0=0;Z0<i.added.length;Z0++){let D0=i.added[Z0],F0=I.indexOf(D0);if(F0===-1){for(let p0=0;p0<V.length;p0++)if(p0>=I.length){I.push(D0),F0=p0;break}else if(I[p0]===null){I[p0]=D0,F0=p0;break}if(F0===-1)break}let A0=V[F0];if(A0)A0.connect(D0)}}let h=new b,t=new b;function e(i,Z0,D0){h.setFromMatrixPosition(Z0.matrixWorld),t.setFromMatrixPosition(D0.matrixWorld);let F0=h.distanceTo(t),A0=Z0.projectionMatrix.elements,p0=D0.projectionMatrix.elements,f0=A0[14]/(A0[10]-1),b0=A0[14]/(A0[10]+1),t0=(A0[9]+1)/A0[5],m0=(A0[9]-1)/A0[5],h0=(A0[8]-1)/A0[0],FJ=(p0[8]+1)/p0[0],bJ=f0*h0,QJ=f0*FJ,kJ=F0/(-h0+FJ),OJ=kJ*-h0;if(Z0.matrixWorld.decompose(i.position,i.quaternion,i.scale),i.translateX(OJ),i.translateZ(kJ),i.matrixWorld.compose(i.position,i.quaternion,i.scale),i.matrixWorldInverse.copy(i.matrixWorld).invert(),A0[10]===-1)i.projectionMatrix.copy(Z0.projectionMatrix),i.projectionMatrixInverse.copy(Z0.projectionMatrixInverse);else{let qJ=f0+kJ,j=b0+kJ,hJ=bJ-OJ,c0=QJ+(F0-OJ),$J=t0*b0/j*qJ,M=m0*b0/j*qJ;i.projectionMatrix.makePerspective(hJ,c0,$J,M,qJ,j),i.projectionMatrixInverse.copy(i.projectionMatrix).invert()}}function H0(i,Z0){if(Z0===null)i.matrixWorld.copy(i.matrix);else i.matrixWorld.multiplyMatrices(Z0.matrixWorld,i.matrix);i.matrixWorldInverse.copy(i.matrixWorld).invert()}this.updateCamera=function(i){if(Z===null)return;let{near:Z0,far:D0}=i;if(z.texture!==null){if(z.depthNear>0)Z0=z.depthNear;if(z.depthFar>0)D0=z.depthFar}if(A.near=B.near=R.near=Z0,A.far=B.far=R.far=D0,m!==A.near||o!==A.far)Z.updateRenderState({depthNear:A.near,depthFar:A.far}),m=A.near,o=A.far;A.layers.mask=i.layers.mask|6,R.layers.mask=A.layers.mask&-5,B.layers.mask=A.layers.mask&-3;let F0=i.parent,A0=A.cameras;H0(A,F0);for(let p0=0;p0<A0.length;p0++)H0(A0[p0],F0);if(A0.length===2)e(A,R,B);else A.projectionMatrix.copy(R.projectionMatrix);M0(i,A,F0)};function M0(i,Z0,D0){if(D0===null)i.matrix.copy(Z0.matrixWorld);else i.matrix.copy(D0.matrixWorld),i.matrix.invert(),i.matrix.multiply(Z0.matrixWorld);if(i.matrix.decompose(i.position,i.quaternion,i.scale),i.updateMatrixWorld(!0),i.projectionMatrix.copy(Z0.projectionMatrix),i.projectionMatrixInverse.copy(Z0.projectionMatrixInverse),i.isPerspectiveCamera)i.fov=F6*2*Math.atan(1/i.projectionMatrix.elements[5]),i.zoom=1}this.getCamera=function(){return A},this.getFoveation=function(){if(q===null&&G===null)return;return Y},this.setFoveation=function(i){if(Y=i,q!==null)q.fixedFoveation=i;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=i},this.hasDepthSensing=function(){return z.texture!==null},this.getDepthSensingMesh=function(){return z.getMesh(A)},this.getCameraTexture=function(i){return D[i]};let k0=null;function ZJ(i,Z0){if(U=Z0.getViewerPose(X||K),F=Z0,U!==null){let D0=U.views;if(G!==null)J.setRenderTargetFramebuffer(C,G.framebuffer),J.setRenderTarget(C);let F0=!1;if(D0.length!==A.cameras.length)A.cameras.length=0,F0=!0;for(let b0=0;b0<D0.length;b0++){let t0=D0[b0],m0=null;if(G!==null)m0=G.getViewport(t0);else{let FJ=N.getViewSubImage(q,t0);if(m0=FJ.viewport,b0===0)J.setRenderTargetTextures(C,FJ.colorTexture,FJ.depthStencilTexture),J.setRenderTarget(C)}let h0=l[b0];if(h0===void 0)h0=new jJ,h0.layers.enable(b0),h0.viewport=new KJ,l[b0]=h0;if(h0.matrix.fromArray(t0.transform.matrix),h0.matrix.decompose(h0.position,h0.quaternion,h0.scale),h0.projectionMatrix.fromArray(t0.projectionMatrix),h0.projectionMatrixInverse.copy(h0.projectionMatrix).invert(),h0.viewport.set(m0.x,m0.y,m0.width,m0.height),b0===0)A.matrix.copy(h0.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale);if(F0===!0)A.cameras.push(h0)}let A0=Z.enabledFeatures;if(A0&&A0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&L){N=$.getBinding();let b0=N.getDepthInformation(D0[0]);if(b0&&b0.isValid&&b0.texture)z.init(b0,Z.renderState)}if(A0&&A0.includes("camera-access")&&L){J.state.unbindTexture(),N=$.getBinding();for(let b0=0;b0<D0.length;b0++){let t0=D0[b0].camera;if(t0){let m0=D[t0];if(!m0)m0=new x6,D[t0]=m0;let h0=N.getCameraImage(t0);m0.sourceTexture=h0}}}}for(let D0=0;D0<V.length;D0++){let F0=I[D0],A0=V[D0];if(F0!==null&&A0!==void 0)A0.update(F0,Z0,X||K)}if(k0)k0(i,Z0);if(Z0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Z0});F=null}let i0=new HW;i0.setAnimationLoop(ZJ),this.setAnimationLoop=function(i){k0=i},this.dispose=function(){}}}var sU=new WJ,MW=new _0;MW.set(-1,0,0,0,1,0,0,0,1);function iU(J,Q){function $(D,E){if(D.matrixAutoUpdate===!0)D.updateMatrix();E.value.copy(D.matrix)}function Z(D,E){if(E.color.getRGB(D.fogColor.value,IQ(J)),E.isFog)D.fogNear.value=E.near,D.fogFar.value=E.far;else if(E.isFogExp2)D.fogDensity.value=E.density}function W(D,E,_,C,V){if(E.isNodeMaterial)E.uniformsNeedUpdate=!1;else if(E.isMeshBasicMaterial)K(D,E);else if(E.isMeshLambertMaterial){if(K(D,E),E.envMap)D.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshToonMaterial)K(D,E),q(D,E);else if(E.isMeshPhongMaterial){if(K(D,E),N(D,E),E.envMap)D.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshStandardMaterial){if(K(D,E),G(D,E),E.isMeshPhysicalMaterial)F(D,E,V)}else if(E.isMeshMatcapMaterial)K(D,E),L(D,E);else if(E.isMeshDepthMaterial)K(D,E);else if(E.isMeshDistanceMaterial)K(D,E),z(D,E);else if(E.isMeshNormalMaterial)K(D,E);else if(E.isLineBasicMaterial){if(H(D,E),E.isLineDashedMaterial)Y(D,E)}else if(E.isPointsMaterial)X(D,E,_,C);else if(E.isSpriteMaterial)U(D,E);else if(E.isShadowMaterial)D.color.value.copy(E.color),D.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function K(D,E){if(D.opacity.value=E.opacity,E.color)D.diffuse.value.copy(E.color);if(E.emissive)D.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)D.map.value=E.map,$(E.map,D.mapTransform);if(E.alphaMap)D.alphaMap.value=E.alphaMap,$(E.alphaMap,D.alphaMapTransform);if(E.bumpMap){if(D.bumpMap.value=E.bumpMap,$(E.bumpMap,D.bumpMapTransform),D.bumpScale.value=E.bumpScale,E.side===CJ)D.bumpScale.value*=-1}if(E.normalMap){if(D.normalMap.value=E.normalMap,$(E.normalMap,D.normalMapTransform),D.normalScale.value.copy(E.normalScale),E.side===CJ)D.normalScale.value.negate()}if(E.displacementMap)D.displacementMap.value=E.displacementMap,$(E.displacementMap,D.displacementMapTransform),D.displacementScale.value=E.displacementScale,D.displacementBias.value=E.displacementBias;if(E.emissiveMap)D.emissiveMap.value=E.emissiveMap,$(E.emissiveMap,D.emissiveMapTransform);if(E.specularMap)D.specularMap.value=E.specularMap,$(E.specularMap,D.specularMapTransform);if(E.alphaTest>0)D.alphaTest.value=E.alphaTest;let _=Q.get(E),C=_.envMap,V=_.envMapRotation;if(C){if(D.envMap.value=C,D.envMapRotation.value.setFromMatrix4(sU.makeRotationFromEuler(V)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1)D.envMapRotation.value.premultiply(MW);D.reflectivity.value=E.reflectivity,D.ior.value=E.ior,D.refractionRatio.value=E.refractionRatio}if(E.lightMap)D.lightMap.value=E.lightMap,D.lightMapIntensity.value=E.lightMapIntensity,$(E.lightMap,D.lightMapTransform);if(E.aoMap)D.aoMap.value=E.aoMap,D.aoMapIntensity.value=E.aoMapIntensity,$(E.aoMap,D.aoMapTransform)}function H(D,E){if(D.diffuse.value.copy(E.color),D.opacity.value=E.opacity,E.map)D.map.value=E.map,$(E.map,D.mapTransform)}function Y(D,E){D.dashSize.value=E.dashSize,D.totalSize.value=E.dashSize+E.gapSize,D.scale.value=E.scale}function X(D,E,_,C){if(D.diffuse.value.copy(E.color),D.opacity.value=E.opacity,D.size.value=E.size*_,D.scale.value=C*0.5,E.map)D.map.value=E.map,$(E.map,D.uvTransform);if(E.alphaMap)D.alphaMap.value=E.alphaMap,$(E.alphaMap,D.alphaMapTransform);if(E.alphaTest>0)D.alphaTest.value=E.alphaTest}function U(D,E){if(D.diffuse.value.copy(E.color),D.opacity.value=E.opacity,D.rotation.value=E.rotation,E.map)D.map.value=E.map,$(E.map,D.mapTransform);if(E.alphaMap)D.alphaMap.value=E.alphaMap,$(E.alphaMap,D.alphaMapTransform);if(E.alphaTest>0)D.alphaTest.value=E.alphaTest}function N(D,E){D.specular.value.copy(E.specular),D.shininess.value=Math.max(E.shininess,0.0001)}function q(D,E){if(E.gradientMap)D.gradientMap.value=E.gradientMap}function G(D,E){if(D.metalness.value=E.metalness,E.metalnessMap)D.metalnessMap.value=E.metalnessMap,$(E.metalnessMap,D.metalnessMapTransform);if(D.roughness.value=E.roughness,E.roughnessMap)D.roughnessMap.value=E.roughnessMap,$(E.roughnessMap,D.roughnessMapTransform);if(E.envMap)D.envMapIntensity.value=E.envMapIntensity}function F(D,E,_){if(D.ior.value=E.ior,E.sheen>0){if(D.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),D.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)D.sheenColorMap.value=E.sheenColorMap,$(E.sheenColorMap,D.sheenColorMapTransform);if(E.sheenRoughnessMap)D.sheenRoughnessMap.value=E.sheenRoughnessMap,$(E.sheenRoughnessMap,D.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(D.clearcoat.value=E.clearcoat,D.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)D.clearcoatMap.value=E.clearcoatMap,$(E.clearcoatMap,D.clearcoatMapTransform);if(E.clearcoatRoughnessMap)D.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,$(E.clearcoatRoughnessMap,D.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(D.clearcoatNormalMap.value=E.clearcoatNormalMap,$(E.clearcoatNormalMap,D.clearcoatNormalMapTransform),D.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===CJ)D.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)D.dispersion.value=E.dispersion;if(E.iridescence>0){if(D.iridescence.value=E.iridescence,D.iridescenceIOR.value=E.iridescenceIOR,D.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],D.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)D.iridescenceMap.value=E.iridescenceMap,$(E.iridescenceMap,D.iridescenceMapTransform);if(E.iridescenceThicknessMap)D.iridescenceThicknessMap.value=E.iridescenceThicknessMap,$(E.iridescenceThicknessMap,D.iridescenceThicknessMapTransform)}if(E.transmission>0){if(D.transmission.value=E.transmission,D.transmissionSamplerMap.value=_.texture,D.transmissionSamplerSize.value.set(_.width,_.height),E.transmissionMap)D.transmissionMap.value=E.transmissionMap,$(E.transmissionMap,D.transmissionMapTransform);if(D.thickness.value=E.thickness,E.thicknessMap)D.thicknessMap.value=E.thicknessMap,$(E.thicknessMap,D.thicknessMapTransform);D.attenuationDistance.value=E.attenuationDistance,D.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(D.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)D.anisotropyMap.value=E.anisotropyMap,$(E.anisotropyMap,D.anisotropyMapTransform)}if(D.specularIntensity.value=E.specularIntensity,D.specularColor.value.copy(E.specularColor),E.specularColorMap)D.specularColorMap.value=E.specularColorMap,$(E.specularColorMap,D.specularColorMapTransform);if(E.specularIntensityMap)D.specularIntensityMap.value=E.specularIntensityMap,$(E.specularIntensityMap,D.specularIntensityMapTransform)}function L(D,E){if(E.matcap)D.matcap.value=E.matcap}function z(D,E){let _=Q.get(E).light;D.referencePosition.value.setFromMatrixPosition(_.matrixWorld),D.nearDistance.value=_.shadow.camera.near,D.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function oU(J,Q,$,Z){let W={},K={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(V,I){let w=I.program;Z.uniformBlockBinding(V,w)}function U(V,I){let w=W[V.id];if(w===void 0)D(V),w=N(V),W[V.id]=w,V.addEventListener("dispose",_);let P=I.program;Z.updateUBOMapping(V,P);let R=Q.render.frame;if(K[V.id]!==R)G(V),K[V.id]=R}function N(V){let I=q();V.__bindingPointIndex=I;let w=J.createBuffer(),P=V.__size,R=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,w),J.bufferData(J.UNIFORM_BUFFER,P,R),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,I,w),w}function q(){for(let V=0;V<Y;V++)if(H.indexOf(V)===-1)return H.push(V),V;return P0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(V){let I=W[V.id],w=V.uniforms,P=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,I);for(let R=0,B=w.length;R<B;R++){let l=w[R];if(Array.isArray(l))for(let A=0,m=l.length;A<m;A++)F(l[A],R,A,P);else F(l,R,0,P)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(V,I,w,P){if(z(V,I,w,P)===!0){let{__offset:R,value:B}=V;if(Array.isArray(B)){let l=0;for(let A=0;A<B.length;A++){let m=B[A],o=E(m);if(L(m,V.__data,l),typeof m!=="number"&&typeof m!=="boolean"&&!m.isMatrix3&&!ArrayBuffer.isView(m))l+=o.storage/Float32Array.BYTES_PER_ELEMENT}}else L(B,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,R,V.__data)}}function L(V,I,w){if(typeof V==="number"||typeof V==="boolean")I[0]=V;else if(V.isMatrix3)I[0]=V.elements[0],I[1]=V.elements[1],I[2]=V.elements[2],I[3]=0,I[4]=V.elements[3],I[5]=V.elements[4],I[6]=V.elements[5],I[7]=0,I[8]=V.elements[6],I[9]=V.elements[7],I[10]=V.elements[8],I[11]=0;else if(ArrayBuffer.isView(V))I.set(new V.constructor(V.buffer,V.byteOffset,I.length));else V.toArray(I,w)}function z(V,I,w,P){let R=V.value,B=I+"_"+w;if(P[B]===void 0){if(typeof R==="number"||typeof R==="boolean")P[B]=R;else if(ArrayBuffer.isView(R))P[B]=R.slice();else P[B]=R.clone();return!0}else{let l=P[B];if(typeof R==="number"||typeof R==="boolean"){if(l!==R)return P[B]=R,!0}else if(ArrayBuffer.isView(R))return!0;else if(l.equals(R)===!1)return l.copy(R),!0}return!1}function D(V){let I=V.uniforms,w=0,P=16;for(let B=0,l=I.length;B<l;B++){let A=Array.isArray(I[B])?I[B]:[I[B]];for(let m=0,o=A.length;m<o;m++){let p=A[m],n=Array.isArray(p.value)?p.value:[p.value];for(let u=0,h=n.length;u<h;u++){let t=n[u],e=E(t),H0=w%P,M0=H0%e.boundary,k0=H0+M0;if(w+=M0,k0!==0&&P-k0<e.storage)w+=P-k0;p.__data=new Float32Array(e.storage/Float32Array.BYTES_PER_ELEMENT),p.__offset=w,w+=e.storage}}}let R=w%P;if(R>0)w+=P-R;return V.__size=w,V.__cache={},this}function E(V){let I={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")I.boundary=4,I.storage=4;else if(V.isVector2)I.boundary=8,I.storage=8;else if(V.isVector3||V.isColor)I.boundary=16,I.storage=12;else if(V.isVector4)I.boundary=16,I.storage=16;else if(V.isMatrix3)I.boundary=48,I.storage=48;else if(V.isMatrix4)I.boundary=64,I.storage=64;else if(V.isTexture)C0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))I.boundary=16,I.storage=V.byteLength;else C0("WebGLRenderer: Unsupported uniform value type.",V);return I}function _(V){let I=V.target;I.removeEventListener("dispose",_);let w=H.indexOf(I.__bindingPointIndex);H.splice(w,1),J.deleteBuffer(W[I.id]),delete W[I.id],delete K[I.id]}function C(){for(let V in W)J.deleteBuffer(W[V]);H=[],W={},K={}}return{bind:X,update:U,dispose:C}}var aU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Q9=null;function rU(){if(Q9===null)Q9=new BQ(aU,16,16,l9,D9),Q9.name="DFG_LUT",Q9.minFilter=PJ,Q9.magFilter=PJ,Q9.wrapS=k6,Q9.wrapT=k6,Q9.generateMipmaps=!1,Q9.needsUpdate=!0;return Q9}class Q${constructor(J={}){let{canvas:Q=TZ(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:q=!1,outputBufferType:G=iJ}=J;this.isWebGLRenderer=!0;let F;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=$.getContextAttributes().alpha}else F=K;let L=G,z=new Set([b7,f7,v7]),D=new Set([iJ,T9,b8,L8,j7,y7]),E=new Uint32Array(4),_=new Int32Array(4),C=new b,V=null,I=null,w=[],P=[],R=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sJ,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,l=!1,A=null,m=null,o=null,p=null;this._outputColorSpace=zZ;let n=0,u=0,h=null,t=-1,e=null,H0=new KJ,M0=new KJ,k0=null,ZJ=new l0(0),i0=0,i=Q.width,Z0=Q.height,D0=1,F0=null,A0=null,p0=new KJ(0,0,i,Z0),f0=new KJ(0,0,i,Z0),b0=!1,t0=new f6,m0=!1,h0=!1,FJ=new WJ,bJ=new b,QJ=new KJ,kJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},OJ=!1;function qJ(){return h===null?D0:1}let j=$;function hJ(k,y){return Q.getContext(k,y)}try{let k={alpha:!0,depth:Z,stencil:W,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${j$}`);if(Q.addEventListener("webglcontextlost",T0,!1),Q.addEventListener("webglcontextrestored",HJ,!1),Q.addEventListener("webglcontextcreationerror",e0,!1),j===null){if(j=hJ("webgl2",k),j===null)if(hJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(k){throw P0("WebGLRenderer: "+k.message),k}let c0,$J,M,O,T,g,r,J0,Y0,d,s,q0,V0,X0,Q0,w0,I0,u0,S,$0,c,W0,E0;function a(){if(c0=new WX(j),c0.init(),c=new uU(j,c0),$J=new aY(j,c0,J,c),M=new dU(j,c0),$J.reversedDepthBuffer&&q)M.buffers.depth.setReversed(!0);m=j.createFramebuffer(),o=j.createFramebuffer(),p=j.createFramebuffer(),O=new YX(j),T=new PU,g=new lU(j,c0,M,T,$J,c,O),r=new ZX(B),J0=new NK(j),W0=new iY(j,J0),Y0=new KX(j,J0,O,W0),d=new UX(j,Y0,J0,W0,O),u0=new XX(j,$J,g),Q0=new rY(T),s=new CU(B,r,c0,$J,W0,Q0),q0=new iU(B,T),V0=new TU,X0=new bU(c0),I0=new sY(B,r,M,d,F,Y),w0=new mU(B,d,$J),E0=new oU(j,O,$J,M),S=new oY(j,c0,O),$0=new HX(j,c0,O),O.programs=s.programs,B.capabilities=$J,B.extensions=c0,B.properties=T,B.renderLists=V0,B.shadowMap=w0,B.state=M,B.info=O}if(a(),L!==iJ)R=new NX(L,Q.width,Q.height,H,Z,W);let K0=new kW(B,j);this.xr=K0,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let k=c0.get("WEBGL_lose_context");if(k)k.loseContext()},this.forceContextRestore=function(){let k=c0.get("WEBGL_lose_context");if(k)k.restoreContext()},this.getPixelRatio=function(){return D0},this.setPixelRatio=function(k){if(k===void 0)return;D0=k,this.setSize(i,Z0,!1)},this.getSize=function(k){return k.set(i,Z0)},this.setSize=function(k,y,x=!0){if(K0.isPresenting){C0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(i=k,Z0=y,Q.width=Math.floor(k*D0),Q.height=Math.floor(y*D0),x===!0)Q.style.width=k+"px",Q.style.height=y+"px";if(R!==null)R.setSize(Q.width,Q.height);this.setViewport(0,0,k,y)},this.getDrawingBufferSize=function(k){return k.set(i*D0,Z0*D0).floor()},this.setDrawingBufferSize=function(k,y,x){i=k,Z0=y,D0=x,Q.width=Math.floor(k*x),Q.height=Math.floor(y*x),this.setViewport(0,0,k,y)},this.setEffects=function(k){if(L===iJ){P0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let y=0;y<k.length;y++)if(k[y].isOutputPass===!0){C0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(H0)},this.getViewport=function(k){return k.copy(p0)},this.setViewport=function(k,y,x,v){if(k.isVector4)p0.set(k.x,k.y,k.z,k.w);else p0.set(k,y,x,v);M.viewport(H0.copy(p0).multiplyScalar(D0).round())},this.getScissor=function(k){return k.copy(f0)},this.setScissor=function(k,y,x,v){if(k.isVector4)f0.set(k.x,k.y,k.z,k.w);else f0.set(k,y,x,v);M.scissor(M0.copy(f0).multiplyScalar(D0).round())},this.getScissorTest=function(){return b0},this.setScissorTest=function(k){M.setScissorTest(b0=k)},this.setOpaqueSort=function(k){F0=k},this.setTransparentSort=function(k){A0=k},this.getClearColor=function(k){return k.copy(I0.getClearColor())},this.setClearColor=function(){I0.setClearColor(...arguments)},this.getClearAlpha=function(){return I0.getClearAlpha()},this.setClearAlpha=function(){I0.setClearAlpha(...arguments)},this.clear=function(k=!0,y=!0,x=!0){let v=0;if(k){let f=!1;if(h!==null){let N0=h.texture.format;f=z.has(N0)}if(f){let N0=h.texture.type,R0=D.has(N0),G0=I0.getClearColor(),L0=I0.getClearAlpha(),B0=G0.r,S0=G0.g,y0=G0.b;if(R0)E[0]=B0,E[1]=S0,E[2]=y0,E[3]=L0,j.clearBufferuiv(j.COLOR,0,E);else _[0]=B0,_[1]=S0,_[2]=y0,_[3]=L0,j.clearBufferiv(j.COLOR,0,_)}else v|=j.COLOR_BUFFER_BIT}if(y)v|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(x)v|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(v!==0)j.clear(v)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),A=k},this.dispose=function(){Q.removeEventListener("webglcontextlost",T0,!1),Q.removeEventListener("webglcontextrestored",HJ,!1),Q.removeEventListener("webglcontextcreationerror",e0,!1),I0.dispose(),V0.dispose(),X0.dispose(),T.dispose(),r.dispose(),d.dispose(),W0.dispose(),E0.dispose(),s.dispose(),K0.dispose(),K0.removeEventListener("sessionstart",W$),K0.removeEventListener("sessionend",K$),y9.stop()};function T0(k){k.preventDefault(),kQ("WebGLRenderer: Context Lost."),l=!0}function HJ(){kQ("WebGLRenderer: Context Restored."),l=!1;let k=O.autoReset,y=w0.enabled,x=w0.autoUpdate,v=w0.needsUpdate,f=w0.type;a(),O.autoReset=k,w0.enabled=y,w0.autoUpdate=x,w0.needsUpdate=v,w0.type=f}function e0(k){P0("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function oJ(k){let y=k.target;y.removeEventListener("dispose",oJ),K9(y)}function K9(k){AW(k),T.remove(k)}function AW(k){let y=T.get(k).programs;if(y!==void 0){if(y.forEach(function(x){s.releaseProgram(x)}),k.isShaderMaterial)s.releaseShaderCache(k)}}this.renderBufferDirect=function(k,y,x,v,f,N0){if(y===null)y=kJ;let R0=f.isMesh&&f.matrixWorld.determinantAffine()<0,G0=_W(k,y,x,v,f);M.setMaterial(v,R0);let L0=x.index,B0=1;if(v.wireframe===!0){if(L0=Y0.getWireframeAttribute(x),L0===void 0)return;B0=2}let S0=x.drawRange,y0=x.attributes.position,z0=S0.start*B0,s0=(S0.start+S0.count)*B0;if(N0!==null)z0=Math.max(z0,N0.start*B0),s0=Math.min(s0,(N0.start+N0.count)*B0);if(L0!==null)z0=Math.max(z0,0),s0=Math.min(s0,L0.count);else if(y0!==void 0&&y0!==null)z0=Math.max(z0,0),s0=Math.min(s0,y0.count);let XJ=s0-z0;if(XJ<0||XJ===1/0)return;W0.setup(f,v,G0,x,L0);let YJ,o0=S;if(L0!==null)YJ=J0.get(L0),o0=$0,o0.setIndex(YJ);if(f.isMesh)if(v.wireframe===!0)M.setLineWidth(v.wireframeLinewidth*qJ()),o0.setMode(j.LINES);else o0.setMode(j.TRIANGLES);else if(f.isLine){let MJ=v.linewidth;if(MJ===void 0)MJ=1;if(M.setLineWidth(MJ*qJ()),f.isLineSegments)o0.setMode(j.LINES);else if(f.isLineLoop)o0.setMode(j.LINE_LOOP);else o0.setMode(j.LINE_STRIP)}else if(f.isPoints)o0.setMode(j.POINTS);else if(f.isSprite)o0.setMode(j.TRIANGLES);if(f.isBatchedMesh)if(!c0.get("WEBGL_multi_draw")){let{_multiDrawStarts:MJ,_multiDrawCounts:O0,_multiDrawCount:_J}=f,d0=L0?J0.get(L0).bytesPerElement:1,xJ=T.get(v).currentProgram.getUniforms();for(let aJ=0;aJ<_J;aJ++)xJ.setValue(j,"_gl_DrawID",aJ),o0.render(MJ[aJ]/d0,O0[aJ])}else o0.renderMultiDraw(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount);else if(f.isInstancedMesh)o0.renderInstances(z0,XJ,f.count);else if(x.isInstancedBufferGeometry){let MJ=x._maxInstanceCount!==void 0?x._maxInstanceCount:1/0,O0=Math.min(x.instanceCount,MJ);o0.renderInstances(z0,XJ,O0)}else o0.render(z0,XJ)};function Z$(k,y,x){if(k.transparent===!0&&k.side===tJ&&k.forceSinglePass===!1)k.side=CJ,k.needsUpdate=!0,n8(k,y,x),k.side=R8,k.needsUpdate=!0,n8(k,y,x),k.side=tJ;else n8(k,y,x)}this.compile=function(k,y,x=null){if(x===null)x=k;if(I=X0.get(x),I.init(y),P.push(I),x.traverseVisible(function(f){if(f.isLight&&f.layers.test(y.layers)){if(I.pushLight(f),f.castShadow)I.pushShadow(f)}}),k!==x)k.traverseVisible(function(f){if(f.isLight&&f.layers.test(y.layers)){if(I.pushLight(f),f.castShadow)I.pushShadow(f)}});I.setupLights();let v=new Set;return k.traverse(function(f){if(!(f.isMesh||f.isPoints||f.isLine||f.isSprite))return;let N0=f.material;if(N0)if(Array.isArray(N0))for(let R0=0;R0<N0.length;R0++){let G0=N0[R0];Z$(G0,x,f),v.add(G0)}else Z$(N0,x,f),v.add(N0)}),I=P.pop(),v},this.compileAsync=function(k,y,x=null){let v=this.compile(k,y,x);return new Promise((f)=>{function N0(){if(v.forEach(function(R0){if(T.get(R0).currentProgram.isReady())v.delete(R0)}),v.size===0){f(k);return}setTimeout(N0,10)}if(c0.get("KHR_parallel_shader_compile")!==null)N0();else setTimeout(N0,10)})};let s6=null;function CW(k){if(s6)s6(k)}function W$(){y9.stop()}function K$(){y9.start()}let y9=new HW;if(y9.setAnimationLoop(CW),typeof self<"u")y9.setContext(self);this.setAnimationLoop=function(k){s6=k,K0.setAnimationLoop(k),k===null?y9.stop():y9.start()},K0.addEventListener("sessionstart",W$),K0.addEventListener("sessionend",K$),this.render=function(k,y){if(y!==void 0&&y.isCamera!==!0){P0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(l===!0)return;if(A!==null)A.renderStart(k,y);let x=K0.enabled===!0&&K0.isPresenting===!0,v=R!==null&&(h===null||x)&&R.begin(B,h);if(k.matrixWorldAutoUpdate===!0)k.updateMatrixWorld();if(y.parent===null&&y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(K0.enabled===!0&&K0.isPresenting===!0&&(R===null||R.isCompositing()===!1)){if(K0.cameraAutoUpdate===!0)K0.updateCamera(y);y=K0.getCamera()}if(k.isScene===!0)k.onBeforeRender(B,k,y,h);if(I=X0.get(k,P.length),I.init(y),I.state.textureUnits=g.getTextureUnits(),P.push(I),FJ.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),t0.setFromProjectionMatrix(FJ,RQ,y.reversedDepth),h0=this.localClippingEnabled,m0=Q0.init(this.clippingPlanes,h0),V=V0.get(k,w.length),V.init(),w.push(V),K0.enabled===!0&&K0.isPresenting===!0){let R0=B.xr.getDepthSensingMesh();if(R0!==null)i6(R0,y,-1/0,B.sortObjects)}if(i6(k,y,0,B.sortObjects),V.finish(),B.sortObjects===!0)V.sort(F0,A0,y.reversedDepth);if(OJ=K0.enabled===!1||K0.isPresenting===!1||K0.hasDepthSensing()===!1,OJ)I0.addToRenderList(V,k);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(m0===!0)Q0.beginShadows();let f=I.state.shadowsArray;if(w0.render(f,k,y),m0===!0)Q0.endShadows();if((v&&R.hasRenderPass())===!1){let{opaque:R0,transmissive:G0}=V;if(I.setupLights(),y.isArrayCamera){let L0=y.cameras;if(G0.length>0)for(let B0=0,S0=L0.length;B0<S0;B0++){let y0=L0[B0];Y$(R0,G0,k,y0)}if(OJ)I0.render(k);for(let B0=0,S0=L0.length;B0<S0;B0++){let y0=L0[B0];H$(V,k,y0,y0.viewport)}}else{if(G0.length>0)Y$(R0,G0,k,y);if(OJ)I0.render(k);H$(V,k,y)}}if(h!==null&&u===0)g.updateMultisampleRenderTarget(h),g.updateRenderTargetMipmap(h);if(v)R.end(B);if(k.isScene===!0)k.onAfterRender(B,k,y);if(W0.resetDefaultState(),t=-1,e=null,P.pop(),P.length>0){if(I=P[P.length-1],g.setTextureUnits(I.state.textureUnits),m0===!0)Q0.setGlobalState(B.clippingPlanes,I.state.camera)}else I=null;if(w.pop(),w.length>0)V=w[w.length-1];else V=null;if(A!==null)A.renderEnd()};function i6(k,y,x,v){if(k.visible===!1)return;if(k.layers.test(y.layers)){if(k.isGroup)x=k.renderOrder;else if(k.isLOD){if(k.autoUpdate===!0)k.update(y)}else if(k.isLightProbeGrid)I.pushLightProbeGrid(k);else if(k.isLight){if(I.pushLight(k),k.castShadow)I.pushShadow(k)}else if(k.isSprite){if(!k.frustumCulled||t0.intersectsSprite(k)){if(v)QJ.setFromMatrixPosition(k.matrixWorld).applyMatrix4(FJ);let R0=d.update(k),G0=k.material;if(G0.visible)V.push(k,R0,G0,x,QJ.z,null)}}else if(k.isMesh||k.isLine||k.isPoints){if(!k.frustumCulled||t0.intersectsObject(k)){let R0=d.update(k),G0=k.material;if(v){if(k.boundingSphere!==void 0){if(k.boundingSphere===null)k.computeBoundingSphere();QJ.copy(k.boundingSphere.center)}else{if(R0.boundingSphere===null)R0.computeBoundingSphere();QJ.copy(R0.boundingSphere.center)}QJ.applyMatrix4(k.matrixWorld).applyMatrix4(FJ)}if(Array.isArray(G0)){let L0=R0.groups;for(let B0=0,S0=L0.length;B0<S0;B0++){let y0=L0[B0],z0=G0[y0.materialIndex];if(z0&&z0.visible)V.push(k,R0,z0,x,QJ.z,y0)}}else if(G0.visible)V.push(k,R0,G0,x,QJ.z,null)}}}let N0=k.children;for(let R0=0,G0=N0.length;R0<G0;R0++)i6(N0[R0],y,x,v)}function H$(k,y,x,v){let{opaque:f,transmissive:N0,transparent:R0}=k;if(I.setupLightsView(x),m0===!0)Q0.setGlobalState(B.clippingPlanes,x);if(v)M.viewport(H0.copy(v));if(f.length>0)c8(f,y,x);if(N0.length>0)c8(N0,y,x);if(R0.length>0)c8(R0,y,x);M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Y$(k,y,x,v){if((x.isScene===!0?x.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[v.id]===void 0){let z0=c0.has("EXT_color_buffer_half_float")||c0.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[v.id]=new mJ(1,1,{generateMipmaps:!0,type:z0?D9:iJ,minFilter:p9,samples:Math.max(4,$J.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:x0.workingColorSpace})}let N0=I.state.transmissionRenderTarget[v.id],R0=v.viewport||H0;N0.setSize(R0.z*B.transmissionResolutionScale,R0.w*B.transmissionResolutionScale);let G0=B.getRenderTarget(),L0=B.getActiveCubeFace(),B0=B.getActiveMipmapLevel();if(B.setRenderTarget(N0),B.getClearColor(ZJ),i0=B.getClearAlpha(),i0<1)B.setClearColor(16777215,0.5);if(B.clear(),OJ)I0.render(x);let S0=B.toneMapping;B.toneMapping=sJ;let y0=v.viewport;if(v.viewport!==void 0)v.viewport=void 0;if(I.setupLightsView(v),m0===!0)Q0.setGlobalState(B.clippingPlanes,v);if(c8(k,x,v),g.updateMultisampleRenderTarget(N0),g.updateRenderTargetMipmap(N0),c0.has("WEBGL_multisampled_render_to_texture")===!1){let z0=!1;for(let s0=0,XJ=y.length;s0<XJ;s0++){let YJ=y[s0],{object:o0,geometry:MJ,material:O0,group:_J}=YJ;if(O0.side===tJ&&o0.layers.test(v.layers)){let d0=O0.side;O0.side=CJ,O0.needsUpdate=!0,X$(o0,x,v,MJ,O0,_J),O0.side=d0,O0.needsUpdate=!0,z0=!0}}if(z0===!0)g.updateMultisampleRenderTarget(N0),g.updateRenderTargetMipmap(N0)}if(B.setRenderTarget(G0,L0,B0),B.setClearColor(ZJ,i0),y0!==void 0)v.viewport=y0;B.toneMapping=S0}function c8(k,y,x){let v=y.isScene===!0?y.overrideMaterial:null;for(let f=0,N0=k.length;f<N0;f++){let R0=k[f],{object:G0,geometry:L0,group:B0}=R0,S0=R0.material;if(S0.allowOverride===!0&&v!==null)S0=v;if(G0.layers.test(x.layers))X$(G0,y,x,L0,S0,B0)}}function X$(k,y,x,v,f,N0){if(k.onBeforeRender(B,y,x,v,f,N0),k.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),f.onBeforeRender(B,y,x,v,k,N0),f.transparent===!0&&f.side===tJ&&f.forceSinglePass===!1)f.side=CJ,f.needsUpdate=!0,B.renderBufferDirect(x,y,v,f,k,N0),f.side=R8,f.needsUpdate=!0,B.renderBufferDirect(x,y,v,f,k,N0),f.side=tJ;else B.renderBufferDirect(x,y,v,f,k,N0);k.onAfterRender(B,y,x,v,f,N0)}function n8(k,y,x){if(y.isScene!==!0)y=kJ;let v=T.get(k),f=I.state.lights,N0=I.state.shadowsArray,R0=f.state.version,G0=s.getParameters(k,f.state,N0,y,x,I.state.lightProbeGridArray),L0=s.getProgramCacheKey(G0),B0=v.programs;v.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?y.environment:null,v.fog=y.fog;let S0=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;if(v.envMap=r.get(k.envMap||v.environment,S0),v.envMapRotation=v.environment!==null&&k.envMap===null?y.environmentRotation:k.envMapRotation,B0===void 0)k.addEventListener("dispose",oJ),B0=new Map,v.programs=B0;let y0=B0.get(L0);if(y0!==void 0){if(v.currentProgram===y0&&v.lightsStateVersion===R0)return G$(k,G0),y0}else{if(G0.uniforms=s.getUniforms(k),A!==null&&k.isNodeMaterial)A.build(k,x,G0);k.onBeforeCompile(G0,B),y0=s.acquireProgram(G0,L0),B0.set(L0,y0),v.uniforms=G0.uniforms}let z0=v.uniforms;if(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)z0.clippingPlanes=Q0.uniform;if(G$(k,G0),v.needsLights=SW(k),v.lightsStateVersion=R0,v.needsLights)z0.ambientLightColor.value=f.state.ambient,z0.lightProbe.value=f.state.probe,z0.directionalLights.value=f.state.directional,z0.directionalLightShadows.value=f.state.directionalShadow,z0.spotLights.value=f.state.spot,z0.spotLightShadows.value=f.state.spotShadow,z0.rectAreaLights.value=f.state.rectArea,z0.ltc_1.value=f.state.rectAreaLTC1,z0.ltc_2.value=f.state.rectAreaLTC2,z0.pointLights.value=f.state.point,z0.pointLightShadows.value=f.state.pointShadow,z0.hemisphereLights.value=f.state.hemi,z0.directionalShadowMatrix.value=f.state.directionalShadowMatrix,z0.spotLightMatrix.value=f.state.spotLightMatrix,z0.spotLightMap.value=f.state.spotLightMap,z0.pointShadowMatrix.value=f.state.pointShadowMatrix;return v.lightProbeGrid=I.state.lightProbeGridArray.length>0,v.currentProgram=y0,v.uniformsList=null,y0}function U$(k){if(k.uniformsList===null){let y=k.currentProgram.getUniforms();k.uniformsList=l8.seqWithValue(y.seq,k.uniforms)}return k.uniformsList}function G$(k,y){let x=T.get(k);x.outputColorSpace=y.outputColorSpace,x.batching=y.batching,x.batchingColor=y.batchingColor,x.instancing=y.instancing,x.instancingColor=y.instancingColor,x.instancingMorph=y.instancingMorph,x.skinning=y.skinning,x.morphTargets=y.morphTargets,x.morphNormals=y.morphNormals,x.morphColors=y.morphColors,x.morphTargetsCount=y.morphTargetsCount,x.numClippingPlanes=y.numClippingPlanes,x.numIntersection=y.numClipIntersection,x.vertexAlphas=y.vertexAlphas,x.vertexTangents=y.vertexTangents,x.toneMapping=y.toneMapping}function PW(k,y){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;C.setFromMatrixPosition(y.matrixWorld);for(let x=0,v=k.length;x<v;x++){let f=k[x];if(f.texture!==null&&f.boundingBox.containsPoint(C))return f}return null}function _W(k,y,x,v,f){if(y.isScene!==!0)y=kJ;g.resetTextureUnits();let N0=y.fog,R0=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?y.environment:null,G0=h===null?B.outputColorSpace:h.isXRRenderTarget===!0?h.texture.colorSpace:x0.workingColorSpace,L0=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,B0=r.get(v.envMap||R0,L0),S0=v.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,y0=!!x.attributes.tangent&&(!!v.normalMap||v.anisotropy>0),z0=!!x.morphAttributes.position,s0=!!x.morphAttributes.normal,XJ=!!x.morphAttributes.color,YJ=sJ;if(v.toneMapped){if(h===null||h.isXRRenderTarget===!0)YJ=B.toneMapping}let o0=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,MJ=o0!==void 0?o0.length:0,O0=T.get(v),_J=I.state.lights;if(m0===!0){if(h0===!0||k!==e){let JJ=k===e&&v.id===t;Q0.setState(v,k,JJ)}}let d0=!1;if(v.version===O0.__version){if(O0.needsLights&&O0.lightsStateVersion!==_J.state.version)d0=!0;else if(O0.outputColorSpace!==G0)d0=!0;else if(f.isBatchedMesh&&O0.batching===!1)d0=!0;else if(!f.isBatchedMesh&&O0.batching===!0)d0=!0;else if(f.isBatchedMesh&&O0.batchingColor===!0&&f.colorTexture===null)d0=!0;else if(f.isBatchedMesh&&O0.batchingColor===!1&&f.colorTexture!==null)d0=!0;else if(f.isInstancedMesh&&O0.instancing===!1)d0=!0;else if(!f.isInstancedMesh&&O0.instancing===!0)d0=!0;else if(f.isSkinnedMesh&&O0.skinning===!1)d0=!0;else if(!f.isSkinnedMesh&&O0.skinning===!0)d0=!0;else if(f.isInstancedMesh&&O0.instancingColor===!0&&f.instanceColor===null)d0=!0;else if(f.isInstancedMesh&&O0.instancingColor===!1&&f.instanceColor!==null)d0=!0;else if(f.isInstancedMesh&&O0.instancingMorph===!0&&f.morphTexture===null)d0=!0;else if(f.isInstancedMesh&&O0.instancingMorph===!1&&f.morphTexture!==null)d0=!0;else if(O0.envMap!==B0)d0=!0;else if(v.fog===!0&&O0.fog!==N0)d0=!0;else if(O0.numClippingPlanes!==void 0&&(O0.numClippingPlanes!==Q0.numPlanes||O0.numIntersection!==Q0.numIntersection))d0=!0;else if(O0.vertexAlphas!==S0)d0=!0;else if(O0.vertexTangents!==y0)d0=!0;else if(O0.morphTargets!==z0)d0=!0;else if(O0.morphNormals!==s0)d0=!0;else if(O0.morphColors!==XJ)d0=!0;else if(O0.toneMapping!==YJ)d0=!0;else if(O0.morphTargetsCount!==MJ)d0=!0;else if(!!O0.lightProbeGrid!==I.state.lightProbeGridArray.length>0)d0=!0}else d0=!0,O0.__version=v.version;let xJ=O0.currentProgram;if(d0===!0){if(xJ=n8(v,y,f),A&&v.isNodeMaterial)A.onUpdateProgram(v,xJ,O0)}let aJ=!1,M9=!1,e9=!1,a0=xJ.getUniforms(),UJ=O0.uniforms;if(M.useProgram(xJ.program))aJ=!0,M9=!0,e9=!0;if(v.id!==t)t=v.id,M9=!0;if(O0.needsLights){let JJ=PW(I.state.lightProbeGridArray,f);if(O0.lightProbeGrid!==JJ)O0.lightProbeGrid=JJ,M9=!0}if(aJ||e!==k){if(M.buffers.depth.getReversed()&&k.reversedDepth!==!0)k._reversedDepth=!0,k.updateProjectionMatrix();a0.setValue(j,"projectionMatrix",k.projectionMatrix),a0.setValue(j,"viewMatrix",k.matrixWorldInverse);let V9=a0.map.cameraPosition;if(V9!==void 0)V9.setValue(j,bJ.setFromMatrixPosition(k.matrixWorld));if($J.logarithmicDepthBuffer)a0.setValue(j,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2));if(v.isMeshPhongMaterial||v.isMeshToonMaterial||v.isMeshLambertMaterial||v.isMeshBasicMaterial||v.isMeshStandardMaterial||v.isShaderMaterial)a0.setValue(j,"isOrthographic",k.isOrthographicCamera===!0);if(e!==k)e=k,M9=!0,e9=!0}if(O0.needsLights){if(_J.state.directionalShadowMap.length>0)a0.setValue(j,"directionalShadowMap",_J.state.directionalShadowMap,g);if(_J.state.spotShadowMap.length>0)a0.setValue(j,"spotShadowMap",_J.state.spotShadowMap,g);if(_J.state.pointShadowMap.length>0)a0.setValue(j,"pointShadowMap",_J.state.pointShadowMap,g)}if(f.isSkinnedMesh){a0.setOptional(j,f,"bindMatrix"),a0.setOptional(j,f,"bindMatrixInverse");let JJ=f.skeleton;if(JJ){if(JJ.boneTexture===null)JJ.computeBoneTexture();a0.setValue(j,"boneTexture",JJ.boneTexture,g)}}if(f.isBatchedMesh){if(a0.setOptional(j,f,"batchingTexture"),a0.setValue(j,"batchingTexture",f._matricesTexture,g),a0.setOptional(j,f,"batchingIdTexture"),a0.setValue(j,"batchingIdTexture",f._indirectTexture,g),a0.setOptional(j,f,"batchingColorTexture"),f._colorsTexture!==null)a0.setValue(j,"batchingColorTexture",f._colorsTexture,g)}let L9=x.morphAttributes;if(L9.position!==void 0||L9.normal!==void 0||L9.color!==void 0)u0.update(f,x,xJ);if(M9||O0.receiveShadow!==f.receiveShadow)O0.receiveShadow=f.receiveShadow,a0.setValue(j,"receiveShadow",f.receiveShadow);if((v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial)&&v.envMap===null&&y.environment!==null)UJ.envMapIntensity.value=y.environmentIntensity;if(UJ.dfgLUT!==void 0)UJ.dfgLUT.value=rU();if(M9){if(a0.setValue(j,"toneMappingExposure",B.toneMappingExposure),O0.needsLights)TW(UJ,e9);if(N0&&v.fog===!0)q0.refreshFogUniforms(UJ,N0);if(q0.refreshMaterialUniforms(UJ,v,D0,Z0,I.state.transmissionRenderTarget[k.id]),O0.needsLights&&O0.lightProbeGrid){let JJ=O0.lightProbeGrid;UJ.probesSH.value=JJ.texture,UJ.probesMin.value.copy(JJ.boundingBox.min),UJ.probesMax.value.copy(JJ.boundingBox.max),UJ.probesResolution.value.copy(JJ.resolution)}l8.upload(j,U$(O0),UJ,g)}if(v.isShaderMaterial&&v.uniformsNeedUpdate===!0)l8.upload(j,U$(O0),UJ,g),v.uniformsNeedUpdate=!1;if(v.isSpriteMaterial)a0.setValue(j,"center",f.center);if(a0.setValue(j,"modelViewMatrix",f.modelViewMatrix),a0.setValue(j,"normalMatrix",f.normalMatrix),a0.setValue(j,"modelMatrix",f.matrixWorld),v.uniformsGroups!==void 0){let JJ=v.uniformsGroups;for(let V9=0,J8=JJ.length;V9<J8;V9++){let N$=JJ[V9];E0.update(N$,xJ),E0.bind(N$,xJ)}}return xJ}function TW(k,y){k.ambientLightColor.needsUpdate=y,k.lightProbe.needsUpdate=y,k.directionalLights.needsUpdate=y,k.directionalLightShadows.needsUpdate=y,k.pointLights.needsUpdate=y,k.pointLightShadows.needsUpdate=y,k.spotLights.needsUpdate=y,k.spotLightShadows.needsUpdate=y,k.rectAreaLights.needsUpdate=y,k.hemisphereLights.needsUpdate=y}function SW(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}if(this.getActiveCubeFace=function(){return n},this.getActiveMipmapLevel=function(){return u},this.getRenderTarget=function(){return h},this.setRenderTargetTextures=function(k,y,x){let v=T.get(k);if(v.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,v.__autoAllocateDepthBuffer===!1)v.__useRenderToTexture=!1;T.get(k.texture).__webglTexture=y,T.get(k.depthTexture).__webglTexture=v.__autoAllocateDepthBuffer?void 0:x,v.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,y){let x=T.get(k);x.__webglFramebuffer=y,x.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(k,y=0,x=0){h=k,n=y,u=x;let v=null,f=!1,N0=!1;if(k){let G0=T.get(k);if(G0.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(j.FRAMEBUFFER,G0.__webglFramebuffer),H0.copy(k.viewport),M0.copy(k.scissor),k0=k.scissorTest,M.viewport(H0),M.scissor(M0),M.setScissorTest(k0),t=-1;return}else if(G0.__webglFramebuffer===void 0)g.setupRenderTarget(k);else if(G0.__hasExternalTextures)g.rebindTextures(k,T.get(k.texture).__webglTexture,T.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let S0=k.depthTexture;if(G0.__boundDepthTexture!==S0){if(S0!==null&&T.has(S0)&&(k.width!==S0.image.width||k.height!==S0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(k)}}let L0=k.texture;if(L0.isData3DTexture||L0.isDataArrayTexture||L0.isCompressedArrayTexture)N0=!0;let B0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget){if(Array.isArray(B0[y]))v=B0[y][x];else v=B0[y];f=!0}else if(k.samples>0&&g.useMultisampledRTT(k)===!1)v=T.get(k).__webglMultisampledFramebuffer;else if(Array.isArray(B0))v=B0[x];else v=B0;H0.copy(k.viewport),M0.copy(k.scissor),k0=k.scissorTest}else H0.copy(p0).multiplyScalar(D0).floor(),M0.copy(f0).multiplyScalar(D0).floor(),k0=b0;if(x!==0)v=m;if(M.bindFramebuffer(j.FRAMEBUFFER,v))M.drawBuffers(k,v);if(M.viewport(H0),M.scissor(M0),M.setScissorTest(k0),f){let G0=T.get(k.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+y,G0.__webglTexture,x)}else if(N0){let G0=y;for(let L0=0;L0<k.textures.length;L0++){let B0=T.get(k.textures[L0]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+L0,B0.__webglTexture,x,G0)}}else if(k!==null&&x!==0){let G0=T.get(k.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,G0.__webglTexture,x)}t=-1},this.readRenderTargetPixels=function(k,y,x,v,f,N0,R0,G0=0){if(!(k&&k.isWebGLRenderTarget)){P0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let L0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&R0!==void 0)L0=L0[R0];if(L0){M.bindFramebuffer(j.FRAMEBUFFER,L0);try{let B0=k.textures[G0],S0=B0.format,y0=B0.type;if(k.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+G0);if(!$J.textureFormatReadable(S0)){P0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$J.textureTypeReadable(y0)){P0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(y>=0&&y<=k.width-v&&(x>=0&&x<=k.height-f))j.readPixels(y,x,v,f,c.convert(S0),c.convert(y0),N0)}finally{let B0=h!==null?T.get(h).__webglFramebuffer:null;M.bindFramebuffer(j.FRAMEBUFFER,B0)}}},this.readRenderTargetPixelsAsync=async function(k,y,x,v,f,N0,R0,G0=0){if(!(k&&k.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let L0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&R0!==void 0)L0=L0[R0];if(L0)if(y>=0&&y<=k.width-v&&(x>=0&&x<=k.height-f)){M.bindFramebuffer(j.FRAMEBUFFER,L0);let B0=k.textures[G0],S0=B0.format,y0=B0.type;if(k.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+G0);if(!$J.textureFormatReadable(S0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$J.textureTypeReadable(y0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let z0=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,z0),j.bufferData(j.PIXEL_PACK_BUFFER,N0.byteLength,j.STREAM_READ),j.readPixels(y,x,v,f,c.convert(S0),c.convert(y0),0);let s0=h!==null?T.get(h).__webglFramebuffer:null;M.bindFramebuffer(j.FRAMEBUFFER,s0);let XJ=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await jZ(j,XJ,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,z0),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,N0),j.deleteBuffer(z0),j.deleteSync(XJ),N0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,y=null,x=0){let v=Math.pow(2,-x),f=Math.floor(k.image.width*v),N0=Math.floor(k.image.height*v),R0=y!==null?y.x:0,G0=y!==null?y.y:0;g.setTexture2D(k,0),j.copyTexSubImage2D(j.TEXTURE_2D,x,0,0,R0,G0,f,N0),M.unbindTexture()},this.copyTextureToTexture=function(k,y,x=null,v=null,f=0,N0=0){let R0,G0,L0,B0,S0,y0,z0,s0,XJ,YJ=k.isCompressedTexture?k.mipmaps[N0]:k.image;if(x!==null)R0=x.max.x-x.min.x,G0=x.max.y-x.min.y,L0=x.isBox3?x.max.z-x.min.z:1,B0=x.min.x,S0=x.min.y,y0=x.isBox3?x.min.z:0;else{let UJ=Math.pow(2,-f);if(R0=Math.floor(YJ.width*UJ),G0=Math.floor(YJ.height*UJ),k.isDataArrayTexture)L0=YJ.depth;else if(k.isData3DTexture)L0=Math.floor(YJ.depth*UJ);else L0=1;B0=0,S0=0,y0=0}if(v!==null)z0=v.x,s0=v.y,XJ=v.z;else z0=0,s0=0,XJ=0;let o0=c.convert(y.format),MJ=c.convert(y.type),O0;if(y.isData3DTexture)g.setTexture3D(y,0),O0=j.TEXTURE_3D;else if(y.isDataArrayTexture||y.isCompressedArrayTexture)g.setTexture2DArray(y,0),O0=j.TEXTURE_2D_ARRAY;else g.setTexture2D(y,0),O0=j.TEXTURE_2D;M.activeTexture(j.TEXTURE0),M.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,y.flipY),M.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),M.pixelStorei(j.UNPACK_ALIGNMENT,y.unpackAlignment);let _J=M.getParameter(j.UNPACK_ROW_LENGTH),d0=M.getParameter(j.UNPACK_IMAGE_HEIGHT),xJ=M.getParameter(j.UNPACK_SKIP_PIXELS),aJ=M.getParameter(j.UNPACK_SKIP_ROWS),M9=M.getParameter(j.UNPACK_SKIP_IMAGES);M.pixelStorei(j.UNPACK_ROW_LENGTH,YJ.width),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,YJ.height),M.pixelStorei(j.UNPACK_SKIP_PIXELS,B0),M.pixelStorei(j.UNPACK_SKIP_ROWS,S0),M.pixelStorei(j.UNPACK_SKIP_IMAGES,y0);let e9=k.isDataArrayTexture||k.isData3DTexture,a0=y.isDataArrayTexture||y.isData3DTexture;if(k.isDepthTexture){let UJ=T.get(k),L9=T.get(y),JJ=T.get(UJ.__renderTarget),V9=T.get(L9.__renderTarget);M.bindFramebuffer(j.READ_FRAMEBUFFER,JJ.__webglFramebuffer),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,V9.__webglFramebuffer);for(let J8=0;J8<L0;J8++){if(e9)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(k).__webglTexture,f,y0+J8),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(y).__webglTexture,N0,XJ+J8);j.blitFramebuffer(B0,S0,R0,G0,z0,s0,R0,G0,j.DEPTH_BUFFER_BIT,j.NEAREST)}M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(f!==0||k.isRenderTargetTexture||T.has(k)){let UJ=T.get(k),L9=T.get(y);M.bindFramebuffer(j.READ_FRAMEBUFFER,o),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,p);for(let JJ=0;JJ<L0;JJ++){if(e9)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,UJ.__webglTexture,f,y0+JJ);else j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,UJ.__webglTexture,f);if(a0)j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,L9.__webglTexture,N0,XJ+JJ);else j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,L9.__webglTexture,N0);if(f!==0)j.blitFramebuffer(B0,S0,R0,G0,z0,s0,R0,G0,j.COLOR_BUFFER_BIT,j.NEAREST);else if(a0)j.copyTexSubImage3D(O0,N0,z0,s0,XJ+JJ,B0,S0,R0,G0);else j.copyTexSubImage2D(O0,N0,z0,s0,B0,S0,R0,G0)}M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(a0)if(k.isDataTexture||k.isData3DTexture)j.texSubImage3D(O0,N0,z0,s0,XJ,R0,G0,L0,o0,MJ,YJ.data);else if(y.isCompressedArrayTexture)j.compressedTexSubImage3D(O0,N0,z0,s0,XJ,R0,G0,L0,o0,YJ.data);else j.texSubImage3D(O0,N0,z0,s0,XJ,R0,G0,L0,o0,MJ,YJ);else if(k.isDataTexture)j.texSubImage2D(j.TEXTURE_2D,N0,z0,s0,R0,G0,o0,MJ,YJ.data);else if(k.isCompressedTexture)j.compressedTexSubImage2D(j.TEXTURE_2D,N0,z0,s0,YJ.width,YJ.height,o0,YJ.data);else j.texSubImage2D(j.TEXTURE_2D,N0,z0,s0,R0,G0,o0,MJ,YJ);if(M.pixelStorei(j.UNPACK_ROW_LENGTH,_J),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,d0),M.pixelStorei(j.UNPACK_SKIP_PIXELS,xJ),M.pixelStorei(j.UNPACK_SKIP_ROWS,aJ),M.pixelStorei(j.UNPACK_SKIP_IMAGES,M9),N0===0&&y.generateMipmaps)j.generateMipmap(O0);M.unbindTexture()},this.initRenderTarget=function(k){if(T.get(k).__webglFramebuffer===void 0)g.setupRenderTarget(k)},this.initTexture=function(k){if(k.isCubeTexture)g.setTextureCube(k,0);else if(k.isData3DTexture)g.setTexture3D(k,0);else if(k.isDataArrayTexture||k.isCompressedArrayTexture)g.setTexture2DArray(k,0);else g.setTexture2D(k,0);M.unbindTexture()},this.resetState=function(){n=0,u=0,h=null,M.reset(),W0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return RQ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=x0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=x0._getUnpackColorSpace()}}var tU="[data-film-layer]",c6="film-layer--static",n6="film-layer--active",u8=1.5,zW=0.000001,fJ=Object.freeze({slipCycle:5.8,slipOffsetMinimum:0.22,slipOffsetRange:0.44,slipEnvelopeHalfWidth:0.06,slipMinimumPixels:1.1,slipAmplitudePixels:2.4,scratchCycle:5.4,scratchVisibleBy:0.34,scratchFullUntil:1.35,chemicalCycle:7.6,chemicalOffsetMinimum:0.24,chemicalOffsetRange:0.26,chemicalWindowHalfWidth:0.085}),eU=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,JG=`
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uPointer;
  uniform float uPointerEnergy;
  uniform float uScrollImpulse;
  uniform float uScrollSettle;
  uniform float uScrollDirection;
  varying vec2 vUv;

  float hash21(vec2 point) {
    point = fract(point * vec2(123.34, 456.21));
    point += dot(point, point + 45.32);
    return fract(point.x * point.y);
  }

  float valueNoise(vec2 point) {
    vec2 cell = floor(point);
    vec2 blend = fract(point);
    blend = blend * blend * (3.0 - 2.0 * blend);

    float a = hash21(cell);
    float b = hash21(cell + vec2(1.0, 0.0));
    float c = hash21(cell + vec2(0.0, 1.0));
    float d = hash21(cell + vec2(1.0, 1.0));

    return mix(mix(a, b, blend.x), mix(c, d, blend.x), blend.y);
  }

  void main() {
    vec2 resolution = max(uResolution, vec2(1.0));
    float filmFrame = floor(uTime * 18.0);
    float aspect = resolution.x / resolution.y;

    // Pointer movement bends only the virtual emulsion. Live text and
    // interface controls remain geometrically stable underneath the canvas.
    vec2 pointerVector = vUv - uPointer;
    pointerVector.x *= aspect;
    float pointerDistance = length(pointerVector);
    float pointerFalloff = exp(
      -pointerDistance * pointerDistance * 20.0
    );
    float pointerWave = sin(
      pointerDistance * 46.0 - uTime * 12.0
    ) * uPointerEnergy * pointerFalloff;
    vec2 pointerDirection = pointerVector / max(0.001, pointerDistance);
    pointerDirection.x /= aspect;

    // Scroll start creates broken horizontal registration bands; scroll end
    // adds a shorter elastic recoil. Both impulses decay in JavaScript.
    float scrollStrength = max(
      uScrollImpulse,
      uScrollSettle * 0.78
    );
    float scrollRow = floor(vUv.y * 18.0);
    float scrollRowNoise = hash21(vec2(
      scrollRow,
      floor(uTime * 20.0)
    ));
    float scrollTearMask = smoothstep(
      0.48,
      0.90,
      scrollRowNoise
    ) * scrollStrength;
    float scrollRecoil = sin(
      vUv.y * 92.0 + uTime * 28.0
    ) * uScrollSettle * 0.014;

    vec2 emulsionUv = vUv;
    emulsionUv += pointerDirection * pointerWave * 0.010;
    emulsionUv.x += uScrollDirection * (
      scrollTearMask * (0.012 + uScrollImpulse * 0.024)
      + scrollRecoil
    );
    emulsionUv.y += sin(
      vUv.x * 37.0 - uTime * 19.0
    ) * scrollStrength * 0.006;

    // The emulsion moves while the document stays perfectly still. A short
    // gate slip is guaranteed in every cycle so the projection reads as
    // motion without ever displacing or blurring live typography.
    float slipCycle = ${fJ.slipCycle};
    float slipEpoch = floor(uTime / slipCycle);
    float slipPhase = fract(uTime / slipCycle);
    float slipOffset = (
      ${fJ.slipOffsetMinimum}
      + ${fJ.slipOffsetRange}
      * hash21(vec2(slipEpoch, 34.17))
    );
    float slipEnvelope = (1.0 - smoothstep(
      0.0,
      ${fJ.slipEnvelopeHalfWidth},
      abs(slipPhase - slipOffset)
    )) * smoothstep(0.6, 1.2, uTime);
    float slipSign = (
      step(0.5, hash21(vec2(slipEpoch, 51.83))) * 2.0 - 1.0
    );
    float slipMagnitude = mix(
      ${fJ.slipMinimumPixels},
      ${fJ.slipAmplitudePixels},
      hash21(vec2(slipEpoch, 67.29))
    );
    float slipPixels = slipSign * slipMagnitude * slipEnvelope;

    vec2 gateWeave = vec2(
      sin(uTime * 1.73) * 1.25,
      cos(uTime * 1.19) * 0.82 + slipPixels
    );
    vec2 pixel = floor(emulsionUv * resolution + gateWeave);

    // Fine silver grains are modulated by a softer density field. Combining
    // both scales avoids the uniform digital-static look.
    float fineGrain = hash21(pixel + filmFrame * vec2(11.73, 7.91));
    float clumpedGrain = valueNoise(
      pixel * 0.17 + uTime * vec2(1.91, -1.37)
    );
    float coarseGrain = hash21(
      floor(pixel / 3.0) + filmFrame * vec2(3.17, 5.83)
    );
    float coarseSpark = smoothstep(0.86, 0.99, coarseGrain);
    float grainThreshold = 0.5 + (clumpedGrain - 0.5) * 0.20;
    float grainTone = step(grainThreshold, fineGrain);
    grainTone = mix(
      grainTone,
      step(0.5, coarseGrain),
      coarseSpark * 0.58
    );
    float flicker = 0.88 + hash21(vec2(filmFrame, 9.17)) * 0.12;
    float grainAlpha = (
      0.014
      + abs(fineGrain - 0.5) * 0.052
      + abs(clumpedGrain - 0.5) * 0.026
      + coarseSpark * 0.035
    ) * flicker;

    // A drifting hairline appears early and then returns every few seconds.
    // Its broken texture keeps it photographic instead of looking like UI.
    float scratchCycle = ${fJ.scratchCycle};
    float scratchEpoch = floor(uTime / scratchCycle);
    float scratchLocal = mod(uTime, scratchCycle);
    float scratchX = hash21(vec2(scratchEpoch, 31.41)) * resolution.x;
    float scratchDistance = abs(pixel.x - scratchX);
    float scratchLife = smoothstep(
      0.18,
      ${fJ.scratchVisibleBy},
      scratchLocal
    ) * (
      1.0 - smoothstep(
        ${fJ.scratchFullUntil},
        1.85,
        scratchLocal
      )
    );
    float scratchTexture = 0.38 + 0.62 * hash21(
      vec2(floor(pixel.y / 41.0), scratchEpoch)
    );
    float scratch = (1.0 - smoothstep(0.0, 1.60, scratchDistance))
      * scratchLife
      * scratchTexture;

    // The registration slip leaves one restrained splice line in the
    // emulsion. It never offsets the DOM itself.
    float spliceY = hash21(vec2(slipEpoch, 82.31)) * resolution.y;
    float spliceDistance = abs(pixel.y - spliceY);
    float splice = (
      1.0 - smoothstep(0.0, 1.35, spliceDistance)
    ) * slipEnvelope;

    // A local chemical halo is guaranteed within the first four seconds and
    // then moves to a new position each cycle. It never becomes a full-screen
    // flash.
    float chemicalCycle = ${fJ.chemicalCycle};
    float chemicalEpoch = floor(uTime / chemicalCycle);
    float chemicalPhase = fract(uTime / chemicalCycle);
    float chemicalOffset = (
      ${fJ.chemicalOffsetMinimum}
      + ${fJ.chemicalOffsetRange}
      * hash21(vec2(chemicalEpoch, 13.91))
    );
    float chemicalWindow = 1.0 - smoothstep(
      0.0,
      ${fJ.chemicalWindowHalfWidth},
      abs(chemicalPhase - chemicalOffset)
    );
    vec2 chemicalCenter = vec2(
      0.12 + hash21(vec2(chemicalEpoch, 27.17)) * 0.76,
      0.12 + hash21(vec2(chemicalEpoch, 64.73)) * 0.76
    );
    vec2 chemicalUv = (emulsionUv - chemicalCenter) * vec2(
      resolution.x / resolution.y,
      1.0
    );
    float chemicalAngle = atan(chemicalUv.y, chemicalUv.x);
    float chemicalSector = floor(
      (chemicalAngle + 3.14159265) * 5.1
    );
    float chemicalWobble = (
      hash21(vec2(chemicalSector, chemicalEpoch)) - 0.5
    ) * 0.012;
    float chemicalRadius = (
      0.028
      + hash21(vec2(chemicalEpoch, 42.23)) * 0.060
      + chemicalWobble
    );
    float chemicalDistance = length(chemicalUv);
    float chemicalRing = smoothstep(
      chemicalRadius * 0.56,
      chemicalRadius * 0.76,
      chemicalDistance
    ) * (
      1.0 - smoothstep(
        chemicalRadius,
        chemicalRadius + 0.014,
        chemicalDistance
      )
    );
    float chemicalCore = 1.0 - smoothstep(
      chemicalRadius * 0.12,
      chemicalRadius * 0.58,
      chemicalDistance
    );
    float chemicalEvent = chemicalWindow;

    float defectAlpha = (
      scratch * 0.075
      + splice * 0.045
      + chemicalRing * chemicalEvent * 0.070
      + chemicalCore * chemicalEvent * 0.025
    );

    // Frame-to-frame exposure variation and a slow travelling projector band
    // make the animation legible even between local defects.
    float exposureFrame = floor(uTime * 9.0);
    float exposureSignal = (
      hash21(vec2(exposureFrame, 47.13)) * 2.0 - 1.0
    );
    float exposureAlpha = 0.006 + abs(exposureSignal) * 0.012;
    float exposureTone = step(0.0, exposureSignal);
    float rollCenter = fract(uTime * 0.085);
    float rollRawDistance = abs(vUv.y - rollCenter);
    float rollDistance = min(rollRawDistance, 1.0 - rollRawDistance);
    float rollBand = (
      1.0 - smoothstep(0.025, 0.160, rollDistance)
    ) * 0.014;
    float pointerHalo = (
      1.0 - smoothstep(0.035, 0.220, pointerDistance)
    ) * uPointerEnergy * 0.032;
    float scrollAlpha = (
      scrollTearMask * 0.085
      + abs(scrollRecoil) * 2.20
    );
    float scrollTone = step(0.69, scrollRowNoise);

    float baseAlpha = grainAlpha + defectAlpha;
    float projectionAlpha = (
      exposureAlpha
      + rollBand
      + pointerHalo
      + scrollAlpha
    );
    float combinedAlpha = max(0.0001, baseAlpha + projectionAlpha);
    float baseTone = mix(
      grainTone,
      1.0,
      clamp(scratch + splice + chemicalRing * chemicalEvent, 0.0, 1.0)
    );
    baseTone = mix(
      baseTone,
      0.0,
      chemicalCore * chemicalEvent * 0.72
    );
    float projectionTone = (
      exposureTone * exposureAlpha
      + rollBand
      + pointerHalo
      + scrollTone * scrollAlpha
    ) / max(0.0001, projectionAlpha);
    float tone = (
      baseTone * baseAlpha + projectionTone * projectionAlpha
    ) / combinedAlpha;
    float interactionAlphaLimit = (
      0.140
      + scrollStrength * 0.040
      + uPointerEnergy * 0.010
    );
    float alpha = min(interactionAlphaLimit, combinedAlpha);

    gl_FragColor = vec4(vec3(tone), alpha);
  }
`,QG=`
  precision highp float;

  attribute float aSize;
  attribute float aOpacity;
  attribute float aSpeed;
  attribute float aDrift;
  attribute float aPhase;
  attribute float aTone;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform vec2 uPointer;
  uniform float uPointerEnergy;
  uniform float uScrollImpulse;
  uniform float uScrollSettle;
  uniform float uScrollDirection;
  varying float vOpacity;
  varying float vTone;

  void main() {
    vec3 animated = position;
    float travel = position.y - uTime * aSpeed;
    animated.y = mod(travel + 1.06, 2.12) - 1.06;
    animated.x += sin(
      uTime * (0.55 + abs(aSpeed) * 3.0) + aPhase
    ) * aDrift;

    vec2 pointerNdc = uPointer * 2.0 - 1.0;
    vec2 pointerDelta = animated.xy - pointerNdc;
    float pointerDistance = length(pointerDelta);
    float pointerInfluence = (
      1.0 - smoothstep(0.04, 0.58, pointerDistance)
    ) * uPointerEnergy;
    vec2 pointerTangent = vec2(
      -pointerDelta.y,
      pointerDelta.x
    ) / max(0.001, pointerDistance);
    animated.xy += pointerTangent * pointerInfluence * 0.034;
    animated.x += sin(
      animated.y * 22.0 + uTime * 18.0
    ) * uScrollImpulse * 0.030;
    animated.y += uScrollDirection * (
      uScrollImpulse - uScrollSettle * 0.60
    ) * 0.020;

    vec4 modelViewPosition = modelViewMatrix * vec4(animated, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;

    float breathing = 0.80 + 0.20 * sin(uTime * 1.10 + aPhase);
    gl_PointSize = max(1.0, aSize * uPixelRatio * breathing);
    vOpacity = aOpacity * (
      0.78 + 0.22 * sin(uTime * 0.83 + aPhase * 1.71)
    );
    vTone = aTone;
  }
`,$G=`
  precision mediump float;

  varying float vOpacity;
  varying float vTone;

  void main() {
    float moteDistance = length(gl_PointCoord - vec2(0.5));
    float halo = 1.0 - smoothstep(0.18, 0.50, moteDistance);
    float core = 1.0 - smoothstep(0.06, 0.22, moteDistance);
    float moteAlpha = (halo * 0.72 + core * 0.28) * vOpacity;

    gl_FragColor = vec4(vec3(vTone), moteAlpha);
  }
`,$$=new WeakMap;function k9(J,Q,$){return Math.min($,Math.max(Q,J))}function ZG({width:J,height:Q,viewportWidth:$,viewportHeight:Z,pixelsPerParticle:W,minParticles:K,maxParticles:H}){let Y=Math.max(1,$*Z),X=Math.min(J*Q,Y*1.5),U=Math.round(X/W);return Math.round(k9(U,K,H))}function WG(J,Q){if(!Number.isFinite(J)||J<0)return!1;let $=k9(Number.isFinite(Q)?Q:30,12,60);return J+zW>=1000/$}function LW(J,Q){return{present:J.hasAttribute(Q),value:J.getAttribute(Q)}}function VW(J,Q,$){if($.present)J.setAttribute(Q,$.value??"");else J.removeAttribute(Q)}function Z9(J,Q,$,Z){if(!J?.addEventListener)return()=>{};return J.addEventListener(Q,$,Z),()=>J.removeEventListener(Q,$,Z)}function KG(J,Q){if(J?.addEventListener)return J.addEventListener("change",Q),()=>J.removeEventListener("change",Q);if(J?.addListener)return J.addListener(Q),()=>J.removeListener(Q);return()=>{}}function R9(J){try{J?.()}catch{}}function W9(J,Q){let $=Math.sin(J*91.713+Q*17.193)*43758.5453;return $-Math.floor($)}function HG(J){return Boolean(J&&J.nodeType===1&&J.ownerDocument)}function BW(J,Q){let $=Q.innerWidth||Q.document?.documentElement?.clientWidth||0,Z=Q.innerHeight||Q.document?.documentElement?.clientHeight||0;return J.width>0&&J.height>0&&J.bottom>0&&J.right>0&&J.top<Z&&J.left<$}class wW{constructor(J,Q={}){if(!HG(J))throw TypeError("FilmLayer requires a DOM element.");this.host=J,this.document=J.ownerDocument,this.view=this.document.defaultView,this.options={maxDpr:k9(Number.isFinite(Q.maxDpr)?Q.maxDpr:u8,0.5,u8),minParticles:k9(Math.round(Number.isFinite(Q.minParticles)?Q.minParticles:24),0,300),maxParticles:k9(Math.round(Number.isFinite(Q.maxParticles)?Q.maxParticles:150),0,400),pixelsPerParticle:Math.max(8000,Number.isFinite(Q.pixelsPerParticle)?Q.pixelsPerParticle:18000),maxFps:k9(Number.isFinite(Q.maxFps)?Q.maxFps:30,12,60)},this.options.maxParticles=Math.max(this.options.minParticles,this.options.maxParticles),this.initialState={activeClass:J.classList.contains(n6),staticClass:J.classList.contains(c6),layerState:LW(J,"data-film-layer-state"),fallback:LW(J,"data-film-layer-fallback"),inlinePosition:J.style.position},this.renderer=null,this.scene=null,this.camera=null,this.canvas=null,this.filmGeometry=null,this.filmMaterial=null,this.dustGeometry=null,this.dustMaterial=null,this.dust=null,this.particleCount=0,this.frameRequest=null,this.lastFrameTime=null,this.frameAccumulator=0,this.elapsedTime=0,this.pointerTarget=new v0(0.5,0.5),this.pointerCurrent=new v0(0.5,0.5),this.pointerEnergy=0,this.scrollImpulse=0,this.scrollSettle=0,this.scrollDirection=1,this.scrollActive=!1,this.drawable=!1,this.positionAdjusted=!1,this.destroyed=!1,this.permanentFallback=null,this.cleanups=[],this.rendererCleanups=[],this.pageVisible=this.document.visibilityState!=="hidden",this.intersecting=this.view?BW(J.getBoundingClientRect(),this.view):!1,this.motionQuery=this.view?.matchMedia?this.view.matchMedia("(prefers-reduced-motion: reduce)"):null,this.connection=this.view?.navigator?.connection||this.view?.navigator?.mozConnection||this.view?.navigator?.webkitConnection||null,this.onFrame=this.onFrame.bind(this),this.onVisibilityChange=this.onVisibilityChange.bind(this),this.onPreferenceChange=this.onPreferenceChange.bind(this),this.onResize=this.onResize.bind(this),this.onContextLost=this.onContextLost.bind(this),this.installLifecycleObservers(),this.evaluateEnvironment()}get isStatic(){return this.host.getAttribute("data-film-layer-state")==="static"}get fallbackReason(){return this.host.getAttribute("data-film-layer-fallback")}installLifecycleObservers(){if(this.cleanups.push(Z9(this.document,"visibilitychange",this.onVisibilityChange),Z9(this.document,"nimbo:motionchange",this.onPreferenceChange),KG(this.motionQuery,this.onPreferenceChange)),this.connection)this.cleanups.push(Z9(this.connection,"change",this.onPreferenceChange));let J=this.view?.ResizeObserver;if(J)this.resizeObserver=new J(this.onResize),this.resizeObserver.observe(this.host),this.cleanups.push(()=>this.resizeObserver?.disconnect());else if(this.view)this.cleanups.push(Z9(this.view,"resize",this.onResize));let Q=this.view?.IntersectionObserver;if(Q)this.intersectionObserver=new Q(($)=>{let Z=$.find(({target:W})=>W===this.host);if(!Z)return;this.intersecting=Z.isIntersecting&&Z.intersectionRatio>0,this.syncAnimationLoop()},{threshold:0}),this.intersectionObserver.observe(this.host),this.cleanups.push(()=>this.intersectionObserver?.disconnect());else if(this.view){let $=()=>{this.intersecting=BW(this.host.getBoundingClientRect(),this.view),this.syncAnimationLoop()};this.cleanups.push(Z9(this.view,"scroll",$,{passive:!0}))}}currentPreferenceFallback(){if(this.document.documentElement?.dataset.motion==="off")return"motion-disabled";if(this.motionQuery?.matches)return"reduced-motion";if(this.connection?.saveData===!0)return"data-saver";return null}evaluateEnvironment(){if(this.destroyed)return;let J=this.currentPreferenceFallback()||this.permanentFallback;if(J){this.activateStaticFallback(J);return}if(!this.renderer)this.mountRenderer();else this.markActive(),this.onResize(),this.syncAnimationLoop()}mountRenderer(){if(!this.view||!this.document?.createElement){this.permanentFallback="webgl-unavailable",this.activateStaticFallback(this.permanentFallback);return}let J=this.document.createElement("canvas");J.setAttribute("aria-hidden","true"),J.setAttribute("data-film-layer-canvas",""),J.tabIndex=-1,Object.assign(J.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block",pointerEvents:"none",userSelect:"none"});let Q={alpha:!0,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"low-power"},$=null;try{$=J.getContext("webgl2",Q)}catch{$=null}if(!$){this.permanentFallback="webgl-unavailable",this.activateStaticFallback(this.permanentFallback);return}try{this.renderer=new Q$({canvas:J,context:$,alpha:!0,antialias:!1,powerPreference:"low-power",premultipliedAlpha:!0}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(Math.min(this.view.devicePixelRatio||1,this.options.maxDpr,u8)),this.scene=new T6,this.camera=new z8(-1,1,1,-1,0.1,10),this.camera.position.z=1,this.filmGeometry=new s9(2,2),this.filmMaterial=new IJ({vertexShader:eU,fragmentShader:JG,uniforms:{uTime:{value:0},uResolution:{value:new v0(1,1)},uPointer:{value:new v0(0.5,0.5)},uPointerEnergy:{value:0},uScrollImpulse:{value:0},uScrollSettle:{value:0},uScrollDirection:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1});let Z=new vJ(this.filmGeometry,this.filmMaterial);Z.frustumCulled=!1,Z.renderOrder=0,this.scene.add(Z),this.canvas=J,this.ensurePositionedHost(),this.host.append(J),this.rendererCleanups.push(Z9(J,"webglcontextlost",this.onContextLost)),this.installInteractionListeners(),this.markActive(),this.onResize(),this.syncAnimationLoop()}catch{this.permanentFallback="renderer-error",this.activateStaticFallback(this.permanentFallback)}}ensurePositionedHost(){if(!this.view?.getComputedStyle)return;if(this.view.getComputedStyle(this.host).position==="static")this.host.style.position="relative",this.positionAdjusted=!0}installInteractionListeners(){if(!this.view||!this.canvas)return;let J=this.view.scrollY||this.view.pageYOffset||0,Q=null,$=()=>{if(Q!==null&&this.view?.clearTimeout)this.view.clearTimeout(Q);Q=null},Z=(X)=>{if(this.canvas&&this.canvas.dataset.filmInteraction!==X)this.canvas.dataset.filmInteraction=X},W=(X)=>{if(X.pointerType==="touch")return;let U=Math.max(1,this.view.innerWidth||1),N=Math.max(1,this.view.innerHeight||1),q=k9(X.clientX/U,0,1),G=k9(1-X.clientY/N,0,1),F=Math.hypot(q-this.pointerTarget.x,G-this.pointerTarget.y);this.pointerTarget.set(q,G),this.pointerEnergy=Math.min(1,Math.max(this.pointerEnergy,0.16+F*8)),Z("pointer")},K=()=>{this.pointerTarget.set(0.5,0.5),this.pointerEnergy=Math.max(this.pointerEnergy,0.28)},H=()=>{if(!this.scrollActive)return;$(),Q=null,this.scrollActive=!1,this.scrollImpulse=Math.max(this.scrollImpulse,0.34),this.scrollSettle=1,Z("scroll-settle")},Y=()=>{let X=this.view.scrollY||this.view.pageYOffset||0,U=X-J;if(J=X,U===0)return;if(this.scrollDirection=Math.sign(U),!this.scrollActive)this.scrollImpulse=1,Z("scroll-start");else this.scrollImpulse=Math.max(this.scrollImpulse,k9(Math.abs(U)/120,0.36,1)),Z("scrolling");if(this.scrollActive=!0,$(),this.view.setTimeout)Q=this.view.setTimeout(()=>{Q=null,H()},120)};this.rendererCleanups.push(Z9(this.view,"pointermove",W,{passive:!0}),Z9(this.view,"pointerleave",K,{passive:!0}),Z9(this.view,"scroll",Y,{passive:!0}),Z9(this.view,"scrollend",H,{passive:!0}),()=>{$(),this.pointerTarget.set(0.5,0.5),this.pointerCurrent.set(0.5,0.5),this.pointerEnergy=0,this.scrollImpulse=0,this.scrollSettle=0,this.scrollDirection=1,this.scrollActive=!1})}markActive(){this.host.classList.add(n6),this.host.classList.remove(c6),this.host.setAttribute("data-film-layer-state","active"),this.host.removeAttribute("data-film-layer-fallback")}activateStaticFallback(J){this.stopAnimationLoop(),this.releaseRenderer(),this.host.classList.remove(n6),this.host.classList.add(c6),this.host.setAttribute("data-film-layer-state","static"),this.host.setAttribute("data-film-layer-fallback",J)}onVisibilityChange(){if(this.pageVisible=this.document.visibilityState!=="hidden",!this.pageVisible){if(this.pointerTarget.set(0.5,0.5),this.pointerCurrent.set(0.5,0.5),this.pointerEnergy=0,this.scrollImpulse=0,this.scrollSettle=0,this.scrollDirection=1,this.scrollActive=!1,this.canvas)this.canvas.dataset.filmInteraction="idle"}this.syncAnimationLoop()}onPreferenceChange(){this.evaluateEnvironment()}onContextLost(J){J.preventDefault?.(),this.permanentFallback="webgl-context-lost",this.activateStaticFallback(this.permanentFallback)}onResize(){if(this.destroyed||!this.renderer||!this.canvas)return;try{let J=this.host.getBoundingClientRect(),Q=Math.max(0,Math.round(J.width||this.host.clientWidth)),$=Math.max(0,Math.round(J.height||this.host.clientHeight));if(this.drawable=Q>1&&$>1,!this.drawable){this.syncAnimationLoop();return}let Z=Math.min(this.view?.devicePixelRatio||1,this.options.maxDpr,u8);if(this.renderer.setPixelRatio(Z),this.renderer.setSize(Q,$,!1),this.filmMaterial?.uniforms.uResolution.value.set(Math.max(1,Math.round(Q*Z)),Math.max(1,Math.round($*Z))),this.dustMaterial?.uniforms.uPixelRatio)this.dustMaterial.uniforms.uPixelRatio.value=Z;let W=ZG({width:Q,height:$,viewportWidth:this.view?.innerWidth||Q,viewportHeight:this.view?.innerHeight||$,pixelsPerParticle:this.options.pixelsPerParticle,minParticles:this.options.minParticles,maxParticles:this.options.maxParticles});if(W!==this.particleCount)this.rebuildDust(W);this.syncAnimationLoop()}catch{this.permanentFallback="renderer-error",this.activateStaticFallback(this.permanentFallback)}}rebuildDust(J){if(!this.scene)return;if(this.dust)this.scene.remove(this.dust);this.dustGeometry?.dispose(),this.dustMaterial?.dispose();let Q=new Float32Array(J*3),$=new Float32Array(J),Z=new Float32Array(J),W=new Float32Array(J),K=new Float32Array(J),H=new Float32Array(J),Y=new Float32Array(J);for(let X=0;X<J;X+=1){let U=X*3;Q[U]=W9(X,1.17)*2-1,Q[U+1]=W9(X,2.31)*2-1,Q[U+2]=0.1;let N=W9(X,10.33)>0.88?2:1;$[X]=(2+W9(X,3.91)*4)*N,Z[X]=0.18+W9(X,4.73)*0.34;let q=W9(X,5.87)<0.14?-1:1;W[X]=q*(0.018+W9(X,6.43)*0.037),K[X]=0.01+W9(X,8.19)*0.025,H[X]=W9(X,9.71)*Math.PI*2,Y[X]=W9(X,11.57)<0.46?0.14:0.94}this.dustGeometry=new yJ,this.dustGeometry.setAttribute("position",new NJ(Q,3)),this.dustGeometry.setAttribute("aSize",new NJ($,1)),this.dustGeometry.setAttribute("aOpacity",new NJ(Z,1)),this.dustGeometry.setAttribute("aSpeed",new NJ(W,1)),this.dustGeometry.setAttribute("aDrift",new NJ(K,1)),this.dustGeometry.setAttribute("aPhase",new NJ(H,1)),this.dustGeometry.setAttribute("aTone",new NJ(Y,1)),this.dustMaterial=new IJ({vertexShader:QG,fragmentShader:$G,uniforms:{uTime:{value:this.elapsedTime},uPixelRatio:{value:Math.min(this.view?.devicePixelRatio||1,this.options.maxDpr,u8)},uPointer:{value:new v0(0.5,0.5)},uPointerEnergy:{value:0},uScrollImpulse:{value:0},uScrollSettle:{value:0},uScrollDirection:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.dust=new b6(this.dustGeometry,this.dustMaterial),this.dust.frustumCulled=!1,this.dust.renderOrder=1,this.scene.add(this.dust),this.particleCount=J}shouldAnimate(){return Boolean(!this.destroyed&&this.renderer&&this.drawable&&this.pageVisible&&this.intersecting&&typeof this.view?.requestAnimationFrame==="function"&&!this.currentPreferenceFallback()&&!this.permanentFallback)}syncAnimationLoop(){if(this.shouldAnimate()){if(this.frameRequest===null)this.lastFrameTime=null,this.frameRequest=this.view.requestAnimationFrame(this.onFrame);return}this.stopAnimationLoop()}stopAnimationLoop(){if(this.frameRequest!==null&&this.view?.cancelAnimationFrame)this.view.cancelAnimationFrame(this.frameRequest);this.frameRequest=null,this.lastFrameTime=null,this.frameAccumulator=0}onFrame(J){if(this.frameRequest=null,!this.shouldAnimate())return;let Q=0;if(this.lastFrameTime===null)this.lastFrameTime=J;else{let K=Math.max(0,J-this.lastFrameTime),H=1000/this.options.maxFps;if(this.lastFrameTime=J,this.frameAccumulator+=K,!WG(this.frameAccumulator,this.options.maxFps)){this.frameRequest=this.view.requestAnimationFrame(this.onFrame);return}let X=Math.floor((this.frameAccumulator+zW)/H)*H;this.frameAccumulator=Math.max(0,this.frameAccumulator-X),Q=Math.min(0.08,X/1000)}this.elapsedTime+=Q;let $=this.filmMaterial.uniforms;$.uTime.value=this.elapsedTime;let Z=1-Math.exp(-Q*14);if(this.pointerCurrent.lerp(this.pointerTarget,Z),$.uPointer?.value.copy(this.pointerCurrent),$.uPointerEnergy)$.uPointerEnergy.value=this.pointerEnergy;if($.uScrollImpulse)$.uScrollImpulse.value=this.scrollImpulse;if($.uScrollSettle)$.uScrollSettle.value=this.scrollSettle;if($.uScrollDirection)$.uScrollDirection.value=this.scrollDirection;let W=this.dustMaterial?.uniforms;if(W?.uTime){if(W.uTime.value=this.elapsedTime,W.uPointer?.value.copy(this.pointerCurrent),W.uPointerEnergy)W.uPointerEnergy.value=this.pointerEnergy;if(W.uScrollImpulse)W.uScrollImpulse.value=this.scrollImpulse;if(W.uScrollSettle)W.uScrollSettle.value=this.scrollSettle;if(W.uScrollDirection)W.uScrollDirection.value=this.scrollDirection}try{this.renderer.render(this.scene,this.camera)}catch{this.permanentFallback="renderer-error",this.activateStaticFallback(this.permanentFallback);return}if(this.pointerEnergy*=Math.exp(-Q*3.2),this.scrollImpulse*=Math.exp(-Q*8.5),this.scrollSettle*=Math.exp(-Q*4.8),!this.scrollActive&&this.pointerEnergy<0.015&&this.scrollImpulse<0.015&&this.scrollSettle<0.015&&this.canvas)this.canvas.dataset.filmInteraction="idle";this.frameRequest=this.view.requestAnimationFrame(this.onFrame)}releaseRenderer(){if(this.stopAnimationLoop(),this.rendererCleanups.splice(0).forEach((J)=>R9(J)),this.dust&&this.scene)R9(()=>this.scene.remove(this.dust));if(R9(()=>this.dustGeometry?.dispose()),R9(()=>this.dustMaterial?.dispose()),R9(()=>this.filmGeometry?.dispose()),R9(()=>this.filmMaterial?.dispose()),R9(()=>this.renderer?.dispose()),R9(()=>this.canvas?.remove()),this.renderer=null,this.scene=null,this.camera=null,this.canvas=null,this.filmGeometry=null,this.filmMaterial=null,this.dustGeometry=null,this.dustMaterial=null,this.dust=null,this.particleCount=0,this.drawable=!1,this.positionAdjusted)this.host.style.position=this.initialState.inlinePosition,this.positionAdjusted=!1}destroy(){if(this.destroyed)return;this.destroyed=!0,this.stopAnimationLoop(),this.cleanups.splice(0).forEach((J)=>R9(J)),this.releaseRenderer(),this.host.classList.toggle(n6,this.initialState.activeClass),this.host.classList.toggle(c6,this.initialState.staticClass),VW(this.host,"data-film-layer-state",this.initialState.layerState),VW(this.host,"data-film-layer-fallback",this.initialState.fallback),$$.delete(this.host)}}function YG(J,Q={}){let $=$$.get(J);if($&&!$.destroyed)return $;let Z=new wW(J,Q);return $$.set(J,Z),Z}function XG(J={},Q=globalThis.document){if(!Q?.querySelectorAll)return[];let $=J.selector||tU,Z=[];if(Q.nodeType===1&&Q.matches?.($))Z.push(Q);return Z.push(...Q.querySelectorAll($)),[...new Set(Z)].map((W)=>YG(W,J))}function IW(J={},Q=globalThis.document){let $=[],Z=!1,W=()=>{if(!Z)$=XG(J,Q)};if(!Q)return{get layers(){return $},destroy(){}};if(Q.readyState==="loading")Q.addEventListener("DOMContentLoaded",W,{once:!0});else{let K=Q.defaultView?.queueMicrotask;if(K)K.call(Q.defaultView,W);else Promise.resolve().then(W)}return{get layers(){return $},destroy(){Z=!0,Q.removeEventListener("DOMContentLoaded",W),$.splice(0).forEach((K)=>K.destroy())}}}IW({maxDpr:1,minParticles:48,maxParticles:160,maxFps:24,pixelsPerParticle:9000});})();
