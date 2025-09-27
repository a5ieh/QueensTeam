function openClass(subject){
    document.getElementById('menu').style.display = 'none';
    
    if(subject==='biology')   loadScript('biology.js');
    if(subject==='chemistry') loadScript('chemistry.js');
    if(subject==='physics')   loadScript('physics.js');
    if(subject==='history')   loadScript('history.js');
    if(subject==='tech')      loadScript('tech.js');
    if(subject==='math')      loadScript('math.js');
}

function loadScript(filename){
    let script = document.createElement('script');
    script.src = filename;
    document.body.appendChild(script);
}
