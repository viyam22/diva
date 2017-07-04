webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/2.jpg";

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_index_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_photoList_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_photoList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_photoList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_info_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_photoIndex_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_photoIndex_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_photoIndex_vue__);







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'index',
    component: __WEBPACK_IMPORTED_MODULE_2__views_index_vue___default.a
  }, {
    path: '/photo',
    name: 'photo',
    component: __WEBPACK_IMPORTED_MODULE_3__views_photoList_vue___default.a
  }, {
    path: '/art',
    name: 'art',
    component: __WEBPACK_IMPORTED_MODULE_3__views_photoList_vue___default.a
  }, {
    path: '/project',
    name: 'project',
    component: __WEBPACK_IMPORTED_MODULE_3__views_photoList_vue___default.a
  }, {
    path: '/info',
    name: 'info',
    component: __WEBPACK_IMPORTED_MODULE_4__views_info_vue___default.a
  }, {
    path: '/photoindex/:name/:length',
    name: 'photoindex',
    component: __WEBPACK_IMPORTED_MODULE_5__views_photoIndex_vue___default.a
  }]
}));

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(22)
  __webpack_require__(23)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(42),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_navbar_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_navbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_navbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_album_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_album_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_album_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  data() {
    return {
      hide: true
    };
  },
  watch: {},
  created() {
    BUS.$on('showAlbum', () => {
      this.hide = !this.hide;
    });
  },
  components: {
    navbar: __WEBPACK_IMPORTED_MODULE_0__components_navbar_vue___default.a,
    album: __WEBPACK_IMPORTED_MODULE_1__components_album_vue___default.a
  }

});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  props: ['hide'],
  methods: {
    showAlbum() {
      BUS.$emit('showAlbum');
    }
  }

});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['hide'],
  watch: {
    // '$route'(to, from) {
    //   if (to.name === 'info' && to.name !== from.name && this.hide === true) {
    //     setTimeout(function() {
    //     }, 1000);
    //   }
    // }
  },
  methods: {
    showAlbum() {
      BUS.$emit('showAlbum');
    },
    toIndex() {
      if (this.$route.name === 'index') return;
      if (this.hide === false) {
        this.$router.push('');
      } else {
        setTimeout(() => {
          this.$router.push({ name: 'index' });
          BUS.$emit('showAlbum');
        }, 1000);
      }
    },
    toInfo() {
      if (this.$route.name === 'info') return;
      if (this.hide === false) {
        this.$router.push({ name: 'info' });
      } else {
        setTimeout(() => {
          this.$router.push({ name: 'info' });
          BUS.$emit('showAlbum');
        }, 1000);
      }
    }
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created() {
    console.log(this.$route);
  },
  computed: {
    photosName() {
      return this.$route.params.name;
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__photos_js__ = __webpack_require__(15);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
    photoData() {
      return __WEBPACK_IMPORTED_MODULE_0__photos_js__["a" /* default */][this.$route.name];
    }
  }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mint_ui__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
window.BUS = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]();

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_mint_ui__["Lazyload"]);
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  photo: {
    url: 'http://oqwhnnwix.bkt.clouddn.com/',
    left: [{
      name: 'left/1',
      length: 2
    }, {
      name: 'left/2',
      length: 2
    }, {
      name: 'left/3',
      length: 2
    }, {
      name: 'left/4',
      length: 2
    }, {
      name: 'left/5',
      length: 2
    }, {
      name: 'left/6',
      length: 2
    }, {
      name: 'left/7',
      length: 2
    }, {
      name: 'left/8',
      length: 2
    }],
    center: [{
      name: 'center/1',
      length: 2
    }, {
      name: 'center/2',
      length: 2
    }, {
      name: 'center/3',
      length: 2
    }, {
      name: 'center/4',
      length: 2
    }, {
      name: 'center/5',
      length: 2
    }, {
      name: 'center/6',
      length: 2
    }, {
      name: 'center/7',
      length: 2
    }, {
      name: 'center/8',
      length: 2
    }, {
      name: 'center/9',
      length: 2
    }],
    right: [{
      name: 'right/1',
      length: 2
    }, {
      name: 'right/2',
      length: 2
    }, {
      name: 'right/3',
      length: 2
    }, {
      name: 'right/4',
      length: 2
    }, {
      name: 'right/5',
      length: 2
    }, {
      name: 'right/6',
      length: 2
    }, {
      name: 'right/7',
      length: 2
    }, {
      name: 'right/8',
      length: 2
    }]
  },
  art: {},
  project: {}
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/info.jpg";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/1.jpg";

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAQAAAAHUWYVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAABBVSURBVHja7V15fFXFGT0Twk6IbEHZEYMEMQQRUeGHKVZUXHDDukGVWtygBVRsXVEBhdJfW/cFqyIiLrUqtbRQccGtKlRBqYgiIUhUoChqjCCc/hHgvZfcZebO3DuPMOev9+6788355rx77yzffBdwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcMgSCNsEsg1sgSIUoid6oRgdPE/5Hq9iMd7AErHZNts6Cw7i5ZxPddzBgbRNvq6BjTk8ghTpeIaldPcaEyB4oaYYKdzKzrb92cNB8E/G5KjGIvax7dUeDINXRzreYrFtz/ZIsFUsclTjKbaPxirHdrNYxIgYbZ+OdRzPXPWCe3HfgJ9g/5ir+B4DxH/UiuzNV0jccgCNsZTXqV0ne/MVktSIbjWOEutkT96br5CKhOrZH+X8iezJe7Mg9ydY1yJebNvdrAe7xNjt9cJ0N70SAk5NWJKHWM+2z1kN1uO8hCWZw735IREO5nCSR7PN5aE1zuvEgbyUzxuQ5DY3XR8CduBVXEZyO+/iSewRcvb+HMMNWpKMse1xHQQ783oNSQba5l8nQcGhLI8oSUvb7Oss2J/vRRDkGdu86zQ4gF8rS3K8t60sH6qwI/ZFHhrgR2xBmfjCNh9fnvVwMe5QLNREfG+bt5xzeRzCGfzU83+1mqPY3DZDH96F/ErpGrnKNuNwl0okx863sY1trp78G/FBJUla2Wbs78rBvE3xHhznel90P8BfK/hws22+Xi7kc7SiFLtwX3ZOQ/AMBR+y6/bLzrwzohjVuMe2Bz5+nSDtwWjbXFOku/EJLTGqcYZhVi04ijP5To1aVvFBXsi+8tPnPFXag2y4ytmeswyIUY2mBnkNCa1tEydSai2el0jyL7EtRhPP+dXo+KUxZgOl61zNYyXs3Sdl6067cgwzKgZJbjOzDsfGivVuZL8Qiw25ScpSRlRKgncwduJreMa42Vx0M2JniOL5rfAWpweF+IgfcLiUpe7pXxIShIKjUYYjYzF+ohErAyKUuRJLmO//s1iFsRJWjoulVYLAjnzX+K0qhRVGON4csfYNQWMJ1pOw8EHScpwZoxjVqG+AZXgPyw9Lg25cvEzCQoPkxGjKR2OXg2xtgGlDjfonB9htLVG+U1JyFCUgBkkeaIRtPw0GvQPsLg4tPTh1doSAeWkHz8CT8VnPgJEFUfE2i/ECUvPI7+J9fIGtyEcRwkJBn2Khb+97BsLW0IuwKOYWokg0CE21yxrEvBuP4cEex9twTCCHI3wttgjlH/fgkE25IEE5SDMdXxm/7vbl8FJAufUh/F+Il3YBv0xUDtYMa4vVu4m+LHyXm3hDCP81cRLumrAYZKKrCoTvLLXvzHPoLNm21LmGR+rsgdXJNc5ObMOW5CoTwCU+P430LfRRiNG0rpVRQXgw/ptQu6TjfvnZRR7AUzidSz3+pW/wavaVibsVmzDF84eTfNc2/mehVQD2sXCzIslhoczqcRBvCX20VuMWtg2157ezxLf7ze+DK41Djr6W5CALA1gVcSIrlC1eEbyOR+FTrpdvidcSFsSiHGQLT0b9Arqo4XjP2+pu694TQr7ztpwtK4iRZwj74B3jGsujsgabAt5E4i3o7OorRkWgJK94HvXP3hD8FPkq9dGAICzGUn0rGkjzgd05E1/gOgNWG2JxwCzuKs+j/uF7WwPrKk991J7LYhHeM+C+Dip5IdahG4biBKN2D8JVPv0pwDvKOM/XVvAE+yepj5qCsBuMLA9pYmZMdidzlij3/OVbz6P+6zLB058rUx+1bllsj49jaopswW99ju/wPPqjr52ugbWYEYStIJ0wYo/FJWzmebyR59HvfO0Ez7alPZEiC8JmSHot2A5KPY8WeB716UuxfsgzpCz1MaIgbIBFCB3R1gl4z1B554z70sdG2BLzhtTHSIJQ4FH0i1JyD8Rwz2G098yu3w6vnoE1fCeqUl+iXSG/g+Eg56yGV9/Je7Kj3MdCcHd8bvqXCIJwLC630S7W4DU0eMLj2Ib0Z0EKBMYH2p+f/kVZEA7DbRYbxwa8urhzPY6d57MM0DHEfsa0k6Ig7BtDdG62Y1vtQ2JLrdDTaWKBT/mwANqMwYOSIGxvdRLRDjYLz0GgeB090lrjLPEbXwvnB9r/q9ie/lVh6oSNoJhhs07ANyJErJTpaTI3JJh6VuZXlStkMrJyM3LMWKhZPmy09mrmV2lBOHAv61vtwsua5buE/L4x86ukIMzDYksNYhurNMsHXyGP1eyZSQlC4F6LTWITl3k/0hVQGfjr7JoHpCJoOBIP22sTq2guvtEzwE7ew8WdaCpqCCbRy2J3C3KsxUqUoQKb8DW+QxW2YgeAHDRAI+ShBQrQAYUoRsNYWVyvKwcg1vJ135HIGFHr+gm9Qlgfn5sJ9w/BPLyC5fhUhEX51WbYCV3RG6U41TinhmKrvhEW+Ew6voAhEW6IhneV18SzPJ89lUn5cQUP4QQuN8St1BivlnyylvXbvTfihVwh7I13TdHKwGLchxfFZ7HYBoEjcLbUDtggDBYvGuTUBkdhIA5EHirwIv4m1kYxkquYkksGjyf3RjP25h1aXNslw1PeoTFa7tTEOxwa5Z0zmj7k8kR+HJnzNB5kW4WUK/saFGMKwyah4/WlF5/VYP8Vb+UhtvUAHzMkxoVsYtsXAGA3/kXTk6vDI+Pjo19sRIwRyd+kAr3qFSnLbjoe4H42iINLtMUYx0b6TGLwbJi2ZxMSf+0ED9ek/Eh25g3d6d0+nKvpXwUPSJIw+L4W3Xiy/pj18Wfa18lpyZHV2Zw2IxtvVJ5e9tSW5CbzIypPg/wHJFLYeaJUaCzosAMK0RMHoQ96IT2mdg3exht4G/8W2yIb96qvDVaERhUG43GcJ37UsiBBs33E/8vSqM8NFvFyrpCqo4rX0EwGueqam3ON5lXyfOz9yNC8A974Q5SeB7tySoS6ynmyqfSqzGelpiRzYp0KYv1IpCLs5+NhfFOrIQw9VCPfEVK4Nk5BBkQgdLpyLQcbSfq3KmhLtAIb+QSxfvhpfIKo55s+WbGGZrzLgBi7MFKtdh9Ok7V5xLOIxybKRM5UrMH8jnYDb9BkI20Wj8YjyGBFGuMU7esPx7xwu34qBIUE+n7oE4cgajO8s9UaghfEIgdJTtD2PEe7t/WmeTnUelg72FjJuvwbA6LgCBUunvxU3vvhDQNrPpm9ebUhV4nKS614KJ7WpxuA17XfkzBfszxMxL1kCjJYoeRksUz+ZLbB2/pkQzBJr7j4Tnvvy2WGPeLLCpenwiogBV+N9Xa1C1Jv9gjgeZI2A+3AvfTELTkYJF1uhKiUPhf4eaRU9+r4vWZ5/e1I2jm203rw3AebpcspxPT5Ru7FgS6iLHph1oPuzG0/oSlq+jNEXt3xSiGW0zSdVIHWXVxsx+ea9WsHQaQLIj/4nyNfAfcP2WNnFldqvmlgiWb9++g6kC6IrCsfiC8lzwSAG3QpKkJvvBwlwDMdJh/q2C5Z5o/y5tkCJib/lik8bs/Sqkk3A7Du9p5IqTVUQpD1s7L/GS1Fb9EvIJ9hJsZpzWvpTop9q1k+kiDlCudeoclvMS4SmwFArMcpkmV0Eo/naZQF/PMBSUNdkK8UOryNfdIYyeP4tBCCBZJldGaUOmjyrdAsH0EQld24XRXO9cKdIj1Hm+xUps54vbdGWQD6I650QeQS9n2oYL2v5HlbUOV5PDNl3jGS1jpHbQzmhO4qD4P2nsR0QTZKldggdVY1jgr5/VoUCiGEyBeNhUBjHIu3Mn5PW6lmc88MPF4okDyvNlpELlmNJ4X2Slm6IHKT6QpT7jg64Lc7kSemiLSspqJKLBD9M8ocwv7VH9gM86RrjR45qbvb8XHN8sgQREDqP6gSfdXF95dzxBjh2UUUi9AurfP5JifxbE7DNwoTn9F3ziqGa9SC6WwXPFdigllh5O1rIyRBIDtpTYGPl2NXq1ahVStpZAtrZi9LZlU48iNzN6aJp4JPEGsxXcN+1OmPHpp+mQ+XY67E/0Ah07uPBYnuK0s0/qklEb2/XfMKiSMySyrqRDoKyrP0BVIlw9/9Z7hh2FxTDgMPdKD2wPABiTJ6/4Rnpc76QaMG+WW2dPxCyyvgZs3y3pCKXJQOhfAsLVeyZeR/6t2R/M7XvD6MJT+scYWISonFp3M16ntP8n4X/XXDsyKVukbDJ8D/VXr6kIq9lVzK8igp+Vo9PhL5vxph+4z25rZlcbxmbRc5EfaKN5JHS9qK2GDsFrlpfhXB41x+rilISXx6AODwUAKSXV8+7VE2NCCI9bkqctM0k+FVo74bNeWIJ+49jWADCRJSK9cc4VFyc/ANjzl8OHLTKG6NAAAO0ZSDCezIl5hCWS5z12RHz7J3BZRoppEk5nn1OzkLteXQW8OXpJnLHaFEQl94ChA+L/K+yTvkkoO0mkZ5+ZUF2nLMj/FxnkG1VIJMKwk7/iH+17BL2nltOZyfajWNcqoL5nOztiBJZKPcSfeZUDL/Cp9EYS5/CLSxlh9wq3azRNgdwnyu0671sMTkkLycr5Kwc4iB5g6D8h5YtuZG7VrPT1AOAOBpEqQkXn3E0THLUarsWRf9SnlLwnIAvu9EzsQQCTu3xiiHcqAR+xuodXZSiTwzqTeVIndcqJ24sv++S+WABo40UO+8xBOY7abfXYqgxHSjgTxuNXGF6r+UjTjTQL3Psb5avWYlkRvJ3hieDIateY8xMZZTeT6YRawyUPMsa1fHbkfkdpcvlhqXFPB67SbZxuNUh2PM4Vgjf4SpVp4dtdyZIEm3VMpaLk+MnBt0JWXjF9Nr7KE56NyFUbaVSLl0hSTleygZe862HMUPlZpjUpRdtmzKqUbEkJinTlaSi6SJn6JgNYeDODUkq9tCjmKksG0KnmNIjBVJZetVuCPyJDwneepHOEsorjKzHorRHvuhFZqAqMRGrEe5eD+qYwSG4nlDrXQ9pgrZ/WVJgr0U/lMLzL0XRJmn4KncZujaILP5vdhs7rkK6IfFiU6/VTNszfHGpCCnqSXYsQKeqeRSJUdop4WRZTaIfzcoxmfq0zKWwLacp+jccxwcZw+eh/Neg1KQ5EhTeU8TgnLuOZJcyOFmX/jAjjybCwxLQc5gvu32jdIY9XhxRIfn8Gz1qY+Mmg/lpTEIQZJPUz++XwOatxE2x1hM1jCwCK/jA5ShQqwJrKcpCtEOB6AEgxTTrKmxGStWxGY9KTCfEw3/S3/kDwa7rXKYn0VvmzIgSmOex+0JN6E5zNRNfZalYD+J0Ihsw3iZWeo9GGzOkVxvu5Wl8BJLE4qqsg925AQjy0HxYDNHZ/MrmeKU5VKW2W79GlKMs9utzQIwj0M527YSfInn7AlXRYILktwPR2IYRiTs4ft4CAtVcgzbhZUVYvZGHxyFExDfP7YKc/FPLBGrbPinA+tL9ixBIXqhLw6HbvdzBxbiVSzBSrHatlfRYV2QmmAPtEFbtEM7dEAXdPZJKVaFdSjDGqxBGcqxXnxkm7eDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg0OM+D+Oc2cxlxojegAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wNi0xOVQyMjowMzoxNSswODowMOmCYjIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDYtMTlUMjI6MDM6MTUrMDg6MDCY39qOAAAAAElFTkSuQmCC"

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(21)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(41),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(17)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(37),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2c3a276d",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(19)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(39),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-30fdc596",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(18)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(38),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2c56101b",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(20)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(40),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(16)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(36),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2becd1d3",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('h1', [_vm._v(_vm._s(_vm.routeName))])]), _vm._v(" "), _c('div', {
    staticClass: "photo-boxes"
  }, [_c('div', {
    staticClass: "box"
  }, _vm._l((_vm.photoData.left), function(item) {
    return _c('router-link', {
      attrs: {
        "to": {
          name: 'photoindex',
          params: {
            name: item.name,
            length: 2
          }
        }
      }
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (_vm.photoData.url + _vm.routeName + '/' + item.name + '.jpg'),
        expression: "photoData.url + routeName + '/' + item.name + '.jpg'"
      }],
      staticClass: "photos"
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, _vm._l((_vm.photoData.center), function(item) {
    return _c('router-link', {
      attrs: {
        "to": {
          name: 'photoindex',
          params: {
            name: item.name,
            length: 2
          }
        }
      }
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (_vm.photoData.url + _vm.routeName + '/' + item.name + '.jpg'),
        expression: "photoData.url + routeName + '/' + item.name + '.jpg'"
      }],
      staticClass: "photos"
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, _vm._l((_vm.photoData.right), function(item) {
    return _c('router-link', {
      attrs: {
        "to": {
          name: 'photoindex',
          params: {
            name: item.name,
            length: 2
          }
        }
      }
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (_vm.photoData.url + _vm.routeName + '/' + item.name + '.jpg'),
        expression: "photoData.url + routeName + '/' +  item.name + '.jpg'"
      }],
      staticClass: "photos"
    })])
  }))])])])
},staticRenderFns: []}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "navbar",
    on: {
      "click": _vm.showAlbum
    }
  }, [_c('a', {
    staticClass: "index",
    on: {
      "click": _vm.toIndex
    }
  }, [_vm._v("D")]), _vm._v(" "), _c('a', {
    staticClass: "switch"
  }, [_vm._v("MENU")]), _vm._v(" "), _c('a', {
    staticClass: "info",
    on: {
      "click": _vm.toInfo
    }
  }, [_vm._v("info")])])])
},staticRenderFns: []}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('img', {
    staticClass: "info-img",
    attrs: {
      "src": __webpack_require__(25)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('span', {
    staticClass: "text-name"
  }, [_c('span', {
    staticClass: "text-bold"
  }, [_vm._v("Diva.Gao")]), _vm._v(" 高价硬")]), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "text-type"
  }, [_vm._v("PHOTOGRAPHER / DESIGNER / PLANNER")]), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "text-bold"
  }, [_vm._v("Education:")]), _c('br'), _vm._v("Advertising Bachelor Degree (2013 - 2017) "), _c('span', {
    staticClass: "dis-block"
  }), _vm._v("- Jinan University (Guangzhou)"), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "text-bold"
  }, [_vm._v("Experience:")]), _c('br'), _vm._v("New Media Journalist - Xinhua News Agency Guangzhou"), _c('br'), _vm._v("Retoucher - Veraho Production"), _c('br'), _vm._v("Copy & Designer (Intern) - Utop Shanghai"), _c('br'), _vm._v("Account Executive (Intern) - TBWA Shanghai"), _c('br'), _vm._v("Planner (Intern) - AKQA Shanghai"), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "text-bold"
  }, [_vm._v("Contact Me:")]), _c('br'), _vm._v("Email: divagogogo@gmail.com"), _c('br'), _vm._v(" "), _c('img', {
    staticClass: "info-icon",
    attrs: {
      "src": __webpack_require__(28)
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "info-icon",
    attrs: {
      "src": __webpack_require__(26)
    }
  })])])])])
}]}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "main"
  })])
}]}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "photoIndex"
  }, [_vm._l((+_vm.$route.params.length), function(n) {
    return _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: ('http://oqwhnnwix.bkt.clouddn.com/' + _vm.photosName + '/' + n + '.jpg'),
        expression: "'http://oqwhnnwix.bkt.clouddn.com/' + photosName + '/' + n + '.jpg'"
      }]
    })
  }), _vm._v(" "), _vm._l((+_vm.$route.params.length), function(n) {
    return _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: ('http://oqwhnnwix.bkt.clouddn.com/' + _vm.photosName + '/' + n + '.jpg'),
        expression: "'http://oqwhnnwix.bkt.clouddn.com/' + photosName + '/' + n + '.jpg'"
      }]
    })
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "album-wrap"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.hide),
      expression: "!hide"
    }],
    staticClass: "album",
    on: {
      "click": _vm.showAlbum
    }
  }, [_c('router-link', {
    staticClass: "album-box",
    attrs: {
      "to": "/photo"
    }
  }, [_c('div', {
    staticClass: "album-img-wrap"
  }, [_c('img', {
    staticClass: "album-img",
    attrs: {
      "src": __webpack_require__(27)
    }
  })]), _vm._v(" "), _c('span', [_vm._v("photo")])]), _vm._v(" "), _c('router-link', {
    staticClass: "album-box",
    attrs: {
      "to": "/art"
    }
  }, [_c('div', {
    staticClass: "album-img-wrap"
  }, [_c('img', {
    staticClass: "album-img",
    attrs: {
      "src": __webpack_require__(2)
    }
  })]), _vm._v(" "), _c('span', [_vm._v("art")])]), _vm._v(" "), _c('router-link', {
    staticClass: "album-box",
    attrs: {
      "to": "/project"
    }
  }, [_c('div', {
    staticClass: "album-img-wrap"
  }, [_c('img', {
    staticClass: "album-img",
    attrs: {
      "src": __webpack_require__(2)
    }
  })]), _vm._v(" "), _c('span', [_vm._v("project")])])], 1)])
},staticRenderFns: []}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('navbar', {
    attrs: {
      "hide": _vm.hide
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "wrap",
    class: {
      'hide': _vm.hide, 'show': !_vm.hide
    }
  }, [_c('album', {
    attrs: {
      "hide": _vm.hide
    }
  }), _vm._v(" "), _c('router-view', {
    key: _vm.$route.path
  })], 1)], 1)
},staticRenderFns: []}

/***/ })
],[14]);
//# sourceMappingURL=app.d6fd62925a90737b3040.js.map