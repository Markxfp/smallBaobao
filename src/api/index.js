/*
包含n个接口请求函数的模块
*/
import ajax from './ajax'
// const base_url = 'http://localhost:8080';
const base_url = './api'
    // 1.根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${base_url}/position/${geohash}`)
    // 2.获取食品分类列表
export const reqFoodCategorys = (geohash) => ajax(base_url + '/ajax_itemlist')
    // 3.根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(base_url + '/shops', )
export const reqList = (grade, skey, limit, page) => ajax(base_url + '/ajax_itemlist', { grade, skey, limit, page }, 'POST')

// 4.根据经纬度和关键字搜索商铺列表
// 5.获取一次性验证码
// 6.用户名密码登录
// 7.发送短信验证码
// 8.手机号验证码登录
// 9.根据回话获取用户信息
// 10.用户退出