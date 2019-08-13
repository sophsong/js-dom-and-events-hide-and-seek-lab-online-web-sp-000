function getFirstSelector(selector){
  const selectorToGet = document.querySelector(selector)
  return selectorToGet
}

function nestedTarget(){
  const nested = document.querySelector("#nested .target")
 return nested
}
nestedTarget()

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll( '.ranked-list' )

  for ( let i = 0, l = rankedLists.length; i < l; i++ ) {
    let children = rankedLists[ i ].children

    for ( let j = 0, k = children.length; j < k; j++ ) {
      children[ j ].innerHTML = parseInt( children[ j ].innerHTML ) + n
    }
  }
}

function deepestChild(){
  let grandNode = document.getElementById("grand-node")
  let smallerNode = grandNode.children[0]

  while (smallerNode) {
    grandNode = smallerNode
    smallerNode = grandNode.children[0]
  }
  return grandNode
}
