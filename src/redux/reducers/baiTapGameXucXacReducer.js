//Liệt kê các state của ứng dụng
const stateDefault = {
  soBanChoi: 0,
  soBanThang: 0,
  banChon: true, //Tài true, xỉu false
  mangXucXac: [
    { hinh: "./img/gameXucXac/1.png", diem: 1 },
    { hinh: "./img/gameXucXac/1.png", diem: 1 },
    { hinh: "./img/gameXucXac/1.png", diem: 1 },
  ],
};

export const baiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {

      state.banChon = action.banChon;
      return { ...state };
    }
    case "PLAY_GAME": {
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;

        let xxnn = { hinh: `./img/gameXucXac/${soNgauNhien}.png`, diem: soNgauNhien };
        mangXucXacNgauNhien.push(xxnn);
      }
      state.mangXucXac = mangXucXacNgauNhien;

      let tongDiem = mangXucXacNgauNhien.reduce((tong, xucXac, index) => {
        return tong += xucXac.diem;
      }, 0);
      if ((state.banChon && tongDiem > 11) || (!state.banChon && tongDiem <= 11)) {
        state.soBanThang += 1;
      }
      state.soBanChoi++;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
