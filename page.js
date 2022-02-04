var name='my name is taha kourani'
console.log(name)
var x='let my names new names'
console.log(name+x)
(()=>{
    name=this.name
    password=this.password
    email=this.email
    return `your email is ${this.email},your password is ${this.password}`
})
let mynames = new names("my naMES IS TAHA KOUREANI")
console.log(names)
names=["mynames is taha kourani and iam programmer","my names is taha","taha","progarmmer"]
console.log(names)
(()=>{
    console.log("my names is taha and i amprogarmmer")
    return`your name is${this.name}`

})
(()=>{
    console.error(error)
})
class user{
    constructor(name,email){
        first=this.name
        email=this.email
        password=this.password
    }
}
let constructor = new constructor("taha kourani","tahakourani88@gmail.com","tahakourani2003")
console.log(user.name)
console.log(user.email)
console.log(this.password)
name=['my name is taha kourani and iam programmer so iwant to make some programming langyages']
console.log(name)
let array=new Array('my name is taha kourani and my model role is elon musk')
(()=>{
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    yield 6
    yield 7
    yield 8
 country='i live in lbanon my professional dream is working to facebok'
 age=18
 weight=78
 name='my name is taha kourani and im programmer'
 console.log(country)
 console.log(age)
 console.log(weight)
 console.log(name)
 for(i in range==888){
     console.log(taha.repeat(40))
 }
})
let Array1 = new Array1("my name is taha kourane and iamprogrammer so want to make some programming languages")
console.log(Array1)
app.get("/details", function (req, res) {
	var name = req.query.name;
	console.log(name);

	Scopus.find({ name: name },
		{ '_id': 0, 'authorId': 1 },
		function (err, result) {
			if (err) { }
			else {
				var searchResult = result[0]["authorId"];
				console.log(searchResult);
				var options = {
					url: "https://api.elsevier.com/content/author/author_id/"
						+ searchResult + "?apiKey",
					headers: { 'Accept': 'application/json' }
				};
				request(options, function (error, response, body) {
					if (error) {

						// Print the error if one occurred
						console.error('error in Authors :', error);

						// Print the response status code if a response was received
						console.log('statusCode:', response && response.statusCode);
						res.send("error")
					}
					else if (!error) {
						var jsonObj = JSON.parse(body);
						if (jsonObj['author-retrieval-response'] == undefined) {
							res.send("No details");
						}
						else {
							var reqData = jsonObj['author-retrieval-response'][0];
							var authprofile = reqData["author-profile"]
							var names = authprofile["preferred-name"]["indexed-name"]
							console.log(names);
							var citation = reqData["coredata"]["citation-count"];
							var query = { authorId: searchResult };

							Scopus.findOneAndUpdate(query, {
								name: names,
								citationCount: citation
							}, function (err, doc, res) {
								if (err) {
									console.log("error");
								}
								else {
									console.log("success");
								}
							})
							res.render("details", { data: reqData });
						}
					}
				});
			}
		})
});
app.get("/details", function (req, res) {
	var name = req.query.name;
	console.log(name);

	Scopus.find({ name: name },
		{ '_id': 0, 'authorId': 1 },
		function sayhello(err, result) {
			if (err) { }
			else {
				var searchResult = result[0]["authorId"];
				console.log(searchResult);
				var options = {
					url: "https://api.elsevier.com/content/author/author_id/"
						+ searchResult + "?apiKey",
					headers: { 'Accept': 'application/json' }
				};
				request(options, function (error, response, body) {
					if (error) {

						// Print the error if one occurred
						console.error('error in Authors :', error);

						// Print the response status code if a response was received
						console.log('statusCode:', response && response.statusCode);
						res.send("error")
					}
					else if (!error) {
						var jsonObj = JSON.parse(body);
						if (jsonObj['author-retrieval-response'] == undefined) {
							res.send("No details");
						}
						else {
							var reqData = jsonObj['author-retrieval-response'][0];
							var authprofile = reqData["author-profile"]
							var names = authprofile["preferred-name"]["indexed-name"]
							console.log(names);
							var citation = reqData["coredata"]["citation-count"];
							var query = { authorId: searchResult };

							Scopus.findOneAndUpdate(query, {
								name: names,
								citationCount: citation
							}, function (err, doc, res) {
								if (err) {
									console.log("error");
								}
								else {
									console.log("success");
								}
							})
							res.render("details", { data: reqData });
						}
					}
				});
			}
		})
});
(()=>{
	name="tahakouranne"
	lastname='kourane'
	gmail="tahakourani88@gmail.com"
	password='tahatahatahataha'
	if(gmail=="tahakourani88@gmail.com",password=='tahatahataha'){
		resolve("warnings")
	}else{
		PromiseRejectionEvent(error)
	}
	console.log('hello dears you have error in this functions')
})
function name(){
	this.name='my names is tahakourane and iam programmer'
	console.log(name.name)
	console.log('NOW YOU HAVE ONE ERROS AND ONE WARNINGS')
	console.log(name.prototype)
}
window.alert('hello dears welome im your websites')
(()=>{
	define=undefined
	console.log(define)
	user.name=new names('welcome to our wensites')
	console.log(user.name)
	props:'test1'
	props3:'test3'
	props:'test2'
	console.log(props)
	console.log(props2)
	let array = new array("my names is taha kourane and iam prammer")
	console.log(user.array)
	let callbackhell = new callbackhell("i have 18 years old and i know 5 programmings languages")
	console.log(callbackhell)
})
resolve('warnings')
reject('error')
//one days i will chang this corupt world beacause i dont like it //console.log(())
console.log('ym name is tahakourane and iam programmer so iwant to make some programming languages')
