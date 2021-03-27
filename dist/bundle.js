/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slider)
/* harmony export */ });
function slider() {

    const sliderWrapper = document.querySelector(".slider__wrapper");
    const slide = document.querySelector(".slide");
    const slidesCount = document.querySelectorAll(".slide").length;
    
    const width = parseInt(window.getComputedStyle(slide).width);
    const marginRight = parseInt(window.getComputedStyle(slide).marginRight);
 
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    
    
    let fullWidth = width + marginRight + 4;
    let offset = 0;

    nextBtn.addEventListener("click", () => {
        offset += fullWidth;
        sliderWrapper.style.transform = `translateX(-${offset}px)`;
        checkNextBtn();
        checkPrevBtn();

    });
    prevBtn.addEventListener("click", () => {
        offset -= fullWidth
        sliderWrapper.style.transform = `translateX(-${offset}px)`;
        checkNextBtn();
        checkPrevBtn();

    });

    function checkNextBtn() {
        if (offset === fullWidth * (slidesCount - 2)) {
            nextBtn.style.display = "none";
        } else if (offset < fullWidth * (slidesCount - 2)) {
            nextBtn.style.display = "block";
        }
    }
    function checkPrevBtn() {
        if (offset === 0) {
            prevBtn.style.display = "none";
        } else if (offset > 0) {
            prevBtn.style.display = "block";
        }
    }

    checkPrevBtn();
}

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./src/sass/style.sass":
/*!************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./src/sass/style.sass ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Nunito:ital,wght@0,400;0,600;0,700;1,300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: \"Nunito\", \"Montserrat\", sans-serif;\n}\n\n.container {\n  width: 1400px;\n  margin: 0 auto;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.section {\n  color: #415167;\n  text-align: center;\n}\n.section__subtitle {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n}\n.section__title {\n  padding-top: 6px;\n  font-family: Montserrat;\n  font-weight: 900;\n  font-size: 30px;\n  line-height: 34px;\n}\n\n.header {\n  display: flex;\n}\n.header__main {\n  position: relative;\n}\n.header__main .logo {\n  position: absolute;\n  width: 109px;\n  height: 36px;\n  left: 137px;\n  top: 74px;\n}\n.header__main .title {\n  position: absolute;\n  width: 470px;\n  left: 145px;\n  top: 503px;\n  font-family: Montserrat;\n  font-size: 54px;\n  line-height: 70px;\n  color: #415167;\n}\n.header__main .title span {\n  background-color: #C7A17A;\n  padding: 0 15px;\n  margin-left: -15px;\n  font-family: Montserrat;\n  color: #EDF0F5;\n}\n.header__main .img {\n  padding-left: 384px;\n  height: 100%;\n}\n.header__main .img img {\n  max-width: 754.84px;\n  max-height: 947px;\n}\n.header__menu {\n  width: 100%;\n  padding: 85px 129px 89px 58px;\n  background-color: #415167;\n}\n.header__menu__cart {\n  position: relative;\n}\n.header__menu__cart::after {\n  content: \"2\";\n  position: absolute;\n  left: 15px;\n  bottom: 20px;\n  width: 20px;\n  height: 20px;\n  font-size: 14px;\n  text-align: center;\n  border-radius: 50%;\n  color: #F9FBFF;\n  background-color: #C7A17A;\n}\n.header__menu__list {\n  margin-top: 105px;\n  color: #EDF0F5;\n}\n.header__menu__list li {\n  margin-bottom: 7px;\n  padding: 10px 0;\n}\n.header__menu__list li:hover {\n  font-weight: 700;\n  margin-right: -3px;\n  cursor: pointer;\n}\n\n.personalize {\n  padding: 80px 0 128px 0;\n}\n.personalize .card-list {\n  display: flex;\n  margin-top: 90px;\n  padding-left: 148px;\n}\n.personalize .card-list .card {\n  max-width: 227px;\n  margin-right: 65px;\n}\n.personalize .card-list .card:nth-child(1) {\n  margin-right: 67px;\n}\n.personalize .card-list .card:nth-child(2) {\n  margin-top: 2px;\n}\n.personalize .card-list .card__title {\n  margin-top: 35px;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n}\n.personalize .card-list .card__description {\n  margin-top: 12px;\n  line-height: 22px;\n}\n\n.product {\n  display: flex;\n  max-width: 564px;\n  margin: 0px 0px 30px 0px;\n  background-color: #fff;\n}\n.product__img {\n  width: 231px;\n  height: 258px;\n}\n.product__info {\n  padding: 45px 53px 42px 47px;\n  text-align: left;\n  line-height: 22px;\n}\n.product__info__price {\n  font-weight: 600;\n  font-size: 20px;\n  color: #C7A17A;\n}\n.product__info__title {\n  margin-top: 8px;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  color: #232C38;\n}\n.product__info__description {\n  margin-top: 24px;\n  font-weight: 300;\n  font-size: 16px;\n}\n.product__info__buy {\n  display: inline-block;\n  margin-top: 35px;\n  padding: 5px 24px;\n  background-color: #C7A17A;\n  font-weight: bold;\n  font-size: 16px;\n  text-align: center;\n  border-radius: 19px;\n  color: #F9FBFF;\n  cursor: pointer;\n}\n.product__info__adv {\n  display: inline-block;\n  margin-left: 24px;\n  font-weight: bold;\n  font-size: 16px;\n  color: #415167;\n  cursor: pointer;\n}\n\n.favorite {\n  position: relative;\n  padding: 88px 0 126px 0;\n  background: linear-gradient(to right, #415167 0% 382px, #F2F2F2 382px 100%);\n  overflow: hidden;\n}\n.favorite::after, .favorite::before {\n  content: \" \";\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  width: 100px;\n  height: 100%;\n  background-color: #F2F2F2;\n  opacity: 0.8;\n}\n.favorite::before {\n  left: 0px;\n  background-color: #415167;\n  z-index: 1;\n}\n.favorite .slider {\n  position: relative;\n  margin: 70px 0 0 130px;\n}\n.favorite .slider .next-btn, .favorite .slider .prev-btn {\n  position: absolute;\n  left: 1158px;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 12px 10px 10px 10px;\n  background-color: #C7A17A;\n  border-radius: 100%;\n  z-index: 10;\n  cursor: pointer;\n}\n.favorite .slider .prev-btn {\n  left: -50px;\n  transform: scale(-1, 1) translateY(-50%);\n}\n.favorite .slider__wrapper {\n  display: flex;\n  width: 4000px;\n  transition: 1s all;\n}\n.favorite .slider__wrapper .slide {\n  margin-right: 29px;\n  margin-bottom: -30px;\n}", "",{"version":3,"sources":["webpack://./src/sass/_general.sass","webpack://./src/sass/style.sass","webpack://./src/sass/_variables.sass","webpack://./src/sass/_header.sass","webpack://./src/sass/_personalize.sass","webpack://./src/sass/_product.sass","webpack://./src/sass/favorite.sass"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Nunito:ital,wght@0,400;0,600;0,700;1,300&display=swap')\r\n\r\n*\r\n    font-family: 'Nunito', 'Montserrat', sans-serif\r\n.container\r\n    width: 1400px\r\n    margin: 0 auto\r\nul\r\n    padding: 0\r\n    margin: 0\r\n    list-style: none\r\n\r\n.section\r\n    color: $primary\r\n    text-align: center\r\n    &__subtitle\r\n        font-weight: 600\r\n        font-size: 20px\r\n        line-height: 24px   \r\n    &__title\r\n        padding-top: 6px\r\n        font-family: Montserrat\r\n        font-weight: 900\r\n        font-size: 30px\r\n        line-height: 34px","@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Nunito:ital,wght@0,400;0,600;0,700;1,300&display=swap\");\n* {\n  font-family: \"Nunito\", \"Montserrat\", sans-serif;\n}\n\n.container {\n  width: 1400px;\n  margin: 0 auto;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.section {\n  color: #415167;\n  text-align: center;\n}\n.section__subtitle {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n}\n.section__title {\n  padding-top: 6px;\n  font-family: Montserrat;\n  font-weight: 900;\n  font-size: 30px;\n  line-height: 34px;\n}\n\n.header {\n  display: flex;\n}\n.header__main {\n  position: relative;\n}\n.header__main .logo {\n  position: absolute;\n  width: 109px;\n  height: 36px;\n  left: 137px;\n  top: 74px;\n}\n.header__main .title {\n  position: absolute;\n  width: 470px;\n  left: 145px;\n  top: 503px;\n  font-family: Montserrat;\n  font-size: 54px;\n  line-height: 70px;\n  color: #415167;\n}\n.header__main .title span {\n  background-color: #C7A17A;\n  padding: 0 15px;\n  margin-left: -15px;\n  font-family: Montserrat;\n  color: #EDF0F5;\n}\n.header__main .img {\n  padding-left: 384px;\n  height: 100%;\n}\n.header__main .img img {\n  max-width: 754.84px;\n  max-height: 947px;\n}\n.header__menu {\n  width: 100%;\n  padding: 85px 129px 89px 58px;\n  background-color: #415167;\n}\n.header__menu__cart {\n  position: relative;\n}\n.header__menu__cart::after {\n  content: \"2\";\n  position: absolute;\n  left: 15px;\n  bottom: 20px;\n  width: 20px;\n  height: 20px;\n  font-size: 14px;\n  text-align: center;\n  border-radius: 50%;\n  color: #F9FBFF;\n  background-color: #C7A17A;\n}\n.header__menu__list {\n  margin-top: 105px;\n  color: #EDF0F5;\n}\n.header__menu__list li {\n  margin-bottom: 7px;\n  padding: 10px 0;\n}\n.header__menu__list li:hover {\n  font-weight: 700;\n  margin-right: -3px;\n  cursor: pointer;\n}\n\n.personalize {\n  padding: 80px 0 128px 0;\n}\n.personalize .card-list {\n  display: flex;\n  margin-top: 90px;\n  padding-left: 148px;\n}\n.personalize .card-list .card {\n  max-width: 227px;\n  margin-right: 65px;\n}\n.personalize .card-list .card:nth-child(1) {\n  margin-right: 67px;\n}\n.personalize .card-list .card:nth-child(2) {\n  margin-top: 2px;\n}\n.personalize .card-list .card__title {\n  margin-top: 35px;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n}\n.personalize .card-list .card__description {\n  margin-top: 12px;\n  line-height: 22px;\n}\n\n.product {\n  display: flex;\n  max-width: 564px;\n  margin: 0px 0px 30px 0px;\n  background-color: #fff;\n}\n.product__img {\n  width: 231px;\n  height: 258px;\n}\n.product__info {\n  padding: 45px 53px 42px 47px;\n  text-align: left;\n  line-height: 22px;\n}\n.product__info__price {\n  font-weight: 600;\n  font-size: 20px;\n  color: #C7A17A;\n}\n.product__info__title {\n  margin-top: 8px;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  color: #232C38;\n}\n.product__info__description {\n  margin-top: 24px;\n  font-weight: 300;\n  font-size: 16px;\n}\n.product__info__buy {\n  display: inline-block;\n  margin-top: 35px;\n  padding: 5px 24px;\n  background-color: #C7A17A;\n  font-weight: bold;\n  font-size: 16px;\n  text-align: center;\n  border-radius: 19px;\n  color: #F9FBFF;\n  cursor: pointer;\n}\n.product__info__adv {\n  display: inline-block;\n  margin-left: 24px;\n  font-weight: bold;\n  font-size: 16px;\n  color: #415167;\n  cursor: pointer;\n}\n\n.favorite {\n  position: relative;\n  padding: 88px 0 126px 0;\n  background: linear-gradient(to right, #415167 0% 382px, #F2F2F2 382px 100%);\n  overflow: hidden;\n}\n.favorite::after, .favorite::before {\n  content: \" \";\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  width: 100px;\n  height: 100%;\n  background-color: #F2F2F2;\n  opacity: 0.8;\n}\n.favorite::before {\n  left: 0px;\n  background-color: #415167;\n  z-index: 1;\n}\n.favorite .slider {\n  position: relative;\n  margin: 70px 0 0 130px;\n}\n.favorite .slider .next-btn, .favorite .slider .prev-btn {\n  position: absolute;\n  left: 1158px;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 12px 10px 10px 10px;\n  background-color: #C7A17A;\n  border-radius: 100%;\n  z-index: 10;\n  cursor: pointer;\n}\n.favorite .slider .prev-btn {\n  left: -50px;\n  transform: scale(-1, 1) translateY(-50%);\n}\n.favorite .slider__wrapper {\n  display: flex;\n  width: 4000px;\n  transition: 1s all;\n}\n.favorite .slider__wrapper .slide {\n  margin-right: 29px;\n  margin-bottom: -30px;\n}","$primary: #415167\r\n$accent: #C7A17A\r\n$dark: #151D28\r\n$light: #EDF0F5",".header\r\n\tdisplay: flex\r\n\t&__main\r\n\t\tposition: relative\r\n\t\t.logo\r\n\t\t\tposition: absolute\r\n\t\t\twidth: 109px\r\n\t\t\theight: 36px\r\n\t\t\tleft: 137px\r\n\t\t\ttop: 74px\r\n\t\t.title\r\n\t\t\tposition: absolute\r\n\t\t\twidth: 470px\r\n\t\t\tleft: 145px\r\n\t\t\ttop: 503px\r\n\t\t\tfont-family: Montserrat\r\n\t\t\tfont-size: 54px\r\n\t\t\tline-height: 70px\r\n\t\t\tcolor: $primary\r\n\t\t\tspan\r\n\t\t\t\tbackground-color: $accent\r\n\t\t\t\tpadding: 0 15px \r\n\t\t\t\tmargin-left: -15px\r\n\t\t\t\tfont-family: Montserrat\r\n\t\t\t\tcolor: $light\r\n\t\t.img\r\n\t\t\tpadding-left: 384px\r\n\t\t\theight: 100%\r\n\t\t\timg\r\n\t\t\t\tmax-width: 754.84px\r\n\t\t\t\tmax-height: 947px\r\n\t&__menu\r\n\t\twidth: 100%\r\n\t\tpadding: 85px 129px 89px 58px\r\n\t\tbackground-color: $primary\r\n\t\t&__cart\r\n\t\t\tposition: relative\r\n\t\t\t&::after\r\n\t\t\t\tcontent: \"2\"\r\n\t\t\t\tposition: absolute\r\n\t\t\t\tleft: 15px\r\n\t\t\t\tbottom: 20px\r\n\t\t\t\twidth: 20px\r\n\t\t\t\theight: 20px\r\n\t\t\t\tfont-size: 14px\r\n\t\t\t\ttext-align: center\r\n\t\t\t\tborder-radius: 50%\r\n\t\t\t\tcolor: #F9FBFF\r\n\t\t\t\tbackground-color: $accent\r\n\t\t&__list\r\n\t\t\tmargin-top: 105px\r\n\t\t\tcolor: $light\r\n\t\t\tli\r\n\t\t\t\tmargin-bottom: 7px\r\n\t\t\t\tpadding: 10px 0\r\n\t\t\t\t&:hover\r\n\t\t\t\t\tfont-weight: 700\r\n\t\t\t\t\tmargin-right: -3px\r\n\t\t\t\t\tcursor: pointer\r\n\r\n\r\n\r\n\r\n",".personalize\r\n\tpadding: 80px 0 128px 0\r\n\t.card-list\r\n\t\tdisplay: flex\r\n\t\tmargin-top: 90px\r\n\t\tpadding-left: 148px\r\n\t\t.card\r\n\t\t\tmax-width: 227px\r\n\t\t\tmargin-right: 65px\r\n\t\t\t&:nth-child(1)\r\n\t\t\t\tmargin-right: 67px\r\n\t\t\t&:nth-child(2)\r\n\t\t\t\tmargin-top: 2px\r\n\t\t\t\t\r\n\t\t\t&__title\r\n\t\t\t\tmargin-top: 35px\r\n\t\t\t\tfont-weight: bold\r\n\t\t\t\tfont-size: 24px\r\n\t\t\t\tline-height: 28px\r\n\t\t\t&__description\r\n\t\t\t\tmargin-top: 12px\r\n\t\t\t\tline-height: 22px\r\n\r\n",".product\r\n    display: flex\r\n    max-width: 564px \r\n    margin:0px 0px 30px 0px \r\n    background-color: #fff\r\n    &__img\r\n        width: 231px\r\n        height: 258px\r\n    &__info\r\n        padding: 45px 53px 42px 47px\r\n        text-align: left\r\n        line-height: 22px\r\n        &__price\r\n            font-weight: 600\r\n            font-size: 20px\r\n            color: $accent\r\n        &__title\r\n            margin-top: 8px\r\n            font-weight: bold\r\n            font-size: 24px\r\n            line-height: 28px\r\n            color: #232C38\r\n        &__description\r\n            margin-top: 24px\r\n            font-weight: 300\r\n            font-size: 16px\r\n        &__buy\r\n            display: inline-block\r\n            margin-top: 35px\r\n            padding: 5px 24px \r\n            background-color: $accent\r\n            font-weight: bold\r\n            font-size: 16px\r\n            text-align: center\r\n            border-radius: 19px\r\n            color: #F9FBFF\r\n            cursor: pointer\r\n        &__adv\r\n            display: inline-block\r\n            margin-left: 24px\r\n            font-weight: bold\r\n            font-size: 16px\r\n            color: $primary\r\n            cursor: pointer",".favorite\r\n\tposition: relative\r\n\tpadding: 88px 0 126px 0\r\n\tbackground: linear-gradient(to right, $primary 0% 382px, #F2F2F2 382px 100%)\r\n\toverflow: hidden\r\n\t&::after, &::before\r\n\t\tcontent: \" \"\r\n\t\tposition: absolute\r\n\t\tright: 0px\r\n\t\ttop: 0px\r\n\t\twidth: 100px\r\n\t\theight: 100%\r\n\t\tbackground-color:  #F2F2F2\r\n\t\topacity: .8\r\n\t&::before\r\n\t\tleft: 0px\r\n\t\tbackground-color:  $primary\r\n\t\tz-index: 1\r\n\t.slider\r\n\t\tposition: relative\r\n\t\tmargin: 70px 0 0 130px\r\n\t\t.next-btn, .prev-btn\r\n\t\t\tposition: absolute\r\n\t\t\tleft: 1158px\r\n\t\t\ttop: 50%\r\n\t\t\ttransform: translateY(-50%)\r\n\t\t\tpadding: 12px 10px 10px 10px\r\n\t\t\tbackground-color: $accent\r\n\t\t\tborder-radius: 100%\r\n\t\t\tz-index: 10\r\n\t\t\tcursor: pointer\r\n\t\t.prev-btn\r\n\t\t\tleft: -50px\r\n\t\t\ttransform: scale(-1, 1) translateY(-50%)\r\n\t\t&__wrapper\r\n\t\t\tdisplay: flex\r\n\t\t\twidth: 4000px\r\n\t\t\ttransition: 1s all\r\n\t\t\t.slide\r\n\t\t\t\tmargin-right: 29px\r\n\t\t\t\tmargin-bottom: -30px"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/style.sass":
/*!*****************************!*\
  !*** ./src/sass/style.sass ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.sass */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./src/sass/style.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.sass */ "./src/sass/style.sass");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./src/js/slider.js");



window.addEventListener("DOMContentLoaded", (e) => {
    (0,_slider__WEBPACK_IMPORTED_MODULE_1__.default)()
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map