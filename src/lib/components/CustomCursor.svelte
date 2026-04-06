<script lang="ts">
	import { onMount } from 'svelte';

	let x = $state(0);
	let y = $state(0);
	let currentCursor = $state('/cursors/cursor.png');
	let isHidden = $state(true);

	const hotpots: Record<string, { x: string; y: string }> = {
		'/cursors/cursor.png': { x: '3.1%', y: '19.1%' },
		'/cursors/select_cursor.png': { x: '12.5%', y: '25.7%' },
		'/cursors/text_highlight_cursor.png': { x: '50%', y: '1.2%' }
	};
	const sizes: Record<string, { width: number; height: number }> = {
		'/cursors/cursor.png': { width: 64, height: 64 },
		'/cursors/select_cursor.png': { width: 64, height: 64 },
		'/cursors/text_highlight_cursor.png': { width: 64, height: 45 }
	};

	let currentHotspot = $derived(hotpots[currentCursor]);
	let currentSize = $derived(sizes[currentCursor]);

	onMount(() => {
		const isMouseOverText = (el: HTMLElement, x: number, y: number) => {
			const range = document.createRange();
			const childNodes = el.childNodes;
			for (let i = 0; i < childNodes.length; i++) {
				const node = childNodes[i];
				if (node.nodeType === Node.TEXT_NODE) {
					range.selectNodeContents(node);
					const rects = range.getClientRects();
					for (let j = 0; j < rects.length; j++) {
						const rect = rects[j];
						if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
							return true;
						}
					}
				} else if (node instanceof HTMLElement) {
					if (isMouseOverText(node, x, y)) return true;
				}
			}
			return false;
		};

		const handleMouseMove = (e: MouseEvent) => {
			x = e.clientX;
			y = e.clientY;
			isHidden = false;

			const target = e.target as HTMLElement;
			if (!target) return;

			// Logic to switch between cursors
			const pointerElement = target.closest(
				'a, button, [role="button"], input[type="submit"], input[type="button"], input[type="reset"], label[for], summary, select'
			);
			const isPointer = pointerElement !== null;

			const textContainer = target.closest(
				'p, h1, h2, h3, h4, h5, h6, li, blockquote, figcaption, input[type="text"], input[type="email"], input[type="search"], input[type="password"], input[type="url"], input[type="tel"], textarea'
			);

			let isText = false;
			if (textContainer instanceof HTMLElement) {
				const tagName = textContainer.tagName.toLowerCase();
				const isInput =
					tagName === 'input' || tagName === 'textarea';
				if (isInput) {
					isText = true;
				} else {
					// Check if mouse is actually over the text within the container
					isText = isMouseOverText(textContainer, e.clientX, e.clientY);
				}
			}

			if (isPointer) {
				currentCursor = '/cursors/select_cursor.png';
			} else if (isText) {
				currentCursor = '/cursors/text_highlight_cursor.png';
			} else {
				currentCursor = '/cursors/cursor.png';
			}
		};

		const handleMouseOut = (e: MouseEvent) => {
			if (!e.relatedTarget) {
				isHidden = true;
			}
		};

		const handleMouseEnter = () => {
			isHidden = false;
		};

		window.addEventListener('mousemove', handleMouseMove, { passive: true });
		window.addEventListener('mouseout', handleMouseOut);
		window.addEventListener('mouseenter', handleMouseEnter);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseout', handleMouseOut);
			window.removeEventListener('mouseenter', handleMouseEnter);
		};
	});
</script>

{#if !isHidden}
	<div
		class="custom-cursor pointer-events-none fixed z-[99999]"
		style="left: {x}px; top: {y}px; width: {currentSize.width}px; height: {currentSize.height}px; transform: translate(-{currentHotspot.x}, -{currentHotspot.y});"
	>
		<img
			src={currentCursor}
			alt=""
			class="h-full w-full object-contain"
		/>
	</div>
{/if}

<style>
	:global(html),
	:global(body),
	:global(a),
	:global(button),
	:global(input),
	:global(textarea),
	:global(select),
	:global([role="button"]),
	:global(label) {
		cursor: none !important;
	}

	@media (hover: none) and (pointer: coarse) {
		.custom-cursor {
			display: none;
		}
		:global(html),
		:global(body),
		:global(a),
		:global(button),
		:global(input),
		:global(textarea),
		:global(select),
		:global([role="button"]),
		:global(label) {
			cursor: auto !important;
		}
	}
</style>
