const initialState = {
  sanPhamChiTiet: {
    giaBan: 3500,
    maSanPham: "1",
    hinhAnh: "./img/vsphone.jpg",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP &amp; Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "6 GB",
  },
  danhSachGioHang: [],
  totalItems: 0,
  danhSachSanPham: [
    {
      giaBan: 2000,
      maSanPham: "1",
      tenSanPham: "VinSmart Live",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: "AMOLED, 6. Full HD",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP &amp; Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
    },
    {
      giaBan: 1500,
      maSanPham: "2",
      tenSanPham: "Meizu 16Xs",
      hinhAnh: "./img/meizuphone.jpg",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP &amp; Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
    },
    {
      giaBan: 3500,
      maSanPham: "3",
      tenSanPham: "Iphone XS Max",
      hinhAnh: "./img/applephone.jpg",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP &amp; Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
    },
  ],
};
const gioHangReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "DETAIL_PRODUCT": {
      state.sanPhamChiTiet = actions.payload;
      return { ...state };
    }
    case "ADD_PRODUCT": {
      state.danhSachGioHang.push(actions.payload);
      state.totalItems++;
      return { ...state };
    }
    default:
      break;
  }
  return state;
};
export default gioHangReducer;
