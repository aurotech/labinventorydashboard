(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{233:function(e,t,a){e.exports=a(438)},240:function(e,t,a){},289:function(e,t,a){},434:function(e,t,a){},436:function(e,t,a){},438:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(25),l=a(28),c=a(5),i=a.n(c),o=a(13),u=a(18),m=a(19),p=a(21),d=a(20),h=a(22),b=(a(240),a(39)),f=a(29),E=a.n(f),v=a(17);E.a.interceptors.request.use(function(e){return e.headers["X-Access-Token"]=localStorage.getItem("labId"),e},function(e){return Promise.reject(e)}),E.a.interceptors.response.use(null,function(e){if(e.response&&e.response.status>=400&&e.response.status<=500)return Promise.reject(e)});var y="http://ec2-54-89-116-114.compute-1.amazonaws.com:";function g(e){return k.apply(this,arguments)}function k(){return(k=Object(o.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post(y+"8080/login/",t);case 2:if(!(a=e.sent).data){e.next=7;break}return localStorage.setItem("username",t.username),localStorage.setItem("labId",a.data.token.toString()),e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get(y+"8080/assets");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.assets);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}))).apply(this,arguments)}function x(e){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get(y+"8080/batchAssetQuantityHistory/"+t);case 3:return a=e.sent,n=a.data,e.abrupt("return",n.qtyHistory);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}))).apply(this,arguments)}function A(e,t,a){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(i.a.mark(function e(t,a,n){var s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=L(t,a,n),0,e.prev=2,e.next=5,S([],0,s);case 5:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}))).apply(this,arguments)}function I(e){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post(y+"80/api/AssetEditLabelsTransaction/",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(e,t,a){return T.apply(this,arguments)}function T(){return(T=Object(o.a)(i.a.mark(function e(t,a,n){var s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a<n.length)){e.next=15;break}return e.prev=1,e.next=4,E.a.post(n[a].url,n[a].body);case 4:s=e.sent,t.push(s),v.toast.success(n[a].field.toUpperCase()+"  was updated successfully."),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),v.toast.error("Unable update "+n[a].property+".Pleasd try again.");case 12:a++,e.next=0;break;case 15:return v.toast.info("Updating transaction history"),e.abrupt("return",t);case 17:case"end":return e.stop()}},e,null,[[1,9]])}))).apply(this,arguments)}function L(e,t,a){var n=[];return Object.keys(t).map(function(s){var r,l="Edit"+s[0].toUpperCase()+s.slice(1),c="new"+s[0].toUpperCase()+s.slice(1);"status"===s?(l="Move",c="newLocation"):"quantity"===s&&(t[s]-a>0?(l="Addition",c="amount"):(l="Subtraction",c="amount"),t[s]=Math.abs(t[s]-a)),r="".concat(y,"80/api/Asset").concat(l,"Transaction"),n.push({body:Object(b.a)({asset:e},c,t[s]),url:r,property:l,field:s})}),n}function D(e){return F.apply(this,arguments)}function F(){return(F=Object(o.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get(y+"80/api/LabAsset/"+t);case 3:if(a=e.sent,!(n=a.data)){e.next=7;break}return e.abrupt("return",n);case 7:return e.abrupt("return",[]);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}))).apply(this,arguments)}function B(e){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get(y+"8080/assetHistory/"+t);case 3:if(a=e.sent,!(n=a.data)||!n.history){e.next=7;break}return e.abrupt("return",n.history);case 7:return e.abrupt("return",[]);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}))).apply(this,arguments)}function H(){return U.apply(this,arguments)}function U(){return(U=Object(o.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get(y+"8080/recentTransactions/");case 3:if(t=e.sent,!(a=t.data)||!a.history){e.next=7;break}return e.abrupt("return",a.history);case 7:return e.abrupt("return",[]);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}))).apply(this,arguments)}var q=a(439),G=a(33),M=a.n(G),_=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={assets:[],assetHistory:[],active:!1},a.getHistory=function(){var e=Object(o.a)(i.a.mark(function e(t,n,s){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.persist(),a.setState({active:!0}),e.prev=2,e.next=5,B(s);case 5:(r=e.sent)&&a.state.assetHistory.length<=1&&(a.setState({assetHistory:r,active:!1}),n.show(t,t.target)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),v.toast.error("Server is unavailable. Please check later.");case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t,a,n){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.assets){e.next=5;break}return e.next=3,w();case 3:t=e.sent,this.setState({assets:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"displayTableBody",value:function(e){return e?e.map(function(e,t){return s.a.createElement("tr",{key:e.assetId},s.a.createElement("td",null,s.a.createElement(q.a,{to:{pathname:"/asset/".concat(e.assetId),search:"?type=".concat(e.assetType),state:e},className:"badge badge-secondary"},e.assetId)),s.a.createElement("td",null,e.assetType),s.a.createElement("td",null,e.description.slice(0,15)+"..."),s.a.createElement("td",null,e.quantity||1),s.a.createElement("td",null,e.status),s.a.createElement("td",null,e.timeLastUpdated.slice(0,10)))}):e.map(function(e,t){return s.a.createElement("tr",{key:e.assetId},s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null,"Assets are unavailable"),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null))})}},{key:"render",value:function(){return s.a.createElement(M.a,{active:this.state.active,spinner:!0,styles:{spinner:function(e){return Object(l.a)({},e,{width:"100px",height:"100px",top:"-150px","& svg circle":{stroke:"#0F6FA6"}})}}},s.a.createElement("div",{className:this.props.tableClasses},s.a.createElement("table",{className:"rounded table tableFixHead table-striped"+(this.props.tableClasses?"":" b-raised")},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"ID"),s.a.createElement("th",{scope:"col"},"Type"),s.a.createElement("th",{scope:"col"},"Description"),s.a.createElement("th",{scope:"col"},"Quantity"),s.a.createElement("th",{scope:"col"},"Location"),s.a.createElement("th",{scope:"col"},"Last Updated"))),s.a.createElement("tbody",null,this.props.assets?this.displayTableBody(this.props.assets):this.displayTableBody(this.state.assets)))))}}]),t}(n.Component),J=a(74),W=a(111);function z(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(W.randomColor)({seed:e+Math.random,luminosity:"bright"})}function R(e,t){if(e.slice(0,3)!==t.slice(0,3))return!0}function Q(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"null",n=function(e){var t=new Date(e);return("0"+(t.getMonth()+1)).slice(-2)+"/"+("0"+t.getDate()).slice(-2)+"/"+t.getFullYear()}(e.timestamp);return"AssetEditLabelsTransaction"===e.transactionClass?s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("div",{style:{textAlign:"center",marginBottom:"10px",background:"linearGradient(to right, red, yellow)"}},"Asset "," -  ",s.a.createElement(q.a,{to:{pathname:"/asset/".concat(e.assetId?e.assetId:a),search:"?type=".concat(e.assetType),state:e},className:"field-purple"},e.assetId?e.assetId:a),s.a.createElement("hr",null)),s.a.createElement("span",{className:"m-5 "},s.a.createElement("span",{className:"field-blue"},"Labels were updated")," on"," "+n," by"," ",s.a.createElement("span",{className:"field-blue mb-10"}," "+e.user)),s.a.createElement("span",null),s.a.createElement("span",{className:"d-block"},e.newLabels.length>0&&"New Labels:",e.newLabels.length>0&&e.newLabels.map(function(t,a){return a!==e.newLabels.length-1?s.a.createElement("span",{key:a}," "+t+", "):s.a.createElement("span",{key:a}," "+t)}))):"AssetAdditionTransaction"===e.transactionClass?s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("div",{style:{textAlign:"center",marginBottom:"10px",background:"linearGradient(to right, red, yellow)"}},"Asset "," -  ",s.a.createElement(q.a,{to:{pathname:"/asset/".concat(e.assetId?e.assetId:a),search:"?type=".concat(e.assetType),state:e},className:"field-purple"},e.assetId?e.assetId:a),s.a.createElement("hr",null)),s.a.createElement("span",{className:"m-5 "},s.a.createElement("span",{className:"field-green"},e.transactionType," on")," "+n," by"," ",s.a.createElement("span",{className:"field-blue mb-10"}," "+e.user)),s.a.createElement("span",null),s.a.createElement("span",{className:"d-block"},"Old Amount:"," "+e.oldAmount),s.a.createElement("span",{className:"d-block"},"New Amount:"," "+e.amount)):"AssetSubtractionTransaction"===e.transactionClass?s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("div",{style:{textAlign:"center",marginBottom:"10px",background:"linearGradient(to right, red, yellow)"}},"Asset "," -  ",s.a.createElement(q.a,{to:{pathname:"/asset/".concat(e.assetId?e.assetId:a),search:"?type=".concat(e.assetType),state:e},className:"field-purple"},e.assetId?e.assetId:a),s.a.createElement("hr",null)),s.a.createElement("span",{className:"m-5 "},s.a.createElement("span",{className:"field-warning"},e.transactionType," on")," "+n," by"," ",s.a.createElement("span",{className:"field-blue mb-10"}," "+e.user)),s.a.createElement("span",null),s.a.createElement("span",{className:"d-block"},"Old Amount:"," "+e.oldAmount),s.a.createElement("span",{className:"d-block"},"New Amount:"," "+e.amount)):"AssetCreateTransaction"===e.transactionClass?s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("div",{style:{textAlign:"center",marginBottom:"10px",background:"linearGradient(to right, red, yellow)"}},"Asset "," -  ",s.a.createElement(q.a,{to:{pathname:"/asset/".concat(e.assetId?e.assetId:a),search:"?type=".concat(e.assetType),state:e},className:"field-purple"},e.assetId?e.assetId:a),s.a.createElement("hr",null)),s.a.createElement("span",{className:"m-5 "},s.a.createElement("span",{className:"field-green"},"A new Asset was created")," on"," "," "+n," by"," ",s.a.createElement("span",{className:"field-blue mb-10"}," "+e.user)),s.a.createElement("span",null),s.a.createElement("span",{className:"d-block"},"Asset Type:"," "+e.assetType),s.a.createElement("span",{className:"d-block"},"Asset Description:"," "+e.description)):"AssetEditThresholdTransaction"===e.transactionClass?s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("div",{style:{textAlign:"center",marginBottom:"10px",background:"linearGradient(to right, red, yellow)"}},"Asset "," -  ",s.a.createElement(q.a,{to:{pathname:"/asset/".concat(e.assetId?e.assetId:a),search:"?type=".concat(e.assetType),state:e},className:"field-purple"},e.assetId?e.assetId:a),s.a.createElement("hr",null)),s.a.createElement("span",{className:"m-5 "},s.a.createElement("span",{className:"field-red"},"Low inventory update")," "+n," by"," ",s.a.createElement("span",{className:"field-blue mb-10"}," "+e.user)),s.a.createElement("span",null),s.a.createElement("span",{className:"d-block"},"Threshold:"," "+e.newThreshold),s.a.createElement("span",{className:"d-block"},"Actual Amount:"," "+e.oldThreshold)):"AssetEditDescriptionTransaction"===e.transactionClass?s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("span",null,s.a.createElement("div",{style:{textAlign:"center",marginBottom:"10px",background:"linearGradient(to right, red, yellow)"}},"Asset "," -  ",s.a.createElement(q.a,{to:{pathname:"/asset/".concat(e.assetId?e.assetId:a),search:"?type=".concat(e.assetType),state:e},className:"field-purple"},e.assetId?e.assetId:a),s.a.createElement("hr",null)),s.a.createElement("span",{className:"field-warning"},"Asset's Description was updated")," ","on "," "+n," by"," ",s.a.createElement("span",{className:"field-blue mb-10"}," "+e.user)),s.a.createElement("span",null),s.a.createElement("span",{className:"d-block"},"Old Description:"," "+e.oldDescription),s.a.createElement("span",{className:"d-block"},"New Description:"," "+e.newDescription)):"AssetMoveTransaction"===e.transactionClass?s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("div",{style:{textAlign:"center",marginBottom:"10px",background:"linearGradient(to right, red, yellow)"}},"Asset "," -  ",s.a.createElement(q.a,{to:{pathname:"/asset/".concat(e.assetId?e.assetId:a),search:"?type=".concat(e.assetType),state:e},className:"field-purple"},e.assetId?e.assetId:a),s.a.createElement("hr",null)),s.a.createElement("span",{className:"m-5 "},s.a.createElement("span",{className:"field-blue"},"Asset's Location was updated")," on"," "," "+n," by"," ",s.a.createElement("span",{className:"field-blue mb-10"}," "+e.user)),s.a.createElement("span",null),s.a.createElement("span",{className:"d-block"},"Old Location:"," "+e.oldLocation),s.a.createElement("span",{className:"d-block"},"New Location:"," "+e.newLocation)):"AssetUndoRemoveTransaction"===e.transactionClass?s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("div",{style:{textAlign:"center",marginBottom:"10px",background:"linearGradient(to right, red, yellow)"}},"Asset "," -  ",s.a.createElement(q.a,{to:{pathname:"/asset/".concat(e.assetId?e.assetId:a),search:"?type=".concat(e.assetType),state:e},className:"field-purple"},e.assetId?e.assetId:a),s.a.createElement("hr",null)),s.a.createElement("span",{className:"m-5 "},s.a.createElement("span",{className:"field-blue"}," Updated on asset")," on "," "+n," ","by ",s.a.createElement("span",{className:"field-blue mb-10"}," "+e.user)),s.a.createElement("span",null),s.a.createElement("span",{className:"d-block"},"Old Location:",e.oldLocation),s.a.createElement("span",{className:"d-block"},"New Location:",e.newLocation)):"AssetAssignTransaction"===e.transactionClass?s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("span",{style:{textAlign:"center",marginBottom:"10px, background: 'linearGradient(to right, red, yellow)'"}},s.a.createElement("div",null,"Asset "," -  ",s.a.createElement(q.a,{to:{pathname:"/asset/".concat(e.assetId?e.assetId:a),search:"?type=".concat(e.assetType),state:e},className:"field-purple"},e.assetId?e.assetId:a)),s.a.createElement("hr",null)),s.a.createElement("span",{className:"m-5 "},s.a.createElement("span",{className:"field-green"}," Asset was assigned")," to"," "," "+e.assignee," on"," "+n," by"," ",s.a.createElement("span",{className:"field-blue mb-10"}," "+e.user))):"AssetEditCommentTransaction"===e.transactionClass?s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("div",{style:{textAlign:"center",marginBottom:"10px",background:"linearGradient(to right, red, yellow)"}},"Asset "," -  ",s.a.createElement(q.a,{to:{pathname:"/asset/".concat(e.assetId?e.assetId:a),search:"?type=".concat(e.assetType),state:e},className:"field-purple"},e.assetId?e.assetId:a),s.a.createElement("hr",null)),s.a.createElement("span",{className:"m-5 "},s.a.createElement("span",{className:"field-warning"}," ","Comments were updated on "," "+n," by"," ",s.a.createElement("span",{className:"field-blue mb-10"}," "+e.user))),s.a.createElement("span",{className:"d-block"},"Old Comment: "," "+e.oldComment),s.a.createElement("span",{className:"d-block"},"New Comment: "," "+e.newComment)):void 0}var Y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).chartPieces={},a.state={data:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;this.props.assets&&(this.chartPieces.other=0,this.props.assets.map(function(e){e.labels.length?e.labels[0]in t.chartPieces?t.chartPieces[e.labels[0]]+=1:t.chartPieces[e.labels[0]]=1:t.chartPieces.other+=1}));var a=[],n=0,s=function(e){for(var t=[],a=0,n=null;t.length<e;)n=z(t.length,"orange"),0===t.length&&t.push(n),t.indexOf(n)<0&&R(t[a],n)&&(t.push(n),a++);return t.splice(1,1,"#1040B8"),t.splice(t.length-1,1,"#007f0e"),t}(Object.keys(this.chartPieces).length);for(var r in s.splice(0,1,"#fab917"),this.chartPieces){var l={color:s[n],highlight:s[n],value:this.chartPieces[r],label:r};n++,a.push(l)}a.length>0&&(this.state.data.length||this.setState({data:a}))}},{key:"render",value:function(){return s.a.createElement("div",null,this.state.data.length>0&&s.a.createElement(J.Doughnut,{data:this.state.data,options:{title:{display:!0,text:"Single Asset Division"},legend:{display:!0,position:"top"},animationEasing:"easeInSine",showTooltips:!0,responsive:!0,tooltipTitleFontColor:"#000",percentageInnerCutout:40,maintainAspectRatio:!1},height:"220",width:"120"}))}}]),t}(s.a.Component),V=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={assets:[],lowInventory:[],recents:[],singleAssets:[],batchAssets:[],active:!0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t,a,n,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w();case 3:return t=e.sent,e.next=6,H();case 6:a=e.sent,n=[],s=[],t.filter(function(e){"Batch"===e.assetType?n.push(e):s.push(e)}),a&&t&&a.map(function(e){t.forEach(function(t){t.assetId===e.assetId&&(e.assetType=t.assetType)})}),this.setState({assets:t,recents:a,singleAssets:s,batchAssets:n,active:!1}),this.checkLowInvenntory(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),this.setState({active:!1});case 18:case"end":return e.stop()}},e,this,[[0,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"checkLowInvenntory",value:function(){var e=this,t=[];this.state.assets.map(function(a){a.quantity<a.threshold&&(t.push(a),e.setState({lowInventory:t}))})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(M.a,{active:this.state.active,className:"_loading_overlay_overlay",spinner:!0,styles:{spinner:function(e){return Object(l.a)({},e,{width:"100px",height:"100px",top:"-150px","& svg circle":{stroke:"#0F6FA6"}})}}},s.a.createElement("div",{className:"row b-raised sec-batch-scroll"},s.a.createElement("div",{className:"col-9 my-card"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6 data-block my-card"},s.a.createElement("p",{className:"box-heading"},"Total Single Assets"),s.a.createElement("h3",null,this.state.assets.length-this.state.batchAssets.length),this.state.assets&&s.a.createElement(Y,{assets:this.state.singleAssets})),s.a.createElement("div",{className:"col-6 data-block my-card"},s.a.createElement("p",{className:"box-heading"},"Total Batch Assets"),this.state.batchAssets&&s.a.createElement("h3",null,this.state.batchAssets.length),s.a.createElement(Y,{assets:this.state.batchAssets,batch:!0})),s.a.createElement("div",{className:"data-block col-12"},s.a.createElement("div",{className:"pull-right"},s.a.createElement(q.a,{className:"btn btn-warning btn-sm",style:{float:"right"},to:"/assets"},"Show More")),s.a.createElement("h4",{style:{textAlign:"left"}},"Total Items: ",this.state.assets.length),s.a.createElement(_,{tableClasses:"table-scroll",assets:this.state.assets})))),s.a.createElement("div",{className:"col-3 row-itmes-flex my-card no-left-border scroll-card"},s.a.createElement("div",{className:"inventory-update"},s.a.createElement("h6",{style:{textAlign:"left"},className:"label-fixed mt-0 card-filled"},"Low Inventory Items:"," ",s.a.createElement("span",{className:"badge badge-dark"},this.state.lowInventory.length)),s.a.createElement("ul",{className:"list-group"},this.state.lowInventory.map(function(e,t){return s.a.createElement("li",{className:"list-group-item",key:t},s.a.createElement("span",{className:"field-red"},e.assetId)," is low on inventory. Only ",e.quantity," left.")}))),s.a.createElement("div",{className:"inventory-transactions "},s.a.createElement("br",null),s.a.createElement("h6",{style:{textAlign:"left"},className:"card-filled"},"Latest Transactions:"," ",s.a.createElement("span",{className:"badge badge-dark"},this.state.recents.length)),this.state.recents.map(function(e,t){return s.a.createElement("ul",{className:"list-group",key:t},s.a.createElement("li",{className:"list-group-item"},Q(e,t)),s.a.createElement("br",null))}))))))}}]),t}(n.Component),X=a(160),K=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).state={data:{labels:[],datasets:[{label:"Batch",fillColor:"rgba(220,220,220,0)",strokeColor:"#116EA5",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,1)",data:[]}]}},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(this.props.id);case 2:t=e.sent,this.getBatchData(t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getBatchData",value:function(e){var t={labels:[],data:[]};e.map(function(e){t.data.push(e.quantity),t.labels.push(new Date(e.timestamp).toLocaleString("en-us",{month:"long"}))}),this.setState({data:{labels:t.labels,datasets:[{label:"Batch",fillColor:"rgba(220,220,220,0)",strokeColor:"#116EA5",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,1)",data:t.data}]}})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(J.Line,{data:this.state.data,options:{responsive:!0,animationSteps:100,bezierCurve:!1,steppedLine:"after",scaleShowGridLines:!0,scaleShowVerticalLines:!0},height:"210",width:"800"}))}}]),t}(n.Component),Z=(a(289),a(157)),$=a(30),ee=a.n($),te=a(71),ae=a.n(te),ne=a(67),se=a.n(ne),re=a(72),le=a.n(re),ce=a(69),ie=a.n(ce),oe=a(70),ue=a.n(oe),me=a(68),pe=a.n(me),de=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={open:!1,asset:{}},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({asset:e.data})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{style:this.props.styles},this.props.button,s.a.createElement(se.a,{open:this.props.open,onClose:function(){return e.props.onClick()},"aria-labelledby":"form-dialog-title"},s.a.createElement(pe.a,{id:"form-dialog-title"},this.props.title),s.a.createElement(ie.a,null,s.a.createElement(ue.a,null,"Edit the asset details here:"),this.props.fields.map(function(t,a){return s.a.createElement(ae.a,{margin:"dense",key:a,id:t.label.toLowerCase(),label:t.label,type:t.type,defaultValue:t.value,fullWidth:!0,hidden:"single"===e.props.assetType&&"number"===t.type,onChange:function(e){return t.onChange(t.label.toLowerCase(),e)}})})),s.a.createElement(le.a,null,s.a.createElement(ee.a,{onClick:function(){return e.props.onClick()},color:"primary"},"Cancel"),s.a.createElement(ee.a,{onClick:function(){return e.props.onSubmit()},color:"primary"},this.props.submitButtonTitle?this.props.submitButtonTitle:"Save"))))}}]),t}(n.Component),he=a(54),be=a.n(he),fe=a(35),Ee=function(e){return s.a.createElement("div",{className:"col-4",style:{maxHeight:"inherit",overflowY:"scroll",position:"relative",marginTop:"60px"}},s.a.createElement("div",{style:{position:"fixed",top:"250px",width:"27%",zIndex:"2000"}},s.a.createElement("h6",{className:"card-filled"},"Transaction History"),s.a.createElement("hr",null)),s.a.createElement("div",{style:{position:"absolute",top:"5px"}},e.data.reverse().map(function(t,a){return s.a.createElement("ul",{className:"list-group",key:a},s.a.createElement("li",{className:"list-group-item"},Q(t,a,e.assetId)),s.a.createElement("br",null))})))},ve=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={assetHistory:[],asset:{},showDialog:!1,open:!1,forLabels:!1,active:!0,temp:{},tempLabel:"",anchorEl:null},a.handleClickOpen=function(e){a.setState({open:!a.state.open})},a.handleClose=function(){a.setState({open:!1,forLabels:!1})},a.handleChange=function(e,t){var n=a.state.temp;n[e]=t.target.value,a.setState({temp:n})},a.handleSubmit=Object(o.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Object.keys(a.state.temp).length>0)){e.next=14;break}return a.setState({active:!0,open:!1}),e.prev=2,e.next=5,A(a.state.asset.assetId,a.state.temp,a.state.asset.quantity);case 5:e.sent&&(a.getAssetsData(),a.setState({temp:{}})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a.setState({active:!1});case 12:e.next=15;break;case 14:a.setState({open:!1});case 15:case"end":return e.stop()}},e,null,[[2,9]])})),a.assetType=Z.parse(e.location.search).type,a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.getAssetsData()}},{key:"getAssetsData",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(this.props.match.params.id);case 3:return t=e.sent,e.next=6,D(this.props.match.params.id);case 6:a=e.sent,this.setState({assetHistory:t,asset:a,active:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),v.toast.error("Server unavailable. Please try againn later.");case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"openFormDialog",value:function(){this.setState({forLabels:!this.state.forLabels})}},{key:"handleDelete",value:function(e){console.log(e)}},{key:"editLabels",value:function(){var e=Object(o.a)(i.a.mark(function e(t,a){var n,s,r,l,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.labels,s=t.assetId,r=this.state.temp.label,l=JSON.parse(JSON.stringify(t)),c={asset:s},"delete"!==a){e.next=22;break}return n.splice(n.indexOf(r),1),c.newLabels=JSON.stringify(n),t.labels=n,this.setState({asset:t}),e.prev=9,e.next=12,I(c);case 12:e.sent&&(v.toast.warning("".concat(r," was removed sucessfully from asset's labels")),this.getAssetsData()),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(9),this.setState({asset:l}),v.toast.error("Something went wrong. Please try again later.");case 20:e.next=37;break;case 22:if(!this.state.temp.label){e.next=37;break}return c.newLabels=JSON.stringify([].concat(Object(X.a)(n),[this.state.temp.label])),t.labels.push(r),this.setState({forLabels:!this.state.forLabels,asset:t}),e.prev=26,e.next=29,I(c);case 29:e.sent&&v.toast.success("Label: "+r+" was added successfully"),this.getAssetsData(),e.next=37;break;case 34:e.prev=34,e.t1=e.catch(26),v.toast.error("Something went wrong. Please try again later.");case 37:case"end":return e.stop()}},e,this,[[9,16],[26,34]])}));return function(t,a){return e.apply(this,arguments)}}()},{key:"generateFields",value:function(e){var t=this;return e.map(function(e){return{type:"quantity"===e||"threshold"===e?"number":"text",label:e[0].toUpperCase()+e.slice(1),value:t.state.asset[e],onChange:t.handleChange}})}},{key:"render",value:function(){var e=this;return s.a.createElement(M.a,{active:this.state.active,spinner:!0,styles:{spinner:function(e){return Object(l.a)({},e,{width:"100px",height:"100px",top:"-150px","& svg circle":{stroke:"#0F6FA6"}})}}},s.a.createElement("div",{className:"asset-header b-raised my-card"},s.a.createElement("div",{className:"row mt-25 "+("Batch"===this.assetType?"sec-batch-scroll":"sec-scroll")},s.a.createElement("div",{className:"col-8"},s.a.createElement("div",{className:"d-flex"},s.a.createElement("h3",null,s.a.createElement(ee.a,{variant:"contained",color:"primary",className:"mr-15",onClick:function(){return e.props.history.goBack()}},s.a.createElement(fe.b,null,"keyboard_backspace")),"Asset ",this.props.match.params.id),s.a.createElement("br",null),"Single"!==this.assetType?s.a.createElement("div",{className:"d-flex"},s.a.createElement("div",{className:"p-2 m-5 bg-success text-white"},s.a.createElement("span",{className:"m-5"}," Threshold"),s.a.createElement("span",{className:"badge badge-dark"},this.state.asset.threshold)),s.a.createElement("div",{className:"p-2 m-5 bg-warning text-white"},s.a.createElement("span",{className:"m-5"}," Quantity"),s.a.createElement("span",{className:"badge badge-dark"},this.state.asset.quantity))):null),s.a.createElement("div",{className:"my-card box-shadow"},s.a.createElement("span",{style:{display:"flex",justifyContent:"space-between"}},s.a.createElement("h3",null,"Details:"),s.a.createElement(de,{open:this.state.open,onClick:function(){return e.handleClickOpen()},button:s.a.createElement(fe.a,{color:"primary",size:"small",onClick:function(){return e.handleClickOpen()}},s.a.createElement(fe.b,null,"edit_icon")),asset:this.state.asset,onChange:this.handleChange,onSubmit:this.handleSubmit,assetType:this.state.asset.assetType,title:"You can change the details here",fields:this.generateFields(["description","status","comment","quantity","threshold"])})),s.a.createElement("hr",null),this.state.asset.description&&s.a.createElement("div",null,s.a.createElement("h5",null,"Description:",s.a.createElement("span",{className:"details"}," "+this.state.asset.description)),s.a.createElement("h5",null,"Status:",s.a.createElement("span",{className:"details"}," "+this.state.asset.status))),this.state.asset.labels&&this.state.asset.labels.map(function(t){return s.a.createElement(be.a,{key:t,deleteIcon:s.a.createElement(fe.b,null,"cancel"),label:t,onDelete:function(){return e.editLabels(e.state.asset,"delete")}})}),s.a.createElement(de,{styles:{display:"inline"},open:this.state.forLabels,onClick:function(){return e.openFormDialog()},button:s.a.createElement(be.a,{label:s.a.createElement(fe.b,{color:"action"},"add_circle"),onClick:function(){return e.openFormDialog()}}),asset:this.state.asset,onChange:this.handleChange,submitButtonTitle:"Add",onSubmit:function(){return e.editLabels(e.state.asset)},assetType:this.state.asset.assetType,title:"Add another label",fields:[{type:"text",label:"Label",onChange:this.handleChange}]})),s.a.createElement("br",null),"Single"!==this.assetType?s.a.createElement("div",{className:" my-card box-shadow"},s.a.createElement("p",{className:"box-heading"},"Inventory OverTime"),s.a.createElement("hr",null),s.a.createElement(K,{id:this.props.match.params.id})):null),s.a.createElement(Ee,{data:this.state.assetHistory,assetId:this.state.asset.assetId}))))}}]),t}(n.Component),ye=a(441),ge=a(443),ke=a(440),we=a(444),Ne=a(73),xe=a.n(Ne),Oe=a(55),Ae=a.n(Oe),Ce=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={anchorEl:null},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"logout",value:function(){localStorage.removeItem("labId"),v.toast.success("Logout Successful"),window.location.reload()}},{key:"render",value:function(){var e=this,t=this.state.anchorEl,a=this.props.history.location.pathname;return console.log(a),s.a.createElement("div",{className:"backgroung-img"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement(q.a,{to:{pathname:"/"},style:{textDecoration:"none"}},s.a.createElement("div",{className:"p-3 mt-5 ml-5"},s.a.createElement("h3",{className:"page-title"},"Innovation Lab Inventory Dashboard")))),s.a.createElement("div",{className:"col"},localStorage.getItem("labId")&&s.a.createElement("div",{style:{height:"35px",float:"right",position:"absolute",right:"0px"}},s.a.createElement(ee.a,{"aria-owns":t?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick},s.a.createElement(fe.b,null,"more_vert")),s.a.createElement(xe.a,{id:"simple-menu",anchorEl:t,open:Boolean(t),onClose:this.handleClose},s.a.createElement(Ae.a,null,"Hi, "+function(){var e=localStorage.getItem("username");return e?e.slice(0,1).toUpperCase()+e.slice(1):null}()),s.a.createElement(Ae.a,{onClick:function(){return e.logout()}},"Logout"))))),"/assets"===a&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",{className:"page-title container ml-20"},"ASSETS")))}}]),t}(n.Component),Ie=Object(we.a)(Ce),je=function(e){var t=e.children;return s.a.createElement("div",{className:"container body"},s.a.createElement("div",{className:"main_container"},t))},Se=a(46),Te=a.n(Se),Le=(a(434),function(e){var t=e.name,a=e.type,n=e.label,r=e.value,l=e.onChange,c=e.error;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:t},n),s.a.createElement("input",{value:r,type:a,className:"form-control",id:t,name:t,onChange:l}),c&&s.a.createElement("div",{className:"alert alert-danger"},c))}),De=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={data:{username:"",password:""},errors:{username:"",password:""},failed:!1,active:!1},a.schema={username:Te.a.string().required().label("Username"),password:Te.a.string().required().label("Password")},a.doSubmit=Object(o.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(a.state.data);case 3:e.sent&&(a.props.history.replace("/"),v.toast.success("Logged in successfully as "+a.state.data.username.toUpperCase())),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),v.toast.error("Login failed"),a.setState({failed:!0,active:!1});case 11:case"end":return e.stop()}},e,null,[[0,7]])})),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("labId")&&this.props.history.replace("/")}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(M.a,{active:this.state.active,spinner:!0,styles:{spinner:function(e){return Object(l.a)({},e,{width:"100px",height:"100px",top:"-150px","& svg circle":{stroke:"#0F6FA6"}})}}},s.a.createElement("div",{className:"card-login mt-20"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},"Login"),this.state.failed&&s.a.createElement("div",{className:"alert alert-danger"}," ","Username/Password do not match."),s.a.createElement("form",null,this.renderInput("Username*","username","form-control"),this.renderInput("Password*","password","password"),this.renderSubmitButton("Submit","btn btn-warning form-control"))))))}}]),t}(function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={data:{},errors:{}},a.validateProperty=function(e){var t=e.name,n=e.value,s=Object(b.a)({},t,n),r=Object(b.a)({},t,a.schema[t]),l=Te.a.validate(s,r).error;return l?l.details[0].message:null},a.validate=function(){var e=Te.a.validate(a.state.data,a.schema,{abortEarly:!1});if(!e.error)return null;var t={};return e.error.details.map(function(e){t[e.path[0]]=e.message}),t},a.handleChange=function(e){var t=e.currentTarget,n=Object(l.a)({},a.state.errors),s=a.validateProperty(t);s?n[t.name]=s:delete n[t.name];var r=Object(l.a)({},a.state.data);r[t.name]=t.value,a.setState({data:r,errors:n,failed:!1})},a.handleSubmit=function(e){e.preventDefault();var t=a.validate()||"";a.setState({errors:t}),t||a.doSubmit()},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=arguments.length>3?arguments[3]:void 0;return s.a.createElement(Le,{label:e,name:t,type:a,value:this.state.data[t],error:this.state.errors[t],onChange:this.handleChange,classes:n})}},{key:"renderSelectInput",value:function(e,t,a){return s.a.createElement("div",null,s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("label",{className:"input-group-text",htmlFor:t},e)),s.a.createElement("select",{className:"custom-select",id:t,onChange:this.handleChange,name:t,value:this.state.data.genre},s.a.createElement("option",{value:""},"Select a Genre"),a.map(function(e){return s.a.createElement("option",{key:e._id,value:e._id},e.name)}))),this.state.errors[t]&&s.a.createElement("div",{className:"alert alert-danger"},this.state.errors[t]))}},{key:"renderSubmitButton",value:function(e,t){return s.a.createElement("button",{disabled:this.validate(),type:"submit",onClick:this.handleSubmit,className:t},e)}}]),t}(n.Component)),Fe=a(161),Be=a(442),Pe=function(e){e.path;var t=e.component,a=e.render,n=Object(Fe.a)(e,["path","component","render"]);return s.a.createElement(ke.a,Object.assign({},n,{render:function(e){return function(){if(localStorage.getItem("labId"))return!0}()?t?s.a.createElement(t,e):a:s.a.createElement(Be.a,{to:"/login"})}}))};a(435),a(436),a(437);r.render(n.createElement(ye.a,null,n.createElement(n.Fragment,null,n.createElement(v.ToastContainer,null),n.createElement(Ie,null),n.createElement(je,null,n.createElement(ge.a,null,n.createElement(Pe,{path:"/asset/:id",component:ve}),n.createElement(Pe,{path:"/assets",component:_}),n.createElement(ke.a,{path:"/login",component:De}),n.createElement(Pe,{path:"/",component:V}))))),document.getElementById("root"))}},[[233,1,2]]]);
//# sourceMappingURL=main.3001642f.chunk.js.map