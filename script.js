// Your JS goes here

function sq(){
    let square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.paddingBottom = '11.1%'
    square.style.float = 'left';
    square.style.position = "relative";
    return square;
    

}


function buildCheckerBoard(){
    for(let i = 0; i <= 8; i++){
        for(let j = 0; j <= 8; j++ ){
            let blkSq = sq();
            blkSq.style.backgroundColor = 'black';
            if ((i + j) % 2 == 0){
                document.body.append(blkSq);
            } else {
                let redSq = sq();
                redSq.style.backgroundColor = 'red';
                document.body.append(redSq);
            }
        }
    }
    // document.body.appendChild(redSq)
    // document.body.append(blkSq); 
}
    



// for(let x = 0; x < 8; x ++){
//     buildCheckerBoard()

// }
buildCheckerBoard()

// for(let i = 0; i <= 8; i++){
//     for(let j = 0; j <= 8; j++ ){
//         if ((i + j) % 2 ==0){
//             document.body.append(blkSq);
//         } else {
//             document.body.append(redSq);
//         }
//     }
// }


