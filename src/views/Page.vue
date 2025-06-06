<template>
  <div class="container py-5">
    <h1>Mini Style Guide</h1>
    <section class="mb-5">
      <h2>Colors</h2>
      <div class="d-flex flex-wrap gap-4">
        <div>
          <div style="width:60px;height:60px;background:#171717;border-radius:8px;"></div>
          <div class="mt-2"><code>$color-primary</code></div>
        </div>
        <div>
          <div style="width:60px;height:60px;background:#242424;border-radius:8px;"></div>
          <div class="mt-2"><code>$color-secondary</code></div>
        </div>
        <div>
          <div style="width:60px;height:60px;background:#737373;border-radius:8px;"></div>
          <div class="mt-2"><code>$muted</code></div>
        </div>
        <div>
          <div style="width:60px;height:60px;background:#0d6efd;border-radius:8px;"></div>
          <div class="mt-2"><code>$primary</code> (Bootstrap)</div>
        </div>
      </div>
    </section>

    <section class="mb-5">
      <h2>Typography</h2>
      <div>
        <div>
          <span style="font-family: 'Poppins', Arial, sans-serif; font-size: 2rem;">Poppins (Primary)</span>
          <div><code>$font-primary</code> / <code>$font-family-base</code></div>
        </div>
        <div>
          <span style="font-family: 'Merriweather', serif; font-size: 2rem;">Merriweather (Secondary)</span>
          <div><code>$font-secondary</code></div>
        </div>
      </div>
      <div class="mt-4">
        <h1>Heading 1 <small class="text_tag">h1</small></h1>
        <h2>Heading 2 <small class="text_tag">h2</small></h2>
        <h3>Heading 3 <small class="text_tag">h3</small></h3>
        <h5>Heading 5 <small class="text_tag">h5</small></h5>
        <p>Paragraph text using <code>$font-secondary</code> and <code>$p-size</code>.</p>
        <span class="text_tag">.text_tag (muted, 10px)</span>
      </div>
    </section>

    <section class="mb-5">
      <h2>Buttons</h2>
      <button class="btn btn-primary me-2">.btn-primary</button>
      <a href="#" class="btn-primary">Custom .btn-primary</a>
    </section>

    <section>
      <h2>Spacing</h2>
      <div>
        <code>$spacer</code>: 1rem (Bootstrap override)
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Page"
}
</script>
