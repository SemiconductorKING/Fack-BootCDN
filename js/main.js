// new Vue({
//     el: '#app',
//     data: {
//         mes: ''
//     },
//     template: '<a href="/bootstrap/"\n' +
//     '               class="package list-group-item"\n' +
//     '               target="_blank">\n' +
//     '                <div class="row clearfix">\n' +
//     '                    <div class="main-left">\n' +
//     '                        <h4 class="package-name">bootstrap</h4>\n' +
//     '                    </div>\n' +
//     '                    <div class="main-right">\n' +
//     '                        <p class="package-description">\n' +
//     '                            Bootstrap 是全球最受欢迎的前端组件库，用于开发响应式布局、移动设备优先的 WEB 项目。\n' +
//     '                        </p>\n' +
//     '                    </div>\n' +
//     '                    <div class="package-extra-info main-right">\n' +
//     '                        <span>★ 122947</span>\n' +
//     '                    </div>\n' +
//     '                </div>\n' +
//     '            </a>',
//     created: function () {
//         var $__2 = this;
//         this.$http({
//             url: 'https://api.bootcdn.cn/libraries.min.json',
//             method: 'get',
//             params: {
//                 page: 1,
//                 limit: 10,
//                 mdrender: 'false'
//             }
//         }).then(function (res) {
//             $__2.content = res.body.data;
//             console.log($__2.content);
//         }).catch(function (res) {
//             console.log('MaiSec.vue: ', res);
//         });
//     }
// });

Vue.component('todo-item', {
    props: ['todo1'],
    template: '<a href="/bootstrap/" class="package list-group-item" target="_blank">\n' +
    '                <div class="row clearfix">\n' +
    '                    <div class="main-left">\n' +
    '                        <h4 class="package-name">{{ todo1[0] }}</h4>\n' +
    '                    </div>\n' +
    '                    <div class="main-right">\n' +
    '                        <p class="package-description">\n' +
    '                            {{ todo1[1] }}\n' +
    '                        </p>\n' +
    '                    </div>\n' +
    '                    <div class="package-extra-info main-right">\n' +
    '                        <span>★ {{ todo1[2] }}</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </a>'
});

// 节流函数
var delay = (function () {
    // 定时器重置
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

var commonPackageList = [
    [
        "bootstrap",
        "Bootstrap 是全球最受欢迎的前端组件库，用于开发响应式布局、移动设备优先的 WEB 项目。",
        122882
    ],
    [
        "react",
        "React 是用于构建用户界面的 JavaScript 工具库。",
        91189
    ],
    [
        "vue",
        "Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。",
        88509
    ],
    [
        "angular.js",
        "Angular 是一个开发平台。它能帮你更轻松的构建 Web 应用。Angular 集声明式模板、依赖注入、端到端工具和一些最佳实践于一身，为你解决开发方面的各种挑战。Angular 为开发者提升构建 Web、手机或桌面应用的能力。",
        58185
    ],
    [
        "jquery",
        "jQuery 是一个高效、精简并且功能丰富的 JavaScript 工具库。它提供的 API 易于使用且兼容众多浏览器，这让诸如 HTML 文档遍历和操作、事件处理、动画和 Ajax 操作更加简单。",
        48481
    ],
    [
        "semantic-ui",
        "Semantic 作为一款开发框架，帮助开发者使用对人类友好的 HTML 语言构建优雅的响应式布局。",
        40335
    ],
    [
        "socket.io",
        "socket.io 是用于构建实时通讯服务的框架。",
        40240
    ],
    [
        "redux",
        "Redux 是 JavaScript 状态容器，提供可预测化的状态管理。",
        39388
    ],
    [
        "Chart.js",
        "Backbone 为复杂 Javascript 应用程序提供模型(models)、集合(collections)、视图(views)的结构。其中模型用于绑定键值数据和自定义事件；集合附有可枚举函数的丰富 API； 视图可以声明事件处理函数，并通过 RESTful JSON 接口连接到应用程序。",
        27076
    ],
    [
        "echarts",
        "ECharts 是一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。",
        26454
    ],
    [
        "underscore.js",
        "Underscore 是一个 JavaScript 工具库，它提供了一整套函数式编程的实用功能，但是没有扩展任何 JavaScript 内置对象。",
        22611
    ],
    [
        "ember.js",
        "Ember.js是一个开源的 JavaScript 客户端框架，用于开发Web应用程序并使用MVC（模型 - 视图 - 控制器）架构模式。",
        18848
    ],
    [
        "zepto",
        "Zepto 是一个轻量级的针对现代高级浏览器的 JavaScript 库， 它与 jQuery 有着类似的 API。 如果你会用 jQuery，那么你也会用 Zepto。",
        13623
    ],
    [
        "require.js",
        "RequireJS 是一个 JavaScript 文件和模块载入工具。它针对浏览器使用场景进行了优化，并且也可以应用到其他 JavaScript 环境中，例如 Rhino 和 Node.js。",
        11441
    ],
    [
        "jqueryui",
        "jQuery UI 是建立在 jQuery JavaScript 库上的一组用户界面交互、特效、小部件及主题。",
        10387
    ]
];
var appPackage1 = new Vue({
    el: '#app-1',
    data: {
        currentList: commonPackageList,
        showList: commonPackageList,
        allList: '',
        noMore: true
    },
    computed: {
        more: function () {
            return this.noMore = false;
        }
    },
    watch: {
        noMore: function () {
            this.showList = appPackage1.allList;
            this.currentList = appPackage1.allList;
            var allBg=document.getElementsByClassName('cdn-header')[0];
            allBg.style.backgroundImage='url(img/allBg.png)';
        }
    }

});

(function () {
    //Ajax请求所有列表数据，并存于root.data下
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.bootcdn.cn/libraries.min.json");
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            appPackage1.allList = JSON.parse(request.responseText);
        }
        else {
            console.log('statusText:' + request.statusText);
        }
    };

    /*
    //监听input
    appPackage1.$watch('appPackage1.noMore', function () {
        appPackage1.showList = appPackage1.allList;
    });
    //如果搜索框内有值，先限流，再判断
    if (document.getElementById('search0').value) {
        delay(function () {
            // 判断
            appPackage1.showList = appPackage1.allList;
        }, 300);
    }

    //搜索框为空并且没有点击更多，显示常见包列表
    else if (appPackage1.noMore)
        appPackage1.$watch('appPackage1.allList', function () {
            alert('发生变化了');
        });
    */
})();

