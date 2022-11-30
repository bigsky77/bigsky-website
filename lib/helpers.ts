export const formatAddress = (address: any) => {
  if (address) {
    const add1 = address.substring(0, 4);
    const add2 = address.substring(address.length - 4);
    const finalAddress = `${add1}...${add2}`;
    return finalAddress;
  }
};

export const rankPlayers = (players) => {
  let playerArr = [];
    for(let i = 0; i < players.length; i++){
      let address = players[i].args.playerAddress;
      playerArr.push(address);
    }
  
  let playerList = removeDuplicates(playerArr);
  console.log('player list', playerList)
  
  let allPlayersSorted = sortResults(players, playerList);
   
  console.log('result', allPlayersSorted)
  return allPlayersSorted
   // sorted array
}

function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
}

function sortResults(players, playerList) {
 
  var allPlayersSorted = [];

  for(let i = 0; i < playerList.length; i++){
    var newArray = players.filter(function(el){
      return el.args.playerAddress == playerList[i]
    })
    var highScore = newArray.reduce(function(prev, current){
      return(prev.y > current.y) ? prev : current
    })
    allPlayersSorted.push(highScore);
  }

  console.log('new players array', newArray );
  console.log('highscore', highScore);
  console.log('all high scores', allPlayersSorted);
  
  return allPlayersSorted.reverse();
}



