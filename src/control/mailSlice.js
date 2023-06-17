import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail:null,
    sendMessageIsOpen: false,
    inboxCount:50,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false;
    },
    incrementInboxCount:state => {
      state.inboxCount +=1;
    },
  },
});

export const { selectMail, openSendMessage, closeSendMessage, incrementInboxCount } = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const selectInboxCount = (state) => state.mail.inboxCount;

export default mailSlice.reducer;