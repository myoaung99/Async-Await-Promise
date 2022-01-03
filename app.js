// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

// fakeRequestCallback(
//   "bookstore.com/1",
//   //Success call back
//   (data) => {
//     console.log("Success. Great");
//     console.log(data);
//     fakeRequestCallback(
//       "bookstore.com/2",
//       (data) => {
//         console.log("Success. Great");
//         console.log(data);
//         fakeRequestCallback(
//           "bookstore.com/3",
//           (data) => {
//             console.log("Success. Great");
//             console.log(data);
//           },
//           (err) => {
//             console.log("Oh no try again.", err);
//           }
//         );
//       },
//       (err) => {
//         S;
//         console.log("Failure. Oh no! Try again.", err);
//       }
//     );
//   },
//   //Failure call back
//   (err) => {
//     console.log("Failure. Oh no! Try again.", err);
//   }
// );

// fakeRequestCallback(
//   "books.com/page1",
//   function (response) {
//     console.log("IT WORKED!!!!");
//     console.log(response);
//     fakeRequestCallback(
//       "books.com/page2",
//       function (response) {
//         console.log("IT WORKED AGAIN!!!!");
//         console.log(response);
//         fakeRequestCallback(
//           "books.com/page3",
//           function (response) {
//             console.log("IT WORKED AGAIN (3rd req)!!!!");
//             console.log(response);
//           },
//           function (err) {
//             console.log("ERROR (3rd req)!!!", err);
//           }
//         );
//       },
//       function (err) {
//         console.log("ERROR (2nd req)!!!", err);
//       }
//     );
//   },
//   function (err) {
//     console.log("ERROR!!!", err);
//   }
// );

// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// fakeRequestPromise("bookstore.com/1")
//   .then(() => {
//     console.log("Ok Good. (page 1)");
//     return fakeRequestPromise("bookstore.com/2");
//   })
//   .then(() => {
//     console.log("Ok Good. (page 2)");
//     return fakeRequestPromise("bookstore.com/3");
//   })
//   .then(() => {
//     console.log("Ok Good. (page 3)");
//     return fakeRequestPromise("bookstore.com/3");
//   })
//   .catch((err) => {
//     console.log("Bad request.");
//   });

const changeColor = (color) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.background = color;
      resolve();
    }, 1000);
  });
};

async function printColor() {
  await changeColor("red");
  await changeColor("yellow");
  await changeColor("green");
  await changeColor("blue");
  await changeColor("pink");
  await changeColor("black");
  await changeColor("teal");
  return "All done";
}

printColor().then((response) => {
  console.log("Done");
  console.log(response);
});

// changeColor("red")
//   .then(() => {
//     return changeColor("yellow");
//   })
//   .then(() => {
//     return changeColor("green");
//   })
//   .then(() => {
//     return changeColor("blue");
//   })
//   .then(() => {
//     return changeColor("pink");
//   });

// request
//   .then(() => {
//     console.log("Success. (page 1)");
//     request
//       .then(() => {
//         console.log("Success. (page 2)");
//         request.then(() => {
//           console.log("Success. (page 3)");
//         });
//       })
//       .catch(() => {
//         console.log("Fail. (page 3)");
//       })
//       .catch(() => {
//         console.log("Fail. (page 2)");
//       });
//   })
//   .catch(() => {
//     console.log("Fail. (page 2)");
//   });

// fakeRequestPromise("book.com/page-1")
//   .then((data) => {
//     console.log("Yayy it works (page 1).");
//     console.log(data);
//     return fakeRequestPromise("book.com/page-2");
//   })
//   .then((data) => {
//     console.log("Yayy it works (page-2).");
//     console.log(data);
//     return fakeRequestPromise("book.com/page-3");
//   })
//   .then((data) => {
//     console.log("Yayy it works (page-3).");
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("Oh no Error.");
//     console.log(e);
//   });

// fakeRequestPromise("myomyintaung/page-1")
//   .then(() => {
//     console.log("It works (page 1).");
//     fakeRequestPromise("myomyintaung/page-2")
//       .then(() => {
//         console.log("It works (page 2).");
//         fakeRequestPromise("myomyintaung/page-3")
//           .then(() => {
//             console.log("It work (page 3");
//           })
//           .catch(() => {
//             console.log("Ohh Error (page 3)");
//           });
//       })
//       .catch(() => {
//         console.log("Ohh Error (page 2).");
//       });
//   })
//   .catch(() => {
//     console.log("Ohh Error (page 1).");
//   });

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })

// // THE CLEANEST OPTION WITH THEN/CATCH
// // RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })

async function shout() {
  throw new Error();
  return;
}

shout()
  .then(() => {
    console.log("Ahahahah");
    shout();
  })
  .catch(() => {
    console.log("eheheh");
  });
