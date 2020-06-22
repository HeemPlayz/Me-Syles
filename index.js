function style(options) {

let styles = document.querySelectorAll(".img-center");

if(options.center) {
    options.center = "auto auto"
} 

styles.forEach(styling => {
     styling.style.margin = `${options.center}`;
})

}

module.exports.mestyles = mestyles
