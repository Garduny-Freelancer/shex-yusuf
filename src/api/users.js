import Api from './api';

const END_POINT ='users';

export default{
    all(){
        return Api.get(END_POINT);
    },

  

    store(data){
        return Api.post(END_POINT,data);
    },

    delete(id){
        return Api.delete(`${END_POINT}/${id}`);
    },

    deleteAll(){
        return Api.delete(END_POINT);
    }
}