uniform sampler2D map;uniform float uReveal,uOp,uT;varying vec2 vUv;
          void main(){vec4 c=texture2D(map,vUv);float edge=smoothstep(vUv.x-.12,vUv.x,uReveal);float rim=smoothstep(.1,0.,abs(uReveal-vUv.x))*step(uReveal,1.05);
            vec3 col=c.rgb*(1.05+.08*sin(uT*1.5+vUv.x*6.))+vec3(1.,.45,.3)*rim*c.a*1.4;gl_FragColor=vec4(col,c.a*edge*uOp);}
