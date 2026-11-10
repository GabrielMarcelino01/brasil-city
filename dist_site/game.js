(()=>{var bi=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var df=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Xi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function jt(n,e,t){return Math.max(e,Math.min(t,n))}function Sc(n,e){return(n%e+e)%e}function Yf(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function jf(n,e,t){return n!==e?(t-n)/(e-n):0}function dr(n,e,t){return(1-t)*n+t*e}function Kf(n,e,t,i){return dr(n,e,1-Math.exp(-t*i))}function Qf(n,e=1){return e-Math.abs(Sc(n,e*2)-e)}function ep(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function tp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ip(n,e){return n+Math.floor(Math.random()*(e-n+1))}function np(n,e){return n+Math.random()*(e-n)}function ap(n){return n*(.5-Math.random())}function rp(n){n!==void 0&&(Rd=n);let e=Rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function op(n){return n*cr}function sp(n){return n*pr}function lp(n){return(n&n-1)===0&&n!==0}function cp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function dp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function up(n,e,t,i,a){let r=Math.cos,o=Math.sin,s=r(t/2),l=o(t/2),d=r((e+i)/2),c=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(a){case"XYX":n.set(s*c,l*u,l*f,s*d);break;case"YZY":n.set(l*f,s*c,l*u,s*d);break;case"ZXZ":n.set(l*u,l*f,s*c,s*d);break;case"XZX":n.set(s*c,l*g,l*p,s*d);break;case"YXY":n.set(l*p,s*c,l*g,s*d);break;case"ZYZ":n.set(l*g,l*p,s*c,s*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function ku(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function go(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hp(){let n=go("canvas");return n.style.display="block",n}function sr(n){n in Id||(Id[n]=!0,console.warn(n))}function fp(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function pp(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mp(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}function Ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ta(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Ts(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ol.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Es(n,e,t,i,a){for(let r=0,o=n.length-3;r<=o;r+=3){Ln.fromArray(n,r);let s=a.x*Math.abs(Ln.x)+a.y*Math.abs(Ln.y)+a.z*Math.abs(Ln.z),l=e.dot(Ln),d=t.dot(Ln),c=i.dot(Ln);if(Math.max(-Math.max(l,d,c),Math.min(l,d,c))>s)return!1}return!0}function zs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Ep(n,e,t,i,a,r,o,s){let l;if(e.side===$t?l=i.intersectTriangle(o,r,a,!0,s):l=i.intersectTriangle(a,r,o,e.side===xn,s),l===null)return null;Kr.copy(s),Kr.applyMatrix4(n.matrixWorld);let d=t.ray.origin.distanceTo(Kr);return d<t.near||d>t.far?null:{distance:d,point:Kr.clone(),object:n}}function Qr(n,e,t,i,a,r,o,s,l,d){n.getVertexPosition(s,Jr),n.getVertexPosition(l,Zr),n.getVertexPosition(d,Yr);let c=Ep(n,e,t,i,Jr,Zr,Yr,Jd);if(c){let u=new O;mn.getBarycoord(Jd,Jr,Zr,Yr,u),a&&(c.uv=mn.getInterpolatedAttribute(a,s,l,d,u,new ke)),r&&(c.uv1=mn.getInterpolatedAttribute(r,s,l,d,u,new ke)),o&&(c.normal=mn.getInterpolatedAttribute(o,s,l,d,u,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let f={a:s,b:l,c:d,normal:new O,materialIndex:0};mn.getNormal(Jr,Zr,Yr,f.normal),c.face=f,c.barycoord=u}return c}function La(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Yt(n){let e={};for(let t=0;t<n.length;t++){let i=La(n[t]);for(let a in i)e[a]=i[a]}return e}function wp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}function Hu(){let n=null,e=!1,t=null,i=null;function a(r,o){t(r,o),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Np(n){let e=new WeakMap;function t(s,l){let d=s.array,c=s.usage,u=d.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,d,c),s.onUploadCallback();let p;if(d instanceof Float32Array)p=n.FLOAT;else if(d instanceof Uint16Array)s.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)p=n.SHORT;else if(d instanceof Uint32Array)p=n.UNSIGNED_INT;else if(d instanceof Int32Array)p=n.INT;else if(d instanceof Int8Array)p=n.BYTE;else if(d instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:p,bytesPerElement:d.BYTES_PER_ELEMENT,version:s.version,size:u}}function i(s,l,d){let c=l.array,u=l.updateRanges;if(n.bindBuffer(d,s),u.length===0)n.bufferSubData(d,0,c);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],M=u[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,u[f]=M)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let M=u[p];n.bufferSubData(d,M.start*c.BYTES_PER_ELEMENT,c,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);let l=e.get(s);l&&(n.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){let c=e.get(s);(!c||c.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}let d=e.get(s);if(d===void 0)e.set(s,t(s,l));else if(d.version<s.version){if(d.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,s,l),d.version=s.version}}return{get:a,remove:r,update:o}}function mg(n,e,t,i,a,r,o){let s=new Re(0),l=r===!0?0:1,d,c,u=null,f=0,p=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function M(y){let S=!1,x=g(y);x===null?h(s,l):x&&x.isColor&&(h(x,1),S=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,S){let x=g(S);x&&(x.isCubeTexture||x.mapping===zo)?(c===void 0&&(c=new Rt(new mi(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:La(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),Bn.copy(S.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(Bn)),c.material.toneMapped=Xe.getTransfer(x.colorSpace)!==nt,(u!==x||f!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(d===void 0&&(d=new Rt(new Da(2,2),new gi({name:"BackgroundMaterial",uniforms:La(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=x,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.toneMapped=Xe.getTransfer(x.colorSpace)!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),d.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=x,f=x.version,p=n.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null))}function h(y,S){y.getRGB(to,Vu(n)),i.buffers.color.setClear(to.r,to.g,to.b,S,o)}return{getClearColor:function(){return s},setClearColor:function(y,S=1){s.set(y),l=S,h(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(s,l)},render:M,addToRenderList:m}}function gg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=f(null),r=a,o=!1;function s(b,P,k,F,W){let Q=!1,V=u(F,k,P);r!==V&&(r=V,d(r.object)),Q=p(b,F,k,W),Q&&g(b,F,k,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(b,P,k,F),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function d(b){return n.bindVertexArray(b)}function c(b){return n.deleteVertexArray(b)}function u(b,P,k){let F=k.wireframe===!0,W=i[b.id];W===void 0&&(W={},i[b.id]=W);let Q=W[P.id];Q===void 0&&(Q={},W[P.id]=Q);let V=Q[F];return V===void 0&&(V=f(l()),Q[F]=V),V}function f(b){let P=[],k=[],F=[];for(let W=0;W<t;W++)P[W]=0,k[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:F,object:b,attributes:{},index:null}}function p(b,P,k,F){let W=r.attributes,Q=P.attributes,V=0,Z=k.getAttributes();for(let $ in Z)if(Z[$].location>=0){let he=W[$],ye=Q[$];if(ye===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor)),he===void 0||he.attribute!==ye||ye&&he.data!==ye.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(b,P,k,F){let W={},Q=P.attributes,V=0,Z=k.getAttributes();for(let $ in Z)if(Z[$].location>=0){let he=Q[$];he===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(he=b.instanceColor));let ye={};ye.attribute=he,he&&he.data&&(ye.data=he.data),W[$]=ye,V++}r.attributes=W,r.attributesNum=V,r.index=F}function M(){let b=r.newAttributes;for(let P=0,k=b.length;P<k;P++)b[P]=0}function m(b){h(b,0)}function h(b,P){let k=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;k[b]=1,F[b]===0&&(n.enableVertexAttribArray(b),F[b]=1),W[b]!==P&&(n.vertexAttribDivisor(b,P),W[b]=P)}function y(){let b=r.newAttributes,P=r.enabledAttributes;for(let k=0,F=P.length;k<F;k++)P[k]!==b[k]&&(n.disableVertexAttribArray(k),P[k]=0)}function S(b,P,k,F,W,Q,V){V===!0?n.vertexAttribIPointer(b,P,k,W,Q):n.vertexAttribPointer(b,P,k,F,W,Q)}function x(b,P,k,F){M();let W=F.attributes,Q=k.getAttributes(),V=P.defaultAttributeValues;for(let Z in Q){let $=Q[Z];if($.location>=0){let re=W[Z];if(re===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){let he=re.normalized,ye=re.itemSize,ve=e.get(re);if(ve===void 0)continue;let Ce=ve.buffer,X=ve.type,ie=ve.bytesPerElement,xe=X===n.INT||X===n.UNSIGNED_INT||re.gpuType===gc;if(re.isInterleavedBufferAttribute){let se=re.data,Pe=se.stride,De=re.offset;if(se.isInstancedInterleavedBuffer){for(let ze=0;ze<$.locationSize;ze++)h($.location+ze,se.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ze=0;ze<$.locationSize;ze++)m($.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let ze=0;ze<$.locationSize;ze++)S($.location+ze,ye/$.locationSize,X,he,Pe*ie,(De+ye/$.locationSize*ze)*ie,xe)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<$.locationSize;se++)h($.location+se,re.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<$.locationSize;se++)m($.location+se);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let se=0;se<$.locationSize;se++)S($.location+se,ye/$.locationSize,X,he,ye*ie,ye/$.locationSize*se*ie,xe)}}else if(V!==void 0){let he=V[Z];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv($.location,he);break;case 3:n.vertexAttrib3fv($.location,he);break;case 4:n.vertexAttrib4fv($.location,he);break;default:n.vertexAttrib1fv($.location,he)}}}}y()}function L(){w();for(let b in i){let P=i[b];for(let k in P){let F=P[k];for(let W in F)c(F[W].object),delete F[W];delete P[k]}delete i[b]}}function E(b){if(i[b.id]===void 0)return;let P=i[b.id];for(let k in P){let F=P[k];for(let W in F)c(F[W].object),delete F[W];delete P[k]}delete i[b.id]}function T(b){for(let P in i){let k=i[P];if(k[b.id]===void 0)continue;let F=k[b.id];for(let W in F)c(F[W].object),delete F[W];delete k[b.id]}}function w(){v(),o=!0,r!==a&&(r=a,d(r.object))}function v(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:w,resetDefaultState:v,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function vg(n,e,t){let i;function a(d){i=d}function r(d,c){n.drawArrays(i,d,c),t.update(c,i,1)}function o(d,c,u){u!==0&&(n.drawArraysInstanced(i,d,c,u),t.update(c,i,u))}function s(d,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,c,0,u);let p=0;for(let g=0;g<u;g++)p+=c[g];t.update(p,i,1)}function l(d,c,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)o(d[g],c[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,d,0,c,0,f,0,u);let g=0;for(let M=0;M<u;M++)g+=c[M]*f[M];t.update(g,i,1)}}this.setMode=a,this.render=r,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function xg(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(T){return!(T!==Ai&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(T){let w=T===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Zi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Wi&&!w)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp",c=l(d);c!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",c,"instead."),d=c);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:d,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:L,maxSamples:E}}function bg(n){let e=this,t=null,i=0,a=!1,r=!1,o=new $i,s=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||a;return a=f,i=u.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=c(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,h=n.get(u);if(!a||g===null||g.length===0||r&&!m)r?c(null):d();else{let y=r?0:i,S=y*4,x=h.clippingState||null;l.value=x,x=c(g,f,S,p);for(let L=0;L!==S;++L)x[L]=t[L];h.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(u,f,p,g){let M=u!==null?u.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let h=p+M*4,y=f.matrixWorldInverse;s.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,x=p;S!==M;++S,x+=4)o.copy(u[S]).applyMatrix4(y,s),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function Mg(n){let e=new WeakMap;function t(o,s){return s===sl?o.mapping=wa:s===ll&&(o.mapping=Pa),o}function i(o){if(o&&o.isTexture){let s=o.mapping;if(s===sl||s===ll)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let d=new Gl(l.height);return d.fromEquirectangularTexture(n,o),e.set(o,d),o.addEventListener("dispose",a),t(d.texture,o.mapping)}else return null}}return o}function a(o){let s=o.target;s.removeEventListener("dispose",a);let l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function _g(n){let e=[],t=[],i=[],a=n,r=n-ya+1+jd.length;for(let o=0;o<r;o++){let s=Math.pow(2,a);t.push(s);let l=1/s;o>n-ya?l=jd[o-n+ya-1]:o===0&&(l=0),i.push(l);let d=1/(s-2),c=-d,u=1+d,f=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,M=3,m=2,h=1,y=new Float32Array(M*g*p),S=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let E=0;E<p;E++){let T=E%3*2/3-1,w=E>2?0:-1,v=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];y.set(v,M*g*E),S.set(f,m*g*E);let b=[E,E,E,E,E,E];x.set(b,h*g*E)}let L=new Ti;L.setAttribute("position",new Ut(y,M)),L.setAttribute("uv",new Ut(S,m)),L.setAttribute("faceIndex",new Ut(x,h)),e.push(L),a>ya&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function eu(n,e,t){let i=new Yi(n,e,t);return i.texture.mapping=zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function io(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function yg(n,e,t){let i=new Float32Array(kn),a=new O(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function tu(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function iu(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ac(){return`

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
	`}function Sg(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){let l=s.mapping,d=l===sl||l===ll,c=l===wa||l===Pa;if(d||c){let u=e.get(s),f=u!==void 0?u.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==f)return t===null&&(t=new Co(n)),u=d?t.fromEquirectangular(s,u):t.fromCubemap(s,u),u.texture.pmremVersion=s.pmremVersion,e.set(s,u),u.texture;if(u!==void 0)return u.texture;{let p=s.image;return d&&p&&p.height>0||c&&p&&a(p)?(t===null&&(t=new Co(n)),u=d?t.fromEquirectangular(s):t.fromCubemap(s),u.texture.pmremVersion=s.pmremVersion,e.set(s,u),s.addEventListener("dispose",r),u.texture):null}}}return s}function a(s){let l=0,d=6;for(let c=0;c<d;c++)s[c]!==void 0&&l++;return l===d}function r(s){let l=s.target;l.removeEventListener("dispose",r);let d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ag(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let a=t(i);return a===null&&sr("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Tg(n,e,t,i){let a={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let M=f.morphAttributes[g];for(let m=0,h=M.length;m<h;m++)e.remove(M[m])}f.removeEventListener("dispose",o),delete a[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(u,f){return a[f.id]===!0||(f.addEventListener("dispose",o),a[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let M=p[g];for(let m=0,h=M.length;m<h;m++)e.update(M[m],n.ARRAY_BUFFER)}}function d(u){let f=[],p=u.index,g=u.attributes.position,M=0;if(p!==null){let y=p.array;M=p.version;for(let S=0,x=y.length;S<x;S+=3){let L=y[S+0],E=y[S+1],T=y[S+2];f.push(L,E,E,T,T,L)}}else if(g!==void 0){let y=g.array;M=g.version;for(let S=0,x=y.length/3-1;S<x;S+=3){let L=S+0,E=S+1,T=S+2;f.push(L,E,E,T,T,L)}}else return;let m=new(ku(f)?yo:_o)(f,1);m.version=M;let h=r.get(u);h&&e.remove(h),r.set(u,m)}function c(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&d(u)}else d(u);return r.get(u)}return{get:s,update:l,getWireframeAttribute:c}}function Cg(n,e,t){let i;function a(f){i=f}let r,o;function s(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function d(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function c(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function u(f,p,g,M){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)d(f[h]/o,p[h],M[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,M,0,g);let h=0;for(let y=0;y<g;y++)h+=p[y]*M[y];t.update(h,i,1)}}this.setMode=a,this.setIndex=s,this.render=l,this.renderInstances=d,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Eg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(r/3);break;case n.LINES:t.lines+=s*(r/2);break;case n.LINE_STRIP:t.lines+=s*(r-1);break;case n.LINE_LOOP:t.lines+=s*r;break;case n.POINTS:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function wg(n,e,t){let i=new WeakMap,a=new St;function r(o,s,l){let d=o.morphTargetInfluences,c=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,u=c!==void 0?c.length:0,f=i.get(s);if(f===void 0||f.count!==u){let v=function(){T.dispose(),i.delete(s),s.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();let p=s.morphAttributes.position!==void 0,g=s.morphAttributes.normal!==void 0,M=s.morphAttributes.color!==void 0,m=s.morphAttributes.position||[],h=s.morphAttributes.normal||[],y=s.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),M===!0&&(S=3);let x=s.attributes.position.count*S,L=1;x>e.maxTextureSize&&(L=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*L*4*u),T=new xo(E,x,L,u);T.type=Wi,T.needsUpdate=!0;let w=S*4;for(let b=0;b<u;b++){let P=m[b],k=h[b],F=y[b],W=x*L*4*b;for(let Q=0;Q<P.count;Q++){let V=Q*w;p===!0&&(a.fromBufferAttribute(P,Q),E[W+V+0]=a.x,E[W+V+1]=a.y,E[W+V+2]=a.z,E[W+V+3]=0),g===!0&&(a.fromBufferAttribute(k,Q),E[W+V+4]=a.x,E[W+V+5]=a.y,E[W+V+6]=a.z,E[W+V+7]=0),M===!0&&(a.fromBufferAttribute(F,Q),E[W+V+8]=a.x,E[W+V+9]=a.y,E[W+V+10]=a.z,E[W+V+11]=F.itemSize===4?a.w:1)}}f={count:u,texture:T,size:new ke(x,L)},i.set(s,f),s.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let M=0;M<d.length;M++)p+=d[M];let g=s.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",d)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Pg(n,e,t,i){let a=new WeakMap;function r(l){let d=i.render.frame,c=l.geometry,u=e.get(l,c);if(a.get(u)!==d&&(e.update(u),a.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),a.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,d))),l.isSkinnedMesh){let f=l.skeleton;a.get(f)!==d&&(f.update(),a.set(f,d))}return u}function o(){a=new WeakMap}function s(l){let d=l.target;d.removeEventListener("dispose",s),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:o}}function Fa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let a=e*t,r=au[a];if(r===void 0&&(r=new Float32Array(a),au[a]=r),e!==0){i.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(r,s)}return r}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Go(n,e){let t=ru[e];t===void 0&&(t=new Int32Array(e),ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Rg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ig(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function Lg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function Dg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function Ng(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;lu.set(i),n.uniformMatrix2fv(this.addr,!1,lu),Lt(t,i)}}function Bg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;su.set(i),n.uniformMatrix3fv(this.addr,!1,su),Lt(t,i)}}function Fg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;ou.set(i),n.uniformMatrix4fv(this.addr,!1,ou),Lt(t,i)}}function Ug(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Og(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function kg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function zg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function Vg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function Gg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function $g(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Wg(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(nu.compareFunction=Ou,r=nu):r=Gu,t.setTexture2D(e||r,a)}function qg(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Wu,a)}function Xg(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||qu,a)}function Jg(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||$u,a)}function Zg(n){switch(n){case 5126:return Rg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return Ng;case 35675:return Bg;case 35676:return Fg;case 5124:case 35670:return Ug;case 35667:case 35671:return Og;case 35668:case 35672:return kg;case 35669:case 35673:return zg;case 5125:return Vg;case 36294:return Hg;case 36295:return Gg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return Jg}}function Yg(n,e){n.uniform1fv(this.addr,e)}function jg(n,e){let t=Fa(e,this.size,2);n.uniform2fv(this.addr,t)}function Kg(n,e){let t=Fa(e,this.size,3);n.uniform3fv(this.addr,t)}function Qg(n,e){let t=Fa(e,this.size,4);n.uniform4fv(this.addr,t)}function ev(n,e){let t=Fa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tv(n,e){let t=Fa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iv(n,e){let t=Fa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nv(n,e){n.uniform1iv(this.addr,e)}function av(n,e){n.uniform2iv(this.addr,e)}function rv(n,e){n.uniform3iv(this.addr,e)}function ov(n,e){n.uniform4iv(this.addr,e)}function sv(n,e){n.uniform1uiv(this.addr,e)}function lv(n,e){n.uniform2uiv(this.addr,e)}function cv(n,e){n.uniform3uiv(this.addr,e)}function dv(n,e){n.uniform4uiv(this.addr,e)}function uv(n,e,t){let i=this.cache,a=e.length,r=Go(t,a);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==a;++o)t.setTexture2D(e[o]||Gu,r[o])}function hv(n,e,t){let i=this.cache,a=e.length,r=Go(t,a);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||Wu,r[o])}function fv(n,e,t){let i=this.cache,a=e.length,r=Go(t,a);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==a;++o)t.setTextureCube(e[o]||qu,r[o])}function pv(n,e,t){let i=this.cache,a=e.length,r=Go(t,a);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||$u,r[o])}function mv(n){switch(n){case 5126:return Yg;case 35664:return jg;case 35665:return Kg;case 35666:return Qg;case 35674:return ev;case 35675:return tv;case 35676:return iv;case 5124:case 35670:return nv;case 35667:case 35671:return av;case 35668:case 35672:return rv;case 35669:case 35673:return ov;case 5125:return sv;case 36294:return lv;case 36295:return cv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return pv}}function cu(n,e){n.seq.push(e),n.map[e.id]=e}function gv(n,e,t){let i=n.name,a=i.length;for(Zs.lastIndex=0;;){let r=Zs.exec(i),o=Zs.lastIndex,s=r[1],l=r[2]==="]",d=r[3];if(l&&(s=s|0),d===void 0||d==="["&&o+2===a){cu(t,d===void 0?new $l(s,n,e):new Wl(s,n,e));break}else{let u=t.map[s];u===void 0&&(u=new ql(s),cu(t,u)),t=u}}}function du(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function bv(n,e){let t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=a;o<r;o++){let s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function Mv(n){Xe._getMatrix(uu,Xe.workingColorSpace,n);let e=`mat3( ${uu.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(n)){case Vo:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+bv(n.getShaderSource(e),o)}else return a}function _v(n,e){let t=Mv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yv(n,e){let t;switch(e){case Df:t="Linear";break;case Nf:t="Reinhard";break;case Bf:t="Cineon";break;case mc:t="ACESFilmic";break;case Uf:t="AgX";break;case Of:t="Neutral";break;case Ff:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Sv(){Xe.getLuminanceCoefficients(no);let n=no.x.toFixed(4),e=no.y.toFixed(4),t=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Av(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function Tv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Cv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let r=n.getActiveAttrib(e,a),o=r.name,s=1;r.type===n.FLOAT_MAT2&&(s=2),r.type===n.FLOAT_MAT3&&(s=3),r.type===n.FLOAT_MAT4&&(s=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function lr(n){return n!==""}function fu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Xl(n){return n.replace(Ev,Pv)}function Pv(n,e){let t=Oe[e];if(t===void 0){let i=wv.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xl(t)}function mu(n){return n.replace(Rv,Iv)}function Iv(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function gu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Dv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wa:case Pa:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nv(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Pa&&(e="ENVMAP_MODE_REFRACTION"),e}function Bv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pc:e="ENVMAP_BLENDING_MULTIPLY";break;case If:e="ENVMAP_BLENDING_MIX";break;case Lf:e="ENVMAP_BLENDING_ADD";break}return e}function Fv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Uv(n,e,t,i){let a=n.getContext(),r=t.defines,o=t.vertexShader,s=t.fragmentShader,l=Lv(t),d=Dv(t),c=Nv(t),u=Bv(t),f=Fv(t),p=Av(t),g=Tv(r),M=a.createProgram(),m,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),h.length>0&&(h+=`
`)):(m=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),h=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==vn?yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,_v("linearToOutputTexel",t.outputColorSpace),Sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),o=Xl(o),o=fu(o,t),o=pu(o,t),s=Xl(s),s=fu(s,t),s=pu(s,t),o=mu(o),s=mu(s),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=y+m+o,x=y+h+s,L=du(a,a.VERTEX_SHADER,S),E=du(a,a.FRAGMENT_SHADER,x);a.attachShader(M,L),a.attachShader(M,E),t.index0AttributeName!==void 0?a.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function T(P){if(n.debug.checkShaderErrors){let k=a.getProgramInfoLog(M).trim(),F=a.getShaderInfoLog(L).trim(),W=a.getShaderInfoLog(E).trim(),Q=!0,V=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,M,L,E);else{let Z=hu(a,L,"vertex"),$=hu(a,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+Z+`
`+$)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||W==="")&&(V=!1);V&&(P.diagnostics={runnable:Q,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:h}})}a.deleteShader(L),a.deleteShader(E),w=new Ca(a,M),v=Cv(a,M)}let w;this.getUniforms=function(){return w===void 0&&T(this),w};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(M,vv)),b},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xv++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=E,this}function kv(n,e,t,i,a,r,o){let s=new bo,l=new Jl,d=new Set,c=[],u=a.logarithmicDepthBuffer,f=a.vertexTextures,p=a.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return d.add(v),v===0?"uv":`uv${v}`}function m(v,b,P,k,F){let W=k.fog,Q=F.geometry,V=v.isMeshStandardMaterial?k.environment:null,Z=(v.isMeshStandardMaterial?t:e).get(v.envMap||V),$=Z&&Z.mapping===zo?Z.image.height:null,re=g[v.type];v.precision!==null&&(p=a.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let he=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ye=he!==void 0?he.length:0,ve=0;Q.morphAttributes.position!==void 0&&(ve=1),Q.morphAttributes.normal!==void 0&&(ve=2),Q.morphAttributes.color!==void 0&&(ve=3);let Ce,X,ie,xe;if(re){let et=Ri[re];Ce=et.vertexShader,X=et.fragmentShader}else Ce=v.vertexShader,X=v.fragmentShader,l.update(v),ie=l.getVertexShaderID(v),xe=l.getFragmentShaderID(v);let se=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,ze=F.isBatchedMesh===!0,xt=!!v.map,We=!!v.matcap,Tt=!!Z,U=!!v.aoMap,hi=!!v.lightMap,He=!!v.bumpMap,Ge=!!v.normalMap,Ee=!!v.displacementMap,ft=!!v.emissiveMap,Te=!!v.metalnessMap,R=!!v.roughnessMap,_=v.anisotropy>0,z=v.clearcoat>0,Y=v.dispersion>0,ee=v.iridescence>0,J=v.sheen>0,Se=v.transmission>0,le=_&&!!v.anisotropyMap,fe=z&&!!v.clearcoatMap,qe=z&&!!v.clearcoatNormalMap,te=z&&!!v.clearcoatRoughnessMap,pe=ee&&!!v.iridescenceMap,we=ee&&!!v.iridescenceThicknessMap,Ie=J&&!!v.sheenColorMap,me=J&&!!v.sheenRoughnessMap,$e=!!v.specularMap,Ue=!!v.specularColorMap,lt=!!v.specularIntensityMap,D=Se&&!!v.transmissionMap,oe=Se&&!!v.thicknessMap,q=!!v.gradientMap,j=!!v.alphaMap,ue=v.alphaTest>0,ce=!!v.alphaHash,Ne=!!v.extensions,yt=vn;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(yt=n.toneMapping);let Vt={shaderID:re,shaderType:v.type,shaderName:v.name,vertexShader:Ce,fragmentShader:X,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:xe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:ze,batchingColor:ze&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ba,alphaToCoverage:!!v.alphaToCoverage,map:xt,matcap:We,envMap:Tt,envMapMode:Tt&&Z.mapping,envMapCubeUVHeight:$,aoMap:U,lightMap:hi,bumpMap:He,normalMap:Ge,displacementMap:f&&Ee,emissiveMap:ft,normalMapObjectSpace:Ge&&v.normalMapType===Hf,normalMapTangentSpace:Ge&&v.normalMapType===yc,metalnessMap:Te,roughnessMap:R,anisotropy:_,anisotropyMap:le,clearcoat:z,clearcoatMap:fe,clearcoatNormalMap:qe,clearcoatRoughnessMap:te,dispersion:Y,iridescence:ee,iridescenceMap:pe,iridescenceThicknessMap:we,sheen:J,sheenColorMap:Ie,sheenRoughnessMap:me,specularMap:$e,specularColorMap:Ue,specularIntensityMap:lt,transmission:Se,transmissionMap:D,thicknessMap:oe,gradientMap:q,opaque:v.transparent===!1&&v.blending===Sa&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:ue,alphaHash:ce,combine:v.combine,mapUv:xt&&M(v.map.channel),aoMapUv:U&&M(v.aoMap.channel),lightMapUv:hi&&M(v.lightMap.channel),bumpMapUv:He&&M(v.bumpMap.channel),normalMapUv:Ge&&M(v.normalMap.channel),displacementMapUv:Ee&&M(v.displacementMap.channel),emissiveMapUv:ft&&M(v.emissiveMap.channel),metalnessMapUv:Te&&M(v.metalnessMap.channel),roughnessMapUv:R&&M(v.roughnessMap.channel),anisotropyMapUv:le&&M(v.anisotropyMap.channel),clearcoatMapUv:fe&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:qe&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:we&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&M(v.sheenRoughnessMap.channel),specularMapUv:$e&&M(v.specularMap.channel),specularColorMapUv:Ue&&M(v.specularColorMap.channel),specularIntensityMapUv:lt&&M(v.specularIntensityMap.channel),transmissionMapUv:D&&M(v.transmissionMap.channel),thicknessMapUv:oe&&M(v.thicknessMap.channel),alphaMapUv:j&&M(v.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ge||_),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Q.attributes.uv&&(xt||j),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pe,skinning:F.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,decodeVideoTexture:xt&&v.map.isVideoTexture===!0&&Xe.getTransfer(v.map.colorSpace)===nt,decodeVideoTextureEmissive:ft&&v.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(v.emissiveMap.colorSpace)===nt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===si,flipSided:v.side===$t,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ne&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&v.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Vt.vertexUv1s=d.has(1),Vt.vertexUv2s=d.has(2),Vt.vertexUv3s=d.has(3),d.clear(),Vt}function h(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)b.push(P),b.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(y(b,v),S(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function S(v,b){s.disableAll(),b.supportsVertexTextures&&s.enable(0),b.instancing&&s.enable(1),b.instancingColor&&s.enable(2),b.instancingMorph&&s.enable(3),b.matcap&&s.enable(4),b.envMap&&s.enable(5),b.normalMapObjectSpace&&s.enable(6),b.normalMapTangentSpace&&s.enable(7),b.clearcoat&&s.enable(8),b.iridescence&&s.enable(9),b.alphaTest&&s.enable(10),b.vertexColors&&s.enable(11),b.vertexAlphas&&s.enable(12),b.vertexUv1s&&s.enable(13),b.vertexUv2s&&s.enable(14),b.vertexUv3s&&s.enable(15),b.vertexTangents&&s.enable(16),b.anisotropy&&s.enable(17),b.alphaHash&&s.enable(18),b.batching&&s.enable(19),b.dispersion&&s.enable(20),b.batchingColor&&s.enable(21),v.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reverseDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),v.push(s.mask)}function x(v){let b=g[v.type],P;if(b){let k=Ri[b];P=Pp.clone(k.uniforms)}else P=v.uniforms;return P}function L(v,b){let P;for(let k=0,F=c.length;k<F;k++){let W=c[k];if(W.cacheKey===b){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Uv(n,b,v,r),c.push(P)),P}function E(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:L,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:w}}function zv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let s=n.get(o);return s===void 0&&(s={},n.set(o,s)),s}function i(o){n.delete(o)}function a(o,s,l){n.get(o)[s]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function Vv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xu(){let n=[],e=0,t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function o(u,f,p,g,M,m){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:M,group:m},n[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=M,h.group=m),e++,h}function s(u,f,p,g,M,m){let h=o(u,f,p,g,M,m);p.transmission>0?i.push(h):p.transparent===!0?a.push(h):t.push(h)}function l(u,f,p,g,M,m){let h=o(u,f,p,g,M,m);p.transmission>0?i.unshift(h):p.transparent===!0?a.unshift(h):t.unshift(h)}function d(u,f){t.length>1&&t.sort(u||Vv),i.length>1&&i.sort(f||vu),a.length>1&&a.sort(f||vu)}function c(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:s,unshift:l,finish:c,sort:d}}function Hv(){let n=new WeakMap;function e(i,a){let r=n.get(i),o;return r===void 0?(o=new xu,n.set(i,[o])):a>=r.length?(o=new xu,r.push(o)):o=r[a],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Gv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Re};break;case"SpotLight":t={position:new O,direction:new O,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function $v(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function qv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Xv(n){let e=new Gv,t=$v(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new O);let a=new O,r=new gt,o=new gt;function s(d){let c=0,u=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,g=0,M=0,m=0,h=0,y=0,S=0,x=0,L=0,E=0,T=0;d.sort(qv);for(let v=0,b=d.length;v<b;v++){let P=d[v],k=P.color,F=P.intensity,W=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=k.r*F,u+=k.g*F,f+=k.b*F;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],F);T++}else if(P.isDirectionalLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,$=t.get(P);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=P.shadow.matrix,y++}i.directional[p]=V,p++}else if(P.isSpotLight){let V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(k).multiplyScalar(F),V.distance=W,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[M]=V;let Z=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,Z.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[M]=Z.matrix,P.castShadow){let $=t.get(P);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.spotShadow[M]=$,i.spotShadowMap[M]=Q,x++}M++}else if(P.isRectAreaLight){let V=e.get(P);V.color.copy(k).multiplyScalar(F),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=V,m++}else if(P.isPointLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){let Z=P.shadow,$=t.get(P);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=V,g++}else if(P.isHemisphereLight){let V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(F),V.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[h]=V,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=f;let w=i.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==M||w.rectAreaLength!==m||w.hemiLength!==h||w.numDirectionalShadows!==y||w.numPointShadows!==S||w.numSpotShadows!==x||w.numSpotMaps!==L||w.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+L-E,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,w.directionalLength=p,w.pointLength=g,w.spotLength=M,w.rectAreaLength=m,w.hemiLength=h,w.numDirectionalShadows=y,w.numPointShadows=S,w.numSpotShadows=x,w.numSpotMaps=L,w.numLightProbes=T,i.version=Wv++)}function l(d,c){let u=0,f=0,p=0,g=0,M=0,m=c.matrixWorldInverse;for(let h=0,y=d.length;h<y;h++){let S=d[h];if(S.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),u++}else if(S.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let x=i.hemi[M];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),M++}}}return{setup:s,setupView:l,state:i}}function bu(n){let e=new Xv(n),t=[],i=[];function a(c){d.camera=c,t.length=0,i.length=0}function r(c){t.push(c)}function o(c){i.push(c)}function s(){e.setup(t)}function l(c){e.setupView(t,c)}let d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:s,setupLightsView:l,pushLight:r,pushShadow:o}}function Jv(n){let e=new WeakMap;function t(a,r=0){let o=e.get(a),s;return o===void 0?(s=new bu(n),e.set(a,[s])):r>=o.length?(s=new bu(n),o.push(s)):s=o[r],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function jv(n,e,t){let i=new gr,a=new ke,r=new ke,o=new St,s=new Yl({depthPacking:Vf}),l=new jl,d={},c=t.maxTextureSize,u={[xn]:$t,[$t]:xn,[si]:si},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Zv,fragmentShader:Yv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ti;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Rt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu;let h=this.type;this.render=function(E,T,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let v=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(gn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let F=h!==Gi&&this.type===Gi,W=h===Gi&&this.type!==Gi;for(let Q=0,V=E.length;Q<V;Q++){let Z=E[Q],$=Z.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);let re=$.getFrameExtents();if(a.multiply(re),r.copy($.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(r.x=Math.floor(c/re.x),a.x=r.x*re.x,$.mapSize.x=r.x),a.y>c&&(r.y=Math.floor(c/re.y),a.y=r.y*re.y,$.mapSize.y=r.y)),$.map===null||F===!0||W===!0){let ye=this.type!==Gi?{minFilter:ei,magFilter:ei}:{};$.map!==null&&$.map.dispose(),$.map=new Yi(a.x,a.y,ye),$.map.texture.name=Z.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let he=$.getViewportCount();for(let ye=0;ye<he;ye++){let ve=$.getViewport(ye);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),k.viewport(o),$.updateMatrices(Z,ye),i=$.getFrustum(),x(T,w,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===Gi&&y($,w),$.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(v,b,P)};function y(E,T){let w=e.update(M);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yi(a.x,a.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,w,f,M,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,w,p,M,null)}function S(E,T,w,v){let b=null,P=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=w.isPointLight===!0?l:s,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let k=b.uuid,F=T.uuid,W=d[k];W===void 0&&(W={},d[k]=W);let Q=W[F];Q===void 0&&(Q=b.clone(),W[F]=Q,T.addEventListener("dispose",L)),b=Q}if(b.visible=T.visible,b.wireframe=T.wireframe,v===Gi?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,w.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let k=n.properties.get(b);k.light=w}return b}function x(E,T,w,v,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Gi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let F=e.update(E),W=E.material;if(Array.isArray(W)){let Q=F.groups;for(let V=0,Z=Q.length;V<Z;V++){let $=Q[V],re=W[$.materialIndex];if(re&&re.visible){let he=S(E,re,v,b);E.onBeforeShadow(n,E,T,w,F,he,$),n.renderBufferDirect(w,null,F,he,E,$),E.onAfterShadow(n,E,T,w,F,he,$)}}}else if(W.visible){let Q=S(E,W,v,b);E.onBeforeShadow(n,E,T,w,F,Q,null),n.renderBufferDirect(w,null,F,Q,E,null),E.onAfterShadow(n,E,T,w,F,Q,null)}}let k=E.children;for(let F=0,W=k.length;F<W;F++)x(k[F],T,w,v,b)}function L(E){E.target.removeEventListener("dispose",L);for(let w in d){let v=d[w],b=E.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function Qv(n,e){function t(){let D=!1,oe=new St,q=null,j=new St(0,0,0,0);return{setMask:function(ue){q!==ue&&!D&&(n.colorMask(ue,ue,ue,ue),q=ue)},setLocked:function(ue){D=ue},setClear:function(ue,ce,Ne,yt,Vt){Vt===!0&&(ue*=yt,ce*=yt,Ne*=yt),oe.set(ue,ce,Ne,yt),j.equals(oe)===!1&&(n.clearColor(ue,ce,Ne,yt),j.copy(oe))},reset:function(){D=!1,q=null,j.set(-1,0,0,0)}}}function i(){let D=!1,oe=!1,q=null,j=null,ue=null;return{setReversed:function(ce){if(oe!==ce){let Ne=e.get("EXT_clip_control");oe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);let yt=ue;ue=null,this.setClear(yt)}oe=ce},getReversed:function(){return oe},setTest:function(ce){ce?se(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(ce){q!==ce&&!D&&(n.depthMask(ce),q=ce)},setFunc:function(ce){if(oe&&(ce=Kv[ce]),j!==ce){switch(ce){case el:n.depthFunc(n.NEVER);break;case tl:n.depthFunc(n.ALWAYS);break;case il:n.depthFunc(n.LESS);break;case Ea:n.depthFunc(n.LEQUAL);break;case nl:n.depthFunc(n.EQUAL);break;case al:n.depthFunc(n.GEQUAL);break;case rl:n.depthFunc(n.GREATER);break;case ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ce}},setLocked:function(ce){D=ce},setClear:function(ce){ue!==ce&&(oe&&(ce=1-ce),n.clearDepth(ce),ue=ce)},reset:function(){D=!1,q=null,j=null,ue=null,oe=!1}}}function a(){let D=!1,oe=null,q=null,j=null,ue=null,ce=null,Ne=null,yt=null,Vt=null;return{setTest:function(et){D||(et?se(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(et){oe!==et&&!D&&(n.stencilMask(et),oe=et)},setFunc:function(et,vi,Fi){(q!==et||j!==vi||ue!==Fi)&&(n.stencilFunc(et,vi,Fi),q=et,j=vi,ue=Fi)},setOp:function(et,vi,Fi){(ce!==et||Ne!==vi||yt!==Fi)&&(n.stencilOp(et,vi,Fi),ce=et,Ne=vi,yt=Fi)},setLocked:function(et){D=et},setClear:function(et){Vt!==et&&(n.clearStencil(et),Vt=et)},reset:function(){D=!1,oe=null,q=null,j=null,ue=null,ce=null,Ne=null,yt=null,Vt=null}}}let r=new t,o=new i,s=new a,l=new WeakMap,d=new WeakMap,c={},u={},f=new WeakMap,p=[],g=null,M=!1,m=null,h=null,y=null,S=null,x=null,L=null,E=null,T=new Re(0,0,0),w=0,v=!1,b=null,P=null,k=null,F=null,W=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Z=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),V=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=Z>=2);let re=null,he={},ye=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),Ce=new St().fromArray(ye),X=new St().fromArray(ve);function ie(D,oe,q,j){let ue=new Uint8Array(4),ce=n.createTexture();n.bindTexture(D,ce),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<q;Ne++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(oe+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return ce}let xe={};xe[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),se(n.DEPTH_TEST),o.setFunc(Ea),He(!1),Ge(_d),se(n.CULL_FACE),U(gn);function se(D){c[D]!==!0&&(n.enable(D),c[D]=!0)}function Pe(D){c[D]!==!1&&(n.disable(D),c[D]=!1)}function De(D,oe){return u[D]!==oe?(n.bindFramebuffer(D,oe),u[D]=oe,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=oe),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function ze(D,oe){let q=p,j=!1;if(D){q=f.get(oe),q===void 0&&(q=[],f.set(oe,q));let ue=D.textures;if(q.length!==ue.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ne=ue.length;ce<Ne;ce++)q[ce]=n.COLOR_ATTACHMENT0+ce;q.length=ue.length,j=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,j=!0);j&&n.drawBuffers(q)}function xt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let We={[On]:n.FUNC_ADD,[pf]:n.FUNC_SUBTRACT,[mf]:n.FUNC_REVERSE_SUBTRACT};We[gf]=n.MIN,We[vf]=n.MAX;let Tt={[xf]:n.ZERO,[bf]:n.ONE,[Mf]:n.SRC_COLOR,[Ks]:n.SRC_ALPHA,[Cf]:n.SRC_ALPHA_SATURATE,[Af]:n.DST_COLOR,[yf]:n.DST_ALPHA,[_f]:n.ONE_MINUS_SRC_COLOR,[Qs]:n.ONE_MINUS_SRC_ALPHA,[Tf]:n.ONE_MINUS_DST_COLOR,[Sf]:n.ONE_MINUS_DST_ALPHA,[Ef]:n.CONSTANT_COLOR,[wf]:n.ONE_MINUS_CONSTANT_COLOR,[Pf]:n.CONSTANT_ALPHA,[Rf]:n.ONE_MINUS_CONSTANT_ALPHA};function U(D,oe,q,j,ue,ce,Ne,yt,Vt,et){if(D===gn){M===!0&&(Pe(n.BLEND),M=!1);return}if(M===!1&&(se(n.BLEND),M=!0),D!==ff){if(D!==m||et!==v){if((h!==On||x!==On)&&(n.blendEquation(n.FUNC_ADD),h=On,x=On),et)switch(D){case Sa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yd:n.blendFunc(n.ONE,n.ONE);break;case Sd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ad:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Sa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ad:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,S=null,L=null,E=null,T.set(0,0,0),w=0,m=D,v=et}return}ue=ue||oe,ce=ce||q,Ne=Ne||j,(oe!==h||ue!==x)&&(n.blendEquationSeparate(We[oe],We[ue]),h=oe,x=ue),(q!==y||j!==S||ce!==L||Ne!==E)&&(n.blendFuncSeparate(Tt[q],Tt[j],Tt[ce],Tt[Ne]),y=q,S=j,L=ce,E=Ne),(yt.equals(T)===!1||Vt!==w)&&(n.blendColor(yt.r,yt.g,yt.b,Vt),T.copy(yt),w=Vt),m=D,v=!1}function hi(D,oe){D.side===si?Pe(n.CULL_FACE):se(n.CULL_FACE);let q=D.side===$t;oe&&(q=!q),He(q),D.blending===Sa&&D.transparent===!1?U(gn):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let j=D.stencilWrite;s.setTest(j),j&&(s.setMask(D.stencilWriteMask),s.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),s.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){b!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),b=D)}function Ge(D){D!==uf?(se(n.CULL_FACE),D!==P&&(D===_d?n.cullFace(n.BACK):D===hf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),P=D}function Ee(D){D!==k&&(V&&n.lineWidth(D),k=D)}function ft(D,oe,q){D?(se(n.POLYGON_OFFSET_FILL),(F!==oe||W!==q)&&(n.polygonOffset(oe,q),F=oe,W=q)):Pe(n.POLYGON_OFFSET_FILL)}function Te(D){D?se(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function R(D){D===void 0&&(D=n.TEXTURE0+Q-1),re!==D&&(n.activeTexture(D),re=D)}function _(D,oe,q){q===void 0&&(re===null?q=n.TEXTURE0+Q-1:q=re);let j=he[q];j===void 0&&(j={type:void 0,texture:void 0},he[q]=j),(j.type!==D||j.texture!==oe)&&(re!==q&&(n.activeTexture(q),re=q),n.bindTexture(D,oe||xe[D]),j.type=D,j.texture=oe)}function z(){let D=he[re];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(D){Ce.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ce.copy(D))}function me(D){X.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function $e(D,oe){let q=d.get(oe);q===void 0&&(q=new WeakMap,d.set(oe,q));let j=q.get(D);j===void 0&&(j=n.getUniformBlockIndex(oe,D.name),q.set(D,j))}function Ue(D,oe){let j=d.get(oe).get(D);l.get(oe)!==j&&(n.uniformBlockBinding(oe,j,D.__bindingPointIndex),l.set(oe,j))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},re=null,he={},u={},f=new WeakMap,p=[],g=null,M=!1,m=null,h=null,y=null,S=null,x=null,L=null,E=null,T=new Re(0,0,0),w=0,v=!1,b=null,P=null,k=null,F=null,W=null,Ce.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:se,disable:Pe,bindFramebuffer:De,drawBuffers:ze,useProgram:xt,setBlending:U,setMaterial:hi,setFlipSided:He,setCullFace:Ge,setLineWidth:Ee,setPolygonOffset:ft,setScissorTest:Te,activeTexture:R,bindTexture:_,unbindTexture:z,compressedTexImage2D:Y,compressedTexImage3D:ee,texImage2D:pe,texImage3D:we,updateUBOMapping:$e,uniformBlockBinding:Ue,texStorage2D:qe,texStorage3D:te,texSubImage2D:J,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:Ie,viewport:me,reset:lt}}function Mu(n,e,t,i){let a=ex(i);switch(t){case Iu:return n*e;case Du:return n*e;case Nu:return n*e*2;case Bu:return n*e/a.components*a.byteLength;case bc:return n*e/a.components*a.byteLength;case Fu:return n*e*2/a.components*a.byteLength;case Mc:return n*e*2/a.components*a.byteLength;case Lu:return n*e*3/a.components*a.byteLength;case Ai:return n*e*4/a.components*a.byteLength;case _c:return n*e*4/a.components*a.byteLength;case lo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:case fl:return Math.max(n,16)*Math.max(e,8)/4;case dl:case hl:return Math.max(n,8)*Math.max(e,8)/2;case pl:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case El:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case fo:case Il:case Ll:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Uu:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Nl:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ex(n){switch(n){case Zi:case wu:return{byteLength:1,components:1};case fr:case Pu:case br:return{byteLength:2,components:1};case vc:case xc:return{byteLength:2,components:4};case Hn:case gc:case Wi:return{byteLength:4,components:1};case Ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function tx(n,e,t,i,a,r,o){let s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ke,c=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,_){return p?new OffscreenCanvas(R,_):go("canvas")}function M(R,_,z){let Y=1,ee=Te(R);if((ee.width>z||ee.height>z)&&(Y=z/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let J=Math.floor(Y*ee.width),Se=Math.floor(Y*ee.height);u===void 0&&(u=g(J,Se));let le=_?g(J,Se):u;return le.width=J,le.height=Se,le.getContext("2d").drawImage(R,0,0,J,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+Se+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function h(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,_,z,Y,ee=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=_;if(_===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),_===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8)),_===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),_===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),_===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),_===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),_===n.RGBA){let Se=ee?Vo:Xe.getTransfer(Y);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=Se===nt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(R,_){let z;return R?_===null||_===Hn||_===Ra?z=n.DEPTH24_STENCIL8:_===Wi?z=n.DEPTH32F_STENCIL8:_===fr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Hn||_===Ra?z=n.DEPTH_COMPONENT24:_===Wi?z=n.DEPTH_COMPONENT32F:_===fr&&(z=n.DEPTH_COMPONENT16),z}function L(R,_){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ei&&R.minFilter!==Ii?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function E(R){let _=R.target;_.removeEventListener("dispose",E),w(_),_.isVideoTexture&&c.delete(_)}function T(R){let _=R.target;_.removeEventListener("dispose",T),b(_)}function w(R){let _=i.get(R);if(_.__webglInit===void 0)return;let z=R.source,Y=f.get(z);if(Y){let ee=Y[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&v(R),Object.keys(Y).length===0&&f.delete(z)}i.remove(R)}function v(R){let _=i.get(R);n.deleteTexture(_.__webglTexture);let z=R.source,Y=f.get(z);delete Y[_.__cacheKey],o.memory.textures--}function b(R){let _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let ee=0;ee<_.__webglFramebuffer[Y].length;ee++)n.deleteFramebuffer(_.__webglFramebuffer[Y][ee]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=R.textures;for(let Y=0,ee=z.length;Y<ee;Y++){let J=i.get(z[Y]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(z[Y])}i.remove(R)}let P=0;function k(){P=0}function F(){let R=P;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),P+=1,R}function W(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function Q(R,_){let z=i.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){let Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,R,_);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function V(R,_){let z=i.get(R);if(R.version>0&&z.__version!==R.version){X(z,R,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function Z(R,_){let z=i.get(R);if(R.version>0&&z.__version!==R.version){X(z,R,_);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function $(R,_){let z=i.get(R);if(R.version>0&&z.__version!==R.version){ie(z,R,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}let re={[hr]:n.REPEAT,[zn]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},he={[ei]:n.NEAREST,[kf]:n.NEAREST_MIPMAP_NEAREST,[_a]:n.NEAREST_MIPMAP_LINEAR,[Ii]:n.LINEAR,[ys]:n.LINEAR_MIPMAP_NEAREST,[Vn]:n.LINEAR_MIPMAP_LINEAR},ye={[Gf]:n.NEVER,[Zf]:n.ALWAYS,[$f]:n.LESS,[Ou]:n.LEQUAL,[Wf]:n.EQUAL,[Jf]:n.GEQUAL,[qf]:n.GREATER,[Xf]:n.NOTEQUAL};function ve(R,_){if(_.type===Wi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ii||_.magFilter===ys||_.magFilter===_a||_.magFilter===Vn||_.minFilter===Ii||_.minFilter===ys||_.minFilter===_a||_.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,re[_.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,re[_.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,re[_.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,he[_.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ei||_.minFilter!==_a&&_.minFilter!==Vn||_.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ce(R,_){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",E));let Y=_.source,ee=f.get(Y);ee===void 0&&(ee={},f.set(Y,ee));let J=W(_);if(J!==R.__cacheKey){ee[J]===void 0&&(ee[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[J].usedTimes++;let Se=ee[R.__cacheKey];Se!==void 0&&(ee[R.__cacheKey].usedTimes--,Se.usedTimes===0&&v(_)),R.__cacheKey=J,R.__webglTexture=ee[J].texture}return z}function X(R,_,z){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);let ee=Ce(R,_),J=_.source;t.bindTexture(Y,R.__webglTexture,n.TEXTURE0+z);let Se=i.get(J);if(J.version!==Se.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);let le=Xe.getPrimaries(Xe.workingColorSpace),fe=_.colorSpace===pn?null:Xe.getPrimaries(_.colorSpace),qe=_.colorSpace===pn||le===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let te=M(_.image,!1,a.maxTextureSize);te=ft(_,te);let pe=r.convert(_.format,_.colorSpace),we=r.convert(_.type),Ie=S(_.internalFormat,pe,we,_.colorSpace,_.isVideoTexture);ve(Y,_);let me,$e=_.mipmaps,Ue=_.isVideoTexture!==!0,lt=Se.__version===void 0||ee===!0,D=J.dataReady,oe=L(_,te);if(_.isDepthTexture)Ie=x(_.format===Ia,_.type),lt&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,Ie,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Ie,te.width,te.height,0,pe,we,null));else if(_.isDataTexture)if($e.length>0){Ue&&lt&&t.texStorage2D(n.TEXTURE_2D,oe,Ie,$e[0].width,$e[0].height);for(let q=0,j=$e.length;q<j;q++)me=$e[q],Ue?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(n.TEXTURE_2D,q,Ie,me.width,me.height,0,pe,we,me.data);_.generateMipmaps=!1}else Ue?(lt&&t.texStorage2D(n.TEXTURE_2D,oe,Ie,te.width,te.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,pe,we,te.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,te.width,te.height,0,pe,we,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ue&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Ie,$e[0].width,$e[0].height,te.depth);for(let q=0,j=$e.length;q<j;q++)if(me=$e[q],_.format!==Ai)if(pe!==null)if(Ue){if(D)if(_.layerUpdates.size>0){let ue=Mu(me.width,me.height,_.format,_.type);for(let ce of _.layerUpdates){let Ne=me.data.subarray(ce*ue/me.data.BYTES_PER_ELEMENT,(ce+1)*ue/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ce,me.width,me.height,1,pe,Ne)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,te.depth,pe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ie,me.width,me.height,te.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,te.depth,pe,we,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ie,me.width,me.height,te.depth,0,pe,we,me.data)}else{Ue&&lt&&t.texStorage2D(n.TEXTURE_2D,oe,Ie,$e[0].width,$e[0].height);for(let q=0,j=$e.length;q<j;q++)me=$e[q],_.format!==Ai?pe!==null?Ue?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ie,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(n.TEXTURE_2D,q,Ie,me.width,me.height,0,pe,we,me.data)}else if(_.isDataArrayTexture)if(Ue){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Ie,te.width,te.height,te.depth),D)if(_.layerUpdates.size>0){let q=Mu(te.width,te.height,_.format,_.type);for(let j of _.layerUpdates){let ue=te.data.subarray(j*q/te.data.BYTES_PER_ELEMENT,(j+1)*q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,te.width,te.height,1,pe,we,ue)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,we,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,te.width,te.height,te.depth,0,pe,we,te.data);else if(_.isData3DTexture)Ue?(lt&&t.texStorage3D(n.TEXTURE_3D,oe,Ie,te.width,te.height,te.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,we,te.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,te.width,te.height,te.depth,0,pe,we,te.data);else if(_.isFramebufferTexture){if(lt)if(Ue)t.texStorage2D(n.TEXTURE_2D,oe,Ie,te.width,te.height);else{let q=te.width,j=te.height;for(let ue=0;ue<oe;ue++)t.texImage2D(n.TEXTURE_2D,ue,Ie,q,j,0,pe,we,null),q>>=1,j>>=1}}else if($e.length>0){if(Ue&&lt){let q=Te($e[0]);t.texStorage2D(n.TEXTURE_2D,oe,Ie,q.width,q.height)}for(let q=0,j=$e.length;q<j;q++)me=$e[q],Ue?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,pe,we,me):t.texImage2D(n.TEXTURE_2D,q,Ie,pe,we,me);_.generateMipmaps=!1}else if(Ue){if(lt){let q=Te(te);t.texStorage2D(n.TEXTURE_2D,oe,Ie,q.width,q.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,we,te)}else t.texImage2D(n.TEXTURE_2D,0,Ie,pe,we,te);m(_)&&h(Y),Se.__version=J.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function ie(R,_,z){if(_.image.length!==6)return;let Y=Ce(R,_),ee=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);let J=i.get(ee);if(ee.version!==J.__version||Y===!0){t.activeTexture(n.TEXTURE0+z);let Se=Xe.getPrimaries(Xe.workingColorSpace),le=_.colorSpace===pn?null:Xe.getPrimaries(_.colorSpace),fe=_.colorSpace===pn||Se===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let qe=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let j=0;j<6;j++)!qe&&!te?pe[j]=M(_.image[j],!0,a.maxCubemapSize):pe[j]=te?_.image[j].image:_.image[j],pe[j]=ft(_,pe[j]);let we=pe[0],Ie=r.convert(_.format,_.colorSpace),me=r.convert(_.type),$e=S(_.internalFormat,Ie,me,_.colorSpace),Ue=_.isVideoTexture!==!0,lt=J.__version===void 0||Y===!0,D=ee.dataReady,oe=L(_,we);ve(n.TEXTURE_CUBE_MAP,_);let q;if(qe){Ue&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,$e,we.width,we.height);for(let j=0;j<6;j++){q=pe[j].mipmaps;for(let ue=0;ue<q.length;ue++){let ce=q[ue];_.format!==Ai?Ie!==null?Ue?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,0,0,ce.width,ce.height,Ie,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,$e,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,0,0,ce.width,ce.height,Ie,me,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,$e,ce.width,ce.height,0,Ie,me,ce.data)}}}else{if(q=_.mipmaps,Ue&&lt){q.length>0&&oe++;let j=Te(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,$e,j.width,j.height)}for(let j=0;j<6;j++)if(te){Ue?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pe[j].width,pe[j].height,Ie,me,pe[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$e,pe[j].width,pe[j].height,0,Ie,me,pe[j].data);for(let ue=0;ue<q.length;ue++){let Ne=q[ue].image[j].image;Ue?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,0,0,Ne.width,Ne.height,Ie,me,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,$e,Ne.width,Ne.height,0,Ie,me,Ne.data)}}else{Ue?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ie,me,pe[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$e,Ie,me,pe[j]);for(let ue=0;ue<q.length;ue++){let ce=q[ue];Ue?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,0,0,Ie,me,ce.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,$e,Ie,me,ce.image[j])}}}m(_)&&h(n.TEXTURE_CUBE_MAP),J.__version=ee.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function xe(R,_,z,Y,ee,J){let Se=r.convert(z.format,z.colorSpace),le=r.convert(z.type),fe=S(z.internalFormat,Se,le,z.colorSpace),qe=i.get(_),te=i.get(z);if(te.__renderTarget=_,!qe.__hasExternalTextures){let pe=Math.max(1,_.width>>J),we=Math.max(1,_.height>>J);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,fe,pe,we,_.depth,0,Se,le,null):t.texImage2D(ee,J,fe,pe,we,0,Se,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ge(_)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ee,te.__webglTexture,0,He(_)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ee,te.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(R,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),_.depthBuffer){let Y=_.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,J=x(_.stencilBuffer,ee),Se=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=He(_);Ge(_)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,J,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,J,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,J,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,R)}else{let Y=_.textures;for(let ee=0;ee<Y.length;ee++){let J=Y[ee],Se=r.convert(J.format,J.colorSpace),le=r.convert(J.type),fe=S(J.internalFormat,Se,le,J.colorSpace),qe=He(_);z&&Ge(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,fe,_.width,_.height):Ge(_)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,fe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,fe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(R,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);let ee=Y.__webglTexture,J=He(_);if(_.depthTexture.format===Aa)Ge(_)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(_.depthTexture.format===Ia)Ge(_)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function De(R){let _=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=Y}if(R.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Pe(_.__webglFramebuffer,R)}else if(z){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),se(_.__webglDepthbuffer[Y],R,!1);else{let ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),se(_.__webglDepthbuffer,R,!1);else{let Y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(R,_,z){let Y=i.get(R);_!==void 0&&xe(Y.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&De(R)}function xt(R){let _=R.texture,z=i.get(R),Y=i.get(_);R.addEventListener("dispose",T);let ee=R.textures,J=R.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let fe=0;fe<_.mipmaps.length;fe++)z.__webglFramebuffer[le][fe]=n.createFramebuffer()}else z.__webglFramebuffer[le]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)z.__webglFramebuffer[le]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Se)for(let le=0,fe=ee.length;le<fe;le++){let qe=i.get(ee[le]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&Ge(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){let fe=ee[le];z.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[le]);let qe=r.convert(fe.format,fe.colorSpace),te=r.convert(fe.type),pe=S(fe.internalFormat,qe,te,fe.colorSpace,R.isXRRenderTarget===!0),we=He(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,pe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,z.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),se(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),ve(n.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)xe(z.__webglFramebuffer[le][fe],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else xe(z.__webglFramebuffer[le],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,fe=ee.length;le<fe;le++){let qe=ee[le],te=i.get(qe);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),ve(n.TEXTURE_2D,qe),xe(z.__webglFramebuffer,R,qe,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(qe)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),ve(le,_),_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)xe(z.__webglFramebuffer[fe],R,_,n.COLOR_ATTACHMENT0,le,fe);else xe(z.__webglFramebuffer,R,_,n.COLOR_ATTACHMENT0,le,0);m(_)&&h(le),t.unbindTexture()}R.depthBuffer&&De(R)}function We(R){let _=R.textures;for(let z=0,Y=_.length;z<Y;z++){let ee=_[z];if(m(ee)){let J=y(R),Se=i.get(ee).__webglTexture;t.bindTexture(J,Se),h(J),t.unbindTexture()}}}let Tt=[],U=[];function hi(R){if(R.samples>0){if(Ge(R)===!1){let _=R.textures,z=R.width,Y=R.height,ee=n.COLOR_BUFFER_BIT,J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(R),le=_.length>1;if(le)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);let qe=i.get(_[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,z,Y,0,0,z,Y,ee,n.NEAREST),l===!0&&(Tt.length=0,U.length=0,Tt.push(n.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Tt.push(J),U.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);let qe=i.get(_[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let _=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function He(R){return Math.min(a.maxSamples,R.samples)}function Ge(R){let _=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ee(R){let _=o.render.frame;c.get(R)!==_&&(c.set(R,_),R.update())}function ft(R,_){let z=R.colorSpace,Y=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Ba&&z!==pn&&(Xe.getTransfer(z)===nt?(Y!==Ai||ee!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function Te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(d.width=R.naturalWidth||R.width,d.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(d.width=R.displayWidth,d.height=R.displayHeight):(d.width=R.width,d.height=R.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=$,this.rebindTextures=ze,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=hi,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ge}function ix(n,e){function t(i,a=pn){let r,o=Xe.getTransfer(a);if(i===Zi)return n.UNSIGNED_BYTE;if(i===vc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ru)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wu)return n.BYTE;if(i===Pu)return n.SHORT;if(i===fr)return n.UNSIGNED_SHORT;if(i===gc)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===Wi)return n.FLOAT;if(i===br)return n.HALF_FLOAT;if(i===Iu)return n.ALPHA;if(i===Lu)return n.RGB;if(i===Ai)return n.RGBA;if(i===Du)return n.LUMINANCE;if(i===Nu)return n.LUMINANCE_ALPHA;if(i===Aa)return n.DEPTH_COMPONENT;if(i===Ia)return n.DEPTH_STENCIL;if(i===Bu)return n.RED;if(i===bc)return n.RED_INTEGER;if(i===Fu)return n.RG;if(i===Mc)return n.RG_INTEGER;if(i===_c)return n.RGBA_INTEGER;if(i===lo||i===co||i===uo||i===ho)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===ul||i===hl||i===fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pl||i===ml||i===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pl||i===ml)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vl||i===xl||i===bl||i===Ml||i===_l||i===yl||i===Sl||i===Al||i===Tl||i===Cl||i===El||i===wl||i===Pl||i===Rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ml)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_l)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Al)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===El)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rl)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fo||i===Il||i===Ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===fo)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uu||i===Dl||i===Nl||i===Bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ra?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function sx(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Vu(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function a(m,h,y,S,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),u(m,h)):h.isMeshPhongMaterial?(r(m,h),c(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),M(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?l(m,h,y,S):h.isSpriteMaterial?d(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===$t&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===$t&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let y=e.get(h),S=y.envMap,x=y.envMapRotation;S&&(m.envMap.value=S,Fn.copy(x),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),m.envMapRotation.value.setFromMatrix4(ox.makeRotationFromEuler(Fn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=S*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===$t&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function M(m,h){let y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function lx(n,e,t,i){let a={},r={},o=[],s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let x=S.program;i.uniformBlockBinding(y,x)}function d(y,S){let x=a[y.id];x===void 0&&(g(y),x=c(y),a[y.id]=x,y.addEventListener("dispose",m));let L=S.program;i.updateUBOMapping(y,L);let E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function c(y){let S=u();y.__bindingPointIndex=S;let x=n.createBuffer(),L=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,L,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function u(){for(let y=0;y<s;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let S=a[y.id],x=y.uniforms,L=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let E=0,T=x.length;E<T;E++){let w=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,b=w.length;v<b;v++){let P=w[v];if(p(P,E,v,L)===!0){let k=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],W=0;for(let Q=0;Q<F.length;Q++){let V=F[Q],Z=M(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,k+W,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,x,L){let E=y.value,T=S+"_"+x;if(L[T]===void 0)return typeof E=="number"||typeof E=="boolean"?L[T]=E:L[T]=E.clone(),!0;{let w=L[T];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return L[T]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function g(y){let S=y.uniforms,x=0,L=16;for(let T=0,w=S.length;T<w;T++){let v=Array.isArray(S[T])?S[T]:[S[T]];for(let b=0,P=v.length;b<P;b++){let k=v[b],F=Array.isArray(k.value)?k.value:[k.value];for(let W=0,Q=F.length;W<Q;W++){let V=F[W],Z=M(V),$=x%L,re=$%Z.boundary,he=$+re;x+=re,he!==0&&L-he<Z.storage&&(x+=L-he),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=Z.storage}}}let E=x%L;return E>0&&(x+=L-E),y.__size=x,y.__cache={},this}function M(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){let S=y.target;S.removeEventListener("dispose",m);let x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(a[S.id]),delete a[S.id],delete r[S.id]}function h(){for(let y in a)n.deleteBuffer(a[y]);o=[],a={},r={}}return{bind:l,update:d,dispose:h}}function oo(n,e,t,i,a,r){Ma.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(rr.x=r*Ma.x-a*Ma.y,rr.y=a*Ma.x+r*Ma.y):rr.copy(Ma),n.copy(e),n.x+=rr.x,n.y+=rr.y,n.applyMatrix4(Xu)}function so(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function cx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Tu(){return performance.now()}var uf,_d,hf,Cu,fc,Gi,xn,$t,si,gn,Sa,yd,Sd,Ad,ff,On,pf,mf,gf,vf,xf,bf,Mf,_f,Ks,Qs,yf,Sf,Af,Tf,Cf,Ef,wf,Pf,Rf,el,tl,il,Ea,nl,al,rl,ol,pc,If,Lf,vn,Df,Nf,Bf,mc,Ff,Uf,Of,Eu,wa,Pa,sl,ll,zo,hr,zn,cl,ei,kf,_a,Ii,ys,Vn,Zi,wu,Pu,fr,gc,Hn,Wi,br,vc,xc,Ra,Ru,Iu,Lu,Ai,Du,Nu,Aa,Ia,Bu,bc,Fu,Mc,_c,lo,co,uo,ho,dl,ul,hl,fl,pl,ml,gl,vl,xl,bl,Ml,_l,yl,Sl,Al,Tl,Cl,El,wl,Pl,Rl,fo,Il,Ll,Uu,Dl,Nl,Bl,po,Fl,Ss,Td,Cd,Ed,zf,Vf,yc,Hf,pn,Pt,Ba,Vo,nt,na,wd,Gf,$f,Wf,Ou,qf,Xf,Jf,Zf,Ul,Pd,qi,mo,bn,Ht,Rd,cr,pr,Ho,ke,Fe,As,Id,Xe,Ld,Dd,Nd,Bd,Fd,aa,Ol,gp,vo,vp,ci,St,kl,Yi,xo,zl,Li,O,Cs,Ud,Gn,Oi,Mi,Or,ra,oa,sa,ln,cn,In,er,kr,zr,Ln,xp,tr,ws,mr,ki,Ps,Vr,dn,Rs,Hr,Is,Vl,gt,la,_i,bp,Mp,un,Gr,ri,Od,kd,di,bo,_p,zd,ca,zi,$r,ir,yp,Sp,Vd,Hd,Gd,$d,Ap,da,Ls,Wt,yi,Vi,Ds,Hi,ua,ha,Wd,Ns,Bs,Fs,Us,Os,ks,mn,zu,hn,Wr,Re,Gt,Tp,ji,Mo,Ct,qr,Ut,_o,yo,li,Cp,pi,Vs,fa,oi,nr,Dt,Ti,qd,Dn,Xr,Xd,Jr,Zr,Yr,Hs,jr,Jd,Kr,Rt,mi,Pp,Rp,Ip,gi,So,fn,Zd,Yd,Kt,pa,ma,Hl,Ao,Gl,Gs,Lp,Dp,$i,Nn,eo,gr,Da,Bp,Fp,Up,Op,kp,zp,Vp,Hp,Gp,$p,Wp,qp,Xp,Jp,Zp,Yp,jp,Kp,Qp,em,tm,im,nm,am,rm,om,sm,lm,cm,dm,um,hm,fm,pm,mm,gm,vm,xm,bm,Mm,_m,ym,Sm,Am,Tm,Cm,Em,wm,Pm,Rm,Im,Lm,Dm,Nm,Bm,Fm,Um,Om,km,zm,Vm,Hm,Gm,$m,Wm,qm,Xm,Jm,Zm,Ym,jm,Km,Qm,e0,t0,i0,n0,a0,r0,o0,s0,l0,c0,d0,u0,h0,f0,p0,m0,g0,v0,x0,b0,M0,_0,y0,S0,A0,T0,C0,E0,w0,P0,R0,I0,L0,D0,N0,B0,F0,U0,O0,k0,z0,V0,H0,G0,$0,W0,q0,X0,J0,Z0,Y0,j0,K0,Q0,eg,tg,ig,ng,ag,rg,og,sg,lg,cg,dg,ug,hg,fg,Oe,ae,Ri,to,Bn,pg,To,ya,jd,kn,$s,Kd,Ws,qs,Xs,Js,Un,ga,Qd,Co,Eo,Gu,nu,$u,Wu,qu,au,ru,ou,su,lu,$l,Wl,ql,Zs,Ca,vv,xv,uu,no,Ev,wv,Rv,Ov,Jl,Zl,Wv,Yl,jl,Zv,Yv,Kv,Kl,Nt,nx,ur,ax,rx,Ql,ec,Fn,ox,wo,Po,Ro,Io,Zt,vr,xr,va,ar,xa,ba,Ma,rr,Xu,ao,or,ro,_u,Ys,yu,Lo,Mn,Do,Ki,No,Na,tc,ic,nc,Ci,$n,ac,rc,oc,Bo,Wn,sc,lc,dx,cc,Fo,Uo,js,Su,Au,dc,uc,Oo,ko,Tc,ux,Cc,hx,fx,px,mx,gx,vx,xx,hc,vt,mb,Mr=bi(()=>{uf=0,_d=1,hf=2,Cu=1,fc=2,Gi=3,xn=0,$t=1,si=2,gn=0,Sa=1,yd=2,Sd=3,Ad=4,ff=5,On=100,pf=101,mf=102,gf=103,vf=104,xf=200,bf=201,Mf=202,_f=203,Ks=204,Qs=205,yf=206,Sf=207,Af=208,Tf=209,Cf=210,Ef=211,wf=212,Pf=213,Rf=214,el=0,tl=1,il=2,Ea=3,nl=4,al=5,rl=6,ol=7,pc=0,If=1,Lf=2,vn=0,Df=1,Nf=2,Bf=3,mc=4,Ff=5,Uf=6,Of=7,Eu=300,wa=301,Pa=302,sl=303,ll=304,zo=306,hr=1e3,zn=1001,cl=1002,ei=1003,kf=1004,_a=1005,Ii=1006,ys=1007,Vn=1008,Zi=1009,wu=1010,Pu=1011,fr=1012,gc=1013,Hn=1014,Wi=1015,br=1016,vc=1017,xc=1018,Ra=1020,Ru=35902,Iu=1021,Lu=1022,Ai=1023,Du=1024,Nu=1025,Aa=1026,Ia=1027,Bu=1028,bc=1029,Fu=1030,Mc=1031,_c=1033,lo=33776,co=33777,uo=33778,ho=33779,dl=35840,ul=35841,hl=35842,fl=35843,pl=36196,ml=37492,gl=37496,vl=37808,xl=37809,bl=37810,Ml=37811,_l=37812,yl=37813,Sl=37814,Al=37815,Tl=37816,Cl=37817,El=37818,wl=37819,Pl=37820,Rl=37821,fo=36492,Il=36494,Ll=36495,Uu=36283,Dl=36284,Nl=36285,Bl=36286,po=2300,Fl=2301,Ss=2302,Td=2400,Cd=2401,Ed=2402,zf=3200,Vf=3201,yc=0,Hf=1,pn="",Pt="srgb",Ba="srgb-linear",Vo="linear",nt="srgb",na=7680,wd=519,Gf=512,$f=513,Wf=514,Ou=515,qf=516,Xf=517,Jf=518,Zf=519,Ul=35044,Pd="300 es",qi=2e3,mo=2001,bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let a=this._listeners[e];if(a!==void 0){let r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let a=i.slice(0);for(let r=0,o=a.length;r<o;r++)a[r].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rd=1234567,cr=Math.PI/180,pr=180/Math.PI;Ho={DEG2RAD:cr,RAD2DEG:pr,generateUUID:Xi,clamp:jt,euclideanModulo:Sc,mapLinear:Yf,inverseLerp:jf,lerp:dr,damp:Kf,pingpong:Qf,smoothstep:ep,smootherstep:tp,randInt:ip,randFloat:np,randFloatSpread:ap,seededRandom:rp,degToRad:op,radToDeg:sp,isPowerOfTwo:lp,ceilPowerOfTwo:cp,floorPowerOfTwo:dp,setQuaternionFromProperEuler:up,normalize:tt,denormalize:Si},ke=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*a+e.x,this.y=r*a+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class n{constructor(e,t,i,a,r,o,s,l,d){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,o,s,l,d)}set(e,t,i,a,r,o,s,l,d){let c=this.elements;return c[0]=e,c[1]=a,c[2]=s,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,r=this.elements,o=i[0],s=i[3],l=i[6],d=i[1],c=i[4],u=i[7],f=i[2],p=i[5],g=i[8],M=a[0],m=a[3],h=a[6],y=a[1],S=a[4],x=a[7],L=a[2],E=a[5],T=a[8];return r[0]=o*M+s*y+l*L,r[3]=o*m+s*S+l*E,r[6]=o*h+s*x+l*T,r[1]=d*M+c*y+u*L,r[4]=d*m+c*S+u*E,r[7]=d*h+c*x+u*T,r[2]=f*M+p*y+g*L,r[5]=f*m+p*S+g*E,r[8]=f*h+p*x+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],o=e[4],s=e[5],l=e[6],d=e[7],c=e[8];return t*o*c-t*s*d-i*r*c+i*s*l+a*r*d-a*o*l}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],o=e[4],s=e[5],l=e[6],d=e[7],c=e[8],u=c*o-s*d,f=s*l-c*r,p=d*r-o*l,g=t*u+i*f+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return e[0]=u*M,e[1]=(a*d-c*i)*M,e[2]=(s*i-a*o)*M,e[3]=f*M,e[4]=(c*t-a*l)*M,e[5]=(a*r-s*t)*M,e[6]=p*M,e[7]=(i*l-d*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,o,s){let l=Math.cos(r),d=Math.sin(r);return this.set(i*l,i*d,-i*(l*o+d*s)+o+e,-a*d,a*l,-a*(-d*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(As.makeScale(e,t)),this}rotate(e){return this.premultiply(As.makeRotation(-e)),this}translate(e,t){return this.premultiply(As.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},As=new Fe;Id={};Xe={enabled:!0,workingColorSpace:Ba,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===nt&&(n.r=Ji(n.r),n.g=Ji(n.g),n.b=Ji(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(n.r=Ta(n.r),n.g=Ta(n.g),n.b=Ta(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===pn?Vo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};Ld=[.64,.33,.3,.6,.15,.06],Dd=[.2126,.7152,.0722],Nd=[.3127,.329],Bd=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fd=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe.define({[Ba]:{primaries:Ld,whitePoint:Nd,transfer:Vo,toXYZ:Bd,fromXYZ:Fd,luminanceCoefficients:Dd,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:Ld,whitePoint:Nd,transfer:nt,toXYZ:Bd,fromXYZ:Fd,luminanceCoefficients:Dd,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}});Ol=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{aa===void 0&&(aa=go("canvas")),aa.width=e.width,aa.height=e.height;let i=aa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=aa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=go("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ji(t[i]/255)*255):t[i]=Ji(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gp=0,vo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let o=0,s=a.length;o<s;o++)a[o].isDataTexture?r.push(Ts(a[o].image)):r.push(Ts(a[o]))}else r=Ts(a);i.url=r}return t||(e.images[this.uuid]=i),i}};vp=0,ci=class n extends bn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=zn,a=zn,r=Ii,o=Vn,s=Ai,l=Zi,d=n.DEFAULT_ANISOTROPY,c=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Xi(),this.name="",this.source=new vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=o,this.anisotropy=d,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hr:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hr:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=Eu;ci.DEFAULT_ANISOTROPY=1;St=class n{constructor(e=0,t=0,i=0,a=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*a+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*a+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*a+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r,l=e.elements,d=l[0],c=l[4],u=l[8],f=l[1],p=l[5],g=l[9],M=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(d+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(d+1)/2,x=(p+1)/2,L=(h+1)/2,E=(c+f)/4,T=(u+M)/4,w=(g+m)/4;return S>x&&S>L?S<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(S),a=E/i,r=T/i):x>L?x<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(x),i=E/a,r=w/a):L<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(L),i=T/r,a=w/r),this.set(i,a,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(f-c)*(f-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-M)/y,this.z=(f-c)/y,this.w=Math.acos((d+p+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kl=class extends bn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ci(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let s=0;s<o;s++)this.textures[s]=r.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yi=class extends kl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xo=class extends ci{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=ei,this.minFilter=ei,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},zl=class extends ci{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=ei,this.minFilter=ei,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Li=class{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,o,s){let l=i[a+0],d=i[a+1],c=i[a+2],u=i[a+3],f=r[o+0],p=r[o+1],g=r[o+2],M=r[o+3];if(s===0){e[t+0]=l,e[t+1]=d,e[t+2]=c,e[t+3]=u;return}if(s===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=M;return}if(u!==M||l!==f||d!==p||c!==g){let m=1-s,h=l*f+d*p+c*g+u*M,y=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){let L=Math.sqrt(S),E=Math.atan2(L,h*y);m=Math.sin(m*E)/L,s=Math.sin(s*E)/L}let x=s*y;if(l=l*m+f*x,d=d*m+p*x,c=c*m+g*x,u=u*m+M*x,m===1-s){let L=1/Math.sqrt(l*l+d*d+c*c+u*u);l*=L,d*=L,c*=L,u*=L}}e[t]=l,e[t+1]=d,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,a,r,o){let s=i[a],l=i[a+1],d=i[a+2],c=i[a+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=s*g+c*u+l*p-d*f,e[t+1]=l*g+c*f+d*u-s*p,e[t+2]=d*g+c*p+s*f-l*u,e[t+3]=c*g-s*u-l*f-d*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,a=e._y,r=e._z,o=e._order,s=Math.cos,l=Math.sin,d=s(i/2),c=s(a/2),u=s(r/2),f=l(i/2),p=l(a/2),g=l(r/2);switch(o){case"XYZ":this._x=f*c*u+d*p*g,this._y=d*p*u-f*c*g,this._z=d*c*g+f*p*u,this._w=d*c*u-f*p*g;break;case"YXZ":this._x=f*c*u+d*p*g,this._y=d*p*u-f*c*g,this._z=d*c*g-f*p*u,this._w=d*c*u+f*p*g;break;case"ZXY":this._x=f*c*u-d*p*g,this._y=d*p*u+f*c*g,this._z=d*c*g+f*p*u,this._w=d*c*u-f*p*g;break;case"ZYX":this._x=f*c*u-d*p*g,this._y=d*p*u+f*c*g,this._z=d*c*g-f*p*u,this._w=d*c*u+f*p*g;break;case"YZX":this._x=f*c*u+d*p*g,this._y=d*p*u+f*c*g,this._z=d*c*g-f*p*u,this._w=d*c*u-f*p*g;break;case"XZY":this._x=f*c*u-d*p*g,this._y=d*p*u-f*c*g,this._z=d*c*g+f*p*u,this._w=d*c*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],a=t[4],r=t[8],o=t[1],s=t[5],l=t[9],d=t[2],c=t[6],u=t[10],f=i+s+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-d)*p,this._z=(o-a)*p}else if(i>s&&i>u){let p=2*Math.sqrt(1+i-s-u);this._w=(c-l)/p,this._x=.25*p,this._y=(a+o)/p,this._z=(r+d)/p}else if(s>u){let p=2*Math.sqrt(1+s-i-u);this._w=(r-d)/p,this._x=(a+o)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+u-i-s);this._w=(o-a)/p,this._x=(r+d)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,a=e._y,r=e._z,o=e._w,s=t._x,l=t._y,d=t._z,c=t._w;return this._x=i*c+o*s+a*d-r*l,this._y=a*c+o*l+r*s-i*d,this._z=r*c+o*d+i*l-a*s,this._w=o*c-i*s-a*l-r*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,a=this._y,r=this._z,o=this._w,s=o*e._w+i*e._x+a*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=a,this._z=r,this;let l=1-s*s;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*a+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let d=Math.sqrt(l),c=Math.atan2(d,s),u=Math.sin((1-t)*c)/d,f=Math.sin(t*c)/d;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=a*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ud.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ud.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,a=this.z,r=e.x,o=e.y,s=e.z,l=e.w,d=2*(o*a-s*i),c=2*(s*t-r*a),u=2*(r*i-o*t);return this.x=t+l*d+o*u-s*c,this.y=i+l*c+s*d-r*u,this.z=a+l*u+r*c-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,a=e.y,r=e.z,o=t.x,s=t.y,l=t.z;return this.x=a*l-r*s,this.y=r*o-i*l,this.z=i*s-a*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cs.copy(this).projectOnVector(e),this.sub(Cs)}reflect(e){return this.sub(Cs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cs=new O,Ud=new Li,Gn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=r.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Mi):Mi.fromBufferAttribute(r,o),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Or.copy(i.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}let a=e.children;for(let r=0,o=a.length;r<o;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),kr.subVectors(this.max,er),ra.subVectors(e.a,er),oa.subVectors(e.b,er),sa.subVectors(e.c,er),ln.subVectors(oa,ra),cn.subVectors(sa,oa),In.subVectors(ra,sa);let t=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-In.z,In.y,ln.z,0,-ln.x,cn.z,0,-cn.x,In.z,0,-In.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-In.y,In.x,0];return!Es(t,ra,oa,sa,kr)||(t=[1,0,0,0,1,0,0,0,1],!Es(t,ra,oa,sa,kr))?!1:(zr.crossVectors(ln,cn),t=[zr.x,zr.y,zr.z],Es(t,ra,oa,sa,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Oi=[new O,new O,new O,new O,new O,new O,new O,new O],Mi=new O,Or=new Gn,ra=new O,oa=new O,sa=new O,ln=new O,cn=new O,In=new O,er=new O,kr=new O,zr=new O,Ln=new O;xp=new Gn,tr=new O,ws=new O,mr=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):xp.setFromPoints(e).getCenter(i);let a=0;for(let r=0,o=e.length;r<o;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);let t=tr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(tr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(ws)),this.expandByPoint(tr.copy(e.center).sub(ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ki=new O,Ps=new O,Vr=new O,dn=new O,Rs=new O,Hr=new O,Is=new O,Vl=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Ps.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(Ps);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Vr),s=dn.dot(this.direction),l=-dn.dot(Vr),d=dn.lengthSq(),c=Math.abs(1-o*o),u,f,p,g;if(c>0)if(u=o*l-s,f=o*s-l,g=r*c,u>=0)if(f>=-g)if(f<=g){let M=1/c;u*=M,f*=M,p=u*(u+o*f+2*s)+f*(o*u+f+2*l)+d}else f=r,u=Math.max(0,-(o*f+s)),p=-u*u+f*(f+2*l)+d;else f=-r,u=Math.max(0,-(o*f+s)),p=-u*u+f*(f+2*l)+d;else f<=-g?(u=Math.max(0,-(-o*r+s)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+d):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+d):(u=Math.max(0,-(o*r+s)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+d);else f=o>0?-r:r,u=Math.max(0,-(o*f+s)),p=-u*u+f*(f+2*l)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(Ps).addScaledVector(Vr,f),p}intersectSphere(e,t){ki.subVectors(e.center,this.origin);let i=ki.dot(this.direction),a=ki.dot(ki)-i*i,r=e.radius*e.radius;if(a>r)return null;let o=Math.sqrt(r-a),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,o,s,l,d=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return d>=0?(i=(e.min.x-f.x)*d,a=(e.max.x-f.x)*d):(i=(e.max.x-f.x)*d,a=(e.min.x-f.x)*d),c>=0?(r=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(r=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||r>a||((r>i||isNaN(i))&&(i=r),(o<a||isNaN(a))&&(a=o),u>=0?(s=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(s=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||s>a)||((s>i||i!==i)&&(i=s),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,i,a,r){Rs.subVectors(t,e),Hr.subVectors(i,e),Is.crossVectors(Rs,Hr);let o=this.direction.dot(Is),s;if(o>0){if(a)return null;s=1}else if(o<0)s=-1,o=-o;else return null;dn.subVectors(this.origin,e);let l=s*this.direction.dot(Hr.crossVectors(dn,Hr));if(l<0)return null;let d=s*this.direction.dot(Rs.cross(dn));if(d<0||l+d>o)return null;let c=-s*dn.dot(Is);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class n{constructor(e,t,i,a,r,o,s,l,d,c,u,f,p,g,M,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,o,s,l,d,c,u,f,p,g,M,m)}set(e,t,i,a,r,o,s,l,d,c,u,f,p,g,M,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=a,h[1]=r,h[5]=o,h[9]=s,h[13]=l,h[2]=d,h[6]=c,h[10]=u,h[14]=f,h[3]=p,h[7]=g,h[11]=M,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,a=1/la.setFromMatrixColumn(e,0).length(),r=1/la.setFromMatrixColumn(e,1).length(),o=1/la.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,a=e.y,r=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(a),d=Math.sin(a),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*c,p=o*u,g=s*c,M=s*u;t[0]=l*c,t[4]=-l*u,t[8]=d,t[1]=p+g*d,t[5]=f-M*d,t[9]=-s*l,t[2]=M-f*d,t[6]=g+p*d,t[10]=o*l}else if(e.order==="YXZ"){let f=l*c,p=l*u,g=d*c,M=d*u;t[0]=f+M*s,t[4]=g*s-p,t[8]=o*d,t[1]=o*u,t[5]=o*c,t[9]=-s,t[2]=p*s-g,t[6]=M+f*s,t[10]=o*l}else if(e.order==="ZXY"){let f=l*c,p=l*u,g=d*c,M=d*u;t[0]=f-M*s,t[4]=-o*u,t[8]=g+p*s,t[1]=p+g*s,t[5]=o*c,t[9]=M-f*s,t[2]=-o*d,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){let f=o*c,p=o*u,g=s*c,M=s*u;t[0]=l*c,t[4]=g*d-p,t[8]=f*d+M,t[1]=l*u,t[5]=M*d+f,t[9]=p*d-g,t[2]=-d,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*d,g=s*l,M=s*d;t[0]=l*c,t[4]=M-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*c,t[9]=-s*c,t[2]=-d*c,t[6]=p*u+g,t[10]=f-M*u}else if(e.order==="XZY"){let f=o*l,p=o*d,g=s*l,M=s*d;t[0]=l*c,t[4]=-u,t[8]=d*c,t[1]=f*u+M,t[5]=o*c,t[9]=p*u-g,t[2]=g*u-p,t[6]=s*c,t[10]=M*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bp,e,Mp)}lookAt(e,t,i){let a=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),un.crossVectors(i,ri),un.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),un.crossVectors(i,ri)),un.normalize(),Gr.crossVectors(ri,un),a[0]=un.x,a[4]=Gr.x,a[8]=ri.x,a[1]=un.y,a[5]=Gr.y,a[9]=ri.y,a[2]=un.z,a[6]=Gr.z,a[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,r=this.elements,o=i[0],s=i[4],l=i[8],d=i[12],c=i[1],u=i[5],f=i[9],p=i[13],g=i[2],M=i[6],m=i[10],h=i[14],y=i[3],S=i[7],x=i[11],L=i[15],E=a[0],T=a[4],w=a[8],v=a[12],b=a[1],P=a[5],k=a[9],F=a[13],W=a[2],Q=a[6],V=a[10],Z=a[14],$=a[3],re=a[7],he=a[11],ye=a[15];return r[0]=o*E+s*b+l*W+d*$,r[4]=o*T+s*P+l*Q+d*re,r[8]=o*w+s*k+l*V+d*he,r[12]=o*v+s*F+l*Z+d*ye,r[1]=c*E+u*b+f*W+p*$,r[5]=c*T+u*P+f*Q+p*re,r[9]=c*w+u*k+f*V+p*he,r[13]=c*v+u*F+f*Z+p*ye,r[2]=g*E+M*b+m*W+h*$,r[6]=g*T+M*P+m*Q+h*re,r[10]=g*w+M*k+m*V+h*he,r[14]=g*v+M*F+m*Z+h*ye,r[3]=y*E+S*b+x*W+L*$,r[7]=y*T+S*P+x*Q+L*re,r[11]=y*w+S*k+x*V+L*he,r[15]=y*v+S*F+x*Z+L*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],o=e[1],s=e[5],l=e[9],d=e[13],c=e[2],u=e[6],f=e[10],p=e[14],g=e[3],M=e[7],m=e[11],h=e[15];return g*(+r*l*u-a*d*u-r*s*f+i*d*f+a*s*p-i*l*p)+M*(+t*l*p-t*d*f+r*o*f-a*o*p+a*d*c-r*l*c)+m*(+t*d*u-t*s*p-r*o*u+i*o*p+r*s*c-i*d*c)+h*(-a*s*c-t*l*u+t*s*f+a*o*u-i*o*f+i*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],o=e[4],s=e[5],l=e[6],d=e[7],c=e[8],u=e[9],f=e[10],p=e[11],g=e[12],M=e[13],m=e[14],h=e[15],y=u*m*d-M*f*d+M*l*p-s*m*p-u*l*h+s*f*h,S=g*f*d-c*m*d-g*l*p+o*m*p+c*l*h-o*f*h,x=c*M*d-g*u*d+g*s*p-o*M*p-c*s*h+o*u*h,L=g*u*l-c*M*l-g*s*f+o*M*f+c*s*m-o*u*m,E=t*y+i*S+a*x+r*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return e[0]=y*T,e[1]=(M*f*r-u*m*r-M*a*p+i*m*p+u*a*h-i*f*h)*T,e[2]=(s*m*r-M*l*r+M*a*d-i*m*d-s*a*h+i*l*h)*T,e[3]=(u*l*r-s*f*r-u*a*d+i*f*d+s*a*p-i*l*p)*T,e[4]=S*T,e[5]=(c*m*r-g*f*r+g*a*p-t*m*p-c*a*h+t*f*h)*T,e[6]=(g*l*r-o*m*r-g*a*d+t*m*d+o*a*h-t*l*h)*T,e[7]=(o*f*r-c*l*r+c*a*d-t*f*d-o*a*p+t*l*p)*T,e[8]=x*T,e[9]=(g*u*r-c*M*r-g*i*p+t*M*p+c*i*h-t*u*h)*T,e[10]=(o*M*r-g*s*r+g*i*d-t*M*d-o*i*h+t*s*h)*T,e[11]=(c*s*r-o*u*r-c*i*d+t*u*d+o*i*p-t*s*p)*T,e[12]=L*T,e[13]=(c*M*a-g*u*a+g*i*f-t*M*f-c*i*m+t*u*m)*T,e[14]=(g*s*a-o*M*a-g*i*l+t*M*l+o*i*m-t*s*m)*T,e[15]=(o*u*a-c*s*a+c*i*l-t*u*l-o*i*f+t*s*f)*T,this}scale(e){let t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),a=Math.sin(t),r=1-i,o=e.x,s=e.y,l=e.z,d=r*o,c=r*s;return this.set(d*o+i,d*s-a*l,d*l+a*s,0,d*s+a*l,c*s+i,c*l-a*o,0,d*l-a*s,c*l+a*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,o){return this.set(1,i,r,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){let a=this.elements,r=t._x,o=t._y,s=t._z,l=t._w,d=r+r,c=o+o,u=s+s,f=r*d,p=r*c,g=r*u,M=o*c,m=o*u,h=s*u,y=l*d,S=l*c,x=l*u,L=i.x,E=i.y,T=i.z;return a[0]=(1-(M+h))*L,a[1]=(p+x)*L,a[2]=(g-S)*L,a[3]=0,a[4]=(p-x)*E,a[5]=(1-(f+h))*E,a[6]=(m+y)*E,a[7]=0,a[8]=(g+S)*T,a[9]=(m-y)*T,a[10]=(1-(f+M))*T,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){let a=this.elements,r=la.set(a[0],a[1],a[2]).length(),o=la.set(a[4],a[5],a[6]).length(),s=la.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],_i.copy(this);let d=1/r,c=1/o,u=1/s;return _i.elements[0]*=d,_i.elements[1]*=d,_i.elements[2]*=d,_i.elements[4]*=c,_i.elements[5]*=c,_i.elements[6]*=c,_i.elements[8]*=u,_i.elements[9]*=u,_i.elements[10]*=u,t.setFromRotationMatrix(_i),i.x=r,i.y=o,i.z=s,this}makePerspective(e,t,i,a,r,o,s=qi){let l=this.elements,d=2*r/(t-e),c=2*r/(i-a),u=(t+e)/(t-e),f=(i+a)/(i-a),p,g;if(s===qi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(s===mo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,r,o,s=qi){let l=this.elements,d=1/(t-e),c=1/(i-a),u=1/(o-r),f=(t+e)*d,p=(i+a)*c,g,M;if(s===qi)g=(o+r)*u,M=-2*u;else if(s===mo)g=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},la=new O,_i=new gt,bp=new O(0,0,0),Mp=new O(1,1,1),un=new O,Gr=new O,ri=new O,Od=new gt,kd=new Li,di=class n{constructor(e=0,t=0,i=0,a=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let a=e.elements,r=a[0],o=a[4],s=a[8],l=a[1],d=a[5],c=a[9],u=a[2],f=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,d),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Od,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kd.setFromEuler(this),this.setFromQuaternion(kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";bo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_p=0,zd=new O,ca=new Li,zi=new gt,$r=new O,ir=new O,yp=new O,Sp=new Li,Vd=new O(1,0,0),Hd=new O(0,1,0),Gd=new O(0,0,1),$d={type:"added"},Ap={type:"removed"},da={type:"childadded",child:null},Ls={type:"childremoved",child:null},Wt=class n extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new di,i=new Li,a=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new gt},normalMatrix:{value:new Fe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ca.setFromAxisAngle(e,t),this.quaternion.multiply(ca),this}rotateOnWorldAxis(e,t){return ca.setFromAxisAngle(e,t),this.quaternion.premultiply(ca),this}rotateX(e){return this.rotateOnAxis(Vd,e)}rotateY(e){return this.rotateOnAxis(Hd,e)}rotateZ(e){return this.rotateOnAxis(Gd,e)}translateOnAxis(e,t){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vd,e)}translateY(e){return this.translateOnAxis(Hd,e)}translateZ(e){return this.translateOnAxis(Gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$r.copy(e):$r.set(e,t,i);let a=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(ir,$r,this.up):zi.lookAt($r,ir,this.up),this.quaternion.setFromRotationMatrix(zi),a&&(zi.extractRotation(a.matrixWorld),ca.setFromRotationMatrix(zi),this.quaternion.premultiply(ca.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($d),da.child=e,this.dispatchEvent(da),da.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ap),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($d),da.child=e,this.dispatchEvent(da),da.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let l=s.shapes;if(Array.isArray(l))for(let d=0,c=l.length;d<c;d++){let u=l[d];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let l=0,d=this.material.length;l<d;l++)s.push(r(e.materials,this.material[l]));a.material=s}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){let l=this.animations[s];a.animations.push(r(e.animations,l))}}if(t){let s=o(e.geometries),l=o(e.materials),d=o(e.textures),c=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),d.length>0&&(i.textures=d),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=a,i;function o(s){let l=[];for(let d in s){let c=s[d];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let a=e.children[i];this.add(a.clone())}return this}};Wt.DEFAULT_UP=new O(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;yi=new O,Vi=new O,Ds=new O,Hi=new O,ua=new O,ha=new O,Wd=new O,Ns=new O,Bs=new O,Fs=new O,Us=new St,Os=new St,ks=new St,mn=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),yi.subVectors(e,t),a.cross(yi);let r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){yi.subVectors(a,t),Vi.subVectors(i,t),Ds.subVectors(e,t);let o=yi.dot(yi),s=yi.dot(Vi),l=yi.dot(Ds),d=Vi.dot(Vi),c=Vi.dot(Ds),u=o*d-s*s;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(d*l-s*c)*f,g=(o*c-s*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,i,a,r,o,s,l){return this.getBarycoord(e,t,i,a,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(s,Hi.z),l)}static getInterpolatedAttribute(e,t,i,a,r,o){return Us.setScalar(0),Os.setScalar(0),ks.setScalar(0),Us.fromBufferAttribute(e,t),Os.fromBufferAttribute(e,i),ks.fromBufferAttribute(e,a),o.setScalar(0),o.addScaledVector(Us,r.x),o.addScaledVector(Os,r.y),o.addScaledVector(ks,r.z),o}static isFrontFacing(e,t,i,a){return yi.subVectors(i,t),Vi.subVectors(e,t),yi.cross(Vi).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),yi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,a=this.b,r=this.c,o,s;ua.subVectors(a,i),ha.subVectors(r,i),Ns.subVectors(e,i);let l=ua.dot(Ns),d=ha.dot(Ns);if(l<=0&&d<=0)return t.copy(i);Bs.subVectors(e,a);let c=ua.dot(Bs),u=ha.dot(Bs);if(c>=0&&u<=c)return t.copy(a);let f=l*u-c*d;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ua,o);Fs.subVectors(e,r);let p=ua.dot(Fs),g=ha.dot(Fs);if(g>=0&&p<=g)return t.copy(r);let M=p*d-l*g;if(M<=0&&d>=0&&g<=0)return s=d/(d-g),t.copy(i).addScaledVector(ha,s);let m=c*g-p*u;if(m<=0&&u-c>=0&&p-g>=0)return Wd.subVectors(r,a),s=(u-c)/(u-c+(p-g)),t.copy(a).addScaledVector(Wd,s);let h=1/(m+M+f);return o=M*h,s=f*h,t.copy(i).addScaledVector(ua,o).addScaledVector(ha,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Wr={h:0,s:0,l:0};Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Xe.workingColorSpace){if(e=Sc(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=zs(o,r,e+1/3),this.g=zs(o,r,e),this.b=zs(o,r,e-1/3)}return Xe.toWorkingColorSpace(this,a),this}setStyle(e,t=Pt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=a[1],s=a[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=a[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let i=zu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Xe.fromWorkingColorSpace(Gt.copy(this),e),Math.round(jt(Gt.r*255,0,255))*65536+Math.round(jt(Gt.g*255,0,255))*256+Math.round(jt(Gt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Gt.copy(this),t);let i=Gt.r,a=Gt.g,r=Gt.b,o=Math.max(i,a,r),s=Math.min(i,a,r),l,d,c=(s+o)/2;if(s===o)l=0,d=0;else{let u=o-s;switch(d=c<=.5?u/(o+s):u/(2-o-s),o){case i:l=(a-r)/u+(a<r?6:0);break;case a:l=(r-i)/u+2;break;case r:l=(i-a)/u+4;break}l/=6}return e.h=l,e.s=d,e.l=c,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Pt){Xe.fromWorkingColorSpace(Gt.copy(this),e);let t=Gt.r,i=Gt.g,a=Gt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(Wr);let i=dr(hn.h,Wr.h,t),a=dr(hn.s,Wr.s,t),r=dr(hn.l,Wr.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gt=new Re;Re.NAMES=zu;Tp=0,ji=class extends bn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Xi(),this.name="",this.blending=Sa,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ks,this.blendDst=Qs,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sa&&(i.blending=this.blending),this.side!==xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ks&&(i.blendSrc=this.blendSrc),this.blendDst!==Qs&&(i.blendDst=this.blendDst),this.blendEquation!==On&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==na&&(i.stencilFail=this.stencilFail),this.stencilZFail!==na&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==na&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){let o=[];for(let s in r){let l=r[s];delete l.metadata,o.push(l)}return o}if(t){let r=a(e.textures),o=a(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Mo=class extends ji{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ct=new O,qr=new ke,Ut=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ul,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),a=tt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),a=tt(a,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ul&&(e.usage=this.usage),e}},_o=class extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}},yo=class extends Ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}},li=class extends Ut{constructor(e,t,i){super(new Float32Array(e),t,i)}},Cp=0,pi=new gt,Vs=new Wt,fa=new O,oi=new Gn,nr=new Gn,Dt=new O,Ti=class n extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ku(e)?yo:_o)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Fe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,i){return pi.makeTranslation(e,t,i),this.applyMatrix4(pi),this}scale(e,t,i){return pi.makeScale(e,t,i),this.applyMatrix4(pi),this}lookAt(e){return Vs.lookAt(e),Vs.updateMatrix(),this.applyMatrix4(Vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fa).negate(),this.translate(fa.x,fa.y,fa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let a=0,r=e.length;a<r;a++){let o=e[a];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new li(i,3))}else{for(let i=0,a=t.count;i<a;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){let r=t[i];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let s=t[r];nr.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(oi.min,nr.min),oi.expandByPoint(Dt),Dt.addVectors(oi.max,nr.max),oi.expandByPoint(Dt)):(oi.expandByPoint(nr.min),oi.expandByPoint(nr.max))}oi.getCenter(i);let a=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){let s=t[r],l=this.morphTargetsRelative;for(let d=0,c=s.count;d<c;d++)Dt.fromBufferAttribute(s,d),l&&(fa.fromBufferAttribute(e,d),Dt.add(fa)),a=Math.max(a,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,a=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),s=[],l=[];for(let w=0;w<i.count;w++)s[w]=new O,l[w]=new O;let d=new O,c=new O,u=new O,f=new ke,p=new ke,g=new ke,M=new O,m=new O;function h(w,v,b){d.fromBufferAttribute(i,w),c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,b),c.sub(d),u.sub(d),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(M.copy(c).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),s[w].add(M),s[v].add(M),s[b].add(M),l[w].add(m),l[v].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let w=0,v=y.length;w<v;++w){let b=y[w],P=b.start,k=b.count;for(let F=P,W=P+k;F<W;F+=3)h(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let S=new O,x=new O,L=new O,E=new O;function T(w){L.fromBufferAttribute(a,w),E.copy(L);let v=s[w];S.copy(v),S.sub(L.multiplyScalar(L.dot(v))).normalize(),x.crossVectors(E,v);let P=x.dot(l[w])<0?-1:1;o.setXYZW(w,S.x,S.y,S.z,P)}for(let w=0,v=y.length;w<v;++w){let b=y[w],P=b.start,k=b.count;for(let F=P,W=P+k;F<W;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let a=new O,r=new O,o=new O,s=new O,l=new O,d=new O,c=new O,u=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),c.subVectors(o,r),u.subVectors(a,r),c.cross(u),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),d.fromBufferAttribute(i,m),s.add(c),l.add(c),d.add(c),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let f=0,p=t.count;f<p;f+=3)a.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,r),u.subVectors(a,r),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(s,l){let d=s.array,c=s.itemSize,u=s.normalized,f=new d.constructor(l.length*c),p=0,g=0;for(let M=0,m=l.length;M<m;M++){s.isInterleavedBufferAttribute?p=l[M]*s.data.stride+s.offset:p=l[M]*c;for(let h=0;h<c;h++)f[g++]=d[p++]}return new Ut(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,a=this.attributes;for(let s in a){let l=a[s],d=e(l,i);t.setAttribute(s,d)}let r=this.morphAttributes;for(let s in r){let l=[],d=r[s];for(let c=0,u=d.length;c<u;c++){let f=d[c],p=e(f,i);l.push(p)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let s=0,l=o.length;s<l;s++){let d=o[s];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let d=i[l];e.data.attributes[l]=d.toJSON(e.data)}let a={},r=!1;for(let l in this.morphAttributes){let d=this.morphAttributes[l],c=[];for(let u=0,f=d.length;u<f;u++){let p=d[u];c.push(p.toJSON(e.data))}c.length>0&&(a[l]=c,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let a=e.attributes;for(let d in a){let c=a[d];this.setAttribute(d,c.clone(t))}let r=e.morphAttributes;for(let d in r){let c=[],u=r[d];for(let f=0,p=u.length;f<p;f++)c.push(u[f].clone(t));this.morphAttributes[d]=c}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let d=0,c=o.length;d<c;d++){let u=o[d];this.addGroup(u.start,u.count,u.materialIndex)}let s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qd=new gt,Dn=new Vl,Xr=new mr,Xd=new O,Jr=new O,Zr=new O,Yr=new O,Hs=new O,jr=new O,Jd=new O,Kr=new O,Rt=class extends Wt{constructor(e=new Ti,t=new Mo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){let s=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(a,e);let s=this.morphTargetInfluences;if(r&&s){jr.set(0,0,0);for(let l=0,d=r.length;l<d;l++){let c=s[l],u=r[l];c!==0&&(Hs.fromBufferAttribute(u,e),o?jr.addScaledVector(Hs,c):jr.addScaledVector(Hs.sub(t),c))}t.add(jr)}return t}raycast(e,t){let i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(r),Dn.copy(e.ray).recast(e.near),!(Xr.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(Xr,Xd)===null||Dn.origin.distanceToSquared(Xd)>(e.far-e.near)**2))&&(qd.copy(r).invert(),Dn.copy(e.ray).applyMatrix4(qd),!(i.boundingBox!==null&&Dn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Dn)))}_computeIntersections(e,t,i){let a,r=this.geometry,o=this.material,s=r.index,l=r.attributes.position,d=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){let m=f[g],h=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,L=S;x<L;x+=3){let E=s.getX(x),T=s.getX(x+1),w=s.getX(x+2);a=Qr(this,h,e,i,d,c,u,E,T,w),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let g=Math.max(0,p.start),M=Math.min(s.count,p.start+p.count);for(let m=g,h=M;m<h;m+=3){let y=s.getX(m),S=s.getX(m+1),x=s.getX(m+2);a=Qr(this,o,e,i,d,c,u,y,S,x),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){let m=f[g],h=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,L=S;x<L;x+=3){let E=x,T=x+1,w=x+2;a=Qr(this,h,e,i,d,c,u,E,T,w),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,h=M;m<h;m+=3){let y=m,S=m+1,x=m+2;a=Qr(this,o,e,i,d,c,u,y,S,x),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}};mi=class n extends Ti{constructor(e=1,t=1,i=1,a=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:o};let s=this;a=Math.floor(a),r=Math.floor(r),o=Math.floor(o);let l=[],d=[],c=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,a,o,2),g("x","z","y",1,-1,e,i,-t,a,o,3),g("x","y","z",1,-1,e,t,i,a,r,4),g("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new li(d,3)),this.setAttribute("normal",new li(c,3)),this.setAttribute("uv",new li(u,2));function g(M,m,h,y,S,x,L,E,T,w,v){let b=x/T,P=L/w,k=x/2,F=L/2,W=E/2,Q=T+1,V=w+1,Z=0,$=0,re=new O;for(let he=0;he<V;he++){let ye=he*P-F;for(let ve=0;ve<Q;ve++){let Ce=ve*b-k;re[M]=Ce*y,re[m]=ye*S,re[h]=W,d.push(re.x,re.y,re.z),re[M]=0,re[m]=0,re[h]=E>0?1:-1,c.push(re.x,re.y,re.z),u.push(ve/T),u.push(1-he/w),Z+=1}}for(let he=0;he<w;he++)for(let ye=0;ye<T;ye++){let ve=f+ye+Q*he,Ce=f+ye+Q*(he+1),X=f+(ye+1)+Q*(he+1),ie=f+(ye+1)+Q*he;l.push(ve,Ce,ie),l.push(Ce,X,ie),$+=6}s.addGroup(p,$,v),p+=$,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Pp={clone:La,merge:Yt},Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gi=class extends ji{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=La(e.uniforms),this.uniformsGroups=wp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let a in this.uniforms){let o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},So=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fn=new O,Zd=new ke,Yd=new ke,Kt=class extends So{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fn.x,fn.y).multiplyScalar(-e/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fn.x,fn.y).multiplyScalar(-e/fn.z)}getViewSize(e,t){return this.getViewBounds(e,Zd,Yd),t.subVectors(Yd,Zd)}setViewOffset(e,t,i,a,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cr*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,d=o.fullHeight;r+=o.offsetX*a/l,t-=o.offsetY*i/d,a*=o.width/l,i*=o.height/d}let s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pa=-90,ma=1,Hl=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new Kt(pa,ma,e,t);a.layers=this.layers,this.add(a);let r=new Kt(pa,ma,e,t);r.layers=this.layers,this.add(r);let o=new Kt(pa,ma,e,t);o.layers=this.layers,this.add(o);let s=new Kt(pa,ma,e,t);s.layers=this.layers,this.add(s);let l=new Kt(pa,ma,e,t);l.layers=this.layers,this.add(l);let d=new Kt(pa,ma,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,a,r,o,s,l]=t;for(let d of t)this.remove(d);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,s,l,d,c]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,r),e.setRenderTarget(i,1,a),e.render(t,o),e.setRenderTarget(i,2,a),e.render(t,s),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,d),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,a),e.render(t,c),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ao=class extends ci{constructor(e,t,i,a,r,o,s,l,d,c){e=e!==void 0?e:[],t=t!==void 0?t:wa,super(e,t,i,a,r,o,s,l,d,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gl=class extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Ao(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new mi(5,5,5),r=new gi({name:"CubemapFromEquirect",uniforms:La(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:gn});r.uniforms.tEquirect.value=t;let o=new Rt(a,r),s=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Ii),new Hl(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,a){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,a);e.setRenderTarget(r)}},Gs=new O,Lp=new O,Dp=new Fe,$i=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let a=Gs.subVectors(i,t).cross(Lp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Gs),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Dp.getNormalMatrix(e),a=this.coplanarPoint(Gs).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Nn=new mr,eo=new O,gr=class{constructor(e=new $i,t=new $i,i=new $i,a=new $i,r=new $i,o=new $i){this.planes=[e,t,i,a,r,o]}set(e,t,i,a,r,o){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(a),s[4].copy(r),s[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qi){let i=this.planes,a=e.elements,r=a[0],o=a[1],s=a[2],l=a[3],d=a[4],c=a[5],u=a[6],f=a[7],p=a[8],g=a[9],M=a[10],m=a[11],h=a[12],y=a[13],S=a[14],x=a[15];if(i[0].setComponents(l-r,f-d,m-p,x-h).normalize(),i[1].setComponents(l+r,f+d,m+p,x+h).normalize(),i[2].setComponents(l+o,f+c,m+g,x+y).normalize(),i[3].setComponents(l-o,f-c,m-g,x-y).normalize(),i[4].setComponents(l-s,f-u,m-M,x-S).normalize(),t===qi)i[5].setComponents(l+s,f+u,m+M,x+S).normalize();else if(t===mo)i[5].setComponents(s,u,M,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){let t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let a=t[i];if(eo.x=a.normal.x>0?e.max.x:e.min.x,eo.y=a.normal.y>0?e.max.y:e.min.y,eo.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Da=class n extends Ti{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};let r=e/2,o=t/2,s=Math.floor(i),l=Math.floor(a),d=s+1,c=l+1,u=e/s,f=t/l,p=[],g=[],M=[],m=[];for(let h=0;h<c;h++){let y=h*f-o;for(let S=0;S<d;S++){let x=S*u-r;g.push(x,-y,0),M.push(0,0,1),m.push(S/s),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<s;y++){let S=y+d*h,x=y+d*(h+1),L=y+1+d*(h+1),E=y+1+d*h;p.push(S,x,E),p.push(x,L,E)}this.setIndex(p),this.setAttribute("position",new li(g,3)),this.setAttribute("normal",new li(M,3)),this.setAttribute("uv",new li(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fp=`#ifdef USE_ALPHAHASH
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
#endif`,Up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vp=`#ifdef USE_AOMAP
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
#endif`,Hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Zp=`#ifdef USE_BUMPMAP
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
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,am=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,om=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,um="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
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
}`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cm=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Em=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Dm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nm=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Um=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Om=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$m=`#if defined( USE_POINTS_UV )
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
#endif`,Wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`#ifdef USE_MORPHTARGETS
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
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
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
#endif`,a0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,d0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,b0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P0=`#ifdef USE_TRANSMISSION
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`#include <common>
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
}`,V0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H0=`#define DISTANCE
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
}`,G0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`uniform float scale;
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
}`,X0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,Z0=`uniform vec3 diffuse;
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
}`,Y0=`#define LAMBERT
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
}`,j0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,K0=`#define MATCAP
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
}`,Q0=`#define MATCAP
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
}`,eg=`#define NORMAL
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
}`,tg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ig=`#define PHONG
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
}`,ng=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,ag=`#define STANDARD
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
}`,rg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,og=`#define TOON
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
}`,sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,lg=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,dg=`#include <common>
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
}`,ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,hg=`uniform float rotation;
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
}`,fg=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Bp,alphahash_pars_fragment:Fp,alphamap_fragment:Up,alphamap_pars_fragment:Op,alphatest_fragment:kp,alphatest_pars_fragment:zp,aomap_fragment:Vp,aomap_pars_fragment:Hp,batching_pars_vertex:Gp,batching_vertex:$p,begin_vertex:Wp,beginnormal_vertex:qp,bsdfs:Xp,iridescence_fragment:Jp,bumpmap_pars_fragment:Zp,clipping_planes_fragment:Yp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:Qp,color_fragment:em,color_pars_fragment:tm,color_pars_vertex:im,color_vertex:nm,common:am,cube_uv_reflection_fragment:rm,defaultnormal_vertex:om,displacementmap_pars_vertex:sm,displacementmap_vertex:lm,emissivemap_fragment:cm,emissivemap_pars_fragment:dm,colorspace_fragment:um,colorspace_pars_fragment:hm,envmap_fragment:fm,envmap_common_pars_fragment:pm,envmap_pars_fragment:mm,envmap_pars_vertex:gm,envmap_physical_pars_fragment:Em,envmap_vertex:vm,fog_vertex:xm,fog_pars_vertex:bm,fog_fragment:Mm,fog_pars_fragment:_m,gradientmap_pars_fragment:ym,lightmap_pars_fragment:Sm,lights_lambert_fragment:Am,lights_lambert_pars_fragment:Tm,lights_pars_begin:Cm,lights_toon_fragment:wm,lights_toon_pars_fragment:Pm,lights_phong_fragment:Rm,lights_phong_pars_fragment:Im,lights_physical_fragment:Lm,lights_physical_pars_fragment:Dm,lights_fragment_begin:Nm,lights_fragment_maps:Bm,lights_fragment_end:Fm,logdepthbuf_fragment:Um,logdepthbuf_pars_fragment:Om,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:zm,map_fragment:Vm,map_pars_fragment:Hm,map_particle_fragment:Gm,map_particle_pars_fragment:$m,metalnessmap_fragment:Wm,metalnessmap_pars_fragment:qm,morphinstance_vertex:Xm,morphcolor_vertex:Jm,morphnormal_vertex:Zm,morphtarget_pars_vertex:Ym,morphtarget_vertex:jm,normal_fragment_begin:Km,normal_fragment_maps:Qm,normal_pars_fragment:e0,normal_pars_vertex:t0,normal_vertex:i0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:a0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:s0,opaque_fragment:l0,packing:c0,premultiplied_alpha_fragment:d0,project_vertex:u0,dithering_fragment:h0,dithering_pars_fragment:f0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:v0,shadowmap_vertex:x0,shadowmask_pars_fragment:b0,skinbase_vertex:M0,skinning_pars_vertex:_0,skinning_vertex:y0,skinnormal_vertex:S0,specularmap_fragment:A0,specularmap_pars_fragment:T0,tonemapping_fragment:C0,tonemapping_pars_fragment:E0,transmission_fragment:w0,transmission_pars_fragment:P0,uv_pars_fragment:R0,uv_pars_vertex:I0,uv_vertex:L0,worldpos_vertex:D0,background_vert:N0,background_frag:B0,backgroundCube_vert:F0,backgroundCube_frag:U0,cube_vert:O0,cube_frag:k0,depth_vert:z0,depth_frag:V0,distanceRGBA_vert:H0,distanceRGBA_frag:G0,equirect_vert:$0,equirect_frag:W0,linedashed_vert:q0,linedashed_frag:X0,meshbasic_vert:J0,meshbasic_frag:Z0,meshlambert_vert:Y0,meshlambert_frag:j0,meshmatcap_vert:K0,meshmatcap_frag:Q0,meshnormal_vert:eg,meshnormal_frag:tg,meshphong_vert:ig,meshphong_frag:ng,meshphysical_vert:ag,meshphysical_frag:rg,meshtoon_vert:og,meshtoon_frag:sg,points_vert:lg,points_frag:cg,shadow_vert:dg,shadow_frag:ug,sprite_vert:hg,sprite_frag:fg},ae={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Ri={basic:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Yt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Yt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Yt([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Yt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Yt([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Yt([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Yt([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Yt([ae.lights,ae.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Ri.physical={uniforms:Yt([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};to={r:0,b:0,g:0},Bn=new di,pg=new gt;To=class extends So{constructor(e=-1,t=1,i=1,a=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,r=i-e,o=i+e,s=a+t,l=a-t;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,o=r+d*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ya=4,jd=[.125,.215,.35,.446,.526,.582],kn=20,$s=new To,Kd=new Re,Ws=null,qs=0,Xs=0,Js=!1,Un=(1+Math.sqrt(5))/2,ga=1/Un,Qd=[new O(-Un,ga,0),new O(Un,ga,0),new O(-ga,0,Un),new O(ga,0,Un),new O(0,Un,-ga),new O(0,Un,ga),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Co=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Ws=this._renderer.getRenderTarget(),qs=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,a,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ws,qs,Xs),this._renderer.xr.enabled=Js,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wa||e.mapping===Pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ws=this._renderer.getRenderTarget(),qs=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:br,format:Ai,colorSpace:Ba,depthBuffer:!1},a=eu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_g(r)),this._blurMaterial=yg(r,e,t)}return a}_compileMaterial(e){let t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,$s)}_sceneToCubeUV(e,t,i,a){let s=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(Kd),c.toneMapping=vn,c.autoClear=!1;let p=new Mo({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new Rt(new mi,p),M=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,M=!0):(p.color.copy(Kd),M=!0);for(let h=0;h<6;h++){let y=h%3;y===0?(s.up.set(0,l[h],0),s.lookAt(d[h],0,0)):y===1?(s.up.set(0,0,l[h]),s.lookAt(0,d[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,d[h]));let S=this._cubeSize;io(a,y*S,h>2?S:0,S,S),c.setRenderTarget(a),M&&c.render(g,s),c.render(e,s)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,a=e.mapping===wa||e.mapping===Pa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());let r=a?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;let l=this._cubeSize;io(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$s)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let a=this._lodPlanes.length;for(let r=1;r<a;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Qd[(a-r-1)%Qd.length];this._blur(e,r-1,r,o,s)}t.autoClear=i}_blur(e,t,i,a,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,a,"latitudinal",r),this._halfBlur(o,e,i,i,a,"longitudinal",r)}_halfBlur(e,t,i,a,r,o,s){let l=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new Rt(this._lodPlanes[a],d),f=d.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*kn-1),M=r/g,m=isFinite(r)?1+Math.floor(c*M):kn;m>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);let h=[],y=0;for(let T=0;T<kn;++T){let w=T/M,v=Math.exp(-w*w/2);h.push(v),T===0?y+=v:T<m&&(y+=2*v)}for(let T=0;T<h.length;T++)h[T]=h[T]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;let x=this._sizeLods[a],L=3*x*(a>S-ya?a-S+ya:0),E=4*(this._cubeSize-x);io(t,L,E,3*x,2*x),l.setRenderTarget(t),l.render(u,$s)}};Eo=class extends ci{constructor(e,t,i,a,r,o,s,l,d,c=Aa){if(c!==Aa&&c!==Ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Aa&&(i=Hn),i===void 0&&c===Ia&&(i=Ra),super(null,a,r,o,s,l,c,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:ei,this.minFilter=l!==void 0?l:ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Gu=new ci,nu=new Eo(1,1),$u=new xo,Wu=new zl,qu=new Ao,au=[],ru=[],ou=new Float32Array(16),su=new Float32Array(9),lu=new Float32Array(4);$l=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Zg(t.type)}},Wl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mv(t.type)}},ql=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let a=this.seq;for(let r=0,o=a.length;r!==o;++r){let s=a[r];s.setValue(e,t[s.id],i)}}},Zs=/(\w+)(\])?(\[|\.)?/g;Ca=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let r=e.getActiveUniform(t,a),o=e.getUniformLocation(t,r.name);gv(r,o,this)}}setValue(e,t,i,a){let r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){let a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,o=t.length;r!==o;++r){let s=t[r],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,a)}}static seqWithValue(e,t){let i=[];for(let a=0,r=e.length;a!==r;++a){let o=e[a];o.id in t&&i.push(o)}return i}};vv=37297,xv=0;uu=new Fe;no=new O;Ev=/^[ \t]*#include +<([\w\d./]+)>/gm;wv=new Map;Rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Ov=0,Jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Zl(e),t.set(e,i)),i}},Zl=class{constructor(e){this.id=Ov++,this.code=e,this.usedTimes=0}};Wv=0;Yl=class extends ji{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jl=class extends ji{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;Kv={[el]:tl,[il]:rl,[nl]:ol,[Ea]:al,[tl]:el,[rl]:il,[ol]:nl,[al]:Ea};Kl=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Nt=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},nx={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,o=null,s=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,i),h=this._getHandJoint(d,M);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let c=d.joints["index-finger-tip"],u=d.joints["thumb-tip"],f=c.position.distanceTo(u.position),p=.02,g=.005;d.inputState.pinching&&f>p+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&f<=p-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(nx)))}return s!==null&&(s.visible=a!==null),l!==null&&(l.visible=r!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
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

}`,Ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let a=new ci,r=e.properties.get(a);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new gi({vertexShader:ax,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ec=class extends bn{constructor(e,t){super();let i=this,a=null,r=1,o=null,s="local-floor",l=1,d=null,c=null,u=null,f=null,p=null,g=null,M=new Ql,m=t.getContextAttributes(),h=null,y=null,S=[],x=[],L=new ke,E=null,T=new Kt;T.viewport=new St;let w=new Kt;w.viewport=new St;let v=[T,w],b=new Kl,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=S[X];return ie===void 0&&(ie=new ur,S[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=S[X];return ie===void 0&&(ie=new ur,S[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=S[X];return ie===void 0&&(ie=new ur,S[X]=ie),ie.getHandSpace()};function F(X){let ie=x.indexOf(X.inputSource);if(ie===-1)return;let xe=S[ie];xe!==void 0&&(xe.update(X.inputSource,X.frame,d||o),xe.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){a.removeEventListener("select",F),a.removeEventListener("selectstart",F),a.removeEventListener("selectend",F),a.removeEventListener("squeeze",F),a.removeEventListener("squeezestart",F),a.removeEventListener("squeezeend",F),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",Q);for(let X=0;X<S.length;X++){let ie=x[X];ie!==null&&(x[X]=null,S[X].disconnect(ie))}P=null,k=null,M.reset(),e.setRenderTarget(h),p=null,f=null,u=null,a=null,y=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(X){d=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(h=e.getRenderTarget(),a.addEventListener("select",F),a.addEventListener("selectstart",F),a.addEventListener("selectend",F),a.addEventListener("squeeze",F),a.addEventListener("squeezestart",F),a.addEventListener("squeezeend",F),a.addEventListener("end",W),a.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(L),a.renderState.layers===void 0){let ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,t,ie),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Yi(p.framebufferWidth,p.framebufferHeight,{format:Ai,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,xe=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Ia:Aa,xe=m.stencil?Ra:Hn);let Pe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=new XRWebGLBinding(a,t),f=u.createProjectionLayer(Pe),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Yi(f.textureWidth,f.textureHeight,{format:Ai,type:Zi,depthTexture:new Eo(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),d=null,o=await a.requestReferenceSpace(s),Ce.setContext(a),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Q(X){for(let ie=0;ie<X.removed.length;ie++){let xe=X.removed[ie],se=x.indexOf(xe);se>=0&&(x[se]=null,S[se].disconnect(xe))}for(let ie=0;ie<X.added.length;ie++){let xe=X.added[ie],se=x.indexOf(xe);if(se===-1){for(let De=0;De<S.length;De++)if(De>=x.length){x.push(xe),se=De;break}else if(x[De]===null){x[De]=xe,se=De;break}if(se===-1)break}let Pe=S[se];Pe&&Pe.connect(xe)}}let V=new O,Z=new O;function $(X,ie,xe){V.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(xe.matrixWorld);let se=V.distanceTo(Z),Pe=ie.projectionMatrix.elements,De=xe.projectionMatrix.elements,ze=Pe[14]/(Pe[10]-1),xt=Pe[14]/(Pe[10]+1),We=(Pe[9]+1)/Pe[5],Tt=(Pe[9]-1)/Pe[5],U=(Pe[8]-1)/Pe[0],hi=(De[8]+1)/De[0],He=ze*U,Ge=ze*hi,Ee=se/(-U+hi),ft=Ee*-U;if(ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ft),X.translateZ(Ee),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Pe[10]===-1)X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let Te=ze+Ee,R=xt+Ee,_=He-ft,z=Ge+(se-ft),Y=We*xt/R*Te,ee=Tt*xt/R*Te;X.projectionMatrix.makePerspective(_,z,Y,ee,Te,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function re(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let ie=X.near,xe=X.far;M.texture!==null&&(M.depthNear>0&&(ie=M.depthNear),M.depthFar>0&&(xe=M.depthFar)),b.near=w.near=T.near=ie,b.far=w.far=T.far=xe,(P!==b.near||k!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,k=b.far),T.layers.mask=X.layers.mask|2,w.layers.mask=X.layers.mask|4,b.layers.mask=T.layers.mask|w.layers.mask;let se=X.parent,Pe=b.cameras;re(b,se);for(let De=0;De<Pe.length;De++)re(Pe[De],se);Pe.length===2?$(b,T,w):b.projectionMatrix.copy(T.projectionMatrix),he(X,b,se)};function he(X,ie,xe){xe===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(xe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=pr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let ye=null;function ve(X,ie){if(c=ie.getViewerPose(d||o),g=ie,c!==null){let xe=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let se=!1;xe.length!==b.cameras.length&&(b.cameras.length=0,se=!0);for(let De=0;De<xe.length;De++){let ze=xe[De],xt=null;if(p!==null)xt=p.getViewport(ze);else{let Tt=u.getViewSubImage(f,ze);xt=Tt.viewport,De===0&&(e.setRenderTargetTextures(y,Tt.colorTexture,f.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(y))}let We=v[De];We===void 0&&(We=new Kt,We.layers.enable(De),We.viewport=new St,v[De]=We),We.matrix.fromArray(ze.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(ze.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(xt.x,xt.y,xt.width,xt.height),De===0&&(b.matrix.copy(We.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),se===!0&&b.cameras.push(We)}let Pe=a.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){let De=u.getDepthInformation(xe[0]);De&&De.isValid&&De.texture&&M.init(e,De,a.renderState)}}for(let xe=0;xe<S.length;xe++){let se=x[xe],Pe=S[xe];se!==null&&Pe!==void 0&&Pe.update(se,ie,d||o)}ye&&ye(X,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Ce=new Hu;Ce.setAnimationLoop(ve),this.setAnimationLoop=function(X){ye=X},this.dispose=function(){}}},Fn=new di,ox=new gt;wo=class{constructor(e={}){let{canvas:t=hp(),context:i=null,depth:a=!0,stencil:r=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),M=new Int32Array(4),m=null,h=null,y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this.toneMapping=vn,this.toneMappingExposure=1;let x=this,L=!1,E=0,T=0,w=null,v=-1,b=null,P=new St,k=new St,F=null,W=new Re(0),Q=0,V=t.width,Z=t.height,$=1,re=null,he=null,ye=new St(0,0,V,Z),ve=new St(0,0,V,Z),Ce=!1,X=new gr,ie=!1,xe=!1,se=new gt,Pe=new gt,De=new O,ze=new St,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Tt(){return w===null?$:1}let U=i;function hi(A,N){return t.getContext(A,N)}try{let A={alpha:!0,depth:a,stencil:r,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",ce,!1),U===null){let N="webgl2";if(U=hi(N,A),U===null)throw hi(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let He,Ge,Ee,ft,Te,R,_,z,Y,ee,J,Se,le,fe,qe,te,pe,we,Ie,me,$e,Ue,lt,D;function oe(){He=new Ag(U),He.init(),Ue=new ix(U,He),Ge=new xg(U,He,e,Ue),Ee=new Qv(U,He),Ge.reverseDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),ft=new Eg(U),Te=new zv,R=new tx(U,He,Ee,Te,Ge,Ue,ft),_=new Mg(x),z=new Sg(x),Y=new Np(U),lt=new gg(U,Y),ee=new Tg(U,Y,ft,lt),J=new Pg(U,ee,Y,ft),Ie=new wg(U,Ge,R),te=new bg(Te),Se=new kv(x,_,z,He,Ge,lt,te),le=new sx(x,Te),fe=new Hv,qe=new Jv(He),we=new mg(x,_,z,Ee,J,p,l),pe=new jv(x,J,Ge),D=new lx(U,ft,Ge,Ee),me=new vg(U,He,ft),$e=new Cg(U,He,ft),ft.programs=Se.programs,x.capabilities=Ge,x.extensions=He,x.properties=Te,x.renderLists=fe,x.shadowMap=pe,x.state=Ee,x.info=ft}oe();let q=new ec(x,U);this.xr=q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=He.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=He.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(V,Z,!1))},this.getSize=function(A){return A.set(V,Z)},this.setSize=function(A,N,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,Z=N,t.width=Math.floor(A*$),t.height=Math.floor(N*$),H===!0&&(t.style.width=A+"px",t.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(V*$,Z*$).floor()},this.setDrawingBufferSize=function(A,N,H){V=A,Z=N,$=H,t.width=Math.floor(A*H),t.height=Math.floor(N*H),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,N,H,G){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,N,H,G),Ee.viewport(P.copy(ye).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(ve)},this.setScissor=function(A,N,H,G){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,N,H,G),Ee.scissor(k.copy(ve).multiplyScalar($).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(A){Ee.setScissorTest(Ce=A)},this.setOpaqueSort=function(A){re=A},this.setTransparentSort=function(A){he=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(A=!0,N=!0,H=!0){let G=0;if(A){let B=!1;if(w!==null){let ne=w.texture.format;B=ne===_c||ne===Mc||ne===bc}if(B){let ne=w.texture.type,de=ne===Zi||ne===Hn||ne===fr||ne===Ra||ne===vc||ne===xc,be=we.getClearColor(),Me=we.getClearAlpha(),Le=be.r,Be=be.g,_e=be.b;de?(g[0]=Le,g[1]=Be,g[2]=_e,g[3]=Me,U.clearBufferuiv(U.COLOR,0,g)):(M[0]=Le,M[1]=Be,M[2]=_e,M[3]=Me,U.clearBufferiv(U.COLOR,0,M))}else G|=U.COLOR_BUFFER_BIT}N&&(G|=U.DEPTH_BUFFER_BIT),H&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),fe.dispose(),qe.dispose(),Te.dispose(),_.dispose(),z.dispose(),J.dispose(),lt.dispose(),D.dispose(),Se.dispose(),q.dispose(),q.removeEventListener("sessionstart",fd),q.removeEventListener("sessionend",pd),Rn.stop()};function j(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let A=ft.autoReset,N=pe.enabled,H=pe.autoUpdate,G=pe.needsUpdate,B=pe.type;oe(),ft.autoReset=A,pe.enabled=N,pe.autoUpdate=H,pe.needsUpdate=G,pe.type=B}function ce(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ne(A){let N=A.target;N.removeEventListener("dispose",Ne),yt(N)}function yt(A){Vt(A),Te.remove(A)}function Vt(A){let N=Te.get(A).programs;N!==void 0&&(N.forEach(function(H){Se.releaseProgram(H)}),A.isShaderMaterial&&Se.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,H,G,B,ne){N===null&&(N=xt);let de=B.isMesh&&B.matrixWorld.determinant()<0,be=sf(A,N,H,G,B);Ee.setMaterial(G,de);let Me=H.index,Le=1;if(G.wireframe===!0){if(Me=ee.getWireframeAttribute(H),Me===void 0)return;Le=2}let Be=H.drawRange,_e=H.attributes.position,Je=Be.start*Le,ct=(Be.start+Be.count)*Le;ne!==null&&(Je=Math.max(Je,ne.start*Le),ct=Math.min(ct,(ne.start+ne.count)*Le)),Me!==null?(Je=Math.max(Je,0),ct=Math.min(ct,Me.count)):_e!=null&&(Je=Math.max(Je,0),ct=Math.min(ct,_e.count));let pt=ct-Je;if(pt<0||pt===1/0)return;lt.setup(B,G,be,H,Me);let Qt,Ye=me;if(Me!==null&&(Qt=Y.get(Me),Ye=$e,Ye.setIndex(Qt)),B.isMesh)G.wireframe===!0?(Ee.setLineWidth(G.wireframeLinewidth*Tt()),Ye.setMode(U.LINES)):Ye.setMode(U.TRIANGLES);else if(B.isLine){let Ae=G.linewidth;Ae===void 0&&(Ae=1),Ee.setLineWidth(Ae*Tt()),B.isLineSegments?Ye.setMode(U.LINES):B.isLineLoop?Ye.setMode(U.LINE_LOOP):Ye.setMode(U.LINE_STRIP)}else B.isPoints?Ye.setMode(U.POINTS):B.isSprite&&Ye.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ye.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ye.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ae=B._multiDrawStarts,Ui=B._multiDrawCounts,je=B._multiDrawCount,xi=Me?Y.get(Me).bytesPerElement:1,ia=Te.get(G).currentProgram.getUniforms();for(let ai=0;ai<je;ai++)ia.setValue(U,"_gl_DrawID",ai),Ye.render(Ae[ai]/xi,Ui[ai])}else if(B.isInstancedMesh)Ye.renderInstances(Je,pt,B.count);else if(H.isInstancedBufferGeometry){let Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ui=Math.min(H.instanceCount,Ae);Ye.renderInstances(Je,pt,Ui)}else Ye.render(Je,pt)};function et(A,N,H){A.transparent===!0&&A.side===si&&A.forceSinglePass===!1?(A.side=$t,A.needsUpdate=!0,Ur(A,N,H),A.side=xn,A.needsUpdate=!0,Ur(A,N,H),A.side=si):Ur(A,N,H)}this.compile=function(A,N,H=null){H===null&&(H=A),h=qe.get(H),h.init(N),S.push(h),H.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),A!==H&&A.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();let G=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ne=B.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){let be=ne[de];et(be,H,B),G.add(be)}else et(ne,H,B),G.add(ne)}),S.pop(),h=null,G},this.compileAsync=function(A,N,H=null){let G=this.compile(A,N,H);return new Promise(B=>{function ne(){if(G.forEach(function(de){Te.get(de).currentProgram.isReady()&&G.delete(de)}),G.size===0){B(A);return}setTimeout(ne,10)}He.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let vi=null;function Fi(A){vi&&vi(A)}function fd(){Rn.stop()}function pd(){Rn.start()}let Rn=new Hu;Rn.setAnimationLoop(Fi),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(A){vi=A,q.setAnimationLoop(A),A===null?Rn.stop():Rn.start()},q.addEventListener("sessionstart",fd),q.addEventListener("sessionend",pd),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,N,w),h=qe.get(A,S.length),h.init(N),S.push(h),Pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(Pe),xe=this.localClippingEnabled,ie=te.init(this.clippingPlanes,xe),m=fe.get(A,y.length),m.init(),y.push(m),q.enabled===!0&&q.isPresenting===!0){let ne=x.xr.getDepthSensingMesh();ne!==null&&_s(ne,N,-1/0,x.sortObjects)}_s(A,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(re,he),We=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,We&&we.addToRenderList(m,A),this.info.render.frame++,ie===!0&&te.beginShadows();let H=h.state.shadowsArray;pe.render(H,A,N),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,B=m.transmissive;if(h.setupLights(),N.isArrayCamera){let ne=N.cameras;if(B.length>0)for(let de=0,be=ne.length;de<be;de++){let Me=ne[de];gd(G,B,A,Me)}We&&we.render(A);for(let de=0,be=ne.length;de<be;de++){let Me=ne[de];md(m,A,Me,Me.viewport)}}else B.length>0&&gd(G,B,A,N),We&&we.render(A),md(m,A,N);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(x,A,N),lt.resetDefaultState(),v=-1,b=null,S.pop(),S.length>0?(h=S[S.length-1],ie===!0&&te.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function _s(A,N,H,G){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||X.intersectsSprite(A)){G&&ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pe);let de=J.update(A),be=A.material;be.visible&&m.push(A,de,be,H,ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||X.intersectsObject(A))){let de=J.update(A),be=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ze.copy(A.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),ze.copy(de.boundingSphere.center)),ze.applyMatrix4(A.matrixWorld).applyMatrix4(Pe)),Array.isArray(be)){let Me=de.groups;for(let Le=0,Be=Me.length;Le<Be;Le++){let _e=Me[Le],Je=be[_e.materialIndex];Je&&Je.visible&&m.push(A,de,Je,H,ze.z,_e)}}else be.visible&&m.push(A,de,be,H,ze.z,null)}}let ne=A.children;for(let de=0,be=ne.length;de<be;de++)_s(ne[de],N,H,G)}function md(A,N,H,G){let B=A.opaque,ne=A.transmissive,de=A.transparent;h.setupLightsView(H),ie===!0&&te.setGlobalState(x.clippingPlanes,H),G&&Ee.viewport(P.copy(G)),B.length>0&&Fr(B,N,H),ne.length>0&&Fr(ne,N,H),de.length>0&&Fr(de,N,H),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function gd(A,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new Yi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?br:Zi,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));let ne=h.state.transmissionRenderTarget[G.id],de=G.viewport||P;ne.setSize(de.z,de.w);let be=x.getRenderTarget();x.setRenderTarget(ne),x.getClearColor(W),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),We&&we.render(H);let Me=x.toneMapping;x.toneMapping=vn;let Le=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),ie===!0&&te.setGlobalState(x.clippingPlanes,G),Fr(A,H,G),R.updateMultisampleRenderTarget(ne),R.updateRenderTargetMipmap(ne),He.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let _e=0,Je=N.length;_e<Je;_e++){let ct=N[_e],pt=ct.object,Qt=ct.geometry,Ye=ct.material,Ae=ct.group;if(Ye.side===si&&pt.layers.test(G.layers)){let Ui=Ye.side;Ye.side=$t,Ye.needsUpdate=!0,vd(pt,H,G,Qt,Ye,Ae),Ye.side=Ui,Ye.needsUpdate=!0,Be=!0}}Be===!0&&(R.updateMultisampleRenderTarget(ne),R.updateRenderTargetMipmap(ne))}x.setRenderTarget(be),x.setClearColor(W,Q),Le!==void 0&&(G.viewport=Le),x.toneMapping=Me}function Fr(A,N,H){let G=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ne=A.length;B<ne;B++){let de=A[B],be=de.object,Me=de.geometry,Le=G===null?de.material:G,Be=de.group;be.layers.test(H.layers)&&vd(be,N,H,Me,Le,Be)}}function vd(A,N,H,G,B,ne){A.onBeforeRender(x,N,H,G,B,ne),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(x,N,H,G,A,ne),B.transparent===!0&&B.side===si&&B.forceSinglePass===!1?(B.side=$t,B.needsUpdate=!0,x.renderBufferDirect(H,N,G,B,A,ne),B.side=xn,B.needsUpdate=!0,x.renderBufferDirect(H,N,G,B,A,ne),B.side=si):x.renderBufferDirect(H,N,G,B,A,ne),A.onAfterRender(x,N,H,G,B,ne)}function Ur(A,N,H){N.isScene!==!0&&(N=xt);let G=Te.get(A),B=h.state.lights,ne=h.state.shadowsArray,de=B.state.version,be=Se.getParameters(A,B.state,ne,N,H),Me=Se.getProgramCacheKey(be),Le=G.programs;G.environment=A.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(A.isMeshStandardMaterial?z:_).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Le===void 0&&(A.addEventListener("dispose",Ne),Le=new Map,G.programs=Le);let Be=Le.get(Me);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===de)return bd(A,be),Be}else be.uniforms=Se.getUniforms(A),A.onBeforeCompile(be,x),Be=Se.acquireProgram(be,Me),Le.set(Me,Be),G.uniforms=be.uniforms;let _e=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(_e.clippingPlanes=te.uniform),bd(A,be),G.needsLights=cf(A),G.lightsStateVersion=de,G.needsLights&&(_e.ambientLightColor.value=B.state.ambient,_e.lightProbe.value=B.state.probe,_e.directionalLights.value=B.state.directional,_e.directionalLightShadows.value=B.state.directionalShadow,_e.spotLights.value=B.state.spot,_e.spotLightShadows.value=B.state.spotShadow,_e.rectAreaLights.value=B.state.rectArea,_e.ltc_1.value=B.state.rectAreaLTC1,_e.ltc_2.value=B.state.rectAreaLTC2,_e.pointLights.value=B.state.point,_e.pointLightShadows.value=B.state.pointShadow,_e.hemisphereLights.value=B.state.hemi,_e.directionalShadowMap.value=B.state.directionalShadowMap,_e.directionalShadowMatrix.value=B.state.directionalShadowMatrix,_e.spotShadowMap.value=B.state.spotShadowMap,_e.spotLightMatrix.value=B.state.spotLightMatrix,_e.spotLightMap.value=B.state.spotLightMap,_e.pointShadowMap.value=B.state.pointShadowMap,_e.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Be,G.uniformsList=null,Be}function xd(A){if(A.uniformsList===null){let N=A.currentProgram.getUniforms();A.uniformsList=Ca.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function bd(A,N){let H=Te.get(A);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function sf(A,N,H,G,B){N.isScene!==!0&&(N=xt),R.resetTextureUnits();let ne=N.fog,de=G.isMeshStandardMaterial?N.environment:null,be=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ba,Me=(G.isMeshStandardMaterial?z:_).get(G.envMap||de),Le=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Be=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),_e=!!H.morphAttributes.position,Je=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color,pt=vn;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(pt=x.toneMapping);let Qt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ye=Qt!==void 0?Qt.length:0,Ae=Te.get(G),Ui=h.state.lights;if(ie===!0&&(xe===!0||A!==b)){let fi=A===b&&G.id===v;te.setState(G,A,fi)}let je=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ui.state.version||Ae.outputColorSpace!==be||B.isBatchedMesh&&Ae.batching===!1||!B.isBatchedMesh&&Ae.batching===!0||B.isBatchedMesh&&Ae.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ae.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ae.instancing===!1||!B.isInstancedMesh&&Ae.instancing===!0||B.isSkinnedMesh&&Ae.skinning===!1||!B.isSkinnedMesh&&Ae.skinning===!0||B.isInstancedMesh&&Ae.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ae.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ae.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ae.instancingMorph===!1&&B.morphTexture!==null||Ae.envMap!==Me||G.fog===!0&&Ae.fog!==ne||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==te.numPlanes||Ae.numIntersection!==te.numIntersection)||Ae.vertexAlphas!==Le||Ae.vertexTangents!==Be||Ae.morphTargets!==_e||Ae.morphNormals!==Je||Ae.morphColors!==ct||Ae.toneMapping!==pt||Ae.morphTargetsCount!==Ye)&&(je=!0):(je=!0,Ae.__version=G.version);let xi=Ae.currentProgram;je===!0&&(xi=Ur(G,N,B));let ia=!1,ai=!1,Ka=!1,mt=xi.getUniforms(),Pi=Ae.uniforms;if(Ee.useProgram(xi.program)&&(ia=!0,ai=!0,Ka=!0),G.id!==v&&(v=G.id,ai=!0),ia||b!==A){Ee.buffers.depth.getReversed()?(se.copy(A.projectionMatrix),pp(se),mp(se),mt.setValue(U,"projectionMatrix",se)):mt.setValue(U,"projectionMatrix",A.projectionMatrix),mt.setValue(U,"viewMatrix",A.matrixWorldInverse);let on=mt.map.cameraPosition;on!==void 0&&on.setValue(U,De.setFromMatrixPosition(A.matrixWorld)),Ge.logarithmicDepthBuffer&&mt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&mt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,ai=!0,Ka=!0)}if(B.isSkinnedMesh){mt.setOptional(U,B,"bindMatrix"),mt.setOptional(U,B,"bindMatrixInverse");let fi=B.skeleton;fi&&(fi.boneTexture===null&&fi.computeBoneTexture(),mt.setValue(U,"boneTexture",fi.boneTexture,R))}B.isBatchedMesh&&(mt.setOptional(U,B,"batchingTexture"),mt.setValue(U,"batchingTexture",B._matricesTexture,R),mt.setOptional(U,B,"batchingIdTexture"),mt.setValue(U,"batchingIdTexture",B._indirectTexture,R),mt.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&mt.setValue(U,"batchingColorTexture",B._colorsTexture,R));let Qa=H.morphAttributes;if((Qa.position!==void 0||Qa.normal!==void 0||Qa.color!==void 0)&&Ie.update(B,H,xi),(ai||Ae.receiveShadow!==B.receiveShadow)&&(Ae.receiveShadow=B.receiveShadow,mt.setValue(U,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Pi.envMap.value=Me,Pi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Pi.envMapIntensity.value=N.environmentIntensity),ai&&(mt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&lf(Pi,Ka),ne&&G.fog===!0&&le.refreshFogUniforms(Pi,ne),le.refreshMaterialUniforms(Pi,G,$,Z,h.state.transmissionRenderTarget[A.id]),Ca.upload(U,xd(Ae),Pi,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ca.upload(U,xd(Ae),Pi,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&mt.setValue(U,"center",B.center),mt.setValue(U,"modelViewMatrix",B.modelViewMatrix),mt.setValue(U,"normalMatrix",B.normalMatrix),mt.setValue(U,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let fi=G.uniformsGroups;for(let on=0,sn=fi.length;on<sn;on++){let Md=fi[on];D.update(Md,xi),D.bind(Md,xi)}}return xi}function lf(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function cf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,N,H){Te.get(A.texture).__webglTexture=N,Te.get(A.depthTexture).__webglTexture=H;let G=Te.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){let H=Te.get(A);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,H=0){w=A,E=N,T=H;let G=!0,B=null,ne=!1,de=!1;if(A){let Me=Te.get(A);if(Me.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Me.__hasExternalTextures)R.rebindTextures(A,Te.get(A.texture).__webglTexture,Te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let _e=A.depthTexture;if(Me.__boundDepthTexture!==_e){if(_e!==null&&Te.has(_e)&&(A.width!==_e.image.width||A.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}let Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(de=!0);let Be=Te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?B=Be[N][H]:B=Be[N],ne=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?B=Te.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[H]:B=Be,P.copy(A.viewport),k.copy(A.scissor),F=A.scissorTest}else P.copy(ye).multiplyScalar($).floor(),k.copy(ve).multiplyScalar($).floor(),F=Ce;if(Ee.bindFramebuffer(U.FRAMEBUFFER,B)&&G&&Ee.drawBuffers(A,B),Ee.viewport(P),Ee.scissor(k),Ee.setScissorTest(F),ne){let Me=Te.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,H)}else if(de){let Me=Te.get(A.texture),Le=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.__webglTexture,H||0,Le)}v=-1},this.readRenderTargetPixels=function(A,N,H,G,B,ne,de){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(be=be[de]),be){Ee.bindFramebuffer(U.FRAMEBUFFER,be);try{let Me=A.texture,Le=Me.format,Be=Me.type;if(!Ge.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-G&&H>=0&&H<=A.height-B&&U.readPixels(N,H,G,B,Ue.convert(Le),Ue.convert(Be),ne)}finally{let Me=w!==null?Te.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(U.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(A,N,H,G,B,ne,de){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(be=be[de]),be){let Me=A.texture,Le=Me.format,Be=Me.type;if(!Ge.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-G&&H>=0&&H<=A.height-B){Ee.bindFramebuffer(U.FRAMEBUFFER,be);let _e=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,_e),U.bufferData(U.PIXEL_PACK_BUFFER,ne.byteLength,U.STREAM_READ),U.readPixels(N,H,G,B,Ue.convert(Le),Ue.convert(Be),0);let Je=w!==null?Te.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(U.FRAMEBUFFER,Je);let ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await fp(U,ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,_e),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ne),U.deleteBuffer(_e),U.deleteSync(ct),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,N=null,H=0){A.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);let G=Math.pow(2,-H),B=Math.floor(A.image.width*G),ne=Math.floor(A.image.height*G),de=N!==null?N.x:0,be=N!==null?N.y:0;R.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,de,be,B,ne),Ee.unbindTexture()},this.copyTextureToTexture=function(A,N,H=null,G=null,B=0){A.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1],N=arguments[2],B=arguments[3]||0,H=null);let ne,de,be,Me,Le,Be,_e,Je,ct,pt=A.isCompressedTexture?A.mipmaps[B]:A.image;H!==null?(ne=H.max.x-H.min.x,de=H.max.y-H.min.y,be=H.isBox3?H.max.z-H.min.z:1,Me=H.min.x,Le=H.min.y,Be=H.isBox3?H.min.z:0):(ne=pt.width,de=pt.height,be=pt.depth||1,Me=0,Le=0,Be=0),G!==null?(_e=G.x,Je=G.y,ct=G.z):(_e=0,Je=0,ct=0);let Qt=Ue.convert(N.format),Ye=Ue.convert(N.type),Ae;N.isData3DTexture?(R.setTexture3D(N,0),Ae=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Ae=U.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Ae=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let Ui=U.getParameter(U.UNPACK_ROW_LENGTH),je=U.getParameter(U.UNPACK_IMAGE_HEIGHT),xi=U.getParameter(U.UNPACK_SKIP_PIXELS),ia=U.getParameter(U.UNPACK_SKIP_ROWS),ai=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,pt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Me),U.pixelStorei(U.UNPACK_SKIP_ROWS,Le),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Be);let Ka=A.isDataArrayTexture||A.isData3DTexture,mt=N.isDataArrayTexture||N.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Pi=Te.get(A),Qa=Te.get(N),fi=Te.get(Pi.__renderTarget),on=Te.get(Qa.__renderTarget);Ee.bindFramebuffer(U.READ_FRAMEBUFFER,fi.__webglFramebuffer),Ee.bindFramebuffer(U.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let sn=0;sn<be;sn++)Ka&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(A).__webglTexture,B,Be+sn),A.isDepthTexture?(mt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(N).__webglTexture,B,ct+sn),U.blitFramebuffer(Me,Le,ne,de,_e,Je,ne,de,U.DEPTH_BUFFER_BIT,U.NEAREST)):mt?U.copyTexSubImage3D(Ae,B,_e,Je,ct+sn,Me,Le,ne,de):U.copyTexSubImage2D(Ae,B,_e,Je,ct+sn,Me,Le,ne,de);Ee.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else mt?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Ae,B,_e,Je,ct,ne,de,be,Qt,Ye,pt.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Ae,B,_e,Je,ct,ne,de,be,Qt,pt.data):U.texSubImage3D(Ae,B,_e,Je,ct,ne,de,be,Qt,Ye,pt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,_e,Je,ne,de,Qt,Ye,pt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,_e,Je,pt.width,pt.height,Qt,pt.data):U.texSubImage2D(U.TEXTURE_2D,B,_e,Je,ne,de,Qt,Ye,pt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ui),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,je),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xi),U.pixelStorei(U.UNPACK_SKIP_ROWS,ia),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ai),B===0&&N.generateMipmaps&&U.generateMipmap(Ae),Ee.unbindTexture()},this.copyTextureToTexture3D=function(A,N,H=null,G=null,B=0){return A.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,A=arguments[2],N=arguments[3],B=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,N,H,G,B)},this.initRenderTarget=function(A){Te.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Ee.unbindTexture()},this.resetState=function(){E=0,T=0,w=null,Ee.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}},Po=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ro=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ul,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zt=new O,vr=class n{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),a=tt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),a=tt(a,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xr=class extends ji{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar=new O,xa=new O,ba=new O,Ma=new ke,rr=new ke,Xu=new gt,ao=new O,or=new O,ro=new O,_u=new ke,Ys=new ke,yu=new ke,Lo=class extends Wt{constructor(e=new xr){if(super(),this.isSprite=!0,this.type="Sprite",va===void 0){va=new Ti;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Io(t,5);va.setIndex([0,1,2,0,2,3]),va.setAttribute("position",new vr(i,3,0,!1)),va.setAttribute("uv",new vr(i,2,3,!1))}this.geometry=va,this.material=e,this.center=new ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xa.setFromMatrixScale(this.matrixWorld),Xu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ba.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xa.multiplyScalar(-ba.z);let i=this.material.rotation,a,r;i!==0&&(r=Math.cos(i),a=Math.sin(i));let o=this.center;oo(ao.set(-.5,-.5,0),ba,o,xa,a,r),oo(or.set(.5,-.5,0),ba,o,xa,a,r),oo(ro.set(.5,.5,0),ba,o,xa,a,r),_u.set(0,0),Ys.set(1,0),yu.set(1,1);let s=e.ray.intersectTriangle(ao,or,ro,!1,ar);if(s===null&&(oo(or.set(-.5,.5,0),ba,o,xa,a,r),Ys.set(0,1),s=e.ray.intersectTriangle(ao,ro,or,!1,ar),s===null))return;let l=e.ray.origin.distanceTo(ar);l<e.near||l>e.far||t.push({distance:l,point:ar.clone(),uv:mn.getInterpolation(ar,ao,or,ro,_u,Ys,yu,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Mn=class extends ci{constructor(e,t,i,a,r,o,s,l,d){super(e,t,i,a,r,o,s,l,d),this.isCanvasTexture=!0,this.needsUpdate=!0}},Do=class n extends Ti{constructor(e=1,t=32,i=16,a=0,r=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:r,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+s,Math.PI),d=0,c=[],u=new O,f=new O,p=[],g=[],M=[],m=[];for(let h=0;h<=i;h++){let y=[],S=h/i,x=0;h===0&&o===0?x=.5/t:h===i&&l===Math.PI&&(x=-.5/t);for(let L=0;L<=t;L++){let E=L/t;u.x=-e*Math.cos(a+E*r)*Math.sin(o+S*s),u.y=e*Math.cos(o+S*s),u.z=e*Math.sin(a+E*r)*Math.sin(o+S*s),g.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),m.push(E+x,1-S),y.push(d++)}c.push(y)}for(let h=0;h<i;h++)for(let y=0;y<t;y++){let S=c[h][y+1],x=c[h][y],L=c[h+1][y],E=c[h+1][y+1];(h!==0||o>0)&&p.push(S,x,E),(h!==i-1||l<Math.PI)&&p.push(x,L,E)}this.setIndex(p),this.setAttribute("position",new li(g,3)),this.setAttribute("normal",new li(M,3)),this.setAttribute("uv",new li(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ki=class extends ji{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},No=class extends ji{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};Na=class{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,a=t[i],r=t[i-1];i:{e:{let o;t:{n:if(!(e<a)){for(let s=i+2;;){if(a===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(r=a,a=t[++i],e<a)break e}o=t.length;break t}if(!(e>=r)){let s=t[1];e<s&&(i=2,r=s);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break i}for(;i<o;){let s=i+o>>>1;e<t[s]?o=s:i=s+1}if(a=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,a)}return this.interpolate_(i,r,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,r=e*a;for(let o=0;o!==a;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tc=class extends Na{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Td,endingEnd:Td}}intervalChanged_(e,t,i){let a=this.parameterPositions,r=e-2,o=e+1,s=a[r],l=a[o];if(s===void 0)switch(this.getSettings_().endingStart){case Cd:r=e,s=2*t-i;break;case Ed:r=a.length-2,s=t+a[r]-a[r+1];break;default:r=e,s=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cd:o=e,l=2*i-t;break;case Ed:o=1,l=i+a[1]-a[0];break;default:o=e-1,l=t}let d=(i-t)*.5,c=this.valueSize;this._weightPrev=d/(t-s),this._weightNext=d/(l-i),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(e,t,i,a){let r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=e*s,d=l-s,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(a-t),M=g*g,m=M*g,h=-f*m+2*f*M-f*g,y=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*M+.5*g,x=p*m-p*M;for(let L=0;L!==s;++L)r[L]=h*o[c+L]+y*o[d+L]+S*o[l+L]+x*o[u+L];return r}},ic=class extends Na{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){let r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=e*s,d=l-s,c=(i-t)/(a-t),u=1-c;for(let f=0;f!==s;++f)r[f]=o[d+f]*u+o[l+f]*c;return r}},nc=class extends Na{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}},Ci=class{constructor(e,t,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=so(t,this.TimeBufferType),this.values=so(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:so(e.times,Array),values:so(e.values,Array)};let a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case po:t=this.InterpolantFactoryMethodDiscrete;break;case Fl:t=this.InterpolantFactoryMethodLinear;break;case Ss:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return po;case this.InterpolantFactoryMethodLinear:return Fl;case this.InterpolantFactoryMethodSmooth:return Ss}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e}return this}trim(e,t){let i=this.times,a=i.length,r=0,o=a-1;for(;r!==a&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==a){r>=o&&(o=Math.max(o,1),r=o-1);let s=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*s,o*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,a=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let s=0;s!==r;s++){let l=i[s];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,l,o),e=!1;break}o=l}if(a!==void 0&&cx(a))for(let s=0,l=a.length;s!==l;++s){let d=a[s];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,d),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Ss,r=e.length-1,o=1;for(let s=1;s<r;++s){let l=!1,d=e[s],c=e[s+1];if(d!==c&&(s!==1||d!==e[0]))if(a)l=!0;else{let u=s*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let M=t[u+g];if(M!==t[f+g]||M!==t[p+g]){l=!0;break}}}if(l){if(s!==o){e[o]=e[s];let u=s*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let s=r*i,l=o*i,d=0;d!==i;++d)t[l+d]=t[s+d];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,a=new i(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}};Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=Fl;$n=class extends Ci{constructor(e,t,i){super(e,t,i)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=po;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;ac=class extends Ci{};ac.prototype.ValueTypeName="color";rc=class extends Ci{};rc.prototype.ValueTypeName="number";oc=class extends Na{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){let r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=(i-t)/(a-t),d=e*s;for(let c=d+s;d!==c;d+=4)Li.slerpFlat(r,0,o,d-s,o,d,l);return r}},Bo=class extends Ci{InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}};Bo.prototype.ValueTypeName="quaternion";Bo.prototype.InterpolantFactoryMethodSmooth=void 0;Wn=class extends Ci{constructor(e,t,i){super(e,t,i)}};Wn.prototype.ValueTypeName="string";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=po;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;sc=class extends Ci{};sc.prototype.ValueTypeName="vector";lc=class{constructor(e,t,i){let a=this,r=!1,o=0,s=0,l,d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){s++,r===!1&&a.onStart!==void 0&&a.onStart(c,o,s),r=!0},this.itemEnd=function(c){o++,a.onProgress!==void 0&&a.onProgress(c,o,s),o===s&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(c){a.onError!==void 0&&a.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return d.push(c,u),this},this.removeHandler=function(c){let u=d.indexOf(c);return u!==-1&&d.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=d.length;u<f;u+=2){let p=d[u],g=d[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}},dx=new lc,cc=class{constructor(e){this.manager=e!==void 0?e:dx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(a,r){i.load(e,a,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};cc.DEFAULT_MATERIAL_NAME="__DEFAULT";Fo=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Uo=class extends Fo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},js=new gt,Su=new O,Au=new O,dc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Su.setFromMatrixPosition(e.matrixWorld),t.position.copy(Su),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),js.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(js),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(js)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uc=class extends dc{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oo=class extends Fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new uc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ko=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Tu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Tc="\\[\\]\\.:\\/",ux=new RegExp("["+Tc+"]","g"),Cc="[^"+Tc+"]",hx="[^"+Tc.replace("\\.","")+"]",fx=/((?:WC+[\/:])*)/.source.replace("WC",Cc),px=/(WCOD+)?/.source.replace("WCOD",hx),mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),gx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),vx=new RegExp("^"+fx+px+mx+gx+"$"),xx=["material","materials","bones","map"],hc=class{constructor(e,t,i){let a=i||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,r=i.length;a!==r;++a)i[a].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ux,"")}static parseTrackName(e){let t=vx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let r=i.nodeName.substring(a+1);xx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let s=r[o];if(s.name===t||s.uuid===t)return s;let l=i(s.children);if(l)return l}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)e[t++]=i[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let a=0,r=i.length;a!==r;++a)i[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,a=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===d){d=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}let o=e[a];if(o===void 0){let d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+a+" but it wasn't found.",e);return}let s=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=hc;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];mb=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170")});function yx(n,e=""){let t=_x[n];return t?`<svg class="ic ${e}" viewBox="0 0 48 48" aria-hidden="true" stroke="${I.ink}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">${t}</svg>`:""}function Sx(n){return Pc[n]||Pc[n.replace(/\uFE0F/g,"")]||Pc[n+"\uFE0F"]||null}function Rc(n){let e=n.nodeValue;if(!e||(_r.lastIndex=0,!_r.test(e)))return;let t=n.parentElement;if(!t||t.closest(Ku))return;_r.lastIndex=0;let i=document.createDocumentFragment(),a=0,r;for(;r=_r.exec(e);){if(Yu.has(r[0]))continue;r.index>a&&i.appendChild(document.createTextNode(e.slice(a,r.index)));let o=Sx(r[0]);if(o){let s=document.createElement("template");s.innerHTML=yx(o),i.appendChild(s.content.firstChild)}a=r.index+r[0].length}a<e.length&&i.appendChild(document.createTextNode(e.slice(a))),t.replaceChild(i,n)}function Zu(n){if(!n)return;if(n.nodeType===3)return Rc(n);if(n.nodeType!==1||n.matches?.(Ku))return;let e=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),t=[],i;for(;i=e.nextNode();)t.push(i);t.forEach(Rc)}function Qu(n=document.body){Zu(n);let e=new MutationObserver(t=>{for(let i of t)i.type==="characterData"?Rc(i.target):i.addedNodes.forEach(Zu)});return e.observe(n,{childList:!0,subtree:!0,characterData:!0}),e}var bx,I,_n,Mx,Ju,wc,_x,Pc,_r,Yu,ju,Ku,Ic=bi(()=>{bx={ink:"#1b2340",green:"#2fb14b",greenD:"#1d8a39",gold:"#ffc425",goldD:"#e8960c",blue:"#2f80ed",blueD:"#1e5fbf",sky:"#9fd3ff",red:"#ec4b47",orange:"#ff8a2a",cream:"#fff4d9",white:"#ffffff",brick:"#c9693f",wood:"#a7693e",gray:"#b3bccd",grayD:"#7d879c"},I=bx,_n=(n,e,t,i,a=5,r=-90)=>{let o="";for(let s=0;s<a*2;s++){let l=(r+s*180/a)*Math.PI/180,d=s%2?i:t;o+=(s?"L":"M")+(n+Math.cos(l)*d).toFixed(1)+" "+(e+Math.sin(l)*d).toFixed(1)}return o+"Z"},Mx=(n,e,t,i,a=8)=>{let r="";for(let o=0;o<a*4;o++){let s=o/(a*4)*Math.PI*2+.2,l=o%4<2?t:i;r+=(o?"L":"M")+(n+Math.cos(s)*l).toFixed(1)+" "+(e+Math.sin(s)*l).toFixed(1)}return r+"Z"},Ju=(n,e=I.cream)=>`<path d="M8 23L24 9L40 23Z" fill="${n}"/><path d="M12 22H36V41H12Z" fill="${e}"/><path d="M20 41V31H28V41" fill="${I.wood}"/><path d="M5 24L24 7L43 24" fill="none"/>`,wc=n=>`<path d="M6 33V26L11 24L15 16H32L37 24L42 26V33Z" fill="${n}"/><path d="M17 18H23V24H14ZM26 18H31L34 24H26Z" fill="${I.sky}" stroke-width="2.5"/><circle cx="14" cy="34" r="5" fill="${I.ink}"/><circle cx="34" cy="34" r="5" fill="${I.ink}"/><circle cx="14" cy="34" r="1.6" fill="${I.gray}" stroke="none"/><circle cx="34" cy="34" r="1.6" fill="${I.gray}" stroke="none"/>`,_x={coin:`<circle cx="24" cy="24" r="18" fill="${I.gold}"/><circle cx="24" cy="24" r="11.5" fill="none" stroke="${I.goldD}" stroke-width="3"/><path d="${_n(24,24,7,3.2)}" fill="${I.goldD}" stroke="none"/><path d="M13 16a13 13 0 0 1 7-5" stroke="#fff" stroke-opacity=".8" fill="none"/>`,cash:`<path d="M4 14H44V36H4Z" fill="${I.green}"/><circle cx="24" cy="25" r="6" fill="${I.cream}" stroke-width="2.5"/><path d="M9 19V31M39 19V31" stroke="${I.greenD}"/>`,bolt:`<path d="M28 3L9 27H22L18 45L39 19H26Z" fill="${I.orange}"/><path d="M26 9L16 23" stroke="#fff" stroke-opacity=".7"/>`,star:`<path d="${_n(24,25,20,9.5)}" fill="${I.gold}"/><path d="M17 20L21 19" stroke="#fff" stroke-opacity=".8"/>`,starOff:`<path d="${_n(24,25,20,9.5)}" fill="${I.gray}"/>`,xp:`<path d="${_n(24,25,20,9.5)}" fill="${I.blue}"/><path d="M17 20L21 19" stroke="#fff" stroke-opacity=".8"/>`,sparkle:`<path d="M24 4C26 18 30 22 44 24C30 26 26 30 24 44C22 30 18 26 4 24C18 22 22 18 24 4Z" fill="${I.gold}"/>`,trophy:`<path d="M13 6H35V18C35 26 30 30 24 30C18 30 13 26 13 18Z" fill="${I.gold}"/><path d="M13 10H6C6 19 10 22 14 22M35 10H42C42 19 38 22 34 22" fill="none"/><path d="M21 30V35H27V30" fill="${I.goldD}"/><path d="M14 36H34V43H14Z" fill="${I.blue}"/><path d="M18 11V19" stroke="#fff" stroke-opacity=".8"/>`,medal:`<path d="M12 4H22L27 19H17ZM36 4H26L21 19H31Z" fill="${I.blue}"/><path d="M26 4H36L31 19H21Z" fill="${I.red}"/><circle cx="24" cy="31" r="12" fill="${I.gold}"/><path d="${_n(24,31,6.5,3)}" fill="${I.goldD}" stroke="none"/>`,crown:`<path d="M5 15L14 25L24 9L34 25L43 15L39 38H9Z" fill="${I.gold}"/><path d="M9 38H39V43H9Z" fill="${I.goldD}"/><circle cx="24" cy="30" r="3.5" fill="${I.red}" stroke-width="2"/><circle cx="14" cy="32" r="2.5" fill="${I.blue}" stroke-width="2"/><circle cx="34" cy="32" r="2.5" fill="${I.blue}" stroke-width="2"/>`,house:Ju(I.red),houseG:Ju(I.green),mansion:`<path d="M6 20H16V42H6ZM32 20H42V42H32Z" fill="${I.cream}"/><path d="M4 21L11 12L18 21ZM30 21L37 12L44 21Z" fill="${I.gold}"/><path d="M15 26H33V42H15Z" fill="${I.cream}"/><path d="M13 27L24 17L35 27Z" fill="${I.red}"/><path d="M21 42V34H27V42" fill="${I.wood}"/>`,houses:`<path d="M3 26L14 17L25 26Z" fill="${I.blue}"/><path d="M6 25H22V41H6Z" fill="${I.cream}"/><path d="M22 21L33 11L44 21Z" fill="${I.red}"/><path d="M25 20H41V41H25Z" fill="${I.cream}"/><path d="M30 41V32H36V41" fill="${I.wood}"/><path d="M11 30H16V35H11Z" fill="${I.sky}" stroke-width="2"/>`,hut:`<path d="M7 24L24 10L41 24Z" fill="${I.wood}"/><path d="M11 23H37V41H11Z" fill="${I.gray}"/><path d="M20 41V31H28V41" fill="${I.ink}"/><path d="M14 27L18 31M33 27L30 33" stroke-width="2.5"/>`,palace:`<path d="M8 17L24 7L40 17Z" fill="${I.gold}"/><path d="M8 17H40V21H8Z" fill="${I.cream}"/><path d="M11 21H16V37H11ZM21.5 21H26.5V37H21.5ZM32 21H37V37H32Z" fill="${I.white}"/><path d="M5 37H43V43H5Z" fill="${I.green}"/><circle cx="24" cy="13" r="2" fill="${I.blue}" stroke-width="2"/>`,city:`<path d="M5 43V22H16V43Z" fill="${I.blue}"/><path d="M16 43V8H30V43Z" fill="${I.gray}"/><path d="M30 43V17H43V43Z" fill="${I.green}"/><path d="M20 13H26M20 19H26M20 25H26M20 31H26M9 27H12M9 33H12M34 22H39M34 28H39" stroke="${I.gold}" stroke-width="2.5"/><path d="M3 43H45" fill="none"/>`,crane:`<path d="M12 43V8H17V43Z" fill="${I.gold}"/><path d="M8 8H42V13H8Z" fill="${I.gold}"/><path d="M36 13V24" fill="none"/><path d="M31 24H41V30H31Z" fill="${I.brick}"/><path d="M6 43H23" fill="none"/><path d="M12 13L17 20M17 20L12 27M12 27L17 34" stroke-width="2"/>`,hammer:`<path d="M22 20L36 42L41 39L27 17Z" fill="${I.wood}"/><path d="M8 13L22 5L31 10L28 15L22 13L14 22Z" fill="${I.gray}"/>`,brick:`<path d="M4 10H44V40H4Z" fill="${I.brick}"/><path d="M4 20H44M4 30H44M17 10V20M33 10V20M10 20V30M25 20V30M40 20V30M17 30V40M33 30V40" stroke="${I.cream}" stroke-width="2.5"/><path d="M4 10H44V40H4Z" fill="none"/>`,rock:`<path d="M5 37L10 20L22 11L36 15L43 30L38 40H9Z" fill="${I.gray}"/><path d="M14 22L21 17" stroke="#fff" stroke-opacity=".7"/>`,road:`<path d="M14 4H34L44 44H4Z" fill="${I.grayD}"/><path d="M24 8V14M24 20V27M24 33V41" stroke="${I.gold}" stroke-width="3.5"/>`,broom:`<path d="M30 3L35 5.5L26 26L21 23.5Z" fill="${I.wood}"/><path d="M15 21L31 28L27 44H5Z" fill="${I.gold}"/><path d="M12 32L10 43M18 33L16 44M23 34L22 44" stroke="${I.goldD}" stroke-width="2"/>`,tree:`<path d="M21 30H27V44H21Z" fill="${I.wood}"/><circle cx="24" cy="19" r="15" fill="${I.green}"/><path d="M15 15a9 9 0 0 1 6-6" stroke="#fff" stroke-opacity=".7" fill="none"/>`,palm:`<path d="M22 44C22 34 23 26 26 18L30 19C27 27 27 35 28 44Z" fill="${I.wood}"/><path d="M27 17C18 9 9 12 5 19C13 15 20 16 27 17ZM27 17C34 8 41 9 45 14C38 12 32 14 27 17ZM27 17C24 9 25 4 30 2C30 8 29 12 27 17ZM27 17C35 18 41 24 42 30C36 25 31 21 27 17Z" fill="${I.green}"/>`,sprout:`<path d="M24 44V22" fill="none"/><path d="M24 26C24 16 18 10 7 10C7 20 13 26 24 26Z" fill="${I.green}"/><path d="M24 22C24 12 30 7 41 7C41 17 35 22 24 22Z" fill="${I.green}"/><path d="M10 44H38V38H10Z" fill="${I.wood}"/>`,bag:`<path d="M8 16H40L37 44H11Z" fill="${I.green}"/><path d="M17 20V12C17 4 31 4 31 12V20" fill="none"/><path d="M13 22L14 38" stroke="#fff" stroke-opacity=".6"/>`,cart:`<path d="M3 7H10L15 31H38L43 14H12" fill="${I.blue}"/><path d="M15 31L13 37H39" fill="none"/><circle cx="17" cy="41" r="3.5" fill="${I.ink}"/><circle cx="35" cy="41" r="3.5" fill="${I.ink}"/>`,store:`<path d="M7 20H41V43H7Z" fill="${I.cream}"/><path d="M4 9H44L42 20C40 23 36 23 34.5 20C33 23 28 23 26.5 20C25 23 20 23 18.5 20C17 23 12 23 10.5 20C9 23 5 23 4 20Z" fill="${I.red}"/><path d="M14 9V20M24 9V20M34 9V20" stroke="${I.white}" stroke-width="3"/><path d="M18 43V30H30V43" fill="${I.blue}"/>`,briefcase:`<path d="M5 15H43V41H5Z" fill="${I.wood}"/><path d="M17 15V9H31V15" fill="none"/><path d="M5 25H43" fill="none"/><path d="M20 22H28V29H20Z" fill="${I.gold}" stroke-width="2.5"/>`,chart:`<path d="M6 42H42" fill="none"/><path d="M9 30H16V42H9Z" fill="${I.blue}"/><path d="M20.5 22H27.5V42H20.5Z" fill="${I.gold}"/><path d="M32 13H39V42H32Z" fill="${I.green}"/><path d="M8 19L19 10L26 15L38 4M31 4H38V11" fill="none" stroke="${I.red}" stroke-width="3.5"/>`,clipboard:`<path d="M8 8H40V44H8Z" fill="${I.wood}"/><path d="M12 12H36V40H12Z" fill="${I.cream}" stroke-width="2"/><path d="M17 4H31V12H17Z" fill="${I.gray}"/><path d="M16 21L19 24L24 18M16 32L19 35L24 29" stroke="${I.green}" fill="none"/><path d="M28 22H33M28 33H33" stroke="${I.grayD}" stroke-width="2.5"/>`,gear:`<path d="${Mx(24,24,20,15)}" fill="${I.gray}"/><circle cx="24" cy="24" r="6.5" fill="${I.cream}"/>`,help:`<circle cx="24" cy="24" r="19" fill="${I.blue}"/><path d="M18 18C18 11 30 11 30 18C30 23 24 23 24 28" stroke="#fff" stroke-width="4.5" fill="none"/><circle cx="24" cy="35" r="2.6" fill="#fff" stroke="none"/>`,pin:`<path d="M24 45C24 45 9 29 9 19A15 15 0 0 1 39 19C39 29 24 45 24 45Z" fill="${I.red}"/><circle cx="24" cy="19" r="6" fill="${I.white}"/>`,lock:`<path d="M15 21V14C15 4 33 4 33 14V21" fill="none" stroke-width="5"/><path d="M15 21V14C15 4 33 4 33 14V21" fill="none" stroke="${I.gray}" stroke-width="2"/><path d="M9 21H39V43H9Z" fill="${I.gold}"/><circle cx="24" cy="30" r="3" fill="${I.ink}" stroke="none"/><path d="M24 31V37" stroke-width="3.5"/>`,check:`<circle cx="24" cy="24" r="19" fill="${I.green}"/><path d="M14 24L21 31L34 17" stroke="#fff" stroke-width="5" fill="none"/>`,close:`<circle cx="24" cy="24" r="19" fill="${I.red}"/><path d="M17 17L31 31M31 17L17 31" stroke="#fff" stroke-width="5"/>`,fire:`<path d="M24 45C13 45 8 37 9 29C10 21 17 17 18 6C25 11 27 17 27 21C29 18 31 16 32 13C38 19 40 25 39 31C38 40 32 45 24 45Z" fill="${I.orange}"/><path d="M24 44C19 44 16 40 17 36C18 32 22 30 23 25C27 29 31 33 30 37C30 41 28 44 24 44Z" fill="${I.gold}" stroke-width="2.5"/>`,gift:`<path d="M6 17H42V26H6Z" fill="${I.red}"/><path d="M9 26H39V44H9Z" fill="${I.red}"/><path d="M21 17H27V44H21Z" fill="${I.gold}"/><path d="M24 17C20 7 11 8 13 14C14 17 20 17 24 17C28 17 34 17 35 14C37 8 28 7 24 17Z" fill="${I.gold}"/>`,party:`<path d="M6 43L17 14L34 31Z" fill="${I.gold}"/><path d="M11 30L22 38M14 22L28 34" stroke="${I.red}" stroke-width="3"/><path d="M26 10L29 4M35 18L43 15M33 9L38 6" stroke="${I.blue}" stroke-width="3"/><circle cx="40" cy="26" r="2.5" fill="${I.green}" stroke-width="2"/>`,car:wc(I.red),carB:wc(I.blue),taxi:wc(I.gold),bike:`<circle cx="12" cy="31" r="8" fill="none"/><circle cx="36" cy="31" r="8" fill="none"/><path d="M12 31L19 18H31L36 31M19 18L24 31H12M31 18L28 11H33M24 31L31 18" fill="none" stroke="${I.blue}" stroke-width="3.5"/><path d="M17 13H23" stroke-width="3.5"/>`,rocket:`<path d="M24 3C33 10 34 24 30 34H18C14 24 15 10 24 3Z" fill="${I.white}"/><path d="M18 34L11 40L14 27ZM30 34L37 40L34 27Z" fill="${I.red}"/><circle cx="24" cy="18" r="4.5" fill="${I.blue}"/><path d="M20 35L24 45L28 35Z" fill="${I.orange}"/>`,team:`<circle cx="16" cy="15" r="7" fill="${I.green}"/><path d="M3 42C3 30 9 25 16 25C23 25 29 30 29 42Z" fill="${I.green}"/><circle cx="32" cy="17" r="7" fill="${I.blue}"/><path d="M19 43C19 32 25 27 32 27C39 27 45 32 45 43Z" fill="${I.blue}"/>`,sign:`<path d="M21 22H27V44H21Z" fill="${I.wood}"/><path d="M5 6H43V24H5Z" fill="${I.gold}"/><path d="M11 12H37M11 18H29" stroke="${I.goldD}" stroke-width="3"/>`,idcard:`<path d="M3 9H45V39H3Z" fill="${I.blue}"/><path d="M8 15H20V31H8Z" fill="${I.cream}" stroke-width="2.5"/><circle cx="14" cy="21" r="3" fill="${I.gold}" stroke-width="2"/><path d="M25 17H39M25 24H39M25 31H34" stroke="#fff" stroke-width="3"/>`,shield:`<path d="M24 3L41 9V22C41 33 33 41 24 45C15 41 7 33 7 22V9Z" fill="${I.blue}"/><path d="${_n(24,23,9,4)}" fill="${I.gold}" stroke-width="2"/>`,hero:`<path d="M24 3L41 9V22C41 33 33 41 24 45C15 41 7 33 7 22V9Z" fill="${I.red}"/><path d="${_n(24,23,10,4.5)}" fill="${I.gold}" stroke-width="2"/>`,clock:`<circle cx="24" cy="26" r="17" fill="${I.white}"/><path d="M24 15V26L31 31" fill="none"/><path d="M19 5H29" stroke-width="4"/><path d="M24 5V9" fill="none"/>`,gamepad:`<path d="M8 16H40C44 16 46 22 45 30C44 38 39 41 35 36L32 32H16L13 36C9 41 4 38 3 30C2 22 4 16 8 16Z" fill="${I.blue}"/><path d="M13 21V29M9 25H17" stroke="#fff" stroke-width="3.5"/><circle cx="32" cy="22" r="2.6" fill="${I.gold}" stroke-width="2"/><circle cx="37" cy="27" r="2.6" fill="${I.red}" stroke-width="2"/>`,phone:`<path d="M13 3H35V45H13Z" fill="${I.ink}"/><path d="M16 8H32V37H16Z" fill="${I.sky}" stroke="none"/><circle cx="24" cy="41" r="1.8" fill="#fff" stroke="none"/>`,play:`<path d="M13 7L39 24L13 41Z" fill="${I.gold}"/>`,arrow:'<path d="M6 24H38M27 12L39 24L27 36" fill="none" stroke="currentColor" stroke-width="6"/>',arrowL:'<path d="M42 24H10M21 12L9 24L21 36" fill="none" stroke="currentColor" stroke-width="6"/>',heart:`<path d="M24 43C11 33 4 26 4 17C4 10 10 5 16 5C20 5 23 8 24 11C25 8 28 5 32 5C38 5 44 10 44 17C44 26 37 33 24 43Z" fill="${I.red}"/><path d="M11 13a6 6 0 0 1 5-4" stroke="#fff" stroke-opacity=".7" fill="none"/>`,sun:`<circle cx="24" cy="24" r="10" fill="${I.gold}"/><path d="M24 3V8M24 40V45M3 24H8M40 24H45M9 9L12.5 12.5M35.5 35.5L39 39M9 39L12.5 35.5M35.5 12.5L39 9" stroke="${I.goldD}" stroke-width="3.5"/>`,moon:`<path d="M30 5C19 7 13 17 15 27C17 37 27 43 37 40C30 46 15 45 8 35C1 24 7 7 20 4C23 3 27 3 30 5Z" fill="${I.blue}"/>`,sound:`<path d="M5 18H14L25 8V40L14 30H5Z" fill="${I.blue}"/><path d="M31 17C35 21 35 27 31 31M36 12C43 19 43 29 36 36" fill="none" stroke-width="3.5"/>`,mute:`<path d="M5 18H14L25 8V40L14 30H5Z" fill="${I.grayD}"/><path d="M32 18L43 30M43 18L32 30" stroke="${I.red}" stroke-width="4"/>`,box:`<path d="M24 4L43 13V35L24 44L5 35V13Z" fill="${I.wood}"/><path d="M5 13L24 22L43 13M24 22V44" fill="none"/><path d="M14 8.5L33 17.5" stroke="${I.gold}" stroke-width="4"/>`,cloche:`<path d="M6 34C6 22 14 15 24 15C34 15 42 22 42 34Z" fill="${I.gray}"/><path d="M3 35H45V40H3Z" fill="${I.grayD}"/><circle cx="24" cy="11" r="3.5" fill="${I.gray}"/><path d="M13 29C13 24 17 21 21 20" stroke="#fff" stroke-opacity=".8" fill="none"/>`,brush:`<path d="M6 8H36V20H6Z" fill="${I.blue}"/><path d="M36 14H42V27H22V35" fill="none"/><path d="M18 34H26V45H18Z" fill="${I.wood}"/><path d="M10 12H24" stroke="#fff" stroke-opacity=".7"/>`,helmet:`<path d="M5 32C5 19 13 10 24 10C35 10 43 19 43 32Z" fill="${I.gold}"/><path d="M2 32H46V38H2Z" fill="${I.goldD}"/><path d="M20 10H28V22H20Z" fill="${I.gold}"/>`,fhelmet:`<path d="M5 32C5 19 13 10 24 10C35 10 43 19 43 32Z" fill="${I.red}"/><path d="M2 32H46V38H2Z" fill="${I.red}"/><path d="${_n(24,22,7,3)}" fill="${I.gold}" stroke-width="2"/>`,card:`<path d="M3 10H45V38H3Z" fill="${I.green}"/><path d="M3 17H45V23H3Z" fill="${I.ink}" stroke="none"/><path d="M9 30H20" stroke="#fff" stroke-width="3"/><path d="M32 28H39V33H32Z" fill="${I.gold}" stroke-width="2"/>`,pan:`<circle cx="20" cy="24" r="15" fill="${I.ink}"/><path d="M34 22L46 18V24L35 27Z" fill="${I.wood}"/><path d="M12 24C12 18 17 15 21 17C26 15 29 20 27 25C26 31 19 32 15 30C13 29 12 27 12 24Z" fill="${I.white}" stroke-width="2"/><circle cx="20" cy="24" r="4" fill="${I.gold}" stroke-width="2"/>`,wrench:`<path d="M30 4C24 4 20 10 22 16L5 33C3 35 3 39 5 41C7 43 11 43 13 41L30 24C36 26 42 22 42 16L35 21L29 19L27 13L32 6C31 5 31 4 30 4Z" fill="${I.gray}"/>`,book:`<path d="M6 8H22C24 8 24 10 24 10V43C24 41 22 40 20 40H6Z" fill="${I.blue}"/><path d="M42 8H26C24 8 24 10 24 10V43C24 41 26 40 28 40H42Z" fill="${I.green}"/><path d="M11 16H19M29 16H37M11 23H19" stroke="#fff" stroke-width="2.5"/>`,medkit:`<path d="M4 14H44V42H4Z" fill="${I.white}"/><path d="M16 14V8H32V14" fill="none"/><path d="M20 19H28V24H33V32H28V37H20V32H15V24H20Z" fill="${I.red}" stroke-width="2.5"/>`,laptop:`<path d="M8 8H40V32H8Z" fill="${I.blue}"/><path d="M3 32H45L42 40H6Z" fill="${I.gray}"/><path d="M14 16L18 20L14 24M22 24H30" stroke="#fff" stroke-width="3" fill="none"/>`,news:`<path d="M5 6H38V42H9C7 42 5 40 5 38Z" fill="${I.cream}"/><path d="M38 14H43V38C43 40 41 42 38 42" fill="${I.gray}"/><path d="M10 12H33V22H10Z" fill="${I.blue}" stroke-width="2"/><path d="M10 28H33M10 35H27" stroke="${I.grayD}" stroke-width="3"/>`,ruler:`<path d="M5 43V5L43 43Z" fill="${I.gold}"/><path d="M12 25V36H23Z" fill="${I.cream}" stroke-width="2.5"/><path d="M5 12H10M5 19H8M5 26H10M5 33H8" stroke-width="2.5"/>`,scale:`<path d="M24 6V40M10 12H38M14 40H34" fill="none" stroke-width="3.5"/><path d="M4 26L10 12L16 26ZM32 26L38 12L44 26Z" fill="none" stroke-width="2.5"/><path d="M3 26H17C17 31 3 31 3 26ZM31 26H45C45 31 31 31 31 26Z" fill="${I.gold}"/><circle cx="24" cy="7" r="3" fill="${I.gold}" stroke-width="2.5"/>`,gavel:`<path d="M20 22L38 40L42 36L24 18Z" fill="${I.wood}"/><path d="M8 18L20 6L28 14L16 26Z" fill="${I.wood}"/><path d="M6 44H28V38H6Z" fill="${I.gray}"/>`,ball:`<circle cx="24" cy="24" r="19" fill="${I.white}"/><path d="M24 15L31 20L28 28H20L17 20Z" fill="${I.ink}" stroke-width="2"/><path d="M24 15V6M31 20L41 17M28 28L33 37M20 28L15 37M17 20L7 17" fill="none" stroke-width="2.5"/>`,ballot:`<path d="M14 4H34V24H14Z" fill="${I.white}"/><path d="M18 14L22 18L30 9" stroke="${I.green}" fill="none"/><path d="M5 22H43V44H5Z" fill="${I.blue}"/><path d="M12 26H36" stroke-width="3.5"/>`,corn:`<path d="M24 4C31 8 32 22 28 36H20C16 22 17 8 24 4Z" fill="${I.gold}"/><path d="M20 12L28 12M19 18H29M19 24H29M20 30H28" stroke="${I.goldD}" stroke-width="2"/><path d="M20 36C14 30 10 26 9 20C15 24 19 28 22 36ZM28 36C34 30 38 26 39 20C33 24 29 28 26 36Z" fill="${I.green}"/><path d="M21 36H27V44H21Z" fill="${I.green}"/>`,pool:`<path d="M4 12H44V40H4Z" fill="${I.sky}"/><path d="M4 22C9 18 14 26 19 22C24 18 29 26 34 22C39 18 44 22 44 22M4 31C9 27 14 35 19 31C24 27 29 35 34 31C39 27 44 31 44 31" fill="none" stroke="${I.blue}" stroke-width="3"/><path d="M4 12H44V40H4Z" fill="none"/>`,paw:`<path d="M24 26C33 26 38 34 36 39C34 44 28 41 24 41C20 41 14 44 12 39C10 34 15 26 24 26Z" fill="${I.wood}"/><circle cx="11" cy="20" r="4.5" fill="${I.wood}"/><circle cx="19" cy="12" r="4.5" fill="${I.wood}"/><circle cx="29" cy="12" r="4.5" fill="${I.wood}"/><circle cx="37" cy="20" r="4.5" fill="${I.wood}"/>`,popcorn:`<path d="M10 18H38L34 44H14Z" fill="${I.red}"/><path d="M19 18L20 44M29 18L28 44" stroke="${I.white}" stroke-width="3"/><path d="M9 18C6 12 12 7 16 10C17 4 25 3 26 8C30 4 37 7 35 12C40 12 41 18 38 18Z" fill="${I.cream}"/>`,burger:`<path d="M5 22C5 12 13 7 24 7C35 7 43 12 43 22Z" fill="${I.gold}"/><path d="M4 25H44V30H4Z" fill="${I.green}"/><path d="M5 30H43V35H5Z" fill="${I.wood}"/><path d="M5 35H43C43 40 40 43 36 43H12C8 43 5 40 5 35Z" fill="${I.gold}"/>`,fountain:`<path d="M5 34H43V43H5Z" fill="${I.gray}"/><path d="M16 26H32V34H16Z" fill="${I.gray}"/><path d="M24 26V12M24 12C18 10 13 14 11 22M24 12C30 10 35 14 37 22" fill="none" stroke="${I.blue}" stroke-width="3.5"/><circle cx="24" cy="9" r="3" fill="${I.sky}" stroke-width="2"/>`,bulb:`<path d="M24 4C33 4 39 11 38 19C37 26 31 28 31 35H17C17 28 11 26 10 19C9 11 15 4 24 4Z" fill="${I.gold}"/><path d="M17 35H31V42H17Z" fill="${I.gray}"/><path d="M17 13C18 10 20 9 22 9" stroke="#fff" stroke-opacity=".8" fill="none"/>`,school:`<path d="M4 20H44V43H4Z" fill="${I.cream}"/><path d="M2 21L24 8L46 21Z" fill="${I.red}"/><path d="M19 43V31H29V43" fill="${I.blue}"/><path d="M9 26H15V32H9ZM33 26H39V32H33Z" fill="${I.sky}" stroke-width="2"/><path d="M24 8V2H31V6H24" fill="${I.green}" stroke-width="2"/>`,hospital:`<path d="M6 10H42V43H6Z" fill="${I.white}"/><path d="M20 15H28V21H34V29H28V35H20V29H14V21H20Z" fill="${I.red}" stroke-width="2.5"/>`,stadium:`<ellipse cx="24" cy="26" rx="21" ry="14" fill="${I.gray}"/><ellipse cx="24" cy="26" rx="14" ry="8" fill="${I.green}"/><path d="M24 18V34" stroke="#fff" stroke-width="2"/><path d="M8 12V6M40 12V6" stroke-width="3"/>`,shirt:`<path d="M16 5L4 12L9 22L13 20V43H35V20L39 22L44 12L32 5C30 9 27 10 24 10C21 10 18 9 16 5Z" fill="${I.blue}"/>`,cap:`<path d="M8 28C8 16 15 9 24 9C33 9 40 16 40 28Z" fill="${I.blue}"/><path d="M8 28H46C46 33 40 34 34 32H8Z" fill="${I.blueD}"/>`,hat:`<path d="M3 34C3 29 13 27 24 27C35 27 45 29 45 34C45 38 3 38 3 34Z" fill="${I.gold}"/><path d="M13 28C13 17 17 11 24 11C31 11 35 17 35 28Z" fill="${I.gold}"/><path d="M13 25H35" stroke="${I.red}" stroke-width="4"/>`,gem:`<path d="M12 7H36L45 18L24 43L3 18Z" fill="${I.blue}"/><path d="M3 18H45M17 18L24 43L31 18M12 7L17 18L24 7L31 18L36 7" fill="none" stroke-width="2"/><path d="M12 12L9 17" stroke="#fff" stroke-opacity=".8"/>`,target:`<circle cx="24" cy="24" r="19" fill="${I.red}"/><circle cx="24" cy="24" r="12" fill="${I.white}"/><circle cx="24" cy="24" r="5" fill="${I.red}"/>`,scroll:`<path d="M10 6H38V36C38 41 34 44 30 44H6C10 44 10 40 10 36Z" fill="${I.cream}"/><path d="M38 6C42 6 44 8 44 12H38" fill="${I.cream}"/><path d="M16 15H32M16 22H32M16 29H26" stroke="${I.grayD}" stroke-width="3"/>`,cone:`<path d="M18 6H30L39 40H9Z" fill="${I.orange}"/><path d="M15 18H33M12 29H36" stroke="#fff" stroke-width="4"/><path d="M4 40H44V45H4Z" fill="${I.ink}"/>`,cube:`<path d="M24 3L43 13L24 23L5 13Z" fill="${I.green}"/><path d="M5 13L24 23V45L5 35Z" fill="${I.wood}"/><path d="M43 13L24 23V45L43 35Z" fill="#8a5632"/>`,map:`<path d="M4 10L16 5L32 11L44 6V38L32 43L16 37L4 42Z" fill="${I.cream}"/><path d="M16 5V37M32 11V43" fill="none"/><path d="M8 25C12 20 18 30 24 24C28 20 34 26 40 21" fill="none" stroke="${I.green}" stroke-width="3"/>`,moto:`<circle cx="11" cy="34" r="7" fill="${I.ink}"/><circle cx="37" cy="34" r="7" fill="${I.ink}"/><path d="M11 34L19 22H31L37 34M28 13H34L37 34" fill="none" stroke="${I.red}" stroke-width="4"/><path d="M15 16H26V24H15Z" fill="${I.wood}"/>`,flagbr:`<path d="M3 9H45V39H3Z" fill="${I.green}"/><path d="M24 12L42 24L24 36L6 24Z" fill="${I.gold}" stroke-width="2"/><circle cx="24" cy="24" r="7" fill="${I.blueD}" stroke-width="2"/>`,flagch:`<path d="M6 6H42V42H6Z" fill="${I.red}"/><path d="M20 12H28V20H36V28H28V36H20V28H12V20H20Z" fill="#fff" stroke="none"/>`,flagjp:`<path d="M3 9H45V39H3Z" fill="#fff"/><circle cx="24" cy="24" r="8" fill="${I.red}" stroke="none"/>`,flagus:`<path d="M3 9H45V39H3Z" fill="#fff"/><path d="M3 13.3H45M3 21.9H45M3 30.5H45M3 37H45" stroke="${I.red}" stroke-width="4.3"/><path d="M3 9H22V25H3Z" fill="${I.blueD}" stroke="none"/><path d="M3 9H45V39H3Z" fill="none"/>`,dot:`<circle cx="24" cy="24" r="8" fill="${I.gold}"/>`},Pc={"\u{1F4B5}":"coin","\u{1F4B0}":"coin","\u{1F4B8}":"coin","\u{1FA99}":"coin","\u26A1":"bolt","\u2B50":"star","\u{1F31F}":"sparkle","\u2728":"sparkle","\u{1F3C6}":"trophy","\u{1F3C5}":"medal","\u{1F451}":"crown","\u{1F3E0}":"house","\u{1F3E1}":"houseG","\u{1F3D8}\uFE0F":"houses","\u{1F3F0}":"mansion","\u{1F3DA}\uFE0F":"hut","\u{1F3DB}\uFE0F":"palace","\u{1F3D9}\uFE0F":"city","\u{1F306}":"city","\u{1F3D7}\uFE0F":"crane","\u{1F6A7}":"cone","\u{1F528}":"hammer","\u{1F9F1}":"brick","\u{1FAA8}":"rock","\u{1F6E3}\uFE0F":"road","\u{1F9F9}":"broom","\u{1F333}":"tree","\u{1F334}":"palm","\u{1F331}":"sprout","\u{1F33F}":"sprout","\u{1F476}":"sprout","\u{1F6CD}\uFE0F":"bag","\u{1F6D2}":"cart","\u{1F3EA}":"store","\u{1F4BC}":"briefcase","\u{1F4C8}":"chart","\u{1F4CA}":"chart","\u{1F4CB}":"clipboard","\u2699\uFE0F":"gear","\u2753":"help","\u{1F914}":"help","\u{1F4CD}":"pin","\u{1F512}":"lock","\u2705":"check","\u2714":"check","\u2714\uFE0F":"check","\u274C":"close","\u{1F525}":"fire","\u{1F381}":"gift","\u{1F389}":"party","\u{1F697}":"car","\u{1F699}":"carB","\u{1F3CE}\uFE0F":"car","\u{1F698}":"carB","\u{1F695}":"taxi","\u{1F6B2}":"bike","\u{1F680}":"rocket","\u{1F91D}":"team","\u{1F465}":"team","\u{1FAA7}":"sign","\u{1FAAA}":"idcard","\u{1F6E1}\uFE0F":"shield","\u{1F693}":"shield","\u{1F9B8}":"hero","\u23F1\uFE0F":"clock","\u23F3":"clock","\u{1F3AE}":"gamepad","\u{1F579}\uFE0F":"gamepad","\u{1F4F1}":"phone","\u{1F4F2}":"phone","\u{1F422}":"phone","\u25B6":"play","\u25B6\uFE0F":"play","\u279C":"arrow","\u{1F449}":"arrow","\u27A1\uFE0F":"arrow","\u25C0":"arrowL","\u2764\uFE0F":"heart","\u2600\uFE0F":"sun","\u{1F319}":"moon","\u{1F50A}":"sound","\u{1F507}":"mute","\u{1F4E6}":"box","\u{1F6F5}":"moto","\u{1F37D}\uFE0F":"cloche","\u{1F3A8}":"brush","\u{1F477}":"helmet","\u{1F4B3}":"card","\u{1F373}":"pan","\u{1F527}":"wrench","\u{1F4DA}":"book","\u{1F692}":"fhelmet","\u{1F489}":"medkit","\u{1FA7A}":"medkit","\u{1F4BB}":"laptop","\u{1F4F0}":"news","\u{1F4D0}":"ruler","\u2696\uFE0F":"scale","\u{1F468}\u200D\u2696\uFE0F":"gavel","\u26BD":"ball","\u{1F5F3}\uFE0F":"ballot","\u{1F33D}":"corn","\u{1F3CA}":"pool","\u{1F415}":"paw","\u{1F37F}":"popcorn","\u{1F354}":"burger","\u26F2":"fountain","\u{1F4A1}":"bulb","\u{1F3EB}":"school","\u{1F3E5}":"hospital","\u{1F3DF}\uFE0F":"stadium","\u{1F455}":"shirt","\u{1F9E2}":"cap","\u{1F452}":"hat","\u{1F48E}":"gem","\u{1F3AF}":"target","\u{1F4DC}":"scroll","\u{1F9CA}":"cube","\u{1F4AA}":"medal","\u{1F5FA}\uFE0F":"map","\u{1F4A0}":"xp","\u{1F1E7}\u{1F1F7}":"flagbr","\u{1F1E8}\u{1F1ED}":"flagch","\u{1F1EF}\u{1F1F5}":"flagjp","\u{1F1FA}\u{1F1F8}":"flagus"};_r=/[\u{1F1E6}-\u{1F1FF}]{2}|(?:\p{Extended_Pictographic}|[➜▶◀])(?:\uFE0F|\u200D\p{Extended_Pictographic}\uFE0F?|[\u{1F3FB}-\u{1F3FF}])*/gu,Yu=new Set(["\xA9","\xAE","\u2122"]);ju=n=>String(n).replace(_r,e=>Yu.has(e)?e:"").replace(/\s{2,}/g," ").trim(),Ku=".mg-area,script,style,textarea,input,svg,[data-raw]"});function th(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),a=new Set(Object.keys(n[0].morphAttributes)),r={},o={},s=n[0].morphTargetsRelative,l=new Ti,d=0;for(let c=0;c<n.length;++c){let u=n[c],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(s!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(d,p,c),d+=p}}if(t){let c=0,u=[];for(let f=0;f<n.length;++f){let p=n[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+c);c+=n[f].attributes.position.count}l.setIndex(u)}for(let c in r){let u=eh(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in o){let u=o[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<u;++f){let p=[];for(let M=0;M<o[c].length;++M)p.push(o[c][M][f]);let g=eh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function eh(n){let e,t,i,a=-1,r=0;for(let d=0;d<n.length;++d){let c=n[d];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=c.gpuType),a!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}let o=new e(r),s=new Ut(o,t,i),l=0;for(let d=0;d<n.length;++d){let c=n[d];if(c.isInterleavedBufferAttribute){let u=l/t;for(let f=0,p=c.count;f<p;f++)for(let g=0;g<t;g++){let M=c.getComponent(f,g);s.setComponent(f+u,g,M)}}else o.set(c.array,l);l+=c.count*t}return a!==void 0&&(s.gpuType=a),s}var ih=bi(()=>{Mr()});function Ax(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Tx(n){let e=parseInt(n.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function bt(n,e){let[t,i,a]=Tx(n);return`rgb(${Math.min(255,t*e)|0},${Math.min(255,i*e)|0},${Math.min(255,a*e)|0})`}function Ze(n,e,t,i,{nearest:a=!0,mip:r=!0}={}){if(Lc[n])return Lc[n];let o=document.createElement("canvas");o.width=e,o.height=t;let s=o.getContext("2d"),l=0;for(let c of n)l=Math.imul(l^c.charCodeAt(0),2654435761);i(s,Ax(l),e,t);let d=new Mn(o);return d.colorSpace=Pt,d.wrapS=d.wrapT=hr,a&&(d.magFilter=ei,d.minFilter=r?_a:ei),d.anisotropy=4,d.generateMipmaps=r,Lc[n]=d}function Ot(n,e,t,i,a,r,o){for(let s=0;s<t;s++)for(let l=0;l<i;l++)rt(n,s,l,bt(a,r+e()*(o-r)))}function nh(n,e,t=0){return Ze(`face_${n}_${e}_${t}`,32,16,(i,a)=>{Ot(i,a,32,16,n,.97,1.03),i.fillStyle=e,i.fillRect(0,0,16,3),i.fillRect(0,3,2,3),i.fillRect(14,3,2,3),i.fillStyle="#fff",i.fillRect(4,6,3,3),i.fillRect(9,6,3,3),i.fillStyle="#1b1b1b",i.fillRect(5,7,2,2),i.fillRect(9,7,2,2),i.fillStyle="#ffffff",i.fillRect(5,7,1,1),i.fillRect(9,7,1,1),i.fillStyle=bt(e,.9),i.fillRect(4,4,3,1),i.fillRect(9,4,3,1),i.fillStyle="#5a2d1e",i.fillRect(6,11,4,1),i.fillRect(5,10,1,1),i.fillRect(10,10,1,1),t===1&&(i.fillStyle="#e88f8f",i.fillRect(3,9,2,1),i.fillRect(11,9,2,1)),i.fillStyle=e,i.fillRect(16,0,16,6)})}function ah(n,e){let t=Oa[e]||{},i=t.shirt||n;return Ze(`torso_${i}_${e}`,32,16,(a,r)=>{Ot(a,r,32,16,i,.93,1.04);let o=(s,l,d,c,u)=>{a.fillStyle=s,a.fillRect(l,d,c,u)};switch(o(bt(i,.75),6,0,4,1),t.overlay){case"stripes":o("#e5e7eb",0,9,32,2),o("#facc15",0,11,32,1);break;case"apron":o(t.apron,3,4,10,12),o(bt(t.apron,.8),3,4,10,1),o("#ffffff",6,8,4,2);break;case"vest":o("#f97316",1,0,5,16),o("#f97316",10,0,5,16),o("#e5e7eb",1,10,5,1),o("#e5e7eb",10,10,5,1),o("#f97316",16,0,16,16),o("#e5e7eb",16,10,16,1);break;case"polo":o("#ffffff",6,0,4,2),o("#facc15",10,3,3,2);break;case"chef":for(let s of[4,8,12])o("#9ca3af",5,s,1,1),o("#9ca3af",10,s,1,1);o("#e5e7eb",3,0,10,1);break;case"tie":o("#ffffff",6,0,4,2),o(t.tie,7,1,2,9);break;case"suit":o("#f8fafc",5,0,6,9),o(t.tie,7,1,2,8),o(bt(i,.7),4,0,1,12),o(bt(i,.7),11,0,1,12);break;case"cross":o("#ffffff",10,3,4,4),o("#dc2626",11,4,2,2),o("#dc2626",11.5,3.3,1,3.4);break;case"hoodie":o(bt(i,.8),4,0,8,2),o("#e5e7eb",6,2,1,4),o("#e5e7eb",9,2,1,4),o(bt(i,.85),4,10,8,4);break;case"coat":o("#f8fafc",0,0,6,16),o("#f8fafc",10,0,6,16),o("#f8fafc",16,0,16,16),o("#374151",5,2,1,6),o("#374151",9,2,1,6),o("#9ca3af",6,7,4,1);break;case"jersey":o("#16a34a",0,0,32,1),o("#16a34a",6,0,4,2),o("#16a34a",4,4,2,2),o("#1d4ed8",21,4,2,8),o("#1d4ed8",24,4,4,1),o("#1d4ed8",27,4,1,8),o("#1d4ed8",24,11,4,1),o("#1d4ed8",24,4,1,8);break;case"sash":o("#f8fafc",6,0,4,4);for(let s=0;s<16;s++)o("#16a34a",s,15-s,2,2),o("#facc15",s,14-s,1,1);break;case"hero":o("#dc2626",0,13,32,3),o("#facc15",5,3,6,6),o("#dc2626",6,4,4,4),o("#facc15",7,5,2,2);break}})}function rh(n,e,t){let i=Oa[e]||{},a=i.coat?"#f8fafc":(i.overlay==="vest",i.shirt||n);return Ze(`arm_${a}_${t}`,8,16,(r,o)=>{Ot(r,o,8,16,a,.92,1.04),oh(r,o,0,11,8,5,t)})}function oh(n,e,t,i,a,r,o){for(let s=0;s<a;s++)for(let l=0;l<r;l++)rt(n,t+s,i+l,bt(o,.95+e()*.06))}function sh(n,e="#3f2a1d"){return Ze(`leg_${n}_${e}`,8,16,(t,i)=>{Ot(t,i,8,16,n,.9,1.05),oh(t,i,0,13,8,3,e)})}var Lc,rt,Ua,Oa,$o=bi(()=>{Mr();Lc={};rt=(n,e,t,i)=>{n.fillStyle=i,n.fillRect(e,t,1,1)};Ua={grass:()=>Ze("grass",16,16,(n,e)=>{Ot(n,e,16,16,"#6abf45",.84,1.1);for(let t=0;t<14;t++)rt(n,e()*16|0,e()*16|0,e()>.5?"#4f9a33":"#8ad35e")}),sand:()=>Ze("sand",16,16,(n,e)=>{Ot(n,e,16,16,"#ecdba8",.9,1.06);for(let t=0;t<10;t++)rt(n,e()*16|0,e()*16|0,"#d6c08a")}),dirt:()=>Ze("dirt",16,16,(n,e)=>{Ot(n,e,16,16,"#8b5a3c",.8,1.12);for(let t=0;t<10;t++)rt(n,e()*16|0,e()*16|0,"#6b4429")}),asphalt:()=>Ze("asphalt",16,16,(n,e)=>{Ot(n,e,16,16,"#474b52",.85,1.12);for(let t=0;t<8;t++)rt(n,e()*16|0,e()*16|0,"#62676f")}),sidewalk:()=>Ze("sidewalk",16,16,(n,e)=>{Ot(n,e,16,16,"#d2d2cc",.93,1.05);for(let t=0;t<16;t++)rt(n,t,0,"#a8a8a2"),rt(n,0,t,"#a8a8a2"),rt(n,t,8,"#b4b4ae"),rt(n,8,t,"#b4b4ae")}),brick:()=>Ze("brick",16,16,(n,e)=>{for(let t=0;t<16;t++){let i=t>>2;for(let a=0;a<16;a++){let r=i%2?4:0,o=t%4===3||(a+r)%8===7;rt(n,a,t,o?bt("#d4cabb",.95+e()*.08):bt("#b5523a",.82+e()*.25))}}}),planks:()=>Ze("planks",16,16,(n,e)=>{for(let t=0;t<16;t++){let i=t>>2,a=.88+i*37%5*.05;for(let r=0;r<16;r++){let o=t%4===3||r===(i*5+3)%16;rt(n,r,t,o?"#6e4a28":bt("#b8874f",a*(.94+e()*.1)))}}}),stone:()=>Ze("stone",16,16,(n,e)=>{for(let t=0;t<16;t+=2)for(let i=0;i<16;i+=2){let a=.75+e()*.4;for(let r=0;r<2;r++)for(let o=0;o<2;o++)rt(n,t+r,i+o,bt("#8f9296",a*(.95+e()*.08)))}for(let t=0;t<18;t++)rt(n,e()*16|0,e()*16|0,"#5d6064")}),plaster:()=>Ze("plaster",16,16,(n,e)=>Ot(n,e,16,16,"#f2ede6",.94,1.03)),quartz:()=>Ze("quartz",16,16,(n,e)=>{Ot(n,e,16,16,"#f7f5f0",.96,1.02);for(let t=0;t<16;t++)rt(n,t,0,"#e0dcd3"),rt(n,0,t,"#e0dcd3")}),roof:()=>Ze("roof",16,16,(n,e)=>{for(let t=0;t<16;t++){let i=t>>2;for(let a=0;a<16;a++){let r=t%4===3,o=(a+i%2*2)%4===0;rt(n,a,t,r?"#7d7d7d":o?"#a9a9a9":bt("#dcdcdc",.92+e()*.1-t%4*.03))}}}),leaves:()=>Ze("leaves",16,16,(n,e)=>{Ot(n,e,16,16,"#d8d8d8",.7,1.15);for(let t=0;t<20;t++)rt(n,e()*16|0,e()*16|0,e()>.5?"#8e8e8e":"#ffffff")}),log:()=>Ze("log",16,16,(n,e)=>{for(let t=0;t<16;t++)for(let i=0;i<16;i++)rt(n,t,i,bt(t%4===0?"#4e3520":"#6b4a2b",.88+e()*.2))}),palmlog:()=>Ze("palmlog",16,16,(n,e)=>{for(let t=0;t<16;t++)for(let i=0;i<16;i++)rt(n,t,i,bt(i%4===0?"#7d5a3a":"#a88158",.9+e()*.15))}),glass:()=>Ze("glass",16,16,(n,e)=>{for(let t=0;t<16;t++)for(let i=0;i<16;i++){let a=t===0||i===0||t===15||i===15||t===7||t===8||i===7,r=(t-i===3||t-i===4||t-i===-6)&&!a;rt(n,t,i,a?"#f1f1ef":r?"#d9eefc":bt("#7fb6e2",.85+i*.015+e()*.05))}}),door:()=>Ze("door",16,32,(n,e)=>{for(let t=0;t<16;t++)for(let i=0;i<32;i++){let a=t<1||t>14||i<1,r=t>2&&t<13&&(i>2&&i<13||i>15&&i<29);rt(n,t,i,a?"#4f2e14":r?bt("#8a5a32",.95+e()*.1):bt("#7a4a26",.9+e()*.1))}n.fillStyle="#f5c542",n.fillRect(12,16,2,2)}),concrete:()=>Ze("concrete",16,16,(n,e)=>Ot(n,e,16,16,"#a6aab0",.9,1.06)),carpaint:()=>Ze("carpaint",16,16,(n,e)=>{Ot(n,e,16,16,"#f2f2f2",.97,1.02);for(let t=0;t<16;t++)rt(n,t,0,"#ffffff")}),tire:()=>Ze("tire",16,16,(n,e)=>{Ot(n,e,16,16,"#222225",.85,1.1),n.fillStyle="#5f6368",n.fillRect(4,4,8,8),n.fillStyle="#b5bac0",n.fillRect(5,5,6,6),n.fillStyle="#7d828a",n.fillRect(7,7,2,2)}),metal:()=>Ze("metal",16,16,(n,e)=>Ot(n,e,16,16,"#b9bdc3",.92,1.06)),white:()=>Ze("white",4,4,n=>{n.fillStyle="#fff",n.fillRect(0,0,4,4)}),gold:()=>Ze("gold",16,16,(n,e)=>{Ot(n,e,16,16,"#e8b923",.85,1.12);for(let t=0;t<10;t++)rt(n,e()*16|0,e()*16|0,"#fff1a8")}),water:()=>Ze("water",32,32,(n,e)=>{for(let t=0;t<32;t++)for(let i=0;i<32;i++){let a=Math.sin(t*.4+Math.sin(i*.3)*2)>.85;rt(n,t,i,a?"#9ad6f7":bt("#2f86cf",.9+e()*.15))}}),hair:()=>Ze("hair",16,16,(n,e)=>{for(let t=0;t<16;t++)for(let i=0;i<16;i++)rt(n,t,i,bt(t%3===0?"#a8a8a8":"#d8d8d8",.9+e()*.15))}),plate:()=>Ze("plate",32,16,n=>{n.fillStyle="#fff",n.fillRect(0,0,32,16),n.fillStyle="#1f4fa3",n.fillRect(0,0,32,4),n.fillStyle="#111",n.font="bold 9px monospace",n.textBaseline="top",n.fillText("BRA2E26",1,5),n.strokeStyle="#111",n.strokeRect(.5,.5,31,15)},{mip:!1}),tower:()=>Ze("tower",64,64,(n,e)=>{for(let t=0;t<64;t++)for(let i=0;i<64;i++){let a=t%8,r=i%8,o=a>0&&a<7&&r>1&&r<7,s=o&&(a-r===0||a-r===1);rt(n,t,i,o?s?"#cfe6f7":bt("#5b86ad",.85+r/8*.25+e()*.05):bt("#e0e3e8",.93+e()*.06))}}),towerLit:()=>Ze("towerLit",64,64,(n,e)=>{n.fillStyle="#000",n.fillRect(0,0,64,64);for(let t=0;t<8;t++)for(let i=0;i<8;i++)e()<.38&&(n.fillStyle=e()>.3?"#ffd27a":"#fff4d6",n.fillRect(t*8+1,i*8+2,6,5))})};Oa={pedreiro:{hat:"capacete",hatColor:"#facc15",pants:"#3b5b8c"},empacotador:{overlay:"apron",apron:"#16a34a",pants:"#1f2937"},gari:{shirt:"#f97316",overlay:"stripes",pants:"#f97316",hat:"bone",hatColor:"#f97316"},entregador:{shirt:"#dc2626",backpack:!0,pants:"#1f2937",hat:"bone",hatColor:"#dc2626"},ambulante:{overlay:"apron",apron:"#f8fafc",hat:"palha"},mestre_obras:{overlay:"vest",hat:"capacete",hatColor:"#f8fafc",pants:"#3b5b8c"},motorista:{overlay:"polo",pants:"#1f2937"},eletricista:{shirt:"#1d4ed8",overlay:"stripes",hat:"capacete",hatColor:"#2563eb",pants:"#1e3a8a"},cozinheiro:{shirt:"#f8fafc",overlay:"chef",hat:"chef",pants:"#111827"},professor:{overlay:"tie",tie:"#7c2d12",pants:"#78716c"},bombeiro:{shirt:"#b45309",overlay:"stripes",hat:"bombeiro",pants:"#b45309"},enfermeiro:{shirt:"#14b8a6",overlay:"cross",pants:"#14b8a6"},programador:{overlay:"hoodie",pants:"#1f2937",headphones:!0},engenheiro:{overlay:"vest",hat:"capacete",hatColor:"#f8fafc",pants:"#1e3a8a"},advogado:{shirt:"#1f2937",overlay:"suit",tie:"#991b1b",pants:"#1f2937"},medico:{overlay:"coat",pants:"#1e3a8a",coat:!0},empresario:{shirt:"#1e3a8a",overlay:"suit",tie:"#facc15",pants:"#1e3a8a"},jogador:{shirt:"#facc15",overlay:"jersey",pants:"#1d4ed8",shoes:"#f8fafc"},prefeito:{shirt:"#111827",overlay:"sash",tie:"#111827",pants:"#111827"},heroi:{shirt:"#1d4ed8",overlay:"hero",pants:"#1d4ed8",cape:!0,shoes:"#dc2626"},garcom:{shirt:"#f8fafc",overlay:"tie",tie:"#111827",pants:"#111827"},jardineiro:{shirt:"#65a30d",overlay:"apron",apron:"#78350f",hat:"palha",pants:"#3b5b8c"},pintor:{shirt:"#f8fafc",overlay:"apron",apron:"#e2e8f0",hat:"bone",hatColor:"#f8fafc",pants:"#e2e8f0"},caixa:{shirt:"#dc2626",overlay:"polo",pants:"#1f2937"},mecanico:{shirt:"#1e3a8a",overlay:"stripes",pants:"#1e3a8a",hat:"bone",hatColor:"#1e3a8a"},policial:{shirt:"#1f2937",overlay:"polo",pants:"#1f2937",hat:"bone",hatColor:"#111827"},jornalista:{overlay:"tie",tie:"#2563eb",pants:"#475569"},corretor:{shirt:"#334155",overlay:"suit",tie:"#16a34a",pants:"#334155"},juiz:{shirt:"#111827",overlay:"suit",tie:"#111827",pants:"#111827"},vereador:{shirt:"#14532d",overlay:"suit",tie:"#facc15",pants:"#14532d"}}});function ti(n){let e=typeof n=="string"?[...n].reduce((t,i)=>Math.imul(t^i.charCodeAt(0),2654435761)>>>0,1779033703):n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ex(n){if(ka[n])return ka[n];let e=Cx[n]||{},t=new Ki({map:Ua[e.tex||n](),vertexColors:!0,roughness:e.r??.92,metalness:e.m??0,transparent:!!e.transparent,opacity:e.opacity??1});return e.emissive&&(t.emissive=new Re(e.emissive),t.emissiveIntensity=e.ei,e.emissiveMap&&(t.emissiveMap=Ua[e.emissiveMap]())),t.userData.def=e,ka[n]=t}function wx(n,e,t,i=1,a={}){let r=new mi(n,e,t),o=r.attributes.uv,s=[[t,e],[t,e],[n,t],[n,t],[n,e],[n,e]],l=Array.isArray(i)?i:[i,i];for(let d=0;d<6;d++)for(let c=0;c<4;c++){let u=d*4+c;o.setXY(u,o.getX(u)*s[d][0]/l[0],o.getY(u)*s[d][1]/l[1])}if(a.fit)for(let d=0;d<o.count;d++){let c=d/4|0;o.setXY(d,o.getX(d)*l[0]/s[c][0],o.getY(d)*l[1]/s[c][1])}return r}function Qi(n,{bg:e="rgba(27,35,64,0.9)",fg:t="#fff",scale:i=1,border:a=null}={}){n=ju(n);let r=document.createElement("canvas"),o=r.getContext("2d"),s=42,l=`${s}px "Lilita One", "Nunito", system-ui, sans-serif`;o.font=l;let d=Math.ceil(o.measureText(n).width)+48;r.width=d,r.height=80,o.font=l,o.fillStyle="#1b2340",Dc(o,3,9,d-6,66,20),o.fill(),o.fillStyle=e,Dc(o,6,5,d-12,62,17),o.fill(),o.strokeStyle=a||"#1b2340",o.lineWidth=5,o.stroke(),o.fillStyle="rgba(255,255,255,0.28)",Dc(o,14,10,d-28,12,6),o.fill(),o.textAlign="center",o.textBaseline="middle",(t==="#fff"||t==="#ffffff")&&(o.lineWidth=7,o.strokeStyle="#1b2340",o.lineJoin="round",o.strokeText(n,d/2,39)),o.fillStyle=t,o.fillText(n,d/2,39);let c=new Mn(r);c.colorSpace=Pt,c.anisotropy=4;let u=new Lo(new xr({map:c,depthTest:!0,transparent:!0,fog:!1}));return u.scale.set(d/80*.95*i,.95*i,1),u.renderOrder=10,u}function Dc(n,e,t,i,a,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+a,r),n.arcTo(e+i,t+a,e,t+a,r),n.arcTo(e,t+a,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Xo(n,e,t,i,a,r=4,o=.5){let s=(e+o*2)/(r*2+.6);for(let l=0;l<r;l++)n.box("roof",e+o*2-s*2*l,.5,t+o*2,0,i+.25+l*.5,0,{c:a});n.box("planks",.4,.3,t+o*2+.1,0,i+r*.5+.1,0,{c:"#8b5a2b"})}function At(n,e,t,i,a="z",r=1.2,o=1.1){a==="z"?(n.box("glass",r,o,.12,e,t,i,{tile:[r,o],fit:!0,ao:!1}),n.box("white",r+.3,.14,.3,e,t-o/2-.07,i+Math.sign(i)*.08,{c:"#e7e5e4"})):(n.box("glass",.12,o,r,e,t,i,{tile:[r,o],fit:!0,ao:!1}),n.box("white",.3,.14,r+.3,e+Math.sign(e)*.08,t-o/2-.07,i,{c:"#e7e5e4"}))}function mh(n,e,t,i,a=2.1){n.box("door",1.1,a,.14,e,t+a/2,i,{tile:[1.1,a],fit:!0}),n.box("stone",1.6,.2,.8,e,.1+t-.2,i+.4)}function vh(n,e=Math.random,t=!1){let i=new qt,a=t?"gold":e()<.22?"brick":e()<.25?"planks":"plaster",r=t?"#ffffff":a==="plaster"?fh[e()*fh.length|0]:"#ffffff",o=t?"#d4a017":ph[e()*ph.length|0],s=a==="planks"?"log":"planks";if(n==="casa_simples"||n==="casa_reformada"){i.box("stone",6.4,.4,6.4,0,.2,0),i.box(a,6,3.2,6,0,2,0,{c:r});for(let c of[-1,1])for(let u of[-1,1])i.box(s,.5,3.2,.5,c*2.95,2,u*2.95,{c:"#d9b38c"});if(i.box(s,6.4,.35,6.4,0,3.75,0,{c:"#d9b38c"}),mh(i,0,.4,3.04),At(i,-1.85,2.2,3.04),At(i,1.85,2.2,3.04),At(i,3.04,2.2,0,"x"),At(i,-3.04,2.2,0,"x"),Xo(i,6,6,3.9,o),i.box("brick",.8,2.2,.8,1.7,5.4,-1.6),n==="casa_reformada"){for(let c=-5;c<=5;c++)Math.abs(c)>0&&i.box("planks",.2,1,.2,c,.5,5.4,{c:"#ffffff"});i.box("planks",4.6,.15,.1,-3.2,.8,5.4,{c:"#ffffff"}),i.box("planks",4.6,.15,.1,3.2,.8,5.4,{c:"#ffffff"}),i.box("stone",1.4,.08,2.2,0,.04,4.3,{c:"#d6d3d1"});for(let c of[-1,1]){i.box("leaves",2.6,.9,1,c*2.4,.45,4.3,{c:"#4f9a3a"});for(let u=0;u<3;u++)i.box("white",.25,.25,.25,c*(1.6+u*.7),1,4.3,{c:["#ef4444","#facc15","#f472b6"][u],ao:!1})}i.box("white",.2,1.1,.2,4.6,.55,5.1,{c:"#334155"}),i.box("white",.5,.4,.7,4.6,1.2,5.1,{c:"#1d4ed8"})}return Nc(i,[6.4,6.4])}if(n==="sobrado"||n==="casa_piscina"){i.box("stone",7.4,.4,7,0,.2,-.5),i.box(a,7,3,6.5,0,1.9,-.5,{c:r}),i.box(s,7.3,.35,6.8,0,3.55,-.5,{c:"#d9b38c"}),i.box(a,7,3,6.5,0,5.2,-.5,{c:r});for(let c of[-1,1])for(let u of[-1,1])i.box(s,.5,6.3,.5,c*3.45,3.55,-.5+u*3.2,{c:"#d9b38c"});mh(i,-1.6,.4,2.79),At(i,1.6,2.1,2.79,"z",2,1.2),At(i,-1.7,5.3,2.79),At(i,1.7,5.3,2.79),At(i,3.54,2.1,-.5,"x"),At(i,-3.54,5.3,-.5,"x"),At(i,3.54,5.3,-.5,"x"),i.box("planks",7.2,.25,1.6,0,3.85,3.4,{c:"#c8a27a"});for(let c=-3.4;c<=3.41;c+=.85)i.box("planks",.15,.9,.15,c,4.4,4.1,{c:"#ffffff"});return i.box("planks",7.2,.15,.15,0,4.85,4.1,{c:"#ffffff"}),Xo(i,7,6.5,6.7,o),i.box("brick",.9,2.4,.9,-2,8.3,-2.4),n==="casa_piscina"&&(i.box("stone",4.8,.3,3,3.3,.15,4.8,{c:"#e7e5e4"}),i.box("water",4.1,.12,2.3,3.3,.3,4.8,{tile:2,ao:!1}),i.box("white",.6,.2,1.6,.4,.4,5,{c:"#38bdf8"}),i.box("white",1.4,1.3,.1,5.6,1.4,3.6,{c:"#f8fafc"})),Nc(i,[7.4,7])}let l=t?"gold":"quartz",d=t?"gold":"stone";i.box("stone",11.6,.4,8,0,.2,-1.5,{c:"#e7e5e4"}),i.box(l,11,3.2,7,0,2,-1.5),i.box(d,11.4,.3,7.4,0,3.75,-1.5,{c:t?"#fff":"#d6d3d1"}),i.box(l,11,3,7,0,5.4,-1.5),i.box(d,11.6,.35,7.6,0,7.07,-1.5,{c:t?"#fff":"#d6d3d1"});for(let c=-5.2;c<=5.21;c+=.8)i.box(d,.4,.5,.4,c,7.45,2.1,{c:t?"#fff":"#d6d3d1"});i.box(l,4,3,6,-3.5,8.7,-1.5),i.box(d,4.4,.35,6.4,-3.5,10.35,-1.5,{c:t?"#fff":"#d6d3d1"}),At(i,-3.5,8.8,1.55,"z",2.6,1.6);for(let c of[-3.6,3.6])At(i,c,2.1,2.04,"z",2.2,1.6),At(i,c,5.4,2.04,"z",2.2,1.6);At(i,0,5.4,2.04,"z",2,1.6),At(i,5.54,2.1,-1.5,"x",3,1.6),At(i,5.54,5.4,-1.5,"x",3,1.6),At(i,-5.54,2.1,-1.5,"x",3,1.6),i.box("door",1.8,2.6,.14,0,1.7,2.04,{tile:[1.8,2.6],fit:!0});for(let c of[-1.5,1.5])i.box(t?"gold":"quartz",.6,3.2,.6,c,2,3.2);i.box(d,4.4,.4,2.4,0,3.8,2.9,{c:t?"#fff":"#d6d3d1"}),i.box("stone",9.6,.3,2.9,0,.15,4.6,{c:"#e7e5e4"}),i.box("water",8.8,.12,2.1,0,.3,4.6,{tile:2,ao:!1});for(let c of[-1,1])i.box("leaves",1,1.1,7.4,c*5.9,.55,-1.5,{c:"#3f8a35"}),i.box("metal",.2,2.6,.2,c*5.5,1.3,5.6,{c:"#334155"}),i.box("lamp",.5,.5,.5,c*5.5,2.8,5.6,{ao:!1});return i.box("leaves",1.6,1.6,1.6,3.5,8,-3,{c:"#4f9a3a"}),Nc(i,[11.6,8])}function Nc(n,e){let t=n.build();return t.userData.footprint=e,t}function Di(n,e,t,i,a,r=1,o=qn){if(e==="palm"){let d=t,c=i,u=a()*Math.PI*2,f=6+(a()*3|0);for(let g=0;g<f;g++)n.box("palmlog",.55*r,1*r,.55*r,d,o+(g+.5)*r,c,{c:"#ffffff"}),d+=Math.cos(u)*.12*g*r*.25,c+=Math.sin(u)*.12*g*r*.25;let p=o+f*r;n.box("leaves",1.1*r,.6*r,1.1*r,d,p+.1,c,{c:"#3f9a3a"});for(let g=0;g<8;g++){let M=g/8*Math.PI*2+a()*.3,m=Math.cos(M),h=Math.sin(M),y=Math.atan2(m,h);n.box("leaves",.7*r,.22*r,1.8*r,d+m*1.2*r,p+.15*r,c+h*1.2*r,{c:"#4fae3f",ry:y,rx:-.15}),n.box("leaves",.6*r,.22*r,1.5*r,d+m*2.6*r,p-.45*r,c+h*2.6*r,{c:"#46a03a",ry:y,rx:.45})}for(let g=0;g<3;g++)n.box("white",.3*r,.3*r,.3*r,d+(a()-.5)*.8,p-.35*r,c+(a()-.5)*.8,{c:"#6b4423"});return}if(e==="pine"){let d=(2+a()*1.5)*r;n.box("log",.7*r,d,.7*r,t,o+d/2,i);let c=["#2f6b3a","#2a5f33","#356f3f"][a()*3|0];[3.8,3,2.2,1.4,.7].forEach((u,f)=>n.box("leaves",u*r,1.1*r,u*r,t,o+d+(f*1.05+.4)*r,i,{c}));return}let s=(2.6+a()*1.2)*r;n.box("log",.8*r,s,.8*r,t,o+s/2,i);let l=e==="ipe"?a()>.5?"#f9a8d4":"#d8b4fe":["#4f9a3a","#5aa23f","#468e35"][a()*3|0];n.box("leaves",3.6*r,2*r,3.6*r,t,o+s+.9*r,i,{c:l}),n.box("leaves",2.2*r,1.2*r,2.2*r,t,o+s+2.4*r,i,{c:l});for(let d=0;d<4;d++)n.box("leaves",1.1*r,1.1*r,1.1*r,t+(a()-.5)*3.4*r,o+s+(.2+a()*1.6)*r,i+(a()-.5)*3.4*r,{c:l})}function gh(n,e,t,i=!1){let a=new mi(n,e,t),r=a.attributes.uv;for(let o=0;o<6;o++)for(let s=0;s<4;s++){let l=o*4+s,d=r.getX(l),c=r.getY(l);o===4?d=d*.5:d=.5+d*.5,i&&o===2&&(c=.7+c*.3),r.setXY(l,d,c)}return a}function qo(n){var e;return yn[e=n.uuid]||(yn[e]=new Ki({map:n,roughness:.8}))}function _t(n,e={}){let t=n+JSON.stringify(e);return yn[t]||(yn[t]=new Ki({color:n,roughness:.75,...e}))}function ot(n,e,t,i,a){let r=new Rt(n,e);return r.position.set(t,i,a),r.castShadow=!0,r}function Bc({shirt:n="#16a34a",skin:e="#c68642",hat:t=null,pants:i=null,cape:a=!1,prof:r="pedreiro",hairCol:o="#2b1a10",face:s=0}={}){let l=Oa[r]||{},d=new Nt,c=new Nt;d.add(c);let u=qo(sh(i||l.pants||"#1e3a8a",l.shoes)),f=qo(rh(n,r,e)),p=[],g=[];for(let L of[-1,1]){let E=new Nt;E.position.set(.24*L,1,0),E.add(ot(Ke.limb,u,0,-.5,0)),c.add(E),p.push(E);let T=new Nt;T.position.set(.72*L,1.95,0),T.add(ot(Ke.limb,f,0,-.45,0)),c.add(T),g.push(T)}let M=ot(Ke.torso,qo(ah(n,r)),0,1.5,0);c.add(M);let m=new Nt;m.position.set(0,2,0),c.add(m),m.add(ot(Ke.head,qo(nh(e,o,s)),0,.33,0));let h=_t(o),y=t||l.hat;(!y||y==="palha"||y==="chef")&&(m.add(Mt(ot(Ke.cube,h,0,.68,-.02),.72,.14,.7)),m.add(Mt(ot(Ke.cube,h,0,.42,-.33),.7,.5,.06)),y||m.add(Mt(ot(Ke.cube,h,0,.6,.31),.7,.1,.06)));let S=l.hatColor||"#dc2626";if(y==="bone"&&(m.add(Mt(ot(Ke.cube,_t(S),0,.72,0),.72,.2,.72)),m.add(Mt(ot(Ke.cube,_t(S),0,.64,.45),.6,.06,.36))),y==="capacete"&&(m.add(Mt(ot(Ke.cube,_t(S,{roughness:.4}),0,.75,0),.76,.26,.76)),m.add(Mt(ot(Ke.cube,_t(S,{roughness:.4}),0,.64,.05),.86,.06,.9))),y==="bombeiro"&&(m.add(Mt(ot(Ke.cube,_t("#b91c1c",{roughness:.4}),0,.76,0),.76,.28,.76)),m.add(Mt(ot(Ke.cube,_t("#b91c1c"),0,.64,-.15),.9,.06,1.05)),m.add(Mt(ot(Ke.cube,_t("#facc15"),0,.78,.39),.2,.2,.04))),y==="palha"&&(m.add(Mt(ot(Ke.cube,_t("#e2b84a"),0,.7,0),1.3,.07,1.3)),m.add(Mt(ot(Ke.cube,_t("#d4a632"),0,.84,0),.68,.24,.68)),m.add(Mt(ot(Ke.cube,_t("#7c2d12"),0,.76,0),.7,.07,.7))),y==="chef"&&(m.add(Mt(ot(Ke.cube,_t("#ffffff"),0,.95,0),.7,.6,.7)),m.add(Mt(ot(Ke.cube,_t("#ffffff"),0,1.3,0),.82,.22,.82))),y==="coroa"){let L=_t("#facc15",{metalness:.8,roughness:.25,emissive:"#7c4a03",emissiveIntensity:.25});m.add(Mt(ot(Ke.cube,L,0,.75,0),.72,.18,.72));for(let[E,T]of[[-.28,.28],[.28,.28],[-.28,-.28],[.28,-.28],[0,.28]])m.add(Mt(ot(Ke.cube,L,E,.92,T),.14,.18,.14));m.add(Mt(ot(Ke.cube,_t("#dc2626",{emissive:"#7f1d1d",emissiveIntensity:.4}),0,.78,.37),.12,.1,.02))}if(l.headphones){m.add(Mt(ot(Ke.cube,_t("#111827"),0,.72,0),.74,.08,.2));for(let L of[-1,1])m.add(Mt(ot(Ke.cube,_t("#ef4444"),L*.36,.35,0),.1,.26,.24))}l.backpack&&(c.add(Mt(ot(Ke.cube,_t("#dc2626"),0,1.6,-.55),.85,.85,.6)),c.add(Mt(ot(Ke.cube,_t("#facc15"),0,1.75,-.86),.5,.2,.02)));let x=null;return(a||l.cape)&&(x=new Nt,x.position.set(0,1.98,-.27),x.add(Mt(ot(Ke.cube,_t("#dc2626",{side:si}),0,-.75,0),.9,1.5,.05)),c.add(x)),d.userData={legs:p,arms:g,body:c,head:m,torso:M,cape:x,phase:Math.random()*6,t:Math.random()*10},d}function Mt(n,e,t,i){return n.scale.set(e,t,i),n}function Jo(n,e,t){let i=n.userData;i.t+=t;let a=Ho.lerp;if(e>.05){i.phase+=t*(5+7*e);let r=.45+.55*Math.min(1,e),o=Math.sin(i.phase)*r;i.legs[0].rotation.x=o,i.legs[1].rotation.x=-o,i.arms[0].rotation.x=-o,i.arms[1].rotation.x=o,i.arms[0].rotation.z=a(i.arms[0].rotation.z,0,.2),i.arms[1].rotation.z=a(i.arms[1].rotation.z,0,.2),i.body.position.y=Math.abs(Math.cos(i.phase))*.08*r,i.body.rotation.x=a(i.body.rotation.x,e>.8?.12:.03,.15),i.cape&&(i.cape.rotation.x=a(i.cape.rotation.x,.25+.5*e+Math.sin(i.t*9)*.05,.2)),i.head.rotation.y=a(i.head.rotation.y,0,.1)}else{for(let r=0;r<2;r++)i.legs[r].rotation.x=a(i.legs[r].rotation.x,0,.2),i.arms[r].rotation.x=a(i.arms[r].rotation.x,Math.sin(i.t*1.6+r)*.04,.2);i.arms[0].rotation.z=-.06-Math.sin(i.t*2)*.03,i.arms[1].rotation.z=.06+Math.sin(i.t*2)*.03,i.body.position.y=Math.sin(i.t*2)*.015,i.body.rotation.x=a(i.body.rotation.x,0,.15),i.head.rotation.y=Math.sin(i.t*.6)*.35*(Math.sin(i.t*.23)>.3?1:.2),i.cape&&(i.cape.rotation.x=a(i.cape.rotation.x,.08+Math.sin(i.t*2.5)*.04,.1))}}function Fc(n){let e=new qt;if(n==="bike"){for(let u of[-.65,.65])e.box("tire",.1,.8,.8,0,.4,u,{tile:[.8,.8],fit:!0,ao:!1});e.box("white",.1,.1,1.3,0,.75,0,{c:"#ef4444"}),e.box("white",.1,.55,.1,0,.6,.55,{c:"#ef4444"}),e.box("white",.1,.4,.1,0,.8,-.3,{c:"#ef4444"}),e.box("white",.25,.08,.35,0,1.02,-.3,{c:"#111827"}),e.box("metal",.6,.06,.06,0,.98,.6,{c:"#334155"});let c=e.build();return c.userData.bike=!0,c}let t={popular:"#f8fafc",suv:"#334155",esportivo:"#dc2626",neon:"#7c3aed",taxi:"#facc15",azul:"#2563eb",verde:"#16a34a"}[n]||"#f8fafc",i=n==="suv"?4.4:4.1,a=n==="suv"?1:n==="esportivo"||n==="neon"?.55:.75,r=2,o=.45;e.box("carpaint",r,a,i,0,o+a/2,0,{c:t,ao:!1});let s=n==="esportivo"||n==="neon"?i*.42:i*.55,l=n==="esportivo"||n==="neon"?.5:.7,d=-.15;e.box("carglass",r-.2,l,s,0,o+a+l/2,d,{tile:[1,1],ao:!1}),e.box("carpaint",r-.15,.1,s+.05,0,o+a+l+.05,d,{c:t,ao:!1});for(let c of[-1,1])for(let u of[-1,1])e.box("tire",.36,.8,.8,c*(r/2-.1),.4,u*i*.31,{tile:[.8,.8],fit:!0,ao:!1});e.box("metal",r+.05,.25,.2,0,o+.12,i/2+.05,{c:"#475569"}),e.box("metal",r+.05,.25,.2,0,o+.12,-i/2-.05,{c:"#475569"});for(let c of[-1,1])e.box("headlight",.45,.2,.06,c*.62,o+a-.2,i/2+.01,{ao:!1}),e.box("taillight",.45,.18,.06,c*.62,o+a-.2,-i/2-.01,{ao:!1});return e.box("plate",.6,.2,.04,0,o+.2,i/2+.17,{tile:[.6,.2],fit:!0,ao:!1}),e.box("plate",.6,.2,.04,0,o+.2,-i/2-.17,{tile:[.6,.2],fit:!0,ao:!1,ry:Math.PI}),(n==="esportivo"||n==="neon")&&(e.box("carpaint",r-.2,.08,.4,0,o+a+.45,-i/2+.25,{c:"#111827"}),e.box("metal",.1,.4,.1,-.6,o+a+.2,-i/2+.25,{c:"#111827"}),e.box("metal",.1,.4,.1,.6,o+a+.2,-i/2+.25,{c:"#111827"})),n==="neon"&&e.box("neon",r-.3,.06,i-.6,0,.3,0,{ao:!1}),n==="suv"&&e.box("metal",r-.4,.08,1.6,0,o+a+l+.16,d,{c:"#111827"}),n==="taxi"&&e.box("white",.7,.25,.35,0,o+a+l+.2,d,{c:"#111827"}),e.build()}function xh(){let n=new Do(600,24,12),e=new gi({side:$t,depthWrite:!1,fog:!1,uniforms:{top:{value:new Re("#3d8ee8")},mid:{value:new Re("#8ec5f5")},bot:{value:new Re("#dff0ff")}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h = vP.y; vec3 c = h > 0.15 ? mix(mid, top, smoothstep(0.15, 0.7, h)) : mix(bot, mid, smoothstep(-0.05, 0.15, h)); gl_FragColor = vec4(c, 1.0); }"}),t=new Rt(n,e);return t.renderOrder=-1,t.frustumCulled=!1,t}function bh(n){let e=new qt,t=3+(n()*4|0);for(let a=0;a<t;a++)e.box("white",8+n()*14,3+n()*2,6+n()*10,(n()-.5)*20,n()*2,(n()-.5)*10,{ao:!1,c:"#ffffff"});let i=e.build(!1,!1);return i.children.forEach(a=>{a.material=Zo}),i}var kt,ii,dt,Bt,st,qn,ka,Cx,Wo,lh,ch,dh,uh,hh,qt,fh,ph,yn,Ke,Zo,Mh=bi(()=>{Ic();Mr();ih();$o();kt=26,ii=8,dt=kt+ii,Bt=6,st=Bt*dt/2,qn=.25,ka={},Cx={grass:{},sand:{},dirt:{},asphalt:{r:.95},sidewalk:{},brick:{},planks:{},stone:{},plaster:{},quartz:{r:.6},roof:{},leaves:{},log:{},palmlog:{},door:{},concrete:{},metal:{r:.45,m:.5},white:{},tire:{},plate:{},glass:{r:.15,m:.3,emissive:"#ffcf70",ei:0},carpaint:{r:.3,m:.35},gold:{r:.3,m:.75},carglass:{tex:"glass",r:.12,m:.4},water:{r:.08,m:.15,transparent:!0,opacity:.88},hair:{},tower:{r:.35,m:.25,emissiveMap:"towerLit",emissive:"#ffd27a",ei:0},headlight:{tex:"white",emissive:"#fff3c4",ei:.7,base:.7},taillight:{tex:"white",emissive:"#ff2a2a",ei:.5,base:.5},lamp:{tex:"white",emissive:"#ffe7a8",ei:.15,base:.15},neon:{tex:"white",emissive:"#e879f9",ei:1.6,base:1.6}};Wo=new Re;lh=new gt,ch=new di,dh=new Li,uh=new O(1,1,1),hh=new O,qt=class{constructor(){this.parts={},this.m=new gt}at(e,t,i,a=0){return this.m.compose(hh.set(e,t,i),dh.setFromEuler(ch.set(0,a,0)),uh),this}box(e,t,i,a,r,o,s,l={}){var p;let d=wx(t,i,a,l.tile??1,l);lh.compose(hh.set(r,o,s),dh.setFromEuler(ch.set(l.rx||0,l.ry||0,l.rz||0)),uh),d.applyMatrix4(lh),d.applyMatrix4(this.m);let c=d.attributes.position,u=d.attributes.normal,f=new Float32Array(c.count*3);Wo.set(l.c??"#ffffff");for(let g=0;g<c.count;g++){let M=1,m=u.getY(g);l.ao!==!1&&(m<-.5?M=.55:m<.5&&(M=.74+.26*Math.min(1,Math.max(0,(c.getY(g)-qn)/1.6)))),f[g*3]=Wo.r*M,f[g*3+1]=Wo.g*M,f[g*3+2]=Wo.b*M}return d.setAttribute("color",new Ut(f,3)),((p=this.parts)[e]||(p[e]=[])).push(d),this}build(e=!0,t=!0){let i=new Nt;for(let[a,r]of Object.entries(this.parts)){let o=th(r);r.forEach(l=>l.dispose());let s=new Rt(o,Ex(a));s.castShadow=e&&a!=="water",s.receiveShadow=t,i.add(s)}return this.parts={},i}};fh=["#f6e7c8","#fde2e4","#d8f3dc","#dbeafe","#fff1b8","#ffe5cc","#e9d5ff","#ccfbf1","#ffffff","#fecaca"],ph=["#b6412f","#c2562f","#8c3b2a","#4b5563","#2f5d8a","#3f6e4a","#7a4b2a"];yn={};Ke={torso:gh(.96,1,.5),head:gh(.66,.64,.64,!0),limb:new mi(.46,1,.48),cube:new mi(1,1,1)};Zo=new No({color:"#ffffff",emissive:"#e8f2ff",emissiveIntensity:.55,transparent:!0,opacity:.93,fog:!1})});function _h(n=3.2,e=2.2){let t=document.createElement("canvas");t.width=160,t.height=112;let i=t.getContext("2d");i.fillStyle="#009c3b",i.fillRect(0,0,160,112),i.fillStyle="#ffdf00",i.beginPath(),i.moveTo(80,10),i.lineTo(150,56),i.lineTo(80,102),i.lineTo(10,56),i.fill(),i.fillStyle="#002776",i.beginPath(),i.arc(80,56,26,0,7),i.fill(),i.fillStyle="#fff",i.fillRect(56,52,48,5);let a=new Mn(t);a.colorSpace=Pt;let r=new Rt(new Da(n,e,10,1),new Ki({map:a,side:si}));return r.geometry.translate(n/2,0,0),r.castShadow=!0,r}function Px(n){let e=new qt,t=2+(n()*3|0);for(let i=0;i<t;i++){let a=(n()-.5)*1.6,r=(n()-.5)*1.6,o=n();o<.45?e.box("white",.7,.6,.6,a,.3,r,{c:"#1f2937",ry:n()*3}):o<.7?e.box("planks",.8,.6,.8,a,.3,r,{c:"#c8a070",ry:n()*3}):o<.85?e.box("white",.25,.4,.25,a,.2,r,{c:"#dc2626",rz:1.4,ry:n()*3}):e.box("tire",.8,.3,.8,a,.15,r,{tile:[.8,.8],fit:!0})}return n()>.5&&e.box("white",.3,.05,.4,(n()-.5)*2,.03,(n()-.5)*2,{c:"#f8fafc",ao:!1}),e.build(!0,!0)}function Yo(n,e,t,i,a=.05){for(let r=0;r<t;r++){let o=(e()-.5)*i,s=(e()-.5)*i,l=.3+e()*.5;n.box("leaves",.15,l,.15,o,a+l/2,s,{c:e()>.5?"#8aa83a":"#a3a04a",ry:e()*3}),n.box("leaves",.12,l*.7,.12,o+.15,a+l*.35,s+.05,{c:"#7c9a33"})}}function Rx(n,e){let t=new qt,i=n?.stage||0;if(i<4&&t.box("dirt",11,.08,11,0,.04,0,{tile:2,ao:!1,c:"#b08a6a"}),i===0){Yo(t,e,10+(e()*10|0),10);for(let r=0;r<3;r++)t.box("stone",.4+e()*.6,.3+e()*.4,.4+e()*.6,(e()-.5)*9,.2,(e()-.5)*9,{ry:e()*3});if(e()>.55)for(let r=0;r<4;r++){t.box("dirt",4,.25,.7,-1,.15,-3+r*1.2,{c:"#7a5236"});for(let o=0;o<5;o++)t.box("leaves",.35,.35,.35,-2.6+o*.8,.45,-3+r*1.2,{c:"#4caf50"})}else e()>.4&&Di(t,e()>.5?"oak":"palm",(e()-.5)*6,(e()-.5)*6,e,.8,.08);if(t.box("planks",.15,1.6,.15,3.8,.8,4.6,{c:"#a07850"}),t.box("planks",1.8,.9,.1,3.8,1.5,4.66,{c:"#f5deb3"}),e()>.6)for(let r=-5;r<=5;r+=2.5)t.box("planks",.15,.9-e()*.4,.15,r,.4,5.4,{c:"#8b6a4a",rz:(e()-.5)*.4})}else if(i<4){if(t.box("stone",6.4,.5,6.4,0,.25,0),i===1){for(let o=-3;o<=3;o+=1.5)for(let s of[-3,3])t.box("metal",.08,1.6,.08,o,1.3,s,{c:"#7c2d12"});for(let o=0;o<6;o++)t.box("brick",1.2,.3,.6,4.4,.2+o*.3,-3+o%2*.1);t.box("sand",2,1,2,-4.2,.5,3.2,{tile:1})}else{t.box("brick",6,3.2,6,0,2.1,0);for(let[o,s]of[[-1.85,2.2],[1.85,2.2]])t.box("white",1.2,1.1,.1,o,s,3.04,{c:"#2b2b2b",ao:!1});t.box("white",1.1,2.1,.1,0,1.55,3.04,{c:"#2b2b2b",ao:!1}),i===3&&Xo(t,6,6,3.7,"#b6412f");for(let o=1;o<=(i===3?3:4);o++)t.box("planks",7.6,.12,.8,0,o*1.1,3.9,{c:"#c8945a"});for(let o of[-3.7,0,3.7])t.box("metal",.12,i===3?3.6:4.6,.12,o,(i===3?3.6:4.6)/2,4.3,{c:"#64748b"})}t.box("white",.15,1,.15,5.2,.5,5.2,{c:"#f97316"}),t.box("white",.15,1,.15,-5.2,.5,5.2,{c:"#f97316"}),t.box("white",10.4,.12,.05,0,.85,5.2,{c:"#facc15",ao:!1});let r=t.build();return r.userData.footprint=i>=2?[6.6,6.6]:null,r}if(i>=4){let r=vh(n.type||"casa_simples",e,n.golden),o=new Nt;o.add(r);let s=new qt;Yo(s,e,0,1),s.box("grass",11,.04,11,0,.02,0,{tile:2,ao:!1});let l=s.build(!1,!0);return o.add(l),o.userData.footprint=r.userData.footprint,o}let a=t.build();return a.userData.footprint=null,a}function Ix(n,e,t,i){let a=Xt;n.at(e,a,t,0),n.box("stone",25,.1,25,0,.05,0,{tile:2,ao:!1,c:"#f1efe9"});for(let o of[-1,1]){n.box("grass",6.5,.25,9,o*8.5,.15,5.5,{tile:2}),n.box("leaves",6.5,.8,.6,o*8.5,.5,10.2,{c:"#3f8a35"}),n.box("leaves",.6,.8,9,o*11.6,.5,5.5,{c:"#3f8a35"});for(let s=0;s<7;s++)n.box("white",.35,.35,.35,o*(6+s%4*1.4),.45,2.5+Math.floor(s/4)*1.5,{c:["#ef4444","#facc15","#3b82f6","#f472b6"][s%4],ao:!1});Di(n,o>0?"palm":"oak",o*9.5,7,ti(o+5),.8,.25),n.box("metal",.2,7,.2,o*4.5,3.5,11,{c:"#e5e7eb"})}n.box("quartz",4,.08,10,0,.12,7.5),n.box("stone",3.6,.6,3.6,0,.4,7.5,{c:"#e7e5e4"}),n.box("water",3,.1,3,0,.7,7.5,{tile:2,ao:!1}),n.box("quartz",.6,1.6,.6,0,1.2,7.5);for(let o=0;o<3;o++)n.box("quartz",12-o*.6,.3,1,0,.15+o*.3,3.2-o*.6);n.box("stone",21,.9,10,0,.45,-3.5,{c:"#e7e5e4"}),n.box("quartz",19,6,8,0,3.9,-4),n.box("gold",19.4,.3,8.4,0,6.95,-4),n.box("quartz",15,3.6,7,0,8.9,-4.3),n.box("gold",15.4,.3,7.4,0,10.85,-4.3);for(let o of[-7.5,-4.5,4.5,7.5])At(n,o,2.6,.04,"z",1.6,1.8),At(n,o,5.3,.04,"z",1.6,1.6);for(let o of[-5.5,-2,2,5.5])At(n,o,8.9,-.76,"z",1.4,1.4);for(let o of[-9.5,-6,6,9.5])n.box("white",.6,2.4,.08,o===-9.5||o===9.5?o*.95:o,4.2,.08,{c:Math.abs(o)>7?"#16a34a":"#facc15",ao:!1});n.box("door",2.4,3.2,.14,0,2.5,.05,{tile:[2.4,3.2],fit:!0}),n.box("gold",2.9,.3,.2,0,4.2,.1);for(let o=-5;o<=5.01;o+=2)n.box("quartz",.8,6,.8,o,3.9,1.6),n.box("gold",1.1,.3,1.1,o,6.95,1.6),n.box("gold",1.1,.3,1.1,o,1.05,1.6);n.box("quartz",12.5,.9,2.4,0,7.5,1.2),[11,8.4,5.8,3.2].forEach((o,s)=>n.box(s%2?"gold":"quartz",o,.6,2.2,0,8.25+s*.6,1.2));for(let o of[-1,1])n.box("quartz",3.4,10,3.4,o*10.2,5.9,-4),n.box("gold",3.8,.4,3.8,o*10.2,11.1,-4),n.box("gold",2,1.2,2,o*10.2,11.9,-4),At(n,o*10.2,8.6,-2.26,"z",1.2,1.6);[[7,1.2],[5.6,1.1],[4.2,1],[2.6,1.2]].forEach(([o,s],l)=>n.box(l===3||l%2?"gold":"quartz",o,s,o,0,11.6+[0,1.15,2.2,3.3][l],-4.3)),n.box("metal",.18,6,.18,0,18.5,-4.3,{c:"#e5e7eb"}),n.at(0,0,0,0);let r=_h(4.4,3);r.position.set(e+.1,a+20.2,t-4.3),i.push(r);for(let o of[-1,1]){let s=_h(2.4,1.6);s.position.set(e+o*4.5+.1,a+6.2,t+11),i.push(s)}}var Xt,Xn,za,jo,yh=bi(()=>{Mr();Mh();$o();$o();Xt=.28,Xn={palace:"2,2",obra:"3,2",plaza:"2,3",park:"4,1"},za=(n,e)=>[-st+dt/2+n*dt,-st+dt/2+e*dt];jo=class{constructor(e){this.renderer=new wo({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Pt,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=fc,this.renderer.toneMapping=mc,this.renderer.toneMappingExposure=1.1,this.scene=new Ro,this.camera=new Kt(55,1,.5,1400),this.clock=new ko,this.input={x:0,z:0},this.yaw=Math.PI*.25,this.camDist=22,this.camPitch=.62,this.mode="orbit",this.npcs=[],this.labels=[],this.obstacles=[],this.lotObs={},this.player=null,this.driving=!1,this.quality="alta",this.cycle=!1,this.tod=.4,this.anims=[],this.flags=[],this.setQuality("alta"),window.addEventListener("resize",()=>this.resize()),this.resize(),this.renderer.setAnimationLoop(()=>{this.paused||this.tick()})}setQuality(e){this.quality=e;let t=window.devicePixelRatio||1;this.renderer.setPixelRatio(e==="alta"?Math.min(t,2):Math.min(t,1.25)),this.renderer.shadowMap.enabled=e==="alta",Object.values(ka).forEach(i=>i.needsUpdate=!0),Object.values(yn).forEach(i=>i.needsUpdate=!0),this.sun&&(this.sun.castShadow=e==="alta"),this.resize()}setDayNight(e){this.cycle=e,e||(this.tod=.4)}setTimeOfDay(e){this.tod=e,this.cycle=!1}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e<t?70:55,this.camDist=e<t?26:22,this.camPitch=e<t?.8:.62,this.camera.updateProjectionMatrix()}build(e,t,i){let a=ti(e+t);this.r=a,this.side=t,this.cs=i;let r=this.scene;for(r.traverse(T=>{T.isMesh&&T.geometry&&!Object.values(Ke).includes(T.geometry)&&T.geometry.dispose()});r.children.length;)r.remove(r.children[0]);Object.assign(this,{npcs:[],labels:[],obstacles:[],lotObs:{},player:null,vehicle:null,marker:null,driving:!1,anims:[],flags:[],trash:[],planted:[],lotGroups:{},blockBases:{},lotLabels:{}});let o=t==="norte",s=this.quality==="alta",l=i.stage,d=new Set(i.obras||[]);this.stage=l,this.obrasDone=d,this.sky=xh(),r.add(this.sky),r.fog=new Po("#cfe6fb",s?110:80,s?380:260),this.hemi=new Uo("#dcecff","#9c8b62",1.25),r.add(this.hemi),this.sun=new Oo("#fff1d6",2.7),this.sun.castShadow=s,this.sun.shadow.mapSize.set(2048,2048);let c=this.sun.shadow.camera;c.left=c.bottom=-70,c.right=c.top=70,c.near=1,c.far=400,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,r.add(this.sun),r.add(this.sun.target);let u=new qt,f=new qt,p=l>=3?"#ffffff":l>=1?"#eef5c8":"#e3e2a0";u.box("grass",1e3,.2,1e3,0,-.1,0,{tile:2,ao:!1,c:l>=2?"#ffffff":"#ecebb0"});let g=Bt*dt+ii;for(let T=0;T<=Bt;T++){let w=-st+T*dt;u.box("asphalt",g,.06,ii,0,.03,w,{tile:2,ao:!1});for(let v=0;v<Bt;v++){let b=-st+dt/2+v*dt;u.box("asphalt",ii,.06,dt-ii,w,.031,b,{tile:2,ao:!1})}if(l>=1){for(let v=0;v<Bt;v++){let b=-st+dt/2+v*dt;for(let P=-dt/2+ii/2+2.5;P<dt/2-ii/2-1.5;P+=5)u.box("white",2.4,.02,.22,b+P,.07,w,{c:"#facc15",ao:!1}),u.box("white",.22,.02,2.4,w,.07,b+P,{c:"#facc15",ao:!1})}for(let v=0;v<=Bt;v++){let b=-st+v*dt;for(let P=-3;P<=3;P++)u.box("white",.5,.02,2.2,w+P,.075,b+ii/2+1.4,{c:"#f1f5f9",ao:!1}),u.box("white",2.2,.02,.5,w+ii/2+1.4,.075,b+P,{c:"#f1f5f9",ao:!1})}}if(l<2)for(let v=0;v<6;v++){let b=(a()-.5)*g,P=.8+a()*1.6;u.box("asphalt",P,.02,P*(.5+a()),a()>.5?b:w+(a()-.5)*5,.065,a()>.5?w+(a()-.5)*5:b,{c:"#6b6f78",ao:!1})}}let M=l>=2||d.has("iluminacao"),m=l>=4||d.has("calcadas");this.lots=[];for(let T=0;T<Bt;T++)for(let w=0;w<Bt;w++){let[v,b]=za(T,w),P=`${T},${w}`;if(this.setBlockBase(P,m||(i.paved||[]).includes(P),p),M)for(let[k,F]of[[-1,-1],[1,-1],[-1,1],[1,1]])this.lampPost(u,v+k*(kt/2-.6),b+F*(kt/2-.6));if(l>=3&&P!==Xn.palace)for(let[k,F]of[[-1,-1],[1,1]])u.box("leaves",2,.6,1,v+k*10.5,Xt+.3,b+F*12,{c:"#4f9a3a"}),u.box("white",.3,.3,.3,v+k*10.5,Xt+.7,b+F*12,{c:"#f472b6",ao:!1});if(P===Xn.palace){Ix(u,v,b,this.flags),this.palacePos=new O(v,0,b),this.obstacles.push({minX:v-12,maxX:v+12,minZ:b-8.6,maxZ:b+2.2});continue}if(P===Xn.obra){this.obraSite=this.buildObra(u,v,b);continue}if(P===Xn.plaza){d.has("praca")||l>=4?this.buildPlaza(u,v,b):(u.box("dirt",22,.06,22,v,Xt+.03,b,{tile:2,ao:!1,c:"#b08a6a"}),u.at(v,Xt,b),Yo(u,a,30,20),u.at(0,0,0));continue}if(P===Xn.park){let k=d.has("parque");for(let F=0;F<(k?12:4);F++)Di(u,o&&a()>.4?a()>.5?"palm":"ipe":a()>.5?"oak":"pine",v+(a()-.5)*20,b+(a()-.5)*20,a,.9+a()*.3,Xt);k?(u.box("sand",13,.1,9,v,Xt+.02,b,{tile:2,ao:!1}),u.box("water",11,.1,7,v,Xt+.06,b,{tile:2,ao:!1})):(u.at(v,Xt,b),Yo(u,a,40,22),u.at(0,0,0));continue}for(let[k,F,W]of[[-6.5,-6.5,Math.PI],[6.5,-6.5,Math.PI],[-6.5,6.5,0],[6.5,6.5,0]])this.lots.push({x:v+k,z:b+F,rot:W,key:P})}this.lots.sort((T,w)=>Math.hypot(T.x,T.z)-Math.hypot(w.x,w.z)||T.x-w.x||T.z-w.z),this.lots.forEach((T,w)=>{T.idx=w,this.setLot(w,(i.lots||{})[w],!1)});let h=ti(e+"lixo"),y=new Set(i.cleaned||[]);this.trashSpots=[];for(let T=0;T<44;T++){let w=h()*Bt|0,v=h()*Bt|0,[b,P]=za(w,v),k=`${w},${v}`,F=h()*4|0,W=(h()-.5)*22,Q=kt/2-.9,[V,Z]=[[W,-Q],[W,Q],[-Q,W],[Q,W]][F],$=Px(h);k!==Xn.palace&&(this.trashSpots.push(T),!y.has(T)&&($.position.set(b+V,Xt-.02,P+Z),r.add($),this.trash.push({k:T,g:$,x:b+V,z:P+Z})))}for(let[T,w,v]of i.trees||[])this.plantTree(T,w,v,!1);for(let T=0;T<(s?100:55);T++){let w=a()*Math.PI*2,v=st+14+a()*70,b=Math.cos(w)*v,P=Math.sin(w)*v;o&&(b>st+12||P<-st-8)||Di(f,o?a()>.35?"palm":a()>.5?"ipe":"oak":a()>.45?"pine":a()>.2?"oak":"ipe",b,P,a,.9+a()*.5,0)}for(let T=0;T<4;T++){let w=T/4*Math.PI*2+.6,v=st+30,b=Math.cos(w)*v,P=Math.sin(w)*v;if(o&&(b>st+12||P<-st-8))continue;let k=["#4caf50","#facc15","#65a30d","#16a34a"][T];for(let F=0;F<9;F++){f.box("dirt",18,.3,1,b,.15,P-8+F*2,{tile:1,c:"#8b5a3c"});for(let W=0;W<12;W++)f.box("leaves",.6,.6+(T===1?.8:0),.6,b-8+W*1.45,.55,P-8+F*2,{c:k})}}if(o){f.box("sand",34,.2,700,st+30,0,0,{tile:2,ao:!1}),f.box("water",500,.2,900,st+297,-.02,0,{tile:3,ao:!1}),f.box("sand",900,.2,6,0,0,-st-14,{tile:2,ao:!1}),f.box("water",900,.2,18,0,.02,-st-26,{tile:3,ao:!1}),f.box("sand",900,.2,5,0,0,-st-37.5,{tile:2,ao:!1});for(let T=0;T<22;T++)Di(f,"palm",st+20+a()*22,-280+T*26+a()*10,a,1+a()*.3,.1);if(l>=3)for(let T=0;T<4;T++){let w=st+70+a()*80,v=(a()-.5)*200;f.box("planks",2.2,.7,5,w,.35,v,{c:["#dc2626","#2563eb","#f8fafc","#facc15"][T]}),f.box("planks",.15,3,.15,w,2,v)}}else if(l>=4)for(let T=0;T<(s?30+l*4:20);T++){let w=a()*Math.PI*2,v=st+85+a()*90;this.tower(f,Math.cos(w)*v,Math.sin(w)*v,30+a()*20*l,a)}if(l>=3)for(let T=0;T<30;T++){let w=Math.floor(a()*(Bt+1)),v=-st+w*dt,b=(a()-.5)*Bt*dt,P=v+ii/2+.9;Math.abs(((b+st)%dt+dt)%dt)<ii||(a()>.5?Di(u,"oak",P,b,a,.55):Di(u,"oak",b,P,a,.55))}r.add(u.build(s,!0)),r.add(f.build(!1,!0)),this.flags.forEach(T=>r.add(T)),this.clouds=[];let S=ti(7);for(let T=0;T<(s?16:8);T++){let w=bh(S);w.position.set((S()-.5)*900,80+S()*50,(S()-.5)*900),r.add(w),this.clouds.push(w)}this.carsTraffic=[];let x=Math.min(12,Math.max(0,l-2)*3),L=["popular","suv","taxi","azul","verde"];for(let T=0;T<x;T++){let w=Fc(L[T%L.length]);r.add(w),this.carsTraffic.push({m:w,...this.randomRoadPath(a,1.4)})}let E=i.mayor||"";this.palaceLabel=Qi(`\u{1F3DB}\uFE0F Pal\xE1cio do Prefeito @${E}`,{bg:"#2fb14b",fg:"#fff",scale:1.3}),this.palaceLabel.position.set(this.palacePos.x,24,this.palacePos.z-4),r.add(this.palaceLabel),this.applyTime(!0)}setBlockBase(e,t,i){let[a,r]=e.split(",").map(Number),[o,s]=za(a,r);this.blockBases[e]&&(this.scene.remove(this.blockBases[e]),this.blockBases[e].traverse(c=>c.geometry?.dispose()));let l=new qt;if(l.box(t?"sidewalk":"dirt",kt,.25,kt,o,.125,s,{tile:2,ao:!1,c:t?"#ffffff":"#c9a27e"}),l.box("grass",kt-2.4,.05,kt-2.4,o,.27,s,{tile:2,ao:!1,c:i||this._lawn||"#ffffff"}),t)for(let[c,u]of[[-1,0],[1,0],[0,-1],[0,1]])l.box("stone",c?.3:kt,.32,u?.3:kt,o+c*(kt/2-.15),.16,s+u*(kt/2-.15),{c:"#9ca3af",ao:!1});this._lawn=i||this._lawn;let d=l.build(!1,!0);this.scene.add(d),this.blockBases[e]=d,this.blockBases[e].userData.paved=t}isPaved(e){return!!this.blockBases[e]?.userData.paved}setLot(e,t,i=!0){let a=this.lots[e];if(!a)return;this.lotGroups[e]&&this.scene.remove(this.lotGroups[e]),this.lotLabels[e]&&(this.scene.remove(this.lotLabels[e]),this.labels=this.labels.filter(c=>c.s!==this.lotLabels[e]));let r=Rx(t,ti("lot"+e+(t?.type||"")));r.position.set(a.x,Xt-.03,a.z),r.rotation.y=a.rot,this.scene.add(r),this.lotGroups[e]=r,r.traverse(c=>{c.isMesh&&(c.castShadow=this.quality==="alta")});let o=r.userData.footprint;if(delete this.lotObs[e],o){let c=a.rot===0?-1:1;this.lotObs[e]={minX:a.x-o[0]/2,maxX:a.x+o[0]/2,minZ:a.z-o[1]/2+c*.5,maxZ:a.z+o[1]/2+c*.5}}let s=t?.stage||0,l=t?.type==="mansao"?13.5:t?.type==="sobrado"||t?.type==="casa_piscina"?11:8,d;if(t?.me?d=Qi(s>=4?"\u2B50 SUA CASA":`\u2B50 SEU TERRENO \u2022 ${["","Alicerce","Paredes","Telhado"][s]||"Vazio"}`,{bg:"#ffc425",fg:"#1b2340",scale:1.15}):t?.owner?d=Qi(`\u{1F3E0} @${t.owner}`,{bg:"#fff7e6",fg:"#1b2340",scale:.75}):d=Qi("\u{1FAA7} Terreno livre",{bg:"#a7693e",fg:"#fff",scale:.7}),d.position.set(a.x,s>=4?l:s>=2?6:3,a.z),this.scene.add(d),this.lotLabels[e]=d,this.labels.push({s:d,d:t?.me?999:30}),t?.me){if(!this.marker){let c=new qt;c.box("white",.9,.5,.9,0,.9,0,{c:"#facc15",ao:!1}),c.box("white",.55,.45,.55,0,.45,0,{c:"#facc15",ao:!1}),this.marker=c.build(!1),this.marker.children.forEach(u=>{u.material=_t("#facc15",{emissive:"#f59e0b",emissiveIntensity:.7})}),this.scene.add(this.marker)}this.marker.position.set(a.x,d.position.y+1.2,a.z),this.marker.userData.y=d.position.y+1.2}i&&(this.anims.push({g:r,t:0,dur:.7,type:"grow"}),this.poof(a.x,a.z,18))}poof(e,t,i=12,a="#e7e5e4"){for(let r=0;r<i;r++){let o=new Rt(Ke.cube,_t(a));o.scale.setScalar(.3+Math.random()*.4),o.position.set(e+(Math.random()-.5)*4,.5+Math.random()*2,t+(Math.random()-.5)*4),this.scene.add(o),this.anims.push({g:o,t:0,dur:.8+Math.random()*.4,type:"puff",v:new O((Math.random()-.5)*4,3+Math.random()*3,(Math.random()-.5)*4)})}}clearTrash(e){let t=this.trash.findIndex(a=>a.k===e);if(t<0)return;let i=this.trash[t];this.trash.splice(t,1),this.anims.push({g:i.g,t:0,dur:.4,type:"shrink"}),this.poof(i.x,i.z,8,"#86efac")}plantTree(e,t,i="oak",a=!0){let r=new qt;Di(r,i,0,0,ti(Math.round(e*13+t*7)),.75,0);let o=r.build(this.quality==="alta");o.position.set(e,Xt,t),this.scene.add(o),this.planted.push({x:e,z:t,g:o}),a&&(this.anims.push({g:o,t:0,dur:.9,type:"grow"}),this.poof(e,t,8,"#86efac"))}paveBlock(e){this.setBlockBase(e,!0);let[t,i]=e.split(",").map(Number),[a,r]=za(t,i);this.poof(a+12,r,10,"#d6d3d1"),this.poof(a-12,r,10,"#d6d3d1")}nearest(e){let t=null;for(let u of this.trash){let f=Math.hypot(u.x-e.x,u.z-e.z);(!t||f<t.d)&&(t={k:u.k,d:f})}let i=null;for(let u of this.lots){let f=Math.hypot(u.x-e.x,u.z-e.z);(!i||f<i.d)&&(i={idx:u.idx,d:f})}let a=Math.floor((e.x+st)/dt),r=Math.floor((e.z+st)/dt),o=null;if(a>=0&&r>=0&&a<Bt&&r<Bt){let[u,f]=za(a,r);Math.abs(e.x-u)<kt/2+1.2&&Math.abs(e.z-f)<kt/2+1.2&&(o=`${a},${r}`)}let s=o&&(()=>{let[u,f]=za(a,r);return Math.abs(e.x-u)<kt/2-.5&&Math.abs(e.z-f)<kt/2-.5})(),l=this.planted.some(u=>Math.hypot(u.x-e.x,u.z-e.z)<2.8),d=o&&Object.values(Xn).includes(o),c=s&&!d&&!l&&(!i||i.d>6.8);return{trash:t,lot:i,block:o,special:d,canPlant:c}}frontOfLot(e){let t=this.lots[e];return new O(t.x+1.5,0,t.z+(t.rot===0?1:-1)*8.6)}frontOfPalace(){return new O(this.palacePos.x+2.5,0,this.palacePos.z+15.5)}facePoint(e){let t=this.player.position;this.yaw=Math.atan2(t.x-e.x,t.z-e.z)+.3,this.player.rotation.y=this.yaw+Math.PI-.3}lampPost(e,t,i){e.box("metal",.18,4.4,.18,t,2.45,i,{c:"#374151"}),e.box("metal",.9,.14,.14,t,4.6,i,{c:"#374151",ry:Math.atan2(-t,-i)+Math.PI/2}),e.box("lamp",.4,.3,.4,t,4.45,i,{ao:!1})}bench(e,t,i,a){e.box("planks",2.2,.15,.7,t,.75,i,{ry:a,c:"#c8945a"}),e.box("planks",2.2,.5,.12,t+Math.sin(a)*-.3,1.1,i+Math.cos(a)*-.3,{ry:a,c:"#c8945a"}),e.box("metal",.12,.5,.6,t,.45,i,{ry:a,c:"#334155"})}tower(e,t,i,a,r){let s=["#ffffff","#dbeafe","#e2e8f0","#fde68a","#d1fae5","#c7d2fe"][r()*6|0];e.box("concrete",10+.6,1.4,10+.6,t,.7,i),e.box("tower",10,a,10,t,1.4+a/2,i,{tile:8,c:s,ao:!1}),e.box("concrete",10+.4,.6,10+.4,t,1.4+a+.3,i)}buildPlaza(e,t,i){e.box("stone",22,.08,22,t,Xt+.04,i,{tile:2,ao:!1,c:"#e7e5e4"}),e.box("stone",7,.8,.7,t,.7,i+3.15,{c:"#d6d3d1"}),e.box("stone",7,.8,.7,t,.7,i-3.15,{c:"#d6d3d1"}),e.box("stone",.7,.8,7,t+3.15,.7,i,{c:"#d6d3d1"}),e.box("stone",.7,.8,7,t-3.15,.7,i,{c:"#d6d3d1"}),e.box("water",5.6,.12,5.6,t,.95,i,{tile:2,ao:!1}),e.box("stone",1,2.6,1,t,1.6,i,{c:"#d6d3d1"}),e.box("stone",2.2,.4,2.2,t,2.9,i,{c:"#d6d3d1"}),this.fountain=new Rt(new mi(.7,.9,.7),new Ki({map:Ua.water(),roughness:.1,transparent:!0,opacity:.85})),this.fountain.position.set(t,3.6,i),this.scene.add(this.fountain),this.obstacles.push({minX:t-3.5,maxX:t+3.5,minZ:i-3.5,maxZ:i+3.5});let a=this.r;for(let[r,o]of[[-8,8],[8,8],[-8,-8],[8,-8]])Di(e,this.side==="norte"?a()>.5?"palm":"ipe":"oak",t+r,i+o,a,.85,Xt);for(let[r,o,s]of[[0,6.2,0],[0,-6.2,Math.PI],[6.2,0,Math.PI/2],[-6.2,0,-Math.PI/2]])this.bench(e,t+r,i+o,s)}buildObra(e,t,i){let a=new Nt;a.position.set(t,Xt,i),this.scene.add(a),e.box("dirt",22,.1,22,t,Xt+.02,i,{tile:2,ao:!1});for(let l=-10;l<=10;l+=1)e.box("white",.9,1,.12,t+l,.8,i+11,{c:l%2?"#f97316":"#f8fafc",ao:!1});for(let l=0;l<3;l++)e.box("brick",1.2,.6,1.2,t-9+l*1.3,.6,i+8);e.box("sand",2.5,1.2,2.5,t+8.5,.9,i+7,{tile:1});let r=new Nt;r.position.set(8,0,-8),a.add(r);let o=new qt;for(let l=0;l<22;l+=2)o.box("white",1.2,.15,.15,0,l+1,.55,{c:"#facc15"}),o.box("white",1.2,.15,.15,0,l+1,-.55,{c:"#facc15"});for(let[l,d]of[[-.55,-.55],[.55,-.55],[-.55,.55],[.55,.55]])o.box("white",.18,22,.18,l,11,d,{c:"#facc15"});o.box("white",16,.6,.8,-6,22.3,0,{c:"#facc15"}),o.box("concrete",2.5,1.5,1.4,3,21.8,0),o.box("metal",.06,8,.06,-12,18,0,{c:"#111827"}),o.box("planks",1.6,.4,1.6,-12,14,0),r.add(o.build());let s=Qi("\u{1F3D7}\uFE0F OBRA DA CIDADE",{bg:"#ff8a2a",fg:"#fff",scale:1.4});return s.position.set(0,26,-1),a.add(s),this.obstacles.push({minX:t-7,maxX:t+7,minZ:i-8,maxZ:i+6}),{g:a,crane:r,label:s,bld:null}}setObraProgress(e,t){if(!this.obraSite)return;let i=this.obraSite,a=Math.round(e*100);if(i.pct===a&&i.name===t)return;i.pct=a,i.name=t;let r=Math.max(1,Math.round(e*7)),o=3;i.bld&&(i.g.remove(i.bld),i.bld.traverse(l=>l.geometry?.dispose()));let s=new qt;for(let l=0;l<r;l++){let d=l*o;s.box("concrete",12,.4,12,0,d+.2,-1);for(let[c,u]of[[-5.6,-6.6],[5.6,-6.6],[-5.6,4.6],[5.6,4.6],[0,4.6],[0,-6.6]])s.box("concrete",.7,o-.4,.7,c,d+.4+(o-.4)/2,u);l<r-1&&(s.box("brick",12,o-.4,.4,0,d+.4+(o-.4)/2,-6.8),s.box("brick",.4,o-.4,11,-6,d+.4+(o-.4)/2,-1.3)),s.box("planks",14,.12,1,0,d+o-.1,5.6)}i.bld=s.build(),i.g.add(i.bld),i.g.remove(i.label),i.label=Qi("\u{1F3D7}\uFE0F "+t+" "+a+"%",{bg:"#ff8a2a",fg:"#fff",scale:1.4}),i.label.position.set(0,Math.max(26,r*o+5),-1),i.g.add(i.label)}setPlayer(e,t){this.player&&this.scene.remove(this.player),this.player=Bc(e);let i=this.playerPos||this.spawn||new O;this.player.position.copy(i),this.player.position.y=qn,this.scene.add(this.player);let a=Qi((e.mayor?"\u{1F451} ":"")+"@"+t,{bg:e.mayor?"#2fb14b":"#ffc425",fg:e.mayor?"#fff":"#1b2340",scale:.65});a.position.y=3.4,this.player.add(a),this.playerLabel=a,this.mode="follow",this.driving&&this.vehicle&&(this.player.visible=!!this.vehicle.userData.bike)}setVehicle(e,t){if(this.vehicle&&(this.scene.remove(this.vehicle),this.vehicle=null),!e){this.driving=!1;return}this.vehicle=Fc(e),this.scene.add(this.vehicle),this.parkAt=t,this.parkVehicle()}parkVehicle(){!this.vehicle||!this.parkAt||(this.vehicle.position.set(this.parkAt.x-5.5,0,this.parkAt.z+.5),this.vehicle.rotation.y=Math.PI/2)}toggleDrive(){return!this.vehicle||!this.player?!1:(this.driving=!this.driving,this.driving?(this.player.position.copy(this.vehicle.position),this.player.visible=!!this.vehicle.userData.bike):(this.player.visible=!0,this.player.position.x+=2.6,this.player.position.y=qn),this.driving)}spawnNPCs(e,t){let i=this.r,a=Object.keys(Oa).filter(l=>l!=="prefeito"),r=["#ef4444","#f97316","#eab308","#22c55e","#06b6d4","#3b82f6","#a855f7","#ec4899","#f8fafc","#111827"],o=["#f1c27d","#e0ac69","#c68642","#8d5524","#ffdbac","#a0522d","#6b3e26"],s=["#1b120c","#2b1a10","#5a3825","#a0522d","#e6c27a","#111111"];for(let l=0;l<e;l++){let d=Bc({shirt:r[i()*r.length|0],skin:o[i()*o.length|0],hairCol:s[i()*s.length|0],prof:a[i()*a.length|0],face:i()>.5?1:0});this.scene.add(d);let c=t[l%t.length],u=Qi("@"+c,{scale:.6});u.position.y=3.2,d.add(u),this.labels.push({s:u,d:28,parent:d}),this.npcs.push({m:d,...this.randomRoadPath(i,.25+i()*.15,!0),name:c,pause:0})}}randomRoadPath(e,t,i=!1){let a=i?ii/2+.7:0,r=e()>.5,o=Math.floor(e()*(Bt+1)),s=-st+o*dt+(a&&e()>.5?a:-a);return{horiz:r,c:s,t:(e()-.5)*Bt*dt,dir:e()>.5?1:-1,speed:t*10}}collide(e,t=.6){let i=st+ii/2+10;e.x=Math.max(-i,Math.min(i,e.x)),e.z=Math.max(-i,Math.min(i,e.z));for(let a of[...this.obstacles,...Object.values(this.lotObs)])if(e.x>a.minX-t&&e.x<a.maxX+t&&e.z>a.minZ-t&&e.z<a.maxZ+t){let r=e.x-(a.minX-t),o=a.maxX+t-e.x,s=e.z-(a.minZ-t),l=a.maxZ+t-e.z,d=Math.min(r,o,s,l);d===r?e.x=a.minX-t:d===o?e.x=a.maxX+t:d===s?e.z=a.minZ-t:e.z=a.maxZ+t}}applyTime(e=!1){let t=-Math.cos(this.tod*Math.PI*2),i=Ho.smoothstep(t,-.18,.3),a=1-i;if(!e&&Math.abs((this._lastDay??-1)-i)<.004)return;this._lastDay=i;let r=this.sky?.material.uniforms,o=(s,l)=>new Re(s).lerp(new Re(l),i);r&&(r.top.value.copy(o("#050b1f","#3d8ee8")),r.mid.value.copy(o("#14214a","#8ec5f5")),r.bot.value.copy(o("#2a2f55","#dff0ff"))),this.scene.fog&&this.scene.fog.color.copy(o("#1a2147","#cfe6fb")),this.hemi&&(this.hemi.intensity=.28+.97*i),this.sun&&(this.sun.intensity=.15+2.55*i);for(let[s,l]of Object.entries(ka)){let d=l.userData.def||{};s==="tower"?l.emissiveIntensity=a*1.6:s==="glass"?l.emissiveIntensity=a*.55:d.base!==void 0&&(l.emissiveIntensity=d.base+a*(s==="lamp"?2.4:1.4))}Zo.emissiveIntensity=.1+.45*i,Zo.opacity=.5+.43*i}tick(){let e=this.fixedDt||Math.min(this.clock.getDelta(),.05);this._t=(this._t||0)+e;let t=this._t;this.cycle&&(this.tod=(this.tod+e/360)%1),this.applyTime();let i=Ua.water();i.offset.x=t*.03%1,i.offset.y=Math.sin(t*.4)*.05;let a=Bt*dt/2;for(let l of this.npcs){if(l.pause>0){l.pause-=e,Jo(l.m,0,e);continue}l.t+=l.dir*l.speed*e*.35,Math.abs(l.t)>a&&(l.dir*=-1),Math.random()<.0015&&(l.pause=1.5+Math.random()*3),Math.random()<.0015&&(l.dir*=-1),l.horiz?(l.m.position.set(l.t,qn,l.c),l.m.rotation.y=l.dir>0?Math.PI/2:-Math.PI/2):(l.m.position.set(l.c,qn,l.t),l.m.rotation.y=l.dir>0?0:Math.PI),Jo(l.m,.45,e)}for(let l of this.carsTraffic||[])l.t+=l.dir*l.speed*e,Math.abs(l.t)>a+6&&(l.t=-l.dir*(a+5)),l.horiz?(l.m.position.set(l.t,.06,l.c+(l.dir>0?1.9:-1.9)),l.m.rotation.y=l.dir>0?Math.PI/2:-Math.PI/2):(l.m.position.set(l.c+(l.dir>0?-1.9:1.9),.06,l.t),l.m.rotation.y=l.dir>0?0:Math.PI);for(let l of this.clouds||[])l.position.x+=e*2.2,l.position.x>480&&(l.position.x=-480);this.fountain&&(this.fountain.position.y=3.6+Math.sin(t*3)*.12,this.fountain.scale.y=1+Math.sin(t*6)*.15);for(let l of this.flags){let d=l.geometry.attributes.position;for(let c=0;c<d.count;c++){let u=d.getX(c);d.setZ(c,Math.sin(t*4+u*1.6)*.12*u)}d.needsUpdate=!0}this.marker&&(this.marker.position.y=this.marker.userData.y+Math.sin(t*3)*.4,this.marker.rotation.y=t*1.5),this.obraSite&&(this.obraSite.crane.rotation.y=Math.sin(t*.3)*.8);for(let l=this.anims.length-1;l>=0;l--){let d=this.anims[l];d.t+=e;let c=Math.min(1,d.t/d.dur);if(d.type==="grow"){let u=1-Math.pow(1-c,3),f=c<1?.2+.8*u+Math.sin(c*Math.PI)*.12:1;d.g.scale.set(1,f,1)}else d.type==="shrink"?(d.g.scale.setScalar(Math.max(.001,1-c)),c>=1&&this.scene.remove(d.g)):d.type==="puff"&&(d.v.y-=9*e,d.g.position.addScaledVector(d.v,e),d.g.scale.multiplyScalar(.985),c>=1&&this.scene.remove(d.g));c>=1&&this.anims.splice(l,1)}let r=this.camera,o;if(this.mode==="follow"&&this.player){let{x:l,z:d}=this.input,c=Math.min(1,Math.hypot(l,d)),u=this.driving?this.vehicle:this.player;if(c>.05){let M=new O(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),m=new O(-M.z,0,M.x),h=M.multiplyScalar(-d).add(m.multiplyScalar(l)).normalize(),y=(c>.85?10.5:8)*(this.speedMul||1)*(this.driving?this.vehicleSpeed||2:1);u.position.addScaledVector(h,y*c*e),this.collide(u.position,this.driving?1.4:.6);let x=Math.atan2(h.x,h.z)-u.rotation.y;x=Math.atan2(Math.sin(x),Math.cos(x)),u.rotation.y+=x*Math.min(1,e*12),this.driving&&(this.player.position.copy(u.position),this.player.rotation.y=u.rotation.y,this.player.position.y=this.vehicle.userData.bike?.35:0)}Jo(this.player,this.driving?this.vehicle?.userData.bike&&c>.05?.3:0:c,e),this.playerPos=u.position.clone();let f=u.position.clone().add(new O(0,2,0));o=f;let p=this.camDist*(this.driving?1.3:1),g=new O(f.x+Math.sin(this.yaw)*Math.cos(this.camPitch)*p,f.y+Math.sin(this.camPitch)*p,f.z+Math.cos(this.yaw)*Math.cos(this.camPitch)*p);r.position.lerp(g,Math.min(1,e*6)),r.lookAt(f)}else if(this.mode==="cine"&&this.cine)this.cine(r,t,e),o=new O;else{this.yaw+=e*.08;let l=150;o=new O,r.position.set(Math.sin(this.yaw)*l,75,Math.cos(this.yaw)*l),r.lookAt(0,0,0)}if(this.sun){let l=this.tod*Math.PI*2;this.sun.position.copy(o).add(new O(Math.sin(l)*70+40,Math.max(20,-Math.cos(l)*110),50)),this.sun.target.position.copy(o)}this.sky&&this.sky.position.copy(r.position);let s=this.mode==="follow"&&this.playerPos?this.playerPos:r.position;for(let l of this.labels){let d=l.parent?l.parent.position:l.s.position;l.s.visible=Math.hypot(d.x-s.x,d.z-s.z)<l.d}this.renderer.render(this.scene,r)}}});var Uc,Sn,Sh,Oc,Ko,en,yr,Qe,Va,Ah,Ha,An,Qo,Ga,zt,Jn,kc,es,zc,Vc,Hc=bi(()=>{Uc="BRASIL CITY",Sn={norte:{id:"norte",nome:"Brasil do Norte",regioes:["Norte","Nordeste"],estilo:"Cooperativo",cor:"#10b981",emoji:"\u{1F334}",lema:"Juntos a gente constr\xF3i mais.",perks:["\u{1F91D} 20% do sal\xE1rio vai pro Fundo Coletivo das obras","\u{1F33F} B\xF4nus da natureza: +15% de XP","\u{1F3D7}\uFE0F Mutir\xE3o: ajude nas obras e ganhe reputa\xE7\xE3o","\u{1F4B0} Renda da Cooperativa a cada minuto"]},sul:{id:"sul",nome:"Brasil do Sul",regioes:["Sul","Sudeste","Centro-Oeste"],estilo:"Competitivo",cor:"#3b82f6",emoji:"\u{1F3D9}\uFE0F",lema:"Cada um faz o seu corre.",perks:["\u{1F4B5} Voc\xEA fica com 100% do que ganha","\u{1F3EA} Mercado: compre neg\xF3cios que rendem dinheiro","\u{1F3C6} Ranking dos mais ricos","\u{1F91D} Patrocine obras e ganhe reputa\xE7\xE3o"]}},Sh={Norte:["AC","AM","AP","PA","RO","RR","TO"],Nordeste:["AL","BA","CE","MA","PB","PE","PI","RN","SE"],Sul:["PR","RS","SC"],Sudeste:["ES","MG","RJ","SP"],"Centro-Oeste":["DF","GO","MS","MT"]},Oc={AC:"Acre",AM:"Amazonas",AP:"Amap\xE1",PA:"Par\xE1",RO:"Rond\xF4nia",RR:"Roraima",TO:"Tocantins",MA:"Maranh\xE3o",PI:"Piau\xED",CE:"Cear\xE1",RN:"Rio Grande do Norte",PB:"Para\xEDba",PE:"Pernambuco",AL:"Alagoas",SE:"Sergipe",BA:"Bahia",PR:"Paran\xE1",SC:"Santa Catarina",RS:"Rio Grande do Sul",SP:"S\xE3o Paulo",RJ:"Rio de Janeiro",MG:"Minas Gerais",ES:"Esp\xEDrito Santo",GO:"Goi\xE1s",MT:"Mato Grosso",MS:"Mato Grosso do Sul",DF:"Distrito Federal"},Ko={AC:"Rio Branco",AM:"Manaus",AP:"Macap\xE1",PA:"Bel\xE9m",RO:"Porto Velho",RR:"Boa Vista",TO:"Palmas",MA:"S\xE3o Lu\xEDs",PI:"Teresina",CE:"Fortaleza",RN:"Natal",PB:"Jo\xE3o Pessoa",PE:"Recife",AL:"Macei\xF3",SE:"Aracaju",BA:"Salvador",PR:"Curitiba",SC:"Florian\xF3polis",RS:"Porto Alegre",SP:"S\xE3o Paulo",RJ:"Rio de Janeiro",MG:"Belo Horizonte",ES:"Vit\xF3ria",GO:"Goi\xE2nia",MT:"Cuiab\xE1",MS:"Campo Grande",DF:"Bras\xEDlia"},en=[0,100,260,500,850,1350,2e3,2900],yr=8,Qe=(n,e,t,i,a,r,o,s,l={})=>({id:n,nome:e,emoji:t,nivel:i,salario:a,xp:r,mg:o,desc:s,...l}),Va=[Qe("pedreiro","Pedreiro(a)","\u{1F9F1}",1,38,25,"bricks","Empilhe tijolos no ponto certo."),Qe("empacotador","Empacotador(a)","\u{1F6D2}",1,36,25,"match3","Junte 3 produtos iguais."),Qe("gari","Gari","\u{1F9F9}",1,38,25,"sort","Separe o lixo na lixeira certa."),Qe("entregador","Entregador(a)","\u{1F6F5}",1,40,25,"delivery","Pilote at\xE9 a casa marcada."),Qe("ambulante","Vendedor(a) Ambulante","\u{1F33D}",1,37,25,"match3","Combine os lanches da barraca."),Qe("garcom","Gar\xE7om/Gar\xE7onete","\u{1F37D}\uFE0F",1,37,25,"cook","Monte o pedido na ordem certa."),Qe("jardineiro","Jardineiro(a)","\u{1F331}",1,36,25,"tap","Regue as plantas, cuidado com as pragas."),Qe("pintor","Pintor(a)","\u{1F3A8}",1,37,25,"tap","Pinte as paredes rapidinho."),Qe("mestre_obras","Mestre de Obras","\u{1F477}",2,60,35,"bricks","Torres mais altas, mais r\xE1pidas."),Qe("motorista","Motorista de App","\u{1F695}",2,62,35,"delivery","Busque os passageiros."),Qe("caixa","Operador(a) de Caixa","\u{1F4B3}",2,58,35,"match3","Combine pagamentos iguais."),Qe("eletricista","Eletricista","\u26A1",3,92,45,"tap","Conserte as l\xE2mpadas queimadas."),Qe("cozinheiro","Cozinheiro(a)","\u{1F373}",3,95,45,"cook","Prepare o prato antes de queimar."),Qe("mecanico","Mec\xE2nico(a)","\u{1F527}",3,90,45,"tap","Aperte os parafusos soltos."),Qe("professor","Professor(a)","\u{1F4DA}",4,140,55,"quiz","Responda o quiz da turma."),Qe("bombeiro","Bombeiro(a)","\u{1F692}",4,148,55,"fire","Mire a \xE1gua e apague o fogo."),Qe("policial","Policial","\u{1F693}",4,145,55,"tap","Pegue os ladr\xF5es, n\xE3o os inocentes."),Qe("enfermeiro","Enfermeiro(a)","\u{1F489}",5,210,70,"quiz","Escolha o cuidado certo."),Qe("programador","Programador(a)","\u{1F4BB}",5,218,70,"tap","Esmague os bugs do sistema."),Qe("jornalista","Jornalista","\u{1F4F0}",5,205,70,"quiz","Fato ou fake? Decida r\xE1pido."),Qe("engenheiro","Engenheiro(a)","\u{1F4D0}",6,300,85,"bricks","Construa a torre perfeita."),Qe("advogado","Advogado(a)","\u2696\uFE0F",6,310,85,"court","Ache a contradi\xE7\xE3o no depoimento."),Qe("corretor","Corretor(a) de Im\xF3veis","\u{1F3D8}\uFE0F",6,295,85,"market","Compre barato, venda caro."),Qe("medico","M\xE9dico(a)","\u{1FA7A}",7,450,100,"quiz","Diagnostique o paciente."),Qe("empresario","Empres\xE1rio(a)","\u{1F4BC}",7,460,100,"market","Opere na bolsa da cidade."),Qe("juiz","Juiz(a)","\u{1F468}\u200D\u2696\uFE0F",7,455,100,"court","Julgue as provas com aten\xE7\xE3o."),Qe("jogador","Jogador(a) de Futebol","\u26BD",8,700,130,"penalty","Bata os p\xEAnaltis.",{raro:!0,req:{tipo:"totalWorks",valor:60,texto:"Passar na peneira: 60 trabalhos"}}),Qe("vereador","Vereador(a)","\u{1F5F3}\uFE0F",8,720,130,"quiz","Decida o melhor pra cidade.",{raro:!0,req:{tipo:"reputacao",valor:300,texto:"300 de reputa\xE7\xE3o (ajude a cidade)"}}),Qe("heroi","Super-her\xF3i(na)","\u{1F9B8}",8,700,140,"tap","Proteja a cidade dos vil\xF5es.",{raro:!0,req:{tipo:"perfeitos",valor:25,texto:"25 trabalhos com 3 estrelas"}})],Ah=Qe("prefeito","Prefeito(a)","\u{1F3DB}\uFE0F",1,120,40,"quiz","Tome decis\xF5es pela cidade."),Ha=[{id:"alicerce",nome:"Alicerce",emoji:"\u{1FAA8}",preco:100,xp:30},{id:"paredes",nome:"Paredes",emoji:"\u{1F9F1}",preco:250,xp:50},{id:"telhado",nome:"Telhado",emoji:"\u{1F3E0}",preco:400,xp:70},{id:"acabamento",nome:"Acabamento",emoji:"\u2728",preco:600,xp:100}],An={casas:[{id:"casa_simples",nome:"Casa Simples",preco:0,emoji:"\u{1F3E0}",desc:"Sua casa constru\xEDda."},{id:"casa_reformada",nome:"Casa Reformada",preco:600,emoji:"\u{1F3E1}",desc:"Cerca, jardim e flores."},{id:"sobrado",nome:"Sobrado",preco:2500,emoji:"\u{1F3D8}\uFE0F",desc:"Dois andares e varanda."},{id:"casa_piscina",nome:"Casa com Piscina",preco:7e3,emoji:"\u{1F3CA}",desc:"Sobrado com piscina."},{id:"mansao",nome:"Mans\xE3o",preco:2e4,emoji:"\u{1F3F0}",desc:"Colunas, piscina e muito espa\xE7o."}],veiculos:[{id:"bike",nome:"Bicicleta",preco:150,emoji:"\u{1F6B2}",desc:"+40% de velocidade. Liberada desde o in\xEDcio.",vel:1.4},{id:"popular",nome:"Carro Popular",preco:3e3,emoji:"\u{1F697}",desc:"Dirija pela cidade!",vel:2.2,casa:!0},{id:"suv",nome:"SUV",preco:12e3,emoji:"\u{1F699}",desc:"Grand\xE3o e confort\xE1vel.",vel:2.5,casa:!0},{id:"p_esportivo",nome:"Esportivo",pix:3,emoji:"\u{1F3CE}\uFE0F",desc:"O mais r\xE1pido da cidade.",premium:!0,casa:!0},{id:"p_carro_neon",nome:"Carro Neon",pix:4,emoji:"\u{1F698}",desc:"Luzes neon por baixo.",premium:!0,casa:!0}],roupas:[{id:"camisa_verde",nome:"Camisa Verde",preco:0,cor:"#16a34a",tipo:"camisa",desc:"B\xE1sica."},{id:"camisa_amarela",nome:"Camisa Canarinho",preco:80,cor:"#facc15",tipo:"camisa",desc:"Pra torcer pela cidade."},{id:"camisa_azul",nome:"Camisa Azul",preco:80,cor:"#2563eb",tipo:"camisa",desc:"Cl\xE1ssica."},{id:"camisa_vermelha",nome:"Camisa Vermelha",preco:80,cor:"#dc2626",tipo:"camisa",desc:"Chama aten\xE7\xE3o."},{id:"camisa_rosa",nome:"Camisa Rosa",preco:120,cor:"#ec4899",tipo:"camisa",desc:"Estilosa."},{id:"camisa_preta",nome:"Camisa Preta",preco:150,cor:"#111827",tipo:"camisa",desc:"Elegante."},{id:"bone",nome:"Bon\xE9",preco:120,tipo:"chapeu",modelo:"bone",desc:"Aba reta."},{id:"palha",nome:"Chap\xE9u de Palha",preco:150,tipo:"chapeu",modelo:"palha",desc:"Pro sol forte."},{id:"coroa",nome:"Coroa",preco:5e3,tipo:"chapeu",modelo:"coroa",desc:"Pra quem manda."}],premium:[{id:"p_mansao_dourada",nome:"Mans\xE3o Dourada",pix:9.9,emoji:"\u{1F3C6}",desc:"Mans\xE3o exclusiva em ouro."},{id:"p_capa",nome:"Capa de Super-her\xF3i",pix:2.9,emoji:"\u{1F9B8}",desc:"Capa vermelha esvoa\xE7ante."},{id:"p_turbo",nome:"Turbo XP 2x (24h)",pix:1.99,emoji:"\u{1F680}",desc:"Dobro de XP por 24 horas."},{id:"p_energia",nome:"Energia Cheia",pix:1,emoji:"\u26A1",desc:"Recarrega na hora."},{id:"p_pet",nome:"Pet Caramelo",pix:3.9,emoji:"\u{1F415}",desc:"Um vira-lata caramelo te segue."}]},Qo=[{id:"pipoca",nome:"Carrinho de Pipoca",emoji:"\u{1F37F}",preco:300,renda:2},{id:"lanchonete",nome:"Lanchonete",emoji:"\u{1F354}",preco:1500,renda:9},{id:"mercadinho",nome:"Mercadinho",emoji:"\u{1F3EA}",preco:6e3,renda:35},{id:"concessionaria",nome:"Concession\xE1ria",emoji:"\u{1F698}",preco:25e3,renda:140}],Ga=[{id:"praca",nome:"Pra\xE7a Central",emoji:"\u26F2",meta:3e3,efeito:"Pra\xE7a com fonte no centro"},{id:"iluminacao",nome:"Ilumina\xE7\xE3o P\xFAblica",emoji:"\u{1F4A1}",meta:5e3,efeito:"Postes em todas as ruas"},{id:"calcadas",nome:"Cal\xE7adas Novas",emoji:"\u{1F9F1}",meta:8e3,efeito:"Todas as cal\xE7adas pavimentadas"},{id:"parque",nome:"Parque da Cidade",emoji:"\u{1F333}",meta:12e3,efeito:"Parque com lago e \xE1rvores"},{id:"escola",nome:"Escola",emoji:"\u{1F3EB}",meta:18e3,efeito:"+5% de XP pra cidade"},{id:"hospital",nome:"Hospital",emoji:"\u{1F3E5}",meta:26e3,efeito:"+10 de energia m\xE1xima"},{id:"estadio",nome:"Est\xE1dio",emoji:"\u{1F3DF}\uFE0F",meta:4e4,efeito:"Orgulho da cidade"}],zt=[{nome:"Vila",emoji:"\u{1F3DA}\uFE0F",min:0},{nome:"Cidade Comum",emoji:"\u{1F3D8}\uFE0F",min:250},{nome:"Cidade em Crescimento",emoji:"\u{1F3D7}\uFE0F",min:700},{nome:"Cidade Desenvolvida",emoji:"\u{1F306}",min:1500},{nome:"N\xEDvel Su\xED\xE7a",emoji:"\u{1F1E8}\u{1F1ED}",min:2800},{nome:"N\xEDvel Jap\xE3o",emoji:"\u{1F1EF}\u{1F1F5}",min:4500},{nome:"N\xEDvel Estados Unidos",emoji:"\u{1F1FA}\u{1F1F8}",min:7e3},{nome:"Grande Pot\xEAncia",emoji:"\u{1F451}",min:1e4}],Jn=[{id:"work3",txt:"Fa\xE7a 3 trabalhos",ev:"work",meta:3,r:{$:150,xp:30}},{id:"stars3",txt:"Tire \u2B50\u2B50\u2B50 em um trabalho",ev:"stars3",meta:1,r:{$:200,xp:20}},{id:"trash5",txt:"Limpe 5 lixos da cidade",ev:"trash",meta:5,r:{$:150,xp:40}},{id:"tree2",txt:"Plante 2 \xE1rvores",ev:"tree",meta:2,r:{$:120,xp:40}},{id:"build1",txt:"Avance 1 etapa da sua casa",ev:"build",meta:1,r:{$:200,xp:30}},{id:"obra1",txt:"Ajude na obra da cidade",ev:"obra",meta:1,r:{$:120,xp:30}},{id:"earn400",txt:"Ganhe \u{1FA99}400 trabalhando",ev:"earn",meta:400,r:{$:150,xp:30}},{id:"pave1",txt:"Pavimente 1 cal\xE7ada",ev:"pave",meta:1,r:{$:150,xp:40}}],kc=[{d:1,txt:"\u{1FA99}100",$:100},{d:2,txt:"\u{1FA99}150",$:150},{d:3,txt:"\u26A1 Energia cheia",en:!0},{d:4,txt:"\u{1FA99}300",$:300},{d:5,txt:"\u{1FA99}400 + 50 XP",$:400,xp:50},{d:6,txt:"\u{1FA99}500 + \u26A1",$:500,en:!0},{d:7,txt:"\u{1FA99}1.000 + 150 XP",$:1e3,xp:150}],es=[{id:"w1",emoji:"\u{1F476}",nome:"Primeiro corre",txt:"Fa\xE7a seu primeiro trabalho",ok:n=>n.stats.totalWorks>=1},{id:"w10",emoji:"\u{1F4AA}",nome:"Trabalhador",txt:"10 trabalhos",ok:n=>n.stats.totalWorks>=10},{id:"w50",emoji:"\u{1F3C5}",nome:"Incans\xE1vel",txt:"50 trabalhos",ok:n=>n.stats.totalWorks>=50},{id:"s3",emoji:"\u2B50",nome:"Perfeito!",txt:"Tire 3 estrelas",ok:n=>n.stats.perfeitos>=1},{id:"s25",emoji:"\u{1F31F}",nome:"Mestre",txt:"25 trabalhos com 3 estrelas",ok:n=>n.stats.perfeitos>=25},{id:"casa",emoji:"\u{1F3E0}",nome:"Casa pr\xF3pria",txt:"Termine de construir sua casa",ok:n=>(n.lote?.stage||0)>=4||n.mayor},{id:"t10",emoji:"\u{1F9F9}",nome:"Cidade limpa",txt:"Limpe 10 lixos",ok:n=>n.stats.trash>=10},{id:"a5",emoji:"\u{1F333}",nome:"Pulm\xE3o verde",txt:"Plante 5 \xE1rvores",ok:n=>n.stats.trees>=5},{id:"l5",emoji:"\u{1F680}",nome:"Subindo",txt:"Chegue ao n\xEDvel 5",ok:n=>n.xp>=en[4]},{id:"l8",emoji:"\u{1F451}",nome:"Topo",txt:"Chegue ao n\xEDvel 8",ok:n=>n.xp>=en[7]},{id:"r10k",emoji:"\u{1F4B0}",nome:"Rico",txt:"Tenha \u{1FA99}10.000",ok:n=>n.dinheiro>=1e4},{id:"st7",emoji:"\u{1F525}",nome:"Fiel",txt:"7 dias seguidos jogando",ok:n=>(n.login?.streak||0)>=7}],zc=["ana","joao","maria","pedro","julia","lucas","bia","gabi","rafa","duda","leo","carol","thiago","vini","lari","gui","nanda","caio","malu","davi","helo","enzo","valentina","arthur","livia","bruno","isa","mateus","clara","samuel","yasmin","felipe","sofia","diego","luana","igor","manu","renan","paula","kaique"],Vc=["","_",".oficial","2009","_br","zinho",".real","07","_s","x","13","dabahia","dosul","nordestino","tche","paulista","carioca","mineiro"]});var Zn,Th,$a,Gc=bi(()=>{Zn="gabriel.marques",Th="Gabriel Marques",$a={side:"sul",uf:"SP",cidade:"S\xE3o Paulo"}});function ni(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.innerHTML=t),i}function Ar(n,e=1.25,t){let i=n.clientWidth,a=Math.floor(Math.min(i*e,t||(n.clientHeight>60?n.clientHeight:1e9))),r=ni("canvas","mgc"),o=Math.min(2,devicePixelRatio||1);r.width=i*o,r.height=a*o,r.style.width=i+"px",r.style.height=a+"px",n.appendChild(r);let s=r.getContext("2d");return s.scale(o,o),{c:r,x:s,w:i,h:a}}function Tr(n){let e,t=performance.now(),i=!0,a=r=>{if(!i)return;let o=Math.min(.05,(r-t)/1e3);t=r,n(o,r/1e3),e=requestAnimationFrame(a)};return e=requestAnimationFrame(a),()=>{i=!1,cancelAnimationFrame(e)}}function Cn(n,e,t){let i=e;n.time(i);let a=setInterval(()=>{i-=.1,n.time(Math.max(0,i)),i<=0&&(clearInterval(a),t())},100);return()=>clearInterval(a)}function Dx(n){let e=Lx[n.prof.id]||{good:[n.prof.emoji],bad:["\u{1F4A3}"],hint:"Toque nos alvos",bg:"linear-gradient(#e0f2fe,#dcfce7)"};n.hint(e.hint);let t=n.area;t.style.background=e.bg;let i=0,a=0,r=!1,o=22,s=[],l=()=>{if(r)return;let u=Math.random(),f=u<.07?"gold":u<.27?"bad":"good",p=ni("button","tgt "+f,f==="gold"?"\u2B50":Tn(f==="bad"?e.bad:e.good));p.style.left=10+Math.random()*80+"%",p.style.top=10+Math.random()*78+"%";let g=Math.max(700,1500-i*25),M=setTimeout(()=>{f!=="bad"&&p.isConnected&&(a=0),p.classList.add("gone"),setTimeout(()=>p.remove(),200)},g);p.onpointerdown=m=>{m.preventDefault(),clearTimeout(M),p.onpointerdown=null;let h=p.getBoundingClientRect(),y=t.getBoundingClientRect();if(f==="bad")a=0,i=Math.max(0,i-2),n.sfx("bad"),n.float(h.left-y.left,h.top-y.top,"-2","#ec4b47"),t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300);else{a++;let S=f==="gold"?3:1+(a>=5?1:0);i+=S,n.sfx(a>=5?"combo":"good"),n.float(h.left-y.left,h.top-y.top,"+"+S+(a>=3?` x${a}`:""),f==="gold"?"#e8960c":"#2fb14b")}p.classList.add("hit"),setTimeout(()=>p.remove(),250),n.score(`${i}/${o}`)},t.appendChild(p),s.push(setTimeout(l,Math.max(330,620-i*10)))};n.score(`0/${o}`),l();let d=Cn(n,22,()=>c());function c(){r||(r=!0,d(),s.forEach(clearTimeout),n.end(Math.min(1,i/o)))}return{destroy(){r=!0,d(),s.forEach(clearTimeout)},win(){i=o,c()}}}function Nx(n){let e=Ch[n.prof.id]||Ch.empacotador,t=7,i=n.area;n.hint("Arraste ou toque 2 vizinhos pra trocar \u2022 3 iguais somem");let a=Math.floor(Math.min(i.clientWidth-8,380)/t),r=ni("div","m3");r.style.width=r.style.height=a*t+"px",i.appendChild(r),i.style.background="linear-gradient(#dcebff,#dbeafe)";let o=[],s=0,l=!1,d=!1,c=null,u=650,f=(x,L,E)=>{x.r=L,x.c=E,x.el.style.transform=`translate(${E*a}px,${L*a}px)`},p=(x,L,E,T=!1)=>{let w=ni("div","m3t",`<span>${e[E]}</span>`);w.style.width=w.style.height=a+"px",w.style.fontSize=a*.62+"px";let v={type:E,el:w};return r.appendChild(w),T&&(w.style.transition="none",w.style.transform=`translate(${L*a}px,${-a*2}px)`,w.offsetHeight,w.style.transition=""),f(v,x,L),v};for(let x=0;x<t;x++){o[x]=[];for(let L=0;L<t;L++){let E;do E=Math.random()*e.length|0;while(L>=2&&o[x][L-1].type===E&&o[x][L-2].type===E||x>=2&&o[x-1][L].type===E&&o[x-2][L].type===E);o[x][L]=p(x,L,E)}}let g=()=>{let x=new Set;for(let L=0;L<t;L++)for(let E=0;E<t-2;E++){let T=o[L][E].type;o[L][E+1].type===T&&o[L][E+2].type===T&&(x.add(L*t+E),x.add(L*t+E+1),x.add(L*t+E+2))}for(let L=0;L<t;L++)for(let E=0;E<t-2;E++){let T=o[E][L].type;o[E+1][L].type===T&&o[E+2][L].type===T&&(x.add(E*t+L),x.add((E+1)*t+L),x.add((E+2)*t+L))}return x},M=(x,L)=>{o[x.r][x.c]=L,o[L.r][L.c]=x;let E=x.r,T=x.c;f(x,L.r,L.c),f(L,E,T)};async function m(x,L){if(l||d)return;l=!0,M(x,L),n.sfx("tick"),await ts(200);let E=g();if(!E.size){M(x,L),n.sfx("bad"),await ts(200),l=!1;return}let T=0;for(;E.size&&!d;){T++;let w=E.size*10*T;s+=w,n.score(`${s}/${u}`),n.sfx(T>1?"combo":"good");let v=[...E][0];n.float(v%t*a,(v/t|0)*a,"+"+w+(T>1?` COMBO x${T}`:""),T>1?"#2f80ed":"#2fb14b");for(let b of E){let P=o[b/t|0][b%t];P.el.classList.add("pop"),P.dead=!0}await ts(220);for(let b=0;b<t;b++){let P=t-1;for(let k=t-1;k>=0;k--){let F=o[k][b];F.dead?F.el.remove():(o[P][b]=F,f(F,P,b),P--)}for(let k=P;k>=0;k--)o[k][b]=p(k,b,Math.random()*e.length|0,!0)}await ts(260),E=g()}l=!1,s>=u&&S()}let h=null;r.onpointerdown=x=>{let L=r.getBoundingClientRect(),E=Math.floor((x.clientX-L.left)/a),T=Math.floor((x.clientY-L.top)/a);T<0||E<0||T>=t||E>=t||(h={r:T,c:E,x:x.clientX,y:x.clientY,moved:!1})},r.onpointermove=x=>{if(!h||h.moved)return;let L=x.clientX-h.x,E=x.clientY-h.y;if(Math.hypot(L,E)>a*.4){h.moved=!0;let[T,w]=Math.abs(L)>Math.abs(E)?[h.r,h.c+Math.sign(L)]:[h.r+Math.sign(E),h.c];T>=0&&w>=0&&T<t&&w<t&&(c?.el.classList.remove("sel"),c=null,m(o[h.r][h.c],o[T][w]))}},r.onpointerup=()=>{if(h){if(!h.moved){let x=o[h.r][h.c];if(c&&Math.abs(c.r-x.r)+Math.abs(c.c-x.c)===1){c.el.classList.remove("sel");let L=c;c=null,m(L,x)}else c?.el.classList.remove("sel"),c=x,x.el.classList.add("sel")}h=null}},n.score(`0/${u}`);let y=Cn(n,45,()=>S());function S(){d||(d=!0,y(),setTimeout(()=>n.end(Math.min(1,s/u)),300))}return{destroy(){d=!0,y()},win(){s=u,S()}}}function Bx(n){let e=n.prof.id==="motorista";n.hint(e?"Deslize ou use as setas \u2022 busque o passageiro \u{1F64B}":"Deslize ou use as setas \u2022 leve o pacote at\xE9 a casa \u{1F4E6}");let t=n.area,i=9,a=13,r=ni("div","dl");t.appendChild(r);let{c:o,x:s,w:l,h:d}=Ar(r,a/i,t.clientHeight-10),c=Math.min(l/i,d/a),u=(l-c*i)/2,f=(d-c*a)/2,p=(V,Z)=>V>=0&&Z>=0&&V<i&&Z<a&&(V%4===0||Z%4===0),g=[];for(let V=0;V<a;V++)for(let Z=0;Z<i;Z++)p(Z,V)||g.push({cx:Z,cy:V,col:Tn(["#fca5a5","#fde68a","#a7f3d0","#bfdbfe","#dcebff","#ffdcdb"]),roof:Tn(["#b8302d","#9a3412","#1e5fbf","#065f46"])});let M=g.filter(V=>[[1,0],[-1,0],[0,1],[0,-1]].some(([Z,$])=>p(V.cx+Z,V.cy+$))),m={x:0,y:0,dir:[1,0],want:[1,0],ang:0},h=null,y=0,S=!1,x=4,L=()=>{do h=Tn(M);while(Math.hypot(h.cx-m.x,h.cy-m.y)<4)};L(),n.score(`0/${x}`);let E=V=>{m.want=V},T=ni("div","dpad",["\u2B06\uFE0F","\u2B05\uFE0F","\u27A1\uFE0F","\u2B07\uFE0F"].map((V,Z)=>`<button data-d="${Z}">${V}</button>`).join(""));t.appendChild(T);let w=[[0,-1],[-1,0],[1,0],[0,1]];T.querySelectorAll("button").forEach(V=>V.onpointerdown=Z=>{Z.preventDefault(),E(w[V.dataset.d]),n.sfx("tick")});let v=null;o.onpointerdown=V=>v={x:V.clientX,y:V.clientY},o.onpointerup=V=>{if(!v)return;let Z=V.clientX-v.x,$=V.clientY-v.y;Math.hypot(Z,$)>15&&E(Math.abs(Z)>Math.abs($)?[Math.sign(Z),0]:[0,Math.sign($)]),v=null};let b=V=>{let Z={ArrowUp:0,ArrowLeft:1,ArrowRight:2,ArrowDown:3,w:0,a:1,d:2,s:3}[V.key];Z!==void 0&&E(w[Z])};addEventListener("keydown",b);let P=4.6,k=0,F=Tr(V=>{if(k+=V,Math.abs(m.x-Math.round(m.x))<.08&&Math.abs(m.y-Math.round(m.y))<.08){let ve=Math.round(m.x),Ce=Math.round(m.y);p(ve+m.want[0],Ce+m.want[1])?(m.x=ve,m.y=Ce,m.dir=m.want):p(ve+m.dir[0],Ce+m.dir[1])||(m.x=ve,m.y=Ce,m.dir=[0,0])}if(m.x+=m.dir[0]*P*V,m.y+=m.dir[1]*P*V,(m.dir[0]||m.dir[1])&&(m.ang=Math.atan2(m.dir[1],m.dir[0])),Math.abs(m.x-h.cx)+Math.abs(m.y-h.cy)<=1.15&&!S){if(y++,n.sfx("combo"),n.float(u+h.cx*c,f+h.cy*c,e?"+1 corrida!":"+1 entrega!","#2fb14b"),n.score(`${y}/${x}`),y>=x)return Q();L()}s.fillStyle="#86efac",s.fillRect(0,0,l,d);for(let ve=0;ve<a;ve++)for(let Ce=0;Ce<i;Ce++)p(Ce,ve)&&(s.fillStyle="#6a7393",s.fillRect(u+Ce*c,f+ve*c,c+.5,c+.5));s.fillStyle="#ffc425";for(let ve=0;ve<a;ve++)for(let Ce=0;Ce<i;Ce++)p(Ce,ve)&&(Ce+ve)%2===0&&(ve%4===0?s.fillRect(u+Ce*c+c*.3,f+ve*c+c*.46,c*.4,c*.08):s.fillRect(u+Ce*c+c*.46,f+ve*c+c*.3,c*.08,c*.4));for(let ve of g){let Ce=u+ve.cx*c,X=f+ve.cy*c,ie=ve===h;if(s.fillStyle=ve.col,s.fillRect(Ce+c*.12,X+c*.3,c*.76,c*.6),s.fillStyle=ve.roof,s.fillRect(Ce+c*.06,X+c*.12,c*.88,c*.26),ie){let xe=1+Math.sin(k*8)*.12;s.strokeStyle="#ffc425",s.lineWidth=4,s.strokeRect(Ce+2,X+2,c-4,c-4),s.font=`${c*.6*xe}px serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(e?"\u{1F64B}":"\u{1F4E6}",Ce+c/2,X-c*.15)}}s.save(),s.translate(u+m.x*c+c/2,f+m.y*c+c/2),s.font=`${c*.8}px serif`,s.textAlign="center",s.textBaseline="middle",Math.cos(m.ang)>.1&&s.scale(-1,1),s.fillText(e?"\u{1F695}":"\u{1F6F5}",0,0),s.restore();let re=h.cx-m.x,he=h.cy-m.y,ye=Math.atan2(he,re);s.save(),s.translate(u+m.x*c+c/2+Math.cos(ye)*c*.9,f+m.y*c+c/2+Math.sin(ye)*c*.9),s.rotate(ye),s.fillStyle="#e8960c",s.beginPath(),s.moveTo(8,0),s.lineTo(-5,-6),s.lineTo(-5,6),s.fill(),s.restore()}),W=Cn(n,40,()=>Q());function Q(){S||(S=!0,W(),F(),removeEventListener("keydown",b),n.end(Math.min(1,y/x)))}return{destroy(){S=!0,W(),F(),removeEventListener("keydown",b)},win(){y=x,Q()}}}function Fx(n){n.hint("Toque pra soltar o tijolo \u2022 alinhe certinho pra ganhar combo");let e=n.area,{c:t,x:i,w:a,h:r}=Ar(e,1.3),o=24,s=15,l=n.prof.id==="engenheiro"?"#6a7393":"#b5523a",d=[{x:a*.2,w:a*.6}],c=null,u=[],f=!1,p=0,g=0,M=150,m=3,h=()=>n.score(`${d.length-1}/${s} ${"\u2764\uFE0F".repeat(m)}`),y=()=>{let v=d[d.length-1];c={x:Math.random()>.5?-v.w*.6:a-v.w*.4,w:v.w,dir:1},c.dir=c.x<0?1:-1,M=150+d.length*9};y(),h();let S=()=>{if(f||!c)return;let v=d[d.length-1],b=Math.max(c.x,v.x),P=Math.min(c.x+c.w,v.x+v.w),k=P-b;if(k<=0)return u.push({...c,y:d.length,vy:0}),c=null,m--,p=0,n.sfx("bad"),e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300),n.float(a/2-40,60,m?"Errou! \u{1F494}":"Acabou!","#ec4b47"),h(),m?setTimeout(()=>{f||y()},450):setTimeout(T,700);if(Math.abs(c.x-v.x)<6)c.x=v.x,p++,n.sfx("combo"),n.float(c.x+c.w/2,r-(d.length-g)*o-40,p>1?`PERFEITO x${p}`:"PERFEITO!","#e8960c"),d.push({x:v.x,w:v.w});else{p=0,n.sfx("good");let F=c.x<v.x;u.push({x:F?c.x:P,w:c.w-k,y:d.length,vy:0}),d.push({x:b,w:k})}if(h(),d.length-1>=s)return T();y()};t.onpointerdown=v=>{v.preventDefault(),S()};let x=v=>{v.key===" "&&S()};addEventListener("keydown",x);let L=(v,b,P,k=1)=>{i.globalAlpha=k,i.fillStyle=l,i.fillRect(v,b,P,o-2),i.fillStyle="rgba(255,255,255,.18)",i.fillRect(v,b,P,4),i.strokeStyle="rgba(0,0,0,.25)";for(let F=v+18;F<v+P;F+=26)i.beginPath(),i.moveTo(F,b),i.lineTo(F,b+o-2),i.stroke();i.globalAlpha=1},E=Tr(v=>{c&&(c.x+=c.dir*M*v,c.x+c.w>a+20&&c.dir>0&&(c.dir=-1),c.x<-20&&c.dir<0&&(c.dir=1));let b=Math.max(0,d.length-9);g+=(b-g)*Math.min(1,v*5);let P=i.createLinearGradient(0,0,0,r);P.addColorStop(0,"#7dd3fc"),P.addColorStop(1,"#e0f2fe"),i.fillStyle=P,i.fillRect(0,0,a,r),i.fillStyle="#2fb14b",i.fillRect(0,r-o+g*o,a,o*3),d.forEach((k,F)=>L(k.x,r-(F+1)*o+g*o-o*0,k.w)),c&&L(c.x,r-(d.length+1)*o+g*o,c.w),u=u.filter(k=>(k.vy+=900*v,k.y-=k.vy*v/o,L(k.x,r-(k.y+1)*o+g*o,k.w,.8),k.y>-20))});function T(){f||(f=!0,E(),w(),removeEventListener("keydown",x),n.end(Math.min(1,(d.length-1)/s)))}let w=Cn(n,45,()=>T());return{destroy(){f=!0,E(),w(),removeEventListener("keydown",x)},win(){for(let v=0;v<s;v++)d.push({...d[d.length-1]});T()}}}function Ux(n){n.hint("Toque na lixeira certa antes do lixo cair!");let e=n.area;e.style.background="linear-gradient(#e0f2fe,#f0fdf4)";let t=ni("div","sortlane");e.appendChild(t);let i=ni("div","bins",Eh.map(p=>`<button class="bin" data-b="${p.id}" style="--c:${p.cor}"><span>\u{1F5D1}\uFE0F</span>${p.nome}</button>`).join(""));e.appendChild(i);let a=14,r=0,o=0,s=null,l=!1,d=0,c=()=>{if(l)return;if(r>=a)return f();r++;let p=Tn(Eh),g=ni("div","fall",Tn(p.items));g.dataset.b=p.id,t.appendChild(g);let M=Math.max(1.6,3.4-r*.12);g.style.animationDuration=M+"s",s=g,g.addEventListener("animationend",()=>{s===g&&(d=0,n.sfx("bad"),n.float(t.clientWidth/2,t.clientHeight-30,"caiu no ch\xE3o!","#ec4b47"),g.remove(),s=null,c())})};i.querySelectorAll(".bin").forEach(p=>p.onpointerdown=g=>{if(g.preventDefault(),!s||l)return;let M=s;s=null,M.dataset.b===p.dataset.b?(o++,d++,n.sfx(d>=3?"combo":"good"),p.classList.add("ok"),n.float(p.offsetLeft,t.clientHeight-40,d>=3?`+1 x${d}`:"+1","#2fb14b")):(d=0,n.sfx("bad"),p.classList.add("no"),n.float(p.offsetLeft,t.clientHeight-40,"lixeira errada","#ec4b47")),setTimeout(()=>p.classList.remove("ok","no"),300),M.classList.add("toss"),setTimeout(()=>M.remove(),250),n.score(`${o}/${a}`),setTimeout(c,250)}),n.score(`0/${a}`),c();let u=Cn(n,40,()=>f());function f(){l||(l=!0,u(),n.end(Math.min(1,o/a)))}return{destroy(){l=!0,u()},win(){o=a,f()}}}function zx(n){let e=n.prof.id==="garcom";n.hint(e?"Monte o pedido na ordem da comanda":"Coloque os ingredientes na ordem antes de queimar \u{1F525}");let t=n.area;t.style.background="linear-gradient(#fff7ed,#fed7aa)";let i=3,a=0,r=0,o=!1,s,l,d,c,u,f=ni("div","cook");t.appendChild(f);let p=()=>{f.innerHTML=`<div class="ticket"><b>${e?"\u{1F9FE} Comanda":"\u{1F4CB} Receita"} ${a+1}/${i}: ${s.n}</b><div class="steps">${s.s.map((S,x)=>`<span class="${x<l?"done":x===l?"now":""}">${S}</span>`).join("<i>\u203A</i>")}</div></div>
      <div class="burn"><i style="width:${c}%"></i><span>${e?"\u23F3 cliente esperando":"\u{1F525} queimando"}</span></div>
      <div class="plate">${s.s.slice(0,l).map((S,x)=>`<span style="bottom:${x*16}px">${S}</span>`).join("")}<div class="dish">${e?"\u{1F37D}\uFE0F":"\u{1F373}"}</div></div>
      <div class="shelf">${g.map(S=>`<button class="ing">${S}</button>`).join("")}</div>`,f.querySelectorAll(".ing").forEach(S=>S.onpointerdown=x=>{x.preventDefault(),m(S.textContent,S)})},g=[],M=()=>{s=Tn(Ox),l=0,d=0,c=0,g=Sr([...new Set([...s.s,...Sr(kx).slice(0,8-new Set(s.s).size)])]).slice(0,8),p()},m=(S,x)=>{if(!o){if(S===s.s[l]){if(l++,n.sfx("good"),x.classList.add("ok"),l>=s.s.length){let L=Math.max(.2,1-d*.2-c/250);if(r+=L,n.sfx("combo"),n.float(t.clientWidth/2-40,140,L>.9?"PERFEITO! \u{1F929}":"Pronto! \u{1F60B}","#2fb14b"),a++,a>=i)return y();setTimeout(M,500)}p()}else d++,c=Math.min(100,c+12),n.sfx("bad"),x.classList.add("no"),setTimeout(()=>x.classList.remove("no"),300),t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300);n.score(`${a}/${i}`)}};M(),n.score(`0/${i}`),u=setInterval(()=>{if(o)return;c+=.9;let S=f.querySelector(".burn i");if(S&&(S.style.width=Math.min(100,c)+"%"),c>=100){if(n.sfx("bad"),n.float(t.clientWidth/2-40,140,e?"Cliente foi embora \u{1F624}":"Queimou! \u{1F525}","#ec4b47"),a++,a>=i)return y();M()}},100);let h=Cn(n,45,()=>y());function y(){o||(o=!0,clearInterval(u),h(),n.end(Math.min(1,r/i)))}return{destroy(){o=!0,clearInterval(u),h()},win(){r=i,y()}}}function Gx(n){let e=Hx[n.prof.id]||"professor";n.hint({professor:"Responda r\xE1pido pra turma!",saude:"Escolha o cuidado certo pro paciente",fake:"Fato ou fake? Decida r\xE1pido!",cidade:"Decida o melhor pra cidade"}[e]);let t=n.area;t.style.background=e==="saude"?"linear-gradient(#ecfeff,#cffafe)":e==="fake"?"linear-gradient(#fef2f2,#fee2e2)":e==="cidade"?"linear-gradient(#f0fdf4,#dcfce7)":"linear-gradient(#14532d,#166534)";let i=Sr(Vx[e]).slice(0,6),a=0,r=0,o=0,s=!1,l=0,d,c=ni("div","quiz"+(e==="professor"?" lousa":""));t.appendChild(c);let u=()=>{if(a>=i.length)return p();let[g,M]=i[a],m=M[0];l=8,c.innerHTML=`<div class="qn">Pergunta ${a+1}/${i.length} ${e==="saude"?"\u{1FA7A}":e==="fake"?"\u{1F4F0}":e==="cidade"?"\u{1F3DB}\uFE0F":"\u270F\uFE0F"}</div><div class="qq">${g}</div><div class="qbar"><i></i></div><div class="qopts">${Sr(M).map(h=>`<button class="qo ${h==="FATO"?"fato":h==="FAKE"?"fakeb":""}">${h}</button>`).join("")}</div>`,c.querySelectorAll(".qo").forEach(h=>h.onclick=()=>f(h,h.textContent===m,m))},f=(g,M,m)=>{s||c.dataset.lock||(c.dataset.lock=1,c.querySelectorAll(".qo").forEach(h=>{h.textContent===m&&h.classList.add("ok")}),M?(r++,o++,n.sfx(o>=3?"combo":"good"),n.float(t.clientWidth/2-30,60,o>=3?`Sequ\xEAncia x${o}! \u{1F525}`:"Certo! \u2705","#2fb14b")):(o=0,g&&g.classList.add("no"),n.sfx("bad")),n.score(`${r}/${i.length}`),setTimeout(()=>{delete c.dataset.lock,a++,u()},750))};d=setInterval(()=>{if(s||c.dataset.lock)return;l-=.1;let g=c.querySelector(".qbar i");g&&(g.style.width=l/8*100+"%"),n.time(l),l<=0&&f(null,!1,i[a][1][0])},100),n.score(`0/${i.length}`),u();function p(){s||(s=!0,clearInterval(d),n.end(r/i.length))}return{destroy(){s=!0,clearInterval(d)},win(){r=i.length,p()}}}function Wx(n){n.hint(n.prof.id==="juiz"?"Compare a prova com o depoimento e aponte a mentira":"Toque na frase que CONTRADIZ a prova");let e=n.area;e.style.background="linear-gradient(#fef3c7,#d6b98c)";let t=Sr($x).slice(0,5),i=0,a=0,r=!1,o=12,s,l=ni("div","court");e.appendChild(l);let d=()=>{if(i>=t.length)return u();let[f,p,g]=t[i];o=12,l.innerHTML=`<div class="qn">\u2696\uFE0F Caso ${i+1}/${t.length}</div><div class="prova"><small>PROVA</small>${f}</div><div class="deps"><small>\u{1F5E3}\uFE0F DEPOIMENTO DO R\xC9U</small>${p.map((M,m)=>`<button class="dep" data-k="${m}">\u201C${M}\u201D</button>`).join("")}</div><div class="gavel">\u{1F528}</div>`,l.querySelectorAll(".dep").forEach(M=>M.onclick=()=>c(M,+M.dataset.k===g,g))},c=(f,p,g)=>{r||l.dataset.lock||(l.dataset.lock=1,l.querySelector(`.dep[data-k="${g}"]`)?.classList.add("lie"),l.querySelector(".gavel").classList.add("bang"),p?(a++,n.sfx("combo"),n.float(e.clientWidth/2-50,80,"OBJE\xC7\xC3O! \u{1F449}","#2fb14b")):(f?.classList.add("no"),n.sfx("bad"),n.float(e.clientWidth/2-50,80,"N\xE3o era essa...","#ec4b47")),n.score(`${a}/${t.length}`),setTimeout(()=>{delete l.dataset.lock,i++,d()},1e3))};s=setInterval(()=>{r||l.dataset.lock||(o-=.1,n.time(o),o<=0&&c(null,!1,t[i][2]))},100),n.score(`0/${t.length}`),d();function u(){r||(r=!0,clearInterval(s),n.end(a/t.length))}return{destroy(){r=!0,clearInterval(s)},win(){a=t.length,u()}}}function qx(n){n.hint("Segure o dedo no fogo pra jogar \xE1gua \u{1F4A6}");let e=n.area,{c:t,x:i,w:a,h:r}=Ar(e,1.3),o=3,s=4,l=a*.8,d=a*.1,c=r*.06,u=r*.7,f=[];for(let E=0;E<s;E++)for(let T=0;T<o;T++)f.push({x:d+l*(T+.5)/o,y:c+u*(E+.5)/s,fire:0,hp:0,age:0,burnt:!1});let p=null,g=0,M=!1,m=0,h=14,y=[];t.onpointerdown=E=>{let T=t.getBoundingClientRect();p={x:E.clientX-T.left,y:E.clientY-T.top},t.setPointerCapture(E.pointerId)},t.onpointermove=E=>{if(!p)return;let T=t.getBoundingClientRect();p={x:E.clientX-T.left,y:E.clientY-T.top}},t.onpointerup=t.onpointercancel=()=>p=null;let S=Tr((E,T)=>{if(m-=E,m<=0){m=Math.max(.55,1.2-g*.04);let w=f.filter(v=>!v.fire);if(w.length){let v=Tn(w);v.fire=1,v.hp=1,v.age=0}}for(let w of f)w.fire&&(w.age+=E,p&&Math.hypot(p.x-w.x,p.y-w.y)<l/o*.55&&(w.hp-=E*1.9,Math.random()<.3&&n.sfx("spray")),w.hp<=0?(w.fire=0,g++,n.sfx("good"),n.float(w.x-20,w.y-30,"+1 \u{1F4A6}","#0ea5e9"),n.score(`${g}/${h}`),g>=h&&L()):w.age>6.5&&(w.fire=0,w.burnt=!0,n.sfx("bad")));i.fillStyle="#bae6fd",i.fillRect(0,0,a,r),i.fillStyle="#e2e8f0",i.fillRect(d-8,c-8,l+16,u+16),i.fillStyle="#b5523a",i.fillRect(d,c,l,u);for(let w of f){let v=l/o*.6,b=u/s*.6;if(i.fillStyle=w.burnt?"#1b2340":"#7dd3fc",i.fillRect(w.x-v/2,w.y-b/2,v,b),w.fire){let P=(.8+Math.sin(T*14+w.x)*.1)*(.5+w.hp*.6)*(1+w.age*.05);i.font=`${v*P}px serif`,i.textAlign="center",i.textBaseline="middle",i.fillText("\u{1F525}",w.x,w.y)}}if(i.fillStyle="#6a7393",i.fillRect(0,r*.8,a,r*.2),i.font=`${a*.13}px serif`,i.textAlign="center",i.fillText("\u{1F692}",a/2,r*.9),p){for(let w=0;w<3;w++)y.push({x:a/2,y:r*.85,tx:p.x+(Math.random()-.5)*20,ty:p.y+(Math.random()-.5)*20,k:0});i.strokeStyle="rgba(14,165,233,.5)",i.lineWidth=8,i.beginPath(),i.moveTo(a/2,r*.85),i.quadraticCurveTo(a/2,p.y,p.x,p.y),i.stroke()}for(let w=y.length-1;w>=0;w--){let v=y[w];if(v.k+=E*3,v.k>=1){y.splice(w,1);continue}i.fillStyle="rgba(56,189,248,.8)",i.beginPath(),i.arc(v.x+(v.tx-v.x)*v.k,v.y+(v.ty-v.y)*v.k,4,0,7),i.fill()}});n.score(`0/${h}`);let x=Cn(n,32,()=>L());function L(){M||(M=!0,S(),x(),n.end(Math.min(1,g/h)))}return{destroy(){M=!0,S(),x()},win(){g=h,L()}}}function Xx(n){n.hint("Toque na hora certa pra chutar na mira \u{1F3AF}");let e=n.area,{c:t,x:i,w:a,h:r}=Ar(e,1.2),o=a*.12,s=a*.76,l=r*.12,d=r*.3,c=0,u=0,f=!1,p=0,g=null,M=.5,m=1,h="",y=0,S=5;t.onpointerdown=E=>{if(E.preventDefault(),g||f)return;g={k:0,tx:o+s*(.5+.55*Math.sin(p)),ty:l+d*(.35+Math.random()*.4)},n.sfx("kick")};let x=Tr((E,T)=>{p+=E*(2.2+c*.35),M+=m*E*(.45+c*.12),M>.85&&(m=-1),M<.15&&(m=1),i.fillStyle="#2fb14b",i.fillRect(0,0,a,r);for(let v=0;v<8;v++)i.fillStyle=v%2?"#15803d":"#2fb14b",i.fillRect(0,r*v/8,a,r/8);i.fillStyle="#f8fafc",i.fillRect(o-6,l-6,s+12,6),i.fillRect(o-6,l-6,6,d+6),i.fillRect(o+s,l-6,6,d+6),i.strokeStyle="rgba(255,255,255,.35)",i.lineWidth=1;for(let v=0;v<s;v+=12)i.beginPath(),i.moveTo(o+v,l),i.lineTo(o+v,l+d),i.stroke();for(let v=0;v<d;v+=12)i.beginPath(),i.moveTo(o,l+v),i.lineTo(o+s,l+v),i.stroke();let w=o+s*M;if(i.font=`${d*.75}px serif`,i.textAlign="center",i.textBaseline="middle",i.fillText("\u{1F9E4}",w,l+d*.55),i.fillStyle="#ffc425",i.fillRect(w-s*.12,l+d*.9,s*.24,4),!g&&!f){let v=o+s*(.5+.55*Math.sin(p));i.font=`${a*.09}px serif`,i.fillText("\u{1F3AF}",v,l+d*.5)}if(i.fillStyle="#fff",i.beginPath(),i.ellipse(a/2,r*.82,a*.1,r*.02,0,0,7),i.fill(),g){g.k+=E*2.2;let v=a/2+(g.tx-a/2)*g.k,b=r*.8+(g.ty-r*.8)*g.k;if(i.font=`${a*.1*(1-g.k*.45)}px serif`,i.fillText("\u26BD",v,b),g.k>=1){c++;let P=g.tx>o&&g.tx<o+s,k=Math.abs(g.tx-w)<s*.13;P&&!k?(u++,h="GOOOL! \u26BD",n.sfx("combo")):(h=k?"DEFENDEU! \u{1F9E4}":"PRA FORA! \u{1F629}",n.sfx("bad")),y=1,g=null,n.score(`${u}/${S}`),c>=S&&setTimeout(L,900)}}else i.font=`${a*.1}px serif`,i.fillText("\u26BD",a/2,r*.8);y>0&&(y-=E,i.globalAlpha=Math.min(1,y*2),i.font=`900 ${a*.11}px system-ui`,i.fillStyle="#ffc425",i.strokeStyle="#000",i.lineWidth=6,i.strokeText(h,a/2,r*.58),i.fillText(h,a/2,r*.58),i.globalAlpha=1),i.font=`${a*.05}px serif`;for(let v=0;v<S;v++)i.fillText(v<c?"\u25CF":"\u25CB",a/2+(v-2)*a*.07,r*.95)});n.score(`0/${S}`),n.time(0);function L(){f||(f=!0,x(),n.end(u/S))}return{destroy(){f=!0,x()},win(){u=S,L()}}}function Jx(n){let e=n.prof.id==="corretor";n.hint(e?"Compre im\xF3veis barato e venda caro \u{1F3D8}\uFE0F":"Compre na baixa, venda na alta \u{1F4C8}");let t=n.area,i=ni("div","mk");t.appendChild(i);let{c:a,x:r,w:o,h:s}=Ar(i,.75,t.clientHeight-150),l=ni("div","mkbar",'<div class="mkinfo"></div><div class="mkbtns"><button class="buy">COMPRAR</button><button class="sell">VENDER</button></div>');t.appendChild(l);let d=1e3,c=0,u=100,f=[],p=0,g=!1,M=Math.random()*6,m=300,h=l.querySelector(".mkinfo"),y=()=>d+c*u,S=()=>{h.innerHTML=`\u{1F4B5} R$ ${d.toFixed(0)} \u2022 ${e?"\u{1F3E0}":"\u{1F4C8}"} ${c} \u2022 Total <b style="color:${y()>=1e3?"#2fb14b":"#ec4b47"}">R$ ${y().toFixed(0)}</b>`,n.score(`${y()-1e3>=0?"+":""}${(y()-1e3).toFixed(0)}`)};l.querySelector(".buy").onclick=()=>{let T=Math.floor(d/u);if(!T)return n.sfx("bad");c+=T,d-=T*u,n.sfx("tick"),n.float(o*.2,s*.3,`comprou ${T} a R$${u.toFixed(0)}`,"#2f80ed"),S()},l.querySelector(".sell").onclick=()=>{if(!c)return n.sfx("bad");let T=c*u;d+=T,n.sfx(u>110?"combo":"good"),n.float(o*.5,s*.3,`vendeu a R$${u.toFixed(0)}`,"#2fb14b"),c=0,S()};let x=Tr(T=>{p+=T,u=Math.max(20,100+26*Math.sin(p*.85+M)+9*Math.sin(p*2.7+M*2)+(Math.random()-.5)*3),f.push(u),f.length>220&&f.shift(),r.fillStyle="#1b2340",r.fillRect(0,0,o,s),r.strokeStyle="rgba(255,255,255,.08)";for(let v=0;v<5;v++)r.beginPath(),r.moveTo(0,s*v/5),r.lineTo(o,s*v/5),r.stroke();let w=v=>s-(v-50)/110*s;r.lineWidth=3,r.strokeStyle=f.length>1&&f[f.length-1]>=f[f.length-2]?"#2fb14b":"#ec4b47",r.beginPath(),f.forEach((v,b)=>{let P=b/220*o;b?r.lineTo(P,w(v)):r.moveTo(P,w(v))}),r.stroke(),r.fillStyle="#fff",r.font="800 18px system-ui",r.textAlign="left",r.fillText(`${e?"\u{1F3E0} Casa":"\u{1F4CA} BRC3"}  R$ ${u.toFixed(2)}`,10,26),S()});S();let L=Cn(n,28,()=>E());function E(){g||(g=!0,x(),L(),d+=c*u,c=0,n.end(Math.max(0,Math.min(1,(d-1e3)/m))))}return{destroy(){g=!0,x(),L()},win(){d=1e3+m,c=0,E()}}}var Tn,Sr,ts,Lx,Ch,Eh,Ox,kx,Vx,Hx,$x,wh,Yn,$c=bi(()=>{Tn=n=>n[Math.random()*n.length|0],Sr=n=>{n=[...n];for(let e=n.length-1;e>0;e--){let t=Math.random()*(e+1)|0;[n[e],n[t]]=[n[t],n[e]]}return n},ts=n=>new Promise(e=>setTimeout(e,n));Lx={jardineiro:{good:["\u{1F331}","\u{1F33F}","\u{1F33B}"],bad:["\u{1F41B}"],hint:"Regue as plantas \u2022 evite as pragas \u{1F41B}",bg:"linear-gradient(#bbf7d0,#86efac)"},pintor:{good:["\u{1F7EB}","\u{1F7EA}","\u2B1B"],bad:["\u{1F408}"],hint:"Pinte as manchas \u2022 n\xE3o pinte o gato \u{1F408}",bg:"linear-gradient(#fef3c7,#fde68a)"},eletricista:{good:["\u{1F4A1}"],bad:["\u26A1"],hint:"Troque as l\xE2mpadas \u{1F4A1} \u2022 fuja do choque \u26A1",bg:"linear-gradient(#1e293b,#2b3766)"},mecanico:{good:["\u{1F529}","\u2699\uFE0F"],bad:["\u{1F525}"],hint:"Aperte os parafusos \u2022 cuidado com o motor quente \u{1F525}",bg:"linear-gradient(#cbd5e1,#94a3b8)"},programador:{good:["\u{1F41B}","\u{1F41E}"],bad:["\u2615"],hint:"Esmague os bugs \u2022 n\xE3o derrube o caf\xE9 \u2615",bg:"linear-gradient(#1b2340,#1e5fbf)"},policial:{good:["\u{1F9B9}"],bad:["\u{1F64B}","\u{1F475}"],hint:"Pegue os ladr\xF5es \u{1F9B9} \u2022 n\xE3o os inocentes",bg:"linear-gradient(#dbeafe,#93c5fd)"},heroi:{good:["\u{1F9B9}","\u{1F47E}"],bad:["\u{1F64B}","\u{1F431}"],hint:"Derrote os vil\xF5es \u2022 proteja os moradores",bg:"linear-gradient(#1d4ed8,#1e5fbf)"}};Ch={empacotador:["\u{1F34E}","\u{1F956}","\u{1F9C0}","\u{1F95B}","\u{1F36B}","\u{1F96B}"],ambulante:["\u{1F33D}","\u{1F37F}","\u{1F366}","\u{1F964}","\u{1F349}","\u{1F965}"],caixa:["\u{1F4B5}","\u{1FA99}","\u{1F4B3}","\u{1F9FE}","\u{1F6D2}","\u{1F3F7}\uFE0F"]};Eh=[{id:"papel",nome:"Papel",cor:"#2f80ed",items:["\u{1F4F0}","\u{1F4E6}","\u{1F4C4}"]},{id:"plastico",nome:"Pl\xE1stico",cor:"#ec4b47",items:["\u{1F964}","\u{1F9F4}","\u{1F6CD}\uFE0F"]},{id:"metal",nome:"Metal",cor:"#ffc425",items:["\u{1F96B}","\u{1F529}"]},{id:"vidro",nome:"Vidro",cor:"#2fb14b",items:["\u{1F37E}","\u{1FAD9}"]},{id:"organico",nome:"Org\xE2nico",cor:"#78350f",items:["\u{1F34C}","\u{1F34E}","\u{1F9B4}"]}];Ox=[{n:"Hamb\xFArguer",s:["\u{1F35E}","\u{1F96C}","\u{1F345}","\u{1F9C0}","\u{1F969}","\u{1F35E}"]},{n:"Pizza",s:["\u{1FAD3}","\u{1F345}","\u{1F9C0}","\u{1F344}","\u{1F33F}"]},{n:"A\xE7a\xED na tigela",s:["\u{1F963}","\u{1F347}","\u{1F34C}","\u{1F353}","\u{1F36F}"]},{n:"Prato Feito",s:["\u{1F35A}","\u{1FAD8}","\u{1F969}","\u{1F957}","\u{1F35F}"]},{n:"Tapioca",s:["\u{1FAD3}","\u{1F9C0}","\u{1F965}"]},{n:"Cachorro-quente",s:["\u{1F32D}","\u{1F345}","\u{1F33D}","\u{1F9C0}"]},{n:"Salada de frutas",s:["\u{1F349}","\u{1F34D}","\u{1F34C}","\u{1F353}"]}],kx=["\u{1F9C5}","\u{1F955}","\u{1F336}\uFE0F","\u{1F95A}","\u{1F9C4}","\u{1F34B}","\u{1F951}","\u{1F41F}"];Vx={professor:[["Capital do Cear\xE1?",["Fortaleza","Recife","Natal"]],["7 \xD7 8 = ?",["56","54","63"]],["Maior bioma do Brasil?",["Amaz\xF4nia","Cerrado","Pampa"]],["Capital do Paran\xE1?",["Curitiba","Londrina","Maring\xE1"]],["12 + 19 = ?",["31","29","33"]],["Quantos estados tem o Brasil (sem contar o DF)?",["26","27","25"]],['Quem escreveu "Dom Casmurro"?',["Machado de Assis","Jorge Amado","Clarice Lispector"]],["Capital da Bahia?",["Salvador","Feira de Santana","Ilh\xE9us"]],["Metade de 150?",["75","70","80"]],["O Brasil fica em qual continente?",["Am\xE9rica do Sul","\xC1frica","Europa"]],["9 \xD7 9 = ?",["81","72","99"]],["Capital de Minas Gerais?",["Belo Horizonte","Uberl\xE2ndia","Juiz de Fora"]]],saude:[["Febre alta. Primeiro passo?",["Medir a temperatura e dar antit\xE9rmico","Engessar o bra\xE7o","Dar refrigerante"]],["Corte sangrando muito:",["Pressionar com pano limpo","Soprar o machucado","Ignorar"]],["Sinais de desidrata\xE7\xE3o:",["Soro e hidrata\xE7\xE3o","Caf\xE9 bem forte","Correr no sol"]],["Bra\xE7o possivelmente quebrado:",["Imobilizar e fazer raio-X","Massagear forte","Esperar passar"]],["Queimadura leve na m\xE3o:",["\xC1gua corrente fria","Pasta de dente","Manteiga"]],["Adulto engasgado e consciente:",["Manobra de Heimlich","Dar \xE1gua","Deitar de costas"]],["Picada de abelha com incha\xE7o leve:",["Tirar o ferr\xE3o e compressa fria","Apertar o ferr\xE3o","\xD3leo quente"]],["Press\xE3o muito alta:",["Medir e encaminhar ao m\xE9dico","Comer mais sal","Ignorar"]]],fake:[['"O Brasil \xE9 o maior pa\xEDs da Am\xE9rica do Sul."',["FATO","FAKE"]],['"Bras\xEDlia foi inaugurada em 1960."',["FATO","FAKE"]],['"A Amaz\xF4nia fica toda no Nordeste."',["FAKE","FATO"]],['"O Rio S\xE3o Francisco passa por Minas e pela Bahia."',["FATO","FAKE"]],['"O Brasil tem 50 estados."',["FAKE","FATO"]],['"\xC1gua com lim\xE3o cura qualquer doen\xE7a."',["FAKE","FATO"]],['"O Pantanal fica em MT e MS."',["FATO","FAKE"]],['"Tomar vacina faz a pessoa virar jacar\xE9."',["FAKE","FATO"]]],cidade:[["Rua cheia de buracos. O que fazer?",["Tapar e pavimentar","Esperar a chuva","Pintar de azul"]],["Muito lixo na pra\xE7a:",["Lixeiras e coleta seletiva","Esconder com lona","Proibir a pra\xE7a"]],["Crian\xE7as sem escola perto:",["Construir uma escola","Fechar a rua","Fazer um outdoor"]],["Rua escura \xE0 noite:",["Ilumina\xE7\xE3o p\xFAblica","Pedir ajuda pra lua","Cortar as \xE1rvores"]],["Tr\xE2nsito parado no centro:",["\xD4nibus e ciclovias","Buzinar mais","N\xE3o fazer nada"]],["Calor forte no bairro:",["Plantar \xE1rvores","Asfaltar a pra\xE7a","Tirar as sombras"]],["Posto de sa\xFAde lotado:",["Contratar e ampliar","Fechar mais cedo","Cobrar entrada"]]]},Hx={professor:"professor",enfermeiro:"saude",medico:"saude",jornalista:"fake",vereador:"cidade",prefeito:"cidade"};$x=[["\u{1F4F9} A c\xE2mera mostra o r\xE9u no shopping \xE0s 20h.",["Sa\xED do trabalho \xE0s 18h.","Jantei em casa sozinho \xE0s 20h.","Dormi por volta das 23h."],1],["\u{1F9FE} Recibo: abasteceu em Campinas \xE0s 7h.",["Moro em Campinas h\xE1 5 anos.","Meu carro \xE9 prata.","Ontem acordei s\xF3 \xE0s 10h."],2],["\u{1F4F1} O celular do r\xE9u estava em Recife \xE0s 15h.",["Passei a tarde toda em Natal.","Almocei ao meio-dia.","Fui de \xF4nibus."],0],["\u{1F327}\uFE0F Choveu forte a noite toda.",["Voltei pra casa \xE0s 22h.","A rua estava seca quando cheguei.","Assisti TV depois."],1],["\u{1F3EA} A loja fecha \xE0s 18h.",["Comprei o presente l\xE1 \xE0s 21h.","Paguei no cart\xE3o.","O vendedor foi simp\xE1tico."],0],["\u{1F697} O carro est\xE1 registrado no nome do r\xE9u.",["Eu nunca tive carro.","Vou de bicicleta \xE0s vezes.","Tenho carteira de motorista."],0],["\u{1F382} Nota fiscal da padaria: bolo de chocolate.",["Encomendei o bolo.","Eu mesmo fiz o bolo em casa.","A festa come\xE7ou \xE0s 19h."],1],["\u{1F415} Vizinhos: o cachorro latiu a noite toda.",["Foi uma noite silenciosa.","Moro com meu cachorro.","Fui deitar cedo."],0],["\u{1F4F8} Foto do r\xE9u na praia \xE0s 14h.",["Fiquei no escrit\xF3rio at\xE9 as 17h.","Gosto de praia.","Uso \xF3culos escuros."],0]];wh={tap:Dx,match3:Nx,delivery:Bx,bricks:Fx,sort:Ux,cook:zx,quiz:Gx,court:Wx,fire:qx,penalty:Xx,market:Jx},Yn={tap:"Reflexo",match3:"Combina 3",delivery:"Entrega",bricks:"Empilha",sort:"Recicla",cook:"Cozinha",quiz:"Quiz",court:"Tribunal",fire:"Inc\xEAndio",penalty:"P\xEAnalti",market:"Bolsa"}});var Ph,Rh=bi(()=>{Ph={AC:"Acrel\xE2ndia|Assis Brasil|Brasil\xE9ia|Bujari|Capixaba|Cruzeiro do Sul|Epitaciol\xE2ndia|Feij\xF3|Jord\xE3o|Manoel Urbano|Marechal Thaumaturgo|M\xE2ncio Lima|Pl\xE1cido de Castro|Porto Acre|Porto Walter|Rio Branco|Rodrigues Alves|Santa Rosa do Purus|Sena Madureira|Senador Guiomard|Tarauac\xE1|Xapuri",AL:"Anadia|Arapiraca|Atalaia|Barra de Santo Ant\xF4nio|Barra de S\xE3o Miguel|Batalha|Belo Monte|Bel\xE9m|Boca da Mata|Branquinha|Cacimbinhas|Cajueiro|Campestre|Campo Alegre|Campo Grande|Canapi|Capela|Carneiros|Ch\xE3 Preta|Coit\xE9 do N\xF3ia|Col\xF4nia Leopoldina|Coqueiro Seco|Coruripe|Cra\xEDbas|Delmiro Gouveia|Dois Riachos|Estrela de Alagoas|Feira Grande|Feliz Deserto|Flexeiras|Girau do Ponciano|Ibateguara|Igaci|Igreja Nova|Inhapi|Jacar\xE9 dos Homens|Jacu\xEDpe|Japaratinga|Jaramataia|Jequi\xE1 da Praia|Joaquim Gomes|Jundi\xE1|Junqueiro|Lagoa da Canoa|Limoeiro de Anadia|Macei\xF3|Major Isidoro|Mar Vermelho|Maragogi|Maravilha|Marechal Deodoro|Maribondo|Mata Grande|Matriz de Camaragibe|Messias|Minador do Negr\xE3o|Monteir\xF3polis|Murici|Novo Lino|Olho d'\xC1gua das Flores|Olho d'\xC1gua do Casado|Olho d'\xC1gua Grande|Oliven\xE7a|Ouro Branco|Palestina|Palmeira dos \xCDndios|Pariconha|Paripueira|Passo de Camaragibe|Paulo Jacinto|Penedo|Pia\xE7abu\xE7u|Pilar|Pindoba|Piranhas|Porto Calvo|Porto de Pedras|Porto Real do Col\xE9gio|Po\xE7o das Trincheiras|P\xE3o de A\xE7\xFAcar|Quebrangulo|Rio Largo|Roteiro|Santa Luzia do Norte|Santana do Ipanema|Santana do Munda\xFA|Satuba|Senador Rui Palmeira|S\xE3o Br\xE1s|S\xE3o Jos\xE9 da Laje|S\xE3o Jos\xE9 da Tapera|S\xE3o Lu\xEDs do Quitunde|S\xE3o Miguel dos Campos|S\xE3o Miguel dos Milagres|S\xE3o Sebasti\xE3o|Tanque d'Arca|Taquarana|Teot\xF4nio Vilela|Traipu|Uni\xE3o dos Palmares|Vi\xE7osa|\xC1gua Branca",AM:"Alvar\xE3es|Amatur\xE1|Anam\xE3|Anori|Apu\xED|Atalaia do Norte|Autazes|Barcelos|Barreirinha|Benjamin Constant|Beruri|Boa Vista do Ramos|Boca do Acre|Borba|Caapiranga|Canutama|Carauari|Careiro|Careiro da V\xE1rzea|Coari|Codaj\xE1s|Eirunep\xE9|Envira|Fonte Boa|Guajar\xE1|Humait\xE1|Ipixuna|Iranduba|Itacoatiara|Itamarati|Itapiranga|Japur\xE1|Juru\xE1|Juta\xED|L\xE1brea|Manacapuru|Manaquiri|Manaus|Manicor\xE9|Mara\xE3|Mau\xE9s|Nhamund\xE1|Nova Olinda do Norte|Novo Air\xE3o|Novo Aripuan\xE3|Parintins|Pauini|Presidente Figueiredo|Rio Preto da Eva|Santa Isabel do Rio Negro|Santo Ant\xF4nio do I\xE7\xE1|Silves|S\xE3o Gabriel da Cachoeira|S\xE3o Paulo de Oliven\xE7a|S\xE3o Sebasti\xE3o do Uatum\xE3|Tabatinga|Tapau\xE1|Tef\xE9|Tonantins|Uarini|Urucar\xE1|Urucurituba",AP:"Amap\xE1|Cal\xE7oene|Cutias|Ferreira Gomes|Itaubal|Laranjal do Jari|Macap\xE1|Mazag\xE3o|Oiapoque|Pedra Branca do Amapari|Porto Grande|Pracu\xFAba|Santana|Serra do Navio|Tartarugalzinho|Vit\xF3ria do Jari",BA:"Abar\xE9|Aba\xEDra|Acajutiba|Adustina|Aiquara|Alagoinhas|Alcoba\xE7a|Almadina|Amargosa|Am\xE9lia Rodrigues|Am\xE9rica Dourada|Anag\xE9|Andara\xED|Andorinha|Angical|Anguera|Antas|Ant\xF4nio Cardoso|Ant\xF4nio Gon\xE7alves|Apor\xE1|Apuarema|Aracatu|Araci|Aramari|Arataca|Aratu\xEDpe|Ara\xE7\xE1s|Aurelino Leal|Baian\xF3polis|Baixa Grande|Banza\xEA|Barra|Barra da Estiva|Barra do Cho\xE7a|Barra do Mendes|Barra do Rocha|Barreiras|Barro Alto|Barro Preto|Barrocas|Belmonte|Belo Campo|Biritinga|Boa Nova|Boa Vista do Tupim|Bom Jesus da Lapa|Bom Jesus da Serra|Boninal|Bonito|Boquira|Botupor\xE3|Brejol\xE2ndia|Brej\xF5es|Brotas de Maca\xFAbas|Brumado|Buerarema|Buritirama|Caatiba|Cabaceiras do Paragua\xE7u|Cachoeira|Cacul\xE9|Caetanos|Caetit\xE9|Cafarnaum|Cairu|Caldeir\xE3o Grande|Camacan|Camamu|Cama\xE7ari|Campo Alegre de Lourdes|Campo Formoso|Canarana|Canavieiras|Candeal|Candeias|Candiba|Cansan\xE7\xE3o|Canudos|Can\xE1polis|Capela do Alto Alegre|Capim Grosso|Caravelas|Cara\xEDbas|Cardeal da Silva|Carinhanha|Casa Nova|Castro Alves|Catol\xE2ndia|Catu|Caturama|Ca\xE9m|Central|Chorroch\xF3|Cip\xF3|Coaraci|Cocos|Concei\xE7\xE3o da Feira|Concei\xE7\xE3o do Almeida|Concei\xE7\xE3o do Coit\xE9|Concei\xE7\xE3o do Jacu\xEDpe|Conde|Conde\xFAba|Contendas do Sincor\xE1|Cora\xE7\xE3o de Maria|Cordeiros|Coribe|Coronel Jo\xE3o S\xE1|Correntina|Cotegipe|Cravol\xE2ndia|Crist\xF3polis|Cris\xF3polis|Cruz das Almas|Cura\xE7\xE1|C\xE2ndido Sales|C\xEDcero Dantas|Dias d'\xC1vila|Dom Bas\xEDlio|Dom Macedo Costa|D\xE1rio Meira|El\xEDsio Medrado|Encruzilhada|Entre Rios|Esplanada|Euclides da Cunha|Eun\xE1polis|Feira da Mata|Feira de Santana|Filad\xE9lfia|Firmino Alves|Floresta Azul|Formosa do Rio Preto|F\xE1tima|Gandu|Gavi\xE3o|Gentio do Ouro|Gl\xF3ria|Gongogi|Governador Mangabeira|Guajeru|Guanambi|Guaratinga|Heli\xF3polis|Ia\xE7u|Ibiassuc\xEA|Ibicara\xED|Ibicoara|Ibicu\xED|Ibipeba|Ibipitanga|Ibiquera|Ibirapitanga|Ibirapu\xE3|Ibirataia|Ibitiara|Ibitit\xE1|Ibotirama|Ichu|Igapor\xE3|Igrapi\xFAna|Igua\xED|Ilh\xE9us|Inhambupe|Ipecaet\xE1|Ipia\xFA|Ipir\xE1|Ipupiara|Irajuba|Iramaia|Iraquara|Irar\xE1|Irec\xEA|Itabela|Itaberaba|Itabuna|Itacar\xE9|Itaet\xE9|Itagi|Itagib\xE1|Itagimirim|Itagua\xE7u da Bahia|Itaju do Col\xF4nia|Itaju\xEDpe|Itamaraju|Itamari|Itamb\xE9|Itanagra|Itanh\xE9m|Itaparica|Itapebi|Itapetinga|Itapicuru|Itapitanga|Itap\xE9|Itaquara|Itarantim|Itatim|Itiru\xE7u|Iti\xFAba|Itoror\xF3|Itua\xE7u|Ituber\xE1|Iuiu|Jaborandi|Jacaraci|Jacobina|Jaguaquara|Jaguarari|Jaguaripe|Janda\xEDra|Jequi\xE9|Jeremoabo|Jiquiri\xE7\xE1|Jita\xFAna|Jo\xE3o Dourado|Juazeiro|Jucuru\xE7u|Jussara|Jussari|Jussiape|Lafaiete Coutinho|Lagoa Real|Laje|Lajedinho|Lajedo do Tabocal|Lajed\xE3o|Lamar\xE3o|Lap\xE3o|Lauro de Freitas|Len\xE7\xF3is|Lic\xEDnio de Almeida|Livramento de Nossa Senhora|Lu\xEDs Eduardo Magalh\xE3es|Macajuba|Macarani|Maca\xFAbas|Macurur\xE9|Madre de Deus|Maetinga|Maiquinique|Mairi|Malhada|Malhada de Pedras|Manoel Vitorino|Mansid\xE3o|Marac\xE1s|Maragogipe|Mara\xFA|Marcion\xEDlio Souza|Mascote|Mata de S\xE3o Jo\xE3o|Matina|Medeiros Neto|Miguel Calmon|Milagres|Mirangaba|Mirante|Monte Santo|Morpar\xE1|Morro do Chap\xE9u|Mortugaba|Mucug\xEA|Mucuri|Mulungu do Morro|Mundo Novo|Muniz Ferreira|Muqu\xE9m do S\xE3o Francisco|Muritiba|Mutu\xEDpe|Nazar\xE9|Nilo Pe\xE7anha|Nordestina|Nova Cana\xE3|Nova F\xE1tima|Nova Ibi\xE1|Nova Itarana|Nova Reden\xE7\xE3o|Nova Soure|Nova Vi\xE7osa|Novo Horizonte|Novo Triunfo|Olindina|Oliveira dos Brejinhos|Ouri\xE7angas|Ourol\xE2ndia|Palmas de Monte Alto|Palmeiras|Paramirim|Paratinga|Paripiranga|Pau Brasil|Paulo Afonso|Pedro Alexandre|Pedr\xE3o|Piat\xE3|Pil\xE3o Arcado|Pinda\xED|Pindoba\xE7u|Pintadas|Pira\xED do Norte|Pirip\xE1|Piritiba|Planaltino|Planalto|Pojuca|Ponto Novo|Porto Seguro|Potiragu\xE1|Po\xE7\xF5es|Prado|Presidente Dutra|Presidente J\xE2nio Quadros|Presidente Tancredo Neves|P\xE9 de Serra|Queimadas|Quijingue|Quixabeira|Rafael Jambeiro|Remanso|Retirol\xE2ndia|Riacho de Santana|Riach\xE3o das Neves|Riach\xE3o do Jacu\xEDpe|Ribeira do Amparo|Ribeira do Pombal|Ribeir\xE3o do Largo|Rio de Contas|Rio do Ant\xF4nio|Rio do Pires|Rio Real|Rodelas|Ruy Barbosa|Salinas da Margarida|Salvador|Santa Br\xEDgida|Santa B\xE1rbara|Santa Cruz Cabr\xE1lia|Santa Cruz da Vit\xF3ria|Santa In\xEAs|Santa Luzia|Santa Maria da Vit\xF3ria|Santa Rita de C\xE1ssia|Santa Terezinha|Santaluz|Santana|Santan\xF3polis|Santo Amaro|Santo Ant\xF4nio de Jesus|Santo Est\xEAv\xE3o|Sapea\xE7u|Saubara|Sa\xFAde|Seabra|Sebasti\xE3o Laranjeiras|Senhor do Bonfim|Sento S\xE9|Serra do Ramalho|Serra Dourada|Serra Preta|Serrinha|Serrol\xE2ndia|Sim\xF5es Filho|Sobradinho|Souto Soares|S\xE1tiro Dias|S\xE3o Desid\xE9rio|S\xE3o Domingos|S\xE3o Felipe|S\xE3o Francisco do Conde|S\xE3o F\xE9lix|S\xE3o F\xE9lix do Coribe|S\xE3o Gabriel|S\xE3o Gon\xE7alo dos Campos|S\xE3o Jos\xE9 da Vit\xF3ria|S\xE3o Jos\xE9 do Jacu\xEDpe|S\xE3o Miguel das Matas|S\xE3o Sebasti\xE3o do Pass\xE9|S\xEDtio do Mato|S\xEDtio do Quinto|Tabocas do Brejo Velho|Tanha\xE7u|Tanque Novo|Tanquinho|Tapero\xE1|Tapiramut\xE1|Teixeira de Freitas|Teodoro Sampaio|Teofil\xE2ndia|Teol\xE2ndia|Terra Nova|Tremedal|Tucano|Uau\xE1|Ubaitaba|Ubat\xE3|Uba\xEDra|Uiba\xED|Umburanas|Una|Urandi|Uru\xE7uca|Utinga|Valente|Valen\xE7a|Varzedo|Vera Cruz|Vereda|Vit\xF3ria da Conquista|V\xE1rzea da Ro\xE7a|V\xE1rzea do Po\xE7o|V\xE1rzea Nova|Wagner|Wanderley|Wenceslau Guimar\xE3es|Xique-Xique|\xC1gua Fria|\xC9rico Cardoso",CE:"Abaiara|Acarape|Acara\xFA|Acopiara|Aiuaba|Alc\xE2ntaras|Altaneira|Alto Santo|Amontada|Antonina do Norte|Apuiar\xE9s|Aquiraz|Aracati|Aracoiaba|Ararend\xE1|Araripe|Aratuba|Arneiroz|Assar\xE9|Aurora|Baixio|Banabui\xFA|Barbalha|Barreira|Barro|Barroquinha|Baturit\xE9|Beberibe|Bela Cruz|Boa Viagem|Brejo Santo|Camocim|Campos Sales|Canind\xE9|Capistrano|Caridade|Cariria\xE7u|Carir\xE9|Cari\xFAs|Carnaubal|Cascavel|Catarina|Catunda|Caucaia|Cedro|Chaval|Chorozinho|Chor\xF3|Corea\xFA|Crate\xFAs|Crato|Croat\xE1|Cruz|Deputado Irapuan Pinheiro|Erer\xE9|Eus\xE9bio|Farias Brito|Forquilha|Fortaleza|Fortim|Frecheirinha|General Sampaio|Granja|Granjeiro|Gra\xE7a|Groa\xEDras|Guai\xFAba|Guaraciaba do Norte|Guaramiranga|Hidrol\xE2ndia|Horizonte|Ibaretama|Ibiapina|Ibicuitinga|Icapu\xED|Ic\xF3|Iguatu|Independ\xEAncia|Ipaporanga|Ipaumirim|Ipu|Ipueiras|Iracema|Irau\xE7uba|Itaitinga|Itai\xE7aba|Itapaj\xE9|Itapipoca|Itapi\xFAna|Itarema|Itatira|Jaguaretama|Jaguaribara|Jaguaribe|Jaguaruana|Jardim|Jati|Jijoca de Jericoacoara|Juazeiro do Norte|Juc\xE1s|Lavras da Mangabeira|Limoeiro do Norte|Madalena|Maracana\xFA|Maranguape|Marco|Martin\xF3pole|Massap\xEA|Mauriti|Meruoca|Milagres|Milh\xE3|Mira\xEDma|Miss\xE3o Velha|Momba\xE7a|Monsenhor Tabosa|Morada Nova|Mora\xFAjo|Morrinhos|Mucambo|Mulungu|Nova Olinda|Nova Russas|Novo Oriente|Ocara|Or\xF3s|Pacajus|Pacatuba|Pacoti|Pacuj\xE1|Palhano|Palm\xE1cia|Paracuru|Paraipaba|Parambu|Paramoti|Pedra Branca|Penaforte|Pentecoste|Pereiro|Pindoretama|Piquet Carneiro|Pires Ferreira|Poranga|Porteiras|Potengi|Potiretama|Quiterian\xF3polis|Quixad\xE1|Quixel\xF4|Quixeramobim|Quixer\xE9|Reden\xE7\xE3o|Reriutaba|Russas|Saboeiro|Salitre|Santa Quit\xE9ria|Santana do Acara\xFA|Santana do Cariri|Senador Pompeu|Senador S\xE1|Sobral|Solon\xF3pole|S\xE3o Benedito|S\xE3o Gon\xE7alo do Amarante|S\xE3o Jo\xE3o do Jaguaribe|S\xE3o Lu\xEDs do Curu|Tabuleiro do Norte|Tamboril|Tarrafas|Tau\xE1|Teju\xE7uoca|Tiangu\xE1|Trairi|Tururu|Ubajara|Umari|Umirim|Uruburetama|Uruoca|Varjota|Vi\xE7osa do Cear\xE1|V\xE1rzea Alegre",DF:"Bras\xEDlia",ES:"Afonso Cl\xE1udio|Alegre|Alfredo Chaves|Alto Rio Novo|Anchieta|Apiac\xE1|Aracruz|At\xEDlio Viv\xE1cqua|Baixo Guandu|Barra de S\xE3o Francisco|Boa Esperan\xE7a|Bom Jesus do Norte|Brejetuba|Cachoeiro de Itapemirim|Cariacica|Castelo|Colatina|Concei\xE7\xE3o da Barra|Concei\xE7\xE3o do Castelo|Divino de S\xE3o Louren\xE7o|Domingos Martins|Dores do Rio Preto|Ecoporanga|Fund\xE3o|Governador Lindenberg|Guarapari|Gua\xE7u\xED|Ibatiba|Ibira\xE7u|Ibitirama|Iconha|Irupi|Itagua\xE7u|Itapemirim|Itarana|I\xFAna|Jaguar\xE9|Jer\xF4nimo Monteiro|Jo\xE3o Neiva|Laranja da Terra|Linhares|Manten\xF3polis|Marata\xEDzes|Marechal Floriano|Maril\xE2ndia|Mimoso do Sul|Montanha|Mucurici|Muniz Freire|Muqui|Nova Ven\xE9cia|Pancas|Pedro Can\xE1rio|Pinheiros|Pi\xFAma|Ponto Belo|Presidente Kennedy|Rio Bananal|Rio Novo do Sul|Santa Leopoldina|Santa Maria de Jetib\xE1|Santa Teresa|Serra|Sooretama|S\xE3o Domingos do Norte|S\xE3o Gabriel da Palha|S\xE3o Jos\xE9 do Cal\xE7ado|S\xE3o Mateus|S\xE3o Roque do Cana\xE3|Vargem Alta|Venda Nova do Imigrante|Viana|Vila Pav\xE3o|Vila Val\xE9rio|Vila Velha|Vit\xF3ria|\xC1gua Doce do Norte|\xC1guia Branca",GO:"Abadia de Goi\xE1s|Abadi\xE2nia|Acre\xFAna|Adel\xE2ndia|Alex\xE2nia|Alo\xE2ndia|Alto Horizonte|Alto Para\xEDso de Goi\xE1s|Alvorada do Norte|Amaralina|Americano do Brasil|Amorin\xF3polis|Anhanguera|Anicuns|An\xE1polis|Aparecida de Goi\xE2nia|Aparecida do Rio Doce|Apor\xE9|Aragar\xE7as|Aragoi\xE2nia|Araguapaz|Ara\xE7u|Aren\xF3polis|Aruan\xE3|Auril\xE2ndia|Avelin\xF3polis|Baliza|Barro Alto|Bela Vista de Goi\xE1s|Bom Jardim de Goi\xE1s|Bom Jesus de Goi\xE1s|Bonfin\xF3polis|Bon\xF3polis|Brazabrantes|Brit\xE2nia|Buriti Alegre|Buriti de Goi\xE1s|Buritin\xF3polis|Cabeceiras|Cachoeira Alta|Cachoeira de Goi\xE1s|Cachoeira Dourada|Caiap\xF4nia|Caldas Novas|Caldazinha|Campestre de Goi\xE1s|Campina\xE7u|Campinorte|Campo Alegre de Goi\xE1s|Campo Limpo de Goi\xE1s|Campos Belos|Campos Verdes|Carmo do Rio Verde|Castel\xE2ndia|Catal\xE3o|Catura\xED|Cavalcante|Ca\xE7u|Ceres|Cezarina|Chapad\xE3o do C\xE9u|Cidade Ocidental|Cocalzinho de Goi\xE1s|Colinas do Sul|Corumba\xEDba|Corumb\xE1 de Goi\xE1s|Cristalina|Cristian\xF3polis|Crix\xE1s|Crom\xEDnia|Cumari|C\xF3rrego do Ouro|Damian\xF3polis|Damol\xE2ndia|Davin\xF3polis|Diorama|Divin\xF3polis de Goi\xE1s|Doverl\xE2ndia|Edealina|Ed\xE9ia|Estrela do Norte|Faina|Fazenda Nova|Firmin\xF3polis|Flores de Goi\xE1s|Formosa|Formoso|Gameleira de Goi\xE1s|Goiandira|Goianira|Goian\xE1polis|Goian\xE9sia|Goiatuba|Goi\xE1s|Goi\xE2nia|Gouvel\xE2ndia|Guap\xF3|Guarani de Goi\xE1s|Guara\xEDta|Guarinos|Heitora\xED|Hidrolina|Hidrol\xE2ndia|Iaciara|Inaciol\xE2ndia|Indiara|Inhumas|Ipameri|Ipiranga de Goi\xE1s|Ipor\xE1|Israel\xE2ndia|Itabera\xED|Itaguari|Itaguaru|Itaj\xE1|Itapaci|Itapirapu\xE3|Itapuranga|Itarum\xE3|Itau\xE7u|Itumbiara|Ivol\xE2ndia|Jandaia|Jaragu\xE1|Jata\xED|Jaupaci|Jes\xFApolis|Jovi\xE2nia|Jussara|Lagoa Santa|Leopoldo de Bulh\xF5es|Luzi\xE2nia|Mairipotaba|Mamba\xED|Mara Rosa|Marzag\xE3o|Matrinch\xE3|Mauril\xE2ndia|Mimoso de Goi\xE1s|Mina\xE7u|Mineiros|Moipor\xE1|Monte Alegre de Goi\xE1s|Montes Claros de Goi\xE1s|Montividiu|Montividiu do Norte|Morrinhos|Morro Agudo de Goi\xE1s|Moss\xE2medes|Mozarl\xE2ndia|Mundo Novo|Mutun\xF3polis|Naz\xE1rio|Ner\xF3polis|Niquel\xE2ndia|Nova Am\xE9rica|Nova Aurora|Nova Crix\xE1s|Nova Gl\xF3ria|Nova Igua\xE7u de Goi\xE1s|Nova Roma|Nova Veneza|Novo Brasil|Novo Gama|Novo Planalto|Orizona|Ouro Verde de Goi\xE1s|Ouvidor|Padre Bernardo|Palestina de Goi\xE1s|Palmeiras de Goi\xE1s|Palmelo|Palmin\xF3polis|Panam\xE1|Paranaiguara|Para\xFAna|Perol\xE2ndia|Petrolina de Goi\xE1s|Pilar de Goi\xE1s|Piracanjuba|Piranhas|Piren\xF3polis|Pires do Rio|Planaltina|Pontalina|Porangatu|Porteir\xE3o|Portel\xE2ndia|Posse|Professor Jamil|Quirin\xF3polis|Rialma|Rian\xE1polis|Rio Quente|Rio Verde|Rubiataba|Sanclerl\xE2ndia|Santa B\xE1rbara de Goi\xE1s|Santa Cruz de Goi\xE1s|Santa F\xE9 de Goi\xE1s|Santa Helena de Goi\xE1s|Santa Isabel|Santa Rita do Araguaia|Santa Rita do Novo Destino|Santa Rosa de Goi\xE1s|Santa Tereza de Goi\xE1s|Santa Terezinha de Goi\xE1s|Santo Ant\xF4nio da Barra|Santo Ant\xF4nio de Goi\xE1s|Santo Ant\xF4nio do Descoberto|Senador Canedo|Serran\xF3polis|Silv\xE2nia|Simol\xE2ndia|S\xE3o Domingos|S\xE3o Francisco de Goi\xE1s|S\xE3o Jo\xE3o d'Alian\xE7a|S\xE3o Jo\xE3o da Para\xFAna|S\xE3o Luiz do Norte|S\xE3o Lu\xEDs de Montes Belos|S\xE3o Miguel do Araguaia|S\xE3o Miguel do Passa Quatro|S\xE3o Patr\xEDcio|S\xE3o Sim\xE3o|S\xEDtio d'Abadia|Taquaral de Goi\xE1s|Teresina de Goi\xE1s|Terez\xF3polis de Goi\xE1s|Trindade|Trombas|Tr\xEAs Ranchos|Turvel\xE2ndia|Turv\xE2nia|Uirapuru|Uruana|Urua\xE7u|Uruta\xED|Valpara\xEDso de Goi\xE1s|Varj\xE3o|Vian\xF3polis|Vicentin\xF3polis|Vila Boa|Vila Prop\xEDcio|\xC1gua Fria de Goi\xE1s|\xC1gua Limpa|\xC1guas Lindas de Goi\xE1s",MA:"Afonso Cunha|Alc\xE2ntara|Aldeias Altas|Altamira do Maranh\xE3o|Alto Alegre do Maranh\xE3o|Alto Alegre do Pindar\xE9|Alto Parna\xEDba|Amap\xE1 do Maranh\xE3o|Amarante do Maranh\xE3o|Anajatuba|Anapurus|Apicum-A\xE7u|Araguan\xE3|Araioses|Arame|Arari|Axix\xE1|A\xE7ail\xE2ndia|Bacabal|Bacabeira|Bacuri|Bacurituba|Balsas|Barra do Corda|Barreirinhas|Bar\xE3o de Graja\xFA|Bela Vista do Maranh\xE3o|Bel\xE1gua|Benedito Leite|Bequim\xE3o|Bernardo do Mearim|Boa Vista do Gurupi|Bom Jardim|Bom Jesus das Selvas|Bom Lugar|Brejo|Brejo de Areia|Buriti|Buriti Bravo|Buriticupu|Buritirana|Cachoeira Grande|Cajapi\xF3|Cajari|Campestre do Maranh\xE3o|Cantanhede|Capinzal do Norte|Carolina|Carutapera|Caxias|Cedral|Central do Maranh\xE3o|Centro do Guilherme|Centro Novo do Maranh\xE3o|Chapadinha|Cidel\xE2ndia|Cod\xF3|Coelho Neto|Colinas|Concei\xE7\xE3o do Lago-A\xE7u|Coroat\xE1|Cururupu|C\xE2ndido Mendes|Davin\xF3polis|Dom Pedro|Duque Bacelar|Esperantin\xF3polis|Estreito|Feira Nova do Maranh\xE3o|Fernando Falc\xE3o|Formosa da Serra Negra|Fortaleza dos Nogueiras|Fortuna|Godofredo Viana|Gon\xE7alves Dias|Governador Archer|Governador Edison Lob\xE3o|Governador Eug\xEAnio Barros|Governador Luiz Rocha|Governador Newton Bello|Governador Nunes Freire|Graja\xFA|Gra\xE7a Aranha|Guimar\xE3es|Humberto de Campos|Icatu|Igarap\xE9 do Meio|Igarap\xE9 Grande|Imperatriz|Itaipava do Graja\xFA|Itapecuru Mirim|Itinga do Maranh\xE3o|Jatob\xE1|Jenipapo dos Vieiras|Josel\xE2ndia|Jo\xE3o Lisboa|Junco do Maranh\xE3o|Lago da Pedra|Lago do Junco|Lago dos Rodrigues|Lago Verde|Lagoa do Mato|Lagoa Grande do Maranh\xE3o|Lajeado Novo|Lima Campos|Loreto|Lu\xEDs Domingues|Magalh\xE3es de Almeida|Maraca\xE7um\xE9|Maraj\xE1 do Sena|Maranh\xE3ozinho|Mata Roma|Matinha|Mat\xF5es|Mat\xF5es do Norte|Milagres do Maranh\xE3o|Mirador|Miranda do Norte|Mirinzal|Montes Altos|Mon\xE7\xE3o|Morros|Nina Rodrigues|Nova Colinas|Nova Iorque|Nova Olinda do Maranh\xE3o|Olho d'\xC1gua das Cunh\xE3s|Olinda Nova do Maranh\xE3o|Palmeir\xE2ndia|Paraibano|Parnarama|Passagem Franca|Pastos Bons|Paulino Neves|Paulo Ramos|Pa\xE7o do Lumiar|Pedreiras|Pedro do Ros\xE1rio|Penalva|Peri Mirim|Peritor\xF3|Pindar\xE9-Mirim|Pinheiro|Pio XII|Pirapemas|Porto Franco|Porto Rico do Maranh\xE3o|Po\xE7\xE3o de Pedras|Presidente Dutra|Presidente Juscelino|Presidente M\xE9dici|Presidente Sarney|Presidente Vargas|Primeira Cruz|Raposa|Riach\xE3o|Ribamar Fiquene|Ros\xE1rio|Samba\xEDba|Santa Filomena do Maranh\xE3o|Santa Helena|Santa In\xEAs|Santa Luzia|Santa Luzia do Paru\xE1|Santa Quit\xE9ria do Maranh\xE3o|Santa Rita|Santana do Maranh\xE3o|Santo Amaro do Maranh\xE3o|Santo Ant\xF4nio dos Lopes|Satubinha|Senador Alexandre Costa|Senador La Rocque|Serrano do Maranh\xE3o|Sucupira do Norte|Sucupira do Riach\xE3o|S\xE3o Benedito do Rio Preto|S\xE3o Bento|S\xE3o Bernardo|S\xE3o Domingos do Azeit\xE3o|S\xE3o Domingos do Maranh\xE3o|S\xE3o Francisco do Brej\xE3o|S\xE3o Francisco do Maranh\xE3o|S\xE3o F\xE9lix de Balsas|S\xE3o Jos\xE9 de Ribamar|S\xE3o Jos\xE9 dos Bas\xEDlios|S\xE3o Jo\xE3o Batista|S\xE3o Jo\xE3o do Car\xFA|S\xE3o Jo\xE3o do Para\xEDso|S\xE3o Jo\xE3o do Soter|S\xE3o Jo\xE3o dos Patos|S\xE3o Lu\xEDs|S\xE3o Lu\xEDs Gonzaga do Maranh\xE3o|S\xE3o Mateus do Maranh\xE3o|S\xE3o Pedro da \xC1gua Branca|S\xE3o Pedro dos Crentes|S\xE3o Raimundo das Mangabeiras|S\xE3o Raimundo do Doca Bezerra|S\xE3o Roberto|S\xE3o Vicente Ferrer|S\xEDtio Novo|Tasso Fragoso|Timbiras|Timon|Trizidela do Vale|Tufil\xE2ndia|Tuntum|Turia\xE7u|Turil\xE2ndia|Tut\xF3ia|Urbano Santos|Vargem Grande|Viana|Vila Nova dos Mart\xEDrios|Vitorino Freire|Vit\xF3ria do Mearim|Z\xE9 Doca|\xC1gua Doce do Maranh\xE3o",MG:"Abadia dos Dourados|Abaet\xE9|Abre Campo|Acaiaca|Aguanil|Aimor\xE9s|Aiuruoca|Alagoa|Albertina|Alfenas|Alfredo Vasconcelos|Almenara|Alpercata|Alpin\xF3polis|Alterosa|Alto Capara\xF3|Alto Jequitib\xE1|Alto Rio Doce|Alvarenga|Alvin\xF3polis|Alvorada de Minas|Al\xE9m Para\xEDba|Amparo do Serra|Andradas|Andrel\xE2ndia|Angel\xE2ndia|Ant\xF4nio Carlos|Ant\xF4nio Dias|Ant\xF4nio Prado de Minas|Aracitaba|Araguari|Arantina|Araponga|Arapor\xE3|Arapu\xE1|Arax\xE1|Ara\xE7a\xED|Ara\xE7ua\xED|Ara\xFAjos|Arceburgo|Arcos|Areado|Argirita|Aricanduva|Arinos|Astolfo Dutra|Atal\xE9ia|Augusto de Lima|A\xE7ucena|Baependi|Baldim|Bambu\xED|Bandeira|Bandeira do Sul|Barbacena|Barra Longa|Barroso|Bar\xE3o de Cocais|Bar\xE3o do Monte Alto|Bela Vista de Minas|Belmiro Braga|Belo Horizonte|Belo Oriente|Belo Vale|Berilo|Berizal|Bert\xF3polis|Betim|Bias Fortes|Bicas|Biquinhas|Boa Esperan\xE7a|Bocaina de Minas|Bocai\xFAva|Bom Despacho|Bom Jardim de Minas|Bom Jesus da Penha|Bom Jesus do Amparo|Bom Jesus do Galho|Bom Repouso|Bom Sucesso|Bonfim|Bonfin\xF3polis de Minas|Bonito de Minas|Borda da Mata|Botelhos|Botumirim|Brasil\xE2ndia de Minas|Bras\xEDlia de Minas|Braz\xF3polis|Bra\xFAnas|Brumadinho|Br\xE1s Pires|Bueno Brand\xE3o|Buen\xF3polis|Bugre|Buritis|Buritizeiro|Cabeceira Grande|Cabo Verde|Cachoeira da Prata|Cachoeira de Minas|Cachoeira de Paje\xFA|Cachoeira Dourada|Caetan\xF3polis|Caet\xE9|Caiana|Cajuri|Caldas|Camacho|Camanducaia|Cambuquira|Cambu\xED|Campanha|Campan\xE1rio|Campestre|Campina Verde|Campo Azul|Campo Belo|Campo do Meio|Campo Florido|Campos Altos|Campos Gerais|Cana Verde|Cana\xE3|Candeias|Cantagalo|Can\xE1polis|Capara\xF3|Capela Nova|Capelinha|Capetinga|Capim Branco|Capin\xF3polis|Capit\xE3o Andrade|Capit\xE3o En\xE9as|Capit\xF3lio|Caputira|Carana\xEDba|Caranda\xED|Carangola|Caratinga|Cara\xED|Carbonita|Carea\xE7u|Carlos Chagas|Carmo da Cachoeira|Carmo da Mata|Carmo de Minas|Carmo do Cajuru|Carmo do Parana\xEDba|Carmo do Rio Claro|Carm\xE9sia|Carm\xF3polis de Minas|Carneirinho|Carrancas|Carvalhos|Carvalh\xF3polis|Casa Grande|Cascalho Rico|Cataguases|Catas Altas|Catas Altas da Noruega|Catuji|Catuti|Caxambu|Cedro do Abaet\xE9|Central de Minas|Centralina|Chal\xE9|Chapada do Norte|Chapada Ga\xFAcha|Chiador|Ch\xE1cara|Cipot\xE2nea|Claraval|Claro dos Po\xE7\xF5es|Cl\xE1udio|Coimbra|Coluna|Comendador Gomes|Comercinho|Concei\xE7\xE3o da Aparecida|Concei\xE7\xE3o da Barra de Minas|Concei\xE7\xE3o das Alagoas|Concei\xE7\xE3o das Pedras|Concei\xE7\xE3o de Ipanema|Concei\xE7\xE3o do Mato Dentro|Concei\xE7\xE3o do Par\xE1|Concei\xE7\xE3o do Rio Verde|Concei\xE7\xE3o dos Ouros|Confins|Congonhal|Congonhas|Congonhas do Norte|Conquista|Conselheiro Lafaiete|Conselheiro Pena|Consola\xE7\xE3o|Contagem|Coqueiral|Cora\xE7\xE3o de Jesus|Cordisburgo|Cordisl\xE2ndia|Corinto|Coroaci|Coromandel|Coronel Fabriciano|Coronel Murta|Coronel Pacheco|Coronel Xavier Chaves|Couto de Magalh\xE3es de Minas|Cristais|Cristiano Otoni|Cristina|Crist\xE1lia|Cris\xF3lita|Crucil\xE2ndia|Cruzeiro da Fortaleza|Cruz\xEDlia|Cuparaque|Curral de Dentro|Curvelo|C\xE1ssia|C\xF3rrego Danta|C\xF3rrego do Bom Jesus|C\xF3rrego Fundo|C\xF3rrego Novo|C\xF4nego Marinho|Datas|Delfim Moreira|Delfin\xF3polis|Delta|Descoberto|Desterro de Entre Rios|Desterro do Melo|Diamantina|Diogo de Vasconcelos|Dion\xEDsio|Divino|Divino das Laranjeiras|Divinol\xE2ndia de Minas|Divin\xE9sia|Divin\xF3polis|Divisa Alegre|Divisa Nova|Divis\xF3polis|Dom Bosco|Dom Cavati|Dom Joaquim|Dom Silv\xE9rio|Dom Vi\xE7oso|Dona Euz\xE9bia|Dores de Campos|Dores de Guanh\xE3es|Dores do Indai\xE1|Dores do Turvo|Dores\xF3polis|Douradoquara|Durand\xE9|El\xF3i Mendes|Engenheiro Caldas|Engenheiro Navarro|Entre Folhas|Entre Rios de Minas|Erv\xE1lia|Esmeraldas|Espera Feliz|Espinosa|Esp\xEDrito Santo do Dourado|Estiva|Estrela Dalva|Estrela do Indai\xE1|Estrela do Sul|Eugen\xF3polis|Ewbank da C\xE2mara|Extrema|Fama|Faria Lemos|Felisburgo|Felixl\xE2ndia|Fel\xEDcio dos Santos|Fernandes Tourinho|Ferros|Fervedouro|Florestal|Formiga|Formoso|Fortaleza de Minas|Fortuna de Minas|Francisco Badar\xF3|Francisco Dumont|Francisco S\xE1|Francisc\xF3polis|Frei Gaspar|Frei Inoc\xEAncio|Frei Lagonegro|Fronteira|Fronteira dos Vales|Fruta de Leite|Frutal|Funil\xE2ndia|Galil\xE9ia|Gameleiras|Glaucil\xE2ndia|Goiabeira|Goian\xE1|Gonzaga|Gon\xE7alves|Gouveia|Governador Valadares|Grupiara|Gr\xE3o Mogol|Guanh\xE3es|Guap\xE9|Guaraciaba|Guaraciama|Guarani|Guaran\xE9sia|Guarar\xE1|Guarda-Mor|Guaxup\xE9|Guidoval|Guimar\xE2nia|Guiricema|Gurinhat\xE3|Heliodora|Iapu|Ibertioga|Ibia\xED|Ibiracatu|Ibiraci|Ibirit\xE9|Ibiti\xFAra de Minas|Ibituruna|Ibi\xE1|Icara\xED de Minas|Igarap\xE9|Igaratinga|Iguatama|Ijaci|Ilic\xEDnea|Imb\xE9 de Minas|Inconfidentes|Indaiabira|Indian\xF3polis|Inga\xED|Inhapim|Inha\xFAma|Inimutaba|Ipaba|Ipanema|Ipatinga|Ipia\xE7u|Ipui\xFAna|Ira\xED de Minas|Itabira|Itabirinha|Itabirito|Itacambira|Itacarambi|Itaguara|Itaip\xE9|Itajub\xE1|Itamarandiba|Itamarati de Minas|Itambacuri|Itamb\xE9 do Mato Dentro|Itamogi|Itamonte|Itanhandu|Itanhomi|Itaobim|Itapagipe|Itapecerica|Itapeva|Itatiaiu\xE7u|Itaverava|Ita\xFA de Minas|Ita\xFAna|Itinga|Itueta|Ituiutaba|Itumirim|Iturama|Itutinga|Jaboticatubas|Jacinto|Jacutinga|Jacu\xED|Jaguara\xE7u|Jampruca|Jana\xFAba|Janu\xE1ria|Japara\xEDba|Japonvar|Ja\xEDba|Jeceaba|Jenipapo de Minas|Jequeri|Jequita\xED|Jequitib\xE1|Jequitinhonha|Jesu\xE2nia|Joan\xE9sia|Joaquim Fel\xEDcio|Joa\xEDma|Jord\xE2nia|Josen\xF3polis|Jos\xE9 Gon\xE7alves de Minas|Jos\xE9 Raydan|Jo\xE3o Monlevade|Jo\xE3o Pinheiro|Juatuba|Juiz de Fora|Juramento|Juruaia|Juven\xEDlia|Ladainha|Lagamar|Lagoa da Prata|Lagoa dos Patos|Lagoa Dourada|Lagoa Formosa|Lagoa Grande|Lagoa Santa|Lajinha|Lambari|Lamim|Laranjal|Lassance|Lavras|Leandro Ferreira|Leme do Prado|Leopoldina|Liberdade|Lima Duarte|Limeira do Oeste|Lontra|Luisburgo|Luisl\xE2ndia|Lumin\xE1rias|Luz|Machacalis|Machado|Madre de Deus de Minas|Malacacheta|Mamonas|Manga|Manhua\xE7u|Manhumirim|Mantena|Mar de Espanha|Maravilhas|Maria da F\xE9|Mariana|Marilac|Marip\xE1 de Minas|Marli\xE9ria|Marmel\xF3polis|Martinho Campos|Martins Soares|Mata Verde|Materl\xE2ndia|Mateus Leme|Mathias Lobato|Matias Barbosa|Matias Cardoso|Matip\xF3|Mato Verde|Matozinhos|Matutina|Medeiros|Medina|Mendes Pimentel|Merc\xEAs|Mesquita|Minas Novas|Minduri|Mirabela|Miradouro|Mirav\xE2nia|Mira\xED|Moeda|Moema|Monjolos|Monsenhor Paulo|Montalv\xE2nia|Monte Alegre de Minas|Monte Azul|Monte Belo|Monte Carmelo|Monte Formoso|Monte Santo de Minas|Monte Si\xE3o|Montes Claros|Montezuma|Morada Nova de Minas|Morro da Gar\xE7a|Morro do Pilar|Munhoz|Muria\xE9|Mutum|Muzambinho|M\xE1rio Campos|Nacip Raydan|Nanuque|Naque|Natal\xE2ndia|Nat\xE9rcia|Nazareno|Nepomuceno|Ninheira|Nova Bel\xE9m|Nova Era|Nova Lima|Nova M\xF3dica|Nova Ponte|Nova Porteirinha|Nova Resende|Nova Serrana|Nova Uni\xE3o|Novo Cruzeiro|Novo Oriente de Minas|Novorizonte|Olaria|Olhos-d'\xC1gua|Oliveira|Oliveira Fortes|Ol\xEDmpio Noronha|On\xE7a de Pitangui|Orat\xF3rios|Oriz\xE2nia|Ouro Branco|Ouro Fino|Ouro Preto|Ouro Verde de Minas|Padre Carvalho|Padre Para\xEDso|Pai Pedro|Paineiras|Pains|Paiva|Palma|Palm\xF3polis|Papagaios|Paracatu|Paragua\xE7u|Parais\xF3polis|Paraopeba|Par\xE1 de Minas|Passa Quatro|Passa Tempo|Passa Vinte|Passab\xE9m|Passos|Patis|Patos de Minas|Patroc\xEDnio|Patroc\xEDnio do Muria\xE9|Paula C\xE2ndido|Paulistas|Pav\xE3o|Pedra Azul|Pedra Bonita|Pedra do Anta|Pedra do Indai\xE1|Pedra Dourada|Pedralva|Pedras de Maria da Cruz|Pedrin\xF3polis|Pedro Leopoldo|Pedro Teixeira|Pequeri|Pequi|Perdig\xE3o|Perdizes|Perd\xF5es|Periquito|Pescador|Pe\xE7anha|Piau|Piedade de Caratinga|Piedade de Ponte Nova|Piedade do Rio Grande|Piedade dos Gerais|Pimenta|Pingo-d'\xC1gua|Pint\xF3polis|Piracema|Pirajuba|Piranga|Piranguinho|Pirangu\xE7u|Pirapetinga|Pirapora|Pira\xFAba|Pitangui|Piumhi|Planura|Pocrane|Pomp\xE9u|Ponte Nova|Ponto Chique|Ponto dos Volantes|Porteirinha|Porto Firme|Pot\xE9|Pouso Alegre|Pouso Alto|Po\xE7o Fundo|Po\xE7os de Caldas|Prados|Prata|Pratinha|Prat\xE1polis|Presidente Bernardes|Presidente Juscelino|Presidente Kubitschek|Presidente Oleg\xE1rio|Prudente de Morais|Quartel Geral|Queluzito|Raposos|Raul Soares|Recreio|Reduto|Resende Costa|Resplendor|Ressaquinha|Riachinho|Riacho dos Machados|Ribeir\xE3o das Neves|Ribeir\xE3o Vermelho|Rio Acima|Rio Casca|Rio do Prado|Rio Doce|Rio Espera|Rio Manso|Rio Novo|Rio Parana\xEDba|Rio Pardo de Minas|Rio Piracicaba|Rio Pomba|Rio Preto|Rio Vermelho|Rit\xE1polis|Rochedo de Minas|Rodeiro|Romaria|Ros\xE1rio da Limeira|Rubelita|Rubim|Sabar\xE1|Sabin\xF3polis|Sacramento|Salinas|Salto da Divisa|Santa B\xE1rbara|Santa B\xE1rbara do Leste|Santa B\xE1rbara do Monte Verde|Santa B\xE1rbara do Tug\xFArio|Santa Cruz de Minas|Santa Cruz de Salinas|Santa Cruz do Escalvado|Santa Efig\xEAnia de Minas|Santa F\xE9 de Minas|Santa Helena de Minas|Santa Juliana|Santa Luzia|Santa Margarida|Santa Maria de Itabira|Santa Maria do Salto|Santa Maria do Sua\xE7u\xED|Santa Rita de Caldas|Santa Rita de Ibitipoca|Santa Rita de Jacutinga|Santa Rita de Minas|Santa Rita do Itueto|Santa Rita do Sapuca\xED|Santa Rosa da Serra|Santa Vit\xF3ria|Santana da Vargem|Santana de Cataguases|Santana de Pirapama|Santana do Deserto|Santana do Garamb\xE9u|Santana do Jacar\xE9|Santana do Manhua\xE7u|Santana do Para\xEDso|Santana do Riacho|Santana dos Montes|Santo Ant\xF4nio do Amparo|Santo Ant\xF4nio do Aventureiro|Santo Ant\xF4nio do Grama|Santo Ant\xF4nio do Itamb\xE9|Santo Ant\xF4nio do Jacinto|Santo Ant\xF4nio do Monte|Santo Ant\xF4nio do Retiro|Santo Ant\xF4nio do Rio Abaixo|Santo Hip\xF3lito|Santos Dumont|Sapuca\xED-Mirim|Sardo\xE1|Sarzedo|Sem-Peixe|Senador Amaral|Senador Cortes|Senador Firmino|Senador Jos\xE9 Bento|Senador Modestino Gon\xE7alves|Senhora de Oliveira|Senhora do Porto|Senhora dos Rem\xE9dios|Sericita|Seritinga|Serra Azul de Minas|Serra da Saudade|Serra do Salitre|Serra dos Aimor\xE9s|Serrania|Serranos|Serran\xF3polis de Minas|Serro|Sete Lagoas|Setubinha|Silveir\xE2nia|Silvian\xF3polis|Simon\xE9sia|Sim\xE3o Pereira|Sobr\xE1lia|Soledade de Minas|S\xE3o Bento Abade|S\xE3o Br\xE1s do Sua\xE7u\xED|S\xE3o Domingos das Dores|S\xE3o Domingos do Prata|S\xE3o Francisco|S\xE3o Francisco de Paula|S\xE3o Francisco de Sales|S\xE3o Francisco do Gl\xF3ria|S\xE3o F\xE9lix de Minas|S\xE3o Geraldo|S\xE3o Geraldo da Piedade|S\xE3o Geraldo do Baixio|S\xE3o Gon\xE7alo do Abaet\xE9|S\xE3o Gon\xE7alo do Par\xE1|S\xE3o Gon\xE7alo do Rio Abaixo|S\xE3o Gon\xE7alo do Rio Preto|S\xE3o Gon\xE7alo do Sapuca\xED|S\xE3o Gotardo|S\xE3o Joaquim de Bicas|S\xE3o Jos\xE9 da Barra|S\xE3o Jos\xE9 da Lapa|S\xE3o Jos\xE9 da Safira|S\xE3o Jos\xE9 da Varginha|S\xE3o Jos\xE9 do Alegre|S\xE3o Jos\xE9 do Divino|S\xE3o Jos\xE9 do Goiabal|S\xE3o Jos\xE9 do Jacuri|S\xE3o Jos\xE9 do Mantimento|S\xE3o Jo\xE3o Batista do Gl\xF3ria|S\xE3o Jo\xE3o da Lagoa|S\xE3o Jo\xE3o da Mata|S\xE3o Jo\xE3o da Ponte|S\xE3o Jo\xE3o das Miss\xF5es|S\xE3o Jo\xE3o del Rei|S\xE3o Jo\xE3o do Manhua\xE7u|S\xE3o Jo\xE3o do Manteninha|S\xE3o Jo\xE3o do Oriente|S\xE3o Jo\xE3o do Pacu\xED|S\xE3o Jo\xE3o do Para\xEDso|S\xE3o Jo\xE3o Evangelista|S\xE3o Jo\xE3o Nepomuceno|S\xE3o Louren\xE7o|S\xE3o Miguel do Anta|S\xE3o Pedro da Uni\xE3o|S\xE3o Pedro do Sua\xE7u\xED|S\xE3o Pedro dos Ferros|S\xE3o Rom\xE3o|S\xE3o Roque de Minas|S\xE3o Sebasti\xE3o da Bela Vista|S\xE3o Sebasti\xE3o da Vargem Alegre|S\xE3o Sebasti\xE3o do Anta|S\xE3o Sebasti\xE3o do Maranh\xE3o|S\xE3o Sebasti\xE3o do Oeste|S\xE3o Sebasti\xE3o do Para\xEDso|S\xE3o Sebasti\xE3o do Rio Preto|S\xE3o Sebasti\xE3o do Rio Verde|S\xE3o Tiago|S\xE3o Tom\xE1s de Aquino|S\xE3o Tom\xE9 das Letras|S\xE3o Vicente de Minas|Tabuleiro|Taiobeiras|Taparuba|Tapira|Tapira\xED|Taquara\xE7u de Minas|Tarumirim|Teixeiras|Te\xF3filo Otoni|Tim\xF3teo|Tiradentes|Tiros|Tocantins|Tocos do Moji|Toledo|Tombos|Tr\xEAs Cora\xE7\xF5es|Tr\xEAs Marias|Tr\xEAs Pontas|Tumiritinga|Tupaciguara|Turmalina|Turvol\xE2ndia|Ubaporanga|Uba\xED|Uberaba|Uberl\xE2ndia|Ub\xE1|Umburatiba|Una\xED|Uni\xE3o de Minas|Uruana de Minas|Urucuia|Uruc\xE2nia|Vargem Alegre|Vargem Bonita|Vargem Grande do Rio Pardo|Varginha|Varj\xE3o de Minas|Varzel\xE2ndia|Vazante|Verdel\xE2ndia|Veredinha|Vermelho Novo|Ver\xEDssimo|Vespasiano|Vieiras|Virgem da Lapa|Virgin\xF3polis|Virgol\xE2ndia|Virg\xEDnia|Visconde do Rio Branco|Vi\xE7osa|Volta Grande|V\xE1rzea da Palma|Wenceslau Braz|\xC1gua Boa|\xC1gua Comprida|\xC1guas Formosas|\xC1guas Vermelhas",MS:"Alcin\xF3polis|Amambai|Anast\xE1cio|Anauril\xE2ndia|Ang\xE9lica|Ant\xF4nio Jo\xE3o|Aparecida do Taboado|Aquidauana|Aral Moreira|Bandeirantes|Bataguassu|Bataypor\xE3|Bela Vista|Bodoquena|Bonito|Brasil\xE2ndia|Caarap\xF3|Camapu\xE3|Campo Grande|Caracol|Cassil\xE2ndia|Chapad\xE3o do Sul|Corguinho|Coronel Sapucaia|Corumb\xE1|Costa Rica|Coxim|Deod\xE1polis|Dois Irm\xE3os do Buriti|Douradina|Dourados|Eldorado|Figueir\xE3o|F\xE1tima do Sul|Gl\xF3ria de Dourados|Guia Lopes da Laguna|Iguatemi|Inoc\xEAncia|Itapor\xE3|Itaquira\xED|Ivinhema|Japor\xE3|Jaraguari|Jardim|Jate\xED|Juti|Lad\xE1rio|Laguna Carap\xE3|Maracaju|Miranda|Mundo Novo|Navira\xED|Nioaque|Nova Alvorada do Sul|Nova Andradina|Novo Horizonte do Sul|Parana\xEDba|Paranhos|Para\xEDso das \xC1guas|Pedro Gomes|Ponta Por\xE3|Porto Murtinho|Ribas do Rio Pardo|Rio Brilhante|Rio Negro|Rio Verde de Mato Grosso|Rochedo|Santa Rita do Pardo|Selv\xEDria|Sete Quedas|Sidrol\xE2ndia|Sonora|S\xE3o Gabriel do Oeste|Tacuru|Taquarussu|Terenos|Tr\xEAs Lagoas|Vicentina|\xC1gua Clara",MT:"Acorizal|Alta Floresta|Alto Araguaia|Alto Boa Vista|Alto Gar\xE7as|Alto Paraguai|Alto Taquari|Apiac\xE1s|Araguaiana|Araguainha|Araputanga|Aren\xE1polis|Aripuan\xE3|Barra do Bugres|Barra do Gar\xE7as|Bar\xE3o de Melga\xE7o|Boa Esperan\xE7a do Norte|Bom Jesus do Araguaia|Brasnorte|Campin\xE1polis|Campo Novo do Parecis|Campo Verde|Campos de J\xFAlio|Canabrava do Norte|Canarana|Carlinda|Castanheira|Chapada dos Guimar\xE3es|Cl\xE1udia|Cocalinho|Colniza|Col\xEDder|Comodoro|Confresa|Conquista D'Oeste|Cotrigua\xE7u|Cuiab\xE1|Curvel\xE2ndia|C\xE1ceres|Denise|Diamantino|Dom Aquino|Feliz Natal|Figueir\xF3polis D'Oeste|Ga\xFAcha do Norte|General Carneiro|Gl\xF3ria D'Oeste|Guarant\xE3 do Norte|Guiratinga|Indiava\xED|Ipiranga do Norte|Itanhang\xE1|Ita\xFAba|Itiquira|Jaciara|Jangada|Jauru|Juara|Juruena|Juscimeira|Ju\xEDna|Lambari D'Oeste|Lucas do Rio Verde|Luciara|Marcel\xE2ndia|Matup\xE1|Mirassol d'Oeste|Nobres|Nortel\xE2ndia|Nossa Senhora do Livramento|Nova Bandeirantes|Nova Brasil\xE2ndia|Nova Cana\xE3 do Norte|Nova Guarita|Nova Lacerda|Nova Maril\xE2ndia|Nova Maring\xE1|Nova Monte Verde|Nova Mutum|Nova Nazar\xE9|Nova Ol\xEDmpia|Nova Santa Helena|Nova Ubirat\xE3|Nova Xavantina|Novo Horizonte do Norte|Novo Mundo|Novo Santo Ant\xF4nio|Novo S\xE3o Joaquim|Paranatinga|Parana\xEDta|Pedra Preta|Peixoto de Azevedo|Planalto da Serra|Pocon\xE9|Pontal do Araguaia|Ponte Branca|Pontes e Lacerda|Porto Alegre do Norte|Porto dos Ga\xFAchos|Porto Esperidi\xE3o|Porto Estrela|Poxor\xE9u|Primavera do Leste|Quer\xEAncia|Reserva do Caba\xE7al|Ribeir\xE3o Cascalheira|Ribeir\xE3ozinho|Rio Branco|Rondol\xE2ndia|Rondon\xF3polis|Ros\xE1rio Oeste|Salto do C\xE9u|Santa Carmem|Santa Cruz do Xingu|Santa Rita do Trivelato|Santa Terezinha|Santo Afonso|Santo Ant\xF4nio de Leverger|Santo Ant\xF4nio do Leste|Sapezal|Serra Nova Dourada|Sinop|Sorriso|S\xE3o F\xE9lix do Araguaia|S\xE3o Jos\xE9 do Povo|S\xE3o Jos\xE9 do Rio Claro|S\xE3o Jos\xE9 do Xingu|S\xE3o Jos\xE9 dos Quatro Marcos|S\xE3o Pedro da Cipa|Tabapor\xE3|Tangar\xE1 da Serra|Tapurah|Terra Nova do Norte|Tesouro|Torixor\xE9u|Uni\xE3o do Sul|Vale de S\xE3o Domingos|Vera|Vila Bela da Sant\xEDssima Trindade|Vila Rica|V\xE1rzea Grande|\xC1gua Boa",PA:"Abaetetuba|Abel Figueiredo|Acar\xE1|Afu\xE1|Alenquer|Almeirim|Altamira|Anaj\xE1s|Ananindeua|Anapu|Augusto Corr\xEAa|Aurora do Par\xE1|Aveiro|Bagre|Bai\xE3o|Bannach|Barcarena|Belterra|Bel\xE9m|Benevides|Bom Jesus do Tocantins|Bonito|Bragan\xE7a|Brasil Novo|Brejo Grande do Araguaia|Breu Branco|Breves|Bujaru|Cachoeira do Arari|Cachoeira do Piri\xE1|Camet\xE1|Cana\xE3 dos Caraj\xE1s|Capanema|Capit\xE3o Po\xE7o|Castanhal|Chaves|Colares|Concei\xE7\xE3o do Araguaia|Conc\xF3rdia do Par\xE1|Cumaru do Norte|Curion\xF3polis|Curralinho|Curu\xE1|Curu\xE7\xE1|Dom Eliseu|Eldorado do Caraj\xE1s|Faro|Floresta do Araguaia|Garraf\xE3o do Norte|Goian\xE9sia do Par\xE1|Gurup\xE1|Igarap\xE9-A\xE7u|Igarap\xE9-Miri|Inhangapi|Ipixuna do Par\xE1|Irituia|Itaituba|Itupiranga|Jacareacanga|Jacund\xE1|Juruti|Limoeiro do Ajuru|Magalh\xE3es Barata|Marab\xE1|Maracan\xE3|Marapanim|Marituba|Medicil\xE2ndia|Melga\xE7o|Mocajuba|Moju|Moju\xED dos Campos|Monte Alegre|Muan\xE1|M\xE3e do Rio|Nova Esperan\xE7a do Piri\xE1|Nova Ipixuna|Nova Timboteua|Novo Progresso|Novo Repartimento|Oeiras do Par\xE1|Oriximin\xE1|Ouril\xE2ndia do Norte|Our\xE9m|Pacaj\xE1|Palestina do Par\xE1|Paragominas|Parauapebas|Pau D'Arco|Peixe-Boi|Pi\xE7arra|Placas|Ponta de Pedras|Portel|Porto de Moz|Prainha|Primavera|Quatipuru|Reden\xE7\xE3o|Rio Maria|Rondon do Par\xE1|Rur\xF3polis|Salin\xF3polis|Salvaterra|Santa B\xE1rbara do Par\xE1|Santa Cruz do Arari|Santa Izabel do Par\xE1|Santa Luzia do Par\xE1|Santa Maria das Barreiras|Santa Maria do Par\xE1|Santana do Araguaia|Santar\xE9m|Santar\xE9m Novo|Santo Ant\xF4nio do Tau\xE1|Sapucaia|Senador Jos\xE9 Porf\xEDrio|Soure|S\xE3o Caetano de Odivelas|S\xE3o Domingos do Araguaia|S\xE3o Domingos do Capim|S\xE3o Francisco do Par\xE1|S\xE3o F\xE9lix do Xingu|S\xE3o Geraldo do Araguaia|S\xE3o Jo\xE3o da Ponta|S\xE3o Jo\xE3o de Pirabas|S\xE3o Jo\xE3o do Araguaia|S\xE3o Miguel do Guam\xE1|S\xE3o Sebasti\xE3o da Boa Vista|Tail\xE2ndia|Terra Alta|Terra Santa|Tom\xE9-A\xE7u|Tracuateua|Trair\xE3o|Tucum\xE3|Tucuru\xED|Ulian\xF3polis|Uruar\xE1|Vigia|Viseu|Vit\xF3ria do Xingu|Xinguara|\xC1gua Azul do Norte|\xD3bidos",PB:"Aguiar|Alagoa Grande|Alagoa Nova|Alagoinha|Alcantil|Algod\xE3o de Janda\xEDra|Alhandra|Amparo|Aparecida|Arara|Araruna|Ara\xE7agi|Areia|Areia de Bara\xFAnas|Areial|Aroeiras|Assun\xE7\xE3o|Bananeiras|Bara\xFAna|Barra de Santa Rosa|Barra de Santana|Barra de S\xE3o Miguel|Bayeux|Ba\xEDa da Trai\xE7\xE3o|Bel\xE9m|Bel\xE9m do Brejo do Cruz|Bernardino Batista|Boa Ventura|Boa Vista|Bom Jesus|Bom Sucesso|Bonito de Santa F\xE9|Boqueir\xE3o|Borborema|Brejo do Cruz|Brejo dos Santos|Caapor\xE3|Cabaceiras|Cabedelo|Cachoeira dos \xCDndios|Cacimba de Areia|Cacimba de Dentro|Cacimbas|Cai\xE7ara|Cajazeiras|Cajazeirinhas|Caldas Brand\xE3o|Camala\xFA|Campina Grande|Capim|Cara\xFAbas|Carrapateira|Casserengue|Catingueira|Catol\xE9 do Rocha|Caturit\xE9|Concei\xE7\xE3o|Condado|Conde|Congo|Coremas|Coxixola|Cruz do Esp\xEDrito Santo|Cubati|Cuitegi|Cuit\xE9|Cuit\xE9 de Mamanguape|Curral de Cima|Curral Velho|Dami\xE3o|Desterro|Diamante|Dona In\xEAs|Duas Estradas|Emas|Esperan\xE7a|Fagundes|Frei Martinho|Gado Bravo|Guarabira|Gurinh\xE9m|Gurj\xE3o|Ibiara|Igaracy|Imaculada|Ing\xE1|Itabaiana|Itaporanga|Itapororoca|Itatuba|Jacara\xFA|Jeric\xF3|Joca Claudino|Jo\xE3o Pessoa|Juarez T\xE1vora|Juazeirinho|Junco do Serid\xF3|Juripiranga|Juru|Lagoa|Lagoa de Dentro|Lagoa Seca|Lastro|Livramento|Logradouro|Lucena|Malta|Mamanguape|Mana\xEDra|Marca\xE7\xE3o|Mari|Mariz\xF3polis|Massaranduba|Mataraca|Matinhas|Mato Grosso|Matur\xE9ia|Mogeiro|Montadas|Monte Horebe|Monteiro|Mulungu|M\xE3e d'\xC1gua|Natuba|Nazarezinho|Nova Floresta|Nova Olinda|Nova Palmeira|Olho d'\xC1gua|Olivedos|Ouro Velho|Parari|Passagem|Patos|Paulista|Pedra Branca|Pedra Lavrada|Pedras de Fogo|Pedro R\xE9gis|Pianc\xF3|Picu\xED|Pilar|Pil\xF5es|Pil\xF5ezinhos|Pirpirituba|Pitimbu|Pocinhos|Pombal|Po\xE7o Dantas|Po\xE7o de Jos\xE9 de Moura|Prata|Princesa Isabel|Puxinan\xE3|Queimadas|Quixaba|Rem\xEDgio|Riacho de Santo Ant\xF4nio|Riacho dos Cavalos|Riach\xE3o|Riach\xE3o do Bacamarte|Riach\xE3o do Po\xE7o|Rio Tinto|Salgadinho|Salgado de S\xE3o F\xE9lix|Santa Cec\xEDlia|Santa Cruz|Santa Helena|Santa In\xEAs|Santa Luzia|Santa Rita|Santa Teresinha|Santana de Mangueira|Santana dos Garrotes|Santo Andr\xE9|Sap\xE9|Serra Branca|Serra da Raiz|Serra Grande|Serra Redonda|Serraria|Sert\xE3ozinho|Sobrado|Soledade|Sol\xE2nea|Soss\xEAgo|Sousa|Sum\xE9|S\xE3o Bentinho|S\xE3o Bento|S\xE3o Domingos|S\xE3o Domingos do Cariri|S\xE3o Francisco|S\xE3o Jos\xE9 da Lagoa Tapada|S\xE3o Jos\xE9 de Caiana|S\xE3o Jos\xE9 de Espinharas|S\xE3o Jos\xE9 de Piranhas|S\xE3o Jos\xE9 de Princesa|S\xE3o Jos\xE9 do Bonfim|S\xE3o Jos\xE9 do Brejo do Cruz|S\xE3o Jos\xE9 do Sabugi|S\xE3o Jos\xE9 dos Cordeiros|S\xE3o Jos\xE9 dos Ramos|S\xE3o Jo\xE3o do Cariri|S\xE3o Jo\xE3o do Rio do Peixe|S\xE3o Jo\xE3o do Tigre|S\xE3o Mamede|S\xE3o Miguel de Taipu|S\xE3o Sebasti\xE3o de Lagoa de Ro\xE7a|S\xE3o Sebasti\xE3o do Umbuzeiro|S\xE3o Vicente do Serid\xF3|Tacima|Tapero\xE1|Tavares|Teixeira|Ten\xF3rio|Triunfo|Uira\xFAna|Umbuzeiro|Vieir\xF3polis|Vista Serrana|V\xE1rzea|Zabel\xEA|\xC1gua Branca",PE:"Abreu e Lima|Afogados da Ingazeira|Afr\xE2nio|Agrestina|Alagoinha|Alian\xE7a|Altinho|Amaraji|Angelim|Araripina|Ara\xE7oiaba|Arcoverde|Barra de Guabiraba|Barreiros|Belo Jardim|Bel\xE9m de Maria|Bel\xE9m do S\xE3o Francisco|Bet\xE2nia|Bezerros|Bodoc\xF3|Bom Conselho|Bom Jardim|Bonito|Brejinho|Brejo da Madre de Deus|Brej\xE3o|Buenos Aires|Bu\xEDque|Cabo de Santo Agostinho|Cabrob\xF3|Cachoeirinha|Caet\xE9s|Calumbi|Cal\xE7ado|Camaragibe|Camocim de S\xE3o F\xE9lix|Camutanga|Canhotinho|Capoeiras|Carnaubeira da Penha|Carna\xEDba|Carpina|Caruaru|Casinhas|Catende|Cedro|Ch\xE3 de Alegria|Ch\xE3 Grande|Condado|Correntes|Cort\xEAs|Cumaru|Cupira|Cust\xF3dia|Dormentes|Escada|Exu|Feira Nova|Fernando de Noronha|Ferreiros|Flores|Floresta|Frei Miguelinho|Gameleira|Garanhuns|Gl\xF3ria do Goit\xE1|Goiana|Granito|Gravat\xE1|Iati|Ibimirim|Ibirajuba|Igarassu|Iguaracy|Ilha de Itamarac\xE1|Inaj\xE1|Ingazeira|Ipojuca|Ipubi|Itacuruba|Itamb\xE9|Itapetim|Itapissuma|Itaquitinga|Ita\xEDba|Jaboat\xE3o dos Guararapes|Jaqueira|Jata\xFAba|Jatob\xE1|Joaquim Nabuco|Jo\xE3o Alfredo|Jucati|Jupi|Jurema|Lagoa de Itaenga|Lagoa do Carro|Lagoa do Ouro|Lagoa dos Gatos|Lagoa Grande|Lajedo|Limoeiro|Macaparana|Machados|Manari|Maraial|Mirandiba|Moreil\xE2ndia|Moreno|Nazar\xE9 da Mata|Olinda|Orob\xF3|Oroc\xF3|Ouricuri|Palmares|Palmeirina|Panelas|Paranatama|Parnamirim|Passira|Paudalho|Paulista|Pedra|Pesqueira|Petrolina|Petrol\xE2ndia|Pombos|Po\xE7\xE3o|Primavera|Quipap\xE1|Quixaba|Recife|Riacho das Almas|Ribeir\xE3o|Rio Formoso|Sair\xE9|Salgadinho|Salgueiro|Salo\xE1|Sanhar\xF3|Santa Cruz|Santa Cruz da Baixa Verde|Santa Cruz do Capibaribe|Santa Filomena|Santa Maria da Boa Vista|Santa Maria do Cambuc\xE1|Santa Terezinha|Serra Talhada|Serrita|Sert\xE2nia|Sirinha\xE9m|Solid\xE3o|Surubim|S\xE3o Benedito do Sul|S\xE3o Bento do Una|S\xE3o Caitano|S\xE3o Joaquim do Monte|S\xE3o Jos\xE9 da Coroa Grande|S\xE3o Jos\xE9 do Belmonte|S\xE3o Jos\xE9 do Egito|S\xE3o Jo\xE3o|S\xE3o Louren\xE7o da Mata|S\xE3o Vicente F\xE9rrer|Tabira|Tacaimb\xF3|Tacaratu|Tamandar\xE9|Taquaritinga do Norte|Terezinha|Terra Nova|Timba\xFAba|Toritama|Tracunha\xE9m|Trindade|Triunfo|Tupanatinga|Tuparetama|Venturosa|Verdejante|Vertente do L\xE9rio|Vertentes|Vic\xEAncia|Vit\xF3ria de Santo Ant\xE3o|Xex\xE9u|\xC1gua Preta|\xC1guas Belas",PI:"Acau\xE3|Agricol\xE2ndia|Alagoinha do Piau\xED|Alegrete do Piau\xED|Alto Long\xE1|Altos|Alvorada do Gurgu\xE9ia|Amarante|Angical do Piau\xED|Ant\xF4nio Almeida|An\xEDsio de Abreu|Aroazes|Aroeiras do Itaim|Arraial|Assun\xE7\xE3o do Piau\xED|Avelino Lopes|Baixa Grande do Ribeiro|Barra D'Alc\xE2ntara|Barras|Barreiras do Piau\xED|Barro Duro|Batalha|Bela Vista do Piau\xED|Bel\xE9m do Piau\xED|Beneditinos|Bertol\xEDnia|Bet\xE2nia do Piau\xED|Boa Hora|Bocaina|Bom Jesus|Bom Princ\xEDpio do Piau\xED|Bonfim do Piau\xED|Boqueir\xE3o do Piau\xED|Brasileira|Brejo do Piau\xED|Buriti dos Lopes|Buriti dos Montes|Cabeceiras do Piau\xED|Cajazeiras do Piau\xED|Cajueiro da Praia|Caldeir\xE3o Grande do Piau\xED|Campinas do Piau\xED|Campo Alegre do Fidalgo|Campo Grande do Piau\xED|Campo Largo do Piau\xED|Campo Maior|Canavieira|Canto do Buriti|Capit\xE3o de Campos|Capit\xE3o Gerv\xE1sio Oliveira|Caracol|Cara\xFAbas do Piau\xED|Caridade do Piau\xED|Castelo do Piau\xED|Caxing\xF3|Cocal|Cocal de Telha|Cocal dos Alves|Coivaras|Col\xF4nia do Gurgu\xE9ia|Col\xF4nia do Piau\xED|Concei\xE7\xE3o do Canind\xE9|Coronel Jos\xE9 Dias|Corrente|Cristal\xE2ndia do Piau\xED|Cristino Castro|Curimat\xE1|Currais|Curral Novo do Piau\xED|Curralinhos|Demerval Lob\xE3o|Dirceu Arcoverde|Dom Expedito Lopes|Dom Inoc\xEAncio|Domingos Mour\xE3o|Elesb\xE3o Veloso|Eliseu Martins|Esperantina|Fartura do Piau\xED|Flores do Piau\xED|Floresta do Piau\xED|Floriano|Francin\xF3polis|Francisco Ayres|Francisco Macedo|Francisco Santos|Fronteiras|Geminiano|Gilbu\xE9s|Guadalupe|Guaribas|Hugo Napole\xE3o|Ilha Grande|Inhuma|Ipiranga do Piau\xED|Isa\xEDas Coelho|Itain\xF3polis|Itaueira|Jacobina do Piau\xED|Jaic\xF3s|Jardim do Mulato|Jatob\xE1 do Piau\xED|Jerumenha|Joaquim Pires|Joca Marques|Jos\xE9 de Freitas|Jo\xE3o Costa|Juazeiro do Piau\xED|Jurema|J\xFAlio Borges|Lagoa Alegre|Lagoa de S\xE3o Francisco|Lagoa do Barro do Piau\xED|Lagoa do Piau\xED|Lagoa do S\xEDtio|Lagoinha do Piau\xED|Landri Sales|Luzil\xE2ndia|Lu\xEDs Correia|Madeiro|Manoel Em\xEDdio|Marcol\xE2ndia|Marcos Parente|Massap\xEA do Piau\xED|Matias Ol\xEDmpio|Miguel Alves|Miguel Le\xE3o|Milton Brand\xE3o|Monsenhor Gil|Monsenhor Hip\xF3lito|Monte Alegre do Piau\xED|Morro Cabe\xE7a no Tempo|Morro do Chap\xE9u do Piau\xED|Murici dos Portelas|Nazar\xE9 do Piau\xED|Naz\xE1ria|Nossa Senhora de Nazar\xE9|Nossa Senhora dos Rem\xE9dios|Nova Santa Rita|Novo Oriente do Piau\xED|Novo Santo Ant\xF4nio|Oeiras|Olho D'\xC1gua do Piau\xED|Padre Marcos|Paes Landim|Paje\xFA do Piau\xED|Palmeira do Piau\xED|Palmeirais|Paquet\xE1|Parnagu\xE1|Parna\xEDba|Passagem Franca do Piau\xED|Patos do Piau\xED|Pau D'Arco do Piau\xED|Paulistana|Pavussu|Pedro II|Pedro Laurentino|Picos|Pimenteiras|Pio IX|Piracuruca|Piripiri|Porto|Porto Alegre do Piau\xED|Prata do Piau\xED|Queimada Nova|Reden\xE7\xE3o do Gurgu\xE9ia|Regenera\xE7\xE3o|Riacho Frio|Ribeira do Piau\xED|Ribeiro Gon\xE7alves|Rio Grande do Piau\xED|Santa Cruz do Piau\xED|Santa Cruz dos Milagres|Santa Filomena|Santa Luz|Santa Rosa do Piau\xED|Santana do Piau\xED|Santo Ant\xF4nio de Lisboa|Santo Ant\xF4nio dos Milagres|Santo In\xE1cio do Piau\xED|Sebasti\xE3o Barros|Sebasti\xE3o Leal|Sigefredo Pacheco|Simpl\xEDcio Mendes|Sim\xF5es|Socorro do Piau\xED|Sussuapara|S\xE3o Braz do Piau\xED|S\xE3o Francisco de Assis do Piau\xED|S\xE3o Francisco do Piau\xED|S\xE3o F\xE9lix do Piau\xED|S\xE3o Gon\xE7alo do Gurgu\xE9ia|S\xE3o Gon\xE7alo do Piau\xED|S\xE3o Jos\xE9 do Divino|S\xE3o Jos\xE9 do Peixe|S\xE3o Jos\xE9 do Piau\xED|S\xE3o Jo\xE3o da Canabrava|S\xE3o Jo\xE3o da Fronteira|S\xE3o Jo\xE3o da Serra|S\xE3o Jo\xE3o da Varjota|S\xE3o Jo\xE3o do Arraial|S\xE3o Jo\xE3o do Piau\xED|S\xE3o Juli\xE3o|S\xE3o Louren\xE7o do Piau\xED|S\xE3o Luis do Piau\xED|S\xE3o Miguel da Baixa Grande|S\xE3o Miguel do Fidalgo|S\xE3o Miguel do Tapuio|S\xE3o Pedro do Piau\xED|S\xE3o Raimundo Nonato|Tamboril do Piau\xED|Tanque do Piau\xED|Teresina|Uni\xE3o|Uru\xE7u\xED|Valen\xE7a do Piau\xED|Vera Mendes|Vila Nova do Piau\xED|V\xE1rzea Branca|V\xE1rzea Grande|Wall Ferraz|\xC1gua Branca",PR:"Abati\xE1|Adrian\xF3polis|Agudos do Sul|Almirante Tamandar\xE9|Altamira do Paran\xE1|Alto Paran\xE1|Alto Para\xEDso|Alto Piquiri|Alt\xF4nia|Alvorada do Sul|Amapor\xE3|Amp\xE9re|Anahy|Andir\xE1|Antonina|Ant\xF4nio Olinto|Apucarana|Arapongas|Arapoti|Arapu\xE3|Araruna|Arauc\xE1ria|Ariranha do Iva\xED|Assa\xED|Assis Chateaubriand|Astorga|Atalaia|Balsa Nova|Bandeirantes|Barbosa Ferraz|Barra do Jacar\xE9|Barrac\xE3o|Bela Vista da Caroba|Bela Vista do Para\xEDso|Bituruna|Boa Esperan\xE7a|Boa Esperan\xE7a do Igua\xE7u|Boa Ventura de S\xE3o Roque|Boa Vista da Aparecida|Bocai\xFAva do Sul|Bom Jesus do Sul|Bom Sucesso|Bom Sucesso do Sul|Borraz\xF3polis|Braganey|Brasil\xE2ndia do Sul|Cafeara|Cafel\xE2ndia|Cafezal do Sul|Calif\xF3rnia|Cambar\xE1|Cambira|Camb\xE9|Campina da Lagoa|Campina do Sim\xE3o|Campina Grande do Sul|Campo Bonito|Campo do Tenente|Campo Largo|Campo Magro|Campo Mour\xE3o|Cand\xF3i|Cantagalo|Capanema|Capit\xE3o Le\xF4nidas Marques|Carambe\xED|Carl\xF3polis|Cascavel|Castro|Catanduvas|Centen\xE1rio do Sul|Cerro Azul|Chopinzinho|Cianorte|Cidade Ga\xFAcha|Clevel\xE2ndia|Colombo|Colorado|Congonhinhas|Conselheiro Mairinck|Contenda|Corb\xE9lia|Corn\xE9lio Proc\xF3pio|Coronel Domingos Soares|Coronel Vivida|Corumbata\xED do Sul|Cruz Machado|Cruzeiro do Igua\xE7u|Cruzeiro do Oeste|Cruzeiro do Sul|Cruzmaltina|Curitiba|Curi\xFAva|C\xE2ndido de Abreu|C\xE9u Azul|Diamante D'Oeste|Diamante do Norte|Diamante do Sul|Dois Vizinhos|Douradina|Doutor Camargo|Doutor Ulysses|Engenheiro Beltr\xE3o|Entre Rios do Oeste|En\xE9as Marques|Esperan\xE7a Nova|Espig\xE3o Alto do Igua\xE7u|Farol|Faxinal|Fazenda Rio Grande|Fernandes Pinheiro|Figueira|Flor da Serra do Sul|Flora\xED|Floresta|Florest\xF3polis|Fl\xF3rida|Formosa do Oeste|Foz do Igua\xE7u|Foz do Jord\xE3o|Francisco Alves|Francisco Beltr\xE3o|F\xEAnix|General Carneiro|Godoy Moreira|Goioer\xEA|Goioxim|Grandes Rios|Guaira\xE7\xE1|Guamiranga|Guapirama|Guaporema|Guaraci|Guarania\xE7u|Guarapuava|Guaraque\xE7aba|Guaratuba|Gua\xEDra|Hon\xF3rio Serpa|Ibaiti|Ibema|Ibipor\xE3|Icara\xEDma|Iguara\xE7u|Iguatu|Imba\xFA|Imbituva|Inaj\xE1|Indian\xF3polis|In\xE1cio Martins|Ipiranga|Ipor\xE3|Iracema do Oeste|Irati|Iretama|Itaguaj\xE9|Itaipul\xE2ndia|Itambarac\xE1|Itamb\xE9|Itapejara d'Oeste|Itaperu\xE7u|Ita\xFAna do Sul|Ivaipor\xE3|Ivatuba|Ivat\xE9|Iva\xED|Jaboti|Jacarezinho|Jaguapit\xE3|Jaguaria\xEDva|Jandaia do Sul|Jani\xF3polis|Japira|Japur\xE1|Jardim Alegre|Jardim Olinda|Jataizinho|Jesu\xEDtas|Joaquim T\xE1vora|Jundia\xED do Sul|Juranda|Jussara|Kalor\xE9|Lapa|Laranjal|Laranjeiras do Sul|Le\xF3polis|Lidian\xF3polis|Lindoeste|Loanda|Lobato|Londrina|Luiziana|Lunardelli|Lupion\xF3polis|Mallet|Mambor\xEA|Mandaguari|Mandagua\xE7u|Mandirituba|Manfrin\xF3polis|Mangueirinha|Manoel Ribas|Marechal C\xE2ndido Rondon|Maria Helena|Marialva|Marilena|Mariluz|Maril\xE2ndia do Sul|Maring\xE1|Marip\xE1|Mari\xF3polis|Marmeleiro|Marquinho|Marumbi|Matel\xE2ndia|Matinhos|Mato Rico|Mau\xE1 da Serra|Medianeira|Mercedes|Mirador|Miraselva|Missal|Moreira Sales|Morretes|Munhoz de Melo|Nossa Senhora das Gra\xE7as|Nova Alian\xE7a do Iva\xED|Nova Am\xE9rica da Colina|Nova Aurora|Nova Cantu|Nova Esperan\xE7a|Nova Esperan\xE7a do Sudoeste|Nova F\xE1tima|Nova Laranjeiras|Nova Londrina|Nova Ol\xEDmpia|Nova Prata do Igua\xE7u|Nova Santa B\xE1rbara|Nova Santa Rosa|Nova Tebas|Novo Itacolomi|Ortigueira|Ourizona|Ouro Verde do Oeste|Pai\xE7andu|Palmas|Palmeira|Palmital|Palotina|Paranacity|Paranagu\xE1|Paranapoema|Paranava\xED|Para\xEDso do Norte|Pato Bragado|Pato Branco|Paula Freitas|Paulo Frontin|Peabiru|Perobal|Pinhais|Pinhal de S\xE3o Bento|Pinhal\xE3o|Pinh\xE3o|Piraquara|Pira\xED do Sul|Pitanga|Pitangueiras|Pi\xEAn|Planaltina do Paran\xE1|Planalto|Ponta Grossa|Pontal do Paran\xE1|Porecatu|Porto Amazonas|Porto Barreiro|Porto Rico|Porto Vit\xF3ria|Prado Ferreira|Pranchita|Presidente Castelo Branco|Primeiro de Maio|Prudent\xF3polis|P\xE9rola|P\xE9rola d'Oeste|Quarto Centen\xE1rio|Quatigu\xE1|Quatro Barras|Quatro Pontes|Quedas do Igua\xE7u|Quer\xEAncia do Norte|Quinta do Sol|Quitandinha|Ramil\xE2ndia|Rancho Alegre|Rancho Alegre D'Oeste|Realeza|Rebou\xE7as|Renascen\xE7a|Reserva|Reserva do Igua\xE7u|Ribeir\xE3o Claro|Ribeir\xE3o do Pinhal|Rio Azul|Rio Bom|Rio Bonito do Igua\xE7u|Rio Branco do Iva\xED|Rio Branco do Sul|Rio Negro|Rol\xE2ndia|Roncador|Rondon|Ros\xE1rio do Iva\xED|Sab\xE1udia|Salgado Filho|Salto do Itarar\xE9|Salto do Lontra|Santa Am\xE9lia|Santa Cec\xEDlia do Pav\xE3o|Santa Cruz de Monte Castelo|Santa F\xE9|Santa Helena|Santa In\xEAs|Santa Isabel do Iva\xED|Santa Izabel do Oeste|Santa L\xFAcia|Santa Maria do Oeste|Santa Mariana|Santa M\xF4nica|Santa Tereza do Oeste|Santa Terezinha de Itaipu|Santana do Itarar\xE9|Santo Ant\xF4nio da Platina|Santo Ant\xF4nio do Caiu\xE1|Santo Ant\xF4nio do Para\xEDso|Santo Ant\xF4nio do Sudoeste|Santo In\xE1cio|Sapopema|Sarandi|Saudade do Igua\xE7u|Seng\xE9s|Serran\xF3polis do Igua\xE7u|Sertaneja|Sertan\xF3polis|Siqueira Campos|Sulina|S\xE3o Carlos do Iva\xED|S\xE3o Jer\xF4nimo da Serra|S\xE3o Jorge d'Oeste|S\xE3o Jorge do Iva\xED|S\xE3o Jorge do Patroc\xEDnio|S\xE3o Jos\xE9 da Boa Vista|S\xE3o Jos\xE9 das Palmeiras|S\xE3o Jos\xE9 dos Pinhais|S\xE3o Jo\xE3o|S\xE3o Jo\xE3o do Caiu\xE1|S\xE3o Jo\xE3o do Iva\xED|S\xE3o Jo\xE3o do Triunfo|S\xE3o Manoel do Paran\xE1|S\xE3o Mateus do Sul|S\xE3o Miguel do Igua\xE7u|S\xE3o Pedro do Igua\xE7u|S\xE3o Pedro do Iva\xED|S\xE3o Pedro do Paran\xE1|S\xE3o Sebasti\xE3o da Amoreira|S\xE3o Tom\xE9|Tamarana|Tamboara|Tapejara|Tapira|Teixeira Soares|Tel\xEAmaco Borba|Terra Boa|Terra Rica|Terra Roxa|Tibagi|Tijucas do Sul|Toledo|Tomazina|Tr\xEAs Barras do Paran\xE1|Tunas do Paran\xE1|Tuneiras do Oeste|Tup\xE3ssi|Turvo|Ubirat\xE3|Umuarama|Uniflor|Uni\xE3o da Vit\xF3ria|Ura\xED|Ventania|Vera Cruz do Oeste|Ver\xEA|Virmond|Vitorino|Wenceslau Braz|Xambr\xEA|\xC2ngulo",RJ:"Angra dos Reis|Aperib\xE9|Araruama|Areal|Arma\xE7\xE3o dos B\xFAzios|Arraial do Cabo|Barra do Pira\xED|Barra Mansa|Belford Roxo|Bom Jardim|Bom Jesus do Itabapoana|Cabo Frio|Cachoeiras de Macacu|Cambuci|Campos dos Goytacazes|Cantagalo|Carapebus|Cardoso Moreira|Carmo|Casimiro de Abreu|Comendador Levy Gasparian|Concei\xE7\xE3o de Macabu|Cordeiro|Duas Barras|Duque de Caxias|Engenheiro Paulo de Frontin|Guapimirim|Iguaba Grande|Itabora\xED|Itagua\xED|Italva|Itaocara|Itaperuna|Itatiaia|Japeri|Laje do Muria\xE9|Maca\xE9|Macuco|Mag\xE9|Mangaratiba|Maric\xE1|Mendes|Mesquita|Miguel Pereira|Miracema|Natividade|Nil\xF3polis|Niter\xF3i|Nova Friburgo|Nova Igua\xE7u|Paracambi|Paraty|Para\xEDba do Sul|Paty do Alferes|Petr\xF3polis|Pinheiral|Pira\xED|Porci\xFAncula|Porto Real|Quatis|Queimados|Quissam\xE3|Resende|Rio Bonito|Rio Claro|Rio das Flores|Rio das Ostras|Rio de Janeiro|Santa Maria Madalena|Santo Ant\xF4nio de P\xE1dua|Sapucaia|Saquarema|Serop\xE9dica|Silva Jardim|Sumidouro|S\xE3o Fid\xE9lis|S\xE3o Francisco de Itabapoana|S\xE3o Gon\xE7alo|S\xE3o Jos\xE9 de Ub\xE1|S\xE3o Jos\xE9 do Vale do Rio Preto|S\xE3o Jo\xE3o da Barra|S\xE3o Jo\xE3o de Meriti|S\xE3o Pedro da Aldeia|S\xE3o Sebasti\xE3o do Alto|Tangu\xE1|Teres\xF3polis|Trajano de Moraes|Tr\xEAs Rios|Valen\xE7a|Varre-Sai|Vassouras|Volta Redonda",RN:"Acari|Afonso Bezerra|Alexandria|Almino Afonso|Alto do Rodrigues|Angicos|Ant\xF4nio Martins|Apodi|Areia Branca|Arez|Ass\xFA|Bara\xFAna|Barcelona|Ba\xEDa Formosa|Bento Fernandes|Bod\xF3|Bom Jesus|Brejinho|Caic\xF3|Cai\xE7ara do Norte|Cai\xE7ara do Rio do Vento|Campo Grande|Campo Redondo|Canguaretama|Cara\xFAbas|Carnaubais|Carna\xFAba dos Dantas|Cear\xE1-Mirim|Cerro Cor\xE1|Coronel Ezequiel|Coronel Jo\xE3o Pessoa|Cruzeta|Currais Novos|Doutor Severiano|Encanto|Equador|Esp\xEDrito Santo|Extremoz|Felipe Guerra|Fernando Pedroza|Flor\xE2nia|Francisco Dantas|Frutuoso Gomes|Galinhos|Goianinha|Governador Dix-Sept Rosado|Grossos|Guamar\xE9|Ielmo Marinho|Ipangua\xE7u|Ipueira|Itaj\xE1|Ita\xFA|Janda\xEDra|Jandu\xEDs|Janu\xE1rio Cicco|Japi|Jardim de Angicos|Jardim de Piranhas|Jardim do Serid\xF3|Ja\xE7an\xE3|Jos\xE9 da Penha|Jo\xE3o C\xE2mara|Jo\xE3o Dias|Jucurutu|Jundi\xE1|Lagoa d'Anta|Lagoa de Pedras|Lagoa de Velhos|Lagoa Nova|Lagoa Salgada|Lajes|Lajes Pintadas|Lucr\xE9cia|Lu\xEDs Gomes|Macau|Maca\xEDba|Major Sales|Marcelino Vieira|Martins|Maxaranguape|Messias Targino|Montanhas|Monte Alegre|Monte das Gameleiras|Mossor\xF3|Natal|Nova Cruz|N\xEDsia Floresta|Olho d'\xC1gua do Borges|Ouro Branco|Paran\xE1|Parazinho|Para\xFA|Parelhas|Parnamirim|Passa e Fica|Passagem|Patu|Pau dos Ferros|Pedra Grande|Pedra Preta|Pedro Avelino|Pedro Velho|Pend\xEAncias|Pil\xF5es|Portalegre|Porto do Mangue|Po\xE7o Branco|Pureza|Rafael Fernandes|Rafael Godeiro|Riacho da Cruz|Riacho de Santana|Riachuelo|Rio do Fogo|Rodolfo Fernandes|Ruy Barbosa|Santa Cruz|Santa Maria|Santana do Matos|Santana do Serid\xF3|Santo Ant\xF4nio|Senador El\xF3i de Souza|Senador Georgino Avelino|Serra Caiada|Serra de S\xE3o Bento|Serra do Mel|Serra Negra do Norte|Serrinha|Serrinha dos Pintos|Severiano Melo|S\xE3o Bento do Norte|S\xE3o Bento do Trair\xED|S\xE3o Fernando|S\xE3o Francisco do Oeste|S\xE3o Gon\xE7alo do Amarante|S\xE3o Jos\xE9 de Mipibu|S\xE3o Jos\xE9 do Campestre|S\xE3o Jos\xE9 do Serid\xF3|S\xE3o Jo\xE3o do Sabugi|S\xE3o Miguel|S\xE3o Miguel do Gostoso|S\xE3o Paulo do Potengi|S\xE3o Pedro|S\xE3o Rafael|S\xE3o Tom\xE9|S\xE3o Vicente|S\xEDtio Novo|Taboleiro Grande|Taipu|Tangar\xE1|Tenente Ananias|Tenente Laurentino Cruz|Tibau|Tibau do Sul|Timba\xFAba dos Batistas|Touros|Triunfo Potiguar|Umarizal|Upanema|Venha-Ver|Vera Cruz|Vila Flor|Vi\xE7osa|V\xE1rzea|\xC1gua Nova",RO:"Alta Floresta D'Oeste|Alto Alegre dos Parecis|Alto Para\xEDso|Alvorada D'Oeste|Ariquemes|Buritis|Cabixi|Cacaul\xE2ndia|Cacoal|Campo Novo de Rond\xF4nia|Candeias do Jamari|Castanheiras|Cerejeiras|Chupinguaia|Colorado do Oeste|Corumbiara|Costa Marques|Cujubim|Espig\xE3o D'Oeste|Governador Jorge Teixeira|Guajar\xE1-Mirim|Itapu\xE3 do Oeste|Jaru|Ji-Paran\xE1|Machadinho D'Oeste|Ministro Andreazza|Mirante da Serra|Monte Negro|Nova Brasil\xE2ndia D'Oeste|Nova Mamor\xE9|Nova Uni\xE3o|Novo Horizonte do Oeste|Ouro Preto do Oeste|Parecis|Pimenta Bueno|Pimenteiras do Oeste|Porto Velho|Presidente M\xE9dici|Primavera de Rond\xF4nia|Rio Crespo|Rolim de Moura|Santa Luzia D'Oeste|Seringueiras|S\xE3o Felipe D'Oeste|S\xE3o Francisco do Guapor\xE9|S\xE3o Miguel do Guapor\xE9|Teixeir\xF3polis|Theobroma|Urup\xE1|Vale do Anari|Vale do Para\xEDso|Vilhena",RR:"Alto Alegre|Amajari|Boa Vista|Bonfim|Cant\xE1|Caracara\xED|Caroebe|Iracema|Mucaja\xED|Normandia|Pacaraima|Rorain\xF3polis|S\xE3o Jo\xE3o da Baliza|S\xE3o Luiz do Anau\xE1|Uiramut\xE3",RS:"Acegu\xE1|Agudo|Ajuricaba|Alecrim|Alegrete|Alegria|Almirante Tamandar\xE9 do Sul|Alpestre|Alto Alegre|Alto Feliz|Alvorada|Amaral Ferrador|Ametista do Sul|Andr\xE9 da Rocha|Anta Gorda|Ant\xF4nio Prado|Arambar\xE9|Araric\xE1|Aratiba|Arroio do Meio|Arroio do Padre|Arroio do Sal|Arroio do Tigre|Arroio dos Ratos|Arroio Grande|Arvorezinha|Augusto Pestana|Bag\xE9|Balne\xE1rio Pinhal|Barra do Guarita|Barra do Quara\xED|Barra do Ribeiro|Barra do Rio Azul|Barra Funda|Barrac\xE3o|Barros Cassal|Bar\xE3o|Bar\xE3o de Cotegipe|Bar\xE3o do Triunfo|Benjamin Constant do Sul|Bento Gon\xE7alves|Boa Vista das Miss\xF5es|Boa Vista do Buric\xE1|Boa Vista do Cadeado|Boa Vista do Incra|Boa Vista do Sul|Bom Jesus|Bom Princ\xEDpio|Bom Progresso|Bom Retiro do Sul|Boqueir\xE3o do Le\xE3o|Bossoroca|Bozano|Braga|Brochier|Buti\xE1|Cacequi|Cachoeira do Sul|Cachoeirinha|Cacique Doble|Caibat\xE9|Cai\xE7ara|Camaqu\xE3|Camargo|Cambar\xE1 do Sul|Campestre da Serra|Campina das Miss\xF5es|Campinas do Sul|Campo Bom|Campo Novo|Campos Borges|Candel\xE1ria|Candiota|Canela|Cangu\xE7u|Canoas|Canudos do Vale|Capela de Santana|Capit\xE3o|Capivari do Sul|Cap\xE3o Bonito do Sul|Cap\xE3o da Canoa|Cap\xE3o do Cip\xF3|Cap\xE3o do Le\xE3o|Carazinho|Cara\xE1|Carlos Barbosa|Carlos Gomes|Casca|Caseiros|Catu\xEDpe|Caxias do Sul|Ca\xE7apava do Sul|Centen\xE1rio|Cerrito|Cerro Branco|Cerro Grande|Cerro Grande do Sul|Cerro Largo|Chapada|Charqueadas|Charrua|Chiapetta|Chuvisca|Chu\xED|Cidreira|Cir\xEDaco|Colinas|Colorado|Condor|Constantina|Coqueiro Baixo|Coqueiros do Sul|Coronel Barros|Coronel Bicaco|Coronel Pilar|Cotipor\xE3|Coxilha|Crissiumal|Cristal|Cristal do Sul|Cruz Alta|Cruzaltense|Cruzeiro do Sul|C\xE2ndido God\xF3i|David Canabarro|Derrubadas|Dezesseis de Novembro|Dilermando de Aguiar|Dois Irm\xE3os|Dois Irm\xE3os das Miss\xF5es|Dois Lajeados|Dom Feliciano|Dom Pedrito|Dom Pedro de Alc\xE2ntara|Dona Francisca|Doutor Maur\xEDcio Cardoso|Doutor Ricardo|Eldorado do Sul|Encantado|Encruzilhada do Sul|Engenho Velho|Entre Rios do Sul|Entre-Iju\xEDs|Erebango|Erechim|Ernestina|Erval Grande|Erval Seco|Esmeralda|Esperan\xE7a do Sul|Espumoso|Esta\xE7\xE3o|Esteio|Estrela|Estrela Velha|Est\xE2ncia Velha|Eug\xEAnio de Castro|Fagundes Varela|Farroupilha|Faxinal do Soturno|Faxinalzinho|Fazenda Vilanova|Feliz|Flores da Cunha|Floriano Peixoto|Fontoura Xavier|Formigueiro|Forquetinha|Fortaleza dos Valos|Frederico Westphalen|Garibaldi|Garruchos|Gaurama|General C\xE2mara|Gentil|Get\xFAlio Vargas|Giru\xE1|Glorinha|Gramado|Gramado dos Loureiros|Gramado Xavier|Gravata\xED|Guabiju|Guapor\xE9|Guarani das Miss\xF5es|Gua\xEDba|Harmonia|Herval|Herveiras|Horizontina|Hulha Negra|Humait\xE1|Ibarama|Ibia\xE7\xE1|Ibiraiaras|Ibirapuit\xE3|Ibirub\xE1|Igrejinha|Iju\xED|Il\xF3polis|Imb\xE9|Imigrante|Independ\xEAncia|Inhacor\xE1|Ipiranga do Sul|Ip\xEA|Ira\xED|Itaara|Itacurubi|Itapuca|Itaqui|Itati|Itatiba do Sul|Ivor\xE1|Ivoti|Jaboticaba|Jacuizinho|Jacutinga|Jaguari|Jaguar\xE3o|Jaquirana|Jari|J\xF3ia|J\xFAlio de Castilhos|Lagoa Bonita do Sul|Lagoa dos Tr\xEAs Cantos|Lagoa Vermelha|Lago\xE3o|Lajeado|Lajeado do Bugre|Lavras do Sul|Liberato Salzano|Lindolfo Collor|Linha Nova|Machadinho|Mampituba|Manoel Viana|Maquin\xE9|Marat\xE1|Marau|Marcelino Ramos|Mariana Pimentel|Mariano Moro|Marques de Souza|Mata|Mato Castelhano|Mato Leit\xE3o|Mato Queimado|Maximiliano de Almeida|Ma\xE7ambar\xE1|Minas do Le\xE3o|Miragua\xED|Montauri|Monte Alegre dos Campos|Monte Belo do Sul|Montenegro|Morma\xE7o|Morrinhos do Sul|Morro Redondo|Morro Reuter|Mostardas|Muitos Cap\xF5es|Muliterno|Mu\xE7um|Nicolau Vergueiro|Nonoai|Nova Alvorada|Nova Ara\xE7\xE1|Nova Bassano|Nova Boa Vista|Nova Br\xE9scia|Nova Candel\xE1ria|Nova Esperan\xE7a do Sul|Nova Hartz|Nova Palma|Nova Petr\xF3polis|Nova Prata|Nova P\xE1dua|Nova Ramada|Nova Roma do Sul|Nova Santa Rita|Novo Barreiro|Novo Cabrais|Novo Hamburgo|Novo Machado|Novo Tiradentes|Novo Xingu|N\xE3o-Me-Toque|Os\xF3rio|Paim Filho|Palmares do Sul|Palmeira das Miss\xF5es|Palmitinho|Panambi|Pantano Grande|Para\xED|Para\xEDso do Sul|Pareci Novo|Parob\xE9|Passa Sete|Passo do Sobrado|Passo Fundo|Paulo Bento|Paverama|Pedras Altas|Pedro Os\xF3rio|Peju\xE7ara|Pelotas|Picada Caf\xE9|Pinhal|Pinhal da Serra|Pinhal Grande|Pinheirinho do Vale|Pinheiro Machado|Pinto Bandeira|Pirap\xF3|Piratini|Planalto|Ponte Preta|Pont\xE3o|Porto Alegre|Porto Lucena|Porto Mau\xE1|Porto Vera Cruz|Porto Xavier|Port\xE3o|Pouso Novo|Po\xE7o das Antas|Presidente Lucena|Progresso|Prot\xE1sio Alves|Putinga|Quara\xED|Quatro Irm\xE3os|Quevedos|Quinze de Novembro|Redentora|Relvado|Restinga S\xEAca|Rio dos \xCDndios|Rio Grande|Rio Pardo|Riozinho|Roca Sales|Rodeio Bonito|Rolador|Rolante|Ronda Alta|Rondinha|Roque Gonzales|Ros\xE1rio do Sul|Sagrada Fam\xEDlia|Saldanha Marinho|Salto do Jacu\xED|Salvador das Miss\xF5es|Salvador do Sul|Sananduva|Sant'Ana do Livramento|Santa B\xE1rbara do Sul|Santa Cec\xEDlia do Sul|Santa Clara do Sul|Santa Cruz do Sul|Santa Margarida do Sul|Santa Maria|Santa Maria do Herval|Santa Rosa|Santa Tereza|Santa Vit\xF3ria do Palmar|Santana da Boa Vista|Santiago|Santo Ant\xF4nio da Patrulha|Santo Ant\xF4nio das Miss\xF5es|Santo Ant\xF4nio do Palma|Santo Ant\xF4nio do Planalto|Santo Augusto|Santo Cristo|Santo Expedito do Sul|Santo \xC2ngelo|Sapiranga|Sapucaia do Sul|Sarandi|Seberi|Sede Nova|Segredo|Selbach|Senador Salgado Filho|Sentinela do Sul|Serafina Corr\xEAa|Sert\xE3o|Sert\xE3o Santana|Sete de Setembro|Severiano de Almeida|Silveira Martins|Sinimbu|Sobradinho|Soledade|S\xE3o Borja|S\xE3o Domingos do Sul|S\xE3o Francisco de Assis|S\xE3o Francisco de Paula|S\xE3o Gabriel|S\xE3o Jer\xF4nimo|S\xE3o Jorge|S\xE3o Jos\xE9 das Miss\xF5es|S\xE3o Jos\xE9 do Herval|S\xE3o Jos\xE9 do Hort\xEAncio|S\xE3o Jos\xE9 do Inhacor\xE1|S\xE3o Jos\xE9 do Norte|S\xE3o Jos\xE9 do Ouro|S\xE3o Jos\xE9 do Sul|S\xE3o Jos\xE9 dos Ausentes|S\xE3o Jo\xE3o da Urtiga|S\xE3o Jo\xE3o do Pol\xEAsine|S\xE3o Leopoldo|S\xE3o Louren\xE7o do Sul|S\xE3o Luiz Gonzaga|S\xE3o Marcos|S\xE3o Martinho|S\xE3o Martinho da Serra|S\xE3o Miguel das Miss\xF5es|S\xE3o Nicolau|S\xE3o Paulo das Miss\xF5es|S\xE3o Pedro da Serra|S\xE3o Pedro das Miss\xF5es|S\xE3o Pedro do Buti\xE1|S\xE3o Pedro do Sul|S\xE3o Sebasti\xE3o do Ca\xED|S\xE3o Sep\xE9|S\xE3o Valentim|S\xE3o Valentim do Sul|S\xE3o Val\xE9rio do Sul|S\xE3o Vendelino|S\xE3o Vicente do Sul|S\xE9rio|Taba\xED|Tapejara|Tapera|Tapes|Taquara|Taquari|Taquaru\xE7u do Sul|Tavares|Tenente Portela|Terra de Areia|Teut\xF4nia|Tio Hugo|Tiradentes do Sul|Toropi|Torres|Tramanda\xED|Travesseiro|Trindade do Sul|Triunfo|Tr\xEAs Arroios|Tr\xEAs Cachoeiras|Tr\xEAs Coroas|Tr\xEAs de Maio|Tr\xEAs Forquilhas|Tr\xEAs Palmeiras|Tr\xEAs Passos|Tucunduva|Tunas|Tupanci do Sul|Tupanciret\xE3|Tupandi|Tuparendi|Turu\xE7u|Ubiretama|Unistalda|Uni\xE3o da Serra|Uruguaiana|Vacaria|Vale do Sol|Vale Real|Vale Verde|Vanini|Ven\xE2ncio Aires|Vera Cruz|Veran\xF3polis|Vespasiano Corr\xEAa|Viadutos|Viam\xE3o|Vicente Dutra|Victor Graeff|Vila Flores|Vila L\xE2ngaro|Vila Maria|Vila Nova do Sul|Vista Alegre|Vista Alegre do Prata|Vista Ga\xFAcha|Vit\xF3ria das Miss\xF5es|Westf\xE1lia|Xangri-l\xE1|\xC1gua Santa|\xC1urea",SC:"Abdon Batista|Abelardo Luz|Agrol\xE2ndia|Agron\xF4mica|Alfredo Wagner|Alto Bela Vista|Anchieta|Angelina|Anita Garibaldi|Anit\xE1polis|Ant\xF4nio Carlos|Api\xFAna|Arabut\xE3|Araquari|Ararangu\xE1|Armaz\xE9m|Arroio Trinta|Arvoredo|Ascurra|Atalanta|Aurora|Balne\xE1rio Arroio do Silva|Balne\xE1rio Barra do Sul|Balne\xE1rio Cambori\xFA|Balne\xE1rio Gaivota|Balne\xE1rio Pi\xE7arras|Balne\xE1rio Rinc\xE3o|Bandeirante|Barra Bonita|Barra Velha|Bela Vista do Toldo|Belmonte|Benedito Novo|Bigua\xE7u|Blumenau|Bocaina do Sul|Bom Jardim da Serra|Bom Jesus|Bom Jesus do Oeste|Bom Retiro|Bombinhas|Botuver\xE1|Bra\xE7o do Norte|Bra\xE7o do Trombudo|Brun\xF3polis|Brusque|Caibi|Calmon|Cambori\xFA|Campo Alegre|Campo Belo do Sul|Campo Er\xEA|Campos Novos|Canelinha|Canoinhas|Capinzal|Capivari de Baixo|Cap\xE3o Alto|Catanduvas|Caxambu do Sul|Ca\xE7ador|Celso Ramos|Cerro Negro|Chapad\xE3o do Lageado|Chapec\xF3|Cocal do Sul|Conc\xF3rdia|Cordilheira Alta|Coronel Freitas|Coronel Martins|Correia Pinto|Corup\xE1|Crici\xFAma|Cunha Por\xE3|Cunhata\xED|Curitibanos|Descanso|Dion\xEDsio Cerqueira|Dona Emma|Doutor Pedrinho|Entre Rios|Ermo|Erval Velho|Faxinal dos Guedes|Flor do Sert\xE3o|Florian\xF3polis|Formosa do Sul|Forquilhinha|Fraiburgo|Frei Rog\xE9rio|Galv\xE3o|Garopaba|Garuva|Gaspar|Governador Celso Ramos|Gravatal|Gr\xE3o-Par\xE1|Guabiruba|Guaraciaba|Guaramirim|Guaruj\xE1 do Sul|Guatamb\xFA|Herval d'Oeste|Ibiam|Ibicar\xE9|Ibirama|Ilhota|Imaru\xED|Imbituba|Imbuia|Indaial|Iomer\xEA|Ipira|Ipor\xE3 do Oeste|Ipua\xE7u|Ipumirim|Iraceminha|Irani|Irati|Irine\xF3polis|Itai\xF3polis|Itaja\xED|Itapema|Itapiranga|Itapo\xE1|Ituporanga|It\xE1|I\xE7ara|Jabor\xE1|Jacinto Machado|Jaguaruna|Jaragu\xE1 do Sul|Jardin\xF3polis|Joa\xE7aba|Joinville|Jos\xE9 Boiteux|Jupi\xE1|Lacerd\xF3polis|Lages|Laguna|Lajeado Grande|Laurentino|Lauro M\xFCller|Lebon R\xE9gis|Leoberto Leal|Lind\xF3ia do Sul|Lontras|Luiz Alves|Luzerna|Macieira|Mafra|Major Gercino|Major Vieira|Maracaj\xE1|Maravilha|Marema|Massaranduba|Matos Costa|Meleiro|Mirim Doce|Modelo|Monda\xED|Monte Carlo|Monte Castelo|Morro da Fuma\xE7a|Morro Grande|Navegantes|Nova Erechim|Nova Itaberaba|Nova Trento|Nova Veneza|Novo Horizonte|Orleans|Otac\xEDlio Costa|Ouro|Ouro Verde|Paial|Painel|Palho\xE7a|Palma Sola|Palmeira|Palmitos|Papanduva|Para\xEDso|Passo de Torres|Passos Maia|Paulo Lopes|Pedras Grandes|Penha|Peritiba|Pescaria Brava|Petrol\xE2ndia|Pinhalzinho|Pinheiro Preto|Piratuba|Planalto Alegre|Pomerode|Ponte Alta|Ponte Alta do Norte|Ponte Serrada|Porto Belo|Porto Uni\xE3o|Pouso Redondo|Praia Grande|Presidente Castello Branco|Presidente Get\xFAlio|Presidente Nereu|Princesa|Quilombo|Rancho Queimado|Rio das Antas|Rio do Campo|Rio do Oeste|Rio do Sul|Rio dos Cedros|Rio Fortuna|Rio Negrinho|Rio Rufino|Riqueza|Rodeio|Romel\xE2ndia|Salete|Saltinho|Salto Veloso|Sang\xE3o|Santa Cec\xEDlia|Santa Helena|Santa Rosa de Lima|Santa Rosa do Sul|Santa Terezinha|Santa Terezinha do Progresso|Santiago do Sul|Santo Amaro da Imperatriz|Saudades|Schroeder|Seara|Serra Alta|Sider\xF3polis|Sombrio|Sul Brasil|S\xE3o Bento do Sul|S\xE3o Bernardino|S\xE3o Bonif\xE1cio|S\xE3o Carlos|S\xE3o Crist\xF3v\xE3o do Sul|S\xE3o Domingos|S\xE3o Francisco do Sul|S\xE3o Joaquim|S\xE3o Jos\xE9|S\xE3o Jos\xE9 do Cedro|S\xE3o Jos\xE9 do Cerrito|S\xE3o Jo\xE3o Batista|S\xE3o Jo\xE3o do Itaperi\xFA|S\xE3o Jo\xE3o do Oeste|S\xE3o Jo\xE3o do Sul|S\xE3o Louren\xE7o do Oeste|S\xE3o Ludgero|S\xE3o Martinho|S\xE3o Miguel da Boa Vista|S\xE3o Miguel do Oeste|S\xE3o Pedro de Alc\xE2ntara|Tai\xF3|Tangar\xE1|Tigrinhos|Tijucas|Timb\xE9 do Sul|Timb\xF3|Timb\xF3 Grande|Treviso|Treze de Maio|Treze T\xEDlias|Trombudo Central|Tr\xEAs Barras|Tubar\xE3o|Tun\xE1polis|Turvo|Uni\xE3o do Oeste|Urubici|Urupema|Urussanga|Vargem|Vargem Bonita|Varge\xE3o|Vidal Ramos|Videira|Vitor Meireles|Witmarsum|Xanxer\xEA|Xavantina|Xaxim|Zort\xE9a|\xC1gua Doce|\xC1guas de Chapec\xF3|\xC1guas Frias|\xC1guas Mornas",SE:"Amparo do S\xE3o Francisco|Aquidab\xE3|Aracaju|Arau\xE1|Areia Branca|Barra dos Coqueiros|Boquim|Brejo Grande|Campo do Brito|Canhoba|Canind\xE9 de S\xE3o Francisco|Capela|Carira|Carm\xF3polis|Cedro de S\xE3o Jo\xE3o|Cristin\xE1polis|Cumbe|Divina Pastora|Est\xE2ncia|Feira Nova|Frei Paulo|Gararu|General Maynard|Graccho Cardoso|Ilha das Flores|Indiaroba|Itabaiana|Itabaianinha|Itabi|Itaporanga d'Ajuda|Japaratuba|Japoat\xE3|Lagarto|Laranjeiras|Macambira|Malhada dos Bois|Malhador|Maruim|Moita Bonita|Monte Alegre de Sergipe|Muribeca|Ne\xF3polis|Nossa Senhora Aparecida|Nossa Senhora da Gl\xF3ria|Nossa Senhora das Dores|Nossa Senhora de Lourdes|Nossa Senhora do Socorro|Pacatuba|Pedra Mole|Pedrinhas|Pinh\xE3o|Pirambu|Porto da Folha|Po\xE7o Redondo|Po\xE7o Verde|Propri\xE1|Riachuelo|Riach\xE3o do Dantas|Ribeir\xF3polis|Ros\xE1rio do Catete|Salgado|Santa Luzia do Itanhy|Santa Rosa de Lima|Santana do S\xE3o Francisco|Santo Amaro das Brotas|Sim\xE3o Dias|Siriri|S\xE3o Crist\xF3v\xE3o|S\xE3o Domingos|S\xE3o Francisco|S\xE3o Miguel do Aleixo|Telha|Tobias Barreto|Tomar do Geru|Umba\xFAba",SP:"Adamantina|Adolfo|Agua\xED|Agudos|Alambari|Alfredo Marcondes|Altair|Altin\xF3polis|Alto Alegre|Alum\xEDnio|Alvinl\xE2ndia|Americana|Amparo|Am\xE9rico Brasiliense|Am\xE9rico de Campos|Anal\xE2ndia|Andradina|Angatuba|Anhembi|Anhumas|Aparecida|Aparecida d'Oeste|Apia\xED|Aramina|Arandu|Arape\xED|Araraquara|Araras|Ara\xE7ariguama|Ara\xE7atuba|Ara\xE7oiaba da Serra|Arco-\xCDris|Arealva|Areias|Arei\xF3polis|Ariranha|Artur Nogueira|Aruj\xE1|Asp\xE1sia|Assis|Atibaia|Auriflama|Avanhandava|Avar\xE9|Ava\xED|Bady Bassitt|Balbinos|Bananal|Barbosa|Bariri|Barra Bonita|Barra do Chap\xE9u|Barra do Turvo|Barretos|Barrinha|Barueri|Bar\xE3o de Antonina|Bastos|Batatais|Bauru|Bebedouro|Bento de Abreu|Bernardino de Campos|Bertioga|Bilac|Birigui|Biritiba Mirim|Boa Esperan\xE7a do Sul|Bocaina|Bofete|Boituva|Bom Jesus dos Perd\xF5es|Bom Sucesso de Itarar\xE9|Borac\xE9ia|Borborema|Borebi|Bor\xE1|Botucatu|Bragan\xE7a Paulista|Bra\xFAna|Brejo Alegre|Brodowski|Brotas|Buri|Buritama|Buritizal|B\xE1lsamo|Cabre\xFAva|Cabr\xE1lia Paulista|Cachoeira Paulista|Caconde|Cafel\xE2ndia|Caiabu|Caieiras|Caiu\xE1|Cajamar|Cajati|Cajobi|Cajuru|Campina do Monte Alegre|Campinas|Campo Limpo Paulista|Campos do Jord\xE3o|Campos Novos Paulista|Canan\xE9ia|Canas|Canitar|Capela do Alto|Capivari|Cap\xE3o Bonito|Caraguatatuba|Carapicu\xEDba|Cardoso|Casa Branca|Castilho|Catanduva|Catigu\xE1|Ca\xE7apava|Cedral|Cerqueira C\xE9sar|Cerquilho|Ces\xE1rio Lange|Charqueada|Chavantes|Clementina|Colina|Col\xF4mbia|Conchal|Conchas|Cordeir\xF3polis|Coroados|Coronel Macedo|Corumbata\xED|Cosmorama|Cosm\xF3polis|Cotia|Cravinhos|Cristais Paulista|Cruzeiro|Cruz\xE1lia|Cubat\xE3o|Cunha|C\xE1ssia dos Coqueiros|C\xE2ndido Mota|C\xE2ndido Rodrigues|Descalvado|Diadema|Dirce Reis|Divinol\xE2ndia|Dobrada|Dois C\xF3rregos|Dolcin\xF3polis|Dourado|Dracena|Duartina|Dumont|Echapor\xE3|Eldorado|Elias Fausto|Elisi\xE1rio|Emba\xFAba|Embu das Artes|Embu-Gua\xE7u|Emilian\xF3polis|Engenheiro Coelho|Esp\xEDrito Santo do Pinhal|Esp\xEDrito Santo do Turvo|Estiva Gerbi|Estrela d'Oeste|Estrela do Norte|Euclides da Cunha Paulista|Fartura|Fernando Prestes|Fernand\xF3polis|Fern\xE3o|Ferraz de Vasconcelos|Flora Rica|Floreal|Flor\xEDnea|Fl\xF3rida Paulista|Franca|Francisco Morato|Franco da Rocha|Gabriel Monteiro|Gar\xE7a|Gast\xE3o Vidigal|Gavi\xE3o Peixoto|General Salgado|Getulina|Glic\xE9rio|Guaimb\xEA|Guai\xE7ara|Guapiara|Guapia\xE7u|Guaraci|Guarani d'Oeste|Guarant\xE3|Guararapes|Guararema|Guaratinguet\xE1|Guara\xE7a\xED|Guare\xED|Guariba|Guaruj\xE1|Guarulhos|Guar\xE1|Guatapar\xE1|Gua\xEDra|Guzol\xE2ndia|G\xE1lia|Hercul\xE2ndia|Holambra|Hortol\xE2ndia|Iacanga|Iacri|Iaras|Ibat\xE9|Ibirarema|Ibir\xE1|Ibitinga|Ibi\xFAna|Ic\xE9m|Iep\xEA|Igarapava|Igarat\xE1|Igara\xE7u do Tiet\xEA|Iguape|Ilha Comprida|Ilha Solteira|Ilhabela|Indaiatuba|Indiana|Indiapor\xE3|In\xFAbia Paulista|Ipaussu|Iper\xF3|Ipe\xFAna|Ipigu\xE1|Iporanga|Ipu\xE3|Iracem\xE1polis|Irapuru|Irapu\xE3|Itaber\xE1|Itajobi|Itaju|Itanha\xE9m|Itaoca|Itapecerica da Serra|Itapetininga|Itapeva|Itapevi|Itapira|Itapirapu\xE3 Paulista|Itaporanga|Itapura|Itapu\xED|Itaquaquecetuba|Itarar\xE9|Itariri|Itatiba|Itatinga|Ita\xED|Itirapina|Itirapu\xE3|Itobi|Itu|Itupeva|Ituverava|It\xE1polis|Jaborandi|Jaboticabal|Jacare\xED|Jaci|Jacupiranga|Jaguari\xFAna|Jales|Jambeiro|Jandira|Jardin\xF3polis|Jarinu|Ja\xFA|Jeriquara|Joan\xF3polis|Jos\xE9 Bonif\xE1cio|Jo\xE3o Ramalho|Jumirim|Jundia\xED|Junqueir\xF3polis|Juquitiba|Juqui\xE1|J\xFAlio Mesquita|Lagoinha|Laranjal Paulista|Lavrinhas|Lav\xEDnia|Leme|Len\xE7\xF3is Paulista|Limeira|Lind\xF3ia|Lins|Lorena|Lourdes|Louveira|Lucian\xF3polis|Luc\xE9lia|Luizi\xE2nia|Lup\xE9rcio|Lut\xE9cia|Lu\xEDs Ant\xF4nio|Macatuba|Macaubal|Maced\xF4nia|Magda|Mairinque|Mairipor\xE3|Manduri|Marab\xE1 Paulista|Maraca\xED|Marapoama|Marin\xF3polis|Mari\xE1polis|Martin\xF3polis|Mar\xEDlia|Mat\xE3o|Mau\xE1|Mendon\xE7a|Meridiano|Mes\xF3polis|Miguel\xF3polis|Mineiros do Tiet\xEA|Mira Estrela|Miracatu|Mirand\xF3polis|Mirante do Paranapanema|Mirassol|Mirassol\xE2ndia|Mococa|Mogi das Cruzes|Mogi Gua\xE7u|Mogi Mirim|Mombuca|Mongagu\xE1|Monte Alegre do Sul|Monte Alto|Monte Apraz\xEDvel|Monte Azul Paulista|Monte Castelo|Monte Mor|Monteiro Lobato|Mon\xE7\xF5es|Morro Agudo|Morungaba|Motuca|Murutinga do Sul|Nantes|Narandiba|Natividade da Serra|Nazar\xE9 Paulista|Neves Paulista|Nhandeara|Nipo\xE3|Nova Alian\xE7a|Nova Campina|Nova Cana\xE3 Paulista|Nova Castilho|Nova Europa|Nova Granada|Nova Guataporanga|Nova Independ\xEAncia|Nova Luzit\xE2nia|Nova Odessa|Novais|Novo Horizonte|Nuporanga|Ocau\xE7u|Ol\xEDmpia|Onda Verde|Oriente|Orindi\xFAva|Orl\xE2ndia|Osasco|Oscar Bressane|Osvaldo Cruz|Ourinhos|Ouro Verde|Ouroeste|Pacaembu|Palestina|Palmares Paulista|Palmeira d'Oeste|Palmital|Panorama|Paragua\xE7u Paulista|Paraibuna|Paranapanema|Paranapu\xE3|Parapu\xE3|Para\xEDso|Pardinho|Pariquera-A\xE7u|Parisi|Patroc\xEDnio Paulista|Paulic\xE9ia|Paulist\xE2nia|Paulo de Faria|Paul\xEDnia|Pederneiras|Pedra Bela|Pedran\xF3polis|Pedregulho|Pedreira|Pedrinhas Paulista|Pedro de Toledo|Pen\xE1polis|Pereira Barreto|Pereiras|Peru\xEDbe|Piacatu|Piedade|Pilar do Sul|Pindamonhangaba|Pindorama|Pinhalzinho|Piquerobi|Piquete|Piracaia|Piracicaba|Piraju|Piraju\xED|Pirangi|Pirapora do Bom Jesus|Pirapozinho|Pirassununga|Piratininga|Pitangueiras|Planalto|Platina|Poloni|Pomp\xE9ia|Ponga\xED|Pontal|Pontalinda|Pontes Gestal|Populina|Porangaba|Porto Feliz|Porto Ferreira|Potim|Potirendaba|Po\xE1|Pracinha|Prad\xF3polis|Praia Grande|Prat\xE2nia|Presidente Alves|Presidente Bernardes|Presidente Epit\xE1cio|Presidente Prudente|Presidente Venceslau|Promiss\xE3o|Quadra|Quat\xE1|Queiroz|Queluz|Quintana|Rafard|Rancharia|Reden\xE7\xE3o da Serra|Regente Feij\xF3|Regin\xF3polis|Registro|Restinga|Ribeira|Ribeir\xE3o Bonito|Ribeir\xE3o Branco|Ribeir\xE3o Corrente|Ribeir\xE3o do Sul|Ribeir\xE3o dos \xCDndios|Ribeir\xE3o Grande|Ribeir\xE3o Pires|Ribeir\xE3o Preto|Rifaina|Rinc\xE3o|Rin\xF3polis|Rio Claro|Rio das Pedras|Rio Grande da Serra|Riol\xE2ndia|Riversul|Rosana|Roseira|Rubin\xE9ia|Rubi\xE1cea|Sabino|Sagres|Sales|Sales Oliveira|Sales\xF3polis|Salmour\xE3o|Saltinho|Salto|Salto de Pirapora|Salto Grande|Sandovalina|Santa Ad\xE9lia|Santa Albertina|Santa Branca|Santa B\xE1rbara d'Oeste|Santa Clara d'Oeste|Santa Cruz da Concei\xE7\xE3o|Santa Cruz da Esperan\xE7a|Santa Cruz das Palmeiras|Santa Cruz do Rio Pardo|Santa Ernestina|Santa F\xE9 do Sul|Santa Gertrudes|Santa Isabel|Santa L\xFAcia|Santa Maria da Serra|Santa Mercedes|Santa Rita d'Oeste|Santa Rita do Passa Quatro|Santa Rosa de Viterbo|Santa Salete|Santana da Ponte Pensa|Santana de Parna\xEDba|Santo Anast\xE1cio|Santo Andr\xE9|Santo Ant\xF4nio da Alegria|Santo Ant\xF4nio de Posse|Santo Ant\xF4nio do Aracangu\xE1|Santo Ant\xF4nio do Jardim|Santo Ant\xF4nio do Pinhal|Santo Expedito|Santos|Sant\xF3polis do Aguape\xED|Sarapu\xED|Sarutai\xE1|Sebastian\xF3polis do Sul|Serra Azul|Serra Negra|Serrana|Sert\xE3ozinho|Sete Barras|Sever\xEDnia|Silveiras|Socorro|Sorocaba|Sud Mennucci|Sumar\xE9|Suzano|Suzan\xE1polis|S\xE3o Bento do Sapuca\xED|S\xE3o Bernardo do Campo|S\xE3o Caetano do Sul|S\xE3o Carlos|S\xE3o Francisco|S\xE3o Joaquim da Barra|S\xE3o Jos\xE9 da Bela Vista|S\xE3o Jos\xE9 do Barreiro|S\xE3o Jos\xE9 do Rio Pardo|S\xE3o Jos\xE9 do Rio Preto|S\xE3o Jos\xE9 dos Campos|S\xE3o Jo\xE3o da Boa Vista|S\xE3o Jo\xE3o das Duas Pontes|S\xE3o Jo\xE3o de Iracema|S\xE3o Jo\xE3o do Pau d'Alho|S\xE3o Louren\xE7o da Serra|S\xE3o Luiz do Paraitinga|S\xE3o Manuel|S\xE3o Miguel Arcanjo|S\xE3o Paulo|S\xE3o Pedro|S\xE3o Pedro do Turvo|S\xE3o Roque|S\xE3o Sebasti\xE3o|S\xE3o Sebasti\xE3o da Grama|S\xE3o Sim\xE3o|S\xE3o Vicente|Tabapu\xE3|Tabatinga|Tabo\xE3o da Serra|Taciba|Tagua\xED|Taia\xE7u|Tai\xFAva|Tamba\xFA|Tanabi|Tapiratiba|Tapira\xED|Taquaral|Taquaritinga|Taquarituba|Taquariva\xED|Tarabai|Tarum\xE3|Tatu\xED|Taubat\xE9|Tejup\xE1|Teodoro Sampaio|Terra Roxa|Tiet\xEA|Timburi|Torre de Pedra|Torrinha|Trabiju|Trememb\xE9|Tr\xEAs Fronteiras|Tuiuti|Tupi Paulista|Tup\xE3|Turi\xFAba|Turmalina|Ubarana|Ubatuba|Ubirajara|Uchoa|Uni\xE3o Paulista|Uru|Urup\xEAs|Ur\xE2nia|Valentim Gentil|Valinhos|Valpara\xEDso|Vargem|Vargem Grande do Sul|Vargem Grande Paulista|Vera Cruz|Vinhedo|Viradouro|Vista Alegre do Alto|Vit\xF3ria Brasil|Votorantim|Votuporanga|V\xE1rzea Paulista|Zacarias|\xC1guas da Prata|\xC1guas de Lind\xF3ia|\xC1guas de Santa B\xE1rbara|\xC1guas de S\xE3o Pedro|\xC1lvares Florence|\xC1lvares Machado|\xC1lvaro de Carvalho|\xD3leo",TO:"Abreul\xE2ndia|Aguiarn\xF3polis|Alian\xE7a do Tocantins|Almas|Alvorada|Anan\xE1s|Angico|Aparecida do Rio Negro|Aragominas|Araguacema|Araguan\xE3|Araguatins|Aragua\xE7u|Aragua\xEDna|Arapoema|Arraias|Augustin\xF3polis|Aurora do Tocantins|Axix\xE1 do Tocantins|Baba\xE7ul\xE2ndia|Bandeirantes do Tocantins|Barra do Ouro|Barrol\xE2ndia|Bernardo Say\xE3o|Bom Jesus do Tocantins|Brasil\xE2ndia do Tocantins|Brejinho de Nazar\xE9|Buriti do Tocantins|Cachoeirinha|Campos Lindos|Cariri do Tocantins|Carmol\xE2ndia|Carrasco Bonito|Caseara|Centen\xE1rio|Chapada da Natividade|Chapada de Areia|Colinas do Tocantins|Colm\xE9ia|Combinado|Concei\xE7\xE3o do Tocantins|Couto Magalh\xE3es|Cristal\xE2ndia|Crix\xE1s do Tocantins|Darcin\xF3polis|Dian\xF3polis|Divin\xF3polis do Tocantins|Dois Irm\xE3os do Tocantins|Duer\xE9|Esperantina|Figueir\xF3polis|Filad\xE9lfia|Formoso do Araguaia|F\xE1tima|Goianorte|Goiatins|Guara\xED|Gurupi|Ipueiras|Itacaj\xE1|Itaguatins|Itapiratins|Itapor\xE3 do Tocantins|Ja\xFA do Tocantins|Juarina|Lagoa da Confus\xE3o|Lagoa do Tocantins|Lajeado|Lavandeira|Lizarda|Luzin\xF3polis|Marian\xF3polis do Tocantins|Mateiros|Mauril\xE2ndia do Tocantins|Miracema do Tocantins|Miranorte|Monte do Carmo|Monte Santo do Tocantins|Muricil\xE2ndia|Natividade|Nazar\xE9|Nova Olinda|Nova Rosal\xE2ndia|Novo Acordo|Novo Alegre|Novo Jardim|Oliveira de F\xE1tima|Palmas|Palmeirante|Palmeiras do Tocantins|Palmeir\xF3polis|Paran\xE3|Para\xEDso do Tocantins|Pau D'Arco|Pedro Afonso|Peixe|Pequizeiro|Pindorama do Tocantins|Piraqu\xEA|Pium|Ponte Alta do Bom Jesus|Ponte Alta do Tocantins|Porto Alegre do Tocantins|Porto Nacional|Praia Norte|Presidente Kennedy|Pugmil|Recursol\xE2ndia|Riachinho|Rio da Concei\xE7\xE3o|Rio dos Bois|Rio Sono|Sampaio|Sandol\xE2ndia|Santa F\xE9 do Araguaia|Santa Maria do Tocantins|Santa Rita do Tocantins|Santa Rosa do Tocantins|Santa Tereza do Tocantins|Santa Terezinha do Tocantins|Silvan\xF3polis|Sucupira|S\xE3o Bento do Tocantins|S\xE3o F\xE9lix do Tocantins|S\xE3o Miguel do Tocantins|S\xE3o Salvador do Tocantins|S\xE3o Sebasti\xE3o do Tocantins|S\xE3o Val\xE9rio|S\xEDtio Novo do Tocantins|Taboc\xE3o|Taguatinga|Taipas do Tocantins|Talism\xE3|Tocantin\xF3polis|Tocant\xEDnia|Tupirama|Tupiratins|Wanderl\xE2ndia|Xambio\xE1"}});function Xc(){let n=Math.max(0,(Date.now()-Zx)/36e5),e=Math.sin(n/5)*.012;return{moradores:41e3+n*520,cidades:1180+n*3.2,obras:280+n*.9,norte:.5+e,sul:.5-e}}function Ih({onStart:n,onContinue:e,savedHandle:t,toast:i}){let a=Et("#landing");a.hidden=!1,a.querySelectorAll('[data-go="start"]').forEach(f=>f.addEventListener("click",()=>n(f.dataset.side)));let r=Et("#lp-continue");t&&(r.hidden=!1,r.textContent=`\u25B6 Continuar como @${t}`,r.onclick=e),Et("#lp-buy").onclick=()=>i("\u{1F6D2} Checkout em breve! Nesta vers\xE3o de teste nada \xE9 vendido nem cobrado.",4e3),a.querySelectorAll("[data-soon]").forEach(f=>f.onclick=p=>{p.preventDefault(),i("Em breve \u{1F609}")});let o=Xc(),s=Math.round(o.norte*100);a.querySelectorAll('[data-ns="n"]').forEach(f=>f.textContent=s+"%"),a.querySelectorAll('[data-ns="s"]').forEach(f=>f.textContent=100-s+"%"),Et("#lp-nb").style.width=s+"%",Et("#lp-nb").textContent=`\u{1F334} ${s}%`,Et("#lp-sb").style.width=100-s+"%",Et("#lp-sb").textContent=`${100-s}% \u{1F3D9}\uFE0F`,Et("#lp-ticker").textContent=`\u{1F334} NORTE ${s}% x ${100-s}% SUL \u{1F3D9}\uFE0F \u2022 ${Wc(o.moradores)} moradores \u2022 ${Wc(o.cidades)} cidades ativas \u2022 \u{1F3C6} Vila \u279C Cidade Comum \u279C N\xEDvel Su\xED\xE7a \u279C N\xEDvel Jap\xE3o \u279C N\xEDvel EUA \u279C Grande Pot\xEAncia \u2022 n\xFAmeros simulados do prot\xF3tipo \u2022`;let l=a.querySelectorAll("[data-count]"),d=f=>{let p=o[f.dataset.count],g=performance.now(),M=m=>{let h=Math.min(1,(m-g)/1400);f.textContent=Wc(p*(1-Math.pow(1-h,3))),h<1&&requestAnimationFrame(M)};requestAnimationFrame(M)},c=new IntersectionObserver(f=>f.forEach(p=>{let g=p.target;if(g.tagName==="VIDEO"){p.isIntersecting?(g.preload="auto",g.play().catch(()=>{})):g.pause();return}p.isIntersecting&&(g.dataset.count?(d(g),c.unobserve(g)):(g.classList.add("on"),c.unobserve(g)))}),{root:a,threshold:.25});l.forEach(f=>c.observe(f)),a.querySelectorAll(".reveal").forEach(f=>c.observe(f)),a.querySelectorAll("video[data-lazy]").forEach(f=>c.observe(f)),a.querySelector(".phone video")?.play?.().catch(()=>{})}function Jc(){let n=Et("#landing");n.hidden=!0,n.querySelectorAll("video").forEach(e=>e.pause())}function Zc(){let n=Et("#landing");n.hidden=!1,n.scrollTop=0,n.querySelector(".phone video")?.play().catch(()=>{})}function Lh({preSide:n,onDone:e,onCancel:t,toast:i}){let a={side:n||null},r=0,o=Et("#signup"),s=Et("#su-body");o.hidden=!1,Et("#su-back").onclick=()=>{r===0?(o.hidden=!0,t()):d(r-1)};let l=()=>a.handle===Zn;function d(h){r=h;let y=l()?5:6;Et("#su-prog").style.width=(h+1)/y*100+"%",Et("#su-n").textContent=`${h+1}/${y}`,s.style.animation="none",s.offsetHeight,s.style.animation="",o.scrollTop=0,{handle:c,idade:u,lado:f,estado:p,cidade:g,prof:M}[Yx[h]]()}function c(){s.innerHTML=`<h2>Qual \xE9 o seu @ do Instagram?</h2><p class="hint">Ele vira o nome do seu morador e aparece em cima da sua cabe\xE7a na cidade.</p>
      <div class="igin"><span>@</span><input id="su-h" maxlength="30" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="seu.usuario" value="${Wa(a.handle||"")}"></div>
      <div class="ig-badge">\u{1F512} Nesta vers\xE3o de teste nada \xE9 enviado pra internet.</div>
      <button class="su-next" id="su-ok">Continuar \u279C</button><p class="su-foot">Ao continuar voc\xEA concorda em jogar limpo \u{1F609}</p>`;let h=Et("#su-h"),y=Et("#su-ok"),S=()=>h.value.trim().replace(/^@+/,"").toLowerCase().replace(/[^a-z0-9._]/g,""),x=()=>{y.disabled=S().length<2};h.oninput=x,x();let L=()=>{let E=S();if(E.length<2)return i("Digite seu @ (m\xEDnimo 2 letras)");a.handle=E,d(1)};y.onclick=L,h.onkeydown=E=>{E.key==="Enter"&&L()},setTimeout(()=>h.focus({preventScroll:!0}),250)}function u(){let h=[["at\xE9 12","com um respons\xE1vel"],["13 a 17",""],["18 a 24",""],["25 a 34",""],["35 a 44",""],["45+",""]];s.innerHTML=`<h2>Quantos anos voc\xEA tem?</h2><p class="hint">Pra deixar o jogo com a sua cara. Ningu\xE9m v\xEA isso al\xE9m de voc\xEA.</p>
      <div class="ages">${h.map(([y,S])=>`<button class="age ${a.idade===y?"sel":""}" data-a="${y}">${y}${S?`<small>${S}</small>`:""}</button>`).join("")}</div>`,s.querySelectorAll(".age").forEach(y=>y.onclick=()=>{a.idade=y.dataset.a,y.classList.add("sel"),setTimeout(()=>d(2),140)})}function f(){let h=y=>{let S=Sn[y];return`<button class="side2 ${y} ${a.side===y?"sel":""}" data-s="${y}"><span class="se">${S.emoji}</span><b>${S.emoji} ${S.nome}</b><div class="rg">${S.regioes.join(" \u2022 ")}</div><span class="st">Estilo ${S.estilo}</span><ul>${S.perks.slice(0,3).map(x=>`<li>${x}</li>`).join("")}</ul></button>`};s.innerHTML=`<h2>Qual Brasil voc\xEA vai ajudar a virar pot\xEAncia?</h2><p class="hint">N\xE3o tem lado rico ou pobre: \xE9 o seu jeito de jogar.</p><div class="sides2">${h("norte")}${h("sul")}</div>`,s.querySelectorAll(".side2").forEach(y=>y.onclick=()=>{a.side!==y.dataset.s&&(a.uf=null,a.cidade=null),a.side=y.dataset.s,y.classList.add("sel"),setTimeout(()=>d(3),140)})}function p(){let h=Sn[a.side].regioes;s.innerHTML=`<h2>Em qual estado voc\xEA mora?</h2><p class="hint">${Sn[a.side].emoji} ${Sn[a.side].nome}</p>
      ${h.map(y=>`<div class="rgh">${y}</div><div class="ufgrid">${Sh[y].map(S=>`<button class="uf2 ${a.uf===S?"sel":""}" data-uf="${S}"><b>${S}</b><small>${Oc[S]}</small></button>`).join("")}</div>`).join("")}`,s.querySelectorAll(".uf2").forEach(y=>y.onclick=()=>{a.uf!==y.dataset.uf&&(a.cidade=null),a.uf=y.dataset.uf,y.classList.add("sel"),setTimeout(()=>d(4),120)})}function g(){let h=Ph[a.uf].split("|"),y=Ko[a.uf],S=h.map(w=>qc(w));s.innerHTML=`<h2>Qual \xE9 a sua cidade?</h2><p class="hint">${Oc[a.uf]} tem <b>${h.length}</b> munic\xEDpios. Busque o seu:</p>
      <div class="search"><input id="su-q" placeholder="Digite o nome da cidade" autocomplete="off" spellcheck="false"></div><div class="ccount" id="su-cc"></div><div class="clist" id="su-cl"></div>`;let x=Et("#su-q"),L=Et("#su-cl"),E=Et("#su-cc"),T=()=>{let w=qc(x.value.trim()),v;if(!w)v=[y,...h.filter(P=>P!==y)];else{let P=[],k=[];h.forEach((F,W)=>{let Q=S[W].indexOf(w);Q===0?P.push(F):Q>0&&k.push(F)}),v=[...P,...k]}let b=v.slice(0,60);E.textContent=w?`${v.length} resultado${v.length===1?"":"s"}`:`Mostrando ${b.length} de ${h.length} \u2022 digite pra buscar`,L.innerHTML=b.map(P=>{let k=Wa(P);if(w){let F=qc(P).indexOf(w);F>=0&&(k=Wa(P.slice(0,F))+"<mark>"+Wa(P.slice(F,F+w.length))+"</mark>"+Wa(P.slice(F+w.length)))}return`<button class="city2" data-c="${Wa(P)}">\u{1F4CD} ${k}${P===y?"<em>CAPITAL</em>":""}</button>`}).join("")||`<p class="hint">Nenhuma cidade com esse nome em ${a.uf}. Confira a grafia \u{1F609}</p>`};x.oninput=T,T(),L.onclick=w=>{let v=w.target.closest(".city2");v&&(a.cidade=v.dataset.c,v.style.background="#ffdf00",setTimeout(()=>l()?m():d(5),120))}}function M(){let h=Va.filter(y=>y.nivel===1);s.innerHTML=`<h2>Qual vai ser seu primeiro trampo?</h2><p class="hint">Cada profiss\xE3o \xE9 um minigame diferente. Depois voc\xEA desbloqueia outras 21.</p>
      <div class="profs2">${h.map(y=>`<button class="prof2" data-p="${y.id}"><span class="pe">${y.emoji}</span><b>${y.nome}</b><span class="mgt">\u{1F3AE} ${Yn[y.mg]}</span><small>${y.desc}</small></button>`).join("")}</div>`,s.querySelectorAll(".prof2").forEach(y=>y.onclick=()=>{a.prof=y.dataset.p,m()})}function m(){o.hidden=!0,e({...a})}d(0)}var Et,Wc,Zx,qc,Wa,Yx,Dh=bi(()=>{Hc();Rh();Gc();$c();Et=n=>document.querySelector(n),Wc=n=>Math.floor(n).toLocaleString("pt-BR"),Zx=Date.UTC(2026,10,6,12);qc=n=>n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),Wa=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);Yx=["handle","idade","lado","estado","cidade","prof"]});var fb=df(()=>{yh();Hc();Gc();$c();Ic();Dh();var td="brasilcity_save_v3",Vh="brasilcity_settings_v1",ge=n=>document.querySelector(n),ht=n=>"\u{1FA99}"+Math.floor(n).toLocaleString("pt-BR"),ut=n=>Math.floor(n).toLocaleString("pt-BR"),Ei=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Er=10,Hh=12,Yc=3,ns=60,as=250,Gh=128,Cr=new URLSearchParams(location.search),C=null,K=null,jx=matchMedia("(pointer:coarse)").matches&&(navigator.hardwareConcurrency||4)<=4?"baixa":"alta",Pn=Object.assign({quality:jx,dayNight:!1,sound:!0},JSON.parse(localStorage.getItem(Vh)||"{}")),En=null;function at(n){if(!Pn.sound)return;try{En||(En=new(window.AudioContext||window.webkitAudioContext))}catch{return}En.state==="suspended"&&En.resume();let e=En.currentTime,t=(a,r,o="square",s=.06,l=0,d)=>{let c=En.createOscillator(),u=En.createGain();c.type=o,c.frequency.setValueAtTime(a,e+l),d&&c.frequency.exponentialRampToValueAtTime(d,e+l+r),u.gain.setValueAtTime(s,e+l),u.gain.exponentialRampToValueAtTime(1e-4,e+l+r),c.connect(u).connect(En.destination),c.start(e+l),c.stop(e+l+r+.02)};({good:()=>t(660,.09,"square",.05,0,990),bad:()=>t(180,.2,"sawtooth",.05,0,90),tick:()=>t(880,.04,"triangle",.04),combo:()=>[523,659,784,1046].forEach((a,r)=>t(a,.09,"square",.045,r*.06)),coin:()=>{t(988,.07,"square",.04),t(1319,.18,"square",.04,.07)},star:()=>t(1046,.25,"triangle",.07,0,1568),kick:()=>t(120,.15,"sine",.2,0,40),spray:()=>t(2e3+Math.random()*800,.03,"sawtooth",.01),build:()=>{t(220,.08,"square",.06),t(330,.08,"square",.06,.1),t(440,.15,"square",.06,.2)},level:()=>[523,659,784,659,784,1046].forEach((a,r)=>t(a,.16,"square",.05,r*.11)),pop:()=>t(400,.08,"sine",.08,0,800),tap:()=>t(520,.05,"sine",.05,0,720)})[n]?.()}function id(n,e){let t=ti(e*977+13);return Array.from({length:n},()=>zc[Math.floor(t()*zc.length)]+Vc[Math.floor(t()*Vc.length)])}var Pr=n=>[...n].reduce((e,t)=>e*31+t.charCodeAt(0)>>>0,7);function it(){C&&(C.savedAt=Date.now(),localStorage.setItem(td,JSON.stringify(C)))}function Kx(){try{return JSON.parse(localStorage.getItem(td))}catch{return null}}function rn(n){let e=1;for(let t=1;t<en.length;t++)n>=en[t]&&(e=t+1);return Math.min(e,yr)}function cs(n){return n==="prefeito"?Ah:Va.find(e=>e.id===n)}function nd(n){return{totalWorks:C.stats.totalWorks,reputacao:C.stats.reputacao,perfeitos:C.stats.perfeitos}[n.req.tipo]}function $h(n){return!n.req||nd(n)>=n.req.valor}var Xa=(n=new Date)=>n.toLocaleDateString("sv"),ds=n=>Math.max(0,(Date.now()-n)/36e5);function us(){return 100+(C.city.obras.includes("hospital")?10:0)}function hs(){return Math.min(us(),C.energia+(Date.now()-C.energiaTs)/1e3/Hh)}function Nr(n){C.energia=n,C.energiaTs=Date.now()}function Nh(){return C.mayor||(C.lote?.stage||0)>=4}function ad(){let n=ds(C.city.created)+(C.city.simH||0),e=ti(Pr(C.cidade+"lotes")),t=Array.from({length:Gh-4},(s,l)=>l+4);for(let s=t.length-1;s>0;s--){let l=Math.floor(e()*(s+1));[t[s],t[l]]=[t[l],t[s]]}let i=Math.min(30,3+Math.floor(n/1.5)),a=id(i,Pr(C.cidade)),r={},o=0;for(let s of t){if(o>=i)break;if(C.lote&&C.lote.idx===s)continue;let l=Math.max(0,o-2)*1.5;r[s]={owner:a[o],stage:Math.max(1,Math.min(4,1+Math.floor((n-l)/1))),type:["casa_simples","casa_reformada","sobrado","casa_simples"][Math.floor(e()*4)]},o++}return r}function Rr(){return C.lote?{stage:C.lote.stage,type:C.casa==="p_mansao_dourada"?"mansao":C.casa,golden:C.casa==="p_mansao_dourada",me:!0,owner:C.handle}:null}function fs(){let n=C.city,e=ad(),t=0,i=0;for(let o of Object.values(e))o.stage>=4?t++:i+=o.stage;C.lote&&(C.lote.stage>=4?t++:i+=C.lote.stage);let a=ds(n.created)+(n.simH||0),r={casas:40*t+8*i,limpeza:4*n.cleaned.length,arvores:12*n.trees.length,calcadas:30*n.paved.length,obras:150*n.obras.length,moradores:Math.floor(Math.min(a,300)*1.5),bonus:n.bonus||0};return{parts:r,total:Object.values(r).reduce((o,s)=>o+s,0),houses:t,npc:e}}function ea(){return fs().total}function an(n){let e=0;return zt.forEach((t,i)=>{n>=t.min&&(e=i)}),e}function Qx(){let{npc:n,total:e}=fs(),t={...n};return C.lote&&(t[C.lote.idx]=Rr()),{stage:an(e),obras:C.city.obras,paved:C.city.paved,cleaned:C.city.cleaned,trees:C.city.trees,lots:t,mayor:Zn}}function Ir(){let n=ad();for(let e=0;e<Gh;e++)if(!n[e])return e;return 0}function Ja(){return C.mayor?K.frontOfPalace():K.frontOfLot(C.lote?C.lote.idx:Ir())}function Wh(){return Math.floor(12+(ds(C.city.created)+(C.city.simH||0))*6+ea()/20)}function qh(){return{created:Date.now(),cleaned:[],trees:[],paved:[],obras:[],obra:{id:"praca",prog:0,ts:Date.now()},caixa:2e3,stageSeen:0,bonus:0,decretos:{}}}function eb(n){let e=n.handle===Zn||!!n.mayor,t=ti(Pr(n.handle+n.cidade));C={v:3,nome:e?Th:n.handle,handle:n.handle,idade:n.idade||null,side:n.side,uf:n.uf,cidade:n.cidade,mayor:e,numero:String(1+Math.floor(t()*99998)).padStart(5,"0"),criadoEm:Date.now(),prof:e?"prefeito":n.prof,xp:0,dinheiro:200,energia:100,energiaTs:Date.now(),casa:"casa_simples",veiculo:null,roupa:"camisa_verde",chapeu:null,inventario:["casa_simples","camisa_verde"],negocios:{},lote:null,city:qh(),stats:{totalWorks:0,perfeitos:0,reputacao:0,ganhos:0,trash:0,trees:0,paved:0,builds:0,obras:0},passivaTs:Date.now(),missions:null,login:{last:null,streak:0,claimed:null},conq:[],lvSeen:1,tut:0},it()}function Bh(n){var e;return n.stats=Object.assign({totalWorks:0,perfeitos:0,reputacao:0,ganhos:0,trash:0,trees:0,paved:0,builds:0,obras:0},n.stats),n.city||(n.city=qh()),(e=n.city).decretos||(e.decretos={}),n.conq||(n.conq=[]),n.login||(n.login={last:null,streak:0}),n.negocios||(n.negocios={}),n.lvSeen||(n.lvSeen=rn(n.xp)),n}function tb(){return K||(ge("#app").hidden=!1,K=new jo(ge("#scene")),K.setQuality(Pn.quality),K.setDayNight(Pn.dayNight),window.__game.world=K,K)}function ib(n){return Pn.quality==="alta"?10+n*4:6+n*2}function Za(n){let e=n&&K.playerPos?K.playerPos.clone():null,t=Qx();K.build(C.cidade,C.side,t),K.spawnNPCs(ib(t.stage),id(40,Pr(C.cidade+"npc")));let i=e||Ja();K.spawn=i,K.playerPos=i.clone(),ms(),e||K.facePoint(C.mayor?K.palacePos:K.lots[C.lote?C.lote.idx:Ir()]),K.vehicleSpeed=An.veiculos.find(a=>a.id===C.veiculo)?.vel||2.6,K.setVehicle(ps(),Ja()),od()}function ps(){return{p_esportivo:"esportivo",p_carro_neon:"neon"}[C.veiculo]||C.veiculo}function ms(){let n=An.roupas.find(t=>t.id===C.roupa),e=An.roupas.find(t=>t.id===C.chapeu);K.setPlayer({shirt:C.mayor?"#15803d":n?.cor||"#16a34a",hat:e?.modelo||null,cape:!1,skin:C.pele||"#c68642",prof:C.prof,hairCol:"#2b1a10",mayor:C.mayor},C.handle)}function rs(){Jc(),ge("#signup").hidden=!0,tb(),document.body.classList.add("ingame"),ud(),gs(!0),C.city.stageSeen=Math.max(C.city.stageSeen||0,an(ea())),Za(!1),Jt.innerHTML="",ge("#hud").hidden=!1,ge("#joy").hidden=!1,Ft(),ob(),cb(),bs(!0),C.tut||(C.tut=1,it(),ja(()=>C.mayor?Ve(`\u{1F451} Bem-vindo, Prefeito! Abra o \u{1F3DB}\uFE0F Gabinete pra lan\xE7ar obras. ${C.cidade} ainda \xE9 uma Vila.`,7e3):Ve(`\u{1F44B} ${C.cidade} ainda \xE9 uma Vila! Esse \u{1FAA7} terreno na sua frente est\xE1 livre: toque em REIVINDICAR.`,7e3)))}function nb(){wt(!0),document.body.classList.remove("ingame"),ge("#hud").hidden=!0,ge("#joy").hidden=!0,K&&(K.mode="orbit"),Zc()}function rd(){return 1+.04*C.city.obras.length}function gs(n=!1){if(!C)return;let e=Date.now(),t=(e-C.passivaTs)/6e4;if(n&&(t=Math.min(t,120)),t>.05){let a=0;if(C.side==="sul")for(let r of Qo)a+=(C.negocios[r.id]||0)*r.renda*t;else a=(1.5*rn(C.xp)+3*C.city.obras.length)*t;C.dinheiro+=a,C.passivaTs=e,C.mayor&&(C.city.caixa+=t*8),n&&a>1&&setTimeout(()=>Ve(`\u{1F4B0} Enquanto voc\xEA estava fora: +${ht(a)} (${C.side==="sul"?"seus neg\xF3cios":"Renda da Cooperativa"})`,5e3),2500)}let i=C.city.obra;if(i){let a=Math.min(240,(e-(i.ts||e))/6e4);i.ts=e,Lr(a*(20+6*an(ea())),!1)}it()}function vs(){return C.city.obra?Ga.find(n=>n.id===C.city.obra.id):null}function Lr(n,e){let t=C.city.obra;if(!t)return;t.prog+=n;let i=vs();if(t.prog>=i.meta){C.city.obras.push(i.id);let a=t.prog-i.meta,r=Ga.find(o=>!C.city.obras.includes(o.id));C.city.obra=r?{id:r.id,prog:Math.min(a,r.meta*.5),ts:Date.now()}:null,C.hudReady&&(wi(),at("level"),ja(()=>sd(i.emoji,`${i.nome} conclu\xEDda!`,`${i.efeito}. Todos os sal\xE1rios da cidade: +${Math.round((rd()-1)*100)}%`)),Za(!0),Qn())}(e||C.hudReady)&&od()}function od(){let n=vs();K&&n?K.setObraProgress(C.city.obra.prog/n.meta,n.nome):K&&K.setObraProgress(1,"Cidade completa")}function Qn(){let n=an(ea());if(n>(C.city.stageSeen||0)){C.city.stageSeen=n,it();let e=zt[n];Za(!0),Ft(),wi(),at("level"),ja(()=>sd(e.emoji,`${C.cidade} virou ${e.nome}!`,"A cidade mudou: olhe em volta! "+["","Ruas com faixa e moradores chegando.","Postes acesos e mais gente.","Tr\xE2nsito, flores e \xE1rvores nas ruas.","Cal\xE7adas, pra\xE7a e pr\xE9dios no horizonte.","Cidade n\xEDvel mundial.","Uma das melhores do pa\xEDs.","Topo do Brasil!"][n]))}}function sd(n,e,t){ui(`<div class="stagepop"><div class="big">${n}</div><h2>${Ei(e)}</h2><p class="sub">${t}</p><button class="btn primary" id="mok">Bora!</button></div>`,"lvm"),ge("#mok").onclick=()=>wt()}var Jt=ge("#ui"),is=null,Fh=null;function Ft(){if(!C||!K)return;C.hudReady=!0;let n=rn(C.xp),e=cs(C.prof),t=en[n-1],i=en[n]??en[n-1],a=n>=yr?100:(C.xp-t)/(i-t)*100,r=hs(),o=us(),s=ea(),l=an(s),d=zt[l+1],c=d?(s-zt[l].min)/(d.min-zt[l].min)*100:100,u=ab(s);ge("#hud-top").innerHTML=`<div class="hrow">
    <div class="pill me ${C.side}" id="h-me"><div class="av">${e.emoji}<em>${n}</em></div><div class="pinfo"><b>${C.mayor?"\u{1F451} ":""}@${Ei(C.handle)}</b>
      <div class="xpbar" id="h-xp"><i style="width:${is??a}%"></i><span>${n>=yr?"M\xC1X":`${ut(C.xp)}/${ut(i)}`}</span></div><small>${e.nome}</small></div></div>
    <div class="right"><div class="pill cur money" id="h-money"><span class="ci">\u{1FA99}</span><b>${ut(C.dinheiro)}</b></div><div class="pill cur energy"><span class="ci">\u26A1</span><b>${Math.floor(r)}<small>/${o}</small></b><div class="enbar"><i style="width:${r/o*100}%"></i></div></div></div></div>
    <div class="citybar" id="h-city"><span class="ce">${zt[l].emoji}</span><div class="cb"><b>${Ei(C.cidade)} <em>${zt[l].nome}</em></b><div class="cbar"><i style="width:${Fh??c}%"></i><span>${d?`${ut(s)} / ${ut(d.min)}`:"TOPO"}</span></div><small>${d?`pr\xF3ximo: ${d.emoji} ${d.nome}`:"Topo do ranking de evolu\xE7\xE3o!"}</small></div><span class="rk">\u{1F3C6}<b>#${u}</b></span></div>
    <div class="sidecol" id="sidecol"></div>`,requestAnimationFrame(()=>{let S=ge("#h-xp i");S&&(S.style.width=a+"%");let x=ge("#h-city .cbar i");x&&(x.style.width=c+"%")}),is!==null&&Math.abs(is-a)>.5&&ge("#h-xp")?.classList.add("flash"),is=a,Fh=c,ge("#h-me").onclick=()=>Qc(),ge("#h-city").onclick=()=>ls();let f=!!C.veiculo,p=(C.missions?.list||[]).filter(S=>S.p>=Jn.find(x=>x.id===S.id).meta&&!S.claimed).length+(C.login.claimed!==Xa()?1:0),g=[["b-car","\u{1F4C8}","Carreira"],["b-shop","\u{1F6CD}\uFE0F","Loja"],["b-mis","\u{1F4CB}","Miss\xF5es",p],["b-rank","\u{1F3C6}","Ranking"],["b-side",C.side==="norte"?"\u{1F91D}":"\u{1F3EA}",C.side==="norte"?"Mutir\xE3o":"Neg\xF3cios"],["b-home",C.mayor?"\u{1F3DB}\uFE0F":"\u{1F3E0}",C.mayor?"Pal\xE1cio":"Casa"],f?["b-drive",C.veiculo==="bike"?"\u{1F6B2}":"\u{1F697}",K.driving?"Descer":C.veiculo==="bike"?"Pedalar":"Dirigir",0,K.driving?"on":""]:["b-cart","\u{1FAAA}","Carteira"],C.mayor?["b-gab","\u{1F3DB}\uFE0F","Gabinete",0,"gab"]:["b-ach","\u{1F3C5}","Conquistas"],["b-set","\u2699\uFE0F","Ajustes"],["b-help","\u2753","Ajuda"]],M=g.slice(0,6),m=g.slice(6),h=([S,x,L,E,T])=>`<button class="act ${T||""}" id="${S}"><span class="ai">${x}</span><span class="al">${L}</span>${E?`<i class="bd">${E}</i>`:""}</button>`;ge("#sidecol").innerHTML=m.map(h).join(""),ge("#hud-bottom").innerHTML=`<div class="ctxrow" id="ctxrow"></div><div class="brow"><button class="act work" id="b-work"><span class="ai">${e.emoji}</span><span class="al">TRABALHAR</span><small>-${Er} \u26A1</small></button></div>
    <div class="acts">${M.map(h).join("")}</div>`;let y=(S,x)=>{let L=ge("#"+S);L&&(L.onclick=x)};y("b-work",()=>cd()),y("b-car",dd),y("b-shop",()=>Dr()),y("b-mis",()=>ta()),y("b-rank",()=>ls()),y("b-side",wr),y("b-home",rb),y("b-cart",()=>Qc()),y("b-gab",jn),y("b-ach",()=>ta("conq")),y("b-set",hd),y("b-help",hb),y("b-drive",()=>{Date.now()-(K.lastDriveToggle||0)<300||(K.lastDriveToggle=Date.now(),!K.driving&&K.vehicle&&K.player.position.distanceTo(K.vehicle.position)>8&&K.vehicle.position.copy(K.player.position).add({x:2.5,y:0,z:0}),K.toggleDrive(),Ft())}),os=""}function ab(n){return Kh().filter(t=>t.score>n).length+1}setInterval(()=>{C&&C.hudReady&&!ge("#hud").hidden&&K?.mode==="follow"&&(gs(),document.querySelector(".modal")||Ft())},4e3);function rb(){K.driving&&K.toggleDrive();let n=Ja();K.player.position.copy(n),K.playerPos=n.clone(),K.facePoint(C.mayor?K.palacePos:K.lots[C.lote?C.lote.idx:Ir()]),Ve(C.mayor?"\u{1F3DB}\uFE0F Voc\xEA est\xE1 no Pal\xE1cio do Prefeito":C.lote?`\u{1F3E0} Seu terreno #${C.numero}`:"\u{1FAA7} Terreno livre sugerido pra voc\xEA"),Ft()}var os="",Uh=null;function ob(){clearInterval(Uh),Uh=setInterval(Xh,250)}function jc(){if(!K?.player||K.driving||K.mode!=="follow")return[];let n=K.nearest(K.playerPos||K.player.position),e=[];if(n.trash&&n.trash.d<3.4&&e.push({id:"trash",k:n.trash.k,cls:"trash",t:"\u{1F9F9} Limpar lixo",s:`-${Yc}\u26A1 \u2022 +8 XP`}),n.lot&&n.lot.d<9.6){let t=C.lote?.idx===n.lot.idx,i=ad()[n.lot.idx];if(t&&C.lote.stage<4){let a=Ha[C.lote.stage];e.push({id:"build",cls:"build",t:`${a.emoji} Construir ${a.nome}`,s:`${ht(a.preco)} \u2022 +${a.xp} XP`})}else!t&&!i&&!C.lote&&!C.mayor&&e.push({id:"claim",idx:n.lot.idx,cls:"claim",t:"\u{1FAA7} Reivindicar terreno",s:"gr\xE1tis \u2022 vira seu"})}return e.length<2&&n.canPlant&&e.push({id:"plant",cls:"plant",t:"\u{1F333} Plantar \xE1rvore",s:`${ht(ns)} \u2022 +15 XP`}),e.length<2&&n.block&&!n.special&&!K.isPaved(n.block)&&e.push({id:"pave",key:n.block,cls:"pave",t:"\u{1F9F1} Pavimentar cal\xE7ada",s:`${ht(as)} \u2022 +20 XP`}),e}function Xh(){let n=ge("#ctxrow");if(!n)return;let e=document.querySelector(".modal")?[]:jc(),t=e.map(i=>i.id+(i.k??i.idx??i.key??"")+i.t).join("|");t!==os&&(os=t,n.innerHTML=e.map((i,a)=>`<button class="ctx ${i.cls}" data-i="${a}">${i.t}<small>${i.s}</small></button>`).join(""),n.querySelectorAll(".ctx").forEach(i=>i.onclick=()=>Jh(e[+i.dataset.i],i)))}function Jh(n,e){let t=K.playerPos||K.player.position;if(n.id==="trash"){let i=hs();if(i<Yc)return Ve("\u26A1 Sem energia pra limpar agora");Nr(i-Yc),K.clearTrash(n.k),C.city.cleaned.push(n.k),C.stats.trash++,at("pop"),nn(C.prof==="gari"?10:5,8,e),Bi("trash")}else if(n.id==="claim")C.lote={idx:n.idx,stage:0,ts:Date.now()},K.setLot(n.idx,Rr(),!0),at("build"),wi(),Ve("\u{1FAA7} Terreno \xE9 seu! Agora construa o \u{1FAA8} Alicerce (R$ 100).",5e3),nn(0,10,e);else if(n.id==="build"){let i=Ha[C.lote.stage];if(C.dinheiro<i.preco)return Ve(`\u{1F4B8} Faltam ${ht(i.preco-C.dinheiro)}. Bora TRABALHAR! \u{1F4AA}`);C.dinheiro-=i.preco,C.lote.stage++,C.stats.builds++,K.setLot(C.lote.idx,Rr(),!0),at("build"),nn(0,i.xp,e),Bi("build"),C.lote.stage>=4?(wi(),K.setVehicle(ps(),Ja()),ja(()=>sd("\u{1F3E0}","Sua casa est\xE1 pronta!","A \u{1F697} garagem foi liberada na Loja. E agora voc\xEA pode fazer reformas: sobrado, piscina, mans\xE3o\u2026"))):Ve(`${i.emoji} ${i.nome} pronto! Pr\xF3xima etapa: ${Ha[C.lote.stage].emoji} ${Ha[C.lote.stage].nome} (${ht(Ha[C.lote.stage].preco)})`,4e3)}else if(n.id==="plant"){if(C.dinheiro<ns)return Ve(`\u{1F4B8} Uma muda custa ${ht(ns)}`);C.dinheiro-=ns;let a=(C.side==="norte"?["palm","ipe","oak"]:["oak","pine","ipe"])[C.city.trees.length%3],r=+t.x.toFixed(1),o=+t.z.toFixed(1);K.plantTree(r,o,a),C.city.trees.push([r,o,a]),C.stats.trees++,at("pop"),nn(0,15,e),Bi("tree")}else if(n.id==="pave"){if(C.dinheiro<as)return Ve(`\u{1F4B8} Pavimentar custa ${ht(as)}`);C.dinheiro-=as,K.paveBlock(n.key),C.city.paved.push(n.key),C.stats.paved++,at("build"),nn(0,20,e),Bi("pave")}os="",it(),Qn(),bs(),Ft()}function Kc(n,e,t,i){let a=ge(i)?.getBoundingClientRect(),r=t?.getBoundingClientRect?.()||{left:innerWidth/2,top:innerHeight/2,width:0,height:0},o=document.createElement("div");o.className="fx",o.textContent=n,o.style.color=e,o.style.left=r.left+r.width/2-30+"px",o.style.top=r.top-10+"px",document.body.appendChild(o),requestAnimationFrame(()=>requestAnimationFrame(()=>{a&&(o.style.transform=`translate(${a.left-r.left-r.width/2+30}px,${a.top-r.top+10}px) scale(.6)`),o.style.opacity="0.2"})),setTimeout(()=>o.remove(),950)}function nn(n,e,t){if(n&&(C.dinheiro+=n,Kc(`\u{1FA99}+${ut(n)}`,"#ffc425",t,"#h-money"),at("coin")),e){let i=(C.side==="norte",1*(C.city.obras.includes("escola")?1.05:1));e=Math.round(e*i),C.xp+=e,Kc(`+${e} XP`,"#2f80ed",t,"#h-xp")}it(),setTimeout(()=>{Ft(),ld()},600)}var xs=[],ss=!1;function ja(n){ss||(xs.push(n),document.querySelector(".modal")||setTimeout(Br,50))}function Br(){if(document.querySelector(".modal"))return;let n=xs.shift();n&&(n(),document.querySelector(".modal")||setTimeout(Br,300))}function ld(){let n=rn(C.xp);if(n>(C.lvSeen||1)){let e=C.lvSeen;C.lvSeen=n,it();for(let t=e+1;t<=n;t++)ja(()=>Zh(t))}}var tn=null;function cd(n){let e=cs(n||C.prof),t=hs();if(t<Er){let o=Math.ceil((Er-t)*Hh);return Ve(`\u26A1 Sem energia! Recarrega em ${o}s. Enquanto isso, limpe a cidade ou fa\xE7a miss\xF5es.`)}Nr(t-Er),it(),ui(`<div class="mg"><div class="mg-head"><div class="mgt"><span style="font-size:30px">${e.emoji}</span><div><b>${e.nome}</b><small>\u{1F3AE} ${Yn[e.mg]}</small></div></div><div class="mgs"><span id="mg-s">0</span><span class="tm" id="mg-t">--</span></div></div>
    <div class="mg-hint" id="mg-hint"></div><div class="mg-area" id="mg-area"></div><button class="btn link" id="mg-quit" style="color:#64748b;margin-top:4px">Desistir</button></div>`,"mgm nox");let i=ge("#mg-area"),a=!1,r={area:i,prof:e,sfx:at,hint:o=>ge("#mg-hint").textContent=o,score:o=>{let s=ge("#mg-s");s&&(s.textContent=o)},time:o=>{let s=ge("#mg-t");s&&(s.textContent=o>0?o.toFixed(1)+"s":"\u23F1\uFE0F")},float:(o,s,l,d)=>{let c=document.createElement("div");c.className="mgfloat",c.textContent=l,c.style.left=Math.max(0,Math.min(i.clientWidth-120,o))+"px",c.style.top=Math.max(0,s)+"px",c.style.color=d,i.appendChild(c),setTimeout(()=>c.remove(),900)},end:o=>{a||(a=!0,tn=null,setTimeout(()=>lb(e,Math.max(0,Math.min(1,o))),450))}};tn=wh[e.mg](r),ge("#mg-quit").onclick=()=>{tn?.destroy(),tn=null,a=!0,wt(),Ve("Tudo bem, a energia foi gasta mas amanh\xE3 tem mais \u{1F609}")},window.__mg={win:()=>tn?.win(),hitAll:()=>tn?.win()}}function sb(n){return n>=.9?3:n>=.65?2:n>=.35?1:0}function lb(n,e){let t=sb(e),i=.4+.6*e,a=Math.round(n.salario*i*rd()),r=Math.round(n.xp*i)+t*3,o=0;C.side==="norte"&&(o=Math.round(a*.2),a-=o,r=Math.round(r*1.15),C.stats.reputacao+=Math.max(1,Math.round(o/6)),Lr(o*3,!0)),C.mayor&&(C.city.caixa+=Math.round(a*.5)),t===3&&C.stats.perfeitos++,C.stats.totalWorks++,C.stats.ganhos+=a,it();let s=["\u{1F62C} Foi dif\xEDcil hoje","\u{1F642} Deu pro gasto","\u{1F44D} Mandou bem!","\u{1F31F} PERFEITO!"][t];ui(`<div class="result"><div class="stars">${[0,1,2].map(d=>`<i data-i="${d}">\u2B50</i>`).join("")}</div><div class="nota">${s}</div>
    <div class="gains"><div class="gm">\u{1FA99} +${ut(a)}</div><div class="gx">\u{1F4A0} +${r} XP</div></div>
    ${C.side==="norte"?`<p class="sub">\u{1F91D} ${ht(o)} foi pra obra da cidade \u2022 \u{1F33F} +15% XP do Norte</p>`:'<p class="sub">\u{1F4BC} No Sul voc\xEA fica com 100% do sal\xE1rio.</p>'}
    <button class="btn primary" id="again">Trabalhar de novo (-${Er}\u26A1)</button><button class="btn ghost" id="mok">Voltar pra cidade</button></div>`,"nox"),Jt.querySelectorAll(".stars i").forEach((d,c)=>setTimeout(()=>{d.classList.add(c<t?"on":"off"),c<t&&at("star")},300+c*320)),t===3&&setTimeout(wi,1200);let l=d=>{let u=ge(".gains")?.getBoundingClientRect();wt(!0);let f={getBoundingClientRect:()=>u||{left:innerWidth/2,top:innerHeight/2,width:0,height:0}};nn(a,0,f),C.xp+=r,Kc(`+${r} XP`,"#2f80ed",f,"#h-xp"),Bi("work"),Bi("earn",a),t===3&&Bi("stars3"),it(),bs(),setTimeout(()=>{Ft(),ld(),d&&!xs.length?cd():Br()},700)};ge("#mok").onclick=()=>l(!1),ge("#again").onclick=()=>l(!0)}function Zh(n){let e=Va.filter(i=>i.nivel===n),t=n*100;C.dinheiro+=t,Nr(us()),it(),wi(),at("level"),ui(`<div class="lvup"><div class="rays"></div><div class="lvnum">N\xCDVEL ${n}</div><h2>Voc\xEA subiu de n\xEDvel!</h2>
    <div class="rewards"><div>\u{1FA99} +${ut(t)}</div><div>\u26A1 Energia cheia</div><div>\u{1F3A8} Novo visual</div></div>
    ${e.length?`<p class="sub"><b>${e.length} profiss\xF5es desbloqueadas</b>, cada uma com seu minigame:</p><div class="unl">${e.map(i=>`<button class="u" data-p="${i.id}"><span>${i.emoji}</span><b>${i.nome}</b><small>\u{1F3AE} ${Yn[i.mg]}${i.raro?" \u2022 raro":""}</small></button>`).join("")}</div>`:""}
    <button class="btn primary" id="mok">Ver carreiras</button><button class="btn ghost" id="mclose">Continuar</button></div>`,"lvm nox"),ge("#mok").onclick=()=>{wt(!0),dd()},ge("#mclose").onclick=()=>wt(),Jt.querySelectorAll(".unl .u").forEach(i=>i.onclick=()=>Yh(i.dataset.p)),Ft()}function Yh(n){if(C.mayor&&n!=="prefeito")return Ve("\u{1F451} O prefeito trabalha pela cidade: sua profiss\xE3o \xE9 Prefeito.");let e=cs(n),t=rn(C.xp);if(e.nivel>t)return Ve(`\u{1F512} Chegue ao n\xEDvel ${e.nivel} pra desbloquear.`);if(!$h(e))return Ve(`\u{1F512} T\xEDtulo raro! Requisito: ${e.req.texto} (${Math.min(nd(e),e.req.valor)}/${e.req.valor})`);C.prof=n,it(),wt(),ms(),Ft(),Ve(`${e.emoji} Agora voc\xEA \xE9 ${e.nome}! Minigame: ${Yn[e.mg]}`)}function dd(){let n=rn(C.xp),e=`<h2>\u{1F4C8} Carreiras</h2><p class="sub">N\xEDvel <b>${n}</b>. Cada profiss\xE3o tem um minigame diferente.${C.mayor?" <br>\u{1F451} Como prefeito, sua profiss\xE3o \xE9 fixa.":""}</p><div class="tree">`;for(let t=1;t<=yr;t++){e+=`<div class="tlevel ${t<=n?"open":"locked"}"><div class="tl-h"><span>N\xEDvel ${t}</span><small>${t===1?"in\xEDcio":t<=n?"desbloqueado":ut(en[t-1])+" XP"}</small></div><div class="tl-row">`;for(let i of Va.filter(a=>a.nivel===t)){let a=t>n||!$h(i),r=C.prof===i.id;e+=`<button class="tnode ${a?"lock":""} ${r?"cur":""} ${i.raro?"raro":""}" data-p="${i.id}"><span class="pe">${i.emoji}${a?"<sup>\u{1F512}</sup>":""}</span><b>${i.nome}</b><small>\u{1F4B5} ${ht(i.salario)} \u2022 \u{1F3AE} ${Yn[i.mg]}</small>${i.req?`<em>${i.req.texto}${t<=n?" ("+Math.min(nd(i),i.req.valor)+"/"+i.req.valor+")":""}</em>`:""}${r?"<i>ATUAL</i>":""}</button>`}e+="</div></div>"}ui(e+'</div><button class="btn primary" id="mok">Fechar</button>',"wide"),ge("#mok").onclick=()=>wt(),setTimeout(()=>document.querySelector(".tnode.cur")?.scrollIntoView({block:"center"}),50),document.querySelectorAll(".tnode").forEach(t=>t.onclick=()=>Yh(t.dataset.p))}function ud(){let n=Xa();if(C.missions?.day===n)return;let e=ti(Pr(n+C.handle)),t=Jn.filter(a=>!(a.id==="build1"&&(C.mayor||(C.lote?.stage||0)>=4))),i=[];for(;i.length<3&&t.length;){let a=Math.floor(e()*t.length);i.push({id:t[a].id,p:0,claimed:!1}),t.splice(a,1)}i.some(a=>a.id==="work3")||(i[0]={id:"work3",p:0,claimed:!1}),C.missions={day:n,list:i},it()}function Bi(n,e=1){ud();for(let t of C.missions.list){let i=Jn.find(a=>a.id===t.id);i.ev!==n||t.p>=i.meta||(t.p=Math.min(i.meta,t.p+e),t.p>=i.meta&&(at("combo"),Ve(`\u2705 Miss\xE3o completa: ${i.txt}! Resgate em \u{1F4CB} Miss\xF5es`,4e3)))}n==="obra"&&C.stats.obras++,it()}function cb(){let n=Xa();if(C.login.last===n)return;let e=new Date;e.setDate(e.getDate()-1),C.login.streak=C.login.last===Xa(e)?C.login.streak+1:1,C.login.last=n,it(),ja(()=>ta("login"))}function db(){let n=Xa();if(C.login.claimed===n)return;let e=(C.login.streak-1)%7,t=kc[e];C.login.claimed=n,t.en&&Nr(us());let i=ge("#claimlogin");nn(t.$||0,t.xp||0,i),at("combo"),wi(),bs(),ta("login")}function bs(n){for(let e of es)!C.conq.includes(e.id)&&e.ok(C)&&(C.conq.push(e.id),n||(at("star"),Ve(`\u{1F3C5} Conquista: ${e.emoji} ${e.nome}!`,3500)));it()}function ta(n="mis"){ud();let e=Xa(),t=`<div class="tabs"><button class="tab ${n==="mis"?"on":""}" data-t="mis">\u{1F4CB} Miss\xF5es do dia</button><button class="tab ${n==="login"?"on":""}" data-t="login">\u{1F525} Sequ\xEAncia</button><button class="tab ${n==="conq"?"on":""}" data-t="conq">\u{1F3C5} Conquistas</button></div>`,i="";if(n==="mis"&&(i=`<p class="sub">3 miss\xF5es novas todo dia (renovam \xE0 meia-noite).</p><div class="mis">${C.missions.list.map((r,o)=>{let s=Jn.find(d=>d.id===r.id),l=r.p>=s.meta;return`<div class="mi ${l?"done":""} ${r.claimed?"claimed":""}"><div class="mic">${["\u{1F3AF}","\u2B50","\u{1F9F9}","\u{1F333}","\u{1F9F1}","\u{1F3D7}\uFE0F","\u{1F4B5}","\u{1F6E3}\uFE0F"][Jn.indexOf(s)]||"\u{1F3AF}"}</div><div class="mb"><b>${s.txt}</b><small>Pr\xEAmio: ${ht(s.r.$)} + ${s.r.xp} XP</small><div class="pb"><i style="width:${r.p/s.meta*100}%"></i></div><small>${s.id==="earn400"?ht(r.p)+" / "+ht(s.meta):r.p+"/"+s.meta}</small></div>${l&&!r.claimed?`<button data-claim="${o}">Resgatar</button>`:r.claimed?"\u2705":""}</div>`}).join("")}</div>`),n==="login"){let r=(C.login.streak-1)%7+1,o=C.login.claimed===e;i=`<p class="sub">Entre todo dia e ganhe pr\xEAmios maiores. Sequ\xEAncia atual: <b>\u{1F525} ${C.login.streak} dia${C.login.streak>1?"s":""}</b></p><div class="days">${kc.map(s=>`<div class="day ${s.d<r||s.d===r&&o?"got":""} ${s.d===r&&!o?"today":""}"><b>Dia ${s.d}</b><span>${s.d<r||s.d===r&&o?"\u2705":s.d===7?"\u{1F3C6}":s.en&&!s.$?"\u26A1":"\u{1F4B0}"}</span>${s.txt}</div>`).join("")}</div>${o?'<p class="sub">\u2705 Pr\xEAmio de hoje resgatado. Volte amanh\xE3!</p>':`<button class="btn primary" id="claimlogin">\u{1F381} Resgatar pr\xEAmio do dia ${r}</button>`}`}n==="conq"&&(i=`<p class="sub">${C.conq.length}/${es.length} desbloqueadas</p><div class="achs">${es.map(r=>`<div class="ach ${C.conq.includes(r.id)?"":"lock"}"><span>${r.emoji}</span><b>${r.nome}</b><small>${r.txt}</small></div>`).join("")}</div>`),ui(`<h2>\u{1F4CB} Todo dia tem pr\xEAmio</h2>${t}${i}<button class="btn ghost" id="mok">Fechar</button>`,"wide"),ge("#mok").onclick=()=>wt(),Jt.querySelectorAll("[data-t]").forEach(r=>r.onclick=()=>ta(r.dataset.t)),Jt.querySelectorAll("[data-claim]").forEach(r=>r.onclick=()=>{let o=C.missions.list[+r.dataset.claim],s=Jn.find(l=>l.id===o.id);o.claimed=!0,nn(s.r.$,s.r.xp,r),wi(),at("combo"),ta("mis")});let a=ge("#claimlogin");a&&(a.onclick=db)}function Dr(n="veiculos"){let e={veiculos:"\u{1F697} Ve\xEDculos",casas:"\u{1F3E0} Casas",roupas:"\u{1F455} Roupas",premium:"\u{1F48E} Premium"},t="",i="";for(let a of An[n]){let r=C.inventario.includes(a.id),o=C.casa===a.id||C.veiculo===a.id||C.roupa===a.id||C.chapeu===a.id,s=a.emoji||(a.tipo==="camisa"?`<i class="sw" style="background:${a.cor}"></i>`:{bone:"\u{1F9E2}",palha:"\u{1F452}",coroa:"\u{1F451}"}[a.modelo]),l=n==="veiculos"&&a.casa&&!Nh()||n==="casas"&&a.preco>0&&(C.mayor||(C.lote?.stage||0)<4),d;a.premium||n==="premium"?d=`<button class="btn pix" data-pix="${a.id}">Pix R$ ${a.pix.toFixed(2).replace(".",",")}</button><small class="soon">em breve</small>`:o?d='<button class="btn ok" disabled>\u2714 Usando</button>':r?d=`<button class="btn ghost" data-eq="${a.id}">Usar</button>`:l?d=`<button class="btn buy poor" data-lock="1">\u{1F512} ${a.preco?ht(a.preco):""}</button>`:d=`<button class="btn buy ${C.dinheiro>=a.preco?"":"poor"}" data-buy="${a.id}">${a.preco?ht(a.preco):"Gr\xE1tis"}</button>`,t+=`<div class="item ${a.premium||n==="premium"?"prem":""}"><div class="ii">${s}</div><b>${a.nome}</b><small>${a.desc}</small>${l?`<span class="lockcar">${n==="veiculos"?"\u{1F3E0} Termine sua casa pra liberar":C.mayor?"\u{1F3DB}\uFE0F Voc\xEA mora no Pal\xE1cio":"\u{1F3E0} Termine sua casa primeiro"}</span>`:""}${d}</div>`}n==="veiculos"&&(i=Nh()?'<div class="note">\u{1F697} Garagem liberada! Carros b\xE1sicos com dinheiro do jogo. Esportivos via Pix chegam <b>em breve</b>.</div>':'<div class="note">\u{1F6A7} A cidade come\xE7a <b>sem carros</b>. Construa sua casa at\xE9 o \u2728 Acabamento pra liberar a garagem. A \u{1F6B2} bike j\xE1 pode!</div>'),n==="premium"&&(i='<div class="note">\u{1F48E} Itens opcionais via Pix. <b>Pagamento em breve</b>: nesta vers\xE3o de teste nada \xE9 cobrado. Tudo que faz subir de n\xEDvel continua gr\xE1tis.</div>'),ui(`<h2>\u{1F6CD}\uFE0F Loja</h2><div class="money-line">Seu saldo: <b>${ht(C.dinheiro)}</b></div><div class="tabs">${Object.entries(e).map(([a,r])=>`<button class="tab ${a===n?"on":""}" data-tab="${a}">${r}</button>`).join("")}</div>${i}<div class="items">${t}</div><button class="btn primary" id="mok">Fechar</button>`,"wide"),ge("#mok").onclick=()=>wt(),Jt.querySelectorAll(".tab").forEach(a=>a.onclick=()=>Dr(a.dataset.tab)),Jt.querySelectorAll("[data-buy]").forEach(a=>a.onclick=()=>ub(n,a.dataset.buy,a)),Jt.querySelectorAll("[data-eq]").forEach(a=>a.onclick=()=>{jh(n,a.dataset.eq),Dr(n)}),Jt.querySelectorAll("[data-lock]").forEach(a=>a.onclick=()=>Ve(n==="veiculos"?"\u{1F3E0} Termine as 4 etapas da sua casa pra liberar a garagem.":"\u{1F3E0} Termine sua casa primeiro.")),Jt.querySelectorAll("[data-pix]").forEach(a=>a.onclick=()=>Ve("\u{1F48E} Pagamento via Pix chega em breve! Nesta vers\xE3o de teste nada \xE9 cobrado.",4e3))}function ub(n,e,t){let i=An[n].find(a=>a.id===e);if(C.dinheiro<i.preco)return Ve(`Faltam ${ht(i.preco-C.dinheiro)}. Bora trabalhar! \u{1F4AA}`);C.dinheiro-=i.preco,C.inventario.push(e),jh(n,e),wi(),at("coin"),Ve(`\u{1F389} Voc\xEA comprou: ${i.nome}!`),Dr(n)}function jh(n,e){n==="casas"&&(C.casa=e,C.lote&&K.setLot(C.lote.idx,Rr(),!0)),n==="veiculos"&&(K.driving&&K.toggleDrive(),C.veiculo=e,K.setVehicle(ps(),Ja()),K.vehicleSpeed=An.veiculos.find(t=>t.id===e).vel||2.6),n==="roupas"&&(An.roupas.find(i=>i.id===e).tipo==="camisa"?C.roupa=e:C.chapeu=C.chapeu===e?null:e,ms()),it(),Ft()}function Oh(){let n=vs();if(!n)return'<div class="obra"><b>\u{1F389} Todas as obras da cidade foram conclu\xEDdas!</b></div>';let e=C.city.obra.prog/n.meta*100;return`<div class="obra"><div class="ob-h"><span class="pe">${n.emoji}</span><div><b>Obra atual: ${n.nome}</b><small>Escolhida pelo prefeito @${Zn} \u2022 ${n.efeito}</small></div></div><div class="bar big"><i style="width:${e}%"></i><span>${ut(C.city.obra.prog)} / ${ut(n.meta)}</span></div><small>Obras entregues: <b>${C.city.obras.length}</b> \u2022 B\xF4nus de sal\xE1rio: <b>+${Math.round((rd()-1)*100)}%</b> \u2022 Sua reputa\xE7\xE3o: <b>${C.stats.reputacao}</b></small></div>`}function wr(){gs();let n;C.side==="norte"?n=`<h2>\u{1F91D} Mutir\xE3o do Norte</h2><p class="sub">20% de cada sal\xE1rio vai pra obra da cidade. Quando ela termina, todo mundo ganha b\xF4nus.</p>${Oh()}<button class="btn primary" id="mut">\u{1F3D7}\uFE0F Ajudar na obra (-15\u26A1 \u2022 +40 XP \u2022 +12 reputa\xE7\xE3o)</button><div class="note">\u{1F4B0} Renda da Cooperativa: <b>${ht(1.5*rn(C.xp)+3*C.city.obras.length)}/min</b></div>`:n=`<h2>\u{1F3EA} Neg\xF3cios do Sul</h2><p class="sub">Neg\xF3cios rendem dinheiro por minuto, mesmo com o jogo fechado (at\xE9 2h).</p><div class="items">${Qo.map(i=>`<div class="item"><div class="ii">${i.emoji}</div><b>${i.nome} ${C.negocios[i.id]?"\xD7"+C.negocios[i.id]:""}</b><small>Rende ${ht(i.renda)}/min</small><button class="btn buy ${C.dinheiro>=i.preco?"":"poor"}" data-neg="${i.id}">${ht(i.preco)}</button></div>`).join("")}</div>${Oh()}<button class="btn primary" id="pat">\u{1F91D} Patrocinar a obra com ${ht(200)} (+10 reputa\xE7\xE3o)</button>`,ui(n+'<button class="btn ghost" id="mok">Fechar</button>',"wide"),ge("#mok").onclick=()=>wt();let e=ge("#mut");e&&(e.onclick=()=>{if(!C.city.obra)return;let i=hs();if(i<15)return Ve("\u26A1 Energia insuficiente");Nr(i-15),C.stats.reputacao+=12,Lr(450,!0),Bi("obra"),nn(0,40,e),at("build"),wr()});let t=ge("#pat");t&&(t.onclick=()=>{if(C.city.obra){if(C.dinheiro<200)return Ve("Saldo insuficiente");C.dinheiro-=200,C.stats.reputacao+=10,Lr(600,!0),Bi("obra"),it(),at("build"),Ve("\u{1F91D} Obrigado pelo patroc\xEDnio!"),wr(),Ft()}}),Jt.querySelectorAll("[data-neg]").forEach(i=>i.onclick=()=>{let a=Qo.find(r=>r.id===i.dataset.neg);if(C.dinheiro<a.preco)return Ve(`Faltam ${ht(a.preco-C.dinheiro)}`);C.dinheiro-=a.preco,C.negocios[a.id]=(C.negocios[a.id]||0)+1,it(),wi(),at("coin"),Ve(`${a.emoji} ${a.nome} aberto!`),wr(),Ft()})}function jn(){gs();let n=fs(),e=an(n.total),t=vs(),i=K.trash.length,a=(s,l)=>Math.max(0,(C.city.decretos[s]||0)+l*6e4-Date.now()),r=s=>Math.ceil(s/6e4)+" min";ui(`<div class="gabh"><span class="gi">\u{1F3DB}\uFE0F</span><div><b>Gabinete do Prefeito</b><small>\u{1F451} @${Ei(C.handle)} \u2022 ${Ei(C.cidade)} - ${C.uf}</small></div></div>
    <div class="gstats"><div><b>${zt[e].emoji}</b><small>${zt[e].nome}</small></div><div><b>${ut(n.total)}</b><small>pontos</small></div><div><b>${ut(Wh())}</b><small>moradores</small></div>
      <div><b>${n.houses}</b><small>casas prontas</small></div><div><b>${i}</b><small>lixos na rua</small></div><div><b>${C.city.trees.length}</b><small>\xE1rvores</small></div>
      <div><b>${C.city.paved.length}</b><small>cal\xE7adas</small></div><div><b>${C.city.obras.length}/${Ga.length}</b><small>obras</small></div><div><b style="color:#15803d">${ht(C.city.caixa)}</b><small>caixa da prefeitura</small></div></div>
    <h3>\u{1F3D7}\uFE0F Obras da cidade</h3><div class="olist">${Ga.map(s=>{let l=C.city.obras.includes(s.id),d=t?.id===s.id;return`<div class="oitem ${l?"done":""} ${d?"cur":""}"><span>${s.emoji}</span><div class="ob"><b>${s.nome} ${l?"\u2705":d?`\u2022 ${Math.floor(C.city.obra.prog/s.meta*100)}%`:""}</b><small>${s.efeito} \u2022 meta ${ut(s.meta)}</small></div>${!l&&!d?`<button data-obra="${s.id}">Lan\xE7ar</button>`:""}</div>`}).join("")}</div>
    ${t?`<button class="btn primary" id="invest" ${C.city.caixa<1e3?"disabled":""}>\u{1F4B0} Investir ${ht(1e3)} do caixa em ${t.nome}</button>`:""}
    <h3>\u{1F4DC} Decretos</h3><div class="decs">
      <button class="dec" id="d-limpa" ${a("limpa",20)?"disabled":""}><span>\u{1F9F9}</span><b>Mutir\xE3o de limpeza</b><small>${a("limpa",20)?"de novo em "+r(a("limpa",20)):"Recolhe 6 lixos agora"}</small></button>
      <button class="dec" id="d-arvore" ${a("arvore",30)?"disabled":""}><span>\u{1F333}</span><b>Dia da \xC1rvore</b><small>${a("arvore",30)?"de novo em "+r(a("arvore",30)):"Planta 4 \xE1rvores"}</small></button>
      <button class="dec" id="d-pave" ${C.city.caixa<800?"disabled":""}><span>\u{1F6E3}\uFE0F</span><b>Pavimentar quadra</b><small>${ht(800)} do caixa</small></button>
      <button class="dec" id="d-festa"><span>\u{1F389}</span><b>Festa na pra\xE7a</b><small>Anima os moradores</small></button></div>
    <button class="btn ghost" id="mok">Fechar</button>`,"wide gabm"),ge("#mok").onclick=()=>wt(),Jt.querySelectorAll("[data-obra]").forEach(s=>s.onclick=()=>{let l=Ga.find(c=>c.id===s.dataset.obra),d=C.city.obra?C.city.obra.prog:0;C.city.obra={id:l.id,prog:Math.min(d,l.meta*.9),ts:Date.now()},it(),od(),at("build"),Ve(`\u{1F3D7}\uFE0F Obra lan\xE7ada: ${l.emoji} ${l.nome}! Os moradores j\xE1 foram avisados.`),jn()});let o=ge("#invest");o&&(o.onclick=()=>{C.city.caixa-=1e3,Lr(1e3,!0),Bi("obra"),it(),at("coin"),jn()}),ge("#d-limpa").onclick=()=>{let s=K.trash.slice(0,6).map(l=>l.k);s.forEach(l=>{K.clearTrash(l),C.city.cleaned.push(l)}),C.city.decretos.limpa=Date.now(),it(),at("combo"),Ve(`\u{1F9F9} Decreto assinado: ${s.length} lixos recolhidos!`),Qn(),jn()},ge("#d-arvore").onclick=()=>{var c;let s={};for(let u of K.lots)s[c=u.key]||(s[c]={x:0,z:0,n:0}),s[u.key].x+=u.x/4,s[u.key].z+=u.z/4;let l=0,d=C.side==="norte"?"palm":"oak";for(let u of Object.values(s)){if(l>=4)break;let f=+(u.x+(l%2?1.2:-1.2)).toFixed(1),p=+u.z.toFixed(1);K.nearest({x:f,z:p}).canPlant&&(K.plantTree(f,p,d),C.city.trees.push([f,p,d]),l++)}C.city.decretos.arvore=Date.now(),it(),at("combo"),Ve(`\u{1F333} Dia da \xC1rvore: ${l} \xE1rvores plantadas!`),Qn(),jn()},ge("#d-pave").onclick=()=>{let s=[];for(let d=0;d<6;d++)for(let c=0;c<6;c++)s.push(`${d},${c}`);let l=s.find(d=>!K.isPaved(d)&&!["2,2","3,2","2,3","4,1"].includes(d));if(!l)return Ve("Todas as cal\xE7adas j\xE1 est\xE3o prontas!");C.city.caixa-=800,K.paveBlock(l),C.city.paved.push(l),it(),at("build"),Ve("\u{1F6E3}\uFE0F Quadra pavimentada!"),Qn(),jn()},ge("#d-festa").onclick=()=>{wi(),at("level"),Ve("\u{1F389} Festa na pra\xE7a! Os moradores adoraram.")}}function Kh(){let n=ds(Date.UTC(2026,10,6,12)),e=ti(42),t=["S\xE3o Paulo","Rio de Janeiro","Fortaleza","Salvador","Recife","Curitiba","Manaus","Belo Horizonte","Porto Alegre","Bel\xE9m","Goi\xE2nia","Florian\xF3polis","Natal","Campinas","Jo\xE3o Pessoa","Macei\xF3","Feira de Santana","Joinville"],i={"S\xE3o Paulo":"SP","Rio de Janeiro":"RJ",Fortaleza:"CE",Salvador:"BA",Recife:"PE",Curitiba:"PR",Manaus:"AM","Belo Horizonte":"MG","Porto Alegre":"RS",Bel\u00E9m:"PA",Goi\u00E2nia:"GO",Florian\u00F3polis:"SC",Natal:"RN",Campinas:"SP","Jo\xE3o Pessoa":"PB",Macei\u00F3:"AL","Feira de Santana":"BA",Joinville:"SC"},a=["CE","BA","PE","AM","PA","RN","PB","AL"];return t.filter(r=>!C||r!==C.cidade).map((r,o)=>{let s=9e3/(1+o*.45)*(.7+e()*.5),l=Math.round(s*Math.min(1,.06+n*.0025)+Math.sin(n/3+o)*40);return{c:r,uf:i[r],score:l,side:a.includes(i[r])?"norte":"sul",mor:Math.round(l*2.2+300)}})}function ls(n="cidades"){let e=`<div class="tabs"><button class="tab ${n==="cidades"?"on":""}" data-t="cidades">\u{1F3D9}\uFE0F Cidades</button><button class="tab ${n==="ns"?"on":""}" data-t="ns">\u{1F334} Norte x Sul \u{1F3D9}\uFE0F</button><button class="tab ${n==="ricos"?"on":""}" data-t="ricos">\u{1F4B0} Mais ricos</button></div>`,t="",i=fs(),a=an(i.total);if(n==="cidades"){let r=[...Kh(),{c:C.cidade,uf:C.uf,score:i.total,side:C.side,mor:Wh(),me:!0}].sort((s,l)=>l.score-s.score),o=zt[a+1];t=`<div class="stagebox"><div style="display:flex;gap:12px;align-items:center"><span class="big">${zt[a].emoji}</span><div><small>Sua cidade</small><b>${Ei(C.cidade)} \u2022 ${zt[a].nome}</b><small>${ut(i.total)} pts${o?` \u2022 faltam ${ut(o.min-i.total)} pra ${o.emoji} ${o.nome}`:""}</small></div></div>
      <div class="stladder">${zt.map((s,l)=>`<i class="${l<=a?"on":""} ${l===a?"cur":""}" title="${s.nome}">${s.emoji}</i>`).join("")}</div>
      <small style="display:block;margin-top:8px">\u{1F3E0} casas ${ut(i.parts.casas)} \u2022 \u{1F9F9} limpeza ${ut(i.parts.limpeza)} \u2022 \u{1F333} \xE1rvores ${ut(i.parts.arvores)} \u2022 \u{1F9F1} cal\xE7adas ${ut(i.parts.calcadas)} \u2022 \u{1F3D7}\uFE0F obras ${ut(i.parts.obras)} \u2022 \u{1F465} moradores ${ut(i.parts.moradores)}</small></div>
      <ol class="crank">${r.map((s,l)=>`<li class="${s.me?"me":""}"><span class="pos">${l+1}</span><span style="font-size:22px">${zt[an(s.score)].emoji}</span><div class="ci"><b>${s.side==="norte"?"\u{1F334}":"\u{1F3D9}\uFE0F"} ${Ei(s.c)} - ${s.uf}${s.me?" (voc\xEA)":""}</b><small>${zt[an(s.score)].nome} \u2022 ${ut(s.mor)} moradores</small></div><div class="sc">${ut(s.score)}<small>pts</small></div></li>`).join("")}</ol>`}else if(n==="ns"){let r=Xc(),o=(s,l,d)=>{let c=l/(l+d)*100;return`<div class="srow"><div class="sl"><b>${ut(l)}</b><span>${s}</span><b>${ut(d)}</b></div><div class="sbar"><i class="n" style="width:${c}%"></i><i class="s" style="width:${100-c}%"></i></div></div>`};t=`<div class="vshead"><span class="n">\u{1F334} NORTE</span><span class="s">SUL \u{1F3D9}\uFE0F</span></div>${o("Moradores",r.moradores*r.norte*2/2,r.moradores*r.sul)}${o("Cidades evolu\xEDdas",r.cidades*r.norte,r.cidades*r.sul)}${o("Obras entregues",r.obras*(r.norte+.03),r.obras*(r.sul-.03))}`}else{let r=ti(Math.floor(Date.now()/36e5)),s=id(9,7).map((l,d)=>({n:l,v:Math.round(9e4/(d+1)*(.8+r()*.4)),s:d%3?"sul":"norte"}));s.push({n:C.handle,v:C.dinheiro,s:C.side,me:!0}),s.sort((l,d)=>d.v-l.v),t=`<ol class="rank">${(s.slice(0,10).some(l=>l.me)?s.slice(0,10):[...s.slice(0,9),s.find(l=>l.me)]).map(l=>`<li class="${l.me?"me":""}"><span>${l.s==="norte"?"\u{1F334}":"\u{1F3D9}\uFE0F"} @${Ei(l.n)}</span><b>${ht(l.v)}</b></li>`).join("")}</ol>`}ui(`<h2>\u{1F3C6} Ranking</h2>${e}${t}<p class="small" style="color:#64748b">Outras cidades e jogadores s\xE3o simulados nesta vers\xE3o de teste.</p><button class="btn primary" id="mok">Fechar</button>`,"wide"),ge("#mok").onclick=()=>wt(),Jt.querySelectorAll("[data-t]").forEach(r=>r.onclick=()=>ls(r.dataset.t))}function Qc(){let n=cs(C.prof),e=Sn[C.side];ui(`<h2>\u{1FAAA} Carteira de morador</h2><div class="carteira ${C.side}"><div class="ct-top"><span>\u{1F1E7}\u{1F1F7} ${Uc}</span><span>${C.mayor?"PREFEITO":"MORADOR"}</span></div>
    <div class="ct-body"><div class="ct-photo">${n.emoji}</div><div class="ct-info"><b>${C.mayor?"\u{1F451} ":""}${Ei(C.nome)}</b><span>@${Ei(C.handle)}</span>
    <div class="ct-grid"><div><small>${C.mayor?"Resid\xEAncia":"Casa n\xBA"}</small>${C.mayor?"Pal\xE1cio":"#"+C.numero}</div><div><small>Lado</small>${e.nome}</div><div><small>Cidade</small>${Ei(C.cidade)} - ${C.uf}</div><div><small>Profiss\xE3o</small>${n.nome}</div><div><small>N\xEDvel</small>${rn(C.xp)}</div><div><small>Desde</small>${new Date(C.criadoEm).toLocaleDateString("pt-BR")}</div></div></div></div><div class="ct-bar"></div></div>
    <button class="btn primary" id="mok">Fechar</button><button class="btn ghost" id="share">\u{1F4CB} Copiar texto pra compartilhar</button>`),ge("#mok").onclick=()=>wt(),ge("#share").onclick=()=>{navigator.clipboard?.writeText(`Sou ${C.mayor?"prefeito":"morador(a) #"+C.numero} de ${C.cidade} no ${Uc}, time ${Sn[C.side].nome}! N\xEDvel ${rn(C.xp)}. Bora deixar nossa cidade N\xEDvel Su\xED\xE7a? \u{1F1E7}\u{1F1F7}`),Ve("Texto copiado!")}}function hd(){let n=(e,t,i)=>`<button class="tab ${Pn[e]===t?"on":""}" data-k="${e}" data-v="${t}">${i}</button>`;ui(`<h2>\u2699\uFE0F Ajustes</h2><h3>Qualidade gr\xE1fica</h3><div class="tabs">${n("quality","alta","\u2728 Alta")}${n("quality","baixa","\u26A1 Baixa (celular leve)")}</div>
    <h3>Ciclo dia/noite</h3><div class="tabs">${n("dayNight",!1,"\u2600\uFE0F Sempre dia")}${n("dayNight",!0,"\u{1F319} Dia e noite")}</div>
    <h3>Som</h3><div class="tabs">${n("sound",!0,"\u{1F50A} Ligado")}${n("sound",!1,"\u{1F507} Desligado")}</div>
    <button class="btn primary" id="mok">Fechar</button><button class="btn ghost" id="exit">\u{1F3E0} Voltar pra p\xE1gina inicial</button><button class="btn link" id="reset" style="color:#b91c1c">Apagar meu morador deste aparelho</button>`),ge("#mok").onclick=()=>wt(),ge("#exit").onclick=nb,ge("#reset").onclick=()=>{confirm("Apagar todo o progresso salvo neste aparelho?")&&(localStorage.removeItem(td),location.href=location.pathname)},Jt.querySelectorAll("[data-k]").forEach(e=>e.onclick=()=>{let t=e.dataset.k,i=e.dataset.v==="true"?!0:e.dataset.v==="false"?!1:e.dataset.v;Pn[t]!==i&&(Pn[t]=i,localStorage.setItem(Vh,JSON.stringify(Pn)),t==="dayNight"&&K.setDayNight(i),t==="quality"&&(K.setQuality(i),Za(!0)),t==="sound"&&i&&at("coin"),hd())})}function hb(){ui(`<h2>\u2753 Como jogar</h2><div class="mis">
    <div class="mi"><div class="mic">\u{1F579}\uFE0F</div><div class="mb"><b>Ande pela cidade</b><small>Joystick (ou WASD). Arraste a tela pra girar a c\xE2mera.</small></div></div>
    <div class="mi"><div class="mic">\u{1F4BC}</div><div class="mb"><b>Trabalhe</b><small>Cada profiss\xE3o \xE9 um minigame. Mais estrelas = mais dinheiro e XP.</small></div></div>
    <div class="mi"><div class="mic">\u{1FAA7}</div><div class="mb"><b>Reivindique um terreno</b><small>Chegue perto de um terreno livre e construa em 4 etapas.</small></div></div>
    <div class="mi"><div class="mic">\u{1F9F9}</div><div class="mb"><b>Arrume a cidade</b><small>Limpe lixo, plante \xE1rvores e pavimente cal\xE7adas: tudo soma pontos.</small></div></div>
    <div class="mi"><div class="mic">\u{1F3C6}</div><div class="mb"><b>Suba a cidade</b><small>Vila \u279C Cidade Comum \u279C \u2026 \u279C N\xEDvel Su\xED\xE7a \u279C Jap\xE3o \u279C EUA \u279C Grande Pot\xEAncia.</small></div></div></div><button class="btn primary" id="mok">Entendi</button>`),ge("#mok").onclick=()=>wt()}function ui(n,e=""){wt(!0);let t=document.createElement("div");t.className="modal "+e,t.innerHTML=`<div class="mbox">${e.includes("nox")?"":'<button class="mx" aria-label="Fechar">\u274C</button>'}${n}</div>`,Jt.appendChild(t),e.includes("nox")||(t.addEventListener("pointerdown",i=>{i.target===t&&wt()}),t.querySelector(".mx").onclick=()=>wt()),Xh()}function wt(n){tn&&!n&&(tn.destroy(),tn=null),Jt.querySelectorAll(".modal").forEach(e=>e.remove()),n||(C?.hudReady&&Ft(),setTimeout(Br,200))}var kh;function Ve(n,e=3e3){let t=ge("#toast");t.textContent=n,t.classList.add("show"),clearTimeout(kh),kh=setTimeout(()=>t.classList.remove("show"),e)}function wi(){if(ss)return;let n=ge("#confetti");for(let e=0;e<60;e++){let t=document.createElement("i");t.style.left=Math.random()*100+"vw",t.style.background=["#2fb14b","#ffc425","#2f80ed","#ec4b47","#ffffff"][e%5],t.style.animationDelay=Math.random()*.5+"s",t.style.transform=`rotate(${Math.random()*360}deg)`,n.appendChild(t),setTimeout(()=>t.remove(),2600)}}var Ni={};addEventListener("keydown",n=>{n.target.tagName==="INPUT"||!K||(Ni[n.key.toLowerCase()]=!0,Qh())});addEventListener("keyup",n=>{Ni[n.key.toLowerCase()]=!1,Qh()});function Qh(){Ms||!K||(K.input.x=(Ni.d||Ni.arrowright?1:0)-(Ni.a||Ni.arrowleft?1:0),K.input.z=(Ni.s||Ni.arrowdown?1:0)-(Ni.w||Ni.arrowup?1:0))}var Ya=ge("#joy"),ef=ge("#knob"),Ms=!1,tf=null;Ya.addEventListener("pointerdown",n=>{Ms=!0,tf=n.pointerId,Ya.setPointerCapture(n.pointerId),af(n)});Ya.addEventListener("pointermove",n=>{Ms&&n.pointerId===tf&&af(n)});var nf=()=>{Ms=!1,ef.style.transform="",K&&(K.input.x=0,K.input.z=0)};Ya.addEventListener("pointerup",nf);Ya.addEventListener("pointercancel",nf);function af(n){let e=Ya.getBoundingClientRect(),t=(n.clientX-e.left-e.width/2)/(e.width/2),i=(n.clientY-e.top-e.height/2)/(e.height/2),a=Math.hypot(t,i);a>1&&(t/=a,i/=a),ef.style.transform=`translate(${t*40}px, ${i*40}px)`,K.input.x=t,K.input.z=i}var rf=ge("#scene"),wn=null;rf.addEventListener("pointerdown",n=>{wn={x:n.clientX,y:n.clientY,id:n.pointerId}});addEventListener("pointermove",n=>{!wn||!K||n.pointerId!==wn.id||K.mode!=="follow"||(K.yaw-=(n.clientX-wn.x)*.006,K.camPitch=Math.max(.2,Math.min(1.3,K.camPitch+(n.clientY-wn.y)*.004)),wn.x=n.clientX,wn.y=n.clientY)});addEventListener("pointerup",()=>wn=null);rf.addEventListener("wheel",n=>{K&&(K.camDist=Math.max(8,Math.min(40,K.camDist+n.deltaY*.02)))},{passive:!0});window.__game={set quiet(n){ss=n},get quiet(){return ss},get S(){return C},world:null,enterGame:rs,showCareer:dd,showShop:Dr,showRanking:ls,showMissions:ta,showSidePanel:wr,showGabinete:jn,showSettings:hd,showLevelUp:Zh,showCarteira:Qc,startWork:cd,refreshAvatar:ms,buildWorld:Za,cityScore:ea,checkStage:Qn,toast:Ve,give(n,e){C.dinheiro+=n,C.xp+=e,it(),Ft(),ld()},cityBoost(n){let e=ea()-(C.city.bonus||0);C.city.bonus=Math.max(0,zt[n].min-e+5),it(),Qn(),Ft()},simHours(n){C.city.simH=n,it(),Za(!0),Ft()},setLotStage(n){C.lote||(C.lote={idx:Ir(),stage:0}),C.lote.stage=n,it(),K.setLot(C.lote.idx,Rr(),!0),K.setVehicle(ps(),Ja()),Ft()},ctx:()=>jc(),doCtx:n=>{let e=jc().find(t=>t.id===n);return e&&Jh(e,null),!!e},teleport(n,e){K.player.position.set(n,K.player.position.y,e),K.playerPos=K.player.position.clone()},cine(n,e=1){if(n==="follow"){K.mode="follow",ge("#hud").hidden=!1,ge("#joy").hidden=!1;return}let t=K.palacePos,i=C.lote?K.lots[C.lote.idx]:K.lots[Ir()],a={overview:(r,o)=>{let s=.7+o*.06*e;r.position.set(Math.sin(s)*120,78,Math.cos(s)*120),r.lookAt(0,0,0)},low:(r,o)=>{let s=.5+o*.05*e;r.position.set(Math.sin(s)*70,26,Math.cos(s)*70),r.lookAt(0,2,0)},palace:(r,o)=>{let s=-.35+Math.sin(o*.15*e)*.45;r.position.set(t.x+Math.sin(s)*40,15,t.z+Math.cos(s)*40),r.lookAt(t.x,6,t.z-2)},lot:(r,o)=>{let s=.4+Math.sin(o*.2*e)*.3,l=i.rot===0?1:-1;r.position.set(i.x+Math.sin(s)*22,13,i.z+l*Math.cos(s)*22),r.lookAt(i.x,2,i.z)},street:(r,o)=>{let s=-40+o*6*e%80;r.position.set(-2.5,4,s),r.lookAt(-2.5+4,2.5,s+12)}};K.cine=a[n],K.mode="cine",ge("#hud").hidden=!0,ge("#joy").hidden=!0},dropQueue(){xs.length=0},closeModal:wt,flush:Br,sfx:at,newDay(){C.login.last=null,C.missions=null,C.login.claimed=null,it()}};Qu(document.body);addEventListener("pointerdown",n=>{let e=n.target.closest?.("button");e&&!e.closest(".mg-area")&&!e.disabled&&at("tap")},!0);var Kn=ge("#boot");function of(){Kn&&(Kn.classList.add("done"),setTimeout(()=>{Kn.hidden=!0},450))}function ed(n,e="Carregando sua cidade\u2026"){if(!Kn)return n();Kn.hidden=!1,Kn.classList.remove("done");let t=Kn.querySelector(".boot-msg");t&&(t.textContent=e),setTimeout(()=>{n(),of()},60)}document.fonts?.load?.('40px "Lilita One"').catch(()=>{});function zh(n){eb(n),ed(rs)}var qa=Kx();if(Cr.get("prefeito")==="1"){let n=Cr.get("lado")||$a.side,e=Cr.get("uf")||(n===$a.side?$a.uf:"CE"),t=Cr.get("cidade")||(e===$a.uf?$a.cidade:Ko[e]);qa?.mayor&&qa.cidade===t&&qa.side===n?(C=Bh(qa),ed(rs)):zh({handle:Zn,side:n,uf:e,cidade:t,mayor:!0})}else{let n=e=>{Jc(),Lh({preSide:e,toast:Ve,onDone:t=>zh(t),onCancel:()=>Zc()})};Ih({toast:Ve,savedHandle:qa?.handle,onStart:n,onContinue:()=>{C=Bh(qa),ed(rs)}}),Cr.get("jogar")==="1"&&n(),setTimeout(of,350)}});fb();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
