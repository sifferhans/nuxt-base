<template>
  <div class="prose mx-auto">
    <h1>@sigveh/nuxt-base</h1>

    <section id="button">
      <h2>Buttons</h2>
      <div class="flex flex-col gap-3">
        <div class="flex gap-3">
          <Button intent="tertiary">Tertiary button</Button>
          <Button intent="secondary">Secondary button</Button>
          <Button intent="primary">Primary button</Button>
        </div>

        <div class="flex gap-3">
          <Button intent="tertiary" loading>Tertiary button</Button>
          <Button intent="secondary" loading>Secondary button</Button>
          <Button intent="primary" loading>Primary button</Button>
        </div>

        <div class="flex gap-3">
          <Button intent="tertiary" disabled>Tertiary button</Button>
          <Button intent="secondary" disabled>Secondary button</Button>
          <Button intent="primary" disabled>Primary button</Button>
        </div>
      </div>
    </section>

    <section id="select">
      <h2>Select</h2>
      <div class="flex flex-col gap-3">
        <Select
          :options="[
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' },
            { label: 'Svelte', value: 'svelte' },
            { label: 'Qwik', value: 'qwik' },
            { label: 'Solid', value: 'solid' },
          ]"
        />
      </div>
    </section>
  </div>
</template>
