(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,a,t){e.exports=t(234)},125:function(e,a){},126:function(e,a){},127:function(e,a){},133:function(e,a){},135:function(e,a){},170:function(e,a){},171:function(e,a){},223:function(e,a){function t(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=223},234:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(27),o=t.n(c),r=(t(45),t(119),t(20)),l=t(21),m=t(23),s=t(22),u=t(24),g=t(18),d=t(25),p=t(235),f=t(236),y=t(242),h=t(243),v=t(247),E=t(244),j=t(245),b=t(246);function k(){return i.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},"Author:",i.a.createElement("a",{href:!0,src:"https://github.com/Yukichka"},"Yuki"))}var O=[{country:"France",id:"france",cities:[{name:"Paris",location:"/images/paris.jpg",id:"france-paris",images:["/images/paris.jpg","/images/cafekitsune.jpg","/images/fragments.jpg"]},{name:"Marseille",location:"/images/marseille.jpg",id:"france-marseille",images:["/images/marseille.jpg","/images/marseille1.jpg"]},{name:"Nice",location:"/images/nice.jpg",id:"france-nice",images:["/images/nice.jpg","/images/nice1.jpg","/images/nice2.jpg","/images/nice3.jpg"]},{name:"Lyon",location:"/images/lyon.jpg",id:"france-lyon",images:["/images/lyon.jpg","/images/lyon1.jpg","/images/lyon2.jpg","/images/lyon3.jpg","/images/lyon4.jpg"]},{name:"Toulon",location:"/images/toulon.jpg",id:"france-toulon",images:["/images/toulon.jpg"]},{name:"Hyeres",location:"/images/hyeres.jpg",id:"france-hyeres",images:["/images/hyeres.jpg"]},{name:"Porquerolles",location:"",id:"france-porquerolles",images:[]},{name:"Saint-Tropez",location:"/images/sainttropez1.jpg",id:"france-sainttropez",images:["/images/sainttropez1.jpg","/images/sainttropez.jpg"]},{name:"Cannes",location:"/images/cannes.jpg",id:"france-cannes",images:["/images/cannes.jpg","/images/cannes1.jpg"]},{name:"Eze",location:"/images/eze.jpg",id:"france-eze",images:["/images/eze.jpg"]},{name:"Menton",location:"/images/menton1.jpg",id:"france-menton",images:["/images/menton1.jpg","/images/menton.jpg","/images/menton2.jpg"]},{name:"Aix-en-Provence",location:"",id:"france-aixenprovence",images:[]},{name:"Manosque",location:"",id:"france-manosque",images:[]},{name:"Mane",location:"",id:"france-mane",images:[]},{name:"Forcalquier",location:"",id:"france-forcalquier",images:[]},{name:"Valensole",location:"",id:"france-valensole",images:[]},{name:"Toulouse",location:"",id:"france-toulouse",images:[]},{name:"Carcassonne",location:"",id:"france-carcassonne",images:[]},{name:"Bordeaux",location:"",id:"france-bordeaux",images:[]},{name:"Mont-Saint-Michel",location:"",id:"france-montsaintmichel",images:[]}]},{country:"Italy",id:"italy",cities:[{name:"Portofino",location:"/images/portofino1.jpg",id:"italy-portofino",images:["/images/portofino1.jpg","/images/portofino.jpg"]},{name:"Venice",location:"/images/venice.jpg",id:"italy-venice",images:["/images/venice.jpg","/images/florian.jpg","/images/venice1.jpg","/images/venice2.jpg","/images/venice3.jpg"]},{name:"Milan",location:"/images/milan.jpg",id:"italy-milan",images:["/images/milan.jpg","/images/milan1.jpg","/images/milan2.jpg","/images/milan3.jpg"]},{name:"Verona",location:"",id:"italy-nerona",images:[]},{name:"Bergamo",location:"",id:"italy-bergamo",images:[]},{name:"Roma",location:"",id:"italy-roma",images:[]},{name:"Florence",location:"",id:"italy-florence",images:[]},{name:"Genoa",location:"",id:"italy-genoa",images:[]},{name:"Rapallo",location:"",id:"italy-rapallo",images:[]},{name:"Santa Margherita Lingure",location:"",id:"italy-santamargheritalingure",images:[]},{name:"Pompei",location:"",id:"italy-pompei",images:[]},{name:"Sorrent",location:"",id:"italy-sorrent",images:[]},{name:"Salermo",location:"",id:"italy-salermo",images:[]},{name:"Amalfi",location:"",id:"italy-amalfi",images:[]},{name:"Naples",location:"",id:"italy-naples",images:[]},{name:"Capri",location:"",id:"italy-capri",images:[]},{name:"Matera",location:"",id:"italy-matera",images:[]},{name:"Alberobello",location:"",id:"italy-alberobello",images:[]},{name:"Pisa",location:"",id:"italy-pisa",images:[]}]},{country:"Spain",id:"spain",cities:[]},{country:"Netherland",id:"netherland",cities:[]},{country:"Germany",id:"germany",cities:[]},{country:"Belgium",id:"belgium",cities:[]},{country:"Monaco",id:"monaco",cities:[]},{country:"Finland",id:"finland",cities:[]},{country:"Sweden",id:"sweden",cities:[]},{country:"Denmark",id:"denmark",cities:[]},{country:"Ireland",id:"ireland",cities:[]},{country:"Estonia",id:"estonia",cities:[]},{country:"Latvia",id:"latvia",cities:[]},{country:"Lithuania",id:"lithuania",cities:[]},{country:"Austria",id:"austria",cities:[]},{country:"Hungary",id:"hungary",cities:[]},{country:"Czechia",id:"czechia",cities:[]},{country:"Slovakia",id:"slovakia",cities:[]},{country:"Malta",id:"malta",cities:[]},{country:"Portugal",id:"portugal",cities:[]},{country:"Switzerland",id:"switzerland",cities:[]},{country:"Croatia",id:"croatia",cities:[]},{country:"Cyprus",id:"cyprus",cities:[]},{country:"Japan",id:"japan",cities:[]},{country:"South Korea",id:"South korea",cities:[]},{country:"Taiwan",id:"taiwan",cities:[]},{country:"Cambodia",id:"cambodia",cities:[]},{country:"Vietnam",id:"vietnam",cities:[]},{country:"UK",id:"uk",cities:[]},{country:"US",id:"us",cities:[]},{country:"Canada",id:"canada",cities:[]},{country:"China",id:"china",cities:[]},{country:"Hong Kong",id:"hongkong",cities:[]}];function C(e){e.match;return i.a.createElement("div",null,i.a.createElement("h3",null,"Travel"),i.a.createElement("ul",null,O.filter(function(e){return 0!==e.cities.length}).map(function(e){var a=e.country,t=e.id;e.cities;return i.a.createElement("li",{key:t},i.a.createElement(g.b,{to:"/travel/".concat(t)},a))})),i.a.createElement("div",{className:"comment"},"...and lots more! coming soon",i.a.createElement("span",{role:"img","aria-label":"flight"}," ","\u2708")),i.a.createElement("br",null),i.a.createElement("hr",{color:"#FF1493"}),i.a.createElement(k,null))}function w(e){var a=e.split("\r\n");return a.length<=1?[]:a.map(function(e){var a=e.split(","),t=a[0],n=a[1],i=a[2],c=a[3],o=a[3].toLowerCase().replace(/[^\w]/g,"")+"-"+a[0].toLowerCase().replace(/[^\w]/g,"");return{city:t,lat:parseFloat(n),lng:parseFloat(i),country:c,id:o}})}var z=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).state={locationData:[0,0],markers:""},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/citiesinfo.csv").then(function(e){return e.text()}).then(function(a){var t=w(a),n=[];O.forEach(function(e){var a=t.find(function(a){return a.country===e.country});void 0!==a&&n.push(a)}),console.log("visitedCities",n);var i=n.map(function(e){return"".concat(e.lat,",").concat(e.lng)});console.log("coordinates",i);var c=i.join("%7C");e.setState({markers:c}),console.log("----got: ",O[0].country);var o=t.find(function(e){return e.country===O[0].country});console.log("---got: ",o[0]);var r=o?[o.lat,o.lng]:[0,0];console.log("-----got: ",r),e.setState({locationData:r})})}},{key:"render",value:function(){return"0,0"==="".concat(this.state.locationData[0],",").concat(this.state.locationData[1])?i.a.createElement("div",{className:"comment"},"No map information is available"):i.a.createElement("img",{src:"https://maps.googleapis.com/maps/api/staticmap?center=Poland&markers=color:red|label:*|".concat(this.state.markers,"&zoom=2&size=610x500&key=").concat("AIzaSyDpm9Z-4a-U-JeKY44oW9rVRjUoRe6tGz0")})}}]),a}(i.a.Component);function S(){return i.a.createElement("div",null,i.a.createElement(p.a,null,i.a.createElement(f.a,{xs:"4"},i.a.createElement("h3",null,"Home"),i.a.createElement("div",{className:"comment"},i.a.createElement("div",null,"Me, a traveler and cafe lover."),i.a.createElement("div",null,"Always up for somewhere fun!"),i.a.createElement("div",null,"Exploring the earth",i.a.createElement("span",{role:"img","aria-label":"earth"}," ","\ud83c\udf0f")),i.a.createElement("br",null),i.a.createElement("div",null,"Visited",i.a.createElement("b",null," ",O.length," "),"counties",i.a.createElement("span",{role:"img","aria-label":"flight"}," ","\u2708\u2708\u2708")),i.a.createElement("br",null))),i.a.createElement(f.a,{xs:"8"}," ",i.a.createElement(z,null))),i.a.createElement("hr",{color:"#FF1493"}),i.a.createElement(k,null))}var x=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).state={locationData:[0,0]},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/citiesinfo.csv").then(function(e){return e.text()}).then(function(a){var t=w(a).find(function(a){return a.id===e.props.cityId}),n=t?[t.lat,t.lng]:[0,0];e.setState({locationData:n})})}},{key:"render",value:function(){var e="".concat(this.state.locationData[0],",").concat(this.state.locationData[1]);return"0,0"===e?i.a.createElement("div",{className:"comment"},"No map information is available"):i.a.createElement("img",{src:"https://maps.googleapis.com/maps/api/staticmap?center=".concat(e,"&markers=color:red|label:*|").concat(e,"&zoom=7&size=800x500&key=").concat("AIzaSyDpm9Z-4a-U-JeKY44oW9rVRjUoRe6tGz0"),className:"image"})}}]),a}(i.a.Component);t(124);function N(e){var a=e.match,t=O.find(function(e){return e.id===a.params.countryId}).cities.find(function(e){return e.id===a.params.cityId});return i.a.createElement("div",null,i.a.createElement("h3",null,t.name),i.a.createElement(x,{cityId:t.id}),i.a.createElement("br",null),0!==t.images.length?t.images.map(function(e,a){return i.a.createElement("img",{src:e,alt:"",className:"image",key:a})}):i.a.createElement("div",{className:"comment"},"No pictures yet!"),i.a.createElement("br",null),i.a.createElement("hr",{color:"#FF1493"}),i.a.createElement(k,null))}var I=t(237),D=t(238),F=t(239),M=t(240),L=t(241);function P(e){var a=e.match;console.log(a);var t=O.find(function(e){return e.id===a.params.countryId});return i.a.createElement("div",null,i.a.createElement("h3",null,t.country),t.cities.map(function(e){return i.a.createElement("div",{key:e.id},""!==e.location?i.a.createElement(I.a,{className:"container"},i.a.createElement(g.b,{to:"".concat(a.url,"/").concat(e.id)},i.a.createElement(D.a,null,i.a.createElement(F.a,null,i.a.createElement(M.a,{src:e.location,alt:e.name}),i.a.createElement(L.a,{className:"cardtext"},e.name))))):i.a.createElement(I.a,null,i.a.createElement(D.a,{body:!0,className:"text-center"},e.name)))}),i.a.createElement("br",null),i.a.createElement("hr",{color:"#FF1493"}),i.a.createElement(k,null))}var A=t(113),T=t.n(A),U=[];O.forEach(function(e){e.cities.forEach(function(a){U.push({id:a.id,label:a.name,url:"/travel/".concat(e.id,"/").concat(a.id)})})});var V=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).state={value:""},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(T.a,{inputProps:{placeholder:"Search city"},placeholder:"Search city",items:U,shouldItemRender:function(e,a){return e.label.toLowerCase().indexOf(a.toLowerCase())>-1},getItemValue:function(e){return e.label},renderItem:function(e,a){return i.a.createElement("div",{key:e.id,style:{backgroundColor:a?"#eee":"transparent"}},e.label)},value:this.state.value,onChange:function(a){return e.setState({value:a.target.value})},onSelect:function(a,t){e.setState({value:a}),e.props.history.push(t.url)}}))}}]),a}(i.a.Component),R=Object(d.e)(V),q=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(g.a,null,i.a.createElement("div",null,i.a.createElement("br",null),i.a.createElement(p.a,null,i.a.createElement(f.a,{sm:"12",md:{size:8,offset:2}},i.a.createElement(y.a,{color:"white",light:!0,expand:"md"},i.a.createElement(h.a,null,"Travel & Cafe"),i.a.createElement(v.a,{isOpen:!0,navbar:!0},i.a.createElement(E.a,{className:"ml-auto",navbar:!0},i.a.createElement(j.a,null,i.a.createElement(b.a,{tag:g.c,to:"/"},"Home")),i.a.createElement(j.a,null,i.a.createElement(b.a,{tag:g.c,to:"/travel"},"Travel")),i.a.createElement(j.a,{className:"autocmp"},i.a.createElement(R,null))))),i.a.createElement("hr",{className:"bhr"}),i.a.createElement(d.a,{path:"/",exact:!0,component:S}),i.a.createElement(d.a,{path:"/travel",component:C}),i.a.createElement(d.a,{exact:!0,path:"/travel/:countryId",component:P}),i.a.createElement(d.a,{exact:!0,path:"/travel/:countryId/:cityId",component:N})))))}}]),a}(i.a.Component),H=document.getElementById("root");o.a.render(i.a.createElement(q,null),H)},45:function(e,a,t){}},[[114,1,2]]]);
//# sourceMappingURL=main.045faf8e.chunk.js.map