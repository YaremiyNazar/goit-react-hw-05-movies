"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[312,567],{567:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(164),a=n(222),c="Loading_style__k9MZd",i=n(184),u=document.querySelector("#loader-root"),o=function(){return(0,r.createPortal)((0,i.jsx)("div",{className:c,children:(0,i.jsx)(a.Bb,{color:" #3f51b5",height:150,width:150})}),u)}},312:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),a=n(439),c=n(757),i=n.n(c),u=n(791),o=n(264),s=n(689),f=n(436),l=n(567),d={text:"Revie_text__ht0Ol",item:"Revie_item__aQAmz"},h=n(184),m=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],m=(0,u.useState)(!1),v=(0,a.Z)(m,2),p=v[0],g=v[1],x=(0,u.useState)(""),_=(0,a.Z)(x,2),w=_[0],k=_[1],j=(0,s.UO)();(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Jh)(j.movieId);case 3:t=e.sent,n=t.data,c(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),k(o.Notify.failure("Something went wrong. ".concat(e.t0.message)));case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[j.movieId]);var b=[];return 0!==n.length&&(b=n.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,h.jsxs)("li",{className:d.item,children:[(0,h.jsx)("h3",{className:d.title,children:t}),(0,h.jsx)("p",{className:d.text__content,children:n})]},r)}))),(0,h.jsxs)("div",{children:[p&&(0,h.jsx)(l.default,{}),w&&(0,h.jsx)("p",{children:w.message}),n.length?b:(0,h.jsx)("p",{className:d.text,children:"We don't have any reviews for this movie"})]})}},436:function(e,t,n){n.d(t,{Hg:function(){return a},IQ:function(){return i},JI:function(){return c},Jh:function(){return u},gH:function(){return o}});var r=n(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"120636c1014a93c478761ecd30b2dd89"}}),a=function(){return r.get("/trending/movie/day")},c=function(e){return r.get("/movie/".concat(e))},i=function(e){return r.get("/movie/".concat(e,"/credits"))},u=function(e){return r.get("/movie/".concat(e,"/reviews"))},o=function(e){return r.get("/search/movie",{params:{query:e}})}}}]);
//# sourceMappingURL=312.bd7b77c2.chunk.js.map