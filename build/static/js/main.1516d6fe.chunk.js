(this.webpackJsonpreactbc08e=this.webpackJsonpreactbc08e||[]).push([[0],{19:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(9),r=t.n(a),s=(t(19),t(2)),i=t(3),o=t(5),l=t(4),d=t(6),h=t(0),j=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).renderMangXucXac=function(){return e.props.mangXucXac.map((function(e,n){return Object(h.jsx)("img",{src:e.hinh,width:50,alt:e.hinh},n)}))},e.renderKetQua=function(){var n=e.props.mangXucXac.reduce((function(e,n,t){return e+n.diem}),0),t=n>11?"T\xe0i":"X\u1ec9u";return"".concat(n," - ").concat(t)},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;this.props.mangXucXac;return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-3",children:Object(h.jsx)("button",{className:"btn btn-danger",onClick:function(){e.props.dispatch({type:"DAT_CUOC",banChon:!0})},children:Object(h.jsx)("div",{className:"display-4 p-5",children:"T\xe0i"})})}),Object(h.jsxs)("div",{className:"col-6 text-center",children:[this.renderMangXucXac(),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"display-4",children:this.renderKetQua()})]}),Object(h.jsx)("div",{className:"col-3",children:Object(h.jsx)("button",{className:"btn btn-danger bg-dark",onClick:function(){e.props.dispatch({type:"DAT_CUOC",banChon:!1})},children:Object(h.jsx)("div",{className:"display-4 p-5",children:"Xiu"})})})]})})}}]),t}(c.Component),b=Object(d.b)((function(e){return{mangXucXac:e.baiTapGameXucXacReducer.mangXucXac}}))(j),u=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"container display-4 text-center",children:[Object(h.jsxs)("div",{children:["B\u1ea1n ch\u1ecdn: ",Object(h.jsx)("span",{className:"text-warning",children:this.props.banChon?"T\xe0i":"X\u1ec9u"})]}),Object(h.jsxs)("div",{children:["S\u1ed1 b\xe0n th\u1eafng: ",Object(h.jsx)("span",{className:"text-success",children:this.props.soBanThang})]}),Object(h.jsxs)("div",{children:["T\u1ed5ng s\u1ed1 b\xe0n ch\u01a1i: ",Object(h.jsx)("span",{className:"text-primary",children:this.props.soBanChoi})]}),Object(h.jsx)("button",{className:"btn bg-success mt-5",onClick:function(){e.props.dispatch({type:"PLAY_GAME"})},children:Object(h.jsx)("div",{className:"display-4",children:"Play game"})})]})}}]),t}(c.Component),m=Object(d.b)((function(e){return{soBanChoi:e.baiTapGameXucXacReducer.soBanChoi,soBanThang:e.baiTapGameXucXacReducer.soBanThang,banChon:e.baiTapGameXucXacReducer.banChon}}))(u),O=(t(25),function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"bg-game",children:[Object(h.jsx)("h3",{className:"text-center mt-5 display-4",children:"B\xe0i t\u1eadp game x\xfac x\u1eafc"}),Object(h.jsx)(b,{}),Object(h.jsx)(m,{})]})}}]),t}(c.Component)),p=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this;console.log("props",this.props);var n=this.props.sanPham;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{className:"w-100",src:n.hinhAnh,height:350}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h3",{children:n.tenSP}),Object(h.jsx)("p",{children:n.giaBan.toLocaleString()}),Object(h.jsx)("button",{className:"btn btn-outline-success",onClick:function(){var t={type:"THEM_GIO_HANG",sanPhamClick:n};e.props.dispatch(t)},children:"Th\xeam gi\u1ecf h\xe0ng"})]})]})}}]),t}(c.Component),x=Object(d.b)()(p),g=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).renderSanPham=function(){return e.props.mangSanPham.map((function(e,n){return Object(h.jsx)("div",{className:"col-4",children:Object(h.jsx)(x,{sanPham:e})})}))},e}return Object(i.a)(t,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"row",children:this.renderSanPham()})}}]),t}(c.Component),v=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).renderGioHang=function(){return e.props.gioHang.map((function(n,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:n.maSP}),Object(h.jsx)("td",{children:n.tenSP}),Object(h.jsx)("td",{children:Object(h.jsx)("img",{src:n.hinhAnh,height:50})}),Object(h.jsx)("td",{children:n.soLuong}),Object(h.jsx)("td",{children:n.giaBan}),Object(h.jsxs)("td",{children:[Object(h.jsx)("button",{onClick:function(){var t={type:"TANG_GIAM_SO_LUONG",maSPClick:n.maSP,soLuong:1};e.props.dispatch(t)},className:"btn btn-success",children:"+"}),n.giaBan*n.soLuong,Object(h.jsx)("button",{onClick:function(){var t={type:"TANG_GIAM_SO_LUONG",maSPClick:n.maSP,soLuong:-1};e.props.dispatch(t)},className:"btn btn-danger",children:"-"})]}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{className:"btn btn-danger",onClick:function(){var t={type:"XOA_GIO_HANG",maSPClick:n.maSP};e.props.dispatch(t)},children:"Xo\xe1"})})]})}))},e}return Object(i.a)(t,[{key:"render",value:function(){return console.log("propsGioHang",this.props),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"modal fade",id:"modelId",tabIndex:-1,role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true",children:Object(h.jsx)("div",{className:"modal-dialog modal-lg",role:"document",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsxs)("div",{className:"modal-header",children:[Object(h.jsx)("h5",{className:"modal-title",children:"Modal title"}),Object(h.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(h.jsx)("div",{className:"modal-body",children:Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"M\xe3 sp"}),Object(h.jsx)("th",{children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(h.jsx)("th",{children:"H\xecnh \u1ea3nh"}),Object(h.jsx)("th",{children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(h.jsx)("th",{children:"Gi\xe1 b\xe1n"}),Object(h.jsx)("th",{children:"Th\xe0nh ti\u1ec1n"}),Object(h.jsx)("th",{})]})}),Object(h.jsx)("tbody",{children:this.renderGioHang()})]})}),Object(h.jsxs)("div",{className:"modal-footer",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",children:"Save"})]})]})})})})}}]),t}(c.Component),f=Object(d.b)((function(e){return{gioHang:e.gioHangReducer}}))(v),N=t(8),y=(c.Component,t(7)),C=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).renderArrProduct=function(){var n=e.props,t=n.arrGioHang,c=n.xoaGioHang,a=n.tangGiamSoLuong;return t.map((function(n,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:n.maSP}),Object(h.jsx)("td",{children:Object(h.jsx)("img",{src:n.hinhAnh,width:50,alt:"..."})}),Object(h.jsx)("td",{children:n.tenSP}),Object(h.jsxs)("td",{children:[Object(h.jsx)("button",{className:"btn btn-danger mr-2",onClick:function(){a(n,-1)},children:"-"}),n.soLuong,Object(h.jsx)("button",{className:"btn btn-success ml-2",onClick:function(){e.props.themGioHang(n)},children:"+"})]}),Object(h.jsx)("td",{children:n.giaBan}),Object(h.jsx)("td",{children:(n.giaBan*n.soLuong).toLocaleString()}),Object(h.jsx)("td",{className:"btn btn-danger",onClick:function(){c(n.maSP)},children:"Xo\xe1"})]})}))},e}return Object(i.a)(t,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"modal fade",id:"modelId",tabIndex:-1,role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true",children:Object(h.jsx)("div",{className:"modal-dialog modal-lg",role:"document",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsxs)("div",{className:"modal-header",children:[Object(h.jsx)("h5",{className:"modal-title",children:"Gi\u1ecf h\xe0ng"}),Object(h.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(h.jsx)("div",{className:"modal-body",children:Object(h.jsxs)("table",{className:"table text-center",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"M\xe3 s\u1ea3n ph\u1ea9m"}),Object(h.jsx)("th",{children:"H\xecnh \u1ea3nh"}),Object(h.jsx)("th",{children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(h.jsx)("th",{children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(h.jsx)("th",{children:"\u0110\u01a1n gi\xe1"}),Object(h.jsx)("th",{children:"Th\xe0nh ti\u1ec1n"}),Object(h.jsx)("th",{})]})}),Object(h.jsx)("tbody",{children:this.renderArrProduct()})]})}),Object(h.jsx)("div",{className:"modal-footer",children:Object(h.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"})})]})})})})}}]),t}(c.Component),P=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this,n=this.props.product;return Object(h.jsx)("div",{className:"col-4",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{className:"card-img-top",height:350,src:n.hinhAnh,alt:"..."}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h4",{className:"card-title",children:n.tenSP}),Object(h.jsx)("p",{className:"card-text",children:n.giaBan.toLocaleString()}),Object(h.jsx)("button",{className:"btn btn-success",onClick:function(){e.props.themGioHang(n)},children:"Th\xeam v\xe0o gi\u1ecf"})]})]})})}}]),t}(c.Component),S=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).renderItem=function(){return e.props.arrProduct.map((function(n,t){return Object(h.jsx)(P,{product:n,themGioHang:e.props.themGioHang},t)}))},e}return Object(i.a)(t,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"row",children:this.renderItem()})}}]),t}(c.Component);c.Component;var X=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(O,{})})},G=t(14),A=t(10),T=[],_={soBanChoi:0,soBanThang:0,banChon:!0,mangXucXac:[{hinh:"./img/gameXucXac/1.png",diem:1},{hinh:"./img/gameXucXac/1.png",diem:1},{hinh:"./img/gameXucXac/1.png",diem:1}]},k=Object(G.a)({gioHangReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"THEM_GIO_HANG":var t=Object(y.a)(Object(y.a)({},n.sanPhamClick),{},{soLuong:1}),c=e,a=c.find((function(e){return e.maSP===t.maSP}));return a?a.soLuong+=1:c.push(t),console.log("gioHangCapNhat",c),Object(A.a)(c);case"XOA_GIO_HANG":console.log("asd");var r=e.filter((function(e){return e.maSP!==n.maSPClick}));return Object(A.a)(r);case"TANG_GIAM_SO_LUONG":var s=Object(A.a)(e),i=s.find((function(e){return e.maSP===n.maSPClick}));if(i)return i.soLuong+=n.soLuong,i.soLuong<1&&(alert("S\u1ed1 l\u01b0\u1ee3ng t\u1ed1i thi\xeau b\u1eb1ng 1"),i.soLuong-=n.soLuong),s;default:return e}return e},baiTapGameXucXacReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"DAT_CUOC":return e.banChon=n.banChon,Object(y.a)({},e);case"PLAY_GAME":for(var t=[],c=0;c<3;c++){var a=Math.floor(6*Math.random())+1,r={hinh:"./img/gameXucXac/".concat(a,".png"),diem:a};t.push(r)}e.mangXucXac=t;var s=t.reduce((function(e,n,t){return e+n.diem}),0);return(e.banChon&&s>11||!e.banChon&&s<=11)&&(e.soBanThang+=1),e.soBanChoi++,Object(y.a)({},e);default:return Object(y.a)({},e)}}}),H=Object(G.b)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(h.jsx)(d.a,{store:H,children:Object(h.jsx)(X,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"maSP":1,"tenSP":"VinSmart Live","manHinh":"AMOLED, 6.2, Full HD+","heDieuHanh":"Android 9.0 (Pie)","cameraTruoc":"20 MP","cameraSau":"Ch\xednh 48 MP & Ph\u1ee5 8 MP, 5 MP","ram":"4 GB","rom":"64 GB","giaBan":5700000,"hinhAnh":"./img/vsphone.jpg"},{"maSP":2,"tenSP":"Meizu 16Xs","manHinh":"AMOLED, FHD+ 2232 x 1080 pixels","heDieuHanh":"Android 9.0 (Pie); Flyme","cameraTruoc":"20 MP","cameraSau":"Ch\xednh 48 MP & Ph\u1ee5 8 MP, 5 MP","ram":"4 GB","rom":"64 GB","giaBan":7600000,"hinhAnh":"./img/meizuphone.jpg"},{"maSP":3,"tenSP":"Iphone XS Max","manHinh":"OLED, 6.5, 1242 x 2688 Pixels","heDieuHanh":"iOS 12","cameraSau":"Ch\xednh 12 MP & Ph\u1ee5 12 MP","cameraTruoc":"7 MP","ram":"4 GB","rom":"64 GB","giaBan":27000000,"hinhAnh":"./img/applephone.jpg"}]')}},[[26,1,2]]]);
//# sourceMappingURL=main.1516d6fe.chunk.js.map