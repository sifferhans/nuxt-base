<script
  setup
  lang="ts"
  generic="TOption extends { value: string; label: string }"
>
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectOption,
  SelectLabel,
  SelectPositioner,
} from "@ark-ui/vue";

withDefaults(
  defineProps<{
    options: TOption[];
    placeholder?: string;
    label?: string;
  }>(),
  {
    placeholder: "Select option",
  }
);
</script>

<template>
  <ClientOnly>
    <div class="relative">
      <Select v-slot="{ selectedOption }">
        <SelectLabel v-if="label">{{ label }}</SelectLabel>
        <SelectTrigger>
          <button
            class="px-3 py-2 rounded-lg text-start bg-gray-100 hover:bg-gray-200 flex justify-between items-center w-full"
          >
            {{ selectedOption?.label ?? placeholder }}
            <Icon name="heroicons:chevron-down-20-solid" />
          </button>
        </SelectTrigger>
        <SelectPositioner class="w-full">
          <SelectContent
            class="p-1 rounded-lg border border-gray-300 bg-white m-0 w-full"
          >
            <SelectOption
              v-for="option in options"
              :key="option.value"
              :value="option.value"
              :label="option.label"
              class="px-3 py-1 rounded-md data-[focus]:bg-gray-100 data-[selected]:bg-gray-100 list-none"
            />
          </SelectContent>
        </SelectPositioner>
      </Select>
    </div>
  </ClientOnly>
</template>
