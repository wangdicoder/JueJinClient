/**
 * Created by wangdi on 5/11/16.
 */
'use strict';

import {Dimensions} from 'react-native';

// 58 app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
// UI 默认给图是 640
const uiWidthPx = 640;

function pxToDp(uiElementPx) {
    return uiElementPx *  deviceWidthDp / uiWidthPx;
}

export default pxToDp;