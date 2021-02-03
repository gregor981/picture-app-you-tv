// wdio.dev.config.js
var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
  capabilities: [{
    app: '../../../../../build/tvos/react/samples/ReactTemplateProject/youi/Debug-appletvos/pictureApp.app',
    automationName: 'YouiEngine',
    deviceName: 'Apple TV',
    fullReset: true,
    platformName: 'yitvos',
    udid: '<DeviceUDID>',
    youiEngineAppAddress: '<DeviceIP>',
    wdaLocalPort: '8100'
  }],

}, { clone: false });
