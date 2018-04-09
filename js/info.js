function getQueryString(name) {
    var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}
var appInfo = new Vue({
    el: '#app-info',
    data: {
        allInfo: '',
        pkgVersion: '',
        url:''
    },
    created: function () {
        var name = getQueryString("name");
        var request = new XMLHttpRequest();
        request.open("GET", "https://api.bootcdn.cn/libraries/"+name+".json");
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                appInfo.allInfo = JSON.parse(request.responseText);
                appInfo.pkgVersion = JSON.parse(request.responseText).assets;
                appInfo.url = JSON.parse(request.responseText).repository.url;
            }
            else {
                console.log('statusText:' + request.statusText);
            }
        };
    },
    methods: {}
});