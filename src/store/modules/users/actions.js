import User from '../../../api/users';


export const  getUsers=({commit})=>{
    User.all().then(response=>{
        commit('GET_USERS',response.data);
    })
}

export const getUser=({commit},userId)=>{
    User.show(userId).then(response=>{
        commit('GET_USER',response.data);
    })
}

export const changeTestVuex=({commit})=>{
    commit('CHANGE_TEXT');
}

