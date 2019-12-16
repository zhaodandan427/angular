// 人员选择器回调
function userSelected(data) {
    var peoplearry= [];
    var preUsers = "";
    var size = data.users.length;
    var peoplestr='';
    var abcid = [];
    for(var i = 0 ; i < size ; i++) {
        peoplearry[i] = {
            taskUserName: data.users[i].username,
            taskUser: data.users[i].userId
        };
        abcid.push(data.users[i].userId);
    }
    preUsers = abcid.join(',');
    if(peoplearry.length<4 && peoplearry.length>0){
        var jieshou = [];
        for (var i=0;i<size;i++){
            if(peoplearry[i].taskUserName != "添加"){
                jieshou.push(peoplearry[i].taskUserName);
            }
        }
        peoplestr = jieshou.join(",");
    }else if(peoplearry.length > 3){
        peoplestr = peoplearry[0].taskUserName + ','+ peoplearry[1].taskUserName+ ','+peoplearry[2].taskUserName + '等'+peoplearry.length +'人';
    }
    // $("#execute").text(peoplestr);
    // alert(peoplestr);
    // alert(preUsers);
    localStorage.peoplestr = peoplestr;
    localStorage.preUsers = preUsers;
    localStorage.peoplearry = JSON.stringify(peoplearry);
    // return peoplearry;
}

//调用人员选择器失败
function userFailed () {
    console.log("调用人员选择器失败");
}