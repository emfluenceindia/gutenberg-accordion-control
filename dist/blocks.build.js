/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__includes_container__ = __webpack_require__(/*! ./includes/container */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__includes_content__ = __webpack_require__(/*! ./includes/content */ 5);\n/**\n * BLOCK: accordion-control\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGFjY29yZGlvbi1jb250cm9sXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuaW1wb3J0IHsgYWNjb3JkaW9uQ29udGFpbmVyIH0gZnJvbSAnLi9pbmNsdWRlcy9jb250YWluZXInO1xuaW1wb3J0IHsgYWNjb3JkaW9uSXRlbSB9IGZyb20gJy4vaW5jbHVkZXMvY29udGVudCc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*****************************************!*\
  !*** ./src/block/includes/container.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * BLOCK: accordion-group\n * Description: can contain multiple accordion-content\n */\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\n\n\nfunction emfl_accordion_container() {\n    registerBlockType('emfl/accordion-group', {\n        title: __('Accordion'),\n        icon: 'feedback',\n        category: 'layout',\n        keywords: [__('Accordion'), __('Accordion Group'), __('Accordion Control')],\n        attributes: {},\n\n        edit: function edit(props) {\n            return wp.element.createElement(\n                'div',\n                { className: props.className },\n                wp.element.createElement(\n                    'div',\n                    { className: 'accord-group' },\n                    wp.element.createElement(InnerBlocks, { allowedBlocks: ['emfl/accordion-content'] })\n                )\n            );\n        },\n\n        save: function save(props) {\n            return wp.element.createElement(\n                'div',\n                { className: props.className },\n                wp.element.createElement(\n                    'div',\n                    { className: 'emfl-accord-item-group' },\n                    wp.element.createElement(InnerBlocks.Content, null)\n                )\n            );\n        }\n    });\n}\n\n/* unused harmony default export */ var _unused_webpack_default_export = (emfl_accordion_container());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9pbmNsdWRlcy9jb250YWluZXIuanM/YjI5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBhY2NvcmRpb24tZ3JvdXBcbiAqIERlc2NyaXB0aW9uOiBjYW4gY29udGFpbiBtdWx0aXBsZSBhY2NvcmRpb24tY29udGVudFxuICovXG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgSW5uZXJCbG9ja3MgPSB3cC5ibG9ja0VkaXRvci5Jbm5lckJsb2NrcztcblxuXG5mdW5jdGlvbiBlbWZsX2FjY29yZGlvbl9jb250YWluZXIoKSB7XG4gICAgcmVnaXN0ZXJCbG9ja1R5cGUoJ2VtZmwvYWNjb3JkaW9uLWdyb3VwJywge1xuICAgICAgICB0aXRsZTogX18oJ0FjY29yZGlvbicpLFxuICAgICAgICBpY29uOiAnZmVlZGJhY2snLFxuICAgICAgICBjYXRlZ29yeTogJ2xheW91dCcsXG4gICAgICAgIGtleXdvcmRzOiBbX18oJ0FjY29yZGlvbicpLCBfXygnQWNjb3JkaW9uIEdyb3VwJyksIF9fKCdBY2NvcmRpb24gQ29udHJvbCcpXSxcbiAgICAgICAgYXR0cmlidXRlczoge30sXG5cbiAgICAgICAgZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG4gICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdhY2NvcmQtZ3JvdXAnIH0sXG4gICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2NrcywgeyBhbGxvd2VkQmxvY2tzOiBbJ2VtZmwvYWNjb3JkaW9uLWNvbnRlbnQnXSB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG4gICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdlbWZsLWFjY29yZC1pdGVtLWdyb3VwJyB9LFxuICAgICAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVtZmxfYWNjb3JkaW9uX2NvbnRhaW5lcigpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2luY2x1ZGVzL2NvbnRhaW5lci5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***************************************!*\
  !*** ./src/block/includes/content.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * BLOCK: accordion-control\n * Uses: Heading, core/list, core/paragraph\n * Place this block inside accordion-group block to create an item\n */\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar RichText = wp.editor.RichText;\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\n\n\nfunction emfl_accordion_control() {\n\n    registerBlockType('emfl/accordion-content', {\n        title: __('Accordion Item'),\n        icon: 'menu-alt',\n        category: 'layout',\n        parent: ['emfl/accordion-group'],\n        keywords: [],\n        attributes: {\n            itemHeading: {\n                type: 'string',\n                source: 'text',\n                selector: 'a',\n                default: ''\n            }\n        },\n\n        edit: function edit(props) {\n\n            var itemHeading = props.attributes.itemHeading;\n\n            function onChangeItemHeading(content) {\n                props.setAttributes({ itemHeading: content });\n            }\n\n            return wp.element.createElement(\n                'div',\n                { className: props.className },\n                wp.element.createElement(\n                    'div',\n                    { className: 'accord-item-container' },\n                    wp.element.createElement(RichText, {\n                        tagName: 'a',\n                        className: 'accord-item-heading',\n                        value: itemHeading,\n                        onChange: onChangeItemHeading,\n                        placeholder: __('Add item heading')\n                    }),\n                    wp.element.createElement(\n                        'div',\n                        { className: 'accord-content' },\n                        wp.element.createElement(InnerBlocks, { allowedBlocks: ['core/paragraph', 'core/list', 'core/image', 'core/video', 'core/html'] })\n                    )\n                )\n            );\n        },\n\n        save: function save(props) {\n            return wp.element.createElement(\n                'div',\n                { className: props.className },\n                wp.element.createElement(\n                    'div',\n                    { className: 'emfl-accord-item' },\n                    wp.element.createElement(\n                        'div',\n                        { className: 'emfl-item-heading' },\n                        props.attributes.itemHeading ? wp.element.createElement(RichText.Content, { tagName: 'a', value: props.attributes.itemHeading }) : \"Item Heading\"\n                    ),\n                    wp.element.createElement(\n                        'div',\n                        { className: 'emfl-item-content' },\n                        wp.element.createElement(InnerBlocks.Content, null)\n                    )\n                )\n            );\n        }\n    });\n}\n\n/* unused harmony default export */ var _unused_webpack_default_export = (emfl_accordion_control());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9pbmNsdWRlcy9jb250ZW50LmpzPzJjY2MiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCTE9DSzogYWNjb3JkaW9uLWNvbnRyb2xcbiAqIFVzZXM6IEhlYWRpbmcsIGNvcmUvbGlzdCwgY29yZS9wYXJhZ3JhcGhcbiAqIFBsYWNlIHRoaXMgYmxvY2sgaW5zaWRlIGFjY29yZGlvbi1ncm91cCBibG9jayB0byBjcmVhdGUgYW4gaXRlbVxuICovXG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgUmljaFRleHQgPSB3cC5lZGl0b3IuUmljaFRleHQ7XG52YXIgSW5uZXJCbG9ja3MgPSB3cC5ibG9ja0VkaXRvci5Jbm5lckJsb2NrcztcblxuXG5mdW5jdGlvbiBlbWZsX2FjY29yZGlvbl9jb250cm9sKCkge1xuXG4gICAgcmVnaXN0ZXJCbG9ja1R5cGUoJ2VtZmwvYWNjb3JkaW9uLWNvbnRlbnQnLCB7XG4gICAgICAgIHRpdGxlOiBfXygnQWNjb3JkaW9uIEl0ZW0nKSxcbiAgICAgICAgaWNvbjogJ21lbnUtYWx0JyxcbiAgICAgICAgY2F0ZWdvcnk6ICdsYXlvdXQnLFxuICAgICAgICBwYXJlbnQ6IFsnZW1mbC9hY2NvcmRpb24tZ3JvdXAnXSxcbiAgICAgICAga2V5d29yZHM6IFtdLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBpdGVtSGVhZGluZzoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYScsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cbiAgICAgICAgICAgIHZhciBpdGVtSGVhZGluZyA9IHByb3BzLmF0dHJpYnV0ZXMuaXRlbUhlYWRpbmc7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uQ2hhbmdlSXRlbUhlYWRpbmcoY29udGVudCkge1xuICAgICAgICAgICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBpdGVtSGVhZGluZzogY29udGVudCB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG4gICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdhY2NvcmQtaXRlbS1jb250YWluZXInIH0sXG4gICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYWNjb3JkLWl0ZW0taGVhZGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbUhlYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2VJdGVtSGVhZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfXygnQWRkIGl0ZW0gaGVhZGluZycpXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnYWNjb3JkLWNvbnRlbnQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIHsgYWxsb3dlZEJsb2NrczogWydjb3JlL3BhcmFncmFwaCcsICdjb3JlL2xpc3QnLCAnY29yZS9pbWFnZScsICdjb3JlL3ZpZGVvJywgJ2NvcmUvaHRtbCddIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZW1mbC1hY2NvcmQtaXRlbScgfSxcbiAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2VtZmwtaXRlbS1oZWFkaW5nJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuYXR0cmlidXRlcy5pdGVtSGVhZGluZyA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7IHRhZ05hbWU6ICdhJywgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuaXRlbUhlYWRpbmcgfSkgOiBcIkl0ZW0gSGVhZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdlbWZsLWl0ZW0tY29udGVudCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbWZsX2FjY29yZGlvbl9jb250cm9sKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svaW5jbHVkZXMvY29udGVudC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);