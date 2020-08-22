
const isProduction = process.env.NODE_ENV === 'production';

const url = isProduction ? 'http://w.jingjingbaobao.xyz/' : 'http://localhost:8088/';

const apiUrl = '/api';  


export {
  apiUrl,
  url
};
