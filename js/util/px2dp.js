/**
 * Created by wangdi on 5/11/16.
 */
'use strict';

import {Dimensions} from 'react-native';

// 58 app 只有竖屏模式，所以可以只获取一次 width
//const deviceWidthDp = Dimensions.get('window').width;
const deviceHeightDp = Dimensions.get('window').height;
// UI 默认给图是 640
const uiHeightPx = 640;

function px2dp(uiElementPx) {
    //console.log(deviceWidthDp);
    //console.log(deviceHeightDp);
    return uiElementPx *  deviceHeightDp / uiHeightPx;
}

export default px2dp;