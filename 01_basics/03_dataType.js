// ********************* Types of DATA Type *****************//

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "Nikeshvishdotcom";

let anothername = myYoutubename;
anothername = "technish";

console.log(myYoutubename);
console.log(anothername);
// Expected ans is [ Nikeshvisdotcom ] [ technish ]
// this was an primitive data type its gives copy value not reference

// Heap (NON-Primitive)

let userOne = {
  email: "nikeshOne12@gmail.com",
  upi: "98673277283@ybl",
};

let userTwo = userOne;
userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);
// Expected ans is [ hitesh@google.com ] [ hitesh@google.com ]
// its because the data type is non-primitive the value will be pass by reference it will not be a copy 

