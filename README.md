# BuildInfo Extension

This is a very early preview of a browser extension that adds some fun new features to the CircleCI experience. Built with React/Redux.

#### Development - Chrome

##### Dependencies
Requires `node` and `yarn` installed.

##### Setup
- clone the repo
- install everything

  `cd buildinfo-extension && yarn install`
- build the unpacked extension, or use development watcher

  `yarn run webpack`

  `yarn run watch`

- [load the unpacked extension in chrome](https://developer.chrome.com/extensions/getstarted#unpacked)

- give yourself a pat on the back. Then extension should be running when you visit a CircleCI domain

##### Extra credit

When you make any changes to the code while using `yarn run watch` the unpacked extension will be rebuilt automatically. This does not reload it in the browser unfortunately. On the [extensions page](chrome://extensions) you have to click `reload` on the extension, and then refresh the browser. Lame right? To ease that pain a bit you can install [this other chrome extension](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid?utm_source=chrome-app-launcher-info-dialog) that will reload unpacked extensions when you click it. So at least you don't have to navigate to the extensions page. Make a code change, click the extension reloader, refresh the page, view your changes.
