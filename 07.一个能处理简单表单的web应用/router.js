function route(pathname, handle, response) {
    if (handle[pathname]) {
        handle[pathname](response);
    } else {
        handle['notfound'](response);
    }
}

exports.route = route;