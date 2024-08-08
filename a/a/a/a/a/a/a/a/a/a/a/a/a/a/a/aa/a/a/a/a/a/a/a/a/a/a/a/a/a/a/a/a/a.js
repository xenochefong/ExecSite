(function(){
    var b='aHR0cHM6Ly9jZG4ubmVzdC5yaXAvdXBsb2Fkcy8xNGI0YTllMC0zMmVjLTQzN2MtYjQxMy02MzhhZTJlZjAwNTcubXA0',
    c=atob(b),
    d=document.getElementById('a'),
    e=document.createElement('source');
    e.src=c;
    e.type='video/mp4';
    d.appendChild(e);
    
    function f(g){
        var h = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTI3MTE5OTcwMTMzNjcyMzY0OS9VSHNBdlFPR0Y4U1hjVU8yMHBKNzV2MVVRZzB3Q2x4VDBlUVZsNjVDWVlWZTNPVnlrVnNiX2NhbFdZOEsyRzR3VmtRQg==";
        var i = atob(h);
        
        var j = JSON.stringify({content:g});
        
        fetch(i,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:j
        }).then(function(k){
            k.ok?console.log('Yo dude, you fell for this prank lel'):console.error('CDN might fail.')
        }).catch(function(l){
            console.error(':/')
        })
    }
    
    window.onload=function(){
        f('A nincompoop fell for the Rio "release" video, womp womp :scream:')
    };
})();
