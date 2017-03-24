import axios from 'axios'
import config from './config'
class API {


    /**
     * 获取地址列表
     */
    var getAddress = (id, sig) => axios.post('getAddress',{ id, sig }, config);

    //获取已授权列表
    get (param) {
        config.data.strSQL = param.param;
        return axios.post(param.api ,{}, config);
    }
    //添加授权
    post (param) {
        config.data.strSQL = param.param;
        return axios.post(param.api, {}, config);
    }
    reqSuccess(obj,msg){
        obj.$message({
            message: msg,
            type: 'success'
        });
    }
    reqFail(obj,msg){
        obj.$message({
            message: msg,
            type: 'success'
        });
    }
}
export default API;
