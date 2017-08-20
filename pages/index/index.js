//index.js
//获取应用实例

import QRCode from '../../utils/qrcode'

var app = getApp()

Page({
  data: {
    text: '',
    canvasContext: null
  },

  handleTextInputChange(e) {
    this.setData({
      text: e.detail.value
    })
  },

  handleGenerateButtonClick(e) {

    var text = this.data.text
    var context = this.data.canvasContext;

    if (text && context) {

      var qrcode = new QRCode(context, {
        width: 200,
        height: 200
      })

      qrcode.makeCode(text)

    }
  },

  onLoad: function () {

    this.setData({
      canvasContext: wx.createCanvasContext('qrcode')
    })

    var context = this.data.canvasContext;

    var qrcode = new QRCode(context, {
      width: 200,
      height: 200
    })

    qrcode.makeCode("test")

  }
})