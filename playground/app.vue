<template>
  <div class="prose mx-auto">
    <h1>@sigveh/nuxt-base</h1>

    <section id="button">
      <h2>Buttons</h2>
      <div class="flex flex-col gap-3">
        <div class="flex gap-3">
          <BaseButton intent="tertiary">Tertiary button</BaseButton>
          <BaseButton intent="secondary">Secondary button</BaseButton>
          <BaseButton intent="primary">Primary button</BaseButton>
        </div>

        <div class="flex gap-3">
          <BaseButton intent="tertiary" loading>Tertiary button</BaseButton>
          <BaseButton intent="secondary" loading>Secondary button</BaseButton>
          <BaseButton intent="primary" loading>Primary button</BaseButton>
        </div>

        <div class="flex gap-3">
          <BaseButton intent="tertiary" disabled>Tertiary button</BaseButton>
          <BaseButton intent="secondary" disabled>Secondary button</BaseButton>
          <BaseButton intent="primary" disabled>Primary button</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>
