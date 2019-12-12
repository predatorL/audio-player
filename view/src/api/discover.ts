import req from '@/util/request';
import {API} from './_interface';

const api = {} as API;


// 首页banner
api.getBanner = (data: any) => {
    return req.post('/banner?type=2', data)
}
/**
 * 获取独家放送
 * @param limit 取出数量,默认为30
 */
api.getPrivatecontent = (data: any) => {
    return req.get('/personalized/privatecontent', {
        params: data
    })
}
/**
 * 获取最新音乐
 * @param limit 取出数量,默认为10
 */
api.getNewsong = (data: any) => {
    return req.get('/personalized/newsong', {
        params: data
    })
}
/**
 * 获取推荐mv
 * @param limit 取出数量,默认为10
 * @param offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
 */
api.getMv = (data: any) => {
    return req.get('/personalized/mv', {
        params: data
    })
}
/**
 * 获取推荐电台
 * @param limit 取出数量,默认为10
 * @param offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
 */
api.getDjprogram = (data: any) => {
    return req.get('/personalized/djprogram', {
        params: data
    })
}

export default api;
