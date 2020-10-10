(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dhoga\VS_Code_Projects\angular-resume\src\main.ts */"zUnb");


/***/ }),

/***/ "2U31":
/*!*****************************************!*\
  !*** ./src/app/nav/navbar.component.ts ***!
  \*****************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _slide_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slide.service */ "8l9J");
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
    NavBarComponent.ctorParameters = function () { return [
        { type: _slide_service__WEBPACK_IMPORTED_MODULE_1__["SlideService"] }
    ]; };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nav-bar',
            template: "\n    <nav class=\"navbar navbar-default border\" style=\"background:#4c849985\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">Dan Hogan</a>\n      </div>\n      <ul class=\"nav nav-pills\">\n        <li class=\"nav-item\" (click)='slider.setCurrentSlide(0)'><button class=\"nav-link\" [ngClass]=\"slider.getCurrentSlide() === 0 ? 'active':'' \">Bio</button></li>\n        <li class=\"nav-item\" (click)='slider.setCurrentSlide(1)'><button class=\"nav-link\" [ngClass]=\"slider.getCurrentSlide() === 1 ? 'active':'' \">Skills</button></li>\n      </ul>\n    </div>\n  </nav>\n    ",
            styles: ["\n    .navbar-default {\n      \n    }\n    button.nav-link { \n      background:none;\n      border:none; \n    }\n    .navbar-brand {\n      color:white\n    }\n    .nav-link.active {\n      background-color:#a7b1b1b8\n    }\n    "]
        })
        /**
         * This component uses the slider service to figure out which screen to show.
         */
        ,
        __metadata("design:paramtypes", [_slide_service__WEBPACK_IMPORTED_MODULE_1__["SlideService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "34qb":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var _raw_loader_bio_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./bio.component.html */ "zbXd");
/* harmony import */ var _bio_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bio.component.css */ "7HM1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
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
    BioComponent.ctorParameters = function () { return []; };
    BioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-bio',
            template: _raw_loader_bio_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_bio_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
        /**
         * Component for the Bio information slide. Just hold's text info so no logic needed.
         */
        ,
        __metadata("design:paramtypes", [])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "7HM1":
/*!***************************************!*\
  !*** ./src/app/bio/bio.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jpby9iaW8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "8l9J":
/*!**********************************!*\
  !*** ./src/app/slide.service.ts ***!
  \**********************************/
/*! exports provided: SlideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideService", function() { return SlideService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlideService = /** @class */ (function () {
    function SlideService() {
        this.currentSlide = 0; //start with the Bio slide
    }
    SlideService.prototype.getCurrentSlide = function () {
        return this.currentSlide;
    };
    //0-Bio, 1-Skill
    SlideService.prototype.setCurrentSlide = function (slideNum) {
        this.currentSlide = slideNum;
    };
    SlideService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        /*
         * This service keeps track of the current screen between the Bio
         * and Skill screens. They are nested in a bootstrap carousel so this
         * function keeps track of the current active slide and switching them.
         */
    ], SlideService);
    return SlideService;
}());



/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.css */ "RV7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _slide_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slide.service */ "8l9J");
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
    HomeComponent.ctorParameters = function () { return [
        { type: _slide_service__WEBPACK_IMPORTED_MODULE_3__["SlideService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
        /**
         * This component control the home page layout. Uses the slider service
         * to figure out the active slide to show.
         */
        ,
        __metadata("design:paramtypes", [_slide_service__WEBPACK_IMPORTED_MODULE_3__["SlideService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-pic{\r\n    max-width: 250px;\r\n    max-height: 350px;\r\n    filter: grayscale();\r\n}\r\nul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n.container {\r\n    padding: 10px 10px; \r\n    padding-left: 5%;   \r\n    height: 100%;\r\n    min-height: -webkit-fill-available;\r\n    max-width: 100%;\r\n}\r\n.col-3 {\r\n  height: 100%;\r\n  min-height: -webkit-fill-available;\r\n}\r\n.no-gutters {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n.row {\r\n  max-width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixTQUFTO0VBQ1g7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25CO0FBR0E7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtcGlje1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoKTtcclxufVxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7IFxyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTsgICBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uY29sLTMge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcblxyXG4ubm8tZ3V0dGVycyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "AytR":
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

/***/ "B2A0":
/*!******************************************!*\
  !*** ./src/app/skill/skill.component.ts ***!
  \******************************************/
/*! exports provided: SkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function() { return SkillComponent; });
/* harmony import */ var _raw_loader_skill_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./skill.component.html */ "JAHk");
/* harmony import */ var _skill_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill.component.css */ "Zc/W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skill_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skill.model */ "nIp+");
/* harmony import */ var _skill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skill.service */ "j8k5");
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
    function SkillComponent(skillService) {
        this.skillService = skillService;
        this.levelType = _skill_model__WEBPACK_IMPORTED_MODULE_3__["LevelType"];
        this.index = 1;
    }
    SkillComponent.prototype.ngOnInit = function () {
        this.skills = this.skillService.getSkills(); //Populate the skills with the skills from the skill service.
        /**
         * I have to do some calculations to figure out where to put the
         * details pane. The idea is to look at the screen size, side info size
         * and card size to figure out how many cards can fit on the screen in
         * a row before a break.
         */
        var cardRow = window.screen.width - document.getElementsByClassName('col-3')[0].clientWidth;
        var cardW = 250;
        this.index = cardRow / cardW;
        this.index = Math.trunc(this.index); //On this index add a skill details row.
        for (var i = 0; i < this.skills.length; i++) {
            if (this.addBreak(i)) {
                this.skills.splice(i, 0, null); //Add a null skill at the break indexes. Once the template is evaluated it will check for a null skill to populate with the skill details component
                i++;
            }
        }
        this.skills.splice(this.skills.length, 0, null); //Add final break
    };
    SkillComponent.prototype.addBreak = function (i) {
        return ((i + 1) % (this.index + 1) == 0); //if that index is a multiple of the row length
    };
    SkillComponent.ctorParameters = function () { return [
        { type: _skill_service__WEBPACK_IMPORTED_MODULE_4__["SkillService"] }
    ]; };
    SkillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-skill',
            template: _raw_loader_skill_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_skill_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
        /**
         * This class handles the population of the skill cards in the card group.
         */
        ,
        __metadata("design:paramtypes", [_skill_service__WEBPACK_IMPORTED_MODULE_4__["SkillService"]])
    ], SkillComponent);
    return SkillComponent;
}());



/***/ }),

