import { create } from "zustand";
import ExtensionData from "./data.json";

const useExtensionFilter = create((set, get) => ({
    // 原始数据
    allExtensions: ExtensionData,
    // 当前显示数组，默认全部数据
    displayed: ExtensionData,

    filterType: "all",

    showAll: () =>
        set({
            displayed: get().allExtensions,
            filterType: "all",
        }),
    showActive: () =>
        set({
            displayed: get().allExtensions.filter((item) => item.isActive === true),
            filterType: "active",
        }),
    showInactive: () =>
        set({
            displayed: get().allExtensions.filter((item) => item.isActive === false),
            filterType: "inactive",
        }),

    // 为用户添加切换的 onchange 事件，添加参数 "name" 以检查用户切换的是哪个按钮（按哪个修改哪个）
    toggleActive: (name) => {
        set((state) => {
            // 重新遍历原始数据，取反状态
            const updatedAll = state.allExtensions.map((item) =>
                item.name === name ? { ...item, isActive: !item.isActive } : item,
            );

            let newDisplayed = updatedAll;

            if (state.filterType === "active") {
                newDisplayed = updatedAll.filter((item) => item.isActive === true);
            } else if (state.filterType === "inactive") {
                newDisplayed = updatedAll.filter((item) => item.isActive === false);
            }

            return {
                allExtensions: updatedAll,
                displayed: newDisplayed,
            };
        });
    },
}));

export default useExtensionFilter;
