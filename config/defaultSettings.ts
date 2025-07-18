import type { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Ant Design Pro',
  pwa: true,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  openKeys: false, // 菜单选中，其他菜单不自动收缩
  // footerRender: false,
  token: {
    // 文档地址
    // https://procomponents.ant.design/components/layout#layout-%E7%9A%84-token
    bgLayout:
      'linear-gradient(135deg, rgba(249, 250, 251, 0.98) 0%, rgba(243, 244, 246, 0.95) 100%)',
    sider: {
      colorBgMenuItemHover: '#ddd',
      colorBgMenuItemSelected: '#ddd',
    },
  },
};

export default Settings;
