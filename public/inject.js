// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
	let div = document.createElement('div')
	Object.assign(div.style, {
		position: 'absolute',
		left: "0",
		bottom: "0",
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
		visibility: 'hidden',
		overflow: 'hidden',
	})

	div.id = 'app-root'

	let react = document.createElement('div')
	react.id = 'root'
	div.appendChild(react)

	document.body.appendChild(div)

	let toggle = document.createElement('div')
	Object.assign(toggle.style, {
		backgroundColor: 'green',
		color: 'white',
		position: 'absolute',
		pointerEvents: 'all',
		bottom: '-35px',
		height: '50px',
		width: '100px',
	})
	toggle.id = 'bi-toggle'
	toggle.innerHTML = 'BuildInfo'

	toggle.onclick = function(e) {
		let app = document.getElementById('app-root')
		app.style.visibility = app.style.visibility == 'hidden' ? 'visible' : 'hidden'
		app.style.overflow = app.style.overflow == 'hidden' ? 'visible' : 'hidden'
	}

	let toggleWrap = document.createElement('div')
	Object.assign(toggleWrap.style, {
		bottom: '0px',
		right: '17px',
		position: 'fixed',
		pointerEvents: 'none',
		height: '100px',
		width: '100px',
	})

	toggleWrap.appendChild(toggle)

	toggleWrap.onmouseover = function(e) {
		let toggle = document.getElementById('bi-toggle')
		toggle.style.bottom = '0px'
	}

	toggleWrap.onmouseout = function(e) {
		let toggle = document.getElementById('bi-toggle')
		toggle.style.bottom = '-35px'
	}

	document.body.appendChild(toggleWrap)
})();
