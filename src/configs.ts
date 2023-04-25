import TitleImage from './resources/UJI_6835.jpg';
import LocationMapImage from './resources/LocationFullHouse.png';
import GalleryPhoto1 from './resources/UJI_7058.jpg';
import GalleryPhoto2 from './resources/UJI_0257.jpg';
import GalleryPhoto3 from './resources/UJI_7004.jpg';
import GalleryPhoto4 from './resources/UJI_7466.jpg';
import GalleryPhoto5 from './resources/UJI_0163.jpg';
import GalleryPhoto6 from './resources/UJI_9872.jpg';
import GalleryPhoto7 from './resources/UJI_9906.jpg';
import GalleryPhoto8 from './resources/UJI_9830.jpg';
import GalleryPhoto9 from './resources/UJI_9649.jpg';
import GalleryPhoto10 from './resources/UJI_8676.jpg';
import GalleryPhoto11 from './resources/UJI_8814.jpg';
import GalleryPhoto12 from './resources/UJI_8754.jpg';
import GalleryPhoto13 from './resources/UJI_7503.jpg';
import GalleryPhoto14 from './resources/UJI_0199.jpg';
import GalleryPhoto15 from './resources/UJI_8730.jpg';
import GalleryPhoto16 from './resources/UJI_9640.jpg';
import GalleryPhoto17 from './resources/UJI_6706.jpg';
import GalleryPhoto18 from './resources/UJI_7503.jpg';
import GalleryPhoto19 from './resources/UJI_8754.jpg';
import GalleryPhoto20 from './resources/UJI_8775.jpg';
import GalleryPhoto21 from './resources/UJI_8831.jpg';
import GalleryPhoto22 from './resources/UJI_8869.jpg';
import GalleryPhoto23 from './resources/UJI_9040.jpg';
import GalleryPhoto24 from './resources/UJI_9607.jpg';
import GalleryPhoto25 from './resources/UJI_9337.jpg';
import GalleryPhoto26 from './resources/UJI_9265.jpg';
import GalleryPhoto27 from './resources/UJI_9154.jpg';
import GalleryPhoto28 from './resources/UJI_8932.jpg';
import GalleryPhoto29 from './resources/UJI_8173.jpg';
import GalleryPhoto30 from './resources/UJI_9498.jpg';
import GalleryPhoto31 from './resources/UJI_8915.jpg';
import GalleryPhoto32 from './resources/UJI_9229.jpg';
import WeddingImage from './resources/wedding.jpg'
import QRMonney from './resources/qr_tien.jpg'


const Configs: ConfigsType = {
  url: 'http://localhost:3000',
  kakaoToken: '카카오톡 API 토큰을 입력해주세요!',
  kakaoImage: '카카오톡으로 공유할 때 사용되는 대표이미지 URL을 입력해주세요!',
  weddingDate: 'Ngày 30 Tháng 4 năm 2023 vào lúc 11 giờ 30',
  weddingLocation: 'Tiệc cưới FullHouse',
  groom: {
    name: 'Công Sơn',
    accountNumber: '***-***-******',
    fatherName: 'Trần Công Hùng',
    fatherAccountNumber: '***-***-******',
    motherName: 'Huỳnh Tăng Kim Ngọc',
    motherAccountNumber: '***-***-******',
  },
  bride: {
    name: 'Minh Châu',
    accountNumber: '***-***-******',
    fatherName: 'Lê Thành Nhân',
    fatherAccountNumber: '***-***-******',
    motherName: 'Trần Thị Thanh Thuý',
    motherAccountNumber: '***-***-******',
  },
  titleImage: TitleImage,
  weddingImage: WeddingImage,
  locationMapImage: LocationMapImage,
  qrMoney: QRMonney,
  galleryImages: [
    GalleryPhoto1,
    GalleryPhoto2,
    GalleryPhoto3,
    GalleryPhoto4,
    GalleryPhoto5,
    GalleryPhoto6,
    GalleryPhoto7,
    GalleryPhoto8,
    GalleryPhoto9,
    GalleryPhoto10,
    GalleryPhoto11,
    GalleryPhoto12,
    GalleryPhoto13,
    GalleryPhoto14,
    GalleryPhoto15,
    GalleryPhoto16,
    GalleryPhoto18,
    GalleryPhoto19,
    GalleryPhoto20,
    GalleryPhoto21,
    GalleryPhoto22,
    GalleryPhoto23,
    GalleryPhoto24,
    GalleryPhoto25,
    GalleryPhoto26,
    GalleryPhoto27,
    GalleryPhoto28,
    GalleryPhoto29,
    GalleryPhoto30,
    GalleryPhoto17,
    GalleryPhoto31,
    GalleryPhoto32
  ],
};

export type ConfigsType = {
  url: string;
  kakaoToken: string;
  kakaoImage: string;
  weddingDate: string;
  weddingLocation: string;
  qrMoney: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  weddingImage: string;
  locationMapImage: string;
  galleryImages: string[];
};

type Person = {
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;
