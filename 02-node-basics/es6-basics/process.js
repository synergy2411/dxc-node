

// node filename.js

// node.runContents();

function shouldContinue(){
    const pendingOSTasks = [];
    const pendingIOTasks = [];
    const pendingTimerTasks = [];

    return pendingIOTasks.length || pendingOSTasks.length || pendingTimerTasks.length
}

while(shouldContinue()){            // one Tick

    // checks any pendingTasks available
    //  - returns result -> handle results
    //  - pause for a while ....
    //  - look for another pending tasks result

}


// node program terminates