const fs = require("fs");
const PAHT = require('path');
const CODES = require('../data/code/index.js');
const COOKS = require('../data/cook/index.js');
const LIFES = require('../data/life/index.js');
const UPS = require('../data/up/index.js');

const PUBLIC_PATH = PAHT.resolve(__dirname, '../data');

const TYPES = ['code', 'cook', 'up', 'life'];

const isMobile = require('../utils/isMobile');

export default async function (req, res, next) {
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
        resData.data = handlerCook();
        res.send(resData);
    }else if(path.startsWith('/life')){//生活相关
        resData.data = handlerLife();
        res.send(resData);
    }else if(path.startsWith('/up')){//所得相关
        resData.data = handlerUps();
        res.send(resData);
    }else if(path.startsWith('/details')){
        resData.data = await handlerDetails(req.query.id);
        res.send(resData);
    } else {
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

/**
 * 烹饪列表
 *
 * @return {*} 
 */
function handlerCook(){
    return COOKS;
}

/**
 * 生活列表
 *
 * @return {*} 
 */
function handlerLife(){
    return LIFES;
}

/**
 *所得列表
 *
 * @return {*} 
 */
function handlerUps(){
    return UPS
}

/**
 *文章详情
 *
 * @param {*} id (cook||code||up||life)_val
 * @return {*} 
 */
async function handlerDetails(id){
    const id_type = id.split("_")[0];
    const id_val = id.split("_")[1];
    if(id_type && id_val){
        if(TYPES.indexOf(id_type) > -1){
            return await findDetails(id_type, id_val);
        } else{
            return {}
        }
    }else{
        return {}
    }
}

/**
 * 查找文章标题
 *
 * @return {*} 
 */
async function findDetails(type, val){
    const details = {};
    if('code' === type){
        const detailsTitle = CODES.find((item)=>{
            return item.id == val;
        });
        const detailsContent = await findDetailsContent(type, val);
        Object.assign(details, detailsTitle, detailsContent);
    }else if('up' === type){
        const detailsTitle = UPS.find((item)=>{
            return item.id == val;
        });
        const detailsContent = await findDetailsContent(type, val);
        Object.assign(details, detailsTitle, detailsContent);
        
    }else if('life' === type){
        const detailsTitle = LIFES.find((item)=>{
            return item.id == val;
        });
        const detailsContent = await findDetailsContent(type, val);
        Object.assign(details, detailsTitle, detailsContent);
        
    }else if('cook' === type){
        const detailsTitle = COOKS.find((item)=>{
            return item.id == val;
        });
        const detailsContent = await findDetailsContent(type, val);
        Object.assign(details, detailsTitle, detailsContent);
    }else{
        //{}
    }
    return details
}

/**
 *
 * 查找文章内容
 * @return {*} 
 */
async function findDetailsContent(type, val){
    const content = await readFile(type, val);
    return  {content: content}
}

/**
 * 读取txt文件
 *
 * @param {*} type 文件种类
 * @param {*} val 文件id
 * @return {*} 
 */
function readFile (type, val){
    const path = `${PUBLIC_PATH}/${type}/${val}.txt`;
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err,data)=>{
            if(err){
                resolve('');
            }else{
                resolve(data.toString());
            }
        });
    })
}