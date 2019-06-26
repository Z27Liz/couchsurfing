<template>
	<div class="home-page">
		<div class="showPic"></div>	
		<div class="couches">
			<input type="text" placeholder="搜索" v-model="search" />
			<ul>
				<li v-for="user in filterUsers">
					<img :src="user.selfImg" />
					<span>沙发主：{{user.username}}</span>
					<span>沙发地址：{{user.address.city}}</span>
					<span>沙发状态：{{user.mycouch.useable ? "可用":"不可用"}}</span>
				</li>
			</ul>
		</div>

	</div>
</template>
<script>
	export default{
		name:"home-page",
		data(){
			return {
				users:[
				  {
				    id: 1,
				    name: "Leanne Graham",
				    username: "Bret",
				    email: "Sincere@april.biz",
				    address: {
				      street: "Kulas Light",
				      city: "Gwenborough"
				    },
				    phone: "1-770-736-8031 x56442",
				    website: "hildegard.org",
				    pwd:"123456",
				    mycouch:{
				    	useable:true,
				    	forpeo:2
				    },
				    selfImg:require("../assets/1.jpg")
				  },
				  {
				    id: 2,
				    name: "Ervin Howell",
				    username: "Antonette",
				    email: "Shanna@melissa.tv",
				    address: {
				      street: "Victor Plains",
				      city: "Wisokyburgh"
				    },
				    phone: "010-692-6593 x09125",
				    website: "anastasia.net",
				    pwd:"123456",
				    selfImg:require("../assets/2.jpg"),
				    mycouch:{
				    	useable:true,
				    	forpeo:1
				    }				    
				  },
				  {
				    id: 3,
				    name: "Clementine Bauch",
				    username: "Samantha",
				    email: "Nathan@yesenia.net",
				    address: {
				      street: "Douglas Extension",
				      city: "McKenziehaven"
				    },
				    phone: "1-463-123-4447",
				    website: "ramiro.info",
				    pwd:"123456",
				    selfImg:require("../assets/3.jpg"),
				    mycouch:{
				    	useable:true,
				    	forpeo:3
				    } 			
				  },
				  {
				    id: 4,
				    name: "Patricia Lebsack",
				    username: "Karianne",
				    email: "Julianne.OConner@kory.org",
				    address: {
				      street: "Hoeger Mall",
				      city: "South Elvis"
				    },
				    phone: "493-170-9623 x156",
				    website: "kale.biz",
				    pwd:"123456",
				    selfImg:require("../assets/4.jpg"),
				    mycouch:{
				    	useable:true,
				    	forpeo:4
				    }				    
				  },
				  {
				    id: 5,
				    name: "Chelsey Dietrich",
				    username: "Kamren",
				    email: "Lucio_Hettinger@annie.ca",
				    address: {
				      "street": "Skiles Walks",
				      "city": "Roscoeview"
				    },
				    phone: "(254)954-1289",
				    website: "demarco.info",
				    pwd:"123456",
				    selfImg:require("../assets/5.jpg"),
				    mycouch:{
				    	useable:false,
				    	forpeo:2
				    }				    
				  },
				  {
				    id: 6,
				    name: "Mrs. Dennis Schulist",
				    username: "Leopoldo_Corkery",
				    email: "Karley_Dach@jasper.info",
				    address: {
				      "street": "Norberto Crossing",
				      "city": "South Christy"
				    },
				    phone: "1-477-935-8478 x6430",
				    website: "ola.org",
				    pwd:"123456",
				    selfImg:require("../assets/6.jpg"),
				    mycouch:{
				    	useable:true,
				    	forpeo:3
				    }				    				    
				  },
				  {
				    id: 7,
				    name: "Kurtis Weissnat",
				    username: "Elwyn.Skiles",
				    email: "Telly.Hoeger@billy.biz",
				    address: {
				      street: "Rex Trail",
				      city: "Howemouth"
				    },
				    phone: "210.067.6132",
				    website: "elvis.io",
				    pwd:"123456",
				    selfImg:require("../assets/7.jpg"),
				    mycouch:{
				    	useable:true,
				    	forpeo:2
				    }				    
				  },
				  {
				    id: 8,
				    name: "Nicholas Runolfsdottir V",
				    username: "Maxime_Nienow",
				    email: "Sherwood@rosamond.me",
				    address: {
				      street: "Ellsworth Summit",
				      city: "Aliyaview"
				    },
				    phone: "586.493.6943 x140",
				    website: "jacynthe.com",
				    pwd:"123456",
				    selfImg:require("../assets/8.jpg"),
				    mycouch:{
				    	useable:true,
				    	forpeo:1
				    }				    				   
				  },
				  {
				    id: 9,
				    name: "Glenna Reichert",
				    username: "Delphine",
				    email: "Chaim_McDermott@dana.io",
				    address: {
				      "street": "Dayna Park",
				      "city": "Bartholomebury"
				    },
				    phone: "(775)976-6794 x41206",
				    website: "conrad.com",
				    pwd:"145356",
				    selfImg:require("../assets/9.jpg"),
				    mycouch:{
				    	useable:true,
				    	forpeo:1
				    }	
				  }				
				],
				search:"",
			}
		},
		// created(){
		// 	this.$http.get("https://couchsurfing-24937.firebaseio.com/users.json").then(function(data){
		// 		console.log(data.json());
		// 		return data.json();
		// 	}).then(function(data){
		// 		var usersArray = [];
		// 		for(let key in data){
		// 			data[key].id = key;
		// 			usersArray.push(data[key]);
		// 			this.users = usersArray;
		// 		}
		// 	})
		// },
		computed:{
			filterUsers:function(){
				return this.users.filter((user)=>{
					return user.address.city.match(this.search);
				})
			}
		}
	}
</script>
<style>
	body{
		overflow: scroll;
		overflow-x: hidden;
	}
	.showPic{
		width: 1000px;
		height: 350px;
		margin: 0 auto;
		background: url("../assets/header.jpg") no-repeat;
		background-position: center;
	}
	.couches{
		max-width: 1000px;
		margin:20px auto;
	}
	.couches ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		list-style-type: none;
		padding: 0;
	}
	.couches li{
/*		flex-grow: 1;
		flex-basis: 200px;*/
		display: block;
		flex:0 0 30%;
		box-sizing: border-box;
		padding: 20px;
		border: 1px solid #94a499;
		border-radius: 10px;
		margin: 15px;
		cursor: pointer;
		background: rgba(255,255,255,0.7);
	}
	.couches li span{
		display: inline-block;
		width: 90%;
		padding: 5px;
		margin: 0 auto;
		text-indent: 6px;
	}
	.couches li img{
		display: block;
		margin:  0 auto;
		width: 90%;
		height: 150px;
	}
	.couches input{
		width:300px;
		height: 40px;
		box-sizing: border-box;
		margin: 20px 10px;
		background: rgba(255,255,255,0.7);
		border: 1px solid #003366; 
		border-radius: 10px;
		text-indent: 10px;
		font-size: 16px;
	}
</style>