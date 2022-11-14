import styles from './ProductInformation.module.scss'

interface ProductInformationProps {
  category?: string,
  productName?: string,
  rating_star?: number,
  rating_number?: number,
  love_number?: number,
  isLogin?: boolean,
  color?: any,
  size?: any,
  voucher?: any,
  policy?: any,
  address?: string,
  shipping_method?: string,
  shipping_price?: string,
  shipping_time?: string,
  shipping_hour?: string
}

const ProductInformation = (props: ProductInformationProps) => {
  const { 
    productName, 
    rating_star, 
    rating_number, 
    love_number, 
    isLogin, 
    color, 
    size, 
    voucher,
    policy,
    address,
    shipping_method,
    shipping_price,
    shipping_time,
    shipping_hour
  } = props;

  return (
    <div>

    </div>
  )
}

export default ProductInformation;