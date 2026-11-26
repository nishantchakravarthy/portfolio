uniform float uT;uniform vec2 uM;uniform float uHover;varying float vD;varying vec3 vN;varying vec3 vV;
      float f(vec3 p){return sin(p.x*2.1+uT)*sin(p.y*2.6+uT*1.2)*sin(p.z*2.3+uT*.8)+.5*sin(p.x*4.3-uT*1.3+p.y*3.1)*sin(p.z*3.7+uT*1.1);}
      vec3 disp(vec3 p){vec3 n=normalize(p);return n*(1.35+f(n*1.7+vec3(uM*.8,0.))*(.22+uHover*.18));}
      void main(){vec3 n=normalize(position);vec3 p=disp(position);
        vec3 t=normalize(cross(n,vec3(0.,1.,.001)));vec3 b=normalize(cross(n,t));
        vec3 pa=disp(position+t*.01);vec3 pb=disp(position+b*.01);vec3 nn=normalize(cross(pa-p,pb-p));
        if(dot(nn,n)<0.)nn=-nn;
        vD=length(p)-1.35;vN=normalize(normalMatrix*nn);vec4 mv=modelViewMatrix*vec4(p,1.);vV=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}
