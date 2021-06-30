import { mount } from "@vue/test-utils";
import Test from "./Test.vue";

test("uses mounts", async () => {
	const wrapper = mount(Test);
	expect(wrapper.html()).toMatchInlineSnapshot(
		`"<div><button title=\\"this is a button\\" class=\\"hello\\">click</button></div>"`
	);
});
