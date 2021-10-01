import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "../redux/reducers/gioHangReducer";
import { baiTapGameXucXacReducer } from "./reducers/baiTapGameXucXacReducer";
import { baiTapQuanLyNguoiDungReducer } from "./reducers/baiTapQuanLyNguoiDungReducer";
//state trong redux là reducer
const rootReducer = combineReducers({
  //Các state ứng dụng sẽ được lưu tại đây
  gioHangReducer,
  baiTapGameXucXacReducer,
  baiTapQuanLyNguoiDungReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
