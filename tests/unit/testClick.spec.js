import { mount } from "@vue/test-utils";
import TestClick from "@/components/TestClick.vue";
import { nextTick } from "vue";

describe("TestClick", () => {
  // beforeEachで処理をまとめる
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TestClick);
  });

  // DOMの更新が行われるのを待つためにasyn/awaitを使う
  it("click count", async () => {
    const btn = wrapper.get("button");
    await btn.trigger("click");
    expect(wrapper.text()).toContain("Count is: 1");
  });

  it("click count nextTick", async () => {
    const btn = wrapper.get("button");
    btn.trigger("click");
    // nextTickを使う方法もある
    await nextTick();
    expect(wrapper.text()).toContain("Count is: 1");
  });
});
