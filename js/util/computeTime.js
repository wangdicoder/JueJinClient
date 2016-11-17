/**
 * Created by wangdi on 18/11/16.
 */
'use strict';

export default function computeTime(time) { // time format 2016-11-11T18:56:33.904Z
    var datePart = time.substring(0, 10).replace(/\-/g, "/");;
    var timePart = time.substring(11, 19);
    //console.log(datePart + ' ' + timePart);
    var oldTime = (new Date(datePart + ' ' + timePart)).getTime();
    var currTime = new Date().getTime();
    var diffValue = currTime - oldTime;

    var days = Math.floor(diffValue/(24*3600*1000));
    if(days === 0){
        //计算相差小时数
        var leave1 = diffValue%(24*3600*1000); //计算天数后剩余的毫秒数
        var hours = Math.floor(leave1/(3600*1000));
        if(hours === 0) {
            //计算相差分钟数
            var leave2 = leave1 % (3600 * 1000);  //计算小时数后剩余的毫秒数
            var minutes = Math.floor(leave2 / (60 * 1000));
            if(minutes === 0) {
                //计算相差秒数
                var leave3 = leave2 % (60 * 1000);   //计算分钟数后剩余的毫秒数
                var seconds = Math.round(leave3 / 1000);
                return seconds+'秒前';
            }
            return minutes+'分钟前';
        }
        return hours+'小时前';
    }

    return days+'天前';
}