/***/ "Bzn8":
/*!**********************************************************************!*\
  !*** ./src/app/skill-detailed-card/skill-detailed-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: SkillDetailedCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillDetailedCardComponent", function() { return SkillDetailedCardComponent; });
/* harmony import */ var _raw_loader_skill_detailed_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./skill-detailed-card.component.html */ "enlg");
/* harmony import */ var _skill_detailed_card_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill-detailed-card.component.css */ "q31H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skill_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skill-detail.service */ "jSbY");
/* harmony import */ var _skill_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skill.model */ "nIp+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SkillDetailedCardComponent = /** @class */ (function () {
    function SkillDetailedCardComponent(skillDetailService) {
        this.skillDetailService = skillDetailService;
        this.isCollapsed = true; //Keep track if this details pane is collapsed.
        this.levelType = _skill_model__WEBPACK_IMPORTED_MODULE_4__["LevelType"];
    }
    SkillDetailedCardComponent.prototype.ngOnInit = function () {
        this.skillDetailService.add(this, this.index); //Add this component to the service.
    };
    //This will control the expand and collapse functionality of the pane.
    SkillDetailedCardComponent.prototype.expandCollapse = function (current) {
        var _this = this;
        if (this.current == current) //The view experience is double clicked for a skill.
         {
            this.isCollapsed = !this.isCollapsed; //close the pane if it is open or vice versa/
            if (!this.isCollapsed) //If you are opening it scroll to the details.
             {
                setTimeout(function () {
                    _this.detailsRow.nativeElement.scrollIntoViewIfNeeded({ behavior: 'smooth' });
                }, 200, this);
            }
        }
        else {
            this.isCollapsed = false; //when you click on a new view experience button you should open the pane no matter what.
            setTimeout(function () {
                _this.detailsRow.nativeElement.scrollIntoViewIfNeeded({ behavior: 'smooth' });
            }, 200, this);
        }
        this.current = current;
    };
    SkillDetailedCardComponent.ctorParameters = function () { return [
        { type: _skill_detail_service__WEBPACK_IMPORTED_MODULE_3__["SkillDetailService"] }
    ]; };
    SkillDetailedCardComponent.propDecorators = {
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        detailsRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['details',] }]
    };
    SkillDetailedCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'skill-detailed-card',
            template: _raw_loader_skill_detailed_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_skill_detailed_card_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
        /**
         * This class controls the details pane for a selected skill.
         */
        ,
        __metadata("design:paramtypes", [_skill_detail_service__WEBPACK_IMPORTED_MODULE_3__["SkillDetailService"]])
    ], SkillDetailedCardComponent);
    return SkillDetailedCardComponent;
}());



