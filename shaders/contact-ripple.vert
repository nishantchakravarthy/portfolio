uniform float uT;uniform vec3 uM;uniform float uR;uniform vec3 uRP;uniform float uPR;varying float vH;varying float vF;
      void main(){vec3 p=position;
        float h=sin(p.x*.45+uT*.9)*.35+cos(p.z*.38+uT*.7)*.35+sin((p.x+p.z)*.2+uT*.5)*.4;
        float dm=distance(p.xz,uM.xz);h+=exp(-dm*dm*.35)*1.1;
        float dr=distance(p.xz,uRP.xz);h+=sin(dr*3.-uR*14.)*exp(-dr*.35)*uR*.9;
        p.y=h-1.6;vH=h;vec4 mv=modelViewMatrix*vec4(p,1.);vF=clamp(-mv.z/22.,0.,1.);
        gl_PointSize=(2.2+max(h,0.)*2.4)*uPR*(9./-mv.z);gl_Position=projectionMatrix*mv;}
