import styles from "./Product.module.scss";
import Image from "next/image";
import classNames from "classnames";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import Icon from "../Icon/Icon";
import { Rating } from "@mui/material";
import { useState } from "react";

interface ProductProps {
  className?: string;
  product: { [key: string]: any };
}

const Product = (props: ProductProps) => {
  const { product, className } = props;
  const router = useRouter();

  const title =
    product.title.length <= 27
      ? product.title
      : product.title.slice(0, 27) + "...";

  return (
    <section
      className={classNames(styles.panel, className)}
      onClick={() => router.push(product.link)}
    >
      <div className={styles.image_wrapper}>
        <Image
          className={styles.image}
          src={product.image}
          width={122}
          height={102}
          layout="responsive"
          alt=""
        />
        <div className={styles.top_tag}>{product.top_tag}</div>
      </div>

      <div className={styles.sub_title}>
        <div className={styles.brand_wrapper}>
          <div className={styles.line}></div>
          <div className={styles.brand}>{product.brand}</div>
        </div>
        <div className={styles.sale_tag}>{product.sale_tag}</div>
      </div>

      <div className={styles.title}>{title}</div>

      <div className={styles.rating}>
        <Rating size="small" value={product.rating.star} readOnly />
        <div className={styles.number}>({product.rating.number})</div>
      </div>

      <div className={styles.price}>
        <div className={styles.show_price}>
          {product.saled_price ? product.saled_price : product.price}
        </div>
        <div className={styles.origin_price}>
          {product.saled_price ? product.price : ""}
        </div>
      </div>
      <Button
        variant="outlined"
        prefix={<Icon icon="add" size={18} />}
        className={styles.btn}
      >
        Thêm vào giỏ
      </Button>
      <div className={styles.favor}>
        <div className={styles.icon}>
          <Icon color="black" icon="mini-heart" size={18} />
        </div>
        <p>Bỏ yêu thích</p>
      </div>
    </section>
  );
};

export default Product;
