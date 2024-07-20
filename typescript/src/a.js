"use strict";
function doSomething(keyPressed) {
    console.log(`Key pressed: ${keyPressed}`);
}
var Direction;
(function (Direction) {
    Direction["Up"] = "1";
    Direction["Down"] = "Down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
doSomething(Direction.Up);
doSomething(Direction.Down);
doSomething(Direction.Left);
doSomething(Direction.Right);
