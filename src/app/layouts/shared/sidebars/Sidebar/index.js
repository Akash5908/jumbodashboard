import React, { Suspense } from 'react';
import { IconButton } from "@mui/material";
import menus from "./menus";
import features from './features';
import JumboVerticalNavbar from "@jumbo/components/JumboVerticalNavbar/JumboVerticalNavbar";
import { DrawerHeader } from "@jumbo/components/JumboLayout/style";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import useJumboLayoutSidebar from "@jumbo/hooks/useJumboLayoutSidebar";
import useJumboSidebarTheme from "@jumbo/hooks/useJumboSidebarTheme";
import { SIDEBAR_STYLES, SIDEBAR_VIEWS } from "@jumbo/utils/constants/layout";
import Logo from "../../../../shared/Logo";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Zoom from "@mui/material/Zoom";
import Div from "@jumbo/shared/Div";
import SearchGlobal from "../../../../shared/SearchGlobal";
import SidebarSkeleton from "./SidebarSkeleton";
import AuthUserDropdown from 'app/shared/widgets/AuthUserDropdown/AuthUserDropdown';


const Sidebar = () => {
  return (
    <React.Fragment>
      <SidebarHeader />
      <JumboScrollbar
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
      >
         <div style={{ position:"fixed", top:'12vh', left:'1vw', zIndex:"999"}}>
         <SearchGlobal
            sx={{
              pb: 2, // Add bottom padding
              maxWidth: { xs: 240, md: 320 },
             zIndex: '999',
              transition: 'box-shadow 0.3s ease-in-out',
            }}
          
          />
          </div>
        <Suspense
          fallback={
            <Div
              sx={{
                display: 'flex',
                minWidth: 0,
                alignItems: 'center',
                alignContent: 'center',
                px: 3
              }}
            >
              <SidebarSkeleton />
            </Div>
          }
        >
          <div style={{  marginTop:"6vh"}}>
          <hr/>
            <Div
              sx={{
                display: 'flex',
                minWidth: 0,
                alignItems: 'center',
                alignContent: 'center',
                px: 1,
                pb: 25, // Add bottom padding
                pt: 1.7,
                pr:3
              // Add top padding
              // Add bottom border
              }}
            >
              <JumboVerticalNavbar translate items={menus} />
            </Div>
          </div>
          <div >
          <hr />
            <Div
              sx={{
                display: 'flex',
                minWidth: 0,
                alignItems: 'center',
                alignContent: 'center',
                          
                
                px: 1,
                pb: 2, // Add bottom padding
                pt: 1, // Add top padding
                borderBottom: '1px solid #e6e6e6', // Add bottom border
                          }}
                          
            >
              <JumboVerticalNavbar translate items={features} />
            </Div>
          </div>
          {/* <div style={{ position:"fixed",marginLeft:"10px",marginTop:"10px", height:"39vh", top:'90vh', backgroundColor:"white"}}>
            <AuthUserDropdown />
            </div> */}
        </Suspense>
      </JumboScrollbar>
    </React.Fragment>
  );
};

const SidebarHeader = () => {
  const { sidebarOptions, setSidebarOptions } = useJumboLayoutSidebar();
  const { sidebarTheme } = useJumboSidebarTheme();

  const isMiniAndClosed = React.useMemo(() => {
    return sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions?.open;
  }, [sidebarOptions.view, sidebarOptions.open]);


  return (
    <React.Fragment>
      {
        sidebarOptions?.style !== SIDEBAR_STYLES.CLIPPED_UNDER_HEADER &&
        <DrawerHeader>
          <Logo mini={isMiniAndClosed} mode={sidebarTheme.type} />
          {
            sidebarOptions?.view !== SIDEBAR_VIEWS.MINI &&
            <Zoom in={sidebarOptions?.open}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: 0, mr: -1.5 }}
                onClick={() => setSidebarOptions({ open: false })}
              >
                <MenuOpenIcon />
              </IconButton>
            </Zoom>
          }
        </DrawerHeader>
      }
    </React.Fragment>
  )
};

export default Sidebar;
