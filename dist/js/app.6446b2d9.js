(function(e){function t(t){for(var a,c,i=t[0],s=t[1],l=t[2],u=0,d=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e5e97":"8dc5a7e6"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var l=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"004d":function(e,t){e.exports="data:image/png;base64,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"},"03e5":function(e,t,n){},"138e":function(e,t){throw new Error("Module parse failed: Unexpected character '' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},1771:function(e,t,n){var a={"./nthu/audio.mp3":"8dfc","./nthu/nft.jpg":"8453","./nycu/alice.mp3":"9d68","./nycu/bg-01.jpg":"9ea4","./nycu/nft.gif":"4e0c","./nycu/title.jpeg":"2351","./share/os_logo_square.png":"33e6","./share/proposal.docx":"98e3","./share/sv_logo_square.png":"004d","./share/~$oposal.docx":"138e"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="1771"},"1d2a":function(e,t,n){"use strict";n("e94b")},2351:function(e,t,n){e.exports=n.p+"img/title.715e16a4.jpeg"},2968:function(e,t,n){},3077:function(e,t,n){},"33e6":function(e,t,n){e.exports=n.p+"img/os_logo_square.2e3c2961.png"},3827:function(e,t,n){},"4e0c":function(e,t,n){e.exports=n.p+"img/nft.d8ab52b9.gif"},"54fc":function(e,t,n){"use strict";n("3077")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,o,c){var i=Object(a["F"])("router-view");return Object(a["x"])(),Object(a["e"])(i,{key:e.$route.path})}var o=n("6c02"),c={setup:function(){Object(o["c"])()}},i=(n("5e5f"),n("6b0d")),s=n.n(i);const l=s()(c,[["render",r]]);var u=l,p=(n("d3b7"),n("3ca3"),n("ddb0"),{class:"home h-100 position-relative"}),d=Object(a["h"])("footer",{class:"wrap-footer"},[Object(a["h"])("small",null,"Copyright © 2022 Matafond, All Rights Reserved")],-1);function b(e,t,n,r,o,c){var i=Object(a["F"])("Main");return Object(a["x"])(),Object(a["g"])("div",p,[Object(a["k"])(i,{school:r.school},null,8,["school"]),d])}n("ac1f"),n("5319"),n("9911");var h=n("33e6"),f=n.n(h),y=n("004d"),v=n.n(y),m={class:"wrap-container position-relative"},j={class:"row justify-content-center bg-primary container-content"},O={class:"col-12"},g={class:"p-4 wrap-card-img",ref:"wrapCardImg"},w=["src"],A=["src"],x={key:1,class:"wrap-card-img-logo"},k={class:"wrap-card-img-social"},T=["href"],C=Object(a["h"])("img",{src:f.a},null,-1),B=[C],M=["href"],F=Object(a["h"])("img",{src:v.a,alt:"",srcset:""},null,-1),N=[F],S=["href"],L=Object(a["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"currentColor",class:"bi bi-youtube",viewBox:"0 0 16 16"},[Object(a["h"])("path",{d:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"})],-1),I=[L],D={class:"col-12 col-md-6 wrap-content",ref:"wrapCard"},q={class:"wrap-card-content px-4"},P=Object(a["h"])("div",{class:"wrap-card-content-block"},[Object(a["h"])("div",{class:"wrap-card-content-block-title"},[Object(a["h"])("h1",{class:"my-2 text-light fw-bold"}," 活動截止 ")]),Object(a["h"])("div",{class:"wrap-card-content-block-text"},[Object(a["j"])(" (符合以下任一條件) "),Object(a["h"])("br"),Object(a["j"])(" 1、 活動開始後一個月為期。(不論NFT是否發完，是否募到目標金額皆結束一切募款及發放行為) "),Object(a["h"])("br"),Object(a["j"])(" 2、 募滿目標金額(7以太幣)且111枚NFT亦發放完畢。 ")])],-1),E={class:"wrap-card-content-block"},R=Object(a["h"])("div",{class:"wrap-card-content-block-title"},[Object(a["h"])("h1",{class:"my-2 text-light fw-bold"}," 智能合約地址 ")],-1),U={class:"wrap-card-content-block-text"},H=["href"],z=Object(a["h"])("br",null,null,-1),J=Object(a["j"])(" （請勿直接使用此地址交易） "),G=Object(a["i"])('<div class="wrap-card-content-block"><div class="wrap-card-content-block-title"><h1 class="my-2 text-light fw-bold"> 備註 </h1></div><div class="wrap-card-content-block-text"><a href="@/assets/share/proposal.docx" download> 企劃書連結 </a></div><div class="wrap-card-content-block-text"> 捐款金額會以比例方式負擔NFT上鏈費用 </div><div class="wrap-card-content-block-text"> 若有任何問題請聯絡：matafond2022@gmail.com （請勿聯絡各校畢聯會） </div></div>',1),Q={class:"wrap-card-button d-grid bg-primary",ref:"button"},X={class:"wrap-card-scrollable"},_=Object(a["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",fill:"currentColor",class:"p-1 bi bi-arrow-down",viewBox:"0 0 16 16"},[Object(a["h"])("path",{"fill-rule":"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"})],-1),Y=[_];function Z(e,t,r,o,c,i){var s=Object(a["F"])("Navbar"),l=Object(a["F"])("AudioPlayer"),u=Object(a["F"])("ContentBlock"),p=Object(a["F"])("Donate"),d=Object(a["F"])("Alert");return Object(a["x"])(),Object(a["g"])("div",m,[Object(a["h"])("div",{class:"container-fluid p-4 p-sm-5 container-center-content",style:Object(a["s"])({"background-image":"url("+n("1771")("./".concat(r.school.backgroundImg))+")",filter:o.brightness})},[Object(a["h"])("div",j,[Object(a["h"])("div",O,[Object(a["k"])(s)]),Object(a["h"])("div",{class:"col-12 col-md-6 wrap-content wrap-column",ref:"wrapColumn",style:Object(a["s"])({"align-items":o.centerOrStart})},[Object(a["h"])("div",g,[Object(a["h"])("img",{src:n("1771")("./".concat(r.school.profile.nftImg)),class:"wrap-card-img-nft",alt:""},null,8,w),113==r.school.id?(Object(a["x"])(),Object(a["g"])("img",{key:0,src:n("1771")("./".concat(r.school.profile.logo)),class:"wrap-card-img-title",alt:""},null,8,A)):(Object(a["x"])(),Object(a["g"])("h1",x,Object(a["H"])(r.school.profile.logo),1)),Object(a["k"])(l,{audio:r.school.profile.audio},null,8,["audio"]),Object(a["h"])("div",k,[Object(a["h"])("div",null,[Object(a["h"])("a",{href:r.school.profile.osLink},B,8,T)]),Object(a["h"])("div",null,[Object(a["h"])("a",{href:r.school.profile.svLink},N,8,M)]),Object(a["h"])("div",null,[Object(a["h"])("a",{href:r.school.profile.ytLink,style:{color:"#dc3545"}},I,8,S)])])],512)],4),Object(a["h"])("div",D,[Object(a["h"])("div",q,[(Object(a["x"])(!0),Object(a["g"])(a["a"],null,Object(a["D"])(r.school.content,(function(e,t){return Object(a["x"])(),Object(a["g"])("div",{key:t},[Object(a["k"])(u,{contentBlock:e},null,8,["contentBlock"])])})),128)),P,Object(a["h"])("div",E,[R,Object(a["h"])("div",U,[Object(a["h"])("a",{href:"https://etherscan.io/address/"+o.contractAddress,class:"text-button"},Object(a["H"])(o.contractAddress),9,H),z,J])]),G]),Object(a["h"])("div",Q,[Object(a["O"])(Object(a["h"])("div",X,Y,512),[[a["L"],o.scrollable]]),Object(a["h"])("button",{type:"button",class:"btn btn-strong fs-5 fw-bold text-white",onClick:t[0]||(t[0]=function(){return o.buttonClick&&o.buttonClick.apply(o,arguments)})},Object(a["H"])(o.connectOrDonate),1)],512)],512)])],4),o.popUp?(Object(a["x"])(),Object(a["e"])(p,{key:0,web3:o.web3,contract:o.contract,"current-address":o.currentAddress,id:r.school.id,donateBalance:o.donateBalance,nftStock:o.nftStock,target:r.school.profile.target,onButtonClickClose:o.closePopUp,onPopAlertBox:o.popAlertBox},null,8,["web3","contract","current-address","id","donateBalance","nftStock","target","onButtonClickClose","onPopAlertBox"])):Object(a["f"])("",!0),o.alertBox?(Object(a["x"])(),Object(a["e"])(d,{key:1,alertMessage:o.alertMessage,onCloseAlertBoxOnce:o.closeAlertBox},null,8,["alertMessage","onCloseAlertBoxOnce"])):Object(a["f"])("",!0)])}var W=n("1da1"),K=(n("159b"),n("96cf"),n("c0d8")),V=n.n(K),$=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"donate",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"flip",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"address",name:"_recipient",type:"address"}],name:"setRecipient",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"uint256",name:"_stock",type:"uint256"}],name:"setStock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"string",name:"_tokenURI",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"getBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"getStock",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],ee={class:"wrap-alert"},te={class:"alert-box"},ne=Object(a["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[Object(a["h"])("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),Object(a["h"])("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1),ae=[ne],re={class:"alert-text"},oe={class:"progress"},ce={ref:"progressBar",class:"progress-bar bg-strong",role:"progressbar",style:{width:"0%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"};function ie(e,t,n,r,o,c){return Object(a["x"])(),Object(a["g"])("div",ee,[Object(a["h"])("div",te,[Object(a["h"])("div",{class:"alert-box-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeAlertBox")})},ae),Object(a["h"])("div",re,[Object(a["h"])("h3",null,Object(a["H"])(r.alertMessage)+"! ",1)]),Object(a["h"])("div",oe,[Object(a["h"])("div",ce,null,512)])])])}var se={props:{alertMessage:{required:!0,type:String}},emits:["closeAlertBox"],setup:function(e,t){var n=Object(a["I"])(e),r=n.alertMessage,o=Object(a["C"])(null);return Object(a["v"])((function(){o.value.animate([{width:"100%"}],{duration:3e3}),setTimeout((function(){t.emit("closeAlertBox")}),3e3)})),{alertMessage:r,progressBar:o}}};n("1d2a");const le=s()(se,[["render",ie]]);var ue=le,pe=(n("b680"),function(e){return Object(a["A"])("data-v-05f31dcc"),e=e(),Object(a["y"])(),e}),de={id:"wrap-popup"},be={id:"donate-popup",class:"wrap-card-content-popup p-4"},he=pe((function(){return Object(a["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[Object(a["h"])("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),Object(a["h"])("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1)})),fe=[he],ye={class:"h-100 overflow-custom"},ve=pe((function(){return Object(a["h"])("h1",null," 捐款 ",-1)})),me={class:"wrap-card-content px-4"},je={class:"wrap-card-content-block"},Oe=pe((function(){return Object(a["h"])("div",{class:"wrap-card-content-block-title"},[Object(a["h"])("h1",{class:"my-2 text-light fw-bold"}," 您的目前連線地址 ")],-1)})),ge={class:"wrap-card-content-block-text"},we={class:"wrap-card-content-block"},Ae=pe((function(){return Object(a["h"])("div",{class:"wrap-card-content-block-title"},[Object(a["h"])("h1",{class:"my-2 text-light fw-bold"}," 已募金額/目標金額 ")],-1)})),xe={class:"wrap-card-content-block-text"},ke={class:"wrap-card-content-block-progress progress w-50"},Te={class:"wrap-card-content-block"},Ce=pe((function(){return Object(a["h"])("div",{class:"wrap-card-content-block-title"},[Object(a["h"])("h1",{class:"my-2 text-light fw-bold"}," NFT剩餘數量 ")],-1)})),Be={class:"wrap-card-content-block-text bg-red"},Me=pe((function(){return Object(a["h"])("h5",{class:"pt-4"}," (不限金額都會獲得NFT) ",-1)})),Fe=pe((function(){return Object(a["h"])("h5",{class:"pt-1"}," （每個地址限領一個） ",-1)})),Ne={class:"wrap-card-content-block"},Se=pe((function(){return Object(a["h"])("div",{class:"wrap-card-content-block-title"},[Object(a["h"])("h1",{class:"my-2 text-light fw-bold"}," 捐款金額 ")],-1)})),Le={class:"w-100 overflow-wrap"},Ie=pe((function(){return Object(a["h"])("label",{for:"donation-amount-eth"},"ETH:  ",-1)})),De={class:"px-2"},qe=pe((function(){return Object(a["h"])("br",null,null,-1)})),Pe=pe((function(){return Object(a["h"])("br",null,null,-1)})),Ee={class:"my-4"},Re={key:0,type:"submit",class:"btn btn-outline-strong custom-btn w-75"},Ue={key:1,class:"spinner",width:"35px",height:"35px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},He=pe((function(){return Object(a["h"])("circle",{class:"path",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"},null,-1)})),ze=[He];function Je(e,t,n,r,o,c){return Object(a["x"])(),Object(a["g"])("div",de,[Object(a["h"])("div",be,[Object(a["h"])("div",{class:"wrap-card-content-popup-close",onClick:t[0]||(t[0]=function(){return r.closePopUp&&r.closePopUp.apply(r,arguments)})},fe),Object(a["h"])("div",ye,[ve,Object(a["h"])("div",me,[Object(a["h"])("div",je,[Oe,Object(a["h"])("div",ge,Object(a["H"])(n.currentAddress),1)]),Object(a["h"])("div",we,[Ae,Object(a["h"])("div",xe,Object(a["H"])((n.donateBalance/1e18).toFixed(5))+" / "+Object(a["H"])(n.target)+" ETH ",1),Object(a["h"])("div",ke,[Object(a["h"])("div",{class:"progress-bar bg-button",role:"progressbar",style:Object(a["s"])({width:r.progressWidth}),"aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"},null,4)])]),Object(a["h"])("div",Te,[Ce,Object(a["h"])("div",null,[Object(a["h"])("div",Be,Object(a["H"])(n.nftStock),1),Me,Fe])]),Object(a["h"])("div",Ne,[Se,Object(a["h"])("div",Le,[Object(a["h"])("form",{onSubmit:t[2]||(t[2]=Object(a["P"])((function(){return r.donate&&r.donate.apply(r,arguments)}),["prevent"]))},[Ie,Object(a["O"])(Object(a["h"])("input",{id:"donation-amount-eth",class:Object(a["r"])(["input-number",{"input-valid":r.invalidInput}]),type:"number",step:"any","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.donationAmountEth=e}),required:""},null,2),[[a["K"],r.donationAmountEth]]),Object(a["h"])("label",De,"= GWEI: "+Object(a["H"])(r.donationAmountGwei),1),qe,Pe,Object(a["h"])("div",Ee,[r.loadingDonate?(Object(a["x"])(),Object(a["g"])("svg",Ue,ze)):(Object(a["x"])(),Object(a["g"])("button",Re,"捐款"))])],32)])])])])])])}var Ge=n("5c40"),Qe={emits:["buttonClickClose","popAlertBox"],props:{web3:{required:!0},contract:{required:!0},currentAddress:{required:!0},target:{required:!0},id:{required:!0},donateBalance:{required:!0},nftStock:{required:!0}},setup:function(e,t){var n=t.emit,r=Object(a["C"])(!1),o=Object(a["C"])(!1),c=Object(a["C"])(0),i=Object(Ge["e"])((function(){return 1e9*c.value})),s=function(e){"wrap-popup"===e.target.id&&l()},l=function(){n("buttonClickClose")},u=function(){var t=Object(W["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.web3.eth.net.getNetworkType();case 3:t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),n("popAlertBox","取得Metamask網路類別錯誤");case 9:if("number"===typeof c.value){t.next=12;break}return o.value=!0,t.abrupt("return");case 12:c.value>0?(r.value=!0,o.value=!1,a=1e18*c.value,e.contract.methods.donate(e.id).send({from:e.currentAddress,value:a}).then((function(){r.value=!1,n("popAlertBox","捐款成功")})).catch((function(e){console.log(e),r.value=!1,n("popAlertBox","捐款失敗")}))):(r.value=!1,o.value=!0);case 13:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return Object(Ge["B"])((function(){window.addEventListener("click",s),"0"===e.nftStock&&n("popAlertBox","NFT已全數送出")})),Object(Ge["C"])((function(){window.removeEventListener("click",s)})),{closePopUp:l,donate:u,donationAmountEth:c,donationAmountGwei:i,invalidInput:o,loadingDonate:r,progressWidth:Object(Ge["e"])((function(){return parseFloat(e.donateBalance/1e18/e.target).toFixed(2)+"%"}))}}};n("54fc");const Xe=s()(Qe,[["render",Je],["__scopeId","data-v-05f31dcc"]]);var _e=Xe,Ye=(n("d81d"),{class:"wrap-audioplayer"});function Ze(e,t,n,r,o,c){var i=Object(a["F"])("AudioPlayer",!0);return Object(a["x"])(),Object(a["g"])("div",Ye,[Object(a["k"])(i,{"audio-list":r.audioList.map((function(e){return e.url})),"show-prev-button":!1,"show-next-button":!1,"show-volume-button":!1,"show-playback-rate":!1,isLoop:!1,"theme-color":"#357aa1"},null,8,["audio-list"])])}var We=n("6cb3"),Ke={components:{AudioPlayer:We["a"]},props:{audio:{required:!0,type:String}},setup:function(e){var t=Object(a["C"])([{name:"",url:n("1771")("./".concat(e.audio))}]);return{audioList:t}}};n("8743");const Ve=s()(Ke,[["render",Ze]]);var $e=Ve,et={id:"navbar"},tt={class:"wrap-navbar-option"};function nt(e,t,n,r,o,c){return Object(a["x"])(),Object(a["g"])("div",et,[Object(a["h"])("div",tt,[Object(a["h"])("button",{type:"button",class:Object(a["r"])(["btn border-4 fs-4",{"btn-selected":r.school}]),onClick:t[0]||(t[0]=function(){return r.switchSchoolT&&r.switchSchoolT.apply(r,arguments)})},"交通大學",2),Object(a["h"])("button",{type:"button",class:Object(a["r"])(["btn border-4 fs-4",{"btn-selected":!r.school}]),onClick:t[1]||(t[1]=function(){return r.switchSchoolF&&r.switchSchoolF.apply(r,arguments)})},"清華大學",2)])])}var at={emits:["switchSchool"],setup:function(){var e=Object(a["C"])(!1),t=Object(o["c"])(),n=Object(o["d"])();Object(a["v"])((function(){"nycu"===t.params.school?e.value=!0:e.value=!1}));var r=function(){e.value||n.push("/home/nycu"),e.value=!0},c=function(){e.value&&n.push("/home/nthu"),e.value=!1};return{switchSchoolT:r,switchSchoolF:c,school:e}}};n("77f2");const rt=s()(at,[["render",nt],["__scopeId","data-v-2618083f"]]);var ot=rt,ct=(n("a4d3"),n("e01a"),{class:"wrap-card-content-block"}),it={class:"wrap-card-content-block-title"},st={class:"my-2 text-light fw-bold"},lt=["innerHTML"];function ut(e,t,n,r,o,c){return Object(a["x"])(),Object(a["g"])("div",ct,[Object(a["h"])("div",it,[Object(a["h"])("h1",st,Object(a["H"])(n.contentBlock.title),1)]),Object(a["h"])("div",{innerHTML:n.contentBlock.description,class:"wrap-card-content-block-text"},null,8,lt)])}var pt={props:{contentBlock:{required:!0,type:Object}},setup:function(){}};n("7035");const dt=s()(pt,[["render",ut]]);var bt=dt,ht={components:{Alert:ue,Donate:_e,AudioPlayer:$e,Navbar:ot,ContentBlock:bt},props:{school:{required:!0,type:Object}},setup:function(e){var t=Object(a["C"])("按此連結Metamask"),n=Object(a["C"])(!1),r=Object(a["C"])(!1),o=Object(a["C"])("brightness(1)"),c=Object(a["C"])(""),i=Object(a["C"])(!1),s=Object(a["C"])(""),l=Object(a["C"])(null),u=Object(a["C"])(null),p=Object(a["C"])(),d=Object(a["C"])(),b=Object(a["C"])(),h=Object(a["C"])(),f=Object(a["C"])("center"),y=Object(a["C"])(),v=Object(a["C"])(),m=Object(a["C"])(),j=Object(a["C"])("0x8da1f83Aae0E62b0265772Fb632D93fbe1c79F0a"),O=function(){"undefined"!==typeof window.ethereum?l.value.eth.requestAccounts().then(Object(W["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.value.eth.net.getNetworkType();case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),k("取得Metamask網路類別錯誤");case 9:return"main"!==t&&k("請換到主鏈(切換之後請重新整理)"),e.prev=10,e.next=13,l.value.eth.getAccounts();case 13:n=e.sent,e.next=19;break;case 16:e.prev=16,e.t1=e["catch"](10),k("取得Metamask地址錯誤");case 19:c.value=n[0];case 20:case"end":return e.stop()}}),e,null,[[0,6],[10,16]])})))).catch((function(e){k("無法連接帳號(請確認Metamask是否已登入)")})):window.open("https://metamask.io/download/")},g=function(){var e=Object(W["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.value.eth.net.getNetworkType();case 2:t=e.sent,"main"!==t&&k("請換到主鏈(切換之後請重新整理)"),r.value=!0,o.value="brightness(0.5)";case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){n.value?g():O()},A=function(){r.value=!1,o.value="brightness(1)"},x=function(){i.value=!1},k=function(e){i.value=!0,s.value=e};return Object(a["v"])(Object(W["a"])(regeneratorRuntime.mark((function t(){var a,r,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("undefined"===typeof window.ethereum){t.next=11;break}return l.value=new V.a(V.a.givenProvider),u.value=new l.value.eth.Contract($,j.value),u.value.methods.getBalance(e.school.id).call({from:"0x959D3dBDEc126ee0A28aA2086991AA94Fe7Dcc73"}).then((function(e){v.value=e})),u.value.methods.getStock(e.school.id).call({from:"0x959D3dBDEc126ee0A28aA2086991AA94Fe7Dcc73"}).then((function(e){m.value=e})),t.next=7,l.value.eth.getAccounts();case 7:a=t.sent,a.length?(n.value=!0,c.value=a[0]):n.value=!1,ethereum.on("accountsChanged",function(){var e=Object(W["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.length){e.next=8;break}return n.value=!0,e.next=4,l.value.eth.getAccounts();case 4:a=e.sent,c.value=a[0],e.next=11;break;case 8:A(),n.value=!1,c.value="";case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ethereum.on("chainChanged",(function(e){"0x1"!==e&&k("請換到主鏈(切換之後請重新整理)")}));case 11:r={root:h.value,rootMargin:"0px 0px 0px 0px",threshold:1},o=function(e){e.forEach((function(e){e.isIntersecting?f.value="center":f.value="start"}))},i=new IntersectionObserver(o,r),i.observe(y.value);case 15:case"end":return t.stop()}}),t)})))),Object(a["M"])(n,(function(e){t.value=e?"我要捐款":"按此連結Metamask"}),{immediate:!0}),{buttonClick:w,connectOrDonate:t,popUp:r,brightness:o,closePopUp:A,currentAddress:c,alertBox:i,alertMessage:s,closeAlertBox:x,web3:l,contract:u,popAlertBox:k,button:p,scrollable:b,wrapCard:d,wrapColumn:h,wrapCardImg:y,centerOrStart:f,donateBalance:v,nftStock:m,contractAddress:j}}};n("e31d");const ft=s()(ht,[["render",Z]]);var yt=ft,vt=n("a1e9"),mt={name:"Home",components:{Main:yt},setup:function(){var e=Object(o["d"])(),t=Object(o["c"])();"nycu"!==t.params.school&&"nthu"!==t.params.school&&e.replace("/NotFound");var n=Object(vt["l"])({id:113,backgroundImg:"nycu/bg-01.jpg",profile:{nftImg:"nycu/nft.gif",logo:"nycu/title.jpeg",audio:"nycu/alice.mp3",osLink:"https://opensea.io/assets/ethereum/0x3094a90b792d6448ad845c60f0ca137edd4706ab/113",svLink:"https://streetvoice.com/xlohapprdx_/songs/686189/",ytLink:"https://youtu.be/t7Q8mPJmiNA",target:7},content:[{title:"專案介紹",description:"我們想透過音樂表達許多事物，若你喜歡我們的歌，哪怕是一點點的支持都是能助長我們能前進的動力。我們想用不同的曲風與歌詞意境，給人帶來共鳴。我們還有一些想完成的歌:<怪胎>、<我用了一首不是饒舌歌的和弦寫歌>、<聽說妳的身高159>。(Demo請見".concat("Street voice".link("https://streetvoice.com/xlohapprdx_/songs/")," )，募得資金扣除成本，依比例分配給畢業歌製作團隊與元募及回饋學校")},{title:"附屬活動",description:"前111名加密貨幣捐贈者，不論金額大小，皆可獲得2022年陽交大_交通校區畢業歌<愛麗絲的「理」想國度>NFT一枚。"},{title:"活動發行",description:"由交大畢業歌團隊與元募（清交學生新創團隊）聯合發行"}]}),a=Object(vt["l"])({id:114,backgroundImg:"nthu/nft.jpg",profile:{nftImg:"nthu/nft.jpg",logo:"青空",audio:"nthu/audio.mp3",osLink:"https://opensea.io/assets/ethereum/0x3094a90b792d6448ad845c60f0ca137edd4706ab/114",svLink:"https://streetvoice.com/sunlex_lin/songs/686958/",ytLink:"https://youtu.be/AJG2CoxqTkw",target:7},content:[{title:"專案介紹",description:"本專案為畢業歌製作樂團-金桔士為籌備EP《點燈人》製作款項（歌曲包含《點燈人》、《在陽光下》、《青空》等錄音、混音及母帶製作）建立之加密貨幣募資項目。，募得資金扣除成本，依比例分配給畢業歌製作團隊與元募及回饋學校"},{title:"歌曲介紹",description:"每個人心中都有自己的一片天空，而青空可以是那些青春的回憶，也可以是自己最想完成的夢想。身為清華人，我們在清華的天空下生活了四年，或許這四年面臨過許多悲傷挫折的事、又或許未來有很多不確定性，但我們終究會成長，成長會清空我們心中的種種，而我們也將成為彼此心中的青空。"},{title:"附屬活動",description:"前111名加密貨幣捐贈者，不論金額大小，皆可獲得2022年清華大學畢業歌<青空>NFT一枚。"},{title:"活動發行",description:"由金桔士樂團（清大畢業歌團隊）與元募（清交學生新創團隊）聯合發行"}]});return{school:Object(Ge["e"])((function(){return"nycu"===t.params.school?n:a}))}}};n("87d8");const jt=s()(mt,[["render",b]]);var Ot=jt,gt=[{path:"/home/:school",name:"Home",component:Ot},{path:"/",redirect:{path:"/home/nycu"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}}],wt=Object(o["a"])({history:Object(o["b"])("/"),routes:gt}),At=wt;Object(a["d"])(u).use(At).mount("#app")},"5e5f":function(e,t,n){"use strict";n("3827")},7035:function(e,t,n){"use strict";n("781e")},"77f2":function(e,t,n){"use strict";n("de4d")},"781e":function(e,t,n){},8453:function(e,t,n){e.exports=n.p+"img/nft.12b69038.jpg"},8743:function(e,t,n){"use strict";n("2968")},"87d8":function(e,t,n){"use strict";n("03e5")},"8dfc":function(e,t,n){e.exports=n.p+"media/audio.e29e0c37.mp3"},"98e3":function(e,t){throw new Error("Module parse failed: Unexpected character '' (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},"9d68":function(e,t,n){e.exports=n.p+"media/alice.c04b921d.mp3"},"9ea4":function(e,t,n){e.exports=n.p+"img/bg-01.c92b2d76.jpg"},d410:function(e,t,n){},de4d:function(e,t,n){},e31d:function(e,t,n){"use strict";n("d410")},e94b:function(e,t,n){}});
//# sourceMappingURL=app.6446b2d9.js.map