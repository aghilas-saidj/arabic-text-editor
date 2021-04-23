/**
 * marked - a markdown parser
 * Copyright (c) 2011-2020, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).marked=t()}(this,function(){"use strict";function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e){var t=0;if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator])return(t=e[Symbol.iterator]()).next.bind(t);if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e){return c[e]}var e,t=(function(t){function e(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}t.exports={defaults:e(),getDefaults:e,changeDefaults:function(e){t.exports.defaults=e}}}(e={exports:{}}),e.exports),i=(t.defaults,t.getDefaults,t.changeDefaults,/[&<>"']/),a=/[&<>"']/g,l=/[<>"']|&(?!#?\w+;)/,o=/[<>"']|&(?!#?\w+;)/g,c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':'"',"'":"'"};var h=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function u(e){return e.replace(h,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}var p=/(^|[^\[])\^/g;var f=/[^\w:]/g,d=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;var k={},b=/^[^:]+:\/*[^/]*$/,m=/^([^:]+:)[\s\S]*$/,x=/^([^:]+:\/*[^/]*)[\s\S]*$/;function w(e,t){k[" "+e]||(b.test(e)?k[" "+e]=e+"/":k[" "+e]=v(e,"/",!0));var n=-1===(e=k[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(m,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(x,"$1")+t:e+t}function v(e,t,n){var r=e.length;if(0===r)return"";for(var i=0;i<r;){var s=e.charAt(r-i-1);if(s!==t||n){if(s===t||!n)break;i++}else i++}return e.substr(0,r-i)}var y=function(e,t){if(t){if(i.test(e))return e.replace(a,n)}else if(l.test(e))return e.replace(o,n);return e},_=u,z=function(n,e){n=n.source||n,e=e||"";var r={replace:function(e,t){return t=(t=t.source||t).replace(p,"$1"),n=n.replace(e,t),r},getRegex:function(){return new RegExp(n,e)}};return r},$=function(e,t,n){if(e){var r;try{r=decodeURIComponent(u(n)).replace(f,"").toLowerCase()}catch(e){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!d.test(n)&&(n=w(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},S={exec:function(){}},A=function(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},T=function(e,t){var n=e.replace(/\|/g,function(e,t,n){for(var r=!1,i=t;0<=--i&&"\\"===n[i];)r=!r;return r?"|":" |"}).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},R=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,r=0,i=0;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&--r<0)return i;return-1},Z=function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},q=t.defaults,I=v,O=T,C=y,j=R;function E(e,t,n){var r=t.href,i=t.title?C(t.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:r,title:i,text:s}:{type:"image",raw:n,href:r,title:i,text:C(s)}}var D=function(){function e(e){this.options=e||q}var t=e.prototype;return t.space=function(e){var t=this.rules.block.newline.exec(e);if(t)return 1<t[0].length?{type:"space",raw:t[0]}:{raw:"\n"}},t.code=function(e,t){var n=this.rules.block.code.exec(e);if(n){var r=t[t.length-1];if(r&&"paragraph"===r.type)return{raw:n[0],text:n[0].trimRight()};var i=n[0].replace(/^ {4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:I(i,"\n")}}},t.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var n=t[0],r=function(e,t){var n=e.match(/^(\s+)(?:```)/);if(null===n)return t;var r=n[1];return t.split("\n").map(function(e){var t=e.match(/^\s+/);return null!==t&&t[0].length>=r.length?e.slice(r.length):e}).join("\n")}(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:r}}},t.heading=function(e){var t=this.rules.block.heading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[1].length,text:t[2]}},t.nptable=function(e){var t=this.rules.block.nptable.exec(e);if(t){var n={type:"table",header:O(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(n.header.length===n.align.length){for(var r=n.align.length,i=0;i<r;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(r=n.cells.length,i=0;i<r;i++)n.cells[i]=O(n.cells[i],n.header.length);return n}}},t.hr=function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},t.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){var n=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:n}}},t.list=function(e){var t=this.rules.block.list.exec(e);if(t){for(var n,r,i,s,a,l,o,c=t[0],h=t[2],u=1<h.length,p={type:"list",raw:c,ordered:u,start:u?+h:"",loose:!1,items:[]},g=t[0].match(this.rules.block.item),f=!1,d=g.length,k=0;k<d;k++)r=(c=n=g[k]).length,~(n=n.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(r-=n.length,n=this.options.pedantic?n.replace(/^ {1,4}/gm,""):n.replace(new RegExp("^ {1,"+r+"}","gm"),"")),k!==d-1&&(i=this.rules.block.bullet.exec(g[k+1])[0],(1<h.length?1===i.length:1<i.length||this.options.smartLists&&i!==h)&&(s=g.slice(k+1).join("\n"),p.raw=p.raw.substring(0,p.raw.length-s.length),k=d-1)),a=f||/\n\n(?!\s*$)/.test(n),k!==d-1&&(f="\n"===n.charAt(n.length-1),a=a||f),a&&(p.loose=!0),o=void 0,(l=/^\[[ xX]\] /.test(n))&&(o=" "!==n[1],n=n.replace(/^\[[ xX]\] +/,"")),p.items.push({type:"list_item",raw:c,task:l,checked:o,loose:a,text:n});return p}},t.html=function(e){var t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):C(t[0]):t[0]}},t.def=function(e){var t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}},t.table=function(e){var t=this.rules.block.table.exec(e);if(t){var n={type:"table",header:O(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(n.header.length===n.align.length){n.raw=t[0];for(var r=n.align.length,i=0;i<r;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(r=n.cells.length,i=0;i<r;i++)n.cells[i]=O(n.cells[i].replace(/^ *\| *| *\| *$/g,""),n.header.length);return n}}},t.lheading=function(e){var t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}},t.paragraph=function(e){var t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}},t.text=function(e,t){var n=this.rules.block.text.exec(e);if(n){var r=t[t.length-1];return r&&"text"===r.type?{raw:n[0],text:n[0]}:{type:"text",raw:n[0],text:n[0]}}},t.escape=function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:C(t[1])}},t.tag=function(e,t,n){var r=this.rules.inline.tag.exec(e);if(r)return!t&&/^<a /i.test(r[0])?t=!0:t&&/^<\/a>/i.test(r[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):C(r[0]):r[0]}},t.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var n,r=j(t[2],"()");-1<r&&(n=(0===t[0].indexOf("!")?5:4)+t[1].length+r,t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,n).trim(),t[3]="");var i,s=t[2],a="";return a=this.options.pedantic?(i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s),i?(s=i[1],i[3]):""):t[3]?t[3].slice(1,-1):"",E(t,{href:(s=s.trim().replace(/^<([\s\S]*)>$/,"$1"))?s.replace(this.rules.inline._escapes,"$1"):s,title:a?a.replace(this.rules.inline._escapes,"$1"):a},t[0])}},t.reflink=function(e,t){var n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){var r=(n[2]||n[1]).replace(/\s+/g," ");if((r=t[r.toLowerCase()])&&r.href)return E(n,r,n[0]);var i=n[0].charAt(0);return{type:"text",raw:i,text:i}}},t.strong=function(e){var t=this.rules.inline.strong.exec(e);if(t)return{type:"strong",raw:t[0],text:t[4]||t[3]||t[2]||t[1]}},t.em=function(e){var t=this.rules.inline.em.exec(e);if(t)return{type:"em",raw:t[0],text:t[6]||t[5]||t[4]||t[3]||t[2]||t[1]}},t.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var n=t[2].replace(/\n/g," "),r=/[^ ]/.test(n),i=n.startsWith(" ")&&n.endsWith(" ");return r&&i&&(n=n.substring(1,n.length-1)),n=C(n,!0),{type:"codespan",raw:t[0],text:n}}},t.br=function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},t.del=function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[1]}},t.autolink=function(e,t){var n=this.rules.inline.autolink.exec(e);if(n){var r,i="@"===n[2]?"mailto:"+(r=C(this.options.mangle?t(n[1]):n[1])):r=C(n[1]);return{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}},t.url=function(e,t){var n,r,i,s;if(n=this.rules.inline.url.exec(e)){if("@"===n[2])i="mailto:"+(r=C(this.options.mangle?t(n[0]):n[0]));else{for(;s=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0],s!==n[0];);r=C(n[0]),i="www."===n[1]?"http://"+r:r}return{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}},t.inlineText=function(e,t,n){var r=this.rules.inline.text.exec(e);if(r){var i=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):C(r[0]):r[0]:C(this.options.smartypants?n(r[0]):r[0]);return{type:"text",raw:r[0],text:i}}},e}(),L=S,P=z,U=A,B={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:L,table:L,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};B.def=P(B.def).replace("label",B._label).replace("title",B._title).getRegex(),B.bullet=/(?:[*+-]|\d{1,9}\.)/,B.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,B.item=P(B.item,"gm").replace(/bull/g,B.bullet).getRegex(),B.list=P(B.list).replace(/bull/g,B.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+B.def.source+")").getRegex(),B._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",B._comment=/<!--(?!-?>)[\s\S]*?-->/,B.html=P(B.html,"i").replace("comment",B._comment).replace("tag",B._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),B.paragraph=P(B._paragraph).replace("hr",B.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",B._tag).getRegex(),B.blockquote=P(B.blockquote).replace("paragraph",B.paragraph).getRegex(),B.normal=U({},B),B.gfm=U({},B.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),B.gfm.nptable=P(B.gfm.nptable).replace("hr",B.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",B._tag).getRegex(),B.gfm.table=P(B.gfm.table).replace("hr",B.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",B._tag).getRegex(),B.pedantic=U({},B.normal,{html:P("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",B._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:L,paragraph:P(B.normal._paragraph).replace("hr",B.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",B.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var F={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:L,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\s,punctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\s,punctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:L,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+\\-./:;<=>?@\\[^_{|}~"};F.em=P(F.em).replace(/punctuation/g,F._punctuation).getRegex(),F._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,F._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,F._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,F.autolink=P(F.autolink).replace("scheme",F._scheme).replace("email",F._email).getRegex(),F._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,F.tag=P(F.tag).replace("comment",B._comment).replace("attribute",F._attribute).getRegex(),F._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,F._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,F._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,F.link=P(F.link).replace("label",F._label).replace("href",F._href).replace("title",F._title).getRegex(),F.reflink=P(F.reflink).replace("label",F._label).getRegex(),F.normal=U({},F),F.pedantic=U({},F.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:P(/^!?\[(label)\]\((.*?)\)/).replace("label",F._label).getRegex(),reflink:P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",F._label).getRegex()}),F.gfm=U({},F.normal,{escape:P(F.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),F.gfm.url=P(F.gfm.url,"i").replace("email",F.gfm._extended_email).getRegex(),F.breaks=U({},F.gfm,{br:P(F.br).replace("{2,}","*").getRegex(),text:P(F.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var M={block:B,inline:F},N=t.defaults,W=M.block,X=M.inline;function G(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function V(e){for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),.5<Math.random()&&(t="x"+t.toString(16)),n+="&#"+t+";";return n}var H=function(){function n(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||N,this.options.tokenizer=this.options.tokenizer||new D,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var t={block:W.normal,inline:X.normal};this.options.pedantic?(t.block=W.pedantic,t.inline=X.pedantic):this.options.gfm&&(t.block=W.gfm,this.options.breaks?t.inline=X.breaks:t.inline=X.gfm),this.tokenizer.rules=t}n.lex=function(e,t){return new n(t).lex(e)};var e,t,r,i=n.prototype;return i.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},i.blockTokens=function(e,t,n){var r,i,s,a;for(void 0===t&&(t=[]),void 0===n&&(n=!0),e=e.replace(/^ +$/gm,"");e;)if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e,t))e=e.substring(r.raw.length),r.type?t.push(r):((a=t[t.length-1]).raw+="\n"+r.raw,a.text+="\n"+r.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],n),t.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),s=r.items.length,i=0;i<s;i++)r.items[i].tokens=this.blockTokens(r.items[i].text,[],!1);t.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.paragraph(e)))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.text(e,t))e=e.substring(r.raw.length),r.type?t.push(r):((a=t[t.length-1]).raw+="\n"+r.raw,a.text+="\n"+r.text);else if(e){var l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}throw new Error(l)}return t},i.inline=function(e){for(var t,n,r,i,s,a=e.length,l=0;l<a;l++)switch((s=e[l]).type){case"paragraph":case"text":case"heading":s.tokens=[],this.inlineTokens(s.text,s.tokens);break;case"table":for(s.tokens={header:[],cells:[]},r=s.header.length,t=0;t<r;t++)s.tokens.header[t]=[],this.inlineTokens(s.header[t],s.tokens.header[t]);for(r=s.cells.length,t=0;t<r;t++)for(i=s.cells[t],s.tokens.cells[t]=[],n=0;n<i.length;n++)s.tokens.cells[t][n]=[],this.inlineTokens(i[n],s.tokens.cells[t][n]);break;case"blockquote":this.inline(s.tokens);break;case"list":for(r=s.items.length,t=0;t<r;t++)this.inline(s.items[t].tokens)}return e},i.inlineTokens=function(e,t,n,r){var i;for(void 0===t&&(t=[]),void 0===n&&(n=!1),void 0===r&&(r=!1);e;)if(i=this.tokenizer.escape(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.tag(e,n,r))e=e.substring(i.raw.length),n=i.inLink,r=i.inRawBlock,t.push(i);else if(i=this.tokenizer.link(e))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.strong(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.em(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.codespan(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.br(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.del(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.autolink(e,V))e=e.substring(i.raw.length),t.push(i);else if(n||!(i=this.tokenizer.url(e,V))){if(i=this.tokenizer.inlineText(e,r,G))e=e.substring(i.raw.length),t.push(i);else if(e){var s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}throw new Error(s)}}else e=e.substring(i.raw.length),t.push(i);return t},e=n,r=[{key:"rules",get:function(){return{block:W,inline:X}}}],(t=null)&&s(e.prototype,t),r&&s(e,r),n}(),J=t.defaults,K=$,Q=y,Y=function(){function e(e){this.options=e||J}var t=e.prototype;return t.code=function(e,t,n){var r,i=(t||"").match(/\S*/)[0];return!this.options.highlight||null!=(r=this.options.highlight(e,i))&&r!==e&&(n=!0,e=r),i?'<pre><code class="'+this.options.langPrefix+Q(i,!0)+'">'+(n?e:Q(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:Q(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n"+(t=t&&"<tbody>"+t+"</tbody>")+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,n){if(null===(e=K(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<a href="'+Q(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>"},t.image=function(e,t,n){if(null===(e=K(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},t.text=function(e){return e},e}(),ee=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),te=function(){function e(){this.seen={}}return e.prototype.slug=function(e){var t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t))for(var n=t;this.seen[n]++,t=n+"-"+this.seen[n],this.seen.hasOwnProperty(t););return this.seen[t]=0,t},e}(),ne=t.defaults,re=_,ie=function(){function n(e){this.options=e||ne,this.options.renderer=this.options.renderer||new Y,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ee,this.slugger=new te}n.parse=function(e,t){return new n(t).parse(e)};var e=n.prototype;return e.parse=function(e,t){void 0===t&&(t=!0);for(var n,r,i,s,a,l,o,c,h,u,p,g,f,d,k,b,m,x="",w=e.length,v=0;v<w;v++)switch((h=e[v]).type){case"space":continue;case"hr":x+=this.renderer.hr();continue;case"heading":x+=this.renderer.heading(this.parseInline(h.tokens),h.depth,re(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue;case"code":x+=this.renderer.code(h.text,h.lang,h.escaped);continue;case"table":for(l=o="",i=h.header.length,n=0;n<i;n++)l+=this.renderer.tablecell(this.parseInline(h.tokens.header[n]),{header:!0,align:h.align[n]});for(o+=this.renderer.tablerow(l),c="",i=h.cells.length,n=0;n<i;n++){for(l="",s=(a=h.tokens.cells[n]).length,r=0;r<s;r++)l+=this.renderer.tablecell(this.parseInline(a[r]),{header:!1,align:h.align[r]});c+=this.renderer.tablerow(l)}x+=this.renderer.table(o,c);continue;case"blockquote":c=this.parse(h.tokens),x+=this.renderer.blockquote(c);continue;case"list":for(u=h.ordered,p=h.start,g=h.loose,i=h.items.length,c="",n=0;n<i;n++)k=(d=h.items[n]).checked,b=d.task,f="",d.task&&(m=this.renderer.checkbox(k),g?0<d.tokens.length&&"text"===d.tokens[0].type?(d.tokens[0].text=m+" "+d.tokens[0].text,d.tokens[0].tokens&&0<d.tokens[0].tokens.length&&"text"===d.tokens[0].tokens[0].type&&(d.tokens[0].tokens[0].text=m+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:m}):f+=m),f+=this.parse(d.tokens,g),c+=this.renderer.listitem(f,b,k);x+=this.renderer.list(c,u,p);continue;case"html":x+=this.renderer.html(h.text);continue;case"paragraph":x+=this.renderer.paragraph(this.parseInline(h.tokens));continue;case"text":for(c=h.tokens?this.parseInline(h.tokens):h.text;v+1<w&&"text"===e[v+1].type;)c+="\n"+((h=e[++v]).tokens?this.parseInline(h.tokens):h.text);x+=t?this.renderer.paragraph(c):c;continue;default:var y='Token with "'+h.type+'" type was not found.';if(this.options.silent)return void console.error(y);throw new Error(y)}return x},e.parseInline=function(e,t){t=t||this.renderer;for(var n,r="",i=e.length,s=0;s<i;s++)switch((n=e[s]).type){case"escape":r+=t.text(n.text);break;case"html":r+=t.html(n.text);break;case"link":r+=t.link(n.href,n.title,this.parseInline(n.tokens,t));break;case"image":r+=t.image(n.href,n.title,n.text);break;case"strong":r+=t.strong(this.parseInline(n.tokens,t));break;case"em":r+=t.em(this.parseInline(n.tokens,t));break;case"codespan":r+=t.codespan(n.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(n.tokens,t));break;case"text":r+=t.text(n.text);break;default:var a='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(a);throw new Error(a)}return r},n}(),se=A,ae=Z,le=y,oe=t.getDefaults,ce=t.changeDefaults,he=t.defaults;function ue(e,n,r){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof n&&(r=n,n=null),n=se({},ue.defaults,n||{}),ae(n),r){var i,s=n.highlight;try{i=H.lex(e,n)}catch(e){return r(e)}var a=function(t){var e;if(!t)try{e=ie.parse(i,n)}catch(e){t=e}return n.highlight=s,t?r(t):r(null,e)};if(!s||s.length<3)return a();if(delete n.highlight,!i.length)return a();var l=0;return ue.walkTokens(i,function(n){"code"===n.type&&(l++,setTimeout(function(){s(n.text,n.lang,function(e,t){return e?a(e):(null!=t&&t!==n.text&&(n.text=t,n.escaped=!0),void(0===--l&&a()))})},0))}),void(0===l&&a())}try{var t=H.lex(e,n);return n.walkTokens&&ue.walkTokens(t,n.walkTokens),ie.parse(t,n)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",n.silent)return"<p>An error occurred:</p><pre>"+le(e.message+"",!0)+"</pre>";throw e}}return ue.options=ue.setOptions=function(e){return se(ue.defaults,e),ce(ue.defaults),ue},ue.getDefaults=oe,ue.defaults=he,ue.use=function(l){var t,n=se({},l);l.renderer&&function(){var a=ue.defaults.renderer||new Y;for(var e in l.renderer)!function(i){var s=a[i];a[i]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=l.renderer[i].apply(a,t);return!1===r&&(r=s.apply(a,t)),r}}(e);n.renderer=a}(),l.tokenizer&&function(){var a=ue.defaults.tokenizer||new D;for(var e in l.tokenizer)!function(i){var s=a[i];a[i]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=l.tokenizer[i].apply(a,t);return!1===r&&(r=s.apply(a,t)),r}}(e);n.tokenizer=a}(),l.walkTokens&&(t=ue.defaults.walkTokens,n.walkTokens=function(e){l.walkTokens(e),t&&t(e)}),ue.setOptions(n)},ue.walkTokens=function(e,t){for(var n,r=g(e);!(n=r()).done;){var i=n.value;switch(t(i),i.type){case"table":for(var s,a=g(i.tokens.header);!(s=a()).done;){var l=s.value;ue.walkTokens(l,t)}for(var o,c=g(i.tokens.cells);!(o=c()).done;)for(var h,u=g(o.value);!(h=u()).done;){var p=h.value;ue.walkTokens(p,t)}break;case"list":ue.walkTokens(i.items,t);break;default:i.tokens&&ue.walkTokens(i.tokens,t)}}},ue.Parser=ie,ue.parser=ie.parse,ue.Renderer=Y,ue.TextRenderer=ee,ue.Lexer=H,ue.lexer=H.lex,ue.Tokenizer=D,ue.Slugger=te,ue.parse=ue});
const dao = [

  // public, appears in builder

  {
    name: "pageId",
    label: "Page Slug (ID)",
    type: "id",
    default: "",
    private: false,
    save: true
  },

  // we need to know what course this exercise is associated with
  {
    name: "assignmentCourseId",
    label: "Assignment Course",
    type: "number",
    default: 0,
    private: false,
    save: false
  },
  {
    name: "assignmentSpaceId",
    label: "Assignment Space",
    type: "number",
    default: 0,
    private: false,
    save: false
  },

  // after the user submits, where do we send him?
  {
    name: "assignmentRedirectUrl",
    label: "Assignment Redirect URL",
    type: "url",
    default: "",
    private: false,
    save: false
  },

  // The title of the page
  {
    name: "pageTitle",
    label: "Page Title",
    type: "string",
    default: "",
    private: false,
    save: false
  },

  // The prompt for this exercise
  {
    name: "pagePlaceholder",
    label: "Page Placeholder",
    type: "string",
    default: "",
    private: false,
    save: false
  },
  // The description of this exercise
  {
    name: "pageDescription",
    label: "Page Description",
    type: "string",
    default: "",
    private: false,
    save: false
  },
  // An accompanying image for the description
  // TODO change to pageDescriptionImageUrl
  {
    name: "pageImageUrl",
    label: "Page Image URL",
    type: "url",
    default: "",
    private: false,
    save: false,
  },
  // A "learn more..." link below the description
  {
    name: "pageDescriptionUrl",
    label: "Page Description URL",
    type: "url",
    default: "",
    private: false,
    save: false
  },
  // How many words are suggested for this exercise (soft requirement)
  {
    name: "pageWordGoal",
    label: "Page Word Goal",
    type: "number",
    default: 0,
    private: false,
    save: true
  },
  // How much time is allowed to complete the exercise
  {
    name: "pageTimeLimit",
    label: "Page Time Limit",
    type: "number",
    default: 0,
    private: false,
    save: true
  },
  // Can the user change the word goal and the time limit?
  {
    name: "pageSettingsLocked",
    label: "Page Settings are locked",
    type: "boolean",
    default: false,
    private: false,
    save: false
  },
  // Can the user paste?
  {
    name: "pageDisablePaste",
    label: "Disable paste?",
    type: "boolean",
    default: false,
    private: false,
    save: false
  },
  // Here you can add an array of placeholders which you
  // can cycle through for inpiration
  {
    name: "pagePrompts",
    label: "Page Prompts",
    type: "array",
    default: 0,
    private: true,
    save: false,
  },

  /* Private, does not appear in builder */

   // author metadata
   {
    name: "pageAuthorName",
    label: "Page Author Name",
    type: "string",
    default: false,
    private: true,
    save: true,
  },
   {
    name: "pageAuthorEmail",
    label: "Page Author Email",
    type: "string",
    default: false,
    private: true,
    save: true,
  },

  // The content of the exercise
  {
    name: "pageContent",
    label: "Page Content",
    type: "string",
    default: "",
    private: true,
    save: true
  },
  // When this page was created
  {
    name: "pageCreationDate",
    label: "Page Creation Date",
    type: "string",
    default: Date.now(),
    private: true,
    save: false
  },
  // How many seconds have ellapsed since the user begun writing
  {
    name: "pageElapsed",
    label: "Page Elapsed",
    type: "number",
    default: 0,
    private: true,
    save: true
  },
  // How many words are in the exercise
  {
    name: "pageWordCount",
    label: "Page Word Count",
    type: "number",
    default: 0,
    private: true,
    save: true
  },
  // system level fields
  {
    name: "darkmode",
    label: "Dark Mode",
    type: "boolean",
    default: true,
    private: true,
    save: true,
  },
  // english or spanish, set by the browser
  {
    name: "language",
    label: "Language",
    type: "string",
    default: null,
    private: true,
    save: true,
  },
  // if it is the first time visitor we onboard them
  {
    name: "visited",
    label: "Has visited before",
    type: "boolean",
    default: false,
    private: true,
    save: true,
  },
  // internal, to display the builder sidebar
  {
    name: "builder",
    label: "Builder",
    type: "boolean",
    default: false,
    private: true,
    save: true
  },
  // how many seconds have passed since the user moved the mouse
  // mostly for hiding UI, but we could also use it for exercises
  // where we want to force keyboard usage to edit, for example
  {
    name: "mouseIdle",
    label: "Mouse Idle",
    type: "number",
    default: false,
    private: true,
    save: false,
  },
  // how many seconds have passed since the user typed something
  // mostly for showing UI, but we could also use it for stream of
  // thought exercises where you can't pause while writing.
  {
    name: "keyboardIdle",
    label: "Keyboard Idle",
    type: "number",
    default: false,
    private: true,
    save: false,
  },
  // we need a page author
  {
    name: "pageAuthorId",
    label: "Page Author Id",
    type: "string",
    default: false,
    private: true,
    save: false,
  },

  // in order to save completed exercises 
  // in the correct collection within a page 
  {
    name: "belongsToPage",
    label: "Belongs to page",
    type: "string",
    default: false,
    private: true,
    save: true,
  },
  
  {
    name: "email",
    label: "Email",
    type: "string",
    default: "",
    private: true,
    save: false
  },
];

dao.forEach(thing => {
  thing.clean = function(value){
     if (thing.type === "number") return isNaN(value) ? 0 : parseInt(value, 10);
     if (thing.type === "string") return value  || "";
     if (thing.type === "boolean") return value === "true" || value === true ? true : false;
     if (thing.type === "url") return value || "";
     if (thing.type === "id") return value || 0;
     if (thing.type === "array") return typeof value === "object" ? value : value ? value.split(",") : [];
     else throw "type " + thing.type + " does not exist";
  }
});

let dom = {
  create: function(attr = {}, parent) {
    const el = attr.el
      ? document.createElement(attr.el)
      : document.createElement("div");
    
    for (let key in attr) {
      var isAttr = key !== 'el' && key !== 'html';
      if (isAttr) el.setAttribute(key, attr[key]);
    }

    if (attr.html) el.innerHTML = attr.html;

    if (parent) parent.appendChild(el);

    return el;
  },
  empty: function(el){
    el.innerHTML = "";
    return el;
  },
  qs: function(selector, ctx){
    const el = ctx 
      ? ctx.querySelector(selector)
      : document.querySelector(selector);
    return el;
  },
  qsa: function(selector, ctx){
    const els = ctx 
      ? Array.from(ctx.querySelectorAll(selector))
      : Array.from(document.querySelectorAll(selector));
    return els;
  },
  gid: function(id) {
    return document.getElementById(id);
  },
  update: function(type, value) {
    var els = Array.from(document.querySelectorAll(`[data-type=${type}]`));
    els.forEach(el => el.innerHTML = value);
  },
  body: document.body
}

function t(key, plural){

  const lang = typeof state === "undefined" ? "en" : state.get("language");

  const dict = {
    "...اكتب الآن.": "Comienza a escribir...",
    "Word Goal": "Objetivo de palabras",
    "Time Limit": "Límite de tiempo",
    "Word": "Palabra",
    "كلمة": "Palabras",
    "word": "palabra",
    "words": "palabras",
    "in": "en",
    "Time": "Tiempo",
    "min": "min",
    "Custom...": "Ajustar...",
    "Enter a": "Introduce un",
    "in minutes": "en minutos",
    "Your email": "Tu email",
    "No time limit": "Sin límite de tiempo",
    "No goal": "Sin objetivo",
    "Write free form": "Escribe de forma libre",
    "Write during": "Escribe durante",
    "Write": "Escribe",
    "Learn more": "Leer más",
    "min": "min",
    "sec": "seg",
    "seconds": "segundos",
    "Are you sure? All text will be deleted.": "Espera, seguro quieres borrar todo el texto?",
    "The time is up!": "¡Se acabó el tiempo!",
    "Sending": "Enviando",
    "Copied link to clipboard": "Enlace copiado al portapapeles",
    "You've written during": "Has escrito durante",
    "minutes": "minutos",
    "You've reached": "Has alcanzado",
    "Pasting is not allowed": "No se permite copiar y pegar",
    "Copied to clipboard": "Texto copiado al portapapeles",
    "You ran out of time before completing the exercise. \n\n You'll have to start again.": "Se acabó el tiempo antes de completar el ejercicio. \n\n Tendrás que comenzar de nuevo.",
    "Log in or sign up to view this exercise": " Entra a tu cuenta o regístrate para poder ver este ejercicio",
    "Something went wrong, please submit your assignment again": "No se pudo enviar tu ejercicio, por favor inténtalo de nuevo",
    "Open in Blank Page": "Abrir en Blank Page"
  }

  const keys = Object.keys(dict);
  const values = Object.values(dict);
  const englishWord = keys.find(word => key === word);
  const spanishWord = values.find(word => key === word);

  if (!englishWord && !spanishWord) {
    console.log( "translation missing: " + key);
    return key;
  }

  const translation = lang === "en" ? key : dict[key]// english input;
  const pluralized = plural ? translation + "s" : translation;

  return pluralized

}

function translateDom(lang){
  const els = dom.qsa("[data-translate]");
  els.forEach(el => {
    const translation = el.getAttribute("data-translate");
    const source = el.innerHTML; 
    el.innerHTML = translation;
    el.setAttribute("data-translate", source);
  });
}
const utils = {};

utils.generatePageUrl = function() {
  const collection = writePage.assignmentCourse(state.get("assignmentCourse"));
  const pageUrl = `https://blank.page/${collection}/${state.get("pageId")}`;
  return pageUrl;
}

// senseless feature requested
utils.fixUrl = function(url) {
  if (!url) return "https://blank.page/cursos";
  if (url.startsWith("http")) return url;
  else return  "https://" + url
}

utils.linkHelper = function(txt, url) {
  if (txt === undefined) return dom.create();
  if (!url) return dom.create({html: txt});
  return dom.create({el: "a", href: url, html: txt, target: "_blank"});
}

utils.pageDescriptionHelper = function(title = "", description = "", url = "", imageUrl="") {
  const link = utils.linkHelper(title, url);
  link.classList.add("page-title-anchor")
  const el = dom.create({});
  el.appendChild(link);
  const pageDescriptionEl = dom.create({class: "page-description"}, el)
  const pageImageEl = imageUrl ? dom.create({el: "img", class: "page-description-image", src: imageUrl }, pageDescriptionEl) : false;
  const pageDescriptionText = dom.create({class: "page-description-text", html:  description}, pageDescriptionEl);
  const learnMoreContainer = dom.create({});
  const learnMore = url ? utils.linkHelper(t("Learn more"), url) : false;

  if (learnMore) {
    learnMoreContainer.appendChild(learnMore);
    pageDescriptionText.appendChild(learnMoreContainer);
  }
  
  if (!url) return el;
  var to = false;
  link.addEventListener("mouseenter", (e) => { 
    if (to) clearTimeout(to); 
    pageDescriptionEl.classList.add("visible");
    link.classList.add("hovered");
  });
  link.addEventListener("mouseleave", (e) => { 
    to = setTimeout(function(){
      pageDescriptionEl.classList.remove("visible")
      link.classList.remove("hovered");
    }, 250)});
  pageDescriptionEl.addEventListener("mouseenter", (e) => { 
    if (to) clearTimeout(to); 
    pageDescriptionEl.classList.add("visible");
    link.classList.add("hovered");
  });
  pageDescriptionEl.addEventListener("mouseleave", (e) => { 
    to = setTimeout(function(){
      pageDescriptionEl.classList.remove("visible");
      link.classList.remove("hovered");
    }, 250)});
  return el;
}

utils.msToMin = function(ms) {
  return ms/1000/60;
}

utils.minsToMs = function(mins) {
  return mins*1000*60;
}

utils.msToString = function(ms) {
  const min = utils.msToMin(ms);
  return min > 1 ? `${min} ${t("الدقائق")}`  : `${ms/1000} ${t("ثواني")}`
}

utils.pickRandom = function(arr) {
  if (!arr) throw "Empty Array";
  return arr[Math.floor(Math.random() * arr.length)];
}

utils.dirify = function(word){
  word = word.split(" ").join("-");
  return word.toLowerCase();
}

utils.pluralize = function pluralize(word, wordCount) {
  return word + (wordCount === 1 ? '' : 's');
}

utils.wordCount = function(string){
  if (!string) return 0;
  const arr = string.split(" ")
      .map(function(word){
        if (!word) return false;
        return word.split("\n");
    });
  return [].concat.apply([], arr).filter(Boolean).length;
}

utils.metaKey = function(){
  return navigator.platform.toUpperCase().indexOf('MAC')>=0 ? "⌘" : "Ctrl + "
}

utils.findGetParameter = function(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

utils.humanize = function() {
  const wordGoal = state.get("pageWordGoal");
  const timeLimit = state.get("pageTimeLimit");
  if (!wordGoal && !timeLimit) return "";
  if (!wordGoal && timeLimit) return `${t('اكتب خلال')} ${utils.msToMin(timeLimit)} دقيقة`;
  if (wordGoal && !timeLimit) return `${t('كتابة')} ${wordGoal} ${t('كلمة', true)}`;
  const secs = timeLimit/1000;
  const label = secs > 60 ? `${secs/60} ${t('دقيقة')}` : `${secs} ${t('ثانية')}`;

  return `${t('كتابة')} ${wordGoal} ${t('كلمة', true)} ${t('في')} ${label}`;
}

utils.ajax = function(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

utils.throttle = function(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

utils.download = function() {
  const data = writeSheet.getContent();
  if (!data) return false;
  const filename = state.get("pageTitle") || data.split(" ").filter((word, i) => i < 5).join("-");
  const type = 'text/plain';
  var file = new Blob([data], {type: type});
  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
      }, 0);
  }
}

utils.openFile = function(event) {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    writeSheet.setContent(text);
  };
  reader.readAsText(input.files[0]);
}

