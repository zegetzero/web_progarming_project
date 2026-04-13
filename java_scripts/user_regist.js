// Oliver |start //
let accounts =[]; // stores user accounts as array  //

accounts =JSON.parse(localStorage.getItem('accounts')) || []; // get accounts from local storage and parses into js object or if nothing is saved use empty array//

function signUp(){
    let username = prompt("Username: ")
    let password = prompt("Password:")

    accounts.push({username,password}); // adds the account to the array 
    localStorage.setItem('accounts',JSON.stringify(accounts)); // save account to local storage by converting the array into a string
    alert("Account created");
}

function login() {
    let username = prompt('Username?');  // prompts user for username and password//
    let password = prompt('Password?');  
    let found = null;
    for(let i=0; i<accounts.length; i++) {    // for loop iterates thru the array until it finds a match for the username and password//
    
        if(accounts[i].username === username && accounts[i].password == password){
            found= accounts[i];
            break;
        }
    }

    if (found) {
        alert('Welcome ' + username + '!');   // if a match is found send a welcome alert or an error alerrt//
    } else {
        alert('Wrong username or password');
    }
}

function set(build, price){
    localStorage.setItem('build', build);
    localStorage.setItem('price', price);
}




// Oliver | end // 
