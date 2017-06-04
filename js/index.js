window.onload = function ()
{   
	//1 轮播 无缝
    var banner = document.getElementsByClassName('banner')[0];
    // console.log(banner);
    var ul = banner.children[2].children[0];
    // console.log(ul);

    var num = 0 ;
    var timer = null;

    timer = setInterval(autoPlay,3);
    function  autoPlay(argument) 
    {   
    	num--;
    	num<=-8000 ? num = 0 : num;
        ul.style.left = num + "px";
    };

    ul.onmouseover = function() 
    {  // 鼠标经过大盒子  停止定时器
        clearInterval(timer);
    }
    ul.onmouseout = function() 
    {
        timer = setInterval(autoPlay,3);  
        // 开启定时器
    }

    // 2、li背景色
    var colorArr = ["#00bfff","#00ffff",'#3cb371',''];


}