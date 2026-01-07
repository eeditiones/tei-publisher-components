import{g as e,x as t,i as n,a as s,r,p as o,w as a,c as l,b as c,E as d,m as p,B as h}from"./pb-mixin-B7EAqf7q.js";import{t as u,i as g,g as f}from"./pb-i18n-Dne_FgGK.js";import{t as m,l as b,i as v}from"./pb-dialog-D-mutKSS.js";import{r as y}from"./urls-wlowM_3H.js";import{o as _}from"./unsafe-html-C7vzzZJI.js";import{p as w,o as x,D as k,A,F as S,E as $,T as E,P as O,L as C,a as T,d as I,S as L,b as R,c as j,i as N}from"./focus-mixin-ChIy3j4T.js";import"./es-global-bridge-D8ZcUcx_.js";import"./pb-facsimile.js";function P(e={}){const{endpoint:t=".",apiVersion:i="1.0.0",template:n=null}=e;requestAnimationFrame(()=>{document.dispatchEvent(new CustomEvent("pb-page-ready",{detail:{endpoint:t,apiVersion:i,template:n}}))})}async function D(e){if(!e)return;await e.updateComplete;const t=e.shadowRoot;if(t){if(e.hasAttribute("multi")){const i=Array.isArray(e.values)?e.values:[];t.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.checked=i.includes(e.value)})}else{const i=t.querySelector("select");i&&(i.value=e.value??"")}e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}}function F(e,t){const i=t.dataset.demoOutput||t.getAttribute("data-demo-output");if(i)return e.querySelector(i)||t.querySelector(i);const n=t.parentElement;if(n){const e=n.querySelector("code[id], pre[id], span[id]");if(e)return e}return null}function B(e){e.querySelectorAll("form").forEach(t=>{if(t.dataset.demoWired)return;const i=F(e,t);if(!i)return void(t.dataset.demoWired="skip");const n=()=>{i.textContent=new URLSearchParams(new FormData(t)).toString()};t.addEventListener("submit",e=>{e.preventDefault(),n()}),t.dataset.demoWired="true",n()})}var M,q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},z={exports:{}};function U(){return M||(M=1,function(e){var t=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,n={},s={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++i}),e.__id},clone:function e(t,i){var n,r;switch(i=i||{},s.util.type(t)){case"Object":if(r=s.util.objId(t),i[r])return i[r];for(var o in n={},i[r]=n,t)t.hasOwnProperty(o)&&(n[o]=e(t[o],i));return n;case"Array":return r=s.util.objId(t),i[r]?i[r]:(n=[],i[r]=n,t.forEach(function(t,s){n[s]=e(t,i)}),n);default:return t}},getLanguage:function(e){for(;e;){var i=t.exec(e.className);if(i)return i[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,i){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+i)},currentScript:function(){if("undefined"==typeof document)return null;if(document.currentScript&&"SCRIPT"===document.currentScript.tagName)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var i in t)if(t[i].src==e)return t[i]}return null}},isActive:function(e,t,i){for(var n="no-"+t;e;){var s=e.classList;if(s.contains(t))return!0;if(s.contains(n))return!1;e=e.parentElement}return!!i}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(e,t){var i=s.util.clone(s.languages[e]);for(var n in t)i[n]=t[n];return i},insertBefore:function(e,t,i,n){var r=(n=n||s.languages)[e],o={};for(var a in r)if(r.hasOwnProperty(a)){if(a==t)for(var l in i)i.hasOwnProperty(l)&&(o[l]=i[l]);i.hasOwnProperty(a)||(o[a]=r[a])}var c=n[e];return n[e]=o,s.languages.DFS(s.languages,function(t,i){i===c&&t!=e&&(this[t]=o)}),o},DFS:function e(t,i,n,r){r=r||{};var o=s.util.objId;for(var a in t)if(t.hasOwnProperty(a)){i.call(t,a,t[a],n||a);var l=t[a],c=s.util.type(l);"Object"!==c||r[o(l)]?"Array"!==c||r[o(l)]||(r[o(l)]=!0,e(l,i,a,r)):(r[o(l)]=!0,e(l,i,null,r))}}},plugins:{},highlightAll:function(e,t){s.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,i){var n={callback:i,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),s.hooks.run("before-all-elements-highlight",n);for(var r,o=0;r=n.elements[o++];)s.highlightElement(r,!0===t,n.callback)},highlightElement:function(t,i,n){var r=s.util.getLanguage(t),o=s.languages[r];s.util.setLanguage(t,r);var a=t.parentElement;a&&"pre"===a.nodeName.toLowerCase()&&s.util.setLanguage(a,r);var l={element:t,language:r,grammar:o,code:t.textContent};function c(e){l.highlightedCode=e,s.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,s.hooks.run("after-highlight",l),s.hooks.run("complete",l),n&&n.call(l.element)}if(s.hooks.run("before-sanity-check",l),(a=l.element.parentElement)&&"pre"===a.nodeName.toLowerCase()&&!a.hasAttribute("tabindex")&&a.setAttribute("tabindex","0"),!l.code)return s.hooks.run("complete",l),void(n&&n.call(l.element));if(s.hooks.run("before-highlight",l),l.grammar)if(i&&e.Worker){var d=new Worker(s.filename);d.onmessage=function(e){c(e.data)},d.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else c(s.highlight(l.code,l.grammar,l.language));else c(s.util.encode(l.code))},highlight:function(e,t,i){var n={code:e,grammar:t,language:i};if(s.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=s.tokenize(n.code,n.grammar),s.hooks.run("after-tokenize",n),r.stringify(s.util.encode(n.tokens),n.language)},tokenize:function(e,t){var i=t.rest;if(i){for(var n in i)t[n]=i[n];delete t.rest}var s=new l;return c(s,s.head,e),a(e,s,t,s.head,0),p(s)},hooks:{all:{},add:function(e,t){var i=s.hooks.all;i[e]=i[e]||[],i[e].push(t)},run:function(e,t){var i=s.hooks.all[e];if(i&&i.length)for(var n,r=0;n=i[r++];)n(t)}},Token:r};function r(e,t,i,n){this.type=e,this.content=t,this.alias=i,this.length=0|(n||"").length}function o(e,t,i,n){e.lastIndex=t;var s=e.exec(i);if(s&&n&&s[1]){var r=s[1].length;s.index+=r,s[0]=s[0].slice(r)}return s}function a(e,t,i,n,l,p){for(var h in i)if(i.hasOwnProperty(h)&&i[h]){var u=i[h];u=Array.isArray(u)?u:[u];for(var g=0;g<u.length;++g){if(p&&p.cause==h+","+g)return;var f=u[g],m=f.inside,b=!!f.lookbehind,v=!!f.greedy,y=f.alias;if(v&&!f.pattern.global){var _=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,_+"g")}for(var w=f.pattern||f,x=n.next,k=l;x!==t.tail&&!(p&&k>=p.reach);k+=x.value.length,x=x.next){var A=x.value;if(t.length>e.length)return;if(!(A instanceof r)){var S,$=1;if(v){if(!(S=o(w,k,e,b))||S.index>=e.length)break;var E=S.index,O=S.index+S[0].length,C=k;for(C+=x.value.length;E>=C;)C+=(x=x.next).value.length;if(k=C-=x.value.length,x.value instanceof r)continue;for(var T=x;T!==t.tail&&(C<O||"string"==typeof T.value);T=T.next)$++,C+=T.value.length;$--,A=e.slice(k,C),S.index-=k}else if(!(S=o(w,0,A,b)))continue;E=S.index;var I=S[0],L=A.slice(0,E),R=A.slice(E+I.length),j=k+A.length;p&&j>p.reach&&(p.reach=j);var N=x.prev;if(L&&(N=c(t,N,L),k+=L.length),d(t,N,$),x=c(t,N,new r(h,m?s.tokenize(I,m):I,y,I)),R&&c(t,x,R),$>1){var P={cause:h+","+g,reach:j};a(e,t,i,x.prev,k,P),p&&P.reach>p.reach&&(p.reach=P.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,i){var n=t.next,s={value:i,prev:t,next:n};return t.next=s,n.prev=s,e.length++,s}function d(e,t,i){for(var n=t.next,s=0;s<i&&n!==e.tail;s++)n=n.next;t.next=n,n.prev=t,e.length-=s}function p(e){for(var t=[],i=e.head.next;i!==e.tail;)t.push(i.value),i=i.next;return t}if(e.Prism=s,r.stringify=function e(t,i){if("string"==typeof t)return t;if(Array.isArray(t)){var n="";return t.forEach(function(t){n+=e(t,i)}),n}var r={type:t.type,content:e(t.content,i),tag:"span",classes:["token",t.type],attributes:{},language:i},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(r.classes,o):r.classes.push(o)),s.hooks.run("wrap",r);var a="";for(var l in r.attributes)a+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+a+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(s.disableWorkerMessageHandler||e.addEventListener("message",function(t){var i=JSON.parse(t.data),n=i.language,r=i.code,o=i.immediateClose;e.postMessage(s.highlight(r,s.languages[n],n)),o&&e.close()},!1),s):s;var h=s.util.currentScript();function u(){s.manual||s.highlightAll()}if(h&&(s.filename=h.src,h.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var g=document.readyState;"loading"===g||"interactive"===g&&h&&h.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return s}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==q&&(q.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,i){var n={};n["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[i]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};s["language-"+i]={pattern:/[\s\S]+/,inside:t.languages[i]};var r={};r[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:s},t.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(e,i){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:t.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var i=e.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(void 0!==t&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading…",i=function(e,t){return"✖ Error "+e+" while fetching file: "+t},n="✖ Error: File does not exist or is empty",s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",o="loading",a="loaded",l="failed",c="pre[data-src]:not(["+r+'="'+a+'"]):not(['+r+'="'+o+'"])';t.hooks.add("before-highlightall",function(e){e.selector+=", "+c}),t.hooks.add("before-sanity-check",function(i){var n=i.element;if(n.matches(c)){i.code="",n.setAttribute(r,o);var d=n.appendChild(document.createElement("CODE"));d.textContent=e;var u=n.getAttribute("data-src"),g=i.language;if("none"===g){var f=(/\.(\w+)$/.exec(u)||[,"none"])[1];g=s[f]||f}t.util.setLanguage(d,g),t.util.setLanguage(n,g);var m=t.plugins.autoloader;m&&m.loadLanguages(g),p(u,function(e){n.setAttribute(r,a);var i=h(n.getAttribute("data-range"));if(i){var s=e.split(/\r\n?|\n/g),o=i[0],l=null==i[1]?s.length:i[1];o<0&&(o+=s.length),o=Math.max(0,Math.min(o-1,s.length)),l<0&&(l+=s.length),l=Math.max(0,Math.min(l,s.length)),e=s.slice(o,l).join("\n"),n.hasAttribute("data-start")||n.setAttribute("data-start",String(o+1))}d.textContent=e,t.highlightElement(d)},function(e){n.setAttribute(r,l),d.textContent=e})}}),t.plugins.fileHighlight={highlight:function(e){for(var i,n=(e||document).querySelectorAll(c),s=0;i=n[s++];)t.highlightElement(i)}};var d=!1;t.fileHighlight=function(){d||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),d=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}function p(e,t,s){var r=new XMLHttpRequest;r.open("GET",e,!0),r.onreadystatechange=function(){4==r.readyState&&(r.status<400&&r.responseText?t(r.responseText):r.status>=400?s(i(r.status,r.statusText)):s(n))},r.send(null)}function h(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var i=Number(t[1]),n=t[2],s=t[3];return n?s?[i,Number(s)]:[i,void 0]:[i,i]}}}()}(z)),z.exports}U();var H,V={};function W(){return H||(H=1,function(e){e.languages.xquery=e.languages.extend("markup",{"xquery-comment":{pattern:/\(:[\s\S]*?:\)/,greedy:!0,alias:"comment"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},extension:{pattern:/\(#.+?#\)/,alias:"symbol"},variable:/\$[-\w:]+/,axis:{pattern:/(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,lookbehind:!0,alias:"operator"},"keyword-operator":{pattern:/(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,lookbehind:!0},function:/[\w-]+(?::[\w-]+)*(?=\s*\()/,"xquery-element":{pattern:/(element\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"tag"},"xquery-attribute":{pattern:/(attribute\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"attr-name"},builtin:{pattern:/(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,lookbehind:!0},number:/\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,operator:[/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],punctuation:/[[\](){},;:/]/}),e.languages.xquery.tag.pattern=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,e.languages.xquery.tag.inside["attr-value"].pattern=/=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/,e.languages.xquery.tag.inside["attr-value"].inside.punctuation=/^="|"$/,e.languages.xquery.tag.inside["attr-value"].inside.expression={pattern:/\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,inside:e.languages.xquery,alias:"language-xquery"};var t=function(e){return"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(t).join("")},i=function(n){for(var s=[],r=0;r<n.length;r++){var o=n[r],a=!1;if("string"!=typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?s.length>0&&s[s.length-1].tagName===t(o.content[0].content[1])&&s.pop():"/>"===o.content[o.content.length-1].content||s.push({tagName:t(o.content[0].content[1]),openedBraces:0}):!(s.length>0&&"punctuation"===o.type&&"{"===o.content)||n[r+1]&&"punctuation"===n[r+1].type&&"{"===n[r+1].content||n[r-1]&&"plain-text"===n[r-1].type&&"{"===n[r-1].content?s.length>0&&s[s.length-1].openedBraces>0&&"punctuation"===o.type&&"}"===o.content?s[s.length-1].openedBraces--:"comment"!==o.type&&(a=!0):s[s.length-1].openedBraces++),(a||"string"==typeof o)&&s.length>0&&0===s[s.length-1].openedBraces){var l=t(o);r<n.length-1&&("string"==typeof n[r+1]||"plain-text"===n[r+1].type)&&(l+=t(n[r+1]),n.splice(r+1,1)),r>0&&("string"==typeof n[r-1]||"plain-text"===n[r-1].type)&&(l=t(n[r-1])+l,n.splice(r-1,1),r--),/^\s+$/.test(l)?n[r]=l:n[r]=new e.Token("plain-text",l,null,l)}o.content&&"string"!=typeof o.content&&i(o.content)}};e.hooks.add("after-tokenize",function(e){"xquery"===e.language&&i(e.tokens)})}(Prism)),V}W();var G,Y={exports:{}};function Q(){return G||(G=1,e=Y,function(){if("undefined"!=typeof Prism){var t=Object.assign||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e},i={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};n.prototype={setDefaults:function(e){this.defaults=t(this.defaults,e)},normalize:function(e,i){for(var n in i=t(this.defaults,i)){var r=s(n);"normalize"!==n&&"setDefaults"!==r&&i[n]&&this[r]&&(e=this[r].call(this,e,i[n]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){return t=0|t||4,e.replace(/\t/g,new Array(++t).join(" "))},spacesToTabs:function(e,t){return t=0|t||4,e.replace(RegExp(" {"+t+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);return t&&t[0].length?(t.sort(function(e,t){return e.length-t.length}),t[0].length?e.replace(RegExp("^"+t[0],"gm"),""):e):e},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++t).join("\t")+"$&")},breakLines:function(e,t){t=!0===t?80:0|t||80;for(var i=e.split("\n"),n=0;n<i.length;++n)if(!(r(i[n])<=t)){for(var s=i[n].split(/(\s+)/g),o=0,a=0;a<s.length;++a){var l=r(s[a]);(o+=l)>t&&(s[a]="\n"+s[a],o=l)}i[n]=s.join("")}return i.join("\n")}},e.exports&&(e.exports=n),Prism.plugins.NormalizeWhitespace=new n({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(e){var t=Prism.plugins.NormalizeWhitespace;if((!e.settings||!1!==e.settings["whitespace-normalization"])&&Prism.util.isActive(e.element,"whitespace-normalization",!0))if(e.element&&e.element.parentNode||!e.code){var n=e.element.parentNode;if(e.code&&n&&"pre"===n.nodeName.toLowerCase()){for(var s in null==e.settings&&(e.settings={}),i)if(Object.hasOwnProperty.call(i,s)){var r=i[s];if(n.hasAttribute("data-"+s))try{var o=JSON.parse(n.getAttribute("data-"+s)||"true");typeof o===r&&(e.settings[s]=o)}catch(e){}}for(var a=n.childNodes,l="",c="",d=!1,p=0;p<a.length;++p){var h=a[p];h==e.element?d=!0:"#text"===h.nodeName&&(d?c+=h.nodeValue:l+=h.nodeValue,n.removeChild(h),--p)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var u=l+e.element.innerHTML+c;e.element.innerHTML=t.normalize(u,e.settings),e.code=e.element.textContent}else e.code=l+e.code+c,e.code=t.normalize(e.code,e.settings)}}else e.code=t.normalize(e.code,e.settings)})}function n(e){this.defaults=t({},e)}function s(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function r(e){for(var t=0,i=0;i<e.length;++i)e.charCodeAt(i)=="\t".charCodeAt(0)&&(t+=3);return e.length+t}}()),Y.exports;var e}Q();var K,J={};function Z(){return K||(K=1,function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e="line-numbers",t=/\n(?!$)/g,i=Prism.plugins.lineNumbers={getLine:function(t,i){if("PRE"===t.tagName&&t.classList.contains(e)){var n=t.querySelector(".line-numbers-rows");if(n){var s=parseInt(t.getAttribute("data-start"),10)||1,r=s+(n.children.length-1);i<s&&(i=s),i>r&&(i=r);var o=i-s;return n.children[o]}}},resize:function(e){s([e])},assumeViewportIndependence:!0},n=void 0;window.addEventListener("resize",function(){i.assumeViewportIndependence&&n===window.innerWidth||(n=window.innerWidth,s(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(i){if(i.code){var n=i.element,r=n.parentNode;if(r&&/pre/i.test(r.nodeName)&&!n.querySelector(".line-numbers-rows")&&Prism.util.isActive(n,e)){n.classList.remove(e),r.classList.add(e);var o,a=i.code.match(t),l=a?a.length+1:1,c=new Array(l+1).join("<span></span>");(o=document.createElement("span")).setAttribute("aria-hidden","true"),o.className="line-numbers-rows",o.innerHTML=c,r.hasAttribute("data-start")&&(r.style.counterReset="linenumber "+(parseInt(r.getAttribute("data-start"),10)-1)),i.element.appendChild(o),s([r]),Prism.hooks.run("line-numbers",i)}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0})}function s(e){if(e=e.filter(function(e){var t=r(e)["white-space"];return"pre-wrap"===t||"pre-line"===t}),0!=e.length){var i=e.map(function(e){var i=e.querySelector("code"),n=e.querySelector(".line-numbers-rows");if(i&&n){var s=e.querySelector(".line-numbers-sizer"),r=i.textContent.split(t);s||((s=document.createElement("span")).className="line-numbers-sizer",i.appendChild(s)),s.innerHTML="0",s.style.display="block";var o=s.getBoundingClientRect().height;return s.innerHTML="",{element:e,lines:r,lineHeights:[],oneLinerHeight:o,sizer:s}}}).filter(Boolean);i.forEach(function(e){var t=e.sizer,i=e.lines,n=e.lineHeights,s=e.oneLinerHeight;n[i.length-1]=void 0,i.forEach(function(e,i){if(e&&e.length>1){var r=t.appendChild(document.createElement("span"));r.style.display="block",r.textContent=e}else n[i]=s})}),i.forEach(function(e){for(var t=e.sizer,i=e.lineHeights,n=0,s=0;s<i.length;s++)void 0===i[s]&&(i[s]=t.children[n++].getBoundingClientRect().height)}),i.forEach(function(e){var t=e.sizer,i=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach(function(e,t){i.children[t].style.height=e+"px"})})}}function r(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null}}()),J}Z();const X=new Map;function ee(e){const i="default"===e?"prism.css":`prism-${e}.css`;if(X.has(i))return console.log("Using cached theme: %s",i),X.get(i);const n=new Promise(n=>{let s;try{if(void 0!==import.meta&&import.meta.env&&import.meta.env.DEV||"undefined"!=typeof location&&/localhost|127\.0\.0\.1/.test(location.hostname)){const e=window.location.hostname;s="8080"===window.location.port||e.includes("tei-publisher")?"/exist/apps/tei-publisher/resources/css/prismjs/"+i:r("../css/prismjs/")+i}else s=r("../css/prismjs/")+i}catch(e){s=r("../css/prismjs/")+i}console.log("<pb-code-highlight> loading theme %s from %s",e,s),fetch(s).then(e=>e.text()).catch(()=>n("")).then(e=>{n(t`<style>
            ${e}
          </style>`)})});return X.set(i,n),n}class te extends(m(s)){static get properties(){return{language:{type:String},code:{type:String},theme:{type:String},lineNumbers:{type:Boolean,attribute:"line-numbers"},_themeStyles:{type:String}}}constructor(){super(),this.language="xml",this.theme="default",this.lineNumbers=!1,this._themeStyles=null}connectedCallback(){super.connectedCallback();let t=this.getAttribute("theme");null===t&&(t=e(this,"--pb-code-highlight-theme","default"),this.setAttribute("theme",t))}firstUpdated(){if(super.firstUpdated(),!this.code){const e=this.querySelector("template");this.code=e?Prism.plugins.NormalizeWhitespace.normalize(e.innerHTML):Prism.plugins.NormalizeWhitespace.normalize(this.textContent)}}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"theme"===e)ee(i).then(e=>{this._themeStyles=e})}updated(e){if(super.updated(e),e.has("code")){const e=this.shadowRoot.getElementById("pb-code-highlight");if(null!=e){const t=document.createElement("code");t.textContent=this.code,e.replaceChildren(t)}this.highlight()}}highlight(){Prism.highlightAllUnder(this.shadowRoot)}render(){return this.code?t`
        ${this._themeStyles}
        <pre
          id="pb-code-highlight"
          class="${this.lineNumbers?"line-numbers":""} language-${this.language}"
        ><code>${this.code}</code></pre>
      `:t`<pre class="line-numbers"><code><code></pre>`}static get styles(){return n`
      :host {
        display: block;
      }
      pre[class*='language-'] {
        margin: 0;
      }
      code[class*='language-'] {
        white-space: var(--pb-code-highlight-white-space, pre);
      }
      pre.line-numbers {
        position: relative;
        padding-left: 3.8em;
        counter-reset: linenumber;
      }

      pre.line-numbers > code {
        position: relative;
        white-space: inherit;
      }

      .line-numbers .line-numbers-rows {
        position: absolute;
        pointer-events: none;
        top: 0;
        font-size: 100%;
        left: -3.8em;
        width: 3em; /* works for line-numbers below 1000 lines */
        letter-spacing: -1px;
        border-right: 1px solid #999;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .line-numbers-rows > span {
        pointer-events: none;
        display: block;
        counter-increment: linenumber;
        height: auto !important;
      }

      .line-numbers-rows > span:before {
        content: counter(linenumber);
        color: #999;
        display: block;
        padding-right: 0.8em;
        text-align: right;
      }
    `}}customElements.define("pb-code-highlight",te);const ie="https://teipublisher.com/exist/apps/tei-publisher";class ne extends s{static properties={title:{type:String},code:{type:String},_showCodeLabel:{type:String},_requirePbTify:{type:Boolean}};constructor(){super(),this.title="TEI Publisher Webcomponents Example",this.code="Loading ...",this._showCodeLabel="demo.showCode.show",this._requirePbTify=!1}connectedCallback(){super.connectedCallback(),this._requirePbTify=this.hasAttribute("require-pb-tify");const e=this.querySelector("template");if(!e)return void console.warn("<pb-demo-snippet> no <template> found inside snippet");this.code=ne.removeIndent(e.innerHTML).replace(/\s*<style[\s\S]*?>[\s\S]*?<\/style>\s*/g,"");const t=e.content.cloneNode(!0);this.append(t),queueMicrotask(async()=>{try{if(customElements.get("pb-select")){const e=this.querySelectorAll("pb-select");for(const t of e)try{await D(t)}catch(e){}}}catch(e){}B(this),P({endpoint:".",apiVersion:"1.0.0"})})}render(){const e=this.querySelector("style"),i=e?e.innerText:"",n=ne.indent(this.code.replace(/(endpoint="[^"]+")/,`endpoint="${ie}"`),2),s=`\n@import url('https://fonts.googleapis.com/css?family=Oswald|Roboto&display=swap');\n\nbody {\n  margin: 10px 20px;\n  font-size: 16px;\n  font-family: 'Roboto', 'Noto', sans-serif;\n  line-height: 1.42857;\n  font-weight: 300;\n  color: #333;\n}\n\n${ne.removeIndent(i)}\n`,r=`\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>${this.title}</title>\n    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.4.3/webcomponents-loader.js"><\/script>\n    <script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-components-bundle.js"><\/script>\n    <script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-leaflet-map.js"><\/script>\n  </head>\n  <body>\n${n}\n  </body>\n  ${this._requirePbTify?'<script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-tify.js"><\/script>':""}\n</html>`,o={title:this.title,html:r,html_pre_processor:"none",css:s,css_starter:"normalize",template:!1,editors:110};return t`
      <div class="snippet"><slot></slot></div>
      <pb-code-highlight
        id="source"
        theme="coy"
        language="html"
        line-numbers
        .code=${this.code}
      ></pb-code-highlight>
      <div class="buttons">
        <button class="pretty-button" @click=${this._toggleSource} type="button">
          ${u(this._showCodeLabel)}
        </button>
        <form action="https://codepen.io/pen/define" method="POST" target="_blank">
          <input type="hidden" name="data" .value=${JSON.stringify(o)} />
          <button class="pretty-button" type="submit">${u("demo.editCode.show")}</button>
        </form>
      </div>
    `}_toggleSource(){const e=this.renderRoot.querySelector("#source");e&&(e.classList.contains("open")?(e.classList.remove("open"),this._showCodeLabel="demo.showCode.show"):(e.classList.add("open"),this._showCodeLabel="demo.showCode.hide"))}static removeIndent(e=""){const t=e.match(/^[^\S\n]*(?=\S)/gm);if(!t||!t[0])return e;const i=t.reduce((e,t)=>Math.min(e,t.length),t[0].length);return i?e.replace(new RegExp(`^${" ".repeat(i)}`,"gm"),""):e}static indent(e,t){const i="\t".repeat(t);return e.replace(/^[^\S\n]*(?=\S)/gm,i+"$&")}static styles=n`
    :host {
      display: block;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.12),
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
      padding: 20px;
      background: #fff;
    }

    pb-code-highlight {
      display: none;
      margin-top: 30px;
    }

    pb-code-highlight.open {
      display: block;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      padding-top: 10px;
      border-top: 1px solid var(--google-grey-400, #999);
    }

    .pretty-button {
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      margin: 12px 0;
      padding: 13px 44px;
      border: 2px solid #2196f3;
      background-color: transparent;
      font-size: 14px;
      font-weight: 500;
      color: #2196f3;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      border-radius: 0;
      appearance: none;
    }

    .pretty-button:hover,
    .pretty-button:active {
      background-color: #2196f3;
      color: #fff;
    }

    .pretty-button:disabled {
      background-color: transparent;
      border-color: #999;
      color: #999;
    }
  `}customElements.define("pb-demo-snippet",ne);const se="3.0.0-next-4.6";class re extends s{static get properties(){return Object.assign({version:{type:String,reflect:!0}},super.properties)}constructor(){super(),this.version=se}render(){return t`<span>${this.version?this.version:"unknown"}</span>`}createRenderRoot(){return this}}customElements.define("pb-version",re);var oe="top",ae="bottom",le="right",ce="left",de="auto",pe=[oe,ae,le,ce],he="start",ue="end",ge="clippingParents",fe="viewport",me="popper",be="reference",ve=pe.reduce(function(e,t){return e.concat([t+"-"+he,t+"-"+ue])},[]),ye=[].concat(pe,[de]).reduce(function(e,t){return e.concat([t,t+"-"+he,t+"-"+ue])},[]),_e=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function we(e){return e?(e.nodeName||"").toLowerCase():null}function xe(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ke(e){return e instanceof xe(e).Element||e instanceof Element}function Ae(e){return e instanceof xe(e).HTMLElement||e instanceof HTMLElement}function Se(e){return"undefined"!=typeof ShadowRoot&&(e instanceof xe(e).ShadowRoot||e instanceof ShadowRoot)}function $e(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var i=t.styles[e]||{},n=t.attributes[e]||{},s=t.elements[e];Ae(s)&&we(s)&&(Object.assign(s.style,i),Object.keys(n).forEach(function(e){var t=n[e];!1===t?s.removeAttribute(e):s.setAttribute(e,!0===t?"":t)}))})}function Ee(e){var t=e.state,i={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,i.popper),t.styles=i,t.elements.arrow&&Object.assign(t.elements.arrow.style,i.arrow),function(){Object.keys(t.elements).forEach(function(e){var n=t.elements[e],s=t.attributes[e]||{},r=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:i[e]).reduce(function(e,t){return e[t]="",e},{});Ae(n)&&we(n)&&(Object.assign(n.style,r),Object.keys(s).forEach(function(e){n.removeAttribute(e)}))})}}var Oe={name:"applyStyles",enabled:!0,phase:"write",fn:$e,effect:Ee,requires:["computeStyles"]};function Ce(e){return e.split("-")[0]}var Te=Math.max,Ie=Math.min,Le=Math.round;function Re(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function je(){return!/^((?!chrome|android).)*safari/i.test(Re())}function Ne(e,t,i){void 0===t&&(t=!1),void 0===i&&(i=!1);var n=e.getBoundingClientRect(),s=1,r=1;t&&Ae(e)&&(s=e.offsetWidth>0&&Le(n.width)/e.offsetWidth||1,r=e.offsetHeight>0&&Le(n.height)/e.offsetHeight||1);var o=(ke(e)?xe(e):window).visualViewport,a=!je()&&i,l=(n.left+(a&&o?o.offsetLeft:0))/s,c=(n.top+(a&&o?o.offsetTop:0))/r,d=n.width/s,p=n.height/r;return{width:d,height:p,top:c,right:l+d,bottom:c+p,left:l,x:l,y:c}}function Pe(e){var t=Ne(e),i=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-i)<=1&&(i=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:i,height:n}}function De(e,t){var i=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(i&&Se(i)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Fe(e){return xe(e).getComputedStyle(e)}function Be(e){return["table","td","th"].indexOf(we(e))>=0}function Me(e){return((ke(e)?e.ownerDocument:e.document)||window.document).documentElement}function qe(e){return"html"===we(e)?e:e.assignedSlot||e.parentNode||(Se(e)?e.host:null)||Me(e)}function ze(e){return Ae(e)&&"fixed"!==Fe(e).position?e.offsetParent:null}function Ue(e){var t=/firefox/i.test(Re());if(/Trident/i.test(Re())&&Ae(e)&&"fixed"===Fe(e).position)return null;var i=qe(e);for(Se(i)&&(i=i.host);Ae(i)&&["html","body"].indexOf(we(i))<0;){var n=Fe(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}function He(e){for(var t=xe(e),i=ze(e);i&&Be(i)&&"static"===Fe(i).position;)i=ze(i);return i&&("html"===we(i)||"body"===we(i)&&"static"===Fe(i).position)?t:i||Ue(e)||t}function Ve(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function We(e,t,i){return Te(e,Ie(t,i))}function Ge(e,t,i){var n=We(e,t,i);return n>i?i:n}function Ye(){return{top:0,right:0,bottom:0,left:0}}function Qe(e){return Object.assign({},Ye(),e)}function Ke(e,t){return t.reduce(function(t,i){return t[i]=e,t},{})}var Je=function(e,t){return Qe("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Ke(e,pe))};function Ze(e){var t,i=e.state,n=e.name,s=e.options,r=i.elements.arrow,o=i.modifiersData.popperOffsets,a=Ce(i.placement),l=Ve(a),c=[ce,le].indexOf(a)>=0?"height":"width";if(r&&o){var d=Je(s.padding,i),p=Pe(r),h="y"===l?oe:ce,u="y"===l?ae:le,g=i.rects.reference[c]+i.rects.reference[l]-o[l]-i.rects.popper[c],f=o[l]-i.rects.reference[l],m=He(r),b=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,v=g/2-f/2,y=d[h],_=b-p[c]-d[u],w=b/2-p[c]/2+v,x=We(y,w,_),k=l;i.modifiersData[n]=((t={})[k]=x,t.centerOffset=x-w,t)}}function Xe(e){var t=e.state,i=e.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&De(t.elements.popper,n)&&(t.elements.arrow=n)}function et(e){return e.split("-")[1]}var tt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function it(e,t){var i=e.x,n=e.y,s=t.devicePixelRatio||1;return{x:Le(i*s)/s||0,y:Le(n*s)/s||0}}function nt(e){var t,i=e.popper,n=e.popperRect,s=e.placement,r=e.variation,o=e.offsets,a=e.position,l=e.gpuAcceleration,c=e.adaptive,d=e.roundOffsets,p=e.isFixed,h=o.x,u=void 0===h?0:h,g=o.y,f=void 0===g?0:g,m="function"==typeof d?d({x:u,y:f}):{x:u,y:f};u=m.x,f=m.y;var b=o.hasOwnProperty("x"),v=o.hasOwnProperty("y"),y=ce,_=oe,w=window;if(c){var x=He(i),k="clientHeight",A="clientWidth";if(x===xe(i)&&"static"!==Fe(x=Me(i)).position&&"absolute"===a&&(k="scrollHeight",A="scrollWidth"),s===oe||(s===ce||s===le)&&r===ue)_=ae,f-=(p&&x===w&&w.visualViewport?w.visualViewport.height:x[k])-n.height,f*=l?1:-1;if(s===ce||(s===oe||s===ae)&&r===ue)y=le,u-=(p&&x===w&&w.visualViewport?w.visualViewport.width:x[A])-n.width,u*=l?1:-1}var S,$=Object.assign({position:a},c&&tt),E=!0===d?it({x:u,y:f},xe(i)):{x:u,y:f};return u=E.x,f=E.y,l?Object.assign({},$,((S={})[_]=v?"0":"",S[y]=b?"0":"",S.transform=(w.devicePixelRatio||1)<=1?"translate("+u+"px, "+f+"px)":"translate3d("+u+"px, "+f+"px, 0)",S)):Object.assign({},$,((t={})[_]=v?f+"px":"",t[y]=b?u+"px":"",t.transform="",t))}function st(e){var t=e.state,i=e.options,n=i.gpuAcceleration,s=void 0===n||n,r=i.adaptive,o=void 0===r||r,a=i.roundOffsets,l=void 0===a||a,c={placement:Ce(t.placement),variation:et(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,nt(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,nt(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var rt={passive:!0};function ot(e){var t=e.state,i=e.instance,n=e.options,s=n.scroll,r=void 0===s||s,o=n.resize,a=void 0===o||o,l=xe(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&c.forEach(function(e){e.addEventListener("scroll",i.update,rt)}),a&&l.addEventListener("resize",i.update,rt),function(){r&&c.forEach(function(e){e.removeEventListener("scroll",i.update,rt)}),a&&l.removeEventListener("resize",i.update,rt)}}var at={left:"right",right:"left",bottom:"top",top:"bottom"};function lt(e){return e.replace(/left|right|bottom|top/g,function(e){return at[e]})}var ct={start:"end",end:"start"};function dt(e){return e.replace(/start|end/g,function(e){return ct[e]})}function pt(e){var t=xe(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ht(e){return Ne(Me(e)).left+pt(e).scrollLeft}function ut(e,t){var i=xe(e),n=Me(e),s=i.visualViewport,r=n.clientWidth,o=n.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;var c=je();(c||!c&&"fixed"===t)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:o,x:a+ht(e),y:l}}function gt(e){var t,i=Me(e),n=pt(e),s=null==(t=e.ownerDocument)?void 0:t.body,r=Te(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=Te(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+ht(e),l=-n.scrollTop;return"rtl"===Fe(s||i).direction&&(a+=Te(i.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function ft(e){var t=Fe(e),i=t.overflow,n=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function mt(e){return["html","body","#document"].indexOf(we(e))>=0?e.ownerDocument.body:Ae(e)&&ft(e)?e:mt(qe(e))}function bt(e,t){var i;void 0===t&&(t=[]);var n=mt(e),s=n===(null==(i=e.ownerDocument)?void 0:i.body),r=xe(n),o=s?[r].concat(r.visualViewport||[],ft(n)?n:[]):n,a=t.concat(o);return s?a:a.concat(bt(qe(o)))}function vt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function yt(e,t){var i=Ne(e,!1,"fixed"===t);return i.top=i.top+e.clientTop,i.left=i.left+e.clientLeft,i.bottom=i.top+e.clientHeight,i.right=i.left+e.clientWidth,i.width=e.clientWidth,i.height=e.clientHeight,i.x=i.left,i.y=i.top,i}function _t(e,t,i){return t===fe?vt(ut(e,i)):ke(t)?yt(t,i):vt(gt(Me(e)))}function wt(e){var t=bt(qe(e)),i=["absolute","fixed"].indexOf(Fe(e).position)>=0&&Ae(e)?He(e):e;return ke(i)?t.filter(function(e){return ke(e)&&De(e,i)&&"body"!==we(e)}):[]}function xt(e,t,i,n){var s="clippingParents"===t?wt(e):[].concat(t),r=[].concat(s,[i]),o=r[0],a=r.reduce(function(t,i){var s=_t(e,i,n);return t.top=Te(s.top,t.top),t.right=Ie(s.right,t.right),t.bottom=Ie(s.bottom,t.bottom),t.left=Te(s.left,t.left),t},_t(e,o,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function kt(e){var t,i=e.reference,n=e.element,s=e.placement,r=s?Ce(s):null,o=s?et(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(r){case oe:t={x:a,y:i.y-n.height};break;case ae:t={x:a,y:i.y+i.height};break;case le:t={x:i.x+i.width,y:l};break;case ce:t={x:i.x-n.width,y:l};break;default:t={x:i.x,y:i.y}}var c=r?Ve(r):null;if(null!=c){var d="y"===c?"height":"width";switch(o){case he:t[c]=t[c]-(i[d]/2-n[d]/2);break;case ue:t[c]=t[c]+(i[d]/2-n[d]/2)}}return t}function At(e,t){void 0===t&&(t={});var i=t,n=i.placement,s=void 0===n?e.placement:n,r=i.strategy,o=void 0===r?e.strategy:r,a=i.boundary,l=void 0===a?ge:a,c=i.rootBoundary,d=void 0===c?fe:c,p=i.elementContext,h=void 0===p?me:p,u=i.altBoundary,g=void 0!==u&&u,f=i.padding,m=void 0===f?0:f,b=Qe("number"!=typeof m?m:Ke(m,pe)),v=h===me?be:me,y=e.rects.popper,_=e.elements[g?v:h],w=xt(ke(_)?_:_.contextElement||Me(e.elements.popper),l,d,o),x=Ne(e.elements.reference),k=kt({reference:x,element:y,placement:s}),A=vt(Object.assign({},y,k)),S=h===me?A:x,$={top:w.top-S.top+b.top,bottom:S.bottom-w.bottom+b.bottom,left:w.left-S.left+b.left,right:S.right-w.right+b.right},E=e.modifiersData.offset;if(h===me&&E){var O=E[s];Object.keys($).forEach(function(e){var t=[le,ae].indexOf(e)>=0?1:-1,i=[oe,ae].indexOf(e)>=0?"y":"x";$[e]+=O[i]*t})}return $}function St(e,t){void 0===t&&(t={});var i=t,n=i.placement,s=i.boundary,r=i.rootBoundary,o=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?ye:l,d=et(n),p=d?a?ve:ve.filter(function(e){return et(e)===d}):pe,h=p.filter(function(e){return c.indexOf(e)>=0});0===h.length&&(h=p);var u=h.reduce(function(t,i){return t[i]=At(e,{placement:i,boundary:s,rootBoundary:r,padding:o})[Ce(i)],t},{});return Object.keys(u).sort(function(e,t){return u[e]-u[t]})}function $t(e){if(Ce(e)===de)return[];var t=lt(e);return[dt(e),t,dt(t)]}function Et(e){var t=e.state,i=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var s=i.mainAxis,r=void 0===s||s,o=i.altAxis,a=void 0===o||o,l=i.fallbackPlacements,c=i.padding,d=i.boundary,p=i.rootBoundary,h=i.altBoundary,u=i.flipVariations,g=void 0===u||u,f=i.allowedAutoPlacements,m=t.options.placement,b=Ce(m),v=l||(b===m||!g?[lt(m)]:$t(m)),y=[m].concat(v).reduce(function(e,i){return e.concat(Ce(i)===de?St(t,{placement:i,boundary:d,rootBoundary:p,padding:c,flipVariations:g,allowedAutoPlacements:f}):i)},[]),_=t.rects.reference,w=t.rects.popper,x=new Map,k=!0,A=y[0],S=0;S<y.length;S++){var $=y[S],E=Ce($),O=et($)===he,C=[oe,ae].indexOf(E)>=0,T=C?"width":"height",I=At(t,{placement:$,boundary:d,rootBoundary:p,altBoundary:h,padding:c}),L=C?O?le:ce:O?ae:oe;_[T]>w[T]&&(L=lt(L));var R=lt(L),j=[];if(r&&j.push(I[E]<=0),a&&j.push(I[L]<=0,I[R]<=0),j.every(function(e){return e})){A=$,k=!1;break}x.set($,j)}if(k)for(var N=function(e){var t=y.find(function(t){var i=x.get(t);if(i)return i.slice(0,e).every(function(e){return e})});if(t)return A=t,"break"},P=g?3:1;P>0;P--){if("break"===N(P))break}t.placement!==A&&(t.modifiersData[n]._skip=!0,t.placement=A,t.reset=!0)}}function Ot(e,t,i){return void 0===i&&(i={x:0,y:0}),{top:e.top-t.height-i.y,right:e.right-t.width+i.x,bottom:e.bottom-t.height+i.y,left:e.left-t.width-i.x}}function Ct(e){return[oe,le,ae,ce].some(function(t){return e[t]>=0})}function Tt(e){var t=e.state,i=e.name,n=t.rects.reference,s=t.rects.popper,r=t.modifiersData.preventOverflow,o=At(t,{elementContext:"reference"}),a=At(t,{altBoundary:!0}),l=Ot(o,n),c=Ot(a,s,r),d=Ct(l),p=Ct(c);t.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":p})}function It(e,t,i){var n=Ce(e),s=[ce,oe].indexOf(n)>=0?-1:1,r="function"==typeof i?i(Object.assign({},t,{placement:e})):i,o=r[0],a=r[1];return o=o||0,a=(a||0)*s,[ce,le].indexOf(n)>=0?{x:a,y:o}:{x:o,y:a}}function Lt(e){var t=e.state,i=e.options,n=e.name,s=i.offset,r=void 0===s?[0,0]:s,o=ye.reduce(function(e,i){return e[i]=It(i,t.rects,r),e},{}),a=o[t.placement],l=a.x,c=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=o}function Rt(e){var t=e.state,i=e.name;t.modifiersData[i]=kt({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}function jt(e){return"x"===e?"y":"x"}function Nt(e){var t=e.state,i=e.options,n=e.name,s=i.mainAxis,r=void 0===s||s,o=i.altAxis,a=void 0!==o&&o,l=i.boundary,c=i.rootBoundary,d=i.altBoundary,p=i.padding,h=i.tether,u=void 0===h||h,g=i.tetherOffset,f=void 0===g?0:g,m=At(t,{boundary:l,rootBoundary:c,padding:p,altBoundary:d}),b=Ce(t.placement),v=et(t.placement),y=!v,_=Ve(b),w=jt(_),x=t.modifiersData.popperOffsets,k=t.rects.reference,A=t.rects.popper,S="function"==typeof f?f(Object.assign({},t.rects,{placement:t.placement})):f,$="number"==typeof S?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),E=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,O={x:0,y:0};if(x){if(r){var C,T="y"===_?oe:ce,I="y"===_?ae:le,L="y"===_?"height":"width",R=x[_],j=R+m[T],N=R-m[I],P=u?-A[L]/2:0,D=v===he?k[L]:A[L],F=v===he?-A[L]:-k[L],B=t.elements.arrow,M=u&&B?Pe(B):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ye(),z=q[T],U=q[I],H=We(0,k[L],M[L]),V=y?k[L]/2-P-H-z-$.mainAxis:D-H-z-$.mainAxis,W=y?-k[L]/2+P+H+U+$.mainAxis:F+H+U+$.mainAxis,G=t.elements.arrow&&He(t.elements.arrow),Y=G?"y"===_?G.clientTop||0:G.clientLeft||0:0,Q=null!=(C=null==E?void 0:E[_])?C:0,K=R+W-Q,J=We(u?Ie(j,R+V-Q-Y):j,R,u?Te(N,K):N);x[_]=J,O[_]=J-R}if(a){var Z,X="x"===_?oe:ce,ee="x"===_?ae:le,te=x[w],ie="y"===w?"height":"width",ne=te+m[X],se=te-m[ee],re=-1!==[oe,ce].indexOf(b),de=null!=(Z=null==E?void 0:E[w])?Z:0,pe=re?ne:te-k[ie]-A[ie]-de+$.altAxis,ue=re?te+k[ie]+A[ie]-de-$.altAxis:se,ge=u&&re?Ge(pe,te,ue):We(u?pe:ne,te,u?ue:se);x[w]=ge,O[w]=ge-te}t.modifiersData[n]=O}}function Pt(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Dt(e){return e!==xe(e)&&Ae(e)?Pt(e):pt(e)}function Ft(e){var t=e.getBoundingClientRect(),i=Le(t.width)/e.offsetWidth||1,n=Le(t.height)/e.offsetHeight||1;return 1!==i||1!==n}function Bt(e,t,i){void 0===i&&(i=!1);var n=Ae(t),s=Ae(t)&&Ft(t),r=Me(t),o=Ne(e,s,i),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!i)&&(("body"!==we(t)||ft(r))&&(a=Dt(t)),Ae(t)?((l=Ne(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):r&&(l.x=ht(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function Mt(e){var t=new Map,i=new Set,n=[];function s(e){i.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!i.has(e)){var n=t.get(e);n&&s(n)}}),n.push(e)}return e.forEach(function(e){t.set(e.name,e)}),e.forEach(function(e){i.has(e.name)||s(e)}),n}function qt(e){var t=Mt(e);return _e.reduce(function(e,i){return e.concat(t.filter(function(e){return e.phase===i}))},[])}function zt(e){var t;return function(){return t||(t=new Promise(function(i){Promise.resolve().then(function(){t=void 0,i(e())})})),t}}function Ut(e){var t=e.reduce(function(e,t){var i=e[t.name];return e[t.name]=i?Object.assign({},i,t,{options:Object.assign({},i.options,t.options),data:Object.assign({},i.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}var Ht={placement:"bottom",modifiers:[],strategy:"absolute"};function Vt(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}function Wt(e){void 0===e&&(e={});var t=e,i=t.defaultModifiers,n=void 0===i?[]:i,s=t.defaultOptions,r=void 0===s?Ht:s;return function(e,t,i){void 0===i&&(i=r);var s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ht,r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,l={state:s,setOptions:function(i){var o="function"==typeof i?i(s.options):i;d(),s.options=Object.assign({},r,s.options,o),s.scrollParents={reference:ke(e)?bt(e):e.contextElement?bt(e.contextElement):[],popper:bt(t)};var a=qt(Ut([].concat(n,s.options.modifiers)));return s.orderedModifiers=a.filter(function(e){return e.enabled}),c(),l.update()},forceUpdate:function(){if(!a){var e=s.elements,t=e.reference,i=e.popper;if(Vt(t,i)){s.rects={reference:Bt(t,He(i),"fixed"===s.options.strategy),popper:Pe(i)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var r=s.orderedModifiers[n],o=r.fn,c=r.options,d=void 0===c?{}:c,p=r.name;"function"==typeof o&&(s=o({state:s,options:d,name:p,instance:l})||s)}else s.reset=!1,n=-1}}},update:zt(function(){return new Promise(function(e){l.forceUpdate(),e(s)})}),destroy:function(){d(),a=!0}};if(!Vt(e,t))return l;function c(){s.orderedModifiers.forEach(function(e){var t=e.name,i=e.options,n=void 0===i?{}:i,r=e.effect;if("function"==typeof r){var a=r({state:s,name:t,instance:l,options:n}),c=function(){};o.push(a||c)}})}function d(){o.forEach(function(e){return e()}),o=[]}return l.setOptions(i).then(function(e){!a&&i.onFirstUpdate&&i.onFirstUpdate(e)}),l}}var Gt=Wt({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ot,data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:Rt,data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:st,data:{}},Oe,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Lt},{name:"flip",enabled:!0,phase:"main",fn:Et,requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:Nt,requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:Ze,effect:Xe,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Tt}]}),Yt="tippy-box",Qt="tippy-content",Kt="tippy-backdrop",Jt="tippy-arrow",Zt="tippy-svg-arrow",Xt={passive:!0,capture:!0},ei=function(){return document.body};function ti(e,t,i){if(Array.isArray(e)){var n=e[t];return n??(Array.isArray(i)?i[t]:i)}return e}function ii(e,t){var i={}.toString.call(e);return 0===i.indexOf("[object")&&i.indexOf(t+"]")>-1}function ni(e,t){return"function"==typeof e?e.apply(void 0,t):e}function si(e,t){return 0===t?e:function(n){clearTimeout(i),i=setTimeout(function(){e(n)},t)};var i}function ri(e){return e.split(/\s+/).filter(Boolean)}function oi(e){return[].concat(e)}function ai(e,t){-1===e.indexOf(t)&&e.push(t)}function li(e){return e.filter(function(t,i){return e.indexOf(t)===i})}function ci(e){return e.split("-")[0]}function di(e){return[].slice.call(e)}function pi(e){return Object.keys(e).reduce(function(t,i){return void 0!==e[i]&&(t[i]=e[i]),t},{})}function hi(){return document.createElement("div")}function ui(e){return["Element","Fragment"].some(function(t){return ii(e,t)})}function gi(e){return ii(e,"NodeList")}function fi(e){return ii(e,"MouseEvent")}function mi(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function bi(e){return ui(e)?[e]:gi(e)?di(e):Array.isArray(e)?e:di(document.querySelectorAll(e))}function vi(e,t){e.forEach(function(e){e&&(e.style.transitionDuration=t+"ms")})}function yi(e,t){e.forEach(function(e){e&&e.setAttribute("data-state",t)})}function _i(e){var t,i=oi(e)[0];return null!=i&&null!=(t=i.ownerDocument)&&t.body?i.ownerDocument:document}function wi(e,t){var i=t.clientX,n=t.clientY;return e.every(function(e){var t=e.popperRect,s=e.popperState,r=e.props.interactiveBorder,o=ci(s.placement),a=s.modifiersData.offset;if(!a)return!0;var l="bottom"===o?a.top.y:0,c="top"===o?a.bottom.y:0,d="right"===o?a.left.x:0,p="left"===o?a.right.x:0,h=t.top-n+l>r,u=n-t.bottom-c>r,g=t.left-i+d>r,f=i-t.right-p>r;return h||u||g||f})}function xi(e,t,i){var n=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(t){e[n](t,i)})}function ki(e,t){for(var i=t;i;){var n;if(e.contains(i))return!0;i=null==i.getRootNode||null==(n=i.getRootNode())?void 0:n.host}return!1}var Ai={isTouch:!1},Si=0;function $i(){Ai.isTouch||(Ai.isTouch=!0,window.performance&&document.addEventListener("mousemove",Ei))}function Ei(){var e=performance.now();e-Si<20&&(Ai.isTouch=!1,document.removeEventListener("mousemove",Ei)),Si=e}function Oi(){var e=document.activeElement;if(mi(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function Ci(){document.addEventListener("touchstart",$i,Xt),window.addEventListener("blur",Oi)}var Ti=!!("undefined"!=typeof window&&"undefined"!=typeof document)&&!!window.msCrypto,Ii={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Li={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},Ri=Object.assign({appendTo:ei,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Ii,Li),ji=Object.keys(Ri),Ni=function(e){Object.keys(e).forEach(function(t){Ri[t]=e[t]})};function Pi(e){var t=(e.plugins||[]).reduce(function(t,i){var n,s=i.name,r=i.defaultValue;s&&(t[s]=void 0!==e[s]?e[s]:null!=(n=Ri[s])?n:r);return t},{});return Object.assign({},e,t)}function Di(e,t){var i=(t?Object.keys(Pi(Object.assign({},Ri,{plugins:t}))):ji).reduce(function(t,i){var n=(e.getAttribute("data-tippy-"+i)||"").trim();if(!n)return t;if("content"===i)t[i]=n;else try{t[i]=JSON.parse(n)}catch(e){t[i]=n}return t},{});return i}function Fi(e,t){var i=Object.assign({},t,{content:ni(t.content,[e])},t.ignoreAttributes?{}:Di(e,t.plugins));return i.aria=Object.assign({},Ri.aria,i.aria),i.aria={expanded:"auto"===i.aria.expanded?t.interactive:i.aria.expanded,content:"auto"===i.aria.content?t.interactive?null:"describedby":i.aria.content},i}var Bi=function(){return"innerHTML"};function Mi(e,t){e[Bi()]=t}function qi(e){var t=hi();return!0===e?t.className=Jt:(t.className=Zt,ui(e)?t.appendChild(e):Mi(t,e)),t}function zi(e,t){ui(t.content)?(Mi(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?Mi(e,t.content):e.textContent=t.content)}function Ui(e){var t=e.firstElementChild,i=di(t.children);return{box:t,content:i.find(function(e){return e.classList.contains(Qt)}),arrow:i.find(function(e){return e.classList.contains(Jt)||e.classList.contains(Zt)}),backdrop:i.find(function(e){return e.classList.contains(Kt)})}}function Hi(e){var t=hi(),i=hi();i.className=Yt,i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var n=hi();function s(i,n){var s=Ui(t),r=s.box,o=s.content,a=s.arrow;n.theme?r.setAttribute("data-theme",n.theme):r.removeAttribute("data-theme"),"string"==typeof n.animation?r.setAttribute("data-animation",n.animation):r.removeAttribute("data-animation"),n.inertia?r.setAttribute("data-inertia",""):r.removeAttribute("data-inertia"),r.style.maxWidth="number"==typeof n.maxWidth?n.maxWidth+"px":n.maxWidth,n.role?r.setAttribute("role",n.role):r.removeAttribute("role"),i.content===n.content&&i.allowHTML===n.allowHTML||zi(o,e.props),n.arrow?a?i.arrow!==n.arrow&&(r.removeChild(a),r.appendChild(qi(n.arrow))):r.appendChild(qi(n.arrow)):a&&r.removeChild(a)}return n.className=Qt,n.setAttribute("data-state","hidden"),zi(n,e.props),t.appendChild(i),i.appendChild(n),s(e.props,e.props),{popper:t,onUpdate:s}}Hi.$$tippy=!0;var Vi=1,Wi=[],Gi=[];function Yi(e,t){var i,n,s,r,o,a,l,c=Fi(e,Object.assign({},Ri,Pi(pi(t)))),d=!1,p=!1,h=!1,u=!1,g=[],f=si(K,c.interactiveDebounce),m=Vi++,b=null,v=li(c.plugins),y={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},_={id:m,reference:e,popper:hi(),popperInstance:b,props:c,state:y,plugins:v,clearDelayTimeouts:le,setProps:ce,setContent:de,show:pe,hide:he,hideWithInteractivity:ue,enable:oe,disable:ae,unmount:ge,destroy:fe};if(!c.render)return _;var w=c.render(_),x=w.popper,k=w.onUpdate;x.setAttribute("data-tippy-root",""),x.id="tippy-"+_.id,_.popper=x,e._tippy=_,x._tippy=_;var A=v.map(function(e){return e.fn(_)}),S=e.hasAttribute("aria-expanded");return G(),P(),R(),j("onCreate",[_]),c.showOnCreate&&se(),x.addEventListener("mouseenter",function(){_.props.interactive&&_.state.isVisible&&_.clearDelayTimeouts()}),x.addEventListener("mouseleave",function(){_.props.interactive&&_.props.trigger.indexOf("mouseenter")>=0&&T().addEventListener("mousemove",f)}),_;function $(){var e=_.props.touch;return Array.isArray(e)?e:[e,0]}function E(){return"hold"===$()[0]}function O(){var e;return!(null==(e=_.props.render)||!e.$$tippy)}function C(){return l||e}function T(){var e=C().parentNode;return e?_i(e):document}function I(){return Ui(x)}function L(e){return _.state.isMounted&&!_.state.isVisible||Ai.isTouch||r&&"focus"===r.type?0:ti(_.props.delay,e?0:1,Ri.delay)}function R(e){void 0===e&&(e=!1),x.style.pointerEvents=_.props.interactive&&!e?"":"none",x.style.zIndex=""+_.props.zIndex}function j(e,t,i){var n;(void 0===i&&(i=!0),A.forEach(function(i){i[e]&&i[e].apply(i,t)}),i)&&(n=_.props)[e].apply(n,t)}function N(){var t=_.props.aria;if(t.content){var i="aria-"+t.content,n=x.id;oi(_.props.triggerTarget||e).forEach(function(e){var t=e.getAttribute(i);if(_.state.isVisible)e.setAttribute(i,t?t+" "+n:n);else{var s=t&&t.replace(n,"").trim();s?e.setAttribute(i,s):e.removeAttribute(i)}})}}function P(){!S&&_.props.aria.expanded&&oi(_.props.triggerTarget||e).forEach(function(e){_.props.interactive?e.setAttribute("aria-expanded",_.state.isVisible&&e===C()?"true":"false"):e.removeAttribute("aria-expanded")})}function D(){T().removeEventListener("mousemove",f),Wi=Wi.filter(function(e){return e!==f})}function F(t){if(!Ai.isTouch||!h&&"mousedown"!==t.type){var i=t.composedPath&&t.composedPath()[0]||t.target;if(!_.props.interactive||!ki(x,i)){if(oi(_.props.triggerTarget||e).some(function(e){return ki(e,i)})){if(Ai.isTouch)return;if(_.state.isVisible&&_.props.trigger.indexOf("click")>=0)return}else j("onClickOutside",[_,t]);!0===_.props.hideOnClick&&(_.clearDelayTimeouts(),_.hide(),p=!0,setTimeout(function(){p=!1}),_.state.isMounted||z())}}}function B(){h=!0}function M(){h=!1}function q(){var e=T();e.addEventListener("mousedown",F,!0),e.addEventListener("touchend",F,Xt),e.addEventListener("touchstart",M,Xt),e.addEventListener("touchmove",B,Xt)}function z(){var e=T();e.removeEventListener("mousedown",F,!0),e.removeEventListener("touchend",F,Xt),e.removeEventListener("touchstart",M,Xt),e.removeEventListener("touchmove",B,Xt)}function U(e,t){V(e,function(){!_.state.isVisible&&x.parentNode&&x.parentNode.contains(x)&&t()})}function H(e,t){V(e,t)}function V(e,t){var i=I().box;function n(e){e.target===i&&(xi(i,"remove",n),t())}if(0===e)return t();xi(i,"remove",o),xi(i,"add",n),o=n}function W(t,i,n){void 0===n&&(n=!1),oi(_.props.triggerTarget||e).forEach(function(e){e.addEventListener(t,i,n),g.push({node:e,eventType:t,handler:i,options:n})})}function G(){E()&&(W("touchstart",Q,{passive:!0}),W("touchend",J,{passive:!0})),ri(_.props.trigger).forEach(function(e){if("manual"!==e)switch(W(e,Q),e){case"mouseenter":W("mouseleave",J);break;case"focus":W(Ti?"focusout":"blur",Z);break;case"focusin":W("focusout",Z)}})}function Y(){g.forEach(function(e){var t=e.node,i=e.eventType,n=e.handler,s=e.options;t.removeEventListener(i,n,s)}),g=[]}function Q(e){var t,i=!1;if(_.state.isEnabled&&!X(e)&&!p){var n="focus"===(null==(t=r)?void 0:t.type);r=e,l=e.currentTarget,P(),!_.state.isVisible&&fi(e)&&Wi.forEach(function(t){return t(e)}),"click"===e.type&&(_.props.trigger.indexOf("mouseenter")<0||d)&&!1!==_.props.hideOnClick&&_.state.isVisible?i=!0:se(e),"click"===e.type&&(d=!i),i&&!n&&re(e)}}function K(e){var t=e.target,i=C().contains(t)||x.contains(t);if("mousemove"!==e.type||!i){var n=ne().concat(x).map(function(e){var t,i=null==(t=e._tippy.popperInstance)?void 0:t.state;return i?{popperRect:e.getBoundingClientRect(),popperState:i,props:c}:null}).filter(Boolean);wi(n,e)&&(D(),re(e))}}function J(e){X(e)||_.props.trigger.indexOf("click")>=0&&d||(_.props.interactive?_.hideWithInteractivity(e):re(e))}function Z(e){_.props.trigger.indexOf("focusin")<0&&e.target!==C()||_.props.interactive&&e.relatedTarget&&x.contains(e.relatedTarget)||re(e)}function X(e){return!!Ai.isTouch&&E()!==e.type.indexOf("touch")>=0}function ee(){te();var t=_.props,i=t.popperOptions,n=t.placement,s=t.offset,r=t.getReferenceClientRect,o=t.moveTransition,l=O()?Ui(x).arrow:null,c=r?{getBoundingClientRect:r,contextElement:r.contextElement||C()}:e,d={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(O()){var i=I().box;["placement","reference-hidden","escaped"].forEach(function(e){"placement"===e?i.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?i.setAttribute("data-"+e,""):i.removeAttribute("data-"+e)}),t.attributes.popper={}}}},p=[{name:"offset",options:{offset:s}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!o}},d];O()&&l&&p.push({name:"arrow",options:{element:l,padding:3}}),p.push.apply(p,(null==i?void 0:i.modifiers)||[]),_.popperInstance=Gt(c,x,Object.assign({},i,{placement:n,onFirstUpdate:a,modifiers:p}))}function te(){_.popperInstance&&(_.popperInstance.destroy(),_.popperInstance=null)}function ie(){var e,t=_.props.appendTo,i=C();(e=_.props.interactive&&t===ei||"parent"===t?i.parentNode:ni(t,[i])).contains(x)||e.appendChild(x),_.state.isMounted=!0,ee()}function ne(){return di(x.querySelectorAll("[data-tippy-root]"))}function se(e){_.clearDelayTimeouts(),e&&j("onTrigger",[_,e]),q();var t=L(!0),n=$(),s=n[0],r=n[1];Ai.isTouch&&"hold"===s&&r&&(t=r),t?i=setTimeout(function(){_.show()},t):_.show()}function re(e){if(_.clearDelayTimeouts(),j("onUntrigger",[_,e]),_.state.isVisible){if(!(_.props.trigger.indexOf("mouseenter")>=0&&_.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&d)){var t=L(!1);t?n=setTimeout(function(){_.state.isVisible&&_.hide()},t):s=requestAnimationFrame(function(){_.hide()})}}else z()}function oe(){_.state.isEnabled=!0}function ae(){_.hide(),_.state.isEnabled=!1}function le(){clearTimeout(i),clearTimeout(n),cancelAnimationFrame(s)}function ce(t){if(!_.state.isDestroyed){j("onBeforeUpdate",[_,t]),Y();var i=_.props,n=Fi(e,Object.assign({},i,pi(t),{ignoreAttributes:!0}));_.props=n,G(),i.interactiveDebounce!==n.interactiveDebounce&&(D(),f=si(K,n.interactiveDebounce)),i.triggerTarget&&!n.triggerTarget?oi(i.triggerTarget).forEach(function(e){e.removeAttribute("aria-expanded")}):n.triggerTarget&&e.removeAttribute("aria-expanded"),P(),R(),k&&k(i,n),_.popperInstance&&(ee(),ne().forEach(function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})),j("onAfterUpdate",[_,t])}}function de(e){_.setProps({content:e})}function pe(){var e=_.state.isVisible,t=_.state.isDestroyed,i=!_.state.isEnabled,n=Ai.isTouch&&!_.props.touch,s=ti(_.props.duration,0,Ri.duration);if(!(e||t||i||n||C().hasAttribute("disabled")||(j("onShow",[_],!1),!1===_.props.onShow(_)))){if(_.state.isVisible=!0,O()&&(x.style.visibility="visible"),R(),q(),_.state.isMounted||(x.style.transition="none"),O()){var r=I();vi([r.box,r.content],0)}a=function(){var e;if(_.state.isVisible&&!u){if(u=!0,x.offsetHeight,x.style.transition=_.props.moveTransition,O()&&_.props.animation){var t=I(),i=t.box,n=t.content;vi([i,n],s),yi([i,n],"visible")}N(),P(),ai(Gi,_),null==(e=_.popperInstance)||e.forceUpdate(),j("onMount",[_]),_.props.animation&&O()&&H(s,function(){_.state.isShown=!0,j("onShown",[_])})}},ie()}}function he(){var e=!_.state.isVisible,t=_.state.isDestroyed,i=!_.state.isEnabled,n=ti(_.props.duration,1,Ri.duration);if(!(e||t||i)&&(j("onHide",[_],!1),!1!==_.props.onHide(_))){if(_.state.isVisible=!1,_.state.isShown=!1,u=!1,d=!1,O()&&(x.style.visibility="hidden"),D(),z(),R(!0),O()){var s=I(),r=s.box,o=s.content;_.props.animation&&(vi([r,o],n),yi([r,o],"hidden"))}N(),P(),_.props.animation?O()&&U(n,_.unmount):_.unmount()}}function ue(e){T().addEventListener("mousemove",f),ai(Wi,f),f(e)}function ge(){_.state.isVisible&&_.hide(),_.state.isMounted&&(te(),ne().forEach(function(e){e._tippy.unmount()}),x.parentNode&&x.parentNode.removeChild(x),Gi=Gi.filter(function(e){return e!==_}),_.state.isMounted=!1,j("onHidden",[_]))}function fe(){_.state.isDestroyed||(_.clearDelayTimeouts(),_.unmount(),Y(),delete e._tippy,_.state.isDestroyed=!0,j("onDestroy",[_]))}}function Qi(e,t){void 0===t&&(t={});var i=Ri.plugins.concat(t.plugins||[]);Ci();var n=Object.assign({},t,{plugins:i}),s=bi(e).reduce(function(e,t){var i=t&&Yi(t,n);return i&&e.push(i),e},[]);return ui(e)?s[0]:s}function Ki(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,(e,t)=>0===+e?"":0===t?e.toLowerCase():e.toUpperCase()).replace("-","")}Qi.defaultProps=Ri,Qi.setDefaultProps=Ni,Qi.currentInput=Ai,Object.assign({},Oe,{effect:function(e){var t=e.state,i={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,i.popper),t.styles=i,t.elements.arrow&&Object.assign(t.elements.arrow.style,i.arrow)}}),Qi.setDefaultProps({render:Hi});const Ji='\n    .tippy-box[data-animation=fade][data-state=hidden] {\n        opacity: 0\n    }\n\n    .tippy-iOS {\n        cursor: pointer!important;\n        -webkit-tap-highlight-color: transparent\n    }\n\n    [data-tippy-root] {\n        max-width: calc(100vw - 10px)\n    }\n\n    .tippy-box {\n        position: relative;\n        background-color: #333;\n        color: #fff;\n        border-radius: 4px;\n        font-size: clamp(\n          calc(var(--pb-popover-font-size, 1rem) * var(--pb-min-zoom, 0.5)), \n          calc(var(--pb-popover-font-size, 1rem) * var(--pb-zoom-factor)), \n          calc(var(--pb-popover-font-size, 1rem) * var(--pb-max-zoom, 3.0))\n        );\n        line-height: calc(var(--pb-popover-line-height, 1.5) * var(--pb-zoom-factor));\n\n        text-align: left;\n        font-style: normal;\n        font-weight: normal;\n        outline: 0;\n        transition-property: transform, visibility, opacity;\n    }\n\n    .tippy-box[data-placement^=top]>.tippy-arrow {\n        bottom: 0\n    }\n\n    .tippy-box[data-placement^=top]>.tippy-arrow:before {\n        bottom: -7px;\n        left: 0;\n        border-width: 8px 8px 0;\n        border-top-color: initial;\n        transform-origin: center top\n    }\n\n    .tippy-box[data-placement^=bottom]>.tippy-arrow {\n        top: 0\n    }\n\n    .tippy-box[data-placement^=bottom]>.tippy-arrow:before {\n        top: -7px;\n        left: 0;\n        border-width: 0 8px 8px;\n        border-bottom-color: initial;\n        transform-origin: center bottom\n    }\n\n    .tippy-box[data-placement^=left]>.tippy-arrow {\n        right: 0\n    }\n\n    .tippy-box[data-placement^=left]>.tippy-arrow:before {\n        border-width: 8px 0 8px 8px;\n        border-left-color: initial;\n        right: -7px;\n        transform-origin: center left\n    }\n\n    .tippy-box[data-placement^=right]>.tippy-arrow {\n        left: 0\n    }\n\n    .tippy-box[data-placement^=right]>.tippy-arrow:before {\n        left: -7px;\n        border-width: 8px 8px 8px 0;\n        border-right-color: initial;\n        transform-origin: center right\n    }\n\n    .tippy-box[data-inertia][data-state=visible] {\n        transition-timing-function: cubic-bezier(.54, 1.5, .38, 1.11)\n    }\n\n    .tippy-arrow {\n        width: 16px;\n        height: 16px;\n        color: #333\n    }\n\n    .tippy-arrow:before {\n        content: "";\n        position: absolute;\n        border-color: transparent;\n        border-style: solid\n    }\n\n    .tippy-content {\n        position: relative;\n        padding: 5px 9px;\n        z-index: 1;\n        overflow: auto;\n        max-height: var(--pb-popover-max-height, calc(100vh - 60px));\n        min-height: var(--pb-popover-min-height, auto);\n        max-width: var(--pb-popover-max-width, auto);\n        min-width: var(--pb-popover-min-width, auto);\n        color: var(--pb-popover-color);\n    }\n',Zi='\n    .tippy-box[data-theme~=light-border] {\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid rgba(0, 8, 16, .15);\n        color: #333;\n        box-shadow: 0 4px 14px -2px rgba(0, 8, 16, .08)\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-backdrop {\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-arrow:after, .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after {\n        content: "";\n        position: absolute;\n        z-index: -1\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-arrow:after {\n        border-color: transparent;\n        border-style: solid\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after {\n        border-top-color: rgba(0, 8, 16, .2);\n        border-width: 7px 7px 0;\n        top: 17px;\n        left: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg {\n        top: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after {\n        top: 17px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #fff;\n        bottom: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after {\n        border-bottom-color: rgba(0, 8, 16, .2);\n        border-width: 0 7px 7px;\n        bottom: 17px;\n        left: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg {\n        bottom: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after {\n        bottom: 17px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after {\n        border-left-color: rgba(0, 8, 16, .2);\n        border-width: 7px 0 7px 7px;\n        left: 17px;\n        top: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg {\n        left: 11px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after {\n        left: 12px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #fff;\n        right: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after {\n        border-width: 7px 7px 7px 0;\n        right: 17px;\n        top: 1px;\n        border-right-color: rgba(0, 8, 16, .2)\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg {\n        right: 11px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after {\n        right: 12px\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-svg-arrow {\n        fill: #fff\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after {\n        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);\n        background-size: 16px 6px;\n        width: 16px;\n        height: 6px\n    }\n',Xi="\n    .tippy-box[data-theme~=light] {\n        color: #26323d;\n        box-shadow: 0 0 20px 4px rgba(154, 161, 177, .15), 0 4px 80px -8px rgba(36, 40, 47, .25), 0 4px 4px -2px rgba(91, 94, 105, .15);\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #fff\n    }\n\n    .tippy-box[data-theme~=light]>.tippy-backdrop {\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light]>.tippy-svg-arrow {\n        fill: #fff\n    }",en="\n    .tippy-box[data-theme~=material] {\n        background-color: #505355;\n        font-weight: 600\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #505355\n    }\n\n    .tippy-box[data-theme~=material]>.tippy-backdrop {\n        background-color: #505355\n    }\n\n    .tippy-box[data-theme~=material]>.tippy-svg-arrow {\n        fill: #505355\n    }\n",tn="\n    .tippy-box[data-theme~=translucent] {\n        background-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-arrow {\n        width: 14px;\n        height: 14px\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=top]>.tippy-arrow:before {\n        border-width: 7px 7px 0;\n        border-top-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=bottom]>.tippy-arrow:before {\n        border-width: 0 7px 7px;\n        border-bottom-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=left]>.tippy-arrow:before {\n        border-width: 7px 0 7px 7px;\n        border-left-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=right]>.tippy-arrow:before {\n        border-width: 7px 7px 7px 0;\n        border-right-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-backdrop {\n        background-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-svg-arrow {\n        fill: rgba(0, 0, 0, .7)\n    }\n";var nn=Object.freeze({__proto__:null,base:Ji,camelize:Ki,light:Xi,lightBorder:Zi,material:en,translucent:tn});function sn(e,t,i){if(!e.querySelector(`#pb-popover-${t}`)){const n=e.nodeType===Node.DOCUMENT_NODE?document.head:e;console.log("Loading tippy styles for theme %s into %o",t,n);const s=document.createElement("style");s.type="text/css",s.id=`pb-popover-${t}`,s.innerHTML=i,n.appendChild(s)}}function rn(e,t){if(sn(e,"base",Ji),t&&"none"!==t){const i=Ki(t),n=nn[i];n&&sn(e,i,n)}}class on extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{for:{type:String},theme:{type:String},placement:{type:String},fallbackPlacement:{type:String,attribute:"fallback-placement"},persistent:{type:Boolean},trigger:{type:String},touch:{type:String},popupClass:{type:String,attribute:"popup-class"},remote:{type:String},stopPropagation:{type:Boolean,attribute:"stop-propagation"}})}constructor(){super(),this.persistent=!1,this.trigger=null,this.for=null,this.theme=null,this.placement=null,this.touch=null,this.fallbackPlacement=null,this.popupClass=null,this.stopPropagation=!1,this._tippy=null,this._content=null}render(){return this.for?t`<div class="hidden"><slot></slot></div>`:t`<span id="link" part="trigger" class="${this.persistent?"persistent":""}"
        ><slot name="default"><slot></slot></slot></span
      ><span class="hidden"><slot name="alternate"></slot></span>`}disconnectedCallback(){super.disconnectedCallback(),this._tippy&&this._tippy.destroy(),this._observer&&this._observer.disconnect()}_checkCSSProperties(){if(this.theme||"none"===this.theme||(this.theme=e(this,"--pb-popover-theme","none")),this.placement||(this.placement=e(this,"--pb-popover-placement","auto")),this.fallbackPlacement||(this.fallbackPlacement=e(this,"--pb-popover-fallback-placement",null)),this.persistent||(this.persistent=e(this,"--pb-popover-persistent",!1)),this.trigger||(this.trigger=e(this,"--pb-popover-trigger",null)),!this.touch){const t=e(this,"--pb-popover-touch","hold");this.touch="true"===t||t}}_injectStyles(){this._checkCSSProperties(),rn(this.getRootNode(),this.theme)}_getContent(){if(this._content)return this._content;const e=this._getSlot();if(e){const t=document.createElement("div");return e.assignedNodes().forEach(e=>{t.appendChild(e.content?e.content.cloneNode(!0):e.cloneNode(!0))}),this._content=t,t}return null}_getSlot(){return this.for?this.shadowRoot.querySelector("slot"):this.shadowRoot.querySelector("[name=alternate]")}_registerMutationObserver(){const e=this._getSlot();this._observer=new MutationObserver(()=>{this.alternate=this._getContent(),console.log("alternate changed"),this.emitTo("pb-popover-changed",this.alternate)}),this._observer.observe(this,{subtree:!0,childList:!0,characterData:!0}),e&&e.assignedNodes().forEach(e=>{this._observer.observe(e.content?e.content:e,{subtree:!0,childList:!0,characterData:!0})})}get alternate(){return this._getContent()}set alternate(e){this._content=e,this._tippy&&this._tippy.setContent(this._content)}command(e,t){"disable"===e&&(this.disabled=t,this._tippy&&(t?this._tippy.disable():this._tippy.enable()))}firstUpdated(){super.firstUpdated(),this._injectStyles(),this._registerMutationObserver(),this.trigger||(this.trigger=this.persistent?"click":"mouseenter");const e=this.getRootNode();let t;if(this.for?(t=e.getElementById(this.for),t||console.error("<pb-popover> target element %s not found",this.for)):t=this.shadowRoot.getElementById("link"),t){const i={allowHTML:!0,appendTo:e.nodeType===Node.DOCUMENT_NODE?document.body:e,placement:this.placement,interactive:!0,ignoreAttributes:!0,boundary:"viewport",maxWidth:"none",touch:this.touch,hideOnClick:!1,trigger:this.trigger};if(this.stopPropagation&&(i.onTrigger=(e,t)=>{t.stopPropagation()}),this.persistent&&(i.onClickOutside=(e,t)=>{e.hideWithInteractivity(t)}),this.theme&&"none"!==this.theme&&(i.theme=this.theme),this.fallbackPlacement){const e=this.fallbackPlacement.split(" ");i.popperOptions={modifiers:[{name:"flip",options:{fallbackPlacements:e}}]}}this.popupClass&&(i.onCreate=e=>{e.popper.classList.add(this.popupClass)}),i.onShow=e=>{this.remote?this._loadRemoteContent():e.setContent(this._getContent()),this.emitTo("pb-popover-show",{source:this,popup:e})},this._tippy=Qi(t,i)}}_loadRemoteContent(){const e=this.toAbsoluteURL(this.remote);fetch(e,{method:"GET",mode:"cors",credentials:"same-origin"}).then(e=>e.text()).then(e=>{this.alternate=e}).catch(e=>{console.error("<pb-popover> Error retrieving remote content: %o",e)})}static get styles(){return[n`
        :host {
          display: inline;
        }
        .hidden {
          display: none;
        }
        div {
          float: left;
        }
        #link {
          display: inline;
          color: inherit;
          text-decoration: var(
            --pb-popover-link-decoration,
            var(--pb-link-text-decoration, inherit)
          );
        }
        #link.persistent {
          cursor: pointer;
        }
      `]}}customElements.define("pb-popover",on);class an extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{key:{type:String},duration:{type:Number},scroll:{type:Boolean},highlightSelf:{type:Boolean,attribute:"highlight-self"},_className:{type:String}})}constructor(){super(),this.key=null,this.duration=0,this.scroll=!1,this.highlightSelf=!1,this._className="highlight-off"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-highlight-on",this._highlightOn.bind(this)),this.subscribeTo("pb-highlight-off",this._highlightOff.bind(this))}command(e,t){super.command(e,t),this.disabled&&(this._className="highlight-off")}_mouseOver(){this.emitTo("pb-highlight-off",{source:this}),this.highlightSelf&&this._highlightOn({detail:{id:this.key}}),this.emitTo("pb-highlight-on",{id:this.key,source:this,scroll:this.scroll})}render(){return this.disabled?t`<slot></slot>`:t`<span id="content" class="${this._className}" @mouseover="${this._mouseOver}"
      ><slot></slot
    ></span>`}static get styles(){return n`
      :host {
        display: inline;
      }

      @keyframes keyFrameBackgroundColorIn {
        0% {
          background-color: inherit;
        }
        100% {
          background-color: var(--pb-highlight-color, #f9e976);
        }
      }

      #content {
        display: inline;
      }

      .highlight-on {
        background-color: var(--pb-highlight-color, #f9e976);
        animation-name: keyFrameBackgroundColorIn;
        animation-duration: 500ms;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
      }

      .highlight-off {
        background-color: inherit;
      }
    `}_highlightOn(e){e.detail.source!=this&&e.detail.id===this.key&&(this._className="highlight-on",e.detail.scroll&&0==this.disabled&&this.scrollIntoView({block:"center",behaviour:"smooth"}),this.duration>0&&setTimeout(()=>{this._className="highlight-off"},this.duration))}_highlightOff(e){e.detail.source!=this&&(this._className="highlight-off")}}customElements.define("pb-highlight",an);class ln extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{xmlId:{type:String,attribute:"xml-id"},nodeId:{type:String,attribute:"node-id",reflect:!0},hash:{type:String,reflect:!0},xpath:{type:String,reflect:!0},path:{type:String},odd:{type:String},view:{type:String},params:{type:Object},history:{type:Boolean}})}constructor(){super(),this.history=!0,this.params=null}connectedCallback(){super.connectedCallback(),this._id=this.nodeId,this.subscribeTo("pb-visible",e=>{if(this.nodeId){const[t,i]=e.detail.data.split(/\s*,\s*/);this.nodeId!==t||this.hash&&this.hash!==i?this.classList.remove("active"):(this.classList.add("active"),this.scrollIntoView({block:"nearest"}),this.dispatchEvent(new CustomEvent("pb-collapse-open",{composed:!0,bubbles:!0})))}}),this._content=this.innerHTML,this.innerHTML=""}render(){return t`<button @click="${this._onClick}" type="button">
      ${_(this._content)}
    </button>`}createRenderRoot(){return this}_onClick(e){e.preventDefault();const t={id:null,root:null};this.xmlId?t.id=this.xmlId:this.nodeId&&(t.root=this.nodeId),this.path&&(t.path=this.path),this.odd&&(t.odd=this.odd),this.hash&&(t.hash=this.hash),this.view&&(t.view=this.view),this.xpath&&(t.xpath=this.xpath),this.params&&Object.assign(t,this.params),this.history&&y.commit(this,t),this.emitTo("pb-refresh",t)}}customElements.define("pb-link",ln);class cn extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{facs:{type:String},coordinates:{type:Array},label:{type:String},order:{type:Number},trigger:{type:String},emitOnLoad:{type:Boolean,attribute:"emit-on-load",reflect:!0}})}constructor(){super(),this.trigger="click",this.label="",this.order=Number.POSITIVE_INFINITY,this.waitFor="pb-facsimile,pb-image-strip,pb-tify",this.default="",this._loaded=!1}connectedCallback(){super.connectedCallback(),!0===this.emitOnLoad&&this.facs&&""!==this.facs.trim()&&this.wait(()=>{this.emitTo("pb-load-facsimile",{url:this.getImage(),order:this.getOrder(),element:this})})}getImage(){return this.facs}getLabel(){return this.label}getOrder(){return this.order}firstUpdated(){this.shadowRoot.querySelector("a").addEventListener(this.trigger,this._linkListener.bind(this)),!0===this.emitOnLoad&&this.wait(()=>{this._trigger()})}render(){return t`<a href="javascript:;"><slot>${this.default}</slot></a>`}static get styles(){return n`
      :host {
      }

      a,
      a:link {
        text-decoration: none;
        color: inherit;
      }
    `}_linkListener(e){e.preventDefault(),this._trigger()}_trigger(){console.log("<facs-link> %s %o",this.facs,this.coordinates),this.facs&&""!==this.facs.trim()?(!0===this.emitOnLoad||this._loaded||(this._loaded=!0,this.emitTo("pb-load-facsimile",{url:this.getImage(),order:this.getOrder(),element:this})),!0===this.emitOnLoad&&this.emitTo("pb-show-annotation",{element:this,file:this.facs,order:this.getOrder(),coordinates:this.coordinates})):console.warn("<pb-facs-link> No facs URL provided")}}customElements.define("pb-facs-link",cn);class dn extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{items:{type:Array},imageWidth:{attribute:"image-width",type:Number},imageHeight:{attribute:"image-height",type:Number},baseUri:{attribute:"base-uri",type:String}})}constructor(){super(),this.items=[],this.urls=new Set,this.imageHeight=80,this.imageWidth=64}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-start-update",()=>{this.items=[],this.urls=new Set,this.requestUpdate(this.items)}),this.subscribeTo("pb-load-facsimile",e=>{const{element:t,order:i}=e.detail,n=t.getImage();if(this.urls.has(n))return;this.urls.add(n);const s=this.items.map(e=>e.getOrder()).reduce((e,t,n)=>i<t?e:i===t?n:n+1,0);this.items.splice(s,0,t),this.requestUpdate()})}showIt(e){this.emitTo("pb-show-annotation",{file:e.getImage(),element:e})}renderItem(e){return t`
      <figure class="strip-item" @click="${()=>this.showIt(e)}">
        <img
          height="${this.imageHeight}"
          width="${this.imageWidth}"
          src="${this.baseUri}${e.getImage()}/full/${this.imageWidth},${this.imageHeight}/0/default.jpg"
        />
        <figcaption>${e.getLabel()}</figcaption>
      </figure>
    `}render(){return t`${this.items.map(e=>this.renderItem(e))}`}static get styles(){return n`
      :host {
        display: block;
      }
    `}}function pn(e,t){return window.ESGlobalBridge.requestAvailability(),new Promise(i=>{window.ESGlobalBridge.instance.load(e,t),window.addEventListener(`es-bridge-${e}-loaded`,()=>i(),{once:!0})})}function hn(e,t){let i=e.getRootNode();if(i.nodeType===Node.DOCUMENT_NODE)i=i.head;else{const e=document.querySelector(`style#${t.id}`);e&&e.parentNode.removeChild(e);const i=t.innerHTML.match(/@font-face[^{]+{.*?}/gs);if(i){const e=document.createElement("style");e.id=t.id,e.appendChild(document.createTextNode(i.join("\n"))),document.head.appendChild(e)}}const n=i.querySelector(`#${t.id}`);n&&n.parentNode.removeChild(n),i.appendChild(t)}function un(e,t){t.forEach(e=>{if(e.hasChildNodes()){const t=e.hasAttribute("display")||!1,i=e.querySelector("math"),n=window.MathJax.getMetricsFor(e.parentNode,t);let s,r;n.display=t,i?(r=i.outerHTML,s=window.MathJax.mathml2chtml(r,n)):(window.MathJax.texReset(),r=e.innerHTML.replaceAll(/&\w+;/g,e=>({"&amp;":"&","&lt;":"<"}[e])),s=window.MathJax.tex2chtml(r,n)),e.innerHTML="",e.appendChild(s),e.setAttribute("loaded","loaded"),e.setAttribute("source",r)}}),hn(e,window.MathJax.chtmlStylesheet())}function gn(e){const t=e.querySelectorAll("pb-formula");if(console.log(`<pb-formula> Found ${t.length} elements to typeset ...`),t.length>0){if(window.MathJax)return void un(e,t);const i=e.querySelector("pb-formula[menu]");window.MathJax={startup:{typeset:!1,pageReady:()=>un(e,t)},options:{enableMenu:null!==i}},pn("MathJax","https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")}}customElements.get("pb-image-strip")||customElements.define("pb-image-strip",dn);class fn extends s{static get properties(){return Object.assign({display:{type:Boolean},menu:{type:Boolean},loaded:{type:Boolean},source:{type:String}},super.properties)}constructor(){super(),this.display=!1}attributeChangedCallback(e,t,i){switch(super.attributeChangedCallback(e,t,i),e){case"loaded":this.loaded=!0;break;case"source":this.source=i}}render(){return this.hasChildNodes()?this.loaded?t`<div id="content" class="${this.display?"block":""}"><slot></slot></div>`:t`<span class="loading">${u("dialogs.loading")}</span>`:null}static get styles(){return n`
      :host {
        display: inline-block;
      }
      .block {
        display: block;
      }
      .loading {
        color: #808080;
      }
    `}}customElements.define("pb-formula",fn);class mn extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{url:{type:String},expand:{type:Boolean},src:{type:String},container:{type:String},auto:{type:Boolean},loadOnce:{type:Boolean},fixLinks:{type:Boolean,attribute:"fix-links"},start:{type:Number},useLanguage:{type:Boolean,attribute:"use-language"},noCredentials:{type:Boolean,attribute:"no-credentials"},history:{type:Boolean},event:{type:String},userParams:{type:Object},silent:{type:Boolean},plain:{type:Boolean}})}constructor(){super(),this.auto=!1,this.loadOnce=!1,this.history=!1,this.event="pb-load",this.loaded=!1,this.language=null,this.noCredentials=!1,this.silent=!1,this._retryCount=0,this._maxRetries=20}connectedCallback(){super.connectedCallback(),this.subscribeTo(this.event,e=>{a("pb-page-ready",()=>{if(this.history){if(e.detail&&e.detail.params){const{start:t}=e.detail.params;t&&y.commit(this,{start:t})}this.userParams=y.state,y.subscribe(this,e=>{e.start&&(this.start=e.start,this.load())}),y.replace(this,this.userParams)}this.load(e)})}),this.subscribeTo("pb-toggle",e=>{this.toggleFeature(e)}),this.subscribeTo("pb-document",e=>{e.detail&&e.detail.id===this.src&&(console.log(`<pb-load> Document ${this.src} is ready, triggering load`),this.load())}),this.subscribeTo("pb-i18n-update",e=>{const t=this.language&&this.language!==e.detail.language;this.language=e.detail.language,this.useLanguage&&t&&this.load()},[]),this.history&&y.subscribe(this,e=>{this.start=e.start,this.userParams=e,this.load()}),this.signalReady()}firstUpdated(){this.auto?(this.start=y.state.start||1,a("pb-page-ready",e=>{e&&e.language&&(this.language=e.language),setTimeout(()=>{this.wait(()=>this.load())},200)})):a("pb-page-ready",e=>{e&&e.language&&(this.language=e.language)})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t&&t!==i)switch(e){case"url":case"userParams":case"start":this.auto&&this.loader&&a("pb-page-ready",()=>{this.wait(()=>this.load())})}}render(){return t`
      <slot></slot>
      <pb-fetch
        id="loadContent"
        verbose
        handle-as="text"
        method="get"
        ?with-credentials="${!this.noCredentials}"
        @response="${this._handleContent}"
        @error="${this._handleError}"
      ></pb-fetch>
      <pb-dialog id="errorDialog" title="${u("dialogs.error")}">
        <p id="errorMessage"></p>
        <div slot="footer">
          <button rel="prev" type="button">${u("dialogs.close")}</button>
        </div>
      </pb-dialog>
    `}static get styles(){return n`
      :host {
        display: block;
      }
    `}toggleFeature(e){this.userParams=y.getState(this),console.log("<pb-load> toggle feature %o",this.userParams),e.detail.refresh&&(this.history&&y.commit(this,this.userParams),this.load())}getURL(e){let{url:t}=this;return this.expand&&(t=t.replace(/{([^})]+)}/g,(t,i)=>{if(!e[i])return"";const n=encodeURIComponent(e[i]||i);return delete e[i],n})),this.toAbsoluteURL(t)}load(e){if(!this.url)return;if(this.loadOnce&&this.loaded)return;this.emitTo("pb-start-update");let t={};e&&(e instanceof Event?e.detail&&e.detail.params&&(t=e.detail.params):t=e);const i=this.getDocument();if(console.log("<pb-load> getDocument() returned:",i,`src="${this.src}"`),console.log(`<pb-load> Available elements with id "${this.src}":`,document.getElementById(this.src)),i&&console.log(`<pb-load> Document found, path="${i.path}", odd="${i.odd}", view="${i.view}"`),!this.plain){if(i&&i.path)t.doc=i.path,console.log("<pb-load> Setting params.doc to:",i.path),this._retryCount=0;else{if(this.src){if(this._retryCount<this._maxRetries){this._retryCount++;const t=Math.min(100*this._retryCount,1e3);return console.warn(`<pb-load> Document with id "${this.src}" not found or not ready, retrying in ${t}ms (attempt ${this._retryCount}/${this._maxRetries})`),void setTimeout(()=>{this.load(e)},t)}return console.error(`<pb-load> Document with id "${this.src}" not found after ${this._maxRetries} attempts`),void(this.innerHTML='<pb-i18n key="dialogs.loading">Loading...</pb-i18n>')}this.url&&this.url.includes("{doc}")&&console.warn("<pb-load> URL template contains {doc} placeholder but no document is available and no src is specified")}this.start&&!t.start&&(t.start=this.start),this.language&&(t.language=this.language)}t=this.prepareParameters(t);for(const[e,i]of Object.entries(t))null===i&&delete t[e];const n=this.getURL(t);if(n.includes("{")&&n.includes("}")&&(console.warn(`<pb-load> URL still contains unresolved parameters: ${n}`),this.src))return void(this.innerHTML='<pb-i18n key="dialogs.loading">Loading...</pb-i18n>');console.log("<pb-load> Loading %s with parameters %o",n,t);const s=this.shadowRoot.getElementById("loadContent");s.params=t,s.url=n,s.generateRequest(),this.loadOnce&&(this.loaded=!0)}prepareParameters(e){return this.userParams?Object.assign(e,this.userParams):e}_handleContent(e){const t=this.shadowRoot.getElementById("loadContent").lastResponse;if(this.container)this.style.display="none",document.querySelectorAll(this.container).forEach(i=>{i.innerHTML=t,this._parseHeaders(e.detail.xhr,i),this._fixLinks(i),this._onLoad(i)});else{this.style.display="",this._clearContent();const i=document.createElement("div");i.innerHTML=t,this._parseHeaders(e.detail.xhr,i),i.slot="",this.appendChild(i),this._fixLinks(i),this._onLoad(i)}this.emitTo("pb-end-update")}_clearContent(){const e=this.shadowRoot.querySelector("slot:not([name])");e&&e.assignedNodes().forEach(e=>e.parentNode.removeChild(e))}_handleError(){this.emitTo("pb-end-update");const e=this.shadowRoot.getElementById("loadContent"),{response:t}=e.lastError;if(this.silent)return void console.error("Request failed: %s",t?t.description:"");let i;i=t?t.description:'<pb-i18n key="dialogs.serverError"></pb-i18n>';const n=this.shadowRoot.getElementById("errorDialog");this.shadowRoot.getElementById("errorMessage").innerHTML=`<pb-i18n key="dialogs.serverError"></pb-i18n>: ${i}`,n.openDialog()}_parseHeaders(e,t){function i(i,n){const s=t.querySelector(`[data-pagination-${i}]`);return s?s.getAttribute(`data-pagination-${i}`):n?0:e.getResponseHeader(`pb-${i}`)}const n=i("total",this.noCredentials),s=i("start",this.noCredentials);this.start!==s&&(this.start=parseInt(s)),this.emitTo("pb-results-received",{count:n?parseInt(n,10):0,start:this.start,content:t,params:this.shadowRoot.getElementById("loadContent").params})}_fixLinks(e){gn(e),this.fixLinks&&(e.querySelectorAll("img").forEach(e=>{const t=e.getAttribute("src");if(t)try{e.src=this.toAbsoluteURL(t)}catch(e){console.warn("<pb-load> Unable to resolve image URL %s",t,e)}}),e.querySelectorAll("a").forEach(e=>{const t=e.getAttribute("href");if(t)try{e.href=this.toAbsoluteURL(t)}catch(e){console.warn("<pb-load> Unable to resolve link URL %s",t,e)}}))}_onLoad(e){}}customElements.define("pb-load",mn);class bn extends(m(mn)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{sortBy:{type:String,attribute:"sort-by"},sortOptions:{type:Array,attribute:"sort-options"},sortLabel:{type:String},filter:{type:String},filterBy:{type:String,attribute:"filter-by"},filterOptions:{type:Array,attribute:"filter-options"},filterByLabel:{type:String},filterPlaceholderLabel:{type:String},collection:{type:String},facets:{type:Object},login:{type:String},group:{type:String},subforms:{type:String},static:{type:Boolean},_file:{type:String},_selected:{type:Array},_allowModification:{type:Boolean}})}constructor(){super(),this.sortOptions=[],this.sortLabel="browse.sort",this.sortBy="default",this.filter="",this.filterOptions=[{label:"Title",value:"title"}],this.filterByLabel="browse.filter",this.filterPlaceholderLabel="browse.filterPlaceholder",this.filterBy="title",this._allowModification=!1,this.static=!1}connectedCallback(){super.connectedCallback(),a("pb-page-ready",()=>{y.state.sort&&(this.sortBy=y.state.sort),y.state.filter&&(this.filter=y.state.filter,this.filterBy=y.state.filterBy||this.filterBy),this.facets={},Object.keys(y.state).forEach(e=>{if(/^facet-.*$/.test(e)){const t=y.state[e];this.facets[e]?this.facets[e].push(t):Array.isArray(t)?this.facets[e]=t:this.facets[e]=[t]}}),this.collection=y.state.collection,this.collection&&y.replace(this,{collection:this.collection}),y.subscribe(this,e=>{this.collection=e.collection,this.load()})}),this.subscribeTo("pb-search-resubmit",this._facets.bind(this)),this.subscribeTo("pb-login",e=>{e.detail.userChanged&&this._facets(e)},[]),this.subscribeTo("pb-i18n-update",()=>{this.requestUpdate()},[])}firstUpdated(){a("pb-page-ready",e=>{const t=this.shadowRoot.getElementById("filterString");let i;l(e.apiVersion,"1.0.0")>=0?(i=`${e.endpoint}/api/search/autocomplete`,this.url||(this.url="api/collection")):(i=`${e.endpoint}/modules/autocomplete.xql`,this.url||(this.url="collection/")),t&&(t.source=i,t.substring=!0,t.requestParams={field:this.filterBy})});const e=this.shadowRoot.getElementById("filterString");e&&(e.addEventListener("pb-autocomplete-selected",this._handleAutocompleteSelected.bind(this)),e.addEventListener("pb-autocomplete-input",this._handleAutocompleteInput.bind(this)));const t=this.shadowRoot.getElementById("sortSelect");if(t&&t.addEventListener("change",this._sort.bind(this)),this.login){const e=document.getElementById(this.login);e?(this.subscribeTo("pb-login",e=>{this._allowModification=this._loggedIn(e.detail.user,e.detail.group)},[]),this._allowModification=e.loggedIn&&this._loggedIn(e.user,e.groups)):console.error("<pb-browse-docs> connected pb-login element not found!")}this.shadowRoot.getElementById("delete").addEventListener("click",this._handleDelete.bind(this)),super.firstUpdated()}render(){return t`
      <slot name="header"></slot>
      <div class="toolbar toolbar--primary">
        <div class="toolbar__group">
          <label class="field">
            <span class="field__label">${u(this.sortLabel)}</span>
            <select
              id="sortSelect"
              class="field__select"
              @change="${this._sort}"
              .value=${this.sortBy||""}
            >
              ${this.sortOptions.map(e=>t`<option value="${e.value}">${u(e.label)}</option>`)}
            </select>
          </label>
        </div>
        <div class="toolbar__group toolbar__group--filter">
          <label class="field">
            <span class="field__label">${u(this.filterByLabel)}</span>
            <select
              id="filterSelect"
              class="field__select"
              @change="${this._filterChanged}"
              .value=${this.filterBy||""}
            >
              ${this.filterOptions.map(e=>t`<option value="${e.value}">${u(e.label)}</option>`)}
            </select>
          </label>
          <div class="filter-control">
            <pb-autocomplete
              id="filterString"
              class="filter-control__input"
              name="filter"
              .value=${this.filter||""}
              placeholder="${u(this.filterPlaceholderLabel)}"
              icon="search"
              @keydown=${this._handleEnter}
            ></pb-autocomplete>
            <button
              class="pb-button pb-button--icon filter-control__submit"
              type="button"
              @click=${this._filter}
              aria-label="${u("browse.filter")}"
              title="${u("browse.filter")}"
            >
              <pb-icon icon="search" decorative></pb-icon>
            </button>
          </div>
        </div>
      </div>
      <div class="toolbar toolbar--secondary">
        <slot name="toolbar"></slot>
        <button
          id="delete"
          part="delete-button"
          type="button"
          class="pb-button pb-button--text ${this._canModify(this._allowModification)}"
          title="${u("browse.delete")}"
        >
          <pb-icon icon="delete" decorative></pb-icon>
          <span class="label">${u("browse.delete")}</span>
        </button>
      </div>
      <slot></slot>
      <slot name="footer"></slot>

      <pb-fetch
        id="loadContent"
        verbose
        handle-as="text"
        method="get"
        with-credentials
        @response="${this._handleContent}"
        @error="${this._handleError}"
      ></pb-fetch>
      <pb-dialog id="deleteDialog" title="${u("browse.delete")}">
        <p>
          ${u("browse.confirmDeletion",{count:this._selected?this._selected.length:0})}
        </p>
        <div slot="footer" class="buttons">
          <button
            class="pb-button pb-button--text"
            type="button"
            autofocus
            @click="${this._confirmDelete}"
          >
            ${u("dialogs.yes")}
          </button>
          <button class="pb-button pb-button--text" type="button" rel="prev">
            ${u("dialogs.no")}
          </button>
        </div>
      </pb-dialog>
      <pb-dialog id="errorDialog" title="${u("dialogs.error")}">
        <p id="errorMessage"></p>
        <div slot="footer">
          <button class="pb-button pb-button--text" type="button" rel="prev">
            ${u("dialogs.close")}
          </button>
        </div>
      </pb-dialog>
    `}static get styles(){return n`
      :host {
        display: block;
      }

      .toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: flex-end;
        justify-content: var(--pb-browse-toolbar-justify-content, space-between);
        margin-bottom: 1rem;
      }

      .toolbar--secondary {
        align-items: center;
      }

      .toolbar__group {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .toolbar__group--filter {
        flex: 1 1 320px;
        justify-content: flex-end;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        min-width: 160px;
      }

      .field__label {
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.6);
      }

      .field__select {
        appearance: none;
        min-width: 160px;
        padding: 0.45rem 2.25rem 0.45rem 0.75rem;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.16);
        background-image: linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.5) 50%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.5) 50%, transparent 50%),
          linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
        background-position: calc(100% - 18px) calc(1em + 2px), calc(100% - 13px) calc(1em + 2px),
          calc(100% - 2.5rem) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 2.25em;
        background-repeat: no-repeat;
        font: inherit;
        color: inherit;
        line-height: 1.2;
      }

      .field__select:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }

      .filter-control {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1 1 280px;
      }

      .filter-control__input {
        flex: 1 1 auto;
      }

      .filter-control__submit {
        margin-bottom: 4px;
      }

      .filter-control__submit pb-icon {
        --pb-icon-size: 1.25rem;
      }

      [name='toolbar'] {
        flex: 1 0;
      }

      .hidden {
        display: none !important;
      }
    `}getURL(e){if(this.static)return`collections/${this.collection?`${this.collection}/`:""}${e.start||"1"}.html`;const t=super.getURL(e);return this.collection?`${t}/${this.collection}`:t}prepareParameters(e){return(e=this._paramsFromSubforms(e)).sort=this.sortBy,this.filter&&(e.filter=this.filter,e.browse=this.filterBy),this.facets&&(e=Object.assign(e,this.facets)),e}_paramsFromSubforms(e){return this.subforms&&document.querySelectorAll(this.subforms).forEach(t=>{t.serializeForm&&Object.assign(e,t.serializeForm())}),e}getSelected(){const e=[];return this.container?document.querySelectorAll(this.container).forEach(t=>t.querySelectorAll('.document-select input[type="checkbox"]:checked').forEach(t=>{e.push(t.value)})):this.querySelectorAll('.document-select input[type="checkbox"]:checked').forEach(t=>{e.push(t.value)}),e}_filter(){const e=this.shadowRoot.getElementById("filterString"),t=this.shadowRoot.getElementById("filterSelect"),i=e?e.value:this.filter,n=t?t.value:this.filterBy;void 0!==i&&(console.log("<pb-browse-docs> Filter by %s",i),this.filter=i,y.commit(this,{filter:i,filterBy:n}),this.load())}_filterChanged(e){const t=(null==e?void 0:e.target)??this.shadowRoot.getElementById("filterSelect"),i=t?t.value:null;if(i&&i!==this.filterBy){console.log("<pb-browse-docs> Filtering on %s",i),this.filterBy=i;const e=this.shadowRoot.getElementById("filterString");e&&(e.requestParams={field:this.filterBy})}}_sort(e){const t=(null==e?void 0:e.target)??this.shadowRoot.getElementById("sortSelect"),i=t?t.value:null;i&&i!==this.sortBy&&(console.log("<pb-browse-docs> Sorting by %s",i),this.sortBy=i,y.commit(this,{sort:i}),this.load())}_facets(e){e.detail&&e.detail.params&&(y.clearParametersMatching(this,/^(all-|facet-).*/),this.facets=e.detail.params,this.start=1,y.commit(this,e.detail.params)),this.load()}_onLoad(e){window.scrollTo(0,0);const t=e.querySelector("[data-root]"),i=t&&t.getAttribute("data-root"),n=t&&t.classList.contains("writable");this.emitTo("pb-collection",{writable:n,collection:i}),document.querySelectorAll("[can-write]").forEach(e=>{e.disabled=!n}),e.querySelectorAll("[data-collection]").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),this.collection=e.getAttribute("data-collection"),this.start=1,y.commit(this,{collection:this.collection}),console.log("<pb-browse-docs> loading collection %s",this.collection),this.load()})})}_handleDelete(e,t){const i=this.shadowRoot.getElementById("deleteDialog"),n=this.getSelected();n.length>0&&(this._selected=n,i.openDialog())}_confirmDelete(){if(!this._file&&!this._selected)return;let e;e=this._selected?this._selected:[this._file],console.log("<pb-browse-docs> Deleting %o",this._file);const t={action:"delete","docs[]":e};this._file=null,this._selected=null,this.load(t)}_loggedIn(e,t){return null!=e&&(!this.group||!!t&&t.indexOf(this.group)>-1)}_canModify(e){return e?"":"hidden"}_handleAutocompleteInput(e){const t=e.detail||{},i=t.value??t.text??"";this.filter=i}_handleAutocompleteSelected(e){const t=e.detail||{},i=t.value??t.text??"";this.filter=i,this._filter()}_handleEnter(e){const t=e.key||e.code||e.keyCode;"Enter"!==t&&"NumpadEnter"!==t&&13!==t||this._filter()}}customElements.define("pb-browse-docs",bn);class vn extends mn{static get properties(){return Object.assign(Object.assign({},super.properties),{},{collection:{type:String},static:{type:Boolean}})}constructor(){super(),this.collection=null,this.static=!1}connectedCallback(){super.connectedCallback(),a("pb-page-ready",()=>{this.collection=y.state.collection,y.subscribe(this,e=>{this.collection=e.collection})})}getURL(e){if(this.static)return`collections/${this.collection?`${this.collection}/`:""}${e.start||"1"}.html`;const t=super.getURL(e);return this.collection?`${t}/${this.collection}`:t}_onLoad(e){window.scrollTo(0,0);const t=e.querySelector("[data-root]"),i=t&&t.getAttribute("data-root"),n=t&&t.classList.contains("writable");this.emitTo("pb-collection",{writable:n,collection:i}),document.querySelectorAll("[can-write]").forEach(e=>{e.disabled=!n}),e.querySelectorAll("[data-collection]").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),this.collection=e.getAttribute("data-collection"),this.start=1,this.history&&y.commit(this,{collection:this.collection}),console.log("<pb-browse> loading collection %s",this.collection),this.emitTo("pb-search-resubmit")})})}}customElements.define("pb-browse",vn);class yn extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{path:{type:String,reflect:!0},rootPath:{type:String,attribute:"root-path"},odd:{type:String,reflect:!0},view:{type:String,reflect:!0},disableHistory:{type:Boolean,attribute:"disable-history"},sourceView:{type:String,attribute:"source-view"}})}constructor(){super(),this.path=null,this.rootPath="",this.disableHistory=!1,this._emitScheduled=!1,this._lastEventKey=null}connectedCallback(){super.connectedCallback(),this.disableHistory||(y.state.path&&!this.path&&(this.path=y.state.path),this.view=y.state.view||this.view,this.odd=y.state.odd||this.odd),this._lastEventKey=this._computeEventKey()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!==i&&(this._emitScheduled||(this._emitScheduled=!0,setTimeout(()=>{this._emitScheduled=!1;const e=this._computeEventKey();e!==this._lastEventKey&&(this.emitTo("pb-document",this),this._lastEventKey=e)},0)))}_computeEventKey(){return JSON.stringify({path:this.path||"",rootPath:this.rootPath||"",odd:this.odd||"",view:this.view||"",sourceView:this.sourceView||""})}getFileName(){return this.path.replace(/^.*?([^\/]+)$/,"$1")}getCollection(){return this.path.replace(/^(.*?)\/[^\/]+$/,"$1")}getFullPath(){return`${this.rootPath}/${this.path}`}}customElements.define("pb-document",yn);class _n extends(w(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{direction:{type:String},keyboard:{type:String},rendition:{type:String}})}constructor(){super(),this.direction="forward",this.disabled=!0}connectedCallback(){super.connectedCallback(),this.keyboard&&(this.hotkeys={next:this.keyboard}),this.subscribeTo("pb-update",this._update.bind(this)),this.registerHotkey("next",()=>this.emitTo("pb-navigate",{direction:this.direction})),this.signalReady()}_update(e){"forward"===this.direction?e.detail.data.next?this.disabled=!1:this.disabled=!0:e.detail.data.previous?this.disabled=!1:this.disabled=!0}_handleClick(){this.emitTo("pb-navigate",{direction:this.direction})}render(){return t`
      <button id="button" @click="${this._handleClick}" type="button"><slot></slot></button>
    `}static get styles(){return n`
      :host {
        display: inline;
      }
      :host([disabled]):host(:not([rendition])),
      :host([disabled]):host([rendition='hidden']) {
        display: none;
      }
      :host([disabled]):host([rendition='invisible']) {
        visibility: hidden;
      }
      :host([disabled]):host([rendition='visible']) {
        visibility: visible;
        cursor: not-allowed;
      }
    `}}customElements.define("pb-navigation",_n);const wn=e=>"string"==typeof e,xn=()=>{let e,t;const i=new Promise((i,n)=>{e=i,t=n});return i.resolve=e,i.reject=t,i},kn=e=>null==e?"":""+e,An=(e,t,i)=>{e.forEach(e=>{t[e]&&(i[e]=t[e])})},Sn=/###/g,$n=e=>e&&e.indexOf("###")>-1?e.replace(Sn,"."):e,En=e=>!e||wn(e),On=(e,t,i)=>{const n=wn(t)?t.split("."):t;let s=0;for(;s<n.length-1;){if(En(e))return{};const t=$n(n[s]);!e[t]&&i&&(e[t]=new i),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++s}return En(e)?{}:{obj:e,k:$n(n[s])}},Cn=(e,t,i)=>{const{obj:n,k:s}=On(e,t,Object);if(void 0!==n||1===t.length)return void(n[s]=i);let r=t[t.length-1],o=t.slice(0,t.length-1),a=On(e,o,Object);for(;void 0===a.obj&&o.length;){var l;r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=On(e,o,Object),null!==(l=a)&&void 0!==l&&l.obj&&void 0!==a.obj[`${a.k}.${r}`]&&(a.obj=void 0)}a.obj[`${a.k}.${r}`]=i},Tn=(e,t,i,n)=>{const{obj:s,k:r}=On(e,t,Object);s[r]=s[r]||[],s[r].push(i)},In=(e,t)=>{const{obj:i,k:n}=On(e,t);if(i&&Object.prototype.hasOwnProperty.call(i,n))return i[n]},Ln=(e,t,i)=>{const n=In(e,i);return void 0!==n?n:In(t,i)},Rn=(e,t,i)=>{for(const n in t)"__proto__"!==n&&"constructor"!==n&&(n in e?wn(e[n])||e[n]instanceof String||wn(t[n])||t[n]instanceof String?i&&(e[n]=t[n]):Rn(e[n],t[n],i):e[n]=t[n]);return e},jn=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Nn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Pn=e=>wn(e)?e.replace(/[&<>"'\/]/g,e=>Nn[e]):e;class Dn{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Fn=[" ",",","?","!",";"],Bn=new Dn(20),Mn=(e,t,i)=>{t=t||"",i=i||"";const n=Fn.filter(e=>t.indexOf(e)<0&&i.indexOf(e)<0);if(0===n.length)return!0;const s=Bn.getRegExp(`(${n.map(e=>"?"===e?"\\?":e).join("|")})`);let r=!s.test(e);if(!r){const t=e.indexOf(i);t>0&&!s.test(e.substring(0,t))&&(r=!0)}return r},qn=(e,t,i=".")=>{if(!e)return;if(e[t]){if(!Object.prototype.hasOwnProperty.call(e,t))return;return e[t]}const n=t.split(i);let s=e;for(let e=0;e<n.length;){if(!s||"object"!=typeof s)return;let t,r="";for(let o=e;o<n.length;++o)if(o!==e&&(r+=i),r+=n[o],t=s[r],void 0!==t){if(["string","number","boolean"].indexOf(typeof t)>-1&&o<n.length-1)continue;e+=o-e+1;break}s=t}return s},zn=e=>null==e?void 0:e.replace("_","-"),Un={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var i,n;null===(i=console)||void 0===i||null===(i=i[e])||void 0===i||null===(n=i.apply)||void 0===n||n.call(i,console,t)}};class Hn{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||Un,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,n){return n&&!this.debug?null:(wn(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Hn(this.logger,Object.assign(Object.assign({},{prefix:`${this.prefix}:${e}:`}),this.options))}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new Hn(this.logger,e)}}var Vn=new Hn;class Wn{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(e=>{this.observers[e]||(this.observers[e]=new Map);const i=this.observers[e].get(t)||0;this.observers[e].set(t,i+1)}),this}off(e,t){this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])}emit(e,...t){if(this.observers[e]){Array.from(this.observers[e].entries()).forEach(([e,i])=>{for(let n=0;n<i;n++)e(...t)})}if(this.observers["*"]){Array.from(this.observers["*"].entries()).forEach(([i,n])=>{for(let s=0;s<n;s++)i.apply(i,[e,...t])})}}}class Gn extends Wn{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i,n={}){var s;const r=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,o=void 0!==n.ignoreJSONStructure?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):wn(i)&&r?a.push(...i.split(r)):a.push(i)));const l=In(this.data,a);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=a[0],t=a[1],i=a.slice(2).join(".")),!l&&o&&wn(i)?qn(null===(s=this.data)||void 0===s||null===(s=s[e])||void 0===s?void 0:s[t],i,r):l}addResource(e,t,i,n,s={silent:!1}){const r=void 0!==s.keySeparator?s.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(r?i.split(r):i)),e.indexOf(".")>-1&&(o=e.split("."),n=t,t=o[1]),this.addNamespaces(t),Cn(this.data,o,n),s.silent||this.emit("added",e,t,i,n)}addResources(e,t,i,n={silent:!1}){for(const n in i)(wn(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});n.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,n,s,r={silent:!1,skipCopy:!1}){let o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),n=i,i=t,t=o[1]),this.addNamespaces(t);let a=In(this.data,o)||{};r.skipCopy||(i=JSON.parse(JSON.stringify(i))),n?Rn(a,i,s):a=Object.assign(Object.assign({},a),i),Cn(this.data,o,a),r.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}}var Yn={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,i,n,s){return e.forEach(e=>{var r;t=(null===(r=this.processors[e])||void 0===r?void 0:r.process(t,i,n,s))??t}),t}};const Qn=Symbol("i18next/PATH_KEY");function Kn(){const e=[],t=Object.create(null);let i;return t.get=(n,s)=>{var r,o;return null===(r=i)||void 0===r||null===(o=r.revoke)||void 0===o||o.call(r),s===Qn?e:(e.push(s),i=Proxy.revocable(n,t),i.proxy)},Proxy.revocable(Object.create(null),t).proxy}function Jn(e,t){const{[Qn]:i}=e(Kn());return i.join((null==t?void 0:t.keySeparator)??".")}const Zn={},Xn=e=>!wn(e)&&"boolean"!=typeof e&&"number"!=typeof e;class es extends Wn{constructor(e,t={}){super(),An(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=Vn.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const i=Object.assign({},t);if(null==e)return!1;const n=this.resolve(e,i);if(void 0===(null==n?void 0:n.res))return!1;const s=Xn(n.res);return!1!==i.returnObjects||!s}extractFromKey(e,t){let i=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===i&&(i=":");const n=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let s=t.ns||this.options.defaultNS||[];const r=i&&e.indexOf(i)>-1,o=!(this.options.userDefinedKeySeparator||t.keySeparator||this.options.userDefinedNsSeparator||t.nsSeparator||Mn(e,i,n));if(r&&!o){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:wn(s)?[s]:s};const r=e.split(i);(i!==n||i===n&&this.options.ns.indexOf(r[0])>-1)&&(s=r.shift()),e=r.join(n)}return{key:e,namespaces:wn(s)?[s]:s}}translate(e,t,i){let n="object"==typeof t?Object.assign({},t):t;if("object"!=typeof n&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof n&&(n=Object.assign({},n)),n||(n={}),null==e)return"";"function"==typeof e&&(e=Jn(e,Object.assign(Object.assign({},this.options),n))),Array.isArray(e)||(e=[String(e)]);const s=void 0!==n.returnDetails?n.returnDetails:this.options.returnDetails,r=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],n),l=a[a.length-1];let c=void 0!==n.nsSeparator?n.nsSeparator:this.options.nsSeparator;void 0===c&&(c=":");const d=n.lng||this.language,p=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if("cimode"===(null==d?void 0:d.toLowerCase()))return p?s?{res:`${l}${c}${o}`,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${c}${o}`:s?{res:o,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:o;const h=this.resolve(e,n);let u=null==h?void 0:h.res;const g=(null==h?void 0:h.usedKey)||o,f=(null==h?void 0:h.exactUsedKey)||o,m=["[object Number]","[object Function]","[object RegExp]"],b=void 0!==n.joinArrays?n.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,y=void 0!==n.count&&!wn(n.count),_=es.hasDefaultValue(n),w=y?this.pluralResolver.getSuffix(d,n.count,n):"",x=n.ordinal&&y?this.pluralResolver.getSuffix(d,n.count,{ordinal:!1}):"",k=y&&!n.ordinal&&0===n.count,A=k&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${w}`]||n[`defaultValue${x}`]||n.defaultValue;let S=u;v&&!u&&_&&(S=A);const $=Xn(S),E=Object.prototype.toString.apply(S);if(!(v&&S&&$&&m.indexOf(E)<0)||wn(b)&&Array.isArray(S))if(v&&wn(b)&&Array.isArray(u))u=u.join(b),u&&(u=this.extendTranslation(u,e,n,i));else{let t=!1,s=!1;!this.isValidLookup(u)&&_&&(t=!0,u=A),this.isValidLookup(u)||(s=!0,u=o);const a=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&s?void 0:u,p=_&&A!==u&&this.options.updateMissing;if(s||t||p){if(this.logger.log(p?"updateKey":"missingKey",d,l,o,p?A:u),r){const e=this.resolve(o,Object.assign(Object.assign({},n),{},{keySeparator:!1}));e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if("fallback"===this.options.saveMissingTo&&t&&t[0])for(let i=0;i<t.length;i++)e.push(t[i]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(n.lng||this.language):e.push(n.lng||this.language);const i=(e,t,i)=>{var s;const r=_&&i!==u?i:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,p,n):null!==(s=this.backendConnector)&&void 0!==s&&s.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,p,n),this.emit("missingKey",e,l,t,u)};this.options.saveMissing&&(this.options.saveMissingPlurals&&y?e.forEach(e=>{const t=this.pluralResolver.getSuffixes(e,n);k&&n[`defaultValue${this.options.pluralSeparator}zero`]&&t.indexOf(`${this.options.pluralSeparator}zero`)<0&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{i([e],o+t,n[`defaultValue${t}`]||A)})}):i(e,o,A))}u=this.extendTranslation(u,e,n,h,i),s&&u===o&&this.options.appendNamespaceToMissingKey&&(u=`${l}${c}${o}`),(s||t)&&this.options.parseMissingKeyHandler&&(u=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${c}${o}`:o,t?u:void 0,n))}else{if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,S,Object.assign(Object.assign({},n),{},{ns:a})):`key '${o} (${this.language})' returned an object instead of string.`;return s?(h.res=e,h.usedParams=this.getUsedParamsDetails(n),h):e}if(r){const e=Array.isArray(S),t=e?[]:{},i=e?f:g;for(const e in S)if(Object.prototype.hasOwnProperty.call(S,e)){const s=`${i}${r}${e}`;t[e]=_&&!u?this.translate(s,Object.assign(Object.assign({},n),{},{defaultValue:Xn(A)?A[e]:void 0},{joinArrays:!1,ns:a})):this.translate(s,Object.assign(Object.assign({},n),{joinArrays:!1,ns:a})),t[e]===s&&(t[e]=S[e])}u=t}}return s?(h.res=u,h.usedParams=this.getUsedParamsDetails(n),h):u}extendTranslation(e,t,i,n,s){var r;if(null!==(r=this.i18nFormat)&&void 0!==r&&r.parse)e=this.i18nFormat.parse(e,Object.assign(Object.assign({},this.options.interpolation.defaultVariables),i),i.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){var o;i.interpolation&&this.interpolator.init(Object.assign(Object.assign({},i),{interpolation:Object.assign(Object.assign({},this.options.interpolation),i.interpolation)}));const r=wn(e)&&(void 0!==(null==i||null===(o=i.interpolation)||void 0===o?void 0:o.skipOnVariables)?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let a;if(r){const t=e.match(this.interpolator.nestingRegexp);a=t&&t.length}let l=i.replace&&!wn(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(l=Object.assign(Object.assign({},this.options.interpolation.defaultVariables),l)),e=this.interpolator.interpolate(e,l,i.lng||this.language||n.usedLng,i),r){const t=e.match(this.interpolator.nestingRegexp);a<(t&&t.length)&&(i.nest=!1)}!i.lng&&n&&n.res&&(i.lng=this.language||n.usedLng),!1!==i.nest&&(e=this.interpolator.nest(e,(...e)=>(null==s?void 0:s[0])!==e[0]||i.context?this.translate(...e,t):(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null),i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=wn(a)?[a]:a;return null!=e&&null!=l&&l.length&&!1!==i.applyPostProcessor&&(e=Yn.handle(l,e,t,this.options&&this.options.postProcessPassResolved?Object.assign({i18nResolved:Object.assign(Object.assign({},n),{},{usedParams:this.getUsedParamsDetails(i)})},i):i,this)),e}resolve(e,t={}){let i,n,s,r,o;return wn(e)&&(e=[e]),e.forEach(e=>{if(this.isValidLookup(i))return;const a=this.extractFromKey(e,t),l=a.key;n=l;let c=a.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const d=void 0!==t.count&&!wn(t.count),p=d&&!t.ordinal&&0===t.count,h=void 0!==t.context&&(wn(t.context)||"number"==typeof t.context)&&""!==t.context,u=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);c.forEach(e=>{var a,c;this.isValidLookup(i)||(o=e,Zn[`${u[0]}-${e}`]||null===(a=this.utils)||void 0===a||!a.hasLoadedNamespace||null!==(c=this.utils)&&void 0!==c&&c.hasLoadedNamespace(o)||(Zn[`${u[0]}-${e}`]=!0,this.logger.warn(`key "${n}" for languages "${u.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),u.forEach(n=>{var o;if(this.isValidLookup(i))return;r=n;const a=[l];if(null!==(o=this.i18nFormat)&&void 0!==o&&o.addLookupKeys)this.i18nFormat.addLookupKeys(a,l,n,e,t);else{let e;d&&(e=this.pluralResolver.getSuffix(n,t.count,t));const i=`${this.options.pluralSeparator}zero`,s=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(t.ordinal&&0===e.indexOf(s)&&a.push(l+e.replace(s,this.options.pluralSeparator)),a.push(l+e),p&&a.push(l+i)),h){const n=`${l}${this.options.contextSeparator||"_"}${t.context}`;a.push(n),d&&(t.ordinal&&0===e.indexOf(s)&&a.push(n+e.replace(s,this.options.pluralSeparator)),a.push(n+e),p&&a.push(n+i))}}let c;for(;c=a.pop();)this.isValidLookup(i)||(s=c,i=this.getResource(n,e,c,t))}))})}),{res:i,usedKey:n,exactUsedKey:s,usedLng:r,usedNS:o}}isValidLookup(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}getResource(e,t,i,n={}){var s;return null!==(s=this.i18nFormat)&&void 0!==s&&s.getResource?this.i18nFormat.getResource(e,t,i,n):this.resourceStore.getResource(e,t,i,n)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!wn(e.replace);let n=i?e.replace:e;if(i&&void 0!==e.count&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n=Object.assign(Object.assign({},this.options.interpolation.defaultVariables),n)),!i){n=Object.assign({},n);for(const e of t)delete n[e]}return n}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&void 0!==e[i])return!0;return!1}}class ts{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Vn.create("languageUtils")}getScriptPartFromCode(e){if(!(e=zn(e))||e.indexOf("-")<0)return null;const t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}getLanguagePartFromCode(e){if(!(e=zn(e))||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(wn(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch(e){}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;const i=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(i)||(t=i)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;const i=this.getScriptPartFromCode(e);if(this.isSupportedCode(i))return t=i;const n=this.getLanguagePartFromCode(e);if(this.isSupportedCode(n))return t=n;t=this.options.supportedLngs.find(e=>e===n?e:e.indexOf("-")<0&&n.indexOf("-")<0?void 0:e.indexOf("-")>0&&n.indexOf("-")<0&&e.substring(0,e.indexOf("-"))===n||0===e.indexOf(n)&&n.length>1?e:void 0)}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),wn(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes((!1===t?[]:t)||this.options.fallbackLng||[],e),n=[],s=e=>{e&&(this.isSupportedCode(e)?n.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return wn(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?("languageOnly"!==this.options.load&&s(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&s(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&s(this.getLanguagePartFromCode(e))):wn(e)&&s(this.formatLanguageCode(e)),i.forEach(e=>{n.indexOf(e)<0&&s(this.formatLanguageCode(e))}),n}}const is={zero:0,one:1,two:2,few:3,many:4,other:5},ns={select:e=>1===e?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class ss{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=Vn.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const i=zn("dev"===e?"en":e),n=t.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:i,type:n});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let r;try{r=new Intl.PluralRules(i,{type:n})}catch(i){if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),ns;if(!e.match(/-|_/))return ns;const n=this.languageUtils.getLanguagePartFromCode(e);r=this.getRule(n,t)}return this.pluralRulesCache[s]=r,r}needsPlural(e,t={}){var i;let n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),(null===(i=n)||void 0===i?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t,i={}){return this.getSuffixes(e,i).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((e,t)=>is[e]-is[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`):[]}getSuffix(e,t,i={}){const n=this.getRule(e,i);return n?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const rs=(e,t,i,n=".",s=!0)=>{let r=Ln(e,t,i);return!r&&s&&wn(i)&&(r=qn(e,i,n),void 0===r&&(r=qn(t,i,n))),r},os=e=>e.replace(/\$/g,"$$$$");class as{constructor(e={}){var t;this.logger=Vn.create("interpolator"),this.options=e,this.format=(null==e||null===(t=e.interpolation)||void 0===t?void 0:t.format)||(e=>e),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:n,prefix:s,prefixEscaped:r,suffix:o,suffixEscaped:a,formatSeparator:l,unescapeSuffix:c,unescapePrefix:d,nestingPrefix:p,nestingPrefixEscaped:h,nestingSuffix:u,nestingSuffixEscaped:g,nestingOptionsSeparator:f,maxReplaces:m,alwaysFormat:b}=e.interpolation;this.escape=void 0!==t?t:Pn,this.escapeValue=void 0===i||i,this.useRawValueToEscape=void 0!==n&&n,this.prefix=s?jn(s):r||"{{",this.suffix=o?jn(o):a||"}}",this.formatSeparator=l||",",this.unescapePrefix=c?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=p?jn(p):h||jn("$t("),this.nestingSuffix=u?jn(u):g||jn(")"),this.nestingOptionsSeparator=f||",",this.maxReplaces=m||1e3,this.alwaysFormat=void 0!==b&&b,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>(null==e?void 0:e.source)===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,i,n){var s;let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(e.indexOf(this.formatSeparator)<0){const s=rs(t,l,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(s,void 0,i,Object.assign(Object.assign(Object.assign({},n),t),{},{interpolationkey:e})):s}const s=e.split(this.formatSeparator),r=s.shift().trim(),o=s.join(this.formatSeparator).trim();return this.format(rs(t,l,r,this.options.keySeparator,this.options.ignoreJSONStructure),o,i,Object.assign(Object.assign(Object.assign({},n),t),{},{interpolationkey:r}))};this.resetRegExp();const d=(null==n?void 0:n.missingInterpolationHandler)||this.options.missingInterpolationHandler,p=void 0!==(null==n||null===(s=n.interpolation)||void 0===s?void 0:s.skipOnVariables)?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>os(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?os(this.escape(e)):os(e)}].forEach(t=>{for(a=0;r=t.regex.exec(e);){const i=r[1].trim();if(o=c(i),void 0===o)if("function"==typeof d){const t=d(e,r,n);o=wn(t)?t:""}else if(n&&Object.prototype.hasOwnProperty.call(n,i))o="";else{if(p){o=r[0];continue}this.logger.warn(`missed to pass in variable ${i} for interpolating ${e}`),o=""}else wn(o)||this.useRawValueToEscape||(o=kn(o));const s=t.safeValue(o);if(e=e.replace(r[0],s),p?(t.regex.lastIndex+=o.length,t.regex.lastIndex-=r[0].length):t.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t,i={}){let n,s,r;const o=(e,t)=>{const i=this.nestingOptionsSeparator;if(e.indexOf(i)<0)return e;const n=e.split(new RegExp(`${i}[ ]*{`));let s=`{${n[1]}`;e=n[0],s=this.interpolate(s,r);const o=s.match(/'/g),a=s.match(/"/g);(((null==o?void 0:o.length)??0)%2==0&&!a||a.length%2!=0)&&(s=s.replace(/'/g,'"'));try{r=JSON.parse(s),t&&(r=Object.assign(Object.assign({},t),r))}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${i}${s}`}return r.defaultValue&&r.defaultValue.indexOf(this.prefix)>-1&&delete r.defaultValue,e};for(;n=this.nestingRegexp.exec(e);){let a=[];r=Object.assign({},i),r=r.replace&&!wn(r.replace)?r.replace:r,r.applyPostProcessor=!1,delete r.defaultValue;const l=/{.*}/.test(n[1])?n[1].lastIndexOf("}")+1:n[1].indexOf(this.formatSeparator);if(-1!==l&&(a=n[1].slice(l).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),n[1]=n[1].slice(0,l)),s=t(o.call(this,n[1].trim(),r),r),s&&n[0]===e&&!wn(s))return s;wn(s)||(s=kn(s)),s||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),s=""),a.length&&(s=a.reduce((e,t)=>this.format(e,t,i.lng,Object.assign(Object.assign({},i),{},{interpolationkey:n[1].trim()})),s.trim())),e=e.replace(n[0],s),this.regexp.lastIndex=0}return e}}const ls=e=>{let t=e.toLowerCase().trim();const i={};if(e.indexOf("(")>-1){const n=e.split("(");t=n[0].toLowerCase().trim();const s=n[1].substring(0,n[1].length-1);if("currency"===t&&s.indexOf(":")<0)i.currency||(i.currency=s.trim());else if("relativetime"===t&&s.indexOf(":")<0)i.range||(i.range=s.trim());else{s.split(";").forEach(e=>{if(e){const[t,...n]=e.split(":"),s=n.join(":").trim().replace(/^'+|'+$/g,""),r=t.trim();i[r]||(i[r]=s),"false"===s&&(i[r]=!1),"true"===s&&(i[r]=!0),isNaN(s)||(i[r]=parseInt(s,10))}})}}return{formatName:t,formatOptions:i}},cs=e=>{const t={};return(i,n,s)=>{let r=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(r=Object.assign(Object.assign({},r),{},{[s.interpolationkey]:void 0}));const o=n+JSON.stringify(r);let a=t[o];return a||(a=e(zn(n),s),t[o]=a),a(i)}},ds=e=>(t,i,n)=>e(zn(i),n)(t);class ps{constructor(e={}){this.logger=Vn.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const i=t.cacheInBuiltFormats?cs:ds;this.formats={number:i((e,t)=>{const i=new Intl.NumberFormat(e,Object.assign({},t));return e=>i.format(e)}),currency:i((e,t)=>{const i=new Intl.NumberFormat(e,Object.assign(Object.assign({},t),{},{style:"currency"}));return e=>i.format(e)}),datetime:i((e,t)=>{const i=new Intl.DateTimeFormat(e,Object.assign({},t));return e=>i.format(e)}),relativetime:i((e,t)=>{const i=new Intl.RelativeTimeFormat(e,Object.assign({},t));return e=>i.format(e,t.range||"day")}),list:i((e,t)=>{const i=new Intl.ListFormat(e,Object.assign({},t));return e=>i.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=cs(t)}format(e,t,i,n={}){const s=t.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(e=>e.indexOf(")")>-1)){const e=s.findIndex(e=>e.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,e)].join(this.formatSeparator)}const r=s.reduce((e,t)=>{const{formatName:s,formatOptions:r}=ls(t);if(this.formats[s]){let t=e;try{var o;const a=(null==n||null===(o=n.formatParams)||void 0===o?void 0:o[n.interpolationkey])||{},l=a.locale||a.lng||n.locale||n.lng||i;t=this.formats[s](e,l,Object.assign(Object.assign(Object.assign({},r),n),a))}catch(e){this.logger.warn(e)}return t}return this.logger.warn(`there was no format function for ${s}`),e},e);return r}}const hs=(e,t)=>{void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)};class us extends Wn{constructor(e,t,i,n={}){var s,r;super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=n,this.logger=Vn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],null===(s=this.backend)||void 0===s||null===(r=s.init)||void 0===r||r.call(s,i,n.backend,n)}queueLoad(e,t,i,n){const s={},r={},o={},a={};return e.forEach(e=>{let n=!0;t.forEach(t=>{const o=`${e}|${t}`;!i.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(1===this.state[o]?void 0===r[o]&&(r[o]=!0):(this.state[o]=1,n=!1,void 0===r[o]&&(r[o]=!0),void 0===s[o]&&(s[o]=!0),void 0===a[t]&&(a[t]=!0)))}),n||(o[e]=!0)}),(Object.keys(s).length||Object.keys(r).length)&&this.queue.push({pending:r,pendingCount:Object.keys(r).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(s),pending:Object.keys(r),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(a)}}loaded(e,t,i){const n=e.split("|"),s=n[0],r=n[1];t&&this.emit("failedLoading",s,r,t),!t&&i&&this.store.addResourceBundle(s,r,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(i=>{Tn(i.loaded,[s],r),hs(i,e),t&&i.errors.push(t),0!==i.pendingCount||i.done||(Object.keys(i.loaded).forEach(e=>{o[e]||(o[e]={});const t=i.loaded[e];t.length&&t.forEach(t=>{void 0===o[e][t]&&(o[e][t]=!0)})}),i.done=!0,i.errors.length?i.callback(i.errors):i.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,i,n=0,s=this.retryTimeout,r){if(!e.length)return r(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:i,tried:n,wait:s,callback:r});this.readingCalls++;const o=(o,a)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}o&&a&&n<this.maxRetries?setTimeout(()=>{this.read.call(this,e,t,i,n+1,2*s,r)},s):r(o,a)},a=this.backend[i].bind(this.backend);if(2!==a.length)return a(e,t,o);try{const i=a(e,t);i&&"function"==typeof i.then?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}}prepareLoading(e,t,i={},n){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();wn(e)&&(e=this.languageUtils.toResolveHierarchy(e)),wn(t)&&(t=[t]);const s=this.queueLoad(e,t,i,n);if(!s.toLoad.length)return s.pending.length||n(),null;s.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e,t=""){const i=e.split("|"),n=i[0],s=i[1];this.read(n,s,"read",void 0,void 0,(i,r)=>{i&&this.logger.warn(`${t}loading namespace ${s} for language ${n} failed`,i),!i&&r&&this.logger.log(`${t}loaded namespace ${s} for language ${n}`,r),this.loaded(e,i,r)})}saveMissing(e,t,i,n,s,r={},o=()=>{}){var a,l,c;if(null===(a=this.services)||void 0===a||null===(a=a.utils)||void 0===a||!a.hasLoadedNamespace||null!==(l=this.services)&&void 0!==l&&null!==(l=l.utils)&&void 0!==l&&l.hasLoadedNamespace(t)){if(null!=i&&""!==i){if(null!==(c=this.backend)&&void 0!==c&&c.create){const a=Object.assign(Object.assign({},r),{},{isUpdate:s}),l=this.backend.create.bind(this.backend);if(l.length<6)try{let s;s=5===l.length?l(e,t,i,n,a):l(e,t,i,n),s&&"function"==typeof s.then?s.then(e=>o(null,e)).catch(o):o(null,s)}catch(e){o(e)}else l(e,t,i,n,o,a)}e&&e[0]&&this.store.addResource(e[0],t,i,n)}}else this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")}}const gs=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if("object"==typeof e[1]&&(t=e[1]),wn(e[1])&&(t.defaultValue=e[1]),wn(e[2])&&(t.tDescription=e[2]),"object"==typeof e[2]||"object"==typeof e[3]){const i=e[3]||e[2];Object.keys(i).forEach(e=>{t[e]=i[e]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),fs=e=>{var t,i;return wn(e.ns)&&(e.ns=[e.ns]),wn(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),wn(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),(null===(t=e.supportedLngs)||void 0===t||null===(i=t.indexOf)||void 0===i?void 0:i.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),"boolean"==typeof e.initImmediate&&(e.initAsync=e.initImmediate),e},ms=()=>{},bs=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{"function"==typeof e[t]&&(e[t]=e[t].bind(e))})};class vs extends Wn{constructor(e={},t){if(super(),this.options=fs(e),this.services={},this.logger=Vn,this.modules={external:[]},bs(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,"function"==typeof e&&(t=e,e={}),null==e.defaultNS&&e.ns&&(wn(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const i=gs();this.options=Object.assign(Object.assign(Object.assign({},i),this.options),fs(e)),this.options.interpolation=Object.assign(Object.assign({},i.interpolation),this.options.interpolation),void 0!==e.keySeparator&&(this.options.userDefinedKeySeparator=e.keySeparator),void 0!==e.nsSeparator&&(this.options.userDefinedNsSeparator=e.nsSeparator),"function"!=typeof this.options.overloadTranslationOptionHandler&&(this.options.overloadTranslationOptionHandler=i.overloadTranslationOptionHandler);const n=e=>e?"function"==typeof e?new e:e:null;if(!this.options.isClone){let e;this.modules.logger?Vn.init(n(this.modules.logger),this.options):Vn.init(null,this.options),e=this.modules.formatter?this.modules.formatter:ps;const t=new ts(this.options);this.store=new Gn(this.options.resources,this.options);const s=this.services;s.logger=Vn,s.resourceStore=this.store,s.languageUtils=t,s.pluralResolver=new ss(t,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix});this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),!e||this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format||(s.formatter=n(e),s.formatter.init&&s.formatter.init(s,this.options),this.options.interpolation.format=s.formatter.format.bind(s.formatter)),s.interpolator=new as(this.options),s.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},s.backendConnector=new us(n(this.modules.backend),s.resourceStore,s,this.options),s.backendConnector.on("*",(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(s.languageDetector=n(this.modules.languageDetector),s.languageDetector.init&&s.languageDetector.init(s,this.options.detection,this.options)),this.modules.i18nFormat&&(s.i18nFormat=n(this.modules.i18nFormat),s.i18nFormat.init&&s.i18nFormat.init(this)),this.translator=new es(this.services,this.options),this.translator.on("*",(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||(t=ms),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(e=>{this[e]=(...t)=>this.store[e](...t)});["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});const s=xn(),r=()=>{const e=(e,i)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),s.resolve(i),t(e,i)};if(this.languages&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?r():setTimeout(r,0),s}loadResources(e,t=ms){let i=t;const n=wn(e)?e:this.language;if("function"==typeof e&&(i=e),!this.options.resources||this.options.partialBundledLanguages){var s,r;if("cimode"===(null==n?void 0:n.toLowerCase())&&(!this.options.preload||0===this.options.preload.length))return i();const e=[],t=t=>{if(!t)return;if("cimode"===t)return;this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{"cimode"!==t&&e.indexOf(t)<0&&e.push(t)})};if(n)t(n);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e))}null===(s=this.options.preload)||void 0===s||null===(r=s.forEach)||void 0===r||r.call(s,e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),i(e)})}else i(null)}reloadResources(e,t,i){const n=xn();return"function"==typeof e&&(i=e,e=void 0),"function"==typeof t&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=ms),this.services.backendConnector.reload(e,t,e=>{n.resolve(),i(e)}),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&Yn.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1)){for(let e=0;e<this.languages.length;e++){const t=this.languages[e];if(!(["cimode","dev"].indexOf(t)>-1)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const i=xn();this.emit("languageChanging",e);const n=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},s=(s,r)=>{r?this.isLanguageChangingTo===e&&(n(r),this.translator.changeLanguage(r),this.isLanguageChangingTo=void 0,this.emit("languageChanged",r),this.logger.log("languageChanged",r)):this.isLanguageChangingTo=void 0,i.resolve((...e)=>this.t(...e)),t&&t(s,(...e)=>this.t(...e))},r=t=>{e||t||!this.services.languageDetector||(t=[]);const i=wn(t)?t:t&&t[0],r=this.store.hasLanguageSomeTranslations(i)?i:this.services.languageUtils.getBestMatchFromCodes(wn(t)?[t]:t);var o,a;r&&(this.language||n(r),this.translator.language||this.translator.changeLanguage(r),null===(o=this.services.languageDetector)||void 0===o||null===(a=o.cacheUserLanguage)||void 0===a||a.call(o,r));this.loadResources(r,e=>{s(e,r)})};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(r):this.services.languageDetector.detect(r):r(e):r(this.services.languageDetector.detect()),i}getFixedT(e,t,i){const n=(e,t,...s)=>{let r;r="object"!=typeof t?this.options.overloadTranslationOptionHandler([e,t].concat(s)):Object.assign({},t),r.lng=r.lng||n.lng,r.lngs=r.lngs||n.lngs,r.ns=r.ns||n.ns,""!==r.keyPrefix&&(r.keyPrefix=r.keyPrefix||i||n.keyPrefix);const o=this.options.keySeparator||".";let a;return r.keyPrefix&&Array.isArray(e)?a=e.map(e=>("function"==typeof e&&(e=Jn(e,Object.assign(Object.assign({},this.options),t))),`${r.keyPrefix}${o}${e}`)):("function"==typeof e&&(e=Jn(e,Object.assign(Object.assign({},this.options),t))),a=r.keyPrefix?`${r.keyPrefix}${o}${e}`:e),this.t(a,r)};return wn(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(...e){var t;return null===(t=this.translator)||void 0===t?void 0:t.translate(...e)}exists(...e){var t;return null===(t=this.translator)||void 0===t?void 0:t.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],n=!!this.options&&this.options.fallbackLng,s=this.languages[this.languages.length-1];if("cimode"===i.toLowerCase())return!0;const r=(e,t)=>{const i=this.services.backendConnector.state[`${e}|${t}`];return-1===i||0===i||2===i};if(t.precheck){const e=t.precheck(this,r);if(void 0!==e)return e}return!!this.hasResourceBundle(i,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!r(i,e)||n&&!r(s,e)))}loadNamespaces(e,t){const i=xn();return this.options.ns?(wn(e)&&(e=[e]),e.forEach(e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}),this.loadResources(e=>{i.resolve(),t&&t(e)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=xn();wn(e)&&(e=[e]);const n=this.options.preload||[],s=e.filter(e=>n.indexOf(e)<0&&this.services.languageUtils.isSupportedCode(e));return s.length?(this.options.preload=n.concat(s),this.loadResources(e=>{i.resolve(),t&&t(e)}),i):(t&&t(),Promise.resolve())}dir(e){var t,i;if(e||(e=this.resolvedLanguage||((null===(t=this.languages)||void 0===t?void 0:t.length)>0?this.languages[0]:this.language)),!e)return"rtl";try{const t=new Intl.Locale(e);if(t&&t.getTextInfo){const e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch(e){}const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=(null===(i=this.services)||void 0===i?void 0:i.languageUtils)||new ts(gs());return e.toLowerCase().indexOf("-latn")>1?"ltr":n.indexOf(s.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){const i=new vs(e,t);return i.createInstance=vs.createInstance,i}cloneInstance(e={},t=ms){const i=e.forkResourceStore;i&&delete e.forkResourceStore;const n=Object.assign(Object.assign(Object.assign({},this.options),e),{isClone:!0}),s=new vs(n);void 0===e.debug&&void 0===e.prefix||(s.logger=s.logger.clone(e));if(["store","services","language"].forEach(e=>{s[e]=this[e]}),s.services=Object.assign({},this.services),s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},i){const e=Object.keys(this.store.data).reduce((e,t)=>(e[t]=Object.assign({},this.store.data[t]),e[t]=Object.keys(e[t]).reduce((i,n)=>(i[n]=Object.assign({},e[t][n]),i),e[t]),e),{});s.store=new Gn(e,n),s.services.resourceStore=s.store}return e.interpolation&&(s.services.interpolator=new as(n)),s.translator=new es(s.services,n),s.translator.on("*",(e,...t)=>{s.emit(e,...t)}),s.init(n,t),s.translator.options=n,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ys=vs.createInstance();ys.createInstance,ys.dir,ys.init,ys.loadResources,ys.reloadResources,ys.use,ys.changeLanguage,ys.getFixedT,ys.t,ys.exists,ys.setDefaultNamespace,ys.hasLoadedNamespace,ys.loadNamespaces,ys.loadLanguages;const{slice:_s,forEach:ws}=[];function xs(e){return ws.call(_s.call(arguments,1),t=>{if(t)for(const i in t)void 0===e[i]&&(e[i]=t[i])}),e}function ks(e){if("string"!=typeof e)return!1;return[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(e))}const As=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Ss=function(e,t){const i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{path:"/"};let n=`${e}=${encodeURIComponent(t)}`;if(i.maxAge>0){const e=i.maxAge-0;if(Number.isNaN(e))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(e)}`}if(i.domain){if(!As.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!As.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite){switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i.partitioned&&(n+="; Partitioned"),n},$s={create(e,t,i,n){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};i&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+60*i*1e3)),n&&(s.domain=n),document.cookie=Ss(e,t,s)},read(e){const t=`${e}=`,i=document.cookie.split(";");for(let e=0;e<i.length;e++){let n=i[e];for(;" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var Es={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&"undefined"!=typeof document)return $s.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:i,cookieMinutes:n,cookieDomain:s,cookieOptions:r}=t;i&&"undefined"!=typeof document&&$s.create(i,e,n,s,r)}},Os={name:"querystring",lookup(e){let t,{lookupQuerystring:i}=e;if("undefined"!=typeof window){var n;let{search:e}=window.location;!window.location.search&&(null===(n=window.location.hash)||void 0===n?void 0:n.indexOf("?"))>-1&&(e=window.location.hash.substring(window.location.hash.indexOf("?")));const s=e.substring(1).split("&");for(let e=0;e<s.length;e++){const n=s[e].indexOf("=");if(n>0){s[e].substring(0,n)===i&&(t=s[e].substring(n+1))}}}return t}},Cs={name:"hash",lookup(e){let t,{lookupHash:i,lookupFromHashIndex:n}=e;if("undefined"!=typeof window){const{hash:e}=window.location;if(e&&e.length>2){const r=e.substring(1);if(i){const e=r.split("&");for(let n=0;n<e.length;n++){const s=e[n].indexOf("=");if(s>0){e[n].substring(0,s)===i&&(t=e[n].substring(s+1))}}}if(t)return t;if(!t&&n>-1){var s;const t=e.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(t))return;return null===(s=t["number"==typeof n?n:0])||void 0===s?void 0:s.replace("/","")}}}return t}};let Ts=null;const Is=()=>{if(null!==Ts)return Ts;try{if(Ts="undefined"!=typeof window&&null!==window.localStorage,!Ts)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(e){Ts=!1}return Ts};var Ls={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&Is())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:i}=t;i&&Is()&&window.localStorage.setItem(i,e)}};let Rs=null;const js=()=>{if(null!==Rs)return Rs;try{if(Rs="undefined"!=typeof window&&null!==window.sessionStorage,!Rs)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(e){Rs=!1}return Rs};var Ns={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&js())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:i}=t;i&&js()&&window.sessionStorage.setItem(i,e)}},Ps={name:"navigator",lookup(e){const t=[];if("undefined"!=typeof navigator){const{languages:e,userLanguage:i,language:n}=navigator;if(e)for(let i=0;i<e.length;i++)t.push(e[i]);i&&t.push(i),n&&t.push(n)}return t.length>0?t:void 0}},Ds={name:"htmlTag",lookup(e){let t,{htmlTag:i}=e;const n=i||("undefined"!=typeof document?document.documentElement:null);return n&&"function"==typeof n.getAttribute&&(t=n.getAttribute("lang")),t}},Fs={name:"path",lookup(e){var t;let{lookupFromPathIndex:i}=e;if("undefined"==typeof window)return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(n))return;return null===(t=n["number"==typeof i?i:0])||void 0===t?void 0:t.replace("/","")}},Bs={name:"subdomain",lookup(e){var t;let{lookupFromSubdomainIndex:i}=e;const n="number"==typeof i?i+1:1,s="undefined"!=typeof window&&(null===(t=window.location)||void 0===t||null===(t=t.hostname)||void 0===t?void 0:t.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(s)return s[n]}};let Ms=!1;try{document.cookie,Ms=!0}catch(Dp){}const qs=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Ms||qs.splice(1,1);const zs=()=>({order:qs,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class Us{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{languageUtils:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=xs(t,this.options||{},zs()),"string"==typeof this.options.convertDetectedLanguage&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=e=>e.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(Es),this.addDetector(Os),this.addDetector(Ls),this.addDetector(Ns),this.addDetector(Ps),this.addDetector(Ds),this.addDetector(Fs),this.addDetector(Bs),this.addDetector(Cs)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.order,t=[];return e.forEach(e=>{if(this.detectors[e]){let i=this.detectors[e].lookup(this.options);i&&"string"==typeof i&&(i=[i]),i&&(t=t.concat(i))}}),t=t.filter(e=>null!=e&&!ks(e)).map(e=>this.options.convertDetectedLanguage(e)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)}))}}function Hs(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Vs(e){return Vs="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vs(e)}function Ws(e,t){if("object"!=Vs(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t);if("object"!=Vs(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Gs(e){var t=Ws(e,"string");return"symbol"==Vs(t)?t:t+""}function Ys(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Gs(n.key),n)}}function Qs(e,t,i){return t&&Ys(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ks(e,t,i){return(t=Gs(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Us.type="languageDetector";var Js=[],Zs=Js.forEach,Xs=Js.slice;function er(e){return Zs.call(Xs.call(arguments,1),function(t){if(t)for(var i in t)void 0===e[i]&&(e[i]=t[i])}),e}function tr(e,t){if(t&&"object"===Vs(t)){var i="",n=encodeURIComponent;for(var s in t)i+="&"+n(s)+"="+n(t[s]);if(!i)return e;e=e+(-1!==e.indexOf("?")?"&":"?")+i.slice(1)}return e}function ir(e,t,i,n,s){n&&"object"===Vs(n)&&(s||(n._t=new Date),n=tr("",n).slice(1)),t.queryStringParams&&(e=tr(e,t.queryStringParams));try{var r;(r=XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0")).open(n?"POST":"GET",e,1),t.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!t.withCredentials,n&&r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");var o=t.customHeaders;if(o="function"==typeof o?o():o)for(var a in o)r.setRequestHeader(a,o[a]);r.onreadystatechange=function(){r.readyState>3&&i&&i(r.responseText,r)},r.send(n)}catch(e){console&&console.log(e)}}function nr(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:JSON.parse,parsePayload:function(e,t,i){return Ks({},t,i||"")},crossDomain:!1,ajax:ir}}var sr=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Hs(this,e),this.init(t,i),this.type="backend"}return Qs(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.services=e,this.options=er(t,this.options||{},nr())}},{key:"readMulti",value:function(e,t,i){var n=this.options.loadPath;"function"==typeof this.options.loadPath&&(n=this.options.loadPath(e,t));var s=this.services.interpolator.interpolate(n,{lng:e.join("+"),ns:t.join("+")});this.loadUrl(s,i)}},{key:"read",value:function(e,t,i){var n=this.options.loadPath;"function"==typeof this.options.loadPath&&(n=this.options.loadPath([e],[t]));var s=this.services.interpolator.interpolate(n,{lng:e,ns:t});this.loadUrl(s,i)}},{key:"loadUrl",value:function(e,t){var i=this;this.options.ajax(e,this.options,function(n,s){if(s.status>=500&&s.status<600)return t("failed loading "+e,!0);if(s.status>=400&&s.status<500)return t("failed loading "+e,!1);var r,o;try{r=i.options.parse(n,e)}catch(t){o="failed parsing "+e+" to json"}if(o)return t(o,!1);t(null,r)})}},{key:"create",value:function(e,t,i,n){var s=this;"string"==typeof e&&(e=[e]);var r=this.options.parsePayload(t,i,n);e.forEach(function(e){var i=s.services.interpolator.interpolate(s.options.addPath,{lng:e,ns:t});s.options.ajax(i,s.options,function(e,t){},r)})}}]),e}();sr.type="backend";var rr=[],or=rr.forEach,ar=rr.slice;function lr(e){return or.call(ar.call(arguments,1),function(t){if(t)for(var i in t)void 0===e[i]&&(e[i]=t[i])}),e}function cr(e){return e?"function"==typeof e?new e:e:null}function dr(){return{handleEmptyResourcesAsFailed:!0,cacheHitMode:"none"}}function pr(e,t,i,n){var s=e.read.bind(e);if(2!==s.length)s(t,i,n);else try{var r=s(t,i);r&&"function"==typeof r.then?r.then(function(e){return n(null,e)}).catch(n):n(null,r)}catch(e){n(e)}}var hr=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Hs(this,e),this.backends=[],this.type="backend",this.allOptions=n,this.init(t,i)}return Qs(e,[{key:"init",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=lr(i,this.options||{},dr()),this.allOptions=n,this.options.backends&&this.options.backends.forEach(function(i,s){t.backends[s]=t.backends[s]||cr(i),t.backends[s].init(e,t.options.backendOptions&&t.options.backendOptions[s]||{},n)}),this.services&&this.options.reloadInterval&&setInterval(function(){return t.reload()},this.options.reloadInterval)}},{key:"read",value:function(e,t,i){var n=this,s=this.backends.length,r=function r(a){if(a>=s)return i(new Error("non of the backend loaded data",!0));var l=a===s-1,c=n.options.handleEmptyResourcesAsFailed&&!l?0:-1,d=n.backends[a];d.read?pr(d,e,t,function(s,l,p){if(!s&&l&&Object.keys(l).length>c){if(i(null,l,a),o(a-1,l),d.save&&n.options.cacheHitMode&&["refresh","refreshAndUpdateStore"].indexOf(n.options.cacheHitMode)>-1){if(p&&n.options.refreshExpirationTime&&p+n.options.refreshExpirationTime>Date.now())return;var h=n.backends[a+1];h&&h.read&&pr(h,e,t,function(i,s){i||s&&(Object.keys(s).length<=c||(o(a,s),"refreshAndUpdateStore"===n.options.cacheHitMode&&n.services&&n.services.resourceStore&&n.services.resourceStore.addResourceBundle(e,t,s)))})}}else r(a+1)}):r(a+1)},o=function i(s,r){if(!(s<0)){var o=n.backends[s];o.save?(o.save(e,t,r),i(s-1,r)):i(s-1,r)}};r(0)}},{key:"create",value:function(e,t,i,n){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.backends.forEach(function(o){if(o.create){var a=o.create.bind(o);if(a.length<6)try{var l;(l=5===a.length?a(e,t,i,n,r):a(e,t,i,n))&&"function"==typeof l.then?l.then(function(e){return s(null,e)}).catch(s):s(null,l)}catch(e){s(e)}else a(e,t,i,n,s,r)}})}},{key:"reload",value:function(){var e=this,t=this.services,i=t.backendConnector,n=t.languageUtils,s=t.logger,r=i.language;if(!r||"cimode"!==r.toLowerCase()){var o=[],a=function(e){n.toResolveHierarchy(e).forEach(function(e){o.indexOf(e)<0&&o.push(e)})};a(r),this.allOptions.preload&&this.allOptions.preload.forEach(function(e){return a(e)}),o.forEach(function(t){e.allOptions.ns.forEach(function(e){i.read(t,e,"read",null,null,function(n,r){n&&s.warn("loading namespace ".concat(e," for language ").concat(t," failed"),n),!n&&r&&s.log("loaded namespace ".concat(e," for language ").concat(t),r),i.loaded("".concat(t,"|").concat(e),n,r)})})})}}}]),e}();let ur;hr.type="backend";class gr extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{appRoot:{type:String,attribute:"app-root"},urlTemplate:{type:String,attribute:"url-template"},urlIgnore:{type:String,attribute:"url-ignore"},urlPath:{type:String,attribute:"url-path"},idHash:{type:Boolean,attribute:"id-hash"},template:{type:String},endpoint:{type:String,reflect:!0},apiVersion:{type:String,attribute:"api-version",reflect:!0},locales:{type:String},localeFallbackNs:{type:String,attribute:"locale-fallback-ns"},supportedLanguages:{type:Array,attribute:"supported-languages",converter:e=>e.split(/\s*,\s*/)},fallbackLanguage:{type:String,attribute:"fallback-language"},language:{type:String},requireLanguage:{type:Boolean,attribute:"require-language"},unresolved:{type:Boolean,reflect:!0},theme:{type:String}})}constructor(){super(),this.unresolved=!0,this.endpoint=".",this.urlTemplate=null,this.urlIgnore=null,this.urlPath="path",this.idHash=!1,this.apiVersion=void 0,this.requireLanguage=!1,this.supportedLanguages=null,this.fallbackLanguage="en",this.theme=null,this._localeFallbacks=[],this._i18nInstance=null,ur?this.disabled=!0:(ur=this,c())}get localeFallbackNs(){return this._localeFallbacks&&this._localeFallbacks.length?this._localeFallbacks.join(" "):""}set localeFallbackNs(e){const t=(e||"").split(/\s+/).map(e=>e.trim()).filter(Boolean),i=new Set;this._localeFallbacks=t.filter(e=>!i.has(e)&&(i.add(e),!0))}disconnectedCallback(){super.disconnectedCallback(),this._i18nInstance=null,ur===this&&(ur=null)}async connectedCallback(){if(super.connectedCallback(),this.disabled)return;const e=this.getAttribute("endpoint");e&&(this.endpoint=e),y.configure("path"===this.urlPath,this.idHash,this.appRoot,this.urlTemplate,this.urlIgnore),this.endpoint=this.endpoint.replace(/\/+$/,"");const t=y.state._target;t&&(this.endpoint=t);const i=y.state._api;i&&(this.apiVersion=i);const n=[];if(this.theme?n.push(this.toAbsoluteURL(this.theme,this.endpoint)):n.push("components.css"),console.log("<pb-page> Loading component theme stylesheets from %s",n.join(", ")),this._themeSheet=await b(n),!this.apiVersion){const e=await fetch(`${this.endpoint}/login`).then(e=>e.ok?null:fetch(`${this.endpoint}/api/version`).then(e=>e.json())).catch(()=>fetch(`${this.endpoint}/api/version`).then(e=>e.json()));e?(this.apiVersion=e.api,console.log(`<pb-page> Server reports API version ${this.apiVersion} with app ${e.app.name}/${e.app.version} running on ${e.engine.name}/${e.engine.version}`)):(console.log("<pb-page> No API version reported by server, assuming 0.9.0"),this.apiVersion="0.9.0")}this.requireLanguage||this.signalReady("pb-page-ready",{endpoint:this.endpoint,template:this.template,apiVersion:this.apiVersion})}firstUpdated(){if(super.firstUpdated(),this.disabled)return;this.shadowRoot.querySelector("slot").addEventListener("slotchange",()=>{const e=new CustomEvent("pb-page-loaded",{bubbles:!0,composed:!0});this.dispatchEvent(e)},{once:!0});const e=this.endpoint?`${this.toAbsoluteURL("resources/i18n/",this.endpoint)}{{ns}}/{{lng}}.json`:`${r("../i18n/")}{{ns}}/{{lng}}.json`;console.log("<pb-page> Loading locales. common: %s; additional: %s; namespaces: %o",e,this.locales,this._localeFallbacks);const t=this.locales?[sr,sr]:[sr],i=[{loadPath:e,crossDomain:!0}];this.locales&&i.unshift({loadPath:this.locales,crossDomain:!0});const n={fallbackLng:this.fallbackLanguage,defaultNS:"common",ns:["common"],debug:!1,load:"languageOnly",detection:{lookupQuerystring:"lang"},backend:{backends:t,backendOptions:i}};if(this.language&&(n.lng=this.language),console.log("supported langs: %o",this.supportedLanguages),this.supportedLanguages&&(n.supportedLngs=this.supportedLanguages),this._localeFallbacks.length>0){const e=this._localeFallbacks.slice();n.defaultNS=e[0],n.fallbackNS=e.slice(1),n.ns=e}console.log("<pb-page> i18next options: %o",n),this._i18nInstance=ys.createInstance(),this._i18nInstance.use(Us).use(hr),this._i18nInstance.init(n).then(e=>{var t,i;(g(e),this._updateI18n(e),this.signalReady("pb-i18n-update",{t:e,language:null===(t=this._i18nInstance)||void 0===t?void 0:t.language}),this.requireLanguage)&&this.signalReady("pb-page-ready",{endpoint:this.endpoint,apiVersion:this.apiVersion,template:this.template,language:null===(i=this._i18nInstance)||void 0===i?void 0:i.language})}),this.subscribeTo("pb-i18n-language",e=>{const{language:t}=e.detail;this._i18nInstance.changeLanguage(t).then(e=>{var t;this._updateI18n(e),this.emitTo("pb-i18n-update",{t:e,language:null===(t=this._i18nInstance)||void 0===t?void 0:t.language},[])},[])}),this.addEventListener("pb-global-toggle",this._toggleFeatures.bind(this)),this.removeAttribute("unresolved"),console.log("<pb-page> endpoint: %s; trigger window resize",this.endpoint),this.querySelectorAll("app-header").forEach(e=>{"function"==typeof e._notifyLayoutChanged&&e._notifyLayoutChanged()}),gn(this)}_updateI18n(e){this.querySelectorAll("[data-i18n]").forEach(t=>{const i=t.getAttribute("data-i18n"),n=/(?:\[([^\]]+)\])?([^;]+)/g;let s=n.exec(i);for(;s;){const r=e(s[2]);s[1]?t.setAttribute(s[1],r):t.innerHTML=r,s=n.exec(i)}})}get stylesheet(){return this._themeSheet}_toggleFeatures(e){const t=e.detail;this.querySelectorAll(t.selector).forEach(e=>{const i=t.command||"toggle";e.command&&e.command(i,t.state),t.state?e.classList.add(i):e.classList.remove(i)})}render(){return t`<slot></slot>`}static get styles(){return n`
      :host {
        display: block;
      }
    `}}customElements.define("pb-page",gr);class fr extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{total:{type:Number,reflect:!0},start:{type:Number,reflect:!0},perPage:{type:Number,attribute:"per-page"},foundLabel:{type:String,attribute:"found-label"},page:{type:Number},pageCount:{type:Number,attribute:"page-count"},range:{type:Number},pages:{type:Array},showPreviousNext:{type:Boolean,attribute:"show-previous-next"}})}constructor(){super(),this.total=0,this.start=1,this.perPage=10,this.page=1,this.pageCount=10,this.range=5,this.pages=[],this.foundLabel="browse.items"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-results-received",this._refresh.bind(this))}render(){return t`
      <button
        type="button"
        class="pb-paginate__nav"
        data-page="first"
        @click=${this._handleFirst}
        aria-label=${u("paginate.first")}
      >
        <pb-icon icon="chevron-left"></pb-icon>
      </button>
      ${this.pages.map((e,i)=>t`
          <button
            type="button"
            class="pb-paginate__page ${e.class}"
            @click=${()=>this._handleClick(e,i)}
            aria-current=${"active"===e.class?"page":d}
          >
            ${e.label}
          </button>
        `)}
      <button
        type="button"
        class="pb-paginate__nav"
        data-page="last"
        @click=${this._handleLast}
        aria-label=${u("paginate.last")}
      >
        <pb-icon icon="chevron-right"></pb-icon>
      </button>

      <span class="found" part="count">${u(this.foundLabel,{count:this.total})}</span>
    `}static get styles(){return n`
      :host([total='0']) {
        display: none;
      }

      :host {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .pb-paginate__nav,
      .pb-paginate__page {
        padding: 4px 8px;
        cursor: pointer;
        border: none;
        background: transparent;
        color: inherit;
        font: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .pb-paginate__page.active {
        background-color: var(--pb-color-primary);
        color: var(--pb-color-inverse);
        border-radius: 50%;
        min-width: fit-content;
        width: 1em;
        line-height: 1em;
        padding: 0.4em;
        text-align: center;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12),
          0 3px 3px -2px rgba(0, 0, 0, 0.4);
      }

      .pb-paginate__page:focus-visible,
      .pb-paginate__nav:focus-visible {
        outline: 2px solid var(--pb-color-primary);
        outline-offset: 2px;
      }

      .found {
        padding-left: 20px;
      }
    `}_update(e,t){if(!t||!e)return;this.pageCount=Math.ceil(t/this.perPage),this.page=Math.ceil(e/this.perPage);let i=Math.max(this.page-Math.ceil(this.range/2)+1,1);const n=Math.min(i+this.range-1,this.pageCount);i=Math.max(n-this.range+1,1),console.log("<pb-paginate> start: %d, total: %d, perPage: %d, pageCount: %s, page: %d, lower: %d, upper: %d, range: %d, show-previous-next: %s",e,t,this.perPage,this.pageCount,this.page,i,n,this.range,this.showPreviousNext);const s=[],r=[];for(let e=i;e<=n;e++)s.push({label:e,class:e===this.page?"active":""}),this.showPreviousNext&&(1===i&&1===e&&this.page===e&&r.push({label:e,index:0}),e+1===this.page&&r.push({label:e,index:s.length-1}),e-1===this.page&&r.push({label:e,index:s.length-1}));this.pages=s,this.prevNextPages=r}_refresh(e){this.start=Number(e.detail.start),this.total=e.detail.count,this._update(this.start,this.total)}_handleClick(e,t){this.start=(this.pages[t].label-1)*this.perPage+1;for(const e of["pb-load","pb-paginate"])this.emitTo(e,{params:{start:this.start,"per-page":this.perPage,page:t}})}_handleFirst(){this.start=1;for(const e of["pb-load","pb-paginate"])this.emitTo(e,{params:{start:1,"per-page":this.perPage,page:0}})}_handleLast(){this.start=(this.pageCount-1)*this.perPage+1;for(const e of["pb-load","pb-paginate"])this.emitTo(e,{params:{start:this.start,"per-page":this.perPage,page:this.pageCount-1}})}}customElements.define("pb-paginate",fr);class mr extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{_disabled:{type:Boolean}})}constructor(){super(),this._disabled=!0}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-start-update",this._startUpdate.bind(this)),this.subscribeTo("pb-end-update",this._endUpdate.bind(this))}render(){return this.style.visibility=this._disabled?"hidden":"visible",t` <progress id="progress" indeterminate ?disabled="${this._disabled}"></progress> `}static get styles(){return n`
      :host {
        display: block;
        visibility: hidden;
      }

      progress {
        width: 100%;
      }
    `}_startUpdate(){this._disabled=!1}_endUpdate(){this._disabled=!0}}customElements.define("pb-progress",mr);class br extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{action:{type:String},name:{type:String},value:{type:String},start:{type:Number},placeHolder:{type:String,attribute:"place-holder"},redirect:{type:Boolean},currentDoc:{type:String,attribute:"current-doc"},submitOnLoad:{type:Boolean,attribute:"submit-on-load"},subforms:{type:String},disableAutocomplete:{type:Boolean,attribute:"disable-autocomplete"},source:{type:String}})}constructor(){super(),this.name="query",this.value="",this.redirect=!1,this.submitOnLoad=!1,this.placeHolder="search.placeholder",this.disableAutocomplete=!1,this.start=1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-search-resubmit",this._doSearch.bind(this)),this.subscribeTo("pb-paginate",e=>{this.start=e.detail.params.start,this._doSearch(!0)}),y.subscribe(this,e=>{this.value=e.query||"",this.start=e.start||1,this.submitOnLoad&&this.emitTo("pb-load",{url:this.action,params:e})})}firstUpdated(){if(a("pb-page-ready",e=>{const t=this.shadowRoot.getElementById("autocompleteLoader"),i=this.source||"api/search/autocomplete";this.minApiVersion("1.0.0")?t.url=`${e.endpoint}/${i}`:t.url=`${e.endpoint}/modules/autocomplete.xql`}),this.submitOnLoad){const e=y.state;y.replace(this,e),this.emitTo("pb-load",{url:this.action,params:e})}this.addEventListener("click",e=>{const t=e.target.closest("[slot]");t&&("searchButton"===t.slot&&this._doSearch(),"resetButton"===t.slot&&this._reset())})}render(){return t`
      <form
        id="searchPageForm"
        method="get"
        action="${this.action}"
        accept="text/html"
        @submit="${this._handleSubmit}"
      >
        <slot name="beforeInput"></slot>
        <div class="input-wrapper">
          <input
            id="search"
            name="query"
            type="search"
            placeholder="${u(this.placeHolder)}"
            .value="${this.value}"
            @keyup="${this._handleEnter}"
            list="suggestions"
            part="input"
          />
          <datalist id="suggestions"></datalist>
          <slot name="searchButton" part="search-button"></slot>
          <slot name="resetButton"></slot>
        </div>
        <slot></slot>
      </form>
      <pb-fetch
        id="autocompleteLoader"
        verbose
        handle-as="json"
        method="get"
        with-credentials
        @response="${this._updateSuggestions}"
      ></pb-fetch>
    `}static get styles(){return n`
      :host {
        display: inline-block;
      }
      .input-wrapper {
        display: flex;
        align-items: center;
      }
      #search {
        flex: 2;
      }
    `}_serializeForm(){const e=this.shadowRoot.getElementById("searchPageForm"),t=new FormData(e),i={};for(const[e,n]of t.entries())i[e]=n;return this.querySelectorAll("input, select, textarea").forEach(e=>{e.name&&"button"!==e.type&&"submit"!==e.type&&"reset"!==e.type&&("checkbox"===e.type||"radio"===e.type?e.checked&&(i[e.name]=e.value):i[e.name]=e.value)}),i}_doSearch(e=!1){let t=this._serializeForm();if(t=this._paramsFromSubforms(t),t.start=e?this.start:1,this.redirect){const e=new URLSearchParams;Object.keys(t).forEach(i=>{e.append(i,t[i])}),window.location.href=`${this.action}?${e}`}else y.commit(this,t),this.emitTo("pb-load",{url:this.action,params:t})}_handleSubmit(e){e.preventDefault(),this._doSearch()}_paramsFromSubforms(e){return this.subforms&&document.querySelectorAll(this.subforms).forEach(t=>{t.serializeForm&&Object.assign(e,t.serializeForm())}),e}_handleEnter(e){if(13===e.keyCode)return this._doSearch();const{value:t}=this.shadowRoot.getElementById("search");if(t.length>2){const e=this.shadowRoot.getElementById("autocompleteLoader");e.params={query:t},e.generateRequest()}}_doSubmit(){this._doSearch()}_reset(){this.shadowRoot.getElementById("searchPageForm").reset(),y.commit(this,{},!0)}_updateSuggestions(){const e=this.shadowRoot.getElementById("autocompleteLoader"),t=this.shadowRoot.getElementById("suggestions");e.lastResponse&&(t.innerHTML="",e.lastResponse.forEach(({text:e,value:i})=>{const n=document.createElement("option");n.value=i,n.innerText=e,t.appendChild(n)}))}}function vr(e,t){const i=t.findIndex(t=>t.selector===e.selector);i>-1?t[i]=e:t.push(e)}customElements.get("pb-search")||customElements.define("pb-search",br);class yr extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{name:{type:String},selector:{type:String},action:{type:String},on:{type:String},off:{type:String},default:{type:String},propertiesOn:{type:Object,attribute:"properties-on"},propertiesOff:{type:Object,attribute:"properties-off"},checked:{type:Boolean},initFromView:{type:Boolean,attribute:"init-from-view"},global:{type:Boolean}})}constructor(){super(),this.default="on",this.on="on",this.off="off",this.action="toggle",this.propertiesOn={},this.propertiesOff={},this.initFromView=!1,this.global=!1}render(){return t`
            <input type="checkbox" id="checkbox" @change="${this._changed}" .checked="${this.checked}" .disabled="${this.disabled}"></input>
            <label for="checkbox"><slot></slot></label>
        `}connectedCallback(){super.connectedCallback(),y.subscribe(this,e=>{const t=e[this.name];this._setChecked(t)});const e=y.state[this.name];this._setChecked(e);const t={};t[this.name]=this.checked?this.on:this.off,y.replace(this,t),this._saveState(),this.signalReady(),a("pb-page-ready",()=>{this.global?this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:{selector:this.selector,command:this.action,state:this.checked},bubbles:!0,composed:!0})):this.selector&&this.emitTo("pb-toggle",{refresh:!1})})}_setChecked(e){this.checked=void 0!==e?e===this.on:this.default===this.on}attributeChangedCallback(e,t,i){switch(super.attributeChangedCallback(e,t,i),e){case this.on:this.propertiesOn[this.name]=i;break;case this.off:this.propertiesOff[this.name]=i}}_changed(){if(this.checked=this.shadowRoot.getElementById("checkbox").checked,this._saveState(),this.global){const e={};e[this.name]=this.checked?this.on:this.off,y.commit(this,e)}else this.emitTo("pb-toggle",{refresh:!this.selector})}_saveState(){const e=y.getState(this);if(e[this.name]=this.checked?this.on:this.off,Object.assign(e,this.checked?this.propertiesOn:this.propertiesOff),this.selector){const t={selector:this.selector,command:this.action,state:this.checked};this.global?this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:t,bubbles:!0,composed:!0})):(e.selectors=e.selectors||[],vr(t,e.selectors))}}}customElements.define("pb-toggle-feature",yr);class _r extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{name:{type:String},label:{type:String},selected:{type:Number},items:{type:Array}})}constructor(){super(),this.initializing=!0,this.items=[],this.label="document.selectFeature"}connectedCallback(){super.connectedCallback(),y.subscribe(this,e=>{const t=e[this.name];this.selected=void 0!==t?parseInt(t,10):0,this.requestUpdate()});const e=y.state[this.name];void 0!==e?this.selected=parseInt(e,10):this.items.length>0&&(this.selected=0);const t={};t[this.name]=this.selected,y.replace(this,t),this.signalReady()}updated(e){super.updated(e),e.has("items")&&(Array.isArray(this.items)||(this.items=[]),("number"!=typeof this.selected||this.selected>=this.items.length)&&(this.selected=this.items.length>0?0:null))}_selectionChanged(e){const t=parseInt(e.target.value,10);if(Number.isNaN(t))return;this.selected=t;const i=this._saveState(t);this.initializing?this.initializing=!1:this.emitTo("pb-toggle",{refresh:i})}_saveState(e){const t=e,i=y.getState(this);i[this.name]=t,Object.assign(i,this.items[t].properties),this.items[t].selectors&&(i.selectors||(i.selectors=[]),this.items[t].selectors.forEach(e=>{e.global?(y.commit(this,i),this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:e,bubbles:!0,composed:!0}))):vr({selector:e.selector,state:e.state,command:e.command},i.selectors)}));const n=this.items[t];if(!n)return!1;const s=n.properties||{};return Object.assign(i,s),n.selectors&&(i.selectors||(i.selectors=[]),n.selectors.forEach(e=>{e.global?(y.commit(this,i),this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:e,bubbles:!0,composed:!0}))):vr({selector:e.selector,state:e.state,command:e.command},i.selectors)})),s&&"object"==typeof s}render(){const e=Array.isArray(this.items)?this.items:[];return t`
      <label class="pb-select-feature__label" for="feature-select">
        ${u(this.label)}
      </label>
      <select
        id="feature-select"
        class="pb-select-feature__select"
        name=${x(this.name||void 0)}
        .value=${null==this.selected?"":String(this.selected)}
        ?disabled=${this.disabled}
        @change=${this._selectionChanged}
      >
        ${e.map((e,i)=>t`<option value="${i}">${u(e.name)}</option>`)}
      </select>
    `}static get styles(){return n`
      :host {
        display: block;
      }
      .pb-select-feature__label {
        display: block;
        margin-bottom: 0.35rem;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.6);
      }

      .pb-select-feature__select {
        width: 100%;
        min-width: inherit;
        max-width: inherit;
        height: var(--pb-input-height, 48px);
        padding: 0.5rem 0.75rem;
        border: 1px solid rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        background: #fff;
        font: inherit;
        color: inherit;
        appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.4) 50%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.4) 50%, transparent 50%),
          linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
        background-position: calc(100% - 18px) calc(0.6em + 2px),
          calc(100% - 13px) calc(0.6em + 2px), calc(100% - 2.5rem) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 2.25em;
        background-repeat: no-repeat;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }

      .pb-select-feature__select:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }
    `}}customElements.define("pb-select-feature",_r);const wr="undefined"!=typeof window,xr=wr?window:null,kr=wr?document:null,Ar={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},Sr={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},$r={NONE:0,AUTO:1,FORCE:2},Er={replace:0,none:1,blend:2},Or=Symbol(),Cr=Symbol(),Tr=Symbol(),Ir=Symbol(),Lr=Symbol(),Rr=1e-11,jr=1e12,Nr=1e3,Pr=120,Dr="",Fr="var(",Br=(()=>{const e=new Map;return e.set("x","translateX"),e.set("y","translateY"),e.set("z","translateZ"),e})(),Mr=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","matrix","matrix3d","perspective"],qr=Mr.reduce((e,t)=>Object.assign(Object.assign({},e),{},{[t]:t+"("}),{}),zr=()=>{},Ur=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,Hr=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,Vr=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Wr=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,Gr=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Yr=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,Qr=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,Kr=/([a-z])([A-Z])/g,Jr=/(\w+)(\([^)]+\)+)/g,Zr=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/,Xr={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:Pr,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:Nr,delay:0,loopDelay:0,ease:"out(2)",composition:Er.replace,modifier:e=>e,onBegin:zr,onBeforeUpdate:zr,onUpdate:zr,onLoop:zr,onPause:zr,onComplete:zr,onRender:zr},eo={root:kr},to={defaults:Xr,precision:4,timeScale:1,tickThreshold:200},io={version:"4.2.2",engine:null};wr&&(xr.AnimeJS||(xr.AnimeJS=[]),xr.AnimeJS.push(io));const no=e=>e.replace(Kr,"$1-$2").toLowerCase(),so=(e,t)=>0===e.indexOf(t),ro=Date.now,oo=Array.isArray,ao=e=>e&&e.constructor===Object,lo=e=>"number"==typeof e&&!isNaN(e),co=e=>"string"==typeof e,po=e=>"function"==typeof e,ho=e=>void 0===e,uo=e=>ho(e)||null===e,go=e=>wr&&e instanceof SVGElement,fo=e=>Ur.test(e),mo=e=>so(e,"rgb"),bo=e=>so(e,"hsl"),vo=e=>fo(e)||mo(e)||bo(e),yo=e=>!to.defaults.hasOwnProperty(e),_o=["opacity","rotate","overflow","color"],wo=(e,t)=>{if(_o.includes(t))return!1;if(e.getAttribute(t)||t in e){if("scale"===t){const t=e.parentNode;return t&&"filter"===t.tagName}return!0}},xo=Math.pow,ko=Math.sqrt,Ao=Math.sin,So=Math.cos,$o=Math.floor,Eo=Math.asin,Oo=Math.PI,Co=Math.round,To=(e,t,i)=>e<t?t:e>i?i:e,Io={},Lo=(e,t)=>{if(t<0)return e;if(!t)return Co(e);let i=Io[t];return i||(i=Io[t]=10**t),Co(e*i)/i},Ro=(e,t,i)=>e+(t-e)*i,jo=e=>e===1/0?jr:e===-1/0?-jr:e,No=e=>e<=Rr?Rr:jo(Lo(e,11)),Po=e=>oo(e)?[...e]:e,Do=(e,t)=>{const i=Object.assign({},e);for(let n in t){const s=e[n];i[n]=ho(s)?t[n]:s}return i},Fo=(e,t,i,n="_prev",s="_next")=>{let r=e._head,o=s;for(i&&(r=e._tail,o=n);r;){const e=r[o];t(r),r=e}},Bo=(e,t,i="_prev",n="_next")=>{const s=t[i],r=t[n];s?s[n]=r:e._head=r,r?r[i]=s:e._tail=s,t[i]=null,t[n]=null},Mo=(e,t,i,n="_prev",s="_next")=>{let r=e._tail;for(;r&&i&&i(r,t);)r=r[n];const o=r?r[s]:e._head;r?r[s]=t:e._head=t,o?o[n]=t:e._tail=t,t[n]=r,t[s]=o},qo=(e,t,i)=>{const n=e.style.transform;let s;if(n){const r=e[Ir];let o;for(;o=Jr.exec(n);){const e=o[1],n=o[2].slice(1,-1);r[e]=n,e===t&&(s=n,i&&(i[t]=n))}}return n&&!ho(s)?s:so(t,"scale")?"1":so(t,"rotate")||so(t,"skew")?"0deg":"0px"},zo=e=>{const t=Hr.exec(e)||Vr.exec(e),i=ho(t[4])?1:+t[4];return[+t[1],+t[2],+t[3],i]},Uo=e=>{const t=e.length,i=4===t||5===t;return[+("0x"+e[1]+e[i?1:2]),+("0x"+e[i?2:3]+e[i?2:4]),+("0x"+e[i?3:5]+e[i?3:6]),5===t||9===t?+(+("0x"+e[i?4:7]+e[i?4:8])/255).toFixed(3):1]},Ho=(e,t,i)=>(i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e),Vo=e=>{const t=Wr.exec(e)||Gr.exec(e),i=+t[1]/360,n=+t[2]/100,s=+t[3]/100,r=ho(t[4])?1:+t[4];let o,a,l;if(0===n)o=a=l=s;else{const e=s<.5?s*(1+n):s+n-s*n,t=2*s-e;o=Lo(255*Ho(t,e,i+1/3),0),a=Lo(255*Ho(t,e,i),0),l=Lo(255*Ho(t,e,i-1/3),0)}return[o,a,l,r]},Wo=e=>mo(e)?zo(e):fo(e)?Uo(e):bo(e)?Vo(e):[0,0,0,1],Go=(e,t)=>ho(e)?t:e,Yo=(e,t,i,n,s)=>{let r;if(po(e))r=()=>{const s=e(t,i,n);return isNaN(+s)?s||0:+s};else{if(!co(e)||!so(e,Fr))return e;r=()=>{var i;const n=e.match(Zr),s=n[1],r=n[2];let o=null===(i=getComputedStyle(t))||void 0===i?void 0:i.getPropertyValue(s);return o&&o.trim()!==Dr||!r||(o=r.trim()),o||0}}return s&&(s.func=r),r()},Qo=(e,t)=>e[Cr]?e[Tr]&&wo(e,t)?Ar.ATTRIBUTE:Mr.includes(t)||Br.get(t)?Ar.TRANSFORM:so(t,"--")?Ar.CSS_VAR:t in e.style?Ar.CSS:t in e?Ar.OBJECT:Ar.ATTRIBUTE:Ar.OBJECT,Ko=(e,t,i)=>{const n=e.style[t];n&&i&&(i[t]=n);const s=n||getComputedStyle(e[Lr]||e).getPropertyValue(t);return"auto"===s?"0":s},Jo=(e,t,i,n)=>{const s=ho(i)?Qo(e,t):i;return s===Ar.OBJECT?e[t]||0:s===Ar.ATTRIBUTE?e.getAttribute(t):s===Ar.TRANSFORM?qo(e,t,n):s===Ar.CSS_VAR?Ko(e,t,n).trimStart():Ko(e,t,n)},Zo=(e,t,i)=>"-"===i?e-t:"+"===i?e+t:e*t,Xo=()=>({t:Sr.NUMBER,n:0,u:null,o:null,d:null,s:null}),ea=(e,t)=>{if(t.t=Sr.NUMBER,t.n=0,t.u=null,t.o=null,t.d=null,t.s=null,!e)return t;const i=+e;if(isNaN(i)){let i=e;"="===i[1]&&(t.o=i[0],i=i.slice(2));const n=!i.includes(" ")&&Qr.exec(i);if(n)return t.t=Sr.UNIT,t.n=+n[1],t.u=n[2],t;if(t.o)return t.n=+i,t;if(vo(i))return t.t=Sr.COLOR,t.d=Wo(i),t;{const e=i.match(Yr);return t.t=Sr.COMPLEX,t.d=e?e.map(Number):[],t.s=i.split(Yr)||[],t}}return t.n=i,t},ta=(e,t)=>(t.t=e._valueType,t.n=e._toNumber,t.u=e._unit,t.o=null,t.d=Po(e._toNumbers),t.s=Po(e._strings),t),ia=Xo(),na=(e,t,i,n,s)=>{const r=e.parent,o=e.duration,a=e.completed,l=e.iterationDuration,c=e.iterationCount,d=e._currentIteration,p=e._loopDelay,h=e._reversed,u=e._alternate,g=e._hasChildren,f=e._delay,m=e._currentTime,b=f+l,v=t-f,y=To(m,-f,o),_=To(v,-f,o),w=v-m,x=_>0,k=_>=o,A=o<=Rr,S=s===$r.FORCE;let $=0,E=v,O=0;if(c>1){const t=~~(_/(l+(k?0:p)));e._currentIteration=To(t,0,c),k&&e._currentIteration--,$=e._currentIteration%2,E=_%(l+p)||0}const C=h^(u&&$),T=e._ease;let I=k?C?0:o:C?l-E:E;T&&(I=l*T(I/l)||0);const L=(r?r.backwards:v<m)?!C:!!C;if(e._currentTime=v,e._iterationTime=I,e.backwards=L,x&&!e.began?(e.began=!0,i||r&&(L||!r.began)||e.onBegin(e)):v<=0&&(e.began=!1),i||g||!x||e._currentIteration===d||e.onLoop(e),S||s===$r.AUTO&&(t>=f&&t<=b||t<=f&&y>f||t>=b&&y!==o)||I>=b&&y!==o||I<=f&&y>0||t<=y&&y===o&&a||k&&!a&&A){if(x&&(e.computeDeltaTime(y),i||e.onBeforeUpdate(e)),!g){const t=S||(L?-1*w:w)>=to.tickThreshold,s=e._offset+(r?r._offset:0)+f+I;let o,a,l,c,d=e._head,p=0;for(;d;){const e=d._composition,i=d._currentTime,r=d._changeDuration,h=d._absoluteStartTime+d._changeDuration,u=d._nextRep,g=d._prevRep,f=e!==Er.none;if((t||(i!==r||s<=h+(u?u._delay:0))&&(0!==i||s>=d._absoluteStartTime))&&(!f||!d._isOverridden&&(!d._isOverlapped||s<=h)&&(!u||u._isOverridden||s<=u._absoluteStartTime)&&(!g||g._isOverridden||s>=g._absoluteStartTime+g._changeDuration+d._delay))){const t=d._currentTime=To(I-d._startTime,0,r),i=d._ease(t/d._updateDuration),s=d._modifier,h=d._valueType,u=d._tweenType,g=u===Ar.OBJECT,m=h===Sr.NUMBER,b=m&&g||0===i||1===i?-1:to.precision;let v,y;if(m)v=y=s(Lo(Ro(d._fromNumber,d._toNumber,i),b));else if(h===Sr.UNIT)y=s(Lo(Ro(d._fromNumber,d._toNumber,i),b)),v=`${y}${d._unit}`;else if(h===Sr.COLOR){const e=d._fromNumbers,t=d._toNumbers,n=Lo(To(s(Ro(e[0],t[0],i)),0,255),0),r=Lo(To(s(Ro(e[1],t[1],i)),0,255),0),o=Lo(To(s(Ro(e[2],t[2],i)),0,255),0),a=To(s(Lo(Ro(e[3],t[3],i),b)),0,1);if(v=`rgba(${n},${r},${o},${a})`,f){const e=d._numbers;e[0]=n,e[1]=r,e[2]=o,e[3]=a}}else if(h===Sr.COMPLEX){v=d._strings[0];for(let e=0,t=d._toNumbers.length;e<t;e++){const t=s(Lo(Ro(d._fromNumbers[e],d._toNumbers[e],i),b)),n=d._strings[e+1];v+=`${n?t+n:t}`,f&&(d._numbers[e]=t)}}if(f&&(d._number=y),n||e===Er.blend)d._value=v;else{const e=d.property;o=d.target,g?o[e]=v:u===Ar.ATTRIBUTE?o.setAttribute(e,v):(a=o.style,u===Ar.TRANSFORM?(o!==l&&(l=o,c=o[Ir]),c[e]=v,p=1):u===Ar.CSS?a[e]=v:u===Ar.CSS_VAR&&a.setProperty(e,v)),x&&(O=1)}}if(p&&d._renderTransforms){let e=Dr;for(let t in c)e+=`${qr[t]}${c[t]}) `;a.transform=e,p=0}d=d._next}!i&&O&&e.onRender(e)}!i&&x&&e.onUpdate(e)}return r&&A?!i&&(r.began&&!L&&v>0&&!a||L&&v<=Rr&&a)&&(e.onComplete(e),e.completed=!L):x&&k?c===1/0?e._startTime+=e.duration:e._currentIteration>=c-1&&(e.paused=!0,a||g||(e.completed=!0,i||r&&(L||!r.began)||(e.onComplete(e),e._resolve(e)))):e.completed=!1,O},sa=(e,t,i,n,s)=>{const r=e._currentIteration;if(na(e,t,i,n,s),e._hasChildren){const o=e,a=o.backwards,l=n?t:o._iterationTime,c=ro();let d=0,p=!0;if(!n&&o._currentIteration!==r){const e=o.iterationDuration;Fo(o,t=>{if(a){const n=t.duration,s=t._offset+t._delay;i||!(n<=Rr)||s&&s+n!==e||t.onComplete(t)}else!t.completed&&!t.backwards&&t._currentTime<t.iterationDuration&&na(t,e,i,1,$r.FORCE),t.began=!1,t.completed=!1}),i||o.onLoop(o)}Fo(o,e=>{const t=Lo((l-e._offset)*e._speed,12),r=e._fps<o._fps?e.requestTick(c):s;d+=na(e,t,i,n,r),!e.completed&&p&&(p=!1)},a),!i&&d&&o.onRender(o),(p||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,i||(o.onComplete(o),o._resolve(o))))}},ra={},oa=(e,t,i)=>{if(i===Ar.TRANSFORM){const t=Br.get(e);return t||e}if(i===Ar.CSS||i===Ar.ATTRIBUTE&&go(t)&&e in t.style){const t=ra[e];if(t)return t;{const t=e?no(e):e;return ra[e]=t,t}}return e},aa=e=>{if(e._hasChildren)Fo(e,aa,!0);else{const t=e;t.pause(),Fo(t,e=>{const i=e.property,n=e.target;if(n[Cr]){const s=n.style,r=e._inlineValue,o=uo(r)||r===Dr;if(e._tweenType===Ar.TRANSFORM){const t=n[Ir];if(o?delete t[i]:t[i]=r,e._renderTransforms)if(Object.keys(t).length){let e=Dr;for(let i in t)e+=qr[i]+t[i]+") ";s.transform=e}else s.removeProperty("transform")}else o?s.removeProperty(no(i)):s[i]=r;t._tail===e&&t.targets.forEach(e=>{e.getAttribute&&e.getAttribute("style")===Dr&&e.removeAttribute("style")})}})}return e};class la{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._elapsedTime=e,this._startTime=e,this._lastTime=e,this._scheduledTime=0,this._frameDuration=Lo(Nr/Pr,0),this._fps=Pr,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){const t=this._frameDuration,i=+e,n=i<Rr?Rr:i,s=Lo(Nr/n,0);this._fps=n,this._frameDuration=s,this._scheduledTime+=s-t}get speed(){return this._speed}set speed(e){const t=+e;this._speed=t<Rr?Rr:t}requestTick(e){const t=this._scheduledTime,i=this._elapsedTime;if(this._elapsedTime+=e-i,i<t)return $r.NONE;const n=this._frameDuration,s=i-t;return this._scheduledTime+=s<n?n:s,$r.AUTO}computeDeltaTime(e){const t=e-this._lastTime;return this.deltaTime=t,this._lastTime=e,t}}const ca={animation:null,update:zr},da=e=>{let t=ca.animation;return t||(t={duration:Rr,computeDeltaTime:zr,_offset:0,_delay:0,_head:null,_tail:null},ca.animation=t,ca.update=()=>{e.forEach(e=>{for(let t in e){const i=e[t],n=i._head;if(n){const e=n._valueType,t=e===Sr.COMPLEX||e===Sr.COLOR?Po(n._fromNumbers):null;let s=n._fromNumber,r=i._tail;for(;r&&r!==n;){if(t)for(let e=0,i=r._numbers.length;e<i;e++)t[e]+=r._numbers[e];else s+=r._number;r=r._prevAdd}n._toNumber=s,n._toNumbers=t}}}),na(t,1,1,0,$r.FORCE)}),t},pa=(()=>wr?requestAnimationFrame:setImmediate)(),ha=(()=>wr?cancelAnimationFrame:clearImmediate)();class ua extends la{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=Xr,this.paused=!0,this.reqId=0}update(){const e=this._currentTime=ro();if(this.requestTick(e)){this.computeDeltaTime(e);const t=this._speed,i=this._fps;let n=this._head;for(;n;){const s=n._next;n.paused?(Bo(this,n),this._hasChildren=!!this._tail,n._running=!1,n.completed&&!n._cancelled&&n.cancel()):sa(n,(e-n._startTime)*n._speed*t,0,0,n._fps<i?n.requestTick(e):$r.AUTO),n=s}ca.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(ro()),this.reqId=pa(fa)),this}pause(){if(this.reqId)return this.paused=!0,ma()}resume(){if(this.paused)return this.paused=!1,Fo(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(1===to.timeScale?1:Nr)}set speed(e){this._speed=e*to.timeScale,Fo(this,e=>e.speed=e._speed)}get timeUnit(){return 1===to.timeScale?"ms":"s"}set timeUnit(e){const t=.001,i="s"===e,n=i?t:1;if(to.timeScale!==n){to.timeScale=n,to.tickThreshold=200*n;const e=i?t:Nr;this.defaults.duration*=e,this._speed*=e}}get precision(){return to.precision}set precision(e){to.precision=e}}const ga=(()=>{const e=new ua(ro());return wr&&(io.engine=e,kr.addEventListener("visibilitychange",()=>{e.pauseOnDocumentHidden&&(kr.hidden?e.pause():e.resume())})),e})(),fa=()=>{ga._head?(ga.reqId=pa(fa),ga.update()):ga.reqId=0},ma=()=>(ha(ga.reqId),ga.reqId=0,ga),ba={_rep:new WeakMap,_add:new Map},va=(e,t,i="_rep")=>{const n=ba[i];let s=n.get(e);return s||(s={},n.set(e,s)),s[t]?s[t]:s[t]={_head:null,_tail:null}},ya=(e,t)=>e._isOverridden||e._absoluteStartTime>t._absoluteStartTime,_a=e=>{e._isOverlapped=1,e._isOverridden=1,e._changeDuration=Rr,e._currentTime=Rr},wa=(e,t)=>{const i=e._composition;if(i===Er.replace){const i=e._absoluteStartTime;Mo(t,e,ya,"_prevRep","_nextRep");const n=e._prevRep;if(n){const t=n.parent,s=n._absoluteStartTime+n._changeDuration;if(e.parent.id!==t.id&&t.iterationCount>1&&s+(t.duration-t.iterationDuration)>i){_a(n);let e=n._prevRep;for(;e&&e.parent.id===t.id;)_a(e),e=e._prevRep}const r=i-e._delay;if(s>r){const e=n._startTime,t=s-(e+n._updateDuration),i=Lo(r-t-e,12);n._changeDuration=i,n._currentTime=i,n._isOverlapped=1,i<Rr&&_a(n)}let o=!0;if(Fo(t,e=>{e._isOverlapped||(o=!1)}),o){const e=t.parent;if(e){let i=!0;Fo(e,e=>{e!==t&&Fo(e,e=>{e._isOverlapped||(i=!1)})}),i&&e.cancel()}else t.cancel()}}}else if(i===Er.blend){const t=va(e.target,e.property,"_add"),i=da(ba._add);let n=t._head;n||(n=Object.assign({},e),n._composition=Er.replace,n._updateDuration=Rr,n._startTime=0,n._numbers=Po(e._fromNumbers),n._number=0,n._next=null,n._prev=null,Mo(t,n),Mo(i,n));const s=e._toNumber;if(e._fromNumber=n._fromNumber-s,e._toNumber=0,e._numbers=Po(e._fromNumbers),e._number=0,n._fromNumber=s,e._toNumbers){const t=Po(e._toNumbers);t&&t.forEach((t,i)=>{e._fromNumbers[i]=n._fromNumbers[i]-t,e._toNumbers[i]=0}),n._fromNumbers=t}Mo(t,e,null,"_prevAdd","_nextAdd")}return e},xa=e=>{const t=e._composition;if(t!==Er.none){const i=e.target,n=e.property,s=ba._rep.get(i)[n];if(Bo(s,e,"_prevRep","_nextRep"),t===Er.blend){const t=ba._add,s=t.get(i);if(!s)return;const r=s[n],o=ca.animation;Bo(r,e,"_prevAdd","_nextAdd");const a=r._head;if(a&&a===r._tail){Bo(r,a,"_prevAdd","_nextAdd"),Bo(o,a);let e=!0;for(let t in s)if(s[t]._head){e=!1;break}e&&t.delete(i)}}}return e},ka=e=>(e.paused=!0,e.began=!1,e.completed=!1,e),Aa=e=>e._cancelled?(e._hasChildren?Fo(e,Aa):Fo(e,e=>{e._composition!==Er.none&&wa(e,va(e.target,e.property))}),e._cancelled=0,e):e;let Sa=0;class $a extends la{constructor(e={},t=null,i=0){super(0);const{id:n,delay:s,duration:r,reversed:o,alternate:a,loop:l,loopDelay:c,autoplay:d,frameRate:p,playbackRate:h,onComplete:u,onLoop:g,onPause:f,onBegin:m,onBeforeUpdate:b,onUpdate:v}=e,y=t?0:ga._elapsedTime,_=t?t.defaults:to.defaults,w=po(s)||ho(s)?_.delay:+s,x=po(r)||ho(r)?1/0:+r,k=Go(l,_.loop),A=Go(c,_.loopDelay),S=!0===k||k===1/0||k<0?1/0:k+1;let $=0;t?$=i:(ga.reqId||ga.requestTick(ro()),$=(ga._elapsedTime-ga._startTime)*to.timeScale),this.id=ho(n)?++Sa:n,this.parent=t,this.duration=jo((x+A)*S-A)||Rr,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=m||_.onBegin,this.onBeforeUpdate=b||_.onBeforeUpdate,this.onUpdate=v||_.onUpdate,this.onLoop=g||_.onLoop,this.onPause=f||_.onPause,this.onComplete=u||_.onComplete,this.iterationDuration=x,this.iterationCount=S,this._autoplay=!t&&Go(d,_.autoplay),this._offset=$,this._delay=w,this._loopDelay=A,this._iterationTime=0,this._currentIteration=0,this._resolve=zr,this._running=!1,this._reversed=+Go(o,_.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=Go(a,_.alternate),this._prev=null,this._next=null,this._elapsedTime=y,this._startTime=y,this._lastTime=y,this._fps=Go(p,_.frameRate),this._speed=Go(h,_.playbackRate)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return To(Lo(this._currentTime,to.precision),-this._delay,this.duration)}set currentTime(e){const t=this.paused;this.pause().seek(+e),t||this.resume()}get iterationCurrentTime(){return Lo(this._iterationTime,to.precision)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return To(Lo(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return To(Lo(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){const t=this.iterationDuration;this.currentTime=t*this._currentIteration+t*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*To(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return Aa(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,sa(this,0,1,~~e,$r.FORCE),ka(this),this._hasChildren&&Fo(this,ka),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&sa(this,this.duration,1,~~e,$r.FORCE),this.reset(e);const t=this._autoplay;return!0===t?this.resume():t&&!ho(t.linked)&&t.link(this),this}resetTime(){const e=1/(this._speed*ga._speed);return this._startTime=ro()-(this._currentTime+this._delay)*e,this}pause(){return this.paused||(this.paused=!0,this.onPause(this)),this}resume(){return this.paused?(this.paused=!1,this.duration<=Rr&&!this._hasChildren?sa(this,Rr,0,0,$r.FORCE):(this._running||(Mo(ga,this),ga._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,ga.wake()),this):this}restart(){return this.reset().resume()}seek(e,t=0,i=0){Aa(this),this.completed=!1;const n=this.paused;return this.paused=!0,sa(this,e+this._delay,~~t,~~i,$r.AUTO),n?this:this.resume()}alternate(){const e=this._reversed,t=this.iterationCount,i=this.iterationDuration,n=t===1/0?$o(jr/i):t;return this._reversed=+(!this._alternate||n%2?!e:e),t===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(i*n-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?Fo(this,e=>e.cancel(),!0):Fo(this,xa),this._cancelled=1,this.pause()}stretch(e){const t=this.duration,i=No(e);if(t===i)return this;const n=e/t,s=e<=Rr;return this.duration=s?Rr:i,this.iterationDuration=s?Rr:No(this.iterationDuration*n),this._offset*=n,this._delay*=n,this._loopDelay*=n,this}revert(){sa(this,0,1,0,$r.AUTO);const e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(){return this.seek(this.duration).cancel()}then(e=zr){const t=this.then,i=()=>{this.then=null,e(this),this.then=t,this._resolve=zr};return new Promise(e=>(this._resolve=()=>e(i()),this.completed&&this._resolve(),this))}}function Ea(e){const t=co(e)?eo.root.querySelectorAll(e):e;if(t instanceof NodeList||t instanceof HTMLCollection)return t}function Oa(e){if(uo(e))return[];if(!wr)return oo(e)&&e.flat(1/0)||[e];if(oo(e)){const t=e.flat(1/0),i=[];for(let e=0,n=t.length;e<n;e++){const n=t[e];if(!uo(n)){const e=Ea(n);if(e)for(let t=0,n=e.length;t<n;t++){const n=e[t];if(!uo(n)){let e=!1;for(let t=0,s=i.length;t<s;t++)if(i[t]===n){e=!0;break}e||i.push(n)}}else{let e=!1;for(let t=0,s=i.length;t<s;t++)if(i[t]===n){e=!0;break}e||i.push(n)}}}return i}const t=Ea(e);return t?Array.from(t):[e]}function Ca(e){const t=Oa(e),i=t.length;if(i)for(let e=0;e<i;e++){const i=t[e];if(!i[Or]){i[Or]=!0;const e=go(i);(i.nodeType||e)&&(i[Cr]=!0,i[Tr]=e,i[Ir]={})}}return t}const Ta={deg:1,rad:180/Oo,turn:360},Ia={},La=(e,t,i,n=!1)=>{const s=t.u,r=t.n;if(t.t===Sr.UNIT&&s===i)return t;const o=r+s+i,a=Ia[o];if(ho(a)||n){let n;if(s in Ta)n=r*Ta[s]/Ta[i];else{const t=100,o=e.cloneNode(),a=e.parentNode,l=a&&a!==kr?a:kr.body;l.appendChild(o);const c=o.style;c.width=t+s;const d=o.offsetWidth||t;c.width=t+i;const p=d/(o.offsetWidth||t);l.removeChild(o),n=p*r}t.n=n,Ia[o]=n}else t.n=a;return t.t,Sr.UNIT,t.u=i,t},Ra=e=>e,ja=(e=1.68)=>t=>xo(t,+e),Na={in:e=>t=>e(t),out:e=>t=>1-e(1-t),inOut:e=>t=>t<.5?e(2*t)/2:1-e(-2*t+2)/2,outIn:e=>t=>t<.5?(1-e(1-2*t))/2:(e(2*t-1)+1)/2},Pa=Oo/2,Da=2*Oo,Fa={[Dr]:ja,Quad:ja(2),Cubic:ja(3),Quart:ja(4),Quint:ja(5),Sine:e=>1-So(e*Pa),Circ:e=>1-ko(1-e*e),Expo:e=>e?xo(2,10*e-10):0,Bounce:e=>{let t,i=4;for(;e<((t=xo(2,--i))-1)/11;);return 1/xo(4,3-i)-7.5625*xo((3*t-2)/22-e,2)},Back:(e=1.7)=>t=>(+e+1)*t*t*t-+e*t*t,Elastic:(e=1,t=.3)=>{const i=To(+e,1,10),n=To(+t,Rr,2),s=n/Da*Eo(1/i),r=Da/n;return e=>0===e||1===e?e:-i*xo(2,-10*(1-e))*Ao((1-e-s)*r)}},Ba=(()=>{const e={linear:Ra,none:Ra};for(let t in Na)for(let i in Fa){const n=Fa[i],s=Na[t];e[t+i]=i===Dr||"Back"===i||"Elastic"===i?(e,t)=>s(n(e,t)):s(n)}return e})(),Ma={linear:Ra,none:Ra},qa=e=>{if(Ma[e])return Ma[e];if(e.indexOf("(")<=-1){const t=Na[e]||e.includes("Back")||e.includes("Elastic")?Ba[e]():Ba[e];return t?Ma[e]=t:Ra}{const t=e.slice(0,-1).split("("),i=Ba[t[0]];return i?Ma[e]=i(...t[1].split(",")):Ra}},za=["steps(","irregular(","linear(","cubicBezier("],Ua=e=>{if(co(e))for(let t=0,i=za.length;t<i;t++)if(so(e,za[t]))return console.warn(`String syntax for \`ease: "${e}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${e}\``),Ra;return po(e)?e:co(e)?qa(e):Ra},Ha=Xo(),Va=Xo(),Wa={},Ga={func:null},Ya=[null],Qa=[null,null],Ka={to:null};let Ja,Za,Xa=0;const el=(e,t)=>{const i={};if(oo(e)){const t=[].concat(...e.map(e=>Object.keys(e))).filter(yo);for(let n=0,s=t.length;n<s;n++){const s=t[n],r=e.map(e=>{const t={};for(let i in e){const n=e[i];yo(i)?i===s&&(t.to=n):t[i]=n}return t});i[s]=r}}else{const n=Go(t.duration,to.defaults.duration),s=Object.keys(e).map(t=>({o:parseFloat(t)/100,p:e[t]})).sort((e,t)=>e.o-t.o);s.forEach(e=>{const t=e.o,s=e.p;for(let e in s)if(yo(e)){let r=i[e];r||(r=i[e]=[]);const o=t*n;let a=r.length,l=r[a-1];const c={to:s[e]};let d=0;for(let e=0;e<a;e++)d+=r[e].duration;1===a&&(c.from=l.to),s.ease&&(c.ease=s.ease),c.duration=o-(a?d:0),r.push(c)}return e});for(let e in i){const t=i[e];let n;for(let e=0,i=t.length;e<i;e++){const i=t[e],s=i.ease;i.ease=n||void 0,n=s}t[0].duration||t.shift()}}return i};class tl extends $a{constructor(e,t,i,n,s=!1,r=0,o=0){super(t,i,n);const a=Ca(e),l=a.length,c=t.keyframes,d=c?Do(el(c,t),t):t,{delay:p,duration:h,ease:u,playbackEase:g,modifier:f,composition:m,onRender:b}=d,v=i?i.defaults:to.defaults,y=Go(g,v.playbackEase),_=y?Ua(y):null,w=!ho(u)&&!ho(u.ease),x=w?u.ease:Go(u,_?"linear":v.ease),k=w?u.settlingDuration:Go(h,v.duration),A=Go(p,v.delay),S=f||v.modifier,$=ho(m)&&l>=Nr?Er.none:ho(m)?v.composition:m,E=this._offset+(i?i._offset:0);w&&(u.parent=this);let O=NaN,C=NaN,T=0,I=0;for(let e=0;e<l;e++){const t=a[e],n=r||e,c=o||l;let p=NaN,h=NaN;for(let e in d)if(yo(e)){const r=Qo(t,e),o=oa(e,t,r);let a=d[e];const l=oo(a);if(s&&!l&&(Qa[0]=a,Qa[1]=a,a=Qa),l){const e=a.length,t=!ao(a[0]);2===e&&t?(Ka.to=a,Ya[0]=Ka,Ja=Ya):e>2&&t?(Ja=[],a.forEach((e,t)=>{t?1===t?(Qa[1]=e,Ja.push(Qa)):Ja.push(e):Qa[0]=e})):Ja=a}else Ya[0]=a,Ja=Ya;let u=null,g=null,f=NaN,m=0,b=0;for(let e=Ja.length;b<e;b++){const s=Ja[b];ao(s)?Za=s:(Ka.to=s,Za=Ka),Ga.func=null;const a=Yo(Za.to,t,n,c,Ga);let l;ao(a)&&!ho(a.to)?(Za=a,l=a.to):l=a;const d=Yo(Za.from,t,n,c),p=Za.ease,h=!ho(p)&&!ho(p.ease),v=h?p.ease:p||x,y=h?p.settlingDuration:Yo(Go(Za.duration,e>1?Yo(k,t,n,c)/e:k),t,n,c),_=Yo(Go(Za.delay,b?0:A),t,n,c),w=Yo(Go(Za.composition,$),t,n,c),O=lo(w)?w:Er[w],C=Za.modifier||S,L=!ho(d),R=!ho(l),j=oo(l),N=j||L&&R,P=g?m+_:_,D=Lo(E+P,12);I||!L&&!j||(I=1);let F=g;if(O!==Er.none){u||(u=va(t,o));let e=u._head;for(;e&&!e._isOverridden&&e._absoluteStartTime<=D;)if(F=e,e=e._nextRep,e&&e._absoluteStartTime>=D)for(;e;)_a(e),e=e._nextRep}if(N?(ea(j?Yo(l[0],t,n,c):d,Ha),ea(j?Yo(l[1],t,n,c,Ga):l,Va),Ha.t===Sr.NUMBER&&(F?F._valueType===Sr.UNIT&&(Ha.t=Sr.UNIT,Ha.u=F._unit):(ea(Jo(t,o,r,Wa),ia),ia.t===Sr.UNIT&&(Ha.t=Sr.UNIT,Ha.u=ia.u)))):(R?ea(l,Va):g?ta(g,Va):ea(i&&F&&F.parent.parent===i?F._value:Jo(t,o,r,Wa),Va),L?ea(d,Ha):g?ta(g,Ha):ea(i&&F&&F.parent.parent===i?F._value:Jo(t,o,r,Wa),Ha)),Ha.o&&(Ha.n=Zo(F?F._toNumber:ea(Jo(t,o,r,Wa),ia).n,Ha.n,Ha.o)),Va.o&&(Va.n=Zo(Ha.n,Va.n,Va.o)),Ha.t!==Va.t)if(Ha.t===Sr.COMPLEX||Va.t===Sr.COMPLEX){const e=Ha.t===Sr.COMPLEX?Ha:Va,t=Ha.t===Sr.COMPLEX?Va:Ha;t.t=Sr.COMPLEX,t.s=Po(e.s),t.d=e.d.map(()=>t.n)}else if(Ha.t===Sr.UNIT||Va.t===Sr.UNIT){const e=Ha.t===Sr.UNIT?Ha:Va,t=Ha.t===Sr.UNIT?Va:Ha;t.t=Sr.UNIT,t.u=e.u}else if(Ha.t===Sr.COLOR||Va.t===Sr.COLOR){const e=Ha.t===Sr.COLOR?Ha:Va,t=Ha.t===Sr.COLOR?Va:Ha;t.t=Sr.COLOR,t.s=e.s,t.d=[0,0,0,1]}if(Ha.u!==Va.u){let e=Va.u?Ha:Va;e=La(t,e,Va.u?Va.u:Ha.u,!1)}if(Va.d&&Ha.d&&Va.d.length!==Ha.d.length){const e=Ha.d.length>Va.d.length?Ha:Va,t=e===Ha?Va:Ha;t.d=e.d.map((e,i)=>ho(t.d[i])?0:t.d[i]),t.s=Po(e.s)}const B=Lo(+y||Rr,12);let M=Wa[o];uo(M)||(Wa[o]=null);const q={parent:this,id:Xa++,property:o,target:t,_value:null,_func:Ga.func,_ease:Ua(v),_fromNumbers:Po(Ha.d),_toNumbers:Po(Va.d),_strings:Po(Va.s),_fromNumber:Ha.n,_toNumber:Va.n,_numbers:Po(Ha.d),_number:Ha.n,_unit:Va.u,_modifier:C,_currentTime:0,_startTime:P,_delay:+_,_updateDuration:B,_changeDuration:B,_absoluteStartTime:D,_tweenType:r,_valueType:Va.t,_composition:O,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:M,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};O!==Er.none&&wa(q,u),isNaN(f)&&(f=q._startTime),m=Lo(P+B,12),g=q,T++,Mo(this,q)}(isNaN(C)||f<C)&&(C=f),(isNaN(O)||m>O)&&(O=m),r===Ar.TRANSFORM&&(p=T-b,h=T)}if(!isNaN(p)){let e=0;Fo(this,t=>{e>=p&&e<h&&(t._renderTransforms=1,t._composition===Er.blend&&Fo(ca.animation,e=>{e.id===t.id&&(e._renderTransforms=1)})),e++})}}l||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),C?(Fo(this,e=>{e._startTime-e._delay||(e._delay-=C),e._startTime-=C}),O-=C):C=0,O||(O=Rr,this.iterationCount=0),this.targets=a,this.duration=O===Rr?Rr:jo((O+this._loopDelay)*this.iterationCount-this._loopDelay)||Rr,this.onRender=b||v.onRender,this._ease=_,this._delay=C,this.iterationDuration=O,!this._autoplay&&I&&this.onRender(this)}stretch(e){const t=this.duration;if(t===No(e))return this;const i=e/t;return Fo(this,e=>{e._updateDuration=No(e._updateDuration*i),e._changeDuration=No(e._changeDuration*i),e._currentTime*=i,e._startTime*=i,e._absoluteStartTime*=i}),super.stretch(e)}refresh(){return Fo(this,e=>{const t=e._func;if(t){const i=Jo(e.target,e.property,e._tweenType);ea(i,ia),ea(t(),Va),e._fromNumbers=Po(ia.d),e._fromNumber=ia.n,e._toNumbers=Po(Va.d),e._strings=Po(Va.s),e._toNumber=Va.o?Zo(ia.n,Va.n,Va.o):Va.n}}),this.duration===Rr&&this.restart(),this}revert(){return super.revert(),aa(this)}then(e){return super.then(e)}}const il=(e,t)=>new tl(e,t,null,0,!1).init();class nl extends(m(o(s))){static get properties(){return Object.assign({src:{type:String},odd:{type:String},view:{type:String},fill:{type:Number},nodeId:{type:String,attribute:"node-id"},xmlId:{type:Array,attribute:"xml-id"},xpath:{type:String},map:{type:String},onUpdate:{type:Boolean,attribute:"on-update"},notFound:{type:String,attribute:"not-found"},url:{type:String},static:{type:String},appendFootnotes:{type:Boolean,attribute:"append-footnotes"},suppressHighlight:{type:Boolean,attribute:"suppress-highlight"},columnSeparator:{type:String,attribute:"column-separator"},direction:{type:String},loadCss:{type:String,attribute:"load-css"},fixLinks:{type:Boolean,attribute:"fix-links"},useLanguage:{type:Boolean,attribute:"use-language"},animation:{type:Boolean},infiniteScroll:{type:Boolean,attribute:"infinite-scroll"},infiniteScrollMax:{type:Number,attribute:"infinite-scroll-max"},waitFor:{type:String,attribute:"wait-for"},disableHistory:{type:Boolean,attribute:"disable-history"},readOnlyRegistry:{type:Boolean,attribute:"read-only-registry"},beforeUpdate:{type:String,attribute:"before-update-event"},noScroll:{type:Boolean,attribute:"no-scroll"},_features:{type:Object},_content:{type:Node,attribute:!1},_column1:{type:Node,attribute:!1},_column2:{type:Node,attribute:!1},_footnotes:{type:Node,attribute:!1},_style:{type:Node,attribute:!1},_additionalParams:{type:Object}},super.properties)}constructor(){super(),this.src=null,this.url=null,this.readOnlyRegistry=!1,this._registryInitialized=!1,this.onUpdate=!1,this.appendFootnotes=!1,this.notFound=null,this.animation=!1,this.direction="ltr",this.suppressHighlight=!1,this.highlight=!1,this.infiniteScrollMax=10,this.disableHistory=!1,this.beforeUpdate=null,this.noScroll=!1,this._features={},this._additionalParams={},this._selector={},this._chunks=[],this._scrollTarget=null,this._loading=!1,this._lastRequestKey=null,this.static=null,this._refreshDebounceTimer=null,this._pendingRefreshEvent=null,this._hasLoadedOnce=!1,this._lastLoadedId=null}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"src"===e)this._updateSource(i,t)}connectedCallback(){if(super.connectedCallback(),this.loadCss&&a("pb-page-ready",()=>{b([this.toAbsoluteURL(this.loadCss)]).then(e=>{e&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,e])})}),this.infiniteScroll&&(this.columnSeparator=null,this.animation=!1,this._content=document.createElement("div"),this._content.className="infinite-content"),!this.disableHistory){y.state.id&&!this.xmlId&&(this.xmlId=y.state.id),y.state.action&&"search"===y.state.action&&(this.highlight=!0),"single"===this.view?this.nodeId=null:y.state.root&&!this.nodeId&&(this.nodeId=y.state.root);const e=this.readOnlyRegistry||this.hasAttribute("read-only-registry");if(this._registryInitialized||e)e&&console.log("[pb-view] connectedCallback: Skipping registry.replace (read-only-registry is set)",{readOnlyRegistry:this.readOnlyRegistry,hasAttribute:this.hasAttribute("read-only-registry"),isReadOnly:e,_registryInitialized:this._registryInitialized});else{const t=this.getDocument?this.getDocument():null,i={id:this.xmlId,view:this.getView(),odd:this.getOdd(),path:t?t.path:void 0};"single"!==this.view&&(i.root=this.nodeId),this.fill&&(i.fill=this.fill),console.warn("[pb-view] connectedCallback: Calling registry.replace (read-only-registry not set)",{readOnlyRegistry:this.readOnlyRegistry,hasAttribute:this.hasAttribute("read-only-registry"),isReadOnly:e,_registryInitialized:this._registryInitialized,newState:i}),y.replace(this,i),this._registryInitialized=!0}y.subscribe(this,e=>{this._setState(e),this._refresh(null)})}this.waitFor||(this.waitFor="pb-toggle-feature,pb-select-feature,pb-navigation"),this.subscribeTo("pb-navigate",e=>{e.detail.source&&e.detail.source===this||this.navigate(e.detail.direction)}),this.subscribeTo("pb-toggle",e=>{this.toggleFeature(e)}),this.subscribeTo("pb-i18n-update",e=>{const t=this._features.language&&this._features.language!==e.detail.language;this._features.language=e.detail.language,this.useLanguage&&t&&(this._setState(y.getState(this)),this._refresh())},[]),this.signalReady(),this.onUpdate&&this.subscribeTo("pb-update",e=>{this._refresh(e)})}disconnectedCallback(){super.disconnectedCallback(),this._scrollObserver&&this._scrollObserver.disconnect();this.readOnlyRegistry||this.hasAttribute("read-only-registry")||(this._registryInitialized=!1)}firstUpdated(){super.firstUpdated(),this.enableScrollbar(!0),this.infiniteScroll&&(this._topObserver=this.shadowRoot.getElementById("top-observer"),this._bottomObserver=this.shadowRoot.getElementById("bottom-observer"),this._bottomObserver.style.display="none",this._topObserver.style.display="none",this._scrollObserver=new IntersectionObserver(e=>{this._content&&e.forEach(e=>{if(e.isIntersecting)if("bottom-observer"===e.target.id){const e=this._content.lastElementChild;if(e){const t=e.getAttribute("data-next");t&&!this._content.querySelector(`[data-root="${t}"]`)&&(this._checkChunks("forward"),this._load(t,"forward"))}}else{const e=this._content.firstElementChild;if(e){const t=e.getAttribute("data-previous");t&&!this._content.querySelector(`[data-root="${t}"]`)&&(this._checkChunks("backward"),this._load(t,"backward"))}}})})),this.onUpdate||a("pb-page-ready",e=>{e&&e.language&&(this._features.language=e.language),this.wait(()=>{this.disableHistory||this._setState(y.state),this._refresh()})}),this.subscribeTo("pb-refresh",e=>{this._refresh(e)})}getOdd(){try{return this.odd||this.getDocument().odd||"teipublisher"}catch{return this.odd||"teipublisher"}}getView(){try{return this.view||this.getDocument().view||"single"}catch{return this.view||"single"}}forceUpdate(){this._load(this.nodeId)}animate(){this.animation&&("forward"===this.lastDirection?il(this.shadowRoot.getElementById("view"),{opacity:[0,1],translateX:[1e3,0],duration:300,ease:"linear"}):il(this.shadowRoot.getElementById("view"),{opacity:[0,1],translateX:[-1e3,0],duration:300,ease:"linear"}))}enableScrollbar(e){e?this.classList.add("noscroll"):this.classList.remove("noscroll")}_refresh(e){this._pendingRefreshEvent=e,this._refreshDebounceTimer&&clearTimeout(this._refreshDebounceTimer),this._refreshDebounceTimer=setTimeout(()=>{this._doRefresh(this._pendingRefreshEvent),this._pendingRefreshEvent=null,this._refreshDebounceTimer=null},150)}_doRefresh(e){var t;const i=y.getState(this),n=e&&e.detail?e.detail:{},s=Object.assign(Object.assign({},n),i);let r=null;const o=this.querySelector&&this.querySelector('pb-param[name="mode"]');o&&(r=o.getAttribute("value")),!r&&this._additionalParams&&(r=this._additionalParams.mode||this._additionalParams["user.mode"]);const a="metadata-panel"===r||this.xpath&&"single"===this.view&&!this.nodeId;if(this.xpath&&!s.xpath&&this._hasLoadedOnce)return;if(a&&this._hasLoadedOnce){const e=s.id&&/\.jpg$|_\d{2,3}\.jpg/.test(String(s.id));if(s.root||s.id&&!e||s.position)return}let l=s;if(a&&s.id){/\.jpg$|_\d{2,3}\.jpg/.test(String(s.id))&&(l=Object.assign({},s),delete l.id)}const c=l;if(c.hash&&!this.noScroll&&!(c.id||c.path||c.odd||c.view||c.position)){this._scrollTarget=c.hash;const e=this.shadowRoot.getElementById(this._scrollTarget);return void(e&&setTimeout(()=>e.scrollIntoView({block:"nearest"})))}const d=this.xmlId,p=this.nodeId,h=this.getDocument&&(null===(t=this.getDocument())||void 0===t?void 0:t.path)||null,u=this._additionalParams&&this._additionalParams.id?this._additionalParams.id:null,g=this._features&&this._features.id?this._features.id:null,f=this._lastLoadedId,m=u&&u!==f&&null!==f||g&&g!==f&&null!==f,b=e&&e.detail&&e.detail.path?e.detail.path:null,v=e&&e.detail&&e.detail.odd?e.detail.odd:null,_=b||c.path,w=v||c.odd;if(_){const e=this.getDocument();e&&(e.path=_)}const x=_,k=w,A=e&&e.detail&&e.detail.id?e.detail.id:null,S=this._additionalParams&&this._additionalParams.id?this._additionalParams.id:null,$=this._features&&this._features.id?this._features.id:null,E=A||(void 0!==c.id?c.id:null)||S||$;if(E){/\.jpg$|_\d{2,3}\.jpg/.test(String(E))?(this._additionalParams=this._additionalParams||{},this._additionalParams.id=E):this.xmlId=E}this.odd=w||this.odd,void 0!==c.columnSeparator&&(this.columnSeparator=c.columnSeparator),this.view=c.view||this.getView(),this.fill=c.fill||this.fill,c.xpath&&(this.xpath=c.xpath,this.nodeId=null);let O=this.nodeId;O=null===c.root?null:(void 0!==c.position?c.position:c.root)||this.nodeId;const C=O!==p,T=e&&e.detail&&e.detail.id?e.detail.id:null,I=this._additionalParams&&this._additionalParams.id?this._additionalParams.id:null,L=this._features&&this._features.id?this._features.id:null,R=T||(void 0!==c.id?c.id:null)||I||L||this.xmlId,j=R&&(R!==d||R!==f&&null!==f||m||null===f&&R),N=x&&x!==h,P=this.odd,D=k&&k!==P,F=e&&e.detail&&e.detail.id,B=this._lastLoadedId,M=F&&(null===B||e.detail.id!==B||d&&e.detail.id!==d);if(!C&&!j&&!N&&!D&&!M&&this._hasLoadedOnce)return y.pathParams.forEach(e=>{void 0!==c[e]&&(this._additionalParams[e]=c[e])}),this.noScroll||(this._scrollTarget=c.hash),void this._updateStyles();this.nodeId=O,s.id||this.xmlId,y.pathParams.forEach(e=>{void 0!==c[e]&&(this._additionalParams[e]=c[e])}),this.noScroll||(this._scrollTarget=c.hash),this._updateStyles(),this.infiniteScroll&&this._clear(),this._load(this.nodeId)}_load(e,t){const i=this.getDocument?this.getDocument():null;if(!i||!i.path)return void console.warn("<pb-view> No path");if(this._loading&&this._lastRequestKey){const t=this.getParameters(e),n=JSON.stringify({url:this.url||"",doc:i.path,params:t});if(this._lastRequestKey===n)return;const s=this.shadowRoot.getElementById("loadContent");s&&s.abort(),this._lastRequestKey=null,this._loading=!1}this._loading=!0;const n=this.getParameters(e);t&&(n._dir=t),this._doLoad(n)}_doLoad(e){const t=this.getDocument&&this.getDocument()?this.getDocument().path:"",i=JSON.stringify({url:this.url||"",doc:t,params:e});if(this._lastRequestKey===i)return void(this._loading=!1);this._lastRequestKey=i,this.emitTo("pb-start-update",e),this.infiniteScroll||this._clear(),this._scrollObserver&&(this._bottomObserver&&this._scrollObserver.unobserve(this._bottomObserver),this._topObserver&&this._scrollObserver.unobserve(this._topObserver));const n=this.shadowRoot.getElementById("loadContent");if(null!==this.static)return void this._staticUrl(e).then(e=>{n.url=e,n.generateRequest().catch(()=>{})});this.url||(this.minApiVersion("1.0.0")?this.url="api/parts":this.url="modules/lib/components.xql");let s=`${this.getEndpoint()}/${this.url}`;if(this.minApiVersion("1.0.0")){const e=this.getDocument();if(!e||!e.path)return void console.warn("<pb-view> No document path available for URL construction");s+=`/${encodeURIComponent(e.path)}/json`}n.url=s,n.params=e,n.generateRequest().catch(e=>{console.error("[pb-view] _doLoad: request failed",e)})}async _staticUrl(e){function t(t){const i=[];return t.sort().forEach(t=>{e.hasOwnProperty(t)&&i.push(`${t}=${e[t]}`)}),i.join("&")}const i=this.static?this.static.replace(/\/$/,""):".",n=new URL(`${i}/`,window.location.href),s=new URL("index.json",n).href,r=await fetch(s).then(e=>e.json()),o=["odd","view","xpath","map"];this.querySelectorAll("pb-param").forEach(e=>o.push(`user.${e.getAttribute("name")}`));let a=e.id?t([...o,"id"]):t([...o,"root"]),l=r[a];if(l||(a=t(o),l=r[a]),!l){console.warn("<pb-view> No static mapping found for %s",a);const e=Object.values(r)[0];if(!e)return n.href;l=e}return new URL(l,n).href}_clear(){this.infiniteScroll?(this._content=document.createElement("div"),this._content.className="infinite-content"):this._content=null,this._column1=null,this._column2=null,this._footnotes=null,this._chunks=[]}_handleError(){this._clear(),this._loading=!1;const e=this.shadowRoot.getElementById("loadContent");let t;console.error("<pb-view> Error details:",e.lastError);const{response:i}=e.lastError;let n;t=i?i.description:'<pb-i18n key="dialogs.serverError"></pb-i18n>',n=null!=this.notFound?`<p>${this.notFound}</p>`:`<p><pb-i18n key="dialogs.serverError"></pb-i18n>: ${t} </p>`,this._replaceContent({content:n}),this.emitTo("pb-end-update")}_handleContent(){const e=this.shadowRoot.getElementById("loadContent"),t=e.lastResponse;return t?t.error?(console.error("<pb-view> Response has error:",t.error),null!=this.notFound&&(this._content=this.notFound),this.emitTo("pb-end-update",null),void(this._loading=!1)):(this._replaceContent(t,e.params._dir),this.animate(),this._scrollTarget&&this.updateComplete.then(()=>{const e=this.shadowRoot.getElementById(this._scrollTarget)||this.shadowRoot.querySelector(`[node-id="${this._scrollTarget}"]`);e&&window.requestAnimationFrame(()=>setTimeout(()=>{e.scrollIntoView({block:"nearest"})},400)),this._scrollTarget=null}),this.next=t.next,this.nextId=t.nextId,this.previous=t.previous,this.previousId=t.previousId,this.nodeId=t.root,this.switchView=t.switchView,this.updateComplete.then(()=>{const i=this.shadowRoot.getElementById("view");this._applyToggles(i),this._fixLinks(i),gn(i);const n={data:t,root:i,params:e.params,id:this.xmlId,position:this.nodeId};this.emitTo("pb-update",n),this._scroll()}),this.emitTo("pb-end-update",null),this._loading=!1,this._hasLoadedOnce=!0,void(this.xmlId&&(this._lastLoadedId=this.xmlId))):(this._loading=!1,void console.error("<pb-view> No response received"))}_replaceContent(e,t){const i=document.createDocumentFragment(),n=document.createElement("div");i.appendChild(n),n.innerHTML=e.content,this.beforeUpdate?this.emitTo(this.beforeUpdate,{data:e,root:n,render:i=>{this._doReplaceContent(i,e,t)}}):this._doReplaceContent(n,e,t)}_doReplaceContent(e,t,i){if(this.columnSeparator)this._replaceColumns(e),this._loading=!1;else if(this.infiniteScroll){let n;if(e.className="scroll-fragment",e.setAttribute("data-root",t.root),t.next&&e.setAttribute("data-next",t.next),t.previous&&e.setAttribute("data-previous",t.previous),"backward"===i)n=this._content.firstElementChild,this._chunks.unshift(e),this.updateComplete.then(()=>{n.scrollIntoView(!0),this._loading=!1,this._checkVisibility(),this._scrollObserver.observe(this._bottomObserver),this._scrollObserver.observe(this._topObserver)}),this._content.insertBefore(e,n);else this.updateComplete.then(()=>{this._loading=!1,this._checkVisibility(),this._scrollObserver.observe(this._bottomObserver),this._scrollObserver.observe(this._topObserver)}),this._chunks.push(e),this._content.appendChild(e)}else this._content=e,this._loading=!1;if(this.appendFootnotes){const e=document.createElement("div");t.footnotes&&(e.innerHTML=t.footnotes),this._footnotes=e}return this._initFootnotes(this._footnotes),e}_checkVisibility(){const e=this._chunks[this._chunks.length-1].hasAttribute("data-next");this._bottomObserver.style.display=e?"":"none";const t=this._chunks[0].hasAttribute("data-previous");this._topObserver.style.display=t?"":"none"}_replaceColumns(e){let t;if(this.columnSeparator){const i=e.querySelectorAll(this.columnSeparator);i.length>1&&(t=i[i.length-1])}if(t){const i=this._getFragmentBefore(e,t),n=this._getFragmentAfter(e,t);"ltr"===this.direction?(this._column1=i,this._column2=n):(this._column2=i,this._column1=n)}else this._content=e}_scroll(){if(!this.noScroll&&y.hash){const e=this.shadowRoot.getElementById(y.hash.substring(1));e&&window.requestAnimationFrame(()=>setTimeout(()=>{e.scrollIntoView({block:"center",inline:"nearest"})},400))}}_scrollToElement(e,t){const i=this.shadowRoot.getElementById(t.hash.substring(1));i&&(e.preventDefault(),i.scrollIntoView({block:"center",inline:"nearest"}))}_updateStyles(){const e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),null!==this.static?e.setAttribute("href",`${this.static}/css/${this.getOdd()}.css`):e.setAttribute("href",`${this.getEndpoint()}/transform/${this.getOdd()}.css`),this._style=e}_fixLinks(e){if(this.fixLinks){const t=this.getDocument?this.getDocument():null,i=this.toAbsoluteURL(t&&t.path?t.path:"");e.querySelectorAll("img").forEach(e=>{const t=e.getAttribute("src"),n=new URL(t,i);e.src=n.href}),e.querySelectorAll("a").forEach(e=>{const t=e.getAttribute("href");if(t===e.hash)e.addEventListener("click",t=>this._scrollToElement(t,e));else{const n=new URL(t,i);e.href=n.href}})}else e.querySelectorAll("a").forEach(e=>{e.getAttribute("href")===e.hash&&e.addEventListener("click",t=>this._scrollToElement(t,e))})}_initFootnotes(e){e&&e.querySelectorAll(".note, .fn-back").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const i=this.shadowRoot.getElementById("content").querySelector(e.hash);i&&i.scrollIntoView()})})}_getParameters(){const e={};this.querySelectorAll("pb-param").forEach(t=>{const i=t.getAttribute("name"),n=t.getAttribute("value");if("id"===i){if(/\.jpg$|_\d{2,3}\.jpg/.test(String(n))){const e=this.querySelector('pb-param[name="mode"]');if(e&&"metadata-panel"===e.getAttribute("value"))return}}e[`user.${i}`]=n});for(const[t,i]of Object.entries(this._features)){if("id"===t){if(/\.jpg$|_\d{2,3}\.jpg/.test(String(i))){const e=this.querySelector('pb-param[name="mode"]');if(e&&"metadata-panel"===e.getAttribute("value"))continue}}e[`user.${t}`]=i}if(this._additionalParams)for(const[t,i]of Object.entries(this._additionalParams)){if("id"===t||"user.id"===t){if(/\.jpg$|_\d{2,3}\.jpg/.test(String(i))){const e=this.querySelector('pb-param[name="mode"]');if(e&&"metadata-panel"===e.getAttribute("value"))continue}}e[t]=i}return e}getParameters(e){e=e||this.nodeId;const t=this.getDocument?this.getDocument():null,i=this._getParameters();!this.minApiVersion("1.0.0")&&t&&t.path&&(i.doc=t.path),i.odd=`${this.getOdd()}.odd`;const n=this.querySelector('pb-param[name="mode"]'),s=n&&"metadata-panel"===n.getAttribute("value");if(i.view=s?"single":this.getView(),i.fill=this.fill,e&&!s&&(i.root=e),this.xpath&&(i.xpath=this.xpath),this._additionalParams&&this._additionalParams.id){const e=this.querySelector('pb-param[name="mode"]');if(e&&"metadata-panel"===e.getAttribute("value")){/\.jpg$|_\d{2,3}\.jpg/.test(String(this._additionalParams.id))||(i.id=this._additionalParams.id)}else i.id=this._additionalParams.id}else if(this.xmlId){const e=this.querySelector('pb-param[name="mode"]');if(e&&"metadata-panel"===e.getAttribute("value")){/\.jpg$|_\d{2,3}\.jpg/.test(String(this.xmlId))||(i.id=this.xmlId)}else i.id=this.xmlId}return!this.suppressHighlight&&this.highlight&&(i.highlight="yes"),this.map&&(i.map=this.map),i}_applyToggles(e){for(const[t,i]of Object.entries(this._selector))e.querySelectorAll(t).forEach(e=>{const t=i.command||"toggle";e.command&&e.command(t,i.state),i.state?e.classList.add(t):e.classList.remove(t)})}goto(e){this._load(e)}gotoId(e){this.xmlId=e,this._load()}navigate(e){if("single"!==this.getView())if(this.lastDirection=e,"backward"===e){if(this.previous){const t=this.readOnlyRegistry||this.hasAttribute("read-only-registry");this.disableHistory||this.map||t||y.commit(this,{id:this.previousId||null,root:this.previousId?null:this.previous}),this.xmlId=this.previousId,this._load(this.xmlId?null:this.previous,e)}}else if(this.next){const t=this.readOnlyRegistry||this.hasAttribute("read-only-registry");this.disableHistory||this.map||t||y.commit(this,{id:this.nextId||null,root:this.nextId?null:this.next}),this.xmlId=this.nextId,this._load(this.xmlId?null:this.next,e)}}_checkChunks(e){if(this.infiniteScroll&&0!==this.infiniteScrollMax){if(this._chunks.length===this.infiniteScrollMax)if("forward"===e)this._content.removeChild(this._chunks.shift());else this._content.removeChild(this._chunks.pop());this.emitTo("pb-navigate",{direction:e,source:this})}}toggleFeature(e){const t=y.getState(this);if(t&&this._setState(t),e.detail.refresh)this._updateStyles(),this._load();else{const e=this.shadowRoot.getElementById("view");this._applyToggles(e)}this.readOnlyRegistry||this.hasAttribute("read-only-registry")||y.commit(this,t)}_setState(e){for(const[t,i]of Object.entries(e))if(y.pathParams.has(t))this._additionalParams[t]=i;else switch(t){case"odd":case"view":case"columnSeparator":case"xpath":case"nodeId":case"path":case"root":break;default:this._features[t]=i}if(e.odd&&!this.getAttribute("odd")&&(this.odd=e.odd),e.view&&!this.getAttribute("view")&&(this.view=e.view,"single"===this.view?this.nodeId=null:this.nodeId=this.switchView),e.fill&&!this.getAttribute("fill")&&(this.fill=e.fill),e.xpath&&!this.getAttribute("xpath")&&(this.xpath=e.xpath),e.hasOwnProperty("columnSeparator")&&(this.columnSeparator=e.columnSeparator),this.xmlId=!this.getAttribute("xml-id")&&e.id||this.xmlId,this.nodeId=!this.getAttribute("xml-id")&&e.root||null,e.path){const t=this.getDocument?this.getDocument():null;t&&(t.path=e.path)}e.selectors&&e.selectors.forEach(e=>{this._selector[e.selector]={state:e.state,command:e.command||"toggle"}})}_getFragmentBefore(e,t){const i=document.createRange();return i.setStartBefore(e),i.setEndBefore(t),i.cloneContents()}_getFragmentAfter(e,t){const i=document.createRange();return i.setStartBefore(t),i.setEndAfter(e),i.cloneContents()}_updateSource(e,t){void 0!==t&&e!==t&&(this.xpath=null,this.odd=null,this.xmlId=null,this.nodeId=null)}static get styles(){return n`
      :host {
        display: block;
        background: transparent;
      }

      :host(.noscroll) {
        scrollbar-width: none; /* Firefox 64 */
        -ms-overflow-style: none;
      }

      :host(.noscroll)::-webkit-scrollbar {
        width: 0 !important;
        display: none;
      }

      [id] {
        scroll-margin-top: var(--pb-view-scroll-margin-top);
      }

      #view {
        position: relative;
        font-size: clamp(
          calc(var(--pb-content-font-size, 1rem) * var(--pb-min-zoom, 0.5)),
          calc(var(--pb-content-font-size, 1rem) * var(--pb-zoom-factor)),
          calc(var(--pb-content-font-size, 1rem) * var(--pb-max-zoom, 3))
        );
        line-height: calc(var(--pb-content-line-height, 1.5) * var(--pb-zoom-factor));
      }

      .columns {
        display: grid;
        grid-template-columns: calc(50% - var(--pb-view-column-gap, 10px) / 2) calc(
            50% - var(--pb-view-column-gap, 10px) / 2
          );
        grid-column-gap: var(--pb-view-column-gap, 10px);
      }

      .margin-note {
        display: none;
      }

      @media (min-width: 769px) {
        .content.margin-right {
          margin-right: 200px;
        }

        .margin-note {
          background: rgba(153, 153, 153, 0.2);
          display: block;
          font-size: small;
          margin-right: -200px;
          margin-bottom: 5px;
          padding: 5px 0;
          float: right;
          clear: both;
          width: 180px;
        }

        .margin-note .n {
          color: #777777;
        }
      }

      a[rel='footnote'] {
        font-size: calc(
          var(--pb-footnote-font-size, var(--pb-content-font-size, 75%)) * var(--pb-zoom-factor, 1)
        );
        font-family: var(--pb-footnote-font-family, --pb-content-font-family);
        vertical-align: super;
        color: var(--pb-footnote-color, var(--pb-color-primary, #333333));
        text-decoration: none;
        padding: var(--pb-footnote-padding, 0 0 0 0.25em);
        line-height: 1;
      }

      .list dt {
        float: left;
      }

      .footnote .fn-number {
        float: left;
        font-size: var(--pb-footnote-font-size, var(--pb-content-font-size, 75%));
      }

      .observer {
        display: block;
        width: 100%;
        height: var(--pb-view-loader-height, 16px);
        font-family: var(--pb-view-loader-font, --pb-base-font);
        color: var(--pb-view-loader-color, black);
        background: var(--pb-view-loader-background, #909090);
        background-image: var(
          --pb-view-loader-background-image,
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255, 255, 255, 0.5) 35px,
            rgba(255, 255, 255, 0.5) 70px
          )
        );
        animation-name: loader;
        animation-timing-function: linear;
        animation-duration: 2s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
      }

      @keyframes loader {
        0% {
          background-position: 3rem 0;
        }

        100% {
          background-position: 0 0;
        }
      }

      .scroll-fragment {
        animation: fadeIn ease 500ms;
      }

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `}render(){return[t`
        <div id="view" part="content">
          ${this._style}
          ${this.infiniteScroll?t`<div id="top-observer" class="observer"></div>`:null}
          <div class="columns">
            <div id="column1">${this._column1}</div>
            <div id="column2">${this._column2}</div>
          </div>
          <div id="content">${this._content}</div>
          ${this.infiniteScroll?t`<div id="bottom-observer" class="observer"></div>`:null}
          <div id="footnotes" part="footnotes">${this._footnotes}</div>
        </div>
        <pb-fetch
          id="loadContent"
          verbose
          handle-as="json"
          method="get"
          with-credentials
          @response="${this._handleContent}"
          @error="${this._handleError}"
        ></pb-fetch>
      `]}}customElements.define("pb-view",nl);const sl=[0,100],rl=[0,100],ol=e=>`${1===e.length?"0":""}${e}`,al=(e,t,i)=>Math.max(Math.min(e,i),t),ll=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,cl=(e,t,i)=>{const n=ll(e,t);for(let s=0;s<(null==i?void 0:i.length);s++){const r=i[s];if(2===(null==r?void 0:r.length)&&n>=r[0]&&n<=r[1])return cl(e,t,i)}return n},dl=e=>{const t=e.length;let i=0;for(let n=0;n<t;n++)i=(i<<5)-i+e.charCodeAt(n),i&=i;return i},pl=(e,t)=>"number"==typeof t?t:e%Math.abs(t[1]-t[0])+t[0],hl=(e,t)=>"number"==typeof e?al(Math.abs(e),...t):1===e.length||e[0]===e[1]?al(Math.abs(e[0]),...t):[Math.abs(al(e[0],...t)),al(Math.abs(e[1]),...t)],ul=(e,t,i)=>(i<0?i+=1:i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e),gl=(e,t,i)=>{let n,s,r;if(e/=360,i/=100,0===(t/=100))n=s=r=i;else{const o=i<.5?i*(1+t):i+t-i*t,a=2*i-o;n=ul(a,o,e+1/3),s=ul(a,o,e),r=ul(a,o,e-1/3)}return[Math.round(255*n),Math.round(255*s),Math.round(255*r)]},fl=(e,t,i,n)=>(299*e+587*t+114*i)/1e3>=n,ml=(e,t,i)=>`hsl(${e}, ${t}%, ${i}%)`,bl=(e,t,i,n)=>"rgb"===n?`rgb(${e}, ${t}, ${i})`:`#${ol(e.toString(16))}${ol(t.toString(16))}${ol(i.toString(16))}`,vl=(e,{format:t="hex",saturation:i=[50,55],lightness:n=[50,60],differencePoint:s=130}={})=>{const r=Math.abs(dl(String(e))),o=pl(r,[0,360]),a=pl(r,hl(i,sl)),l=pl(r,hl(n,rl)),[c,d,p]=gl(o,a,l);return{color:"hsl"===t?ml(o,a,l):bl(c,d,p,t),isLight:fl(c,d,p,s)}};function yl(e,t){let i=e;for(;i.parentNode!==t;)i=i.parentElement;return i}function _l(e){let t=e;t.nodeType===Node.TEXT_NODE&&(t=t.parentNode);const i=t.getAttribute("href");return i&&/^#fn_.*$/.test(i)}function wl(e,t,i){const n=document.createTreeWalker(e);for(n.currentNode=t;n.previousNode();){const e=n.currentNode;e.nodeType===Node.ELEMENT_NODE||_l(e)||(i+=e.textContent.length)}return i}function xl(e,t,i="start"){if(e.nodeType===Node.ELEMENT_NODE){const n=e.closest("[data-tei]");if(0===t)return{parent:n.getAttribute("data-tei"),offset:0};const s=n.childNodes[t];return{parent:n.getAttribute("data-tei"),offset:"end"===i?wl(n,s,0)-1:wl(n,s,0)}}const n=e.parentNode.closest("[data-tei]");if(n)return{parent:n.getAttribute("data-tei"),offset:wl(n,e,t)};console.error("No container with data-tei found for %o",e.parentNode)}function kl(e,t){let i=0,n=e.parentNode;for(;n&&n!==e.getRootNode();)n.classList.contains(t)&&(i+=1),n=n.parentNode;return i}function Al(e,t){const i=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);return i.currentNode=t,i.nextNode()?i.currentNode:t}function Sl(e,t){let i=t;const n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(;n.nextNode();)if(!_l(n.currentNode)&&n.currentNode.textContent.length>0){if(i-n.currentNode.textContent.length<=0)return[n.currentNode,i];i-=n.currentNode.textContent.length}return null}function $l(e,t,i,n=3){let s=t-1,r=0;for(;s>=0;){if(/[\p{P}\s]/.test(e.charAt(s))){for(;s>1&&/[\p{P}\s]/.test(e.charAt(s-1));)s-=1;if(r+=1,r===n)break}s-=1}let o=i+1;for(r=0;o<e.length;){if(/[\p{P}\s]/.test(e.charAt(o))){for(;o<e.length-1&&/[\p{P}\s]/.test(e.charAt(o+1));)o+=1;if(r+=1,r===n)break}o+=1}return`... ${e.substring(s,t)}<mark>${e.substring(t,i)}</mark>${e.substring(i,o+1)} ...`}function El(e){let t=e.parentElement;t.textContent.length<40&&(t=t.parentNode);const i=document.createTreeWalker(t,NodeFilter.SHOW_TEXT);let n=0,s=0;const r=[];for(;i.nextNode();)i.currentNode===e&&(s=n),n+=i.currentNode.textContent.length,r.push(i.currentNode.textContent);return[r.join(""),s]}function Ol(e){const t={};return Object.keys(e.properties).forEach(i=>{const n=e.properties[i];n&&n.length>0&&(t[i]=n)}),Object.assign(e,{properties:t})}vl.random=({format:e="hex",saturation:t=[50,55],lightness:i=[50,60],differencePoint:n=130,excludeHue:s}={})=>{t=hl(t,sl),i=hl(i,rl);const r=s?cl(0,359,s):ll(0,359),o="number"==typeof t?t:ll(...t),a="number"==typeof i?i:ll(...i),[l,c,d]=gl(r,o,a);return{color:"hsl"===e?ml(r,o,a):bl(l,c,d,e),isLight:fl(l,c,d,n)}};class Cl extends nl{static get properties(){return Object.assign({key:{type:String},keyMap:{type:Object,attribute:"key-map"},caseSensitive:{type:Boolean}},super.properties)}constructor(){super(),this.key="ref",this.keyMap={},this.caseSensitive=!1,this._ranges=[],this._rangesMap=new Map,this._history=[],this._disabled=!1}connectedCallback(){super.connectedCallback(),this.fill=0;let e=!1;this._inHandler=!1,this._pendingCallback=null;const t=(e=10)=>{this._pendingCallback=setTimeout(()=>{this._selectionChanged()},e)};this._eventHandler=i=>{if("selectionchange"===i.type||this._inHandler)return;if("mousedown"===i.type&&(e=!0),"mouseup"===i.type&&(e=!1),e)return;this._cancelPendingCallback();const n="mouseup"===i.type?10:100;t(n)},document.addEventListener("selectionchange",this._eventHandler.bind(this)),this.shadowRoot.addEventListener("mousedown",this._eventHandler.bind(this)),this.shadowRoot.addEventListener("mouseup",this._eventHandler.bind(this)),this.subscribeTo("pb-add-annotation",e=>this.addAnnotation(e.detail)),this.subscribeTo("pb-edit-annotation",this._editAnnotation.bind(this)),this.subscribeTo("pb-refresh",()=>{this._ranges=[],this._rangesMap.clear(),this._currentSelection=null,this._clearMarkers(),this.emitTo("pb-annotations-changed",{ranges:this._ranges,refresh:!0})}),this.addEventListener("pb-disable",()=>{this._disabled=!0}),this.addEventListener("pb-enable",()=>{this._disabled=!1}),this._resizeHandler()}get annotations(){return this._ranges}set annotations(e){this._ranges=e,this.updateAnnotations(!0),this._markIncompleteAnnotations(),this._initAnnotationColors(),this._annotationStyles()}saveHistory(){this._history.push(JSON.stringify(this._ranges)),this.emitTo("pb-annotations-history",this._history)}getHistory(){return this._history}popHistory(){if(0===this._history.length)return void console.warn("<pb-view-annotate> history is empty");this._scrollTop=this.scrollTop;const e=this._history.pop();this._clearMarkers(),this._ranges=JSON.parse(e),this._rangesMap.clear(),this._refresh(),this.emitTo("pb-annotations-changed",{ranges:this._ranges}),this.emitTo("pb-annotations-history",this._history)}clearHistory(e){this._history=e||[]}firstUpdated(){super.firstUpdated(),this.enableScrollbar(!1),rn(this.shadowRoot,"light-border")}render(){return[...super.render(),t`<div id="marker-layer"></div>`]}zoom(e){super.zoom(e),window.requestAnimationFrame(()=>this.refreshMarkers())}getKey(e){return this.keyMap[e]||this.key}_resizeHandler(){let e=null;const t=()=>{e=setTimeout(()=>{e=null,this.refreshMarkers()},200)};window.addEventListener("resize",()=>{e||this._clearMarkers(),e&&clearTimeout(e),t()})}_refresh(e){super._refresh(e),e&&e.detail&&e.detail.preserveScroll&&(this._scrollTop=this.scrollTop)}_handleContent(){super._handleContent(),this.updateComplete.then(()=>setTimeout(()=>{this._initAnnotationColors(),this._annotationStyles(),this.updateAnnotations(),this._markIncompleteAnnotations(),this._scrollTop&&(this.scrollTop=this._scrollTop,this._scrollTop=void 0),this.emitTo("pb-annotations-loaded")},300))}_updateAnnotation(e,t=!1,i=!1){const n=this.shadowRoot.getElementById("view"),s=Array.from(n.querySelectorAll(`[data-tei="${e.context}"]`)).filter(e=>null===e.closest("pb-popover")&&"footnote"!==e.getAttribute("rel"))[0];if(!s)return null;const r=document.createRange(),o=Sl(s,e.start),a=Sl(s,e.end);if(!o||!a)return console.error("<pb-view-annotate> Invalid range for %o",s),null;if(console.log("<pb-view-annotate> Range before adjust: %o %o",o,a),o[1]===o[0].textContent.length){const e=Al(s,o[0]);e===a[0]?(r.setStart(e,0),o[0]=e,o[1]=0):r.setStartBefore(o[0].nextSibling||e)}else o[0]!==a[0]&&0===o[1]?r.setStartBefore(yl(o[0],s)):r.setStart(o[0],o[1]);o[0]!==a[0]&&a[0].textContent.length-1===a[1]?r.setEndAfter(yl(a[0],s)):r.setEnd(a[0],a[1]),console.log("<pb-view-annotate> Range: %o",r);const l=document.createElement("span"),c=""===e.properties[this.getKey(e.type)]?"incomplete":"";l.className=`annotation annotation-${e.type} ${e.type} ${c} ${e.before?"before":""}`,l.dataset.type=e.type,l.dataset.annotation=JSON.stringify(e.properties);try{r.surroundContents(l)}catch(e){if(t)return null;throw new Error("An error occurred. The annotation may not be displayed. You should consider saving and reloading the document.")}return this._rangesMap.set(l,e),i||this.refreshMarkers(),l}updateAnnotations(e=!1){this._ranges.forEach(t=>{let i;switch(t.type){case"delete":i=this.shadowRoot.querySelector(`[data-tei="${t.node}"]`),i?this._deleteAnnotation(i):console.error("Annotation %s not found",t.context);break;case"modify":if(i=this.shadowRoot.querySelector(`[data-tei="${t.node}"]`),!i){console.error("<pb-view-annotate> Target node not found for %o",t.node);break}i.dataset.annotation=JSON.stringify(t.properties);break;default:this._updateAnnotation(t,e,!0)}}),window.requestAnimationFrame(()=>this.refreshMarkers())}_getSelection(){return this.shadowRoot.getSelection?this.shadowRoot.getSelection():window.getSelection()}_selectionChanged(){if(this._disabled)return;const e=this._getSelection(),t=this._selectedRange(e);if(t){let i=!1;const n=t.commonAncestorContainer;if(n.nodeType===Node.ELEMENT_NODE){if(t.startContainer.parentElement!==n){const e=yl(t.startContainer,n);t.setStartBefore(e),i=!0}if(t.endContainer.parentElement!==n){const e=yl(t.endContainer,n);t.setEndAfter(e),i=!0}}this._markSelection(t),this._currentSelection=t,console.log("<pb-view-annotate> selection: %o",t),i&&setTimeout(()=>{this._inHandler=!0;try{e.removeAllRanges(),e.addRange(t)}finally{this._inHandler=!1}},100),this.emitTo("pb-selection-changed",{hasContent:!0,range:t,selected:e.toString()})}else this._clearSelection(),this.emitTo("pb-selection-changed",{hasContent:!1})}_markSelection(e){const t=this.shadowRoot.getElementById("view").getBoundingClientRect(),i=this.shadowRoot.getElementById("marker-layer");this._clearSelection();const n=e.getClientRects();for(let e=0;e<n.length;e++){const s=n[e],r=document.createElement("div");r.className="selection-marker",r.style.position="absolute",r.style.left=s.left-t.left+"px",r.style.top=s.top-t.top+"px",r.style.width=`${s.width}px`,r.style.height=`${s.height}px`,r.style.backgroundColor="var(--pb-annotation-selection, #f9ea7678)",i.appendChild(r)}}_clearSelection(){const e=this.shadowRoot.getElementById("marker-layer");e.querySelectorAll(".selection-marker").forEach(t=>{e.removeChild(t)})}updateAnnotation(e,t=!1){e=Ol(e);const i=this._updateAnnotation(e,t);return i&&(this._ranges.push(e),this.emitTo("pb-annotations-changed",{type:e.type,text:e.text,ranges:this._ranges})),i}addAnnotation(e){const t=e.range||this._currentSelection;if(t.collapsed&&!e.before)return null;const i=xl(t.startContainer,t.startOffset),n=xl(t.endContainer,t.endOffset,"end"),s={context:i.parent,start:"after"===e.position?n.offset:i.offset,end:void 0===e||"before"===e.position?i.offset:n.offset,text:e.before?"":t.cloneContents().textContent,before:e.before};return e.type&&(s.type=e.type),e.properties&&(s.properties=e.properties),console.log("<pb-view-annotate> range adjusted: %o",s),this._ranges.push(Ol(s)),this.emitTo("pb-annotations-changed",{type:s.type,text:s.text,ranges:this._ranges}),this._checkAnnotationColor(s.type),this._updateAnnotation(s)}deleteAnnotation(e){if(e.dataset.tei){const t=this._ranges.findIndex(t=>"modify"===t.type&&t.node===e.dataset.tei);t>-1&&this._ranges.splice(t,1);const i=e.parentNode.closest("[data-tei]"),n={type:"delete",node:e.dataset.tei,context:i.dataset.tei};this._ranges.push(n)}else{const t=this._rangesMap.get(e);this._rangesMap.delete(e);const i=this._ranges.indexOf(t);console.log("<pb-view-annotate> deleting annotation %o",t),this._ranges.splice(i,1)}this._deleteAnnotation(e)}_deleteAnnotation(e){const t=document.createRange();for(let i=0;i<e.childNodes.length;i++){const n=e.childNodes[i].cloneNode(!0);e.parentNode.insertBefore(n,e),0===i&&t.setStartBefore(n),i===e.childNodes.length-1&&t.setEndAfter(n)}e.parentNode.removeChild(e),this.emitTo("pb-annotations-changed",{ranges:this._ranges}),window.requestAnimationFrame(()=>this.refreshMarkers()),this._inHandler=!0;try{const e=this._getSelection();e.removeAllRanges(),e.addRange(t)}catch(e){console.error("<pb-view-annotate> %s",e.message)}finally{this._inHandler=!1}}editAnnotation(e,t){if(e.dataset.tei){const i=e.closest("[data-tei]");let n=this._ranges.find(t=>"modify"===t.type&&t.node===e.dataset.tei);n||(n={type:"modify",node:e.dataset.tei,context:i.dataset.tei},this._ranges.push(n)),n.properties=t,n=Ol(n),this.emitTo("pb-annotations-changed",{ranges:this._ranges})}else{let i=this._rangesMap.get(e);i?(i.properties=t,i=Ol(i),this.emitTo("pb-annotations-changed",{ranges:this._ranges})):console.error("no range found for edit span %o",e)}const i=JSON.parse(e.dataset.annotation),n=Object.assign(i||{},t);e.dataset.annotation=JSON.stringify(n),""!==n[this.getKey(e.dataset.type)]&&e.classList.remove("incomplete")}_editAnnotation(e){this.editAnnotation(e.detail.target,e.detail.properties)}_selectedRange(e){if(!e||0===e.rangeCount)return null;if(e.anchorNode.getRootNode()!==this.shadowRoot)return null;const t=e.getRangeAt(0);return t.collapsed?null:t}_cancelPendingCallback(){this._pendingCallback&&(clearTimeout(this._pendingCallback),this._pendingCallback=null)}_createTooltip(e){if(e._tippy||!e.dataset.annotation)return;const t=document.createElement("div");t.className="annotation-popup";const i=document.createElement("div");i.className="info",t.appendChild(i);const n=document.createElement("div");n.className="toolbar";const s=document.createElement("span");if(s.className="annotation-type",n.appendChild(s),e.dataset.annotation){const t=document.createElement("pb-icon-button");t.setAttribute("icon","icons:create"),t.setAttribute("title",f("annotations.edit")),t.addEventListener("click",()=>{const t=JSON.parse(e.dataset.annotation),i=e.textContent;this.emitTo("pb-annotation-edit",{target:e,type:e.dataset.type,properties:t,text:i})}),n.appendChild(t)}const r=document.createElement("pb-icon-button");r.setAttribute("icon","icons:delete"),r.setAttribute("title",f("annotations.delete")),r.addEventListener("click",()=>{this.saveHistory(),this.deleteAnnotation(e)}),n.appendChild(r),t.appendChild(n);const o=this.shadowRoot.getElementById("view");Qi(e,{content:t,allowHTML:!0,interactive:!0,appendTo:o.nodeType===Node.DOCUMENT_NODE?document.body:o,theme:"light-border",hideOnClick:!1,maxWidth:"auto",trigger:"click",placement:"left",popperOptions:{modifiers:[{name:"flip",options:{fallbackPlacements:["right","top","bottom"]}}]},onTrigger:(n,r)=>{r.preventDefault(),r.stopPropagation();const{type:o}=e.dataset,a=JSON.parse(e.dataset.annotation)||{},l=this._annotationColors.get(o);if(s.innerHTML=o,s.style.backgroundColor=`var(--pb-annotation-${o})`,s.style.color=`var(${l&&l.isLight?"--pb-color-primary":"--pb-color-inverse"})`,a[this.getKey(o)])this.emitTo("pb-annotation-detail",{type:o,id:a[this.getKey(o)],container:i,span:e,ready:()=>n.setContent(t)});else{i.innerHTML="";const e=Object.keys(a);if(0===e.length){const e=document.createElement("p");e.innerHTML=f("annotations.no-properties"),i.appendChild(e)}else{const t=document.createElement("table");e.forEach(e=>{const i=document.createElement("tr"),n=document.createElement("td");n.innerHTML=e,i.appendChild(n);const s=document.createElement("td");s.innerHTML=JSON.stringify(a[e],null,2),i.appendChild(s),t.appendChild(i)}),i.appendChild(t)}}},onClickOutside:(e,t)=>{e.hideWithInteractivity(t)}})}_showMarker(e,t,i,n=0){const s=e.getClientRects(),{type:r}=e.dataset;if(!e.classList.contains("before"))for(let e=0;e<s.length;e++){const o=s[e],a=document.createElement("div");a.className=`marker annotation-${r}`,a.style.position="absolute",a.style.left=o.left-i.left+"px",a.style.top=`${o.top-i.top+o.height}px`,a.style.marginTop=`${n}px`,a.style.width=`${o.width}px`,a.style.height="3px",a.style.backgroundColor=`var(--pb-annotation-${r})`,a.part="annotation",t.appendChild(a)}this._createTooltip(e)}_clearMarkers(){this.shadowRoot.getElementById("marker-layer").innerHTML=""}refreshMarkers(){const e=this.shadowRoot.getElementById("view"),t=e.getBoundingClientRect(),i=this.shadowRoot.getElementById("marker-layer");i.style.display="none",this._clearMarkers(),e.querySelectorAll(".annotation").forEach(e=>{e._tippy&&e._tippy.destroy(),this._showMarker(e,i,t,5*kl(e,"annotation"))}),i.style.display="block"}search(e,t){function i(e){let t=e.replace(/[/.?+*\\]/g,e=>`\\${e}`).replace(/[\s\n\t]+/g,"\\s+");return/^\w/.test(t)&&(t=`\\b${t}`),/\w$/.test(t)&&(t=`${t}\\b`),t}function n(e){return e.nodeType===Node.TEXT_NODE?NodeFilter.FILTER_ACCEPT:e.classList.contains("annotation-popup")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP}n.acceptNode=n;const s=[];if(!t||0===t.length)return s;const r=t.filter(e=>e&&e.length>0).map(e=>i(e)).join("|");console.log(`<pb-view-annotate> Searching content for ${r}...`);const o=new RegExp(r,this.caseSensitive?"g":"gi"),a=document.createTreeWalker(this.shadowRoot.getElementById("view"),NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,n);for(;a.nextNode();){const t=a.currentNode,i=Array.from(t.textContent.matchAll(o));for(const n of i){const i=n.index+n[0].length;let r=!1,o=null;const a=t.parentNode.dataset.annotation,l=t.parentNode.dataset.type;if(a&&l){r=l===e,o=(JSON.parse(a)||{})[this.getKey(e)]}const c=xl(t,n.index),d=xl(t,i,"end"),[p,h]=El(t),u={annotated:r,context:c.parent,start:c.offset,end:d.offset,textNode:t,kwic:$l(p,h+n.index,h+i)};u[this.getKey(e)]=o,s.push(u)}}return s}scrollTo(e){const t=this.shadowRoot.getElementById("view"),i=document.createRange();if(e.annotated)i.selectNode(e.textNode);else{const n=Array.from(t.querySelectorAll(`[data-tei="${e.context}"]`)).filter(e=>null===e.closest("pb-popover")&&"footnote"!==e.getAttribute("rel"))[0],s=Sl(n,e.start),r=Sl(n,e.end);i.setStart(s[0],s[1]),i.setEnd(r[0],r[1])}const n=t.getBoundingClientRect(),s=i.getBoundingClientRect();let r=t.querySelector("[part=highlight]");r||(r=document.createElement("div"),r.part="highlight",r.style.position="absolute",t.appendChild(r)),r.style.left=s.left-n.left-4+"px",r.style.top=s.top-n.top-4+"px",r.style.width=`${s.width+4}px`,r.style.height=`${s.height}px`,i.startContainer.parentNode.scrollIntoView(!0)}hideMarker(){const e=this.shadowRoot.getElementById("view").querySelector("[part=highlight]");e&&(e.style.top="-1000px")}_markIncompleteAnnotations(){this.shadowRoot.getElementById("view").querySelectorAll(".annotation.authority").forEach(e=>{if(e.dataset.type){const t=JSON.parse(e.dataset.annotation),i=this.getKey(e.dataset.type);t[i]&&0!==t[i].length?e.classList.remove("incomplete"):e.classList.add("incomplete")}})}_initAnnotationColors(){this._annotationColors=new Map;const e=new Set;this.shadowRoot.getElementById("view").querySelectorAll(".annotation").forEach(t=>{t.dataset.type&&e.add(t.dataset.type)}),e.forEach(e=>{this._annotationColors.set(e,vl(`annotation-${e.repeat(4)}`,{saturation:70,lightness:[30,60]}))}),this.emitTo("pb-annotation-colors",{colors:this._annotationColors})}_checkAnnotationColor(e){this._annotationColors.has(e)||(this._annotationColors.set(e,vl(`annotation-${e.repeat(4)}`,{saturation:70,lightness:[30,60]})),this._annotationStyles(),this.emitTo("pb-annotation-colors",{colors:this._annotationColors}))}_annotationStyles(){const e=this.shadowRoot.getElementById("view");let t=e.querySelector("_annotation-styles");t&&t.parentNode.removeChild(t);const i=[],n=[];this._annotationColors.forEach((e,t)=>{i.push(`--pb-annotation-${t}: ${e.color};`),i.push(`--pb-annotation-${t}-border: 2px solid var(--pb-annotation-${t});`),n.push(`\n        .annotation-${t}::after {\n          background-color: var(--pb-annotation-${t});\n          border-color: var(--pb-annotation-${t});\n          color: var(${e.isLight?"--pb-color-primary":"--pb-color-inverse"});\n        }\n        .annotation-${t}.incomplete::after {\n          background: repeating-linear-gradient(\n            315deg,\n            var(--pb-annotation-${t}),\n            var(--pb-annotation-${t}) 5px,\n            var(${e.isLight?"--pb-annotation-stripes-light":"--pb-annotation-stripes-dark"}) 5px,\n            var(${e.isLight?"--pb-annotation-stripes-light":"--pb-annotation-stripes-dark"}) 10px\n          );\n          color: var(${e.isLight?"--pb-color-primary":"--pb-color-inverse"});\n        }\n      `)});const s=`\n      :host {\n        ${i.join("\n")}\n      }\n\n      ${n.join("\n")}\n    `;t=document.createElement("style"),t.className="_annotation-styles",t.innerHTML=s,e.insertBefore(t,e.firstChild)}static get styles(){return[super.styles,n`
        .annotation-type {
          display: inline-block;
          text-align: right;
          padding: 4px;
        }

        .annotation-popup .toolbar {
          margin-top: 1em;
        }

        .annotation-popup table {
          width: 100%;
        }

        .annotation-popup td:nth-child(1) {
          font-weight: bold;
        }

        .annotation-popup td:nth-child(1)::after {
          content: ': ';
        }

        .annotation {
          pointer-events: none;
          cursor: pointer;
        }

        .annotation::after {
          content: attr(data-type);
          margin-left: 4px;
          pointer-events: all;
          font-family: var(--pb-base-font-family);
          font-size: 0.8rem;
          font-style: normal;
          font-weight: normal;
          text-decoration: none;
          font-variant: normal;
          padding: 2px;
        }

        .annotation.before::after {
          margin-left: 0;
          border-radius: 4px;
        }

        [part='highlight'] {
          border: 3px solid rgb(255, 174, 0);
          border-radius: 8px;
        }
      `]}}customElements.define("pb-view-annotate",Cl);class Tl extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{direction:{type:String},zoomFactor:{type:Number,reflect:!0,attribute:"zoom-factor"}})}constructor(){super(),this.direction="in",this.zoomFactor=1}connectedCallback(){super.connectedCallback(),this._loadZoomPreference()}_handleClick(){this.emitTo("pb-zoom",{direction:this.direction}),this.zoom(this.direction)}zoom(e){const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--pb-zoom-factor")||"1"),i=.1,n=.5,s=2;let r="in"===e?Math.min(t+i,s):Math.max(t-i,n);document.documentElement.style.setProperty("--pb-zoom-factor",r.toString()),this.zoomFactor=r,localStorage.setItem("pb-zoom-preference",r.toString())}_loadZoomPreference(){const e=localStorage.getItem("pb-zoom-preference");if(e){const t=parseFloat(e);isNaN(t)||(document.documentElement.style.setProperty("--pb-zoom-factor",t.toString()),this.zoomFactor=t)}}render(){return t`
      <button
        type="button"
        @click="${this._handleClick}"
        title="${"in"===this.direction?u("toolbar.zoom.in"):u("toolbar.zoom.out")} (current zoom: ${this.zoomFactor.toFixed(1)})"
      >
        <slot name="icon">
          ${"in"===this.direction?t`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM10 10V7H12V10H15V12H12V15H10V12H7V10H10Z"
                  ></path>
                </svg>
              `:t`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM7 10H15V12H7V10Z"
                  ></path>
                </svg>
              `}
        </slot>
      </button>
    `}static get styles(){return n`
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        cursor: pointer;
        min-width: 24px;
        min-height: 24px;
      }
      button:hover {
        color: inherit;
      }
      svg {
        display: block;
        width: 24px;
        height: 24px;
      }
    `}}customElements.define("pb-zoom",Tl);class Il extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{toggle:{type:String},opened:{type:Boolean,reflect:!0},maxWidth:{type:String,attribute:"max-width"},position:{type:String,reflect:!0}})}constructor(){super(),this.opened=!1,this.position="left"}connectedCallback(){super.connectedCallback();const e=this.toggle?document.getElementById(this.toggle):null;e&&e.addEventListener("click",this._toggle.bind(this)),document.body.addEventListener("click",()=>{this.opened&&(this.opened=!1)}),this.addEventListener("click",e=>e.stopPropagation()),this.subscribeTo("pb-refresh",this._close.bind(this))}firstUpdated(){this.maxWidth?(void 0!==window.visualViewport?window.visualViewport.addEventListener("resize",()=>{this._handleResize()}):window.addEventListener("resize",()=>{this._handleResize()}),this._handleResize()):this.classList.add("overlay")}_handleResize(){const e=document.getElementById(this.toggle),t=`(max-width: ${this.maxWidth})`;window.matchMedia(t).matches?(console.log("<pb-drawer> entering overlay mode"),this.classList.add("overlay"),e&&(e.style.display="")):(console.log("<pb-drawer> leaving overlay mode"),this.classList.remove("overlay"),e&&(e.style.display="none"))}_toggle(e){e&&(e.preventDefault(),e.stopPropagation()),this.opened?this.opened=!1:(this.opened=!0,this.emitTo("pb-load"))}_close(){this.opened=!1}render(){return t` <div part="content"><slot></slot></div> `}static get styles(){return n`
      :host {
        display: block;
      }

      :host(.overlay) {
        position: fixed;
        bottom: 0;
        width: var(--pb-drawer-width, 448px);
        height: 100vh;
        z-index: 1000;
        overflow: auto;
        display: block;
        transition: var(--pb-drawer-transition, 0.5s);
      }
      :host(.overlay[position='left']) {
        left: calc(0px - var(--pb-drawer-width, 448px));
      }
      :host(.overlay[position='right']) {
        right: calc(0px - var(--pb-drawer-width, 448px));
      }

      :host([opened][position='left']) {
        left: 0;
        transition: var(--pb-drawer-transition, 0.5s);
      }
      :host([opened][position='right']) {
        right: 0;
        transition: var(--pb-drawer-transition, 0.5s);
      }

      div {
        padding: 10px;
      }
    `}}customElements.define("pb-drawer",Il);class Ll extends s{static get properties(){return Object.assign(Object.assign({},super.properties),{},{query:{type:String},match:{type:Boolean,reflect:!0}})}constructor(){super(),this.query="(max-width:460px)",this.match=!1}firstUpdated(){void 0!==window.visualViewport?window.visualViewport.addEventListener("resize",()=>{this._handleResize()}):window.addEventListener("resize",()=>{this._handleResize()}),this._handleResize()}_handleResize(){let{query:e}=this;/\(.*\)$/.test(e)||(e=`(${e})`),window.matchMedia(e).matches?!1===this.match&&(this.dispatchEvent(new CustomEvent("changed",{detail:{value:!0},composed:!0,bubbles:!0})),this.match=!0):!0===this.match&&(this.dispatchEvent(new CustomEvent("changed",{detail:{value:!1},composed:!0,bubbles:!0})),this.match=!1)}render(){return t` ${this.match?t`<slot></slot>`:null} `}static get styles(){return n`
      :host {
        display: inherit;
      }
    `}}customElements.define("pb-media-query",Ll);class Rl extends mn{constructor(){super(),this._autoSubmitTargets=new WeakSet}firstUpdated(){const e=this.shadowRoot&&this.shadowRoot.getElementById("form");e&&e.addEventListener("submit",e=>{e.preventDefault(),this._submit()}),this.addEventListener("click",e=>{"searchButtonTop"===e.target.slot&&this.submit(),"searchButtonBottom"===e.target.slot&&this.submit(),"resetButton"===e.target.slot&&this._reset()}),this._submissionHandlers()}render(){return t`
      <form id="form" action="" accept="text/html" method="GET" novalidate>
        <slot name="searchButtonTop"></slot>
        <slot></slot>
        <slot name="searchButtonBottom"></slot>
        <slot name="resetButton"></slot>
      </form>

      <pb-fetch
        id="loadContent"
        verbose
        handle-as="text"
        method="get"
        with-credentials
        @response="${this._handleContent}"
        @error="${this._handleError}"
      ></pb-fetch>
      <pb-dialog id="errorDialog" title="Error">
        <p id="errorMessage"></p>
        <div slot="footer">
          <button rel="prev" type="button">Close</button>
        </div>
      </pb-dialog>
    `}static get styles(){return n`
      :host {
        display: block;
      }
    `}submit(){const e=this.shadowRoot&&this.shadowRoot.getElementById("form");e&&(e.requestSubmit?e.requestSubmit():"function"==typeof e.submit&&e.submit())}_submit(){const e=this.serializeForm();this.emitTo("pb-search-resubmit",{params:e}),this.emitTo("pb-submit",{params:e})}_reset(){const e=this.shadowRoot&&this.shadowRoot.getElementById("form");e&&"function"==typeof e.reset&&e.reset()}serializeForm(){const e=this.shadowRoot&&this.shadowRoot.getElementById("form");if(!e)return{};const t=Array.from(e.elements||[]),i=Array.from(this.querySelectorAll("input, select, textarea")),n=[...new Set([...t,...i])].filter(e=>e.name&&!e.disabled&&!e.closest("[disabled]")),s={};n.forEach(e=>{e.name in s||(s[e.name]=null)});const r={};return n.forEach(e=>{if("checkbox"===e.type||"radio"===e.type)e.checked&&(null==r[e.name]?r[e.name]=e.value:Array.isArray(r[e.name])?r[e.name].push(e.value):r[e.name]=[r[e.name],e.value]);else if("select-multiple"===e.type){const t=Array.from(e.selectedOptions).map(e=>e.value);t.length>0&&(r[e.name]=1===t.length?t[0]:t)}else r[e.name]=e.value}),Object.keys(r).forEach(e=>{null!=r[e]&&(s[e]=r[e])}),s}_parseHeaders(e){}_onLoad(e){super._onLoad(e),this.dispatchEvent(new CustomEvent("pb-custom-form-loaded",{detail:e})),this._submissionHandlers()}_handleError(){this.emitTo("pb-end-update");const e=this.shadowRoot.getElementById("loadContent"),{response:t}=e.lastError;if(this.silent)return void console.error("Request failed: %s",t?t.description:"");let i;i=t?t.description:"Server error occurred";const n=this.shadowRoot.getElementById("errorDialog");this.shadowRoot.getElementById("errorMessage").textContent=`Server error: ${i}`,n.openDialog()}_submissionHandlers(){this.autoSubmit&&this.querySelectorAll(this.autoSubmit).forEach(e=>{if(this._autoSubmitTargets.has(e))return;this._autoSubmitTargets.add(e);const t=(e.nodeName||"").toLowerCase();let i="change";e instanceof HTMLButtonElement||"pb-icon-button"===t||"paper-button"===t||"button"===t||"input"===t&&("button"===e.type||"submit"===e.type||"reset"===e.type)?i="click":"paper-input"===t||e instanceof HTMLInputElement&&("text"===e.type||"search"===e.type)?i="keyup":"paper-dropdown-menu"===t&&(i="value-changed"),e instanceof HTMLSelectElement&&(i="change"),e.addEventListener(i,this._submit.bind(this))})}static get properties(){return Object.assign({autoSubmit:{type:String,attribute:"auto-submit"}},super.properties)}}function jl(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)e[n]=i[n]}return e}function Nl(e,t){function i(i,n,s){if("undefined"!=typeof document){"number"==typeof(s=jl({},t,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var o in s)s[o]&&(r+="; "+o,!0!==s[o]&&(r+="="+s[o].split(";")[0]));return document.cookie=i+"="+e.write(n,i)+r}}function n(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var i=document.cookie?document.cookie.split("; "):[],n={},s=0;s<i.length;s++){var r=i[s].split("="),o=r.slice(1).join("=");try{var a=decodeURIComponent(r[0]);if(n[a]=e.read(o,a),t===a)break}catch(e){}}return t?n[t]:n}}return Object.create({set:i,get:n,remove:function(e,t){i(e,"",jl({},t,{expires:-1}))},withAttributes:function(e){return Nl(this.converter,jl({},this.attributes,e))},withConverter:function(e){return Nl(jl({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}customElements.define("pb-custom-form",Rl);var Pl=Nl({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});class Dl extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{src:{type:String},url:{type:String},type:{type:String},odd:{type:String},dialog:{type:String},title:{type:String},source:{type:Boolean},params:{type:String},_target:{type:String,reflect:!0},_href:{type:String,reflect:!0},_token:{type:String}})}constructor(){super(),this.source=!1,this._target="_self",this.type=""}firstUpdated(){this.src&&this.subscribeTo("pb-document",e=>{e.detail.id===this.src&&(this.odd=e.detail.odd)}),this.subscribeTo("pb-refresh",e=>{e.detail.odd&&(this.odd=e.detail.odd,this._href=this._computeURL())}),a("pb-page-ready",()=>{this._target=this._computeTarget(),this._href=this._computeURL()})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t)switch(e){case"source":this._target=this._computeTarget();break;case"src":case"type":case"file":case"odd":case"params":case"url":this._href=this._computeURL()}}render(){return t`
      <a
        id="button"
        @click="${this._handleClick}"
        title="${this.title}"
        target="${this._target}"
        href="${this._href}"
        ><slot></slot
      ></a>
    `}static get styles(){return n`
      :host {
        display: inline-block;
      }

      a {
        text-decoration: var(--pb-download-text-decoration, none);
      }
    `}_computeTarget(){return this.source?"_blank":"_self"}_computeURL(){let e;this._token=797*(new Date).getTime();const t=this.getDocument();if(t)if(this.url)e=`${this.toAbsoluteURL(this.url)}?odd=${this.odd?this.odd:t.odd}.odd`;else{const i=`${this.getEndpoint()}/`;e=this.lessThanApiVersion("1.0.0")?`${t.getFileName()}${this.type?`.${this.type}`:""}?odd=${this.odd?this.odd:t.odd}.odd&cache=no&token=${this._token}`:`${i}api/document/${encodeURIComponent(t.path)}/${this.type||"html"}?odd=${this.odd?this.odd:t.odd}.odd&token=${this._token}`}else e=/^(?:[a-z]+:)?\/\//i.test(this.url)?this.url:`${this.getEndpoint()}/${this.url}`,e=this.lessThanApiVersion("1.0.0")?`${e}${this.type?`.${this.type}`:""}?odd=${this.odd}&cache=no&token='${this._token}`:`${e}/${this.type}?odd=${this.odd}&token='${this._token}`;return this.params&&(e+=`&${this.params}`),this.source&&(e+="&source=true"),e}_handleClick(e){if(this.dialog){const e=document.getElementById(this.dialog);e&&e.openDialog();const t=this._token,i=window.setInterval(()=>{Pl.get("simple.token")===t&&(window.clearInterval(i),Pl.remove("simple.token"),e&&e.closeDialog())})}"_self"===this._target&&(e.preventDefault(),window.location=this._href)}}customElements.define("pb-download",Dl);class Fl extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{loggedIn:{type:Boolean,attribute:"logged-in",reflect:!0},user:{type:String},password:{type:String},group:{type:String},groups:{type:Array},auto:{type:Boolean},loginLabel:{type:String,reflect:!0,attribute:"login-label"},logoutLabel:{type:String,reflect:!0,attribute:"logout-label"},loginIcon:{type:String,attribute:"login-icon"},logoutIcon:{type:String,attribute:"logout-icon"},_invalid:{type:Boolean},_hasFocus:{type:Boolean}})}constructor(){super(),this.loggedIn=!1,this.loginLabel="login.login",this.logoutLabel="login.as",this.user="",this.groups=[],this.loginIcon="account-circle",this.logoutIcon="supervisor-account",this._hasFocus=!0}firstUpdated(){super.firstUpdated(),this._checkLogin=this.shadowRoot.getElementById("checkLogin"),this._loginDialog=this.shadowRoot.querySelector("pb-dialog"),this.renderRoot.querySelector("form").addEventListener("submit",e=>{e.preventDefault(),this._confirmLogin()}),window.addEventListener("blur",()=>{this._hasFocus=!1}),window.addEventListener("focus",()=>{this._hasFocus||(this._hasFocus=!0,this._checkLogin.body=null,this._checkLogin.generateRequest())}),a("pb-page-ready",e=>{p(e.apiVersion,"1.0.0")?this._checkLogin.url=`${e.endpoint}/api/login/`:this._checkLogin.url=`${e.endpoint}/login`,this._checkLogin.body={user:this.user,password:this.password},this._checkLogin.generateRequest()}),this.addEventListener("keyup",e=>{13===e.keyCode&&(e.preventDefault(),this._confirmLogin())})}render(){return t`
            <button @click="${this._show}" title="${this.user?this.user:this.loginLabel}" part="trigger" type="button">
                ${this.loggedIn?t`
                        <slot name="icon-logout" part="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-person-check"
                            viewBox="0 0 16 16"
                            part="icon"
                          >
                            <path
                              d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                            />
                            <path
                              d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"
                            />
                          </svg>
                        </slot>
                      `:t`
                        <slot name="icon-login">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-person"
                            viewBox="0 0 16 16"
                            part="icon"
                          >
                            <path
                              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                            />
                          </svg>
                        </slot>
                      `}
                <span class="label" part="label">${u(this.loggedIn?this.logoutLabel:this.loginLabel,{user:this.user})}</span>
            </button>

            <form action="login">
                <pb-dialog ?modal="${this.auto}">
                    <div slot="title">${u("login.login")}</div>
                    <label>
                        ${u("login.user")}
                        <input name="user" .value="${this.user}" autofocus placeholder="${u("login.user")}"></input>
                    </label>
                    <label>
                        ${u("login.password")}
                        <input name="password" type="password" placeholder="${u("login.password")}"></input>
                    </label>
                    <slot name="information"></slot>
                    ${this._invalid?t`<p id="message" part="message-invalid">
                            ${u("login.invalid")}<span part="group-invalid"
                              >${this.group?t` (${u("login.requiredGroup",{group:this.group})})`:null}</span
                            >.
                          </p>`:null}
                    <button autofocus slot="footer">${u("login.login")}</button>
                </pb-dialog>
            </form>

            <pb-fetch id="checkLogin" with-credentials
                handle-as="json" @response="${this._handleResponse}" @error="${this._handleError}"
                method="post"
                content-type="application/x-www-form-urlencoded"></pb-fetch>
        `}_show(e){e.preventDefault(),this.loggedIn?(this._checkLogin.body={logout:this.user},this._checkLogin.generateRequest()):this._loginDialog.openDialog()}_confirmLogin(){this.user=this.renderRoot.querySelector('input[name="user"]').value,this.password=this.renderRoot.querySelector('input[name="password"]').value,this._checkLogin.body={user:this.user,password:this.password},this._checkLogin.generateRequest()}_handleResponse(){const e=this._checkLogin.lastResponse;e.user&&this._checkGroup(e)?(e.userChanged=!this.loggedIn||this.user!==e.user,this.loggedIn=!0,this.user=e.user,this.groups=e.groups,this._invalid=!1,this._loginDialog.closeDialog()):(e.userChanged=this.loggedIn,this.loggedIn=!1,this.password=null,this._loginDialog.open?this._invalid=!0:this.auto&&this._loginDialog.openDialog()),this.emitTo("pb-login",e),this.loggedIn?y.currentUser={user:this.user,groups:this.groups}:y.currentUser=null}_handleError(){this.loggedIn=!1,this.password=null;const e={userChanged:this.loggedIn,user:null};this._loginDialog.open?this._invalid=!0:this.auto&&this._loginDialog.openDialog(),y.currentUser=null,this.emitTo("pb-login",e)}_isItemInArray(e,t){return e.some(e=>t===e)}_checkGroup(e){if(this.group){const t=this.group.split(/[\s+,]+/);let i=!1;return e.groups&&t.forEach(async t=>{i=this._isItemInArray(e.groups,t)||i}),i}return!0}static get styles(){return n`
      #message {
        color: var(--pb-login-message-invalid-color, var(--pb-error-color, #f44336));
      }
    `}}customElements.define("pb-login",Fl);class Bl extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{url:{type:String},title:{type:String},method:{type:String},event:{type:String},confirm:{type:String},quiet:{type:Boolean},_message:{type:String}})}constructor(){super(),this.method="get",this.confirm=null,this.quiet=!1,this._running=!1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-update",this._onUpdate.bind(this))}render(){return t`
      <button id="button" @click="${this._handleClick}" title="${this.title}" type="button">
        <slot></slot>
      </button>
      <pb-fetch
        id="loadContent"
        verbose
        handle-as="text"
        method="${this.method}"
        with-credentials
        @error="${this._handleError}"
        @response="${this._handleResponse}"
      ></pb-fetch>
      <pb-message id="confirmDialog"></pb-message>
      <slot name="title" style="display: none"></slot>
    `}firstUpdated(){super.firstUpdated();const e=this.shadowRoot.querySelector("slot[name=title]");this._dialogTitle="",e.assignedNodes().forEach(e=>{this._dialogTitle+=e.innerHTML}),this.button=this.renderRoot.getElementById("button")}static get styles(){return n`
      :host {
        display: block;
      }
      #button {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        text-decoration: underline;
        cursor: pointer;
      }
      #button:hover {
        text-decoration: none;
      }
      slot[name='title'] {
        margin: 0;
      }
      pb-message[open] {
        display: block;
      }
      pb-message:not([open]) {
        display: none;
      }
    `}_handleClick(e){if(e.preventDefault(),!this._running)if(this._running=!0,this.confirm){this.shadowRoot.getElementById("confirmDialog").confirm(this._dialogTitle,f(this.confirm)).then(()=>this.trigger()).catch(()=>console.log("<pb-ajax> Action cancelled"))}else this.trigger()}async trigger(){this.shadowRoot.getElementById("loadContent").url=`${this.getEndpoint()}/${this.url}`,this.emitTo("pb-start-update"),await this.shadowRoot.getElementById("loadContent").generateRequest()}_handleResponse(){this._running=!1;const e=this.shadowRoot.getElementById("loadContent").lastResponse;if(this._message=e,!this.quiet){this.shadowRoot.getElementById("confirmDialog").show(this._dialogTitle,this._message)}this.emitTo("pb-end-update"),this.event&&this.emitTo(this.event)}_handleError(){this._running=!1;const e=this.shadowRoot.getElementById("loadContent").lastError.response,t=(new DOMParser).parseFromString(e,"application/xml").querySelector("message");this._message=t?t.textContent:e;this.shadowRoot.getElementById("confirmDialog").show(f("dialogs.error"),this._message),this.emitTo("pb-end-update")}_onUpdate(e){this.shadowRoot.getElementById("loadContent").params=e.detail.params}}customElements.define("pb-ajax",Bl);class Ml extends(m(o(s))){static get styles(){return n`
      :host {
        display: inline-block;
      }
      ::slotted(*) {
        display: none;
      }
      details {
        position: relative;
        display: inline-block;
      }
      summary {
        color: var(--pb-lang-input-color, inherit);
        cursor: pointer;
        list-style: none;
        padding: 0.5em;
      }
      summary::-webkit-details-marker {
        display: none;
      }
      ul {
        position: absolute;
        top: 100%;
        left: 0;
        max-height: 80vh;
        overflow-y: auto;
        margin: 0;
        padding: 0;
        list-style: none;
        background: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 1000;
      }
      li {
        list-style: none;
        padding: 0.5em 1em;
        cursor: pointer;
      }
      li:hover {
        background: #f0f0f0;
      }
    `}static get properties(){return Object.assign(Object.assign({},super.properties),{},{label:{type:String},selected:{type:String},display:{type:String,default:"value"}})}constructor(){super(),this.label="language",this.display="value"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-i18n-update",e=>{this.selected=e.detail.language.replace(/^([^-]+).*$/,"$1"),this._syncOptions()},[]),a("pb-i18n-update",e=>{this.selected=e.language.replace(/^([^-]+).*$/,"$1"),this._syncOptions()})}render(){return t`
      <details>
        <summary aria-label="${u(this.label)}" title="${u(this.label)}"></summary>
        <ul></ul>
      </details>
      <slot @slotchange="${this._syncOptions}"></slot>
    `}_syncOptions(){const e=this.shadowRoot.querySelector("ul"),t=this.shadowRoot.querySelector("summary");if(!e||!t)return;e.innerHTML="";Array.from(this.querySelectorAll("option, paper-item")).forEach(i=>{const n=document.createElement("li");n.textContent=i.textContent,n.dataset.value=i.value||i.getAttribute("value"),n.dataset.value===this.selected&&(t.textContent="text"===this.display?i.textContent:i[this.display]),n.addEventListener("click",()=>{this._changed({target:{value:n.dataset.value}}),this.shadowRoot.querySelector("details").removeAttribute("open")}),e.appendChild(n)})}_changed(e){const t=e.target.value;t!==this.selected&&(console.log("<pb-lang> Language changed to %s",t),this.emitTo("pb-i18n-language",{language:t}),this.selected=t)}}customElements.define("pb-lang",Ml);class ql extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{selected:{type:Number,reflect:!0}})}constructor(){super(),this.selected=0,this._initialized=!1,this._tabs=[],this._pages=[],this._focusOnSelect=!1,this._onTabClick=this._onTabClick.bind(this),this._onKeyDown=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),a("pb-page-ready",()=>{const e=y.state.tab;void 0!==e&&this._select(parseInt(e,10)||0,{emit:!1,commit:!1}),y.subscribe(this,e=>{void 0!==e.tab&&this._select(parseInt(e.tab,10)||0,{emit:!1,commit:!1})})})}firstUpdated(){super.firstUpdated(),this._applySelection(),this.emitTo("pb-tab",{selected:this.selected})}render(){return t`
      <div class="pb-tabs" role="tablist">
        <slot name="tab" @slotchange=${this._handleTabSlot}></slot>
      </div>
      <div part="pages" class="pb-tabs__pages">
        <slot name="page" @slotchange=${this._handlePageSlot}></slot>
      </div>
    `}static get styles(){return n`
      :host {
        display: block;
      }
      .pb-tabs {
        display: flex;
        gap: 0.25rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      }

      .pb-tabs__pages ::slotted(*) {
        padding-top: 1rem;
      }

      .pb-tabs__pages ::slotted([hidden]) {
        display: none !important;
      }

      .pb-tab {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0.75rem;
        border: none;
        background: transparent;
        font: inherit;
        color: inherit;
        cursor: pointer;
        border-radius: 8px 8px 0 0;
        transition: background-color 120ms ease, color 120ms ease;
      }

      .pb-tab:focus-visible {
        outline: 2px solid #1976d2;
        outline-offset: 2px;
      }

      .pb-tab--active {
        background: #fff;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-bottom-color: transparent;
      }
    `}updated(e){e.has("selected")&&this._applySelection()}_handleTabSlot(e){this._tabs&&this._tabs.length&&this._tabs.forEach(e=>{e.removeEventListener("click",this._onTabClick),e.removeEventListener("keydown",this._onKeyDown)});const t=e.target.assignedElements({flatten:!0});this._tabs=t.filter(e=>e.nodeType===Node.ELEMENT_NODE),this._tabs.forEach((e,t)=>{e.classList.add("pb-tab"),e.setAttribute("role","tab"),e.dataset.pbTabIndex=String(t),e.id||(e.id=`pb-tab-${t}`),"BUTTON"!==e.tagName||e.hasAttribute("type")||e.setAttribute("type","button"),e.addEventListener("click",this._onTabClick),e.addEventListener("keydown",this._onKeyDown)}),this._applySelection()}_handlePageSlot(e){const t=e.target.assignedElements({flatten:!0});this._pages=t.filter(e=>e.nodeType===Node.ELEMENT_NODE),this._pages.forEach(e=>{e.setAttribute("role","tabpanel")}),this._applySelection()}_applySelection(){if(!this._tabs||0===this._tabs.length)return;let e=this.selected;if((null==e||Number.isNaN(Number(e)))&&(e=0),e=Math.max(0,Math.min(Number(e),this._tabs.length-1)),e!==this.selected){const t=this.selected;this.selected=e,this.requestUpdate("selected",t)}this._tabs.forEach((e,t)=>{const i=t===this.selected;e.setAttribute("aria-selected",i?"true":"false"),e.setAttribute("tabindex",i?"0":"-1"),e.classList.toggle("pb-tab--active",i),i&&this._focusOnSelect&&e.focus({preventScroll:!0})}),this._focusOnSelect=!1,this._pages&&this._pages.length&&this._pages.forEach((e,t)=>{const i=this._tabs[t],n=t===this.selected;e.hidden=!n,e.setAttribute("aria-hidden",n?"false":"true"),e.setAttribute("role","tabpanel"),i&&(e.setAttribute("aria-labelledby",i.id),e.id||(e.id=`pb-tab-panel-${t}`),i.setAttribute("aria-controls",e.id))})}_select(e,{emit:t=!0,commit:i=!0,focus:n=!1}={}){if(null==e)return;const s=Number(e);if(Number.isNaN(s))return;this._focusOnSelect=n;const r=this.selected;this.selected=s,this.requestUpdate("selected",r),this._applySelection(),t&&this.emitTo("pb-tab",{selected:this.selected}),i&&this._tabs&&this._tabs.length&&(this._initialized?y.commit(this,{tab:this.selected}):y.replace(this,{tab:this.selected}),this._initialized=!0)}_onTabClick(e){const t=Number(e.currentTarget.dataset.pbTabIndex);Number.isNaN(t)||this._select(t,{focus:!0})}_onKeyDown(e){const t=Number(e.currentTarget.dataset.pbTabIndex);if(Number.isNaN(t)||!this._tabs.length)return;let i=t;switch(e.key){case"ArrowRight":case"ArrowDown":i=(t+1)%this._tabs.length,e.preventDefault();break;case"ArrowLeft":case"ArrowUp":i=(t-1+this._tabs.length)%this._tabs.length,e.preventDefault();break;case"Home":i=0,e.preventDefault();break;case"End":i=this._tabs.length-1,e.preventDefault();break;default:return}this._select(i,{focus:!0})}}customElements.define("pb-tabs",ql);class zl extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{active:{type:Number,reflect:!0},label:{type:String},panels:{type:Array,reflect:!0},draggable:{type:Boolean}})}constructor(){super(),this.active=0,this.label="View",this.panels=null,this.position=-1,this.draggable=!1}connectedCallback(){if(super.connectedCallback(),!this.panels){const e=[];this.querySelectorAll("template").forEach(t=>e.push(t.title)),this.panels=e}this.querySelector("template")&&this._show()}firstUpdated(){const e=this.shadowRoot.querySelector('button[draggable="true"]');let t=null;this.draggable&&e.addEventListener("dragstart",e=>{e.dataTransfer.setDragImage(this,10,10),e.dataTransfer.setData("text",this.position),t=this}),this.addEventListener("dragover",e=>{e.preventDefault()}),document.addEventListener("dragenter",e=>{e.stopPropagation(),e.preventDefault(),t!==this&&(this.contains(e.target)?this.classList.add("dragover"):this.classList.remove("dragover"))}),this.addEventListener("drop",e=>{e.stopPropagation(),e.preventDefault(),t=null,this.dispatchEvent(new CustomEvent("pb-drop",{detail:{panel:e.dataTransfer.getData("text"),target:this},bubbles:!0,composed:!0}))})}render(){return t`
      <nav>
        <ul>
          <li>
            <select name="panels" class="dropdown" @change="${this._update}">
              ${this.panels.map((e,i)=>t`<option value="${i}" ?selected=${i===this.active}>${e}</option>`)}
            </select>
          </li>
        </ul>
        <ul>
          ${this.draggable?t` <li>
                <button draggable="true" type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrows-move"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"
                    />
                  </svg>
                </button>
              </li>`:""}
          <slot name="toolbar"></slot>
        </ul>
      </nav>
      <slot></slot>
    `}static get styles(){return n`
      :host {
        display: block;
      }

      nav,
      nav ul {
        display: flex;
        padding: 0;
        justify-content: space-between;
        align-items: center;
        column-gap: 1rem;
      }

      nav ul,
      nav ul li {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      ::slotted(._pb_panel) {
        overflow: auto;
        max-height: calc(var(--pb-panel-max-height) - 72px);
      }

      :host(.dragover) {
        background-color: var(--pb-grid-highlight-color, var(--pb-highlight-color));
        animation: highlight 1s;
      }

      @keyframes highlight {
        from {
          background-color: transparent;
        }
        to {
          background-color: var(--pb-grid-highlight-color, var(--pb-highlight-color));
        }
      }
    `}_update(){const e=this.shadowRoot.querySelector('[name="panels"]').value;this.active!==e&&(this.active=e,this._show(),this.refresh())}_show(){const e=Array.from(this.querySelectorAll("template"));if(0===e.length)return void this.querySelectorAll("._pb_panel").forEach(e=>e.remove());let t=Number(this.active);Number.isInteger(t)||(t=0),t<0&&(t=0),t>=e.length&&(t=e.length-1),this.active=t,this.querySelectorAll("._pb_panel").forEach(e=>e.remove());const i=e[this.active],n=document.importNode(i.content,!0),s=document.createElement("div");s.className=`_pb_panel _pb_panel${this.active}`,s.appendChild(n),this.appendChild(s),this.emitTo("pb-panel",{panel:this,active:this.active})}refresh(){this.emitTo("pb-refresh",null)}}customElements.define("pb-panel",zl);class Ul extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{panels:{type:Array},direction:{type:String},_columns:{type:Number},animated:{type:String},animation:{type:Boolean}})}constructor(){super(),this.panels=[],this.direction="ltr",this.animated="pb-view",this.animation=!1,this._panelsInitialized=!1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-panel",e=>{const t=this._getPanelIndex(e.detail.panel);if(t<0)return;console.log("<pb-grid> Updating panel %d to show %s",t,e.detail.active);const i="rtl"===this.direction?this.panels.length-t-1:t;console.log("<pb-grid> Panel %d switched to template %s (not committing to registry)",i,e.detail.active)}),this.subscribeTo("pb-zoom",e=>{this.zoom(e.detail.direction)});const e=y.get("panels");if(e){const t=e.split(".").map(e=>parseInt(e,10));t.length>0&&t.length<=10&&t.every(e=>!isNaN(e)&&e>=0&&e<10)&&(console.log("<pb-grid> connectedCallback: Using panels from registry:",t,"overriding template attribute"),this.panels=t,this._panelsInitialized=!0)}else this.panels&&this.panels.length>0&&(console.log("<pb-grid> connectedCallback: Using panels from template attribute:",this.panels,"(no registry value)"),this._panelsInitialized=!0);this._isUpdatingFromRegistry=!1,this._lastPanelsState=null,y.subscribe(this,e=>{if(console.log("<pb-grid> Registry subscribe callback triggered, _isUpdatingFromRegistry:",this._isUpdatingFromRegistry,"state.panels:",e.panels),this._isUpdatingFromRegistry)return void console.log("<pb-grid> Skipping registry subscribe callback due to _isUpdatingFromRegistry flag");const t=e.panels?e.panels.split(".").map(e=>parseInt(e,10)).filter(e=>!isNaN(e)):[],i=t.join(".");this._lastPanelsState!==i?this._panelsInitialized||this.template?(console.log("<pb-grid> Registry subscribe callback rebuilding DOM with panels:",t,"current panels:",this.panels),this._lastPanelsState=i,this.panels=t,this._panelsInitialized=!0,this.innerHTML="",this.panels.forEach(e=>this._insertPanel(e)),this._update()):console.log("<pb-grid> Skipping registry subscribe callback - not yet initialized (template not ready)"):console.log("<pb-grid> Skipping registry subscribe callback - panels state unchanged:",i)}),this._columns=this.panels.length,this.template=this.querySelector("template"),this.template&&this.panels&&this.panels.length>0&&!this._panelsInitialized&&(console.log("<pb-grid> connectedCallback: Template ready, panels from attribute:",this.panels),this._panelsInitialized=!0)}firstUpdated(){const e=y.get("panels");if(e){const t=e.split(".").map(e=>parseInt(e,10)).filter(e=>!isNaN(e)&&e>=0&&e<10);if(t.length>0&&t.length<=10){t.join(".")!==this.panels.join(".")&&(console.log("<pb-grid> firstUpdated: Overriding template panels",this.panels,"with registry value",t),this.panels=t,this._panelsInitialized=!0)}}const t=this.querySelectorAll("._grid_panel").length;0===t&&this.panels&&this.panels.length>0?(console.log("<pb-grid> firstUpdated: Inserting panels:",this.panels,"existing panels:",t),this.panels.forEach(e=>this._insertPanel(e))):console.log("<pb-grid> firstUpdated: Skipping panel insertion - already have",t,"panels"),this._lastPanelsState=this._getState().panels,this._isUpdatingFromRegistry=!0;y.get("panels")!==this._getState().panels&&y.commit(this,this._getState()),this._isUpdatingFromRegistry=!1,this._animate(),this._update(),this.addEventListener("pb-drop",e=>{const t=parseInt(e.detail.panel),i=this._getPanelIndex(e.detail.target);console.log("<pb-grid> Insert panel %d at %d in %s",t,i,this.panels),this.querySelectorAll("._grid_panel").forEach(e=>{e.classList.remove("dragover")}),this.panels.splice(i,0,this.panels.splice(t,1)[0]),this.innerHTML="",this.panels.forEach(e=>this._insertPanel(e)),this._isUpdatingFromRegistry=!0,y.commit(this,this._getState()),this._isUpdatingFromRegistry=!1,this._update()})}_animate(){if(this.animation){document.querySelectorAll(this.animated).forEach((e,t)=>{const i=il(e,{opacity:[0,.6],translateX:[2e3,0],duration:400,delay:100+100*t,ease:"linear"});i&&i.finished?i.finished.then(()=>{il(e,{opacity:[.6,1],duration:200,delay:50*t,ease:"linear"})}):setTimeout(()=>{il(e,{opacity:[.6,1],duration:200,delay:50*t,ease:"linear"})},400+100*t)})}}addPanel(e){let t=e;if(void 0!==e||this.panels.length||(t=0),void 0===e&&this.panels.length){t=this.panels.reduce((e,t)=>Math.max(e,t),0)+1}console.log("<pb-grid> Adding panel with value:",t),console.log("<pb-grid> Current panels before add:",this.panels),console.log("<pb-grid> Current panel count before add:",this.querySelectorAll("._grid_panel").length),this._columns+=1,this.panels.push(t),this._insertPanel(t),this._isUpdatingFromRegistry=!0,y.commit(this,this._getState()),this._isUpdatingFromRegistry=!1,this._update(),this.emitTo("pb-refresh"),console.log("<pb-grid> After adding panel - panels:",this.panels),console.log("<pb-grid> After adding panel - panel count:",this.querySelectorAll("._grid_panel").length)}removePanel(e){let t,i;"number"==typeof e?(t=this.panels.indexOf(e),i=this.querySelector(`[active="${e}"]`)):(i=e,t=this._getPanelIndex(e)),console.log("<pb-grid> Removing panel %d",t),console.log("<pb-grid> Container:",i),console.log("<pb-grid> Current panels:",[...this.panels]),console.log("<pb-grid> Current panel count:",this.querySelectorAll("._grid_panel").length),this.panels.splice("rtl"===this.direction?this.panels.length-t-1:t,1),i.parentNode.removeChild(i),this._columns-=1,this._isUpdatingFromRegistry=!0,y.commit(this,this._getState()),this._isUpdatingFromRegistry=!1,this._assignPanelIds(),this._update(),console.log("<pb-grid> After removal - panels:",[...this.panels]),console.log("<pb-grid> After removal - panel count:",this.querySelectorAll("._grid_panel").length)}_insertPanel(e){console.log("<pb-grid> _insertPanel called with active:",e),console.log("<pb-grid> Template content:",this.template.content),console.log("<pb-grid> Template firstElementChild:",this.template.content.firstElementChild);const t=document.importNode(this.template.content.firstElementChild,!0);console.log("<pb-grid> Cloned element:",t),t.setAttribute("active",e),"ltr"===this.direction||0===this.querySelectorAll("._grid_panel").length?this.appendChild(t):this.insertBefore(t,this.firstElementChild),t.classList.add("_grid_panel"),this._assignPanelIds(),console.log("<pb-grid> After _insertPanel - DOM panels:",this.querySelectorAll("._grid_panel").length)}_update(){const e=Array.from(this.children).filter(e=>!(e instanceof HTMLTemplateElement)).map(e=>{const t=window.getComputedStyle(e).getPropertyValue("max-width");return t&&"none"!==t?t:"1fr"});this.style.setProperty("--pb-computed-column-widths",e.join(" "))}_getPanelIndex(e){return Array.from(this.querySelectorAll("._grid_panel")).indexOf(e)}_assignPanelIds(){this.querySelectorAll("._grid_panel").forEach((e,t)=>{e.position=t})}_getState(){const e=this.panels.filter(e=>"number"==typeof e&&!isNaN(e)&&e>=0&&e<10);return{panels:e.join(".")}}render(){return t`<slot></slot>`}static get styles(){return n`
      :host {
        display: grid;
        grid-template-columns: var(--pb-grid-column-widths, var(--pb-computed-column-widths));
        grid-column-gap: var(--pb-grid-column-gap, 20px);
        justify-content: space-between;
        font-size: calc(var(--pb-content-font-size, 1rem) * var(--pb-zoom-factor, 1));
      }
    `}zoom(e){}}customElements.get("pb-grid")||customElements.define("pb-grid",Ul);class Hl extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{action:{type:String},grid:{type:String},initial:{type:Number}})}constructor(){super(),this.action="add",this.initial=0}connectedCallback(){super.connectedCallback()}render(){return t` <button @click="${this._click}" type="button"><slot></slot></button> `}static get styles(){return n`
      :host {
        display: block;
      }
    `}_click(){const e=document.querySelector(this.grid);if(!e||!e.addPanel)return console.error("<pb-grid-action> grid not found: %s",this.grid);if(console.log("<pb-grid-action> Clicked, action:",this.action),console.log("<pb-grid-action> Grid found:",e),console.log("<pb-grid-action> Closest element:",this.closest("pb-panel,pb-grid")),"add"===this.action)e.addPanel(this.initial);else{const t=this.closest("pb-panel,pb-grid");console.log("<pb-grid-action> Calling removePanel with:",t),e.removePanel(t)}}}function Vl(e,t){return e.some(e=>t===e)}function Wl(e,t,i){if(null==e)return!1;if(i){if(!t)return!1;const e=i.split(/[\s+,]+/);let n=!1;return e.forEach(async e=>{n=Vl(t,e)||n}),n}return!0}customElements.define("pb-grid-action",Hl);class Gl extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{login:{type:String},show:{type:Boolean,reflect:!0},group:{type:String}})}constructor(){super(),this.show=!1}firstUpdated(){this.shadowRoot.querySelector("slot[name=fallback]").assignedNodes().length>0&&(console.log(this),this.classList.add("fallback")),this.subscribeTo("pb-login",e=>{this.show=this._loggedIn(e.detail.user,e.detail.groups)},[]),this.show=y.currentUser&&this._loggedIn(y.currentUser.user,y.currentUser.groups)}render(){return t`
      ${this.show&&!this.disabled?t`<slot></slot>`:t`<slot name="fallback"></slot>`}
    `}static get styles(){return n`
      :host {
        display: none;
      }

      :host(.fallback),
      :host([show]) {
        display: inherit;
      }
    `}_loggedIn(e,t){return Wl(e,t,this.group)}}customElements.define("pb-restricted",Gl);class Yl extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{odds:{type:Array},target:{type:String},_valid:{type:Boolean},_current:{type:String}})}constructor(){super(),this.odds=[]}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-refresh-odds",e=>{this._refresh();const t=this.shadowRoot.getElementById("regenerate"),i=e.detail.odds.map(e=>`odd=${e}`).join("&");this.minApiVersion("1.0.0")?t.url=`api/odd?${i}`:t.url=`modules/lib/regenerate.xql?${i}`,t.trigger()})}firstUpdated(){super.firstUpdated(),this._loader=this.shadowRoot.getElementById("load"),a("pb-page-ready",e=>{l(e.apiVersion,"1.0.0")<0?this._loader.url=`${e.endpoint}/modules/lib/components-odd.xql`:this._loader.url=`${e.endpoint}/api/odd`,this._refresh()})}_refresh(e){this.emitTo("pb-start-update"),this._loader.params=e,this._loader.generateRequest()}_update(){this.emitTo("pb-end-update"),this.odds=this._loader.lastResponse,this.requestUpdate()}_selectODD(e){const t=e.model.itemsIndex;this.odds.forEach((e,i)=>{i!==t&&e.current&&(this.set(`odds.${i}.current`,!1),this.set(`odds.${t}.current`,!0))});const i={odd:`${e.model.item.name}.odd`};console.log("<pb-manage-odds> selected ODD: %o",i),this.emitTo("pb-load",{params:i})}_createODD(e){e.preventDefault();const t=this.shadowRoot.querySelector('input[name="new_odd"]').value,i=this.shadowRoot.querySelector('input[name="title"]').value;if(console.log("<pb-manage-odds> create ODD: %s, %s",t,i),this.lessThanApiVersion("1.0.0"))this._refresh({new_odd:t,title:i});else{const e=this.shadowRoot.getElementById("create");e.url=`${this.getEndpoint()}/api/odd/${t}`,e.params={title:i},this.emitTo("pb-start-update"),e.generateRequest()}}_created(e){this.emitTo("pb-end-update"),201===e.detail.status?this._refresh():console.log("<pb-manage-odds> unexpected response for create odd: %o",e.detail)}_createByExample(){const e={new_odd:this.shadowRoot.querySelector('input[name="new_odd"]').value,title:this.shadowRoot.querySelector('input[name="title"]').value},t=document.getElementById(this.target);t||t.getSelected||console.error("<pb-manage-odds> target %s not found",this.target);const i=t.getSelected();document.querySelectorAll(".document-select paper-checkbox[checked]").forEach(e=>{i.push(e.value)}),console.log("<pb-manage-odds> create ODD by example: %o",i),e.byExample=i,this._refresh(e)}_delete(e){this._current=e,this.shadowRoot.getElementById("deleteDialog").openDialog()}_confirmDelete(){if(this._current){if(console.log("<pb-manage-odds> deleting ODD: %s",this._current),this.lessThanApiVersion("1.0.0"))this._refresh({delete:this._current});else{this.emitTo("pb-start-update");const e=this.shadowRoot.getElementById("delete");e.url=`${this.getEndpoint()}/api/odd/${this._current}`,e.generateRequest()}this._current=null}else console.error("<pb-manage-odds> no file marked for deletion")}_deleted(){const e=this.shadowRoot.getElementById("delete").lastError;410===e.status?this._refresh():(console.error("<pb-manage-odds> failed to delete odd: %d %o",e.status,e.response),this.emitTo("pb-end-update"))}_validate(){const e=this.shadowRoot.getElementById("ironform").validate();this.shadowRoot.getElementById("createBtn").disabled=!e,this.shadowRoot.getElementById("createByEx").disabled=!e}render(){if(!this.odds)return null;const e=this.lessThanApiVersion("1.0.0")?"modules/lib/regenerate.xql":"api/odd";return t`
      ${this.odds.map(i=>t`
            <div class="odd-container">
              <div class="odd">
                <a
                  href="odd-editor.html?odd=${i.name}.odd"
                  target="_blank"
                  title="edit ODD in graphical editor"
                  >${i.label}</a
                >
                <!-- TODO this toolbar should only appear once per ODD files papercard -->
                <header role="group">
                  ${i.canWrite?t`
                      <pb-restricted login="login">
                        <pb-ajax
                          url="${e}?odd=${i.name}.odd"
                          method="post"
                          class="editor-link"
                          emit="${this.emit?this.emit:""}"
                          .emitConfig="${this.emitConfig}"
                        >
                          <h2 slot="title">${u("menu.admin.recompile")}</h2>
                          <button title="Regenerate ODD" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
                                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
                            </svg>
                          </button
                        </pb-ajax>
                      </pb-restricted>
                      <pb-restricted login="login">
                        <button title="Delete ODD" @click="${()=>this._delete(`${i.name}.odd`)}" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                          </svg>
                        </button>
                      </pb-restricted>
                    `:null}
                  <a
                    href="odd-editor.html?odd=${i.name}.odd"
                    target="_blank"
                    class="editor-link"
                    title="edit ODD in graphical editor"
                  >
                    <button type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-card-heading"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"
                        />
                        <path
                          d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"
                        />
                      </svg>
                    </button>
                  </a>
                  <pb-edit-xml path="${i.path}" class="editor-link">
                    <button title="Edit XML" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10l.293.293 6.5-6.5zm-9.761 5.175-.106.106-1.528 3.881 3.881-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                        />
                      </svg>
                    </button>
                  </pb-edit-xml>
                </header>
              </div>
              <div class="odd-description">${i.description}</div>
            </div>
          `)}
      <pb-restricted login="login">
        <form action="" method="GET">
          <input
            id="new_odd"
            name="new_odd"
            type="text"
            required
            pattern="[a-zA-Z0-9-_]+"
            placeholder="${u("odd.manage.filename")}"
          />
          <input
            id="title"
            name="title"
            type="text"
            required
            minlength="1"
            placeholder="${u("odd.manage.title")}"
          />
          <button id="createBtn" @click="${this._createODD}" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-file-earmark-plus"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5"
              />
              <path
                d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"
              />
            </svg>
            <span>${u("odd.manage.create")}</span>
          </button>
        </form>
      </pb-restricted>
      <pb-ajax id="regenerate" url="${e}" method="post"></pb-ajax>
      <pb-fetch
        id="load"
        verbose
        handle-as="json"
        method="get"
        with-credentials
        @response="${this._update}"
      >
      </pb-fetch>
      <pb-fetch id="delete" method="delete" with-credentials @error="${this._deleted}"></pb-fetch>
      <pb-fetch
        id="create"
        method="post"
        with-credentials
        @response="${this._created}"
        @error="${this._created}"
      ></pb-fetch>
      <pb-dialog id="deleteDialog" title="${u("browse.delete")}">
        <p>${u("odd.manage.delete",{file:this.file})}</p>
        <div slot="footer">
          <button autofocus @click="${this._confirmDelete}" rel="prev" type="button">
            ${u("dialogs.yes")}
          </button>
          <button rel="prev" type="button">${u("dialogs.no")}</button>
        </div>
      </pb-dialog>
    `}static get styles(){return n`
      :host {
        display: block;
      }

      .odd-container {
        margin-bottom: 0.5rem;
        border-bottom: 1px solid var(--pb-manage-odds-border-color, #e0e0e0);
        padding-bottom: 0.5rem;
      }

      .odd {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
      }

      .odd a,
      .odd a:link,
      .odd a:visited {
        display: block;
        color: var(--pb-manage-odds-link-color);
      }

      .odd > header {
        display: inline-flex;
        column-gap: 0.25rem;
        justify-content: flex-end;
        align-items: center;
      }

      pb-restricted {
        display: inline-block;
      }

      .odd-description {
        color: #888888;
        font-size: 0.8em;
        margin-top: 0.5rem;
      }

      form {
        margin-top: 1rem;
      }
    `}}customElements.get("pb-manage-odds")||customElements.define("pb-manage-odds",Yl);const Ql=n`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: var(--vaadin-button-gap, 0 var(--vaadin-gap-s));
    white-space: nowrap;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;
    cursor: var(--vaadin-clickable-cursor);
    box-sizing: border-box;
    flex-shrink: 0;
    height: var(--vaadin-button-height, auto);
    margin: var(--vaadin-button-margin, 0);
    padding: var(--vaadin-button-padding, var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container));
    font-family: var(--vaadin-button-font-family, inherit);
    font-size: var(--vaadin-button-font-size, inherit);
    line-height: var(--vaadin-button-line-height, inherit);
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--vaadin-button-text-color, var(--vaadin-text-color));
    background: var(--vaadin-button-background, var(--vaadin-background-container));
    background-origin: border-box;
    border: var(--vaadin-button-border-width, 1px) solid
      var(--vaadin-button-border-color, var(--vaadin-border-color-secondary));
    border-radius: var(--vaadin-button-border-radius, var(--vaadin-radius-m));
    touch-action: manipulation;
  }

  :host([hidden]) {
    display: none !important;
  }

  .vaadin-button-container,
  [part='prefix'],
  [part='suffix'] {
    display: contents;
  }

  [part='label'] {
    display: inline-flex;
  }

  :host(:is([focus-ring], :focus-visible)) {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: 1px;
  }

  :host([theme~='primary']) {
    --vaadin-button-background: var(--vaadin-text-color);
    --vaadin-button-text-color: var(--vaadin-background-color);
    --vaadin-button-border-color: transparent;
  }

  :host([theme~='tertiary']) {
    background: transparent;
    border-color: transparent;
  }

  :host([disabled]) {
    pointer-events: var(--_vaadin-button-disabled-pointer-events, none);
    cursor: var(--vaadin-disabled-cursor);
    opacity: 0.5;
  }

  :host([disabled][theme~='primary']) {
    --vaadin-button-text-color: var(--vaadin-background-container-strong);
    --vaadin-button-background: var(--vaadin-text-color-disabled);
  }

  @media (forced-colors: active) {
    :host {
      --vaadin-button-border-width: 1px;
      --vaadin-button-background: ButtonFace;
      --vaadin-button-text-color: ButtonText;
    }

    :host([theme~='primary']) {
      forced-color-adjust: none;
      --vaadin-button-background: CanvasText;
      --vaadin-button-text-color: Canvas;
      --vaadin-icon-color: Canvas;
    }

    ::slotted(*) {
      forced-color-adjust: auto;
    }

    :host([disabled]) {
      --vaadin-button-background: transparent !important;
      --vaadin-button-border-color: GrayText !important;
      --vaadin-button-text-color: GrayText !important;
      opacity: 1;
    }
  }
`,Kl=e=>class extends(k(e)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged",sync:!0},_lastTabIndex:{type:Number}}}_disabledChanged(e,t){super._disabledChanged(e,t),this.__shouldAllowFocusWhenDisabled()||(e?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.setAttribute("tabindex","-1")):t&&(void 0!==this._lastTabIndex?this.setAttribute("tabindex",this._lastTabIndex):this.tabindex=void 0))}_tabindexChanged(e){this.__shouldAllowFocusWhenDisabled()||this.disabled&&-1!==e&&(this._lastTabIndex=e,this.setAttribute("tabindex","-1"))}focus(e){this.disabled&&!this.__shouldAllowFocusWhenDisabled()||super.focus(e)}__shouldAllowFocusWhenDisabled(){return!1}},Jl=["mousedown","mouseup","click","dblclick","keypress","keydown","keyup"],Zl=e=>class extends(A(Kl(S(e)))){constructor(){super(),this.__onInteractionEvent=this.__onInteractionEvent.bind(this),Jl.forEach(e=>{this.addEventListener(e,this.__onInteractionEvent,!0)}),this.tabindex=0}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button"),this.__shouldAllowFocusWhenDisabled()&&this.style.setProperty("--_vaadin-button-disabled-pointer-events","auto")}_onKeyDown(e){super._onKeyDown(e),e.altKey||e.shiftKey||e.ctrlKey||e.metaKey||this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}__onInteractionEvent(e){this.__shouldSuppressInteractionEvent(e)&&e.stopImmediatePropagation()}__shouldSuppressInteractionEvent(e){return this.disabled}};class Xl extends(Zl($(E(O(C(s)))))){static get is(){return"vaadin-button"}static get styles(){return Ql}static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}render(){return t`
      <div class="vaadin-button-container">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>

        <slot name="tooltip"></slot>
      </div>
    `}ready(){super.ready(),this._tooltipController=new T(this),this.addController(this._tooltipController)}__shouldAllowFocusWhenDisabled(){return window.Vaadin.featureFlags.accessibleDisabledButtons}}I(Xl);const ec=n`
  :host {
    display: inline-flex;
  }

  :host::before {
    background: var(--vaadin-upload-icon-color, currentColor);
    content: '';
    display: inline-block;
    flex: none;
    height: var(--vaadin-icon-size, 1lh);
    mask: var(--_vaadin-icon-upload) 50% / var(--vaadin-icon-visual-size, 100%) no-repeat;
    width: var(--vaadin-icon-size, 1lh);
  }

  :host([hidden]) {
    display: none !important;
  }

  @media (forced-colors: active) {
    :host::before {
      background: CanvasText;
    }
  }
`;class tc extends(E(C(s))){static get is(){return"vaadin-upload-icon"}static get styles(){return ec}static get lumoInjector(){return Object.assign(Object.assign({},super.lumoInjector),{},{includeBaseStyles:!0})}render(){return t``}}I(tc);const ic=document.createElement("template");ic.innerHTML="\n  <style>\n    @font-face {\n      font-family: 'vaadin-upload-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n",document.head.appendChild(ic.content);const nc=n`
  :host {
    display: block;
    width: 100%; /* prevent collapsing inside non-stretching column flex */
    height: var(--vaadin-progress-bar-height, 0.5lh);
    contain: layout size;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='bar'] {
    box-sizing: border-box;
    height: 100%;
    --_padding: var(--vaadin-progress-bar-padding, 0px);
    padding: var(--_padding);
    background: var(--vaadin-progress-bar-background, var(--vaadin-background-container));
    border-radius: var(--vaadin-progress-bar-border-radius, var(--vaadin-radius-m));
    border: var(--vaadin-progress-bar-border-width, 1px) solid
      var(--vaadin-progress-bar-border-color, var(--vaadin-border-color-secondary));
  }

  [part='value'] {
    box-sizing: border-box;
    height: 100%;
    width: calc(var(--vaadin-progress-value) * 100%);
    background: var(--vaadin-progress-bar-value-background, var(--vaadin-border-color));
    border-radius: calc(
      var(--vaadin-progress-bar-border-radius, var(--vaadin-radius-m)) - var(
          --vaadin-progress-bar-border-width,
          1px
        ) - var(--_padding)
    );
    transition: width 150ms;
  }

  /* Indeterminate progress */
  :host([indeterminate]) [part='value'] {
    --_w-min: clamp(8px, 5%, 16px);
    --_w-max: clamp(16px, 20%, 128px);
    animation: indeterminate var(--vaadin-progress-bar-animation-duration, 1s) linear infinite alternate;
    width: var(--_w-min);
  }

  :host([indeterminate][aria-valuenow]) [part='value'] {
    animation-delay: 150ms;
  }

  @keyframes indeterminate {
    0% {
      animation-timing-function: ease-in;
    }

    20% {
      margin-inline-start: 0%;
      width: var(--_w-max);
    }

    50% {
      margin-inline-start: calc(50% - var(--_w-max) / 2);
    }

    80% {
      width: var(--_w-max);
      margin-inline-start: calc(100% - var(--_w-max));
      animation-timing-function: ease-out;
    }

    100% {
      width: var(--_w-min);
      margin-inline-start: calc(100% - var(--_w-min));
    }
  }

  @keyframes indeterminate-reduced {
    100% {
      opacity: 0.2;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [part='value'] {
      transition: none;
    }

    :host([indeterminate]) [part='value'] {
      width: 25%;
      animation: indeterminate-reduced 2s linear infinite alternate;
    }
  }

  @media (forced-colors: active) {
    [part='bar'] {
      border-width: max(1px, var(--vaadin-progress-bar-border-width));
    }

    [part='value'] {
      background: CanvasText !important;
    }
  }
`,sc=e=>class extends e{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,t,i){const n=this._normalizeValue(e,t,i);this.style.setProperty("--vaadin-progress-value",n)}_valueChanged(e){this.setAttribute("aria-valuenow",e)}_minChanged(e){this.setAttribute("aria-valuemin",e)}_maxChanged(e){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,t,i){let n;return e||0===e?t>=i?n=1:(n=(e-t)/(i-t),n=Math.min(Math.max(n,0),1)):n=0,n}};class rc extends(sc($(E(O(C(s)))))){static get is(){return"vaadin-progress-bar"}static get styles(){return nc}render(){return t`
      <div part="bar">
        <div part="value"></div>
      </div>
    `}}I(rc);const oc=n`
  :host {
    align-items: center;
    display: grid;
    gap: var(--vaadin-upload-file-gap, var(--vaadin-gap-s));
    grid-template-columns: var(--vaadin-icon-size, 1lh) minmax(0, 1fr) auto;
    padding: var(--vaadin-upload-file-padding, var(--vaadin-padding-s));
    border-radius: var(--vaadin-upload-file-border-radius, var(--vaadin-radius-m));
  }

  :host(:focus-visible) {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: calc(var(--vaadin-focus-ring-width) * -1);
  }

  [hidden] {
    display: none;
  }

  [part='done-icon']:not([hidden]),
  [part='warning-icon']:not([hidden]) {
    display: flex;
  }

  [part='done-icon']::before,
  [part='warning-icon']::before {
    content: '';
    display: inline-block;
    flex: none;
    height: var(--vaadin-icon-size, 1lh);
    width: var(--vaadin-icon-size, 1lh);
  }

  :is([part$='icon'], [part$='button'])::before {
    mask-size: var(--vaadin-icon-visual-size, 100%);
    mask-position: 50%;
    mask-repeat: no-repeat;
  }

  [part='done-icon']::before {
    background: var(--vaadin-upload-file-done-color, currentColor);
    mask-image: var(--_vaadin-icon-checkmark);
  }

  [part='warning-icon']::before {
    background: var(--vaadin-upload-file-warning-color, currentColor);
    mask-image: var(--_vaadin-icon-warn);
  }

  [part='meta'] {
    grid-column: 2;
  }

  [part='name'] {
    color: var(--vaadin-upload-file-name-color, var(--vaadin-text-color));
    font-size: var(--vaadin-upload-file-name-font-size, inherit);
    font-weight: var(--vaadin-upload-file-name-font-weight, inherit);
    line-height: var(--vaadin-upload-file-name-line-height, inherit);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='status'] {
    color: var(--vaadin-upload-file-status-color, var(--vaadin-text-color-secondary));
    font-size: var(--vaadin-upload-file-status-font-size, inherit);
    font-weight: var(--vaadin-upload-file-status-font-weight, inherit);
    line-height: var(--vaadin-upload-file-status-line-height, inherit);
  }

  [part='error'] {
    color: var(--vaadin-upload-file-error-color, var(--vaadin-text-color));
    font-size: var(--vaadin-upload-file-error-font-size, inherit);
    font-weight: var(--vaadin-upload-file-error-font-weight, inherit);
    line-height: var(--vaadin-upload-file-error-line-height, inherit);
  }

  button {
    background: var(--vaadin-upload-file-button-background, transparent);
    border: var(--vaadin-upload-file-button-border-width, 1px) solid
      var(--vaadin-upload-file-button-border-color, transparent);
    border-radius: var(--vaadin-upload-file-button-border-radius, var(--vaadin-radius-m));
    color: var(--vaadin-upload-file-button-text-color, var(--vaadin-text-color));
    cursor: var(--vaadin-clickable-cursor);
    flex-shrink: 0;
    font: inherit;
    padding: var(
      --vaadin-upload-file-button-padding,
      var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container)
    );
  }

  button:focus-visible {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
  }

  [part='start-button']::before,
  [part='retry-button']::before,
  [part='remove-button']::before {
    background: currentColor;
    content: '';
    display: block;
    height: var(--vaadin-icon-size, 1lh);
    width: var(--vaadin-icon-size, 1lh);
  }

  [part='start-button']::before {
    mask-image: var(--_vaadin-icon-play);
  }

  [part='retry-button']::before {
    mask-image: var(--_vaadin-icon-refresh);
  }

  [part='remove-button']::before {
    mask-image: var(--_vaadin-icon-cross);
  }

  ::slotted([slot='progress']) {
    grid-column: 2 / -1;
    width: auto;
  }

  :host([complete]) ::slotted([slot='progress']),
  :host([error]) ::slotted([slot='progress']) {
    display: none;
  }

  @media (forced-colors: active) {
    :is([part$='icon'], [part$='button'])::before {
      background: CanvasText;
    }
  }
`,ac=e=>class extends(S(e)){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},complete:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},file:{type:Object},fileName:{type:String},held:{type:Boolean,value:!1},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object},progress:{type:Number},status:{type:String},tabindex:{type:Number,value:0},uploading:{type:Boolean,value:!1,reflectToAttribute:!0},_progress:{type:Object}}}static get observers(){return["__updateTabindex(tabindex, disabled)","__updateProgress(_progress, progress, indeterminate)"]}ready(){super.ready(),this.addController(new L(this,"progress","vaadin-progress-bar",{initializer:e=>{this._progress=e}})),this.shadowRoot.addEventListener("focusin",e=>{e.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",e=>{e.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(e){return e.composedPath()[0]===this}__disabledChanged(e){e?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this.tabindex)}_errorMessageChanged(e){this.toggleAttribute("error",Boolean(e))}__updateTabindex(e,t){t?this.removeAttribute("tabindex"):this.setAttribute("tabindex",e)}__updateProgress(e,t,i){e&&(e.value=isNaN(t)?0:t/100,e.indeterminate=i)}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}};class lc extends(ac(E(O(C(s))))){static get is(){return"vaadin-upload-file"}static get styles(){return oc}static get lumoInjector(){return Object.assign(Object.assign({},super.lumoInjector),{},{includeBaseStyles:!0})}render(){return t`
      <div part="done-icon" ?hidden="${!this.complete}" aria-hidden="true"></div>
      <div part="warning-icon" ?hidden="${!this.errorMessage}" aria-hidden="true"></div>

      <div part="meta">
        <div part="name" id="name">${this.fileName}</div>
        <div part="status" ?hidden="${!this.status}" id="status">${this.status}</div>
        <div part="error" id="error" ?hidden="${!this.errorMessage}">${this.errorMessage}</div>
      </div>

      <div part="commands">
        <button
          type="button"
          part="start-button"
          file-event="file-start"
          @click="${this._fireFileEvent}"
          ?hidden="${!this.held}"
          ?disabled="${this.disabled}"
          aria-label="${this.i18n?this.i18n.file.start:d}"
          aria-describedby="name"
        ></button>
        <button
          type="button"
          part="retry-button"
          file-event="file-retry"
          @click="${this._fireFileEvent}"
          ?hidden="${!this.errorMessage}"
          ?disabled="${this.disabled}"
          aria-label="${this.i18n?this.i18n.file.retry:d}"
          aria-describedby="name"
        ></button>
        <button
          type="button"
          part="remove-button"
          file-event="file-abort"
          @click="${this._fireFileEvent}"
          ?disabled="${this.disabled}"
          aria-label="${this.i18n?this.i18n.file.remove:d}"
          aria-describedby="name"
        ></button>
      </div>

      <slot name="progress"></slot>
    `}}I(lc);const cc=n`
  :host {
    display: block;
    overflow: auto;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='list'] {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ::slotted(:first-child) {
    margin-top: var(--vaadin-upload-gap, var(--vaadin-gap-s));
  }

  ::slotted(li:not(:last-of-type)) {
    border-bottom: var(--vaadin-upload-file-list-divider-width, 1px) solid
      var(--vaadin-upload-file-list-divider-color, var(--vaadin-border-color-secondary));
  }
`,dc=e=>class extends e{static get properties(){return{items:{type:Array},i18n:{type:Object},disabled:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["__updateItems(items, i18n, disabled)"]}__updateItems(e,t){e&&t&&this.requestContentUpdate()}requestContentUpdate(){const{items:e,i18n:i,disabled:n}=this;h(t`
          ${e.map(e=>t`
              <li>
                <vaadin-upload-file
                  .disabled="${n}"
                  .file="${e}"
                  .complete="${e.complete}"
                  .errorMessage="${e.error}"
                  .fileName="${e.name}"
                  .held="${e.held}"
                  .indeterminate="${e.indeterminate}"
                  .progress="${e.progress}"
                  .status="${e.status}"
                  .uploading="${e.uploading}"
                  .i18n="${i}"
                ></vaadin-upload-file>
              </li>
            `)}
        `,this)}};class pc extends(dc(E(O(s)))){static get is(){return"vaadin-upload-file-list"}static get styles(){return cc}render(){return t`
      <ul part="list">
        <slot></slot>
      </ul>
    `}}I(pc);const hc=n`
  :host {
    background: var(--vaadin-upload-background, transparent);
    border: var(--vaadin-upload-border-width, 1px) solid
      var(--vaadin-upload-border-color, var(--vaadin-border-color-secondary));
    border-radius: var(--vaadin-upload-border-radius, var(--vaadin-radius-m));
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: var(--vaadin-upload-padding, var(--vaadin-padding-s));
    position: relative;
  }

  :host([dragover-valid]) {
    --vaadin-upload-background: var(--vaadin-background-container);
    --vaadin-upload-border-color: var(--vaadin-text-color);
    border-style: dashed;
  }

  :host([hidden]) {
    display: none !important;
  }

  [hidden] {
    display: none !important;
  }

  [part='primary-buttons'] {
    align-items: center;
    display: flex;
    gap: var(--vaadin-gap-s);
  }

  [part='drop-label'] {
    align-items: center;
    color: var(--vaadin-upload-drop-label-color, var(--vaadin-text-color));
    display: flex;
    font-size: var(--vaadin-upload-drop-label-font-size, inherit);
    font-weight: var(--vaadin-upload-drop-label-font-weight, inherit);
    gap: var(--vaadin-upload-drop-label-gap, var(--vaadin-gap-s));
    line-height: var(--vaadin-upload-drop-label-line-height, inherit);
  }
`,uc=document.createElement("div");let gc;function fc(e,t={}){const i=t.mode||"polite",n=void 0===t.timeout?150:t.timeout;"alert"===i?(uc.removeAttribute("aria-live"),uc.removeAttribute("role"),gc=R.debounce(gc,j,()=>{uc.setAttribute("role","alert")})):(gc&&gc.cancel(),uc.removeAttribute("role"),uc.setAttribute("aria-live",i)),uc.textContent="",setTimeout(()=>{uc.textContent=e},n)}uc.style.position="fixed",uc.style.clip="rect(0px, 0px, 0px, 0px)",uc.setAttribute("aria-live","polite"),document.body.appendChild(uc);const mc=e=>e.test(navigator.userAgent),bc=e=>e.test(navigator.platform),vc=e=>e.test(navigator.vendor);mc(/Android/u),mc(/Chrome/u)&&vc(/Google Inc/u),mc(/Firefox/u),bc(/^iPad/u)||bc(/^Mac/u)&&navigator.maxTouchPoints,bc(/^iPhone/u),mc(/^((?!chrome|android).)*safari/iu);const yc=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();function _c(e,...t){const i=e=>Array.isArray(e),n=e=>e&&"object"==typeof e&&!i(e),s=(e,t)=>{n(t)&&n(e)&&Object.keys(t).forEach(r=>{const o=t[r];n(o)?(e[r]||(e[r]={}),s(e[r],o)):i(o)?e[r]=[...o]:null!=o&&(e[r]=o)})};return t.forEach(t=>{s(e,t)}),e}const wc=(e,t)=>class extends t{static get properties(){return{i18n:{type:Object},__effectiveI18n:{type:Object,sync:!0}}}constructor(){super(),this.i18n=_c({},e)}get i18n(){return this.__customI18n}set i18n(t){t!==this.__customI18n&&(this.__customI18n=t,this.__effectiveI18n=_c({},e,this.__customI18n))}},xc={dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}};class kc extends L{constructor(e){super(e,"add-button","vaadin-button")}initNode(e){e._isDefault&&(this.defaultNode=e),e.addEventListener("touchend",e=>{this.host._onAddFilesTouchEnd(e)}),e.addEventListener("click",e=>{this.host._onAddFilesClick(e)}),this.host._addButton=e}}class Ac extends L{constructor(e){super(e,"drop-label","span")}initNode(e){e._isDefault&&(this.defaultNode=e),this.host._dropLabel=e}}const Sc=e=>class extends(wc(xc,e)){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},nodrop:{type:Boolean,reflectToAttribute:!0,value:yc},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[],sync:!0},maxFiles:{type:Number,value:1/0,sync:!0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},uploadFormat:{type:String,value:"raw"},capture:String,_addButton:{type:Object},_dropLabel:{type:Object},_fileList:{type:Object},_files:{type:Array}}}static get observers(){return["__updateAddButton(_addButton, maxFiles, __effectiveI18n, maxFilesReached, disabled)","__updateDropLabel(_dropLabel, maxFiles, __effectiveI18n)","__updateFileList(_fileList, files, __effectiveI18n, disabled)","__updateMaxFilesReached(maxFiles, files)"]}get i18n(){return super.i18n}set i18n(e){super.i18n=e}get __acceptRegexp(){if(!this.accept)return null;const e=this.accept.split(",").map(e=>{let t=e.trim();return t=t.replace(/[+.]/gu,"\\$&"),t.startsWith("\\.")&&(t=`.*${t}$`),t.replace(/\/\*/gu,"/.*")});return new RegExp(`^(${e.join("|")})$`,"iu")}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this)),this._addButtonController=new kc(this),this.addController(this._addButtonController),this._dropLabelController=new Ac(this),this.addController(this._dropLabelController),this.addController(new L(this,"file-list","vaadin-upload-file-list",{initializer:e=>{this._fileList=e}})),this.addController(new L(this,"drop-label-icon","vaadin-upload-icon"))}_formatSize(e){if("function"==typeof this.__effectiveI18n.formatSize)return this.__effectiveI18n.formatSize(e);const t=this.__effectiveI18n.units.sizeBase||1e3,i=~~(Math.log(e)/Math.log(t)),n=Math.max(0,Math.min(3,i-1));return`${parseFloat((e/t**i).toFixed(n))} ${this.__effectiveI18n.units.size[i]}`}_splitTimeByUnits(e){const t=[60,60,24,1/0],i=[0];for(let n=0;n<t.length&&e>0;n++)i[n]=e%t[n],e=Math.floor(e/t[n]);return i}_formatTime(e,t){if("function"==typeof this.__effectiveI18n.formatTime)return this.__effectiveI18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map(e=>(e<10?"0":"")+e).join(":")}_formatFileProgress(e){const t=e.loaded>0?this.__effectiveI18n.uploading.remainingTime.prefix+e.remainingStr:this.__effectiveI18n.uploading.remainingTime.unknown;return`${e.totalStr}: ${e.progress}% (${t})`}__updateMaxFilesReached(e,t){this._setMaxFilesReached(e>=0&&t.length>=e)}__updateAddButton(e,t,i,n,s){e&&(e.disabled=s||n,e===this._addButtonController.defaultNode&&(e.textContent=this._i18nPlural(t,i.addFiles)))}__updateDropLabel(e,t,i){e&&e===this._dropLabelController.defaultNode&&(e.textContent=this._i18nPlural(t,i.dropFiles))}__updateFileList(e,t,i,n){e&&(e.items=[...t],e.i18n=i,e.disabled=n)}_onDragover(e){e.preventDefault(),this.nodrop||this._dragover||(this._dragoverValid=!this.maxFilesReached&&!this.disabled,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}async _onDrop(e){if(!this.nodrop&&!this.disabled){e.preventDefault(),this._dragover=this._dragoverValid=!1;const t=await this.__getFilesFromDropEvent(e);this._addFiles(t)}}__getFilesFromDropEvent(e){async function t(e){if(e.isFile)return new Promise(t=>{e.file(t,()=>t([]))});if(e.isDirectory){const i=e.createReader(),n=await new Promise(e=>{i.readEntries(e,()=>e([]))});return(await Promise.all(n.map(t))).flat()}}if(!Array.from(e.dataTransfer.items).filter(e=>!!e).filter(e=>"function"==typeof e.webkitGetAsEntry).map(e=>e.webkitGetAsEntry()).some(e=>!!e&&e.isDirectory))return Promise.resolve(e.dataTransfer.files?Array.from(e.dataTransfer.files):[]);const i=Array.from(e.dataTransfer.items).map(e=>e.webkitGetAsEntry()).filter(e=>!!e).map(t);return Promise.all(i).then(e=>e.flat())}_createXhr(){return new XMLHttpRequest}_configureXhr(e,t=null,i=!1){if("string"==typeof this.headers)try{this.headers=JSON.parse(this.headers)}catch(e){this.headers=void 0}Object.entries(this.headers).forEach(([t,i])=>{e.setRequestHeader(t,i)}),i&&t&&(e.setRequestHeader("Content-Type",t.type||"application/octet-stream"),e.setRequestHeader("X-Filename",encodeURIComponent(t.name))),this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,i,n){e.elapsed=n,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(n*(t/i-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/n/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(i),e.status=this._formatFileProgress(e)}uploadFiles(e=this.files){e&&!Array.isArray(e)&&(e=[e]),e=e.filter(e=>!e.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const t=Date.now(),i=e.xhr=this._createXhr();let n,s;i.upload.onprogress=r=>{clearTimeout(n),s=Date.now();const o=(s-t)/1e3,a=r.loaded,l=r.total,c=~~(a/l*100);e.loaded=a,e.progress=c,e.indeterminate=a<=0||a>=l,e.error?e.indeterminate=e.status=void 0:e.abort||(c<100?(this._setStatus(e,l,a,o),n=setTimeout(()=>{e.status=this.__effectiveI18n.uploading.status.stalled,this._renderFileList()},2e3)):(e.loadedStr=e.totalStr,e.status=this.__effectiveI18n.uploading.status.processing)),this._renderFileList(),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:i}}))},i.onreadystatechange=()=>{if(4===i.readyState){if(clearTimeout(n),e.indeterminate=e.uploading=!1,e.abort)return;e.status="";if(!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:i},cancelable:!0})))return;0===i.status?e.error=this.__effectiveI18n.uploading.error.serverUnavailable:i.status>=500?e.error=this.__effectiveI18n.uploading.error.unexpectedServerError:i.status>=400&&(e.error=this.__effectiveI18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent("upload-"+(e.error?"error":"success"),{detail:{file:e,xhr:i}})),this._renderFileList()}};const r="raw"===this.uploadFormat;e.uploadTarget||(e.uploadTarget=this.target||""),r||(e.formDataName=this.formDataName);if(!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:i},cancelable:!0})))return;let o;if(r)o=e;else{const t=new FormData;t.append(e.formDataName,e,e.name),o=t}i.open(this.method,e.uploadTarget,!0),this._configureXhr(i,e,r),e.status=this.__effectiveI18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,i.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:i}})),this._renderFileList()};const a={file:e,xhr:i,uploadFormat:this.uploadFormat,requestBody:o};r||(a.formData=o);this.dispatchEvent(new CustomEvent("upload-request",{detail:a,cancelable:!0}))&&i.send(o)}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(this._uploadFile(e),this._updateFocus(this.files.indexOf(e)))}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._removeFile(e))}_renderFileList(){this._fileList&&"function"==typeof this._fileList.requestContentUpdate&&this._fileList.requestContentUpdate()}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.__effectiveI18n.error.tooManyFiles}}));if(this.maxFileSize>=0&&e.size>this.maxFileSize)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.__effectiveI18n.error.fileIsTooBig}}));const t=this.__acceptRegexp;!t||t.test(e.type)||t.test(e.name)?(e.loaded=0,e.held=!0,e.status=this.__effectiveI18n.uploading.status.held,this.files=[e,...this.files],this.noAuto||this._uploadFile(e)):this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.__effectiveI18n.error.incorrectFileType}}))}_updateFocus(e){if(0===this.files.length)return void this._addButton.focus({focusVisible:N()});e===this.files.length&&(e-=1),this._fileList.children[e].firstElementChild.focus({focusVisible:N()})}_removeFile(e){const t=this.files.indexOf(e);t>=0&&(this.files=this.files.filter(t=>t!==e),this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:e},bubbles:!0,composed:!0})),this._updateFocus(t))}_onAddFilesTouchEnd(e){e.preventDefault(),this._onAddFilesClick(e)}_onAddFilesClick(e){this.maxFilesReached||(e.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileReject(e){fc(`${e.detail.file.name}: ${e.detail.error}`,{mode:"alert"})}_onUploadStart(e){fc(`${e.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(e){fc(`${e.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(e){fc(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return 1===e?t.one:t.many}_isMultiple(e){return 1!==e}};class $c extends(Sc($(E(O(C(s)))))){static get is(){return"vaadin-upload"}static get styles(){return hc}static get lumoInjector(){return Object.assign(Object.assign({},super.lumoInjector),{},{includeBaseStyles:!0})}render(){return t`
      <div part="primary-buttons">
        <slot name="add-button"></slot>
        <div part="drop-label" ?hidden="${this.nodrop}" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon"></slot>
          <slot name="drop-label"></slot>
        </div>
      </div>
      <slot name="file-list"></slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        @change="${this._onFileInputChange}"
        accept="${this.accept}"
        ?multiple="${this._isMultiple(this.maxFiles)}"
        capture="${x(this.capture)}"
      />
    `}}I($c);class Ec extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{target:{type:String},accept:{type:String},_files:{type:Object},event:{type:String}})}constructor(){super(),this._files=new Map,this.event="pb-load"}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.subscribeTo("pb-collection",e=>{this.target=e.detail.collection})}firstUpdated(){super.firstUpdated();const e=this.shadowRoot.getElementById("uploader");e.addEventListener("upload-before",t=>{this.emitTo("pb-start-update");const{file:i}=t.detail;this._files.set(i.name,i),this.requestUpdate(),this.minApiVersion("1.0.0")&&this.target&&(i.uploadTarget=`${e.target}${encodeURIComponent(this.target)}`)}),e.addEventListener("upload-request",e=>{this.target&&this.lessThanApiVersion("1.0.0")&&e.detail.formData.append("root",this.target)}),e.addEventListener("upload-error",e=>{this.emitTo("pb-end-update"),e.detail.file.error=e.detail.xhr.responseText,this.requestUpdate()}),e.addEventListener("upload-success",()=>{let t=!0;const i=[];e.files.forEach(e=>{e.complete||e.error||e.aborted?/^.*\.odd$/.test(e.name)&&i.push(e.name):t=!1,this.requestUpdate()}),t&&(this.emitTo("pb-end-update"),this.emitTo(this.event),i.length>0&&this.emitTo("pb-refresh-odds",{odds:i}))}),a("pb-page-ready",()=>{this.minApiVersion("1.0.0")?e.target=`${this.getEndpoint()}/api/upload/`:e.target=`${this.getEndpoint()}/modules/lib/upload.xql`})}render(){const i=e(this,"--pb-upload-button-icon","icons:file-upload"),n=e(this,"--pb-upload-drop-icon",null);return t`
      <vaadin-upload
        id="uploader"
        accept="${this.accept}"
        method="post"
        tabindex="-1"
        form-data-name="files[]"
        uploadFormat="form"
        with-credentials
      >
        ${n?t`<pb-icon slot="drop-label-icon" icon="${n}" decorative></pb-icon>`:t`<span slot="drop-label-icon"></span>`}
        <span slot="drop-label">${u("upload.drop",{accept:this.accept})}</span>
        <button
          id="uploadBtn"
          slot="add-button"
          class="pb-button pb-button--contained"
          type="button"
        >
          ${i?t`<pb-icon icon="${i}" decorative></pb-icon>`:null}
          ${u("upload.upload")}
        </button>
        <div slot="file-list">
          <ul>
            ${this._files.size>0?t` <li class="close">
                  <button
                    class="pb-button pb-button--icon"
                    type="button"
                    aria-label="${u("dialogs.close")}"
                    title="${u("dialogs.close")}"
                    @click="${this.clearList}"
                  >
                    <pb-icon icon="icons:clear" decorative></pb-icon>
                  </button>
                </li>`:""}
            ${this.renderFiles()}
          </ul>
        </div>
      </vaadin-upload>
    `}renderFiles(){const e=[];for(const i of this._files.values()){let n="icons:hourglass-empty";i.complete?n="icons:check":(i.error||i.aborted)&&(n="icons:error-outline");const s=/.docx/.test(i.name)?`${i.name}.xml`:i.name;let r;if(r=this.target?`${this.target}/${s}`:s,e.push(t`
        <li>
          <pb-icon icon="${n}" decorative></pb-icon>
          ${i.error?i.name:t`<a href="${r}">${i.name}</a>`}
        </li>
      `),i.error){let n=i.error;try{n=JSON.parse(i.error).description||i.error}catch(e){n=i.error}e.push(t` <li class="error" part="error">${n}</li> `)}}return e}clearList(){this._files.clear(),this.requestUpdate()}static get styles(){return n`
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      li {
        margin-top: 8px;
      }
      .close {
        text-align: right;
      }
      .error {
        color: red;
      }
      #uploadBtn pb-icon {
        margin-right: 8px;
      }
    `}}customElements.define("pb-upload",Ec);class Oc extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{label:{type:String},odds:{type:Array},name:{type:String},odd:{type:String,notify:!0}})}constructor(){super(),this.label="document.selectODD",this.odds=[],Oc.__counter=(Oc.__counter||0)+1,this._selectId=`pb-select-odd-${Oc.__counter}`}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-update",this._onTargetUpdate.bind(this))}firstUpdated(){super.firstUpdated(),a("pb-page-ready",()=>{this._refresh()})}render(){return t`
      <label class="pb-select-odd__label" for="${this._selectId}"> ${u(this.label)} </label>
      <div class="pb-select-odd__control">
        <select
          id="${this._selectId}"
          class="pb-select-odd__select"
          name=${x(this.name||void 0)}
          .value=${this.odd??""}
          @change=${this._handleChange}
        >
          ${this.odds.map(e=>t`<option value="${e.name}">${e.label}</option>`)}
        </select>
      </div>
    `}static get styles(){return n`
      :host {
        display: block;
      }

      .pb-select-odd__label {
        display: block;
        margin-bottom: 0.35rem;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.6);
      }

      .pb-select-odd__control {
        position: relative;
        display: flex;
      }

      .pb-select-odd__select {
        width: 100%;
        min-width: 220px;
        padding: 0.45rem 2.25rem 0.45rem 0.75rem;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.16);
        background-image: linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.5) 50%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.5) 50%, transparent 50%),
          linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
        background-position: calc(100% - 18px) calc(1em + 2px), calc(100% - 13px) calc(1em + 2px),
          calc(100% - 2.5rem) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 2.25em;
        background-repeat: no-repeat;
        font: inherit;
        color: inherit;
        line-height: 1.2;
      }

      .pb-select-odd__select:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }
    `}updated(e){if(e.has("odds")&&(!this.odd||!this.odds.find(e=>e.name===this.odd))){const e=this.odds[0];e&&(this.odd=e.name)}}_handleChange(e){const t=e.target.value;if(t===this.odd)return;this.odd=t,console.log("<pb-select-odd> Switching to ODD %s",this.odd);const i=this.getDocument();i&&(i.odd=this.odd),y.commit(this,{odd:this.odd}),this.emitTo("pb-refresh",{odd:this.odd})}_refresh(){let e;e=this.minApiVersion("1.0.0")?`${this.getEndpoint()}/api/odd`:`${this.getEndpoint()}/modules/lib/components-list-odds.xql`;const t=this.toAbsoluteURL(e);let i;try{i=new URL(t)}catch(e){i=new URL(t,window.location.href)}this.odd&&i.searchParams.set("odd",this.odd),fetch(i.href,{method:"GET",credentials:"include",headers:{Accept:"application/json"}}).then(e=>{if(!e.ok)throw new Error(`Failed to load ODDs (${e.status})`);return e.json()}).then(e=>{this._updateOdds(Array.isArray(e)?e:[])}).catch(e=>{console.error("<pb-select-odd> request failed",e),this._updateOdds([])})}_updateOdds(e){this.odds=e,!e.length||this.odd&&e.find(e=>e.name===this.odd)||(this.odd=e[0].name)}_onTargetUpdate(e){let t=e.detail.data.odd;t&&(t=t.replace(/^(.*?)\.[^\.]+$/,"$1")),t!==this.odd&&console.log("<pb-select-odd> Set current ODD from %s to %s",this.odd,t),this.odd=t}}customElements.define("pb-select-odd",Oc);class Cc extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{label:{type:String},name:{type:String},template:{type:String},_templates:{type:Array}})}constructor(){super(),this.label="document.selectTemplate",this.name="",this._templates=[]}firstUpdated(){a("pb-page-ready",e=>{this.template=e.template;const t=this.shadowRoot.getElementById("getTemplates");this.minApiVersion("1.0.0")?t.url=`${e.endpoint}/api/templates`:t.url=`${e.endpoint}/modules/lib/components-list-templates.xql`,t.generateRequest()})}render(){return t`
      <label class="pb-select-template__label" for="template-select">
        ${u(this.label)}
      </label>
      <select
        id="template-select"
        class="pb-select-template__select"
        name="${this.name||""}"
        @change="${this._selected}"
        .value="${this.template||""}"
      >
        ${this._templates.map(e=>t`<option value="${e.name}">${e.title}</option>`)}
      </select>

      <pb-fetch
        id="getTemplates"
        with-credentials
        handle-as="json"
        @response="${this._handleTemplatesResponse}"
        method="GET"
      ></pb-fetch>
    `}static get styles(){return n`
      :host {
        display: block;
      }
      .pb-select-template__label {
        display: block;
        margin-bottom: 4px;
        font-weight: 600;
        font-size: 0.95rem;
        color: var(--pb-label-color, #303030);
      }

      .pb-select-template__select {
        width: 100%;
        padding: 8px 12px;
        border-radius: 4px;
        border: 1px solid var(--pb-border-color, #c0c0c0);
        font-size: 1rem;
        background-color: #fff;
        color: inherit;
      }

      .pb-select-template__select:focus {
        outline: none;
        border-color: var(--pb-primary-color, #1976d2);
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.15);
      }
    `}_selected(){const e=this.shadowRoot.getElementById("template-select");if(!e)return;const t=e.value;t!==this.template&&(y.replace(this,{template:t}),window.location.reload())}_handleTemplatesResponse(){const e=this.shadowRoot.getElementById("getTemplates");this._templates=e.lastResponse||[];const t=this.shadowRoot.getElementById("template-select");t&&this.template&&(t.value=this.template)}}customElements.define("pb-select-template",Cc);class Tc extends an{static get properties(){return Object.assign(Object.assign({},super.properties),{},{longitude:{type:Number},latitude:{type:Number},label:{type:String},event:{type:String},zoom:{type:Number},auto:{type:Boolean}})}constructor(){super(),this.event="mouseover",this.auto=!1,this.zoom=null}connectedCallback(){super.connectedCallback(),this.event&&this.addEventListener(this.event,()=>this.emitTo("pb-geolocation",{coordinates:{latitude:this.latitude,longitude:this.longitude},label:this.label,zoom:this.zoom,popup:this.popup,element:this,event:this.event})),this.auto&&this.waitForChannel(()=>{this.emitTo("pb-geolocation",{coordinates:{latitude:this.latitude,longitude:this.longitude},label:this.label,popup:this.popup,fitBounds:!0,element:this})})}render(){return t`<span id="content"><slot></slot></span>`}get popup(){const e=this.querySelector("template");if(e){const t=document.createElement("div");return t.appendChild(e.content.cloneNode(!0)),t}return null}static get styles(){return n`
      :host {
        display: inline;
        cursor: pointer;
      }

      [name='popup'] {
        display: none;
      }

      @keyframes keyFrameBackgroundColorIn {
        0% {
          background-color: inherit;
        }
        100% {
          background-color: var(--pb-highlight-color, #f9e976);
        }
      }

      #content {
        display: inline;
      }

      .highlight-on {
        background-color: var(--pb-highlight-color, #f9e976);
        animation-name: keyFrameBackgroundColorIn;
        animation-duration: 500ms;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
      }

      .highlight-off {
        background-color: inherit;
      }
    `}}customElements.define("pb-geolocation",Tc);class Ic extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{initial:{type:Number},_instances:{type:Array}})}constructor(){super(),this.initial=1,this._instances=[]}connectedCallback(){super.connectedCallback();this.querySelector("template")&&this._add()}_computeInitial(e){const t=Object.keys(e).filter(e=>/\[\d+\]$/.test(e)).sort();if(t.length>0){const e=t[t.length-1].replace(/^.*\[(\d+)\]$/,"$1");this.initial=parseInt(e,10)}}setData(e){this._instances=[],this._computeInitial(e);for(let t=0;t<this.initial;t++)this._add(e);this.requestUpdate()}add(){this._add(),this.requestUpdate()}_add(e){const t=this.querySelector("template");if(!t||!t.content)return;const i=this._instances.length+1,n=document.importNode(t.content,!0),s=document.createElement("div");s.appendChild(n),s.querySelectorAll("[name]").forEach(t=>{const n=void 0===t.name?`${t.attributes.getNamedItem("name").nodeValue}[${i}]`:`${t.name}[${i}]`;e&&e[n]&&("checkbox"===t.type||"radio"===t.type?t.checked=e[n]===t.value:t.value=e[n]),t.name=n}),this._instances.push(s)}_renumber(){this._instances.forEach((e,t)=>{e.querySelectorAll("[name]").forEach(e=>{const i=e.name.replace(/^(.*)\[\d+\]$/,"$1");e.name=`${i}[${t+1}]`})})}delete(e){this._instances.splice(e,1),this._renumber(),this.requestUpdate()}render(){return t`
      <div class="instances">${this._instances.map(this.renderInstance.bind(this))}</div>
      <button
        class="pb-button pb-button--icon"
        type="button"
        aria-label="Add instance"
        title="Add instance"
        @click="${this.add}"
      >
        ${this._renderAddIcon()}
      </button>
    `}renderInstance(e,i){return t` <div class="instance">
      ${e}
      <button
        class="pb-button pb-button--icon"
        type="button"
        aria-label="Delete instance"
        title="Delete instance"
        @click="${()=>this.delete(i)}"
      >
        ${this._renderDeleteIcon()}
      </button>
    </div>`}_renderAddIcon(){return t`<svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M13 11V5h-2v6H5v2h6v6h2v-6h6v-2h-6z"></path>
    </svg>`}_renderDeleteIcon(){return t`<svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1z"></path>
    </svg>`}createRenderRoot(){return this}}customElements.define("pb-repeat",Ic);class Lc extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{url:{type:String}})}constructor(){super(),this._pan=null}connectedCallback(){super.connectedCallback(),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("svg-pan-zoom","https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"),this.subscribeTo("pb-show-annotation",e=>{this.url!==e.detail.file&&(this.url=e.detail.file)})}firstUpdated(){super.firstUpdated(),this.container=this.shadowRoot.getElementById("image")}updated(e){e.has("url")&&this.url&&this.url!==e.get("url")&&this.load()}load(){if(!this.url)return;const e=this.toAbsoluteURL(this.url);console.log("<pb-svg> Loading %s",e),this._pan&&(this._pan.destroy(),this._pan=null,this.container.innerHTML=""),fetch(e).then(e=>e.text()).then(e=>{if(!window.svgPanZoom)return void console.error("<pb-svg> svgPanZoom not available");const t=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement;this.container.appendChild(t),this._pan=window.svgPanZoom(t,{controlIconsEnabled:!0,fit:!0,center:!0})})}render(){return t`<div id="image"></div>`}static get styles(){return n`
      :host {
        display: block;
      }

      #image svg {
        height: var(--pb-svg-height, 100%);
        width: var(--pb-svg-width, 100%);
      }
    `}}customElements.define("pb-svg",Lc);class Rc extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{endpoint:{type:String},label:{type:String},endpoints:{type:Array},auto:{type:Boolean}})}constructor(){super(),this.endpoints=[],this.label="dts.endpoint"}connectedCallback(){super.connectedCallback(),this.endpoint=y.state.endpoint,!this.endpoint&&this.auto&&this.endpoints.length>0&&(this.endpoint=this.endpoints[0].url)}updated(e){super.updated(e),e.has("endpoints")&&(Array.isArray(this.endpoints)||(this.endpoints=[]),!this.endpoint&&this.auto&&this.endpoints.length>0&&(this.endpoint=this.endpoints[0].url))}render(){return t`
      <label class="dts-select__label" for="dts-select"> ${u(this.label)} </label>
      <select
        id="dts-select"
        class="dts-select__select"
        name="endpoint"
        .value=${this.endpoint||""}
        @change=${this._selected}
      >
        ${this.endpoints.map(e=>t`<option value="${e.url??""}">${e.title}</option>`)}
      </select>
    `}static get styles(){return n`
      :host {
        display: block;
      }

      .dts-select__label {
        display: block;
        margin-bottom: 0.35rem;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.6);
      }

      .dts-select__select {
        width: 100%;
        min-width: inherit;
        max-width: inherit;
        height: var(--pb-input-height, 48px);
        padding: 0.5rem 0.75rem;
        border: 1px solid rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        background: #fff;
        font: inherit;
        color: inherit;
        appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.4) 50%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.4) 50%, transparent 50%),
          linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
        background-position: calc(100% - 18px) calc(0.6em + 2px),
          calc(100% - 13px) calc(0.6em + 2px), calc(100% - 2.5rem) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 2.25em;
        background-repeat: no-repeat;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }

      .dts-select__select:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }
    `}_selected(e){const t=e.target.value;if(!t)return;const i=this.endpoints.find(e=>e.url===t),n=i?i.url:t;y.commit(this,{endpoint:n}),console.log("<dts-select-endpoint> Setting endpoint to %s",t),this.emitTo("dts-endpoint",{endpoint:n,collection:i?i.collection:void 0,reload:!this.endpoint}),this.endpoint=n}}customElements.define("dts-select-endpoint",Rc);class jc extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{baseUri:{type:String},data:{type:Object},collection:{type:String},page:{type:Number},perPage:{type:Number},_collectionEndpoint:{type:String}})}constructor(){super(),this._parentCollections=[],this.collection="default"}connectedCallback(){super.connectedCallback(),this.collection=y.state.id,this.page=y.state.page,this.subscribeTo("dts-endpoint",e=>{this._setEndpoint(e.detail.endpoint,e.detail.collection,e.detail.reload)}),this.subscribeTo("pb-load",e=>{this.page=e.detail.params.page,console.log("<dts-client> Loading page %d",this.page),this._update()})}firstUpdated(){super.firstUpdated(),this.queryAPI=this.shadowRoot.getElementById("queryAPI"),this.documentsAPI=this.shadowRoot.getElementById("documentsAPI"),this.signalReady()}_setEndpoint(e,t,i){i||(this.page=null),this.collection=t,this._configureEndpoint(e),this.baseUri=e}_configureEndpoint(e){e&&(console.log("<dts-client> initializing connection to endpoint %s",e),this.emitTo("pb-start-update"),this.queryAPI.url=e,this.queryAPI.generateRequest())}_navigate(e,t,i=!0){e.preventDefault(),i&&this._parentCollections.push(this.collection),this.collection=t&&"object"==typeof t?t["@id"]:t,this.page=null,console.log("<dts-client> navigating to collection %s",this.collection),this._update()}_navigateUp(e){0!==this._parentCollections.length&&this._navigate(e,this._parentCollections.pop(),!1)}_preview(e,t){e.preventDefault(),this.emitTo("pb-start-update");const i=t["dts:passage"]||t["dts:download"],n=new URL(i,this.baseUri).toString();console.log("<dts-client> downloading %s",n),this.lessThanApiVersion("1.0.0")?(this.documentsAPI.url=`${this.getEndpoint()}/modules/lib/dts.xql`,this.documentsAPI.params={preview:n,id:t["@id"]}):(this.documentsAPI.url=`${this.getEndpoint()}/api/dts/import`,this.documentsAPI.params={uri:n,temp:!0}),this.documentsAPI.generateRequest()}_download(e,t){this.emitTo("pb-start-update");const i=t["dts:passage"]||t["dts:download"],n=new URL(i,this.baseUri).toString();console.log("<dts-client> importing %s",n),this.lessThanApiVersion("1.0.0")?(this.documentsAPI.url=`${this.getEndpoint()}/modules/lib/dts.xql`,this.documentsAPI.params={import:n,id:t["@id"]}):(this.documentsAPI.url=`${this.getEndpoint()}/api/dts/import`,this.documentsAPI.params={uri:n,temp:!1}),this.documentsAPI.generateRequest()}_update(){this.emitTo("pb-start-update");const e={};this.collection&&(e.id=this.collection),this.page&&(e.page=this.page+1),y.commit(this,e),this.queryAPI.params=e,this.queryAPI.url=this._collectionEndpoint,this.queryAPI.generateRequest()}_handleResponse(){const e=this.queryAPI.lastResponse;"EntryPoint"===e["@type"]?(this._collectionEndpoint=new URL(e.collections,this.baseUri).toString(),console.log("<dts-client> configured collection endpoint: %s",this._collectionEndpoint),this._update()):(this.data=e,console.log("<dts-client> received collection data: %o",e),!this.page&&e.totalItems>e.member.length&&(this.perPage=e.member.length),this.emitTo("pb-results-received",{start:this.page&&this.page>0?this.page*this.perPage+1:1,count:e.totalItems})),this.emitTo("pb-end-update")}_handlePreview(){const e=this.documentsAPI.lastResponse;this.emitTo("pb-end-update");const t=new URL(e.path,window.location.href);window.location.replace(t)}_handleError(e){this.emitTo("pb-end-update");const t=e.target.lastError.response,i=(new DOMParser).parseFromString(t,"application/xml").querySelector("message"),n=document.getElementById("errorDialog"),s=n.querySelector("paper-dialog-scrollable");s.innerHTML=i?i.textContent:e.detail.error.message,n.open()}static _getCreator(e){const t=e["dts:dublincore"];return t?t["dc:creator"]:null}static _getLicense(e){const t=e["dts:dublincore"];return t?t["dc:license"]:null}render(){return t`
      <slot name="toolbar"></slot>
      ${this.baseUri?this._renderClient():""}

      <pb-fetch
        id="queryAPI"
        verbose
        handle-as="json"
        method="get"
        @response="${this._handleResponse}"
        @error="${this._handleError}"
      ></pb-fetch>
      <pb-fetch
        id="documentsAPI"
        verbose
        handle-as="json"
        method="get"
        @response="${this._handlePreview}"
        @error="${this._handleError}"
      ></pb-fetch>
    `}_renderClient(){return t`
      <div class="uri">${this.baseUri}</div>
      <h3 part="collection-title">${this.data?this.data.title:"Loading ..."}</h3>
      <slot name="pagination"></slot>
      ${this._parentCollections.length>0||this.collection?t` <button
            part="parent-link"
            class="pb-button pb-button--text"
            type="button"
            @click="${this._navigateUp}"
          >
            <pb-icon icon="icons:arrow-upward" decorative></pb-icon>
            ${u("browse.up")}
          </button>`:null}
      ${this.data?this._renderMembers():""}
    `}_renderMembers(){const e=[];return this.data.member.forEach(i=>{e.push(t`<div class="member">${this._renderMember(i)}</div>`)}),e}_renderMember(e){if("Collection"===e["@type"])return t`
        <pb-icon icon="icons:folder-open" decorative></pb-icon>
        <div class="details">
          <button @click="${t=>this._navigate(t,e)}" part="link" type="button">
            <h4 class="collection" part="collection-title">${e.title}</h4>
          </button>
        </div>
      `;const i=jc._getLicense(e);return t`
      <pb-icon icon="icons:code" decorative></pb-icon>
      <div class="details">
        <div>
          <button @click="${t=>this._preview(t,e)}" part="link" type="button">
            <h4 part="title">${e.title}</h4>
          </button>
          <p part="creator" class="creator">${jc._getCreator(e)}</p>
          ${i?t`<p part="license" class="license">
                <a href="${i}">${u("dts.licence")}</a>
              </p>`:""}
        </div>
        <pb-icon
          title="${u("dts.import")}"
          icon="icons:file-download"
          @click="${t=>this._download(t,e)}"
        ></pb-icon>
      </div>
    `}static get styles(){return n`
      :host {
        display: block;
      }

      .uri {
        color: #607d8a;
        margin-top: 12px;
        font-weight: bold;
      }
      h3 {
        margin-top: 0;
      }
      .member {
        display: flex;
      }
      .member .details {
        flex: 2;
        margin-left: 20px;
        display: flex;
        justify-content: space-between;
      }
      .member pb-icon {
        width: 24px;
      }
      .member h4 {
        margin: 0;
      }
      .member h4.collection {
        margin-bottom: 10px;
      }
      [name='toolbar'] {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #f6a622;
        font-size: 85%;
      }
    `}}customElements.define("dts-client",jc);class Nc extends s{static get properties(){return Object.assign(Object.assign({},super.properties),{},{user:{type:String},hash:{type:String},height:{type:Number},theme:{type:String},preview:{type:Boolean},editable:{type:Boolean}})}constructor(){super(),this.height=256,this.theme="light"}render(){let e=`height=${this.height}&theme-id=${this.theme}&default-tab=html,result`;this.editable&&(e=`${e}&editable=true`);const i=`https://codepen.io/${this.user}/embed/${this.preview?"preview/":""}${this.hash}?${e}`;return t`
      <iframe
        height="${this.height}"
        scrolling="no"
        title="CodePen ${this.hash||""}"
        loading="lazy"
        src="${i}"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen
      >
        Loading codepen ...
      </iframe>
    `}static get styles(){return n`
      :host {
        display: block;
      }

      iframe {
        width: 100%;
      }
    `}}function Pc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}customElements.define("pb-codepen",Nc);var Dc=Pc();function Fc(e){Dc=e}var Bc={exec:()=>null};function Mc(e,t=""){let i="string"==typeof e?e:e.source,n={replace:(e,t)=>{let s="string"==typeof t?t:t.source;return s=s.replace(zc.caret,"$1"),i=i.replace(e,s),n},getRegex:()=>new RegExp(i,t)};return n}var qc=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),zc={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[\t ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Uc=/^(?:[ \t]*(?:\n|$))+/,Hc=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Vc=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Wc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Gc=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Yc=/(?:[*+-]|\d{1,9}[.)])/,Qc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Kc=Mc(Qc).replace(/bull/g,Yc).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Jc=Mc(Qc).replace(/bull/g,Yc).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Zc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Xc=/^[^\n]+/,ed=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,td=Mc(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ed).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),id=Mc(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Yc).getRegex(),nd="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",sd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,rd=Mc("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))","i").replace("comment",sd).replace("tag",nd).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),od=Mc(Zc).replace("hr",Wc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nd).getRegex(),ad={blockquote:Mc(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",od).getRegex(),code:Hc,def:td,fences:Vc,heading:Gc,hr:Wc,html:rd,lheading:Kc,list:id,newline:Uc,paragraph:od,table:Bc,text:Xc},ld=Mc("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Wc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}\t)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nd).getRegex(),cd=Object.assign(Object.assign({},ad),{},{lheading:Jc,table:ld,paragraph:Mc(Zc).replace("hr",Wc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ld).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nd).getRegex()}),dd=Object.assign(Object.assign({},ad),{},{html:Mc("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",sd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Bc,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Mc(Zc).replace("hr",Wc).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Kc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()}),pd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,hd=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ud=/^( {2,}|\\)\n(?!\s*$)/,gd=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,fd=/[\p{P}\p{S}]/u,md=/[\s\p{P}\p{S}]/u,bd=/[^\s\p{P}\p{S}]/u,vd=Mc(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,md).getRegex(),yd=/(?!~)[\p{P}\p{S}]/u,_d=/(?!~)[\s\p{P}\p{S}]/u,wd=/(?:[^\s\p{P}\p{S}]|~)/u,xd=Mc(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",qc?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),kd=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ad=Mc(kd,"u").replace(/punct/g,fd).getRegex(),Sd=Mc(kd,"u").replace(/punct/g,yd).getRegex(),$d="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Ed=Mc($d,"gu").replace(/notPunctSpace/g,bd).replace(/punctSpace/g,md).replace(/punct/g,fd).getRegex(),Od=Mc($d,"gu").replace(/notPunctSpace/g,wd).replace(/punctSpace/g,_d).replace(/punct/g,yd).getRegex(),Cd=Mc("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,bd).replace(/punctSpace/g,md).replace(/punct/g,fd).getRegex(),Td=Mc(/\\(punct)/,"gu").replace(/punct/g,fd).getRegex(),Id=Mc(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ld=Mc(sd).replace("(?:--\x3e|$)","--\x3e").getRegex(),Rd=Mc("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ld).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),jd=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Nd=Mc(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",jd).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Pd=Mc(/^!?\[(label)\]\[(ref)\]/).replace("label",jd).replace("ref",ed).getRegex(),Dd=Mc(/^!?\[(ref)\](?:\[\])?/).replace("ref",ed).getRegex(),Fd=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Bd={_backpedal:Bc,anyPunctuation:Td,autolink:Id,blockSkip:xd,br:ud,code:hd,del:Bc,emStrongLDelim:Ad,emStrongRDelimAst:Ed,emStrongRDelimUnd:Cd,escape:pd,link:Nd,nolink:Dd,punctuation:vd,reflink:Pd,reflinkSearch:Mc("reflink|nolink(?!\\()","g").replace("reflink",Pd).replace("nolink",Dd).getRegex(),tag:Rd,text:gd,url:Bc},Md=Object.assign(Object.assign({},Bd),{},{link:Mc(/^!?\[(label)\]\((.*?)\)/).replace("label",jd).getRegex(),reflink:Mc(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",jd).getRegex()}),qd=Object.assign(Object.assign({},Bd),{},{emStrongRDelimAst:Od,emStrongLDelim:Sd,url:Mc(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Fd).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Mc(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Fd).getRegex()}),zd=Object.assign(Object.assign({},qd),{},{br:Mc(ud).replace("{2,}","*").getRegex(),text:Mc(qd.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),Ud={normal:ad,gfm:cd,pedantic:dd},Hd={normal:Bd,gfm:qd,breaks:zd,pedantic:Md},Vd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Wd=e=>Vd[e];function Gd(e,t){if(t){if(zc.escapeTest.test(e))return e.replace(zc.escapeReplace,Wd)}else if(zc.escapeTestNoEncode.test(e))return e.replace(zc.escapeReplaceNoEncode,Wd);return e}function Yd(e){try{e=encodeURI(e).replace(zc.percentDecode,"%")}catch{return null}return e}function Qd(e,t){var i;let n=e.replace(zc.findPipe,(e,t,i)=>{let n=!1,s=t;for(;--s>=0&&"\\"===i[s];)n=!n;return n?"|":" |"}),s=n.split(zc.splitPipe),r=0;if(s[0].trim()||s.shift(),s.length>0&&!(null!==(i=s.at(-1))&&void 0!==i&&i.trim())&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(zc.slashPipe,"|");return s}function Kd(e,t,i){let n=e.length;if(0===n)return"";let s=0;for(;s<n;){if(e.charAt(n-s-1)!==t)break;s++}return e.slice(0,n-s)}function Jd(e,t){if(-1===e.indexOf(t[1]))return-1;let i=0;for(let n=0;n<e.length;n++)if("\\"===e[n])n++;else if(e[n]===t[0])i++;else if(e[n]===t[1]&&(i--,i<0))return n;return i>0?-2:-1}function Zd(e,t,i,n,s){let r=t.href,o=t.title||null,a=e[1].replace(s.other.outputLinkReplace,"$1");n.state.inLink=!0;let l={type:"!"===e[0].charAt(0)?"image":"link",raw:i,href:r,title:o,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,l}function Xd(e,t,i){let n=e.match(i.other.indentCodeCompensation);if(null===n)return t;let s=n[1];return t.split("\n").map(e=>{let t=e.match(i.other.beginningSpace);if(null===t)return e;let[n]=t;return n.length>=s.length?e.slice(s.length):e}).join("\n")}var ep=class{options;rules;lexer;constructor(e){this.options=e||Dc}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:Kd(e,"\n")}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],i=Xd(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=Kd(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Kd(t[0],"\n")}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=Kd(t[0],"\n").split("\n"),i="",n="",s=[];for(;e.length>0;){let t,r=!1,o=[];for(t=0;t<e.length;t++)if(this.rules.other.blockquoteStart.test(e[t]))o.push(e[t]),r=!0;else{if(r)break;o.push(e[t])}e=e.slice(t);let a=o.join("\n"),l=a.replace(this.rules.other.blockquoteSetextReplace,"\n    $1").replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}\n${a}`:a,n=n?`${n}\n${l}`:l;let c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(l,s,!0),this.lexer.state.top=c,0===e.length)break;let d=s.at(-1);if("code"===(null==d?void 0:d.type))break;if("blockquote"===(null==d?void 0:d.type)){let t=d,r=t.raw+"\n"+e.join("\n"),o=this.blockquote(r);s[s.length-1]=o,i=i.substring(0,i.length-t.raw.length)+o.raw,n=n.substring(0,n.length-t.text.length)+o.text;break}if("list"===(null==d?void 0:d.type)){let t=d,r=t.raw+"\n"+e.join("\n"),o=this.list(r);s[s.length-1]=o,i=i.substring(0,i.length-d.raw.length)+o.raw,n=n.substring(0,n.length-t.raw.length)+o.raw,e=r.substring(s.at(-1).raw.length).split("\n");continue}}return{type:"blockquote",raw:i,tokens:s,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let s=t[1].trim(),r=s.length>1,o={type:"list",raw:"",ordered:r,start:r?+s.slice(0,-1):"",loose:!1,items:[]};s=r?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=r?s:"[*+-]");let a=this.rules.other.listItemRegex(s),l=!1;for(;e;){let i=!1,n="",s="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;n=t[0],e=e.substring(n.length);let r=t[2].split("\n",1)[0].replace(this.rules.other.listReplaceTabs,e=>" ".repeat(3*e.length)),c=e.split("\n",1)[0],d=!r.trim(),p=0;if(this.options.pedantic?(p=2,s=r.trimStart()):d?p=t[1].length+1:(p=t[2].search(this.rules.other.nonSpaceChar),p=p>4?1:p,s=r.slice(p),p+=t[1].length),d&&this.rules.other.blankLine.test(c)&&(n+=c+"\n",e=e.substring(c.length+1),i=!0),!i){let t=this.rules.other.nextBulletRegex(p),i=this.rules.other.hrRegex(p),o=this.rules.other.fencesBeginRegex(p),a=this.rules.other.headingBeginRegex(p),l=this.rules.other.htmlBeginRegex(p);for(;e;){let h,u=e.split("\n",1)[0];if(c=u,this.options.pedantic?(c=c.replace(this.rules.other.listReplaceNesting,"  "),h=c):h=c.replace(this.rules.other.tabCharGlobal,"    "),o.test(c)||a.test(c)||l.test(c)||t.test(c)||i.test(c))break;if(h.search(this.rules.other.nonSpaceChar)>=p||!c.trim())s+="\n"+h.slice(p);else{if(d||r.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||o.test(r)||a.test(r)||i.test(r))break;s+="\n"+c}!d&&!c.trim()&&(d=!0),n+=u+"\n",e=e.substring(u.length+1),r=h.slice(p)}}o.loose||(l?o.loose=!0:this.rules.other.doubleBlankLine.test(n)&&(l=!0)),o.items.push({type:"list_item",raw:n,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),o.raw+=n}let c=o.items.at(-1);if(!c)return;c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd(),o.raw=o.raw.trimEnd();for(let e of o.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){var i,n;if(e.text=e.text.replace(this.rules.other.listReplaceTask,""),"text"===(null===(i=e.tokens[0])||void 0===i?void 0:i.type)||"paragraph"===(null===(n=e.tokens[0])||void 0===n?void 0:n.type)){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,"");break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let i={type:"checkbox",raw:t[0]+" ",checked:"[ ]"!==t[0]};e.checked=i.checked,o.loose?e.tokens[0]&&["paragraph","text"].includes(e.tokens[0].type)&&"tokens"in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=i.raw+e.tokens[0].raw,e.tokens[0].text=i.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(i)):e.tokens.unshift({type:"paragraph",raw:i.raw,text:i.raw,tokens:[i]}):e.tokens.unshift(i)}}if(!o.loose){let t=e.tokens.filter(e=>"space"===e.type),i=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw));o.loose=i}}if(o.loose)for(let e of o.items){e.loose=!0;for(let t of e.tokens)"text"===t.type&&(t.type="paragraph")}return o}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:i,title:n}}}table(e){var t;let i=this.rules.block.table.exec(e);if(!i||!this.rules.other.tableDelimiter.test(i[2]))return;let n=Qd(i[1]),s=i[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=null!==(t=i[3])&&void 0!==t&&t.trim()?i[3].replace(this.rules.other.tableRowBlankLine,"").split("\n"):[],o={type:"table",raw:i[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let e of s)this.rules.other.tableAlignRight.test(e)?o.align.push("right"):this.rules.other.tableAlignCenter.test(e)?o.align.push("center"):this.rules.other.tableAlignLeft.test(e)?o.align.push("left"):o.align.push(null);for(let e=0;e<n.length;e++)o.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:o.align[e]});for(let e of r)o.rows.push(Qd(e,o.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:o.align[t]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=Kd(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=Jd(t[2],"()");if(-2===e)return;if(e>-1){let i=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,i).trim(),t[3]=""}}let i=t[2],n="";if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],n=e[3])}else n=t[3]?t[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?i.slice(1):i.slice(1,-1)),Zd(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let e=t[(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){let e=i[0].charAt(0);return{type:"text",raw:e,text:e}}return Zd(i,e,i[0],this.lexer,this.rules)}}emStrong(e,t,i=""){let n=this.rules.inline.emStrongLDelim.exec(e);if(!(!n||n[3]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!n[1]&&!n[2]||!i||this.rules.inline.punctuation.exec(i))){let i,s,r=[...n[0]].length-1,o=r,a=0,l="*"===n[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+r);null!=(n=l.exec(t));){if(i=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!i)continue;if(s=[...i].length,n[3]||n[4]){o+=s;continue}if((n[5]||n[6])&&r%3&&!((r+s)%3)){a+=s;continue}if(o-=s,o>0)continue;s=Math.min(s,s+o+a);let t=[...n[0]][0].length,l=e.slice(0,r+n.index+t+s);if(Math.min(r,s)%2){let e=l.slice(1,-1);return{type:"em",raw:l,text:e,tokens:this.lexer.inlineTokens(e)}}let c=l.slice(2,-2);return{type:"strong",raw:l,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(e),n=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return i&&n&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,i;return"@"===t[2]?(e=t[1],i="mailto:"+e):(e=t[1],i=e),{type:"link",raw:t[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if("@"===t[2])e=t[0],n="mailto:"+e;else{let s;do{var i;s=t[0],t[0]=(null===(i=this.rules.inline._backpedal.exec(t[0]))||void 0===i?void 0:i[0])??""}while(s!==t[0]);e=t[0],n="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}},tp=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Dc,this.options.tokenizer=this.options.tokenizer||new ep,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:zc,block:Ud.normal,inline:Hd.normal};this.options.pedantic?(t.block=Ud.pedantic,t.inline=Hd.pedantic):this.options.gfm&&(t.block=Ud.gfm,this.options.breaks?t.inline=Hd.breaks:t.inline=Hd.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ud,inline:Hd}}static lex(t,i){return new e(i).lex(t)}static lexInline(t,i){return new e(i).inlineTokens(t)}lex(e){e=e.replace(zc.carriageReturn,"\n"),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],i=!1){for(this.options.pedantic&&(e=e.replace(zc.tabCharGlobal,"    ").replace(zc.spaceLine,""));e;){var n,s;let r;if(null!==(n=this.options.extensions)&&void 0!==n&&null!==(n=n.block)&&void 0!==n&&n.some(i=>!!(r=i.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let i=t.at(-1);1===r.raw.length&&void 0!==i?i.raw+="\n":t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let i=t.at(-1);"paragraph"===(null==i?void 0:i.type)||"text"===(null==i?void 0:i.type)?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+r.raw,i.text+="\n"+r.text,this.inlineQueue.at(-1).src=i.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let i=t.at(-1);"paragraph"===(null==i?void 0:i.type)||"text"===(null==i?void 0:i.type)?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+r.raw,i.text+="\n"+r.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let o=e;if(null!==(s=this.options.extensions)&&void 0!==s&&s.startBlock){let t,i=1/0,n=e.slice(1);this.options.extensions.startBlock.forEach(e=>{t=e.call({lexer:this},n),"number"==typeof t&&t>=0&&(i=Math.min(i,t))}),i<1/0&&i>=0&&(o=e.substring(0,i+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){let n=t.at(-1);i&&"paragraph"===(null==n?void 0:n.type)?(n.raw+=(n.raw.endsWith("\n")?"":"\n")+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r),i=o.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let i=t.at(-1);"text"===(null==i?void 0:i.type)?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+r.raw,i.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):t.push(r);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var i;let n,s=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(r=this.tokenizer.rules.inline.reflinkSearch.exec(s));)e.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(r=this.tokenizer.rules.inline.anyPunctuation.exec(s));)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(r=this.tokenizer.rules.inline.blockSkip.exec(s));)n=r[2]?r[2].length:0,s=s.slice(0,r.index+n)+"["+"a".repeat(r[0].length-n-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=(null===(i=this.options.hooks)||void 0===i||null===(i=i.emStrongMask)||void 0===i?void 0:i.call({lexer:this},s))??s;let o=!1,a="";for(;e;){var l,c;let i;if(o||(a=""),o=!1,null!==(l=this.options.extensions)&&void 0!==l&&null!==(l=l.inline)&&void 0!==l&&l.some(n=>!!(i=n.call({lexer:this},e,t))&&(e=e.substring(i.raw.length),t.push(i),!0)))continue;if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length);let n=t.at(-1);"text"===i.type&&"text"===(null==n?void 0:n.type)?(n.raw+=i.raw,n.text+=i.text):t.push(i);continue}if(i=this.tokenizer.emStrong(e,s,a)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.autolink(e)){e=e.substring(i.raw.length),t.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e))){e=e.substring(i.raw.length),t.push(i);continue}let n=e;if(null!==(c=this.options.extensions)&&void 0!==c&&c.startInline){let t,i=1/0,s=e.slice(1);this.options.extensions.startInline.forEach(e=>{t=e.call({lexer:this},s),"number"==typeof t&&t>=0&&(i=Math.min(i,t))}),i<1/0&&i>=0&&(n=e.substring(0,i+1))}if(i=this.tokenizer.inlineText(n)){e=e.substring(i.raw.length),"_"!==i.raw.slice(-1)&&(a=i.raw.slice(-1)),o=!0;let n=t.at(-1);"text"===(null==n?void 0:n.type)?(n.raw+=i.raw,n.text+=i.text):t.push(i);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return t}},ip=class{options;parser;constructor(e){this.options=e||Dc}space(e){return""}code({text:e,lang:t,escaped:i}){var n;let s=null===(n=(t||"").match(zc.notSpaceStart))||void 0===n?void 0:n[0],r=e.replace(zc.endingNewline,"")+"\n";return s?'<pre><code class="language-'+Gd(s)+'">'+(i?r:Gd(r,!0))+"</code></pre>\n":"<pre><code>"+(i?r:Gd(r,!0))+"</code></pre>\n"}blockquote({tokens:e}){return`<blockquote>\n${this.parser.parse(e)}</blockquote>\n`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>\n`}hr(e){return"<hr>\n"}list(e){let t=e.ordered,i=e.start,n="";for(let t=0;t<e.items.length;t++){let i=e.items[t];n+=this.listitem(i)}let s=t?"ol":"ul";return"<"+s+(t&&1!==i?' start="'+i+'"':"")+">\n"+n+"</"+s+">\n"}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>\n`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>\n`}table(e){let t="",i="";for(let t=0;t<e.header.length;t++)i+=this.tablecell(e.header[t]);t+=this.tablerow({text:i});let n="";for(let t=0;t<e.rows.length;t++){let s=e.rows[t];i="";for(let e=0;e<s.length;e++)i+=this.tablecell(s[e]);n+=this.tablerow({text:i})}return n&&(n=`<tbody>${n}</tbody>`),"<table>\n<thead>\n"+t+"</thead>\n"+n+"</table>\n"}tablerow({text:e}){return`<tr>\n${e}</tr>\n`}tablecell(e){let t=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+t+`</${i}>\n`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Gd(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:i}){let n=this.parser.parseInline(i),s=Yd(e);if(null===s)return n;let r='<a href="'+(e=s)+'"';return t&&(r+=' title="'+Gd(t)+'"'),r+=">"+n+"</a>",r}image({href:e,title:t,text:i,tokens:n}){n&&(i=this.parser.parseInline(n,this.parser.textRenderer));let s=Yd(e);if(null===s)return Gd(i);let r=`<img src="${e=s}" alt="${i}"`;return t&&(r+=` title="${Gd(t)}"`),r+=">",r}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Gd(e.text)}},np=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},sp=class e{options;renderer;textRenderer;constructor(e){this.options=e||Dc,this.options.renderer=this.options.renderer||new ip,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new np}static parse(t,i){return new e(i).parse(t)}static parseInline(t,i){return new e(i).parseInline(t)}parse(e){let t="";for(let n=0;n<e.length;n++){var i;let s=e[n];if(null!==(i=this.options.extensions)&&void 0!==i&&null!==(i=i.renderers)&&void 0!==i&&i[s.type]){let e=s,i=this.options.extensions.renderers[e.type].call({parser:this},e);if(!1!==i||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(e.type)){t+=i||"";continue}}let r=s;switch(r.type){case"space":t+=this.renderer.space(r);break;case"hr":t+=this.renderer.hr(r);break;case"heading":t+=this.renderer.heading(r);break;case"code":t+=this.renderer.code(r);break;case"table":t+=this.renderer.table(r);break;case"blockquote":t+=this.renderer.blockquote(r);break;case"list":t+=this.renderer.list(r);break;case"checkbox":t+=this.renderer.checkbox(r);break;case"html":t+=this.renderer.html(r);break;case"def":t+=this.renderer.def(r);break;case"paragraph":t+=this.renderer.paragraph(r);break;case"text":t+=this.renderer.text(r);break;default:{let e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return t}parseInline(e,t=this.renderer){let i="";for(let s=0;s<e.length;s++){var n;let r=e[s];if(null!==(n=this.options.extensions)&&void 0!==n&&null!==(n=n.renderers)&&void 0!==n&&n[r.type]){let e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){i+=e||"";continue}}let o=r;switch(o.type){case"escape":case"text":i+=t.text(o);break;case"html":i+=t.html(o);break;case"link":i+=t.link(o);break;case"image":i+=t.image(o);break;case"checkbox":i+=t.checkbox(o);break;case"strong":i+=t.strong(o);break;case"em":i+=t.em(o);break;case"codespan":i+=t.codespan(o);break;case"br":i+=t.br(o);break;case"del":i+=t.del(o);break;default:{let e='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return i}},rp=class{options;block;constructor(e){this.options=e||Dc}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?tp.lex:tp.lexInline}provideParser(){return this.block?sp.parse:sp.parseInline}},op=class{defaults=Pc();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=sp;Renderer=ip;TextRenderer=np;Lexer=tp;Tokenizer=ep;Hooks=rp;constructor(...e){this.use(...e)}walkTokens(e,t){let i=[];for(let s of e)switch(i=i.concat(t.call(this,s)),s.type){case"table":{let e=s;for(let n of e.header)i=i.concat(this.walkTokens(n.tokens,t));for(let n of e.rows)for(let e of n)i=i.concat(this.walkTokens(e.tokens,t));break}case"list":{let e=s;i=i.concat(this.walkTokens(e.items,t));break}default:{var n;let e=s;null!==(n=this.defaults.extensions)&&void 0!==n&&null!==(n=n.childTokens)&&void 0!==n&&n[e.type]?this.defaults.extensions.childTokens[e.type].forEach(n=>{let s=e[n].flat(1/0);i=i.concat(this.walkTokens(s,t))}):e.tokens&&(i=i.concat(this.walkTokens(e.tokens,t)))}}return i}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let i=Object.assign({},e);if(i.async=this.defaults.async||i.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw new Error("extension name required");if("renderer"in e){let i=t.renderers[e.name];t.renderers[e.name]=i?function(...t){let n=e.renderer.apply(this,t);return!1===n&&(n=i.apply(this,t)),n}:e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");let i=t[e.level];i?i.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),i.extensions=t),e.renderer){let t=this.defaults.renderer||new ip(this.defaults);for(let i in e.renderer){if(!(i in t))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let n=i,s=e.renderer[n],r=t[n];t[n]=(...e)=>{let i=s.apply(t,e);return!1===i&&(i=r.apply(t,e)),i||""}}i.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new ep(this.defaults);for(let i in e.tokenizer){if(!(i in t))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let n=i,s=e.tokenizer[n],r=t[n];t[n]=(...e)=>{let i=s.apply(t,e);return!1===i&&(i=r.apply(t,e)),i}}i.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new rp;for(let i in e.hooks){if(!(i in t))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let n=i,s=e.hooks[n],r=t[n];rp.passThroughHooks.has(i)?t[n]=e=>{if(this.defaults.async&&rp.passThroughHooksRespectAsync.has(i))return(async()=>{let i=await s.call(t,e);return r.call(t,i)})();let n=s.call(t,e);return r.call(t,n)}:t[n]=(...e)=>{if(this.defaults.async)return(async()=>{let i=await s.apply(t,e);return!1===i&&(i=await r.apply(t,e)),i})();let i=s.apply(t,e);return!1===i&&(i=r.apply(t,e)),i}}i.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,n=e.walkTokens;i.walkTokens=function(e){let i=[];return i.push(n.call(this,e)),t&&(i=i.concat(t.call(this,e))),i}}this.defaults=Object.assign(Object.assign({},this.defaults),i)}),this}setOptions(e){return this.defaults=Object.assign(Object.assign({},this.defaults),e),this}lexer(e,t){return tp.lex(e,t??this.defaults)}parser(e,t){return sp.parse(e,t??this.defaults)}parseMarkdown(e){return(t,i)=>{let n=Object.assign({},i),s=Object.assign(Object.assign({},this.defaults),n),r=this.onError(!!s.silent,!!s.async);if(!0===this.defaults.async&&!1===n.async)return r(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||null===t)return r(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=e),s.async)return(async()=>{let i=s.hooks?await s.hooks.preprocess(t):t,n=await(s.hooks?await s.hooks.provideLexer():e?tp.lex:tp.lexInline)(i,s),r=s.hooks?await s.hooks.processAllTokens(n):n;s.walkTokens&&await Promise.all(this.walkTokens(r,s.walkTokens));let o=await(s.hooks?await s.hooks.provideParser():e?sp.parse:sp.parseInline)(r,s);return s.hooks?await s.hooks.postprocess(o):o})().catch(r);try{s.hooks&&(t=s.hooks.preprocess(t));let i=(s.hooks?s.hooks.provideLexer():e?tp.lex:tp.lexInline)(t,s);s.hooks&&(i=s.hooks.processAllTokens(i)),s.walkTokens&&this.walkTokens(i,s.walkTokens);let n=(s.hooks?s.hooks.provideParser():e?sp.parse:sp.parseInline)(i,s);return s.hooks&&(n=s.hooks.postprocess(n)),n}catch(e){return r(e)}}}onError(e,t){return i=>{if(i.message+="\nPlease report this to https://github.com/markedjs/marked.",e){let e="<p>An error occurred:</p><pre>"+Gd(i.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(i);throw i}}},ap=new op;function lp(e,t){return ap.parse(e,t)}lp.options=lp.setOptions=function(e){return ap.setOptions(e),lp.defaults=ap.defaults,Fc(lp.defaults),lp},lp.getDefaults=Pc,lp.defaults=Dc,lp.use=function(...e){return ap.use(...e),lp.defaults=ap.defaults,Fc(lp.defaults),lp},lp.walkTokens=function(e,t){return ap.walkTokens(e,t)},lp.parseInline=ap.parseInline,lp.Parser=sp,lp.parser=sp.parse,lp.Renderer=ip,lp.TextRenderer=np,lp.Lexer=tp,lp.lexer=tp.lex,lp.Tokenizer=ep,lp.Hooks=rp,lp.parse=lp,lp.options,lp.setOptions,lp.use,lp.walkTokens,lp.parseInline,sp.parse,tp.lex;const cp={code:(e,t,i)=>`<pb-code-highlight language="${e.lang||t||"undefined"}" line-numbers>\n      <template>${e.text||e}</template>\n  </pb-code-highlight>`};function dp(e){const t=e.match(/^[^\S]*(?=\S)/gm);return t&&t[0].length?(t.sort((e,t)=>e.length-t.length),t[0].length?e.replace(RegExp(`^${t[0]}`,"gm"),""):e):e}lp.use({renderer:cp});class pp extends(o(s)){static get properties(){return Object.assign({content:{type:String},url:{type:String}},super.properties)}constructor(){super(),this._url=null}set url(e){this._url=e,a("pb-page-ready",e=>{this._load(e.endpoint)})}connectedCallback(){if(super.connectedCallback(),this.style.display="block",!this.content){const e=document.createElement("div");for(let t=0;t<this.childNodes.length;t++){const i=this.childNodes[t];e.appendChild(document.importNode(i.content||i,!0))}this.content=dp(e.innerHTML)}this.subscribeTo("pb-zoom",e=>{this.zoom(e.detail.direction)})}_load(e){const t=this.toAbsoluteURL(this._url,e);fetch(t,{credentials:"same-origin"}).then(e=>e.text()).catch(()=>(console.error("<pb-markdown> failed to load content from %s",t.toString()),Promise.resolve(this.content))).then(e=>{this.content=e})}createRenderRoot(){return this}render(){return this.content?t`<div>${_(lp.parse(this.content))}</div>`:null}static get styles(){return n`
      :host {
        display: block;
        font-size: calc(var(--pb-content-font-size, 1rem) * var(--pb-zoom-factor, 1));
      }
    `}zoom(e){}}customElements.define("pb-markdown",pp);const hp=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const t=e.target;t.emitTo("pb-visible",{data:t.data})}})});class up extends(o(s)){static get properties(){return Object.assign({data:{type:String}},super.properties)}disconnectedCallback(){super.disconnectedCallback(),hp&&hp.unobserve(this)}firstUpdated(){hp.observe(this)}render(){return t`<slot></slot>`}static get styles(){return n`
      :host {
        display: inline;
      }
    `}}customElements.define("pb-observable",up);let gp=0;class fp extends(o(s)){static get properties(){return Object.assign({label:{type:String},value:{type:String,reflect:!0},values:{type:Array,reflect:!0},name:{type:String},source:{type:String},multi:{type:Boolean},_items:{type:Array},_selected:{type:Array}},super.properties)}constructor(){super(),this.value=null,this.values=[],this._items=[],this._selected=[],this._controlId="pb-select-"+ ++gp}connectedCallback(){if(super.connectedCallback(),this.subscribeTo("pb-i18n-update",this._refresh.bind(this)),this.multi){if("string"==typeof this.values)try{this.values=JSON.parse(this.values)}catch(e){this.values=this.values.split(",").map(e=>e.trim())}Array.isArray(this.values)||(this.values=[]),0===this.values.length&&this.value&&(this.values=[this.value]),this.value=void 0,this._selected=[...this.values]}}firstUpdated(){super.firstUpdated();const e=this.shadowRoot.querySelector('[name="subform"]');e&&e.assignedNodes().forEach(e=>{this.name&&e.addEventListener("change",this._loadRemote.bind(this));e.querySelectorAll("[name]").forEach(e=>{e.addEventListener("change",this._loadRemote.bind(this))})}),a("pb-page-ready",()=>{this._loadRemote()}),this._syncHiddenInputs()}updated(e){(e.has("value")||e.has("values"))&&(this.multi&&!Array.isArray(this.values)&&(this.values="string"==typeof this.values?[this.values]:[]),this._syncHiddenInputs())}_refresh(){this.requestUpdate()}_clear(e){const t=this.shadowRoot.querySelector(e);t&&t.assignedNodes().forEach(e=>{e.parentNode.removeChild(e)})}_loadRemote(){if(!this.source)return;let e=this.toAbsoluteURL(this.source);e+=e.includes("?")?"&":"?",e+=this._getParameters(),console.log("<pb-select> loading items from %s",e),fetch(e,{method:"GET",mode:"cors",credentials:"same-origin"}).then(e=>e.json()).then(e=>{this._clear("slot:not([name])");const t=e.map(fp.jsonEntry2item);console.log("<pb-select> loaded %d items",t.length),this._items=t}).catch(()=>console.error("<pb-select> request to %s failed",e))}static jsonEntry2item(e){return{label:e.text,value:e.value}}_getParameters(){const e=this.shadowRoot.querySelector('[name="subform"]'),t=[];return e&&e.assignedNodes().forEach(e=>{e.querySelectorAll("[name]").forEach(e=>{t.push(`${e.name}=${encodeURIComponent(e.value)}`)})}),t.join("&")}render(){return t`
      <slot name="subform"></slot>
      <slot hidden></slot>
      ${this.multi?t`
            <label part="label" class="pb-select__label" for="${this._controlId}-multi">
              ${u(this.label)}
            </label>
            <div class="pb-select__options" id="${this._controlId}-multi">
              ${this._renderOptionsList()}
            </div>
          `:t`
            <label part="label" class="pb-select__label" for="${this._controlId}-single">
              ${u(this.label)}
            </label>
            <select
              id="${this._controlId}-single"
              class="pb-select__select"
              .value=${this.value??""}
              @change=${this._changed}
            >
              ${this._renderSelectOptions()}
            </select>
          `}
      <slot name="output"></slot>
    `}_changed(e){if(!this.multi){const e=this.shadowRoot.getElementById(`${this._controlId}-single`);if(!e)return;return this._selected=[e.value],this.value=e.value,this._syncHiddenInputs(),void this.dispatchEvent(new CustomEvent("change"))}const t=this.shadowRoot.querySelectorAll(".pb-select__checkbox"),i=[];t.forEach(e=>{e.checked&&i.push(e.value)});const n=Array.isArray(this._selected)?Array.from(this._selected):[];this._selected=i,this.values=[...i],this._selected.length===n.length&&this._selected.every((e,t)=>e===n[t])||(this._syncHiddenInputs(),this.dispatchEvent(new CustomEvent("change")))}_renderSelectOptions(){const e=[...this._getSlottedItems(),...this._items];return e.some(e=>e&&""===e.value)||e.unshift({value:"",label:""}),e.filter(Boolean).map(e=>t`<option value="${e.value}">${e.label}</option>`)}_renderOptionsList(){const e=Array.isArray(this.values)?this.values:[];return[...this._getSlottedItems(),...this._items].map(i=>{if(!i.value)return null;const n=e.includes(i.value);return t`
          <label class="pb-select__option">
            <input
              class="pb-select__checkbox"
              type="checkbox"
              .value="${i.value}"
              .checked=${n}
              @change=${this._changed}
            />
            <span>${i.label}</span>
          </label>
        `}).filter(Boolean)}_getSlottedItems(){const e=this.shadowRoot.querySelector("slot:not([name])");if(!e)return[];const t=e.assignedNodes({flatten:!0}),i=[];return t.forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){const t=e.getAttribute("value"),n=(e.textContent||"").trim();null!==t&&i.push({value:t,label:n})}}),i}_syncHiddenInputs(){if(this._clear('[name="output"]'),!this.name)return;(this.multi?Array.isArray(this.values)?this.values:[]:[this.value]).filter(e=>null!=e&&""!==e).forEach(e=>{const t=document.createElement("input");t.type="hidden",t.name=this.name,t.value=e,t.slot="output",this.appendChild(t)})}static get styles(){return n`
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-top: 1rem;
      }

      .pb-select__label {
        font: var(--pb-base-font);
        font-size: var(--pb-font-caption);
        font-weight: 600;
        color: var(--pb-label-color, #303030);
        margin-bottom: 4px;
      }

      .pb-select__select {
        width: 100%;
        padding: 8px 12px;
        border-radius: 4px;
        border: 1px solid var(--pb-border-color, #c0c0c0);
        font-size: 1rem;
        background-color: var(--pb-field-bg, #fff);
        color: inherit;
      }

      .pb-select__select:focus {
        outline: none;
        border-color: var(--pb-primary-color, #1976d2);
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.15);
      }

      .pb-select__options {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .pb-select__option {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.95rem;
      }
    `}}customElements.define("pb-select",fp);class mp extends(m(o(s))){static get properties(){return Object.assign({label:{type:String}},super.properties)}constructor(){super(),this.label="clipboard.label"}render(){return t`
      <h3>${u(this.label)}</h3>
      <div>
        <slot></slot>
        <button
          class="pb-button pb-button--icon copy-button"
          type="button"
          @click="${this._copy}"
          aria-label="${u("clipboard.copy")}"
          title="${u("clipboard.copy")}"
        >
          <svg class="copy-button__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
            ></path>
          </svg>
        </button>
      </div>
    `}_copy(){const e=this.shadowRoot.querySelector("slot"),t=document.createElement("div");e.assignedNodes().forEach(e=>{t.appendChild(document.importNode(e,!0))}),navigator.clipboard.writeText(t.innerText)}static get styles(){return n`
      :host {
        display: block;
      }
      h3 {
        margin: 0;
        font-size: 0.85em;
        font-weight: normal;
        color: #3a3a3a;
      }
      div {
        display: flex;
        align-items: center;
        padding: 0 16px;
        gap: 8px;
      }

      .copy-button {
        margin-left: auto;
        justify-content: center;
      }

      .copy-button__icon {
        width: 20px;
        height: 20px;
        fill: currentColor;
      }
    `}}customElements.define("pb-clipboard",mp);class bp{constructor(e){this._prefix=e.getAttribute("prefix"),this._config={name:e.getAttribute("name"),properties:{}},this._register=this._config.name}get register(){return this._register}get name(){return this._register}set name(e){this._register=e}get editable(){return!1}query(e){throw new Error("Method query not implemented")}info(e,t){return t.innerHTML="not implemented",Promise.resolve()}async select(e){return Promise.resolve(e)}async getRecord(e){return Promise.reject()}}class vp extends bp{async query(e){const t=e.replace(/[^\w\s]+/g,""),i=[],n=`https://api.metagrid.ch/search?query=${encodeURIComponent(t)}`;return new Promise(e=>{fetch(n).then(e=>e.json()).then(t=>{t.resources.forEach(e=>{const t=`${e.metadata.last_name}, ${e.metadata.first_name} `,n={register:this._register,id:`${e.provider.slug}-${e.identifier}`,label:t,details:`${e.metadata.birth_date} - ${e.metadata.death_date}`,link:e.link.uri,provider:e.provider.slug};i.push(n)}),e({totalItems:t.meta.total,items:i})})})}info(e,t){const i=e.indexOf("-"),n=e.substring(0,i);return new Promise(i=>{this.getRecord(e).then(e=>{const s=`\n          <h3 class="label">\n            <a href="https://${e.link.uri}" target="_blank">\n              ${e.metadata.last_name}, ${e.metadata.first_name}\n            </a>\n          </h3>\n          <p>${e.metadata.birth_date} - ${e.metadata.death_date}</p>\n        `;t.innerHTML=s,i({id:`${n}-${e.identifier}`,strings:[`${e.metadata.first_name} ${e.metadata.last_name}`]})})})}async getRecord(e){const t=e.indexOf("-"),i=e.substring(0,t),n=e.substring(t+1);return fetch(`https://api.metagrid.ch/search?slug=${i}&query=${n}`).then(e=>e.json()).then(e=>{const t=e.resources[0],i=Object.assign({},t);return i.name=`${t.metadata.first_name} ${t.metadata.last_name}`,i.links=[`https://${t.link.uri}`],t.metadata.birth_date&&t.metadata.birth_date.length>0&&(i.birth=t.metadata.birth_date),t.metadata.death_date&&t.metadata.death_date.length>0&&(i.death=t.metadata.death_date),i}).catch(e=>Promise.reject(e))}}class yp extends bp{constructor(e){super(e),this.user=e.getAttribute("user")}async query(e){const t=[];return new Promise(i=>{fetch(`https://secure.geonames.org/searchJSON?formatted=true&q=${encodeURIComponent(e)}&maxRows=100&&username=${this.user}&style=full`).then(e=>e.json()).then(e=>{e.geonames.forEach(e=>{const i={register:this._register,id:this._prefix?`${this._prefix}-${e.geonameId}`:e.geonameId,label:e.toponymName,details:`${e.fcodeName} - ${e.adminName1}, ${e.countryName}`,link:`https://www.geonames.org/${e.geonameId}`,strings:[e.toponymName],provider:"geonames.org"};t.push(i)}),i({totalItems:e.totalResultsCount,items:t})})})}info(e,t){return e?new Promise((i,n)=>{this.getRecord(e).then(e=>{if(e.status)return void n(e.status.message);const s=`\n            <h3 class="label">\n              <a href="${e.link}" target="_blank">${e.name}</a>\n            </h3>\n            <p class="fcode">${e.note} - ${e.region}, ${e.country}</p>\n          `;t.innerHTML=s,i({id:this._prefix?`${this._prefix}-${e.geonameId}`:e.geonameId,strings:[e.name]})}).catch(()=>n())}):Promise.resolve({})}async getRecord(e){const t=this._prefix?e.substring(this._prefix.length+1):e;return fetch(`https://secure.geonames.org/getJSON?geonameId=${encodeURIComponent(t)}&username=${this.user}`).then(e=>e.ok?e.json():Promise.reject(e.status)).then(e=>{const t=Object.assign({},e);return t.name=e.toponymName,t.country=e.countryName,t.region=e.adminName1,t.note=e.fcodeName,t.links=[`https://www.geonames.org/${e.geonameId}`,`https://${e.wikipediaURL}`],t}).catch(()=>Promise.reject())}}function _p(e="",t){return e.replace(/\${([^}]+)}/g,(e,i)=>{let n;return t[i]&&(n=t[i]),n||""})}function wp(e,t){const i=e.querySelector(t);if(i instanceof HTMLTemplateElement){const e=document.createElement("div");return e.appendChild(i.content.cloneNode(!0)),e.innerHTML}return""}class xp extends bp{constructor(e){super(e),this.apiKey=e.getAttribute("api-key"),this.baseKey=e.getAttribute("base"),this.table=e.getAttribute("table"),this.view=e.getAttribute("view"),this.filterExpr=e.getAttribute("filter"),this.labelExpr=e.getAttribute("label");const t=e.getAttribute("fields");this.fields=t?t.split(/\s*,\s*/):["ID"];const i=e.getAttribute("tokenize");this.tokenize=i?i.split(/\s*,\s*/):[this.fields[0]],this.tokenizeChars=e.getAttribute("tokenize-regex")||"\\W",this.infoExpr=wp(e,".info"),this.detailExpr=wp(e,".detail"),this._init()}_init(){window.ESGlobalBridge.requestAvailability();const e=r("../lib/airtable.browser.js");window.ESGlobalBridge.instance.load("airtable",e),window.addEventListener("es-bridge-airtable-loaded",this._initAirtable.bind(this),{once:!0})}_initAirtable(){const e=require("airtable");this.base=new e({apiKey:this.apiKey}).base(this.baseKey)}async query(e){e=e.toLowerCase();const t=[],i=this.filterExpr?_p(this.filterExpr,{key:e}):null,n={fields:this.fields,maxRecords:100};return this.view&&(n.view=this.view),i&&(n.filterByFormula=i),new Promise((e,i)=>{this.base(this.table).select(n).firstPage((n,s)=>{if(n)return console.error(n),void i(n);s.forEach(e=>{const i={};this.fields.forEach(t=>{i[t]=e.get(t)});const n={register:this._register,id:e.id,label:_p(this.labelExpr,i),details:_p(this.detailExpr,i),provider:"airtable"};t.push(n)}),e({totalItems:3,items:t})})})}info(e,t){return new Promise((i,n)=>{this.base(this.table).find(e,(s,r)=>{if(s){if(404===s.statusCode)n(`No record found for ${e} in table ${this.table}`);else n(`${s.statusCode}: ${s.message}`);return}if(0===Object.keys(r.fields).length)return void n(`No record found for ${e} in table ${this.table}`);let o=[];const a={};this.fields.forEach(e=>{const t=r.get(e);t&&(a[e]=t,o.push(t))});const l=new RegExp(this.tokenizeChars);this.tokenize.forEach(e=>{a[e]&&(o=o.concat(a[e].split(l)))}),o=o.filter(e=>!/^\d+$/.test(e)),o.sort((e,t)=>t.length-e.length),t.innerHTML=_p(this.infoExpr,a),i({id:r.id,strings:o})})})}}function kp(e){let t="";e.professionOrOccupation&&e.professionOrOccupation.length>0&&(t=e.professionOrOccupation.map(e=>e.label).join(", ")),e.biographicalOrHistoricalInformation&&(t=`${t}; ${e.biographicalOrHistoricalInformation.join(", ")}`);const i=[];return e.dateOfBirth&&e.dateOfBirth.length>0&&i.push(e.dateOfBirth[0]),e.dateOfDeath&&e.dateOfDeath.length>0&&(i.push(" - "),i.push(e.dateOfDeath[0])),i.length>0?`${i.join("")}${t?`; ${t}`:""}`:t}class Ap extends bp{query(e){const t=[];let i;switch(this._register){case"place":i="PlaceOrGeographicName";break;case"term":i="SubjectHeading";break;case"organization":i="CorporateBody";break;case"work":i="Work";break;default:i="Person"}return new Promise(n=>{fetch(`https://lobid.org/gnd/search?q=${encodeURIComponent(e)}&filter=%2B%28type%3A${i}%29&format=json&size=100`).then(e=>e.json()).then(e=>{e.member.forEach(e=>{const i={register:this._register,id:this._prefix?`${this._prefix}-${e.gndIdentifier}`:e.gndIdentifier,label:e.preferredName,link:e.id,details:kp(e),strings:[e.preferredName].concat(e.variantName),provider:"GND"};t.push(i)}),n({totalItems:e.totalItems,items:t})})})}async getRecord(e){const t=this._prefix?e.substring(this._prefix.length+1):e;return fetch(`https://lobid.org/gnd/${t}.json`).then(e=>e.ok?e.json():Promise.reject()).then(e=>{const t=Object.assign({},e);return t.name=e.preferredName,t.link=e.id,e.dateOfBirth&&e.dateOfBirth.length>0&&(t.birth=e.dateOfBirth[0]),e.dateOfDeath&&e.dateOfDeath.length>0&&(t.death=e.dateOfDeath[0]),e.biographicalOrHistoricalInformation&&(t.note=e.biographicalOrHistoricalInformation.join("; ")),e.professionOrOccupation&&e.professionOrOccupation.length>0&&(t.profession=e.professionOrOccupation.map(e=>e.label)),t}).catch(()=>Promise.reject())}info(e,t){return e?new Promise((i,n)=>{this.getRecord(e).then(e=>{let n;e.type.indexOf("SubjectHeading")>-1?n=this.infoSubject(e):e.type.indexOf("AuthorityResource")>-1&&(n=this.infoPerson(e));const s=`\n          <h3 class="label">\n            <a href="https://${e.id}" target="_blank"> ${e.preferredName} </a>\n          </h3>\n          ${n}\n        `;t.innerHTML=s,i({id:this._prefix?`${this._prefix}-${e.gndIdentifier}`:e.gndIdentifier,strings:[e.preferredName].concat(e.variantName)})}).catch(()=>n())}):Promise.resolve()}infoPerson(e){const t=e.professionOrOccuption?e.professionOrOccupation.map(e=>e.label):[];return`<p>${e.dateOfBirth} - ${e.dateOfDeath}</p>\n      <p>${t.join(" ")}</p>`}infoSubject(e){if(e.broaderTermGeneral){return`<p>${e.broaderTermGeneral.map(e=>e.label).join(", ")}</p>`}return""}}class Sp extends bp{constructor(e){super(e),this._api=e.getAttribute("api"),this._limit=e.getAttribute("limit")||999999}async query(e){const t=[],i=this.getRegister(),n=`https://meta.karl-barth.ch/api/${i}?${"bibls"===i?"biblsearch":"search"}=${encodeURIComponent(e)}&perPage=${this._limit}`,s=this.getLabelField();return new Promise(e=>{fetch(n).then(e=>e.json()).then(n=>{n.data.forEach(e=>{if("organization"===this._register&&"organisation"!==e.authority_type||"person"===this._register&&"person"!==e.authority_type)return;const n={register:this._register,id:this._prefix?`${this._prefix}:${e["full-id"]}`:e["full-id"],label:"string"==typeof s?e[s]:s(e),details:`${e["full-id"]}`,link:`https://meta.karl-barth.ch/${i}/${e.id}`,strings:["string"==typeof s?e[s]:s(e)],provider:"KBGA"};t.push(n)}),e({totalItems:n.meta.total,items:t})})})}info(e,t){if(!e)return Promise.resolve({});const i=this.getLabelField();return new Promise(n=>{this.getRecord(e).then(e=>{const s=e.data.death?`† ${e.data.death}`:"",r=e.data.birth?`<p>* ${e.data.birth} ${s}</p>`:"",o=e.data.note_bio?`<p>${e.data.note_bio}</p>`:"",a=`\n            <h3 class="label"><a href="https://${e.wikipediaURL}" target="_blank">${"string"==typeof i?e.data[i]:i(e.data)}</a></h3>\n              ${r}\n              ${o}\n          `;t.innerHTML=a,n({id:e.data["full-id"],strings:["string"==typeof i?e.data[i]:i(e.data)]})})})}async getRecord(e){const t=e.replace(/^.*-([^-]+)$/,"$1");return fetch(`https://meta.karl-barth.ch/api/${this.getRegister()}/${t}`).then(e=>e.json()).then(e=>{const t=Object.assign({},e);switch(t.name=e.data[this.getLabelField()],this._register){case"place":t.country=e.data.country,t.location=e.data.location.coordinates,t.links=e.data.links.map(e=>e.url);break;case"person":t.birth=e.data.birth,t.death=e.data.death,t.note=e.data.note_bio,t.links=[`https://${e.wikipediaURL}`]}return t}).catch(e=>Promise.reject(e))}getLabelField(){let e;switch(this._register){case"place":e="placeName_full";break;case"term":e="fullLabel";break;case"abbreviation":e="label";break;case"bibl":case"songs":e="asHtml";break;default:e="persName_full"}return e}getRegister(){if(this._api)return this._api;let e;switch(this._register){case"person":case"organization":e="actors";break;case"place":e="places";break;case"term":e="terms";break;case"abbreviation":e="abbreviations";break;case"bibl":e="bibls";break;default:e=this._register}return e}}class $p extends bp{constructor(e){super(e),this._url=e.getAttribute("url")||"https://archives.georgfischer.com/api",this._api=e.getAttribute("api"),this._limit=e.getAttribute("limit")||999999,this._provider=e.getAttribute("provider")||e.getAttribute("connector")}async query(e){const t=[],i=this.getRegister(),n=`${this._url}/${i}?search=${encodeURIComponent(e)}&perPage=${this._limit}`,s=this.getLabelField();return new Promise(e=>{fetch(n).then(e=>e.json()).then(n=>{n.data?(n.data.forEach(e=>{if("organization"===this._register&&"Person"===e.authority_type||"person"===this._register&&"Person"!==e.authority_type)return;const n={register:this._register,id:this._prefix?`${this._prefix}-${e.id}`:e.id,label:e[s],details:`${e.id}`,link:`${this._url}/${i}/${e.id}`,strings:[e[s]],provider:this._provider};t.push(n)}),e({totalItems:n.meta.total,items:t})):e({totalItems:0,items:[]})}).catch(e=>Promise.reject(e))})}info(e,t){if(!e)return Promise.resolve({});const i=this._prefix?e.substring(this._prefix.length+1):e,n=this.getLabelField();return new Promise(e=>{this.getRecord(i).then(i=>{const s=i.data.death?`† ${i.data.death}`:"",r=i.data.birth?`<p>* ${i.data.birth} ${s}</p>`:"",o=i.data.note_bio?`<p>${i.data.note_bio}</p>`:"",a=`\n            <h3 class="label"><a href="https://${i.wikipediaURL}" target="_blank">${i.data[n]}</a></h3>\n              ${r}\n              ${o}\n          `;t.innerHTML=a,e({id:this._prefix?`${this._prefix}-${i.data.id}`:i.data.id,strings:[i.data[n]]})})})}async getRecord(e){const t=e.replace(/^.*-([^-]+)$/,"$1"),i=`${this._url}/${this.getRegister()}/${t}`;return fetch(i).then(e=>e.json()).then(e=>{const t=Object.assign({},e);switch(t.name=e.data[this.getLabelField()],this._register){case"place":t.country=e.data.country,e.data.location&&e.data.location.coordinates&&(t.location=e.data.location.coordinates),t.links=e.data.links.map(e=>e.url);break;case"person":t.birth=e.data.birth,t.death=e.data.death,t.note=e.data.note_bio,t.links=[`https://${e.wikipediaURL}`]}return t}).catch(e=>Promise.reject(e))}getLabelField(){let e;if("term"===this._register)e="label";else e="fullname";return e}getRegister(){if(this._api)return this._api;let e;switch(this._register){case"person":case"organization":e="actors";break;case"origPlace":case"place":e="places";break;case"term":e="keywords";break;case"abbreviation":e="abbreviations";break;default:e=this._register}return e}}async function Ep(e){const t=await fetch(e);return await t.json()}class Op extends bp{constructor(e){super(e),this.endpoint=e.getAttribute("endpoint"),this.debug=e.getAttribute("debug"),Ep(this.endpoint).then(e=>{this.ORConfig=e,this.debug&&console.log("OpenReconcile connector for register '%s' at endpoint <%s>. Using config: %o",this._register,this.endpoint,this.ORConfig)})}async query(e){const t=[],i={q1:{query:e}};return new Promise(e=>{fetch(this.endpoint,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},body:"queries=".concat(JSON.stringify(i))}).then(e=>e.json()).then(i=>{i.q1.result.forEach(e=>{this.ORConfig.view?this.view=this.ORConfig.view.url.replace("{{id}}",e.id):this.view=e.id,e.description?this.description=e.description:e.type?this.description=e.type.map(e=>e.name.toString()).join(", "):this.description="";const i={register:this._register,id:this._prefix?`${this._prefix}-${e.id}`:e.id,label:e.name,link:this.view,details:this.description,provider:"OpenReconcile"};t.push(i)}),this.debug&&console.log("OpenReconcile results: %o",t),e({totalItems:i.q1.result.length,items:t})})})}info(e,t){return e?this.ORConfig.preview?new Promise((i,n)=>{const s=this._prefix?e.substring(this._prefix.length+1):e,r=this.ORConfig.preview.url.replace("{{id}}",encodeURIComponent(s));fetch(r).then(e=>e.text()).then(e=>{t.innerHTML=e,i({id:this._prefix?`${this._prefix}-${s}`:s})}).catch(()=>n())}):(t.innerHTML="no 'preview' information in endpoint's manifest",Promise.resolve()):Promise.resolve({})}}function Cp(e,t){const i=[];return t.querySelectorAll(":scope > pb-authority").forEach(e=>{let t;switch(e.getAttribute("connector")){case"GND":t=new Ap(e);break;case"GeoNames":t=new yp(e);break;case"Airtable":t=new xp(e);break;case"KBGA":t=new Sp(e);break;case"Anton":case"GF":t=new $p(e);break;case"ReconciliationService":t=new Op(e);break;case"Custom":return void console.warn("Nested Custom connector ignored to avoid circular dependency");default:t=new vp(e)}i.push(t)}),i}class Tp extends bp{constructor(e,t){super(t),this._editable=t.hasAttribute("edit"),this._endpoint=e,this._connectors=Cp(e,t),this._connectors.forEach(e=>{e.name=this.name}),console.log("custom connector: endpoint: %s; using authorities: %o",this._endpoint,this._connectors)}get editable(){return this._editable}async query(e){return new Promise(t=>{fetch(`${this._endpoint}/api/register/search/${this._register}?query=${encodeURIComponent(e)}`).then(e=>e.json()).then(async i=>{let n=[];const s=new Set;i.forEach(e=>{n.push({register:this._register,id:e.id,label:e.label,link:e.link,details:e.details,provider:"local"}),s.add(e.id)});let r=i.length;for(const t of this._connectors){const i=await t.query(e);n=n.concat(i.items.filter(e=>!s.has(e.id))),r+=i.totalItems}t({totalItems:r,items:n})})})}info(e,t){if(!e)return Promise.resolve({});const i=e;return new Promise((n,s)=>{fetch(`${this._endpoint}/api/register/${this._register}/${encodeURIComponent(i)}`).then(async i=>{if(i.ok){const e=await i.json();return t.innerHTML=e.details,void n({id:e.id,strings:e.strings,editable:this._editable})}if(404===i.status)for(const i of this._connectors)try{const s=await i.info(e,t);s&&n(s)}catch(e){}s()})})}async select(e){let t;for(const i of this._connectors)if(t=await i.getRecord(e.id).catch(()=>null),t)break;return t?fetch(`${this._endpoint}/api/register/${this._register}/${encodeURIComponent(e.id)}`,{method:"POST",mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.ok?e.json():Promise.reject(Error(e.status.toString()))):Promise.resolve(e)}}function Ip(e,t){const i=[];return t.querySelectorAll(":scope > pb-authority").forEach(t=>{let n;switch(t.getAttribute("connector")){case"GND":n=new Ap(t);break;case"GeoNames":n=new yp(t);break;case"Airtable":n=new xp(t);break;case"KBGA":n=new Sp(t);break;case"Anton":case"GF":n=new $p(t);break;case"ReconciliationService":n=new Op(t);break;case"Custom":n=new Tp(e,t);break;default:n=new vp(t)}i.push(n)}),i}class Lp extends(m(o(s))){static get properties(){return Object.assign({query:{type:String,reflect:!0},sortByLabel:{type:Boolean,attribute:"sort-by-label"},stopwords:{type:String},group:{type:String},type:{type:String,reflect:!0},noOccurrences:{type:Boolean,attribute:"no-occurrences"},autoLookup:{type:Boolean,attribute:"auto"},_results:{type:Array}},super.properties)}constructor(){super(),this.query="",this.type=null,this.sortByLabel=!1,this._results=[],this._authorities={},this.noOccurrences=!1,this.group="tei"}connectedCallback(){super.connectedCallback(),this._stopwordSet=new Set,this.stopwords&&this.stopwords.split(/\s*,\s*/).forEach(e=>this._stopwordSet.add(e.toLowerCase())),this.subscribeTo("pb-authority-lookup",e=>{this.query=e.detail.query,this.type=e.detail.type,this._results=[],this._query()}),a("pb-page-ready",()=>{Ip(this.getEndpoint(),this).forEach(e=>{this._authorities[e.register]=e}),this.autoLookup&&this._query()}),console.log("<pb-authority-lookup> Registered authorities: %o",this._authorities)}render(){return t`
      <header>
        <input
          id="query"
          type="search"
          placeholder="${u("annotations.lookup")}"
          .value="${this.query}"
          @input="${e=>this._queryChanged(e)}"
          @change="${e=>this._queryChanged(e)}"
          aria-label="${u("annotations.lookup")}"
        />
        ${this._authorities[this.type]&&this._authorities[this.type].editable?t`
              <pb-restricted group="${this.group}">
                <button
                  @click="${this._addEntity}"
                  title="${u("annotations.add-entity")}"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M256 112v288M400 256H112"
                    />
                  </svg>
                </button>
              </pb-restricted>
            `:null}
      </header>
      <slot name="authform"></slot>
      <div id="output">
        <ul part="output">
          ${this._results.map(e=>this._formatItem(e))}
        </ul>
      </div>
    `}async lookup(e,t,i){if(!t||""===t)return console.log("<pb-authority-lookup> Key is empty"),i.innerHTML="",Promise.resolve();const n=this._authorities[e];console.log("<pb-authority-lookup> Retrieving info for %s from %s using %s",t,e,n.constructor.name);let s=await n.info(t,i);return s.strings&&(s=Object.assign(s,{strings:s.strings.filter(e=>e&&!this._stopwordSet.has(e.toLowerCase()))})),s}_formatItem(e){return t`
      <li>
        <div>
          <button @click="${()=>this._select(e)}" title="link to" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
              <path
                d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="36"
              />
            </svg>
          </button>
          ${e.link?t`<a target="_blank" href="${e.link}">${_(e.label)}</a>`:t`${_(e.label)}`}
          <div class="badges">
            ${e.occurrences>0?t`<span class="occurrences badge" part="occurrences">${e.occurrences}</span>`:null}
            ${e.provider?t`<span class="source badge" part="source">${e.provider}</span>`:null}
            <span class="register badge" part="register">${e.register}</span>
            ${this._authorities[this.type]&&this._authorities[this.type].editable?t` <pb-restricted group="${this.group}">
                  <button
                    @click="${()=>this._editEntity(e)}"
                    title="${u("annotations.edit-entity")}"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                      <path
                        d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      />
                      <path
                        d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z"
                      />
                    </svg>
                  </button>
                </pb-restricted>`:null}
          </div>
        </div>
        ${e.details?t`<div class="details" part="details">${e.details}</div>`:null}
      </li>
    `}static get styles(){return n`
      :host {
        display: flex;
        flex-direction: column;
      }

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      header > input {
        flex-grow: 1;
      }

      .link {
        flex-grow: 2;
      }

      #output {
        overflow: auto;
        /*FireFox*/
        scrollbar-width: none;
      }

      #output > ul {
        width: 100%;
        padding: 0;
        list-style: none;
      }

      #output > ul > li {
        border-bottom: 1px solid var(--pb-color-border);
      }

      #output > ul > li > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.125rem;
      }

      #output > ul > li > div > a {
        flex-grow: 2;
      }

      .badges {
        display: inline-flex;
        gap: 0.125rem;
        align-items: center;
      }

      .badge {
        font-size: 0.75rem;
        border-radius: 4px;
        padding: 4px;
        color: var(--pb-color-inverse);
      }

      .source {
        background-color: #637b8c;
      }
      .register {
        background-color: var(--pb-color-lighter, #35424b);
      }
      .occurrences {
        background-color: var(--pb-color-focus, #f6a623);
      }
    `}_select(e){const t=this._authorities[e.register],i={strings:e.strings,type:e.register,properties:{ref:e.id}};t?t.select(e).then(()=>this.emitTo("pb-authority-select",i)).catch(e=>this.emitTo("pb-authority-error",{status:e.message})):this.emitTo("pb-authority-select",i)}_editEntity(e){const t=this._authorities[e.register];t?t.select(e).then(()=>this.emitTo("pb-authority-edit-entity",{id:e.id,type:e.register})):this.emitTo("pb-authority-edit-entity",{id:e.id,type:e.register})}_queryChanged(e){this._results=[],this.query=e.target.value,this._query()}_query(){this.emitTo("pb-start-update"),this._authorities[this.type].query(this.query).then(e=>{this._occurrences(e.items).then(e=>{this._results=e}),this.emitTo("pb-end-update")})}_addEntity(){this.emitTo("pb-authority-new-entity",{query:this.query,type:this.type})}_occurrences(e){if(this.noOccurrences)return Promise.resolve(e);const t=new FormData;return t.append("register",this.type),e.forEach(e=>{t.append("id",e.id)}),new Promise(i=>{fetch(`${this.getEndpoint()}/api/annotations/occurrences`,{method:"POST",body:t}).then(e=>{if(e.ok)return e.json()}).then(t=>{e.forEach(e=>{t[e.id]?e.occurrences=t[e.id]:e.occurrences=0}),e.sort((e,t)=>{const i=t.occurrences-e.occurrences;return 0===i?"local"===e.provider&&"local"!==t.provider?-1:"local"===t.provider&&"local"!==e.provider?1:this.sortByLabel?e.label.localeCompare(t.label):0:i}),i(e)})})}}customElements.define("pb-authority-lookup",Lp);class Rp extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{data:{type:Object},documents:{type:Array},doc:{type:String},perPage:{type:Number,attribute:"per-page"},pattern:{type:String},first:{type:Number},sort:{type:String},target:{type:String,attribute:"target"}})}constructor(){super(),this.data={documents:[]},this.documents=[],this.first=1,this.doc=null,this.sort=null}static get styles(){return n`
      :host {
        display: block;
        max-width: 100%;
      }
      table {
        width: 100%;
      }
      .docName {
        text-align: left;
      }
      pb-paginate {
        justify-content: center;
        padding-bottom: 3rem;
      }
      th,
      td {
        padding: 0.3rem;
      }
      th:nth-child(1),
      td:nth-child(1) {
        width: 35%;
      }
      th:nth-child(5),
      td:nth-child(5) {
        width: 35%;
      }
      .left,
      .hit-count {
        text-align: right;
      }
      .right {
        text-align: left;
      }
      td.hit {
        text-align: center;
        white-space: nowrap;
      }
      table {
        cell-spacing: 0;
        cell-padding: 0;
      }
      tr {
        cell-spacing: 0;
        cell-padding: 0;
      }
      thead tr th {
        border-bottom: thin solid #999;
      }
      td.hit {
        position: relative;
        padding: 0 1rem;
      }
    `}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-load",e=>{this.first=Number(e.detail.params.start),this.load()}),this.subscribeTo("force-load",e=>{this.load(),this.requestUpdate()}),this.subscribeTo("pb-results-received",e=>{this.data=e.detail.data,this.documents=this.data.documents,this._animate()})}render(){return t`
      <pb-paginate part="paginator" per-page="${this.perPage}" range="5"></pb-paginate>
      <table>
        <thead>
          <tr>
            <th scope="col" class="docName">Doc Id</th>
            <th scope="col" class="left">before</th>
            <th scope="col">hit</th>
            <th scope="col" class="right">after</th>
            <th scope="col" class="hit-count">hits</th>
          </tr>
        </thead>
        <tbody>
          ${this.documents.map(e=>t`
              <tr>
                <td colspan="4" class="docName">
                  <a
                    href="${this.target}/${e.id}.xml?pattern=${this.pattern}&page=${e.matches[0].page[0]}"
                    target="_blank"
                    >${e.id}</a
                  >
                </td>
                <td class="hit-count">
                  <span class="hit-count">${e.hits}</span>
                </td>
              </tr>
              ${e.matches.map(i=>t`
                  <tr>
                    <td class="left" colspan="2">${i.left}</td>
                    <td class="hit">
                      <a
                        href="${this.target}/${e.id}.xml?pattern=${this.pattern}&match=${i.match.words[0]}&page=${i.page[0]}"
                        target="_blank"
                        >${i.match.display}</a
                      >
                    </td>
                    <td class="right" colspan="2">${i.right}</td>
                  </tr>
                `)}
            `)}
        </tbody>
      </table>
    `}async load(){if(!this.getEndpoint())return;if(!this.pattern)return;let e=`${this.getEndpoint()}/api/blacklab/search?pattern=${this.pattern}&start=${this.first}&per-page=${this.perPage}`;this.doc&&(e+=`&doc=${this.doc}`),this.sort&&(e+=`&sort=${this.sort}`),await fetch(e,{method:"GET",mode:"cors",credentials:"same-origin"}).then(e=>e.json()).then(e=>{this.data=e,localStorage.setItem("pb-kwic-results",JSON.stringify(this.data)),this.emitTo("pb-results-received",{count:e.docs?parseInt(e.docs,10):0,start:e.start,params:e.params,data:e},[])}).catch(e=>{alert(`Error retrieving remote content: ${e}`)})}_animate(){il(this.shadowRoot.querySelector("table"),{opacity:[0,1],duration:200,delay:200,ease:"linear"})}}customElements.define("pb-blacklab-results",Rp);class jp extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{current:{type:Number},view:{type:String},pattern:{type:String},match:{type:String},docid:{type:String},hits:{type:Array},kwicData:{type:Object},matchParam:{type:String},pageId:{type:String},perDocument:{type:Number,attribute:"per-document"}})}connectedCallback(){super.connectedCallback(),this.current=1,this.perDocument=100,this.hits=[],this.kwicData={},a("pb-page-ready",()=>{this.viewElement=document.getElementById(this.view),this.viewElement?this.shadow=this.viewElement.shadowRoot:console.error(`${this}: view element with id ${this.view} does not exist`)}),this.subscribeTo("pb-update",()=>{this._loadDocResults()}),this.subscribeTo("pb-refresh",e=>{this.dynMatch=e.detail.match})}render(){return t`
      ${0!==this.hits.length?t` <section class="kwic-display">
            <pb-icon-button
              icon="icons:arrow-back"
              @click="${this._handlePrev}"
              ?disabled="${1===this.current}"
            ></pb-icon-button>
            <span class="current">${this.current}</span> /
            <span class="counter">${this.count}</span>
            <pb-icon-button
              icon="icons:arrow-forward"
              @click="${this._handleNext}"
              ?disabled="${this.current===this.hits.length}"
            ></pb-icon-button>
          </section>`:""}
    `}async _loadDocResults(){if(!this.getEndpoint())return;const e=new URLSearchParams(window.location.search);this.pattern=e.get("pattern"),this.dynMatch?this.matchParam=this.dynMatch:this.matchParam=e.get("match"),this.pageId=e.get("id"),this.docId=e.get("doc");const t=`${this.getEndpoint()}/api/blacklab/doc?pattern=${this.pattern}&doc=${this.docId}&per-document=${this.perDocument}&format=json`;await fetch(t,{method:"GET",mode:"cors",credentials:"same-origin"}).then(e=>e.json()).then(e=>{this.kwicData=e}).then(()=>{this._markAllMatches(),this._showMatch(this.matchParam)}).catch(e=>{console.error("Error retrieving remote content: ",e)})}_markAllMatches(){const e=this.kwicData.documents;if(this.count=this.kwicData.hits,this.hits=e[Object.keys(e)[0]].hits,Array.isArray(this.hits))this.hits.forEach(e=>{const t=e.match.words[0],i=e.match.words[1];this._addMarkerClasses(t,i)});else{const e=this.hits.match.words[0],t=this.hits.match.words[1];this._addMarkerClasses(e,t)}this.requestUpdate()}_showMatch(e){const t=this._getMatchObject(e);this._navigateToMatch(t)}_getMatchObject(e){if(!e)return Array.isArray(this.hits)?this.hits[this.current-1]:this.hits;if(Array.isArray(this.hits)){const t=this.hits.find(t=>t.match.words[0]===e);return this.current=this.hits.findIndex(e=>e===t)+1,t}return this.current=1,this.hits}_navigateToMatch(e){const t=e.page[0],i=e.match.words[0],n=`${this._endpoint}/${this.docId}.xml?doc=${this.docId}&pattern=${this.pattern}&match=${e.match.words[0]}&id=${t}`;this.pageId!==t?this.emitTo("pb-refresh",{id:t,match:i}):(this._highlight(e),window.history.replaceState({},"",n))}_highlight(e){this._resetCurrentMarker();const t=e.match.words[0],i=e.match.words[1],n=this.shadow.querySelector(`#${t}`);n&&n.parentNode.classList.add("kwic-current");const s=this.shadow.querySelector(`#${i}`);s&&s.parentNode.classList.add("kwic-current"),n.scrollIntoView({block:"center",inline:"nearest"})}_resetCurrentMarker(){const e=this.shadow.querySelectorAll(".kwic-current");Array.from(e).forEach(e=>{e.classList.remove("kwic-current")})}_addMarkerClasses(e,t){const i=this.shadow.querySelector(`#${e}`);if(!i)return;i.parentNode.classList.add("kwic-start");const n=this.shadow.getElementById(t);n?n.parentNode.classList.add("kwic-end"):i.classList.add("kwic-end")}_handlePrev(){this.current-=1;const e=this.hits[this.current-1];this._navigateToMatch(e)}_handleNext(){const e=this.hits[this.current];this._navigateToMatch(e),this.current+=1}static get styles(){return n`
      :host {
        display: block;
      }
      .counter,
      .current {
        padding: 0 0.5rem;
      }
    `}}function Np(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,"symbol"==typeof(s=function(e){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key))?s:String(s),n)}var s}function Pp(e,t,i){return t&&Np(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Dp(){return Dp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},Dp.apply(this,arguments)}function Fp(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Bp(e,t)}function Bp(e,t){return Bp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Bp(e,t)}function Mp(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qp(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function zp(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return qp(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?qp(e,t):void 0}}(e))||t){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var Up;customElements.define("pb-blacklab-highlight",jp),function(e){e[e.Init=0]="Init",e[e.Loading=1]="Loading",e[e.Loaded=2]="Loaded",e[e.Rendered=3]="Rendered",e[e.Error=4]="Error"}(Up||(Up={}));var Hp,Vp,Wp,Gp,Yp,Qp,Kp,Jp={},Zp=[],Xp=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function eh(e,t){for(var i in t)e[i]=t[i];return e}function th(e){var t=e.parentNode;t&&t.removeChild(e)}function ih(e,t,i){var n,s,r,o={};for(r in t)"key"==r?n=t[r]:"ref"==r?s=t[r]:o[r]=t[r];if(arguments.length>2&&(o.children=arguments.length>3?Hp.call(arguments,2):i),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===o[r]&&(o[r]=e.defaultProps[r]);return nh(e,o,n,s,null)}function nh(e,t,i,n,s){var r={type:e,props:t,key:i,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++Wp};return null==s&&null!=Vp.vnode&&Vp.vnode(r),r}function sh(e){return e.children}function rh(e,t){this.props=e,this.context=t}function oh(e,t){if(null==t)return e.__?oh(e.__,e.__.__k.indexOf(e)+1):null;for(var i;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e)return i.__e;return"function"==typeof e.type?oh(e):null}function ah(e){var t,i;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e){e.__e=e.__c.base=i.__e;break}return ah(e)}}function lh(e){(!e.__d&&(e.__d=!0)&&Yp.push(e)&&!ch.__r++||Qp!==Vp.debounceRendering)&&((Qp=Vp.debounceRendering)||setTimeout)(ch)}function ch(){for(var e;ch.__r=Yp.length;)e=Yp.sort(function(e,t){return e.__v.__b-t.__v.__b}),Yp=[],e.some(function(e){var t,i,n,s,r,o;e.__d&&(r=(s=(t=e).__v).__e,(o=t.__P)&&(i=[],(n=eh({},s)).__v=s.__v+1,bh(o,s,n,t.__n,void 0!==o.ownerSVGElement,null!=s.__h?[r]:null,i,r??oh(s),s.__h),vh(i,s),s.__e!=r&&ah(s)))})}function dh(e,t,i,n,s,r,o,a,l,c){var d,p,h,u,g,f,m,b=n&&n.__k||Zp,v=b.length;for(i.__k=[],d=0;d<t.length;d++)if(null!=(u=i.__k[d]=null==(u=t[d])||"boolean"==typeof u?null:"string"==typeof u||"number"==typeof u||"bigint"==typeof u?nh(null,u,null,null,u):Array.isArray(u)?nh(sh,{children:u},null,null,null):u.__b>0?nh(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u)){if(u.__=i,u.__b=i.__b+1,null===(h=b[d])||h&&u.key==h.key&&u.type===h.type)b[d]=void 0;else for(p=0;p<v;p++){if((h=b[p])&&u.key==h.key&&u.type===h.type){b[p]=void 0;break}h=null}bh(e,u,h=h||Jp,s,r,o,a,l,c),g=u.__e,(p=u.ref)&&h.ref!=p&&(m||(m=[]),h.ref&&m.push(h.ref,null,u),m.push(p,u.__c||g,u)),null!=g?(null==f&&(f=g),"function"==typeof u.type&&u.__k===h.__k?u.__d=l=ph(u,l,e):l=hh(e,u,h,b,g,l),"function"==typeof i.type&&(i.__d=l)):l&&h.__e==l&&l.parentNode!=e&&(l=oh(h))}for(i.__e=f,d=v;d--;)null!=b[d]&&wh(b[d],b[d]);if(m)for(d=0;d<m.length;d++)_h(m[d],m[++d],m[++d])}function ph(e,t,i){for(var n,s=e.__k,r=0;s&&r<s.length;r++)(n=s[r])&&(n.__=e,t="function"==typeof n.type?ph(n,t,i):hh(i,n,n,s,n.__e,t));return t}function hh(e,t,i,n,s,r){var o,a,l;if(void 0!==t.__d)o=t.__d,t.__d=void 0;else if(null==i||s!=r||null==s.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(s),o=null;else{for(a=r,l=0;(a=a.nextSibling)&&l<n.length;l+=1)if(a==s)break e;e.insertBefore(s,r),o=r}return void 0!==o?o:s.nextSibling}function uh(e,t,i){"-"===t[0]?e.setProperty(t,i):e[t]=null==i?"":"number"!=typeof i||Xp.test(t)?i:i+"px"}function gh(e,t,i,n,s){var r;e:if("style"===t)if("string"==typeof i)e.style.cssText=i;else{if("string"==typeof n&&(e.style.cssText=n=""),n)for(t in n)i&&t in i||uh(e.style,t,"");if(i)for(t in i)n&&i[t]===n[t]||uh(e.style,t,i[t])}else if("o"===t[0]&&"n"===t[1])r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=i,i?n||e.addEventListener(t,r?mh:fh,r):e.removeEventListener(t,r?mh:fh,r);else if("dangerouslySetInnerHTML"!==t){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=i??"";break e}catch(e){}"function"==typeof i||(null==i||!1===i&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,i))}}function fh(e){this.l[e.type+!1](Vp.event?Vp.event(e):e)}function mh(e){this.l[e.type+!0](Vp.event?Vp.event(e):e)}function bh(e,t,i,n,s,r,o,a,l){var c,d,p,h,u,g,f,m,b,v,y,_,w,x,k,A=t.type;if(void 0!==t.constructor)return null;null!=i.__h&&(l=i.__h,a=t.__e=i.__e,t.__h=null,r=[a]),(c=Vp.__b)&&c(t);try{e:if("function"==typeof A){if(m=t.props,b=(c=A.contextType)&&n[c.__c],v=c?b?b.props.value:c.__:n,i.__c?f=(d=t.__c=i.__c).__=d.__E:("prototype"in A&&A.prototype.render?t.__c=d=new A(m,v):(t.__c=d=new rh(m,v),d.constructor=A,d.render=xh),b&&b.sub(d),d.props=m,d.state||(d.state={}),d.context=v,d.__n=n,p=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=A.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=eh({},d.__s)),eh(d.__s,A.getDerivedStateFromProps(m,d.__s))),h=d.props,u=d.state,p)null==A.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==A.getDerivedStateFromProps&&m!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(m,v),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(m,d.__s,v)||t.__v===i.__v){for(d.props=m,d.state=d.__s,t.__v!==i.__v&&(d.__d=!1),d.__v=t,t.__e=i.__e,t.__k=i.__k,t.__k.forEach(function(e){e&&(e.__=t)}),y=0;y<d._sb.length;y++)d.__h.push(d._sb[y]);d._sb=[],d.__h.length&&o.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(m,d.__s,v),null!=d.componentDidUpdate&&d.__h.push(function(){d.componentDidUpdate(h,u,g)})}if(d.context=v,d.props=m,d.__v=t,d.__P=e,_=Vp.__r,w=0,"prototype"in A&&A.prototype.render){for(d.state=d.__s,d.__d=!1,_&&_(t),c=d.render(d.props,d.state,d.context),x=0;x<d._sb.length;x++)d.__h.push(d._sb[x]);d._sb=[]}else do{d.__d=!1,_&&_(t),c=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++w<25);d.state=d.__s,null!=d.getChildContext&&(n=eh(eh({},n),d.getChildContext())),p||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(h,u)),k=null!=c&&c.type===sh&&null==c.key?c.props.children:c,dh(e,Array.isArray(k)?k:[k],t,i,n,s,r,o,a,l),d.base=t.__e,t.__h=null,d.__h.length&&o.push(d),f&&(d.__E=d.__=null),d.__e=!1}else null==r&&t.__v===i.__v?(t.__k=i.__k,t.__e=i.__e):t.__e=yh(i.__e,t,i,n,s,r,o,l);(c=Vp.diffed)&&c(t)}catch(e){t.__v=null,(l||null!=r)&&(t.__e=a,t.__h=!!l,r[r.indexOf(a)]=null),Vp.__e(e,t,i)}}function vh(e,t){Vp.__c&&Vp.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){Vp.__e(e,t.__v)}})}function yh(e,t,i,n,s,r,o,a){var l,c,d,p=i.props,h=t.props,u=t.type,g=0;if("svg"===u&&(s=!0),null!=r)for(;g<r.length;g++)if((l=r[g])&&"setAttribute"in l==!!u&&(u?l.localName===u:3===l.nodeType)){e=l,r[g]=null;break}if(null==e){if(null===u)return document.createTextNode(h);e=s?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,h.is&&h),r=null,a=!1}if(null===u)p===h||a&&e.data===h||(e.data=h);else{if(r=r&&Hp.call(e.childNodes),c=(p=i.props||Jp).dangerouslySetInnerHTML,d=h.dangerouslySetInnerHTML,!a){if(null!=r)for(p={},g=0;g<e.attributes.length;g++)p[e.attributes[g].name]=e.attributes[g].value;(d||c)&&(d&&(c&&d.__html==c.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if(function(e,t,i,n,s){var r;for(r in i)"children"===r||"key"===r||r in t||gh(e,r,null,i[r],n);for(r in t)s&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||i[r]===t[r]||gh(e,r,t[r],i[r],n)}(e,h,p,s,a),d)t.__k=[];else if(g=t.props.children,dh(e,Array.isArray(g)?g:[g],t,i,n,s&&"foreignObject"!==u,r,o,r?r[0]:i.__k&&oh(i,0),a),null!=r)for(g=r.length;g--;)null!=r[g]&&th(r[g]);a||("value"in h&&void 0!==(g=h.value)&&(g!==e.value||"progress"===u&&!g||"option"===u&&g!==p.value)&&gh(e,"value",g,p.value,!1),"checked"in h&&void 0!==(g=h.checked)&&g!==e.checked&&gh(e,"checked",g,p.checked,!1))}return e}function _h(e,t,i){try{"function"==typeof e?e(t):e.current=t}catch(e){Vp.__e(e,i)}}function wh(e,t,i){var n,s;if(Vp.unmount&&Vp.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||_h(n,null,t)),null!=(n=e.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(e){Vp.__e(e,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&wh(n[s],t,i||"function"!=typeof e.type);i||null==e.__e||th(e.__e),e.__=e.__e=e.__d=void 0}function xh(e,t,i){return this.constructor(e,i)}function kh(e,t,i){var n,s,r;Vp.__&&Vp.__(e,t),s=(n=!1)?null:t.__k,r=[],bh(t,e=t.__k=ih(sh,null,[e]),s||Jp,Jp,void 0!==t.ownerSVGElement,s?null:t.firstChild?Hp.call(t.childNodes):null,r,s?s.__e:t.firstChild,n),vh(r,e)}function Ah(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}Hp=Zp.slice,Vp={__e:function(e,t,i,n){for(var s,r,o;t=t.__;)if((s=t.__c)&&!s.__)try{if((r=s.constructor)&&null!=r.getDerivedStateFromError&&(s.setState(r.getDerivedStateFromError(e)),o=s.__d),null!=s.componentDidCatch&&(s.componentDidCatch(e,n||{}),o=s.__d),o)return s.__E=s}catch(t){e=t}throw e}},Wp=0,Gp=function(e){return null!=e&&void 0===e.constructor},rh.prototype.setState=function(e,t){var i;i=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=eh({},this.state),"function"==typeof e&&(e=e(eh({},i),this.props)),e&&eh(i,e),null!=e&&this.__v&&(t&&this._sb.push(t),lh(this))},rh.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),lh(this))},rh.prototype.render=sh,Yp=[],ch.__r=0,Kp=0;var Sh=function(){function e(e){this._id=void 0,this._id=e||Ah()}return Pp(e,[{key:"id",get:function(){return this._id}}]),e}();function $h(e){return ih(e.parentElement||"span",{dangerouslySetInnerHTML:{__html:e.content}})}function Eh(e,t){return ih($h,{content:e,parentElement:t})}var Oh,Ch=function(e){function t(t){var i;return(i=e.call(this)||this).data=void 0,i.update(t),i}Fp(t,e);var i=t.prototype;return i.cast=function(e){return e instanceof HTMLElement?Eh(e.outerHTML):e},i.update=function(e){return this.data=this.cast(e),this},t}(Sh),Th=function(e){function t(t){var i;return(i=e.call(this)||this)._cells=void 0,i.cells=t||[],i}Fp(t,e);var i=t.prototype;return i.cell=function(e){return this._cells[e]},i.toArray=function(){return this.cells.map(function(e){return e.data})},t.fromCells=function(e){return new t(e.map(function(e){return new Ch(e.data)}))},Pp(t,[{key:"cells",get:function(){return this._cells},set:function(e){this._cells=e}},{key:"length",get:function(){return this.cells.length}}]),t}(Sh),Ih=function(e){function t(t){var i;return(i=e.call(this)||this)._rows=void 0,i._length=void 0,i.rows=t instanceof Array?t:t instanceof Th?[t]:[],i}return Fp(t,e),t.prototype.toArray=function(){return this.rows.map(function(e){return e.toArray()})},t.fromRows=function(e){return new t(e.map(function(e){return Th.fromCells(e.cells)}))},t.fromArray=function(e){return new t((e=function(e){return!e[0]||e[0]instanceof Array?e:[e]}(e)).map(function(e){return new Th(e.map(function(e){return new Ch(e)}))}))},Pp(t,[{key:"rows",get:function(){return this._rows},set:function(e){this._rows=e}},{key:"length",get:function(){return this._length||this.rows.length},set:function(e){this._length=e}}]),t}(Sh),Lh=function(){function e(){this.callbacks=void 0}var t=e.prototype;return t.init=function(e){this.callbacks||(this.callbacks={}),e&&!this.callbacks[e]&&(this.callbacks[e]=[])},t.listeners=function(){return this.callbacks},t.on=function(e,t){return this.init(e),this.callbacks[e].push(t),this},t.off=function(e,t){var i=e;return this.init(),this.callbacks[i]&&0!==this.callbacks[i].length?(this.callbacks[i]=this.callbacks[i].filter(function(e){return e!=t}),this):this},t.emit=function(e){var t=arguments,i=e;return this.init(i),this.callbacks[i].length>0&&(this.callbacks[i].forEach(function(e){return e.apply(void 0,[].slice.call(t,1))}),!0)},e}();function Rh(e,t){if(typeof e!=typeof t)return!1;if(null===e&&null===t)return!0;if("object"!=typeof e)return e===t;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!Rh(e[i],t[i]))return!1;return!0}if(e.hasOwnProperty("constructor")&&t.hasOwnProperty("constructor")&&e.hasOwnProperty("props")&&t.hasOwnProperty("props")&&e.hasOwnProperty("key")&&t.hasOwnProperty("key")&&e.hasOwnProperty("ref")&&t.hasOwnProperty("ref")&&e.hasOwnProperty("type")&&t.hasOwnProperty("type"))return Rh(e.props,t.props);var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(var r=0,o=n;r<o.length;r++){var a=o[r];if(!t.hasOwnProperty(a)||!Rh(e[a],t[a]))return!1}return!0}!function(e){e[e.Initiator=0]="Initiator",e[e.ServerFilter=1]="ServerFilter",e[e.ServerSort=2]="ServerSort",e[e.ServerLimit=3]="ServerLimit",e[e.Extractor=4]="Extractor",e[e.Transformer=5]="Transformer",e[e.Filter=6]="Filter",e[e.Sort=7]="Sort",e[e.Limit=8]="Limit"}(Oh||(Oh={}));var jh=function(e){function t(t){var i;return(i=e.call(this)||this).id=void 0,i._props=void 0,i._props={},i.id=Ah(),t&&i.setProps(t),i}Fp(t,e);var i=t.prototype;return i.process=function(){var e=[].slice.call(arguments);this.validateProps instanceof Function&&this.validateProps.apply(this,e),this.emit.apply(this,["beforeProcess"].concat(e));var t=this._process.apply(this,e);return this.emit.apply(this,["afterProcess"].concat(e)),t},i.setProps=function(e){var t=Dp({},this._props,e);return Rh(t,this._props)||(this._props=t,this.emit("propsUpdated",this)),this},Pp(t,[{key:"props",get:function(){return this._props}}]),t}(Lh),Nh=function(e){function t(){return e.apply(this,arguments)||this}return Fp(t,e),t.prototype._process=function(e){return this.props.keyword?(t=String(this.props.keyword).trim(),i=this.props.columns,n=this.props.ignoreHiddenColumns,s=e,r=this.props.selector,t=t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),new Ih(s.rows.filter(function(e,s){return e.cells.some(function(e,o){if(!e)return!1;if(n&&i&&i[o]&&"object"==typeof i[o]&&i[o].hidden)return!1;var a="";if("function"==typeof r)a=r(e.data,s,o);else if("object"==typeof e.data){var l=e.data;l&&l.props&&l.props.content&&(a=l.props.content)}else a=String(e.data);return new RegExp(t,"gi").test(a)})}))):e;var t,i,n,s,r},Pp(t,[{key:"type",get:function(){return Oh.Filter}}]),t}(jh);function Ph(){return""+"gridjs"+[].slice.call(arguments).reduce(function(e,t){return e+"-"+t},"")}function Dh(){return[].slice.call(arguments).map(function(e){return e?e.toString():""}).filter(function(e){return e}).reduce(function(e,t){return(e||"")+" "+t},"").trim()}var Fh,Bh,Mh,qh,zh=function(e){function t(){return e.apply(this,arguments)||this}return Fp(t,e),t.prototype._process=function(e){if(!this.props.keyword)return e;var t={};return this.props.url&&(t.url=this.props.url(e.url,this.props.keyword)),this.props.body&&(t.body=this.props.body(e.body,this.props.keyword)),Dp({},e,t)},Pp(t,[{key:"type",get:function(){return Oh.ServerFilter}}]),t}(jh),Uh=0,Hh=[],Vh=[],Wh=Vp.__b,Gh=Vp.__r,Yh=Vp.diffed,Qh=Vp.__c,Kh=Vp.unmount;function Jh(e,t){Vp.__h&&Vp.__h(Bh,e,Uh||t),Uh=0;var i=Bh.__H||(Bh.__H={__:[],__h:[]});return e>=i.__.length&&i.__.push({__V:Vh}),i.__[e]}function Zh(e){return Uh=1,function(e,t){var i=Jh(Fh++,2);if(i.t=e,!i.__c&&(i.__=[lu(void 0,t),function(e){var t=i.__N?i.__N[0]:i.__[0],n=i.t(t,e);t!==n&&(i.__N=[n,i.__[1]],i.__c.setState({}))}],i.__c=Bh,!Bh.u)){Bh.u=!0;var n=Bh.shouldComponentUpdate;Bh.shouldComponentUpdate=function(e,t,s){if(!i.__c.__H)return!0;var r=i.__c.__H.__.filter(function(e){return e.__c});if(r.every(function(e){return!e.__N}))return!n||n.call(this,e,t,s);var o=!1;return r.forEach(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),!(!o&&i.__c.props===e)&&(!n||n.call(this,e,t,s))}}return i.__N||i.__}(lu,e)}function Xh(e,t){var i=Jh(Fh++,3);!Vp.__s&&au(i.__H,t)&&(i.__=e,i.i=t,Bh.__H.__h.push(i))}function eu(e){return Uh=5,tu(function(){return{current:e}},[])}function tu(e,t){var i=Jh(Fh++,7);return au(i.__H,t)?(i.__V=e(),i.i=t,i.__h=e,i.__V):i.__}function iu(){for(var e;e=Hh.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ru),e.__H.__h.forEach(ou),e.__H.__h=[]}catch(t){e.__H.__h=[],Vp.__e(t,e.__v)}}Vp.__b=function(e){Bh=null,Wh&&Wh(e)},Vp.__r=function(e){Gh&&Gh(e),Fh=0;var t=(Bh=e.__c).__H;t&&(Mh===Bh?(t.__h=[],Bh.__h=[],t.__.forEach(function(e){e.__N&&(e.__=e.__N),e.__V=Vh,e.__N=e.i=void 0})):(t.__h.forEach(ru),t.__h.forEach(ou),t.__h=[])),Mh=Bh},Vp.diffed=function(e){Yh&&Yh(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==Hh.push(t)&&qh===Vp.requestAnimationFrame||((qh=Vp.requestAnimationFrame)||su)(iu)),t.__H.__.forEach(function(e){e.i&&(e.__H=e.i),e.__V!==Vh&&(e.__=e.__V),e.i=void 0,e.__V=Vh})),Mh=Bh=null},Vp.__c=function(e,t){t.some(function(e){try{e.__h.forEach(ru),e.__h=e.__h.filter(function(e){return!e.__||ou(e)})}catch(i){t.some(function(e){e.__h&&(e.__h=[])}),t=[],Vp.__e(i,e.__v)}}),Qh&&Qh(e,t)},Vp.unmount=function(e){Kh&&Kh(e);var t,i=e.__c;i&&i.__H&&(i.__H.__.forEach(function(e){try{ru(e)}catch(e){t=e}}),i.__H=void 0,t&&Vp.__e(t,i.__v))};var nu="function"==typeof requestAnimationFrame;function su(e){var t,i=function(){clearTimeout(n),nu&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(i,100);nu&&(t=requestAnimationFrame(i))}function ru(e){var t=Bh,i=e.__c;"function"==typeof i&&(e.__c=void 0,i()),Bh=t}function ou(e){var t=Bh;e.__c=e.__(),Bh=t}function au(e,t){return!e||e.length!==t.length||t.some(function(t,i){return t!==e[i]})}function lu(e,t){return"function"==typeof t?t(e):t}function cu(){return function(e){var t=Bh.context[e.__c],i=Jh(Fh++,9);return i.c=e,t?(null==i.__&&(i.__=!0,t.sub(Bh)),t.props.value):e.__}(Hu)}var du={search:{placeholder:"Type a keyword..."},sort:{sortAsc:"Sort column ascending",sortDesc:"Sort column descending"},pagination:{previous:"Previous",next:"Next",navigate:function(e,t){return"Page "+e+" of "+t},page:function(e){return"Page "+e},showing:"Showing",of:"of",to:"to",results:"results"},loading:"Loading...",noRecordsFound:"No matching records found",error:"An error happened while fetching the data"},pu=function(){function e(e){this._language=void 0,this._defaultLanguage=void 0,this._language=e,this._defaultLanguage=du}var t=e.prototype;return t.getString=function(e,t){if(!t||!e)return null;var i=e.split("."),n=i[0];if(t[n]){var s=t[n];return"string"==typeof s?function(){return s}:"function"==typeof s?s:this.getString(i.slice(1).join("."),s)}return null},t.translate=function(e){var t;return(t=this.getString(e,this._language)||this.getString(e,this._defaultLanguage))?t.apply(void 0,[].slice.call(arguments,1)):e},e}();function hu(){var e=cu();return function(t){var i;return(i=e.translator).translate.apply(i,[t].concat([].slice.call(arguments,1)))}}var uu=function(e){return function(t){return Dp({},t,{search:{keyword:e}})}};function gu(){return cu().store}function fu(e){var t=gu(),i=Zh(e(t.getState())),n=i[0],s=i[1];return Xh(function(){return t.subscribe(function(){var i=e(t.getState());n!==i&&s(i)})},[]),n}function mu(){var e,t=Zh(void 0),i=t[0],n=t[1],s=cu(),r=s.search,o=hu(),a=gu().dispatch,l=fu(function(e){return e.search});Xh(function(){i&&i.setProps({keyword:null==l?void 0:l.keyword})},[l,i]),Xh(function(){n(r.server?new zh({keyword:r.keyword,url:r.server.url,body:r.server.body}):new Nh({keyword:r.keyword,columns:s.header&&s.header.columns,ignoreHiddenColumns:r.ignoreHiddenColumns||void 0===r.ignoreHiddenColumns,selector:r.selector})),r.keyword&&a(uu(r.keyword))},[r]),Xh(function(){if(i)return s.pipeline.register(i),function(){return s.pipeline.unregister(i)}},[s,i]);var c,d,p,h=function(e,t){return Uh=8,tu(function(){return e},t)}((c=function(e){e.target instanceof HTMLInputElement&&a(uu(e.target.value))},d=i instanceof zh?r.debounceTimeout||250:0,function(){var e=arguments;return new Promise(function(t){p&&clearTimeout(p),p=setTimeout(function(){return t(c.apply(void 0,[].slice.call(e)))},d)})}),[r,i]);return ih("div",{className:Ph(Dh("search",null==(e=s.className)?void 0:e.search))},ih("input",{type:"search",placeholder:o("search.placeholder"),"aria-label":o("search.placeholder"),onInput:h,className:Dh(Ph("input"),Ph("search","input")),defaultValue:(null==l?void 0:l.keyword)||""}))}var bu=function(e){function t(){return e.apply(this,arguments)||this}Fp(t,e);var i=t.prototype;return i.validateProps=function(){if(isNaN(Number(this.props.limit))||isNaN(Number(this.props.page)))throw Error("Invalid parameters passed")},i._process=function(e){var t=this.props.page;return new Ih(e.rows.slice(t*this.props.limit,(t+1)*this.props.limit))},Pp(t,[{key:"type",get:function(){return Oh.Limit}}]),t}(jh),vu=function(e){function t(){return e.apply(this,arguments)||this}return Fp(t,e),t.prototype._process=function(e){var t={};return this.props.url&&(t.url=this.props.url(e.url,this.props.page,this.props.limit)),this.props.body&&(t.body=this.props.body(e.body,this.props.page,this.props.limit)),Dp({},e,t)},Pp(t,[{key:"type",get:function(){return Oh.ServerLimit}}]),t}(jh);function yu(){var e=cu(),t=e.pagination,i=t.server,n=t.summary,s=void 0===n||n,r=t.nextButton,o=void 0===r||r,a=t.prevButton,l=void 0===a||a,c=t.buttonsCount,d=void 0===c?3:c,p=t.limit,h=void 0===p?10:p,u=t.page,g=void 0===u?0:u,f=t.resetPageOnUpdate,m=void 0===f||f,b=eu(null),v=Zh(g),y=v[0],_=v[1],w=Zh(0),x=w[0],k=w[1],A=hu();Xh(function(){return i?(b.current=new vu({limit:h,page:y,url:i.url,body:i.body}),e.pipeline.register(b.current)):(b.current=new bu({limit:h,page:y}),e.pipeline.register(b.current)),b.current instanceof vu?e.pipeline.on("afterProcess",function(e){return k(e.length)}):b.current instanceof bu&&b.current.on("beforeProcess",function(e){return k(e.length)}),e.pipeline.on("updated",S),e.pipeline.on("error",function(){k(0),_(0)}),function(){e.pipeline.unregister(b.current),e.pipeline.off("updated",S)}},[]);var S=function(e){m&&e!==b.current&&(_(0),0!==b.current.props.page&&b.current.setProps({page:0}))},$=function(){return Math.ceil(x/h)},E=function(e){if(e>=$()||e<0||e===y)return null;_(e),b.current.setProps({page:e})};return ih("div",{className:Dh(Ph("pagination"),e.className.pagination)},ih(sh,null,s&&x>0&&ih("div",{role:"status","aria-live":"polite",className:Dh(Ph("summary"),e.className.paginationSummary),title:A("pagination.navigate",y+1,$())},A("pagination.showing")," ",ih("b",null,A(""+(y*h+1)))," ",A("pagination.to")," ",ih("b",null,A(""+Math.min((y+1)*h,x)))," ",A("pagination.of")," ",ih("b",null,A(""+x))," ",A("pagination.results"))),ih("div",{className:Ph("pages")},l&&ih("button",{tabIndex:0,role:"button",disabled:0===y,onClick:function(){return E(y-1)},title:A("pagination.previous"),"aria-label":A("pagination.previous"),className:Dh(e.className.paginationButton,e.className.paginationButtonPrev)},A("pagination.previous")),function(){if(d<=0)return null;var t=Math.min($(),d),i=Math.min(y,Math.floor(t/2));return y+Math.floor(t/2)>=$()&&(i=t-($()-y)),ih(sh,null,$()>t&&y-i>0&&ih(sh,null,ih("button",{tabIndex:0,role:"button",onClick:function(){return E(0)},title:A("pagination.firstPage"),"aria-label":A("pagination.firstPage"),className:e.className.paginationButton},A("1")),ih("button",{tabIndex:-1,className:Dh(Ph("spread"),e.className.paginationButton)},"...")),Array.from(Array(t).keys()).map(function(e){return y+(e-i)}).map(function(t){return ih("button",{tabIndex:0,role:"button",onClick:function(){return E(t)},className:Dh(y===t?Dh(Ph("currentPage"),e.className.paginationButtonCurrent):null,e.className.paginationButton),title:A("pagination.page",t+1),"aria-label":A("pagination.page",t+1)},A(""+(t+1)))}),$()>t&&$()>y+i+1&&ih(sh,null,ih("button",{tabIndex:-1,className:Dh(Ph("spread"),e.className.paginationButton)},"..."),ih("button",{tabIndex:0,role:"button",onClick:function(){return E($()-1)},title:A("pagination.page",$()),"aria-label":A("pagination.page",$()),className:e.className.paginationButton},A(""+$()))))}(),o&&ih("button",{tabIndex:0,role:"button",disabled:$()===y+1||0===$(),onClick:function(){return E(y+1)},title:A("pagination.next"),"aria-label":A("pagination.next"),className:Dh(e.className.paginationButton,e.className.paginationButtonNext)},A("pagination.next"))))}function _u(e,t){return"string"==typeof e?e.indexOf("%")>-1?t/100*parseInt(e,10):parseInt(e,10):e}function wu(e){return e?Math.floor(e)+"px":""}function xu(e){var t=e.tableRef.cloneNode(!0);return t.style.position="absolute",t.style.width="100%",t.style.zIndex="-2147483640",t.style.visibility="hidden",ih("div",{ref:function(e){e&&e.appendChild(t)}})}function ku(e){if(!e)return"";var t=e.split(" ");return 1===t.length&&/([a-z][A-Z])+/g.test(e)?e:t.map(function(e,t){return 0==t?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}).join("")}var Au,Su=new(function(){function e(){}var t=e.prototype;return t.format=function(e,t){return"[Grid.js] ["+t.toUpperCase()+"]: "+e},t.error=function(e,t){void 0===t&&(t=!1);var i=this.format(e,"error");if(t)throw Error(i);console.error(i)},t.warn=function(e){console.warn(this.format(e,"warn"))},t.info=function(e){console.info(this.format(e,"info"))},e}());!function(e){e[e.Header=0]="Header",e[e.Footer=1]="Footer",e[e.Cell=2]="Cell"}(Au||(Au={}));var $u=function(){function e(){this.plugins=void 0,this.plugins=[]}var t=e.prototype;return t.get=function(e){return this.plugins.find(function(t){return t.id===e})},t.add=function(e){return e.id?this.get(e.id)?(Su.error("Duplicate plugin ID: "+e.id),this):(this.plugins.push(e),this):(Su.error("Plugin ID cannot be empty"),this)},t.remove=function(e){var t=this.get(e);return t&&this.plugins.splice(this.plugins.indexOf(t),1),this},t.list=function(e){return(null!=e||null!=e?this.plugins.filter(function(t){return t.position===e}):this.plugins).sort(function(e,t){return e.order&&t.order?e.order-t.order:1})},e}();function Eu(e){var t=this,i=cu();if(e.pluginId){var n=i.plugin.get(e.pluginId);return n?ih(sh,{},ih(n.component,Dp({plugin:n},e.props))):null}return void 0!==e.position?ih(sh,{},i.plugin.list(e.position).map(function(e){return ih(e.component,Dp({plugin:e},t.props.props))})):null}var Ou=function(e){function t(){var t;return(t=e.call(this)||this)._columns=void 0,t._columns=[],t}Fp(t,e);var i=t.prototype;return i.adjustWidth=function(e,i,n){var s=e.container,r=e.autoWidth;if(!s)return this;var o=s.clientWidth,a={};i.current&&r&&(kh(ih(xu,{tableRef:i.current}),n.current),a=function(e){var t=e.querySelector("table");if(!t)return{};var i=t.className,n=t.style.cssText;t.className=i+" "+Ph("shadowTable"),t.style.tableLayout="auto",t.style.width="auto",t.style.padding="0",t.style.margin="0",t.style.border="none",t.style.outline="none";var s=Array.from(t.parentNode.querySelectorAll("thead th")).reduce(function(e,t){var i;return t.style.width=t.clientWidth+"px",Dp(((i={})[t.getAttribute("data-column-id")]={minWidth:t.clientWidth},i),e)},{});return t.className=i,t.style.cssText=n,t.style.tableLayout="auto",Array.from(t.parentNode.querySelectorAll("thead th")).reduce(function(e,t){return e[t.getAttribute("data-column-id")].width=t.clientWidth,e},s)}(n.current));for(var l,c=zp(t.tabularFormat(this.columns).reduce(function(e,t){return e.concat(t)},[]));!(l=c()).done;){var d=l.value;d.columns&&d.columns.length>0||(!d.width&&r?d.id in a&&(d.width=wu(a[d.id].width),d.minWidth=wu(a[d.id].minWidth)):d.width=wu(_u(d.width,o)))}return i.current&&r&&kh(null,n.current),this},i.setSort=function(e,t){for(var i,n=zp(t||this.columns||[]);!(i=n()).done;){var s=i.value;s.columns&&s.columns.length>0?s.sort=void 0:void 0===s.sort&&e?s.sort={}:s.sort?"object"==typeof s.sort&&(s.sort=Dp({},s.sort)):s.sort=void 0,s.columns&&this.setSort(e,s.columns)}},i.setResizable=function(e,t){for(var i,n=zp(t||this.columns||[]);!(i=n()).done;){var s=i.value;void 0===s.resizable&&(s.resizable=e),s.columns&&this.setResizable(e,s.columns)}},i.setID=function(e){for(var t,i=zp(e||this.columns||[]);!(t=i()).done;){var n=t.value;n.id||"string"!=typeof n.name||(n.id=ku(n.name)),n.id||Su.error('Could not find a valid ID for one of the columns. Make sure a valid "id" is set for all columns.'),n.columns&&this.setID(n.columns)}},i.populatePlugins=function(e,t){for(var i,n=zp(t);!(i=n()).done;){var s=i.value;void 0!==s.plugin&&e.add(Dp({id:s.id},s.plugin,{position:Au.Cell}))}},t.fromColumns=function(e){for(var i,n=new t,s=zp(e);!(i=s()).done;){var r=i.value;if("string"==typeof r||Gp(r))n.columns.push({name:r});else if("object"==typeof r){var o=r;o.columns&&(o.columns=t.fromColumns(o.columns).columns),"object"==typeof o.plugin&&void 0===o.data&&(o.data=null),n.columns.push(r)}}return n},t.createFromConfig=function(e){var i=new t;return e.from?i.columns=t.fromHTMLTable(e.from).columns:e.columns?i.columns=t.fromColumns(e.columns).columns:!e.data||"object"!=typeof e.data[0]||e.data[0]instanceof Array||(i.columns=Object.keys(e.data[0]).map(function(e){return{name:e}})),i.columns.length?(i.setID(),i.setSort(e.sort),i.setResizable(e.resizable),i.populatePlugins(e.plugin,i.columns),i):null},t.fromHTMLTable=function(e){for(var i,n=new t,s=zp(e.querySelector("thead").querySelectorAll("th"));!(i=s()).done;){var r=i.value;n.columns.push({name:r.innerHTML,width:r.width})}return n},t.tabularFormat=function(e){var t=[],i=e||[],n=[];if(i&&i.length){t.push(i);for(var s,r=zp(i);!(s=r()).done;){var o=s.value;o.columns&&o.columns.length&&(n=n.concat(o.columns))}n.length&&(t=t.concat(this.tabularFormat(n)))}return t},t.leafColumns=function(e){var t=[],i=e||[];if(i&&i.length)for(var n,s=zp(i);!(n=s()).done;){var r=n.value;r.columns&&0!==r.columns.length||t.push(r),r.columns&&(t=t.concat(this.leafColumns(r.columns)))}return t},t.maximumDepth=function(e){return this.tabularFormat([e]).length-1},Pp(t,[{key:"columns",get:function(){return this._columns},set:function(e){this._columns=e}},{key:"visibleColumns",get:function(){return this._columns.filter(function(e){return!e.hidden})}}]),t}(Sh),Cu=function(){},Tu=function(e){function t(t){var i;return(i=e.call(this)||this).data=void 0,i.set(t),i}Fp(t,e);var i=t.prototype;return i.get=function(){try{return Promise.resolve(this.data()).then(function(e){return{data:e,total:e.length}})}catch(e){return Promise.reject(e)}},i.set=function(e){return e instanceof Array?this.data=function(){return e}:e instanceof Function&&(this.data=e),this},t}(Cu),Iu=function(e){function t(t){var i;return(i=e.call(this)||this).options=void 0,i.options=t,i}Fp(t,e);var i=t.prototype;return i.handler=function(e){return"function"==typeof this.options.handle?this.options.handle(e):e.ok?e.json():(Su.error("Could not fetch data: "+e.status+" - "+e.statusText,!0),null)},i.get=function(e){var t=Dp({},this.options,e);return"function"==typeof t.data?t.data(t):fetch(t.url,t).then(this.handler.bind(this)).then(function(e){return{data:t.then(e),total:"function"==typeof t.total?t.total(e):void 0}})},t}(Cu),Lu=function(){function e(){}return e.createFromConfig=function(e){var t=null;return e.data&&(t=new Tu(e.data)),e.from&&(t=new Tu(this.tableElementToArray(e.from)),e.from.style.display="none"),e.server&&(t=new Iu(e.server)),t||Su.error("Could not determine the storage type",!0),t},e.tableElementToArray=function(e){for(var t,i,n=[],s=zp(e.querySelector("tbody").querySelectorAll("tr"));!(t=s()).done;){for(var r,o=[],a=zp(t.value.querySelectorAll("td"));!(r=a()).done;){var l=r.value;1===l.childNodes.length&&l.childNodes[0].nodeType===Node.TEXT_NODE?o.push((i=l.innerHTML,(new DOMParser).parseFromString(i,"text/html").documentElement.textContent)):o.push(Eh(l.innerHTML))}n.push(o)}return n},e}(),Ru="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function ju(e,t,i){if(!e.s){if(i instanceof Nu){if(!i.s)return void(i.o=ju.bind(null,e,t));1&t&&(t=i.s),i=i.v}if(i&&i.then)return void i.then(ju.bind(null,e,t),ju.bind(null,e,2));e.s=t,e.v=i;var n=e.o;n&&n(e)}}var Nu=function(){function e(){}return e.prototype.then=function(t,i){var n=new e,s=this.s;if(s){var r=1&s?t:i;if(r){try{ju(n,1,r(this.v))}catch(e){ju(n,2,e)}return n}return this}return this.o=function(e){try{var s=e.v;1&e.s?ju(n,1,t?t(s):s):i?ju(n,1,i(s)):ju(n,2,s)}catch(e){ju(n,2,e)}},n},e}();function Pu(e){return e instanceof Nu&&1&e.s}var Du=function(e){function t(t){var i;return(i=e.call(this)||this)._steps=new Map,i.cache=new Map,i.lastProcessorIndexUpdated=-1,t&&t.forEach(function(e){return i.register(e)}),i}Fp(t,e);var i=t.prototype;return i.clearCache=function(){this.cache=new Map,this.lastProcessorIndexUpdated=-1},i.register=function(e,t){if(void 0===t&&(t=null),!e)throw Error("Processor is not defined");if(null===e.type)throw Error("Processor type is not defined");if(this.findProcessorIndexByID(e.id)>-1)throw Error("Processor ID "+e.id+" is already defined");return e.on("propsUpdated",this.processorPropsUpdated.bind(this)),this.addProcessorByPriority(e,t),this.afterRegistered(e),e},i.tryRegister=function(e,t){void 0===t&&(t=null);try{return this.register(e,t)}catch(e){}},i.unregister=function(e){if(e&&-1!==this.findProcessorIndexByID(e.id)){var t=this._steps.get(e.type);t&&t.length&&(this._steps.set(e.type,t.filter(function(t){return t!=e})),this.emit("updated",e))}},i.addProcessorByPriority=function(e,t){var i=this._steps.get(e.type);if(!i){var n=[];this._steps.set(e.type,n),i=n}if(null===t||t<0)i.push(e);else if(i[t]){var s=i.slice(0,t-1),r=i.slice(t+1);this._steps.set(e.type,s.concat(e).concat(r))}else i[t]=e},i.getStepsByType=function(e){return this.steps.filter(function(t){return t.type===e})},i.getSortedProcessorTypes=function(){return Object.keys(Oh).filter(function(e){return!isNaN(Number(e))}).map(function(e){return Number(e)})},i.process=function(e){try{var t=function(e){return i.lastProcessorIndexUpdated=s.length,i.emit("afterProcess",r),r},i=this,n=i.lastProcessorIndexUpdated,s=i.steps,r=e,o=function(e,t){try{var o=function(e,t){if("function"==typeof e[Ru]){var i,n,s,r=e[Ru]();if(function e(o){try{for(;!(i=r.next()).done;)if((o=t(i.value))&&o.then){if(!Pu(o))return void o.then(e,s||(s=ju.bind(null,n=new Nu,2)));o=o.v}n?ju(n,1,o):n=o}catch(e){ju(n||(n=new Nu),2,e)}}(),r.return){var o=function(e){try{i.done||r.return()}catch(e){}return e};if(n&&n.then)return n.then(o,function(e){throw o(e)});o()}return n}if(!("length"in e))throw new TypeError("Object is not iterable");for(var a=[],l=0;l<e.length;l++)a.push(e[l]);return function(e,t){var i,n,s=-1;return function r(o){try{for(;++s<e.length;)if((o=t(s))&&o.then){if(!Pu(o))return void o.then(r,n||(n=ju.bind(null,i=new Nu,2)));o=o.v}i?ju(i,1,o):i=o}catch(e){ju(i||(i=new Nu),2,e)}}(),i}(a,function(e){return t(a[e])})}(s,function(e){var t=i.findProcessorIndexByID(e.id),s=function(){if(t>=n)return Promise.resolve(e.process(r)).then(function(t){i.cache.set(e.id,r=t)});r=i.cache.get(e.id)}();if(s&&s.then)return s.then(function(){})})}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,function(e){throw Su.error(e),i.emit("error",r),e});return Promise.resolve(o&&o.then?o.then(t):t())}catch(e){return Promise.reject(e)}},i.findProcessorIndexByID=function(e){return this.steps.findIndex(function(t){return t.id==e})},i.setLastProcessorIndex=function(e){var t=this.findProcessorIndexByID(e.id);this.lastProcessorIndexUpdated>t&&(this.lastProcessorIndexUpdated=t)},i.processorPropsUpdated=function(e){this.setLastProcessorIndex(e),this.emit("propsUpdated"),this.emit("updated",e)},i.afterRegistered=function(e){this.setLastProcessorIndex(e),this.emit("afterRegister"),this.emit("updated",e)},Pp(t,[{key:"steps",get:function(){for(var e,t=[],i=zp(this.getSortedProcessorTypes());!(e=i()).done;){var n=this._steps.get(e.value);n&&n.length&&(t=t.concat(n))}return t.filter(function(e){return e})}}]),t}(Lh),Fu=function(e){function t(){return e.apply(this,arguments)||this}return Fp(t,e),t.prototype._process=function(e){try{return Promise.resolve(this.props.storage.get(e))}catch(e){return Promise.reject(e)}},Pp(t,[{key:"type",get:function(){return Oh.Extractor}}]),t}(jh),Bu=function(e){function t(){return e.apply(this,arguments)||this}return Fp(t,e),t.prototype._process=function(e){var t=Ih.fromArray(e.data);return t.length=e.total,t},Pp(t,[{key:"type",get:function(){return Oh.Transformer}}]),t}(jh),Mu=function(e){function t(){return e.apply(this,arguments)||this}return Fp(t,e),t.prototype._process=function(){return Object.entries(this.props.serverStorageOptions).filter(function(e){return"function"!=typeof e[1]}).reduce(function(e,t){var i;return Dp({},e,((i={})[t[0]]=t[1],i))},{})},Pp(t,[{key:"type",get:function(){return Oh.Initiator}}]),t}(jh),qu=function(e){function t(){return e.apply(this,arguments)||this}Fp(t,e);var i=t.prototype;return i.castData=function(e){if(!e||!e.length)return[];if(!this.props.header||!this.props.header.columns)return e;var t=Ou.leafColumns(this.props.header.columns);return e[0]instanceof Array?e.map(function(e){var i=0;return t.map(function(t,n){return void 0!==t.data?(i++,"function"==typeof t.data?t.data(e):t.data):e[n-i]})}):"object"!=typeof e[0]||e[0]instanceof Array?[]:e.map(function(e){return t.map(function(t,i){return void 0!==t.data?"function"==typeof t.data?t.data(e):t.data:t.id?e[t.id]:(Su.error("Could not find the correct cell for column at position "+i+".\n                          Make sure either 'id' or 'selector' is defined for all columns."),null)})})},i._process=function(e){return{data:this.castData(e.data),total:e.total}},Pp(t,[{key:"type",get:function(){return Oh.Transformer}}]),t}(jh),zu=function(){function e(){}return e.createFromConfig=function(e){var t=new Du;return e.storage instanceof Iu&&t.register(new Mu({serverStorageOptions:e.server})),t.register(new Fu({storage:e.storage})),t.register(new qu({header:e.header})),t.register(new Bu),t},e}(),Uu=function(e){var t=this;this.state=void 0,this.listeners=[],this.isDispatching=!1,this.getState=function(){return t.state},this.getListeners=function(){return t.listeners},this.dispatch=function(e){if("function"!=typeof e)throw new Error("Reducer is not a function");if(t.isDispatching)throw new Error("Reducers may not dispatch actions");t.isDispatching=!0;var i=t.state;try{t.state=e(t.state)}finally{t.isDispatching=!1}for(var n,s=zp(t.listeners);!(n=s()).done;)(0,n.value)(t.state,i);return t.state},this.subscribe=function(e){if("function"!=typeof e)throw new Error("Listener is not a function");return t.listeners=[].concat(t.listeners,[e]),function(){return t.listeners=t.listeners.filter(function(t){return t!==e})}},this.state=e},Hu=function(e,t){var i={__c:t="__cC"+Kp++,__:null,Consumer:function(e,t){return e.children(t)},Provider:function(e){var i,n;return this.getChildContext||(i=[],(n={})[t]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&i.some(lh)},this.sub=function(e){i.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){i.splice(i.indexOf(e),1),t&&t.call(e)}}),e.children}};return i.Provider.__=i.Consumer.contextType=i}(),Vu=function(){function e(){Object.assign(this,e.defaultConfig())}var t=e.prototype;return t.assign=function(e){return Object.assign(this,e)},t.update=function(t){return t?(this.assign(e.fromPartialConfig(Dp({},this,t))),this):this},e.defaultConfig=function(){return{store:new Uu({status:Up.Init,header:void 0,data:null}),plugin:new $u,tableRef:{current:null},width:"100%",height:"auto",processingThrottleMs:100,autoWidth:!0,style:{},className:{}}},e.fromPartialConfig=function(t){var i=(new e).assign(t);return"boolean"==typeof t.sort&&t.sort&&i.assign({sort:{multiColumn:!0}}),i.assign({header:Ou.createFromConfig(i)}),i.assign({storage:Lu.createFromConfig(i)}),i.assign({pipeline:zu.createFromConfig(i)}),i.assign({translator:new pu(i.language)}),i.plugin=new $u,i.search&&i.plugin.add({id:"search",position:Au.Header,component:mu}),i.pagination&&i.plugin.add({id:"pagination",position:Au.Footer,component:yu}),i.plugins&&i.plugins.forEach(function(e){return i.plugin.add(e)}),i},e}();function Wu(e){var t,i=cu();return ih("td",Dp({role:e.role,colSpan:e.colSpan,"data-column-id":e.column&&e.column.id,className:Dh(Ph("td"),e.className,i.className.td),style:Dp({},e.style,i.style.td),onClick:function(t){e.messageCell||i.eventEmitter.emit("cellClick",t,e.cell,e.column,e.row)}},(t=e.column)?"function"==typeof t.attributes?t.attributes(e.cell.data,e.row,e.column):t.attributes:{}),e.column&&"function"==typeof e.column.formatter?e.column.formatter(e.cell.data,e.row,e.column):e.column&&e.column.plugin?ih(Eu,{pluginId:e.column.id,props:{column:e.column,cell:e.cell,row:e.row}}):e.cell.data)}function Gu(e){var t=cu(),i=fu(function(e){return e.header});return ih("tr",{className:Dh(Ph("tr"),t.className.tr),onClick:function(i){e.messageRow||t.eventEmitter.emit("rowClick",i,e.row)}},e.children?e.children:e.row.cells.map(function(t,n){var s=function(e){if(i){var t=Ou.leafColumns(i.columns);if(t)return t[e]}return null}(n);return s&&s.hidden?null:ih(Wu,{key:t.id,cell:t,row:e.row,column:s})}))}function Yu(e){return ih(Gu,{messageRow:!0},ih(Wu,{role:"alert",colSpan:e.colSpan,messageCell:!0,cell:new Ch(e.message),className:Dh(Ph("message"),e.className?e.className:null)}))}function Qu(){var e=cu(),t=fu(function(e){return e.data}),i=fu(function(e){return e.status}),n=fu(function(e){return e.header}),s=hu(),r=function(){return n?n.visibleColumns.length:0};return ih("tbody",{className:Dh(Ph("tbody"),e.className.tbody)},t&&t.rows.map(function(e){return ih(Gu,{key:e.id,row:e})}),i===Up.Loading&&(!t||0===t.length)&&ih(Yu,{message:s("loading"),colSpan:r(),className:Dh(Ph("loading"),e.className.loading)}),i===Up.Rendered&&t&&0===t.length&&ih(Yu,{message:s("noRecordsFound"),colSpan:r(),className:Dh(Ph("notfound"),e.className.notfound)}),i===Up.Error&&ih(Yu,{message:s("error"),colSpan:r(),className:Dh(Ph("error"),e.className.error)}))}var Ku=function(e){function t(){return e.apply(this,arguments)||this}Fp(t,e);var i=t.prototype;return i.validateProps=function(){for(var e,t=zp(this.props.columns);!(e=t()).done;){var i=e.value;void 0===i.direction&&(i.direction=1),1!==i.direction&&-1!==i.direction&&Su.error("Invalid sort direction "+i.direction)}},i.compare=function(e,t){return e>t?1:e<t?-1:0},i.compareWrapper=function(e,t){for(var i,n=0,s=zp(this.props.columns);!(i=s()).done;){var r=i.value;if(0!==n)break;var o=e.cells[r.index].data,a=t.cells[r.index].data;n|="function"==typeof r.compare?r.compare(o,a)*r.direction:this.compare(o,a)*r.direction}return n},i._process=function(e){var t=[].concat(e.rows);t.sort(this.compareWrapper.bind(this));var i=new Ih(t);return i.length=e.length,i},Pp(t,[{key:"type",get:function(){return Oh.Sort}}]),t}(jh),Ju=function(e,t,i,n){return function(s){var r,o=null!=(r=s.sort)&&r.columns?s.sort.columns.map(function(e){return Dp({},e)}):[],a=o.length,l=o.find(function(t){return t.index===e}),c=!1,d=!1,p=!1,h=!1;if(void 0!==l?i?-1===l.direction?p=!0:h=!0:1===a?h=!0:a>1&&(d=!0,c=!0):0===a?c=!0:a>0&&!i?(c=!0,d=!0):a>0&&i&&(c=!0),d&&(o=[]),c)o.push({index:e,direction:t,compare:n});else if(h){var u=o.indexOf(l);o[u].direction=t}else if(p){var g=o.indexOf(l);o.splice(g,1)}return Dp({},s,{sort:{columns:o}})}},Zu=function(e,t,i){return function(n){var s=(n.sort?[].concat(n.sort.columns):[]).find(function(t){return t.index===e});return Dp({},n,s?Ju(e,1===s.direction?-1:1,t,i)(n):Ju(e,1,t,i)(n))}},Xu=function(e){function t(){return e.apply(this,arguments)||this}return Fp(t,e),t.prototype._process=function(e){var t={};return this.props.url&&(t.url=this.props.url(e.url,this.props.columns)),this.props.body&&(t.body=this.props.body(e.body,this.props.columns)),Dp({},e,t)},Pp(t,[{key:"type",get:function(){return Oh.ServerSort}}]),t}(jh);function eg(e){var t=cu(),i=gu().dispatch,n=hu(),s=Zh(0),r=s[0],o=s[1],a=t.sort,l=fu(function(e){return e.sort}),c="object"==typeof(null==a?void 0:a.server)?Oh.ServerSort:Oh.Sort,d=function(){var e=t.pipeline.getStepsByType(c);if(e.length)return e[0]};return Xh(function(){var e=d()||(c===Oh.ServerSort?new Xu(Dp({columns:l?l.columns:[]},a.server)):new Ku({columns:l?l.columns:[]}));return t.pipeline.tryRegister(e),function(){return t.pipeline.unregister(e)}},[t]),Xh(function(){if(l){var t,i=l.columns.find(function(t){return t.index===e.index});i?(0===r&&(i.direction=null!=(t=e.direction)?t:1),o(i.direction)):o(0)}},[l]),Xh(function(){var e=d();e&&l&&e.setProps({columns:l.columns})},[l]),ih("button",{tabIndex:-1,"aria-label":n("sort.sort"+(1===r?"Desc":"Asc")),title:n("sort.sort"+(1===r?"Desc":"Asc")),className:Dh(Ph("sort"),Ph("sort",function(e){return 1===e?"asc":-1===e?"desc":"neutral"}(r)),t.className.sort),onClick:function(t){t.preventDefault(),t.stopPropagation(),i(Zu(e.index,!0===t.shiftKey&&a.multiColumn,e.compare))}})}var tg=function(e,t){var i;void 0===t&&(t=100);var n=Date.now(),s=function(){n=Date.now(),e.apply(void 0,[].slice.call(arguments))};return function(){var e=[].slice.call(arguments),r=Date.now()-n;r>=t?s.apply(void 0,e):(i&&clearTimeout(i),i=setTimeout(function(){s.apply(void 0,e),i=null},t-r))}};function ig(e){var t,i=function(e){return e instanceof MouseEvent?Math.floor(e.pageX):Math.floor(e.changedTouches[0].pageX)},n=function(n){n.stopPropagation();var o=parseInt(e.thRef.current.style.width,10)-i(n);t=tg(function(e){return s(e,o)},10),document.addEventListener("mouseup",r),document.addEventListener("touchend",r),document.addEventListener("mousemove",t),document.addEventListener("touchmove",t)},s=function(t,n){t.stopPropagation();var s=e.thRef.current;n+i(t)>=parseInt(s.style.minWidth,10)&&(s.style.width=n+i(t)+"px")},r=function e(i){i.stopPropagation(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",t),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",e)};return ih("div",{className:Dh(Ph("th"),Ph("resizable")),onMouseDown:n,onTouchStart:n,onClick:function(e){return e.stopPropagation()}})}function ng(e){var t=cu(),i=eu(null),n=Zh({}),s=n[0],r=n[1],o=gu().dispatch;Xh(function(){if(t.fixedHeader&&i.current){var e=i.current.offsetTop;"number"==typeof e&&r({top:e})}},[i]);var a,l=function(){return null!=e.column.sort},c=function(i){i.stopPropagation(),l()&&o(Zu(e.index,!0===i.shiftKey&&t.sort.multiColumn,e.column.sort.compare))};return ih("th",Dp({ref:i,"data-column-id":e.column&&e.column.id,className:Dh(Ph("th"),l()?Ph("th","sort"):null,t.fixedHeader?Ph("th","fixed"):null,t.className.th),onClick:c,style:Dp({},t.style.th,{minWidth:e.column.minWidth,width:e.column.width},s,e.style),onKeyDown:function(e){l()&&13===e.which&&c(e)},rowSpan:e.rowSpan>1?e.rowSpan:void 0,colSpan:e.colSpan>1?e.colSpan:void 0},(a=e.column)?"function"==typeof a.attributes?a.attributes(null,null,e.column):a.attributes:{},l()?{tabIndex:0}:{}),ih("div",{className:Ph("th","content")},void 0!==e.column.name?e.column.name:void 0!==e.column.plugin?ih(Eu,{pluginId:e.column.plugin.id,props:{column:e.column}}):null),l()&&ih(eg,Dp({index:e.index},e.column.sort)),e.column.resizable&&e.index<t.header.visibleColumns.length-1&&ih(ig,{column:e.column,thRef:i}))}function sg(){var e,t=cu(),i=fu(function(e){return e.header});return i?ih("thead",{key:i.id,className:Dh(Ph("thead"),t.className.thead)},(e=Ou.tabularFormat(i.columns)).map(function(t,n){return function(e,t,n){var s=Ou.leafColumns(i.columns);return ih(Gu,null,e.map(function(e){return e.hidden?null:function(e,t,i,n){var s=function(e,t,i){var n=Ou.maximumDepth(e),s=i-t;return{rowSpan:Math.floor(s-n-n/s),colSpan:e.columns&&e.columns.length||1}}(e,t,n);return ih(ng,{column:e,index:i,colSpan:s.colSpan,rowSpan:s.rowSpan})}(e,t,s.indexOf(e),n)}))}(t,n,e.length)})):null}var rg=function(e){return function(t){return Dp({},t,{header:e})}};function og(){var e=cu(),t=eu(null),i=gu().dispatch;return Xh(function(){t&&i(function(e){return function(t){return Dp({},t,{tableRef:e})}}(t))},[t]),ih("table",{ref:t,role:"grid",className:Dh(Ph("table"),e.className.table),style:Dp({},e.style.table,{height:e.height})},ih(sg,null),ih(Qu,null))}function ag(){var e=Zh(!0),t=e[0],i=e[1],n=eu(null),s=cu();return Xh(function(){0===n.current.children.length&&i(!1)},[n]),t?ih("div",{ref:n,className:Dh(Ph("head"),s.className.header),style:Dp({},s.style.header)},ih(Eu,{position:Au.Header})):null}function lg(){var e=eu(null),t=Zh(!0),i=t[0],n=t[1],s=cu();return Xh(function(){0===e.current.children.length&&n(!1)},[e]),i?ih("div",{ref:e,className:Dh(Ph("footer"),s.className.footer),style:Dp({},s.style.footer)},ih(Eu,{position:Au.Footer})):null}function cg(){var e=cu(),t=gu().dispatch,i=fu(function(e){return e.status}),n=fu(function(e){return e.data}),s=fu(function(e){return e.tableRef}),r={current:null},o=tg(function(){try{t(function(e){return Dp({},e,{status:Up.Loading})});var i=function(i,n){try{var s=Promise.resolve(e.pipeline.process()).then(function(e){t(function(e){return function(t){return e?Dp({},t,{data:e,status:Up.Loaded}):t}}(e)),setTimeout(function(){t(function(e){return e.status===Up.Loaded?Dp({},e,{status:Up.Rendered}):e})},0)})}catch(e){return n(e)}return s&&s.then?s.then(void 0,n):s}(0,function(e){Su.error(e),t(function(e){return Dp({},e,{data:null,status:Up.Error})})});return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},e.processingThrottleMs);return Xh(function(){return t(rg(e.header)),o(),e.pipeline.on("updated",o),function(){return e.pipeline.off("updated",o)}},[]),Xh(function(){e.header&&i===Up.Loaded&&null!=n&&n.length&&t(rg(e.header.adjustWidth(e,s,r)))},[n,e,r]),ih("div",{role:"complementary",className:Dh("gridjs",Ph("container"),i===Up.Loading?Ph("loading"):null,e.className.container),style:Dp({},e.style.container,{width:e.width})},i===Up.Loading&&ih("div",{className:Ph("loading-bar")}),ih(ag,null),ih("div",{className:Ph("wrapper"),style:{height:e.height}},ih(og,null)),ih(lg,null),ih("div",{ref:r,id:"gridjs-temp",className:Ph("temp")}))}var dg=function(e){function t(t){var i;return(i=e.call(this)||this).config=void 0,i.plugin=void 0,i.config=(new Vu).assign({instance:Mp(i),eventEmitter:Mp(i)}).update(t),i.plugin=i.config.plugin,i}Fp(t,e);var i=t.prototype;return i.updateConfig=function(e){return this.config.update(e),this},i.createElement=function(){return ih(Hu.Provider,{value:this.config,children:ih(cg,{})})},i.forceRender=function(){return this.config&&this.config.container||Su.error("Container is empty. Make sure you call render() before forceRender()",!0),this.destroy(),kh(this.createElement(),this.config.container),this},i.destroy=function(){this.config.pipeline.clearCache(),kh(null,this.config.container)},i.render=function(e){return e||Su.error("Container element cannot be null",!0),e.childNodes.length>0?(Su.error("The container element "+e+" is not empty. Make sure the container is empty and call render() again"),this):(this.config.container=e,kh(this.createElement(),e),this)},t}(Lh);class pg extends s{static get properties(){return Object.assign({label:{type:String},property:{type:String},sort:{type:Boolean},width:{type:String}},super.properties)}constructor(){super(),this.label="no-label",this.property=null,this.sort=!1,this.width=null}connectedCallback(){super.connectedCallback()}data(){const e={name:Eh(`<pb-i18n key="${this.label}">${this.label}</pb-i18n>`),sort:{enabled:this.sort},formatter:e=>Eh(e)};return this.property&&(e.id=this.property),this.width&&(e.width=this.width),e}}customElements.define("pb-table-column",pg);class hg extends(o(s)){static get properties(){return Object.assign({source:{type:String},cssPath:{type:String,attribute:"css-path"},resizable:{type:Boolean},subforms:{type:String},perPage:{type:Number,attribute:"per-page"},height:{type:String},search:{type:Boolean},_params:{type:Object},_initialized:{type:Boolean}},super.properties)}constructor(){super(),this.cssPath="../css/gridjs",this._params={},this.resizable=!1,this.search=!1,this.perPage=10,this.height=null,this.fixedHeader=!1,this._initialized=!1}async connectedCallback(){if(super.connectedCallback(),this.subscribeTo("pb-search-resubmit",e=>{this._submit()}),y.subscribe(this,e=>{this._params=e,this._submit()}),this.subscribeTo("pb-i18n-update",e=>{const t=this.language&&this.language!==e.detail.language;this.language=e.detail.language,t&&this._submit()},[]),!this.height){const e=getComputedStyle(this).getPropertyValue("--pb-table-grid-height");this.height=e||"auto"}const e=await b([`${r(this.cssPath)}/mermaid.min.css`]),t=v(this),i=[...this.shadowRoot.adoptedStyleSheets];e&&i.push(e),t&&i.push(t),this.shadowRoot.adoptedStyleSheets=i}firstUpdated(){a("pb-page-ready",e=>{e&&e.language&&(this.language=e.language),this._params=y.state,this._initGrid()}),requestAnimationFrame(()=>this._initGrid())}_initGrid(){if(this._initialized||this.grid)return;const e=this.shadowRoot.getElementById("table");if(!e)return;const t=this.querySelectorAll("pb-table-column"),i=[];t.forEach(e=>i.push(e.data()));const n=this.getEndpoint&&this.getEndpoint()||".",s=this.toAbsoluteURL(this.source,n),r={height:this.height,fixedHeader:!0,columns:i,resizable:this.resizable,server:{url:s,then:e=>e.results,total:e=>e.count},sort:{multiColumn:!1,enabled:!0,server:{url:(e,t)=>{if(!t.length)return e;const n=t[0];return`${e}${e.indexOf("?")>-1?"&":"?"}order=${i[n.index].id}&dir=${1===n.direction?"asc":"desc"}`}}},pagination:{enabled:!0,limit:this.perPage,server:{url:(e,t,i)=>{const n=this.shadowRoot.getElementById("form");n&&Object.assign(this._params,this._serializeSearchForm(n)),this._params=this._paramsFromSubforms(this._params),this._params.limit=i,this._params.start=t*i+1,this.language&&(this._params.language=this.language),y.commit(this,this._params);const s=Object.assign({},this._params);return Object.keys(s).forEach(e=>{null===s[e]&&delete s[e]}),`${e}${e.indexOf("?")>-1?"&":"?"}${new URLSearchParams(s).toString()}`}}}};this.grid=new dg(r),this.grid.on("load",()=>{this.emitTo("pb-results-received",{params:this._params})}),this.grid.render(e),this._initialized=!0}_submit(){this.grid&&this.grid.forceRender()}_handleFormSubmit(e){e.preventDefault(),this._submit()}_handleSearchKey(e){"Enter"===e.key&&(e.preventDefault(),this._submit())}_serializeSearchForm(e){const t={};Array.from(e.elements||[]).filter(e=>e.name&&!e.disabled&&!e.closest("[disabled]")).forEach(e=>{e.name in t||(t[e.name]=null)});return new FormData(e).forEach((e,i)=>{null==t[i]?t[i]=e:Array.isArray(t[i])?t[i].push(e):t[i]=[t[i],e]}),t}_paramsFromSubforms(e){return this.subforms&&document.querySelectorAll(this.subforms).forEach(t=>{t.serializeForm&&Object.assign(e,t.serializeForm())}),e}render(){return t`
      ${this.search?t`
            <form id="form" action="" @submit=${this._handleFormSubmit}>
              <label class="pb-table-grid__field" for="search">
                <span class="pb-table-grid__label">${u("search.search")}</span>
                <div class="pb-table-grid__search">
                  <input
                    id="search"
                    class="pb-table-grid__input"
                    type="search"
                    name="search"
                    .value=${this._params.search||""}
                    placeholder="${u("search.search")}"
                    @keydown=${this._handleSearchKey}
                  />
                  <button
                    class="pb-button pb-button--icon"
                    type="button"
                    aria-label="${u("search.search")}"
                    title="${u("search.search")}"
                    @click=${this._submit}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.71.71l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </label>
            </form>
          `:null}
      <div id="table"></div>
    `}static get styles(){return n`
      :host {
        display: block;
      }
      .pb-table-grid__field {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        margin-bottom: 1rem;
      }

      .pb-table-grid__label {
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: rgba(0, 0, 0, 0.6);
      }

      .pb-table-grid__search {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .pb-table-grid__input {
        flex: 1 1 auto;
        height: var(--pb-input-height, 48px);
        padding: 0.5rem 0.75rem;
        border: 1px solid rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        font: inherit;
        color: inherit;
        background: #fff;
        line-height: 1.4;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }

      .pb-table-grid__input::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }

      .pb-table-grid__input:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.16);
      }
    `}}customElements.define("pb-table-grid",hg);class ug extends(m(o(s))){static get properties(){return Object.assign({url:{type:String},selected:{type:String},subforms:{type:String},_categories:{type:Array}},super.properties)}constructor(){super(),this._categories=[],this._params={},this.selected=null,this.subforms=null,this._initialized=!1}connectedCallback(){super.connectedCallback(),a("pb-page-ready",()=>{this.selected=y.state.category||this.selected,y.subscribe(this,e=>{console.log("<pb-split-list> popstate: %o",e),this.selected=e.category,this.submit(!1)})}),this.subscribeTo("pb-submit",this.load.bind(this))}firstUpdated(){super.firstUpdated(),a("pb-page-ready",()=>{this.load()})}submit(e=!0){this.load(e)}load(e=!0){const t=this._paramsFromSubforms({});this.selected&&(t.category=this.selected),e&&(this._initialized?y.commit(this,t):y.replace(this,t)),this._initialized=!0;const i=new URLSearchParams(t),n=`${this.toAbsoluteURL(this.url)}?${i.toString()}`;console.log(`<pb-split-list> Fetching from URL: ${n}`),this.emitTo("pb-start-update"),fetch(n).then(e=>e.ok?e.json():Promise.reject(e.status)).then(e=>{this._categories=e.categories,this.innerHTML=e.items.join(""),this.emitTo("pb-end-update")}).catch(e=>{console.error(`<pb-split-list> Error caught: ${e}`),this.emitTo("pb-end-update")})}_selectCategory(e,t){e.preventDefault(),this.selected=t,this.load()}_paramsFromSubforms(e){return this.subforms&&document.querySelectorAll(this.subforms).forEach(t=>{t.serializeForm&&Object.assign(e,t.serializeForm())}),e}render(){return t`
      <header>
        ${this._categories.map(e=>t`
              <a
                part="${this.selected===e.category?"active-category":"category"}"
                href="#${e.category}"
                title="${e.count}"
                class="${this.selected===e.category?"active":""}"
                @click="${t=>this._selectCategory(t,e.category)}"
              >
                ${e.label?_(e.label):e.category}
              </a>
            `)}
      </header>
      <div id="items" part="items"><slot></slot></div>
    `}static get styles(){return n`
      :host {
        display: block;
      }

      header {
        display: flex;
        flex-wrap: wrap;
        column-gap: 10px;
        width: 100%;
      }

      #items {
        display: grid;
        grid-template-columns: repeat(var(--pb-categorized-list-columns, 2), auto);
        grid-auto-rows: 1fr;
        column-gap: 10px;
        width: 100%;
      }

      [part='category'],
      #items a {
        text-decoration: none;
        color: var(--pb-link-color);
      }

      [part='active-category'] {
        text-decoration: none;
        color: var(--pb-highlight-color);
      }
    `}}customElements.define("pb-split-list",ug);class gg{constructor(e={},t=60,i=["D","W","M","Y","5Y","10Y"]){this.data={invalid:{},valid:{}},this.maxInterval=t,this.scopes=i,this._validateJsonData(e)}getMinDateStr(){return Object.keys(this.data.valid).sort()[0]}getMaxDateStr(){const e=Object.keys(this.data.valid);return e.sort()[e.length-1]}getMinDate(){return this._dateStrToUTCDate(this.getMinDateStr())}getMaxDate(){return this._dateStrToUTCDate(this.getMaxDateStr())}getEndOfRangeDate(e,t){return this._UTCDateToDateStr(this._increaseDateBy(e,t))}export(e){if(e=e||this._autoAssignScope(),!this.scopes.includes(e))throw new Error(`invalid scope provided, expected: ["10Y", "5Y", "Y", "M", "W", "D"]. Got: "${e}"`);const t={data:[],scope:e,binTitleRotated:this._binTitleRotatedLookup(e)};if(0===Object.keys(this.data.valid).length)return t;const i=this._classify(this.getMinDateStr(),e),n=this._getFirstDay(i);let s=this._dateStrToUTCDate(n);const r=this.getMaxDate();for(;s<=r;){const i=this._UTCDateToDateStr(s),n=this._classify(i,e);t.data.push(this._buildBinObject(i,n,e)),s=this._increaseDateBy(e,s)}if(Object.keys(this.data.valid).sort().forEach(i=>{const n=this._classify(i,e),s=t.data.find(e=>e.category===n);try{const e=this.data.valid[i];"object"==typeof e?(s.value+=e.count||0,e.info&&(s.info=s.info.concat(e.info))):s.value+=this.data.valid[i]||0}catch(e){console.log(e),console.log("currentCategory"),console.log(n)}}),this.data.invalid){let e=0,i=[];Object.values(this.data.invalid).forEach(t=>{"object"==typeof t?(e+=t.count||0,i=i.concat(t.info)):e+=t}),e>0&&t.data.push({tooltip:f("timeline.unknown"),title:f("timeline.unknown"),category:"?",separator:!0,value:e,info:i})}return t}_autoAssignScope(){for(let e=0;e<this.scopes.length;e++)if(this._computeIntervalSize(this.scopes[e])<=this.maxInterval)return this.scopes[e];throw new Error(`Interval too big! Computed: ${this._computeIntervalSize(this.scopes[i])}. Allowed: ${this.maxInterval}. Try to increase maxInterval.`)}_validateJsonData(e){Object.keys(e).sort().forEach(t=>{this._isValidDateStr(t)?this.data.valid[t]=e[t]:this.data.invalid[t]=e[t]})}_binTitleRotatedLookup(e){return{"10Y":!0,"5Y":!0,Y:!0,M:!1,W:!0,D:!0}[e]}_buildBinObject(e,t,i){const n=e.split("-"),s=n[0],r=n[1],o=n[2],a={dateStr:e,category:t,value:0,info:[]};if("10Y"===i)a.tooltip=`${t} - ${Number(t)+9}`,a.selectionStart=`${t}`,a.selectionEnd=`${Number(t)+9}`,Number(t)%100==0&&(a.title=`${t} - ${Number(t)+99}`,a.binTitle=t,a.seperator=!0);else if("5Y"===i)a.tooltip=`${t} - ${Number(t)+4}`,a.selectionStart=`${t}`,a.selectionEnd=`${Number(t)+4}`,Number(t)%50==0&&(a.title=`${t} - ${Number(t)+49}`,a.binTitle=t,a.seperator=!0);else if("Y"===i)a.tooltip=t,a.selectionStart=t,a.selectionEnd=t,Number(t)%10==0&&(a.title=`${t} - ${Number(t)+9}`,a.binTitle=`${t}`,a.seperator=!0);else if("M"===i){const e=Number(r),t=this._monthLookup(e);a.binTitle=t[0],a.tooltip=`${t} ${s}`,a.selectionStart=`${t} ${s}`,a.selectionEnd=`${t} ${s}`,1===e&&(a.title=s,a.seperator=!0)}else if("W"===i){const i=t.split("-")[1];a.tooltip=`${s} ${i}`,a.selectionStart=`${s} ${i}`,a.selectionEnd=`${s} ${i}`;const n=this._dateStrToUTCDate(e),r=this._addDays(n,-7);n.getUTCMonth()!==r.getUTCMonth()&&(a.binTitle=i,a.title=this._monthLookup(n.getUTCMonth()+1)),a.seperator="W1"===i}else{if("D"!==i)throw new Error(`invalid scope provided, expected: ["10Y", "5Y", "Y", "M", "W", "D"]. Got: "${i}"`);a.tooltip=e,a.selectionStart=e,a.selectionEnd=e,1===this._dateStrToUTCDate(e).getUTCDay()&&(a.binTitle=`${Number(o)}.${Number(r)}`,a.title=`${this._classify(e,"W").replace("-"," ")}`,a.seperator=!0)}return a}_classify(e,t){if(!e.match(/^\d{4}-\d{2}-\d{2}$/))throw new Error(`invalid dateStr format, expected "YYYY-MM-DD", got: "${e}".`);if(!e||!t)throw new Error(`both inputs must be provided. Got dateStr=${e}, scope=${t}`);switch(t){case"10Y":case"5Y":const i=Number(t.replace("Y",""));return(Math.floor(Number(e.split("-")[0])/i)*i).toString();case"Y":return e.substr(0,4);case"M":return e.substr(0,7);case"W":const n=this._dateStrToUTCDate(e);return this._UTCDateToWeekFormat(n);case"D":return e}}_getFirstDay(e){if(e.match(/^\d{4}-\d{2}-\d{2}$/))return e;if(e.match(/^\d{4}-\d{2}$/))return`${e}-01`;if(e.match(/^\d{4}$/))return`${e}-01-01`;if(e.match(/^\d{4}-W([1-9]|[1-4][0-9]|5[0-3])$/)){const t=e.split("-"),i=Number(t[0]),n=Number(t[1].replace("W",""));return this._getDateStrOfISOWeek(i,n)}throw new Error("invalid categoryStr")}_dateStrToUTCDate(e){if(!this._isValidDateStr(e))throw new Error(`invalid dateStr, expected "YYYY-MM-DD" with month[1-12] and day[1-31], got: "${e}".`);const t=e.split("-"),i=Number(t[0]),n=Number(t[1]),s=Number(t[2]);return new Date(Date.UTC(i,n-1,s))}_UTCDateToDateStr(e){return e.toISOString().split("T")[0]}_UTCDateToWeekFormat(e){return`${this._getISOWeekYear(e)}-W${this._getISOWeek(e)}`}_getISOWeek(e){const t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);const i=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-i.getTime())/864e5-3+(i.getDay()+6)%7)/7)}_getISOWeekYear(e){const t=new Date(e.getTime());return t.setDate(t.getDate()+3-(t.getDay()+6)%7),t.getFullYear()}_getDateStrOfISOWeek(e,t){const i=new Date(Date.UTC(e,0,1+7*(t-1))),n=i.getUTCDay(),s=i;return n<=4?s.setDate(i.getDate()-i.getUTCDay()+1):s.setDate(i.getDate()+8-i.getUTCDay()),s.toISOString().split("T")[0]}getIntervalSizes(){return{D:this._computeIntervalSize("D"),W:this._computeIntervalSize("W"),M:this._computeIntervalSize("M"),Y:this._computeIntervalSize("Y"),"5Y":this._computeIntervalSize("5Y"),"10Y":this._computeIntervalSize("10Y")}}_computeIntervalSize(e){const t=this.getMaxDateStr();if(!t)return 0;const i=this._dateStrToUTCDate(t),n=this._getFirstDay(this._classify(this.getMinDateStr(),e));let s=this._dateStrToUTCDate(n),r=0;for(;s<=i;)r++,s=this._increaseDateBy(e,s);return r}_increaseDateBy(e,t){switch(e){case"D":return this._addDays(t,1);case"W":return this._addDays(t,7);case"M":return this._addMonths(t,1);case"Y":return this._addYears(t,1);case"5Y":return this._addYears(t,5);case"10Y":return this._addYears(t,10)}}_addDays(e,t){const i=new Date(e.valueOf());return i.setUTCDate(i.getUTCDate()+t),i}_addMonths(e,t){const i=new Date(e.valueOf()),n=i.getUTCDate();return i.setUTCMonth(i.getUTCMonth()+ +t),i.getUTCDate()!=n&&i.setUTCDate(0),i}_addYears(e,t){const i=new Date(e.valueOf());return i.setUTCFullYear(i.getUTCFullYear()+t),i}_isValidDateStr(e){if(!e)return!1;const t=e.split("-");if(3!==t.length)return!1;const i=t[0],n=t[1],s=t[2];return"0000"!==i&&"00"!==s&&"00"!==n&&(!(Number(s)<1||Number(s)>31)&&!(Number(n)<1||Number(n)>12))}_monthLookup(e){if(e>12||e<1)throw new Error(`invalid 'num' provided, expected 1-12. Got: ${e}`);return{1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}[e.toString()]}}class fg{constructor(){}run(e){this.input=e,this.day="??",this.month="??",this.year="????";const t=this.input.match(this._isoMatchRegex()),i=this.input.match(this._customRegex()),n=this.input.match(this._weekMatchRegex()),s=this.input.match(this._yearAndMonthRegex());if(t){const e=t[1].split(/-|\/|\s/);this.year=e[0],this.month=this._setWithLeadingZero(e[1]),this.day=this._setWithLeadingZero(e[2])}else if(s){const e=s[1].split("-");this.year=e[0],this.month=this._setWithLeadingZero(e[1]),this.day="01"}else if(i){const e=i[0].split(/\.|\s|\/|-/);this.day=this._setWithLeadingZero(e[0]),this.month=this._setWithLeadingZero(e[1]),this.year=e[2]}else{if(n){const e=n[0].split(/\.|\s|\/|-/),t=Number(e[0]),i=Number(e[1].replace("W0","").replace("W",""));return this._getDateStrOfISOWeek(t,i)}this._findYear(),this._findMonth(),this._findDay()}return this._buildResult()}_buildResult(){return"????"!=this.year&&"??"===this.month&&(this.month="01"),"??"!=this.month&&"??"===this.day&&(this.day="01"),`${this.year}-${this.month}-${this.day}`}_isoMatchRegex(){return/(?:\s|^)(\d{4}(-|\s|\/)([0][1-9]|[1-9]|10|11|12)(-|\s|\/)([0][1-9]|[1-2][0-9]|3[01]|[1-9]))(?=\s|$|\.)/}_customRegex(){return/\d{1,2}(\.|\s|\/|-)\d{1,2}(\.|\s|\/|-)\d{4}/}_weekMatchRegex(){return/\d{4}(\.|\s|\/|-)W\d{1,2}(?=\s|$|\.)/}_yearAndMonthRegex(){return/(?:\s|^)(\d{4}-([0][1-9]|[1-9]|10|11|12))(?=\s|$)/}_findYear(){const e=/[1-9]{1}[0-9]{3}/,t=this.input.match(e);t&&(this.year=t[0],this._removeMatchFromInput(t))}_findMonth(){this._monthDictionaryValues().forEach(e=>{const t=new RegExp(`(?:\\s|^)(${e})(?=\\s|$|\\.)`,"i"),i=this.input.match(t);if(i)return this.month=this._monthDictionary()[i[1].toLowerCase()],this._removeMatchFromInput(i),this.month})}_findDay(){const e=/(?:\s|^)([0][1-9]|[1-2][0-9]|3[01]|[1-9])(?=\s|$|\.|st|nd|rd|th)/,t=this.input.match(e);t&&(this.day=this._setWithLeadingZero(t[1]))}_setWithLeadingZero(e){return 1==(e=e.toString()).length?`0${e}`:e}_removeMatchFromInput(e){if(e&&e[0]&&e.index){const t=e[0].length,i=this.input.split("");i.splice(e.index,t),this.input=i.join("")}}_monthDictionaryValues(){return Object.keys(this._monthDictionary())}_monthDictionary(){return{jan:"01",januar:"01",feb:"02",februar:"02",mär:"03",märz:"03",apr:"04",april:"04",mai:"05",mai:"05",jun:"06",juni:"06",jul:"07",juli:"07",aug:"08",august:"08",sep:"09",september:"09",okt:"10",oktober:"10",nov:"11",november:"11",dez:"12",dezember:"12",jan:"01",january:"01",feb:"02",february:"02",mar:"03",march:"03",apr:"04",april:"04",may:"05",may:"05",jun:"06",june:"06",jul:"07",july:"07",aug:"08",august:"08",sep:"09",september:"09",oct:"10",october:"10",nov:"11",november:"11",dec:"12",december:"12",janv:"01",janvier:"01",févr:"02","février'":"02",mars:"03",mars:"03",avr:"04",avril:"04",mai:"05",mai:"05",juin:"06",juin:"06",juil:"07",juillet:"07",août:"08",août:"08",sept:"09",septembre:"09",oct:"10",octobre:"10",nov:"11",novembre:"11",déc:"12",décembre:"12",gen:"01",gennaio:"01",feb:"02",febbraio:"02",mar:"03",marzo:"03",apr:"04",aprile:"04",mag:"05",maggio:"05",giu:"06",giugno:"06",lug:"07",luglio:"07",ago:"08",agosto:"08",set:"09",settembre:"09",ott:"10",ottobre:"10",nov:"11",novembre:"11",dic:"12",dicembre:"12"}}_getDateStrOfISOWeek(e,t){const i=new Date(e,0,1+7*(t-1)),n=i.getDay(),s=i;return n<=4?s.setDate(i.getDate()-i.getDay()+1):s.setDate(i.getDate()+8-i.getDay()),s.getFullYear()>e?`${e}-12-31`:s.getFullYear()<e?`${e}-01-01`:this._dateToDateStr(s)}_dateToDateStr(e){const t=new Date(e),i=this._setWithLeadingZero(t.getMonth()+1),n=this._setWithLeadingZero(t.getDate());return`${t.getFullYear()}-${i}-${n}`}}class mg extends(m(o(s))){static get styles(){return n`
      :host {
        display: block;
      }
      .hidden {
        visibility: hidden;
      }
      .draggable {
        cursor: grab;
        user-select: none;
        padding-right: 30px !important;
      }
      .wrapper {
        margin: 0 auto;
        padding: var(--pb-timeline-padding);
        width: auto;
        height: var(--pb-timeline-height, 80px);
        display: flex;
        position: relative;
      }
      .wrapper.empty {
        display: none;
      }

      .label {
        display: flex;
        align-items: center;
      }
      .bin-container {
        cursor: crosshair;
        margin-top: 20px;
        min-width: var(--pb-timeline-min-width, 14px);
        max-width: var(--pb-timeline-max-width, 20px);
        flex-grow: 1;
        flex-basis: 0;
        display: flex;
        align-items: flex-end;
        // justify-content: center;
        position: relative;
      }
      .bin-container.border-left,
      .bin-container.unknown {
        border-left: 1px solid rgba(0, 0, 0, 0.4);
      }
      .bin-container.unknown {
        margin-left: 40px;
      }
      .bin-container:hover .bin {
        background-color: var(--pb-timeline-color-highlight, #3f52b5);
      }
      .bin-container.selected > .bin {
        background-color: var(--pb-timeline-color-highlight, #3f52b5);
      }
      .bin-container.selected p {
        font-weight: bold;
      }
      .bin-container.white {
        background-color: var(--pb-timeline-color-light, white);
      }
      .bin-container.grey {
        background-color: var(--pb-timeline-color-dark, #f1f1f1);
      }
      .bin-container.selected {
        background-color: var(--pb-timeline-color-selected, #e6eaff) !important;
      }
      .bin {
        width: 80%;
        background-color: var(--pb-timeline-color-bin, #ccc);
        border-radius: 2px;
        user-select: none;
      }
      p.bin-title {
        pointer-events: none;
        position: absolute;
        top: 5px;
        z-index: 10;
        margin: 0;
        font-size: var(--pb-timeline-title-font-size, 12px);
        user-select: none;
        white-space: nowrap;
      }
      p.bin-title.months {
        top: -1px;
      }
      p.bin-title.weeks {
        top: 3px;
      }
      p.bin-title.days {
        top: -1px;
      }
      p.bin-title.rotated {
        transform: rotate(-90deg);
      }
      .bins-title {
        cursor: auto;
        font-weight: normal !important;
        margin: 0;
        white-space: nowrap;
        z-index: 200;
        position: absolute;
        left: 0;
        top: -20px;
        font-size: var(--pb-timeline-title-font-size, 12px);
        background-color: var(--pb-timeline-background-color-title, #535353);
        color: var(--pb-timeline-color-title, #ffffff);
        padding: 2px 4px;
        border-radius: 5px;
        height: var(--pb-timeline-title-font-size, 12px);
        line-height: var(--pb-timeline-title-font-size, 12px);
        user-select: none;
      }
      .info {
        display: none;
      }

      /* TOOLTIP */
      .tooltip {
        display: inline-block;
        position: absolute;
        min-width: var(--pb-timeline-tooltip-min-width, 200px);
        max-width: var(--pb-timeline-tooltip-max-width, calc(100vw - 40px));
        font-size: var(--pb-timeline-tooltip-font-size, 11px);
        line-height: 1.25;
        background: var(--pb-timeline-background-color-title, #535353);
        color: var(--pb-timeline-color-title, #ffffff);
        text-align: left;
        border-radius: 6px;
        padding: 5px 10px;
        top: calc(var(--pb-timeline-height, 80px) + 10px);
        left: 0;
        z-index: 1000;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      .tooltip a:link,
      .tooltip a:visited {
        color: var(--pb-timeline-color-title, #ffffff);
      }
      .tooltip ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .tooltip-close {
        position: absolute;
        top: -13px;
        right: -10px;
      }
      .tooltip::after {
        /* small triangle that points to top */
        content: '';
        position: absolute;
        bottom: 100%;
        left: 10px;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent var(--pb-timeline-background-color-title, #535353)
          transparent;
      }
      .tooltip.chevron-precise::after {
        left: var(--chevron-position, 50%);
        right: auto;
        margin-left: -5px;
        margin-right: 0;
      }
      /* pure css close button for tooltip */
      .close {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 50px;
        overflow: hidden;
        transform: scale(0.25);
      }
      .close.rounded.black {
        cursor: pointer;
      }
      .close::before,
      .close::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        top: 50%;
        left: 0;
        margin-top: -1px;
        background: #fff;
      }
      .close::before {
        transform: rotate(45deg);
      }
      .close::after {
        transform: rotate(-45deg);
      }
      .close.thick::before,
      .close.thick::after {
        height: 4px;
        margin-top: -2px;
      }
      .close.black::before,
      .close.black::after {
        height: 8px;
        margin-top: -4px;
      }
      .close.rounded::before,
      .close.rounded::after {
        border-radius: 5px;
      }
      #clear {
        background-image: var(
          --pb-dialog-background-image,
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E")
        );
        background-position: center;
        background-size: auto 1rem;
        background-repeat: no-repeat;
        background-color: transparent;
        border: none;
        display: block;
        height: 1rem;
        width: 1rem;
      }
    `}static get properties(){return Object.assign(Object.assign({},super.properties),{},{startDate:{type:String,reflect:!0,attribute:"start-date"},endDate:{type:String,reflect:!0,attribute:"end-date"},scope:{type:String},scopes:{type:Array},maxInterval:{type:Number,attribute:"max-interval"},url:{type:String},auto:{type:Boolean},resettable:{type:Boolean},_language:{type:String}})}constructor(){super(),this.maxHeight=80,this.multiplier=.75,this.mousedown=!1,this.startDate="",this.endDate="",this.scope="",this.scopes=["D","W","M","Y","5Y","10Y"],this.maxInterval=60,this.url="",this.auto=!1,this.resettable=!1,this._language="en",this._resetSelectionProperty()}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-results-received",()=>{const e=this.shadowRoot.getElementById("loadData"),t=this.toAbsoluteURL(this.url,this.getEndpoint());e.url=t,e.generateRequest()}),this.subscribeTo("pb-i18n-update",e=>{this._language=e.detail.language})}firstUpdated(){this.bins=this.shadowRoot.querySelectorAll(".bin-container"),this.tooltip=this.shadowRoot.querySelector(".tooltip"),document.addEventListener("mouseup",()=>{this._mouseUp()}),document.addEventListener("pb-timeline-daterange-changed",e=>{const{startDateStr:t}=e.detail,{endDateStr:i}=e.detail;if(this._fullRangeSelected(t,i))return console.log("_fullRangeSelected() is true"),void this.resetSelection();this.select(t,i)}),document.addEventListener("pb-timeline-reset-selection",()=>{this.resetSelection(),this._hideTooltip()})}updated(e){e.has("scope")&&this.searchResult&&(this.scopes.includes(this.scope)?this.setData(this.searchResult.export(this.scope)):console.error("unknown scope ",this.scope))}setData(e){this.dataObj=e,this.maxValue=Math.max(...this.dataObj.data.map(e=>e.value)),this.requestUpdate(),this.updateComplete.then(()=>{this.bins=this.shadowRoot.querySelectorAll(".bin-container"),this.resetSelection(),this._resetTooltip()})}get label(){return this.dataObj&&0!==this.dataObj.data.length?1===this.dataObj.data.length?this.dataObj.data[0].category:`${this.dataObj.data[0].selectionStart} – ${this.dataObj.data[this.dataObj.data.length-1].selectionEnd}`:""}getSelectedStartDateStr(){return this.shadowRoot.querySelectorAll(".bin-container.selected")[0].dataset.selectionstart}getSelectedEndDateStr(){const e=this.shadowRoot.querySelectorAll(".bin-container.selected");return e[e.length-1].dataset.selectionend}getSelectedCategories(){const e=this.shadowRoot.querySelectorAll(".bin-container.selected"),t=[];return e.forEach(e=>t.push(e.dataset.category)),t}getSelectedItemCount(){const e=this.shadowRoot.querySelectorAll(".bin-container.selected");let t=0;return e.forEach(e=>{t+=parseInt(e.dataset.value)}),t}resetSelection(){this.bins.forEach(e=>{e.classList.remove("selected")}),this._resetSelectionProperty(),this._hideTooltip()}select(e,t){this.bins.forEach(i=>{i.dataset.isodatestr>=e&&i.dataset.isodatestr<=t?i.classList.add("selected"):i.classList.remove("selected")}),this._displayTooltip(),this._showtooltipSelection()}_fullRangeSelected(e,t){const i=this.bins[0].dataset.isodatestr,n=t===this.bins[this.bins.length-1].dataset.isodatestr;return i&&n}_mouseDown(e){this.resetSelection(),this.mousedown=!0,this.selection.start=this._getMousePosition(e).x,this._applySelectionToBins()}_mouseUp(){if(this.mousedown){this.mousedown=!1;const e=this.getSelectedStartDateStr(),t=this.getSelectedEndDateStr();if(e){const i=(new fg).run(e),n=(new fg).run(t),s=this.getSelectedItemCount();this._dispatchTimelineDaterangeChangedEvent(i,n,this.getSelectedCategories(),s)}}}_mouseMove(e){this.mousedown?(this._brushing(e),this._showtooltipSelection()):void 0===this.selection.start&&this._showtooltip(e)}_mouseenter(){this.dataObj&&this._displayTooltip()}_getMousePosition(e){const t=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect();return{x:e.clientX-t.left+1,y:e.clientY-t.top+1}}_brushing(e){this.selection.end=this._getMousePosition(e).x,this._applySelectionToBins()}_dispatchTimelineDaterangeChangedEvent(e,t,i,n){"????-??-??"===e?this.emitTo("pb-timeline-date-changed",{startDateStr:null,endDateStr:null,categories:["?"],count:n}):e===t?"D"!==this.dataObj.scope?this.emitTo("pb-timeline-daterange-changed",{startDateStr:e,endDateStr:this.searchResult.getEndOfRangeDate(this.dataObj.scope,t),scope:this.dataObj.scope,categories:i,count:n,label:this.label}):this.emitTo("pb-timeline-date-changed",{startDateStr:e,endDateStr:null,scope:this.dataObj.scope,categories:i,count:n,label:this.label}):this.emitTo("pb-timeline-daterange-changed",{startDateStr:e,endDateStr:t,categories:i,scope:this.dataObj.scope,count:n,label:this.label})}_dispatchPbTimelineResetSelectionEvent(){this.emitTo("pb-timeline-reset-selection")}_showtooltip(e){const t=this._getElementInterval(e.currentTarget),i=e.currentTarget.dataset.tooltip,n=this._numberWithCommas(e.currentTarget.dataset.value),s=e.currentTarget.querySelector(".info");this.tooltip.querySelector(".tooltip-text").innerHTML=`<div><strong>${i}</strong>: ${n}</div><ul>${s?s.innerHTML:""}</ul>`,this.tooltip.style.visibility="hidden",this.tooltip.style.display="block";const r=this.tooltip.offsetWidth;this.tooltip.style.visibility="",this.tooltip.style.display="";const o=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect().width;let a;const l=Math.round((t[0]+t[1])/2);this.tooltip.classList.remove("chevron-precise"),l+r/2>o?(a=Math.max(0,t[1]-r+10),this.tooltip.classList.add("right")):l-r/2<0?(a=Math.min(o-r,t[0]-10),this.tooltip.classList.remove("right")):(a=l-r/2,this.tooltip.classList.remove("right")),this.tooltip.style.left=`${a}px`;const c=l,d=a,p=Math.max(10,Math.min(r-10,c-d));this.tooltip.style.setProperty("--chevron-position",`${p}px`),this.tooltip.classList.add("chevron-precise")}_showtooltipSelection(){const e=this._getSelectedBins(),t=[this._getElementInterval(e[0])[0],this._getElementInterval(e[e.length-1])[1]],i=`${e[0].dataset.selectionstart} - ${e[e.length-1].dataset.selectionend}`,n=e.map(e=>Number(e.dataset.value)).reduce((e,t)=>e+t),s=this._numberWithCommas(n);this.tooltip.querySelector(".tooltip-text").innerHTML=`<strong>${i}</strong>: ${s}`,this.tooltip.querySelector(".tooltip-close").classList.remove("hidden"),this.tooltip.classList.add("draggable"),this.tooltip.style.visibility="hidden",this.tooltip.style.display="block";const r=this.tooltip.offsetWidth;this.tooltip.style.visibility="",this.tooltip.style.display="";const o=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect().width,a=Math.round((t[0]+t[1])/2);let l;this.tooltip.classList.remove("chevron-precise"),a+r/2>o?(l=Math.max(0,t[1]-r+10),this.tooltip.classList.add("right")):a-r/2<0?(l=Math.min(o-r,t[0]-10),this.tooltip.classList.remove("right")):(l=a-r/2,this.tooltip.classList.remove("right")),this.tooltip.style.left=`${l}px`;const c=a,d=l,p=Math.max(10,Math.min(r-10,c-d));this.tooltip.style.setProperty("--chevron-position",`${p}px`),this.tooltip.classList.add("chevron-precise")}_resetTooltip(){this._hideTooltip(),this.tooltip.style.left="-1000px",this.tooltip.querySelector(".tooltip-text").innerHTML=""}_hideTooltip(){void 0===this.selection.start&&(this.tooltip.classList.add("hidden"),this.tooltip.classList.remove("draggable"),this.tooltip.querySelector(".tooltip-close").classList.add("hidden"),this.tooltip.classList.remove("chevron-precise"))}_displayTooltip(){this.tooltip.classList.remove("hidden")}_getElementInterval(e){const t=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect(),i=e,n=[i.getBoundingClientRect().x,i.getBoundingClientRect().x+i.getBoundingClientRect().width];return[n[0]-t.left+1,n[1]-t.left+1,t.width/2]}_getSelectionInterval(){return[this.selection.start,this.selection.end].sort((e,t)=>e-t)}_getSelectedBins(){return Array.prototype.slice.call(this.bins).filter(e=>e.classList.contains("selected"))}_resetSelectionProperty(){this.selection={start:void 0,end:void 0}}_applySelectionToBins(){const e=this._getSelectionInterval();this.bins.forEach(t=>{const i=this._getElementInterval(t);this._areOverlapping(i,e)?t.classList.add("selected"):t.classList.remove("selected")})}_numberWithCommas(e){return new Intl.NumberFormat(this._language,{style:"decimal"}).format(e)}_areOverlapping(e,t){return t[0]<e[0]?t[1]>e[0]:t[0]<e[1]}render(){return t`
      <div class="label" part="label">
        <span class="label"><slot name="label"></slot>${this.label}</span>
        ${this.resettable?t`
              <button
                id="clear"
                title="${u("timeline.clear")}"
                @click="${this._dispatchPbTimelineResetSelectionEvent}"
                type="button"
              ></button>
            `:null}
      </div>
      <div
        class="wrapper ${!this.dataObj||this.dataObj.data.length<=1?"empty":""}"
        @mouseenter="${this._mouseenter}"
        @mouseleave="${this._hideTooltip}"
      >
        ${this.dataObj?this.renderBins():""} ${this.renderTooltip()}
        <pb-fetch
          id="loadData"
          verbose
          handle-as="json"
          method="get"
          with-credentials
          @response="${this._handleResponse}"
          url="${this.url}?start=${this.startDate}&end=${this.endDate}"
          ?auto="${this.auto}"
        ></pb-fetch>
      </div>
    `}renderTooltip(){return t`
      <div class="tooltip hidden" part="tooltip">
        <div class="tooltip-text"></div>
        <div class="tooltip-close hidden" @click="${this._dispatchPbTimelineResetSelectionEvent}">
          <span class="close rounded black"></span>
        </div>
      </div>
    `}renderBins(){return t`
      ${this.dataObj.data.map((e,i)=>t`
          <div
            class="bin-container ${e.seperator?"border-left":""}
            ${i%2==0?"grey":"white"} ${"?"===e.category?"unknown":""}"
            data-tooltip="${e.tooltip}"
            data-category="${e.category}"
            data-selectionstart="${e.selectionStart}"
            data-selectionend="${e.selectionEnd}"
            data-isodatestr="${e.dateStr}"
            data-datestr="${e.dateStr}"
            data-value="${e.value}"
            @mousemove="${this._mouseMove}"
            @mousedown="${this._mouseDown}"
          >
            <div
              class="bin"
              style="height: ${e.value/this.maxValue*this.maxHeight*this.multiplier}px"
            ></div>
            <p
              class="bin-title
              ${this.dataObj.binTitleRotated?"rotated":""}
              ${this.scope}"
            >
              ${e.binTitle?e.binTitle:""}
            </p>
            ${e.title?t` <p class="bins-title" part="title">${e.title}</p> `:""}
            ${this.renderInfo(e)}
          </div>
        `)}
    `}renderInfo(e){return e.info&&e.info.length>0&&e.info.length<=10?t`
        <ul class="info">
          ${e.info.map(e=>t`<li>${_(e)}</li>`)}
        </ul>
      `:null}async _handleResponse(){await this.updateComplete;const e=this.shadowRoot.getElementById("loadData").lastResponse;let t={};this.startDate&&this.endDate?Object.keys(e).filter(e=>e>=this.startDate&&e<this.endDate).forEach(i=>{t[i]=e[i]}):t=e,this.searchResult=new gg(t,this.maxInterval,this.scopes),this.setData(this.searchResult.export(this.scope)),this.emitTo("pb-timeline-loaded",{value:!0,label:this.label})}}function bg(e,t){e.split(/\s+/).forEach(e=>{t(e)})}customElements.define("pb-timeline",mg);class vg{constructor(){this._events={}}on(e,t){bg(e,e=>{const i=this._events[e]||[];i.push(t),this._events[e]=i})}off(e,t){var i=arguments.length;0!==i?bg(e,e=>{if(1===i)return void delete this._events[e];const n=this._events[e];void 0!==n&&(n.splice(n.indexOf(t),1),this._events[e]=n)}):this._events={}}trigger(e,...t){var i=this;bg(e,e=>{const n=i._events[e];void 0!==n&&n.forEach(e=>{e.apply(i,t)})})}}function yg(e){return e.plugins={},class extends e{constructor(){super(...arguments),this.plugins={names:[],settings:{},requested:{},loaded:{}}}static define(t,i){e.plugins[t]={name:t,fn:i}}initializePlugins(e){var t,i;const n=this,s=[];if(Array.isArray(e))e.forEach(e=>{"string"==typeof e?s.push(e):(n.plugins.settings[e.name]=e.options,s.push(e.name))});else if(e)for(t in e)e.hasOwnProperty(t)&&(n.plugins.settings[t]=e[t],s.push(t));for(;i=s.shift();)n.require(i)}loadPlugin(t){var i=this,n=i.plugins,s=e.plugins[t];if(!e.plugins.hasOwnProperty(t))throw new Error('Unable to find "'+t+'" plugin');n.requested[t]=!0,n.loaded[t]=s.fn.apply(i,[i.plugins.settings[t]||{}]),n.names.push(t)}require(e){var t=this,i=t.plugins;if(!t.plugins.loaded.hasOwnProperty(e)){if(i.requested[e])throw new Error('Plugin has circular dependency ("'+e+'")');t.loadPlugin(e)}return i.loaded[e]}}}const _g=e=>(e=e.filter(Boolean)).length<2?e[0]||"":1==Sg(e)?"["+e.join("")+"]":"(?:"+e.join("|")+")",wg=e=>{if(!kg(e))return e.join("");let t="",i=0;const n=()=>{i>1&&(t+="{"+i+"}")};return e.forEach((s,r)=>{s!==e[r-1]?(n(),t+=s,i=1):i++}),n(),t},xg=e=>{let t=Array.from(e);return _g(t)},kg=e=>new Set(e).size!==e.length,Ag=e=>(e+"").replace(/([\$\(\)\*\+\.\?\[\]\^\{\|\}\\])/gu,"\\$1"),Sg=e=>e.reduce((e,t)=>Math.max(e,$g(t)),0),$g=e=>Array.from(e).length,Eg=e=>{if(1===e.length)return[[e]];let t=[];const i=e.substring(1);return Eg(i).forEach(function(i){let n=i.slice(0);n[0]=e.charAt(0)+n[0],t.push(n),n=i.slice(0),n.unshift(e.charAt(0)),t.push(n)}),t},Og=[[0,65535]],Cg="[̀-ͯ·ʾʼ]";let Tg,Ig;const Lg=3,Rg={},jg={"/":"⁄∕",0:"߀",a:"ⱥɐɑ",aa:"ꜳ",ae:"æǽǣ",ao:"ꜵ",au:"ꜷ",av:"ꜹꜻ",ay:"ꜽ",b:"ƀɓƃ",c:"ꜿƈȼↄ",d:"đɗɖᴅƌꮷԁɦ",e:"ɛǝᴇɇ",f:"ꝼƒ",g:"ǥɠꞡᵹꝿɢ",h:"ħⱨⱶɥ",i:"ɨı",j:"ɉȷ",k:"ƙⱪꝁꝃꝅꞣ",l:"łƚɫⱡꝉꝇꞁɭ",m:"ɱɯϻ",n:"ꞥƞɲꞑᴎлԉ",o:"øǿɔɵꝋꝍᴑ",oe:"œ",oi:"ƣ",oo:"ꝏ",ou:"ȣ",p:"ƥᵽꝑꝓꝕρ",q:"ꝗꝙɋ",r:"ɍɽꝛꞧꞃ",s:"ßȿꞩꞅʂ",t:"ŧƭʈⱦꞇ",th:"þ",tz:"ꜩ",u:"ʉ",v:"ʋꝟʌ",vy:"ꝡ",w:"ⱳ",y:"ƴɏỿ",z:"ƶȥɀⱬꝣ",hv:"ƕ"};for(let e in jg){let t=jg[e]||"";for(let i=0;i<t.length;i++){let n=t.substring(i,i+1);Rg[n]=e}}const Ng=new RegExp(Object.keys(Rg).join("|")+"|"+Cg,"gu"),Pg=e=>{void 0===Tg&&(Tg=zg(Og))},Dg=(e,t="NFKD")=>e.normalize(t),Fg=e=>Array.from(e).reduce((e,t)=>e+Bg(t),""),Bg=e=>(e=Dg(e).toLowerCase().replace(Ng,e=>Rg[e]||""),Dg(e,"NFC"));function*Mg(e){for(const[t,i]of e)for(let e=t;e<=i;e++){let t=String.fromCharCode(e),i=Fg(t);i!=t.toLowerCase()&&(i.length>Lg||0!=i.length&&(yield{folded:i,composed:t,code_point:e}))}}const qg=e=>{const t={},i=(e,i)=>{const n=t[e]||new Set,s=new RegExp("^"+xg(n)+"$","iu");i.match(s)||(n.add(Ag(i)),t[e]=n)};for(let t of Mg(e))i(t.folded,t.folded),i(t.folded,t.composed);return t},zg=e=>{const t=qg(e),i={};let n=[];for(let e in t){let s=t[e];s&&(i[e]=xg(s)),e.length>1&&n.push(Ag(e))}n.sort((e,t)=>t.length-e.length);const s=_g(n);return Ig=new RegExp("^"+s,"u"),i},Ug=(e,t=1)=>{let i=0;return e=e.map(e=>(Tg[e]&&(i+=e.length),Tg[e]||e)),i>=t?wg(e):""},Hg=(e,t=1)=>(t=Math.max(t,e.length-1),_g(Eg(e).map(e=>Ug(e,t)))),Vg=(e,t=!0)=>{let i=e.length>1?1:0;return _g(e.map(e=>{let n=[];const s=t?e.length():e.length()-1;for(let t=0;t<s;t++)n.push(Hg(e.substrs[t]||"",i));return wg(n)}))},Wg=(e,t)=>{for(const i of t){if(i.start!=e.start||i.end!=e.end)continue;if(i.substrs.join("")!==e.substrs.join(""))continue;let t=e.parts;const n=e=>{for(const i of t){if(i.start===e.start&&i.substr===e.substr)return!1;if(1!=e.length&&1!=i.length){if(e.start<i.start&&e.end>i.start)return!0;if(i.start<e.start&&i.end>e.start)return!0}}return!1};if(!(i.parts.filter(n).length>0))return!0}return!1};class Gg{parts;substrs;start;end;constructor(){this.parts=[],this.substrs=[],this.start=0,this.end=0}add(e){e&&(this.parts.push(e),this.substrs.push(e.substr),this.start=Math.min(e.start,this.start),this.end=Math.max(e.end,this.end))}last(){return this.parts[this.parts.length-1]}length(){return this.parts.length}clone(e,t){let i=new Gg,n=JSON.parse(JSON.stringify(this.parts)),s=n.pop();for(const e of n)i.add(e);let r=t.substr.substring(0,e-s.start),o=r.length;return i.add({start:s.start,end:s.start+o,length:o,substr:r}),i}}const Yg=e=>{Pg(),e=Fg(e);let t="",i=[new Gg];for(let n=0;n<e.length;n++){let s=e.substring(n).match(Ig);const r=e.substring(n,n+1),o=s?s[0]:null;let a=[],l=new Set;for(const e of i){const t=e.last();if(!t||1==t.length||t.end<=n)if(o){const t=o.length;e.add({start:n,end:n+t,length:t,substr:o}),l.add("1")}else e.add({start:n,end:n+1,length:1,substr:r}),l.add("2");else if(o){let i=e.clone(n,t);const s=o.length;i.add({start:n,end:n+s,length:s,substr:o}),a.push(i)}else l.add("3")}if(a.length>0){a=a.sort((e,t)=>e.length()-t.length());for(let e of a)Wg(e,i)||i.push(e)}else if(n>0&&1==l.size&&!l.has("3")){t+=Vg(i,!1);let e=new Gg;const n=i[0];n&&e.add(n.last()),i=[e]}}return t+=Vg(i,!0),t},Qg=(e,t)=>{if(e)return e[t]},Kg=(e,t)=>{if(e){for(var i,n=t.split(".");(i=n.shift())&&(e=e[i]););return e}},Jg=(e,t,i)=>{var n,s;return e?(e+="",null==t.regex||-1===(s=e.search(t.regex))?0:(n=t.string.length/e.length,0===s&&(n+=.5),n*i)):0},Zg=(e,t)=>{var i=e[t];if("function"==typeof i)return i;i&&!Array.isArray(i)&&(e[t]=[i])},Xg=(e,t)=>{if(Array.isArray(e))e.forEach(t);else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},ef=(e,t)=>"number"==typeof e&&"number"==typeof t?e>t?1:e<t?-1:0:(e=Fg(e+"").toLowerCase())>(t=Fg(t+"").toLowerCase())?1:t>e?-1:0;class tf{items;settings;constructor(e,t){this.items=e,this.settings=t||{diacritics:!0}}tokenize(e,t,i){if(!e||!e.length)return[];const n=[],s=e.split(/\s+/);var r;return i&&(r=new RegExp("^("+Object.keys(i).map(Ag).join("|")+"):(.*)$")),s.forEach(e=>{let i,s=null,o=null;r&&(i=e.match(r))&&(s=i[1],e=i[2]),e.length>0&&(o=this.settings.diacritics?Yg(e)||null:Ag(e),o&&t&&(o="\\b"+o)),n.push({string:e,regex:o?new RegExp(o,"iu"):null,field:s})}),n}getScoreFunction(e,t){var i=this.prepareSearch(e,t);return this._getScoreFunction(i)}_getScoreFunction(e){const t=e.tokens,i=t.length;if(!i)return function(){return 0};const n=e.options.fields,s=e.weights,r=n.length,o=e.getAttrFn;if(!r)return function(){return 1};const a=1===r?function(e,t){const i=n[0].field;return Jg(o(t,i),e,s[i]||1)}:function(e,t){var i=0;if(e.field){const n=o(t,e.field);!e.regex&&n?i+=1/r:i+=Jg(n,e,1)}else Xg(s,(n,s)=>{i+=Jg(o(t,s),e,n)});return i/r};return 1===i?function(e){return a(t[0],e)}:"and"===e.options.conjunction?function(e){var n,s=0;for(let i of t){if((n=a(i,e))<=0)return 0;s+=n}return s/i}:function(e){var n=0;return Xg(t,t=>{n+=a(t,e)}),n/i}}getSortFunction(e,t){var i=this.prepareSearch(e,t);return this._getSortFunction(i)}_getSortFunction(e){var t,i=[];const n=this,s=e.options,r=!e.query&&s.sort_empty?s.sort_empty:s.sort;if("function"==typeof r)return r.bind(this);const o=function(t,i){return"$score"===t?i.score:e.getAttrFn(n.items[i.id],t)};if(r)for(let t of r)(e.query||"$score"!==t.field)&&i.push(t);if(e.query){t=!0;for(let e of i)if("$score"===e.field){t=!1;break}t&&i.unshift({field:"$score",direction:"desc"})}else i=i.filter(e=>"$score"!==e.field);return i.length?function(e,t){var n,s;for(let r of i){if(s=r.field,n=("desc"===r.direction?-1:1)*ef(o(s,e),o(s,t)))return n}return 0}:null}prepareSearch(e,t){const i={};var n=Object.assign({},t);if(Zg(n,"sort"),Zg(n,"sort_empty"),n.fields){Zg(n,"fields");const e=[];n.fields.forEach(t=>{"string"==typeof t&&(t={field:t,weight:1}),e.push(t),i[t.field]="weight"in t?t.weight:1}),n.fields=e}return{options:n,query:e.toLowerCase().trim(),tokens:this.tokenize(e,n.respect_word_boundaries,i),total:0,items:[],weights:i,getAttrFn:n.nesting?Kg:Qg}}search(e,t){var i,n,s=this;n=this.prepareSearch(e,t),t=n.options,e=n.query;const r=t.score||s._getScoreFunction(n);e.length?Xg(s.items,(e,s)=>{i=r(e),(!1===t.filter||i>0)&&n.items.push({score:i,id:s})}):Xg(s.items,(e,t)=>{n.items.push({score:1,id:t})});const o=s._getSortFunction(n);return o&&n.items.sort(o),n.total=n.items.length,"number"==typeof t.limit&&(n.items=n.items.slice(0,t.limit)),n}}const nf=e=>null==e?null:sf(e),sf=e=>"boolean"==typeof e?e?"1":"0":e+"",rf=e=>(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),of=(e,t)=>t>0?window.setTimeout(e,t):(e.call(null),null),af=(e,t)=>{var i;return function(n,s){var r=this;i&&(r.loading=Math.max(r.loading-1,0),clearTimeout(i)),i=setTimeout(function(){i=null,r.loadedSearches[n]=!0,e.call(r,n,s)},t)}},lf=(e,t,i)=>{var n,s=e.trigger,r={};for(n of(e.trigger=function(){var i=arguments[0];if(-1===t.indexOf(i))return s.apply(e,arguments);r[i]=arguments},i.apply(e,[]),e.trigger=s,t))n in r&&s.apply(e,r[n])},cf=e=>({start:e.selectionStart||0,length:(e.selectionEnd||0)-(e.selectionStart||0)}),df=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},pf=(e,t,i,n)=>{e.addEventListener(t,i,n)},hf=(e,t)=>!!t&&(!!t[e]&&1===(t.altKey?1:0)+(t.ctrlKey?1:0)+(t.shiftKey?1:0)+(t.metaKey?1:0)),uf=(e,t)=>{const i=e.getAttribute("id");return i||(e.setAttribute("id",t),t)},gf=e=>e.replace(/[\\"']/g,"\\$&"),ff=(e,t)=>{t&&e.append(t)},mf=(e,t)=>{if(Array.isArray(e))e.forEach(t);else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},bf=e=>{if(e.jquery)return e[0];if(e instanceof HTMLElement)return e;if(vf(e)){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},vf=e=>"string"==typeof e&&e.indexOf("<")>-1,yf=e=>e.replace(/['"\\]/g,"\\$&"),_f=(e,t)=>{var i=document.createEvent("HTMLEvents");i.initEvent(t,!0,!1),e.dispatchEvent(i)},wf=(e,t)=>{Object.assign(e.style,t)},xf=(e,...t)=>{var i=Af(t);(e=Sf(e)).map(e=>{i.map(t=>{e.classList.add(t)})})},kf=(e,...t)=>{var i=Af(t);(e=Sf(e)).map(e=>{i.map(t=>{e.classList.remove(t)})})},Af=e=>{var t=[];return mf(e,e=>{"string"==typeof e&&(e=e.trim().split(/[\t\n\f\r\s]/)),Array.isArray(e)&&(t=t.concat(e))}),t.filter(Boolean)},Sf=e=>(Array.isArray(e)||(e=[e]),e),$f=(e,t,i)=>{if(!i||i.contains(e))for(;e&&e.matches;){if(e.matches(t))return e;e=e.parentNode}},Ef=(e,t=0)=>t>0?e[e.length-1]:e[0],Of=e=>0===Object.keys(e).length,Cf=(e,t)=>{if(!e)return-1;t=t||e.nodeName;for(var i=0;e=e.previousElementSibling;)e.matches(t)&&i++;return i},Tf=(e,t)=>{mf(t,(t,i)=>{null==t?e.removeAttribute(i):e.setAttribute(i,""+t)})},If=(e,t)=>{e.parentNode&&e.parentNode.replaceChild(t,e)},Lf=(e,t)=>{if(null===t)return;if("string"==typeof t){if(!t.length)return;t=new RegExp(t,"i")}const i=e=>{var i=e.data.match(t);if(i&&e.data.length>0){var n=document.createElement("span");n.className="highlight";var s=e.splitText(i.index);s.splitText(i[0].length);var r=s.cloneNode(!0);return n.appendChild(r),If(s,n),1}return 0},n=e=>{1!==e.nodeType||!e.childNodes||/(script|style)/i.test(e.tagName)||"highlight"===e.className&&"SPAN"===e.tagName||Array.from(e.childNodes).forEach(e=>{s(e)})},s=e=>3===e.nodeType?i(e):(n(e),0);s(e)},Rf=e=>{var t=e.querySelectorAll("span.highlight");Array.prototype.forEach.call(t,function(e){var t=e.parentNode;t.replaceChild(e.firstChild,e),t.normalize()})},jf=65,Nf=13,Pf=27,Df=37,Ff=38,Bf=39,Mf=40,qf=8,zf=46,Uf=9,Hf="undefined"!=typeof navigator&&/Mac/.test(navigator.userAgent)?"metaKey":"ctrlKey";var Vf={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:null,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,shouldOpen:null,maxOptions:50,maxItems:null,hideSelected:null,duplicates:!1,addPrecedence:!1,selectOnTab:!1,preload:null,allowEmptyOption:!1,refreshThrottle:300,loadThrottle:300,loadingClass:"loading",dataAttr:null,optgroupField:"optgroup",valueField:"value",labelField:"text",disabledField:"disabled",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"ts-wrapper",controlClass:"ts-control",dropdownClass:"ts-dropdown",dropdownContentClass:"ts-dropdown-content",itemClass:"item",optionClass:"option",dropdownParent:null,controlInput:'<input type="text" autocomplete="off" size="1" />',copyClassesToDropdown:!1,placeholder:null,hidePlaceholder:null,shouldLoad:function(e){return e.length>0},render:{}};function Wf(e,t){var i=Object.assign({},Vf,t),n=i.dataAttr,s=i.labelField,r=i.valueField,o=i.disabledField,a=i.optgroupField,l=i.optgroupLabelField,c=i.optgroupValueField,d=e.tagName.toLowerCase(),p=e.getAttribute("placeholder")||e.getAttribute("data-placeholder");if(!p&&!i.allowEmptyOption){let t=e.querySelector('option[value=""]');t&&(p=t.textContent)}var h={placeholder:p,options:[],optgroups:[],items:[],maxItems:null},u=()=>{var t,d=h.options,p={},u=1;let g=0;var f=e=>{var t=Object.assign({},e.dataset),i=n&&t[n];return"string"==typeof i&&i.length&&(t=Object.assign(t,JSON.parse(i))),t},m=(e,t)=>{var n=nf(e.value);if(null!=n&&(n||i.allowEmptyOption)){if(p.hasOwnProperty(n)){if(t){var l=p[n][a];l?Array.isArray(l)?l.push(t):p[n][a]=[l,t]:p[n][a]=t}}else{var c=f(e);c[s]=c[s]||e.textContent,c[r]=c[r]||n,c[o]=c[o]||e.disabled,c[a]=c[a]||t,c.$option=e,c.$order=c.$order||++g,p[n]=c,d.push(c)}e.selected&&h.items.push(n)}},b=e=>{var t,i;(i=f(e))[l]=i[l]||e.getAttribute("label")||"",i[c]=i[c]||u++,i[o]=i[o]||e.disabled,i.$order=i.$order||++g,h.optgroups.push(i),t=i[c],mf(e.children,e=>{m(e,t)})};h.maxItems=e.hasAttribute("multiple")?null:1,mf(e.children,e=>{"optgroup"===(t=e.tagName.toLowerCase())?b(e):"option"===t&&m(e)})},g=()=>{const t=e.getAttribute(n);if(t)h.options=JSON.parse(t),mf(h.options,e=>{h.items.push(e[r])});else{var o=e.value.trim()||"";if(!i.allowEmptyOption&&!o.length)return;const t=o.split(i.delimiter);mf(t,e=>{const t={};t[s]=e,t[r]=e,h.options.push(t)}),h.items=t}};return"select"===d?u():g(),Object.assign({},Vf,h,t)}var Gf=0;class Yf extends(yg(vg)){constructor(e,t){var i;super(),this.order=0,this.isOpen=!1,this.isDisabled=!1,this.isReadOnly=!1,this.isInvalid=!1,this.isValid=!0,this.isLocked=!1,this.isFocused=!1,this.isInputHidden=!1,this.isSetup=!1,this.ignoreFocus=!1,this.ignoreHover=!1,this.hasOptions=!1,this.lastValue="",this.caretPos=0,this.loading=0,this.loadedSearches={},this.activeOption=null,this.activeItems=[],this.optgroups={},this.options={},this.userOptions={},this.items=[],this.refreshTimeout=null,Gf++;var n=bf(e);if(n.tomselect)throw new Error("Tom Select already initialized on this element");n.tomselect=this,i=(window.getComputedStyle&&window.getComputedStyle(n,null)).getPropertyValue("direction");const s=Wf(n,t);this.settings=s,this.input=n,this.tabIndex=n.tabIndex||0,this.is_select_tag="select"===n.tagName.toLowerCase(),this.rtl=/rtl/i.test(i),this.inputId=uf(n,"tomselect-"+Gf),this.isRequired=n.required,this.sifter=new tf(this.options,{diacritics:s.diacritics}),s.mode=s.mode||(1===s.maxItems?"single":"multi"),"boolean"!=typeof s.hideSelected&&(s.hideSelected="multi"===s.mode),"boolean"!=typeof s.hidePlaceholder&&(s.hidePlaceholder="multi"!==s.mode);var r=s.createFilter;"function"!=typeof r&&("string"==typeof r&&(r=new RegExp(r)),r instanceof RegExp?s.createFilter=e=>r.test(e):s.createFilter=e=>this.settings.duplicates||!this.options[e]),this.initializePlugins(s.plugins),this.setupCallbacks(),this.setupTemplates();const o=bf("<div>"),a=bf("<div>"),l=this._render("dropdown"),c=bf('<div role="listbox" tabindex="-1">'),d=this.input.getAttribute("class")||"",p=s.mode;var h;(xf(o,s.wrapperClass,d,p),xf(a,s.controlClass),ff(o,a),xf(l,s.dropdownClass,p),s.copyClassesToDropdown&&xf(l,d),xf(c,s.dropdownContentClass),ff(l,c),bf(s.dropdownParent||o).appendChild(l),vf(s.controlInput))?(h=bf(s.controlInput),mf(["autocorrect","autocapitalize","autocomplete","spellcheck"],e=>{n.getAttribute(e)&&Tf(h,{[e]:n.getAttribute(e)})}),h.tabIndex=-1,a.appendChild(h),this.focus_node=h):s.controlInput?(h=bf(s.controlInput),this.focus_node=h):(h=bf("<input/>"),this.focus_node=a);this.wrapper=o,this.dropdown=l,this.dropdown_content=c,this.control=a,this.control_input=h,this.setup()}setup(){const e=this,t=e.settings,i=e.control_input,n=e.dropdown,s=e.dropdown_content,r=e.wrapper,o=e.control,a=e.input,l=e.focus_node,c={passive:!0},d=e.inputId+"-ts-dropdown";Tf(s,{id:d}),Tf(l,{role:"combobox","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":d});const p=uf(l,e.inputId+"-ts-control"),h="label[for='"+yf(e.inputId)+"']",u=document.querySelector(h),g=e.focus.bind(e);if(u){pf(u,"click",g),Tf(u,{for:p});const t=uf(u,e.inputId+"-ts-label");Tf(l,{"aria-labelledby":t}),Tf(s,{"aria-labelledby":t})}if(r.style.width=a.style.width,e.plugins.names.length){const t="plugin-"+e.plugins.names.join(" plugin-");xf([r,n],t)}(null===t.maxItems||t.maxItems>1)&&e.is_select_tag&&Tf(a,{multiple:"multiple"}),t.placeholder&&Tf(i,{placeholder:t.placeholder}),!t.splitOn&&t.delimiter&&(t.splitOn=new RegExp("\\s*"+Ag(t.delimiter)+"+\\s*")),t.load&&t.loadThrottle&&(t.load=af(t.load,t.loadThrottle)),pf(n,"mousemove",()=>{e.ignoreHover=!1}),pf(n,"mouseenter",t=>{var i=$f(t.target,"[data-selectable]",n);i&&e.onOptionHover(t,i)},{capture:!0}),pf(n,"click",t=>{const i=$f(t.target,"[data-selectable]");i&&(e.onOptionSelect(t,i),df(t,!0))}),pf(o,"click",t=>{var n=$f(t.target,"[data-ts-item]",o);n&&e.onItemSelect(t,n)?df(t,!0):""==i.value&&(e.onClick(),df(t,!0))}),pf(l,"keydown",t=>e.onKeyDown(t)),pf(i,"keypress",t=>e.onKeyPress(t)),pf(i,"input",t=>e.onInput(t)),pf(l,"blur",t=>e.onBlur(t)),pf(l,"focus",t=>e.onFocus(t)),pf(i,"paste",t=>e.onPaste(t));const f=t=>{const s=t.composedPath()[0];if(!r.contains(s)&&!n.contains(s))return e.isFocused&&e.blur(),void e.inputState();s==i&&e.isOpen?t.stopPropagation():df(t,!0)},m=()=>{e.isOpen&&e.positionDropdown()};pf(document,"mousedown",f),pf(window,"scroll",m,c),pf(window,"resize",m,c),this._destroy=()=>{document.removeEventListener("mousedown",f),window.removeEventListener("scroll",m),window.removeEventListener("resize",m),u&&u.removeEventListener("click",g)},this.revertSettings={innerHTML:a.innerHTML,tabIndex:a.tabIndex},a.tabIndex=-1,a.insertAdjacentElement("afterend",e.wrapper),e.sync(!1),t.items=[],delete t.optgroups,delete t.options,pf(a,"invalid",()=>{e.isValid&&(e.isValid=!1,e.isInvalid=!0,e.refreshState())}),e.updateOriginalInput(),e.refreshItems(),e.close(!1),e.inputState(),e.isSetup=!0,a.disabled?e.disable():a.readOnly?e.setReadOnly(!0):e.enable(),e.on("change",this.onChange),xf(a,"tomselected","ts-hidden-accessible"),e.trigger("initialize"),!0===t.preload&&e.preload()}setupOptions(e=[],t=[]){this.addOptions(e),mf(t,e=>{this.registerOptionGroup(e)})}setupTemplates(){var e=this,t=e.settings.labelField,i=e.settings.optgroupLabelField,n={optgroup:e=>{let t=document.createElement("div");return t.className="optgroup",t.appendChild(e.options),t},optgroup_header:(e,t)=>'<div class="optgroup-header">'+t(e[i])+"</div>",option:(e,i)=>"<div>"+i(e[t])+"</div>",item:(e,i)=>"<div>"+i(e[t])+"</div>",option_create:(e,t)=>'<div class="create">Add <strong>'+t(e.input)+"</strong>&hellip;</div>",no_results:()=>'<div class="no-results">No results found</div>',loading:()=>'<div class="spinner"></div>',not_loading:()=>{},dropdown:()=>"<div></div>"};e.settings.render=Object.assign({},n,e.settings.render)}setupCallbacks(){var e,t,i={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",item_select:"onItemSelect",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(e in i)(t=this.settings[i[e]])&&this.on(e,t)}sync(e=!0){const t=this,i=e?Wf(t.input,{delimiter:t.settings.delimiter}):t.settings;t.setupOptions(i.options,i.optgroups),t.setValue(i.items||[],!0),t.lastQuery=null}onClick(){var e=this;if(e.activeItems.length>0)return e.clearActiveItems(),void e.focus();e.isFocused&&e.isOpen?e.blur():e.focus()}onMouseDown(){}onChange(){_f(this.input,"input"),_f(this.input,"change")}onPaste(e){var t=this;t.isInputHidden||t.isLocked?df(e):t.settings.splitOn&&setTimeout(()=>{var e=t.inputValue();if(e.match(t.settings.splitOn)){var i=e.trim().split(t.settings.splitOn);mf(i,e=>{nf(e)&&(this.options[e]?t.addItem(e):t.createItem(e))})}},0)}onKeyPress(e){var t=this;if(!t.isLocked){var i=String.fromCharCode(e.keyCode||e.which);return t.settings.create&&"multi"===t.settings.mode&&i===t.settings.delimiter?(t.createItem(),void df(e)):void 0}df(e)}onKeyDown(e){var t=this;if(t.ignoreHover=!0,t.isLocked)e.keyCode!==Uf&&df(e);else{switch(e.keyCode){case jf:if(hf(Hf,e)&&""==t.control_input.value)return df(e),void t.selectAll();break;case Pf:return t.isOpen&&(df(e,!0),t.close()),void t.clearActiveItems();case Mf:if(!t.isOpen&&t.hasOptions)t.open();else if(t.activeOption){let e=t.getAdjacent(t.activeOption,1);e&&t.setActiveOption(e)}return void df(e);case Ff:if(t.activeOption){let e=t.getAdjacent(t.activeOption,-1);e&&t.setActiveOption(e)}return void df(e);case Nf:return void(t.canSelect(t.activeOption)?(t.onOptionSelect(e,t.activeOption),df(e)):(t.settings.create&&t.createItem()||document.activeElement==t.control_input&&t.isOpen)&&df(e));case Df:return void t.advanceSelection(-1,e);case Bf:return void t.advanceSelection(1,e);case Uf:return void(t.settings.selectOnTab&&(t.canSelect(t.activeOption)&&(t.onOptionSelect(e,t.activeOption),df(e)),t.settings.create&&t.createItem()&&df(e)));case qf:case zf:return void t.deleteSelection(e)}t.isInputHidden&&!hf(Hf,e)&&df(e)}}onInput(e){if(this.isLocked)return;const t=this.inputValue();this.lastValue!==t&&(this.lastValue=t,""!=t?(this.refreshTimeout&&window.clearTimeout(this.refreshTimeout),this.refreshTimeout=of(()=>{this.refreshTimeout=null,this._onInput()},this.settings.refreshThrottle)):this._onInput())}_onInput(){const e=this.lastValue;this.settings.shouldLoad.call(this,e)&&this.load(e),this.refreshOptions(),this.trigger("type",e)}onOptionHover(e,t){this.ignoreHover||this.setActiveOption(t,!1)}onFocus(e){var t=this,i=t.isFocused;if(t.isDisabled||t.isReadOnly)return t.blur(),void df(e);t.ignoreFocus||(t.isFocused=!0,"focus"===t.settings.preload&&t.preload(),i||t.trigger("focus"),t.activeItems.length||(t.inputState(),t.refreshOptions(!!t.settings.openOnFocus)),t.refreshState())}onBlur(e){if(!1!==document.hasFocus()){var t=this;if(t.isFocused){t.isFocused=!1,t.ignoreFocus=!1;var i=()=>{t.close(),t.setActiveItem(),t.setCaret(t.items.length),t.trigger("blur")};t.settings.create&&t.settings.createOnBlur?t.createItem(null,i):i()}}}onOptionSelect(e,t){var i,n=this;t.parentElement&&t.parentElement.matches("[data-disabled]")||(t.classList.contains("create")?n.createItem(null,()=>{n.settings.closeAfterSelect&&n.close()}):void 0!==(i=t.dataset.value)&&(n.lastQuery=null,n.addItem(i),n.settings.closeAfterSelect&&n.close(),!n.settings.hideSelected&&e.type&&/click/.test(e.type)&&n.setActiveOption(t)))}canSelect(e){return!!(this.isOpen&&e&&this.dropdown_content.contains(e))}onItemSelect(e,t){var i=this;return!i.isLocked&&"multi"===i.settings.mode&&(df(e),i.setActiveItem(t,e),!0)}canLoad(e){return!!this.settings.load&&!this.loadedSearches.hasOwnProperty(e)}load(e){const t=this;if(!t.canLoad(e))return;xf(t.wrapper,t.settings.loadingClass),t.loading++;const i=t.loadCallback.bind(t);t.settings.load.call(t,e,i)}loadCallback(e,t){const i=this;i.loading=Math.max(i.loading-1,0),i.lastQuery=null,i.clearActiveOption(),i.setupOptions(e,t),i.refreshOptions(i.isFocused&&!i.isInputHidden),i.loading||kf(i.wrapper,i.settings.loadingClass),i.trigger("load",e,t)}preload(){var e=this.wrapper.classList;e.contains("preloaded")||(e.add("preloaded"),this.load(""))}setTextboxValue(e=""){var t=this.control_input;t.value!==e&&(t.value=e,_f(t,"update"),this.lastValue=e)}getValue(){return this.is_select_tag&&this.input.hasAttribute("multiple")?this.items:this.items.join(this.settings.delimiter)}setValue(e,t){lf(this,t?[]:["change"],()=>{this.clear(t),this.addItems(e,t)})}setMaxItems(e){0===e&&(e=null),this.settings.maxItems=e,this.refreshState()}setActiveItem(e,t){var i,n,s,r,o,a,l=this;if("single"!==l.settings.mode){if(!e)return l.clearActiveItems(),void(l.isFocused&&l.inputState());if("click"===(i=t&&t.type.toLowerCase())&&hf("shiftKey",t)&&l.activeItems.length){for(a=l.getLastActive(),(s=Array.prototype.indexOf.call(l.control.children,a))>(r=Array.prototype.indexOf.call(l.control.children,e))&&(o=s,s=r,r=o),n=s;n<=r;n++)e=l.control.children[n],-1===l.activeItems.indexOf(e)&&l.setActiveItemClass(e);df(t)}else"click"===i&&hf(Hf,t)||"keydown"===i&&hf("shiftKey",t)?e.classList.contains("active")?l.removeActiveItem(e):l.setActiveItemClass(e):(l.clearActiveItems(),l.setActiveItemClass(e));l.inputState(),l.isFocused||l.focus()}}setActiveItemClass(e){const t=this,i=t.control.querySelector(".last-active");i&&kf(i,"last-active"),xf(e,"active last-active"),t.trigger("item_select",e),-1==t.activeItems.indexOf(e)&&t.activeItems.push(e)}removeActiveItem(e){var t=this.activeItems.indexOf(e);this.activeItems.splice(t,1),kf(e,"active")}clearActiveItems(){kf(this.activeItems,"active"),this.activeItems=[]}setActiveOption(e,t=!0){e!==this.activeOption&&(this.clearActiveOption(),e&&(this.activeOption=e,Tf(this.focus_node,{"aria-activedescendant":e.getAttribute("id")}),Tf(e,{"aria-selected":"true"}),xf(e,"active"),t&&this.scrollToOption(e)))}scrollToOption(e,t){if(!e)return;const i=this.dropdown_content,n=i.clientHeight,s=i.scrollTop||0,r=e.offsetHeight,o=e.getBoundingClientRect().top-i.getBoundingClientRect().top+s;o+r>n+s?this.scroll(o-n+r,t):o<s&&this.scroll(o,t)}scroll(e,t){const i=this.dropdown_content;t&&(i.style.scrollBehavior=t),i.scrollTop=e,i.style.scrollBehavior=""}clearActiveOption(){this.activeOption&&(kf(this.activeOption,"active"),Tf(this.activeOption,{"aria-selected":null})),this.activeOption=null,Tf(this.focus_node,{"aria-activedescendant":null})}selectAll(){const e=this;if("single"===e.settings.mode)return;const t=e.controlChildren();t.length&&(e.inputState(),e.close(),e.activeItems=t,mf(t,t=>{e.setActiveItemClass(t)}))}inputState(){var e=this;e.control.contains(e.control_input)&&(Tf(e.control_input,{placeholder:e.settings.placeholder}),e.activeItems.length>0||!e.isFocused&&e.settings.hidePlaceholder&&e.items.length>0?(e.setTextboxValue(),e.isInputHidden=!0):(e.settings.hidePlaceholder&&e.items.length>0&&Tf(e.control_input,{placeholder:""}),e.isInputHidden=!1),e.wrapper.classList.toggle("input-hidden",e.isInputHidden))}inputValue(){return this.control_input.value.trim()}focus(){var e=this;e.isDisabled||e.isReadOnly||(e.ignoreFocus=!0,e.control_input.offsetWidth?e.control_input.focus():e.focus_node.focus(),setTimeout(()=>{e.ignoreFocus=!1,e.onFocus()},0))}blur(){this.focus_node.blur(),this.onBlur()}getScoreFunction(e){return this.sifter.getScoreFunction(e,this.getSearchOptions())}getSearchOptions(){var e=this.settings,t=e.sortField;return"string"==typeof e.sortField&&(t=[{field:e.sortField}]),{fields:e.searchField,conjunction:e.searchConjunction,sort:t,nesting:e.nesting}}search(e){var t,i,n=this,s=this.getSearchOptions();if(n.settings.score&&"function"!=typeof(i=n.settings.score.call(n,e)))throw new Error('Tom Select "score" setting must be a function that returns a function');return e!==n.lastQuery?(n.lastQuery=e,t=n.sifter.search(e,Object.assign(s,{score:i})),n.currentResults=t):t=Object.assign({},n.currentResults),n.settings.hideSelected&&(t.items=t.items.filter(e=>{let t=nf(e.id);return!(t&&-1!==n.items.indexOf(t))})),t}refreshOptions(e=!0){var t,i,n,s,r,o,a,l,c,d;const p={},h=[];var u=this,g=u.inputValue();const f=g===u.lastQuery||""==g&&null==u.lastQuery;var m=u.search(g),b=null,v=u.settings.shouldOpen||!1,y=u.dropdown_content;f&&(b=u.activeOption)&&(c=b.closest("[data-group]")),s=m.items.length,"number"==typeof u.settings.maxOptions&&(s=Math.min(s,u.settings.maxOptions)),s>0&&(v=!0);const _=(e,t)=>{let i=p[e];if(void 0!==i){let e=h[i];if(void 0!==e)return[i,e.fragment]}let n=document.createDocumentFragment();return i=h.length,h.push({fragment:n,order:t,optgroup:e}),[i,n]};for(t=0;t<s;t++){let e=m.items[t];if(!e)continue;let s=e.id,a=u.options[s];if(void 0===a)continue;let l=sf(s),d=u.getOption(l,!0);for(u.settings.hideSelected||d.classList.toggle("selected",u.items.includes(l)),r=a[u.settings.optgroupField]||"",i=0,n=(o=Array.isArray(r)?r:[r])&&o.length;i<n;i++){r=o[i];let e=a.$order,t=u.optgroups[r];void 0===t?r="":e=t.$order;const[n,l]=_(r,e);i>0&&(d=d.cloneNode(!0),Tf(d,{id:a.$id+"-clone-"+i,"aria-selected":null}),d.classList.add("ts-cloned"),kf(d,"active"),u.activeOption&&u.activeOption.dataset.value==s&&c&&c.dataset.group===r.toString()&&(b=d)),l.appendChild(d),""!=r&&(p[r]=n)}}u.settings.lockOptgroupOrder&&h.sort((e,t)=>e.order-t.order),a=document.createDocumentFragment(),mf(h,e=>{let t=e.fragment,i=e.optgroup;if(!t||!t.children.length)return;let n=u.optgroups[i];if(void 0!==n){let e=document.createDocumentFragment(),i=u.render("optgroup_header",n);ff(e,i),ff(e,t);let s=u.render("optgroup",{group:n,options:e});ff(a,s)}else ff(a,t)}),y.innerHTML="",ff(y,a),u.settings.highlight&&(Rf(y),m.query.length&&m.tokens.length&&mf(m.tokens,e=>{Lf(y,e.regex)}));var w=e=>{let t=u.render(e,{input:g});return t&&(v=!0,y.insertBefore(t,y.firstChild)),t};if(u.loading?w("loading"):u.settings.shouldLoad.call(u,g)?0===m.items.length&&w("no_results"):w("not_loading"),(l=u.canCreate(g))&&(d=w("option_create")),u.hasOptions=m.items.length>0||l,v){if(m.items.length>0){if(b||"single"!==u.settings.mode||null==u.items[0]||(b=u.getOption(u.items[0])),!y.contains(b)){let e=0;d&&!u.settings.addPrecedence&&(e=1),b=u.selectable()[e]}}else d&&(b=d);e&&!u.isOpen&&(u.open(),u.scrollToOption(b,"auto")),u.setActiveOption(b)}else u.clearActiveOption(),e&&u.isOpen&&u.close(!1)}selectable(){return this.dropdown_content.querySelectorAll("[data-selectable]")}addOption(e,t=!1){const i=this;if(Array.isArray(e))return i.addOptions(e,t),!1;const n=nf(e[i.settings.valueField]);return null!==n&&!i.options.hasOwnProperty(n)&&(e.$order=e.$order||++i.order,e.$id=i.inputId+"-opt-"+e.$order,i.options[n]=e,i.lastQuery=null,t&&(i.userOptions[n]=t,i.trigger("option_add",n,e)),n)}addOptions(e,t=!1){mf(e,e=>{this.addOption(e,t)})}registerOption(e){return this.addOption(e)}registerOptionGroup(e){var t=nf(e[this.settings.optgroupValueField]);return null!==t&&(e.$order=e.$order||++this.order,this.optgroups[t]=e,t)}addOptionGroup(e,t){var i;t[this.settings.optgroupValueField]=e,(i=this.registerOptionGroup(t))&&this.trigger("optgroup_add",i,t)}removeOptionGroup(e){this.optgroups.hasOwnProperty(e)&&(delete this.optgroups[e],this.clearCache(),this.trigger("optgroup_remove",e))}clearOptionGroups(){this.optgroups={},this.clearCache(),this.trigger("optgroup_clear")}updateOption(e,t){const i=this;var n,s;const r=nf(e),o=nf(t[i.settings.valueField]);if(null===r)return;const a=i.options[r];if(null==a)return;if("string"!=typeof o)throw new Error("Value must be set in option data");const l=i.getOption(r),c=i.getItem(r);if(t.$order=t.$order||a.$order,delete i.options[r],i.uncacheValue(o),i.options[o]=t,l){if(i.dropdown_content.contains(l)){const e=i._render("option",t);If(l,e),i.activeOption===l&&i.setActiveOption(e)}l.remove()}c&&(-1!==(s=i.items.indexOf(r))&&i.items.splice(s,1,o),n=i._render("item",t),c.classList.contains("active")&&xf(n,"active"),If(c,n)),i.lastQuery=null}removeOption(e,t){const i=this;e=sf(e),i.uncacheValue(e),delete i.userOptions[e],delete i.options[e],i.lastQuery=null,i.trigger("option_remove",e),i.removeItem(e,t)}clearOptions(e){const t=(e||this.clearFilter).bind(this);this.loadedSearches={},this.userOptions={},this.clearCache();const i={};mf(this.options,(e,n)=>{t(e,n)&&(i[n]=e)}),this.options=this.sifter.items=i,this.lastQuery=null,this.trigger("option_clear")}clearFilter(e,t){return this.items.indexOf(t)>=0}getOption(e,t=!1){const i=nf(e);if(null===i)return null;const n=this.options[i];if(null!=n){if(n.$div)return n.$div;if(t)return this._render("option",n)}return null}getAdjacent(e,t,i="option"){var n,s=this;if(!e)return null;n="item"==i?s.controlChildren():s.dropdown_content.querySelectorAll("[data-selectable]");for(let i=0;i<n.length;i++)if(n[i]==e)return t>0?n[i+1]:n[i-1];return null}getItem(e){if("object"==typeof e)return e;var t=nf(e);return null!==t?this.control.querySelector(`[data-value="${gf(t)}"]`):null}addItems(e,t){var i=this,n=Array.isArray(e)?e:[e];n=n.filter(e=>-1===i.items.indexOf(e));const s=n[n.length-1];n.forEach(e=>{i.isPending=e!==s,i.addItem(e,t)})}addItem(e,t){lf(this,t?[]:["change","dropdown_close"],()=>{var i,n;const s=this,r=s.settings.mode,o=nf(e);if((!o||-1===s.items.indexOf(o)||("single"===r&&s.close(),"single"!==r&&s.settings.duplicates))&&null!==o&&s.options.hasOwnProperty(o)&&("single"===r&&s.clear(t),"multi"!==r||!s.isFull())){if(i=s._render("item",s.options[o]),s.control.contains(i)&&(i=i.cloneNode(!0)),n=s.isFull(),s.items.splice(s.caretPos,0,o),s.insertAtCaret(i),s.isSetup){if(!s.isPending&&s.settings.hideSelected){let e=s.getOption(o),t=s.getAdjacent(e,1);t&&s.setActiveOption(t)}s.isPending||s.settings.closeAfterSelect||s.refreshOptions(s.isFocused&&"single"!==r),0!=s.settings.closeAfterSelect&&s.isFull()?s.close():s.isPending||s.positionDropdown(),s.trigger("item_add",o,i),s.isPending||s.updateOriginalInput({silent:t})}(!s.isPending||!n&&s.isFull())&&(s.inputState(),s.refreshState())}})}removeItem(e=null,t){const i=this;if(!(e=i.getItem(e)))return;var n,s;const r=e.dataset.value;n=Cf(e),e.remove(),e.classList.contains("active")&&(s=i.activeItems.indexOf(e),i.activeItems.splice(s,1),kf(e,"active")),i.items.splice(n,1),i.lastQuery=null,!i.settings.persist&&i.userOptions.hasOwnProperty(r)&&i.removeOption(r,t),n<i.caretPos&&i.setCaret(i.caretPos-1),i.updateOriginalInput({silent:t}),i.refreshState(),i.positionDropdown(),i.trigger("item_remove",r,e)}createItem(e=null,t=()=>{}){3===arguments.length&&(t=arguments[2]),"function"!=typeof t&&(t=()=>{});var i,n=this,s=n.caretPos;if(e=e||n.inputValue(),!n.canCreate(e))return t(),!1;n.lock();var r=!1,o=e=>{if(n.unlock(),!e||"object"!=typeof e)return t();var i=nf(e[n.settings.valueField]);if("string"!=typeof i)return t();n.setTextboxValue(),n.addOption(e,!0),n.setCaret(s),n.addItem(i),t(e),r=!0};return i="function"==typeof n.settings.create?n.settings.create.call(this,e,o):{[n.settings.labelField]:e,[n.settings.valueField]:e},r||o(i),!0}refreshItems(){var e=this;e.lastQuery=null,e.isSetup&&e.addItems(e.items),e.updateOriginalInput(),e.refreshState()}refreshState(){const e=this;e.refreshValidityState();const t=e.isFull(),i=e.isLocked;e.wrapper.classList.toggle("rtl",e.rtl);const n=e.wrapper.classList;n.toggle("focus",e.isFocused),n.toggle("disabled",e.isDisabled),n.toggle("readonly",e.isReadOnly),n.toggle("required",e.isRequired),n.toggle("invalid",!e.isValid),n.toggle("locked",i),n.toggle("full",t),n.toggle("input-active",e.isFocused&&!e.isInputHidden),n.toggle("dropdown-active",e.isOpen),n.toggle("has-options",Of(e.options)),n.toggle("has-items",e.items.length>0)}refreshValidityState(){var e=this;e.input.validity&&(e.isValid=e.input.validity.valid,e.isInvalid=!e.isValid)}isFull(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems}updateOriginalInput(e={}){const t=this;var i,n;const s=t.input.querySelector('option[value=""]');if(t.is_select_tag){const r=[],o=t.input.querySelectorAll("option:checked").length;function a(e,i,n){return e||(e=bf('<option value="'+rf(i)+'">'+rf(n)+"</option>")),e!=s&&t.input.append(e),r.push(e),(e!=s||o>0)&&(e.selected=!0),e}t.input.querySelectorAll("option:checked").forEach(e=>{e.selected=!1}),0==t.items.length&&"single"==t.settings.mode?a(s,"",""):t.items.forEach(e=>{if(i=t.options[e],n=i[t.settings.labelField]||"",r.includes(i.$option)){a(t.input.querySelector(`option[value="${gf(e)}"]:not(:checked)`),e,n)}else i.$option=a(i.$option,e,n)})}else t.input.value=t.getValue();t.isSetup&&(e.silent||t.trigger("change",t.getValue()))}open(){var e=this;e.isLocked||e.isOpen||"multi"===e.settings.mode&&e.isFull()||(e.isOpen=!0,Tf(e.focus_node,{"aria-expanded":"true"}),e.refreshState(),wf(e.dropdown,{visibility:"hidden",display:"block"}),e.positionDropdown(),wf(e.dropdown,{visibility:"visible",display:"block"}),e.focus(),e.trigger("dropdown_open",e.dropdown))}close(e=!0){var t=this,i=t.isOpen;e&&(t.setTextboxValue(),"single"===t.settings.mode&&t.items.length&&t.inputState()),t.isOpen=!1,Tf(t.focus_node,{"aria-expanded":"false"}),wf(t.dropdown,{display:"none"}),t.settings.hideSelected&&t.clearActiveOption(),t.refreshState(),i&&t.trigger("dropdown_close",t.dropdown)}positionDropdown(){if("body"===this.settings.dropdownParent){var e=this.control,t=e.getBoundingClientRect(),i=e.offsetHeight+t.top+window.scrollY,n=t.left+window.scrollX;wf(this.dropdown,{width:t.width+"px",top:i+"px",left:n+"px"})}}clear(e){var t=this;if(t.items.length){var i=t.controlChildren();mf(i,e=>{t.removeItem(e,!0)}),t.inputState(),e||t.updateOriginalInput(),t.trigger("clear")}}insertAtCaret(e){const t=this,i=t.caretPos,n=t.control;n.insertBefore(e,n.children[i]||null),t.setCaret(i+1)}deleteSelection(e){var t,i,n,s,r=this;t=e&&e.keyCode===qf?-1:1,i=cf(r.control_input);const o=[];if(r.activeItems.length)s=Ef(r.activeItems,t),n=Cf(s),t>0&&n++,mf(r.activeItems,e=>o.push(e));else if((r.isFocused||"single"===r.settings.mode)&&r.items.length){const e=r.controlChildren();let n;t<0&&0===i.start&&0===i.length?n=e[r.caretPos-1]:t>0&&i.start===r.inputValue().length&&(n=e[r.caretPos]),void 0!==n&&o.push(n)}if(!r.shouldDelete(o,e))return!1;for(df(e,!0),void 0!==n&&r.setCaret(n);o.length;)r.removeItem(o.pop());return r.inputState(),r.positionDropdown(),r.refreshOptions(!1),!0}shouldDelete(e,t){const i=e.map(e=>e.dataset.value);return!(!i.length||"function"==typeof this.settings.onDelete&&!1===this.settings.onDelete(i,t))}advanceSelection(e,t){var i,n,s=this;s.rtl&&(e*=-1),s.inputValue().length||(hf(Hf,t)||hf("shiftKey",t)?(n=(i=s.getLastActive(e))?i.classList.contains("active")?s.getAdjacent(i,e,"item"):i:e>0?s.control_input.nextElementSibling:s.control_input.previousElementSibling)&&(n.classList.contains("active")&&s.removeActiveItem(i),s.setActiveItemClass(n)):s.moveCaret(e))}moveCaret(e){}getLastActive(e){let t=this.control.querySelector(".last-active");if(t)return t;var i=this.control.querySelectorAll(".active");return i?Ef(i,e):void 0}setCaret(e){this.caretPos=this.items.length}controlChildren(){return Array.from(this.control.querySelectorAll("[data-ts-item]"))}lock(){this.setLocked(!0)}unlock(){this.setLocked(!1)}setLocked(e=this.isReadOnly||this.isDisabled){this.isLocked=e,this.refreshState()}disable(){this.setDisabled(!0),this.close()}enable(){this.setDisabled(!1)}setDisabled(e){this.focus_node.tabIndex=e?-1:this.tabIndex,this.isDisabled=e,this.input.disabled=e,this.control_input.disabled=e,this.setLocked()}setReadOnly(e){this.isReadOnly=e,this.input.readOnly=e,this.control_input.readOnly=e,this.setLocked()}destroy(){var e=this,t=e.revertSettings;e.trigger("destroy"),e.off(),e.wrapper.remove(),e.dropdown.remove(),e.input.innerHTML=t.innerHTML,e.input.tabIndex=t.tabIndex,kf(e.input,"tomselected","ts-hidden-accessible"),e._destroy(),delete e.input.tomselect}render(e,t){var i,n;const s=this;if("function"!=typeof this.settings.render[e])return null;if(!(n=s.settings.render[e].call(this,t,rf)))return null;if(n=bf(n),"option"===e||"option_create"===e?t[s.settings.disabledField]?Tf(n,{"aria-disabled":"true"}):Tf(n,{"data-selectable":""}):"optgroup"===e&&(i=t.group[s.settings.optgroupValueField],Tf(n,{"data-group":i}),t.group[s.settings.disabledField]&&Tf(n,{"data-disabled":""})),"option"===e||"item"===e){const i=sf(t[s.settings.valueField]);Tf(n,{"data-value":i}),"item"===e?(xf(n,s.settings.itemClass),Tf(n,{"data-ts-item":""})):(xf(n,s.settings.optionClass),Tf(n,{role:"option",id:t.$id}),t.$div=n,s.options[i]=t)}return n}_render(e,t){const i=this.render(e,t);if(null==i)throw"HTMLElement expected";return i}clearCache(){mf(this.options,e=>{e.$div&&(e.$div.remove(),delete e.$div)})}uncacheValue(e){const t=this.getOption(e);t&&t.remove()}canCreate(e){return this.settings.create&&e.length>0&&this.settings.createFilter.call(this,e)}hook(e,t,i){var n=this,s=n[t];n[t]=function(){var t,r;return"after"===e&&(t=s.apply(n,arguments)),r=i.apply(n,arguments),"instead"===e?r:("before"===e&&(t=s.apply(n,arguments)),t)}}}const Qf=(e,t,i,n)=>{e.addEventListener(t,i,n)};function Kf(){Qf(this.input,"change",()=>{this.sync()})}const Jf=e=>null==e?null:Zf(e),Zf=e=>"boolean"==typeof e?e?"1":"0":e+"",Xf=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},em=e=>{if(e.jquery)return e[0];if(e instanceof HTMLElement)return e;if(tm(e)){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},tm=e=>"string"==typeof e&&e.indexOf("<")>-1;function im(e){var t=this,i=t.onOptionSelect;t.settings.hideSelected=!1;const n=Object.assign({className:"tomselect-checkbox",checkedClassNames:void 0,uncheckedClassNames:void 0},e);var s=function(e,t){t?(e.checked=!0,n.uncheckedClassNames&&e.classList.remove(...n.uncheckedClassNames),n.checkedClassNames&&e.classList.add(...n.checkedClassNames)):(e.checked=!1,n.checkedClassNames&&e.classList.remove(...n.checkedClassNames),n.uncheckedClassNames&&e.classList.add(...n.uncheckedClassNames))},r=function(e){setTimeout(()=>{var t=e.querySelector("input."+n.className);t instanceof HTMLInputElement&&s(t,e.classList.contains("selected"))},1)};t.hook("after","setupTemplates",()=>{var e=t.settings.render.option;t.settings.render.option=(i,r)=>{var o=em(e.call(t,i,r)),a=document.createElement("input");n.className&&a.classList.add(n.className),a.addEventListener("click",function(e){Xf(e)}),a.type="checkbox";const l=Jf(i[t.settings.valueField]);return s(a,!!(l&&t.items.indexOf(l)>-1)),o.prepend(a),o}}),t.on("item_remove",e=>{var i=t.getOption(e);i&&(i.classList.remove("selected"),r(i))}),t.on("item_add",e=>{var i=t.getOption(e);i&&r(i)}),t.hook("instead","onOptionSelect",(e,n)=>{if(n.classList.contains("selected"))return n.classList.remove("selected"),t.removeItem(n.dataset.value),t.refreshOptions(),void Xf(e,!0);i.call(t,e,n),r(n)})}const nm=e=>{if(e.jquery)return e[0];if(e instanceof HTMLElement)return e;if(sm(e)){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},sm=e=>"string"==typeof e&&e.indexOf("<")>-1;function rm(e){const t=this,i=Object.assign({className:"clear-button",title:"Clear All",html:e=>`<div class="${e.className}" title="${e.title}">&#10799;</div>`},e);t.on("initialize",()=>{var e=nm(i.html(i));e.addEventListener("click",e=>{t.isLocked||(t.clear(),"single"===t.settings.mode&&t.settings.allowEmptyOption&&t.addItem(""),e.preventDefault(),e.stopPropagation())}),t.control.appendChild(e)})}const om=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},am=(e,t,i,n)=>{e.addEventListener(t,i,n)},lm=(e,t)=>{if(Array.isArray(e))e.forEach(t);else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},cm=e=>{if(e.jquery)return e[0];if(e instanceof HTMLElement)return e;if(dm(e)){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},dm=e=>"string"==typeof e&&e.indexOf("<")>-1,pm=(e,t)=>{lm(t,(t,i)=>{null==t?e.removeAttribute(i):e.setAttribute(i,""+t)})},hm=(e,t)=>{var i;null==(i=e.parentNode)||i.insertBefore(t,e.nextSibling)},um=(e,t)=>{var i;null==(i=e.parentNode)||i.insertBefore(t,e)},gm=(e,t)=>{do{var i;if(e==(t=null==(i=t)?void 0:i.previousElementSibling))return!0}while(t&&t.previousElementSibling);return!1};function fm(){var e=this;if("multi"!==e.settings.mode)return;var t=e.lock,i=e.unlock;let n,s=!0;e.hook("after","setupTemplates",()=>{var t=e.settings.render.item;e.settings.render.item=(i,r)=>{const o=cm(t.call(e,i,r));pm(o,{draggable:"true"});const a=e=>{n=o,setTimeout(()=>{o.classList.add("ts-dragging")},0)},l=e=>{e.preventDefault(),o.classList.add("ts-drag-over"),d(o,n)},c=()=>{o.classList.remove("ts-drag-over")},d=(e,t)=>{void 0!==t&&(gm(t,o)?hm(e,t):um(e,t))},p=()=>{var t;document.querySelectorAll(".ts-drag-over").forEach(e=>e.classList.remove("ts-drag-over")),null==(t=n)||t.classList.remove("ts-dragging"),n=void 0;var i=[];e.control.querySelectorAll("[data-value]").forEach(e=>{if(e.dataset.value){let t=e.dataset.value;t&&i.push(t)}}),e.setValue(i)};return am(o,"mousedown",e=>{s||om(e),e.stopPropagation()}),am(o,"dragstart",a),am(o,"dragenter",l),am(o,"dragover",l),am(o,"dragleave",c),am(o,"dragend",p),o}}),e.hook("instead","lock",()=>(s=!1,t.call(e))),e.hook("instead","unlock",()=>(s=!0,i.call(e)))}const mm=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},bm=e=>{if(e.jquery)return e[0];if(e instanceof HTMLElement)return e;if(vm(e)){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},vm=e=>"string"==typeof e&&e.indexOf("<")>-1;function ym(e){const t=this,i=Object.assign({title:"Untitled",headerClass:"dropdown-header",titleRowClass:"dropdown-header-title",labelClass:"dropdown-header-label",closeClass:"dropdown-header-close",html:e=>'<div class="'+e.headerClass+'"><div class="'+e.titleRowClass+'"><span class="'+e.labelClass+'">'+e.title+'</span><a class="'+e.closeClass+'">&times;</a></div></div>'},e);t.on("initialize",()=>{var e=bm(i.html(i)),n=e.querySelector("."+i.closeClass);n&&n.addEventListener("click",e=>{mm(e,!0),t.close()}),t.dropdown.insertBefore(e,t.dropdown.firstChild)})}const _m=(e,t)=>{if(Array.isArray(e))e.forEach(t);else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},wm=(e,...t)=>{var i=xm(t);(e=km(e)).map(e=>{i.map(t=>{e.classList.remove(t)})})},xm=e=>{var t=[];return _m(e,e=>{"string"==typeof e&&(e=e.trim().split(/[\t\n\f\r\s]/)),Array.isArray(e)&&(t=t.concat(e))}),t.filter(Boolean)},km=e=>(Array.isArray(e)||(e=[e]),e),Am=(e,t)=>{if(!e)return-1;t=t||e.nodeName;for(var i=0;e=e.previousElementSibling;)e.matches(t)&&i++;return i};function Sm(){var e=this;e.hook("instead","setCaret",t=>{"single"!==e.settings.mode&&e.control.contains(e.control_input)?(t=Math.max(0,Math.min(e.items.length,t)))==e.caretPos||e.isPending||e.controlChildren().forEach((i,n)=>{n<t?e.control_input.insertAdjacentElement("beforebegin",i):e.control.appendChild(i)}):t=e.items.length,e.caretPos=t}),e.hook("instead","moveCaret",t=>{if(!e.isFocused)return;const i=e.getLastActive(t);if(i){const n=Am(i);e.setCaret(t>0?n+1:n),e.setActiveItem(),wm(i,"last-active")}else e.setCaret(e.caretPos+t)})}const $m=27,Em=9,Om=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},Cm=(e,t,i,n)=>{e.addEventListener(t,i,n)},Tm=(e,t)=>{if(Array.isArray(e))e.forEach(t);else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},Im=e=>{if(e.jquery)return e[0];if(e instanceof HTMLElement)return e;if(Lm(e)){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},Lm=e=>"string"==typeof e&&e.indexOf("<")>-1,Rm=(e,...t)=>{var i=jm(t);(e=Nm(e)).map(e=>{i.map(t=>{e.classList.add(t)})})},jm=e=>{var t=[];return Tm(e,e=>{"string"==typeof e&&(e=e.trim().split(/[\t\n\f\r\s]/)),Array.isArray(e)&&(t=t.concat(e))}),t.filter(Boolean)},Nm=e=>(Array.isArray(e)||(e=[e]),e);function Pm(){const e=this;e.settings.shouldOpen=!0,e.hook("before","setup",()=>{e.focus_node=e.control,Rm(e.control_input,"dropdown-input");const t=Im('<div class="dropdown-input-wrap">');t.append(e.control_input),e.dropdown.insertBefore(t,e.dropdown.firstChild);const i=Im('<input class="items-placeholder" tabindex="-1" />');i.placeholder=e.settings.placeholder||"",e.control.append(i)}),e.on("initialize",()=>{e.control_input.addEventListener("keydown",t=>{switch(t.keyCode){case $m:return e.isOpen&&(Om(t,!0),e.close()),void e.clearActiveItems();case Em:e.focus_node.tabIndex=-1}return e.onKeyDown.call(e,t)}),e.on("blur",()=>{e.focus_node.tabIndex=e.isDisabled?-1:e.tabIndex}),e.on("dropdown_open",()=>{e.control_input.focus()});const t=e.onBlur;e.hook("instead","onBlur",i=>{if(!i||i.relatedTarget!=e.control_input)return t.call(e)}),Cm(e.control_input,"blur",()=>e.onBlur()),e.hook("before","close",()=>{e.isOpen&&e.focus_node.focus({preventScroll:!0})})})}const Dm=(e,t,i,n)=>{e.addEventListener(t,i,n)};function Fm(){var e=this;e.on("initialize",()=>{var t=document.createElement("span"),i=e.control_input;t.style.cssText="position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; ",e.wrapper.appendChild(t);var n=["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"];for(const e of n)t.style[e]=i.style[e];var s=()=>{t.textContent=i.value,i.style.width=t.clientWidth+"px"};s(),e.on("update item_add item_remove",s),Dm(i,"input",s),Dm(i,"keyup",s),Dm(i,"blur",s),Dm(i,"update",s)})}function Bm(){var e=this,t=e.deleteSelection;this.hook("instead","deleteSelection",i=>!!e.activeItems.length&&t.call(e,i))}function Mm(){this.hook("instead","setActiveItem",()=>{}),this.hook("instead","selectAll",()=>{})}const qm=37,zm=39,Um=(e,t,i)=>{for(;e&&e.matches;){if(e.matches(t))return e;e=e.parentNode}},Hm=(e,t)=>{if(!e)return-1;t=t||e.nodeName;for(var i=0;e=e.previousElementSibling;)e.matches(t)&&i++;return i};function Vm(){var e=this,t=e.onKeyDown;e.hook("instead","onKeyDown",i=>{var n,s,r,o;if(!e.isOpen||i.keyCode!==qm&&i.keyCode!==zm)return t.call(e,i);e.ignoreHover=!0,o=Um(e.activeOption,"[data-group]"),n=Hm(e.activeOption,"[data-selectable]"),o&&(o=i.keyCode===qm?o.previousSibling:o.nextSibling)&&(s=(r=o.querySelectorAll("[data-selectable]"))[Math.min(r.length-1,n)])&&e.setActiveOption(s)})}const Wm=e=>(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Gm=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},Ym=(e,t,i,n)=>{e.addEventListener(t,i,n)},Qm=e=>{if(e.jquery)return e[0];if(e instanceof HTMLElement)return e;if(Km(e)){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},Km=e=>"string"==typeof e&&e.indexOf("<")>-1;function Jm(e){const t=Object.assign({label:"&times;",title:"Remove",className:"remove",append:!0},e);var i=this;if(t.append){var n='<a href="javascript:void(0)" class="'+t.className+'" tabindex="-1" title="'+Wm(t.title)+'">'+t.label+"</a>";i.hook("after","setupTemplates",()=>{var e=i.settings.render.item;i.settings.render.item=(t,s)=>{var r=Qm(e.call(i,t,s)),o=Qm(n);return r.appendChild(o),Ym(o,"mousedown",e=>{Gm(e,!0)}),Ym(o,"click",e=>{i.isLocked||(Gm(e,!0),i.isLocked||i.shouldDelete([r],e)&&(i.removeItem(r),i.refreshOptions(!1),i.inputState()))}),r}})}}function Zm(e){const t=this,i=Object.assign({text:e=>e[t.settings.labelField]},e);t.on("item_remove",function(e){if(t.isFocused&&""===t.control_input.value.trim()){var n=t.options[e];n&&t.setTextboxValue(i.text.call(t,n))}})}const Xm=(e,t)=>{if(Array.isArray(e))e.forEach(t);else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},eb=(e,...t)=>{var i=tb(t);(e=ib(e)).map(e=>{i.map(t=>{e.classList.add(t)})})},tb=e=>{var t=[];return Xm(e,e=>{"string"==typeof e&&(e=e.trim().split(/[\t\n\f\r\s]/)),Array.isArray(e)&&(t=t.concat(e))}),t.filter(Boolean)},ib=e=>(Array.isArray(e)||(e=[e]),e);function nb(){const e=this,t=e.canLoad,i=e.clearActiveOption,n=e.loadCallback;var s,r,o={},a=!1,l=[];if(e.settings.shouldLoadMore||(e.settings.shouldLoadMore=()=>{if(s.clientHeight/(s.scrollHeight-s.scrollTop)>.9)return!0;if(e.activeOption){var t=e.selectable();if(Array.from(t).indexOf(e.activeOption)>=t.length-2)return!0}return!1}),!e.settings.firstUrl)throw"virtual_scroll plugin requires a firstUrl() method";e.settings.sortField=[{field:"$order"},{field:"$score"}];const c=t=>!("number"==typeof e.settings.maxOptions&&s.children.length>=e.settings.maxOptions)&&!(!(t in o)||!o[t]),d=(t,i)=>e.items.indexOf(i)>=0||l.indexOf(i)>=0;e.setNextUrl=(e,t)=>{o[e]=t},e.getUrl=t=>{if(t in o){const e=o[t];return o[t]=!1,e}return e.clearPagination(),e.settings.firstUrl.call(e,t)},e.clearPagination=()=>{o={}},e.hook("instead","clearActiveOption",()=>{if(!a)return i.call(e)}),e.hook("instead","canLoad",i=>i in o?c(i):t.call(e,i)),e.hook("instead","loadCallback",(t,i)=>{if(a){if(r){const i=t[0];void 0!==i&&(r.dataset.value=i[e.settings.valueField])}}else e.clearOptions(d);n.call(e,t,i),a=!1}),e.hook("after","refreshOptions",()=>{const t=e.lastValue;var i;c(t)?(i=e.render("loading_more",{query:t}))&&(i.setAttribute("data-selectable",""),r=i):t in o&&!s.querySelector(".no-results")&&(i=e.render("no_more_results",{query:t})),i&&(eb(i,e.settings.optionClass),s.append(i))}),e.on("initialize",()=>{l=Object.keys(e.options),s=e.dropdown_content,e.settings.render=Object.assign({},{loading_more:()=>'<div class="loading-more-results">Loading more results ... </div>',no_more_results:()=>'<div class="no-more-results">No more results</div>'},e.settings.render),s.addEventListener("scroll",()=>{e.settings.shouldLoadMore.call(e)&&c(e.lastValue)&&(a||(a=!0,e.load.call(e,e.lastValue)))})})}function sb(e){if(document.getElementById("__pb-multi-select-css"))return;const t=r("../css/tom-select"),i=document.createElement("link");i.id="__pb-multi-select-css",i.href=`${t}/tom-select.${e}.min.css`,i.rel="stylesheet",document.head.appendChild(i)}Yf.define("change_listener",Kf),Yf.define("checkbox_options",im),Yf.define("clear_button",rm),Yf.define("drag_drop",fm),Yf.define("dropdown_header",ym),Yf.define("caret_position",Sm),Yf.define("dropdown_input",Pm),Yf.define("input_autogrow",Fm),Yf.define("no_backspace_delete",Bm),Yf.define("no_active_items",Mm),Yf.define("optgroup_columns",Vm),Yf.define("remove_button",Jm),Yf.define("restore_on_backspace",Zm),Yf.define("virtual_scroll",nb);const rb=e=>e?`<div>${f(e.text)}</div>`:"";class ob extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{placeholder:{type:String},source:{type:String},closeAfterSelect:{type:Boolean,attribute:"close-after-select"},preload:{type:String},onBlur:{type:String,attribute:"on-blur"},onChange:{type:String,attribute:"on-change"}})}get value(){return this._select?this._select.getValue():null}set value(e){this._select&&(this._select.clear(!0),this._select.sync(),this._select.setValue(e,!1),this._select.sync())}set renderItem(e){this.renderFunction=e}constructor(){super(),this.theme="default",this.source=null,this.closeAfterSelect=!1,this.preload=!1,this.renderFunction=rb,this.onBlur="pb-combo-box-blur",this.onChange="pb-combo-box-change",this.placeholder=""}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-i18n-update",()=>{this._select&&(this._select.settings.placeholder=f(this.placeholder),this._select.inputState(),this.source?this._select.refreshOptions(!1):(this._select.clearOptions(),this._select.sync()))})}firstUpdated(){sb(this.theme);let e=this.querySelector("select,input");e||(e=document.createElement("input"),this.appendChild(e)),e.autocomplete=!1,a("pb-page-ready",()=>{const t={};if(this.source){let e=new AbortController;const i=this.toAbsoluteURL(this.source);t.labelField="text",t.valueField="value",t.searchField=[],t.preload=this.preload,this.preload&&(t.shouldLoad=()=>!0),t.load=(t,n)=>{this._select&&this._select.clearOptions(),e&&e.abort(),e=new AbortController,fetch(`${i}?query=${encodeURIComponent(t)}`,{method:"GET",mode:"cors",credentials:"same-origin",signal:e.signal}).then(e=>e.json()).then(e=>{n(e)}).catch(()=>{n()})},t.render={option:this.renderFunction,item:this.renderFunction}}t.placeholder=f(this.placeholder),t.closeAfterSelect=this.closeAfterSelect,t.onBlur=()=>this.emitTo(this.onBlur,{value:this.value}),t.onChange=()=>this.emitTo(this.onChange,{value:this.value}),this._select=new Yf(e,t)})}createRenderRoot(){return this}}customElements.define("pb-combo-box",ob);class ab extends(o(s)){static get properties(){return Object.assign({src:{type:String},styles:{type:String},url:{type:String,reflect:!0,readOnly:!0},raw:{type:Boolean}},super.properties)}constructor(){super(),this.url="about:blank",this.raw=!1}firstUpdated(){super.firstUpdated(),this._iframe=this.shadowRoot.querySelector("iframe"),this._iframe.addEventListener("load",()=>{"about:blank"!==this._iframe.src&&(this._iframe.className="",this.emitTo("pb-end-update"))}),a("pb-page-ready",()=>{this.refresh()})}print(){this._iframe.contentWindow.print()}refresh(){this.emitTo("pb-start-update"),this._iframe.className="hidden",this._iframe.src="about:blank";const e=this.getDocument(),t=new URLSearchParams;e.odd&&t.set("odd",`${e.odd}.odd`),t.set("base",`${this.getEndpoint()}/${e.getCollection()}/`),this._getCustomStyles().forEach(e=>t.append("style",e));const i=t.toString();this.url=`${this.getEndpoint()}/api/document/${encodeURIComponent(e.path)}/print?${i}`;const n=new URLSearchParams(i);n.set("wc","true"),this.raw||(n.set("script",r("../lib/paged.polyfill.js")),n.append("style",r("../css/pagedjs/interface.css"))),this._iframe.src=`${this.getEndpoint()}/api/document/${encodeURIComponent(e.path)}/print?${n.toString()}`}render(){return t` <iframe title="Preview" src="about:blank"></iframe> `}_getCustomStyles(){let e=[];return this.styles&&(e=this.styles.split(/\s*,\s*/)),e}static get styles(){return n`
      :host {
        display: block;
      }

      iframe {
        border: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        transition: opacity 0.5s ease-out 0.5s;
      }

      .hidden {
        opacity: 0;
        transition: opacity 0.5s ease-out;
      }
    `}}customElements.define("pb-print-preview",ab);
