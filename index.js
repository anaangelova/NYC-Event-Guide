// START CLOCK SCRIPT

Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};

function updateClock() {
    var now = new Date();
    var sec = now.getSeconds(),
        min = now.getMinutes(),
        hou = now.getHours()-6,
        mo = now.getMonth(),
        dy = now.getDate(),
        yr = now.getFullYear();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var ampm = hou >= 12 ? 'PM' : 'AM';
    var tags = ["mon", "d", "y", "h", "m", "s","ampm"],
        corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2),ampm];
    for (var i = 0; i < tags.length; i++)
        document.getElementById(tags[i]).firstChild.nodeValue = corr[i];

}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}

// END CLOCK SCRIPT


jQuery(document).ready(function ($){
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 600) {
            $('.columns').removeClass('col-6').addClass('col-12');
            $('.weather').addClass('mt-4');
        } else if (ww >= 601) {
            $('.columns').removeClass('col-12').addClass('col-6');
            $('.weather').removeClass('mt-4');
        }
    };
    $(window).resize(function(){
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});