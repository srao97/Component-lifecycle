import { LightningElement,track } from 'lwc';

export default class MeetRooms extends LightningElement {
    @track selectedMeetRoom;

    meetRoomsInfo = [
        {roomName: 'A-01', roomCapacity:'12'},
        {roomName: 'A-02', roomCapacity:'14'},
        {roomName: 'A-03', roomCapacity:'16'},
        {roomName: 'A-04', roomCapacity:'18'},
        {roomName: 'A-05', roomCapacity:'12'}
        ];
    onTileSelectHandler(event){
        const meetRoomsInfo = event.detail;
        this.selectedMeetRoom = meetRoomsInfo.roomName;
    }   
    constructor(){
        super();
        this.template.addEventListener('tileclick',this.onTileSelectHandler.bind(this));

    }
}