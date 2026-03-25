<script lang="ts">
  const {
    orientation = 'horizontal', // 'horizontal' or 'vertical'
    align = 'top',               // top/bottom for horizontal, left/right for vertical
    thickness = 2,
    color = 'black',
    zIndex = 0
  } = $props();
</script>

<div
  class="absolute"
  style="
    {orientation === 'horizontal' && align === 'top' ? 'top:0; left:0; width:100%; height:' + thickness + 'px;' : ''}
    {orientation === 'horizontal' && align === 'bottom' ? 'bottom:0; left:0; width:100%; height:' + thickness + 'px;' : ''}
    {orientation === 'vertical' && align === 'left' ? 'top:0; left:0; width:' + thickness + 'px; height:100%;' : ''}
    {orientation === 'vertical' && align === 'right' ? 'top:0; right:0; width:' + thickness + 'px; height:100%;' : ''}
    background-color: {color};
    z-index: {zIndex};
  "
></div>