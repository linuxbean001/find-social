import axios from 'axios';
import {url} from '../const/url';

export default class searchDataService {


    getUserUploadedDocuments(token){

        console.log('service')
    //    return axios.get(url.USER_DOCUMENTS,{
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + token
    //     },
    //    })
    //    .then((result) => {
    //     console.log('User Documents', result);
    //     return Promise.resolve(result);
    //     //return (result);
    // }).catch(err => {
    //     console.log('xxxxxxx xxxxxxxxxxx err is login ', err);
    // });
    }
}