/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/es6 */ "./node_modules/core-js/es6/index.js");

__webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");

__webpack_require__(/*! core-js/fn/array/flat-map */ "./node_modules/core-js/fn/array/flat-map.js");

__webpack_require__(/*! core-js/fn/string/pad-start */ "./node_modules/core-js/fn/string/pad-start.js");

__webpack_require__(/*! core-js/fn/string/pad-end */ "./node_modules/core-js/fn/string/pad-end.js");

__webpack_require__(/*! core-js/fn/string/trim-start */ "./node_modules/core-js/fn/string/trim-start.js");

__webpack_require__(/*! core-js/fn/string/trim-end */ "./node_modules/core-js/fn/string/trim-end.js");

__webpack_require__(/*! core-js/fn/symbol/async-iterator */ "./node_modules/core-js/fn/symbol/async-iterator.js");

__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ "./node_modules/core-js/fn/object/get-own-property-descriptors.js");

__webpack_require__(/*! core-js/fn/object/values */ "./node_modules/core-js/fn/object/values.js");

__webpack_require__(/*! core-js/fn/object/entries */ "./node_modules/core-js/fn/object/entries.js");

__webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");

__webpack_require__(/*! core-js/web */ "./node_modules/core-js/web/index.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  (function accordions() {
    var buttons = document.querySelectorAll(".bonus-content-info__btn");
    var accordions = document.querySelectorAll(".bonus-accordion");
    buttons.forEach(function (button, index) {
      var icon = button.querySelector(".bonus-content-info__img-check");
      var text = button.querySelector("span");
      console.log(text);
      button.addEventListener("click", function () {
        icon.classList.toggle("active");
        accordions[index].classList.toggle("active");
        if (text.textContent == "More info") {
          text.textContent = "Hide info";
        } else {
          text.textContent = "More info";
        }
      });
    });
  })();
  (function hiddenRowTable() {
    var buttons = document.querySelectorAll(".rates-table__btn");
    buttons.forEach(function (btn) {
      var icon = btn.querySelector(".rates-table__check");
      btn.addEventListener("click", function () {
        icon.classList.toggle("active");
        btn.parentElement.parentElement.nextElementSibling.classList.toggle("show");
      });
    });
  })();
});
2;

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ../modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ../modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ../modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ../modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ../modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ../modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ../modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ../modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ../modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ../modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ../modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ../modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ../modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ../modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ../modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ../modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ../modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ../modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ../modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ../modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ../modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ../modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ../modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ../modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ../modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ../modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ../modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ../modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ../modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ../modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ../modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ../modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ../modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ../modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ../modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ../modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ../modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ../modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ../modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ../modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ../modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ../modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ../modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ../modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ../modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ../modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ../modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ../modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ../modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ../modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ../modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ../modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ../modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ../modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ../modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ../modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ../modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ../modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ../modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ../modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ../modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ../modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ../modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ../modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ../modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ../modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ../modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ../modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ../modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ../modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ../modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ../modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ../modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ../modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ../modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ../modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ../modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ../modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ../modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ../modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ../modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ../modules/es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
__webpack_require__(/*! ../modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ../modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ../modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ../modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ../modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ../modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ../modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ../modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ../modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ../modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ../modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/core-js/fn/array/flat-map.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.flatMap;


/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.includes;


/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.entries;


/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ../../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise["finally"];


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padEnd;


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padStart;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimRight;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimLeft;


/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
module.exports = (__webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js").f)('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es7.global */ "./node_modules/core-js/library/modules/es7.global.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").global;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.G, { global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey);
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set);
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/***/ ((module) => {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = (__webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f);
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect);
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseFloat = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f)(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
  var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = (__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod) = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var _isFinite = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite);

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return (__webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY);
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer);
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !(__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV), {
  DataView: (__webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView)
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */
main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline;
  -webkit-text-decoration: underline dotted currentColor;
          text-decoration: underline dotted currentColor; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none;
}

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type=checkbox],
[type=radio] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type=search] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none;
}`, "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA,EAAA,MAAA;EACA,8BAAA,EAAA,MAAA;AAFF;;AAKA;+EAAA;AAGA;;EAAA;AAIA;EACE,SAAA;AAJF;;AAOA;;EAAA;AAIA;EACE,cAAA;AALF;;AAQA;;;EAAA;AAKA;EACE,cAAA;EACA,gBAAA;AANF;;AASA;+EAAA;AAGA;;;EAAA;AAKA;EACE,uBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;AARF;;AAWA;;;EAAA;AAKA;EACE,iCAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;AATF;;AAYA;+EAAA;AAGA;;EAAA;AAIA;EACE,6BAAA;AAXF;;AAcA;;;EAAA;AAKA;EACE,mBAAA,EAAA,MAAA;EACA,0BAAA,EAAA,MAAA;EACA,0BAAA;EAAA,sDAAA;UAAA,8CAAA,EAAA,MAAA;AAZF;;AAeA;;EAAA;AAIA;;EAEE,mBAAA;AAbF;;AAgBA;;;EAAA;AAKA;;;EAGE,iCAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;AAdF;;AAiBA;;EAAA;AAIA;EACE,cAAA;AAfF;;AAkBA;;;EAAA;AAKA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;AAhBF;;AAmBA;EACE,eAAA;AAhBF;;AAmBA;EACE,WAAA;AAhBF;;AAmBA;+EAAA;AAGA;;EAAA;AAIA;EACE,kBAAA;AAlBF;;AAqBA;+EAAA;AAGA;;;EAAA;AAKA;;;;;EAKE,oBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;AApBF;;AAuBA;;;EAAA;AAKA;QACQ,MAAA;EACN,iBAAA;AArBF;;AAwBA;;;EAAA;AAKA;SACS,MAAA;EACP,oBAAA;AAtBF;;AAyBA;;EAAA;AAIA;;;;EAIE,0BAAA;AAvBF;;AA0BA;;EAAA;AAIA;;;;EAIE,kBAAA;EACA,UAAA;AAxBF;;AA2BA;;EAAA;AAIA;;;;EAIE,8BAAA;AAzBF;;AA4BA;;EAAA;AAIA;EACE,8BAAA;AA1BF;;AA6BA;;;;;EAAA;AAOA;EACE,sBAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;AA3BF;;AA8BA;;EAAA;AAIA;EACE,wBAAA;AA5BF;;AA+BA;;EAAA;AAIA;EACE,cAAA;AA7BF;;AAgCA;;;EAAA;AAKA;;EAEE,sBAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;AA9BF;;AAiCA;;EAAA;AAIA;;EAEE,YAAA;AA/BF;;AAkCA;;;EAAA;AAKA;EACE,6BAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;AAhCF;;AAmCA;;EAAA;AAIA;EACE,wBAAA;AAjCF;;AAoCA;;;EAAA;AAKA;EACE,0BAAA,EAAA,MAAA;EACA,aAAA,EAAA,MAAA;AAlCF;;AAqCA;+EAAA;AAGA;;EAAA;AAIA;EACE,cAAA;AApCF;;AAuCA;;EAAA;AAIA;EACE,kBAAA;AArCF;;AAwCA;+EAAA;AAGA;;EAAA;AAIA;EACE,aAAA;AAvCF;;AA0CA;;EAAA;AAIA;EACE,aAAA;AAxCF","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat/AnyConv.com__Montserrat-Medium.woff */ "./src/fonts/Montserrat/AnyConv.com__Montserrat-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat/AnyConv.com__Montserrat-Medium.woff2 */ "./src/fonts/Montserrat/AnyConv.com__Montserrat-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat/AnyConv.com__Montserrat-SemiBold.woff */ "./src/fonts/Montserrat/AnyConv.com__Montserrat-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat/AnyConv.com__Montserrat-SemiBold.woff2 */ "./src/fonts/Montserrat/AnyConv.com__Montserrat-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Rubik/AnyConv.com__Rubik-Regular.woff */ "./src/fonts/Rubik/AnyConv.com__Rubik-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Rubik/AnyConv.com__Rubik-Regular.woff2 */ "./src/fonts/Rubik/AnyConv.com__Rubik-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Rubik/AnyConv.com__Rubik-Medium.woff */ "./src/fonts/Rubik/AnyConv.com__Rubik-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Rubik/AnyConv.com__Rubik-Medium.woff2 */ "./src/fonts/Rubik/AnyConv.com__Rubik-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Rubik/AnyConv.com__Rubik-Bold.woff */ "./src/fonts/Rubik/AnyConv.com__Rubik-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Rubik/AnyConv.com__Rubik-Bold.woff2 */ "./src/fonts/Rubik/AnyConv.com__Rubik-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../image/pari-match_white.svg */ "./src/image/pari-match_white.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Montserrat";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");
  font-weight: 500;
}
@font-face {
  font-family: "Montserrat";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff2");
  font-weight: 600;
}
@font-face {
  font-family: "Rubik";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Rubik";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("woff2");
  font-weight: 500;
}
@font-face {
  font-family: "Rubik";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format("woff2");
  font-weight: 700;
}
* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

button {
  border: none;
  cursor: pointer;
}

input {
  outline: none;
  border: none;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #72768d;
  background-color: #ffffff;
}

.container {
  max-width: 1320px;
  width: 90%;
  margin: 0 auto;
}
@media (max-width: 500px) {
  .container {
    width: calc(100% - 20px);
  }
}
.container--small {
  max-width: 994px;
  width: 90%;
  margin: 0 auto;
}

.bonus {
  padding-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.bonus__container {
  border-radius: 15px;
  background-color: #f7f8fd;
  position: relative;
}
.bonus__signboard {
  position: absolute;
  top: -5px;
  left: 0;
  right: 0;
  margin: auto;
}

.bonus-signboard {
  width: 221px;
  display: flex;
  align-items: center;
}
@media (max-width: 600px) {
  .bonus-signboard {
    width: 181px;
  }
}
@media (max-width: 500px) {
  .bonus-signboard {
    left: auto;
    right: 56px;
  }
}
@media (max-width: 400px) {
  .bonus-signboard {
    width: 141px;
    right: 64px;
  }
}
.bonus-signboard__text {
  position: absolute;
  width: 87px;
  left: 0;
  right: 0;
  margin: auto;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}
@media (max-width: 600px) {
  .bonus-signboard__text {
    font-size: 12px;
    text-align: center;
  }
}
@media (max-width: 400px) {
  .bonus-signboard__text {
    font-size: 10px;
  }
}
.bonus-signboard__img {
  max-width: 221px;
  height: auto;
}
@media (max-width: 600px) {
  .bonus-signboard__img {
    max-width: 181px;
  }
}
@media (max-width: 400px) {
  .bonus-signboard__img {
    max-width: 141px;
  }
}

.bonus-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 16px;
  border-bottom: 2px solid #ebecf5;
}
@media (max-width: 700px) {
  .bonus-header {
    padding: 20px 15px;
  }
}
@media (max-width: 630px) {
  .bonus-header {
    padding: 15px 10px;
  }
}
.bonus-header__company {
  display: flex;
  align-items: center;
}
.bonus-header__assessment {
  max-width: 136px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bonus-header__number {
  margin-right: 14px;
  font-size: 18px;
  font-weight: 500;
  background: linear-gradient(180deg, #ffc736 0%, #ff630c 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@media (max-width: 600px) {
  .bonus-header__number {
    font-size: 14px;
    margin-right: 10px;
  }
}
.bonus-header__img-fire {
  max-width: 25px;
  margin-right: 1px;
}
@media (max-width: 600px) {
  .bonus-header__img-fire {
    max-width: 17px;
  }
}
.bonus-header__text {
  color: #313446;
  font-size: 18px;
  font-weight: 500;
}
@media (max-width: 600px) {
  .bonus-header__text {
    font-size: 14px;
  }
}
.bonus-header__assessment {
  display: flex;
  align-items: flex-end;
}
.bonus-header__numbers {
  color: #313446;
  line-height: 1;
  font-size: 17px;
  font-weight: 500;
  margin-right: 10px;
}
@media (max-width: 600px) {
  .bonus-header__numbers {
    font-size: 14px;
  }
}
.bonus-header__block {
  display: flex;
}
.bonus-header__img-star {
  max-width: 20px;
}
@media (max-width: 610px) {
  .bonus-header__img-star {
    display: none;
  }
}
.bonus-header__img-star--media {
  display: none;
}
@media (max-width: 610px) {
  .bonus-header__img-star--media {
    display: block;
  }
}

.bonus-content {
  padding: 16px;
  display: flex;
}
@media (max-width: 1468px) {
  .bonus-content {
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }
}
@media (max-width: 1269px) {
  .bonus-content {
    gap: 16px;
  }
}
@media (max-width: 500px) {
  .bonus-content {
    padding: 10px;
  }
}
.bonus-content__case {
  display: flex;
  gap: 18px;
  margin-right: 33px;
}
@media (max-width: 1468px) {
  .bonus-content__case {
    margin-right: 0;
  }
}
@media (max-width: 630px) {
  .bonus-content__case {
    align-items: flex-start;
  }
}
@media (max-width: 600px) {
  .bonus-content__case {
    padding-bottom: 10px;
    border-bottom: 2px solid #ebecf5;
  }
}
@media (max-width: 350px) {
  .bonus-content__case {
    gap: 9px;
  }
}
.bonus-content__logo {
  display: block;
  max-width: 148px;
  padding: 42px 18px;
  border-radius: 15px;
  background: linear-gradient(148deg, #313446 19.06%, #070b1f 97.93%);
}
@media (max-width: 630px) {
  .bonus-content__logo {
    padding: 28px 18px;
  }
}
@media (max-width: 600px) {
  .bonus-content__logo {
    padding: 21px 10px;
  }
}
@media (max-width: 350px) {
  .bonus-content__logo {
    padding: 29px 10px;
  }
}
.bonus-content__logo-img {
  max-width: 112px;
}
@media (max-width: 700px) {
  .bonus-content__logo-img {
    max-width: 80px;
  }
}
@media (max-width: 610px) {
  .bonus-content__logo-img {
    max-width: 68px;
  }
}
@media (max-width: 428px) {
  .bonus-content__logo-img {
    max-width: 53px;
  }
}
.bonus-content__bonus {
  max-width: 284px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 630px) {
  .bonus-content__bonus {
    gap: 4px;
    max-width: none;
  }
}
@media (max-width: 610px) {
  .bonus-content__bonus {
    max-width: none;
  }
}
.bonus-content__head {
  display: flex;
  align-items: center;
  gap: 6px;
}
@media (max-width: 610px) {
  .bonus-content__head {
    display: none;
  }
}
.bonus-content__img-present {
  max-width: 17px;
}
.bonus-content__title {
  color: #72768d;
  font-size: 14px;
  font-weight: 500;
}
.bonus-content__subtitle {
  color: #313446;
  font-size: 24px;
  font-weight: 700;
}
@media (max-width: 700px) {
  .bonus-content__subtitle {
    font-size: 20px;
  }
}
@media (max-width: 630px) {
  .bonus-content__subtitle {
    font-size: 18px;
  }
}
.bonus-content__text {
  line-height: 20px;
}
@media (max-width: 600px) {
  .bonus-content__text {
    line-height: normal;
  }
}
@media (max-width: 500px) {
  .bonus-content__text {
    font-size: 12px;
  }
}
.bonus-content__offers {
  max-width: 186px;
  margin-right: 94px;
}
@media (max-width: 1468px) {
  .bonus-content__offers {
    margin-right: 0;
  }
}
@media (max-width: 758px) {
  .bonus-content__offers {
    max-width: none;
    width: 100%;
  }
}
.bonus-content__info {
  margin-right: 74px;
}
@media (max-width: 1468px) {
  .bonus-content__info {
    margin-right: 0;
  }
}
.bonus-content__list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
@media (max-width: 758px) {
  .bonus-content__list {
    flex-direction: row;
    justify-content: space-around;
  }
}
@media (max-width: 600px) {
  .bonus-content__list {
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
@media (max-width: 400px) {
  .bonus-content__list {
    justify-content: flex-start;
  }
}
.bonus-content__item {
  display: flex;
  align-items: center;
  gap: 10px;
}
@media (max-width: 595px) {
  .bonus-content__item {
    width: 45%;
  }
}
@media (max-width: 400px) {
  .bonus-content__item {
    width: auto;
  }
}
@media (max-width: 500px) {
  .bonus-content__item:nth-child(3) {
    order: -2;
  }
  .bonus-content__item:nth-child(4) {
    order: -1;
  }
  .bonus-content__item:nth-child(1) {
    order: -1;
  }
}
.bonus-content__img-rocket {
  max-width: 17px;
}
.bonus-content__buttons {
  max-width: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 1269px) {
  .bonus-content__buttons {
    gap: 20px;
    margin: 0 auto;
    flex-direction: row;
    max-width: none;
  }
}
@media (max-width: 500px) {
  .bonus-content__buttons {
    gap: 10px;
  }
}
@media (max-width: 408px) {
  .bonus-content__buttons {
    flex-direction: column;
  }
}
.bonus-content__btn {
  color: #fff;
  width: 100%;
  border-radius: 10px;
  background-color: #53af1b;
  padding: 18px;
}
@media (max-width: 700px) {
  .bonus-content__btn {
    padding: 15px 48px;
  }
}
@media (max-width: 428px) {
  .bonus-content__btn {
    font-size: 12px;
  }
}
.bonus-content__btn--grey {
  background-color: #ebecf5;
  color: #6f728c;
}

.bonus-content-info {
  max-width: 272px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 1078px) {
  .bonus-content-info {
    order: 1;
    margin: auto;
  }
}
@media (max-width: 600px) {
  .bonus-content-info {
    max-width: none;
  }
}
.bonus-content-info__img {
  max-width: 33px;
}
.bonus-content-info__btn {
  color: #72768d;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  background-color: inherit;
}
@media (max-width: 428px) {
  .bonus-content-info__btn {
    font-size: 13px;
  }
}
.bonus-content-info__btn::before, .bonus-content-info__btn::after {
  content: "";
  width: 86px;
  height: 2px;
  flex-shrink: 0;
  background-color: #a6aac3;
}
@media (max-width: 600px) {
  .bonus-content-info__btn::before, .bonus-content-info__btn::after {
    width: 40%;
  }
}
@media (max-width: 550px) {
  .bonus-content-info__btn::before, .bonus-content-info__btn::after {
    width: 37%;
  }
}
@media (max-width: 400px) {
  .bonus-content-info__btn::before, .bonus-content-info__btn::after {
    width: 35%;
  }
}
@media (max-width: 370px) {
  .bonus-content-info__btn::before, .bonus-content-info__btn::after {
    width: 33%;
  }
}
.bonus-content-info__img-check {
  max-width: 15px;
  transition: 0.3s;
}
.bonus-content-info__img-check.active {
  -webkit-transform: rotate(-180deg);
          transform: rotate(-180deg);
}

.bonus-content-payments {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
@media (max-width: 1078px) {
  .bonus-content-payments {
    display: none;
  }
}
.bonus-content-payments--moby {
  display: none;
}
@media (max-width: 1078px) {
  .bonus-content-payments--moby {
    display: flex;
    width: 100%;
  }
}
@media (max-width: 500px) {
  .bonus-content-payments--moby {
    gap: 14px;
  }
}
@media (max-width: 427px) {
  .bonus-content-payments--moby {
    gap: 10px;
  }
}
.bonus-content-payments__item {
  width: 53px;
  height: 34px;
  border-radius: 5px;
  background-color: rgba(235, 236, 245, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 407px) {
  .bonus-content-payments__item {
    width: 38px;
    height: 23px;
  }
}
@media (max-width: 660px) {
  .bonus-content-payments__item--moby {
    display: none;
  }
}
.bonus-content-payments__img {
  max-width: calc(100% - 20px);
}

.bonus-accordion {
  padding: 0px 15px;
  background-color: #f1f3fd;
  display: flex;
  border-radius: 0px 0px 15px 15px;
  -webkit-transform: scaleY(0);
          transform: scaleY(0);
  opacity: 0;
  transition: 0.5s;
  -webkit-transform-origin: top center;
          transform-origin: top center;
  height: 0;
  overflow: hidden;
}
@media (max-width: 1078px) {
  .bonus-accordion {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }
}
@media (max-width: 500px) {
  .bonus-accordion {
    padding: 10px !important;
  }
}
@media (max-width: 407px) {
  .bonus-accordion {
    gap: 10px;
  }
}
.bonus-accordion.active {
  padding: 15px;
  -webkit-transform: scaleY(1);
          transform: scaleY(1);
  opacity: 1;
  height: auto;
}
.bonus-accordion__text {
  max-width: 446px;
  line-height: 25px;
  margin-right: 20px;
}
@media (max-width: 1078px) {
  .bonus-accordion__text {
    margin-right: 0;
    max-width: none;
    width: 100%;
    text-align: center;
  }
}
@media (max-width: 600px) {
  .bonus-accordion__text {
    line-height: 20px;
  }
}
@media (max-width: 500px) {
  .bonus-accordion__text {
    text-align: left;
    font-size: 12px;
  }
}
@media (max-width: 407px) {
  .bonus-accordion__text {
    font-size: 10px;
    line-height: 15px;
  }
}
.bonus-accordion__list {
  border-radius: 15px;
  border: 2px solid #ebecf5;
  padding: 15px;
  max-width: 404px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
}
@media (max-width: 947px) {
  .bonus-accordion__list {
    margin: auto;
  }
}
@media (max-width: 500px) {
  .bonus-accordion__list {
    max-width: none;
    padding: 10px;
  }
}
.bonus-accordion__list--margin {
  margin-right: 16px;
}
@media (max-width: 1078px) {
  .bonus-accordion__list--margin {
    margin-right: 0;
  }
}
@media (max-width: 947px) {
  .bonus-accordion__list--margin {
    margin: auto;
  }
}
@media (max-width: 600px) {
  .bonus-accordion__list--margin {
    gap: 10px;
  }
}
.bonus-accordion__item {
  display: flex;
  align-items: center;
  gap: 5px;
}
@media (max-width: 500px) {
  .bonus-accordion__item {
    font-size: 12px;
  }
}
.bonus-accordion__img {
  max-width: 25px;
}
@media (max-width: 500px) {
  .bonus-accordion__img {
    max-width: 15px;
  }
}

.pari-match {
  padding-top: 16px;
}
.pari-match__container {
  display: grid;
  grid-template-columns: 9fr 3fr;
  grid-gap: 15px;
}
@media (max-width: 1254px) {
  .pari-match__container {
    grid-template-columns: none;
  }
}

.pari-match-body {
  background: linear-gradient(148deg, #313446 19.06%, #070b1f 97.93%);
  border-radius: 15px;
  display: flex;
}
@media (max-width: 950px) {
  .pari-match-body {
    max-width: 800px;
    margin: 0 auto;
  }
}
.pari-match-body__left {
  max-width: 662px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
@media (max-width: 1395px) {
  .pari-match-body__left {
    max-width: none;
    width: 70%;
  }
}
@media (max-width: 950px) {
  .pari-match-body__left {
    width: 100%;
  }
}
@media (max-width: 526px) {
  .pari-match-body__left {
    gap: 15px;
  }
}
@media (max-width: 450px) {
  .pari-match-body__left {
    padding: 10px;
  }
}
.pari-match-body__head {
  max-width: 662px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}
@media (max-width: 1254px) {
  .pari-match-body__head {
    justify-content: flex-start;
  }
}
@media (max-width: 526px) {
  .pari-match-body__head {
    gap: 10px;
  }
}
.pari-match-body__photo {
  padding: 41px;
  border-radius: 15px;
  background: linear-gradient(163deg, #313446 -13.44%, #070b1f 150.61%);
  max-width: 217px;
}
@media (max-width: 640px) {
  .pari-match-body__photo {
    padding: 34px 14px;
  }
}
@media (max-width: 526px) {
  .pari-match-body__photo {
    padding: 34px 14px;
  }
}
@media (max-width: 400px) {
  .pari-match-body__photo {
    padding: 28px 11px;
  }
}
.pari-match-body__photo-img {
  max-width: 130px;
}
@media (max-width: 526px) {
  .pari-match-body__photo-img {
    max-width: 89px;
  }
}
@media (max-width: 400px) {
  .pari-match-body__photo-img {
    max-width: 52px;
  }
}
.pari-match-body__header {
  max-width: 385px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.pari-match-body__title {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
}
@media (max-width: 526px) {
  .pari-match-body__title {
    font-size: 16px;
  }
}
@media (max-width: 400px) {
  .pari-match-body__title {
    font-size: 14px;
  }
}
.pari-match-body__grade {
  max-width: 112px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}
@media (max-width: 640px) {
  .pari-match-body__grade {
    order: 1;
    margin: 8px 57px 15px 0;
  }
}
@media (max-width: 400px) {
  .pari-match-body__grade {
    margin: 10px 0 0;
  }
}
.pari-match-body__number {
  color: #fff;
  font-weight: 500;
}
.pari-match-body__block-stars {
  max-width: 85px;
  display: flex;
  justify-content: space-between;
}
.pari-match-body__img-star {
  max-width: 17px;
}
.pari-match-body__entertainment {
  width: 100%;
  margin-top: 15px;
}
@media (max-width: 640px) {
  .pari-match-body__entertainment {
    margin-top: 5px;
  }
}
@media (max-width: 526px) {
  .pari-match-body__entertainment {
    font-size: 12px;
  }
}
@media (max-width: 400px) {
  .pari-match-body__entertainment {
    font-size: 10px;
  }
}
.pari-match-body__points {
  display: flex;
  gap: 40px;
}
@media (max-width: 1294px) {
  .pari-match-body__points {
    gap: 18px;
  }
}
@media (max-width: 950px) {
  .pari-match-body__points {
    justify-content: space-between;
  }
}
.pari-match-body__list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
@media (max-width: 640px) {
  .pari-match-body__list--moby {
    display: none;
  }
}
.pari-match-body__item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.pari-match-body__item--moby {
  display: none;
}
@media (max-width: 640px) {
  .pari-match-body__item--moby {
    display: flex;
  }
}
.pari-match-body__img-rocket {
  max-width: 17px;
}
@media (max-width: 526px) {
  .pari-match-body__img-rocket {
    max-width: 14px;
  }
}
.pari-match-body__desc {
  color: rgba(255, 255, 255, 0.9);
}
@media (max-width: 526px) {
  .pari-match-body__desc {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
  }
}
.pari-match-body__right {
  border-radius: 15px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_10___}) top center no-repeat, linear-gradient(148deg, #313446 19.06%, #070b1f 97.93%);
  padding: 114px 20px 20px;
}
@media (max-width: 1395px) {
  .pari-match-body__right {
    max-width: none;
    width: 30%;
  }
}
@media (max-width: 1340px) {
  .pari-match-body__right {
    width: 34%;
  }
}
@media (max-width: 950px) {
  .pari-match-body__right {
    display: none;
  }
}
.pari-match-body__right--moby {
  display: none;
}
@media (max-width: 950px) {
  .pari-match-body__right--moby {
    display: block;
    border-radius: 15px;
    background: linear-gradient(148deg, #313446 19.06%, #070b1f 97.93%);
    padding: 10px;
  }
}
.pari-match-body__inner {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pari-match-body__block {
  max-width: 127px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
@media (max-width: 526px) {
  .pari-match-body__block {
    max-width: none;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }
}
.pari-match-body__image {
  max-width: 17px;
}
@media (max-width: 640px) {
  .pari-match-body__image {
    max-width: 14px;
  }
}
.pari-match-body__gratters {
  font-weight: 500;
  background: linear-gradient(180deg, #f90 0%, #ff630c 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@media (max-width: 526px) {
  .pari-match-body__gratters {
    font-size: 12px;
  }
}
.pari-match-body__bonus {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}
@media (max-width: 526px) {
  .pari-match-body__bonus {
    font-size: 18px;
  }
}
.pari-match-body__description {
  font-size: 12px;
  line-height: 20px;
}
.pari-match-body__btn {
  border-radius: 10px;
  background: #53af1b;
  color: #fff;
  padding: 17px 0;
  text-align: center;
  cursor: pointer;
}
@media (max-width: 526px) {
  .pari-match-body__btn {
    font-size: 12px;
    padding: 15px 0;
  }
}

.pari-match-body-case {
  max-width: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
@media (max-width: 640px) {
  .pari-match-body-case {
    order: 2;
    flex-direction: row-reverse;
  }
}
@media (max-width: 427px) {
  .pari-match-body-case {
    display: none;
  }
}
.pari-match-body-case--moby {
  display: none;
}
@media (max-width: 427px) {
  .pari-match-body-case--moby {
    display: flex;
    order: 0;
  }
}
.pari-match-body-case__item {
  max-width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.pari-match-body-case__img {
  max-width: 20px;
}

.pari-match-body-payment {
  display: flex;
  gap: 10px;
}
@media (max-width: 1254px) {
  .pari-match-body-payment {
    justify-content: space-between;
  }
}
@media (max-width: 640px) {
  .pari-match-body-payment {
    flex-wrap: wrap;
  }
}
@media (max-width: 427px) {
  .pari-match-body-payment {
    gap: 4px;
  }
}
.pari-match-body-payment__item {
  border-radius: 5px;
  background: rgba(49, 54, 74, 0.55);
  width: 69px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 1366px) {
  .pari-match-body-payment__item {
    width: 58px;
  }
}
@media (max-width: 526px) {
  .pari-match-body-payment__item {
    width: 53px;
  }
}
@media (max-width: 427px) {
  .pari-match-body-payment__item {
    width: 43px;
    height: 27px;
  }
}
.pari-match-body-payment__item--moby {
  display: none;
}
@media (max-width: 640px) {
  .pari-match-body-payment__item--moby {
    display: flex;
  }
}
.pari-match-body-payment__img {
  max-width: 44px;
}
@media (max-width: 526px) {
  .pari-match-body-payment__img {
    max-width: calc(100% - 18px);
  }
}

.pari-match-info {
  background-color: #f7f8fd;
  border-radius: 15px;
  padding: 20px;
}
@media (max-width: 450px) {
  .pari-match-info {
    padding: 10px;
  }
}
.pari-match-info__list {
  display: flex;
  flex-direction: column;
  gap: 26px;
}
@media (max-width: 600px) {
  .pari-match-info__list {
    gap: 22px;
  }
}
.pari-match-info__item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.pari-match-info__img {
  max-width: 23px;
}
@media (max-width: 600px) {
  .pari-match-info__img {
    max-width: 31px;
  }
}
@media (max-width: 400px) {
  .pari-match-info__img {
    max-width: 27px;
  }
}
.pari-match-info__block {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
@media (max-width: 600px) {
  .pari-match-info__block {
    gap: 2px;
  }
}
.pari-match-info__title {
  color: #000;
  font-weight: 500;
}
@media (max-width: 600px) {
  .pari-match-info__title {
    font-size: 12px;
  }
}
@media (max-width: 400px) {
  .pari-match-info__text {
    font-size: 13px;
  }
}

.pari-match-comment {
  background-color: #f7f8fd;
  border-radius: 15px;
  padding: 20px;
}
@media (max-width: 400px) {
  .pari-match-comment {
    padding: 10px;
  }
}
.pari-match-comment__inner {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pari-match-comment__header {
  max-width: 167px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
@media (max-width: 500px) {
  .pari-match-comment__header {
    justify-content: flex-start;
  }
}
.pari-match-comment__block {
  display: flex;
  flex-direction: column;
}
.pari-match-comment__img {
  max-width: 31px;
}
.pari-match-comment__title {
  color: #313446;
  font-size: 18px;
  font-weight: 500;
}
@media (max-width: 600px) {
  .pari-match-comment__title {
    font-size: 14px;
  }
}
@media (max-width: 400px) {
  .pari-match-comment__title {
    font-size: 10px;
  }
}
.pari-match-comment__text {
  color: #313446;
  font-size: 12px;
}
@media (max-width: 500px) {
  .pari-match-comment__text {
    font-size: 10px;
  }
}
.pari-match-comment__desc {
  color: #7a7e9b;
  font-size: 16px;
  line-height: 25px;
}
@media (max-width: 600px) {
  .pari-match-comment__desc {
    font-size: 12px;
    line-height: 20px;
  }
}
@media (max-width: 400px) {
  .pari-match-comment__desc {
    line-height: 17px;
  }
}

@media (max-width: 530px) {
  .rates__container {
    overflow: auto;
  }
  .rates__container::-webkit-scrollbar {
    height: 4px;
    background-color: #f5f5f5;
  }
  .rates__container::-webkit-scrollbar-thumb {
    background-color: #005283;
    border-radius: 9px;
  }
}

.rates-table {
  background-color: #f5f5f5;
  border-radius: 6px;
  width: 100%;
  font-weight: 500;
  line-height: 20px;
  color: #000;
  border-spacing: 8px 4px;
  border-collapse: collapse;
  font-family: "Montserrat", serif;
}
@media (max-width: 530px) {
  .rates-table {
    width: 477px;
    margin-bottom: 20px;
  }
}
.rates-table__tr {
  background-color: #ffffff;
  color: #000;
  border-bottom: 1px solid #f5f5f5;
}
.rates-table__tr--primary {
  background-color: #005283;
  color: #fff;
  border-bottom: 1px solid #3c647b;
}
.rates-table__tr--head {
  background-color: transparent;
}
.rates-table__td-team {
  width: 610px;
  padding: 10px 0 10px 10px;
}
@media (max-width: 400px) {
  .rates-table__td-team {
    width: 140px;
  }
}
.rates-table__td-points {
  width: 28px;
  text-align: center;
}
.rates-table__td-points--indent {
  padding-right: 6px;
}
.rates-table__td-statistics {
  padding: 0 0 0 30px;
  width: 160px;
}
.rates-table__td-statistics--head {
  padding: 0 0 0 40px;
}
.rates-table__td-item {
  display: flex;
  align-items: center;
  padding: 10px 0 10px 10px;
}
.rates-table__img {
  max-width: 24px;
  margin-right: 10px;
}
.rates-table__link {
  margin-right: 50px;
  text-decoration: underline;
}
@media (max-width: 700px) {
  .rates-table__link {
    margin-right: 20px;
  }
}
@media (max-width: 400px) {
  .rates-table__link {
    display: none;
  }
}
.rates-table__link--short {
  display: none;
}
@media (max-width: 400px) {
  .rates-table__link--short {
    display: block;
    margin-right: 30px;
  }
}
.rates-table__check {
  max-width: 14px;
  transition: 0.3s;
}
.rates-table__check.active {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}
.rates-table__results {
  display: flex;
  align-items: center;
  gap: 4px;
}
.rates-table__hidden {
  display: none;
}
.rates-table__hidden.show {
  display: table-row;
}
.rates-table__btn {
  cursor: pointer;
  background: transparent;
  padding: 0;
}

.rates-table-circle {
  width: 20px;
  height: 20px;
  border-radius: 50px;
  text-align: center;
  font-size: 12px;
  color: #fff;
}
.rates-table-circle--underline {
  position: relative;
}
.rates-table-circle--underline::after {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  border-radius: 4px;
  background-color: #ffffff;
  left: 0;
  bottom: -5px;
}
.rates-table-circle--red {
  background-color: #db0202;
}
.rates-table-circle--greeen {
  background-color: #4ec757;
}
.rates-table-circle--grey {
  background-color: #9b9b9b;
}

.rates-internal-table {
  width: 100%;
  border-collapse: collapse;
}
.rates-internal-table__tr {
  background-color: #deecfa;
  color: #000;
}
.rates-internal-table__td-first {
  padding: 10px 0 10px 10px;
  width: 340px;
}
@media (max-width: 850px) {
  .rates-internal-table__td-first {
    width: 230px;
  }
}
@media (max-width: 700px) {
  .rates-internal-table__td-first {
    width: 200px;
  }
}
@media (max-width: 700px) {
  .rates-internal-table__td-first {
    width: 220px;
  }
}
@media (max-width: 640px) {
  .rates-internal-table__td-first {
    width: 160px;
  }
}
@media (max-width: 550px) {
  .rates-internal-table__td-first {
    width: 130px;
  }
}
.rates-internal-table__td-left {
  padding: 10px 0 10px 10px;
}
.rates-internal-table__td-right {
  width: 310px;
}
@media (max-width: 700px) {
  .rates-internal-table__td-right {
    width: 250px;
  }
}
.rates-internal-table__block {
  display: flex;
  align-items: center;
  gap: 8px;
}
.rates-internal-table__img {
  max-width: 20px;
}
.rates-internal-table__desc {
  text-decoration: underline;
}
.rates-internal-table__link {
  text-decoration: underline;
}
@media (max-width: 640px) {
  .rates-internal-table__link {
    display: none;
  }
}
.rates-internal-table__link--moby {
  display: none;
}
@media (max-width: 640px) {
  .rates-internal-table__link--moby {
    display: block;
  }
}`, "",{"version":3,"sources":["webpack://./src/style/_fonts.scss","webpack://./src/style/style.scss","webpack://./src/style/_common.scss","webpack://./src/style/_vars.scss","webpack://./src/style/_bonus.scss","webpack://./src/style/_pari-match.scss","webpack://./src/style/_rates.scss"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,oHAAA;EAIA,gBAAA;ACFF;ADKA;EACE,yBAAA;EACA,oHAAA;EAIA,gBAAA;ACNF;ADSA;EACE,oBAAA;EACA,oHAAA;EAEA,gBAAA;ACRF;ADWA;EACE,oBAAA;EACA,oHAAA;EAEA,gBAAA;ACVF;ADaA;EACE,oBAAA;EACA,oHAAA;EAEA,gBAAA;ACZF;ACxBA;EACE,sBAAA;AD0BF;;ACvBA;;;;;;EAME,SAAA;AD0BF;;ACvBA;EACE,qBAAA;EACA,cAAA;AD0BF;;ACvBA;EACE,SAAA;EACA,UAAA;AD0BF;;ACvBA;EACE,gBAAA;AD0BF;;ACvBA;EACE,YAAA;EACA,eAAA;AD0BF;;ACvBA;EACE,aAAA;EACA,YAAA;AD0BF;;ACvBA;EACE,uBAAA;AD0BF;;ACvBA;EACE,gCAAA;EACA,eAAA;EACA,gBAAA;EACA,cCfW;EDgBX,yBC7CgB;AFuElB;;ACvBA;EACE,iBAAA;EACA,UAAA;EACA,cAAA;AD0BF;ACzBE;EAJF;IAKI,wBAAA;ED4BF;AACF;AC3BE;EACE,gBAAA;EACA,UAAA;EACA,cAAA;AD6BJ;;AGxFA;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AH2FF;AG1FE;EACE,mBAAA;EACA,yBDLiB;ECMjB,kBAAA;AH4FJ;AG1FE;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;AH4FJ;;AGxFA;EACE,YAAA;EACA,aAAA;EACA,mBAAA;AH2FF;AG1FE;EAJF;IAKI,YAAA;EH6FF;AACF;AG5FE;EAPF;IAQI,UAAA;IACA,WAAA;EH+FF;AACF;AG9FE;EAXF;IAYI,YAAA;IACA,WAAA;EHiGF;AACF;AGhGE;EACE,kBAAA;EACA,WAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,WDbU;ECcV,eAAA;EACA,gBAAA;AHkGJ;AGjGI;EATF;IAUI,eAAA;IACA,kBAAA;EHoGJ;AACF;AGnGI;EAbF;IAcI,eAAA;EHsGJ;AACF;AGpGE;EACE,gBAAA;EACA,YAAA;AHsGJ;AGrGI;EAHF;IAII,gBAAA;EHwGJ;AACF;AGvGI;EANF;IAOI,gBAAA;EH0GJ;AACF;;AGtGA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;EACA,gCAAA;AHyGF;AGxGE;EANF;IAOI,kBAAA;EH2GF;AACF;AG1GE;EATF;IAUI,kBAAA;EH6GF;AACF;AG5GE;EACE,aAAA;EACA,mBAAA;AH8GJ;AG5GE;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AH8GJ;AG5GE;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,6DDrDe;ECsDf,qBAAA;EACA,6BAAA;EACA,oCAAA;AH8GJ;AG7GI;EARF;IASI,eAAA;IACA,kBAAA;EHgHJ;AACF;AG9GE;EACE,eAAA;EACA,iBAAA;AHgHJ;AG/GI;EAHF;IAII,eAAA;EHkHJ;AACF;AGhHE;EACE,cD1EU;EC2EV,eAAA;EACA,gBAAA;AHkHJ;AGjHI;EAJF;IAKI,eAAA;EHoHJ;AACF;AGlHE;EACE,aAAA;EACA,qBAAA;AHoHJ;AGlHE;EACE,cDtFU;ECuFV,cAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AHoHJ;AGnHI;EANF;IAOI,eAAA;EHsHJ;AACF;AGpHE;EACE,aAAA;AHsHJ;AGpHE;EACE,eAAA;AHsHJ;AGrHI;EAFF;IAGI,aAAA;EHwHJ;AACF;AGvHI;EACE,aAAA;AHyHN;AGxHM;EAFF;IAGI,cAAA;EH2HN;AACF;;AGtHA;EACE,aAAA;EACA,aAAA;AHyHF;AGxHE;EAHF;IAII,8BAAA;IACA,eAAA;IACA,QAAA;EH2HF;AACF;AG1HE;EARF;IASI,SAAA;EH6HF;AACF;AG5HE;EAXF;IAYI,aAAA;EH+HF;AACF;AG9HE;EACE,aAAA;EACA,SAAA;EACA,kBAAA;AHgIJ;AG/HI;EAJF;IAKI,eAAA;EHkIJ;AACF;AGjII;EAPF;IAQI,uBAAA;EHoIJ;AACF;AGnII;EAVF;IAWI,oBAAA;IACA,gCAAA;EHsIJ;AACF;AGrII;EAdF;IAeI,QAAA;EHwIJ;AACF;AGtIE;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,mEDtKc;AF8SlB;AGvII;EANF;IAOI,kBAAA;EH0IJ;AACF;AGzII;EATF;IAUI,kBAAA;EH4IJ;AACF;AG3II;EAZF;IAaI,kBAAA;EH8IJ;AACF;AG5IE;EACE,gBAAA;AH8IJ;AG7II;EAFF;IAGI,eAAA;EHgJJ;AACF;AG/II;EALF;IAMI,eAAA;EHkJJ;AACF;AGjJI;EARF;IASI,eAAA;EHoJJ;AACF;AGlJE;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AHoJJ;AGnJI;EALF;IAMI,QAAA;IACA,eAAA;EHsJJ;AACF;AGrJI;EATF;IAUI,eAAA;EHwJJ;AACF;AGtJE;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AHwJJ;AGvJI;EAJF;IAKI,aAAA;EH0JJ;AACF;AGxJE;EACE,eAAA;AH0JJ;AGxJE;EACE,cDvMS;ECwMT,eAAA;EACA,gBAAA;AH0JJ;AGxJE;EACE,cD1MU;EC2MV,eAAA;EACA,gBAAA;AH0JJ;AGzJI;EAJF;IAKI,eAAA;EH4JJ;AACF;AG3JI;EAPF;IAQI,eAAA;EH8JJ;AACF;AG5JE;EACE,iBAAA;AH8JJ;AG7JI;EAFF;IAGI,mBAAA;EHgKJ;AACF;AG/JI;EALF;IAMI,eAAA;EHkKJ;AACF;AGhKE;EACE,gBAAA;EACA,kBAAA;AHkKJ;AGjKI;EAHF;IAII,eAAA;EHoKJ;AACF;AGnKI;EANF;IAOI,eAAA;IACA,WAAA;EHsKJ;AACF;AGpKE;EACE,kBAAA;AHsKJ;AGrKI;EAFF;IAGI,eAAA;EHwKJ;AACF;AGtKE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AHwKJ;AGvKI;EAJF;IAKI,mBAAA;IACA,6BAAA;EH0KJ;AACF;AGzKI;EARF;IASI,eAAA;IACA,8BAAA;EH4KJ;AACF;AG3KI;EAZF;IAaI,2BAAA;EH8KJ;AACF;AG5KE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AH8KJ;AG7KI;EAJF;IAKI,UAAA;EHgLJ;AACF;AG/KI;EAPF;IAQI,WAAA;EHkLJ;AACF;AGjLI;EACE;IACE,SAAA;EHmLN;EGjLI;IACE,SAAA;EHmLN;EGjLI;IACE,SAAA;EHmLN;AACF;AGhLE;EACE,eAAA;AHkLJ;AGhLE;EACE,gBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AHkLJ;AGjLI;EANF;IAOI,SAAA;IACA,cAAA;IACA,mBAAA;IACA,eAAA;EHoLJ;AACF;AGnLI;EAZF;IAaI,SAAA;EHsLJ;AACF;AGrLI;EAfF;IAgBI,sBAAA;EHwLJ;AACF;AGtLE;EACE,WDhTU;ECiTV,WAAA;EACA,mBAAA;EACA,yBDvSU;ECwSV,aAAA;AHwLJ;AGvLI;EANF;IAOI,kBAAA;EH0LJ;AACF;AGzLI;EATF;IAUI,eAAA;EH4LJ;AACF;AG3LI;EACE,yBD5SW;EC6SX,cDhTU;AF6ehB;;AGxLA;EACE,gBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AH2LF;AG1LE;EANF;IAOI,QAAA;IACA,YAAA;EH6LF;AACF;AG5LE;EAVF;IAWI,eAAA;EH+LF;AACF;AG9LE;EACE,eAAA;AHgMJ;AG9LE;EACE,cDhVS;ECiVT,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,UAAA;EACA,yBAAA;AHgMJ;AG/LI;EARF;IASI,eAAA;EHkMJ;AACF;AGjMI;EAEE,WAAA;EACA,WAAA;EACA,WAAA;EACA,cAAA;EACA,yBDlVU;AFohBhB;AGjMM;EAPF;IAQI,UAAA;EHoMN;AACF;AGnMM;EAVF;IAWI,UAAA;EHsMN;AACF;AGrMM;EAbF;IAcI,UAAA;EHwMN;AACF;AGvMM;EAhBF;IAiBI,UAAA;EH0MN;AACF;AGvME;EACE,eAAA;EACA,gBAAA;AHyMJ;AGxMI;EACE,kCAAA;UAAA,0BAAA;AH0MN;;AGrMA;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,SAAA;AHwMF;AGvME;EALF;IAMI,aAAA;EH0MF;AACF;AGzME;EACE,aAAA;AH2MJ;AG1MI;EAFF;IAGI,aAAA;IACA,WAAA;EH6MJ;AACF;AG5MI;EANF;IAOI,SAAA;EH+MJ;AACF;AG9MI;EATF;IAUI,SAAA;EHiNJ;AACF;AG/ME;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,2CDraqB;ECsarB,aAAA;EACA,mBAAA;EACA,uBAAA;AHiNJ;AGhNI;EARF;IASI,WAAA;IACA,YAAA;EHmNJ;AACF;AGjNM;EADF;IAEI,aAAA;EHoNN;AACF;AGjNE;EACE,4BAAA;AHmNJ;;AG/MA;EACE,iBAAA;EACA,yBDvbqB;ECwbrB,aAAA;EACA,gCAAA;EACA,4BAAA;UAAA,oBAAA;EACA,UAAA;EACA,gBAAA;EACA,oCAAA;UAAA,4BAAA;EACA,SAAA;EACA,gBAAA;AHkNF;AGjNE;EAXF;IAYI,aAAA;IACA,8BAAA;IACA,mBAAA;IACA,eAAA;IACA,SAAA;EHoNF;AACF;AGnNE;EAlBF;IAmBI,wBAAA;EHsNF;AACF;AGrNE;EArBF;IAsBI,SAAA;EHwNF;AACF;AGvNE;EACE,aAAA;EACA,4BAAA;UAAA,oBAAA;EACA,UAAA;EACA,YAAA;AHyNJ;AGvNE;EACE,gBAAA;EACA,iBAAA;EACA,kBAAA;AHyNJ;AGxNI;EAJF;IAKI,eAAA;IACA,eAAA;IACA,WAAA;IACA,kBAAA;EH2NJ;AACF;AG1NI;EAVF;IAWI,iBAAA;EH6NJ;AACF;AG5NI;EAbF;IAcI,gBAAA;IACA,eAAA;EH+NJ;AACF;AG9NI;EAjBF;IAkBI,eAAA;IACA,iBAAA;EHiOJ;AACF;AG/NE;EACE,mBAAA;EACA,yBAAA;EACA,aAAA;EACA,gBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,SAAA;AHiOJ;AGhOI;EAVF;IAWI,YAAA;EHmOJ;AACF;AGlOI;EAbF;IAcI,eAAA;IACA,aAAA;EHqOJ;AACF;AGpOI;EACE,kBAAA;AHsON;AGrOM;EAFF;IAGI,eAAA;EHwON;AACF;AGvOM;EALF;IAMI,YAAA;EH0ON;AACF;AGzOM;EARF;IASI,SAAA;EH4ON;AACF;AGzOE;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AH2OJ;AG1OI;EAJF;IAKI,eAAA;EH6OJ;AACF;AG3OE;EACE,eAAA;AH6OJ;AG5OI;EAFF;IAGI,eAAA;EH+OJ;AACF;;AI/wBA;EACE,iBAAA;AJkxBF;AIjxBE;EACE,aAAA;EACA,8BAAA;EACA,cAAA;AJmxBJ;AIlxBI;EAJF;IAKI,2BAAA;EJqxBJ;AACF;;AIjxBA;EACE,mEFEgB;EEDhB,mBAAA;EACA,aAAA;AJoxBF;AInxBE;EAJF;IAKI,gBAAA;IACA,cAAA;EJsxBF;AACF;AIrxBE;EACE,gBAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AJuxBJ;AItxBI;EAPF;IAQI,eAAA;IACA,UAAA;EJyxBJ;AACF;AIxxBI;EAXF;IAYI,WAAA;EJ2xBJ;AACF;AI1xBI;EAdF;IAeI,SAAA;EJ6xBJ;AACF;AI5xBI;EAjBF;IAkBI,aAAA;EJ+xBJ;AACF;AI7xBE;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,SAAA;AJ+xBJ;AI9xBI;EANF;IAOI,2BAAA;EJiyBJ;AACF;AIhyBI;EATF;IAUI,SAAA;EJmyBJ;AACF;AIjyBE;EACE,aAAA;EACA,mBAAA;EACA,qEFzCoB;EE0CpB,gBAAA;AJmyBJ;AIlyBI;EALF;IAMI,kBAAA;EJqyBJ;AACF;AIpyBI;EARF;IASI,kBAAA;EJuyBJ;AACF;AItyBI;EAXF;IAYI,kBAAA;EJyyBJ;AACF;AIvyBE;EACE,gBAAA;AJyyBJ;AIxyBI;EAFF;IAGI,eAAA;EJ2yBJ;AACF;AI1yBI;EALF;IAMI,eAAA;EJ6yBJ;AACF;AI3yBE;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,eAAA;EACA,mBAAA;AJ6yBJ;AI3yBE;EACE,WF3DU;EE4DV,eAAA;EACA,gBAAA;AJ6yBJ;AI5yBI;EAJF;IAKI,eAAA;EJ+yBJ;AACF;AI9yBI;EAPF;IAQI,eAAA;EJizBJ;AACF;AI/yBE;EACE,gBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;AJizBJ;AIhzBI;EAPF;IAQI,QAAA;IACA,uBAAA;EJmzBJ;AACF;AIlzBI;EAXF;IAYI,gBAAA;EJqzBJ;AACF;AInzBE;EACE,WFrFU;EEsFV,gBAAA;AJqzBJ;AInzBE;EACE,eAAA;EACA,aAAA;EACA,8BAAA;AJqzBJ;AInzBE;EACE,eAAA;AJqzBJ;AInzBE;EACE,WAAA;EACA,gBAAA;AJqzBJ;AIpzBI;EAHF;IAII,eAAA;EJuzBJ;AACF;AItzBI;EANF;IAOI,eAAA;EJyzBJ;AACF;AIxzBI;EATF;IAUI,eAAA;EJ2zBJ;AACF;AIzzBE;EACE,aAAA;EACA,SAAA;AJ2zBJ;AI1zBI;EAHF;IAII,SAAA;EJ6zBJ;AACF;AI5zBI;EANF;IAOI,8BAAA;EJ+zBJ;AACF;AI7zBE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AJ+zBJ;AI7zBM;EADF;IAEI,aAAA;EJg0BN;AACF;AI7zBE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AJ+zBJ;AI9zBI;EACE,aAAA;AJg0BN;AI/zBM;EAFF;IAGI,aAAA;EJk0BN;AACF;AI/zBE;EACE,eAAA;AJi0BJ;AIh0BI;EAFF;IAGI,eAAA;EJm0BJ;AACF;AIj0BE;EACE,+BF/Ic;AFk9BlB;AIl0BI;EAFF;IAGI,eAAA;IACA,+BF/IkB;EFo9BtB;AACF;AIn0BE;EACE,mBAAA;EACA,kIAAA;EAEA,wBAAA;AJo0BJ;AIn0BI;EALF;IAMI,eAAA;IACA,UAAA;EJs0BJ;AACF;AIr0BI;EATF;IAUI,UAAA;EJw0BJ;AACF;AIv0BI;EAZF;IAaI,aAAA;EJ00BJ;AACF;AIz0BI;EACE,aAAA;AJ20BN;AI10BM;EAFF;IAGI,cAAA;IACA,mBAAA;IACA,mEFzLU;IE0LV,aAAA;EJ60BN;AACF;AI10BE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AJ40BJ;AI10BE;EACE,gBAAA;EACA,WAAA;EACA,aAAA;EACA,qBAAA;EACA,8BAAA;AJ40BJ;AI30BI;EANF;IAOI,eAAA;IACA,2BAAA;IACA,mBAAA;IACA,QAAA;EJ80BJ;AACF;AI50BE;EACE,eAAA;AJ80BJ;AI70BI;EAFF;IAGI,eAAA;EJg1BJ;AACF;AI90BE;EACE,gBAAA;EACA,0DFpMS;EEqMT,qBAAA;EACA,6BAAA;EACA,oCAAA;AJg1BJ;AI/0BI;EANF;IAOI,eAAA;EJk1BJ;AACF;AIh1BE;EACE,WFrNU;EEsNV,eAAA;EACA,gBAAA;AJk1BJ;AIj1BI;EAJF;IAKI,eAAA;EJo1BJ;AACF;AIl1BE;EACE,eAAA;EACA,iBAAA;AJo1BJ;AIl1BE;EACE,mBAAA;EACA,mBFtNU;EEuNV,WFnOU;EEoOV,eAAA;EACA,kBAAA;EACA,eAAA;AJo1BJ;AIn1BI;EAPF;IAQI,eAAA;IACA,eAAA;EJs1BJ;AACF;;AIl1BA;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,SAAA;AJq1BF;AIp1BE;EANF;IAOI,QAAA;IACA,2BAAA;EJu1BF;AACF;AIt1BE;EAVF;IAWI,aAAA;EJy1BF;AACF;AIx1BE;EACE,aAAA;AJ01BJ;AIz1BI;EAFF;IAGI,aAAA;IACA,QAAA;EJ41BJ;AACF;AI11BE;EACE,eAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,SAAA;AJ41BJ;AI11BE;EACE,eAAA;AJ41BJ;;AIx1BA;EACE,aAAA;EACA,SAAA;AJ21BF;AI11BE;EAHF;IAII,8BAAA;EJ61BF;AACF;AI51BE;EANF;IAOI,eAAA;EJ+1BF;AACF;AI91BE;EATF;IAUI,QAAA;EJi2BF;AACF;AIh2BE;EACE,kBAAA;EACA,kCF5Se;EE6Sf,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AJk2BJ;AIj2BI;EARF;IASI,WAAA;EJo2BJ;AACF;AIn2BI;EAXF;IAYI,WAAA;EJs2BJ;AACF;AIr2BI;EAdF;IAeI,WAAA;IACA,YAAA;EJw2BJ;AACF;AIv2BI;EACE,aAAA;AJy2BN;AIx2BM;EAFF;IAGI,aAAA;EJ22BN;AACF;AIx2BE;EACE,eAAA;AJ02BJ;AIz2BI;EAFF;IAGI,4BAAA;EJ42BJ;AACF;;AIx2BA;EACE,yBFrVmB;EEsVnB,mBAAA;EACA,aAAA;AJ22BF;AI12BE;EAJF;IAKI,aAAA;EJ62BF;AACF;AI52BE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AJ82BJ;AI72BI;EAJF;IAKI,SAAA;EJg3BJ;AACF;AI92BE;EACE,aAAA;EACA,uBAAA;EACA,SAAA;AJg3BJ;AI92BE;EACE,eAAA;AJg3BJ;AI/2BI;EAFF;IAGI,eAAA;EJk3BJ;AACF;AIj3BI;EALF;IAMI,eAAA;EJo3BJ;AACF;AIl3BE;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AJo3BJ;AIn3BI;EAJF;IAKI,QAAA;EJs3BJ;AACF;AIp3BE;EACE,WFhWU;EEiWV,gBAAA;AJs3BJ;AIr3BI;EAHF;IAII,eAAA;EJw3BJ;AACF;AIr3BI;EADF;IAEI,eAAA;EJw3BJ;AACF;;AIp3BA;EACE,yBFxYmB;EEyYnB,mBAAA;EACA,aAAA;AJu3BF;AIt3BE;EAJF;IAKI,aAAA;EJy3BF;AACF;AIx3BE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AJ03BJ;AIx3BE;EACE,gBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,SAAA;AJ03BJ;AIz3BI;EAPF;IAQI,2BAAA;EJ43BJ;AACF;AI13BE;EACE,aAAA;EACA,sBAAA;AJ43BJ;AI13BE;EACE,eAAA;AJ43BJ;AI13BE;EACE,cFxYU;EEyYV,eAAA;EACA,gBAAA;AJ43BJ;AI33BI;EAJF;IAKI,eAAA;EJ83BJ;AACF;AI73BI;EAPF;IAQI,eAAA;EJg4BJ;AACF;AI93BE;EACE,cFnZU;EEoZV,eAAA;AJg4BJ;AI/3BI;EAHF;IAII,eAAA;EJk4BJ;AACF;AIh4BE;EACE,cFzZe;EE0Zf,eAAA;EACA,iBAAA;AJk4BJ;AIj4BI;EAJF;IAKI,eAAA;IACA,iBAAA;EJo4BJ;AACF;AIn4BI;EARF;IASI,iBAAA;EJs4BJ;AACF;;AKv0CI;EADF;IAEI,cAAA;EL20CJ;EK10CI;IACE,WAAA;IACA,yBHFgB;EF80CtB;EK10CI;IACE,yBHJgB;IGKhB,kBAAA;EL40CN;AACF;;AKv0CA;EACE,yBHbsB;EGctB,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,WHMY;EGLZ,uBAAA;EACA,yBAAA;EACA,gCAAA;AL00CF;AKz0CE;EAVF;IAWI,YAAA;IACA,mBAAA;EL40CF;AACF;AK10CE;EACE,yBH/Bc;EGgCd,WHLU;EGMV,gCAAA;AL40CJ;AK30CI;EACE,yBH/BkB;EGgClB,WHVQ;EGWR,gCAAA;AL60CN;AK30CI;EACE,6BAAA;AL60CN;AK10CE;EACE,YAAA;EACA,yBAAA;AL40CJ;AK30CI;EAHF;IAII,YAAA;EL80CJ;AACF;AK50CE;EACE,WAAA;EACA,kBAAA;AL80CJ;AK70CI;EACE,kBAAA;AL+0CN;AK50CE;EACE,mBAAA;EACA,YAAA;AL80CJ;AK70CI;EACE,mBAAA;AL+0CN;AK50CE;EACE,aAAA;EACA,mBAAA;EACA,yBAAA;AL80CJ;AK50CE;EACE,eAAA;EACA,kBAAA;AL80CJ;AK50CE;EACE,kBAAA;EACA,0BAAA;AL80CJ;AK70CI;EAHF;IAII,kBAAA;ELg1CJ;AACF;AK/0CI;EANF;IAOI,aAAA;ELk1CJ;AACF;AKj1CI;EACE,aAAA;ALm1CN;AKl1CM;EAFF;IAGI,cAAA;IACA,kBAAA;ELq1CN;AACF;AKl1CE;EACE,eAAA;EACA,gBAAA;ALo1CJ;AKn1CI;EACE,iCAAA;UAAA,yBAAA;ALq1CN;AKl1CE;EACE,aAAA;EACA,mBAAA;EACA,QAAA;ALo1CJ;AKj1CE;EACE,aAAA;ALm1CJ;AKl1CI;EACE,kBAAA;ALo1CN;AKh1CE;EACE,eAAA;EACA,uBAAA;EACA,UAAA;ALk1CJ;;AK90CA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,WHjGY;AFk7Cd;AKh1CE;EACE,kBAAA;ALk1CJ;AKj1CI;EACE,kBAAA;EACA,WAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;EACA,kBAAA;EACA,yBHrIY;EGsIZ,OAAA;EACA,YAAA;ALm1CN;AK/0CE;EACE,yBHvHoB;AFw8CxB;AK/0CE;EACE,yBHzHuB;AF08C3B;AK/0CE;EACE,yBH3HqB;AF48CzB;;AK70CA;EACE,WAAA;EACA,yBAAA;ALg1CF;AK/0CE;EACE,yBHrJqB;EGsJrB,WHhIU;AFi9Cd;AK/0CE;EACE,yBAAA;EACA,YAAA;ALi1CJ;AKh1CI;EAHF;IAII,YAAA;ELm1CJ;AACF;AKl1CI;EANF;IAOI,YAAA;ELq1CJ;AACF;AKp1CI;EATF;IAUI,YAAA;ELu1CJ;AACF;AKt1CI;EAZF;IAaI,YAAA;ELy1CJ;AACF;AKx1CI;EAfF;IAgBI,YAAA;EL21CJ;AACF;AKz1CE;EACE,yBAAA;AL21CJ;AKz1CE;EACE,YAAA;AL21CJ;AK11CI;EAFF;IAGI,YAAA;EL61CJ;AACF;AK31CE;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AL61CJ;AK31CE;EACE,eAAA;AL61CJ;AK31CE;EACE,0BAAA;AL61CJ;AK31CE;EACE,0BAAA;AL61CJ;AK51CI;EAFF;IAGI,aAAA;EL+1CJ;AACF;AK91CI;EACE,aAAA;ALg2CN;AK/1CM;EAFF;IAGI,cAAA;ELk2CN;AACF","sourcesContent":["@font-face {\r\n  font-family: \"Montserrat\";\r\n  src: url(\"../fonts/Montserrat/AnyConv.com__Montserrat-Medium.woff\")\r\n      format(\"woff\"),\r\n    url(\"../fonts/Montserrat/AnyConv.com__Montserrat-Medium.woff2\")\r\n      format(\"woff2\");\r\n  font-weight: 500;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Montserrat\";\r\n  src: url(\"../fonts/Montserrat/AnyConv.com__Montserrat-SemiBold.woff\")\r\n      format(\"woff\"),\r\n    url(\"../fonts/Montserrat/AnyConv.com__Montserrat-SemiBold.woff2\")\r\n      format(\"woff2\");\r\n  font-weight: 600;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Rubik\";\r\n  src: url(\"../fonts/Rubik/AnyConv.com__Rubik-Regular.woff\") format(\"woff\"),\r\n    url(\"../fonts/Rubik/AnyConv.com__Rubik-Regular.woff2\") format(\"woff2\");\r\n  font-weight: 400;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Rubik\";\r\n  src: url(\"../fonts/Rubik/AnyConv.com__Rubik-Medium.woff\") format(\"woff\"),\r\n    url(\"../fonts/Rubik/AnyConv.com__Rubik-Medium.woff2\") format(\"woff2\");\r\n  font-weight: 500;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Rubik\";\r\n  src: url(\"../fonts/Rubik/AnyConv.com__Rubik-Bold.woff\") format(\"woff\"),\r\n    url(\"../fonts/Rubik/AnyConv.com__Rubik-Bold.woff2\") format(\"woff2\");\r\n  font-weight: 700;\r\n}\r\n","@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"../fonts/Montserrat/AnyConv.com__Montserrat-Medium.woff\") format(\"woff\"), url(\"../fonts/Montserrat/AnyConv.com__Montserrat-Medium.woff2\") format(\"woff2\");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"../fonts/Montserrat/AnyConv.com__Montserrat-SemiBold.woff\") format(\"woff\"), url(\"../fonts/Montserrat/AnyConv.com__Montserrat-SemiBold.woff2\") format(\"woff2\");\n  font-weight: 600;\n}\n@font-face {\n  font-family: \"Rubik\";\n  src: url(\"../fonts/Rubik/AnyConv.com__Rubik-Regular.woff\") format(\"woff\"), url(\"../fonts/Rubik/AnyConv.com__Rubik-Regular.woff2\") format(\"woff2\");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"Rubik\";\n  src: url(\"../fonts/Rubik/AnyConv.com__Rubik-Medium.woff\") format(\"woff\"), url(\"../fonts/Rubik/AnyConv.com__Rubik-Medium.woff2\") format(\"woff2\");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"Rubik\";\n  src: url(\"../fonts/Rubik/AnyConv.com__Rubik-Bold.woff\") format(\"woff\"), url(\"../fonts/Rubik/AnyConv.com__Rubik-Bold.woff2\") format(\"woff2\");\n  font-weight: 700;\n}\n* {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\nbutton {\n  border: none;\n  cursor: pointer;\n}\n\ninput {\n  outline: none;\n  border: none;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Rubik\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #72768d;\n  background-color: #ffffff;\n}\n\n.container {\n  max-width: 1320px;\n  width: 90%;\n  margin: 0 auto;\n}\n@media (max-width: 500px) {\n  .container {\n    width: calc(100% - 20px);\n  }\n}\n.container--small {\n  max-width: 994px;\n  width: 90%;\n  margin: 0 auto;\n}\n\n.bonus {\n  padding-top: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.bonus__container {\n  border-radius: 15px;\n  background-color: #f7f8fd;\n  position: relative;\n}\n.bonus__signboard {\n  position: absolute;\n  top: -5px;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.bonus-signboard {\n  width: 221px;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 600px) {\n  .bonus-signboard {\n    width: 181px;\n  }\n}\n@media (max-width: 500px) {\n  .bonus-signboard {\n    left: auto;\n    right: 56px;\n  }\n}\n@media (max-width: 400px) {\n  .bonus-signboard {\n    width: 141px;\n    right: 64px;\n  }\n}\n.bonus-signboard__text {\n  position: absolute;\n  width: 87px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n@media (max-width: 600px) {\n  .bonus-signboard__text {\n    font-size: 12px;\n    text-align: center;\n  }\n}\n@media (max-width: 400px) {\n  .bonus-signboard__text {\n    font-size: 10px;\n  }\n}\n.bonus-signboard__img {\n  max-width: 221px;\n  height: auto;\n}\n@media (max-width: 600px) {\n  .bonus-signboard__img {\n    max-width: 181px;\n  }\n}\n@media (max-width: 400px) {\n  .bonus-signboard__img {\n    max-width: 141px;\n  }\n}\n\n.bonus-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 26px 16px;\n  border-bottom: 2px solid #ebecf5;\n}\n@media (max-width: 700px) {\n  .bonus-header {\n    padding: 20px 15px;\n  }\n}\n@media (max-width: 630px) {\n  .bonus-header {\n    padding: 15px 10px;\n  }\n}\n.bonus-header__company {\n  display: flex;\n  align-items: center;\n}\n.bonus-header__assessment {\n  max-width: 136px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.bonus-header__number {\n  margin-right: 14px;\n  font-size: 18px;\n  font-weight: 500;\n  background: linear-gradient(180deg, #ffc736 0%, #ff630c 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n@media (max-width: 600px) {\n  .bonus-header__number {\n    font-size: 14px;\n    margin-right: 10px;\n  }\n}\n.bonus-header__img-fire {\n  max-width: 25px;\n  margin-right: 1px;\n}\n@media (max-width: 600px) {\n  .bonus-header__img-fire {\n    max-width: 17px;\n  }\n}\n.bonus-header__text {\n  color: #313446;\n  font-size: 18px;\n  font-weight: 500;\n}\n@media (max-width: 600px) {\n  .bonus-header__text {\n    font-size: 14px;\n  }\n}\n.bonus-header__assessment {\n  display: flex;\n  align-items: flex-end;\n}\n.bonus-header__numbers {\n  color: #313446;\n  line-height: 1;\n  font-size: 17px;\n  font-weight: 500;\n  margin-right: 10px;\n}\n@media (max-width: 600px) {\n  .bonus-header__numbers {\n    font-size: 14px;\n  }\n}\n.bonus-header__block {\n  display: flex;\n}\n.bonus-header__img-star {\n  max-width: 20px;\n}\n@media (max-width: 610px) {\n  .bonus-header__img-star {\n    display: none;\n  }\n}\n.bonus-header__img-star--media {\n  display: none;\n}\n@media (max-width: 610px) {\n  .bonus-header__img-star--media {\n    display: block;\n  }\n}\n\n.bonus-content {\n  padding: 16px;\n  display: flex;\n}\n@media (max-width: 1468px) {\n  .bonus-content {\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n}\n@media (max-width: 1269px) {\n  .bonus-content {\n    gap: 16px;\n  }\n}\n@media (max-width: 500px) {\n  .bonus-content {\n    padding: 10px;\n  }\n}\n.bonus-content__case {\n  display: flex;\n  gap: 18px;\n  margin-right: 33px;\n}\n@media (max-width: 1468px) {\n  .bonus-content__case {\n    margin-right: 0;\n  }\n}\n@media (max-width: 630px) {\n  .bonus-content__case {\n    align-items: flex-start;\n  }\n}\n@media (max-width: 600px) {\n  .bonus-content__case {\n    padding-bottom: 10px;\n    border-bottom: 2px solid #ebecf5;\n  }\n}\n@media (max-width: 350px) {\n  .bonus-content__case {\n    gap: 9px;\n  }\n}\n.bonus-content__logo {\n  display: block;\n  max-width: 148px;\n  padding: 42px 18px;\n  border-radius: 15px;\n  background: linear-gradient(148deg, #313446 19.06%, #070b1f 97.93%);\n}\n@media (max-width: 630px) {\n  .bonus-content__logo {\n    padding: 28px 18px;\n  }\n}\n@media (max-width: 600px) {\n  .bonus-content__logo {\n    padding: 21px 10px;\n  }\n}\n@media (max-width: 350px) {\n  .bonus-content__logo {\n    padding: 29px 10px;\n  }\n}\n.bonus-content__logo-img {\n  max-width: 112px;\n}\n@media (max-width: 700px) {\n  .bonus-content__logo-img {\n    max-width: 80px;\n  }\n}\n@media (max-width: 610px) {\n  .bonus-content__logo-img {\n    max-width: 68px;\n  }\n}\n@media (max-width: 428px) {\n  .bonus-content__logo-img {\n    max-width: 53px;\n  }\n}\n.bonus-content__bonus {\n  max-width: 284px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 630px) {\n  .bonus-content__bonus {\n    gap: 4px;\n    max-width: none;\n  }\n}\n@media (max-width: 610px) {\n  .bonus-content__bonus {\n    max-width: none;\n  }\n}\n.bonus-content__head {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n@media (max-width: 610px) {\n  .bonus-content__head {\n    display: none;\n  }\n}\n.bonus-content__img-present {\n  max-width: 17px;\n}\n.bonus-content__title {\n  color: #72768d;\n  font-size: 14px;\n  font-weight: 500;\n}\n.bonus-content__subtitle {\n  color: #313446;\n  font-size: 24px;\n  font-weight: 700;\n}\n@media (max-width: 700px) {\n  .bonus-content__subtitle {\n    font-size: 20px;\n  }\n}\n@media (max-width: 630px) {\n  .bonus-content__subtitle {\n    font-size: 18px;\n  }\n}\n.bonus-content__text {\n  line-height: 20px;\n}\n@media (max-width: 600px) {\n  .bonus-content__text {\n    line-height: normal;\n  }\n}\n@media (max-width: 500px) {\n  .bonus-content__text {\n    font-size: 12px;\n  }\n}\n.bonus-content__offers {\n  max-width: 186px;\n  margin-right: 94px;\n}\n@media (max-width: 1468px) {\n  .bonus-content__offers {\n    margin-right: 0;\n  }\n}\n@media (max-width: 758px) {\n  .bonus-content__offers {\n    max-width: none;\n    width: 100%;\n  }\n}\n.bonus-content__info {\n  margin-right: 74px;\n}\n@media (max-width: 1468px) {\n  .bonus-content__info {\n    margin-right: 0;\n  }\n}\n.bonus-content__list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n@media (max-width: 758px) {\n  .bonus-content__list {\n    flex-direction: row;\n    justify-content: space-around;\n  }\n}\n@media (max-width: 600px) {\n  .bonus-content__list {\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n}\n@media (max-width: 400px) {\n  .bonus-content__list {\n    justify-content: flex-start;\n  }\n}\n.bonus-content__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n@media (max-width: 595px) {\n  .bonus-content__item {\n    width: 45%;\n  }\n}\n@media (max-width: 400px) {\n  .bonus-content__item {\n    width: auto;\n  }\n}\n@media (max-width: 500px) {\n  .bonus-content__item:nth-child(3) {\n    order: -2;\n  }\n  .bonus-content__item:nth-child(4) {\n    order: -1;\n  }\n  .bonus-content__item:nth-child(1) {\n    order: -1;\n  }\n}\n.bonus-content__img-rocket {\n  max-width: 17px;\n}\n.bonus-content__buttons {\n  max-width: 180px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 1269px) {\n  .bonus-content__buttons {\n    gap: 20px;\n    margin: 0 auto;\n    flex-direction: row;\n    max-width: none;\n  }\n}\n@media (max-width: 500px) {\n  .bonus-content__buttons {\n    gap: 10px;\n  }\n}\n@media (max-width: 408px) {\n  .bonus-content__buttons {\n    flex-direction: column;\n  }\n}\n.bonus-content__btn {\n  color: #fff;\n  width: 100%;\n  border-radius: 10px;\n  background-color: #53af1b;\n  padding: 18px;\n}\n@media (max-width: 700px) {\n  .bonus-content__btn {\n    padding: 15px 48px;\n  }\n}\n@media (max-width: 428px) {\n  .bonus-content__btn {\n    font-size: 12px;\n  }\n}\n.bonus-content__btn--grey {\n  background-color: #ebecf5;\n  color: #6f728c;\n}\n\n.bonus-content-info {\n  max-width: 272px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 1078px) {\n  .bonus-content-info {\n    order: 1;\n    margin: auto;\n  }\n}\n@media (max-width: 600px) {\n  .bonus-content-info {\n    max-width: none;\n  }\n}\n.bonus-content-info__img {\n  max-width: 33px;\n}\n.bonus-content-info__btn {\n  color: #72768d;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0;\n  background-color: inherit;\n}\n@media (max-width: 428px) {\n  .bonus-content-info__btn {\n    font-size: 13px;\n  }\n}\n.bonus-content-info__btn::before, .bonus-content-info__btn::after {\n  content: \"\";\n  width: 86px;\n  height: 2px;\n  flex-shrink: 0;\n  background-color: #a6aac3;\n}\n@media (max-width: 600px) {\n  .bonus-content-info__btn::before, .bonus-content-info__btn::after {\n    width: 40%;\n  }\n}\n@media (max-width: 550px) {\n  .bonus-content-info__btn::before, .bonus-content-info__btn::after {\n    width: 37%;\n  }\n}\n@media (max-width: 400px) {\n  .bonus-content-info__btn::before, .bonus-content-info__btn::after {\n    width: 35%;\n  }\n}\n@media (max-width: 370px) {\n  .bonus-content-info__btn::before, .bonus-content-info__btn::after {\n    width: 33%;\n  }\n}\n.bonus-content-info__img-check {\n  max-width: 15px;\n  transition: 0.3s;\n}\n.bonus-content-info__img-check.active {\n  transform: rotate(-180deg);\n}\n\n.bonus-content-payments {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n@media (max-width: 1078px) {\n  .bonus-content-payments {\n    display: none;\n  }\n}\n.bonus-content-payments--moby {\n  display: none;\n}\n@media (max-width: 1078px) {\n  .bonus-content-payments--moby {\n    display: flex;\n    width: 100%;\n  }\n}\n@media (max-width: 500px) {\n  .bonus-content-payments--moby {\n    gap: 14px;\n  }\n}\n@media (max-width: 427px) {\n  .bonus-content-payments--moby {\n    gap: 10px;\n  }\n}\n.bonus-content-payments__item {\n  width: 53px;\n  height: 34px;\n  border-radius: 5px;\n  background-color: rgba(235, 236, 245, 0.65);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 407px) {\n  .bonus-content-payments__item {\n    width: 38px;\n    height: 23px;\n  }\n}\n@media (max-width: 660px) {\n  .bonus-content-payments__item--moby {\n    display: none;\n  }\n}\n.bonus-content-payments__img {\n  max-width: calc(100% - 20px);\n}\n\n.bonus-accordion {\n  padding: 0px 15px;\n  background-color: #f1f3fd;\n  display: flex;\n  border-radius: 0px 0px 15px 15px;\n  transform: scaleY(0);\n  opacity: 0;\n  transition: 0.5s;\n  transform-origin: top center;\n  height: 0;\n  overflow: hidden;\n}\n@media (max-width: 1078px) {\n  .bonus-accordion {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 15px;\n  }\n}\n@media (max-width: 500px) {\n  .bonus-accordion {\n    padding: 10px !important;\n  }\n}\n@media (max-width: 407px) {\n  .bonus-accordion {\n    gap: 10px;\n  }\n}\n.bonus-accordion.active {\n  padding: 15px;\n  transform: scaleY(1);\n  opacity: 1;\n  height: auto;\n}\n.bonus-accordion__text {\n  max-width: 446px;\n  line-height: 25px;\n  margin-right: 20px;\n}\n@media (max-width: 1078px) {\n  .bonus-accordion__text {\n    margin-right: 0;\n    max-width: none;\n    width: 100%;\n    text-align: center;\n  }\n}\n@media (max-width: 600px) {\n  .bonus-accordion__text {\n    line-height: 20px;\n  }\n}\n@media (max-width: 500px) {\n  .bonus-accordion__text {\n    text-align: left;\n    font-size: 12px;\n  }\n}\n@media (max-width: 407px) {\n  .bonus-accordion__text {\n    font-size: 10px;\n    line-height: 15px;\n  }\n}\n.bonus-accordion__list {\n  border-radius: 15px;\n  border: 2px solid #ebecf5;\n  padding: 15px;\n  max-width: 404px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 12px;\n}\n@media (max-width: 947px) {\n  .bonus-accordion__list {\n    margin: auto;\n  }\n}\n@media (max-width: 500px) {\n  .bonus-accordion__list {\n    max-width: none;\n    padding: 10px;\n  }\n}\n.bonus-accordion__list--margin {\n  margin-right: 16px;\n}\n@media (max-width: 1078px) {\n  .bonus-accordion__list--margin {\n    margin-right: 0;\n  }\n}\n@media (max-width: 947px) {\n  .bonus-accordion__list--margin {\n    margin: auto;\n  }\n}\n@media (max-width: 600px) {\n  .bonus-accordion__list--margin {\n    gap: 10px;\n  }\n}\n.bonus-accordion__item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n@media (max-width: 500px) {\n  .bonus-accordion__item {\n    font-size: 12px;\n  }\n}\n.bonus-accordion__img {\n  max-width: 25px;\n}\n@media (max-width: 500px) {\n  .bonus-accordion__img {\n    max-width: 15px;\n  }\n}\n\n.pari-match {\n  padding-top: 16px;\n}\n.pari-match__container {\n  display: grid;\n  grid-template-columns: 9fr 3fr;\n  grid-gap: 15px;\n}\n@media (max-width: 1254px) {\n  .pari-match__container {\n    grid-template-columns: none;\n  }\n}\n\n.pari-match-body {\n  background: linear-gradient(148deg, #313446 19.06%, #070b1f 97.93%);\n  border-radius: 15px;\n  display: flex;\n}\n@media (max-width: 950px) {\n  .pari-match-body {\n    max-width: 800px;\n    margin: 0 auto;\n  }\n}\n.pari-match-body__left {\n  max-width: 662px;\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n@media (max-width: 1395px) {\n  .pari-match-body__left {\n    max-width: none;\n    width: 70%;\n  }\n}\n@media (max-width: 950px) {\n  .pari-match-body__left {\n    width: 100%;\n  }\n}\n@media (max-width: 526px) {\n  .pari-match-body__left {\n    gap: 15px;\n  }\n}\n@media (max-width: 450px) {\n  .pari-match-body__left {\n    padding: 10px;\n  }\n}\n.pari-match-body__head {\n  max-width: 662px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n}\n@media (max-width: 1254px) {\n  .pari-match-body__head {\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 526px) {\n  .pari-match-body__head {\n    gap: 10px;\n  }\n}\n.pari-match-body__photo {\n  padding: 41px;\n  border-radius: 15px;\n  background: linear-gradient(163deg, #313446 -13.44%, #070b1f 150.61%);\n  max-width: 217px;\n}\n@media (max-width: 640px) {\n  .pari-match-body__photo {\n    padding: 34px 14px;\n  }\n}\n@media (max-width: 526px) {\n  .pari-match-body__photo {\n    padding: 34px 14px;\n  }\n}\n@media (max-width: 400px) {\n  .pari-match-body__photo {\n    padding: 28px 11px;\n  }\n}\n.pari-match-body__photo-img {\n  max-width: 130px;\n}\n@media (max-width: 526px) {\n  .pari-match-body__photo-img {\n    max-width: 89px;\n  }\n}\n@media (max-width: 400px) {\n  .pari-match-body__photo-img {\n    max-width: 52px;\n  }\n}\n.pari-match-body__header {\n  max-width: 385px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.pari-match-body__title {\n  color: #fff;\n  font-size: 20px;\n  font-weight: 500;\n}\n@media (max-width: 526px) {\n  .pari-match-body__title {\n    font-size: 16px;\n  }\n}\n@media (max-width: 400px) {\n  .pari-match-body__title {\n    font-size: 14px;\n  }\n}\n.pari-match-body__grade {\n  max-width: 112px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 5px;\n}\n@media (max-width: 640px) {\n  .pari-match-body__grade {\n    order: 1;\n    margin: 8px 57px 15px 0;\n  }\n}\n@media (max-width: 400px) {\n  .pari-match-body__grade {\n    margin: 10px 0 0;\n  }\n}\n.pari-match-body__number {\n  color: #fff;\n  font-weight: 500;\n}\n.pari-match-body__block-stars {\n  max-width: 85px;\n  display: flex;\n  justify-content: space-between;\n}\n.pari-match-body__img-star {\n  max-width: 17px;\n}\n.pari-match-body__entertainment {\n  width: 100%;\n  margin-top: 15px;\n}\n@media (max-width: 640px) {\n  .pari-match-body__entertainment {\n    margin-top: 5px;\n  }\n}\n@media (max-width: 526px) {\n  .pari-match-body__entertainment {\n    font-size: 12px;\n  }\n}\n@media (max-width: 400px) {\n  .pari-match-body__entertainment {\n    font-size: 10px;\n  }\n}\n.pari-match-body__points {\n  display: flex;\n  gap: 40px;\n}\n@media (max-width: 1294px) {\n  .pari-match-body__points {\n    gap: 18px;\n  }\n}\n@media (max-width: 950px) {\n  .pari-match-body__points {\n    justify-content: space-between;\n  }\n}\n.pari-match-body__list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n@media (max-width: 640px) {\n  .pari-match-body__list--moby {\n    display: none;\n  }\n}\n.pari-match-body__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.pari-match-body__item--moby {\n  display: none;\n}\n@media (max-width: 640px) {\n  .pari-match-body__item--moby {\n    display: flex;\n  }\n}\n.pari-match-body__img-rocket {\n  max-width: 17px;\n}\n@media (max-width: 526px) {\n  .pari-match-body__img-rocket {\n    max-width: 14px;\n  }\n}\n.pari-match-body__desc {\n  color: rgba(255, 255, 255, 0.9);\n}\n@media (max-width: 526px) {\n  .pari-match-body__desc {\n    font-size: 12px;\n    color: rgba(255, 255, 255, 0.8);\n  }\n}\n.pari-match-body__right {\n  border-radius: 15px;\n  background: url(\"../image/pari-match_white.svg\") top center no-repeat, linear-gradient(148deg, #313446 19.06%, #070b1f 97.93%);\n  padding: 114px 20px 20px;\n}\n@media (max-width: 1395px) {\n  .pari-match-body__right {\n    max-width: none;\n    width: 30%;\n  }\n}\n@media (max-width: 1340px) {\n  .pari-match-body__right {\n    width: 34%;\n  }\n}\n@media (max-width: 950px) {\n  .pari-match-body__right {\n    display: none;\n  }\n}\n.pari-match-body__right--moby {\n  display: none;\n}\n@media (max-width: 950px) {\n  .pari-match-body__right--moby {\n    display: block;\n    border-radius: 15px;\n    background: linear-gradient(148deg, #313446 19.06%, #070b1f 97.93%);\n    padding: 10px;\n  }\n}\n.pari-match-body__inner {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.pari-match-body__block {\n  max-width: 127px;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n@media (max-width: 526px) {\n  .pari-match-body__block {\n    max-width: none;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 5px;\n  }\n}\n.pari-match-body__image {\n  max-width: 17px;\n}\n@media (max-width: 640px) {\n  .pari-match-body__image {\n    max-width: 14px;\n  }\n}\n.pari-match-body__gratters {\n  font-weight: 500;\n  background: linear-gradient(180deg, #f90 0%, #ff630c 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n@media (max-width: 526px) {\n  .pari-match-body__gratters {\n    font-size: 12px;\n  }\n}\n.pari-match-body__bonus {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 700;\n}\n@media (max-width: 526px) {\n  .pari-match-body__bonus {\n    font-size: 18px;\n  }\n}\n.pari-match-body__description {\n  font-size: 12px;\n  line-height: 20px;\n}\n.pari-match-body__btn {\n  border-radius: 10px;\n  background: #53af1b;\n  color: #fff;\n  padding: 17px 0;\n  text-align: center;\n  cursor: pointer;\n}\n@media (max-width: 526px) {\n  .pari-match-body__btn {\n    font-size: 12px;\n    padding: 15px 0;\n  }\n}\n\n.pari-match-body-case {\n  max-width: 190px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n}\n@media (max-width: 640px) {\n  .pari-match-body-case {\n    order: 2;\n    flex-direction: row-reverse;\n  }\n}\n@media (max-width: 427px) {\n  .pari-match-body-case {\n    display: none;\n  }\n}\n.pari-match-body-case--moby {\n  display: none;\n}\n@media (max-width: 427px) {\n  .pari-match-body-case--moby {\n    display: flex;\n    order: 0;\n  }\n}\n.pari-match-body-case__item {\n  max-width: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n.pari-match-body-case__img {\n  max-width: 20px;\n}\n\n.pari-match-body-payment {\n  display: flex;\n  gap: 10px;\n}\n@media (max-width: 1254px) {\n  .pari-match-body-payment {\n    justify-content: space-between;\n  }\n}\n@media (max-width: 640px) {\n  .pari-match-body-payment {\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 427px) {\n  .pari-match-body-payment {\n    gap: 4px;\n  }\n}\n.pari-match-body-payment__item {\n  border-radius: 5px;\n  background: rgba(49, 54, 74, 0.55);\n  width: 69px;\n  height: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 1366px) {\n  .pari-match-body-payment__item {\n    width: 58px;\n  }\n}\n@media (max-width: 526px) {\n  .pari-match-body-payment__item {\n    width: 53px;\n  }\n}\n@media (max-width: 427px) {\n  .pari-match-body-payment__item {\n    width: 43px;\n    height: 27px;\n  }\n}\n.pari-match-body-payment__item--moby {\n  display: none;\n}\n@media (max-width: 640px) {\n  .pari-match-body-payment__item--moby {\n    display: flex;\n  }\n}\n.pari-match-body-payment__img {\n  max-width: 44px;\n}\n@media (max-width: 526px) {\n  .pari-match-body-payment__img {\n    max-width: calc(100% - 18px);\n  }\n}\n\n.pari-match-info {\n  background-color: #f7f8fd;\n  border-radius: 15px;\n  padding: 20px;\n}\n@media (max-width: 450px) {\n  .pari-match-info {\n    padding: 10px;\n  }\n}\n.pari-match-info__list {\n  display: flex;\n  flex-direction: column;\n  gap: 26px;\n}\n@media (max-width: 600px) {\n  .pari-match-info__list {\n    gap: 22px;\n  }\n}\n.pari-match-info__item {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.pari-match-info__img {\n  max-width: 23px;\n}\n@media (max-width: 600px) {\n  .pari-match-info__img {\n    max-width: 31px;\n  }\n}\n@media (max-width: 400px) {\n  .pari-match-info__img {\n    max-width: 27px;\n  }\n}\n.pari-match-info__block {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n@media (max-width: 600px) {\n  .pari-match-info__block {\n    gap: 2px;\n  }\n}\n.pari-match-info__title {\n  color: #000;\n  font-weight: 500;\n}\n@media (max-width: 600px) {\n  .pari-match-info__title {\n    font-size: 12px;\n  }\n}\n@media (max-width: 400px) {\n  .pari-match-info__text {\n    font-size: 13px;\n  }\n}\n\n.pari-match-comment {\n  background-color: #f7f8fd;\n  border-radius: 15px;\n  padding: 20px;\n}\n@media (max-width: 400px) {\n  .pari-match-comment {\n    padding: 10px;\n  }\n}\n.pari-match-comment__inner {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.pari-match-comment__header {\n  max-width: 167px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n@media (max-width: 500px) {\n  .pari-match-comment__header {\n    justify-content: flex-start;\n  }\n}\n.pari-match-comment__block {\n  display: flex;\n  flex-direction: column;\n}\n.pari-match-comment__img {\n  max-width: 31px;\n}\n.pari-match-comment__title {\n  color: #313446;\n  font-size: 18px;\n  font-weight: 500;\n}\n@media (max-width: 600px) {\n  .pari-match-comment__title {\n    font-size: 14px;\n  }\n}\n@media (max-width: 400px) {\n  .pari-match-comment__title {\n    font-size: 10px;\n  }\n}\n.pari-match-comment__text {\n  color: #313446;\n  font-size: 12px;\n}\n@media (max-width: 500px) {\n  .pari-match-comment__text {\n    font-size: 10px;\n  }\n}\n.pari-match-comment__desc {\n  color: #7a7e9b;\n  font-size: 16px;\n  line-height: 25px;\n}\n@media (max-width: 600px) {\n  .pari-match-comment__desc {\n    font-size: 12px;\n    line-height: 20px;\n  }\n}\n@media (max-width: 400px) {\n  .pari-match-comment__desc {\n    line-height: 17px;\n  }\n}\n\n@media (max-width: 530px) {\n  .rates__container {\n    overflow: auto;\n  }\n  .rates__container::-webkit-scrollbar {\n    height: 4px;\n    background-color: #f5f5f5;\n  }\n  .rates__container::-webkit-scrollbar-thumb {\n    background-color: #005283;\n    border-radius: 9px;\n  }\n}\n\n.rates-table {\n  background-color: #f5f5f5;\n  border-radius: 6px;\n  width: 100%;\n  font-weight: 500;\n  line-height: 20px;\n  color: #000;\n  border-spacing: 8px 4px;\n  border-collapse: collapse;\n  font-family: \"Montserrat\", serif;\n}\n@media (max-width: 530px) {\n  .rates-table {\n    width: 477px;\n    margin-bottom: 20px;\n  }\n}\n.rates-table__tr {\n  background-color: #ffffff;\n  color: #000;\n  border-bottom: 1px solid #f5f5f5;\n}\n.rates-table__tr--primary {\n  background-color: #005283;\n  color: #fff;\n  border-bottom: 1px solid #3c647b;\n}\n.rates-table__tr--head {\n  background-color: transparent;\n}\n.rates-table__td-team {\n  width: 610px;\n  padding: 10px 0 10px 10px;\n}\n@media (max-width: 400px) {\n  .rates-table__td-team {\n    width: 140px;\n  }\n}\n.rates-table__td-points {\n  width: 28px;\n  text-align: center;\n}\n.rates-table__td-points--indent {\n  padding-right: 6px;\n}\n.rates-table__td-statistics {\n  padding: 0 0 0 30px;\n  width: 160px;\n}\n.rates-table__td-statistics--head {\n  padding: 0 0 0 40px;\n}\n.rates-table__td-item {\n  display: flex;\n  align-items: center;\n  padding: 10px 0 10px 10px;\n}\n.rates-table__img {\n  max-width: 24px;\n  margin-right: 10px;\n}\n.rates-table__link {\n  margin-right: 50px;\n  text-decoration: underline;\n}\n@media (max-width: 700px) {\n  .rates-table__link {\n    margin-right: 20px;\n  }\n}\n@media (max-width: 400px) {\n  .rates-table__link {\n    display: none;\n  }\n}\n.rates-table__link--short {\n  display: none;\n}\n@media (max-width: 400px) {\n  .rates-table__link--short {\n    display: block;\n    margin-right: 30px;\n  }\n}\n.rates-table__check {\n  max-width: 14px;\n  transition: 0.3s;\n}\n.rates-table__check.active {\n  transform: rotate(180deg);\n}\n.rates-table__results {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.rates-table__hidden {\n  display: none;\n}\n.rates-table__hidden.show {\n  display: table-row;\n}\n.rates-table__btn {\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n}\n\n.rates-table-circle {\n  width: 20px;\n  height: 20px;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 12px;\n  color: #fff;\n}\n.rates-table-circle--underline {\n  position: relative;\n}\n.rates-table-circle--underline::after {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 1px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  left: 0;\n  bottom: -5px;\n}\n.rates-table-circle--red {\n  background-color: #db0202;\n}\n.rates-table-circle--greeen {\n  background-color: #4ec757;\n}\n.rates-table-circle--grey {\n  background-color: #9b9b9b;\n}\n\n.rates-internal-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.rates-internal-table__tr {\n  background-color: #deecfa;\n  color: #000;\n}\n.rates-internal-table__td-first {\n  padding: 10px 0 10px 10px;\n  width: 340px;\n}\n@media (max-width: 850px) {\n  .rates-internal-table__td-first {\n    width: 230px;\n  }\n}\n@media (max-width: 700px) {\n  .rates-internal-table__td-first {\n    width: 200px;\n  }\n}\n@media (max-width: 700px) {\n  .rates-internal-table__td-first {\n    width: 220px;\n  }\n}\n@media (max-width: 640px) {\n  .rates-internal-table__td-first {\n    width: 160px;\n  }\n}\n@media (max-width: 550px) {\n  .rates-internal-table__td-first {\n    width: 130px;\n  }\n}\n.rates-internal-table__td-left {\n  padding: 10px 0 10px 10px;\n}\n.rates-internal-table__td-right {\n  width: 310px;\n}\n@media (max-width: 700px) {\n  .rates-internal-table__td-right {\n    width: 250px;\n  }\n}\n.rates-internal-table__block {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.rates-internal-table__img {\n  max-width: 20px;\n}\n.rates-internal-table__desc {\n  text-decoration: underline;\n}\n.rates-internal-table__link {\n  text-decoration: underline;\n}\n@media (max-width: 640px) {\n  .rates-internal-table__link {\n    display: none;\n  }\n}\n.rates-internal-table__link--moby {\n  display: none;\n}\n@media (max-width: 640px) {\n  .rates-internal-table__link--moby {\n    display: block;\n  }\n}","* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\np {\r\n  margin: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\ninput {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: \"Rubik\", sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  color: $color-main;\r\n  background-color: $background-main;\r\n}\r\n\r\n.container {\r\n  max-width: 1320px;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  @media (max-width: 500px) {\r\n    width: calc(100% - 20px);\r\n  }\r\n  &--small {\r\n    max-width: 994px;\r\n    width: 90%;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n","//background-colors\r\n$background-main: #ffffff;\r\n$background-section: #f7f8fd;\r\n\r\n$background-main-table: #f5f5f5;\r\n$background-line-table: #005283;\r\n$background-third-table: #deecfa;\r\n$background-row-table: #3c647b;\r\n$background-row-light-table: #f5f5f5;\r\n\r\n$background-cards-light: rgba(235, 236, 245, 0.65);\r\n$background-cards: rgba(49, 54, 74, 0.55);\r\n\r\n$background-accordion: #f1f3fd;\r\n\r\n$background-logo: linear-gradient(148deg, #313446 19.06%, #070b1f 97.93%);\r\n$background-logo-light: linear-gradient(\r\n  163deg,\r\n  #313446 -13.44%,\r\n  #070b1f 150.61%\r\n);\r\n\r\n$background-circle-red: #db0202;\r\n$background-circle-greeen: #4ec757;\r\n$background-circle-grey: #9b9b9b;\r\n\r\n//text-colors\r\n$color-white: #fff;\r\n$color-black: #000;\r\n\r\n$color-main: #72768d;\r\n$color-secondary: rgba(255, 255, 255, 0.9);\r\n$color-title: #313446;\r\n$color-text-light: #7a7e9b;\r\n$color-secondary-light: rgba(255, 255, 255, 0.8);\r\n$color-gold: linear-gradient(180deg, #f90 0%, #ff630c 100%);\r\n$color-gold-light: linear-gradient(180deg, #ffc736 0%, #ff630c 100%);\r\n\r\n// button-colors\r\n$btn-primary: #53af1b;\r\n$btn-secondary: #6f728c;\r\n\r\n// border-line\r\n$border-primary: #ebecf5;\r\n$modifier-line: #a6aac3;\r\n",".bonus {\r\n  padding-top: 22px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  &__container {\r\n    border-radius: 15px;\r\n    background-color: $background-section;\r\n    position: relative;\r\n  }\r\n  &__signboard {\r\n    position: absolute;\r\n    top: -5px;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n  }\r\n}\r\n\r\n.bonus-signboard {\r\n  width: 221px;\r\n  display: flex;\r\n  align-items: center;\r\n  @media (max-width: 600px) {\r\n    width: 181px;\r\n  }\r\n  @media (max-width: 500px) {\r\n    left: auto;\r\n    right: 56px;\r\n  }\r\n  @media (max-width: 400px) {\r\n    width: 141px;\r\n    right: 64px;\r\n  }\r\n  &__text {\r\n    position: absolute;\r\n    width: 87px;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    color: $color-white;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    @media (max-width: 600px) {\r\n      font-size: 12px;\r\n      text-align: center;\r\n    }\r\n    @media (max-width: 400px) {\r\n      font-size: 10px;\r\n    }\r\n  }\r\n  &__img {\r\n    max-width: 221px;\r\n    height: auto;\r\n    @media (max-width: 600px) {\r\n      max-width: 181px;\r\n    }\r\n    @media (max-width: 400px) {\r\n      max-width: 141px;\r\n    }\r\n  }\r\n}\r\n\r\n.bonus-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 26px 16px;\r\n  border-bottom: 2px solid $border-primary;\r\n  @media (max-width: 700px) {\r\n    padding: 20px 15px;\r\n  }\r\n  @media (max-width: 630px) {\r\n    padding: 15px 10px;\r\n  }\r\n  &__company {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  &__assessment {\r\n    max-width: 136px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n  &__number {\r\n    margin-right: 14px;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    background: $color-gold-light;\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    @media (max-width: 600px) {\r\n      font-size: 14px;\r\n      margin-right: 10px;\r\n    }\r\n  }\r\n  &__img-fire {\r\n    max-width: 25px;\r\n    margin-right: 1px;\r\n    @media (max-width: 600px) {\r\n      max-width: 17px;\r\n    }\r\n  }\r\n  &__text {\r\n    color: $color-title;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    @media (max-width: 600px) {\r\n      font-size: 14px;\r\n    }\r\n  }\r\n  &__assessment {\r\n    display: flex;\r\n    align-items: flex-end;\r\n  }\r\n  &__numbers {\r\n    color: $color-title;\r\n    line-height: 1;\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n    margin-right: 10px;\r\n    @media (max-width: 600px) {\r\n      font-size: 14px;\r\n    }\r\n  }\r\n  &__block {\r\n    display: flex;\r\n  }\r\n  &__img-star {\r\n    max-width: 20px;\r\n    @media (max-width: 610px) {\r\n      display: none;\r\n    }\r\n    &--media {\r\n      display: none;\r\n      @media (max-width: 610px) {\r\n        display: block;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.bonus-content {\r\n  padding: 16px;\r\n  display: flex;\r\n  @media (max-width: 1468px) {\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 8px;\r\n  }\r\n  @media (max-width: 1269px) {\r\n    gap: 16px;\r\n  }\r\n  @media (max-width: 500px) {\r\n    padding: 10px;\r\n  }\r\n  &__case {\r\n    display: flex;\r\n    gap: 18px;\r\n    margin-right: 33px;\r\n    @media (max-width: 1468px) {\r\n      margin-right: 0;\r\n    }\r\n    @media (max-width: 630px) {\r\n      align-items: flex-start;\r\n    }\r\n    @media (max-width: 600px) {\r\n      padding-bottom: 10px;\r\n      border-bottom: 2px solid $border-primary;\r\n    }\r\n    @media (max-width: 350px) {\r\n      gap: 9px;\r\n    }\r\n  }\r\n  &__logo {\r\n    display: block;\r\n    max-width: 148px;\r\n    padding: 42px 18px;\r\n    border-radius: 15px;\r\n    background: $background-logo;\r\n    @media (max-width: 630px) {\r\n      padding: 28px 18px;\r\n    }\r\n    @media (max-width: 600px) {\r\n      padding: 21px 10px;\r\n    }\r\n    @media (max-width: 350px) {\r\n      padding: 29px 10px;\r\n    }\r\n  }\r\n  &__logo-img {\r\n    max-width: 112px;\r\n    @media (max-width: 700px) {\r\n      max-width: 80px;\r\n    }\r\n    @media (max-width: 610px) {\r\n      max-width: 68px;\r\n    }\r\n    @media (max-width: 428px) {\r\n      max-width: 53px;\r\n    }\r\n  }\r\n  &__bonus {\r\n    max-width: 284px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    @media (max-width: 630px) {\r\n      gap: 4px;\r\n      max-width: none;\r\n    }\r\n    @media (max-width: 610px) {\r\n      max-width: none;\r\n    }\r\n  }\r\n  &__head {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 6px;\r\n    @media (max-width: 610px) {\r\n      display: none;\r\n    }\r\n  }\r\n  &__img-present {\r\n    max-width: 17px;\r\n  }\r\n  &__title {\r\n    color: $color-main;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n  }\r\n  &__subtitle {\r\n    color: $color-title;\r\n    font-size: 24px;\r\n    font-weight: 700;\r\n    @media (max-width: 700px) {\r\n      font-size: 20px;\r\n    }\r\n    @media (max-width: 630px) {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n  &__text {\r\n    line-height: 20px;\r\n    @media (max-width: 600px) {\r\n      line-height: normal;\r\n    }\r\n    @media (max-width: 500px) {\r\n      font-size: 12px;\r\n    }\r\n  }\r\n  &__offers {\r\n    max-width: 186px;\r\n    margin-right: 94px;\r\n    @media (max-width: 1468px) {\r\n      margin-right: 0;\r\n    }\r\n    @media (max-width: 758px) {\r\n      max-width: none;\r\n      width: 100%;\r\n    }\r\n  }\r\n  &__info {\r\n    margin-right: 74px;\r\n    @media (max-width: 1468px) {\r\n      margin-right: 0;\r\n    }\r\n  }\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    @media (max-width: 758px) {\r\n      flex-direction: row;\r\n      justify-content: space-around;\r\n    }\r\n    @media (max-width: 600px) {\r\n      flex-wrap: wrap;\r\n      justify-content: space-between;\r\n    }\r\n    @media (max-width: 400px) {\r\n      justify-content: flex-start;\r\n    }\r\n  }\r\n  &__item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    @media (max-width: 595px) {\r\n      width: 45%;\r\n    }\r\n    @media (max-width: 400px) {\r\n      width: auto;\r\n    }\r\n    @media (max-width: 500px) {\r\n      &:nth-child(3) {\r\n        order: -2;\r\n      }\r\n      &:nth-child(4) {\r\n        order: -1;\r\n      }\r\n      &:nth-child(1) {\r\n        order: -1;\r\n      }\r\n    }\r\n  }\r\n  &__img-rocket {\r\n    max-width: 17px;\r\n  }\r\n  &__buttons {\r\n    max-width: 180px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    @media (max-width: 1269px) {\r\n      gap: 20px;\r\n      margin: 0 auto;\r\n      flex-direction: row;\r\n      max-width: none;\r\n    }\r\n    @media (max-width: 500px) {\r\n      gap: 10px;\r\n    }\r\n    @media (max-width: 408px) {\r\n      flex-direction: column;\r\n    }\r\n  }\r\n  &__btn {\r\n    color: $color-white;\r\n    width: 100%;\r\n    border-radius: 10px;\r\n    background-color: $btn-primary;\r\n    padding: 18px;\r\n    @media (max-width: 700px) {\r\n      padding: 15px 48px;\r\n    }\r\n    @media (max-width: 428px) {\r\n      font-size: 12px;\r\n    }\r\n    &--grey {\r\n      background-color: $border-primary;\r\n      color: $btn-secondary;\r\n    }\r\n  }\r\n}\r\n\r\n.bonus-content-info {\r\n  max-width: 272px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  @media (max-width: 1078px) {\r\n    order: 1;\r\n    margin: auto;\r\n  }\r\n  @media (max-width: 600px) {\r\n    max-width: none;\r\n  }\r\n  &__img {\r\n    max-width: 33px;\r\n  }\r\n  &__btn {\r\n    color: $color-main;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0;\r\n    background-color: inherit;\r\n    @media (max-width: 428px) {\r\n      font-size: 13px;\r\n    }\r\n    &::before,\r\n    &::after {\r\n      content: \"\";\r\n      width: 86px;\r\n      height: 2px;\r\n      flex-shrink: 0;\r\n      background-color: $modifier-line;\r\n      @media (max-width: 600px) {\r\n        width: 40%;\r\n      }\r\n      @media (max-width: 550px) {\r\n        width: 37%;\r\n      }\r\n      @media (max-width: 400px) {\r\n        width: 35%;\r\n      }\r\n      @media (max-width: 370px) {\r\n        width: 33%;\r\n      }\r\n    }\r\n  }\r\n  &__img-check {\r\n    max-width: 15px;\r\n    transition: 0.3s;\r\n    &.active {\r\n      transform: rotate(-180deg);\r\n    }\r\n  }\r\n}\r\n\r\n.bonus-content-payments {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  gap: 20px;\r\n  @media (max-width: 1078px) {\r\n    display: none;\r\n  }\r\n  &--moby {\r\n    display: none;\r\n    @media (max-width: 1078px) {\r\n      display: flex;\r\n      width: 100%;\r\n    }\r\n    @media (max-width: 500px) {\r\n      gap: 14px;\r\n    }\r\n    @media (max-width: 427px) {\r\n      gap: 10px;\r\n    }\r\n  }\r\n  &__item {\r\n    width: 53px;\r\n    height: 34px;\r\n    border-radius: 5px;\r\n    background-color: $background-cards-light;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    @media (max-width: 407px) {\r\n      width: 38px;\r\n      height: 23px;\r\n    }\r\n    &--moby {\r\n      @media (max-width: 660px) {\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n  &__img {\r\n    max-width: calc(100% - 20px);\r\n  }\r\n}\r\n\r\n.bonus-accordion {\r\n  padding: 0px 15px;\r\n  background-color: $background-accordion;\r\n  display: flex;\r\n  border-radius: 0px 0px 15px 15px;\r\n  transform: scaleY(0);\r\n  opacity: 0;\r\n  transition: 0.5s;\r\n  transform-origin: top center;\r\n  height: 0;\r\n  overflow: hidden;\r\n  @media (max-width: 1078px) {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    gap: 15px;\r\n  }\r\n  @media (max-width: 500px) {\r\n    padding: 10px !important;\r\n  }\r\n  @media (max-width: 407px) {\r\n    gap: 10px;\r\n  }\r\n  &.active {\r\n    padding: 15px;\r\n    transform: scaleY(1);\r\n    opacity: 1;\r\n    height: auto;\r\n  }\r\n  &__text {\r\n    max-width: 446px;\r\n    line-height: 25px;\r\n    margin-right: 20px;\r\n    @media (max-width: 1078px) {\r\n      margin-right: 0;\r\n      max-width: none;\r\n      width: 100%;\r\n      text-align: center;\r\n    }\r\n    @media (max-width: 600px) {\r\n      line-height: 20px;\r\n    }\r\n    @media (max-width: 500px) {\r\n      text-align: left;\r\n      font-size: 12px;\r\n    }\r\n    @media (max-width: 407px) {\r\n      font-size: 10px;\r\n      line-height: 15px;\r\n    }\r\n  }\r\n  &__list {\r\n    border-radius: 15px;\r\n    border: 2px solid $border-primary;\r\n    padding: 15px;\r\n    max-width: 404px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    gap: 12px;\r\n    @media (max-width: 947px) {\r\n      margin: auto;\r\n    }\r\n    @media (max-width: 500px) {\r\n      max-width: none;\r\n      padding: 10px;\r\n    }\r\n    &--margin {\r\n      margin-right: 16px;\r\n      @media (max-width: 1078px) {\r\n        margin-right: 0;\r\n      }\r\n      @media (max-width: 947px) {\r\n        margin: auto;\r\n      }\r\n      @media (max-width: 600px) {\r\n        gap: 10px;\r\n      }\r\n    }\r\n  }\r\n  &__item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    @media (max-width: 500px) {\r\n      font-size: 12px;\r\n    }\r\n  }\r\n  &__img {\r\n    max-width: 25px;\r\n    @media (max-width: 500px) {\r\n      max-width: 15px;\r\n    }\r\n  }\r\n}\r\n",".pari-match {\r\n  padding-top: 16px;\r\n  &__container {\r\n    display: grid;\r\n    grid-template-columns: 9fr 3fr;\r\n    grid-gap: 15px;\r\n    @media (max-width: 1254px) {\r\n      grid-template-columns: none;\r\n    }\r\n  }\r\n}\r\n\r\n.pari-match-body {\r\n  background: $background-logo;\r\n  border-radius: 15px;\r\n  display: flex;\r\n  @media (max-width: 950px) {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n  }\r\n  &__left {\r\n    max-width: 662px;\r\n    width: 100%;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 24px;\r\n    @media (max-width: 1395px) {\r\n      max-width: none;\r\n      width: 70%;\r\n    }\r\n    @media (max-width: 950px) {\r\n      width: 100%;\r\n    }\r\n    @media (max-width: 526px) {\r\n      gap: 15px;\r\n    }\r\n    @media (max-width: 450px) {\r\n      padding: 10px;\r\n    }\r\n  }\r\n  &__head {\r\n    max-width: 662px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    gap: 20px;\r\n    @media (max-width: 1254px) {\r\n      justify-content: flex-start;\r\n    }\r\n    @media (max-width: 526px) {\r\n      gap: 10px;\r\n    }\r\n  }\r\n  &__photo {\r\n    padding: 41px;\r\n    border-radius: 15px;\r\n    background: $background-logo-light;\r\n    max-width: 217px;\r\n    @media (max-width: 640px) {\r\n      padding: 34px 14px;\r\n    }\r\n    @media (max-width: 526px) {\r\n      padding: 34px 14px;\r\n    }\r\n    @media (max-width: 400px) {\r\n      padding: 28px 11px;\r\n    }\r\n  }\r\n  &__photo-img {\r\n    max-width: 130px;\r\n    @media (max-width: 526px) {\r\n      max-width: 89px;\r\n    }\r\n    @media (max-width: 400px) {\r\n      max-width: 52px;\r\n    }\r\n  }\r\n  &__header {\r\n    max-width: 385px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n  }\r\n  &__title {\r\n    color: $color-white;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    @media (max-width: 526px) {\r\n      font-size: 16px;\r\n    }\r\n    @media (max-width: 400px) {\r\n      font-size: 14px;\r\n    }\r\n  }\r\n  &__grade {\r\n    max-width: 112px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 5px;\r\n    @media (max-width: 640px) {\r\n      order: 1;\r\n      margin: 8px 57px 15px 0;\r\n    }\r\n    @media (max-width: 400px) {\r\n      margin: 10px 0 0;\r\n    }\r\n  }\r\n  &__number {\r\n    color: $color-white;\r\n    font-weight: 500;\r\n  }\r\n  &__block-stars {\r\n    max-width: 85px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  &__img-star {\r\n    max-width: 17px;\r\n  }\r\n  &__entertainment {\r\n    width: 100%;\r\n    margin-top: 15px;\r\n    @media (max-width: 640px) {\r\n      margin-top: 5px;\r\n    }\r\n    @media (max-width: 526px) {\r\n      font-size: 12px;\r\n    }\r\n    @media (max-width: 400px) {\r\n      font-size: 10px;\r\n    }\r\n  }\r\n  &__points {\r\n    display: flex;\r\n    gap: 40px;\r\n    @media (max-width: 1294px) {\r\n      gap: 18px;\r\n    }\r\n    @media (max-width: 950px) {\r\n      justify-content: space-between;\r\n    }\r\n  }\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    &--moby {\r\n      @media (max-width: 640px) {\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n  &__item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    &--moby {\r\n      display: none;\r\n      @media (max-width: 640px) {\r\n        display: flex;\r\n      }\r\n    }\r\n  }\r\n  &__img-rocket {\r\n    max-width: 17px;\r\n    @media (max-width: 526px) {\r\n      max-width: 14px;\r\n    }\r\n  }\r\n  &__desc {\r\n    color: $color-secondary;\r\n    @media (max-width: 526px) {\r\n      font-size: 12px;\r\n      color: $color-secondary-light;\r\n    }\r\n  }\r\n  &__right {\r\n    border-radius: 15px;\r\n    background: url(\"../image/pari-match_white.svg\") top center no-repeat,\r\n      $background-logo;\r\n    padding: 114px 20px 20px;\r\n    @media (max-width: 1395px) {\r\n      max-width: none;\r\n      width: 30%;\r\n    }\r\n    @media (max-width: 1340px) {\r\n      width: 34%;\r\n    }\r\n    @media (max-width: 950px) {\r\n      display: none;\r\n    }\r\n    &--moby {\r\n      display: none;\r\n      @media (max-width: 950px) {\r\n        display: block;\r\n        border-radius: 15px;\r\n        background: $background-logo;\r\n        padding: 10px;\r\n      }\r\n    }\r\n  }\r\n  &__inner {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n  }\r\n  &__block {\r\n    max-width: 127px;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: space-between;\r\n    @media (max-width: 526px) {\r\n      max-width: none;\r\n      justify-content: flex-start;\r\n      align-items: center;\r\n      gap: 5px;\r\n    }\r\n  }\r\n  &__image {\r\n    max-width: 17px;\r\n    @media (max-width: 640px) {\r\n      max-width: 14px;\r\n    }\r\n  }\r\n  &__gratters {\r\n    font-weight: 500;\r\n    background: $color-gold;\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    @media (max-width: 526px) {\r\n      font-size: 12px;\r\n    }\r\n  }\r\n  &__bonus {\r\n    color: $color-white;\r\n    font-size: 24px;\r\n    font-weight: 700;\r\n    @media (max-width: 526px) {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n  &__description {\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n  }\r\n  &__btn {\r\n    border-radius: 10px;\r\n    background: $btn-primary;\r\n    color: $color-white;\r\n    padding: 17px 0;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    @media (max-width: 526px) {\r\n      font-size: 12px;\r\n      padding: 15px 0;\r\n    }\r\n  }\r\n}\r\n\r\n.pari-match-body-case {\r\n  max-width: 190px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  @media (max-width: 640px) {\r\n    order: 2;\r\n    flex-direction: row-reverse;\r\n  }\r\n  @media (max-width: 427px) {\r\n    display: none;\r\n  }\r\n  &--moby {\r\n    display: none;\r\n    @media (max-width: 427px) {\r\n      display: flex;\r\n      order: 0;\r\n    }\r\n  }\r\n  &__item {\r\n    max-width: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 10px;\r\n  }\r\n  &__img {\r\n    max-width: 20px;\r\n  }\r\n}\r\n\r\n.pari-match-body-payment {\r\n  display: flex;\r\n  gap: 10px;\r\n  @media (max-width: 1254px) {\r\n    justify-content: space-between;\r\n  }\r\n  @media (max-width: 640px) {\r\n    flex-wrap: wrap;\r\n  }\r\n  @media (max-width: 427px) {\r\n    gap: 4px;\r\n  }\r\n  &__item {\r\n    border-radius: 5px;\r\n    background: $background-cards;\r\n    width: 69px;\r\n    height: 44px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    @media (max-width: 1366px) {\r\n      width: 58px;\r\n    }\r\n    @media (max-width: 526px) {\r\n      width: 53px;\r\n    }\r\n    @media (max-width: 427px) {\r\n      width: 43px;\r\n      height: 27px;\r\n    }\r\n    &--moby {\r\n      display: none;\r\n      @media (max-width: 640px) {\r\n        display: flex;\r\n      }\r\n    }\r\n  }\r\n  &__img {\r\n    max-width: 44px;\r\n    @media (max-width: 526px) {\r\n      max-width: calc(100% - 18px);\r\n    }\r\n  }\r\n}\r\n\r\n.pari-match-info {\r\n  background-color: $background-section;\r\n  border-radius: 15px;\r\n  padding: 20px;\r\n  @media (max-width: 450px) {\r\n    padding: 10px;\r\n  }\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 26px;\r\n    @media (max-width: 600px) {\r\n      gap: 22px;\r\n    }\r\n  }\r\n  &__item {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 10px;\r\n  }\r\n  &__img {\r\n    max-width: 23px;\r\n    @media (max-width: 600px) {\r\n      max-width: 31px;\r\n    }\r\n    @media (max-width: 400px) {\r\n      max-width: 27px;\r\n    }\r\n  }\r\n  &__block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    @media (max-width: 600px) {\r\n      gap: 2px;\r\n    }\r\n  }\r\n  &__title {\r\n    color: $color-black;\r\n    font-weight: 500;\r\n    @media (max-width: 600px) {\r\n      font-size: 12px;\r\n    }\r\n  }\r\n  &__text {\r\n    @media (max-width: 400px) {\r\n      font-size: 13px;\r\n    }\r\n  }\r\n}\r\n\r\n.pari-match-comment {\r\n  background-color: $background-section;\r\n  border-radius: 15px;\r\n  padding: 20px;\r\n  @media (max-width: 400px) {\r\n    padding: 10px;\r\n  }\r\n  &__inner {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n  }\r\n  &__header {\r\n    max-width: 167px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 10px;\r\n    @media (max-width: 500px) {\r\n      justify-content: flex-start;\r\n    }\r\n  }\r\n  &__block {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  &__img {\r\n    max-width: 31px;\r\n  }\r\n  &__title {\r\n    color: $color-title;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    @media (max-width: 600px) {\r\n      font-size: 14px;\r\n    }\r\n    @media (max-width: 400px) {\r\n      font-size: 10px;\r\n    }\r\n  }\r\n  &__text {\r\n    color: $color-title;\r\n    font-size: 12px;\r\n    @media (max-width: 500px) {\r\n      font-size: 10px;\r\n    }\r\n  }\r\n  &__desc {\r\n    color: $color-text-light;\r\n    font-size: 16px;\r\n    line-height: 25px;\r\n    @media (max-width: 600px) {\r\n      font-size: 12px;\r\n      line-height: 20px;\r\n    }\r\n    @media (max-width: 400px) {\r\n      line-height: 17px;\r\n    }\r\n  }\r\n}\r\n",".rates {\r\n  &__container {\r\n    @media (max-width: 530px) {\r\n      overflow: auto;\r\n      &::-webkit-scrollbar {\r\n        height: 4px;\r\n        background-color: $background-main-table;\r\n      }\r\n      &::-webkit-scrollbar-thumb {\r\n        background-color: $background-line-table;\r\n        border-radius: 9px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.rates-table {\r\n  background-color: $background-main-table;\r\n  border-radius: 6px;\r\n  width: 100%;\r\n  font-weight: 500;\r\n  line-height: 20px;\r\n  color: $color-black;\r\n  border-spacing: 8px 4px;\r\n  border-collapse: collapse;\r\n  font-family: \"Montserrat\", serif;\r\n  @media (max-width: 530px) {\r\n    width: 477px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  &__tr {\r\n    background-color: $background-main;\r\n    color: $color-black;\r\n    border-bottom: 1px solid #f5f5f5;\r\n    &--primary {\r\n      background-color: $background-line-table;\r\n      color: $color-white;\r\n      border-bottom: 1px solid $background-row-table;\r\n    }\r\n    &--head {\r\n      background-color: transparent;\r\n    }\r\n  }\r\n  &__td-team {\r\n    width: 610px;\r\n    padding: 10px 0 10px 10px;\r\n    @media (max-width: 400px) {\r\n      width: 140px;\r\n    }\r\n  }\r\n  &__td-points {\r\n    width: 28px;\r\n    text-align: center;\r\n    &--indent {\r\n      padding-right: 6px;\r\n    }\r\n  }\r\n  &__td-statistics {\r\n    padding: 0 0 0 30px;\r\n    width: 160px;\r\n    &--head {\r\n      padding: 0 0 0 40px;\r\n    }\r\n  }\r\n  &__td-item {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px 0 10px 10px;\r\n  }\r\n  &__img {\r\n    max-width: 24px;\r\n    margin-right: 10px;\r\n  }\r\n  &__link {\r\n    margin-right: 50px;\r\n    text-decoration: underline;\r\n    @media (max-width: 700px) {\r\n      margin-right: 20px;\r\n    }\r\n    @media (max-width: 400px) {\r\n      display: none;\r\n    }\r\n    &--short {\r\n      display: none;\r\n      @media (max-width: 400px) {\r\n        display: block;\r\n        margin-right: 30px;\r\n      }\r\n    }\r\n  }\r\n  &__check {\r\n    max-width: 14px;\r\n    transition: 0.3s;\r\n    &.active {\r\n      transform: rotate(180deg);\r\n    }\r\n  }\r\n  &__results {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 4px;\r\n  }\r\n\r\n  &__hidden {\r\n    display: none;\r\n    &.show {\r\n      display: table-row;\r\n    }\r\n  }\r\n\r\n  &__btn {\r\n    cursor: pointer;\r\n    background: transparent;\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n.rates-table-circle {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50px;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  color: $color-white;\r\n  &--underline {\r\n    position: relative;\r\n    &::after {\r\n      position: absolute;\r\n      content: \"\";\r\n      display: block;\r\n      width: 100%;\r\n      height: 1px;\r\n      border-radius: 4px;\r\n      background-color: $background-main;\r\n      left: 0;\r\n      bottom: -5px;\r\n    }\r\n  }\r\n\r\n  &--red {\r\n    background-color: $background-circle-red;\r\n  }\r\n  &--greeen {\r\n    background-color: $background-circle-greeen;\r\n  }\r\n  &--grey {\r\n    background-color: $background-circle-grey;\r\n  }\r\n}\r\n\r\n.rates-internal-table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  &__tr {\r\n    background-color: $background-third-table;\r\n    color: $color-black;\r\n  }\r\n  &__td-first {\r\n    padding: 10px 0 10px 10px;\r\n    width: 340px;\r\n    @media (max-width: 850px) {\r\n      width: 230px;\r\n    }\r\n    @media (max-width: 700px) {\r\n      width: 200px;\r\n    }\r\n    @media (max-width: 700px) {\r\n      width: 220px;\r\n    }\r\n    @media (max-width: 640px) {\r\n      width: 160px;\r\n    }\r\n    @media (max-width: 550px) {\r\n      width: 130px;\r\n    }\r\n  }\r\n  &__td-left {\r\n    padding: 10px 0 10px 10px;\r\n  }\r\n  &__td-right {\r\n    width: 310px;\r\n    @media (max-width: 700px) {\r\n      width: 250px;\r\n    }\r\n  }\r\n  &__block {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n  }\r\n  &__img {\r\n    max-width: 20px;\r\n  }\r\n  &__desc {\r\n    text-decoration: underline;\r\n  }\r\n  &__link {\r\n    text-decoration: underline;\r\n    @media (max-width: 640px) {\r\n      display: none;\r\n    }\r\n    &--moby {\r\n      display: none;\r\n      @media (max-width: 640px) {\r\n        display: block;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./image/bonus_signboard.svg */ "./src/image/bonus_signboard.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./image/bonus_img-fire.svg */ "./src/image/bonus_img-fire.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./image/bonus_img-star.svg */ "./src/image/bonus_img-star.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./image/bonus_img-logo.svg */ "./src/image/bonus_img-logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./image/bonus-content_img-present.svg */ "./src/image/bonus-content_img-present.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./image/bonus-content_img-rocket.svg */ "./src/image/bonus-content_img-rocket.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./image/payments_img-masterrcard.svg */ "./src/image/payments_img-masterrcard.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./image/payments_img-Discover.svg */ "./src/image/payments_img-Discover.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./image/payments_img-America-Express.svg */ "./src/image/payments_img-America-Express.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./image/payments_img-maestro.svg */ "./src/image/payments_img-maestro.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./image/payments_img-unionPay.svg */ "./src/image/payments_img-unionPay.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./image/payments_img-JCB.svg */ "./src/image/payments_img-JCB.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./image/payments_img-check.svg */ "./src/image/payments_img-check.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./image/bonus-accordion_img-like.svg */ "./src/image/bonus-accordion_img-like.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./image/bonus-accordion_img-dislike.svg */ "./src/image/bonus-accordion_img-dislike.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./image/bonus_signboard-orange.svg */ "./src/image/bonus_signboard-orange.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>TestBiggico</title>\r\n  </head>\r\n  <body>\r\n    <section class=\"bonus\">\r\n      <div class=\"container bonus__container\">\r\n        <header class=\"bonus__header bonus-header\">\r\n          <div class=\"bonus__signboard bonus-signboard\">\r\n            <h3 class=\"bonus-signboard__text\">BEST BONUS</h3>\r\n            <img\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\r\n              alt=\"\"\r\n              class=\"bonus-signboard__img\"\r\n            />\r\n          </div>\r\n          <div class=\"bonus-header__company\">\r\n            <span class=\"bonus-header__number\">1</span>\r\n            <img\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n              alt=\"\"\r\n              class=\"bonus-header__img-fire\"\r\n            />\r\n            <span class=\"bonus-header__text\">BWIN</span>\r\n          </div>\r\n          <div class=\"bonus-header__assessment\">\r\n            <span class=\"bonus-header__numbers\">5.0</span>\r\n            <div class=\"bonus-header__block\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star bonus-header__img-star--media\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </header>\r\n        <div class=\"bonus__content bonus-content\">\r\n          <div class=\"bonus-content__case\">\r\n            <a href=\"#\" class=\"bonus-content__logo\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content__logo-img\"\r\n              />\r\n            </a>\r\n            <div class=\"bonus-content__bonus\">\r\n              <div class=\"bonus-content__head\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-present\"\r\n                />\r\n                <h4 class=\"bonus-content__title\">Welcome bonus</h4>\r\n              </div>\r\n              <p class=\"bonus-content__subtitle\">100% Up to 500 $</p>\r\n              <p class=\"bonus-content__text\">\r\n                Lorem ipsum dolor sit amet consectetur adipiscing elit lacus\r\n                tempor, vulputate id fames pulvinar curabitur faucibus.\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"bonus-content__offers\">\r\n            <ul class=\"bonus-content__list\">\r\n              <li class=\"bonus-content__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-rocket\"\r\n                />\r\n                <span class=\"bonus-content__text\">Best odds</span>\r\n              </li>\r\n              <li class=\"bonus-content__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-rocket\"\r\n                />\r\n                <span class=\"bonus-content__text\">Casino</span>\r\n              </li>\r\n              <li class=\"bonus-content__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-rocket\"\r\n                />\r\n                <span class=\"bonus-content__text\">200+ Paymenth Method</span>\r\n              </li>\r\n              <li class=\"bonus-content__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-rocket\"\r\n                />\r\n                <span class=\"bonus-content__text\">Fast Payouts</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"bonus-content__info bonus-content-info\">\r\n            <ul class=\"bonus-content-payments\">\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n            </ul>\r\n            <button class=\"bonus-content-info__btn\">\r\n              <span>More info</span>\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-info__img-check\"\r\n              />\r\n            </button>\r\n          </div>\r\n          <div class=\"bonus-content__buttons\">\r\n            <button class=\"bonus-content__btn\">Claim bonus</button>\r\n            <button class=\"bonus-content__btn bonus-content__btn--grey\">\r\n              Read Review\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"bonus__accordion bonus-accordion\">\r\n          <ul class=\"bonus-content-payments bonus-content-payments--moby\">\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li\r\n              class=\"bonus-content-payments__item bonus-content-payments__item--moby\"\r\n            >\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li\r\n              class=\"bonus-content-payments__item bonus-content-payments__item--moby\"\r\n            >\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n          </ul>\r\n          <p class=\"bonus-accordion__text\">\r\n            Potenti placerat in tempor aliquet ut porta fringilla inceptos,\r\n            massa senectus lacus volutpat morbi felis ultrices, cras nullam\r\n            commodo nulla litora phasellus ornare. Lorem ipsum dolor proin id\r\n            fames pulvinar curabitur faucibus. Potenti placerat in tempor\r\n            aliquet ut porta fringilla inceptos, massa senectus lacus volutpat\r\n            morbi felis ultrices, cras nullam commodo nulla litora phasellus\r\n            ornare. Lorem ipsum dolor proin id fames pulvinar curabitur\r\n            faucibus.\r\n          </p>\r\n          <ul class=\"bonus-accordion__list bonus-accordion__list--margin\">\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet consectetur adipiscing</span\r\n              >\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\">Lorem ipsum adipiscing</span>\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet adipiscing.</span\r\n              >\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet consectetur adipiscing</span\r\n              >\r\n            </li>\r\n          </ul>\r\n          <ul class=\"bonus-accordion__list\">\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet consectetur adipiscing</span\r\n              >\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\">Lorem ipsum adipiscing</span>\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet adipiscing.</span\r\n              >\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet consectetur adipiscing</span\r\n              >\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"bonus\">\r\n      <div class=\"container bonus__container\">\r\n        <header class=\"bonus__header bonus-header\">\r\n          <div class=\"bonus__signboard bonus-signboard\">\r\n            <h3 class=\"bonus-signboard__text\">BEST BONUS</h3>\r\n            <img\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\"\r\n              alt=\"\"\r\n              class=\"bonus-signboard__img\"\r\n            />\r\n          </div>\r\n          <div class=\"bonus-header__company\">\r\n            <span class=\"bonus-header__number\">2</span>\r\n            <img\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n              alt=\"\"\r\n              class=\"bonus-header__img-fire\"\r\n            />\r\n            <span class=\"bonus-header__text\">BWIN</span>\r\n          </div>\r\n          <div class=\"bonus-header__assessment\">\r\n            <span class=\"bonus-header__numbers\">5.0</span>\r\n            <div class=\"bonus-header__block\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </header>\r\n        <div class=\"bonus__content bonus-content\">\r\n          <div class=\"bonus-content__case\">\r\n            <a href=\"#\" class=\"bonus-content__logo\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content__logo-img\"\r\n              />\r\n            </a>\r\n            <div class=\"bonus-content__bonus\">\r\n              <div class=\"bonus-content__head\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-present\"\r\n                />\r\n                <h4 class=\"bonus-content__title\">Welcome bonus</h4>\r\n              </div>\r\n              <p class=\"bonus-content__subtitle\">100% Up to 500 $</p>\r\n              <p class=\"bonus-content__text\">\r\n                Lorem ipsum dolor sit amet consectetur adipiscing elit lacus\r\n                tempor, vulputate id fames pulvinar curabitur faucibus.\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"bonus-content__offers\">\r\n            <ul class=\"bonus-content__list\">\r\n              <li class=\"bonus-content__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-rocket\"\r\n                />\r\n                <span class=\"bonus-content__text\">Best odds</span>\r\n              </li>\r\n              <li class=\"bonus-content__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-rocket\"\r\n                />\r\n                <span class=\"bonus-content__text\">Casino</span>\r\n              </li>\r\n              <li class=\"bonus-content__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-rocket\"\r\n                />\r\n                <span class=\"bonus-content__text\">200+ Paymenth Method</span>\r\n              </li>\r\n              <li class=\"bonus-content__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-rocket\"\r\n                />\r\n                <span class=\"bonus-content__text\">Fast Payouts</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"bonus-content__info bonus-content-info\">\r\n            <ul class=\"bonus-content-payments\">\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n            </ul>\r\n            <button class=\"bonus-content-info__btn\">\r\n              <span>More info</span>\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-info__img-check\"\r\n              />\r\n            </button>\r\n          </div>\r\n          <div class=\"bonus-content__buttons\">\r\n            <button class=\"bonus-content__btn\">Claim bonus</button>\r\n            <button class=\"bonus-content__btn bonus-content__btn--grey\">\r\n              Read Review\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"bonus__accordion bonus-accordion\">\r\n          <ul class=\"bonus-content-payments bonus-content-payments--moby\">\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li\r\n              class=\"bonus-content-payments__item bonus-content-payments__item--moby\"\r\n            >\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li\r\n              class=\"bonus-content-payments__item bonus-content-payments__item--moby\"\r\n            >\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n          </ul>\r\n          <p class=\"bonus-accordion__text\">\r\n            Potenti placerat in tempor aliquet ut porta fringilla inceptos,\r\n            massa senectus lacus volutpat morbi felis ultrices, cras nullam\r\n            commodo nulla litora phasellus ornare. Lorem ipsum dolor proin id\r\n            fames pulvinar curabitur faucibus. Potenti placerat in tempor\r\n            aliquet ut porta fringilla inceptos, massa senectus lacus volutpat\r\n            morbi felis ultrices, cras nullam commodo nulla litora phasellus\r\n            ornare. Lorem ipsum dolor proin id fames pulvinar curabitur\r\n            faucibus.\r\n          </p>\r\n          <ul class=\"bonus-accordion__list bonus-accordion__list--margin\">\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet consectetur adipiscing</span\r\n              >\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\">Lorem ipsum adipiscing</span>\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet adipiscing.</span\r\n              >\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet consectetur adipiscing</span\r\n              >\r\n            </li>\r\n          </ul>\r\n          <ul class=\"bonus-accordion__list\">\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet consectetur adipiscing</span\r\n              >\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\">Lorem ipsum adipiscing</span>\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet adipiscing.</span\r\n              >\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet consectetur adipiscing</span\r\n              >\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"bonus\">\r\n      <div class=\"container bonus__container\">\r\n        <header class=\"bonus__header bonus-header\">\r\n          <div class=\"bonus-header__company\">\r\n            <span class=\"bonus-header__number\">3</span>\r\n            <img\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n              alt=\"\"\r\n              class=\"bonus-header__img-fire\"\r\n            />\r\n            <span class=\"bonus-header__text\">BWIN</span>\r\n          </div>\r\n          <div class=\"bonus-header__assessment\">\r\n            <span class=\"bonus-header__numbers\">5.0</span>\r\n            <div class=\"bonus-header__block\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-header__img-star\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </header>\r\n        <div class=\"bonus__content bonus-content\">\r\n          <div class=\"bonus-content__case\">\r\n            <a href=\"#\" class=\"bonus-content__logo\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content__logo-img\"\r\n              />\r\n            </a>\r\n            <div class=\"bonus-content__bonus\">\r\n              <div class=\"bonus-content__head\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-present\"\r\n                />\r\n                <h4 class=\"bonus-content__title\">Welcome bonus</h4>\r\n              </div>\r\n              <p class=\"bonus-content__subtitle\">100% Up to 500 $</p>\r\n              <p class=\"bonus-content__text\">\r\n                Lorem ipsum dolor sit amet consectetur adipiscing elit lacus\r\n                tempor, vulputate id fames pulvinar curabitur faucibus.\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"bonus-content__offers\">\r\n            <ul class=\"bonus-content__list\">\r\n              <li class=\"bonus-content__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-rocket\"\r\n                />\r\n                <span class=\"bonus-content__text\">Best odds</span>\r\n              </li>\r\n              <li class=\"bonus-content__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-rocket\"\r\n                />\r\n                <span class=\"bonus-content__text\">Casino</span>\r\n              </li>\r\n              <li class=\"bonus-content__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-rocket\"\r\n                />\r\n                <span class=\"bonus-content__text\">200+ Paymenth Method</span>\r\n              </li>\r\n              <li class=\"bonus-content__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content__img-rocket\"\r\n                />\r\n                <span class=\"bonus-content__text\">Fast Payouts</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"bonus-content__info bonus-content-info\">\r\n            <ul class=\"bonus-content-payments\">\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n              <li class=\"bonus-content-payments__item\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                  alt=\"\"\r\n                  class=\"bonus-content-payments__img\"\r\n                />\r\n              </li>\r\n            </ul>\r\n            <button class=\"bonus-content-info__btn\">\r\n              <span>More info</span>\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-info__img-check\"\r\n              />\r\n            </button>\r\n          </div>\r\n          <div class=\"bonus-content__buttons\">\r\n            <button class=\"bonus-content__btn\">Claim bonus</button>\r\n            <button class=\"bonus-content__btn bonus-content__btn--grey\">\r\n              Read Review\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"bonus__accordion bonus-accordion\">\r\n          <ul class=\"bonus-content-payments bonus-content-payments--moby\">\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li class=\"bonus-content-payments__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li\r\n              class=\"bonus-content-payments__item bonus-content-payments__item--moby\"\r\n            >\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n            <li\r\n              class=\"bonus-content-payments__item bonus-content-payments__item--moby\"\r\n            >\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-content-payments__img\"\r\n              />\r\n            </li>\r\n          </ul>\r\n          <p class=\"bonus-accordion__text\">\r\n            Potenti placerat in tempor aliquet ut porta fringilla inceptos,\r\n            massa senectus lacus volutpat morbi felis ultrices, cras nullam\r\n            commodo nulla litora phasellus ornare. Lorem ipsum dolor proin id\r\n            fames pulvinar curabitur faucibus. Potenti placerat in tempor\r\n            aliquet ut porta fringilla inceptos, massa senectus lacus volutpat\r\n            morbi felis ultrices, cras nullam commodo nulla litora phasellus\r\n            ornare. Lorem ipsum dolor proin id fames pulvinar curabitur\r\n            faucibus.\r\n          </p>\r\n          <ul class=\"bonus-accordion__list bonus-accordion__list--margin\">\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet consectetur adipiscing</span\r\n              >\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\">Lorem ipsum adipiscing</span>\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet adipiscing.</span\r\n              >\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet consectetur adipiscing</span\r\n              >\r\n            </li>\r\n          </ul>\r\n          <ul class=\"bonus-accordion__list\">\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet consectetur adipiscing</span\r\n              >\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\">Lorem ipsum adipiscing</span>\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet adipiscing.</span\r\n              >\r\n            </li>\r\n            <li class=\"bonus-accordion__item\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                alt=\"\"\r\n                class=\"bonus-accordion__img\"\r\n              />\r\n              <span class=\"bonus-accordion__desc\"\r\n                >Lorem ipsum dolor sit amet consectetur adipiscing</span\r\n              >\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!../postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../sass-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/image/bonus-accordion_img-dislike.svg":
/*!***************************************************!*\
  !*** ./src/image/bonus-accordion_img-dislike.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bonus-accordion_img-dislike.svg";

/***/ }),

/***/ "./src/image/bonus-accordion_img-like.svg":
/*!************************************************!*\
  !*** ./src/image/bonus-accordion_img-like.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bonus-accordion_img-like.svg";

/***/ }),

