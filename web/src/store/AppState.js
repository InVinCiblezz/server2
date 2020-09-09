import { observable } from "mobx";

class AppState
{
    @observable appname = "EasyStarter";    
    @observable top_menu_items = [
        {"text":"Homepage", "link":"/"},
        {"text":"sendKey", "link":"/sendKey"},
        {"text":"3rd Part", "link":"/app"},
        {"text":"feedback", "link":"/feedback"},
    ]
}

export default new AppState();