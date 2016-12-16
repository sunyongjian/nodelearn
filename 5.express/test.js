/*
var str = '<%=username%>';
var data = {username:'sun'};
str = str.replace(/<%=(\w+)%>/g,function(all,attr){
    return data[attr];
});
console.log(str);*/

var res = {
    locals:{username:'sun'}
}
Object.assign(res.locals,{age:6},{home:'beijing'});
console.log(res.locals);
