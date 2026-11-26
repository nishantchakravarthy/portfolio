uniform sampler2D uDot;varying float vH;varying float vF;
      void main(){vec4 d=texture2D(uDot,gl_PointCoord);vec3 c=mix(vec3(.93,.92,.9),vec3(1.,.24,.18),smoothstep(.3,1.1,vH));
        gl_FragColor=vec4(c,d.a*(1.-vF)*(.35+smoothstep(-.6,1.2,vH)*.65));}
