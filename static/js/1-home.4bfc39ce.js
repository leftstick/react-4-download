(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./docs/1_home.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),c=t("./node_modules/axios/index.js"),l=t.n(c),p=t("./node_modules/downloadjs/download.js"),s=t.n(p);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,n){return!n||"object"!==u(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,n){return(A=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var g=function(e){function n(){var e,t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=d(this,(e=f(n)).call.apply(e,[this].concat(r))))._fireOriginalClick=function(e){var n=t.props.children.props.onClick;n&&n(e)},t._onClick=function(e){var n=t.props,o=n.url,r=n.fileMIMEType;e&&e.preventDefault&&e.preventDefault(),t._fireOriginalClick(e),l()({url:b(o)?o:o(),method:"GET",responseType:"blob"}).then(function(e){s()(e.data||e,function(e){if(!e)return"";var n=e.split("/").pop();if(!n)return"";return n.split("?")[0]||""}(o),r)})},t}var t,o,a;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&A(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props.children,n=r.a.Children.only(e);return r.a.cloneElement(n,{onClick:this._onClick})}}])&&m(t.prototype,o),a&&m(t,a),n}();g.defaultProps={responseType:"blob",headers:{},fileMIMEType:"application/octet-stream"};var y=g;function b(e){return"[object String]"===Object.prototype.toString.call(e)}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function w(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e,n){return!n||"object"!==h(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,n){return(B=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}g.__docgenInfo={description:"",methods:[{name:"_fireOriginalClick",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"_onClick",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null}],displayName:"RcDownload",props:{responseType:{defaultValue:{value:"'blob'",computed:!1},type:{name:"string"},required:!1,description:""},headers:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},fileMIMEType:{defaultValue:{value:"'application/octet-stream'",computed:!1},type:{name:"string"},required:!1,description:""},children:{type:{name:"any"},required:!1,description:""},url:{type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:""},fileName:{type:{name:"string"},required:!1,description:""}}},t.d(n,"default",function(){return O});var O=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=M(this,D(n).call(this,e))).layout=null,t}var t,o,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&B(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=E(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"why-react-component-download"}},"Why react-component-download"),r.a.createElement(a.MDXTag,{name:"p",components:n},"You might have requirement to download something programmatically."),r.a.createElement(a.MDXTag,{name:"p",components:n},r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/rndme/download"}},"downloadjs")," is a good library, but the imperative API seems not the best friend of ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"react.js"),". That's why you are here."),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"installation"}},"Installation"),r.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"yarn"}},"yarn"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"yarn add react-component-download\n")),r.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"npm"}},"npm"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"npm install react-component-download\n")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"usage"}},"Usage"),r.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzMVyG1UZUCgShOzdE12k9OABHIf0BXtTVzSQuUFXNdo7Q1dhgHYTQfHkPD5QAARgIgRAGVBAWFGAiIDVBdFRY5TgAL2cAhEmxdhuFI9YogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnGSABYlPYAA2JSVPWMAQIAMR9aBEhk_hnEORFHUwdgAAUhH4JYGJ-OB1MRYya1MmhnAgXjLnYABGbTVPkcFOOobiAEE5hE9hIzI8gbCgdBw3YeROREsQUpjGR2FRISYG4YBD34wTsXkbda2AdLoCy4IADJWvGRJ5koZomsy7LuEG-UwFCTie1Qdp2AAfg2Zrw0jPKrj6lrUGimspBkat3zMWESMwMAwigKYFvywr1sSlca0TIMpRwMzMhSa8CHq2s61FaDYPgztV1evooD4EBCFue5HlgMACFRWJtlPNl3gGSQzSlC1Pg3GgrU-hD0EkGY3igWIvSwH1yX_AgsFEEAftrLpvLimBLC68r-A8eCPH4SmLEgWAADkfUZkBaFRHBSfJ9mjWgGB9QafVz3p-YAdoMnsagVw0DZq7axe166w8cIIlQMRLAEZJNi6KQdZuahNZ3d6YJGODMc1qQboIO6Hqe-qpAurazG_EA0PISRVGwACtAoED9AYLCSNcLABjsY18JjuP2Kjh1XMoGZZfgaj2gHDOLUE-Y4BTyD2GdnPEdfYiHROO2vpyBP5Vr-3O00dizHIZW4DsG2McQ7BQPQHutRwddqFdYB1lRaJYn7Qcs7sUTJ_V5bwyudPM4ZuAcGRVTfoEKB1_nrecHH3UwCzyMAG0N4XnBURnFIllvk-Rs4gBdTk96p-BnTgOmGZHwznfB-BRv4WE2J2DI9wXLHyLqfDw6gtgEHAWLbmvMgGb3gaA2cqDOYSyljLQBsDgEnxwYUGsa0p4EBnuQY4MADqhCOhvReYl1bUz_gA-YMlmaUA8H5V6kDpwwOAEoVc-DJbSyzjJWY5JYgz2oJIU4tBLQPwlDadYVCawAH1IBdF1P0KS8R7B4x2Mlbo3ACrL1elxKYaUMorRyslCYtgcB5zuKuWxs1Mr2HiFADwkpdiiVXnQNxg5t7UBMVDVcEBmiRmWr4hIASdh5WsVrBJfjknbEjDAd8r01oWC0RYbRkTTFBJhKdNJFgvFkT-ksCRhCs5ONEi47e7i4AxLid0dqMIwkwFYPobUDDDoEFSZTf8A5-mDOGUwggC1VwFNrK0nAuiID6MMWgYxZScnbXVknSgcBUqUz-lcWwAlH6Rj-nlGaf12BXD-gtVBFhjwTCcDJAA4jLARWsOG02kfKXh_CFmciFpsVAkZfmoH_pUymzd64Qt_rTHA6BoiuHYAAH3RZORFUKYBLDPGZcWPNjyXIPl_NBBCpEMzybWXKmiYoWCnFGMZK84p2O8Y4qiLTCRhIzh01lUKpjLWSs7UeDjwynzgokeJ4q6A0uqWy9gLoRj2AcSKkendx6XnovoGVzUlhVNrKUqGVxlklNQFEnYwLVxdAIH0cwyrVXNXpatGKu0a4zKOmXD6ddMYxTflKJio4CCEvQSSq5bCLCxJSgAQgjYa219r5TsUKesLx3k8YEAAOp4mcF3fEok_r3zkXM9okg3xpsVV3AgzkIBbAsSVEtOaJh5v8HgNxGd5k1mjZGGN1ba31pZa9RNAhzDtBTTldYI7zD9rrYiYtmanxTTfFfWS78MVYvHWYLRAbxqcDgOcgopKoBDuxXa0d7BdSIOQbyiIhcSaUEPbOD4fjj15UGqJdoV8-FIKlOwJ9KR37sTWr7Hy2xXBpBDtQICuhQIGHAmk_gqBeb8CuPwIExIqjeAyBaX8xN3LrH4AMgQ-RqCofYPwWSOAqOyQIzWfg5RyD9BmONcj_B4olSwrAGEhM_z0PJJQRIeY8gFGxeaZGxZMOggEHRiw_AoiqyQBRlQEYNAdJAN_BjMB5gRk4nW9TVxDX8ErmxkAAA9MK-kcAAA4cAAFZZO1n4PsgzymzNUbCrZ2jGnVz8HcQXLepmLN2ZwAAdhwAAJkc3JkAcLMaaCC2FHA2kwvReU5XdGRBEtWdsw5imlDt2-yk94D41BIApCg6gGD4cwIgEnvzei5IsiofQ2aWgFoMuyP4PIBQ8h5BAA",__position:0,__code:'<RcDownload\n  url="https://leftstick.github.io/react-component-download/public/example.txt"\n  responseType="blob"\n  fileName="test.txt"\n  fileMIMEType="text/plain"\n>\n  <button>Try here</button>\n</RcDownload>',__scope:{props:this?this.props:t,RcDownload:y}},r.a.createElement(y,{url:"https://leftstick.github.io/react-component-download/public/example.txt",responseType:"blob",fileName:"test.txt",fileMIMEType:"text/plain"},r.a.createElement("button",null,"Try here"))),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),r.a.createElement(i.f,{of:y}))}}])&&w(t.prototype,o),c&&w(t,c),n}();O.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);