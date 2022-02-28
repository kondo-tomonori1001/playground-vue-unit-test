import { mount } from "@vue/test-utils";
import TestComputed from "@/components/TestComputed.vue";

describe("TestComputed", () => {
  it("computed property upper case", () => {
    const wrapper = mount(TestComputed);
    expect(wrapper.text()).toBe("JOHN");
  });
});