/***/ "./src/image/bonus-content_img-present.svg":
/*!*************************************************!*\
  !*** ./src/image/bonus-content_img-present.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bonus-content_img-present.svg";

/***/ }),

/***/ "./src/image/bonus-content_img-rocket.svg":
/*!************************************************!*\
  !*** ./src/image/bonus-content_img-rocket.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bonus-content_img-rocket.svg";

/***/ }),

/***/ "./src/image/bonus_img-fire.svg":
/*!**************************************!*\
  !*** ./src/image/bonus_img-fire.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bonus_img-fire.svg";

/***/ }),

/***/ "./src/image/bonus_img-logo.svg":
/*!**************************************!*\
  !*** ./src/image/bonus_img-logo.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bonus_img-logo.svg";

/***/ }),

/***/ "./src/image/bonus_img-star.svg":
/*!**************************************!*\
  !*** ./src/image/bonus_img-star.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bonus_img-star.svg";

/***/ }),

/***/ "./src/image/bonus_signboard-orange.svg":
/*!**********************************************!*\
  !*** ./src/image/bonus_signboard-orange.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bonus_signboard-orange.svg";

/***/ }),

/***/ "./src/image/bonus_signboard.svg":
/*!***************************************!*\
  !*** ./src/image/bonus_signboard.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bonus_signboard.svg";

/***/ }),

