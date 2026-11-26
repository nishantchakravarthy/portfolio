uniform sampler2D map;uniform float uFocus,uT,uDim;varying vec2 vUv;
        void main(){vec3 c=texture2D(map,vUv).rgb;float g=dot(c,vec3(.299,.587,.114));
          vec3 duo=mix(vec3(.05,.045,.05),vec3(.62,.12,.08),smoothstep(.05,.7,g));duo=mix(duo,vec3(.93,.9,.86),smoothstep(.72,1.,g)*.7);
          float scan=.94+.06*sin(vUv.y*420.+uT*2.);
          vec3 col=mix(duo*scan,c,uFocus);
          vec2 e=min(vUv,1.-vUv);float edge=1.-smoothstep(0.,.012,min(e.x,e.y*1.414));
          col+=vec3(1.,.3,.2)*edge*(.35+.65*uFocus);
          gl_FragColor=vec4(col*uDim,.97);}
