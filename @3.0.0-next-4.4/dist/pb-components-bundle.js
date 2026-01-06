import{g as e,x as t,i as n,a as s,r,p as o,w as a,c as l,b as c,E as d,m as h}from"./pb-mixin-DHoWQheB.js";import{t as p,i as u,g}from"./pb-i18n-C0NDma4h.js";import{t as m,l as f,i as b}from"./pb-dialog-tklYGWfc.js";import{r as y}from"./urls-BEONu_g4.js";import{o as v}from"./unsafe-html-D5VGo9Oq.js";import{p as _,o as w,i as x,r as k,D as A,A as S,F as C,E,T as O,C as $,P as T,h as I,a as L,d as R,b as P,w as N,s as j,l as D,c as F,u as M,e as B,t as z,m as q,f as U,g as H,j as V,k as W}from"./focus-mixin-VCsFap6b.js";import"./es-global-bridge-D8ZcUcx_.js";import"./pb-facsimile.js";function Y(e={}){const{endpoint:t=".",apiVersion:i="1.0.0",template:n=null}=e;requestAnimationFrame(()=>{document.dispatchEvent(new CustomEvent("pb-page-ready",{detail:{endpoint:t,apiVersion:i,template:n}}))})}async function G(e){if(!e)return;await e.updateComplete;const t=e.shadowRoot;if(t){if(e.hasAttribute("multi")){const i=Array.isArray(e.values)?e.values:[];t.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.checked=i.includes(e.value)})}else{const i=t.querySelector("select");i&&(i.value=e.value??"")}e.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}}function Q(e,t){const i=t.dataset.demoOutput||t.getAttribute("data-demo-output");if(i)return e.querySelector(i)||t.querySelector(i);const n=t.parentElement;if(n){const e=n.querySelector("code[id], pre[id], span[id]");if(e)return e}return null}function K(e){e.querySelectorAll("form").forEach(t=>{if(t.dataset.demoWired)return;const i=Q(e,t);if(!i)return void(t.dataset.demoWired="skip");const n=()=>{i.textContent=new URLSearchParams(new FormData(t)).toString()};t.addEventListener("submit",e=>{e.preventDefault(),n()}),t.dataset.demoWired="true",n()})}var J,Z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},X={exports:{}};function ee(){return J||(J=1,function(e){var t=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,n={},s={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++i}),e.__id},clone:function e(t,i){var n,r;switch(i=i||{},s.util.type(t)){case"Object":if(r=s.util.objId(t),i[r])return i[r];for(var o in n={},i[r]=n,t)t.hasOwnProperty(o)&&(n[o]=e(t[o],i));return n;case"Array":return r=s.util.objId(t),i[r]?i[r]:(n=[],i[r]=n,t.forEach(function(t,s){n[s]=e(t,i)}),n);default:return t}},getLanguage:function(e){for(;e;){var i=t.exec(e.className);if(i)return i[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,i){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+i)},currentScript:function(){if("undefined"==typeof document)return null;if(document.currentScript&&"SCRIPT"===document.currentScript.tagName)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var i in t)if(t[i].src==e)return t[i]}return null}},isActive:function(e,t,i){for(var n="no-"+t;e;){var s=e.classList;if(s.contains(t))return!0;if(s.contains(n))return!1;e=e.parentElement}return!!i}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(e,t){var i=s.util.clone(s.languages[e]);for(var n in t)i[n]=t[n];return i},insertBefore:function(e,t,i,n){var r=(n=n||s.languages)[e],o={};for(var a in r)if(r.hasOwnProperty(a)){if(a==t)for(var l in i)i.hasOwnProperty(l)&&(o[l]=i[l]);i.hasOwnProperty(a)||(o[a]=r[a])}var c=n[e];return n[e]=o,s.languages.DFS(s.languages,function(t,i){i===c&&t!=e&&(this[t]=o)}),o},DFS:function e(t,i,n,r){r=r||{};var o=s.util.objId;for(var a in t)if(t.hasOwnProperty(a)){i.call(t,a,t[a],n||a);var l=t[a],c=s.util.type(l);"Object"!==c||r[o(l)]?"Array"!==c||r[o(l)]||(r[o(l)]=!0,e(l,i,a,r)):(r[o(l)]=!0,e(l,i,null,r))}}},plugins:{},highlightAll:function(e,t){s.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,i){var n={callback:i,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),s.hooks.run("before-all-elements-highlight",n);for(var r,o=0;r=n.elements[o++];)s.highlightElement(r,!0===t,n.callback)},highlightElement:function(t,i,n){var r=s.util.getLanguage(t),o=s.languages[r];s.util.setLanguage(t,r);var a=t.parentElement;a&&"pre"===a.nodeName.toLowerCase()&&s.util.setLanguage(a,r);var l={element:t,language:r,grammar:o,code:t.textContent};function c(e){l.highlightedCode=e,s.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,s.hooks.run("after-highlight",l),s.hooks.run("complete",l),n&&n.call(l.element)}if(s.hooks.run("before-sanity-check",l),(a=l.element.parentElement)&&"pre"===a.nodeName.toLowerCase()&&!a.hasAttribute("tabindex")&&a.setAttribute("tabindex","0"),!l.code)return s.hooks.run("complete",l),void(n&&n.call(l.element));if(s.hooks.run("before-highlight",l),l.grammar)if(i&&e.Worker){var d=new Worker(s.filename);d.onmessage=function(e){c(e.data)},d.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else c(s.highlight(l.code,l.grammar,l.language));else c(s.util.encode(l.code))},highlight:function(e,t,i){var n={code:e,grammar:t,language:i};if(s.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=s.tokenize(n.code,n.grammar),s.hooks.run("after-tokenize",n),r.stringify(s.util.encode(n.tokens),n.language)},tokenize:function(e,t){var i=t.rest;if(i){for(var n in i)t[n]=i[n];delete t.rest}var s=new l;return c(s,s.head,e),a(e,s,t,s.head,0),h(s)},hooks:{all:{},add:function(e,t){var i=s.hooks.all;i[e]=i[e]||[],i[e].push(t)},run:function(e,t){var i=s.hooks.all[e];if(i&&i.length)for(var n,r=0;n=i[r++];)n(t)}},Token:r};function r(e,t,i,n){this.type=e,this.content=t,this.alias=i,this.length=0|(n||"").length}function o(e,t,i,n){e.lastIndex=t;var s=e.exec(i);if(s&&n&&s[1]){var r=s[1].length;s.index+=r,s[0]=s[0].slice(r)}return s}function a(e,t,i,n,l,h){for(var p in i)if(i.hasOwnProperty(p)&&i[p]){var u=i[p];u=Array.isArray(u)?u:[u];for(var g=0;g<u.length;++g){if(h&&h.cause==p+","+g)return;var m=u[g],f=m.inside,b=!!m.lookbehind,y=!!m.greedy,v=m.alias;if(y&&!m.pattern.global){var _=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,_+"g")}for(var w=m.pattern||m,x=n.next,k=l;x!==t.tail&&!(h&&k>=h.reach);k+=x.value.length,x=x.next){var A=x.value;if(t.length>e.length)return;if(!(A instanceof r)){var S,C=1;if(y){if(!(S=o(w,k,e,b))||S.index>=e.length)break;var E=S.index,O=S.index+S[0].length,$=k;for($+=x.value.length;E>=$;)$+=(x=x.next).value.length;if(k=$-=x.value.length,x.value instanceof r)continue;for(var T=x;T!==t.tail&&($<O||"string"==typeof T.value);T=T.next)C++,$+=T.value.length;C--,A=e.slice(k,$),S.index-=k}else if(!(S=o(w,0,A,b)))continue;E=S.index;var I=S[0],L=A.slice(0,E),R=A.slice(E+I.length),P=k+A.length;h&&P>h.reach&&(h.reach=P);var N=x.prev;if(L&&(N=c(t,N,L),k+=L.length),d(t,N,C),x=c(t,N,new r(p,f?s.tokenize(I,f):I,v,I)),R&&c(t,x,R),C>1){var j={cause:p+","+g,reach:P};a(e,t,i,x.prev,k,j),h&&j.reach>h.reach&&(h.reach=j.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,i){var n=t.next,s={value:i,prev:t,next:n};return t.next=s,n.prev=s,e.length++,s}function d(e,t,i){for(var n=t.next,s=0;s<i&&n!==e.tail;s++)n=n.next;t.next=n,n.prev=t,e.length-=s}function h(e){for(var t=[],i=e.head.next;i!==e.tail;)t.push(i.value),i=i.next;return t}if(e.Prism=s,r.stringify=function e(t,i){if("string"==typeof t)return t;if(Array.isArray(t)){var n="";return t.forEach(function(t){n+=e(t,i)}),n}var r={type:t.type,content:e(t.content,i),tag:"span",classes:["token",t.type],attributes:{},language:i},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(r.classes,o):r.classes.push(o)),s.hooks.run("wrap",r);var a="";for(var l in r.attributes)a+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+a+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(s.disableWorkerMessageHandler||e.addEventListener("message",function(t){var i=JSON.parse(t.data),n=i.language,r=i.code,o=i.immediateClose;e.postMessage(s.highlight(r,s.languages[n],n)),o&&e.close()},!1),s):s;var p=s.util.currentScript();function u(){s.manual||s.highlightAll()}if(p&&(s.filename=p.src,p.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var g=document.readyState;"loading"===g||"interactive"===g&&p&&p.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return s}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==Z&&(Z.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,i){var n={};n["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[i]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};s["language-"+i]={pattern:/[\s\S]+/,inside:t.languages[i]};var r={};r[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:s},t.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(e,i){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:t.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var i=e.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(void 0!==t&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading…",i=function(e,t){return"✖ Error "+e+" while fetching file: "+t},n="✖ Error: File does not exist or is empty",s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",o="loading",a="loaded",l="failed",c="pre[data-src]:not(["+r+'="'+a+'"]):not(['+r+'="'+o+'"])';t.hooks.add("before-highlightall",function(e){e.selector+=", "+c}),t.hooks.add("before-sanity-check",function(i){var n=i.element;if(n.matches(c)){i.code="",n.setAttribute(r,o);var d=n.appendChild(document.createElement("CODE"));d.textContent=e;var u=n.getAttribute("data-src"),g=i.language;if("none"===g){var m=(/\.(\w+)$/.exec(u)||[,"none"])[1];g=s[m]||m}t.util.setLanguage(d,g),t.util.setLanguage(n,g);var f=t.plugins.autoloader;f&&f.loadLanguages(g),h(u,function(e){n.setAttribute(r,a);var i=p(n.getAttribute("data-range"));if(i){var s=e.split(/\r\n?|\n/g),o=i[0],l=null==i[1]?s.length:i[1];o<0&&(o+=s.length),o=Math.max(0,Math.min(o-1,s.length)),l<0&&(l+=s.length),l=Math.max(0,Math.min(l,s.length)),e=s.slice(o,l).join("\n"),n.hasAttribute("data-start")||n.setAttribute("data-start",String(o+1))}d.textContent=e,t.highlightElement(d)},function(e){n.setAttribute(r,l),d.textContent=e})}}),t.plugins.fileHighlight={highlight:function(e){for(var i,n=(e||document).querySelectorAll(c),s=0;i=n[s++];)t.highlightElement(i)}};var d=!1;t.fileHighlight=function(){d||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),d=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}function h(e,t,s){var r=new XMLHttpRequest;r.open("GET",e,!0),r.onreadystatechange=function(){4==r.readyState&&(r.status<400&&r.responseText?t(r.responseText):r.status>=400?s(i(r.status,r.statusText)):s(n))},r.send(null)}function p(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var i=Number(t[1]),n=t[2],s=t[3];return n?s?[i,Number(s)]:[i,void 0]:[i,i]}}}()}(X)),X.exports}ee();var te,ie={};function ne(){return te||(te=1,function(e){e.languages.xquery=e.languages.extend("markup",{"xquery-comment":{pattern:/\(:[\s\S]*?:\)/,greedy:!0,alias:"comment"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},extension:{pattern:/\(#.+?#\)/,alias:"symbol"},variable:/\$[-\w:]+/,axis:{pattern:/(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,lookbehind:!0,alias:"operator"},"keyword-operator":{pattern:/(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,lookbehind:!0},function:/[\w-]+(?::[\w-]+)*(?=\s*\()/,"xquery-element":{pattern:/(element\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"tag"},"xquery-attribute":{pattern:/(attribute\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"attr-name"},builtin:{pattern:/(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,lookbehind:!0},number:/\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,operator:[/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],punctuation:/[[\](){},;:/]/}),e.languages.xquery.tag.pattern=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,e.languages.xquery.tag.inside["attr-value"].pattern=/=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/,e.languages.xquery.tag.inside["attr-value"].inside.punctuation=/^="|"$/,e.languages.xquery.tag.inside["attr-value"].inside.expression={pattern:/\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,inside:e.languages.xquery,alias:"language-xquery"};var t=function(e){return"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(t).join("")},i=function(n){for(var s=[],r=0;r<n.length;r++){var o=n[r],a=!1;if("string"!=typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?s.length>0&&s[s.length-1].tagName===t(o.content[0].content[1])&&s.pop():"/>"===o.content[o.content.length-1].content||s.push({tagName:t(o.content[0].content[1]),openedBraces:0}):!(s.length>0&&"punctuation"===o.type&&"{"===o.content)||n[r+1]&&"punctuation"===n[r+1].type&&"{"===n[r+1].content||n[r-1]&&"plain-text"===n[r-1].type&&"{"===n[r-1].content?s.length>0&&s[s.length-1].openedBraces>0&&"punctuation"===o.type&&"}"===o.content?s[s.length-1].openedBraces--:"comment"!==o.type&&(a=!0):s[s.length-1].openedBraces++),(a||"string"==typeof o)&&s.length>0&&0===s[s.length-1].openedBraces){var l=t(o);r<n.length-1&&("string"==typeof n[r+1]||"plain-text"===n[r+1].type)&&(l+=t(n[r+1]),n.splice(r+1,1)),r>0&&("string"==typeof n[r-1]||"plain-text"===n[r-1].type)&&(l=t(n[r-1])+l,n.splice(r-1,1),r--),/^\s+$/.test(l)?n[r]=l:n[r]=new e.Token("plain-text",l,null,l)}o.content&&"string"!=typeof o.content&&i(o.content)}};e.hooks.add("after-tokenize",function(e){"xquery"===e.language&&i(e.tokens)})}(Prism)),ie}ne();var se,re={exports:{}};function oe(){return se||(se=1,e=re,function(){if("undefined"!=typeof Prism){var t=Object.assign||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e},i={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};n.prototype={setDefaults:function(e){this.defaults=t(this.defaults,e)},normalize:function(e,i){for(var n in i=t(this.defaults,i)){var r=s(n);"normalize"!==n&&"setDefaults"!==r&&i[n]&&this[r]&&(e=this[r].call(this,e,i[n]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){return t=0|t||4,e.replace(/\t/g,new Array(++t).join(" "))},spacesToTabs:function(e,t){return t=0|t||4,e.replace(RegExp(" {"+t+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);return t&&t[0].length?(t.sort(function(e,t){return e.length-t.length}),t[0].length?e.replace(RegExp("^"+t[0],"gm"),""):e):e},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++t).join("\t")+"$&")},breakLines:function(e,t){t=!0===t?80:0|t||80;for(var i=e.split("\n"),n=0;n<i.length;++n)if(!(r(i[n])<=t)){for(var s=i[n].split(/(\s+)/g),o=0,a=0;a<s.length;++a){var l=r(s[a]);(o+=l)>t&&(s[a]="\n"+s[a],o=l)}i[n]=s.join("")}return i.join("\n")}},e.exports&&(e.exports=n),Prism.plugins.NormalizeWhitespace=new n({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(e){var t=Prism.plugins.NormalizeWhitespace;if((!e.settings||!1!==e.settings["whitespace-normalization"])&&Prism.util.isActive(e.element,"whitespace-normalization",!0))if(e.element&&e.element.parentNode||!e.code){var n=e.element.parentNode;if(e.code&&n&&"pre"===n.nodeName.toLowerCase()){for(var s in null==e.settings&&(e.settings={}),i)if(Object.hasOwnProperty.call(i,s)){var r=i[s];if(n.hasAttribute("data-"+s))try{var o=JSON.parse(n.getAttribute("data-"+s)||"true");typeof o===r&&(e.settings[s]=o)}catch(e){}}for(var a=n.childNodes,l="",c="",d=!1,h=0;h<a.length;++h){var p=a[h];p==e.element?d=!0:"#text"===p.nodeName&&(d?c+=p.nodeValue:l+=p.nodeValue,n.removeChild(p),--h)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var u=l+e.element.innerHTML+c;e.element.innerHTML=t.normalize(u,e.settings),e.code=e.element.textContent}else e.code=l+e.code+c,e.code=t.normalize(e.code,e.settings)}}else e.code=t.normalize(e.code,e.settings)})}function n(e){this.defaults=t({},e)}function s(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function r(e){for(var t=0,i=0;i<e.length;++i)e.charCodeAt(i)=="\t".charCodeAt(0)&&(t+=3);return e.length+t}}()),re.exports;var e}oe();var ae,le={};function ce(){return ae||(ae=1,function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e="line-numbers",t=/\n(?!$)/g,i=Prism.plugins.lineNumbers={getLine:function(t,i){if("PRE"===t.tagName&&t.classList.contains(e)){var n=t.querySelector(".line-numbers-rows");if(n){var s=parseInt(t.getAttribute("data-start"),10)||1,r=s+(n.children.length-1);i<s&&(i=s),i>r&&(i=r);var o=i-s;return n.children[o]}}},resize:function(e){s([e])},assumeViewportIndependence:!0},n=void 0;window.addEventListener("resize",function(){i.assumeViewportIndependence&&n===window.innerWidth||(n=window.innerWidth,s(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(i){if(i.code){var n=i.element,r=n.parentNode;if(r&&/pre/i.test(r.nodeName)&&!n.querySelector(".line-numbers-rows")&&Prism.util.isActive(n,e)){n.classList.remove(e),r.classList.add(e);var o,a=i.code.match(t),l=a?a.length+1:1,c=new Array(l+1).join("<span></span>");(o=document.createElement("span")).setAttribute("aria-hidden","true"),o.className="line-numbers-rows",o.innerHTML=c,r.hasAttribute("data-start")&&(r.style.counterReset="linenumber "+(parseInt(r.getAttribute("data-start"),10)-1)),i.element.appendChild(o),s([r]),Prism.hooks.run("line-numbers",i)}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0})}function s(e){if(e=e.filter(function(e){var t=r(e)["white-space"];return"pre-wrap"===t||"pre-line"===t}),0!=e.length){var i=e.map(function(e){var i=e.querySelector("code"),n=e.querySelector(".line-numbers-rows");if(i&&n){var s=e.querySelector(".line-numbers-sizer"),r=i.textContent.split(t);s||((s=document.createElement("span")).className="line-numbers-sizer",i.appendChild(s)),s.innerHTML="0",s.style.display="block";var o=s.getBoundingClientRect().height;return s.innerHTML="",{element:e,lines:r,lineHeights:[],oneLinerHeight:o,sizer:s}}}).filter(Boolean);i.forEach(function(e){var t=e.sizer,i=e.lines,n=e.lineHeights,s=e.oneLinerHeight;n[i.length-1]=void 0,i.forEach(function(e,i){if(e&&e.length>1){var r=t.appendChild(document.createElement("span"));r.style.display="block",r.textContent=e}else n[i]=s})}),i.forEach(function(e){for(var t=e.sizer,i=e.lineHeights,n=0,s=0;s<i.length;s++)void 0===i[s]&&(i[s]=t.children[n++].getBoundingClientRect().height)}),i.forEach(function(e){var t=e.sizer,i=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach(function(e,t){i.children[t].style.height=e+"px"})})}}function r(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null}}()),le}ce();const de=new Map;function he(e){const i="default"===e?"prism.css":`prism-${e}.css`;if(de.has(i))return console.log("Using cached theme: %s",i),de.get(i);const n=new Promise(n=>{let s;try{if(void 0!==import.meta&&import.meta.env&&import.meta.env.DEV||"undefined"!=typeof location&&/localhost|127\.0\.0\.1/.test(location.hostname)){const e=window.location.hostname;s="8080"===window.location.port||e.includes("tei-publisher")?"/exist/apps/tei-publisher/resources/css/prismjs/"+i:r("../css/prismjs/")+i}else s=r("../css/prismjs/")+i}catch(e){s=r("../css/prismjs/")+i}console.log("<pb-code-highlight> loading theme %s from %s",e,s),fetch(s).then(e=>e.text()).catch(()=>n("")).then(e=>{n(t`<style>
            ${e}
          </style>`)})});return de.set(i,n),n}class pe extends(m(s)){static get properties(){return{language:{type:String},code:{type:String},theme:{type:String},lineNumbers:{type:Boolean,attribute:"line-numbers"},_themeStyles:{type:String}}}constructor(){super(),this.language="xml",this.theme="default",this.lineNumbers=!1,this._themeStyles=null}connectedCallback(){super.connectedCallback();let t=this.getAttribute("theme");null===t&&(t=e(this,"--pb-code-highlight-theme","default"),this.setAttribute("theme",t))}firstUpdated(){if(super.firstUpdated(),!this.code){const e=this.querySelector("template");this.code=e?Prism.plugins.NormalizeWhitespace.normalize(e.innerHTML):Prism.plugins.NormalizeWhitespace.normalize(this.textContent)}}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"theme"===e)he(i).then(e=>{this._themeStyles=e})}updated(e){if(super.updated(e),e.has("code")){const e=this.shadowRoot.getElementById("pb-code-highlight");if(null!=e){const t=document.createElement("code");t.textContent=this.code,e.replaceChildren(t)}this.highlight()}}highlight(){Prism.highlightAllUnder(this.shadowRoot)}render(){return this.code?t`
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
    `}}customElements.define("pb-code-highlight",pe);const ue="https://teipublisher.com/exist/apps/tei-publisher";class ge extends s{static properties={title:{type:String},code:{type:String},_showCodeLabel:{type:String},_requirePbTify:{type:Boolean}};constructor(){super(),this.title="TEI Publisher Webcomponents Example",this.code="Loading ...",this._showCodeLabel="demo.showCode.show",this._requirePbTify=!1}connectedCallback(){super.connectedCallback(),this._requirePbTify=this.hasAttribute("require-pb-tify");const e=this.querySelector("template");if(!e)return void console.warn("<pb-demo-snippet> no <template> found inside snippet");this.code=ge.removeIndent(e.innerHTML).replace(/\s*<style[\s\S]*?>[\s\S]*?<\/style>\s*/g,"");const t=e.content.cloneNode(!0);this.append(t),queueMicrotask(async()=>{try{if(customElements.get("pb-select")){const e=this.querySelectorAll("pb-select");for(const t of e)try{await G(t)}catch(e){}}}catch(e){}K(this),Y({endpoint:".",apiVersion:"1.0.0"})})}render(){const e=this.querySelector("style"),i=e?e.innerText:"",n=ge.indent(this.code.replace(/(endpoint="[^"]+")/,`endpoint="${ue}"`),2),s=`\n@import url('https://fonts.googleapis.com/css?family=Oswald|Roboto&display=swap');\n\nbody {\n  margin: 10px 20px;\n  font-size: 16px;\n  font-family: 'Roboto', 'Noto', sans-serif;\n  line-height: 1.42857;\n  font-weight: 300;\n  color: #333;\n}\n\n${ge.removeIndent(i)}\n`,r=`\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>${this.title}</title>\n    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.4.3/webcomponents-loader.js"><\/script>\n    <script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-components-bundle.js"><\/script>\n    <script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-leaflet-map.js"><\/script>\n  </head>\n  <body>\n${n}\n  </body>\n  ${this._requirePbTify?'<script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-tify.js"><\/script>':""}\n</html>`,o={title:this.title,html:r,html_pre_processor:"none",css:s,css_starter:"normalize",template:!1,editors:110};return t`
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
          ${p(this._showCodeLabel)}
        </button>
        <form action="https://codepen.io/pen/define" method="POST" target="_blank">
          <input type="hidden" name="data" .value=${JSON.stringify(o)} />
          <button class="pretty-button" type="submit">${p("demo.editCode.show")}</button>
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
  `}customElements.define("pb-demo-snippet",ge);const me="3.0.0-next-4.4";class fe extends s{static get properties(){return Object.assign({version:{type:String,reflect:!0}},super.properties)}constructor(){super(),this.version=me}render(){return t`<span>${this.version?this.version:"unknown"}</span>`}createRenderRoot(){return this}}customElements.define("pb-version",fe);var be="top",ye="bottom",ve="right",_e="left",we="auto",xe=[be,ye,ve,_e],ke="start",Ae="end",Se="clippingParents",Ce="viewport",Ee="popper",Oe="reference",$e=xe.reduce(function(e,t){return e.concat([t+"-"+ke,t+"-"+Ae])},[]),Te=[].concat(xe,[we]).reduce(function(e,t){return e.concat([t,t+"-"+ke,t+"-"+Ae])},[]),Ie=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Le(e){return e?(e.nodeName||"").toLowerCase():null}function Re(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Pe(e){return e instanceof Re(e).Element||e instanceof Element}function Ne(e){return e instanceof Re(e).HTMLElement||e instanceof HTMLElement}function je(e){return"undefined"!=typeof ShadowRoot&&(e instanceof Re(e).ShadowRoot||e instanceof ShadowRoot)}function De(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var i=t.styles[e]||{},n=t.attributes[e]||{},s=t.elements[e];Ne(s)&&Le(s)&&(Object.assign(s.style,i),Object.keys(n).forEach(function(e){var t=n[e];!1===t?s.removeAttribute(e):s.setAttribute(e,!0===t?"":t)}))})}function Fe(e){var t=e.state,i={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,i.popper),t.styles=i,t.elements.arrow&&Object.assign(t.elements.arrow.style,i.arrow),function(){Object.keys(t.elements).forEach(function(e){var n=t.elements[e],s=t.attributes[e]||{},r=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:i[e]).reduce(function(e,t){return e[t]="",e},{});Ne(n)&&Le(n)&&(Object.assign(n.style,r),Object.keys(s).forEach(function(e){n.removeAttribute(e)}))})}}var Me={name:"applyStyles",enabled:!0,phase:"write",fn:De,effect:Fe,requires:["computeStyles"]};function Be(e){return e.split("-")[0]}var ze=Math.max,qe=Math.min,Ue=Math.round;function He(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Ve(){return!/^((?!chrome|android).)*safari/i.test(He())}function We(e,t,i){void 0===t&&(t=!1),void 0===i&&(i=!1);var n=e.getBoundingClientRect(),s=1,r=1;t&&Ne(e)&&(s=e.offsetWidth>0&&Ue(n.width)/e.offsetWidth||1,r=e.offsetHeight>0&&Ue(n.height)/e.offsetHeight||1);var o=(Pe(e)?Re(e):window).visualViewport,a=!Ve()&&i,l=(n.left+(a&&o?o.offsetLeft:0))/s,c=(n.top+(a&&o?o.offsetTop:0))/r,d=n.width/s,h=n.height/r;return{width:d,height:h,top:c,right:l+d,bottom:c+h,left:l,x:l,y:c}}function Ye(e){var t=We(e),i=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-i)<=1&&(i=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:i,height:n}}function Ge(e,t){var i=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(i&&je(i)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Qe(e){return Re(e).getComputedStyle(e)}function Ke(e){return["table","td","th"].indexOf(Le(e))>=0}function Je(e){return((Pe(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ze(e){return"html"===Le(e)?e:e.assignedSlot||e.parentNode||(je(e)?e.host:null)||Je(e)}function Xe(e){return Ne(e)&&"fixed"!==Qe(e).position?e.offsetParent:null}function et(e){var t=/firefox/i.test(He());if(/Trident/i.test(He())&&Ne(e)&&"fixed"===Qe(e).position)return null;var i=Ze(e);for(je(i)&&(i=i.host);Ne(i)&&["html","body"].indexOf(Le(i))<0;){var n=Qe(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}function tt(e){for(var t=Re(e),i=Xe(e);i&&Ke(i)&&"static"===Qe(i).position;)i=Xe(i);return i&&("html"===Le(i)||"body"===Le(i)&&"static"===Qe(i).position)?t:i||et(e)||t}function it(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function nt(e,t,i){return ze(e,qe(t,i))}function st(e,t,i){var n=nt(e,t,i);return n>i?i:n}function rt(){return{top:0,right:0,bottom:0,left:0}}function ot(e){return Object.assign({},rt(),e)}function at(e,t){return t.reduce(function(t,i){return t[i]=e,t},{})}var lt=function(e,t){return ot("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:at(e,xe))};function ct(e){var t,i=e.state,n=e.name,s=e.options,r=i.elements.arrow,o=i.modifiersData.popperOffsets,a=Be(i.placement),l=it(a),c=[_e,ve].indexOf(a)>=0?"height":"width";if(r&&o){var d=lt(s.padding,i),h=Ye(r),p="y"===l?be:_e,u="y"===l?ye:ve,g=i.rects.reference[c]+i.rects.reference[l]-o[l]-i.rects.popper[c],m=o[l]-i.rects.reference[l],f=tt(r),b=f?"y"===l?f.clientHeight||0:f.clientWidth||0:0,y=g/2-m/2,v=d[p],_=b-h[c]-d[u],w=b/2-h[c]/2+y,x=nt(v,w,_),k=l;i.modifiersData[n]=((t={})[k]=x,t.centerOffset=x-w,t)}}function dt(e){var t=e.state,i=e.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&Ge(t.elements.popper,n)&&(t.elements.arrow=n)}function ht(e){return e.split("-")[1]}var pt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ut(e,t){var i=e.x,n=e.y,s=t.devicePixelRatio||1;return{x:Ue(i*s)/s||0,y:Ue(n*s)/s||0}}function gt(e){var t,i=e.popper,n=e.popperRect,s=e.placement,r=e.variation,o=e.offsets,a=e.position,l=e.gpuAcceleration,c=e.adaptive,d=e.roundOffsets,h=e.isFixed,p=o.x,u=void 0===p?0:p,g=o.y,m=void 0===g?0:g,f="function"==typeof d?d({x:u,y:m}):{x:u,y:m};u=f.x,m=f.y;var b=o.hasOwnProperty("x"),y=o.hasOwnProperty("y"),v=_e,_=be,w=window;if(c){var x=tt(i),k="clientHeight",A="clientWidth";if(x===Re(i)&&"static"!==Qe(x=Je(i)).position&&"absolute"===a&&(k="scrollHeight",A="scrollWidth"),s===be||(s===_e||s===ve)&&r===Ae)_=ye,m-=(h&&x===w&&w.visualViewport?w.visualViewport.height:x[k])-n.height,m*=l?1:-1;if(s===_e||(s===be||s===ye)&&r===Ae)v=ve,u-=(h&&x===w&&w.visualViewport?w.visualViewport.width:x[A])-n.width,u*=l?1:-1}var S,C=Object.assign({position:a},c&&pt),E=!0===d?ut({x:u,y:m},Re(i)):{x:u,y:m};return u=E.x,m=E.y,l?Object.assign({},C,((S={})[_]=y?"0":"",S[v]=b?"0":"",S.transform=(w.devicePixelRatio||1)<=1?"translate("+u+"px, "+m+"px)":"translate3d("+u+"px, "+m+"px, 0)",S)):Object.assign({},C,((t={})[_]=y?m+"px":"",t[v]=b?u+"px":"",t.transform="",t))}function mt(e){var t=e.state,i=e.options,n=i.gpuAcceleration,s=void 0===n||n,r=i.adaptive,o=void 0===r||r,a=i.roundOffsets,l=void 0===a||a,c={placement:Be(t.placement),variation:ht(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,gt(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,gt(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var ft={passive:!0};function bt(e){var t=e.state,i=e.instance,n=e.options,s=n.scroll,r=void 0===s||s,o=n.resize,a=void 0===o||o,l=Re(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&c.forEach(function(e){e.addEventListener("scroll",i.update,ft)}),a&&l.addEventListener("resize",i.update,ft),function(){r&&c.forEach(function(e){e.removeEventListener("scroll",i.update,ft)}),a&&l.removeEventListener("resize",i.update,ft)}}var yt={left:"right",right:"left",bottom:"top",top:"bottom"};function vt(e){return e.replace(/left|right|bottom|top/g,function(e){return yt[e]})}var _t={start:"end",end:"start"};function wt(e){return e.replace(/start|end/g,function(e){return _t[e]})}function xt(e){var t=Re(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function kt(e){return We(Je(e)).left+xt(e).scrollLeft}function At(e,t){var i=Re(e),n=Je(e),s=i.visualViewport,r=n.clientWidth,o=n.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;var c=Ve();(c||!c&&"fixed"===t)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:o,x:a+kt(e),y:l}}function St(e){var t,i=Je(e),n=xt(e),s=null==(t=e.ownerDocument)?void 0:t.body,r=ze(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=ze(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+kt(e),l=-n.scrollTop;return"rtl"===Qe(s||i).direction&&(a+=ze(i.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function Ct(e){var t=Qe(e),i=t.overflow,n=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Et(e){return["html","body","#document"].indexOf(Le(e))>=0?e.ownerDocument.body:Ne(e)&&Ct(e)?e:Et(Ze(e))}function Ot(e,t){var i;void 0===t&&(t=[]);var n=Et(e),s=n===(null==(i=e.ownerDocument)?void 0:i.body),r=Re(n),o=s?[r].concat(r.visualViewport||[],Ct(n)?n:[]):n,a=t.concat(o);return s?a:a.concat(Ot(Ze(o)))}function $t(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Tt(e,t){var i=We(e,!1,"fixed"===t);return i.top=i.top+e.clientTop,i.left=i.left+e.clientLeft,i.bottom=i.top+e.clientHeight,i.right=i.left+e.clientWidth,i.width=e.clientWidth,i.height=e.clientHeight,i.x=i.left,i.y=i.top,i}function It(e,t,i){return t===Ce?$t(At(e,i)):Pe(t)?Tt(t,i):$t(St(Je(e)))}function Lt(e){var t=Ot(Ze(e)),i=["absolute","fixed"].indexOf(Qe(e).position)>=0&&Ne(e)?tt(e):e;return Pe(i)?t.filter(function(e){return Pe(e)&&Ge(e,i)&&"body"!==Le(e)}):[]}function Rt(e,t,i,n){var s="clippingParents"===t?Lt(e):[].concat(t),r=[].concat(s,[i]),o=r[0],a=r.reduce(function(t,i){var s=It(e,i,n);return t.top=ze(s.top,t.top),t.right=qe(s.right,t.right),t.bottom=qe(s.bottom,t.bottom),t.left=ze(s.left,t.left),t},It(e,o,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Pt(e){var t,i=e.reference,n=e.element,s=e.placement,r=s?Be(s):null,o=s?ht(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(r){case be:t={x:a,y:i.y-n.height};break;case ye:t={x:a,y:i.y+i.height};break;case ve:t={x:i.x+i.width,y:l};break;case _e:t={x:i.x-n.width,y:l};break;default:t={x:i.x,y:i.y}}var c=r?it(r):null;if(null!=c){var d="y"===c?"height":"width";switch(o){case ke:t[c]=t[c]-(i[d]/2-n[d]/2);break;case Ae:t[c]=t[c]+(i[d]/2-n[d]/2)}}return t}function Nt(e,t){void 0===t&&(t={});var i=t,n=i.placement,s=void 0===n?e.placement:n,r=i.strategy,o=void 0===r?e.strategy:r,a=i.boundary,l=void 0===a?Se:a,c=i.rootBoundary,d=void 0===c?Ce:c,h=i.elementContext,p=void 0===h?Ee:h,u=i.altBoundary,g=void 0!==u&&u,m=i.padding,f=void 0===m?0:m,b=ot("number"!=typeof f?f:at(f,xe)),y=p===Ee?Oe:Ee,v=e.rects.popper,_=e.elements[g?y:p],w=Rt(Pe(_)?_:_.contextElement||Je(e.elements.popper),l,d,o),x=We(e.elements.reference),k=Pt({reference:x,element:v,placement:s}),A=$t(Object.assign({},v,k)),S=p===Ee?A:x,C={top:w.top-S.top+b.top,bottom:S.bottom-w.bottom+b.bottom,left:w.left-S.left+b.left,right:S.right-w.right+b.right},E=e.modifiersData.offset;if(p===Ee&&E){var O=E[s];Object.keys(C).forEach(function(e){var t=[ve,ye].indexOf(e)>=0?1:-1,i=[be,ye].indexOf(e)>=0?"y":"x";C[e]+=O[i]*t})}return C}function jt(e,t){void 0===t&&(t={});var i=t,n=i.placement,s=i.boundary,r=i.rootBoundary,o=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?Te:l,d=ht(n),h=d?a?$e:$e.filter(function(e){return ht(e)===d}):xe,p=h.filter(function(e){return c.indexOf(e)>=0});0===p.length&&(p=h);var u=p.reduce(function(t,i){return t[i]=Nt(e,{placement:i,boundary:s,rootBoundary:r,padding:o})[Be(i)],t},{});return Object.keys(u).sort(function(e,t){return u[e]-u[t]})}function Dt(e){if(Be(e)===we)return[];var t=vt(e);return[wt(e),t,wt(t)]}function Ft(e){var t=e.state,i=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var s=i.mainAxis,r=void 0===s||s,o=i.altAxis,a=void 0===o||o,l=i.fallbackPlacements,c=i.padding,d=i.boundary,h=i.rootBoundary,p=i.altBoundary,u=i.flipVariations,g=void 0===u||u,m=i.allowedAutoPlacements,f=t.options.placement,b=Be(f),y=l||(b===f||!g?[vt(f)]:Dt(f)),v=[f].concat(y).reduce(function(e,i){return e.concat(Be(i)===we?jt(t,{placement:i,boundary:d,rootBoundary:h,padding:c,flipVariations:g,allowedAutoPlacements:m}):i)},[]),_=t.rects.reference,w=t.rects.popper,x=new Map,k=!0,A=v[0],S=0;S<v.length;S++){var C=v[S],E=Be(C),O=ht(C)===ke,$=[be,ye].indexOf(E)>=0,T=$?"width":"height",I=Nt(t,{placement:C,boundary:d,rootBoundary:h,altBoundary:p,padding:c}),L=$?O?ve:_e:O?ye:be;_[T]>w[T]&&(L=vt(L));var R=vt(L),P=[];if(r&&P.push(I[E]<=0),a&&P.push(I[L]<=0,I[R]<=0),P.every(function(e){return e})){A=C,k=!1;break}x.set(C,P)}if(k)for(var N=function(e){var t=v.find(function(t){var i=x.get(t);if(i)return i.slice(0,e).every(function(e){return e})});if(t)return A=t,"break"},j=g?3:1;j>0;j--){if("break"===N(j))break}t.placement!==A&&(t.modifiersData[n]._skip=!0,t.placement=A,t.reset=!0)}}function Mt(e,t,i){return void 0===i&&(i={x:0,y:0}),{top:e.top-t.height-i.y,right:e.right-t.width+i.x,bottom:e.bottom-t.height+i.y,left:e.left-t.width-i.x}}function Bt(e){return[be,ve,ye,_e].some(function(t){return e[t]>=0})}function zt(e){var t=e.state,i=e.name,n=t.rects.reference,s=t.rects.popper,r=t.modifiersData.preventOverflow,o=Nt(t,{elementContext:"reference"}),a=Nt(t,{altBoundary:!0}),l=Mt(o,n),c=Mt(a,s,r),d=Bt(l),h=Bt(c);t.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":h})}function qt(e,t,i){var n=Be(e),s=[_e,be].indexOf(n)>=0?-1:1,r="function"==typeof i?i(Object.assign({},t,{placement:e})):i,o=r[0],a=r[1];return o=o||0,a=(a||0)*s,[_e,ve].indexOf(n)>=0?{x:a,y:o}:{x:o,y:a}}function Ut(e){var t=e.state,i=e.options,n=e.name,s=i.offset,r=void 0===s?[0,0]:s,o=Te.reduce(function(e,i){return e[i]=qt(i,t.rects,r),e},{}),a=o[t.placement],l=a.x,c=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=o}function Ht(e){var t=e.state,i=e.name;t.modifiersData[i]=Pt({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}function Vt(e){return"x"===e?"y":"x"}function Wt(e){var t=e.state,i=e.options,n=e.name,s=i.mainAxis,r=void 0===s||s,o=i.altAxis,a=void 0!==o&&o,l=i.boundary,c=i.rootBoundary,d=i.altBoundary,h=i.padding,p=i.tether,u=void 0===p||p,g=i.tetherOffset,m=void 0===g?0:g,f=Nt(t,{boundary:l,rootBoundary:c,padding:h,altBoundary:d}),b=Be(t.placement),y=ht(t.placement),v=!y,_=it(b),w=Vt(_),x=t.modifiersData.popperOffsets,k=t.rects.reference,A=t.rects.popper,S="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,C="number"==typeof S?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),E=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,O={x:0,y:0};if(x){if(r){var $,T="y"===_?be:_e,I="y"===_?ye:ve,L="y"===_?"height":"width",R=x[_],P=R+f[T],N=R-f[I],j=u?-A[L]/2:0,D=y===ke?k[L]:A[L],F=y===ke?-A[L]:-k[L],M=t.elements.arrow,B=u&&M?Ye(M):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:rt(),q=z[T],U=z[I],H=nt(0,k[L],B[L]),V=v?k[L]/2-j-H-q-C.mainAxis:D-H-q-C.mainAxis,W=v?-k[L]/2+j+H+U+C.mainAxis:F+H+U+C.mainAxis,Y=t.elements.arrow&&tt(t.elements.arrow),G=Y?"y"===_?Y.clientTop||0:Y.clientLeft||0:0,Q=null!=($=null==E?void 0:E[_])?$:0,K=R+W-Q,J=nt(u?qe(P,R+V-Q-G):P,R,u?ze(N,K):N);x[_]=J,O[_]=J-R}if(a){var Z,X="x"===_?be:_e,ee="x"===_?ye:ve,te=x[w],ie="y"===w?"height":"width",ne=te+f[X],se=te-f[ee],re=-1!==[be,_e].indexOf(b),oe=null!=(Z=null==E?void 0:E[w])?Z:0,ae=re?ne:te-k[ie]-A[ie]-oe+C.altAxis,le=re?te+k[ie]+A[ie]-oe-C.altAxis:se,ce=u&&re?st(ae,te,le):nt(u?ae:ne,te,u?le:se);x[w]=ce,O[w]=ce-te}t.modifiersData[n]=O}}function Yt(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Gt(e){return e!==Re(e)&&Ne(e)?Yt(e):xt(e)}function Qt(e){var t=e.getBoundingClientRect(),i=Ue(t.width)/e.offsetWidth||1,n=Ue(t.height)/e.offsetHeight||1;return 1!==i||1!==n}function Kt(e,t,i){void 0===i&&(i=!1);var n=Ne(t),s=Ne(t)&&Qt(t),r=Je(t),o=We(e,s,i),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!i)&&(("body"!==Le(t)||Ct(r))&&(a=Gt(t)),Ne(t)?((l=We(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):r&&(l.x=kt(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function Jt(e){var t=new Map,i=new Set,n=[];function s(e){i.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!i.has(e)){var n=t.get(e);n&&s(n)}}),n.push(e)}return e.forEach(function(e){t.set(e.name,e)}),e.forEach(function(e){i.has(e.name)||s(e)}),n}function Zt(e){var t=Jt(e);return Ie.reduce(function(e,i){return e.concat(t.filter(function(e){return e.phase===i}))},[])}function Xt(e){var t;return function(){return t||(t=new Promise(function(i){Promise.resolve().then(function(){t=void 0,i(e())})})),t}}function ei(e){var t=e.reduce(function(e,t){var i=e[t.name];return e[t.name]=i?Object.assign({},i,t,{options:Object.assign({},i.options,t.options),data:Object.assign({},i.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}var ti={placement:"bottom",modifiers:[],strategy:"absolute"};function ii(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}function ni(e){void 0===e&&(e={});var t=e,i=t.defaultModifiers,n=void 0===i?[]:i,s=t.defaultOptions,r=void 0===s?ti:s;return function(e,t,i){void 0===i&&(i=r);var s={placement:"bottom",orderedModifiers:[],options:Object.assign({},ti,r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,l={state:s,setOptions:function(i){var o="function"==typeof i?i(s.options):i;d(),s.options=Object.assign({},r,s.options,o),s.scrollParents={reference:Pe(e)?Ot(e):e.contextElement?Ot(e.contextElement):[],popper:Ot(t)};var a=Zt(ei([].concat(n,s.options.modifiers)));return s.orderedModifiers=a.filter(function(e){return e.enabled}),c(),l.update()},forceUpdate:function(){if(!a){var e=s.elements,t=e.reference,i=e.popper;if(ii(t,i)){s.rects={reference:Kt(t,tt(i),"fixed"===s.options.strategy),popper:Ye(i)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var r=s.orderedModifiers[n],o=r.fn,c=r.options,d=void 0===c?{}:c,h=r.name;"function"==typeof o&&(s=o({state:s,options:d,name:h,instance:l})||s)}else s.reset=!1,n=-1}}},update:Xt(function(){return new Promise(function(e){l.forceUpdate(),e(s)})}),destroy:function(){d(),a=!0}};if(!ii(e,t))return l;function c(){s.orderedModifiers.forEach(function(e){var t=e.name,i=e.options,n=void 0===i?{}:i,r=e.effect;if("function"==typeof r){var a=r({state:s,name:t,instance:l,options:n}),c=function(){};o.push(a||c)}})}function d(){o.forEach(function(e){return e()}),o=[]}return l.setOptions(i).then(function(e){!a&&i.onFirstUpdate&&i.onFirstUpdate(e)}),l}}var si=ni({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:bt,data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:Ht,data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mt,data:{}},Me,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ut},{name:"flip",enabled:!0,phase:"main",fn:Ft,requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:Wt,requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:ct,effect:dt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:zt}]}),ri="tippy-box",oi="tippy-content",ai="tippy-backdrop",li="tippy-arrow",ci="tippy-svg-arrow",di={passive:!0,capture:!0},hi=function(){return document.body};function pi(e,t,i){if(Array.isArray(e)){var n=e[t];return n??(Array.isArray(i)?i[t]:i)}return e}function ui(e,t){var i={}.toString.call(e);return 0===i.indexOf("[object")&&i.indexOf(t+"]")>-1}function gi(e,t){return"function"==typeof e?e.apply(void 0,t):e}function mi(e,t){return 0===t?e:function(n){clearTimeout(i),i=setTimeout(function(){e(n)},t)};var i}function fi(e){return e.split(/\s+/).filter(Boolean)}function bi(e){return[].concat(e)}function yi(e,t){-1===e.indexOf(t)&&e.push(t)}function vi(e){return e.filter(function(t,i){return e.indexOf(t)===i})}function _i(e){return e.split("-")[0]}function wi(e){return[].slice.call(e)}function xi(e){return Object.keys(e).reduce(function(t,i){return void 0!==e[i]&&(t[i]=e[i]),t},{})}function ki(){return document.createElement("div")}function Ai(e){return["Element","Fragment"].some(function(t){return ui(e,t)})}function Si(e){return ui(e,"NodeList")}function Ci(e){return ui(e,"MouseEvent")}function Ei(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function Oi(e){return Ai(e)?[e]:Si(e)?wi(e):Array.isArray(e)?e:wi(document.querySelectorAll(e))}function $i(e,t){e.forEach(function(e){e&&(e.style.transitionDuration=t+"ms")})}function Ti(e,t){e.forEach(function(e){e&&e.setAttribute("data-state",t)})}function Ii(e){var t,i=bi(e)[0];return null!=i&&null!=(t=i.ownerDocument)&&t.body?i.ownerDocument:document}function Li(e,t){var i=t.clientX,n=t.clientY;return e.every(function(e){var t=e.popperRect,s=e.popperState,r=e.props.interactiveBorder,o=_i(s.placement),a=s.modifiersData.offset;if(!a)return!0;var l="bottom"===o?a.top.y:0,c="top"===o?a.bottom.y:0,d="right"===o?a.left.x:0,h="left"===o?a.right.x:0,p=t.top-n+l>r,u=n-t.bottom-c>r,g=t.left-i+d>r,m=i-t.right-h>r;return p||u||g||m})}function Ri(e,t,i){var n=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(t){e[n](t,i)})}function Pi(e,t){for(var i=t;i;){var n;if(e.contains(i))return!0;i=null==i.getRootNode||null==(n=i.getRootNode())?void 0:n.host}return!1}var Ni={isTouch:!1},ji=0;function Di(){Ni.isTouch||(Ni.isTouch=!0,window.performance&&document.addEventListener("mousemove",Fi))}function Fi(){var e=performance.now();e-ji<20&&(Ni.isTouch=!1,document.removeEventListener("mousemove",Fi)),ji=e}function Mi(){var e=document.activeElement;if(Ei(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function Bi(){document.addEventListener("touchstart",Di,di),window.addEventListener("blur",Mi)}var zi=!!("undefined"!=typeof window&&"undefined"!=typeof document)&&!!window.msCrypto,qi={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Ui={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},Hi=Object.assign({appendTo:hi,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},qi,Ui),Vi=Object.keys(Hi),Wi=function(e){Object.keys(e).forEach(function(t){Hi[t]=e[t]})};function Yi(e){var t=(e.plugins||[]).reduce(function(t,i){var n,s=i.name,r=i.defaultValue;s&&(t[s]=void 0!==e[s]?e[s]:null!=(n=Hi[s])?n:r);return t},{});return Object.assign({},e,t)}function Gi(e,t){var i=(t?Object.keys(Yi(Object.assign({},Hi,{plugins:t}))):Vi).reduce(function(t,i){var n=(e.getAttribute("data-tippy-"+i)||"").trim();if(!n)return t;if("content"===i)t[i]=n;else try{t[i]=JSON.parse(n)}catch(e){t[i]=n}return t},{});return i}function Qi(e,t){var i=Object.assign({},t,{content:gi(t.content,[e])},t.ignoreAttributes?{}:Gi(e,t.plugins));return i.aria=Object.assign({},Hi.aria,i.aria),i.aria={expanded:"auto"===i.aria.expanded?t.interactive:i.aria.expanded,content:"auto"===i.aria.content?t.interactive?null:"describedby":i.aria.content},i}var Ki=function(){return"innerHTML"};function Ji(e,t){e[Ki()]=t}function Zi(e){var t=ki();return!0===e?t.className=li:(t.className=ci,Ai(e)?t.appendChild(e):Ji(t,e)),t}function Xi(e,t){Ai(t.content)?(Ji(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?Ji(e,t.content):e.textContent=t.content)}function en(e){var t=e.firstElementChild,i=wi(t.children);return{box:t,content:i.find(function(e){return e.classList.contains(oi)}),arrow:i.find(function(e){return e.classList.contains(li)||e.classList.contains(ci)}),backdrop:i.find(function(e){return e.classList.contains(ai)})}}function tn(e){var t=ki(),i=ki();i.className=ri,i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var n=ki();function s(i,n){var s=en(t),r=s.box,o=s.content,a=s.arrow;n.theme?r.setAttribute("data-theme",n.theme):r.removeAttribute("data-theme"),"string"==typeof n.animation?r.setAttribute("data-animation",n.animation):r.removeAttribute("data-animation"),n.inertia?r.setAttribute("data-inertia",""):r.removeAttribute("data-inertia"),r.style.maxWidth="number"==typeof n.maxWidth?n.maxWidth+"px":n.maxWidth,n.role?r.setAttribute("role",n.role):r.removeAttribute("role"),i.content===n.content&&i.allowHTML===n.allowHTML||Xi(o,e.props),n.arrow?a?i.arrow!==n.arrow&&(r.removeChild(a),r.appendChild(Zi(n.arrow))):r.appendChild(Zi(n.arrow)):a&&r.removeChild(a)}return n.className=oi,n.setAttribute("data-state","hidden"),Xi(n,e.props),t.appendChild(i),i.appendChild(n),s(e.props,e.props),{popper:t,onUpdate:s}}tn.$$tippy=!0;var nn=1,sn=[],rn=[];function on(e,t){var i,n,s,r,o,a,l,c=Qi(e,Object.assign({},Hi,Yi(xi(t)))),d=!1,h=!1,p=!1,u=!1,g=[],m=mi(K,c.interactiveDebounce),f=nn++,b=null,y=vi(c.plugins),v={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},_={id:f,reference:e,popper:ki(),popperInstance:b,props:c,state:v,plugins:y,clearDelayTimeouts:le,setProps:ce,setContent:de,show:he,hide:pe,hideWithInteractivity:ue,enable:oe,disable:ae,unmount:ge,destroy:me};if(!c.render)return _;var w=c.render(_),x=w.popper,k=w.onUpdate;x.setAttribute("data-tippy-root",""),x.id="tippy-"+_.id,_.popper=x,e._tippy=_,x._tippy=_;var A=y.map(function(e){return e.fn(_)}),S=e.hasAttribute("aria-expanded");return Y(),j(),R(),P("onCreate",[_]),c.showOnCreate&&se(),x.addEventListener("mouseenter",function(){_.props.interactive&&_.state.isVisible&&_.clearDelayTimeouts()}),x.addEventListener("mouseleave",function(){_.props.interactive&&_.props.trigger.indexOf("mouseenter")>=0&&T().addEventListener("mousemove",m)}),_;function C(){var e=_.props.touch;return Array.isArray(e)?e:[e,0]}function E(){return"hold"===C()[0]}function O(){var e;return!(null==(e=_.props.render)||!e.$$tippy)}function $(){return l||e}function T(){var e=$().parentNode;return e?Ii(e):document}function I(){return en(x)}function L(e){return _.state.isMounted&&!_.state.isVisible||Ni.isTouch||r&&"focus"===r.type?0:pi(_.props.delay,e?0:1,Hi.delay)}function R(e){void 0===e&&(e=!1),x.style.pointerEvents=_.props.interactive&&!e?"":"none",x.style.zIndex=""+_.props.zIndex}function P(e,t,i){var n;(void 0===i&&(i=!0),A.forEach(function(i){i[e]&&i[e].apply(i,t)}),i)&&(n=_.props)[e].apply(n,t)}function N(){var t=_.props.aria;if(t.content){var i="aria-"+t.content,n=x.id;bi(_.props.triggerTarget||e).forEach(function(e){var t=e.getAttribute(i);if(_.state.isVisible)e.setAttribute(i,t?t+" "+n:n);else{var s=t&&t.replace(n,"").trim();s?e.setAttribute(i,s):e.removeAttribute(i)}})}}function j(){!S&&_.props.aria.expanded&&bi(_.props.triggerTarget||e).forEach(function(e){_.props.interactive?e.setAttribute("aria-expanded",_.state.isVisible&&e===$()?"true":"false"):e.removeAttribute("aria-expanded")})}function D(){T().removeEventListener("mousemove",m),sn=sn.filter(function(e){return e!==m})}function F(t){if(!Ni.isTouch||!p&&"mousedown"!==t.type){var i=t.composedPath&&t.composedPath()[0]||t.target;if(!_.props.interactive||!Pi(x,i)){if(bi(_.props.triggerTarget||e).some(function(e){return Pi(e,i)})){if(Ni.isTouch)return;if(_.state.isVisible&&_.props.trigger.indexOf("click")>=0)return}else P("onClickOutside",[_,t]);!0===_.props.hideOnClick&&(_.clearDelayTimeouts(),_.hide(),h=!0,setTimeout(function(){h=!1}),_.state.isMounted||q())}}}function M(){p=!0}function B(){p=!1}function z(){var e=T();e.addEventListener("mousedown",F,!0),e.addEventListener("touchend",F,di),e.addEventListener("touchstart",B,di),e.addEventListener("touchmove",M,di)}function q(){var e=T();e.removeEventListener("mousedown",F,!0),e.removeEventListener("touchend",F,di),e.removeEventListener("touchstart",B,di),e.removeEventListener("touchmove",M,di)}function U(e,t){V(e,function(){!_.state.isVisible&&x.parentNode&&x.parentNode.contains(x)&&t()})}function H(e,t){V(e,t)}function V(e,t){var i=I().box;function n(e){e.target===i&&(Ri(i,"remove",n),t())}if(0===e)return t();Ri(i,"remove",o),Ri(i,"add",n),o=n}function W(t,i,n){void 0===n&&(n=!1),bi(_.props.triggerTarget||e).forEach(function(e){e.addEventListener(t,i,n),g.push({node:e,eventType:t,handler:i,options:n})})}function Y(){E()&&(W("touchstart",Q,{passive:!0}),W("touchend",J,{passive:!0})),fi(_.props.trigger).forEach(function(e){if("manual"!==e)switch(W(e,Q),e){case"mouseenter":W("mouseleave",J);break;case"focus":W(zi?"focusout":"blur",Z);break;case"focusin":W("focusout",Z)}})}function G(){g.forEach(function(e){var t=e.node,i=e.eventType,n=e.handler,s=e.options;t.removeEventListener(i,n,s)}),g=[]}function Q(e){var t,i=!1;if(_.state.isEnabled&&!X(e)&&!h){var n="focus"===(null==(t=r)?void 0:t.type);r=e,l=e.currentTarget,j(),!_.state.isVisible&&Ci(e)&&sn.forEach(function(t){return t(e)}),"click"===e.type&&(_.props.trigger.indexOf("mouseenter")<0||d)&&!1!==_.props.hideOnClick&&_.state.isVisible?i=!0:se(e),"click"===e.type&&(d=!i),i&&!n&&re(e)}}function K(e){var t=e.target,i=$().contains(t)||x.contains(t);if("mousemove"!==e.type||!i){var n=ne().concat(x).map(function(e){var t,i=null==(t=e._tippy.popperInstance)?void 0:t.state;return i?{popperRect:e.getBoundingClientRect(),popperState:i,props:c}:null}).filter(Boolean);Li(n,e)&&(D(),re(e))}}function J(e){X(e)||_.props.trigger.indexOf("click")>=0&&d||(_.props.interactive?_.hideWithInteractivity(e):re(e))}function Z(e){_.props.trigger.indexOf("focusin")<0&&e.target!==$()||_.props.interactive&&e.relatedTarget&&x.contains(e.relatedTarget)||re(e)}function X(e){return!!Ni.isTouch&&E()!==e.type.indexOf("touch")>=0}function ee(){te();var t=_.props,i=t.popperOptions,n=t.placement,s=t.offset,r=t.getReferenceClientRect,o=t.moveTransition,l=O()?en(x).arrow:null,c=r?{getBoundingClientRect:r,contextElement:r.contextElement||$()}:e,d={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(O()){var i=I().box;["placement","reference-hidden","escaped"].forEach(function(e){"placement"===e?i.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?i.setAttribute("data-"+e,""):i.removeAttribute("data-"+e)}),t.attributes.popper={}}}},h=[{name:"offset",options:{offset:s}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!o}},d];O()&&l&&h.push({name:"arrow",options:{element:l,padding:3}}),h.push.apply(h,(null==i?void 0:i.modifiers)||[]),_.popperInstance=si(c,x,Object.assign({},i,{placement:n,onFirstUpdate:a,modifiers:h}))}function te(){_.popperInstance&&(_.popperInstance.destroy(),_.popperInstance=null)}function ie(){var e,t=_.props.appendTo,i=$();(e=_.props.interactive&&t===hi||"parent"===t?i.parentNode:gi(t,[i])).contains(x)||e.appendChild(x),_.state.isMounted=!0,ee()}function ne(){return wi(x.querySelectorAll("[data-tippy-root]"))}function se(e){_.clearDelayTimeouts(),e&&P("onTrigger",[_,e]),z();var t=L(!0),n=C(),s=n[0],r=n[1];Ni.isTouch&&"hold"===s&&r&&(t=r),t?i=setTimeout(function(){_.show()},t):_.show()}function re(e){if(_.clearDelayTimeouts(),P("onUntrigger",[_,e]),_.state.isVisible){if(!(_.props.trigger.indexOf("mouseenter")>=0&&_.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&d)){var t=L(!1);t?n=setTimeout(function(){_.state.isVisible&&_.hide()},t):s=requestAnimationFrame(function(){_.hide()})}}else q()}function oe(){_.state.isEnabled=!0}function ae(){_.hide(),_.state.isEnabled=!1}function le(){clearTimeout(i),clearTimeout(n),cancelAnimationFrame(s)}function ce(t){if(!_.state.isDestroyed){P("onBeforeUpdate",[_,t]),G();var i=_.props,n=Qi(e,Object.assign({},i,xi(t),{ignoreAttributes:!0}));_.props=n,Y(),i.interactiveDebounce!==n.interactiveDebounce&&(D(),m=mi(K,n.interactiveDebounce)),i.triggerTarget&&!n.triggerTarget?bi(i.triggerTarget).forEach(function(e){e.removeAttribute("aria-expanded")}):n.triggerTarget&&e.removeAttribute("aria-expanded"),j(),R(),k&&k(i,n),_.popperInstance&&(ee(),ne().forEach(function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})),P("onAfterUpdate",[_,t])}}function de(e){_.setProps({content:e})}function he(){var e=_.state.isVisible,t=_.state.isDestroyed,i=!_.state.isEnabled,n=Ni.isTouch&&!_.props.touch,s=pi(_.props.duration,0,Hi.duration);if(!(e||t||i||n||$().hasAttribute("disabled")||(P("onShow",[_],!1),!1===_.props.onShow(_)))){if(_.state.isVisible=!0,O()&&(x.style.visibility="visible"),R(),z(),_.state.isMounted||(x.style.transition="none"),O()){var r=I();$i([r.box,r.content],0)}a=function(){var e;if(_.state.isVisible&&!u){if(u=!0,x.offsetHeight,x.style.transition=_.props.moveTransition,O()&&_.props.animation){var t=I(),i=t.box,n=t.content;$i([i,n],s),Ti([i,n],"visible")}N(),j(),yi(rn,_),null==(e=_.popperInstance)||e.forceUpdate(),P("onMount",[_]),_.props.animation&&O()&&H(s,function(){_.state.isShown=!0,P("onShown",[_])})}},ie()}}function pe(){var e=!_.state.isVisible,t=_.state.isDestroyed,i=!_.state.isEnabled,n=pi(_.props.duration,1,Hi.duration);if(!(e||t||i)&&(P("onHide",[_],!1),!1!==_.props.onHide(_))){if(_.state.isVisible=!1,_.state.isShown=!1,u=!1,d=!1,O()&&(x.style.visibility="hidden"),D(),q(),R(!0),O()){var s=I(),r=s.box,o=s.content;_.props.animation&&($i([r,o],n),Ti([r,o],"hidden"))}N(),j(),_.props.animation?O()&&U(n,_.unmount):_.unmount()}}function ue(e){T().addEventListener("mousemove",m),yi(sn,m),m(e)}function ge(){_.state.isVisible&&_.hide(),_.state.isMounted&&(te(),ne().forEach(function(e){e._tippy.unmount()}),x.parentNode&&x.parentNode.removeChild(x),rn=rn.filter(function(e){return e!==_}),_.state.isMounted=!1,P("onHidden",[_]))}function me(){_.state.isDestroyed||(_.clearDelayTimeouts(),_.unmount(),G(),delete e._tippy,_.state.isDestroyed=!0,P("onDestroy",[_]))}}function an(e,t){void 0===t&&(t={});var i=Hi.plugins.concat(t.plugins||[]);Bi();var n=Object.assign({},t,{plugins:i}),s=Oi(e).reduce(function(e,t){var i=t&&on(t,n);return i&&e.push(i),e},[]);return Ai(e)?s[0]:s}function ln(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,(e,t)=>0===+e?"":0===t?e.toLowerCase():e.toUpperCase()).replace("-","")}an.defaultProps=Hi,an.setDefaultProps=Wi,an.currentInput=Ni,Object.assign({},Me,{effect:function(e){var t=e.state,i={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,i.popper),t.styles=i,t.elements.arrow&&Object.assign(t.elements.arrow.style,i.arrow)}}),an.setDefaultProps({render:tn});const cn='\n    .tippy-box[data-animation=fade][data-state=hidden] {\n        opacity: 0\n    }\n\n    .tippy-iOS {\n        cursor: pointer!important;\n        -webkit-tap-highlight-color: transparent\n    }\n\n    [data-tippy-root] {\n        max-width: calc(100vw - 10px)\n    }\n\n    .tippy-box {\n        position: relative;\n        background-color: #333;\n        color: #fff;\n        border-radius: 4px;\n        font-size: clamp(\n          calc(var(--pb-popover-font-size, 1rem) * var(--pb-min-zoom, 0.5)), \n          calc(var(--pb-popover-font-size, 1rem) * var(--pb-zoom-factor)), \n          calc(var(--pb-popover-font-size, 1rem) * var(--pb-max-zoom, 3.0))\n        );\n        line-height: calc(var(--pb-popover-line-height, 1.5) * var(--pb-zoom-factor));\n\n        text-align: left;\n        font-style: normal;\n        font-weight: normal;\n        outline: 0;\n        transition-property: transform, visibility, opacity;\n    }\n\n    .tippy-box[data-placement^=top]>.tippy-arrow {\n        bottom: 0\n    }\n\n    .tippy-box[data-placement^=top]>.tippy-arrow:before {\n        bottom: -7px;\n        left: 0;\n        border-width: 8px 8px 0;\n        border-top-color: initial;\n        transform-origin: center top\n    }\n\n    .tippy-box[data-placement^=bottom]>.tippy-arrow {\n        top: 0\n    }\n\n    .tippy-box[data-placement^=bottom]>.tippy-arrow:before {\n        top: -7px;\n        left: 0;\n        border-width: 0 8px 8px;\n        border-bottom-color: initial;\n        transform-origin: center bottom\n    }\n\n    .tippy-box[data-placement^=left]>.tippy-arrow {\n        right: 0\n    }\n\n    .tippy-box[data-placement^=left]>.tippy-arrow:before {\n        border-width: 8px 0 8px 8px;\n        border-left-color: initial;\n        right: -7px;\n        transform-origin: center left\n    }\n\n    .tippy-box[data-placement^=right]>.tippy-arrow {\n        left: 0\n    }\n\n    .tippy-box[data-placement^=right]>.tippy-arrow:before {\n        left: -7px;\n        border-width: 8px 8px 8px 0;\n        border-right-color: initial;\n        transform-origin: center right\n    }\n\n    .tippy-box[data-inertia][data-state=visible] {\n        transition-timing-function: cubic-bezier(.54, 1.5, .38, 1.11)\n    }\n\n    .tippy-arrow {\n        width: 16px;\n        height: 16px;\n        color: #333\n    }\n\n    .tippy-arrow:before {\n        content: "";\n        position: absolute;\n        border-color: transparent;\n        border-style: solid\n    }\n\n    .tippy-content {\n        position: relative;\n        padding: 5px 9px;\n        z-index: 1;\n        overflow: auto;\n        max-height: var(--pb-popover-max-height, calc(100vh - 60px));\n        min-height: var(--pb-popover-min-height, auto);\n        max-width: var(--pb-popover-max-width, auto);\n        min-width: var(--pb-popover-min-width, auto);\n        color: var(--pb-popover-color);\n    }\n',dn='\n    .tippy-box[data-theme~=light-border] {\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid rgba(0, 8, 16, .15);\n        color: #333;\n        box-shadow: 0 4px 14px -2px rgba(0, 8, 16, .08)\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-backdrop {\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-arrow:after, .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after {\n        content: "";\n        position: absolute;\n        z-index: -1\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-arrow:after {\n        border-color: transparent;\n        border-style: solid\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after {\n        border-top-color: rgba(0, 8, 16, .2);\n        border-width: 7px 7px 0;\n        top: 17px;\n        left: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg {\n        top: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after {\n        top: 17px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #fff;\n        bottom: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after {\n        border-bottom-color: rgba(0, 8, 16, .2);\n        border-width: 0 7px 7px;\n        bottom: 17px;\n        left: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg {\n        bottom: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after {\n        bottom: 17px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after {\n        border-left-color: rgba(0, 8, 16, .2);\n        border-width: 7px 0 7px 7px;\n        left: 17px;\n        top: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg {\n        left: 11px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after {\n        left: 12px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #fff;\n        right: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after {\n        border-width: 7px 7px 7px 0;\n        right: 17px;\n        top: 1px;\n        border-right-color: rgba(0, 8, 16, .2)\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg {\n        right: 11px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after {\n        right: 12px\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-svg-arrow {\n        fill: #fff\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after {\n        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);\n        background-size: 16px 6px;\n        width: 16px;\n        height: 6px\n    }\n',hn="\n    .tippy-box[data-theme~=light] {\n        color: #26323d;\n        box-shadow: 0 0 20px 4px rgba(154, 161, 177, .15), 0 4px 80px -8px rgba(36, 40, 47, .25), 0 4px 4px -2px rgba(91, 94, 105, .15);\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #fff\n    }\n\n    .tippy-box[data-theme~=light]>.tippy-backdrop {\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light]>.tippy-svg-arrow {\n        fill: #fff\n    }",pn="\n    .tippy-box[data-theme~=material] {\n        background-color: #505355;\n        font-weight: 600\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #505355\n    }\n\n    .tippy-box[data-theme~=material]>.tippy-backdrop {\n        background-color: #505355\n    }\n\n    .tippy-box[data-theme~=material]>.tippy-svg-arrow {\n        fill: #505355\n    }\n",un="\n    .tippy-box[data-theme~=translucent] {\n        background-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-arrow {\n        width: 14px;\n        height: 14px\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=top]>.tippy-arrow:before {\n        border-width: 7px 7px 0;\n        border-top-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=bottom]>.tippy-arrow:before {\n        border-width: 0 7px 7px;\n        border-bottom-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=left]>.tippy-arrow:before {\n        border-width: 7px 0 7px 7px;\n        border-left-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=right]>.tippy-arrow:before {\n        border-width: 7px 7px 7px 0;\n        border-right-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-backdrop {\n        background-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-svg-arrow {\n        fill: rgba(0, 0, 0, .7)\n    }\n";var gn=Object.freeze({__proto__:null,base:cn,camelize:ln,light:hn,lightBorder:dn,material:pn,translucent:un});function mn(e,t,i){if(!e.querySelector(`#pb-popover-${t}`)){const n=e.nodeType===Node.DOCUMENT_NODE?document.head:e;console.log("Loading tippy styles for theme %s into %o",t,n);const s=document.createElement("style");s.type="text/css",s.id=`pb-popover-${t}`,s.innerHTML=i,n.appendChild(s)}}function fn(e,t){if(mn(e,"base",cn),t&&"none"!==t){const i=ln(t),n=gn[i];n&&mn(e,i,n)}}class bn extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{for:{type:String},theme:{type:String},placement:{type:String},fallbackPlacement:{type:String,attribute:"fallback-placement"},persistent:{type:Boolean},trigger:{type:String},touch:{type:String},popupClass:{type:String,attribute:"popup-class"},remote:{type:String},stopPropagation:{type:Boolean,attribute:"stop-propagation"}})}constructor(){super(),this.persistent=!1,this.trigger=null,this.for=null,this.theme=null,this.placement=null,this.touch=null,this.fallbackPlacement=null,this.popupClass=null,this.stopPropagation=!1,this._tippy=null,this._content=null}render(){return this.for?t`<div class="hidden"><slot></slot></div>`:t`<span id="link" part="trigger" class="${this.persistent?"persistent":""}"
        ><slot name="default"><slot></slot></slot></span
      ><span class="hidden"><slot name="alternate"></slot></span>`}disconnectedCallback(){super.disconnectedCallback(),this._tippy&&this._tippy.destroy(),this._observer&&this._observer.disconnect()}_checkCSSProperties(){if(this.theme||"none"===this.theme||(this.theme=e(this,"--pb-popover-theme","none")),this.placement||(this.placement=e(this,"--pb-popover-placement","auto")),this.fallbackPlacement||(this.fallbackPlacement=e(this,"--pb-popover-fallback-placement",null)),this.persistent||(this.persistent=e(this,"--pb-popover-persistent",!1)),this.trigger||(this.trigger=e(this,"--pb-popover-trigger",null)),!this.touch){const t=e(this,"--pb-popover-touch","hold");this.touch="true"===t||t}}_injectStyles(){this._checkCSSProperties(),fn(this.getRootNode(),this.theme)}_getContent(){if(this._content)return this._content;const e=this._getSlot();if(e){const t=document.createElement("div");return e.assignedNodes().forEach(e=>{t.appendChild(e.content?e.content.cloneNode(!0):e.cloneNode(!0))}),this._content=t,t}return null}_getSlot(){return this.for?this.shadowRoot.querySelector("slot"):this.shadowRoot.querySelector("[name=alternate]")}_registerMutationObserver(){const e=this._getSlot();this._observer=new MutationObserver(()=>{this.alternate=this._getContent(),console.log("alternate changed"),this.emitTo("pb-popover-changed",this.alternate)}),this._observer.observe(this,{subtree:!0,childList:!0,characterData:!0}),e&&e.assignedNodes().forEach(e=>{this._observer.observe(e.content?e.content:e,{subtree:!0,childList:!0,characterData:!0})})}get alternate(){return this._getContent()}set alternate(e){this._content=e,this._tippy&&this._tippy.setContent(this._content)}command(e,t){"disable"===e&&(this.disabled=t,this._tippy&&(t?this._tippy.disable():this._tippy.enable()))}firstUpdated(){super.firstUpdated(),this._injectStyles(),this._registerMutationObserver(),this.trigger||(this.trigger=this.persistent?"click":"mouseenter");const e=this.getRootNode();let t;if(this.for?(t=e.getElementById(this.for),t||console.error("<pb-popover> target element %s not found",this.for)):t=this.shadowRoot.getElementById("link"),t){const i={allowHTML:!0,appendTo:e.nodeType===Node.DOCUMENT_NODE?document.body:e,placement:this.placement,interactive:!0,ignoreAttributes:!0,boundary:"viewport",maxWidth:"none",touch:this.touch,hideOnClick:!1,trigger:this.trigger};if(this.stopPropagation&&(i.onTrigger=(e,t)=>{t.stopPropagation()}),this.persistent&&(i.onClickOutside=(e,t)=>{e.hideWithInteractivity(t)}),this.theme&&"none"!==this.theme&&(i.theme=this.theme),this.fallbackPlacement){const e=this.fallbackPlacement.split(" ");i.popperOptions={modifiers:[{name:"flip",options:{fallbackPlacements:e}}]}}this.popupClass&&(i.onCreate=e=>{e.popper.classList.add(this.popupClass)}),i.onShow=e=>{this.remote?this._loadRemoteContent():e.setContent(this._getContent()),this.emitTo("pb-popover-show",{source:this,popup:e})},this._tippy=an(t,i)}}_loadRemoteContent(){const e=this.toAbsoluteURL(this.remote);fetch(e,{method:"GET",mode:"cors",credentials:"same-origin"}).then(e=>e.text()).then(e=>{this.alternate=e}).catch(e=>{console.error("<pb-popover> Error retrieving remote content: %o",e)})}static get styles(){return[n`
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
      `]}}customElements.define("pb-popover",bn);class yn extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{key:{type:String},duration:{type:Number},scroll:{type:Boolean},highlightSelf:{type:Boolean,attribute:"highlight-self"},_className:{type:String}})}constructor(){super(),this.key=null,this.duration=0,this.scroll=!1,this.highlightSelf=!1,this._className="highlight-off"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-highlight-on",this._highlightOn.bind(this)),this.subscribeTo("pb-highlight-off",this._highlightOff.bind(this))}command(e,t){super.command(e,t),this.disabled&&(this._className="highlight-off")}_mouseOver(){this.emitTo("pb-highlight-off",{source:this}),this.highlightSelf&&this._highlightOn({detail:{id:this.key}}),this.emitTo("pb-highlight-on",{id:this.key,source:this,scroll:this.scroll})}render(){return this.disabled?t`<slot></slot>`:t`<span id="content" class="${this._className}" @mouseover="${this._mouseOver}"
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
    `}_highlightOn(e){e.detail.source!=this&&e.detail.id===this.key&&(this._className="highlight-on",e.detail.scroll&&0==this.disabled&&this.scrollIntoView({block:"center",behaviour:"smooth"}),this.duration>0&&setTimeout(()=>{this._className="highlight-off"},this.duration))}_highlightOff(e){e.detail.source!=this&&(this._className="highlight-off")}}customElements.define("pb-highlight",yn);class vn extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{xmlId:{type:String,attribute:"xml-id"},nodeId:{type:String,attribute:"node-id",reflect:!0},hash:{type:String,reflect:!0},xpath:{type:String,reflect:!0},path:{type:String},odd:{type:String},view:{type:String},params:{type:Object},history:{type:Boolean}})}constructor(){super(),this.history=!0,this.params=null}connectedCallback(){super.connectedCallback(),this._id=this.nodeId,this.subscribeTo("pb-visible",e=>{if(this.nodeId){const[t,i]=e.detail.data.split(/\s*,\s*/);this.nodeId!==t||this.hash&&this.hash!==i?this.classList.remove("active"):(this.classList.add("active"),this.scrollIntoView({block:"nearest"}),this.dispatchEvent(new CustomEvent("pb-collapse-open",{composed:!0,bubbles:!0})))}}),this._content=this.innerHTML,this.innerHTML=""}render(){return t`<button @click="${this._onClick}" type="button">
      ${v(this._content)}
    </button>`}createRenderRoot(){return this}_onClick(e){e.preventDefault();const t={id:null,root:null};this.xmlId?t.id=this.xmlId:this.nodeId&&(t.root=this.nodeId),this.path&&(t.path=this.path),this.odd&&(t.odd=this.odd),this.hash&&(t.hash=this.hash),this.view&&(t.view=this.view),this.xpath&&(t.xpath=this.xpath),this.params&&Object.assign(t,this.params),this.history&&y.commit(this,t),this.emitTo("pb-refresh",t)}}customElements.define("pb-link",vn);class _n extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{facs:{type:String},coordinates:{type:Array},label:{type:String},order:{type:Number},trigger:{type:String},emitOnLoad:{type:Boolean,attribute:"emit-on-load",reflect:!0}})}constructor(){super(),this.trigger="click",this.label="",this.order=Number.POSITIVE_INFINITY,this.waitFor="pb-facsimile,pb-image-strip,pb-tify",this.default="",this._loaded=!1}connectedCallback(){super.connectedCallback(),!0===this.emitOnLoad&&this.facs&&""!==this.facs.trim()&&this.wait(()=>{this.emitTo("pb-load-facsimile",{url:this.getImage(),order:this.getOrder(),element:this})})}getImage(){return this.facs}getLabel(){return this.label}getOrder(){return this.order}firstUpdated(){this.shadowRoot.querySelector("a").addEventListener(this.trigger,this._linkListener.bind(this)),!0===this.emitOnLoad&&this.wait(()=>{this._trigger()})}render(){return t`<a href="javascript:;"><slot>${this.default}</slot></a>`}static get styles(){return n`
      :host {
      }

      a,
      a:link {
        text-decoration: none;
        color: inherit;
      }
    `}_linkListener(e){e.preventDefault(),this._trigger()}_trigger(){console.log("<facs-link> %s %o",this.facs,this.coordinates),this.facs&&""!==this.facs.trim()?(!0===this.emitOnLoad||this._loaded||(this._loaded=!0,this.emitTo("pb-load-facsimile",{url:this.getImage(),order:this.getOrder(),element:this})),!0===this.emitOnLoad&&this.emitTo("pb-show-annotation",{element:this,file:this.facs,order:this.getOrder(),coordinates:this.coordinates})):console.warn("<pb-facs-link> No facs URL provided")}}customElements.define("pb-facs-link",_n);class wn extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{items:{type:Array},imageWidth:{attribute:"image-width",type:Number},imageHeight:{attribute:"image-height",type:Number},baseUri:{attribute:"base-uri",type:String}})}constructor(){super(),this.items=[],this.urls=new Set,this.imageHeight=80,this.imageWidth=64}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-start-update",()=>{this.items=[],this.urls=new Set,this.requestUpdate(this.items)}),this.subscribeTo("pb-load-facsimile",e=>{const{element:t,order:i}=e.detail,n=t.getImage();if(this.urls.has(n))return;this.urls.add(n);const s=this.items.map(e=>e.getOrder()).reduce((e,t,n)=>i<t?e:i===t?n:n+1,0);this.items.splice(s,0,t),this.requestUpdate()})}showIt(e){this.emitTo("pb-show-annotation",{file:e.getImage(),element:e})}renderItem(e){return t`
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
    `}}function xn(e,t){return window.ESGlobalBridge.requestAvailability(),new Promise(i=>{window.ESGlobalBridge.instance.load(e,t),window.addEventListener(`es-bridge-${e}-loaded`,()=>i(),{once:!0})})}function kn(e,t){let i=e.getRootNode();if(i.nodeType===Node.DOCUMENT_NODE)i=i.head;else{const e=document.querySelector(`style#${t.id}`);e&&e.parentNode.removeChild(e);const i=t.innerHTML.match(/@font-face[^{]+{.*?}/gs);if(i){const e=document.createElement("style");e.id=t.id,e.appendChild(document.createTextNode(i.join("\n"))),document.head.appendChild(e)}}const n=i.querySelector(`#${t.id}`);n&&n.parentNode.removeChild(n),i.appendChild(t)}function An(e,t){t.forEach(e=>{if(e.hasChildNodes()){const t=e.hasAttribute("display")||!1,i=e.querySelector("math"),n=window.MathJax.getMetricsFor(e.parentNode,t);let s,r;n.display=t,i?(r=i.outerHTML,s=window.MathJax.mathml2chtml(r,n)):(window.MathJax.texReset(),r=e.innerHTML.replaceAll(/&\w+;/g,e=>({"&amp;":"&","&lt;":"<"}[e])),s=window.MathJax.tex2chtml(r,n)),e.innerHTML="",e.appendChild(s),e.setAttribute("loaded","loaded"),e.setAttribute("source",r)}}),kn(e,window.MathJax.chtmlStylesheet())}function Sn(e){const t=e.querySelectorAll("pb-formula");if(console.log(`<pb-formula> Found ${t.length} elements to typeset ...`),t.length>0){if(window.MathJax)return void An(e,t);const i=e.querySelector("pb-formula[menu]");window.MathJax={startup:{typeset:!1,pageReady:()=>An(e,t)},options:{enableMenu:null!==i}},xn("MathJax","https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")}}customElements.get("pb-image-strip")||customElements.define("pb-image-strip",wn);class Cn extends s{static get properties(){return Object.assign({display:{type:Boolean},menu:{type:Boolean},loaded:{type:Boolean},source:{type:String}},super.properties)}constructor(){super(),this.display=!1}attributeChangedCallback(e,t,i){switch(super.attributeChangedCallback(e,t,i),e){case"loaded":this.loaded=!0;break;case"source":this.source=i}}render(){return this.hasChildNodes()?this.loaded?t`<div id="content" class="${this.display?"block":""}"><slot></slot></div>`:t`<span class="loading">${p("dialogs.loading")}</span>`:null}static get styles(){return n`
      :host {
        display: inline-block;
      }
      .block {
        display: block;
      }
      .loading {
        color: #808080;
      }
    `}}customElements.define("pb-formula",Cn);class En extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{url:{type:String},expand:{type:Boolean},src:{type:String},container:{type:String},auto:{type:Boolean},loadOnce:{type:Boolean},fixLinks:{type:Boolean,attribute:"fix-links"},start:{type:Number},useLanguage:{type:Boolean,attribute:"use-language"},noCredentials:{type:Boolean,attribute:"no-credentials"},history:{type:Boolean},event:{type:String},userParams:{type:Object},silent:{type:Boolean},plain:{type:Boolean}})}constructor(){super(),this.auto=!1,this.loadOnce=!1,this.history=!1,this.event="pb-load",this.loaded=!1,this.language=null,this.noCredentials=!1,this.silent=!1,this._retryCount=0,this._maxRetries=20}connectedCallback(){super.connectedCallback(),this.subscribeTo(this.event,e=>{a("pb-page-ready",()=>{if(this.history){if(e.detail&&e.detail.params){const{start:t}=e.detail.params;t&&y.commit(this,{start:t})}this.userParams=y.state,y.subscribe(this,e=>{e.start&&(this.start=e.start,this.load())}),y.replace(this,this.userParams)}this.load(e)})}),this.subscribeTo("pb-toggle",e=>{this.toggleFeature(e)}),this.subscribeTo("pb-document",e=>{e.detail&&e.detail.id===this.src&&(console.log(`<pb-load> Document ${this.src} is ready, triggering load`),this.load())}),this.subscribeTo("pb-i18n-update",e=>{const t=this.language&&this.language!==e.detail.language;this.language=e.detail.language,this.useLanguage&&t&&this.load()},[]),this.history&&y.subscribe(this,e=>{this.start=e.start,this.userParams=e,this.load()}),this.signalReady()}firstUpdated(){this.auto?(this.start=y.state.start||1,a("pb-page-ready",e=>{e&&e.language&&(this.language=e.language),setTimeout(()=>{this.wait(()=>this.load())},200)})):a("pb-page-ready",e=>{e&&e.language&&(this.language=e.language)})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t&&t!==i)switch(e){case"url":case"userParams":case"start":this.auto&&this.loader&&a("pb-page-ready",()=>{this.wait(()=>this.load())})}}render(){return t`
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
      <pb-dialog id="errorDialog" title="${p("dialogs.error")}">
        <p id="errorMessage"></p>
        <div slot="footer">
          <button rel="prev" type="button">${p("dialogs.close")}</button>
        </div>
      </pb-dialog>
    `}static get styles(){return n`
      :host {
        display: block;
      }
    `}toggleFeature(e){this.userParams=y.getState(this),console.log("<pb-load> toggle feature %o",this.userParams),e.detail.refresh&&(this.history&&y.commit(this,this.userParams),this.load())}getURL(e){let{url:t}=this;return this.expand&&(t=t.replace(/{([^})]+)}/g,(t,i)=>{if(!e[i])return"";const n=encodeURIComponent(e[i]||i);return delete e[i],n})),this.toAbsoluteURL(t)}load(e){if(!this.url)return;if(this.loadOnce&&this.loaded)return;this.emitTo("pb-start-update");let t={};e&&(e instanceof Event?e.detail&&e.detail.params&&(t=e.detail.params):t=e);const i=this.getDocument();if(console.log("<pb-load> getDocument() returned:",i,`src="${this.src}"`),console.log(`<pb-load> Available elements with id "${this.src}":`,document.getElementById(this.src)),i&&console.log(`<pb-load> Document found, path="${i.path}", odd="${i.odd}", view="${i.view}"`),!this.plain){if(i&&i.path)t.doc=i.path,console.log("<pb-load> Setting params.doc to:",i.path),this._retryCount=0;else{if(this.src){if(this._retryCount<this._maxRetries){this._retryCount++;const t=Math.min(100*this._retryCount,1e3);return console.warn(`<pb-load> Document with id "${this.src}" not found or not ready, retrying in ${t}ms (attempt ${this._retryCount}/${this._maxRetries})`),void setTimeout(()=>{this.load(e)},t)}return console.error(`<pb-load> Document with id "${this.src}" not found after ${this._maxRetries} attempts`),void(this.innerHTML='<pb-i18n key="dialogs.loading">Loading...</pb-i18n>')}this.url&&this.url.includes("{doc}")&&console.warn("<pb-load> URL template contains {doc} placeholder but no document is available and no src is specified")}this.start&&!t.start&&(t.start=this.start),this.language&&(t.language=this.language)}t=this.prepareParameters(t);for(const[e,i]of Object.entries(t))null===i&&delete t[e];const n=this.getURL(t);if(n.includes("{")&&n.includes("}")&&(console.warn(`<pb-load> URL still contains unresolved parameters: ${n}`),this.src))return void(this.innerHTML='<pb-i18n key="dialogs.loading">Loading...</pb-i18n>');console.log("<pb-load> Loading %s with parameters %o",n,t);const s=this.shadowRoot.getElementById("loadContent");s.params=t,s.url=n,s.generateRequest(),this.loadOnce&&(this.loaded=!0)}prepareParameters(e){return this.userParams?Object.assign(e,this.userParams):e}_handleContent(e){const t=this.shadowRoot.getElementById("loadContent").lastResponse;if(this.container)this.style.display="none",document.querySelectorAll(this.container).forEach(i=>{i.innerHTML=t,this._parseHeaders(e.detail.xhr,i),this._fixLinks(i),this._onLoad(i)});else{this.style.display="",this._clearContent();const i=document.createElement("div");i.innerHTML=t,this._parseHeaders(e.detail.xhr,i),i.slot="",this.appendChild(i),this._fixLinks(i),this._onLoad(i)}this.emitTo("pb-end-update")}_clearContent(){const e=this.shadowRoot.querySelector("slot:not([name])");e&&e.assignedNodes().forEach(e=>e.parentNode.removeChild(e))}_handleError(){this.emitTo("pb-end-update");const e=this.shadowRoot.getElementById("loadContent"),{response:t}=e.lastError;if(this.silent)return void console.error("Request failed: %s",t?t.description:"");let i;i=t?t.description:'<pb-i18n key="dialogs.serverError"></pb-i18n>';const n=this.shadowRoot.getElementById("errorDialog");this.shadowRoot.getElementById("errorMessage").innerHTML=`<pb-i18n key="dialogs.serverError"></pb-i18n>: ${i}`,n.openDialog()}_parseHeaders(e,t){function i(i,n){const s=t.querySelector(`[data-pagination-${i}]`);return s?s.getAttribute(`data-pagination-${i}`):n?0:e.getResponseHeader(`pb-${i}`)}const n=i("total",this.noCredentials),s=i("start",this.noCredentials);this.start!==s&&(this.start=parseInt(s)),this.emitTo("pb-results-received",{count:n?parseInt(n,10):0,start:this.start,content:t,params:this.shadowRoot.getElementById("loadContent").params})}_fixLinks(e){Sn(e),this.fixLinks&&(e.querySelectorAll("img").forEach(e=>{const t=e.getAttribute("src");if(t)try{e.src=this.toAbsoluteURL(t)}catch(e){console.warn("<pb-load> Unable to resolve image URL %s",t,e)}}),e.querySelectorAll("a").forEach(e=>{const t=e.getAttribute("href");if(t)try{e.href=this.toAbsoluteURL(t)}catch(e){console.warn("<pb-load> Unable to resolve link URL %s",t,e)}}))}_onLoad(e){}}customElements.define("pb-load",En);class On extends(m(En)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{sortBy:{type:String,attribute:"sort-by"},sortOptions:{type:Array,attribute:"sort-options"},sortLabel:{type:String},filter:{type:String},filterBy:{type:String,attribute:"filter-by"},filterOptions:{type:Array,attribute:"filter-options"},filterByLabel:{type:String},filterPlaceholderLabel:{type:String},collection:{type:String},facets:{type:Object},login:{type:String},group:{type:String},subforms:{type:String},static:{type:Boolean},_file:{type:String},_selected:{type:Array},_allowModification:{type:Boolean}})}constructor(){super(),this.sortOptions=[],this.sortLabel="browse.sort",this.sortBy="default",this.filter="",this.filterOptions=[{label:"Title",value:"title"}],this.filterByLabel="browse.filter",this.filterPlaceholderLabel="browse.filterPlaceholder",this.filterBy="title",this._allowModification=!1,this.static=!1}connectedCallback(){super.connectedCallback(),a("pb-page-ready",()=>{y.state.sort&&(this.sortBy=y.state.sort),y.state.filter&&(this.filter=y.state.filter,this.filterBy=y.state.filterBy||this.filterBy),this.facets={},Object.keys(y.state).forEach(e=>{if(/^facet-.*$/.test(e)){const t=y.state[e];this.facets[e]?this.facets[e].push(t):Array.isArray(t)?this.facets[e]=t:this.facets[e]=[t]}}),this.collection=y.state.collection,this.collection&&y.replace(this,{collection:this.collection}),y.subscribe(this,e=>{this.collection=e.collection,this.load()})}),this.subscribeTo("pb-search-resubmit",this._facets.bind(this)),this.subscribeTo("pb-login",e=>{e.detail.userChanged&&this._facets(e)},[]),this.subscribeTo("pb-i18n-update",()=>{this.requestUpdate()},[])}firstUpdated(){a("pb-page-ready",e=>{const t=this.shadowRoot.getElementById("filterString");let i;l(e.apiVersion,"1.0.0")>=0?(i=`${e.endpoint}/api/search/autocomplete`,this.url||(this.url="api/collection")):(i=`${e.endpoint}/modules/autocomplete.xql`,this.url||(this.url="collection/")),t&&(t.source=i,t.substring=!0,t.requestParams={field:this.filterBy})});const e=this.shadowRoot.getElementById("filterString");e&&(e.addEventListener("pb-autocomplete-selected",this._handleAutocompleteSelected.bind(this)),e.addEventListener("pb-autocomplete-input",this._handleAutocompleteInput.bind(this)));const t=this.shadowRoot.getElementById("sortSelect");if(t&&t.addEventListener("change",this._sort.bind(this)),this.login){const e=document.getElementById(this.login);e?(this.subscribeTo("pb-login",e=>{this._allowModification=this._loggedIn(e.detail.user,e.detail.group)},[]),this._allowModification=e.loggedIn&&this._loggedIn(e.user,e.groups)):console.error("<pb-browse-docs> connected pb-login element not found!")}this.shadowRoot.getElementById("delete").addEventListener("click",this._handleDelete.bind(this)),super.firstUpdated()}render(){return t`
      <slot name="header"></slot>
      <div class="toolbar toolbar--primary">
        <div class="toolbar__group">
          <label class="field">
            <span class="field__label">${p(this.sortLabel)}</span>
            <select
              id="sortSelect"
              class="field__select"
              @change="${this._sort}"
              .value=${this.sortBy||""}
            >
              ${this.sortOptions.map(e=>t`<option value="${e.value}">${p(e.label)}</option>`)}
            </select>
          </label>
        </div>
        <div class="toolbar__group toolbar__group--filter">
          <label class="field">
            <span class="field__label">${p(this.filterByLabel)}</span>
            <select
              id="filterSelect"
              class="field__select"
              @change="${this._filterChanged}"
              .value=${this.filterBy||""}
            >
              ${this.filterOptions.map(e=>t`<option value="${e.value}">${p(e.label)}</option>`)}
            </select>
          </label>
          <div class="filter-control">
            <pb-autocomplete
              id="filterString"
              class="filter-control__input"
              name="filter"
              .value=${this.filter||""}
              placeholder="${p(this.filterPlaceholderLabel)}"
              icon="search"
              @keydown=${this._handleEnter}
            ></pb-autocomplete>
            <button
              class="pb-button pb-button--icon filter-control__submit"
              type="button"
              @click=${this._filter}
              aria-label="${p("browse.filter")}"
              title="${p("browse.filter")}"
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
          title="${p("browse.delete")}"
        >
          <pb-icon icon="delete" decorative></pb-icon>
          <span class="label">${p("browse.delete")}</span>
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
      <pb-dialog id="deleteDialog" title="${p("browse.delete")}">
        <p>
          ${p("browse.confirmDeletion",{count:this._selected?this._selected.length:0})}
        </p>
        <div slot="footer" class="buttons">
          <button
            class="pb-button pb-button--text"
            type="button"
            autofocus
            @click="${this._confirmDelete}"
          >
            ${p("dialogs.yes")}
          </button>
          <button class="pb-button pb-button--text" type="button" rel="prev">
            ${p("dialogs.no")}
          </button>
        </div>
      </pb-dialog>
      <pb-dialog id="errorDialog" title="${p("dialogs.error")}">
        <p id="errorMessage"></p>
        <div slot="footer">
          <button class="pb-button pb-button--text" type="button" rel="prev">
            ${p("dialogs.close")}
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
    `}getURL(e){if(this.static)return`collections/${this.collection?`${this.collection}/`:""}${e.start||"1"}.html`;const t=super.getURL(e);return this.collection?`${t}/${this.collection}`:t}prepareParameters(e){return(e=this._paramsFromSubforms(e)).sort=this.sortBy,this.filter&&(e.filter=this.filter,e.browse=this.filterBy),this.facets&&(e=Object.assign(e,this.facets)),e}_paramsFromSubforms(e){return this.subforms&&document.querySelectorAll(this.subforms).forEach(t=>{t.serializeForm&&Object.assign(e,t.serializeForm())}),e}getSelected(){const e=[];return this.container?document.querySelectorAll(this.container).forEach(t=>t.querySelectorAll('.document-select input[type="checkbox"]:checked').forEach(t=>{e.push(t.value)})):this.querySelectorAll('.document-select input[type="checkbox"]:checked').forEach(t=>{e.push(t.value)}),e}_filter(){const e=this.shadowRoot.getElementById("filterString"),t=this.shadowRoot.getElementById("filterSelect"),i=e?e.value:this.filter,n=t?t.value:this.filterBy;void 0!==i&&(console.log("<pb-browse-docs> Filter by %s",i),this.filter=i,y.commit(this,{filter:i,filterBy:n}),this.load())}_filterChanged(e){const t=(null==e?void 0:e.target)??this.shadowRoot.getElementById("filterSelect"),i=t?t.value:null;if(i&&i!==this.filterBy){console.log("<pb-browse-docs> Filtering on %s",i),this.filterBy=i;const e=this.shadowRoot.getElementById("filterString");e&&(e.requestParams={field:this.filterBy})}}_sort(e){const t=(null==e?void 0:e.target)??this.shadowRoot.getElementById("sortSelect"),i=t?t.value:null;i&&i!==this.sortBy&&(console.log("<pb-browse-docs> Sorting by %s",i),this.sortBy=i,y.commit(this,{sort:i}),this.load())}_facets(e){e.detail&&e.detail.params&&(y.clearParametersMatching(this,/^(all-|facet-).*/),this.facets=e.detail.params,this.start=1,y.commit(this,e.detail.params)),this.load()}_onLoad(e){window.scrollTo(0,0);const t=e.querySelector("[data-root]"),i=t&&t.getAttribute("data-root"),n=t&&t.classList.contains("writable");this.emitTo("pb-collection",{writable:n,collection:i}),document.querySelectorAll("[can-write]").forEach(e=>{e.disabled=!n}),e.querySelectorAll("[data-collection]").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),this.collection=e.getAttribute("data-collection"),this.start=1,y.commit(this,{collection:this.collection}),console.log("<pb-browse-docs> loading collection %s",this.collection),this.load()})})}_handleDelete(e,t){const i=this.shadowRoot.getElementById("deleteDialog"),n=this.getSelected();n.length>0&&(this._selected=n,i.openDialog())}_confirmDelete(){if(!this._file&&!this._selected)return;let e;e=this._selected?this._selected:[this._file],console.log("<pb-browse-docs> Deleting %o",this._file);const t={action:"delete","docs[]":e};this._file=null,this._selected=null,this.load(t)}_loggedIn(e,t){return null!=e&&(!this.group||!!t&&t.indexOf(this.group)>-1)}_canModify(e){return e?"":"hidden"}_handleAutocompleteInput(e){const t=e.detail||{},i=t.value??t.text??"";this.filter=i}_handleAutocompleteSelected(e){const t=e.detail||{},i=t.value??t.text??"";this.filter=i,this._filter()}_handleEnter(e){const t=e.key||e.code||e.keyCode;"Enter"!==t&&"NumpadEnter"!==t&&13!==t||this._filter()}}customElements.define("pb-browse-docs",On);class $n extends En{static get properties(){return Object.assign(Object.assign({},super.properties),{},{collection:{type:String},static:{type:Boolean}})}constructor(){super(),this.collection=null,this.static=!1}connectedCallback(){super.connectedCallback(),a("pb-page-ready",()=>{this.collection=y.state.collection,y.subscribe(this,e=>{this.collection=e.collection})})}getURL(e){if(this.static)return`collections/${this.collection?`${this.collection}/`:""}${e.start||"1"}.html`;const t=super.getURL(e);return this.collection?`${t}/${this.collection}`:t}_onLoad(e){window.scrollTo(0,0);const t=e.querySelector("[data-root]"),i=t&&t.getAttribute("data-root"),n=t&&t.classList.contains("writable");this.emitTo("pb-collection",{writable:n,collection:i}),document.querySelectorAll("[can-write]").forEach(e=>{e.disabled=!n}),e.querySelectorAll("[data-collection]").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),this.collection=e.getAttribute("data-collection"),this.start=1,this.history&&y.commit(this,{collection:this.collection}),console.log("<pb-browse> loading collection %s",this.collection),this.emitTo("pb-search-resubmit")})})}}customElements.define("pb-browse",$n);class Tn extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{path:{type:String,reflect:!0},rootPath:{type:String,attribute:"root-path"},odd:{type:String,reflect:!0},view:{type:String,reflect:!0},disableHistory:{type:Boolean,attribute:"disable-history"},sourceView:{type:String,attribute:"source-view"}})}constructor(){super(),this.path=null,this.rootPath="",this.disableHistory=!1,this._emitScheduled=!1,this._lastEventKey=null}connectedCallback(){super.connectedCallback(),this.disableHistory||(y.state.path&&!this.path&&(this.path=y.state.path),this.view=y.state.view||this.view,this.odd=y.state.odd||this.odd),this._lastEventKey=this._computeEventKey()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!==i&&(this._emitScheduled||(this._emitScheduled=!0,setTimeout(()=>{this._emitScheduled=!1;const e=this._computeEventKey();e!==this._lastEventKey&&(this.emitTo("pb-document",this),this._lastEventKey=e)},0)))}_computeEventKey(){return JSON.stringify({path:this.path||"",rootPath:this.rootPath||"",odd:this.odd||"",view:this.view||"",sourceView:this.sourceView||""})}getFileName(){return this.path.replace(/^.*?([^\/]+)$/,"$1")}getCollection(){return this.path.replace(/^(.*?)\/[^\/]+$/,"$1")}getFullPath(){return`${this.rootPath}/${this.path}`}}customElements.define("pb-document",Tn);class In extends(_(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{direction:{type:String},keyboard:{type:String},rendition:{type:String}})}constructor(){super(),this.direction="forward",this.disabled=!0}connectedCallback(){super.connectedCallback(),this.keyboard&&(this.hotkeys={next:this.keyboard}),this.subscribeTo("pb-update",this._update.bind(this)),this.registerHotkey("next",()=>this.emitTo("pb-navigate",{direction:this.direction})),this.signalReady()}_update(e){"forward"===this.direction?e.detail.data.next?this.disabled=!1:this.disabled=!0:e.detail.data.previous?this.disabled=!1:this.disabled=!0}_handleClick(){this.emitTo("pb-navigate",{direction:this.direction})}render(){return t`
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
    `}}customElements.define("pb-navigation",In);const Ln=e=>"string"==typeof e,Rn=()=>{let e,t;const i=new Promise((i,n)=>{e=i,t=n});return i.resolve=e,i.reject=t,i},Pn=e=>null==e?"":""+e,Nn=(e,t,i)=>{e.forEach(e=>{t[e]&&(i[e]=t[e])})},jn=/###/g,Dn=e=>e&&e.indexOf("###")>-1?e.replace(jn,"."):e,Fn=e=>!e||Ln(e),Mn=(e,t,i)=>{const n=Ln(t)?t.split("."):t;let s=0;for(;s<n.length-1;){if(Fn(e))return{};const t=Dn(n[s]);!e[t]&&i&&(e[t]=new i),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++s}return Fn(e)?{}:{obj:e,k:Dn(n[s])}},Bn=(e,t,i)=>{const{obj:n,k:s}=Mn(e,t,Object);if(void 0!==n||1===t.length)return void(n[s]=i);let r=t[t.length-1],o=t.slice(0,t.length-1),a=Mn(e,o,Object);for(;void 0===a.obj&&o.length;){var l;r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=Mn(e,o,Object),null!==(l=a)&&void 0!==l&&l.obj&&void 0!==a.obj[`${a.k}.${r}`]&&(a.obj=void 0)}a.obj[`${a.k}.${r}`]=i},zn=(e,t,i,n)=>{const{obj:s,k:r}=Mn(e,t,Object);s[r]=s[r]||[],s[r].push(i)},qn=(e,t)=>{const{obj:i,k:n}=Mn(e,t);if(i&&Object.prototype.hasOwnProperty.call(i,n))return i[n]},Un=(e,t,i)=>{const n=qn(e,i);return void 0!==n?n:qn(t,i)},Hn=(e,t,i)=>{for(const n in t)"__proto__"!==n&&"constructor"!==n&&(n in e?Ln(e[n])||e[n]instanceof String||Ln(t[n])||t[n]instanceof String?i&&(e[n]=t[n]):Hn(e[n],t[n],i):e[n]=t[n]);return e},Vn=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Wn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Yn=e=>Ln(e)?e.replace(/[&<>"'\/]/g,e=>Wn[e]):e;class Gn{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Qn=[" ",",","?","!",";"],Kn=new Gn(20),Jn=(e,t,i)=>{t=t||"",i=i||"";const n=Qn.filter(e=>t.indexOf(e)<0&&i.indexOf(e)<0);if(0===n.length)return!0;const s=Kn.getRegExp(`(${n.map(e=>"?"===e?"\\?":e).join("|")})`);let r=!s.test(e);if(!r){const t=e.indexOf(i);t>0&&!s.test(e.substring(0,t))&&(r=!0)}return r},Zn=(e,t,i=".")=>{if(!e)return;if(e[t]){if(!Object.prototype.hasOwnProperty.call(e,t))return;return e[t]}const n=t.split(i);let s=e;for(let e=0;e<n.length;){if(!s||"object"!=typeof s)return;let t,r="";for(let o=e;o<n.length;++o)if(o!==e&&(r+=i),r+=n[o],t=s[r],void 0!==t){if(["string","number","boolean"].indexOf(typeof t)>-1&&o<n.length-1)continue;e+=o-e+1;break}s=t}return s},Xn=e=>null==e?void 0:e.replace("_","-"),es={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var i,n;null===(i=console)||void 0===i||null===(i=i[e])||void 0===i||null===(n=i.apply)||void 0===n||n.call(i,console,t)}};class ts{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||es,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,n){return n&&!this.debug?null:(Ln(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new ts(this.logger,Object.assign(Object.assign({},{prefix:`${this.prefix}:${e}:`}),this.options))}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new ts(this.logger,e)}}var is=new ts;class ns{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(e=>{this.observers[e]||(this.observers[e]=new Map);const i=this.observers[e].get(t)||0;this.observers[e].set(t,i+1)}),this}off(e,t){this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])}emit(e,...t){if(this.observers[e]){Array.from(this.observers[e].entries()).forEach(([e,i])=>{for(let n=0;n<i;n++)e(...t)})}if(this.observers["*"]){Array.from(this.observers["*"].entries()).forEach(([i,n])=>{for(let s=0;s<n;s++)i.apply(i,[e,...t])})}}}class ss extends ns{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i,n={}){var s;const r=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,o=void 0!==n.ignoreJSONStructure?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):Ln(i)&&r?a.push(...i.split(r)):a.push(i)));const l=qn(this.data,a);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=a[0],t=a[1],i=a.slice(2).join(".")),!l&&o&&Ln(i)?Zn(null===(s=this.data)||void 0===s||null===(s=s[e])||void 0===s?void 0:s[t],i,r):l}addResource(e,t,i,n,s={silent:!1}){const r=void 0!==s.keySeparator?s.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(r?i.split(r):i)),e.indexOf(".")>-1&&(o=e.split("."),n=t,t=o[1]),this.addNamespaces(t),Bn(this.data,o,n),s.silent||this.emit("added",e,t,i,n)}addResources(e,t,i,n={silent:!1}){for(const n in i)(Ln(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});n.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,n,s,r={silent:!1,skipCopy:!1}){let o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),n=i,i=t,t=o[1]),this.addNamespaces(t);let a=qn(this.data,o)||{};r.skipCopy||(i=JSON.parse(JSON.stringify(i))),n?Hn(a,i,s):a=Object.assign(Object.assign({},a),i),Bn(this.data,o,a),r.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}}var rs={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,i,n,s){return e.forEach(e=>{var r;t=(null===(r=this.processors[e])||void 0===r?void 0:r.process(t,i,n,s))??t}),t}};const os=Symbol("i18next/PATH_KEY");function as(){const e=[],t=Object.create(null);let i;return t.get=(n,s)=>{var r,o;return null===(r=i)||void 0===r||null===(o=r.revoke)||void 0===o||o.call(r),s===os?e:(e.push(s),i=Proxy.revocable(n,t),i.proxy)},Proxy.revocable(Object.create(null),t).proxy}function ls(e,t){const{[os]:i}=e(as());return i.join((null==t?void 0:t.keySeparator)??".")}const cs={},ds=e=>!Ln(e)&&"boolean"!=typeof e&&"number"!=typeof e;class hs extends ns{constructor(e,t={}){super(),Nn(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=is.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const i=Object.assign({},t);if(null==e)return!1;const n=this.resolve(e,i);if(void 0===(null==n?void 0:n.res))return!1;const s=ds(n.res);return!1!==i.returnObjects||!s}extractFromKey(e,t){let i=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===i&&(i=":");const n=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let s=t.ns||this.options.defaultNS||[];const r=i&&e.indexOf(i)>-1,o=!(this.options.userDefinedKeySeparator||t.keySeparator||this.options.userDefinedNsSeparator||t.nsSeparator||Jn(e,i,n));if(r&&!o){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:Ln(s)?[s]:s};const r=e.split(i);(i!==n||i===n&&this.options.ns.indexOf(r[0])>-1)&&(s=r.shift()),e=r.join(n)}return{key:e,namespaces:Ln(s)?[s]:s}}translate(e,t,i){let n="object"==typeof t?Object.assign({},t):t;if("object"!=typeof n&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof n&&(n=Object.assign({},n)),n||(n={}),null==e)return"";"function"==typeof e&&(e=ls(e,Object.assign(Object.assign({},this.options),n))),Array.isArray(e)||(e=[String(e)]);const s=void 0!==n.returnDetails?n.returnDetails:this.options.returnDetails,r=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],n),l=a[a.length-1];let c=void 0!==n.nsSeparator?n.nsSeparator:this.options.nsSeparator;void 0===c&&(c=":");const d=n.lng||this.language,h=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if("cimode"===(null==d?void 0:d.toLowerCase()))return h?s?{res:`${l}${c}${o}`,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${c}${o}`:s?{res:o,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:o;const p=this.resolve(e,n);let u=null==p?void 0:p.res;const g=(null==p?void 0:p.usedKey)||o,m=(null==p?void 0:p.exactUsedKey)||o,f=["[object Number]","[object Function]","[object RegExp]"],b=void 0!==n.joinArrays?n.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,v=void 0!==n.count&&!Ln(n.count),_=hs.hasDefaultValue(n),w=v?this.pluralResolver.getSuffix(d,n.count,n):"",x=n.ordinal&&v?this.pluralResolver.getSuffix(d,n.count,{ordinal:!1}):"",k=v&&!n.ordinal&&0===n.count,A=k&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${w}`]||n[`defaultValue${x}`]||n.defaultValue;let S=u;y&&!u&&_&&(S=A);const C=ds(S),E=Object.prototype.toString.apply(S);if(!(y&&S&&C&&f.indexOf(E)<0)||Ln(b)&&Array.isArray(S))if(y&&Ln(b)&&Array.isArray(u))u=u.join(b),u&&(u=this.extendTranslation(u,e,n,i));else{let t=!1,s=!1;!this.isValidLookup(u)&&_&&(t=!0,u=A),this.isValidLookup(u)||(s=!0,u=o);const a=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&s?void 0:u,h=_&&A!==u&&this.options.updateMissing;if(s||t||h){if(this.logger.log(h?"updateKey":"missingKey",d,l,o,h?A:u),r){const e=this.resolve(o,Object.assign(Object.assign({},n),{},{keySeparator:!1}));e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if("fallback"===this.options.saveMissingTo&&t&&t[0])for(let i=0;i<t.length;i++)e.push(t[i]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(n.lng||this.language):e.push(n.lng||this.language);const i=(e,t,i)=>{var s;const r=_&&i!==u?i:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,h,n):null!==(s=this.backendConnector)&&void 0!==s&&s.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,h,n),this.emit("missingKey",e,l,t,u)};this.options.saveMissing&&(this.options.saveMissingPlurals&&v?e.forEach(e=>{const t=this.pluralResolver.getSuffixes(e,n);k&&n[`defaultValue${this.options.pluralSeparator}zero`]&&t.indexOf(`${this.options.pluralSeparator}zero`)<0&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{i([e],o+t,n[`defaultValue${t}`]||A)})}):i(e,o,A))}u=this.extendTranslation(u,e,n,p,i),s&&u===o&&this.options.appendNamespaceToMissingKey&&(u=`${l}${c}${o}`),(s||t)&&this.options.parseMissingKeyHandler&&(u=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${c}${o}`:o,t?u:void 0,n))}else{if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,S,Object.assign(Object.assign({},n),{},{ns:a})):`key '${o} (${this.language})' returned an object instead of string.`;return s?(p.res=e,p.usedParams=this.getUsedParamsDetails(n),p):e}if(r){const e=Array.isArray(S),t=e?[]:{},i=e?m:g;for(const e in S)if(Object.prototype.hasOwnProperty.call(S,e)){const s=`${i}${r}${e}`;t[e]=_&&!u?this.translate(s,Object.assign(Object.assign({},n),{},{defaultValue:ds(A)?A[e]:void 0},{joinArrays:!1,ns:a})):this.translate(s,Object.assign(Object.assign({},n),{joinArrays:!1,ns:a})),t[e]===s&&(t[e]=S[e])}u=t}}return s?(p.res=u,p.usedParams=this.getUsedParamsDetails(n),p):u}extendTranslation(e,t,i,n,s){var r;if(null!==(r=this.i18nFormat)&&void 0!==r&&r.parse)e=this.i18nFormat.parse(e,Object.assign(Object.assign({},this.options.interpolation.defaultVariables),i),i.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){var o;i.interpolation&&this.interpolator.init(Object.assign(Object.assign({},i),{interpolation:Object.assign(Object.assign({},this.options.interpolation),i.interpolation)}));const r=Ln(e)&&(void 0!==(null==i||null===(o=i.interpolation)||void 0===o?void 0:o.skipOnVariables)?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let a;if(r){const t=e.match(this.interpolator.nestingRegexp);a=t&&t.length}let l=i.replace&&!Ln(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(l=Object.assign(Object.assign({},this.options.interpolation.defaultVariables),l)),e=this.interpolator.interpolate(e,l,i.lng||this.language||n.usedLng,i),r){const t=e.match(this.interpolator.nestingRegexp);a<(t&&t.length)&&(i.nest=!1)}!i.lng&&n&&n.res&&(i.lng=this.language||n.usedLng),!1!==i.nest&&(e=this.interpolator.nest(e,(...e)=>(null==s?void 0:s[0])!==e[0]||i.context?this.translate(...e,t):(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null),i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=Ln(a)?[a]:a;return null!=e&&null!=l&&l.length&&!1!==i.applyPostProcessor&&(e=rs.handle(l,e,t,this.options&&this.options.postProcessPassResolved?Object.assign({i18nResolved:Object.assign(Object.assign({},n),{},{usedParams:this.getUsedParamsDetails(i)})},i):i,this)),e}resolve(e,t={}){let i,n,s,r,o;return Ln(e)&&(e=[e]),e.forEach(e=>{if(this.isValidLookup(i))return;const a=this.extractFromKey(e,t),l=a.key;n=l;let c=a.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const d=void 0!==t.count&&!Ln(t.count),h=d&&!t.ordinal&&0===t.count,p=void 0!==t.context&&(Ln(t.context)||"number"==typeof t.context)&&""!==t.context,u=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);c.forEach(e=>{var a,c;this.isValidLookup(i)||(o=e,cs[`${u[0]}-${e}`]||null===(a=this.utils)||void 0===a||!a.hasLoadedNamespace||null!==(c=this.utils)&&void 0!==c&&c.hasLoadedNamespace(o)||(cs[`${u[0]}-${e}`]=!0,this.logger.warn(`key "${n}" for languages "${u.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),u.forEach(n=>{var o;if(this.isValidLookup(i))return;r=n;const a=[l];if(null!==(o=this.i18nFormat)&&void 0!==o&&o.addLookupKeys)this.i18nFormat.addLookupKeys(a,l,n,e,t);else{let e;d&&(e=this.pluralResolver.getSuffix(n,t.count,t));const i=`${this.options.pluralSeparator}zero`,s=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(t.ordinal&&0===e.indexOf(s)&&a.push(l+e.replace(s,this.options.pluralSeparator)),a.push(l+e),h&&a.push(l+i)),p){const n=`${l}${this.options.contextSeparator||"_"}${t.context}`;a.push(n),d&&(t.ordinal&&0===e.indexOf(s)&&a.push(n+e.replace(s,this.options.pluralSeparator)),a.push(n+e),h&&a.push(n+i))}}let c;for(;c=a.pop();)this.isValidLookup(i)||(s=c,i=this.getResource(n,e,c,t))}))})}),{res:i,usedKey:n,exactUsedKey:s,usedLng:r,usedNS:o}}isValidLookup(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}getResource(e,t,i,n={}){var s;return null!==(s=this.i18nFormat)&&void 0!==s&&s.getResource?this.i18nFormat.getResource(e,t,i,n):this.resourceStore.getResource(e,t,i,n)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Ln(e.replace);let n=i?e.replace:e;if(i&&void 0!==e.count&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n=Object.assign(Object.assign({},this.options.interpolation.defaultVariables),n)),!i){n=Object.assign({},n);for(const e of t)delete n[e]}return n}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&void 0!==e[i])return!0;return!1}}class ps{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=is.create("languageUtils")}getScriptPartFromCode(e){if(!(e=Xn(e))||e.indexOf("-")<0)return null;const t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}getLanguagePartFromCode(e){if(!(e=Xn(e))||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Ln(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch(e){}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;const i=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(i)||(t=i)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;const i=this.getScriptPartFromCode(e);if(this.isSupportedCode(i))return t=i;const n=this.getLanguagePartFromCode(e);if(this.isSupportedCode(n))return t=n;t=this.options.supportedLngs.find(e=>e===n?e:e.indexOf("-")<0&&n.indexOf("-")<0?void 0:e.indexOf("-")>0&&n.indexOf("-")<0&&e.substring(0,e.indexOf("-"))===n||0===e.indexOf(n)&&n.length>1?e:void 0)}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),Ln(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes((!1===t?[]:t)||this.options.fallbackLng||[],e),n=[],s=e=>{e&&(this.isSupportedCode(e)?n.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return Ln(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?("languageOnly"!==this.options.load&&s(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&s(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&s(this.getLanguagePartFromCode(e))):Ln(e)&&s(this.formatLanguageCode(e)),i.forEach(e=>{n.indexOf(e)<0&&s(this.formatLanguageCode(e))}),n}}const us={zero:0,one:1,two:2,few:3,many:4,other:5},gs={select:e=>1===e?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class ms{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=is.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const i=Xn("dev"===e?"en":e),n=t.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:i,type:n});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let r;try{r=new Intl.PluralRules(i,{type:n})}catch(i){if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),gs;if(!e.match(/-|_/))return gs;const n=this.languageUtils.getLanguagePartFromCode(e);r=this.getRule(n,t)}return this.pluralRulesCache[s]=r,r}needsPlural(e,t={}){var i;let n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),(null===(i=n)||void 0===i?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t,i={}){return this.getSuffixes(e,i).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((e,t)=>us[e]-us[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`):[]}getSuffix(e,t,i={}){const n=this.getRule(e,i);return n?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const fs=(e,t,i,n=".",s=!0)=>{let r=Un(e,t,i);return!r&&s&&Ln(i)&&(r=Zn(e,i,n),void 0===r&&(r=Zn(t,i,n))),r},bs=e=>e.replace(/\$/g,"$$$$");class ys{constructor(e={}){var t;this.logger=is.create("interpolator"),this.options=e,this.format=(null==e||null===(t=e.interpolation)||void 0===t?void 0:t.format)||(e=>e),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:n,prefix:s,prefixEscaped:r,suffix:o,suffixEscaped:a,formatSeparator:l,unescapeSuffix:c,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:p,nestingSuffix:u,nestingSuffixEscaped:g,nestingOptionsSeparator:m,maxReplaces:f,alwaysFormat:b}=e.interpolation;this.escape=void 0!==t?t:Yn,this.escapeValue=void 0===i||i,this.useRawValueToEscape=void 0!==n&&n,this.prefix=s?Vn(s):r||"{{",this.suffix=o?Vn(o):a||"}}",this.formatSeparator=l||",",this.unescapePrefix=c?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=h?Vn(h):p||Vn("$t("),this.nestingSuffix=u?Vn(u):g||Vn(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=f||1e3,this.alwaysFormat=void 0!==b&&b,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>(null==e?void 0:e.source)===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,i,n){var s;let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(e.indexOf(this.formatSeparator)<0){const s=fs(t,l,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(s,void 0,i,Object.assign(Object.assign(Object.assign({},n),t),{},{interpolationkey:e})):s}const s=e.split(this.formatSeparator),r=s.shift().trim(),o=s.join(this.formatSeparator).trim();return this.format(fs(t,l,r,this.options.keySeparator,this.options.ignoreJSONStructure),o,i,Object.assign(Object.assign(Object.assign({},n),t),{},{interpolationkey:r}))};this.resetRegExp();const d=(null==n?void 0:n.missingInterpolationHandler)||this.options.missingInterpolationHandler,h=void 0!==(null==n||null===(s=n.interpolation)||void 0===s?void 0:s.skipOnVariables)?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>bs(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?bs(this.escape(e)):bs(e)}].forEach(t=>{for(a=0;r=t.regex.exec(e);){const i=r[1].trim();if(o=c(i),void 0===o)if("function"==typeof d){const t=d(e,r,n);o=Ln(t)?t:""}else if(n&&Object.prototype.hasOwnProperty.call(n,i))o="";else{if(h){o=r[0];continue}this.logger.warn(`missed to pass in variable ${i} for interpolating ${e}`),o=""}else Ln(o)||this.useRawValueToEscape||(o=Pn(o));const s=t.safeValue(o);if(e=e.replace(r[0],s),h?(t.regex.lastIndex+=o.length,t.regex.lastIndex-=r[0].length):t.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t,i={}){let n,s,r;const o=(e,t)=>{const i=this.nestingOptionsSeparator;if(e.indexOf(i)<0)return e;const n=e.split(new RegExp(`${i}[ ]*{`));let s=`{${n[1]}`;e=n[0],s=this.interpolate(s,r);const o=s.match(/'/g),a=s.match(/"/g);(((null==o?void 0:o.length)??0)%2==0&&!a||a.length%2!=0)&&(s=s.replace(/'/g,'"'));try{r=JSON.parse(s),t&&(r=Object.assign(Object.assign({},t),r))}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${i}${s}`}return r.defaultValue&&r.defaultValue.indexOf(this.prefix)>-1&&delete r.defaultValue,e};for(;n=this.nestingRegexp.exec(e);){let a=[];r=Object.assign({},i),r=r.replace&&!Ln(r.replace)?r.replace:r,r.applyPostProcessor=!1,delete r.defaultValue;const l=/{.*}/.test(n[1])?n[1].lastIndexOf("}")+1:n[1].indexOf(this.formatSeparator);if(-1!==l&&(a=n[1].slice(l).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),n[1]=n[1].slice(0,l)),s=t(o.call(this,n[1].trim(),r),r),s&&n[0]===e&&!Ln(s))return s;Ln(s)||(s=Pn(s)),s||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),s=""),a.length&&(s=a.reduce((e,t)=>this.format(e,t,i.lng,Object.assign(Object.assign({},i),{},{interpolationkey:n[1].trim()})),s.trim())),e=e.replace(n[0],s),this.regexp.lastIndex=0}return e}}const vs=e=>{let t=e.toLowerCase().trim();const i={};if(e.indexOf("(")>-1){const n=e.split("(");t=n[0].toLowerCase().trim();const s=n[1].substring(0,n[1].length-1);if("currency"===t&&s.indexOf(":")<0)i.currency||(i.currency=s.trim());else if("relativetime"===t&&s.indexOf(":")<0)i.range||(i.range=s.trim());else{s.split(";").forEach(e=>{if(e){const[t,...n]=e.split(":"),s=n.join(":").trim().replace(/^'+|'+$/g,""),r=t.trim();i[r]||(i[r]=s),"false"===s&&(i[r]=!1),"true"===s&&(i[r]=!0),isNaN(s)||(i[r]=parseInt(s,10))}})}}return{formatName:t,formatOptions:i}},_s=e=>{const t={};return(i,n,s)=>{let r=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(r=Object.assign(Object.assign({},r),{},{[s.interpolationkey]:void 0}));const o=n+JSON.stringify(r);let a=t[o];return a||(a=e(Xn(n),s),t[o]=a),a(i)}},ws=e=>(t,i,n)=>e(Xn(i),n)(t);class xs{constructor(e={}){this.logger=is.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const i=t.cacheInBuiltFormats?_s:ws;this.formats={number:i((e,t)=>{const i=new Intl.NumberFormat(e,Object.assign({},t));return e=>i.format(e)}),currency:i((e,t)=>{const i=new Intl.NumberFormat(e,Object.assign(Object.assign({},t),{},{style:"currency"}));return e=>i.format(e)}),datetime:i((e,t)=>{const i=new Intl.DateTimeFormat(e,Object.assign({},t));return e=>i.format(e)}),relativetime:i((e,t)=>{const i=new Intl.RelativeTimeFormat(e,Object.assign({},t));return e=>i.format(e,t.range||"day")}),list:i((e,t)=>{const i=new Intl.ListFormat(e,Object.assign({},t));return e=>i.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=_s(t)}format(e,t,i,n={}){const s=t.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(e=>e.indexOf(")")>-1)){const e=s.findIndex(e=>e.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,e)].join(this.formatSeparator)}const r=s.reduce((e,t)=>{const{formatName:s,formatOptions:r}=vs(t);if(this.formats[s]){let t=e;try{var o;const a=(null==n||null===(o=n.formatParams)||void 0===o?void 0:o[n.interpolationkey])||{},l=a.locale||a.lng||n.locale||n.lng||i;t=this.formats[s](e,l,Object.assign(Object.assign(Object.assign({},r),n),a))}catch(e){this.logger.warn(e)}return t}return this.logger.warn(`there was no format function for ${s}`),e},e);return r}}const ks=(e,t)=>{void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)};class As extends ns{constructor(e,t,i,n={}){var s,r;super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=n,this.logger=is.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],null===(s=this.backend)||void 0===s||null===(r=s.init)||void 0===r||r.call(s,i,n.backend,n)}queueLoad(e,t,i,n){const s={},r={},o={},a={};return e.forEach(e=>{let n=!0;t.forEach(t=>{const o=`${e}|${t}`;!i.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(1===this.state[o]?void 0===r[o]&&(r[o]=!0):(this.state[o]=1,n=!1,void 0===r[o]&&(r[o]=!0),void 0===s[o]&&(s[o]=!0),void 0===a[t]&&(a[t]=!0)))}),n||(o[e]=!0)}),(Object.keys(s).length||Object.keys(r).length)&&this.queue.push({pending:r,pendingCount:Object.keys(r).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(s),pending:Object.keys(r),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(a)}}loaded(e,t,i){const n=e.split("|"),s=n[0],r=n[1];t&&this.emit("failedLoading",s,r,t),!t&&i&&this.store.addResourceBundle(s,r,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(i=>{zn(i.loaded,[s],r),ks(i,e),t&&i.errors.push(t),0!==i.pendingCount||i.done||(Object.keys(i.loaded).forEach(e=>{o[e]||(o[e]={});const t=i.loaded[e];t.length&&t.forEach(t=>{void 0===o[e][t]&&(o[e][t]=!0)})}),i.done=!0,i.errors.length?i.callback(i.errors):i.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,i,n=0,s=this.retryTimeout,r){if(!e.length)return r(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:i,tried:n,wait:s,callback:r});this.readingCalls++;const o=(o,a)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}o&&a&&n<this.maxRetries?setTimeout(()=>{this.read.call(this,e,t,i,n+1,2*s,r)},s):r(o,a)},a=this.backend[i].bind(this.backend);if(2!==a.length)return a(e,t,o);try{const i=a(e,t);i&&"function"==typeof i.then?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}}prepareLoading(e,t,i={},n){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();Ln(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Ln(t)&&(t=[t]);const s=this.queueLoad(e,t,i,n);if(!s.toLoad.length)return s.pending.length||n(),null;s.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e,t=""){const i=e.split("|"),n=i[0],s=i[1];this.read(n,s,"read",void 0,void 0,(i,r)=>{i&&this.logger.warn(`${t}loading namespace ${s} for language ${n} failed`,i),!i&&r&&this.logger.log(`${t}loaded namespace ${s} for language ${n}`,r),this.loaded(e,i,r)})}saveMissing(e,t,i,n,s,r={},o=()=>{}){var a,l,c;if(null===(a=this.services)||void 0===a||null===(a=a.utils)||void 0===a||!a.hasLoadedNamespace||null!==(l=this.services)&&void 0!==l&&null!==(l=l.utils)&&void 0!==l&&l.hasLoadedNamespace(t)){if(null!=i&&""!==i){if(null!==(c=this.backend)&&void 0!==c&&c.create){const a=Object.assign(Object.assign({},r),{},{isUpdate:s}),l=this.backend.create.bind(this.backend);if(l.length<6)try{let s;s=5===l.length?l(e,t,i,n,a):l(e,t,i,n),s&&"function"==typeof s.then?s.then(e=>o(null,e)).catch(o):o(null,s)}catch(e){o(e)}else l(e,t,i,n,o,a)}e&&e[0]&&this.store.addResource(e[0],t,i,n)}}else this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")}}const Ss=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if("object"==typeof e[1]&&(t=e[1]),Ln(e[1])&&(t.defaultValue=e[1]),Ln(e[2])&&(t.tDescription=e[2]),"object"==typeof e[2]||"object"==typeof e[3]){const i=e[3]||e[2];Object.keys(i).forEach(e=>{t[e]=i[e]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Cs=e=>{var t,i;return Ln(e.ns)&&(e.ns=[e.ns]),Ln(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),Ln(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),(null===(t=e.supportedLngs)||void 0===t||null===(i=t.indexOf)||void 0===i?void 0:i.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),"boolean"==typeof e.initImmediate&&(e.initAsync=e.initImmediate),e},Es=()=>{},Os=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{"function"==typeof e[t]&&(e[t]=e[t].bind(e))})};class $s extends ns{constructor(e={},t){if(super(),this.options=Cs(e),this.services={},this.logger=is,this.modules={external:[]},Os(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,"function"==typeof e&&(t=e,e={}),null==e.defaultNS&&e.ns&&(Ln(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const i=Ss();this.options=Object.assign(Object.assign(Object.assign({},i),this.options),Cs(e)),this.options.interpolation=Object.assign(Object.assign({},i.interpolation),this.options.interpolation),void 0!==e.keySeparator&&(this.options.userDefinedKeySeparator=e.keySeparator),void 0!==e.nsSeparator&&(this.options.userDefinedNsSeparator=e.nsSeparator),"function"!=typeof this.options.overloadTranslationOptionHandler&&(this.options.overloadTranslationOptionHandler=i.overloadTranslationOptionHandler);const n=e=>e?"function"==typeof e?new e:e:null;if(!this.options.isClone){let e;this.modules.logger?is.init(n(this.modules.logger),this.options):is.init(null,this.options),e=this.modules.formatter?this.modules.formatter:xs;const t=new ps(this.options);this.store=new ss(this.options.resources,this.options);const s=this.services;s.logger=is,s.resourceStore=this.store,s.languageUtils=t,s.pluralResolver=new ms(t,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix});this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),!e||this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format||(s.formatter=n(e),s.formatter.init&&s.formatter.init(s,this.options),this.options.interpolation.format=s.formatter.format.bind(s.formatter)),s.interpolator=new ys(this.options),s.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},s.backendConnector=new As(n(this.modules.backend),s.resourceStore,s,this.options),s.backendConnector.on("*",(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(s.languageDetector=n(this.modules.languageDetector),s.languageDetector.init&&s.languageDetector.init(s,this.options.detection,this.options)),this.modules.i18nFormat&&(s.i18nFormat=n(this.modules.i18nFormat),s.i18nFormat.init&&s.i18nFormat.init(this)),this.translator=new hs(this.services,this.options),this.translator.on("*",(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||(t=Es),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(e=>{this[e]=(...t)=>this.store[e](...t)});["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});const s=Rn(),r=()=>{const e=(e,i)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),s.resolve(i),t(e,i)};if(this.languages&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?r():setTimeout(r,0),s}loadResources(e,t=Es){let i=t;const n=Ln(e)?e:this.language;if("function"==typeof e&&(i=e),!this.options.resources||this.options.partialBundledLanguages){var s,r;if("cimode"===(null==n?void 0:n.toLowerCase())&&(!this.options.preload||0===this.options.preload.length))return i();const e=[],t=t=>{if(!t)return;if("cimode"===t)return;this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{"cimode"!==t&&e.indexOf(t)<0&&e.push(t)})};if(n)t(n);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e))}null===(s=this.options.preload)||void 0===s||null===(r=s.forEach)||void 0===r||r.call(s,e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),i(e)})}else i(null)}reloadResources(e,t,i){const n=Rn();return"function"==typeof e&&(i=e,e=void 0),"function"==typeof t&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=Es),this.services.backendConnector.reload(e,t,e=>{n.resolve(),i(e)}),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&rs.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1)){for(let e=0;e<this.languages.length;e++){const t=this.languages[e];if(!(["cimode","dev"].indexOf(t)>-1)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const i=Rn();this.emit("languageChanging",e);const n=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},s=(s,r)=>{r?this.isLanguageChangingTo===e&&(n(r),this.translator.changeLanguage(r),this.isLanguageChangingTo=void 0,this.emit("languageChanged",r),this.logger.log("languageChanged",r)):this.isLanguageChangingTo=void 0,i.resolve((...e)=>this.t(...e)),t&&t(s,(...e)=>this.t(...e))},r=t=>{e||t||!this.services.languageDetector||(t=[]);const i=Ln(t)?t:t&&t[0],r=this.store.hasLanguageSomeTranslations(i)?i:this.services.languageUtils.getBestMatchFromCodes(Ln(t)?[t]:t);var o,a;r&&(this.language||n(r),this.translator.language||this.translator.changeLanguage(r),null===(o=this.services.languageDetector)||void 0===o||null===(a=o.cacheUserLanguage)||void 0===a||a.call(o,r));this.loadResources(r,e=>{s(e,r)})};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(r):this.services.languageDetector.detect(r):r(e):r(this.services.languageDetector.detect()),i}getFixedT(e,t,i){const n=(e,t,...s)=>{let r;r="object"!=typeof t?this.options.overloadTranslationOptionHandler([e,t].concat(s)):Object.assign({},t),r.lng=r.lng||n.lng,r.lngs=r.lngs||n.lngs,r.ns=r.ns||n.ns,""!==r.keyPrefix&&(r.keyPrefix=r.keyPrefix||i||n.keyPrefix);const o=this.options.keySeparator||".";let a;return r.keyPrefix&&Array.isArray(e)?a=e.map(e=>("function"==typeof e&&(e=ls(e,Object.assign(Object.assign({},this.options),t))),`${r.keyPrefix}${o}${e}`)):("function"==typeof e&&(e=ls(e,Object.assign(Object.assign({},this.options),t))),a=r.keyPrefix?`${r.keyPrefix}${o}${e}`:e),this.t(a,r)};return Ln(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(...e){var t;return null===(t=this.translator)||void 0===t?void 0:t.translate(...e)}exists(...e){var t;return null===(t=this.translator)||void 0===t?void 0:t.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],n=!!this.options&&this.options.fallbackLng,s=this.languages[this.languages.length-1];if("cimode"===i.toLowerCase())return!0;const r=(e,t)=>{const i=this.services.backendConnector.state[`${e}|${t}`];return-1===i||0===i||2===i};if(t.precheck){const e=t.precheck(this,r);if(void 0!==e)return e}return!!this.hasResourceBundle(i,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!r(i,e)||n&&!r(s,e)))}loadNamespaces(e,t){const i=Rn();return this.options.ns?(Ln(e)&&(e=[e]),e.forEach(e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}),this.loadResources(e=>{i.resolve(),t&&t(e)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=Rn();Ln(e)&&(e=[e]);const n=this.options.preload||[],s=e.filter(e=>n.indexOf(e)<0&&this.services.languageUtils.isSupportedCode(e));return s.length?(this.options.preload=n.concat(s),this.loadResources(e=>{i.resolve(),t&&t(e)}),i):(t&&t(),Promise.resolve())}dir(e){var t,i;if(e||(e=this.resolvedLanguage||((null===(t=this.languages)||void 0===t?void 0:t.length)>0?this.languages[0]:this.language)),!e)return"rtl";try{const t=new Intl.Locale(e);if(t&&t.getTextInfo){const e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch(e){}const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=(null===(i=this.services)||void 0===i?void 0:i.languageUtils)||new ps(Ss());return e.toLowerCase().indexOf("-latn")>1?"ltr":n.indexOf(s.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){const i=new $s(e,t);return i.createInstance=$s.createInstance,i}cloneInstance(e={},t=Es){const i=e.forkResourceStore;i&&delete e.forkResourceStore;const n=Object.assign(Object.assign(Object.assign({},this.options),e),{isClone:!0}),s=new $s(n);void 0===e.debug&&void 0===e.prefix||(s.logger=s.logger.clone(e));if(["store","services","language"].forEach(e=>{s[e]=this[e]}),s.services=Object.assign({},this.services),s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},i){const e=Object.keys(this.store.data).reduce((e,t)=>(e[t]=Object.assign({},this.store.data[t]),e[t]=Object.keys(e[t]).reduce((i,n)=>(i[n]=Object.assign({},e[t][n]),i),e[t]),e),{});s.store=new ss(e,n),s.services.resourceStore=s.store}return e.interpolation&&(s.services.interpolator=new ys(n)),s.translator=new hs(s.services,n),s.translator.on("*",(e,...t)=>{s.emit(e,...t)}),s.init(n,t),s.translator.options=n,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Ts=$s.createInstance();Ts.createInstance,Ts.dir,Ts.init,Ts.loadResources,Ts.reloadResources,Ts.use,Ts.changeLanguage,Ts.getFixedT,Ts.t,Ts.exists,Ts.setDefaultNamespace,Ts.hasLoadedNamespace,Ts.loadNamespaces,Ts.loadLanguages;const{slice:Is,forEach:Ls}=[];function Rs(e){return Ls.call(Is.call(arguments,1),t=>{if(t)for(const i in t)void 0===e[i]&&(e[i]=t[i])}),e}function Ps(e){if("string"!=typeof e)return!1;return[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(e))}const Ns=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,js=function(e,t){const i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{path:"/"};let n=`${e}=${encodeURIComponent(t)}`;if(i.maxAge>0){const e=i.maxAge-0;if(Number.isNaN(e))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(e)}`}if(i.domain){if(!Ns.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!Ns.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite){switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i.partitioned&&(n+="; Partitioned"),n},Ds={create(e,t,i,n){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};i&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+60*i*1e3)),n&&(s.domain=n),document.cookie=js(e,t,s)},read(e){const t=`${e}=`,i=document.cookie.split(";");for(let e=0;e<i.length;e++){let n=i[e];for(;" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var Fs={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&"undefined"!=typeof document)return Ds.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:i,cookieMinutes:n,cookieDomain:s,cookieOptions:r}=t;i&&"undefined"!=typeof document&&Ds.create(i,e,n,s,r)}},Ms={name:"querystring",lookup(e){let t,{lookupQuerystring:i}=e;if("undefined"!=typeof window){var n;let{search:e}=window.location;!window.location.search&&(null===(n=window.location.hash)||void 0===n?void 0:n.indexOf("?"))>-1&&(e=window.location.hash.substring(window.location.hash.indexOf("?")));const s=e.substring(1).split("&");for(let e=0;e<s.length;e++){const n=s[e].indexOf("=");if(n>0){s[e].substring(0,n)===i&&(t=s[e].substring(n+1))}}}return t}},Bs={name:"hash",lookup(e){let t,{lookupHash:i,lookupFromHashIndex:n}=e;if("undefined"!=typeof window){const{hash:e}=window.location;if(e&&e.length>2){const r=e.substring(1);if(i){const e=r.split("&");for(let n=0;n<e.length;n++){const s=e[n].indexOf("=");if(s>0){e[n].substring(0,s)===i&&(t=e[n].substring(s+1))}}}if(t)return t;if(!t&&n>-1){var s;const t=e.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(t))return;return null===(s=t["number"==typeof n?n:0])||void 0===s?void 0:s.replace("/","")}}}return t}};let zs=null;const qs=()=>{if(null!==zs)return zs;try{if(zs="undefined"!=typeof window&&null!==window.localStorage,!zs)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(e){zs=!1}return zs};var Us={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&qs())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:i}=t;i&&qs()&&window.localStorage.setItem(i,e)}};let Hs=null;const Vs=()=>{if(null!==Hs)return Hs;try{if(Hs="undefined"!=typeof window&&null!==window.sessionStorage,!Hs)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(e){Hs=!1}return Hs};var Ws={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&Vs())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:i}=t;i&&Vs()&&window.sessionStorage.setItem(i,e)}},Ys={name:"navigator",lookup(e){const t=[];if("undefined"!=typeof navigator){const{languages:e,userLanguage:i,language:n}=navigator;if(e)for(let i=0;i<e.length;i++)t.push(e[i]);i&&t.push(i),n&&t.push(n)}return t.length>0?t:void 0}},Gs={name:"htmlTag",lookup(e){let t,{htmlTag:i}=e;const n=i||("undefined"!=typeof document?document.documentElement:null);return n&&"function"==typeof n.getAttribute&&(t=n.getAttribute("lang")),t}},Qs={name:"path",lookup(e){var t;let{lookupFromPathIndex:i}=e;if("undefined"==typeof window)return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(n))return;return null===(t=n["number"==typeof i?i:0])||void 0===t?void 0:t.replace("/","")}},Ks={name:"subdomain",lookup(e){var t;let{lookupFromSubdomainIndex:i}=e;const n="number"==typeof i?i+1:1,s="undefined"!=typeof window&&(null===(t=window.location)||void 0===t||null===(t=t.hostname)||void 0===t?void 0:t.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(s)return s[n]}};let Js=!1;try{document.cookie,Js=!0}catch(dp){}const Zs=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Js||Zs.splice(1,1);const Xs=()=>({order:Zs,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class er{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{languageUtils:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=Rs(t,this.options||{},Xs()),"string"==typeof this.options.convertDetectedLanguage&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=e=>e.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(Fs),this.addDetector(Ms),this.addDetector(Us),this.addDetector(Ws),this.addDetector(Ys),this.addDetector(Gs),this.addDetector(Qs),this.addDetector(Ks),this.addDetector(Bs)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.order,t=[];return e.forEach(e=>{if(this.detectors[e]){let i=this.detectors[e].lookup(this.options);i&&"string"==typeof i&&(i=[i]),i&&(t=t.concat(i))}}),t=t.filter(e=>null!=e&&!Ps(e)).map(e=>this.options.convertDetectedLanguage(e)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)}))}}function tr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ir(e){return ir="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ir(e)}function nr(e,t){if("object"!=ir(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t);if("object"!=ir(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function sr(e){var t=nr(e,"string");return"symbol"==ir(t)?t:t+""}function rr(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,sr(n.key),n)}}function or(e,t,i){return t&&rr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ar(e,t,i){return(t=sr(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}er.type="languageDetector";var lr=[],cr=lr.forEach,dr=lr.slice;function hr(e){return cr.call(dr.call(arguments,1),function(t){if(t)for(var i in t)void 0===e[i]&&(e[i]=t[i])}),e}function pr(e,t){if(t&&"object"===ir(t)){var i="",n=encodeURIComponent;for(var s in t)i+="&"+n(s)+"="+n(t[s]);if(!i)return e;e=e+(-1!==e.indexOf("?")?"&":"?")+i.slice(1)}return e}function ur(e,t,i,n,s){n&&"object"===ir(n)&&(s||(n._t=new Date),n=pr("",n).slice(1)),t.queryStringParams&&(e=pr(e,t.queryStringParams));try{var r;(r=XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0")).open(n?"POST":"GET",e,1),t.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!t.withCredentials,n&&r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");var o=t.customHeaders;if(o="function"==typeof o?o():o)for(var a in o)r.setRequestHeader(a,o[a]);r.onreadystatechange=function(){r.readyState>3&&i&&i(r.responseText,r)},r.send(n)}catch(e){console&&console.log(e)}}function gr(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:JSON.parse,parsePayload:function(e,t,i){return ar({},t,i||"")},crossDomain:!1,ajax:ur}}var mr=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};tr(this,e),this.init(t,i),this.type="backend"}return or(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.services=e,this.options=hr(t,this.options||{},gr())}},{key:"readMulti",value:function(e,t,i){var n=this.options.loadPath;"function"==typeof this.options.loadPath&&(n=this.options.loadPath(e,t));var s=this.services.interpolator.interpolate(n,{lng:e.join("+"),ns:t.join("+")});this.loadUrl(s,i)}},{key:"read",value:function(e,t,i){var n=this.options.loadPath;"function"==typeof this.options.loadPath&&(n=this.options.loadPath([e],[t]));var s=this.services.interpolator.interpolate(n,{lng:e,ns:t});this.loadUrl(s,i)}},{key:"loadUrl",value:function(e,t){var i=this;this.options.ajax(e,this.options,function(n,s){if(s.status>=500&&s.status<600)return t("failed loading "+e,!0);if(s.status>=400&&s.status<500)return t("failed loading "+e,!1);var r,o;try{r=i.options.parse(n,e)}catch(t){o="failed parsing "+e+" to json"}if(o)return t(o,!1);t(null,r)})}},{key:"create",value:function(e,t,i,n){var s=this;"string"==typeof e&&(e=[e]);var r=this.options.parsePayload(t,i,n);e.forEach(function(e){var i=s.services.interpolator.interpolate(s.options.addPath,{lng:e,ns:t});s.options.ajax(i,s.options,function(e,t){},r)})}}]),e}();mr.type="backend";var fr=[],br=fr.forEach,yr=fr.slice;function vr(e){return br.call(yr.call(arguments,1),function(t){if(t)for(var i in t)void 0===e[i]&&(e[i]=t[i])}),e}function _r(e){return e?"function"==typeof e?new e:e:null}function wr(){return{handleEmptyResourcesAsFailed:!0,cacheHitMode:"none"}}function xr(e,t,i,n){var s=e.read.bind(e);if(2!==s.length)s(t,i,n);else try{var r=s(t,i);r&&"function"==typeof r.then?r.then(function(e){return n(null,e)}).catch(n):n(null,r)}catch(e){n(e)}}var kr=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};tr(this,e),this.backends=[],this.type="backend",this.allOptions=n,this.init(t,i)}return or(e,[{key:"init",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=vr(i,this.options||{},wr()),this.allOptions=n,this.options.backends&&this.options.backends.forEach(function(i,s){t.backends[s]=t.backends[s]||_r(i),t.backends[s].init(e,t.options.backendOptions&&t.options.backendOptions[s]||{},n)}),this.services&&this.options.reloadInterval&&setInterval(function(){return t.reload()},this.options.reloadInterval)}},{key:"read",value:function(e,t,i){var n=this,s=this.backends.length,r=function r(a){if(a>=s)return i(new Error("non of the backend loaded data",!0));var l=a===s-1,c=n.options.handleEmptyResourcesAsFailed&&!l?0:-1,d=n.backends[a];d.read?xr(d,e,t,function(s,l,h){if(!s&&l&&Object.keys(l).length>c){if(i(null,l,a),o(a-1,l),d.save&&n.options.cacheHitMode&&["refresh","refreshAndUpdateStore"].indexOf(n.options.cacheHitMode)>-1){if(h&&n.options.refreshExpirationTime&&h+n.options.refreshExpirationTime>Date.now())return;var p=n.backends[a+1];p&&p.read&&xr(p,e,t,function(i,s){i||s&&(Object.keys(s).length<=c||(o(a,s),"refreshAndUpdateStore"===n.options.cacheHitMode&&n.services&&n.services.resourceStore&&n.services.resourceStore.addResourceBundle(e,t,s)))})}}else r(a+1)}):r(a+1)},o=function i(s,r){if(!(s<0)){var o=n.backends[s];o.save?(o.save(e,t,r),i(s-1,r)):i(s-1,r)}};r(0)}},{key:"create",value:function(e,t,i,n){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.backends.forEach(function(o){if(o.create){var a=o.create.bind(o);if(a.length<6)try{var l;(l=5===a.length?a(e,t,i,n,r):a(e,t,i,n))&&"function"==typeof l.then?l.then(function(e){return s(null,e)}).catch(s):s(null,l)}catch(e){s(e)}else a(e,t,i,n,s,r)}})}},{key:"reload",value:function(){var e=this,t=this.services,i=t.backendConnector,n=t.languageUtils,s=t.logger,r=i.language;if(!r||"cimode"!==r.toLowerCase()){var o=[],a=function(e){n.toResolveHierarchy(e).forEach(function(e){o.indexOf(e)<0&&o.push(e)})};a(r),this.allOptions.preload&&this.allOptions.preload.forEach(function(e){return a(e)}),o.forEach(function(t){e.allOptions.ns.forEach(function(e){i.read(t,e,"read",null,null,function(n,r){n&&s.warn("loading namespace ".concat(e," for language ").concat(t," failed"),n),!n&&r&&s.log("loaded namespace ".concat(e," for language ").concat(t),r),i.loaded("".concat(t,"|").concat(e),n,r)})})})}}}]),e}();let Ar;kr.type="backend";class Sr extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{appRoot:{type:String,attribute:"app-root"},urlTemplate:{type:String,attribute:"url-template"},urlIgnore:{type:String,attribute:"url-ignore"},urlPath:{type:String,attribute:"url-path"},idHash:{type:Boolean,attribute:"id-hash"},template:{type:String},endpoint:{type:String,reflect:!0},apiVersion:{type:String,attribute:"api-version",reflect:!0},locales:{type:String},localeFallbackNs:{type:String,attribute:"locale-fallback-ns"},supportedLanguages:{type:Array,attribute:"supported-languages",converter:e=>e.split(/\s*,\s*/)},fallbackLanguage:{type:String,attribute:"fallback-language"},language:{type:String},requireLanguage:{type:Boolean,attribute:"require-language"},unresolved:{type:Boolean,reflect:!0},theme:{type:String}})}constructor(){super(),this.unresolved=!0,this.endpoint=".",this.urlTemplate=null,this.urlIgnore=null,this.urlPath="path",this.idHash=!1,this.apiVersion=void 0,this.requireLanguage=!1,this.supportedLanguages=null,this.fallbackLanguage="en",this.theme=null,this._localeFallbacks=[],this._i18nInstance=null,Ar?this.disabled=!0:(Ar=this,c())}get localeFallbackNs(){return this._localeFallbacks&&this._localeFallbacks.length?this._localeFallbacks.join(" "):""}set localeFallbackNs(e){const t=(e||"").split(/\s+/).map(e=>e.trim()).filter(Boolean),i=new Set;this._localeFallbacks=t.filter(e=>!i.has(e)&&(i.add(e),!0))}disconnectedCallback(){super.disconnectedCallback(),this._i18nInstance=null,Ar===this&&(Ar=null)}async connectedCallback(){if(super.connectedCallback(),this.disabled)return;const e=this.getAttribute("endpoint");e&&(this.endpoint=e),y.configure("path"===this.urlPath,this.idHash,this.appRoot,this.urlTemplate,this.urlIgnore),this.endpoint=this.endpoint.replace(/\/+$/,"");const t=y.state._target;t&&(this.endpoint=t);const i=y.state._api;i&&(this.apiVersion=i);const n=[];if(this.theme?n.push(this.toAbsoluteURL(this.theme,this.endpoint)):n.push("components.css"),console.log("<pb-page> Loading component theme stylesheets from %s",n.join(", ")),this._themeSheet=await f(n),!this.apiVersion){const e=await fetch(`${this.endpoint}/login`).then(e=>e.ok?null:fetch(`${this.endpoint}/api/version`).then(e=>e.json())).catch(()=>fetch(`${this.endpoint}/api/version`).then(e=>e.json()));e?(this.apiVersion=e.api,console.log(`<pb-page> Server reports API version ${this.apiVersion} with app ${e.app.name}/${e.app.version} running on ${e.engine.name}/${e.engine.version}`)):(console.log("<pb-page> No API version reported by server, assuming 0.9.0"),this.apiVersion="0.9.0")}this.requireLanguage||this.signalReady("pb-page-ready",{endpoint:this.endpoint,template:this.template,apiVersion:this.apiVersion})}firstUpdated(){if(super.firstUpdated(),this.disabled)return;this.shadowRoot.querySelector("slot").addEventListener("slotchange",()=>{const e=new CustomEvent("pb-page-loaded",{bubbles:!0,composed:!0});this.dispatchEvent(e)},{once:!0});const e=this.endpoint?`${this.toAbsoluteURL("resources/i18n/",this.endpoint)}{{ns}}/{{lng}}.json`:`${r("../i18n/")}{{ns}}/{{lng}}.json`;console.log("<pb-page> Loading locales. common: %s; additional: %s; namespaces: %o",e,this.locales,this._localeFallbacks);const t=this.locales?[mr,mr]:[mr],i=[{loadPath:e,crossDomain:!0}];this.locales&&i.unshift({loadPath:this.locales,crossDomain:!0});const n={fallbackLng:this.fallbackLanguage,defaultNS:"common",ns:["common"],debug:!1,load:"languageOnly",detection:{lookupQuerystring:"lang"},backend:{backends:t,backendOptions:i}};if(this.language&&(n.lng=this.language),console.log("supported langs: %o",this.supportedLanguages),this.supportedLanguages&&(n.supportedLngs=this.supportedLanguages),this._localeFallbacks.length>0){const e=this._localeFallbacks.slice();n.defaultNS=e[0],n.fallbackNS=e.slice(1),n.ns=e}console.log("<pb-page> i18next options: %o",n),this._i18nInstance=Ts.createInstance(),this._i18nInstance.use(er).use(kr),this._i18nInstance.init(n).then(e=>{var t,i;(u(e),this._updateI18n(e),this.signalReady("pb-i18n-update",{t:e,language:null===(t=this._i18nInstance)||void 0===t?void 0:t.language}),this.requireLanguage)&&this.signalReady("pb-page-ready",{endpoint:this.endpoint,apiVersion:this.apiVersion,template:this.template,language:null===(i=this._i18nInstance)||void 0===i?void 0:i.language})}),this.subscribeTo("pb-i18n-language",e=>{const{language:t}=e.detail;this._i18nInstance.changeLanguage(t).then(e=>{var t;this._updateI18n(e),this.emitTo("pb-i18n-update",{t:e,language:null===(t=this._i18nInstance)||void 0===t?void 0:t.language},[])},[])}),this.addEventListener("pb-global-toggle",this._toggleFeatures.bind(this)),this.removeAttribute("unresolved"),console.log("<pb-page> endpoint: %s; trigger window resize",this.endpoint),this.querySelectorAll("app-header").forEach(e=>{"function"==typeof e._notifyLayoutChanged&&e._notifyLayoutChanged()}),Sn(this)}_updateI18n(e){this.querySelectorAll("[data-i18n]").forEach(t=>{const i=t.getAttribute("data-i18n"),n=/(?:\[([^\]]+)\])?([^;]+)/g;let s=n.exec(i);for(;s;){const r=e(s[2]);s[1]?t.setAttribute(s[1],r):t.innerHTML=r,s=n.exec(i)}})}get stylesheet(){return this._themeSheet}_toggleFeatures(e){const t=e.detail;this.querySelectorAll(t.selector).forEach(e=>{const i=t.command||"toggle";e.command&&e.command(i,t.state),t.state?e.classList.add(i):e.classList.remove(i)})}render(){return t`<slot></slot>`}static get styles(){return n`
      :host {
        display: block;
      }
    `}}customElements.define("pb-page",Sr);class Cr extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{total:{type:Number,reflect:!0},start:{type:Number,reflect:!0},perPage:{type:Number,attribute:"per-page"},foundLabel:{type:String,attribute:"found-label"},page:{type:Number},pageCount:{type:Number,attribute:"page-count"},range:{type:Number},pages:{type:Array},showPreviousNext:{type:Boolean,attribute:"show-previous-next"}})}constructor(){super(),this.total=0,this.start=1,this.perPage=10,this.page=1,this.pageCount=10,this.range=5,this.pages=[],this.foundLabel="browse.items"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-results-received",this._refresh.bind(this))}render(){return t`
      <button
        type="button"
        class="pb-paginate__nav"
        data-page="first"
        @click=${this._handleFirst}
        aria-label=${p("paginate.first")}
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
        aria-label=${p("paginate.last")}
      >
        <pb-icon icon="chevron-right"></pb-icon>
      </button>

      <span class="found" part="count">${p(this.foundLabel,{count:this.total})}</span>
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
    `}_update(e,t){if(!t||!e)return;this.pageCount=Math.ceil(t/this.perPage),this.page=Math.ceil(e/this.perPage);let i=Math.max(this.page-Math.ceil(this.range/2)+1,1);const n=Math.min(i+this.range-1,this.pageCount);i=Math.max(n-this.range+1,1),console.log("<pb-paginate> start: %d, total: %d, perPage: %d, pageCount: %s, page: %d, lower: %d, upper: %d, range: %d, show-previous-next: %s",e,t,this.perPage,this.pageCount,this.page,i,n,this.range,this.showPreviousNext);const s=[],r=[];for(let e=i;e<=n;e++)s.push({label:e,class:e===this.page?"active":""}),this.showPreviousNext&&(1===i&&1===e&&this.page===e&&r.push({label:e,index:0}),e+1===this.page&&r.push({label:e,index:s.length-1}),e-1===this.page&&r.push({label:e,index:s.length-1}));this.pages=s,this.prevNextPages=r}_refresh(e){this.start=Number(e.detail.start),this.total=e.detail.count,this._update(this.start,this.total)}_handleClick(e,t){this.start=(this.pages[t].label-1)*this.perPage+1;for(const e of["pb-load","pb-paginate"])this.emitTo(e,{params:{start:this.start,"per-page":this.perPage,page:t}})}_handleFirst(){this.start=1;for(const e of["pb-load","pb-paginate"])this.emitTo(e,{params:{start:1,"per-page":this.perPage,page:0}})}_handleLast(){this.start=(this.pageCount-1)*this.perPage+1;for(const e of["pb-load","pb-paginate"])this.emitTo(e,{params:{start:this.start,"per-page":this.perPage,page:this.pageCount-1}})}}customElements.define("pb-paginate",Cr);class Er extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{_disabled:{type:Boolean}})}constructor(){super(),this._disabled=!0}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-start-update",this._startUpdate.bind(this)),this.subscribeTo("pb-end-update",this._endUpdate.bind(this))}render(){return this.style.visibility=this._disabled?"hidden":"visible",t` <progress id="progress" indeterminate ?disabled="${this._disabled}"></progress> `}static get styles(){return n`
      :host {
        display: block;
        visibility: hidden;
      }

      progress {
        width: 100%;
      }
    `}_startUpdate(){this._disabled=!1}_endUpdate(){this._disabled=!0}}customElements.define("pb-progress",Er);class Or extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{action:{type:String},name:{type:String},value:{type:String},start:{type:Number},placeHolder:{type:String,attribute:"place-holder"},redirect:{type:Boolean},currentDoc:{type:String,attribute:"current-doc"},submitOnLoad:{type:Boolean,attribute:"submit-on-load"},subforms:{type:String},disableAutocomplete:{type:Boolean,attribute:"disable-autocomplete"},source:{type:String}})}constructor(){super(),this.name="query",this.value="",this.redirect=!1,this.submitOnLoad=!1,this.placeHolder="search.placeholder",this.disableAutocomplete=!1,this.start=1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-search-resubmit",this._doSearch.bind(this)),this.subscribeTo("pb-paginate",e=>{this.start=e.detail.params.start,this._doSearch(!0)}),y.subscribe(this,e=>{this.value=e.query||"",this.start=e.start||1,this.submitOnLoad&&this.emitTo("pb-load",{url:this.action,params:e})})}firstUpdated(){if(a("pb-page-ready",e=>{const t=this.shadowRoot.getElementById("autocompleteLoader"),i=this.source||"api/search/autocomplete";this.minApiVersion("1.0.0")?t.url=`${e.endpoint}/${i}`:t.url=`${e.endpoint}/modules/autocomplete.xql`}),this.submitOnLoad){const e=y.state;y.replace(this,e),this.emitTo("pb-load",{url:this.action,params:e})}this.addEventListener("click",e=>{const t=e.target.closest("[slot]");t&&("searchButton"===t.slot&&this._doSearch(),"resetButton"===t.slot&&this._reset())})}render(){return t`
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
            placeholder="${p(this.placeHolder)}"
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
    `}_serializeForm(){const e=this.shadowRoot.getElementById("searchPageForm"),t=new FormData(e),i={};for(const[e,n]of t.entries())i[e]=n;return this.querySelectorAll("input, select, textarea").forEach(e=>{e.name&&"button"!==e.type&&"submit"!==e.type&&"reset"!==e.type&&("checkbox"===e.type||"radio"===e.type?e.checked&&(i[e.name]=e.value):i[e.name]=e.value)}),i}_doSearch(e=!1){let t=this._serializeForm();if(t=this._paramsFromSubforms(t),t.start=e?this.start:1,this.redirect){const e=new URLSearchParams;Object.keys(t).forEach(i=>{e.append(i,t[i])}),window.location.href=`${this.action}?${e}`}else y.commit(this,t),this.emitTo("pb-load",{url:this.action,params:t})}_handleSubmit(e){e.preventDefault(),this._doSearch()}_paramsFromSubforms(e){return this.subforms&&document.querySelectorAll(this.subforms).forEach(t=>{t.serializeForm&&Object.assign(e,t.serializeForm())}),e}_handleEnter(e){if(13===e.keyCode)return this._doSearch();const{value:t}=this.shadowRoot.getElementById("search");if(t.length>2){const e=this.shadowRoot.getElementById("autocompleteLoader");e.params={query:t},e.generateRequest()}}_doSubmit(){this._doSearch()}_reset(){this.shadowRoot.getElementById("searchPageForm").reset(),y.commit(this,{},!0)}_updateSuggestions(){const e=this.shadowRoot.getElementById("autocompleteLoader"),t=this.shadowRoot.getElementById("suggestions");e.lastResponse&&(t.innerHTML="",e.lastResponse.forEach(({text:e,value:i})=>{const n=document.createElement("option");n.value=i,n.innerText=e,t.appendChild(n)}))}}function $r(e,t){const i=t.findIndex(t=>t.selector===e.selector);i>-1?t[i]=e:t.push(e)}customElements.get("pb-search")||customElements.define("pb-search",Or);class Tr extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{name:{type:String},selector:{type:String},action:{type:String},on:{type:String},off:{type:String},default:{type:String},propertiesOn:{type:Object,attribute:"properties-on"},propertiesOff:{type:Object,attribute:"properties-off"},checked:{type:Boolean},initFromView:{type:Boolean,attribute:"init-from-view"},global:{type:Boolean}})}constructor(){super(),this.default="on",this.on="on",this.off="off",this.action="toggle",this.propertiesOn={},this.propertiesOff={},this.initFromView=!1,this.global=!1}render(){return t`
            <input type="checkbox" id="checkbox" @change="${this._changed}" .checked="${this.checked}" .disabled="${this.disabled}"></input>
            <label for="checkbox"><slot></slot></label>
        `}connectedCallback(){super.connectedCallback(),y.subscribe(this,e=>{const t=e[this.name];this._setChecked(t)});const e=y.state[this.name];this._setChecked(e);const t={};t[this.name]=this.checked?this.on:this.off,y.replace(this,t),this._saveState(),this.signalReady(),a("pb-page-ready",()=>{this.global?this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:{selector:this.selector,command:this.action,state:this.checked},bubbles:!0,composed:!0})):this.selector&&this.emitTo("pb-toggle",{refresh:!1})})}_setChecked(e){this.checked=void 0!==e?e===this.on:this.default===this.on}attributeChangedCallback(e,t,i){switch(super.attributeChangedCallback(e,t,i),e){case this.on:this.propertiesOn[this.name]=i;break;case this.off:this.propertiesOff[this.name]=i}}_changed(){if(this.checked=this.shadowRoot.getElementById("checkbox").checked,this._saveState(),this.global){const e={};e[this.name]=this.checked?this.on:this.off,y.commit(this,e)}else this.emitTo("pb-toggle",{refresh:!this.selector})}_saveState(){const e=y.getState(this);if(e[this.name]=this.checked?this.on:this.off,Object.assign(e,this.checked?this.propertiesOn:this.propertiesOff),this.selector){const t={selector:this.selector,command:this.action,state:this.checked};this.global?this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:t,bubbles:!0,composed:!0})):(e.selectors=e.selectors||[],$r(t,e.selectors))}}}customElements.define("pb-toggle-feature",Tr);class Ir extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{name:{type:String},label:{type:String},selected:{type:Number},items:{type:Array}})}constructor(){super(),this.initializing=!0,this.items=[],this.label="document.selectFeature"}connectedCallback(){super.connectedCallback(),y.subscribe(this,e=>{const t=e[this.name];this.selected=void 0!==t?parseInt(t,10):0,this.requestUpdate()});const e=y.state[this.name];void 0!==e?this.selected=parseInt(e,10):this.items.length>0&&(this.selected=0);const t={};t[this.name]=this.selected,y.replace(this,t),this.signalReady()}updated(e){super.updated(e),e.has("items")&&(Array.isArray(this.items)||(this.items=[]),("number"!=typeof this.selected||this.selected>=this.items.length)&&(this.selected=this.items.length>0?0:null))}_selectionChanged(e){const t=parseInt(e.target.value,10);if(Number.isNaN(t))return;this.selected=t;const i=this._saveState(t);this.initializing?this.initializing=!1:this.emitTo("pb-toggle",{refresh:i})}_saveState(e){const t=e,i=y.getState(this);i[this.name]=t,Object.assign(i,this.items[t].properties),this.items[t].selectors&&(i.selectors||(i.selectors=[]),this.items[t].selectors.forEach(e=>{e.global?(y.commit(this,i),this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:e,bubbles:!0,composed:!0}))):$r({selector:e.selector,state:e.state,command:e.command},i.selectors)}));const n=this.items[t];if(!n)return!1;const s=n.properties||{};return Object.assign(i,s),n.selectors&&(i.selectors||(i.selectors=[]),n.selectors.forEach(e=>{e.global?(y.commit(this,i),this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:e,bubbles:!0,composed:!0}))):$r({selector:e.selector,state:e.state,command:e.command},i.selectors)})),s&&"object"==typeof s}render(){const e=Array.isArray(this.items)?this.items:[];return t`
      <label class="pb-select-feature__label" for="feature-select">
        ${p(this.label)}
      </label>
      <select
        id="feature-select"
        class="pb-select-feature__select"
        name=${w(this.name||void 0)}
        .value=${null==this.selected?"":String(this.selected)}
        ?disabled=${this.disabled}
        @change=${this._selectionChanged}
      >
        ${e.map((e,i)=>t`<option value="${i}">${p(e.name)}</option>`)}
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
    `}}customElements.define("pb-select-feature",Ir);const Lr="undefined"!=typeof window,Rr=Lr?window:null,Pr=Lr?document:null,Nr={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},jr={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},Dr={NONE:0,AUTO:1,FORCE:2},Fr={replace:0,none:1,blend:2},Mr=Symbol(),Br=Symbol(),zr=Symbol(),qr=Symbol(),Ur=Symbol(),Hr=1e-11,Vr=1e12,Wr=1e3,Yr=120,Gr="",Qr="var(",Kr=(()=>{const e=new Map;return e.set("x","translateX"),e.set("y","translateY"),e.set("z","translateZ"),e})(),Jr=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","matrix","matrix3d","perspective"],Zr=Jr.reduce((e,t)=>Object.assign(Object.assign({},e),{},{[t]:t+"("}),{}),Xr=()=>{},eo=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,to=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,io=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,no=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,so=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,ro=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,oo=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,ao=/([a-z])([A-Z])/g,lo=/(\w+)(\([^)]+\)+)/g,co=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/,ho={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:Yr,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:Wr,delay:0,loopDelay:0,ease:"out(2)",composition:Fr.replace,modifier:e=>e,onBegin:Xr,onBeforeUpdate:Xr,onUpdate:Xr,onLoop:Xr,onPause:Xr,onComplete:Xr,onRender:Xr},po={root:Pr},uo={defaults:ho,precision:4,timeScale:1,tickThreshold:200},go={version:"4.2.2",engine:null};Lr&&(Rr.AnimeJS||(Rr.AnimeJS=[]),Rr.AnimeJS.push(go));const mo=e=>e.replace(ao,"$1-$2").toLowerCase(),fo=(e,t)=>0===e.indexOf(t),bo=Date.now,yo=Array.isArray,vo=e=>e&&e.constructor===Object,_o=e=>"number"==typeof e&&!isNaN(e),wo=e=>"string"==typeof e,xo=e=>"function"==typeof e,ko=e=>void 0===e,Ao=e=>ko(e)||null===e,So=e=>Lr&&e instanceof SVGElement,Co=e=>eo.test(e),Eo=e=>fo(e,"rgb"),Oo=e=>fo(e,"hsl"),$o=e=>Co(e)||Eo(e)||Oo(e),To=e=>!uo.defaults.hasOwnProperty(e),Io=["opacity","rotate","overflow","color"],Lo=(e,t)=>{if(Io.includes(t))return!1;if(e.getAttribute(t)||t in e){if("scale"===t){const t=e.parentNode;return t&&"filter"===t.tagName}return!0}},Ro=Math.pow,Po=Math.sqrt,No=Math.sin,jo=Math.cos,Do=Math.floor,Fo=Math.asin,Mo=Math.PI,Bo=Math.round,zo=(e,t,i)=>e<t?t:e>i?i:e,qo={},Uo=(e,t)=>{if(t<0)return e;if(!t)return Bo(e);let i=qo[t];return i||(i=qo[t]=10**t),Bo(e*i)/i},Ho=(e,t,i)=>e+(t-e)*i,Vo=e=>e===1/0?Vr:e===-1/0?-Vr:e,Wo=e=>e<=Hr?Hr:Vo(Uo(e,11)),Yo=e=>yo(e)?[...e]:e,Go=(e,t)=>{const i=Object.assign({},e);for(let n in t){const s=e[n];i[n]=ko(s)?t[n]:s}return i},Qo=(e,t,i,n="_prev",s="_next")=>{let r=e._head,o=s;for(i&&(r=e._tail,o=n);r;){const e=r[o];t(r),r=e}},Ko=(e,t,i="_prev",n="_next")=>{const s=t[i],r=t[n];s?s[n]=r:e._head=r,r?r[i]=s:e._tail=s,t[i]=null,t[n]=null},Jo=(e,t,i,n="_prev",s="_next")=>{let r=e._tail;for(;r&&i&&i(r,t);)r=r[n];const o=r?r[s]:e._head;r?r[s]=t:e._head=t,o?o[n]=t:e._tail=t,t[n]=r,t[s]=o},Zo=(e,t,i)=>{const n=e.style.transform;let s;if(n){const r=e[qr];let o;for(;o=lo.exec(n);){const e=o[1],n=o[2].slice(1,-1);r[e]=n,e===t&&(s=n,i&&(i[t]=n))}}return n&&!ko(s)?s:fo(t,"scale")?"1":fo(t,"rotate")||fo(t,"skew")?"0deg":"0px"},Xo=e=>{const t=to.exec(e)||io.exec(e),i=ko(t[4])?1:+t[4];return[+t[1],+t[2],+t[3],i]},ea=e=>{const t=e.length,i=4===t||5===t;return[+("0x"+e[1]+e[i?1:2]),+("0x"+e[i?2:3]+e[i?2:4]),+("0x"+e[i?3:5]+e[i?3:6]),5===t||9===t?+(+("0x"+e[i?4:7]+e[i?4:8])/255).toFixed(3):1]},ta=(e,t,i)=>(i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e),ia=e=>{const t=no.exec(e)||so.exec(e),i=+t[1]/360,n=+t[2]/100,s=+t[3]/100,r=ko(t[4])?1:+t[4];let o,a,l;if(0===n)o=a=l=s;else{const e=s<.5?s*(1+n):s+n-s*n,t=2*s-e;o=Uo(255*ta(t,e,i+1/3),0),a=Uo(255*ta(t,e,i),0),l=Uo(255*ta(t,e,i-1/3),0)}return[o,a,l,r]},na=e=>Eo(e)?Xo(e):Co(e)?ea(e):Oo(e)?ia(e):[0,0,0,1],sa=(e,t)=>ko(e)?t:e,ra=(e,t,i,n,s)=>{let r;if(xo(e))r=()=>{const s=e(t,i,n);return isNaN(+s)?s||0:+s};else{if(!wo(e)||!fo(e,Qr))return e;r=()=>{var i;const n=e.match(co),s=n[1],r=n[2];let o=null===(i=getComputedStyle(t))||void 0===i?void 0:i.getPropertyValue(s);return o&&o.trim()!==Gr||!r||(o=r.trim()),o||0}}return s&&(s.func=r),r()},oa=(e,t)=>e[Br]?e[zr]&&Lo(e,t)?Nr.ATTRIBUTE:Jr.includes(t)||Kr.get(t)?Nr.TRANSFORM:fo(t,"--")?Nr.CSS_VAR:t in e.style?Nr.CSS:t in e?Nr.OBJECT:Nr.ATTRIBUTE:Nr.OBJECT,aa=(e,t,i)=>{const n=e.style[t];n&&i&&(i[t]=n);const s=n||getComputedStyle(e[Ur]||e).getPropertyValue(t);return"auto"===s?"0":s},la=(e,t,i,n)=>{const s=ko(i)?oa(e,t):i;return s===Nr.OBJECT?e[t]||0:s===Nr.ATTRIBUTE?e.getAttribute(t):s===Nr.TRANSFORM?Zo(e,t,n):s===Nr.CSS_VAR?aa(e,t,n).trimStart():aa(e,t,n)},ca=(e,t,i)=>"-"===i?e-t:"+"===i?e+t:e*t,da=()=>({t:jr.NUMBER,n:0,u:null,o:null,d:null,s:null}),ha=(e,t)=>{if(t.t=jr.NUMBER,t.n=0,t.u=null,t.o=null,t.d=null,t.s=null,!e)return t;const i=+e;if(isNaN(i)){let i=e;"="===i[1]&&(t.o=i[0],i=i.slice(2));const n=!i.includes(" ")&&oo.exec(i);if(n)return t.t=jr.UNIT,t.n=+n[1],t.u=n[2],t;if(t.o)return t.n=+i,t;if($o(i))return t.t=jr.COLOR,t.d=na(i),t;{const e=i.match(ro);return t.t=jr.COMPLEX,t.d=e?e.map(Number):[],t.s=i.split(ro)||[],t}}return t.n=i,t},pa=(e,t)=>(t.t=e._valueType,t.n=e._toNumber,t.u=e._unit,t.o=null,t.d=Yo(e._toNumbers),t.s=Yo(e._strings),t),ua=da(),ga=(e,t,i,n,s)=>{const r=e.parent,o=e.duration,a=e.completed,l=e.iterationDuration,c=e.iterationCount,d=e._currentIteration,h=e._loopDelay,p=e._reversed,u=e._alternate,g=e._hasChildren,m=e._delay,f=e._currentTime,b=m+l,y=t-m,v=zo(f,-m,o),_=zo(y,-m,o),w=y-f,x=_>0,k=_>=o,A=o<=Hr,S=s===Dr.FORCE;let C=0,E=y,O=0;if(c>1){const t=~~(_/(l+(k?0:h)));e._currentIteration=zo(t,0,c),k&&e._currentIteration--,C=e._currentIteration%2,E=_%(l+h)||0}const $=p^(u&&C),T=e._ease;let I=k?$?0:o:$?l-E:E;T&&(I=l*T(I/l)||0);const L=(r?r.backwards:y<f)?!$:!!$;if(e._currentTime=y,e._iterationTime=I,e.backwards=L,x&&!e.began?(e.began=!0,i||r&&(L||!r.began)||e.onBegin(e)):y<=0&&(e.began=!1),i||g||!x||e._currentIteration===d||e.onLoop(e),S||s===Dr.AUTO&&(t>=m&&t<=b||t<=m&&v>m||t>=b&&v!==o)||I>=b&&v!==o||I<=m&&v>0||t<=v&&v===o&&a||k&&!a&&A){if(x&&(e.computeDeltaTime(v),i||e.onBeforeUpdate(e)),!g){const t=S||(L?-1*w:w)>=uo.tickThreshold,s=e._offset+(r?r._offset:0)+m+I;let o,a,l,c,d=e._head,h=0;for(;d;){const e=d._composition,i=d._currentTime,r=d._changeDuration,p=d._absoluteStartTime+d._changeDuration,u=d._nextRep,g=d._prevRep,m=e!==Fr.none;if((t||(i!==r||s<=p+(u?u._delay:0))&&(0!==i||s>=d._absoluteStartTime))&&(!m||!d._isOverridden&&(!d._isOverlapped||s<=p)&&(!u||u._isOverridden||s<=u._absoluteStartTime)&&(!g||g._isOverridden||s>=g._absoluteStartTime+g._changeDuration+d._delay))){const t=d._currentTime=zo(I-d._startTime,0,r),i=d._ease(t/d._updateDuration),s=d._modifier,p=d._valueType,u=d._tweenType,g=u===Nr.OBJECT,f=p===jr.NUMBER,b=f&&g||0===i||1===i?-1:uo.precision;let y,v;if(f)y=v=s(Uo(Ho(d._fromNumber,d._toNumber,i),b));else if(p===jr.UNIT)v=s(Uo(Ho(d._fromNumber,d._toNumber,i),b)),y=`${v}${d._unit}`;else if(p===jr.COLOR){const e=d._fromNumbers,t=d._toNumbers,n=Uo(zo(s(Ho(e[0],t[0],i)),0,255),0),r=Uo(zo(s(Ho(e[1],t[1],i)),0,255),0),o=Uo(zo(s(Ho(e[2],t[2],i)),0,255),0),a=zo(s(Uo(Ho(e[3],t[3],i),b)),0,1);if(y=`rgba(${n},${r},${o},${a})`,m){const e=d._numbers;e[0]=n,e[1]=r,e[2]=o,e[3]=a}}else if(p===jr.COMPLEX){y=d._strings[0];for(let e=0,t=d._toNumbers.length;e<t;e++){const t=s(Uo(Ho(d._fromNumbers[e],d._toNumbers[e],i),b)),n=d._strings[e+1];y+=`${n?t+n:t}`,m&&(d._numbers[e]=t)}}if(m&&(d._number=v),n||e===Fr.blend)d._value=y;else{const e=d.property;o=d.target,g?o[e]=y:u===Nr.ATTRIBUTE?o.setAttribute(e,y):(a=o.style,u===Nr.TRANSFORM?(o!==l&&(l=o,c=o[qr]),c[e]=y,h=1):u===Nr.CSS?a[e]=y:u===Nr.CSS_VAR&&a.setProperty(e,y)),x&&(O=1)}}if(h&&d._renderTransforms){let e=Gr;for(let t in c)e+=`${Zr[t]}${c[t]}) `;a.transform=e,h=0}d=d._next}!i&&O&&e.onRender(e)}!i&&x&&e.onUpdate(e)}return r&&A?!i&&(r.began&&!L&&y>0&&!a||L&&y<=Hr&&a)&&(e.onComplete(e),e.completed=!L):x&&k?c===1/0?e._startTime+=e.duration:e._currentIteration>=c-1&&(e.paused=!0,a||g||(e.completed=!0,i||r&&(L||!r.began)||(e.onComplete(e),e._resolve(e)))):e.completed=!1,O},ma=(e,t,i,n,s)=>{const r=e._currentIteration;if(ga(e,t,i,n,s),e._hasChildren){const o=e,a=o.backwards,l=n?t:o._iterationTime,c=bo();let d=0,h=!0;if(!n&&o._currentIteration!==r){const e=o.iterationDuration;Qo(o,t=>{if(a){const n=t.duration,s=t._offset+t._delay;i||!(n<=Hr)||s&&s+n!==e||t.onComplete(t)}else!t.completed&&!t.backwards&&t._currentTime<t.iterationDuration&&ga(t,e,i,1,Dr.FORCE),t.began=!1,t.completed=!1}),i||o.onLoop(o)}Qo(o,e=>{const t=Uo((l-e._offset)*e._speed,12),r=e._fps<o._fps?e.requestTick(c):s;d+=ga(e,t,i,n,r),!e.completed&&h&&(h=!1)},a),!i&&d&&o.onRender(o),(h||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,i||(o.onComplete(o),o._resolve(o))))}},fa={},ba=(e,t,i)=>{if(i===Nr.TRANSFORM){const t=Kr.get(e);return t||e}if(i===Nr.CSS||i===Nr.ATTRIBUTE&&So(t)&&e in t.style){const t=fa[e];if(t)return t;{const t=e?mo(e):e;return fa[e]=t,t}}return e},ya=e=>{if(e._hasChildren)Qo(e,ya,!0);else{const t=e;t.pause(),Qo(t,e=>{const i=e.property,n=e.target;if(n[Br]){const s=n.style,r=e._inlineValue,o=Ao(r)||r===Gr;if(e._tweenType===Nr.TRANSFORM){const t=n[qr];if(o?delete t[i]:t[i]=r,e._renderTransforms)if(Object.keys(t).length){let e=Gr;for(let i in t)e+=Zr[i]+t[i]+") ";s.transform=e}else s.removeProperty("transform")}else o?s.removeProperty(mo(i)):s[i]=r;t._tail===e&&t.targets.forEach(e=>{e.getAttribute&&e.getAttribute("style")===Gr&&e.removeAttribute("style")})}})}return e};class va{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._elapsedTime=e,this._startTime=e,this._lastTime=e,this._scheduledTime=0,this._frameDuration=Uo(Wr/Yr,0),this._fps=Yr,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){const t=this._frameDuration,i=+e,n=i<Hr?Hr:i,s=Uo(Wr/n,0);this._fps=n,this._frameDuration=s,this._scheduledTime+=s-t}get speed(){return this._speed}set speed(e){const t=+e;this._speed=t<Hr?Hr:t}requestTick(e){const t=this._scheduledTime,i=this._elapsedTime;if(this._elapsedTime+=e-i,i<t)return Dr.NONE;const n=this._frameDuration,s=i-t;return this._scheduledTime+=s<n?n:s,Dr.AUTO}computeDeltaTime(e){const t=e-this._lastTime;return this.deltaTime=t,this._lastTime=e,t}}const _a={animation:null,update:Xr},wa=e=>{let t=_a.animation;return t||(t={duration:Hr,computeDeltaTime:Xr,_offset:0,_delay:0,_head:null,_tail:null},_a.animation=t,_a.update=()=>{e.forEach(e=>{for(let t in e){const i=e[t],n=i._head;if(n){const e=n._valueType,t=e===jr.COMPLEX||e===jr.COLOR?Yo(n._fromNumbers):null;let s=n._fromNumber,r=i._tail;for(;r&&r!==n;){if(t)for(let e=0,i=r._numbers.length;e<i;e++)t[e]+=r._numbers[e];else s+=r._number;r=r._prevAdd}n._toNumber=s,n._toNumbers=t}}}),ga(t,1,1,0,Dr.FORCE)}),t},xa=(()=>Lr?requestAnimationFrame:setImmediate)(),ka=(()=>Lr?cancelAnimationFrame:clearImmediate)();class Aa extends va{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=ho,this.paused=!0,this.reqId=0}update(){const e=this._currentTime=bo();if(this.requestTick(e)){this.computeDeltaTime(e);const t=this._speed,i=this._fps;let n=this._head;for(;n;){const s=n._next;n.paused?(Ko(this,n),this._hasChildren=!!this._tail,n._running=!1,n.completed&&!n._cancelled&&n.cancel()):ma(n,(e-n._startTime)*n._speed*t,0,0,n._fps<i?n.requestTick(e):Dr.AUTO),n=s}_a.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(bo()),this.reqId=xa(Ca)),this}pause(){if(this.reqId)return this.paused=!0,Ea()}resume(){if(this.paused)return this.paused=!1,Qo(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(1===uo.timeScale?1:Wr)}set speed(e){this._speed=e*uo.timeScale,Qo(this,e=>e.speed=e._speed)}get timeUnit(){return 1===uo.timeScale?"ms":"s"}set timeUnit(e){const t=.001,i="s"===e,n=i?t:1;if(uo.timeScale!==n){uo.timeScale=n,uo.tickThreshold=200*n;const e=i?t:Wr;this.defaults.duration*=e,this._speed*=e}}get precision(){return uo.precision}set precision(e){uo.precision=e}}const Sa=(()=>{const e=new Aa(bo());return Lr&&(go.engine=e,Pr.addEventListener("visibilitychange",()=>{e.pauseOnDocumentHidden&&(Pr.hidden?e.pause():e.resume())})),e})(),Ca=()=>{Sa._head?(Sa.reqId=xa(Ca),Sa.update()):Sa.reqId=0},Ea=()=>(ka(Sa.reqId),Sa.reqId=0,Sa),Oa={_rep:new WeakMap,_add:new Map},$a=(e,t,i="_rep")=>{const n=Oa[i];let s=n.get(e);return s||(s={},n.set(e,s)),s[t]?s[t]:s[t]={_head:null,_tail:null}},Ta=(e,t)=>e._isOverridden||e._absoluteStartTime>t._absoluteStartTime,Ia=e=>{e._isOverlapped=1,e._isOverridden=1,e._changeDuration=Hr,e._currentTime=Hr},La=(e,t)=>{const i=e._composition;if(i===Fr.replace){const i=e._absoluteStartTime;Jo(t,e,Ta,"_prevRep","_nextRep");const n=e._prevRep;if(n){const t=n.parent,s=n._absoluteStartTime+n._changeDuration;if(e.parent.id!==t.id&&t.iterationCount>1&&s+(t.duration-t.iterationDuration)>i){Ia(n);let e=n._prevRep;for(;e&&e.parent.id===t.id;)Ia(e),e=e._prevRep}const r=i-e._delay;if(s>r){const e=n._startTime,t=s-(e+n._updateDuration),i=Uo(r-t-e,12);n._changeDuration=i,n._currentTime=i,n._isOverlapped=1,i<Hr&&Ia(n)}let o=!0;if(Qo(t,e=>{e._isOverlapped||(o=!1)}),o){const e=t.parent;if(e){let i=!0;Qo(e,e=>{e!==t&&Qo(e,e=>{e._isOverlapped||(i=!1)})}),i&&e.cancel()}else t.cancel()}}}else if(i===Fr.blend){const t=$a(e.target,e.property,"_add"),i=wa(Oa._add);let n=t._head;n||(n=Object.assign({},e),n._composition=Fr.replace,n._updateDuration=Hr,n._startTime=0,n._numbers=Yo(e._fromNumbers),n._number=0,n._next=null,n._prev=null,Jo(t,n),Jo(i,n));const s=e._toNumber;if(e._fromNumber=n._fromNumber-s,e._toNumber=0,e._numbers=Yo(e._fromNumbers),e._number=0,n._fromNumber=s,e._toNumbers){const t=Yo(e._toNumbers);t&&t.forEach((t,i)=>{e._fromNumbers[i]=n._fromNumbers[i]-t,e._toNumbers[i]=0}),n._fromNumbers=t}Jo(t,e,null,"_prevAdd","_nextAdd")}return e},Ra=e=>{const t=e._composition;if(t!==Fr.none){const i=e.target,n=e.property,s=Oa._rep.get(i)[n];if(Ko(s,e,"_prevRep","_nextRep"),t===Fr.blend){const t=Oa._add,s=t.get(i);if(!s)return;const r=s[n],o=_a.animation;Ko(r,e,"_prevAdd","_nextAdd");const a=r._head;if(a&&a===r._tail){Ko(r,a,"_prevAdd","_nextAdd"),Ko(o,a);let e=!0;for(let t in s)if(s[t]._head){e=!1;break}e&&t.delete(i)}}}return e},Pa=e=>(e.paused=!0,e.began=!1,e.completed=!1,e),Na=e=>e._cancelled?(e._hasChildren?Qo(e,Na):Qo(e,e=>{e._composition!==Fr.none&&La(e,$a(e.target,e.property))}),e._cancelled=0,e):e;let ja=0;class Da extends va{constructor(e={},t=null,i=0){super(0);const{id:n,delay:s,duration:r,reversed:o,alternate:a,loop:l,loopDelay:c,autoplay:d,frameRate:h,playbackRate:p,onComplete:u,onLoop:g,onPause:m,onBegin:f,onBeforeUpdate:b,onUpdate:y}=e,v=t?0:Sa._elapsedTime,_=t?t.defaults:uo.defaults,w=xo(s)||ko(s)?_.delay:+s,x=xo(r)||ko(r)?1/0:+r,k=sa(l,_.loop),A=sa(c,_.loopDelay),S=!0===k||k===1/0||k<0?1/0:k+1;let C=0;t?C=i:(Sa.reqId||Sa.requestTick(bo()),C=(Sa._elapsedTime-Sa._startTime)*uo.timeScale),this.id=ko(n)?++ja:n,this.parent=t,this.duration=Vo((x+A)*S-A)||Hr,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=f||_.onBegin,this.onBeforeUpdate=b||_.onBeforeUpdate,this.onUpdate=y||_.onUpdate,this.onLoop=g||_.onLoop,this.onPause=m||_.onPause,this.onComplete=u||_.onComplete,this.iterationDuration=x,this.iterationCount=S,this._autoplay=!t&&sa(d,_.autoplay),this._offset=C,this._delay=w,this._loopDelay=A,this._iterationTime=0,this._currentIteration=0,this._resolve=Xr,this._running=!1,this._reversed=+sa(o,_.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=sa(a,_.alternate),this._prev=null,this._next=null,this._elapsedTime=v,this._startTime=v,this._lastTime=v,this._fps=sa(h,_.frameRate),this._speed=sa(p,_.playbackRate)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return zo(Uo(this._currentTime,uo.precision),-this._delay,this.duration)}set currentTime(e){const t=this.paused;this.pause().seek(+e),t||this.resume()}get iterationCurrentTime(){return Uo(this._iterationTime,uo.precision)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return zo(Uo(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return zo(Uo(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){const t=this.iterationDuration;this.currentTime=t*this._currentIteration+t*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*zo(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return Na(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,ma(this,0,1,~~e,Dr.FORCE),Pa(this),this._hasChildren&&Qo(this,Pa),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&ma(this,this.duration,1,~~e,Dr.FORCE),this.reset(e);const t=this._autoplay;return!0===t?this.resume():t&&!ko(t.linked)&&t.link(this),this}resetTime(){const e=1/(this._speed*Sa._speed);return this._startTime=bo()-(this._currentTime+this._delay)*e,this}pause(){return this.paused||(this.paused=!0,this.onPause(this)),this}resume(){return this.paused?(this.paused=!1,this.duration<=Hr&&!this._hasChildren?ma(this,Hr,0,0,Dr.FORCE):(this._running||(Jo(Sa,this),Sa._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,Sa.wake()),this):this}restart(){return this.reset().resume()}seek(e,t=0,i=0){Na(this),this.completed=!1;const n=this.paused;return this.paused=!0,ma(this,e+this._delay,~~t,~~i,Dr.AUTO),n?this:this.resume()}alternate(){const e=this._reversed,t=this.iterationCount,i=this.iterationDuration,n=t===1/0?Do(Vr/i):t;return this._reversed=+(!this._alternate||n%2?!e:e),t===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(i*n-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?Qo(this,e=>e.cancel(),!0):Qo(this,Ra),this._cancelled=1,this.pause()}stretch(e){const t=this.duration,i=Wo(e);if(t===i)return this;const n=e/t,s=e<=Hr;return this.duration=s?Hr:i,this.iterationDuration=s?Hr:Wo(this.iterationDuration*n),this._offset*=n,this._delay*=n,this._loopDelay*=n,this}revert(){ma(this,0,1,0,Dr.AUTO);const e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(){return this.seek(this.duration).cancel()}then(e=Xr){const t=this.then,i=()=>{this.then=null,e(this),this.then=t,this._resolve=Xr};return new Promise(e=>(this._resolve=()=>e(i()),this.completed&&this._resolve(),this))}}function Fa(e){const t=wo(e)?po.root.querySelectorAll(e):e;if(t instanceof NodeList||t instanceof HTMLCollection)return t}function Ma(e){if(Ao(e))return[];if(!Lr)return yo(e)&&e.flat(1/0)||[e];if(yo(e)){const t=e.flat(1/0),i=[];for(let e=0,n=t.length;e<n;e++){const n=t[e];if(!Ao(n)){const e=Fa(n);if(e)for(let t=0,n=e.length;t<n;t++){const n=e[t];if(!Ao(n)){let e=!1;for(let t=0,s=i.length;t<s;t++)if(i[t]===n){e=!0;break}e||i.push(n)}}else{let e=!1;for(let t=0,s=i.length;t<s;t++)if(i[t]===n){e=!0;break}e||i.push(n)}}}return i}const t=Fa(e);return t?Array.from(t):[e]}function Ba(e){const t=Ma(e),i=t.length;if(i)for(let e=0;e<i;e++){const i=t[e];if(!i[Mr]){i[Mr]=!0;const e=So(i);(i.nodeType||e)&&(i[Br]=!0,i[zr]=e,i[qr]={})}}return t}const za={deg:1,rad:180/Mo,turn:360},qa={},Ua=(e,t,i,n=!1)=>{const s=t.u,r=t.n;if(t.t===jr.UNIT&&s===i)return t;const o=r+s+i,a=qa[o];if(ko(a)||n){let n;if(s in za)n=r*za[s]/za[i];else{const t=100,o=e.cloneNode(),a=e.parentNode,l=a&&a!==Pr?a:Pr.body;l.appendChild(o);const c=o.style;c.width=t+s;const d=o.offsetWidth||t;c.width=t+i;const h=d/(o.offsetWidth||t);l.removeChild(o),n=h*r}t.n=n,qa[o]=n}else t.n=a;return t.t,jr.UNIT,t.u=i,t},Ha=e=>e,Va=(e=1.68)=>t=>Ro(t,+e),Wa={in:e=>t=>e(t),out:e=>t=>1-e(1-t),inOut:e=>t=>t<.5?e(2*t)/2:1-e(-2*t+2)/2,outIn:e=>t=>t<.5?(1-e(1-2*t))/2:(e(2*t-1)+1)/2},Ya=Mo/2,Ga=2*Mo,Qa={[Gr]:Va,Quad:Va(2),Cubic:Va(3),Quart:Va(4),Quint:Va(5),Sine:e=>1-jo(e*Ya),Circ:e=>1-Po(1-e*e),Expo:e=>e?Ro(2,10*e-10):0,Bounce:e=>{let t,i=4;for(;e<((t=Ro(2,--i))-1)/11;);return 1/Ro(4,3-i)-7.5625*Ro((3*t-2)/22-e,2)},Back:(e=1.7)=>t=>(+e+1)*t*t*t-+e*t*t,Elastic:(e=1,t=.3)=>{const i=zo(+e,1,10),n=zo(+t,Hr,2),s=n/Ga*Fo(1/i),r=Ga/n;return e=>0===e||1===e?e:-i*Ro(2,-10*(1-e))*No((1-e-s)*r)}},Ka=(()=>{const e={linear:Ha,none:Ha};for(let t in Wa)for(let i in Qa){const n=Qa[i],s=Wa[t];e[t+i]=i===Gr||"Back"===i||"Elastic"===i?(e,t)=>s(n(e,t)):s(n)}return e})(),Ja={linear:Ha,none:Ha},Za=e=>{if(Ja[e])return Ja[e];if(e.indexOf("(")<=-1){const t=Wa[e]||e.includes("Back")||e.includes("Elastic")?Ka[e]():Ka[e];return t?Ja[e]=t:Ha}{const t=e.slice(0,-1).split("("),i=Ka[t[0]];return i?Ja[e]=i(...t[1].split(",")):Ha}},Xa=["steps(","irregular(","linear(","cubicBezier("],el=e=>{if(wo(e))for(let t=0,i=Xa.length;t<i;t++)if(fo(e,Xa[t]))return console.warn(`String syntax for \`ease: "${e}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${e}\``),Ha;return xo(e)?e:wo(e)?Za(e):Ha},tl=da(),il=da(),nl={},sl={func:null},rl=[null],ol=[null,null],al={to:null};let ll,cl,dl=0;const hl=(e,t)=>{const i={};if(yo(e)){const t=[].concat(...e.map(e=>Object.keys(e))).filter(To);for(let n=0,s=t.length;n<s;n++){const s=t[n],r=e.map(e=>{const t={};for(let i in e){const n=e[i];To(i)?i===s&&(t.to=n):t[i]=n}return t});i[s]=r}}else{const n=sa(t.duration,uo.defaults.duration),s=Object.keys(e).map(t=>({o:parseFloat(t)/100,p:e[t]})).sort((e,t)=>e.o-t.o);s.forEach(e=>{const t=e.o,s=e.p;for(let e in s)if(To(e)){let r=i[e];r||(r=i[e]=[]);const o=t*n;let a=r.length,l=r[a-1];const c={to:s[e]};let d=0;for(let e=0;e<a;e++)d+=r[e].duration;1===a&&(c.from=l.to),s.ease&&(c.ease=s.ease),c.duration=o-(a?d:0),r.push(c)}return e});for(let e in i){const t=i[e];let n;for(let e=0,i=t.length;e<i;e++){const i=t[e],s=i.ease;i.ease=n||void 0,n=s}t[0].duration||t.shift()}}return i};class pl extends Da{constructor(e,t,i,n,s=!1,r=0,o=0){super(t,i,n);const a=Ba(e),l=a.length,c=t.keyframes,d=c?Go(hl(c,t),t):t,{delay:h,duration:p,ease:u,playbackEase:g,modifier:m,composition:f,onRender:b}=d,y=i?i.defaults:uo.defaults,v=sa(g,y.playbackEase),_=v?el(v):null,w=!ko(u)&&!ko(u.ease),x=w?u.ease:sa(u,_?"linear":y.ease),k=w?u.settlingDuration:sa(p,y.duration),A=sa(h,y.delay),S=m||y.modifier,C=ko(f)&&l>=Wr?Fr.none:ko(f)?y.composition:f,E=this._offset+(i?i._offset:0);w&&(u.parent=this);let O=NaN,$=NaN,T=0,I=0;for(let e=0;e<l;e++){const t=a[e],n=r||e,c=o||l;let h=NaN,p=NaN;for(let e in d)if(To(e)){const r=oa(t,e),o=ba(e,t,r);let a=d[e];const l=yo(a);if(s&&!l&&(ol[0]=a,ol[1]=a,a=ol),l){const e=a.length,t=!vo(a[0]);2===e&&t?(al.to=a,rl[0]=al,ll=rl):e>2&&t?(ll=[],a.forEach((e,t)=>{t?1===t?(ol[1]=e,ll.push(ol)):ll.push(e):ol[0]=e})):ll=a}else rl[0]=a,ll=rl;let u=null,g=null,m=NaN,f=0,b=0;for(let e=ll.length;b<e;b++){const s=ll[b];vo(s)?cl=s:(al.to=s,cl=al),sl.func=null;const a=ra(cl.to,t,n,c,sl);let l;vo(a)&&!ko(a.to)?(cl=a,l=a.to):l=a;const d=ra(cl.from,t,n,c),h=cl.ease,p=!ko(h)&&!ko(h.ease),y=p?h.ease:h||x,v=p?h.settlingDuration:ra(sa(cl.duration,e>1?ra(k,t,n,c)/e:k),t,n,c),_=ra(sa(cl.delay,b?0:A),t,n,c),w=ra(sa(cl.composition,C),t,n,c),O=_o(w)?w:Fr[w],$=cl.modifier||S,L=!ko(d),R=!ko(l),P=yo(l),N=P||L&&R,j=g?f+_:_,D=Uo(E+j,12);I||!L&&!P||(I=1);let F=g;if(O!==Fr.none){u||(u=$a(t,o));let e=u._head;for(;e&&!e._isOverridden&&e._absoluteStartTime<=D;)if(F=e,e=e._nextRep,e&&e._absoluteStartTime>=D)for(;e;)Ia(e),e=e._nextRep}if(N?(ha(P?ra(l[0],t,n,c):d,tl),ha(P?ra(l[1],t,n,c,sl):l,il),tl.t===jr.NUMBER&&(F?F._valueType===jr.UNIT&&(tl.t=jr.UNIT,tl.u=F._unit):(ha(la(t,o,r,nl),ua),ua.t===jr.UNIT&&(tl.t=jr.UNIT,tl.u=ua.u)))):(R?ha(l,il):g?pa(g,il):ha(i&&F&&F.parent.parent===i?F._value:la(t,o,r,nl),il),L?ha(d,tl):g?pa(g,tl):ha(i&&F&&F.parent.parent===i?F._value:la(t,o,r,nl),tl)),tl.o&&(tl.n=ca(F?F._toNumber:ha(la(t,o,r,nl),ua).n,tl.n,tl.o)),il.o&&(il.n=ca(tl.n,il.n,il.o)),tl.t!==il.t)if(tl.t===jr.COMPLEX||il.t===jr.COMPLEX){const e=tl.t===jr.COMPLEX?tl:il,t=tl.t===jr.COMPLEX?il:tl;t.t=jr.COMPLEX,t.s=Yo(e.s),t.d=e.d.map(()=>t.n)}else if(tl.t===jr.UNIT||il.t===jr.UNIT){const e=tl.t===jr.UNIT?tl:il,t=tl.t===jr.UNIT?il:tl;t.t=jr.UNIT,t.u=e.u}else if(tl.t===jr.COLOR||il.t===jr.COLOR){const e=tl.t===jr.COLOR?tl:il,t=tl.t===jr.COLOR?il:tl;t.t=jr.COLOR,t.s=e.s,t.d=[0,0,0,1]}if(tl.u!==il.u){let e=il.u?tl:il;e=Ua(t,e,il.u?il.u:tl.u,!1)}if(il.d&&tl.d&&il.d.length!==tl.d.length){const e=tl.d.length>il.d.length?tl:il,t=e===tl?il:tl;t.d=e.d.map((e,i)=>ko(t.d[i])?0:t.d[i]),t.s=Yo(e.s)}const M=Uo(+v||Hr,12);let B=nl[o];Ao(B)||(nl[o]=null);const z={parent:this,id:dl++,property:o,target:t,_value:null,_func:sl.func,_ease:el(y),_fromNumbers:Yo(tl.d),_toNumbers:Yo(il.d),_strings:Yo(il.s),_fromNumber:tl.n,_toNumber:il.n,_numbers:Yo(tl.d),_number:tl.n,_unit:il.u,_modifier:$,_currentTime:0,_startTime:j,_delay:+_,_updateDuration:M,_changeDuration:M,_absoluteStartTime:D,_tweenType:r,_valueType:il.t,_composition:O,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:B,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};O!==Fr.none&&La(z,u),isNaN(m)&&(m=z._startTime),f=Uo(j+M,12),g=z,T++,Jo(this,z)}(isNaN($)||m<$)&&($=m),(isNaN(O)||f>O)&&(O=f),r===Nr.TRANSFORM&&(h=T-b,p=T)}if(!isNaN(h)){let e=0;Qo(this,t=>{e>=h&&e<p&&(t._renderTransforms=1,t._composition===Fr.blend&&Qo(_a.animation,e=>{e.id===t.id&&(e._renderTransforms=1)})),e++})}}l||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),$?(Qo(this,e=>{e._startTime-e._delay||(e._delay-=$),e._startTime-=$}),O-=$):$=0,O||(O=Hr,this.iterationCount=0),this.targets=a,this.duration=O===Hr?Hr:Vo((O+this._loopDelay)*this.iterationCount-this._loopDelay)||Hr,this.onRender=b||y.onRender,this._ease=_,this._delay=$,this.iterationDuration=O,!this._autoplay&&I&&this.onRender(this)}stretch(e){const t=this.duration;if(t===Wo(e))return this;const i=e/t;return Qo(this,e=>{e._updateDuration=Wo(e._updateDuration*i),e._changeDuration=Wo(e._changeDuration*i),e._currentTime*=i,e._startTime*=i,e._absoluteStartTime*=i}),super.stretch(e)}refresh(){return Qo(this,e=>{const t=e._func;if(t){const i=la(e.target,e.property,e._tweenType);ha(i,ua),ha(t(),il),e._fromNumbers=Yo(ua.d),e._fromNumber=ua.n,e._toNumbers=Yo(il.d),e._strings=Yo(il.s),e._toNumber=il.o?ca(ua.n,il.n,il.o):il.n}}),this.duration===Hr&&this.restart(),this}revert(){return super.revert(),ya(this)}then(e){return super.then(e)}}const ul=(e,t)=>new pl(e,t,null,0,!1).init();class gl extends(m(o(s))){static get properties(){return Object.assign({src:{type:String},odd:{type:String},view:{type:String},fill:{type:Number},nodeId:{type:String,attribute:"node-id"},xmlId:{type:Array,attribute:"xml-id"},xpath:{type:String},map:{type:String},onUpdate:{type:Boolean,attribute:"on-update"},notFound:{type:String,attribute:"not-found"},url:{type:String},static:{type:String},appendFootnotes:{type:Boolean,attribute:"append-footnotes"},suppressHighlight:{type:Boolean,attribute:"suppress-highlight"},columnSeparator:{type:String,attribute:"column-separator"},direction:{type:String},loadCss:{type:String,attribute:"load-css"},fixLinks:{type:Boolean,attribute:"fix-links"},useLanguage:{type:Boolean,attribute:"use-language"},animation:{type:Boolean},infiniteScroll:{type:Boolean,attribute:"infinite-scroll"},infiniteScrollMax:{type:Number,attribute:"infinite-scroll-max"},waitFor:{type:String,attribute:"wait-for"},disableHistory:{type:Boolean,attribute:"disable-history"},readOnlyRegistry:{type:Boolean,attribute:"read-only-registry"},beforeUpdate:{type:String,attribute:"before-update-event"},noScroll:{type:Boolean,attribute:"no-scroll"},_features:{type:Object},_content:{type:Node,attribute:!1},_column1:{type:Node,attribute:!1},_column2:{type:Node,attribute:!1},_footnotes:{type:Node,attribute:!1},_style:{type:Node,attribute:!1},_additionalParams:{type:Object}},super.properties)}constructor(){super(),this.src=null,this.url=null,this.readOnlyRegistry=!1,this._registryInitialized=!1,this.onUpdate=!1,this.appendFootnotes=!1,this.notFound=null,this.animation=!1,this.direction="ltr",this.suppressHighlight=!1,this.highlight=!1,this.infiniteScrollMax=10,this.disableHistory=!1,this.beforeUpdate=null,this.noScroll=!1,this._features={},this._additionalParams={},this._selector={},this._chunks=[],this._scrollTarget=null,this._loading=!1,this._lastRequestKey=null,this.static=null,this._refreshDebounceTimer=null,this._pendingRefreshEvent=null,this._hasLoadedOnce=!1,this._lastLoadedId=null}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"src"===e)this._updateSource(i,t)}connectedCallback(){if(super.connectedCallback(),this.loadCss&&a("pb-page-ready",()=>{f([this.toAbsoluteURL(this.loadCss)]).then(e=>{e&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,e])})}),this.infiniteScroll&&(this.columnSeparator=null,this.animation=!1,this._content=document.createElement("div"),this._content.className="infinite-content"),!this.disableHistory){y.state.id&&!this.xmlId&&(this.xmlId=y.state.id),y.state.action&&"search"===y.state.action&&(this.highlight=!0),"single"===this.view?this.nodeId=null:y.state.root&&!this.nodeId&&(this.nodeId=y.state.root);const e=this.readOnlyRegistry||this.hasAttribute("read-only-registry");if(this._registryInitialized||e)e&&console.log("[pb-view] connectedCallback: Skipping registry.replace (read-only-registry is set)",{readOnlyRegistry:this.readOnlyRegistry,hasAttribute:this.hasAttribute("read-only-registry"),isReadOnly:e,_registryInitialized:this._registryInitialized});else{const t=this.getDocument?this.getDocument():null,i={id:this.xmlId,view:this.getView(),odd:this.getOdd(),path:t?t.path:void 0};"single"!==this.view&&(i.root=this.nodeId),this.fill&&(i.fill=this.fill),console.warn("[pb-view] connectedCallback: Calling registry.replace (read-only-registry not set)",{readOnlyRegistry:this.readOnlyRegistry,hasAttribute:this.hasAttribute("read-only-registry"),isReadOnly:e,_registryInitialized:this._registryInitialized,newState:i}),y.replace(this,i),this._registryInitialized=!0}y.subscribe(this,e=>{this._setState(e),this._refresh(null)})}this.waitFor||(this.waitFor="pb-toggle-feature,pb-select-feature,pb-navigation"),this.subscribeTo("pb-navigate",e=>{e.detail.source&&e.detail.source===this||this.navigate(e.detail.direction)}),this.subscribeTo("pb-toggle",e=>{this.toggleFeature(e)}),this.subscribeTo("pb-i18n-update",e=>{const t=this._features.language&&this._features.language!==e.detail.language;this._features.language=e.detail.language,this.useLanguage&&t&&(this._setState(y.getState(this)),this._refresh())},[]),this.signalReady(),this.onUpdate&&this.subscribeTo("pb-update",e=>{this._refresh(e)})}disconnectedCallback(){super.disconnectedCallback(),this._scrollObserver&&this._scrollObserver.disconnect();this.readOnlyRegistry||this.hasAttribute("read-only-registry")||(this._registryInitialized=!1)}firstUpdated(){super.firstUpdated(),this.enableScrollbar(!0),this.infiniteScroll&&(this._topObserver=this.shadowRoot.getElementById("top-observer"),this._bottomObserver=this.shadowRoot.getElementById("bottom-observer"),this._bottomObserver.style.display="none",this._topObserver.style.display="none",this._scrollObserver=new IntersectionObserver(e=>{this._content&&e.forEach(e=>{if(e.isIntersecting)if("bottom-observer"===e.target.id){const e=this._content.lastElementChild;if(e){const t=e.getAttribute("data-next");t&&!this._content.querySelector(`[data-root="${t}"]`)&&(this._checkChunks("forward"),this._load(t,"forward"))}}else{const e=this._content.firstElementChild;if(e){const t=e.getAttribute("data-previous");t&&!this._content.querySelector(`[data-root="${t}"]`)&&(this._checkChunks("backward"),this._load(t,"backward"))}}})})),this.onUpdate||a("pb-page-ready",e=>{e&&e.language&&(this._features.language=e.language),this.wait(()=>{this.disableHistory||this._setState(y.state),this._refresh()})}),this.subscribeTo("pb-refresh",e=>{this._refresh(e)})}getOdd(){try{return this.odd||this.getDocument().odd||"teipublisher"}catch{return this.odd||"teipublisher"}}getView(){try{return this.view||this.getDocument().view||"single"}catch{return this.view||"single"}}forceUpdate(){this._load(this.nodeId)}animate(){this.animation&&("forward"===this.lastDirection?ul(this.shadowRoot.getElementById("view"),{opacity:[0,1],translateX:[1e3,0],duration:300,ease:"linear"}):ul(this.shadowRoot.getElementById("view"),{opacity:[0,1],translateX:[-1e3,0],duration:300,ease:"linear"}))}enableScrollbar(e){e?this.classList.add("noscroll"):this.classList.remove("noscroll")}_refresh(e){this._pendingRefreshEvent=e,this._refreshDebounceTimer&&clearTimeout(this._refreshDebounceTimer),this._refreshDebounceTimer=setTimeout(()=>{this._doRefresh(this._pendingRefreshEvent),this._pendingRefreshEvent=null,this._refreshDebounceTimer=null},150)}_doRefresh(e){var t;const i=y.getState(this),n=e&&e.detail?e.detail:{},s=Object.assign(Object.assign({},n),i);let r=null;const o=this.querySelector&&this.querySelector('pb-param[name="mode"]');o&&(r=o.getAttribute("value")),!r&&this._additionalParams&&(r=this._additionalParams.mode||this._additionalParams["user.mode"]);const a="metadata-panel"===r||this.xpath&&"single"===this.view&&!this.nodeId;if(this.xpath&&!s.xpath&&this._hasLoadedOnce)return;if(a&&this._hasLoadedOnce){const e=s.id&&/\.jpg$|_\d{2,3}\.jpg/.test(String(s.id));if(s.root||s.id&&!e||s.position)return}let l=s;if(a&&s.id){/\.jpg$|_\d{2,3}\.jpg/.test(String(s.id))&&(l=Object.assign({},s),delete l.id)}const c=l;if(c.hash&&!this.noScroll&&!(c.id||c.path||c.odd||c.view||c.position)){this._scrollTarget=c.hash;const e=this.shadowRoot.getElementById(this._scrollTarget);return void(e&&setTimeout(()=>e.scrollIntoView({block:"nearest"})))}const d=this.xmlId,h=this.nodeId,p=this.getDocument&&(null===(t=this.getDocument())||void 0===t?void 0:t.path)||null,u=this._additionalParams&&this._additionalParams.id?this._additionalParams.id:null,g=this._features&&this._features.id?this._features.id:null,m=this._lastLoadedId,f=u&&u!==m&&null!==m||g&&g!==m&&null!==m,b=e&&e.detail&&e.detail.path?e.detail.path:null,v=e&&e.detail&&e.detail.odd?e.detail.odd:null,_=b||c.path,w=v||c.odd;if(_){const e=this.getDocument();e&&(e.path=_)}const x=_,k=w,A=e&&e.detail&&e.detail.id?e.detail.id:null,S=this._additionalParams&&this._additionalParams.id?this._additionalParams.id:null,C=this._features&&this._features.id?this._features.id:null,E=A||(void 0!==c.id?c.id:null)||S||C;if(E){/\.jpg$|_\d{2,3}\.jpg/.test(String(E))?(this._additionalParams=this._additionalParams||{},this._additionalParams.id=E):this.xmlId=E}this.odd=w||this.odd,void 0!==c.columnSeparator&&(this.columnSeparator=c.columnSeparator),this.view=c.view||this.getView(),this.fill=c.fill||this.fill,c.xpath&&(this.xpath=c.xpath,this.nodeId=null);let O=this.nodeId;O=null===c.root?null:(void 0!==c.position?c.position:c.root)||this.nodeId;const $=O!==h,T=e&&e.detail&&e.detail.id?e.detail.id:null,I=this._additionalParams&&this._additionalParams.id?this._additionalParams.id:null,L=this._features&&this._features.id?this._features.id:null,R=T||(void 0!==c.id?c.id:null)||I||L||this.xmlId,P=R&&(R!==d||R!==m&&null!==m||f||null===m&&R),N=x&&x!==p,j=this.odd,D=k&&k!==j,F=e&&e.detail&&e.detail.id,M=this._lastLoadedId,B=F&&(null===M||e.detail.id!==M||d&&e.detail.id!==d);if(!$&&!P&&!N&&!D&&!B&&this._hasLoadedOnce)return y.pathParams.forEach(e=>{void 0!==c[e]&&(this._additionalParams[e]=c[e])}),this.noScroll||(this._scrollTarget=c.hash),void this._updateStyles();this.nodeId=O,s.id||this.xmlId,y.pathParams.forEach(e=>{void 0!==c[e]&&(this._additionalParams[e]=c[e])}),this.noScroll||(this._scrollTarget=c.hash),this._updateStyles(),this.infiniteScroll&&this._clear(),this._load(this.nodeId)}_load(e,t){const i=this.getDocument?this.getDocument():null;if(!i||!i.path)return void console.warn("<pb-view> No path");if(this._loading&&this._lastRequestKey){const t=this.getParameters(e),n=JSON.stringify({url:this.url||"",doc:i.path,params:t});if(this._lastRequestKey===n)return;const s=this.shadowRoot.getElementById("loadContent");s&&s.abort(),this._lastRequestKey=null,this._loading=!1}this._loading=!0;const n=this.getParameters(e);t&&(n._dir=t),this._doLoad(n)}_doLoad(e){const t=this.getDocument&&this.getDocument()?this.getDocument().path:"",i=JSON.stringify({url:this.url||"",doc:t,params:e});if(this._lastRequestKey===i)return void(this._loading=!1);this._lastRequestKey=i,this.emitTo("pb-start-update",e),this.infiniteScroll||this._clear(),this._scrollObserver&&(this._bottomObserver&&this._scrollObserver.unobserve(this._bottomObserver),this._topObserver&&this._scrollObserver.unobserve(this._topObserver));const n=this.shadowRoot.getElementById("loadContent");if(null!==this.static)return void this._staticUrl(e).then(e=>{n.url=e,n.generateRequest().catch(()=>{})});this.url||(this.minApiVersion("1.0.0")?this.url="api/parts":this.url="modules/lib/components.xql");let s=`${this.getEndpoint()}/${this.url}`;if(this.minApiVersion("1.0.0")){const e=this.getDocument();if(!e||!e.path)return void console.warn("<pb-view> No document path available for URL construction");s+=`/${encodeURIComponent(e.path)}/json`}n.url=s,n.params=e,n.generateRequest().catch(e=>{console.error("[pb-view] _doLoad: request failed",e)})}async _staticUrl(e){function t(t){const i=[];return t.sort().forEach(t=>{e.hasOwnProperty(t)&&i.push(`${t}=${e[t]}`)}),i.join("&")}const i=this.static?this.static.replace(/\/$/,""):".",n=new URL(`${i}/`,window.location.href),s=new URL("index.json",n).href,r=await fetch(s).then(e=>e.json()),o=["odd","view","xpath","map"];this.querySelectorAll("pb-param").forEach(e=>o.push(`user.${e.getAttribute("name")}`));let a=e.id?t([...o,"id"]):t([...o,"root"]),l=r[a];if(l||(a=t(o),l=r[a]),!l){console.warn("<pb-view> No static mapping found for %s",a);const e=Object.values(r)[0];if(!e)return n.href;l=e}return new URL(l,n).href}_clear(){this.infiniteScroll?(this._content=document.createElement("div"),this._content.className="infinite-content"):this._content=null,this._column1=null,this._column2=null,this._footnotes=null,this._chunks=[]}_handleError(){this._clear(),this._loading=!1;const e=this.shadowRoot.getElementById("loadContent");let t;console.error("<pb-view> Error details:",e.lastError);const{response:i}=e.lastError;let n;t=i?i.description:'<pb-i18n key="dialogs.serverError"></pb-i18n>',n=null!=this.notFound?`<p>${this.notFound}</p>`:`<p><pb-i18n key="dialogs.serverError"></pb-i18n>: ${t} </p>`,this._replaceContent({content:n}),this.emitTo("pb-end-update")}_handleContent(){const e=this.shadowRoot.getElementById("loadContent"),t=e.lastResponse;return t?t.error?(console.error("<pb-view> Response has error:",t.error),null!=this.notFound&&(this._content=this.notFound),this.emitTo("pb-end-update",null),void(this._loading=!1)):(this._replaceContent(t,e.params._dir),this.animate(),this._scrollTarget&&this.updateComplete.then(()=>{const e=this.shadowRoot.getElementById(this._scrollTarget)||this.shadowRoot.querySelector(`[node-id="${this._scrollTarget}"]`);e&&window.requestAnimationFrame(()=>setTimeout(()=>{e.scrollIntoView({block:"nearest"})},400)),this._scrollTarget=null}),this.next=t.next,this.nextId=t.nextId,this.previous=t.previous,this.previousId=t.previousId,this.nodeId=t.root,this.switchView=t.switchView,this.updateComplete.then(()=>{const i=this.shadowRoot.getElementById("view");this._applyToggles(i),this._fixLinks(i),Sn(i);const n={data:t,root:i,params:e.params,id:this.xmlId,position:this.nodeId};this.emitTo("pb-update",n),this._scroll()}),this.emitTo("pb-end-update",null),this._loading=!1,this._hasLoadedOnce=!0,void(this.xmlId&&(this._lastLoadedId=this.xmlId))):(this._loading=!1,void console.error("<pb-view> No response received"))}_replaceContent(e,t){const i=document.createDocumentFragment(),n=document.createElement("div");i.appendChild(n),n.innerHTML=e.content,this.beforeUpdate?this.emitTo(this.beforeUpdate,{data:e,root:n,render:i=>{this._doReplaceContent(i,e,t)}}):this._doReplaceContent(n,e,t)}_doReplaceContent(e,t,i){if(this.columnSeparator)this._replaceColumns(e),this._loading=!1;else if(this.infiniteScroll){let n;if(e.className="scroll-fragment",e.setAttribute("data-root",t.root),t.next&&e.setAttribute("data-next",t.next),t.previous&&e.setAttribute("data-previous",t.previous),"backward"===i)n=this._content.firstElementChild,this._chunks.unshift(e),this.updateComplete.then(()=>{n.scrollIntoView(!0),this._loading=!1,this._checkVisibility(),this._scrollObserver.observe(this._bottomObserver),this._scrollObserver.observe(this._topObserver)}),this._content.insertBefore(e,n);else this.updateComplete.then(()=>{this._loading=!1,this._checkVisibility(),this._scrollObserver.observe(this._bottomObserver),this._scrollObserver.observe(this._topObserver)}),this._chunks.push(e),this._content.appendChild(e)}else this._content=e,this._loading=!1;if(this.appendFootnotes){const e=document.createElement("div");t.footnotes&&(e.innerHTML=t.footnotes),this._footnotes=e}return this._initFootnotes(this._footnotes),e}_checkVisibility(){const e=this._chunks[this._chunks.length-1].hasAttribute("data-next");this._bottomObserver.style.display=e?"":"none";const t=this._chunks[0].hasAttribute("data-previous");this._topObserver.style.display=t?"":"none"}_replaceColumns(e){let t;if(this.columnSeparator){const i=e.querySelectorAll(this.columnSeparator);i.length>1&&(t=i[i.length-1])}if(t){const i=this._getFragmentBefore(e,t),n=this._getFragmentAfter(e,t);"ltr"===this.direction?(this._column1=i,this._column2=n):(this._column2=i,this._column1=n)}else this._content=e}_scroll(){if(!this.noScroll&&y.hash){const e=this.shadowRoot.getElementById(y.hash.substring(1));e&&window.requestAnimationFrame(()=>setTimeout(()=>{e.scrollIntoView({block:"center",inline:"nearest"})},400))}}_scrollToElement(e,t){const i=this.shadowRoot.getElementById(t.hash.substring(1));i&&(e.preventDefault(),i.scrollIntoView({block:"center",inline:"nearest"}))}_updateStyles(){const e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),null!==this.static?e.setAttribute("href",`${this.static}/css/${this.getOdd()}.css`):e.setAttribute("href",`${this.getEndpoint()}/transform/${this.getOdd()}.css`),this._style=e}_fixLinks(e){if(this.fixLinks){const t=this.getDocument?this.getDocument():null,i=this.toAbsoluteURL(t&&t.path?t.path:"");e.querySelectorAll("img").forEach(e=>{const t=e.getAttribute("src"),n=new URL(t,i);e.src=n.href}),e.querySelectorAll("a").forEach(e=>{const t=e.getAttribute("href");if(t===e.hash)e.addEventListener("click",t=>this._scrollToElement(t,e));else{const n=new URL(t,i);e.href=n.href}})}else e.querySelectorAll("a").forEach(e=>{e.getAttribute("href")===e.hash&&e.addEventListener("click",t=>this._scrollToElement(t,e))})}_initFootnotes(e){e&&e.querySelectorAll(".note, .fn-back").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const i=this.shadowRoot.getElementById("content").querySelector(e.hash);i&&i.scrollIntoView()})})}_getParameters(){const e={};this.querySelectorAll("pb-param").forEach(t=>{const i=t.getAttribute("name"),n=t.getAttribute("value");if("id"===i){if(/\.jpg$|_\d{2,3}\.jpg/.test(String(n))){const e=this.querySelector('pb-param[name="mode"]');if(e&&"metadata-panel"===e.getAttribute("value"))return}}e[`user.${i}`]=n});for(const[t,i]of Object.entries(this._features)){if("id"===t){if(/\.jpg$|_\d{2,3}\.jpg/.test(String(i))){const e=this.querySelector('pb-param[name="mode"]');if(e&&"metadata-panel"===e.getAttribute("value"))continue}}e[`user.${t}`]=i}if(this._additionalParams)for(const[t,i]of Object.entries(this._additionalParams)){if("id"===t||"user.id"===t){if(/\.jpg$|_\d{2,3}\.jpg/.test(String(i))){const e=this.querySelector('pb-param[name="mode"]');if(e&&"metadata-panel"===e.getAttribute("value"))continue}}e[t]=i}return e}getParameters(e){e=e||this.nodeId;const t=this.getDocument?this.getDocument():null,i=this._getParameters();!this.minApiVersion("1.0.0")&&t&&t.path&&(i.doc=t.path),i.odd=`${this.getOdd()}.odd`;const n=this.querySelector('pb-param[name="mode"]'),s=n&&"metadata-panel"===n.getAttribute("value");if(i.view=s?"single":this.getView(),i.fill=this.fill,e&&!s&&(i.root=e),this.xpath&&(i.xpath=this.xpath),this._additionalParams&&this._additionalParams.id){const e=this.querySelector('pb-param[name="mode"]');if(e&&"metadata-panel"===e.getAttribute("value")){/\.jpg$|_\d{2,3}\.jpg/.test(String(this._additionalParams.id))||(i.id=this._additionalParams.id)}else i.id=this._additionalParams.id}else if(this.xmlId){const e=this.querySelector('pb-param[name="mode"]');if(e&&"metadata-panel"===e.getAttribute("value")){/\.jpg$|_\d{2,3}\.jpg/.test(String(this.xmlId))||(i.id=this.xmlId)}else i.id=this.xmlId}return!this.suppressHighlight&&this.highlight&&(i.highlight="yes"),this.map&&(i.map=this.map),i}_applyToggles(e){for(const[t,i]of Object.entries(this._selector))e.querySelectorAll(t).forEach(e=>{const t=i.command||"toggle";e.command&&e.command(t,i.state),i.state?e.classList.add(t):e.classList.remove(t)})}goto(e){this._load(e)}gotoId(e){this.xmlId=e,this._load()}navigate(e){if("single"!==this.getView())if(this.lastDirection=e,"backward"===e){if(this.previous){const t=this.readOnlyRegistry||this.hasAttribute("read-only-registry");this.disableHistory||this.map||t||y.commit(this,{id:this.previousId||null,root:this.previousId?null:this.previous}),this.xmlId=this.previousId,this._load(this.xmlId?null:this.previous,e)}}else if(this.next){const t=this.readOnlyRegistry||this.hasAttribute("read-only-registry");this.disableHistory||this.map||t||y.commit(this,{id:this.nextId||null,root:this.nextId?null:this.next}),this.xmlId=this.nextId,this._load(this.xmlId?null:this.next,e)}}_checkChunks(e){if(this.infiniteScroll&&0!==this.infiniteScrollMax){if(this._chunks.length===this.infiniteScrollMax)if("forward"===e)this._content.removeChild(this._chunks.shift());else this._content.removeChild(this._chunks.pop());this.emitTo("pb-navigate",{direction:e,source:this})}}toggleFeature(e){const t=y.getState(this);if(t&&this._setState(t),e.detail.refresh)this._updateStyles(),this._load();else{const e=this.shadowRoot.getElementById("view");this._applyToggles(e)}this.readOnlyRegistry||this.hasAttribute("read-only-registry")||y.commit(this,t)}_setState(e){for(const[t,i]of Object.entries(e))if(y.pathParams.has(t))this._additionalParams[t]=i;else switch(t){case"odd":case"view":case"columnSeparator":case"xpath":case"nodeId":case"path":case"root":break;default:this._features[t]=i}if(e.odd&&!this.getAttribute("odd")&&(this.odd=e.odd),e.view&&!this.getAttribute("view")&&(this.view=e.view,"single"===this.view?this.nodeId=null:this.nodeId=this.switchView),e.fill&&!this.getAttribute("fill")&&(this.fill=e.fill),e.xpath&&!this.getAttribute("xpath")&&(this.xpath=e.xpath),e.hasOwnProperty("columnSeparator")&&(this.columnSeparator=e.columnSeparator),this.xmlId=!this.getAttribute("xml-id")&&e.id||this.xmlId,this.nodeId=!this.getAttribute("xml-id")&&e.root||null,e.path){const t=this.getDocument?this.getDocument():null;t&&(t.path=e.path)}e.selectors&&e.selectors.forEach(e=>{this._selector[e.selector]={state:e.state,command:e.command||"toggle"}})}_getFragmentBefore(e,t){const i=document.createRange();return i.setStartBefore(e),i.setEndBefore(t),i.cloneContents()}_getFragmentAfter(e,t){const i=document.createRange();return i.setStartBefore(t),i.setEndAfter(e),i.cloneContents()}_updateSource(e,t){void 0!==t&&e!==t&&(this.xpath=null,this.odd=null,this.xmlId=null,this.nodeId=null)}static get styles(){return n`
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
      `]}}customElements.define("pb-view",gl);const ml=[0,100],fl=[0,100],bl=e=>`${1===e.length?"0":""}${e}`,yl=(e,t,i)=>Math.max(Math.min(e,i),t),vl=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,_l=(e,t,i)=>{const n=vl(e,t);for(let s=0;s<(null==i?void 0:i.length);s++){const r=i[s];if(2===(null==r?void 0:r.length)&&n>=r[0]&&n<=r[1])return _l(e,t,i)}return n},wl=e=>{const t=e.length;let i=0;for(let n=0;n<t;n++)i=(i<<5)-i+e.charCodeAt(n),i&=i;return i},xl=(e,t)=>"number"==typeof t?t:e%Math.abs(t[1]-t[0])+t[0],kl=(e,t)=>"number"==typeof e?yl(Math.abs(e),...t):1===e.length||e[0]===e[1]?yl(Math.abs(e[0]),...t):[Math.abs(yl(e[0],...t)),yl(Math.abs(e[1]),...t)],Al=(e,t,i)=>(i<0?i+=1:i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e),Sl=(e,t,i)=>{let n,s,r;if(e/=360,i/=100,0===(t/=100))n=s=r=i;else{const o=i<.5?i*(1+t):i+t-i*t,a=2*i-o;n=Al(a,o,e+1/3),s=Al(a,o,e),r=Al(a,o,e-1/3)}return[Math.round(255*n),Math.round(255*s),Math.round(255*r)]},Cl=(e,t,i,n)=>(299*e+587*t+114*i)/1e3>=n,El=(e,t,i)=>`hsl(${e}, ${t}%, ${i}%)`,Ol=(e,t,i,n)=>"rgb"===n?`rgb(${e}, ${t}, ${i})`:`#${bl(e.toString(16))}${bl(t.toString(16))}${bl(i.toString(16))}`,$l=(e,{format:t="hex",saturation:i=[50,55],lightness:n=[50,60],differencePoint:s=130}={})=>{const r=Math.abs(wl(String(e))),o=xl(r,[0,360]),a=xl(r,kl(i,ml)),l=xl(r,kl(n,fl)),[c,d,h]=Sl(o,a,l);return{color:"hsl"===t?El(o,a,l):Ol(c,d,h,t),isLight:Cl(c,d,h,s)}};function Tl(e,t){let i=e;for(;i.parentNode!==t;)i=i.parentElement;return i}function Il(e){let t=e;t.nodeType===Node.TEXT_NODE&&(t=t.parentNode);const i=t.getAttribute("href");return i&&/^#fn_.*$/.test(i)}function Ll(e,t,i){const n=document.createTreeWalker(e);for(n.currentNode=t;n.previousNode();){const e=n.currentNode;e.nodeType===Node.ELEMENT_NODE||Il(e)||(i+=e.textContent.length)}return i}function Rl(e,t,i="start"){if(e.nodeType===Node.ELEMENT_NODE){const n=e.closest("[data-tei]");if(0===t)return{parent:n.getAttribute("data-tei"),offset:0};const s=n.childNodes[t];return{parent:n.getAttribute("data-tei"),offset:"end"===i?Ll(n,s,0)-1:Ll(n,s,0)}}const n=e.parentNode.closest("[data-tei]");if(n)return{parent:n.getAttribute("data-tei"),offset:Ll(n,e,t)};console.error("No container with data-tei found for %o",e.parentNode)}function Pl(e,t){let i=0,n=e.parentNode;for(;n&&n!==e.getRootNode();)n.classList.contains(t)&&(i+=1),n=n.parentNode;return i}function Nl(e,t){const i=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);return i.currentNode=t,i.nextNode()?i.currentNode:t}function jl(e,t){let i=t;const n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(;n.nextNode();)if(!Il(n.currentNode)&&n.currentNode.textContent.length>0){if(i-n.currentNode.textContent.length<=0)return[n.currentNode,i];i-=n.currentNode.textContent.length}return null}function Dl(e,t,i,n=3){let s=t-1,r=0;for(;s>=0;){if(/[\p{P}\s]/.test(e.charAt(s))){for(;s>1&&/[\p{P}\s]/.test(e.charAt(s-1));)s-=1;if(r+=1,r===n)break}s-=1}let o=i+1;for(r=0;o<e.length;){if(/[\p{P}\s]/.test(e.charAt(o))){for(;o<e.length-1&&/[\p{P}\s]/.test(e.charAt(o+1));)o+=1;if(r+=1,r===n)break}o+=1}return`... ${e.substring(s,t)}<mark>${e.substring(t,i)}</mark>${e.substring(i,o+1)} ...`}function Fl(e){let t=e.parentElement;t.textContent.length<40&&(t=t.parentNode);const i=document.createTreeWalker(t,NodeFilter.SHOW_TEXT);let n=0,s=0;const r=[];for(;i.nextNode();)i.currentNode===e&&(s=n),n+=i.currentNode.textContent.length,r.push(i.currentNode.textContent);return[r.join(""),s]}function Ml(e){const t={};return Object.keys(e.properties).forEach(i=>{const n=e.properties[i];n&&n.length>0&&(t[i]=n)}),Object.assign(e,{properties:t})}$l.random=({format:e="hex",saturation:t=[50,55],lightness:i=[50,60],differencePoint:n=130,excludeHue:s}={})=>{t=kl(t,ml),i=kl(i,fl);const r=s?_l(0,359,s):vl(0,359),o="number"==typeof t?t:vl(...t),a="number"==typeof i?i:vl(...i),[l,c,d]=Sl(r,o,a);return{color:"hsl"===e?El(r,o,a):Ol(l,c,d,e),isLight:Cl(l,c,d,n)}};class Bl extends gl{static get properties(){return Object.assign({key:{type:String},keyMap:{type:Object,attribute:"key-map"},caseSensitive:{type:Boolean}},super.properties)}constructor(){super(),this.key="ref",this.keyMap={},this.caseSensitive=!1,this._ranges=[],this._rangesMap=new Map,this._history=[],this._disabled=!1}connectedCallback(){super.connectedCallback(),this.fill=0;let e=!1;this._inHandler=!1,this._pendingCallback=null;const t=(e=10)=>{this._pendingCallback=setTimeout(()=>{this._selectionChanged()},e)};this._eventHandler=i=>{if("selectionchange"===i.type||this._inHandler)return;if("mousedown"===i.type&&(e=!0),"mouseup"===i.type&&(e=!1),e)return;this._cancelPendingCallback();const n="mouseup"===i.type?10:100;t(n)},document.addEventListener("selectionchange",this._eventHandler.bind(this)),this.shadowRoot.addEventListener("mousedown",this._eventHandler.bind(this)),this.shadowRoot.addEventListener("mouseup",this._eventHandler.bind(this)),this.subscribeTo("pb-add-annotation",e=>this.addAnnotation(e.detail)),this.subscribeTo("pb-edit-annotation",this._editAnnotation.bind(this)),this.subscribeTo("pb-refresh",()=>{this._ranges=[],this._rangesMap.clear(),this._currentSelection=null,this._clearMarkers(),this.emitTo("pb-annotations-changed",{ranges:this._ranges,refresh:!0})}),this.addEventListener("pb-disable",()=>{this._disabled=!0}),this.addEventListener("pb-enable",()=>{this._disabled=!1}),this._resizeHandler()}get annotations(){return this._ranges}set annotations(e){this._ranges=e,this.updateAnnotations(!0),this._markIncompleteAnnotations(),this._initAnnotationColors(),this._annotationStyles()}saveHistory(){this._history.push(JSON.stringify(this._ranges)),this.emitTo("pb-annotations-history",this._history)}getHistory(){return this._history}popHistory(){if(0===this._history.length)return void console.warn("<pb-view-annotate> history is empty");this._scrollTop=this.scrollTop;const e=this._history.pop();this._clearMarkers(),this._ranges=JSON.parse(e),this._rangesMap.clear(),this._refresh(),this.emitTo("pb-annotations-changed",{ranges:this._ranges}),this.emitTo("pb-annotations-history",this._history)}clearHistory(e){this._history=e||[]}firstUpdated(){super.firstUpdated(),this.enableScrollbar(!1),fn(this.shadowRoot,"light-border")}render(){return[...super.render(),t`<div id="marker-layer"></div>`]}zoom(e){super.zoom(e),window.requestAnimationFrame(()=>this.refreshMarkers())}getKey(e){return this.keyMap[e]||this.key}_resizeHandler(){let e=null;const t=()=>{e=setTimeout(()=>{e=null,this.refreshMarkers()},200)};window.addEventListener("resize",()=>{e||this._clearMarkers(),e&&clearTimeout(e),t()})}_refresh(e){super._refresh(e),e&&e.detail&&e.detail.preserveScroll&&(this._scrollTop=this.scrollTop)}_handleContent(){super._handleContent(),this.updateComplete.then(()=>setTimeout(()=>{this._initAnnotationColors(),this._annotationStyles(),this.updateAnnotations(),this._markIncompleteAnnotations(),this._scrollTop&&(this.scrollTop=this._scrollTop,this._scrollTop=void 0),this.emitTo("pb-annotations-loaded")},300))}_updateAnnotation(e,t=!1,i=!1){const n=this.shadowRoot.getElementById("view"),s=Array.from(n.querySelectorAll(`[data-tei="${e.context}"]`)).filter(e=>null===e.closest("pb-popover")&&"footnote"!==e.getAttribute("rel"))[0];if(!s)return null;const r=document.createRange(),o=jl(s,e.start),a=jl(s,e.end);if(!o||!a)return console.error("<pb-view-annotate> Invalid range for %o",s),null;if(console.log("<pb-view-annotate> Range before adjust: %o %o",o,a),o[1]===o[0].textContent.length){const e=Nl(s,o[0]);e===a[0]?(r.setStart(e,0),o[0]=e,o[1]=0):r.setStartBefore(o[0].nextSibling||e)}else o[0]!==a[0]&&0===o[1]?r.setStartBefore(Tl(o[0],s)):r.setStart(o[0],o[1]);o[0]!==a[0]&&a[0].textContent.length-1===a[1]?r.setEndAfter(Tl(a[0],s)):r.setEnd(a[0],a[1]),console.log("<pb-view-annotate> Range: %o",r);const l=document.createElement("span"),c=""===e.properties[this.getKey(e.type)]?"incomplete":"";l.className=`annotation annotation-${e.type} ${e.type} ${c} ${e.before?"before":""}`,l.dataset.type=e.type,l.dataset.annotation=JSON.stringify(e.properties);try{r.surroundContents(l)}catch(e){if(t)return null;throw new Error("An error occurred. The annotation may not be displayed. You should consider saving and reloading the document.")}return this._rangesMap.set(l,e),i||this.refreshMarkers(),l}updateAnnotations(e=!1){this._ranges.forEach(t=>{let i;switch(t.type){case"delete":i=this.shadowRoot.querySelector(`[data-tei="${t.node}"]`),i?this._deleteAnnotation(i):console.error("Annotation %s not found",t.context);break;case"modify":if(i=this.shadowRoot.querySelector(`[data-tei="${t.node}"]`),!i){console.error("<pb-view-annotate> Target node not found for %o",t.node);break}i.dataset.annotation=JSON.stringify(t.properties);break;default:this._updateAnnotation(t,e,!0)}}),window.requestAnimationFrame(()=>this.refreshMarkers())}_getSelection(){return this.shadowRoot.getSelection?this.shadowRoot.getSelection():window.getSelection()}_selectionChanged(){if(this._disabled)return;const e=this._getSelection(),t=this._selectedRange(e);if(t){let i=!1;const n=t.commonAncestorContainer;if(n.nodeType===Node.ELEMENT_NODE){if(t.startContainer.parentElement!==n){const e=Tl(t.startContainer,n);t.setStartBefore(e),i=!0}if(t.endContainer.parentElement!==n){const e=Tl(t.endContainer,n);t.setEndAfter(e),i=!0}}this._markSelection(t),this._currentSelection=t,console.log("<pb-view-annotate> selection: %o",t),i&&setTimeout(()=>{this._inHandler=!0;try{e.removeAllRanges(),e.addRange(t)}finally{this._inHandler=!1}},100),this.emitTo("pb-selection-changed",{hasContent:!0,range:t,selected:e.toString()})}else this._clearSelection(),this.emitTo("pb-selection-changed",{hasContent:!1})}_markSelection(e){const t=this.shadowRoot.getElementById("view").getBoundingClientRect(),i=this.shadowRoot.getElementById("marker-layer");this._clearSelection();const n=e.getClientRects();for(let e=0;e<n.length;e++){const s=n[e],r=document.createElement("div");r.className="selection-marker",r.style.position="absolute",r.style.left=s.left-t.left+"px",r.style.top=s.top-t.top+"px",r.style.width=`${s.width}px`,r.style.height=`${s.height}px`,r.style.backgroundColor="var(--pb-annotation-selection, #f9ea7678)",i.appendChild(r)}}_clearSelection(){const e=this.shadowRoot.getElementById("marker-layer");e.querySelectorAll(".selection-marker").forEach(t=>{e.removeChild(t)})}updateAnnotation(e,t=!1){e=Ml(e);const i=this._updateAnnotation(e,t);return i&&(this._ranges.push(e),this.emitTo("pb-annotations-changed",{type:e.type,text:e.text,ranges:this._ranges})),i}addAnnotation(e){const t=e.range||this._currentSelection;if(t.collapsed&&!e.before)return null;const i=Rl(t.startContainer,t.startOffset),n=Rl(t.endContainer,t.endOffset,"end"),s={context:i.parent,start:"after"===e.position?n.offset:i.offset,end:void 0===e||"before"===e.position?i.offset:n.offset,text:e.before?"":t.cloneContents().textContent,before:e.before};return e.type&&(s.type=e.type),e.properties&&(s.properties=e.properties),console.log("<pb-view-annotate> range adjusted: %o",s),this._ranges.push(Ml(s)),this.emitTo("pb-annotations-changed",{type:s.type,text:s.text,ranges:this._ranges}),this._checkAnnotationColor(s.type),this._updateAnnotation(s)}deleteAnnotation(e){if(e.dataset.tei){const t=this._ranges.findIndex(t=>"modify"===t.type&&t.node===e.dataset.tei);t>-1&&this._ranges.splice(t,1);const i=e.parentNode.closest("[data-tei]"),n={type:"delete",node:e.dataset.tei,context:i.dataset.tei};this._ranges.push(n)}else{const t=this._rangesMap.get(e);this._rangesMap.delete(e);const i=this._ranges.indexOf(t);console.log("<pb-view-annotate> deleting annotation %o",t),this._ranges.splice(i,1)}this._deleteAnnotation(e)}_deleteAnnotation(e){const t=document.createRange();for(let i=0;i<e.childNodes.length;i++){const n=e.childNodes[i].cloneNode(!0);e.parentNode.insertBefore(n,e),0===i&&t.setStartBefore(n),i===e.childNodes.length-1&&t.setEndAfter(n)}e.parentNode.removeChild(e),this.emitTo("pb-annotations-changed",{ranges:this._ranges}),window.requestAnimationFrame(()=>this.refreshMarkers()),this._inHandler=!0;try{const e=this._getSelection();e.removeAllRanges(),e.addRange(t)}catch(e){console.error("<pb-view-annotate> %s",e.message)}finally{this._inHandler=!1}}editAnnotation(e,t){if(e.dataset.tei){const i=e.closest("[data-tei]");let n=this._ranges.find(t=>"modify"===t.type&&t.node===e.dataset.tei);n||(n={type:"modify",node:e.dataset.tei,context:i.dataset.tei},this._ranges.push(n)),n.properties=t,n=Ml(n),this.emitTo("pb-annotations-changed",{ranges:this._ranges})}else{let i=this._rangesMap.get(e);i?(i.properties=t,i=Ml(i),this.emitTo("pb-annotations-changed",{ranges:this._ranges})):console.error("no range found for edit span %o",e)}const i=JSON.parse(e.dataset.annotation),n=Object.assign(i||{},t);e.dataset.annotation=JSON.stringify(n),""!==n[this.getKey(e.dataset.type)]&&e.classList.remove("incomplete")}_editAnnotation(e){this.editAnnotation(e.detail.target,e.detail.properties)}_selectedRange(e){if(!e||0===e.rangeCount)return null;if(e.anchorNode.getRootNode()!==this.shadowRoot)return null;const t=e.getRangeAt(0);return t.collapsed?null:t}_cancelPendingCallback(){this._pendingCallback&&(clearTimeout(this._pendingCallback),this._pendingCallback=null)}_createTooltip(e){if(e._tippy||!e.dataset.annotation)return;const t=document.createElement("div");t.className="annotation-popup";const i=document.createElement("div");i.className="info",t.appendChild(i);const n=document.createElement("div");n.className="toolbar";const s=document.createElement("span");if(s.className="annotation-type",n.appendChild(s),e.dataset.annotation){const t=document.createElement("pb-icon-button");t.setAttribute("icon","icons:create"),t.setAttribute("title",g("annotations.edit")),t.addEventListener("click",()=>{const t=JSON.parse(e.dataset.annotation),i=e.textContent;this.emitTo("pb-annotation-edit",{target:e,type:e.dataset.type,properties:t,text:i})}),n.appendChild(t)}const r=document.createElement("pb-icon-button");r.setAttribute("icon","icons:delete"),r.setAttribute("title",g("annotations.delete")),r.addEventListener("click",()=>{this.saveHistory(),this.deleteAnnotation(e)}),n.appendChild(r),t.appendChild(n);const o=this.shadowRoot.getElementById("view");an(e,{content:t,allowHTML:!0,interactive:!0,appendTo:o.nodeType===Node.DOCUMENT_NODE?document.body:o,theme:"light-border",hideOnClick:!1,maxWidth:"auto",trigger:"click",placement:"left",popperOptions:{modifiers:[{name:"flip",options:{fallbackPlacements:["right","top","bottom"]}}]},onTrigger:(n,r)=>{r.preventDefault(),r.stopPropagation();const{type:o}=e.dataset,a=JSON.parse(e.dataset.annotation)||{},l=this._annotationColors.get(o);if(s.innerHTML=o,s.style.backgroundColor=`var(--pb-annotation-${o})`,s.style.color=`var(${l&&l.isLight?"--pb-color-primary":"--pb-color-inverse"})`,a[this.getKey(o)])this.emitTo("pb-annotation-detail",{type:o,id:a[this.getKey(o)],container:i,span:e,ready:()=>n.setContent(t)});else{i.innerHTML="";const e=Object.keys(a);if(0===e.length){const e=document.createElement("p");e.innerHTML=g("annotations.no-properties"),i.appendChild(e)}else{const t=document.createElement("table");e.forEach(e=>{const i=document.createElement("tr"),n=document.createElement("td");n.innerHTML=e,i.appendChild(n);const s=document.createElement("td");s.innerHTML=JSON.stringify(a[e],null,2),i.appendChild(s),t.appendChild(i)}),i.appendChild(t)}}},onClickOutside:(e,t)=>{e.hideWithInteractivity(t)}})}_showMarker(e,t,i,n=0){const s=e.getClientRects(),{type:r}=e.dataset;if(!e.classList.contains("before"))for(let e=0;e<s.length;e++){const o=s[e],a=document.createElement("div");a.className=`marker annotation-${r}`,a.style.position="absolute",a.style.left=o.left-i.left+"px",a.style.top=`${o.top-i.top+o.height}px`,a.style.marginTop=`${n}px`,a.style.width=`${o.width}px`,a.style.height="3px",a.style.backgroundColor=`var(--pb-annotation-${r})`,a.part="annotation",t.appendChild(a)}this._createTooltip(e)}_clearMarkers(){this.shadowRoot.getElementById("marker-layer").innerHTML=""}refreshMarkers(){const e=this.shadowRoot.getElementById("view"),t=e.getBoundingClientRect(),i=this.shadowRoot.getElementById("marker-layer");i.style.display="none",this._clearMarkers(),e.querySelectorAll(".annotation").forEach(e=>{e._tippy&&e._tippy.destroy(),this._showMarker(e,i,t,5*Pl(e,"annotation"))}),i.style.display="block"}search(e,t){function i(e){let t=e.replace(/[/.?+*\\]/g,e=>`\\${e}`).replace(/[\s\n\t]+/g,"\\s+");return/^\w/.test(t)&&(t=`\\b${t}`),/\w$/.test(t)&&(t=`${t}\\b`),t}function n(e){return e.nodeType===Node.TEXT_NODE?NodeFilter.FILTER_ACCEPT:e.classList.contains("annotation-popup")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP}n.acceptNode=n;const s=[];if(!t||0===t.length)return s;const r=t.filter(e=>e&&e.length>0).map(e=>i(e)).join("|");console.log(`<pb-view-annotate> Searching content for ${r}...`);const o=new RegExp(r,this.caseSensitive?"g":"gi"),a=document.createTreeWalker(this.shadowRoot.getElementById("view"),NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,n);for(;a.nextNode();){const t=a.currentNode,i=Array.from(t.textContent.matchAll(o));for(const n of i){const i=n.index+n[0].length;let r=!1,o=null;const a=t.parentNode.dataset.annotation,l=t.parentNode.dataset.type;if(a&&l){r=l===e,o=(JSON.parse(a)||{})[this.getKey(e)]}const c=Rl(t,n.index),d=Rl(t,i,"end"),[h,p]=Fl(t),u={annotated:r,context:c.parent,start:c.offset,end:d.offset,textNode:t,kwic:Dl(h,p+n.index,p+i)};u[this.getKey(e)]=o,s.push(u)}}return s}scrollTo(e){const t=this.shadowRoot.getElementById("view"),i=document.createRange();if(e.annotated)i.selectNode(e.textNode);else{const n=Array.from(t.querySelectorAll(`[data-tei="${e.context}"]`)).filter(e=>null===e.closest("pb-popover")&&"footnote"!==e.getAttribute("rel"))[0],s=jl(n,e.start),r=jl(n,e.end);i.setStart(s[0],s[1]),i.setEnd(r[0],r[1])}const n=t.getBoundingClientRect(),s=i.getBoundingClientRect();let r=t.querySelector("[part=highlight]");r||(r=document.createElement("div"),r.part="highlight",r.style.position="absolute",t.appendChild(r)),r.style.left=s.left-n.left-4+"px",r.style.top=s.top-n.top-4+"px",r.style.width=`${s.width+4}px`,r.style.height=`${s.height}px`,i.startContainer.parentNode.scrollIntoView(!0)}hideMarker(){const e=this.shadowRoot.getElementById("view").querySelector("[part=highlight]");e&&(e.style.top="-1000px")}_markIncompleteAnnotations(){this.shadowRoot.getElementById("view").querySelectorAll(".annotation.authority").forEach(e=>{if(e.dataset.type){const t=JSON.parse(e.dataset.annotation),i=this.getKey(e.dataset.type);t[i]&&0!==t[i].length?e.classList.remove("incomplete"):e.classList.add("incomplete")}})}_initAnnotationColors(){this._annotationColors=new Map;const e=new Set;this.shadowRoot.getElementById("view").querySelectorAll(".annotation").forEach(t=>{t.dataset.type&&e.add(t.dataset.type)}),e.forEach(e=>{this._annotationColors.set(e,$l(`annotation-${e.repeat(4)}`,{saturation:70,lightness:[30,60]}))}),this.emitTo("pb-annotation-colors",{colors:this._annotationColors})}_checkAnnotationColor(e){this._annotationColors.has(e)||(this._annotationColors.set(e,$l(`annotation-${e.repeat(4)}`,{saturation:70,lightness:[30,60]})),this._annotationStyles(),this.emitTo("pb-annotation-colors",{colors:this._annotationColors}))}_annotationStyles(){const e=this.shadowRoot.getElementById("view");let t=e.querySelector("_annotation-styles");t&&t.parentNode.removeChild(t);const i=[],n=[];this._annotationColors.forEach((e,t)=>{i.push(`--pb-annotation-${t}: ${e.color};`),i.push(`--pb-annotation-${t}-border: 2px solid var(--pb-annotation-${t});`),n.push(`\n        .annotation-${t}::after {\n          background-color: var(--pb-annotation-${t});\n          border-color: var(--pb-annotation-${t});\n          color: var(${e.isLight?"--pb-color-primary":"--pb-color-inverse"});\n        }\n        .annotation-${t}.incomplete::after {\n          background: repeating-linear-gradient(\n            315deg,\n            var(--pb-annotation-${t}),\n            var(--pb-annotation-${t}) 5px,\n            var(${e.isLight?"--pb-annotation-stripes-light":"--pb-annotation-stripes-dark"}) 5px,\n            var(${e.isLight?"--pb-annotation-stripes-light":"--pb-annotation-stripes-dark"}) 10px\n          );\n          color: var(${e.isLight?"--pb-color-primary":"--pb-color-inverse"});\n        }\n      `)});const s=`\n      :host {\n        ${i.join("\n")}\n      }\n\n      ${n.join("\n")}\n    `;t=document.createElement("style"),t.className="_annotation-styles",t.innerHTML=s,e.insertBefore(t,e.firstChild)}static get styles(){return[super.styles,n`
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
      `]}}customElements.define("pb-view-annotate",Bl);class zl extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{direction:{type:String},zoomFactor:{type:Number,reflect:!0,attribute:"zoom-factor"}})}constructor(){super(),this.direction="in",this.zoomFactor=1}connectedCallback(){super.connectedCallback(),this._loadZoomPreference()}_handleClick(){this.emitTo("pb-zoom",{direction:this.direction}),this.zoom(this.direction)}zoom(e){const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--pb-zoom-factor")||"1"),i=.1,n=.5,s=2;let r="in"===e?Math.min(t+i,s):Math.max(t-i,n);document.documentElement.style.setProperty("--pb-zoom-factor",r.toString()),this.zoomFactor=r,localStorage.setItem("pb-zoom-preference",r.toString())}_loadZoomPreference(){const e=localStorage.getItem("pb-zoom-preference");if(e){const t=parseFloat(e);isNaN(t)||(document.documentElement.style.setProperty("--pb-zoom-factor",t.toString()),this.zoomFactor=t)}}render(){return t`
      <button
        type="button"
        @click="${this._handleClick}"
        title="${"in"===this.direction?p("toolbar.zoom.in"):p("toolbar.zoom.out")} (current zoom: ${this.zoomFactor.toFixed(1)})"
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
    `}}customElements.define("pb-zoom",zl);class ql extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{toggle:{type:String},opened:{type:Boolean,reflect:!0},maxWidth:{type:String,attribute:"max-width"},position:{type:String,reflect:!0}})}constructor(){super(),this.opened=!1,this.position="left"}connectedCallback(){super.connectedCallback();const e=this.toggle?document.getElementById(this.toggle):null;e&&e.addEventListener("click",this._toggle.bind(this)),document.body.addEventListener("click",()=>{this.opened&&(this.opened=!1)}),this.addEventListener("click",e=>e.stopPropagation()),this.subscribeTo("pb-refresh",this._close.bind(this))}firstUpdated(){this.maxWidth?(void 0!==window.visualViewport?window.visualViewport.addEventListener("resize",()=>{this._handleResize()}):window.addEventListener("resize",()=>{this._handleResize()}),this._handleResize()):this.classList.add("overlay")}_handleResize(){const e=document.getElementById(this.toggle),t=`(max-width: ${this.maxWidth})`;window.matchMedia(t).matches?(console.log("<pb-drawer> entering overlay mode"),this.classList.add("overlay"),e&&(e.style.display="")):(console.log("<pb-drawer> leaving overlay mode"),this.classList.remove("overlay"),e&&(e.style.display="none"))}_toggle(e){e&&(e.preventDefault(),e.stopPropagation()),this.opened?this.opened=!1:(this.opened=!0,this.emitTo("pb-load"))}_close(){this.opened=!1}render(){return t` <div part="content"><slot></slot></div> `}static get styles(){return n`
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
    `}}customElements.define("pb-drawer",ql);class Ul extends s{static get properties(){return Object.assign(Object.assign({},super.properties),{},{query:{type:String},match:{type:Boolean,reflect:!0}})}constructor(){super(),this.query="(max-width:460px)",this.match=!1}firstUpdated(){void 0!==window.visualViewport?window.visualViewport.addEventListener("resize",()=>{this._handleResize()}):window.addEventListener("resize",()=>{this._handleResize()}),this._handleResize()}_handleResize(){let{query:e}=this;/\(.*\)$/.test(e)||(e=`(${e})`),window.matchMedia(e).matches?!1===this.match&&(this.dispatchEvent(new CustomEvent("changed",{detail:{value:!0},composed:!0,bubbles:!0})),this.match=!0):!0===this.match&&(this.dispatchEvent(new CustomEvent("changed",{detail:{value:!1},composed:!0,bubbles:!0})),this.match=!1)}render(){return t` ${this.match?t`<slot></slot>`:null} `}static get styles(){return n`
      :host {
        display: inherit;
      }
    `}}customElements.define("pb-media-query",Ul);class Hl extends En{constructor(){super(),this._autoSubmitTargets=new WeakSet}firstUpdated(){const e=this.shadowRoot&&this.shadowRoot.getElementById("form");e&&e.addEventListener("submit",e=>{e.preventDefault(),this._submit()}),this.addEventListener("click",e=>{"searchButtonTop"===e.target.slot&&this.submit(),"searchButtonBottom"===e.target.slot&&this.submit(),"resetButton"===e.target.slot&&this._reset()}),this._submissionHandlers()}render(){return t`
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
    `}submit(){const e=this.shadowRoot&&this.shadowRoot.getElementById("form");e&&(e.requestSubmit?e.requestSubmit():"function"==typeof e.submit&&e.submit())}_submit(){const e=this.serializeForm();this.emitTo("pb-search-resubmit",{params:e}),this.emitTo("pb-submit",{params:e})}_reset(){const e=this.shadowRoot&&this.shadowRoot.getElementById("form");e&&"function"==typeof e.reset&&e.reset()}serializeForm(){const e=this.shadowRoot&&this.shadowRoot.getElementById("form");if(!e)return{};const t=Array.from(e.elements||[]),i=Array.from(this.querySelectorAll("input, select, textarea")),n=[...new Set([...t,...i])].filter(e=>e.name&&!e.disabled&&!e.closest("[disabled]")),s={};n.forEach(e=>{e.name in s||(s[e.name]=null)});const r={};return n.forEach(e=>{if("checkbox"===e.type||"radio"===e.type)e.checked&&(null==r[e.name]?r[e.name]=e.value:Array.isArray(r[e.name])?r[e.name].push(e.value):r[e.name]=[r[e.name],e.value]);else if("select-multiple"===e.type){const t=Array.from(e.selectedOptions).map(e=>e.value);t.length>0&&(r[e.name]=1===t.length?t[0]:t)}else r[e.name]=e.value}),Object.keys(r).forEach(e=>{null!=r[e]&&(s[e]=r[e])}),s}_parseHeaders(e){}_onLoad(e){super._onLoad(e),this.dispatchEvent(new CustomEvent("pb-custom-form-loaded",{detail:e})),this._submissionHandlers()}_handleError(){this.emitTo("pb-end-update");const e=this.shadowRoot.getElementById("loadContent"),{response:t}=e.lastError;if(this.silent)return void console.error("Request failed: %s",t?t.description:"");let i;i=t?t.description:"Server error occurred";const n=this.shadowRoot.getElementById("errorDialog");this.shadowRoot.getElementById("errorMessage").textContent=`Server error: ${i}`,n.openDialog()}_submissionHandlers(){this.autoSubmit&&this.querySelectorAll(this.autoSubmit).forEach(e=>{if(this._autoSubmitTargets.has(e))return;this._autoSubmitTargets.add(e);const t=(e.nodeName||"").toLowerCase();let i="change";e instanceof HTMLButtonElement||"pb-icon-button"===t||"paper-button"===t||"button"===t||"input"===t&&("button"===e.type||"submit"===e.type||"reset"===e.type)?i="click":"paper-input"===t||e instanceof HTMLInputElement&&("text"===e.type||"search"===e.type)?i="keyup":"paper-dropdown-menu"===t&&(i="value-changed"),e instanceof HTMLSelectElement&&(i="change"),e.addEventListener(i,this._submit.bind(this))})}static get properties(){return Object.assign({autoSubmit:{type:String,attribute:"auto-submit"}},super.properties)}}function Vl(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)e[n]=i[n]}return e}function Wl(e,t){function i(i,n,s){if("undefined"!=typeof document){"number"==typeof(s=Vl({},t,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var o in s)s[o]&&(r+="; "+o,!0!==s[o]&&(r+="="+s[o].split(";")[0]));return document.cookie=i+"="+e.write(n,i)+r}}function n(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var i=document.cookie?document.cookie.split("; "):[],n={},s=0;s<i.length;s++){var r=i[s].split("="),o=r.slice(1).join("=");try{var a=decodeURIComponent(r[0]);if(n[a]=e.read(o,a),t===a)break}catch(e){}}return t?n[t]:n}}return Object.create({set:i,get:n,remove:function(e,t){i(e,"",Vl({},t,{expires:-1}))},withAttributes:function(e){return Wl(this.converter,Vl({},this.attributes,e))},withConverter:function(e){return Wl(Vl({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}customElements.define("pb-custom-form",Hl);var Yl=Wl({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});class Gl extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{src:{type:String},url:{type:String},type:{type:String},odd:{type:String},dialog:{type:String},title:{type:String},source:{type:Boolean},params:{type:String},_target:{type:String,reflect:!0},_href:{type:String,reflect:!0},_token:{type:String}})}constructor(){super(),this.source=!1,this._target="_self",this.type=""}firstUpdated(){this.src&&this.subscribeTo("pb-document",e=>{e.detail.id===this.src&&(this.odd=e.detail.odd)}),this.subscribeTo("pb-refresh",e=>{e.detail.odd&&(this.odd=e.detail.odd,this._href=this._computeURL())}),a("pb-page-ready",()=>{this._target=this._computeTarget(),this._href=this._computeURL()})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t)switch(e){case"source":this._target=this._computeTarget();break;case"src":case"type":case"file":case"odd":case"params":case"url":this._href=this._computeURL()}}render(){return t`
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
    `}_computeTarget(){return this.source?"_blank":"_self"}_computeURL(){let e;this._token=797*(new Date).getTime();const t=this.getDocument();if(t)if(this.url)e=`${this.toAbsoluteURL(this.url)}?odd=${this.odd?this.odd:t.odd}.odd`;else{const i=`${this.getEndpoint()}/`;e=this.lessThanApiVersion("1.0.0")?`${t.getFileName()}${this.type?`.${this.type}`:""}?odd=${this.odd?this.odd:t.odd}.odd&cache=no&token=${this._token}`:`${i}api/document/${encodeURIComponent(t.path)}/${this.type||"html"}?odd=${this.odd?this.odd:t.odd}.odd&token=${this._token}`}else e=/^(?:[a-z]+:)?\/\//i.test(this.url)?this.url:`${this.getEndpoint()}/${this.url}`,e=this.lessThanApiVersion("1.0.0")?`${e}${this.type?`.${this.type}`:""}?odd=${this.odd}&cache=no&token='${this._token}`:`${e}/${this.type}?odd=${this.odd}&token='${this._token}`;return this.params&&(e+=`&${this.params}`),this.source&&(e+="&source=true"),e}_handleClick(e){if(this.dialog){const e=document.getElementById(this.dialog);e&&e.openDialog();const t=this._token,i=window.setInterval(()=>{Yl.get("simple.token")===t&&(window.clearInterval(i),Yl.remove("simple.token"),e&&e.closeDialog())})}"_self"===this._target&&(e.preventDefault(),window.location=this._href)}}customElements.define("pb-download",Gl);class Ql extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{loggedIn:{type:Boolean,attribute:"logged-in",reflect:!0},user:{type:String},password:{type:String},group:{type:String},groups:{type:Array},auto:{type:Boolean},loginLabel:{type:String,reflect:!0,attribute:"login-label"},logoutLabel:{type:String,reflect:!0,attribute:"logout-label"},loginIcon:{type:String,attribute:"login-icon"},logoutIcon:{type:String,attribute:"logout-icon"},_invalid:{type:Boolean},_hasFocus:{type:Boolean}})}constructor(){super(),this.loggedIn=!1,this.loginLabel="login.login",this.logoutLabel="login.as",this.user="",this.groups=[],this.loginIcon="account-circle",this.logoutIcon="supervisor-account",this._hasFocus=!0}firstUpdated(){super.firstUpdated(),this._checkLogin=this.shadowRoot.getElementById("checkLogin"),this._loginDialog=this.shadowRoot.querySelector("pb-dialog"),this.renderRoot.querySelector("form").addEventListener("submit",e=>{e.preventDefault(),this._confirmLogin()}),window.addEventListener("blur",()=>{this._hasFocus=!1}),window.addEventListener("focus",()=>{this._hasFocus||(this._hasFocus=!0,this._checkLogin.body=null,this._checkLogin.generateRequest())}),a("pb-page-ready",e=>{h(e.apiVersion,"1.0.0")?this._checkLogin.url=`${e.endpoint}/api/login/`:this._checkLogin.url=`${e.endpoint}/login`,this._checkLogin.body={user:this.user,password:this.password},this._checkLogin.generateRequest()}),this.addEventListener("keyup",e=>{13===e.keyCode&&(e.preventDefault(),this._confirmLogin())})}render(){return t`
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
                <span class="label" part="label">${p(this.loggedIn?this.logoutLabel:this.loginLabel,{user:this.user})}</span>
            </button>

            <form action="login">
                <pb-dialog ?modal="${this.auto}">
                    <div slot="title">${p("login.login")}</div>
                    <label>
                        ${p("login.user")}
                        <input name="user" .value="${this.user}" autofocus placeholder="${p("login.user")}"></input>
                    </label>
                    <label>
                        ${p("login.password")}
                        <input name="password" type="password" placeholder="${p("login.password")}"></input>
                    </label>
                    <slot name="information"></slot>
                    ${this._invalid?t`<p id="message" part="message-invalid">
                            ${p("login.invalid")}<span part="group-invalid"
                              >${this.group?t` (${p("login.requiredGroup",{group:this.group})})`:null}</span
                            >.
                          </p>`:null}
                    <button autofocus slot="footer">${p("login.login")}</button>
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
    `}}customElements.define("pb-login",Ql);class Kl extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{url:{type:String},title:{type:String},method:{type:String},event:{type:String},confirm:{type:String},quiet:{type:Boolean},_message:{type:String}})}constructor(){super(),this.method="get",this.confirm=null,this.quiet=!1,this._running=!1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-update",this._onUpdate.bind(this))}render(){return t`
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
    `}_handleClick(e){if(e.preventDefault(),!this._running)if(this._running=!0,this.confirm){this.shadowRoot.getElementById("confirmDialog").confirm(this._dialogTitle,g(this.confirm)).then(()=>this.trigger()).catch(()=>console.log("<pb-ajax> Action cancelled"))}else this.trigger()}async trigger(){this.shadowRoot.getElementById("loadContent").url=`${this.getEndpoint()}/${this.url}`,this.emitTo("pb-start-update"),await this.shadowRoot.getElementById("loadContent").generateRequest()}_handleResponse(){this._running=!1;const e=this.shadowRoot.getElementById("loadContent").lastResponse;if(this._message=e,!this.quiet){this.shadowRoot.getElementById("confirmDialog").show(this._dialogTitle,this._message)}this.emitTo("pb-end-update"),this.event&&this.emitTo(this.event)}_handleError(){this._running=!1;const e=this.shadowRoot.getElementById("loadContent").lastError.response,t=(new DOMParser).parseFromString(e,"application/xml").querySelector("message");this._message=t?t.textContent:e;this.shadowRoot.getElementById("confirmDialog").show(g("dialogs.error"),this._message),this.emitTo("pb-end-update")}_onUpdate(e){this.shadowRoot.getElementById("loadContent").params=e.detail.params}}customElements.define("pb-ajax",Kl);class Jl extends(m(o(s))){static get styles(){return n`
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
        <summary aria-label="${p(this.label)}" title="${p(this.label)}"></summary>
        <ul></ul>
      </details>
      <slot @slotchange="${this._syncOptions}"></slot>
    `}_syncOptions(){const e=this.shadowRoot.querySelector("ul"),t=this.shadowRoot.querySelector("summary");if(!e||!t)return;e.innerHTML="";Array.from(this.querySelectorAll("option, paper-item")).forEach(i=>{const n=document.createElement("li");n.textContent=i.textContent,n.dataset.value=i.value||i.getAttribute("value"),n.dataset.value===this.selected&&(t.textContent="text"===this.display?i.textContent:i[this.display]),n.addEventListener("click",()=>{this._changed({target:{value:n.dataset.value}}),this.shadowRoot.querySelector("details").removeAttribute("open")}),e.appendChild(n)})}_changed(e){const t=e.target.value;t!==this.selected&&(console.log("<pb-lang> Language changed to %s",t),this.emitTo("pb-i18n-language",{language:t}),this.selected=t)}}customElements.define("pb-lang",Jl);class Zl extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{selected:{type:Number,reflect:!0}})}constructor(){super(),this.selected=0,this._initialized=!1,this._tabs=[],this._pages=[],this._focusOnSelect=!1,this._onTabClick=this._onTabClick.bind(this),this._onKeyDown=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),a("pb-page-ready",()=>{const e=y.state.tab;void 0!==e&&this._select(parseInt(e,10)||0,{emit:!1,commit:!1}),y.subscribe(this,e=>{void 0!==e.tab&&this._select(parseInt(e.tab,10)||0,{emit:!1,commit:!1})})})}firstUpdated(){super.firstUpdated(),this._applySelection(),this.emitTo("pb-tab",{selected:this.selected})}render(){return t`
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
    `}updated(e){e.has("selected")&&this._applySelection()}_handleTabSlot(e){this._tabs&&this._tabs.length&&this._tabs.forEach(e=>{e.removeEventListener("click",this._onTabClick),e.removeEventListener("keydown",this._onKeyDown)});const t=e.target.assignedElements({flatten:!0});this._tabs=t.filter(e=>e.nodeType===Node.ELEMENT_NODE),this._tabs.forEach((e,t)=>{e.classList.add("pb-tab"),e.setAttribute("role","tab"),e.dataset.pbTabIndex=String(t),e.id||(e.id=`pb-tab-${t}`),"BUTTON"!==e.tagName||e.hasAttribute("type")||e.setAttribute("type","button"),e.addEventListener("click",this._onTabClick),e.addEventListener("keydown",this._onKeyDown)}),this._applySelection()}_handlePageSlot(e){const t=e.target.assignedElements({flatten:!0});this._pages=t.filter(e=>e.nodeType===Node.ELEMENT_NODE),this._pages.forEach(e=>{e.setAttribute("role","tabpanel")}),this._applySelection()}_applySelection(){if(!this._tabs||0===this._tabs.length)return;let e=this.selected;if((null==e||Number.isNaN(Number(e)))&&(e=0),e=Math.max(0,Math.min(Number(e),this._tabs.length-1)),e!==this.selected){const t=this.selected;this.selected=e,this.requestUpdate("selected",t)}this._tabs.forEach((e,t)=>{const i=t===this.selected;e.setAttribute("aria-selected",i?"true":"false"),e.setAttribute("tabindex",i?"0":"-1"),e.classList.toggle("pb-tab--active",i),i&&this._focusOnSelect&&e.focus({preventScroll:!0})}),this._focusOnSelect=!1,this._pages&&this._pages.length&&this._pages.forEach((e,t)=>{const i=this._tabs[t],n=t===this.selected;e.hidden=!n,e.setAttribute("aria-hidden",n?"false":"true"),e.setAttribute("role","tabpanel"),i&&(e.setAttribute("aria-labelledby",i.id),e.id||(e.id=`pb-tab-panel-${t}`),i.setAttribute("aria-controls",e.id))})}_select(e,{emit:t=!0,commit:i=!0,focus:n=!1}={}){if(null==e)return;const s=Number(e);if(Number.isNaN(s))return;this._focusOnSelect=n;const r=this.selected;this.selected=s,this.requestUpdate("selected",r),this._applySelection(),t&&this.emitTo("pb-tab",{selected:this.selected}),i&&this._tabs&&this._tabs.length&&(this._initialized?y.commit(this,{tab:this.selected}):y.replace(this,{tab:this.selected}),this._initialized=!0)}_onTabClick(e){const t=Number(e.currentTarget.dataset.pbTabIndex);Number.isNaN(t)||this._select(t,{focus:!0})}_onKeyDown(e){const t=Number(e.currentTarget.dataset.pbTabIndex);if(Number.isNaN(t)||!this._tabs.length)return;let i=t;switch(e.key){case"ArrowRight":case"ArrowDown":i=(t+1)%this._tabs.length,e.preventDefault();break;case"ArrowLeft":case"ArrowUp":i=(t-1+this._tabs.length)%this._tabs.length,e.preventDefault();break;case"Home":i=0,e.preventDefault();break;case"End":i=this._tabs.length-1,e.preventDefault();break;default:return}this._select(i,{focus:!0})}}customElements.define("pb-tabs",Zl);class Xl extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{active:{type:Number,reflect:!0},label:{type:String},panels:{type:Array,reflect:!0},draggable:{type:Boolean}})}constructor(){super(),this.active=0,this.label="View",this.panels=null,this.position=-1,this.draggable=!1}connectedCallback(){if(super.connectedCallback(),!this.panels){const e=[];this.querySelectorAll("template").forEach(t=>e.push(t.title)),this.panels=e}this.querySelector("template")&&this._show()}firstUpdated(){const e=this.shadowRoot.querySelector('button[draggable="true"]');let t=null;this.draggable&&e.addEventListener("dragstart",e=>{e.dataTransfer.setDragImage(this,10,10),e.dataTransfer.setData("text",this.position),t=this}),this.addEventListener("dragover",e=>{e.preventDefault()}),document.addEventListener("dragenter",e=>{e.stopPropagation(),e.preventDefault(),t!==this&&(this.contains(e.target)?this.classList.add("dragover"):this.classList.remove("dragover"))}),this.addEventListener("drop",e=>{e.stopPropagation(),e.preventDefault(),t=null,this.dispatchEvent(new CustomEvent("pb-drop",{detail:{panel:e.dataTransfer.getData("text"),target:this},bubbles:!0,composed:!0}))})}render(){return t`
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
    `}_update(){const e=this.shadowRoot.querySelector('[name="panels"]').value;this.active!==e&&(this.active=e,this._show(),this.refresh())}_show(){const e=Array.from(this.querySelectorAll("template"));if(0===e.length)return void this.querySelectorAll("._pb_panel").forEach(e=>e.remove());let t=Number(this.active);Number.isInteger(t)||(t=0),t<0&&(t=0),t>=e.length&&(t=e.length-1),this.active=t,this.querySelectorAll("._pb_panel").forEach(e=>e.remove());const i=e[this.active],n=document.importNode(i.content,!0),s=document.createElement("div");s.className=`_pb_panel _pb_panel${this.active}`,s.appendChild(n),this.appendChild(s),this.emitTo("pb-panel",{panel:this,active:this.active})}refresh(){this.emitTo("pb-refresh",null)}}customElements.define("pb-panel",Xl);class ec extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{panels:{type:Array},direction:{type:String},_columns:{type:Number},animated:{type:String},animation:{type:Boolean}})}constructor(){super(),this.panels=[],this.direction="ltr",this.animated="pb-view",this.animation=!1,this._panelsInitialized=!1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-panel",e=>{const t=this._getPanelIndex(e.detail.panel);if(t<0)return;console.log("<pb-grid> Updating panel %d to show %s",t,e.detail.active);const i="rtl"===this.direction?this.panels.length-t-1:t;console.log("<pb-grid> Panel %d switched to template %s (not committing to registry)",i,e.detail.active)}),this.subscribeTo("pb-zoom",e=>{this.zoom(e.detail.direction)});const e=y.get("panels");if(e){const t=e.split(".").map(e=>parseInt(e,10));t.length>0&&t.length<=10&&t.every(e=>!isNaN(e)&&e>=0&&e<10)&&(console.log("<pb-grid> connectedCallback: Using panels from registry:",t,"overriding template attribute"),this.panels=t,this._panelsInitialized=!0)}else this.panels&&this.panels.length>0&&(console.log("<pb-grid> connectedCallback: Using panels from template attribute:",this.panels,"(no registry value)"),this._panelsInitialized=!0);this._isUpdatingFromRegistry=!1,this._lastPanelsState=null,y.subscribe(this,e=>{if(console.log("<pb-grid> Registry subscribe callback triggered, _isUpdatingFromRegistry:",this._isUpdatingFromRegistry,"state.panels:",e.panels),this._isUpdatingFromRegistry)return void console.log("<pb-grid> Skipping registry subscribe callback due to _isUpdatingFromRegistry flag");const t=e.panels?e.panels.split(".").map(e=>parseInt(e,10)).filter(e=>!isNaN(e)):[],i=t.join(".");this._lastPanelsState!==i?this._panelsInitialized||this.template?(console.log("<pb-grid> Registry subscribe callback rebuilding DOM with panels:",t,"current panels:",this.panels),this._lastPanelsState=i,this.panels=t,this._panelsInitialized=!0,this.innerHTML="",this.panels.forEach(e=>this._insertPanel(e)),this._update()):console.log("<pb-grid> Skipping registry subscribe callback - not yet initialized (template not ready)"):console.log("<pb-grid> Skipping registry subscribe callback - panels state unchanged:",i)}),this._columns=this.panels.length,this.template=this.querySelector("template"),this.template&&this.panels&&this.panels.length>0&&!this._panelsInitialized&&(console.log("<pb-grid> connectedCallback: Template ready, panels from attribute:",this.panels),this._panelsInitialized=!0)}firstUpdated(){const e=y.get("panels");if(e){const t=e.split(".").map(e=>parseInt(e,10)).filter(e=>!isNaN(e)&&e>=0&&e<10);if(t.length>0&&t.length<=10){t.join(".")!==this.panels.join(".")&&(console.log("<pb-grid> firstUpdated: Overriding template panels",this.panels,"with registry value",t),this.panels=t,this._panelsInitialized=!0)}}const t=this.querySelectorAll("._grid_panel").length;0===t&&this.panels&&this.panels.length>0?(console.log("<pb-grid> firstUpdated: Inserting panels:",this.panels,"existing panels:",t),this.panels.forEach(e=>this._insertPanel(e))):console.log("<pb-grid> firstUpdated: Skipping panel insertion - already have",t,"panels"),this._lastPanelsState=this._getState().panels,this._isUpdatingFromRegistry=!0;y.get("panels")!==this._getState().panels&&y.commit(this,this._getState()),this._isUpdatingFromRegistry=!1,this._animate(),this._update(),this.addEventListener("pb-drop",e=>{const t=parseInt(e.detail.panel),i=this._getPanelIndex(e.detail.target);console.log("<pb-grid> Insert panel %d at %d in %s",t,i,this.panels),this.querySelectorAll("._grid_panel").forEach(e=>{e.classList.remove("dragover")}),this.panels.splice(i,0,this.panels.splice(t,1)[0]),this.innerHTML="",this.panels.forEach(e=>this._insertPanel(e)),this._isUpdatingFromRegistry=!0,y.commit(this,this._getState()),this._isUpdatingFromRegistry=!1,this._update()})}_animate(){if(this.animation){document.querySelectorAll(this.animated).forEach((e,t)=>{const i=ul(e,{opacity:[0,.6],translateX:[2e3,0],duration:400,delay:100+100*t,ease:"linear"});i&&i.finished?i.finished.then(()=>{ul(e,{opacity:[.6,1],duration:200,delay:50*t,ease:"linear"})}):setTimeout(()=>{ul(e,{opacity:[.6,1],duration:200,delay:50*t,ease:"linear"})},400+100*t)})}}addPanel(e){let t=e;if(void 0!==e||this.panels.length||(t=0),void 0===e&&this.panels.length){t=this.panels.reduce((e,t)=>Math.max(e,t),0)+1}console.log("<pb-grid> Adding panel with value:",t),console.log("<pb-grid> Current panels before add:",this.panels),console.log("<pb-grid> Current panel count before add:",this.querySelectorAll("._grid_panel").length),this._columns+=1,this.panels.push(t),this._insertPanel(t),this._isUpdatingFromRegistry=!0,y.commit(this,this._getState()),this._isUpdatingFromRegistry=!1,this._update(),this.emitTo("pb-refresh"),console.log("<pb-grid> After adding panel - panels:",this.panels),console.log("<pb-grid> After adding panel - panel count:",this.querySelectorAll("._grid_panel").length)}removePanel(e){let t,i;"number"==typeof e?(t=this.panels.indexOf(e),i=this.querySelector(`[active="${e}"]`)):(i=e,t=this._getPanelIndex(e)),console.log("<pb-grid> Removing panel %d",t),console.log("<pb-grid> Container:",i),console.log("<pb-grid> Current panels:",[...this.panels]),console.log("<pb-grid> Current panel count:",this.querySelectorAll("._grid_panel").length),this.panels.splice("rtl"===this.direction?this.panels.length-t-1:t,1),i.parentNode.removeChild(i),this._columns-=1,this._isUpdatingFromRegistry=!0,y.commit(this,this._getState()),this._isUpdatingFromRegistry=!1,this._assignPanelIds(),this._update(),console.log("<pb-grid> After removal - panels:",[...this.panels]),console.log("<pb-grid> After removal - panel count:",this.querySelectorAll("._grid_panel").length)}_insertPanel(e){console.log("<pb-grid> _insertPanel called with active:",e),console.log("<pb-grid> Template content:",this.template.content),console.log("<pb-grid> Template firstElementChild:",this.template.content.firstElementChild);const t=document.importNode(this.template.content.firstElementChild,!0);console.log("<pb-grid> Cloned element:",t),t.setAttribute("active",e),"ltr"===this.direction||0===this.querySelectorAll("._grid_panel").length?this.appendChild(t):this.insertBefore(t,this.firstElementChild),t.classList.add("_grid_panel"),this._assignPanelIds(),console.log("<pb-grid> After _insertPanel - DOM panels:",this.querySelectorAll("._grid_panel").length)}_update(){const e=Array.from(this.children).filter(e=>!(e instanceof HTMLTemplateElement)).map(e=>{const t=window.getComputedStyle(e).getPropertyValue("max-width");return t&&"none"!==t?t:"1fr"});this.style.setProperty("--pb-computed-column-widths",e.join(" "))}_getPanelIndex(e){return Array.from(this.querySelectorAll("._grid_panel")).indexOf(e)}_assignPanelIds(){this.querySelectorAll("._grid_panel").forEach((e,t)=>{e.position=t})}_getState(){const e=this.panels.filter(e=>"number"==typeof e&&!isNaN(e)&&e>=0&&e<10);return{panels:e.join(".")}}render(){return t`<slot></slot>`}static get styles(){return n`
      :host {
        display: grid;
        grid-template-columns: var(--pb-grid-column-widths, var(--pb-computed-column-widths));
        grid-column-gap: var(--pb-grid-column-gap, 20px);
        justify-content: space-between;
        font-size: calc(var(--pb-content-font-size, 1rem) * var(--pb-zoom-factor, 1));
      }
    `}zoom(e){}}customElements.get("pb-grid")||customElements.define("pb-grid",ec);class tc extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{action:{type:String},grid:{type:String},initial:{type:Number}})}constructor(){super(),this.action="add",this.initial=0}connectedCallback(){super.connectedCallback()}render(){return t` <button @click="${this._click}" type="button"><slot></slot></button> `}static get styles(){return n`
      :host {
        display: block;
      }
    `}_click(){const e=document.querySelector(this.grid);if(!e||!e.addPanel)return console.error("<pb-grid-action> grid not found: %s",this.grid);if(console.log("<pb-grid-action> Clicked, action:",this.action),console.log("<pb-grid-action> Grid found:",e),console.log("<pb-grid-action> Closest element:",this.closest("pb-panel,pb-grid")),"add"===this.action)e.addPanel(this.initial);else{const t=this.closest("pb-panel,pb-grid");console.log("<pb-grid-action> Calling removePanel with:",t),e.removePanel(t)}}}function ic(e,t){return e.some(e=>t===e)}function nc(e,t,i){if(null==e)return!1;if(i){if(!t)return!1;const e=i.split(/[\s+,]+/);let n=!1;return e.forEach(async e=>{n=ic(t,e)||n}),n}return!0}customElements.define("pb-grid-action",tc);class sc extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{login:{type:String},show:{type:Boolean,reflect:!0},group:{type:String}})}constructor(){super(),this.show=!1}firstUpdated(){this.shadowRoot.querySelector("slot[name=fallback]").assignedNodes().length>0&&(console.log(this),this.classList.add("fallback")),this.subscribeTo("pb-login",e=>{this.show=this._loggedIn(e.detail.user,e.detail.groups)},[]),this.show=y.currentUser&&this._loggedIn(y.currentUser.user,y.currentUser.groups)}render(){return t`
      ${this.show&&!this.disabled?t`<slot></slot>`:t`<slot name="fallback"></slot>`}
    `}static get styles(){return n`
      :host {
        display: none;
      }

      :host(.fallback),
      :host([show]) {
        display: inherit;
      }
    `}_loggedIn(e,t){return nc(e,t,this.group)}}customElements.define("pb-restricted",sc);class rc extends(m(o(s))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{odds:{type:Array},target:{type:String},_valid:{type:Boolean},_current:{type:String}})}constructor(){super(),this.odds=[]}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-refresh-odds",e=>{this._refresh();const t=this.shadowRoot.getElementById("regenerate"),i=e.detail.odds.map(e=>`odd=${e}`).join("&");this.minApiVersion("1.0.0")?t.url=`api/odd?${i}`:t.url=`modules/lib/regenerate.xql?${i}`,t.trigger()})}firstUpdated(){super.firstUpdated(),this._loader=this.shadowRoot.getElementById("load"),a("pb-page-ready",e=>{l(e.apiVersion,"1.0.0")<0?this._loader.url=`${e.endpoint}/modules/lib/components-odd.xql`:this._loader.url=`${e.endpoint}/api/odd`,this._refresh()})}_refresh(e){this.emitTo("pb-start-update"),this._loader.params=e,this._loader.generateRequest()}_update(){this.emitTo("pb-end-update"),this.odds=this._loader.lastResponse,this.requestUpdate()}_selectODD(e){const t=e.model.itemsIndex;this.odds.forEach((e,i)=>{i!==t&&e.current&&(this.set(`odds.${i}.current`,!1),this.set(`odds.${t}.current`,!0))});const i={odd:`${e.model.item.name}.odd`};console.log("<pb-manage-odds> selected ODD: %o",i),this.emitTo("pb-load",{params:i})}_createODD(e){e.preventDefault();const t=this.shadowRoot.querySelector('input[name="new_odd"]').value,i=this.shadowRoot.querySelector('input[name="title"]').value;if(console.log("<pb-manage-odds> create ODD: %s, %s",t,i),this.lessThanApiVersion("1.0.0"))this._refresh({new_odd:t,title:i});else{const e=this.shadowRoot.getElementById("create");e.url=`${this.getEndpoint()}/api/odd/${t}`,e.params={title:i},this.emitTo("pb-start-update"),e.generateRequest()}}_created(e){this.emitTo("pb-end-update"),201===e.detail.status?this._refresh():console.log("<pb-manage-odds> unexpected response for create odd: %o",e.detail)}_createByExample(){const e={new_odd:this.shadowRoot.querySelector('input[name="new_odd"]').value,title:this.shadowRoot.querySelector('input[name="title"]').value},t=document.getElementById(this.target);t||t.getSelected||console.error("<pb-manage-odds> target %s not found",this.target);const i=t.getSelected();document.querySelectorAll(".document-select paper-checkbox[checked]").forEach(e=>{i.push(e.value)}),console.log("<pb-manage-odds> create ODD by example: %o",i),e.byExample=i,this._refresh(e)}_delete(e){this._current=e,this.shadowRoot.getElementById("deleteDialog").openDialog()}_confirmDelete(){if(this._current){if(console.log("<pb-manage-odds> deleting ODD: %s",this._current),this.lessThanApiVersion("1.0.0"))this._refresh({delete:this._current});else{this.emitTo("pb-start-update");const e=this.shadowRoot.getElementById("delete");e.url=`${this.getEndpoint()}/api/odd/${this._current}`,e.generateRequest()}this._current=null}else console.error("<pb-manage-odds> no file marked for deletion")}_deleted(){const e=this.shadowRoot.getElementById("delete").lastError;410===e.status?this._refresh():(console.error("<pb-manage-odds> failed to delete odd: %d %o",e.status,e.response),this.emitTo("pb-end-update"))}_validate(){const e=this.shadowRoot.getElementById("ironform").validate();this.shadowRoot.getElementById("createBtn").disabled=!e,this.shadowRoot.getElementById("createByEx").disabled=!e}render(){if(!this.odds)return null;const e=this.lessThanApiVersion("1.0.0")?"modules/lib/regenerate.xql":"api/odd";return t`
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
                          <h2 slot="title">${p("menu.admin.recompile")}</h2>
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
            placeholder="${p("odd.manage.filename")}"
          />
          <input
            id="title"
            name="title"
            type="text"
            required
            minlength="1"
            placeholder="${p("odd.manage.title")}"
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
            <span>${p("odd.manage.create")}</span>
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
      <pb-dialog id="deleteDialog" title="${p("browse.delete")}">
        <p>${p("odd.manage.delete",{file:this.file})}</p>
        <div slot="footer">
          <button autofocus @click="${this._confirmDelete}" rel="prev" type="button">
            ${p("dialogs.yes")}
          </button>
          <button rel="prev" type="button">${p("dialogs.no")}</button>
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
    `}}customElements.get("pb-manage-odds")||customElements.define("pb-manage-odds",rc);k("vaadin-button",x`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`,{moduleId:"lumo-button"});const oc=e=>class extends(A(e)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,t){super._disabledChanged(e,t),e?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):t&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&-1!==e&&(this._lastTabIndex=e,this.tabindex=-1)}},ac=e=>class extends(S(oc(C(e)))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}};class lc extends(ac(E(O($(T))))){static get is(){return"vaadin-button"}static get template(){return I`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
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
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new L(this),this.addController(this._tooltipController)}}customElements.define(lc.is,lc),k("vaadin-progress-bar",x`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const cc=document.createElement("template");cc.innerHTML="\n  <style>\n    @keyframes vaadin-progress-pulse3 {\n      0% { opacity: 1; }\n      10% { opacity: 0; }\n      40% { opacity: 0; }\n      50% { opacity: 1; }\n      50.1% { opacity: 1; }\n      60% { opacity: 0; }\n      90% { opacity: 0; }\n      100% { opacity: 1; }\n    }\n  </style>\n",document.head.appendChild(cc.content);const dc=e=>class extends e{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,t,i){const n=this._normalizeValue(e,t,i);this.style.setProperty("--vaadin-progress-value",n)}_valueChanged(e){this.setAttribute("aria-valuenow",e)}_minChanged(e){this.setAttribute("aria-valuemin",e)}_maxChanged(e){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,t,i){let n;return e||0===e?t>=i?n=1:(n=(e-t)/(i-t),n=Math.min(Math.max(n,0),1)):n=0,n}};class hc extends(E(O(dc(T)))){static get template(){return I`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          height: 8px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='bar'] {
          height: 100%;
        }

        [part='value'] {
          height: 100%;
          transform-origin: 0 50%;
          transform: scaleX(var(--vaadin-progress-value));
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='value'] {
          transform-origin: 100% 50%;
        }
      </style>

      <div part="bar">
        <div part="value"></div>
      </div>
    `}static get is(){return"vaadin-progress-bar"}}customElements.define(hc.is,hc);const pc=x`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;k("",pc,{moduleId:"lumo-field-button"}),k("vaadin-upload",x`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='primary-buttons'] > * {
      display: inline-block;
      white-space: nowrap;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }

    [part='drop-label-icon'] {
      display: inline-block;
    }

    [part='drop-label-icon']::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }

    [part='file-list'] > *:not(:first-child) > * {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload"});function uc(e,t,i,n,s){let r;s&&(r="object"==typeof i&&null!==i,r&&(n=e.__dataTemp[t]));let o=n!==i&&(n==n||i==i);return r&&o&&(e.__dataTemp[t]=i),o}k("vaadin-upload-file",[pc,x`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  [part='progress'] {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }

  [part='progress'][complete],
  [part='progress'][error] {
    display: none;
  }
`],{moduleId:"lumo-upload-file"});const gc=R(e=>{class t extends e{_shouldPropertyChange(e,t,i){return uc(this,e,t,i,!0)}}return t}),mc=R(e=>{class t extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return uc(this,e,t,i,this.mutableData)}}return t});gc._mutablePropertyChange=uc;let fc=null;function bc(){return fc}bc.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:bc,writable:!0}});const yc=P(bc),vc=gc(yc);function _c(e,t){fc=e,Object.setPrototypeOf(e,t.prototype),new t,fc=null}const wc=P(class{});function xc(e,t){for(let i=0;i<t.length;i++){let n=t[i];if(Boolean(e)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),N(N(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const e=n.__polymerReplaced__;e&&N(N(e).parentNode).replaceChild(n,e)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}class kc extends wc{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,i(e)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,i)}}_showHideChildren(e){xc(e,this.children)}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}kc.prototype.__dataHost,kc.prototype.__templatizeOptions,kc.prototype._methodHost,kc.prototype.__templatizeOwner,kc.prototype.__hostProps;const Ac=gc(kc);function Sc(e){let t=e.__dataHost;return t&&t._methodHost||t}function Cc(e,t,i){let n=i.mutableData?Ac:kc;Lc.mixin&&(n=Lc.mixin(n));let s=class extends n{};return s.prototype.__templatizeOptions=i,s.prototype._bindTemplate(e),$c(s,e,t,i),s}function Ec(e,t,i,n){let s=i.forwardHostProp;if(s&&t.hasHostProps){const r="template"==e.localName;let o=t.templatizeTemplateClass;if(!o){if(r){let e=i.mutableData?vc:yc;class n extends e{}o=t.templatizeTemplateClass=n}else{const i=e.constructor;class n extends i{}o=t.templatizeTemplateClass=n}let a=t.hostProps;for(let e in a)o.prototype._addPropertyEffect("_host_"+e,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Oc(e,s)}),o.prototype._createNotifyingProperty("_host_"+e);D&&n&&Rc(t,i,n)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),r)_c(e,o),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,o.prototype);const i=t.hostProps;for(let t in i)if(t="_host_"+t,t in e){const i=e[t];delete e[t],e.__data[t]=i}}}}function Oc(e,t){return function(e,i,n){t.call(e.__templatizeOwner,i.substring(6),n[i])}}function $c(e,t,i,n){let s=i.hostProps||{};for(let t in n.instanceProps){delete s[t];let i=n.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Tc(t,i)})}if(n.forwardHostProp&&t.__dataHost)for(let t in s)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Ic()})}function Tc(e,t){return function(e,i,n){t.call(e.__templatizeOwner,e,i,n[i])}}function Ic(){return function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}}function Lc(e,t,i){if(j&&!Sc(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let n=(t?t.constructor:kc)._parseTemplate(e),s=n.templatizeInstanceClass;s||(s=Cc(e,n,i),n.templatizeInstanceClass=s);const r=Sc(e);Ec(e,n,i,r);let o=class extends s{};return o.prototype._methodHost=r,o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=n.hostProps,o}function Rc(e,t,i){const n=i.constructor._properties,{propertyEffects:s}=e,{instanceProps:r}=t;for(let e in s)if(!(n[e]||r&&r[e])){const t=s[e];for(let i=0;i<t.length;i++){const{part:n}=t[i].info;if(!n.signature||!n.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function Pc(e,t){let i;for(;t;)if(i=t.__dataHost?t:t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=N(t).parentNode;return null}class Nc{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,jc.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),jc.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof Nc?e._cancelAsync():e=new Nc,e.setConfig(t,i),e}}let jc=new Set;const Dc=function(e){jc.add(e)},Fc=function(){const e=Boolean(jc.size);return jc.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e},Mc=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Fc()}while(e||t)};let Bc=!1;function zc(){if(F&&!M){if(!Bc){Bc=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}const qc=mc(T);class Uc extends qc{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!B,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),zc()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=N(N(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=Lc(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(e,t){let i=this.__instances;for(let n,s=0;s<i.length&&(n=i[s]);s++)n.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if(U(this.as,t)){let n=e[this.itemsIndexAs];t==this.as&&(this.items[n]=i);let s=H(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,t);this.notifyPath(s,i)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=Nc.debounce(this.__renderDebouncer,t>0?z.after(t):q,e.bind(this)),Dc(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Mc()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),i=this.__calculateLimit(t.length);this.__updateInstances(e,i,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),B&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;return this.__filterFn&&(t=t.filter((t,i,n)=>this.__filterFn(e[t],i,n))),this.__sortFn&&t.sort((t,i)=>this.__sortFn(e[t],e[i])),t}__calculateLimit(e){let t=e;const i=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),n=Math.max(t-i,0),this.__chunkCount=n||1):(n=Math.min(Math.max(e-i,0),this.__chunkCount),t=Math.min(i+n,e)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,i){const n=this.__itemsIdxToInstIdx={};let s;for(s=0;s<t;s++){let t=this.__instances[s],r=i[s],o=e[r];n[r]=s,t?(t._setPendingProperty(this.as,o),t._setPendingProperty(this.indexAs,s),t._setPendingProperty(this.itemsIndexAs,r),t._flushProperties()):this.__insertInstance(o,s,r)}for(let e=this.__instances.length-1;e>=s;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const i=N(t.root);for(let e=0;e<t.children.length;e++){let n=t.children[e];i.appendChild(n)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,i){let n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(e,t,i){const n=this.__stampInstance(e,t,i);let s=this.__instances[t+1],r=s?s.children[0]:this;return N(N(this).parentNode).insertBefore(n.root,r),this.__instances[t]=n,n}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),n=i.indexOf("."),s=n<0?i:i.substring(0,n);if(s==parseInt(s,10)){let e=n<0?"":i.substring(n+1);this.__handleObservedPaths(e);let r=this.__itemsIdxToInstIdx[s],o=this.__instances[r];if(o){let i=this.as+(e?"."+e:"");o._setPendingPropertyOrPath(i,t,!1,!0),o._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return Pc(this.template,e)}}customElements.define(Uc.is,Uc);const Hc=document.createElement("template");Hc.innerHTML="\n  <style>\n    @font-face {\n      font-family: 'vaadin-upload-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n",document.head.appendChild(Hc.content);class Vc extends(C(O(T))){static get template(){return I`
      <style>
        :host {
          display: block;
        }

        [hidden] {
          display: none;
        }

        [part='row'] {
          list-style-type: none;
        }

        button {
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
        }
      </style>

      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!file.complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!file.error]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[file.name]]</div>
            <div part="status" hidden$="[[!file.status]]" id="status">[[file.status]]</div>
            <div part="error" id="error" hidden$="[[!file.error]]">[[file.error]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!file.held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!file.error]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <vaadin-progress-bar
        part="progress"
        id="progress"
        value$="[[_formatProgressValue(file.progress)]]"
        error$="[[file.error]]"
        indeterminate$="[[file.indeterminate]]"
        uploading$="[[file.uploading]]"
        complete$="[[file.complete]]"
      ></vaadin-progress-bar>
    `}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object,i18n:Object,tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}ready(){super.ready(),this.shadowRoot.addEventListener("focusin",e=>{e.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",e=>{e.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(e){return e.composedPath()[0]===this}_fileAborted(e){e&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(e){return e/100}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(e,t){const i=Boolean(e);this.hasAttribute(t)!==i&&(i?this.setAttribute(t,""):this.removeAttribute(t))}}customElements.define(Vc.is,Vc);const Wc=document.createElement("div");let Yc;function Gc(e,t={}){const i=t.mode||"polite",n=void 0===t.timeout?150:t.timeout;"alert"===i?(Wc.removeAttribute("aria-live"),Wc.removeAttribute("role"),Yc=V.debounce(Yc,W,()=>{Wc.setAttribute("role","alert")})):(Yc&&Yc.cancel(),Wc.removeAttribute("role"),Wc.setAttribute("aria-live",i)),Wc.textContent="",setTimeout(()=>{Wc.textContent=e},n)}Wc.style.position="fixed",Wc.style.clip="rect(0px, 0px, 0px, 0px)",Wc.setAttribute("aria-live","polite"),document.body.appendChild(Wc);const Qc=e=>e.test(navigator.userAgent),Kc=e=>e.test(navigator.platform),Jc=e=>e.test(navigator.vendor);Qc(/Android/),Qc(/Chrome/)&&Jc(/Google Inc/),Qc(/Firefox/),Kc(/^iPad/)||Kc(/^Mac/)&&navigator.maxTouchPoints,Kc(/^iPhone/),Qc(/^((?!chrome|android).)*safari/i);const Zc=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();class Xc extends(E(O(T))){static get template(){return I`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }

        [part='file-list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>

      <div part="primary-buttons">
        <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
          <slot name="add-button">
            <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
              [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
            </vaadin-button>
          </slot>
        </div>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon">
            <div part="drop-label-icon"></div>
          </slot>
          <slot name="drop-label" id="dropLabel"> [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]]</slot>
        </div>
      </div>
      <slot name="file-list">
        <ul id="fileList" part="file-list">
          <template is="dom-repeat" items="[[files]]" as="file">
            <li>
              <vaadin-upload-file file="[[file]]" i18n="[[i18n]]"></vaadin-upload-file>
            </li>
          </template>
        </ul>
      </slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:Zc},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[]},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value:()=>({dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}})}}}get __acceptRegexp(){if(!this.accept)return null;const e=this.accept.split(",").map(e=>{let t=e.trim();return t=t.replace(/[+.]/g,"\\$&"),t.startsWith("\\.")&&(t=`.*${t}$`),t.replace(/\/\*/g,"/.*")});return new RegExp(`^(${e.join("|")})$`,"i")}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this))}_formatSize(e){if("function"==typeof this.i18n.formatSize)return this.i18n.formatSize(e);const t=this.i18n.units.sizeBase||1e3,i=~~(Math.log(e)/Math.log(t)),n=Math.max(0,Math.min(3,i-1));return`${parseFloat((e/t**i).toFixed(n))} ${this.i18n.units.size[i]}`}_splitTimeByUnits(e){const t=[60,60,24,1/0],i=[0];for(let n=0;n<t.length&&e>0;n++)i[n]=e%t[n],e=Math.floor(e/t[n]);return i}_formatTime(e,t){if("function"==typeof this.i18n.formatTime)return this.i18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map(e=>(e<10?"0":"")+e).join(":")}_formatFileProgress(e){const t=e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${e.totalStr}: ${e.progress}% (${t})`}_maxFilesAdded(e,t){return e>=0&&t>=e}_onDragover(e){e.preventDefault(),this.nodrop||this._dragover||(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if("string"==typeof this.headers)try{this.headers=JSON.parse(this.headers)}catch(e){this.headers=void 0}Object.entries(this.headers).forEach(([t,i])=>{e.setRequestHeader(t,i)}),this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,i,n){e.elapsed=n,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(n*(t/i-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/n/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(i),e.status=this._formatFileProgress(e)}uploadFiles(e){e&&!Array.isArray(e)&&(e=[e]),e=(e=e||this.files).filter(e=>!e.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const t=Date.now(),i=e.xhr=this._createXhr();let n,s;i.upload.onprogress=r=>{clearTimeout(n),s=Date.now();const o=(s-t)/1e3,a=r.loaded,l=r.total,c=~~(a/l*100);e.loaded=a,e.progress=c,e.indeterminate=a<=0||a>=l,e.error?e.indeterminate=e.status=void 0:e.abort||(c<100?(this._setStatus(e,l,a,o),n=setTimeout(()=>{e.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(e)},2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing)),this._notifyFileChanges(e),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:i}}))},i.onreadystatechange=()=>{if(4===i.readyState){if(clearTimeout(n),e.indeterminate=e.uploading=!1,e.abort)return void this._notifyFileChanges(e);e.status="";if(!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:i},cancelable:!0})))return;0===i.status?e.error=this.i18n.uploading.error.serverUnavailable:i.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:i.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent("upload-"+(e.error?"error":"success"),{detail:{file:e,xhr:i}})),this._notifyFileChanges(e)}};const r=new FormData;e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName;if(!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:i},cancelable:!0})))return;r.append(e.formDataName,e,e.name),i.open(this.method,e.uploadTarget,!0),this._configureXhr(i),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,i.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:i}})),this._notifyFileChanges(e)};this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:i,formData:r},cancelable:!0}))&&i.send(r)}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._notifyFileChanges(e))}_notifyFileChanges(e){const t=`files.${this.files.indexOf(e)}.`;Object.keys(e).forEach(i=>{this.notifyPath(t+i,e[i])})}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));if(this.maxFileSize>=0&&e.size>this.maxFileSize)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));const t=this.__acceptRegexp;!t||t.test(e.type)||t.test(e.name)?(e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.files=[e,...this.files],this.noAuto||this._uploadFile(e)):this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}))}_removeFile(e){this.files.indexOf(e)>-1&&(this.files=this.files.filter(t=>t!==e))}_onAddFilesTouchEnd(e){e.preventDefault(),this._onAddFilesClick(e)}_onAddFilesClick(e){this.maxFilesReached||(e.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileRemove(e){this._removeFile(e.detail.file)}_onFileReject(e){Gc(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_onUploadStart(e){Gc(`${e.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(e){Gc(`${e.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(e){Gc(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return 1===e?t.one:t.many}_isMultiple(e){return 1!==e}}customElements.define(Xc.is,Xc),console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-upload" is deprecated. Use "@vaadin/upload" instead.');class ed extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{target:{type:String},accept:{type:String},_files:{type:Object},event:{type:String}})}constructor(){super(),this._files=new Map,this.event="pb-load"}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.subscribeTo("pb-collection",e=>{this.target=e.detail.collection})}firstUpdated(){super.firstUpdated();const e=this.shadowRoot.getElementById("uploader");e.addEventListener("upload-before",t=>{this.emitTo("pb-start-update");const{file:i}=t.detail;this._files.set(i.name,i),this.requestUpdate(),this.minApiVersion("1.0.0")&&this.target&&(i.uploadTarget=`${e.target}${encodeURIComponent(this.target)}`)}),e.addEventListener("upload-request",e=>{this.target&&this.lessThanApiVersion("1.0.0")&&e.detail.formData.append("root",this.target)}),e.addEventListener("upload-error",e=>{this.emitTo("pb-end-update"),e.detail.file.error=e.detail.xhr.responseText,this.requestUpdate()}),e.addEventListener("upload-success",()=>{let t=!0;const i=[];e.files.forEach(e=>{e.complete||e.error||e.aborted?/^.*\.odd$/.test(e.name)&&i.push(e.name):t=!1,this.requestUpdate()}),t&&(this.emitTo("pb-end-update"),this.emitTo(this.event),i.length>0&&this.emitTo("pb-refresh-odds",{odds:i}))}),a("pb-page-ready",()=>{this.minApiVersion("1.0.0")?e.target=`${this.getEndpoint()}/api/upload/`:e.target=`${this.getEndpoint()}/modules/lib/upload.xql`})}render(){const i=e(this,"--pb-upload-button-icon","icons:file-upload"),n=e(this,"--pb-upload-drop-icon",null);return t`
      <vaadin-upload
        id="uploader"
        accept="${this.accept}"
        method="post"
        tabindex="-1"
        form-data-name="files[]"
        with-credentials
      >
        ${n?t`<pb-icon slot="drop-label-icon" icon="${n}" decorative></pb-icon>`:t`<span slot="drop-label-icon"></span>`}
        <span slot="drop-label">${p("upload.drop",{accept:this.accept})}</span>
        <button
          id="uploadBtn"
          slot="add-button"
          class="pb-button pb-button--contained"
          type="button"
        >
          ${i?t`<pb-icon icon="${i}" decorative></pb-icon>`:null}
          ${p("upload.upload")}
        </button>
        <div slot="file-list">
          <ul>
            ${this._files.size>0?t` <li class="close">
                  <button
                    class="pb-button pb-button--icon"
                    type="button"
                    aria-label="${p("dialogs.close")}"
                    title="${p("dialogs.close")}"
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
    `}}customElements.define("pb-upload",ed);class td extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{label:{type:String},odds:{type:Array},name:{type:String},odd:{type:String,notify:!0}})}constructor(){super(),this.label="document.selectODD",this.odds=[],td.__counter=(td.__counter||0)+1,this._selectId=`pb-select-odd-${td.__counter}`}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-update",this._onTargetUpdate.bind(this))}firstUpdated(){super.firstUpdated(),a("pb-page-ready",()=>{this._refresh()})}render(){return t`
      <label class="pb-select-odd__label" for="${this._selectId}"> ${p(this.label)} </label>
      <div class="pb-select-odd__control">
        <select
          id="${this._selectId}"
          class="pb-select-odd__select"
          name=${w(this.name||void 0)}
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
    `}updated(e){if(e.has("odds")&&(!this.odd||!this.odds.find(e=>e.name===this.odd))){const e=this.odds[0];e&&(this.odd=e.name)}}_handleChange(e){const t=e.target.value;if(t===this.odd)return;this.odd=t,console.log("<pb-select-odd> Switching to ODD %s",this.odd);const i=this.getDocument();i&&(i.odd=this.odd),y.commit(this,{odd:this.odd}),this.emitTo("pb-refresh",{odd:this.odd})}_refresh(){let e;e=this.minApiVersion("1.0.0")?`${this.getEndpoint()}/api/odd`:`${this.getEndpoint()}/modules/lib/components-list-odds.xql`;const t=this.toAbsoluteURL(e);let i;try{i=new URL(t)}catch(e){i=new URL(t,window.location.href)}this.odd&&i.searchParams.set("odd",this.odd),fetch(i.href,{method:"GET",credentials:"include",headers:{Accept:"application/json"}}).then(e=>{if(!e.ok)throw new Error(`Failed to load ODDs (${e.status})`);return e.json()}).then(e=>{this._updateOdds(Array.isArray(e)?e:[])}).catch(e=>{console.error("<pb-select-odd> request failed",e),this._updateOdds([])})}_updateOdds(e){this.odds=e,!e.length||this.odd&&e.find(e=>e.name===this.odd)||(this.odd=e[0].name)}_onTargetUpdate(e){let t=e.detail.data.odd;t&&(t=t.replace(/^(.*?)\.[^\.]+$/,"$1")),t!==this.odd&&console.log("<pb-select-odd> Set current ODD from %s to %s",this.odd,t),this.odd=t}}customElements.define("pb-select-odd",td);class id extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{label:{type:String},name:{type:String},template:{type:String},_templates:{type:Array}})}constructor(){super(),this.label="document.selectTemplate",this.name="",this._templates=[]}firstUpdated(){a("pb-page-ready",e=>{this.template=e.template;const t=this.shadowRoot.getElementById("getTemplates");this.minApiVersion("1.0.0")?t.url=`${e.endpoint}/api/templates`:t.url=`${e.endpoint}/modules/lib/components-list-templates.xql`,t.generateRequest()})}render(){return t`
      <label class="pb-select-template__label" for="template-select">
        ${p(this.label)}
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
    `}_selected(){const e=this.shadowRoot.getElementById("template-select");if(!e)return;const t=e.value;t!==this.template&&(y.replace(this,{template:t}),window.location.reload())}_handleTemplatesResponse(){const e=this.shadowRoot.getElementById("getTemplates");this._templates=e.lastResponse||[];const t=this.shadowRoot.getElementById("template-select");t&&this.template&&(t.value=this.template)}}customElements.define("pb-select-template",id);class nd extends yn{static get properties(){return Object.assign(Object.assign({},super.properties),{},{longitude:{type:Number},latitude:{type:Number},label:{type:String},event:{type:String},zoom:{type:Number},auto:{type:Boolean}})}constructor(){super(),this.event="mouseover",this.auto=!1,this.zoom=null}connectedCallback(){super.connectedCallback(),this.event&&this.addEventListener(this.event,()=>this.emitTo("pb-geolocation",{coordinates:{latitude:this.latitude,longitude:this.longitude},label:this.label,zoom:this.zoom,popup:this.popup,element:this,event:this.event})),this.auto&&this.waitForChannel(()=>{this.emitTo("pb-geolocation",{coordinates:{latitude:this.latitude,longitude:this.longitude},label:this.label,popup:this.popup,fitBounds:!0,element:this})})}render(){return t`<span id="content"><slot></slot></span>`}get popup(){const e=this.querySelector("template");if(e){const t=document.createElement("div");return t.appendChild(e.content.cloneNode(!0)),t}return null}static get styles(){return n`
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
    `}}customElements.define("pb-geolocation",nd);class sd extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{initial:{type:Number},_instances:{type:Array}})}constructor(){super(),this.initial=1,this._instances=[]}connectedCallback(){super.connectedCallback();this.querySelector("template")&&this._add()}_computeInitial(e){const t=Object.keys(e).filter(e=>/\[\d+\]$/.test(e)).sort();if(t.length>0){const e=t[t.length-1].replace(/^.*\[(\d+)\]$/,"$1");this.initial=parseInt(e,10)}}setData(e){this._instances=[],this._computeInitial(e);for(let t=0;t<this.initial;t++)this._add(e);this.requestUpdate()}add(){this._add(),this.requestUpdate()}_add(e){const t=this.querySelector("template");if(!t||!t.content)return;const i=this._instances.length+1,n=document.importNode(t.content,!0),s=document.createElement("div");s.appendChild(n),s.querySelectorAll("[name]").forEach(t=>{const n=void 0===t.name?`${t.attributes.getNamedItem("name").nodeValue}[${i}]`:`${t.name}[${i}]`;e&&e[n]&&("checkbox"===t.type||"radio"===t.type?t.checked=e[n]===t.value:t.value=e[n]),t.name=n}),this._instances.push(s)}_renumber(){this._instances.forEach((e,t)=>{e.querySelectorAll("[name]").forEach(e=>{const i=e.name.replace(/^(.*)\[\d+\]$/,"$1");e.name=`${i}[${t+1}]`})})}delete(e){this._instances.splice(e,1),this._renumber(),this.requestUpdate()}render(){return t`
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
    </svg>`}createRenderRoot(){return this}}customElements.define("pb-repeat",sd);class rd extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{url:{type:String}})}constructor(){super(),this._pan=null}connectedCallback(){super.connectedCallback(),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("svg-pan-zoom","https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"),this.subscribeTo("pb-show-annotation",e=>{this.url!==e.detail.file&&(this.url=e.detail.file)})}firstUpdated(){super.firstUpdated(),this.container=this.shadowRoot.getElementById("image")}updated(e){e.has("url")&&this.url&&this.url!==e.get("url")&&this.load()}load(){if(!this.url)return;const e=this.toAbsoluteURL(this.url);console.log("<pb-svg> Loading %s",e),this._pan&&(this._pan.destroy(),this._pan=null,this.container.innerHTML=""),fetch(e).then(e=>e.text()).then(e=>{if(!window.svgPanZoom)return void console.error("<pb-svg> svgPanZoom not available");const t=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement;this.container.appendChild(t),this._pan=window.svgPanZoom(t,{controlIconsEnabled:!0,fit:!0,center:!0})})}render(){return t`<div id="image"></div>`}static get styles(){return n`
      :host {
        display: block;
      }

      #image svg {
        height: var(--pb-svg-height, 100%);
        width: var(--pb-svg-width, 100%);
      }
    `}}customElements.define("pb-svg",rd);class od extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{endpoint:{type:String},label:{type:String},endpoints:{type:Array},auto:{type:Boolean}})}constructor(){super(),this.endpoints=[],this.label="dts.endpoint"}connectedCallback(){super.connectedCallback(),this.endpoint=y.state.endpoint,!this.endpoint&&this.auto&&this.endpoints.length>0&&(this.endpoint=this.endpoints[0].url)}updated(e){super.updated(e),e.has("endpoints")&&(Array.isArray(this.endpoints)||(this.endpoints=[]),!this.endpoint&&this.auto&&this.endpoints.length>0&&(this.endpoint=this.endpoints[0].url))}render(){return t`
      <label class="dts-select__label" for="dts-select"> ${p(this.label)} </label>
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
    `}_selected(e){const t=e.target.value;if(!t)return;const i=this.endpoints.find(e=>e.url===t),n=i?i.url:t;y.commit(this,{endpoint:n}),console.log("<dts-select-endpoint> Setting endpoint to %s",t),this.emitTo("dts-endpoint",{endpoint:n,collection:i?i.collection:void 0,reload:!this.endpoint}),this.endpoint=n}}customElements.define("dts-select-endpoint",od);class ad extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{baseUri:{type:String},data:{type:Object},collection:{type:String},page:{type:Number},perPage:{type:Number},_collectionEndpoint:{type:String}})}constructor(){super(),this._parentCollections=[],this.collection="default"}connectedCallback(){super.connectedCallback(),this.collection=y.state.id,this.page=y.state.page,this.subscribeTo("dts-endpoint",e=>{this._setEndpoint(e.detail.endpoint,e.detail.collection,e.detail.reload)}),this.subscribeTo("pb-load",e=>{this.page=e.detail.params.page,console.log("<dts-client> Loading page %d",this.page),this._update()})}firstUpdated(){super.firstUpdated(),this.queryAPI=this.shadowRoot.getElementById("queryAPI"),this.documentsAPI=this.shadowRoot.getElementById("documentsAPI"),this.signalReady()}_setEndpoint(e,t,i){i||(this.page=null),this.collection=t,this._configureEndpoint(e),this.baseUri=e}_configureEndpoint(e){e&&(console.log("<dts-client> initializing connection to endpoint %s",e),this.emitTo("pb-start-update"),this.queryAPI.url=e,this.queryAPI.generateRequest())}_navigate(e,t,i=!0){e.preventDefault(),i&&this._parentCollections.push(this.collection),this.collection=t&&"object"==typeof t?t["@id"]:t,this.page=null,console.log("<dts-client> navigating to collection %s",this.collection),this._update()}_navigateUp(e){0!==this._parentCollections.length&&this._navigate(e,this._parentCollections.pop(),!1)}_preview(e,t){e.preventDefault(),this.emitTo("pb-start-update");const i=t["dts:passage"]||t["dts:download"],n=new URL(i,this.baseUri).toString();console.log("<dts-client> downloading %s",n),this.lessThanApiVersion("1.0.0")?(this.documentsAPI.url=`${this.getEndpoint()}/modules/lib/dts.xql`,this.documentsAPI.params={preview:n,id:t["@id"]}):(this.documentsAPI.url=`${this.getEndpoint()}/api/dts/import`,this.documentsAPI.params={uri:n,temp:!0}),this.documentsAPI.generateRequest()}_download(e,t){this.emitTo("pb-start-update");const i=t["dts:passage"]||t["dts:download"],n=new URL(i,this.baseUri).toString();console.log("<dts-client> importing %s",n),this.lessThanApiVersion("1.0.0")?(this.documentsAPI.url=`${this.getEndpoint()}/modules/lib/dts.xql`,this.documentsAPI.params={import:n,id:t["@id"]}):(this.documentsAPI.url=`${this.getEndpoint()}/api/dts/import`,this.documentsAPI.params={uri:n,temp:!1}),this.documentsAPI.generateRequest()}_update(){this.emitTo("pb-start-update");const e={};this.collection&&(e.id=this.collection),this.page&&(e.page=this.page+1),y.commit(this,e),this.queryAPI.params=e,this.queryAPI.url=this._collectionEndpoint,this.queryAPI.generateRequest()}_handleResponse(){const e=this.queryAPI.lastResponse;"EntryPoint"===e["@type"]?(this._collectionEndpoint=new URL(e.collections,this.baseUri).toString(),console.log("<dts-client> configured collection endpoint: %s",this._collectionEndpoint),this._update()):(this.data=e,console.log("<dts-client> received collection data: %o",e),!this.page&&e.totalItems>e.member.length&&(this.perPage=e.member.length),this.emitTo("pb-results-received",{start:this.page&&this.page>0?this.page*this.perPage+1:1,count:e.totalItems})),this.emitTo("pb-end-update")}_handlePreview(){const e=this.documentsAPI.lastResponse;this.emitTo("pb-end-update");const t=new URL(e.path,window.location.href);window.location.replace(t)}_handleError(e){this.emitTo("pb-end-update");const t=e.target.lastError.response,i=(new DOMParser).parseFromString(t,"application/xml").querySelector("message"),n=document.getElementById("errorDialog"),s=n.querySelector("paper-dialog-scrollable");s.innerHTML=i?i.textContent:e.detail.error.message,n.open()}static _getCreator(e){const t=e["dts:dublincore"];return t?t["dc:creator"]:null}static _getLicense(e){const t=e["dts:dublincore"];return t?t["dc:license"]:null}render(){return t`
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
            ${p("browse.up")}
          </button>`:null}
      ${this.data?this._renderMembers():""}
    `}_renderMembers(){const e=[];return this.data.member.forEach(i=>{e.push(t`<div class="member">${this._renderMember(i)}</div>`)}),e}_renderMember(e){if("Collection"===e["@type"])return t`
        <pb-icon icon="icons:folder-open" decorative></pb-icon>
        <div class="details">
          <button @click="${t=>this._navigate(t,e)}" part="link" type="button">
            <h4 class="collection" part="collection-title">${e.title}</h4>
          </button>
        </div>
      `;const i=ad._getLicense(e);return t`
      <pb-icon icon="icons:code" decorative></pb-icon>
      <div class="details">
        <div>
          <button @click="${t=>this._preview(t,e)}" part="link" type="button">
            <h4 part="title">${e.title}</h4>
          </button>
          <p part="creator" class="creator">${ad._getCreator(e)}</p>
          ${i?t`<p part="license" class="license">
                <a href="${i}">${p("dts.licence")}</a>
              </p>`:""}
        </div>
        <pb-icon
          title="${p("dts.import")}"
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
    `}}customElements.define("dts-client",ad);class ld extends s{static get properties(){return Object.assign(Object.assign({},super.properties),{},{user:{type:String},hash:{type:String},height:{type:Number},theme:{type:String},preview:{type:Boolean},editable:{type:Boolean}})}constructor(){super(),this.height=256,this.theme="light"}render(){let e=`height=${this.height}&theme-id=${this.theme}&default-tab=html,result`;this.editable&&(e=`${e}&editable=true`);const i=`https://codepen.io/${this.user}/embed/${this.preview?"preview/":""}${this.hash}?${e}`;return t`
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
    `}}function cd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}customElements.define("pb-codepen",ld);var dd=cd();function hd(e){dd=e}var pd={exec:()=>null};function ud(e,t=""){let i="string"==typeof e?e:e.source,n={replace:(e,t)=>{let s="string"==typeof t?t:t.source;return s=s.replace(md.caret,"$1"),i=i.replace(e,s),n},getRegex:()=>new RegExp(i,t)};return n}var gd=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),md={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[\t ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},fd=/^(?:[ \t]*(?:\n|$))+/,bd=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,yd=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,vd=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,_d=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,wd=/(?:[*+-]|\d{1,9}[.)])/,xd=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,kd=ud(xd).replace(/bull/g,wd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ad=ud(xd).replace(/bull/g,wd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Sd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Cd=/^[^\n]+/,Ed=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Od=ud(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ed).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),$d=ud(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,wd).getRegex(),Td="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Id=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ld=ud("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))","i").replace("comment",Id).replace("tag",Td).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Rd=ud(Sd).replace("hr",vd).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Td).getRegex(),Pd={blockquote:ud(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Rd).getRegex(),code:bd,def:Od,fences:yd,heading:_d,hr:vd,html:Ld,lheading:kd,list:$d,newline:fd,paragraph:Rd,table:pd,text:Cd},Nd=ud("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",vd).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}\t)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Td).getRegex(),jd=Object.assign(Object.assign({},Pd),{},{lheading:Ad,table:Nd,paragraph:ud(Sd).replace("hr",vd).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Nd).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Td).getRegex()}),Dd=Object.assign(Object.assign({},Pd),{},{html:ud("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Id).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:pd,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ud(Sd).replace("hr",vd).replace("heading"," *#{1,6} *[^\n]").replace("lheading",kd).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()}),Fd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Md=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Bd=/^( {2,}|\\)\n(?!\s*$)/,zd=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,qd=/[\p{P}\p{S}]/u,Ud=/[\s\p{P}\p{S}]/u,Hd=/[^\s\p{P}\p{S}]/u,Vd=ud(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ud).getRegex(),Wd=/(?!~)[\p{P}\p{S}]/u,Yd=/(?!~)[\s\p{P}\p{S}]/u,Gd=/(?:[^\s\p{P}\p{S}]|~)/u,Qd=ud(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",gd?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Kd=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Jd=ud(Kd,"u").replace(/punct/g,qd).getRegex(),Zd=ud(Kd,"u").replace(/punct/g,Wd).getRegex(),Xd="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",eh=ud(Xd,"gu").replace(/notPunctSpace/g,Hd).replace(/punctSpace/g,Ud).replace(/punct/g,qd).getRegex(),th=ud(Xd,"gu").replace(/notPunctSpace/g,Gd).replace(/punctSpace/g,Yd).replace(/punct/g,Wd).getRegex(),ih=ud("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Hd).replace(/punctSpace/g,Ud).replace(/punct/g,qd).getRegex(),nh=ud(/\\(punct)/,"gu").replace(/punct/g,qd).getRegex(),sh=ud(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),rh=ud(Id).replace("(?:--\x3e|$)","--\x3e").getRegex(),oh=ud("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",rh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ah=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,lh=ud(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ah).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ch=ud(/^!?\[(label)\]\[(ref)\]/).replace("label",ah).replace("ref",Ed).getRegex(),dh=ud(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ed).getRegex(),hh=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ph={_backpedal:pd,anyPunctuation:nh,autolink:sh,blockSkip:Qd,br:Bd,code:Md,del:pd,emStrongLDelim:Jd,emStrongRDelimAst:eh,emStrongRDelimUnd:ih,escape:Fd,link:lh,nolink:dh,punctuation:Vd,reflink:ch,reflinkSearch:ud("reflink|nolink(?!\\()","g").replace("reflink",ch).replace("nolink",dh).getRegex(),tag:oh,text:zd,url:pd},uh=Object.assign(Object.assign({},ph),{},{link:ud(/^!?\[(label)\]\((.*?)\)/).replace("label",ah).getRegex(),reflink:ud(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ah).getRegex()}),gh=Object.assign(Object.assign({},ph),{},{emStrongRDelimAst:th,emStrongLDelim:Zd,url:ud(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",hh).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ud(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",hh).getRegex()}),mh=Object.assign(Object.assign({},gh),{},{br:ud(Bd).replace("{2,}","*").getRegex(),text:ud(gh.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),fh={normal:Pd,gfm:jd,pedantic:Dd},bh={normal:ph,gfm:gh,breaks:mh,pedantic:uh},yh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},vh=e=>yh[e];function _h(e,t){if(t){if(md.escapeTest.test(e))return e.replace(md.escapeReplace,vh)}else if(md.escapeTestNoEncode.test(e))return e.replace(md.escapeReplaceNoEncode,vh);return e}function wh(e){try{e=encodeURI(e).replace(md.percentDecode,"%")}catch{return null}return e}function xh(e,t){var i;let n=e.replace(md.findPipe,(e,t,i)=>{let n=!1,s=t;for(;--s>=0&&"\\"===i[s];)n=!n;return n?"|":" |"}),s=n.split(md.splitPipe),r=0;if(s[0].trim()||s.shift(),s.length>0&&!(null!==(i=s.at(-1))&&void 0!==i&&i.trim())&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(md.slashPipe,"|");return s}function kh(e,t,i){let n=e.length;if(0===n)return"";let s=0;for(;s<n;){if(e.charAt(n-s-1)!==t)break;s++}return e.slice(0,n-s)}function Ah(e,t){if(-1===e.indexOf(t[1]))return-1;let i=0;for(let n=0;n<e.length;n++)if("\\"===e[n])n++;else if(e[n]===t[0])i++;else if(e[n]===t[1]&&(i--,i<0))return n;return i>0?-2:-1}function Sh(e,t,i,n,s){let r=t.href,o=t.title||null,a=e[1].replace(s.other.outputLinkReplace,"$1");n.state.inLink=!0;let l={type:"!"===e[0].charAt(0)?"image":"link",raw:i,href:r,title:o,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,l}function Ch(e,t,i){let n=e.match(i.other.indentCodeCompensation);if(null===n)return t;let s=n[1];return t.split("\n").map(e=>{let t=e.match(i.other.beginningSpace);if(null===t)return e;let[n]=t;return n.length>=s.length?e.slice(s.length):e}).join("\n")}var Eh=class{options;rules;lexer;constructor(e){this.options=e||dd}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:kh(e,"\n")}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],i=Ch(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=kh(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:kh(t[0],"\n")}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=kh(t[0],"\n").split("\n"),i="",n="",s=[];for(;e.length>0;){let t,r=!1,o=[];for(t=0;t<e.length;t++)if(this.rules.other.blockquoteStart.test(e[t]))o.push(e[t]),r=!0;else{if(r)break;o.push(e[t])}e=e.slice(t);let a=o.join("\n"),l=a.replace(this.rules.other.blockquoteSetextReplace,"\n    $1").replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}\n${a}`:a,n=n?`${n}\n${l}`:l;let c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(l,s,!0),this.lexer.state.top=c,0===e.length)break;let d=s.at(-1);if("code"===(null==d?void 0:d.type))break;if("blockquote"===(null==d?void 0:d.type)){let t=d,r=t.raw+"\n"+e.join("\n"),o=this.blockquote(r);s[s.length-1]=o,i=i.substring(0,i.length-t.raw.length)+o.raw,n=n.substring(0,n.length-t.text.length)+o.text;break}if("list"===(null==d?void 0:d.type)){let t=d,r=t.raw+"\n"+e.join("\n"),o=this.list(r);s[s.length-1]=o,i=i.substring(0,i.length-d.raw.length)+o.raw,n=n.substring(0,n.length-t.raw.length)+o.raw,e=r.substring(s.at(-1).raw.length).split("\n");continue}}return{type:"blockquote",raw:i,tokens:s,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let s=t[1].trim(),r=s.length>1,o={type:"list",raw:"",ordered:r,start:r?+s.slice(0,-1):"",loose:!1,items:[]};s=r?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=r?s:"[*+-]");let a=this.rules.other.listItemRegex(s),l=!1;for(;e;){let i=!1,n="",s="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;n=t[0],e=e.substring(n.length);let r=t[2].split("\n",1)[0].replace(this.rules.other.listReplaceTabs,e=>" ".repeat(3*e.length)),c=e.split("\n",1)[0],d=!r.trim(),h=0;if(this.options.pedantic?(h=2,s=r.trimStart()):d?h=t[1].length+1:(h=t[2].search(this.rules.other.nonSpaceChar),h=h>4?1:h,s=r.slice(h),h+=t[1].length),d&&this.rules.other.blankLine.test(c)&&(n+=c+"\n",e=e.substring(c.length+1),i=!0),!i){let t=this.rules.other.nextBulletRegex(h),i=this.rules.other.hrRegex(h),o=this.rules.other.fencesBeginRegex(h),a=this.rules.other.headingBeginRegex(h),l=this.rules.other.htmlBeginRegex(h);for(;e;){let p,u=e.split("\n",1)[0];if(c=u,this.options.pedantic?(c=c.replace(this.rules.other.listReplaceNesting,"  "),p=c):p=c.replace(this.rules.other.tabCharGlobal,"    "),o.test(c)||a.test(c)||l.test(c)||t.test(c)||i.test(c))break;if(p.search(this.rules.other.nonSpaceChar)>=h||!c.trim())s+="\n"+p.slice(h);else{if(d||r.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||o.test(r)||a.test(r)||i.test(r))break;s+="\n"+c}!d&&!c.trim()&&(d=!0),n+=u+"\n",e=e.substring(u.length+1),r=p.slice(h)}}o.loose||(l?o.loose=!0:this.rules.other.doubleBlankLine.test(n)&&(l=!0)),o.items.push({type:"list_item",raw:n,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),o.raw+=n}let c=o.items.at(-1);if(!c)return;c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd(),o.raw=o.raw.trimEnd();for(let e of o.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){var i,n;if(e.text=e.text.replace(this.rules.other.listReplaceTask,""),"text"===(null===(i=e.tokens[0])||void 0===i?void 0:i.type)||"paragraph"===(null===(n=e.tokens[0])||void 0===n?void 0:n.type)){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,"");break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let i={type:"checkbox",raw:t[0]+" ",checked:"[ ]"!==t[0]};e.checked=i.checked,o.loose?e.tokens[0]&&["paragraph","text"].includes(e.tokens[0].type)&&"tokens"in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=i.raw+e.tokens[0].raw,e.tokens[0].text=i.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(i)):e.tokens.unshift({type:"paragraph",raw:i.raw,text:i.raw,tokens:[i]}):e.tokens.unshift(i)}}if(!o.loose){let t=e.tokens.filter(e=>"space"===e.type),i=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw));o.loose=i}}if(o.loose)for(let e of o.items){e.loose=!0;for(let t of e.tokens)"text"===t.type&&(t.type="paragraph")}return o}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:i,title:n}}}table(e){var t;let i=this.rules.block.table.exec(e);if(!i||!this.rules.other.tableDelimiter.test(i[2]))return;let n=xh(i[1]),s=i[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=null!==(t=i[3])&&void 0!==t&&t.trim()?i[3].replace(this.rules.other.tableRowBlankLine,"").split("\n"):[],o={type:"table",raw:i[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let e of s)this.rules.other.tableAlignRight.test(e)?o.align.push("right"):this.rules.other.tableAlignCenter.test(e)?o.align.push("center"):this.rules.other.tableAlignLeft.test(e)?o.align.push("left"):o.align.push(null);for(let e=0;e<n.length;e++)o.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:o.align[e]});for(let e of r)o.rows.push(xh(e,o.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:o.align[t]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=kh(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=Ah(t[2],"()");if(-2===e)return;if(e>-1){let i=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,i).trim(),t[3]=""}}let i=t[2],n="";if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],n=e[3])}else n=t[3]?t[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?i.slice(1):i.slice(1,-1)),Sh(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let e=t[(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){let e=i[0].charAt(0);return{type:"text",raw:e,text:e}}return Sh(i,e,i[0],this.lexer,this.rules)}}emStrong(e,t,i=""){let n=this.rules.inline.emStrongLDelim.exec(e);if(!(!n||n[3]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!n[1]&&!n[2]||!i||this.rules.inline.punctuation.exec(i))){let i,s,r=[...n[0]].length-1,o=r,a=0,l="*"===n[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+r);null!=(n=l.exec(t));){if(i=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!i)continue;if(s=[...i].length,n[3]||n[4]){o+=s;continue}if((n[5]||n[6])&&r%3&&!((r+s)%3)){a+=s;continue}if(o-=s,o>0)continue;s=Math.min(s,s+o+a);let t=[...n[0]][0].length,l=e.slice(0,r+n.index+t+s);if(Math.min(r,s)%2){let e=l.slice(1,-1);return{type:"em",raw:l,text:e,tokens:this.lexer.inlineTokens(e)}}let c=l.slice(2,-2);return{type:"strong",raw:l,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(e),n=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return i&&n&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,i;return"@"===t[2]?(e=t[1],i="mailto:"+e):(e=t[1],i=e),{type:"link",raw:t[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if("@"===t[2])e=t[0],n="mailto:"+e;else{let s;do{var i;s=t[0],t[0]=(null===(i=this.rules.inline._backpedal.exec(t[0]))||void 0===i?void 0:i[0])??""}while(s!==t[0]);e=t[0],n="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}},Oh=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||dd,this.options.tokenizer=this.options.tokenizer||new Eh,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:md,block:fh.normal,inline:bh.normal};this.options.pedantic?(t.block=fh.pedantic,t.inline=bh.pedantic):this.options.gfm&&(t.block=fh.gfm,this.options.breaks?t.inline=bh.breaks:t.inline=bh.gfm),this.tokenizer.rules=t}static get rules(){return{block:fh,inline:bh}}static lex(t,i){return new e(i).lex(t)}static lexInline(t,i){return new e(i).inlineTokens(t)}lex(e){e=e.replace(md.carriageReturn,"\n"),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],i=!1){for(this.options.pedantic&&(e=e.replace(md.tabCharGlobal,"    ").replace(md.spaceLine,""));e;){var n,s;let r;if(null!==(n=this.options.extensions)&&void 0!==n&&null!==(n=n.block)&&void 0!==n&&n.some(i=>!!(r=i.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let i=t.at(-1);1===r.raw.length&&void 0!==i?i.raw+="\n":t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let i=t.at(-1);"paragraph"===(null==i?void 0:i.type)||"text"===(null==i?void 0:i.type)?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+r.raw,i.text+="\n"+r.text,this.inlineQueue.at(-1).src=i.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let i=t.at(-1);"paragraph"===(null==i?void 0:i.type)||"text"===(null==i?void 0:i.type)?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+r.raw,i.text+="\n"+r.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let o=e;if(null!==(s=this.options.extensions)&&void 0!==s&&s.startBlock){let t,i=1/0,n=e.slice(1);this.options.extensions.startBlock.forEach(e=>{t=e.call({lexer:this},n),"number"==typeof t&&t>=0&&(i=Math.min(i,t))}),i<1/0&&i>=0&&(o=e.substring(0,i+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){let n=t.at(-1);i&&"paragraph"===(null==n?void 0:n.type)?(n.raw+=(n.raw.endsWith("\n")?"":"\n")+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r),i=o.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let i=t.at(-1);"text"===(null==i?void 0:i.type)?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+r.raw,i.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):t.push(r);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var i;let n,s=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(r=this.tokenizer.rules.inline.reflinkSearch.exec(s));)e.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(r=this.tokenizer.rules.inline.anyPunctuation.exec(s));)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(r=this.tokenizer.rules.inline.blockSkip.exec(s));)n=r[2]?r[2].length:0,s=s.slice(0,r.index+n)+"["+"a".repeat(r[0].length-n-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=(null===(i=this.options.hooks)||void 0===i||null===(i=i.emStrongMask)||void 0===i?void 0:i.call({lexer:this},s))??s;let o=!1,a="";for(;e;){var l,c;let i;if(o||(a=""),o=!1,null!==(l=this.options.extensions)&&void 0!==l&&null!==(l=l.inline)&&void 0!==l&&l.some(n=>!!(i=n.call({lexer:this},e,t))&&(e=e.substring(i.raw.length),t.push(i),!0)))continue;if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length);let n=t.at(-1);"text"===i.type&&"text"===(null==n?void 0:n.type)?(n.raw+=i.raw,n.text+=i.text):t.push(i);continue}if(i=this.tokenizer.emStrong(e,s,a)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.autolink(e)){e=e.substring(i.raw.length),t.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e))){e=e.substring(i.raw.length),t.push(i);continue}let n=e;if(null!==(c=this.options.extensions)&&void 0!==c&&c.startInline){let t,i=1/0,s=e.slice(1);this.options.extensions.startInline.forEach(e=>{t=e.call({lexer:this},s),"number"==typeof t&&t>=0&&(i=Math.min(i,t))}),i<1/0&&i>=0&&(n=e.substring(0,i+1))}if(i=this.tokenizer.inlineText(n)){e=e.substring(i.raw.length),"_"!==i.raw.slice(-1)&&(a=i.raw.slice(-1)),o=!0;let n=t.at(-1);"text"===(null==n?void 0:n.type)?(n.raw+=i.raw,n.text+=i.text):t.push(i);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return t}},$h=class{options;parser;constructor(e){this.options=e||dd}space(e){return""}code({text:e,lang:t,escaped:i}){var n;let s=null===(n=(t||"").match(md.notSpaceStart))||void 0===n?void 0:n[0],r=e.replace(md.endingNewline,"")+"\n";return s?'<pre><code class="language-'+_h(s)+'">'+(i?r:_h(r,!0))+"</code></pre>\n":"<pre><code>"+(i?r:_h(r,!0))+"</code></pre>\n"}blockquote({tokens:e}){return`<blockquote>\n${this.parser.parse(e)}</blockquote>\n`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>\n`}hr(e){return"<hr>\n"}list(e){let t=e.ordered,i=e.start,n="";for(let t=0;t<e.items.length;t++){let i=e.items[t];n+=this.listitem(i)}let s=t?"ol":"ul";return"<"+s+(t&&1!==i?' start="'+i+'"':"")+">\n"+n+"</"+s+">\n"}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>\n`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>\n`}table(e){let t="",i="";for(let t=0;t<e.header.length;t++)i+=this.tablecell(e.header[t]);t+=this.tablerow({text:i});let n="";for(let t=0;t<e.rows.length;t++){let s=e.rows[t];i="";for(let e=0;e<s.length;e++)i+=this.tablecell(s[e]);n+=this.tablerow({text:i})}return n&&(n=`<tbody>${n}</tbody>`),"<table>\n<thead>\n"+t+"</thead>\n"+n+"</table>\n"}tablerow({text:e}){return`<tr>\n${e}</tr>\n`}tablecell(e){let t=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+t+`</${i}>\n`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${_h(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:i}){let n=this.parser.parseInline(i),s=wh(e);if(null===s)return n;let r='<a href="'+(e=s)+'"';return t&&(r+=' title="'+_h(t)+'"'),r+=">"+n+"</a>",r}image({href:e,title:t,text:i,tokens:n}){n&&(i=this.parser.parseInline(n,this.parser.textRenderer));let s=wh(e);if(null===s)return _h(i);let r=`<img src="${e=s}" alt="${i}"`;return t&&(r+=` title="${_h(t)}"`),r+=">",r}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:_h(e.text)}},Th=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Ih=class e{options;renderer;textRenderer;constructor(e){this.options=e||dd,this.options.renderer=this.options.renderer||new $h,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Th}static parse(t,i){return new e(i).parse(t)}static parseInline(t,i){return new e(i).parseInline(t)}parse(e){let t="";for(let n=0;n<e.length;n++){var i;let s=e[n];if(null!==(i=this.options.extensions)&&void 0!==i&&null!==(i=i.renderers)&&void 0!==i&&i[s.type]){let e=s,i=this.options.extensions.renderers[e.type].call({parser:this},e);if(!1!==i||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(e.type)){t+=i||"";continue}}let r=s;switch(r.type){case"space":t+=this.renderer.space(r);break;case"hr":t+=this.renderer.hr(r);break;case"heading":t+=this.renderer.heading(r);break;case"code":t+=this.renderer.code(r);break;case"table":t+=this.renderer.table(r);break;case"blockquote":t+=this.renderer.blockquote(r);break;case"list":t+=this.renderer.list(r);break;case"checkbox":t+=this.renderer.checkbox(r);break;case"html":t+=this.renderer.html(r);break;case"def":t+=this.renderer.def(r);break;case"paragraph":t+=this.renderer.paragraph(r);break;case"text":t+=this.renderer.text(r);break;default:{let e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return t}parseInline(e,t=this.renderer){let i="";for(let s=0;s<e.length;s++){var n;let r=e[s];if(null!==(n=this.options.extensions)&&void 0!==n&&null!==(n=n.renderers)&&void 0!==n&&n[r.type]){let e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){i+=e||"";continue}}let o=r;switch(o.type){case"escape":case"text":i+=t.text(o);break;case"html":i+=t.html(o);break;case"link":i+=t.link(o);break;case"image":i+=t.image(o);break;case"checkbox":i+=t.checkbox(o);break;case"strong":i+=t.strong(o);break;case"em":i+=t.em(o);break;case"codespan":i+=t.codespan(o);break;case"br":i+=t.br(o);break;case"del":i+=t.del(o);break;default:{let e='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return i}},Lh=class{options;block;constructor(e){this.options=e||dd}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Oh.lex:Oh.lexInline}provideParser(){return this.block?Ih.parse:Ih.parseInline}},Rh=class{defaults=cd();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Ih;Renderer=$h;TextRenderer=Th;Lexer=Oh;Tokenizer=Eh;Hooks=Lh;constructor(...e){this.use(...e)}walkTokens(e,t){let i=[];for(let s of e)switch(i=i.concat(t.call(this,s)),s.type){case"table":{let e=s;for(let n of e.header)i=i.concat(this.walkTokens(n.tokens,t));for(let n of e.rows)for(let e of n)i=i.concat(this.walkTokens(e.tokens,t));break}case"list":{let e=s;i=i.concat(this.walkTokens(e.items,t));break}default:{var n;let e=s;null!==(n=this.defaults.extensions)&&void 0!==n&&null!==(n=n.childTokens)&&void 0!==n&&n[e.type]?this.defaults.extensions.childTokens[e.type].forEach(n=>{let s=e[n].flat(1/0);i=i.concat(this.walkTokens(s,t))}):e.tokens&&(i=i.concat(this.walkTokens(e.tokens,t)))}}return i}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let i=Object.assign({},e);if(i.async=this.defaults.async||i.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw new Error("extension name required");if("renderer"in e){let i=t.renderers[e.name];t.renderers[e.name]=i?function(...t){let n=e.renderer.apply(this,t);return!1===n&&(n=i.apply(this,t)),n}:e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");let i=t[e.level];i?i.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),i.extensions=t),e.renderer){let t=this.defaults.renderer||new $h(this.defaults);for(let i in e.renderer){if(!(i in t))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let n=i,s=e.renderer[n],r=t[n];t[n]=(...e)=>{let i=s.apply(t,e);return!1===i&&(i=r.apply(t,e)),i||""}}i.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Eh(this.defaults);for(let i in e.tokenizer){if(!(i in t))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let n=i,s=e.tokenizer[n],r=t[n];t[n]=(...e)=>{let i=s.apply(t,e);return!1===i&&(i=r.apply(t,e)),i}}i.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Lh;for(let i in e.hooks){if(!(i in t))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let n=i,s=e.hooks[n],r=t[n];Lh.passThroughHooks.has(i)?t[n]=e=>{if(this.defaults.async&&Lh.passThroughHooksRespectAsync.has(i))return(async()=>{let i=await s.call(t,e);return r.call(t,i)})();let n=s.call(t,e);return r.call(t,n)}:t[n]=(...e)=>{if(this.defaults.async)return(async()=>{let i=await s.apply(t,e);return!1===i&&(i=await r.apply(t,e)),i})();let i=s.apply(t,e);return!1===i&&(i=r.apply(t,e)),i}}i.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,n=e.walkTokens;i.walkTokens=function(e){let i=[];return i.push(n.call(this,e)),t&&(i=i.concat(t.call(this,e))),i}}this.defaults=Object.assign(Object.assign({},this.defaults),i)}),this}setOptions(e){return this.defaults=Object.assign(Object.assign({},this.defaults),e),this}lexer(e,t){return Oh.lex(e,t??this.defaults)}parser(e,t){return Ih.parse(e,t??this.defaults)}parseMarkdown(e){return(t,i)=>{let n=Object.assign({},i),s=Object.assign(Object.assign({},this.defaults),n),r=this.onError(!!s.silent,!!s.async);if(!0===this.defaults.async&&!1===n.async)return r(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||null===t)return r(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=e),s.async)return(async()=>{let i=s.hooks?await s.hooks.preprocess(t):t,n=await(s.hooks?await s.hooks.provideLexer():e?Oh.lex:Oh.lexInline)(i,s),r=s.hooks?await s.hooks.processAllTokens(n):n;s.walkTokens&&await Promise.all(this.walkTokens(r,s.walkTokens));let o=await(s.hooks?await s.hooks.provideParser():e?Ih.parse:Ih.parseInline)(r,s);return s.hooks?await s.hooks.postprocess(o):o})().catch(r);try{s.hooks&&(t=s.hooks.preprocess(t));let i=(s.hooks?s.hooks.provideLexer():e?Oh.lex:Oh.lexInline)(t,s);s.hooks&&(i=s.hooks.processAllTokens(i)),s.walkTokens&&this.walkTokens(i,s.walkTokens);let n=(s.hooks?s.hooks.provideParser():e?Ih.parse:Ih.parseInline)(i,s);return s.hooks&&(n=s.hooks.postprocess(n)),n}catch(e){return r(e)}}}onError(e,t){return i=>{if(i.message+="\nPlease report this to https://github.com/markedjs/marked.",e){let e="<p>An error occurred:</p><pre>"+_h(i.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(i);throw i}}},Ph=new Rh;function Nh(e,t){return Ph.parse(e,t)}Nh.options=Nh.setOptions=function(e){return Ph.setOptions(e),Nh.defaults=Ph.defaults,hd(Nh.defaults),Nh},Nh.getDefaults=cd,Nh.defaults=dd,Nh.use=function(...e){return Ph.use(...e),Nh.defaults=Ph.defaults,hd(Nh.defaults),Nh},Nh.walkTokens=function(e,t){return Ph.walkTokens(e,t)},Nh.parseInline=Ph.parseInline,Nh.Parser=Ih,Nh.parser=Ih.parse,Nh.Renderer=$h,Nh.TextRenderer=Th,Nh.Lexer=Oh,Nh.lexer=Oh.lex,Nh.Tokenizer=Eh,Nh.Hooks=Lh,Nh.parse=Nh,Nh.options,Nh.setOptions,Nh.use,Nh.walkTokens,Nh.parseInline,Ih.parse,Oh.lex;const jh={code:(e,t,i)=>`<pb-code-highlight language="${e.lang||t||"undefined"}" line-numbers>\n      <template>${e.text||e}</template>\n  </pb-code-highlight>`};function Dh(e){const t=e.match(/^[^\S]*(?=\S)/gm);return t&&t[0].length?(t.sort((e,t)=>e.length-t.length),t[0].length?e.replace(RegExp(`^${t[0]}`,"gm"),""):e):e}Nh.use({renderer:jh});class Fh extends(o(s)){static get properties(){return Object.assign({content:{type:String},url:{type:String}},super.properties)}constructor(){super(),this._url=null}set url(e){this._url=e,a("pb-page-ready",e=>{this._load(e.endpoint)})}connectedCallback(){if(super.connectedCallback(),this.style.display="block",!this.content){const e=document.createElement("div");for(let t=0;t<this.childNodes.length;t++){const i=this.childNodes[t];e.appendChild(document.importNode(i.content||i,!0))}this.content=Dh(e.innerHTML)}this.subscribeTo("pb-zoom",e=>{this.zoom(e.detail.direction)})}_load(e){const t=this.toAbsoluteURL(this._url,e);fetch(t,{credentials:"same-origin"}).then(e=>e.text()).catch(()=>(console.error("<pb-markdown> failed to load content from %s",t.toString()),Promise.resolve(this.content))).then(e=>{this.content=e})}createRenderRoot(){return this}render(){return this.content?t`<div>${v(Nh.parse(this.content))}</div>`:null}static get styles(){return n`
      :host {
        display: block;
        font-size: calc(var(--pb-content-font-size, 1rem) * var(--pb-zoom-factor, 1));
      }
    `}zoom(e){}}customElements.define("pb-markdown",Fh);const Mh=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const t=e.target;t.emitTo("pb-visible",{data:t.data})}})});class Bh extends(o(s)){static get properties(){return Object.assign({data:{type:String}},super.properties)}disconnectedCallback(){super.disconnectedCallback(),Mh&&Mh.unobserve(this)}firstUpdated(){Mh.observe(this)}render(){return t`<slot></slot>`}static get styles(){return n`
      :host {
        display: inline;
      }
    `}}customElements.define("pb-observable",Bh);let zh=0;class qh extends(o(s)){static get properties(){return Object.assign({label:{type:String},value:{type:String,reflect:!0},values:{type:Array,reflect:!0},name:{type:String},source:{type:String},multi:{type:Boolean},_items:{type:Array},_selected:{type:Array}},super.properties)}constructor(){super(),this.value=null,this.values=[],this._items=[],this._selected=[],this._controlId="pb-select-"+ ++zh}connectedCallback(){if(super.connectedCallback(),this.subscribeTo("pb-i18n-update",this._refresh.bind(this)),this.multi){if("string"==typeof this.values)try{this.values=JSON.parse(this.values)}catch(e){this.values=this.values.split(",").map(e=>e.trim())}Array.isArray(this.values)||(this.values=[]),0===this.values.length&&this.value&&(this.values=[this.value]),this.value=void 0,this._selected=[...this.values]}}firstUpdated(){super.firstUpdated();const e=this.shadowRoot.querySelector('[name="subform"]');e&&e.assignedNodes().forEach(e=>{this.name&&e.addEventListener("change",this._loadRemote.bind(this));e.querySelectorAll("[name]").forEach(e=>{e.addEventListener("change",this._loadRemote.bind(this))})}),a("pb-page-ready",()=>{this._loadRemote()}),this._syncHiddenInputs()}updated(e){(e.has("value")||e.has("values"))&&(this.multi&&!Array.isArray(this.values)&&(this.values="string"==typeof this.values?[this.values]:[]),this._syncHiddenInputs())}_refresh(){this.requestUpdate()}_clear(e){const t=this.shadowRoot.querySelector(e);t&&t.assignedNodes().forEach(e=>{e.parentNode.removeChild(e)})}_loadRemote(){if(!this.source)return;let e=this.toAbsoluteURL(this.source);e+=e.includes("?")?"&":"?",e+=this._getParameters(),console.log("<pb-select> loading items from %s",e),fetch(e,{method:"GET",mode:"cors",credentials:"same-origin"}).then(e=>e.json()).then(e=>{this._clear("slot:not([name])");const t=e.map(qh.jsonEntry2item);console.log("<pb-select> loaded %d items",t.length),this._items=t}).catch(()=>console.error("<pb-select> request to %s failed",e))}static jsonEntry2item(e){return{label:e.text,value:e.value}}_getParameters(){const e=this.shadowRoot.querySelector('[name="subform"]'),t=[];return e&&e.assignedNodes().forEach(e=>{e.querySelectorAll("[name]").forEach(e=>{t.push(`${e.name}=${encodeURIComponent(e.value)}`)})}),t.join("&")}render(){return t`
      <slot name="subform"></slot>
      <slot hidden></slot>
      ${this.multi?t`
            <label part="label" class="pb-select__label" for="${this._controlId}-multi">
              ${p(this.label)}
            </label>
            <div class="pb-select__options" id="${this._controlId}-multi">
              ${this._renderOptionsList()}
            </div>
          `:t`
            <label part="label" class="pb-select__label" for="${this._controlId}-single">
              ${p(this.label)}
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
    `}}customElements.define("pb-select",qh);class Uh extends(m(o(s))){static get properties(){return Object.assign({label:{type:String}},super.properties)}constructor(){super(),this.label="clipboard.label"}render(){return t`
      <h3>${p(this.label)}</h3>
      <div>
        <slot></slot>
        <button
          class="pb-button pb-button--icon copy-button"
          type="button"
          @click="${this._copy}"
          aria-label="${p("clipboard.copy")}"
          title="${p("clipboard.copy")}"
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
    `}}customElements.define("pb-clipboard",Uh);class Hh{constructor(e){this._prefix=e.getAttribute("prefix"),this._config={name:e.getAttribute("name"),properties:{}},this._register=this._config.name}get register(){return this._register}get name(){return this._register}set name(e){this._register=e}get editable(){return!1}query(e){throw new Error("Method query not implemented")}info(e,t){return t.innerHTML="not implemented",Promise.resolve()}async select(e){return Promise.resolve(e)}async getRecord(e){return Promise.reject()}}class Vh extends Hh{async query(e){const t=e.replace(/[^\w\s]+/g,""),i=[],n=`https://api.metagrid.ch/search?query=${encodeURIComponent(t)}`;return new Promise(e=>{fetch(n).then(e=>e.json()).then(t=>{t.resources.forEach(e=>{const t=`${e.metadata.last_name}, ${e.metadata.first_name} `,n={register:this._register,id:`${e.provider.slug}-${e.identifier}`,label:t,details:`${e.metadata.birth_date} - ${e.metadata.death_date}`,link:e.link.uri,provider:e.provider.slug};i.push(n)}),e({totalItems:t.meta.total,items:i})})})}info(e,t){const i=e.indexOf("-"),n=e.substring(0,i);return new Promise(i=>{this.getRecord(e).then(e=>{const s=`\n          <h3 class="label">\n            <a href="https://${e.link.uri}" target="_blank">\n              ${e.metadata.last_name}, ${e.metadata.first_name}\n            </a>\n          </h3>\n          <p>${e.metadata.birth_date} - ${e.metadata.death_date}</p>\n        `;t.innerHTML=s,i({id:`${n}-${e.identifier}`,strings:[`${e.metadata.first_name} ${e.metadata.last_name}`]})})})}async getRecord(e){const t=e.indexOf("-"),i=e.substring(0,t),n=e.substring(t+1);return fetch(`https://api.metagrid.ch/search?slug=${i}&query=${n}`).then(e=>e.json()).then(e=>{const t=e.resources[0],i=Object.assign({},t);return i.name=`${t.metadata.first_name} ${t.metadata.last_name}`,i.links=[`https://${t.link.uri}`],t.metadata.birth_date&&t.metadata.birth_date.length>0&&(i.birth=t.metadata.birth_date),t.metadata.death_date&&t.metadata.death_date.length>0&&(i.death=t.metadata.death_date),i}).catch(e=>Promise.reject(e))}}class Wh extends Hh{constructor(e){super(e),this.user=e.getAttribute("user")}async query(e){const t=[];return new Promise(i=>{fetch(`https://secure.geonames.org/searchJSON?formatted=true&q=${encodeURIComponent(e)}&maxRows=100&&username=${this.user}&style=full`).then(e=>e.json()).then(e=>{e.geonames.forEach(e=>{const i={register:this._register,id:this._prefix?`${this._prefix}-${e.geonameId}`:e.geonameId,label:e.toponymName,details:`${e.fcodeName} - ${e.adminName1}, ${e.countryName}`,link:`https://www.geonames.org/${e.geonameId}`,strings:[e.toponymName],provider:"geonames.org"};t.push(i)}),i({totalItems:e.totalResultsCount,items:t})})})}info(e,t){return e?new Promise((i,n)=>{this.getRecord(e).then(e=>{if(e.status)return void n(e.status.message);const s=`\n            <h3 class="label">\n              <a href="${e.link}" target="_blank">${e.name}</a>\n            </h3>\n            <p class="fcode">${e.note} - ${e.region}, ${e.country}</p>\n          `;t.innerHTML=s,i({id:this._prefix?`${this._prefix}-${e.geonameId}`:e.geonameId,strings:[e.name]})}).catch(()=>n())}):Promise.resolve({})}async getRecord(e){const t=this._prefix?e.substring(this._prefix.length+1):e;return fetch(`https://secure.geonames.org/getJSON?geonameId=${encodeURIComponent(t)}&username=${this.user}`).then(e=>e.ok?e.json():Promise.reject(e.status)).then(e=>{const t=Object.assign({},e);return t.name=e.toponymName,t.country=e.countryName,t.region=e.adminName1,t.note=e.fcodeName,t.links=[`https://www.geonames.org/${e.geonameId}`,`https://${e.wikipediaURL}`],t}).catch(()=>Promise.reject())}}function Yh(e="",t){return e.replace(/\${([^}]+)}/g,(e,i)=>{let n;return t[i]&&(n=t[i]),n||""})}function Gh(e,t){const i=e.querySelector(t);if(i instanceof HTMLTemplateElement){const e=document.createElement("div");return e.appendChild(i.content.cloneNode(!0)),e.innerHTML}return""}class Qh extends Hh{constructor(e){super(e),this.apiKey=e.getAttribute("api-key"),this.baseKey=e.getAttribute("base"),this.table=e.getAttribute("table"),this.view=e.getAttribute("view"),this.filterExpr=e.getAttribute("filter"),this.labelExpr=e.getAttribute("label");const t=e.getAttribute("fields");this.fields=t?t.split(/\s*,\s*/):["ID"];const i=e.getAttribute("tokenize");this.tokenize=i?i.split(/\s*,\s*/):[this.fields[0]],this.tokenizeChars=e.getAttribute("tokenize-regex")||"\\W",this.infoExpr=Gh(e,".info"),this.detailExpr=Gh(e,".detail"),this._init()}_init(){window.ESGlobalBridge.requestAvailability();const e=r("../lib/airtable.browser.js");window.ESGlobalBridge.instance.load("airtable",e),window.addEventListener("es-bridge-airtable-loaded",this._initAirtable.bind(this),{once:!0})}_initAirtable(){const e=require("airtable");this.base=new e({apiKey:this.apiKey}).base(this.baseKey)}async query(e){e=e.toLowerCase();const t=[],i=this.filterExpr?Yh(this.filterExpr,{key:e}):null,n={fields:this.fields,maxRecords:100};return this.view&&(n.view=this.view),i&&(n.filterByFormula=i),new Promise((e,i)=>{this.base(this.table).select(n).firstPage((n,s)=>{if(n)return console.error(n),void i(n);s.forEach(e=>{const i={};this.fields.forEach(t=>{i[t]=e.get(t)});const n={register:this._register,id:e.id,label:Yh(this.labelExpr,i),details:Yh(this.detailExpr,i),provider:"airtable"};t.push(n)}),e({totalItems:3,items:t})})})}info(e,t){return new Promise((i,n)=>{this.base(this.table).find(e,(s,r)=>{if(s){if(404===s.statusCode)n(`No record found for ${e} in table ${this.table}`);else n(`${s.statusCode}: ${s.message}`);return}if(0===Object.keys(r.fields).length)return void n(`No record found for ${e} in table ${this.table}`);let o=[];const a={};this.fields.forEach(e=>{const t=r.get(e);t&&(a[e]=t,o.push(t))});const l=new RegExp(this.tokenizeChars);this.tokenize.forEach(e=>{a[e]&&(o=o.concat(a[e].split(l)))}),o=o.filter(e=>!/^\d+$/.test(e)),o.sort((e,t)=>t.length-e.length),t.innerHTML=Yh(this.infoExpr,a),i({id:r.id,strings:o})})})}}function Kh(e){let t="";e.professionOrOccupation&&e.professionOrOccupation.length>0&&(t=e.professionOrOccupation.map(e=>e.label).join(", ")),e.biographicalOrHistoricalInformation&&(t=`${t}; ${e.biographicalOrHistoricalInformation.join(", ")}`);const i=[];return e.dateOfBirth&&e.dateOfBirth.length>0&&i.push(e.dateOfBirth[0]),e.dateOfDeath&&e.dateOfDeath.length>0&&(i.push(" - "),i.push(e.dateOfDeath[0])),i.length>0?`${i.join("")}${t?`; ${t}`:""}`:t}class Jh extends Hh{query(e){const t=[];let i;switch(this._register){case"place":i="PlaceOrGeographicName";break;case"term":i="SubjectHeading";break;case"organization":i="CorporateBody";break;case"work":i="Work";break;default:i="Person"}return new Promise(n=>{fetch(`https://lobid.org/gnd/search?q=${encodeURIComponent(e)}&filter=%2B%28type%3A${i}%29&format=json&size=100`).then(e=>e.json()).then(e=>{e.member.forEach(e=>{const i={register:this._register,id:this._prefix?`${this._prefix}-${e.gndIdentifier}`:e.gndIdentifier,label:e.preferredName,link:e.id,details:Kh(e),strings:[e.preferredName].concat(e.variantName),provider:"GND"};t.push(i)}),n({totalItems:e.totalItems,items:t})})})}async getRecord(e){const t=this._prefix?e.substring(this._prefix.length+1):e;return fetch(`https://lobid.org/gnd/${t}.json`).then(e=>e.ok?e.json():Promise.reject()).then(e=>{const t=Object.assign({},e);return t.name=e.preferredName,t.link=e.id,e.dateOfBirth&&e.dateOfBirth.length>0&&(t.birth=e.dateOfBirth[0]),e.dateOfDeath&&e.dateOfDeath.length>0&&(t.death=e.dateOfDeath[0]),e.biographicalOrHistoricalInformation&&(t.note=e.biographicalOrHistoricalInformation.join("; ")),e.professionOrOccupation&&e.professionOrOccupation.length>0&&(t.profession=e.professionOrOccupation.map(e=>e.label)),t}).catch(()=>Promise.reject())}info(e,t){return e?new Promise((i,n)=>{this.getRecord(e).then(e=>{let n;e.type.indexOf("SubjectHeading")>-1?n=this.infoSubject(e):e.type.indexOf("AuthorityResource")>-1&&(n=this.infoPerson(e));const s=`\n          <h3 class="label">\n            <a href="https://${e.id}" target="_blank"> ${e.preferredName} </a>\n          </h3>\n          ${n}\n        `;t.innerHTML=s,i({id:this._prefix?`${this._prefix}-${e.gndIdentifier}`:e.gndIdentifier,strings:[e.preferredName].concat(e.variantName)})}).catch(()=>n())}):Promise.resolve()}infoPerson(e){const t=e.professionOrOccuption?e.professionOrOccupation.map(e=>e.label):[];return`<p>${e.dateOfBirth} - ${e.dateOfDeath}</p>\n      <p>${t.join(" ")}</p>`}infoSubject(e){if(e.broaderTermGeneral){return`<p>${e.broaderTermGeneral.map(e=>e.label).join(", ")}</p>`}return""}}class Zh extends Hh{constructor(e){super(e),this._api=e.getAttribute("api"),this._limit=e.getAttribute("limit")||999999}async query(e){const t=[],i=this.getRegister(),n=`https://meta.karl-barth.ch/api/${i}?${"bibls"===i?"biblsearch":"search"}=${encodeURIComponent(e)}&perPage=${this._limit}`,s=this.getLabelField();return new Promise(e=>{fetch(n).then(e=>e.json()).then(n=>{n.data.forEach(e=>{if("organization"===this._register&&"organisation"!==e.authority_type||"person"===this._register&&"person"!==e.authority_type)return;const n={register:this._register,id:this._prefix?`${this._prefix}:${e["full-id"]}`:e["full-id"],label:"string"==typeof s?e[s]:s(e),details:`${e["full-id"]}`,link:`https://meta.karl-barth.ch/${i}/${e.id}`,strings:["string"==typeof s?e[s]:s(e)],provider:"KBGA"};t.push(n)}),e({totalItems:n.meta.total,items:t})})})}info(e,t){if(!e)return Promise.resolve({});const i=this.getLabelField();return new Promise(n=>{this.getRecord(e).then(e=>{const s=e.data.death?`† ${e.data.death}`:"",r=e.data.birth?`<p>* ${e.data.birth} ${s}</p>`:"",o=e.data.note_bio?`<p>${e.data.note_bio}</p>`:"",a=`\n            <h3 class="label"><a href="https://${e.wikipediaURL}" target="_blank">${"string"==typeof i?e.data[i]:i(e.data)}</a></h3>\n              ${r}\n              ${o}\n          `;t.innerHTML=a,n({id:e.data["full-id"],strings:["string"==typeof i?e.data[i]:i(e.data)]})})})}async getRecord(e){const t=e.replace(/^.*-([^-]+)$/,"$1");return fetch(`https://meta.karl-barth.ch/api/${this.getRegister()}/${t}`).then(e=>e.json()).then(e=>{const t=Object.assign({},e);switch(t.name=e.data[this.getLabelField()],this._register){case"place":t.country=e.data.country,t.location=e.data.location.coordinates,t.links=e.data.links.map(e=>e.url);break;case"person":t.birth=e.data.birth,t.death=e.data.death,t.note=e.data.note_bio,t.links=[`https://${e.wikipediaURL}`]}return t}).catch(e=>Promise.reject(e))}getLabelField(){let e;switch(this._register){case"place":e="placeName_full";break;case"term":e="fullLabel";break;case"abbreviation":e="label";break;case"bibl":case"songs":e="asHtml";break;default:e="persName_full"}return e}getRegister(){if(this._api)return this._api;let e;switch(this._register){case"person":case"organization":e="actors";break;case"place":e="places";break;case"term":e="terms";break;case"abbreviation":e="abbreviations";break;case"bibl":e="bibls";break;default:e=this._register}return e}}class Xh extends Hh{constructor(e){super(e),this._url=e.getAttribute("url")||"https://archives.georgfischer.com/api",this._api=e.getAttribute("api"),this._limit=e.getAttribute("limit")||999999,this._provider=e.getAttribute("provider")||e.getAttribute("connector")}async query(e){const t=[],i=this.getRegister(),n=`${this._url}/${i}?search=${encodeURIComponent(e)}&perPage=${this._limit}`,s=this.getLabelField();return new Promise(e=>{fetch(n).then(e=>e.json()).then(n=>{n.data?(n.data.forEach(e=>{if("organization"===this._register&&"Person"===e.authority_type||"person"===this._register&&"Person"!==e.authority_type)return;const n={register:this._register,id:this._prefix?`${this._prefix}-${e.id}`:e.id,label:e[s],details:`${e.id}`,link:`${this._url}/${i}/${e.id}`,strings:[e[s]],provider:this._provider};t.push(n)}),e({totalItems:n.meta.total,items:t})):e({totalItems:0,items:[]})}).catch(e=>Promise.reject(e))})}info(e,t){if(!e)return Promise.resolve({});const i=this._prefix?e.substring(this._prefix.length+1):e,n=this.getLabelField();return new Promise(e=>{this.getRecord(i).then(i=>{const s=i.data.death?`† ${i.data.death}`:"",r=i.data.birth?`<p>* ${i.data.birth} ${s}</p>`:"",o=i.data.note_bio?`<p>${i.data.note_bio}</p>`:"",a=`\n            <h3 class="label"><a href="https://${i.wikipediaURL}" target="_blank">${i.data[n]}</a></h3>\n              ${r}\n              ${o}\n          `;t.innerHTML=a,e({id:this._prefix?`${this._prefix}-${i.data.id}`:i.data.id,strings:[i.data[n]]})})})}async getRecord(e){const t=e.replace(/^.*-([^-]+)$/,"$1"),i=`${this._url}/${this.getRegister()}/${t}`;return fetch(i).then(e=>e.json()).then(e=>{const t=Object.assign({},e);switch(t.name=e.data[this.getLabelField()],this._register){case"place":t.country=e.data.country,e.data.location&&e.data.location.coordinates&&(t.location=e.data.location.coordinates),t.links=e.data.links.map(e=>e.url);break;case"person":t.birth=e.data.birth,t.death=e.data.death,t.note=e.data.note_bio,t.links=[`https://${e.wikipediaURL}`]}return t}).catch(e=>Promise.reject(e))}getLabelField(){let e;if("term"===this._register)e="label";else e="fullname";return e}getRegister(){if(this._api)return this._api;let e;switch(this._register){case"person":case"organization":e="actors";break;case"origPlace":case"place":e="places";break;case"term":e="keywords";break;case"abbreviation":e="abbreviations";break;default:e=this._register}return e}}async function ep(e){const t=await fetch(e);return await t.json()}class tp extends Hh{constructor(e){super(e),this.endpoint=e.getAttribute("endpoint"),this.debug=e.getAttribute("debug"),ep(this.endpoint).then(e=>{this.ORConfig=e,this.debug&&console.log("OpenReconcile connector for register '%s' at endpoint <%s>. Using config: %o",this._register,this.endpoint,this.ORConfig)})}async query(e){const t=[],i={q1:{query:e}};return new Promise(e=>{fetch(this.endpoint,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},body:"queries=".concat(JSON.stringify(i))}).then(e=>e.json()).then(i=>{i.q1.result.forEach(e=>{this.ORConfig.view?this.view=this.ORConfig.view.url.replace("{{id}}",e.id):this.view=e.id,e.description?this.description=e.description:e.type?this.description=e.type.map(e=>e.name.toString()).join(", "):this.description="";const i={register:this._register,id:this._prefix?`${this._prefix}-${e.id}`:e.id,label:e.name,link:this.view,details:this.description,provider:"OpenReconcile"};t.push(i)}),this.debug&&console.log("OpenReconcile results: %o",t),e({totalItems:i.q1.result.length,items:t})})})}info(e,t){return e?this.ORConfig.preview?new Promise((i,n)=>{const s=this._prefix?e.substring(this._prefix.length+1):e,r=this.ORConfig.preview.url.replace("{{id}}",encodeURIComponent(s));fetch(r).then(e=>e.text()).then(e=>{t.innerHTML=e,i({id:this._prefix?`${this._prefix}-${s}`:s})}).catch(()=>n())}):(t.innerHTML="no 'preview' information in endpoint's manifest",Promise.resolve()):Promise.resolve({})}}function ip(e,t){const i=[];return t.querySelectorAll(":scope > pb-authority").forEach(e=>{let t;switch(e.getAttribute("connector")){case"GND":t=new Jh(e);break;case"GeoNames":t=new Wh(e);break;case"Airtable":t=new Qh(e);break;case"KBGA":t=new Zh(e);break;case"Anton":case"GF":t=new Xh(e);break;case"ReconciliationService":t=new tp(e);break;case"Custom":return void console.warn("Nested Custom connector ignored to avoid circular dependency");default:t=new Vh(e)}i.push(t)}),i}class np extends Hh{constructor(e,t){super(t),this._editable=t.hasAttribute("edit"),this._endpoint=e,this._connectors=ip(e,t),this._connectors.forEach(e=>{e.name=this.name}),console.log("custom connector: endpoint: %s; using authorities: %o",this._endpoint,this._connectors)}get editable(){return this._editable}async query(e){return new Promise(t=>{fetch(`${this._endpoint}/api/register/search/${this._register}?query=${encodeURIComponent(e)}`).then(e=>e.json()).then(async i=>{let n=[];const s=new Set;i.forEach(e=>{n.push({register:this._register,id:e.id,label:e.label,link:e.link,details:e.details,provider:"local"}),s.add(e.id)});let r=i.length;for(const t of this._connectors){const i=await t.query(e);n=n.concat(i.items.filter(e=>!s.has(e.id))),r+=i.totalItems}t({totalItems:r,items:n})})})}info(e,t){if(!e)return Promise.resolve({});const i=e;return new Promise((n,s)=>{fetch(`${this._endpoint}/api/register/${this._register}/${encodeURIComponent(i)}`).then(async i=>{if(i.ok){const e=await i.json();return t.innerHTML=e.details,void n({id:e.id,strings:e.strings,editable:this._editable})}if(404===i.status)for(const i of this._connectors)try{const s=await i.info(e,t);s&&n(s)}catch(e){}s()})})}async select(e){let t;for(const i of this._connectors)if(t=await i.getRecord(e.id).catch(()=>null),t)break;return t?fetch(`${this._endpoint}/api/register/${this._register}/${encodeURIComponent(e.id)}`,{method:"POST",mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.ok?e.json():Promise.reject(Error(e.status.toString()))):Promise.resolve(e)}}function sp(e,t){const i=[];return t.querySelectorAll(":scope > pb-authority").forEach(t=>{let n;switch(t.getAttribute("connector")){case"GND":n=new Jh(t);break;case"GeoNames":n=new Wh(t);break;case"Airtable":n=new Qh(t);break;case"KBGA":n=new Zh(t);break;case"Anton":case"GF":n=new Xh(t);break;case"ReconciliationService":n=new tp(t);break;case"Custom":n=new np(e,t);break;default:n=new Vh(t)}i.push(n)}),i}class rp extends(m(o(s))){static get properties(){return Object.assign({query:{type:String,reflect:!0},sortByLabel:{type:Boolean,attribute:"sort-by-label"},stopwords:{type:String},group:{type:String},type:{type:String,reflect:!0},noOccurrences:{type:Boolean,attribute:"no-occurrences"},autoLookup:{type:Boolean,attribute:"auto"},_results:{type:Array}},super.properties)}constructor(){super(),this.query="",this.type=null,this.sortByLabel=!1,this._results=[],this._authorities={},this.noOccurrences=!1,this.group="tei"}connectedCallback(){super.connectedCallback(),this._stopwordSet=new Set,this.stopwords&&this.stopwords.split(/\s*,\s*/).forEach(e=>this._stopwordSet.add(e.toLowerCase())),this.subscribeTo("pb-authority-lookup",e=>{this.query=e.detail.query,this.type=e.detail.type,this._results=[],this._query()}),a("pb-page-ready",()=>{sp(this.getEndpoint(),this).forEach(e=>{this._authorities[e.register]=e}),this.autoLookup&&this._query()}),console.log("<pb-authority-lookup> Registered authorities: %o",this._authorities)}render(){return t`
      <header>
        <input
          id="query"
          type="search"
          placeholder="${p("annotations.lookup")}"
          .value="${this.query}"
          @input="${e=>this._queryChanged(e)}"
          @change="${e=>this._queryChanged(e)}"
          aria-label="${p("annotations.lookup")}"
        />
        ${this._authorities[this.type]&&this._authorities[this.type].editable?t`
              <pb-restricted group="${this.group}">
                <button
                  @click="${this._addEntity}"
                  title="${p("annotations.add-entity")}"
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
          ${e.link?t`<a target="_blank" href="${e.link}">${v(e.label)}</a>`:t`${v(e.label)}`}
          <div class="badges">
            ${e.occurrences>0?t`<span class="occurrences badge" part="occurrences">${e.occurrences}</span>`:null}
            ${e.provider?t`<span class="source badge" part="source">${e.provider}</span>`:null}
            <span class="register badge" part="register">${e.register}</span>
            ${this._authorities[this.type]&&this._authorities[this.type].editable?t` <pb-restricted group="${this.group}">
                  <button
                    @click="${()=>this._editEntity(e)}"
                    title="${p("annotations.edit-entity")}"
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
    `}_select(e){const t=this._authorities[e.register],i={strings:e.strings,type:e.register,properties:{ref:e.id}};t?t.select(e).then(()=>this.emitTo("pb-authority-select",i)).catch(e=>this.emitTo("pb-authority-error",{status:e.message})):this.emitTo("pb-authority-select",i)}_editEntity(e){const t=this._authorities[e.register];t?t.select(e).then(()=>this.emitTo("pb-authority-edit-entity",{id:e.id,type:e.register})):this.emitTo("pb-authority-edit-entity",{id:e.id,type:e.register})}_queryChanged(e){this._results=[],this.query=e.target.value,this._query()}_query(){this.emitTo("pb-start-update"),this._authorities[this.type].query(this.query).then(e=>{this._occurrences(e.items).then(e=>{this._results=e}),this.emitTo("pb-end-update")})}_addEntity(){this.emitTo("pb-authority-new-entity",{query:this.query,type:this.type})}_occurrences(e){if(this.noOccurrences)return Promise.resolve(e);const t=new FormData;return t.append("register",this.type),e.forEach(e=>{t.append("id",e.id)}),new Promise(i=>{fetch(`${this.getEndpoint()}/api/annotations/occurrences`,{method:"POST",body:t}).then(e=>{if(e.ok)return e.json()}).then(t=>{e.forEach(e=>{t[e.id]?e.occurrences=t[e.id]:e.occurrences=0}),e.sort((e,t)=>{const i=t.occurrences-e.occurrences;return 0===i?"local"===e.provider&&"local"!==t.provider?-1:"local"===t.provider&&"local"!==e.provider?1:this.sortByLabel?e.label.localeCompare(t.label):0:i}),i(e)})})}}customElements.define("pb-authority-lookup",rp);class op extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{data:{type:Object},documents:{type:Array},doc:{type:String},perPage:{type:Number,attribute:"per-page"},pattern:{type:String},first:{type:Number},sort:{type:String},target:{type:String,attribute:"target"}})}constructor(){super(),this.data={documents:[]},this.documents=[],this.first=1,this.doc=null,this.sort=null}static get styles(){return n`
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
    `}async load(){if(!this.getEndpoint())return;if(!this.pattern)return;let e=`${this.getEndpoint()}/api/blacklab/search?pattern=${this.pattern}&start=${this.first}&per-page=${this.perPage}`;this.doc&&(e+=`&doc=${this.doc}`),this.sort&&(e+=`&sort=${this.sort}`),await fetch(e,{method:"GET",mode:"cors",credentials:"same-origin"}).then(e=>e.json()).then(e=>{this.data=e,localStorage.setItem("pb-kwic-results",JSON.stringify(this.data)),this.emitTo("pb-results-received",{count:e.docs?parseInt(e.docs,10):0,start:e.start,params:e.params,data:e},[])}).catch(e=>{alert(`Error retrieving remote content: ${e}`)})}_animate(){ul(this.shadowRoot.querySelector("table"),{opacity:[0,1],duration:200,delay:200,ease:"linear"})}}customElements.define("pb-blacklab-results",op);class ap extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{current:{type:Number},view:{type:String},pattern:{type:String},match:{type:String},docid:{type:String},hits:{type:Array},kwicData:{type:Object},matchParam:{type:String},pageId:{type:String},perDocument:{type:Number,attribute:"per-document"}})}connectedCallback(){super.connectedCallback(),this.current=1,this.perDocument=100,this.hits=[],this.kwicData={},a("pb-page-ready",()=>{this.viewElement=document.getElementById(this.view),this.viewElement?this.shadow=this.viewElement.shadowRoot:console.error(`${this}: view element with id ${this.view} does not exist`)}),this.subscribeTo("pb-update",()=>{this._loadDocResults()}),this.subscribeTo("pb-refresh",e=>{this.dynMatch=e.detail.match})}render(){return t`
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
    `}}function lp(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,"symbol"==typeof(s=function(e){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key))?s:String(s),n)}var s}function cp(e,t,i){return t&&lp(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function dp(){return dp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},dp.apply(this,arguments)}function hp(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,pp(e,t)}function pp(e,t){return pp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},pp(e,t)}function up(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function gp(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function mp(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return gp(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?gp(e,t):void 0}}(e))||t){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var fp;customElements.define("pb-blacklab-highlight",ap),function(e){e[e.Init=0]="Init",e[e.Loading=1]="Loading",e[e.Loaded=2]="Loaded",e[e.Rendered=3]="Rendered",e[e.Error=4]="Error"}(fp||(fp={}));var bp,yp,vp,_p,wp,xp,kp,Ap={},Sp=[],Cp=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Ep(e,t){for(var i in t)e[i]=t[i];return e}function Op(e){var t=e.parentNode;t&&t.removeChild(e)}function $p(e,t,i){var n,s,r,o={};for(r in t)"key"==r?n=t[r]:"ref"==r?s=t[r]:o[r]=t[r];if(arguments.length>2&&(o.children=arguments.length>3?bp.call(arguments,2):i),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===o[r]&&(o[r]=e.defaultProps[r]);return Tp(e,o,n,s,null)}function Tp(e,t,i,n,s){var r={type:e,props:t,key:i,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++vp};return null==s&&null!=yp.vnode&&yp.vnode(r),r}function Ip(e){return e.children}function Lp(e,t){this.props=e,this.context=t}function Rp(e,t){if(null==t)return e.__?Rp(e.__,e.__.__k.indexOf(e)+1):null;for(var i;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e)return i.__e;return"function"==typeof e.type?Rp(e):null}function Pp(e){var t,i;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e){e.__e=e.__c.base=i.__e;break}return Pp(e)}}function Np(e){(!e.__d&&(e.__d=!0)&&wp.push(e)&&!jp.__r++||xp!==yp.debounceRendering)&&((xp=yp.debounceRendering)||setTimeout)(jp)}function jp(){for(var e;jp.__r=wp.length;)e=wp.sort(function(e,t){return e.__v.__b-t.__v.__b}),wp=[],e.some(function(e){var t,i,n,s,r,o;e.__d&&(r=(s=(t=e).__v).__e,(o=t.__P)&&(i=[],(n=Ep({},s)).__v=s.__v+1,Hp(o,s,n,t.__n,void 0!==o.ownerSVGElement,null!=s.__h?[r]:null,i,r??Rp(s),s.__h),Vp(i,s),s.__e!=r&&Pp(s)))})}function Dp(e,t,i,n,s,r,o,a,l,c){var d,h,p,u,g,m,f,b=n&&n.__k||Sp,y=b.length;for(i.__k=[],d=0;d<t.length;d++)if(null!=(u=i.__k[d]=null==(u=t[d])||"boolean"==typeof u?null:"string"==typeof u||"number"==typeof u||"bigint"==typeof u?Tp(null,u,null,null,u):Array.isArray(u)?Tp(Ip,{children:u},null,null,null):u.__b>0?Tp(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u)){if(u.__=i,u.__b=i.__b+1,null===(p=b[d])||p&&u.key==p.key&&u.type===p.type)b[d]=void 0;else for(h=0;h<y;h++){if((p=b[h])&&u.key==p.key&&u.type===p.type){b[h]=void 0;break}p=null}Hp(e,u,p=p||Ap,s,r,o,a,l,c),g=u.__e,(h=u.ref)&&p.ref!=h&&(f||(f=[]),p.ref&&f.push(p.ref,null,u),f.push(h,u.__c||g,u)),null!=g?(null==m&&(m=g),"function"==typeof u.type&&u.__k===p.__k?u.__d=l=Fp(u,l,e):l=Mp(e,u,p,b,g,l),"function"==typeof i.type&&(i.__d=l)):l&&p.__e==l&&l.parentNode!=e&&(l=Rp(p))}for(i.__e=m,d=y;d--;)null!=b[d]&&Gp(b[d],b[d]);if(f)for(d=0;d<f.length;d++)Yp(f[d],f[++d],f[++d])}function Fp(e,t,i){for(var n,s=e.__k,r=0;s&&r<s.length;r++)(n=s[r])&&(n.__=e,t="function"==typeof n.type?Fp(n,t,i):Mp(i,n,n,s,n.__e,t));return t}function Mp(e,t,i,n,s,r){var o,a,l;if(void 0!==t.__d)o=t.__d,t.__d=void 0;else if(null==i||s!=r||null==s.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(s),o=null;else{for(a=r,l=0;(a=a.nextSibling)&&l<n.length;l+=1)if(a==s)break e;e.insertBefore(s,r),o=r}return void 0!==o?o:s.nextSibling}function Bp(e,t,i){"-"===t[0]?e.setProperty(t,i):e[t]=null==i?"":"number"!=typeof i||Cp.test(t)?i:i+"px"}function zp(e,t,i,n,s){var r;e:if("style"===t)if("string"==typeof i)e.style.cssText=i;else{if("string"==typeof n&&(e.style.cssText=n=""),n)for(t in n)i&&t in i||Bp(e.style,t,"");if(i)for(t in i)n&&i[t]===n[t]||Bp(e.style,t,i[t])}else if("o"===t[0]&&"n"===t[1])r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=i,i?n||e.addEventListener(t,r?Up:qp,r):e.removeEventListener(t,r?Up:qp,r);else if("dangerouslySetInnerHTML"!==t){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=i??"";break e}catch(e){}"function"==typeof i||(null==i||!1===i&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,i))}}function qp(e){this.l[e.type+!1](yp.event?yp.event(e):e)}function Up(e){this.l[e.type+!0](yp.event?yp.event(e):e)}function Hp(e,t,i,n,s,r,o,a,l){var c,d,h,p,u,g,m,f,b,y,v,_,w,x,k,A=t.type;if(void 0!==t.constructor)return null;null!=i.__h&&(l=i.__h,a=t.__e=i.__e,t.__h=null,r=[a]),(c=yp.__b)&&c(t);try{e:if("function"==typeof A){if(f=t.props,b=(c=A.contextType)&&n[c.__c],y=c?b?b.props.value:c.__:n,i.__c?m=(d=t.__c=i.__c).__=d.__E:("prototype"in A&&A.prototype.render?t.__c=d=new A(f,y):(t.__c=d=new Lp(f,y),d.constructor=A,d.render=Qp),b&&b.sub(d),d.props=f,d.state||(d.state={}),d.context=y,d.__n=n,h=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=A.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=Ep({},d.__s)),Ep(d.__s,A.getDerivedStateFromProps(f,d.__s))),p=d.props,u=d.state,h)null==A.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==A.getDerivedStateFromProps&&f!==p&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(f,y),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(f,d.__s,y)||t.__v===i.__v){for(d.props=f,d.state=d.__s,t.__v!==i.__v&&(d.__d=!1),d.__v=t,t.__e=i.__e,t.__k=i.__k,t.__k.forEach(function(e){e&&(e.__=t)}),v=0;v<d._sb.length;v++)d.__h.push(d._sb[v]);d._sb=[],d.__h.length&&o.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(f,d.__s,y),null!=d.componentDidUpdate&&d.__h.push(function(){d.componentDidUpdate(p,u,g)})}if(d.context=y,d.props=f,d.__v=t,d.__P=e,_=yp.__r,w=0,"prototype"in A&&A.prototype.render){for(d.state=d.__s,d.__d=!1,_&&_(t),c=d.render(d.props,d.state,d.context),x=0;x<d._sb.length;x++)d.__h.push(d._sb[x]);d._sb=[]}else do{d.__d=!1,_&&_(t),c=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++w<25);d.state=d.__s,null!=d.getChildContext&&(n=Ep(Ep({},n),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(p,u)),k=null!=c&&c.type===Ip&&null==c.key?c.props.children:c,Dp(e,Array.isArray(k)?k:[k],t,i,n,s,r,o,a,l),d.base=t.__e,t.__h=null,d.__h.length&&o.push(d),m&&(d.__E=d.__=null),d.__e=!1}else null==r&&t.__v===i.__v?(t.__k=i.__k,t.__e=i.__e):t.__e=Wp(i.__e,t,i,n,s,r,o,l);(c=yp.diffed)&&c(t)}catch(e){t.__v=null,(l||null!=r)&&(t.__e=a,t.__h=!!l,r[r.indexOf(a)]=null),yp.__e(e,t,i)}}function Vp(e,t){yp.__c&&yp.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){yp.__e(e,t.__v)}})}function Wp(e,t,i,n,s,r,o,a){var l,c,d,h=i.props,p=t.props,u=t.type,g=0;if("svg"===u&&(s=!0),null!=r)for(;g<r.length;g++)if((l=r[g])&&"setAttribute"in l==!!u&&(u?l.localName===u:3===l.nodeType)){e=l,r[g]=null;break}if(null==e){if(null===u)return document.createTextNode(p);e=s?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,p.is&&p),r=null,a=!1}if(null===u)h===p||a&&e.data===p||(e.data=p);else{if(r=r&&bp.call(e.childNodes),c=(h=i.props||Ap).dangerouslySetInnerHTML,d=p.dangerouslySetInnerHTML,!a){if(null!=r)for(h={},g=0;g<e.attributes.length;g++)h[e.attributes[g].name]=e.attributes[g].value;(d||c)&&(d&&(c&&d.__html==c.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if(function(e,t,i,n,s){var r;for(r in i)"children"===r||"key"===r||r in t||zp(e,r,null,i[r],n);for(r in t)s&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||i[r]===t[r]||zp(e,r,t[r],i[r],n)}(e,p,h,s,a),d)t.__k=[];else if(g=t.props.children,Dp(e,Array.isArray(g)?g:[g],t,i,n,s&&"foreignObject"!==u,r,o,r?r[0]:i.__k&&Rp(i,0),a),null!=r)for(g=r.length;g--;)null!=r[g]&&Op(r[g]);a||("value"in p&&void 0!==(g=p.value)&&(g!==e.value||"progress"===u&&!g||"option"===u&&g!==h.value)&&zp(e,"value",g,h.value,!1),"checked"in p&&void 0!==(g=p.checked)&&g!==e.checked&&zp(e,"checked",g,h.checked,!1))}return e}function Yp(e,t,i){try{"function"==typeof e?e(t):e.current=t}catch(e){yp.__e(e,i)}}function Gp(e,t,i){var n,s;if(yp.unmount&&yp.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||Yp(n,null,t)),null!=(n=e.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(e){yp.__e(e,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&Gp(n[s],t,i||"function"!=typeof e.type);i||null==e.__e||Op(e.__e),e.__=e.__e=e.__d=void 0}function Qp(e,t,i){return this.constructor(e,i)}function Kp(e,t,i){var n,s,r;yp.__&&yp.__(e,t),s=(n=!1)?null:t.__k,r=[],Hp(t,e=t.__k=$p(Ip,null,[e]),s||Ap,Ap,void 0!==t.ownerSVGElement,s?null:t.firstChild?bp.call(t.childNodes):null,r,s?s.__e:t.firstChild,n),Vp(r,e)}function Jp(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}bp=Sp.slice,yp={__e:function(e,t,i,n){for(var s,r,o;t=t.__;)if((s=t.__c)&&!s.__)try{if((r=s.constructor)&&null!=r.getDerivedStateFromError&&(s.setState(r.getDerivedStateFromError(e)),o=s.__d),null!=s.componentDidCatch&&(s.componentDidCatch(e,n||{}),o=s.__d),o)return s.__E=s}catch(t){e=t}throw e}},vp=0,_p=function(e){return null!=e&&void 0===e.constructor},Lp.prototype.setState=function(e,t){var i;i=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=Ep({},this.state),"function"==typeof e&&(e=e(Ep({},i),this.props)),e&&Ep(i,e),null!=e&&this.__v&&(t&&this._sb.push(t),Np(this))},Lp.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Np(this))},Lp.prototype.render=Ip,wp=[],jp.__r=0,kp=0;var Zp=function(){function e(e){this._id=void 0,this._id=e||Jp()}return cp(e,[{key:"id",get:function(){return this._id}}]),e}();function Xp(e){return $p(e.parentElement||"span",{dangerouslySetInnerHTML:{__html:e.content}})}function eu(e,t){return $p(Xp,{content:e,parentElement:t})}var tu,iu=function(e){function t(t){var i;return(i=e.call(this)||this).data=void 0,i.update(t),i}hp(t,e);var i=t.prototype;return i.cast=function(e){return e instanceof HTMLElement?eu(e.outerHTML):e},i.update=function(e){return this.data=this.cast(e),this},t}(Zp),nu=function(e){function t(t){var i;return(i=e.call(this)||this)._cells=void 0,i.cells=t||[],i}hp(t,e);var i=t.prototype;return i.cell=function(e){return this._cells[e]},i.toArray=function(){return this.cells.map(function(e){return e.data})},t.fromCells=function(e){return new t(e.map(function(e){return new iu(e.data)}))},cp(t,[{key:"cells",get:function(){return this._cells},set:function(e){this._cells=e}},{key:"length",get:function(){return this.cells.length}}]),t}(Zp),su=function(e){function t(t){var i;return(i=e.call(this)||this)._rows=void 0,i._length=void 0,i.rows=t instanceof Array?t:t instanceof nu?[t]:[],i}return hp(t,e),t.prototype.toArray=function(){return this.rows.map(function(e){return e.toArray()})},t.fromRows=function(e){return new t(e.map(function(e){return nu.fromCells(e.cells)}))},t.fromArray=function(e){return new t((e=function(e){return!e[0]||e[0]instanceof Array?e:[e]}(e)).map(function(e){return new nu(e.map(function(e){return new iu(e)}))}))},cp(t,[{key:"rows",get:function(){return this._rows},set:function(e){this._rows=e}},{key:"length",get:function(){return this._length||this.rows.length},set:function(e){this._length=e}}]),t}(Zp),ru=function(){function e(){this.callbacks=void 0}var t=e.prototype;return t.init=function(e){this.callbacks||(this.callbacks={}),e&&!this.callbacks[e]&&(this.callbacks[e]=[])},t.listeners=function(){return this.callbacks},t.on=function(e,t){return this.init(e),this.callbacks[e].push(t),this},t.off=function(e,t){var i=e;return this.init(),this.callbacks[i]&&0!==this.callbacks[i].length?(this.callbacks[i]=this.callbacks[i].filter(function(e){return e!=t}),this):this},t.emit=function(e){var t=arguments,i=e;return this.init(i),this.callbacks[i].length>0&&(this.callbacks[i].forEach(function(e){return e.apply(void 0,[].slice.call(t,1))}),!0)},e}();function ou(e,t){if(typeof e!=typeof t)return!1;if(null===e&&null===t)return!0;if("object"!=typeof e)return e===t;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!ou(e[i],t[i]))return!1;return!0}if(e.hasOwnProperty("constructor")&&t.hasOwnProperty("constructor")&&e.hasOwnProperty("props")&&t.hasOwnProperty("props")&&e.hasOwnProperty("key")&&t.hasOwnProperty("key")&&e.hasOwnProperty("ref")&&t.hasOwnProperty("ref")&&e.hasOwnProperty("type")&&t.hasOwnProperty("type"))return ou(e.props,t.props);var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(var r=0,o=n;r<o.length;r++){var a=o[r];if(!t.hasOwnProperty(a)||!ou(e[a],t[a]))return!1}return!0}!function(e){e[e.Initiator=0]="Initiator",e[e.ServerFilter=1]="ServerFilter",e[e.ServerSort=2]="ServerSort",e[e.ServerLimit=3]="ServerLimit",e[e.Extractor=4]="Extractor",e[e.Transformer=5]="Transformer",e[e.Filter=6]="Filter",e[e.Sort=7]="Sort",e[e.Limit=8]="Limit"}(tu||(tu={}));var au=function(e){function t(t){var i;return(i=e.call(this)||this).id=void 0,i._props=void 0,i._props={},i.id=Jp(),t&&i.setProps(t),i}hp(t,e);var i=t.prototype;return i.process=function(){var e=[].slice.call(arguments);this.validateProps instanceof Function&&this.validateProps.apply(this,e),this.emit.apply(this,["beforeProcess"].concat(e));var t=this._process.apply(this,e);return this.emit.apply(this,["afterProcess"].concat(e)),t},i.setProps=function(e){var t=dp({},this._props,e);return ou(t,this._props)||(this._props=t,this.emit("propsUpdated",this)),this},cp(t,[{key:"props",get:function(){return this._props}}]),t}(ru),lu=function(e){function t(){return e.apply(this,arguments)||this}return hp(t,e),t.prototype._process=function(e){return this.props.keyword?(t=String(this.props.keyword).trim(),i=this.props.columns,n=this.props.ignoreHiddenColumns,s=e,r=this.props.selector,t=t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),new su(s.rows.filter(function(e,s){return e.cells.some(function(e,o){if(!e)return!1;if(n&&i&&i[o]&&"object"==typeof i[o]&&i[o].hidden)return!1;var a="";if("function"==typeof r)a=r(e.data,s,o);else if("object"==typeof e.data){var l=e.data;l&&l.props&&l.props.content&&(a=l.props.content)}else a=String(e.data);return new RegExp(t,"gi").test(a)})}))):e;var t,i,n,s,r},cp(t,[{key:"type",get:function(){return tu.Filter}}]),t}(au);function cu(){return""+"gridjs"+[].slice.call(arguments).reduce(function(e,t){return e+"-"+t},"")}function du(){return[].slice.call(arguments).map(function(e){return e?e.toString():""}).filter(function(e){return e}).reduce(function(e,t){return(e||"")+" "+t},"").trim()}var hu,pu,uu,gu,mu=function(e){function t(){return e.apply(this,arguments)||this}return hp(t,e),t.prototype._process=function(e){if(!this.props.keyword)return e;var t={};return this.props.url&&(t.url=this.props.url(e.url,this.props.keyword)),this.props.body&&(t.body=this.props.body(e.body,this.props.keyword)),dp({},e,t)},cp(t,[{key:"type",get:function(){return tu.ServerFilter}}]),t}(au),fu=0,bu=[],yu=[],vu=yp.__b,_u=yp.__r,wu=yp.diffed,xu=yp.__c,ku=yp.unmount;function Au(e,t){yp.__h&&yp.__h(pu,e,fu||t),fu=0;var i=pu.__H||(pu.__H={__:[],__h:[]});return e>=i.__.length&&i.__.push({__V:yu}),i.__[e]}function Su(e){return fu=1,function(e,t){var i=Au(hu++,2);if(i.t=e,!i.__c&&(i.__=[Nu(void 0,t),function(e){var t=i.__N?i.__N[0]:i.__[0],n=i.t(t,e);t!==n&&(i.__N=[n,i.__[1]],i.__c.setState({}))}],i.__c=pu,!pu.u)){pu.u=!0;var n=pu.shouldComponentUpdate;pu.shouldComponentUpdate=function(e,t,s){if(!i.__c.__H)return!0;var r=i.__c.__H.__.filter(function(e){return e.__c});if(r.every(function(e){return!e.__N}))return!n||n.call(this,e,t,s);var o=!1;return r.forEach(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),!(!o&&i.__c.props===e)&&(!n||n.call(this,e,t,s))}}return i.__N||i.__}(Nu,e)}function Cu(e,t){var i=Au(hu++,3);!yp.__s&&Pu(i.__H,t)&&(i.__=e,i.i=t,pu.__H.__h.push(i))}function Eu(e){return fu=5,Ou(function(){return{current:e}},[])}function Ou(e,t){var i=Au(hu++,7);return Pu(i.__H,t)?(i.__V=e(),i.i=t,i.__h=e,i.__V):i.__}function $u(){for(var e;e=bu.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Lu),e.__H.__h.forEach(Ru),e.__H.__h=[]}catch(t){e.__H.__h=[],yp.__e(t,e.__v)}}yp.__b=function(e){pu=null,vu&&vu(e)},yp.__r=function(e){_u&&_u(e),hu=0;var t=(pu=e.__c).__H;t&&(uu===pu?(t.__h=[],pu.__h=[],t.__.forEach(function(e){e.__N&&(e.__=e.__N),e.__V=yu,e.__N=e.i=void 0})):(t.__h.forEach(Lu),t.__h.forEach(Ru),t.__h=[])),uu=pu},yp.diffed=function(e){wu&&wu(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==bu.push(t)&&gu===yp.requestAnimationFrame||((gu=yp.requestAnimationFrame)||Iu)($u)),t.__H.__.forEach(function(e){e.i&&(e.__H=e.i),e.__V!==yu&&(e.__=e.__V),e.i=void 0,e.__V=yu})),uu=pu=null},yp.__c=function(e,t){t.some(function(e){try{e.__h.forEach(Lu),e.__h=e.__h.filter(function(e){return!e.__||Ru(e)})}catch(i){t.some(function(e){e.__h&&(e.__h=[])}),t=[],yp.__e(i,e.__v)}}),xu&&xu(e,t)},yp.unmount=function(e){ku&&ku(e);var t,i=e.__c;i&&i.__H&&(i.__H.__.forEach(function(e){try{Lu(e)}catch(e){t=e}}),i.__H=void 0,t&&yp.__e(t,i.__v))};var Tu="function"==typeof requestAnimationFrame;function Iu(e){var t,i=function(){clearTimeout(n),Tu&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(i,100);Tu&&(t=requestAnimationFrame(i))}function Lu(e){var t=pu,i=e.__c;"function"==typeof i&&(e.__c=void 0,i()),pu=t}function Ru(e){var t=pu;e.__c=e.__(),pu=t}function Pu(e,t){return!e||e.length!==t.length||t.some(function(t,i){return t!==e[i]})}function Nu(e,t){return"function"==typeof t?t(e):t}function ju(){return function(e){var t=pu.context[e.__c],i=Au(hu++,9);return i.c=e,t?(null==i.__&&(i.__=!0,t.sub(pu)),t.props.value):e.__}(bg)}var Du={search:{placeholder:"Type a keyword..."},sort:{sortAsc:"Sort column ascending",sortDesc:"Sort column descending"},pagination:{previous:"Previous",next:"Next",navigate:function(e,t){return"Page "+e+" of "+t},page:function(e){return"Page "+e},showing:"Showing",of:"of",to:"to",results:"results"},loading:"Loading...",noRecordsFound:"No matching records found",error:"An error happened while fetching the data"},Fu=function(){function e(e){this._language=void 0,this._defaultLanguage=void 0,this._language=e,this._defaultLanguage=Du}var t=e.prototype;return t.getString=function(e,t){if(!t||!e)return null;var i=e.split("."),n=i[0];if(t[n]){var s=t[n];return"string"==typeof s?function(){return s}:"function"==typeof s?s:this.getString(i.slice(1).join("."),s)}return null},t.translate=function(e){var t;return(t=this.getString(e,this._language)||this.getString(e,this._defaultLanguage))?t.apply(void 0,[].slice.call(arguments,1)):e},e}();function Mu(){var e=ju();return function(t){var i;return(i=e.translator).translate.apply(i,[t].concat([].slice.call(arguments,1)))}}var Bu=function(e){return function(t){return dp({},t,{search:{keyword:e}})}};function zu(){return ju().store}function qu(e){var t=zu(),i=Su(e(t.getState())),n=i[0],s=i[1];return Cu(function(){return t.subscribe(function(){var i=e(t.getState());n!==i&&s(i)})},[]),n}function Uu(){var e,t=Su(void 0),i=t[0],n=t[1],s=ju(),r=s.search,o=Mu(),a=zu().dispatch,l=qu(function(e){return e.search});Cu(function(){i&&i.setProps({keyword:null==l?void 0:l.keyword})},[l,i]),Cu(function(){n(r.server?new mu({keyword:r.keyword,url:r.server.url,body:r.server.body}):new lu({keyword:r.keyword,columns:s.header&&s.header.columns,ignoreHiddenColumns:r.ignoreHiddenColumns||void 0===r.ignoreHiddenColumns,selector:r.selector})),r.keyword&&a(Bu(r.keyword))},[r]),Cu(function(){if(i)return s.pipeline.register(i),function(){return s.pipeline.unregister(i)}},[s,i]);var c,d,h,p=function(e,t){return fu=8,Ou(function(){return e},t)}((c=function(e){e.target instanceof HTMLInputElement&&a(Bu(e.target.value))},d=i instanceof mu?r.debounceTimeout||250:0,function(){var e=arguments;return new Promise(function(t){h&&clearTimeout(h),h=setTimeout(function(){return t(c.apply(void 0,[].slice.call(e)))},d)})}),[r,i]);return $p("div",{className:cu(du("search",null==(e=s.className)?void 0:e.search))},$p("input",{type:"search",placeholder:o("search.placeholder"),"aria-label":o("search.placeholder"),onInput:p,className:du(cu("input"),cu("search","input")),defaultValue:(null==l?void 0:l.keyword)||""}))}var Hu=function(e){function t(){return e.apply(this,arguments)||this}hp(t,e);var i=t.prototype;return i.validateProps=function(){if(isNaN(Number(this.props.limit))||isNaN(Number(this.props.page)))throw Error("Invalid parameters passed")},i._process=function(e){var t=this.props.page;return new su(e.rows.slice(t*this.props.limit,(t+1)*this.props.limit))},cp(t,[{key:"type",get:function(){return tu.Limit}}]),t}(au),Vu=function(e){function t(){return e.apply(this,arguments)||this}return hp(t,e),t.prototype._process=function(e){var t={};return this.props.url&&(t.url=this.props.url(e.url,this.props.page,this.props.limit)),this.props.body&&(t.body=this.props.body(e.body,this.props.page,this.props.limit)),dp({},e,t)},cp(t,[{key:"type",get:function(){return tu.ServerLimit}}]),t}(au);function Wu(){var e=ju(),t=e.pagination,i=t.server,n=t.summary,s=void 0===n||n,r=t.nextButton,o=void 0===r||r,a=t.prevButton,l=void 0===a||a,c=t.buttonsCount,d=void 0===c?3:c,h=t.limit,p=void 0===h?10:h,u=t.page,g=void 0===u?0:u,m=t.resetPageOnUpdate,f=void 0===m||m,b=Eu(null),y=Su(g),v=y[0],_=y[1],w=Su(0),x=w[0],k=w[1],A=Mu();Cu(function(){return i?(b.current=new Vu({limit:p,page:v,url:i.url,body:i.body}),e.pipeline.register(b.current)):(b.current=new Hu({limit:p,page:v}),e.pipeline.register(b.current)),b.current instanceof Vu?e.pipeline.on("afterProcess",function(e){return k(e.length)}):b.current instanceof Hu&&b.current.on("beforeProcess",function(e){return k(e.length)}),e.pipeline.on("updated",S),e.pipeline.on("error",function(){k(0),_(0)}),function(){e.pipeline.unregister(b.current),e.pipeline.off("updated",S)}},[]);var S=function(e){f&&e!==b.current&&(_(0),0!==b.current.props.page&&b.current.setProps({page:0}))},C=function(){return Math.ceil(x/p)},E=function(e){if(e>=C()||e<0||e===v)return null;_(e),b.current.setProps({page:e})};return $p("div",{className:du(cu("pagination"),e.className.pagination)},$p(Ip,null,s&&x>0&&$p("div",{role:"status","aria-live":"polite",className:du(cu("summary"),e.className.paginationSummary),title:A("pagination.navigate",v+1,C())},A("pagination.showing")," ",$p("b",null,A(""+(v*p+1)))," ",A("pagination.to")," ",$p("b",null,A(""+Math.min((v+1)*p,x)))," ",A("pagination.of")," ",$p("b",null,A(""+x))," ",A("pagination.results"))),$p("div",{className:cu("pages")},l&&$p("button",{tabIndex:0,role:"button",disabled:0===v,onClick:function(){return E(v-1)},title:A("pagination.previous"),"aria-label":A("pagination.previous"),className:du(e.className.paginationButton,e.className.paginationButtonPrev)},A("pagination.previous")),function(){if(d<=0)return null;var t=Math.min(C(),d),i=Math.min(v,Math.floor(t/2));return v+Math.floor(t/2)>=C()&&(i=t-(C()-v)),$p(Ip,null,C()>t&&v-i>0&&$p(Ip,null,$p("button",{tabIndex:0,role:"button",onClick:function(){return E(0)},title:A("pagination.firstPage"),"aria-label":A("pagination.firstPage"),className:e.className.paginationButton},A("1")),$p("button",{tabIndex:-1,className:du(cu("spread"),e.className.paginationButton)},"...")),Array.from(Array(t).keys()).map(function(e){return v+(e-i)}).map(function(t){return $p("button",{tabIndex:0,role:"button",onClick:function(){return E(t)},className:du(v===t?du(cu("currentPage"),e.className.paginationButtonCurrent):null,e.className.paginationButton),title:A("pagination.page",t+1),"aria-label":A("pagination.page",t+1)},A(""+(t+1)))}),C()>t&&C()>v+i+1&&$p(Ip,null,$p("button",{tabIndex:-1,className:du(cu("spread"),e.className.paginationButton)},"..."),$p("button",{tabIndex:0,role:"button",onClick:function(){return E(C()-1)},title:A("pagination.page",C()),"aria-label":A("pagination.page",C()),className:e.className.paginationButton},A(""+C()))))}(),o&&$p("button",{tabIndex:0,role:"button",disabled:C()===v+1||0===C(),onClick:function(){return E(v+1)},title:A("pagination.next"),"aria-label":A("pagination.next"),className:du(e.className.paginationButton,e.className.paginationButtonNext)},A("pagination.next"))))}function Yu(e,t){return"string"==typeof e?e.indexOf("%")>-1?t/100*parseInt(e,10):parseInt(e,10):e}function Gu(e){return e?Math.floor(e)+"px":""}function Qu(e){var t=e.tableRef.cloneNode(!0);return t.style.position="absolute",t.style.width="100%",t.style.zIndex="-2147483640",t.style.visibility="hidden",$p("div",{ref:function(e){e&&e.appendChild(t)}})}function Ku(e){if(!e)return"";var t=e.split(" ");return 1===t.length&&/([a-z][A-Z])+/g.test(e)?e:t.map(function(e,t){return 0==t?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}).join("")}var Ju,Zu=new(function(){function e(){}var t=e.prototype;return t.format=function(e,t){return"[Grid.js] ["+t.toUpperCase()+"]: "+e},t.error=function(e,t){void 0===t&&(t=!1);var i=this.format(e,"error");if(t)throw Error(i);console.error(i)},t.warn=function(e){console.warn(this.format(e,"warn"))},t.info=function(e){console.info(this.format(e,"info"))},e}());!function(e){e[e.Header=0]="Header",e[e.Footer=1]="Footer",e[e.Cell=2]="Cell"}(Ju||(Ju={}));var Xu=function(){function e(){this.plugins=void 0,this.plugins=[]}var t=e.prototype;return t.get=function(e){return this.plugins.find(function(t){return t.id===e})},t.add=function(e){return e.id?this.get(e.id)?(Zu.error("Duplicate plugin ID: "+e.id),this):(this.plugins.push(e),this):(Zu.error("Plugin ID cannot be empty"),this)},t.remove=function(e){var t=this.get(e);return t&&this.plugins.splice(this.plugins.indexOf(t),1),this},t.list=function(e){return(null!=e||null!=e?this.plugins.filter(function(t){return t.position===e}):this.plugins).sort(function(e,t){return e.order&&t.order?e.order-t.order:1})},e}();function eg(e){var t=this,i=ju();if(e.pluginId){var n=i.plugin.get(e.pluginId);return n?$p(Ip,{},$p(n.component,dp({plugin:n},e.props))):null}return void 0!==e.position?$p(Ip,{},i.plugin.list(e.position).map(function(e){return $p(e.component,dp({plugin:e},t.props.props))})):null}var tg=function(e){function t(){var t;return(t=e.call(this)||this)._columns=void 0,t._columns=[],t}hp(t,e);var i=t.prototype;return i.adjustWidth=function(e,i,n){var s=e.container,r=e.autoWidth;if(!s)return this;var o=s.clientWidth,a={};i.current&&r&&(Kp($p(Qu,{tableRef:i.current}),n.current),a=function(e){var t=e.querySelector("table");if(!t)return{};var i=t.className,n=t.style.cssText;t.className=i+" "+cu("shadowTable"),t.style.tableLayout="auto",t.style.width="auto",t.style.padding="0",t.style.margin="0",t.style.border="none",t.style.outline="none";var s=Array.from(t.parentNode.querySelectorAll("thead th")).reduce(function(e,t){var i;return t.style.width=t.clientWidth+"px",dp(((i={})[t.getAttribute("data-column-id")]={minWidth:t.clientWidth},i),e)},{});return t.className=i,t.style.cssText=n,t.style.tableLayout="auto",Array.from(t.parentNode.querySelectorAll("thead th")).reduce(function(e,t){return e[t.getAttribute("data-column-id")].width=t.clientWidth,e},s)}(n.current));for(var l,c=mp(t.tabularFormat(this.columns).reduce(function(e,t){return e.concat(t)},[]));!(l=c()).done;){var d=l.value;d.columns&&d.columns.length>0||(!d.width&&r?d.id in a&&(d.width=Gu(a[d.id].width),d.minWidth=Gu(a[d.id].minWidth)):d.width=Gu(Yu(d.width,o)))}return i.current&&r&&Kp(null,n.current),this},i.setSort=function(e,t){for(var i,n=mp(t||this.columns||[]);!(i=n()).done;){var s=i.value;s.columns&&s.columns.length>0?s.sort=void 0:void 0===s.sort&&e?s.sort={}:s.sort?"object"==typeof s.sort&&(s.sort=dp({},s.sort)):s.sort=void 0,s.columns&&this.setSort(e,s.columns)}},i.setResizable=function(e,t){for(var i,n=mp(t||this.columns||[]);!(i=n()).done;){var s=i.value;void 0===s.resizable&&(s.resizable=e),s.columns&&this.setResizable(e,s.columns)}},i.setID=function(e){for(var t,i=mp(e||this.columns||[]);!(t=i()).done;){var n=t.value;n.id||"string"!=typeof n.name||(n.id=Ku(n.name)),n.id||Zu.error('Could not find a valid ID for one of the columns. Make sure a valid "id" is set for all columns.'),n.columns&&this.setID(n.columns)}},i.populatePlugins=function(e,t){for(var i,n=mp(t);!(i=n()).done;){var s=i.value;void 0!==s.plugin&&e.add(dp({id:s.id},s.plugin,{position:Ju.Cell}))}},t.fromColumns=function(e){for(var i,n=new t,s=mp(e);!(i=s()).done;){var r=i.value;if("string"==typeof r||_p(r))n.columns.push({name:r});else if("object"==typeof r){var o=r;o.columns&&(o.columns=t.fromColumns(o.columns).columns),"object"==typeof o.plugin&&void 0===o.data&&(o.data=null),n.columns.push(r)}}return n},t.createFromConfig=function(e){var i=new t;return e.from?i.columns=t.fromHTMLTable(e.from).columns:e.columns?i.columns=t.fromColumns(e.columns).columns:!e.data||"object"!=typeof e.data[0]||e.data[0]instanceof Array||(i.columns=Object.keys(e.data[0]).map(function(e){return{name:e}})),i.columns.length?(i.setID(),i.setSort(e.sort),i.setResizable(e.resizable),i.populatePlugins(e.plugin,i.columns),i):null},t.fromHTMLTable=function(e){for(var i,n=new t,s=mp(e.querySelector("thead").querySelectorAll("th"));!(i=s()).done;){var r=i.value;n.columns.push({name:r.innerHTML,width:r.width})}return n},t.tabularFormat=function(e){var t=[],i=e||[],n=[];if(i&&i.length){t.push(i);for(var s,r=mp(i);!(s=r()).done;){var o=s.value;o.columns&&o.columns.length&&(n=n.concat(o.columns))}n.length&&(t=t.concat(this.tabularFormat(n)))}return t},t.leafColumns=function(e){var t=[],i=e||[];if(i&&i.length)for(var n,s=mp(i);!(n=s()).done;){var r=n.value;r.columns&&0!==r.columns.length||t.push(r),r.columns&&(t=t.concat(this.leafColumns(r.columns)))}return t},t.maximumDepth=function(e){return this.tabularFormat([e]).length-1},cp(t,[{key:"columns",get:function(){return this._columns},set:function(e){this._columns=e}},{key:"visibleColumns",get:function(){return this._columns.filter(function(e){return!e.hidden})}}]),t}(Zp),ig=function(){},ng=function(e){function t(t){var i;return(i=e.call(this)||this).data=void 0,i.set(t),i}hp(t,e);var i=t.prototype;return i.get=function(){try{return Promise.resolve(this.data()).then(function(e){return{data:e,total:e.length}})}catch(e){return Promise.reject(e)}},i.set=function(e){return e instanceof Array?this.data=function(){return e}:e instanceof Function&&(this.data=e),this},t}(ig),sg=function(e){function t(t){var i;return(i=e.call(this)||this).options=void 0,i.options=t,i}hp(t,e);var i=t.prototype;return i.handler=function(e){return"function"==typeof this.options.handle?this.options.handle(e):e.ok?e.json():(Zu.error("Could not fetch data: "+e.status+" - "+e.statusText,!0),null)},i.get=function(e){var t=dp({},this.options,e);return"function"==typeof t.data?t.data(t):fetch(t.url,t).then(this.handler.bind(this)).then(function(e){return{data:t.then(e),total:"function"==typeof t.total?t.total(e):void 0}})},t}(ig),rg=function(){function e(){}return e.createFromConfig=function(e){var t=null;return e.data&&(t=new ng(e.data)),e.from&&(t=new ng(this.tableElementToArray(e.from)),e.from.style.display="none"),e.server&&(t=new sg(e.server)),t||Zu.error("Could not determine the storage type",!0),t},e.tableElementToArray=function(e){for(var t,i,n=[],s=mp(e.querySelector("tbody").querySelectorAll("tr"));!(t=s()).done;){for(var r,o=[],a=mp(t.value.querySelectorAll("td"));!(r=a()).done;){var l=r.value;1===l.childNodes.length&&l.childNodes[0].nodeType===Node.TEXT_NODE?o.push((i=l.innerHTML,(new DOMParser).parseFromString(i,"text/html").documentElement.textContent)):o.push(eu(l.innerHTML))}n.push(o)}return n},e}(),og="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function ag(e,t,i){if(!e.s){if(i instanceof lg){if(!i.s)return void(i.o=ag.bind(null,e,t));1&t&&(t=i.s),i=i.v}if(i&&i.then)return void i.then(ag.bind(null,e,t),ag.bind(null,e,2));e.s=t,e.v=i;var n=e.o;n&&n(e)}}var lg=function(){function e(){}return e.prototype.then=function(t,i){var n=new e,s=this.s;if(s){var r=1&s?t:i;if(r){try{ag(n,1,r(this.v))}catch(e){ag(n,2,e)}return n}return this}return this.o=function(e){try{var s=e.v;1&e.s?ag(n,1,t?t(s):s):i?ag(n,1,i(s)):ag(n,2,s)}catch(e){ag(n,2,e)}},n},e}();function cg(e){return e instanceof lg&&1&e.s}var dg=function(e){function t(t){var i;return(i=e.call(this)||this)._steps=new Map,i.cache=new Map,i.lastProcessorIndexUpdated=-1,t&&t.forEach(function(e){return i.register(e)}),i}hp(t,e);var i=t.prototype;return i.clearCache=function(){this.cache=new Map,this.lastProcessorIndexUpdated=-1},i.register=function(e,t){if(void 0===t&&(t=null),!e)throw Error("Processor is not defined");if(null===e.type)throw Error("Processor type is not defined");if(this.findProcessorIndexByID(e.id)>-1)throw Error("Processor ID "+e.id+" is already defined");return e.on("propsUpdated",this.processorPropsUpdated.bind(this)),this.addProcessorByPriority(e,t),this.afterRegistered(e),e},i.tryRegister=function(e,t){void 0===t&&(t=null);try{return this.register(e,t)}catch(e){}},i.unregister=function(e){if(e&&-1!==this.findProcessorIndexByID(e.id)){var t=this._steps.get(e.type);t&&t.length&&(this._steps.set(e.type,t.filter(function(t){return t!=e})),this.emit("updated",e))}},i.addProcessorByPriority=function(e,t){var i=this._steps.get(e.type);if(!i){var n=[];this._steps.set(e.type,n),i=n}if(null===t||t<0)i.push(e);else if(i[t]){var s=i.slice(0,t-1),r=i.slice(t+1);this._steps.set(e.type,s.concat(e).concat(r))}else i[t]=e},i.getStepsByType=function(e){return this.steps.filter(function(t){return t.type===e})},i.getSortedProcessorTypes=function(){return Object.keys(tu).filter(function(e){return!isNaN(Number(e))}).map(function(e){return Number(e)})},i.process=function(e){try{var t=function(e){return i.lastProcessorIndexUpdated=s.length,i.emit("afterProcess",r),r},i=this,n=i.lastProcessorIndexUpdated,s=i.steps,r=e,o=function(e,t){try{var o=function(e,t){if("function"==typeof e[og]){var i,n,s,r=e[og]();if(function e(o){try{for(;!(i=r.next()).done;)if((o=t(i.value))&&o.then){if(!cg(o))return void o.then(e,s||(s=ag.bind(null,n=new lg,2)));o=o.v}n?ag(n,1,o):n=o}catch(e){ag(n||(n=new lg),2,e)}}(),r.return){var o=function(e){try{i.done||r.return()}catch(e){}return e};if(n&&n.then)return n.then(o,function(e){throw o(e)});o()}return n}if(!("length"in e))throw new TypeError("Object is not iterable");for(var a=[],l=0;l<e.length;l++)a.push(e[l]);return function(e,t){var i,n,s=-1;return function r(o){try{for(;++s<e.length;)if((o=t(s))&&o.then){if(!cg(o))return void o.then(r,n||(n=ag.bind(null,i=new lg,2)));o=o.v}i?ag(i,1,o):i=o}catch(e){ag(i||(i=new lg),2,e)}}(),i}(a,function(e){return t(a[e])})}(s,function(e){var t=i.findProcessorIndexByID(e.id),s=function(){if(t>=n)return Promise.resolve(e.process(r)).then(function(t){i.cache.set(e.id,r=t)});r=i.cache.get(e.id)}();if(s&&s.then)return s.then(function(){})})}catch(e){return t(e)}return o&&o.then?o.then(void 0,t):o}(0,function(e){throw Zu.error(e),i.emit("error",r),e});return Promise.resolve(o&&o.then?o.then(t):t())}catch(e){return Promise.reject(e)}},i.findProcessorIndexByID=function(e){return this.steps.findIndex(function(t){return t.id==e})},i.setLastProcessorIndex=function(e){var t=this.findProcessorIndexByID(e.id);this.lastProcessorIndexUpdated>t&&(this.lastProcessorIndexUpdated=t)},i.processorPropsUpdated=function(e){this.setLastProcessorIndex(e),this.emit("propsUpdated"),this.emit("updated",e)},i.afterRegistered=function(e){this.setLastProcessorIndex(e),this.emit("afterRegister"),this.emit("updated",e)},cp(t,[{key:"steps",get:function(){for(var e,t=[],i=mp(this.getSortedProcessorTypes());!(e=i()).done;){var n=this._steps.get(e.value);n&&n.length&&(t=t.concat(n))}return t.filter(function(e){return e})}}]),t}(ru),hg=function(e){function t(){return e.apply(this,arguments)||this}return hp(t,e),t.prototype._process=function(e){try{return Promise.resolve(this.props.storage.get(e))}catch(e){return Promise.reject(e)}},cp(t,[{key:"type",get:function(){return tu.Extractor}}]),t}(au),pg=function(e){function t(){return e.apply(this,arguments)||this}return hp(t,e),t.prototype._process=function(e){var t=su.fromArray(e.data);return t.length=e.total,t},cp(t,[{key:"type",get:function(){return tu.Transformer}}]),t}(au),ug=function(e){function t(){return e.apply(this,arguments)||this}return hp(t,e),t.prototype._process=function(){return Object.entries(this.props.serverStorageOptions).filter(function(e){return"function"!=typeof e[1]}).reduce(function(e,t){var i;return dp({},e,((i={})[t[0]]=t[1],i))},{})},cp(t,[{key:"type",get:function(){return tu.Initiator}}]),t}(au),gg=function(e){function t(){return e.apply(this,arguments)||this}hp(t,e);var i=t.prototype;return i.castData=function(e){if(!e||!e.length)return[];if(!this.props.header||!this.props.header.columns)return e;var t=tg.leafColumns(this.props.header.columns);return e[0]instanceof Array?e.map(function(e){var i=0;return t.map(function(t,n){return void 0!==t.data?(i++,"function"==typeof t.data?t.data(e):t.data):e[n-i]})}):"object"!=typeof e[0]||e[0]instanceof Array?[]:e.map(function(e){return t.map(function(t,i){return void 0!==t.data?"function"==typeof t.data?t.data(e):t.data:t.id?e[t.id]:(Zu.error("Could not find the correct cell for column at position "+i+".\n                          Make sure either 'id' or 'selector' is defined for all columns."),null)})})},i._process=function(e){return{data:this.castData(e.data),total:e.total}},cp(t,[{key:"type",get:function(){return tu.Transformer}}]),t}(au),mg=function(){function e(){}return e.createFromConfig=function(e){var t=new dg;return e.storage instanceof sg&&t.register(new ug({serverStorageOptions:e.server})),t.register(new hg({storage:e.storage})),t.register(new gg({header:e.header})),t.register(new pg),t},e}(),fg=function(e){var t=this;this.state=void 0,this.listeners=[],this.isDispatching=!1,this.getState=function(){return t.state},this.getListeners=function(){return t.listeners},this.dispatch=function(e){if("function"!=typeof e)throw new Error("Reducer is not a function");if(t.isDispatching)throw new Error("Reducers may not dispatch actions");t.isDispatching=!0;var i=t.state;try{t.state=e(t.state)}finally{t.isDispatching=!1}for(var n,s=mp(t.listeners);!(n=s()).done;)(0,n.value)(t.state,i);return t.state},this.subscribe=function(e){if("function"!=typeof e)throw new Error("Listener is not a function");return t.listeners=[].concat(t.listeners,[e]),function(){return t.listeners=t.listeners.filter(function(t){return t!==e})}},this.state=e},bg=function(e,t){var i={__c:t="__cC"+kp++,__:null,Consumer:function(e,t){return e.children(t)},Provider:function(e){var i,n;return this.getChildContext||(i=[],(n={})[t]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&i.some(Np)},this.sub=function(e){i.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){i.splice(i.indexOf(e),1),t&&t.call(e)}}),e.children}};return i.Provider.__=i.Consumer.contextType=i}(),yg=function(){function e(){Object.assign(this,e.defaultConfig())}var t=e.prototype;return t.assign=function(e){return Object.assign(this,e)},t.update=function(t){return t?(this.assign(e.fromPartialConfig(dp({},this,t))),this):this},e.defaultConfig=function(){return{store:new fg({status:fp.Init,header:void 0,data:null}),plugin:new Xu,tableRef:{current:null},width:"100%",height:"auto",processingThrottleMs:100,autoWidth:!0,style:{},className:{}}},e.fromPartialConfig=function(t){var i=(new e).assign(t);return"boolean"==typeof t.sort&&t.sort&&i.assign({sort:{multiColumn:!0}}),i.assign({header:tg.createFromConfig(i)}),i.assign({storage:rg.createFromConfig(i)}),i.assign({pipeline:mg.createFromConfig(i)}),i.assign({translator:new Fu(i.language)}),i.plugin=new Xu,i.search&&i.plugin.add({id:"search",position:Ju.Header,component:Uu}),i.pagination&&i.plugin.add({id:"pagination",position:Ju.Footer,component:Wu}),i.plugins&&i.plugins.forEach(function(e){return i.plugin.add(e)}),i},e}();function vg(e){var t,i=ju();return $p("td",dp({role:e.role,colSpan:e.colSpan,"data-column-id":e.column&&e.column.id,className:du(cu("td"),e.className,i.className.td),style:dp({},e.style,i.style.td),onClick:function(t){e.messageCell||i.eventEmitter.emit("cellClick",t,e.cell,e.column,e.row)}},(t=e.column)?"function"==typeof t.attributes?t.attributes(e.cell.data,e.row,e.column):t.attributes:{}),e.column&&"function"==typeof e.column.formatter?e.column.formatter(e.cell.data,e.row,e.column):e.column&&e.column.plugin?$p(eg,{pluginId:e.column.id,props:{column:e.column,cell:e.cell,row:e.row}}):e.cell.data)}function _g(e){var t=ju(),i=qu(function(e){return e.header});return $p("tr",{className:du(cu("tr"),t.className.tr),onClick:function(i){e.messageRow||t.eventEmitter.emit("rowClick",i,e.row)}},e.children?e.children:e.row.cells.map(function(t,n){var s=function(e){if(i){var t=tg.leafColumns(i.columns);if(t)return t[e]}return null}(n);return s&&s.hidden?null:$p(vg,{key:t.id,cell:t,row:e.row,column:s})}))}function wg(e){return $p(_g,{messageRow:!0},$p(vg,{role:"alert",colSpan:e.colSpan,messageCell:!0,cell:new iu(e.message),className:du(cu("message"),e.className?e.className:null)}))}function xg(){var e=ju(),t=qu(function(e){return e.data}),i=qu(function(e){return e.status}),n=qu(function(e){return e.header}),s=Mu(),r=function(){return n?n.visibleColumns.length:0};return $p("tbody",{className:du(cu("tbody"),e.className.tbody)},t&&t.rows.map(function(e){return $p(_g,{key:e.id,row:e})}),i===fp.Loading&&(!t||0===t.length)&&$p(wg,{message:s("loading"),colSpan:r(),className:du(cu("loading"),e.className.loading)}),i===fp.Rendered&&t&&0===t.length&&$p(wg,{message:s("noRecordsFound"),colSpan:r(),className:du(cu("notfound"),e.className.notfound)}),i===fp.Error&&$p(wg,{message:s("error"),colSpan:r(),className:du(cu("error"),e.className.error)}))}var kg=function(e){function t(){return e.apply(this,arguments)||this}hp(t,e);var i=t.prototype;return i.validateProps=function(){for(var e,t=mp(this.props.columns);!(e=t()).done;){var i=e.value;void 0===i.direction&&(i.direction=1),1!==i.direction&&-1!==i.direction&&Zu.error("Invalid sort direction "+i.direction)}},i.compare=function(e,t){return e>t?1:e<t?-1:0},i.compareWrapper=function(e,t){for(var i,n=0,s=mp(this.props.columns);!(i=s()).done;){var r=i.value;if(0!==n)break;var o=e.cells[r.index].data,a=t.cells[r.index].data;n|="function"==typeof r.compare?r.compare(o,a)*r.direction:this.compare(o,a)*r.direction}return n},i._process=function(e){var t=[].concat(e.rows);t.sort(this.compareWrapper.bind(this));var i=new su(t);return i.length=e.length,i},cp(t,[{key:"type",get:function(){return tu.Sort}}]),t}(au),Ag=function(e,t,i,n){return function(s){var r,o=null!=(r=s.sort)&&r.columns?s.sort.columns.map(function(e){return dp({},e)}):[],a=o.length,l=o.find(function(t){return t.index===e}),c=!1,d=!1,h=!1,p=!1;if(void 0!==l?i?-1===l.direction?h=!0:p=!0:1===a?p=!0:a>1&&(d=!0,c=!0):0===a?c=!0:a>0&&!i?(c=!0,d=!0):a>0&&i&&(c=!0),d&&(o=[]),c)o.push({index:e,direction:t,compare:n});else if(p){var u=o.indexOf(l);o[u].direction=t}else if(h){var g=o.indexOf(l);o.splice(g,1)}return dp({},s,{sort:{columns:o}})}},Sg=function(e,t,i){return function(n){var s=(n.sort?[].concat(n.sort.columns):[]).find(function(t){return t.index===e});return dp({},n,s?Ag(e,1===s.direction?-1:1,t,i)(n):Ag(e,1,t,i)(n))}},Cg=function(e){function t(){return e.apply(this,arguments)||this}return hp(t,e),t.prototype._process=function(e){var t={};return this.props.url&&(t.url=this.props.url(e.url,this.props.columns)),this.props.body&&(t.body=this.props.body(e.body,this.props.columns)),dp({},e,t)},cp(t,[{key:"type",get:function(){return tu.ServerSort}}]),t}(au);function Eg(e){var t=ju(),i=zu().dispatch,n=Mu(),s=Su(0),r=s[0],o=s[1],a=t.sort,l=qu(function(e){return e.sort}),c="object"==typeof(null==a?void 0:a.server)?tu.ServerSort:tu.Sort,d=function(){var e=t.pipeline.getStepsByType(c);if(e.length)return e[0]};return Cu(function(){var e=d()||(c===tu.ServerSort?new Cg(dp({columns:l?l.columns:[]},a.server)):new kg({columns:l?l.columns:[]}));return t.pipeline.tryRegister(e),function(){return t.pipeline.unregister(e)}},[t]),Cu(function(){if(l){var t,i=l.columns.find(function(t){return t.index===e.index});i?(0===r&&(i.direction=null!=(t=e.direction)?t:1),o(i.direction)):o(0)}},[l]),Cu(function(){var e=d();e&&l&&e.setProps({columns:l.columns})},[l]),$p("button",{tabIndex:-1,"aria-label":n("sort.sort"+(1===r?"Desc":"Asc")),title:n("sort.sort"+(1===r?"Desc":"Asc")),className:du(cu("sort"),cu("sort",function(e){return 1===e?"asc":-1===e?"desc":"neutral"}(r)),t.className.sort),onClick:function(t){t.preventDefault(),t.stopPropagation(),i(Sg(e.index,!0===t.shiftKey&&a.multiColumn,e.compare))}})}var Og=function(e,t){var i;void 0===t&&(t=100);var n=Date.now(),s=function(){n=Date.now(),e.apply(void 0,[].slice.call(arguments))};return function(){var e=[].slice.call(arguments),r=Date.now()-n;r>=t?s.apply(void 0,e):(i&&clearTimeout(i),i=setTimeout(function(){s.apply(void 0,e),i=null},t-r))}};function $g(e){var t,i=function(e){return e instanceof MouseEvent?Math.floor(e.pageX):Math.floor(e.changedTouches[0].pageX)},n=function(n){n.stopPropagation();var o=parseInt(e.thRef.current.style.width,10)-i(n);t=Og(function(e){return s(e,o)},10),document.addEventListener("mouseup",r),document.addEventListener("touchend",r),document.addEventListener("mousemove",t),document.addEventListener("touchmove",t)},s=function(t,n){t.stopPropagation();var s=e.thRef.current;n+i(t)>=parseInt(s.style.minWidth,10)&&(s.style.width=n+i(t)+"px")},r=function e(i){i.stopPropagation(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",t),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",e)};return $p("div",{className:du(cu("th"),cu("resizable")),onMouseDown:n,onTouchStart:n,onClick:function(e){return e.stopPropagation()}})}function Tg(e){var t=ju(),i=Eu(null),n=Su({}),s=n[0],r=n[1],o=zu().dispatch;Cu(function(){if(t.fixedHeader&&i.current){var e=i.current.offsetTop;"number"==typeof e&&r({top:e})}},[i]);var a,l=function(){return null!=e.column.sort},c=function(i){i.stopPropagation(),l()&&o(Sg(e.index,!0===i.shiftKey&&t.sort.multiColumn,e.column.sort.compare))};return $p("th",dp({ref:i,"data-column-id":e.column&&e.column.id,className:du(cu("th"),l()?cu("th","sort"):null,t.fixedHeader?cu("th","fixed"):null,t.className.th),onClick:c,style:dp({},t.style.th,{minWidth:e.column.minWidth,width:e.column.width},s,e.style),onKeyDown:function(e){l()&&13===e.which&&c(e)},rowSpan:e.rowSpan>1?e.rowSpan:void 0,colSpan:e.colSpan>1?e.colSpan:void 0},(a=e.column)?"function"==typeof a.attributes?a.attributes(null,null,e.column):a.attributes:{},l()?{tabIndex:0}:{}),$p("div",{className:cu("th","content")},void 0!==e.column.name?e.column.name:void 0!==e.column.plugin?$p(eg,{pluginId:e.column.plugin.id,props:{column:e.column}}):null),l()&&$p(Eg,dp({index:e.index},e.column.sort)),e.column.resizable&&e.index<t.header.visibleColumns.length-1&&$p($g,{column:e.column,thRef:i}))}function Ig(){var e,t=ju(),i=qu(function(e){return e.header});return i?$p("thead",{key:i.id,className:du(cu("thead"),t.className.thead)},(e=tg.tabularFormat(i.columns)).map(function(t,n){return function(e,t,n){var s=tg.leafColumns(i.columns);return $p(_g,null,e.map(function(e){return e.hidden?null:function(e,t,i,n){var s=function(e,t,i){var n=tg.maximumDepth(e),s=i-t;return{rowSpan:Math.floor(s-n-n/s),colSpan:e.columns&&e.columns.length||1}}(e,t,n);return $p(Tg,{column:e,index:i,colSpan:s.colSpan,rowSpan:s.rowSpan})}(e,t,s.indexOf(e),n)}))}(t,n,e.length)})):null}var Lg=function(e){return function(t){return dp({},t,{header:e})}};function Rg(){var e=ju(),t=Eu(null),i=zu().dispatch;return Cu(function(){t&&i(function(e){return function(t){return dp({},t,{tableRef:e})}}(t))},[t]),$p("table",{ref:t,role:"grid",className:du(cu("table"),e.className.table),style:dp({},e.style.table,{height:e.height})},$p(Ig,null),$p(xg,null))}function Pg(){var e=Su(!0),t=e[0],i=e[1],n=Eu(null),s=ju();return Cu(function(){0===n.current.children.length&&i(!1)},[n]),t?$p("div",{ref:n,className:du(cu("head"),s.className.header),style:dp({},s.style.header)},$p(eg,{position:Ju.Header})):null}function Ng(){var e=Eu(null),t=Su(!0),i=t[0],n=t[1],s=ju();return Cu(function(){0===e.current.children.length&&n(!1)},[e]),i?$p("div",{ref:e,className:du(cu("footer"),s.className.footer),style:dp({},s.style.footer)},$p(eg,{position:Ju.Footer})):null}function jg(){var e=ju(),t=zu().dispatch,i=qu(function(e){return e.status}),n=qu(function(e){return e.data}),s=qu(function(e){return e.tableRef}),r={current:null},o=Og(function(){try{t(function(e){return dp({},e,{status:fp.Loading})});var i=function(i,n){try{var s=Promise.resolve(e.pipeline.process()).then(function(e){t(function(e){return function(t){return e?dp({},t,{data:e,status:fp.Loaded}):t}}(e)),setTimeout(function(){t(function(e){return e.status===fp.Loaded?dp({},e,{status:fp.Rendered}):e})},0)})}catch(e){return n(e)}return s&&s.then?s.then(void 0,n):s}(0,function(e){Zu.error(e),t(function(e){return dp({},e,{data:null,status:fp.Error})})});return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},e.processingThrottleMs);return Cu(function(){return t(Lg(e.header)),o(),e.pipeline.on("updated",o),function(){return e.pipeline.off("updated",o)}},[]),Cu(function(){e.header&&i===fp.Loaded&&null!=n&&n.length&&t(Lg(e.header.adjustWidth(e,s,r)))},[n,e,r]),$p("div",{role:"complementary",className:du("gridjs",cu("container"),i===fp.Loading?cu("loading"):null,e.className.container),style:dp({},e.style.container,{width:e.width})},i===fp.Loading&&$p("div",{className:cu("loading-bar")}),$p(Pg,null),$p("div",{className:cu("wrapper"),style:{height:e.height}},$p(Rg,null)),$p(Ng,null),$p("div",{ref:r,id:"gridjs-temp",className:cu("temp")}))}var Dg=function(e){function t(t){var i;return(i=e.call(this)||this).config=void 0,i.plugin=void 0,i.config=(new yg).assign({instance:up(i),eventEmitter:up(i)}).update(t),i.plugin=i.config.plugin,i}hp(t,e);var i=t.prototype;return i.updateConfig=function(e){return this.config.update(e),this},i.createElement=function(){return $p(bg.Provider,{value:this.config,children:$p(jg,{})})},i.forceRender=function(){return this.config&&this.config.container||Zu.error("Container is empty. Make sure you call render() before forceRender()",!0),this.destroy(),Kp(this.createElement(),this.config.container),this},i.destroy=function(){this.config.pipeline.clearCache(),Kp(null,this.config.container)},i.render=function(e){return e||Zu.error("Container element cannot be null",!0),e.childNodes.length>0?(Zu.error("The container element "+e+" is not empty. Make sure the container is empty and call render() again"),this):(this.config.container=e,Kp(this.createElement(),e),this)},t}(ru);class Fg extends s{static get properties(){return Object.assign({label:{type:String},property:{type:String},sort:{type:Boolean},width:{type:String}},super.properties)}constructor(){super(),this.label="no-label",this.property=null,this.sort=!1,this.width=null}connectedCallback(){super.connectedCallback()}data(){const e={name:eu(`<pb-i18n key="${this.label}">${this.label}</pb-i18n>`),sort:{enabled:this.sort},formatter:e=>eu(e)};return this.property&&(e.id=this.property),this.width&&(e.width=this.width),e}}customElements.define("pb-table-column",Fg);class Mg extends(o(s)){static get properties(){return Object.assign({source:{type:String},cssPath:{type:String,attribute:"css-path"},resizable:{type:Boolean},subforms:{type:String},perPage:{type:Number,attribute:"per-page"},height:{type:String},search:{type:Boolean},_params:{type:Object},_initialized:{type:Boolean}},super.properties)}constructor(){super(),this.cssPath="../css/gridjs",this._params={},this.resizable=!1,this.search=!1,this.perPage=10,this.height=null,this.fixedHeader=!1,this._initialized=!1}async connectedCallback(){if(super.connectedCallback(),this.subscribeTo("pb-search-resubmit",e=>{this._submit()}),y.subscribe(this,e=>{this._params=e,this._submit()}),this.subscribeTo("pb-i18n-update",e=>{const t=this.language&&this.language!==e.detail.language;this.language=e.detail.language,t&&this._submit()},[]),!this.height){const e=getComputedStyle(this).getPropertyValue("--pb-table-grid-height");this.height=e||"auto"}const e=await f([`${r(this.cssPath)}/mermaid.min.css`]),t=b(this),i=[...this.shadowRoot.adoptedStyleSheets];e&&i.push(e),t&&i.push(t),this.shadowRoot.adoptedStyleSheets=i}firstUpdated(){a("pb-page-ready",e=>{e&&e.language&&(this.language=e.language),this._params=y.state,this._initGrid()}),requestAnimationFrame(()=>this._initGrid())}_initGrid(){if(this._initialized||this.grid)return;const e=this.shadowRoot.getElementById("table");if(!e)return;const t=this.querySelectorAll("pb-table-column"),i=[];t.forEach(e=>i.push(e.data()));const n=this.getEndpoint&&this.getEndpoint()||".",s=this.toAbsoluteURL(this.source,n),r={height:this.height,fixedHeader:!0,columns:i,resizable:this.resizable,server:{url:s,then:e=>e.results,total:e=>e.count},sort:{multiColumn:!1,enabled:!0,server:{url:(e,t)=>{if(!t.length)return e;const n=t[0];return`${e}${e.indexOf("?")>-1?"&":"?"}order=${i[n.index].id}&dir=${1===n.direction?"asc":"desc"}`}}},pagination:{enabled:!0,limit:this.perPage,server:{url:(e,t,i)=>{const n=this.shadowRoot.getElementById("form");n&&Object.assign(this._params,this._serializeSearchForm(n)),this._params=this._paramsFromSubforms(this._params),this._params.limit=i,this._params.start=t*i+1,this.language&&(this._params.language=this.language),y.commit(this,this._params);const s=Object.assign({},this._params);return Object.keys(s).forEach(e=>{null===s[e]&&delete s[e]}),`${e}${e.indexOf("?")>-1?"&":"?"}${new URLSearchParams(s).toString()}`}}}};this.grid=new Dg(r),this.grid.on("load",()=>{this.emitTo("pb-results-received",{params:this._params})}),this.grid.render(e),this._initialized=!0}_submit(){this.grid&&this.grid.forceRender()}_handleFormSubmit(e){e.preventDefault(),this._submit()}_handleSearchKey(e){"Enter"===e.key&&(e.preventDefault(),this._submit())}_serializeSearchForm(e){const t={};Array.from(e.elements||[]).filter(e=>e.name&&!e.disabled&&!e.closest("[disabled]")).forEach(e=>{e.name in t||(t[e.name]=null)});return new FormData(e).forEach((e,i)=>{null==t[i]?t[i]=e:Array.isArray(t[i])?t[i].push(e):t[i]=[t[i],e]}),t}_paramsFromSubforms(e){return this.subforms&&document.querySelectorAll(this.subforms).forEach(t=>{t.serializeForm&&Object.assign(e,t.serializeForm())}),e}render(){return t`
      ${this.search?t`
            <form id="form" action="" @submit=${this._handleFormSubmit}>
              <label class="pb-table-grid__field" for="search">
                <span class="pb-table-grid__label">${p("search.search")}</span>
                <div class="pb-table-grid__search">
                  <input
                    id="search"
                    class="pb-table-grid__input"
                    type="search"
                    name="search"
                    .value=${this._params.search||""}
                    placeholder="${p("search.search")}"
                    @keydown=${this._handleSearchKey}
                  />
                  <button
                    class="pb-button pb-button--icon"
                    type="button"
                    aria-label="${p("search.search")}"
                    title="${p("search.search")}"
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
    `}}customElements.define("pb-table-grid",Mg);class Bg extends(m(o(s))){static get properties(){return Object.assign({url:{type:String},selected:{type:String},subforms:{type:String},_categories:{type:Array}},super.properties)}constructor(){super(),this._categories=[],this._params={},this.selected=null,this.subforms=null,this._initialized=!1}connectedCallback(){super.connectedCallback(),a("pb-page-ready",()=>{this.selected=y.state.category||this.selected,y.subscribe(this,e=>{console.log("<pb-split-list> popstate: %o",e),this.selected=e.category,this.submit(!1)})}),this.subscribeTo("pb-submit",this.load.bind(this))}firstUpdated(){super.firstUpdated(),a("pb-page-ready",()=>{this.load()})}submit(e=!0){this.load(e)}load(e=!0){const t=this._paramsFromSubforms({});this.selected&&(t.category=this.selected),e&&(this._initialized?y.commit(this,t):y.replace(this,t)),this._initialized=!0;const i=new URLSearchParams(t),n=`${this.toAbsoluteURL(this.url)}?${i.toString()}`;console.log(`<pb-split-list> Fetching from URL: ${n}`),this.emitTo("pb-start-update"),fetch(n).then(e=>e.ok?e.json():Promise.reject(e.status)).then(e=>{this._categories=e.categories,this.innerHTML=e.items.join(""),this.emitTo("pb-end-update")}).catch(e=>{console.error(`<pb-split-list> Error caught: ${e}`),this.emitTo("pb-end-update")})}_selectCategory(e,t){e.preventDefault(),this.selected=t,this.load()}_paramsFromSubforms(e){return this.subforms&&document.querySelectorAll(this.subforms).forEach(t=>{t.serializeForm&&Object.assign(e,t.serializeForm())}),e}render(){return t`
      <header>
        ${this._categories.map(e=>t`
              <a
                part="${this.selected===e.category?"active-category":"category"}"
                href="#${e.category}"
                title="${e.count}"
                class="${this.selected===e.category?"active":""}"
                @click="${t=>this._selectCategory(t,e.category)}"
              >
                ${e.label?v(e.label):e.category}
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
    `}}customElements.define("pb-split-list",Bg);class zg{constructor(e={},t=60,i=["D","W","M","Y","5Y","10Y"]){this.data={invalid:{},valid:{}},this.maxInterval=t,this.scopes=i,this._validateJsonData(e)}getMinDateStr(){return Object.keys(this.data.valid).sort()[0]}getMaxDateStr(){const e=Object.keys(this.data.valid);return e.sort()[e.length-1]}getMinDate(){return this._dateStrToUTCDate(this.getMinDateStr())}getMaxDate(){return this._dateStrToUTCDate(this.getMaxDateStr())}getEndOfRangeDate(e,t){return this._UTCDateToDateStr(this._increaseDateBy(e,t))}export(e){if(e=e||this._autoAssignScope(),!this.scopes.includes(e))throw new Error(`invalid scope provided, expected: ["10Y", "5Y", "Y", "M", "W", "D"]. Got: "${e}"`);const t={data:[],scope:e,binTitleRotated:this._binTitleRotatedLookup(e)};if(0===Object.keys(this.data.valid).length)return t;const i=this._classify(this.getMinDateStr(),e),n=this._getFirstDay(i);let s=this._dateStrToUTCDate(n);const r=this.getMaxDate();for(;s<=r;){const i=this._UTCDateToDateStr(s),n=this._classify(i,e);t.data.push(this._buildBinObject(i,n,e)),s=this._increaseDateBy(e,s)}if(Object.keys(this.data.valid).sort().forEach(i=>{const n=this._classify(i,e),s=t.data.find(e=>e.category===n);try{const e=this.data.valid[i];"object"==typeof e?(s.value+=e.count||0,e.info&&(s.info=s.info.concat(e.info))):s.value+=this.data.valid[i]||0}catch(e){console.log(e),console.log("currentCategory"),console.log(n)}}),this.data.invalid){let e=0,i=[];Object.values(this.data.invalid).forEach(t=>{"object"==typeof t?(e+=t.count||0,i=i.concat(t.info)):e+=t}),e>0&&t.data.push({tooltip:g("timeline.unknown"),title:g("timeline.unknown"),category:"?",separator:!0,value:e,info:i})}return t}_autoAssignScope(){for(let e=0;e<this.scopes.length;e++)if(this._computeIntervalSize(this.scopes[e])<=this.maxInterval)return this.scopes[e];throw new Error(`Interval too big! Computed: ${this._computeIntervalSize(this.scopes[i])}. Allowed: ${this.maxInterval}. Try to increase maxInterval.`)}_validateJsonData(e){Object.keys(e).sort().forEach(t=>{this._isValidDateStr(t)?this.data.valid[t]=e[t]:this.data.invalid[t]=e[t]})}_binTitleRotatedLookup(e){return{"10Y":!0,"5Y":!0,Y:!0,M:!1,W:!0,D:!0}[e]}_buildBinObject(e,t,i){const n=e.split("-"),s=n[0],r=n[1],o=n[2],a={dateStr:e,category:t,value:0,info:[]};if("10Y"===i)a.tooltip=`${t} - ${Number(t)+9}`,a.selectionStart=`${t}`,a.selectionEnd=`${Number(t)+9}`,Number(t)%100==0&&(a.title=`${t} - ${Number(t)+99}`,a.binTitle=t,a.seperator=!0);else if("5Y"===i)a.tooltip=`${t} - ${Number(t)+4}`,a.selectionStart=`${t}`,a.selectionEnd=`${Number(t)+4}`,Number(t)%50==0&&(a.title=`${t} - ${Number(t)+49}`,a.binTitle=t,a.seperator=!0);else if("Y"===i)a.tooltip=t,a.selectionStart=t,a.selectionEnd=t,Number(t)%10==0&&(a.title=`${t} - ${Number(t)+9}`,a.binTitle=`${t}`,a.seperator=!0);else if("M"===i){const e=Number(r),t=this._monthLookup(e);a.binTitle=t[0],a.tooltip=`${t} ${s}`,a.selectionStart=`${t} ${s}`,a.selectionEnd=`${t} ${s}`,1===e&&(a.title=s,a.seperator=!0)}else if("W"===i){const i=t.split("-")[1];a.tooltip=`${s} ${i}`,a.selectionStart=`${s} ${i}`,a.selectionEnd=`${s} ${i}`;const n=this._dateStrToUTCDate(e),r=this._addDays(n,-7);n.getUTCMonth()!==r.getUTCMonth()&&(a.binTitle=i,a.title=this._monthLookup(n.getUTCMonth()+1)),a.seperator="W1"===i}else{if("D"!==i)throw new Error(`invalid scope provided, expected: ["10Y", "5Y", "Y", "M", "W", "D"]. Got: "${i}"`);a.tooltip=e,a.selectionStart=e,a.selectionEnd=e,1===this._dateStrToUTCDate(e).getUTCDay()&&(a.binTitle=`${Number(o)}.${Number(r)}`,a.title=`${this._classify(e,"W").replace("-"," ")}`,a.seperator=!0)}return a}_classify(e,t){if(!e.match(/^\d{4}-\d{2}-\d{2}$/))throw new Error(`invalid dateStr format, expected "YYYY-MM-DD", got: "${e}".`);if(!e||!t)throw new Error(`both inputs must be provided. Got dateStr=${e}, scope=${t}`);switch(t){case"10Y":case"5Y":const i=Number(t.replace("Y",""));return(Math.floor(Number(e.split("-")[0])/i)*i).toString();case"Y":return e.substr(0,4);case"M":return e.substr(0,7);case"W":const n=this._dateStrToUTCDate(e);return this._UTCDateToWeekFormat(n);case"D":return e}}_getFirstDay(e){if(e.match(/^\d{4}-\d{2}-\d{2}$/))return e;if(e.match(/^\d{4}-\d{2}$/))return`${e}-01`;if(e.match(/^\d{4}$/))return`${e}-01-01`;if(e.match(/^\d{4}-W([1-9]|[1-4][0-9]|5[0-3])$/)){const t=e.split("-"),i=Number(t[0]),n=Number(t[1].replace("W",""));return this._getDateStrOfISOWeek(i,n)}throw new Error("invalid categoryStr")}_dateStrToUTCDate(e){if(!this._isValidDateStr(e))throw new Error(`invalid dateStr, expected "YYYY-MM-DD" with month[1-12] and day[1-31], got: "${e}".`);const t=e.split("-"),i=Number(t[0]),n=Number(t[1]),s=Number(t[2]);return new Date(Date.UTC(i,n-1,s))}_UTCDateToDateStr(e){return e.toISOString().split("T")[0]}_UTCDateToWeekFormat(e){return`${this._getISOWeekYear(e)}-W${this._getISOWeek(e)}`}_getISOWeek(e){const t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);const i=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-i.getTime())/864e5-3+(i.getDay()+6)%7)/7)}_getISOWeekYear(e){const t=new Date(e.getTime());return t.setDate(t.getDate()+3-(t.getDay()+6)%7),t.getFullYear()}_getDateStrOfISOWeek(e,t){const i=new Date(Date.UTC(e,0,1+7*(t-1))),n=i.getUTCDay(),s=i;return n<=4?s.setDate(i.getDate()-i.getUTCDay()+1):s.setDate(i.getDate()+8-i.getUTCDay()),s.toISOString().split("T")[0]}getIntervalSizes(){return{D:this._computeIntervalSize("D"),W:this._computeIntervalSize("W"),M:this._computeIntervalSize("M"),Y:this._computeIntervalSize("Y"),"5Y":this._computeIntervalSize("5Y"),"10Y":this._computeIntervalSize("10Y")}}_computeIntervalSize(e){const t=this.getMaxDateStr();if(!t)return 0;const i=this._dateStrToUTCDate(t),n=this._getFirstDay(this._classify(this.getMinDateStr(),e));let s=this._dateStrToUTCDate(n),r=0;for(;s<=i;)r++,s=this._increaseDateBy(e,s);return r}_increaseDateBy(e,t){switch(e){case"D":return this._addDays(t,1);case"W":return this._addDays(t,7);case"M":return this._addMonths(t,1);case"Y":return this._addYears(t,1);case"5Y":return this._addYears(t,5);case"10Y":return this._addYears(t,10)}}_addDays(e,t){const i=new Date(e.valueOf());return i.setUTCDate(i.getUTCDate()+t),i}_addMonths(e,t){const i=new Date(e.valueOf()),n=i.getUTCDate();return i.setUTCMonth(i.getUTCMonth()+ +t),i.getUTCDate()!=n&&i.setUTCDate(0),i}_addYears(e,t){const i=new Date(e.valueOf());return i.setUTCFullYear(i.getUTCFullYear()+t),i}_isValidDateStr(e){if(!e)return!1;const t=e.split("-");if(3!==t.length)return!1;const i=t[0],n=t[1],s=t[2];return"0000"!==i&&"00"!==s&&"00"!==n&&(!(Number(s)<1||Number(s)>31)&&!(Number(n)<1||Number(n)>12))}_monthLookup(e){if(e>12||e<1)throw new Error(`invalid 'num' provided, expected 1-12. Got: ${e}`);return{1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}[e.toString()]}}class qg{constructor(){}run(e){this.input=e,this.day="??",this.month="??",this.year="????";const t=this.input.match(this._isoMatchRegex()),i=this.input.match(this._customRegex()),n=this.input.match(this._weekMatchRegex()),s=this.input.match(this._yearAndMonthRegex());if(t){const e=t[1].split(/-|\/|\s/);this.year=e[0],this.month=this._setWithLeadingZero(e[1]),this.day=this._setWithLeadingZero(e[2])}else if(s){const e=s[1].split("-");this.year=e[0],this.month=this._setWithLeadingZero(e[1]),this.day="01"}else if(i){const e=i[0].split(/\.|\s|\/|-/);this.day=this._setWithLeadingZero(e[0]),this.month=this._setWithLeadingZero(e[1]),this.year=e[2]}else{if(n){const e=n[0].split(/\.|\s|\/|-/),t=Number(e[0]),i=Number(e[1].replace("W0","").replace("W",""));return this._getDateStrOfISOWeek(t,i)}this._findYear(),this._findMonth(),this._findDay()}return this._buildResult()}_buildResult(){return"????"!=this.year&&"??"===this.month&&(this.month="01"),"??"!=this.month&&"??"===this.day&&(this.day="01"),`${this.year}-${this.month}-${this.day}`}_isoMatchRegex(){return/(?:\s|^)(\d{4}(-|\s|\/)([0][1-9]|[1-9]|10|11|12)(-|\s|\/)([0][1-9]|[1-2][0-9]|3[01]|[1-9]))(?=\s|$|\.)/}_customRegex(){return/\d{1,2}(\.|\s|\/|-)\d{1,2}(\.|\s|\/|-)\d{4}/}_weekMatchRegex(){return/\d{4}(\.|\s|\/|-)W\d{1,2}(?=\s|$|\.)/}_yearAndMonthRegex(){return/(?:\s|^)(\d{4}-([0][1-9]|[1-9]|10|11|12))(?=\s|$)/}_findYear(){const e=/[1-9]{1}[0-9]{3}/,t=this.input.match(e);t&&(this.year=t[0],this._removeMatchFromInput(t))}_findMonth(){this._monthDictionaryValues().forEach(e=>{const t=new RegExp(`(?:\\s|^)(${e})(?=\\s|$|\\.)`,"i"),i=this.input.match(t);if(i)return this.month=this._monthDictionary()[i[1].toLowerCase()],this._removeMatchFromInput(i),this.month})}_findDay(){const e=/(?:\s|^)([0][1-9]|[1-2][0-9]|3[01]|[1-9])(?=\s|$|\.|st|nd|rd|th)/,t=this.input.match(e);t&&(this.day=this._setWithLeadingZero(t[1]))}_setWithLeadingZero(e){return 1==(e=e.toString()).length?`0${e}`:e}_removeMatchFromInput(e){if(e&&e[0]&&e.index){const t=e[0].length,i=this.input.split("");i.splice(e.index,t),this.input=i.join("")}}_monthDictionaryValues(){return Object.keys(this._monthDictionary())}_monthDictionary(){return{jan:"01",januar:"01",feb:"02",februar:"02",mär:"03",märz:"03",apr:"04",april:"04",mai:"05",mai:"05",jun:"06",juni:"06",jul:"07",juli:"07",aug:"08",august:"08",sep:"09",september:"09",okt:"10",oktober:"10",nov:"11",november:"11",dez:"12",dezember:"12",jan:"01",january:"01",feb:"02",february:"02",mar:"03",march:"03",apr:"04",april:"04",may:"05",may:"05",jun:"06",june:"06",jul:"07",july:"07",aug:"08",august:"08",sep:"09",september:"09",oct:"10",october:"10",nov:"11",november:"11",dec:"12",december:"12",janv:"01",janvier:"01",févr:"02","février'":"02",mars:"03",mars:"03",avr:"04",avril:"04",mai:"05",mai:"05",juin:"06",juin:"06",juil:"07",juillet:"07",août:"08",août:"08",sept:"09",septembre:"09",oct:"10",octobre:"10",nov:"11",novembre:"11",déc:"12",décembre:"12",gen:"01",gennaio:"01",feb:"02",febbraio:"02",mar:"03",marzo:"03",apr:"04",aprile:"04",mag:"05",maggio:"05",giu:"06",giugno:"06",lug:"07",luglio:"07",ago:"08",agosto:"08",set:"09",settembre:"09",ott:"10",ottobre:"10",nov:"11",novembre:"11",dic:"12",dicembre:"12"}}_getDateStrOfISOWeek(e,t){const i=new Date(e,0,1+7*(t-1)),n=i.getDay(),s=i;return n<=4?s.setDate(i.getDate()-i.getDay()+1):s.setDate(i.getDate()+8-i.getDay()),s.getFullYear()>e?`${e}-12-31`:s.getFullYear()<e?`${e}-01-01`:this._dateToDateStr(s)}_dateToDateStr(e){const t=new Date(e),i=this._setWithLeadingZero(t.getMonth()+1),n=this._setWithLeadingZero(t.getDate());return`${t.getFullYear()}-${i}-${n}`}}class Ug extends(m(o(s))){static get styles(){return n`
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
    `}static get properties(){return Object.assign(Object.assign({},super.properties),{},{startDate:{type:String,reflect:!0,attribute:"start-date"},endDate:{type:String,reflect:!0,attribute:"end-date"},scope:{type:String},scopes:{type:Array},maxInterval:{type:Number,attribute:"max-interval"},url:{type:String},auto:{type:Boolean},resettable:{type:Boolean},_language:{type:String}})}constructor(){super(),this.maxHeight=80,this.multiplier=.75,this.mousedown=!1,this.startDate="",this.endDate="",this.scope="",this.scopes=["D","W","M","Y","5Y","10Y"],this.maxInterval=60,this.url="",this.auto=!1,this.resettable=!1,this._language="en",this._resetSelectionProperty()}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-results-received",()=>{const e=this.shadowRoot.getElementById("loadData"),t=this.toAbsoluteURL(this.url,this.getEndpoint());e.url=t,e.generateRequest()}),this.subscribeTo("pb-i18n-update",e=>{this._language=e.detail.language})}firstUpdated(){this.bins=this.shadowRoot.querySelectorAll(".bin-container"),this.tooltip=this.shadowRoot.querySelector(".tooltip"),document.addEventListener("mouseup",()=>{this._mouseUp()}),document.addEventListener("pb-timeline-daterange-changed",e=>{const{startDateStr:t}=e.detail,{endDateStr:i}=e.detail;if(this._fullRangeSelected(t,i))return console.log("_fullRangeSelected() is true"),void this.resetSelection();this.select(t,i)}),document.addEventListener("pb-timeline-reset-selection",()=>{this.resetSelection(),this._hideTooltip()})}updated(e){e.has("scope")&&this.searchResult&&(this.scopes.includes(this.scope)?this.setData(this.searchResult.export(this.scope)):console.error("unknown scope ",this.scope))}setData(e){this.dataObj=e,this.maxValue=Math.max(...this.dataObj.data.map(e=>e.value)),this.requestUpdate(),this.updateComplete.then(()=>{this.bins=this.shadowRoot.querySelectorAll(".bin-container"),this.resetSelection(),this._resetTooltip()})}get label(){return this.dataObj&&0!==this.dataObj.data.length?1===this.dataObj.data.length?this.dataObj.data[0].category:`${this.dataObj.data[0].selectionStart} – ${this.dataObj.data[this.dataObj.data.length-1].selectionEnd}`:""}getSelectedStartDateStr(){return this.shadowRoot.querySelectorAll(".bin-container.selected")[0].dataset.selectionstart}getSelectedEndDateStr(){const e=this.shadowRoot.querySelectorAll(".bin-container.selected");return e[e.length-1].dataset.selectionend}getSelectedCategories(){const e=this.shadowRoot.querySelectorAll(".bin-container.selected"),t=[];return e.forEach(e=>t.push(e.dataset.category)),t}getSelectedItemCount(){const e=this.shadowRoot.querySelectorAll(".bin-container.selected");let t=0;return e.forEach(e=>{t+=parseInt(e.dataset.value)}),t}resetSelection(){this.bins.forEach(e=>{e.classList.remove("selected")}),this._resetSelectionProperty(),this._hideTooltip()}select(e,t){this.bins.forEach(i=>{i.dataset.isodatestr>=e&&i.dataset.isodatestr<=t?i.classList.add("selected"):i.classList.remove("selected")}),this._displayTooltip(),this._showtooltipSelection()}_fullRangeSelected(e,t){const i=this.bins[0].dataset.isodatestr,n=t===this.bins[this.bins.length-1].dataset.isodatestr;return i&&n}_mouseDown(e){this.resetSelection(),this.mousedown=!0,this.selection.start=this._getMousePosition(e).x,this._applySelectionToBins()}_mouseUp(){if(this.mousedown){this.mousedown=!1;const e=this.getSelectedStartDateStr(),t=this.getSelectedEndDateStr();if(e){const i=(new qg).run(e),n=(new qg).run(t),s=this.getSelectedItemCount();this._dispatchTimelineDaterangeChangedEvent(i,n,this.getSelectedCategories(),s)}}}_mouseMove(e){this.mousedown?(this._brushing(e),this._showtooltipSelection()):void 0===this.selection.start&&this._showtooltip(e)}_mouseenter(){this.dataObj&&this._displayTooltip()}_getMousePosition(e){const t=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect();return{x:e.clientX-t.left+1,y:e.clientY-t.top+1}}_brushing(e){this.selection.end=this._getMousePosition(e).x,this._applySelectionToBins()}_dispatchTimelineDaterangeChangedEvent(e,t,i,n){"????-??-??"===e?this.emitTo("pb-timeline-date-changed",{startDateStr:null,endDateStr:null,categories:["?"],count:n}):e===t?"D"!==this.dataObj.scope?this.emitTo("pb-timeline-daterange-changed",{startDateStr:e,endDateStr:this.searchResult.getEndOfRangeDate(this.dataObj.scope,t),scope:this.dataObj.scope,categories:i,count:n,label:this.label}):this.emitTo("pb-timeline-date-changed",{startDateStr:e,endDateStr:null,scope:this.dataObj.scope,categories:i,count:n,label:this.label}):this.emitTo("pb-timeline-daterange-changed",{startDateStr:e,endDateStr:t,categories:i,scope:this.dataObj.scope,count:n,label:this.label})}_dispatchPbTimelineResetSelectionEvent(){this.emitTo("pb-timeline-reset-selection")}_showtooltip(e){const t=this._getElementInterval(e.currentTarget),i=e.currentTarget.dataset.tooltip,n=this._numberWithCommas(e.currentTarget.dataset.value),s=e.currentTarget.querySelector(".info");this.tooltip.querySelector(".tooltip-text").innerHTML=`<div><strong>${i}</strong>: ${n}</div><ul>${s?s.innerHTML:""}</ul>`,this.tooltip.style.visibility="hidden",this.tooltip.style.display="block";const r=this.tooltip.offsetWidth;this.tooltip.style.visibility="",this.tooltip.style.display="";const o=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect().width;let a;const l=Math.round((t[0]+t[1])/2);this.tooltip.classList.remove("chevron-precise"),l+r/2>o?(a=Math.max(0,t[1]-r+10),this.tooltip.classList.add("right")):l-r/2<0?(a=Math.min(o-r,t[0]-10),this.tooltip.classList.remove("right")):(a=l-r/2,this.tooltip.classList.remove("right")),this.tooltip.style.left=`${a}px`;const c=l,d=a,h=Math.max(10,Math.min(r-10,c-d));this.tooltip.style.setProperty("--chevron-position",`${h}px`),this.tooltip.classList.add("chevron-precise")}_showtooltipSelection(){const e=this._getSelectedBins(),t=[this._getElementInterval(e[0])[0],this._getElementInterval(e[e.length-1])[1]],i=`${e[0].dataset.selectionstart} - ${e[e.length-1].dataset.selectionend}`,n=e.map(e=>Number(e.dataset.value)).reduce((e,t)=>e+t),s=this._numberWithCommas(n);this.tooltip.querySelector(".tooltip-text").innerHTML=`<strong>${i}</strong>: ${s}`,this.tooltip.querySelector(".tooltip-close").classList.remove("hidden"),this.tooltip.classList.add("draggable"),this.tooltip.style.visibility="hidden",this.tooltip.style.display="block";const r=this.tooltip.offsetWidth;this.tooltip.style.visibility="",this.tooltip.style.display="";const o=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect().width,a=Math.round((t[0]+t[1])/2);let l;this.tooltip.classList.remove("chevron-precise"),a+r/2>o?(l=Math.max(0,t[1]-r+10),this.tooltip.classList.add("right")):a-r/2<0?(l=Math.min(o-r,t[0]-10),this.tooltip.classList.remove("right")):(l=a-r/2,this.tooltip.classList.remove("right")),this.tooltip.style.left=`${l}px`;const c=a,d=l,h=Math.max(10,Math.min(r-10,c-d));this.tooltip.style.setProperty("--chevron-position",`${h}px`),this.tooltip.classList.add("chevron-precise")}_resetTooltip(){this._hideTooltip(),this.tooltip.style.left="-1000px",this.tooltip.querySelector(".tooltip-text").innerHTML=""}_hideTooltip(){void 0===this.selection.start&&(this.tooltip.classList.add("hidden"),this.tooltip.classList.remove("draggable"),this.tooltip.querySelector(".tooltip-close").classList.add("hidden"),this.tooltip.classList.remove("chevron-precise"))}_displayTooltip(){this.tooltip.classList.remove("hidden")}_getElementInterval(e){const t=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect(),i=e,n=[i.getBoundingClientRect().x,i.getBoundingClientRect().x+i.getBoundingClientRect().width];return[n[0]-t.left+1,n[1]-t.left+1,t.width/2]}_getSelectionInterval(){return[this.selection.start,this.selection.end].sort((e,t)=>e-t)}_getSelectedBins(){return Array.prototype.slice.call(this.bins).filter(e=>e.classList.contains("selected"))}_resetSelectionProperty(){this.selection={start:void 0,end:void 0}}_applySelectionToBins(){const e=this._getSelectionInterval();this.bins.forEach(t=>{const i=this._getElementInterval(t);this._areOverlapping(i,e)?t.classList.add("selected"):t.classList.remove("selected")})}_numberWithCommas(e){return new Intl.NumberFormat(this._language,{style:"decimal"}).format(e)}_areOverlapping(e,t){return t[0]<e[0]?t[1]>e[0]:t[0]<e[1]}render(){return t`
      <div class="label" part="label">
        <span class="label"><slot name="label"></slot>${this.label}</span>
        ${this.resettable?t`
              <button
                id="clear"
                title="${p("timeline.clear")}"
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
          ${e.info.map(e=>t`<li>${v(e)}</li>`)}
        </ul>
      `:null}async _handleResponse(){await this.updateComplete;const e=this.shadowRoot.getElementById("loadData").lastResponse;let t={};this.startDate&&this.endDate?Object.keys(e).filter(e=>e>=this.startDate&&e<this.endDate).forEach(i=>{t[i]=e[i]}):t=e,this.searchResult=new zg(t,this.maxInterval,this.scopes),this.setData(this.searchResult.export(this.scope)),this.emitTo("pb-timeline-loaded",{value:!0,label:this.label})}}function Hg(e,t){e.split(/\s+/).forEach(e=>{t(e)})}customElements.define("pb-timeline",Ug);class Vg{constructor(){this._events={}}on(e,t){Hg(e,e=>{const i=this._events[e]||[];i.push(t),this._events[e]=i})}off(e,t){var i=arguments.length;0!==i?Hg(e,e=>{if(1===i)return void delete this._events[e];const n=this._events[e];void 0!==n&&(n.splice(n.indexOf(t),1),this._events[e]=n)}):this._events={}}trigger(e,...t){var i=this;Hg(e,e=>{const n=i._events[e];void 0!==n&&n.forEach(e=>{e.apply(i,t)})})}}function Wg(e){return e.plugins={},class extends e{constructor(){super(...arguments),this.plugins={names:[],settings:{},requested:{},loaded:{}}}static define(t,i){e.plugins[t]={name:t,fn:i}}initializePlugins(e){var t,i;const n=this,s=[];if(Array.isArray(e))e.forEach(e=>{"string"==typeof e?s.push(e):(n.plugins.settings[e.name]=e.options,s.push(e.name))});else if(e)for(t in e)e.hasOwnProperty(t)&&(n.plugins.settings[t]=e[t],s.push(t));for(;i=s.shift();)n.require(i)}loadPlugin(t){var i=this,n=i.plugins,s=e.plugins[t];if(!e.plugins.hasOwnProperty(t))throw new Error('Unable to find "'+t+'" plugin');n.requested[t]=!0,n.loaded[t]=s.fn.apply(i,[i.plugins.settings[t]||{}]),n.names.push(t)}require(e){var t=this,i=t.plugins;if(!t.plugins.loaded.hasOwnProperty(e)){if(i.requested[e])throw new Error('Plugin has circular dependency ("'+e+'")');t.loadPlugin(e)}return i.loaded[e]}}}const Yg=e=>(e=e.filter(Boolean)).length<2?e[0]||"":1==Zg(e)?"["+e.join("")+"]":"(?:"+e.join("|")+")",Gg=e=>{if(!Kg(e))return e.join("");let t="",i=0;const n=()=>{i>1&&(t+="{"+i+"}")};return e.forEach((s,r)=>{s!==e[r-1]?(n(),t+=s,i=1):i++}),n(),t},Qg=e=>{let t=Array.from(e);return Yg(t)},Kg=e=>new Set(e).size!==e.length,Jg=e=>(e+"").replace(/([\$\(\)\*\+\.\?\[\]\^\{\|\}\\])/gu,"\\$1"),Zg=e=>e.reduce((e,t)=>Math.max(e,Xg(t)),0),Xg=e=>Array.from(e).length,em=e=>{if(1===e.length)return[[e]];let t=[];const i=e.substring(1);return em(i).forEach(function(i){let n=i.slice(0);n[0]=e.charAt(0)+n[0],t.push(n),n=i.slice(0),n.unshift(e.charAt(0)),t.push(n)}),t},tm=[[0,65535]],im="[̀-ͯ·ʾʼ]";let nm,sm;const rm=3,om={},am={"/":"⁄∕",0:"߀",a:"ⱥɐɑ",aa:"ꜳ",ae:"æǽǣ",ao:"ꜵ",au:"ꜷ",av:"ꜹꜻ",ay:"ꜽ",b:"ƀɓƃ",c:"ꜿƈȼↄ",d:"đɗɖᴅƌꮷԁɦ",e:"ɛǝᴇɇ",f:"ꝼƒ",g:"ǥɠꞡᵹꝿɢ",h:"ħⱨⱶɥ",i:"ɨı",j:"ɉȷ",k:"ƙⱪꝁꝃꝅꞣ",l:"łƚɫⱡꝉꝇꞁɭ",m:"ɱɯϻ",n:"ꞥƞɲꞑᴎлԉ",o:"øǿɔɵꝋꝍᴑ",oe:"œ",oi:"ƣ",oo:"ꝏ",ou:"ȣ",p:"ƥᵽꝑꝓꝕρ",q:"ꝗꝙɋ",r:"ɍɽꝛꞧꞃ",s:"ßȿꞩꞅʂ",t:"ŧƭʈⱦꞇ",th:"þ",tz:"ꜩ",u:"ʉ",v:"ʋꝟʌ",vy:"ꝡ",w:"ⱳ",y:"ƴɏỿ",z:"ƶȥɀⱬꝣ",hv:"ƕ"};for(let e in am){let t=am[e]||"";for(let i=0;i<t.length;i++){let n=t.substring(i,i+1);om[n]=e}}const lm=new RegExp(Object.keys(om).join("|")+"|"+im,"gu"),cm=e=>{void 0===nm&&(nm=mm(tm))},dm=(e,t="NFKD")=>e.normalize(t),hm=e=>Array.from(e).reduce((e,t)=>e+pm(t),""),pm=e=>(e=dm(e).toLowerCase().replace(lm,e=>om[e]||""),dm(e,"NFC"));function*um(e){for(const[t,i]of e)for(let e=t;e<=i;e++){let t=String.fromCharCode(e),i=hm(t);i!=t.toLowerCase()&&(i.length>rm||0!=i.length&&(yield{folded:i,composed:t,code_point:e}))}}const gm=e=>{const t={},i=(e,i)=>{const n=t[e]||new Set,s=new RegExp("^"+Qg(n)+"$","iu");i.match(s)||(n.add(Jg(i)),t[e]=n)};for(let t of um(e))i(t.folded,t.folded),i(t.folded,t.composed);return t},mm=e=>{const t=gm(e),i={};let n=[];for(let e in t){let s=t[e];s&&(i[e]=Qg(s)),e.length>1&&n.push(Jg(e))}n.sort((e,t)=>t.length-e.length);const s=Yg(n);return sm=new RegExp("^"+s,"u"),i},fm=(e,t=1)=>{let i=0;return e=e.map(e=>(nm[e]&&(i+=e.length),nm[e]||e)),i>=t?Gg(e):""},bm=(e,t=1)=>(t=Math.max(t,e.length-1),Yg(em(e).map(e=>fm(e,t)))),ym=(e,t=!0)=>{let i=e.length>1?1:0;return Yg(e.map(e=>{let n=[];const s=t?e.length():e.length()-1;for(let t=0;t<s;t++)n.push(bm(e.substrs[t]||"",i));return Gg(n)}))},vm=(e,t)=>{for(const i of t){if(i.start!=e.start||i.end!=e.end)continue;if(i.substrs.join("")!==e.substrs.join(""))continue;let t=e.parts;const n=e=>{for(const i of t){if(i.start===e.start&&i.substr===e.substr)return!1;if(1!=e.length&&1!=i.length){if(e.start<i.start&&e.end>i.start)return!0;if(i.start<e.start&&i.end>e.start)return!0}}return!1};if(!(i.parts.filter(n).length>0))return!0}return!1};class _m{parts;substrs;start;end;constructor(){this.parts=[],this.substrs=[],this.start=0,this.end=0}add(e){e&&(this.parts.push(e),this.substrs.push(e.substr),this.start=Math.min(e.start,this.start),this.end=Math.max(e.end,this.end))}last(){return this.parts[this.parts.length-1]}length(){return this.parts.length}clone(e,t){let i=new _m,n=JSON.parse(JSON.stringify(this.parts)),s=n.pop();for(const e of n)i.add(e);let r=t.substr.substring(0,e-s.start),o=r.length;return i.add({start:s.start,end:s.start+o,length:o,substr:r}),i}}const wm=e=>{cm(),e=hm(e);let t="",i=[new _m];for(let n=0;n<e.length;n++){let s=e.substring(n).match(sm);const r=e.substring(n,n+1),o=s?s[0]:null;let a=[],l=new Set;for(const e of i){const t=e.last();if(!t||1==t.length||t.end<=n)if(o){const t=o.length;e.add({start:n,end:n+t,length:t,substr:o}),l.add("1")}else e.add({start:n,end:n+1,length:1,substr:r}),l.add("2");else if(o){let i=e.clone(n,t);const s=o.length;i.add({start:n,end:n+s,length:s,substr:o}),a.push(i)}else l.add("3")}if(a.length>0){a=a.sort((e,t)=>e.length()-t.length());for(let e of a)vm(e,i)||i.push(e)}else if(n>0&&1==l.size&&!l.has("3")){t+=ym(i,!1);let e=new _m;const n=i[0];n&&e.add(n.last()),i=[e]}}return t+=ym(i,!0),t},xm=(e,t)=>{if(e)return e[t]},km=(e,t)=>{if(e){for(var i,n=t.split(".");(i=n.shift())&&(e=e[i]););return e}},Am=(e,t,i)=>{var n,s;return e?(e+="",null==t.regex||-1===(s=e.search(t.regex))?0:(n=t.string.length/e.length,0===s&&(n+=.5),n*i)):0},Sm=(e,t)=>{var i=e[t];if("function"==typeof i)return i;i&&!Array.isArray(i)&&(e[t]=[i])},Cm=(e,t)=>{if(Array.isArray(e))e.forEach(t);else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},Em=(e,t)=>"number"==typeof e&&"number"==typeof t?e>t?1:e<t?-1:0:(e=hm(e+"").toLowerCase())>(t=hm(t+"").toLowerCase())?1:t>e?-1:0;class Om{items;settings;constructor(e,t){this.items=e,this.settings=t||{diacritics:!0}}tokenize(e,t,i){if(!e||!e.length)return[];const n=[],s=e.split(/\s+/);var r;return i&&(r=new RegExp("^("+Object.keys(i).map(Jg).join("|")+"):(.*)$")),s.forEach(e=>{let i,s=null,o=null;r&&(i=e.match(r))&&(s=i[1],e=i[2]),e.length>0&&(o=this.settings.diacritics?wm(e)||null:Jg(e),o&&t&&(o="\\b"+o)),n.push({string:e,regex:o?new RegExp(o,"iu"):null,field:s})}),n}getScoreFunction(e,t){var i=this.prepareSearch(e,t);return this._getScoreFunction(i)}_getScoreFunction(e){const t=e.tokens,i=t.length;if(!i)return function(){return 0};const n=e.options.fields,s=e.weights,r=n.length,o=e.getAttrFn;if(!r)return function(){return 1};const a=1===r?function(e,t){const i=n[0].field;return Am(o(t,i),e,s[i]||1)}:function(e,t){var i=0;if(e.field){const n=o(t,e.field);!e.regex&&n?i+=1/r:i+=Am(n,e,1)}else Cm(s,(n,s)=>{i+=Am(o(t,s),e,n)});return i/r};return 1===i?function(e){return a(t[0],e)}:"and"===e.options.conjunction?function(e){var n,s=0;for(let i of t){if((n=a(i,e))<=0)return 0;s+=n}return s/i}:function(e){var n=0;return Cm(t,t=>{n+=a(t,e)}),n/i}}getSortFunction(e,t){var i=this.prepareSearch(e,t);return this._getSortFunction(i)}_getSortFunction(e){var t,i=[];const n=this,s=e.options,r=!e.query&&s.sort_empty?s.sort_empty:s.sort;if("function"==typeof r)return r.bind(this);const o=function(t,i){return"$score"===t?i.score:e.getAttrFn(n.items[i.id],t)};if(r)for(let t of r)(e.query||"$score"!==t.field)&&i.push(t);if(e.query){t=!0;for(let e of i)if("$score"===e.field){t=!1;break}t&&i.unshift({field:"$score",direction:"desc"})}else i=i.filter(e=>"$score"!==e.field);return i.length?function(e,t){var n,s;for(let r of i){if(s=r.field,n=("desc"===r.direction?-1:1)*Em(o(s,e),o(s,t)))return n}return 0}:null}prepareSearch(e,t){const i={};var n=Object.assign({},t);if(Sm(n,"sort"),Sm(n,"sort_empty"),n.fields){Sm(n,"fields");const e=[];n.fields.forEach(t=>{"string"==typeof t&&(t={field:t,weight:1}),e.push(t),i[t.field]="weight"in t?t.weight:1}),n.fields=e}return{options:n,query:e.toLowerCase().trim(),tokens:this.tokenize(e,n.respect_word_boundaries,i),total:0,items:[],weights:i,getAttrFn:n.nesting?km:xm}}search(e,t){var i,n,s=this;n=this.prepareSearch(e,t),t=n.options,e=n.query;const r=t.score||s._getScoreFunction(n);e.length?Cm(s.items,(e,s)=>{i=r(e),(!1===t.filter||i>0)&&n.items.push({score:i,id:s})}):Cm(s.items,(e,t)=>{n.items.push({score:1,id:t})});const o=s._getSortFunction(n);return o&&n.items.sort(o),n.total=n.items.length,"number"==typeof t.limit&&(n.items=n.items.slice(0,t.limit)),n}}const $m=e=>null==e?null:Tm(e),Tm=e=>"boolean"==typeof e?e?"1":"0":e+"",Im=e=>(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Lm=(e,t)=>t>0?window.setTimeout(e,t):(e.call(null),null),Rm=(e,t)=>{var i;return function(n,s){var r=this;i&&(r.loading=Math.max(r.loading-1,0),clearTimeout(i)),i=setTimeout(function(){i=null,r.loadedSearches[n]=!0,e.call(r,n,s)},t)}},Pm=(e,t,i)=>{var n,s=e.trigger,r={};for(n of(e.trigger=function(){var i=arguments[0];if(-1===t.indexOf(i))return s.apply(e,arguments);r[i]=arguments},i.apply(e,[]),e.trigger=s,t))n in r&&s.apply(e,r[n])},Nm=e=>({start:e.selectionStart||0,length:(e.selectionEnd||0)-(e.selectionStart||0)}),jm=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},Dm=(e,t,i,n)=>{e.addEventListener(t,i,n)},Fm=(e,t)=>!!t&&(!!t[e]&&1===(t.altKey?1:0)+(t.ctrlKey?1:0)+(t.shiftKey?1:0)+(t.metaKey?1:0)),Mm=(e,t)=>{const i=e.getAttribute("id");return i||(e.setAttribute("id",t),t)},Bm=e=>e.replace(/[\\"']/g,"\\$&"),zm=(e,t)=>{t&&e.append(t)},qm=(e,t)=>{if(Array.isArray(e))e.forEach(t);else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},Um=e=>{if(e.jquery)return e[0];if(e instanceof HTMLElement)return e;if(Hm(e)){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},Hm=e=>"string"==typeof e&&e.indexOf("<")>-1,Vm=e=>e.replace(/['"\\]/g,"\\$&"),Wm=(e,t)=>{var i=document.createEvent("HTMLEvents");i.initEvent(t,!0,!1),e.dispatchEvent(i)},Ym=(e,t)=>{Object.assign(e.style,t)},Gm=(e,...t)=>{var i=Km(t);(e=Jm(e)).map(e=>{i.map(t=>{e.classList.add(t)})})},Qm=(e,...t)=>{var i=Km(t);(e=Jm(e)).map(e=>{i.map(t=>{e.classList.remove(t)})})},Km=e=>{var t=[];return qm(e,e=>{"string"==typeof e&&(e=e.trim().split(/[\t\n\f\r\s]/)),Array.isArray(e)&&(t=t.concat(e))}),t.filter(Boolean)},Jm=e=>(Array.isArray(e)||(e=[e]),e),Zm=(e,t,i)=>{if(!i||i.contains(e))for(;e&&e.matches;){if(e.matches(t))return e;e=e.parentNode}},Xm=(e,t=0)=>t>0?e[e.length-1]:e[0],ef=e=>0===Object.keys(e).length,tf=(e,t)=>{if(!e)return-1;t=t||e.nodeName;for(var i=0;e=e.previousElementSibling;)e.matches(t)&&i++;return i},nf=(e,t)=>{qm(t,(t,i)=>{null==t?e.removeAttribute(i):e.setAttribute(i,""+t)})},sf=(e,t)=>{e.parentNode&&e.parentNode.replaceChild(t,e)},rf=(e,t)=>{if(null===t)return;if("string"==typeof t){if(!t.length)return;t=new RegExp(t,"i")}const i=e=>{var i=e.data.match(t);if(i&&e.data.length>0){var n=document.createElement("span");n.className="highlight";var s=e.splitText(i.index);s.splitText(i[0].length);var r=s.cloneNode(!0);return n.appendChild(r),sf(s,n),1}return 0},n=e=>{1!==e.nodeType||!e.childNodes||/(script|style)/i.test(e.tagName)||"highlight"===e.className&&"SPAN"===e.tagName||Array.from(e.childNodes).forEach(e=>{s(e)})},s=e=>3===e.nodeType?i(e):(n(e),0);s(e)},of=e=>{var t=e.querySelectorAll("span.highlight");Array.prototype.forEach.call(t,function(e){var t=e.parentNode;t.replaceChild(e.firstChild,e),t.normalize()})},af=65,lf=13,cf=27,df=37,hf=38,pf=39,uf=40,gf=8,mf=46,ff=9,bf="undefined"!=typeof navigator&&/Mac/.test(navigator.userAgent)?"metaKey":"ctrlKey";var yf={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:null,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,shouldOpen:null,maxOptions:50,maxItems:null,hideSelected:null,duplicates:!1,addPrecedence:!1,selectOnTab:!1,preload:null,allowEmptyOption:!1,refreshThrottle:300,loadThrottle:300,loadingClass:"loading",dataAttr:null,optgroupField:"optgroup",valueField:"value",labelField:"text",disabledField:"disabled",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"ts-wrapper",controlClass:"ts-control",dropdownClass:"ts-dropdown",dropdownContentClass:"ts-dropdown-content",itemClass:"item",optionClass:"option",dropdownParent:null,controlInput:'<input type="text" autocomplete="off" size="1" />',copyClassesToDropdown:!1,placeholder:null,hidePlaceholder:null,shouldLoad:function(e){return e.length>0},render:{}};function vf(e,t){var i=Object.assign({},yf,t),n=i.dataAttr,s=i.labelField,r=i.valueField,o=i.disabledField,a=i.optgroupField,l=i.optgroupLabelField,c=i.optgroupValueField,d=e.tagName.toLowerCase(),h=e.getAttribute("placeholder")||e.getAttribute("data-placeholder");if(!h&&!i.allowEmptyOption){let t=e.querySelector('option[value=""]');t&&(h=t.textContent)}var p={placeholder:h,options:[],optgroups:[],items:[],maxItems:null},u=()=>{var t,d=p.options,h={},u=1;let g=0;var m=e=>{var t=Object.assign({},e.dataset),i=n&&t[n];return"string"==typeof i&&i.length&&(t=Object.assign(t,JSON.parse(i))),t},f=(e,t)=>{var n=$m(e.value);if(null!=n&&(n||i.allowEmptyOption)){if(h.hasOwnProperty(n)){if(t){var l=h[n][a];l?Array.isArray(l)?l.push(t):h[n][a]=[l,t]:h[n][a]=t}}else{var c=m(e);c[s]=c[s]||e.textContent,c[r]=c[r]||n,c[o]=c[o]||e.disabled,c[a]=c[a]||t,c.$option=e,c.$order=c.$order||++g,h[n]=c,d.push(c)}e.selected&&p.items.push(n)}},b=e=>{var t,i;(i=m(e))[l]=i[l]||e.getAttribute("label")||"",i[c]=i[c]||u++,i[o]=i[o]||e.disabled,i.$order=i.$order||++g,p.optgroups.push(i),t=i[c],qm(e.children,e=>{f(e,t)})};p.maxItems=e.hasAttribute("multiple")?null:1,qm(e.children,e=>{"optgroup"===(t=e.tagName.toLowerCase())?b(e):"option"===t&&f(e)})},g=()=>{const t=e.getAttribute(n);if(t)p.options=JSON.parse(t),qm(p.options,e=>{p.items.push(e[r])});else{var o=e.value.trim()||"";if(!i.allowEmptyOption&&!o.length)return;const t=o.split(i.delimiter);qm(t,e=>{const t={};t[s]=e,t[r]=e,p.options.push(t)}),p.items=t}};return"select"===d?u():g(),Object.assign({},yf,p,t)}var _f=0;class wf extends(Wg(Vg)){constructor(e,t){var i;super(),this.order=0,this.isOpen=!1,this.isDisabled=!1,this.isReadOnly=!1,this.isInvalid=!1,this.isValid=!0,this.isLocked=!1,this.isFocused=!1,this.isInputHidden=!1,this.isSetup=!1,this.ignoreFocus=!1,this.ignoreHover=!1,this.hasOptions=!1,this.lastValue="",this.caretPos=0,this.loading=0,this.loadedSearches={},this.activeOption=null,this.activeItems=[],this.optgroups={},this.options={},this.userOptions={},this.items=[],this.refreshTimeout=null,_f++;var n=Um(e);if(n.tomselect)throw new Error("Tom Select already initialized on this element");n.tomselect=this,i=(window.getComputedStyle&&window.getComputedStyle(n,null)).getPropertyValue("direction");const s=vf(n,t);this.settings=s,this.input=n,this.tabIndex=n.tabIndex||0,this.is_select_tag="select"===n.tagName.toLowerCase(),this.rtl=/rtl/i.test(i),this.inputId=Mm(n,"tomselect-"+_f),this.isRequired=n.required,this.sifter=new Om(this.options,{diacritics:s.diacritics}),s.mode=s.mode||(1===s.maxItems?"single":"multi"),"boolean"!=typeof s.hideSelected&&(s.hideSelected="multi"===s.mode),"boolean"!=typeof s.hidePlaceholder&&(s.hidePlaceholder="multi"!==s.mode);var r=s.createFilter;"function"!=typeof r&&("string"==typeof r&&(r=new RegExp(r)),r instanceof RegExp?s.createFilter=e=>r.test(e):s.createFilter=e=>this.settings.duplicates||!this.options[e]),this.initializePlugins(s.plugins),this.setupCallbacks(),this.setupTemplates();const o=Um("<div>"),a=Um("<div>"),l=this._render("dropdown"),c=Um('<div role="listbox" tabindex="-1">'),d=this.input.getAttribute("class")||"",h=s.mode;var p;(Gm(o,s.wrapperClass,d,h),Gm(a,s.controlClass),zm(o,a),Gm(l,s.dropdownClass,h),s.copyClassesToDropdown&&Gm(l,d),Gm(c,s.dropdownContentClass),zm(l,c),Um(s.dropdownParent||o).appendChild(l),Hm(s.controlInput))?(p=Um(s.controlInput),qm(["autocorrect","autocapitalize","autocomplete","spellcheck"],e=>{n.getAttribute(e)&&nf(p,{[e]:n.getAttribute(e)})}),p.tabIndex=-1,a.appendChild(p),this.focus_node=p):s.controlInput?(p=Um(s.controlInput),this.focus_node=p):(p=Um("<input/>"),this.focus_node=a);this.wrapper=o,this.dropdown=l,this.dropdown_content=c,this.control=a,this.control_input=p,this.setup()}setup(){const e=this,t=e.settings,i=e.control_input,n=e.dropdown,s=e.dropdown_content,r=e.wrapper,o=e.control,a=e.input,l=e.focus_node,c={passive:!0},d=e.inputId+"-ts-dropdown";nf(s,{id:d}),nf(l,{role:"combobox","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":d});const h=Mm(l,e.inputId+"-ts-control"),p="label[for='"+Vm(e.inputId)+"']",u=document.querySelector(p),g=e.focus.bind(e);if(u){Dm(u,"click",g),nf(u,{for:h});const t=Mm(u,e.inputId+"-ts-label");nf(l,{"aria-labelledby":t}),nf(s,{"aria-labelledby":t})}if(r.style.width=a.style.width,e.plugins.names.length){const t="plugin-"+e.plugins.names.join(" plugin-");Gm([r,n],t)}(null===t.maxItems||t.maxItems>1)&&e.is_select_tag&&nf(a,{multiple:"multiple"}),t.placeholder&&nf(i,{placeholder:t.placeholder}),!t.splitOn&&t.delimiter&&(t.splitOn=new RegExp("\\s*"+Jg(t.delimiter)+"+\\s*")),t.load&&t.loadThrottle&&(t.load=Rm(t.load,t.loadThrottle)),Dm(n,"mousemove",()=>{e.ignoreHover=!1}),Dm(n,"mouseenter",t=>{var i=Zm(t.target,"[data-selectable]",n);i&&e.onOptionHover(t,i)},{capture:!0}),Dm(n,"click",t=>{const i=Zm(t.target,"[data-selectable]");i&&(e.onOptionSelect(t,i),jm(t,!0))}),Dm(o,"click",t=>{var n=Zm(t.target,"[data-ts-item]",o);n&&e.onItemSelect(t,n)?jm(t,!0):""==i.value&&(e.onClick(),jm(t,!0))}),Dm(l,"keydown",t=>e.onKeyDown(t)),Dm(i,"keypress",t=>e.onKeyPress(t)),Dm(i,"input",t=>e.onInput(t)),Dm(l,"blur",t=>e.onBlur(t)),Dm(l,"focus",t=>e.onFocus(t)),Dm(i,"paste",t=>e.onPaste(t));const m=t=>{const s=t.composedPath()[0];if(!r.contains(s)&&!n.contains(s))return e.isFocused&&e.blur(),void e.inputState();s==i&&e.isOpen?t.stopPropagation():jm(t,!0)},f=()=>{e.isOpen&&e.positionDropdown()};Dm(document,"mousedown",m),Dm(window,"scroll",f,c),Dm(window,"resize",f,c),this._destroy=()=>{document.removeEventListener("mousedown",m),window.removeEventListener("scroll",f),window.removeEventListener("resize",f),u&&u.removeEventListener("click",g)},this.revertSettings={innerHTML:a.innerHTML,tabIndex:a.tabIndex},a.tabIndex=-1,a.insertAdjacentElement("afterend",e.wrapper),e.sync(!1),t.items=[],delete t.optgroups,delete t.options,Dm(a,"invalid",()=>{e.isValid&&(e.isValid=!1,e.isInvalid=!0,e.refreshState())}),e.updateOriginalInput(),e.refreshItems(),e.close(!1),e.inputState(),e.isSetup=!0,a.disabled?e.disable():a.readOnly?e.setReadOnly(!0):e.enable(),e.on("change",this.onChange),Gm(a,"tomselected","ts-hidden-accessible"),e.trigger("initialize"),!0===t.preload&&e.preload()}setupOptions(e=[],t=[]){this.addOptions(e),qm(t,e=>{this.registerOptionGroup(e)})}setupTemplates(){var e=this,t=e.settings.labelField,i=e.settings.optgroupLabelField,n={optgroup:e=>{let t=document.createElement("div");return t.className="optgroup",t.appendChild(e.options),t},optgroup_header:(e,t)=>'<div class="optgroup-header">'+t(e[i])+"</div>",option:(e,i)=>"<div>"+i(e[t])+"</div>",item:(e,i)=>"<div>"+i(e[t])+"</div>",option_create:(e,t)=>'<div class="create">Add <strong>'+t(e.input)+"</strong>&hellip;</div>",no_results:()=>'<div class="no-results">No results found</div>',loading:()=>'<div class="spinner"></div>',not_loading:()=>{},dropdown:()=>"<div></div>"};e.settings.render=Object.assign({},n,e.settings.render)}setupCallbacks(){var e,t,i={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",item_select:"onItemSelect",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(e in i)(t=this.settings[i[e]])&&this.on(e,t)}sync(e=!0){const t=this,i=e?vf(t.input,{delimiter:t.settings.delimiter}):t.settings;t.setupOptions(i.options,i.optgroups),t.setValue(i.items||[],!0),t.lastQuery=null}onClick(){var e=this;if(e.activeItems.length>0)return e.clearActiveItems(),void e.focus();e.isFocused&&e.isOpen?e.blur():e.focus()}onMouseDown(){}onChange(){Wm(this.input,"input"),Wm(this.input,"change")}onPaste(e){var t=this;t.isInputHidden||t.isLocked?jm(e):t.settings.splitOn&&setTimeout(()=>{var e=t.inputValue();if(e.match(t.settings.splitOn)){var i=e.trim().split(t.settings.splitOn);qm(i,e=>{$m(e)&&(this.options[e]?t.addItem(e):t.createItem(e))})}},0)}onKeyPress(e){var t=this;if(!t.isLocked){var i=String.fromCharCode(e.keyCode||e.which);return t.settings.create&&"multi"===t.settings.mode&&i===t.settings.delimiter?(t.createItem(),void jm(e)):void 0}jm(e)}onKeyDown(e){var t=this;if(t.ignoreHover=!0,t.isLocked)e.keyCode!==ff&&jm(e);else{switch(e.keyCode){case af:if(Fm(bf,e)&&""==t.control_input.value)return jm(e),void t.selectAll();break;case cf:return t.isOpen&&(jm(e,!0),t.close()),void t.clearActiveItems();case uf:if(!t.isOpen&&t.hasOptions)t.open();else if(t.activeOption){let e=t.getAdjacent(t.activeOption,1);e&&t.setActiveOption(e)}return void jm(e);case hf:if(t.activeOption){let e=t.getAdjacent(t.activeOption,-1);e&&t.setActiveOption(e)}return void jm(e);case lf:return void(t.canSelect(t.activeOption)?(t.onOptionSelect(e,t.activeOption),jm(e)):(t.settings.create&&t.createItem()||document.activeElement==t.control_input&&t.isOpen)&&jm(e));case df:return void t.advanceSelection(-1,e);case pf:return void t.advanceSelection(1,e);case ff:return void(t.settings.selectOnTab&&(t.canSelect(t.activeOption)&&(t.onOptionSelect(e,t.activeOption),jm(e)),t.settings.create&&t.createItem()&&jm(e)));case gf:case mf:return void t.deleteSelection(e)}t.isInputHidden&&!Fm(bf,e)&&jm(e)}}onInput(e){if(this.isLocked)return;const t=this.inputValue();this.lastValue!==t&&(this.lastValue=t,""!=t?(this.refreshTimeout&&window.clearTimeout(this.refreshTimeout),this.refreshTimeout=Lm(()=>{this.refreshTimeout=null,this._onInput()},this.settings.refreshThrottle)):this._onInput())}_onInput(){const e=this.lastValue;this.settings.shouldLoad.call(this,e)&&this.load(e),this.refreshOptions(),this.trigger("type",e)}onOptionHover(e,t){this.ignoreHover||this.setActiveOption(t,!1)}onFocus(e){var t=this,i=t.isFocused;if(t.isDisabled||t.isReadOnly)return t.blur(),void jm(e);t.ignoreFocus||(t.isFocused=!0,"focus"===t.settings.preload&&t.preload(),i||t.trigger("focus"),t.activeItems.length||(t.inputState(),t.refreshOptions(!!t.settings.openOnFocus)),t.refreshState())}onBlur(e){if(!1!==document.hasFocus()){var t=this;if(t.isFocused){t.isFocused=!1,t.ignoreFocus=!1;var i=()=>{t.close(),t.setActiveItem(),t.setCaret(t.items.length),t.trigger("blur")};t.settings.create&&t.settings.createOnBlur?t.createItem(null,i):i()}}}onOptionSelect(e,t){var i,n=this;t.parentElement&&t.parentElement.matches("[data-disabled]")||(t.classList.contains("create")?n.createItem(null,()=>{n.settings.closeAfterSelect&&n.close()}):void 0!==(i=t.dataset.value)&&(n.lastQuery=null,n.addItem(i),n.settings.closeAfterSelect&&n.close(),!n.settings.hideSelected&&e.type&&/click/.test(e.type)&&n.setActiveOption(t)))}canSelect(e){return!!(this.isOpen&&e&&this.dropdown_content.contains(e))}onItemSelect(e,t){var i=this;return!i.isLocked&&"multi"===i.settings.mode&&(jm(e),i.setActiveItem(t,e),!0)}canLoad(e){return!!this.settings.load&&!this.loadedSearches.hasOwnProperty(e)}load(e){const t=this;if(!t.canLoad(e))return;Gm(t.wrapper,t.settings.loadingClass),t.loading++;const i=t.loadCallback.bind(t);t.settings.load.call(t,e,i)}loadCallback(e,t){const i=this;i.loading=Math.max(i.loading-1,0),i.lastQuery=null,i.clearActiveOption(),i.setupOptions(e,t),i.refreshOptions(i.isFocused&&!i.isInputHidden),i.loading||Qm(i.wrapper,i.settings.loadingClass),i.trigger("load",e,t)}preload(){var e=this.wrapper.classList;e.contains("preloaded")||(e.add("preloaded"),this.load(""))}setTextboxValue(e=""){var t=this.control_input;t.value!==e&&(t.value=e,Wm(t,"update"),this.lastValue=e)}getValue(){return this.is_select_tag&&this.input.hasAttribute("multiple")?this.items:this.items.join(this.settings.delimiter)}setValue(e,t){Pm(this,t?[]:["change"],()=>{this.clear(t),this.addItems(e,t)})}setMaxItems(e){0===e&&(e=null),this.settings.maxItems=e,this.refreshState()}setActiveItem(e,t){var i,n,s,r,o,a,l=this;if("single"!==l.settings.mode){if(!e)return l.clearActiveItems(),void(l.isFocused&&l.inputState());if("click"===(i=t&&t.type.toLowerCase())&&Fm("shiftKey",t)&&l.activeItems.length){for(a=l.getLastActive(),(s=Array.prototype.indexOf.call(l.control.children,a))>(r=Array.prototype.indexOf.call(l.control.children,e))&&(o=s,s=r,r=o),n=s;n<=r;n++)e=l.control.children[n],-1===l.activeItems.indexOf(e)&&l.setActiveItemClass(e);jm(t)}else"click"===i&&Fm(bf,t)||"keydown"===i&&Fm("shiftKey",t)?e.classList.contains("active")?l.removeActiveItem(e):l.setActiveItemClass(e):(l.clearActiveItems(),l.setActiveItemClass(e));l.inputState(),l.isFocused||l.focus()}}setActiveItemClass(e){const t=this,i=t.control.querySelector(".last-active");i&&Qm(i,"last-active"),Gm(e,"active last-active"),t.trigger("item_select",e),-1==t.activeItems.indexOf(e)&&t.activeItems.push(e)}removeActiveItem(e){var t=this.activeItems.indexOf(e);this.activeItems.splice(t,1),Qm(e,"active")}clearActiveItems(){Qm(this.activeItems,"active"),this.activeItems=[]}setActiveOption(e,t=!0){e!==this.activeOption&&(this.clearActiveOption(),e&&(this.activeOption=e,nf(this.focus_node,{"aria-activedescendant":e.getAttribute("id")}),nf(e,{"aria-selected":"true"}),Gm(e,"active"),t&&this.scrollToOption(e)))}scrollToOption(e,t){if(!e)return;const i=this.dropdown_content,n=i.clientHeight,s=i.scrollTop||0,r=e.offsetHeight,o=e.getBoundingClientRect().top-i.getBoundingClientRect().top+s;o+r>n+s?this.scroll(o-n+r,t):o<s&&this.scroll(o,t)}scroll(e,t){const i=this.dropdown_content;t&&(i.style.scrollBehavior=t),i.scrollTop=e,i.style.scrollBehavior=""}clearActiveOption(){this.activeOption&&(Qm(this.activeOption,"active"),nf(this.activeOption,{"aria-selected":null})),this.activeOption=null,nf(this.focus_node,{"aria-activedescendant":null})}selectAll(){const e=this;if("single"===e.settings.mode)return;const t=e.controlChildren();t.length&&(e.inputState(),e.close(),e.activeItems=t,qm(t,t=>{e.setActiveItemClass(t)}))}inputState(){var e=this;e.control.contains(e.control_input)&&(nf(e.control_input,{placeholder:e.settings.placeholder}),e.activeItems.length>0||!e.isFocused&&e.settings.hidePlaceholder&&e.items.length>0?(e.setTextboxValue(),e.isInputHidden=!0):(e.settings.hidePlaceholder&&e.items.length>0&&nf(e.control_input,{placeholder:""}),e.isInputHidden=!1),e.wrapper.classList.toggle("input-hidden",e.isInputHidden))}inputValue(){return this.control_input.value.trim()}focus(){var e=this;e.isDisabled||e.isReadOnly||(e.ignoreFocus=!0,e.control_input.offsetWidth?e.control_input.focus():e.focus_node.focus(),setTimeout(()=>{e.ignoreFocus=!1,e.onFocus()},0))}blur(){this.focus_node.blur(),this.onBlur()}getScoreFunction(e){return this.sifter.getScoreFunction(e,this.getSearchOptions())}getSearchOptions(){var e=this.settings,t=e.sortField;return"string"==typeof e.sortField&&(t=[{field:e.sortField}]),{fields:e.searchField,conjunction:e.searchConjunction,sort:t,nesting:e.nesting}}search(e){var t,i,n=this,s=this.getSearchOptions();if(n.settings.score&&"function"!=typeof(i=n.settings.score.call(n,e)))throw new Error('Tom Select "score" setting must be a function that returns a function');return e!==n.lastQuery?(n.lastQuery=e,t=n.sifter.search(e,Object.assign(s,{score:i})),n.currentResults=t):t=Object.assign({},n.currentResults),n.settings.hideSelected&&(t.items=t.items.filter(e=>{let t=$m(e.id);return!(t&&-1!==n.items.indexOf(t))})),t}refreshOptions(e=!0){var t,i,n,s,r,o,a,l,c,d;const h={},p=[];var u=this,g=u.inputValue();const m=g===u.lastQuery||""==g&&null==u.lastQuery;var f=u.search(g),b=null,y=u.settings.shouldOpen||!1,v=u.dropdown_content;m&&(b=u.activeOption)&&(c=b.closest("[data-group]")),s=f.items.length,"number"==typeof u.settings.maxOptions&&(s=Math.min(s,u.settings.maxOptions)),s>0&&(y=!0);const _=(e,t)=>{let i=h[e];if(void 0!==i){let e=p[i];if(void 0!==e)return[i,e.fragment]}let n=document.createDocumentFragment();return i=p.length,p.push({fragment:n,order:t,optgroup:e}),[i,n]};for(t=0;t<s;t++){let e=f.items[t];if(!e)continue;let s=e.id,a=u.options[s];if(void 0===a)continue;let l=Tm(s),d=u.getOption(l,!0);for(u.settings.hideSelected||d.classList.toggle("selected",u.items.includes(l)),r=a[u.settings.optgroupField]||"",i=0,n=(o=Array.isArray(r)?r:[r])&&o.length;i<n;i++){r=o[i];let e=a.$order,t=u.optgroups[r];void 0===t?r="":e=t.$order;const[n,l]=_(r,e);i>0&&(d=d.cloneNode(!0),nf(d,{id:a.$id+"-clone-"+i,"aria-selected":null}),d.classList.add("ts-cloned"),Qm(d,"active"),u.activeOption&&u.activeOption.dataset.value==s&&c&&c.dataset.group===r.toString()&&(b=d)),l.appendChild(d),""!=r&&(h[r]=n)}}u.settings.lockOptgroupOrder&&p.sort((e,t)=>e.order-t.order),a=document.createDocumentFragment(),qm(p,e=>{let t=e.fragment,i=e.optgroup;if(!t||!t.children.length)return;let n=u.optgroups[i];if(void 0!==n){let e=document.createDocumentFragment(),i=u.render("optgroup_header",n);zm(e,i),zm(e,t);let s=u.render("optgroup",{group:n,options:e});zm(a,s)}else zm(a,t)}),v.innerHTML="",zm(v,a),u.settings.highlight&&(of(v),f.query.length&&f.tokens.length&&qm(f.tokens,e=>{rf(v,e.regex)}));var w=e=>{let t=u.render(e,{input:g});return t&&(y=!0,v.insertBefore(t,v.firstChild)),t};if(u.loading?w("loading"):u.settings.shouldLoad.call(u,g)?0===f.items.length&&w("no_results"):w("not_loading"),(l=u.canCreate(g))&&(d=w("option_create")),u.hasOptions=f.items.length>0||l,y){if(f.items.length>0){if(b||"single"!==u.settings.mode||null==u.items[0]||(b=u.getOption(u.items[0])),!v.contains(b)){let e=0;d&&!u.settings.addPrecedence&&(e=1),b=u.selectable()[e]}}else d&&(b=d);e&&!u.isOpen&&(u.open(),u.scrollToOption(b,"auto")),u.setActiveOption(b)}else u.clearActiveOption(),e&&u.isOpen&&u.close(!1)}selectable(){return this.dropdown_content.querySelectorAll("[data-selectable]")}addOption(e,t=!1){const i=this;if(Array.isArray(e))return i.addOptions(e,t),!1;const n=$m(e[i.settings.valueField]);return null!==n&&!i.options.hasOwnProperty(n)&&(e.$order=e.$order||++i.order,e.$id=i.inputId+"-opt-"+e.$order,i.options[n]=e,i.lastQuery=null,t&&(i.userOptions[n]=t,i.trigger("option_add",n,e)),n)}addOptions(e,t=!1){qm(e,e=>{this.addOption(e,t)})}registerOption(e){return this.addOption(e)}registerOptionGroup(e){var t=$m(e[this.settings.optgroupValueField]);return null!==t&&(e.$order=e.$order||++this.order,this.optgroups[t]=e,t)}addOptionGroup(e,t){var i;t[this.settings.optgroupValueField]=e,(i=this.registerOptionGroup(t))&&this.trigger("optgroup_add",i,t)}removeOptionGroup(e){this.optgroups.hasOwnProperty(e)&&(delete this.optgroups[e],this.clearCache(),this.trigger("optgroup_remove",e))}clearOptionGroups(){this.optgroups={},this.clearCache(),this.trigger("optgroup_clear")}updateOption(e,t){const i=this;var n,s;const r=$m(e),o=$m(t[i.settings.valueField]);if(null===r)return;const a=i.options[r];if(null==a)return;if("string"!=typeof o)throw new Error("Value must be set in option data");const l=i.getOption(r),c=i.getItem(r);if(t.$order=t.$order||a.$order,delete i.options[r],i.uncacheValue(o),i.options[o]=t,l){if(i.dropdown_content.contains(l)){const e=i._render("option",t);sf(l,e),i.activeOption===l&&i.setActiveOption(e)}l.remove()}c&&(-1!==(s=i.items.indexOf(r))&&i.items.splice(s,1,o),n=i._render("item",t),c.classList.contains("active")&&Gm(n,"active"),sf(c,n)),i.lastQuery=null}removeOption(e,t){const i=this;e=Tm(e),i.uncacheValue(e),delete i.userOptions[e],delete i.options[e],i.lastQuery=null,i.trigger("option_remove",e),i.removeItem(e,t)}clearOptions(e){const t=(e||this.clearFilter).bind(this);this.loadedSearches={},this.userOptions={},this.clearCache();const i={};qm(this.options,(e,n)=>{t(e,n)&&(i[n]=e)}),this.options=this.sifter.items=i,this.lastQuery=null,this.trigger("option_clear")}clearFilter(e,t){return this.items.indexOf(t)>=0}getOption(e,t=!1){const i=$m(e);if(null===i)return null;const n=this.options[i];if(null!=n){if(n.$div)return n.$div;if(t)return this._render("option",n)}return null}getAdjacent(e,t,i="option"){var n,s=this;if(!e)return null;n="item"==i?s.controlChildren():s.dropdown_content.querySelectorAll("[data-selectable]");for(let i=0;i<n.length;i++)if(n[i]==e)return t>0?n[i+1]:n[i-1];return null}getItem(e){if("object"==typeof e)return e;var t=$m(e);return null!==t?this.control.querySelector(`[data-value="${Bm(t)}"]`):null}addItems(e,t){var i=this,n=Array.isArray(e)?e:[e];n=n.filter(e=>-1===i.items.indexOf(e));const s=n[n.length-1];n.forEach(e=>{i.isPending=e!==s,i.addItem(e,t)})}addItem(e,t){Pm(this,t?[]:["change","dropdown_close"],()=>{var i,n;const s=this,r=s.settings.mode,o=$m(e);if((!o||-1===s.items.indexOf(o)||("single"===r&&s.close(),"single"!==r&&s.settings.duplicates))&&null!==o&&s.options.hasOwnProperty(o)&&("single"===r&&s.clear(t),"multi"!==r||!s.isFull())){if(i=s._render("item",s.options[o]),s.control.contains(i)&&(i=i.cloneNode(!0)),n=s.isFull(),s.items.splice(s.caretPos,0,o),s.insertAtCaret(i),s.isSetup){if(!s.isPending&&s.settings.hideSelected){let e=s.getOption(o),t=s.getAdjacent(e,1);t&&s.setActiveOption(t)}s.isPending||s.settings.closeAfterSelect||s.refreshOptions(s.isFocused&&"single"!==r),0!=s.settings.closeAfterSelect&&s.isFull()?s.close():s.isPending||s.positionDropdown(),s.trigger("item_add",o,i),s.isPending||s.updateOriginalInput({silent:t})}(!s.isPending||!n&&s.isFull())&&(s.inputState(),s.refreshState())}})}removeItem(e=null,t){const i=this;if(!(e=i.getItem(e)))return;var n,s;const r=e.dataset.value;n=tf(e),e.remove(),e.classList.contains("active")&&(s=i.activeItems.indexOf(e),i.activeItems.splice(s,1),Qm(e,"active")),i.items.splice(n,1),i.lastQuery=null,!i.settings.persist&&i.userOptions.hasOwnProperty(r)&&i.removeOption(r,t),n<i.caretPos&&i.setCaret(i.caretPos-1),i.updateOriginalInput({silent:t}),i.refreshState(),i.positionDropdown(),i.trigger("item_remove",r,e)}createItem(e=null,t=()=>{}){3===arguments.length&&(t=arguments[2]),"function"!=typeof t&&(t=()=>{});var i,n=this,s=n.caretPos;if(e=e||n.inputValue(),!n.canCreate(e))return t(),!1;n.lock();var r=!1,o=e=>{if(n.unlock(),!e||"object"!=typeof e)return t();var i=$m(e[n.settings.valueField]);if("string"!=typeof i)return t();n.setTextboxValue(),n.addOption(e,!0),n.setCaret(s),n.addItem(i),t(e),r=!0};return i="function"==typeof n.settings.create?n.settings.create.call(this,e,o):{[n.settings.labelField]:e,[n.settings.valueField]:e},r||o(i),!0}refreshItems(){var e=this;e.lastQuery=null,e.isSetup&&e.addItems(e.items),e.updateOriginalInput(),e.refreshState()}refreshState(){const e=this;e.refreshValidityState();const t=e.isFull(),i=e.isLocked;e.wrapper.classList.toggle("rtl",e.rtl);const n=e.wrapper.classList;n.toggle("focus",e.isFocused),n.toggle("disabled",e.isDisabled),n.toggle("readonly",e.isReadOnly),n.toggle("required",e.isRequired),n.toggle("invalid",!e.isValid),n.toggle("locked",i),n.toggle("full",t),n.toggle("input-active",e.isFocused&&!e.isInputHidden),n.toggle("dropdown-active",e.isOpen),n.toggle("has-options",ef(e.options)),n.toggle("has-items",e.items.length>0)}refreshValidityState(){var e=this;e.input.validity&&(e.isValid=e.input.validity.valid,e.isInvalid=!e.isValid)}isFull(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems}updateOriginalInput(e={}){const t=this;var i,n;const s=t.input.querySelector('option[value=""]');if(t.is_select_tag){const r=[],o=t.input.querySelectorAll("option:checked").length;function a(e,i,n){return e||(e=Um('<option value="'+Im(i)+'">'+Im(n)+"</option>")),e!=s&&t.input.append(e),r.push(e),(e!=s||o>0)&&(e.selected=!0),e}t.input.querySelectorAll("option:checked").forEach(e=>{e.selected=!1}),0==t.items.length&&"single"==t.settings.mode?a(s,"",""):t.items.forEach(e=>{if(i=t.options[e],n=i[t.settings.labelField]||"",r.includes(i.$option)){a(t.input.querySelector(`option[value="${Bm(e)}"]:not(:checked)`),e,n)}else i.$option=a(i.$option,e,n)})}else t.input.value=t.getValue();t.isSetup&&(e.silent||t.trigger("change",t.getValue()))}open(){var e=this;e.isLocked||e.isOpen||"multi"===e.settings.mode&&e.isFull()||(e.isOpen=!0,nf(e.focus_node,{"aria-expanded":"true"}),e.refreshState(),Ym(e.dropdown,{visibility:"hidden",display:"block"}),e.positionDropdown(),Ym(e.dropdown,{visibility:"visible",display:"block"}),e.focus(),e.trigger("dropdown_open",e.dropdown))}close(e=!0){var t=this,i=t.isOpen;e&&(t.setTextboxValue(),"single"===t.settings.mode&&t.items.length&&t.inputState()),t.isOpen=!1,nf(t.focus_node,{"aria-expanded":"false"}),Ym(t.dropdown,{display:"none"}),t.settings.hideSelected&&t.clearActiveOption(),t.refreshState(),i&&t.trigger("dropdown_close",t.dropdown)}positionDropdown(){if("body"===this.settings.dropdownParent){var e=this.control,t=e.getBoundingClientRect(),i=e.offsetHeight+t.top+window.scrollY,n=t.left+window.scrollX;Ym(this.dropdown,{width:t.width+"px",top:i+"px",left:n+"px"})}}clear(e){var t=this;if(t.items.length){var i=t.controlChildren();qm(i,e=>{t.removeItem(e,!0)}),t.inputState(),e||t.updateOriginalInput(),t.trigger("clear")}}insertAtCaret(e){const t=this,i=t.caretPos,n=t.control;n.insertBefore(e,n.children[i]||null),t.setCaret(i+1)}deleteSelection(e){var t,i,n,s,r=this;t=e&&e.keyCode===gf?-1:1,i=Nm(r.control_input);const o=[];if(r.activeItems.length)s=Xm(r.activeItems,t),n=tf(s),t>0&&n++,qm(r.activeItems,e=>o.push(e));else if((r.isFocused||"single"===r.settings.mode)&&r.items.length){const e=r.controlChildren();let n;t<0&&0===i.start&&0===i.length?n=e[r.caretPos-1]:t>0&&i.start===r.inputValue().length&&(n=e[r.caretPos]),void 0!==n&&o.push(n)}if(!r.shouldDelete(o,e))return!1;for(jm(e,!0),void 0!==n&&r.setCaret(n);o.length;)r.removeItem(o.pop());return r.inputState(),r.positionDropdown(),r.refreshOptions(!1),!0}shouldDelete(e,t){const i=e.map(e=>e.dataset.value);return!(!i.length||"function"==typeof this.settings.onDelete&&!1===this.settings.onDelete(i,t))}advanceSelection(e,t){var i,n,s=this;s.rtl&&(e*=-1),s.inputValue().length||(Fm(bf,t)||Fm("shiftKey",t)?(n=(i=s.getLastActive(e))?i.classList.contains("active")?s.getAdjacent(i,e,"item"):i:e>0?s.control_input.nextElementSibling:s.control_input.previousElementSibling)&&(n.classList.contains("active")&&s.removeActiveItem(i),s.setActiveItemClass(n)):s.moveCaret(e))}moveCaret(e){}getLastActive(e){let t=this.control.querySelector(".last-active");if(t)return t;var i=this.control.querySelectorAll(".active");return i?Xm(i,e):void 0}setCaret(e){this.caretPos=this.items.length}controlChildren(){return Array.from(this.control.querySelectorAll("[data-ts-item]"))}lock(){this.setLocked(!0)}unlock(){this.setLocked(!1)}setLocked(e=this.isReadOnly||this.isDisabled){this.isLocked=e,this.refreshState()}disable(){this.setDisabled(!0),this.close()}enable(){this.setDisabled(!1)}setDisabled(e){this.focus_node.tabIndex=e?-1:this.tabIndex,this.isDisabled=e,this.input.disabled=e,this.control_input.disabled=e,this.setLocked()}setReadOnly(e){this.isReadOnly=e,this.input.readOnly=e,this.control_input.readOnly=e,this.setLocked()}destroy(){var e=this,t=e.revertSettings;e.trigger("destroy"),e.off(),e.wrapper.remove(),e.dropdown.remove(),e.input.innerHTML=t.innerHTML,e.input.tabIndex=t.tabIndex,Qm(e.input,"tomselected","ts-hidden-accessible"),e._destroy(),delete e.input.tomselect}render(e,t){var i,n;const s=this;if("function"!=typeof this.settings.render[e])return null;if(!(n=s.settings.render[e].call(this,t,Im)))return null;if(n=Um(n),"option"===e||"option_create"===e?t[s.settings.disabledField]?nf(n,{"aria-disabled":"true"}):nf(n,{"data-selectable":""}):"optgroup"===e&&(i=t.group[s.settings.optgroupValueField],nf(n,{"data-group":i}),t.group[s.settings.disabledField]&&nf(n,{"data-disabled":""})),"option"===e||"item"===e){const i=Tm(t[s.settings.valueField]);nf(n,{"data-value":i}),"item"===e?(Gm(n,s.settings.itemClass),nf(n,{"data-ts-item":""})):(Gm(n,s.settings.optionClass),nf(n,{role:"option",id:t.$id}),t.$div=n,s.options[i]=t)}return n}_render(e,t){const i=this.render(e,t);if(null==i)throw"HTMLElement expected";return i}clearCache(){qm(this.options,e=>{e.$div&&(e.$div.remove(),delete e.$div)})}uncacheValue(e){const t=this.getOption(e);t&&t.remove()}canCreate(e){return this.settings.create&&e.length>0&&this.settings.createFilter.call(this,e)}hook(e,t,i){var n=this,s=n[t];n[t]=function(){var t,r;return"after"===e&&(t=s.apply(n,arguments)),r=i.apply(n,arguments),"instead"===e?r:("before"===e&&(t=s.apply(n,arguments)),t)}}}const xf=(e,t,i,n)=>{e.addEventListener(t,i,n)};function kf(){xf(this.input,"change",()=>{this.sync()})}const Af=e=>null==e?null:Sf(e),Sf=e=>"boolean"==typeof e?e?"1":"0":e+"",Cf=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},Ef=e=>{if(e.jquery)return e[0];if(e instanceof HTMLElement)return e;if(Of(e)){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},Of=e=>"string"==typeof e&&e.indexOf("<")>-1;function $f(e){var t=this,i=t.onOptionSelect;t.settings.hideSelected=!1;const n=Object.assign({className:"tomselect-checkbox",checkedClassNames:void 0,uncheckedClassNames:void 0},e);var s=function(e,t){t?(e.checked=!0,n.uncheckedClassNames&&e.classList.remove(...n.uncheckedClassNames),n.checkedClassNames&&e.classList.add(...n.checkedClassNames)):(e.checked=!1,n.checkedClassNames&&e.classList.remove(...n.checkedClassNames),n.uncheckedClassNames&&e.classList.add(...n.uncheckedClassNames))},r=function(e){setTimeout(()=>{var t=e.querySelector("input."+n.className);t instanceof HTMLInputElement&&s(t,e.classList.contains("selected"))},1)};t.hook("after","setupTemplates",()=>{var e=t.settings.render.option;t.settings.render.option=(i,r)=>{var o=Ef(e.call(t,i,r)),a=document.createElement("input");n.className&&a.classList.add(n.className),a.addEventListener("click",function(e){Cf(e)}),a.type="checkbox";const l=Af(i[t.settings.valueField]);return s(a,!!(l&&t.items.indexOf(l)>-1)),o.prepend(a),o}}),t.on("item_remove",e=>{var i=t.getOption(e);i&&(i.classList.remove("selected"),r(i))}),t.on("item_add",e=>{var i=t.getOption(e);i&&r(i)}),t.hook("instead","onOptionSelect",(e,n)=>{if(n.classList.contains("selected"))return n.classList.remove("selected"),t.removeItem(n.dataset.value),t.refreshOptions(),void Cf(e,!0);i.call(t,e,n),r(n)})}const Tf=e=>{if(e.jquery)return e[0];if(e instanceof HTMLElement)return e;if(If(e)){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},If=e=>"string"==typeof e&&e.indexOf("<")>-1;function Lf(e){const t=this,i=Object.assign({className:"clear-button",title:"Clear All",html:e=>`<div class="${e.className}" title="${e.title}">&#10799;</div>`},e);t.on("initialize",()=>{var e=Tf(i.html(i));e.addEventListener("click",e=>{t.isLocked||(t.clear(),"single"===t.settings.mode&&t.settings.allowEmptyOption&&t.addItem(""),e.preventDefault(),e.stopPropagation())}),t.control.appendChild(e)})}const Rf=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},Pf=(e,t,i,n)=>{e.addEventListener(t,i,n)},Nf=(e,t)=>{if(Array.isArray(e))e.forEach(t);else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},jf=e=>{if(e.jquery)return e[0];if(e instanceof HTMLElement)return e;if(Df(e)){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},Df=e=>"string"==typeof e&&e.indexOf("<")>-1,Ff=(e,t)=>{Nf(t,(t,i)=>{null==t?e.removeAttribute(i):e.setAttribute(i,""+t)})},Mf=(e,t)=>{var i;null==(i=e.parentNode)||i.insertBefore(t,e.nextSibling)},Bf=(e,t)=>{var i;null==(i=e.parentNode)||i.insertBefore(t,e)},zf=(e,t)=>{do{var i;if(e==(t=null==(i=t)?void 0:i.previousElementSibling))return!0}while(t&&t.previousElementSibling);return!1};function qf(){var e=this;if("multi"!==e.settings.mode)return;var t=e.lock,i=e.unlock;let n,s=!0;e.hook("after","setupTemplates",()=>{var t=e.settings.render.item;e.settings.render.item=(i,r)=>{const o=jf(t.call(e,i,r));Ff(o,{draggable:"true"});const a=e=>{n=o,setTimeout(()=>{o.classList.add("ts-dragging")},0)},l=e=>{e.preventDefault(),o.classList.add("ts-drag-over"),d(o,n)},c=()=>{o.classList.remove("ts-drag-over")},d=(e,t)=>{void 0!==t&&(zf(t,o)?Mf(e,t):Bf(e,t))},h=()=>{var t;document.querySelectorAll(".ts-drag-over").forEach(e=>e.classList.remove("ts-drag-over")),null==(t=n)||t.classList.remove("ts-dragging"),n=void 0;var i=[];e.control.querySelectorAll("[data-value]").forEach(e=>{if(e.dataset.value){let t=e.dataset.value;t&&i.push(t)}}),e.setValue(i)};return Pf(o,"mousedown",e=>{s||Rf(e),e.stopPropagation()}),Pf(o,"dragstart",a),Pf(o,"dragenter",l),Pf(o,"dragover",l),Pf(o,"dragleave",c),Pf(o,"dragend",h),o}}),e.hook("instead","lock",()=>(s=!1,t.call(e))),e.hook("instead","unlock",()=>(s=!0,i.call(e)))}const Uf=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},Hf=e=>{if(e.jquery)return e[0];if(e instanceof HTMLElement)return e;if(Vf(e)){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},Vf=e=>"string"==typeof e&&e.indexOf("<")>-1;function Wf(e){const t=this,i=Object.assign({title:"Untitled",headerClass:"dropdown-header",titleRowClass:"dropdown-header-title",labelClass:"dropdown-header-label",closeClass:"dropdown-header-close",html:e=>'<div class="'+e.headerClass+'"><div class="'+e.titleRowClass+'"><span class="'+e.labelClass+'">'+e.title+'</span><a class="'+e.closeClass+'">&times;</a></div></div>'},e);t.on("initialize",()=>{var e=Hf(i.html(i)),n=e.querySelector("."+i.closeClass);n&&n.addEventListener("click",e=>{Uf(e,!0),t.close()}),t.dropdown.insertBefore(e,t.dropdown.firstChild)})}const Yf=(e,t)=>{if(Array.isArray(e))e.forEach(t);else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},Gf=(e,...t)=>{var i=Qf(t);(e=Kf(e)).map(e=>{i.map(t=>{e.classList.remove(t)})})},Qf=e=>{var t=[];return Yf(e,e=>{"string"==typeof e&&(e=e.trim().split(/[\t\n\f\r\s]/)),Array.isArray(e)&&(t=t.concat(e))}),t.filter(Boolean)},Kf=e=>(Array.isArray(e)||(e=[e]),e),Jf=(e,t)=>{if(!e)return-1;t=t||e.nodeName;for(var i=0;e=e.previousElementSibling;)e.matches(t)&&i++;return i};function Zf(){var e=this;e.hook("instead","setCaret",t=>{"single"!==e.settings.mode&&e.control.contains(e.control_input)?(t=Math.max(0,Math.min(e.items.length,t)))==e.caretPos||e.isPending||e.controlChildren().forEach((i,n)=>{n<t?e.control_input.insertAdjacentElement("beforebegin",i):e.control.appendChild(i)}):t=e.items.length,e.caretPos=t}),e.hook("instead","moveCaret",t=>{if(!e.isFocused)return;const i=e.getLastActive(t);if(i){const n=Jf(i);e.setCaret(t>0?n+1:n),e.setActiveItem(),Gf(i,"last-active")}else e.setCaret(e.caretPos+t)})}const Xf=27,eb=9,tb=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},ib=(e,t,i,n)=>{e.addEventListener(t,i,n)},nb=(e,t)=>{if(Array.isArray(e))e.forEach(t);else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},sb=e=>{if(e.jquery)return e[0];if(e instanceof HTMLElement)return e;if(rb(e)){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},rb=e=>"string"==typeof e&&e.indexOf("<")>-1,ob=(e,...t)=>{var i=ab(t);(e=lb(e)).map(e=>{i.map(t=>{e.classList.add(t)})})},ab=e=>{var t=[];return nb(e,e=>{"string"==typeof e&&(e=e.trim().split(/[\t\n\f\r\s]/)),Array.isArray(e)&&(t=t.concat(e))}),t.filter(Boolean)},lb=e=>(Array.isArray(e)||(e=[e]),e);function cb(){const e=this;e.settings.shouldOpen=!0,e.hook("before","setup",()=>{e.focus_node=e.control,ob(e.control_input,"dropdown-input");const t=sb('<div class="dropdown-input-wrap">');t.append(e.control_input),e.dropdown.insertBefore(t,e.dropdown.firstChild);const i=sb('<input class="items-placeholder" tabindex="-1" />');i.placeholder=e.settings.placeholder||"",e.control.append(i)}),e.on("initialize",()=>{e.control_input.addEventListener("keydown",t=>{switch(t.keyCode){case Xf:return e.isOpen&&(tb(t,!0),e.close()),void e.clearActiveItems();case eb:e.focus_node.tabIndex=-1}return e.onKeyDown.call(e,t)}),e.on("blur",()=>{e.focus_node.tabIndex=e.isDisabled?-1:e.tabIndex}),e.on("dropdown_open",()=>{e.control_input.focus()});const t=e.onBlur;e.hook("instead","onBlur",i=>{if(!i||i.relatedTarget!=e.control_input)return t.call(e)}),ib(e.control_input,"blur",()=>e.onBlur()),e.hook("before","close",()=>{e.isOpen&&e.focus_node.focus({preventScroll:!0})})})}const db=(e,t,i,n)=>{e.addEventListener(t,i,n)};function hb(){var e=this;e.on("initialize",()=>{var t=document.createElement("span"),i=e.control_input;t.style.cssText="position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; ",e.wrapper.appendChild(t);var n=["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"];for(const e of n)t.style[e]=i.style[e];var s=()=>{t.textContent=i.value,i.style.width=t.clientWidth+"px"};s(),e.on("update item_add item_remove",s),db(i,"input",s),db(i,"keyup",s),db(i,"blur",s),db(i,"update",s)})}function pb(){var e=this,t=e.deleteSelection;this.hook("instead","deleteSelection",i=>!!e.activeItems.length&&t.call(e,i))}function ub(){this.hook("instead","setActiveItem",()=>{}),this.hook("instead","selectAll",()=>{})}const gb=37,mb=39,fb=(e,t,i)=>{for(;e&&e.matches;){if(e.matches(t))return e;e=e.parentNode}},bb=(e,t)=>{if(!e)return-1;t=t||e.nodeName;for(var i=0;e=e.previousElementSibling;)e.matches(t)&&i++;return i};function yb(){var e=this,t=e.onKeyDown;e.hook("instead","onKeyDown",i=>{var n,s,r,o;if(!e.isOpen||i.keyCode!==gb&&i.keyCode!==mb)return t.call(e,i);e.ignoreHover=!0,o=fb(e.activeOption,"[data-group]"),n=bb(e.activeOption,"[data-selectable]"),o&&(o=i.keyCode===gb?o.previousSibling:o.nextSibling)&&(s=(r=o.querySelectorAll("[data-selectable]"))[Math.min(r.length-1,n)])&&e.setActiveOption(s)})}const vb=e=>(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),_b=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},wb=(e,t,i,n)=>{e.addEventListener(t,i,n)},xb=e=>{if(e.jquery)return e[0];if(e instanceof HTMLElement)return e;if(kb(e)){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstChild}return document.querySelector(e)},kb=e=>"string"==typeof e&&e.indexOf("<")>-1;function Ab(e){const t=Object.assign({label:"&times;",title:"Remove",className:"remove",append:!0},e);var i=this;if(t.append){var n='<a href="javascript:void(0)" class="'+t.className+'" tabindex="-1" title="'+vb(t.title)+'">'+t.label+"</a>";i.hook("after","setupTemplates",()=>{var e=i.settings.render.item;i.settings.render.item=(t,s)=>{var r=xb(e.call(i,t,s)),o=xb(n);return r.appendChild(o),wb(o,"mousedown",e=>{_b(e,!0)}),wb(o,"click",e=>{i.isLocked||(_b(e,!0),i.isLocked||i.shouldDelete([r],e)&&(i.removeItem(r),i.refreshOptions(!1),i.inputState()))}),r}})}}function Sb(e){const t=this,i=Object.assign({text:e=>e[t.settings.labelField]},e);t.on("item_remove",function(e){if(t.isFocused&&""===t.control_input.value.trim()){var n=t.options[e];n&&t.setTextboxValue(i.text.call(t,n))}})}const Cb=(e,t)=>{if(Array.isArray(e))e.forEach(t);else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},Eb=(e,...t)=>{var i=Ob(t);(e=$b(e)).map(e=>{i.map(t=>{e.classList.add(t)})})},Ob=e=>{var t=[];return Cb(e,e=>{"string"==typeof e&&(e=e.trim().split(/[\t\n\f\r\s]/)),Array.isArray(e)&&(t=t.concat(e))}),t.filter(Boolean)},$b=e=>(Array.isArray(e)||(e=[e]),e);function Tb(){const e=this,t=e.canLoad,i=e.clearActiveOption,n=e.loadCallback;var s,r,o={},a=!1,l=[];if(e.settings.shouldLoadMore||(e.settings.shouldLoadMore=()=>{if(s.clientHeight/(s.scrollHeight-s.scrollTop)>.9)return!0;if(e.activeOption){var t=e.selectable();if(Array.from(t).indexOf(e.activeOption)>=t.length-2)return!0}return!1}),!e.settings.firstUrl)throw"virtual_scroll plugin requires a firstUrl() method";e.settings.sortField=[{field:"$order"},{field:"$score"}];const c=t=>!("number"==typeof e.settings.maxOptions&&s.children.length>=e.settings.maxOptions)&&!(!(t in o)||!o[t]),d=(t,i)=>e.items.indexOf(i)>=0||l.indexOf(i)>=0;e.setNextUrl=(e,t)=>{o[e]=t},e.getUrl=t=>{if(t in o){const e=o[t];return o[t]=!1,e}return e.clearPagination(),e.settings.firstUrl.call(e,t)},e.clearPagination=()=>{o={}},e.hook("instead","clearActiveOption",()=>{if(!a)return i.call(e)}),e.hook("instead","canLoad",i=>i in o?c(i):t.call(e,i)),e.hook("instead","loadCallback",(t,i)=>{if(a){if(r){const i=t[0];void 0!==i&&(r.dataset.value=i[e.settings.valueField])}}else e.clearOptions(d);n.call(e,t,i),a=!1}),e.hook("after","refreshOptions",()=>{const t=e.lastValue;var i;c(t)?(i=e.render("loading_more",{query:t}))&&(i.setAttribute("data-selectable",""),r=i):t in o&&!s.querySelector(".no-results")&&(i=e.render("no_more_results",{query:t})),i&&(Eb(i,e.settings.optionClass),s.append(i))}),e.on("initialize",()=>{l=Object.keys(e.options),s=e.dropdown_content,e.settings.render=Object.assign({},{loading_more:()=>'<div class="loading-more-results">Loading more results ... </div>',no_more_results:()=>'<div class="no-more-results">No more results</div>'},e.settings.render),s.addEventListener("scroll",()=>{e.settings.shouldLoadMore.call(e)&&c(e.lastValue)&&(a||(a=!0,e.load.call(e,e.lastValue)))})})}function Ib(e){if(document.getElementById("__pb-multi-select-css"))return;const t=r("../css/tom-select"),i=document.createElement("link");i.id="__pb-multi-select-css",i.href=`${t}/tom-select.${e}.min.css`,i.rel="stylesheet",document.head.appendChild(i)}wf.define("change_listener",kf),wf.define("checkbox_options",$f),wf.define("clear_button",Lf),wf.define("drag_drop",qf),wf.define("dropdown_header",Wf),wf.define("caret_position",Zf),wf.define("dropdown_input",cb),wf.define("input_autogrow",hb),wf.define("no_backspace_delete",pb),wf.define("no_active_items",ub),wf.define("optgroup_columns",yb),wf.define("remove_button",Ab),wf.define("restore_on_backspace",Sb),wf.define("virtual_scroll",Tb);const Lb=e=>e?`<div>${g(e.text)}</div>`:"";class Rb extends(o(s)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{placeholder:{type:String},source:{type:String},closeAfterSelect:{type:Boolean,attribute:"close-after-select"},preload:{type:String},onBlur:{type:String,attribute:"on-blur"},onChange:{type:String,attribute:"on-change"}})}get value(){return this._select?this._select.getValue():null}set value(e){this._select&&(this._select.clear(!0),this._select.sync(),this._select.setValue(e,!1),this._select.sync())}set renderItem(e){this.renderFunction=e}constructor(){super(),this.theme="default",this.source=null,this.closeAfterSelect=!1,this.preload=!1,this.renderFunction=Lb,this.onBlur="pb-combo-box-blur",this.onChange="pb-combo-box-change",this.placeholder=""}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-i18n-update",()=>{this._select&&(this._select.settings.placeholder=g(this.placeholder),this._select.inputState(),this.source?this._select.refreshOptions(!1):(this._select.clearOptions(),this._select.sync()))})}firstUpdated(){Ib(this.theme);let e=this.querySelector("select,input");e||(e=document.createElement("input"),this.appendChild(e)),e.autocomplete=!1,a("pb-page-ready",()=>{const t={};if(this.source){let e=new AbortController;const i=this.toAbsoluteURL(this.source);t.labelField="text",t.valueField="value",t.searchField=[],t.preload=this.preload,this.preload&&(t.shouldLoad=()=>!0),t.load=(t,n)=>{this._select&&this._select.clearOptions(),e&&e.abort(),e=new AbortController,fetch(`${i}?query=${encodeURIComponent(t)}`,{method:"GET",mode:"cors",credentials:"same-origin",signal:e.signal}).then(e=>e.json()).then(e=>{n(e)}).catch(()=>{n()})},t.render={option:this.renderFunction,item:this.renderFunction}}t.placeholder=g(this.placeholder),t.closeAfterSelect=this.closeAfterSelect,t.onBlur=()=>this.emitTo(this.onBlur,{value:this.value}),t.onChange=()=>this.emitTo(this.onChange,{value:this.value}),this._select=new wf(e,t)})}createRenderRoot(){return this}}customElements.define("pb-combo-box",Rb);class Pb extends(o(s)){static get properties(){return Object.assign({src:{type:String},styles:{type:String},url:{type:String,reflect:!0,readOnly:!0},raw:{type:Boolean}},super.properties)}constructor(){super(),this.url="about:blank",this.raw=!1}firstUpdated(){super.firstUpdated(),this._iframe=this.shadowRoot.querySelector("iframe"),this._iframe.addEventListener("load",()=>{"about:blank"!==this._iframe.src&&(this._iframe.className="",this.emitTo("pb-end-update"))}),a("pb-page-ready",()=>{this.refresh()})}print(){this._iframe.contentWindow.print()}refresh(){this.emitTo("pb-start-update"),this._iframe.className="hidden",this._iframe.src="about:blank";const e=this.getDocument(),t=new URLSearchParams;e.odd&&t.set("odd",`${e.odd}.odd`),t.set("base",`${this.getEndpoint()}/${e.getCollection()}/`),this._getCustomStyles().forEach(e=>t.append("style",e));const i=t.toString();this.url=`${this.getEndpoint()}/api/document/${encodeURIComponent(e.path)}/print?${i}`;const n=new URLSearchParams(i);n.set("wc","true"),this.raw||(n.set("script",r("../lib/paged.polyfill.js")),n.append("style",r("../css/pagedjs/interface.css"))),this._iframe.src=`${this.getEndpoint()}/api/document/${encodeURIComponent(e.path)}/print?${n.toString()}`}render(){return t` <iframe title="Preview" src="about:blank"></iframe> `}_getCustomStyles(){let e=[];return this.styles&&(e=this.styles.split(/\s*,\s*/)),e}static get styles(){return n`
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
    `}}customElements.define("pb-print-preview",Pb);
