import { mount } from "@vue/test-utils";
import Test2 from "./Test2.vue";

test("uses mounts", async () => {
  const wrapper = mount(Test2, {
    slots: {
      default: `
			<template v-slot="state">
				hey {{ state.items }}
			</template>
			`,
    },
  });
  expect(wrapper.html()).toMatchInlineSnapshot(`"<div>this is a slot</div>"`);
});