utils.simulateClick = function (elem) {
  // Create our event (with options)
  var evt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  // If cancelled, don't dispatch our event
  var canceled = !elem.dispatchEvent(evt);
};

utils.isDev = function(){
  return window.location.protocol === "file:" || window.location.hostname === "localhost"
}

utils.language = function(){
  var language = window.navigator.userLanguage || window.navigator.language;
  if (language.indexOf("-") !== -1) language = language.split("-")[0];
  return language || "en";
}

var ajax = {};

ajax.send = function (url, callback, method, data, async=true, credentials) {
  var x = new XMLHttpRequest();
  x.open(method, url, async);
  x.onreadystatechange = function() { if (x.readyState == 4) callback(x.responseText)};
  if (credentials) x.setRequestHeader('Authorization', 'Basic ' + credentials);
  if (method == 'POST') x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  x.send(data)
};

ajax.get = function (url, data, callback = function(){}, async) {
  var query = [];
  for (var key in data) {
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
  }
  var credentials = data.username ? window.btoa(data.username + ':' + data.password) : false;
  ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async, credentials)
};

ajax.post = function (url, data, callback = function(){}, async) {
  var query = [];
  for (var key in data) {
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
  }
  var credentials = data.username ? window.btoa(data.username + ':' + data.password) : false;
  ajax.send(url, callback, 'POST', query.join('&'), async , credentials)
};