/***/ "./src/image/pari-match_white.svg":
/*!****************************************!*\
  !*** ./src/image/pari-match_white.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/pari-match_white.svg";

/***/ }),

/***/ "./src/image/payments_img-America-Express.svg":
/*!****************************************************!*\
  !*** ./src/image/payments_img-America-Express.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/payments_img-America-Express.svg";

/***/ }),

/***/ "./src/image/payments_img-Discover.svg":
/*!*********************************************!*\
  !*** ./src/image/payments_img-Discover.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/payments_img-Discover.svg";

/***/ }),

/***/ "./src/image/payments_img-JCB.svg":
/*!****************************************!*\
  !*** ./src/image/payments_img-JCB.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/payments_img-JCB.svg";

/***/ }),

/***/ "./src/image/payments_img-check.svg":
/*!******************************************!*\
  !*** ./src/image/payments_img-check.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/payments_img-check.svg";

/***/ }),

/***/ "./src/image/payments_img-maestro.svg":
/*!********************************************!*\
  !*** ./src/image/payments_img-maestro.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/payments_img-maestro.svg";

/***/ }),

/***/ "./src/image/payments_img-masterrcard.svg":
/*!************************************************!*\
  !*** ./src/image/payments_img-masterrcard.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/payments_img-masterrcard.svg";

/***/ }),

