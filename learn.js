

function oddForLoop(start, end) {
    // document.querySelector(".result_table").appendChild(h3)
    // innerHTML = "</h3>your desire odd are: </h3>";
    for (let i = start; i <= end; ++i) {
        if (i % 2 != 0) {
            var node = document.createElement("LI");
            var textNode = document.createTextNode(i);
            node.appendChild(textNode);
            document.getElementById("result").appendChild(node);
            // document.querySelector('#resultli').appendChild(node).style.display = " inline-block";
        }
    }
}


// do while oddForLoop

function odd_DoWhileloop(start, end) {
    let i = start;
    do {
        if (i % 2 != 0) {
            var node = document.createElement("LI");
            var textNode = document.createTextNode(i);
            node.appendChild(textNode);
            document.getElementById("result").appendChild(node);
        }
        i = i + 1;
    }
    while (i <= end)
}

// while loop
function odd_Whileloop(start, end) {
    let i = start;
    while (i <= end) {
        if (i % 2 != 0) {
            var node = document.createElement("LI");
            var textNode = document.createTextNode(i);
            node.appendChild(textNode);
            document.getElementById("result").appendChild(node);
        }
        i = i + 1;
    }
}

// recursive function
function oddrFunction(start, end) {
    let i = start;
    if (i % 2 != 0) {
        var node = document.createElement("LI");
        var textNode = document.createTextNode(i);
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
    if (i <= end) {

        return oddrFunction(++i, end)
    }

}

// find even number 
// multiply_table(2, 1, 5);
// console.log('');

// multiply_table(3, 5 , 10);
// console.log('');

// multiply_table(4, 11, 20);
// console.log('');