utils.generateUID = function(size = 20) {
  return new Array(size).join().replace(/(.|$)/g, function() {
    return ((Math.random() * 36) | 0)
      .toString(36)
      [Math.random() < 0.5 ? 'toString' : 'toUpperCase']();
  });
}

utils.wordGoalDropdown = function(){
 return [
    {
      [t("هدف ")]: [
        {label: t("بدون هدف"), value: 0, type: "pageWordGoal"},
        {label: "250 " + t("كلمة", true), value: 250, type: "pageWordGoal"},
        {label: "500 " + t("كلمة", true), value: 500, type: "pageWordGoal"},
        {label: "750 " + t("كلمة", true), value: 750, type: "pageWordGoal"},
        {label: t("تشخيص"), value: null, type: "pageWordGoal"}
     ]
    }
  ];
}

utils.timeLimitDropdown = function(){
 return [
    {
      [t("Time Limit")]: [
        {label: t("بدون حد زمني"), value: 0, type: "pageTimeLimit"},
        {label: "10 دقائق", value: 10*60*1000, type: "pageTimeLimit"},
        {label: "15 دقيقة", value: 15*60*1000, type: "pageTimeLimit"},
        {label: "30 دقيقة", value: 30*60*1000, type: "pageTimeLimit"},
        {label: t("تشخيص"), value: null, type: "pageTimeLimit"}
     ]
    }
  ];
}

