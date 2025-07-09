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
  footerRender: false,
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
    bgLayout: 'linear-gradient(${antdToken.colorBgContainer}, ${antdToken.colorBgLayout} 28%)',
    colorTextAppListIcon: '	#666',
    colorTextAppListIconHover: 'rgba(0, 0, 0, 0.65)',
    colorBgAppListIconHover: 'rgba(0, 0, 0, 0.04)',
    sider: {
      colorMenuBackground: "transparent",
      colorTextMenuTitle: "colorTextHeading",
      colorMenuItemDivider: "colorSplit",
      colorTextMenu: "colorText",
      colorTextMenuSecondary: "colorText",
      colorTextMenuSelected: "rgb(0,0,0)",
      colorTextMenuActive: "rgba(0, 0, 0, 0.85)",
      colorTextMenuItemHover: "rgba(255,255,255,0.75)",
      colorBgMenuItemActive: "rgba(0, 0, 0, 0.15)",
      colorBgMenuItemHover: "rgba(90, 75, 75, 0.03)",
      colorBgMenuItemSelected: "rgba(0, 0, 0, 0.04)",
      colorBgMenuItemCollapsedElevated: "transparent",
      colorBgCollapsedButton: "#fff",
      colorTextCollapsedButton: "colorTextMenuSecondary",
      colorTextCollapsedButtonHover: "colorTextMenu"
    },
    header: {
      colorBgHeader: "rgba(240, 242, 245, 0.4)",
      colorHeaderTitle: "colorTextHeading",
      colorTextMenu: "colorText",
      colorTextMenuSecondary: "colorText",
      colorTextMenuSelected: "rgb(0,0,0)",
      colorTextMenuActive: "rgba(0, 0, 0, 0.85)",
      colorBgMenuItemHover: "rgba(90, 75, 75, 0.03)",
      colorBgMenuItemSelected: "rgba(0, 0, 0, 0.04)",
      colorTextRightActionsItem: "colorTextSecondary",
      colorBgRightActionsItemHover: "rgba(0, 0, 0, 0.03)",
      heightLayoutHeader: 56
    },
    pageContainer: {
      paddingBlockPageContainerContent: 24,
      paddingInlinePageContainerContent: 40,
      colorBgPageContainer: "transparent",
      colorBgPageContainerFixed: "#FFF"
    }
  }
};

export default Settings;
