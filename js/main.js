// Initialize Firebase
var config = {
    apiKey: "AyC6dSZYuDgfZRRsh_X8keSURj7RKBgHiZQ",
    authDomain: "fir-demo-b9281.firebaseapp.com",
    databaseURL: "https://fir-demo-b9281.firebaseio.com",
    storageBucket: "fir-demo-b9281.appspot.com",
    messagingSenderId: "650576969251"
};
firebase.initializeApp(config);

var database= firebase.database();
var ref = database.ref('scores');

function insert(num,name) {
    var data = {
        name:name,
        score: num
    }
    ref.push(data);
}

function fetch() {
    ref.on('value',gotData,errData)
}
function gotData(data) {

    // var scorelistings = document.getElementsByClassName('scorewlistings');
    // for(var i = 0;i<scorelistings.length;i++){
    //     console.log(scorelistings[i]);
    // }


// console.log(data.val())
    var scores = data.val()
    var keys = Object.keys(scores)

    for(var i = 0;i<keys.length;i++){
    var k = keys[i];
    var name = scores[k].name;
    var score = scores[k].score;
    var li = document.createElement('li');
    var textnode = document.createTextNode(name+":"+score);
    li.appendChild(textnode);

    document.getElementById('scorelist').append(li)
    }
}

function errData(err) {
console.log(err,"error")
}
