<template>
	<div>
		<h3>Select Presentation</h3>
		<ul>
			<li v-for="md in markdownURLs">
				<a v-on:click="openSlides(md[1])">{{ md[0] }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	created: function() {
		this.getPresentations()
	},
	data: {
		markdownURLs: []
	},
	methods: {
		getPresentations: function() {
			fetch('https://api.github.com/repos/sarahbriggs/sarahbriggs.github.io/contents/presentations')
			.then(response => 
				response.json()
				)
			.then(data => {
				data.forEach(element => {
					if(element['name'].slice(-3) == '.md') {
						let md = [element['name'], element['download_url']]
						this.markdownURLs.push([element['name'], element['download_url']])
					} 
				})
			})
			.catch(error => console.error(error))
		}, 
		openSlides: function(url) {
			sessionStorage.setItem('mdURL', url)
			this.$router.replace('/Slideshow')
		}
	}
}

</script>