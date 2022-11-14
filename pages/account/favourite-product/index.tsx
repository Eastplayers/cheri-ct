import Product from "../../../components/Product/Product";
import ColumnLayout from "../../../components/ColumnLayout/ColumnLayout";
import styles from "../../../styles/FavouriteProduct.module.scss";
import { useState, useEffect } from "react";
import Pagination from "../../../components/Pagination/Pagination";

const FavouriteProduct = () => {
  const defaultPagination = { page: 1, total: 0, limit: 10 };
  const [pagination, setPagination] = useState(defaultPagination);

  const listItem = Array(20)
    .fill({
      image: "/assets/homepage/shopping-item/item-thumbnail.png",
      link: "#",
      top_tag: "Hot deal",
      brand: "LANEIGE",
      sale_tag: "-40%",
      title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
      rating: {
        star: 5,
        number: 12,
      },
    })
    .map((item, index) => ({ ...item, id: index }));
  
  useEffect(() => { 
    const response = {
      limit: 28,
      page: 20,
    }
    setPagination(...pagination, response)
  }, [pagination.page])
  return (
    <section className="favourite-product">
      <ColumnLayout>
        <div className={styles.list_product}>
          {Array.isArray(listItem) &&
            listItem.map((item: any, index: any) => (
              <Product key={index} product={item} />
            ))}
        </div>
        <Pagination
          limit={10}
          total={20}
          onPageChange={(selected) =>
            setPagination({ ...pagination, page: 5 })
          }
        />
      </ColumnLayout>
    </section>
  );
};

export default FavouriteProduct;
