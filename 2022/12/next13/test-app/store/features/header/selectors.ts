
export const selectHeaderData = (state: { header: { allData: any; }; }) => state.header?.allData;
export const selectHeaderNavigationData = (state: { header: { menu: any; }; }) => state.header?.menu;
export const selectHeaderLogo = (state: { header: { logo: any; }; }) => state.header?.logo;
