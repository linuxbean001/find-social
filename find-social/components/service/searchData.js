import axios from 'axios';
import {url} from '../../const/url';

export default class searchDataService {


    getSearchData(userInfoVo){
        console.log('Userinfo', userInfoVo)
        return axios({
          url: url.graphql_url,
          method: 'post',
          data: {
            query: `
            query {
                searchUser(category: "${userInfoVo.category}") {
                            userId
                            name
                            fans
                            following
                            heart
                          }
                        }
              `
          }
        })
    
        .then((result) => {
          return Promise.resolve(result);
        });
    }
}