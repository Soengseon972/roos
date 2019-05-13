// 作者：陈麒先
// 时间：2019.5.11
(function() {

    var width, height, largeHeader = true;

    // Main
    initHeader();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: width/2, y: height/2};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

    }
    
})();