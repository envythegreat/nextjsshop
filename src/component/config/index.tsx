export {
  useAppDispatch,
  useAppSelector
} from './redux/hooks';

export {Api} from './api';


export {
  productSlice,
  getTotalAmount,
  addToTotal,
  removeFromTotal,
  addProducts,
  singleProduct,
  
} from './redux/productReducer';

export {
  SetNewItem,
  deleteProduct,
  checkifCookiesExist,
  updateSingleProduct,
  rateCookies,
  getRates,
  handleCurneccy,
  getCurrency,
  getAllCookies
} from './cookies/cookies';

export {
  rateSlice,
  setRate,
  addRates
} from './redux/rateReducer';

export type {myProduct, Rate} from './type';