/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"carousel slide\" id=\"homeControl\" data-ride=\"carousel\">\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-item\" [ngClass]=\"{'active':slider.getCurrentSlide()==0}\">\r\n      <app-bio></app-bio>\r\n    </div>\r\n    <div class=\"carousel-item\" [ngClass]=\"{'active':slider.getCurrentSlide()==1}\">\r\n        <app-skill></app-skill>\r\n      </div>\r\n  </div>\r\n</div> ");

/***/ }),

/***/ "JAHk":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skill/skill.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-group\">\r\n  <div *ngFor=\"let skill of skills; index as i\">\r\n      <div *ngIf=\"skill===null; else notShow\">\r\n          <skill-detailed-card [index]=\"i\" [ngbCollapse]=\"isCollapsed\"></skill-detailed-card>\r\n        </div>\r\n        <ng-template #notShow>\r\n            <skill-card [skill]=\"skill\" [index]=\"i\"></skill-card>\r\n        </ng-template>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "LSgJ":
/*!****************************************************!*\
  !*** ./src/app/skill-card/skill-card.component.ts ***!
  \****************************************************/
/*! exports provided: SkillCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillCardComponent", function() { return SkillCardComponent; });
/* harmony import */ var _raw_loader_skill_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./skill-card.component.html */ "Rrcf");
/* harmony import */ var _skill_card_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill-card.component.css */ "vqwO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skill_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skill-detail.service */ "jSbY");
/* harmony import */ var _skill_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skill.model */ "nIp+");
/* harmony import */ var _skill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skill.service */ "j8k5");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SkillCardComponent = /** @class */ (function () {
    function SkillCardComponent(skillService, skillDetailService) {
        this.skillService = skillService;
        this.skillDetailService = skillDetailService;
        this.levelType = _skill_model__WEBPACK_IMPORTED_MODULE_4__["LevelType"];
    }
    SkillCardComponent.prototype.expandDetails = function () {
        this.skillDetailService.expand(this.index, this.skill);
    };
    SkillCardComponent.ctorParameters = function () { return [
        { type: _skill_service__WEBPACK_IMPORTED_MODULE_5__["SkillService"] },
        { type: _skill_detail_service__WEBPACK_IMPORTED_MODULE_3__["SkillDetailService"] }
    ]; };
    SkillCardComponent.propDecorators = {
        skill: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    SkillCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'skill-card',
            template: _raw_loader_skill_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_skill_card_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
        /**
         * Component for a skill card. When View Experience is clicked this class will call the
         * the skill details service with the it's index so the details
         * pane can expand.
         */
        ,
        __metadata("design:paramtypes", [_skill_service__WEBPACK_IMPORTED_MODULE_5__["SkillService"], _skill_detail_service__WEBPACK_IMPORTED_MODULE_3__["SkillDetailService"]])
    ], SkillCardComponent);
    return SkillCardComponent;
}());



