// Your JS goes here

let count = 0



function sq(){
    let square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.paddingBottom = '11.1%'
    square.style.float = 'left';
    return square;
    

}


function buildCheckerBoard(count){
    let redSq = sq();
    redSq.style.backgroundColor = 'red';
    let blkSq = sq();
    blkSq.style.backgroundColor = 'black';
    document.body.append(redSq)
    
    console.log(count)  
    document.body.append(blkSq); 
    count = count + 1
    console.log(count)
    }
    



while (count < 82){
    buildCheckerBoard(count)

}


