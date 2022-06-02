import routes from './router';

const menuHeader = [
  {
    name: 'Trang chủ',
    path: routes.home,
    active: 'home',
  },
  {
    name: 'Game',
    path: '',
    active: 'game',
    children: [
      {
        name: 'Kipon',
        path: '',
      },
      {
        name: 'Robotrix',
        path: '',
      },
    ],
  },
  {
    name: 'Tuyển dụng',
    path: '',
    active: 'tuyen-dung',
  },
  {
    name: 'Giới thiệu',
    path: '',
    active: 'gioi-thieu',
  },
  {
    name: 'Liên hệ',
    path: '',
    active: 'lien-he',
  },
];

export default menuHeader;
