//var RAL = require('node-ral').RAL;
// DEMO直接使用入口函数，正式使用通过require('node-ral').RAL调用
var RAL = require('../../index.js').RAL;
var path = require('path');

// 初始化RAL，只需在程序入口运行一次
RAL.init({
    // 指定RAL配置目录
    confDir: path.join(__dirname, 'config/ral')
});

module.exports = RAL;