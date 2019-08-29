import req from '@/util/request';

const discover = {} as any;
const playlist = {} as any;
const mv = {} as any;

// 首页banner
discover.getBanner = (data: any) => {
    return req.post('/banner?type=2', data)
}
/**
 * 获取独家放送
 * @param limit 取出数量,默认为30
 */
discover.getPrivatecontent = (data: any) => {
    return req.get('/personalized/privatecontent', {
        params: data
    })
}
/**
 * 获取最新音乐
 * @param limit 取出数量,默认为10
 */
discover.getNewsong = (data: any) => {
    return req.get('/personalized/newsong', {
        params: data
    })
}
/**
 * 获取推荐mv
 * @param limit 取出数量,默认为10
 * @param offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
 */
discover.getMv = (data: any) => {
    return req.get('/personalized/mv', {
        params: data
    })
}
/**
 * 获取推荐电台
 * @param limit 取出数量,默认为10
 * @param offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
 */
discover.getDjprogram = (data: any) => {
    return req.get('/personalized/djprogram', {
        params: data
    })
}
/**
 * 获取推荐歌单
 * @param limit 取出数量,默认为30
 * @param offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
 */
playlist.getRecommend = (data: any) => {
    return req.get('/personalized', {
        params: data
    })
}
/**
 * 获取 mv 排行
 * @param limit: 取出数量,默认为30
 * @param offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
 * @param area: 地区,可选值为内地,港台,欧美,日本,韩国,不填则为全部
 */
mv.getTop = (data: any) => {
    return req.get('/top/mv', {
        params: data
    })
}


const api = {
    discover,
    playlist,
    mv
}

export default api;
