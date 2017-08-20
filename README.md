# Mini Programs QRCode
Create QRCode by using canvas.

![demo](https://raw.githubusercontent.com/pwcong/SnapShot/master/mini_programs_qrcode/demo.png)

## Usage

```javascript

import QRCode from 'qrcode'

...

let context = wx.createCanvasContext('qrcode')

let qrcode = new QRCode(context, {
  width: 200,
  height: 200,
  colorDark: "#000000"
})

qrcode.makeCode('Hello World!')

}
```
