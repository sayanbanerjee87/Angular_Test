/**
 * Created by SAYAN on 08-06-2014.
 */

define(["widget/san.Menu","util/menuJSON"],function(){
    $(document).ready(function(){
        var menuJSON=ReturnMenuJson();
        $(".menubarContainer").Menu({menuData:menuJSON});
    });
});