var picture = require('cat-picture')
var image = require('lightning-image-poly')

//var remote = require('electron').remote
const { remote } = require('electron');
var fs = require('fs')

var src = picture.src
picture.remove()

var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})


function save () {
    remote.getCurrentWebContents().printToPDF({portrait: true})
        .then( data => {
            fs.writeFile('annotation.pdf', data, function (err) {
                if (err) {
                    alert('error generating pdf! ' + err.message) ;
                } else {
                    alert('pdf saved!') ;
                }
            })
        })
        .catch ( err => {
            console.log('test');
        })
}

window.addEventListener('keydown', function (e) {
      if (e.keyCode == 80) save()
  })
