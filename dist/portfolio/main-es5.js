function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _my_card_my_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./my-card/my-card.component */
    "./src/app/about/my-card/my-card.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        color: a0
      };
    };

    function AboutComponent_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var icon_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](icon_r3["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, icon_r3.color));
      }
    }

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        this.icons = [{
          name: "HTML5",
          "class": "fab fa-html5",
          color: "#e34f26"
        }, {
          name: "CSS3",
          "class": "fab fa-css3-alt",
          color: "#214ce5"
        }, {
          name: "JS",
          "class": "fab fa-js-square",
          color: "#f0d43d"
        }, {
          name: "Angular",
          "class": "fab fa-angular",
          color: "#dd1b16"
        }, {
          name: "Node.js",
          "class": "fab fa-node",
          color: "#25bc61"
        }, {
          name: "Git",
          "class": "fab fa-git-alt",
          color: "#f05032"
        }];
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 20,
      vars: 1,
      consts: [[1, "about-me"], [1, "icons"], [4, "ngFor", "ngForOf"], [1, "icon"], [3, "ngStyle"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-my-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A Little About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I am a passionate web developer eager to learn new skills and make a positive impact. With knowledge in HTML, CSS, and JavaScript as well as the Angular framework, node.js runtime, SQL and Git/GitHub for version control/collaboration, I have crafted many user friendly web applications both individually and with teammates. I am always excited to challenge myself and develop new skills and am constantly learning to be the best developer I can be! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AboutComponent_ng_container_10_Template, 5, 6, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "My Story");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " It is an incredible thing when passions and talents align. I navigated my way down a unique professional path before discovering that alignment for myself in coding. My studies at the University of Michigan were focused on the pursuance of a career in physical therapy. After 2 years working in a clinic, I had developed strong interpersonal and critical thinking skills, but was ultimately faced with the decision of getting a doctorates in physical therapy or changing careers. The craft beer industry was booming and I had extensive knowledge of the brewing process as a result of my love of home brewing. I got a job at the largest brewery in Michigan helping in the production of their barrel aged beers. I love learning, so during some time off, I decided to type three words into the google search bar that would change my life, \u201CHow to Code\u201D. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " For the next several months I was spending nearly all my free time on Codecademy, Freecodecamp, Udemy, Pleuralsight and anywhere I could learn more HTML, CSS and JavaScript. I was hooked. I love problem solving so the process of figuring out how to do what I need to do, and making it work, I find so satisfying! Pairing that with the potential of programming to create positive change in the lives of so many people all over the world and changing careers was a no brainer. It was the alignment of talent and passion for which I had been looking. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " I wanted to create a solid foundation of knowledge for myself in preparation for this career change and decided going to school would be the best way to learn the skills necessary to be successful in software development. My time at Grand Circus's Front-End After-Hours Bootcamp has only motivated me further to continue learning new skills. And although my time at Grand Circus has just come to a close, I\u2019m so excited for the journey that is just beginning. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons);
        }
      },
      directives: [_my_card_my_card_component__WEBPACK_IMPORTED_MODULE_1__["MyCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: ["h1[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.about-me[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 2rem;\n}\n\n.about-me[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.about-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 2rem;\n    text-indent: 1.5rem;\n}\n\n.icons[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n}\n\n.icon[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 1rem;\n    width: 60px;\n}\n\n.icon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0 .5rem;\n}\n\n.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    transition-property: all;\n    transition-duration: .5s;\n}\n\n.icon[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n    transform: rotateY(360deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFib3V0LW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uYWJvdXQtbWUgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFib3V0LW1lIHAge1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICB0ZXh0LWluZGVudDogMS41cmVtO1xufVxuXG4uaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHdpZHRoOiA2MHB4O1xufVxuXG4uaWNvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwIC41cmVtO1xufVxuXG4uaWNvbiBpIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcbn1cblxuLmljb246aG92ZXIgaSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/about/my-card/my-card.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/about/my-card/my-card.component.ts ***!
    \****************************************************/

  /*! exports provided: MyCardComponent */

  /***/
  function srcAppAboutMyCardMyCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCardComponent", function () {
      return MyCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var MyCardComponent = /*#__PURE__*/function () {
      function MyCardComponent() {
        _classCallCheck(this, MyCardComponent);
      }

      _createClass(MyCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyCardComponent;
    }();

    MyCardComponent.ɵfac = function MyCardComponent_Factory(t) {
      return new (t || MyCardComponent)();
    };

    MyCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyCardComponent,
      selectors: [["app-my-card"]],
      decls: 21,
      vars: 0,
      consts: [[1, "main"], ["src", "assets/img/Me.jpg", "alt", "Bryce Byker Profile Picture"], [1, "info"], [1, "info-item"], ["fontSet", "material-icons-outlined"]],
      template: function MyCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hello, my name is");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BRYCE BYKER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Web Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "local_phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(616) 889-3896");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " bryce1492@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Grand Rapids, MI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
      styles: ["h1[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.main[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    width: 80vw;\n    box-shadow: 0px 0px 10px #AAA;\n    margin: auto;\n    border-radius: 1rem;\n    align-items: flex-start;\n}\n\nimg[_ngcontent-%COMP%] {\n    width: 30vw;\n    border-radius: 1rem;\n    margin: 2rem 1rem;\n    min-width: 250px;\n}\n\n.info[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    margin: 1rem;\n}\n\n.info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0 0 0 -12px;\n}\n\n.info-item[_ngcontent-%COMP%] {\n    display: flex;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n    color: #000080;\n    margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvbXktY2FyZC9teS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvbXktY2FyZC9teS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNBQUE7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDMwdnc7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBtYXJnaW46IDJyZW0gMXJlbTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4uaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuLmluZm8gaDEge1xuICAgIG1hcmdpbjogMCAwIDAgLTEycHg7XG59XG5cbi5pbmZvLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbm1hdC1pY29uIHtcbiAgICBjb2xvcjogIzAwMDA4MDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-card',
          templateUrl: './my-card.component.html',
          styleUrls: ['./my-card.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'resume',
      component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function AppComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Resume");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contact");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_5_Template_mat_icon_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          return _r17.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = function AppComponent(breakpointObserver) {
      _classCallCheck(this, AppComponent);

      this.breakpointObserver = breakpointObserver;
      this.title = 'portfolio';
      this.mobile = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 24,
      vars: 7,
      consts: [["routerLink", "/home"], [4, "ngIf"], ["class", "menu-container", 4, "ngIf"], ["mode", "over", "position", "end", 1, "sidenav", 3, "opened", "openedChange"], ["sidenav", ""], [1, "side-bar-list"], ["routerLink", "/home", "routerLinkActive", "active", 3, "click"], ["routerLink", "/about", "routerLinkActive", "active", 3, "click"], ["routerLink", "/resume", "routerLinkActive", "active", 3, "click"], ["routerLink", "/contact", "routerLinkActive", "active", 3, "click"], ["routerLink", "/home", "routerLinkActive", "active"], ["routerLink", "/about", "routerLinkActive", "active"], ["routerLink", "/resume", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"], [1, "menu-container"], [3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bryce Byker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 10, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 3, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function AppComponent_Template_mat_sidenav_openedChange_8_listener($event) {
            return ctx.opened = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            return _r17.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            return _r17.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            return _r17.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            return _r17.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.mobile).matches);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx.mobile).matches);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.opened);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["nav[_ngcontent-%COMP%] {\n    background-color: #000080;\n    display: flex;\n    justify-content: space-between;\n}\n\nh1[_ngcontent-%COMP%] {\n    font-family: 'Montserrat', sans-serif;\n    color: #EEEEEE;\n    margin: 0;\n    padding: 1em;\n    align-self: center;\n    cursor: pointer;\n}\n\nul[_ngcontent-%COMP%] {\n    display: flex;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #EEEEEE;\n    margin: 1rem;\n    position: relative;\n}\n\na[_ngcontent-%COMP%]:hover {\n    color: #AAA;\n}\n\na[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    bottom: 0;\n    left: 0;\n    background-color: #AAA;\n    visibility: hidden;\n    transform: scaleX(0);\n    transition: all 0.3s ease-in-out;\n}\n\na[_ngcontent-%COMP%]:hover:before {\n    visibility: visible;\n    transform: scaleX(1);\n}\n\n.active[_ngcontent-%COMP%] {\n    color: #AAA;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n    color: #EEE;\n    cursor: pointer;\n}\n\nmat-icon[_ngcontent-%COMP%]:hover {\n    color: #AAA;\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n    display: inline;\n}\n\n.menu-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    padding-right: 1rem;\n}\n\n.side-bar-list[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding-left: 0;\n}\n\n.side-bar-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #000080;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n    background: rgb(248, 248, 248);\n    box-shadow: -12px 0px 16px #00000042;\n}\n\nh2[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-right: 3rem;\n    padding-left: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsU0FBUztJQUNULE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA4MDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaDEge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNFRUVFRUU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG51bCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjRUVFRUVFO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmE6aG92ZXIge1xuICAgIGNvbG9yOiAjQUFBO1xufVxuXG5hOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FBQTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbmE6aG92ZXI6YmVmb3JlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuXG4uYWN0aXZlIHtcbiAgICBjb2xvcjogI0FBQTtcbn1cblxubWF0LWljb24ge1xuICAgIGNvbG9yOiAjRUVFO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubWF0LWljb246aG92ZXIge1xuICAgIGNvbG9yOiAjQUFBO1xufVxuXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi5zaWRlLWJhci1saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLnNpZGUtYmFyLWxpc3QgYSB7XG4gICAgY29sb3I6ICMwMDAwODA7XG59XG5cbi5zaWRlbmF2IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG4gICAgYm94LXNoYWRvdzogLTEycHggMHB4IDE2cHggIzAwMDAwMDQyO1xufVxuXG5oMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _home_project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/project/project.component */
    "./src/app/home/project/project.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _about_my_card_my_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./about/my-card/my-card.component */
    "./src/app/about/my-card/my-card.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _home_project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _about_my_card_my_card_component__WEBPACK_IMPORTED_MODULE_10__["MyCardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _home_project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _about_my_card_my_card_component__WEBPACK_IMPORTED_MODULE_10__["MyCardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function ContactComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your message has been sent!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Thank You ", ctx_r5.username, "!");
      }
    }

    function ContactComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " There seems to have been an error processing the request. Please feel free to reach out to me using any of the contact/social information listed in the footer at the bottom of the page. Thank you! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sorry ", ctx_r6.username, "!");
      }
    }

    function ContactComponent_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.formErrors["firstName"], " ");
      }
    }

    function ContactComponent_mat_error_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.formErrors["email"], " ");
      }
    }

    function ContactComponent_mat_error_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.formErrors["message"], " ");
      }
    }

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(_http, fb) {
        _classCallCheck(this, ContactComponent);

        this._http = _http;
        this.fb = fb;
        this.validationMsgs = {
          'firstName': {
            'required': 'First Name is required'
          },
          'email': {
            'required': 'E-mail is required',
            'email': 'Must be a valid email address'
          },
          'message': {
            'required': 'Please include the message you wish to send'
          }
        };
        this.formErrors = {
          'firstName': '',
          'email': '',
          'message': ''
        };
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.contactForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: [''],
            company: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "formValidation",
        value: function formValidation(group, formDirective) {
          var _this = this;

          Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            _this.formErrors[key] = '';

            if (!abstractControl.valid) {
              var errorType = Object.keys(abstractControl.errors)[0];
              _this.formErrors[key] = _this.validationMsgs[key][errorType];
            }
          });
          var errors = Object.keys(this.formErrors).filter(function (key) {
            return _this.formErrors[key];
          });

          if (!errors[0]) {
            this.sending = true;
            return this._http.post('/send', this.contactForm.value).subscribe(function (res) {
              _this.sending = false;
              _this.displaySent = true;
              _this.username = _this.contactForm.value.firstName;

              _this.contactForm.reset();

              formDirective.resetForm();
            }, function (error) {
              _this.sending = false;
              _this.displayError = true;
              _this.username = _this.contactForm.value.firstName;

              _this.contactForm.reset();

              formDirective.resetForm();
              console.log(error);
            });
          }
        }
      }, {
        key: "getColor",
        value: function getColor(formControl, first) {
          if (formControl.invalid && formControl.touched) {
            return 'warn';
          }

          if (first.focused) {
            return 'primary';
          }

          return '#AAA';
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 50,
      vars: 11,
      consts: [[1, "form-container"], [1, "inner-container", 3, "formGroup", "ngSubmit"], ["formDirective", "ngForm"], ["class", "status-msg", 4, "ngIf"], [1, "form-el"], ["appearance", "outline"], ["matInput", "", "formControlName", "firstName", "name", "firstName", "id", "firstName", "type", "text"], ["first", "matInput"], ["matSuffix", "", 3, "color"], [4, "ngIf"], ["matInput", "", "formControlName", "lastName", "name", "lastName", "id", "lastName", "type", "text"], ["last", "matInput"], ["matInput", "", "formControlName", "company", "name", "company", "id", "company", "type", "text"], ["company", "matInput"], ["matInput", "", "formControlName", "email", "name", "email", "id", "email", "type", "text"], ["email", "matInput"], ["matInput", "", "formControlName", "message", "name", "comment", "id", "comment", "cols", "30", "rows", "10"], ["type", "submit"], [1, "status-msg"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return ctx.formValidation(ctx.contactForm, _r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ContactComponent_div_5_Template, 5, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContactComponent_div_6_Template, 5, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " person ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContactComponent_mat_error_15_Template, 2, 1, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " person ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " work_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "E-mail *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " mail_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ContactComponent_mat_error_40_Template, 2, 1, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Message *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ContactComponent_mat_error_47_Template, 2, 1, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displaySent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.getColor(ctx.contactForm.controls.firstName, _r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors["firstName"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", _r9.focused ? "primary" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", _r10.focused ? "primary" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.getColor(ctx.contactForm.controls.email, _r11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors["email"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors["message"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sending ? "Sending..." : "Submit", "");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]],
      styles: ["h1[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.status-msg[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 1rem;\n}\n\n.status-msg[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-top: 0;\n}\n\n.form-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.form-el[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\nbutton[_ngcontent-%COMP%] {\n    color: #000080;\n    font-size: 1rem;\n    border-radius: .25em;\n    border: 1px solid #000080;\n    padding: .5em 1em;\n    text-align: center;\n    margin: 1rem auto;\n    cursor: pointer;\n    color: #EEE;\n    background-color: #000080;\n    transition-property: all;\n    transition-duration: .15s;\n    transition-timing-function: ease-out;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    color: #000080;\n    background: #EEE;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n    color: #AAA;\n}\n\n.input[_ngcontent-%COMP%]:focus   mat-icon[_ngcontent-%COMP%] {\n    color: #000080;\n}\n\n@media screen and (min-width: 480px) {\n    .inner-container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        border-radius: 1rem;\n        box-shadow: 0px 0px 10px #AAA;\n        width: 75vw;\n        padding: 2rem;\n        margin-bottom: 2rem;\n    }\n  \n    .form-el[_ngcontent-%COMP%] {\n        width: 80%;\n    }\n    \n}\n\n@media screen and (min-width: 601px) {\n    .inner-container[_ngcontent-%COMP%] {\n        width: 65vw\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFJQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLDZCQUE2QjtRQUM3QixXQUFXO1FBQ1gsYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7QUFFSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhdHVzLW1zZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5zdGF0dXMtbXNnIGgzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybS1lbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5idXR0b24ge1xuICAgIGNvbG9yOiAjMDAwMDgwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDgwO1xuICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNFRUU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA4MDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjE1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG4gXG5idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiAjMDAwMDgwO1xuICAgIGJhY2tncm91bmQ6ICNFRUU7XG59XG5cbm1hdC1pY29uIHtcbiAgICBjb2xvcjogI0FBQTtcbn1cblxuLmlucHV0OmZvY3VzIG1hdC1pY29uIHtcbiAgICBjb2xvcjogIzAwMDA4MDtcbn1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgLmlubmVyLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjQUFBO1xuICAgICAgICB3aWR0aDogNzV2dztcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG4gIFxuICAgIC5mb3JtLWVsIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XG4gICAgLmlubmVyLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA2NXZ3XG4gICAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 33,
      vars: 0,
      consts: [[1, "footer-container"], ["routerLink", "/home", "routerLinkActive", "active"], ["routerLink", "/about", "routerLinkActive", "active"], ["routerLink", "/resume", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"], [1, "contact-info"], [1, "social-links-container"], [1, "social-links"], ["data-version", "v1", "data-size", "medium", "data-locale", "en_US", "data-type", "horizontal", "data-theme", "dark", "data-vanity", "bryce-byker", 1, "LI-profile-badge"], ["href", "https://www.linkedin.com/in/bryce-byker?trk=profile-badge", 1, "LI-simple-link"], [1, "plus"], ["src", "assets/img/GitHub-logo.png", "alt", "", 1, "github-logo"], [1, "design"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bryce Byker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "616-889-3896");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "bryce1492@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Bryce Byker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Design by Bryce Byker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["ul[_ngcontent-%COMP%] {\n    display: flex;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #EEEEEE;\n    margin: 1rem;\n    position: relative;\n}\n\na[_ngcontent-%COMP%]:hover {\n    color: #AAA;\n}\n\na[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    bottom: 0;\n    left: 0;\n    background-color: #AAA;\n    visibility: hidden;\n    transform: scaleX(0);\n    transition: all 0.3s ease-in-out;\n}\n\na[_ngcontent-%COMP%]:hover:before {\n    visibility: visible;\n    transform: scaleX(1);\n}\n\n.active[_ngcontent-%COMP%] {\n    color: #AAA;\n}\n\nh2[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-right: 3rem;\n    padding-left: 3rem;\n}\n\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding-left: 0;\n    height: 55px;\n    width: 100vw;\n}\n\nfooter[_ngcontent-%COMP%] {\n    background-color: #222;\n}\n\n.footer-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.footer-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #AAA;\n}\n\n.contact-info[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    color: white;\n    text-align: center;\n\n}\n\n.LI-profile-badge[_ngcontent-%COMP%] {\n    margin: 1rem;\n}\n\n.github-logo[_ngcontent-%COMP%] {\n    max-height: 64px;\n    margin: 1rem;\n    cursor: pointer;\n}\n\n.github-logo[_ngcontent-%COMP%]:hover {\n    opacity: .5;\n}\n\n.social-links-container[_ngcontent-%COMP%] {\n    color: #EEE\n}\n\n.social-links[_ngcontent-%COMP%] {\n    color: #EEE;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.plus[_ngcontent-%COMP%] {\n    width: 100vw;\n    text-align: center;\n}\n\n.design[_ngcontent-%COMP%] {\n    color: #EEE;\n    text-align: center;\n    margin-bottom: 0;\n    padding-bottom: 1rem;\n}\n\n@media screen and (min-width: 433px) {\n    .plus[_ngcontent-%COMP%] {\n        width: auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1QsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNFRUVFRUU7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYTpob3ZlciB7XG4gICAgY29sb3I6ICNBQUE7XG59XG5cbmE6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuYTpob3ZlcjpiZWZvcmUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG5cbi5hY3RpdmUge1xuICAgIGNvbG9yOiAjQUFBO1xufVxuXG5oMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xufVxuZm9vdGVyIHVsIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIHdpZHRoOiAxMDB2dztcbn1cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbn1cblxuLmZvb3Rlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciBoMiB7XG4gICAgY29sb3I6ICNBQUE7XG59XG5cbi5jb250YWN0LWluZm8ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4uTEktcHJvZmlsZS1iYWRnZSB7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4uZ2l0aHViLWxvZ28ge1xuICAgIG1heC1oZWlnaHQ6IDY0cHg7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5naXRodWItbG9nbzpob3ZlciB7XG4gICAgb3BhY2l0eTogLjU7XG59XG4uc29jaWFsLWxpbmtzLWNvbnRhaW5lciB7XG4gICAgY29sb3I6ICNFRUVcbn1cbi5zb2NpYWwtbGlua3Mge1xuICAgIGNvbG9yOiAjRUVFO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wbHVzIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVzaWduIHtcbiAgICBjb2xvcjogI0VFRTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDMzcHgpIHtcbiAgICAucGx1cyB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./project/project.component */
    "./src/app/home/project/project.component.ts");

    function HomeComponent_app_project_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-project", 8);
      }

      if (rf & 2) {
        var project_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r1);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.projects = [{
          title: "GReen",
          desc: "Using Angular 9 & Google Maps with Refuse & Recycle data from the City of Grand Rapids, GReen is a responsive web app that makes recycling easy. The user can find their next pickup date with the click of a button, find what can & can't be recycled in their bin, locate nearby recycle centers & connect with city resources.",
          icon: "public",
          codeURL: "https://github.com/Bykerbry/GReen",
          appURL: "https://bykerbry.github.io/GReen/"
        }, {
          title: "Budget Buddy",
          desc: "Using vanilla JavaScript, HTML & CSS, my team & I built a budgeting app. The app is mobile & desktop responsive and git was used for collaboration. A clean & simple user interface walks the user through entering their income & expenses, breaks down the numbers into a weekly budget and generates an expense report.",
          icon: "account_balance",
          codeURL: "https://github.com/ottokeres/Budget-Buddy/",
          appURL: "https://bykerbry.github.io/Budget-Buddy/"
        }, {
          title: "Recipe Search",
          desc: "Using git to collaborate, my team & I built a web app in Angular 8 that utilizes Edamam's Recipe Search API. We made use of Angular Material for many of the inputs, buttons, icons & dialogs. The user can simply enter a search, apply any dietary restrictions they wish, then see their results neatly displayed. Favorites can also be added and viewed on the favorites page.",
          icon: "restaurant",
          codeURL: "https://github.com/Bykerbry/recipe-api-project",
          appURL: "https://bykerbry.github.io/recipe-api-project/"
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 11,
      vars: 1,
      consts: [[1, "img-container"], [1, "img-overlay"], [1, "front-end"], [1, "web-dev"], ["src", "assets/img/code-screen-4.jpg", "alt", ""], [1, "projects-h1"], [1, "projects-container"], [3, "project", 4, "ngFor", "ngForOf"], [3, "project"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Front-End");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Web Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_app_project_10_Template, 1, 1, "app-project", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"]],
      styles: ["img[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: hidden;\n}\n\n.img-container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100vw;\n    max-height: 80vh;\n    overflow: hidden;\n}\n\n.img-overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.front-end[_ngcontent-%COMP%] {\n    text-align: center;\n    font-family: 'Montserrat', sans-serif;\n    color: #EEE;\n    font-size: 1em;\n}\n\n.web-dev[_ngcontent-%COMP%] {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 2em;\n    color: #EEE;\n    margin-top: 1rem;\n    text-align: center;\n    text-shadow: 20px -12px 10px black;\n    white-space: nowrap;\n}\n\n.projects-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n}\n\n\n\napp-project[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 1;\n    margin: 2rem;\n    border-radius: 1rem;\n    background: #ffffff80;\n    box-shadow: 0px 0px 3px #AAA;\n    transition-property: all;\n    transition-duration: .15s;\n    transition-timing-function: ease-in;\n}\n\napp-project[_ngcontent-%COMP%]:hover {\n    box-shadow: 0px 0px 10px #AAA;\n}\n\n.projects-h1[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n@media screen and (min-width: 600px) {\n    .front-end[_ngcontent-%COMP%] {\n        font-size: 1.5rem;\n    }\n    .web-dev[_ngcontent-%COMP%] {\n        font-size: 4rem;\n    }\n}\n\n@media screen and (min-width: 840px) {\n    .projects-container[_ngcontent-%COMP%] {\n        flex-direction: row;\n        justify-content: space-evenly;\n    }\n\n    app-project[_ngcontent-%COMP%] {\n        min-width: 340px;\n        max-width: 340px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUNBLDhFQUE4RTs7QUFDOUU7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltZy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1nLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5mcm9udC1lbmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjRUVFO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4ud2ViLWRldiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBjb2xvcjogI0VFRTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXNoYWRvdzogMjBweCAtMTJweCAxMHB4IGJsYWNrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4vKiBNYXkgTmVlZCB0byBzZXQgaGVpZ2h0L3dpZHRoIHNvIHRoZSBuZXh0IGxpbmUgZG9lc24ndCB0YWtlIHVwIHdob2xlIHNwYWNlICovXG5hcHAtcHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY4MDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAjQUFBO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMTVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xufVxuXG5hcHAtcHJvamVjdDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNBQUE7XG59XG5cbi5wcm9qZWN0cy1oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC5mcm9udC1lbmQge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gICAgLndlYi1kZXYge1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkge1xuICAgIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICB9XG5cbiAgICBhcHAtcHJvamVjdCB7XG4gICAgICAgIG1pbi13aWR0aDogMzQwcHg7XG4gICAgICAgIG1heC13aWR0aDogMzQwcHg7XG4gICAgfVxufVxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/project/project.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/home/project/project.component.ts ***!
    \***************************************************/

  /*! exports provided: ProjectComponent */

  /***/
  function srcAppHomeProjectProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
      return ProjectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var ProjectComponent = /*#__PURE__*/function () {
      function ProjectComponent() {
        _classCallCheck(this, ProjectComponent);
      }

      _createClass(ProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectComponent;
    }();

    ProjectComponent.ɵfac = function ProjectComponent_Factory(t) {
      return new (t || ProjectComponent)();
    };

    ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectComponent,
      selectors: [["app-project"]],
      inputs: {
        project: "project"
      },
      decls: 13,
      vars: 5,
      consts: [[1, "project-container"], [1, "icon-container"], [1, "btn-container"], ["target", "_blank", 3, "href"]],
      template: function ProjectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "See Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "See App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.desc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.project.codeURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.project.appURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
      styles: [".project-container[_ngcontent-%COMP%] {\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: space-between;\n    transition-property: all;\n    transition-duration: .15s;\n    transition-timing-function: ease-in;\n}\n\n.project-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .project-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    transition-property: all;\n    transition-duration: .15s;\n    transition-timing-function: ease-in;\n}\n\n.project-container[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n    color: #000080;\n}\n\nh3[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.btn-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-around;\n}\n\n.btn-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 70px;\n}\n\n.icon-container[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.project-container[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n    color: #fcfcfc;\n    background: #000080;\n}\n\na[_ngcontent-%COMP%] {\n    color: #000080;\n    background: #fcfcfc;\n    border-radius: .25em;\n    text-decoration: none;\n    border: 1px solid #000080;\n    padding: .5em;\n    text-align: center;\n    transition-property: all;\n    transition-duration: .15s;\n    transition-timing-function: ease-out;\n\n}\n\na[_ngcontent-%COMP%]:hover {\n    color: #000080 !important;\n    background: #fcfcfc !important;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n    font-size: 48px;\n    height: 48px;\n    width: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLE9BQU87SUFDUCw4QkFBOEI7SUFDOUIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7QUFDdkM7O0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixvQ0FBb0M7O0FBRXhDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOzs7O0lBSUkiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjE1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIG1hdC1pY29uLFxuLnByb2plY3QtY29udGFpbmVyIGEge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMTVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xufVxuXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIgbWF0LWljb24ge1xuICAgIGNvbG9yOiAjMDAwMDgwO1xufVxuXG5oMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYnRuLWNvbnRhaW5lciBhIHtcbiAgICB3aWR0aDogNzBweDtcbn1cblxuLmljb24tY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciBhIHtcbiAgICBjb2xvcjogI2ZjZmNmYztcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDgwO1xufVxuXG5hIHtcbiAgICBjb2xvcjogIzAwMDA4MDtcbiAgICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDgwO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMTVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcblxufVxuIFxuYTpob3ZlciB7XG4gICAgY29sb3I6ICMwMDAwODAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjZmNmY2ZjICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiA0OHB4O1xufVxuXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkge1xuICAgIC5wcm9qZWN0LWNvbnRhaW5lcntcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB9XG59ICAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-project',
          templateUrl: './project.component.html',
          styleUrls: ['./project.component.css']
        }]
      }], function () {
        return [];
      }, {
        project: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/resume/resume.component.ts":
  /*!********************************************!*\
    !*** ./src/app/resume/resume.component.ts ***!
    \********************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResumeComponent = /*#__PURE__*/function () {
      function ResumeComponent() {
        _classCallCheck(this, ResumeComponent);
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumeComponent;
    }();

    ResumeComponent.ɵfac = function ResumeComponent_Factory(t) {
      return new (t || ResumeComponent)();
    };

    ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeComponent,
      selectors: [["app-resume"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container"], ["src", "assets/img/PortfolioResume.pdf"]],
      template: function ResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n\n.container[_ngcontent-%COMP%] {\n    position: relative;\n    padding-bottom: 130%;\n    padding-top: 35px;\n    height: 0;\n    overflow: hidden;\n}\n\n\niframe[_ngcontent-%COMP%] {\n    position: absolute;\n    top:0;\n    left: 0;\n    width: 100%;\n    height: 100%; \n}\n\n\n\n\n\n\n\n\n@media screen and (min-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        padding: 0;\n        margin-bottom: 2rem;\n        overflow: auto;\n        height: 95vh;\n    }\n\n    iframe[_ngcontent-%COMP%] {\n        position: static;\n        display: flex;\n        width: 75%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUVBOzs7OztFQUtFOzs7QUFFRjs7Ozs7Ozs7R0FRRzs7O0FBRUg7SUFDSTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMwJTtcbiAgICBwYWRkaW5nLXRvcDogMzVweDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaWZyYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxufVxuXG4vKiAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4gKi9cblxuLyogaWZyYW1lIHtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1pbi13aWR0aDogMTAwJTtcbn1cblxuaWZyYW1lIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGhlaWdodDogNTAwcHg7XG59ICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgaGVpZ2h0OiA5NXZoO1xuICAgIH1cblxuICAgIGlmcmFtZSB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxufVxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resume',
          templateUrl: './resume.component.html',
          styleUrls: ['./resume.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/brycebyker 1/HelloWorld/Portfolio/portfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map