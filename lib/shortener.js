exports.createUrl = function(id) {

    var ALLCHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var BASE = 62;

    var sub = parseInt(id);
    var url = '';
    var mod_div = 0;
    var quocient = 0;

    do{
        quocient = Math.floor(sub / BASE);
        mod_div = sub % BASE;
        url+= ALLCHARS.charAt(mod_div);
        sub = quocient;
    }while(sub > 0);

    //console.log("inverse url: " + url_reverse);
    //return url_reverse;
    return (url.split('').reverse().join(''));

};