const firebaseConfig = {
  apiKey: "AIzaSyC6vp-bqRRU2HM8f9FutJR0fyrvq8tQK_4",
  authDomain: "blankpage2021.firebaseapp.com",
  projectId: "blankpage2021",
  storageBucket: "blankpage2021.appspot.com",
  messagingSenderId: "994147611219",
  appId: "1:994147611219:web:a5d3c3721fc97b3c4e4ca6"
};

function FirebaseApp(config) {
  firebase.initializeApp(config);
  const db = firebase.firestore();

  function signIn(cb) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        state.set('pageAuthorId', user.uid);
        if (cb) cb();
      } else {
        return firebase
          .auth()
          .signInAnonymously()
          .then(function(user) {
            state.set('pageAuthorId', user.uid);
            if (cb) cb();
          })
          .catch(function(error) {
            console.error(error);
          });
      }
    });
  }

  function checkIfDocExists(id) {
    return db
      .collection('pages')
      .doc(id)
      .get()
      .then(function(res) {
        return res.exists;
      });
  }

  // pages are saved from builder
  function savePage(data, requestedUrl = '') {
    const docId = state.get("pageId");
    const user = firebase.auth().currentUser;
    const collection = writePage.assignmentCourse(state.get("assignmentCourseId"));
    if (!user) throw "No user";
    console.log("saving " + docId)
    db
      .collection(collection)
      .doc(docId)
      .set({
        ...data,
        pageAuthorId: user.uid,
      })
      .then(function() {
        window.open(`https://blank.page/${collection}/${docId}`);
      })
      .catch(function(error) {
        console.log(error);
        window.alert(
          'The page could not be saved',
        );
      });
     return docId
  }

  function writeToDB(data, pageId, cb) {
    const docId = state.get("pageId");
    const email = state.get("email");
    const collection = writePage.assignmentCourse(state.get("assignmentCourseId"));
    const user = firebase.auth().currentUser;
    if (!user) throw "No user";
    console.log("saving: " + docId + " in document " + pageId);
    db
      .collection(collection)
      .doc(pageId)
      .collection("completed")
      .doc(docId)
      .set({
        ...data,
        pageAuthorId: user.uid
      })
      .then(function(w) {
        cb("success")
      })
      .catch(function(error) {
        cb("error")
      });
     return docId
  }

  function getNestedDataFromDB(collection, pageId, exerciseId) {
    

    return db.collection(collection)
      .doc(pageId)
      .collection("completed")
      .doc(exerciseId)
      .get()
      .then(configure);
  }

  function getDataFromDB(collection, pageId) {

    if (!pageId || !collection) return false;

    return db.collection(collection)
      .doc(pageId)
      .get()
      .then(configure)
  }

  function configure(res) {
    const data = res.data();
    dom.qs("body").classList.remove("loading");
    dom.qs("body").classList.add("loaded");
    
    if (!data) {
      return alert('Page does not exist');
    }
    
    Object.keys(data).forEach(function(key) {
      // because we don't want to trigger a pageContent change through state
      if (key === "pageContent") {
        writeSheet.setContent(data[key]);
        writeReader.enable(data[key]);
      }
      else 
        state.set(key, data[key]);
      if (typeof writeBuilder !== "undefined") writeBuilder.set(key, data[key]);
    });

    state.set("pageId", utils.generateUID());
  }

  this.signIn = signIn;
  this.checkIfDocExists = checkIfDocExists;
  this.writeToDB = writeToDB;
  this.getDataFromDB = getDataFromDB;
  this.getNestedDataFromDB = getNestedDataFromDB;
  this.savePage = savePage;
}

