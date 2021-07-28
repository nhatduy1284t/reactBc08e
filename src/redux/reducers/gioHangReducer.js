// const gioHang = [{ maSP: 1, tenSP: "IPhone", giaBan: 1000, soLuong: 1, hinhAnh: "https://picsum.photos/200/200" }];
const gioHang=[]

export const gioHangReducer = (state = gioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      const spGH = { ...action.sanPhamClick, soLuong: 1 };
      //Kiểm tra sản phẩm đã có trong giỏ hàng chưa
      let gioHangCapNhat = state;

      let spGioHang = gioHangCapNhat.find((sp) => sp.maSP === spGH.maSP);
      if (spGioHang) {
        spGioHang.soLuong += 1;
      } else {
        gioHangCapNhat.push(spGH);
      }
      console.log("gioHangCapNhat", gioHangCapNhat);

      //immutable (Tính bất biến object phải trả về object mới, arr phải trả về arr mới)
      return [...gioHangCapNhat]; //Trả về state mới(lưu ý kiểu dữ liệu state trả về phải giống kiểu dữ liệu state cũ)
    }

    case "XOA_GIO_HANG": {
      console.log("asd");
      const gioHangCapNhat = state.filter((sp) => sp.maSP !== action.maSPClick);
      return [...gioHangCapNhat];
    }
    case "TANG_GIAM_SO_LUONG": {
      let gioHangCapNhat = [...state];
      let spGH = gioHangCapNhat.find((sp) => sp.maSP === action.maSPClick);
      if (spGH) {
        spGH.soLuong += action.soLuong;
        if (spGH.soLuong < 1) {
          alert("Số lượng tối thiêu bằng 1");
          spGH.soLuong -= action.soLuong;

        }
        return gioHangCapNhat;
      }
    }
    default:
      return state;
  }
  return state;
};
