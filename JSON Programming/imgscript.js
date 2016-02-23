﻿window.addEventListener("load", function () {
    var items_container = document.getElementById("items_container");
    var thumbtimer, ti = 0, dir = "item_images/";
    var obj1 = { name: "Roadrunner", pics: ["roadrunner1.png", "roadrunner2.png", "roadrunner3.png", "roadrunner4.png", "roadrunner5.png", "roadrunner6.png"], price: "10.33" };
    var obj2 = { name: "Circle", pics: ["cir1.png", "cir2.png", "cir3.png"] };
    var obj3 = { name: "Square", pics: ["sq1.png", "sq2.png", "sq3.png"] };

    var ary = [obj1, obj2, obj3];
    for (var i = 0; i < ary.length; i++) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var span = document.createElement("span");
        div.className = "item";
        img.oi = i;
        img.src = dir + ary[i].pics[0];
        span.innerHTML = ary[i].name;
        items_container.appendChild(div);
        div.appendChild(img);
        div.appendChild(span);
        img.addEventListener("mouseover", function (event) {
            thumbtimer = setInterval(function () {
                ti++;
                if (ti == ary[event.target.oi].pics.length) {
                    ti = 0;
                }
                event.target.src = dir + ary[event.target.oi].pics[ti];
            }, 700);
        });
        img.addEventListener("mouseout", function (event) {
            clearInterval(thumbtimer);
            ti = 0;
            event.target.src = dir + ary[event.target.oi].pics[ti];
        });
    }

});