(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{201:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(28),i=a.n(r),c=(a(81),a(3)),l=a(4),o=a(7),u=a(5),h=a(6),d=a(40),p=a(75),m=a(1),g=a(69),v=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={value:"",active:!1},a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.handleFocus=a.handleFocus.bind(Object(m.a)(Object(m.a)(a))),a.handleBlur=a.handleBlur.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"handleFocus",value:function(t){this.setState({active:!0})}},{key:"handleBlur",value:function(t){this.setState({active:!1})}},{key:"renderInput",value:function(){var t=this;return"addtag"!==this.props.instance?s.a.createElement("div",{className:"Input ".concat(this.props.instance,"-outer")},s.a.createElement("input",{name:this.props.instance,className:"".concat(this.props.instance," ").concat(this.state.active?"active":""),type:"text",value:this.state.value,onChange:this.handleChange.bind(this),onKeyUp:this.props.onKeyUp,placeholder:this.props.placeholder,onFocus:this.handleFocus,onBlur:this.handleBlur})):"addtag"===this.props.instance?s.a.createElement("div",{className:"Input ".concat(this.props.instance,"-outer")},s.a.createElement(g.DebounceInput,{onKeyUp:this.props.onKeyUp,placeholder:this.props.placeholder,name:this.props.instance,className:this.props.instance,minLength:2,debounceTimeout:700,onChange:function(e){return t.setState({value:e.target.value})}})):void 0}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.renderInput())}}]),e}(n.Component);var b=function(t){return s.a.createElement("div",{className:"icon-container",onClick:function(e){t.onClick(e)}},s.a.createElement("i",{"data-tip":t.tooltip,className:"fa fa-".concat(t.type," icon"),"aria-hidden":"true",ref:t.refs}))};var f=function(t){return s.a.createElement("div",{className:t.instance},t.text,s.a.createElement(b,{type:"times",onClick:function(e){t.onClick(e)}}))},y=a(70),j=a.n(y),O=a(71),k=a.n(O),C=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={closed:!0,showTest:!1,tags:[]},a.handleKeyup=k.a.debounce(a.handleKeyup.bind(Object(m.a)(Object(m.a)(a))),1e3),a.handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"getAverage",value:function(t){return t.grades.reduce(function(t,e){return parseInt(t)+parseInt(e)})/t.grades.length}},{key:"handleKeyup",value:function(t,e){var a=t.target.value;if(a.replace(/\s/g,"").length&&""!==a){var n={text:a};this.props.onKeyUp({event:t,tag:n,studentId:e})}}},{key:"handleClick",value:function(t,e){t.target.classList.contains("fa-plus")||t.target.classList.contains("fa-minus")?this.setState({showTest:!this.state.showTest,closed:!this.state.closed}):(t.target.classList.contains("fa-trash"),this.props.onClick({event:t,id:e}))}},{key:"renderTags",value:function(t){var e=this;if(this.props.tags){var a=Object.keys(this.props.tags);return s.a.createElement("div",{className:"tag-container"},a.map(function(a,n){return s.a.createElement(f,{key:n,instance:"addtag",text:a,onClick:function(a){return e.handleClick(a,t)}})}))}}},{key:"renderDrawerIcons",value:function(t){var e=this;return this.state.closed?s.a.createElement(s.a.Fragment,null,s.a.createElement(b,{type:"plus",tooltip:"Open",onClick:function(a){return e.handleClick(a,t)}}),s.a.createElement(b,{type:"trash",tooltip:"Delete",onClick:function(a){return e.handleClick(a,t)}})):s.a.createElement(s.a.Fragment,null,s.a.createElement(b,{type:"minus",tooltip:"Close",onClick:function(a){return e.handleClick(a,t)}}),s.a.createElement(b,{type:"trash",tooltip:"Delete",onClick:function(a){return e.handleClick(a,t)}}))}},{key:"renderMarkup",value:function(){var t=this;return s.a.createElement("div",{className:"Student"},s.a.createElement("div",{className:"student-info-container"},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{className:"student-pic",src:this.props.pic,alt:"".concat(this.props.firstName," ").concat(this.props.lastName)})),s.a.createElement("div",{className:"info-container"},s.a.createElement("h1",{className:"student-name"},this.props.firstName.toUpperCase()," ",this.props.lastName.toUpperCase()),s.a.createElement("ul",{className:"student-info"},s.a.createElement("li",null,"Email: ",this.props.email),s.a.createElement("li",null,"Company: ",this.props.company),s.a.createElement("li",null,"Skill: ",this.props.skill),s.a.createElement("li",null,"Average: ","".concat(this.getAverage(this.props),"%"))),this.renderDrawerIcons(this.props.id))),s.a.createElement("div",{className:"test-info-container ".concat(this.state.showTest?"show":"hide")},s.a.createElement("div",{className:"test-container"},s.a.createElement("ul",{className:"test-info"},this.props.grades.map(function(t,e){return s.a.createElement("li",{key:e},"Test ",e+1,":\xa0\xa0\xa0\xa0",t,"%")}),this.renderTags(this.props.id),s.a.createElement(v,{instance:"addtag",placeholder:"Add a tag",onKeyUp:function(e){e.persist(),t.handleKeyup(e,t.props.id)}})))))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,null),this.renderMarkup())}}]),e}(n.Component),E=a(72),w=a.n(E),S=a(8),T=a.n(S),N=a(73),A=a.n(N),x=a(74),K=a.n(x),I=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={show:!1},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"renderAlert",value:function(){var t=this;return s.a.createElement(K.a,{variant:this.props.variant,onClick:function(e){return t.handleDismiss(e)},dismissible:!0},s.a.createElement("p",null,this.props.text))}},{key:"handleDismiss",value:function(t){this.setState({show:!1}),this.props.onClick(t)}},{key:"componentDidUpdate",value:function(){this.props.show!==this.state.show&&this.setState({show:this.props.show})}},{key:"render",value:function(){return this.state.show?s.a.createElement(s.a.Fragment,null,this.renderAlert()):null}}]),e}(s.a.Component),L=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={tags:{},tagsKeys:{},alertShow:!1,studentsObj:{},studentsObjCopy:{},studentsObjCopywTags:{},text:""},a.handleKeyup=a.handleKeyup.bind(Object(m.a)(Object(m.a)(a))),a.handleTags=a.handleTags.bind(Object(m.a)(Object(m.a)(a))),a.handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"handleClick",value:function(t){!t.event&&t.target?"button"===t.target.type&&t.target.classList.contains("close")&&this.setState({alertShow:!1}):t.event&&t.event.target.classList.contains("fa-times")&&this.removeTag(t.event,t.id),t.event&&t.event.target.classList.contains("fa-trash")&&this.removeStudent(t.id)}},{key:"handleKeyup",value:function(t){var e=this,a=this,n=t.target.value;if(""===t.target.value&&t.target.classList.contains("search-name"))return c(),void this.setState({alertShow:!1});if(""===t.target.value&&t.target.classList.contains("search-tag")&&(this.toggleAlertShow(Object.keys(this.state.studentsObjCopy),"tag"),Object.keys(this.state.studentsObjCopywTags).length?this.setState({studentsObj:this.state.studentsObjCopywTags}):Object.keys(this.state.studentsObjCopy).length?this.setState({studentsObj:this.state.studentsObjCopy}):console.error("An error in the reseting of the tag search occured.")),"search-name"===t.target.name){c();var s=this.fuseDebounce(n,Object.values(a.state.studentsObj),"lastName","firstName");this.toggleAlertShow(s,"name"),a.setState({studentsArr:s})}else if("search-tag"===t.target.name){var r=this.state.tagsKeys[n];if(r){var i=Object.keys(r).map(function(t){return e.state.studentsObjCopy[t]});this.toggleAlertShow(i,"tag"),this.addTags(this.arrToObj(i),this.state.tags,"rebuild"),this.setState({studentsObj:this.arrToObj(i)})}else t.target.value&&!r&&(this.toggleAlertShow([],"tag"),this.setState({studentsObj:{}}))}function c(){a.setState({studentsObj:a.arrToObj(a.state.studentsArrCopy),studentsArr:a.state.studentsArrCopy})}}},{key:"removeStudent",value:function(t){var e=T()(this.state.studentsObj);delete e[t];var a=Object(p.a)(this.state.studentsArr);a.splice(t,1),this.setState({studentsObj:e,studentsObjCopy:e,studentsArr:a,studentsArrCopy:a})}},{key:"setAlertText",value:function(t){return"tag"===t?"There are no students with those tags.":"name"===t?"There are no students matching that name.":void 0}},{key:"toggleAlertShow",value:function(t,e){t.length?t.length&&this.setState({alertShow:!1,text:this.setAlertText(e)}):this.setState({alertShow:!0,text:this.setAlertText(e)})}},{key:"fuseDebounce",value:function(t,e){var a;arguments[2]&&arguments[3]?a=[arguments[2],arguments[3]]:arguments[3]||(a=[arguments[2]]);var n={shouldSort:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:a};if(t)return new w.a(e,n).search(t)}},{key:"componentDidMount",value:function(){var t=this,e=this;fetch("https://www.hatchways.io/api/assessment/students").then(function(t){return t.json()}).then(function(a){t.setState({studentsArr:a.students,studentsArrCopy:a.students.slice()}),setTimeout(function(){e.setState({studentsObj:e.arrToObj(e.state.studentsArr),studentsObjCopy:T()(e.arrToObj(e.state.studentsArr))})},100)})}},{key:"arrToObj",value:function(t){var e={};return t.map(function(t){return e[t.id]=t}),e}},{key:"handleTags",value:function(t){var e=this,a=T()(this.state.tags);a[t.studentId]?a[t.studentId]&&(a[t.studentId][t.tag.text]=t.tag.text):a[t.studentId]=Object(d.a)({},t.tag.text,t.tag.text),setTimeout(function(){e.addTags(e.state.studentsObjCopy,a,"build")},50);var n=T()(this.state.tagsKeys);n[t.tag.text]?n[t.tag.text]&&!n[t.tag.text][t.studentId]?n[t.tag.text][t.studentId]=t.tag.text:n[t.tag.text][t.studentId]&&console.error("Cannot add identical tags to one object."):n[t.tag.text]=Object(d.a)({},t.studentId,t.tag.text),this.setState({tagsKeys:n,tags:a})}},{key:"removeTag",value:function(t,e){var a=t.target.parentElement.parentElement.innerText,n=T()(this.state.tags),s=T()(this.state.studentsObj);delete s[e].tags[a],delete n[e][a],this.setState({studentsObj:s,tags:n})}},{key:"addTags",value:function(t,e,a){var n=this;if(Object.keys(e).length){var s=T()(t);Object.keys(e).forEach(function(t){s[t]&&(s[t].tags?s[t].tags&&(s[t].tags[t]=t):s[t].tags=e[t])}),setTimeout(function(){"build"===a?n.setState({studentsObj:s,studentsObjCopywTags:s}):"rebuild"===a&&n.setState({studentsObj:s})})}else setTimeout(function(){n.setState({studentsObj:t})})}},{key:"renderSource",value:function(){return A()(this.state.studentsArr,this.state.studentsArrCopy)?Object.values(this.state.studentsObj):this.state.studentsArr}},{key:"renderStudent",value:function(t){var e=this;if(t.studentsObj)return this.renderSource().map(function(t,a){return s.a.createElement(C,{onKeyUp:e.handleTags,firstName:t.firstName,lastName:t.lastName,pic:t.pic,city:t.city,company:t.company,email:t.email,grades:t.grades,id:t.id,skill:t.skill,key:a,tags:t.tags?t.tags:null,onClick:e.handleClick})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"list-container"},s.a.createElement("div",{className:"List"},s.a.createElement(v,{onKeyUp:this.handleKeyup,instance:"search-name",placeholder:"Search by name"}),s.a.createElement(v,{onKeyUp:this.handleKeyup,instance:"search-tag",placeholder:"Search by tag"}),s.a.createElement("div",{className:"students-container"},this.renderStudent(this.state))),s.a.createElement(I,{variant:"secondary",text:this.state.text,show:this.state.alertShow,onClick:this.handleClick}))}}]),e}(n.Component),U=function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(L,null))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},76:function(t,e,a){t.exports=a(201)},81:function(t,e,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.284f3f2f.chunk.js.map