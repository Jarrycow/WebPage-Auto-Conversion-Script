// ==UserScript==
// @name         网页自动转换
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  网页自动跳转
// @author       Jarrycow
// @match        https://c.pc.qq.com/middlem.html?pfurl=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qq.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let _div = document.querySelector('.url'); // 获取.url类的div
    let _doc = _div.textContent; // 获取div中内容
    window.location.href = _doc; // 跳转
    console.log('!');
    console.log(_doc);

})();