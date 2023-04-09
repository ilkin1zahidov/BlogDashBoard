import React from 'react';
import "../../assets/css/emailList.css";
import { Checkbox,IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import Section from '../../components/Email/Section';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from '../../components/Email/EmailRow';
const EmailList = () => {
  return (
    <div className='emailList'>
        <div className="emailList_settings">
            <div className="emailList_settingsLeft">
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                    <RedoIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            <div className="emailList_settingsRight">
                <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
            </div>
            <div className="emailList_sections">
                <Section Icon={InboxIcon} title= "primary" color="red" selected />
                <Section Icon={PeopleIcon} title= "Social" color="#1A73E8"/>
                <Section Icon={LocalOfferIcon} title= "Promotions" color="green"/>
            </div>
        </div>

        <div className="emailList_list">
            <EmailRow
                title= "Twitch"
                subject= "Hey fellow streamer!!!"
                description= "This is a test"
                time="10pm"
            />
              <EmailRow
                title= "Twitch"
                subject= "Hey fellow streamer!!!"
                description= "This is a Dope"
                time="10pm"
            />
        </div>
 
    </div>
  )
}
export default EmailList