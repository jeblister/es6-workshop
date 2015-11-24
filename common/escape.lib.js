// HTML Escape helper utility
export function escape(s) {   return replace.call(s, reEscape, fnEscape); }

export function unescape(s) {  return replace.call(s, reUnescape, fnUnescape);   }

const reEscape = /[&<>'"]/g,
reUnescape = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,
oEscape = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    },
    oUnescape = {
      '&amp;': '&',
      '&#38;': '&',
      '&lt;': '<',
      '&#60;': '<',
      '&gt;': '>',
      '&#62;': '>',
      '&apos;': "'",
      '&#39;': "'",
      '&quot;': '"',
      '&#34;': '"'
    };
function fnEscape(m) {
      return oEscape[m];
    }
function fnUnescape(m) {
      return oUnescape[m];
    }
const replace = String.prototype.replace;
