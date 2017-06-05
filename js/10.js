window.onload = function ()
{  
    var content = document.getElementById("content");   
    // 随机函数 上下位置  颜色
    function rand(min,max) 
    {
    	return Math.floor(Math.random()*(max - min) + min);
    }

    var title = ["可以降低择业标准,提高自身能力","期待工薪过高","学生太挑剔，就业要求也有点高",
    "多给大学生机会","自己努力","一切靠自己","只要自己随时关注，为其努力，做自己想做的，总会有机会的。",
    "技能方面不够强，缺乏经验和交流","提高自我修养和技能","难是真的难，主要对手太多",
    "调整个人心态，降低择业标准，认真学习积累经验！","太难难如上晴天","自身原因。高校原因。用人单位原因","竞争大","专业技能不扎实","高不成低不就","自身素质提升没有达到，在校期间，未去了解专业的市场，对于本专业或非本专业的公司招聘要求没有关注，眼高手低，盲目跟风，广投简历，没有几年的未来工作计划等","只能靠自己","多学与社会有关联的知识  多掌握几门技术","专业技能不过关","自身能力不足以及面对社会需求的全方面能力不够，地区就业范围，所需岗位狭窄，有局限性。","自己创业啊 为什么要打工，","提升自己最重要","就业难属于大学生自身的问题，放不下身份","中国的就业前景还是好的，就看自己的努力了！","现在的大学生比较多，所缺人才少"
    ,"学艺不精，政府对大学生的政策不够完美","自己要是有能力，就业根本不会难，是金子总会发光。","可以降低择业标准,提高自身能力","期待工薪过高","学生太挑剔，就业要求也有点高",
    "多给大学生机会","自己努力","一切靠自己","只要自己随时关注，为其努力，做自己想做的，总会有机会的。",
    "技能方面不够强，缺乏经验和交流","提高自我修养和技能","难是真的难，主要对手太多",
    "调整个人心态，降低择业标准，认真学习积累经验！","太难难如上晴天","自身原因。高校原因。用人单位原因","竞争大","专业技能不扎实","高不成低不就","自身素质提升没有达到，在校期间，未去了解专业的市场，对于本专业或非本专业的公司招聘要求没有关注，眼高手低，盲目跟风，广投简历，没有几年的未来工作计划等","只能靠自己","多学与社会有关联的知识  多掌握几门技术","专业技能不过关","自身能力不足以及面对社会需求的全方面能力不够，地区就业范围，所需岗位狭窄，有局限性。","自己创业啊 为什么要打工，","提升自己最重要","就业难属于大学生自身的问题，放不下身份","中国的就业前景还是好的，就看自己的努力了！","现在的大学生比较多，所缺人才少"
    ,"学艺不精，政府对大学生的政策不够完美","自己要是有能力，就业根本不会难，是金子总会发光。"];
 

   
    var i = 0 ;
    function fn() 
    {   
        // 创建添加
    	var son = document.createElement('div');
        son.className = "son";       
        son.innerHTML = title[i];
        content.appendChild(son);       
        
        // 判断
        i++;
        if (i==title.length-1) 
        {
            i=0;
        }

        // 颜色 随机
    	son.style.color = "rgb(" +rand(5,252) + "," 
    	+rand(5,252) + "," +rand(5,252) +")";
        
        // 出现上下位置 随机
    	son.style.top = rand(0,360) + "px";

        
        // 右到左动画
        var step = 0;
    	son.timer = setInterval(function () 
    	{
    		step += 0.1;
    	    son.style.left = son.offsetLeft - step + "px";

    	    if (son.offsetLeft <= 0) 
    	    {
    	    	clearInterval(son.timer);
                content.removeChild(son);
    	    }

    	},30);

    }
    
    setInterval(fn,1000);

}