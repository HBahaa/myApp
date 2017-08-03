webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(alertCtrl, navCtrl, authService, storage) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.storage = storage;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'UserName or Password is not correct, Please Try Again!',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.login = function () {
        var navCtrl = this.navCtrl;
        var heba = this;
        this.storage.remove('email');
        this.token = window.btoa(this.username + ':' + this.password);
        this.storage.set("userData", { 'username': this.username, "password": this.password, "token": this.token });
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://mw3demo.cumulocity.com/inventory/managedObjects?owner=" + this.username,
            "method": "GET",
            "headers": {
                "authorization": "Basic " + this.token,
                "cache-control": "no-cache",
                "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
            }
        };
        __WEBPACK_IMPORTED_MODULE_5_jquery__["ajax"](settings).done(function (response) {
            navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }).fail(function (error) {
            // this.navCtrl.push(LoginPage);
            heba.username = "";
            heba.password = "";
            heba.showAlert();
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/myApp/src/pages/login/login.html"*/'\n<ion-content class="login-content">\n  <div class="login-box">\n    <form #loginForm="ngForm" (ngSubmit)="login()">\n      <ion-row>\n        <ion-col>\n          <h3>Login</h3>\n          <ion-label>Please Enter Your<br> Cumulocity Credentials</ion-label>\n\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Username" name="username" [(ngModel)]="username" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="password" required></ion-input>\n            </ion-item>\n\n            <button ion-button type="submit" [disabled]="!loginForm.form.valid"><ion-icon ios="ios-exit" md="md-exit"></ion-icon> Login</button>\n\n          </ion-list>\n\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/myApp/src/pages/login/login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__devices_devices__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, navParams, viewCtrl, storage, dataService, http) {
        // this.doRefresh(0);
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.dataService = dataService;
        this.http = http;
        this.btnName = "edit";
        this.items = ['apple', 'google', 'intel'];
        this.flag = false;
    }
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.storage.get('devices').then(function (data) {
            _this.items = data;
            if (refresher != 0)
                refresher.complete();
        });
    };
    ;
    HomePage.prototype.reorderItems = function (indexes) {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* reorderArray */])(this.items, indexes);
        // this.storage.set('devices', this.items);
        // this.doRefresh(0);
        //  let element = this.items[indexes.from];
        //  this.items.splice(indexes.from, 1);
        //  this.items.splice(indexes.to, 0, element);
    };
    ;
    HomePage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    HomePage.prototype.getData = function () {
        var storage = this.storage;
        var navCtrl = this.navCtrl;
        var devices = this.devices;
        function myFilter(objs) {
            return objs.filter(function (obj) {
                return obj['c8y_SupportedMeasurements'];
            }).map(function (obj) {
                return (function (_a) {
                    var id = _a.id, name = _a.name, c8y_SupportedMeasurements = _a.c8y_SupportedMeasurements;
                    return ({ id: id, name: name, c8y_SupportedMeasurements: c8y_SupportedMeasurements });
                })(obj);
            });
        }
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://mw3demo.cumulocity.com/inventory/managedObjects?owner=ahmed.essam%40mw3.com.eg",
            "method": "GET",
            "headers": {
                "authorization": "Basic YWhtZWQuZXNzYW1AbXczLmNvbS5lZzpTYW1sZWUxMiFA",
                "cache-control": "no-cache",
                "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
            }
        };
        __WEBPACK_IMPORTED_MODULE_6_jquery__["ajax"](settings).done(function (response) {
            var objs = response.managedObjects;
            var newObjs = myFilter(objs);
            var devices = newObjs;
            console.log("newObjs", newObjs);
            storage.set('devices', devices);
            navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__devices_devices__["a" /* DevicesPage */]);
        });
    };
    HomePage.prototype.showDevices = function () {
        this.getData();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/myApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content">\n  <button ion-button color="danger" (click)="showDevices()" class="addBtn"><ion-icon name="md-create"></ion-icon></button>\n  <ion-list no-lines>\n    <ion-item-group reorder="true" (ionItemReorder)="reorderItems($event);">\n       <ion-item class="card horizontal"  *ngFor="let item of items">\n\n         <div class="card-content">\n           <div class="card-title">\n             <hr>\n           </div>\n           <h3>{{item}}</h3>\n           <p><span class="val">23</span><span class="unit"> c</span></p>\n           <ion-icon ios="ios-thermometer" md="md-thermometer" end></ion-icon>\n         </div>\n\n     </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/myApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataServiceProvider = (function () {
    function DataServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello DataServiceProvider Provider');
    }
    DataServiceProvider.prototype.checkData = function () {
        var _this = this;
        this.storage.get('devices').then(function (data) {
            _this.devices = data;
            if (_this.devices == '') {
            }
            else {
                return _this.devices;
            }
        });
    };
    return DataServiceProvider;
}());
DataServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], DataServiceProvider);

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_data_device_data__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DevicesPage = (function () {
    function DevicesPage(navCtrl, storage, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.icons = { "mobile": "phone-portrait", "Electricity Sensor": "ios-bulb-outline", "Light Sensor": "md-bulb", "Distance Sensor": "md-compass" };
        // this.devices = ["Distance Sensor", "Electricity Sensor", "Light Sensor"]
        this.storage.get('devices').then(function (data) {
            _this.devices = data;
            console.log("devices from get", _this.devices);
        });
        // this.devices = this.navParams.get('param1');
    }
    DevicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    DevicesPage.prototype.deviceDate = function (device) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__device_data_device_data__["a" /* DeviceDataPage */], { 'param1': device });
    };
    return DevicesPage;
}());
DevicesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-devices',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/myApp/src/pages/devices/devices.html"*/'\n<ion-header>\n\n  <ion-navbar>\n  <ion-title>Devices</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n  <ion-list>\n    <button ion-item detail-none (click)="deviceDate(device)" *ngFor="let device of devices">\n      <!-- <ion-icon name="{{icons[device]}}" item-start></ion-icon> -->\n        <p><span>{{device.id}}</span> {{device.name}}</p>\n      <ion-icon ios="ios-arrow-forward" md="md-arrow-forward" item-end></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/myApp/src/pages/devices/devices.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], DevicesPage);

