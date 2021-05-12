import {request} from './request.js'
import {request01} from './request01.js'
export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}
export function getHomeGoods(type,page){
    return request01({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}