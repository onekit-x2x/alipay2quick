export default class websocket {
  constructor(quick_ws) {
    this.quick_ws = quick_ws;
  }
  // /////////////close///////////////
  close(my_object) {
    if (!my_object) {
      return;
    }
    let quick_object = {};
    let my_code = my_object.code;
    let my_reason = my_object.reason;
    let my_success = my_object.success;
    let my_fail = my_object.fail;
    let my_complete = my_object.complete;
    my_object = null;
    //////////////////
    if (my_code) {
      quick_object.code = my_code;
    }
    if (my_reason) {
      quick_object.reason = my_reason;
    }
    quick_object.success = function (quick_res) {
      var my_res = {
        errMsg: "close:ok",
      };
      if (my_success) {
        my_success(my_res);
      }
      if (my_complete) {
        my_complete(my_res);
      }
    };
    quick_object.fail = function (quick_res) {
      quick_res = {
        errMsg: "close:fail",
      }
      if (my_fail) {
        my_fail(quick_res);
      }
      if (my_complete) {
        my_complete(quick_res);
      }
    };
    this.quick_ws.close(quick_object);

  }
  // /////////////send///////////////
  send(my_object) {
    if (!my_object) {
      return;
    }
    let quick_object = {};
    let my_data = my_object.data;
    let my_success = my_object.success;
    let my_fail = my_object.fail;
    let my_complete = my_object.complete;
    my_object = null;
    ////////////////////
    if (my_data) {
      quick_object.data = my_data;
    }
    quick_object.success = function (quick_res) {
      var my_res = {
        errMsg: "send:ok",
      };
      if (my_success) {
        my_success(my_res);
      }
      if (my_complete) {
        my_complete(my_res);
      }
    };
    quick_object.fail = function (quick_res) {
      quick_res = {
        errMsg: "send:fail",
      }
      if (my_fail) {
        my_fail(quick_res);
      }
      if (my_complete) {
        my_complete(my_res);
      }
    };
    this.quick_ws.send(quick_object);
  }
// /////////////onOpen///////////////
// wx有 header profile  quick没有
  onOpen(my_callback) {
    this.quick_ws.onopen = my_callback;
  }
  // /////////////onMessage///////////////
  onMessage(my_callback) {
    this.quick_ws.onmessage = my_callback;
  }
// /////////////onClose///////////////
  onClose(my_callback) {
    this.quick_ws.onclose = function (res) {
      my_callback(res);
    };
  }
// /////////////onError///////////////
//  wx : errMsg    quick: data
  onError(my_callback) {
    this.quick_ws.onerror = function(res){
      my_callback(res);
    };
  }
  
}