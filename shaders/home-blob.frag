uniform float uT;varying float vD;varying vec3 vN;varying vec3 vV;
      void main(){float fr=pow(1.-max(dot(vN,vV),0.),2.2);
        vec3 L=normalize(vec3(.6,.8,.7));float di=max(dot(vN,L),0.);float sp=pow(max(dot(reflect(-L,vN),vV),0.),40.);
        vec3 base=mix(vec3(.03,.03,.035),vec3(1.,.24,.18),smoothstep(-.15,.3,vD));
        vec3 ir=.5+.5*cos(6.2831*(fr*1.3+vec3(0.,.33,.67))+uT*.4);
        vec3 c=base*(.25+di*.9)+fr*mix(vec3(1.,.35,.28),ir,.55)*1.1+sp*.9;
        gl_FragColor=vec4(c,1.);}