/***/ "./src/image/payments_img-unionPay.svg":
/*!*********************************************!*\
  !*** ./src/image/payments_img-unionPay.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/payments_img-unionPay.svg";

/***/ }),

/***/ "./src/fonts/Montserrat/AnyConv.com__Montserrat-Medium.woff":
/*!******************************************************************!*\
  !*** ./src/fonts/Montserrat/AnyConv.com__Montserrat-Medium.woff ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/AnyConv.com__Montserrat-Medium..woff";

/***/ }),

/***/ "./src/fonts/Montserrat/AnyConv.com__Montserrat-Medium.woff2":
/*!*******************************************************************!*\
  !*** ./src/fonts/Montserrat/AnyConv.com__Montserrat-Medium.woff2 ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/AnyConv.com__Montserrat-Medium..woff2";

/***/ }),

/***/ "./src/fonts/Montserrat/AnyConv.com__Montserrat-SemiBold.woff":
/*!********************************************************************!*\
  !*** ./src/fonts/Montserrat/AnyConv.com__Montserrat-SemiBold.woff ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/AnyConv.com__Montserrat-SemiBold..woff";

/***/ }),

/***/ "./src/fonts/Montserrat/AnyConv.com__Montserrat-SemiBold.woff2":
/*!*********************************************************************!*\
  !*** ./src/fonts/Montserrat/AnyConv.com__Montserrat-SemiBold.woff2 ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/AnyConv.com__Montserrat-SemiBold..woff2";

/***/ }),

