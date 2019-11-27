(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic{\r\n    max-width: 250px;\r\n    max-height: 350px;\r\n    -webkit-filter: grayscale();\r\n            filter: grayscale();\r\n}\r\nul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n.container {\r\n    padding: 10px 10px; \r\n    padding-left: 5%;   \r\n    height: 100%;\r\n    min-height: -webkit-fill-available;\r\n    max-width: 100%;\r\n}\r\n.col-3 {\r\n  height: 100%;\r\n  min-height: -webkit-fill-available;\r\n}\r\n.no-gutters {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n.row {\r\n  max-width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"background: #454444bd\">\r\n<nav-bar></nav-bar>\r\n  <div class=\"container no-gutters\">\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <div>\r\n          <img src=\"./assets/images/59908517_457463458331413_1995375044749950976_n.jpg\" class=\"img-thumbnail profile-pic\" />\r\n        </div>\r\n        <div>\r\n          <ul>\r\n            <li>\r\n              Email:DanHoganRed@gmail.com\r\n            </li>\r\n            <li>\r\n              Phone:(613)899-3407\r\n            </li>\r\n            <li>\r\n              Location: Edmonton, AB Canada\r\n            </li>\r\n            <li>\r\n              Github: <a href=\"https://github.com/DanHoganRed\">DanHoganRed</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://www.linkedin.com/in/daniel-hogan-a83030a6/\">LinkedIn</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-sm-6 col-md-9\">\r\n        <app-home></app-home>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-resume';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/navbar.component */ "./src/app/nav/navbar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skill/skill.component */ "./src/app/skill/skill.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _nav_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _bio_bio_component__WEBPACK_IMPORTED_MODULE_6__["BioComponent"],
                _skill_skill_component__WEBPACK_IMPORTED_MODULE_10__["SkillComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_8__["appRoutes"]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bio/bio.component.css":
/*!***************************************!*\
  !*** ./src/app/bio/bio.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bio/bio.component.html":
/*!****************************************!*\
  !*** ./src/app/bio/bio.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <h2>\r\n      Welcome to my Resume! \r\n  </h2>\r\n\r\n  <p>\r\n      I am a Software Developer from the Ottawa Ontario. This resume was developed in part to advertise myself but also as a way for me to learn Angular, and I had a blast making it. Check out this websites source code <a href=\"https://github.com/DanHoganRed/Angular-Resume\">here</a>. If you’re interested in a traditional resume please see the sidebar document download link. My main interests are currently Machine Learning Front-End Development and Mobile Development. Strong back end skills. You can view a full briefing of my skills in the skills section. <b>Please keep in mind that I am still working on this site so some things may not currently be working.</b>  \r\n  </p> \r\n\r\n  <h3>\r\n      Work Experience  \r\n  </h3>\r\n  <h4>\r\n      Avanade\t \t \t \t \t \t \t                      June 2018-Present\r\n  </h4>\r\n  <p>\r\n      Working face-to-face with clients to develop Dynamics 365 solutions to transform their business. Utilizing the .Net framework for development along with Microsoft Azure to setup development environment and Windows Powershell to support automation.\r\n  </p> \r\n  <h3>\r\n      Education  \r\n  </h3>\r\n  <h4>\r\n      Carleton University\t \t \t \t \t \t \t          September 2013-April 2018\r\n  </h4>\r\n  <p>\r\n      Bachelor of Engineering, Software, Coop    \r\n  </p> \r\n  <h3>\r\n      Coop Positions  \r\n  </h3>\r\n  <h4>\r\n      Core OS Developer                                                                                                               May 2017-August 2017\r\n      Blackberry QNX, Kanata, Ontario       \r\n  </h4>\r\n\r\n      <ul>\r\n        <li>\r\n            Developing unit tests for the QNX Kernel in C in order to fulfill ISO 26262 safety compliance. \r\n        </li>\r\n        <li>\r\n            Improving the unit test framework to support ARM and AARCH64 CPU architectures with knowledge of the GNU C compiler, Makefiles and Linux shell scripts. \r\n        </li>\r\n        <li>\r\n            Finding, documenting and fixing bugs in the Kernel.\r\n        </li>\r\n      </ul> \r\n \r\n  <h4>\r\n      Integration Developer                                                                                              January 2016-December 2016\r\n      TravelClick, Ottawa, Ontario           \r\n  </h4>\r\n\r\n      <ul>\r\n        <li>\r\n            Developing, installing and maintaining remote integrations for TravelClick GMS. Development was done using Java 8 in Eclipse using Git for version control. Often required analyzing data and writing queries to extract it.\r\n        </li>\r\n        <li>\r\n            Development of TravelClick Abandonment services which would require writing Javascript to track booking information on hotel websites using JQuery.\r\n        </li>\r\n        <li>\r\n            Working on general tasks often requiring isolating and fixing software bugs or searching through large scale log archives on specific servers using bash.\r\n        </li>\r\n      </ul> \r\n\r\n  <h4>\r\n      Avionics Software Tester                                                                                                     May 2015-August 2015\r\n      Edgewater Computer Systems, Kanata, Ontario             \r\n  </h4>\r\n\r\n      <ul>\r\n        <li>\r\n            Writing C code to verify low level requirements for software developed by Edgewater Computer Systems with the use of the LDRA Tool Suite. This testing was done so that the network card part of the CANIC project can become air-worthy by the D0-178B DAL C verification requirements. This included proving calls, verifying data and writing stub functions to simulate the functionality of external functions and forcing code flow. \r\n        </li>\r\n        <li>\r\n            Training new students and contractors with my testing methods as well as showing them the intricacies of the testing software and evaluating the quality of their work.\r\n        </li>\r\n      </ul> \r\n"

/***/ }),

/***/ "./src/app/bio/bio.component.ts":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BioComponent = /** @class */ (function () {
    function BioComponent() {
    }
    BioComponent.prototype.ngOnInit = function () {
    };
    BioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bio',
            template: __webpack_require__(/*! ./bio.component.html */ "./src/app/bio/bio.component.html"),
            styles: [__webpack_require__(/*! ./bio.component.css */ "./src/app/bio/bio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item{\r\n    max-width: 100%;\r\n    height: 100%;\r\n    /*max-height: 600px;*/\r\n    padding-top: 20px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel slide\" id=\"homeControl\" data-ride=\"carousel\">\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-item\" [ngClass]=\"{'active':slider.getCurrentSlide()==0}\">\r\n      <app-bio></app-bio>\r\n    </div>\r\n    <div class=\"carousel-item\" [ngClass]=\"{'active':slider.getCurrentSlide()==1}\">\r\n        <app-skill></app-skill>\r\n      </div>\r\n  </div>\r\n</div> "

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _slide_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slide.service */ "./src/app/slide.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(slider) {
        this.slider = slider;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_slide_service__WEBPACK_IMPORTED_MODULE_1__["SlideService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/navbar.component.ts":
/*!*****************************************!*\
  !*** ./src/app/nav/navbar.component.ts ***!
  \*****************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _slide_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slide.service */ "./src/app/slide.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(slider) {
        this.slider = slider;
    }
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nav-bar',
            template: "\n    <nav class=\"navbar navbar-default border\" style=\"background:#4c849985\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">Dan Hogan</a>\n      </div>\n      <ul class=\"nav nav-pills\">\n        <li class=\"nav-item\" (click)='slider.setCurrentSlide(0)'><button class=\"nav-link\" [ngClass]=\"slider.getCurrentSlide() === 0 ? 'active':'' \">Bio</button></li>\n        <li class=\"nav-item\" (click)='slider.setCurrentSlide(1)'><button class=\"nav-link\" [ngClass]=\"slider.getCurrentSlide() === 1 ? 'active':'' \">Skills</button></li>\n      </ul>\n    </div>\n  </nav>\n    ",
            styles: ["\n    .navbar-default {\n      \n    }\n    button.nav-link { \n      background:none;\n      border:none; \n    }\n    .navbar-brand {\n      color:white\n    }\n    .nav-link.active {\n      background-color:#a7b1b1b8\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_slide_service__WEBPACK_IMPORTED_MODULE_1__["SlideService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");

var appRoutes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"] }
];


/***/ }),

/***/ "./src/app/skill.model.ts":
/*!********************************!*\
  !*** ./src/app/skill.model.ts ***!
  \********************************/
/*! exports provided: LevelType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelType", function() { return LevelType; });
var LevelType;
(function (LevelType) {
    LevelType[LevelType["LEVEL_ONE"] = 0] = "LEVEL_ONE";
    LevelType[LevelType["LEVEL_TWO"] = 1] = "LEVEL_TWO";
    LevelType[LevelType["LEVEL_THREE"] = 2] = "LEVEL_THREE";
    LevelType[LevelType["LEVEL_FOUR"] = 3] = "LEVEL_FOUR";
})(LevelType || (LevelType = {}));


/***/ }),

/***/ "./src/app/skill.service.ts":
/*!**********************************!*\
  !*** ./src/app/skill.service.ts ***!
  \**********************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _skill_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill.model */ "./src/app/skill.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillService = /** @class */ (function () {
    function SkillService() {
    }
    SkillService.prototype.getSkills = function () {
        return SKILLS;
    };
    SkillService.prototype.GetTrimmedSkillDescription = function (skill) {
        return skill.descript.substring(0, skill.descript.indexOf(".")) + "...";
    };
    SkillService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SkillService);
    return SkillService;
}());

