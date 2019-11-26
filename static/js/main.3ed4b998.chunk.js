(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{36:function(e,t,n){e.exports=n(51)},41:function(e,t,n){},42:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(21),s=n.n(l),c=(n(41),n(12)),i=n(9),o=n(13),u=n(14),m=n(15),p=(n(42),n(10)),b=function(e){return{type:"setSettings",payload:{data:e}}},f=n(17),v=n(72),S=n(77),h=n(80),d=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).setPeople=function(t){e.setState({numberOfPeople:t.target.value})},e.setSlices=function(t){var n=t.target.value;n>18&&(n=18),e.setState({numberOfSlices:n})},e.setFlavours=function(t){e.setState({numberOfFlavours:t.target.value})},e.setFlavourRequests=function(t){e.setState({numberOfFlavourRequests:t.target.value})},e.storeSettings=function(t){t.preventDefault();var n=e.state;e.props.setSettings(n)},e.state={numberOfPeople:0,numberOfSlices:0,numberOfFlavours:0,numberOfFlavourRequests:0},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement("h3",null,"Settings"),r.a.createElement("p",null),r.a.createElement(S.a,{onSubmit:this.storeSettings},r.a.createElement(S.a.Control,{id:"filled-basic",onChange:this.setPeople,type:"number",placeholder:"Enter number of people"}),r.a.createElement(S.a.Control,{onChange:this.setSlices,type:"number",placeholder:"Enter number of slices in a pizza"}),r.a.createElement(S.a.Control,{onChange:this.setFlavours,type:"number",placeholder:"Enter number of flavours"}),r.a.createElement(S.a.Control,{onChange:this.setFlavourRequests,type:"number",placeholder:"Enter maximum slice/person/flavour"}),r.a.createElement("p",null),r.a.createElement(h.a,{variant:"primary",type:"submit"},"Submit")),r.a.createElement("p",null))}}]),t}(a.Component);var O=Object(p.b)((function(e){return{settings:e.settings}}),(function(e){return Object(f.a)({setSettings:b},e)}))(d),E=function(e,t,n){return{type:"setSlices",payload:{operation:e,personIndex:t,flavourIndex:n}}},g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).incrementSlice=function(t,n){var a=e.props.sliceStore.sliceData[t][n],r=e.props.sliceStore.personSliceCount.slice(0,Number(t)+1);if(a<e.props.settings.numberOfFlavourRequests&&r[t]<4){e.props.setSlices("+",t,n)}},e.decrementSlice=function(t,n){e.props.setSlices("-",t,n)},e.state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.flavourIndex,n=this.props.personIndex;return r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Flavour ",t),r.a.createElement("h6",{className:"card-text"},"Slices: ",this.props.sliceStore.sliceData[n][t]),r.a.createElement("p",null),r.a.createElement("input",{className:"btn btn-primary",type:"button",value:"+",onClick:function(){e.incrementSlice(n,t)}}),r.a.createElement("span",null," "),r.a.createElement("input",{className:"btn btn-secondary",type:"button",value:"-",onClick:function(){e.decrementSlice(n,t)}}))))}}]),t}(a.Component);var j=Object(p.b)((function(e){return{settings:e.settings,sliceStore:e.sliceStore}}),(function(e){return Object(f.a)({setSettings:b,setSlices:E},e)}))(g),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).getFlavour=function(t){return r.a.createElement(j,{key:t,flavourIndex:t,personIndex:e.props.personIndex})},e.state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=[],t=1;t<=Number(this.props.settings.numberOfFlavours);t++)e.push(this.getFlavour(t));return r.a.createElement("li",{className:"list-group-item list-group-item-light"},r.a.createElement("h5",null,"Person: ",this.props.personIndex),r.a.createElement("div",{className:"row"},e),r.a.createElement("p",null))}}]),t}(a.Component);var C=Object(p.b)((function(e){return{settings:e.settings}}))(y),N=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).getPerson=function(e){return r.a.createElement(C,{key:e,personIndex:e})},e.state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=[],t=1;t<=Number(this.props.settings.numberOfPeople);t++)e.push(this.getPerson(t));return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"People Requests"),r.a.createElement("ul",{className:"list-group"},e),r.a.createElement("p",null))}}]),t}(a.Component);var k=Object(p.b)((function(e){return{settings:e.settings}}))(N),F=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Number(this.props.settings.numberOfFlavours)+1,t=this.props.sliceStore.flavourSliceCount.slice(1,e),n=Number(this.props.settings.numberOfSlices),a=t.map((function(e,t){var a=Math.ceil(e/n);return r.a.createElement("li",{className:"list-group-item",key:t},"Flavour ",t+1,": ",a)})),l=this.props.sliceStore.totalSlices;return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Order Info"),r.a.createElement("h5",{className:"container"},"Total Slices: ",l),r.a.createElement("p",null),r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"list-group"},a)),r.a.createElement("p",null))}}]),t}(a.Component);var x=Object(p.b)((function(e){return{settings:e.settings,sliceStore:e.sliceStore}}))(F),I=n(79),P=n(75),R=n(78),w=n(76),A=n(74),q=n(73),D=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleNext=function(){var t=e.state.activeStep;t<=2&&e.setState({activeStep:t+1})},e.handleBack=function(){var t=e.state.activeStep;t>0&&e.setState({activeStep:t-1})},e.handleReset=function(){e.props.setSettings({numberOfPeople:0,numberOfSlices:0,numberOfFlavours:0,numberOfFlavourRequests:0}),e.props.setSlices("r"),e.setState({activeStep:0})},e.getStep=function(){var t=e.state.activeStep;return 0===t?r.a.createElement(O,null):1===t?r.a.createElement(k,null):2===t?r.a.createElement(x,null):r.a.createElement(q.a,null,"Thank You")},e.state={activeStep:0},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.activeStep;return r.a.createElement(A.a,null,r.a.createElement(I.a,{activeStep:e},r.a.createElement(P.a,{key:0},r.a.createElement(R.a,null,"Settings")),r.a.createElement(P.a,{key:1,active:!0},r.a.createElement(R.a,null,"Order")),r.a.createElement(P.a,{key:2},r.a.createElement(R.a,null,"Order Summary"))),r.a.createElement(A.a,null,this.getStep()),r.a.createElement("div",null,r.a.createElement(w.a,{disabled:0===e,onClick:this.handleReset,variant:"outlined",color:"primary"},"Reset"),r.a.createElement("span",null," "),r.a.createElement(w.a,{disabled:0===e,onClick:this.handleBack,variant:"contained"},"Back"),r.a.createElement("span",null," "),r.a.createElement(w.a,{onClick:this.handleNext,variant:"contained",color:"primary"},"Next")))}}]),t}(a.Component);var B=Object(p.b)((function(e){return{settings:e.settings,sliceStore:e.sliceStore}}),(function(e){return Object(f.a)({setSettings:b,setSlices:E},e)}))(D),z=(n(50),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null))}}]),t}(a.Component));var J=Object(p.b)((function(e){return{settings:e.settings,sliceStore:e.sliceStore}}))(z),T={numberOfPeople:0,numberOfSlices:0,numberOfFlavours:0,numberOfFlavourRequests:0},M={sliceData:new Array(100).fill(null).map((function(){return Array(100).fill(0)})),totalSlices:0,flavourSliceCount:new Array(100).fill(0),personSliceCount:new Array(100).fill(0)},Y=Object(f.b)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;if("setSettings"===t.type){Object.assign(e);return t.payload.data}return e},sliceStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,n={sliceData:new Array(100).fill(null).map((function(){return Array(100).fill(0)})),totalSlices:0,flavourSliceCount:new Array(100).fill(0),personSliceCount:new Array(100).fill(0)};if("setSlices"===t.type){var a=Object.assign({},e),r=Number(t.payload.personIndex),l=Number(t.payload.flavourIndex);return"+"===t.payload.operation?(a.sliceData[r][l]++,a.totalSlices++,a.flavourSliceCount[l]++,a.personSliceCount[r]++):"-"===t.payload.operation?a.sliceData[r][l]>0&&(a.sliceData[r][l]--,a.totalSlices--,a.flavourSliceCount[l]--,a.personSliceCount[r]--):"r"===t.payload.operation&&(a=Object.assign({},n)),a}return e}}),G=Object(f.c)(Y);s.a.render(r.a.createElement(p.a,{store:G},r.a.createElement(J,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.3ed4b998.chunk.js.map