/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carousel-item{\r\n    max-width: 100%;\r\n    height: 100%;\r\n    /*max-height: 600px;*/\r\n    padding-top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1pdGVte1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyptYXgtaGVpZ2h0OiA2MDBweDsqL1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "Rrcf":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skill-card/skill-card.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='card'>\n<div [ngSwitch]=\"skill?.level\">\n    <img *ngSwitchCase=\"levelType.LEVEL_ONE\" class=\"card-img-top\" src=\"assets\\images\\Skill_1.png\"\n      alt=\"Card image cap\">\n    <img *ngSwitchCase=\"levelType.LEVEL_TWO\" class=\"card-img-top\" src=\"assets\\images\\Skill_2.png\"\n      alt=\"Card image cap\">\n    <img *ngSwitchCase=\"levelType.LEVEL_THREE\" class=\"card-img-top\" src=\"assets\\images\\Skill_3.png\"\n      alt=\"Card image cap\">\n    <img *ngSwitchCase=\"levelType.LEVEL_FOUR\" class=\"card-img-top\" src=\"assets\\images\\Skill_4.png\"\n      alt=\"Card image cap\">\n    <img *ngSwitchDefault class=\"card-img-top\" src=\"assets\\images\\Skill_1.png\" alt=\"Card image cap\">\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{skill.title}}</h5>\n    <p class=\"card-text\">{{skillService.GetTrimmedSkillDescription(skill)}}</p>\n    <button class=\"btn btn-lg btn-outline-primary\" (click)=\"expandDetails()\">View Experience</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
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
    /**
     * This function will setup the clickable area for the
     * arrow on the homepage and setup an subscription to the window resize
     * event that will resize the clickable area when the window is resized.
     */
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setClickableArrow();
        this.resizeObservable$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'resize');
        this.resizeSubscription$ = this.resizeObservable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000)).subscribe(function (evt) {
            _this.setClickableArrow();
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.resizeSubscription$.unsubscribe();
    };
    /**
     * This function will do some math to check the dimensions of the
     * arrow picture and set the clickable arrow based on a found ratio.
     */
    AppComponent.prototype.setClickableArrow = function () {
        var width = (Number)(jquery__WEBPACK_IMPORTED_MODULE_3__('.down')[0]["width"]);
        var height = (Number)(jquery__WEBPACK_IMPORTED_MODULE_3__('.down')[0]["height"]);
        /* Set the area for the clickable arrow. */
        var point1 = width * 0.1 + "," + height * 0.53;
        var point2 = width * 0.245 + "," + height * 0.53;
        var point3 = width * 0.173 + "," + height * 0.77;
        jquery__WEBPACK_IMPORTED_MODULE_3__('#ArrowArea')[0]["coords"] = point1 + "," + point2 + "," + point3; //I have to temporarily set the coordinates through jQuery. I should have put more of the index.html content in app.component.html
        jquery__WEBPACK_IMPORTED_MODULE_3__('#ArrowArea')[0]['cursor'] = 'pointer';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"background: #454444bd\">\r\n<nav-bar></nav-bar>\r\n  <div class=\"container no-gutters\">\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <div>\r\n          <img src=\"./assets/images/59908517_457463458331413_1995375044749950976_n.jpg\" class=\"img-thumbnail profile-pic\" />\r\n        </div>\r\n        <div>\r\n          <ul>\r\n            <li>\r\n              Email:DanHoganRed@gmail.com\r\n            </li>\r\n            <li>\r\n              Phone:(613)899-3407\r\n            </li>\r\n            <li>\r\n              Location: Edmonton, AB Canada\r\n            </li>\r\n            <li>\r\n              Github: <a href=\"https://github.com/DanHoganRed\">DanHoganRed</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://www.linkedin.com/in/daniel-hogan-a83030a6/\">LinkedIn</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"assets/DanHoganResume_2019_12_04.docx\">Resume Download</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!--div class=\"ui list\">\r\n        <div class=\"item\">\r\n          <i class=\"users icon\"></i>\r\n          <div class=\"content\">\r\n            Semantic UI\r\n          </div>\r\n        </div>\r\n        <div class=\"item\">\r\n          <i class=\"marker icon\"></i>\r\n          <div class=\"content\">\r\n            New York, NY\r\n          </div>\r\n        </div>\r\n        <div class=\"item\">\r\n          <i class=\"mail icon\"></i>\r\n          <div class=\"content\">\r\n            <a href=\"mailto:jack@semantic-ui.com\">jack@semantic-ui.com</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"item\">\r\n          <i class=\"linkify icon\"></i>\r\n          <div class=\"content\">\r\n            <a href=\"http://www.semantic-ui.com\">semantic-ui.com</a>\r\n          </div>\r\n        </div>\r\n      </div-->\r\n      <div class=\"col-12 col-sm-6 col-md-9\">\r\n        <app-home></app-home>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bio/bio.component */ "34qb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _nav_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/navbar.component */ "2U31");
/* harmony import */ var _skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skill-card/skill-card.component */ "LSgJ");
/* harmony import */ var _skill_detailed_card_skill_detailed_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skill-detailed-card/skill-detailed-card.component */ "Bzn8");
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skill/skill.component */ "B2A0");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _nav_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _bio_bio_component__WEBPACK_IMPORTED_MODULE_4__["BioComponent"],
                _skill_skill_component__WEBPACK_IMPORTED_MODULE_9__["SkillComponent"],
                _skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_7__["SkillCardComponent"],
                _skill_detailed_card_skill_detailed_card_component__WEBPACK_IMPORTED_MODULE_8__["SkillDetailedCardComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "Zc/W":
/*!*******************************************!*\
  !*** ./src/app/skill/skill.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.card {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    height: 450px;\r\n    background: #00000045;\r\n}\r\n.card-text{\r\n    min-height:100px;\r\n    max-height:100px;\r\n}\r\n.btn {\r\ncolor: whitesmoke;\r\nborder-color: whitesmoke;\r\n}\r\np{\r\n    margin: 0 0 50px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwvc2tpbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsd0JBQXdCO0FBQ3hCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9za2lsbC9za2lsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY2FyZCB7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwNDU7XHJcbn1cclxuLmNhcmQtdGV4dHtcclxuICAgIG1pbi1oZWlnaHQ6MTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OjEwMHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuY29sb3I6IHdoaXRlc21va2U7XHJcbmJvcmRlci1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxucHtcclxuICAgIG1hcmdpbjogMCAwIDUwcHggMDtcclxufSJdfQ== */");

/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "enlg":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skill-detailed-card/skill-detailed-card.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--div class=\"collapse\" id=\"cardCollapse\" [ngbCollapse]=\"isCollapsed\" style=\"padding: 0\" [isAnimated]=\"true\" #details-->\n<div class=\"collapse\" id=\"cardCollapse\" [ngbCollapse]=\"isCollapsed\" style=\"padding: 0\" #details>\n    <div class=\"row detailsRow\" *ngIf=\"skill!=null\" #details>\n      <div class=\"col-3\">\n        <div [ngSwitch]=\"skill?.level\">\n          <img *ngSwitchCase=\"levelType.LEVEL_ONE\" class=\"card-img-top\" src=\"assets\\images\\Skill_1.png\"\n            alt=\"Card image cap\">\n          <img *ngSwitchCase=\"levelType.LEVEL_TWO\" class=\"card-img-top\" src=\"assets\\images\\Skill_2.png\"\n            alt=\"Card image cap\">\n          <img *ngSwitchCase=\"levelType.LEVEL_THREE\" class=\"card-img-top\" src=\"assets\\images\\Skill_3.png\"\n            alt=\"Card image cap\">\n          <img *ngSwitchCase=\"levelType.LEVEL_FOUR\" class=\"card-img-top\" src=\"assets\\images\\Skill_4.png\"\n            alt=\"Card image cap\">\n          <img *ngSwitchDefault class=\"card-img-top\" src=\"assets\\images\\Skill_1.png\" alt=\"Card image cap\">\n        </div>\n        <h5 style=\"text-align: center;\">{{skill.title}}</h5>\n      </div>\n      <div class=\"col-9\">\n        <p>{{skill.descript}}</p>\n      </div>\n    </div>\n<!--/div-->");

