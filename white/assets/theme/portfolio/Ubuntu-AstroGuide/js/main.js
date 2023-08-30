

var horoscopeArray = [
{
	sign: "Aries",
	personality: "Your gifts include courage and being independent.",
	image: "img/signPictures/Aries.jpg"
},
 {
	sign:"Taurus",
	personality: "You are easy going but will fight for what you want.",
	image: "img/signPictures/Taurus.jpg"
},
{
	sign:"Gemini",
	personality: "You have the gift of gab and know where you want to go in life.",
	image: "img/signPictures/Gemini.jpg"
},
{
	sign:"Cancer",
	personality: "Security and adventure are your top priorities.",
	image: "img/signPictures/Cancer.png"
},
{
	sign: "Leo",
	personality: "You have high self esteem and are very devoted.",
	image: "img/signPictures/Leo.png"
},
{
	sign: "Virgo",
	personality: "Self improvement and reflective thought are your strong suits.",
	image: "img/signPictures/Virgo.png"
},
{
	sign: "Libra",
	personality: "You are diplomatic and you can appreciate the finer things in life.",
	image: "img/signPictures/Libra.jpeg"
},
{
	sign:"Scorpio",
	personality: "Kindness and loyalty are among your best virtues.", 
	image: "img/signPictures/Scorpio.jpg"
},
{
	sign: "Sagittarius",
	personality: "You are vibrant and you always keep a positive outlook.",
	image: "img/signPictures/Sagittarius.jpg"
},
{
	sign: "Capricorn",
	personality: "You are ambitious and you have an active mind.",
	image: "img/signPictures/Capricorn.jpg"
},
{
	sign: "Aquarius",
	personality: "You take advantage of every opportunity that comes your way.",
	image: "img/signPictures/Aquarius.png"
},
{
	sign: "Pisces",
	personality: "You are deeply sensitive and also a dreamer.",
	image: "img/signPictures/Pisces.png"
}
];
console.log(horoscopeArray)
function allHoroscopes(){

var mySelect = document.getElementById("mySelection").value;

	for (i = 0; i<horoscopeArray.length; i++){
		console.log(horoscopeArray[i].sign, mySelect)
	if (mySelect==horoscopeArray[i].sign){
		console.log(true)
		document.getElementById("yourSign").innerText=horoscopeArray[i].sign;
		document.getElementById("personality").innerText=horoscopeArray[i].personality;
		document.getElementById("icon").src=horoscopeArray[i].image
		return
	}else if (mySelect!==horoscopeArray[i].sign){
		document.getElementById("yourSign").innerText=" Please Select Your Birthday";
		document.getElementById("personality").innerText="";
		document.getElementById("icon").src="img/astrology.jpg" 
	}
}

}
