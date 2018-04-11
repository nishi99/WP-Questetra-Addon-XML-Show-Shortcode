!function(L){L.fn.questetraAddonView=function(a){var o={init:function(a){var t=L.extend({locale:null,label:".addon-xml-label",summary:".addon-xml-summary",help:".addon-xml-help",config:".addon-xml-config",configTable:".addon-xml-config-table",script:".addon-xml-script",icon:".addon-xml-icon",download:".addon-xml-download",requiredLabel:{en:"required",ja:"必須"},formTypeLabel:{en:{TEXTFIELD:"Single-line input",TEXTAREA:"Multi-line input",SELECT:"Data select"},ja:{TEXTFIELD:"単一行記述",TEXTAREA:"複数行記述",SELECT:"データ項目選択"}},dataTypeLabel:{en:{STRING:"String",STRING_TEXTFIELD:"String(single line)",STRING_TEXTAREA:"String(multiple line)",DECIMAL:"Numeric",DATE:"Date",DATETIME:"Datetime",SELECT:"Select",SELECT_SINGLE:"Select(radio/select/search)",SELECT_CHECKBOX:"Select(check box)",QUSER:"User",QGROUP:"Organization",LIST:"Table",FILE:"File",DISCUSSION:"Discussion"},ja:{STRING:"文字列型",STRING_TEXTFIELD:"文字列型（単一行）",STRING_TEXTAREA:"文字列型（複数行）",DECIMAL:"数値型",DATE:"日付型",DATETIME:"日時型",SELECT:"選択型",SELECT_SINGLE:"選択型（ラジオ/セレクト/検索）",SELECT_CHECKBOX:"選択型（チェックボックス）",QUSER:"ユーザ型",QGROUP:"組織型",LIST:"テーブル型",FILE:"ファイル型",DISCUSSION:"掲示板型"}},enableEl:{en:"Inserting EL expressions is also possible",ja:"EL式挿入も可"},class:{prefix:"questetra-addon-xml-viewer",status:{wait:"loader-status-wait",loading:"loader-status-loading",loaded:"loader-status-loaded"},label:"label",summary:"summary",required:"required",el:"el",help:"help",script:"script",config:"config",configRow:"row",configRowItem:"item",formType:"formtype",dataTypes:"datatypes",dataType:"datatype"}},a),s=L(this).data("addon-xml-lang");return s&&0<s.length&&"en"!==s&&(t.locale=s),L(this).addClass(t.class.prefix),L(this).addClass(t.class.prefix+"-"+t.class.status.wait),L(".questetra-addon-xml-viewer-loader-status-wait-view").show(),L(this).data("addon-setting",t),o.show.apply(this,[]),this},_loadSrc:function(t){var s=this,a=L(this).data("addon-xml-src"),e=L(this).data("addon-setting");a&&(L(e.download).attr({href:a}),L(this).data("addon-status","loading"),L(this).removeClass(e.class.prefix+"-"+e.class.status.wait),L(".questetra-addon-xml-viewer-loader-status-wait-view").hide(),L(this).addClass(e.class.prefix+"-"+e.class.status.loading),L(".questetra-addon-xml-viewer-loader-status-loading-view").show(),L.ajax(a,{type:"get",data:{query:L("#keyword").val()},dataType:"xml"}).done(function(a){L(s).data("addon-src",a),L(s).data("addon-status","loaded"),L(s).removeClass(e.class.prefix+"-"+e.class.status.loading),L(s).addClass(e.class.prefix+"-"+e.class.status.loaded),L(".questetra-addon-xml-viewer-loader-status-loading-view").hide(),L(".questetra-addon-xml-viewer-loader-status-loaded-view").show(),o[t].apply(s,[])}).fail(function(){window.alert("正しい結果を得られませんでした。")}))},show:function(){L(this).data("addon-src")?(o._showLabel.apply(this,[]),o._showSummary.apply(this,[]),o._showScript.apply(this,[]),o._showConfig.apply(this,[]),o._showConfigTable.apply(this,[]),o._showIcon.apply(this,[]),o._showHelpUrl.apply(this,[])):o._loadSrc.apply(this,["show"])},_getLocale:function(a){var t=L(this).data("addon-setting").locale;return t||a},_getLocaleSelector:function(){var a=o._getLocale.apply(this,[null]);return a?"[locale='"+a+"']":""},_showLabel:function(){var a=L(this).data("addon-src"),t=L(this).data("addon-setting");if(a){var s=o._getLocaleSelector.apply(this,[]),e=L(a).find("service-task-definition > label"+s).html();L(t.label).html(e).addClass(t.class.prefix+"-"+t.class.label)}},_showSummary:function(){var a=L(this).data("addon-src"),t=L(this).data("addon-setting");if(a){var s=o._getLocaleSelector.apply(this,[]),e=L(a).find("service-task-definition > summary"+s).html();L(t.summary).html(e).addClass(t.class.prefix+"-"+t.class.summary)}},_showHelpUrl:function(){var a=L(this).data("addon-src"),t=L(this).data("addon-setting");if(a){var s=o._getLocaleSelector.apply(this,[]),e=L(a).find("service-task-definition > help-page-url"+s).html();L(t.help).attr("href",e).addClass(t.class.prefix+"-"+t.class.help)}else L(t.help).hide()},_showScript:function(){var a=L(this).data("addon-src"),t=L(this).data("addon-setting");if(a){var s=L(a).find("script").html();s=s.replace(/<\!\[CDATA\[\n*|\n*\]\]>/g,""),L(t.script).html(s).addClass(t.class.prefix+"-"+t.class.script)}},_showConfigTable:function(){var a=L(this).data("addon-src"),i=L(this).data("addon-setting");if(a){var t=L(a).find("service-task-definition > configs > config"),l=o._getLocaleSelector.apply(this,[]),d=(o._getLocale.apply(this,["en"]),"");t.each(function(a,t){var s=L(this).find("label"+l).html(),e=L(this).attr("name");d+='<tr class="'+i.class.prefix+"-"+i.class.config+'-table-low">',d+='<th class="'+i.class.prefix+"-"+i.class.config+'-table-low-name">'+e+"</th>",d+='<td class="'+i.class.prefix+"-"+i.class.config+'-table-low-label">'+s+"</td>",d+="</tr>"}),L(i.configTable).html(d)}},_showConfig:function(){var a=L(this).data("addon-src"),p=L(this).data("addon-setting");if(a){var t=L(a).find("service-task-definition > configs > config"),h=o._getLocaleSelector.apply(this,[]),f=o._getLocale.apply(this,["en"]),u="",g=p.class.prefix+"-"+p.class.config+"-"+p.class.configRow,m=g+"-"+p.class.configRowItem,v=m+"-"+p.class.label,w=m+"-"+p.class.required,y=m+"-"+p.class.el,E=m+"-"+p.class.formType,T=m+"-"+p.class.dataTypes,S=m+"-"+p.class.dataTypes+"-"+p.class.dataType;t.each(function(a,t){var s="",e=L(this).find("label"+h).html(),i=String(L(this).attr("form-type")).toUpperCase();"UNDEFINED"===i&&(i=null);var l=[],d=String(L(this).attr("select-data-type")).toUpperCase();"UNDEFINED"!==d&&(l=d.split("|"));var o="true"===String(L(this).attr("required")).toLowerCase(),n="true"===String(L(this).attr("el-enabled")).toLowerCase();if(s+='<div class="'+m+" "+v+'">'+e+"</div>",s+='<div class="'+m+'-meta" >',o&&(s+='<div class="'+m+" "+w+'">'+p.requiredLabel[f]+"</div>"),n&&(s+='<div class="'+m+" "+y+'">'+p.enableEl[f]+"</div>"),s+='<div class="'+m+'-meta-data" >',i&&(s+='<div class="'+m+" "+E+" "+E+"-"+i.toLowerCase()+'">'+p.formTypeLabel[f][i]+"</div>"),0<l.length){s+='<div class="'+m+" "+T+'">';for(var r=0;r<l.length;r++){var c=p.dataTypeLabel[f][l[r]];s+='<div class="'+S+" "+S+"-"+l[r].toLowerCase()+'">'+c+"</div>"}s+="</div>"}s+="</div>\x3c!-- meta-data //--\x3e",u+=s='<div class="'+g+'">'+(s+="</div>\x3c!-- meta //--\x3e")+"</div>"}),L(p.config).html(u).addClass(p.class.prefix+"-"+p.class.config)}},_showIcon:function(){var a=L(this).data("addon-src"),t=L(this).data("addon-setting");if(a){var s=L(a).find("icon").html();L(t.icon).attr("src","data:image/png;base64,"+s)}}};return o[a]?(console.log("methods",o),o[a].apply(this,Array.prototype.slice.call(arguments,1))):"object"!=typeof a&&a?void L.error("Method "+a+" does not exist on jQuery.tooltip"):o.init.apply(this,arguments)}}(jQuery),function(a){a(document).ready(function(){a("div[data-questetra='addon-xml-loader']").questetraAddonView()})}(window.jQuery);