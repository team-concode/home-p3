(this.webpackJsonpconcode=this.webpackJsonpconcode||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(27),r=n.n(a),i=(n(74),n(98),n(49)),o=n(79),h=n(85),l=n(84),j=n(132),d=n(134),u=n(135),b=n(136),g=n(129),O=n(133),x=n(130),p=n(131),f=(n(99),n(48)),m=n.n(f),y=n(68),v=n(80),w=n.n(v),k=n(69),C=n(81),z=n.n(C),L=new function e(){var t=this;Object(i.a)(this,e),this.ee=new w.a,this.getSystemLang=function(){var e=navigator.language||navigator.userLanguage,t=e.indexOf("-");return t>0&&(e=e.substr(0,t)),e},this.load=function(){t.sb=new Map;for(var e=0;e<k.length;e++){var n=k[e];t.sb.set(n.key.toLowerCase(),n)}},this.changeLang=function(e){t._setLang(e),t.ee.emit("updated")},this._setLang=function(e){"ko"===e?(t.lang=e,t.language="\ud55c\uad6d\uc5b4"):(t.lang="en",t.language="English"),localStorage.setItem("lang",t.lang)},this.addEventHandler=function(){var e=Object(y.a)(m.a.mark((function e(n,s){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.ee.on(n,s);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.removeEventHandler=function(){var e=Object(y.a)(m.a.mark((function e(n,s){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.ee.off(n,s);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.get=function(e){if(null==e)return"";e=e.toLowerCase();var n=t.sb.get(e);if(void 0===n||null==n)return e;var s=t.getWithLang(e,t.lang);return void 0!==s&&null!=s&&""!==s||void 0!==(s=t.getWithLang(e,"en"))&&null!=s?s=s.replace("\n"," "):e},this.format=function(e){var n=t.get(e);if(null==n)return e;for(var s=arguments.length,c=new Array(s>1?s-1:0),a=1;a<s;a++)c[a-1]=arguments[a];return z()(n,c)},this.getWithLang=function(e,n){var s=t.sb.get(e);if(null!=s){if("en"===n)return s.en;if("ko"===n)return s.ko}return""},this.load();var n=localStorage.getItem("lang");null!==n&&void 0!==n?this._setLang(n):(this._setLang("en"),this._setLang(this.getSystemLang()))},S=n(1),I=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(j.a,{src:"/banner.png",centered:!0}),Object(S.jsxs)(d.a,{container:!0,stackable:!0,children:[Object(S.jsx)(d.a.Row,{children:Object(S.jsxs)(u.a,{basic:!0,children:[Object(S.jsx)(j.a,{src:"/LogoB.png",size:"medium"}),Object(S.jsx)(b.a,{as:"h1",size:"huge",children:Object(S.jsx)(b.a.Subheader,{children:"A rogue-like dungeon crawler"})})]})}),Object(S.jsxs)(d.a.Row,{children:[Object(S.jsx)(d.a.Column,{width:4,floated:"left",children:Object(S.jsxs)(u.a,{secondary:!0,children:[Object(S.jsxs)(b.a,{as:"h4",children:[Object(S.jsx)(b.a.Content,{children:"Release Date:"}),Object(S.jsx)(b.a.Subheader,{children:"2021. 12"})]}),Object(S.jsxs)(b.a,{as:"h4",children:[Object(S.jsx)(b.a.Content,{children:"Platforms:"}),Object(S.jsxs)(b.a.Subheader,{children:[Object(S.jsx)("a",{href:"https://play.google.com/store/apps/details?id=io.concode.p3",children:"Android"}),", iOS"]})]}),Object(S.jsxs)(b.a,{as:"h4",children:[Object(S.jsx)(b.a.Content,{children:"Regular Price:"}),Object(S.jsx)(b.a.Subheader,{children:"To be decided"})]})]})}),Object(S.jsxs)(d.a.Column,{width:11,children:[Object(S.jsx)(b.a,{as:"h3",size:"medium",children:"Description"}),Object(S.jsx)(g.a,{hidden:!0}),Object(S.jsx)("p",{children:L.get("desc")}),Object(S.jsx)(b.a,{as:"h3",size:"medium",children:"History"}),Object(S.jsx)("p",{children:L.get("history")}),Object(S.jsx)(b.a,{as:"h3",size:"medium",children:"Features"}),Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:L.get("feature1")}),Object(S.jsx)("li",{children:L.get("feature2")}),Object(S.jsx)("li",{children:L.get("feature3")}),Object(S.jsx)("li",{children:L.get("feature4")}),Object(S.jsx)("li",{children:L.get("feature5")})]}),Object(S.jsx)(b.a,{as:"h3",size:"medium",children:"Awards"}),Object(S.jsx)("ul",{children:Object(S.jsx)("li",{children:Object(S.jsx)("a",{href:"https://events.withgoogle.com/indie-games-festival-korea-2021/2021-top-3-users-choice/",children:"Google Indie Game Festival Korea 2021 Top3"})})}),Object(S.jsx)(b.a,{as:"h3",size:"medium",children:"Videos"}),Object(S.jsxs)("p",{children:[Object(S.jsx)(O.a,{info:!0,size:"small",children:Object(S.jsx)("a",{href:"/video.mov.zip",children:"Download video (52.6MB)"})}),Object(S.jsx)(x.a,{id:"g2HB0Hr3B70",placeholder:"/Video.png",source:"youtube"})]}),Object(S.jsx)(b.a,{as:"h3",size:"medium",children:"Images"}),Object(S.jsx)(O.a,{info:!0,size:"small",children:Object(S.jsx)("a",{href:"/screenshots.zip",children:"Download screenshots (7.3MB)"})}),Object(S.jsxs)(j.a.Group,{size:"medium",children:[Object(S.jsx)(j.a,{src:"/screenshots/1.png"}),Object(S.jsx)(j.a,{src:"/screenshots/2.png"}),Object(S.jsx)(j.a,{src:"/screenshots/3.png"}),Object(S.jsx)(j.a,{src:"/screenshots/4.png"}),Object(S.jsx)(j.a,{src:"/screenshots/5.png"}),Object(S.jsx)(j.a,{src:"/screenshots/6.png"}),Object(S.jsx)(j.a,{src:"/screenshots/7.png"}),Object(S.jsx)(j.a,{src:"/screenshots/8.png"}),Object(S.jsx)(j.a,{src:"/screenshots/9.png"}),Object(S.jsx)(j.a,{src:"/screenshots/10.png"}),Object(S.jsx)(j.a,{src:"/screenshots/11.png"}),Object(S.jsx)(j.a,{src:"/screenshots/12.png"}),Object(S.jsx)(j.a,{src:"/screenshots/13.png"}),Object(S.jsx)(j.a,{src:"/screenshots/14.png"}),Object(S.jsx)(j.a,{src:"/screenshots/15.png"}),Object(S.jsx)(j.a,{src:"/screenshots/16.png"})]}),Object(S.jsx)(b.a,{as:"h3",size:"medium",children:"Icon, Logo and Illustration"}),Object(S.jsxs)("p",{children:[Object(S.jsx)(j.a,{src:"/Icon512.png",size:"small"}),Object(S.jsx)(O.a,{info:!0,size:"small",children:Object(S.jsx)("a",{href:"/images.zip",children:"Download logo (4MB)"})})]}),Object(S.jsx)(b.a,{as:"h3",size:"medium",children:"About CONCODE"}),Object(S.jsx)("p",{children:L.get("about")}),Object(S.jsxs)("p",{children:[Object(S.jsx)(j.a,{src:"/concode_w.png",size:"small"}),Object(S.jsx)(O.a,{info:!0,size:"small",children:Object(S.jsx)("a",{href:"/concode.zip",children:"Download CI (0.1MB)"})})]}),Object(S.jsx)(b.a,{as:"h3",size:"medium",children:"Contact"}),Object(S.jsxs)("p",{children:[Object(S.jsxs)(b.a,{as:"h4",size:"small",children:[Object(S.jsx)(b.a.Content,{children:"Inquiries"}),Object(S.jsx)(b.a.Subheader,{children:Object(S.jsx)("a",{href:"mailto:dev@concode.co",children:"dev@concode.co"})})]}),Object(S.jsxs)(b.a,{as:"h4",size:"small",children:[Object(S.jsx)(b.a.Content,{children:"Twitter"}),Object(S.jsx)(b.a.Subheader,{children:Object(S.jsx)("a",{href:"https://twitter.com/concodestudio",children:"https://twitter.com/concodestudio"})})]}),Object(S.jsxs)(b.a,{as:"h4",size:"small",children:[Object(S.jsx)(b.a.Content,{children:"itch.io"}),Object(S.jsx)(b.a.Subheader,{children:Object(S.jsx)("a",{href:"https://concode-studio.itch.io/the-way-home",children:"https://concode-studio.itch.io/the-way-home"})})]})]})]})]})]}),Object(S.jsx)(u.a,{secondary:!0,as:"footer",className:"footer",children:Object(S.jsxs)(p.a,{textAlign:"center",children:[Object(S.jsxs)("p",{children:["Copyright"," ",Object(S.jsx)("a",{href:"https://concode.co",children:"@CONCODE"})]}),Object(S.jsxs)("p",{children:[Object(S.jsx)("a",{href:"",onClick:function(){return L.changeLang("ko")},children:"KO"})," | ",Object(S.jsx)("a",{href:"",onClick:function(){return L.changeLang("en")},children:"EN"})]})]})})]})}}]),n}(s.Component),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(I,{})}),document.getElementById("root")),D()},69:function(e){e.exports=JSON.parse('[{"key":"desc","ko":"\ub85c\uadf8\ub77c\uc774\ud06c \ub358\uc804 \ud06c\ub864\ub7ec \uc7a5\ub974\uc758 \uac8c\uc784\uc785\ub2c8\ub2e4. \uc774\uc0c1\ud55c \ub3d9\uad74\uc774 \ud558\ub098 \uc788\ub294 \uc12c\uc5d0 \uac07\ud78c \ucf00\ube48\uacfc \uce58\uc988\uac00 \uc9d1\uc73c\ub85c \ub3cc\uc544\uac00\uae30 \uc704\ud574 \uace0\uad70\ubd84\ud22c \ud558\ub294 \uc774\uc57c\uae30 \uc785\ub2c8\ub2e4. \ub9e4\ubc88 \uc0c8\ub86d\uac8c \uc0dd\uc131\ub418\ub294 \ub358\uc804\uc5d0\uc11c \uc801\uc744 \ubb3c\ub9ac\uce58\uace0 \uc790\uc6d0\uc744 \uc218\uc9d1\ud558\uace0 \uac74\ubb3c\uc744 \uac74\uc124\ud558\uc138\uc694. \ud53d\uc140 \uc544\ud2b8\uc758 \uc544\uae30\uc790\uae30\ud568\uacfc \ud568\uaed8 \ub2e4\uc774\ub098\ubbf9\ud55c \uc804\ud22c\ub97c \ud568\uaed8 \uc990\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","en":"It is a rogue-like dungeon crawler game. Trapped on an island with a strange cave, Kevin and Cheese struggle to return home. Defeat enemies, collect resources, and construct buildings. You can enjoy dynamic battles with the cuteness of pixel art."},{"key":"history","ko":"The Way Home\uc740 2021\ub144 2\uc6d4 \ubd80\ud130 \uac1c\ubc1c\uc790\uc758 \ubc18\ub824\ubb18\ub97c \uc8fc\uc778\uacf5\uc0bc\uc544 \uac1c\ubc1c\ub418\uae30 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4. \uc790\ubcf8\uc744 \ube44\ub86f\ud55c \ubaa8\ub4e0\uac83\ub4e4 \ubd80\ud130 \uc644\uc804\ud558\uac8c \ub3c5\ub9bd\ud574\uc11c \uc628\uc804\ud788 \uac1c\ubc1c\uc790\uac00 \ub9cc\ub4e4\uace0 \uc2f6\uc740 \uac8c\uc784\uc5d0 \uc9d1\uc911\ud558\uace0\uc788\uc2b5\ub2c8\ub2e4. \ud604\uc7ac \uac1c\ubc1c\uc911\uc73c\ub85c 2021\ub144 \ub9d0\uc5d0 \ucd9c\uc2dc\ub97c \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4.","en":"The Way Home was developed with the developer\'s cat as the main character in February 2021. We are completely independent of everything, including capital, and are completely focusing on the game what we want to make. It is currently under development and is expected to be released at the end of 2021."},{"key":"feature1","ko":"\uc0ac\ub78c\uc774 \uc0dd\uc131\ud55c \uac83 \uac19\uc740 \ub9f5\uc774 \uc54c\uace0\ub9ac\uc998\uc5d0 \uc758\ud574 \uc790\ub3d9 \uc0dd\uc131\ub429\ub2c8\ub2e4. \ub9e4 \uc804\ud22c\ub97c \uc0c8\ub85c\uc6b4 \ud328\ud134\uc73c\ub85c \uc990\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","en":"A map that looks like a human-generated one is automatically generated by the algorithm. You can enjoy every battle in a new pattern."},{"key":"feature2","ko":"\ub9e4 \uc804\ud22c\uc2dc\ub9c8\ub2e4 \ub2e4\ub978 15\uc885 \uc774\uc0c1\uc758 \uc2a4\ud0ac\ub4e4\uc744 \uc804\ub7b5\uc801\uc73c\ub85c \uc870\ud569\ud574\uc11c \uc804\ud22c\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4.","en":"In each battle, the battle proceeds by strategically combining 15 or more different skills."},{"key":"feature3","ko":"\ub358\uc804\uc5d0\uc11c \uc218\uc9d1\ud55c \uc790\uc6d0\ub4e4\ub85c \ud544\uc694\ud55c \uac74\ubb3c\ub4e4\uc744 \uac74\uc124 \ud558\uace0 \ub9c8\uc744\uc744 \uafb8\ubc00 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","en":"You can construct the buildings and decorate the village with the resources collected in the dungeon."},{"key":"feature4","ko":"\ud53d\uc140\uc544\ud2b8\uc758 \ub530\ub4ef\ud55c \uac10\uc131\uacfc \ud568\uaed8 \ube5b\uacfc \uadf8\ub9bc\uc790\uac00 \uc0b4\uc544\uc788\ub294 \uc870\uba85\ud6a8\uacfc\ub85c \ud604\uc7a5\uac10\uc744 \ub290\ub084 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","en":"You can feel not only the warm sensibility of pixel art but also the realism of the light and shadows."},{"key":"feature5","ko":"\ubc18\uc804\uc774 \uc788\ub294 \ub9e4\ub825\uc801\uc778 \uc2a4\ud1a0\ub9ac\ub97c \ub530\ub77c\uac00\uba70 \ud0d0\ud5d8\uc744 \uacc4\uc18d\ud569\ub2c8\ub2e4.","en":"Continue your exploration as you follow an engaging story."},{"key":"about","ko":"CONCODE\ub294 \ud604\uc7ac 13\ub144\ucc28 \ud504\ub85c\uadf8\ub798\uba38 \ucd9c\uc2e0\uc758 1\uc778 \uac1c\ubc1c \ud648 \uc2a4\ud29c\ub514\uc624 \uc785\ub2c8\ub2e4. \uae30\uc874\uc758 \uac8c\uc784\uc758 \ubb38\ubc95\uacfc\ub294 \ub2e4\ub978 \ub808\ud2b8\ub85c \uac10\uc131\uc758 \uac8c\uc784\uc744 \ub9cc\ub4ed\ub2c8\ub2e4.","en":"CONCODE is a one-person development home studio. We create a game with a retro sensibility that is different from the grammar of existing games."}]')},98:function(e,t,n){},99:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.1d217648.chunk.js.map