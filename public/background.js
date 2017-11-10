// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(tab => {
	// for the current tab, inject the "inject.js" file & execute it

	chrome.extension.getBackgroundPage().console.log('lol')
	console.log(tab)

	alert('lol')

	let cookies = chrome.cookies.getAll({domain:"circleci.com"},
		cookies => {
			console.log(cookies.map(e => `${e.name}=${e.value};`).join(' '))
			chrome.extension.getBackgroundPage().console.log(cookies.map(e => `${e.name}=${e.value};`).join(' '))
	})

	chrome.extension.getBackgroundPage().console.log(cookies)

	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});
