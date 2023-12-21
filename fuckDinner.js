// ==UserScript==
// @name         Remove Links with Specific Href from Divs
// @namespace    http://tampermonkey.net/
// @version      2023-12-21
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-idle
// ==/UserScript==


// 将 "cirosantilli" 变成数组
const dinnerNames = ["cirosantilli", "cheezcharmer","pxvr-official","zaohmeing","zhaohmng-outlook-com","Daravai1234","codin-stuffs"];

(function() {
    'use strict';

    function fuckDinner(){
        console.log("0000");
        // 在页面加载前直接操作 DOM
        console.log("1111");
        // 获取所有带有特定类名的 div 元素
        const divs = document.querySelectorAll('div.Box-sc-g0xbh4-0.hKtuLA');

        console.log("divs: " + divs.length);
        // 遍历每一个 div 元素
        divs.forEach(div => {
            // 检查当前 div 下的所有 a 标签
            const links = div.querySelectorAll('a');

            // 标记是否需要阻止该 div 元素
            let blockDiv = false;

//             console.log("111");
//             // 遍历每一个 a 标签
//             links.forEach(link => {
//                 // 检查 href 属性中是否包含 "adc" 字符串
//                 if (link.href.includes('cirosantilli')) {
//                     // 如果包含，则标记需要阻止该 div 元素
//                     console.log("222");
//                     blockDiv = true;
//                 }
//             });

            // 遍历每一个 a 标签
            links.forEach(link => {
                // 检查 href 属性中是否包含数组中的任何一个元素
                for (let i = 0; i < dinnerNames.length; i++) {
                    if (link.href.includes(dinnerNames[i])) {
                        // 如果包含任何一个元素，则标记需要阻止该 div 元素
                        // console.log("find name: " + dinnerNames[i]);
                        blockDiv = true;
                        break; // 如果找到匹配的元素，就可以跳出循环了
                    }
                }
            });



            // 如果需要阻止该 div 元素
            if (blockDiv) {
                // 阻止浏览器接收该 div 元素
                div.style.display = 'none';
                console.log("999");
            }
        });

    }

    fuckDinner();
    // // 事件委托到 document 上
    // document.addEventListener('click', function(event) {
    //     if (event.target.matches('a.Pagination__Page-sc-cp45c9-0.jOoUXg')) {
    //         // alert("hello");
    //         fuckDinner();
    //     }
    // });


    // 添加点击事件监听器
    document.addEventListener('click', function(event) {
        if (event.target.matches('a.Pagination__Page-sc-cp45c9-0.jOoUXg')) {
            console.log("click: a.Pagination__Page-sc-cp45c9-0.jOoUXg");
            // 等待特定元素加载完毕
            // 定时检查页面中是否出现了指定元素
            var intervalId = setInterval(function() {
                console.log("hi");
                var targetElement = document.querySelector('a.Pagination__Page-sc-cp45c9-0.jOoUXg');
                if (targetElement) {
                    console.log("hello");
                    fuckDinner();
                    clearInterval(intervalId); // 当找到元素后停止定时器
                }
            }, 500); // 每隔一秒检查一次
        }
    });


})();
