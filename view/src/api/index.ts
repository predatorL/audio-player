import req from '@/util/request';
import discover from './discover';
const playlist = {} as any;
const mv = {} as any;

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
