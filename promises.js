let users = ['sam', 'john', 'peter'];

const addUser = function(username) {
    return new Promise( (resolve, reject) => {
    setTimeout( () => { 
      users.push(username); 
      resolve();
    }, 300 );
  })
}

const getUsers = () => new Promise( (r) => { setTimeout( () => { r(users); }, 200 ); });

addUser('Jim').then(() => getUsers().then((users) => console.log(users))).then(main);

async function main() {
  await addUser('Tom');
  console.log('hello');
  const users = await getUsers();
  console.log(users);
}

console.log(main());

// IIFE: Immediately Invoked Function Expression
(async () => {
  const u = await getUsers();
  console.log(u);
})();

