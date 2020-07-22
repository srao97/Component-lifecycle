import { LightningElement,api } from 'lwc';

export default class MeetRoom extends LightningElement {
    @api meetRoomInfo = {roomName:'A-01', roomCapacity:'12'}

    @api showsRoomInfo = false;

    tileClickHandler(){
        const tileClicked = new CustomEvent('tileclick', {detail : this.meetRoomInfo, bubbles :true});

        this.dispatchEvent(tileClicked);
    }
}