/***/ }),

/***/ "j8k5":
/*!**********************************!*\
  !*** ./src/app/skill.service.ts ***!
  \**********************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skill_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill.model */ "nIp+");
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
    //This function will trim the description field for the card view
    //on the skilll page.
    SkillService.prototype.GetTrimmedSkillDescription = function (skill) {
        return skill.descript.substring(0, skill.descript.indexOf(".")) + "...";
    };
    SkillService.ctorParameters = function () { return []; };
    SkillService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        /*
         * This service handles retrieving skills for other components.
         * Normally this service would handle calls to a db but this is just for a static
         * webpage so I can get away with hardcoding skills.
         */
        ,
        __metadata("design:paramtypes", [])
    ], SkillService);
    return SkillService;
}());

//Define all of the skill data
var SKILLS = [
    {
        descript: "Strong Java experience achieved through coursework and work experience. Many courses at Carleton were Java specific. They focused on teaching the fundamentals of object oriented programing. Additionally other tools were explored such as the Spring framework to make web apps, HQL for ORM and JUnit for testing. All of these skills were further developed through my year long coop position at TravelClick.",
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
        descript: "Strong experience of C# achieved through coursework and my position at Avanade. Avanade is a company that specializes in .Net experience. Because of this I have been heavily exposed to C# throughout my work. Tools used while at Avanade include the CRM.SDK, ASP.Net Framework, Entity Framework and Identity Framework. Additionally my 4th year engineering project at Carleton utilized Xamarin for mobile development done in C#.",
        time: "SDF",
        title: "C#",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_FOUR
    },
    {
        descript: "Experienced with Javascript through basic DOM manipulation with JQuery as well as interfacing with backend services through AJAX calls. Courses at Carleton included light front-end development including Javascript. Additionally my work at Travelclick Abandonment Services was strictly using Javascript to further bolster my understanding. Development at Avanade also required developing with Javascript for custom CRM form logic and well as custom web resources to be used in CRM.",
        time: "SDF",
        title: "JavaScript",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_THREE
    },
    {
        descript: "I spent one year devloping a custom Dynamics CRM solution for an Avanade Project. Work included; creating custom plugins, actions and workflows in C#, developing custom form logic using primarily using Javascript and assisting with setting up environment infrastucture.",
        time: "SDF",
        title: "Dynamics 365",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_THREE
    },
    {
        descript: "I am very familiar with Agile Development both in practice and in theory. In Carleton I attended a course dedicated to development processes with a large portion covering Agile Development. Additionally Agile development was the ideology used in both TravelClick and Avanade.",
        time: "SDF",
        title: "Agile Development",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_THREE
    },
    {
        descript: "Skills developed with Angular through online courses and personal projects. I have completed multiple courses on pluralsight teaching the fundamentals of Angular. With the knowledge gained from these courses I have developed this resume using Angular 6 to put these skills into practice.    ",
        time: "SDF",
        title: "Angular",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_TWO
    },
    {
        descript: "I am most familar and effecient using Azure Devops and Git. I have used Git while at Carleton University for multiple projects. I have also used Git for all development done at Travelclick. Additionally I used Azure Devops for source control while at Avanade.",
        time: "SDF",
        title: "Source Control",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_THREE
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
        descript: "Utilized Linux shell in my coop positions giving me the ability to do basic shell operations. In my position at TravelClick I used the linux shell to traverse various remote servers and analyze log files. At Blackberry QNX the development environment was run on Ubuntu and scripts were executed and developed using the terminal. ",
        time: "SDF",
        title: "Linux Shell Scripting",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_TWO
    },
    {
        descript: "I have experience developing for Android through my 4th year engineering project at Carleton. My 4th year engineering project was developed using Xamarin in Visual Studio. My development was done for Android devices and included developing backend communication, designing views and functionality using components such as forms, popups and navigation drawers. Additionally I have done some work on unfinished apps in traditional Android studio.",
        time: "SDF",
        title: "Android Mobile Dev",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_TWO
    },
    {
        descript: "Machine Learning is an exciting and interesting subject for me. However I have not yet gotten any hands-on experience doing it. I understand some of the basic concepts associated with Machine Learning however this is a subject I am still learning and I'm looking to get experience with.",
        time: "SDF",
        title: "Machine Learning",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_ONE
    },
    {
        descript: "I have light experience with Python scripting in school. I completed a course dedicated to lightweight python scripting such as writing a script to apply filters on images and a script to do word counts on a text file using regression.",
        time: "SDF",
        title: "Python",
        level: _skill_model__WEBPACK_IMPORTED_MODULE_1__["LevelType"].LEVEL_TWO
    }
];


