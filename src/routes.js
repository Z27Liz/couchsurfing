import HomePage from './components/HomePage.vue'
import MyCouch from './components/MyCouch.vue'
import MyApply from './components/MyApply.vue'
import EditCouch from './components/EditCouch.vue'
export default[
	{path:'/',component:HomePage},
	{path:'/couch',component:MyCouch},
	{path:'/apply',component:MyApply},
	{path:'/edit/:id',component:EditCouch}
]