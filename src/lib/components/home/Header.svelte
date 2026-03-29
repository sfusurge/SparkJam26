<header class="header-bar z-100 w-full" aria-label="Site">
	<div class="header-bar__ios-glow" aria-hidden="true"></div>
	<div class="header-bar__glass" aria-hidden="true"></div>
	<div class="relative z-10 mx-auto flex h-[60px] w-full max-w-[1512px] items-center justify-between px-7">
		<div class="h-[31px] w-[12.5px] shrink-0">
			<img alt="Surge" class="block size-full max-w-none" src="/2D-Surge-Logo.svg" />
		</div>
		<a
			href="https://portal.sfusurge.com/apply"
			class="inline-flex shrink-0 items-center justify-center rounded-[10px] border-2 border-solid border-canvas-grey bg-boba-black px-[15px] py-[10px] font-sans text-[24px] font-extrabold leading-none tracking-[-0.72px] text-canvas-grey no-underline"
		>
			Apply Now
		</a>
	</div>
</header>

<style>
	.header-bar {
		position: sticky;
		top: 0;
		box-sizing: border-box;
		padding-top: env(safe-area-inset-top, 0px);
		padding-left: env(safe-area-inset-left);
		padding-right: env(safe-area-inset-right);
		overflow: visible;
	}

	.header-bar__glass {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: calc(100% + var(--header-feather, 2.75rem));
		pointer-events: none;
		background: linear-gradient(
			180deg,
			color-mix(in srgb, #0ea5e9 26%, transparent) 0%,
			color-mix(in srgb, #06b6d4 14%, transparent) 42%,
			color-mix(in srgb, #66cffd 8%, transparent) 100%
		);
		-webkit-backdrop-filter: blur(12px) saturate(1.45);
		backdrop-filter: blur(12px) saturate(1.45);
		-webkit-mask-image: linear-gradient(
			to bottom,
			#000 calc(4rem + env(safe-area-inset-top, 0px)),
			transparent
		);
		mask-image: linear-gradient(
			to bottom,
			#000 calc(4rem + env(safe-area-inset-top, 0px)),
			transparent
		);
	}

	.header-bar__ios-glow {
		position: fixed;
		top: -200px;
		left: 0;
		right: 0;
		width: 100%;
		height: 200px;
		pointer-events: none;
		background: linear-gradient(
			180deg,
			color-mix(in srgb, #38bdf8 18%, transparent) 0%,
			transparent 85%
		);
		-webkit-backdrop-filter: blur(8px) saturate(1.3);
		backdrop-filter: blur(8px) saturate(1.3);
	}

	@supports (animation-timeline: scroll()) {
		.header-bar__glass {
			animation: header-fade-in-blur 1ms ease-in forwards;
			animation-timeline: scroll();
			animation-range: 0 calc(5rem + env(safe-area-inset-top, 0px));
		}

		.header-bar__ios-glow {
			animation: header-fade-in-blur 1ms ease-in forwards;
			animation-timeline: scroll();
			animation-range: 0 calc(5rem + env(safe-area-inset-top, 0px));
		}
	}

	@keyframes header-fade-in-blur {
		0% {
			-webkit-backdrop-filter: blur(1px) saturate(1.2);
			backdrop-filter: blur(1px) saturate(1.2);
		}
		to {
			-webkit-backdrop-filter: blur(14px) saturate(1.55);
			backdrop-filter: blur(14px) saturate(1.55);
		}
	}
</style>
