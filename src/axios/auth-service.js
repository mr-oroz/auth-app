import instance from "./api";
import Cookie from 'js-cookie';
const login = (state) => {
    return instance.post('/auth/email/login', state).then(res => {
        if(res.data.token) {
            Cookie.set('token-swagger', res.data.token)
        }
        return res
    })
}
const getUser = () => {
    return instance.get('/auth/me').then(data => data)
}
const signUp = (state) => {
    return instance.post('/auth/email/register', state).then(res => res)
}

const AuthService = {
    login,
    signUp,
    getUser
}

export default AuthService;