function State(){

  const _self = this;
  const paramId = window.location.href;
  const ID = "-" + (paramId || 0);
  const tenThousandThings = dao.map(thing => thing.name);
  const saveableKeys = dao.filter(thing => thing.save).map(thing => thing.name);

  this.data = _loadData();
  
  this.set = (key, val) => {
    key = key.split("-")[0] || key;
    if (tenThousandThings.indexOf(key) === -1) return console.warn( key + " not implemented");
    const archetype = dao.find(thing => thing.name === key);
    val = _self.data[_getKey(key)] = archetype.clean(val);
    if (~saveableKeys.indexOf(key)) _save(_getKey(key), val);
    _self[key](val);
  }

  this.get = (key) => {
    return _self.data[_getKey(key)];
  }

  this.refresh = ()     => { dao.forEach(thing => this[thing.name]( this.get(thing.name) ) ); }
  this.builder = (bool) => { writePage.builder(bool);}
  this.pageId  = (id)   => { document.body.classList.remove("loading");}

  if (paramId) this.set("pageId", paramId);

  // page data
  this.pageAuthorId = (user)      => {/* noop */}
  this.pageAuthorEmail = (email)  => {/* noop */}
  this.pageAuthorName = (name)    => { writePage.pageAuthorName(name);}
  this.pageDescription = ()       => { writePage.setPageDescription(); }
  this.pageTitle = (title)        => { writePage.setPageTitle(title); }
  this.pagePrompts = (prompts)    => { writePage.pagePrompts(prompts) }
  this.pageDescriptionUrl = (url) => {/* noop */}
  this.pageImageUrl = (url)       => {/* noop */}
  this.pagePlaceholder = (string) => {writeSheet.placeholder(string); }
  this.pageCreationDate = (date)  => {/* noop */}
  this.pageWordCount = (val)      => {writeCount.update(); }
  
  // page constraints
  this.pageElapsed = (ms)          => { writePage.tick(ms);}
  this.pageTimeLimit = (limit)     => { writePage.setTimeLimit(limit); }
  this.pageDisablePaste = (bool)   => { writePage.disablePaste(bool); }
  this.pageSettingsLocked = (bool) => { writeControls.lock(bool); }
  this.pageWordGoal = (goal)       => { writePage.setWordGoal(goal); }
  this.visited = ()                => {aboutScreen.hide(); }
  this.darkmode = (bool)           => {writePage.darkMode(bool); }
  this.pasted = ()                 => {/* noop */}
  this.language = (lang)           => { writePage.setLanguage(lang); }
  this.mouseIdle = (ms)            => { writePage.mouseIdleTick(ms); }
  this.keyboardIdle = (ms)         => { writePage.keyboardIdleTick(ms);}
  this.email = (email)             => {/* noop */}
  this.belongsToPage = (pageSlug)  => {/* noop */}

  // assignments
  this.assignmentRedirectUrl = (url) => { writePage.assignmentRedirectUrl(url); }
  this.assignmentCourseId = (courseId) => { writePage.assignmentCourse(courseId); }
  this.assignmentSpaceId = (courseId) => { /* noop */ }

  this.pageContent = (value) => {
    state.set("pageWordCount", utils.wordCount(value));
    if (value) write.start();
    else writeSheet.clear();
    write.change();
  }

  this.clean = (warn = true) => {
    if (warn) {
      const confirmed = confirm("يحذف كل التكوينات والنصوص ، هل أنت متأكد؟");
      if (!confirmed) return;
    }

    Object.keys(localStorage).forEach(key => localStorage.removeItem(key));
    write.reset();
  }

  // INNER UTILS

  function _save(key, val) {
    // basic checks
    //console.log(key, val)
    if (val === undefined || val === null) throw "wont save nuthin, " + key + " " + val;
    localStorage.setItem("write" + "-" + key, val.toString());
  }

  function _getKey(name) {
    const key = name.indexOf("page") !== -1
          || name.indexOf("assignment") !== -1
          ? name + ID
          : name + "-0"; // system
     return key;
  }

  function _loadData() {

    const data = dao.map(thing => {
      return {
        [_getKey(thing.name)]: _getValue(_getKey(thing.name), utils.findGetParameter(thing.name) || thing.default)
      }
    });
    return Object.assign({}, ...data);
  };

  function _getValue(key, def) {
    const item = localStorage.getItem("write-" + key) || def;
    const archetype = dao.find(thing => thing.name === key.split("-")[0]);
    if (archetype) return archetype.clean(item);
    else throw "Unkown archetype";
  }

}
function WriteSheet(selector){

  const el = document.querySelector(selector);
  if (!el) return;

  function count(){
    return utils.wordCount(el.value);
  }

  function update(){
    const pageContent = state.get("pageContent");
    setContent(pageContent);
  }

  function focus(){
    if (writeReader.enabled) return;
    el.focus();
  }

  function blur() {
    el.blur();
  }

  function moveCaretToEnd(){
    el.selectionStart = el.value.length;
  }

  function scrollToBottom(){
    el.scrollTop = el.scrollHeight;
  }

  function spellcheck(bool){
    el.setAttribute("spellcheck", bool ? "true" : "false");
  }

  function placeholder(string){
    if (!string || writeReader.enabled) return el.getAttribute("placeholder");
    el.setAttribute("placeholder", string);
  }

  function disable(){
    el.setAttribute("readonly", "readonly");
    el.classList.add("disabled");
  }

  function readonly(bool){
    if (bool) el.setAttribute("readonly", "readonly");
    else el.removeAttribute("readonly");
  }

  function enable(){
    el.removeAttribute("readonly");
    el.classList.remove("disabled");
  }

  function select(){
    el.select();
  }

  function deselect(){
    window.getSelection().removeAllRanges();
  }

  function setContent(text) {
    el.value = text;
  }

  function getContent() {
    return el.value;
  }

  function change() {
    el.value += " ";
    const pos = el.value.length;
    el.value = el.value.substring(0, pos-1);
  }

  function tick(s){
     // noop yet
  }

  function idleTick(s){
     // noop yet
  }

  function clear(){
    el.value = "";
  }

  function cancelAnimatedScrolling(ms){
    el.classList.add("jump");
    setTimeout(function(){
      el.classList.remove("jump");
    }, ms);
  }

  el.addEventListener("input", (e) => {
    state.set("pageContent", el.value);
  });

  el.addEventListener("paste", (e) => {
    cancelAnimatedScrolling(1000);
    state.set("pageContent", el.value);
  });

  el.addEventListener("scroll", (e) => {
    e.stopPropagation();
    //writeScroll.update(e);
  });

  setTimeout(function(){
    el.addEventListener("paste", writePage.pasted);
  });

  spellcheck(false);
  moveCaretToEnd();
  enable();

  this.focus = focus;
  this.spellcheck = spellcheck;
  this.placeholder = placeholder;
  this.disable = disable;
  this.enable = enable;
  this.readonly = readonly;
  this.select = select;
  this.deselect = deselect;
  this.setContent = setContent;
  this.tick = tick;
  this.getContent = getContent;
  this.el = el;
  this.change = change;
  this.clear = clear;
  this.update = update;
  this.protected = false
  this.scrollToBottom = scrollToBottom;
  this.cancelAnimatedScrolling = cancelAnimatedScrolling;
}
function WriteCount(selector) {

  const el = dom.qs(selector);
  if (!el) throw "el is missing";

  const wordCount = dom.create({
    el: "span", 
    class: "word-count",
    html: `0 ${t("words")}`
  }, el);

  const wpmCount = dom.create({
    el: "span", 
    class: "wpm-count",
    html: "0 wpm"
  }, el);

  function hide(){
    el.classList.add("hidden")
  }

  function show(){
    el.classList.remove("hidden")
  }

  function update(){
    const count = state.get("pageWordCount");
    const elapsed = state.get("pageElapsed")/1000;
    wordCount.innerHTML = `${count} ${t("word", count)}`;
    const wpmCountNumber = (count > 2 && elapsed > 1 )
     ? `${Math.floor(count/(elapsed/60))} wpm`
     : "0 wpm";
    wpmCount.innerHTML = wpmCountNumber;
  }


  el.addEventListener("click", function(){
    el.classList.toggle("wpm");
  });

  this.update = update;
  this.show = show;
  this.hide = hide;

}
function Write(selector){

  const el = dom.qs(selector);

  function hydrate() {
    //translate 
    state.set("language", state.get("language") || "en");
    if (writeReader.enabled) return hydrateReader();
    const pageContent = state.get("pageContent") || "";
    const isCourse = state.get("assignmentCourse") || false;

    //app
    writeSheet.cancelAnimatedScrolling(1000);
    writePage.toggle("populated", pageContent.length);
    writePage.toggle("empty", !pageContent.length);
    writePage.toggle("course", isCourse);
    writePage.setWordGoal(state.get("pageWordGoal"));
    writePage.setTimeLimit(state.get("pageTimeLimit"));

    //sheet
    const content = state.get("pageContent");
    writeSheet.setContent(content);
    writeSheet.placeholder(state.get("pagePlaceholder"));
    writeSheet.focus();

    writeCount.update();
    writeProgress.update();

    // word count
    const wordCount = utils.wordCount(pageContent);
    state.set("pageWordCount", wordCount);

    // shuffle
    writePage.pagePrompts(state.get("pagePromtps"))

    //header
    writeControls.lock(state.get("pageSettingsLocked"));
    state.set("pageTitle", state.get("pageTitle"));
    writePage.assignmentRedirectUrl(state.get("assignmentRedirectUrl"));
    writeSubmit.toggle(state.get("pageTimeLimit"))

    //timers
    elapsedTimer.set(state.get("pageElapsed"));

    //progress
    writeProgress.cancelTransitions();
    writeProgress.update();

    // builder
    writePage.builder(state.get("builder"));

    if (!pageContent.length) return;
    
    writePage.tick();
    change();
  }

  function hydrateReader(){
    writeSheet.readonly(true);
    writeHeader.show();
  }

  function reset(){
    console.log("reset")
    if (writeReader.enabled) return;
    const pageId = utils.generateUID();
    write.started = false;
    write.finished = false;
    state.set("pageContent", "");
    state.set("pageElapsed", 0);
    state.set("pageWordCount", 0);
    state.set('pageId', pageId);
    writeProgress.reset();
    elapsedTimer.stop();
    mouseTimer.stop();
    keyboardTimer.stop();
    writeHeader.hide();
    writeFlash.hide();
    writeSheet.enable();
    writeSheet.focus();
    // todo shorten
    writePage.add("empty");
    writePage.remove("populated")
    writePage.remove("failed")
    writePage.remove("finished");
  }

  function start(){
    if (write.started === true  || writeReader.enabled) return;
    writeSubmit.toggle(state.get("pageTimeLimit"))
    write.finished = false;
    writeHeader.hide();
    elapsedTimer.start();
    keyboardTimer.start();
    write.started = true;
    change();
  }

  function change(){
    if (writeReader.enabled) return;
    const pageContent = state.get("pageContent");
    if (!pageContent && write.started) reset();
    const isEmpty = !pageContent.trim().length;
    const wordGoal = state.get("pageWordGoal");
    const count = state.get("pageWordCount");
    const timeLimit = state.get("pageTimeLimit");
    const elapsed = state.get("pageElapsed");
    const charWidth = 64;
    const caretAtEnd = writeSheet.el.selectionStart >= writeSheet.el.value.length - charWidth;
    const isFinished = 
      wordGoal
        ? count > wordGoal
      : timeLimit
        ? elapsed > timeLimit
      : false;

    if (caretAtEnd) {
      writeSheet.scrollToBottom();
    }
    writeCount.update();
    writePage.toggle("empty", isEmpty);
    writePage.toggle("populated", !isEmpty);
    writeHeader.hide();
    writeProgress.update();
    writeCount.update();
    if (isFinished) write.finish();
  }

  function finish() {
    if (write.finished === true) return;

    writeSubmit.enable();
    write.finished = true;
    writeSheet.spellcheck(true);
    writeHeader.show();
    writePage.add("finished");
    elapsedTimer.stop();

    const wordGoal = state.get("pageWordGoal");
    const timeLimit =  state.get("pageTimeLimit");
    const elapsed = state.get("pageElapsed");
    const wordCount =  state.get("pageWordCount");
    const isCourse =  state.get("assignmentCourse");

    const isChallenge = Boolean(timeLimit);

    if (isChallenge) {
      var isSuccessful = timeLimit
        ? Boolean(elapsed < timeLimit) && (wordCount > wordGoal)
        : (wordCount > wordGoal);

      if ((timeLimit && !wordGoal) || (!timeLimit && wordGoal) ) isSuccessful = true;

      if (isSuccessful) _succeed();
      else _fail();
    }

    if (!write.started && timeLimit) {
      writeSheet.disable();
    }

    function _succeed(){

      writeHeader.forceOpen();
      
      const isCourse = state.get("assignmentCourse");
      if (isCourse) lock();

      const timeMessage = utils.msToString(timeLimit);

      const message = (timeLimit && !wordGoal) 
        ? `${t("You've written during")} ${timeMessage}`
        : `${t("You've reached")} ${wordGoal} ${t("كلمة")}!`;
        
        writeFlash.show({ duration: 3000, message: message});
    }

    function _fail(){
      writeHeader.el.classList.add("force");
      setTimeout(function(){writeHeader.el.classList.remove("force");}, 3000);
      lock();
      writeFlash.show({
        duration: 3000,
        message: t("The time is up!") 
      });
    }

    function lock(){
      writeSheet.spellcheck(false);
      writeSheet.disable();
    }

  }

  this.hydrate = hydrate;
  this.reset = reset;
  this.start = start;
  this.change = change;
  this.finish = finish;
  return this;
}
function WriteFlash(selector){

  const el = dom.qs(selector);
  const span = dom.qs("span", el) || dom.create({el: "span"}, el);

  function show(attr){
    if (attr.class) el.classList.add(attr.class);
    el.classList.remove("hidden");
    span.innerHTML = attr.message;
    writePage.add();
    // body flash
    if (attr.duration) {
      setTimeout(hide, attr.duration);
    }
  }

  function hide(){
    // todo hardcoded
    el.classList.remove("top");
    el.className = "flash hidden";
  }

  function clear(){
    span.innerHTML = "";
  }

  this.show = show;
  this.hide = hide;
}
function WriteTimer(elapsed, fn, fq) {
  
  var interval = null;
  if (!fq) fq = 500;

  function start(){
    if (interval) return;
    interval = setInterval(tick, fq);

    function tick(){
      if (!elapsed) elapsed = 0;
      elapsed += fq;
      if (fn) fn(elapsed);
    }
  }

  function reset(){
    stop();
    start();
  }

  function stop(){
    elapsed = 0;
    clearInterval(interval);
    interval = null;
  }

  function pause(){
    clearInterval(interval);
  }

  function set(s){
    elapsed = s;
  }

  this.reset = reset;
  this.pause = pause;
  this.stop = stop;
  this.start = start;
  this.set = set;
}
function WriteFullscreen(selector){

  const el = dom.qs(selector);
  const app = dom.qs("body");

  function detectFullscreen(){
    return document['fullscreenElement'] ||
           document['webkitFullscreenElement'] ||
           document['mozFullScreenElement'] ||
           document['msFullscreenElement'];
  }

  function fullscreenListener(){
    const isInFullscreen = detectFullscreen();
    app.classList.toggle("fullscreen", isInFullscreen);
  }

  /* todo DRY */

  /* View in fullscreen */
  function toggleFullscreen(e) {
    if (e) e.stopPropagation();
    writeHeader.hide();
    writePage.headerToggle(false);
    setTimeout(function(){ writePage.headerToggle(true); }, 1500);

    const docEl = document.documentElement;
    const isInFullscreen = detectFullscreen();
    if (!isInFullscreen){
      if (docEl.requestFullscreen)               docEl.requestFullscreen();
      else if (docEl['mozRequestFullScreen'])    docEl['mozRequestFullScreen']();
      else if (docEl['webkitRequestFullscreen']) docEl['webkitRequestFullscreen']();
      else if (docEl['msRequestFullscreen'])     docEl['msRequestFullscreen']();
    }

    else {
      if (document.exitFullscreen)               document.exitFullscreen();
      else if (document['webkitExitFullscreen']) document['webkitExitFullscreen']();
      else if (document['mozCancelFullScreen'])  document['mozCancelFullScreen']();
      else if (document['msExitFullscreen'])     document['msExitFullscreen']();
    }

    writeSheet.focus();

  }

  function enterFullscreen(){

    writeHeader.hide();
    writePage.headerToggle(false);
    setTimeout(function(){ writePage.headerToggle(true); }, 1500);

    const docEl = document.documentElement;
    const isInFullscreen = detectFullscreen();
    if (isInFullscreen) return false;
    
    if (docEl.requestFullscreen)               docEl.requestFullscreen();
    else if (docEl['mozRequestFullScreen'])    docEl['mozRequestFullScreen']();
    else if (docEl['webkitRequestFullscreen']) docEl['webkitRequestFullscreen']();
    else if (docEl['msRequestFullscreen'])     docEl['msRequestFullscreen']();
  
    writeSheet.focus();

  }

  function exitFullscreen(){

    writeHeader.hide();
    writePage.headerToggle(false);
    setTimeout(function(){ writePage.headerToggle(true); }, 1500);

    const docEl = document.documentElement;
    const isInFullscreen = detectFullscreen();
    if (!isInFullscreen) return false;
    
    if (document.exitFullscreen)               document.exitFullscreen();
    else if (document['webkitExitFullscreen']) document['webkitExitFullscreen']();
    else if (document['mozCancelFullScreen'])  document['mozCancelFullScreen']();
    else if (document['msExitFullscreen'])     document['msExitFullscreen']();
  
    writeSheet.focus();
  
  }

  el.addEventListener("click", toggleFullscreen);
  
  ["", "webkit", "moz", "ms"].forEach(prefix => {
    document.addEventListener(prefix+"fullscreenchange", fullscreenListener);
  });

  this.toggleFullscreen = toggleFullscreen;
  this.enterFullscreen = enterFullscreen;
  this.exitFullscreen = exitFullscreen;
  return this;

}
function WriteScroll(selector){
  
  const el = dom.qs(selector);
  const track = dom.create({class: "scroll-track"}, el);
  const box = dom.create({class: "scroll-box"}, track);

  function update(e){
    const scrollHeight = writeSheet.el.scrollHeight
    const scroll = e.target.scrollTop; 
    const height = (window.innerHeight / scrollHeight) * 100;
    const top = scroll / scrollHeight * window.innerHeight;
    box.style.top = top + "px";
    box.style.height = height + "%";
  }

  this.update = update;

}
function WriteScreen(selector){

  const el = dom.qs(selector);

  function show(attr){
    el.classList.add("visible");
  }

  function hide(){
    el.classList.remove("visible");
  }

  function setContent(html){
    dom.qs('.screen-content', el).innerHTML = html;
  }

  this.show = show;
  this.hide = hide;
  this.setContent = setContent;
}
function WriteSubmit(selector) {
  const el = dom.qs(selector);
  const tooltip = t("Write during") + " " + utils.msToMin(state.get("pageTimeLimit")) + " " + t("minutes");
  el.setAttribute("data-tooltip", tooltip);
  el.addEventListener("click", submit)

  function enable(){
    el.classList.remove("disabled");
    const hasTimeLimit = Boolean(state.get("pageTimeLimit"));
    dom.qs(".tryagain").classList.toggle("hidden", !hasTimeLimit);
    el.removeAttribute("data-tooltip");
  }

  function disable(){
    el.classList.add("disabled");
  }

  function toggle(bool){
    const hasTimeLimit = Boolean(bool);
    if (hasTimeLimit) disable();
    else enable();
  }

  function submit(){
    if (el.classList.contains("disabled")) return;
        
    if (document.body.classList.contains("failed")) {
      const confirmed = confirm(t("You ran out of time before completing the exercise. \n\n You'll have to start again."));
      if (!confirmed) return;
      return reset();
    }

    el.classList.add("disabled");

    const courseId = state.get("assignmentCourseId");
    const collection = writePage.assignmentCourse(courseId);

    const blankpageData = {
      pageAuthorEmail: state.get("pageAuthorEmail"),
      pageContent: state.get("pageContent"),
      pageDescription: state.get('pageDescription'),
      pageImageUrl: state.get('pageImageUrl'),
      pageDescriptionUrl: state.get('pageDescriptionUrl'),
      pagePlaceholder: state.get('pagePlaceholder'),
      pageSettingsLocked: state.get('pageSettingsLocked'),
      pageTimeLimit: state.get('pageTimeLimit'),
      pageTitle: state.get('pageTitle'),
      pageWordGoal: state.get('pageWordGoal'),
      pageCreationDate: Date.now(),
      assignmentCourseId: courseId,
      assignmentRedirectUrl: state.get('assignmentRedirectUrl')
    }

    const openInBlankPage =
      `<p><a href="https://blank.page/${collection}/${state.get("belongsToPage")}/${state.get("pageId")}">
        <strong>${t("Open in Blank Page")}<strong>
       </a></p>`;

    const circleData = {
      community_id: 2344,
      space_id: state.get("assignmentSpaceId"),
      body: marked(blankpageData.pageContent) + openInBlankPage,
      is_comments_enabled: true,
      is_liking_enabled: false,
      is_truncation_disabled: false,
      hide_meta_info: false,
      user_email: blankpageData.pageAuthorEmail
    }

    const sendToFirebase = new Promise((resolve) => {
      firebaseApp.writeToDB(blankpageData, state.get("belongsToPage"), resolve)
    });
    
    const sendToCircle = new Promise((resolve) => {
      if (!circleData.space_id) return resolve("success");
      ajax.post("/.netlify/functions/sendToCircle", circleData, resolve);
    });
    
    writeSheet.placeholder(t("Sending"));
    writeSheet.setContent("");
    const i = setInterval(() => writeSheet.placeholder(writeSheet.placeholder() + "."), 300);

    Promise.all([sendToFirebase, sendToCircle])
      .then( values => {
        // clear content, then redirect
        // write.reset();
        window.location = state.get("assignmentRedirectUrl") + "?referer=blankpage_assignment";
      })
      // TODO these resolves will not actually fail if there's an error
      // but I do not know how to implement at this time.
      .catch( error => {
        console.log(error)
        clearInterval(i);
        el.classList.remove("disabled");
        writeSheet.setContent(state.get("pageContent"));
        writeSheet.placeholder(state.get("pagePlaceholder"));
        window.alert(t("Something went wrong, please submit your assignment again"))
      })
  }

  function hide(){ el.classList.add("hidden")}
  function show(){ el.classList.remove("hidden")}

  this.toggle = toggle;
  this.disable = disable;
  this.enable = enable;
  this.hide = hide;
  this.show = show;
}
function WriteProgress(selector){

  const el = dom.qs(selector);

  const wordGoalProgress = dom.create({class: "progress-bar wordGoal"}, el);
  const timeLimitProgress = dom.create({class: "progress-bar timeLimit"}, el);

  function reset(){
    cancelTransitions();
    wordGoalProgress.removeAttribute("style");
    timeLimitProgress.removeAttribute("style");
  }

  function cancelTransitions(){
    el.classList.add("no-transition");
    setTimeout(function(){
      el.classList.remove("no-transition");
    }, 10)
  }

  function offsetBar(elapsed, total) {
    var pct = total === 0 ? -100 : Math.min(elapsed/total*100-100, 0);
    return "translate(" + pct + "%, 0)";
  }

  function parse(bar){
    if (!bar.style.transform) return 0;
    return parseFloat(bar.style.transform.split("%")[0].split("(")[1]);
  }

  function update(){
    const elapsed     = state.get("pageElapsed");
    const timeLimit   = state.get("pageTimeLimit");
    const words       = state.get("pageWordCount");
    const wordGoal    = state.get("pageWordGoal");
    const isChallenge = Boolean(timeLimit || wordGoal);
    const isBehind    = 
        !timeLimit ? false 
      : !wordGoal ? true 
      : Boolean(elapsed/timeLimit > words/wordGoal);
    el.classList.toggle("hide", !isChallenge);
    el.classList.toggle("alert", isBehind);
    timeLimitProgress.style.transform = offsetBar(elapsed, timeLimit);
    wordGoalProgress.style.transform = offsetBar(words, wordGoal);
  }

  function hide(){ el.classList.add("hide"); }
  function show(){ el.classList.remove("hide"); }

  this.reset = reset;
  this.update = update;
  this.hide = hide;
  this.show = show;
  this.cancelTransitions = cancelTransitions;
}
function WriteSelect(selector, attr){

  const el = dom.qs(selector);
  const triggerElement = dom.qs(attr.trigger);
  const triggerParent = triggerElement.parentNode;

  function render(options){
    el.innerHTML = "";
    options.forEach(optionGroup => {
      for (let title in optionGroup) {
        
        let optionsArray = optionGroup[title];
        let optionGroupEl = dom.create({
          class: "select-options"
        }, el);
        
        let optionTitleEl = dom.create({
          class: "select-title",
          html: title
        }, optionGroupEl);
        
        for (let option of optionsArray) {
          let optionItemEl = dom.create({
            class: "select-option",
            html: option.label,
            value: option.value,
            type: option.type
          }, optionGroupEl);

          optionItemEl.addEventListener("click", function(){
              const isTimeLimit = (option.type === "pageTimeLimit");
              const promptMessage = `${t('أدخل  ')} ${title.toLowerCase()} ${isTimeLimit ? t('في دقائق') : ""}`; 
              var value = option.value;
              // todo refactor
              if (option.value === null) {
                value = prompt(promptMessage, isTimeLimit ? utils.msToMin(state.get(option.type)) :state.get(option.type));

                while (isNaN(option.value) && option.value !== null) {
                  value = prompt(promptMessage, isTimeLimit ? utils.msToMin(state.get(option.type)) :state.get(option.type));
                }
                state.set(option.type, option.type === "pageTimeLimit" ? value *= 1000 * 60 : value);
              }

              else {
                state.set(option.type, value);
              }
          });


        }
      }
    })
  }

  render(attr.options);

  this.render = render;

  triggerElement.addEventListener("click", function(e){
    let wasOpen = triggerParent.classList.contains("open");
    if (!wasOpen) e.stopPropagation();
    else triggerParent.classList.remove("open");
    dom.qsa(".dropdown").forEach((dropdown) => dropdown.classList.remove("open"));
    triggerParent.classList.add("open");
    const selects = dom.qsa(".select");
    selects.forEach((select) => select.style.display = "none");
    el.style.display = "block";
  });
}

