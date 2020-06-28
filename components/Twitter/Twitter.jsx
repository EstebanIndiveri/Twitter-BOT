const Twitterr =()=>{

const Twitter = require('twitter');
const cliente=new Twitter({
    consumer_key:'',
    consumer_secret:'',
    access_token_key:'',
    access_token_secret:''
});
cliente.post('statuses/update',{status:'El primer tweet del bot desde next'}).then(tweet=>{
console.log(tweet);
}).catch(error=>{
    console.log(error);
})
}
export default Twitterr;
