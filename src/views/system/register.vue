<template>
	<div>
		注册
	</div>
</template>
<script type="text/javascript">
	// import x from './test.js';
	import s from './test.js';
	import { f } from './test.js'
	export default {
		data(){
			return {

			}
		},
		mounted(){
			console.log('输出值');
			console.log(s.b);
			console.log(s.a);
			console.log('输出33333');
			console.log(f);
		}
	}
</script>
