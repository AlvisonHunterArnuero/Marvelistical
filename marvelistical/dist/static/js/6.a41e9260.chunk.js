(this.webpackJsonpmarvelistical=this.webpackJsonpmarvelistical||[]).push([[6],{39:function(e,t,c){"use strict";var s=c(1);t.a=function(e){var t=e.srcText,c=e.name,a=e.charDetails,i=void 0!==a&&a,r="".concat(t,".jpg");return Object(s.jsx)("div",{className:i?"":"thumb1",children:Object(s.jsx)("img",{className:i?"img-fluid":"card-img-top",alt:c||"No Description Provided",src:r,onError:function(e){e.target.onerror=null,e.target.src="".concat("http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg")}})})}},42:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(9),i=c(2),r=c(16),l=c(39),n=c(1);t.default=function(){var e=Object(i.f)().id,t=Object(s.useContext)(r.a),c=t.getCharacterDetailsByID(e);Object(s.useEffect)((function(){void 0===t.data&&(t.fetchData(),t.getCharacterDetailsByID(e))}),t,[]);var d=c[0],j=d.name,o=d.description,m=d.modified,b=d.comics.items,x=d.series.items,h=d.stories.items,u=d.thumbnail.path;return Object(n.jsx)(s.Fragment,{children:Object(n.jsx)("div",{className:"row justify-content-center py-4 my-4 centered",children:Object(n.jsx)("div",{className:"col-10",children:Object(n.jsx)("div",{className:"card text-white bg-dark mb-3 border border-secondary",children:Object(n.jsxs)("div",{className:"row align-items-center justify-content-between",children:[Object(n.jsx)("div",{className:"col-12 col-sm-12 col-md-4",children:Object(n.jsx)(l.a,{srcText:u,alternativeText:j,charDetails:!0})}),Object(n.jsx)("div",{className:"col-12 col-sm-12 col-md-8",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title text-danger fs-3 text-uppercase",children:j}),Object(n.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:Object(n.jsxs)("div",{className:"row justify-content-center",children:[Object(n.jsxs)("div",{className:"col-auto",children:[Object(n.jsx)("small",{className:"text-warning",children:"COMICS: "}),b.length]}),Object(n.jsxs)("div",{className:"col-auto",children:[Object(n.jsx)("small",{className:"text-warning",children:"SERIES: "}),x.length]}),Object(n.jsxs)("div",{className:"col-auto",children:[Object(n.jsx)("small",{className:"text-warning",children:"STORIES: "}),h.length]})]})}),Object(n.jsx)("p",{className:"card-text text-justify",children:o||"--"}),Object(n.jsx)("div",{className:"card-text text-info",children:Object(n.jsxs)("div",{className:"row justify-content-around",children:[Object(n.jsxs)("div",{className:"col-6 text-start",children:[Object(n.jsx)("small",{className:"text-danger",children:"Last Modified: "}),m.substr(0,m.indexOf("T"))]}),Object(n.jsx)("div",{className:"col-6 text-end",children:Object(n.jsxs)(a.b,{className:"btn btn-outline-warning btn-sm",to:"/characters",children:[Object(n.jsx)("i",{className:"far fa-arrow-alt-circle-left"})," ","Characters Board"]})})]})})]})})]})})})})})}}}]);
//# sourceMappingURL=6.a41e9260.chunk.js.map