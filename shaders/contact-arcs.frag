uniform float uT,uOff;
varying float vT;
void main(){
float head=fract(uT*.22+uOff)*1.4-.2;
float d=head-vT;
float a=smoothstep(.35,0.,d)*step(0.,d)+.12;
gl_FragColor=vec4(1.,.36+.4*smoothstep(.05,0.,abs(d)),.24,a);
}
