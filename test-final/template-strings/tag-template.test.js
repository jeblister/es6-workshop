import {expect} from 'chai';
import * as util from '../../common/escape.lib';
describe(`Tagged Templates`, () => {
  // you likely wont often use tagging, but it can be handy!
  describe(`tagging`, () => {
    it(`should call the tagging function`, () => {
      const noun = 'World';
      const emotion = 'happy';
      const result = tagIt`Hello ${noun}! Are you feeling ${emotion} today?`;
      expect(result).to.equal('Hello super-cool World! Are you feeling really happy today?');

      function tagIt(literalString, ...interpolatedParts) {
        const firstPart = `${literalString[0]}super-cool ${interpolatedParts[0]}`;
        const lastPart = `${literalString[1]}really ${interpolatedParts[1]}${literalString[2]}`;
        return `${firstPart}${lastPart}`;
      }
    });
  });
  describe(`Tagged template function`, () => {
    it(`should html escape`, () => {
      // Tagged template function
      function html(pieces) {
        var result = pieces[0];
        var substitutions = [].slice.call(arguments, 1);
        for (var i = 0; i < substitutions.length; ++i) {
          result += util.escape(substitutions[i]) + pieces[i + 1];
        }

        return result;
      }

      let username = "Domenic Denicola";
      let tag = "< is a fun tag";
      //  console.log(html`<b>${username} says</b>: "${tag}"`);

      expect(html`<b>${username} says</b>: "${tag}"`).to.equal('<b>Domenic Denicola says</b>: "&lt; is a fun tag"')
    });

    it.skip(`should safeHtml escape`, () => {
      function safehtml(pieces) {
        let result = pieces[0];
        let substitutions = [].slice.call(arguments, 1);
        for (let i = 0; i < substitutions.length; ++i) {
          result += util.unescape(substitutions[i]) + pieces[i + 1];
        }

        return result;
      }
      let url="http://google.com", message="Like it", color="red", query="one";
      let result=safehtml`<a href="${url}?q=${query}" onclick="alert('${message}')" style="color: ${color}">${message}</a>`;
      console.log(result);
      expect(result).to.be.equal(<a href="http://google.com?q=one" onclick="alert('Like it')" style="color: red">Like it</a>);

    });

    it(`should jsx escape`, () => {
      function jsx(pieces) {
        let result = pieces[0];
        let substitutions = [].slice.call(arguments, 1);
        for (let i = 0; i < substitutions.length; ++i) {
          result += util.escape(substitutions[i]) + pieces[i + 1];
        }

        return result;
      }
      // Embedded HTML/XML
      let url="http://google.com", text="like so";
      let result=jsx`<a href="${url}">${text}</a>`; // becomes React.DOM.a({ href: url }, text)

      expect(result).to.be.equal('<a href="http://google.com">like so</a>');

    });
  });
});
