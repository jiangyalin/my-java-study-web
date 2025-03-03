// var layer;
// layui.use(["layer"], function() {
//     layer = layui.layer;
// });
console.log(localStorage.getItem('Token'))
const setter = {
  tableName: 'mfmes',
  request: {
    tokenName: 'Access_token' // 自动携带 token 的字段名。可设置 false 不携带。
  },

  baseUrl: 'http://192.168.11.149:7046'
}

let view
let Class

// SHOW = "layui-show";
// LAY_BODY = "LAY_app_body";
// 构造器
Class = function (id) {
  this.id = id
  this.container = $('#' + (id || LAY_BODY))
}
view = function (id) {
  return new Class(id)
}

view.params = {} // 扩展用来存储弹框时父页面传递给子页面的数据用以初始化子页面

// Ajax请求
function ajaxReq (options) {
  const that = this
  const success = options.success
  const error = options.error
  const request = setter.request
  const response = {
    statusName: 'code', // 数据状态的字段名称
    statusCode: {
      ok: 0, // 数据状态一切正常的状态码
      logout: 1001, // 登录状态失效的状态码
      info: 200,
      warn: 300,
      empty: 204
    },
    msgName: 'msg', // 状态信息的字段名称
    dataName: 'data' // 数据详情的字段名称
  }

  options.data = options.data || {}
  options.headers = options.headers || {}

  if (request.tokenName) {
    // var sendData =
    //   typeof options.data === "string"
    //     ? JSON.parse(options.data)
    //     : options.data;

    // //自动给参数传入默认 token
    // options.data[request.tokenName] =
    //   request.tokenName in sendData
    //     ? options.data[request.tokenName]
    //     : layui.data(setter.tableName)[request.tokenName] || "";

    // 自动给 Request Headers 传入 token
    options.headers[setter.request.tokenName] =
            setter.request.tokenName in options.headers
              ? options.headers[setter.request.tokenName]
              : JSON.parse(localStorage.getItem(setter.tableName))
                ? JSON.parse(localStorage.getItem(setter.tableName)).access_token
                : '' || ''
  }

  if (options.type === 'post') {
    options.headers['Content-Type'] = 'application/json'
  }

  delete options.success
  delete options.error
  // debugger;
  return $.ajax(
    $.extend({
      type: options.type || 'get',
      dataType: 'json',
      success: function (res) {
        const statusCode = response.statusCode

        // 只有 response 的 code 一切正常才执行 done
        if (res[response.statusName] == statusCode.ok) {
          typeof options.done === 'function' && options.done(res)
        }

        // 登录状态失效，清除本地 access_token，并强制跳转到登入页
        else if (res[response.statusName] == statusCode.logout) {
          // view.exit();
        } else if (
          res[response.statusName] == statusCode.info ||
                        res[response.statusName] == statusCode.empty ||
                        res[response.statusName] == statusCode.warn
        ) {
          layer.open({
            title: '温馨提示',
            content: res.msg,
            offset: '15px',
            maxWidth: 320,
            anim: 6,
            btn: null,
            icon: 0,
            time: 3000
          })
        }
        // 其它异常
        else {
          const error = [
            '<cite>Error：</cite> ' +
                            (res[response.msgName] || '返回状态码异常')
            //   debug(),
          ].join('')
          layer.open({
            title: '温馨提示',
            content: error,
            offset: '15px',
            maxWidth: 320,
            anim: 6,
            btn: null,
            icon: 5,
            time: 3000
          })
        }

        // 只要 http 状态码正常，无论 response 的 code 是否正常都执行 success
        typeof success === 'function' && success(res)
      },
      error: function (e, code) {
        if (e.status === 401) {
          location.hash = '/user/login'
        } else {
          const error = [
            '请求异常，请重试<br><cite>错误信息：</cite>' +
                            e.status +
                            '|' +
                            e.statusText
                            //   debug(),
          ].join('')
          // view.error(error);

          layer.open({
            title: '温馨提示',
            content: error,
            offset: '15px',
            maxWidth: 320,
            anim: 6,
            btn: null,
            icon: 5,
            time: 3000
          })

          typeof error === 'function' && error(res)
        }
      }
    },
    options
    )
  )
}

export { ajaxReq, setter }