//搜索框
var searchPackage = new Vue({
    el: '#search0',
    data: {
        packageList: ''
    },
    watch: {
        packageList: function (val) {
            if (this.packageList === '') {
                appPackage1.showList = appPackage1.currentList;
            }
            else delay(function () {
                appPackage1.showList = [];
                for (i = 0, len = appPackage1.allList.length; i < len; i++) {
                    if (appPackage1.allList[i][0].indexOf(val) > 0) {
                        appPackage1.showList.push(appPackage1.allList[i]);
                    }
                }
            }, 300)
        }
        /*
        packageList: function (val) {
            if (this.packageList !== '') {
                appPackage1.showList=[];
                for (i = 0, len = appPackage1.allList.length; i < len; i++) {
                    if (appPackage1.allList[i][0].indexOf(val) > 0) {
                        appPackage1.showList.push(appPackage1.allList[i]);
                    }
                }
            }
            else appPackage1.showList=appPackage1.allList;
        }
        */
    }
});


/*

var arr = [];

(function () {
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.bootcdn.cn/libraries.min.json");
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                var data = JSON.parse(request.responseText);
                if (data) {
                    arr = arr.concat(data);
                    // 渲染Ajax获得的所有json数组（Test OK）
                    // var app1 = new Vue({
                    //     el: '#app-2',
                    //     data: {
                    //         packageList: arr
                    //     }
                    // });


                    // 渲染查询到的数据
                    // var appSearch = new Vue({
                    //     el: '#search',
                    //     data: {
                    //         packageShow: ''
                    //     },
                    //     methods: {
                    //         getValues: document.getElementById('search0').value,
                    //         arrShow: (function changeValue(arr) {
                    //             this.arr = arr;
                    //             var getValues = [];
                    //             getValues = document.getElementById('search0').value();
                    //             for (i = 0, len = arr.length; i < len; i++) {
                    //                 if (arr[i][0].indexOf(getValues) > 0) {
                    //                     packageShow.push(arr[i][0]);
                    //                 }
                    //             }
                    //             return arrShow;
                    //         })
                    //     }
                    // });
                }
            } else {
                alert("发生错误：" + request.status);
            }
        }
    }
})();
//
// function changeValue(arr) {
//     this.arr = arr;
//     var arrShow = [];
//     var getValues;
//     getValues = document.getElementById('search0').value;
//     for (i = 0, len = arr.length; i < len; i++) {
//         if (arr[i][0].indexOf(getValues) > 0) {
//             arrShow.push(arr[i][0]);
//         }
//     }
//     return arrShow;
// }

*/
