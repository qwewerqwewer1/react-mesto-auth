(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{19:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),o=n.n(s),i=n(8),r=(n(19),n(25)),l=n(2),u=n(3),p=n(11),d=n(10),_=n(0);var j=function(e){var t=e.onLogin,n={email:"",password:""},c=Object(a.useState)(n),s=Object(l.a)(c,2),o=s[0],r=s[1],u=function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(p.a)({},n,a))}))},j=function(){r(n)};return Object(_.jsxs)("div",{className:"auth",children:[Object(_.jsx)("h2",{className:"auth__title",children:"\u0412\u0445\u043e\u0434"}),Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.email&&o.password&&t(o).then(j)},className:"form",autoComplete:"off",children:[Object(_.jsx)("input",{type:"email",id:"email",name:"email",value:o.email,onChange:u,className:"form__input form__input_theme_dark",placeholder:"Email"}),Object(_.jsx)("input",{type:"password",id:"password",name:"password",value:o.password,onChange:u,className:"form__input form__input_theme_dark",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(_.jsx)("button",{type:"submit",className:"form__button",children:"\u0412\u043e\u0439\u0442\u0438"}),Object(_.jsxs)("p",{className:"auth__alternate",children:["\u0414\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e ",Object(_.jsx)(i.b,{className:"auth__link",to:"/sign-up",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u0441\u044f"})]})]})]})};var h=function(e){var t=e.onRegister,n={email:"",password:""},c=Object(a.useState)(n),s=Object(l.a)(c,2),o=s[0],r=s[1],u=function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(p.a)({},n,a))}))},j=function(){r(n)};return Object(_.jsxs)("div",{className:"auth",children:[Object(_.jsx)("h2",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.email&&o.password&&t(o).then(j)},className:"form",autoComplete:"off",children:[Object(_.jsx)("input",{type:"email",id:"email",name:"email",className:"form__input form__input_theme_dark",value:o.email,onChange:u,placeholder:"Email"}),Object(_.jsx)("input",{type:"password",id:"password",name:"password",className:"form__input form__input_theme_dark",value:o.password,onChange:u,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(_.jsx)("button",{type:"submit",className:"form__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(_.jsxs)("p",{className:"auth__alternate",children:["\u0423\u0436\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c? ",Object(_.jsx)(i.b,{className:"auth__link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},m=n(22),b=function(e){var t=e.component,n=Object(m.a)(e,["component"]);return Object(_.jsx)(u.b,{children:function(){return!0===n.loggedIn?Object(_.jsx)(t,Object(d.a)({},n)):Object(_.jsx)(u.a,{to:"./sign-in"})}})},f=n.p+"static/media/ValidReg.1b6082f8.svg",O=n.p+"static/media/InvalidReg.df8eddf6.svg",g=n.p+"static/media/Close_ico.a004a2d5.svg";var x=function(e){return Object(_.jsx)("section",{className:"popup popup_tooltip ".concat(e.openPopup?"popup__opened":""),children:Object(_.jsxs)("div",{className:"popup__container",children:[Object(_.jsxs)("div",{className:"tooltip",children:[Object(_.jsx)("img",{className:"tooltip__image",src:e.success?f:O,alt:"Result"}),Object(_.jsx)("p",{className:"tooltip__description",children:e.success?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})]}),Object(_.jsx)("button",{className:"popup__close",onClick:e.closePopup,type:"button",children:Object(_.jsx)("img",{alt:"\u041f\u043b\u044e\u0441",className:"popup__image",src:g})})]})})},v="https://auth.nomoreparties.co",N=n(23),k=n(24),C=new(function(){function e(t){var n=t.address,a=t.token,c=t.groupId;Object(N.a)(this,e),this._address=n,this._token=a,this._groupId=c}return Object(k.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"_get",value:function(e){return fetch(e,{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"_patch",value:function(e,t){return fetch(e,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:t}).then(this._checkResponse)}},{key:"_post",value:function(e,t){return fetch(e,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:t}).then(this._checkResponse)}},{key:"_put",value:function(e){return fetch(e,{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"_delete",value:function(e){return fetch(e,{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"getCards",value:function(){var e="".concat(this._address).concat(this._groupId,"/cards");return this._get(e)}},{key:"getUserInfo",value:function(){var e="".concat(this._address).concat(this._groupId,"/users/me");return this._get(e)}},{key:"setProfile",value:function(e,t){var n="".concat(this._address).concat(this._groupId,"/users/me"),a=JSON.stringify({name:e,about:t});return this._patch(n,a)}},{key:"setAvatar",value:function(e){var t="".concat(this._address).concat(this._groupId,"/users/me/avatar"),n=JSON.stringify({avatar:e});return this._patch(t,n)}},{key:"postCard",value:function(e,t){var n="".concat(this._address).concat(this._groupId,"/cards"),a=JSON.stringify({name:e,link:t});return this._post(n,a)}},{key:"showLike",value:function(e){var t="".concat(this._address).concat(this._groupId,"/cards/").concat(e);return this._get(t).then((function(e){console.log(e)}))}},{key:"setLike",value:function(e){var t="".concat(this._address).concat(this._groupId,"/cards/likes/").concat(e);return this._put(t)}},{key:"delLike",value:function(e){var t="".concat(this._address).concat(this._groupId,"/cards/likes/").concat(e);return this._delete(t)}},{key:"delCard",value:function(e){var t="".concat(this._address).concat(this._groupId,"/cards/").concat(e);return this._delete(t)}}]),e}())({address:"https://mesto.nomoreparties.co/v1/",token:"d4b37e18-f7c9-4662-8ad1-fdc803833149",groupId:"cohort-19"}),y=n.p+"static/media/burger.a46d5c1c.svg",P=n.p+"static/media/close_burger.3c2485ff.svg";var S=function(e){var t=e.email,n=e.isLogged,a=e.onLogout,s=c.a.useState(!1),o=Object(l.a)(s,2),r=o[0],p=o[1],d=function(e){p(!r)},j=r?"header__nav header__nav_active":"header__nav",h=r?"menu menu_active":"menu",m=r?"menu__item menu__item_active":"menu__item",b=r?"header__logo header__logo_active":"header__logo",f=r?"header__burger":"header__burger header__burger_active",O=r?"header__burger header__burger_active":"header__burger";return Object(_.jsxs)("header",{className:"header",children:[Object(_.jsx)("div",{className:b}),Object(_.jsx)("nav",{className:n?j:"",children:Object(_.jsx)("ul",{className:h,children:Object(_.jsxs)(u.d,{children:[Object(_.jsx)(u.b,{path:"/sign-up",children:Object(_.jsx)("li",{className:"menu__item",children:Object(_.jsx)(i.b,{className:"menu__link",to:"sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})})}),Object(_.jsx)(u.b,{path:"/sign-in",children:Object(_.jsx)("li",{className:"menu__item",children:Object(_.jsx)(i.b,{className:"menu__link",to:"sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})}),n?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("li",{className:m,children:t}),Object(_.jsx)("li",{className:m,children:Object(_.jsx)("span",{className:"menu__link",onClick:function(){p(!1),a()},children:"\u0412\u044b\u0439\u0442\u0438"})})]}):""]})})}),Object(_.jsxs)(u.b,{path:"/cards",children:[Object(_.jsx)("button",{className:f,onClick:d,children:Object(_.jsx)("img",{src:y,alt:"\u0411\u0443\u0440\u0433\u0435\u0440"})}),Object(_.jsx)("button",{className:O,onClick:d,children:Object(_.jsx)("img",{src:P,alt:"\u0411\u0443\u0440\u0433\u0435\u0440"})})]})]})},w=n.p+"static/media/pointer.8667ac4a.svg",I=n.p+"static/media/Vector.d86bb2ed.svg",T=c.a.createContext();var E=function(e){var t=c.a.useContext(T),n=e.card.owner._id===t._id,a="element__delete ".concat(n?"element__delete_active":"element__delete"),s=e.card.likes.some((function(e){return e._id===t._id})),o="element__like ".concat(s?"element__like_active":"element__like");return Object(_.jsxs)("div",{className:"element",children:[Object(_.jsx)("button",{type:"button",onClick:function(){e.onCardDelete(e.card)},className:a}),Object(_.jsx)("img",{className:"element__image",alt:e.card.name,src:e.card.link,onClick:function(){e.onCardClick(e.card)}}),Object(_.jsxs)("div",{className:"element__data",children:[Object(_.jsx)("h2",{className:"element__paragraph",children:e.card.name}),Object(_.jsxs)("div",{className:"element__likes",children:[Object(_.jsx)("button",{type:"button",className:o,onClick:function(){e.onCardLike(e.card)}}),Object(_.jsx)("span",{className:"element__likes-users",children:e.card.likes.length})]})]})]})};var L=function(e){var t=c.a.useContext(T);return Object(_.jsxs)("main",{className:"main",children:[Object(_.jsxs)("section",{className:"profile",children:[Object(_.jsxs)("div",{className:"profile__position",children:[Object(_.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(t.avatar,")")},onClick:e.onEditAvatar}),Object(_.jsxs)("div",{className:"profile__info",children:[Object(_.jsxs)("div",{className:"profile__info-container",children:[Object(_.jsx)("h1",{className:"profile__title",children:t.name}),Object(_.jsx)("p",{className:"profile__subtitle",children:t.about})]}),Object(_.jsx)("button",{type:"button",className:"profile__edit-button",onClick:e.onEditProfile,children:Object(_.jsx)("img",{src:w,alt:"\u0440\u0443\u0447\u043a\u0430-\u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440"})})]})]}),Object(_.jsx)("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace,children:Object(_.jsx)("img",{alt:"\u041f\u043b\u044e\u0441",src:I,className:"profile__plus"})})]}),Object(_.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(_.jsx)(E,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var A=function(){return Object(_.jsxs)("footer",{className:"footer",children:[Object(_.jsx)("p",{className:"footer__paragaph",children:"\xa9 2020 Mesto Russia"}),Object(_.jsx)("p",{className:"footer__paragaph",children:"by Dmitriy Kovyazin"})]})};var R=function(e){return Object(_.jsx)("div",{className:"popup popup_".concat(e.name," ").concat(e.openPopup?"popup__opened":""),children:Object(_.jsx)("div",{className:"popup__content",children:Object(_.jsxs)("form",{name:"".concat(e.name),className:"popup__form",onSubmit:e.onSubmit,children:[Object(_.jsx)("button",{type:"reset",className:"popup__close",onClick:e.closePopup,children:Object(_.jsx)("img",{alt:"".concat(e.title,"-\u043a\u0440\u0435\u0441\u0442\u0438\u043a"),src:g,className:"popup__image"})}),Object(_.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(_.jsx)("button",{type:"submit",className:"popup__button",children:e.buttonTitleSubmit})]})})})};var D=function(e){var t=c.a.useRef();return Object(_.jsxs)(R,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0410\u0432\u0430\u0442\u0430\u0440",name:"formPhoto",buttonTitleSubmit:"C\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",openPopup:e.openPopup,closePopup:e.closePopup,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(_.jsx)("input",{ref:t,id:"popup__span_photo-url",name:"inputPhoto",type:"url",minlength:"2",placeholder:"URL",className:"popup__input popup__input_url_photo",required:!0}),Object(_.jsx)("span",{id:"avatar-link",className:"popup__span popup__span_photo-url-error"})]})};var U=function(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(l.a)(o,2),r=i[0],u=i[1];return Object(_.jsxs)(R,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",name:"formAddCards",buttonTitleSubmit:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",openPopup:e.openPopup,closePopup:e.closePopup,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:r})},children:[Object(_.jsx)("input",{id:"popup__span_add-title",name:"addCardName",type:"text",minlength:"2",maxlength:"30",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_name_cardtitle",onChange:function(e){s(e.target.value)},required:!0}),Object(_.jsx)("span",{id:"addCardNameError",className:"popup__span popup__span_add-title-error"}),Object(_.jsx)("input",{id:"popup__span_add-url",name:"addCardUrl",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_url_cardtitle",onChange:function(e){u(e.target.value)},required:!0}),Object(_.jsx)("span",{id:"addCardUrlError",className:"popup__span popup__span_add-url-error"})]})};var z=function(e){return Object(_.jsx)("div",{className:"popup popup_lightbox ".concat(e.card?"popup__opened":""),children:Object(_.jsxs)("div",{className:"popup__container popup__container_lightbox",children:[Object(_.jsxs)("figure",{className:"lightbox",children:[Object(_.jsx)("img",{alt:e.card?e.card.name:"",src:e.card?e.card.link:"#",className:"lightbox__image"}),Object(_.jsx)("figcaption",{className:"lightbox__title",children:e.card?e.card.name:""})]}),Object(_.jsx)("button",{className:"popup__close popup__close_lightbox",onClick:e.onClose,type:"button",children:Object(_.jsx)("img",{alt:"\u041f\u043b\u044e\u0441",className:"popup__image",src:g})})]})})};var J=function(e){var t=c.a.useContext(T),n=c.a.useState(t.name),a=Object(l.a)(n,2),s=a[0],o=a[1],i=c.a.useState(t.about),r=Object(l.a)(i,2),u=r[0],p=r[1];return c.a.useEffect((function(){o(t.name),p(t.about)}),[t]),Object(_.jsxs)(R,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"formProfile",buttonTitleSubmit:"C\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",openPopup:e.openPopup,closePopup:e.closePopup,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:u})},children:[Object(_.jsx)("input",{id:"popup__span_profile-title",value:s,onChange:function(e){o(e.target.value)},name:"profileName",placeholder:"\u0418\u043c\u044f",type:"text",minlength:"2",maxlength:"40",className:"popup__input popup__input_name_title",required:!0}),Object(_.jsx)("span",{id:"profileNameError",className:"popup__span popup__span_profile-title-error"}),Object(_.jsx)("input",{id:"popup__span_profile-subtitle",value:u,onChange:function(e){p(e.target.value)},name:"profileProfession",placeholder:"\u041e \u0441\u0435\u0431\u0435",type:"text",minlength:"2",maxlength:"200",className:"popup__input popup__input_name_subtitle",required:!0}),Object(_.jsx)("span",{id:"profileProfessionError",className:"popup__span popup__span_profile-subtitle-error"})]})};var F=function(){var e=c.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),o=Object(l.a)(s,2),i=o[0],p=o[1],d=c.a.useState(!1),m=Object(l.a)(d,2),f=m[0],O=m[1],g=c.a.useState(null),N=Object(l.a)(g,2),k=N[0],y=N[1],P=c.a.useState({}),w=Object(l.a)(P,2),I=w[0],E=w[1],F=c.a.useState([]),q=Object(l.a)(F,2),B=q[0],M=q[1],V=c.a.useState(!1),G=Object(l.a)(V,2),H=G[0],K=G[1],Q=c.a.useState(!1),W=Object(l.a)(Q,2),X=W[0],Y=W[1],Z=c.a.useState(!1),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=c.a.useState(""),ae=Object(l.a)(ne,2),ce=ae[0],se=ae[1],oe=Object(u.g)(""),ie=c.a.useCallback((function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(v,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){try{if(200===e.status)return e.json()}catch(t){return t}})).then((function(e){return e})).catch((function(e){return console.log(e)}))}(e).then((function(e){e&&(K(!0),se(e.data.email),oe.push("/cards"))})).catch((function(){return oe.push("/sign-in")}))}),[oe]);function re(){a(!1),p(!1),O(!1),y(null),te(!1)}return c.a.useEffect((function(){ie()}),[]),c.a.useEffect((function(){C.getUserInfo().then((function(e){E(e)})).catch((function(e){console.log(e)}))}),[]),c.a.useEffect((function(){C.getCards().then((function(e){M(e)})).catch((function(e){console.log(e)}))}),[]),Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(T.Provider,{value:I,children:Object(_.jsxs)("div",{className:"body",children:[Object(_.jsxs)("div",{className:"page",children:[Object(_.jsx)(S,{email:ce,isLogged:H,onLogout:function(){localStorage.removeItem("jwt"),se(""),K(!1),oe.push("/sign-in")}}),Object(_.jsxs)(u.d,{children:[Object(_.jsx)(u.b,{path:"/sign-up",children:Object(_.jsx)(h,{onRegister:function(e){return function(e,t){return fetch("".concat(v,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){try{if(200===e.status)return e.json()}catch(t){return t}})).then((function(e){return e})).catch((function(e){return console.log(e)}))}(e.email,e.password).then((function(e){return Y(!0),te(!0),oe.push("/sign-in"),e})).catch((function(e){te(!0),console.log(e)}))}})}),Object(_.jsx)(u.b,{path:"/sign-in",children:Object(_.jsx)(j,{onLogin:function(e){var t=e.email,n=e.password;return function(e,t){return fetch("".concat(v,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){try{if(200===e.status)return e.json()}catch(t){return t}})).then((function(e){return e})).catch((function(e){return console.log(e)}))}(t,n).then((function(e){e.token&&(se(t),K(!0),localStorage.setItem("jwt",e.token),oe.push("/cards"))})).catch((function(e){console.log(e)}))}})}),Object(_.jsx)(b,{path:"/cards",loggedIn:H,component:L,cards:B,onEditAvatar:function(){a(!0)},onEditProfile:function(){p(!0)},onAddPlace:function(){O(!0)},onCardDelete:function(e){C.delCard(e._id).then((function(){var t=B.filter((function(t){return!(t._id===e._id)}));M(t)})).catch((function(e){console.log(e)}))},onCardClick:function(e){y(e)},onCardLike:function(e){(e.likes.some((function(e){return e._id===I._id}))?C.delLike(e._id):C.setLike(e._id)).then((function(t){var n=B.map((function(n){return n._id===e._id?t:n}));M(n)})).catch((function(e){console.log(e)}))}}),Object(_.jsx)(u.b,{children:H?Object(_.jsx)(u.a,{to:"/cards"}):Object(_.jsx)(u.a,{to:"/sign-in"})})]}),Object(_.jsx)(A,{})]}),Object(_.jsx)(D,{openPopup:n,closePopup:re,onUpdateAvatar:function(e){C.setAvatar(e.avatar).then((function(e){E(e),re()})).catch((function(e){console.log(e)}))}}),Object(_.jsx)(J,{openPopup:i,closePopup:re,onUpdateUser:function(e){C.setProfile(e.name,e.about).then((function(e){E(e),re()})).catch((function(e){console.log(e)}))}}),Object(_.jsx)(U,{openPopup:f,closePopup:re,onAddPlace:function(e){C.postCard(e.name,e.link).then((function(e){M([e].concat(Object(r.a)(B))),re()})).catch((function(e){console.log(e)}))}}),Object(_.jsx)(R,{name:"confirmDeleteCard",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonTitleSubmit:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(_.jsx)(z,{card:k,onClose:re}),Object(_.jsx)(x,{openPopup:ee,closePopup:re,success:X})]})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(i.a,{children:Object(_.jsx)(F,{})})}),document.getElementById("root")),q()}},[[39,1,2]]]);
//# sourceMappingURL=main.5e86f816.chunk.js.map