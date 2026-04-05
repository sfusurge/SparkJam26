<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import type {
		CalendarBadge,
		CalendarPersonPhoto,
		CalendarPillVariant
	} from '$lib/data/calendar-events.js';

	type PersonPhotoHoverArgs = {
		bodyHtml: string;
		personPhotos: CalendarPersonPhoto[];
	};

	/** Wraps underlined names and shows a headshot above the name on hover. */
	function personPhotoHover(node: HTMLElement, args: PersonPhotoHoverArgs) {
		let personPhotos = args.personPhotos;

		const apply = () => {
			const map = new Map(
				personPhotos.map((p) => [
					p.name.trim(),
					{ photoSrc: p.photoSrc, url: p.url.trim() || '#' }
				])
			);
			for (const span of node.querySelectorAll<HTMLSpanElement>('span.underline')) {
				if (span.closest('[data-person-hover-root]')) continue;
				const name = span.textContent?.trim();
				if (!name) continue;
				const entry = map.get(name);
				if (!entry) continue;

				const link = document.createElement('a');
				link.href = entry.url;
				link.className = span.className;
				for (const attr of span.attributes) {
					if (attr.name === 'class') continue;
					link.setAttribute(attr.name, attr.value);
				}
				if (entry.url.startsWith('http://') || entry.url.startsWith('https://')) {
					link.target = '_blank';
					link.rel = 'noopener noreferrer';
				}
				while (span.firstChild) link.appendChild(span.firstChild);
				span.replaceWith(link);

				const wrapper = document.createElement('span');
				wrapper.setAttribute('data-person-hover-root', '');
				wrapper.className = 'relative inline-block select-none align-baseline';

				const preview = document.createElement('div');
				preview.setAttribute('aria-hidden', 'true');
				preview.className =
					'workshop-person-hover-preview pointer-events-none fixed z-[9999] h-[258px] w-[211px] overflow-hidden rounded-[7px] border-2 border-rams-orange opacity-0 transition-opacity duration-150';
				preview.style.setProperty('--person-photo-url', `url("${entry.photoSrc}")`);

				const gapPx = 12;
				const placeAtCursor = (e: MouseEvent) => {
					preview.style.left = `${e.clientX}px`;
					preview.style.top = `${e.clientY}px`;
					preview.style.transform = `translate(-50%, calc(-100% - ${gapPx}px))`;
				};

				const onMove = (e: MouseEvent) => placeAtCursor(e);
				const onEnter = (e: MouseEvent) => {
					placeAtCursor(e);
					preview.classList.remove('opacity-0');
					preview.classList.add('opacity-100');
				};
				const onLeave = () => {
					preview.classList.remove('opacity-100');
					preview.classList.add('opacity-0');
					wrapper.removeEventListener('mousemove', onMove);
				};

				wrapper.addEventListener('mouseenter', (e) => {
					wrapper.addEventListener('mousemove', onMove);
					onEnter(e as MouseEvent);
				});
				wrapper.addEventListener('mouseleave', onLeave);

				link.parentNode?.insertBefore(wrapper, link);
				wrapper.appendChild(preview);
				wrapper.appendChild(link);
			}
		};

		queueMicrotask(apply);

		return {
			update(next: PersonPhotoHoverArgs) {
				personPhotos = next.personPhotos;
				queueMicrotask(apply);
			}
		};
	}

	const pillVariantClass: Record<CalendarPillVariant, string> = {
		'strawberry-moon': 'bg-strawberry-moon',
		'sparky-yellow': 'bg-sparky-yellow',
		'touched-grass': 'bg-touched-grass'
	};

	const {
		month,
		day,
		title,
		bodyHtml,
		personPhotos,
		badges,
		registerUrl = '#'
	}: {
		month: string;
		day: string;
		title: string;
		bodyHtml: string;
		personPhotos: CalendarPersonPhoto[];
		badges: CalendarBadge[];
		registerUrl?: string;
	} = $props();

	const isExternal = $derived(registerUrl.startsWith('http'));
</script>

<article
	class="flex flex-col gap-8 border-b border-boba-black bg-canvas-grey px-8 py-10 last:border-b-0 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:px-16"
>
	<div
		class="relative flex size-[138px] shrink-0 flex-col overflow-hidden rounded-[9px] border-2 border-boba-black bg-canvas-grey"
	>
		<div
			class="flex h-[52px] shrink-0 items-center justify-center border-b-2 border-boba-black bg-sparky-yellow font-sans text-[22px] font-extrabold leading-none tracking-[-0.03em] text-boba-black"
		>
			{month}
		</div>
		<div
			class="flex min-h-0 flex-1 items-center justify-center font-sans text-[55px] font-extrabold leading-none text-boba-black"
		>
			{day}
		</div>
	</div>

	<div class="flex min-h-0 min-w-0 flex-1 flex-col justify-between gap-8 lg:max-w-[1071px]">
		<div class="flex max-w-[1062px] flex-col gap-6 text-boba-black">
			<h3 class="font-sans text-4xl font-extrabold leading-[1.11] tracking-[-0.02em]">
				{title}
			</h3>
			<div
				class="workshop-event-body font-sans text-2xl font-normal leading-[1.11] tracking-[-0.02em] [&_p]:m-0"
				use:personPhotoHover={{ bodyHtml, personPhotos }}
			>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -- static site copy from repo JSON -->
				{@html bodyHtml}
			</div>
		</div>

		<div
			class="flex w-full flex-col gap-6 xl:flex-row xl:flex-wrap xl:items-center xl:justify-between"
		>
			<div class="flex min-w-0 flex-wrap items-center gap-x-[30px] gap-y-3">
				{#each badges as badge, i (badge.kind + '-' + badge.text + '-' + i)}
					{#if badge.kind === 'speaker-session'}
						<div class="relative flex items-center justify-center">
							<img src="/workshop/talkstar.svg" alt="" class="h-11 w-auto" />
							<span
									class="absolute inset-0 flex items-center justify-center font-sans text-2xl font-semibold"
							>{badge.text}</span
							>
						</div>
					{:else}
						<span
							class="inline-flex min-h-[44px] min-w-0 items-center justify-center rounded-full border border-boba-black px-5 py-2.5 text-center font-sans text-2xl font-semibold leading-none tracking-[-0.03em] {pillVariantClass[badge.variant]}"
						>
							{badge.text}
						</span>
					{/if}
				{/each}
			</div>

			<Button
				variant="register-row"
				href={registerUrl}
				target={isExternal ? '_blank' : undefined}
				rel={isExternal ? 'noopener noreferrer' : undefined}
			>
				Register Now
			</Button>
		</div>
	</div>
</article>

<style>
	/* Photo + texture overlay — photo URL from --person-photo-url */
	:global(.workshop-person-hover-preview) {
		background-color: lightgray;
		background-image: var(--person-photo-url);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	:global(.workshop-person-hover-preview)::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background-image: url('/people/texture.png');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		opacity: 0.1;
		pointer-events: none;
	}
</style>
