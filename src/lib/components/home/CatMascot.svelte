
<div class="cat-wrapper">
	<img src="/footer/newshapes/cat.png" alt="SparkJam cat mascot" class="cat" />
</div>

<style>
	.cat-wrapper {
		position: absolute;
		left: 53%;
		top: 54%;
		transform: translate(-50%, -50%);
    z-index: 10;
	}

	.cat {
		width: 800px;
		min-width: 650px;
		transform-origin: center;
		animation: wobble 2.5s ease-in-out infinite;
	}

	@keyframes wobble {
		0%   { transform: rotate(-6deg); }
		50%  { transform: rotate(6deg); }
		100% { transform: rotate(-6deg); }
	}
</style>