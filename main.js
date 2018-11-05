//1.初始化数据
var hashA=init();
var keys=hashA['keys']
var hash=hashA['hash']
//2.生成键盘
for(var index=0;index<keys['length'];index++){
    div1 = tag('div',{className:'row'})
    mainWraper.appendChild(div1)
    row = keys[index] //第一个数组，第二个数组，第三个数组；            
    for(var index2 =  0;index2<row['length'];index2++){//0-10 0-9 0-7                 
        var  span1 = tag('span',{textContent:row[index2],className:'text'})                                
        var  button1=tag('button',{textContent:'编辑',id:row[index2]})
        var img1=tag('img')
            if(hash[row[index2]]){
             img1.src='https://'+hash[row[index2]]+'/favicon.ico'
            }else{
                img1.src='./ico.png'
            }
            //图片错误未加载执行下边代码
            img1.onerror=function(xxx){
                //console.log('下载失败')
                xxx.target.src='./ico.png'
            }
        button1.onclick=function(xzkjcnxlkcjlk){
            var button2=xzkjcnxlkcjlk['target']
            var img2=button2.previousSibling//button2的哥哥
            var key=xzkjcnxlkcjlk['target']['id']//qwer
            var andy=prompt('给我一个网址')
                hash[key]= andy //hash变更
                img2.src='https://'+andy+'/favicon.ico'
                     //图片错误未加载执行下边代码
                img2.onerror=function(xxx){
                     //console.log('下载失败')
                     xxx.target.src='./ico.png'
                 }
                localStorage.setItem('zzz',JSON.stringify(hash))
                //console.log(hash)   
         }                           
        var kbd1 = tag('kbd',{className:'key'})

         kbd1.appendChild(span1)
         kbd1.appendChild(img1)
         kbd1.appendChild(button1)
         div1.appendChild(kbd1)              
    }                   
}
//3。监听事件
document.onkeypress = function(xzkjcnxlkcjlk){
    key = xzkjcnxlkcjlk['key']
    website = hash[key]
   window.open('https://'+website,'_blank')
}



function init(){ 
     //数组就是对象
     var keys={
         0:{0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
         1:{0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
         2:{0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
         length:3
     }
     //哈希不是数组，不需要length;
     var hash={ q:'qq.com', w:'weibo.com', e:'ele.me',
      r:'renren.com', t:undefined, y:undefined, u:undefined, i:'iqiyi.com',
      o:'opera.com', p:undefined, a:'acfun.cn', s:'sohu.com', z:'zhihu.com',
      m:' www.mcdonalds.com.cn' }

     //取出localStorage中存的hash 
     var hashInLocalStorage=getFromLocalStorage('zzz')
         if(hashInLocalStorage){hash=hashInLocalStorage} 
     return{
         'keys':keys,
         'hash':hash
     }    
}     
function getFromLocalStorage(name){
    return JSON.parse(localStorage.getItem(name)||'null')
}
function tag(tagName,attributes){
    element= document.createElement(tagName);
    for(var key in attributes ){element[key]=attributes[key];}
    return element
}            