var SKILLS = [
    {
        descript: "Strong Java experience achieved through coursework and work experience. Many courses at Carleton were Java specific teaching the fundamentals of object oriented programing. Additionally other tools were explored such as the Spring framework to make web apps, HQL for ORM and JUnit for testing. All of these skills were further developed through my year long coop position at TravelClick.",
        time: "SDF",
        title: "JAVA",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_FOUR
    },
    {
        descript: "Well experienced with using C through various courses at Carleton and coop positions. Many of my courses at Carleton focused on low level programming to teach fundamentals of computing which involved using C. This included using C to interact directly with external microcontroller boards. Furthermore coop positions at Edgewater and Blackberry QNX involved testing of C code that allowed me to gain a strong knowledge of the language.",
        time: "SDF",
        title: "C",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_FOUR
    },
    {
        descript: "Strong experience of C# achieved through coursework and my position at Avanade. Avanade is a company that specializes in .Net experience. Because of this I have been heavily exposed to C# throughout my work. Tools used while at Avanade include the ASP.Net Framework, Entity Framework and Identity Framework. Additionally my 4th year engineering project at Carleton utilized Xamarin for mobile development done in C#.",
        time: "SDF",
        title: "C#",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_FOUR
    },
    {
        descript: "Experienced with Javascript through basic DOM manipulation with JQuery as well as interfacing with backend services through AJAX calls. Courses at Carleton included light front-end development including Javascript. Additionally my work at Travelclick Abandonment Services was strictly using Javascript to further bolster my understanding.",
        time: "SDF",
        title: "JavaScript",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_THREE
    },
    {
        descript: "I am very familiar with Agile Development both in practice and in theory. In Carleton I attended a course dedicated to development processes with a large portion covering Agile Development. Additionally Agile development was the ideology used in both TravelClick and Avanade.",
        time: "SDF",
        title: "Agile Development",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_THREE
    },
    {
        descript: "Skills developed with Angular through online courses and personal projects. I have completed multiple courses on pluralsight teaching the fundamentals of Angular. With the knowledge gained from these courses I have developed this resume to put these skills into practice.    ",
        time: "SDF",
        title: "Angular",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_TWO
    },
    {
        descript: "Powershell experienced gained through development of infrastructure setup scripts while at Avanade. This includes OU manipulation, certificate enrolment and IIS configuration through script.",
        time: "SDF",
        title: "PowerShell",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_TWO
    },
    {
        descript: "Assembly was a focus for many of my courses focused on computers at a low-level. Assembly was done with the x86 chip through an emulator and with HCS12 Motorola Microcontroller board.",
        time: "SDF",
        title: "Assembly",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_TWO
    },
    {
        descript: "Strong experience writing complex SQL queries and statement. Experience through programming courses taken in carleton including a database specific course where I learned additional theory in database design. Additional experience using MySQL in TravelClick and SQL Server at Avanade. However I have not been put in a role of a dba in charge of maintaining or optimizing a database.",
        time: "SDF",
        title: "SQL",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_THREE
    },
    {
        descript: "Utilized Linux shell in my coop positions giving me the ability to be able to do basic shell operations. In my position at TravelClick I used the linux shell to traverse various remote servers and analyze log files. At Blackberry QNX the development environment was run on Ubuntu and scripts were executed and developed using the terminal. Additionally I developed a script to run tests on an isolated emulator of a specific architecture.",
        time: "SDF",
        title: "Linux Shell Scripting",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_TWO
    },
    {
        descript: "I have experience developing for Android through my 4th year engineering project at Carleton. My 4th year engineering project was developed using Xamarin in Visual Studio. My development done for Android devices and included developing backend communication, designing views and functionality using components such as forms, popups and navigation drawers. Additionally I have done some work on unfinished apps in traditional Android studio.",
        time: "SDF",
        title: "Android Mobile Dev",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_TWO
    },
    {
        descript: "Machine Learning is an exciting and interesting subject for me. However I have not yet gotten any hands-on experience doing it. I am currently in the process of working through an online course focused on teaching Machine Learning through TensorFlow. Additionally I have light experience with technology leveraging machine learning such as Azure Machine Learning Studio and Azure Computer Vision.",
        time: "SDF",
        title: "Machine Learning",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_ONE
    },
    {
        descript: "I have light experience with Python scripting in school. I completed a course dedicated to lightweight python scripting such as writing a script to apply filters on images and a script to do word counts on a text file using regression. Additionally I am working on a Machine learning course that utilizes Python.",
        time: "SDF",
        title: "Python",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_TWO
    }
];


