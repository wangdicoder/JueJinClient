/**
 * Created by wangdi on 15/11/16.
 */
'use strict';

export default class TimeLineDataModel{

    constructor(){

    }

    getData(){
        var dataBlob = [];

        fetch('http://gold.xitu.io/api/v1/timeline/57fa525a0e3dd90057c1e04d/2016-11-13T05:04:10.044Z')
            .then((response) => response.json())
            .then((responseData) => {
                let data = responseData.data;

                for(let i in data){
                    let info = {
                        tags: data[i].tagsTitleArray,
                        content: data[i].content,
                        collectionCount: data[i].collectionCount,
                        title: data[i].title,
                        user: data[i].user,
                        url: data[i].url,
                        time: this._computeTime(data[i].createdAtString),
                        screenshot: null
                    }
                    dataBlob.push(info);
                }
            }).done();

        return dataBlob;
    }

    _computeTime(time){
        return '1天前';
    }
}