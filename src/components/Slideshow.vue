<template>
	<textarea id="source"></textarea>
</template>

<script>
created: function() {
	this.parseMarkdown(sessionStorage.getItem('mdURL'))
},
data: {
},
methods: {
	parseMarkdown: function(url) {
		let fileURL = url
		let request = new XMLHttpRequest()
		request.open('GET', fileURL, true);
		request.send()

		sessionStorage.setItem("presentation", fileURL)
		let slideshow = remark.create({
			sourceUrl: sessionStorage.getItem("presentation")
		})
	}
}
</script>