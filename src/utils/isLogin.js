import cookie from 'js-cookie';

const isLogin = () => {
    cookie.get('jwt')
}

export default isLogin;
