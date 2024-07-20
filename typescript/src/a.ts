function doSomething(keyPressed: Direction){
    console.log(`Key pressed: ${keyPressed}`);
}

enum Direction {
    Up = "1",
    Down = "Down",
    Left = "left",
    Right= "right"
}

doSomething(Direction.Up)
doSomething(Direction.Down)
doSomething(Direction.Left)
doSomething(Direction.Right)