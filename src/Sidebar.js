import React from 'react'
import "./Sidebar.css"
import { Home, Twitter, Search, NotificationsNone, MailOutline, BookmarkBorder, ListAlt, PermIdentity, MoreHoriz } from '@material-ui/icons'
import {Button} from '@material-ui/core'
import SidebarOption from './SidebarOption'

function Sidebar() {
    return (
        <div className="sidebar">
            <Twitter className="sidebar__twitterIcon" />
            <SidebarOption Icon={Home} text="Home" active />
            <SidebarOption Icon={Search} text="Explore" />
            <SidebarOption Icon={NotificationsNone} text="Notification" />
            <SidebarOption Icon={MailOutline} text="Message" />
            <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
            <SidebarOption Icon={ListAlt} text="Lists" />
            <SidebarOption Icon={PermIdentity} text="Profile" />
            <SidebarOption Icon={MoreHoriz} text="More" />
            <Button varient="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