document.body.addEventListener("click", () => {
  dom.qsa(".select").forEach((select) => select.style.display = "none");
  dom.qsa(".dropdown").forEach((dropdown) => dropdown.classList.remove("open"));
  writeSheet.focus();
});

function WritePrompts(selector){
  const el = dom.qs(selector);
  if (!el) return;
  el.addEventListener("click", shuffle);

  function shuffle(){
    const prompts = state.get("pagePrompts");
    if (!prompts.length) return;

    var currentIndex = prompts.indexOf(state.get("pagePlaceholder"));
    if (currentIndex > prompts.length || currentIndex === -1) currentIndex = 0;
    else currentIndex += 1;

    const placeholder = prompts[currentIndex];
    state.set("pagePlaceholder", placeholder);
  }

  function show(){
    el.classList.remove("hidden")
  }

  function hide(){
    el.classList.add("hidden")
  }

  this.shuffle = shuffle;
  this.show = show;
  this.hide = hide;

}
var DarkMode = function(selector) {
  
  const el = dom.qs(selector);

  el.addEventListener("click", toggleDarkMode);

  function toggleDarkMode(e){
    e.preventDefault();
    var isDark = state.get("darkmode");
    state.set("darkmode", !isDark);
  }

  state.set("darkmode", state.get("darkmode"));

}


function WriteActions(selector) {

  dom.qsa("[data-action]").forEach(actionEl => {
    const action = actionEl.getAttribute("data-action");
    actionEl.addEventListener("click", function(e){
      // refactor
      e.stopPropagation();
      if (actionEl.classList.contains("disabled")) return false;
      writePage[action]();
    })
  });
  
}
window.addEventListener("keydown", function(e){
  
  var key = e.key;
  var command = navigator.platform.toUpperCase().indexOf('MAC')>=0 ? e.metaKey : e.ctrlKey;
  var shift = e.shiftKey;

  if (key === "s" && command) {
    e.preventDefault();
    utils.download();
  }

  if (key === "i" && command) {
    e.preventDefault();
    writePrompts.shuffle();
  }

  if (key === "o" && command) {
    e.preventDefault();
    utils.simulateClick(dom.gid("open"));
  }

  if (key === "e" && command) {
    e.preventDefault();
    const currentLanguage = state.get("language");
    state.set("language", currentLanguage === "en" ? "es" : "en");
  }

  if (key === "ArrowUp" && command) {
    e.preventDefault();
    writeFullscreen.enterFullscreen();
  }

  if (key === "ArrowDown" && command) {
    e.preventDefault();
    writeFullscreen.exitFullscreen();
  }

  // pressed character
  if (String.fromCharCode(event.keyCode).match(/(\w|\s)/g)) {
      // todo only when open
      aboutScreen.hide();
      if (!writePage.isBuilder && !writeReader.enabled) writePreview.hide();
  }
});