/***/ }),

/***/ "jSbY":
/*!*****************************************!*\
  !*** ./src/app/skill-detail.service.ts ***!
  \*****************************************/
/*! exports provided: SkillDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillDetailService", function() { return SkillDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillDetailService = /** @class */ (function () {
    /*
     * In order to keep track of each card in the card group I
     * have keep their index in the card group in mind. The endIndexs
     * array keeps track of the indexes in the card group that would be
     * at the end of the row where the details will be. The detailsPanes
     * object is and instance of those details row.
     */
    function SkillDetailService() {
        this.endIndexs = new Array();
        this.detailPanes = new Array();
    }
    /*
     * When the skill cards are being populated in the card group and
     * and the end of a row is found this method is called so that the
     * created skills detail card is added to the service for use.
     */
    SkillDetailService.prototype.add = function (SkillDetailCard, index) {
        this.endIndexs.push(index);
        this.detailPanes.push(SkillDetailCard);
    };
    /**
     * This method is called when the view experience button is clicked.
     * The index of the card and the skill data is passed and used to populate
     * the correct details pane.
     */
    SkillDetailService.prototype.expand = function (index, skill) {
        var count = 0;
        var stop = false; //Stop at the first suitable details pane found
        //Check each skill details pane position. Expand the details pane 
        //with an index that is the first to be greater than the selected card index.  
        this.endIndexs.forEach(function (i) {
            if (!stop && index <= i) {
                this.detailPanes[count].skill = skill;
                this.detailPanes[count].expandCollapse(index);
                stop = true;
            }
            count++;
        }, this);
    };
    SkillDetailService.ctorParameters = function () { return []; };
    SkillDetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        /*
         * This service is used for displaying for skill data in the
         * expanded details row.
         */
        ,
        __metadata("design:paramtypes", [])
    ], SkillDetailService);
    return SkillDetailService;
}());



