webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        this.icons = { "c8y_TemperatureMeasurement": "ios-thermometer", "c8y_LightMeasurement": "md-bulb", "c8y_AccelerationMeasurement": "md-compass" };
        this.device = this.navParams.get('param1');
        this.disableBTN = this.device.disableBTN;
        console.log("this.device.disableBTN", this.device.disableBTN);
    }
    DeviceDataPage.prototype.selectedItem = function (id, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_data_item_data__["a" /* ItemDataPage */], { 'param1': id, 'param2': item });
    };
    return DeviceDataPage;
}());
DeviceDataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-device-data',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/myApp/src/pages/device-data/device-data.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Device Measurements</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item detail-none *ngFor="let item of device.c8y_SupportedMeasurements" [disabled]="disableBTN" (click)="selectedItem(device.id,item)">\n      <ion-icon name="{{icons[item]}}" item-start></ion-icon>\n        {{item}}\n      <ion-icon ios="ios-arrow-forward" md="md-arrow-forward" item-end></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/myApp/src/pages/device-data/device-data.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
], DeviceDataPage);

var _a, _b;
//# sourceMappingURL=device-data.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(104);
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







var LoginPage = LoginPage_1 = (function () {
    function LoginPage(alertCtrl, navCtrl, authService, storage, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Check your connection andmake sure that UserName and Password are correct, Please Try Again!',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.login = function () {
        this.presentLoading();
        var storage = this.storage;
        var navCtrl = this.navCtrl;
        var devices = this.devices;
        var my = this;
        this.token = "Basic " + window.btoa(this.username + ':' + this.password);
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
            "url": "http://" + this.tenant + ".cumulocity.com/inventory/managedObjects?owner=" + this.username,
            "method": "GET",
            "headers": {
                "authorization": "" + this.token,
                "cache-control": "no-cache",
                "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
            }
        };
        __WEBPACK_IMPORTED_MODULE_5_jquery__["ajax"](settings).done(function (response) {
            storage.set("userData", { 'tenant': my.tenant, 'username': my.username, "password": my.password, "token": my.token });
            if (response.statistics.totalPages == undefined || response.statistics.totalPages == null) {
                var objs = response.managedObjects;
                var devices = myFilter(objs);
                for (var i in devices) {
                    devices[i]["disableBTN"] = false;
                }
                console.log("devices", devices);
                storage.set('devices', devices).then(function () {
                    console.log("from set devices", devices);
                });
                navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                my.loader.dismiss();
            }
            else {
                var total = response.statistics.totalPages;
                var size = response.statistics.pageSize;
                var current = response.statistics.currentPage;
                var totalSize = total * size;
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "http://" + this.tenent + ".cumulocity.com/inventory/managedObjects?owner=" + this.username + "&pageSize=" + totalSize + "&currentPage=1",
                    "method": "GET",
                    "headers": {
                        "authorization": "" + this.token,
                        "cache-control": "no-cache",
                        "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
                    }
                };
                __WEBPACK_IMPORTED_MODULE_5_jquery__["ajax"](settings).done(function (response) {
                    var objs = response.managedObjects;
                    var devices = myFilter(objs);
                    for (var i in devices) {
                        devices[i]["disableBTN"] = false;
                    }
                    storage.set('devices', devices).then(function () {
                        console.log("from set devices", devices);
                    });
                    navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    my.loader.dismiss();
                });
            }
        }).fail(function (error) {
            navCtrl.push(LoginPage_1);
            my.loader.dismiss();
            my.username = "";
            my.password = "";
            my.showAlert();
        });
    };
    LoginPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please Wait..."
        });
        this.loader.present();
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/myApp/src/pages/login/login.html"*/'\n<ion-content class="login-content">\n  <div class="login-box">\n    <form #loginForm="ngForm" (ngSubmit)="login()">\n      <ion-row>\n        <ion-col>\n          <h3>Login</h3>\n          <ion-label>Please Enter Your<br> Cumulocity Credentials</ion-label>\n\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Tenant" name="tenant" [(ngModel)]="tenant" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Username" name="username" [(ngModel)]="username" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="password" required></ion-input>\n            </ion-item>\n\n            <button ion-button type="submit" [disabled]="!loginForm.form.valid"><ion-icon ios="ios-exit" md="md-exit"></ion-icon> Login</button>\n\n          </ion-list>\n\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/myApp/src/pages/login/login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
], LoginPage);

