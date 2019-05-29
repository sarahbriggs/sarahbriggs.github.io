<template>
	<div id="app">
		<h1>Hello!</h1>
		<Landing/>
	</div>
</template>

<script>
import Landing from './components/Landing.vue'

export default {
	name: 'App'
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>