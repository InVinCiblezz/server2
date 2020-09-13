import { observable } from "mobx";
import axios from "axios";

class AppState
{
    api_base = 'http://127.0.0.1:8080';
    @observable appname = "EasyStarter";    
    @observable top_menu_items = [
        {"text":"Homepage", "link":"/"},
        {"text":"sendKey", "link":"/sendKey"},
        {"text":"3rd Part", "link":"/app"},
        {"text":"feedback", "link":"/feedback"},
    ];
    
    async get_qrcode()
    {
        const {data} = await axios.get(this.api_base + '/qrcode');
        return data || false;
    }

}

export default new AppState();