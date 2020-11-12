// jsx html+js

const listNames = ["Alex", "Tommy", "Jon", "Pilar"];

function render(arr) {
  let jsx = `
    <ul >
     ${arr.map((name) => `<li>${name}</li>`).join("")}
    </ul>
    `;

  return jsx;
}

console.log("render ==> ", render(listNames));
/**
   <ul>
     <li>Alex</li>
     <li>Tommy</li>
     <li>Jon</li>
    </ul>
 */
