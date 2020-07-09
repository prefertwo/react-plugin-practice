let baseUrl = '';
let HOST = process.env.HOST;
if (HOST === 'simu800') {
  baseUrl = '/dev.simu800.com/';
} else if (HOST === 'xqfunds') {
  baseUrl = '/xqfunds/simu/mobile/';
} else {
  baseUrl = '/gz/test/';
}

console.log('HOST==', HOST);
console.log('baseUrl==', baseUrl);

export default {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: 'daybreak',
  layout: 'sidemenu',
  contentWidth: 'Fluid',
  fixedHeader: false,
  autoHideHeader: false,
  fixSiderbar: false,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: 'Ant Design',
  pwa: false,
  iconfontUrl: '',
  // baseUrl,
};
