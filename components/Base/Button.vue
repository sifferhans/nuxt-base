<script lang="ts" setup>
import { Pressable } from "@ark-ui/vue";
import { cva } from "class-variance-authority";

withDefaults(
  defineProps<{
    intent?: "primary" | "secondary" | "tertiary";
    icon?: string;
    loading?: boolean;
    disabled?: boolean;
  }>(),
  {
    intent: "secondary",
    icon: undefined,
    loading: false,
    disabled: false,
  }
);

const emit = defineEmits<{
  (e: "press"): void;
  (e: "long-press"): void;
}>();

const rootClasses = cva(
  "rounded-lg pr-3 py-2 focus-visible:outline-2 outline-offset-2 relative",
  {
    variants: {
      intent: {
        primary:
          "bg-slate-900 text-white hover:bg-slate-700 data-[pressed]:bg-slate-800",
        secondary:
          "bg-slate-100 hover:bg-slate-200 data-[pressed]:bg-slate-300",
        tertiary:
          "bg-transparent hover:bg-slate-100 data-[pressed]:bg-slate-200",
      },
      hasIcon: {
        true: "pl-2.5",
        false: "pl-3",
      },
      loading: {
        true: "cursor-wait",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
      },
    },
  }
);

const innerClasses = cva(
  "flex gap-1.5 items-center transition-all ease duration-150",
  {
    variants: {
      loading: {
        true: "opacity-0 translate-y-1",
      },
    },
  }
);

function onLongPress() {
  emit("long-press");
}

function onPress() {
  emit("press");
}
</script>

<template>
  <Pressable
    :class="rootClasses({ intent, hasIcon: !!icon, loading, disabled })"
    :is-disabled="loading"
    prevent-focus-on-press
    @long-press="onLongPress"
    @press="onPress"
  >
    <span :class="innerClasses({ loading })">
      <Icon v-if="icon" :name="icon" class="opacity-50 text-lg" />
      <slot :loading="loading" :disabled="disabled" />
    </span>
    <Icon
      v-if="loading"
      name="svg-spinners:bars-rotate-fade"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  </Pressable>
</template>