//# sourceMappingURL=devices.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_data_item_data__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceDataPage = (function () {
    function DeviceDataPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DeviceDataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeviceDataPage');
    };
    DeviceDataPage.prototype.selectedItem = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_data_item_data__["a" /* ItemDataPage */]);
    };
    return DeviceDataPage;
}());
DeviceDataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-device-data',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/myApp/src/pages/device-data/device-data.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>device_data</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item detail-none (click)="selectedItem()">\n      <!-- <ion-icon name="{{icons[device]}}" item-start></ion-icon> -->\n        Position\n      <ion-icon ios="ios-arrow-forward" md="md-arrow-forward" item-end></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/myApp/src/pages/device-data/device-data.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], DeviceDataPage);

//# sourceMappingURL=device-data.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDataPage = (function () {
    function ItemDataPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItemDataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemDataPage');
    };
    return ItemDataPage;
}());
ItemDataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-data',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/myApp/src/pages/item-data/item-data.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>item_data</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <form>\n      <ion-list>\n        <ion-item>\n          <ion-label color="primary" stacked>Enter Name</ion-label>\n          <ion-input type="text" placeholder="Enter Name" name=""></ion-input>\n        </ion-item>\n        <button ion-button item-end icon-left>\n          <ion-icon name="add"></ion-icon>\n          Add\n        </button>\n      </ion-list>\n    </form>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/myApp/src/pages/item-data/item-data.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ItemDataPage);

//# sourceMappingURL=item-data.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthServiceProvider = (function () {
    function AuthServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.authFN = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("authorization", "Basic YWhtZWQuZXNzYW1AbXczLmNvbS5lZzpTYW1sZWUxMiFA");
        headers.append("cache-control", "no-cache");
        headers.append("postman-token", "c660d227-14ed-534d-5ad9-3b140d0172fa");
        this.http.get('http://mw3demo.cumulocity.com/inventory/managedObjects?owner=ahmed.essam%40mw3.com.eg', { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.devices = data;
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_devices_devices__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_device_data_device_data__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_item_data_item_data__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_auth_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_data_service_data_service__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_devices_devices__["a" /* DevicesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_device_data_device_data__["a" /* DeviceDataPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_item_data_item_data__["a" /* ItemDataPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_devices_devices__["a" /* DevicesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_device_data_device_data__["a" /* DeviceDataPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_item_data_item_data__["a" /* ItemDataPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            Storage,
            __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_data_service_data_service__["a" /* DataServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { HomePage } from '../pages/home/home';
// import { AuthServiceProvider } from '../providers/auth-service/auth-service';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen /*, public authService: AuthServiceProvider*/) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // this.authService.checkToken().then((isLoggedIn)=>{
            //   if(isLoggedIn){
            //     this.rootPage = HomePage;
            //   }
            //   else{
            //     this.rootPage = LoginPage;
            //   }
            // })
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/myApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/myApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] /*, public authService: AuthServiceProvider*/])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map