import request from '@/utils/request'
import http from '@/utils/http'

// 接口定义
const apis = {
  Login: {
    // 后台登录
    login(params) {
      return request.post('/order-server/order/user/login', params)
    },
    //获取验证码
    code(params) {
      return request.post('/order-server/order/user/public/sms', params)
    },
    letuser(params) {
      return request.get('/order-server/order/user/public/shop/getShopInfoByUserId', { params })
    }
  },


  // 用户前台的登录和注册
  login () {
    return request.post('/user/login',{params})
  },
  register () {
    return request.post('/user/register',{params})
  },

  //拍品管理
  Publish: {
    //需求列表
    publist(params){
      return request.get('/demand/getList',{params})
    }, 
    //获取领域
    tabDomain() {
      return request.get('/tabDomain/getTabDomain')
    },
    //获取类型
    type(){
      return request.get('/tabDemandType/getTabDemandType')
    },
    //获取发布方
    Publisher(){
      return request.get('/demand/getPublisherAll')
    },
    //获取所有领域
    getDomainAll(){
      return request.get('/demand/getDomainAll')
    },
  },
  // 军转民科技成果接口
  technologyAchievement: {
    //需求列表
    list(params){
      return request.get('/technologyAchievement/findByLikePage',{params})
    },
    // 综合态势1
    findByPublisher () {
      return request.get('/technologyAchievement/findByPublisher')
    },
    // 综合态势图2
    findByDomain () {
      return request.get('/technologyAchievement/findByDomain')
    },
    // 需求发布
    release (params) {
      return request.post('/technologyAchievement/release', { ...params })
    },
    // 领域
    getTabDomain () {
      return request.get('/tabDomain/getTabDomain')
    },
    // 成果类型接口
    findByresultsTypeId () {
      return request.get('/tabResultsType/findByresultsTypeId')
    }
  },
  //先进前沿技术模块接口
  tptController: {
    //需求列表
    list(params){
      return request.get('/tptController/tptByPageCondition',{params})
    },
    // 首页态势图1
    tptByPNameGroup () {
      return request.get('/tptController/tptByPNameGroup')
    },
    // 首页态势图2
    tptByDNameGroup () {
      return request.get('/tptController/tptByDNameGroup')
    },
    //产品发布
    tptAdd (params) {
      return request.post('/tptController/tptAdd',{params})
    }
  }, 

  // 新兴军工产业模块
  
    tabNewIndustry: {
      //新兴军工产业集群图数据查询
      getDomainAll () {
        return request.get('/tabNewIndustry/getDomainAll')
      },
      //军工产业重点城市数据查询
      getCityAll () {
        return request.get('/tabNewIndustry/getCityAll')
      },
      // 军工产业图谱数据查询
      getIndustryImgList () {
        return request.get('/tabNewIndustry/getIndustryImgList')
      },
      // /新兴优质企业模块接口详情
      getEnterpriseList() {
        return request.get('/tabEnterPrise/getEnterpriseList')
      }
  },
  // 创新资源要素
  element: {
    // 查询创新资源要素态势图
    findAllByAllElement () {
      return request.get('/cityDistribute/findAllByAllElement')
    },
    // 查询创新资源要素分布图//findAllByAllElement
    findByElement () {
      return request.get('/element/findByElement')
    },
    //产业创新项目推荐模块接口详情
    getList(params) {
      return request.get('/tabIndustryRecommend/getList', { params })
    },
    // 科技创新政策版块分页查询
      
  },
  // 数字赋能服务
  descController: {
    // 态势综合图
    descFind() {
      return request.get('/descController/descFind')
    },
  },
      // 查询先进技术评估数据
      taTeController() {
        return request.get('/taTeController/taTeFindAll')
  },
  
// 分页查询成果转化服务数据/tatController/tatFindAll
tatController () {
    return request.get('/tatController/tatFindAll')
  },
  
// /tscController/tscFindAll
// // 分页供应链创新服务数据
 tscController() {
  return request.get('/tscController/tscFindAll')
 },
 
// 分页查询项目全价值创新数据
tpiController() {
  return request.get('/tpiController/tpiFindAll')
},

// 分页查询行业领域解决方案数据
tsController() {
  return request.get('/tsController/tsFindAll')
},

// 查询园区、产业链、生态服务数据
tdicController () {
  return request.get('/tdicController/tdicFind')
},
// 分页查询跨区域协同创新服务数据
ttciController() {
  return request.get('/ttciController/ttciFind')
},
 }
export default apis
