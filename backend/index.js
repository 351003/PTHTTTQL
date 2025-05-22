// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const PORT = 5500;

// // Middleware
// app.use(cors());
// app.use(express.json()); // parse JSON body

// // Kết nối MongoDB
// mongoose.connect('mongodb://localhost:27017/httt', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error(err));

// // Định nghĩa schema và model nhân viên
// const employeeSchema = new mongoose.Schema({
//   code: { type: String, required: true, unique: true },
//   name: String,
//   position: String,
//   email: String,
// });

// const Employee = mongoose.model('Employee', employeeSchema);

// // API routes

// // Lấy danh sách nhân viên
// app.get('/api/employees', async (req, res) => {
//   try {
//     const employees = await Employee.find();
//     res.json(employees);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Thêm nhân viên mới
// app.post('/api/employees', async (req, res) => {
//   const { code, name, position, email } = req.body;
//   try {
//     const newEmployee = new Employee({ code, name, position, email });
//     await newEmployee.save();
//     res.status(201).json(newEmployee);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Sửa nhân viên theo mã (code)
// app.put('/api/employees/:code', async (req, res) => {
//   try {
//     const employee = await Employee.findOne({ code: req.params.code });
//     if (!employee) return res.status(404).json({ message: 'Không tìm thấy nhân viên' });

//     const { name, position, email } = req.body;
//     employee.name = name;
//     employee.position = position;
//     employee.email = email;

//     await employee.save();
//     res.json(employee);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Xóa nhân viên theo mã (code)
// app.delete('/api/employees/:code', async (req, res) => {
//   try {
//     const employee = await Employee.findOneAndDelete({ code: req.params.code });
//     if (!employee) return res.status(404).json({ message: 'Không tìm thấy nhân viên' });
//     res.json({ message: 'Đã xóa nhân viên' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