/***/ "./src/fonts/Rubik/AnyConv.com__Rubik-Bold.woff":
/*!******************************************************!*\
  !*** ./src/fonts/Rubik/AnyConv.com__Rubik-Bold.woff ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/AnyConv.com__Rubik-Bold..woff";

/***/ }),

/***/ "./src/fonts/Rubik/AnyConv.com__Rubik-Bold.woff2":
/*!*******************************************************!*\
  !*** ./src/fonts/Rubik/AnyConv.com__Rubik-Bold.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/AnyConv.com__Rubik-Bold..woff2";

/***/ }),

/***/ "./src/fonts/Rubik/AnyConv.com__Rubik-Medium.woff":
/*!********************************************************!*\
  !*** ./src/fonts/Rubik/AnyConv.com__Rubik-Medium.woff ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/AnyConv.com__Rubik-Medium..woff";

/***/ }),

/***/ "./src/fonts/Rubik/AnyConv.com__Rubik-Medium.woff2":
/*!*********************************************************!*\
  !*** ./src/fonts/Rubik/AnyConv.com__Rubik-Medium.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/AnyConv.com__Rubik-Medium..woff2";

/***/ }),

/***/ "./src/fonts/Rubik/AnyConv.com__Rubik-Regular.woff":
/*!*********************************************************!*\
  !*** ./src/fonts/Rubik/AnyConv.com__Rubik-Regular.woff ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/AnyConv.com__Rubik-Regular..woff";

/***/ }),

/***/ "./src/fonts/Rubik/AnyConv.com__Rubik-Regular.woff2":
/*!**********************************************************!*\
  !*** ./src/fonts/Rubik/AnyConv.com__Rubik-Regular.woff2 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/AnyConv.com__Rubik-Regular..woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/


__webpack_require__(/*! ./noConflict */ "./node_modules/@babel/polyfill/lib/noConflict.js");

var _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ "./node_modules/core-js/library/fn/global.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _js_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/common.js */ "./src/js/common.js");
/* harmony import */ var _js_common_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_common_js__WEBPACK_IMPORTED_MODULE_3__);




})();

/******/ })()
;
//# sourceMappingURL=main.868b7a16f093bd35068d.js.map