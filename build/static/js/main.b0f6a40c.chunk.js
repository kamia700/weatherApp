(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{2:function(e,t,a){e.exports={visually__hidden:"Navbar_visually__hidden__1gaaT",menu__wrap:"Navbar_menu__wrap__14jN5",menu:"Navbar_menu__2e57V",form:"Navbar_form__VWdS4",form__OKbtn:"Navbar_form__OKbtn__-zuJn",form__input:"Navbar_form__input__2vdhl",form__changes:"Navbar_form__changes__3ez_c",form__location:"Navbar_form__location__2utdc",switch:"Navbar_switch__3yPoA",switch__wrap:"Navbar_switch__wrap__ekP1L",switch__Cbtn:"Navbar_switch__Cbtn__JYOv5",switch__Fbtn:"Navbar_switch__Fbtn__cn90M"}},27:function(e,t,a){},4:function(e,t,a){e.exports={info:"InfoBar_info__2sF46",info__block:"InfoBar_info__block__3Xddc"}},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),c=a(18),s=a.n(c),r=(a(27),a(5)),o=a(19),d=a(20),h=a(22),l=a(21),_=a(6),u=a.n(_),m=(a(47),a(7)),p=a.n(m),j=a(0);function b(e){var t=e.weather,a=t.temperature,n=t.description,i="http://openweathermap.org/img/wn/"+t.img+"@2x.png";return Object(j.jsx)("div",{children:Object(j.jsx)("section",{className:p.a.weather,children:Object(j.jsxs)("div",{className:p.a.weather__temp,children:[Object(j.jsxs)("div",{className:p.a.weather__title,children:[Object(j.jsx)("img",{className:"mainImg",src:i,alt:"weather-img"}),Object(j.jsxs)("span",{children:[Math.round(a),Object(j.jsx)("sup",{children:"o"})]})]}),Object(j.jsx)("p",{children:n})]})})})}var w=a(2),v=a.n(w);function g(e){var t=e.weather,a=t.temperature,n=t.location;return Object(j.jsx)("div",{className:v.a.menu__wrap,children:Object(j.jsxs)("nav",{className:v.a.menu,children:[Object(j.jsxs)("form",{className:v.a.form,onSubmit:function(t){e.changeWeather(t)},children:[Object(j.jsx)("label",{className:v.a.visually__hidden,children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"}),Object(j.jsx)("input",{className:v.a.form__input,placeholder:n||"",onChange:function(t){return e.changeRegion(t.target.value)},autoComplete:"on"}),Object(j.jsx)("button",{type:"submit",className:v.a.form__OKbtn,children:"OK"}),Object(j.jsxs)("div",{className:v.a.form__changes,children:[Object(j.jsx)("p",{children:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434"}),Object(j.jsx)("p",{className:v.a.form__location,children:"\u041c\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})]})]}),Object(j.jsxs)("div",{className:v.a.switch,children:[Object(j.jsx)("span",{children:Object(j.jsx)("sup",{children:"o"})}),Object(j.jsxs)("div",{className:v.a.switch__wrap,children:[Object(j.jsx)("button",{id:"Cbtn",className:v.a.switch__Cbtn+" active",onClick:function(t){e.handleClick(t.target.id),e.changeUnits("metric",a)},children:"C"}),Object(j.jsx)("button",{id:"Fbtn",className:v.a.switch__Fbtn,onClick:function(t){e.handleClick(t.target.id),e.changeUnits("imperial",a)},children:"F"})]})]})]})})}var f=a(4),O=a.n(f);function x(e){var t=e.weather,a=t.humidity,n=t.pressure,i=t.wind,c=t.wind_dir,s=Math.floor(c/22.5+.5)%8;return Object(j.jsx)("div",{children:Object(j.jsxs)("section",{className:O.a.info,children:[Object(j.jsxs)("div",{className:O.a.info__block,children:[Object(j.jsx)("p",{children:"\u0412\u0435\u0442\u0435\u0440"}),Object(j.jsxs)("span",{children:[Math.round(i)," \u043c/\u0441, ",["\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439","\u0441\u0435\u0432\u0435\u0440\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439","\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439","\u044e\u0433\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439","\u044e\u0436\u043d\u044b\u0439","\u044e\u0433\u043e-\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439","\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439","\u0441\u0435\u0432\u0435\u0440\u043e-\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439"][s]]})]}),Object(j.jsxs)("div",{className:O.a.info__block,children:[Object(j.jsx)("p",{children:"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),Object(j.jsxs)("span",{children:[n," \u043c\u043c \u0440\u0442. \u0441\u0442."]})]}),Object(j.jsxs)("div",{className:O.a.info__block,children:[Object(j.jsx)("p",{children:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(j.jsxs)("span",{children:[a,"%"]})]}),Object(j.jsxs)("div",{className:O.a.info__block,children:[Object(j.jsx)("p",{children:"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0436\u0434\u044f"}),Object(j.jsx)("span",{children:"10%"})]})]})})}var N="27ba8c742a54e5d3e7e1e27f3a0e5fa4",C={coords:{latitude:51,longitude:-.12},weather:{},inputData:"",units:"metric",activeClassBtn:"Cbtn"},k=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).changeWeather=function(t){t.preventDefault(),u.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(e.state.inputData,"&lang=ru&appid=").concat(N,"&units=").concat(e.state.units)).then((function(t){var a={location:t.data.name,wind:t.data.wind.speed,wind_dir:t.data.wind.deg,temperature:t.data.main.temp,description:t.data.weather[0].description,img:t.data.weather[0].icon,humidity:t.data.main.humidity,pressure:t.data.main.pressure};e.setState({weather:a})}))},e.changeRegion=function(t){e.setState({inputData:t})},e.changeUnits=function(t,a){if(e.state.units!==t)switch(e.setState({units:t}),t){case"imperial":var n=Math.round(1.8*a+32);e.setState({weather:Object(r.a)(Object(r.a)({},e.state.weather),{},{temperature:n})});break;case"metric":var i=Math.round((a-32)/1.8);e.setState({weather:Object(r.a)(Object(r.a)({},e.state.weather),{},{temperature:i})});break;default:t="metric"}},e.handleClick=function(t){(e.setState({activeClassBtn:t}),e.state.activeClassBtn!==t)&&(document.getElementById(t).classList.add("active"),document.getElementById(e.state.activeClassBtn).classList.remove("active"))},e.state=C,e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var a={latitude:t.coords.latitude,longitude:t.coords.longitude};e.setState({coords:a}),u.a.get("http://api.openweathermap.org/data/2.5/weather?lat=".concat(e.state.coords.latitude,"&lon=").concat(e.state.coords.longitude,"&lang=ru&appid=").concat(N,"&units=metric")).then((function(t){var a={location:t.data.name,wind:t.data.wind.speed,wind_dir:t.data.wind.deg,temperature:t.data.main.temp,description:t.data.weather[0].description,img:t.data.weather[0].icon,humidity:t.data.main.humidity,pressure:t.data.main.pressure};e.setState({weather:a})}))}),(function(t){t.code===t.PERMISSION_DENIED&&console.log("User denied the request for Geolocation:-("),u.a.get("http://api.openweathermap.org/data/2.5/weather?q=Omsk&lang=ru&appid=".concat(N,"&units=metric")).then((function(t){var a={location:t.data.name,wind:t.data.wind.speed,wind_dir:t.data.wind.deg,temperature:t.data.main.temp,description:t.data.weather[0].description,img:t.data.weather[0].icon,humidity:t.data.main.humidity,pressure:t.data.main.pressure};e.setState({weather:a})}))})):console.log("Geolocation is not supported by this browser.")}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"wrap",children:[Object(j.jsx)(g,{handleClick:this.handleClick,changeWeather:this.changeWeather,changeRegion:this.changeRegion,changeUnits:this.changeUnits,weather:this.state.weather,units:this.state.units,activeClassBtn:this.state.activeClassBtn}),Object(j.jsx)(b,{weather:this.state.weather}),Object(j.jsx)(x,{weather:this.state.weather})]})})}}]),a}(i.a.Component);s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={weather__temp:"DisplayWeather_weather__temp__3YtSc",weather__title:"DisplayWeather_weather__title__3zuC8"}}},[[49,1,2]]]);
//# sourceMappingURL=main.b0f6a40c.chunk.js.map