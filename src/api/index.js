/*
包含n个接口请求函数的模块
*/
import axios from './ajax'
// 1.根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${$geohash}`)
    // 2.获取食品分类列表
export const reqFoodTypes = (geohash) => ajax('/index_catefory')
    // 3.根据经纬度获取商铺列表
export const reqFoodTypes = (longitude, latitude) => ajax('/shops', )
    // 4.根据经纬度和关键字搜索商铺列表
    // 5.获取一次性验证码
    // 6.用户名密码登录
    // 7.发送短信验证码
    // 8.手机号验证码登录
    // 9.根据回话获取用户信息
    // 10.用户退出