dom.qsa(".metaKey").forEach(function(metaKey){
  metaKey.innerHTML = utils.metaKey();
});
function WriteHeader(selector) {
  
  const el = dom.qs(selector);
  const icons = dom.qs(".header-icons");
  const pageTitleEl = el.querySelector(".page-title") || dom.create({class: "page-title"}, el);
  dom.create({el: "span", class: "loading"}, pageTitleEl);
  dom.create({el: "a", href: "#"}, pageTitleEl);

  function hide(){
    el.classList.remove("show");
    el.classList.add("hide");
    icons.classList.add("hide");
  }

  function show(){
    el.classList.add("show");
    el.classList.remove("hide");
    icons.classList.remove("hide");
  }

  function forceOpen(){
    el.classList.add("force");
    icons.classList.remove("hide");
    setTimeout(function(){
      el.classList.remove("force");
      hide();
    }, 3000);
  }

  function lock(bool) {
    dom.gid("humanized").innerHTML = utils.humanize();
    el.classList.toggle("locked", bool);
  }

  function title(link, type){
    dom.empty(pageTitleEl);
    pageTitleEl.appendChild(link);
  }

  this.hide = hide;
  this.show = show;
  this.forceOpen = forceOpen;
  this.lock = lock;
  this.el = el;
  this.title = title;
}
function WritePreview(selector){  
  const sheet = dom.gid("sheet");
  const el = dom.qs(selector);
  // todo refactor
  const button = dom.gid("markdown");
  if (!el) throw "Preview initialized without el"

   function toggle(){
     const visible = !el.classList.contains("hidden");
     button.classList.toggle("active", !visible);
     el.innerHTML = marked(state.get("pageContent"));
     sheet.classList.toggle("hidden", !visible);
     el.classList.toggle("hidden", visible);
     if (!visible) writeSheet.focus();
   }

   function show(content){
     button.classList.add("active");
     // todo rerenders on each show
     el.innerHTML = marked(content || state.get("pageContent"));
     sheet.classList.add("hidden");
     el.classList.remove("hidden");
   }

   function hide(){
     sheet.classList.remove("hidden");
     el.classList.add("hidden");
     button.classList.remove("active");
     sheet.focus();
   }

   this.toggle = toggle;
   this.show = show;
   this.hide = hide;
   return this;
}
var courses = [
  {
    id: 0,
    name: "Does not belong to course",
    collection: "etc",
    landingUrl: "https://cursos.blank.page",
    courseUrl: "https://members.blank.page/s/blank-page",
    planId: 0
  },
  {
    id: 1,
    name: "Espiral de la conciencia",
    collection: "espiral",
    landingUrl: "https://cursos.blank.page/c/espiral-de-la-conciencia",
    courseUrl: "https://members.blank.page/c/semana-1",
    planId: 80297
  },
    
  {
    id: 2,
    name: "Self-guided Course",
    collection: "self-guided",
    // El landing URL es el Storefront del curso
    landingUrl: "https://blank.page",
    courseUrl: "https://members.blank.page/c/test-topic-1/exercise-1",
    planId: 75121
  },

];


function Builder() {

// note: to bring up builder in localhost you can do it like this: http://localhost:64257/builder.

const url = location.protocol + '//' + location.host + location.pathname + "?";

const things = dao
  .filter(thing => !thing.private)
  .map(function(thing) {
    return {
       name: thing.name,
       value: state.get(thing.name),
       label: thing.label,
       type: thing.type
     }
   });

document.title = "Builder Blank Page";

state.set("pageId", utils.generateUID());

const panel = dom.create({ 
  class: "panel", 
  id: "panel", 
  html: ` <div class="container">
            <div class="panel-header">
             Configure
             <div class="action submit button" id="shortenUrl">Publish</div>
            </div>
            <div class="panel-body"></div>
           </div>`
 }, document.body);

var panelEl = panel.querySelector(".panel-body");
things.forEach(createField);

function getPlaceholder(key) {
  const dict = {
    "pageTitle": "Untitled Page",
    "pagePlaceholder": "Write now...",
    "pageDescription": "This page is about...",
    "pageWordGoal": "0",
    "pageTimeLimit": "0",
    "pageDescriptionUrl": "https://...",
    "pageImageUrl": "https://...",
    "pageAuthorEmail": "email@blank.page",
    "assignmentRedirectUrl": "https://...",
  }

  if (dict[key]) return dict[key]
  else return "";
}

function createField(thing){
  if (thing.name === "pageId") thing.value = utils.generateUID();
  const field = dom.create({class: `field active admin` }, panelEl);
  const label = dom.create({class: "field-label", html: thing.label}, field);
  const fieldValue = dom.create({class: "field-value"}, field);

  if (thing.name === "assignmentCourseId") createCoursesDropdown(thing, fieldValue)
  else if (thing.name === "assignmentSpaceId") createSpacesDropdown(thing, fieldValue)
  else if (thing.type === "boolean") createToggle(thing, fieldValue)
  else createTextfield(thing, fieldValue)

}

function createTextfield(thing, fieldValue) {
  const value = setValue(thing.name, thing.value);
  const textField = dom.create({
    el: "input",
    value: thing.value ? value : thing.value,
    class: "field-input",
    name: thing.name,
    type: thing.type === "number" ? "number" : "text",
    placeholder: getPlaceholder(thing.name)
  }, fieldValue);
 ["keyup", "click"].forEach((event) => {
   textField.addEventListener(event, render);
 });
}

function createToggle(thing, fieldValue){
  const value = setValue(thing.name, thing.value);
  const onOffSwitch = dom.create({class: "onoffswitch"}, fieldValue)
  const checkboxField = dom.create({
    el: "input",
    type: "checkbox",
    name: thing.name,
    id: "check-" + thing.name,
    value: value,
    class: "onoffswitch-checkbox field-input",
  }, onOffSwitch);
  if (value) checkboxField.setAttribute("checked", true);
  else checkboxField.removeAttribute("checked");
  const label = dom.create({
    el: "label",
    for:  "check-" + thing.name,
    class: "onoffswitch-label"
  }, onOffSwitch);
  checkboxField.addEventListener("change", function(e){
    const value = checkboxField.checked;
    checkboxField.setAttribute("value", value);
    render(e);
  });
  checkboxField.addEventListener("click", (e) =>{e.stopPropagation();})
}

function createCoursesDropdown(thing, fieldValue){
  const value = setValue(thing.name, thing.value);
  var selectField = dom.create({
    el: "select",
    class: "shortcut field-input",
    value: thing.value,
    name: thing.name
  }, fieldValue);
  courses.forEach((course, i) => {
    dom.create({ el: "option", value: course.id, html: course.name }, selectField)
  });
  selectField.selectedIndex = isNaN(thing.value) || thing.value > courses.length-1 ? 0 : parseInt(thing.value, 10);
  selectField.addEventListener("change", (e) =>{
    const selectedValue = selectField.children[selectField.selectedIndex].value;
    selectField.setAttribute("value", selectedValue === "0" ? "" : selectedValue);
    render(e);
  });
  selectField.addEventListener("click", (e) =>{e.stopPropagation();})
}

function createSpacesDropdown(thing, fieldValue){
  let spaces;
  const value = setValue(thing.name, thing.value);
  const selectField = dom.create({
    el: "select",
    class: "shortcut field-input",
    value: thing.value,
    name: thing.name,
    html: "<option>Loading...</option>"
  }, fieldValue);

  function callback(data){
    spaces = JSON.parse(data);
    const spaceGroups = spaces.reduce(function (r, a) {
        r[a.space_group_name] = r[a.space_group_name] || [];
        r[a.space_group_name].push(a);
        return r;
    }, Object.create(null));

    selectField.innerHTML = "<option value='0' selected>Does not belong to space</option>";
    selectField.addEventListener("click", (e) =>{e.stopPropagation();})

    const frag = document.createDocumentFragment();
    
    for (key in spaceGroups) {
      const optgroup = dom.create({el: "optgroup", label: key}, frag);
      spaceGroups[key].forEach(space => {
        dom.create({el: "option", value: space.id, html: space.name}, optgroup)
      });
    }
    selectField.appendChild(frag);

  }

  ajax.get("/.netlify/functions/spaces", {}, callback);

  selectField.selectedIndex = isNaN(thing.value) ? 0 : parseInt(thing.value, 10);

  selectField.addEventListener("change", (e) => {
    const spaceId = parseInt(selectField.value, 10);
    const space = spaces.find(space => space.id === spaceId);
    dom.qs("input[name=assignmentRedirectUrl]").value = space ? space.url : "";
    render(e);
  });
  
}

function setValue(name, value) {
  if (value === "false") value = false;
  if (value === "true") value = true;

  // fix urls without protocol
  if (name.indexOf("Url") != -1 && value && !value.startsWith("http") )
    value = "http://" + value;

  // convert ms to minutes
  if (name === "pageTimeLimit")
    value = value / 1000 / 60

  if (name === "pageWordGoal") {
    value = parseInt(value, 10);
  }

  return  value;
}

function getValue(name, value) {
  if (value === "false") value = false;
  return name === "pageTimeLimit" ? value * 1000 * 60 : value;
}

dom.gid("shortenUrl").addEventListener("mouseenter", function(){
   this.setAttribute("title", state.get("pageId"));
});

dom.gid("shortenUrl").addEventListener("click", savePage);

function daoToFirebase(things){
  var fbThings = things
    .map((thing) => {
      const isEmpty = getInputValue(thing.name) && getInputValue(thing.name) !== "" && getInputValue(thing.name) !== "false"
      const value = isEmpty ? getInputValue(thing.name) : false;
      return value || value===0 ? {[thing.name] : value} : false;
    })
    .filter(Boolean)
      .reduce(function(result, current) {
      return Object.assign(result, current);
    }, {});
  return fbThings
}

function savePage(){
  const data = daoToFirebase(things);
  if (JSON.stringify(data) === JSON.stringify({})) return alert("Page is not configured")
  firebaseApp.savePage(data);
}

function getInputValue(name) {
  var value = dom.qs(".field-input[name=" + name + "]").value;
  if (name.indexOf("Url") != -1)
    value = utils.fixUrl(value);
  return name === "pageTimeLimit" ? value * 60 * 1000 : value;
}

function render(e){
  if (e) e.stopPropagation();
  dom.qsa(".field-input").forEach(input => {
    const thing = things.find(thing => input.name === thing.name);
    if (!thing) return;
    var value = getValue(thing.name, input.value);
    state.set(thing.name, value);
  });
}

function set(key, value) {
  const el = dom.qs(`.panel input[name=${key}]`);
  if (el) el.value = setValue(key, value)
}

this.set = set;
this.render = render;

}
function WritePage(selector){
  
  const el = dom.qs(selector);

  function add(className) { el.classList.add(className); }
  function remove(className) { el.classList.remove(className);}
  function toggle(className, bool) { el.classList.toggle(className, bool); }

  function tick(s){
    const timeLimit = state.get("pageTimeLimit");
    if (!timeLimit || writeReader.enabled) return;
    writeCount.update();
    writeProgress.update();
    if (state.get("pageElapsed") > state.get("pageTimeLimit")) {
      writePage.finished = false;
      write.finish();
    }
  }

  function setPageDescription(value){
    setPageTitle()
  }

  function setPageDescriptionUrl(value){
    setPageTitle()
  }


  function setWordGoal(value) {
    const label = value > 0 ? value + " " + t('كلمة') : t('كلمة');
    dom.update("pageWordGoal",  label);
  }

  function setTimeLimit(value) {
    const secs = value/1000;
    var label = secs > 60 ? `${secs/60} ${t('دقائق')}` : `${secs} ${t('sec')}`;
    if (secs < 1)  label = t('Time')
    dom.update("pageTimeLimit", label);
  }

  function setWpmLimit(value) {
    const label = value > 0 ? value + " WPM" : "WPM";
    //dom.update("timeLimit", label);
  }

  function setPageTitle(title) {
    const pageTitle = state.get("pageTitle") || title;
    const pageDescription = state.get("pageDescription");
    const pageDescriptionUrl = state.get("pageDescriptionUrl");
    const pageImageUrl = state.get("pageImageUrl");

    if (pageTitle) {
      // need to create the links spearately even though they are the same thing
      const link1 = utils.pageDescriptionHelper(pageTitle, pageDescription, pageDescriptionUrl, pageImageUrl);
      const link2 = utils.pageDescriptionHelper(pageTitle, pageDescription, pageDescriptionUrl, pageImageUrl);
      document.title = pageTitle + " — " + "Blank Page";
      writeControls.title(link1, "empty");
      writeHeader.title(link2, "finished")
    }
  }

  function darkMode(bool){
    if (bool === undefined) return !document.body.classList.contains("inverted");
    else document.body.classList.toggle("inverted", bool);
  }

  // Safari triggers a mousemove upon pressing a modifier key, cancel these
  var hadMod = false;
  var modKeys = ["Alt", "AltGraph", "CapsLock", "Control", "Meta", "OS", "Shift"];

  function mousemove(e){
    const modKeyPressed = modKeys.find(key => event.getModifierState(key));
    if (modKeyPressed) hadMod = true;
    if (writeReader.enabled || modKeyPressed) return;
    if (hadMod) return hadMod = false;
    mouseTimer.stop();
    writeHeader.show(true);
    mouseTimer.start();
  }

  function headerToggle(bool=true) {
    if (bool) window.addEventListener("mousemove", mousemove)
    else window.removeEventListener("mousemove", mousemove)
  }

  function pageAuthorName(name) {
    // todo this is a hack because they use the same element
    if (!name) return
    var span = dom.qs("#pageAuthorName");
  span.innerHTML = "<span>" + name + "</span>";
  }

  function pageAuthorLocation(city, cc) {
    var location;
    if (!city && !cc) location = "Global";
    else if (!city) location = utils.countries[cc]
    else location = `${city}, ${utils.countries[cc]}`
  }

  function pagePrompts(prompts) {
    if (writeReader.enabled) return;
    if (!prompts || !prompts.length) writePrompts.hide();
    else writePrompts.show()
  }

  function assignmentRedirectUrl(){
  }

  function assignmentCourse(courseId){
    toggle("course", courseId);
    const course = courses.find(course => course.id === courseId) || courses[0];
    const collection = course.collection;
    return collection;
  }

  function setLanguage(lang){
    // todo refactor
    translateDom(lang);
    dom.body.setAttribute("lang", lang);
    writeCount.update();
    writeSheet.placeholder(t("اكتب الآن"));
    writeControls.lock(state.get("pageSettingsLocked"));
    if (writeReader.enabled) return true;
    timeSelect.render(utils.timeLimitDropdown())
    goalSelect.render(utils.wordGoalDropdown())
    setTimeLimit(state.get("pageTimeLimit"));
    setWordGoal(state.get("pageWordGoal"));
  }

  function disablePaste(bool){
    writeSheet.protected = !bool || false;
  }

  // actions
  function pasted(e){
    if (writeSheet.protected) {
      e.preventDefault();
      writeFlash.show({
        class: "paste-not-allowed",
        duration: 2000,
        message: t("Pasting is not allowed")
      });
    }
  }

  function about(){
    aboutScreen.show();
  }

  function mouseIdleTick(ms) {
    if (ms > 2000) writeHeader.hide();
  }

  function keyboardIdleTick(s) {
    // noop
  }

  function copy(){
    writeSheet.enable();
    writeSheet.select();
    document.execCommand('copy');
    writeSheet.deselect();
    writeFlash.show({
      class: "copied-to-clipboard",
      duration: 2000,
      message: t("Copied to clipboard")
    });
    // todo how to infer states from conditions and ensure they are synched?
    if (dom.qs("body").classList.contains("failed")) writeSheet.disable();
  }

  function copyurl(){
    var dummy = document.createElement('input');
    var url = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    writeFlash.show({
      class: "copied-to-clipboard",
      duration: 2000,
      message: t("Copied link to clipboard") 
    });
  }

  function share(){
    const text = state.get("pageContent");
    const email = prompt("أرسل بالبريد الإلكتروني إلى:", "example@mail.com");
    const url = `mailto:${email}?subject=${encodeURIComponent('Written in blank.page')}&body=${encodeURIComponent(text)}`;
    if (email) window.open(url);
  }

  function comment(){
    writeComments.show();
  }

  function restart(){
     const confirmed = confirm(t("هل أنت واثق؟ سيتم حذف كل النص."));
     if (!confirmed) return;
     write.reset();
  }

  this.copy = copy;
  this.pasted = pasted;
  this.copyurl = copyurl;
  this.share = share;
  this.restart = restart;
  this.isBuilder = window.location.href.indexOf("builder.") > -1 ? true : false;
  this.setLanguage = setLanguage;
  this.add = add;
  this.remove = remove;
  this.tick = tick;
  this.mouseIdleTick = mouseIdleTick;
  this.keyboardIdleTick = keyboardIdleTick;
  this.toggle = toggle;
  this.about = about;
  this.disablePaste = disablePaste;
  this.setPageDescription = setPageDescription;
  this.setTimeLimit = setTimeLimit;
  this.setWordGoal = setWordGoal;
  this.setPageTitle = setPageTitle;
  this.darkMode = darkMode;
  this.headerToggle = headerToggle;
  this.pageAuthorName = pageAuthorName;
  this.pageAuthorLocation = pageAuthorLocation;
  this.pagePrompts = pagePrompts;
  this.assignmentRedirectUrl = assignmentRedirectUrl;
  this.assignmentCourse = assignmentCourse;
  
  this.comment = comment;
  this.download = utils.download;
  this.markdown = writePreview.toggle;
  this.closeLandingScreen = () => state.set("visited", true);
  this.builder = ()=> dom.qs("html").classList.toggle("panel-open", writePage.isBuilder);
  this.translate = ()=> state.set("language", state.get("language") === "en" ? "es" : "en");
    this.isBuilder = window.location.href.indexOf("builder.") > -1;


}
function WriteModal(selector){

  const el = dom.qs(selector);
  if (!el) return false;

  el.addEventListener("click", (e)=> {
    e.stopPropagation();
    hide();
  });

  function show(){
   el.classList.remove("hidden");
  }

  function hide(){
    el.classList.add("hidden");
  }

  this.show = show;
  this.hide = hide;

}
function WriteReader() {
  function enable(content){
    this.enabled = true;
    writePreview.show(content);
    writePage.pageAuthorName(state.get("pageAuthorName") || state.get("pageAuthorEmail"));
    writeProgress.hide();
    writePage.add("reader");
    writeSubmit.hide();
  }
  this.enabled = false;
  this.enable = enable;
  return this;
}
function Member(collection) {
  // note memberspace only works in production
  window.MemberSpace = {subdomain: "blankpage1", domain: "login.blank.page"};
  const script = dom.create({
    el: "script", 
    src: "https://cdn.memberspace.com/scripts/widgets.js"
  }, document.head);


  script.onload = function() {
    MemberSpace.onReady = MemberSpace.onReady || [];
    MemberSpace.onReady.push(function(args) {
      const member = args.member;
      const course = courses.find(course => course.collection === collection) || courses[0];
      if (member && !writeReader.enabled) {
        const isEnrolled = member.planIds.indexOf(course.planId) !== -1 || course.planId === 0;
        if (!isEnrolled) {
          alert(t("Log in or sign up to view this exercise"));
          window.location.href = course.landingUrl;
        }
        else {
          state.set("pageAuthorName", member.name);
          state.set("pageAuthorEmail", member.email);
        }
        
      }
      else if (!member) {
        alert(t("Log in or sign up to view this exercise"));
        window.location.href = course.landingUrl;
      }
    });
  }

}
let firebaseApp = new FirebaseApp(firebaseConfig);
let state = new State();
let write = new Write();
let writeSheet = new WriteSheet("#sheet");
let writeCount = new WriteCount("#counter");
let writeActions = new WriteActions();
let writeFlash = new WriteFlash("#flash");
let writeFullscreen = new WriteFullscreen("#fullscreen");
let aboutScreen = new WriteScreen("#aboutScreen");
let writePrompts = new WritePrompts("#prompts");
let writeHeader = new WriteHeader("#finished");
let writeControls = new WriteHeader("#empty");
let writePreview = new WritePreview("#preview");
let writePage = new WritePage("body");
let writeSubmit = new WriteSubmit("#submit");
let writeReader = new WriteReader();
startApp();

