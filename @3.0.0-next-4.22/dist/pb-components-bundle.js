import{x as t,i as e,a as n,p as s,w as r,c as o,b as a,E as l,m as c,B as d}from"./pb-mixin-BUnZhCew.js";import{t as p,i as u,g as h}from"./pb-i18n-DpafwkRO.js";import{l as g}from"./logger-BDsEU7Z8.js";import{r as f}from"./url-BIkUkuPN.js";import{t as m,l as b,i as y}from"./pb-dialog-69GQVfpQ.js";import{r as v}from"./urls-SAtBvPhD.js";import{o as _}from"./unsafe-html-C8JBHfUC.js";import{s as w,p as x,o as k,D as A,A as S,F as O,E,T as $,P as C,L as T,a as I,d as L,S as R,b as j,c as N,i as P}from"./focus-mixin-177q2Y1S.js";import"./es-global-bridge-D8ZcUcx_.js";import"./pb-facsimile.js";import"./purify.es-DOKMcktY.js";function D(t={}){const{endpoint:e=".",apiVersion:i="1.0.0",template:n=null}=t;requestAnimationFrame(()=>{document.dispatchEvent(new CustomEvent("pb-page-ready",{detail:{endpoint:e,apiVersion:i,template:n}}))})}async function F(t){if(!t)return;await t.updateComplete;const e=t.shadowRoot;if(e){if(t.hasAttribute("multi")){const i=Array.isArray(t.values)?t.values:[];e.querySelectorAll('input[type="checkbox"]').forEach(t=>{t.checked=i.includes(t.value)})}else{const i=e.querySelector("select");i&&(i.value=t.value??"")}t.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}}function B(t,e){const i=e.dataset.demoOutput||e.getAttribute("data-demo-output");if(i)return t.querySelector(i)||e.querySelector(i);const n=e.parentElement;if(n){const t=n.querySelector("code[id], pre[id], span[id]");if(t)return t}return null}function M(t){t.querySelectorAll("form").forEach(e=>{if(e.dataset.demoWired)return;const i=B(t,e);if(!i)return void(e.dataset.demoWired="skip");const n=()=>{i.textContent=new URLSearchParams(new FormData(e)).toString()};e.addEventListener("submit",t=>{t.preventDefault(),n()}),e.dataset.demoWired="true",n()})}var q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function z(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U,H={exports:{}};function V(){return U||(U=1,function(t){var e=function(t){var e=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,n={},s={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof r?new r(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++i}),t.__id},clone:function t(e,i){var n,r;switch(i=i||{},s.util.type(e)){case"Object":if(r=s.util.objId(e),i[r])return i[r];for(var o in n={},i[r]=n,e)e.hasOwnProperty(o)&&(n[o]=t(e[o],i));return n;case"Array":return r=s.util.objId(e),i[r]?i[r]:(n=[],i[r]=n,e.forEach(function(e,s){n[s]=t(e,i)}),n);default:return e}},getLanguage:function(t){for(;t;){var i=e.exec(t.className);if(i)return i[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,i){t.className=t.className.replace(RegExp(e,"gi"),""),t.classList.add("language-"+i)},currentScript:function(){if("undefined"==typeof document)return null;if(document.currentScript&&"SCRIPT"===document.currentScript.tagName)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var i in e)if(e[i].src==t)return e[i]}return null}},isActive:function(t,e,i){for(var n="no-"+e;t;){var s=t.classList;if(s.contains(e))return!0;if(s.contains(n))return!1;t=t.parentElement}return!!i}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(t,e){var i=s.util.clone(s.languages[t]);for(var n in e)i[n]=e[n];return i},insertBefore:function(t,e,i,n){var r=(n=n||s.languages)[t],o={};for(var a in r)if(r.hasOwnProperty(a)){if(a==e)for(var l in i)i.hasOwnProperty(l)&&(o[l]=i[l]);i.hasOwnProperty(a)||(o[a]=r[a])}var c=n[t];return n[t]=o,s.languages.DFS(s.languages,function(e,i){i===c&&e!=t&&(this[e]=o)}),o},DFS:function t(e,i,n,r){r=r||{};var o=s.util.objId;for(var a in e)if(e.hasOwnProperty(a)){i.call(e,a,e[a],n||a);var l=e[a],c=s.util.type(l);"Object"!==c||r[o(l)]?"Array"!==c||r[o(l)]||(r[o(l)]=!0,t(l,i,a,r)):(r[o(l)]=!0,t(l,i,null,r))}}},plugins:{},highlightAll:function(t,e){s.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,i){var n={callback:i,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),s.hooks.run("before-all-elements-highlight",n);for(var r,o=0;r=n.elements[o++];)s.highlightElement(r,!0===e,n.callback)},highlightElement:function(e,i,n){var r=s.util.getLanguage(e),o=s.languages[r];s.util.setLanguage(e,r);var a=e.parentElement;a&&"pre"===a.nodeName.toLowerCase()&&s.util.setLanguage(a,r);var l={element:e,language:r,grammar:o,code:e.textContent};function c(t){l.highlightedCode=t,s.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,s.hooks.run("after-highlight",l),s.hooks.run("complete",l),n&&n.call(l.element)}if(s.hooks.run("before-sanity-check",l),(a=l.element.parentElement)&&"pre"===a.nodeName.toLowerCase()&&!a.hasAttribute("tabindex")&&a.setAttribute("tabindex","0"),!l.code)return s.hooks.run("complete",l),void(n&&n.call(l.element));if(s.hooks.run("before-highlight",l),l.grammar)if(i&&t.Worker){var d=new Worker(s.filename);d.onmessage=function(t){c(t.data)},d.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else c(s.highlight(l.code,l.grammar,l.language));else c(s.util.encode(l.code))},highlight:function(t,e,i){var n={code:t,grammar:e,language:i};if(s.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=s.tokenize(n.code,n.grammar),s.hooks.run("after-tokenize",n),r.stringify(s.util.encode(n.tokens),n.language)},tokenize:function(t,e){var i=e.rest;if(i){for(var n in i)e[n]=i[n];delete e.rest}var s=new l;return c(s,s.head,t),a(t,s,e,s.head,0),p(s)},hooks:{all:{},add:function(t,e){var i=s.hooks.all;i[t]=i[t]||[],i[t].push(e)},run:function(t,e){var i=s.hooks.all[t];if(i&&i.length)for(var n,r=0;n=i[r++];)n(e)}},Token:r};function r(t,e,i,n){this.type=t,this.content=e,this.alias=i,this.length=0|(n||"").length}function o(t,e,i,n){t.lastIndex=e;var s=t.exec(i);if(s&&n&&s[1]){var r=s[1].length;s.index+=r,s[0]=s[0].slice(r)}return s}function a(t,e,i,n,l,p){for(var u in i)if(i.hasOwnProperty(u)&&i[u]){var h=i[u];h=Array.isArray(h)?h:[h];for(var g=0;g<h.length;++g){if(p&&p.cause==u+","+g)return;var f=h[g],m=f.inside,b=!!f.lookbehind,y=!!f.greedy,v=f.alias;if(y&&!f.pattern.global){var _=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,_+"g")}for(var w=f.pattern||f,x=n.next,k=l;x!==e.tail&&!(p&&k>=p.reach);k+=x.value.length,x=x.next){var A=x.value;if(e.length>t.length)return;if(!(A instanceof r)){var S,O=1;if(y){if(!(S=o(w,k,t,b))||S.index>=t.length)break;var E=S.index,$=S.index+S[0].length,C=k;for(C+=x.value.length;E>=C;)C+=(x=x.next).value.length;if(k=C-=x.value.length,x.value instanceof r)continue;for(var T=x;T!==e.tail&&(C<$||"string"==typeof T.value);T=T.next)O++,C+=T.value.length;O--,A=t.slice(k,C),S.index-=k}else if(!(S=o(w,0,A,b)))continue;E=S.index;var I=S[0],L=A.slice(0,E),R=A.slice(E+I.length),j=k+A.length;p&&j>p.reach&&(p.reach=j);var N=x.prev;if(L&&(N=c(e,N,L),k+=L.length),d(e,N,O),x=c(e,N,new r(u,m?s.tokenize(I,m):I,v,I)),R&&c(e,x,R),O>1){var P={cause:u+","+g,reach:j};a(t,e,i,x.prev,k,P),p&&P.reach>p.reach&&(p.reach=P.reach)}}}}}}function l(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function c(t,e,i){var n=e.next,s={value:i,prev:e,next:n};return e.next=s,n.prev=s,t.length++,s}function d(t,e,i){for(var n=e.next,s=0;s<i&&n!==t.tail;s++)n=n.next;e.next=n,n.prev=e,t.length-=s}function p(t){for(var e=[],i=t.head.next;i!==t.tail;)e.push(i.value),i=i.next;return e}if(t.Prism=s,r.stringify=function t(e,i){if("string"==typeof e)return e;if(Array.isArray(e)){var n="";return e.forEach(function(e){n+=t(e,i)}),n}var r={type:e.type,content:t(e.content,i),tag:"span",classes:["token",e.type],attributes:{},language:i},o=e.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(r.classes,o):r.classes.push(o)),s.hooks.run("wrap",r);var a="";for(var l in r.attributes)a+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+a+">"+r.content+"</"+r.tag+">"},!t.document)return t.addEventListener?(s.disableWorkerMessageHandler||t.addEventListener("message",function(e){var i=JSON.parse(e.data),n=i.language,r=i.code,o=i.immediateClose;t.postMessage(s.highlight(r,s.languages[n],n)),o&&t.close()},!1),s):s;var u=s.util.currentScript();function h(){s.manual||s.highlightAll()}if(u&&(s.filename=u.src,u.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var g=document.readyState;"loading"===g||"interactive"===g&&u&&u.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return s}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});t.exports&&(t.exports=e),void 0!==q&&(q.Prism=e),e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(t,i){var n={};n["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[i]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};s["language-"+i]={pattern:/[\s\S]+/,inside:e.languages[i]};var r={};r[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:s},e.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,i){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:e.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,function(t){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var i=t.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript,function(){if(void 0!==e&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t="Loading…",i=function(t,e){return"✖ Error "+t+" while fetching file: "+e},n="✖ Error: File does not exist or is empty",s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",o="loading",a="loaded",l="failed",c="pre[data-src]:not(["+r+'="'+a+'"]):not(['+r+'="'+o+'"])';e.hooks.add("before-highlightall",function(t){t.selector+=", "+c}),e.hooks.add("before-sanity-check",function(i){var n=i.element;if(n.matches(c)){i.code="",n.setAttribute(r,o);var d=n.appendChild(document.createElement("CODE"));d.textContent=t;var h=n.getAttribute("data-src"),g=i.language;if("none"===g){var f=(/\.(\w+)$/.exec(h)||[,"none"])[1];g=s[f]||f}e.util.setLanguage(d,g),e.util.setLanguage(n,g);var m=e.plugins.autoloader;m&&m.loadLanguages(g),p(h,function(t){n.setAttribute(r,a);var i=u(n.getAttribute("data-range"));if(i){var s=t.split(/\r\n?|\n/g),o=i[0],l=null==i[1]?s.length:i[1];o<0&&(o+=s.length),o=Math.max(0,Math.min(o-1,s.length)),l<0&&(l+=s.length),l=Math.max(0,Math.min(l,s.length)),t=s.slice(o,l).join("\n"),n.hasAttribute("data-start")||n.setAttribute("data-start",String(o+1))}d.textContent=t,e.highlightElement(d)},function(t){n.setAttribute(r,l),d.textContent=t})}}),e.plugins.fileHighlight={highlight:function(t){for(var i,n=(t||document).querySelectorAll(c),s=0;i=n[s++];)e.highlightElement(i)}};var d=!1;e.fileHighlight=function(){d||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),d=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}function p(t,e,s){var r=new XMLHttpRequest;r.open("GET",t,!0),r.onreadystatechange=function(){4==r.readyState&&(r.status<400&&r.responseText?e(r.responseText):r.status>=400?s(i(r.status,r.statusText)):s(n))},r.send(null)}function u(t){var e=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(t||"");if(e){var i=Number(e[1]),n=e[2],s=e[3];return n?s?[i,Number(s)]:[i,void 0]:[i,i]}}}()}(H)),H.exports}V(),function(t){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var i=t.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(Prism),Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,e){var i={};i["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};n["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var s={};s[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(t,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json;var W,G={};function Y(){return W||(W=1,function(t){t.languages.xquery=t.languages.extend("markup",{"xquery-comment":{pattern:/\(:[\s\S]*?:\)/,greedy:!0,alias:"comment"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},extension:{pattern:/\(#.+?#\)/,alias:"symbol"},variable:/\$[-\w:]+/,axis:{pattern:/(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,lookbehind:!0,alias:"operator"},"keyword-operator":{pattern:/(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,lookbehind:!0},function:/[\w-]+(?::[\w-]+)*(?=\s*\()/,"xquery-element":{pattern:/(element\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"tag"},"xquery-attribute":{pattern:/(attribute\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"attr-name"},builtin:{pattern:/(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,lookbehind:!0},number:/\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,operator:[/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],punctuation:/[[\](){},;:/]/}),t.languages.xquery.tag.pattern=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,t.languages.xquery.tag.inside["attr-value"].pattern=/=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/,t.languages.xquery.tag.inside["attr-value"].inside.punctuation=/^="|"$/,t.languages.xquery.tag.inside["attr-value"].inside.expression={pattern:/\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,inside:t.languages.xquery,alias:"language-xquery"};var e=function(t){return"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(e).join("")},i=function(n){for(var s=[],r=0;r<n.length;r++){var o=n[r],a=!1;if("string"!=typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?s.length>0&&s[s.length-1].tagName===e(o.content[0].content[1])&&s.pop():"/>"===o.content[o.content.length-1].content||s.push({tagName:e(o.content[0].content[1]),openedBraces:0}):!(s.length>0&&"punctuation"===o.type&&"{"===o.content)||n[r+1]&&"punctuation"===n[r+1].type&&"{"===n[r+1].content||n[r-1]&&"plain-text"===n[r-1].type&&"{"===n[r-1].content?s.length>0&&s[s.length-1].openedBraces>0&&"punctuation"===o.type&&"}"===o.content?s[s.length-1].openedBraces--:"comment"!==o.type&&(a=!0):s[s.length-1].openedBraces++),(a||"string"==typeof o)&&s.length>0&&0===s[s.length-1].openedBraces){var l=e(o);r<n.length-1&&("string"==typeof n[r+1]||"plain-text"===n[r+1].type)&&(l+=e(n[r+1]),n.splice(r+1,1)),r>0&&("string"==typeof n[r-1]||"plain-text"===n[r-1].type)&&(l=e(n[r-1])+l,n.splice(r-1,1),r--),/^\s+$/.test(l)?n[r]=l:n[r]=new t.Token("plain-text",l,null,l)}o.content&&"string"!=typeof o.content&&i(o.content)}};t.hooks.add("after-tokenize",function(t){"xquery"===t.language&&i(t.tokens)})}(Prism)),G}Y();var Q,K={exports:{}};function J(){return Q||(Q=1,t=K,function(){if("undefined"!=typeof Prism){var e=Object.assign||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},i={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};n.prototype={setDefaults:function(t){this.defaults=e(this.defaults,t)},normalize:function(t,i){for(var n in i=e(this.defaults,i)){var r=s(n);"normalize"!==n&&"setDefaults"!==r&&i[n]&&this[r]&&(t=this[r].call(this,t,i[n]))}return t},leftTrim:function(t){return t.replace(/^\s+/,"")},rightTrim:function(t){return t.replace(/\s+$/,"")},tabsToSpaces:function(t,e){return e=0|e||4,t.replace(/\t/g,new Array(++e).join(" "))},spacesToTabs:function(t,e){return e=0|e||4,t.replace(RegExp(" {"+e+"}","g"),"\t")},removeTrailing:function(t){return t.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(t){return t.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(t){var e=t.match(/^[^\S\n\r]*(?=\S)/gm);return e&&e[0].length?(e.sort(function(t,e){return t.length-e.length}),e[0].length?t.replace(RegExp("^"+e[0],"gm"),""):t):t},indent:function(t,e){return t.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++e).join("\t")+"$&")},breakLines:function(t,e){e=!0===e?80:0|e||80;for(var i=t.split("\n"),n=0;n<i.length;++n)if(!(r(i[n])<=e)){for(var s=i[n].split(/(\s+)/g),o=0,a=0;a<s.length;++a){var l=r(s[a]);(o+=l)>e&&(s[a]="\n"+s[a],o=l)}i[n]=s.join("")}return i.join("\n")}},t.exports&&(t.exports=n),Prism.plugins.NormalizeWhitespace=new n({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(t){var e=Prism.plugins.NormalizeWhitespace;if((!t.settings||!1!==t.settings["whitespace-normalization"])&&Prism.util.isActive(t.element,"whitespace-normalization",!0))if(t.element&&t.element.parentNode||!t.code){var n=t.element.parentNode;if(t.code&&n&&"pre"===n.nodeName.toLowerCase()){for(var s in null==t.settings&&(t.settings={}),i)if(Object.hasOwnProperty.call(i,s)){var r=i[s];if(n.hasAttribute("data-"+s))try{var o=JSON.parse(n.getAttribute("data-"+s)||"true");typeof o===r&&(t.settings[s]=o)}catch(t){}}for(var a=n.childNodes,l="",c="",d=!1,p=0;p<a.length;++p){var u=a[p];u==t.element?d=!0:"#text"===u.nodeName&&(d?c+=u.nodeValue:l+=u.nodeValue,n.removeChild(u),--p)}if(t.element.children.length&&Prism.plugins.KeepMarkup){var h=l+t.element.innerHTML+c;t.element.innerHTML=e.normalize(h,t.settings),t.code=t.element.textContent}else t.code=l+t.code+c,t.code=e.normalize(t.code,t.settings)}}else t.code=e.normalize(t.code,t.settings)})}function n(t){this.defaults=e({},t)}function s(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})}function r(t){for(var e=0,i=0;i<t.length;++i)t.charCodeAt(i)=="\t".charCodeAt(0)&&(e+=3);return t.length+e}}()),K.exports;var t}J();var Z,X={};function tt(){return Z||(Z=1,function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var t="line-numbers",e=/\n(?!$)/g,i=Prism.plugins.lineNumbers={getLine:function(e,i){if("PRE"===e.tagName&&e.classList.contains(t)){var n=e.querySelector(".line-numbers-rows");if(n){var s=parseInt(e.getAttribute("data-start"),10)||1,r=s+(n.children.length-1);i<s&&(i=s),i>r&&(i=r);var o=i-s;return n.children[o]}}},resize:function(t){s([t])},assumeViewportIndependence:!0},n=void 0;window.addEventListener("resize",function(){i.assumeViewportIndependence&&n===window.innerWidth||(n=window.innerWidth,s(Array.prototype.slice.call(document.querySelectorAll("pre."+t))))}),Prism.hooks.add("complete",function(i){if(i.code){var n=i.element,r=n.parentNode;if(r&&/pre/i.test(r.nodeName)&&!n.querySelector(".line-numbers-rows")&&Prism.util.isActive(n,t)){n.classList.remove(t),r.classList.add(t);var o,a=i.code.match(e),l=a?a.length+1:1,c=new Array(l+1).join("<span></span>");(o=document.createElement("span")).setAttribute("aria-hidden","true"),o.className="line-numbers-rows",o.innerHTML=c,r.hasAttribute("data-start")&&(r.style.counterReset="linenumber "+(parseInt(r.getAttribute("data-start"),10)-1)),i.element.appendChild(o),s([r]),Prism.hooks.run("line-numbers",i)}}}),Prism.hooks.add("line-numbers",function(t){t.plugins=t.plugins||{},t.plugins.lineNumbers=!0})}function s(t){if(t=t.filter(function(t){var e=r(t)["white-space"];return"pre-wrap"===e||"pre-line"===e}),0!=t.length){var i=t.map(function(t){var i=t.querySelector("code"),n=t.querySelector(".line-numbers-rows");if(i&&n){var s=t.querySelector(".line-numbers-sizer"),r=i.textContent.split(e);s||((s=document.createElement("span")).className="line-numbers-sizer",i.appendChild(s)),s.innerHTML="0",s.style.display="block";var o=s.getBoundingClientRect().height;return s.innerHTML="",{element:t,lines:r,lineHeights:[],oneLinerHeight:o,sizer:s}}}).filter(Boolean);i.forEach(function(t){var e=t.sizer,i=t.lines,n=t.lineHeights,s=t.oneLinerHeight;n[i.length-1]=void 0,i.forEach(function(t,i){if(t&&t.length>1){var r=e.appendChild(document.createElement("span"));r.style.display="block",r.textContent=t}else n[i]=s})}),i.forEach(function(t){for(var e=t.sizer,i=t.lineHeights,n=0,s=0;s<i.length;s++)void 0===i[s]&&(i[s]=e.children[n++].getBoundingClientRect().height)}),i.forEach(function(t){var e=t.sizer,i=t.element.querySelector(".line-numbers-rows");e.style.display="none",e.innerHTML="",t.lineHeights.forEach(function(t,e){i.children[e].style.height=t+"px"})})}}function r(t){return t?window.getComputedStyle?getComputedStyle(t):t.currentStyle||null:null}}()),X}function et(t,e,i){const n=getComputedStyle(t).getPropertyValue(e);if(n)try{return JSON.parse(n)}catch(t){return i}return i}tt();const it=new Map;function nt(e){const i="default"===e?"prism.css":`prism-${e}.css`;if(it.has(i))return g.log("Using cached theme: %s",i),it.get(i);const n=(async()=>{let n;try{if(void 0!==import.meta&&import.meta.env&&import.meta.env.DEV||"undefined"!=typeof location&&/localhost|127\.0\.0\.1/.test(location.hostname)){const t=window.location.hostname;n="8080"===window.location.port||t.includes("tei-publisher")?"/exist/apps/tei-publisher/resources/css/prismjs/"+i:f("../css/prismjs/")+i}else n=f("../css/prismjs/")+i}catch(t){n=f("../css/prismjs/")+i}g.log("<pb-code-highlight> loading theme %s from %s",e,n);try{const e=await fetch(n),i=await e.text();return t`<style>
        ${i}
      </style>`}catch{return t`<style></style>`}})();return it.set(i,n),n}class st extends(m(n)){static get properties(){return{language:{type:String},code:{type:String},theme:{type:String},lineNumbers:{type:Boolean,attribute:"line-numbers"},_themeStyles:{type:String}}}constructor(){super(),this.language="xml",this.theme="default",this.lineNumbers=!1,this._themeStyles=null}connectedCallback(){super.connectedCallback();let t=this.getAttribute("theme");null===t&&(t=et(this,"--pb-code-highlight-theme","default"),this.setAttribute("theme",t))}firstUpdated(){if(super.firstUpdated(),!this.code){const t=this.querySelector("template");this.code=t?Prism.plugins.NormalizeWhitespace.normalize(t.innerHTML):Prism.plugins.NormalizeWhitespace.normalize(this.textContent)}}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"theme"===t)(async()=>{const t=await nt(i);this._themeStyles=t})()}updated(t){if(super.updated(t),t.has("code")){const t=this.shadowRoot.getElementById("pb-code-highlight");if(null!=t){const e=document.createElement("code");e.textContent=this.code,t.replaceChildren(e)}this.highlight()}}highlight(){Prism.highlightAllUnder(this.shadowRoot)}render(){return this.code?t`
        ${this._themeStyles}
        <pre
          id="pb-code-highlight"
          class="${this.lineNumbers?"line-numbers":""} language-${this.language}"
        ><code>${this.code}</code></pre>
      `:t`<pre class="line-numbers"><code><code></pre>`}static get styles(){return e`
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
    `}}customElements.define("pb-code-highlight",st);const rt="https://teipublisher.com/exist/apps/tei-publisher";class ot extends n{static properties={title:{type:String},code:{type:String},_showCodeLabel:{type:String},_requirePbTify:{type:Boolean}};constructor(){super(),this.title="TEI Publisher Webcomponents Example",this.code="Loading ...",this._showCodeLabel="demo.showCode.show",this._requirePbTify=!1}connectedCallback(){super.connectedCallback(),this._requirePbTify=this.hasAttribute("require-pb-tify");const t=this.querySelector("template");if(!t)return void g.warn("<pb-demo-snippet> no <template> found inside snippet");this.code=ot.removeIndent(t.innerHTML).replace(/\s*<style[\s\S]*?>[\s\S]*?<\/style>\s*/g,"");const e=t.content.cloneNode(!0);this.append(e),queueMicrotask(async()=>{try{if(customElements.get("pb-select")){const t=this.querySelectorAll("pb-select");for(const e of t)try{await F(e)}catch(t){}}}catch(t){}M(this),D({endpoint:".",apiVersion:"1.0.0"})})}render(){const e=this.querySelector("style"),i=e?e.innerText:"",n=ot.indent(this.code.replace(/(endpoint="[^"]+")/,`endpoint="${rt}"`),2),s=`\n@import url('https://fonts.googleapis.com/css?family=Oswald|Roboto&display=swap');\n\nbody {\n  margin: 10px 20px;\n  font-size: 16px;\n  font-family: 'Roboto', 'Noto', sans-serif;\n  line-height: 1.42857;\n  font-weight: 300;\n  color: #333;\n}\n\n${ot.removeIndent(i)}\n`,r=`\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>${this.title}</title>\n    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.4.3/webcomponents-loader.js"><\/script>\n    <script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-components-bundle.js"><\/script>\n    <script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-leaflet-map.js"><\/script>\n  </head>\n  <body>\n${n}\n  </body>\n  ${this._requirePbTify?'<script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-tify.js"><\/script>':""}\n</html>`,o={title:this.title,html:r,html_pre_processor:"none",css:s,css_starter:"normalize",template:!1,editors:110};return t`
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
    `}_toggleSource(){const t=this.renderRoot.querySelector("#source");t&&(t.classList.contains("open")?(t.classList.remove("open"),this._showCodeLabel="demo.showCode.show"):(t.classList.add("open"),this._showCodeLabel="demo.showCode.hide"))}static removeIndent(t=""){const e=t.match(/^[^\S\n]*(?=\S)/gm);if(!e||!e[0])return t;const i=e.reduce((t,e)=>Math.min(t,e.length),e[0].length);return i?t.replace(new RegExp(`^${" ".repeat(i)}`,"gm"),""):t}static indent(t,e){const i="\t".repeat(e);return t.replace(/^[^\S\n]*(?=\S)/gm,i+"$&")}static styles=e`
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
  `}customElements.define("pb-demo-snippet",ot);const at="3.0.0-next-4.22";class lt extends n{static get properties(){return Object.assign({version:{type:String,reflect:!0}},super.properties)}constructor(){super(),this.version=at}render(){return t`<span>${this.version?this.version:"unknown"}</span>`}createRenderRoot(){return this}}customElements.define("pb-version",lt);var ct="top",dt="bottom",pt="right",ut="left",ht="auto",gt=[ct,dt,pt,ut],ft="start",mt="end",bt="clippingParents",yt="viewport",vt="popper",_t="reference",wt=gt.reduce(function(t,e){return t.concat([e+"-"+ft,e+"-"+mt])},[]),xt=[].concat(gt,[ht]).reduce(function(t,e){return t.concat([e,e+"-"+ft,e+"-"+mt])},[]),kt=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function At(t){return t?(t.nodeName||"").toLowerCase():null}function St(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Ot(t){return t instanceof St(t).Element||t instanceof Element}function Et(t){return t instanceof St(t).HTMLElement||t instanceof HTMLElement}function $t(t){return"undefined"!=typeof ShadowRoot&&(t instanceof St(t).ShadowRoot||t instanceof ShadowRoot)}function Ct(t){var e=t.state;Object.keys(e.elements).forEach(function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];Et(s)&&At(s)&&(Object.assign(s.style,i),Object.keys(n).forEach(function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)}))})}function Tt(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach(function(t){var n=e.elements[t],s=e.attributes[t]||{},r=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce(function(t,e){return t[e]="",t},{});Et(n)&&At(n)&&(Object.assign(n.style,r),Object.keys(s).forEach(function(t){n.removeAttribute(t)}))})}}var It={name:"applyStyles",enabled:!0,phase:"write",fn:Ct,effect:Tt,requires:["computeStyles"]};function Lt(t){return t.split("-")[0]}var Rt=Math.max,jt=Math.min,Nt=Math.round;function Pt(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Dt(){return!/^((?!chrome|android).)*safari/i.test(Pt())}function Ft(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),s=1,r=1;e&&Et(t)&&(s=t.offsetWidth>0&&Nt(n.width)/t.offsetWidth||1,r=t.offsetHeight>0&&Nt(n.height)/t.offsetHeight||1);var o=(Ot(t)?St(t):window).visualViewport,a=!Dt()&&i,l=(n.left+(a&&o?o.offsetLeft:0))/s,c=(n.top+(a&&o?o.offsetTop:0))/r,d=n.width/s,p=n.height/r;return{width:d,height:p,top:c,right:l+d,bottom:c+p,left:l,x:l,y:c}}function Bt(t){var e=Ft(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Mt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&$t(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function qt(t){return St(t).getComputedStyle(t)}function zt(t){return["table","td","th"].indexOf(At(t))>=0}function Ut(t){return((Ot(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ht(t){return"html"===At(t)?t:t.assignedSlot||t.parentNode||($t(t)?t.host:null)||Ut(t)}function Vt(t){return Et(t)&&"fixed"!==qt(t).position?t.offsetParent:null}function Wt(t){var e=/firefox/i.test(Pt());if(/Trident/i.test(Pt())&&Et(t)&&"fixed"===qt(t).position)return null;var i=Ht(t);for($t(i)&&(i=i.host);Et(i)&&["html","body"].indexOf(At(i))<0;){var n=qt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}function Gt(t){for(var e=St(t),i=Vt(t);i&&zt(i)&&"static"===qt(i).position;)i=Vt(i);return i&&("html"===At(i)||"body"===At(i)&&"static"===qt(i).position)?e:i||Wt(t)||e}function Yt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Qt(t,e,i){return Rt(t,jt(e,i))}function Kt(t,e,i){var n=Qt(t,e,i);return n>i?i:n}function Jt(){return{top:0,right:0,bottom:0,left:0}}function Zt(t){return Object.assign({},Jt(),t)}function Xt(t,e){return e.reduce(function(e,i){return e[i]=t,e},{})}var te=function(t,e){return Zt("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Xt(t,gt))};function ee(t){var e,i=t.state,n=t.name,s=t.options,r=i.elements.arrow,o=i.modifiersData.popperOffsets,a=Lt(i.placement),l=Yt(a),c=[ut,pt].indexOf(a)>=0?"height":"width";if(r&&o){var d=te(s.padding,i),p=Bt(r),u="y"===l?ct:ut,h="y"===l?dt:pt,g=i.rects.reference[c]+i.rects.reference[l]-o[l]-i.rects.popper[c],f=o[l]-i.rects.reference[l],m=Gt(r),b=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,y=g/2-f/2,v=d[u],_=b-p[c]-d[h],w=b/2-p[c]/2+y,x=Qt(v,w,_),k=l;i.modifiersData[n]=((e={})[k]=x,e.centerOffset=x-w,e)}}function ie(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Mt(e.elements.popper,n)&&(e.elements.arrow=n)}function ne(t){return t.split("-")[1]}var se={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(t,e){var i=t.x,n=t.y,s=e.devicePixelRatio||1;return{x:Nt(i*s)/s||0,y:Nt(n*s)/s||0}}function oe(t){var e,i=t.popper,n=t.popperRect,s=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,d=t.roundOffsets,p=t.isFixed,u=o.x,h=void 0===u?0:u,g=o.y,f=void 0===g?0:g,m="function"==typeof d?d({x:h,y:f}):{x:h,y:f};h=m.x,f=m.y;var b=o.hasOwnProperty("x"),y=o.hasOwnProperty("y"),v=ut,_=ct,w=window;if(c){var x=Gt(i),k="clientHeight",A="clientWidth";if(x===St(i)&&"static"!==qt(x=Ut(i)).position&&"absolute"===a&&(k="scrollHeight",A="scrollWidth"),s===ct||(s===ut||s===pt)&&r===mt)_=dt,f-=(p&&x===w&&w.visualViewport?w.visualViewport.height:x[k])-n.height,f*=l?1:-1;if(s===ut||(s===ct||s===dt)&&r===mt)v=pt,h-=(p&&x===w&&w.visualViewport?w.visualViewport.width:x[A])-n.width,h*=l?1:-1}var S,O=Object.assign({position:a},c&&se),E=!0===d?re({x:h,y:f},St(i)):{x:h,y:f};return h=E.x,f=E.y,l?Object.assign({},O,((S={})[_]=y?"0":"",S[v]=b?"0":"",S.transform=(w.devicePixelRatio||1)<=1?"translate("+h+"px, "+f+"px)":"translate3d("+h+"px, "+f+"px, 0)",S)):Object.assign({},O,((e={})[_]=y?f+"px":"",e[v]=b?h+"px":"",e.transform="",e))}function ae(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,r=i.adaptive,o=void 0===r||r,a=i.roundOffsets,l=void 0===a||a,c={placement:Lt(e.placement),variation:ne(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,oe(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,oe(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var le={passive:!0};function ce(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,r=void 0===s||s,o=n.resize,a=void 0===o||o,l=St(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach(function(t){t.addEventListener("scroll",i.update,le)}),a&&l.addEventListener("resize",i.update,le),function(){r&&c.forEach(function(t){t.removeEventListener("scroll",i.update,le)}),a&&l.removeEventListener("resize",i.update,le)}}var de={left:"right",right:"left",bottom:"top",top:"bottom"};function pe(t){return t.replace(/left|right|bottom|top/g,function(t){return de[t]})}var ue={start:"end",end:"start"};function he(t){return t.replace(/start|end/g,function(t){return ue[t]})}function ge(t){var e=St(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function fe(t){return Ft(Ut(t)).left+ge(t).scrollLeft}function me(t,e){var i=St(t),n=Ut(t),s=i.visualViewport,r=n.clientWidth,o=n.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;var c=Dt();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:o,x:a+fe(t),y:l}}function be(t){var e,i=Ut(t),n=ge(t),s=null==(e=t.ownerDocument)?void 0:e.body,r=Rt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=Rt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+fe(t),l=-n.scrollTop;return"rtl"===qt(s||i).direction&&(a+=Rt(i.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function ye(t){var e=qt(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function ve(t){return["html","body","#document"].indexOf(At(t))>=0?t.ownerDocument.body:Et(t)&&ye(t)?t:ve(Ht(t))}function _e(t,e){var i;void 0===e&&(e=[]);var n=ve(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),r=St(n),o=s?[r].concat(r.visualViewport||[],ye(n)?n:[]):n,a=e.concat(o);return s?a:a.concat(_e(Ht(o)))}function we(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function xe(t,e){var i=Ft(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}function ke(t,e,i){return e===yt?we(me(t,i)):Ot(e)?xe(e,i):we(be(Ut(t)))}function Ae(t){var e=_e(Ht(t)),i=["absolute","fixed"].indexOf(qt(t).position)>=0&&Et(t)?Gt(t):t;return Ot(i)?e.filter(function(t){return Ot(t)&&Mt(t,i)&&"body"!==At(t)}):[]}function Se(t,e,i,n){var s="clippingParents"===e?Ae(t):[].concat(e),r=[].concat(s,[i]),o=r[0],a=r.reduce(function(e,i){var s=ke(t,i,n);return e.top=Rt(s.top,e.top),e.right=jt(s.right,e.right),e.bottom=jt(s.bottom,e.bottom),e.left=Rt(s.left,e.left),e},ke(t,o,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Oe(t){var e,i=t.reference,n=t.element,s=t.placement,r=s?Lt(s):null,o=s?ne(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(r){case ct:e={x:a,y:i.y-n.height};break;case dt:e={x:a,y:i.y+i.height};break;case pt:e={x:i.x+i.width,y:l};break;case ut:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=r?Yt(r):null;if(null!=c){var d="y"===c?"height":"width";switch(o){case ft:e[c]=e[c]-(i[d]/2-n[d]/2);break;case mt:e[c]=e[c]+(i[d]/2-n[d]/2)}}return e}function Ee(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,r=i.strategy,o=void 0===r?t.strategy:r,a=i.boundary,l=void 0===a?bt:a,c=i.rootBoundary,d=void 0===c?yt:c,p=i.elementContext,u=void 0===p?vt:p,h=i.altBoundary,g=void 0!==h&&h,f=i.padding,m=void 0===f?0:f,b=Zt("number"!=typeof m?m:Xt(m,gt)),y=u===vt?_t:vt,v=t.rects.popper,_=t.elements[g?y:u],w=Se(Ot(_)?_:_.contextElement||Ut(t.elements.popper),l,d,o),x=Ft(t.elements.reference),k=Oe({reference:x,element:v,placement:s}),A=we(Object.assign({},v,k)),S=u===vt?A:x,O={top:w.top-S.top+b.top,bottom:S.bottom-w.bottom+b.bottom,left:w.left-S.left+b.left,right:S.right-w.right+b.right},E=t.modifiersData.offset;if(u===vt&&E){var $=E[s];Object.keys(O).forEach(function(t){var e=[pt,dt].indexOf(t)>=0?1:-1,i=[ct,dt].indexOf(t)>=0?"y":"x";O[t]+=$[i]*e})}return O}function $e(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,r=i.rootBoundary,o=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?xt:l,d=ne(n),p=d?a?wt:wt.filter(function(t){return ne(t)===d}):gt,u=p.filter(function(t){return c.indexOf(t)>=0});0===u.length&&(u=p);var h=u.reduce(function(e,i){return e[i]=Ee(t,{placement:i,boundary:s,rootBoundary:r,padding:o})[Lt(i)],e},{});return Object.keys(h).sort(function(t,e){return h[t]-h[e]})}function Ce(t){if(Lt(t)===ht)return[];var e=pe(t);return[he(t),e,he(e)]}function Te(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,r=void 0===s||s,o=i.altAxis,a=void 0===o||o,l=i.fallbackPlacements,c=i.padding,d=i.boundary,p=i.rootBoundary,u=i.altBoundary,h=i.flipVariations,g=void 0===h||h,f=i.allowedAutoPlacements,m=e.options.placement,b=Lt(m),y=l||(b===m||!g?[pe(m)]:Ce(m)),v=[m].concat(y).reduce(function(t,i){return t.concat(Lt(i)===ht?$e(e,{placement:i,boundary:d,rootBoundary:p,padding:c,flipVariations:g,allowedAutoPlacements:f}):i)},[]),_=e.rects.reference,w=e.rects.popper,x=new Map,k=!0,A=v[0],S=0;S<v.length;S++){var O=v[S],E=Lt(O),$=ne(O)===ft,C=[ct,dt].indexOf(E)>=0,T=C?"width":"height",I=Ee(e,{placement:O,boundary:d,rootBoundary:p,altBoundary:u,padding:c}),L=C?$?pt:ut:$?dt:ct;_[T]>w[T]&&(L=pe(L));var R=pe(L),j=[];if(r&&j.push(I[E]<=0),a&&j.push(I[L]<=0,I[R]<=0),j.every(function(t){return t})){A=O,k=!1;break}x.set(O,j)}if(k)for(var N=function(t){var e=v.find(function(e){var i=x.get(e);if(i)return i.slice(0,t).every(function(t){return t})});if(e)return A=e,"break"},P=g?3:1;P>0;P--){if("break"===N(P))break}e.placement!==A&&(e.modifiersData[n]._skip=!0,e.placement=A,e.reset=!0)}}function Ie(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Le(t){return[ct,pt,dt,ut].some(function(e){return t[e]>=0})}function Re(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,r=e.modifiersData.preventOverflow,o=Ee(e,{elementContext:"reference"}),a=Ee(e,{altBoundary:!0}),l=Ie(o,n),c=Ie(a,s,r),d=Le(l),p=Le(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":p})}function je(t,e,i){var n=Lt(t),s=[ut,ct].indexOf(n)>=0?-1:1,r="function"==typeof i?i(Object.assign({},e,{placement:t})):i,o=r[0],a=r[1];return o=o||0,a=(a||0)*s,[ut,pt].indexOf(n)>=0?{x:a,y:o}:{x:o,y:a}}function Ne(t){var e=t.state,i=t.options,n=t.name,s=i.offset,r=void 0===s?[0,0]:s,o=xt.reduce(function(t,i){return t[i]=je(i,e.rects,r),t},{}),a=o[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=o}function Pe(t){var e=t.state,i=t.name;e.modifiersData[i]=Oe({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}function De(t){return"x"===t?"y":"x"}function Fe(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,r=void 0===s||s,o=i.altAxis,a=void 0!==o&&o,l=i.boundary,c=i.rootBoundary,d=i.altBoundary,p=i.padding,u=i.tether,h=void 0===u||u,g=i.tetherOffset,f=void 0===g?0:g,m=Ee(e,{boundary:l,rootBoundary:c,padding:p,altBoundary:d}),b=Lt(e.placement),y=ne(e.placement),v=!y,_=Yt(b),w=De(_),x=e.modifiersData.popperOffsets,k=e.rects.reference,A=e.rects.popper,S="function"==typeof f?f(Object.assign({},e.rects,{placement:e.placement})):f,O="number"==typeof S?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),E=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,$={x:0,y:0};if(x){if(r){var C,T="y"===_?ct:ut,I="y"===_?dt:pt,L="y"===_?"height":"width",R=x[_],j=R+m[T],N=R-m[I],P=h?-A[L]/2:0,D=y===ft?k[L]:A[L],F=y===ft?-A[L]:-k[L],B=e.elements.arrow,M=h&&B?Bt(B):{width:0,height:0},q=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Jt(),z=q[T],U=q[I],H=Qt(0,k[L],M[L]),V=v?k[L]/2-P-H-z-O.mainAxis:D-H-z-O.mainAxis,W=v?-k[L]/2+P+H+U+O.mainAxis:F+H+U+O.mainAxis,G=e.elements.arrow&&Gt(e.elements.arrow),Y=G?"y"===_?G.clientTop||0:G.clientLeft||0:0,Q=null!=(C=null==E?void 0:E[_])?C:0,K=R+W-Q,J=Qt(h?jt(j,R+V-Q-Y):j,R,h?Rt(N,K):N);x[_]=J,$[_]=J-R}if(a){var Z,X="x"===_?ct:ut,tt="x"===_?dt:pt,et=x[w],it="y"===w?"height":"width",nt=et+m[X],st=et-m[tt],rt=-1!==[ct,ut].indexOf(b),ot=null!=(Z=null==E?void 0:E[w])?Z:0,at=rt?nt:et-k[it]-A[it]-ot+O.altAxis,lt=rt?et+k[it]+A[it]-ot-O.altAxis:st,ht=h&&rt?Kt(at,et,lt):Qt(h?at:nt,et,h?lt:st);x[w]=ht,$[w]=ht-et}e.modifiersData[n]=$}}function Be(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Me(t){return t!==St(t)&&Et(t)?Be(t):ge(t)}function qe(t){var e=t.getBoundingClientRect(),i=Nt(e.width)/t.offsetWidth||1,n=Nt(e.height)/t.offsetHeight||1;return 1!==i||1!==n}function ze(t,e,i){void 0===i&&(i=!1);var n=Et(e),s=Et(e)&&qe(e),r=Ut(e),o=Ft(t,s,i),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!i)&&(("body"!==At(e)||ye(r))&&(a=Me(e)),Et(e)?((l=Ft(e,!0)).x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=fe(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function Ue(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}}),n.push(t)}return t.forEach(function(t){e.set(t.name,t)}),t.forEach(function(t){i.has(t.name)||s(t)}),n}function He(t){var e=Ue(t);return kt.reduce(function(t,i){return t.concat(e.filter(function(t){return t.phase===i}))},[])}function Ve(t){var e;return function(){return e||(e=new Promise(function(i){Promise.resolve().then(function(){e=void 0,i(t())})})),e}}function We(t){var e=t.reduce(function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t},{});return Object.keys(e).map(function(t){return e[t]})}var Ge={placement:"bottom",modifiers:[],strategy:"absolute"};function Ye(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some(function(t){return!(t&&"function"==typeof t.getBoundingClientRect)})}function Qe(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,r=void 0===s?Ge:s;return function(t,e,i){void 0===i&&(i=r);var s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ge,r),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},o=[],a=!1,l={state:s,setOptions:function(i){var o="function"==typeof i?i(s.options):i;d(),s.options=Object.assign({},r,s.options,o),s.scrollParents={reference:Ot(t)?_e(t):t.contextElement?_e(t.contextElement):[],popper:_e(e)};var a=He(We([].concat(n,s.options.modifiers)));return s.orderedModifiers=a.filter(function(t){return t.enabled}),c(),l.update()},forceUpdate:function(){if(!a){var t=s.elements,e=t.reference,i=t.popper;if(Ye(e,i)){s.rects={reference:ze(e,Gt(i),"fixed"===s.options.strategy),popper:Bt(i)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(t){return s.modifiersData[t.name]=Object.assign({},t.data)});for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var r=s.orderedModifiers[n],o=r.fn,c=r.options,d=void 0===c?{}:c,p=r.name;"function"==typeof o&&(s=o({state:s,options:d,name:p,instance:l})||s)}else s.reset=!1,n=-1}}},update:Ve(function(){return new Promise(function(t){l.forceUpdate(),t(s)})}),destroy:function(){d(),a=!0}};if(!Ye(t,e))return l;function c(){s.orderedModifiers.forEach(function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,r=t.effect;if("function"==typeof r){var a=r({state:s,name:e,instance:l,options:n}),c=function(){};o.push(a||c)}})}function d(){o.forEach(function(t){return t()}),o=[]}return l.setOptions(i).then(function(t){!a&&i.onFirstUpdate&&i.onFirstUpdate(t)}),l}}var Ke=Qe({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ce,data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:Pe,data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ae,data:{}},It,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ne},{name:"flip",enabled:!0,phase:"main",fn:Te,requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:Fe,requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:ee,effect:ie,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Re}]}),Je="tippy-box",Ze="tippy-content",Xe="tippy-backdrop",ti="tippy-arrow",ei="tippy-svg-arrow",ii={passive:!0,capture:!0},ni=function(){return document.body};function si(t,e,i){if(Array.isArray(t)){var n=t[e];return n??(Array.isArray(i)?i[e]:i)}return t}function ri(t,e){var i={}.toString.call(t);return 0===i.indexOf("[object")&&i.indexOf(e+"]")>-1}function oi(t,e){return"function"==typeof t?t.apply(void 0,e):t}function ai(t,e){return 0===e?t:function(n){clearTimeout(i),i=setTimeout(function(){t(n)},e)};var i}function li(t){return t.split(/\s+/).filter(Boolean)}function ci(t){return[].concat(t)}function di(t,e){-1===t.indexOf(e)&&t.push(e)}function pi(t){return t.filter(function(e,i){return t.indexOf(e)===i})}function ui(t){return t.split("-")[0]}function hi(t){return[].slice.call(t)}function gi(t){return Object.keys(t).reduce(function(e,i){return void 0!==t[i]&&(e[i]=t[i]),e},{})}function fi(){return document.createElement("div")}function mi(t){return["Element","Fragment"].some(function(e){return ri(t,e)})}function bi(t){return ri(t,"NodeList")}function yi(t){return ri(t,"MouseEvent")}function vi(t){return!(!t||!t._tippy||t._tippy.reference!==t)}function _i(t){return mi(t)?[t]:bi(t)?hi(t):Array.isArray(t)?t:hi(document.querySelectorAll(t))}function wi(t,e){t.forEach(function(t){t&&(t.style.transitionDuration=e+"ms")})}function xi(t,e){t.forEach(function(t){t&&t.setAttribute("data-state",e)})}function ki(t){var e,i=ci(t)[0];return null!=i&&null!=(e=i.ownerDocument)&&e.body?i.ownerDocument:document}function Ai(t,e){var i=e.clientX,n=e.clientY;return t.every(function(t){var e=t.popperRect,s=t.popperState,r=t.props.interactiveBorder,o=ui(s.placement),a=s.modifiersData.offset;if(!a)return!0;var l="bottom"===o?a.top.y:0,c="top"===o?a.bottom.y:0,d="right"===o?a.left.x:0,p="left"===o?a.right.x:0,u=e.top-n+l>r,h=n-e.bottom-c>r,g=e.left-i+d>r,f=i-e.right-p>r;return u||h||g||f})}function Si(t,e,i){var n=e+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(e){t[n](e,i)})}function Oi(t,e){for(var i=e;i;){var n;if(t.contains(i))return!0;i=null==i.getRootNode||null==(n=i.getRootNode())?void 0:n.host}return!1}var Ei={isTouch:!1},$i=0;function Ci(){Ei.isTouch||(Ei.isTouch=!0,window.performance&&document.addEventListener("mousemove",Ti))}function Ti(){var t=performance.now();t-$i<20&&(Ei.isTouch=!1,document.removeEventListener("mousemove",Ti)),$i=t}function Ii(){var t=document.activeElement;if(vi(t)){var e=t._tippy;t.blur&&!e.state.isVisible&&t.blur()}}function Li(){document.addEventListener("touchstart",Ci,ii),window.addEventListener("blur",Ii)}var Ri=!!("undefined"!=typeof window&&"undefined"!=typeof document)&&!!window.msCrypto,ji={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Ni={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},Pi=Object.assign({appendTo:ni,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},ji,Ni),Di=Object.keys(Pi),Fi=function(t){Object.keys(t).forEach(function(e){Pi[e]=t[e]})};function Bi(t){var e=(t.plugins||[]).reduce(function(e,i){var n,s=i.name,r=i.defaultValue;s&&(e[s]=void 0!==t[s]?t[s]:null!=(n=Pi[s])?n:r);return e},{});return Object.assign({},t,e)}function Mi(t,e){var i=(e?Object.keys(Bi(Object.assign({},Pi,{plugins:e}))):Di).reduce(function(e,i){var n=(t.getAttribute("data-tippy-"+i)||"").trim();if(!n)return e;if("content"===i)e[i]=n;else try{e[i]=JSON.parse(n)}catch(t){e[i]=n}return e},{});return i}function qi(t,e){var i=Object.assign({},e,{content:oi(e.content,[t])},e.ignoreAttributes?{}:Mi(t,e.plugins));return i.aria=Object.assign({},Pi.aria,i.aria),i.aria={expanded:"auto"===i.aria.expanded?e.interactive:i.aria.expanded,content:"auto"===i.aria.content?e.interactive?null:"describedby":i.aria.content},i}var zi=function(){return"innerHTML"};function Ui(t,e){t[zi()]=e}function Hi(t){var e=fi();return!0===t?e.className=ti:(e.className=ei,mi(t)?e.appendChild(t):Ui(e,t)),e}function Vi(t,e){mi(e.content)?(Ui(t,""),t.appendChild(e.content)):"function"!=typeof e.content&&(e.allowHTML?Ui(t,e.content):t.textContent=e.content)}function Wi(t){var e=t.firstElementChild,i=hi(e.children);return{box:e,content:i.find(function(t){return t.classList.contains(Ze)}),arrow:i.find(function(t){return t.classList.contains(ti)||t.classList.contains(ei)}),backdrop:i.find(function(t){return t.classList.contains(Xe)})}}function Gi(t){var e=fi(),i=fi();i.className=Je,i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var n=fi();function s(i,n){var s=Wi(e),r=s.box,o=s.content,a=s.arrow;n.theme?r.setAttribute("data-theme",n.theme):r.removeAttribute("data-theme"),"string"==typeof n.animation?r.setAttribute("data-animation",n.animation):r.removeAttribute("data-animation"),n.inertia?r.setAttribute("data-inertia",""):r.removeAttribute("data-inertia"),r.style.maxWidth="number"==typeof n.maxWidth?n.maxWidth+"px":n.maxWidth,n.role?r.setAttribute("role",n.role):r.removeAttribute("role"),i.content===n.content&&i.allowHTML===n.allowHTML||Vi(o,t.props),n.arrow?a?i.arrow!==n.arrow&&(r.removeChild(a),r.appendChild(Hi(n.arrow))):r.appendChild(Hi(n.arrow)):a&&r.removeChild(a)}return n.className=Ze,n.setAttribute("data-state","hidden"),Vi(n,t.props),e.appendChild(i),i.appendChild(n),s(t.props,t.props),{popper:e,onUpdate:s}}Gi.$$tippy=!0;var Yi=1,Qi=[],Ki=[];function Ji(t,e){var i,n,s,r,o,a,l,c=qi(t,Object.assign({},Pi,Bi(gi(e)))),d=!1,p=!1,u=!1,h=!1,g=[],f=ai(K,c.interactiveDebounce),m=Yi++,b=null,y=pi(c.plugins),v={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},_={id:m,reference:t,popper:fi(),popperInstance:b,props:c,state:v,plugins:y,clearDelayTimeouts:lt,setProps:ct,setContent:dt,show:pt,hide:ut,hideWithInteractivity:ht,enable:ot,disable:at,unmount:gt,destroy:ft};if(!c.render)return _;var w=c.render(_),x=w.popper,k=w.onUpdate;x.setAttribute("data-tippy-root",""),x.id="tippy-"+_.id,_.popper=x,t._tippy=_,x._tippy=_;var A=y.map(function(t){return t.fn(_)}),S=t.hasAttribute("aria-expanded");return G(),P(),R(),j("onCreate",[_]),c.showOnCreate&&st(),x.addEventListener("mouseenter",function(){_.props.interactive&&_.state.isVisible&&_.clearDelayTimeouts()}),x.addEventListener("mouseleave",function(){_.props.interactive&&_.props.trigger.indexOf("mouseenter")>=0&&T().addEventListener("mousemove",f)}),_;function O(){var t=_.props.touch;return Array.isArray(t)?t:[t,0]}function E(){return"hold"===O()[0]}function $(){var t;return!(null==(t=_.props.render)||!t.$$tippy)}function C(){return l||t}function T(){var t=C().parentNode;return t?ki(t):document}function I(){return Wi(x)}function L(t){return _.state.isMounted&&!_.state.isVisible||Ei.isTouch||r&&"focus"===r.type?0:si(_.props.delay,t?0:1,Pi.delay)}function R(t){void 0===t&&(t=!1),x.style.pointerEvents=_.props.interactive&&!t?"":"none",x.style.zIndex=""+_.props.zIndex}function j(t,e,i){var n;(void 0===i&&(i=!0),A.forEach(function(i){i[t]&&i[t].apply(i,e)}),i)&&(n=_.props)[t].apply(n,e)}function N(){var e=_.props.aria;if(e.content){var i="aria-"+e.content,n=x.id;ci(_.props.triggerTarget||t).forEach(function(t){var e=t.getAttribute(i);if(_.state.isVisible)t.setAttribute(i,e?e+" "+n:n);else{var s=e&&e.replace(n,"").trim();s?t.setAttribute(i,s):t.removeAttribute(i)}})}}function P(){!S&&_.props.aria.expanded&&ci(_.props.triggerTarget||t).forEach(function(t){_.props.interactive?t.setAttribute("aria-expanded",_.state.isVisible&&t===C()?"true":"false"):t.removeAttribute("aria-expanded")})}function D(){T().removeEventListener("mousemove",f),Qi=Qi.filter(function(t){return t!==f})}function F(e){if(!Ei.isTouch||!u&&"mousedown"!==e.type){var i=e.composedPath&&e.composedPath()[0]||e.target;if(!_.props.interactive||!Oi(x,i)){if(ci(_.props.triggerTarget||t).some(function(t){return Oi(t,i)})){if(Ei.isTouch)return;if(_.state.isVisible&&_.props.trigger.indexOf("click")>=0)return}else j("onClickOutside",[_,e]);!0===_.props.hideOnClick&&(_.clearDelayTimeouts(),_.hide(),p=!0,setTimeout(function(){p=!1}),_.state.isMounted||z())}}}function B(){u=!0}function M(){u=!1}function q(){var t=T();t.addEventListener("mousedown",F,!0),t.addEventListener("touchend",F,ii),t.addEventListener("touchstart",M,ii),t.addEventListener("touchmove",B,ii)}function z(){var t=T();t.removeEventListener("mousedown",F,!0),t.removeEventListener("touchend",F,ii),t.removeEventListener("touchstart",M,ii),t.removeEventListener("touchmove",B,ii)}function U(t,e){V(t,function(){!_.state.isVisible&&x.parentNode&&x.parentNode.contains(x)&&e()})}function H(t,e){V(t,e)}function V(t,e){var i=I().box;function n(t){t.target===i&&(Si(i,"remove",n),e())}if(0===t)return e();Si(i,"remove",o),Si(i,"add",n),o=n}function W(e,i,n){void 0===n&&(n=!1),ci(_.props.triggerTarget||t).forEach(function(t){t.addEventListener(e,i,n),g.push({node:t,eventType:e,handler:i,options:n})})}function G(){E()&&(W("touchstart",Q,{passive:!0}),W("touchend",J,{passive:!0})),li(_.props.trigger).forEach(function(t){if("manual"!==t)switch(W(t,Q),t){case"mouseenter":W("mouseleave",J);break;case"focus":W(Ri?"focusout":"blur",Z);break;case"focusin":W("focusout",Z)}})}function Y(){g.forEach(function(t){var e=t.node,i=t.eventType,n=t.handler,s=t.options;e.removeEventListener(i,n,s)}),g=[]}function Q(t){var e,i=!1;if(_.state.isEnabled&&!X(t)&&!p){var n="focus"===(null==(e=r)?void 0:e.type);r=t,l=t.currentTarget,P(),!_.state.isVisible&&yi(t)&&Qi.forEach(function(e){return e(t)}),"click"===t.type&&(_.props.trigger.indexOf("mouseenter")<0||d)&&!1!==_.props.hideOnClick&&_.state.isVisible?i=!0:st(t),"click"===t.type&&(d=!i),i&&!n&&rt(t)}}function K(t){var e=t.target,i=C().contains(e)||x.contains(e);if("mousemove"!==t.type||!i){var n=nt().concat(x).map(function(t){var e,i=null==(e=t._tippy.popperInstance)?void 0:e.state;return i?{popperRect:t.getBoundingClientRect(),popperState:i,props:c}:null}).filter(Boolean);Ai(n,t)&&(D(),rt(t))}}function J(t){X(t)||_.props.trigger.indexOf("click")>=0&&d||(_.props.interactive?_.hideWithInteractivity(t):rt(t))}function Z(t){_.props.trigger.indexOf("focusin")<0&&t.target!==C()||_.props.interactive&&t.relatedTarget&&x.contains(t.relatedTarget)||rt(t)}function X(t){return!!Ei.isTouch&&E()!==t.type.indexOf("touch")>=0}function tt(){et();var e=_.props,i=e.popperOptions,n=e.placement,s=e.offset,r=e.getReferenceClientRect,o=e.moveTransition,l=$()?Wi(x).arrow:null,c=r?{getBoundingClientRect:r,contextElement:r.contextElement||C()}:t,d={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(t){var e=t.state;if($()){var i=I().box;["placement","reference-hidden","escaped"].forEach(function(t){"placement"===t?i.setAttribute("data-placement",e.placement):e.attributes.popper["data-popper-"+t]?i.setAttribute("data-"+t,""):i.removeAttribute("data-"+t)}),e.attributes.popper={}}}},p=[{name:"offset",options:{offset:s}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!o}},d];$()&&l&&p.push({name:"arrow",options:{element:l,padding:3}}),p.push.apply(p,(null==i?void 0:i.modifiers)||[]),_.popperInstance=Ke(c,x,Object.assign({},i,{placement:n,onFirstUpdate:a,modifiers:p}))}function et(){_.popperInstance&&(_.popperInstance.destroy(),_.popperInstance=null)}function it(){var t,e=_.props.appendTo,i=C();(t=_.props.interactive&&e===ni||"parent"===e?i.parentNode:oi(e,[i])).contains(x)||t.appendChild(x),_.state.isMounted=!0,tt()}function nt(){return hi(x.querySelectorAll("[data-tippy-root]"))}function st(t){_.clearDelayTimeouts(),t&&j("onTrigger",[_,t]),q();var e=L(!0),n=O(),s=n[0],r=n[1];Ei.isTouch&&"hold"===s&&r&&(e=r),e?i=setTimeout(function(){_.show()},e):_.show()}function rt(t){if(_.clearDelayTimeouts(),j("onUntrigger",[_,t]),_.state.isVisible){if(!(_.props.trigger.indexOf("mouseenter")>=0&&_.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(t.type)>=0&&d)){var e=L(!1);e?n=setTimeout(function(){_.state.isVisible&&_.hide()},e):s=requestAnimationFrame(function(){_.hide()})}}else z()}function ot(){_.state.isEnabled=!0}function at(){_.hide(),_.state.isEnabled=!1}function lt(){clearTimeout(i),clearTimeout(n),cancelAnimationFrame(s)}function ct(e){if(!_.state.isDestroyed){j("onBeforeUpdate",[_,e]),Y();var i=_.props,n=qi(t,Object.assign({},i,gi(e),{ignoreAttributes:!0}));_.props=n,G(),i.interactiveDebounce!==n.interactiveDebounce&&(D(),f=ai(K,n.interactiveDebounce)),i.triggerTarget&&!n.triggerTarget?ci(i.triggerTarget).forEach(function(t){t.removeAttribute("aria-expanded")}):n.triggerTarget&&t.removeAttribute("aria-expanded"),P(),R(),k&&k(i,n),_.popperInstance&&(tt(),nt().forEach(function(t){requestAnimationFrame(t._tippy.popperInstance.forceUpdate)})),j("onAfterUpdate",[_,e])}}function dt(t){_.setProps({content:t})}function pt(){var t=_.state.isVisible,e=_.state.isDestroyed,i=!_.state.isEnabled,n=Ei.isTouch&&!_.props.touch,s=si(_.props.duration,0,Pi.duration);if(!(t||e||i||n||C().hasAttribute("disabled")||(j("onShow",[_],!1),!1===_.props.onShow(_)))){if(_.state.isVisible=!0,$()&&(x.style.visibility="visible"),R(),q(),_.state.isMounted||(x.style.transition="none"),$()){var r=I();wi([r.box,r.content],0)}a=function(){var t;if(_.state.isVisible&&!h){if(h=!0,x.offsetHeight,x.style.transition=_.props.moveTransition,$()&&_.props.animation){var e=I(),i=e.box,n=e.content;wi([i,n],s),xi([i,n],"visible")}N(),P(),di(Ki,_),null==(t=_.popperInstance)||t.forceUpdate(),j("onMount",[_]),_.props.animation&&$()&&H(s,function(){_.state.isShown=!0,j("onShown",[_])})}},it()}}function ut(){var t=!_.state.isVisible,e=_.state.isDestroyed,i=!_.state.isEnabled,n=si(_.props.duration,1,Pi.duration);if(!(t||e||i)&&(j("onHide",[_],!1),!1!==_.props.onHide(_))){if(_.state.isVisible=!1,_.state.isShown=!1,h=!1,d=!1,$()&&(x.style.visibility="hidden"),D(),z(),R(!0),$()){var s=I(),r=s.box,o=s.content;_.props.animation&&(wi([r,o],n),xi([r,o],"hidden"))}N(),P(),_.props.animation?$()&&U(n,_.unmount):_.unmount()}}function ht(t){T().addEventListener("mousemove",f),di(Qi,f),f(t)}function gt(){_.state.isVisible&&_.hide(),_.state.isMounted&&(et(),nt().forEach(function(t){t._tippy.unmount()}),x.parentNode&&x.parentNode.removeChild(x),Ki=Ki.filter(function(t){return t!==_}),_.state.isMounted=!1,j("onHidden",[_]))}function ft(){_.state.isDestroyed||(_.clearDelayTimeouts(),_.unmount(),Y(),delete t._tippy,_.state.isDestroyed=!0,j("onDestroy",[_]))}}function Zi(t,e){void 0===e&&(e={});var i=Pi.plugins.concat(e.plugins||[]);Li();var n=Object.assign({},e,{plugins:i}),s=_i(t).reduce(function(t,e){var i=e&&Ji(e,n);return i&&t.push(i),t},[]);return mi(t)?s[0]:s}function Xi(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,(t,e)=>0===+t?"":0===e?t.toLowerCase():t.toUpperCase()).replace("-","")}Zi.defaultProps=Pi,Zi.setDefaultProps=Fi,Zi.currentInput=Ei,Object.assign({},It,{effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow)}}),Zi.setDefaultProps({render:Gi});const tn='\n    .tippy-box[data-animation=fade][data-state=hidden] {\n        opacity: 0\n    }\n\n    .tippy-iOS {\n        cursor: pointer!important;\n        -webkit-tap-highlight-color: transparent\n    }\n\n    [data-tippy-root] {\n        max-width: calc(100vw - 10px)\n    }\n\n    .tippy-box {\n        position: relative;\n        background-color: #333;\n        color: #fff;\n        border-radius: 4px;\n        font-size: clamp(\n          calc(var(--pb-popover-font-size, 1rem) * var(--pb-min-zoom, 0.5)), \n          calc(var(--pb-popover-font-size, 1rem) * var(--pb-zoom-factor)), \n          calc(var(--pb-popover-font-size, 1rem) * var(--pb-max-zoom, 3.0))\n        );\n        line-height: calc(var(--pb-popover-line-height, 1.5) * var(--pb-zoom-factor));\n\n        text-align: left;\n        font-style: normal;\n        font-weight: normal;\n        outline: 0;\n        transition-property: transform, visibility, opacity;\n    }\n\n    .tippy-box[data-placement^=top]>.tippy-arrow {\n        bottom: 0\n    }\n\n    .tippy-box[data-placement^=top]>.tippy-arrow:before {\n        bottom: -7px;\n        left: 0;\n        border-width: 8px 8px 0;\n        border-top-color: initial;\n        transform-origin: center top\n    }\n\n    .tippy-box[data-placement^=bottom]>.tippy-arrow {\n        top: 0\n    }\n\n    .tippy-box[data-placement^=bottom]>.tippy-arrow:before {\n        top: -7px;\n        left: 0;\n        border-width: 0 8px 8px;\n        border-bottom-color: initial;\n        transform-origin: center bottom\n    }\n\n    .tippy-box[data-placement^=left]>.tippy-arrow {\n        right: 0\n    }\n\n    .tippy-box[data-placement^=left]>.tippy-arrow:before {\n        border-width: 8px 0 8px 8px;\n        border-left-color: initial;\n        right: -7px;\n        transform-origin: center left\n    }\n\n    .tippy-box[data-placement^=right]>.tippy-arrow {\n        left: 0\n    }\n\n    .tippy-box[data-placement^=right]>.tippy-arrow:before {\n        left: -7px;\n        border-width: 8px 8px 8px 0;\n        border-right-color: initial;\n        transform-origin: center right\n    }\n\n    .tippy-box[data-inertia][data-state=visible] {\n        transition-timing-function: cubic-bezier(.54, 1.5, .38, 1.11)\n    }\n\n    .tippy-arrow {\n        width: 16px;\n        height: 16px;\n        color: #333\n    }\n\n    .tippy-arrow:before {\n        content: "";\n        position: absolute;\n        border-color: transparent;\n        border-style: solid\n    }\n\n    .tippy-content {\n        position: relative;\n        padding: 5px 9px;\n        z-index: 1;\n        overflow: auto;\n        max-height: var(--pb-popover-max-height, calc(100vh - 60px));\n        min-height: var(--pb-popover-min-height, auto);\n        max-width: var(--pb-popover-max-width, auto);\n        min-width: var(--pb-popover-min-width, auto);\n        color: var(--pb-popover-color);\n    }\n',en='\n    .tippy-box[data-theme~=light-border] {\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid rgba(0, 8, 16, .15);\n        color: #333;\n        box-shadow: 0 4px 14px -2px rgba(0, 8, 16, .08)\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-backdrop {\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-arrow:after, .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after {\n        content: "";\n        position: absolute;\n        z-index: -1\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-arrow:after {\n        border-color: transparent;\n        border-style: solid\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after {\n        border-top-color: rgba(0, 8, 16, .2);\n        border-width: 7px 7px 0;\n        top: 17px;\n        left: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg {\n        top: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after {\n        top: 17px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #fff;\n        bottom: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after {\n        border-bottom-color: rgba(0, 8, 16, .2);\n        border-width: 0 7px 7px;\n        bottom: 17px;\n        left: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg {\n        bottom: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after {\n        bottom: 17px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after {\n        border-left-color: rgba(0, 8, 16, .2);\n        border-width: 7px 0 7px 7px;\n        left: 17px;\n        top: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg {\n        left: 11px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after {\n        left: 12px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #fff;\n        right: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after {\n        border-width: 7px 7px 7px 0;\n        right: 17px;\n        top: 1px;\n        border-right-color: rgba(0, 8, 16, .2)\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg {\n        right: 11px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after {\n        right: 12px\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-svg-arrow {\n        fill: #fff\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after {\n        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);\n        background-size: 16px 6px;\n        width: 16px;\n        height: 6px\n    }\n',nn="\n    .tippy-box[data-theme~=light] {\n        color: #26323d;\n        box-shadow: 0 0 20px 4px rgba(154, 161, 177, .15), 0 4px 80px -8px rgba(36, 40, 47, .25), 0 4px 4px -2px rgba(91, 94, 105, .15);\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #fff\n    }\n\n    .tippy-box[data-theme~=light]>.tippy-backdrop {\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light]>.tippy-svg-arrow {\n        fill: #fff\n    }",sn="\n    .tippy-box[data-theme~=material] {\n        background-color: #505355;\n        font-weight: 600\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #505355\n    }\n\n    .tippy-box[data-theme~=material]>.tippy-backdrop {\n        background-color: #505355\n    }\n\n    .tippy-box[data-theme~=material]>.tippy-svg-arrow {\n        fill: #505355\n    }\n",rn="\n    .tippy-box[data-theme~=translucent] {\n        background-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-arrow {\n        width: 14px;\n        height: 14px\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=top]>.tippy-arrow:before {\n        border-width: 7px 7px 0;\n        border-top-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=bottom]>.tippy-arrow:before {\n        border-width: 0 7px 7px;\n        border-bottom-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=left]>.tippy-arrow:before {\n        border-width: 7px 0 7px 7px;\n        border-left-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=right]>.tippy-arrow:before {\n        border-width: 7px 7px 7px 0;\n        border-right-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-backdrop {\n        background-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-svg-arrow {\n        fill: rgba(0, 0, 0, .7)\n    }\n";var on=Object.freeze({__proto__:null,base:tn,camelize:Xi,light:nn,lightBorder:en,material:sn,translucent:rn});function an(t,e,i){if(!t.querySelector(`#pb-popover-${e}`)){const n=t.nodeType===Node.DOCUMENT_NODE?document.head:t;g.log("Loading tippy styles for theme %s into %o",e,n);const s=document.createElement("style");s.type="text/css",s.id=`pb-popover-${e}`,s.innerHTML=i,n.appendChild(s)}}function ln(t,e){if(an(t,"base",tn),e&&"none"!==e){const i=Xi(e),n=on[i];n&&an(t,i,n)}}class cn extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{for:{type:String},theme:{type:String},placement:{type:String},fallbackPlacement:{type:String,attribute:"fallback-placement"},persistent:{type:Boolean},trigger:{type:String},touch:{type:String},popupClass:{type:String,attribute:"popup-class"},remote:{type:String},stopPropagation:{type:Boolean,attribute:"stop-propagation"}})}constructor(){super(),this.persistent=!1,this.trigger=null,this.for=null,this.theme=null,this.placement=null,this.touch=null,this.fallbackPlacement=null,this.popupClass=null,this.stopPropagation=!1,this._tippy=null,this._content=null}render(){return this.for?t`<div class="hidden"><slot></slot></div>`:t`<span id="link" part="trigger" class="${this.persistent?"persistent":""}"
        ><slot name="default"><slot></slot></slot></span
      ><span class="hidden"><slot name="alternate"></slot></span>`}disconnectedCallback(){super.disconnectedCallback(),this._tippy&&this._tippy.destroy(),this._observer&&this._observer.disconnect()}_checkCSSProperties(){if(this.theme||"none"===this.theme||(this.theme=et(this,"--pb-popover-theme","none")),this.placement||(this.placement=et(this,"--pb-popover-placement","auto")),this.fallbackPlacement||(this.fallbackPlacement=et(this,"--pb-popover-fallback-placement",null)),this.persistent||(this.persistent=et(this,"--pb-popover-persistent",!1)),this.trigger||(this.trigger=et(this,"--pb-popover-trigger",null)),!this.touch){const t=et(this,"--pb-popover-touch","hold");this.touch="true"===t||t}}_injectStyles(){this._checkCSSProperties(),ln(this.getRootNode(),this.theme)}_getContent(){if(this._content)return this._content;const t=this._getSlot();if(t){const e=document.createElement("div");return t.assignedNodes().forEach(t=>{e.appendChild(t.content?t.content.cloneNode(!0):t.cloneNode(!0))}),this._content=e,e}return null}_getSlot(){return this.for?this.shadowRoot.querySelector("slot"):this.shadowRoot.querySelector("[name=alternate]")}_registerMutationObserver(){const t=this._getSlot();this._observer=new MutationObserver(()=>{this.alternate=this._getContent(),g.log("alternate changed"),this.emitTo("pb-popover-changed",this.alternate)}),this._observer.observe(this,{subtree:!0,childList:!0,characterData:!0}),t&&t.assignedNodes().forEach(t=>{this._observer.observe(t.content?t.content:t,{subtree:!0,childList:!0,characterData:!0})})}get alternate(){return this._getContent()}set alternate(t){this._content=t,this._tippy&&this._tippy.setContent(this._content)}command(t,e){"disable"===t&&(this.disabled=e,this._tippy&&(e?this._tippy.disable():this._tippy.enable()))}firstUpdated(){super.firstUpdated(),this._injectStyles(),this._registerMutationObserver(),this.trigger||(this.trigger=this.persistent?"click":"mouseenter");const t=this.getRootNode();let e;if(this.for?(e=t.getElementById(this.for),e||g.error("<pb-popover> target element %s not found",this.for)):e=this.shadowRoot.getElementById("link"),e){const i={allowHTML:!0,appendTo:t.nodeType===Node.DOCUMENT_NODE?document.body:t,placement:this.placement,interactive:!0,ignoreAttributes:!0,boundary:"viewport",maxWidth:"none",touch:this.touch,hideOnClick:!1,trigger:this.trigger};if(this.stopPropagation&&(i.onTrigger=(t,e)=>{e.stopPropagation()}),this.persistent&&(i.onClickOutside=(t,e)=>{t.hideWithInteractivity(e)}),this.theme&&"none"!==this.theme&&(i.theme=this.theme),this.fallbackPlacement){const t=this.fallbackPlacement.split(" ");i.popperOptions={modifiers:[{name:"flip",options:{fallbackPlacements:t}}]}}this.popupClass&&(i.onCreate=t=>{t.popper.classList.add(this.popupClass)}),i.onShow=t=>{this.remote?this._loadRemoteContent():t.setContent(this._getContent()),this.emitTo("pb-popover-show",{source:this,popup:t})},this._tippy=Zi(e,i)}}async _loadRemoteContent(){const t=this.toAbsoluteURL(this.remote);try{const e=await fetch(t,{method:"GET",mode:"cors",credentials:"same-origin"}),i=await e.text();this.alternate=i}catch(t){g.error("<pb-popover> Error retrieving remote content: %o",t)}}static get styles(){return[e`
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
      `]}}customElements.define("pb-popover",cn);class dn extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{key:{type:String},duration:{type:Number},scroll:{type:Boolean},highlightSelf:{type:Boolean,attribute:"highlight-self"},_className:{type:String}})}constructor(){super(),this.key=null,this.duration=0,this.scroll=!1,this.highlightSelf=!1,this._className="highlight-off"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-highlight-on",this._highlightOn.bind(this)),this.subscribeTo("pb-highlight-off",this._highlightOff.bind(this))}command(t,e){super.command(t,e),this.disabled&&(this._className="highlight-off")}_mouseOver(){this.emitTo("pb-highlight-off",{source:this}),this.highlightSelf&&this._highlightOn({detail:{id:this.key}}),this.emitTo("pb-highlight-on",{id:this.key,source:this,scroll:this.scroll})}render(){return this.disabled?t`<slot></slot>`:t`<span id="content" class="${this._className}" @mouseover="${this._mouseOver}"
      ><slot></slot
    ></span>`}static get styles(){return e`
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
    `}_highlightOn(t){t.detail.source!=this&&t.detail.id===this.key&&(this._className="highlight-on",t.detail.scroll&&0==this.disabled&&this.scrollIntoView({block:"center",behaviour:"smooth"}),this.duration>0&&setTimeout(()=>{this._className="highlight-off"},this.duration))}_highlightOff(t){t.detail.source!=this&&(this._className="highlight-off")}}customElements.define("pb-highlight",dn);class pn extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{xmlId:{type:String,attribute:"xml-id"},nodeId:{type:String,attribute:"node-id",reflect:!0},hash:{type:String,reflect:!0},xpath:{type:String,reflect:!0},path:{type:String},odd:{type:String},view:{type:String},params:{type:Object},history:{type:Boolean}})}constructor(){super(),this.history=!0,this.params=null}connectedCallback(){super.connectedCallback(),this._id=this.nodeId,this.subscribeTo("pb-visible",t=>{if(this.nodeId){const[e,i]=t.detail.data.split(/\s*,\s*/);this.nodeId!==e||this.hash&&this.hash!==i?this.classList.remove("active"):(this.classList.add("active"),this.scrollIntoView({block:"nearest"}),this.dispatchEvent(new CustomEvent("pb-collapse-open",{composed:!0,bubbles:!0})))}}),this._content=this.innerHTML,this.innerHTML=""}render(){return t`<button @click="${this._onClick}" type="button">
      ${_(this._content)}
    </button>`}createRenderRoot(){return this}_onClick(t){t.preventDefault();const e={id:null,root:null};this.xmlId?e.id=this.xmlId:this.nodeId&&(e.root=this.nodeId),this.path&&(e.path=this.path),this.odd&&(e.odd=this.odd),this.hash&&(e.hash=this.hash),this.view&&(e.view=this.view),this.xpath&&(e.xpath=this.xpath),this.params&&Object.assign(e,this.params),this.history&&v.commit(this,e),this.emitTo("pb-refresh",e)}}customElements.define("pb-link",pn);class un extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{facs:{type:String},coordinates:{type:Array},label:{type:String},order:{type:Number},trigger:{type:String},emitOnLoad:{type:Boolean,attribute:"emit-on-load",reflect:!0}})}constructor(){super(),this.trigger="click",this.label="",this.order=Number.POSITIVE_INFINITY,this.waitFor="pb-facsimile,pb-image-strip,pb-tify",this.default="",this._loaded=!1}connectedCallback(){super.connectedCallback(),!0===this.emitOnLoad&&this.facs&&""!==this.facs.trim()&&this.wait(()=>{this.emitTo("pb-load-facsimile",{url:this.getImage(),order:this.getOrder(),element:this})})}getImage(){return this.facs}getLabel(){return this.label}getOrder(){return this.order}firstUpdated(){this.shadowRoot.querySelector("a").addEventListener(this.trigger,this._linkListener.bind(this)),!0===this.emitOnLoad&&this.wait(()=>{this._trigger()})}render(){return t`<a href="javascript:;"><slot>${this.default}</slot></a>`}static get styles(){return e`
      :host {
      }

      a,
      a:link {
        text-decoration: none;
        color: inherit;
      }
    `}_linkListener(t){t.preventDefault(),this._trigger()}_trigger(){g.log("<facs-link> %s %o",this.facs,this.coordinates),this.facs&&""!==this.facs.trim()?(!0===this.emitOnLoad||this._loaded||(this._loaded=!0,this.emitTo("pb-load-facsimile",{url:this.getImage(),order:this.getOrder(),element:this})),!0===this.emitOnLoad&&this.emitTo("pb-show-annotation",{element:this,file:this.facs,order:this.getOrder(),coordinates:this.coordinates})):g.warn("<pb-facs-link> No facs URL provided")}}customElements.define("pb-facs-link",un);class hn extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{items:{type:Array},imageWidth:{attribute:"image-width",type:Number},imageHeight:{attribute:"image-height",type:Number},baseUri:{attribute:"base-uri",type:String}})}constructor(){super(),this.items=[],this.urls=new Set,this.imageHeight=80,this.imageWidth=64}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-start-update",()=>{this.items=[],this.urls=new Set,this.requestUpdate(this.items)}),this.subscribeTo("pb-load-facsimile",t=>{const{element:e,order:i}=t.detail,n=e.getImage();if(this.urls.has(n))return;this.urls.add(n);const s=this.items.map(t=>t.getOrder()).reduce((t,e,n)=>i<e?t:i===e?n:n+1,0);this.items.splice(s,0,e),this.requestUpdate()})}showIt(t){this.emitTo("pb-show-annotation",{file:t.getImage(),element:t})}renderItem(e){return t`
      <figure class="strip-item" @click="${()=>this.showIt(e)}">
        <img
          height="${this.imageHeight}"
          width="${this.imageWidth}"
          src="${this.baseUri}${e.getImage()}/full/${this.imageWidth},${this.imageHeight}/0/default.jpg"
        />
        <figcaption>${e.getLabel()}</figcaption>
      </figure>
    `}render(){return t`${this.items.map(t=>this.renderItem(t))}`}static get styles(){return e`
      :host {
        display: block;
      }
    `}}function gn(t,e){return window.ESGlobalBridge.requestAvailability(),new Promise(i=>{window.ESGlobalBridge.instance.load(t,e),window.addEventListener(`es-bridge-${t}-loaded`,()=>i(),{once:!0})})}function fn(t,e){let i=t.getRootNode();if(i.nodeType===Node.DOCUMENT_NODE)i=i.head;else{const t=document.querySelector(`style#${e.id}`);t&&t.parentNode.removeChild(t);const i=e.innerHTML.match(/@font-face[^{]+{.*?}/gs);if(i){const t=document.createElement("style");t.id=e.id,t.appendChild(document.createTextNode(i.join("\n"))),document.head.appendChild(t)}}const n=i.querySelector(`#${e.id}`);n&&n.parentNode.removeChild(n),i.appendChild(e)}function mn(t,e){e.forEach(t=>{if(t.hasChildNodes()){const e=t.hasAttribute("display")||!1,i=t.querySelector("math"),n=window.MathJax.getMetricsFor(t.parentNode,e);let s,r;n.display=e,i?(r=i.outerHTML,s=window.MathJax.mathml2chtml(r,n)):(window.MathJax.texReset(),r=t.innerHTML.replaceAll(/&\w+;/g,t=>({"&amp;":"&","&lt;":"<"}[t])),s=window.MathJax.tex2chtml(r,n)),t.innerHTML="",t.appendChild(s),t.setAttribute("loaded","loaded"),t.setAttribute("source",r)}}),fn(t,window.MathJax.chtmlStylesheet())}function bn(t){const e=t.querySelectorAll("pb-formula");if(g.log(`<pb-formula> Found ${e.length} elements to typeset ...`),e.length>0){if(window.MathJax)return void mn(t,e);const i=t.querySelector("pb-formula[menu]");window.MathJax={startup:{typeset:!1,pageReady:()=>mn(t,e)},options:{enableMenu:null!==i}},gn("MathJax","https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")}}customElements.get("pb-image-strip")||customElements.define("pb-image-strip",hn);class yn extends n{static get properties(){return Object.assign({display:{type:Boolean},menu:{type:Boolean},loaded:{type:Boolean},source:{type:String}},super.properties)}constructor(){super(),this.display=!1}attributeChangedCallback(t,e,i){switch(super.attributeChangedCallback(t,e,i),t){case"loaded":this.loaded=!0;break;case"source":this.source=i}}render(){return this.hasChildNodes()?this.loaded?t`<div id="content" class="${this.display?"block":""}"><slot></slot></div>`:t`<span class="loading">${p("dialogs.loading")}</span>`:null}static get styles(){return e`
      :host {
        display: inline-block;
      }
      .block {
        display: block;
      }
      .loading {
        color: #808080;
      }
    `}}customElements.define("pb-formula",yn);class vn extends(m(s(n))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{url:{type:String},expand:{type:Boolean},src:{type:String},container:{type:String},auto:{type:Boolean},loadOnce:{type:Boolean},fixLinks:{type:Boolean,attribute:"fix-links"},start:{type:Number},useLanguage:{type:Boolean,attribute:"use-language"},noCredentials:{type:Boolean,attribute:"no-credentials"},history:{type:Boolean},event:{type:String},userParams:{type:Object},silent:{type:Boolean},plain:{type:Boolean}})}constructor(){super(),this.auto=!1,this.loadOnce=!1,this.history=!1,this.event="pb-load",this.loaded=!1,this.language=null,this.noCredentials=!1,this.silent=!1,this._retryCount=0,this._maxRetries=20}connectedCallback(){super.connectedCallback(),this.subscribeTo(this.event,t=>{r("pb-page-ready",()=>{if(this.history){if(t.detail&&t.detail.params){const{start:e}=t.detail.params;e&&v.commit(this,{start:e})}this.userParams=v.state,v.subscribe(this,t=>{t.start&&(this.start=t.start,this.load())}),v.replace(this,this.userParams)}this.load(t)})}),this.subscribeTo("pb-toggle",t=>{this.toggleFeature(t)}),this.subscribeTo("pb-document",t=>{t.detail&&t.detail.id===this.src&&(g.log(`<pb-load> Document ${this.src} is ready, triggering load`),this.load())}),this.subscribeTo("pb-i18n-update",t=>{const e=this.language&&this.language!==t.detail.language;this.language=t.detail.language,this.useLanguage&&e&&this.load()},[]),this.history&&v.subscribe(this,t=>{this.start=t.start,this.userParams=t,this.load()}),this.signalReady()}firstUpdated(){this.auto?(this.start=v.state.start||1,r("pb-page-ready",t=>{t&&t.language&&(this.language=t.language),setTimeout(()=>{this.wait(()=>this.load())},200)})):r("pb-page-ready",t=>{t&&t.language&&(this.language=t.language)})}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),e&&e!==i)switch(t){case"url":case"userParams":case"start":this.auto&&this.loader&&r("pb-page-ready",()=>{this.wait(()=>this.load())})}}render(){return t`
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
    `}static get styles(){return e`
      :host {
        display: block;
      }
    `}toggleFeature(t){this.userParams=v.getState(this),g.log("<pb-load> toggle feature %o",this.userParams),t.detail.refresh&&(this.history&&v.commit(this,this.userParams),this.load())}getURL(t){let{url:e}=this;return this.expand&&(e=e.replace(/{([^})]+)}/g,(e,i)=>{if(!t[i])return"";const n=encodeURIComponent(t[i]||i);return delete t[i],n})),this.toAbsoluteURL(e)}load(t){if(!this.url)return;if(this.loadOnce&&this.loaded)return;this.emitTo("pb-start-update");let e={};t&&(t instanceof Event?t.detail&&t.detail.params&&(e=t.detail.params):e=t);const i=this.getDocument();if(g.log("<pb-load> getDocument() returned:",i,`src="${this.src}"`),g.log(`<pb-load> Available elements with id "${this.src}":`,document.getElementById(this.src)),i&&g.log(`<pb-load> Document found, path="${i.path}", odd="${i.odd}", view="${i.view}"`),!this.plain){if(i&&i.path)e.doc=i.path,g.log("<pb-load> Setting params.doc to:",i.path),this._retryCount=0;else{if(this.src){if(this._retryCount<this._maxRetries){this._retryCount++;const e=Math.min(100*this._retryCount,1e3);return g.warn(`<pb-load> Document with id "${this.src}" not found or not ready, retrying in ${e}ms (attempt ${this._retryCount}/${this._maxRetries})`),void setTimeout(()=>{this.load(t)},e)}return g.error(`<pb-load> Document with id "${this.src}" not found after ${this._maxRetries} attempts`),void(this.innerHTML='<pb-i18n key="dialogs.loading">Loading...</pb-i18n>')}this.url&&this.url.includes("{doc}")&&g.warn("<pb-load> URL template contains {doc} placeholder but no document is available and no src is specified")}this.start&&!e.start&&(e.start=this.start),this.language&&(e.language=this.language)}e=this.prepareParameters(e);for(const[t,i]of Object.entries(e))null===i&&delete e[t];const n=this.getURL(e);if(n.includes("{")&&n.includes("}")&&(g.warn(`<pb-load> URL still contains unresolved parameters: ${n}`),this.src))return void(this.innerHTML='<pb-i18n key="dialogs.loading">Loading...</pb-i18n>');g.log("<pb-load> Loading %s with parameters %o",n,e);const s=this.shadowRoot.getElementById("loadContent");s.params=e,s.url=n,s.generateRequest(),this.loadOnce&&(this.loaded=!0)}prepareParameters(t){return this.userParams?Object.assign(t,this.userParams):t}_handleContent(t){const e=this.shadowRoot.getElementById("loadContent").lastResponse,i=w(e);if(this.container)this.style.display="none",document.querySelectorAll(this.container).forEach(e=>{e.innerHTML=i,this._parseHeaders(t.detail.xhr,e),this._fixLinks(e),this._onLoad(e)});else{this.style.display="",this._clearContent();const e=document.createElement("div");e.innerHTML=i,this._parseHeaders(t.detail.xhr,e),e.slot="",this.appendChild(e),this._fixLinks(e),this._onLoad(e)}this.emitTo("pb-end-update")}_clearContent(){const t=this.shadowRoot.querySelector("slot:not([name])");t&&t.assignedNodes().forEach(t=>t.parentNode.removeChild(t))}_handleError(){this.emitTo("pb-end-update");const t=this.shadowRoot.getElementById("loadContent"),{response:e}=t.lastError;if(this.silent)return void g.error("Request failed: %s",e?e.description:"");let i;i=e?e.description:'<pb-i18n key="dialogs.serverError"></pb-i18n>';const n=this.shadowRoot.getElementById("errorDialog"),s=this.shadowRoot.getElementById("errorMessage"),r=w(i);s.innerHTML=`<pb-i18n key="dialogs.serverError"></pb-i18n>: ${r}`,n.openDialog()}_parseHeaders(t,e){function i(i,n){const s=e.querySelector(`[data-pagination-${i}]`);return s?s.getAttribute(`data-pagination-${i}`):n?0:t.getResponseHeader(`pb-${i}`)}const n=i("total",this.noCredentials),s=i("start",this.noCredentials);this.start!==s&&(this.start=parseInt(s)),this.emitTo("pb-results-received",{count:n?parseInt(n,10):0,start:this.start,content:e,params:this.shadowRoot.getElementById("loadContent").params})}_fixLinks(t){bn(t),this.fixLinks&&(t.querySelectorAll("img").forEach(t=>{const e=t.getAttribute("src");if(e)try{t.src=this.toAbsoluteURL(e)}catch(t){g.warn("<pb-load> Unable to resolve image URL %s",e,t)}}),t.querySelectorAll("a").forEach(t=>{const e=t.getAttribute("href");if(e)try{t.href=this.toAbsoluteURL(e)}catch(t){g.warn("<pb-load> Unable to resolve link URL %s",e,t)}}))}_onLoad(t){}}customElements.define("pb-load",vn);class _n extends(m(vn)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{sortBy:{type:String,attribute:"sort-by"},sortOptions:{type:Array,attribute:"sort-options"},sortLabel:{type:String},filter:{type:String},filterBy:{type:String,attribute:"filter-by"},filterOptions:{type:Array,attribute:"filter-options"},filterByLabel:{type:String},filterPlaceholderLabel:{type:String},collection:{type:String},facets:{type:Object},login:{type:String},group:{type:String},subforms:{type:String},static:{type:Boolean},_file:{type:String},_selected:{type:Array},_allowModification:{type:Boolean}})}constructor(){super(),this.sortOptions=[],this.sortLabel="browse.sort",this.sortBy="default",this.filter="",this.filterOptions=[{label:"Title",value:"title"}],this.filterByLabel="browse.filter",this.filterPlaceholderLabel="browse.filterPlaceholder",this.filterBy="title",this._allowModification=!1,this.static=!1}connectedCallback(){super.connectedCallback(),r("pb-page-ready",()=>{v.state.sort&&(this.sortBy=v.state.sort),v.state.filter&&(this.filter=v.state.filter,this.filterBy=v.state.filterBy||this.filterBy),this.facets={},Object.keys(v.state).forEach(t=>{if(/^facet-.*$/.test(t)){const e=v.state[t];this.facets[t]?this.facets[t].push(e):Array.isArray(e)?this.facets[t]=e:this.facets[t]=[e]}}),this.collection=v.state.collection,this.collection&&v.replace(this,{collection:this.collection}),v.subscribe(this,t=>{this.collection=t.collection,this.load()})}),this.subscribeTo("pb-search-resubmit",this._facets.bind(this)),this.subscribeTo("pb-login",t=>{t.detail.userChanged&&this._facets(t)},[]),this.subscribeTo("pb-i18n-update",()=>{this.requestUpdate()},[])}firstUpdated(){r("pb-page-ready",t=>{const e=this.shadowRoot.getElementById("filterString");let i;o(t.apiVersion,"1.0.0")>=0?(i=`${t.endpoint}/api/search/autocomplete`,this.url||(this.url="api/collection")):(i=`${t.endpoint}/modules/autocomplete.xql`,this.url||(this.url="collection/")),e&&(e.source=i,e.substring=!0,e.requestParams={field:this.filterBy})});const t=this.shadowRoot.getElementById("filterString");t&&(t.addEventListener("pb-autocomplete-selected",this._handleAutocompleteSelected.bind(this)),t.addEventListener("pb-autocomplete-input",this._handleAutocompleteInput.bind(this)));const e=this.shadowRoot.getElementById("sortSelect");if(e&&e.addEventListener("change",this._sort.bind(this)),this.login){const t=document.getElementById(this.login);t?(this.subscribeTo("pb-login",t=>{this._allowModification=this._loggedIn(t.detail.user,t.detail.group)},[]),this._allowModification=t.loggedIn&&this._loggedIn(t.user,t.groups)):g.error("<pb-browse-docs> connected pb-login element not found!")}this.shadowRoot.getElementById("delete").addEventListener("click",this._handleDelete.bind(this)),super.firstUpdated()}render(){return t`
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
    `}static get styles(){return e`
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
    `}getURL(t){if(this.static)return`collections/${this.collection?`${this.collection}/`:""}${t.start||"1"}.html`;const e=super.getURL(t);return this.collection?`${e}/${this.collection}`:e}prepareParameters(t){return(t=this._paramsFromSubforms(t)).sort=this.sortBy,this.filter&&(t.filter=this.filter,t.browse=this.filterBy),this.facets&&(t=Object.assign(t,this.facets)),t}_paramsFromSubforms(t){return this.subforms&&document.querySelectorAll(this.subforms).forEach(e=>{e.serializeForm&&Object.assign(t,e.serializeForm())}),t}getSelected(){const t=[];return this.container?document.querySelectorAll(this.container).forEach(e=>e.querySelectorAll('.document-select input[type="checkbox"]:checked').forEach(e=>{t.push(e.value)})):this.querySelectorAll('.document-select input[type="checkbox"]:checked').forEach(e=>{t.push(e.value)}),t}_filter(){const t=this.shadowRoot.getElementById("filterString"),e=this.shadowRoot.getElementById("filterSelect"),i=t?t.value:this.filter,n=e?e.value:this.filterBy;void 0!==i&&(g.log("<pb-browse-docs> Filter by %s",i),this.filter=i,v.commit(this,{filter:i,filterBy:n}),this.load())}_filterChanged(t){const e=(null==t?void 0:t.target)??this.shadowRoot.getElementById("filterSelect"),i=e?e.value:null;if(i&&i!==this.filterBy){g.log("<pb-browse-docs> Filtering on %s",i),this.filterBy=i;const t=this.shadowRoot.getElementById("filterString");t&&(t.requestParams={field:this.filterBy})}}_sort(t){const e=(null==t?void 0:t.target)??this.shadowRoot.getElementById("sortSelect"),i=e?e.value:null;i&&i!==this.sortBy&&(g.log("<pb-browse-docs> Sorting by %s",i),this.sortBy=i,v.commit(this,{sort:i}),this.load())}_facets(t){t.detail&&t.detail.params&&(v.clearParametersMatching(this,/^(all-|facet-).*/),this.facets=t.detail.params,this.start=1,v.commit(this,t.detail.params)),this.load()}_onLoad(t){window.scrollTo(0,0);const e=t.querySelector("[data-root]"),i=e&&e.getAttribute("data-root"),n=e&&e.classList.contains("writable");this.emitTo("pb-collection",{writable:n,collection:i}),document.querySelectorAll("[can-write]").forEach(t=>{t.disabled=!n}),t.querySelectorAll("[data-collection]").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),this.collection=t.getAttribute("data-collection"),this.start=1,v.commit(this,{collection:this.collection}),g.log("<pb-browse-docs> loading collection %s",this.collection),this.load()})})}_handleDelete(t,e){const i=this.shadowRoot.getElementById("deleteDialog"),n=this.getSelected();n.length>0&&(this._selected=n,i.openDialog())}_confirmDelete(){if(!this._file&&!this._selected)return;let t;t=this._selected?this._selected:[this._file],g.log("<pb-browse-docs> Deleting %o",this._file);const e={action:"delete","docs[]":t};this._file=null,this._selected=null,this.load(e)}_loggedIn(t,e){return null!=t&&(!this.group||!!e&&e.indexOf(this.group)>-1)}_canModify(t){return t?"":"hidden"}_handleAutocompleteInput(t){const e=t.detail||{},i=e.value??e.text??"";this.filter=i}_handleAutocompleteSelected(t){const e=t.detail||{},i=e.value??e.text??"";this.filter=i,this._filter()}_handleEnter(t){const e=t.key||t.code||t.keyCode;"Enter"!==e&&"NumpadEnter"!==e&&13!==e||this._filter()}}customElements.define("pb-browse-docs",_n);class wn extends vn{static get properties(){return Object.assign(Object.assign({},super.properties),{},{collection:{type:String},static:{type:Boolean}})}constructor(){super(),this.collection=null,this.static=!1}connectedCallback(){super.connectedCallback(),r("pb-page-ready",()=>{this.collection=v.state.collection,v.subscribe(this,t=>{this.collection=t.collection})})}getURL(t){if(this.static)return`collections/${this.collection?`${this.collection}/`:""}${t.start||"1"}.html`;const e=super.getURL(t);return this.collection?`${e}/${this.collection}`:e}_onLoad(t){window.scrollTo(0,0);const e=t.querySelector("[data-root]"),i=e&&e.getAttribute("data-root"),n=e&&e.classList.contains("writable");this.emitTo("pb-collection",{writable:n,collection:i}),document.querySelectorAll("[can-write]").forEach(t=>{t.disabled=!n}),t.querySelectorAll("[data-collection]").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),this.collection=t.getAttribute("data-collection"),this.start=1,this.history&&v.commit(this,{collection:this.collection}),g.log("<pb-browse> loading collection %s",this.collection),this.emitTo("pb-search-resubmit")})})}}customElements.define("pb-browse",wn);class xn extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{path:{type:String,reflect:!0},rootPath:{type:String,attribute:"root-path"},odd:{type:String,reflect:!0},view:{type:String,reflect:!0},disableHistory:{type:Boolean,attribute:"disable-history"},sourceView:{type:String,attribute:"source-view"}})}constructor(){super(),this.path=null,this.rootPath="",this.disableHistory=!1,this._emitScheduled=!1,this._lastEventKey=null}connectedCallback(){super.connectedCallback(),this.disableHistory||(v.state.path&&!this.path&&(this.path=v.state.path),this.view=v.state.view||this.view,this.odd=v.state.odd||this.odd),this._lastEventKey=this._computeEventKey()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),e!==i&&(this._emitScheduled||(this._emitScheduled=!0,setTimeout(()=>{this._emitScheduled=!1;const t=this._computeEventKey();t!==this._lastEventKey&&(this.emitTo("pb-document",this),this._lastEventKey=t)},0)))}_computeEventKey(){return JSON.stringify({path:this.path||"",rootPath:this.rootPath||"",odd:this.odd||"",view:this.view||"",sourceView:this.sourceView||""})}getFileName(){return this.path.replace(/^.*?([^\/]+)$/,"$1")}getCollection(){return this.path.replace(/^(.*?)\/[^\/]+$/,"$1")}getFullPath(){return`${this.rootPath}/${this.path}`}}customElements.define("pb-document",xn);class kn extends(x(m(s(n)))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{direction:{type:String},keyboard:{type:String},rendition:{type:String}})}constructor(){super(),this.direction="forward",this.disabled=!0}connectedCallback(){super.connectedCallback(),this.keyboard&&(this.hotkeys={next:this.keyboard}),this.subscribeTo("pb-update",this._update.bind(this)),this.registerHotkey("next",()=>{window.document.activeElement&&window.document.activeElement!==window.document.body||this.emitTo("pb-navigate",{direction:this.direction})}),this.signalReady()}_update(t){"forward"===this.direction?t.detail.data.next?this.disabled=!1:this.disabled=!0:t.detail.data.previous?this.disabled=!1:this.disabled=!0}_handleClick(){this.emitTo("pb-navigate",{direction:this.direction})}render(){return t`
      <button id="button" @click="${this._handleClick}" type="button"><slot></slot></button>
    `}static get styles(){return e`
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
    `}}customElements.define("pb-navigation",kn);const An=t=>"string"==typeof t,Sn=()=>{let t,e;const i=new Promise((i,n)=>{t=i,e=n});return i.resolve=t,i.reject=e,i},On=t=>null==t?"":""+t,En=(t,e,i)=>{t.forEach(t=>{e[t]&&(i[t]=e[t])})},$n=/###/g,Cn=t=>t&&t.indexOf("###")>-1?t.replace($n,"."):t,Tn=t=>!t||An(t),In=(t,e,i)=>{const n=An(e)?e.split("."):e;let s=0;for(;s<n.length-1;){if(Tn(t))return{};const e=Cn(n[s]);!t[e]&&i&&(t[e]=new i),t=Object.prototype.hasOwnProperty.call(t,e)?t[e]:{},++s}return Tn(t)?{}:{obj:t,k:Cn(n[s])}},Ln=(t,e,i)=>{const{obj:n,k:s}=In(t,e,Object);if(void 0!==n||1===e.length)return void(n[s]=i);let r=e[e.length-1],o=e.slice(0,e.length-1),a=In(t,o,Object);for(;void 0===a.obj&&o.length;){var l;r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=In(t,o,Object),null!==(l=a)&&void 0!==l&&l.obj&&void 0!==a.obj[`${a.k}.${r}`]&&(a.obj=void 0)}a.obj[`${a.k}.${r}`]=i},Rn=(t,e,i,n)=>{const{obj:s,k:r}=In(t,e,Object);s[r]=s[r]||[],s[r].push(i)},jn=(t,e)=>{const{obj:i,k:n}=In(t,e);if(i&&Object.prototype.hasOwnProperty.call(i,n))return i[n]},Nn=(t,e,i)=>{const n=jn(t,i);return void 0!==n?n:jn(e,i)},Pn=(t,e,i)=>{for(const n in e)"__proto__"!==n&&"constructor"!==n&&(n in t?An(t[n])||t[n]instanceof String||An(e[n])||e[n]instanceof String?i&&(t[n]=e[n]):Pn(t[n],e[n],i):t[n]=e[n]);return t},Dn=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Fn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Bn=t=>An(t)?t.replace(/[&<>"'\/]/g,t=>Fn[t]):t;class Mn{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const e=this.regExpMap.get(t);if(void 0!==e)return e;const i=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,i),this.regExpQueue.push(t),i}}const qn=[" ",",","?","!",";"],zn=new Mn(20),Un=(t,e,i)=>{e=e||"",i=i||"";const n=qn.filter(t=>e.indexOf(t)<0&&i.indexOf(t)<0);if(0===n.length)return!0;const s=zn.getRegExp(`(${n.map(t=>"?"===t?"\\?":t).join("|")})`);let r=!s.test(t);if(!r){const e=t.indexOf(i);e>0&&!s.test(t.substring(0,e))&&(r=!0)}return r},Hn=(t,e,i=".")=>{if(!t)return;if(t[e]){if(!Object.prototype.hasOwnProperty.call(t,e))return;return t[e]}const n=e.split(i);let s=t;for(let t=0;t<n.length;){if(!s||"object"!=typeof s)return;let e,r="";for(let o=t;o<n.length;++o)if(o!==t&&(r+=i),r+=n[o],e=s[r],void 0!==e){if(["string","number","boolean"].indexOf(typeof e)>-1&&o<n.length-1)continue;t+=o-t+1;break}s=e}return s},Vn=t=>null==t?void 0:t.replace("_","-"),Wn={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){var i,n;null===(i=console)||void 0===i||null===(i=i[t])||void 0===i||null===(n=i.apply)||void 0===n||n.call(i,console,e)}};class Gn{constructor(t,e={}){this.init(t,e)}init(t,e={}){this.prefix=e.prefix||"i18next:",this.logger=t||Wn,this.options=e,this.debug=e.debug}log(...t){return this.forward(t,"log","",!0)}warn(...t){return this.forward(t,"warn","",!0)}error(...t){return this.forward(t,"error","")}deprecate(...t){return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(t,e,i,n){return n&&!this.debug?null:(An(t[0])&&(t[0]=`${i}${this.prefix} ${t[0]}`),this.logger[e](t))}create(t){return new Gn(this.logger,Object.assign(Object.assign({},{prefix:`${this.prefix}:${t}:`}),this.options))}clone(t){return(t=t||this.options).prefix=t.prefix||this.prefix,new Gn(this.logger,t)}}var Yn=new Gn;class Qn{constructor(){this.observers={}}on(t,e){return t.split(" ").forEach(t=>{this.observers[t]||(this.observers[t]=new Map);const i=this.observers[t].get(e)||0;this.observers[t].set(e,i+1)}),this}off(t,e){this.observers[t]&&(e?this.observers[t].delete(e):delete this.observers[t])}emit(t,...e){if(this.observers[t]){Array.from(this.observers[t].entries()).forEach(([t,i])=>{for(let n=0;n<i;n++)t(...e)})}if(this.observers["*"]){Array.from(this.observers["*"].entries()).forEach(([i,n])=>{for(let s=0;s<n;s++)i.apply(i,[t,...e])})}}}class Kn extends Qn{constructor(t,e={ns:["translation"],defaultNS:"translation"}){super(),this.data=t||{},this.options=e,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const e=this.options.ns.indexOf(t);e>-1&&this.options.ns.splice(e,1)}getResource(t,e,i,n={}){var s;const r=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,o=void 0!==n.ignoreJSONStructure?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;t.indexOf(".")>-1?a=t.split("."):(a=[t,e],i&&(Array.isArray(i)?a.push(...i):An(i)&&r?a.push(...i.split(r)):a.push(i)));const l=jn(this.data,a);return!l&&!e&&!i&&t.indexOf(".")>-1&&(t=a[0],e=a[1],i=a.slice(2).join(".")),!l&&o&&An(i)?Hn(null===(s=this.data)||void 0===s||null===(s=s[t])||void 0===s?void 0:s[e],i,r):l}addResource(t,e,i,n,s={silent:!1}){const r=void 0!==s.keySeparator?s.keySeparator:this.options.keySeparator;let o=[t,e];i&&(o=o.concat(r?i.split(r):i)),t.indexOf(".")>-1&&(o=t.split("."),n=e,e=o[1]),this.addNamespaces(e),Ln(this.data,o,n),s.silent||this.emit("added",t,e,i,n)}addResources(t,e,i,n={silent:!1}){for(const n in i)(An(i[n])||Array.isArray(i[n]))&&this.addResource(t,e,n,i[n],{silent:!0});n.silent||this.emit("added",t,e,i)}addResourceBundle(t,e,i,n,s,r={silent:!1,skipCopy:!1}){let o=[t,e];t.indexOf(".")>-1&&(o=t.split("."),n=i,i=e,e=o[1]),this.addNamespaces(e);let a=jn(this.data,o)||{};r.skipCopy||(i=JSON.parse(JSON.stringify(i))),n?Pn(a,i,s):a=Object.assign(Object.assign({},a),i),Ln(this.data,o,a),r.silent||this.emit("added",t,e,i)}removeResourceBundle(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)}hasResourceBundle(t,e){return void 0!==this.getResource(t,e)}getResourceBundle(t,e){return e||(e=this.options.defaultNS),this.getResource(t,e)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const e=this.getDataByLanguage(t);return!!(e&&Object.keys(e)||[]).find(t=>e[t]&&Object.keys(e[t]).length>0)}toJSON(){return this.data}}var Jn={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,n,s){return t.forEach(t=>{var r;e=(null===(r=this.processors[t])||void 0===r?void 0:r.process(e,i,n,s))??e}),e}};const Zn=Symbol("i18next/PATH_KEY");function Xn(){const t=[],e=Object.create(null);let i;return e.get=(n,s)=>{var r,o;return null===(r=i)||void 0===r||null===(o=r.revoke)||void 0===o||o.call(r),s===Zn?t:(t.push(s),i=Proxy.revocable(n,e),i.proxy)},Proxy.revocable(Object.create(null),e).proxy}function ts(t,e){const{[Zn]:i}=t(Xn());return i.join((null==e?void 0:e.keySeparator)??".")}const es={},is=t=>!An(t)&&"boolean"!=typeof t&&"number"!=typeof t;class ns extends Qn{constructor(t,e={}){super(),En(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=e,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=Yn.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t,e={interpolation:{}}){const i=Object.assign({},e);if(null==t)return!1;const n=this.resolve(t,i);if(void 0===(null==n?void 0:n.res))return!1;const s=is(n.res);return!1!==i.returnObjects||!s}extractFromKey(t,e){let i=void 0!==e.nsSeparator?e.nsSeparator:this.options.nsSeparator;void 0===i&&(i=":");const n=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator;let s=e.ns||this.options.defaultNS||[];const r=i&&t.indexOf(i)>-1,o=!(this.options.userDefinedKeySeparator||e.keySeparator||this.options.userDefinedNsSeparator||e.nsSeparator||Un(t,i,n));if(r&&!o){const e=t.match(this.interpolator.nestingRegexp);if(e&&e.length>0)return{key:t,namespaces:An(s)?[s]:s};const r=t.split(i);(i!==n||i===n&&this.options.ns.indexOf(r[0])>-1)&&(s=r.shift()),t=r.join(n)}return{key:t,namespaces:An(s)?[s]:s}}translate(t,e,i){let n="object"==typeof e?Object.assign({},e):e;if("object"!=typeof n&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof n&&(n=Object.assign({},n)),n||(n={}),null==t)return"";"function"==typeof t&&(t=ts(t,Object.assign(Object.assign({},this.options),n))),Array.isArray(t)||(t=[String(t)]);const s=void 0!==n.returnDetails?n.returnDetails:this.options.returnDetails,r=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(t[t.length-1],n),l=a[a.length-1];let c=void 0!==n.nsSeparator?n.nsSeparator:this.options.nsSeparator;void 0===c&&(c=":");const d=n.lng||this.language,p=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if("cimode"===(null==d?void 0:d.toLowerCase()))return p?s?{res:`${l}${c}${o}`,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${c}${o}`:s?{res:o,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:o;const u=this.resolve(t,n);let h=null==u?void 0:u.res;const g=(null==u?void 0:u.usedKey)||o,f=(null==u?void 0:u.exactUsedKey)||o,m=["[object Number]","[object Function]","[object RegExp]"],b=void 0!==n.joinArrays?n.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,v=void 0!==n.count&&!An(n.count),_=ns.hasDefaultValue(n),w=v?this.pluralResolver.getSuffix(d,n.count,n):"",x=n.ordinal&&v?this.pluralResolver.getSuffix(d,n.count,{ordinal:!1}):"",k=v&&!n.ordinal&&0===n.count,A=k&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${w}`]||n[`defaultValue${x}`]||n.defaultValue;let S=h;y&&!h&&_&&(S=A);const O=is(S),E=Object.prototype.toString.apply(S);if(!(y&&S&&O&&m.indexOf(E)<0)||An(b)&&Array.isArray(S))if(y&&An(b)&&Array.isArray(h))h=h.join(b),h&&(h=this.extendTranslation(h,t,n,i));else{let e=!1,s=!1;!this.isValidLookup(h)&&_&&(e=!0,h=A),this.isValidLookup(h)||(s=!0,h=o);const a=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&s?void 0:h,p=_&&A!==h&&this.options.updateMissing;if(s||e||p){if(this.logger.log(p?"updateKey":"missingKey",d,l,o,p?A:h),r){const t=this.resolve(o,Object.assign(Object.assign({},n),{},{keySeparator:!1}));t&&t.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let t=[];const e=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if("fallback"===this.options.saveMissingTo&&e&&e[0])for(let i=0;i<e.length;i++)t.push(e[i]);else"all"===this.options.saveMissingTo?t=this.languageUtils.toResolveHierarchy(n.lng||this.language):t.push(n.lng||this.language);const i=(t,e,i)=>{var s;const r=_&&i!==h?i:a;this.options.missingKeyHandler?this.options.missingKeyHandler(t,l,e,r,p,n):null!==(s=this.backendConnector)&&void 0!==s&&s.saveMissing&&this.backendConnector.saveMissing(t,l,e,r,p,n),this.emit("missingKey",t,l,e,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&v?t.forEach(t=>{const e=this.pluralResolver.getSuffixes(t,n);k&&n[`defaultValue${this.options.pluralSeparator}zero`]&&e.indexOf(`${this.options.pluralSeparator}zero`)<0&&e.push(`${this.options.pluralSeparator}zero`),e.forEach(e=>{i([t],o+e,n[`defaultValue${e}`]||A)})}):i(t,o,A))}h=this.extendTranslation(h,t,n,u,i),s&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}${c}${o}`),(s||e)&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${c}${o}`:o,e?h:void 0,n))}else{if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const t=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,S,Object.assign(Object.assign({},n),{},{ns:a})):`key '${o} (${this.language})' returned an object instead of string.`;return s?(u.res=t,u.usedParams=this.getUsedParamsDetails(n),u):t}if(r){const t=Array.isArray(S),e=t?[]:{},i=t?f:g;for(const t in S)if(Object.prototype.hasOwnProperty.call(S,t)){const s=`${i}${r}${t}`;e[t]=_&&!h?this.translate(s,Object.assign(Object.assign({},n),{},{defaultValue:is(A)?A[t]:void 0},{joinArrays:!1,ns:a})):this.translate(s,Object.assign(Object.assign({},n),{joinArrays:!1,ns:a})),e[t]===s&&(e[t]=S[t])}h=e}}return s?(u.res=h,u.usedParams=this.getUsedParamsDetails(n),u):h}extendTranslation(t,e,i,n,s){var r;if(null!==(r=this.i18nFormat)&&void 0!==r&&r.parse)t=this.i18nFormat.parse(t,Object.assign(Object.assign({},this.options.interpolation.defaultVariables),i),i.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){var o;i.interpolation&&this.interpolator.init(Object.assign(Object.assign({},i),{interpolation:Object.assign(Object.assign({},this.options.interpolation),i.interpolation)}));const r=An(t)&&(void 0!==(null==i||null===(o=i.interpolation)||void 0===o?void 0:o.skipOnVariables)?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let a;if(r){const e=t.match(this.interpolator.nestingRegexp);a=e&&e.length}let l=i.replace&&!An(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(l=Object.assign(Object.assign({},this.options.interpolation.defaultVariables),l)),t=this.interpolator.interpolate(t,l,i.lng||this.language||n.usedLng,i),r){const e=t.match(this.interpolator.nestingRegexp);a<(e&&e.length)&&(i.nest=!1)}!i.lng&&n&&n.res&&(i.lng=this.language||n.usedLng),!1!==i.nest&&(t=this.interpolator.nest(t,(...t)=>(null==s?void 0:s[0])!==t[0]||i.context?this.translate(...t,e):(this.logger.warn(`It seems you are nesting recursively key: ${t[0]} in key: ${e[0]}`),null),i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=An(a)?[a]:a;return null!=t&&null!=l&&l.length&&!1!==i.applyPostProcessor&&(t=Jn.handle(l,t,e,this.options&&this.options.postProcessPassResolved?Object.assign({i18nResolved:Object.assign(Object.assign({},n),{},{usedParams:this.getUsedParamsDetails(i)})},i):i,this)),t}resolve(t,e={}){let i,n,s,r,o;return An(t)&&(t=[t]),t.forEach(t=>{if(this.isValidLookup(i))return;const a=this.extractFromKey(t,e),l=a.key;n=l;let c=a.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const d=void 0!==e.count&&!An(e.count),p=d&&!e.ordinal&&0===e.count,u=void 0!==e.context&&(An(e.context)||"number"==typeof e.context)&&""!==e.context,h=e.lngs?e.lngs:this.languageUtils.toResolveHierarchy(e.lng||this.language,e.fallbackLng);c.forEach(t=>{var a,c;this.isValidLookup(i)||(o=t,es[`${h[0]}-${t}`]||null===(a=this.utils)||void 0===a||!a.hasLoadedNamespace||null!==(c=this.utils)&&void 0!==c&&c.hasLoadedNamespace(o)||(es[`${h[0]}-${t}`]=!0,this.logger.warn(`key "${n}" for languages "${h.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),h.forEach(n=>{var o;if(this.isValidLookup(i))return;r=n;const a=[l];if(null!==(o=this.i18nFormat)&&void 0!==o&&o.addLookupKeys)this.i18nFormat.addLookupKeys(a,l,n,t,e);else{let t;d&&(t=this.pluralResolver.getSuffix(n,e.count,e));const i=`${this.options.pluralSeparator}zero`,s=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(e.ordinal&&0===t.indexOf(s)&&a.push(l+t.replace(s,this.options.pluralSeparator)),a.push(l+t),p&&a.push(l+i)),u){const n=`${l}${this.options.contextSeparator||"_"}${e.context}`;a.push(n),d&&(e.ordinal&&0===t.indexOf(s)&&a.push(n+t.replace(s,this.options.pluralSeparator)),a.push(n+t),p&&a.push(n+i))}}let c;for(;c=a.pop();)this.isValidLookup(i)||(s=c,i=this.getResource(n,t,c,e))}))})}),{res:i,usedKey:n,exactUsedKey:s,usedLng:r,usedNS:o}}isValidLookup(t){return!(void 0===t||!this.options.returnNull&&null===t||!this.options.returnEmptyString&&""===t)}getResource(t,e,i,n={}){var s;return null!==(s=this.i18nFormat)&&void 0!==s&&s.getResource?this.i18nFormat.getResource(t,e,i,n):this.resourceStore.getResource(t,e,i,n)}getUsedParamsDetails(t={}){const e=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=t.replace&&!An(t.replace);let n=i?t.replace:t;if(i&&void 0!==t.count&&(n.count=t.count),this.options.interpolation.defaultVariables&&(n=Object.assign(Object.assign({},this.options.interpolation.defaultVariables),n)),!i){n=Object.assign({},n);for(const t of e)delete n[t]}return n}static hasDefaultValue(t){const e="defaultValue";for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&e===i.substring(0,e.length)&&void 0!==t[i])return!0;return!1}}class ss{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Yn.create("languageUtils")}getScriptPartFromCode(t){if(!(t=Vn(t))||t.indexOf("-")<0)return null;const e=t.split("-");return 2===e.length?null:(e.pop(),"x"===e[e.length-1].toLowerCase()?null:this.formatLanguageCode(e.join("-")))}getLanguagePartFromCode(t){if(!(t=Vn(t))||t.indexOf("-")<0)return t;const e=t.split("-");return this.formatLanguageCode(e[0])}formatLanguageCode(t){if(An(t)&&t.indexOf("-")>-1){let e;try{e=Intl.getCanonicalLocales(t)[0]}catch(t){}return e&&this.options.lowerCaseLng&&(e=e.toLowerCase()),e||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let e;return t.forEach(t=>{if(e)return;const i=this.formatLanguageCode(t);this.options.supportedLngs&&!this.isSupportedCode(i)||(e=i)}),!e&&this.options.supportedLngs&&t.forEach(t=>{if(e)return;const i=this.getScriptPartFromCode(t);if(this.isSupportedCode(i))return e=i;const n=this.getLanguagePartFromCode(t);if(this.isSupportedCode(n))return e=n;e=this.options.supportedLngs.find(t=>t===n?t:t.indexOf("-")<0&&n.indexOf("-")<0?void 0:t.indexOf("-")>0&&n.indexOf("-")<0&&t.substring(0,t.indexOf("-"))===n||0===t.indexOf(n)&&n.length>1?t:void 0)}),e||(e=this.getFallbackCodes(this.options.fallbackLng)[0]),e}getFallbackCodes(t,e){if(!t)return[];if("function"==typeof t&&(t=t(e)),An(t)&&(t=[t]),Array.isArray(t))return t;if(!e)return t.default||[];let i=t[e];return i||(i=t[this.getScriptPartFromCode(e)]),i||(i=t[this.formatLanguageCode(e)]),i||(i=t[this.getLanguagePartFromCode(e)]),i||(i=t.default),i||[]}toResolveHierarchy(t,e){const i=this.getFallbackCodes((!1===e?[]:e)||this.options.fallbackLng||[],t),n=[],s=t=>{t&&(this.isSupportedCode(t)?n.push(t):this.logger.warn(`rejecting language code not found in supportedLngs: ${t}`))};return An(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?("languageOnly"!==this.options.load&&s(this.formatLanguageCode(t)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&s(this.getScriptPartFromCode(t)),"currentOnly"!==this.options.load&&s(this.getLanguagePartFromCode(t))):An(t)&&s(this.formatLanguageCode(t)),i.forEach(t=>{n.indexOf(t)<0&&s(this.formatLanguageCode(t))}),n}}const rs={zero:0,one:1,two:2,few:3,many:4,other:5},os={select:t=>1===t?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class as{constructor(t,e={}){this.languageUtils=t,this.options=e,this.logger=Yn.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(t,e={}){const i=Vn("dev"===t?"en":t),n=e.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:i,type:n});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let r;try{r=new Intl.PluralRules(i,{type:n})}catch(i){if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),os;if(!t.match(/-|_/))return os;const n=this.languageUtils.getLanguagePartFromCode(t);r=this.getRule(n,e)}return this.pluralRulesCache[s]=r,r}needsPlural(t,e={}){var i;let n=this.getRule(t,e);return n||(n=this.getRule("dev",e)),(null===(i=n)||void 0===i?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,e,i={}){return this.getSuffixes(t,i).map(t=>`${e}${t}`)}getSuffixes(t,e={}){let i=this.getRule(t,e);return i||(i=this.getRule("dev",e)),i?i.resolvedOptions().pluralCategories.sort((t,e)=>rs[t]-rs[e]).map(t=>`${this.options.prepend}${e.ordinal?`ordinal${this.options.prepend}`:""}${t}`):[]}getSuffix(t,e,i={}){const n=this.getRule(t,i);return n?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(e)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",e,i))}}const ls=(t,e,i,n=".",s=!0)=>{let r=Nn(t,e,i);return!r&&s&&An(i)&&(r=Hn(t,i,n),void 0===r&&(r=Hn(e,i,n))),r},cs=t=>t.replace(/\$/g,"$$$$");class ds{constructor(t={}){var e;this.logger=Yn.create("interpolator"),this.options=t,this.format=(null==t||null===(e=t.interpolation)||void 0===e?void 0:e.format)||(t=>t),this.init(t)}init(t={}){t.interpolation||(t.interpolation={escapeValue:!0});const{escape:e,escapeValue:i,useRawValueToEscape:n,prefix:s,prefixEscaped:r,suffix:o,suffixEscaped:a,formatSeparator:l,unescapeSuffix:c,unescapePrefix:d,nestingPrefix:p,nestingPrefixEscaped:u,nestingSuffix:h,nestingSuffixEscaped:g,nestingOptionsSeparator:f,maxReplaces:m,alwaysFormat:b}=t.interpolation;this.escape=void 0!==e?e:Bn,this.escapeValue=void 0===i||i,this.useRawValueToEscape=void 0!==n&&n,this.prefix=s?Dn(s):r||"{{",this.suffix=o?Dn(o):a||"}}",this.formatSeparator=l||",",this.unescapePrefix=c?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=p?Dn(p):u||Dn("$t("),this.nestingSuffix=h?Dn(h):g||Dn(")"),this.nestingOptionsSeparator=f||",",this.maxReplaces=m||1e3,this.alwaysFormat=void 0!==b&&b,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(t,e)=>(null==t?void 0:t.source)===e?(t.lastIndex=0,t):new RegExp(e,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(t,e,i,n){var s;let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=t=>{if(t.indexOf(this.formatSeparator)<0){const s=ls(e,l,t,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(s,void 0,i,Object.assign(Object.assign(Object.assign({},n),e),{},{interpolationkey:t})):s}const s=t.split(this.formatSeparator),r=s.shift().trim(),o=s.join(this.formatSeparator).trim();return this.format(ls(e,l,r,this.options.keySeparator,this.options.ignoreJSONStructure),o,i,Object.assign(Object.assign(Object.assign({},n),e),{},{interpolationkey:r}))};this.resetRegExp();const d=(null==n?void 0:n.missingInterpolationHandler)||this.options.missingInterpolationHandler,p=void 0!==(null==n||null===(s=n.interpolation)||void 0===s?void 0:s.skipOnVariables)?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:t=>cs(t)},{regex:this.regexp,safeValue:t=>this.escapeValue?cs(this.escape(t)):cs(t)}].forEach(e=>{for(a=0;r=e.regex.exec(t);){const i=r[1].trim();if(o=c(i),void 0===o)if("function"==typeof d){const e=d(t,r,n);o=An(e)?e:""}else if(n&&Object.prototype.hasOwnProperty.call(n,i))o="";else{if(p){o=r[0];continue}this.logger.warn(`missed to pass in variable ${i} for interpolating ${t}`),o=""}else An(o)||this.useRawValueToEscape||(o=On(o));const s=e.safeValue(o);if(t=t.replace(r[0],s),p?(e.regex.lastIndex+=o.length,e.regex.lastIndex-=r[0].length):e.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,e,i={}){let n,s,r;const o=(t,e)=>{const i=this.nestingOptionsSeparator;if(t.indexOf(i)<0)return t;const n=t.split(new RegExp(`${i}[ ]*{`));let s=`{${n[1]}`;t=n[0],s=this.interpolate(s,r);const o=s.match(/'/g),a=s.match(/"/g);(((null==o?void 0:o.length)??0)%2==0&&!a||a.length%2!=0)&&(s=s.replace(/'/g,'"'));try{r=JSON.parse(s),e&&(r=Object.assign(Object.assign({},e),r))}catch(e){return this.logger.warn(`failed parsing options string in nesting for key ${t}`,e),`${t}${i}${s}`}return r.defaultValue&&r.defaultValue.indexOf(this.prefix)>-1&&delete r.defaultValue,t};for(;n=this.nestingRegexp.exec(t);){let a=[];r=Object.assign({},i),r=r.replace&&!An(r.replace)?r.replace:r,r.applyPostProcessor=!1,delete r.defaultValue;const l=/{.*}/.test(n[1])?n[1].lastIndexOf("}")+1:n[1].indexOf(this.formatSeparator);if(-1!==l&&(a=n[1].slice(l).split(this.formatSeparator).map(t=>t.trim()).filter(Boolean),n[1]=n[1].slice(0,l)),s=e(o.call(this,n[1].trim(),r),r),s&&n[0]===t&&!An(s))return s;An(s)||(s=On(s)),s||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${t}`),s=""),a.length&&(s=a.reduce((t,e)=>this.format(t,e,i.lng,Object.assign(Object.assign({},i),{},{interpolationkey:n[1].trim()})),s.trim())),t=t.replace(n[0],s),this.regexp.lastIndex=0}return t}}const ps=t=>{let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const n=t.split("(");e=n[0].toLowerCase().trim();const s=n[1].substring(0,n[1].length-1);if("currency"===e&&s.indexOf(":")<0)i.currency||(i.currency=s.trim());else if("relativetime"===e&&s.indexOf(":")<0)i.range||(i.range=s.trim());else{s.split(";").forEach(t=>{if(t){const[e,...n]=t.split(":"),s=n.join(":").trim().replace(/^'+|'+$/g,""),r=e.trim();i[r]||(i[r]=s),"false"===s&&(i[r]=!1),"true"===s&&(i[r]=!0),isNaN(s)||(i[r]=parseInt(s,10))}})}}return{formatName:e,formatOptions:i}},us=t=>{const e={};return(i,n,s)=>{let r=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(r=Object.assign(Object.assign({},r),{},{[s.interpolationkey]:void 0}));const o=n+JSON.stringify(r);let a=e[o];return a||(a=t(Vn(n),s),e[o]=a),a(i)}},hs=t=>(e,i,n)=>t(Vn(i),n)(e);class gs{constructor(t={}){this.logger=Yn.create("formatter"),this.options=t,this.init(t)}init(t,e={interpolation:{}}){this.formatSeparator=e.interpolation.formatSeparator||",";const i=e.cacheInBuiltFormats?us:hs;this.formats={number:i((t,e)=>{const i=new Intl.NumberFormat(t,Object.assign({},e));return t=>i.format(t)}),currency:i((t,e)=>{const i=new Intl.NumberFormat(t,Object.assign(Object.assign({},e),{},{style:"currency"}));return t=>i.format(t)}),datetime:i((t,e)=>{const i=new Intl.DateTimeFormat(t,Object.assign({},e));return t=>i.format(t)}),relativetime:i((t,e)=>{const i=new Intl.RelativeTimeFormat(t,Object.assign({},e));return t=>i.format(t,e.range||"day")}),list:i((t,e)=>{const i=new Intl.ListFormat(t,Object.assign({},e));return t=>i.format(t)})}}add(t,e){this.formats[t.toLowerCase().trim()]=e}addCached(t,e){this.formats[t.toLowerCase().trim()]=us(e)}format(t,e,i,n={}){const s=e.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(t=>t.indexOf(")")>-1)){const t=s.findIndex(t=>t.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,t)].join(this.formatSeparator)}const r=s.reduce((t,e)=>{const{formatName:s,formatOptions:r}=ps(e);if(this.formats[s]){let e=t;try{var o;const a=(null==n||null===(o=n.formatParams)||void 0===o?void 0:o[n.interpolationkey])||{},l=a.locale||a.lng||n.locale||n.lng||i;e=this.formats[s](t,l,Object.assign(Object.assign(Object.assign({},r),n),a))}catch(t){this.logger.warn(t)}return e}return this.logger.warn(`there was no format function for ${s}`),t},t);return r}}const fs=(t,e)=>{void 0!==t.pending[e]&&(delete t.pending[e],t.pendingCount--)};class ms extends Qn{constructor(t,e,i,n={}){var s,r;super(),this.backend=t,this.store=e,this.services=i,this.languageUtils=i.languageUtils,this.options=n,this.logger=Yn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],null===(s=this.backend)||void 0===s||null===(r=s.init)||void 0===r||r.call(s,i,n.backend,n)}queueLoad(t,e,i,n){const s={},r={},o={},a={};return t.forEach(t=>{let n=!0;e.forEach(e=>{const o=`${t}|${e}`;!i.reload&&this.store.hasResourceBundle(t,e)?this.state[o]=2:this.state[o]<0||(1===this.state[o]?void 0===r[o]&&(r[o]=!0):(this.state[o]=1,n=!1,void 0===r[o]&&(r[o]=!0),void 0===s[o]&&(s[o]=!0),void 0===a[e]&&(a[e]=!0)))}),n||(o[t]=!0)}),(Object.keys(s).length||Object.keys(r).length)&&this.queue.push({pending:r,pendingCount:Object.keys(r).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(s),pending:Object.keys(r),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(a)}}loaded(t,e,i){const n=t.split("|"),s=n[0],r=n[1];e&&this.emit("failedLoading",s,r,e),!e&&i&&this.store.addResourceBundle(s,r,i,void 0,void 0,{skipCopy:!0}),this.state[t]=e?-1:2,e&&i&&(this.state[t]=0);const o={};this.queue.forEach(i=>{Rn(i.loaded,[s],r),fs(i,t),e&&i.errors.push(e),0!==i.pendingCount||i.done||(Object.keys(i.loaded).forEach(t=>{o[t]||(o[t]={});const e=i.loaded[t];e.length&&e.forEach(e=>{void 0===o[t][e]&&(o[t][e]=!0)})}),i.done=!0,i.errors.length?i.callback(i.errors):i.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(t=>!t.done)}read(t,e,i,n=0,s=this.retryTimeout,r){if(!t.length)return r(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:t,ns:e,fcName:i,tried:n,wait:s,callback:r});this.readingCalls++;const o=(o,a)=>{if(this.readingCalls--,this.waitingReads.length>0){const t=this.waitingReads.shift();this.read(t.lng,t.ns,t.fcName,t.tried,t.wait,t.callback)}o&&a&&n<this.maxRetries?setTimeout(()=>{this.read.call(this,t,e,i,n+1,2*s,r)},s):r(o,a)},a=this.backend[i].bind(this.backend);if(2!==a.length)return a(t,e,o);try{const i=a(t,e);i&&"function"==typeof i.then?i.then(t=>o(null,t)).catch(o):o(null,i)}catch(t){o(t)}}prepareLoading(t,e,i={},n){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();An(t)&&(t=this.languageUtils.toResolveHierarchy(t)),An(e)&&(e=[e]);const s=this.queueLoad(t,e,i,n);if(!s.toLoad.length)return s.pending.length||n(),null;s.toLoad.forEach(t=>{this.loadOne(t)})}load(t,e,i){this.prepareLoading(t,e,{},i)}reload(t,e,i){this.prepareLoading(t,e,{reload:!0},i)}loadOne(t,e=""){const i=t.split("|"),n=i[0],s=i[1];this.read(n,s,"read",void 0,void 0,(i,r)=>{i&&this.logger.warn(`${e}loading namespace ${s} for language ${n} failed`,i),!i&&r&&this.logger.log(`${e}loaded namespace ${s} for language ${n}`,r),this.loaded(t,i,r)})}saveMissing(t,e,i,n,s,r={},o=()=>{}){var a,l,c;if(null===(a=this.services)||void 0===a||null===(a=a.utils)||void 0===a||!a.hasLoadedNamespace||null!==(l=this.services)&&void 0!==l&&null!==(l=l.utils)&&void 0!==l&&l.hasLoadedNamespace(e)){if(null!=i&&""!==i){if(null!==(c=this.backend)&&void 0!==c&&c.create){const a=Object.assign(Object.assign({},r),{},{isUpdate:s}),l=this.backend.create.bind(this.backend);if(l.length<6)try{let s;s=5===l.length?l(t,e,i,n,a):l(t,e,i,n),s&&"function"==typeof s.then?s.then(t=>o(null,t)).catch(o):o(null,s)}catch(t){o(t)}else l(t,e,i,n,o,a)}t&&t[0]&&this.store.addResource(t[0],e,i,n)}}else this.logger.warn(`did not save key "${i}" as the namespace "${e}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")}}const bs=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if("object"==typeof t[1]&&(e=t[1]),An(t[1])&&(e.defaultValue=t[1]),An(t[2])&&(e.tDescription=t[2]),"object"==typeof t[2]||"object"==typeof t[3]){const i=t[3]||t[2];Object.keys(i).forEach(t=>{e[t]=i[t]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),ys=t=>{var e,i;return An(t.ns)&&(t.ns=[t.ns]),An(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),An(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),(null===(e=t.supportedLngs)||void 0===e||null===(i=e.indexOf)||void 0===i?void 0:i.call(e,"cimode"))<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),"boolean"==typeof t.initImmediate&&(t.initAsync=t.initImmediate),t},vs=()=>{},_s=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(e=>{"function"==typeof t[e]&&(t[e]=t[e].bind(t))})};class ws extends Qn{constructor(t={},e){if(super(),this.options=ys(t),this.services={},this.logger=Yn,this.modules={external:[]},_s(this),e&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,e),this;setTimeout(()=>{this.init(t,e)},0)}}init(t={},e){this.isInitializing=!0,"function"==typeof t&&(e=t,t={}),null==t.defaultNS&&t.ns&&(An(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const i=bs();this.options=Object.assign(Object.assign(Object.assign({},i),this.options),ys(t)),this.options.interpolation=Object.assign(Object.assign({},i.interpolation),this.options.interpolation),void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),"function"!=typeof this.options.overloadTranslationOptionHandler&&(this.options.overloadTranslationOptionHandler=i.overloadTranslationOptionHandler);const n=t=>t?"function"==typeof t?new t:t:null;if(!this.options.isClone){let t;this.modules.logger?Yn.init(n(this.modules.logger),this.options):Yn.init(null,this.options),t=this.modules.formatter?this.modules.formatter:gs;const e=new ss(this.options);this.store=new Kn(this.options.resources,this.options);const s=this.services;s.logger=Yn,s.resourceStore=this.store,s.languageUtils=e,s.pluralResolver=new as(e,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix});this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),!t||this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format||(s.formatter=n(t),s.formatter.init&&s.formatter.init(s,this.options),this.options.interpolation.format=s.formatter.format.bind(s.formatter)),s.interpolator=new ds(this.options),s.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},s.backendConnector=new ms(n(this.modules.backend),s.resourceStore,s,this.options),s.backendConnector.on("*",(t,...e)=>{this.emit(t,...e)}),this.modules.languageDetector&&(s.languageDetector=n(this.modules.languageDetector),s.languageDetector.init&&s.languageDetector.init(s,this.options.detection,this.options)),this.modules.i18nFormat&&(s.i18nFormat=n(this.modules.i18nFormat),s.i18nFormat.init&&s.i18nFormat.init(this)),this.translator=new ns(this.services,this.options),this.translator.on("*",(t,...e)=>{this.emit(t,...e)}),this.modules.external.forEach(t=>{t.init&&t.init(this)})}if(this.format=this.options.interpolation.format,e||(e=vs),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const t=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);t.length>0&&"dev"!==t[0]&&(this.options.lng=t[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(t=>{this[t]=(...e)=>this.store[t](...e)});["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(t=>{this[t]=(...e)=>(this.store[t](...e),this)});const s=Sn(),r=()=>{const t=(t,i)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),s.resolve(i),e(t,i)};if(this.languages&&!this.isInitialized)return t(null,this.t.bind(this));this.changeLanguage(this.options.lng,t)};return this.options.resources||!this.options.initAsync?r():setTimeout(r,0),s}loadResources(t,e=vs){let i=e;const n=An(t)?t:this.language;if("function"==typeof t&&(i=t),!this.options.resources||this.options.partialBundledLanguages){var s,r;if("cimode"===(null==n?void 0:n.toLowerCase())&&(!this.options.preload||0===this.options.preload.length))return i();const t=[],e=e=>{if(!e)return;if("cimode"===e)return;this.services.languageUtils.toResolveHierarchy(e).forEach(e=>{"cimode"!==e&&t.indexOf(e)<0&&t.push(e)})};if(n)e(n);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(t=>e(t))}null===(s=this.options.preload)||void 0===s||null===(r=s.forEach)||void 0===r||r.call(s,t=>e(t)),this.services.backendConnector.load(t,this.options.ns,t=>{t||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),i(t)})}else i(null)}reloadResources(t,e,i){const n=Sn();return"function"==typeof t&&(i=t,t=void 0),"function"==typeof e&&(i=e,e=void 0),t||(t=this.languages),e||(e=this.options.ns),i||(i=vs),this.services.backendConnector.reload(t,e,t=>{n.resolve(),i(t)}),n}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===t.type&&(this.modules.backend=t),("logger"===t.type||t.log&&t.warn&&t.error)&&(this.modules.logger=t),"languageDetector"===t.type&&(this.modules.languageDetector=t),"i18nFormat"===t.type&&(this.modules.i18nFormat=t),"postProcessor"===t.type&&Jn.addPostProcessor(t),"formatter"===t.type&&(this.modules.formatter=t),"3rdParty"===t.type&&this.modules.external.push(t),this}setResolvedLanguage(t){if(t&&this.languages&&!(["cimode","dev"].indexOf(t)>-1)){for(let t=0;t<this.languages.length;t++){const e=this.languages[t];if(!(["cimode","dev"].indexOf(e)>-1)&&this.store.hasLanguageSomeTranslations(e)){this.resolvedLanguage=e;break}}!this.resolvedLanguage&&this.languages.indexOf(t)<0&&this.store.hasLanguageSomeTranslations(t)&&(this.resolvedLanguage=t,this.languages.unshift(t))}}changeLanguage(t,e){this.isLanguageChangingTo=t;const i=Sn();this.emit("languageChanging",t);const n=t=>{this.language=t,this.languages=this.services.languageUtils.toResolveHierarchy(t),this.resolvedLanguage=void 0,this.setResolvedLanguage(t)},s=(s,r)=>{r?this.isLanguageChangingTo===t&&(n(r),this.translator.changeLanguage(r),this.isLanguageChangingTo=void 0,this.emit("languageChanged",r),this.logger.log("languageChanged",r)):this.isLanguageChangingTo=void 0,i.resolve((...t)=>this.t(...t)),e&&e(s,(...t)=>this.t(...t))},r=e=>{t||e||!this.services.languageDetector||(e=[]);const i=An(e)?e:e&&e[0],r=this.store.hasLanguageSomeTranslations(i)?i:this.services.languageUtils.getBestMatchFromCodes(An(e)?[e]:e);var o,a;r&&(this.language||n(r),this.translator.language||this.translator.changeLanguage(r),null===(o=this.services.languageDetector)||void 0===o||null===(a=o.cacheUserLanguage)||void 0===a||a.call(o,r));this.loadResources(r,t=>{s(t,r)})};return t||!this.services.languageDetector||this.services.languageDetector.async?!t&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(r):this.services.languageDetector.detect(r):r(t):r(this.services.languageDetector.detect()),i}getFixedT(t,e,i){const n=(t,e,...s)=>{let r;r="object"!=typeof e?this.options.overloadTranslationOptionHandler([t,e].concat(s)):Object.assign({},e),r.lng=r.lng||n.lng,r.lngs=r.lngs||n.lngs,r.ns=r.ns||n.ns,""!==r.keyPrefix&&(r.keyPrefix=r.keyPrefix||i||n.keyPrefix);const o=this.options.keySeparator||".";let a;return r.keyPrefix&&Array.isArray(t)?a=t.map(t=>("function"==typeof t&&(t=ts(t,Object.assign(Object.assign({},this.options),e))),`${r.keyPrefix}${o}${t}`)):("function"==typeof t&&(t=ts(t,Object.assign(Object.assign({},this.options),e))),a=r.keyPrefix?`${r.keyPrefix}${o}${t}`:t),this.t(a,r)};return An(t)?n.lng=t:n.lngs=t,n.ns=e,n.keyPrefix=i,n}t(...t){var e;return null===(e=this.translator)||void 0===e?void 0:e.translate(...t)}exists(...t){var e;return null===(e=this.translator)||void 0===e?void 0:e.exists(...t)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t,e={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=e.lng||this.resolvedLanguage||this.languages[0],n=!!this.options&&this.options.fallbackLng,s=this.languages[this.languages.length-1];if("cimode"===i.toLowerCase())return!0;const r=(t,e)=>{const i=this.services.backendConnector.state[`${t}|${e}`];return-1===i||0===i||2===i};if(e.precheck){const t=e.precheck(this,r);if(void 0!==t)return t}return!!this.hasResourceBundle(i,t)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!r(i,t)||n&&!r(s,t)))}loadNamespaces(t,e){const i=Sn();return this.options.ns?(An(t)&&(t=[t]),t.forEach(t=>{this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}),this.loadResources(t=>{i.resolve(),e&&e(t)}),i):(e&&e(),Promise.resolve())}loadLanguages(t,e){const i=Sn();An(t)&&(t=[t]);const n=this.options.preload||[],s=t.filter(t=>n.indexOf(t)<0&&this.services.languageUtils.isSupportedCode(t));return s.length?(this.options.preload=n.concat(s),this.loadResources(t=>{i.resolve(),e&&e(t)}),i):(e&&e(),Promise.resolve())}dir(t){var e,i;if(t||(t=this.resolvedLanguage||((null===(e=this.languages)||void 0===e?void 0:e.length)>0?this.languages[0]:this.language)),!t)return"rtl";try{const e=new Intl.Locale(t);if(e&&e.getTextInfo){const t=e.getTextInfo();if(t&&t.direction)return t.direction}}catch(t){}const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=(null===(i=this.services)||void 0===i?void 0:i.languageUtils)||new ss(bs());return t.toLowerCase().indexOf("-latn")>1?"ltr":n.indexOf(s.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(t={},e){const i=new ws(t,e);return i.createInstance=ws.createInstance,i}cloneInstance(t={},e=vs){const i=t.forkResourceStore;i&&delete t.forkResourceStore;const n=Object.assign(Object.assign(Object.assign({},this.options),t),{isClone:!0}),s=new ws(n);void 0===t.debug&&void 0===t.prefix||(s.logger=s.logger.clone(t));if(["store","services","language"].forEach(t=>{s[t]=this[t]}),s.services=Object.assign({},this.services),s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},i){const t=Object.keys(this.store.data).reduce((t,e)=>(t[e]=Object.assign({},this.store.data[e]),t[e]=Object.keys(t[e]).reduce((i,n)=>(i[n]=Object.assign({},t[e][n]),i),t[e]),t),{});s.store=new Kn(t,n),s.services.resourceStore=s.store}if(t.interpolation){const e=bs(),i=Object.assign(Object.assign(Object.assign({},e.interpolation),this.options.interpolation),t.interpolation),r=Object.assign(Object.assign({},n),{},{interpolation:i});s.services.interpolator=new ds(r)}return s.translator=new ns(s.services,n),s.translator.on("*",(t,...e)=>{s.emit(t,...e)}),s.init(n,e),s.translator.options=n,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const xs=ws.createInstance();xs.createInstance,xs.dir,xs.init,xs.loadResources,xs.reloadResources,xs.use,xs.changeLanguage,xs.getFixedT,xs.t,xs.exists,xs.setDefaultNamespace,xs.hasLoadedNamespace,xs.loadNamespaces,xs.loadLanguages;const{slice:ks,forEach:As}=[];function Ss(t){return As.call(ks.call(arguments,1),e=>{if(e)for(const i in e)void 0===t[i]&&(t[i]=e[i])}),t}function Os(t){if("string"!=typeof t)return!1;return[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(e=>e.test(t))}const Es=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,$s=function(t,e){const i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{path:"/"};let n=`${t}=${encodeURIComponent(e)}`;if(i.maxAge>0){const t=i.maxAge-0;if(Number.isNaN(t))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(t)}`}if(i.domain){if(!Es.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!Es.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite){switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i.partitioned&&(n+="; Partitioned"),n},Cs={create(t,e,i,n){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};i&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+60*i*1e3)),n&&(s.domain=n),document.cookie=$s(t,e,s)},read(t){const e=`${t}=`,i=document.cookie.split(";");for(let t=0;t<i.length;t++){let n=i[t];for(;" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(e))return n.substring(e.length,n.length)}return null},remove(t,e){this.create(t,"",-1,e)}};var Ts={name:"cookie",lookup(t){let{lookupCookie:e}=t;if(e&&"undefined"!=typeof document)return Cs.read(e)||void 0},cacheUserLanguage(t,e){let{lookupCookie:i,cookieMinutes:n,cookieDomain:s,cookieOptions:r}=e;i&&"undefined"!=typeof document&&Cs.create(i,t,n,s,r)}},Is={name:"querystring",lookup(t){let e,{lookupQuerystring:i}=t;if("undefined"!=typeof window){var n;let{search:t}=window.location;!window.location.search&&(null===(n=window.location.hash)||void 0===n?void 0:n.indexOf("?"))>-1&&(t=window.location.hash.substring(window.location.hash.indexOf("?")));const s=t.substring(1).split("&");for(let t=0;t<s.length;t++){const n=s[t].indexOf("=");if(n>0){s[t].substring(0,n)===i&&(e=s[t].substring(n+1))}}}return e}},Ls={name:"hash",lookup(t){let e,{lookupHash:i,lookupFromHashIndex:n}=t;if("undefined"!=typeof window){const{hash:t}=window.location;if(t&&t.length>2){const r=t.substring(1);if(i){const t=r.split("&");for(let n=0;n<t.length;n++){const s=t[n].indexOf("=");if(s>0){t[n].substring(0,s)===i&&(e=t[n].substring(s+1))}}}if(e)return e;if(!e&&n>-1){var s;const e=t.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(e))return;return null===(s=e["number"==typeof n?n:0])||void 0===s?void 0:s.replace("/","")}}}return e}};let Rs=null;const js=()=>{if(null!==Rs)return Rs;try{if(Rs="undefined"!=typeof window&&null!==window.localStorage,!Rs)return!1;const t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch(t){Rs=!1}return Rs};var Ns={name:"localStorage",lookup(t){let{lookupLocalStorage:e}=t;if(e&&js())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupLocalStorage:i}=e;i&&js()&&window.localStorage.setItem(i,t)}};let Ps=null;const Ds=()=>{if(null!==Ps)return Ps;try{if(Ps="undefined"!=typeof window&&null!==window.sessionStorage,!Ps)return!1;const t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch(t){Ps=!1}return Ps};var Fs={name:"sessionStorage",lookup(t){let{lookupSessionStorage:e}=t;if(e&&Ds())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupSessionStorage:i}=e;i&&Ds()&&window.sessionStorage.setItem(i,t)}},Bs={name:"navigator",lookup(t){const e=[];if("undefined"!=typeof navigator){const{languages:t,userLanguage:i,language:n}=navigator;if(t)for(let i=0;i<t.length;i++)e.push(t[i]);i&&e.push(i),n&&e.push(n)}return e.length>0?e:void 0}},Ms={name:"htmlTag",lookup(t){let e,{htmlTag:i}=t;const n=i||("undefined"!=typeof document?document.documentElement:null);return n&&"function"==typeof n.getAttribute&&(e=n.getAttribute("lang")),e}},qs={name:"path",lookup(t){var e;let{lookupFromPathIndex:i}=t;if("undefined"==typeof window)return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(n))return;return null===(e=n["number"==typeof i?i:0])||void 0===e?void 0:e.replace("/","")}},zs={name:"subdomain",lookup(t){var e;let{lookupFromSubdomainIndex:i}=t;const n="number"==typeof i?i+1:1,s="undefined"!=typeof window&&(null===(e=window.location)||void 0===e||null===(e=e.hostname)||void 0===e?void 0:e.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(s)return s[n]}};let Us=!1;try{document.cookie,Us=!0}catch(cu){}const Hs=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Us||Hs.splice(1,1);const Vs=()=>({order:Hs,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:t=>t});class Ws{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,e)}init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{languageUtils:{}},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=t,this.options=Ss(e,this.options||{},Vs()),"string"==typeof this.options.convertDetectedLanguage&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=t=>t.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(Ts),this.addDetector(Is),this.addDetector(Ns),this.addDetector(Fs),this.addDetector(Bs),this.addDetector(Ms),this.addDetector(qs),this.addDetector(zs),this.addDetector(Ls)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.order,e=[];return t.forEach(t=>{if(this.detectors[t]){let i=this.detectors[t].lookup(this.options);i&&"string"==typeof i&&(i=[i]),i&&(e=e.concat(i))}}),e=e.filter(t=>null!=t&&!Os(t)).map(t=>this.options.convertDetectedLanguage(t)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?e:e.length>0?e[0]:null}cacheUserLanguage(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.caches;e&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||e.forEach(e=>{this.detectors[e]&&this.detectors[e].cacheUserLanguage(t,this.options)}))}}function Gs(t){return Gs="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gs(t)}function Ys(){return"function"==typeof XMLHttpRequest||"object"===("undefined"==typeof XMLHttpRequest?"undefined":Gs(XMLHttpRequest))}function Qs(t){return!!t&&"function"==typeof t.then}function Ks(t){return Qs(t)?t:Promise.resolve(t)}function Js(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function Zs(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Js(Object(i),!0).forEach(function(e){Xs(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Js(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function Xs(t,e,i){return(e=tr(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function tr(t){var e=er(t,"string");return"symbol"==ir(e)?e:e+""}function er(t,e){if("object"!=ir(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e);if("object"!=ir(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function ir(t){return ir="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ir(t)}Ws.type="languageDetector";var nr,sr,rr="function"==typeof fetch?fetch:void 0;if("undefined"!=typeof global&&global.fetch?rr=global.fetch:"undefined"!=typeof window&&window.fetch&&(rr=window.fetch),Ys()&&("undefined"!=typeof global&&global.XMLHttpRequest?nr=global.XMLHttpRequest:"undefined"!=typeof window&&window.XMLHttpRequest&&(nr=window.XMLHttpRequest)),"function"==typeof ActiveXObject&&("undefined"!=typeof global&&global.ActiveXObject?sr=global.ActiveXObject:"undefined"!=typeof window&&window.ActiveXObject&&(sr=window.ActiveXObject)),"function"!=typeof rr&&(rr=void 0),!rr&&!nr&&!sr)try{import("./browser-ponyfill-VHCt2NiQ.js").then(function(t){return t.b}).then(function(t){rr=t.default}).catch(function(){})}catch(cu){}var or=function(t,e){if(e&&"object"===ir(e)){var i="";for(var n in e)i+="&"+encodeURIComponent(n)+"="+encodeURIComponent(e[n]);if(!i)return t;t=t+(-1!==t.indexOf("?")?"&":"?")+i.slice(1)}return t},ar=function(t,e,i,n){var s=function(t){if(!t.ok)return i(t.statusText||"Error",{status:t.status});t.text().then(function(e){i(null,{status:t.status,data:e})}).catch(i)};if(n){var r=n(t,e);if(r instanceof Promise)return void r.then(s).catch(i)}"function"==typeof fetch?fetch(t,e).then(s).catch(i):rr(t,e).then(s).catch(i)},lr=!1,cr=function(t,e,i,n){t.queryStringParams&&(e=or(e,t.queryStringParams));var s=Zs({},"function"==typeof t.customHeaders?t.customHeaders():t.customHeaders);"undefined"==typeof window&&"undefined"!=typeof global&&void 0!==global.process&&global.process.versions&&global.process.versions.node&&(s["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),i&&(s["Content-Type"]="application/json");var r="function"==typeof t.requestOptions?t.requestOptions(i):t.requestOptions,o=Zs({method:i?"POST":"GET",body:i?t.stringify(i):void 0,headers:s},lr?{}:r),a="function"==typeof t.alternateFetch&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{ar(e,o,n,a)}catch(t){if(!r||0===Object.keys(r).length||!t.message||t.message.indexOf("not implemented")<0)return n(t);try{Object.keys(r).forEach(function(t){delete o[t]}),ar(e,o,n,a),lr=!0}catch(t){n(t)}}},dr=function(t,e,i,n){i&&"object"===ir(i)&&(i=or("",i).slice(1)),t.queryStringParams&&(e=or(e,t.queryStringParams));try{var s=nr?new nr:new sr("MSXML2.XMLHTTP.3.0");s.open(i?"POST":"GET",e,1),t.crossDomain||s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.withCredentials=!!t.withCredentials,i&&s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.overrideMimeType&&s.overrideMimeType("application/json");var r=t.customHeaders;if(r="function"==typeof r?r():r)for(var o in r)s.setRequestHeader(o,r[o]);s.onreadystatechange=function(){s.readyState>3&&n(s.status>=400?s.statusText:null,{status:s.status,data:s.responseText})},s.send(i)}catch(t){console&&console.log(t)}},pr=function(t,e,i,n){return"function"==typeof i&&(n=i,i=void 0),n=n||function(){},rr&&0!==e.indexOf("file:")?cr(t,e,i,n):Ys()||"function"==typeof ActiveXObject?dr(t,e,i,n):void n(new Error("No fetch and no xhr implementation found!"))};function ur(t){return ur="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ur(t)}function hr(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function gr(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?hr(Object(i),!0).forEach(function(e){yr(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):hr(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function fr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mr(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,vr(n.key),n)}}function br(t,e,i){return e&&mr(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function yr(t,e,i){return(e=vr(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function vr(t){var e=_r(t,"string");return"symbol"==ur(e)?e:e+""}function _r(t,e){if("object"!=ur(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e);if("object"!=ur(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var wr=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(t){return JSON.parse(t)},stringify:JSON.stringify,parsePayload:function(t,e,i){return yr({},e,i||"")},parseLoadPayload:function(t,e){},request:pr,reloadInterval:"undefined"==typeof window&&36e5,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},xr=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};fr(this,t),this.services=e,this.options=i,this.allOptions=n,this.type="backend",this.init(e,i,n)}return br(t,[{key:"init",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.services=t,this.options=gr(gr(gr({},wr()),this.options||{}),i),this.allOptions=n,this.services&&this.options.reloadInterval){var s=setInterval(function(){return e.reload()},this.options.reloadInterval);"object"===ur(s)&&"function"==typeof s.unref&&s.unref()}}},{key:"readMulti",value:function(t,e,i){this._readAny(t,t,e,e,i)}},{key:"read",value:function(t,e,i){this._readAny([t],t,[e],e,i)}},{key:"_readAny",value:function(t,e,i,n,s){var r=this,o=this.options.loadPath;"function"==typeof this.options.loadPath&&(o=this.options.loadPath(t,i)),(o=Ks(o)).then(function(o){if(!o)return s(null,{});var a=r.services.interpolator.interpolate(o,{lng:t.join("+"),ns:i.join("+")});r.loadUrl(a,s,e,n)})}},{key:"loadUrl",value:function(t,e,i,n){var s=this,r="string"==typeof i?[i]:i,o="string"==typeof n?[n]:n,a=this.options.parseLoadPayload(r,o);this.options.request(this.options,t,a,function(r,o){if(o&&(o.status>=500&&o.status<600||!o.status))return e("failed loading "+t+"; status code: "+o.status,!0);if(o&&o.status>=400&&o.status<500)return e("failed loading "+t+"; status code: "+o.status,!1);if(!o&&r&&r.message){var a=r.message.toLowerCase();if(["failed","fetch","network","load"].find(function(t){return a.indexOf(t)>-1}))return e("failed loading "+t+": "+r.message,!0)}if(r)return e(r,!1);var l,c;try{l="string"==typeof o.data?s.options.parse(o.data,i,n):o.data}catch(e){c="failed parsing "+t+" to json"}if(c)return e(c,!1);e(null,l)})}},{key:"create",value:function(t,e,i,n,s){var r=this;if(this.options.addPath){"string"==typeof t&&(t=[t]);var o=this.options.parsePayload(e,i,n),a=0,l=[],c=[];t.forEach(function(i){var n=r.options.addPath;"function"==typeof r.options.addPath&&(n=r.options.addPath(i,e));var d=r.services.interpolator.interpolate(n,{lng:i,ns:e});r.options.request(r.options,d,o,function(e,i){a+=1,l.push(e),c.push(i),a===t.length&&"function"==typeof s&&s(l,c)})})}}},{key:"reload",value:function(){var t=this,e=this.services,i=e.backendConnector,n=e.languageUtils,s=e.logger,r=i.language;if(!r||"cimode"!==r.toLowerCase()){var o=[],a=function(t){n.toResolveHierarchy(t).forEach(function(t){o.indexOf(t)<0&&o.push(t)})};a(r),this.allOptions.preload&&this.allOptions.preload.forEach(function(t){return a(t)}),o.forEach(function(e){t.allOptions.ns.forEach(function(t){i.read(e,t,"read",null,null,function(n,r){n&&s.warn("loading namespace ".concat(t," for language ").concat(e," failed"),n),!n&&r&&s.log("loaded namespace ".concat(t," for language ").concat(e),r),i.loaded("".concat(e,"|").concat(t),n,r)})})})}}}])}();function kr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ar(t){return Ar="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ar(t)}function Sr(t,e){if("object"!=Ar(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e);if("object"!=Ar(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function Or(t){var e=Sr(t,"string");return"symbol"==Ar(e)?e:e+""}function Er(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Or(n.key),n)}}function $r(t,e,i){return e&&Er(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}xr.type="backend";var Cr=[],Tr=Cr.forEach,Ir=Cr.slice;function Lr(t){return Tr.call(Ir.call(arguments,1),function(e){if(e)for(var i in e)void 0===t[i]&&(t[i]=e[i])}),t}function Rr(t){return t?"function"==typeof t?new t:t:null}function jr(){return{handleEmptyResourcesAsFailed:!0,cacheHitMode:"none"}}function Nr(t,e,i,n){var s=t.read.bind(t);if(2!==s.length)s(e,i,n);else try{var r=s(e,i);r&&"function"==typeof r.then?r.then(function(t){return n(null,t)}).catch(n):n(null,r)}catch(t){n(t)}}var Pr=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};kr(this,t),this.backends=[],this.type="backend",this.allOptions=n,this.init(e,i)}return $r(t,[{key:"init",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=t,this.options=Lr(i,this.options||{},jr()),this.allOptions=n,this.options.backends&&this.options.backends.forEach(function(i,s){e.backends[s]=e.backends[s]||Rr(i),e.backends[s].init(t,e.options.backendOptions&&e.options.backendOptions[s]||{},n)}),this.services&&this.options.reloadInterval&&setInterval(function(){return e.reload()},this.options.reloadInterval)}},{key:"read",value:function(t,e,i){var n=this,s=this.backends.length,r=function(a){if(a>=s)return i(new Error("non of the backend loaded data",!0));var l=a===s-1,c=n.options.handleEmptyResourcesAsFailed&&!l?0:-1,d=n.backends[a];d.read?Nr(d,t,e,function(s,l,p){if(!s&&l&&Object.keys(l).length>c){if(i(null,l,a),o(a-1,l),d.save&&n.options.cacheHitMode&&["refresh","refreshAndUpdateStore"].indexOf(n.options.cacheHitMode)>-1){if(p&&n.options.refreshExpirationTime&&p+n.options.refreshExpirationTime>Date.now())return;var u=n.backends[a+1];u&&u.read&&Nr(u,t,e,function(i,s){i||s&&(Object.keys(s).length<=c||(o(a,s),"refreshAndUpdateStore"===n.options.cacheHitMode&&n.services&&n.services.resourceStore&&n.services.resourceStore.addResourceBundle(t,e,s)))})}}else r(a+1)}):r(a+1)},o=function(i,s){if(!(i<0)){var r=n.backends[i];r.save?(r.save(t,e,s),o(i-1,s)):o(i-1,s)}};r(0)}},{key:"create",value:function(t,e,i,n){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.backends.forEach(function(o){if(o.create){var a=o.create.bind(o);if(a.length<6)try{var l;(l=5===a.length?a(t,e,i,n,r):a(t,e,i,n))&&"function"==typeof l.then?l.then(function(t){return s(null,t)}).catch(s):s(null,l)}catch(t){s(t)}else a(t,e,i,n,s,r)}})}},{key:"reload",value:function(){var t=this,e=this.services,i=e.backendConnector,n=e.languageUtils,s=e.logger,r=i.language;if(!r||"cimode"!==r.toLowerCase()){var o=[],a=function(t){n.toResolveHierarchy(t).forEach(function(t){o.indexOf(t)<0&&o.push(t)})};a(r),this.allOptions.preload&&this.allOptions.preload.forEach(function(t){return a(t)}),o.forEach(function(e){t.allOptions.ns.forEach(function(t){i.read(e,t,"read",null,null,function(n,r){n&&s.warn("loading namespace ".concat(t," for language ").concat(e," failed"),n),!n&&r&&s.log("loaded namespace ".concat(t," for language ").concat(e),r),i.loaded("".concat(e,"|").concat(t),n,r)})})})}}}])}();let Dr;Pr.type="backend";class Fr extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{appRoot:{type:String,attribute:"app-root"},urlTemplate:{type:String,attribute:"url-template"},urlIgnore:{type:String,attribute:"url-ignore"},urlPath:{type:String,attribute:"url-path"},idHash:{type:Boolean,attribute:"id-hash"},template:{type:String},endpoint:{type:String,reflect:!0},apiVersion:{type:String,attribute:"api-version",reflect:!0},locales:{type:String},localeFallbackNs:{type:String,attribute:"locale-fallback-ns"},supportedLanguages:{type:Array,attribute:"supported-languages",converter:t=>t.split(/\s*,\s*/)},fallbackLanguage:{type:String,attribute:"fallback-language"},language:{type:String},requireLanguage:{type:Boolean,attribute:"require-language"},unresolved:{type:Boolean,reflect:!0},theme:{type:String}})}constructor(){super(),this.unresolved=!0,this.endpoint=".",this.urlTemplate=null,this.urlIgnore=null,this.urlPath="path",this.idHash=!1,this.apiVersion=void 0,this.requireLanguage=!1,this.supportedLanguages=null,this.fallbackLanguage="en",this.theme=null,this._localeFallbacks=[],this._i18nInstance=null,Dr?this.disabled=!0:(Dr=this,a())}get localeFallbackNs(){return this._localeFallbacks&&this._localeFallbacks.length?this._localeFallbacks.join(" "):""}set localeFallbackNs(t){const e=(t||"").split(/\s+/).map(t=>t.trim()).filter(Boolean),i=new Set;this._localeFallbacks=e.filter(t=>!i.has(t)&&(i.add(t),!0)),this._localeFallbacks.includes("common")||this._localeFallbacks.push("common")}disconnectedCallback(){super.disconnectedCallback(),this._i18nInstance=null,Dr===this&&(Dr=null)}async connectedCallback(){if(super.connectedCallback(),this.disabled)return;const t=this.getAttribute("endpoint");t&&(this.endpoint=t),v.configure("path"===this.urlPath,this.idHash,this.appRoot,this.urlTemplate,this.urlIgnore),this.endpoint=this.endpoint.replace(/\/+$/,"");const e=v.state._target;e&&(this.endpoint=e);const i=v.state._api;i&&(this.apiVersion=i);const n=[];if(this.theme?n.push(this.toAbsoluteURL(this.theme,this.endpoint)):n.push("components.css"),g.log("<pb-page> Loading component theme stylesheets from %s",n.join(", ")),this._themeSheet=await b(n),!this.apiVersion){let t=null;try{if(!(await fetch(`${this.endpoint}/login`)).ok){const e=await fetch(`${this.endpoint}/api/version`);t=await e.json()}}catch{try{const e=await fetch(`${this.endpoint}/api/version`);t=await e.json()}catch(t){g.error("<pb-page> Failed to fetch API version:",t)}}t?(this.apiVersion=t.api,g.log(`<pb-page> Server reports API version ${this.apiVersion} with app ${t.app.name}/${t.app.version} running on ${t.engine.name}/${t.engine.version}`)):(g.log("<pb-page> No API version reported by server, assuming 0.9.0"),this.apiVersion="0.9.0")}this.requireLanguage||this.signalReady("pb-page-ready",{endpoint:this.endpoint,template:this.template,apiVersion:this.apiVersion})}firstUpdated(){if(super.firstUpdated(),this.disabled)return;this.shadowRoot.querySelector("slot").addEventListener("slotchange",()=>{const t=new CustomEvent("pb-page-loaded",{bubbles:!0,composed:!0});this.dispatchEvent(t)},{once:!0});const t=`${f("../i18n/")}{{ns}}/{{lng}}.json`;g.log("<pb-page> Loading locales. common: %s; additional: %s; namespaces: %o",t,this.locales,this._localeFallbacks);const e=this.locales?[xr,xr]:[xr],i=[{loadPath:t,crossDomain:!0}];this.locales&&i.unshift({loadPath:this.locales,crossDomain:!0});const n={fallbackLng:this.fallbackLanguage,defaultNS:"common",ns:["common"],debug:!1,load:"languageOnly",detection:{lookupQuerystring:"lang"},backend:{backends:e,backendOptions:i}};if(this.language&&(n.lng=this.language),g.log("supported langs: %o",this.supportedLanguages),this.supportedLanguages&&(n.supportedLngs=this.supportedLanguages),this._localeFallbacks.length>0){const t=this._localeFallbacks.slice();n.defaultNS=t[0],n.fallbackNS=t.slice(1),n.ns=t}g.log("<pb-page> i18next options: %o",n),this._i18nInstance=xs.createInstance(),this._i18nInstance.use(Ws).use(Pr),(async()=>{try{var t;const i=await this._i18nInstance.init(n);if(!this._i18nInstance)return;var e;if(u(i),this._updateI18n(i),this.signalReady("pb-i18n-update",{t:i,language:null===(t=this._i18nInstance)||void 0===t?void 0:t.language}),this.requireLanguage)this.signalReady("pb-page-ready",{endpoint:this.endpoint,apiVersion:this.apiVersion,template:this.template,language:null===(e=this._i18nInstance)||void 0===e?void 0:e.language})}catch(t){var i;if(g.error("<pb-page> i18next init failed:",t),this.requireLanguage)this.signalReady("pb-page-ready",{endpoint:this.endpoint,apiVersion:this.apiVersion,template:this.template,language:null===(i=this._i18nInstance)||void 0===i?void 0:i.language})}})(),this.subscribeTo("pb-i18n-language",async t=>{const{language:e}=t.detail;try{var i;const t=await this._i18nInstance.changeLanguage(e);this._updateI18n(t),this.emitTo("pb-i18n-update",{t,language:null===(i=this._i18nInstance)||void 0===i?void 0:i.language},[])}catch(t){g.error("<pb-page> Failed to change language:",t)}}),this.addEventListener("pb-global-toggle",this._toggleFeatures.bind(this)),this.removeAttribute("unresolved"),g.log("<pb-page> endpoint: %s; trigger window resize",this.endpoint),this.querySelectorAll("app-header").forEach(t=>{"function"==typeof t._notifyLayoutChanged&&t._notifyLayoutChanged()}),bn(this)}_updateI18n(t){this.querySelectorAll("[data-i18n]").forEach(e=>{const i=e.getAttribute("data-i18n"),n=/(?:\[([^\]]+)\])?([^;]+)/g;let s=n.exec(i);for(;s;){const r=t(s[2]);s[1]?e.setAttribute(s[1],r):e.innerHTML=w(r),s=n.exec(i)}})}get stylesheet(){return this._themeSheet}_toggleFeatures(t){const e=t.detail;this.querySelectorAll(e.selector).forEach(t=>{const i=e.command||"toggle";t.command&&t.command(i,e.state),e.state?t.classList.add(i):t.classList.remove(i)})}render(){return t`<slot></slot>`}static get styles(){return e`
      :host {
        display: block;
      }
    `}}customElements.define("pb-page",Fr);class Br extends(m(s(n))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{total:{type:Number,reflect:!0},start:{type:Number,reflect:!0},perPage:{type:Number,attribute:"per-page"},foundLabel:{type:String,attribute:"found-label"},page:{type:Number},pageCount:{type:Number,attribute:"page-count"},range:{type:Number},pages:{type:Array},showPreviousNext:{type:Boolean,attribute:"show-previous-next"}})}constructor(){super(),this.total=0,this.start=1,this.perPage=10,this.page=1,this.pageCount=10,this.range=5,this.pages=[],this.foundLabel="browse.items",this.showPreviousNext=!0}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-results-received",this._refresh.bind(this)),this._update(this.start,this.total)}_update(t,e){if(!e||!t)return;if(this.pageCount=Math.ceil(e/this.perPage),this.page=Math.ceil(t/this.perPage),this.pageCount<=this.range+2)return void(this.pages=Array.from({length:this.pageCount},(t,e)=>({type:"page",label:e+1,class:e+1===this.page?"active":""})));const i=this.range-2;let n=this.page-Math.floor(i/2),s=n+i-1;n<2&&(n=2,s=n+i-1),s>this.pageCount-1&&(s=this.pageCount-1,n=Math.max(2,s-i+1)),2===n?s=Math.min(this.pageCount-1,s+1):3===n?n=2:s===this.pageCount-1?n=Math.max(2,n-1):s===this.pageCount-2&&(s=this.pageCount-1);const r={type:"overflow"},o=[];o.push({type:"page",label:1,class:1===this.page?"active":""}),n>2&&o.push(r);for(let t=0,e=s-n+1;t<e;t+=1)o.push({type:"page",label:n+t,class:n+t===this.page?"active":""});s<this.pageCount-1&&o.push(r),o.push({type:"page",label:this.pageCount,class:this.page===this.pageCount?"active":""}),this.pages=o}_refresh(t){this.start=Number(t.detail.start),this.total=t.detail.count,this._update(this.start,this.total)}_handleClick(t){this.start=(t-1)*this.perPage+1;for(const e of["pb-load","pb-paginate"])this.emitTo(e,{params:{start:this.start,"per-page":this.perPage,page:t}})}_handleFirst(){this.start=1;for(const t of["pb-load","pb-paginate"])this.emitTo(t,{params:{start:1,"per-page":this.perPage,page:0}})}_handleLast(){this.start=(this.pageCount-1)*this.perPage+1;for(const t of["pb-load","pb-paginate"])this.emitTo(t,{params:{start:this.start,"per-page":this.perPage,page:this.pageCount-1}})}static get styles(){return e`
      :host([total='0']) {
        display: none;
      }

      :host {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      nav {
        display: flex;
        ul {
          display: flex;
          .pb-paginate__nav,
          .pb-paginate__overflow,
          .pb-paginate__page {
            display: inherit;
            flex: 1 0 auto;
            height: 2.5rem;
            justify-content: center;
            margin-left: 0.25rem;
            margin-right: 0.25rem;
            background: transparent;
            min-width: 2.5rem;

            &:focus-visible {
              outline: 2px solid var(--pb-color-primary);
              outline-offset: 2px;
            }

            a.active {
              border-radius: 50%;
              box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12),
                0 3px 3px -2px rgba(0, 0, 0, 0.4);
              background-color: var(--pb-color-primary);
              color: var(--pb-color-inverse);
            }

            &.pb-paginate__overflow span,
            a {
              /* Make them click areas nice and big */
              padding: 0.5rem;
              border-radius: 2.5rem;
              color: var(--pb-color-primary);
              display: inline-flex;
              align-items: center;
              text-decoration: none;
            }
          }
        }
        span {
          display: flex;
          align-items: center;
        }
      }

      .found {
        padding-left: 20px;
      }
    `}render(){const e=t`<li
      class="pb-paginate__overflow"
      aria-label="${p("pagination.ellipsislabel")}"
    >
      <span>…</span>
    </li>`;return t`
      <nav aria-label="${p("pagination.pagination")}">
        <ul>
          ${this.showPreviousNext?t`<li
                class="pb-paginate__nav pb-paginate__nav-previous"
                style="${1===this.page?"visibility: hidden":""}"
              >
                <a
                  href="javascript:void(0);"
                  aria-label="${p("pagination.previous")}"
                  @click="${()=>this._handleClick(this.page-1)}"
                  ><pb-icon slot="previous-icon" icon="chevron-left"></pb-icon>
                  <span><pb-i18n key="pagination.previous">Previous</pb-i18n></span>
                </a>
              </li>`:l}
          ${this.pages.map(i=>"overflow"===i.type?e:t`<li class="pb-paginate__page">
                  <a
                    href="javascript:void(0);"
                    aria-label="${p("pagination.page",{page:i.label})}"
                    class="${i.class}"
                    @click="${()=>this._handleClick(i.label)}"
                  >
                    ${i.label}
                  </a>
                </li>`)}
          ${this.showPreviousNext?t`<li
                class="pb-paginate__nav pb-paginate__nav_next"
                style="${this.page<this.pageCount?"":"visibility: hidden"}"
              >
                <a
                  href="javascript:void(0);"
                  aria-label="${p("pagination.next")}"
                  @click="${()=>this._handleClick(this.page+1)}"
                >
                  <span><pb-i18n key="pagination.next">Next</pb-i18n></span
                  ><pb-icon slot="previous-icon" icon="chevron-right"></pb-icon>
                </a>
              </li>`:l}
        </ul>
        <span class="found" part="count">${p(this.foundLabel,{count:this.total})}</span>
      </nav>
    `}}customElements.define("pb-paginate",Br);class Mr extends(m(s(n))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{_disabled:{type:Boolean}})}constructor(){super(),this._disabled=!0}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-start-update",this._startUpdate.bind(this)),this.subscribeTo("pb-end-update",this._endUpdate.bind(this))}render(){return this.style.visibility=this._disabled?"hidden":"visible",t` <progress id="progress" indeterminate ?disabled="${this._disabled}"></progress> `}static get styles(){return e`
      :host {
        display: block;
        visibility: hidden;
      }

      progress {
        width: 100%;
      }
    `}_startUpdate(){this._disabled=!1}_endUpdate(){this._disabled=!0}}customElements.define("pb-progress",Mr);class qr extends(m(s(n))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{action:{type:String},name:{type:String},value:{type:String},start:{type:Number},placeHolder:{type:String,attribute:"place-holder"},redirect:{type:Boolean},currentDoc:{type:String,attribute:"current-doc"},submitOnLoad:{type:Boolean,attribute:"submit-on-load"},subforms:{type:String},disableAutocomplete:{type:Boolean,attribute:"disable-autocomplete"},source:{type:String}})}constructor(){super(),this.name="query",this.value="",this.redirect=!1,this.submitOnLoad=!1,this.placeHolder="search.placeholder",this.disableAutocomplete=!1,this.start=1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-search-resubmit",this._doSearch.bind(this)),this.subscribeTo("pb-paginate",t=>{this.start=t.detail.params.start,this._doSearch(!0)}),v.subscribe(this,t=>{this.value=t.query||"",this.start=t.start||1,this.submitOnLoad&&this.emitTo("pb-load",{url:this.action,params:t})})}firstUpdated(){if(r("pb-page-ready",t=>{const e=this.shadowRoot.getElementById("autocompleteLoader"),i=this.source||"api/search/autocomplete";this.minApiVersion("1.0.0")?e.url=`${t.endpoint}/${i}`:e.url=`${t.endpoint}/modules/autocomplete.xql`}),this.submitOnLoad){const t=v.state;v.replace(this,t),this.emitTo("pb-load",{url:this.action,params:t})}this.addEventListener("click",t=>{const e=t.target.closest("[slot]");e&&("searchButton"===e.slot&&this._doSearch(),"resetButton"===e.slot&&this._reset())})}render(){return t`
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
    `}static get styles(){return e`
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
    `}_serializeForm(){const t=this.shadowRoot.getElementById("searchPageForm"),e=new FormData(t),i={};for(const[t,n]of e.entries())i[t]=n;return this.querySelectorAll("input, select, textarea").forEach(t=>{t.name&&"button"!==t.type&&"submit"!==t.type&&"reset"!==t.type&&("checkbox"===t.type||"radio"===t.type?t.checked&&(i[t.name]=t.value):i[t.name]=t.value)}),i}_doSearch(t=!1){let e=this._serializeForm();if(e=this._paramsFromSubforms(e),e.start=t?this.start:1,this.redirect){const t=new URLSearchParams;Object.keys(e).forEach(i=>{t.append(i,e[i])}),window.location.href=`${this.action}?${t}`}else v.commit(this,e),this.emitTo("pb-load",{url:this.action,params:e})}_handleSubmit(t){t.preventDefault(),this._doSearch()}_paramsFromSubforms(t){return this.subforms&&document.querySelectorAll(this.subforms).forEach(e=>{e.serializeForm&&Object.assign(t,e.serializeForm())}),t}_handleEnter(t){if(13===t.keyCode)return this._doSearch();const{value:e}=this.shadowRoot.getElementById("search");if(e.length>2){const t=this.shadowRoot.getElementById("autocompleteLoader");t.params={query:e},t.generateRequest()}}_doSubmit(){this._doSearch()}_reset(){this.shadowRoot.getElementById("searchPageForm").reset(),v.commit(this,{},!0)}_updateSuggestions(){const t=this.shadowRoot.getElementById("autocompleteLoader"),e=this.shadowRoot.getElementById("suggestions");t.lastResponse&&(e.innerHTML="",t.lastResponse.forEach(({text:t,value:i})=>{const n=document.createElement("option");n.value=i,n.innerText=t,e.appendChild(n)}))}}function zr(t,e){const i=e.findIndex(e=>e.selector===t.selector);i>-1?e[i]=t:e.push(t)}customElements.get("pb-search")||customElements.define("pb-search",qr);class Ur extends(m(s(n))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{name:{type:String},selector:{type:String},action:{type:String},on:{type:String},off:{type:String},default:{type:String},propertiesOn:{type:Object,attribute:"properties-on"},propertiesOff:{type:Object,attribute:"properties-off"},checked:{type:Boolean},initFromView:{type:Boolean,attribute:"init-from-view"},global:{type:Boolean}})}constructor(){super(),this.default="on",this.on="on",this.off="off",this.action="toggle",this.propertiesOn={},this.propertiesOff={},this.initFromView=!1,this.global=!1}render(){return t`
            <input type="checkbox" id="checkbox" @change="${this._changed}" .checked="${this.checked}" .disabled="${this.disabled}"></input>
            <label for="checkbox"><slot></slot></label>
        `}connectedCallback(){super.connectedCallback(),v.subscribe(this,t=>{const e=t[this.name];this._setChecked(e)});const t=v.state[this.name];this._setChecked(t);const e={};e[this.name]=this.checked?this.on:this.off,v.replace(this,e),this._saveState(),this.signalReady(),r("pb-page-ready",()=>{this.global?this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:{selector:this.selector,command:this.action,state:this.checked},bubbles:!0,composed:!0})):this.selector&&this.emitTo("pb-toggle",{refresh:!1})})}_setChecked(t){this.checked=void 0!==t?t===this.on:this.default===this.on}attributeChangedCallback(t,e,i){switch(super.attributeChangedCallback(t,e,i),t){case this.on:this.propertiesOn[this.name]=i;break;case this.off:this.propertiesOff[this.name]=i}}_changed(){if(this.checked=this.shadowRoot.getElementById("checkbox").checked,this._saveState(),this.global){const t={};t[this.name]=this.checked?this.on:this.off,v.commit(this,t)}else this.emitTo("pb-toggle",{refresh:!this.selector})}_saveState(){const t=v.getState(this);if(t[this.name]=this.checked?this.on:this.off,Object.assign(t,this.checked?this.propertiesOn:this.propertiesOff),this.selector){const e={selector:this.selector,command:this.action,state:this.checked};this.global?this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:e,bubbles:!0,composed:!0})):(t.selectors=t.selectors||[],zr(e,t.selectors))}}}customElements.define("pb-toggle-feature",Ur);class Hr extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{name:{type:String},label:{type:String},selected:{type:Number},items:{type:Array}})}constructor(){super(),this.initializing=!0,this.items=[],this.label="document.selectFeature"}connectedCallback(){super.connectedCallback(),v.subscribe(this,t=>{const e=t[this.name];this.selected=void 0!==e?parseInt(e,10):0,this.requestUpdate()});const t=v.state[this.name];void 0!==t?this.selected=parseInt(t,10):this.items.length>0&&(this.selected=0);const e={};e[this.name]=this.selected,v.replace(this,e),this.signalReady()}updated(t){super.updated(t),t.has("items")&&(Array.isArray(this.items)||(this.items=[]),("number"!=typeof this.selected||this.selected>=this.items.length)&&(this.selected=this.items.length>0?0:null))}_selectionChanged(t){const e=parseInt(t.target.value,10);if(Number.isNaN(e))return;this.selected=e;const i=this._saveState(e);this.initializing?this.initializing=!1:this.emitTo("pb-toggle",{refresh:i})}_saveState(t){const e=t,i=v.getState(this);i[this.name]=e,Object.assign(i,this.items[e].properties),this.items[e].selectors&&(i.selectors||(i.selectors=[]),this.items[e].selectors.forEach(t=>{t.global?(v.commit(this,i),this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:t,bubbles:!0,composed:!0}))):zr({selector:t.selector,state:t.state,command:t.command},i.selectors)}));const n=this.items[e];if(!n)return!1;const s=n.properties||{};return Object.assign(i,s),n.selectors&&(i.selectors||(i.selectors=[]),n.selectors.forEach(t=>{t.global?(v.commit(this,i),this.dispatchEvent(new CustomEvent("pb-global-toggle",{detail:t,bubbles:!0,composed:!0}))):zr({selector:t.selector,state:t.state,command:t.command},i.selectors)})),s&&"object"==typeof s}render(){const e=Array.isArray(this.items)?this.items:[];return t`
      <label class="pb-select-feature__label" for="feature-select">
        ${p(this.label)}
      </label>
      <select
        id="feature-select"
        class="pb-select-feature__select"
        name=${k(this.name||void 0)}
        .value=${null==this.selected?"":String(this.selected)}
        ?disabled=${this.disabled}
        @change=${this._selectionChanged}
      >
        ${e.map((e,i)=>t`<option value="${i}">${p(e.name)}</option>`)}
      </select>
    `}static get styles(){return e`
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
    `}}customElements.define("pb-select-feature",Hr);const Vr="undefined"!=typeof window,Wr=Vr?window:null,Gr=Vr?document:null,Yr={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},Qr={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},Kr={NONE:0,AUTO:1,FORCE:2},Jr={replace:0,none:1,blend:2},Zr=Symbol(),Xr=Symbol(),to=Symbol(),eo=Symbol(),io=Symbol(),no=1e-11,so=1e12,ro=1e3,oo=120,ao="",lo="var(",co=(()=>{const t=new Map;return t.set("x","translateX"),t.set("y","translateY"),t.set("z","translateZ"),t})(),po=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","matrix","matrix3d","perspective"],uo=po.reduce((t,e)=>Object.assign(Object.assign({},t),{},{[e]:e+"("}),{}),ho=()=>{},go=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,fo=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,mo=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,bo=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,yo=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,vo=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,_o=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,wo=/([a-z])([A-Z])/g,xo=/(\w+)(\([^)]+\)+)/g,ko=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/,Ao={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:oo,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:ro,delay:0,loopDelay:0,ease:"out(2)",composition:Jr.replace,modifier:t=>t,onBegin:ho,onBeforeUpdate:ho,onUpdate:ho,onLoop:ho,onPause:ho,onComplete:ho,onRender:ho},So={root:Gr},Oo={defaults:Ao,precision:4,timeScale:1,tickThreshold:200},Eo={version:"4.2.2",engine:null};Vr&&(Wr.AnimeJS||(Wr.AnimeJS=[]),Wr.AnimeJS.push(Eo));const $o=t=>t.replace(wo,"$1-$2").toLowerCase(),Co=(t,e)=>0===t.indexOf(e),To=Date.now,Io=Array.isArray,Lo=t=>t&&t.constructor===Object,Ro=t=>"number"==typeof t&&!isNaN(t),jo=t=>"string"==typeof t,No=t=>"function"==typeof t,Po=t=>void 0===t,Do=t=>Po(t)||null===t,Fo=t=>Vr&&t instanceof SVGElement,Bo=t=>go.test(t),Mo=t=>Co(t,"rgb"),qo=t=>Co(t,"hsl"),zo=t=>Bo(t)||Mo(t)||qo(t),Uo=t=>!Oo.defaults.hasOwnProperty(t),Ho=["opacity","rotate","overflow","color"],Vo=(t,e)=>{if(Ho.includes(e))return!1;if(t.getAttribute(e)||e in t){if("scale"===e){const e=t.parentNode;return e&&"filter"===e.tagName}return!0}},Wo=Math.pow,Go=Math.sqrt,Yo=Math.sin,Qo=Math.cos,Ko=Math.floor,Jo=Math.asin,Zo=Math.PI,Xo=Math.round,ta=(t,e,i)=>t<e?e:t>i?i:t,ea={},ia=(t,e)=>{if(e<0)return t;if(!e)return Xo(t);let i=ea[e];return i||(i=ea[e]=10**e),Xo(t*i)/i},na=(t,e,i)=>t+(e-t)*i,sa=t=>t===1/0?so:t===-1/0?-so:t,ra=t=>t<=no?no:sa(ia(t,11)),oa=t=>Io(t)?[...t]:t,aa=(t,e)=>{const i=Object.assign({},t);for(let n in e){const s=t[n];i[n]=Po(s)?e[n]:s}return i},la=(t,e,i,n="_prev",s="_next")=>{let r=t._head,o=s;for(i&&(r=t._tail,o=n);r;){const t=r[o];e(r),r=t}},ca=(t,e,i="_prev",n="_next")=>{const s=e[i],r=e[n];s?s[n]=r:t._head=r,r?r[i]=s:t._tail=s,e[i]=null,e[n]=null},da=(t,e,i,n="_prev",s="_next")=>{let r=t._tail;for(;r&&i&&i(r,e);)r=r[n];const o=r?r[s]:t._head;r?r[s]=e:t._head=e,o?o[n]=e:t._tail=e,e[n]=r,e[s]=o},pa=(t,e,i)=>{const n=t.style.transform;let s;if(n){const r=t[eo];let o;for(;o=xo.exec(n);){const t=o[1],n=o[2].slice(1,-1);r[t]=n,t===e&&(s=n,i&&(i[e]=n))}}return n&&!Po(s)?s:Co(e,"scale")?"1":Co(e,"rotate")||Co(e,"skew")?"0deg":"0px"},ua=t=>{const e=fo.exec(t)||mo.exec(t),i=Po(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],i]},ha=t=>{const e=t.length,i=4===e||5===e;return[+("0x"+t[1]+t[i?1:2]),+("0x"+t[i?2:3]+t[i?2:4]),+("0x"+t[i?3:5]+t[i?3:6]),5===e||9===e?+(+("0x"+t[i?4:7]+t[i?4:8])/255).toFixed(3):1]},ga=(t,e,i)=>(i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t),fa=t=>{const e=bo.exec(t)||yo.exec(t),i=+e[1]/360,n=+e[2]/100,s=+e[3]/100,r=Po(e[4])?1:+e[4];let o,a,l;if(0===n)o=a=l=s;else{const t=s<.5?s*(1+n):s+n-s*n,e=2*s-t;o=ia(255*ga(e,t,i+1/3),0),a=ia(255*ga(e,t,i),0),l=ia(255*ga(e,t,i-1/3),0)}return[o,a,l,r]},ma=t=>Mo(t)?ua(t):Bo(t)?ha(t):qo(t)?fa(t):[0,0,0,1],ba=(t,e)=>Po(t)?e:t,ya=(t,e,i,n,s)=>{let r;if(No(t))r=()=>{const s=t(e,i,n);return isNaN(+s)?s||0:+s};else{if(!jo(t)||!Co(t,lo))return t;r=()=>{var i;const n=t.match(ko),s=n[1],r=n[2];let o=null===(i=getComputedStyle(e))||void 0===i?void 0:i.getPropertyValue(s);return o&&o.trim()!==ao||!r||(o=r.trim()),o||0}}return s&&(s.func=r),r()},va=(t,e)=>t[Xr]?t[to]&&Vo(t,e)?Yr.ATTRIBUTE:po.includes(e)||co.get(e)?Yr.TRANSFORM:Co(e,"--")?Yr.CSS_VAR:e in t.style?Yr.CSS:e in t?Yr.OBJECT:Yr.ATTRIBUTE:Yr.OBJECT,_a=(t,e,i)=>{const n=t.style[e];n&&i&&(i[e]=n);const s=n||getComputedStyle(t[io]||t).getPropertyValue(e);return"auto"===s?"0":s},wa=(t,e,i,n)=>{const s=Po(i)?va(t,e):i;return s===Yr.OBJECT?t[e]||0:s===Yr.ATTRIBUTE?t.getAttribute(e):s===Yr.TRANSFORM?pa(t,e,n):s===Yr.CSS_VAR?_a(t,e,n).trimStart():_a(t,e,n)},xa=(t,e,i)=>"-"===i?t-e:"+"===i?t+e:t*e,ka=()=>({t:Qr.NUMBER,n:0,u:null,o:null,d:null,s:null}),Aa=(t,e)=>{if(e.t=Qr.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!t)return e;const i=+t;if(isNaN(i)){let i=t;"="===i[1]&&(e.o=i[0],i=i.slice(2));const n=!i.includes(" ")&&_o.exec(i);if(n)return e.t=Qr.UNIT,e.n=+n[1],e.u=n[2],e;if(e.o)return e.n=+i,e;if(zo(i))return e.t=Qr.COLOR,e.d=ma(i),e;{const t=i.match(vo);return e.t=Qr.COMPLEX,e.d=t?t.map(Number):[],e.s=i.split(vo)||[],e}}return e.n=i,e},Sa=(t,e)=>(e.t=t._valueType,e.n=t._toNumber,e.u=t._unit,e.o=null,e.d=oa(t._toNumbers),e.s=oa(t._strings),e),Oa=ka(),Ea=(t,e,i,n,s)=>{const r=t.parent,o=t.duration,a=t.completed,l=t.iterationDuration,c=t.iterationCount,d=t._currentIteration,p=t._loopDelay,u=t._reversed,h=t._alternate,g=t._hasChildren,f=t._delay,m=t._currentTime,b=f+l,y=e-f,v=ta(m,-f,o),_=ta(y,-f,o),w=y-m,x=_>0,k=_>=o,A=o<=no,S=s===Kr.FORCE;let O=0,E=y,$=0;if(c>1){const e=~~(_/(l+(k?0:p)));t._currentIteration=ta(e,0,c),k&&t._currentIteration--,O=t._currentIteration%2,E=_%(l+p)||0}const C=u^(h&&O),T=t._ease;let I=k?C?0:o:C?l-E:E;T&&(I=l*T(I/l)||0);const L=(r?r.backwards:y<m)?!C:!!C;if(t._currentTime=y,t._iterationTime=I,t.backwards=L,x&&!t.began?(t.began=!0,i||r&&(L||!r.began)||t.onBegin(t)):y<=0&&(t.began=!1),i||g||!x||t._currentIteration===d||t.onLoop(t),S||s===Kr.AUTO&&(e>=f&&e<=b||e<=f&&v>f||e>=b&&v!==o)||I>=b&&v!==o||I<=f&&v>0||e<=v&&v===o&&a||k&&!a&&A){if(x&&(t.computeDeltaTime(v),i||t.onBeforeUpdate(t)),!g){const e=S||(L?-1*w:w)>=Oo.tickThreshold,s=t._offset+(r?r._offset:0)+f+I;let o,a,l,c,d=t._head,p=0;for(;d;){const t=d._composition,i=d._currentTime,r=d._changeDuration,u=d._absoluteStartTime+d._changeDuration,h=d._nextRep,g=d._prevRep,f=t!==Jr.none;if((e||(i!==r||s<=u+(h?h._delay:0))&&(0!==i||s>=d._absoluteStartTime))&&(!f||!d._isOverridden&&(!d._isOverlapped||s<=u)&&(!h||h._isOverridden||s<=h._absoluteStartTime)&&(!g||g._isOverridden||s>=g._absoluteStartTime+g._changeDuration+d._delay))){const e=d._currentTime=ta(I-d._startTime,0,r),i=d._ease(e/d._updateDuration),s=d._modifier,u=d._valueType,h=d._tweenType,g=h===Yr.OBJECT,m=u===Qr.NUMBER,b=m&&g||0===i||1===i?-1:Oo.precision;let y,v;if(m)y=v=s(ia(na(d._fromNumber,d._toNumber,i),b));else if(u===Qr.UNIT)v=s(ia(na(d._fromNumber,d._toNumber,i),b)),y=`${v}${d._unit}`;else if(u===Qr.COLOR){const t=d._fromNumbers,e=d._toNumbers,n=ia(ta(s(na(t[0],e[0],i)),0,255),0),r=ia(ta(s(na(t[1],e[1],i)),0,255),0),o=ia(ta(s(na(t[2],e[2],i)),0,255),0),a=ta(s(ia(na(t[3],e[3],i),b)),0,1);if(y=`rgba(${n},${r},${o},${a})`,f){const t=d._numbers;t[0]=n,t[1]=r,t[2]=o,t[3]=a}}else if(u===Qr.COMPLEX){y=d._strings[0];for(let t=0,e=d._toNumbers.length;t<e;t++){const e=s(ia(na(d._fromNumbers[t],d._toNumbers[t],i),b)),n=d._strings[t+1];y+=`${n?e+n:e}`,f&&(d._numbers[t]=e)}}if(f&&(d._number=v),n||t===Jr.blend)d._value=y;else{const t=d.property;o=d.target,g?o[t]=y:h===Yr.ATTRIBUTE?o.setAttribute(t,y):(a=o.style,h===Yr.TRANSFORM?(o!==l&&(l=o,c=o[eo]),c[t]=y,p=1):h===Yr.CSS?a[t]=y:h===Yr.CSS_VAR&&a.setProperty(t,y)),x&&($=1)}}if(p&&d._renderTransforms){let t=ao;for(let e in c)t+=`${uo[e]}${c[e]}) `;a.transform=t,p=0}d=d._next}!i&&$&&t.onRender(t)}!i&&x&&t.onUpdate(t)}return r&&A?!i&&(r.began&&!L&&y>0&&!a||L&&y<=no&&a)&&(t.onComplete(t),t.completed=!L):x&&k?c===1/0?t._startTime+=t.duration:t._currentIteration>=c-1&&(t.paused=!0,a||g||(t.completed=!0,i||r&&(L||!r.began)||(t.onComplete(t),t._resolve(t)))):t.completed=!1,$},$a=(t,e,i,n,s)=>{const r=t._currentIteration;if(Ea(t,e,i,n,s),t._hasChildren){const o=t,a=o.backwards,l=n?e:o._iterationTime,c=To();let d=0,p=!0;if(!n&&o._currentIteration!==r){const t=o.iterationDuration;la(o,e=>{if(a){const n=e.duration,s=e._offset+e._delay;i||!(n<=no)||s&&s+n!==t||e.onComplete(e)}else!e.completed&&!e.backwards&&e._currentTime<e.iterationDuration&&Ea(e,t,i,1,Kr.FORCE),e.began=!1,e.completed=!1}),i||o.onLoop(o)}la(o,t=>{const e=ia((l-t._offset)*t._speed,12),r=t._fps<o._fps?t.requestTick(c):s;d+=Ea(t,e,i,n,r),!t.completed&&p&&(p=!1)},a),!i&&d&&o.onRender(o),(p||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,i||(o.onComplete(o),o._resolve(o))))}},Ca={},Ta=(t,e,i)=>{if(i===Yr.TRANSFORM){const e=co.get(t);return e||t}if(i===Yr.CSS||i===Yr.ATTRIBUTE&&Fo(e)&&t in e.style){const e=Ca[t];if(e)return e;{const e=t?$o(t):t;return Ca[t]=e,e}}return t},Ia=t=>{if(t._hasChildren)la(t,Ia,!0);else{const e=t;e.pause(),la(e,t=>{const i=t.property,n=t.target;if(n[Xr]){const s=n.style,r=t._inlineValue,o=Do(r)||r===ao;if(t._tweenType===Yr.TRANSFORM){const e=n[eo];if(o?delete e[i]:e[i]=r,t._renderTransforms)if(Object.keys(e).length){let t=ao;for(let i in e)t+=uo[i]+e[i]+") ";s.transform=t}else s.removeProperty("transform")}else o?s.removeProperty($o(i)):s[i]=r;e._tail===t&&e.targets.forEach(t=>{t.getAttribute&&t.getAttribute("style")===ao&&t.removeAttribute("style")})}})}return t};class La{constructor(t=0){this.deltaTime=0,this._currentTime=t,this._elapsedTime=t,this._startTime=t,this._lastTime=t,this._scheduledTime=0,this._frameDuration=ia(ro/oo,0),this._fps=oo,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(t){const e=this._frameDuration,i=+t,n=i<no?no:i,s=ia(ro/n,0);this._fps=n,this._frameDuration=s,this._scheduledTime+=s-e}get speed(){return this._speed}set speed(t){const e=+t;this._speed=e<no?no:e}requestTick(t){const e=this._scheduledTime,i=this._elapsedTime;if(this._elapsedTime+=t-i,i<e)return Kr.NONE;const n=this._frameDuration,s=i-e;return this._scheduledTime+=s<n?n:s,Kr.AUTO}computeDeltaTime(t){const e=t-this._lastTime;return this.deltaTime=e,this._lastTime=t,e}}const Ra={animation:null,update:ho},ja=t=>{let e=Ra.animation;return e||(e={duration:no,computeDeltaTime:ho,_offset:0,_delay:0,_head:null,_tail:null},Ra.animation=e,Ra.update=()=>{t.forEach(t=>{for(let e in t){const i=t[e],n=i._head;if(n){const t=n._valueType,e=t===Qr.COMPLEX||t===Qr.COLOR?oa(n._fromNumbers):null;let s=n._fromNumber,r=i._tail;for(;r&&r!==n;){if(e)for(let t=0,i=r._numbers.length;t<i;t++)e[t]+=r._numbers[t];else s+=r._number;r=r._prevAdd}n._toNumber=s,n._toNumbers=e}}}),Ea(e,1,1,0,Kr.FORCE)}),e},Na=(()=>Vr?requestAnimationFrame:setImmediate)(),Pa=(()=>Vr?cancelAnimationFrame:clearImmediate)();class Da extends La{constructor(t){super(t),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=Ao,this.paused=!0,this.reqId=0}update(){const t=this._currentTime=To();if(this.requestTick(t)){this.computeDeltaTime(t);const e=this._speed,i=this._fps;let n=this._head;for(;n;){const s=n._next;n.paused?(ca(this,n),this._hasChildren=!!this._tail,n._running=!1,n.completed&&!n._cancelled&&n.cancel()):$a(n,(t-n._startTime)*n._speed*e,0,0,n._fps<i?n.requestTick(t):Kr.AUTO),n=s}Ra.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(To()),this.reqId=Na(Ba)),this}pause(){if(this.reqId)return this.paused=!0,Ma()}resume(){if(this.paused)return this.paused=!1,la(this,t=>t.resetTime()),this.wake()}get speed(){return this._speed*(1===Oo.timeScale?1:ro)}set speed(t){this._speed=t*Oo.timeScale,la(this,t=>t.speed=t._speed)}get timeUnit(){return 1===Oo.timeScale?"ms":"s"}set timeUnit(t){const e=.001,i="s"===t,n=i?e:1;if(Oo.timeScale!==n){Oo.timeScale=n,Oo.tickThreshold=200*n;const t=i?e:ro;this.defaults.duration*=t,this._speed*=t}}get precision(){return Oo.precision}set precision(t){Oo.precision=t}}const Fa=(()=>{const t=new Da(To());return Vr&&(Eo.engine=t,Gr.addEventListener("visibilitychange",()=>{t.pauseOnDocumentHidden&&(Gr.hidden?t.pause():t.resume())})),t})(),Ba=()=>{Fa._head?(Fa.reqId=Na(Ba),Fa.update()):Fa.reqId=0},Ma=()=>(Pa(Fa.reqId),Fa.reqId=0,Fa),qa={_rep:new WeakMap,_add:new Map},za=(t,e,i="_rep")=>{const n=qa[i];let s=n.get(t);return s||(s={},n.set(t,s)),s[e]?s[e]:s[e]={_head:null,_tail:null}},Ua=(t,e)=>t._isOverridden||t._absoluteStartTime>e._absoluteStartTime,Ha=t=>{t._isOverlapped=1,t._isOverridden=1,t._changeDuration=no,t._currentTime=no},Va=(t,e)=>{const i=t._composition;if(i===Jr.replace){const i=t._absoluteStartTime;da(e,t,Ua,"_prevRep","_nextRep");const n=t._prevRep;if(n){const e=n.parent,s=n._absoluteStartTime+n._changeDuration;if(t.parent.id!==e.id&&e.iterationCount>1&&s+(e.duration-e.iterationDuration)>i){Ha(n);let t=n._prevRep;for(;t&&t.parent.id===e.id;)Ha(t),t=t._prevRep}const r=i-t._delay;if(s>r){const t=n._startTime,e=s-(t+n._updateDuration),i=ia(r-e-t,12);n._changeDuration=i,n._currentTime=i,n._isOverlapped=1,i<no&&Ha(n)}let o=!0;if(la(e,t=>{t._isOverlapped||(o=!1)}),o){const t=e.parent;if(t){let i=!0;la(t,t=>{t!==e&&la(t,t=>{t._isOverlapped||(i=!1)})}),i&&t.cancel()}else e.cancel()}}}else if(i===Jr.blend){const e=za(t.target,t.property,"_add"),i=ja(qa._add);let n=e._head;n||(n=Object.assign({},t),n._composition=Jr.replace,n._updateDuration=no,n._startTime=0,n._numbers=oa(t._fromNumbers),n._number=0,n._next=null,n._prev=null,da(e,n),da(i,n));const s=t._toNumber;if(t._fromNumber=n._fromNumber-s,t._toNumber=0,t._numbers=oa(t._fromNumbers),t._number=0,n._fromNumber=s,t._toNumbers){const e=oa(t._toNumbers);e&&e.forEach((e,i)=>{t._fromNumbers[i]=n._fromNumbers[i]-e,t._toNumbers[i]=0}),n._fromNumbers=e}da(e,t,null,"_prevAdd","_nextAdd")}return t},Wa=t=>{const e=t._composition;if(e!==Jr.none){const i=t.target,n=t.property,s=qa._rep.get(i)[n];if(ca(s,t,"_prevRep","_nextRep"),e===Jr.blend){const e=qa._add,s=e.get(i);if(!s)return;const r=s[n],o=Ra.animation;ca(r,t,"_prevAdd","_nextAdd");const a=r._head;if(a&&a===r._tail){ca(r,a,"_prevAdd","_nextAdd"),ca(o,a);let t=!0;for(let e in s)if(s[e]._head){t=!1;break}t&&e.delete(i)}}}return t},Ga=t=>(t.paused=!0,t.began=!1,t.completed=!1,t),Ya=t=>t._cancelled?(t._hasChildren?la(t,Ya):la(t,t=>{t._composition!==Jr.none&&Va(t,za(t.target,t.property))}),t._cancelled=0,t):t;let Qa=0;class Ka extends La{constructor(t={},e=null,i=0){super(0);const{id:n,delay:s,duration:r,reversed:o,alternate:a,loop:l,loopDelay:c,autoplay:d,frameRate:p,playbackRate:u,onComplete:h,onLoop:g,onPause:f,onBegin:m,onBeforeUpdate:b,onUpdate:y}=t,v=e?0:Fa._elapsedTime,_=e?e.defaults:Oo.defaults,w=No(s)||Po(s)?_.delay:+s,x=No(r)||Po(r)?1/0:+r,k=ba(l,_.loop),A=ba(c,_.loopDelay),S=!0===k||k===1/0||k<0?1/0:k+1;let O=0;e?O=i:(Fa.reqId||Fa.requestTick(To()),O=(Fa._elapsedTime-Fa._startTime)*Oo.timeScale),this.id=Po(n)?++Qa:n,this.parent=e,this.duration=sa((x+A)*S-A)||no,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=m||_.onBegin,this.onBeforeUpdate=b||_.onBeforeUpdate,this.onUpdate=y||_.onUpdate,this.onLoop=g||_.onLoop,this.onPause=f||_.onPause,this.onComplete=h||_.onComplete,this.iterationDuration=x,this.iterationCount=S,this._autoplay=!e&&ba(d,_.autoplay),this._offset=O,this._delay=w,this._loopDelay=A,this._iterationTime=0,this._currentIteration=0,this._resolve=ho,this._running=!1,this._reversed=+ba(o,_.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=ba(a,_.alternate),this._prev=null,this._next=null,this._elapsedTime=v,this._startTime=v,this._lastTime=v,this._fps=ba(p,_.frameRate),this._speed=ba(u,_.playbackRate)}get cancelled(){return!!this._cancelled}set cancelled(t){t?this.cancel():this.reset(!0).play()}get currentTime(){return ta(ia(this._currentTime,Oo.precision),-this._delay,this.duration)}set currentTime(t){const e=this.paused;this.pause().seek(+t),e||this.resume()}get iterationCurrentTime(){return ia(this._iterationTime,Oo.precision)}set iterationCurrentTime(t){this.currentTime=this.iterationDuration*this._currentIteration+t}get progress(){return ta(ia(this._currentTime/this.duration,10),0,1)}set progress(t){this.currentTime=this.duration*t}get iterationProgress(){return ta(ia(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(t){const e=this.iterationDuration;this.currentTime=e*this._currentIteration+e*t}get currentIteration(){return this._currentIteration}set currentIteration(t){this.currentTime=this.iterationDuration*ta(+t,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(t){t?this.reverse():this.play()}get speed(){return super.speed}set speed(t){super.speed=t,this.resetTime()}reset(t=!1){return Ya(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,$a(this,0,1,~~t,Kr.FORCE),Ga(this),this._hasChildren&&la(this,Ga),this}init(t=!1){this.fps=this._fps,this.speed=this._speed,!t&&this._hasChildren&&$a(this,this.duration,1,~~t,Kr.FORCE),this.reset(t);const e=this._autoplay;return!0===e?this.resume():e&&!Po(e.linked)&&e.link(this),this}resetTime(){const t=1/(this._speed*Fa._speed);return this._startTime=To()-(this._currentTime+this._delay)*t,this}pause(){return this.paused||(this.paused=!0,this.onPause(this)),this}resume(){return this.paused?(this.paused=!1,this.duration<=no&&!this._hasChildren?$a(this,no,0,0,Kr.FORCE):(this._running||(da(Fa,this),Fa._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,Fa.wake()),this):this}restart(){return this.reset().resume()}seek(t,e=0,i=0){Ya(this),this.completed=!1;const n=this.paused;return this.paused=!0,$a(this,t+this._delay,~~e,~~i,Kr.AUTO),n?this:this.resume()}alternate(){const t=this._reversed,e=this.iterationCount,i=this.iterationDuration,n=e===1/0?Ko(so/i):e;return this._reversed=+(!this._alternate||n%2?!t:t),e===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(i*n-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?la(this,t=>t.cancel(),!0):la(this,Wa),this._cancelled=1,this.pause()}stretch(t){const e=this.duration,i=ra(t);if(e===i)return this;const n=t/e,s=t<=no;return this.duration=s?no:i,this.iterationDuration=s?no:ra(this.iterationDuration*n),this._offset*=n,this._delay*=n,this._loopDelay*=n,this}revert(){$a(this,0,1,0,Kr.AUTO);const t=this._autoplay;return t&&t.linked&&t.linked===this&&t.revert(),this.cancel()}complete(){return this.seek(this.duration).cancel()}then(t=ho){const e=this.then,i=()=>{this.then=null,t(this),this.then=e,this._resolve=ho};return new Promise(t=>(this._resolve=()=>t(i()),this.completed&&this._resolve(),this))}}function Ja(t){const e=jo(t)?So.root.querySelectorAll(t):t;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function Za(t){if(Do(t))return[];if(!Vr)return Io(t)&&t.flat(1/0)||[t];if(Io(t)){const e=t.flat(1/0),i=[];for(let t=0,n=e.length;t<n;t++){const n=e[t];if(!Do(n)){const t=Ja(n);if(t)for(let e=0,n=t.length;e<n;e++){const n=t[e];if(!Do(n)){let t=!1;for(let e=0,s=i.length;e<s;e++)if(i[e]===n){t=!0;break}t||i.push(n)}}else{let t=!1;for(let e=0,s=i.length;e<s;e++)if(i[e]===n){t=!0;break}t||i.push(n)}}}return i}const e=Ja(t);return e?Array.from(e):[t]}function Xa(t){const e=Za(t),i=e.length;if(i)for(let t=0;t<i;t++){const i=e[t];if(!i[Zr]){i[Zr]=!0;const t=Fo(i);(i.nodeType||t)&&(i[Xr]=!0,i[to]=t,i[eo]={})}}return e}const tl={deg:1,rad:180/Zo,turn:360},el={},il=(t,e,i,n=!1)=>{const s=e.u,r=e.n;if(e.t===Qr.UNIT&&s===i)return e;const o=r+s+i,a=el[o];if(Po(a)||n){let n;if(s in tl)n=r*tl[s]/tl[i];else{const e=100,o=t.cloneNode(),a=t.parentNode,l=a&&a!==Gr?a:Gr.body;l.appendChild(o);const c=o.style;c.width=e+s;const d=o.offsetWidth||e;c.width=e+i;const p=d/(o.offsetWidth||e);l.removeChild(o),n=p*r}e.n=n,el[o]=n}else e.n=a;return e.t,Qr.UNIT,e.u=i,e},nl=t=>t,sl=(t=1.68)=>e=>Wo(e,+t),rl={in:t=>e=>t(e),out:t=>e=>1-t(1-e),inOut:t=>e=>e<.5?t(2*e)/2:1-t(-2*e+2)/2,outIn:t=>e=>e<.5?(1-t(1-2*e))/2:(t(2*e-1)+1)/2},ol=Zo/2,al=2*Zo,ll={[ao]:sl,Quad:sl(2),Cubic:sl(3),Quart:sl(4),Quint:sl(5),Sine:t=>1-Qo(t*ol),Circ:t=>1-Go(1-t*t),Expo:t=>t?Wo(2,10*t-10):0,Bounce:t=>{let e,i=4;for(;t<((e=Wo(2,--i))-1)/11;);return 1/Wo(4,3-i)-7.5625*Wo((3*e-2)/22-t,2)},Back:(t=1.7)=>e=>(+t+1)*e*e*e-+t*e*e,Elastic:(t=1,e=.3)=>{const i=ta(+t,1,10),n=ta(+e,no,2),s=n/al*Jo(1/i),r=al/n;return t=>0===t||1===t?t:-i*Wo(2,-10*(1-t))*Yo((1-t-s)*r)}},cl=(()=>{const t={linear:nl,none:nl};for(let e in rl)for(let i in ll){const n=ll[i],s=rl[e];t[e+i]=i===ao||"Back"===i||"Elastic"===i?(t,e)=>s(n(t,e)):s(n)}return t})(),dl={linear:nl,none:nl},pl=t=>{if(dl[t])return dl[t];if(t.indexOf("(")<=-1){const e=rl[t]||t.includes("Back")||t.includes("Elastic")?cl[t]():cl[t];return e?dl[t]=e:nl}{const e=t.slice(0,-1).split("("),i=cl[e[0]];return i?dl[t]=i(...e[1].split(",")):nl}},ul=["steps(","irregular(","linear(","cubicBezier("],hl=t=>{if(jo(t))for(let e=0,i=ul.length;e<i;e++)if(Co(t,ul[e]))return console.warn(`String syntax for \`ease: "${t}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${t}\``),nl;return No(t)?t:jo(t)?pl(t):nl},gl=ka(),fl=ka(),ml={},bl={func:null},yl=[null],vl=[null,null],_l={to:null};let wl,xl,kl=0;const Al=(t,e)=>{const i={};if(Io(t)){const e=[].concat(...t.map(t=>Object.keys(t))).filter(Uo);for(let n=0,s=e.length;n<s;n++){const s=e[n],r=t.map(t=>{const e={};for(let i in t){const n=t[i];Uo(i)?i===s&&(e.to=n):e[i]=n}return e});i[s]=r}}else{const n=ba(e.duration,Oo.defaults.duration),s=Object.keys(t).map(e=>({o:parseFloat(e)/100,p:t[e]})).sort((t,e)=>t.o-e.o);s.forEach(t=>{const e=t.o,s=t.p;for(let t in s)if(Uo(t)){let r=i[t];r||(r=i[t]=[]);const o=e*n;let a=r.length,l=r[a-1];const c={to:s[t]};let d=0;for(let t=0;t<a;t++)d+=r[t].duration;1===a&&(c.from=l.to),s.ease&&(c.ease=s.ease),c.duration=o-(a?d:0),r.push(c)}return t});for(let t in i){const e=i[t];let n;for(let t=0,i=e.length;t<i;t++){const i=e[t],s=i.ease;i.ease=n||void 0,n=s}e[0].duration||e.shift()}}return i};class Sl extends Ka{constructor(t,e,i,n,s=!1,r=0,o=0){super(e,i,n);const a=Xa(t),l=a.length,c=e.keyframes,d=c?aa(Al(c,e),e):e,{delay:p,duration:u,ease:h,playbackEase:g,modifier:f,composition:m,onRender:b}=d,y=i?i.defaults:Oo.defaults,v=ba(g,y.playbackEase),_=v?hl(v):null,w=!Po(h)&&!Po(h.ease),x=w?h.ease:ba(h,_?"linear":y.ease),k=w?h.settlingDuration:ba(u,y.duration),A=ba(p,y.delay),S=f||y.modifier,O=Po(m)&&l>=ro?Jr.none:Po(m)?y.composition:m,E=this._offset+(i?i._offset:0);w&&(h.parent=this);let $=NaN,C=NaN,T=0,I=0;for(let t=0;t<l;t++){const e=a[t],n=r||t,c=o||l;let p=NaN,u=NaN;for(let t in d)if(Uo(t)){const r=va(e,t),o=Ta(t,e,r);let a=d[t];const l=Io(a);if(s&&!l&&(vl[0]=a,vl[1]=a,a=vl),l){const t=a.length,e=!Lo(a[0]);2===t&&e?(_l.to=a,yl[0]=_l,wl=yl):t>2&&e?(wl=[],a.forEach((t,e)=>{e?1===e?(vl[1]=t,wl.push(vl)):wl.push(t):vl[0]=t})):wl=a}else yl[0]=a,wl=yl;let h=null,g=null,f=NaN,m=0,b=0;for(let t=wl.length;b<t;b++){const s=wl[b];Lo(s)?xl=s:(_l.to=s,xl=_l),bl.func=null;const a=ya(xl.to,e,n,c,bl);let l;Lo(a)&&!Po(a.to)?(xl=a,l=a.to):l=a;const d=ya(xl.from,e,n,c),p=xl.ease,u=!Po(p)&&!Po(p.ease),y=u?p.ease:p||x,v=u?p.settlingDuration:ya(ba(xl.duration,t>1?ya(k,e,n,c)/t:k),e,n,c),_=ya(ba(xl.delay,b?0:A),e,n,c),w=ya(ba(xl.composition,O),e,n,c),$=Ro(w)?w:Jr[w],C=xl.modifier||S,L=!Po(d),R=!Po(l),j=Io(l),N=j||L&&R,P=g?m+_:_,D=ia(E+P,12);I||!L&&!j||(I=1);let F=g;if($!==Jr.none){h||(h=za(e,o));let t=h._head;for(;t&&!t._isOverridden&&t._absoluteStartTime<=D;)if(F=t,t=t._nextRep,t&&t._absoluteStartTime>=D)for(;t;)Ha(t),t=t._nextRep}if(N?(Aa(j?ya(l[0],e,n,c):d,gl),Aa(j?ya(l[1],e,n,c,bl):l,fl),gl.t===Qr.NUMBER&&(F?F._valueType===Qr.UNIT&&(gl.t=Qr.UNIT,gl.u=F._unit):(Aa(wa(e,o,r,ml),Oa),Oa.t===Qr.UNIT&&(gl.t=Qr.UNIT,gl.u=Oa.u)))):(R?Aa(l,fl):g?Sa(g,fl):Aa(i&&F&&F.parent.parent===i?F._value:wa(e,o,r,ml),fl),L?Aa(d,gl):g?Sa(g,gl):Aa(i&&F&&F.parent.parent===i?F._value:wa(e,o,r,ml),gl)),gl.o&&(gl.n=xa(F?F._toNumber:Aa(wa(e,o,r,ml),Oa).n,gl.n,gl.o)),fl.o&&(fl.n=xa(gl.n,fl.n,fl.o)),gl.t!==fl.t)if(gl.t===Qr.COMPLEX||fl.t===Qr.COMPLEX){const t=gl.t===Qr.COMPLEX?gl:fl,e=gl.t===Qr.COMPLEX?fl:gl;e.t=Qr.COMPLEX,e.s=oa(t.s),e.d=t.d.map(()=>e.n)}else if(gl.t===Qr.UNIT||fl.t===Qr.UNIT){const t=gl.t===Qr.UNIT?gl:fl,e=gl.t===Qr.UNIT?fl:gl;e.t=Qr.UNIT,e.u=t.u}else if(gl.t===Qr.COLOR||fl.t===Qr.COLOR){const t=gl.t===Qr.COLOR?gl:fl,e=gl.t===Qr.COLOR?fl:gl;e.t=Qr.COLOR,e.s=t.s,e.d=[0,0,0,1]}if(gl.u!==fl.u){let t=fl.u?gl:fl;t=il(e,t,fl.u?fl.u:gl.u,!1)}if(fl.d&&gl.d&&fl.d.length!==gl.d.length){const t=gl.d.length>fl.d.length?gl:fl,e=t===gl?fl:gl;e.d=t.d.map((t,i)=>Po(e.d[i])?0:e.d[i]),e.s=oa(t.s)}const B=ia(+v||no,12);let M=ml[o];Do(M)||(ml[o]=null);const q={parent:this,id:kl++,property:o,target:e,_value:null,_func:bl.func,_ease:hl(y),_fromNumbers:oa(gl.d),_toNumbers:oa(fl.d),_strings:oa(fl.s),_fromNumber:gl.n,_toNumber:fl.n,_numbers:oa(gl.d),_number:gl.n,_unit:fl.u,_modifier:C,_currentTime:0,_startTime:P,_delay:+_,_updateDuration:B,_changeDuration:B,_absoluteStartTime:D,_tweenType:r,_valueType:fl.t,_composition:$,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:M,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};$!==Jr.none&&Va(q,h),isNaN(f)&&(f=q._startTime),m=ia(P+B,12),g=q,T++,da(this,q)}(isNaN(C)||f<C)&&(C=f),(isNaN($)||m>$)&&($=m),r===Yr.TRANSFORM&&(p=T-b,u=T)}if(!isNaN(p)){let t=0;la(this,e=>{t>=p&&t<u&&(e._renderTransforms=1,e._composition===Jr.blend&&la(Ra.animation,t=>{t.id===e.id&&(t._renderTransforms=1)})),t++})}}l||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),C?(la(this,t=>{t._startTime-t._delay||(t._delay-=C),t._startTime-=C}),$-=C):C=0,$||($=no,this.iterationCount=0),this.targets=a,this.duration=$===no?no:sa(($+this._loopDelay)*this.iterationCount-this._loopDelay)||no,this.onRender=b||y.onRender,this._ease=_,this._delay=C,this.iterationDuration=$,!this._autoplay&&I&&this.onRender(this)}stretch(t){const e=this.duration;if(e===ra(t))return this;const i=t/e;return la(this,t=>{t._updateDuration=ra(t._updateDuration*i),t._changeDuration=ra(t._changeDuration*i),t._currentTime*=i,t._startTime*=i,t._absoluteStartTime*=i}),super.stretch(t)}refresh(){return la(this,t=>{const e=t._func;if(e){const i=wa(t.target,t.property,t._tweenType);Aa(i,Oa),Aa(e(),fl),t._fromNumbers=oa(Oa.d),t._fromNumber=Oa.n,t._toNumbers=oa(fl.d),t._strings=oa(fl.s),t._toNumber=fl.o?xa(Oa.n,fl.n,fl.o):fl.n}}),this.duration===no&&this.restart(),this}revert(){return super.revert(),Ia(this)}then(t){return super.then(t)}}const Ol=(t,e)=>new Sl(t,e,null,0,!1).init();class El extends(m(s(n))){static get properties(){return Object.assign({src:{type:String},odd:{type:String},view:{type:String},fill:{type:Number},nodeId:{type:String,attribute:"node-id"},xmlId:{type:Array,attribute:"xml-id"},xpath:{type:String},map:{type:String},onUpdate:{type:Boolean,attribute:"on-update"},notFound:{type:String,attribute:"not-found"},url:{type:String},static:{type:String},appendFootnotes:{type:Boolean,attribute:"append-footnotes"},suppressHighlight:{type:Boolean,attribute:"suppress-highlight"},columnSeparator:{type:String,attribute:"column-separator"},direction:{type:String},loadCss:{type:String,attribute:"load-css"},fixLinks:{type:Boolean,attribute:"fix-links"},useLanguage:{type:Boolean,attribute:"use-language"},animation:{type:Boolean},infiniteScroll:{type:Boolean,attribute:"infinite-scroll"},infiniteScrollMax:{type:Number,attribute:"infinite-scroll-max"},waitFor:{type:String,attribute:"wait-for"},disableHistory:{type:Boolean,attribute:"disable-history"},readOnlyRegistry:{type:Boolean,attribute:"read-only-registry"},beforeUpdate:{type:String,attribute:"before-update-event"},noScroll:{type:Boolean,attribute:"no-scroll"},_features:{type:Object},_content:{type:Node,attribute:!1},_column1:{type:Node,attribute:!1},_column2:{type:Node,attribute:!1},_footnotes:{type:Node,attribute:!1},_style:{type:Node,attribute:!1},_additionalParams:{type:Object}},super.properties)}constructor(){super(),this.src=null,this.url=null,this.readOnlyRegistry=!1,this._registryInitialized=!1,this.onUpdate=!1,this.appendFootnotes=!1,this.notFound=null,this.animation=!1,this.direction="ltr",this.suppressHighlight=!1,this.highlight=!1,this.infiniteScrollMax=10,this.disableHistory=!1,this.beforeUpdate=null,this.noScroll=!1,this._features={},this._additionalParams={},this._selector={},this._chunks=[],this._scrollTarget=null,this._loading=!1,this._lastRequestKey=null,this.static=null,this._refreshDebounceTimer=null,this._pendingRefreshEvent=null,this._hasLoadedOnce=!1,this._lastLoadedId=null}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"src"===t)this._updateSource(i,e)}connectedCallback(){if(super.connectedCallback(),this.loadCss&&r("pb-page-ready",async()=>{const t=await b([this.toAbsoluteURL(this.loadCss)]);t&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,t])}),this.infiniteScroll&&(this.columnSeparator=null,this.animation=!1,this._content=document.createElement("div"),this._content.className="infinite-content"),!this.disableHistory){v.state.id&&!this.xmlId&&(this.xmlId=v.state.id),v.state.action&&"search"===v.state.action&&(this.highlight=!0),"single"===this.view?this.nodeId=null:v.state.root&&!this.nodeId&&(this.nodeId=v.state.root);const t=this.readOnlyRegistry||this.hasAttribute("read-only-registry");if(this._registryInitialized||t)t&&g.log("[pb-view] connectedCallback: Skipping registry.replace (read-only-registry is set)",{readOnlyRegistry:this.readOnlyRegistry,hasAttribute:this.hasAttribute("read-only-registry"),isReadOnly:t,_registryInitialized:this._registryInitialized});else{const e=this.getDocument?this.getDocument():null,i={id:this.xmlId,view:this.getView(),odd:this.getOdd(),path:e?e.path:void 0};"single"!==this.view&&(i.root=this.nodeId),this.fill&&(i.fill=this.fill),g.warn("[pb-view] connectedCallback: Calling registry.replace (read-only-registry not set)",{readOnlyRegistry:this.readOnlyRegistry,hasAttribute:this.hasAttribute("read-only-registry"),isReadOnly:t,_registryInitialized:this._registryInitialized,newState:i}),v.replace(this,i),this._registryInitialized=!0}v.subscribe(this,t=>{this._setState(t),this._refresh(null)})}this.waitFor||(this.waitFor="pb-toggle-feature,pb-select-feature,pb-navigation"),this.subscribeTo("pb-navigate",t=>{t.detail.source&&t.detail.source===this||this.navigate(t.detail.direction)}),this.subscribeTo("pb-toggle",t=>{this.toggleFeature(t)}),this.subscribeTo("pb-i18n-update",t=>{const e=this._features.language&&this._features.language!==t.detail.language;this._features.language=t.detail.language,this.useLanguage&&e&&(this._setState(v.getState(this)),this._refresh())},[]),this.signalReady(),this.onUpdate&&this.subscribeTo("pb-update",t=>{this._refresh(t)})}disconnectedCallback(){super.disconnectedCallback(),this._scrollObserver&&this._scrollObserver.disconnect();this.readOnlyRegistry||this.hasAttribute("read-only-registry")||(this._registryInitialized=!1)}firstUpdated(){super.firstUpdated(),this.enableScrollbar(!0),this.infiniteScroll&&(this._topObserver=this.shadowRoot.getElementById("top-observer"),this._bottomObserver=this.shadowRoot.getElementById("bottom-observer"),this._bottomObserver.style.display="none",this._topObserver.style.display="none",this._scrollObserver=new IntersectionObserver(t=>{this._content&&t.forEach(t=>{if(t.isIntersecting)if("bottom-observer"===t.target.id){const t=this._content.lastElementChild;if(t){const e=t.getAttribute("data-next");e&&!this._content.querySelector(`[data-root="${e}"]`)&&(this._checkChunks("forward"),this._load(e,"forward"))}}else{const t=this._content.firstElementChild;if(t){const e=t.getAttribute("data-previous");e&&!this._content.querySelector(`[data-root="${e}"]`)&&(this._checkChunks("backward"),this._load(e,"backward"))}}})})),this.onUpdate||r("pb-page-ready",t=>{t&&t.language&&(this._features.language=t.language),this.wait(()=>{this.disableHistory||this._setState(v.state),this._refresh()})}),this.subscribeTo("pb-refresh",t=>{this._refresh(t)})}getOdd(){try{return this.odd||this.getDocument().odd||"teipublisher"}catch{return this.odd||"teipublisher"}}getView(){try{return this.view||this.getDocument().view||"single"}catch{return this.view||"single"}}forceUpdate(){this._load(this.nodeId)}animate(){this.animation&&("forward"===this.lastDirection?Ol(this.shadowRoot.getElementById("view"),{opacity:[0,1],translateX:[1e3,0],duration:300,ease:"linear"}):Ol(this.shadowRoot.getElementById("view"),{opacity:[0,1],translateX:[-1e3,0],duration:300,ease:"linear"}))}enableScrollbar(t){t?this.classList.add("noscroll"):this.classList.remove("noscroll")}_refresh(t){this._pendingRefreshEvent=t,this._refreshDebounceTimer&&clearTimeout(this._refreshDebounceTimer),this._refreshDebounceTimer=setTimeout(()=>{this._doRefresh(this._pendingRefreshEvent),this._pendingRefreshEvent=null,this._refreshDebounceTimer=null},150)}_doRefresh(t){var e;const i=v.getState(this),n=t&&t.detail?t.detail:{},s=Object.assign(Object.assign({},n),i);let r=null;const o=this.querySelector&&this.querySelector('pb-param[name="mode"]');o&&(r=o.getAttribute("value")),!r&&this._additionalParams&&(r=this._additionalParams.mode||this._additionalParams["user.mode"]);const a="metadata-panel"===r||this.xpath&&"single"===this.view&&!this.nodeId;if(this.xpath&&!s.xpath&&this._hasLoadedOnce)return;if(a&&this._hasLoadedOnce){const t=s.id&&/\.jpg$|_\d{2,3}\.jpg/.test(String(s.id));if(s.root||s.id&&!t||s.position)return}let l=s;if(a&&s.id){/\.jpg$|_\d{2,3}\.jpg/.test(String(s.id))&&(l=Object.assign({},s),delete l.id)}const c=l;if(c.hash&&!this.noScroll&&!(c.id||c.path||c.odd||c.view||c.position)){this._scrollTarget=c.hash;const t=this.shadowRoot.getElementById(this._scrollTarget);return void(t&&setTimeout(()=>t.scrollIntoView({block:"nearest"})))}const d=this.xmlId,p=this.nodeId,u=this.getDocument&&(null===(e=this.getDocument())||void 0===e?void 0:e.path)||null,h=this._additionalParams&&this._additionalParams.id?this._additionalParams.id:null,g=this._features&&this._features.id?this._features.id:null,f=this._lastLoadedId,m=h&&h!==f&&null!==f||g&&g!==f&&null!==f,b=t&&t.detail&&t.detail.path?t.detail.path:null,y=t&&t.detail&&t.detail.odd?t.detail.odd:null,_=b||c.path,w=y||c.odd;if(_){const t=this.getDocument();t&&(t.path=_)}const x=_,k=w,A=t&&t.detail&&t.detail.id?t.detail.id:null,S=this._additionalParams&&this._additionalParams.id?this._additionalParams.id:null,O=this._features&&this._features.id?this._features.id:null,E=A||(void 0!==c.id?c.id:null)||S||O;if(E){/\.jpg$|_\d{2,3}\.jpg/.test(String(E))?(this._additionalParams=this._additionalParams||{},this._additionalParams.id=E):this.xmlId=E}this.odd=w||this.odd,void 0!==c.columnSeparator&&(this.columnSeparator=c.columnSeparator),this.view=c.view||this.getView(),this.fill=c.fill||this.fill,c.xpath&&(this.xpath=c.xpath,this.nodeId=null);let $=this.nodeId;$=null===c.root?null:(void 0!==c.position?c.position:c.root)||this.nodeId;const C=$!==p,T=t&&t.detail&&t.detail.id?t.detail.id:null,I=this._additionalParams&&this._additionalParams.id?this._additionalParams.id:null,L=this._features&&this._features.id?this._features.id:null,R=T||(void 0!==c.id?c.id:null)||I||L||this.xmlId,j=R&&(R!==d||R!==f&&null!==f||m||null===f&&R),N=x&&x!==u,P=this.odd,D=k&&k!==P,F=t&&t.detail&&t.detail.id,B=this._lastLoadedId,M=F&&(null===B||t.detail.id!==B||d&&t.detail.id!==d);if(!C&&!j&&!N&&!D&&!M&&this._hasLoadedOnce)return v.pathParams.forEach(t=>{void 0!==c[t]&&(this._additionalParams[t]=c[t])}),this.noScroll||(this._scrollTarget=c.hash),void this._updateStyles();this.nodeId=$,s.id||this.xmlId,v.pathParams.forEach(t=>{void 0!==c[t]&&(this._additionalParams[t]=c[t])}),this.noScroll||(this._scrollTarget=c.hash),this._updateStyles(),this.infiniteScroll&&this._clear(),this._load(this.nodeId)}_load(t,e){const i=this.getDocument?this.getDocument():null;if(!i||!i.path)return void g.warn("<pb-view> No path");if(this._loading&&this._lastRequestKey){const e=this.getParameters(t),n=JSON.stringify({url:this.url||"",doc:i.path,params:e});if(this._lastRequestKey===n)return;const s=this.shadowRoot.getElementById("loadContent");s&&s.abort(),this._lastRequestKey=null,this._loading=!1}this._loading=!0;const n=this.getParameters(t);e&&(n._dir=e),this._doLoad(n)}async _doLoad(t){const e=this.getDocument&&this.getDocument()?this.getDocument().path:"",i=JSON.stringify({url:this.url||"",doc:e,params:t});if(this._lastRequestKey===i)return void(this._loading=!1);this._lastRequestKey=i,this.emitTo("pb-start-update",t),this.infiniteScroll||this._clear(),this._scrollObserver&&(this._bottomObserver&&this._scrollObserver.unobserve(this._bottomObserver),this._topObserver&&this._scrollObserver.unobserve(this._topObserver));const n=this.shadowRoot.getElementById("loadContent");if(null!==this.static){try{const e=await this._staticUrl(t);n.url=e,n.generateRequest().catch(()=>{})}catch(t){g.error("[pb-view] _doLoad: failed to get static URL",t)}return}this.url||(this.minApiVersion("1.0.0")?this.url="api/parts":this.url="modules/lib/components.xql");let s=`${this.getEndpoint()}/${this.url}`;if(this.minApiVersion("1.0.0")){const t=this.getDocument();if(!t||!t.path)return void g.warn("<pb-view> No document path available for URL construction");s+=`/${encodeURIComponent(t.path)}/json`}n.url=s,n.params=t,n.generateRequest().catch(t=>{g.error("[pb-view] _doLoad: request failed",t)})}async _staticUrl(t){function e(e){const i=[];return e.sort().forEach(e=>{t.hasOwnProperty(e)&&i.push(`${e}=${t[e]}`)}),i.join("&")}const i=this.static?this.static.replace(/\/$/,""):".",n=new URL(`${i}/`,window.location.href),s=new URL("index.json",n).href,r=await fetch(s),o=await r.json(),a=["odd","view","xpath","map"];this.querySelectorAll("pb-param").forEach(t=>a.push(`user.${t.getAttribute("name")}`));let l=t.id?e([...a,"id"]):e([...a,"root"]),c=o[l];if(c||(l=e(a),c=o[l]),!c){g.warn("<pb-view> No static mapping found for %s",l);const t=Object.values(o)[0];if(!t)return n.href;c=t}return new URL(c,n).href}_clear(){this.infiniteScroll?(this._content=document.createElement("div"),this._content.className="infinite-content"):this._content=null,this._column1=null,this._column2=null,this._footnotes=null,this._chunks=[]}async _handleError(){this._clear(),this._loading=!1;const t=this.shadowRoot.getElementById("loadContent");let e;g.error("<pb-view> Error details:",t.lastError);const{response:i}=t.lastError;let n;e=i?i.description:'<pb-i18n key="dialogs.serverError"></pb-i18n>',n=null!=this.notFound?`<p>${this.notFound}</p>`:`<p><pb-i18n key="dialogs.serverError"></pb-i18n>: ${e} </p>`,await this._replaceContent({content:n}),this.emitTo("pb-end-update")}async _handleContent(){const t=this.shadowRoot.getElementById("loadContent"),e=t.lastResponse;if(!e)return this._loading=!1,void g.error("<pb-view> No response received");if(e.error)return g.error("<pb-view> Response has error:",e.error),null!=this.notFound&&(this._content=this.notFound),this.emitTo("pb-end-update",null),void(this._loading=!1);if(await this._replaceContent(e,t.params._dir),this.animate(),this._scrollTarget){await this.updateComplete;const t=this.shadowRoot.getElementById(this._scrollTarget)||this.shadowRoot.querySelector(`[node-id="${this._scrollTarget}"]`);t&&window.requestAnimationFrame(()=>setTimeout(()=>{t.scrollIntoView({block:"nearest"})},400)),this._scrollTarget=null}this.next=e.next,this.nextId=e.nextId,this.previous=e.previous,this.previousId=e.previousId,this.nodeId=e.root,this.switchView=e.switchView,await this.updateComplete;const i=this.shadowRoot.getElementById("view");this._applyToggles(i),this._fixLinks(i),bn(i);const n={data:e,root:i,params:t.params,id:this.xmlId,position:this.nodeId};this.emitTo("pb-update",n),this._scroll(),this.emitTo("pb-end-update",null),this._loading=!1,this._hasLoadedOnce=!0,this.xmlId&&(this._lastLoadedId=this.xmlId)}async _replaceContent(t,e){const i=document.createDocumentFragment(),n=document.createElement("div");i.appendChild(n),n.innerHTML=w(t.content),this.beforeUpdate?this.emitTo(this.beforeUpdate,{data:t,root:n,render:async i=>{await this._doReplaceContent(i,t,e)}}):await this._doReplaceContent(n,t,e)}async _doReplaceContent(t,e,i){if(this.columnSeparator)this._replaceColumns(t),this._loading=!1;else if(this.infiniteScroll){let n;if(t.className="scroll-fragment",t.setAttribute("data-root",e.root),e.next&&t.setAttribute("data-next",e.next),e.previous&&t.setAttribute("data-previous",e.previous),"backward"===i)n=this._content.firstElementChild,this._chunks.unshift(t),this._content.insertBefore(t,n),await this.updateComplete,n.scrollIntoView(!0),this._loading=!1,this._checkVisibility(),this._scrollObserver.observe(this._bottomObserver),this._scrollObserver.observe(this._topObserver);else this._chunks.push(t),this._content.appendChild(t),await this.updateComplete,this._loading=!1,this._checkVisibility(),this._scrollObserver.observe(this._bottomObserver),this._scrollObserver.observe(this._topObserver)}else this._content=t,this._loading=!1;if(this.appendFootnotes){const t=document.createElement("div");e.footnotes&&(t.innerHTML=w(e.footnotes)),this._footnotes=t}return this._initFootnotes(this._footnotes),t}_checkVisibility(){const t=this._chunks[this._chunks.length-1].hasAttribute("data-next");this._bottomObserver.style.display=t?"":"none";const e=this._chunks[0].hasAttribute("data-previous");this._topObserver.style.display=e?"":"none"}_replaceColumns(t){let e;if(this.columnSeparator){const i=t.querySelectorAll(this.columnSeparator);i.length>1&&(e=i[i.length-1])}if(e){const i=this._getFragmentBefore(t,e),n=this._getFragmentAfter(t,e);"ltr"===this.direction?(this._column1=i,this._column2=n):(this._column2=i,this._column1=n)}else this._content=t}_scroll(){if(!this.noScroll&&v.hash){const t=this.shadowRoot.getElementById(v.hash.substring(1));t&&window.requestAnimationFrame(()=>setTimeout(()=>{t.scrollIntoView({block:"center",inline:"nearest"})},400))}}_scrollToElement(t,e){const i=this.shadowRoot.getElementById(e.hash.substring(1));i&&(t.preventDefault(),i.scrollIntoView({block:"center",inline:"nearest"}))}_updateStyles(){const t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),null!==this.static?t.setAttribute("href",`${this.static}/css/${this.getOdd()}.css`):t.setAttribute("href",`${this.getEndpoint()}/transform/${this.getOdd()}.css`),this._style=t}_fixLinks(t){if(this.fixLinks){const e=this.getDocument?this.getDocument():null,i=this.toAbsoluteURL(e&&e.path?e.path:"");t.querySelectorAll("img").forEach(t=>{const e=t.getAttribute("src"),n=new URL(e,i);t.src=n.href}),t.querySelectorAll("a").forEach(t=>{const e=t.getAttribute("href");if(e===t.hash)t.addEventListener("click",e=>this._scrollToElement(e,t));else{const n=new URL(e,i);t.href=n.href}})}else t.querySelectorAll("a").forEach(t=>{t.getAttribute("href")===t.hash&&t.addEventListener("click",e=>this._scrollToElement(e,t))})}_initFootnotes(t){t&&t.querySelectorAll(".note, .fn-back").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const i=this.shadowRoot.getElementById("content").querySelector(t.hash);i&&i.scrollIntoView()})})}_getParameters(){const t={};this.querySelectorAll("pb-param").forEach(e=>{const i=e.getAttribute("name"),n=e.getAttribute("value");if("id"===i){if(/\.jpg$|_\d{2,3}\.jpg/.test(String(n))){const t=this.querySelector('pb-param[name="mode"]');if(t&&"metadata-panel"===t.getAttribute("value"))return}}t[`user.${i}`]=n});for(const[e,i]of Object.entries(this._features)){if("id"===e){if(/\.jpg$|_\d{2,3}\.jpg/.test(String(i))){const t=this.querySelector('pb-param[name="mode"]');if(t&&"metadata-panel"===t.getAttribute("value"))continue}}t[`user.${e}`]=i}if(this._additionalParams)for(const[e,i]of Object.entries(this._additionalParams)){if("id"===e||"user.id"===e){if(/\.jpg$|_\d{2,3}\.jpg/.test(String(i))){const t=this.querySelector('pb-param[name="mode"]');if(t&&"metadata-panel"===t.getAttribute("value"))continue}}t[e]=i}return t}getParameters(t){t=t||this.nodeId;const e=this.getDocument?this.getDocument():null,i=this._getParameters();!this.minApiVersion("1.0.0")&&e&&e.path&&(i.doc=e.path),i.odd=`${this.getOdd()}.odd`;const n=this.querySelector('pb-param[name="mode"]'),s=n&&"metadata-panel"===n.getAttribute("value");if(i.view=s?"single":this.getView(),this.fill&&(i.fill=this.fill),t&&!s&&(i.root=t),this.xpath&&(i.xpath=this.xpath),this._additionalParams&&this._additionalParams.id){const t=this.querySelector('pb-param[name="mode"]');if(t&&"metadata-panel"===t.getAttribute("value")){/\.jpg$|_\d{2,3}\.jpg/.test(String(this._additionalParams.id))||(i.id=this._additionalParams.id)}else i.id=this._additionalParams.id}else if(this.xmlId){const t=this.querySelector('pb-param[name="mode"]');if(t&&"metadata-panel"===t.getAttribute("value")){/\.jpg$|_\d{2,3}\.jpg/.test(String(this.xmlId))||(i.id=this.xmlId)}else i.id=this.xmlId}return!this.suppressHighlight&&this.highlight&&(i.highlight="yes"),this.map&&(i.map=this.map),i}_applyToggles(t){for(const[e,i]of Object.entries(this._selector))t.querySelectorAll(e).forEach(t=>{const e=i.command||"toggle";t.command&&t.command(e,i.state),i.state?t.classList.add(e):t.classList.remove(e)})}goto(t){this._load(t)}gotoId(t){this.xmlId=t,this._load()}navigate(t){if("single"!==this.getView())if(this.lastDirection=t,"backward"===t){if(this.previous){const e=this.readOnlyRegistry||this.hasAttribute("read-only-registry");this.disableHistory||this.map||e||v.commit(this,{id:this.previousId||null,root:this.previousId?null:this.previous}),this.xmlId=this.previousId,this._load(this.xmlId?null:this.previous,t)}}else if(this.next){const e=this.readOnlyRegistry||this.hasAttribute("read-only-registry");this.disableHistory||this.map||e||v.commit(this,{id:this.nextId||null,root:this.nextId?null:this.next}),this.xmlId=this.nextId,this._load(this.xmlId?null:this.next,t)}}_checkChunks(t){if(this.infiniteScroll&&0!==this.infiniteScrollMax){if(this._chunks.length===this.infiniteScrollMax)if("forward"===t)this._content.removeChild(this._chunks.shift());else this._content.removeChild(this._chunks.pop());this.emitTo("pb-navigate",{direction:t,source:this})}}toggleFeature(t){const e=v.getState(this);if(e&&this._setState(e),t.detail.refresh)this._updateStyles(),this._load();else{const t=this.shadowRoot.getElementById("view");this._applyToggles(t)}this.readOnlyRegistry||this.hasAttribute("read-only-registry")||v.commit(this,e)}_setState(t){for(const[e,i]of Object.entries(t))if(v.pathParams.has(e))this._additionalParams[e]=i;else switch(e){case"odd":case"view":case"columnSeparator":case"xpath":case"nodeId":case"path":case"root":break;default:this._features[e]=i}if(t.odd&&!this.getAttribute("odd")&&(this.odd=t.odd),t.view&&!this.getAttribute("view")&&(this.view=t.view,"single"===this.view?this.nodeId=null:this.nodeId=this.switchView),t.fill&&!this.getAttribute("fill")&&(this.fill=t.fill),t.xpath&&!this.getAttribute("xpath")&&(this.xpath=t.xpath),t.hasOwnProperty("columnSeparator")&&(this.columnSeparator=t.columnSeparator),this.xmlId=!this.getAttribute("xml-id")&&t.id||this.xmlId,this.nodeId=!this.getAttribute("xml-id")&&t.root||null,t.path){const e=this.getDocument?this.getDocument():null;e&&(e.path=t.path)}t.selectors&&t.selectors.forEach(t=>{this._selector[t.selector]={state:t.state,command:t.command||"toggle"}})}_getFragmentBefore(t,e){const i=document.createRange();return i.setStartBefore(t),i.setEndBefore(e),i.cloneContents()}_getFragmentAfter(t,e){const i=document.createRange();return i.setStartBefore(e),i.setEndAfter(t),i.cloneContents()}_updateSource(t,e){void 0!==e&&t!==e&&(this.xpath=null,this.odd=null,this.xmlId=null,this.nodeId=null)}static get styles(){return e`
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
      `]}}customElements.define("pb-view",El);const $l=[0,100],Cl=[0,100],Tl=t=>`${1===t.length?"0":""}${t}`,Il=(t,e,i)=>Math.max(Math.min(t,i),e),Ll=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,Rl=(t,e,i)=>{const n=Ll(t,e);for(let s=0;s<(null==i?void 0:i.length);s++){const r=i[s];if(2===(null==r?void 0:r.length)&&n>=r[0]&&n<=r[1])return Rl(t,e,i)}return n},jl=t=>{const e=t.length;let i=0;for(let n=0;n<e;n++)i=(i<<5)-i+t.charCodeAt(n),i&=i;return i},Nl=(t,e)=>"number"==typeof e?e:t%Math.abs(e[1]-e[0])+e[0],Pl=(t,e)=>"number"==typeof t?Il(Math.abs(t),...e):1===t.length||t[0]===t[1]?Il(Math.abs(t[0]),...e):[Math.abs(Il(t[0],...e)),Il(Math.abs(t[1]),...e)],Dl=(t,e,i)=>(i<0?i+=1:i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t),Fl=(t,e,i)=>{let n,s,r;if(t/=360,i/=100,0===(e/=100))n=s=r=i;else{const o=i<.5?i*(1+e):i+e-i*e,a=2*i-o;n=Dl(a,o,t+1/3),s=Dl(a,o,t),r=Dl(a,o,t-1/3)}return[Math.round(255*n),Math.round(255*s),Math.round(255*r)]},Bl=(t,e,i,n)=>(299*t+587*e+114*i)/1e3>=n,Ml=(t,e,i)=>`hsl(${t}, ${e}%, ${i}%)`,ql=(t,e,i,n)=>"rgb"===n?`rgb(${t}, ${e}, ${i})`:`#${Tl(t.toString(16))}${Tl(e.toString(16))}${Tl(i.toString(16))}`,zl=(t,{format:e="hex",saturation:i=[50,55],lightness:n=[50,60],differencePoint:s=130}={})=>{const r=Math.abs(jl(String(t))),o=Nl(r,[0,360]),a=Nl(r,Pl(i,$l)),l=Nl(r,Pl(n,Cl)),[c,d,p]=Fl(o,a,l);return{color:"hsl"===e?Ml(o,a,l):ql(c,d,p,e),isLight:Bl(c,d,p,s)}};function Ul(t,e){let i=t;for(;i.parentNode!==e;)i=i.parentElement;return i}function Hl(t){let e=t;e.nodeType===Node.TEXT_NODE&&(e=e.parentNode);const i=e.getAttribute("href");return i&&/^#fn_.*$/.test(i)}function Vl(t,e,i){const n=document.createTreeWalker(t);for(n.currentNode=e;n.previousNode();){const t=n.currentNode;t.nodeType===Node.ELEMENT_NODE||Hl(t)||(i+=t.textContent.length)}return i}function Wl(t,e,i="start"){if(t.nodeType===Node.ELEMENT_NODE){const n=t.closest("[data-tei]");if(0===e)return{parent:n.getAttribute("data-tei"),offset:0};const s=n.childNodes[e];return{parent:n.getAttribute("data-tei"),offset:"end"===i?Vl(n,s,0)-1:Vl(n,s,0)}}const n=t.parentNode.closest("[data-tei]");if(n)return{parent:n.getAttribute("data-tei"),offset:Vl(n,t,e)};g.error("No container with data-tei found for %o",t.parentNode)}function Gl(t,e){let i=0,n=t.parentNode;for(;n&&n!==t.getRootNode();)n.classList.contains(e)&&(i+=1),n=n.parentNode;return i}function Yl(t,e){const i=document.createTreeWalker(t,NodeFilter.SHOW_TEXT);return i.currentNode=e,i.nextNode()?i.currentNode:e}function Ql(t,e){let i=e;const n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT);for(;n.nextNode();)if(!Hl(n.currentNode)&&n.currentNode.textContent.length>0){if(i-n.currentNode.textContent.length<=0)return[n.currentNode,i];i-=n.currentNode.textContent.length}return null}function Kl(t,e,i,n=3){let s=e-1,r=0;for(;s>=0;){if(/[\p{P}\s]/.test(t.charAt(s))){for(;s>1&&/[\p{P}\s]/.test(t.charAt(s-1));)s-=1;if(r+=1,r===n)break}s-=1}let o=i+1;for(r=0;o<t.length;){if(/[\p{P}\s]/.test(t.charAt(o))){for(;o<t.length-1&&/[\p{P}\s]/.test(t.charAt(o+1));)o+=1;if(r+=1,r===n)break}o+=1}return`... ${t.substring(s,e)}<mark>${t.substring(e,i)}</mark>${t.substring(i,o+1)} ...`}function Jl(t){let e=t.parentElement;e.textContent.length<40&&(e=e.parentNode);const i=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);let n=0,s=0;const r=[];for(;i.nextNode();)i.currentNode===t&&(s=n),n+=i.currentNode.textContent.length,r.push(i.currentNode.textContent);return[r.join(""),s]}function Zl(t,e,i){const n=Wl(t,e),s=Wl(t,i,"end"),r=Boolean(n&&s&&n.parent);return{mode:r?"tei":"local",context:r?n.parent:null,start:r?Number(n.offset):e,end:r?Number(s.offset):i,localStart:e,localEnd:i,textNode:t}}function Xl(t,e){var i;const n=document.createRange();if("tei"===e.mode&&e.context){const i=Array.from(t.querySelectorAll(`[data-tei="${e.context}"]`)).filter(t=>null===t.closest("pb-popover")&&"footnote"!==t.getAttribute("rel"))[0];if(i){const t=Ql(i,e.start),s=Ql(i,e.end);if(t&&s)return n.setStart(t[0],t[1]),n.setEnd(s[0],s[1]),n}}if(!e.textNode)return null;const s=(null===(i=e.textNode.textContent)||void 0===i?void 0:i.length)||0,r=Math.max(0,Math.min(e.localStart??0,s)),o=Math.max(r,Math.min(e.localEnd??r,s));return n.setStart(e.textNode,r),n.setEnd(e.textNode,o),n}function tc(t){const e={};return Object.keys(t.properties).forEach(i=>{const n=t.properties[i];n&&n.length>0&&(e[i]=n)}),Object.assign(t,{properties:e})}zl.random=({format:t="hex",saturation:e=[50,55],lightness:i=[50,60],differencePoint:n=130,excludeHue:s}={})=>{e=Pl(e,$l),i=Pl(i,Cl);const r=s?Rl(0,359,s):Ll(0,359),o="number"==typeof e?e:Ll(...e),a="number"==typeof i?i:Ll(...i),[l,c,d]=Fl(r,o,a);return{color:"hsl"===t?Ml(r,o,a):ql(l,c,d,t),isLight:Bl(l,c,d,n)}};class ec extends El{static get properties(){return Object.assign({key:{type:String},keyMap:{type:Object,attribute:"key-map"},caseSensitive:{type:Boolean}},super.properties)}constructor(){super(),this.key="ref",this.keyMap={},this.caseSensitive=!1,this._ranges=[],this._rangesMap=new Map,this._history=[],this._disabled=!1}connectedCallback(){super.connectedCallback(),this.fill=0,this.setAttribute("translate","no");let t=!1;this._inHandler=!1,this._pendingCallback=null;const e=(t=10)=>{this._pendingCallback=setTimeout(()=>{this._selectionChanged()},t)};this._eventHandler=i=>{if("selectionchange"===i.type||this._inHandler)return;if("mousedown"===i.type&&(t=!0),"mouseup"===i.type&&(t=!1),t)return;this._cancelPendingCallback();const n="mouseup"===i.type?10:100;e(n)},this._disconnectedSignal=new AbortController,document.addEventListener("selectionchange",this._eventHandler,{signal:this._disconnectedSignal.signal}),this.shadowRoot.addEventListener("mousedown",this._eventHandler,{signal:this._disconnectedSignal.signal}),this.shadowRoot.addEventListener("mouseup",this._eventHandler,{signal:this._disconnectedSignal.signal}),this.subscribeTo("pb-add-annotation",t=>this.addAnnotation(t.detail)),this.subscribeTo("pb-edit-annotation",this._editAnnotation.bind(this)),this.subscribeTo("pb-refresh",()=>{this._ranges=[],this._rangesMap.clear(),this._currentSelection=null,this._clearMarkers(),this.emitTo("pb-annotations-changed",{ranges:this._ranges,refresh:!0})}),this.addEventListener("pb-disable",()=>{this._disabled=!0},{signal:this._disconnectedSignal.signal}),this.addEventListener("pb-enable",()=>{this._disabled=!1},{signal:this._disconnectedSignal.signal}),this._resizeHandler()}disconnectedCallback(){super.disconnectedCallback(),this._disconnectedSignal.abort()}get annotations(){return this._ranges}set annotations(t){this._ranges=t,this.updateAnnotations(!0),this._markIncompleteAnnotations(),this._initAnnotationColors(),this._annotationStyles()}saveHistory(){this._history.push(JSON.stringify(this._ranges)),this.emitTo("pb-annotations-history",this._history)}getHistory(){return this._history}popHistory(){if(0===this._history.length)return void g.warn("<pb-view-annotate> history is empty");this._scrollTop=this.scrollTop;const t=this._history.pop();this._clearMarkers(),this._ranges=JSON.parse(t),this._rangesMap.clear(),this._refresh(),this.emitTo("pb-annotations-changed",{ranges:this._ranges}),this.emitTo("pb-annotations-history",this._history)}clearHistory(t){this._history=t||[]}firstUpdated(){super.firstUpdated(),this.enableScrollbar(!1),ln(this.shadowRoot,"light-border")}render(){return[...super.render(),t`<div id="marker-layer"></div>`]}zoom(t){super.zoom(t),window.requestAnimationFrame(()=>this.refreshMarkers())}getKey(t){return this.keyMap[t]||this.key}_resizeHandler(){let t=null;const e=()=>{t=setTimeout(()=>{t=null,this.refreshMarkers()},200)};window.addEventListener("resize",()=>{t||this._clearMarkers(),t&&clearTimeout(t),e()})}_refresh(t){super._refresh(t),t&&t.detail&&t.detail.preserveScroll&&(this._scrollTop=this.scrollTop)}async _handleContent(){await super._handleContent(),await this.updateComplete,setTimeout(()=>{this._initAnnotationColors(),this._annotationStyles(),this.updateAnnotations(),this._markIncompleteAnnotations(),this._scrollTop&&(this.scrollTop=this._scrollTop,this._scrollTop=void 0),this.emitTo("pb-annotations-loaded")},300)}_updateAnnotation(t,e=!1,i=!1){const n=this.shadowRoot.getElementById("view"),s=Array.from(n.querySelectorAll(`[data-tei="${t.context}"]`)).filter(t=>null===t.closest("pb-popover")&&"footnote"!==t.getAttribute("rel"))[0];if(!s)return null;const r=document.createRange(),o=Ql(s,t.start),a=Ql(s,t.end);if(!o||!a)return g.error("<pb-view-annotate> Invalid range for %o",s),null;if(g.log("<pb-view-annotate> Range before adjust: %o %o",o,a),o[1]===o[0].textContent.length){const t=Yl(s,o[0]);t===a[0]?(r.setStart(t,0),o[0]=t,o[1]=0):r.setStartBefore(o[0].nextSibling||t)}else o[0]!==a[0]&&0===o[1]?r.setStartBefore(Ul(o[0],s)):r.setStart(o[0],o[1]);o[0]!==a[0]&&a[0].textContent.length-1===a[1]?r.setEndAfter(Ul(a[0],s)):r.setEnd(a[0],a[1]),g.log("<pb-view-annotate> Range: %o",r);const l=document.createElement("span"),c=""===t.properties[this.getKey(t.type)]?"incomplete":"";l.className=`annotation annotation-${t.type} ${t.type} ${c} ${t.before?"before":""}`,l.dataset.type=t.type,l.dataset.annotation=JSON.stringify(t.properties);try{r.surroundContents(l)}catch(t){if(e)return null;throw new Error("An error occurred. The annotation may not be displayed. You should consider saving and reloading the document.")}return this._rangesMap.set(l,t),i||this.refreshMarkers(),l}updateAnnotations(t=!1){this._ranges.forEach(e=>{let i;switch(e.type){case"delete":i=this.shadowRoot.querySelector(`[data-tei="${e.node}"]`),i?this._deleteAnnotation(i):g.error("Annotation %s not found",e.context);break;case"modify":if(i=this.shadowRoot.querySelector(`[data-tei="${e.node}"]`),!i){g.error("<pb-view-annotate> Target node not found for %o",e.node);break}i.dataset.annotation=JSON.stringify(e.properties);break;default:this._updateAnnotation(e,t,!0)}}),window.requestAnimationFrame(()=>this.refreshMarkers())}_getSelection(){return this.shadowRoot.getSelection?this.shadowRoot.getSelection():window.getSelection()}_selectionChanged(){if(this._disabled)return;const t=this._getSelection(),e=this._selectedRange(t);if(e){let i=!1;const n=e.commonAncestorContainer;if(n.nodeType===Node.ELEMENT_NODE){if(e.startContainer.parentElement!==n){const t=Ul(e.startContainer,n);e.setStartBefore(t),i=!0}if(e.endContainer.parentElement!==n){const t=Ul(e.endContainer,n);e.setEndAfter(t),i=!0}}this._markSelection(e),this._currentSelection=e,g.log("<pb-view-annotate> selection: %o",e),i&&setTimeout(()=>{this._inHandler=!0;try{t.removeAllRanges(),t.addRange(e)}finally{this._inHandler=!1}},100),this.emitTo("pb-selection-changed",{hasContent:!0,range:e,selected:t.toString()})}else this._clearSelection(),this.emitTo("pb-selection-changed",{hasContent:!1})}_markSelection(t){const e=this.shadowRoot.getElementById("view").getBoundingClientRect(),i=this.shadowRoot.getElementById("marker-layer");this._clearSelection();const n=t.getClientRects();for(let t=0;t<n.length;t++){const s=n[t],r=document.createElement("div");r.className="selection-marker",r.style.position="absolute",r.style.left=s.left-e.left+"px",r.style.top=s.top-e.top+"px",r.style.width=`${s.width}px`,r.style.height=`${s.height}px`,r.style.backgroundColor="var(--pb-annotation-selection, #f9ea7678)",i.appendChild(r)}}_clearSelection(){const t=this.shadowRoot.getElementById("marker-layer");t.querySelectorAll(".selection-marker").forEach(e=>{t.removeChild(e)})}updateAnnotation(t,e=!1){t=tc(t);const i=this._updateAnnotation(t,e);return i&&(this._ranges.push(t),this.emitTo("pb-annotations-changed",{type:t.type,text:t.text,ranges:this._ranges})),i}addAnnotation(t){const e=t.range||this._currentSelection;if(e.collapsed&&!t.before)return null;const i=Wl(e.startContainer,e.startOffset),n=Wl(e.endContainer,e.endOffset,"end"),s={context:i.parent,start:"after"===t.position?n.offset:i.offset,end:void 0===t||"before"===t.position?i.offset:n.offset,text:t.before?"":e.cloneContents().textContent,before:t.before};return t.type&&(s.type=t.type),t.properties&&(s.properties=t.properties),g.log("<pb-view-annotate> range adjusted: %o",s),this._ranges.push(tc(s)),this.emitTo("pb-annotations-changed",{type:s.type,text:s.text,ranges:this._ranges}),this._checkAnnotationColor(s.type),this._updateAnnotation(s)}deleteAnnotation(t){if(t.dataset.tei){const e=this._ranges.findIndex(e=>"modify"===e.type&&e.node===t.dataset.tei);e>-1&&this._ranges.splice(e,1);const i=t.parentNode.closest("[data-tei]"),n={type:"delete",node:t.dataset.tei,context:i.dataset.tei};this._ranges.push(n)}else{const e=this._rangesMap.get(t);this._rangesMap.delete(t);const i=this._ranges.indexOf(e);g.log("<pb-view-annotate> deleting annotation %o",e),this._ranges.splice(i,1)}this._deleteAnnotation(t)}_deleteAnnotation(t){const e=document.createRange();for(let i=0;i<t.childNodes.length;i++){const n=t.childNodes[i].cloneNode(!0);t.parentNode.insertBefore(n,t),0===i&&e.setStartBefore(n),i===t.childNodes.length-1&&e.setEndAfter(n)}t.parentNode.removeChild(t),this.emitTo("pb-annotations-changed",{ranges:this._ranges}),window.requestAnimationFrame(()=>this.refreshMarkers()),this._inHandler=!0;try{const t=this._getSelection();t.removeAllRanges(),t.addRange(e)}catch(t){g.error("<pb-view-annotate> %s",t.message)}finally{this._inHandler=!1}}editAnnotation(t,e){if(t.dataset.tei){const i=t.closest("[data-tei]");let n=this._ranges.find(e=>"modify"===e.type&&e.node===t.dataset.tei);n||(n={type:"modify",node:t.dataset.tei,context:i.dataset.tei},this._ranges.push(n)),n.properties=e,n=tc(n),this.emitTo("pb-annotations-changed",{ranges:this._ranges})}else{let i=this._rangesMap.get(t);i?(i.properties=e,i=tc(i),this.emitTo("pb-annotations-changed",{ranges:this._ranges})):g.error("no range found for edit span %o",t)}const i=JSON.parse(t.dataset.annotation),n=Object.assign(i||{},e);t.dataset.annotation=JSON.stringify(n),""!==n[this.getKey(t.dataset.type)]&&t.classList.remove("incomplete")}_editAnnotation(t){this.editAnnotation(t.detail.target,t.detail.properties)}_selectedRange(t){if(!t||0===t.rangeCount)return null;if(t.anchorNode.getRootNode()!==this.shadowRoot)return null;const e=t.getRangeAt(0);return e.collapsed?null:e}_cancelPendingCallback(){this._pendingCallback&&(clearTimeout(this._pendingCallback),this._pendingCallback=null)}_createTooltip(t){if(t._tippy||!t.dataset.annotation)return;const e=document.createElement("div");e.className="annotation-popup";const i=document.createElement("div");i.className="info",e.appendChild(i);const n=document.createElement("div");n.className="toolbar";const s=document.createElement("span");if(s.className="annotation-type",n.appendChild(s),t.dataset.annotation){const e=document.createElement("pb-icon-button");e.setAttribute("icon","icons:create"),e.setAttribute("title",h("annotations.edit")),e.addEventListener("click",()=>{const e=JSON.parse(t.dataset.annotation),i=t.textContent;this.emitTo("pb-annotation-edit",{target:t,type:t.dataset.type,properties:e,text:i})}),n.appendChild(e)}const r=document.createElement("pb-icon-button");r.setAttribute("icon","icons:delete"),r.setAttribute("title",h("annotations.delete")),r.addEventListener("click",()=>{this.saveHistory(),this.deleteAnnotation(t)}),n.appendChild(r),e.appendChild(n);const o=this.shadowRoot.getElementById("view");Zi(t,{content:e,allowHTML:!0,interactive:!0,appendTo:o.nodeType===Node.DOCUMENT_NODE?document.body:o,theme:"light-border",hideOnClick:!1,maxWidth:"auto",trigger:"click",placement:"left",popperOptions:{modifiers:[{name:"flip",options:{fallbackPlacements:["right","top","bottom"]}}]},onTrigger:(n,r)=>{r.preventDefault(),r.stopPropagation();const{type:o}=t.dataset,a=JSON.parse(t.dataset.annotation)||{},l=this._annotationColors.get(o);if(s.innerHTML=o,s.style.backgroundColor=`var(--pb-annotation-${o})`,s.style.color=`var(${l&&l.isLight?"--pb-color-primary":"--pb-color-inverse"})`,a[this.getKey(o)])this.emitTo("pb-annotation-detail",{type:o,id:a[this.getKey(o)],container:i,span:t,ready:()=>n.setContent(e)});else{i.innerHTML="";const t=Object.keys(a);if(0===t.length){const t=document.createElement("p");t.innerHTML=h("annotations.no-properties"),i.appendChild(t)}else{const e=document.createElement("table");t.forEach(t=>{const i=document.createElement("tr"),n=document.createElement("td");n.innerHTML=t,i.appendChild(n);const s=document.createElement("td");s.innerHTML=JSON.stringify(a[t],null,2),i.appendChild(s),e.appendChild(i)}),i.appendChild(e)}}},onClickOutside:(t,e)=>{t.hideWithInteractivity(e)}})}_showMarker(t,e,i,n=0){const s=t.getClientRects(),{type:r}=t.dataset;if(!t.classList.contains("before"))for(let t=0;t<s.length;t++){const o=s[t],a=document.createElement("div");a.className=`marker annotation-${r}`,a.style.position="absolute",a.style.left=o.left-i.left+"px",a.style.top=`${o.top-i.top+o.height}px`,a.style.marginTop=`${n}px`,a.style.width=`${o.width}px`,a.style.height="3px",a.style.backgroundColor=`var(--pb-annotation-${r})`,a.part="annotation",e.appendChild(a)}this._createTooltip(t)}_clearMarkers(){this.shadowRoot.getElementById("marker-layer").innerHTML=""}refreshMarkers(){const t=this.shadowRoot.getElementById("view"),e=t.getBoundingClientRect(),i=this.shadowRoot.getElementById("marker-layer");i.style.display="none",this._clearMarkers(),t.querySelectorAll(".annotation").forEach(t=>{t._tippy&&t._tippy.destroy(),this._showMarker(t,i,e,5*Gl(t,"annotation"))}),i.style.display="block"}search(t,e){function i(t){let e=t.replace(/[/.?+*\\]/g,t=>`\\${t}`).replace(/[\s\n\t]+/g,"\\s+");return/^\w/.test(e)&&(e=`\\b${e}`),/\w$/.test(e)&&(e=`${e}\\b`),e}function n(t){return t.nodeType===Node.TEXT_NODE?NodeFilter.FILTER_ACCEPT:t.classList.contains("annotation-popup")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP}n.acceptNode=n;const s=[];if(!e||0===e.length)return s;const r=e.filter(t=>t&&t.length>0).map(t=>i(t)).join("|");g.log(`<pb-view-annotate> Searching content for ${r}...`);const o=new RegExp(r,this.caseSensitive?"g":"gi"),a=document.createTreeWalker(this.shadowRoot.getElementById("view"),NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,n);for(;a.nextNode();){const e=a.currentNode;if(!e.textContent)continue;const i=Array.from(e.textContent.matchAll(o));for(const n of i){var l,c;const i=n.index+n[0].length;let r=!1,o=null;const a=e.parentNode,d=null==a||null===(l=a.dataset)||void 0===l?void 0:l.annotation,p=null==a||null===(c=a.dataset)||void 0===c?void 0:c.type;if(d&&p){r=p===t,o=(JSON.parse(d)||{})[this.getKey(t)]}const u=Zl(e,n.index,i),[h,g]=Jl(e),f={annotated:r,mode:u.mode,context:u.context,start:u.start,end:u.end,localStart:u.localStart,localEnd:u.localEnd,textNode:u.textNode,kwic:Kl(h,g+n.index,g+i)};f[this.getKey(t)]=o,s.push(f)}}return s}scrollTo(t){const e=this.shadowRoot.getElementById("view");let i=null;if(t.annotated?(i=document.createRange(),i.selectNode(t.textNode)):i=Xl(e,t),!i)return;const n=e.getBoundingClientRect(),s=i.getBoundingClientRect();let r=e.querySelector("[part=highlight]");r||(r=document.createElement("div"),r.part="highlight",r.style.position="absolute",e.appendChild(r)),r.style.left=s.left-n.left-4+"px",r.style.top=s.top-n.top-4+"px",r.style.width=`${s.width+4}px`,r.style.height=`${s.height}px`,r.scrollIntoView(!0)}hideMarker(){const t=this.shadowRoot.getElementById("view").querySelector("[part=highlight]");t&&(t.style.top="-1000px")}_markIncompleteAnnotations(){this.shadowRoot.getElementById("view").querySelectorAll(".annotation.authority").forEach(t=>{if(t.dataset.type){const e=JSON.parse(t.dataset.annotation),i=this.getKey(t.dataset.type);e[i]&&0!==e[i].length?t.classList.remove("incomplete"):t.classList.add("incomplete")}})}_initAnnotationColors(){this._annotationColors=new Map;const t=new Set;this.shadowRoot.getElementById("view").querySelectorAll(".annotation").forEach(e=>{e.dataset.type&&t.add(e.dataset.type)}),t.forEach(t=>{this._annotationColors.set(t,zl(`annotation-${t.repeat(4)}`,{saturation:70,lightness:[30,60]}))}),this.emitTo("pb-annotation-colors",{colors:this._annotationColors})}_checkAnnotationColor(t){this._annotationColors.has(t)||(this._annotationColors.set(t,zl(`annotation-${t.repeat(4)}`,{saturation:70,lightness:[30,60]})),this._annotationStyles(),this.emitTo("pb-annotation-colors",{colors:this._annotationColors}))}_annotationStyles(){const t=this.shadowRoot.getElementById("view");let e=t.querySelector("_annotation-styles");e&&e.parentNode.removeChild(e);const i=[],n=[];this._annotationColors.forEach((t,e)=>{i.push(`--pb-annotation-${e}: ${t.color};`),i.push(`--pb-annotation-${e}-border: 2px solid var(--pb-annotation-${e});`),n.push(`\n        .annotation-${e}::after {\n          background-color: var(--pb-annotation-${e});\n          border-color: var(--pb-annotation-${e});\n          color: var(${t.isLight?"--pb-color-primary":"--pb-color-inverse"});\n        }\n        .annotation-${e}.incomplete::after {\n          background: repeating-linear-gradient(\n            315deg,\n            var(--pb-annotation-${e}),\n            var(--pb-annotation-${e}) 5px,\n            var(${t.isLight?"--pb-annotation-stripes-light":"--pb-annotation-stripes-dark"}) 5px,\n            var(${t.isLight?"--pb-annotation-stripes-light":"--pb-annotation-stripes-dark"}) 10px\n          );\n          color: var(${t.isLight?"--pb-color-primary":"--pb-color-inverse"});\n        }\n      `)});const s=`\n      :host {\n        ${i.join("\n")}\n      }\n\n      ${n.join("\n")}\n    `;e=document.createElement("style"),e.className="_annotation-styles",e.innerHTML=s,t.insertBefore(e,t.firstChild)}static get styles(){return[super.styles,e`
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
      `]}}customElements.define("pb-view-annotate",ec);class ic extends(m(s(n))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{direction:{type:String},zoomFactor:{type:Number,reflect:!0,attribute:"zoom-factor"}})}constructor(){super(),this.direction="in",this.zoomFactor=1}connectedCallback(){super.connectedCallback(),this._loadZoomPreference()}_handleClick(t){t.preventDefault(),t.stopPropagation(),this.emitTo("pb-zoom",{direction:this.direction}),this.zoom(this.direction)}zoom(t){const e=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--pb-zoom-factor")||"1"),i=.1,n=.5,s=2;let r="in"===t?Math.min(e+i,s):Math.max(e-i,n);document.documentElement.style.setProperty("--pb-zoom-factor",r.toString()),this.zoomFactor=r,localStorage.setItem("pb-zoom-preference",r.toString())}_loadZoomPreference(){const t=localStorage.getItem("pb-zoom-preference");if(t){const e=parseFloat(t);isNaN(e)||(document.documentElement.style.setProperty("--pb-zoom-factor",e.toString()),this.zoomFactor=e)}}render(){return t`
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
    `}static get styles(){return e`
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
    `}}customElements.define("pb-zoom",ic);class nc extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{toggle:{type:String},opened:{type:Boolean,reflect:!0},maxWidth:{type:String,attribute:"max-width"},position:{type:String,reflect:!0}})}constructor(){super(),this.opened=!1,this.position="left"}connectedCallback(){super.connectedCallback();const t=this.toggle?document.getElementById(this.toggle):null;t&&t.addEventListener("click",this._toggle.bind(this)),document.body.addEventListener("click",()=>{this.opened&&(this.opened=!1)}),this.addEventListener("click",t=>t.stopPropagation()),this.subscribeTo("pb-refresh",this._close.bind(this))}firstUpdated(){this.maxWidth?(void 0!==window.visualViewport?window.visualViewport.addEventListener("resize",()=>{this._handleResize()}):window.addEventListener("resize",()=>{this._handleResize()}),this._handleResize()):this.classList.add("overlay")}_handleResize(){const t=document.getElementById(this.toggle),e=`(max-width: ${this.maxWidth})`;window.matchMedia(e).matches?(g.log("<pb-drawer> entering overlay mode"),this.classList.add("overlay"),t&&(t.style.display="")):(g.log("<pb-drawer> leaving overlay mode"),this.classList.remove("overlay"),t&&(t.style.display="none"))}_toggle(t){t&&(t.preventDefault(),t.stopPropagation()),this.opened?this.opened=!1:(this.opened=!0,this.emitTo("pb-load"))}_close(){this.opened=!1}render(){return t` <div part="content"><slot></slot></div> `}static get styles(){return e`
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
    `}}customElements.define("pb-drawer",nc);class sc extends n{static get properties(){return Object.assign(Object.assign({},super.properties),{},{query:{type:String},match:{type:Boolean,reflect:!0}})}constructor(){super(),this.query="(max-width:460px)",this.match=!1}firstUpdated(){void 0!==window.visualViewport?window.visualViewport.addEventListener("resize",()=>{this._handleResize()}):window.addEventListener("resize",()=>{this._handleResize()}),this._handleResize()}_handleResize(){let{query:t}=this;/\(.*\)$/.test(t)||(t=`(${t})`),window.matchMedia(t).matches?!1===this.match&&(this.dispatchEvent(new CustomEvent("changed",{detail:{value:!0},composed:!0,bubbles:!0})),this.match=!0):!0===this.match&&(this.dispatchEvent(new CustomEvent("changed",{detail:{value:!1},composed:!0,bubbles:!0})),this.match=!1)}render(){return t` ${this.match?t`<slot></slot>`:null} `}static get styles(){return e`
      :host {
        display: inherit;
      }
    `}}customElements.define("pb-media-query",sc);class rc extends vn{constructor(){super(),this._autoSubmitTargets=new WeakSet}firstUpdated(){const t=this.shadowRoot&&this.shadowRoot.getElementById("form");t&&t.addEventListener("submit",t=>{t.preventDefault(),this._submit()}),this.addEventListener("click",t=>{"searchButtonTop"===t.target.slot&&this.submit(),"searchButtonBottom"===t.target.slot&&this.submit(),"resetButton"===t.target.slot&&this._reset()}),this._submissionHandlers()}render(){return t`
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
    `}static get styles(){return e`
      :host {
        display: block;
      }
    `}submit(){const t=this.shadowRoot&&this.shadowRoot.getElementById("form");t&&(t.requestSubmit?t.requestSubmit():"function"==typeof t.submit&&t.submit())}_submit(){const t=this.serializeForm();this.emitTo("pb-search-resubmit",{params:t}),this.emitTo("pb-submit",{params:t})}_reset(){const t=this.shadowRoot&&this.shadowRoot.getElementById("form");t&&"function"==typeof t.reset&&t.reset()}serializeForm(){const t=this.shadowRoot&&this.shadowRoot.getElementById("form");if(!t)return{};const e=Array.from(t.elements||[]),i=Array.from(this.querySelectorAll("input, select, textarea")),n=[...new Set([...e,...i])].filter(t=>t.name&&!t.disabled&&!t.closest("[disabled]")),s={};n.forEach(t=>{t.name in s||(s[t.name]=null)});const r={};return n.forEach(t=>{if("checkbox"===t.type||"radio"===t.type)t.checked&&(null==r[t.name]?r[t.name]=t.value:Array.isArray(r[t.name])?r[t.name].push(t.value):r[t.name]=[r[t.name],t.value]);else if("select-multiple"===t.type){const e=Array.from(t.selectedOptions).map(t=>t.value);e.length>0&&(r[t.name]=1===e.length?e[0]:e)}else r[t.name]=t.value}),Object.keys(r).forEach(t=>{null!=r[t]&&(s[t]=r[t])}),s}_parseHeaders(t){}_onLoad(t){super._onLoad(t),this.dispatchEvent(new CustomEvent("pb-custom-form-loaded",{detail:t})),this._submissionHandlers()}_handleError(){this.emitTo("pb-end-update");const t=this.shadowRoot.getElementById("loadContent"),{response:e}=t.lastError;if(this.silent)return void g.error("Request failed: %s",e?e.description:"");let i;i=e?e.description:"Server error occurred";const n=this.shadowRoot.getElementById("errorDialog");this.shadowRoot.getElementById("errorMessage").textContent=`Server error: ${i}`,n.openDialog()}_submissionHandlers(){this.autoSubmit&&this.querySelectorAll(this.autoSubmit).forEach(t=>{if(this._autoSubmitTargets.has(t))return;this._autoSubmitTargets.add(t);const e=(t.nodeName||"").toLowerCase();let i="change";t instanceof HTMLButtonElement||"pb-icon-button"===e||"paper-button"===e||"button"===e||"input"===e&&("button"===t.type||"submit"===t.type||"reset"===t.type)?i="click":"paper-input"===e||t instanceof HTMLInputElement&&("text"===t.type||"search"===t.type)?i="keyup":"paper-dropdown-menu"===e&&(i="value-changed"),t instanceof HTMLSelectElement&&(i="change"),t.addEventListener(i,this._submit.bind(this))})}static get properties(){return Object.assign({autoSubmit:{type:String,attribute:"auto-submit"}},super.properties)}}function oc(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)t[n]=i[n]}return t}function ac(t,e){function i(i,n,s){if("undefined"!=typeof document){"number"==typeof(s=oc({},e,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var o in s)s[o]&&(r+="; "+o,!0!==s[o]&&(r+="="+s[o].split(";")[0]));return document.cookie=i+"="+t.write(n,i)+r}}function n(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var i=document.cookie?document.cookie.split("; "):[],n={},s=0;s<i.length;s++){var r=i[s].split("="),o=r.slice(1).join("=");try{var a=decodeURIComponent(r[0]);if(n[a]=t.read(o,a),e===a)break}catch(t){}}return e?n[e]:n}}return Object.create({set:i,get:n,remove:function(t,e){i(t,"",oc({},e,{expires:-1}))},withAttributes:function(t){return ac(this.converter,oc({},this.attributes,t))},withConverter:function(t){return ac(oc({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}})}customElements.define("pb-custom-form",rc);var lc=ac({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});class cc extends(m(s(n))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{src:{type:String},url:{type:String},type:{type:String},odd:{type:String},dialog:{type:String},title:{type:String},source:{type:Boolean},params:{type:String},_target:{type:String,reflect:!0},_href:{type:String,reflect:!0},_token:{type:String}})}constructor(){super(),this.source=!1,this._target="_self",this.type=""}firstUpdated(){this.src&&this.subscribeTo("pb-document",t=>{t.detail.id===this.src&&(this.odd=t.detail.odd)}),this.subscribeTo("pb-refresh",t=>{t.detail.odd&&(this.odd=t.detail.odd,this._href=this._computeURL())}),r("pb-page-ready",()=>{this._target=this._computeTarget(),this._href=this._computeURL()})}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),e)switch(t){case"source":this._target=this._computeTarget();break;case"src":case"type":case"file":case"odd":case"params":case"url":this._href=this._computeURL()}}render(){return t`
      <a
        id="button"
        @click="${this._handleClick}"
        title="${this.title}"
        target="${this._target}"
        href="${this._href}"
        ><slot></slot
      ></a>
    `}static get styles(){return e`
      :host {
        display: inline-block;
      }

      a {
        text-decoration: var(--pb-download-text-decoration, none);
      }
    `}_computeTarget(){return this.source?"_blank":"_self"}_computeURL(){let t;this._token=797*(new Date).getTime();const e=this.getDocument();if(e)if(this.url)t=`${this.toAbsoluteURL(this.url)}?odd=${this.odd?this.odd:e.odd}.odd`;else{const i=`${this.getEndpoint()}/`;t=this.lessThanApiVersion("1.0.0")?`${e.getFileName()}${this.type?`.${this.type}`:""}?odd=${this.odd?this.odd:e.odd}.odd&cache=no&token=${this._token}`:`${i}api/document/${encodeURIComponent(e.path)}/${this.type||"html"}?odd=${this.odd?this.odd:e.odd}.odd&token=${this._token}`}else t=/^(?:[a-z]+:)?\/\//i.test(this.url)?this.url:`${this.getEndpoint()}/${this.url}`,t=this.lessThanApiVersion("1.0.0")?`${t}${this.type?`.${this.type}`:""}?odd=${this.odd}&cache=no&token='${this._token}`:`${t}/${this.type}?odd=${this.odd}&token='${this._token}`;return this.params&&(t+=`&${this.params}`),this.source&&(t+="&source=true"),t}_handleClick(t){if(this.dialog){const t=document.getElementById(this.dialog);t&&t.openDialog();const e=this._token,i=window.setInterval(()=>{lc.get("simple.token")===e&&(window.clearInterval(i),lc.remove("simple.token"),t&&t.closeDialog())})}"_self"===this._target&&(t.preventDefault(),window.location=this._href)}}customElements.define("pb-download",cc);class dc extends(m(s(n))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{loggedIn:{type:Boolean,attribute:"logged-in",reflect:!0},user:{type:String},password:{type:String},group:{type:String},groups:{type:Array},auto:{type:Boolean},loginLabel:{type:String,reflect:!0,attribute:"login-label"},logoutLabel:{type:String,reflect:!0,attribute:"logout-label"},loginIcon:{type:String,attribute:"login-icon"},logoutIcon:{type:String,attribute:"logout-icon"},_invalid:{type:Boolean},_hasFocus:{type:Boolean}})}constructor(){super(),this.loggedIn=!1,this.loginLabel="login.login",this.logoutLabel="login.as",this.user="",this.groups=[],this.loginIcon="account-circle",this.logoutIcon="supervisor-account",this._hasFocus=!0}firstUpdated(){super.firstUpdated(),this._checkLogin=this.shadowRoot.getElementById("checkLogin"),this._loginDialog=this.shadowRoot.querySelector("pb-dialog"),this.renderRoot.querySelector("form").addEventListener("submit",t=>{t.preventDefault(),this._confirmLogin()}),window.addEventListener("blur",()=>{this._hasFocus=!1}),window.addEventListener("focus",()=>{this._hasFocus||(this._hasFocus=!0,this._checkLogin.body=null,this._checkLogin.generateRequest())}),r("pb-page-ready",t=>{c(t.apiVersion,"1.0.0")?this._checkLogin.url=`${t.endpoint}/api/login/`:this._checkLogin.url=`${t.endpoint}/login`,this._checkLogin.body={user:this.user,password:this.password},this._checkLogin.generateRequest()}),this.addEventListener("keyup",t=>{13===t.keyCode&&(t.preventDefault(),this._confirmLogin())})}render(){return t`
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
        `}_show(t){t.preventDefault(),this.loggedIn?(this._checkLogin.body={logout:this.user},this._checkLogin.generateRequest()):this._loginDialog.openDialog()}_confirmLogin(){this.user=this.renderRoot.querySelector('input[name="user"]').value,this.password=this.renderRoot.querySelector('input[name="password"]').value,this._checkLogin.body={user:this.user,password:this.password},this._checkLogin.generateRequest()}_handleResponse(){const t=this._checkLogin.lastResponse;t.user&&this._checkGroup(t)?(t.userChanged=!this.loggedIn||this.user!==t.user,this.loggedIn=!0,this.user=t.user,this.groups=t.groups,this._invalid=!1,this._loginDialog.closeDialog()):(t.userChanged=this.loggedIn,this.loggedIn=!1,this.password=null,this._loginDialog.open?this._invalid=!0:this.auto&&this._loginDialog.openDialog()),this.emitTo("pb-login",t),this.loggedIn?v.currentUser={user:this.user,groups:this.groups}:v.currentUser=null}_handleError(){this.loggedIn=!1,this.password=null;const t={userChanged:this.loggedIn,user:null};this._loginDialog.open?this._invalid=!0:this.auto&&this._loginDialog.openDialog(),v.currentUser=null,this.emitTo("pb-login",t)}_isItemInArray(t,e){return t.some(t=>e===t)}_checkGroup(t){if(this.group){const e=this.group.split(/[\s+,]+/);let i=!1;return t.groups&&e.forEach(async e=>{i=this._isItemInArray(t.groups,e)||i}),i}return!0}static get styles(){return e`
      #message {
        color: var(--pb-login-message-invalid-color, var(--pb-error-color, #f44336));
      }
    `}}customElements.define("pb-login",dc);class pc extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{url:{type:String},title:{type:String},method:{type:String},event:{type:String},confirm:{type:String},quiet:{type:Boolean},_message:{type:String}})}constructor(){super(),this.method="get",this.confirm=null,this.quiet=!1,this._running=!1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-update",this._onUpdate.bind(this))}render(){return t`
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
    `}firstUpdated(){super.firstUpdated();const t=this.shadowRoot.querySelector("slot[name=title]");this._dialogTitle="",t.assignedNodes().forEach(t=>{this._dialogTitle+=t.innerHTML}),this.button=this.renderRoot.getElementById("button")}static get styles(){return e`
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
    `}_handleClick(t){if(t.preventDefault(),!this._running)if(this._running=!0,this.confirm){const t=this.shadowRoot.getElementById("confirmDialog");(async()=>{try{await t.confirm(this._dialogTitle,h(this.confirm)),await this.trigger()}catch{g.log("<pb-ajax> Action cancelled")}})()}else this.trigger()}async trigger(){this.shadowRoot.getElementById("loadContent").url=`${this.getEndpoint()}/${this.url}`,this.emitTo("pb-start-update"),await this.shadowRoot.getElementById("loadContent").generateRequest()}_handleResponse(){this._running=!1;const t=this.shadowRoot.getElementById("loadContent").lastResponse;if(this._message=t,!this.quiet){this.shadowRoot.getElementById("confirmDialog").show(this._dialogTitle,this._message)}this.emitTo("pb-end-update"),this.event&&this.emitTo(this.event)}_handleError(){this._running=!1;const t=this.shadowRoot.getElementById("loadContent").lastError.response,e=(new DOMParser).parseFromString(t,"application/xml").querySelector("message");this._message=e?e.textContent:t;this.shadowRoot.getElementById("confirmDialog").show(h("dialogs.error"),this._message),this.emitTo("pb-end-update")}_onUpdate(t){this.shadowRoot.getElementById("loadContent").params=t.detail.params}}customElements.define("pb-ajax",pc);class uc extends(m(s(n))){static get styles(){return e`
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
    `}static get properties(){return Object.assign(Object.assign({},super.properties),{},{label:{type:String},selected:{type:String},display:{type:String,default:"value"}})}constructor(){super(),this.label="language",this.display="value"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-i18n-update",t=>{this.selected=t.detail.language.replace(/^([^-]+).*$/,"$1"),this._syncOptions()},[]),r("pb-i18n-update",t=>{this.selected=t.language.replace(/^([^-]+).*$/,"$1"),this._syncOptions()})}render(){return t`
      <details>
        <summary aria-label="${p(this.label)}" title="${p(this.label)}"></summary>
        <ul></ul>
      </details>
      <slot @slotchange="${this._syncOptions}"></slot>
    `}_syncOptions(){const t=this.shadowRoot.querySelector("ul"),e=this.shadowRoot.querySelector("summary");if(!t||!e)return;t.innerHTML="";Array.from(this.querySelectorAll("option, paper-item")).forEach(i=>{const n=document.createElement("li");n.textContent=i.textContent,n.dataset.value=i.value||i.getAttribute("value"),n.dataset.value===this.selected&&(e.textContent="text"===this.display?i.textContent:i[this.display]),n.addEventListener("click",()=>{this._changed({target:{value:n.dataset.value}}),this.shadowRoot.querySelector("details").removeAttribute("open")}),t.appendChild(n)})}_changed(t){const e=t.target.value;e!==this.selected&&(g.log("<pb-lang> Language changed to %s",e),this.emitTo("pb-i18n-language",{language:e}),this.selected=e)}}customElements.define("pb-lang",uc);class hc extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{selected:{type:Number,reflect:!0}})}constructor(){super(),this.selected=0,this._initialized=!1,this._tabs=[],this._pages=[],this._focusOnSelect=!1,this._onTabClick=this._onTabClick.bind(this),this._onKeyDown=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),r("pb-page-ready",()=>{const t=v.state.tab;void 0!==t&&this._select(parseInt(t,10)||0,{emit:!1,commit:!1}),v.subscribe(this,t=>{void 0!==t.tab&&this._select(parseInt(t.tab,10)||0,{emit:!1,commit:!1})})})}firstUpdated(){super.firstUpdated(),this._applySelection(),this.emitTo("pb-tab",{selected:this.selected})}render(){return t`
      <div class="pb-tabs" role="tablist">
        <slot name="tab" @slotchange=${this._handleTabSlot}></slot>
      </div>
      <div part="pages" class="pb-tabs__pages">
        <slot name="page" @slotchange=${this._handlePageSlot}></slot>
      </div>
    `}static get styles(){return e`
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
    `}updated(t){t.has("selected")&&this._applySelection()}_handleTabSlot(t){this._tabs&&this._tabs.length&&this._tabs.forEach(t=>{t.removeEventListener("click",this._onTabClick),t.removeEventListener("keydown",this._onKeyDown)});const e=t.target.assignedElements({flatten:!0});this._tabs=e.filter(t=>t.nodeType===Node.ELEMENT_NODE),this._tabs.forEach((t,e)=>{t.classList.add("pb-tab"),t.setAttribute("role","tab"),t.dataset.pbTabIndex=String(e),t.id||(t.id=`pb-tab-${e}`),"BUTTON"!==t.tagName||t.hasAttribute("type")||t.setAttribute("type","button"),t.addEventListener("click",this._onTabClick),t.addEventListener("keydown",this._onKeyDown)}),this._applySelection()}_handlePageSlot(t){const e=t.target.assignedElements({flatten:!0});this._pages=e.filter(t=>t.nodeType===Node.ELEMENT_NODE),this._pages.forEach(t=>{t.setAttribute("role","tabpanel")}),this._applySelection()}_applySelection(){if(!this._tabs||0===this._tabs.length)return;let t=this.selected;if((null==t||Number.isNaN(Number(t)))&&(t=0),t=Math.max(0,Math.min(Number(t),this._tabs.length-1)),t!==this.selected){const e=this.selected;this.selected=t,this.requestUpdate("selected",e)}this._tabs.forEach((t,e)=>{const i=e===this.selected;t.setAttribute("aria-selected",i?"true":"false"),t.setAttribute("tabindex",i?"0":"-1"),t.classList.toggle("pb-tab--active",i),i&&this._focusOnSelect&&t.focus({preventScroll:!0})}),this._focusOnSelect=!1,this._pages&&this._pages.length&&this._pages.forEach((t,e)=>{const i=this._tabs[e],n=e===this.selected;t.hidden=!n,t.setAttribute("aria-hidden",n?"false":"true"),t.setAttribute("role","tabpanel"),i&&(t.setAttribute("aria-labelledby",i.id),t.id||(t.id=`pb-tab-panel-${e}`),i.setAttribute("aria-controls",t.id))})}_select(t,{emit:e=!0,commit:i=!0,focus:n=!1}={}){if(null==t)return;const s=Number(t);if(Number.isNaN(s))return;this._focusOnSelect=n;const r=this.selected;this.selected=s,this.requestUpdate("selected",r),this._applySelection(),e&&this.emitTo("pb-tab",{selected:this.selected}),i&&this._tabs&&this._tabs.length&&(this._initialized?v.commit(this,{tab:this.selected}):v.replace(this,{tab:this.selected}),this._initialized=!0)}_onTabClick(t){const e=Number(t.currentTarget.dataset.pbTabIndex);Number.isNaN(e)||this._select(e,{focus:!0})}_onKeyDown(t){const e=Number(t.currentTarget.dataset.pbTabIndex);if(Number.isNaN(e)||!this._tabs.length)return;let i=e;switch(t.key){case"ArrowRight":case"ArrowDown":i=(e+1)%this._tabs.length,t.preventDefault();break;case"ArrowLeft":case"ArrowUp":i=(e-1+this._tabs.length)%this._tabs.length,t.preventDefault();break;case"Home":i=0,t.preventDefault();break;case"End":i=this._tabs.length-1,t.preventDefault();break;default:return}this._select(i,{focus:!0})}}customElements.define("pb-tabs",hc);class gc extends(m(s(n))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{active:{type:Number,reflect:!0},label:{type:String},panels:{type:Array,reflect:!0},draggable:{type:Boolean}})}constructor(){super(),this.active=0,this.label="View",this.panels=null,this.position=-1,this.draggable=!1}connectedCallback(){if(super.connectedCallback(),!this.panels){const t=[];this.querySelectorAll("template").forEach(e=>t.push(e.title)),this.panels=t}this.querySelector("template")&&this._show()}firstUpdated(){const t=this.shadowRoot.querySelector('button[draggable="true"]');let e=null;this.draggable&&t.addEventListener("dragstart",t=>{t.dataTransfer.setDragImage(this,10,10),t.dataTransfer.setData("text",this.position),e=this}),this.addEventListener("dragover",t=>{t.preventDefault()}),document.addEventListener("dragenter",t=>{t.stopPropagation(),t.preventDefault(),e!==this&&(this.contains(t.target)?this.classList.add("dragover"):this.classList.remove("dragover"))}),this.addEventListener("drop",t=>{t.stopPropagation(),t.preventDefault(),e=null,this.dispatchEvent(new CustomEvent("pb-drop",{detail:{panel:t.dataTransfer.getData("text"),target:this},bubbles:!0,composed:!0}))})}render(){return t`
      <nav>
        <ul>
          <li>
            <select name="panels" class="dropdown" @change="${this._update}">
              ${this.panels.map((e,i)=>t`<option value="${i}" ?selected=${i===this.active}>
                    ${e}
                  </option>`)}
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
    `}static get styles(){return e`
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
    `}_update(){const t=this.shadowRoot.querySelector('[name="panels"]').value;this.active!==t&&(this.active=t,this._show(),this.refresh())}_show(){const t=Array.from(this.querySelectorAll("template"));if(0===t.length)return void this.querySelectorAll("._pb_panel").forEach(t=>t.remove());let e=Number(this.active);Number.isInteger(e)||(e=0),e<0&&(e=0),e>=t.length&&(e=t.length-1),this.active=e,this.querySelectorAll("._pb_panel").forEach(t=>t.remove());const i=t[this.active],n=document.importNode(i.content,!0),s=document.createElement("div");s.className=`_pb_panel _pb_panel${this.active}`,s.appendChild(n),this.appendChild(s),this.emitTo("pb-panel",{panel:this,active:this.active})}refresh(){this.emitTo("pb-refresh",null)}}customElements.define("pb-panel",gc);class fc extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{panels:{type:Array},direction:{type:String},_columns:{type:Number},animated:{type:String},animation:{type:Boolean}})}constructor(){super(),this.panels=[],this.direction="ltr",this.animated="pb-view",this.animation=!1,this._panelsInitialized=!1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-panel",t=>{const e=this._getPanelIndex(t.detail.panel);if(e<0)return;g.log("<pb-grid> Updating panel %d to show %s",e,t.detail.active);const i="rtl"===this.direction?this.panels.length-e-1:e;g.log("<pb-grid> Panel %d switched to template %s (not committing to registry)",i,t.detail.active)}),this.subscribeTo("pb-zoom",t=>{this.zoom(t.detail.direction)});const t=v.get("panels");if(t){const e=t.split(".").map(t=>parseInt(t,10));e.length>0&&e.length<=10&&e.every(t=>!isNaN(t)&&t>=0&&t<10)&&(g.log("<pb-grid> connectedCallback: Using panels from registry:",e,"overriding template attribute"),this.panels=e,this._panelsInitialized=!0)}else this.panels&&this.panels.length>0&&(g.log("<pb-grid> connectedCallback: Using panels from template attribute:",this.panels,"(no registry value)"),this._panelsInitialized=!0);this._isUpdatingFromRegistry=!1,this._lastPanelsState=null,v.subscribe(this,t=>{if(g.log("<pb-grid> Registry subscribe callback triggered, _isUpdatingFromRegistry:",this._isUpdatingFromRegistry,"state.panels:",t.panels),this._isUpdatingFromRegistry)return void g.log("<pb-grid> Skipping registry subscribe callback due to _isUpdatingFromRegistry flag");const e=t.panels?t.panels.split(".").map(t=>parseInt(t,10)).filter(t=>!isNaN(t)):[],i=e.join(".");this._lastPanelsState!==i?this._panelsInitialized||this.template?(g.log("<pb-grid> Registry subscribe callback rebuilding DOM with panels:",e,"current panels:",this.panels),this._lastPanelsState=i,this.panels=e,this._panelsInitialized=!0,this.innerHTML="",this.panels.forEach(t=>this._insertPanel(t)),this._update()):g.log("<pb-grid> Skipping registry subscribe callback - not yet initialized (template not ready)"):g.log("<pb-grid> Skipping registry subscribe callback - panels state unchanged:",i)}),this._columns=this.panels.length,this.template=this.querySelector("template"),this.template&&this.panels&&this.panels.length>0&&!this._panelsInitialized&&(g.log("<pb-grid> connectedCallback: Template ready, panels from attribute:",this.panels),this._panelsInitialized=!0)}firstUpdated(){const t=v.get("panels");if(t){const e=t.split(".").map(t=>parseInt(t,10)).filter(t=>!isNaN(t)&&t>=0&&t<10);if(e.length>0&&e.length<=10){e.join(".")!==this.panels.join(".")&&(g.log("<pb-grid> firstUpdated: Overriding template panels",this.panels,"with registry value",e),this.panels=e,this._panelsInitialized=!0)}}const e=this.querySelectorAll("._grid_panel").length;0===e&&this.panels&&this.panels.length>0?(g.log("<pb-grid> firstUpdated: Inserting panels:",this.panels,"existing panels:",e),this.panels.forEach(t=>this._insertPanel(t))):g.log("<pb-grid> firstUpdated: Skipping panel insertion - already have",e,"panels"),this._lastPanelsState=this._getState().panels,this._isUpdatingFromRegistry=!0;v.get("panels")!==this._getState().panels&&v.commit(this,this._getState()),this._isUpdatingFromRegistry=!1,this._animate(),this._update(),this.addEventListener("pb-drop",t=>{const e=parseInt(t.detail.panel),i=this._getPanelIndex(t.detail.target);g.log("<pb-grid> Insert panel %d at %d in %s",e,i,this.panels),this.querySelectorAll("._grid_panel").forEach(t=>{t.classList.remove("dragover")}),this.panels.splice(i,0,this.panels.splice(e,1)[0]),this.innerHTML="",this.panels.forEach(t=>this._insertPanel(t)),this._isUpdatingFromRegistry=!0,v.commit(this,this._getState()),this._isUpdatingFromRegistry=!1,this._update()})}_animate(){if(this.animation){document.querySelectorAll(this.animated).forEach((t,e)=>{const i=Ol(t,{opacity:[0,.6],translateX:[2e3,0],duration:400,delay:100+100*e,ease:"linear"});i&&i.finished?(async()=>{try{await i.finished,Ol(t,{opacity:[.6,1],duration:200,delay:50*e,ease:"linear"})}catch(t){}})():setTimeout(()=>{Ol(t,{opacity:[.6,1],duration:200,delay:50*e,ease:"linear"})},400+100*e)})}}addPanel(t){let e=t;if(void 0!==t||this.panels.length||(e=0),void 0===t&&this.panels.length){e=this.panels.reduce((t,e)=>Math.max(t,e),0)+1}g.log("<pb-grid> Adding panel with value:",e),g.log("<pb-grid> Current panels before add:",this.panels),g.log("<pb-grid> Current panel count before add:",this.querySelectorAll("._grid_panel").length),this._columns+=1,this.panels.push(e),this._insertPanel(e),this._isUpdatingFromRegistry=!0,v.commit(this,this._getState()),this._isUpdatingFromRegistry=!1,this._update(),this.emitTo("pb-refresh"),g.log("<pb-grid> After adding panel - panels:",this.panels),g.log("<pb-grid> After adding panel - panel count:",this.querySelectorAll("._grid_panel").length)}removePanel(t){let e,i;"number"==typeof t?(e=this.panels.indexOf(t),i=this.querySelector(`[active="${t}"]`)):(i=t,e=this._getPanelIndex(t)),g.log("<pb-grid> Removing panel %d",e),g.log("<pb-grid> Container:",i),g.log("<pb-grid> Current panels:",[...this.panels]),g.log("<pb-grid> Current panel count:",this.querySelectorAll("._grid_panel").length),this.panels.splice("rtl"===this.direction?this.panels.length-e-1:e,1),i.parentNode.removeChild(i),this._columns-=1,this._isUpdatingFromRegistry=!0,v.commit(this,this._getState()),this._isUpdatingFromRegistry=!1,this._assignPanelIds(),this._update(),g.log("<pb-grid> After removal - panels:",[...this.panels]),g.log("<pb-grid> After removal - panel count:",this.querySelectorAll("._grid_panel").length)}_insertPanel(t){g.log("<pb-grid> _insertPanel called with active:",t),g.log("<pb-grid> Template content:",this.template.content),g.log("<pb-grid> Template firstElementChild:",this.template.content.firstElementChild);const e=document.importNode(this.template.content.firstElementChild,!0);g.log("<pb-grid> Cloned element:",e),e.setAttribute("active",t),"ltr"===this.direction||0===this.querySelectorAll("._grid_panel").length?this.appendChild(e):this.insertBefore(e,this.firstElementChild),e.classList.add("_grid_panel"),this._assignPanelIds(),g.log("<pb-grid> After _insertPanel - DOM panels:",this.querySelectorAll("._grid_panel").length)}_update(){const t=this.querySelectorAll("._grid_panel"),e=Array.from(t).map(t=>{const e=t.getAttribute("style");if(e){const t=e.match(/max-width\s*:\s*([^;]+)/i);if(t&&t[1]){const e=t[1].trim();if(e&&"none"!==e)return e}}const i=window.getComputedStyle(t).getPropertyValue("max-width");return i&&"none"!==i?i:"1fr"});this.style.setProperty("--pb-computed-column-widths",e.join(" "))}_getPanelIndex(t){return Array.from(this.querySelectorAll("._grid_panel")).indexOf(t)}_assignPanelIds(){this.querySelectorAll("._grid_panel").forEach((t,e)=>{t.position=e})}_getState(){const t=this.panels.filter(t=>"number"==typeof t&&!isNaN(t)&&t>=0&&t<10);return{panels:t.join(".")}}render(){return t`<slot></slot>`}static get styles(){return e`
      :host {
        display: grid;
        grid-template-columns: var(--pb-grid-column-widths, var(--pb-computed-column-widths));
        grid-column-gap: var(--pb-grid-column-gap, 20px);
        justify-content: space-between;
        font-size: calc(var(--pb-content-font-size, 1rem) * var(--pb-zoom-factor, 1));
      }
    `}zoom(t){}}customElements.get("pb-grid")||customElements.define("pb-grid",fc);class mc extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{action:{type:String},grid:{type:String},initial:{type:Number}})}constructor(){super(),this.action="add",this.initial=0}connectedCallback(){super.connectedCallback()}render(){return t` <button @click="${this._click}" type="button"><slot></slot></button> `}static get styles(){return e`
      :host {
        display: block;
      }
    `}_click(){const t=document.querySelector(this.grid);if(!t||!t.addPanel)return g.error("<pb-grid-action> grid not found: %s",this.grid);if(g.log("<pb-grid-action> Clicked, action:",this.action),g.log("<pb-grid-action> Grid found:",t),g.log("<pb-grid-action> Closest element:",this.closest("pb-panel,pb-grid")),"add"===this.action)t.addPanel(this.initial);else{const e=this.closest("pb-panel,pb-grid");g.log("<pb-grid-action> Calling removePanel with:",e),t.removePanel(e)}}}function bc(t,e){return t.some(t=>e===t)}function yc(t,e,i){if(null==t)return!1;if(i){if(!e)return!1;const t=i.split(/[\s+,]+/);let n=!1;return t.forEach(async t=>{n=bc(e,t)||n}),n}return!0}customElements.define("pb-grid-action",mc);class vc extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{login:{type:String},show:{type:Boolean,reflect:!0},group:{type:String}})}constructor(){super(),this.show=!1}firstUpdated(){this.shadowRoot.querySelector("slot[name=fallback]").assignedNodes().length>0&&(g.log(this),this.classList.add("fallback")),this.subscribeTo("pb-login",t=>{this.show=this._loggedIn(t.detail.user,t.detail.groups)},[]),this.show=v.currentUser&&this._loggedIn(v.currentUser.user,v.currentUser.groups)}render(){return t`
      ${this.show&&!this.disabled?t`<slot></slot>`:t`<slot name="fallback"></slot>`}
    `}static get styles(){return e`
      :host {
        display: none;
      }

      :host(.fallback),
      :host([show]) {
        display: inherit;
      }
    `}_loggedIn(t,e){return yc(t,e,this.group)}}customElements.define("pb-restricted",vc);class _c extends(m(s(n))){static get properties(){return Object.assign(Object.assign({},super.properties),{},{odds:{type:Array},target:{type:String},_valid:{type:Boolean},_current:{type:String}})}constructor(){super(),this.odds=[]}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-refresh-odds",t=>{this._refresh();const e=this.shadowRoot.getElementById("regenerate"),i=t.detail.odds.map(t=>`odd=${t}`).join("&");this.minApiVersion("1.0.0")?e.url=`api/odd?${i}`:e.url=`modules/lib/regenerate.xql?${i}`,e.trigger()})}firstUpdated(){super.firstUpdated(),this._loader=this.shadowRoot.getElementById("load"),r("pb-page-ready",t=>{o(t.apiVersion,"1.0.0")<0?this._loader.url=`${t.endpoint}/modules/lib/components-odd.xql`:this._loader.url=`${t.endpoint}/api/odd`,this._refresh()})}_refresh(t){this.emitTo("pb-start-update"),this._loader.params=t,this._loader.generateRequest()}_update(){this.emitTo("pb-end-update"),this.odds=this._loader.lastResponse,this.requestUpdate()}_selectODD(t){const e=t.model.itemsIndex;this.odds.forEach((t,i)=>{i!==e&&t.current&&(this.set(`odds.${i}.current`,!1),this.set(`odds.${e}.current`,!0))});const i={odd:`${t.model.item.name}.odd`};g.log("<pb-manage-odds> selected ODD: %o",i),this.emitTo("pb-load",{params:i})}_createODD(t){t.preventDefault();const e=this.shadowRoot.querySelector('input[name="new_odd"]').value,i=this.shadowRoot.querySelector('input[name="title"]').value;if(g.log("<pb-manage-odds> create ODD: %s, %s",e,i),this.lessThanApiVersion("1.0.0"))this._refresh({new_odd:e,title:i});else{const t=this.shadowRoot.getElementById("create");t.url=`${this.getEndpoint()}/api/odd/${e}`,t.params={title:i},this.emitTo("pb-start-update"),t.generateRequest()}}_created(t){this.emitTo("pb-end-update"),201===t.detail.status?this._refresh():g.log("<pb-manage-odds> unexpected response for create odd: %o",t.detail)}_createByExample(){const t={new_odd:this.shadowRoot.querySelector('input[name="new_odd"]').value,title:this.shadowRoot.querySelector('input[name="title"]').value},e=document.getElementById(this.target);e||e.getSelected||g.error("<pb-manage-odds> target %s not found",this.target);const i=e.getSelected();document.querySelectorAll(".document-select paper-checkbox[checked]").forEach(t=>{i.push(t.value)}),g.log("<pb-manage-odds> create ODD by example: %o",i),t.byExample=i,this._refresh(t)}_delete(t){this._current=t,this.shadowRoot.getElementById("deleteDialog").openDialog()}_confirmDelete(){if(this._current){if(g.log("<pb-manage-odds> deleting ODD: %s",this._current),this.lessThanApiVersion("1.0.0"))this._refresh({delete:this._current});else{this.emitTo("pb-start-update");const t=this.shadowRoot.getElementById("delete");t.url=`${this.getEndpoint()}/api/odd/${this._current}`,t.generateRequest()}this._current=null}else g.error("<pb-manage-odds> no file marked for deletion")}_deleted(){const t=this.shadowRoot.getElementById("delete").lastError;410===t.status?this._refresh():(g.error("<pb-manage-odds> failed to delete odd: %d %o",t.status,t.response),this.emitTo("pb-end-update"))}_validate(){const t=this.shadowRoot.getElementById("ironform").validate();this.shadowRoot.getElementById("createBtn").disabled=!t,this.shadowRoot.getElementById("createByEx").disabled=!t}render(){if(!this.odds)return null;const e=this.lessThanApiVersion("1.0.0")?"modules/lib/regenerate.xql":"api/odd";return t`
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
    `}static get styles(){return e`
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
    `}}customElements.get("pb-manage-odds")||customElements.define("pb-manage-odds",_c);const wc=e`
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
`,xc=t=>class extends(A(t)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged",sync:!0},_lastTabIndex:{type:Number}}}_disabledChanged(t,e){super._disabledChanged(t,e),this.__shouldAllowFocusWhenDisabled()||(t?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.setAttribute("tabindex","-1")):e&&(void 0!==this._lastTabIndex?this.setAttribute("tabindex",this._lastTabIndex):this.tabindex=void 0))}_tabindexChanged(t){this.__shouldAllowFocusWhenDisabled()||this.disabled&&-1!==t&&(this._lastTabIndex=t,this.setAttribute("tabindex","-1"))}focus(t){this.disabled&&!this.__shouldAllowFocusWhenDisabled()||super.focus(t)}__shouldAllowFocusWhenDisabled(){return!1}},kc=["mousedown","mouseup","click","dblclick","keypress","keydown","keyup"],Ac=t=>class extends(S(xc(O(t)))){constructor(){super(),this.__onInteractionEvent=this.__onInteractionEvent.bind(this),kc.forEach(t=>{this.addEventListener(t,this.__onInteractionEvent,!0)}),this.tabindex=0}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button"),this.__shouldAllowFocusWhenDisabled()&&this.style.setProperty("--_vaadin-button-disabled-pointer-events","auto")}_onKeyDown(t){super._onKeyDown(t),t.altKey||t.shiftKey||t.ctrlKey||t.metaKey||this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}__onInteractionEvent(t){this.__shouldSuppressInteractionEvent(t)&&t.stopImmediatePropagation()}__shouldSuppressInteractionEvent(t){return this.disabled}};class Sc extends(Ac(E($(C(T(n)))))){static get is(){return"vaadin-button"}static get styles(){return wc}static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}render(){return t`
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
    `}ready(){super.ready(),this._tooltipController=new I(this),this.addController(this._tooltipController)}__shouldAllowFocusWhenDisabled(){return window.Vaadin.featureFlags.accessibleDisabledButtons}}L(Sc);const Oc=e`
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
`;class Ec extends($(T(n))){static get is(){return"vaadin-upload-icon"}static get styles(){return Oc}static get lumoInjector(){return Object.assign(Object.assign({},super.lumoInjector),{},{includeBaseStyles:!0})}render(){return t``}}L(Ec);const $c=document.createElement("template");$c.innerHTML="\n  <style>\n    @font-face {\n      font-family: 'vaadin-upload-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n",document.head.appendChild($c.content);const Cc=e`
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
`,Tc=t=>class extends t{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(t,e,i){const n=this._normalizeValue(t,e,i);this.style.setProperty("--vaadin-progress-value",n)}_valueChanged(t){this.setAttribute("aria-valuenow",t)}_minChanged(t){this.setAttribute("aria-valuemin",t)}_maxChanged(t){this.setAttribute("aria-valuemax",t)}_normalizeValue(t,e,i){let n;return t||0===t?e>=i?n=1:(n=(t-e)/(i-e),n=Math.min(Math.max(n,0),1)):n=0,n}};class Ic extends(Tc(E($(C(T(n)))))){static get is(){return"vaadin-progress-bar"}static get styles(){return Cc}render(){return t`
      <div part="bar">
        <div part="value"></div>
      </div>
    `}}L(Ic);const Lc=e`
  :host {
    align-items: baseline;
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
    content: '\\2003' / '';
    display: inline-flex;
    align-items: center;
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

  [part='commands'] {
    display: flex;
    align-items: center;
    gap: var(--vaadin-gap-xs);
    height: var(--vaadin-icon-size, 1lh);
    align-self: center;
  }

  button {
    background: var(--vaadin-upload-file-button-background, transparent);
    border: var(--vaadin-upload-file-button-border-width, 0) solid
      var(--vaadin-upload-file-button-border-color, var(--vaadin-border-color-secondary));
    border-radius: var(--vaadin-upload-file-button-border-radius, var(--vaadin-radius-m));
    color: var(--vaadin-upload-file-button-text-color, var(--vaadin-text-color));
    cursor: var(--vaadin-clickable-cursor);
    flex-shrink: 0;
    font: inherit;
    /* Ensure minimum click target (WCAG) */
    padding: var(--vaadin-upload-file-button-padding, max(0px, (24px - var(--vaadin-icon-size, 1lh)) / 2));
  }

  button:focus-visible {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
  }

  [part='start-button']::before,
  [part='retry-button']::before,
  [part='remove-button']::before {
    background: currentColor;
    content: '\\2003' / '';
    display: flex;
    align-items: center;
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
`,Rc=t=>class extends(O(t)){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},complete:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},file:{type:Object},fileName:{type:String},held:{type:Boolean,value:!1},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object},progress:{type:Number},status:{type:String},tabindex:{type:Number,value:0},uploading:{type:Boolean,value:!1,reflectToAttribute:!0},_progress:{type:Object}}}static get observers(){return["__updateTabindex(tabindex, disabled)","__updateProgress(_progress, progress, indeterminate)"]}ready(){super.ready(),this.addController(new R(this,"progress","vaadin-progress-bar",{initializer:t=>{this._progress=t}})),this.shadowRoot.addEventListener("focusin",t=>{t.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",t=>{t.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(t){return t.composedPath()[0]===this}__disabledChanged(t){t?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this.tabindex)}_errorMessageChanged(t){this.toggleAttribute("error",Boolean(t))}__updateTabindex(t,e){e?this.removeAttribute("tabindex"):this.setAttribute("tabindex",t)}__updateProgress(t,e,i){t&&(t.value=isNaN(e)?0:e/100,t.indeterminate=i)}_fireFileEvent(t){return t.preventDefault(),this.dispatchEvent(new CustomEvent(t.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}};class jc extends(Rc($(C(T(n))))){static get is(){return"vaadin-upload-file"}static get styles(){return Lc}static get lumoInjector(){return Object.assign(Object.assign({},super.lumoInjector),{},{includeBaseStyles:!0})}render(){return t`
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
          aria-label="${this.i18n?this.i18n.file.start:l}"
          aria-describedby="name"
        ></button>
        <button
          type="button"
          part="retry-button"
          file-event="file-retry"
          @click="${this._fireFileEvent}"
          ?hidden="${!this.errorMessage}"
          ?disabled="${this.disabled}"
          aria-label="${this.i18n?this.i18n.file.retry:l}"
          aria-describedby="name"
        ></button>
        <button
          type="button"
          part="remove-button"
          file-event="file-abort"
          @click="${this._fireFileEvent}"
          ?disabled="${this.disabled}"
          aria-label="${this.i18n?this.i18n.file.remove:l}"
          aria-describedby="name"
        ></button>
      </div>

      <slot name="progress"></slot>
    `}}L(jc);const Nc=e`
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
`,Pc=e=>class extends e{static get properties(){return{items:{type:Array},i18n:{type:Object},disabled:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["__updateItems(items, i18n, disabled)"]}__updateItems(t,e){t&&e&&this.requestContentUpdate()}requestContentUpdate(){const{items:e,i18n:i,disabled:n}=this;d(t`
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
        `,this)}};class Dc extends(Pc($(C(n)))){static get is(){return"vaadin-upload-file-list"}static get styles(){return Nc}render(){return t`
      <ul part="list">
        <slot></slot>
      </ul>
    `}}L(Dc);const Fc=e`
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
`,Bc=document.createElement("div");let Mc;function qc(t,e={}){const i=e.mode||"polite",n=void 0===e.timeout?150:e.timeout;"alert"===i?(Bc.removeAttribute("aria-live"),Bc.removeAttribute("role"),Mc=j.debounce(Mc,N,()=>{Bc.setAttribute("role","alert")})):(Mc&&Mc.cancel(),Bc.removeAttribute("role"),Bc.setAttribute("aria-live",i)),Bc.textContent="",setTimeout(()=>{Bc.textContent=t},n)}Bc.style.position="fixed",Bc.style.clip="rect(0px, 0px, 0px, 0px)",Bc.setAttribute("aria-live","polite"),document.body.appendChild(Bc);const zc=t=>t.test(navigator.userAgent),Uc=t=>t.test(navigator.platform),Hc=t=>t.test(navigator.vendor);zc(/Android/u),zc(/Chrome/u)&&Hc(/Google Inc/u),zc(/Firefox/u),Uc(/^iPad/u)||Uc(/^Mac/u)&&navigator.maxTouchPoints,Uc(/^iPhone/u),zc(/^((?!chrome|android).)*safari/iu);const Vc=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}})();function Wc(t,...e){const i=t=>Array.isArray(t),n=t=>t&&"object"==typeof t&&!i(t),s=(t,e)=>{n(e)&&n(t)&&Object.keys(e).forEach(r=>{const o=e[r];n(o)?(t[r]||(t[r]={}),s(t[r],o)):i(o)?t[r]=[...o]:null!=o&&(t[r]=o)})};return e.forEach(e=>{s(t,e)}),t}const Gc=(t,e)=>class extends e{static get properties(){return{i18n:{type:Object},__effectiveI18n:{type:Object,sync:!0}}}constructor(){super(),this.i18n=Wc({},t)}get i18n(){return this.__customI18n}set i18n(e){e!==this.__customI18n&&(this.__customI18n=e,this.__effectiveI18n=Wc({},t,this.__customI18n))}},Yc={dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}};class Qc extends R{constructor(t){super(t,"add-button","vaadin-button")}initNode(t){t._isDefault&&(this.defaultNode=t),t.addEventListener("touchend",t=>{this.host._onAddFilesTouchEnd(t)}),t.addEventListener("click",t=>{this.host._onAddFilesClick(t)}),this.host._addButton=t}}class Kc extends R{constructor(t){super(t,"drop-label","span")}initNode(t){t._isDefault&&(this.defaultNode=t),this.host._dropLabel=t}}const Jc=t=>class extends(Gc(Yc,t)){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},nodrop:{type:Boolean,reflectToAttribute:!0,value:Vc},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[],sync:!0},maxFiles:{type:Number,value:1/0,sync:!0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},uploadFormat:{type:String,value:"raw"},capture:String,_addButton:{type:Object},_dropLabel:{type:Object},_fileList:{type:Object},_files:{type:Array}}}static get observers(){return["__updateAddButton(_addButton, maxFiles, __effectiveI18n, maxFilesReached, disabled)","__updateDropLabel(_dropLabel, maxFiles, __effectiveI18n)","__updateFileList(_fileList, files, __effectiveI18n, disabled)","__updateMaxFilesReached(maxFiles, files)"]}get i18n(){return super.i18n}set i18n(t){super.i18n=t}get __acceptRegexp(){if(!this.accept)return null;const t=this.accept.split(",").map(t=>{let e=t.trim();return e=e.replace(/[+.]/gu,"\\$&"),e.startsWith("\\.")&&(e=`.*${e}$`),e.replace(/\/\*/gu,"/.*")});return new RegExp(`^(${t.join("|")})$`,"iu")}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this)),this._addButtonController=new Qc(this),this.addController(this._addButtonController),this._dropLabelController=new Kc(this),this.addController(this._dropLabelController),this.addController(new R(this,"file-list","vaadin-upload-file-list",{initializer:t=>{this._fileList=t}})),this.addController(new R(this,"drop-label-icon","vaadin-upload-icon"))}_formatSize(t){if("function"==typeof this.__effectiveI18n.formatSize)return this.__effectiveI18n.formatSize(t);const e=this.__effectiveI18n.units.sizeBase||1e3,i=~~(Math.log(t)/Math.log(e)),n=Math.max(0,Math.min(3,i-1));return`${parseFloat((t/e**i).toFixed(n))} ${this.__effectiveI18n.units.size[i]}`}_splitTimeByUnits(t){const e=[60,60,24,1/0],i=[0];for(let n=0;n<e.length&&t>0;n++)i[n]=t%e[n],t=Math.floor(t/e[n]);return i}_formatTime(t,e){if("function"==typeof this.__effectiveI18n.formatTime)return this.__effectiveI18n.formatTime(t,e);for(;e.length<3;)e.push(0);return e.reverse().map(t=>(t<10?"0":"")+t).join(":")}_formatFileProgress(t){const e=t.loaded>0?this.__effectiveI18n.uploading.remainingTime.prefix+t.remainingStr:this.__effectiveI18n.uploading.remainingTime.unknown;return`${t.totalStr}: ${t.progress}% (${e})`}__updateMaxFilesReached(t,e){this._setMaxFilesReached(t>=0&&e.length>=t)}__updateAddButton(t,e,i,n,s){t&&(t.disabled=s||n,t===this._addButtonController.defaultNode&&(t.textContent=this._i18nPlural(e,i.addFiles)))}__updateDropLabel(t,e,i){t&&t===this._dropLabelController.defaultNode&&(t.textContent=this._i18nPlural(e,i.dropFiles))}__updateFileList(t,e,i,n){t&&(t.items=[...e],t.i18n=i,t.disabled=n)}_onDragover(t){t.preventDefault(),this.nodrop||this._dragover||(this._dragoverValid=!this.maxFilesReached&&!this.disabled,this._dragover=!0),t.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(t){t.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}async _onDrop(t){if(!this.nodrop&&!this.disabled){t.preventDefault(),this._dragover=this._dragoverValid=!1;const e=await this.__getFilesFromDropEvent(t);this._addFiles(e)}}__getFilesFromDropEvent(t){async function e(t){if(t.isFile)return new Promise(e=>{t.file(e,()=>e([]))});if(t.isDirectory){const i=t.createReader(),n=await new Promise(t=>{i.readEntries(t,()=>t([]))});return(await Promise.all(n.map(e))).flat()}}if(!Array.from(t.dataTransfer.items).filter(t=>!!t).filter(t=>"function"==typeof t.webkitGetAsEntry).map(t=>t.webkitGetAsEntry()).some(t=>!!t&&t.isDirectory))return Promise.resolve(t.dataTransfer.files?Array.from(t.dataTransfer.files):[]);const i=Array.from(t.dataTransfer.items).map(t=>t.webkitGetAsEntry()).filter(t=>!!t).map(e);return Promise.all(i).then(t=>t.flat())}_createXhr(){return new XMLHttpRequest}_configureXhr(t,e=null,i=!1){if("string"==typeof this.headers)try{this.headers=JSON.parse(this.headers)}catch(t){this.headers=void 0}Object.entries(this.headers).forEach(([e,i])=>{t.setRequestHeader(e,i)}),i&&e&&(t.setRequestHeader("Content-Type",e.type||"application/octet-stream"),t.setRequestHeader("X-Filename",encodeURIComponent(e.name))),this.timeout&&(t.timeout=this.timeout),t.withCredentials=this.withCredentials}_setStatus(t,e,i,n){t.elapsed=n,t.elapsedStr=this._formatTime(t.elapsed,this._splitTimeByUnits(t.elapsed)),t.remaining=Math.ceil(n*(e/i-1)),t.remainingStr=this._formatTime(t.remaining,this._splitTimeByUnits(t.remaining)),t.speed=~~(e/n/1024),t.totalStr=this._formatSize(e),t.loadedStr=this._formatSize(i),t.status=this._formatFileProgress(t)}uploadFiles(t=this.files){t&&!Array.isArray(t)&&(t=[t]),t=t.filter(t=>!t.complete),Array.prototype.forEach.call(t,this._uploadFile.bind(this))}_uploadFile(t){if(t.uploading)return;const e=Date.now(),i=t.xhr=this._createXhr();let n,s;i.upload.onprogress=r=>{clearTimeout(n),s=Date.now();const o=(s-e)/1e3,a=r.loaded,l=r.total,c=~~(a/l*100);t.loaded=a,t.progress=c,t.indeterminate=a<=0||a>=l,t.error?t.indeterminate=t.status=void 0:t.abort||(c<100?(this._setStatus(t,l,a,o),n=setTimeout(()=>{t.status=this.__effectiveI18n.uploading.status.stalled,this._renderFileList()},2e3)):(t.loadedStr=t.totalStr,t.status=this.__effectiveI18n.uploading.status.processing)),this._renderFileList(),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:t,xhr:i}}))},i.onreadystatechange=()=>{if(4===i.readyState){if(clearTimeout(n),t.indeterminate=t.uploading=!1,t.abort)return;t.status="";if(!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:t,xhr:i},cancelable:!0})))return;0===i.status?t.error=this.__effectiveI18n.uploading.error.serverUnavailable:i.status>=500?t.error=this.__effectiveI18n.uploading.error.unexpectedServerError:i.status>=400&&(t.error=this.__effectiveI18n.uploading.error.forbidden),t.complete=!t.error,this.dispatchEvent(new CustomEvent("upload-"+(t.error?"error":"success"),{detail:{file:t,xhr:i}})),this._renderFileList()}};const r="raw"===this.uploadFormat;t.uploadTarget||(t.uploadTarget=this.target||""),r||(t.formDataName=this.formDataName);if(!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:t,xhr:i},cancelable:!0})))return;let o;if(r)o=t;else{const e=new FormData;e.append(t.formDataName,t,t.name),o=e}i.open(this.method,t.uploadTarget,!0),this._configureXhr(i,t,r),t.status=this.__effectiveI18n.uploading.status.connecting,t.uploading=t.indeterminate=!0,t.complete=t.abort=t.error=t.held=!1,i.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:t,xhr:i}})),this._renderFileList()};const a={file:t,xhr:i,uploadFormat:this.uploadFormat,requestBody:o};r||(a.formData=o);this.dispatchEvent(new CustomEvent("upload-request",{detail:a,cancelable:!0}))&&i.send(o)}_retryFileUpload(t){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:t,xhr:t.xhr},cancelable:!0}))&&(this._uploadFile(t),this._updateFocus(this.files.indexOf(t)))}_abortFileUpload(t){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:t,xhr:t.xhr},cancelable:!0}))&&(t.abort=!0,t.xhr&&t.xhr.abort(),this._removeFile(t))}_renderFileList(){this._fileList&&"function"==typeof this._fileList.requestContentUpdate&&this._fileList.requestContentUpdate()}_addFiles(t){Array.prototype.forEach.call(t,this._addFile.bind(this))}_addFile(t){if(this.maxFilesReached)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.__effectiveI18n.error.tooManyFiles}}));if(this.maxFileSize>=0&&t.size>this.maxFileSize)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.__effectiveI18n.error.fileIsTooBig}}));const e=this.__acceptRegexp;!e||e.test(t.type)||e.test(t.name)?(t.loaded=0,t.held=!0,t.status=this.__effectiveI18n.uploading.status.held,this.files=[t,...this.files],this.noAuto||this._uploadFile(t)):this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.__effectiveI18n.error.incorrectFileType}}))}_updateFocus(t){if(0===this.files.length)return void this._addButton.focus({focusVisible:P()});t===this.files.length&&(t-=1),this._fileList.children[t].firstElementChild.focus({focusVisible:P()})}_removeFile(t){const e=this.files.indexOf(t);e>=0&&(this.files=this.files.filter(e=>e!==t),this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:t},bubbles:!0,composed:!0})),this._updateFocus(e))}_onAddFilesTouchEnd(t){t.preventDefault(),this._onAddFilesClick(t)}_onAddFilesClick(t){this.maxFilesReached||(t.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(t){this._addFiles(t.target.files)}_onFileStart(t){this._uploadFile(t.detail.file)}_onFileRetry(t){this._retryFileUpload(t.detail.file)}_onFileAbort(t){this._abortFileUpload(t.detail.file)}_onFileReject(t){qc(`${t.detail.file.name}: ${t.detail.error}`,{mode:"alert"})}_onUploadStart(t){qc(`${t.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(t){qc(`${t.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(t){qc(`${t.detail.file.name}: ${t.detail.file.error}`,{mode:"alert"})}_dragoverChanged(t){t?this.setAttribute("dragover",t):this.removeAttribute("dragover")}_dragoverValidChanged(t){t?this.setAttribute("dragover-valid",t):this.removeAttribute("dragover-valid")}_i18nPlural(t,e){return 1===t?e.one:e.many}_isMultiple(t){return 1!==t}};class Zc extends(Jc(E($(C(T(n)))))){static get is(){return"vaadin-upload"}static get styles(){return Fc}static get lumoInjector(){return Object.assign(Object.assign({},super.lumoInjector),{},{includeBaseStyles:!0})}render(){return t`
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
        capture="${k(this.capture)}"
      />
    `}}L(Zc);class Xc extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{target:{type:String},accept:{type:String},_files:{type:Object},event:{type:String}})}constructor(){super(),this._files=new Map,this.event="pb-load"}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.subscribeTo("pb-collection",t=>{this.target=t.detail.collection})}firstUpdated(){super.firstUpdated();const t=this.shadowRoot.getElementById("uploader");t.addEventListener("upload-before",e=>{this.emitTo("pb-start-update");const{file:i}=e.detail;this._files.set(i.name,i),this.requestUpdate(),this.minApiVersion("1.0.0")&&this.target&&(i.uploadTarget=`${t.target}${encodeURIComponent(this.target)}`)}),t.addEventListener("upload-request",t=>{this.target&&this.lessThanApiVersion("1.0.0")&&t.detail.formData.append("root",this.target)}),t.addEventListener("upload-error",t=>{this.emitTo("pb-end-update"),t.detail.file.error=t.detail.xhr.responseText,this.requestUpdate()}),t.addEventListener("upload-success",()=>{let e=!0;const i=[];t.files.forEach(t=>{t.complete||t.error||t.aborted?/^.*\.odd$/.test(t.name)&&i.push(t.name):e=!1,this.requestUpdate()}),e&&(this.emitTo("pb-end-update"),this.emitTo(this.event),i.length>0&&this.emitTo("pb-refresh-odds",{odds:i}))}),r("pb-page-ready",()=>{this.minApiVersion("1.0.0")?t.target=`${this.getEndpoint()}/api/upload/`:t.target=`${this.getEndpoint()}/modules/lib/upload.xql`})}render(){const e=et(this,"--pb-upload-button-icon","icons:file-upload"),i=et(this,"--pb-upload-drop-icon",null);return t`
      <vaadin-upload
        id="uploader"
        accept="${this.accept}"
        method="post"
        tabindex="-1"
        form-data-name="files[]"
        uploadFormat="form"
        with-credentials
      >
        ${i?t`<pb-icon slot="drop-label-icon" icon="${i}" decorative></pb-icon>`:t`<span slot="drop-label-icon"></span>`}
        <span slot="drop-label">${p("upload.drop",{accept:this.accept})}</span>
        <button
          id="uploadBtn"
          slot="add-button"
          class="pb-button pb-button--contained"
          type="button"
        >
          ${e?t`<pb-icon icon="${e}" decorative></pb-icon>`:null}
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
      `),i.error){let n=i.error;try{n=JSON.parse(i.error).description||i.error}catch(t){n=i.error}e.push(t` <li class="error" part="error">${n}</li> `)}}return e}clearList(){this._files.clear(),this.requestUpdate()}static get styles(){return e`
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
    `}}customElements.define("pb-upload",Xc);class td extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{label:{type:String},odds:{type:Array},name:{type:String},odd:{type:String,notify:!0}})}constructor(){super(),this.label="document.selectODD",this.odds=[],td.__counter=(td.__counter||0)+1,this._selectId=`pb-select-odd-${td.__counter}`}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-update",this._onTargetUpdate.bind(this))}firstUpdated(){super.firstUpdated(),r("pb-page-ready",()=>{this._refresh()})}render(){return t`
      <label class="pb-select-odd__label" for="${this._selectId}"> ${p(this.label)} </label>
      <div class="pb-select-odd__control">
        <select
          id="${this._selectId}"
          class="pb-select-odd__select"
          name=${k(this.name||void 0)}
          .value=${this.odd??""}
          @change=${this._handleChange}
        >
          ${this.odds.map(e=>t`<option value="${e.name}">${e.label}</option>`)}
        </select>
      </div>
    `}static get styles(){return e`
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
    `}updated(t){if(t.has("odds")&&(!this.odd||!this.odds.find(t=>t.name===this.odd))){const t=this.odds[0];t&&(this.odd=t.name)}}_handleChange(t){const e=t.target.value;if(e===this.odd)return;this.odd=e,g.log("<pb-select-odd> Switching to ODD %s",this.odd);const i=this.getDocument();i&&(i.odd=this.odd),v.commit(this,{odd:this.odd}),this.emitTo("pb-refresh",{odd:this.odd})}_refresh(){let t;t=this.minApiVersion("1.0.0")?`${this.getEndpoint()}/api/odd`:`${this.getEndpoint()}/modules/lib/components-list-odds.xql`;const e=this.toAbsoluteURL(t);let i;try{i=new URL(e)}catch(t){i=new URL(e,window.location.href)}this.odd&&i.searchParams.set("odd",this.odd),(async()=>{try{const t=await fetch(i.href,{method:"GET",credentials:"include",headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`Failed to load ODDs (${t.status})`);const e=await t.json();this._updateOdds(Array.isArray(e)?e:[])}catch(t){g.error("<pb-select-odd> request failed",t),this._updateOdds([])}})()}_updateOdds(t){this.odds=t,!t.length||this.odd&&t.find(t=>t.name===this.odd)||(this.odd=t[0].name)}_onTargetUpdate(t){let e=t.detail.data.odd;e&&(e=e.replace(/^(.*?)\.[^\.]+$/,"$1")),e!==this.odd&&g.log("<pb-select-odd> Set current ODD from %s to %s",this.odd,e),this.odd=e}}customElements.define("pb-select-odd",td);class ed extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{label:{type:String},name:{type:String},template:{type:String},_templates:{type:Array}})}constructor(){super(),this.label="document.selectTemplate",this.name="",this._templates=[]}firstUpdated(){r("pb-page-ready",t=>{this.template=t.template;const e=this.shadowRoot.getElementById("getTemplates");this.minApiVersion("1.0.0")?e.url=`${t.endpoint}/api/templates`:e.url=`${t.endpoint}/modules/lib/components-list-templates.xql`,e.generateRequest()})}render(){return t`
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
    `}static get styles(){return e`
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
    `}_selected(){const t=this.shadowRoot.getElementById("template-select");if(!t)return;const e=t.value;e!==this.template&&(v.replace(this,{template:e}),window.location.reload())}_handleTemplatesResponse(){const t=this.shadowRoot.getElementById("getTemplates");this._templates=t.lastResponse||[];const e=this.shadowRoot.getElementById("template-select");e&&this.template&&(e.value=this.template)}}customElements.define("pb-select-template",ed);class id extends dn{static get properties(){return Object.assign(Object.assign({},super.properties),{},{longitude:{type:Number},latitude:{type:Number},label:{type:String},event:{type:String},zoom:{type:Number},auto:{type:Boolean}})}constructor(){super(),this.event="mouseover",this.auto=!1,this.zoom=null}connectedCallback(){super.connectedCallback(),this.event&&this.addEventListener(this.event,()=>this.emitTo("pb-geolocation",{coordinates:{latitude:this.latitude,longitude:this.longitude},label:this.label,zoom:this.zoom,popup:this.popup,element:this,event:this.event})),this.auto&&this.waitForChannel(()=>{this.emitTo("pb-geolocation",{coordinates:{latitude:this.latitude,longitude:this.longitude},label:this.label,popup:this.popup,fitBounds:!0,element:this})})}render(){return t`<span id="content"><slot></slot></span>`}get popup(){const t=this.querySelector("template");if(t){const e=document.createElement("div");return e.appendChild(t.content.cloneNode(!0)),e}return null}static get styles(){return e`
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
    `}}customElements.define("pb-geolocation",id);class nd extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{initial:{type:Number},_instances:{type:Array}})}constructor(){super(),this.initial=1,this._instances=[]}connectedCallback(){super.connectedCallback();this.querySelector("template")&&this._add()}_computeInitial(t){const e=Object.keys(t).filter(t=>/\[\d+\]$/.test(t)).sort();if(e.length>0){const t=e[e.length-1].replace(/^.*\[(\d+)\]$/,"$1");this.initial=parseInt(t,10)}}setData(t){this._instances=[],this._computeInitial(t);for(let e=0;e<this.initial;e++)this._add(t);this.requestUpdate()}add(){this._add(),this.requestUpdate()}_add(t){const e=this.querySelector("template");if(!e||!e.content)return;const i=this._instances.length+1,n=document.importNode(e.content,!0),s=document.createElement("div");s.appendChild(n),s.querySelectorAll("[name]").forEach(e=>{const n=void 0===e.name?`${e.attributes.getNamedItem("name").nodeValue}[${i}]`:`${e.name}[${i}]`;t&&t[n]&&("checkbox"===e.type||"radio"===e.type?e.checked=t[n]===e.value:e.value=t[n]),e.name=n}),this._instances.push(s)}_renumber(){this._instances.forEach((t,e)=>{t.querySelectorAll("[name]").forEach(t=>{const i=t.name.replace(/^(.*)\[\d+\]$/,"$1");t.name=`${i}[${e+1}]`})})}delete(t){this._instances.splice(t,1),this._renumber(),this.requestUpdate()}render(){return t`
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
    </svg>`}createRenderRoot(){return this}}customElements.define("pb-repeat",nd);class sd extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{url:{type:String}})}constructor(){super(),this._pan=null}connectedCallback(){super.connectedCallback(),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("svg-pan-zoom","https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"),this.subscribeTo("pb-show-annotation",t=>{this.url!==t.detail.file&&(this.url=t.detail.file)})}firstUpdated(){super.firstUpdated(),this.container=this.shadowRoot.getElementById("image")}updated(t){t.has("url")&&this.url&&this.url!==t.get("url")&&this.load()}async load(){if(!this.url)return;const t=this.toAbsoluteURL(this.url);g.log("<pb-svg> Loading %s",t),this._pan&&(this._pan.destroy(),this._pan=null,this.container.innerHTML="");try{const e=await fetch(t),i=await e.text();if(!window.svgPanZoom)return void g.error("<pb-svg> svgPanZoom not available");const n=(new DOMParser).parseFromString(i,"image/svg+xml").documentElement;this.container.appendChild(n),this._pan=window.svgPanZoom(n,{controlIconsEnabled:!0,fit:!0,center:!0})}catch(t){g.error("<pb-svg> Error loading SVG: %o",t)}}render(){return t`<div id="image"></div>`}static get styles(){return e`
      :host {
        display: block;
      }

      #image svg {
        height: var(--pb-svg-height, 100%);
        width: var(--pb-svg-width, 100%);
      }
    `}}customElements.define("pb-svg",sd);class rd extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{endpoint:{type:String},label:{type:String},endpoints:{type:Array},auto:{type:Boolean}})}constructor(){super(),this.endpoints=[],this.label="dts.endpoint"}connectedCallback(){super.connectedCallback(),this.endpoint=v.state.endpoint,!this.endpoint&&this.auto&&this.endpoints.length>0&&(this.endpoint=this.endpoints[0].url)}updated(t){super.updated(t),t.has("endpoints")&&(Array.isArray(this.endpoints)||(this.endpoints=[]),!this.endpoint&&this.auto&&this.endpoints.length>0&&(this.endpoint=this.endpoints[0].url))}render(){return t`
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
    `}static get styles(){return e`
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
    `}_selected(t){const e=t.target.value;if(!e)return;const i=this.endpoints.find(t=>t.url===e),n=i?i.url:e;v.commit(this,{endpoint:n}),g.log("<dts-select-endpoint> Setting endpoint to %s",e),this.emitTo("dts-endpoint",{endpoint:n,collection:i?i.collection:void 0,reload:!this.endpoint}),this.endpoint=n}}customElements.define("dts-select-endpoint",rd);class od extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{baseUri:{type:String},data:{type:Object},collection:{type:String},page:{type:Number},perPage:{type:Number},_collectionEndpoint:{type:String}})}constructor(){super(),this._parentCollections=[],this.collection="default"}connectedCallback(){super.connectedCallback(),this.collection=v.state.id,this.page=v.state.page,this.subscribeTo("dts-endpoint",t=>{this._setEndpoint(t.detail.endpoint,t.detail.collection,t.detail.reload)}),this.subscribeTo("pb-load",t=>{this.page=t.detail.params.page,g.log("<dts-client> Loading page %d",this.page),this._update()})}firstUpdated(){super.firstUpdated(),this.queryAPI=this.shadowRoot.getElementById("queryAPI"),this.documentsAPI=this.shadowRoot.getElementById("documentsAPI"),this.signalReady()}_setEndpoint(t,e,i){i||(this.page=null),this.collection=e,this._configureEndpoint(t),this.baseUri=t}_configureEndpoint(t){t&&(g.log("<dts-client> initializing connection to endpoint %s",t),this.emitTo("pb-start-update"),this.queryAPI.url=t,this.queryAPI.generateRequest())}_navigate(t,e,i=!0){t.preventDefault(),i&&this._parentCollections.push(this.collection),this.collection=e&&"object"==typeof e?e["@id"]:e,this.page=null,g.log("<dts-client> navigating to collection %s",this.collection),this._update()}_navigateUp(t){0!==this._parentCollections.length&&this._navigate(t,this._parentCollections.pop(),!1)}_preview(t,e){t.preventDefault(),this.emitTo("pb-start-update");const i=e["dts:passage"]||e["dts:download"],n=new URL(i,this.baseUri).toString();g.log("<dts-client> downloading %s",n),this.lessThanApiVersion("1.0.0")?(this.documentsAPI.url=`${this.getEndpoint()}/modules/lib/dts.xql`,this.documentsAPI.params={preview:n,id:e["@id"]}):(this.documentsAPI.url=`${this.getEndpoint()}/api/dts/import`,this.documentsAPI.params={uri:n,temp:!0}),this.documentsAPI.generateRequest()}_download(t,e){this.emitTo("pb-start-update");const i=e["dts:passage"]||e["dts:download"],n=new URL(i,this.baseUri).toString();g.log("<dts-client> importing %s",n),this.lessThanApiVersion("1.0.0")?(this.documentsAPI.url=`${this.getEndpoint()}/modules/lib/dts.xql`,this.documentsAPI.params={import:n,id:e["@id"]}):(this.documentsAPI.url=`${this.getEndpoint()}/api/dts/import`,this.documentsAPI.params={uri:n,temp:!1}),this.documentsAPI.generateRequest()}_update(){this.emitTo("pb-start-update");const t={};this.collection&&(t.id=this.collection),this.page&&(t.page=this.page+1),v.commit(this,t),this.queryAPI.params=t,this.queryAPI.url=this._collectionEndpoint,this.queryAPI.generateRequest()}_handleResponse(){const t=this.queryAPI.lastResponse;"EntryPoint"===t["@type"]?(this._collectionEndpoint=new URL(t.collections,this.baseUri).toString(),g.log("<dts-client> configured collection endpoint: %s",this._collectionEndpoint),this._update()):(this.data=t,g.log("<dts-client> received collection data: %o",t),!this.page&&t.totalItems>t.member.length&&(this.perPage=t.member.length),this.emitTo("pb-results-received",{start:this.page&&this.page>0?this.page*this.perPage+1:1,count:t.totalItems})),this.emitTo("pb-end-update")}_handlePreview(){const t=this.documentsAPI.lastResponse;this.emitTo("pb-end-update");const e=new URL(t.path,window.location.href);window.location.replace(e)}_handleError(t){this.emitTo("pb-end-update");const e=t.target.lastError.response,i=(new DOMParser).parseFromString(e,"application/xml").querySelector("message"),n=document.getElementById("errorDialog"),s=n.querySelector("paper-dialog-scrollable");s.innerHTML=i?i.textContent:t.detail.error.message,n.open()}static _getCreator(t){const e=t["dts:dublincore"];return e?e["dc:creator"]:null}static _getLicense(t){const e=t["dts:dublincore"];return e?e["dc:license"]:null}render(){return t`
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
      `;const i=od._getLicense(e);return t`
      <pb-icon icon="icons:code" decorative></pb-icon>
      <div class="details">
        <div>
          <button @click="${t=>this._preview(t,e)}" part="link" type="button">
            <h4 part="title">${e.title}</h4>
          </button>
          <p part="creator" class="creator">${od._getCreator(e)}</p>
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
    `}static get styles(){return e`
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
    `}}customElements.define("dts-client",od);class ad extends n{static get properties(){return Object.assign(Object.assign({},super.properties),{},{user:{type:String},hash:{type:String},height:{type:Number},theme:{type:String},preview:{type:Boolean},editable:{type:Boolean}})}constructor(){super(),this.height=256,this.theme="light"}render(){let e=`height=${this.height}&theme-id=${this.theme}&default-tab=html,result`;this.editable&&(e=`${e}&editable=true`);const i=`https://codepen.io/${this.user}/embed/${this.preview?"preview/":""}${this.hash}?${e}`;return t`
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
    `}static get styles(){return e`
      :host {
        display: block;
      }

      iframe {
        width: 100%;
      }
    `}}function ld(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}customElements.define("pb-codepen",ad);var cd=ld();function dd(t){cd=t}var pd={exec:()=>null};function ud(t,e=""){let i="string"==typeof t?t:t.source,n={replace:(t,e)=>{let s="string"==typeof e?e:e.source;return s=s.replace(gd.caret,"$1"),i=i.replace(t,s),n},getRegex:()=>new RegExp(i,e)};return n}var hd=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),gd={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[\t ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},fd=/^(?:[ \t]*(?:\n|$))+/,md=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,bd=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,yd=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,vd=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,_d=/(?:[*+-]|\d{1,9}[.)])/,wd=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,xd=ud(wd).replace(/bull/g,_d).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),kd=ud(wd).replace(/bull/g,_d).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ad=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Sd=/^[^\n]+/,Od=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Ed=ud(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Od).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),$d=ud(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,_d).getRegex(),Cd="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Td=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Id=ud("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))","i").replace("comment",Td).replace("tag",Cd).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ld=ud(Ad).replace("hr",yd).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cd).getRegex(),Rd={blockquote:ud(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ld).getRegex(),code:md,def:Ed,fences:bd,heading:vd,hr:yd,html:Id,lheading:xd,list:$d,newline:fd,paragraph:Ld,table:pd,text:Sd},jd=ud("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",yd).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}\t)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cd).getRegex(),Nd=Object.assign(Object.assign({},Rd),{},{lheading:kd,table:jd,paragraph:ud(Ad).replace("hr",yd).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",jd).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cd).getRegex()}),Pd=Object.assign(Object.assign({},Rd),{},{html:ud("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Td).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:pd,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ud(Ad).replace("hr",yd).replace("heading"," *#{1,6} *[^\n]").replace("lheading",xd).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()}),Dd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Fd=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Bd=/^( {2,}|\\)\n(?!\s*$)/,Md=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,qd=/[\p{P}\p{S}]/u,zd=/[\s\p{P}\p{S}]/u,Ud=/[^\s\p{P}\p{S}]/u,Hd=ud(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,zd).getRegex(),Vd=/(?!~)[\p{P}\p{S}]/u,Wd=/(?!~)[\s\p{P}\p{S}]/u,Gd=/(?:[^\s\p{P}\p{S}]|~)/u,Yd=ud(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",hd?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Qd=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Kd=ud(Qd,"u").replace(/punct/g,qd).getRegex(),Jd=ud(Qd,"u").replace(/punct/g,Vd).getRegex(),Zd="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Xd=ud(Zd,"gu").replace(/notPunctSpace/g,Ud).replace(/punctSpace/g,zd).replace(/punct/g,qd).getRegex(),tp=ud(Zd,"gu").replace(/notPunctSpace/g,Gd).replace(/punctSpace/g,Wd).replace(/punct/g,Vd).getRegex(),ep=ud("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ud).replace(/punctSpace/g,zd).replace(/punct/g,qd).getRegex(),ip=ud(/\\(punct)/,"gu").replace(/punct/g,qd).getRegex(),np=ud(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),sp=ud(Td).replace("(?:--\x3e|$)","--\x3e").getRegex(),rp=ud("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",sp).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),op=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,ap=ud(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",op).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),lp=ud(/^!?\[(label)\]\[(ref)\]/).replace("label",op).replace("ref",Od).getRegex(),cp=ud(/^!?\[(ref)\](?:\[\])?/).replace("ref",Od).getRegex(),dp=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,pp={_backpedal:pd,anyPunctuation:ip,autolink:np,blockSkip:Yd,br:Bd,code:Fd,del:pd,emStrongLDelim:Kd,emStrongRDelimAst:Xd,emStrongRDelimUnd:ep,escape:Dd,link:ap,nolink:cp,punctuation:Hd,reflink:lp,reflinkSearch:ud("reflink|nolink(?!\\()","g").replace("reflink",lp).replace("nolink",cp).getRegex(),tag:rp,text:Md,url:pd},up=Object.assign(Object.assign({},pp),{},{link:ud(/^!?\[(label)\]\((.*?)\)/).replace("label",op).getRegex(),reflink:ud(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",op).getRegex()}),hp=Object.assign(Object.assign({},pp),{},{emStrongRDelimAst:tp,emStrongLDelim:Jd,url:ud(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",dp).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ud(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",dp).getRegex()}),gp=Object.assign(Object.assign({},hp),{},{br:ud(Bd).replace("{2,}","*").getRegex(),text:ud(hp.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),fp={normal:Rd,gfm:Nd,pedantic:Pd},mp={normal:pp,gfm:hp,breaks:gp,pedantic:up},bp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},yp=t=>bp[t];function vp(t,e){if(e){if(gd.escapeTest.test(t))return t.replace(gd.escapeReplace,yp)}else if(gd.escapeTestNoEncode.test(t))return t.replace(gd.escapeReplaceNoEncode,yp);return t}function _p(t){try{t=encodeURI(t).replace(gd.percentDecode,"%")}catch{return null}return t}function wp(t,e){var i;let n=t.replace(gd.findPipe,(t,e,i)=>{let n=!1,s=e;for(;--s>=0&&"\\"===i[s];)n=!n;return n?"|":" |"}),s=n.split(gd.splitPipe),r=0;if(s[0].trim()||s.shift(),s.length>0&&!(null!==(i=s.at(-1))&&void 0!==i&&i.trim())&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(gd.slashPipe,"|");return s}function xp(t,e,i){let n=t.length;if(0===n)return"";let s=0;for(;s<n;){if(t.charAt(n-s-1)!==e)break;s++}return t.slice(0,n-s)}function kp(t,e){if(-1===t.indexOf(e[1]))return-1;let i=0;for(let n=0;n<t.length;n++)if("\\"===t[n])n++;else if(t[n]===e[0])i++;else if(t[n]===e[1]&&(i--,i<0))return n;return i>0?-2:-1}function Ap(t,e,i,n,s){let r=e.href,o=e.title||null,a=t[1].replace(s.other.outputLinkReplace,"$1");n.state.inLink=!0;let l={type:"!"===t[0].charAt(0)?"image":"link",raw:i,href:r,title:o,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,l}function Sp(t,e,i){let n=t.match(i.other.indentCodeCompensation);if(null===n)return e;let s=n[1];return e.split("\n").map(t=>{let e=t.match(i.other.beginningSpace);if(null===e)return t;let[n]=e;return n.length>=s.length?t.slice(s.length):t}).join("\n")}var Op=class{options;rules;lexer;constructor(t){this.options=t||cd}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:xp(t,"\n")}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let t=e[0],i=Sp(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let e=xp(t,"#");(this.options.pedantic||!e||this.rules.other.endingSpaceChar.test(e))&&(t=e.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:xp(e[0],"\n")}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let t=xp(e[0],"\n").split("\n"),i="",n="",s=[];for(;t.length>0;){let e,r=!1,o=[];for(e=0;e<t.length;e++)if(this.rules.other.blockquoteStart.test(t[e]))o.push(t[e]),r=!0;else{if(r)break;o.push(t[e])}t=t.slice(e);let a=o.join("\n"),l=a.replace(this.rules.other.blockquoteSetextReplace,"\n    $1").replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}\n${a}`:a,n=n?`${n}\n${l}`:l;let c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(l,s,!0),this.lexer.state.top=c,0===t.length)break;let d=s.at(-1);if("code"===(null==d?void 0:d.type))break;if("blockquote"===(null==d?void 0:d.type)){let e=d,r=e.raw+"\n"+t.join("\n"),o=this.blockquote(r);s[s.length-1]=o,i=i.substring(0,i.length-e.raw.length)+o.raw,n=n.substring(0,n.length-e.text.length)+o.text;break}if("list"===(null==d?void 0:d.type)){let e=d,r=e.raw+"\n"+t.join("\n"),o=this.list(r);s[s.length-1]=o,i=i.substring(0,i.length-d.raw.length)+o.raw,n=n.substring(0,n.length-e.raw.length)+o.raw,t=r.substring(s.at(-1).raw.length).split("\n");continue}}return{type:"blockquote",raw:i,tokens:s,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let s=e[1].trim(),r=s.length>1,o={type:"list",raw:"",ordered:r,start:r?+s.slice(0,-1):"",loose:!1,items:[]};s=r?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=r?s:"[*+-]");let a=this.rules.other.listItemRegex(s),l=!1;for(;t;){let i=!1,n="",s="";if(!(e=a.exec(t))||this.rules.block.hr.test(t))break;n=e[0],t=t.substring(n.length);let r=e[2].split("\n",1)[0].replace(this.rules.other.listReplaceTabs,t=>" ".repeat(3*t.length)),c=t.split("\n",1)[0],d=!r.trim(),p=0;if(this.options.pedantic?(p=2,s=r.trimStart()):d?p=e[1].length+1:(p=e[2].search(this.rules.other.nonSpaceChar),p=p>4?1:p,s=r.slice(p),p+=e[1].length),d&&this.rules.other.blankLine.test(c)&&(n+=c+"\n",t=t.substring(c.length+1),i=!0),!i){let e=this.rules.other.nextBulletRegex(p),i=this.rules.other.hrRegex(p),o=this.rules.other.fencesBeginRegex(p),a=this.rules.other.headingBeginRegex(p),l=this.rules.other.htmlBeginRegex(p);for(;t;){let u,h=t.split("\n",1)[0];if(c=h,this.options.pedantic?(c=c.replace(this.rules.other.listReplaceNesting,"  "),u=c):u=c.replace(this.rules.other.tabCharGlobal,"    "),o.test(c)||a.test(c)||l.test(c)||e.test(c)||i.test(c))break;if(u.search(this.rules.other.nonSpaceChar)>=p||!c.trim())s+="\n"+u.slice(p);else{if(d||r.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||o.test(r)||a.test(r)||i.test(r))break;s+="\n"+c}!d&&!c.trim()&&(d=!0),n+=h+"\n",t=t.substring(h.length+1),r=u.slice(p)}}o.loose||(l?o.loose=!0:this.rules.other.doubleBlankLine.test(n)&&(l=!0)),o.items.push({type:"list_item",raw:n,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),o.raw+=n}let c=o.items.at(-1);if(!c)return;c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd(),o.raw=o.raw.trimEnd();for(let t of o.items){if(this.lexer.state.top=!1,t.tokens=this.lexer.blockTokens(t.text,[]),t.task){var i,n;if(t.text=t.text.replace(this.rules.other.listReplaceTask,""),"text"===(null===(i=t.tokens[0])||void 0===i?void 0:i.type)||"paragraph"===(null===(n=t.tokens[0])||void 0===n?void 0:n.type)){t.tokens[0].raw=t.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),t.tokens[0].text=t.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let t=this.lexer.inlineQueue.length-1;t>=0;t--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[t].src)){this.lexer.inlineQueue[t].src=this.lexer.inlineQueue[t].src.replace(this.rules.other.listReplaceTask,"");break}}let e=this.rules.other.listTaskCheckbox.exec(t.raw);if(e){let i={type:"checkbox",raw:e[0]+" ",checked:"[ ]"!==e[0]};t.checked=i.checked,o.loose?t.tokens[0]&&["paragraph","text"].includes(t.tokens[0].type)&&"tokens"in t.tokens[0]&&t.tokens[0].tokens?(t.tokens[0].raw=i.raw+t.tokens[0].raw,t.tokens[0].text=i.raw+t.tokens[0].text,t.tokens[0].tokens.unshift(i)):t.tokens.unshift({type:"paragraph",raw:i.raw,text:i.raw,tokens:[i]}):t.tokens.unshift(i)}}if(!o.loose){let e=t.tokens.filter(t=>"space"===t.type),i=e.length>0&&e.some(t=>this.rules.other.anyLine.test(t.raw));o.loose=i}}if(o.loose)for(let t of o.items){t.loose=!0;for(let e of t.tokens)"text"===e.type&&(e.type="paragraph")}return o}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:"pre"===e[1]||"script"===e[1]||"style"===e[1],text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:i,title:n}}}table(t){var e;let i=this.rules.block.table.exec(t);if(!i||!this.rules.other.tableDelimiter.test(i[2]))return;let n=wp(i[1]),s=i[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=null!==(e=i[3])&&void 0!==e&&e.trim()?i[3].replace(this.rules.other.tableRowBlankLine,"").split("\n"):[],o={type:"table",raw:i[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let t of s)this.rules.other.tableAlignRight.test(t)?o.align.push("right"):this.rules.other.tableAlignCenter.test(t)?o.align.push("center"):this.rules.other.tableAlignLeft.test(t)?o.align.push("left"):o.align.push(null);for(let t=0;t<n.length;t++)o.header.push({text:n[t],tokens:this.lexer.inline(n[t]),header:!0,align:o.align[t]});for(let t of r)o.rows.push(wp(t,o.header.length).map((t,e)=>({text:t,tokens:this.lexer.inline(t),header:!1,align:o.align[e]})));return o}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:"="===e[2].charAt(0)?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let t="\n"===e[1].charAt(e[1].length-1)?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let e=xp(t.slice(0,-1),"\\");if((t.length-e.length)%2==0)return}else{let t=kp(e[2],"()");if(-2===t)return;if(t>-1){let i=(0===e[0].indexOf("!")?5:4)+e[1].length+t;e[2]=e[2].substring(0,t),e[0]=e[0].substring(0,i).trim(),e[3]=""}}let i=e[2],n="";if(this.options.pedantic){let t=this.rules.other.pedanticHrefTitle.exec(i);t&&(i=t[1],n=t[3])}else n=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?i.slice(1):i.slice(1,-1)),Ap(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let i;if((i=this.rules.inline.reflink.exec(t))||(i=this.rules.inline.nolink.exec(t))){let t=e[(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!t){let t=i[0].charAt(0);return{type:"text",raw:t,text:t}}return Ap(i,t,i[0],this.lexer,this.rules)}}emStrong(t,e,i=""){let n=this.rules.inline.emStrongLDelim.exec(t);if(!(!n||n[3]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!n[1]&&!n[2]||!i||this.rules.inline.punctuation.exec(i))){let i,s,r=[...n[0]].length-1,o=r,a=0,l="*"===n[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(l.lastIndex=0,e=e.slice(-1*t.length+r);null!=(n=l.exec(e));){if(i=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!i)continue;if(s=[...i].length,n[3]||n[4]){o+=s;continue}if((n[5]||n[6])&&r%3&&!((r+s)%3)){a+=s;continue}if(o-=s,o>0)continue;s=Math.min(s,s+o+a);let e=[...n[0]][0].length,l=t.slice(0,r+n.index+e+s);if(Math.min(r,s)%2){let t=l.slice(1,-1);return{type:"em",raw:l,text:t,tokens:this.lexer.inlineTokens(t)}}let c=l.slice(2,-2);return{type:"strong",raw:l,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(t),n=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return i&&n&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let t,i;return"@"===e[2]?(t=e[1],i="mailto:"+t):(t=e[1],i=t),{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let t,n;if("@"===e[2])t=e[0],n="mailto:"+t;else{let s;do{var i;s=e[0],e[0]=(null===(i=this.rules.inline._backpedal.exec(e[0]))||void 0===i?void 0:i[0])??""}while(s!==e[0]);t=e[0],n="www."===e[1]?"http://"+e[0]:e[0]}return{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},Ep=class t{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||cd,this.options.tokenizer=this.options.tokenizer||new Op,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let e={other:gd,block:fp.normal,inline:mp.normal};this.options.pedantic?(e.block=fp.pedantic,e.inline=mp.pedantic):this.options.gfm&&(e.block=fp.gfm,this.options.breaks?e.inline=mp.breaks:e.inline=mp.gfm),this.tokenizer.rules=e}static get rules(){return{block:fp,inline:mp}}static lex(e,i){return new t(i).lex(e)}static lexInline(e,i){return new t(i).inlineTokens(e)}lex(t){t=t.replace(gd.carriageReturn,"\n"),this.blockTokens(t,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let e=this.inlineQueue[t];this.inlineTokens(e.src,e.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,e=[],i=!1){for(this.options.pedantic&&(t=t.replace(gd.tabCharGlobal,"    ").replace(gd.spaceLine,""));t;){var n,s;let r;if(null!==(n=this.options.extensions)&&void 0!==n&&null!==(n=n.block)&&void 0!==n&&n.some(i=>!!(r=i.call({lexer:this},t,e))&&(t=t.substring(r.raw.length),e.push(r),!0)))continue;if(r=this.tokenizer.space(t)){t=t.substring(r.raw.length);let i=e.at(-1);1===r.raw.length&&void 0!==i?i.raw+="\n":e.push(r);continue}if(r=this.tokenizer.code(t)){t=t.substring(r.raw.length);let i=e.at(-1);"paragraph"===(null==i?void 0:i.type)||"text"===(null==i?void 0:i.type)?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+r.raw,i.text+="\n"+r.text,this.inlineQueue.at(-1).src=i.text):e.push(r);continue}if(r=this.tokenizer.fences(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.heading(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.hr(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.blockquote(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.list(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.html(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.def(t)){t=t.substring(r.raw.length);let i=e.at(-1);"paragraph"===(null==i?void 0:i.type)||"text"===(null==i?void 0:i.type)?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+r.raw,i.text+="\n"+r.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},e.push(r));continue}if(r=this.tokenizer.table(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.lheading(t)){t=t.substring(r.raw.length),e.push(r);continue}let o=t;if(null!==(s=this.options.extensions)&&void 0!==s&&s.startBlock){let e,i=1/0,n=t.slice(1);this.options.extensions.startBlock.forEach(t=>{e=t.call({lexer:this},n),"number"==typeof e&&e>=0&&(i=Math.min(i,e))}),i<1/0&&i>=0&&(o=t.substring(0,i+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){let n=e.at(-1);i&&"paragraph"===(null==n?void 0:n.type)?(n.raw+=(n.raw.endsWith("\n")?"":"\n")+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):e.push(r),i=o.length!==t.length,t=t.substring(r.raw.length);continue}if(r=this.tokenizer.text(t)){t=t.substring(r.raw.length);let i=e.at(-1);"text"===(null==i?void 0:i.type)?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+r.raw,i.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):e.push(r);continue}if(t){let e="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(e);break}throw new Error(e)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){var i;let n,s=t,r=null;if(this.tokens.links){let t=Object.keys(this.tokens.links);if(t.length>0)for(;null!=(r=this.tokenizer.rules.inline.reflinkSearch.exec(s));)t.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(r=this.tokenizer.rules.inline.anyPunctuation.exec(s));)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(r=this.tokenizer.rules.inline.blockSkip.exec(s));)n=r[2]?r[2].length:0,s=s.slice(0,r.index+n)+"["+"a".repeat(r[0].length-n-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=(null===(i=this.options.hooks)||void 0===i||null===(i=i.emStrongMask)||void 0===i?void 0:i.call({lexer:this},s))??s;let o=!1,a="";for(;t;){var l,c;let i;if(o||(a=""),o=!1,null!==(l=this.options.extensions)&&void 0!==l&&null!==(l=l.inline)&&void 0!==l&&l.some(n=>!!(i=n.call({lexer:this},t,e))&&(t=t.substring(i.raw.length),e.push(i),!0)))continue;if(i=this.tokenizer.escape(t)){t=t.substring(i.raw.length),e.push(i);continue}if(i=this.tokenizer.tag(t)){t=t.substring(i.raw.length),e.push(i);continue}if(i=this.tokenizer.link(t)){t=t.substring(i.raw.length),e.push(i);continue}if(i=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(i.raw.length);let n=e.at(-1);"text"===i.type&&"text"===(null==n?void 0:n.type)?(n.raw+=i.raw,n.text+=i.text):e.push(i);continue}if(i=this.tokenizer.emStrong(t,s,a)){t=t.substring(i.raw.length),e.push(i);continue}if(i=this.tokenizer.codespan(t)){t=t.substring(i.raw.length),e.push(i);continue}if(i=this.tokenizer.br(t)){t=t.substring(i.raw.length),e.push(i);continue}if(i=this.tokenizer.del(t)){t=t.substring(i.raw.length),e.push(i);continue}if(i=this.tokenizer.autolink(t)){t=t.substring(i.raw.length),e.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(t))){t=t.substring(i.raw.length),e.push(i);continue}let n=t;if(null!==(c=this.options.extensions)&&void 0!==c&&c.startInline){let e,i=1/0,s=t.slice(1);this.options.extensions.startInline.forEach(t=>{e=t.call({lexer:this},s),"number"==typeof e&&e>=0&&(i=Math.min(i,e))}),i<1/0&&i>=0&&(n=t.substring(0,i+1))}if(i=this.tokenizer.inlineText(n)){t=t.substring(i.raw.length),"_"!==i.raw.slice(-1)&&(a=i.raw.slice(-1)),o=!0;let n=e.at(-1);"text"===(null==n?void 0:n.type)?(n.raw+=i.raw,n.text+=i.text):e.push(i);continue}if(t){let e="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(e);break}throw new Error(e)}}return e}},$p=class{options;parser;constructor(t){this.options=t||cd}space(t){return""}code({text:t,lang:e,escaped:i}){var n;let s=null===(n=(e||"").match(gd.notSpaceStart))||void 0===n?void 0:n[0],r=t.replace(gd.endingNewline,"")+"\n";return s?'<pre><code class="language-'+vp(s)+'">'+(i?r:vp(r,!0))+"</code></pre>\n":"<pre><code>"+(i?r:vp(r,!0))+"</code></pre>\n"}blockquote({tokens:t}){return`<blockquote>\n${this.parser.parse(t)}</blockquote>\n`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>\n`}hr(t){return"<hr>\n"}list(t){let e=t.ordered,i=t.start,n="";for(let e=0;e<t.items.length;e++){let i=t.items[e];n+=this.listitem(i)}let s=e?"ol":"ul";return"<"+s+(e&&1!==i?' start="'+i+'"':"")+">\n"+n+"</"+s+">\n"}listitem(t){return`<li>${this.parser.parse(t.tokens)}</li>\n`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>\n`}table(t){let e="",i="";for(let e=0;e<t.header.length;e++)i+=this.tablecell(t.header[e]);e+=this.tablerow({text:i});let n="";for(let e=0;e<t.rows.length;e++){let s=t.rows[e];i="";for(let t=0;t<s.length;t++)i+=this.tablecell(s[t]);n+=this.tablerow({text:i})}return n&&(n=`<tbody>${n}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+n+"</table>\n"}tablerow({text:t}){return`<tr>\n${t}</tr>\n`}tablecell(t){let e=this.parser.parseInline(t.tokens),i=t.header?"th":"td";return(t.align?`<${i} align="${t.align}">`:`<${i}>`)+e+`</${i}>\n`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${vp(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:i}){let n=this.parser.parseInline(i),s=_p(t);if(null===s)return n;let r='<a href="'+(t=s)+'"';return e&&(r+=' title="'+vp(e)+'"'),r+=">"+n+"</a>",r}image({href:t,title:e,text:i,tokens:n}){n&&(i=this.parser.parseInline(n,this.parser.textRenderer));let s=_p(t);if(null===s)return vp(i);let r=`<img src="${t=s}" alt="${i}"`;return e&&(r+=` title="${vp(e)}"`),r+=">",r}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:vp(t.text)}},Cp=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},Tp=class t{options;renderer;textRenderer;constructor(t){this.options=t||cd,this.options.renderer=this.options.renderer||new $p,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Cp}static parse(e,i){return new t(i).parse(e)}static parseInline(e,i){return new t(i).parseInline(e)}parse(t){let e="";for(let n=0;n<t.length;n++){var i;let s=t[n];if(null!==(i=this.options.extensions)&&void 0!==i&&null!==(i=i.renderers)&&void 0!==i&&i[s.type]){let t=s,i=this.options.extensions.renderers[t.type].call({parser:this},t);if(!1!==i||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(t.type)){e+=i||"";continue}}let r=s;switch(r.type){case"space":e+=this.renderer.space(r);break;case"hr":e+=this.renderer.hr(r);break;case"heading":e+=this.renderer.heading(r);break;case"code":e+=this.renderer.code(r);break;case"table":e+=this.renderer.table(r);break;case"blockquote":e+=this.renderer.blockquote(r);break;case"list":e+=this.renderer.list(r);break;case"checkbox":e+=this.renderer.checkbox(r);break;case"html":e+=this.renderer.html(r);break;case"def":e+=this.renderer.def(r);break;case"paragraph":e+=this.renderer.paragraph(r);break;case"text":e+=this.renderer.text(r);break;default:{let t='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(t),"";throw new Error(t)}}}return e}parseInline(t,e=this.renderer){let i="";for(let s=0;s<t.length;s++){var n;let r=t[s];if(null!==(n=this.options.extensions)&&void 0!==n&&null!==(n=n.renderers)&&void 0!==n&&n[r.type]){let t=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==t||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){i+=t||"";continue}}let o=r;switch(o.type){case"escape":case"text":i+=e.text(o);break;case"html":i+=e.html(o);break;case"link":i+=e.link(o);break;case"image":i+=e.image(o);break;case"checkbox":i+=e.checkbox(o);break;case"strong":i+=e.strong(o);break;case"em":i+=e.em(o);break;case"codespan":i+=e.codespan(o);break;case"br":i+=e.br(o);break;case"del":i+=e.del(o);break;default:{let t='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(t),"";throw new Error(t)}}}return i}},Ip=class{options;block;constructor(t){this.options=t||cd}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?Ep.lex:Ep.lexInline}provideParser(){return this.block?Tp.parse:Tp.parseInline}},Lp=class{defaults=ld();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Tp;Renderer=$p;TextRenderer=Cp;Lexer=Ep;Tokenizer=Op;Hooks=Ip;constructor(...t){this.use(...t)}walkTokens(t,e){let i=[];for(let s of t)switch(i=i.concat(e.call(this,s)),s.type){case"table":{let t=s;for(let n of t.header)i=i.concat(this.walkTokens(n.tokens,e));for(let n of t.rows)for(let t of n)i=i.concat(this.walkTokens(t.tokens,e));break}case"list":{let t=s;i=i.concat(this.walkTokens(t.items,e));break}default:{var n;let t=s;null!==(n=this.defaults.extensions)&&void 0!==n&&null!==(n=n.childTokens)&&void 0!==n&&n[t.type]?this.defaults.extensions.childTokens[t.type].forEach(n=>{let s=t[n].flat(1/0);i=i.concat(this.walkTokens(s,e))}):t.tokens&&(i=i.concat(this.walkTokens(t.tokens,e)))}}return i}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(t=>{let i=Object.assign({},t);if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(t=>{if(!t.name)throw new Error("extension name required");if("renderer"in t){let i=e.renderers[t.name];e.renderers[t.name]=i?function(...e){let n=t.renderer.apply(this,e);return!1===n&&(n=i.apply(this,e)),n}:t.renderer}if("tokenizer"in t){if(!t.level||"block"!==t.level&&"inline"!==t.level)throw new Error("extension level must be 'block' or 'inline'");let i=e[t.level];i?i.unshift(t.tokenizer):e[t.level]=[t.tokenizer],t.start&&("block"===t.level?e.startBlock?e.startBlock.push(t.start):e.startBlock=[t.start]:"inline"===t.level&&(e.startInline?e.startInline.push(t.start):e.startInline=[t.start]))}"childTokens"in t&&t.childTokens&&(e.childTokens[t.name]=t.childTokens)}),i.extensions=e),t.renderer){let e=this.defaults.renderer||new $p(this.defaults);for(let i in t.renderer){if(!(i in e))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let n=i,s=t.renderer[n],r=e[n];e[n]=(...t)=>{let i=s.apply(e,t);return!1===i&&(i=r.apply(e,t)),i||""}}i.renderer=e}if(t.tokenizer){let e=this.defaults.tokenizer||new Op(this.defaults);for(let i in t.tokenizer){if(!(i in e))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let n=i,s=t.tokenizer[n],r=e[n];e[n]=(...t)=>{let i=s.apply(e,t);return!1===i&&(i=r.apply(e,t)),i}}i.tokenizer=e}if(t.hooks){let e=this.defaults.hooks||new Ip;for(let i in t.hooks){if(!(i in e))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let n=i,s=t.hooks[n],r=e[n];Ip.passThroughHooks.has(i)?e[n]=t=>{if(this.defaults.async&&Ip.passThroughHooksRespectAsync.has(i))return(async()=>{let i=await s.call(e,t);return r.call(e,i)})();let n=s.call(e,t);return r.call(e,n)}:e[n]=(...t)=>{if(this.defaults.async)return(async()=>{let i=await s.apply(e,t);return!1===i&&(i=await r.apply(e,t)),i})();let i=s.apply(e,t);return!1===i&&(i=r.apply(e,t)),i}}i.hooks=e}if(t.walkTokens){let e=this.defaults.walkTokens,n=t.walkTokens;i.walkTokens=function(t){let i=[];return i.push(n.call(this,t)),e&&(i=i.concat(e.call(this,t))),i}}this.defaults=Object.assign(Object.assign({},this.defaults),i)}),this}setOptions(t){return this.defaults=Object.assign(Object.assign({},this.defaults),t),this}lexer(t,e){return Ep.lex(t,e??this.defaults)}parser(t,e){return Tp.parse(t,e??this.defaults)}parseMarkdown(t){return(e,i)=>{let n=Object.assign({},i),s=Object.assign(Object.assign({},this.defaults),n),r=this.onError(!!s.silent,!!s.async);if(!0===this.defaults.async&&!1===n.async)return r(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||null===e)return r(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof e)return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=t),s.async)return(async()=>{let i=s.hooks?await s.hooks.preprocess(e):e,n=await(s.hooks?await s.hooks.provideLexer():t?Ep.lex:Ep.lexInline)(i,s),r=s.hooks?await s.hooks.processAllTokens(n):n;s.walkTokens&&await Promise.all(this.walkTokens(r,s.walkTokens));let o=await(s.hooks?await s.hooks.provideParser():t?Tp.parse:Tp.parseInline)(r,s);return s.hooks?await s.hooks.postprocess(o):o})().catch(r);try{s.hooks&&(e=s.hooks.preprocess(e));let i=(s.hooks?s.hooks.provideLexer():t?Ep.lex:Ep.lexInline)(e,s);s.hooks&&(i=s.hooks.processAllTokens(i)),s.walkTokens&&this.walkTokens(i,s.walkTokens);let n=(s.hooks?s.hooks.provideParser():t?Tp.parse:Tp.parseInline)(i,s);return s.hooks&&(n=s.hooks.postprocess(n)),n}catch(t){return r(t)}}}onError(t,e){return i=>{if(i.message+="\nPlease report this to https://github.com/markedjs/marked.",t){let t="<p>An error occurred:</p><pre>"+vp(i.message+"",!0)+"</pre>";return e?Promise.resolve(t):t}if(e)return Promise.reject(i);throw i}}},Rp=new Lp;function jp(t,e){return Rp.parse(t,e)}jp.options=jp.setOptions=function(t){return Rp.setOptions(t),jp.defaults=Rp.defaults,dd(jp.defaults),jp},jp.getDefaults=ld,jp.defaults=cd,jp.use=function(...t){return Rp.use(...t),jp.defaults=Rp.defaults,dd(jp.defaults),jp},jp.walkTokens=function(t,e){return Rp.walkTokens(t,e)},jp.parseInline=Rp.parseInline,jp.Parser=Tp,jp.parser=Tp.parse,jp.Renderer=$p,jp.TextRenderer=Cp,jp.Lexer=Ep,jp.lexer=Ep.lex,jp.Tokenizer=Op,jp.Hooks=Ip,jp.parse=jp,jp.options,jp.setOptions,jp.use,jp.walkTokens,jp.parseInline,Tp.parse,Ep.lex;const Np={code:(t,e,i)=>`<pb-code-highlight language="${t.lang||e||"undefined"}" line-numbers>\n      <template>${t.text||t}</template>\n  </pb-code-highlight>`};function Pp(t){const e=t.match(/^[^\S]*(?=\S)/gm);return e&&e[0].length?(e.sort((t,e)=>t.length-e.length),e[0].length?t.replace(RegExp(`^${e[0]}`,"gm"),""):t):t}jp.use({renderer:Np});class Dp extends(s(n)){static get properties(){return Object.assign({content:{type:String},url:{type:String}},super.properties)}constructor(){super(),this._url=null}set url(t){this._url=t,r("pb-page-ready",t=>{this._load(t.endpoint)})}connectedCallback(){if(super.connectedCallback(),this.style.display="block",!this.content){const t=document.createElement("div");for(let e=0;e<this.childNodes.length;e++){const i=this.childNodes[e];t.appendChild(document.importNode(i.content||i,!0))}this.content=Pp(t.innerHTML)}this.subscribeTo("pb-zoom",t=>{this.zoom(t.detail.direction)})}async _load(t){const e=this.toAbsoluteURL(this._url,t);try{const t=await fetch(e,{credentials:"same-origin"}),i=await t.text();this.content=i}catch{g.error("<pb-markdown> failed to load content from %s",e.toString())}}createRenderRoot(){return this}render(){if(!this.content)return null;const e=jp.parse(this.content),i=w(e);return t`<div>${_(i)}</div>`}static get styles(){return e`
      :host {
        display: block;
        font-size: calc(var(--pb-content-font-size, 1rem) * var(--pb-zoom-factor, 1));
      }
    `}zoom(t){}}customElements.define("pb-markdown",Dp);const Fp=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){const e=t.target;e.emitTo("pb-visible",{data:e.data})}})});class Bp extends(s(n)){static get properties(){return Object.assign({data:{type:String}},super.properties)}disconnectedCallback(){super.disconnectedCallback(),Fp&&Fp.unobserve(this)}firstUpdated(){Fp.observe(this)}render(){return t`<slot></slot>`}static get styles(){return e`
      :host {
        display: inline;
      }
    `}}customElements.define("pb-observable",Bp);let Mp=0;class qp extends(s(n)){static get properties(){return Object.assign({label:{type:String},value:{type:String,reflect:!0},values:{type:Array,reflect:!0},name:{type:String},source:{type:String},multi:{type:Boolean},_items:{type:Array},_selected:{type:Array}},super.properties)}constructor(){super(),this.value=null,this.values=[],this._items=[],this._selected=[],this._controlId="pb-select-"+ ++Mp}connectedCallback(){if(super.connectedCallback(),this.subscribeTo("pb-i18n-update",this._refresh.bind(this)),this.multi){if("string"==typeof this.values)try{this.values=JSON.parse(this.values)}catch(t){this.values=this.values.split(",").map(t=>t.trim())}Array.isArray(this.values)||(this.values=[]),0===this.values.length&&this.value&&(this.values=[this.value]),this.value=void 0,this._selected=[...this.values]}}firstUpdated(){super.firstUpdated();const t=this.shadowRoot.querySelector('[name="subform"]');t&&t.assignedNodes().forEach(t=>{this.name&&t.addEventListener("change",this._loadRemote.bind(this));t.querySelectorAll("[name]").forEach(t=>{t.addEventListener("change",this._loadRemote.bind(this))})}),r("pb-page-ready",()=>{this._loadRemote()}),this._syncHiddenInputs()}updated(t){(t.has("value")||t.has("values"))&&(this.multi&&!Array.isArray(this.values)&&(this.values="string"==typeof this.values?[this.values]:[]),this._syncHiddenInputs())}_refresh(){this.requestUpdate()}_clear(t){const e=this.shadowRoot.querySelector(t);e&&e.assignedNodes().forEach(t=>{t.parentNode.removeChild(t)})}_loadRemote(){if(!this.source)return;let t=this.toAbsoluteURL(this.source);t+=t.includes("?")?"&":"?",t+=this._getParameters(),g.log("<pb-select> loading items from %s",t),(async()=>{try{const e=await fetch(t,{method:"GET",mode:"cors",credentials:"same-origin"}),i=await e.json();this._clear("slot:not([name])");const n=i.map(qp.jsonEntry2item);g.log("<pb-select> loaded %d items",n.length),this._items=n}catch{g.error("<pb-select> request to %s failed",t)}})()}static jsonEntry2item(t){return{label:t.text,value:t.value}}_getParameters(){const t=this.shadowRoot.querySelector('[name="subform"]'),e=[];return t&&t.assignedNodes().forEach(t=>{t.querySelectorAll("[name]").forEach(t=>{e.push(`${t.name}=${encodeURIComponent(t.value)}`)})}),e.join("&")}render(){return t`
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
    `}_changed(t){if(!this.multi){const t=this.shadowRoot.getElementById(`${this._controlId}-single`);if(!t)return;return this._selected=[t.value],this.value=t.value,this._syncHiddenInputs(),void this.dispatchEvent(new CustomEvent("change"))}const e=this.shadowRoot.querySelectorAll(".pb-select__checkbox"),i=[];e.forEach(t=>{t.checked&&i.push(t.value)});const n=Array.isArray(this._selected)?Array.from(this._selected):[];this._selected=i,this.values=[...i],this._selected.length===n.length&&this._selected.every((t,e)=>t===n[e])||(this._syncHiddenInputs(),this.dispatchEvent(new CustomEvent("change")))}_renderSelectOptions(){const e=[...this._getSlottedItems(),...this._items];return e.some(t=>t&&""===t.value)||e.unshift({value:"",label:""}),e.filter(Boolean).map(e=>t`<option value="${e.value}">${e.label}</option>`)}_renderOptionsList(){const e=Array.isArray(this.values)?this.values:[];return[...this._getSlottedItems(),...this._items].map(i=>{if(!i.value)return null;const n=e.includes(i.value);return t`
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
        `}).filter(Boolean)}_getSlottedItems(){const t=this.shadowRoot.querySelector("slot:not([name])");if(!t)return[];const e=t.assignedNodes({flatten:!0}),i=[];return e.forEach(t=>{if(t.nodeType===Node.ELEMENT_NODE){const e=t.getAttribute("value"),n=(t.textContent||"").trim();null!==e&&i.push({value:e,label:n})}}),i}_syncHiddenInputs(){if(this._clear('[name="output"]'),!this.name)return;(this.multi?Array.isArray(this.values)?this.values:[]:[this.value]).filter(t=>null!=t&&""!==t).forEach(t=>{const e=document.createElement("input");e.type="hidden",e.name=this.name,e.value=t,e.slot="output",this.appendChild(e)})}static get styles(){return e`
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
    `}}customElements.define("pb-select",qp);class zp extends(m(s(n))){static get properties(){return Object.assign({label:{type:String}},super.properties)}constructor(){super(),this.label="clipboard.label"}render(){return t`
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
    `}_copy(){const t=this.shadowRoot.querySelector("slot"),e=document.createElement("div");t.assignedNodes().forEach(t=>{e.appendChild(document.importNode(t,!0))}),navigator.clipboard.writeText(e.innerText)}static get styles(){return e`
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
    `}}customElements.define("pb-clipboard",zp);class Up{constructor(t){this._prefix=t.getAttribute("prefix"),this._config={name:t.getAttribute("name"),properties:{}},this._register=this._config.name}get register(){return this._register}get name(){return this._register}set name(t){this._register=t}get editable(){return!1}query(t){throw new Error("Method query not implemented")}info(t,e){return e.innerHTML="not implemented",Promise.resolve()}async select(t){return Promise.resolve(t)}async getRecord(t){return Promise.reject()}}class Hp extends Up{async query(t){const e=t.replace(/[^\w\s]+/g,""),i=[],n=`https://api.metagrid.ch/search?query=${encodeURIComponent(e)}`;try{const t=await fetch(n),e=await t.json();return e.resources.forEach(t=>{const e=`${t.metadata.last_name}, ${t.metadata.first_name} `,n={register:this._register,id:`${t.provider.slug}-${t.identifier}`,label:e,details:`${t.metadata.birth_date} - ${t.metadata.death_date}`,link:t.link.uri,provider:t.provider.slug};i.push(n)}),{totalItems:e.meta.total,items:i}}catch(t){return g.error("<authority-metagrid> Query failed:",t),{totalItems:0,items:[]}}}async info(t,e){const i=t.indexOf("-"),n=t.substring(0,i);try{const i=await this.getRecord(t),s=`\n          <h3 class="label">\n            <a href="https://${i.link.uri}" target="_blank">\n              ${i.metadata.last_name}, ${i.metadata.first_name}\n            </a>\n          </h3>\n          <p>${i.metadata.birth_date} - ${i.metadata.death_date}</p>\n        `;return e.innerHTML=w(s),{id:`${n}-${i.identifier}`,strings:[`${i.metadata.first_name} ${i.metadata.last_name}`]}}catch(t){throw g.error("<authority-metagrid> Info failed:",t),t}}async getRecord(t){const e=t.indexOf("-"),i=t.substring(0,e),n=t.substring(e+1);try{const t=await fetch(`https://api.metagrid.ch/search?slug=${i}&query=${n}`),e=(await t.json()).resources[0],s=Object.assign({},e);return s.name=`${e.metadata.first_name} ${e.metadata.last_name}`,s.links=[`https://${e.link.uri}`],e.metadata.birth_date&&e.metadata.birth_date.length>0&&(s.birth=e.metadata.birth_date),e.metadata.death_date&&e.metadata.death_date.length>0&&(s.death=e.metadata.death_date),s}catch(t){throw g.error("<authority-metagrid> getRecord failed:",t),t}}}class Vp extends Up{constructor(t){super(t),this.user=t.getAttribute("user")}async query(t){const e=[];try{const i=await fetch(`https://secure.geonames.org/searchJSON?formatted=true&q=${encodeURIComponent(t)}&maxRows=100&&username=${this.user}&style=full`),n=await i.json();return n.geonames.forEach(t=>{const i={register:this._register,id:this._prefix?`${this._prefix}-${t.geonameId}`:t.geonameId,label:t.toponymName,details:`${t.fcodeName} - ${t.adminName1}, ${t.countryName}`,link:`https://www.geonames.org/${t.geonameId}`,strings:[t.toponymName],provider:"geonames.org"};e.push(i)}),{totalItems:n.totalResultsCount,items:e}}catch(t){return g.error("<authority-geonames> Query failed:",t),{totalItems:0,items:[]}}}async info(t,e){if(!t)return Promise.resolve({});try{const i=await this.getRecord(t);if(i.status)throw new Error(i.status.message);const n=`\n            <h3 class="label">\n              <a href="${i.link}" target="_blank">${i.name}</a>\n            </h3>\n            <p class="fcode">${i.note} - ${i.region}, ${i.country}</p>\n          `;return e.innerHTML=n,{id:this._prefix?`${this._prefix}-${i.geonameId}`:i.geonameId,strings:[i.name]}}catch(t){throw g.error("<authority-geonames> Info failed:",t),t}}async getRecord(t){const e=this._prefix?t.substring(this._prefix.length+1):t;try{const t=await fetch(`https://secure.geonames.org/getJSON?geonameId=${encodeURIComponent(e)}&username=${this.user}`);if(!t.ok)throw new Error(`Failed to fetch GeoNames record: ${t.status}`);const i=await t.json(),n=Object.assign({},i);return n.name=i.toponymName,n.country=i.countryName,n.region=i.adminName1,n.note=i.fcodeName,n.links=[`https://www.geonames.org/${i.geonameId}`,`https://${i.wikipediaURL}`],n}catch(t){throw g.error("<authority-geonames> getRecord failed:",t),t}}}function Wp(t="",e){return t.replace(/\${([^}]+)}/g,(t,i)=>{let n;return e[i]&&(n=e[i]),n||""})}function Gp(t,e){const i=t.querySelector(e);if(i instanceof HTMLTemplateElement){const t=document.createElement("div");return t.appendChild(i.content.cloneNode(!0)),t.innerHTML}return""}class Yp extends Up{constructor(t){super(t),this.apiKey=t.getAttribute("api-key"),this.baseKey=t.getAttribute("base"),this.table=t.getAttribute("table"),this.view=t.getAttribute("view"),this.filterExpr=t.getAttribute("filter"),this.labelExpr=t.getAttribute("label");const e=t.getAttribute("fields");this.fields=e?e.split(/\s*,\s*/):["ID"];const i=t.getAttribute("tokenize");this.tokenize=i?i.split(/\s*,\s*/):[this.fields[0]],this.tokenizeChars=t.getAttribute("tokenize-regex")||"\\W",this.infoExpr=Gp(t,".info"),this.detailExpr=Gp(t,".detail"),this.base=null,this._airtableIsInitialized=this._init()}async _init(){if(window.ESGlobalBridge.requestAvailability(),!0===window.ESGlobalBridge.instance.imports.airtable)return void this._initAirtable();const t=f("../lib/airtable.browser.js");window.ESGlobalBridge.instance.load("airtable",t),await new Promise(t=>window.addEventListener("es-bridge-airtable-loaded",t,{once:!0})),this._initAirtable()}_initAirtable(){const t=require("airtable");this.base=new t({apiKey:this.apiKey}).base(this.baseKey)}async query(t){t=t.toLowerCase(),await this._airtableIsInitialized;const e=[],i=this.filterExpr?Wp(this.filterExpr,{key:t}):null,n={fields:this.fields,maxRecords:100};return this.view&&(n.view=this.view),i&&(n.filterByFormula=i),new Promise((t,i)=>{this.base(this.table).select(n).firstPage((n,s)=>{if(n)return g.error(n),void i(n);s.forEach(t=>{const i={};this.fields.forEach(e=>{i[e]=t.get(e)});const n={register:this._register,id:t.id,label:Wp(this.labelExpr,i),details:Wp(this.detailExpr,i),provider:"airtable"};e.push(n)}),t({totalItems:3,items:e})})})}async info(t,e){return await this._airtableIsInitialized,new Promise((i,n)=>{this.base(this.table).find(t,(s,r)=>{if(s){if(404===s.statusCode)n(`No record found for ${t} in table ${this.table}`);else n(`${s.statusCode}: ${s.message}`);return}if(0===Object.keys(r.fields).length)return void n(`No record found for ${t} in table ${this.table}`);let o=[];const a={};this.fields.forEach(t=>{const e=r.get(t);e&&(a[t]=e,o.push(e))});const l=new RegExp(this.tokenizeChars);this.tokenize.forEach(t=>{a[t]&&(o=o.concat(a[t].split(l)))}),o=o.filter(t=>!/^\d+$/.test(t)),o.sort((t,e)=>e.length-t.length),e.innerHTML=w(Wp(this.infoExpr,a)),i({id:r.id,strings:o})})})}}function Qp(t){let e="";t.professionOrOccupation&&t.professionOrOccupation.length>0&&(e=t.professionOrOccupation.map(t=>t.label).join(", ")),t.biographicalOrHistoricalInformation&&(e=`${e}; ${t.biographicalOrHistoricalInformation.join(", ")}`);const i=[];return t.dateOfBirth&&t.dateOfBirth.length>0&&i.push(t.dateOfBirth[0]),t.dateOfDeath&&t.dateOfDeath.length>0&&(i.push(" - "),i.push(t.dateOfDeath[0])),i.length>0?`${i.join("")}${e?`; ${e}`:""}`:e}class Kp extends Up{async query(t){const e=[];let i;switch(this._register){case"place":i="PlaceOrGeographicName";break;case"term":i="SubjectHeading";break;case"organization":i="CorporateBody";break;case"work":i="Work";break;default:i="Person"}try{const n=await fetch(`https://lobid.org/gnd/search?q=${encodeURIComponent(t)}&filter=%2B%28type%3A${i}%29&format=json&size=100`),s=await n.json();return s.member.forEach(t=>{const i={register:this._register,id:this._prefix?`${this._prefix}-${t.gndIdentifier}`:t.gndIdentifier,label:t.preferredName,link:t.id,details:Qp(t),strings:[t.preferredName].concat(t.variantName),provider:"GND"};e.push(i)}),{totalItems:s.totalItems,items:e}}catch(t){return g.error("<authority-gnd> Query failed:",t),{totalItems:0,items:[]}}}async getRecord(t){const e=this._prefix?t.substring(this._prefix.length+1):t;try{const t=await fetch(`https://lobid.org/gnd/${e}.json`);if(!t.ok)throw new Error(`Failed to fetch GND record: ${t.status}`);const i=await t.json(),n=Object.assign({},i);return n.name=i.preferredName,n.link=i.id,i.dateOfBirth&&i.dateOfBirth.length>0&&(n.birth=i.dateOfBirth[0]),i.dateOfDeath&&i.dateOfDeath.length>0&&(n.death=i.dateOfDeath[0]),i.biographicalOrHistoricalInformation&&(n.note=i.biographicalOrHistoricalInformation.join("; ")),i.professionOrOccupation&&i.professionOrOccupation.length>0&&(n.profession=i.professionOrOccupation.map(t=>t.label)),n}catch(t){throw g.error("<authority-gnd> getRecord failed:",t),t}}async info(t,e){if(!t)return Promise.resolve();try{const i=await this.getRecord(t);let n;i.type.indexOf("SubjectHeading")>-1?n=this.infoSubject(i):i.type.indexOf("AuthorityResource")>-1&&(n=this.infoPerson(i));const s=`\n          <h3 class="label">\n            <a href="https://${i.id}" target="_blank"> ${i.preferredName} </a>\n          </h3>\n          ${n}\n        `;return e.innerHTML=w(s),{id:this._prefix?`${this._prefix}-${i.gndIdentifier}`:i.gndIdentifier,strings:[i.preferredName].concat(i.variantName)}}catch(t){throw g.error("<authority-gnd> Info failed:",t),t}}infoPerson(t){const e=t.professionOrOccuption?t.professionOrOccupation.map(t=>t.label):[];return`<p>${t.dateOfBirth} - ${t.dateOfDeath}</p>\n      <p>${e.join(" ")}</p>`}infoSubject(t){if(t.broaderTermGeneral){return`<p>${t.broaderTermGeneral.map(t=>t.label).join(", ")}</p>`}return""}}class Jp extends Up{constructor(t){super(t),this._api=t.getAttribute("api"),this._limit=t.getAttribute("limit")||999999}async query(t){const e=[],i=this.getRegister(),n=`https://meta.karl-barth.ch/api/${i}?${"bibls"===i?"biblsearch":"search"}=${encodeURIComponent(t)}&perPage=${this._limit}`,s=this.getLabelField();try{const t=await fetch(n),r=await t.json();return r.data.forEach(t=>{if("organization"===this._register&&"organisation"!==t.authority_type||"person"===this._register&&"person"!==t.authority_type)return;const n={register:this._register,id:this._prefix?`${this._prefix}:${t["full-id"]}`:t["full-id"],label:"string"==typeof s?t[s]:s(t),details:`${t["full-id"]}`,link:`https://meta.karl-barth.ch/${i}/${t.id}`,strings:["string"==typeof s?t[s]:s(t)],provider:"KBGA"};e.push(n)}),{totalItems:r.meta.total,items:e}}catch(t){return g.error("<authority-kbga> Query failed:",t),{totalItems:0,items:[]}}}async info(t,e){if(!t)return Promise.resolve({});const i=this.getLabelField();try{const n=await this.getRecord(t),s=n.data.death?`† ${n.data.death}`:"",r=n.data.birth?`<p>* ${n.data.birth} ${s}</p>`:"",o=n.data.note_bio?`<p>${n.data.note_bio}</p>`:"",a=`\n            <h3 class="label"><a href="https://${n.wikipediaURL}" target="_blank">${"string"==typeof i?n.data[i]:i(n.data)}</a></h3>\n              ${r}\n              ${o}\n          `;return e.innerHTML=w(a),{id:n.data["full-id"],strings:["string"==typeof i?n.data[i]:i(n.data)]}}catch(t){throw g.error("<authority-kbga> Info failed:",t),t}}async getRecord(t){const e=t.replace(/^.*-([^-]+)$/,"$1");try{const t=await fetch(`https://meta.karl-barth.ch/api/${this.getRegister()}/${e}`),i=await t.json(),n=Object.assign({},i);switch(n.name=i.data[this.getLabelField()],this._register){case"place":n.country=i.data.country,n.location=i.data.location.coordinates,n.links=i.data.links.map(t=>t.url);break;case"person":n.birth=i.data.birth,n.death=i.data.death,n.note=i.data.note_bio,n.links=[`https://${i.wikipediaURL}`]}return n}catch(t){throw g.error("<authority-kbga> getRecord failed:",t),t}}getLabelField(){let t;switch(this._register){case"place":t="placeName_full";break;case"term":t="fullLabel";break;case"abbreviation":t="label";break;case"bibl":case"songs":t="asHtml";break;default:t="persName_full"}return t}getRegister(){if(this._api)return this._api;let t;switch(this._register){case"person":case"organization":t="actors";break;case"place":t="places";break;case"term":t="terms";break;case"abbreviation":t="abbreviations";break;case"bibl":t="bibls";break;default:t=this._register}return t}}class Zp extends Up{constructor(t){super(t),this._url=t.getAttribute("url")||"https://archives.georgfischer.com/api",this._api=t.getAttribute("api"),this._limit=t.getAttribute("limit")||999999,this._provider=t.getAttribute("provider")||t.getAttribute("connector")}async query(t){const e=[],i=this.getRegister(),n=`${this._url}/${i}?search=${encodeURIComponent(t)}&perPage=${this._limit}`,s=this.getLabelField();try{const t=await fetch(n),r=await t.json();return r.data?(r.data.forEach(t=>{if("organization"===this._register&&"Person"===t.authority_type||"person"===this._register&&"Person"!==t.authority_type)return;const n={register:this._register,id:this._prefix?`${this._prefix}-${t.id}`:t.id,label:t[s],details:`${t.id}`,link:`${this._url}/${i}/${t.id}`,strings:[t[s]],provider:this._provider};e.push(n)}),{totalItems:r.meta.total,items:e}):{totalItems:0,items:[]}}catch(t){throw g.error("<authority-anton> Query failed:",t),t}}async info(t,e){if(!t)return Promise.resolve({});const i=this._prefix?t.substring(this._prefix.length+1):t,n=this.getLabelField();try{const t=await this.getRecord(i),s=t.data.death?`† ${t.data.death}`:"",r=t.data.birth?`<p>* ${t.data.birth} ${s}</p>`:"",o=t.data.note_bio?`<p>${t.data.note_bio}</p>`:"",a=`\n            <h3 class="label"><a href="https://${t.wikipediaURL}" target="_blank">${t.data[n]}</a></h3>\n              ${r}\n              ${o}\n          `;return e.innerHTML=a,{id:this._prefix?`${this._prefix}-${t.data.id}`:t.data.id,strings:[t.data[n]]}}catch(t){throw g.error("<authority-anton> Info failed:",t),t}}async getRecord(t){const e=t.replace(/^.*-([^-]+)$/,"$1"),i=`${this._url}/${this.getRegister()}/${e}`;try{const t=await fetch(i),e=await t.json(),n=Object.assign({},e);switch(n.name=e.data[this.getLabelField()],this._register){case"place":n.country=e.data.country,e.data.location&&e.data.location.coordinates&&(n.location=e.data.location.coordinates),n.links=e.data.links.map(t=>t.url);break;case"person":n.birth=e.data.birth,n.death=e.data.death,n.note=e.data.note_bio,n.links=[`https://${e.wikipediaURL}`]}return n}catch(t){throw g.error("<authority-anton> getRecord failed:",t),t}}getLabelField(){let t;if("term"===this._register)t="label";else t="fullname";return t}getRegister(){if(this._api)return this._api;let t;switch(this._register){case"person":case"organization":t="actors";break;case"origPlace":case"place":t="places";break;case"term":t="keywords";break;case"abbreviation":t="abbreviations";break;default:t=this._register}return t}}async function Xp(t){const e=await fetch(t);return await e.json()}class tu extends Up{constructor(t){super(t),this.endpoint=t.getAttribute("endpoint"),this.debug=t.getAttribute("debug"),(async()=>{const t=await Xp(this.endpoint);this.ORConfig=t,this.debug&&g.log("OpenReconcile connector for register '%s' at endpoint <%s>. Using config: %o",this._register,this.endpoint,this.ORConfig)})()}async query(t){const e=[],i={q1:{query:t}};try{const t=await fetch(this.endpoint,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},body:"queries=".concat(JSON.stringify(i))}),n=await t.json();return n.q1.result.forEach(t=>{this.ORConfig.view?this.view=this.ORConfig.view.url.replace("{{id}}",t.id):this.view=t.id,t.description?this.description=t.description:t.type?this.description=t.type.map(t=>t.name.toString()).join(", "):this.description="";const i={register:this._register,id:this._prefix?`${this._prefix}-${t.id}`:t.id,label:t.name,link:this.view,details:this.description,provider:"OpenReconcile"};e.push(i)}),this.debug&&g.log("OpenReconcile results: %o",e),{totalItems:n.q1.result.length,items:e}}catch(t){return g.error("<authority-reconciliation> Query failed:",t),{totalItems:0,items:[]}}}async info(t,e){if(!t)return Promise.resolve({});if(!this.ORConfig.preview)return e.innerHTML="no 'preview' information in endpoint's manifest",Promise.resolve();try{const i=this._prefix?t.substring(this._prefix.length+1):t,n=this.ORConfig.preview.url.replace("{{id}}",encodeURIComponent(i)),s=await fetch(n),r=await s.text();return e.innerHTML=w(r),{id:this._prefix?`${this._prefix}-${i}`:i}}catch(t){throw g.error("<authority-reconciliation> Info failed:",t),t}}}function eu(t,e){const i=[];return e.querySelectorAll(":scope > pb-authority").forEach(t=>{let e;switch(t.getAttribute("connector")){case"GND":e=new Kp(t);break;case"GeoNames":e=new Vp(t);break;case"Airtable":e=new Yp(t);break;case"KBGA":e=new Jp(t);break;case"Anton":case"GF":e=new Zp(t);break;case"ReconciliationService":e=new tu(t);break;case"Custom":return void g.warn("Nested Custom connector ignored to avoid circular dependency");default:e=new Hp(t)}i.push(e)}),i}class iu extends Up{constructor(t,e){super(e),this._editable=e.hasAttribute("edit"),this._endpoint=t,this._connectors=eu(t,e),this._connectors.forEach(t=>{t.name=this.name}),g.log("custom connector: endpoint: %s; using authorities: %o",this._endpoint,this._connectors)}get editable(){return this._editable}async query(t){try{const e=await fetch(`${this._endpoint}/api/register/search/${this._register}?query=${encodeURIComponent(t)}`),i=await e.json();let n=[];const s=new Set;i.forEach(t=>{n.push({register:this._register,id:t.id,label:t.label,link:t.link,details:t.details,provider:"local"}),s.add(t.id)});let r=i.length;for(const e of this._connectors){const i=await e.query(t);n=n.concat(i.items.filter(t=>!s.has(t.id))),r+=i.totalItems}return{totalItems:r,items:n}}catch(t){return g.error("<authority-custom> Query failed:",t),{totalItems:0,items:[]}}}async info(t,e){if(!t)return{};const i=t;try{const n=await fetch(`${this._endpoint}/api/register/${this._register}/${encodeURIComponent(i)}`);if(n.ok){const t=await n.json();return e.innerHTML=w(t.details),{id:t.id,strings:t.strings,editable:this._editable}}if(404===n.status)for(const i of this._connectors)try{const n=await i.info(t,e);if(n)return n}catch(t){}throw new Error(`Failed to fetch info: ${n.status}`)}catch(t){throw g.error("<authority-custom> Info failed:",t),t}}async select(t){let e;for(const i of this._connectors)if(e=await i.getRecord(t.id).catch(()=>null),e)break;if(!e)return Promise.resolve(t);try{const i=await fetch(`${this._endpoint}/api/register/${this._register}/${encodeURIComponent(t.id)}`,{method:"POST",mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(i.ok)return await i.json();throw new Error(i.status.toString())}catch(t){throw g.error("<authority-custom> Select failed:",t),t}}}function nu(t,e){const i=[];return e.querySelectorAll(":scope > pb-authority").forEach(e=>{let n;switch(e.getAttribute("connector")){case"GND":n=new Kp(e);break;case"GeoNames":n=new Vp(e);break;case"Airtable":n=new Yp(e);break;case"KBGA":n=new Jp(e);break;case"Anton":case"GF":n=new Zp(e);break;case"ReconciliationService":n=new tu(e);break;case"Custom":n=new iu(t,e);break;default:n=new Hp(e)}i.push(n)}),i}class su extends(m(s(n))){static get properties(){return Object.assign({query:{type:String,reflect:!0},sortByLabel:{type:Boolean,attribute:"sort-by-label"},stopwords:{type:String},group:{type:String},type:{type:String,reflect:!0},noOccurrences:{type:Boolean,attribute:"no-occurrences"},autoLookup:{type:Boolean,attribute:"auto"},_results:{type:Array}},super.properties)}constructor(){super(),this.query="",this.type=null,this.sortByLabel=!1,this._results=[],this._authorities={},this.noOccurrences=!1,this.group="tei"}connectedCallback(){super.connectedCallback(),this._stopwordSet=new Set,this.stopwords&&this.stopwords.split(/\s*,\s*/).forEach(t=>this._stopwordSet.add(t.toLowerCase())),this.subscribeTo("pb-authority-lookup",t=>{this.query=t.detail.query,this.type=t.detail.type,this._results=[],this._query()}),r("pb-page-ready",()=>{nu(this.getEndpoint(),this).forEach(t=>{this._authorities[t.register]=t}),this.autoLookup&&this._query()}),g.log("<pb-authority-lookup> Registered authorities: %o",this._authorities)}render(){return t`
      <header>
        <input
          id="query"
          type="search"
          placeholder="${p("annotations.lookup")}"
          .value="${this.query}"
          @input="${t=>this._queryChanged(t)}"
          @change="${t=>this._queryChanged(t)}"
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
          ${this._results.map(t=>this._formatItem(t))}
        </ul>
      </div>
    `}async lookup(t,e,i){if(!e||""===e)return g.log("<pb-authority-lookup> Key is empty"),i.innerHTML="",Promise.resolve();const n=this._authorities[t];g.log("<pb-authority-lookup> Retrieving info for %s from %s using %s",e,t,n.constructor.name);let s=await n.info(e,i);return s.strings&&(s=Object.assign(s,{strings:s.strings.filter(t=>t&&!this._stopwordSet.has(t.toLowerCase()))})),s}_formatItem(e){return t`
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
          ${e.link?t`<a target="_blank" href="${e.link}"
                >${_(w(e.label))}</a
              >`:t`${_(w(e.label))}`}
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
    `}static get styles(){return e`
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
    `}_select(t){const e=this._authorities[t.register],i={strings:t.strings,type:t.register,properties:{ref:t.id}};e?(async()=>{try{await e.select(t),this.emitTo("pb-authority-select",i)}catch(t){this.emitTo("pb-authority-error",{status:t.message})}})():this.emitTo("pb-authority-select",i)}_editEntity(t){const e=this._authorities[t.register];e?(async()=>{try{await e.select(t),this.emitTo("pb-authority-edit-entity",{id:t.id,type:t.register})}catch(t){g.error("<pb-authority-lookup> Failed to select item for edit:",t)}})():this.emitTo("pb-authority-edit-entity",{id:t.id,type:t.register})}_queryChanged(t){this.query!==t.target.value&&(this._results=[],this.query=t.target.value,this._query())}async _query(){this.emitTo("pb-start-update");try{const t=await this._authorities[this.type].query(this.query),e=await this._occurrences(t.items);this._results=e,this.emitTo("pb-end-update")}catch(t){g.error("<pb-authority-lookup> Query failed:",t),this.emitTo("pb-end-update")}}_addEntity(){this.emitTo("pb-authority-new-entity",{query:this.query,type:this.type})}async _occurrences(t){if(this.noOccurrences)return Promise.resolve(t);const e=new FormData;e.append("register",this.type),t.forEach(t=>{e.append("id",t.id)});try{const i=await fetch(`${this.getEndpoint()}/api/annotations/occurrences`,{method:"POST",body:e});if(!i.ok)return t;const n=await i.json();return t.forEach(t=>{n[t.id]?t.occurrences=n[t.id]:t.occurrences=0}),t.sort((t,e)=>{const i=e.occurrences-t.occurrences;return 0===i?"local"===t.provider&&"local"!==e.provider?-1:"local"===e.provider&&"local"!==t.provider?1:this.sortByLabel?t.label.localeCompare(e.label):0:i}),t}catch(e){return g.error("<pb-authority-lookup> Failed to fetch occurrences:",e),t}}}customElements.define("pb-authority-lookup",su);class ru extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{data:{type:Object},documents:{type:Array},doc:{type:String},perPage:{type:Number,attribute:"per-page"},pattern:{type:String},first:{type:Number},sort:{type:String},target:{type:String,attribute:"target"}})}constructor(){super(),this.data={documents:[]},this.documents=[],this.first=1,this.doc=null,this.sort=null}static get styles(){return e`
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
    `}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-load",t=>{this.first=Number(t.detail.params.start),this.load()}),this.subscribeTo("force-load",t=>{this.load(),this.requestUpdate()}),this.subscribeTo("pb-results-received",t=>{this.data=t.detail.data,this.documents=this.data.documents,this._animate()})}render(){return t`
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
    `}async load(){if(!this.getEndpoint())return;if(!this.pattern)return;let t=`${this.getEndpoint()}/api/blacklab/search?pattern=${this.pattern}&start=${this.first}&per-page=${this.perPage}`;this.doc&&(t+=`&doc=${this.doc}`),this.sort&&(t+=`&sort=${this.sort}`);try{const e=await fetch(t,{method:"GET",mode:"cors",credentials:"same-origin"}),i=await e.json();this.data=i,localStorage.setItem("pb-kwic-results",JSON.stringify(this.data)),this.emitTo("pb-results-received",{count:i.docs?parseInt(i.docs,10):0,start:i.start,params:i.params,data:i},[])}catch(t){alert(`Error retrieving remote content: ${t}`)}}_animate(){Ol(this.shadowRoot.querySelector("table"),{opacity:[0,1],duration:200,delay:200,ease:"linear"})}}customElements.define("pb-blacklab-results",ru);class ou extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{current:{type:Number},view:{type:String},pattern:{type:String},match:{type:String},docid:{type:String},hits:{type:Array},kwicData:{type:Object},matchParam:{type:String},pageId:{type:String},perDocument:{type:Number,attribute:"per-document"}})}connectedCallback(){super.connectedCallback(),this.current=1,this.perDocument=100,this.hits=[],this.kwicData={},r("pb-page-ready",()=>{this.viewElement=document.getElementById(this.view),this.viewElement?this.shadow=this.viewElement.shadowRoot:g.error(`${this}: view element with id ${this.view} does not exist`)}),this.subscribeTo("pb-update",()=>{this._loadDocResults()}),this.subscribeTo("pb-refresh",t=>{this.dynMatch=t.detail.match})}render(){return t`
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
    `}async _loadDocResults(){if(!this.getEndpoint())return;const t=new URLSearchParams(window.location.search);this.pattern=t.get("pattern"),this.dynMatch?this.matchParam=this.dynMatch:this.matchParam=t.get("match"),this.pageId=t.get("id"),this.docId=t.get("doc");const e=`${this.getEndpoint()}/api/blacklab/doc?pattern=${this.pattern}&doc=${this.docId}&per-document=${this.perDocument}&format=json`;try{const t=await fetch(e,{method:"GET",mode:"cors",credentials:"same-origin"}),i=await t.json();this.kwicData=i,this._markAllMatches(),this._showMatch(this.matchParam)}catch(t){g.error("Error retrieving remote content: ",t)}}_markAllMatches(){const t=this.kwicData.documents;if(this.count=this.kwicData.hits,this.hits=t[Object.keys(t)[0]].hits,Array.isArray(this.hits))this.hits.forEach(t=>{const e=t.match.words[0],i=t.match.words[1];this._addMarkerClasses(e,i)});else{const t=this.hits.match.words[0],e=this.hits.match.words[1];this._addMarkerClasses(t,e)}this.requestUpdate()}_showMatch(t){const e=this._getMatchObject(t);this._navigateToMatch(e)}_getMatchObject(t){if(!t)return Array.isArray(this.hits)?this.hits[this.current-1]:this.hits;if(Array.isArray(this.hits)){const e=this.hits.find(e=>e.match.words[0]===t);return this.current=this.hits.findIndex(t=>t===e)+1,e}return this.current=1,this.hits}_navigateToMatch(t){const e=t.page[0],i=t.match.words[0],n=`${this._endpoint}/${this.docId}.xml?doc=${this.docId}&pattern=${this.pattern}&match=${t.match.words[0]}&id=${e}`;this.pageId!==e?this.emitTo("pb-refresh",{id:e,match:i}):(this._highlight(t),window.history.replaceState({},"",n))}_highlight(t){this._resetCurrentMarker();const e=t.match.words[0],i=t.match.words[1],n=this.shadow.querySelector(`#${e}`);n&&n.parentNode.classList.add("kwic-current");const s=this.shadow.querySelector(`#${i}`);s&&s.parentNode.classList.add("kwic-current"),n.scrollIntoView({block:"center",inline:"nearest"})}_resetCurrentMarker(){const t=this.shadow.querySelectorAll(".kwic-current");Array.from(t).forEach(t=>{t.classList.remove("kwic-current")})}_addMarkerClasses(t,e){const i=this.shadow.querySelector(`#${t}`);if(!i)return;i.parentNode.classList.add("kwic-start");const n=this.shadow.getElementById(e);n?n.parentNode.classList.add("kwic-end"):i.classList.add("kwic-end")}_handlePrev(){this.current-=1;const t=this.hits[this.current-1];this._navigateToMatch(t)}_handleNext(){const t=this.hits[this.current];this._navigateToMatch(t),this.current+=1}static get styles(){return e`
      :host {
        display: block;
      }
      .counter,
      .current {
        padding: 0 0.5rem;
      }
    `}}function au(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,"symbol"==typeof(s=function(t){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key))?s:String(s),n)}var s}function lu(t,e,i){return e&&au(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function cu(){return cu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},cu.apply(this,arguments)}function du(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,pu(t,e)}function pu(t,e){return pu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},pu(t,e)}function uu(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function hu(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function gu(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,e){if(t){if("string"==typeof t)return hu(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?hu(t,e):void 0}}(t))||e){i&&(t=i);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var fu;customElements.define("pb-blacklab-highlight",ou),function(t){t[t.Init=0]="Init",t[t.Loading=1]="Loading",t[t.Loaded=2]="Loaded",t[t.Rendered=3]="Rendered",t[t.Error=4]="Error"}(fu||(fu={}));var mu,bu,yu,vu,_u,wu,xu,ku={},Au=[],Su=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Ou(t,e){for(var i in e)t[i]=e[i];return t}function Eu(t){var e=t.parentNode;e&&e.removeChild(t)}function $u(t,e,i){var n,s,r,o={};for(r in e)"key"==r?n=e[r]:"ref"==r?s=e[r]:o[r]=e[r];if(arguments.length>2&&(o.children=arguments.length>3?mu.call(arguments,2):i),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===o[r]&&(o[r]=t.defaultProps[r]);return Cu(t,o,n,s,null)}function Cu(t,e,i,n,s){var r={type:t,props:e,key:i,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++yu};return null==s&&null!=bu.vnode&&bu.vnode(r),r}function Tu(t){return t.children}function Iu(t,e){this.props=t,this.context=e}function Lu(t,e){if(null==e)return t.__?Lu(t.__,t.__.__k.indexOf(t)+1):null;for(var i;e<t.__k.length;e++)if(null!=(i=t.__k[e])&&null!=i.__e)return i.__e;return"function"==typeof t.type?Lu(t):null}function Ru(t){var e,i;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(i=t.__k[e])&&null!=i.__e){t.__e=t.__c.base=i.__e;break}return Ru(t)}}function ju(t){(!t.__d&&(t.__d=!0)&&_u.push(t)&&!Nu.__r++||wu!==bu.debounceRendering)&&((wu=bu.debounceRendering)||setTimeout)(Nu)}function Nu(){for(var t;Nu.__r=_u.length;)t=_u.sort(function(t,e){return t.__v.__b-e.__v.__b}),_u=[],t.some(function(t){var e,i,n,s,r,o;t.__d&&(r=(s=(e=t).__v).__e,(o=e.__P)&&(i=[],(n=Ou({},s)).__v=s.__v+1,Uu(o,s,n,e.__n,void 0!==o.ownerSVGElement,null!=s.__h?[r]:null,i,r??Lu(s),s.__h),Hu(i,s),s.__e!=r&&Ru(s)))})}function Pu(t,e,i,n,s,r,o,a,l,c){var d,p,u,h,g,f,m,b=n&&n.__k||Au,y=b.length;for(i.__k=[],d=0;d<e.length;d++)if(null!=(h=i.__k[d]=null==(h=e[d])||"boolean"==typeof h?null:"string"==typeof h||"number"==typeof h||"bigint"==typeof h?Cu(null,h,null,null,h):Array.isArray(h)?Cu(Tu,{children:h},null,null,null):h.__b>0?Cu(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)){if(h.__=i,h.__b=i.__b+1,null===(u=b[d])||u&&h.key==u.key&&h.type===u.type)b[d]=void 0;else for(p=0;p<y;p++){if((u=b[p])&&h.key==u.key&&h.type===u.type){b[p]=void 0;break}u=null}Uu(t,h,u=u||ku,s,r,o,a,l,c),g=h.__e,(p=h.ref)&&u.ref!=p&&(m||(m=[]),u.ref&&m.push(u.ref,null,h),m.push(p,h.__c||g,h)),null!=g?(null==f&&(f=g),"function"==typeof h.type&&h.__k===u.__k?h.__d=l=Du(h,l,t):l=Fu(t,h,u,b,g,l),"function"==typeof i.type&&(i.__d=l)):l&&u.__e==l&&l.parentNode!=t&&(l=Lu(u))}for(i.__e=f,d=y;d--;)null!=b[d]&&Gu(b[d],b[d]);if(m)for(d=0;d<m.length;d++)Wu(m[d],m[++d],m[++d])}function Du(t,e,i){for(var n,s=t.__k,r=0;s&&r<s.length;r++)(n=s[r])&&(n.__=t,e="function"==typeof n.type?Du(n,e,i):Fu(i,n,n,s,n.__e,e));return e}function Fu(t,e,i,n,s,r){var o,a,l;if(void 0!==e.__d)o=e.__d,e.__d=void 0;else if(null==i||s!=r||null==s.parentNode)t:if(null==r||r.parentNode!==t)t.appendChild(s),o=null;else{for(a=r,l=0;(a=a.nextSibling)&&l<n.length;l+=1)if(a==s)break t;t.insertBefore(s,r),o=r}return void 0!==o?o:s.nextSibling}function Bu(t,e,i){"-"===e[0]?t.setProperty(e,i):t[e]=null==i?"":"number"!=typeof i||Su.test(e)?i:i+"px"}function Mu(t,e,i,n,s){var r;t:if("style"===e)if("string"==typeof i)t.style.cssText=i;else{if("string"==typeof n&&(t.style.cssText=n=""),n)for(e in n)i&&e in i||Bu(t.style,e,"");if(i)for(e in i)n&&i[e]===n[e]||Bu(t.style,e,i[e])}else if("o"===e[0]&&"n"===e[1])r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=i,i?n||t.addEventListener(e,r?zu:qu,r):t.removeEventListener(e,r?zu:qu,r);else if("dangerouslySetInnerHTML"!==e){if(s)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=i??"";break t}catch(t){}"function"==typeof i||(null==i||!1===i&&-1==e.indexOf("-")?t.removeAttribute(e):t.setAttribute(e,i))}}function qu(t){this.l[t.type+!1](bu.event?bu.event(t):t)}function zu(t){this.l[t.type+!0](bu.event?bu.event(t):t)}function Uu(t,e,i,n,s,r,o,a,l){var c,d,p,u,h,g,f,m,b,y,v,_,w,x,k,A=e.type;if(void 0!==e.constructor)return null;null!=i.__h&&(l=i.__h,a=e.__e=i.__e,e.__h=null,r=[a]),(c=bu.__b)&&c(e);try{t:if("function"==typeof A){if(m=e.props,b=(c=A.contextType)&&n[c.__c],y=c?b?b.props.value:c.__:n,i.__c?f=(d=e.__c=i.__c).__=d.__E:("prototype"in A&&A.prototype.render?e.__c=d=new A(m,y):(e.__c=d=new Iu(m,y),d.constructor=A,d.render=Yu),b&&b.sub(d),d.props=m,d.state||(d.state={}),d.context=y,d.__n=n,p=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=A.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=Ou({},d.__s)),Ou(d.__s,A.getDerivedStateFromProps(m,d.__s))),u=d.props,h=d.state,p)null==A.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==A.getDerivedStateFromProps&&m!==u&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(m,y),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(m,d.__s,y)||e.__v===i.__v){for(d.props=m,d.state=d.__s,e.__v!==i.__v&&(d.__d=!1),d.__v=e,e.__e=i.__e,e.__k=i.__k,e.__k.forEach(function(t){t&&(t.__=e)}),v=0;v<d._sb.length;v++)d.__h.push(d._sb[v]);d._sb=[],d.__h.length&&o.push(d);break t}null!=d.componentWillUpdate&&d.componentWillUpdate(m,d.__s,y),null!=d.componentDidUpdate&&d.__h.push(function(){d.componentDidUpdate(u,h,g)})}if(d.context=y,d.props=m,d.__v=e,d.__P=t,_=bu.__r,w=0,"prototype"in A&&A.prototype.render){for(d.state=d.__s,d.__d=!1,_&&_(e),c=d.render(d.props,d.state,d.context),x=0;x<d._sb.length;x++)d.__h.push(d._sb[x]);d._sb=[]}else do{d.__d=!1,_&&_(e),c=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++w<25);d.state=d.__s,null!=d.getChildContext&&(n=Ou(Ou({},n),d.getChildContext())),p||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(u,h)),k=null!=c&&c.type===Tu&&null==c.key?c.props.children:c,Pu(t,Array.isArray(k)?k:[k],e,i,n,s,r,o,a,l),d.base=e.__e,e.__h=null,d.__h.length&&o.push(d),f&&(d.__E=d.__=null),d.__e=!1}else null==r&&e.__v===i.__v?(e.__k=i.__k,e.__e=i.__e):e.__e=Vu(i.__e,e,i,n,s,r,o,l);(c=bu.diffed)&&c(e)}catch(t){e.__v=null,(l||null!=r)&&(e.__e=a,e.__h=!!l,r[r.indexOf(a)]=null),bu.__e(t,e,i)}}function Hu(t,e){bu.__c&&bu.__c(e,t),t.some(function(e){try{t=e.__h,e.__h=[],t.some(function(t){t.call(e)})}catch(t){bu.__e(t,e.__v)}})}function Vu(t,e,i,n,s,r,o,a){var l,c,d,p=i.props,u=e.props,h=e.type,g=0;if("svg"===h&&(s=!0),null!=r)for(;g<r.length;g++)if((l=r[g])&&"setAttribute"in l==!!h&&(h?l.localName===h:3===l.nodeType)){t=l,r[g]=null;break}if(null==t){if(null===h)return document.createTextNode(u);t=s?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,u.is&&u),r=null,a=!1}if(null===h)p===u||a&&t.data===u||(t.data=u);else{if(r=r&&mu.call(t.childNodes),c=(p=i.props||ku).dangerouslySetInnerHTML,d=u.dangerouslySetInnerHTML,!a){if(null!=r)for(p={},g=0;g<t.attributes.length;g++)p[t.attributes[g].name]=t.attributes[g].value;(d||c)&&(d&&(c&&d.__html==c.__html||d.__html===t.innerHTML)||(t.innerHTML=d&&d.__html||""))}if(function(t,e,i,n,s){var r;for(r in i)"children"===r||"key"===r||r in e||Mu(t,r,null,i[r],n);for(r in e)s&&"function"!=typeof e[r]||"children"===r||"key"===r||"value"===r||"checked"===r||i[r]===e[r]||Mu(t,r,e[r],i[r],n)}(t,u,p,s,a),d)e.__k=[];else if(g=e.props.children,Pu(t,Array.isArray(g)?g:[g],e,i,n,s&&"foreignObject"!==h,r,o,r?r[0]:i.__k&&Lu(i,0),a),null!=r)for(g=r.length;g--;)null!=r[g]&&Eu(r[g]);a||("value"in u&&void 0!==(g=u.value)&&(g!==t.value||"progress"===h&&!g||"option"===h&&g!==p.value)&&Mu(t,"value",g,p.value,!1),"checked"in u&&void 0!==(g=u.checked)&&g!==t.checked&&Mu(t,"checked",g,p.checked,!1))}return t}function Wu(t,e,i){try{"function"==typeof t?t(e):t.current=e}catch(t){bu.__e(t,i)}}function Gu(t,e,i){var n,s;if(bu.unmount&&bu.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||Wu(n,null,e)),null!=(n=t.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(t){bu.__e(t,e)}n.base=n.__P=null,t.__c=void 0}if(n=t.__k)for(s=0;s<n.length;s++)n[s]&&Gu(n[s],e,i||"function"!=typeof t.type);i||null==t.__e||Eu(t.__e),t.__=t.__e=t.__d=void 0}function Yu(t,e,i){return this.constructor(t,i)}function Qu(t,e,i){var n,s,r;bu.__&&bu.__(t,e),s=(n=!1)?null:e.__k,r=[],Uu(e,t=e.__k=$u(Tu,null,[t]),s||ku,ku,void 0!==e.ownerSVGElement,s?null:e.firstChild?mu.call(e.childNodes):null,r,s?s.__e:e.firstChild,n),Hu(r,t)}function Ku(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}mu=Au.slice,bu={__e:function(t,e,i,n){for(var s,r,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&null!=r.getDerivedStateFromError&&(s.setState(r.getDerivedStateFromError(t)),o=s.__d),null!=s.componentDidCatch&&(s.componentDidCatch(t,n||{}),o=s.__d),o)return s.__E=s}catch(e){t=e}throw t}},yu=0,vu=function(t){return null!=t&&void 0===t.constructor},Iu.prototype.setState=function(t,e){var i;i=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=Ou({},this.state),"function"==typeof t&&(t=t(Ou({},i),this.props)),t&&Ou(i,t),null!=t&&this.__v&&(e&&this._sb.push(e),ju(this))},Iu.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ju(this))},Iu.prototype.render=Tu,_u=[],Nu.__r=0,xu=0;var Ju=function(){function t(t){this._id=void 0,this._id=t||Ku()}return lu(t,[{key:"id",get:function(){return this._id}}]),t}();function Zu(t){return $u(t.parentElement||"span",{dangerouslySetInnerHTML:{__html:t.content}})}function Xu(t,e){return $u(Zu,{content:t,parentElement:e})}var th,eh=function(t){function e(e){var i;return(i=t.call(this)||this).data=void 0,i.update(e),i}du(e,t);var i=e.prototype;return i.cast=function(t){return t instanceof HTMLElement?Xu(t.outerHTML):t},i.update=function(t){return this.data=this.cast(t),this},e}(Ju),ih=function(t){function e(e){var i;return(i=t.call(this)||this)._cells=void 0,i.cells=e||[],i}du(e,t);var i=e.prototype;return i.cell=function(t){return this._cells[t]},i.toArray=function(){return this.cells.map(function(t){return t.data})},e.fromCells=function(t){return new e(t.map(function(t){return new eh(t.data)}))},lu(e,[{key:"cells",get:function(){return this._cells},set:function(t){this._cells=t}},{key:"length",get:function(){return this.cells.length}}]),e}(Ju),nh=function(t){function e(e){var i;return(i=t.call(this)||this)._rows=void 0,i._length=void 0,i.rows=e instanceof Array?e:e instanceof ih?[e]:[],i}return du(e,t),e.prototype.toArray=function(){return this.rows.map(function(t){return t.toArray()})},e.fromRows=function(t){return new e(t.map(function(t){return ih.fromCells(t.cells)}))},e.fromArray=function(t){return new e((t=function(t){return!t[0]||t[0]instanceof Array?t:[t]}(t)).map(function(t){return new ih(t.map(function(t){return new eh(t)}))}))},lu(e,[{key:"rows",get:function(){return this._rows},set:function(t){this._rows=t}},{key:"length",get:function(){return this._length||this.rows.length},set:function(t){this._length=t}}]),e}(Ju),sh=function(){function t(){this.callbacks=void 0}var e=t.prototype;return e.init=function(t){this.callbacks||(this.callbacks={}),t&&!this.callbacks[t]&&(this.callbacks[t]=[])},e.listeners=function(){return this.callbacks},e.on=function(t,e){return this.init(t),this.callbacks[t].push(e),this},e.off=function(t,e){var i=t;return this.init(),this.callbacks[i]&&0!==this.callbacks[i].length?(this.callbacks[i]=this.callbacks[i].filter(function(t){return t!=e}),this):this},e.emit=function(t){var e=arguments,i=t;return this.init(i),this.callbacks[i].length>0&&(this.callbacks[i].forEach(function(t){return t.apply(void 0,[].slice.call(e,1))}),!0)},t}();function rh(t,e){if(typeof t!=typeof e)return!1;if(null===t&&null===e)return!0;if("object"!=typeof t)return t===e;if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(!rh(t[i],e[i]))return!1;return!0}if(t.hasOwnProperty("constructor")&&e.hasOwnProperty("constructor")&&t.hasOwnProperty("props")&&e.hasOwnProperty("props")&&t.hasOwnProperty("key")&&e.hasOwnProperty("key")&&t.hasOwnProperty("ref")&&e.hasOwnProperty("ref")&&t.hasOwnProperty("type")&&e.hasOwnProperty("type"))return rh(t.props,e.props);var n=Object.keys(t),s=Object.keys(e);if(n.length!==s.length)return!1;for(var r=0,o=n;r<o.length;r++){var a=o[r];if(!e.hasOwnProperty(a)||!rh(t[a],e[a]))return!1}return!0}!function(t){t[t.Initiator=0]="Initiator",t[t.ServerFilter=1]="ServerFilter",t[t.ServerSort=2]="ServerSort",t[t.ServerLimit=3]="ServerLimit",t[t.Extractor=4]="Extractor",t[t.Transformer=5]="Transformer",t[t.Filter=6]="Filter",t[t.Sort=7]="Sort",t[t.Limit=8]="Limit"}(th||(th={}));var oh=function(t){function e(e){var i;return(i=t.call(this)||this).id=void 0,i._props=void 0,i._props={},i.id=Ku(),e&&i.setProps(e),i}du(e,t);var i=e.prototype;return i.process=function(){var t=[].slice.call(arguments);this.validateProps instanceof Function&&this.validateProps.apply(this,t),this.emit.apply(this,["beforeProcess"].concat(t));var e=this._process.apply(this,t);return this.emit.apply(this,["afterProcess"].concat(t)),e},i.setProps=function(t){var e=cu({},this._props,t);return rh(e,this._props)||(this._props=e,this.emit("propsUpdated",this)),this},lu(e,[{key:"props",get:function(){return this._props}}]),e}(sh),ah=function(t){function e(){return t.apply(this,arguments)||this}return du(e,t),e.prototype._process=function(t){return this.props.keyword?(e=String(this.props.keyword).trim(),i=this.props.columns,n=this.props.ignoreHiddenColumns,s=t,r=this.props.selector,e=e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),new nh(s.rows.filter(function(t,s){return t.cells.some(function(t,o){if(!t)return!1;if(n&&i&&i[o]&&"object"==typeof i[o]&&i[o].hidden)return!1;var a="";if("function"==typeof r)a=r(t.data,s,o);else if("object"==typeof t.data){var l=t.data;l&&l.props&&l.props.content&&(a=l.props.content)}else a=String(t.data);return new RegExp(e,"gi").test(a)})}))):t;var e,i,n,s,r},lu(e,[{key:"type",get:function(){return th.Filter}}]),e}(oh);function lh(){return""+"gridjs"+[].slice.call(arguments).reduce(function(t,e){return t+"-"+e},"")}function ch(){return[].slice.call(arguments).map(function(t){return t?t.toString():""}).filter(function(t){return t}).reduce(function(t,e){return(t||"")+" "+e},"").trim()}var dh,ph,uh,hh,gh=function(t){function e(){return t.apply(this,arguments)||this}return du(e,t),e.prototype._process=function(t){if(!this.props.keyword)return t;var e={};return this.props.url&&(e.url=this.props.url(t.url,this.props.keyword)),this.props.body&&(e.body=this.props.body(t.body,this.props.keyword)),cu({},t,e)},lu(e,[{key:"type",get:function(){return th.ServerFilter}}]),e}(oh),fh=0,mh=[],bh=[],yh=bu.__b,vh=bu.__r,_h=bu.diffed,wh=bu.__c,xh=bu.unmount;function kh(t,e){bu.__h&&bu.__h(ph,t,fh||e),fh=0;var i=ph.__H||(ph.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:bh}),i.__[t]}function Ah(t){return fh=1,function(t,e){var i=kh(dh++,2);if(i.t=t,!i.__c&&(i.__=[jh(void 0,e),function(t){var e=i.__N?i.__N[0]:i.__[0],n=i.t(e,t);e!==n&&(i.__N=[n,i.__[1]],i.__c.setState({}))}],i.__c=ph,!ph.u)){ph.u=!0;var n=ph.shouldComponentUpdate;ph.shouldComponentUpdate=function(t,e,s){if(!i.__c.__H)return!0;var r=i.__c.__H.__.filter(function(t){return t.__c});if(r.every(function(t){return!t.__N}))return!n||n.call(this,t,e,s);var o=!1;return r.forEach(function(t){if(t.__N){var e=t.__[0];t.__=t.__N,t.__N=void 0,e!==t.__[0]&&(o=!0)}}),!(!o&&i.__c.props===t)&&(!n||n.call(this,t,e,s))}}return i.__N||i.__}(jh,t)}function Sh(t,e){var i=kh(dh++,3);!bu.__s&&Rh(i.__H,e)&&(i.__=t,i.i=e,ph.__H.__h.push(i))}function Oh(t){return fh=5,Eh(function(){return{current:t}},[])}function Eh(t,e){var i=kh(dh++,7);return Rh(i.__H,e)?(i.__V=t(),i.i=e,i.__h=t,i.__V):i.__}function $h(){for(var t;t=mh.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Ih),t.__H.__h.forEach(Lh),t.__H.__h=[]}catch(e){t.__H.__h=[],bu.__e(e,t.__v)}}bu.__b=function(t){ph=null,yh&&yh(t)},bu.__r=function(t){vh&&vh(t),dh=0;var e=(ph=t.__c).__H;e&&(uh===ph?(e.__h=[],ph.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=bh,t.__N=t.i=void 0})):(e.__h.forEach(Ih),e.__h.forEach(Lh),e.__h=[])),uh=ph},bu.diffed=function(t){_h&&_h(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==mh.push(e)&&hh===bu.requestAnimationFrame||((hh=bu.requestAnimationFrame)||Th)($h)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==bh&&(t.__=t.__V),t.i=void 0,t.__V=bh})),uh=ph=null},bu.__c=function(t,e){e.some(function(t){try{t.__h.forEach(Ih),t.__h=t.__h.filter(function(t){return!t.__||Lh(t)})}catch(i){e.some(function(t){t.__h&&(t.__h=[])}),e=[],bu.__e(i,t.__v)}}),wh&&wh(t,e)},bu.unmount=function(t){xh&&xh(t);var e,i=t.__c;i&&i.__H&&(i.__H.__.forEach(function(t){try{Ih(t)}catch(t){e=t}}),i.__H=void 0,e&&bu.__e(e,i.__v))};var Ch="function"==typeof requestAnimationFrame;function Th(t){var e,i=function(){clearTimeout(n),Ch&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(i,100);Ch&&(e=requestAnimationFrame(i))}function Ih(t){var e=ph,i=t.__c;"function"==typeof i&&(t.__c=void 0,i()),ph=e}function Lh(t){var e=ph;t.__c=t.__(),ph=e}function Rh(t,e){return!t||t.length!==e.length||e.some(function(e,i){return e!==t[i]})}function jh(t,e){return"function"==typeof e?e(t):e}function Nh(){return function(t){var e=ph.context[t.__c],i=kh(dh++,9);return i.c=t,e?(null==i.__&&(i.__=!0,e.sub(ph)),e.props.value):t.__}(mg)}var Ph={search:{placeholder:"Type a keyword..."},sort:{sortAsc:"Sort column ascending",sortDesc:"Sort column descending"},pagination:{previous:"Previous",next:"Next",navigate:function(t,e){return"Page "+t+" of "+e},page:function(t){return"Page "+t},showing:"Showing",of:"of",to:"to",results:"results"},loading:"Loading...",noRecordsFound:"No matching records found",error:"An error happened while fetching the data"},Dh=function(){function t(t){this._language=void 0,this._defaultLanguage=void 0,this._language=t,this._defaultLanguage=Ph}var e=t.prototype;return e.getString=function(t,e){if(!e||!t)return null;var i=t.split("."),n=i[0];if(e[n]){var s=e[n];return"string"==typeof s?function(){return s}:"function"==typeof s?s:this.getString(i.slice(1).join("."),s)}return null},e.translate=function(t){var e;return(e=this.getString(t,this._language)||this.getString(t,this._defaultLanguage))?e.apply(void 0,[].slice.call(arguments,1)):t},t}();function Fh(){var t=Nh();return function(e){var i;return(i=t.translator).translate.apply(i,[e].concat([].slice.call(arguments,1)))}}var Bh=function(t){return function(e){return cu({},e,{search:{keyword:t}})}};function Mh(){return Nh().store}function qh(t){var e=Mh(),i=Ah(t(e.getState())),n=i[0],s=i[1];return Sh(function(){return e.subscribe(function(){var i=t(e.getState());n!==i&&s(i)})},[]),n}function zh(){var t,e=Ah(void 0),i=e[0],n=e[1],s=Nh(),r=s.search,o=Fh(),a=Mh().dispatch,l=qh(function(t){return t.search});Sh(function(){i&&i.setProps({keyword:null==l?void 0:l.keyword})},[l,i]),Sh(function(){n(r.server?new gh({keyword:r.keyword,url:r.server.url,body:r.server.body}):new ah({keyword:r.keyword,columns:s.header&&s.header.columns,ignoreHiddenColumns:r.ignoreHiddenColumns||void 0===r.ignoreHiddenColumns,selector:r.selector})),r.keyword&&a(Bh(r.keyword))},[r]),Sh(function(){if(i)return s.pipeline.register(i),function(){return s.pipeline.unregister(i)}},[s,i]);var c,d,p,u=function(t,e){return fh=8,Eh(function(){return t},e)}((c=function(t){t.target instanceof HTMLInputElement&&a(Bh(t.target.value))},d=i instanceof gh?r.debounceTimeout||250:0,function(){var t=arguments;return new Promise(function(e){p&&clearTimeout(p),p=setTimeout(function(){return e(c.apply(void 0,[].slice.call(t)))},d)})}),[r,i]);return $u("div",{className:lh(ch("search",null==(t=s.className)?void 0:t.search))},$u("input",{type:"search",placeholder:o("search.placeholder"),"aria-label":o("search.placeholder"),onInput:u,className:ch(lh("input"),lh("search","input")),defaultValue:(null==l?void 0:l.keyword)||""}))}var Uh=function(t){function e(){return t.apply(this,arguments)||this}du(e,t);var i=e.prototype;return i.validateProps=function(){if(isNaN(Number(this.props.limit))||isNaN(Number(this.props.page)))throw Error("Invalid parameters passed")},i._process=function(t){var e=this.props.page;return new nh(t.rows.slice(e*this.props.limit,(e+1)*this.props.limit))},lu(e,[{key:"type",get:function(){return th.Limit}}]),e}(oh),Hh=function(t){function e(){return t.apply(this,arguments)||this}return du(e,t),e.prototype._process=function(t){var e={};return this.props.url&&(e.url=this.props.url(t.url,this.props.page,this.props.limit)),this.props.body&&(e.body=this.props.body(t.body,this.props.page,this.props.limit)),cu({},t,e)},lu(e,[{key:"type",get:function(){return th.ServerLimit}}]),e}(oh);function Vh(){var t=Nh(),e=t.pagination,i=e.server,n=e.summary,s=void 0===n||n,r=e.nextButton,o=void 0===r||r,a=e.prevButton,l=void 0===a||a,c=e.buttonsCount,d=void 0===c?3:c,p=e.limit,u=void 0===p?10:p,h=e.page,g=void 0===h?0:h,f=e.resetPageOnUpdate,m=void 0===f||f,b=Oh(null),y=Ah(g),v=y[0],_=y[1],w=Ah(0),x=w[0],k=w[1],A=Fh();Sh(function(){return i?(b.current=new Hh({limit:u,page:v,url:i.url,body:i.body}),t.pipeline.register(b.current)):(b.current=new Uh({limit:u,page:v}),t.pipeline.register(b.current)),b.current instanceof Hh?t.pipeline.on("afterProcess",function(t){return k(t.length)}):b.current instanceof Uh&&b.current.on("beforeProcess",function(t){return k(t.length)}),t.pipeline.on("updated",S),t.pipeline.on("error",function(){k(0),_(0)}),function(){t.pipeline.unregister(b.current),t.pipeline.off("updated",S)}},[]);var S=function(t){m&&t!==b.current&&(_(0),0!==b.current.props.page&&b.current.setProps({page:0}))},O=function(){return Math.ceil(x/u)},E=function(t){if(t>=O()||t<0||t===v)return null;_(t),b.current.setProps({page:t})};return $u("div",{className:ch(lh("pagination"),t.className.pagination)},$u(Tu,null,s&&x>0&&$u("div",{role:"status","aria-live":"polite",className:ch(lh("summary"),t.className.paginationSummary),title:A("pagination.navigate",v+1,O())},A("pagination.showing")," ",$u("b",null,A(""+(v*u+1)))," ",A("pagination.to")," ",$u("b",null,A(""+Math.min((v+1)*u,x)))," ",A("pagination.of")," ",$u("b",null,A(""+x))," ",A("pagination.results"))),$u("div",{className:lh("pages")},l&&$u("button",{tabIndex:0,role:"button",disabled:0===v,onClick:function(){return E(v-1)},title:A("pagination.previous"),"aria-label":A("pagination.previous"),className:ch(t.className.paginationButton,t.className.paginationButtonPrev)},A("pagination.previous")),function(){if(d<=0)return null;var e=Math.min(O(),d),i=Math.min(v,Math.floor(e/2));return v+Math.floor(e/2)>=O()&&(i=e-(O()-v)),$u(Tu,null,O()>e&&v-i>0&&$u(Tu,null,$u("button",{tabIndex:0,role:"button",onClick:function(){return E(0)},title:A("pagination.firstPage"),"aria-label":A("pagination.firstPage"),className:t.className.paginationButton},A("1")),$u("button",{tabIndex:-1,className:ch(lh("spread"),t.className.paginationButton)},"...")),Array.from(Array(e).keys()).map(function(t){return v+(t-i)}).map(function(e){return $u("button",{tabIndex:0,role:"button",onClick:function(){return E(e)},className:ch(v===e?ch(lh("currentPage"),t.className.paginationButtonCurrent):null,t.className.paginationButton),title:A("pagination.page",e+1),"aria-label":A("pagination.page",e+1)},A(""+(e+1)))}),O()>e&&O()>v+i+1&&$u(Tu,null,$u("button",{tabIndex:-1,className:ch(lh("spread"),t.className.paginationButton)},"..."),$u("button",{tabIndex:0,role:"button",onClick:function(){return E(O()-1)},title:A("pagination.page",O()),"aria-label":A("pagination.page",O()),className:t.className.paginationButton},A(""+O()))))}(),o&&$u("button",{tabIndex:0,role:"button",disabled:O()===v+1||0===O(),onClick:function(){return E(v+1)},title:A("pagination.next"),"aria-label":A("pagination.next"),className:ch(t.className.paginationButton,t.className.paginationButtonNext)},A("pagination.next"))))}function Wh(t,e){return"string"==typeof t?t.indexOf("%")>-1?e/100*parseInt(t,10):parseInt(t,10):t}function Gh(t){return t?Math.floor(t)+"px":""}function Yh(t){var e=t.tableRef.cloneNode(!0);return e.style.position="absolute",e.style.width="100%",e.style.zIndex="-2147483640",e.style.visibility="hidden",$u("div",{ref:function(t){t&&t.appendChild(e)}})}function Qh(t){if(!t)return"";var e=t.split(" ");return 1===e.length&&/([a-z][A-Z])+/g.test(t)?t:e.map(function(t,e){return 0==e?t.toLowerCase():t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}).join("")}var Kh,Jh=new(function(){function t(){}var e=t.prototype;return e.format=function(t,e){return"[Grid.js] ["+e.toUpperCase()+"]: "+t},e.error=function(t,e){void 0===e&&(e=!1);var i=this.format(t,"error");if(e)throw Error(i);console.error(i)},e.warn=function(t){console.warn(this.format(t,"warn"))},e.info=function(t){console.info(this.format(t,"info"))},t}());!function(t){t[t.Header=0]="Header",t[t.Footer=1]="Footer",t[t.Cell=2]="Cell"}(Kh||(Kh={}));var Zh=function(){function t(){this.plugins=void 0,this.plugins=[]}var e=t.prototype;return e.get=function(t){return this.plugins.find(function(e){return e.id===t})},e.add=function(t){return t.id?this.get(t.id)?(Jh.error("Duplicate plugin ID: "+t.id),this):(this.plugins.push(t),this):(Jh.error("Plugin ID cannot be empty"),this)},e.remove=function(t){var e=this.get(t);return e&&this.plugins.splice(this.plugins.indexOf(e),1),this},e.list=function(t){return(null!=t||null!=t?this.plugins.filter(function(e){return e.position===t}):this.plugins).sort(function(t,e){return t.order&&e.order?t.order-e.order:1})},t}();function Xh(t){var e=this,i=Nh();if(t.pluginId){var n=i.plugin.get(t.pluginId);return n?$u(Tu,{},$u(n.component,cu({plugin:n},t.props))):null}return void 0!==t.position?$u(Tu,{},i.plugin.list(t.position).map(function(t){return $u(t.component,cu({plugin:t},e.props.props))})):null}var tg=function(t){function e(){var e;return(e=t.call(this)||this)._columns=void 0,e._columns=[],e}du(e,t);var i=e.prototype;return i.adjustWidth=function(t,i,n){var s=t.container,r=t.autoWidth;if(!s)return this;var o=s.clientWidth,a={};i.current&&r&&(Qu($u(Yh,{tableRef:i.current}),n.current),a=function(t){var e=t.querySelector("table");if(!e)return{};var i=e.className,n=e.style.cssText;e.className=i+" "+lh("shadowTable"),e.style.tableLayout="auto",e.style.width="auto",e.style.padding="0",e.style.margin="0",e.style.border="none",e.style.outline="none";var s=Array.from(e.parentNode.querySelectorAll("thead th")).reduce(function(t,e){var i;return e.style.width=e.clientWidth+"px",cu(((i={})[e.getAttribute("data-column-id")]={minWidth:e.clientWidth},i),t)},{});return e.className=i,e.style.cssText=n,e.style.tableLayout="auto",Array.from(e.parentNode.querySelectorAll("thead th")).reduce(function(t,e){return t[e.getAttribute("data-column-id")].width=e.clientWidth,t},s)}(n.current));for(var l,c=gu(e.tabularFormat(this.columns).reduce(function(t,e){return t.concat(e)},[]));!(l=c()).done;){var d=l.value;d.columns&&d.columns.length>0||(!d.width&&r?d.id in a&&(d.width=Gh(a[d.id].width),d.minWidth=Gh(a[d.id].minWidth)):d.width=Gh(Wh(d.width,o)))}return i.current&&r&&Qu(null,n.current),this},i.setSort=function(t,e){for(var i,n=gu(e||this.columns||[]);!(i=n()).done;){var s=i.value;s.columns&&s.columns.length>0?s.sort=void 0:void 0===s.sort&&t?s.sort={}:s.sort?"object"==typeof s.sort&&(s.sort=cu({},s.sort)):s.sort=void 0,s.columns&&this.setSort(t,s.columns)}},i.setResizable=function(t,e){for(var i,n=gu(e||this.columns||[]);!(i=n()).done;){var s=i.value;void 0===s.resizable&&(s.resizable=t),s.columns&&this.setResizable(t,s.columns)}},i.setID=function(t){for(var e,i=gu(t||this.columns||[]);!(e=i()).done;){var n=e.value;n.id||"string"!=typeof n.name||(n.id=Qh(n.name)),n.id||Jh.error('Could not find a valid ID for one of the columns. Make sure a valid "id" is set for all columns.'),n.columns&&this.setID(n.columns)}},i.populatePlugins=function(t,e){for(var i,n=gu(e);!(i=n()).done;){var s=i.value;void 0!==s.plugin&&t.add(cu({id:s.id},s.plugin,{position:Kh.Cell}))}},e.fromColumns=function(t){for(var i,n=new e,s=gu(t);!(i=s()).done;){var r=i.value;if("string"==typeof r||vu(r))n.columns.push({name:r});else if("object"==typeof r){var o=r;o.columns&&(o.columns=e.fromColumns(o.columns).columns),"object"==typeof o.plugin&&void 0===o.data&&(o.data=null),n.columns.push(r)}}return n},e.createFromConfig=function(t){var i=new e;return t.from?i.columns=e.fromHTMLTable(t.from).columns:t.columns?i.columns=e.fromColumns(t.columns).columns:!t.data||"object"!=typeof t.data[0]||t.data[0]instanceof Array||(i.columns=Object.keys(t.data[0]).map(function(t){return{name:t}})),i.columns.length?(i.setID(),i.setSort(t.sort),i.setResizable(t.resizable),i.populatePlugins(t.plugin,i.columns),i):null},e.fromHTMLTable=function(t){for(var i,n=new e,s=gu(t.querySelector("thead").querySelectorAll("th"));!(i=s()).done;){var r=i.value;n.columns.push({name:r.innerHTML,width:r.width})}return n},e.tabularFormat=function(t){var e=[],i=t||[],n=[];if(i&&i.length){e.push(i);for(var s,r=gu(i);!(s=r()).done;){var o=s.value;o.columns&&o.columns.length&&(n=n.concat(o.columns))}n.length&&(e=e.concat(this.tabularFormat(n)))}return e},e.leafColumns=function(t){var e=[],i=t||[];if(i&&i.length)for(var n,s=gu(i);!(n=s()).done;){var r=n.value;r.columns&&0!==r.columns.length||e.push(r),r.columns&&(e=e.concat(this.leafColumns(r.columns)))}return e},e.maximumDepth=function(t){return this.tabularFormat([t]).length-1},lu(e,[{key:"columns",get:function(){return this._columns},set:function(t){this._columns=t}},{key:"visibleColumns",get:function(){return this._columns.filter(function(t){return!t.hidden})}}]),e}(Ju),eg=function(){},ig=function(t){function e(e){var i;return(i=t.call(this)||this).data=void 0,i.set(e),i}du(e,t);var i=e.prototype;return i.get=function(){try{return Promise.resolve(this.data()).then(function(t){return{data:t,total:t.length}})}catch(t){return Promise.reject(t)}},i.set=function(t){return t instanceof Array?this.data=function(){return t}:t instanceof Function&&(this.data=t),this},e}(eg),ng=function(t){function e(e){var i;return(i=t.call(this)||this).options=void 0,i.options=e,i}du(e,t);var i=e.prototype;return i.handler=function(t){return"function"==typeof this.options.handle?this.options.handle(t):t.ok?t.json():(Jh.error("Could not fetch data: "+t.status+" - "+t.statusText,!0),null)},i.get=function(t){var e=cu({},this.options,t);return"function"==typeof e.data?e.data(e):fetch(e.url,e).then(this.handler.bind(this)).then(function(t){return{data:e.then(t),total:"function"==typeof e.total?e.total(t):void 0}})},e}(eg),sg=function(){function t(){}return t.createFromConfig=function(t){var e=null;return t.data&&(e=new ig(t.data)),t.from&&(e=new ig(this.tableElementToArray(t.from)),t.from.style.display="none"),t.server&&(e=new ng(t.server)),e||Jh.error("Could not determine the storage type",!0),e},t.tableElementToArray=function(t){for(var e,i,n=[],s=gu(t.querySelector("tbody").querySelectorAll("tr"));!(e=s()).done;){for(var r,o=[],a=gu(e.value.querySelectorAll("td"));!(r=a()).done;){var l=r.value;1===l.childNodes.length&&l.childNodes[0].nodeType===Node.TEXT_NODE?o.push((i=l.innerHTML,(new DOMParser).parseFromString(i,"text/html").documentElement.textContent)):o.push(Xu(l.innerHTML))}n.push(o)}return n},t}(),rg="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function og(t,e,i){if(!t.s){if(i instanceof ag){if(!i.s)return void(i.o=og.bind(null,t,e));1&e&&(e=i.s),i=i.v}if(i&&i.then)return void i.then(og.bind(null,t,e),og.bind(null,t,2));t.s=e,t.v=i;var n=t.o;n&&n(t)}}var ag=function(){function t(){}return t.prototype.then=function(e,i){var n=new t,s=this.s;if(s){var r=1&s?e:i;if(r){try{og(n,1,r(this.v))}catch(t){og(n,2,t)}return n}return this}return this.o=function(t){try{var s=t.v;1&t.s?og(n,1,e?e(s):s):i?og(n,1,i(s)):og(n,2,s)}catch(t){og(n,2,t)}},n},t}();function lg(t){return t instanceof ag&&1&t.s}var cg=function(t){function e(e){var i;return(i=t.call(this)||this)._steps=new Map,i.cache=new Map,i.lastProcessorIndexUpdated=-1,e&&e.forEach(function(t){return i.register(t)}),i}du(e,t);var i=e.prototype;return i.clearCache=function(){this.cache=new Map,this.lastProcessorIndexUpdated=-1},i.register=function(t,e){if(void 0===e&&(e=null),!t)throw Error("Processor is not defined");if(null===t.type)throw Error("Processor type is not defined");if(this.findProcessorIndexByID(t.id)>-1)throw Error("Processor ID "+t.id+" is already defined");return t.on("propsUpdated",this.processorPropsUpdated.bind(this)),this.addProcessorByPriority(t,e),this.afterRegistered(t),t},i.tryRegister=function(t,e){void 0===e&&(e=null);try{return this.register(t,e)}catch(t){}},i.unregister=function(t){if(t&&-1!==this.findProcessorIndexByID(t.id)){var e=this._steps.get(t.type);e&&e.length&&(this._steps.set(t.type,e.filter(function(e){return e!=t})),this.emit("updated",t))}},i.addProcessorByPriority=function(t,e){var i=this._steps.get(t.type);if(!i){var n=[];this._steps.set(t.type,n),i=n}if(null===e||e<0)i.push(t);else if(i[e]){var s=i.slice(0,e-1),r=i.slice(e+1);this._steps.set(t.type,s.concat(t).concat(r))}else i[e]=t},i.getStepsByType=function(t){return this.steps.filter(function(e){return e.type===t})},i.getSortedProcessorTypes=function(){return Object.keys(th).filter(function(t){return!isNaN(Number(t))}).map(function(t){return Number(t)})},i.process=function(t){try{var e=function(t){return i.lastProcessorIndexUpdated=s.length,i.emit("afterProcess",r),r},i=this,n=i.lastProcessorIndexUpdated,s=i.steps,r=t,o=function(t,e){try{var o=function(t,e){if("function"==typeof t[rg]){var i,n,s,r=t[rg]();if(function t(o){try{for(;!(i=r.next()).done;)if((o=e(i.value))&&o.then){if(!lg(o))return void o.then(t,s||(s=og.bind(null,n=new ag,2)));o=o.v}n?og(n,1,o):n=o}catch(t){og(n||(n=new ag),2,t)}}(),r.return){var o=function(t){try{i.done||r.return()}catch(t){}return t};if(n&&n.then)return n.then(o,function(t){throw o(t)});o()}return n}if(!("length"in t))throw new TypeError("Object is not iterable");for(var a=[],l=0;l<t.length;l++)a.push(t[l]);return function(t,e){var i,n,s=-1;return function r(o){try{for(;++s<t.length;)if((o=e(s))&&o.then){if(!lg(o))return void o.then(r,n||(n=og.bind(null,i=new ag,2)));o=o.v}i?og(i,1,o):i=o}catch(t){og(i||(i=new ag),2,t)}}(),i}(a,function(t){return e(a[t])})}(s,function(t){var e=i.findProcessorIndexByID(t.id),s=function(){if(e>=n)return Promise.resolve(t.process(r)).then(function(e){i.cache.set(t.id,r=e)});r=i.cache.get(t.id)}();if(s&&s.then)return s.then(function(){})})}catch(t){return e(t)}return o&&o.then?o.then(void 0,e):o}(0,function(t){throw Jh.error(t),i.emit("error",r),t});return Promise.resolve(o&&o.then?o.then(e):e())}catch(t){return Promise.reject(t)}},i.findProcessorIndexByID=function(t){return this.steps.findIndex(function(e){return e.id==t})},i.setLastProcessorIndex=function(t){var e=this.findProcessorIndexByID(t.id);this.lastProcessorIndexUpdated>e&&(this.lastProcessorIndexUpdated=e)},i.processorPropsUpdated=function(t){this.setLastProcessorIndex(t),this.emit("propsUpdated"),this.emit("updated",t)},i.afterRegistered=function(t){this.setLastProcessorIndex(t),this.emit("afterRegister"),this.emit("updated",t)},lu(e,[{key:"steps",get:function(){for(var t,e=[],i=gu(this.getSortedProcessorTypes());!(t=i()).done;){var n=this._steps.get(t.value);n&&n.length&&(e=e.concat(n))}return e.filter(function(t){return t})}}]),e}(sh),dg=function(t){function e(){return t.apply(this,arguments)||this}return du(e,t),e.prototype._process=function(t){try{return Promise.resolve(this.props.storage.get(t))}catch(t){return Promise.reject(t)}},lu(e,[{key:"type",get:function(){return th.Extractor}}]),e}(oh),pg=function(t){function e(){return t.apply(this,arguments)||this}return du(e,t),e.prototype._process=function(t){var e=nh.fromArray(t.data);return e.length=t.total,e},lu(e,[{key:"type",get:function(){return th.Transformer}}]),e}(oh),ug=function(t){function e(){return t.apply(this,arguments)||this}return du(e,t),e.prototype._process=function(){return Object.entries(this.props.serverStorageOptions).filter(function(t){return"function"!=typeof t[1]}).reduce(function(t,e){var i;return cu({},t,((i={})[e[0]]=e[1],i))},{})},lu(e,[{key:"type",get:function(){return th.Initiator}}]),e}(oh),hg=function(t){function e(){return t.apply(this,arguments)||this}du(e,t);var i=e.prototype;return i.castData=function(t){if(!t||!t.length)return[];if(!this.props.header||!this.props.header.columns)return t;var e=tg.leafColumns(this.props.header.columns);return t[0]instanceof Array?t.map(function(t){var i=0;return e.map(function(e,n){return void 0!==e.data?(i++,"function"==typeof e.data?e.data(t):e.data):t[n-i]})}):"object"!=typeof t[0]||t[0]instanceof Array?[]:t.map(function(t){return e.map(function(e,i){return void 0!==e.data?"function"==typeof e.data?e.data(t):e.data:e.id?t[e.id]:(Jh.error("Could not find the correct cell for column at position "+i+".\n                          Make sure either 'id' or 'selector' is defined for all columns."),null)})})},i._process=function(t){return{data:this.castData(t.data),total:t.total}},lu(e,[{key:"type",get:function(){return th.Transformer}}]),e}(oh),gg=function(){function t(){}return t.createFromConfig=function(t){var e=new cg;return t.storage instanceof ng&&e.register(new ug({serverStorageOptions:t.server})),e.register(new dg({storage:t.storage})),e.register(new hg({header:t.header})),e.register(new pg),e},t}(),fg=function(t){var e=this;this.state=void 0,this.listeners=[],this.isDispatching=!1,this.getState=function(){return e.state},this.getListeners=function(){return e.listeners},this.dispatch=function(t){if("function"!=typeof t)throw new Error("Reducer is not a function");if(e.isDispatching)throw new Error("Reducers may not dispatch actions");e.isDispatching=!0;var i=e.state;try{e.state=t(e.state)}finally{e.isDispatching=!1}for(var n,s=gu(e.listeners);!(n=s()).done;)(0,n.value)(e.state,i);return e.state},this.subscribe=function(t){if("function"!=typeof t)throw new Error("Listener is not a function");return e.listeners=[].concat(e.listeners,[t]),function(){return e.listeners=e.listeners.filter(function(e){return e!==t})}},this.state=t},mg=function(t,e){var i={__c:e="__cC"+xu++,__:null,Consumer:function(t,e){return t.children(e)},Provider:function(t){var i,n;return this.getChildContext||(i=[],(n={})[e]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&i.some(ju)},this.sub=function(t){i.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){i.splice(i.indexOf(t),1),e&&e.call(t)}}),t.children}};return i.Provider.__=i.Consumer.contextType=i}(),bg=function(){function t(){Object.assign(this,t.defaultConfig())}var e=t.prototype;return e.assign=function(t){return Object.assign(this,t)},e.update=function(e){return e?(this.assign(t.fromPartialConfig(cu({},this,e))),this):this},t.defaultConfig=function(){return{store:new fg({status:fu.Init,header:void 0,data:null}),plugin:new Zh,tableRef:{current:null},width:"100%",height:"auto",processingThrottleMs:100,autoWidth:!0,style:{},className:{}}},t.fromPartialConfig=function(e){var i=(new t).assign(e);return"boolean"==typeof e.sort&&e.sort&&i.assign({sort:{multiColumn:!0}}),i.assign({header:tg.createFromConfig(i)}),i.assign({storage:sg.createFromConfig(i)}),i.assign({pipeline:gg.createFromConfig(i)}),i.assign({translator:new Dh(i.language)}),i.plugin=new Zh,i.search&&i.plugin.add({id:"search",position:Kh.Header,component:zh}),i.pagination&&i.plugin.add({id:"pagination",position:Kh.Footer,component:Vh}),i.plugins&&i.plugins.forEach(function(t){return i.plugin.add(t)}),i},t}();function yg(t){var e,i=Nh();return $u("td",cu({role:t.role,colSpan:t.colSpan,"data-column-id":t.column&&t.column.id,className:ch(lh("td"),t.className,i.className.td),style:cu({},t.style,i.style.td),onClick:function(e){t.messageCell||i.eventEmitter.emit("cellClick",e,t.cell,t.column,t.row)}},(e=t.column)?"function"==typeof e.attributes?e.attributes(t.cell.data,t.row,t.column):e.attributes:{}),t.column&&"function"==typeof t.column.formatter?t.column.formatter(t.cell.data,t.row,t.column):t.column&&t.column.plugin?$u(Xh,{pluginId:t.column.id,props:{column:t.column,cell:t.cell,row:t.row}}):t.cell.data)}function vg(t){var e=Nh(),i=qh(function(t){return t.header});return $u("tr",{className:ch(lh("tr"),e.className.tr),onClick:function(i){t.messageRow||e.eventEmitter.emit("rowClick",i,t.row)}},t.children?t.children:t.row.cells.map(function(e,n){var s=function(t){if(i){var e=tg.leafColumns(i.columns);if(e)return e[t]}return null}(n);return s&&s.hidden?null:$u(yg,{key:e.id,cell:e,row:t.row,column:s})}))}function _g(t){return $u(vg,{messageRow:!0},$u(yg,{role:"alert",colSpan:t.colSpan,messageCell:!0,cell:new eh(t.message),className:ch(lh("message"),t.className?t.className:null)}))}function wg(){var t=Nh(),e=qh(function(t){return t.data}),i=qh(function(t){return t.status}),n=qh(function(t){return t.header}),s=Fh(),r=function(){return n?n.visibleColumns.length:0};return $u("tbody",{className:ch(lh("tbody"),t.className.tbody)},e&&e.rows.map(function(t){return $u(vg,{key:t.id,row:t})}),i===fu.Loading&&(!e||0===e.length)&&$u(_g,{message:s("loading"),colSpan:r(),className:ch(lh("loading"),t.className.loading)}),i===fu.Rendered&&e&&0===e.length&&$u(_g,{message:s("noRecordsFound"),colSpan:r(),className:ch(lh("notfound"),t.className.notfound)}),i===fu.Error&&$u(_g,{message:s("error"),colSpan:r(),className:ch(lh("error"),t.className.error)}))}var xg=function(t){function e(){return t.apply(this,arguments)||this}du(e,t);var i=e.prototype;return i.validateProps=function(){for(var t,e=gu(this.props.columns);!(t=e()).done;){var i=t.value;void 0===i.direction&&(i.direction=1),1!==i.direction&&-1!==i.direction&&Jh.error("Invalid sort direction "+i.direction)}},i.compare=function(t,e){return t>e?1:t<e?-1:0},i.compareWrapper=function(t,e){for(var i,n=0,s=gu(this.props.columns);!(i=s()).done;){var r=i.value;if(0!==n)break;var o=t.cells[r.index].data,a=e.cells[r.index].data;n|="function"==typeof r.compare?r.compare(o,a)*r.direction:this.compare(o,a)*r.direction}return n},i._process=function(t){var e=[].concat(t.rows);e.sort(this.compareWrapper.bind(this));var i=new nh(e);return i.length=t.length,i},lu(e,[{key:"type",get:function(){return th.Sort}}]),e}(oh),kg=function(t,e,i,n){return function(s){var r,o=null!=(r=s.sort)&&r.columns?s.sort.columns.map(function(t){return cu({},t)}):[],a=o.length,l=o.find(function(e){return e.index===t}),c=!1,d=!1,p=!1,u=!1;if(void 0!==l?i?-1===l.direction?p=!0:u=!0:1===a?u=!0:a>1&&(d=!0,c=!0):0===a?c=!0:a>0&&!i?(c=!0,d=!0):a>0&&i&&(c=!0),d&&(o=[]),c)o.push({index:t,direction:e,compare:n});else if(u){var h=o.indexOf(l);o[h].direction=e}else if(p){var g=o.indexOf(l);o.splice(g,1)}return cu({},s,{sort:{columns:o}})}},Ag=function(t,e,i){return function(n){var s=(n.sort?[].concat(n.sort.columns):[]).find(function(e){return e.index===t});return cu({},n,s?kg(t,1===s.direction?-1:1,e,i)(n):kg(t,1,e,i)(n))}},Sg=function(t){function e(){return t.apply(this,arguments)||this}return du(e,t),e.prototype._process=function(t){var e={};return this.props.url&&(e.url=this.props.url(t.url,this.props.columns)),this.props.body&&(e.body=this.props.body(t.body,this.props.columns)),cu({},t,e)},lu(e,[{key:"type",get:function(){return th.ServerSort}}]),e}(oh);function Og(t){var e=Nh(),i=Mh().dispatch,n=Fh(),s=Ah(0),r=s[0],o=s[1],a=e.sort,l=qh(function(t){return t.sort}),c="object"==typeof(null==a?void 0:a.server)?th.ServerSort:th.Sort,d=function(){var t=e.pipeline.getStepsByType(c);if(t.length)return t[0]};return Sh(function(){var t=d()||(c===th.ServerSort?new Sg(cu({columns:l?l.columns:[]},a.server)):new xg({columns:l?l.columns:[]}));return e.pipeline.tryRegister(t),function(){return e.pipeline.unregister(t)}},[e]),Sh(function(){if(l){var e,i=l.columns.find(function(e){return e.index===t.index});i?(0===r&&(i.direction=null!=(e=t.direction)?e:1),o(i.direction)):o(0)}},[l]),Sh(function(){var t=d();t&&l&&t.setProps({columns:l.columns})},[l]),$u("button",{tabIndex:-1,"aria-label":n("sort.sort"+(1===r?"Desc":"Asc")),title:n("sort.sort"+(1===r?"Desc":"Asc")),className:ch(lh("sort"),lh("sort",function(t){return 1===t?"asc":-1===t?"desc":"neutral"}(r)),e.className.sort),onClick:function(e){e.preventDefault(),e.stopPropagation(),i(Ag(t.index,!0===e.shiftKey&&a.multiColumn,t.compare))}})}var Eg=function(t,e){var i;void 0===e&&(e=100);var n=Date.now(),s=function(){n=Date.now(),t.apply(void 0,[].slice.call(arguments))};return function(){var t=[].slice.call(arguments),r=Date.now()-n;r>=e?s.apply(void 0,t):(i&&clearTimeout(i),i=setTimeout(function(){s.apply(void 0,t),i=null},e-r))}};function $g(t){var e,i=function(t){return t instanceof MouseEvent?Math.floor(t.pageX):Math.floor(t.changedTouches[0].pageX)},n=function(n){n.stopPropagation();var o=parseInt(t.thRef.current.style.width,10)-i(n);e=Eg(function(t){return s(t,o)},10),document.addEventListener("mouseup",r),document.addEventListener("touchend",r),document.addEventListener("mousemove",e),document.addEventListener("touchmove",e)},s=function(e,n){e.stopPropagation();var s=t.thRef.current;n+i(e)>=parseInt(s.style.minWidth,10)&&(s.style.width=n+i(e)+"px")},r=function t(i){i.stopPropagation(),document.removeEventListener("mouseup",t),document.removeEventListener("mousemove",e),document.removeEventListener("touchmove",e),document.removeEventListener("touchend",t)};return $u("div",{className:ch(lh("th"),lh("resizable")),onMouseDown:n,onTouchStart:n,onClick:function(t){return t.stopPropagation()}})}function Cg(t){var e=Nh(),i=Oh(null),n=Ah({}),s=n[0],r=n[1],o=Mh().dispatch;Sh(function(){if(e.fixedHeader&&i.current){var t=i.current.offsetTop;"number"==typeof t&&r({top:t})}},[i]);var a,l=function(){return null!=t.column.sort},c=function(i){i.stopPropagation(),l()&&o(Ag(t.index,!0===i.shiftKey&&e.sort.multiColumn,t.column.sort.compare))};return $u("th",cu({ref:i,"data-column-id":t.column&&t.column.id,className:ch(lh("th"),l()?lh("th","sort"):null,e.fixedHeader?lh("th","fixed"):null,e.className.th),onClick:c,style:cu({},e.style.th,{minWidth:t.column.minWidth,width:t.column.width},s,t.style),onKeyDown:function(t){l()&&13===t.which&&c(t)},rowSpan:t.rowSpan>1?t.rowSpan:void 0,colSpan:t.colSpan>1?t.colSpan:void 0},(a=t.column)?"function"==typeof a.attributes?a.attributes(null,null,t.column):a.attributes:{},l()?{tabIndex:0}:{}),$u("div",{className:lh("th","content")},void 0!==t.column.name?t.column.name:void 0!==t.column.plugin?$u(Xh,{pluginId:t.column.plugin.id,props:{column:t.column}}):null),l()&&$u(Og,cu({index:t.index},t.column.sort)),t.column.resizable&&t.index<e.header.visibleColumns.length-1&&$u($g,{column:t.column,thRef:i}))}function Tg(){var t,e=Nh(),i=qh(function(t){return t.header});return i?$u("thead",{key:i.id,className:ch(lh("thead"),e.className.thead)},(t=tg.tabularFormat(i.columns)).map(function(e,n){return function(t,e,n){var s=tg.leafColumns(i.columns);return $u(vg,null,t.map(function(t){return t.hidden?null:function(t,e,i,n){var s=function(t,e,i){var n=tg.maximumDepth(t),s=i-e;return{rowSpan:Math.floor(s-n-n/s),colSpan:t.columns&&t.columns.length||1}}(t,e,n);return $u(Cg,{column:t,index:i,colSpan:s.colSpan,rowSpan:s.rowSpan})}(t,e,s.indexOf(t),n)}))}(e,n,t.length)})):null}var Ig=function(t){return function(e){return cu({},e,{header:t})}};function Lg(){var t=Nh(),e=Oh(null),i=Mh().dispatch;return Sh(function(){e&&i(function(t){return function(e){return cu({},e,{tableRef:t})}}(e))},[e]),$u("table",{ref:e,role:"grid",className:ch(lh("table"),t.className.table),style:cu({},t.style.table,{height:t.height})},$u(Tg,null),$u(wg,null))}function Rg(){var t=Ah(!0),e=t[0],i=t[1],n=Oh(null),s=Nh();return Sh(function(){0===n.current.children.length&&i(!1)},[n]),e?$u("div",{ref:n,className:ch(lh("head"),s.className.header),style:cu({},s.style.header)},$u(Xh,{position:Kh.Header})):null}function jg(){var t=Oh(null),e=Ah(!0),i=e[0],n=e[1],s=Nh();return Sh(function(){0===t.current.children.length&&n(!1)},[t]),i?$u("div",{ref:t,className:ch(lh("footer"),s.className.footer),style:cu({},s.style.footer)},$u(Xh,{position:Kh.Footer})):null}function Ng(){var t=Nh(),e=Mh().dispatch,i=qh(function(t){return t.status}),n=qh(function(t){return t.data}),s=qh(function(t){return t.tableRef}),r={current:null},o=Eg(function(){try{e(function(t){return cu({},t,{status:fu.Loading})});var i=function(i,n){try{var s=Promise.resolve(t.pipeline.process()).then(function(t){e(function(t){return function(e){return t?cu({},e,{data:t,status:fu.Loaded}):e}}(t)),setTimeout(function(){e(function(t){return t.status===fu.Loaded?cu({},t,{status:fu.Rendered}):t})},0)})}catch(t){return n(t)}return s&&s.then?s.then(void 0,n):s}(0,function(t){Jh.error(t),e(function(t){return cu({},t,{data:null,status:fu.Error})})});return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},t.processingThrottleMs);return Sh(function(){return e(Ig(t.header)),o(),t.pipeline.on("updated",o),function(){return t.pipeline.off("updated",o)}},[]),Sh(function(){t.header&&i===fu.Loaded&&null!=n&&n.length&&e(Ig(t.header.adjustWidth(t,s,r)))},[n,t,r]),$u("div",{role:"complementary",className:ch("gridjs",lh("container"),i===fu.Loading?lh("loading"):null,t.className.container),style:cu({},t.style.container,{width:t.width})},i===fu.Loading&&$u("div",{className:lh("loading-bar")}),$u(Rg,null),$u("div",{className:lh("wrapper"),style:{height:t.height}},$u(Lg,null)),$u(jg,null),$u("div",{ref:r,id:"gridjs-temp",className:lh("temp")}))}var Pg=function(t){function e(e){var i;return(i=t.call(this)||this).config=void 0,i.plugin=void 0,i.config=(new bg).assign({instance:uu(i),eventEmitter:uu(i)}).update(e),i.plugin=i.config.plugin,i}du(e,t);var i=e.prototype;return i.updateConfig=function(t){return this.config.update(t),this},i.createElement=function(){return $u(mg.Provider,{value:this.config,children:$u(Ng,{})})},i.forceRender=function(){return this.config&&this.config.container||Jh.error("Container is empty. Make sure you call render() before forceRender()",!0),this.destroy(),Qu(this.createElement(),this.config.container),this},i.destroy=function(){this.config.pipeline.clearCache(),Qu(null,this.config.container)},i.render=function(t){return t||Jh.error("Container element cannot be null",!0),t.childNodes.length>0?(Jh.error("The container element "+t+" is not empty. Make sure the container is empty and call render() again"),this):(this.config.container=t,Qu(this.createElement(),t),this)},e}(sh);class Dg extends n{static get properties(){return Object.assign({label:{type:String},property:{type:String},sort:{type:Boolean},width:{type:String}},super.properties)}constructor(){super(),this.label="no-label",this.property=null,this.sort=!1,this.width=null}connectedCallback(){super.connectedCallback()}data(){const t={name:Xu(`<pb-i18n key="${this.label}">${this.label}</pb-i18n>`),sort:{enabled:this.sort},formatter:t=>Xu(t)};return this.property&&(t.id=this.property),this.width&&(t.width=this.width),t}}customElements.define("pb-table-column",Dg);class Fg extends(m(s(n))){static get properties(){return Object.assign({source:{type:String},cssPath:{type:String,attribute:"css-path"},resizable:{type:Boolean},subforms:{type:String},perPage:{type:Number,attribute:"per-page"},height:{type:String},search:{type:Boolean},paginationTop:{type:Boolean,attribute:"pagination-top"},_params:{type:Object},_initialized:{type:Boolean}},super.properties)}constructor(){super(),this.cssPath="../css/gridjs",this._params={},this.resizable=!1,this.search=!1,this.paginationTop=!1,this.perPage=10,this.height=null,this.fixedHeader=!1,this._initialized=!1}async connectedCallback(){if(super.connectedCallback(),this.subscribeTo("pb-search-resubmit",t=>{this._submit()}),v.subscribe(this,t=>{this._params=t,this._submit()}),this.subscribeTo("pb-i18n-update",t=>{const e=this.language&&this.language!==t.detail.language;this.language=t.detail.language,e&&this._submit()},[]),!this.height){const t=getComputedStyle(this).getPropertyValue("--pb-table-grid-height");this.height=t||"auto"}const t=await b([`${f(this.cssPath)}/mermaid.min.css`]),e=y(this),i=[...this.shadowRoot.adoptedStyleSheets];t&&i.push(t),e&&i.push(e),this.shadowRoot.adoptedStyleSheets=i}firstUpdated(){r("pb-page-ready",t=>{t&&t.language&&(this.language=t.language),this._params=v.state,this._initGrid()}),requestAnimationFrame(()=>this._initGrid())}_initGrid(){if(this._initialized||this.grid)return;const t=this.shadowRoot.getElementById("table");if(!t)return;const e=this.querySelectorAll("pb-table-column"),i=[];e.forEach(t=>i.push(t.data()));const n=this.getEndpoint&&this.getEndpoint()||".",s=this.toAbsoluteURL(this.source,n),r={height:this.height,fixedHeader:!0,columns:i,resizable:this.resizable,server:{url:s,then:t=>t.results,total:t=>t.count},sort:{multiColumn:!1,enabled:!0,server:{url:(t,e)=>{if(!e.length)return t;const n=e[0];return`${t}${t.indexOf("?")>-1?"&":"?"}order=${i[n.index].id}&dir=${1===n.direction?"asc":"desc"}`}}},pagination:{enabled:!0,limit:this.perPage,server:{url:(t,e,i)=>{const n=this.shadowRoot.getElementById("form");n&&Object.assign(this._params,this._serializeSearchForm(n)),this._params=this._paramsFromSubforms(this._params),this._params.limit=i,this._params.start=e*i+1,this.language&&(this._params.language=this.language),v.commit(this,this._params);const s=Object.assign({},this._params);return Object.keys(s).forEach(t=>{null===s[t]&&delete s[t]}),`${t}${t.indexOf("?")>-1?"&":"?"}${new URLSearchParams(s).toString()}`}}}};this.grid=new Pg(r),this.paginationTop&&(this.grid.plugin.get("pagination").position=Kh.Header),this.grid.on("load",()=>{this.emitTo("pb-results-received",{params:this._params})}),this.grid.render(t),this._initialized=!0}_submit(){this.grid&&this.grid.forceRender()}_handleFormSubmit(t){t.preventDefault(),this._submit()}_handleSearchKey(t){"Enter"===t.key&&(t.preventDefault(),this._submit())}_serializeSearchForm(t){const e={};Array.from(t.elements||[]).filter(t=>t.name&&!t.disabled&&!t.closest("[disabled]")).forEach(t=>{t.name in e||(e[t.name]=null)});return new FormData(t).forEach((t,i)=>{null==e[i]?e[i]=t:Array.isArray(e[i])?e[i].push(t):e[i]=[e[i],t]}),e}_paramsFromSubforms(t){return this.subforms&&document.querySelectorAll(this.subforms).forEach(e=>{e.serializeForm&&Object.assign(t,e.serializeForm())}),t}render(){return t`
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
    `}static get styles(){return e`
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
    `}}customElements.define("pb-table-grid",Fg);class Bg extends(m(s(n))){static get properties(){return Object.assign({url:{type:String},selected:{type:String},subforms:{type:String},_categories:{type:Array}},super.properties)}constructor(){super(),this._categories=[],this._params={},this.selected=null,this.subforms=null,this._initialized=!1}connectedCallback(){super.connectedCallback(),r("pb-page-ready",()=>{this.selected=v.state.category||this.selected,v.subscribe(this,t=>{g.log("<pb-split-list> popstate: %o",t),this.selected=t.category,this.submit(!1)})}),this.subscribeTo("pb-submit",this.load.bind(this))}firstUpdated(){super.firstUpdated(),r("pb-page-ready",()=>{this.load()})}submit(t=!0){this.load(t)}load(t=!0){const e=this._paramsFromSubforms({});this.selected&&(e.category=this.selected),t&&(this._initialized?v.commit(this,e):v.replace(this,e)),this._initialized=!0;const i=new URLSearchParams(e),n=`${this.toAbsoluteURL(this.url)}?${i.toString()}`;g.log(`<pb-split-list> Fetching from URL: ${n}`),this.emitTo("pb-start-update"),(async()=>{try{const t=await fetch(n);if(!t.ok)throw new Error(`Request failed with status ${t.status}`);const e=await t.json();this._categories=e.categories,this.innerHTML=w(e.items.join("")),this.emitTo("pb-end-update")}catch(t){g.error(`<pb-split-list> Error caught: ${t}`),this.emitTo("pb-end-update")}})()}_selectCategory(t,e){t.preventDefault(),this.selected=e,this.load()}_paramsFromSubforms(t){return this.subforms&&document.querySelectorAll(this.subforms).forEach(e=>{e.serializeForm&&Object.assign(t,e.serializeForm())}),t}render(){return t`
      <header>
        ${this._categories.map(e=>{const i=e.label?_(w(e.label)):e.category;return t`
            <a
              part="${this.selected===e.category?"active-category":"category"}"
              href="#${e.category}"
              title="${e.count}"
              class="${this.selected===e.category?"active":""}"
              @click="${t=>this._selectCategory(t,e.category)}"
            >
              ${i}
            </a>
          `})}
      </header>
      <div id="items" part="items"><slot></slot></div>
    `}static get styles(){return e`
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
    `}}customElements.define("pb-split-list",Bg);class Mg{constructor(t={},e=60,i=["D","W","M","Y","5Y","10Y"]){this.data={invalid:{},valid:{}},this.maxInterval=e,this.scopes=i,this._validateJsonData(t)}getMinDateStr(){return Object.keys(this.data.valid).sort()[0]}getMaxDateStr(){const t=Object.keys(this.data.valid);return t.sort()[t.length-1]}getMinDate(){return this._dateStrToUTCDate(this.getMinDateStr())}getMaxDate(){return this._dateStrToUTCDate(this.getMaxDateStr())}getEndOfRangeDate(t,e){return this._UTCDateToDateStr(this._increaseDateBy(t,e))}export(t){if(t=t||this._autoAssignScope(),!this.scopes.includes(t))throw new Error(`invalid scope provided, expected: ["10Y", "5Y", "Y", "M", "W", "D"]. Got: "${t}"`);const e={data:[],scope:t,binTitleRotated:this._binTitleRotatedLookup(t)};if(0===Object.keys(this.data.valid).length)return e;const i=this._classify(this.getMinDateStr(),t),n=this._getFirstDay(i);let s=this._dateStrToUTCDate(n);const r=this.getMaxDate();for(;s<=r;){const i=this._UTCDateToDateStr(s),n=this._classify(i,t);e.data.push(this._buildBinObject(i,n,t)),s=this._increaseDateBy(t,s)}if(Object.keys(this.data.valid).sort().forEach(i=>{const n=this._classify(i,t),s=e.data.find(t=>t.category===n);try{const t=this.data.valid[i];"object"==typeof t?(s.value+=t.count||0,t.info&&(s.info=s.info.concat(t.info))):s.value+=this.data.valid[i]||0}catch(t){g.log(t),g.log("currentCategory"),g.log(n)}}),this.data.invalid){let t=0,i=[];Object.values(this.data.invalid).forEach(e=>{"object"==typeof e?(t+=e.count||0,i=i.concat(e.info)):t+=e}),t>0&&e.data.push({tooltip:h("timeline.unknown"),title:h("timeline.unknown"),category:"?",separator:!0,value:t,info:i})}return e}_autoAssignScope(){for(let t=0;t<this.scopes.length;t++)if(this._computeIntervalSize(this.scopes[t])<=this.maxInterval)return this.scopes[t];throw new Error(`Interval too big! Computed: ${this._computeIntervalSize(this.scopes[i])}. Allowed: ${this.maxInterval}. Try to increase maxInterval.`)}_validateJsonData(t){Object.keys(t).sort().forEach(e=>{this._isValidDateStr(e)?this.data.valid[e]=t[e]:this.data.invalid[e]=t[e]})}_binTitleRotatedLookup(t){return{"10Y":!0,"5Y":!0,Y:!0,M:!1,W:!0,D:!0}[t]}_buildBinObject(t,e,i){const n=t.split("-"),s=n[0],r=n[1],o=n[2],a={dateStr:t,category:e,value:0,info:[]};if("10Y"===i)a.tooltip=`${e} - ${Number(e)+9}`,a.selectionStart=`${e}`,a.selectionEnd=`${Number(e)+9}`,Number(e)%100==0&&(a.title=`${e} - ${Number(e)+99}`,a.binTitle=e,a.seperator=!0);else if("5Y"===i)a.tooltip=`${e} - ${Number(e)+4}`,a.selectionStart=`${e}`,a.selectionEnd=`${Number(e)+4}`,Number(e)%50==0&&(a.title=`${e} - ${Number(e)+49}`,a.binTitle=e,a.seperator=!0);else if("Y"===i)a.tooltip=e,a.selectionStart=e,a.selectionEnd=e,Number(e)%10==0&&(a.title=`${e} - ${Number(e)+9}`,a.binTitle=`${e}`,a.seperator=!0);else if("M"===i){const t=Number(r),e=this._monthLookup(t);a.binTitle=e[0],a.tooltip=`${e} ${s}`,a.selectionStart=`${e} ${s}`,a.selectionEnd=`${e} ${s}`,1===t&&(a.title=s,a.seperator=!0)}else if("W"===i){const i=e.split("-")[1];a.tooltip=`${s} ${i}`,a.selectionStart=`${s} ${i}`,a.selectionEnd=`${s} ${i}`;const n=this._dateStrToUTCDate(t),r=this._addDays(n,-7);n.getUTCMonth()!==r.getUTCMonth()&&(a.binTitle=i,a.title=this._monthLookup(n.getUTCMonth()+1)),a.seperator="W1"===i}else{if("D"!==i)throw new Error(`invalid scope provided, expected: ["10Y", "5Y", "Y", "M", "W", "D"]. Got: "${i}"`);a.tooltip=t,a.selectionStart=t,a.selectionEnd=t,1===this._dateStrToUTCDate(t).getUTCDay()&&(a.binTitle=`${Number(o)}.${Number(r)}`,a.title=`${this._classify(t,"W").replace("-"," ")}`,a.seperator=!0)}return a}_classify(t,e){if(!t.match(/^\d{4}-\d{2}-\d{2}$/))throw new Error(`invalid dateStr format, expected "YYYY-MM-DD", got: "${t}".`);if(!t||!e)throw new Error(`both inputs must be provided. Got dateStr=${t}, scope=${e}`);switch(e){case"10Y":case"5Y":const i=Number(e.replace("Y",""));return(Math.floor(Number(t.split("-")[0])/i)*i).toString();case"Y":return t.substr(0,4);case"M":return t.substr(0,7);case"W":const n=this._dateStrToUTCDate(t);return this._UTCDateToWeekFormat(n);case"D":return t}}_getFirstDay(t){if(t.match(/^\d{4}-\d{2}-\d{2}$/))return t;if(t.match(/^\d{4}-\d{2}$/))return`${t}-01`;if(t.match(/^\d{4}$/))return`${t}-01-01`;if(t.match(/^\d{4}-W([1-9]|[1-4][0-9]|5[0-3])$/)){const e=t.split("-"),i=Number(e[0]),n=Number(e[1].replace("W",""));return this._getDateStrOfISOWeek(i,n)}throw new Error("invalid categoryStr")}_dateStrToUTCDate(t){if(!this._isValidDateStr(t))throw new Error(`invalid dateStr, expected "YYYY-MM-DD" with month[1-12] and day[1-31], got: "${t}".`);const e=t.split("-"),i=Number(e[0]),n=Number(e[1]),s=Number(e[2]);return new Date(Date.UTC(i,n-1,s))}_UTCDateToDateStr(t){return t.toISOString().split("T")[0]}_UTCDateToWeekFormat(t){return`${this._getISOWeekYear(t)}-W${this._getISOWeek(t)}`}_getISOWeek(t){const e=new Date(t.getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const i=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-i.getTime())/864e5-3+(i.getDay()+6)%7)/7)}_getISOWeekYear(t){const e=new Date(t.getTime());return e.setDate(e.getDate()+3-(e.getDay()+6)%7),e.getFullYear()}_getDateStrOfISOWeek(t,e){const i=new Date(Date.UTC(t,0,1+7*(e-1))),n=i.getUTCDay(),s=i;return n<=4?s.setDate(i.getDate()-i.getUTCDay()+1):s.setDate(i.getDate()+8-i.getUTCDay()),s.toISOString().split("T")[0]}getIntervalSizes(){return{D:this._computeIntervalSize("D"),W:this._computeIntervalSize("W"),M:this._computeIntervalSize("M"),Y:this._computeIntervalSize("Y"),"5Y":this._computeIntervalSize("5Y"),"10Y":this._computeIntervalSize("10Y")}}_computeIntervalSize(t){const e=this.getMaxDateStr();if(!e)return 0;const i=this._dateStrToUTCDate(e),n=this._getFirstDay(this._classify(this.getMinDateStr(),t));let s=this._dateStrToUTCDate(n),r=0;for(;s<=i;)r++,s=this._increaseDateBy(t,s);return r}_increaseDateBy(t,e){switch(t){case"D":return this._addDays(e,1);case"W":return this._addDays(e,7);case"M":return this._addMonths(e,1);case"Y":return this._addYears(e,1);case"5Y":return this._addYears(e,5);case"10Y":return this._addYears(e,10)}}_addDays(t,e){const i=new Date(t.valueOf());return i.setUTCDate(i.getUTCDate()+e),i}_addMonths(t,e){const i=new Date(t.valueOf()),n=i.getUTCDate();return i.setUTCMonth(i.getUTCMonth()+ +e),i.getUTCDate()!=n&&i.setUTCDate(0),i}_addYears(t,e){const i=new Date(t.valueOf());return i.setUTCFullYear(i.getUTCFullYear()+e),i}_isValidDateStr(t){if(!t)return!1;const e=t.split("-");if(3!==e.length)return!1;const i=e[0],n=e[1],s=e[2];return"0000"!==i&&"00"!==s&&"00"!==n&&(!(Number(s)<1||Number(s)>31)&&!(Number(n)<1||Number(n)>12))}_monthLookup(t){if(t>12||t<1)throw new Error(`invalid 'num' provided, expected 1-12. Got: ${t}`);return{1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}[t.toString()]}}class qg{constructor(){}run(t){this.input=t,this.day="??",this.month="??",this.year="????";const e=this.input.match(this._isoMatchRegex()),i=this.input.match(this._customRegex()),n=this.input.match(this._weekMatchRegex()),s=this.input.match(this._yearAndMonthRegex());if(e){const t=e[1].split(/-|\/|\s/);this.year=t[0],this.month=this._setWithLeadingZero(t[1]),this.day=this._setWithLeadingZero(t[2])}else if(s){const t=s[1].split("-");this.year=t[0],this.month=this._setWithLeadingZero(t[1]),this.day="01"}else if(i){const t=i[0].split(/\.|\s|\/|-/);this.day=this._setWithLeadingZero(t[0]),this.month=this._setWithLeadingZero(t[1]),this.year=t[2]}else{if(n){const t=n[0].split(/\.|\s|\/|-/),e=Number(t[0]),i=Number(t[1].replace("W0","").replace("W",""));return this._getDateStrOfISOWeek(e,i)}this._findYear(),this._findMonth(),this._findDay()}return this._buildResult()}_buildResult(){return"????"!=this.year&&"??"===this.month&&(this.month="01"),"??"!=this.month&&"??"===this.day&&(this.day="01"),`${this.year}-${this.month}-${this.day}`}_isoMatchRegex(){return/(?:\s|^)(\d{4}(-|\s|\/)([0][1-9]|[1-9]|10|11|12)(-|\s|\/)([0][1-9]|[1-2][0-9]|3[01]|[1-9]))(?=\s|$|\.)/}_customRegex(){return/\d{1,2}(\.|\s|\/|-)\d{1,2}(\.|\s|\/|-)\d{4}/}_weekMatchRegex(){return/\d{4}(\.|\s|\/|-)W\d{1,2}(?=\s|$|\.)/}_yearAndMonthRegex(){return/(?:\s|^)(\d{4}-([0][1-9]|[1-9]|10|11|12))(?=\s|$)/}_findYear(){const t=/[1-9]{1}[0-9]{3}/,e=this.input.match(t);e&&(this.year=e[0],this._removeMatchFromInput(e))}_findMonth(){this._monthDictionaryValues().forEach(t=>{const e=new RegExp(`(?:\\s|^)(${t})(?=\\s|$|\\.)`,"i"),i=this.input.match(e);if(i)return this.month=this._monthDictionary()[i[1].toLowerCase()],this._removeMatchFromInput(i),this.month})}_findDay(){const t=/(?:\s|^)([0][1-9]|[1-2][0-9]|3[01]|[1-9])(?=\s|$|\.|st|nd|rd|th)/,e=this.input.match(t);e&&(this.day=this._setWithLeadingZero(e[1]))}_setWithLeadingZero(t){return 1==(t=t.toString()).length?`0${t}`:t}_removeMatchFromInput(t){if(t&&t[0]&&t.index){const e=t[0].length,i=this.input.split("");i.splice(t.index,e),this.input=i.join("")}}_monthDictionaryValues(){return Object.keys(this._monthDictionary())}_monthDictionary(){return{jan:"01",januar:"01",feb:"02",februar:"02",mär:"03",märz:"03",apr:"04",april:"04",mai:"05",mai:"05",jun:"06",juni:"06",jul:"07",juli:"07",aug:"08",august:"08",sep:"09",september:"09",okt:"10",oktober:"10",nov:"11",november:"11",dez:"12",dezember:"12",jan:"01",january:"01",feb:"02",february:"02",mar:"03",march:"03",apr:"04",april:"04",may:"05",may:"05",jun:"06",june:"06",jul:"07",july:"07",aug:"08",august:"08",sep:"09",september:"09",oct:"10",october:"10",nov:"11",november:"11",dec:"12",december:"12",janv:"01",janvier:"01",févr:"02","février'":"02",mars:"03",mars:"03",avr:"04",avril:"04",mai:"05",mai:"05",juin:"06",juin:"06",juil:"07",juillet:"07",août:"08",août:"08",sept:"09",septembre:"09",oct:"10",octobre:"10",nov:"11",novembre:"11",déc:"12",décembre:"12",gen:"01",gennaio:"01",feb:"02",febbraio:"02",mar:"03",marzo:"03",apr:"04",aprile:"04",mag:"05",maggio:"05",giu:"06",giugno:"06",lug:"07",luglio:"07",ago:"08",agosto:"08",set:"09",settembre:"09",ott:"10",ottobre:"10",nov:"11",novembre:"11",dic:"12",dicembre:"12"}}_getDateStrOfISOWeek(t,e){const i=new Date(t,0,1+7*(e-1)),n=i.getDay(),s=i;return n<=4?s.setDate(i.getDate()-i.getDay()+1):s.setDate(i.getDate()+8-i.getDay()),s.getFullYear()>t?`${t}-12-31`:s.getFullYear()<t?`${t}-01-01`:this._dateToDateStr(s)}_dateToDateStr(t){const e=new Date(t),i=this._setWithLeadingZero(e.getMonth()+1),n=this._setWithLeadingZero(e.getDate());return`${e.getFullYear()}-${i}-${n}`}}class zg extends(m(s(n))){static get styles(){return e`
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
    `}static get properties(){return Object.assign(Object.assign({},super.properties),{},{startDate:{type:String,reflect:!0,attribute:"start-date"},endDate:{type:String,reflect:!0,attribute:"end-date"},scope:{type:String},scopes:{type:Array},maxInterval:{type:Number,attribute:"max-interval"},url:{type:String},auto:{type:Boolean},resettable:{type:Boolean},_language:{type:String}})}constructor(){super(),this.maxHeight=80,this.multiplier=.75,this.mousedown=!1,this.startDate="",this.endDate="",this.scope="",this.scopes=["D","W","M","Y","5Y","10Y"],this.maxInterval=60,this.url="",this.auto=!1,this.resettable=!1,this._language="en",this._resetSelectionProperty()}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-results-received",()=>{const t=this.shadowRoot.getElementById("loadData"),e=this.toAbsoluteURL(this.url,this.getEndpoint());t.url=e,t.generateRequest()}),this.subscribeTo("pb-i18n-update",t=>{this._language=t.detail.language})}firstUpdated(){this.bins=this.shadowRoot.querySelectorAll(".bin-container"),this.tooltip=this.shadowRoot.querySelector(".tooltip"),document.addEventListener("mouseup",()=>{this._mouseUp()}),document.addEventListener("pb-timeline-daterange-changed",t=>{const{startDateStr:e}=t.detail,{endDateStr:i}=t.detail;if(this._fullRangeSelected(e,i))return g.log("_fullRangeSelected() is true"),void this.resetSelection();this.select(e,i)}),document.addEventListener("pb-timeline-reset-selection",()=>{this.resetSelection(),this._hideTooltip()})}updated(t){t.has("scope")&&this.searchResult&&(this.scopes.includes(this.scope)?this.setData(this.searchResult.export(this.scope)):g.error("unknown scope ",this.scope))}async setData(t){this.dataObj=t,this.maxValue=Math.max(...this.dataObj.data.map(t=>t.value)),this.requestUpdate(),await this.updateComplete,this.bins=this.shadowRoot.querySelectorAll(".bin-container"),this.resetSelection(),this._resetTooltip()}get label(){return this.dataObj&&0!==this.dataObj.data.length?1===this.dataObj.data.length?this.dataObj.data[0].category:`${this.dataObj.data[0].selectionStart} – ${this.dataObj.data[this.dataObj.data.length-1].selectionEnd}`:""}getSelectedStartDateStr(){return this.shadowRoot.querySelectorAll(".bin-container.selected")[0].dataset.selectionstart}getSelectedEndDateStr(){const t=this.shadowRoot.querySelectorAll(".bin-container.selected");return t[t.length-1].dataset.selectionend}getSelectedCategories(){const t=this.shadowRoot.querySelectorAll(".bin-container.selected"),e=[];return t.forEach(t=>e.push(t.dataset.category)),e}getSelectedItemCount(){const t=this.shadowRoot.querySelectorAll(".bin-container.selected");let e=0;return t.forEach(t=>{e+=parseInt(t.dataset.value)}),e}resetSelection(){this.bins.forEach(t=>{t.classList.remove("selected")}),this._resetSelectionProperty(),this._hideTooltip()}select(t,e){this.bins.forEach(i=>{i.dataset.isodatestr>=t&&i.dataset.isodatestr<=e?i.classList.add("selected"):i.classList.remove("selected")}),this._displayTooltip(),this._showtooltipSelection()}_fullRangeSelected(t,e){const i=this.bins[0].dataset.isodatestr,n=e===this.bins[this.bins.length-1].dataset.isodatestr;return i&&n}_mouseDown(t){this.resetSelection(),this.mousedown=!0,this.selection.start=this._getMousePosition(t).x,this._applySelectionToBins()}_mouseUp(){if(this.mousedown){this.mousedown=!1;const t=this.getSelectedStartDateStr(),e=this.getSelectedEndDateStr();if(t){const i=(new qg).run(t),n=(new qg).run(e),s=this.getSelectedItemCount();this._dispatchTimelineDaterangeChangedEvent(i,n,this.getSelectedCategories(),s)}}}_mouseMove(t){this.mousedown?(this._brushing(t),this._showtooltipSelection()):void 0===this.selection.start&&this._showtooltip(t)}_mouseenter(){this.dataObj&&this._displayTooltip()}_getMousePosition(t){const e=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect();return{x:t.clientX-e.left+1,y:t.clientY-e.top+1}}_brushing(t){this.selection.end=this._getMousePosition(t).x,this._applySelectionToBins()}_dispatchTimelineDaterangeChangedEvent(t,e,i,n){"????-??-??"===t?this.emitTo("pb-timeline-date-changed",{startDateStr:null,endDateStr:null,categories:["?"],count:n}):t===e?"D"!==this.dataObj.scope?this.emitTo("pb-timeline-daterange-changed",{startDateStr:t,endDateStr:this.searchResult.getEndOfRangeDate(this.dataObj.scope,e),scope:this.dataObj.scope,categories:i,count:n,label:this.label}):this.emitTo("pb-timeline-date-changed",{startDateStr:t,endDateStr:null,scope:this.dataObj.scope,categories:i,count:n,label:this.label}):this.emitTo("pb-timeline-daterange-changed",{startDateStr:t,endDateStr:e,categories:i,scope:this.dataObj.scope,count:n,label:this.label})}_dispatchPbTimelineResetSelectionEvent(){this.emitTo("pb-timeline-reset-selection")}_showtooltip(t){const e=this._getElementInterval(t.currentTarget),i=t.currentTarget.dataset.tooltip,n=this._numberWithCommas(t.currentTarget.dataset.value),s=t.currentTarget.querySelector(".info"),r=s?w(s.innerHTML):"",o=`<div><strong>${w(i||"")}</strong>: ${n}</div><ul>${r}</ul>`;this.tooltip.querySelector(".tooltip-text").innerHTML=o,this.tooltip.style.visibility="hidden",this.tooltip.style.display="block";const a=this.tooltip.offsetWidth;this.tooltip.style.visibility="",this.tooltip.style.display="";const l=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect().width;let c;const d=Math.round((e[0]+e[1])/2);this.tooltip.classList.remove("chevron-precise"),d+a/2>l?(c=Math.max(0,e[1]-a+10),this.tooltip.classList.add("right")):d-a/2<0?(c=Math.min(l-a,e[0]-10),this.tooltip.classList.remove("right")):(c=d-a/2,this.tooltip.classList.remove("right")),this.tooltip.style.left=`${c}px`;const p=d,u=c,h=Math.max(10,Math.min(a-10,p-u));this.tooltip.style.setProperty("--chevron-position",`${h}px`),this.tooltip.classList.add("chevron-precise")}_showtooltipSelection(){const t=this._getSelectedBins(),e=[this._getElementInterval(t[0])[0],this._getElementInterval(t[t.length-1])[1]],i=`${t[0].dataset.selectionstart} - ${t[t.length-1].dataset.selectionend}`,n=t.map(t=>Number(t.dataset.value)).reduce((t,e)=>t+e),s=this._numberWithCommas(n),r=`<strong>${w(i)}</strong>: ${s}`;this.tooltip.querySelector(".tooltip-text").innerHTML=r,this.tooltip.querySelector(".tooltip-close").classList.remove("hidden"),this.tooltip.classList.add("draggable"),this.tooltip.style.visibility="hidden",this.tooltip.style.display="block";const o=this.tooltip.offsetWidth;this.tooltip.style.visibility="",this.tooltip.style.display="";const a=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect().width,l=Math.round((e[0]+e[1])/2);let c;this.tooltip.classList.remove("chevron-precise"),l+o/2>a?(c=Math.max(0,e[1]-o+10),this.tooltip.classList.add("right")):l-o/2<0?(c=Math.min(a-o,e[0]-10),this.tooltip.classList.remove("right")):(c=l-o/2,this.tooltip.classList.remove("right")),this.tooltip.style.left=`${c}px`;const d=l,p=c,u=Math.max(10,Math.min(o-10,d-p));this.tooltip.style.setProperty("--chevron-position",`${u}px`),this.tooltip.classList.add("chevron-precise")}_resetTooltip(){this._hideTooltip(),this.tooltip.style.left="-1000px",this.tooltip.querySelector(".tooltip-text").innerHTML=""}_hideTooltip(){void 0===this.selection.start&&(this.tooltip.classList.add("hidden"),this.tooltip.classList.remove("draggable"),this.tooltip.querySelector(".tooltip-close").classList.add("hidden"),this.tooltip.classList.remove("chevron-precise"))}_displayTooltip(){this.tooltip.classList.remove("hidden")}_getElementInterval(t){const e=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect(),i=t,n=[i.getBoundingClientRect().x,i.getBoundingClientRect().x+i.getBoundingClientRect().width];return[n[0]-e.left+1,n[1]-e.left+1,e.width/2]}_getSelectionInterval(){return[this.selection.start,this.selection.end].sort((t,e)=>t-e)}_getSelectedBins(){return Array.prototype.slice.call(this.bins).filter(t=>t.classList.contains("selected"))}_resetSelectionProperty(){this.selection={start:void 0,end:void 0}}_applySelectionToBins(){const t=this._getSelectionInterval();this.bins.forEach(e=>{const i=this._getElementInterval(e);this._areOverlapping(i,t)?e.classList.add("selected"):e.classList.remove("selected")})}_numberWithCommas(t){return new Intl.NumberFormat(this._language,{style:"decimal"}).format(t)}_areOverlapping(t,e){return e[0]<t[0]?e[1]>t[0]:e[0]<t[1]}render(){return t`
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
          ${e.info.map(e=>t`<li>${_(w(e))}</li>`)}
        </ul>
      `:null}async _handleResponse(){await this.updateComplete;const t=this.shadowRoot.getElementById("loadData").lastResponse;let e={};this.startDate&&this.endDate?Object.keys(t).filter(t=>t>=this.startDate&&t<this.endDate).forEach(i=>{e[i]=t[i]}):e=t,this.searchResult=new Mg(e,this.maxInterval,this.scopes),this.setData(this.searchResult.export(this.scope)),this.emitTo("pb-timeline-loaded",{value:!0,label:this.label})}}function Ug(t,e){t.split(/\s+/).forEach(t=>{e(t)})}customElements.define("pb-timeline",zg);class Hg{constructor(){this._events={}}on(t,e){Ug(t,t=>{const i=this._events[t]||[];i.push(e),this._events[t]=i})}off(t,e){var i=arguments.length;0!==i?Ug(t,t=>{if(1===i)return void delete this._events[t];const n=this._events[t];void 0!==n&&(n.splice(n.indexOf(e),1),this._events[t]=n)}):this._events={}}trigger(t,...e){var i=this;Ug(t,t=>{const n=i._events[t];void 0!==n&&n.forEach(t=>{t.apply(i,e)})})}}function Vg(t){return t.plugins={},class extends t{constructor(){super(...arguments),this.plugins={names:[],settings:{},requested:{},loaded:{}}}static define(e,i){t.plugins[e]={name:e,fn:i}}initializePlugins(t){var e,i;const n=this,s=[];if(Array.isArray(t))t.forEach(t=>{"string"==typeof t?s.push(t):(n.plugins.settings[t.name]=t.options,s.push(t.name))});else if(t)for(e in t)t.hasOwnProperty(e)&&(n.plugins.settings[e]=t[e],s.push(e));for(;i=s.shift();)n.require(i)}loadPlugin(e){var i=this,n=i.plugins,s=t.plugins[e];if(!t.plugins.hasOwnProperty(e))throw new Error('Unable to find "'+e+'" plugin');n.requested[e]=!0,n.loaded[e]=s.fn.apply(i,[i.plugins.settings[e]||{}]),n.names.push(e)}require(t){var e=this,i=e.plugins;if(!e.plugins.loaded.hasOwnProperty(t)){if(i.requested[t])throw new Error('Plugin has circular dependency ("'+t+'")');e.loadPlugin(t)}return i.loaded[t]}}}const Wg=t=>(t=t.filter(Boolean)).length<2?t[0]||"":1==Jg(t)?"["+t.join("")+"]":"(?:"+t.join("|")+")",Gg=t=>{if(!Qg(t))return t.join("");let e="",i=0;const n=()=>{i>1&&(e+="{"+i+"}")};return t.forEach((s,r)=>{s!==t[r-1]?(n(),e+=s,i=1):i++}),n(),e},Yg=t=>{let e=Array.from(t);return Wg(e)},Qg=t=>new Set(t).size!==t.length,Kg=t=>(t+"").replace(/([\$\(\)\*\+\.\?\[\]\^\{\|\}\\])/gu,"\\$1"),Jg=t=>t.reduce((t,e)=>Math.max(t,Zg(e)),0),Zg=t=>Array.from(t).length,Xg=t=>{if(1===t.length)return[[t]];let e=[];const i=t.substring(1);return Xg(i).forEach(function(i){let n=i.slice(0);n[0]=t.charAt(0)+n[0],e.push(n),n=i.slice(0),n.unshift(t.charAt(0)),e.push(n)}),e},tf=[[0,65535]],ef="[̀-ͯ·ʾʼ]";let nf,sf;const rf=3,of={},af={"/":"⁄∕",0:"߀",a:"ⱥɐɑ",aa:"ꜳ",ae:"æǽǣ",ao:"ꜵ",au:"ꜷ",av:"ꜹꜻ",ay:"ꜽ",b:"ƀɓƃ",c:"ꜿƈȼↄ",d:"đɗɖᴅƌꮷԁɦ",e:"ɛǝᴇɇ",f:"ꝼƒ",g:"ǥɠꞡᵹꝿɢ",h:"ħⱨⱶɥ",i:"ɨı",j:"ɉȷ",k:"ƙⱪꝁꝃꝅꞣ",l:"łƚɫⱡꝉꝇꞁɭ",m:"ɱɯϻ",n:"ꞥƞɲꞑᴎлԉ",o:"øǿɔɵꝋꝍᴑ",oe:"œ",oi:"ƣ",oo:"ꝏ",ou:"ȣ",p:"ƥᵽꝑꝓꝕρ",q:"ꝗꝙɋ",r:"ɍɽꝛꞧꞃ",s:"ßȿꞩꞅʂ",t:"ŧƭʈⱦꞇ",th:"þ",tz:"ꜩ",u:"ʉ",v:"ʋꝟʌ",vy:"ꝡ",w:"ⱳ",y:"ƴɏỿ",z:"ƶȥɀⱬꝣ",hv:"ƕ"};for(let t in af){let e=af[t]||"";for(let i=0;i<e.length;i++){let n=e.substring(i,i+1);of[n]=t}}const lf=new RegExp(Object.keys(of).join("|")+"|"+ef,"gu"),cf=t=>{void 0===nf&&(nf=ff(tf))},df=(t,e="NFKD")=>t.normalize(e),pf=t=>Array.from(t).reduce((t,e)=>t+uf(e),""),uf=t=>(t=df(t).toLowerCase().replace(lf,t=>of[t]||""),df(t,"NFC"));function*hf(t){for(const[e,i]of t)for(let t=e;t<=i;t++){let e=String.fromCharCode(t),i=pf(e);i!=e.toLowerCase()&&(i.length>rf||0!=i.length&&(yield{folded:i,composed:e,code_point:t}))}}const gf=t=>{const e={},i=(t,i)=>{const n=e[t]||new Set,s=new RegExp("^"+Yg(n)+"$","iu");i.match(s)||(n.add(Kg(i)),e[t]=n)};for(let e of hf(t))i(e.folded,e.folded),i(e.folded,e.composed);return e},ff=t=>{const e=gf(t),i={};let n=[];for(let t in e){let s=e[t];s&&(i[t]=Yg(s)),t.length>1&&n.push(Kg(t))}n.sort((t,e)=>e.length-t.length);const s=Wg(n);return sf=new RegExp("^"+s,"u"),i},mf=(t,e=1)=>{let i=0;return t=t.map(t=>(nf[t]&&(i+=t.length),nf[t]||t)),i>=e?Gg(t):""},bf=(t,e=1)=>(e=Math.max(e,t.length-1),Wg(Xg(t).map(t=>mf(t,e)))),yf=(t,e=!0)=>{let i=t.length>1?1:0;return Wg(t.map(t=>{let n=[];const s=e?t.length():t.length()-1;for(let e=0;e<s;e++)n.push(bf(t.substrs[e]||"",i));return Gg(n)}))},vf=(t,e)=>{for(const i of e){if(i.start!=t.start||i.end!=t.end)continue;if(i.substrs.join("")!==t.substrs.join(""))continue;let e=t.parts;const n=t=>{for(const i of e){if(i.start===t.start&&i.substr===t.substr)return!1;if(1!=t.length&&1!=i.length){if(t.start<i.start&&t.end>i.start)return!0;if(i.start<t.start&&i.end>t.start)return!0}}return!1};if(!(i.parts.filter(n).length>0))return!0}return!1};class _f{parts;substrs;start;end;constructor(){this.parts=[],this.substrs=[],this.start=0,this.end=0}add(t){t&&(this.parts.push(t),this.substrs.push(t.substr),this.start=Math.min(t.start,this.start),this.end=Math.max(t.end,this.end))}last(){return this.parts[this.parts.length-1]}length(){return this.parts.length}clone(t,e){let i=new _f,n=JSON.parse(JSON.stringify(this.parts)),s=n.pop();for(const t of n)i.add(t);let r=e.substr.substring(0,t-s.start),o=r.length;return i.add({start:s.start,end:s.start+o,length:o,substr:r}),i}}const wf=t=>{cf(),t=pf(t);let e="",i=[new _f];for(let n=0;n<t.length;n++){let s=t.substring(n).match(sf);const r=t.substring(n,n+1),o=s?s[0]:null;let a=[],l=new Set;for(const t of i){const e=t.last();if(!e||1==e.length||e.end<=n)if(o){const e=o.length;t.add({start:n,end:n+e,length:e,substr:o}),l.add("1")}else t.add({start:n,end:n+1,length:1,substr:r}),l.add("2");else if(o){let i=t.clone(n,e);const s=o.length;i.add({start:n,end:n+s,length:s,substr:o}),a.push(i)}else l.add("3")}if(a.length>0){a=a.sort((t,e)=>t.length()-e.length());for(let t of a)vf(t,i)||i.push(t)}else if(n>0&&1==l.size&&!l.has("3")){e+=yf(i,!1);let t=new _f;const n=i[0];n&&t.add(n.last()),i=[t]}}return e+=yf(i,!0),e},xf=(t,e)=>{if(t)return t[e]},kf=(t,e)=>{if(t){for(var i,n=e.split(".");(i=n.shift())&&(t=t[i]););return t}},Af=(t,e,i)=>{var n,s;return t?(t+="",null==e.regex||-1===(s=t.search(e.regex))?0:(n=e.string.length/t.length,0===s&&(n+=.5),n*i)):0},Sf=(t,e)=>{var i=t[e];if("function"==typeof i)return i;i&&!Array.isArray(i)&&(t[e]=[i])},Of=(t,e)=>{if(Array.isArray(t))t.forEach(e);else for(var i in t)t.hasOwnProperty(i)&&e(t[i],i)},Ef=(t,e)=>"number"==typeof t&&"number"==typeof e?t>e?1:t<e?-1:0:(t=pf(t+"").toLowerCase())>(e=pf(e+"").toLowerCase())?1:e>t?-1:0;class $f{items;settings;constructor(t,e){this.items=t,this.settings=e||{diacritics:!0}}tokenize(t,e,i){if(!t||!t.length)return[];const n=[],s=t.split(/\s+/);var r;return i&&(r=new RegExp("^("+Object.keys(i).map(Kg).join("|")+"):(.*)$")),s.forEach(t=>{let i,s=null,o=null;r&&(i=t.match(r))&&(s=i[1],t=i[2]),t.length>0&&(o=this.settings.diacritics?wf(t)||null:Kg(t),o&&e&&(o="\\b"+o)),n.push({string:t,regex:o?new RegExp(o,"iu"):null,field:s})}),n}getScoreFunction(t,e){var i=this.prepareSearch(t,e);return this._getScoreFunction(i)}_getScoreFunction(t){const e=t.tokens,i=e.length;if(!i)return function(){return 0};const n=t.options.fields,s=t.weights,r=n.length,o=t.getAttrFn;if(!r)return function(){return 1};const a=1===r?function(t,e){const i=n[0].field;return Af(o(e,i),t,s[i]||1)}:function(t,e){var i=0;if(t.field){const n=o(e,t.field);!t.regex&&n?i+=1/r:i+=Af(n,t,1)}else Of(s,(n,s)=>{i+=Af(o(e,s),t,n)});return i/r};return 1===i?function(t){return a(e[0],t)}:"and"===t.options.conjunction?function(t){var n,s=0;for(let i of e){if((n=a(i,t))<=0)return 0;s+=n}return s/i}:function(t){var n=0;return Of(e,e=>{n+=a(e,t)}),n/i}}getSortFunction(t,e){var i=this.prepareSearch(t,e);return this._getSortFunction(i)}_getSortFunction(t){var e,i=[];const n=this,s=t.options,r=!t.query&&s.sort_empty?s.sort_empty:s.sort;if("function"==typeof r)return r.bind(this);const o=function(e,i){return"$score"===e?i.score:t.getAttrFn(n.items[i.id],e)};if(r)for(let e of r)(t.query||"$score"!==e.field)&&i.push(e);if(t.query){e=!0;for(let t of i)if("$score"===t.field){e=!1;break}e&&i.unshift({field:"$score",direction:"desc"})}else i=i.filter(t=>"$score"!==t.field);return i.length?function(t,e){var n,s;for(let r of i){if(s=r.field,n=("desc"===r.direction?-1:1)*Ef(o(s,t),o(s,e)))return n}return 0}:null}prepareSearch(t,e){const i={};var n=Object.assign({},e);if(Sf(n,"sort"),Sf(n,"sort_empty"),n.fields){Sf(n,"fields");const t=[];n.fields.forEach(e=>{"string"==typeof e&&(e={field:e,weight:1}),t.push(e),i[e.field]="weight"in e?e.weight:1}),n.fields=t}return{options:n,query:t.toLowerCase().trim(),tokens:this.tokenize(t,n.respect_word_boundaries,i),total:0,items:[],weights:i,getAttrFn:n.nesting?kf:xf}}search(t,e){var i,n,s=this;n=this.prepareSearch(t,e),e=n.options,t=n.query;const r=e.score||s._getScoreFunction(n);t.length?Of(s.items,(t,s)=>{i=r(t),(!1===e.filter||i>0)&&n.items.push({score:i,id:s})}):Of(s.items,(t,e)=>{n.items.push({score:1,id:e})});const o=s._getSortFunction(n);return o&&n.items.sort(o),n.total=n.items.length,"number"==typeof e.limit&&(n.items=n.items.slice(0,e.limit)),n}}const Cf=t=>null==t?null:Tf(t),Tf=t=>"boolean"==typeof t?t?"1":"0":t+"",If=t=>(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Lf=(t,e)=>e>0?window.setTimeout(t,e):(t.call(null),null),Rf=(t,e)=>{var i;return function(n,s){var r=this;i&&(r.loading=Math.max(r.loading-1,0),clearTimeout(i)),i=setTimeout(function(){i=null,r.loadedSearches[n]=!0,t.call(r,n,s)},e)}},jf=(t,e,i)=>{var n,s=t.trigger,r={};for(n of(t.trigger=function(){var i=arguments[0];if(-1===e.indexOf(i))return s.apply(t,arguments);r[i]=arguments},i.apply(t,[]),t.trigger=s,e))n in r&&s.apply(t,r[n])},Nf=t=>({start:t.selectionStart||0,length:(t.selectionEnd||0)-(t.selectionStart||0)}),Pf=(t,e=!1)=>{t&&(t.preventDefault(),e&&t.stopPropagation())},Df=(t,e,i,n)=>{t.addEventListener(e,i,n)},Ff=(t,e)=>!!e&&(!!e[t]&&1===(e.altKey?1:0)+(e.ctrlKey?1:0)+(e.shiftKey?1:0)+(e.metaKey?1:0)),Bf=(t,e)=>{const i=t.getAttribute("id");return i||(t.setAttribute("id",e),e)},Mf=t=>t.replace(/[\\"']/g,"\\$&"),qf=(t,e)=>{e&&t.append(e)},zf=(t,e)=>{if(Array.isArray(t))t.forEach(e);else for(var i in t)t.hasOwnProperty(i)&&e(t[i],i)},Uf=t=>{if(t.jquery)return t[0];if(t instanceof HTMLElement)return t;if(Hf(t)){var e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstChild}return document.querySelector(t)},Hf=t=>"string"==typeof t&&t.indexOf("<")>-1,Vf=t=>t.replace(/['"\\]/g,"\\$&"),Wf=(t,e)=>{var i=document.createEvent("HTMLEvents");i.initEvent(e,!0,!1),t.dispatchEvent(i)},Gf=(t,e)=>{Object.assign(t.style,e)},Yf=(t,...e)=>{var i=Kf(e);(t=Jf(t)).map(t=>{i.map(e=>{t.classList.add(e)})})},Qf=(t,...e)=>{var i=Kf(e);(t=Jf(t)).map(t=>{i.map(e=>{t.classList.remove(e)})})},Kf=t=>{var e=[];return zf(t,t=>{"string"==typeof t&&(t=t.trim().split(/[\t\n\f\r\s]/)),Array.isArray(t)&&(e=e.concat(t))}),e.filter(Boolean)},Jf=t=>(Array.isArray(t)||(t=[t]),t),Zf=(t,e,i)=>{if(!i||i.contains(t))for(;t&&t.matches;){if(t.matches(e))return t;t=t.parentNode}},Xf=(t,e=0)=>e>0?t[t.length-1]:t[0],tm=t=>0===Object.keys(t).length,em=(t,e)=>{if(!t)return-1;e=e||t.nodeName;for(var i=0;t=t.previousElementSibling;)t.matches(e)&&i++;return i},im=(t,e)=>{zf(e,(e,i)=>{null==e?t.removeAttribute(i):t.setAttribute(i,""+e)})},nm=(t,e)=>{t.parentNode&&t.parentNode.replaceChild(e,t)},sm=(t,e)=>{if(null===e)return;if("string"==typeof e){if(!e.length)return;e=new RegExp(e,"i")}const i=t=>{var i=t.data.match(e);if(i&&t.data.length>0){var n=document.createElement("span");n.className="highlight";var s=t.splitText(i.index);s.splitText(i[0].length);var r=s.cloneNode(!0);return n.appendChild(r),nm(s,n),1}return 0},n=t=>{1!==t.nodeType||!t.childNodes||/(script|style)/i.test(t.tagName)||"highlight"===t.className&&"SPAN"===t.tagName||Array.from(t.childNodes).forEach(t=>{s(t)})},s=t=>3===t.nodeType?i(t):(n(t),0);s(t)},rm=t=>{var e=t.querySelectorAll("span.highlight");Array.prototype.forEach.call(e,function(t){var e=t.parentNode;e.replaceChild(t.firstChild,t),e.normalize()})},om=65,am=13,lm=27,cm=37,dm=38,pm=39,um=40,hm=8,gm=46,fm=9,mm="undefined"!=typeof navigator&&/Mac/.test(navigator.userAgent)?"metaKey":"ctrlKey";var bm={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:null,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,shouldOpen:null,maxOptions:50,maxItems:null,hideSelected:null,duplicates:!1,addPrecedence:!1,selectOnTab:!1,preload:null,allowEmptyOption:!1,refreshThrottle:300,loadThrottle:300,loadingClass:"loading",dataAttr:null,optgroupField:"optgroup",valueField:"value",labelField:"text",disabledField:"disabled",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"ts-wrapper",controlClass:"ts-control",dropdownClass:"ts-dropdown",dropdownContentClass:"ts-dropdown-content",itemClass:"item",optionClass:"option",dropdownParent:null,controlInput:'<input type="text" autocomplete="off" size="1" />',copyClassesToDropdown:!1,placeholder:null,hidePlaceholder:null,shouldLoad:function(t){return t.length>0},render:{}};function ym(t,e){var i=Object.assign({},bm,e),n=i.dataAttr,s=i.labelField,r=i.valueField,o=i.disabledField,a=i.optgroupField,l=i.optgroupLabelField,c=i.optgroupValueField,d=t.tagName.toLowerCase(),p=t.getAttribute("placeholder")||t.getAttribute("data-placeholder");if(!p&&!i.allowEmptyOption){let e=t.querySelector('option[value=""]');e&&(p=e.textContent)}var u={placeholder:p,options:[],optgroups:[],items:[],maxItems:null},h=()=>{var e,d=u.options,p={},h=1;let g=0;var f=t=>{var e=Object.assign({},t.dataset),i=n&&e[n];return"string"==typeof i&&i.length&&(e=Object.assign(e,JSON.parse(i))),e},m=(t,e)=>{var n=Cf(t.value);if(null!=n&&(n||i.allowEmptyOption)){if(p.hasOwnProperty(n)){if(e){var l=p[n][a];l?Array.isArray(l)?l.push(e):p[n][a]=[l,e]:p[n][a]=e}}else{var c=f(t);c[s]=c[s]||t.textContent,c[r]=c[r]||n,c[o]=c[o]||t.disabled,c[a]=c[a]||e,c.$option=t,c.$order=c.$order||++g,p[n]=c,d.push(c)}t.selected&&u.items.push(n)}},b=t=>{var e,i;(i=f(t))[l]=i[l]||t.getAttribute("label")||"",i[c]=i[c]||h++,i[o]=i[o]||t.disabled,i.$order=i.$order||++g,u.optgroups.push(i),e=i[c],zf(t.children,t=>{m(t,e)})};u.maxItems=t.hasAttribute("multiple")?null:1,zf(t.children,t=>{"optgroup"===(e=t.tagName.toLowerCase())?b(t):"option"===e&&m(t)})},g=()=>{const e=t.getAttribute(n);if(e)u.options=JSON.parse(e),zf(u.options,t=>{u.items.push(t[r])});else{var o=t.value.trim()||"";if(!i.allowEmptyOption&&!o.length)return;const e=o.split(i.delimiter);zf(e,t=>{const e={};e[s]=t,e[r]=t,u.options.push(e)}),u.items=e}};return"select"===d?h():g(),Object.assign({},bm,u,e)}var vm=0;class _m extends(Vg(Hg)){constructor(t,e){var i;super(),this.order=0,this.isOpen=!1,this.isDisabled=!1,this.isReadOnly=!1,this.isInvalid=!1,this.isValid=!0,this.isLocked=!1,this.isFocused=!1,this.isInputHidden=!1,this.isSetup=!1,this.ignoreFocus=!1,this.ignoreHover=!1,this.hasOptions=!1,this.lastValue="",this.caretPos=0,this.loading=0,this.loadedSearches={},this.activeOption=null,this.activeItems=[],this.optgroups={},this.options={},this.userOptions={},this.items=[],this.refreshTimeout=null,vm++;var n=Uf(t);if(n.tomselect)throw new Error("Tom Select already initialized on this element");n.tomselect=this,i=(window.getComputedStyle&&window.getComputedStyle(n,null)).getPropertyValue("direction");const s=ym(n,e);this.settings=s,this.input=n,this.tabIndex=n.tabIndex||0,this.is_select_tag="select"===n.tagName.toLowerCase(),this.rtl=/rtl/i.test(i),this.inputId=Bf(n,"tomselect-"+vm),this.isRequired=n.required,this.sifter=new $f(this.options,{diacritics:s.diacritics}),s.mode=s.mode||(1===s.maxItems?"single":"multi"),"boolean"!=typeof s.hideSelected&&(s.hideSelected="multi"===s.mode),"boolean"!=typeof s.hidePlaceholder&&(s.hidePlaceholder="multi"!==s.mode);var r=s.createFilter;"function"!=typeof r&&("string"==typeof r&&(r=new RegExp(r)),r instanceof RegExp?s.createFilter=t=>r.test(t):s.createFilter=t=>this.settings.duplicates||!this.options[t]),this.initializePlugins(s.plugins),this.setupCallbacks(),this.setupTemplates();const o=Uf("<div>"),a=Uf("<div>"),l=this._render("dropdown"),c=Uf('<div role="listbox" tabindex="-1">'),d=this.input.getAttribute("class")||"",p=s.mode;var u;(Yf(o,s.wrapperClass,d,p),Yf(a,s.controlClass),qf(o,a),Yf(l,s.dropdownClass,p),s.copyClassesToDropdown&&Yf(l,d),Yf(c,s.dropdownContentClass),qf(l,c),Uf(s.dropdownParent||o).appendChild(l),Hf(s.controlInput))?(u=Uf(s.controlInput),zf(["autocorrect","autocapitalize","autocomplete","spellcheck"],t=>{n.getAttribute(t)&&im(u,{[t]:n.getAttribute(t)})}),u.tabIndex=-1,a.appendChild(u),this.focus_node=u):s.controlInput?(u=Uf(s.controlInput),this.focus_node=u):(u=Uf("<input/>"),this.focus_node=a);this.wrapper=o,this.dropdown=l,this.dropdown_content=c,this.control=a,this.control_input=u,this.setup()}setup(){const t=this,e=t.settings,i=t.control_input,n=t.dropdown,s=t.dropdown_content,r=t.wrapper,o=t.control,a=t.input,l=t.focus_node,c={passive:!0},d=t.inputId+"-ts-dropdown";im(s,{id:d}),im(l,{role:"combobox","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":d});const p=Bf(l,t.inputId+"-ts-control"),u="label[for='"+Vf(t.inputId)+"']",h=document.querySelector(u),g=t.focus.bind(t);if(h){Df(h,"click",g),im(h,{for:p});const e=Bf(h,t.inputId+"-ts-label");im(l,{"aria-labelledby":e}),im(s,{"aria-labelledby":e})}if(r.style.width=a.style.width,t.plugins.names.length){const e="plugin-"+t.plugins.names.join(" plugin-");Yf([r,n],e)}(null===e.maxItems||e.maxItems>1)&&t.is_select_tag&&im(a,{multiple:"multiple"}),e.placeholder&&im(i,{placeholder:e.placeholder}),!e.splitOn&&e.delimiter&&(e.splitOn=new RegExp("\\s*"+Kg(e.delimiter)+"+\\s*")),e.load&&e.loadThrottle&&(e.load=Rf(e.load,e.loadThrottle)),Df(n,"mousemove",()=>{t.ignoreHover=!1}),Df(n,"mouseenter",e=>{var i=Zf(e.target,"[data-selectable]",n);i&&t.onOptionHover(e,i)},{capture:!0}),Df(n,"click",e=>{const i=Zf(e.target,"[data-selectable]");i&&(t.onOptionSelect(e,i),Pf(e,!0))}),Df(o,"click",e=>{var n=Zf(e.target,"[data-ts-item]",o);n&&t.onItemSelect(e,n)?Pf(e,!0):""==i.value&&(t.onClick(),Pf(e,!0))}),Df(l,"keydown",e=>t.onKeyDown(e)),Df(i,"keypress",e=>t.onKeyPress(e)),Df(i,"input",e=>t.onInput(e)),Df(l,"blur",e=>t.onBlur(e)),Df(l,"focus",e=>t.onFocus(e)),Df(i,"paste",e=>t.onPaste(e));const f=e=>{const s=e.composedPath()[0];if(!r.contains(s)&&!n.contains(s))return t.isFocused&&t.blur(),void t.inputState();s==i&&t.isOpen?e.stopPropagation():Pf(e,!0)},m=()=>{t.isOpen&&t.positionDropdown()};Df(document,"mousedown",f),Df(window,"scroll",m,c),Df(window,"resize",m,c),this._destroy=()=>{document.removeEventListener("mousedown",f),window.removeEventListener("scroll",m),window.removeEventListener("resize",m),h&&h.removeEventListener("click",g)},this.revertSettings={innerHTML:a.innerHTML,tabIndex:a.tabIndex},a.tabIndex=-1,a.insertAdjacentElement("afterend",t.wrapper),t.sync(!1),e.items=[],delete e.optgroups,delete e.options,Df(a,"invalid",()=>{t.isValid&&(t.isValid=!1,t.isInvalid=!0,t.refreshState())}),t.updateOriginalInput(),t.refreshItems(),t.close(!1),t.inputState(),t.isSetup=!0,a.disabled?t.disable():a.readOnly?t.setReadOnly(!0):t.enable(),t.on("change",this.onChange),Yf(a,"tomselected","ts-hidden-accessible"),t.trigger("initialize"),!0===e.preload&&t.preload()}setupOptions(t=[],e=[]){this.addOptions(t),zf(e,t=>{this.registerOptionGroup(t)})}setupTemplates(){var t=this,e=t.settings.labelField,i=t.settings.optgroupLabelField,n={optgroup:t=>{let e=document.createElement("div");return e.className="optgroup",e.appendChild(t.options),e},optgroup_header:(t,e)=>'<div class="optgroup-header">'+e(t[i])+"</div>",option:(t,i)=>"<div>"+i(t[e])+"</div>",item:(t,i)=>"<div>"+i(t[e])+"</div>",option_create:(t,e)=>'<div class="create">Add <strong>'+e(t.input)+"</strong>&hellip;</div>",no_results:()=>'<div class="no-results">No results found</div>',loading:()=>'<div class="spinner"></div>',not_loading:()=>{},dropdown:()=>"<div></div>"};t.settings.render=Object.assign({},n,t.settings.render)}setupCallbacks(){var t,e,i={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",item_select:"onItemSelect",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(t in i)(e=this.settings[i[t]])&&this.on(t,e)}sync(t=!0){const e=this,i=t?ym(e.input,{delimiter:e.settings.delimiter}):e.settings;e.setupOptions(i.options,i.optgroups),e.setValue(i.items||[],!0),e.lastQuery=null}onClick(){var t=this;if(t.activeItems.length>0)return t.clearActiveItems(),void t.focus();t.isFocused&&t.isOpen?t.blur():t.focus()}onMouseDown(){}onChange(){Wf(this.input,"input"),Wf(this.input,"change")}onPaste(t){var e=this;e.isInputHidden||e.isLocked?Pf(t):e.settings.splitOn&&setTimeout(()=>{var t=e.inputValue();if(t.match(e.settings.splitOn)){var i=t.trim().split(e.settings.splitOn);zf(i,t=>{Cf(t)&&(this.options[t]?e.addItem(t):e.createItem(t))})}},0)}onKeyPress(t){var e=this;if(!e.isLocked){var i=String.fromCharCode(t.keyCode||t.which);return e.settings.create&&"multi"===e.settings.mode&&i===e.settings.delimiter?(e.createItem(),void Pf(t)):void 0}Pf(t)}onKeyDown(t){var e=this;if(e.ignoreHover=!0,e.isLocked)t.keyCode!==fm&&Pf(t);else{switch(t.keyCode){case om:if(Ff(mm,t)&&""==e.control_input.value)return Pf(t),void e.selectAll();break;case lm:return e.isOpen&&(Pf(t,!0),e.close()),void e.clearActiveItems();case um:if(!e.isOpen&&e.hasOptions)e.open();else if(e.activeOption){let t=e.getAdjacent(e.activeOption,1);t&&e.setActiveOption(t)}return void Pf(t);case dm:if(e.activeOption){let t=e.getAdjacent(e.activeOption,-1);t&&e.setActiveOption(t)}return void Pf(t);case am:return void(e.canSelect(e.activeOption)?(e.onOptionSelect(t,e.activeOption),Pf(t)):(e.settings.create&&e.createItem()||document.activeElement==e.control_input&&e.isOpen)&&Pf(t));case cm:return void e.advanceSelection(-1,t);case pm:return void e.advanceSelection(1,t);case fm:return void(e.settings.selectOnTab&&(e.canSelect(e.activeOption)&&(e.onOptionSelect(t,e.activeOption),Pf(t)),e.settings.create&&e.createItem()&&Pf(t)));case hm:case gm:return void e.deleteSelection(t)}e.isInputHidden&&!Ff(mm,t)&&Pf(t)}}onInput(t){if(this.isLocked)return;const e=this.inputValue();this.lastValue!==e&&(this.lastValue=e,""!=e?(this.refreshTimeout&&window.clearTimeout(this.refreshTimeout),this.refreshTimeout=Lf(()=>{this.refreshTimeout=null,this._onInput()},this.settings.refreshThrottle)):this._onInput())}_onInput(){const t=this.lastValue;this.settings.shouldLoad.call(this,t)&&this.load(t),this.refreshOptions(),this.trigger("type",t)}onOptionHover(t,e){this.ignoreHover||this.setActiveOption(e,!1)}onFocus(t){var e=this,i=e.isFocused;if(e.isDisabled||e.isReadOnly)return e.blur(),void Pf(t);e.ignoreFocus||(e.isFocused=!0,"focus"===e.settings.preload&&e.preload(),i||e.trigger("focus"),e.activeItems.length||(e.inputState(),e.refreshOptions(!!e.settings.openOnFocus)),e.refreshState())}onBlur(t){if(!1!==document.hasFocus()){var e=this;if(e.isFocused){e.isFocused=!1,e.ignoreFocus=!1;var i=()=>{e.close(),e.setActiveItem(),e.setCaret(e.items.length),e.trigger("blur")};e.settings.create&&e.settings.createOnBlur?e.createItem(null,i):i()}}}onOptionSelect(t,e){var i,n=this;e.parentElement&&e.parentElement.matches("[data-disabled]")||(e.classList.contains("create")?n.createItem(null,()=>{n.settings.closeAfterSelect&&n.close()}):void 0!==(i=e.dataset.value)&&(n.lastQuery=null,n.addItem(i),n.settings.closeAfterSelect&&n.close(),!n.settings.hideSelected&&t.type&&/click/.test(t.type)&&n.setActiveOption(e)))}canSelect(t){return!!(this.isOpen&&t&&this.dropdown_content.contains(t))}onItemSelect(t,e){var i=this;return!i.isLocked&&"multi"===i.settings.mode&&(Pf(t),i.setActiveItem(e,t),!0)}canLoad(t){return!!this.settings.load&&!this.loadedSearches.hasOwnProperty(t)}load(t){const e=this;if(!e.canLoad(t))return;Yf(e.wrapper,e.settings.loadingClass),e.loading++;const i=e.loadCallback.bind(e);e.settings.load.call(e,t,i)}loadCallback(t,e){const i=this;i.loading=Math.max(i.loading-1,0),i.lastQuery=null,i.clearActiveOption(),i.setupOptions(t,e),i.refreshOptions(i.isFocused&&!i.isInputHidden),i.loading||Qf(i.wrapper,i.settings.loadingClass),i.trigger("load",t,e)}preload(){var t=this.wrapper.classList;t.contains("preloaded")||(t.add("preloaded"),this.load(""))}setTextboxValue(t=""){var e=this.control_input;e.value!==t&&(e.value=t,Wf(e,"update"),this.lastValue=t)}getValue(){return this.is_select_tag&&this.input.hasAttribute("multiple")?this.items:this.items.join(this.settings.delimiter)}setValue(t,e){jf(this,e?[]:["change"],()=>{this.clear(e),this.addItems(t,e)})}setMaxItems(t){0===t&&(t=null),this.settings.maxItems=t,this.refreshState()}setActiveItem(t,e){var i,n,s,r,o,a,l=this;if("single"!==l.settings.mode){if(!t)return l.clearActiveItems(),void(l.isFocused&&l.inputState());if("click"===(i=e&&e.type.toLowerCase())&&Ff("shiftKey",e)&&l.activeItems.length){for(a=l.getLastActive(),(s=Array.prototype.indexOf.call(l.control.children,a))>(r=Array.prototype.indexOf.call(l.control.children,t))&&(o=s,s=r,r=o),n=s;n<=r;n++)t=l.control.children[n],-1===l.activeItems.indexOf(t)&&l.setActiveItemClass(t);Pf(e)}else"click"===i&&Ff(mm,e)||"keydown"===i&&Ff("shiftKey",e)?t.classList.contains("active")?l.removeActiveItem(t):l.setActiveItemClass(t):(l.clearActiveItems(),l.setActiveItemClass(t));l.inputState(),l.isFocused||l.focus()}}setActiveItemClass(t){const e=this,i=e.control.querySelector(".last-active");i&&Qf(i,"last-active"),Yf(t,"active last-active"),e.trigger("item_select",t),-1==e.activeItems.indexOf(t)&&e.activeItems.push(t)}removeActiveItem(t){var e=this.activeItems.indexOf(t);this.activeItems.splice(e,1),Qf(t,"active")}clearActiveItems(){Qf(this.activeItems,"active"),this.activeItems=[]}setActiveOption(t,e=!0){t!==this.activeOption&&(this.clearActiveOption(),t&&(this.activeOption=t,im(this.focus_node,{"aria-activedescendant":t.getAttribute("id")}),im(t,{"aria-selected":"true"}),Yf(t,"active"),e&&this.scrollToOption(t)))}scrollToOption(t,e){if(!t)return;const i=this.dropdown_content,n=i.clientHeight,s=i.scrollTop||0,r=t.offsetHeight,o=t.getBoundingClientRect().top-i.getBoundingClientRect().top+s;o+r>n+s?this.scroll(o-n+r,e):o<s&&this.scroll(o,e)}scroll(t,e){const i=this.dropdown_content;e&&(i.style.scrollBehavior=e),i.scrollTop=t,i.style.scrollBehavior=""}clearActiveOption(){this.activeOption&&(Qf(this.activeOption,"active"),im(this.activeOption,{"aria-selected":null})),this.activeOption=null,im(this.focus_node,{"aria-activedescendant":null})}selectAll(){const t=this;if("single"===t.settings.mode)return;const e=t.controlChildren();e.length&&(t.inputState(),t.close(),t.activeItems=e,zf(e,e=>{t.setActiveItemClass(e)}))}inputState(){var t=this;t.control.contains(t.control_input)&&(im(t.control_input,{placeholder:t.settings.placeholder}),t.activeItems.length>0||!t.isFocused&&t.settings.hidePlaceholder&&t.items.length>0?(t.setTextboxValue(),t.isInputHidden=!0):(t.settings.hidePlaceholder&&t.items.length>0&&im(t.control_input,{placeholder:""}),t.isInputHidden=!1),t.wrapper.classList.toggle("input-hidden",t.isInputHidden))}inputValue(){return this.control_input.value.trim()}focus(){var t=this;t.isDisabled||t.isReadOnly||(t.ignoreFocus=!0,t.control_input.offsetWidth?t.control_input.focus():t.focus_node.focus(),setTimeout(()=>{t.ignoreFocus=!1,t.onFocus()},0))}blur(){this.focus_node.blur(),this.onBlur()}getScoreFunction(t){return this.sifter.getScoreFunction(t,this.getSearchOptions())}getSearchOptions(){var t=this.settings,e=t.sortField;return"string"==typeof t.sortField&&(e=[{field:t.sortField}]),{fields:t.searchField,conjunction:t.searchConjunction,sort:e,nesting:t.nesting}}search(t){var e,i,n=this,s=this.getSearchOptions();if(n.settings.score&&"function"!=typeof(i=n.settings.score.call(n,t)))throw new Error('Tom Select "score" setting must be a function that returns a function');return t!==n.lastQuery?(n.lastQuery=t,e=n.sifter.search(t,Object.assign(s,{score:i})),n.currentResults=e):e=Object.assign({},n.currentResults),n.settings.hideSelected&&(e.items=e.items.filter(t=>{let e=Cf(t.id);return!(e&&-1!==n.items.indexOf(e))})),e}refreshOptions(t=!0){var e,i,n,s,r,o,a,l,c,d;const p={},u=[];var h=this,g=h.inputValue();const f=g===h.lastQuery||""==g&&null==h.lastQuery;var m=h.search(g),b=null,y=h.settings.shouldOpen||!1,v=h.dropdown_content;f&&(b=h.activeOption)&&(c=b.closest("[data-group]")),s=m.items.length,"number"==typeof h.settings.maxOptions&&(s=Math.min(s,h.settings.maxOptions)),s>0&&(y=!0);const _=(t,e)=>{let i=p[t];if(void 0!==i){let t=u[i];if(void 0!==t)return[i,t.fragment]}let n=document.createDocumentFragment();return i=u.length,u.push({fragment:n,order:e,optgroup:t}),[i,n]};for(e=0;e<s;e++){let t=m.items[e];if(!t)continue;let s=t.id,a=h.options[s];if(void 0===a)continue;let l=Tf(s),d=h.getOption(l,!0);for(h.settings.hideSelected||d.classList.toggle("selected",h.items.includes(l)),r=a[h.settings.optgroupField]||"",i=0,n=(o=Array.isArray(r)?r:[r])&&o.length;i<n;i++){r=o[i];let t=a.$order,e=h.optgroups[r];void 0===e?r="":t=e.$order;const[n,l]=_(r,t);i>0&&(d=d.cloneNode(!0),im(d,{id:a.$id+"-clone-"+i,"aria-selected":null}),d.classList.add("ts-cloned"),Qf(d,"active"),h.activeOption&&h.activeOption.dataset.value==s&&c&&c.dataset.group===r.toString()&&(b=d)),l.appendChild(d),""!=r&&(p[r]=n)}}h.settings.lockOptgroupOrder&&u.sort((t,e)=>t.order-e.order),a=document.createDocumentFragment(),zf(u,t=>{let e=t.fragment,i=t.optgroup;if(!e||!e.children.length)return;let n=h.optgroups[i];if(void 0!==n){let t=document.createDocumentFragment(),i=h.render("optgroup_header",n);qf(t,i),qf(t,e);let s=h.render("optgroup",{group:n,options:t});qf(a,s)}else qf(a,e)}),v.innerHTML="",qf(v,a),h.settings.highlight&&(rm(v),m.query.length&&m.tokens.length&&zf(m.tokens,t=>{sm(v,t.regex)}));var w=t=>{let e=h.render(t,{input:g});return e&&(y=!0,v.insertBefore(e,v.firstChild)),e};if(h.loading?w("loading"):h.settings.shouldLoad.call(h,g)?0===m.items.length&&w("no_results"):w("not_loading"),(l=h.canCreate(g))&&(d=w("option_create")),h.hasOptions=m.items.length>0||l,y){if(m.items.length>0){if(b||"single"!==h.settings.mode||null==h.items[0]||(b=h.getOption(h.items[0])),!v.contains(b)){let t=0;d&&!h.settings.addPrecedence&&(t=1),b=h.selectable()[t]}}else d&&(b=d);t&&!h.isOpen&&(h.open(),h.scrollToOption(b,"auto")),h.setActiveOption(b)}else h.clearActiveOption(),t&&h.isOpen&&h.close(!1)}selectable(){return this.dropdown_content.querySelectorAll("[data-selectable]")}addOption(t,e=!1){const i=this;if(Array.isArray(t))return i.addOptions(t,e),!1;const n=Cf(t[i.settings.valueField]);return null!==n&&!i.options.hasOwnProperty(n)&&(t.$order=t.$order||++i.order,t.$id=i.inputId+"-opt-"+t.$order,i.options[n]=t,i.lastQuery=null,e&&(i.userOptions[n]=e,i.trigger("option_add",n,t)),n)}addOptions(t,e=!1){zf(t,t=>{this.addOption(t,e)})}registerOption(t){return this.addOption(t)}registerOptionGroup(t){var e=Cf(t[this.settings.optgroupValueField]);return null!==e&&(t.$order=t.$order||++this.order,this.optgroups[e]=t,e)}addOptionGroup(t,e){var i;e[this.settings.optgroupValueField]=t,(i=this.registerOptionGroup(e))&&this.trigger("optgroup_add",i,e)}removeOptionGroup(t){this.optgroups.hasOwnProperty(t)&&(delete this.optgroups[t],this.clearCache(),this.trigger("optgroup_remove",t))}clearOptionGroups(){this.optgroups={},this.clearCache(),this.trigger("optgroup_clear")}updateOption(t,e){const i=this;var n,s;const r=Cf(t),o=Cf(e[i.settings.valueField]);if(null===r)return;const a=i.options[r];if(null==a)return;if("string"!=typeof o)throw new Error("Value must be set in option data");const l=i.getOption(r),c=i.getItem(r);if(e.$order=e.$order||a.$order,delete i.options[r],i.uncacheValue(o),i.options[o]=e,l){if(i.dropdown_content.contains(l)){const t=i._render("option",e);nm(l,t),i.activeOption===l&&i.setActiveOption(t)}l.remove()}c&&(-1!==(s=i.items.indexOf(r))&&i.items.splice(s,1,o),n=i._render("item",e),c.classList.contains("active")&&Yf(n,"active"),nm(c,n)),i.lastQuery=null}removeOption(t,e){const i=this;t=Tf(t),i.uncacheValue(t),delete i.userOptions[t],delete i.options[t],i.lastQuery=null,i.trigger("option_remove",t),i.removeItem(t,e)}clearOptions(t){const e=(t||this.clearFilter).bind(this);this.loadedSearches={},this.userOptions={},this.clearCache();const i={};zf(this.options,(t,n)=>{e(t,n)&&(i[n]=t)}),this.options=this.sifter.items=i,this.lastQuery=null,this.trigger("option_clear")}clearFilter(t,e){return this.items.indexOf(e)>=0}getOption(t,e=!1){const i=Cf(t);if(null===i)return null;const n=this.options[i];if(null!=n){if(n.$div)return n.$div;if(e)return this._render("option",n)}return null}getAdjacent(t,e,i="option"){var n,s=this;if(!t)return null;n="item"==i?s.controlChildren():s.dropdown_content.querySelectorAll("[data-selectable]");for(let i=0;i<n.length;i++)if(n[i]==t)return e>0?n[i+1]:n[i-1];return null}getItem(t){if("object"==typeof t)return t;var e=Cf(t);return null!==e?this.control.querySelector(`[data-value="${Mf(e)}"]`):null}addItems(t,e){var i=this,n=Array.isArray(t)?t:[t];n=n.filter(t=>-1===i.items.indexOf(t));const s=n[n.length-1];n.forEach(t=>{i.isPending=t!==s,i.addItem(t,e)})}addItem(t,e){jf(this,e?[]:["change","dropdown_close"],()=>{var i,n;const s=this,r=s.settings.mode,o=Cf(t);if((!o||-1===s.items.indexOf(o)||("single"===r&&s.close(),"single"!==r&&s.settings.duplicates))&&null!==o&&s.options.hasOwnProperty(o)&&("single"===r&&s.clear(e),"multi"!==r||!s.isFull())){if(i=s._render("item",s.options[o]),s.control.contains(i)&&(i=i.cloneNode(!0)),n=s.isFull(),s.items.splice(s.caretPos,0,o),s.insertAtCaret(i),s.isSetup){if(!s.isPending&&s.settings.hideSelected){let t=s.getOption(o),e=s.getAdjacent(t,1);e&&s.setActiveOption(e)}s.isPending||s.settings.closeAfterSelect||s.refreshOptions(s.isFocused&&"single"!==r),0!=s.settings.closeAfterSelect&&s.isFull()?s.close():s.isPending||s.positionDropdown(),s.trigger("item_add",o,i),s.isPending||s.updateOriginalInput({silent:e})}(!s.isPending||!n&&s.isFull())&&(s.inputState(),s.refreshState())}})}removeItem(t=null,e){const i=this;if(!(t=i.getItem(t)))return;var n,s;const r=t.dataset.value;n=em(t),t.remove(),t.classList.contains("active")&&(s=i.activeItems.indexOf(t),i.activeItems.splice(s,1),Qf(t,"active")),i.items.splice(n,1),i.lastQuery=null,!i.settings.persist&&i.userOptions.hasOwnProperty(r)&&i.removeOption(r,e),n<i.caretPos&&i.setCaret(i.caretPos-1),i.updateOriginalInput({silent:e}),i.refreshState(),i.positionDropdown(),i.trigger("item_remove",r,t)}createItem(t=null,e=()=>{}){3===arguments.length&&(e=arguments[2]),"function"!=typeof e&&(e=()=>{});var i,n=this,s=n.caretPos;if(t=t||n.inputValue(),!n.canCreate(t))return e(),!1;n.lock();var r=!1,o=t=>{if(n.unlock(),!t||"object"!=typeof t)return e();var i=Cf(t[n.settings.valueField]);if("string"!=typeof i)return e();n.setTextboxValue(),n.addOption(t,!0),n.setCaret(s),n.addItem(i),e(t),r=!0};return i="function"==typeof n.settings.create?n.settings.create.call(this,t,o):{[n.settings.labelField]:t,[n.settings.valueField]:t},r||o(i),!0}refreshItems(){var t=this;t.lastQuery=null,t.isSetup&&t.addItems(t.items),t.updateOriginalInput(),t.refreshState()}refreshState(){const t=this;t.refreshValidityState();const e=t.isFull(),i=t.isLocked;t.wrapper.classList.toggle("rtl",t.rtl);const n=t.wrapper.classList;n.toggle("focus",t.isFocused),n.toggle("disabled",t.isDisabled),n.toggle("readonly",t.isReadOnly),n.toggle("required",t.isRequired),n.toggle("invalid",!t.isValid),n.toggle("locked",i),n.toggle("full",e),n.toggle("input-active",t.isFocused&&!t.isInputHidden),n.toggle("dropdown-active",t.isOpen),n.toggle("has-options",tm(t.options)),n.toggle("has-items",t.items.length>0)}refreshValidityState(){var t=this;t.input.validity&&(t.isValid=t.input.validity.valid,t.isInvalid=!t.isValid)}isFull(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems}updateOriginalInput(t={}){const e=this;var i,n;const s=e.input.querySelector('option[value=""]');if(e.is_select_tag){const r=[],o=e.input.querySelectorAll("option:checked").length;function a(t,i,n){return t||(t=Uf('<option value="'+If(i)+'">'+If(n)+"</option>")),t!=s&&e.input.append(t),r.push(t),(t!=s||o>0)&&(t.selected=!0),t}e.input.querySelectorAll("option:checked").forEach(t=>{t.selected=!1}),0==e.items.length&&"single"==e.settings.mode?a(s,"",""):e.items.forEach(t=>{if(i=e.options[t],n=i[e.settings.labelField]||"",r.includes(i.$option)){a(e.input.querySelector(`option[value="${Mf(t)}"]:not(:checked)`),t,n)}else i.$option=a(i.$option,t,n)})}else e.input.value=e.getValue();e.isSetup&&(t.silent||e.trigger("change",e.getValue()))}open(){var t=this;t.isLocked||t.isOpen||"multi"===t.settings.mode&&t.isFull()||(t.isOpen=!0,im(t.focus_node,{"aria-expanded":"true"}),t.refreshState(),Gf(t.dropdown,{visibility:"hidden",display:"block"}),t.positionDropdown(),Gf(t.dropdown,{visibility:"visible",display:"block"}),t.focus(),t.trigger("dropdown_open",t.dropdown))}close(t=!0){var e=this,i=e.isOpen;t&&(e.setTextboxValue(),"single"===e.settings.mode&&e.items.length&&e.inputState()),e.isOpen=!1,im(e.focus_node,{"aria-expanded":"false"}),Gf(e.dropdown,{display:"none"}),e.settings.hideSelected&&e.clearActiveOption(),e.refreshState(),i&&e.trigger("dropdown_close",e.dropdown)}positionDropdown(){if("body"===this.settings.dropdownParent){var t=this.control,e=t.getBoundingClientRect(),i=t.offsetHeight+e.top+window.scrollY,n=e.left+window.scrollX;Gf(this.dropdown,{width:e.width+"px",top:i+"px",left:n+"px"})}}clear(t){var e=this;if(e.items.length){var i=e.controlChildren();zf(i,t=>{e.removeItem(t,!0)}),e.inputState(),t||e.updateOriginalInput(),e.trigger("clear")}}insertAtCaret(t){const e=this,i=e.caretPos,n=e.control;n.insertBefore(t,n.children[i]||null),e.setCaret(i+1)}deleteSelection(t){var e,i,n,s,r=this;e=t&&t.keyCode===hm?-1:1,i=Nf(r.control_input);const o=[];if(r.activeItems.length)s=Xf(r.activeItems,e),n=em(s),e>0&&n++,zf(r.activeItems,t=>o.push(t));else if((r.isFocused||"single"===r.settings.mode)&&r.items.length){const t=r.controlChildren();let n;e<0&&0===i.start&&0===i.length?n=t[r.caretPos-1]:e>0&&i.start===r.inputValue().length&&(n=t[r.caretPos]),void 0!==n&&o.push(n)}if(!r.shouldDelete(o,t))return!1;for(Pf(t,!0),void 0!==n&&r.setCaret(n);o.length;)r.removeItem(o.pop());return r.inputState(),r.positionDropdown(),r.refreshOptions(!1),!0}shouldDelete(t,e){const i=t.map(t=>t.dataset.value);return!(!i.length||"function"==typeof this.settings.onDelete&&!1===this.settings.onDelete(i,e))}advanceSelection(t,e){var i,n,s=this;s.rtl&&(t*=-1),s.inputValue().length||(Ff(mm,e)||Ff("shiftKey",e)?(n=(i=s.getLastActive(t))?i.classList.contains("active")?s.getAdjacent(i,t,"item"):i:t>0?s.control_input.nextElementSibling:s.control_input.previousElementSibling)&&(n.classList.contains("active")&&s.removeActiveItem(i),s.setActiveItemClass(n)):s.moveCaret(t))}moveCaret(t){}getLastActive(t){let e=this.control.querySelector(".last-active");if(e)return e;var i=this.control.querySelectorAll(".active");return i?Xf(i,t):void 0}setCaret(t){this.caretPos=this.items.length}controlChildren(){return Array.from(this.control.querySelectorAll("[data-ts-item]"))}lock(){this.setLocked(!0)}unlock(){this.setLocked(!1)}setLocked(t=this.isReadOnly||this.isDisabled){this.isLocked=t,this.refreshState()}disable(){this.setDisabled(!0),this.close()}enable(){this.setDisabled(!1)}setDisabled(t){this.focus_node.tabIndex=t?-1:this.tabIndex,this.isDisabled=t,this.input.disabled=t,this.control_input.disabled=t,this.setLocked()}setReadOnly(t){this.isReadOnly=t,this.input.readOnly=t,this.control_input.readOnly=t,this.setLocked()}destroy(){var t=this,e=t.revertSettings;t.trigger("destroy"),t.off(),t.wrapper.remove(),t.dropdown.remove(),t.input.innerHTML=e.innerHTML,t.input.tabIndex=e.tabIndex,Qf(t.input,"tomselected","ts-hidden-accessible"),t._destroy(),delete t.input.tomselect}render(t,e){var i,n;const s=this;if("function"!=typeof this.settings.render[t])return null;if(!(n=s.settings.render[t].call(this,e,If)))return null;if(n=Uf(n),"option"===t||"option_create"===t?e[s.settings.disabledField]?im(n,{"aria-disabled":"true"}):im(n,{"data-selectable":""}):"optgroup"===t&&(i=e.group[s.settings.optgroupValueField],im(n,{"data-group":i}),e.group[s.settings.disabledField]&&im(n,{"data-disabled":""})),"option"===t||"item"===t){const i=Tf(e[s.settings.valueField]);im(n,{"data-value":i}),"item"===t?(Yf(n,s.settings.itemClass),im(n,{"data-ts-item":""})):(Yf(n,s.settings.optionClass),im(n,{role:"option",id:e.$id}),e.$div=n,s.options[i]=e)}return n}_render(t,e){const i=this.render(t,e);if(null==i)throw"HTMLElement expected";return i}clearCache(){zf(this.options,t=>{t.$div&&(t.$div.remove(),delete t.$div)})}uncacheValue(t){const e=this.getOption(t);e&&e.remove()}canCreate(t){return this.settings.create&&t.length>0&&this.settings.createFilter.call(this,t)}hook(t,e,i){var n=this,s=n[e];n[e]=function(){var e,r;return"after"===t&&(e=s.apply(n,arguments)),r=i.apply(n,arguments),"instead"===t?r:("before"===t&&(e=s.apply(n,arguments)),e)}}}const wm=(t,e,i,n)=>{t.addEventListener(e,i,n)};function xm(){wm(this.input,"change",()=>{this.sync()})}const km=t=>null==t?null:Am(t),Am=t=>"boolean"==typeof t?t?"1":"0":t+"",Sm=(t,e=!1)=>{t&&(t.preventDefault(),e&&t.stopPropagation())},Om=t=>{if(t.jquery)return t[0];if(t instanceof HTMLElement)return t;if(Em(t)){var e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstChild}return document.querySelector(t)},Em=t=>"string"==typeof t&&t.indexOf("<")>-1;function $m(t){var e=this,i=e.onOptionSelect;e.settings.hideSelected=!1;const n=Object.assign({className:"tomselect-checkbox",checkedClassNames:void 0,uncheckedClassNames:void 0},t);var s=function(t,e){e?(t.checked=!0,n.uncheckedClassNames&&t.classList.remove(...n.uncheckedClassNames),n.checkedClassNames&&t.classList.add(...n.checkedClassNames)):(t.checked=!1,n.checkedClassNames&&t.classList.remove(...n.checkedClassNames),n.uncheckedClassNames&&t.classList.add(...n.uncheckedClassNames))},r=function(t){setTimeout(()=>{var e=t.querySelector("input."+n.className);e instanceof HTMLInputElement&&s(e,t.classList.contains("selected"))},1)};e.hook("after","setupTemplates",()=>{var t=e.settings.render.option;e.settings.render.option=(i,r)=>{var o=Om(t.call(e,i,r)),a=document.createElement("input");n.className&&a.classList.add(n.className),a.addEventListener("click",function(t){Sm(t)}),a.type="checkbox";const l=km(i[e.settings.valueField]);return s(a,!!(l&&e.items.indexOf(l)>-1)),o.prepend(a),o}}),e.on("item_remove",t=>{var i=e.getOption(t);i&&(i.classList.remove("selected"),r(i))}),e.on("item_add",t=>{var i=e.getOption(t);i&&r(i)}),e.hook("instead","onOptionSelect",(t,n)=>{if(n.classList.contains("selected"))return n.classList.remove("selected"),e.removeItem(n.dataset.value),e.refreshOptions(),void Sm(t,!0);i.call(e,t,n),r(n)})}const Cm=t=>{if(t.jquery)return t[0];if(t instanceof HTMLElement)return t;if(Tm(t)){var e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstChild}return document.querySelector(t)},Tm=t=>"string"==typeof t&&t.indexOf("<")>-1;function Im(t){const e=this,i=Object.assign({className:"clear-button",title:"Clear All",html:t=>`<div class="${t.className}" title="${t.title}">&#10799;</div>`},t);e.on("initialize",()=>{var t=Cm(i.html(i));t.addEventListener("click",t=>{e.isLocked||(e.clear(),"single"===e.settings.mode&&e.settings.allowEmptyOption&&e.addItem(""),t.preventDefault(),t.stopPropagation())}),e.control.appendChild(t)})}const Lm=(t,e=!1)=>{t&&(t.preventDefault(),e&&t.stopPropagation())},Rm=(t,e,i,n)=>{t.addEventListener(e,i,n)},jm=(t,e)=>{if(Array.isArray(t))t.forEach(e);else for(var i in t)t.hasOwnProperty(i)&&e(t[i],i)},Nm=t=>{if(t.jquery)return t[0];if(t instanceof HTMLElement)return t;if(Pm(t)){var e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstChild}return document.querySelector(t)},Pm=t=>"string"==typeof t&&t.indexOf("<")>-1,Dm=(t,e)=>{jm(e,(e,i)=>{null==e?t.removeAttribute(i):t.setAttribute(i,""+e)})},Fm=(t,e)=>{var i;null==(i=t.parentNode)||i.insertBefore(e,t.nextSibling)},Bm=(t,e)=>{var i;null==(i=t.parentNode)||i.insertBefore(e,t)},Mm=(t,e)=>{do{var i;if(t==(e=null==(i=e)?void 0:i.previousElementSibling))return!0}while(e&&e.previousElementSibling);return!1};function qm(){var t=this;if("multi"!==t.settings.mode)return;var e=t.lock,i=t.unlock;let n,s=!0;t.hook("after","setupTemplates",()=>{var e=t.settings.render.item;t.settings.render.item=(i,r)=>{const o=Nm(e.call(t,i,r));Dm(o,{draggable:"true"});const a=t=>{n=o,setTimeout(()=>{o.classList.add("ts-dragging")},0)},l=t=>{t.preventDefault(),o.classList.add("ts-drag-over"),d(o,n)},c=()=>{o.classList.remove("ts-drag-over")},d=(t,e)=>{void 0!==e&&(Mm(e,o)?Fm(t,e):Bm(t,e))},p=()=>{var e;document.querySelectorAll(".ts-drag-over").forEach(t=>t.classList.remove("ts-drag-over")),null==(e=n)||e.classList.remove("ts-dragging"),n=void 0;var i=[];t.control.querySelectorAll("[data-value]").forEach(t=>{if(t.dataset.value){let e=t.dataset.value;e&&i.push(e)}}),t.setValue(i)};return Rm(o,"mousedown",t=>{s||Lm(t),t.stopPropagation()}),Rm(o,"dragstart",a),Rm(o,"dragenter",l),Rm(o,"dragover",l),Rm(o,"dragleave",c),Rm(o,"dragend",p),o}}),t.hook("instead","lock",()=>(s=!1,e.call(t))),t.hook("instead","unlock",()=>(s=!0,i.call(t)))}const zm=(t,e=!1)=>{t&&(t.preventDefault(),e&&t.stopPropagation())},Um=t=>{if(t.jquery)return t[0];if(t instanceof HTMLElement)return t;if(Hm(t)){var e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstChild}return document.querySelector(t)},Hm=t=>"string"==typeof t&&t.indexOf("<")>-1;function Vm(t){const e=this,i=Object.assign({title:"Untitled",headerClass:"dropdown-header",titleRowClass:"dropdown-header-title",labelClass:"dropdown-header-label",closeClass:"dropdown-header-close",html:t=>'<div class="'+t.headerClass+'"><div class="'+t.titleRowClass+'"><span class="'+t.labelClass+'">'+t.title+'</span><a class="'+t.closeClass+'">&times;</a></div></div>'},t);e.on("initialize",()=>{var t=Um(i.html(i)),n=t.querySelector("."+i.closeClass);n&&n.addEventListener("click",t=>{zm(t,!0),e.close()}),e.dropdown.insertBefore(t,e.dropdown.firstChild)})}const Wm=(t,e)=>{if(Array.isArray(t))t.forEach(e);else for(var i in t)t.hasOwnProperty(i)&&e(t[i],i)},Gm=(t,...e)=>{var i=Ym(e);(t=Qm(t)).map(t=>{i.map(e=>{t.classList.remove(e)})})},Ym=t=>{var e=[];return Wm(t,t=>{"string"==typeof t&&(t=t.trim().split(/[\t\n\f\r\s]/)),Array.isArray(t)&&(e=e.concat(t))}),e.filter(Boolean)},Qm=t=>(Array.isArray(t)||(t=[t]),t),Km=(t,e)=>{if(!t)return-1;e=e||t.nodeName;for(var i=0;t=t.previousElementSibling;)t.matches(e)&&i++;return i};function Jm(){var t=this;t.hook("instead","setCaret",e=>{"single"!==t.settings.mode&&t.control.contains(t.control_input)?(e=Math.max(0,Math.min(t.items.length,e)))==t.caretPos||t.isPending||t.controlChildren().forEach((i,n)=>{n<e?t.control_input.insertAdjacentElement("beforebegin",i):t.control.appendChild(i)}):e=t.items.length,t.caretPos=e}),t.hook("instead","moveCaret",e=>{if(!t.isFocused)return;const i=t.getLastActive(e);if(i){const n=Km(i);t.setCaret(e>0?n+1:n),t.setActiveItem(),Gm(i,"last-active")}else t.setCaret(t.caretPos+e)})}const Zm=27,Xm=9,tb=(t,e=!1)=>{t&&(t.preventDefault(),e&&t.stopPropagation())},eb=(t,e,i,n)=>{t.addEventListener(e,i,n)},ib=(t,e)=>{if(Array.isArray(t))t.forEach(e);else for(var i in t)t.hasOwnProperty(i)&&e(t[i],i)},nb=t=>{if(t.jquery)return t[0];if(t instanceof HTMLElement)return t;if(sb(t)){var e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstChild}return document.querySelector(t)},sb=t=>"string"==typeof t&&t.indexOf("<")>-1,rb=(t,...e)=>{var i=ob(e);(t=ab(t)).map(t=>{i.map(e=>{t.classList.add(e)})})},ob=t=>{var e=[];return ib(t,t=>{"string"==typeof t&&(t=t.trim().split(/[\t\n\f\r\s]/)),Array.isArray(t)&&(e=e.concat(t))}),e.filter(Boolean)},ab=t=>(Array.isArray(t)||(t=[t]),t);function lb(){const t=this;t.settings.shouldOpen=!0,t.hook("before","setup",()=>{t.focus_node=t.control,rb(t.control_input,"dropdown-input");const e=nb('<div class="dropdown-input-wrap">');e.append(t.control_input),t.dropdown.insertBefore(e,t.dropdown.firstChild);const i=nb('<input class="items-placeholder" tabindex="-1" />');i.placeholder=t.settings.placeholder||"",t.control.append(i)}),t.on("initialize",()=>{t.control_input.addEventListener("keydown",e=>{switch(e.keyCode){case Zm:return t.isOpen&&(tb(e,!0),t.close()),void t.clearActiveItems();case Xm:t.focus_node.tabIndex=-1}return t.onKeyDown.call(t,e)}),t.on("blur",()=>{t.focus_node.tabIndex=t.isDisabled?-1:t.tabIndex}),t.on("dropdown_open",()=>{t.control_input.focus()});const e=t.onBlur;t.hook("instead","onBlur",i=>{if(!i||i.relatedTarget!=t.control_input)return e.call(t)}),eb(t.control_input,"blur",()=>t.onBlur()),t.hook("before","close",()=>{t.isOpen&&t.focus_node.focus({preventScroll:!0})})})}const cb=(t,e,i,n)=>{t.addEventListener(e,i,n)};function db(){var t=this;t.on("initialize",()=>{var e=document.createElement("span"),i=t.control_input;e.style.cssText="position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; ",t.wrapper.appendChild(e);var n=["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"];for(const t of n)e.style[t]=i.style[t];var s=()=>{e.textContent=i.value,i.style.width=e.clientWidth+"px"};s(),t.on("update item_add item_remove",s),cb(i,"input",s),cb(i,"keyup",s),cb(i,"blur",s),cb(i,"update",s)})}function pb(){var t=this,e=t.deleteSelection;this.hook("instead","deleteSelection",i=>!!t.activeItems.length&&e.call(t,i))}function ub(){this.hook("instead","setActiveItem",()=>{}),this.hook("instead","selectAll",()=>{})}const hb=37,gb=39,fb=(t,e,i)=>{for(;t&&t.matches;){if(t.matches(e))return t;t=t.parentNode}},mb=(t,e)=>{if(!t)return-1;e=e||t.nodeName;for(var i=0;t=t.previousElementSibling;)t.matches(e)&&i++;return i};function bb(){var t=this,e=t.onKeyDown;t.hook("instead","onKeyDown",i=>{var n,s,r,o;if(!t.isOpen||i.keyCode!==hb&&i.keyCode!==gb)return e.call(t,i);t.ignoreHover=!0,o=fb(t.activeOption,"[data-group]"),n=mb(t.activeOption,"[data-selectable]"),o&&(o=i.keyCode===hb?o.previousSibling:o.nextSibling)&&(s=(r=o.querySelectorAll("[data-selectable]"))[Math.min(r.length-1,n)])&&t.setActiveOption(s)})}const yb=t=>(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),vb=(t,e=!1)=>{t&&(t.preventDefault(),e&&t.stopPropagation())},_b=(t,e,i,n)=>{t.addEventListener(e,i,n)},wb=t=>{if(t.jquery)return t[0];if(t instanceof HTMLElement)return t;if(xb(t)){var e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstChild}return document.querySelector(t)},xb=t=>"string"==typeof t&&t.indexOf("<")>-1;function kb(t){const e=Object.assign({label:"&times;",title:"Remove",className:"remove",append:!0},t);var i=this;if(e.append){var n='<a href="javascript:void(0)" class="'+e.className+'" tabindex="-1" title="'+yb(e.title)+'">'+e.label+"</a>";i.hook("after","setupTemplates",()=>{var t=i.settings.render.item;i.settings.render.item=(e,s)=>{var r=wb(t.call(i,e,s)),o=wb(n);return r.appendChild(o),_b(o,"mousedown",t=>{vb(t,!0)}),_b(o,"click",t=>{i.isLocked||(vb(t,!0),i.isLocked||i.shouldDelete([r],t)&&(i.removeItem(r),i.refreshOptions(!1),i.inputState()))}),r}})}}function Ab(t){const e=this,i=Object.assign({text:t=>t[e.settings.labelField]},t);e.on("item_remove",function(t){if(e.isFocused&&""===e.control_input.value.trim()){var n=e.options[t];n&&e.setTextboxValue(i.text.call(e,n))}})}const Sb=(t,e)=>{if(Array.isArray(t))t.forEach(e);else for(var i in t)t.hasOwnProperty(i)&&e(t[i],i)},Ob=(t,...e)=>{var i=Eb(e);(t=$b(t)).map(t=>{i.map(e=>{t.classList.add(e)})})},Eb=t=>{var e=[];return Sb(t,t=>{"string"==typeof t&&(t=t.trim().split(/[\t\n\f\r\s]/)),Array.isArray(t)&&(e=e.concat(t))}),e.filter(Boolean)},$b=t=>(Array.isArray(t)||(t=[t]),t);function Cb(){const t=this,e=t.canLoad,i=t.clearActiveOption,n=t.loadCallback;var s,r,o={},a=!1,l=[];if(t.settings.shouldLoadMore||(t.settings.shouldLoadMore=()=>{if(s.clientHeight/(s.scrollHeight-s.scrollTop)>.9)return!0;if(t.activeOption){var e=t.selectable();if(Array.from(e).indexOf(t.activeOption)>=e.length-2)return!0}return!1}),!t.settings.firstUrl)throw"virtual_scroll plugin requires a firstUrl() method";t.settings.sortField=[{field:"$order"},{field:"$score"}];const c=e=>!("number"==typeof t.settings.maxOptions&&s.children.length>=t.settings.maxOptions)&&!(!(e in o)||!o[e]),d=(e,i)=>t.items.indexOf(i)>=0||l.indexOf(i)>=0;t.setNextUrl=(t,e)=>{o[t]=e},t.getUrl=e=>{if(e in o){const t=o[e];return o[e]=!1,t}return t.clearPagination(),t.settings.firstUrl.call(t,e)},t.clearPagination=()=>{o={}},t.hook("instead","clearActiveOption",()=>{if(!a)return i.call(t)}),t.hook("instead","canLoad",i=>i in o?c(i):e.call(t,i)),t.hook("instead","loadCallback",(e,i)=>{if(a){if(r){const i=e[0];void 0!==i&&(r.dataset.value=i[t.settings.valueField])}}else t.clearOptions(d);n.call(t,e,i),a=!1}),t.hook("after","refreshOptions",()=>{const e=t.lastValue;var i;c(e)?(i=t.render("loading_more",{query:e}))&&(i.setAttribute("data-selectable",""),r=i):e in o&&!s.querySelector(".no-results")&&(i=t.render("no_more_results",{query:e})),i&&(Ob(i,t.settings.optionClass),s.append(i))}),t.on("initialize",()=>{l=Object.keys(t.options),s=t.dropdown_content,t.settings.render=Object.assign({},{loading_more:()=>'<div class="loading-more-results">Loading more results ... </div>',no_more_results:()=>'<div class="no-more-results">No more results</div>'},t.settings.render),s.addEventListener("scroll",()=>{t.settings.shouldLoadMore.call(t)&&c(t.lastValue)&&(a||(a=!0,t.load.call(t,t.lastValue)))})})}function Tb(t){if(document.getElementById("__pb-multi-select-css"))return;const e=f("../css/tom-select"),i=document.createElement("link");i.id="__pb-multi-select-css",i.href=`${e}/tom-select.${t}.min.css`,i.rel="stylesheet",document.head.appendChild(i)}_m.define("change_listener",xm),_m.define("checkbox_options",$m),_m.define("clear_button",Im),_m.define("drag_drop",qm),_m.define("dropdown_header",Vm),_m.define("caret_position",Jm),_m.define("dropdown_input",lb),_m.define("input_autogrow",db),_m.define("no_backspace_delete",pb),_m.define("no_active_items",ub),_m.define("optgroup_columns",bb),_m.define("remove_button",kb),_m.define("restore_on_backspace",Ab),_m.define("virtual_scroll",Cb);const Ib=t=>t?`<div>${h(t.text)}</div>`:"";class Lb extends(s(n)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{placeholder:{type:String},source:{type:String},closeAfterSelect:{type:Boolean,attribute:"close-after-select"},preload:{type:String},onBlur:{type:String,attribute:"on-blur"},onChange:{type:String,attribute:"on-change"}})}get value(){return this._select?this._select.getValue():null}set value(t){this._select&&(this._select.clear(!0),this._select.sync(),this._select.setValue(t,!1),this._select.sync())}set renderItem(t){this.renderFunction=t}constructor(){super(),this.theme="default",this.source=null,this.closeAfterSelect=!1,this.preload=!1,this.renderFunction=Ib,this.onBlur="pb-combo-box-blur",this.onChange="pb-combo-box-change",this.placeholder=""}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-i18n-update",()=>{this._select&&(this._select.settings.placeholder=h(this.placeholder),this._select.inputState(),this.source?this._select.refreshOptions(!1):(this._select.clearOptions(),this._select.sync()))})}firstUpdated(){Tb(this.theme);let t=this.querySelector("select,input");t||(t=document.createElement("input"),this.appendChild(t)),t.autocomplete=!1,r("pb-page-ready",()=>{const e={};if(this.source){let t=new AbortController;const i=this.toAbsoluteURL(this.source);e.labelField="text",e.valueField="value",e.searchField=[],e.preload=this.preload,this.preload&&(e.shouldLoad=()=>!0),e.load=(e,n)=>{this._select&&this._select.clearOptions(),t&&t.abort(),t=new AbortController,(async()=>{try{const s=await fetch(`${i}?query=${encodeURIComponent(e)}`,{method:"GET",mode:"cors",credentials:"same-origin",signal:t.signal}),r=await s.json();n(r)}catch{n()}})()},e.render={option:this.renderFunction,item:this.renderFunction}}e.placeholder=h(this.placeholder),e.closeAfterSelect=this.closeAfterSelect,e.onBlur=()=>this.emitTo(this.onBlur,{value:this.value}),e.onChange=()=>this.emitTo(this.onChange,{value:this.value}),this._select=new _m(t,e)})}createRenderRoot(){return this}}customElements.define("pb-combo-box",Lb);class Rb extends(s(n)){static get properties(){return Object.assign({src:{type:String},styles:{type:String},url:{type:String,reflect:!0,readOnly:!0},raw:{type:Boolean}},super.properties)}constructor(){super(),this.url="about:blank",this.raw=!1}firstUpdated(){super.firstUpdated(),this._iframe=this.shadowRoot.querySelector("iframe"),this._iframe.addEventListener("load",()=>{"about:blank"!==this._iframe.src&&(this._iframe.className="",this.emitTo("pb-end-update"))}),r("pb-page-ready",()=>{this.refresh()})}print(){this._iframe.contentWindow.print()}refresh(){this.emitTo("pb-start-update"),this._iframe.className="hidden",this._iframe.src="about:blank";const t=this.getDocument(),e=new URLSearchParams;t.odd&&e.set("odd",`${t.odd}.odd`),e.set("base",`${this.getEndpoint()}/${t.getCollection()}/`),this._getCustomStyles().forEach(t=>e.append("style",t));const i=e.toString();this.url=`${this.getEndpoint()}/api/document/${encodeURIComponent(t.path)}/print?${i}`;const n=new URLSearchParams(i);n.set("wc","true"),this.raw||(n.set("script",f("../lib/paged.polyfill.js")),n.append("style",f("../css/pagedjs/interface.css"))),this._iframe.src=`${this.getEndpoint()}/api/document/${encodeURIComponent(t.path)}/print?${n.toString()}`}render(){return t` <iframe title="Preview" src="about:blank"></iframe> `}_getCustomStyles(){let t=[];return this.styles&&(t=this.styles.split(/\s*,\s*/)),t}static get styles(){return e`
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
    `}}customElements.define("pb-print-preview",Rb);export{q as c,z as g};
