//         模块
import fetch from '@system.fetch'
import device from '@system.device'
import storage from '@system.storage'
import geolocation from '@system.geolocation'
import vibrator from '@system.vibrator'
import barcode from '@system.barcode'
import clipboard from '@system.clipboard'
import network from '@system.network'
import brightness from '@system.brightness'
import battery from '@system.battery'
import record from '@system.record'
import wifi from '@system.wifi'
import bluetooth from '@system.bluetooth'
import media from '@system.media'
import image from '@system.image'
import audio from '@system.audio'
import file from '@system.file'
import zip from '@system.zip'
import router from '@system.router'
import prompt from '@system.prompt'
import request from '@system.request'
import websocketfactory from '@system.websocketfactory'
import sensor from '@system.sensor'
import contact from '@system.contact'
//         实例
import websocket from './object/websocket.js'

export default class my {

	// //////////////////getSystemInfo////////////////
	static getSystemInfo(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success":
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			}
			quick_object.success = function (quick_res) {
				var my_res = {
					// 设备像素比
					deviceOrientation: "portrait",
					devicePixelRatio: quick_res.screenDensity,
					version: "7.0.13",
					system: quick_res.osType + " " + quick_res.osVersionName,
					fontSizeSetting: 16,
					SDKVersion: "2.10.4",
					benchmarkLevel: 8,
					albumAuthorized: true,
					cameraAuthorized: true,
					locationAuthorized: true,
					microphoneAuthorized: true,
					notificationAuthorized: true,
					notificationAlertAuthorized: true,
					notificationBadgeAuthorized: true,
					notificationSoundAuthorized: true,
					bluetoothEnabled: false,
					locationEnabled: true,
					wifiEnabled: true,
					safeArea: {
						height: quick_res.screenHeight / quick_res.screenDensity,
						width: quick_res.screenWidth / quick_res.screenDensity,
						bottom: quick_res.screenHeight / quick_res.screenDensity,
						top: 0,
						left: 0,
						right: quick_res.screenWidth / quick_res.screenDensity
					},
					errMsg: "getSystemInfo:ok",

				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "language":
							my_res[quick_res_key] = quick_res_value + "_" + quick_res.region;
							break;
						case "osType":
							my_res.platform = quick_res_value;
							break;
						case "screenDensity":
							my_res.pixelRatio = quick_res_value;
							break;
						case "screenWidth":
							my_res[quick_res_key] = quick_res_value / quick_res.screenDensity;
							break;
						case "screenHeight":
							my_res[quick_res_key] = quick_res_value / quick_res.screenDensity;
							break;
						case "statusBarHeight":
							my_res[quick_res_key] = quick_res_value / quick_res.screenDensity;
							break;
						case "windowWidth":
							my_res[quick_res_key] = quick_res_value / quick_res.screenDensity;
							break;
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return device.getInfo(quick_object)
	}
	// ///////////////////////////////数据缓存////////////////////////////////
	// ////////////////////setStorage///////////////////////
	static setStorage(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "data":
						quick_object.value = my_object_value;
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "setStorage:ok"
				};

				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return storage.set(quick_object)
	}
	// ////////////////////getStorage///////////////////////
	static getStorage(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "setStorage:ok"
				};
				my_res.data = quick_res;
				if (my_res.data) {
					if (my_object.success) {
						my_object.success(my_res);
					}
					if (my_object.complete) {
						my_object.complete(my_res);
					}
				} else {
					quick_object.fail(quick_res)
				}
			};

			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getStorage:fail data not found"
				}
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return storage.get(quick_object);
	};
	// ////////////////////clearStorage///////////////////////
	static clearStorage(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "clearStorage:ok"
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "clearStorage:fail"
				}
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return storage.clear(quick_object)
	};
	// ////////////////////removeStorage///////////////////////
	static removeStorage(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "removeStorage:ok"
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "removeStorage:fail"
				}
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return storage.delete(quick_object)
	};
	// ////////////////////getStorageInfo///////////////////////
	static getStorageInfo(my_object) {
		my_object.index = "0";
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			var my_res = {
				errMsg: "getStorageInfo:ok",
				currentSize: 1,
				keys: [],
				limitSize: 10240
			};
			for (var i = 0; i < storage.length; i++) {
				quick_object.success = function (quick_res) {
					my_res.keys.push(quick_res);
					if (my_object.success) {
						my_object.success(my_res);
					}
					if (my_object.complete) {
						my_object.complete(my_res);
					}
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getStorageInfo:fail"
				}
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return storage.key(quick_object)
	}
	// ////////////////////周期性更新/////////////////////////
	// //////////////////setBackgroundFetchToken////////
	static setBackgroundFetchToken(my_object) {
		console.log("暂不支持")
	}
	// //////////////////onBackgroundFetchData////////
	static onBackgroundFetchData(my_object) {
		console.log("暂不支持")
	}
	// //////////////////getBackgroundFetchToken////////
	static getBackgroundFetchToken(my_object) {
		console.log("暂不支持")
	}
	// //////////////////getBackgroundFetchData////////
	static getBackgroundFetchData(my_object) {
		console.log("暂不支持")
	}
	// ////////////////////////////////位置//////////////////////////////////////
	// ////////////////////getLocation///////////////////////
	static getLocation(my_object) {
		var quick_object = {}; // 快应用数据对象
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) { // 微信
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "cacheTimeout":
					case "type":
						break;
					default:
						quick_object[my_object_key] = my_object_value; // 相同的参数 直接赋值
						break;
				}
			}
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "getLocation:ok",
					horizontalAccuracy: 30,
					indoorLocationType: -1,
					provider: "network",
					speed: 0,
					steps: 0,
					verticalAccuracy: 0,
					direction: 0,
					country,
					countryCode,
					province,
					pois,
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "time":
							delete quick_res[quick_res_key]
							break;
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getLocation:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
			return geolocation.getLocation(quick_object)
		}
	}
	// /////////////////////openLocation//////////////////////
	static openLocation(my_object) {
		if (!my_object) {
			return
		}
		let my_latitude = my_object.latitude;
		let my_longitude = my_object.longitude;
		let my_scale = my_object.scale;
		let my_name = my_object.name;
		let my_address = my_object.address;
		let my_success = my_object.success;
		let my_fail = my_object.fail;
		let my_complete = my_object.complete;
		my_object = null;
		////////////
		let quick_object = {};
		if (my_latitude) {
			quick_object.latitude = my_latitude;
		}
		if (my_longitude) {
			quick_object.longitude = my_longitude;
		}
		if (my_scale) {
			quick_object.scale = my_scale;
		}
		if (my_name) {
			quick_object.name = my_name;
		}
		if (my_address) {
			quick_object.address = my_address;
		}
		quick_object.success = function (quick_res) {
			var my_res = {
				errMsg: "openLocation:ok",
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key]
				switch (quick_res_key) {
					default:
						my_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (my_success) {
				my_success(my_res);
			}
			if (my_complete) {
				my_complete(my_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "openLocation:fail"
			};
			if (my_fail) {
				my_fail(quick_res);
			}
			if (my_complete) {
				my_complete(quick_res);
			}
		};
		geolocation.openLocation(quick_object)
	}
	// /////////////////////chooseLocation//////////////////////
	static chooseLocation(my_object) {
		if (!my_object) {
			return
		}
		let my_success = my_object.success;
		let my_fail = my_object.fail;
		let my_complete = my_object.complete;
		my_object = null;
		/////////////
		let quick_object = {};
		quick_object.success = function (quick_res) {
			var my_res = {
				errMsg: "chooseLocation:ok",
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key]
				switch (quick_res_key) {
					case "coordType":
						delete quick_res[quick_res_key]
						break;
					default:
						my_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (my_success) {
				my_success(my_res);
			}
			if (my_complete) {
				my_complete(my_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "chooseLocation:fail"
			};
			if (my_fail) {
				my_fail(quick_res);
			}
			if (my_complete) {
				my_complete(quick_res);
			}
		};
		geolocation.chooseLocation(quick_object)
	}
	// /////////////////////onLocationChange//////////////////////
	//  都是回调函数 未完成
	static onLocationChange(my_callback) {
		if (!my_callback) {
			return
		}
		geolocation.subscribe(my_callback)
	}
	// /////////////////////offLocationChange//////////////////////
	static offLocationChange(my_callback) {
		geolocation.unsubscribe()
	}
	// /////////////////////stopLocationUpdate//////////////////////
	static stopLocationUpdate() {
		console.log("暂不支持")
	}
	// /////////////////////startLocationUpdateBackground//////////////////////
	static startLocationUpdateBackground() {
		console.log("暂不支持")
	}
	// /////////////////////startLocationUpdate//////////////////////
	static startLocationUpdate() {
		console.log("暂不支持")
	}
	// /////////////////////转发///////////////////////////////////////
	// /////////////////////updateShareMenu//////////
	static updateShareMenu(my_object) {
		console.log("暂不支持")
	}
	// /////////////////////showShareMenu///////////
	static showShareMenu(my_object) {
		console.log("暂不支持")
	}
	// /////////////////////hideShareMenu//////////
	static hideShareMenu(my_object) {
		console.log("暂不支持")
	}
	// /////////////////////getShareInfo//////////
	static getShareInfo(my_object) {
		console.log("暂不支持")
	}

	// //////////////////////////振动////////////////////////////////////
	// ////////////////////vibrateShort///////////////////////
	static vibrateShort(my_object) {
		my_object.mode = "short";
		return vibrator.vibrate(my_object)
	}
	// ////////////////////vibrateLong///////////////////////
	static vibrateLong(my_object) {
		my_object.mode = "long";
		return vibrator.vibrate(my_object)
	}
	// //////////////////////////扫码////////////////////////////////////
	// ////////////////////scan///////////////////////
	static scan(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success":
					case "fail":
					case "complete":
						break;
					case "hideAlbum":
					case "scanType":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			}
			quick_object.success = function (quick_res) {
				var my_res = {
					charSet: "utf-8",
					codeVersion: 5,
					errMsg: "scanCode:ok",
					rawData: "暂不支持"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "type":
							my_res.scanType = quick_res_value;
							break;
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "scanCode:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
			quick_object.cancel = function (quick_res) {
				quick_res = {
					errMsg: "scanCode:fail cancel"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			}
		}
		return barcode.scan(quick_object)
	}
	// //////////////////////////剪切板////////////////////////////////////
	// ////////////////////setClipboard///////////////////////
	static setClipboard(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "text":
						quick_object.text = my_object_value;
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "setClipboardData:ok"
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "setClipboardData:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return clipboard.set(quick_object)
	}
	// ////////////////////getClipboardData///////////////////////
	static getClipboard(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "getClipboardData:ok"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "text":
							my_res.text = quick_res_value;
							break;
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getClipboardData:fail data not found"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return clipboard.get(quick_object);
	};
	// /////////////////////NFC////////////////////////////
	// /////////////////////stopHCE/////////////////////////
	static stopHCE(my_object) {
		console.log("暂不支持")
	}
	// /////////////////////getHCEState/////////////////////////
	static getHCEState(my_object) {
		console.log("暂不支持")
	}
	// /////////////////////startHCE/////////////////////////
	static startHCE(my_object) {
		console.log("暂不支持")
	}
	// /////////////////////sendHCEMessage/////////////////////////
	static sendHCEMessage(my_object) {
		console.log("暂不支持")
	}
	// /////////////////////onHCEMessage/////////////////////////
	static onHCEMessage(my_callback) {
		console.log("暂不支持")
	}
	// /////////////////////offHCEMessage/////////////////////////
	static offHCEMessage(my_callback) {
		console.log("暂不支持")
	}
	// ////////////////////////网络///////////////////////////////
	// //////////////////////getNetworkType///////////////////////
	static getNetworkType(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用里面的数据是否一致
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "getNetworkType:ok"
				};
				console.log("quick_res", quick_res)
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "metered":
							delete quick_res[quick_res_key];
							break;
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getClipboardData:fail data not found"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return network.getType(quick_object);
	};
	// //////////////////////onNetworkStatusChange///////////////////////
	static onNetworkStatusChange(my_callback) {
		// console.log("my_callback",my_callback);	
		// var quick_object = {};
		// var quick_result = {};

		// quick_object.callback = my_callback
		// if (my_callback) {
		// 	var quick_res = await network.subscribe(quick_object);  //	 callback返回的值
		// 	console.log("quick_res",quick_res);	
		// 	for(var quick_res_key in quick_res){   // 对返回的值进行处理
		// 		var quick_res_value = quick_res[quick_res_key];
		// 		switch(quick_result_key){
		// 			case "metered":
		// 				delete quick_res[quick_res_key];
		// 			case "type":
		// 				quick_result.networkType = quick_res_value;
		// 				if(quick_res_value === "none"){
		// 					quick_result.isConnected = false;
		// 				}
		// 				else{
		// 					quick_result.isConnected = true;
		// 				}
		// 				break;
		// 			default:
		// 				quick_result[quick_res_key] = quick_res_value;
		// 				break;
		// 		}
		// 	}

		// }
		// console.log("quick_result",quick_result);
		// return quick_res;
		return network.subscribe(my_callback)
	};
	// //////////////////////offNetworkStatusChange///////////////////////
	static offNetworkStatusChange(my_callback) {
		return network.unsubscribe(my_callback)
	}
	// //////////////////////////屏幕////////////////////////////////////
	// //////////////////////setScreenBrightness///////////////////////
	static setScreenBrightness(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "value":
						quick_object[my_object_key] = 255 * my_object_value;
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "setScreenBrightness:ok"
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "setScreenBrightness:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return brightness.setValue(quick_object);
	};
	// //////////////////////getScreenBrightness///////////////////////
	static getScreenBrightness(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "getScreenBrightness:ok"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "value":
							my_res[quick_res_key] = quick_res_value / 255;
							break;
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getScreenBrightness:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return brightness.getValue(quick_object)
	}
	// //////////////////////setKeepScreenOn///////////////////////
	static setKeepScreenOn(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "setKeepScreenOn:ok",
					value: "可通过getScreenBrightness查看",
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "setKeepScreenOn:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
			return brightness.setKeepScreenOn(quick_object)
		}
	};
	// //////////////////////onUserCaptureScreen///////////////////////
	static onUserCaptureScreen(my_callback) {
		console.log("暂不支持");
	};
	// //////////////////////offUserCaptureScreen///////////////////////
	static offUserCaptureScreen(my_callback) {
		console.log("暂不支持");
	}
	// //////////////////////////电量////////////////////////////////////
	// //////////////////////getBatteryInfo///////////////////////
	static getBatteryInfo(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "getBatteryInfo:ok"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "charging":
							my_res.isCharging = quick_res_value;
							break;
						case "level":
							my_res[quick_res_key] = parseInt(quick_res_value * 100) + "";
							break;
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getBatteryInfo:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return battery.getStatus(quick_object)
	}
	// //////////////////////////电话////////////////////////////////////
	// //////////////////////addPhoneContact///////////////////////
	static addPhoneContact(my_object) {
		console.log("暂不支持");
	}
	// //////////////////////////Wi-Fi////////////////////////////////////
	// //////////////////////connectWifi///////////////////////
	static connectWifi(my_object) {
		if (this.isWiFi == true) {
			var quick_object = {};
			if (my_object) {
				for (var my_object_key in my_object) {
					var my_object_value = my_object[my_object_key];
					switch (my_object_key) {
						case "success": // 快应用
						case "fail":
						case "complete":
							break;
						default:
							quick_object[my_object_key] = my_object_value;
							break;
					}
				};
				if (!quick_object.BSSID) {
					quick_object.BSSID = '';
				}
				quick_object.success = function (quick_res) {
					var my_res = {
						errMsg: "connectWifi:ok"
					};
					if (my_object.success) {
						my_object.success(my_res);
					}
					if (my_object.complete) {
						my_object.complete(my_res);
					}
				};
				quick_object.fail = function (quick_res) {
					quick_res = {
						errMsg: "connectWifi:fail"
					};
					if (my_object.fail) {
						my_object.fail(quick_res);
					}
					if (my_object.complete) {
						my_object.complete(quick_res);
					}
				};
			}
			return wifi.connect(my_object);
		}
		else {
			var errMsg = {
				errCode: 12000,
				errMsg: "connectWifi:fail:not invoke startWifi"
			}
			console.log(errMsg)
		}
	}
	// //////////////////////getConnectedWifi////////////////
	static getConnectedWifi(my_object) {
		if (!my_object) {
			return
		}
		if (this.isWiFi == true) {
			let my_success = my_object.success;
			let my_fail = my_object.fail;
			let my_complete = my_object.complete;
			var quick_object = {};
			my_object = null;
			//////////////////////////
			quick_object.success = function (quick_res) {
				var my_res = {
					errCode: 0,
					errMsg: "getConnectedWifi:ok",
					wifi: { frequency: 5785 }
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key];
					switch (quick_res_key) {
						default:
							my_res.wifi[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_success) {
					my_success(my_res);
				}
				if (my_complete) {
					my_complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getConnectedWifi:fail"
				}
				if (my_fail) {
					my_fail(quick_res);
				}
				if (my_complete) {
					my_complete(quick_res);
				}
			};
			return wifi.getConnectedWifi(quick_object);
		}
		else {
			var errMsg = {
				errCode: 12000,
				errMsg: "getConnectedWifi:fail:not invoke startWifi"
			}
			console.log(errMsg)
		}
	}
	// /////////////////////getWifiList////////////////////////
	static getWifiList(my_object) {
		if (!my_object) {
			return
		}
		if (this.isWiFi == true) {
			let my_success = my_object.success;
			let my_fail = my_object.fail;
			let my_complete = my_object.complete;
			var quick_object = {};
			my_object = null;
			/////////////////////////
			quick_object.success = function () {
				var my_res = {
					errMsg: "getWifiList:success"
				};
				if (my_success) {
					my_success(my_res);
				}
				if (my_complete) {
					my_complete(my_res);
				}
			};
			quick_object.fail = function () {
				var quick_res = {
					errMsg: "getWifiList:fail"
				}
				if (my_fail) {
					my_fail(quick_res);
				}
				if (my_complete) {
					my_complete(quick_res);
				}
			};
			return wifi.scan(quick_object);
		}
		else {
			var errMsg = {
				errCode: 12000,
				errMsg: "getWifiList:fail:not invoke startWifi"
			}
			console.error(errMsg);
		}
	}
	// //////////////////////onGetWifiList///////////////////////
	static onGetWifiList(my_callback) {
		wifi.onscanned = my_callback;
	}
	// ///////////////////////onWifiConnected//////////////////
	// quickapp 多了一个state参数
	static onWifiConnected(my_callback) {
		wifi.onstatechanged = (data) => {
			if (data.state == 1) {
				wifi.onstatechanged = my_callback
			}
		}
	}
	// //////////////////////stopWifi//////////////////////////
	static stopWifi(my_object) {
		this.isWiFi = false;
	}
	// //////////////////////setWifiList//////////////////////////
	// ios
	static setWifiList(my_object) {
		console.log("暂不支持");
	}
	// //////////////////////offWifiConnected//////////////////////////
	static offWifiConnected(my_object) {
		console.log("暂不支持");
	}
	// //////////////////////offGetWifiList//////////////////////////
	static offGetWifiList(my_object) {
		console.log("暂不支持");
	}
	// //////////////////////startWifi//////////////////////////
	static startWifi(my_object) {
		this.isWiFi = true;
	}

	// //////////////////////iBeacon////////////////////////
	// //////////////////////startBeaconDiscovery////////////////////////
	static startBeaconDiscovery(my_object) {
		console.log("暂不支持");
	}
	// //////////////////////stopBeaconDiscovery////////////////////////
	static stopBeaconDiscovery(my_object) {
		console.log("暂不支持");
	}
	// //////////////////////onBeaconUpdate////////////////////////
	static onBeaconUpdate(my_callback) {
		console.log("暂不支持");
	}
	// //////////////////////onBeaconServiceChange////////////////////////
	static onBeaconServiceChange(my_callback) {
		console.log("暂不支持");
	}
	// //////////////////////offBeaconUpdate////////////////////////
	static offBeaconUpdate(my_callback) {
		console.log("暂不支持");
	}
	// //////////////////////offBeaconServiceChange////////////////////////
	static offBeaconServiceChange(my_callback) {
		console.log("暂不支持");
	}
	// //////////////////////getBeacons////////////////////////
	static getBeacons(my_object) {
		console.log("暂不支持");
	}
	// //////////////////////外围设备//////////////////////////
	// ////////////onBLEPeripheralConnectionStateChanged///////////////
	static onBLEPeripheralConnectionStateChanged(my_callback) {
		console.log("暂不支持");
	}
	// ////////////offBLEPeripheralConnectionStateChanged///////////////
	static offBLEPeripheralConnectionStateChanged(my_callback) {
		console.log("暂不支持");
	}
	// //////////////////////createBLEPeripheralServer////////////////////////
	static createBLEPeripheralServer(my_object) {
		console.log("暂不支持");
	}

	// //////////////////////蓝牙////////////////////////////////////////
	// ////////////////////////openBluetoothAdapter/////////////////
	static openBluetoothAdapter(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "mode":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "openBluetoothAdapter:ok"
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "openBluetoothAdapter:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return bluetooth.openAdapter(quick_object);
	}
	// ////////////////////////closeBluetoothAdapter/////////////////
	static closeBluetoothAdapter(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "closeBluetoothAdapter:ok"
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "closeBluetoothAdapter:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return bluetooth.closeAdapter(quick_object);
	}
	// ////////////////////////getBluetoothAdapterState/////////////////
	static getBluetoothAdapterState(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "getBluetoothAdapterState:ok"
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getBluetoothAdapterState:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return bluetooth.getAdapterState(quick_object);
	}
	// ////////////////////////onBluetoothAdapterStateChange/////////////////
	static onBluetoothAdapterStateChange(my_callback) {
		bluetooth.onadapterstatechange = my_callback;
	}
	// ////////////////////////startBluetoothDevicesDiscovery/////////////////
	static startBluetoothDevicesDiscovery(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "startBluetoothDevicesDiscovery:ok",
					isDiscovering: "暂不支持",
					errCode: 0
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "startBluetoothDevicesDiscovery:fail",
					errCode: "暂不支持"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		bluetooth.startDevicesDiscovery(quick_object);
	}
	// ////////////////////////stopBluetoothDevicesDiscovery/////////////////
	static stopBluetoothDevicesDiscovery(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "stopBluetoothDevicesDiscovery:ok",
					isDiscovering: "暂不支持",
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "stopBluetoothDevicesDiscovery:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return bluetooth.stopDevicesDiscovery(quick_object);
	}
	// ////////////////////////getBluetoothDevices/////////////////
	static getBluetoothDevices(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "getBluetoothDevices:ok",
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getBluetoothDevices:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return bluetooth.getDevices(quick_object);
	}
	// ////////////////////////onBluetoothDeviceFound/////////////////
	static onBluetoothDeviceFound(my_callback) {
		bluetooth.ondevicefound = my_callback;
	}
	// ////////////////////////getConnectedBluetoothDevices/////////////////
	static getConnectedBluetoothDevices(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "getConnectedBluetoothDevices:ok",
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getConnectedBluetoothDevices:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return bluetooth.getConnectedDevices(quick_object);
	}
	// ///////////////////////////低功耗蓝牙////////////////////////////////
	// ////////////////////////createBLEConnection/////////////////
	static createBLEConnection(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "createBLEConnection:ok",
					errCode: 0
				};

				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "createBLEConnection:fail",
					errCode: "暂不支持"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return bluetooth.createBLEConnection(quick_object);
	}
	// ////////////////////////closeBLEConnection/////////////////
	static closeBLEConnection(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "closeBLEConnection:ok",
					errCode: 0
				};

				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "closeBLEConnection:fail",
					errCode: "暂不支持"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return bluetooth.closeBLEConnection(quick_object);
	}
	// ////////////////////////getBLEDeviceServices/////////////////
	static getBLEDeviceServices(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "getBLEDeviceServices:ok",
					errCode: 0
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getBLEDeviceServices:fail",
					errCode: "暂不支持"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return bluetooth.getBLEDeviceServices(quick_object);
	}
	// ////////////////////////getBLEDeviceCharacteristics/////////////////
	static getBLEDeviceCharacteristics(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "getBLEDeviceCharacteristics:ok",
					errCode: 0
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getBLEDeviceCharacteristics:fail",
					errCode: "暂不支持"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return bluetooth.getBLEDeviceCharacteristics(quick_object);
	}
	// ////////////////////////readBLECharacteristicValue/////////////////
	static readBLECharacteristicValue(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "readBLECharacteristicValue:ok",
					errCode: 0
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "readBLECharacteristicValue:fail",
					errCode: "暂不支持"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return bluetooth.readBLECharacteristicValue(quick_object);
	}
	// ////////////////////////writeBLECharacteristicValue/////////////////
	static writeBLECharacteristicValue(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "writeBLECharacteristicValue:ok",
					errCode: 0
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "writeBLECharacteristicValue:fail",
					errCode: "暂不支持"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return bluetooth.writeBLECharacteristicValue(quick_object);
	}
	// ////////////////////////notifyBLECharacteristicValueChange/////////////////
	static notifyBLECharacteristicValueChange(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "notifyBLECharacteristicValueChange:ok",
					errCode: 0
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "notifyBLECharacteristicValueChange:fail",
					errCode: "暂不支持"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return bluetooth.notifyBLECharacteristicValueChange(quick_object);
	}
	// ////////////////////////onBLECharacteristicValueChange/////////////////
	static onBLECharacteristicValueChange(my_object) {
		bluetooth.onblecharacteristicvaluechange(my_object);
	}
	// ////////////////////////onBLEConnectionStateChange/////////////////
	static onBLEConnectionStateChange(my_object) {
		bluetooth.onbleconnectionstatechange(my_object);
	}
	// ////////////////////////setBLEMTU/////////////////
	static setBLEMTU(my_object) {
		console.log("暂不支持")
	}
	// ////////////////////////offBLEConnectionStateChange/////////////////
	static offBLEConnectionStateChange(my_callback) {
		console.log("暂不支持")
	}
	// ////////////////////////offBLECharacteristicValueChange/////////////////
	static offBLECharacteristicValueChange(my_callback) {
		console.log("暂不支持")
	}
	// ////////////////////////getBLEDeviceRSSI/////////////////
	static getBLEDeviceRSSI(my_object) {
		console.log("暂不支持")
	}
	// ////////////////////////offBluetoothDeviceFound/////////////////
	static offBluetoothDeviceFound(my_callback) {
		console.log("暂不支持")
	}
	// ////////////////////////offBluetoothAdapterStateChange/////////////////
	static offBluetoothAdapterStateChange(my_callback) {
		console.log("暂不支持")
	}

	// ////////////////////////////加速计///////////////////////////////////
	// ////////////////////stopAccelerometer/////////////////////
	static stopAccelerometer(my_object) {
		sensor.unsubscribeAccelerometer()
	}
	// ////////////////////startAccelerometer/////////////////////
	static startAccelerometer(my_object) {
		this.interval = my_object.interval;
	}
	// ////////////////////onAccelerometerChange/////////////////////
	static onAccelerometerChange(my_callback) {
		if (!my_callback) {
			return
		}
		let quick_object = {};
		let my_interval = this.interval
		if (my_interval) {
			quick_object = {
				interval: my_interval,
				callback: my_callback
			}
		}
		else {
			quick_object = {
				interval: "normal",
				callback: my_callback
			}
		}
		sensor.subscribeAccelerometer(quick_object)
	}
	// ////////////////////offAccelerometerChange/////////////////////
	static offAccelerometerChange(my_callback) {
		sensor.unsubscribeAccelerometer()
	}
	// ///////////////////////////罗盘///////////////////////////////////
	// ////////////////////stopCompass/////////////////////
	static stopCompass(my_object) {
		sensor.unsubscribeCompass()
		this.isCompass = false;
	}
	// ////////////////////startCompass/////////////////////
	static startCompass(my_object) {
		this.isCompass = true;
	}
	// ////////////////////onCompassChange/////////////////////
	static onCompassChange(my_callback) {
		if (this.isCompass == true) {
			sensor.unsubscribeCompass(my_callback)
		}
	}
	// ////////////////////offCompassChange/////////////////////
	static offCompassChange(my_object) {
		this.isCompass = false;
		sensor.unsubscribeCompass()
	}

	// ///////////////////////////////////多媒体/////////////////////////////////////
	// ////////////////////////////地图///////////////////////////////////
	//  未实现 带组件
	static createMapContext() {
		var MapContext_object = {
			// /////////////////getCenterLocation/////////////
			getCenterLocation: (my_object) => {
				console.log("暂不支持")
			},
			// /////////////////getRegion/////////////
			getRegion: (my_object) => {
				console.log("暂不支持")
			},
			// /////////////////getRotate/////////////
			getRotate: (my_object) => {
				console.log("暂不支持")
			},
			// /////////////////getScale/////////////
			getScale: (my_object) => {
				console.log("暂不支持")
			},
			// /////////////////getSkew/////////////
			getSkew: (my_object) => {
				console.log("暂不支持")
			},
			// /////////////////includePoints/////////////
			includePoints: (my_object) => {
				console.log("暂不支持")
			},
			// /////////////////moveToLocation/////////////
			moveToLocation: (my_object) => {
				console.log("暂不支持")
			},
			// /////////////////setCenterOffset/////////////
			setCenterOffset: (my_object) => {
				console.log("暂不支持")
			},
			// /////////////////translateMarker/////////////
			translateMarker: (my_object) => {
				console.log("暂不支持")
			},
		}
		return MapContext_object
	}
	// //////////////////////////相机////////////////////////////////////
	// ////////////////////////createCameraContext////////////////////
	static createCameraContext() {
		var CameraContext_object = {
			// ////////////////takePhoto/////////////////////
			takePhoto: (my_object) => {
				var quick_object = {};
				if (my_object) {
					for (var my_object_key in my_object) {
						var my_object_value = my_object[my_object_key];
						switch (my_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "quality":
							default:
								quick_object[my_object_key] = my_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var my_res = {
							errMsg: "takePhoto:ok",
							height: 600,
							width: 720
						};
						for (var quick_res_key in quick_res) {
							var quick_res_value = quick_res[quick_res_key]
							switch (quick_res_key) {
								case "uri":
									my_res.tempImagePath = quick_res_value;
									break;
								case "name":
									delete quick_res[quick_res_key]
									break;
								default:
									my_res[quick_res_key] = quick_res_value;
									break;
							}
						}
						if (my_object.success) {
							my_object.success(my_res);
						}
						if (my_object.complete) {
							my_object.complete(my_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "takePhoto:fail"
						};
						if (my_object.fail) {
							my_object.fail(quick_res);
						}
						if (my_object.complete) {
							my_object.complete(quick_res);
						}
					};
				}
				media.takePhoto(quick_object);
			},
			// // ////////////////startRecord/////////////////////
			startRecord: (my_object) => {
				var quick_object = {};
				if (my_object) {
					for (var my_object_key in my_object) {
						var my_object_value = my_object[my_object_key];
						switch (my_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "timeoutCallback":
								break;
							default:
								quick_object[my_object_key] = my_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var my_res = {
							errMsg: "startRecord:ok",
							height: 600,
							width: 720,
							tempThumbPath: "暂不支持"
						};
						for (var quick_res_key in quick_res) {
							var quick_res_value = quick_res[quick_res_key]
							switch (quick_res_key) {
								case "uri":
									my_res.tempVideoPath = quick_res_value;
									break;
								case "name":
									delete quick_res[quick_res_key]
									break;
								default:
									my_res[quick_res_key] = quick_res_value;
									break;
							}
						}
						if (my_object.success) {
							my_object.success(my_res);
						}
						if (my_object.complete) {
							my_object.complete(my_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "startRecord:fail"
						};
						if (my_object.fail) {
							my_object.fail(quick_res);
						}
						if (my_object.complete) {
							my_object.complete(quick_res);
						}
					};
				}
				media.takeVideo(quick_object);
			},
			// // ////////////////stopRecord/////////////////////
			stopRecord: (my_object) => {
				console.log("暂不支持")
			},
			// // ////////////////setZoom/////////////////////
			setZoom: (my_object) => {
				console.log("暂不支持")
			},
			// // ////////////////onCameraFrame/////////////////////
			onCameraFrame: (my_object) => {
				console.log("暂不支持")
				var CameraFrame_object = {
					// ///////////////start///////////////
					start: (my_object) => {
						console.log("暂不支持")
					},
					// ///////////////stop////////////////////
					stop: (my_object) => {
						console.log("暂不支持")
					}
				}
				return CameraFrame_object
			},
		}
		return CameraContext_object
	}
	//  ///////////////////////图片///////////////////////
	// ////////////////////chooseImage/////////////////////
	static chooseImage(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "chooseImage:ok",
					tempFiles: [],
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uris":
							my_res.tempFilePaths = quick_res_value
							break;
						case "files":
							for (var i = 0; i < quick_res_value.length; i++) { //数组
								my_res.tempFiles[i] = {};
								for (var quick_res_files_key in quick_res_value[i]) { //对象
									// console.log(i);
									const quick_res_files_value = quick_res_value[i][quick_res_files_key]
									switch (quick_res_files_key) {
										case "name":
											delete quick_res_value[i][quick_res_files_key]
											break;
										case "uri":
											my_res.tempFiles[i].path = quick_res_files_value;
											break;
										default:
											my_res.tempFiles[i][quick_res_files_key] = quick_res_files_value
											break;
									}
								}
								// delete quick_res_value[i].name;
								// my_res.tempFilePaths.push(quick_res_value[i])
							}
							break;
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "chooseImage:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return media.pickImages(quick_object)
	}
	// //////////////////////chooseMessageFile///////////////
	static chooseMessageFile(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "count":
					case "type":
					case "extension":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "chooseMessageFile:ok",
					tempFiles: [{
						time: 1584961531,
						type: "image"
					}],
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "name":
							my_res.tempFiles[0][quick_res_key] = quick_res_value
							break;
						case "size":
							my_res.tempFiles[0][quick_res_key] = quick_res_value
							break;
						case "uri":
							my_res.tempFiles[0].path = quick_res_value
							break;
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "chooseMessageFile:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return media.pickFile(quick_object);
	}
	// //////////////////////previewImage//////////////////
	static previewImage(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "urls":
						quick_object.uris = my_object_value
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "previewImage:ok",
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "previewImage:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return media.previewImage(quick_object)
	}
	// //////////////////////saveImageToPhotosAlbum/////////////
	static saveImage(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "url":
						quick_object.uri = my_object_value;
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "success: true",
				};
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "saveImageToPhotosAlbum:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return media.saveToPhotosAlbum(quick_object)
	}
	// //////////////////////compressImage/////////////////
	static compressImage(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "src":
						quick_object.uri = my_object_value;
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "compressImage:ok",
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":
							my_res.tempFilePath = quick_res_value;
							break;
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "compressImage:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return image.compressImage(quick_object)
	}
	// //////////////////////getImageInfo/////////////////
	static getImageInfo(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "src":
						quick_object.uri = my_object_value;
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "getImageInfo:ok",
					orientation: "up",
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":
							my_res.path = quick_res_value;
							my_res.type = quick_res_value.split("").reverse().join("").split(".")[0].split("").reverse().join("");
							break;
						case "size":
							delete quick_res[quick_res_key]
							break;
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getImageInfo:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return image.getImageInfo(quick_object)
	}
	// //////////////////////视频////////////////////////////////////////
	// //////////////////////chooseVideo/////////////////
	static chooseVideo(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "sourceType":
					case "compressed":
					case "maxDuration":
					case "camera":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "chooseVideo:ok",
					duration: 3,
					height: 720,
					width: 480
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":
							my_res.tempFilePath = quick_res_value;
							break;
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "chooseVideo:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return media.pickVideo(my_object);
	}
	// //////////////////////saveVideoToPhotosAlbum/////////////////
	static saveVideoToPhotosAlbum(my_object) {
		console.log("暂不支持")
	}
	// //////////////////////getVideoInfo/////////////////
	static getVideoInfo(my_object) {
		console.log("暂不支持")
	}
	// //////////////////////compressVideo/////////////////
	static compressVideo(my_object) {
		console.log("暂不支持")
	}
	// //////////////////////chooseMedia/////////////////
	static chooseMedia(my_object) {
		console.log("暂不支持")
	}
	// //////////////////////my.createVideoContext/////////////////
	static createVideoContext(my_object) {
		var VideoContext = {
			exitFullScreen: () => {
				console.log("暂不支持")
			},
			exitPictureInPicture: (res) => {
				console.log("暂不支持")
			},
			hideStatusBar: () => {
				console.log("暂不支持")
			},
			pause: () => {
				console.log("暂不支持")
			},
			play: () => {
				console.log("暂不支持")
			},
			playbackRate: (res) => {
				console.log("暂不支持")
			},
			requestFullScreen: (res) => {
				console.log("暂不支持")
			},
			seek: (res) => {
				console.log("暂不支持")
			},
			sendDanmu: (res) => {
				console.log("暂不支持")
			},
			showStatusBar: () => {
				console.log("暂不支持")
			},
			stop: () => {
				console.log("暂不支持")
			},
		};
		return VideoContext
	}
	// ////////////////////音频/////////////////////////////////////////////////////
	// ////////////////////playVoice///////////////////////
	//  快应用没有参数
	static playVoice(my_object) {
		audio.src = my_object.filePath;
		return audio.play();
	}
	// ////////////////////stopVoice///////////////////////
	//  快应用没有参数
	static stopVoice(my_object) {
		return audio.stop();
	}
	// ////////////////////pauseVoice///////////////////////
	//  快应用没有参数
	static pauseVoice(my_object) {
		return audio.pause();
	}
	// ////////////////////getAvailableAudioSources//////////////
	static getAvailableAudioSources(my_object) {
		console.log("暂不支持")
	}
	// ///////////////////createAudioContext////////////////////
	static createAudioContext(my_object) {
		var AudioContext = {
			pause: () => {
				console.log("暂不支持");
			},
			play: () => {
				console.log("暂不支持");
			},
			seek: (Num) => {
				console.log("暂不支持");
			},
			setSrc: (Src) => {
				console.log("暂不支持");
			},
		}
		return AudioContext
	}

	static createInnerAudioContext() {
		var InnerAudioContext = {
			play: () => {
				audio.play();
			},
			pause: () => {
				audio.pause();
			},
			stop: () => {
				audio.stop();
			},
			seek: (num) => {
				console.log("暂不支持");
			},
			destroy: () => {
				console.log("暂不支持");
			},
			offCanplay: (my_callback) => {
				console.log("暂不支持");
			},
			offEnded: (my_callback) => {
				console.log("暂不支持");
			},
			offError: (my_callback) => {
				console.log("暂不支持");
			},
			offPause: (my_callback) => {
				console.log("暂不支持");
			},
			offPlay: (my_callback) => {
				console.log("暂不支持");
			},
			offSeeked: (my_callback) => {
				console.log("暂不支持");
			},
			offSeeking: (my_callback) => {
				console.log("暂不支持");
			},
			offStop: (my_callback) => {
				console.log("暂不支持");
			},
			offWaiting: (my_callback) => {
				console.log("暂不支持");
			},
			onCanplay: (my_callback) => {
				console.log("暂不支持");
			},
			onEnded: (my_callback) => {
				console.log("暂不支持");
			},
			onError: (my_callback) => {
				console.log("暂不支持");
			},
			onPause: (my_callback) => {
				console.log("暂不支持");
			},
			onPlay: (my_callback) => {
				console.log("暂不支持");
			},
			onSeeked: (my_callback) => {
				console.log("暂不支持");
			},
			onSeeking: (my_callback) => {
				console.log("暂不支持");
			},
			onStop: (my_callback) => {
				console.log("暂不支持");
			},
			onTimeUpdate: (my_callback) => {
				console.log("暂不支持");
			},
			onWaiting: (my_callback) => {
				console.log("暂不支持");
			},

		}
		return InnerAudioContext
	}
	// ////////////////////背景音频///////////////////////////////////////////////////
	// quickapp音频播放里面没有参数 没有成功失败的回调
	// ////////////////////////playBackgroundAudio///////////////////
	static playBackgroundAudio(my_object) {
		if (!my_object) {
			return;
		}
		let my_dataUrl = my_object.dataUrl;
		let my_title = my_object.title;
		let my_coverImgUrl = my_object.coverImgUrl;
		let my_success = my_object.success;
		let my_fail = my_object.fail;
		let my_complete = my_object.complete;
		my_object = null;
		//////////////////////
		if (my_dataUrl) {
			audio.src = my_dataUrl;
		}
		if (my_title) {
			audio.tilte = my_title;
		}
		if (my_coverImgUrl) {
			audio.cover = my_coverImgUrl;
		}
		return audio.play();
	}
	// ////////////////////////stopBackgroundAudio///////////////////
	static stopBackgroundAudio(my_object) {
		audio.stop();
	}
	// ////////////////////////seekBackgroundAudio///////////////////
	static seekBackgroundAudio(my_object) {
		if (!my_object) {
			return;
		}
		let my_position = my_object.position;
		let my_success = my_object.success;
		let my_fail = my_object.fail;
		let my_complete = my_object.complete;
		if (my_position) {
			audio.currentTime = my_position
		}
		return;
	}
	// ////////////////////////pauseBackgroundAudio///////////////////
	static pauseBackgroundAudio(my_object) {
		audio.pause();
	}
	// ////////////////////////onBackgroundAudioStop///////////////////
	static onBackgroundAudioStop(my_callback) {
		audio.onstop = my_callback;
	}
	// ////////////////////////onBackgroundAudioPlay///////////////////
	static onBackgroundAudioPlay(my_callback) {
		audio.onplay = my_callback;
	}
	// ////////////////////////onBackgroundAudioPause///////////////////
	static onBackgroundAudioPause(my_callback) {
		audio.onpause = my_callback;
	}
	// ////////////////////////getBackgroundAudioPlayerState///////////////////
	static getBackgroundAudioPlayerState(my_object) {
		if (!my_object) {
			return;
		}
		let my_success = my_object.success;
		let my_fail = my_object.fail;
		let my_complete = my_object.complete;
		var quick_object = {};
		my_object = null;
		//////////////////////////
		quick_object.success = function (quick_res) {
			var my_res = {
				errMsg: "getBackgroundAudioPlayerState:ok",
				duration: "暂不支持",
				downloadPercent: "暂不支持",
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "state": // 快应用
						if (quick_res_value == "play") {
							my_res.status = 1;
						}
						if (quick_res_value == "pause") {
							my_res.status = 0;
						}
						if (quick_res_value == "stop") {
							my_res.status = 2;
						}
						break;
					case "src":   // 快应用
						my_res.dataUrl = quick_res_value;// 微信
						break;
					case "currentTime":
						my_res.currentPosition = quick_res_value;
						break;
					case "autoplay":
						delete quick_res[quick_res_key];
						break;
					case "loop":
						delete quick_res[quick_res_key];
						break;
					case "volume":
						delete quick_res[quick_res_key];
						break;
					case "muted":
						delete quick_res[quick_res_key];
						break;
					case "notificationVisible":
						delete quick_res[quick_res_key];
						break;
					default:
						my_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (my_success) {
				my_success(my_res);
			}
			if (my_complete) {
				my_complete(my_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "getBackgroundAudioPlayerState:fail"
			}
			if (my_fail) {
				my_fail(quick_res);
			}
			if (my_complete) {
				my_complete(quick_res);
			}
		};
		return audio.getPlayState(quick_object);
	}
	// ////////////////////////getBackgroundAudioManager///////////////////
	static getBackgroundAudioManager() {
		var BackgroundAudioManager = {
			//  属性 需要实时更新 当前属性
			duration: audio.duration,
			currentTime: audio.currentTime,
			paused: "暂不支持",
			buffered: "暂不支持",
			//  方法
			stop: function () {
				audio.stop()
			},
			play: function () {
				audio.src = this.src;
				audio.title = this.title;
				audio.currentTime = this.startTime;
				audio.artist = this.singer;
				audio.cover = this.coverImgUrl;
				audio.play();
			},
			seek: function (my_number) {
				audio.currentTime = my_number;
			},
			pause: function () {
				audio.pause();
			},
			onWaiting: function () {
				console.log("暂不支持");
			},
			onTimeUpdate: function (my_callback) {
				audio.ontimeupdate = my_callback;
			},
			onStop: function (my_callback) {
				audio.onstop = my_callback;
			},
			onSeeking: function (my_callback) {
				console.log("暂不支持");
			},
			onSeeked: function (my_callback) {
				console.log("暂不支持");
			},
			// ios
			onPrev: function () {
				console.log("暂不支持");
			},
			onPlay: function (my_callback) {
				audio.onplay = my_callback;
			},
			onPause: function (my_callback) {
				audio.onpause = my_callback;
			},
			// ios
			onNext: function (my_callback) {
				console.log("暂不支持");
			},
			onError: function (my_callback) {
				audio.onerror = my_callback;
			},
			onEnded: function (my_callback) {
				audio.onended = my_callback;
			},
			onCanplay: function (my_callback) {
				console.log("暂不支持");
			}
		}
		return BackgroundAudioManager;
	}
	// ////////////////////实时音视频///////////////////////////////////////////////////
	// ///////////////createLivePusherContext//////////////////
	static createLivePusherContext() {
		var LivePusherContextObject = {
			pause: (my_object) => {
				console.log("暂不支持")
			},
			pauseBGM: (my_object) => {
				console.log("暂不支持")
			},
			playBGM: (my_object) => {
				console.log("暂不支持")
			},
			resume: (my_object) => {
				console.log("暂不支持")
			},
			resumeBGM: (my_object) => {
				console.log("暂不支持")
			},
			setBGMVolume: (my_object) => {
				console.log("暂不支持")
			},
			setMICVolume: (my_object) => {
				console.log("暂不支持")
			},
			snapshot: (my_object) => {
				console.log("暂不支持")
			},
			start: (my_object) => {
				console.log("暂不支持")
			},
			startPreview: (my_object) => {
				console.log("暂不支持")
			},
			stop: (my_object) => {
				console.log("暂不支持")
			},
			stopBGM: (my_object) => {
				console.log("暂不支持")
			},
			stopPreview: (my_object) => {
				console.log("暂不支持")
			},
			switchCamera: (my_object) => {
				console.log("暂不支持")
			},
			toggleTorch: (my_object) => {
				console.log("暂不支持")
			},
		}
		return LivePusherContextObject;
	}
	// ///////////////createLivePlayerContext//////////////////
	static createLivePlayerContext() {
		var LivePlayerContextObject = {
			exitFullScreen: (my_object) => {
				console.log("暂不支持")
			},
			exitPictureInPicture: (my_object) => {
				console.log("暂不支持")
			},
			mute: (my_object) => {
				console.log("暂不支持")
			},
			pause: (my_object) => {
				console.log("暂不支持")
			},
			play: (my_object) => {
				console.log("暂不支持")
			},
			requestFullScreen: (my_object) => {
				console.log("暂不支持")
			},
			resume: (my_object) => {
				console.log("暂不支持")
			},
			snapshot: (my_object) => {
				console.log("暂不支持")
			},
			stop: (my_object) => {
				console.log("暂不支持")
			},
		}
		return LivePlayerContextObject;
	}
	// //////////////////////Recorder录音/////////////////////////////////
	// //////////////////////getRecorderManager///////////////////////
	static getRecorderManager() {
		var RecorderManagerObj = {
			start: (my_object) => {
				var quick_object = {};
				if (my_object) {
					for (var my_object_key in my_object) {
						var my_object_value = my_object[my_object_key];
						switch (my_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "frameSize":
							case "audioSource":
								break;
							default:
								quick_object[my_object_key] = my_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var my_res = {
							errMsg: "operateRecorder:ok"
						};
						for (var quick_res_key in quick_res) {
							var quick_res_value = quick_res[quick_res_key]
							switch (quick_res_key) {
								case "uri":
									delete quick_res[quick_res_key];
									break;
								default:
									my_res[quick_res_key] = quick_res_value;
									break;
							}
						}
						if (my_object.success) {
							my_object.success(my_res);
						}
						if (my_object.complete) {
							my_object.complete(my_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "operateRecorder:fail"
						};
						if (my_object.fail) {
							my_object.fail(quick_res);
						}
						if (my_object.complete) {
							my_object.complete(quick_res);
						}
					};
				}
				return record.start(quick_object)
			},
			stop: (my_object) => {
				return record.stop(my_object);
			},
			onError: (my_object) => {
				console.log("暂不支持");
			},
			onFrameRecorded: (my_object) => {
				console.log("暂不支持");
			},
			onInterruptionBegin: (my_object) => {
				console.log("暂不支持");
			},
			onInterruptionEnd: (my_object) => {
				console.log("暂不支持");
			},
			onPause: (my_object) => {
				console.log("暂不支持");
			},
			onResume: (my_object) => {
				console.log("暂不支持");
			},
			onStart: (my_object) => {
				console.log("暂不支持");
			},
			onStop: (my_object) => {
				console.log("暂不支持");
			},
			pause: (my_object) => {
				console.log("暂不支持");
			},
			resume: (my_object) => {
				console.log("暂不支持");
			}
		}
		return RecorderManagerObj;
	}
	// //////////////////////startRecord///////////////////////
	static startRecord(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "startRecord:ok"
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":
							my_res.tempFilePath = quick_res_value;
							break;
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "startRecord:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return record.start(quick_object)
	};
	// //////////////////////stopRecord///////////////////////
	static stopRecord(my_object) {
		// 快应用没有参数，没有返回值
		return record.stop(my_object)
	}
	// ///////////////////////音视频合成/////////////////////////
	// /////////////////createMediaContainer////////////
	static createMediaContainer() {
		var MediaContainerObject = {
			addTrack: (track) => {
				console.log("暂不支持")
			},
			destroy: () => {
				console.log("暂不支持")
			},
			export: () => {
				console.log("暂不支持")
			},
			removeTrack: (track) => {
				console.log("暂不支持")
			},
			extractDataSource: (my_object) => {
				console.log("暂不支持")
			},
		}
		return MediaContainerObject;
	}
	// ///////////////////////视频解码器/////////////////////////
	// /////////////////createVideoDecoder////////////
	static createVideoDecoder() {
		var VideoDecoderObject = {
			getFrameData: () => {
				console.log("暂不支持")
			},
			off: () => {
				console.log("暂不支持")
			},
			on: () => {
				console.log("暂不支持")
			},
			remove: () => {
				console.log("暂不支持")
			},
			seek: (my_number) => {
				console.log("暂不支持")
			},
			start: (my_object) => {
				console.log("暂不支持")
			},
			stop: () => {
				console.log("暂不支持")
			},
		}
		return VideoDecoderObject;
	}
	// ///////////////////////画面录制器/////////////////////////
	// /////////////////createMediaRecorder////////////
	static createMediaRecorder() {
		var MediaRecorderObject = {
			destroy: () => {
				console.log("暂不支持")
			},
			off: () => {
				console.log("暂不支持")
			},
			on: () => {
				console.log("暂不支持")
			},
			pause: () => {
				console.log("暂不支持")
			},
			requestFrame: (my_callback) => {
				console.log("暂不支持")
			},
			resume: () => {
				console.log("暂不支持")
			},
			start: (my_object) => {
				console.log("暂不支持")
			},
			stop: () => {
				console.log("暂不支持")
			},
		}
		return MediaRecorderObject;
	}

	// ////////////////////////////基础///////////////////////////////////////////
	// //////////////////////canIUse///////////////////////
	static canIUse(my_object) {
		console.log("暂不支持");
	}
	// ///////////////////base64ToArrayBuffer//////////////////
	static base64ToArrayBuffer(base64String) {
		var Base64Binary = {
			_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvyz0123456789+/=",

			/* will return a  Uint8Array type */
			decodeArrayBuffer: function (input) {
				var bytes = (input.length / 4) * 3;
				var ab = new ArrayBuffer(bytes);
				this.decode(input, ab);
				return ab;
			},

			removePaddingChars: function (input) {
				var lkey = this._keyStr.indexOf(input.charAt(input.length - 1));
				if (lkey == 64) {
					return input.substring(0, input.length - 1);
				}
				return input;
			},

			decode: function (input, arrayBuffer) {
				//get last chars to see if are valid
				input = this.removePaddingChars(input);
				input = this.removePaddingChars(input);

				var bytes = parseInt((input.length / 4) * 3, 10);

				var uarray;
				var chr1, chr2, chr3;
				var enc1, enc2, enc3, enc4;
				var i = 0;
				var j = 0;

				if (arrayBuffer) {
					uarray = new Uint8Array(arrayBuffer);
				} else {
					uarray = new Uint8Array(bytes);
				}
				input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
				for (i = 0; i < bytes; i += 3) {
					//get the 3 octects in 4 ascii chars
					enc1 = this._keyStr.indexOf(input.charAt(j++));
					enc2 = this._keyStr.indexOf(input.charAt(j++));
					enc3 = this._keyStr.indexOf(input.charAt(j++));
					enc4 = this._keyStr.indexOf(input.charAt(j++));
					chr1 = (enc1 << 2) | (enc2 >> 4);
					chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
					chr3 = ((enc3 & 3) << 6) | enc4;
					uarray[i] = chr1;
					if (enc3 != 64) uarray[i + 1] = chr2;
					if (enc4 != 64) uarray[i + 2] = chr3;
				}
				return uarray;
			}
		}
		var byteArray = Base64Binary.decodeArrayBuffer(base64String);
		return byteArray;
	}

	// ///////////////////arrayBufferToBase64//////////////////
	static arrayBufferToBase64(buffer) {
		var base64 = ''
		var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvyz0123456789+/'
		var bytes = new Uint8Array(buffer)
		var byteLength = bytes.byteLength;
		var byteRemainder = byteLength % 3
		var mainLength = byteLength - byteRemainder
		var a, b, c, d
		var chunk
		for (var i = 0; i < mainLength; i = i + 3) {
			chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
			a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
			b = (chunk & 258048) >> 12 // 258048 = (2^6 - 1) << 12
			c = (chunk & 4032) >> 6 // 4032 = (2^6 - 1) << 6
			d = chunk & 63 // 63 = 2^6 - 1
			base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
		}
		if (byteRemainder == 1) {
			chunk = bytes[mainLength]
			a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2;
			b = (chunk & 3) << 4 // 3 = 2^2 - 1;
			base64 += encodings[a] + encodings[b] + '=='
		} else if (byteRemainder == 2) {
			chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]
			a = (chunk & 16128) >> 8 // 16128 = (2^6 - 1) << 8;
			b = (chunk & 1008) >> 4 // 1008 = (2^6 - 1) << 4;
			c = (chunk & 15) << 2 // 15 = 2^4 - 1;
			base64 += encodings[a] + encodings[b] + encodings[c] + '='
		}
		return base64
	}

	// //////////////////////更新////////////////////////
	// //////////////getUpdateManager////////////
	static getUpdateManager() {
		var updateManager = {
			applyUpdate: () => {
				console.log("暂不支持")
			},
			onCheckForUpdate: () => {
				console.log("暂不支持")
			},
			onUpdateFailed: () => {
				console.log("暂不支持")
			},
			onUpdateReady: () => {
				console.log("暂不支持")
			},
		}
		return updateManager;
	}
	// //////////////////////小程序////////////////////////
	// //////////////////////生命周期////////////////////////

	// //////////////////getLaunchOptionsSync////////////
	static getLaunchOptionsSync() {
		console.log("暂不支持")
	}
	static getEnterOptionsSync() {
		console.log("暂不支持")
	}

	// //////////////////////应用级事件////////////////////////
	// //////////////////////onUnhandledRejection////////////////////////
	static onUnhandledRejection() {
		console.log("暂不支持")
	}
	// //////////////////////onThemeChange////////////////////////
	static onThemeChange() {
		console.log("暂不支持")
	}
	// //////////////////////onPageNotFound////////////////////////
	static onPageNotFound() {
		console.log("暂不支持")
	}
	// //////////////////////onError////////////////////////
	static onError() {
		console.log("暂不支持")
	}
	// //////////////////////onAudioInterruptionEnd////////////////////////
	static onAudioInterruptionEnd() {
		console.log("暂不支持")
	}
	// //////////////////////onAudioInterruptionBegin////////////////////////
	static onAudioInterruptionBegin() {
		console.log("暂不支持")
	}
	// //////////////////////onAppShow////////////////////////
	static onAppShow() {
		console.log("暂不支持")
	}
	// //////////////////////onAppHide////////////////////////
	static onAppHide() {
		console.log("暂不支持")
	}
	// //////////////////////offUnhandledRejection////////////////////////
	static offUnhandledRejection() {
		console.log("暂不支持")
	}
	// //////////////////////offThemeChange////////////////////////
	static offThemeChange() {
		console.log("暂不支持")
	}
	// //////////////////////offPageNotFound////////////////////////
	static offPageNotFound() {
		console.log("暂不支持")
	}
	// //////////////////////offError////////////////////////
	static offError() {
		console.log("暂不支持")
	}
	// //////////////////////offAudioInterruptionEnd////////////////////////
	static offAudioInterruptionEnd() {
		console.log("暂不支持")
	}
	// //////////////////////offAppShow////////////////////////
	static offAppShow() {
		console.log("暂不支持")
	}
	// //////////////////////offAppHide////////////////////////
	static offAppHide() {
		console.log("暂不支持")
	}

	// //////////////////////调式////////////////////////
	// //////////////////////setEnableDebug////////////////////////
	static setEnableDebug() {
		console.log("暂不支持")
	}
	// //////////////////////getRealtimeLogManager////////////////////////
	static getRealtimeLogManager() {
		var RealtimeLogManager = {
			addFilterMsg: () => {
				console.log("暂不支持")
			},
			error: () => {
				console.log("暂不支持")
			},
			in: () => {
				console.log("暂不支持")
			},
			info: () => {
				console.log("暂不支持")
			},
			setFilterMsg: () => {
				console.log("暂不支持")
			},
			warn: () => {
				console.log("暂不支持")
			},
		}
		return RealtimeLogManager;
	}
	// //////////////////////getLogManager////////////////////////
	static getLogManager() {
		var LogManager = {
			debug: () => {
				console.log("暂不支持")
			},
			info: () => {
				console.log("暂不支持")
			},
			log: () => {
				console.log("暂不支持")
			},
			warn: () => {
				console.log("暂不支持")
			},
		}
		return LogManager;
	}
	// //////////////////////console/////////////////////

	// //////////////////////定时器//////////////////////////

	// //////////////////////环境变量////////////////////////

	///////////////////////////路由/////////////////////////////////////////////
	// //////////////////////switchTab////////////////////////
	static switchTab(my_object) {
		if (!my_object) {
			return
		}
		router.clear();
		router.replace({ uri: "onekit/page/tabspage", params: { url: my_object.url } })
	}
	// //////////////////////reLaunch////////////////////////
	//   和快应用 路由的传参方式不一样
	static reLaunch(my_object) {
		router.clear();
		var quick_object = {};
		// 没有参数时
		if (my_object.url.indexOf('?') == -1) {
			quick_object.uri = my_object.url;
		}
		// 有参数时
		else {
			quick_object.uri = my_object.url.split("?")[0];
			quick_object.params = {}
			var arr = my_object.url.split("?")[1].split("&")
			for (let i = 0; i < arr.length; i++) {
				quick_object.params[arr[i].split("=")[0]] = arr[i].split("=")[1];
			}
		}
		router.replace(quick_object);
	}

	// //////////////////////redirectTo//////////////////////////
	// 要跳转到 非tabbar页面
	static redirectTo(my_object) {
		var quick_object = {};
		// 没有参数时
		if (my_object.url.indexOf('?') == -1) {
			quick_object.uri = my_object.url;
			//  要判断 tabbar页面
			// for(let tab_obj of tabs_list){
			// 	if(quick_object.uri == tabs_index.pagePath){
			// 		let err = {"errMsg":"redirectTo:fail can not redirectTo a tabbar page"}
			// 		console.error(err);   //   当路径是tabbar时，报错
			// 		return;
			// 	}
			// };
		}
		// 有参数时
		else {
			//  要判断 tabbar页面
			quick_object.uri = my_object.url.split("?")[0];
			quick_object.params = {}
			var arr = my_object.url.split("?")[1].split("&")
			for (let i = 0; i < arr.length; i++) {
				quick_object.params[arr[i].split("=")[0]] = arr[i].split("=")[1];
			}
			console.log(quick_object);
		}
		return router.replace(quick_object);
	}
	// //////////////////////navigateTo//////////////////////////
	static navigateTo(my_object) {
		var quick_object = {};
		// 没有参数时
		if (my_object.url.indexOf('?') == -1) {
			quick_object.uri = my_object.url;
		}
		// 有参数时
		else {
			quick_object.uri = my_object.url.split("?")[0];
			quick_object.params = {}
			var arr = my_object.url.split("?")[1].split("&")
			for (let i = 0; i < arr.length; i++) {
				quick_object.params[arr[i].split("=")[0]] = arr[i].split("=")[1];
			}
		}
		router.push(quick_object);
	}
	// //////////////////////navigateBack////////////////////////
	static navigateBack(my_object) {
		if (!my_object) {
			return router.back();
		}
		var quick_object = {};
		var page = router.getState();
		var stacks = router.getPages();
		var deltaIndex = 0;
		if (my_object.delta) {
			if (my_object.delta >= stacks.length) {
				deltaIndex = 0
			}
			else {
				deltaIndex = page.index - my_object.delta;
			}
		}
		else {
			deltaIndex = page.index - 1;
		}
		quick_object.path = stacks[deltaIndex].path;
		router.back(quick_object);
	}
	// ///////////////////////EventChannel//////////////////////

	// ////////////////////////界面////////////////////////////////////////////

	// ////////////////////////交互//////////////////////////////

	// ////////////////////////showToast//////////////////////////////
	static showToast(my_object) {
		if (!my_object) {
			return;
		}
		let my_content = my_object.content;   // 必填项 现实的文本
		let my_type = my_object.type || "none";    // 图片
		let my_duration = my_object.duration || 200 // 间隔时长

		let my_success = my_object.success;
		let my_fail = my_object.fail;
		let my_complete = my_object.complete;

		let quick_object = {
			message: my_content,
			duration: my_duration
		}
		my_object = null;
		/////////////////////
		return prompt.showToast(quick_object);

	}
	// ////////////////////////showModal//////////////////////////////
	static showModal(my_object) {
		if (!my_object) {
			return;
		}
		let my_title = my_object.title; // 
		let my_content = my_object.content;    //
		let my_showCancel = my_object.showCancel;
		let my_cancelText = my_object.cancelText || '取消';
		let my_cancelColor = my_object.cancelColor || "#000000"
		let my_confirmText = my_object.confirmText || '确定';
		let my_confirmColor = my_object.confirmColor || "#576B95";
		let my_success = my_object.success;
		let my_fail = my_object.fail;
		let my_complete = my_object.complete;
		let quick_object = {
			buttons: [{
				text: my_confirmText,
				color: my_confirmColor
			}, {
				text: my_cancelText,
				color: my_cancelColor
			}]
		}
		my_object = null;
		/////////////////////

		if (my_title) {
			quick_object.title = my_title
		}
		if (my_content) {
			quick_object.message = my_content
		}
		if (my_showCancel == false) {
			quick_object.buttons.splice(1, 1);
		}

		quick_object.success = function (quick_res) {
			var my_res = {
				errMsg: "showModal:ok"
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "index": // 快应用
						if (quick_res_value == "0") {
							my_res.confirm = true;
							my_res.cancel = false;
						}
						if (quick_res_value == "1") {
							my_res.confirm = false;
							my_res.cancel = true;
						}// 微信
						break;
					default:
						my_res[quick_res_key] = quick_res_value;
						break;
				}
			}

			if (my_success) {
				my_success(my_res);
			}
			if (my_complete) {
				my_complete(my_res);
			}
		};
		quick_object.fail = function (quick_res) {
			var quick_res = {
				errMsg: "showModal:fail"
			}
			if (my_fail) {
				my_fail(quick_res);
			}
			if (my_complete) {
				my_complete(quick_res);
			}
		};

		return prompt.showDialog(quick_object)
	}
	// ////////////////////////showActionSheet//////////////////////////
	static showActionSheet(my_object) {
		if (!my_object) {
			return
		}
		let my_title = my_object.tilte;
		let my_items = my_object.items;
		let my_cancelButtonText = my_object.cancelButtonText;
		let my_destructiveBtnIndex = my_object.destructiveBtnIndex;
		let my_badges = my_object.badges;

		let my_success = my_object.success;
		let my_fail = my_object.fail;
		let my_complete = my_object.complete;
		let quick_object = {}
		my_object = null;
		/////////////////
		if (my_items) {
			if (my_itemList.length > 6) {
				var quick_res1 = { errMsg: "showActionSheet:fail parameter error: itemList should not be large than 6" }
				if (my_fail) {
					my_fail(quick_res1);
				}
				if (my_complete) {
					my_complete(quick_res1);
				}
				return;
			}
			else {
				quick_object.itemList = my_items;
			}
		}
		quick_object.success = function (quick_res) {
			var my_res = {
				errMsg: "showActionSheet:ok"
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "index": // 快应用
						my_res.index = quick_res_value; // 微信
						break;
					default:
						//my_res[quick_res_key] = quick_res_value;
						break;
				}
			}

			if (my_success) {
				my_success(my_res);
			}
			if (my_complete) {
				my_complete(my_res);
			}
		};
		quick_object.fail = function (quick_res) {
			var quick_res = {
				errMsg: "showModal:fail"
			}
			if (my_fail) {
				my_fail(quick_res);
			}
			if (my_complete) {
				my_complete(quick_res);
			}
		};
		return prompt.showContextMenu(quick_object)
	}
	// ////////////////////////showLoading//////////////////////////////
	static showLoading(my_object) {
		console.log("暂不支持");
	}
	// ////////////////////////hideLoading//////////////////////////////
	static hideLoading(my_object) {
		console.log("暂不支持");
	}
	// ////////////////////////hideToast//////////////////////////////
	static hideToast(my_object) {
		console.log("暂不支持");
	}
	// /////////////////////////导航栏////////////////////////////
	// ///////////////////setNavigationBarTitle//////////////////
	// 未完成
	static setNavigationBarTitle(my_object) {
		if (!my_object) {
			return;
		}
		let my_title = my_object.title;
		let my_success = my_object.success;
		let my_fail = my_object.fail;
		let my_complete = my_object.complete;
		let quick_object = {}
		my_object = null;
		//////////////
		if (my_title) {
			quick_object.text = my_title;
		}
		return;
	}
	// /////////////////showNavigationBarLoading///////////////
	static showNavigationBarLoading(my_object) {
		console.log("暂不支持");
	}
	// /////////////////setNavigationBarColor///////////////
	static setNavigationBarColor(my_object) {
		console.log("暂不支持");
	}
	// /////////////////hideNavigationBarLoading///////////////
	static hideNavigationBarLoading(my_object) {
		console.log("暂不支持");
	}
	// /////////////////hideHomeButton///////////////
	static hideHomeButton(my_object) {
		console.log("暂不支持");
	}

	// /////////////////////////背景//////////////////////////////
	// /////////////////setBackgroundTextStyle///////////////
	static setBackgroundTextStyle(my_object) {
		console.log("暂不支持");
	}
	// /////////////////setBackgroundColor///////////////
	static setBackgroundColor(my_object) {
		console.log("暂不支持");
	}

	// ////////////////////////Tab Bar///////////////////////////
	// /////////////////showTabBarRedDot///////////////
	static showTabBarRedDot(my_object) {
		console.log("暂不支持");
	}
	// /////////////////showTabBar///////////////
	static showTabBar(my_object) {
		console.log("暂不支持");
	}
	// /////////////////setTabBarStyle///////////////
	static setTabBarStyle(my_object) {
		console.log("暂不支持");
	}
	// /////////////////setTabBarItem///////////////
	static setTabBarItem(my_object) {
		console.log("暂不支持");
	}
	// /////////////////setTabBarBadge///////////////
	static setTabBarBadge(my_object) {
		console.log("暂不支持");
	}
	// /////////////////removeTabBarBadge///////////////
	static removeTabBarBadge(my_object) {
		console.log("暂不支持");
	}
	// /////////////////hideTabBarRedDot///////////////
	static hideTabBarRedDot(my_object) {
		console.log("暂不支持");
	}
	// /////////////////hideTabBar///////////////
	static hideTabBar(my_object) {
		console.log("暂不支持");
	}

	// ////////////////////////字体//////////////////////////////
	// /////////////////loadFontFace///////////////
	static loadFontFace(my_object) {
		console.log("暂不支持");
	}
	// ////////////////////////下拉刷新///////////////////////////
	// /////////////////stopPullDownRefresh///////////////
	static stopPullDownRefresh(my_object) {
		console.log("暂不支持");
	}
	// /////////////////startPullDownRefresh///////////////
	static startPullDownRefresh(my_object) {
		console.log("暂不支持");
	}
	static onPullDownRefresh(my_object) {
		console.log("暂不支持");
	}
	// ////////////////////////滚动//////////////////////////////
	static pageScrollTo(my_object) {
		// document.querySelector("root").offsetY = 200;
		// document.all.root.clientY = -200;
		// var a = document.getElementsByTagName("div")[0].offsetY
		console.log("暂不支持");
	}
	// ////////////////////////动画//////////////////////////////

	// ////////////////////////置顶//////////////////////////////
	// /////////////////setTopBarText///////////////
	static setTopBarText(my_object) {
		console.log("暂不支持");
	}
	// ////////////////////////自定义组件/////////////////////////
	// /////////////////nextTick///////////////
	static nextTick(my_callback) {
		setTimeout(my_callback, 0);
	}
	// ////////////////////////菜单//////////////////////////////
	// ////////getMenuButtonBoundingClientRect////////////
	static getMenuButtonBoundingClientRect() {
		let getMenuButtonBoundingClientRectObject = {
			bottom: 58,
			height: 32,
			left: 317,
			right: 404,
			top: 26,
			width: 87
		}
		return getMenuButtonBoundingClientRectObject;
	}
	// ////////////////////////窗口//////////////////////////////
	// /////////////////setWindowSize///////////////
	static setWindowSize(my_object) {
		console.log("暂不支持");
	}
	// /////////////////onWindowResize///////////////
	static onWindowResize(my_callback) {
		console.log("暂不支持");
	}
	// /////////////////offWindowResize///////////////
	static offWindowResize(my_callback) {
		console.log("暂不支持");
	}
	// ////////////////////////键盘//////////////////////////////
	// /////////////////onKeyboardHeightChange///////////////
	static onKeyboardHeightChange(my_callback) {
		console.log("暂不支持");
	}
	// /////////////////offKeyboardHeightChange///////////////
	static offKeyboardHeightChange(my_callback) {
		console.log("暂不支持");
	}
	// /////////////////hideKeyboard///////////////
	static hideKeyboard(my_object) {
		console.log("暂不支持");
	}
	// /////////////////getSelectedTextRange///////////////
	static getSelectedTextRange(my_object) {
		console.log("暂不支持");
	}
	// ////////////////////////网络////////////////////////////////////////////
	// ///////////////////request///////////////////////
	static request(my_object) {
		if (!my_object) {
			return;
		}
		var quick_object = {}; // 快应用数据对象
		let my_url = my_object.url;
		let my_data = my_object.data;
		let my_headers = my_object.headers;
		let my_timeout = my_object.timeout || 30000;
		let my_method = my_object.method || "GET";
		let my_dataType = my_object.dataType || "json";

		let my_success = my_object.success;
		let my_fail = my_object.fail;
		let my_complete = my_object.complete;
		my_object = null;
		//////////////////////
		if (my_url) {
			quick_object.url = my_url;
		}
		if (my_data) {
			quick_object.data = my_data;
		}
		if (my_headers) {
			quick_object.header = my_headers;
		}
		if (my_method) {
			quick_object.method = my_method;
		}
		if (my_dataType) {
			quick_object.responseType = my_dataType;
		}

		quick_object.success = function (quick_res) {
			var my_res = {
				profile: {
					peerIP: "192.168.22.150",
					port: 80,
					receivedBytedCount: 395,
					redirectEnd: 0,
					redirectStart: 0,
					requestEnd: 1587028378001,
					requestStart: 1587028377982,
					responseEnd: 1587028378001,
					responseStart: 1587028377998
				},
				errMsg: "request:ok",
				abort: "暂不支持"
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "code": // 快应用
						my_res.status = quick_res_value; // 微信
						break;
					case "headers":
						var quick_res_headers = quick_res_value;
						var my_res_headers = {};
						for (var quick_res_headers_key in quick_res_headers) { // 循环header里面的属性 对cookies做处理
							var quick_res_headers_value = quick_res_headers[quick_res_headers_key];
							switch (quick_res_headers_key) {
								case "Set-Cookie":
									var quick_res_headers_cookies;
									if (quick_res_headers_value) {
										quick_res_headers_cookies = quick_res_headers_value.join(",");
										my_res.cookies = quick_res_headers_value;
									} else {
										quick_res_headers_cookies = "";
									}
									my_res_headers[quick_res_headers_key] = quick_res_headers_cookies;
									break;
								default:
									my_res_headers[quick_res_headers_key] = quick_res_headers_value;
									break;
							}
						};
						my_res.headers = my_res_headers;
						break;
					default:
						my_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (my_success) {
				my_success(my_res);
			}
			if (my_complete) {
				my_complete(my_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "request:fail invalid url"
			}
			if (my_fail) {
				my_fail(quick_res);
			}
			if (my_complete) {
				my_complete(quick_res);
			}
		};
		return fetch.fetch(quick_object); // 最后输出快应用的数据对象，但是输出的格式
	}

	// ////////////////////////////requestTask/////////////////////////////

	// ////////////////////////////上传/////////////////////////////
	// ///////////////////////////uploadFile///////////////////////
	static uploadFile(my_object) {
		if (!my_object) {
			return;
		}
		let my_url = my_object.url;
		let my_filePath = my_object.filePath;
		let my_fileName = my_object.fileName;
		let my_fileType = my_object.fileType
		let my_hideLoading = my_object.hideLoading
		let my_header = my_object.header;
		let my_formData = my_object.formData;

		let my_success = my_object.success;
		let my_fail = my_object.fail;
		let my_complete = my_object.complete;
		var quick_object = {
			files: [{}],
		}; // 快应用数据对象
		my_object = null
		//////////////////////
		if (my_url) {
			quick_object.url = my_url;
		}
		if (my_filePath) {
			quick_object.files[0].uri = my_filePath;
		}
		if (my_header) {
			quick_object.header = my_header;
		}
		if (my_fileName) {
			quick_object.files[0].name = my_fileName;
		}
		if (my_formData) {
			quick_object.data = [];
			for (let key in my_formData) {
				let quick_data_obj = {
					name: key,
					value: my_formData[key]
				}
				quick_object.data.push(quick_data_obj)
			}
		}
		quick_object.success = function (quick_res) {
			var my_res = {
				errMsg: "uploadFile:ok",
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "code": // 快应用
						my_res.statusCode = quick_res_value; // 微信
						break;
					case "headers":
						my_res.header = quick_res_value; // 微信
						break;
					default:
						my_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (my_success) {
				my_success(my_res);
			}
			if (my_complete) {
				my_complete(my_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "uploadFile:fail"
			}
			if (my_fail) {
				my_fail(quick_res);
			}
			if (my_complete) {
				my_complete(quick_res);
			}
		};
		return request.upload(quick_object); // 最后输出快应用的数据对象，但是输出的格式
	}
	// ////////////////////////////UploadTask/////////////////////

	// ////////////////////////////下载/////////////////////////////
	// ////////////////////////downloadFile////////////////
	static downloadFile(my_object) {
		if (!my_object) {
			return;
		}
		let my_url = my_object.url;
		let my_header = my_object.header;
		let my_success = my_object.success;
		let my_fail = my_object.fail;
		let my_complete = my_object.complete;
		my_object = null;

		var quick_object = {
		};
		//////////////////////
		if (my_url) {
			quick_object.url = my_url;
		}
		if (my_header) {
			quick_object.header = my_header;
		}
		quick_object.success = function (quick_res) {
			var my_res = {
				errMsg: "downloadFile:ok", tempFilePath: "",
				dataLength: 147,
				profile: {
					SSLconnectionEnd: 1589529382326,
					SSLconnectionStart: 1589529382270,
					connectEnd: 1589529382326,
					connectStart: 1589529382261,
					domainLookUpEnd: 1589529382261,
					domainLookUpStart: 1589529382253,
					downstreamThroughputKbpsEstimate: 1961,
					estimate_nettype: 5,
					fetchStart: 1589529382253,
					httpRttEstimate: 58,
					peerIP: "118.24.23.53",
					port: 443,
					receivedBytedCount: 350,
					redirectEnd: 0,
					redirectStart: 0,
					requestEnd: 1589529382404,
					requestStart: 1589529382253,
					responseEnd: 1589529382404,
					responseStart: 1589529382384,
					rtt: 58,
					sendBytesCount: 481,
					socketReused: false,
					throughputKbps: 0,
					transportRttEstimate: 6
				},
				header: {
					"Accept-Ranges": "bytes",
					"Content- Length": "147",
					"Content - Type": "application/zip",
					"Date": "Fri, 15 May 2020 07:56:24 GMT",
					"ETag": "W/'47 - 1589420853796'",
					"Last - Modified": "Thu, 14 May 2020 01:47:33 GMT",
				},
				cookie: [],
				statusCode: 200
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key];
				switch (quick_res_key) {
					case "token": // 快应用
						delete quick_res[quick_res_key]
						break;
					default:
						my_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (my_success) {
				my_success(my_res);
			}
			if (my_complete) {
				my_complete(my_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "downloadFile:fail",
			}
			if (my_fail) {
				my_fail(quick_res);
			}
			if (my_complete) {
				my_complete(quick_res);
			}
		};
		return request.download(quick_object); // 最后输出快应用的数据对象，但是输出的格式
	}
	// ////////////////////////DownloadTask////////////////

	// ////////////////////////////WebSocket/////////////////////////////
	// ////////////////////////connectSocket////////////////
	static connectSocket(my_object) {
		if (!my_object) {
			return;
		}
		let my_url = my_object.url;
		let my_header = my_object.header;
		let my_data = my_object.data
		var quick_object = {};
		my_object = null;
		//////////////////////
		if (my_url) {
			quick_object.url = my_url;
		}
		if (my_header) {
			quick_object.header = my_header;
		}

		let quick_ws = websocketfactory.create(quick_object);

		let socket = new websocket(quick_ws);
		this.socketGlo = socket;
		return socket;
	}
	//////////////////offSocketClose///////////////////
	static offSocketClose() {
		console.log("offSocketClose 暂不支持！")
	}
	//////////////offSocketMessage//////////////////////////
	static offSocketMessage() {
		console.log("offSocketMessage 暂不支持！")
	}
	///////////////////////////offSocketOpen/////////////////////////////
	static offSocketOpen() {
		console.log("offSocketOpen 暂不支持！")
	}
	//////////////////offSocketError///////////////////////////
	static offSocketError() {
		console.log("offSocketError 暂不支持！")
	}

	// /////////////////////onSocketOpen////////////////////
	static onSocketOpen(my_callback) {
		this.socketGlo.onOpen(my_callback);
	}
	// /////////////////////sendSocketMessage////////////////
	static sendSocketMessage(my_object) {
		this.socketGlo.send(quick_object)
	}
	// /////////////////////onSocketMessage////////////////
	static onSocketMessage(my_callback) {
		this.socketGlo.onMessage(my_callback)
	}
	// /////////////////////onSocketError////////////////
	static onSocketError(my_callback) {
		this.socketGlo.onError(my_callback)
	}
	// /////////////////////onSocketClose////////////////
	static onSocketClose(my_callback) {
		this.socketGlo.onClose(my_callback)
	}
	// /////////////////////closeSocket////////////////
	static closeSocket(my_object) {
		this.socketGlo.close(my_object)
	}
	// ////////////////////////////mDNS////////////////////////////////////
	// ///////////////////stopLocalServiceDiscovery///////////
	static stopLocalServiceDiscovery(my_object) {
		console.log("暂不支持")
	}
	// ///////////////////startLocalServiceDiscovery///////////
	static startLocalServiceDiscovery(my_object) {
		console.log("暂不支持")
	}
	// ///////////////////onLocalServiceResolveFail///////////
	static onLocalServiceResolveFail(my_object) {
		console.log("暂不支持")
	}
	// ///////////////////onLocalServiceLost///////////
	static onLocalServiceLost(my_object) {
		console.log("暂不支持")
	}
	// ///////////////////onLocalServiceFound///////////
	static onLocalServiceFound(my_object) {
		console.log("暂不支持")
	}
	// ///////////////////onLocalServiceDiscoveryStop///////////
	static onLocalServiceDiscoveryStop(my_object) {
		console.log("暂不支持")
	}
	// ///////////////////offLocalServiceResolveFail///////////
	static offLocalServiceResolveFail(my_object) {
		console.log("暂不支持")
	}
	// ///////////////////offLocalServiceLost///////////
	static offLocalServiceLost(my_object) {
		console.log("暂不支持")
	}
	// ///////////////////offLocalServiceFound///////////
	static offLocalServiceFound(my_object) {
		console.log("暂不支持")
	}
	// ///////////////////offLocalServiceDiscoveryStop///////////
	static offLocalServiceDiscoveryStop(my_object) {
		console.log("暂不支持")
	}
	///////////////////////////UDP 通信协议////////////////////////////////////////
	// ///////////////////createUDPSocket////////////////
	static createUDPSocket(my_object) {
		console.log("暂不支持")
		let UDPSocket = {
			// ///////////////onListening///////////
			onListening: (my_object) => {
				console.log("暂不支持")
			},
			// ///////////////bind///////////
			bind: (my_object) => {
				console.log("暂不支持")
			},
			// ///////////////close///////////
			close: () => {
				console.log("暂不支持")
			},
			// ///////////////offClose///////////
			offClose: (my_callback) => {
				console.log("暂不支持")
			},
			// ///////////////offError///////////
			offError: (my_callback) => {
				console.log("暂不支持")
			},
			// ///////////////offListening///////////
			offListening: (my_callback) => {
				console.log("暂不支持")
			},
			// ///////////////offMessage///////////
			offMessage: (my_callback) => {
				console.log("暂不支持")
			},
			// ///////////////onClose///////////
			onClose: (my_callback) => {
				console.log("暂不支持")
			},
			// ///////////////onError///////////
			onError: (my_callback) => {
				console.log("暂不支持")
			},
			// ///////////////onMessage///////////
			onMessage: (my_callback) => {
				console.log("暂不支持")
			},
			// ///////////////send///////////
			send: (my_object) => {
				console.log("暂不支持")
			},
		}
		return UDPSocket;
	}

	///////////////////////////文件/////////////////////////////////////////////
	// 文件中  和 quickapp的 资源路径不一样 ，会保存失败
	// //////////////////////getSavedFileInfo//////////////////////
	static getSavedFileInfo(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "apFilePath":
						quick_object.uri = my_object_value;
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "getSavedFileInfo:ok",
				};
				for (var quick_res_key in quick_res) {
					var quick_res_value = quick_res[quick_res_key]
					switch (quick_res_key) {
						case "uri":
							delete quick_res[quick_res_key]
							break;
						case "type":
							delete quick_res[quick_res_key]
							break;
						case "subFiles":
							delete quick_res[quick_res_key]
							break;
						case "length":
							my_res.size = quick_res_value;
							break;
						case "lastModifiedTime":
							my_res.createTime = quick_res_value;
							break;
						default:
							my_res[quick_res_key] = quick_res_value;
							break;
					}
				}
				if (my_object.success) {
					my_object.success(my_res);
				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "getSavedFileInfo:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return file.get(quick_object)
	}
	// //////////////////////saveFileToDisk//////////////////////
	static saveFileToDisk(my_object) {
		console.log("暂不支持");
	}
	// //////////////////////saveFile//////////////////////
	static saveFile(my_object) {
		console.log("暂不支持");
	}
	// //////////////////////removeSavedFile//////////////////////
	static removeSavedFile(my_object) {
		var quick_object = {};
		if (my_object) {
			for (var my_object_key in my_object) {
				var my_object_value = my_object[my_object_key];
				switch (my_object_key) {
					case "success": // 快应用
					case "fail":
					case "complete":
						break;
					case "apFilePath":
						quick_object.uri = my_object_value;
						break;
					default:
						quick_object[my_object_key] = my_object_value;
						break;
				}
			};
			quick_object.success = function (quick_res) {
				var my_res = {
					errMsg: "removeSavedFile:ok",
				};
				if (my_object.success) {
					my_object.success(my_res);

				}
				if (my_object.complete) {
					my_object.complete(my_res);
				}
			};
			quick_object.fail = function (quick_res) {
				quick_res = {
					errMsg: "removeSavedFile:fail"
				};
				if (my_object.fail) {
					my_object.fail(quick_res);
				}
				if (my_object.complete) {
					my_object.complete(quick_res);
				}
			};
		}
		return file.delete(quick_object)
	}
	// //////////////////////openDocument//////////////////////
	static openDocument(my_object) {
		console.log("暂不支持");
	}
	// //////////////////////getSavedFileList//////////////////////
	static getSavedFileList(my_object) {
		console.log("暂不支持");
	}
	// //////////////////////getFileInfo//////////////////////
	static getFileInfo(my_object) {
		console.log("暂不支持");
	}
	// //////////////////////getFileSystemManager//////////////////
	static getFileSystemManager() {
		var FileSystemManager = {
			access: (my_object) => {
				var quick_object = {};
				if (my_object) {
					for (var my_object_key in my_object) {
						var my_object_value = my_object[my_object_key];
						switch (my_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "path":
								quick_object.uri = my_object_value;
								break;
							default:
								quick_object[my_object_key] = my_object_value;
								break;
						}
					};
					var qucikUri = quick_object.uri
					quick_object.success = function (quick_res) {
						var my_res = {
							errMsg: "access:ok",
						};
						if (my_object.success) {
							my_object.success(my_res);
						}
						if (my_object.complete) {
							my_object.complete(my_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "access:fail no such file or directory , access " + qucikUri
						};
						if (my_object.fail) {
							my_object.fail(quick_res);
						}
						if (my_object.complete) {
							my_object.complete(quick_res);
						}
					};
				}
				return file.access(quick_object)
			},
			//  /////////////  1.text 和data 类型不一样  2.fail失败的不一样 ////////////////
			appendFile: (my_object) => {
				var quick_object = {
					append: true
				};
				if (my_object) {
					for (var my_object_key in my_object) {
						var my_object_value = my_object[my_object_key];
						switch (my_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "filePath":
								quick_object.uri = my_object_value;
								break;
							case "data":
								quick_object.text = my_object_value;
								break;
							default:
								quick_object[my_object_key] = my_object_value;
								break;
						}
					};
					var qucikUri = quick_object.uri
					quick_object.success = function (quick_res) {
						var my_res = {
							errMsg: "appendFile:ok",
						};
						if (my_object.success) {
							my_object.success(my_res);
						}
						if (my_object.complete) {
							my_object.complete(my_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "appendFile:fail"
						};
						if (my_object.fail) {
							my_object.fail(quick_res);
						}
						if (my_object.complete) {
							my_object.complete(quick_res);
						}
					};
				}
				return file.writeText(quick_object);
			},
			copyFile: (my_object) => {
				var quick_object = {
					append: true
				};
				if (my_object) {
					for (var my_object_key in my_object) {
						var my_object_value = my_object[my_object_key];
						switch (my_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "srcPath":
								quick_object.srcUri = my_object_value;
								break;
							case "destPath":
								quick_object.dstUri = my_object_value;
								break;
							default:
								quick_object[my_object_key] = my_object_value;
								break;
						}
					};
					var qucikUri = quick_object.uri
					quick_object.success = function (quick_res) {
						var my_res = {
							errMsg: "copyFile:ok",
						};
						if (my_object.success) {
							my_object.success(my_res);
						}
						if (my_object.complete) {
							my_object.complete(my_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "appendFile:fail"
						};
						if (my_object.fail) {
							my_object.fail(quick_res);
						}
						if (my_object.complete) {
							my_object.complete(quick_res);
						}
					};
				}
				return file.copy(quick_object)
			},
			getFileInfo: (my_object) => {
				console.log("暂不支持")
			},
			getSavedFileList: (my_object) => {
				console.log("暂不支持")
			},
			mkdir: (my_object) => {
				var quick_object = {};
				if (my_object) {
					for (var my_object_key in my_object) {
						var my_object_value = my_object[my_object_key];
						switch (my_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "dirPath":
								quick_object.uri = my_object_value;
								break;
							default:
								quick_object[my_object_key] = my_object_value;
								break;
						}
					};
					var qucikUri = quick_object.uri
					quick_object.success = function (quick_res) {
						var my_res = {
							errMsg: "mkdir:ok",
						};
						if (my_object.success) {
							my_object.success(my_res);
						}
						if (my_object.complete) {
							my_object.complete(my_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "mkdir:fail"
						};
						if (my_object.fail) {
							my_object.fail(quick_res);
						}
						if (my_object.complete) {
							my_object.complete(quick_res);
						}
					};
				}
				return file.mkdir(quick_object)
			},
			readdir: (my_object) => {
				console.log("暂不支持")
			},
			readFile: (my_object) => {
				if (my_object.encoding != "") {
					var quick_object = {};
					if (my_object) {
						for (var my_object_key in my_object) {
							var my_object_value = my_object[my_object_key];
							switch (my_object_key) {
								case "success": // 快应用
								case "fail":
								case "complete":
									break;
								case "filePath":
									quick_object.uri = my_object_value;
									break;
								case "position":
									break;
								case "length":
									break;
								default:
									quick_object[my_object_key] = my_object_value;
									break;
							}
						};
						quick_object.success = function (quick_res) {
							var my_res = {
								errMsg: "readFile:ok",
							};
							if (my_object.success) {
								my_object.success(my_res);
							}
							if (my_object.complete) {
								my_object.complete(my_res);
							}
						};
						quick_object.fail = function (quick_res) {
							quick_res = {
								errMsg: "readFile:fail"
							};
							if (my_object.fail) {
								my_object.fail(quick_res);
							}
							if (my_object.complete) {
								my_object.complete(quick_res);
							}
						};
					}
					return file.readText(quick_object)
				} else {
					var quick_object2 = {};
					if (my_object) {
						for (var my_object_key in my_object) {
							var my_object_value = my_object[my_object_key];
							switch (my_object_key) {
								case "success": // 快应用
								case "fail":
								case "complete":
									break;
								case "filePath":
									quick_object2.uri = my_object_value;
									break;
								case "encoding":
									break;
								default:
									quick_object2[my_object_key] = my_object_value;
									break;
							}
						};
						quick_object2.success = function (quick_res) {
							var my_res = {
								errMsg: "readArrayBuffer:ok",
							};
							if (my_object.success) {
								my_object.success(my_res);
							}
							if (my_object.complete) {
								my_object.complete(my_res);
							}
						};
						quick_object2.fail = function (quick_res) {
							quick_res = {
								errMsg: "readArrayBuffer:fail"
							};
							if (my_object.fail) {
								my_object.fail(quick_res);
							}
							if (my_object.complete) {
								my_object.complete(quick_res);
							}
						};
					}
					return file.readArrayBuffer(quick_object2)
				}
			},
			removeSavedFile: (my_object) => {
				var quick_object = {};
				if (my_object) {
					for (var my_object_key in my_object) {
						var my_object_value = my_object[my_object_key];
						switch (my_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "filePath":
								quick_object.uri = my_object_value;
								break;
							default:
								quick_object[my_object_key] = my_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var my_res = {
							errMsg: "removeSavedFile:ok",
						};
						if (my_object.success) {
							my_object.success(my_res);
						}
						if (my_object.complete) {
							my_object.complete(my_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "removeSavedFile:fail file not exist"
						};
						if (my_object.fail) {
							my_object.fail(quick_res);
						}
						if (my_object.complete) {
							my_object.complete(quick_res);
						}
					};
				}
				return file.delete(quick_object)
			},
			rename: (my_object) => {
				var quick_object = {};
				if (my_object) {
					for (var my_object_key in my_object) {
						var my_object_value = my_object[my_object_key];
						switch (my_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "oldPath":
								quick_object.srcUri = my_object_value;
								break;
							case "newPath":
								quick_object.dstUri = my_object_value;
								break;
							default:
								quick_object[my_object_key] = my_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var my_res = {
							errMsg: "rename:ok",
						};
						if (my_object.success) {
							my_object.success(my_res);
						}
						if (my_object.complete) {
							my_object.complete(my_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "rename:fail"
						};
						if (my_object.fail) {
							my_object.fail(quick_res);
						}
						if (my_object.complete) {
							my_object.complete(quick_res);
						}
					};
				}
				return file.move(quick_object)
			},
			rmdir: (my_object) => {
				var quick_object = {};
				if (my_object) {
					for (var my_object_key in my_object) {
						var my_object_value = my_object[my_object_key];
						switch (my_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "dirPath":
								quick_object.uri = my_object_value;
								break;
							default:
								quick_object[my_object_key] = my_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var my_res = {
							errMsg: "rmdir:ok",
						};
						if (my_object.success) {
							my_object.success(my_res);
						}
						if (my_object.complete) {
							my_object.complete(my_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "rmdir:fail"
						};
						if (my_object.fail) {
							my_object.fail(quick_res);
						}
						if (my_object.complete) {
							my_object.complete(quick_res);
						}
					};
				}
				return file.rmdir(quick_object)
			},
			saveFile: (my_object) => {
				console.log("暂不支持")
			},
			stat: (my_object) => {
				console.log("暂不支持")
			},
			unlink: (my_object) => {
				var quick_object = {};
				if (my_object) {
					for (var my_object_key in my_object) {
						var my_object_value = my_object[my_object_key];
						switch (my_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "filePath":
								quick_object.uri = my_object_value;
								break;
							default:
								quick_object[my_object_key] = my_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var my_res = {
							errMsg: "unlink:ok",
						};
						if (my_object.success) {
							my_object.success(my_res);
						}
						if (my_object.complete) {
							my_object.complete(my_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "unlink:fail"
						};
						if (my_object.fail) {
							my_object.fail(quick_res);
						}
						if (my_object.complete) {
							my_object.complete(quick_res);
						}
					};
				}
				return file.delete(quick_object)
			},
			unzip: (my_object) => {
				var quick_object = {};
				if (my_object) {
					for (var my_object_key in my_object) {
						var my_object_value = my_object[my_object_key];
						switch (my_object_key) {
							case "success": // 快应用
							case "fail":
							case "complete":
								break;
							case "zipFilePath":
								quick_object.srcUri = my_object_value;
								break;
							case "targetPath":
								quick_object.dstUri = my_object_value;
								break;
							default:
								quick_object[my_object_key] = my_object_value;
								break;
						}
					};
					quick_object.success = function (quick_res) {
						var my_res = {
							errMsg: "unzip:ok",
						};
						if (my_object.success) {
							my_object.success(my_res);
						}
						if (my_object.complete) {
							my_object.complete(my_res);
						}
					};
					quick_object.fail = function (quick_res) {
						quick_res = {
							errMsg: "unzip:fail"
						};
						if (my_object.fail) {
							my_object.fail(quick_res);
						}
						if (my_object.complete) {
							my_object.complete(quick_res);
						}
					};
				}
				return zip.decompress(quick_object)
			},
			writeFile: (my_object) => {
				if (typeof (my_object.data) == "string") {
					var quick_object = {};
					if (my_object) {
						for (var my_object_key in my_object) {
							var my_object_value = my_object[my_object_key];
							switch (my_object_key) {
								case "success": // 快应用
								case "fail":
								case "complete":
									break;
								case "filePath":
									quick_object.uri = my_object_value;
									break;
								case "data":
									quick_object.text = my_object_value;
									break;
								default:
									quick_object[my_object_key] = my_object_value;
									break;
							}
						};
						quick_object.success = function (quick_res) {
							var my_res = {
								errMsg: "writeFile:ok",
							};
							if (my_object.success) {
								my_object.success(my_res);
							}
							if (my_object.complete) {
								my_object.complete(my_res);
							}
						};
						quick_object.fail = function (quick_res) {
							quick_res = {
								errMsg: "writeFile:fail"
							};
							if (my_object.fail) {
								my_object.fail(quick_res);
							}
							if (my_object.complete) {
								my_object.complete(quick_res);
							}
						};
					}
					return file.writeText(quick_object)
				} else {
					var quick_object2 = {};
					if (my_object) {
						for (var my_object_key in my_object) {
							var my_object_value = my_object[my_object_key];
							switch (my_object_key) {
								case "success": // 快应用
								case "fail":
								case "complete":
									break;
								case "data":
									quick_object2.buffer = my_object_value;
									break;
								case "encoding":
									break;
								default:
									quick_object2[my_object_key] = my_object_value;
									break;
							}
						};
						quick_object2.success = function (quick_res) {
							var my_res = {
								errMsg: "writeFile:ok",
							};
							if (my_object.success) {
								my_object.success(my_res);
							}
							if (my_object.complete) {
								my_object.complete(my_res);
							}
						};
						quick_object2.fail = function (quick_res) {
							quick_res = {
								errMsg: "writeFile:fail"
							};
							if (my_object.fail) {
								my_object.fail(quick_res);
							}
							if (my_object.complete) {
								my_object.complete(quick_res);
							}
						};
					}
					return file.writeArrayBuffer(quick_object2)
				}
			}
		}
		return FileSystemManager;
	}
	////////////////my.chooseAlipayContact/////////////////////////
	static chooseAlipayContact(){
		return console.log("chooseAlipayContact暂不支持！")
	}
	///////////////////chooseContact////////////////////////
	static chooseContact(){
		return console.log("chooseContact暂不支持！")
	}
	////////////////choosePhoneContact/////////////////////////////
	static choosePhoneContact(my_object) {
		if (!my_object) {
			return
		}
		let my_success = my_object.success;
		let my_fail = my_object.fail;
		let my_complete = my_object.complete;
		my_object = null;
		////////////////////////////
		var quick_object = {};
		quick_object.success = function (quick_res) {
			var my_res = {
				errMsg: "getSavedFileInfo:ok",
			};
			for (var quick_res_key in quick_res) {
				var quick_res_value = quick_res[quick_res_key]
				switch (quick_res_key) {
					case "displayName":
						my_res.name = quick_res_value;
						break;
					case "number":
						my_res.mobile = quick_res_value;
						break;
					default:
						//my_res[quick_res_key] = quick_res_value;
						break;
				}
			}
			if (my_object.success) {
				my_object.success(my_res);
			}
			if (my_object.complete) {
				my_object.complete(my_res);
			}
		};
		quick_object.fail = function (quick_res) {
			quick_res = {
				errMsg: "getSavedFileInfo:fail"
			};
			if (my_object.fail) {
				my_object.fail(quick_res);
			}
			if (my_object.complete) {
				my_object.complete(quick_res);
			}
		};
		return contact.pick(quick_object)
	}
}