var LoginPage_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_data_device_data__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
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
        this.storage.get('devices').then(function (data) {
            _this.devices = data;
        });
    }
    DevicesPage.prototype.deviceDate = function (device) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__device_data_device_data__["a" /* DeviceDataPage */], { 'param1': device });
    };
    return DevicesPage;
}());
DevicesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-devices',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/myApp/src/pages/devices/devices.html"*/'\n<ion-header>\n\n  <ion-navbar>\n  <ion-title>Devices</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content">\n  <ion-list>\n    <button ion-item detail-none *ngFor="let device of devices" (click)="deviceDate(device)">\n        <p><span>{{device.id}}</span> {{device.name}}</p>\n      <ion-icon ios="ios-arrow-forward" md="md-arrow-forward" item-end></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/myApp/src/pages/devices/devices.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], DevicesPage);

//# sourceMappingURL=devices.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_data_device_data__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__ = __webpack_require__(201);
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
    function ItemDataPage(navCtrl, navParams, storage, loadingCtrl, alertCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.id = this.navParams.get('param1');
        this.type = this.navParams.get('param2');
    }
    ItemDataPage.prototype.AddNewItem = function () {
        var _this = this;
        this.dataService.presentLoading();
        this.storage.get('userData').then(function (data) {
            _this.token = data.token;
            _this.tenant = data.tenant;
            console.log("this.token this.token= ", _this.token);
            console.log("this.tenant this.tenant= ", _this.tenant);
            _this.dataService.getDataService(_this.tenant, _this.id, _this.type, _this.token, _this.itemName).then(function (flag) {
                if (flag == true) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__device_data_device_data__["a" /* DeviceDataPage */]);
                }
            });
        });
    };
    return ItemDataPage;
}());
ItemDataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-data',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/myApp/src/pages/item-data/item-data.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>item_data</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <form (ngSubmit)="AddNewItem()">\n      <ion-list>\n        <ion-item>\n          <ion-label color="primary" stacked>Enter Name</ion-label>\n          <ion-input type="text" placeholder="Enter Name" name="itemName" [(ngModel)]="itemName"></ion-input>\n        </ion-item>\n        <button ion-button item-end icon-left type="submit">\n          <ion-icon name="add"></ion-icon>Save</button>\n      </ion-list>\n    </form>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/myApp/src/pages/item-data/item-data.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__["a" /* DataServiceProvider */]])
], ItemDataPage);

//# sourceMappingURL=item-data.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(104);
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






var DataServiceProvider = (function () {
    function DataServiceProvider(http, storage, loadingCtrl, alertCtrl) {
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        console.log('Hello DataServiceProvider Provider');
    }
    DataServiceProvider.prototype.getDataService = function (tenant, id, type, token, userMeasurementName, currentPage) {
        var _this = this;
        if (currentPage === void 0) { currentPage = 1; }
        return new Promise(function (resolve) {
            var my = _this;
            var value;
            var unit;
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://mw3demo.cumulocity.com/measurement/measurements?source=" + id + "&type=" + type + "&currentPage=" + currentPage,
                "method": "GET",
                "headers": {
                    "authorization": token,
                    "cache-control": "no-cache",
                }
            };
            __WEBPACK_IMPORTED_MODULE_5_jquery__["ajax"](settings).done(function (response) {
                if (response.statistics.totalPages == null) {
                    if (response.measurements.length > 1) {
                        var l = response.measurements.length;
                        var obj = response.measurements[l - 1];
                        if (type == "c8y_TemperatureMeasurement") {
                            value = obj[type]["T"]["value"];
                            unit = obj[type]["T"]["unit"];
                        }
                        else if (type == "c8y_LightMeasurement") {
                            value = obj[type]["e"]["value"];
                            unit = obj[type]["e"]["unit"];
                        }
                        else if (type == "c8y_AccelerationMeasurement") {
                            value = obj[type]["acceleration"]["value"];
                            unit = obj[type]["acceleration"]["unit"];
                        }
                        var newItem = {
                            "deviceID": id,
                            "name": userMeasurementName,
                            "type": type,
                            "value": value,
                            "unit": unit
                        };
                        my.storage.get('devicesMeasurements').then(function (data) {
                            if (data == null) {
                                var arr = [newItem];
                                my.storage.set('devicesMeasurements', arr);
                            }
                            else {
                                data.push(newItem);
                                my.storage.set("devicesMeasurements", data);
                            }
                        });
                        my.storage.get("devices").then(function (data) {
                            for (var i in data) {
                                if (data[i]["id"] == id) {
                                    data[i]["disableBTN"] = true;
                                    my.storage.set("devices", data).then(function () {
                                    });
                                    break;
                                }
                            }
                        });
                        my.loader.dismiss();
                        resolve(true);
                    }
                    else if (response.measurements.length == 0) {
                        console.log("response.measurements.length == 0");
                        my.loader.dismiss();
                        my.showAlert("No measurements to be added!");
                    }
                }
                else {
                    var current = response.statistics.totalPages;
                    my.getDataService(id, type, token, userMeasurementName, currentPage = current);
                }
            }).fail(function (error) {
                console.log("error error", error);
                my.loader.dismiss();
                my.showAlert("Error while saving data!");
            });
        });
    };
    DataServiceProvider.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please Wait..."
        });
        this.loader.present();
    };
    DataServiceProvider.prototype.showAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: title,
            buttons: ['OK']
        });
        alert.present();
    };
    return DataServiceProvider;
}());
DataServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
], DataServiceProvider);