/***/ }),

/***/ "./src/app/skill/skill.component.css":
/*!*******************************************!*\
  !*** ./src/app/skill/skill.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    height: 450px;\r\n    background: #00000045;\r\n}\r\n.card-text{\r\n    min-height:100px;\r\n    max-height:100px;\r\n}\r\n.btn {\r\ncolor: whitesmoke;\r\nborder-color: whitesmoke;\r\n}\r\np{\r\n    margin: 0 0 50px 0;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/skill/skill.component.html":
/*!********************************************!*\
  !*** ./src/app/skill/skill.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-group\">\r\n  <div *ngFor=\"let skill of skills; index as i\" class=\"card\">\r\n    <div [ngSwitch]=\"skill?.level\">\r\n      <img *ngSwitchCase=\"levelType.LEVEL_ONE\" class=\"card-img-top\" src=\"assets\\images\\Skill_1.png\"\r\n        alt=\"Card image cap\">\r\n      <img *ngSwitchCase=\"levelType.LEVEL_TWO\" class=\"card-img-top\" src=\"assets\\images\\Skill_2.png\"\r\n        alt=\"Card image cap\">\r\n      <img *ngSwitchCase=\"levelType.LEVEL_THREE\" class=\"card-img-top\" src=\"assets\\images\\Skill_3.png\"\r\n        alt=\"Card image cap\">\r\n      <img *ngSwitchCase=\"levelType.LEVEL_FOUR\" class=\"card-img-top\" src=\"assets\\images\\Skill_4.png\"\r\n        alt=\"Card image cap\">\r\n      <img *ngSwitchDefault class=\"card-img-top\" src=\"assets\\images\\Skill_1.png\" alt=\"Card image cap\">\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">{{skill.title}}</h5>\r\n      <p class=\"card-text\">{{skillService.GetTrimmedSkillDescription(skill)}}</p>\r\n      <a class=\"btn btn-lg btn-outline-primary\" href=\"{{'#'+i+'_cardcollapse'}}\" >View Experience</a>\r\n    </div>\r\n    <!------------------------->\r\n    <!--ng-template #content-->\r\n      <div class=\"collapse\" id=\"{{'#'+i+'_cardcollapse'}}\">\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <div [ngSwitch]=\"skill?.level\">\r\n              <img *ngSwitchCase=\"levelType.LEVEL_ONE\" class=\"card-img-top\" src=\"assets\\images\\Skill_1.png\"\r\n                alt=\"Card image cap\">\r\n              <img *ngSwitchCase=\"levelType.LEVEL_TWO\" class=\"card-img-top\" src=\"assets\\images\\Skill_2.png\"\r\n                alt=\"Card image cap\">\r\n              <img *ngSwitchCase=\"levelType.LEVEL_THREE\" class=\"card-img-top\" src=\"assets\\images\\Skill_3.png\"\r\n                alt=\"Card image cap\">\r\n              <img *ngSwitchCase=\"levelType.LEVEL_FOUR\" class=\"card-img-top\" src=\"assets\\images\\Skill_4.png\"\r\n                alt=\"Card image cap\">\r\n              <img *ngSwitchDefault class=\"card-img-top\" src=\"assets\\images\\Skill_1.png\" alt=\"Card image cap\">\r\n            </div>\r\n            <h5 style=\"text-align: center;\">{{skill.title}}</h5>\r\n          </div>\r\n          <div class=\"col-9\">\r\n            <p>{{skill.descript}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <!--/ng-template-->\r\n    <!------------------------->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/skill/skill.component.ts":
/*!******************************************!*\
  !*** ./src/app/skill/skill.component.ts ***!
  \******************************************/
