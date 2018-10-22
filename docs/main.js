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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-stretched-tabs {\r\n  max-width: 70%;\r\n  margin: 100px auto;\r\n  margin-top: 25px;\r\n}\r\n\r\n/* MEXER A PARTIR DA FLAG LÁ EMBAIXO!!! */\r\n\r\n.topbar {\r\n  height: 57px;\r\n  background: #282828;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 110;\r\n  position: fixed;\r\n}\r\n\r\n.topbar .user {\r\n  float: right;\r\n}\r\n\r\n.topbar .input-search {\r\n  border-radius: 4px;\r\n  transition: all 300ms ease;\r\n  display: inline-block;\r\n  width: 180px;\r\n  height: 20px;\r\n  margin: 12px 20px 0 0;\r\n  padding: 7px 5px;\r\n  float: left;\r\n  background: #414042;\r\n  outline: none;\r\n  box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  border: none;\r\n\r\n  color: white;\r\n}\r\n\r\n.topbar .user-settings {\r\n  float: left;\r\n  color: white;\r\n  text-align: right;\r\n  cursor: pointer;\r\n  position: relative;\r\n  line-height: 21px;\r\n  padding: 8px 5px 9px 8px;\r\n  margin-left: 12px;\r\n  transition: all 300ms ease;\r\n}\r\n\r\n.m-notifications {\r\n  position: relative;\r\n  display: inline-block;\r\n  float: left;\r\n}\r\n\r\ninput[type=\"text\"], input[type=\"email\"], input[type=\"password\"], input[type=\"number\"] {\r\n  height: 18px;\r\n  padding: 3px 5px;\r\n  font: inherit;\r\n}\r\n\r\n.topbar nav .modules>li .pages {\r\n  left: 0;\r\n}\r\n\r\n.topbar nav .modules>li span:after {\r\n  content: \"\";\r\n  position: relative;\r\n  display: inline-block;\r\n  background: url(https://s3.amazonaws.com/bm3assets/assets/arrow-5141ca34683933111d88e3591f7028bb34de83ab7db652f3ca0e84eea6c2de54.svg) center no-repeat;\r\n  background-size: 5px;\r\n  width: 11px;\r\n  height: 11px;\r\n  margin-left: 8px;\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.topbar .box-settings, .topbar .pages {\r\n  box-shadow: rgba(0,0,0,0.2) 0 0 10px;\r\n  transition: opacity 300ms ease;\r\n  position: absolute;\r\n  background: #FFFFFF;\r\n  min-width: 275px;\r\n  top: 57px;\r\n  right: 0;\r\n  display: none;\r\n  z-index: 150;\r\n}\r\n\r\n.topbar .logo-buzzmonitor {\r\n  background: url(https://s3.amazonaws.com/bm3assets/assets/bm-d61d2ae17953a69190b4ff1263c7b8fd77dd40792343af5352f2b372a5599dd5.png) no-repeat center;\r\n  background-size: 180px;\r\n  width: 180px;\r\n  height: 43px;\r\n  text-indent: -9999px;\r\n  float: left;\r\n  margin-top: 8px;\r\n  margin-left: 30px;\r\n  transition: all 300ms ease;\r\n}\r\n\r\n.topbar nav {\r\n  float: left;\r\n  margin-left: 30px;\r\n}\r\n\r\n.topbar nav .modules>li:hover {\r\n  cursor: pointer;\r\n  color: #ffac30;\r\n}\r\n\r\n.topbar nav .modules>li {\r\n  float: left;\r\n  position: relative;\r\n  color: #E8E8E8;\r\n  font-size: 15px;\r\n}\r\n\r\n.topbar nav .modules>li>a, .topbar nav .modules>li>span {\r\n  padding: 5px 12px;\r\n  display: block;\r\n}\r\n\r\nol, ul {\r\n  list-style: none;\r\n}\r\n\r\n/* COMEÇAR DAQUI!! */\r\n\r\n.search {\r\n  text-align: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.example-form-field {\r\n  width: 30%;\r\n}\r\n\r\n.adminname {\r\n  margin-top: 100px;\r\n}\r\n\r\n.admin-tab {\r\n  place-content: center;\r\n}\r\n\r\n.account-type {\r\n  margin-left: 30px;\r\n}\r\n\r\n.password-field {\r\n  margin-top: 20px;\r\n}\r\n\r\n.unlimited-check {\r\n  margin-left: 15px;\r\n  color: primary;\r\n  font-size: smaller;\r\n}\r\n\r\n.mat-slide-toggle {\r\n  margin-left: 25px;\r\n}\r\n\r\n.mat-form-field {\r\n  display: inline-block;\r\n  position: relative;\r\n  text-align: left;\r\n  margin-right: 15px;\r\n}\r\n\r\n.example-margin {\r\n  width: 17%;\r\n}\r\n\r\n.mat-flat-button {\r\n  color: white;\r\n}\r\n\r\n.mat-tab-group {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.save-button {\r\n  float: right;\r\n  margin-top: 5px;\r\n  margin-right: 200px;\r\n  margin-bottom: 200px;\r\n  width: 15%;\r\n}\r\n\r\n.mat-progress-bar {\r\n  max-width: 60%;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQjs7QUFFRCwwQ0FBMEM7O0FBRTFDO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBR0UsbUJBQW1CO0VBSW5CLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTs7RUFFYixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBSWxCLDJCQUEyQjtDQUM1Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxRQUFRO0NBQ1Q7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1SkFBdUo7RUFDdkoscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUVqQyx5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFHRSxxQ0FBcUM7RUFJckMsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixTQUFTO0VBQ1QsY0FBYztFQUNkLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLG9KQUFvSjtFQUNwSix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFJbEIsMkJBQTJCO0NBQzVCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQscUJBQXFCOztBQUVyQjtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zdHJldGNoZWQtdGFicyB7XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi8qIE1FWEVSIEEgUEFSVElSIERBIEZMQUcgTMOBIEVNQkFJWE8hISEgKi9cclxuXHJcbi50b3BiYXIge1xyXG4gIGhlaWdodDogNTdweDtcclxuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDExMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi50b3BiYXIgLnVzZXIge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRvcGJhciAuaW5wdXQtc2VhcmNoIHtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogMTJweCAyMHB4IDAgMDtcclxuICBwYWRkaW5nOiA3cHggNXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICM0MTQwNDI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRvcGJhciAudXNlci1zZXR0aW5ncyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgcGFkZGluZzogOHB4IDVweCA5cHggOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxufVxyXG5cclxuLm0tbm90aWZpY2F0aW9ucyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgcGFkZGluZzogM3B4IDVweDtcclxuICBmb250OiBpbmhlcml0O1xyXG59XHJcblxyXG4udG9wYmFyIG5hdiAubW9kdWxlcz5saSAucGFnZXMge1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi50b3BiYXIgbmF2IC5tb2R1bGVzPmxpIHNwYW46YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2JtM2Fzc2V0cy9hc3NldHMvYXJyb3ctNTE0MWNhMzQ2ODM5MzMxMTFkODhlMzU5MWY3MDI4YmIzNGRlODNhYjdkYjY1MmYzY2EwZTg0ZWVhNmMyZGU1NC5zdmcpIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA1cHg7XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgaGVpZ2h0OiAxMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcblxyXG4udG9wYmFyIC5ib3gtc2V0dGluZ3MsIC50b3BiYXIgLnBhZ2VzIHtcclxuICAtbW96LWJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4yKSAwIDAgMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4yKSAwIDAgMTBweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMikgMCAwIDEwcHg7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBtaW4td2lkdGg6IDI3NXB4O1xyXG4gIHRvcDogNTdweDtcclxuICByaWdodDogMDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHotaW5kZXg6IDE1MDtcclxufVxyXG5cclxuLnRvcGJhciAubG9nby1idXp6bW9uaXRvciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9ibTNhc3NldHMvYXNzZXRzL2JtLWQ2MWQyYWUxNzk1M2E2OTE5MGI0ZmYxMjYzYzdiOGZkNzdkZDQwNzkyMzQzYWY1MzUyZjJiMzcyYTU1OTlkZDUucG5nKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTgwcHg7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDogNDNweDtcclxuICB0ZXh0LWluZGVudDogLTk5OTlweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG59XHJcblxyXG4udG9wYmFyIG5hdiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi50b3BiYXIgbmF2IC5tb2R1bGVzPmxpOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNmZmFjMzA7XHJcbn1cclxuXHJcbi50b3BiYXIgbmF2IC5tb2R1bGVzPmxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICNFOEU4RTg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4udG9wYmFyIG5hdiAubW9kdWxlcz5saT5hLCAudG9wYmFyIG5hdiAubW9kdWxlcz5saT5zcGFuIHtcclxuICBwYWRkaW5nOiA1cHggMTJweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxub2wsIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4vKiBDT01Fw4dBUiBEQVFVSSEhICovXHJcblxyXG4uc2VhcmNoIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLmFkbWlubmFtZSB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5hZG1pbi10YWIge1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFjY291bnQtdHlwZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5wYXNzd29yZC1maWVsZCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnVubGltaXRlZC1jaGVjayB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgY29sb3I6IHByaW1hcnk7XHJcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ubWF0LXNsaWRlLXRvZ2dsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmV4YW1wbGUtbWFyZ2luIHtcclxuICB3aWR0aDogMTclO1xyXG59XHJcblxyXG4ubWF0LWZsYXQtYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi5tYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICBtYXgtd2lkdGg6IDYwJTtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"topbar\">\n  <div class=\"container-topbar\">\n    <a class=\"logo-buzzmonitor\" href=\"https://app.buzzmonitor.com.br/folders\">Buzzmonitor</a>\n  </div>\n\n  <nav>\n    <ul class=\"modules\">\n\n      <li>\n        <span>Monitoring</span>\n        <ul class=\"pages\">\n          <li><a class=\"manage\" href=\"/user/brands/edit\">Manage projects</a></li>\n\n          <li><a class=\"open\" href=\"/folders?collection_type=monitoring\">View collection</a></li>\n\n          <li><a class=\"import\" href=\"/import\">Import data</a></li>\n\n          <li><a class=\"trigger\" href=\"/triggers\">Triggers (Rules)</a></li>\n\n          <li><a class=\"export\" href=\"/exports\">Exported data</a></li>\n\n\n          <li><a class=\"back\" href=\"#\">Back</a></li>\n        </ul>\n\n      </li>\n\n      <li>\n        <span>Customer Care</span>\n      </li>\n\n      <li>\n        <span>Analytics</span>\n      </li>\n\n    </ul>\n  </nav>\n\n  <div class=\"user\">\n    <input type=\"text\" name=\"form-search-query\" id=\"form-search-query\" class=\"input-search ui-autocomplete-input\" placeholder=\"Search reports\" autocomplete=\"off\">\n\n  </div>\n\n</div>\n\n<div class=\"adminname\" style=\"text-align:center\">\n  <h2>Buzzmonitor Admin</h2>\n</div>\n\n<div class=\"search\">\n  <mat-form-field class=\"example-form-field\">\n    <input matInput type=\"text\" [(ngModel)]=\"value\">\n    <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <button class=\"search-button\" mat-flat-button color=\"warn\" text-color=\"white\">Search</button>\n\n</div>\n\n<div class=\"admin-tab\">\n  <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z2\">\n\n    <mat-tab label=\"USER\">\n      <mat-list role=\"list\">\n        <mat-grid-list cols=\"2\" rows=\"3\" rowHeight=\"6:1\">\n          <mat-grid-tile>User: BuzzMonitor Admin</mat-grid-tile>\n          <mat-grid-tile class=\"password-field\">\n            <mat-form-field>\n              <input matInput placeholder=\"Password\" [type]=\"!hide ? 'password' : 'text'\">\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </mat-form-field>\n          </mat-grid-tile>\n          <mat-grid-tile>Activation state <mat-slide-toggle></mat-slide-toggle></mat-grid-tile>\n          <mat-grid-tile class=\"password-field\">\n            <mat-form-field>\n              <input matInput placeholder=\"Password confirmation\" [type]=\"!hide ? 'password' : 'text'\">\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </mat-form-field>\n          </mat-grid-tile>\n          <mat-grid-tile>Account type *\n            <mat-form-field class=\"account-type\">\n              <mat-select matNativeControl required>\n                <mat-option value=\"unassigned\">Unassigned</mat-option>\n                <mat-option value=\"signed\">Signed</mat-option>\n              </mat-select>\n            </mat-form-field></mat-grid-tile>\n        </mat-grid-list>\n\n        <mat-divider></mat-divider>\n\n        <mat-grid-list cols=\"2\" rowHeight=\"4:1\">\n          <mat-grid-tile class=\"feature-limit\">\n            Brands Limit *\n            <mat-form-field class=\"example-margin\" *ngIf=\"!brands\" style=\"margin-left: 25px;\">\n              <input matInput type=\"number\">\n            </mat-form-field>\n            <mat-checkbox class=\"unlimited-check\" [(ngModel)]=\"disabled-brands\">Unlimited</mat-checkbox>\n          </mat-grid-tile>\n          <mat-grid-tile class=\"feature-limit\">\n            Collected post per month limit *\n            <mat-form-field class=\"example-margin\" *ngIf=\"!posts\" style=\"margin-left: 25px;\">\n              <input matInput type=\"number\">\n            </mat-form-field>\n            <mat-checkbox class=\"unlimited-check\" [(ngModel)]=\"disabled-posts\">Unlimited</mat-checkbox>\n          </mat-grid-tile>\n          <mat-grid-tile class=\"feature-limit\">\n            Analytics profile limit *\n            <mat-form-field class=\"example-margin\" *ngIf=\"!analytics\" style=\"margin-left: 25px;\">\n              <input matInput type=\"number\">\n            </mat-form-field>\n            <mat-checkbox class=\"unlimited-check\" [(ngModel)]=\"disabled-analytics\">Unlimited</mat-checkbox>\n          </mat-grid-tile>\n          <mat-grid-tile class=\"feature-limit\">\n            CRM profiles limit *\n            <mat-form-field class=\"example-margin\" *ngIf=\"!crm\" style=\"margin-left: 25px;\">\n              <input matInput type=\"number\">\n            </mat-form-field>\n            <mat-checkbox class=\"unlimited-check\" [(ngModel)]=\"disabled-crm\">Unlimited</mat-checkbox>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-list>\n    </mat-tab>\n\n    <mat-tab label=\"BRANDS & COLLECT\">\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\">\n          <mat-form-field>\n            <mat-select placeholder=\"Select brand\">\n              <mat-option [value]=\"brand1\"> Brand1 </mat-option>\n              <mat-option [value]=\"brand2\"> Brand2 </mat-option>\n              <mat-option [value]=\"brand3\"> Brand3 </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-list-item>\n\n        <mat-list-item role=\"listitem\"></mat-list-item>\n\n      </mat-list>\n\n\n\n\n\n    </mat-tab>\n\n    <mat-tab label=\"MONTH COMSUPTION\">\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\">Amount of brands: 40/100</mat-list-item>\n        <mat-list-item role=\"listitem\"><mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n        </mat-list-item>\n\n        <mat-list-item role=\"listitem\" style=\"margin-top: 30px\">Amount of posts collecteds: unlimited</mat-list-item>\n        <mat-list-item role=\"listitem\"><mat-progress-bar mode=\"determinate\" value=\"0\"></mat-progress-bar></mat-list-item>\n\n        <mat-list-item role=\"listitem\" style=\"margin-top: 30px\">Amount of analytics: 25/100</mat-list-item>\n        <mat-list-item role=\"listitem\"><mat-progress-bar mode=\"determinate\" value=\"25\"></mat-progress-bar></mat-list-item>\n\n        <mat-list-item role=\"listitem\" style=\"margin-top: 30px\">Amount of CRM profiles: 75/100</mat-list-item>\n        <mat-list-item role=\"listitem\"><mat-progress-bar mode=\"determinate\" value=\"75\"></mat-progress-bar></mat-list-item>\n      </mat-list>\n    </mat-tab>\n\n  </mat-tab-group>\n</div>\n\n<div>\n  <button class=\"save-button\" mat-flat-button color=\"warn\" text-color=\"white\">Save</button>\n</div>\n\n\n\n\n<!-- <img width=\"100\" alt=\"BuzzMonitor Logo\" src=\"https://www.buzzmonitor.com.br/uploads/home_configuracao/thumb/marca_tammy_grande.png\"> -->\n\n<!-- src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n-->\n"

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
        this.title = 'buzzmonitoradmin';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Thales\Desktop\buzzmonitor pedera\buzzmonitoradmin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map