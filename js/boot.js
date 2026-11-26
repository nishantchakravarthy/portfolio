/* Loads the GLSL shaders from /shaders, then starts the site (js/main.js). */
(function(){
  const files=['home-blob','contact-ripple','contact-arcs','cred-card','intro-greet','intro-portrait']
    .flatMap(n=>[n+'.vert',n+'.frag']);
  const get=f=>fetch('shaders/'+f).then(r=>{if(!r.ok)throw new Error(f+' '+r.status);return r.text();}).then(t=>[f,t]);
  const start=()=>{const s=document.createElement('script');s.src='js/main.js';document.body.appendChild(s);};
  Promise.all(files.map(get)).then(list=>{window.SHADERS=Object.fromEntries(list);start();})
    .catch(e=>{console.error('Shader load failed, starting without them:',e);window.SHADERS={};start();});
})();
