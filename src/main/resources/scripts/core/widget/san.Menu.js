/**
 * Created by Sayan on 08-06-2014.
 */


define(["library/jquery","library/widgetfactory"],function(){
    (function($,undefined){
        $.widget("san.Menu",{
            options:{
                        expandMenu:"click",
                        direction:"rtl",
                        menuData:""
            },
            constants:{
                flag:true,
                fragment:""
            },

            _create:function(){
                var _self=this,
                    menuJson=this.options.menuData,
                    menuData=(typeof menuJson==="string")? $.parseJSON(menuJson):$.parseJSON(JSON.stringify(menuJson)),
                    menuRender=menuData[0].Menu,
                    parentInstance = $("#menuListHolder");
                    _self.constants.fragment=document.createDocumentFragment();
                _self._renderMenu(menuRender);
                parentInstance.append(_self.constants.fragment);

            },

            _renderMenu:function(menuData){
                var length=menuData.length,i,_self=this;
                for(i=0;i<length;i++){
                    _self._renderFullMenu(menuData[i].topTab[0]);
                }
            },
            _renderFullMenu:function(menuData){
                var _self = this,
                    fragment = _self.constants.fragment;
                $.each(menuData,function(key,data){
                    var liElement = document.createElement("li"),
                        anchor = document.createElement("a");
                    if(data.Window){
                        $(liElement).attr({"id":data.Window,"title":data.WindowTitle, "category":key, "class":"lastNode"});
                        $(anchor).attr({"id":"leaf_"+data.Window, "class":"leafAnchor"});
                        $(anchor).text(data.WindowTitle);
                        liElement.appendChild(anchor);
                        fragment.appendChild(liElement);
                    }
                    else{
                        $(liElement).attr({"id":data.Window,"title":data.WindowTitle, "category":key, "class":"lastNode"});
                        $(anchor).attr({"id":"intm_"+data.Window, "class":"childHolderAnchor"});
                        $(anchor).text(key);
                        liElement.appendChild(anchor);
                        fragment.appendChild(liElement);
                        _self._renderFullMenu(data);
                    }
                });
            }


            /*_renderFullMenu:function(menuData){
                var _self=this,
                    counter= 0,
                    li_element="",anchor_element;
                $.each(menuData,function(key,value){
                    if(!_self.constants.flag && li_element){
                        li_element.appendChild(anchor_element);
                        _self.constants.fragment.appendChild(li_element)
                    }
                    if(typeof value==="object"){
                        menuData=menuData[key];
                        _self._renderMenu(menuData);
                    }
                    else{
                        _self.constants.flag=false;
                        counter+=1;
                        if(counter===1){
                            li_element=document.createElement("li");
                            anchor_element=document.createElement("a");
                            li_element.setAttribute("class","menuData");
                        }
                        key=key.replace(/\s+/g,"","");
                        anchor_element.setAttribute("data-"+key,value);
                    }
                });
            }*/
        });
    })($);
});