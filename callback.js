
function wave(name) {
  console.log(name+' is wawing with his hand');
}

function sayHello(name, callback) {
  console.log(name+' says hello');
  callback(name);
}

sayHello('John', wave);

sayHello('Peter', function(name) { console.log(name+' wawes and jumps!'); });


setTimeout(function(){ console.log('Done'); }, 3000);

setTimeout( () => { console.log('done'); }, 3000 );

setTimeout( () => console.log('done'), 3000 );


let users = ['sam', 'john', 'peter'];

function addUser(username) {
  setTimeout( () => { users.push(username); 
  }, 200 );
}

function getUsers() {
  setTimeout( () => { console.log(users);
  }, 100 );
}


addUser('Jim');
getUsers(); 


function addUser2(username, callback) {
  setTimeout( () => { 
    users.push(username); 
    callback();
  }, 300 );
}

function getUsers2() {
  setTimeout( () => { console.log(users);
  }, 200 );
}

addUser2('Jim', getUsers2);