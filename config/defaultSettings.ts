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
  openKeys: false,  // 菜单选中，其他菜单不自动收缩
  // footerRender: false,
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
    bgLayout: '#FFFFFF',
    sider: {
      colorMenuBackground: '#FFFFFF',
      colorMenuItemDivider: '#DFDFDF',
      colorTextMenu: '#595959',
      colorTextMenuSelected: '#2A7AFBFF',
      colorBgMenuItemSelected: '#E6F3FEFF',
    },
    header: {
      colorTextRightActionsItem: '#000000F2',
    },
    pageContainer: {
      colorBgPageContainer: '#F6F9FB',
      paddingBlockPageContainerContent: 24,
      paddingInlinePageContainerContent: 24
    }
  }
};

export default Settings;
