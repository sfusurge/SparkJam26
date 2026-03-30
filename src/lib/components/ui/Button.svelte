<script lang="ts">
	import type { Snippet } from 'svelte';

	export type ButtonVariant =
		| 'header-cta'
		| 'hero-cta'
		| 'section-primary'
		| 'section-secondary'
		| 'register-row'
		| 'credits-team';

	const variantClass: Record<ButtonVariant, string> = {
		'header-cta':
			'inline-flex shrink-0 items-center justify-center rounded-[10px] border-2 border-solid border-canvas-grey bg-boba-black px-[15px] py-[10px] font-sans text-[24px] font-extrabold leading-none tracking-[-0.72px] text-canvas-grey no-underline transition-colors duration-200 hover:bg-citrouille hover:text-boba-black hover:border-boba-black',
		'hero-cta':
			'inline-flex items-center justify-center rounded-[12px] border-2 border-solid border-boba-black bg-canvas-grey px-[30px] py-4 font-sans text-[clamp(24px,4.5vw,40px)] font-extrabold leading-none tracking-[-0.03em] text-boba-black no-underline transition-colors duration-200 ease-out hover:bg-boba-black hover:border-canvas-grey hover:text-canvas-grey',
		'section-primary':
			'inline-flex w-fit items-center justify-center rounded-xl border-2 border-canvas-grey bg-boba-black px-8 py-2 text-center font-sans text-[40px] font-extrabold tracking-[-0.03em] text-canvas-grey no-underline transition-colors duration-200 hover:bg-citrouille hover:text-boba-black hover:border-boba-black',
		'section-secondary':
			'inline-flex w-fit items-center justify-center rounded-xl border-2 border-boba-black bg-canvas-grey px-8 py-2 text-center font-sans text-[40px] font-extrabold tracking-[-0.03em] text-boba-black transition-colors duration-200 hover:bg-boba-black hover:text-canvas-grey hover:border-canvas-grey',
		'register-row':
			'inline-flex h-[44px] w-full shrink-0 items-center justify-center gap-2.5 rounded-md border border-boba-black bg-boba-black px-5 font-sans text-2xl font-semibold leading-none tracking-[-0.03em] text-canvas-grey transition-all duration-200 hover:bg-citrouille hover:text-boba-black hover:border-boba-black hover:scale-[1.02] sm:w-[231px] no-underline',
		'credits-team':
			'inline-flex items-center justify-center rounded-2xl border border-boba-black bg-touched-grass px-6 py-4 text-center font-sans text-lg font-semibold tracking-[-0.02em] text-boba-black no-underline transition-all duration-200 hover:bg-touch-grass hover:text-white md:text-2xl'
	};

	const {
		variant,
		href,
		as,
		class: className = '',
		children,
		...rest
	}: {
		variant: ButtonVariant;
		href?: string;
		as?: 'a' | 'button' | 'span';
		class?: string;
		children: Snippet;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
	} = $props();

	const resolvedAs = $derived(
		as ?? (href ? 'a' : 'button') as 'a' | 'button' | 'span'
	);

	const combinedClass = $derived(`${variantClass[variant]} ${className}`.trim());
</script>

{#snippet content()}
	{@render children()}
	{#if variant === 'register-row'}
		<svg
			class="size-4 shrink-0 text-canvas-grey"
			viewBox="0 0 17 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				d="M4.5 11.5L12.5 3.5M12.5 3.5H6.5M12.5 3.5V9.5"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	{/if}
{/snippet}

{#if resolvedAs === 'a'}
	<a class={combinedClass} {href} {...rest}>{@render content()}</a>
{:else if resolvedAs === 'span'}
	<span class={combinedClass} {...rest}>{@render content()}</span>
{:else}
	<button type="button" class={combinedClass} {...rest}>{@render content()}</button>
{/if}
