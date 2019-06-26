<template>
	<div class="my-couch">
		<form v-if="!submitted">
			<div class="couch-info">
				<h2>My Couch:</h2>
				<label>容纳人数：</label>
				<input type="text" v-model="mycouch.forpeo" required />
				<label>沙发状态：</label>
				<select v-model="mycouch.status">
					<option v-for="c in cstatus">{{c}}</option>
				</select>
			</div>

			<ul>
				<li v-if="mycouch.applyers == null">你的沙发还没有申请者~</li>
				<li v-else v-for="applyer in mycouch.applyers">
					<span>申请者：{{applyer.aname}}</span>
					<span>申请时间：{{applyer.useday}} day</span>
					<select v-model="applyer.pass" >
						<option v-for="p in pass">{{p}}</option>
					</select>
				</li>
			</ul>				
      		<button v-on:click.prevent="post">保存更改</button>		
		</form>
		<h3 v-if="submitted">保存成功！</h3>
	</div>
</template>
<script>
	export default{
		name:"edit-couch",		
		data(){
			return {
				mycouch:{},
				id: 0,
				pass:['通过','未通过'],
				cstatus:['可用','不可用'],
				submitted:false
			}
		},
		methods:{
			post:function(){
		      this.$http.put('https://couchsurfing-24937.firebaseio.com/users/'+this.id+'/mycouch.json',this.mycouch).then(function(data){
		        console.log(data);
		        this.submitted = true;
		      })
			},
			fetchData(){
				this.$http.get("https://couchsurfing-24937.firebaseio.com/users/"+this.id+".json").then(function(data){
					return data.json();
				}).then(function(data){
					this.mycouch = data.mycouch;
				})
			}
		},
		created(){
			this.fetchData();
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
	.couch-info h2{
		margin-bottom: 10px;
	}
	.couch-info input{
		box-sizing: border-box;
		width: 30px;
		height: 20px;
		background: transparent;
		border: 1px solid #006688;
		text-align: center;
		margin-right: 10px;
		color: #006688;
	}
	select{
		box-sizing: border-box;
		width: 65px;
		height: 20px;
		background: transparent;
		border: 1px solid #006688;
		text-align: center;
		margin-right: 10px;
		color: #006688;
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
		margin-top: 40px;
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
	.my-couch button{
		color: #57494e;
		font-size: 16px;
		display: block;
		float: right;
		width: 100px;
		height: 40px;
		box-sizing: border-box;
		border: 2px dashed #57494e;
		text-align: center;
		margin-top: 40px;
		cursor: pointer;
		background: transparent;		
	}
</style>