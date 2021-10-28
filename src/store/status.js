import { createSlice } from "@reduxjs/toolkit";
// 对话框默认状态
const _defaultDialog = {
    active: false, // 是否显示对话框
    context: null, // 对话框内容
    close: false, // 是否显示对话框内关闭图标
    wrapClose: false // 是否显示对话框外关闭图标
}
const status = createSlice({
    name: "status",
    initialState: {
        // 对话框状态
        dialog: _defaultDialog,
    },
    reducers: {
        // 设置对话框状态
        setDialog: (state, action) => {
            state.dialog = {
                ..._defaultDialog,
                ...action.payload
            }
        },
        // 关闭对话框
        closeDialog: (state, action) => {
            state.dialog = _defaultDialog;
        }
    }
})
export const {
    setDialog,
    closeDialog
} = status.actions;
export default status;