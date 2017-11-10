// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
	let div = document.createElement('div')
	div.style.position = 'absolute'
	div.style.left = 0
	div.style.bottom = 0
	div.style.width = '100%'
	div.style.height = '100%'
	div.style.backgroundColor = 'white'
	div.id = 'app-root'
	div.style.visibility = 'hidden'
	div.style.overflow = 'hidden'

	let react = document.createElement('div')
	react.id = 'root'
	div.appendChild(react)

	document.body.appendChild(div)

	let toggle = document.createElement('div')
	toggle.style.bottom = 0
	toggle.style.left = '70px'
	toggle.style.position = 'fixed'
	toggle.style.right = "50%"
	toggle.style.backgroundColor = 'green'
	toggle.style.color = 'white'
	toggle.style.width = '100px'
	toggle.style.height = '50px'
	toggle.id = 'bi-toggle'
	toggle.innerHTML = 'BuildInfo'

	toggle.onclick = function(e) {
		let app = document.getElementById('app-root')
		app.style.visibility = app.style.visibility == 'hidden' ? 'visible' : 'hidden'
		app.style.overflow = app.style.overflow == 'hidden' ? 'visible' : 'hidden'

	}

	document.body.appendChild(toggle)
})();
