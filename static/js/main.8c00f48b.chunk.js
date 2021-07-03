(this.webpackJsonpmtracker=this.webpackJsonpmtracker||[]).push([[0],{137:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);a(0);var n=a(11),r=a.n(n),i=(a(137),a(12)),c=a(113),o=a(80),s=a(26),d=a(16),u=a(49),l=a(19),h=a.n(l),p=a(58),f=a(37),b=a(114),g=a(115),m=a(116),j=a.n(m),v=a(117),O=a.n(v),y="https://api.mangadex.org/",x=new(function(){function e(){Object(b.a)(this,e),this.axiosInst=j.a.create({baseURL:y}),this.api=O()(this.axiosInst,{maxRPS:5})}return Object(g.a)(e,[{key:"fetchAllManga",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.get("manga/");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchMangaById",value:function(){var e=Object(f.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.get("manga/".concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchChapter",value:function(){var e=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.get("manga/".concat(t,"/feed?translatedLanguage[]=en&order[chapter]=desc"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchCover",value:function(){var e=Object(f.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.get("cover/".concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}());function w(e){var t=2-.00976*(e-17);return Math.min(Math.max(t,1.6),2)}var C,k=a.p+"static/media/favicon.4fe75d5f.ico",I=(new BroadcastChannel("notification-channel"),Object(s.b)("feedcard/fetchManga",function(){var e=Object(f.a)(h.a.mark((function e(t){var a,n,r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.fetchMangaById(t);case 2:return a=e.sent,e.next=5,x.fetchChapter(t);case 5:return n=e.sent,e.next=8,x.fetchCover(a.relationships[2].id);case 8:return r=e.sent,a.data.coverURL="https://uploads.mangadex.org/covers/".concat(a.data.id,"/").concat(r.data.attributes.fileName,".512.jpg"),a.data.chapterList=n.results,a.data.chapterList=a.data.chapterList.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{highlight:!1})})),i=a.data.chapterList[1],a.data.chapterList[0]=i,e.abrupt("return",a);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),L=Object(s.b)("feedcard/updateChapterList",function(){var e=Object(f.a)(h.a.mark((function e(t,a){var n,r,i,c,o,s,d,u,l,f;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState,r=n(),i=r.FeedCard.cards[t].mostRecentChapter,c=r.FeedCard.cards[t].seriesTitle,e.next=6,x.fetchChapter(t);case 6:return o=e.sent,s=o.results.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{highlight:!1})})),null!=(d=0!==o.results.length?o.results[0].data.attributes.chapter:null)&&d!==i&&(u=s[0].data.attributes.title,console.log("Sending notification"),"SEND_NOTIFICATION",l="New Chapter for ".concat(c,"!"),f="Chapter ".concat(d,", ").concat(u),new Notification(l,{body:f,myIcon:k}),console.log("Message sent")),e.abrupt("return",{seriesId:t,chapterList:s,latest:d});case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(s.c)({name:"feedcard",initialState:{cards:{},cardCount:0,loading:!1},reducers:{mouseInside:function(e,t){e.cards[t.payload].showInfo=!0},mouseOutside:function(e,t){e.cards[t.payload].showInfo=!1},mouseOverChapter:function(e,t){e.cards[t.payload.seriesID].chapters[t.payload.chapterID].highlight=!0},mouseNoLongerOverChapter:function(e,t){e.cards[t.payload.seriesID].chapters[t.payload.chapterID].highlight=!1}},extraReducers:(C={},Object(u.a)(C,I.fulfilled,(function(e,t){e.cards[t.payload.data.id]={seriesTitle:t.payload.data.attributes.title.en,coverLoc:t.payload.data.coverURL,seriesDesc:t.payload.data.attributes.description.en,chapters:t.payload.data.chapterList,mostRecentChapter:0!==t.payload.data.chapterList.length?t.payload.data.chapterList[0].data.attributes.chapter:null,titleSize:w(t.payload.data.attributes.title.en.length)},e.cardCount+=1})),Object(u.a)(C,I.rejected,(function(e,t){console.log("series failed")})),Object(u.a)(C,L.fulfilled,(function(e,t){e.cards[t.payload.seriesId].chapters=t.payload.chapterList,e.cards[t.payload.seriesId].mostRecentChapter=t.payload.latest})),C)}),F=N.actions,T=F.mouseInside,D=F.mouseOutside,S=F.mouseOverChapter,R=F.mouseNoLongerOverChapter,z=N.reducer,B=Object(s.c)({name:"addCard",initialState:{addingFeed:!1},reducers:{openAddDialogue:function(e){e.addingFeed=!0},closeAddDialogue:function(e){e.addingFeed=!1}}}),W=B.actions,A=W.openAddDialogue,M=W.closeAddDialogue,P=B.reducer,E=Object(s.c)({name:"AddDialogue",initialState:{dialogueField:""},reducers:{updateField:function(e,t){e.dialogueField=t.payload}}}),U=E.actions.updateField,H=E.reducer,J=a(118),q=a.n(J),G=Object(d.b)({FeedCard:z,AddCard:P,addDialogue:H}),$={key:"root",storage:q.a,whitelist:["FeedCard"]},_=Object(o.a)($,G),K=Object(s.a)({reducer:_}),Q=a(123),V=a.n(Q),X=a(214),Y=a(41),Z=a.n(Y),ee=a(7),te=Z()({addPos:{position:"fixed",bottom:"1vw",left:"95vw",marginRight:10,marginBottom:10}});function ae(){var e=Object(i.b)(),t=te();return Object(ee.jsx)(X.a,{size:"medium",color:"black",onClick:function(){e(A())},className:t.addPos,children:Object(ee.jsx)(V.a,{fontSize:"large"})})}var ne=a(215),re=a(216),ie=a(191),ce=a(59),oe=a(228),se=a(218),de=a(124),ue=a.n(de),le=Object(ne.a)({font:{fontFamily:"Roboto",color:"black"},addDia:{position:"absolute",left:"40vw",top:"40vh",padding:10,zIndex:4},exit:{position:"absolute",marginLeft:"80%",top:0},addButton:{marginTop:"2.5%"}});function he(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.AddCard.addingFeed})),a=Object(i.c)((function(e){return e.addDialogue.dialogueField})),n=le();return Object(ee.jsx)(re.a,{in:t,children:Object(ee.jsxs)(ie.a,{elevation:12,className:n.addDia,children:[Object(ee.jsx)(X.a,{size:"medium",onClick:function(){e(M())},className:n.exit,children:Object(ee.jsx)(ue.a,{fontSize:"medium"})}),Object(ee.jsx)(ce.a,{className:n.font,children:"What is the series' ID?"}),Object(ee.jsxs)("form",{autoComplete:"off",children:[Object(ee.jsx)(oe.a,{onChange:function(t){return e(U(t.target.value))},valueid:"inputID",variant:"outlined",label:"Series ID"}),Object(ee.jsx)(se.a,{variant:"contained",onClick:function(){return e(I(a))},className:n.addButton,children:"Add it!"})]})]})})}var pe=a(219),fe=a(220),be=a(221),ge=Object(ne.a)({myListItem:{paddingLeft:"1.5vw",marginTop:"-15px",marginBottom:"0vh",marginRight:"-1.25vw"},chapterEntry:{fontFamily:"Roboto",fontSize:"1.1vh",color:"White"},myTypography:{fontSize:".9vh",color:"White",fontFamily:"Roboto","&:hover":{color:"#7393B3!important"}},highlight:{color:"#7393B3!important"}});function me(e){var t=e.chapterTitle,a=e.chapterNum,n=e.chapterID,r=e.seriesID,c=e.iter,o=ge(),s=Object(i.b)(),d={seriesID:r,chapterID:c},u=Object(i.c)((function(e){return e.FeedCard.cards[r].chapters[c].highlight}));return Object(ee.jsx)(pe.a,{underline:"None",href:"https://mangadex.org/chapter/".concat(n,"/1"),TypographyClasses:o.myTypography,onMouseEnter:function(){s(S(d))},onMouseLeave:function(){s(R(d))},children:Object(ee.jsx)(fe.a,{className:o.myListItem,children:Object(ee.jsx)(be.a,{primaryTypographyProps:{className:"".concat(o.myTypography," ").concat(u?o.highlight:"")},secondaryTypographyProps:{className:"".concat(o.myTypography," ").concat(u?o.highlight:"")},primary:"Chapter ".concat(a),secondary:t})})})}var je=a(222),ve=a(223),Oe=a(224),ye=a(217),xe=a(225),we=a(226),Ce=Z()({root:{position:"relative",width:"15vw",height:"40vh",maxWidth:"20vw",maxHeight:"53.33vh",objectFit:"fill",MuiButtonBase:{disableRipple:!0}},media:{minWidth:"15vw",minHeight:"40vh",maxWidth:"20vw",maxHeight:"53.33vh",objectFit:"fill"},blurImg:{filter:"blur(3px) brightness(50%)"},seriesTitle:{paddingLeft:"3.25vw",paddingTop:"4vh",paddingRight:"2.5vw",position:"absolute",fontSize:"2vh",color:"white",fontFamily:"Roboto",zIndex:1},myList:{zIndex:1,position:"absolute",background:"none",paddingTop:"13vh",paddingLeft:"3vw"},listHeader:{color:"White",fontFamily:"Roboto",fontSize:"1.5vh"}});function ke(e){var t=e.id,a=Object(i.b)(),n=Object(i.c)((function(e){return e.FeedCard.cards[t].seriesTitle})),r=Object(i.c)((function(e){return e.FeedCard.cards[t].coverLoc})),c=Object(i.c)((function(e){return e.FeedCard.cards[t].titleSize})),o=0,s=Ce(),d=Z()({dynamicTitle:{fontSize:"".concat(c,"vh!important")}})(),u=Object(i.c)((function(e){return e.FeedCard.cards[t].showInfo?s.blurImg:null})),l=Object(i.c)((function(e){return e.FeedCard.cards[t].chapters}));return Object(ee.jsx)(je.a,{item:!0,xs:2,children:Object(ee.jsx)(re.a,{in:!0,timeout:{enter:600},children:Object(ee.jsx)(ve.a,{elevation:6,className:s.root,children:Object(ee.jsx)(Oe.a,{disableRipple:!0,children:Object(ee.jsxs)("div",{onMouseEnter:function(){return a(T(t))},onMouseLeave:function(){return a(D(t))},children:[u?Object(ee.jsxs)("div",{children:[Object(ee.jsx)(ce.a,{gutterBottom:!0,className:"".concat(s.seriesTitle," ").concat(d.dynamicTitle),variant:"h5",component:"h5",children:n}),Object(ee.jsx)(ye.a,{className:s.myList,dense:!0,disablePadding:!0,subheader:Object(ee.jsx)(xe.a,{component:"div",id:"nested-list-subheader",className:"".concat(s.listHeader," "),children:"Chapters"}),children:Object.keys(l).slice(0,5).map((function(e){return Object(ee.jsx)(me,{chapterTitle:l[e].data.attributes.title,chapterNum:l[e].data.attributes.chapter,chapterID:l[e].data.id,seriesID:t,iter:o++})}))})]}):null,Object(ee.jsx)(we.a,{component:"img",image:r,title:"Cover Image",className:"".concat(s.media," ").concat(u?s.blurImg:null)})]})})})})})}function Ie(){return Object.keys(Object(i.c)((function(e){return e.FeedCard.cards}))).map((function(e){return Object(ee.jsx)(ke,{id:e})}))}var Le=a(227),Ne=Z()({loading:{position:"absolute",left:"45vw",top:"45vh",padding:10,zIndex:4}});function Fe(){var e=Ne();return Object(ee.jsx)(Le.a,{className:e.loading})}var Te=a(125),De=a.n(Te),Se=Object(ne.a)({updatePos:{position:"fixed",top:"1vw",left:"95vw",marginRight:10,marginTop:10}});function Re(){var e=Object(i.b)(),t=Object.keys(Object(i.c)((function(e){return e.FeedCard.cards}))),a=Se();return Object(ee.jsx)(X.a,{size:"medium",color:"black",className:a.updatePos,onClick:function(){t.forEach((function(t){return e(L(t))}))},children:Object(ee.jsx)(De.a,{})})}var ze=a(229);a(185);var Be=function(){var e=Object(o.b)(K);return Object(ee.jsx)(i.a,{store:K,children:Object(ee.jsxs)(c.a,{loading:Object(ee.jsx)(Fe,{}),persistor:e,children:[Object(ee.jsx)(he,{}),Object(ee.jsxs)(ze.a,{m:"15px",height:"100%",children:[Object(ee.jsx)(je.a,{container:!0,spacing:3,justify:"center",alignItems:"center",children:Object(ee.jsx)(Ie,{})}),Object(ee.jsx)(ae,{}),Object(ee.jsx)(Re,{})]})]})})},We=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(ee.jsx)(Be,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mTracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/mTracker","/service-worker.js");We?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ae(t,e)}))}}(),"Notification"in window?"granted"===Notification.permission||Notification.requestPermission().then((function(e){console.log("Given the following permission",e),"granted"!==e&&alert("Enable notifications if you'd like to be notified when a new chapter comes out!")})):alert("This Browser does not support desktop notifications")}},[[186,1,2]]]);
//# sourceMappingURL=main.8c00f48b.chunk.js.map