marked.setOptions({
  breaks: true,
  gfm: true
})

function startApp(){
  // serviceWorker caches removed because current service worker was loading stale versions
  // even with a network connection
  if(navigator.serviceWorker && window.location.pathname === "/") {
    //navigator.serviceWorker.register('serviceworker.js', {scope: '/'});
    navigator.serviceWorker
      .getRegistrations()
      .then( function(registrations) { for(let registration of registrations) { registration.unregister(); } }); 
  }

  writePage.headerToggle(true);
  let openFile = dom.gid("open").addEventListener("change", utils.openFile);
  const darkMode = new DarkMode("#contrast");

  //todo refactor
  const pathName = window.location.pathname !== "/" ? window.location.pathname.split("/")[1] : false;
  const course = courses.find(course => course.collection === pathName) || false;
  const pageId = course ? window.location.pathname.split("/")[2] : false;
  if (course) state.set("belongsToPage", pageId)
  const exerciseId = course ? window.location.pathname.split("/")[3] : false;
  if (course && pageId) dom.qs("body").classList.add("loading");

  const afterSignIn = function(){
    const member = new Member(course.collection);
    if (pageId && !exerciseId) firebaseApp.getDataFromDB(course.collection, pageId);
    else if (exerciseId) firebaseApp.getNestedDataFromDB(course.collection, state.get("belongsToPage"), exerciseId);
  }

  if (pageId) firebaseApp.signIn(afterSignIn);

  // no timers for reader
  if (writeReader.enabled) return write.hydrate(state.data);

  // EXITED if was reader ->
  if (writePage.isBuilder) {
    window.writeBuilder = new Builder();
    firebaseApp.signIn();
  }

  window.writeProgress = new WriteProgress("#progress");


  window.elapsedTimer = new WriteTimer(state.get("pageElapsed"), function(elapsed){
    state.set("pageElapsed", elapsed);
  }, 500);

  window.mouseTimer = new WriteTimer(0, function(elapsed){
    state.set("mouseIdle", elapsed);
  }, 1000);

  window.keyboardTimer = new WriteTimer(0, function(elapsed){
    state.set("keyboardIdle", elapsed);
  }, 500);

  mouseTimer.start();
  keyboardTimer.start();

  let wordGoalDropdown = dom.create({
    class: `dropdown wordGoal`,
    html: `
      <span class="caret" data-type="pageWordGoal">
        ${t("word", state.get("pageWordGoal") > 0)};
      </span>
    `
  }, dom.gid("controls"));

  dom.create({id: "goalSelect", class: "select"}, wordGoalDropdown);

  let timeLimitDropdown = dom.create({
    class: "dropdown timeLimit",
    html: `
      <span class="caret" data-type="pageTimeLimit">
        ${ state.get("pageTimeLimit")  > 0 ? utils.msToMin(state.get("pageTimeLimit"))  + " دقيقة" : t("زمن")}
      </span>
    `
  }, dom.gid("controls"));

  dom.create({id: "timeSelect", class: "select"}, timeLimitDropdown);

  window.timeSelect = new WriteSelect("#timeSelect", {
    trigger: "[data-type=pageTimeLimit]",
    options: utils.timeLimitDropdown()
  });

  window.goalSelect =  new WriteSelect("#goalSelect", {
    trigger: "[data-type=pageWordGoal]",
    options: utils.wordGoalDropdown()
  });

  write.hydrate(state.data)
  writePage.setLanguage(state.get("language") || utils.language());
}