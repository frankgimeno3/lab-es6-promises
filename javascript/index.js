// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes is ready!</li>`;
          document.getElementById("mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));
 
// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    obtainInstruction('steak', 1)
    .then( (step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
      obtainInstruction('steak', 2)
      .then( (step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
        obtainInstruction('steak', 3)
        .then( (step3) => {
          document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
          obtainInstruction('steak', 4)
          .then( (step4) => {
            document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
            obtainInstruction('steak', 5)
            .then( (step5) => {
              document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
              obtainInstruction('steak', 6)
              .then( (step6) => {
                document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
                obtainInstruction('steak', 7)
                .then( (step7) => {
                  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;

                  document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
                  document.getElementById("steakImg").removeAttribute("hidden");
                  
                }) 
              }) 
            })
          })
        })
      })
    })
  })


// Iteration 3 using async/await
 
 
async function makeBroccoli() {
  let instruction1 = await obtainInstruction('broccoli', 0);
  document.querySelector("#broccoli").innerHTML += `<li>${instruction1}</li>`;

  let instruction2 = await obtainInstruction('broccoli', 1);
  document.querySelector("#broccoli").innerHTML += `<li>${instruction2}</li>`;

  let instruction3 = await obtainInstruction('broccoli', 2);
  document.querySelector("#broccoli").innerHTML += `<li>${instruction3}</li>`;

  let instruction4 = await obtainInstruction('broccoli', 3);
  document.querySelector("#broccoli").innerHTML += `<li>${instruction4}</li>`;

  let instruction5 = await obtainInstruction('broccoli', 4);
  document.querySelector("#broccoli").innerHTML += `<li>${instruction5}</li>`;

  let instruction6 = await obtainInstruction('broccoli', 5);
  document.querySelector("#broccoli").innerHTML += `<li>${instruction6}</li>`;

  let instruction7 = await obtainInstruction('broccoli', 6);
  document.querySelector("#broccoli").innerHTML += `<li>${instruction7}</li>`;
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
}
 
makeBroccoli();

// Bonus 1 - Promise all

// Bonus 2 - Promise all
async function makeSprouts() {
  let instruction1 = await obtainInstruction('brusselsSprouts', 0);
  let instruction2 = await obtainInstruction('brusselsSprouts', 1);
  let instruction3 = await obtainInstruction('brusselsSprouts', 2);
  let instruction4 = await obtainInstruction('brusselsSprouts', 3);
  let instruction5 = await obtainInstruction('brusselsSprouts', 4);
  let instruction6 = await obtainInstruction('brusselsSprouts', 5);
  let instruction7 = await obtainInstruction('brusselsSprouts', 6);
  let instruction8 = await obtainInstruction('brusselsSprouts', 7);
  Promise.all([instruction1, instruction2, instruction3, instruction4, instruction5, instruction6, instruction7, instruction8 ]).then (()=>{
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction1}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction2}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction3}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction4}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction5}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction6}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction7}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction8}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.getElementById("broccoliImg").removeAttribute("hidden");
  })
}
makeSprouts();