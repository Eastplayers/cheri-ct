import Slider from "react-slick";
import Image from "next/image";
import { useState } from "react";

import styles from "./ProductShowcase.module.scss";

interface ProductShowcaseProps {
  imageList?: any
}

const ProductShowcase = (props: ProductShowcaseProps) => {
  const { imageList } = props;
  const [ mainImage, setMainImage] = useState({
    image: imageList[0].image || null,
    index: 0
  });

  return (
    <div>
      <div>
        <div>
          <Image
            src={mainImage.image || require('public/vercel.svg')}
            width={365}
            height={365}
            // layout="responsive"
            alt=""
          />
        </div>
        
        <div>
          {imageList.map((item: any, index:any) => (
            <div className={index === mainImage.index ? styles.active : ""} key={index}></div>
          ))}
        </div>
      </div>
      <div>
        {imageList.map((item: any, index:any) => (
          <div key={index}>
            <Image
              onClick={() => setMainImage({
                  image: item.image,
                  index: index
                })}
              src={item.image || require('public/vercel.svg')}
              width={56}
              height={56}
              // layout="responsive"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductShowcase;