attribute vec3 aStart;attribute float aRand;attribute float aLum;uniform float uProg,uOut,uT,uPR,uSize,uScan,uVis;varying float vA;varying float vL;varying float vHot;varying float vFl;
          void main(){
            /* light spreads outward from between the eyes; each point flares as it catches */
            float dd=length((position.xy-vec2(0.,1.62))*vec2(1.,.82))/2.35+aRand*.12;
            float front=uProg*1.3;
            float p=smoothstep(dd-.07,dd+.02,front);
            float fl=exp(-pow((front-dd-.03)/.035,2.))*step(.001,uProg);
            vec3 pos=position+vec3(0.,-.04,-.45)*(1.-p)*(1.-p);
            pos+=vec3(sin(uT*1.7+aRand*50.),cos(uT*1.3+aRand*37.),sin(uT*1.1+aRand*21.))*(.004+.012*(1.-p));
            vFl=fl;
            float o=clamp(uOut*1.35-aRand*.35,0.,1.);float oe=o*o*(3.-2.*o);
            float ang=oe*(2.4+aRand*2.2);float cs=cos(ang),sn=sin(ang);
            vec3 q=pos-vec3(0.,1.,0.);q=vec3(q.x*cs-q.z*sn,q.y,q.x*sn+q.z*cs);
            q.xy*=1.+oe*(1.2+aRand*1.8);q.z+=oe*oe*(4.5+aRand*3.);q.y+=oe*.4;
            pos=mix(pos,q+vec3(0.,1.,0.),step(.0001,o));
            vec4 mv=modelViewMatrix*vec4(pos,1.);
            gl_PointSize=uSize*uPR*(.55+aRand*.45+aLum*.8+fl*1.4)/-mv.z;gl_Position=projectionMatrix*mv;
            vHot=smoothstep(.09,0.,abs(position.y-uScan));
            vL=aLum;vA=uVis*(.003+.997*p+fl*.6)*(1.-smoothstep(.45,1.,o))*mix(1.,smoothstep(-.85,-.15,position.y),p);}
