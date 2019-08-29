function debug_contextmenu(){if(gui_contextmenu_debugmenu==null){var e=require("nw.gui"),t=gui_contextmenu_create();t.addItem({label:"Show the Developer Tools",click:function(){top.show_dev_tools()}}),t.addSeparator(),t.addItem({label:"Reload",click:function(){e.Window.get().reloadIgnoringCache()}}),document.body.addEventListener("contextmenu",n,!1);function n(e){t.popup(e)}gui_contextmenu_debugmenu=t}}function gui_contextmenu_create(){function r(e,t){var n={x:0,y:0},r=t,i=e.view;do{var s=window.getComputedStyle(r)["-webkit-transform"];if(s&&s.indexOf("matrix(")==0){var o=s.slice(7).split(",");o.length==6&&(n.x+=parseFloat(o[4]),n.y+=parseFloat(o[5]))}var u=r==document.body?document.documentElement.scrollLeft:r.scrollLeft,a=r==document.body?document.documentElement.scrollTop:r.scrollTop;n.x-=u,n.y-=a,n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent,r==null&&(r=i.frameElement,i=i.parent)}while(r);return n}var e=require("nw.gui"),t={},n=new e.Menu;return t.addItem=function(t){var r=new e.MenuItem(t);return n.append(r),r},t.addItemAt=function(t,r){var s=new e.MenuItem(r);return n.insert(s,i),s},t.addSeparator=function(){var t=new e.MenuItem({type:"separator"});return n.append(t),t},t.getItem=function(e){return n.items[e]},t.getItems=function(){return n.items},t.popup=function(e){var t=r(e,document.body),i=e.x+t.x,s=e.y+t.y,o=top.ksystem.getZoomFactor();i=i*o|0,s=s*o|0,n.popup(i,s)},t}function gui_contextmenu_setup(){var e=require("nw.gui"),t=gui_contextmenu_create(),n=document,r=t.addItem({label:"Undo",click:function(){n.execCommand("undo")}});t.addSeparator();var i=t.addItem({label:"Cut",click:function(){n.execCommand("cut")}}),s=t.addItem({label:"Copy",click:function(){n.execCommand("copy")}}),o=t.addItem({label:"Paste",click:function(){n.execCommand("paste")}}),u=t.addItem({label:"Delete",click:function(){n.execCommand("delete")}});t.addSeparator();var a=t.addItem({label:"Select All",click:function(){n.execCommand("selectAll")}});gui_contextmenu_editmenu_handler=function(r){n=r.view.frameElement.contentDocument;var a=n.getSelection().toString(),f=e.Clipboard.get().get("text");i.enabled=!!a,s.enabled=!!a,o.enabled=!!f,u.enabled=!!a,t.popup(r)}}function gui_contextmenu_assign_editmenu(e){e.addEventListener("contextmenu",top.gui_contextmenu_editmenu_handler,!1)}function gui_contextmenu_remove_editmenu(e){e.removeEventListener("contextmenu",top.gui_contextmenu_editmenu_handler,!1)}var gui_contextmenu_editmenu=null,gui_contextmenu_editmenu_handler=null,gui_contextmenu_debugmenu=null