//判断是否是便携设备
const isMobile = function(userAgentInfo) {
    const Agents = ["android", "iphone",
      "symbianos", "windows phone",
      "ipad", "ipod"
    ];
    let flag = false;
    if (userAgentInfo) {
      for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = true;
          break;
        }
      }
    }
    return flag;
  }
  
  module.exports = isMobile