/***/ }),

/***/ "nIp+":
/*!********************************!*\
  !*** ./src/app/skill.model.ts ***!
  \********************************/
/*! exports provided: LevelType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelType", function() { return LevelType; });
//Define an enum for leveltype because it's nicer to deal with.
var LevelType;
(function (LevelType) {
    LevelType[LevelType["LEVEL_ONE"] = 0] = "LEVEL_ONE";
    LevelType[LevelType["LEVEL_TWO"] = 1] = "LEVEL_TWO";
    LevelType[LevelType["LEVEL_THREE"] = 2] = "LEVEL_THREE";
    LevelType[LevelType["LEVEL_FOUR"] = 3] = "LEVEL_FOUR";
})(LevelType || (LevelType = {}));


/***/ }),

/***/ "q31H":
/*!***********************************************************************!*\
  !*** ./src/app/skill-detailed-card/skill-detailed-card.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".detailsRow{\r\n    width: 100%;\r\n    min-height: 350px;\r\n    transition: all 5s !important;\r\n    padding-top: 8%;\r\n    font-size:14pt;\r\n}\r\n\r\n.collapse {\r\n    transition: all 5s !important;\r\n}\r\n\r\n.collapse.show {\r\n    transition: all 5s !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwtZGV0YWlsZWQtY2FyZC9za2lsbC1kZXRhaWxlZC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBS2pCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUtJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUtJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3NraWxsLWRldGFpbGVkLWNhcmQvc2tpbGwtZGV0YWlsZWQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHNSb3d7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNXMgIWltcG9ydGFudDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgNXMgIWltcG9ydGFudDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCA1cyAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNXMgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCA1cyAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDglO1xyXG4gICAgZm9udC1zaXplOjE0cHQ7XHJcbn1cclxuXHJcbi5jb2xsYXBzZSB7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCA1cyAhaW1wb3J0YW50O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCA1cyAhaW1wb3J0YW50O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDVzICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1cyAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDVzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2xsYXBzZS5zaG93IHtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDVzICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDVzICFpbXBvcnRhbnQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgNXMgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDVzICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNXMgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "vqwO":
/*!*****************************************************!*\
  !*** ./src/app/skill-card/skill-card.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    height: 450px;\r\n    background: #00000045;\r\n}\r\n.card-text{\r\n    min-height:100px;\r\n    max-height:100px;\r\n}\r\n.btn {\r\ncolor: whitesmoke;\r\nborder-color: whitesmoke;\r\n}\r\np{\r\n    margin: 0 0 50px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwtY2FyZC9za2lsbC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQix3QkFBd0I7QUFDeEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NraWxsLWNhcmQvc2tpbGwtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDQ1O1xyXG59XHJcbi5jYXJkLXRleHR7XHJcbiAgICBtaW4taGVpZ2h0OjEwMHB4O1xyXG4gICAgbWF4LWhlaWdodDoxMDBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbmNvbG9yOiB3aGl0ZXNtb2tlO1xyXG5ib3JkZXItY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBtYXJnaW46IDAgMCA1MHB4IDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zbXd":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bio/bio.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <h2>\r\n      Welcome to my Resume! \r\n  </h2>\r\n\r\n  <p>\r\n      I am a Software Developer from Ottawa Ontario. This resume was developed in part to advertise myself but also as a way for me to learn Angular and I had a great experience making it! Check out this websites source code <a href=\"https://github.com/DanHoganRed/Angular-Resume\">here</a>. If you’re interested in a traditional resume please see the sidebar document download link. My main interests are currently .Net development, Front-End Development and Mobile Development. I am most comfortable doing back end work however I am exploring more front-end development as of late. You can view a full briefing of my skills in the skills section. <b>Please keep in mind that I am still working on this site so some things may not currently be working.</b>  \r\n  </p> \r\n\r\n  <h3>\r\n      Work Experience  \r\n  </h3>\r\n  <h4>\r\n      Avanade\t \t \t \t \t \t \t                      June 2018-Febuary 2019\r\n  </h4>\r\n  <ul>\r\n    <li>\r\n        Developing a custom Dynamics 365 solution within an Agile work environment. Development included writing CRM plugins in C#, writing Javascript embedded in CRM Forms and writing custom web resources using Javascript libraries such as JQuery and Kendo UI.\r\n    </li>\r\n    <li>\r\n        Aiding in the design and creation of the CICD process within the project in TFS. Work included creating build and release definitions as well as assisting to define development process within multiple environments. Additional powershell scripts were written to automate installation and configuration of the project development environment.\r\n    </li>\r\n  </ul>\r\n  <h3>\r\n      Education  \r\n  </h3>\r\n  <h4>\r\n      Carleton University\t \t \t \t \t \t \t          September 2013-April 2018\r\n  </h4>\r\n  <p>\r\n      Bachelor of Engineering, Software, Coop    \r\n  </p> \r\n  <h3>\r\n      Coop Positions  \r\n  </h3>\r\n  <h4>\r\n      Core OS Developer                                                                                                               May 2017-August 2017\r\n      Blackberry QNX, Kanata, Ontario       \r\n  </h4>\r\n\r\n      <ul>\r\n        <li>\r\n            Developing unit tests for the QNX Kernel in C in order to fulfill ISO 26262 safety compliance. Unit tests were additionally used a vehicle to gain comprehensive knowledge of the OS as well as through other developers, demos and documentation.\r\n        </li>\r\n        <li>\r\n            Improving the unit test framework to support ARM and AARCH64 CPU architectures with knowledge of the GNU C compiler, Makefiles and Linux shell scripts. \r\n        </li>\r\n        <li>\r\n            Finding and documenting bugs in the Kernel.\r\n        </li>\r\n      </ul> \r\n \r\n  <h4>\r\n      Integration Developer                                                                                              January 2016-December 2016\r\n      TravelClick, Ottawa, Ontario           \r\n  </h4>\r\n\r\n      <ul>\r\n        <li>\r\n            Developing, installing and maintaining remote integrations for TravelClick GMS. Development was done using Java 8 in Eclipse using Git for version control. Often required analyzing data and writing queries to extract it.\r\n        </li>\r\n        <li>\r\n            Development of TravelClick Abandonment services which would require writing Javascript to track users through the online booking process of a hotel using JQuery.\r\n        </li>\r\n        <li>\r\n            Working on general tasks often requiring isolating and fixing software bugs or searching through large scale log archives on specific servers using bash.\r\n        </li>\r\n      </ul> \r\n\r\n  <h4>\r\n      Avionics Software Tester                                                                                                     May 2015-August 2015\r\n      Edgewater Computer Systems, Kanata, Ontario             \r\n  </h4>\r\n\r\n      <ul>\r\n        <li>\r\n            Writing C code to verify low level requirements for software developed by Edgewater Computer Systems. This testing was done so that the network card part of the CANIC project can become air-worthy by the D0-178B DAL C verification requirements. \r\n        </li>\r\n      </ul> \r\n");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map