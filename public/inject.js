// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
	let div = document.createElement('div')
	Object.assign(div.style, {
		position: 'absolute',
		left: 0,
		bottom: 0,
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
		bottom: '0px',
		left: '70px',
		position: 'fixed',
		right: "50%",
		backgroundColor: 'green',
		color: 'white',
		width: '100px',
		height: '50px',
	})
	toggle.id = 'bi-toggle'
	toggle.innerHTML = 'BuildInfo'

	toggle.onclick = function(e) {
		let app = document.getElementById('app-root')
		app.style.visibility = app.style.visibility == 'hidden' ? 'visible' : 'hidden'
		app.style.overflow = app.style.overflow == 'hidden' ? 'visible' : 'hidden'

	}

	document.body.appendChild(toggle)
})();
