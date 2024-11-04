// // server/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Kết nối MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch((err) => console.log(err));

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Kết nối route
// const productRoutes = require('./routes/productRoutes'); // Import các route
// app.use('/api/products', productRoutes); // Kết nối route

// // Định nghĩa API cơ bản
// app.get('/', (req, res) => {
//   res.send('API is running');
// });

// // Khởi động server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Kết nối MongoDB với Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  seedDatabase(); // Gọi hàm khởi tạo dữ liệu khi kết nối thành công
})
.catch((err) => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối route
const productRoutes = require('./routes/productRoutes'); // Import các route
app.use('/api/products', productRoutes); // Kết nối route

// Định nghĩa API cơ bản
app.get('/', (req, res) => {
  res.send('API is running');
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Hàm khởi tạo dữ liệu mẫu
async function seedDatabase() {
  const { MongoClient } = require('mongodb');
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('ProductDatabase');
    const collection = database.collection('Products');

    const products = [
      { 
        id: 1, 
        prdName: "Laptop Lenovo Ideapad Slim 3", 
        price: 14290000, 
        prdImage: "img1.jpg", 
        description: "Laptop Lenovo Ideapad Slim 3 hỗ trợ làm việc và giải trí đa phương tiện một cách tối ưu và đầy tiện nghi." 
      },
      { 
        id: 2, 
        prdName: "Laptop Acer Gaming Aspire 5", 
        price: 15490000, 
        prdImage: "img2.jpg", 
        description: "Laptop Acer Gaming Aspire 5 là mẫu Laptop gaming với cấu hình mạnh mẽ và thiết kế sang trọng lịch lãm." 
      },
      { 
        id: 3, 
        prdName: "Laptop Dell XPS 15", 
        price: 21990000, 
        prdImage: "img3.jpg", 
        description: "Laptop Dell XPS 15 là mẫu laptop hiệu năng cao hỗ trợ đồ họa chuyên nghiệp." 
      },
      { 
        id: 4, 
        prdName: "Laptop Asus Gaming ROG Strix G15", 
        price: 18490000, 
        prdImage: "img4.jpg", 
        description: "ROG Strix series là laptop gaming esports với màn hình nhanh nhất thế giới 300Hz." 
      },
      { 
        id: 5, 
        prdName: "Laptop MSI GF63 Thin 10SC", 
        price: 14500000, 
        prdImage: "img5.jpg", 
        description: "Laptop MSI GF63 Thin 10SC là một trong những Model tầm trung của hãng Laptop Gaming trứ danh thế giới, với thiết kế và hiệu suất ấn tượng." 
      },
      { 
        id: 6, 
        prdName: "Laptop HP Gaming Victus 16", 
        price: 17240000, 
        prdImage: "img6.jpg", 
        description: "Laptop HP Gaming Victus 16 là một sự kết hợp hoàn hảo giữa hiệu năng và thiết kế, đáp ứng tốt nhu cầu của game thủ và người dùng sáng tạo." 
      },
    ];
    

    // Kiểm tra nếu dữ liệu đã có thì không thêm lại
    const count = await collection.countDocuments();
    if (count === 0) {
      await collection.insertMany(products);
      console.log("Dữ liệu mẫu đã được thêm thành công");
    } else {
      console.log("Dữ liệu mẫu đã tồn tại, không thêm lại");
    }
  } catch (error) {
    console.error("Lỗi khi thêm dữ liệu mẫu:", error);
  } finally {
    await client.close();
  }
}