var _a, _b, _c, _d;
//# sourceMappingURL=data-service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_devices_devices__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_device_data_device_data__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_item_data_item_data__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_data_service_data_service__ = __webpack_require__(201);
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
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
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
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(storage, loadingCtrl, platform, statusBar, splashScreen, authService, toastCtrl) {
        var _this = this;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
            // StatusBar.styleDefault();
            // Splashscreen.hide();
        });
        this.presentLoading();
        this.loadingPage();
    }
    MyApp.prototype.myHandlerFunction = function () {
        var toast = this.toastCtrl.create({
            message: "Press Again to Confirm Exit",
            duration: 3000
        });
        toast.present();
    };
    MyApp.prototype.loadingPage = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("userData").then(function (data) {
                if (data != null) {
                    _this.username = data.username;
                    _this.token = data.token;
                    _this.authService.checkToken(_this.username, _this.token).then(function (isLoggedIn) {
                        if (isLoggedIn) {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
                        }
                        else {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                        }
                        _this.loader.dismiss();
                    });
                }
                else if (data == null) {
                    _this.loader.dismiss();
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
            });
        });
    };
    MyApp.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Authenticating..."
        });
        this.loader.present();
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/myApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/myApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__devices_devices__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(102);
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
    function HomePage(navCtrl, navParams, viewCtrl, storage, authService, http, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.authService = authService;
        this.http = http;
        this.appCtrl = appCtrl;
        this.flag = false;
        this.icons = { "c8y_TemperatureMeasurement": "ios-thermometer", "c8y_LightMeasurement": "md-bulb", "c8y_AccelerationMeasurement": "md-compass" };
        this.colors = { "c8y_TemperatureMeasurement": "black", "c8y_LightMeasurement": ["green", "green"], "c8y_AccelerationMeasurement": ["green", "green"] };
        this.diplayItems();
        this.doRefresh(0);
        var my = this;
        setTimeout(function () {
            my.storage.get("userData").then(function (data) {
                var tenant = data.tenant;
                var token = data.token;
                if (my.items != null) {
                    for (var _i = 0, _a = my.items; _i < _a.length; _i++) {
                        var item = _a[_i];
                        var deviceID = item.deviceID;
                        var type = item.type;
                        var userMeasurementName = item.name;
                        my.authService.reloadAll(tenant, deviceID, type, token, userMeasurementName).then(function () {
                            my.storage.get("devicesMeasurements").then(function (data) {
                                my.items = data;
                                console.log("dataaaaaaa", my.items);
                            });
                        });
                    }
                }
                // // my.appCtrl.getRootNav().setRoot(HomePage);
                // location.reload()
            });
        }, 3000);
    }
    HomePage.prototype.diplayItems = function () {
        var _this = this;
        this.storage.get('devicesMeasurements').then(function (data) {
            if (data != null) {
                _this.items = data;
            }
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.storage.get('devicesMeasurements').then(function (data) {
            _this.items = data;
            if (refresher != 0)
                refresher.complete();
        });
    };
    HomePage.prototype.reorderItems = function (indexes) {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* reorderArray */])(this.items, indexes);
        this.storage.set("devicesMeasurements", this.items);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
        this.diplayItems();
        this.doRefresh(0);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.diplayItems();
    };
    HomePage.prototype.removeItem = function (index) {
        var _this = this;
        if (index > -1) {
            this.storage.get("devices").then(function (data) {
                console.log('this.items', _this.items);
                console.log('this.items["deviceID"]', _this.items["deviceID"]);
                console.log("jsdhjsdjgdg");
                for (var i in data) {
                    if (data[i]["id"] == _this.items[index]["deviceID"]) {
                        console.log('data[i]["id"] == this.items["deviceID"');
                        data[i]["disableBTN"] = false;
                        _this.storage.set("devices", data).then(function () {
                            console.log("done");
                            _this.items.splice(index, 1);
                            _this.storage.set("devicesMeasurements", _this.items);
                        });
                        break;
                    }
                }
            });
        }
    };
    HomePage.prototype.showDevices = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__devices_devices__["a" /* DevicesPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/heba/Downloads/mw3_task/myApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content">\n  <button ion-button color="danger" (click)="showDevices()" class="addBtn"><ion-icon name="md-create"></ion-icon></button>\n  <ion-list no-lines>\n    <!-- <ion-icon name="trash"></ion-icon> -->\n\n    <ion-item-group reorder="true" (ionItemReorder)="reorderItems($event);">\n      <ion-item-sliding *ngFor="let item of items;let i=index">\n\n       <ion-item class="card horizontal">\n         <ion-icon name="ios-close-circle-outline" (click)="removeItem(i)"></ion-icon>\n         <div class="card-content">\n           <div class="card-title">\n             <hr>\n           </div>\n           <h3>{{item.name}}</h3>\n           <p><span class="val">{{item.value}}</span><span class="unit"> {{item.unit}}</span></p>\n           <ion-icon name="{{icons[item.type]}}" end></ion-icon>\n         </div>\n\n     </ion-item>\n     <ion-item-options side="right">\n       <button ion-button default color="danger" (click)="removeItem(i)">\n         <ion-icon name="ios-trash-outline" style="font-size: 50px"></ion-icon>\n         delete\n       </button>\n     </ion-item-options>\n   </ion-item-sliding>\n\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/mw3_task/myApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _g || Object])
], HomePage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http, Headers } from '@angular/http';



var AuthServiceProvider = (function () {
    function AuthServiceProvider(storage) {
        this.storage = storage;
        console.log('Hello AuthServiceProvider Provider');
        // this.authFN();
    }
    AuthServiceProvider.prototype.checkToken = function (name, token) {
        return new Promise(function (resolve) {
            if (name == undefined && token == undefined) {
                resolve(false);
            }
            else {
                resolve(true);
            }
        });
    };
    AuthServiceProvider.prototype.reloadAll = function (tenant, id, type, token, userMeasurementName, currentPage) {
        var _this = this;
        if (currentPage === void 0) { currentPage = 1; }
        console.log("reloadAll");
        return new Promise(function (resolve) {
            console.log("reload all");
            var my = _this;
            var value;
            var unit;
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://" + tenant + ".cumulocity.com/measurement/measurements?source=" + id + "&type=" + type + "&currentPage=" + currentPage,
                "method": "GET",
                "headers": {
                    "authorization": token,
                    "cache-control": "no-cache",
                }
            };
            __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"](settings).done(function (response) {
                if (response.statistics.totalPages == null) {
                    if (response.measurements.length > 1) {
                        var l = response.measurements.length;
                        var obj = response.measurements[l - 1];
                        if (type == "c8y_TemperatureMeasurement") {
                            value = obj[type]["T"]["value"];
                        }
                        else if (type == "c8y_LightMeasurement") {
                            value = obj[type]["e"]["value"];
                        }
                        else if (type == "c8y_AccelerationMeasurement") {
                            value = obj[type]["acceleration"]["value"];
                        }
                        var newItem = {
                            "deviceID": id,
                            "name": userMeasurementName,
                            "type": type,
                            "value": value,
                            "unit": unit
                        };
                        my.storage.get('devicesMeasurements').then(function (data) {
                            for (var item in data) {
                                if (data[item]["deviceID"] == id && data[item]["type"] == type) {
                                    data[item]['value'] = value;
                                    my.storage.set("devicesMeasurements", data);
                                }
                            }
                        });
                        resolve(true);
                    }
                }
                else {
                    var current = response.statistics.totalPages;
                    my.reloadAll(id, type, token, userMeasurementName, currentPage = current);
                }
            }).fail(function (error) {
                console.log("error error", error);
            });
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map