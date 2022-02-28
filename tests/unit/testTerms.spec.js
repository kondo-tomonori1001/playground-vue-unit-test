import { mount } from "@vue/test-utils";
import TestTerms from "@/components/TestTerms.vue";

describe("TestTerms", () => {
  it("test terms profile", () => {
    const wrapper = mount(TestTerms);
    const profile = wrapper.get("#profile");
    console.log(profile.text());
  });
  // v-if=false でも findなら取得できる
  it("test terms admin", () => {
    const wrapper = mount(TestTerms);
    const admin = wrapper.find("#admin");
    expect(admin.exists()).toBe(false);
  });

  it("test terms turn", () => {
    const wrapper = mount(TestTerms, {
      data() {
        return {
          admin: true,
        };
      },
    });
    const admin = wrapper.get("#admin");
    console.log(admin.text());
  });
});
