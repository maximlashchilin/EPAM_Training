function time(f) { var timerId;
    return function (arguments) {
        var onComplete = function () {
            f.apply(this);
            timerId = null;
        }

        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(onComplete, 2000);
    };
}

function f() { alert('hi'); }
var timer = time(f);

document.getElementById('button').addEventListener('click', timer);