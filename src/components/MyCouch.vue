<template>
	<div class="my-couch">
		<div class="couch-info">
			<h2>My Couch:</h2>
			<span>容纳人数：{{mycouch.forpeo}}</span>
			<span>状态：{{mycouch.useable}}</span>
		</div>

		<ul>
			<li v-if="applyers == null">你的沙发还没有申请者~</li>
			<li v-else v-for="applyer in applyers">
				<span>申请者：{{applyer.aname}}</span>
				<span>申请时间：{{applyer.useday}} day</span>
				<span>申请情况：{{applyer.pass}}</span>
			</li>
		</ul>		
		<router-link :to="'/edit/' + id">去编辑 >></router-link >
	</div>
</template>
<script>
	export default{
		name:"my-couch",
		
		data(){
			return {
				mycouch:{},
				applyers:{},
				id : 0
			}
		},
		created(){
			this.$http.get("https://couchsurfing-24937.firebaseio.com/users/"+this.id+".json").then(function(data){
				return data.json();
			}).then(function(data){
				this.mycouch = data.mycouch;
				this.applyers = this.mycouch.applyers;
			})
		}
	}
</script>
<style scoped>
	.my-couch{
		max-width: 1000px;
		margin: 50px auto;
		background: rgba(255,255,240,0.7);
		padding: 20px;
	}
	.couch-info{
		display: inline-block;
		width: 100%;
		height: 80px;
		margin-bottom: 20px;
		color: #006688;
		border-bottom: 2px dotted #57494e;
	}
	.couch-info span{
		display: inline-block;
		width: 120px;
		margin: 10px 50px;
		font-size: 18px;
	}
	.my-couch a{
		text-decoration: none;
		color: #57494e;
		font-size: 18px;
		display: block;
		float: right;
		width: 180px;
		height: 50px;
		padding-top: 10px;
		box-sizing: border-box;
		border: 2px dashed #57494e;
		text-align: center;
		margin: 40px 0;
		cursor: pointer;
	}
	.my-couch ul{
		list-style-type: none;
		width: 100%;
	}
	.my-couch li{
		display: block;
		box-sizing: border-box;
		width: 80%;
		height: 40px;
		padding:20px;
	}
	.my-couch li span{
		display: inline-block;
		width: 150px;
		height:100%;
		padding-bottom: 5px;
		color: #006688;
		font-size: 16px;
		text-align: center;
	}
</style>