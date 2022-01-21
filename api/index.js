const CODES = require('../data/code/index.js');
const isMobile = require('../utils/isMobile');

export default function (req, res, next) {
    const userAgentInfo = req.headers["user-agent"].toLowerCase();
    const is_mobile = isMobile(userAgentInfo);
    const path = req.path;
    const resData = {
        mobile: is_mobile,
        state: 200,
        msg: "成功",
        data: null
    }
    if(path.startsWith('/code')){//代码相关
        resData.data = handlerCode(req.query.type);
        res.send(resData);
    }else if(path.startsWith('/cook')){//烹饪相关
        resData.data = '烹饪相关';
        res.send(resData);
    }else if(path.startsWith('/life')){//生活相关
        resData.data = '生活相关';
        res.send(resData);
    }else if(path.startsWith('/up')){//所得相关
        resData.data = '所得相关';
        res.send(resData);
    }else {
        next()
    }
}


/**
 *  获取code 相关文章 按时间倒序
 *
 * @param {string} type null android css electron es node react vue 
 * @return {Array} 
 */
function handlerCode(type){
    let resCodes = [];
    if('android' === type){
        resCodes = CODES.filter((item)=>{
            return item.type === 'android'
        })
    }else if('css' === type){
        resCodes = CODES.filter((item)=>{
            return item.type === 'css'
        })
    }else if('es' === type){
        resCodes = CODES.filter((item)=>{
            return item.type === 'es'
        })
    }else if('node' === type){
        resCodes = CODES.filter((item)=>{
            return item.type === 'node'
        })
    }else if('react' === type){
        resCodes = CODES.filter((item)=>{
            return item.type === 'react'
        })
    }else if('vue' === type){
        resCodes = CODES.filter((item)=>{
            return item.type === 'vue'
        })
    }else{
        resCodes = CODES
    }
    return resCodes
}