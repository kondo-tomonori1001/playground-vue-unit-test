import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

test("App Component", function () {
  const wrapper = mount(HelloWorld, {
    propsData: {
      msg: "World",
    },
  });
  expect(wrapper.text()).toBe("Hello World");
  expect(wrapper.text()).toContain("World");
  expect(wrapper.text()).toMatch("World");
});