/*! exports provided: SkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function() { return SkillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _skill_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skill.service */ "./src/app/skill.service.ts");
/* harmony import */ var _skill_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skill.model */ "./src/app/skill.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SkillComponent = /** @class */ (function () {
    function SkillComponent(skillService, modalService) {
        this.skillService = skillService;
        this.modalService = modalService;
        this.levelType = _skill_model__WEBPACK_IMPORTED_MODULE_2__["LevelType"];
    }
    SkillComponent.prototype.ngOnInit = function () {
        this.skills = this.skillService.getSkills();
    };
    SkillComponent.prototype.open = function (content) {
        //this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
        document.querySelector(".card");
    };
    SkillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skill',
            template: __webpack_require__(/*! ./skill.component.html */ "./src/app/skill/skill.component.html"),
            styles: [__webpack_require__(/*! ./skill.component.css */ "./src/app/skill/skill.component.css")]
        }),
        __metadata("design:paramtypes", [_skill_service__WEBPACK_IMPORTED_MODULE_1__["SkillService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], SkillComponent);
    return SkillComponent;
}());



/***/ }),

/***/ "./src/app/slide.service.ts":
/*!**********************************!*\
  !*** ./src/app/slide.service.ts ***!
  \**********************************/
/*! exports provided: SlideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideService", function() { return SlideService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlideService = /** @class */ (function () {
    function SlideService() {
        this.currentSlide = 0;
    }
    SlideService.prototype.getCurrentSlide = function () {
        return this.currentSlide;
    };
    SlideService.prototype.setCurrentSlide = function (slideNum) {
        this.currentSlide = slideNum;
    };
    SlideService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SlideService);
    return SlideService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dhoga\VS_Code_Projects\angular-resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map