const shoename=["Shoe01","Shoe02","Shoe03","Shoe04","Shoe05","Shoe06","Shoe07","Shoe08","Shoe09"];
const shoeprice=[2000,3000,1000,1500,6500,8900,4566,1111,2345];
var noofproduct = 0;
const shoes =[
	{
		image: "nike-shoe1.png",
		name: "Nike Airforce",
		price: 12350,
		star: 3.0,
		time: "4 Friday"
	},
	{
		image: "nike-shoe2.png",
		name: "Nike AirJordans",
		price: 25943,
		star: 2.0,
		time: "30 Monday"
	},
	{
		image: "nike-shoe3.png",
		name: "Nike AirMaxx",
		price: 7000,
		star: 4.0,
		time: "28 Tuesday"
	},
	{
		image: "nike-shoe4.png",
		name: "Nike JordansXPSG",
		price: 4500,
		star: 1.0,
		time: "15 Saturday"
	},
	{
		image: "nike-shoe5.png",
		name: "Nike AirForceBlack",
		price: 3000,
		star: 5.0,
		time: "25 Friday"
	},
    {
		image: "1.png",
		name: "Nike Airforce",
		price: 10000,
		star: 3.0,
		time: "4 Friday"
	},
	{
		image: "2.png",
		name: "Nike AirJordans",
		price: 9000,
		star: 2.0,
		time: "30 Monday"
	},
	{
		image: "3.png",
		name: "Nike AirMaxx",
		price: 12000,
		star: 4.0,
		time: "28 Tuesday"
	},
	{
		image: "3.png",
		name: "Nike JordansXPSG",
		price: 19000,
		star: 1.0,
		time: "25 Friday"
	},
	{
		image: "nike-shoe5.png",
		name: "Nike AirForceBlack",
		price: 34000,
		star: 5.0,
		time: "25 Friday"
	},
    {
		image: "1.png",
		name: "Nike Airforce",
		price: 25920,
		star: 3.0,
		time: "4 Friday"
	},
	{
		image: "nike-shoe2.png",
		name: "Nike AirJordans",
		price: 18782,
		star: 2.0,
		time: "30 Monday"
	},

];


$.each(shoes, function (i) {
    var templateString = `
	<div class="col-md-4">
		<div class="card mb-4 shadow-sm" >
			<img id="shoeimg" src="`+shoes[i].image+`" class="card-img-top" width="240px" height="150px">
			<div class="card-body">
			<div class="justify-content-between align-items-center">
				<hr>
				<div class="row">
					<div class="col"><h5 id="shoename" class="card-img-header">`+shoes[i].name+`</h5><br></div>
					<div class="col"><h6 id="shoestar">★`+shoes[i].star+`.0</h6></div>
				</div>
				<div class="row">
					<div class="col"><h5 id="shoeprice" class="card-img-sidebar">₹`+shoes[i].price+`.00</h5><br></div>
				</div>
				<div class="row">
					<div class="col"><h6 id="shoetime" class="card-img-footer text-muted">Delivery by: `+shoes[i].time+`</h6></div>
				</div>
			</div>
			</div>
		</div>
	</div>
	`;
    $('#repeat').append(templateString);
});


$("#pricelh").click(function(){
	shoes.sort((a, b) => {
		return b.price - a.price;
	});
	viewonly();
});
$("#nameaz").click(function(){
	shoes.sort((a, b) => {
		let fa = a.name.toLowerCase(),
			fb = b.name.toLowerCase();
	
		if (fa < fb) {
			return -1;
		}
		if (fa > fb) {
			return 1;
		}
		return 0;
	});
	viewonly();
});
$("#deltime").click(function(){
	shoes.sort((a, b) => {
		let fa = a.time.toLowerCase(),
			fb = b.time.toLowerCase();
	
		if (fa < fb) {
			return -1;
		}
		if (fa > fb) {
			return 1;
		}
		return 0;
	});
	viewonly();
});
$("#star51").click(function(){
	shoes.sort((a, b) => {
		return b.star - a.star;
	});
	viewonly();
});
function viewonly(){
	noofproduct = shoes.length;
	$('#repeat').empty();
	$("#totalproduct").text("Products "+noofproduct);
	$.each(shoes, function (i) {	
		templateString = `
		<div class="col-md-4">
			<div class="card mb-4 shadow-sm" >
				<img id="shoeimg" src="`+shoes[i].image+`" class="card-img-top" width="240px" height="150px">
				<div class="card-body">
				<div class="justify-content-between align-items-center">
					<hr>
					<div class="row">
						<div class="col"><h5 id="shoename" class="card-img-header">`+shoes[i].name+`</h5><br></div>
						<div class="col"><h6 id="shoestar">★`+shoes[i].star+`.0</h6></div>
					</div>
					<div class="row">
						<div class="col"><h5 id="shoeprice" class="card-img-sidebar">₹`+shoes[i].price+`.00</h5><br></div>
					</div>
					<div class="row">
						<div class="col"><h6 id="shoetime" class="card-img-footer text-muted">Delivery by: `+shoes[i].time+`</h6></div>
					</div>
				</div>
				</div>
			</div>
		</div>
			`;
		$('#repeat').append(templateString);
	});
}


var newstar=[];
$("#star5").click(function(){
	newstar=[];
	for(var i=0;i<shoes.length;i++){
		if (shoes[i].star==5) {
			newstar.push(shoes[i]);
		}
	}
	starviewonly();
});
$("#star4").click(function(){
	newstar=[]
	for(var i=0;i<shoes.length;i++){
		if (shoes[i].star==4) {
			newstar.push(shoes[i]);
		}
	}
	starviewonly();
});
$("#star3").click(function(){
	newstar=[]
	for(var i=0;i<shoes.length;i++){
		if (shoes[i].star==3) {
			newstar.push(shoes[i]);
		}
	}
	starviewonly();
});
$("#star2").click(function(){
	newstar=[];
	for(var i=0;i<shoes.length;i++){
		if (shoes[i].star==2) {
			newstar.push(shoes[i]);
		}
	}
	starviewonly();
});
$("#star1").click(function(){
	newstar=[];
	for(var i=0;i<shoes.length;i++){
		if (shoes[i].star==1) {
			newstar.push(shoes[i]);
		}
	}
	starviewonly();
});
function starviewonly(){
	noofproduct = newstar.length;
	$('#repeat').empty();
	$("#totalproduct").text("Products "+noofproduct);
	$.each(newstar, function (i) {	
		templateString = `
		<div class="col-md-4">
			<div class="card mb-4 shadow-sm" >
				<img id="shoeimg" src="`+newstar[i].image+`" class="card-img-top" width="240px" height="150px">
				<div class="card-body">
				<div class="justify-content-between align-items-center">
					<hr>
					<div class="row">
						<div class="col"><h5 id="shoename" class="card-img-header">`+newstar[i].name+`</h5><br></div>
						<div class="col"><h6 id="shoestar">★`+newstar[i].star+`.0</h6></div>
					</div>
					<div class="row">
						<div class="col"><h5 id="shoeprice" class="card-img-sidebar">₹`+newstar[i].price+`.00</h5><br></div>
					</div>
					<div class="row">
						<div class="col"><h6 id="shoetime" class="card-img-footer text-muted">Delivery by: `+newstar[i].time+`</h6></div>
					</div>
				</div>
				</div>
			</div>
		</div>
			`;
		$('#repeat').append(templateString);
	});
}