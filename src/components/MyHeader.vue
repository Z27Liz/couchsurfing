<template>
	<div class="head">
		<router-link to="/" exact>Couchsurfing</router-link>
		<router-link to="/couch" exact>我的沙发</router-link>
		<router-link to="/apply" exact>我的申请</router-link>	
	</div>
</template>
<script>
	export default{
		name: "my-header",
	}
</script>

<style scoped>
	.head{
		width: 100%;
		height: 40px;
		background: #003366;
		font-size: 16px;
		padding: 10px;
		margin-bottom: 40px;
	}
	.head a{
		display: inline-block;
		text-decoration: none;
		margin: auto 5px;
		padding: 8px 5px;
		border-radius: 5px;
		color: #fff;
	}
	.router-link-active{
		background: rgba(255,255,255,0.6);
		color:#444;
	}
</style>