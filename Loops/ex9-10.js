// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]

//   for(let i = 0; i < posts.length; i++) {
//       if(posts[i].id == 2) {
//         posts.splice(i, 1)
//       }
//   }
  
//   console.log(posts)

  //ex10
  const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]

  for(let j=0; j<posts.length; j++) {
    if(posts[j].id == 2) {
      for(let i=0; i<posts[j].comments.length; i++) {
        if(posts[j].comments[i].id == 3) {
         posts[j].comments.splice(i, 1)
        }
      }
    }
  }
  console.log(posts)
