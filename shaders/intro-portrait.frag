varying float vA;varying float vL;varying float vHot;varying float vFl;
          void main(){vec2 c=gl_PointCoord-.5;float d=length(c);if(d>.5)discard;float s=smoothstep(.5,.05,d);
            vec3 deep=vec3(.75,.06,.03),mid=vec3(1.,.28,.12),hi=vec3(1.,.82,.66);
            vec3 col=mix(deep,mid,smoothstep(.0,.45,vL));col=mix(col,hi,smoothstep(.55,1.,vL));col+=vec3(1.,.6,.45)*vHot*.9;col=mix(col,vec3(1.,.9,.78),vFl*.6);
            gl_FragColor=vec4(col,s*vA*(.18+vL*1.05+vHot*.6+vFl*.75));}
