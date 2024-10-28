import React from 'react'
import prd1 from "../../assets/imgs/img1.jpg"
import prd2 from "../../assets/imgs/img2.jpg"
import prd3 from "../../assets/imgs/img3.jpg"
import { Link } from 'react-router-dom'
export default function Products({handleAddToCart}) {
  const products = [
    {
        id: 1,prdName: "Laptop Lenovo Ideapad Slim 3", price: 14290000, prdImage: prd1, description: "Laptop Lenovo Ideapad Slim 3 hỗ trợ làm việc và giải trí đa phương tiện một cách tối ưu và đầy tiện nghi."
    },
    {
        id: 2,prdName: "Laptop Acer Gaming Aspire 5", price: 15490000, prdImage: prd2, description: "Laptop Acer Gaming Aspire 5 là mẫu Laptop gaming với cấu hình mạnh mẽ và thiết kế sang trọng lịch lãm."
    },
    {
        id: 3,prdName: "Laptop Dell XPS 15", price: 21990000, prdImage: prd3, description: "Laptop Dell XPS 15 là mẫu laptop hiệu nâng cao hỗ trợ đồ họa chuyên nghiệp."
    }, 
  ]  
  return (
    <section className='container mx-auto p-6'>
      <h2 className='text-2x1 font-bold mb-5'>Danh Sách Laptop</h2>
      <div className='grid grid-cols-3 gap-5'>
        {
          products.map((product) => {
            return(
              <div key={product.id} className= 'bg-white shadow-md rounded-lg'>
                <img src={product.prdImage} alt={product.prdName} className='w-[80%] h-[80%] object-cover'/>
                <h3 className='text-lg font-semibold'>{product.prdName}</h3>
                <p className='text-red-400 font-medium text-lg'>{product.price.toLocaleString()} VNĐ</p>
                <Link to={`/detail/${product.id}`} state={{product}} className='w-full block text-center bg-blue-500 text-white py-2 rounded-lg mb-2'>Chi tiết sản phẩm</Link>

                <button onClick={() => {handleAddToCart(product)}} className='w-full block bg-green-500 text-white py-2 rounded-lg'>Thêm vào giỏ hàng</button>

              </div>
            )

          })
        }

      </div>
    </section>
  )
}