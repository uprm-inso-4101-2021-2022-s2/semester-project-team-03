import react from "react";
import PetsIcon from '@mui/icons-material/Pets';
import SidebarOption from './SidebarOption';
import "./Sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import { Button } from "@material-ui/core"
function Sidebar(){
    return(
        <div className="sidebar">
            <PetsIcon/>
            <SidebarOption  active Icon ={HomeIcon} text="Home"/>
            <SidebarOption Icon={AddLocationAltIcon} text="Explore"/>
            <SidebarOption Icon={VolunteerActivismIcon} text="Adopt"/>
            <SidebarOption Icon={SettingsIcon} text="Options"/>
            <SidebarOption Icon={ReportIcon} text="Report"/>
            <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>

            <Button variant = "outlined" className="sidebar__rReport"  fullWidth> Report </Button>

            {/*SidebarOption*/}
             {/*SidebarOption*/}
             {/*SidebarOption*/}
             {/*SidebarOption*/}


        </div>
    )
}
export default Sidebar;