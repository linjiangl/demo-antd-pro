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
    // 文档地址
    // https://procomponents.ant.design/components/layout#layout-%E7%9A%84-token
    bgLayout: '#fafbff',
    colorTextAppListIcon: '#64748b',
    colorTextAppListIconHover: '#1e40af',
    colorBgAppListIconHover: '#f1f5f9',
    sider: {
      colorMenuBackground: "#ffffff",
      colorTextMenuTitle: "#1e293b",
      colorMenuItemDivider: "#e2e8f0",
      colorTextMenu: "#475569",
      colorTextMenuSecondary: "#94a3b8",
      colorTextMenuSelected: "#1e40af",
      colorTextMenuActive: "#1e40af",
      colorTextMenuItemHover: "#1e40af",
      colorBgMenuItemActive: "#dbeafe",
      colorBgMenuItemHover: "#f8fafc",
      colorBgMenuItemSelected: "#dbeafe",
      colorBgMenuItemCollapsedElevated: "#ffffff",
      colorBgCollapsedButton: "#ffffff",
      colorTextCollapsedButton: "#64748b",
      colorTextCollapsedButtonHover: "#1e40af"
    },
    header: {
      colorBgHeader: "#ffffff",
      colorHeaderTitle: "#1e293b",
      colorTextMenu: "#475569",
      colorTextMenuSecondary: "#94a3b8",
      colorTextMenuSelected: "#1e40af",
      colorTextMenuActive: "#1e40af",
      colorBgMenuItemHover: "#f8fafc",
      colorBgMenuItemSelected: "#dbeafe",
      colorTextRightActionsItem: "#64748b",
      colorBgRightActionsItemHover: "#f1f5f9",
      heightLayoutHeader: 56
    },
    pageContainer: {
      paddingBlockPageContainerContent: 24,
      paddingInlinePageContainerContent: 24,
      colorBgPageContainer: "#fafbff",
      colorBgPageContainerFixed: "#ffffff"
    }
  }
};

export default Settings;
