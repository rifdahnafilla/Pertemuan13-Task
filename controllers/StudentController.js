// import students
const Student = require("../models/Student");


// Buat Class Student Controller
class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    if(student.length > 0){
    const data = {
      message: "Menampilkan semua student",
      data: students
    };
    res.status(200).json(data);
    }
    else{
      const data ={
        message: " Student is empty",
      };
      res.status(200).json(data);
    }
  }

  async store(req, res) {
    /**
     * validasi sederhana
     */
    //Destructuring Object 
    const {nama, nim, email, jurusan} = req.body;
    if (!nama || !nim || !email || !jurusan){
      const data = {
        message: "Semua data harus dikirim",
      };
      return res.status(422).json(data);
    }
    //else
    const data = {
      message: "Menambahkan semua student",
      data: students
    };
    return res.status(201).json(data);
  }

  //membuat update data:

  async update(req, res) {
    // Destructuring Object (karena object jadi bisa diekstrak)
    const {id} = req.params;
    //cari id student yang ingin diupdate
    const student = await Student.find(id);
    
    if(student){
      const student = await Student.update(id,req,body);
      const data = {
        message: `Menambahkan data Students`,
        data: students
      };
      res.status(200).json(data);
    }
    else{
      const data = {
        message: `Student not found`,
      };
      res.status(400).json(data);
    }
  }
//membuat destory data:

async destory(req, res) {
  // Destructuring Object (karena object jadi bisa diekstrak)
  const {id} = req.params;
  //cari id student yang ingin diupdate
  const student = await Student.find(id);
  
  if(student){
    const student = await Student.update(id,req,body);
    const data = {
      message: `Menghapus data Students`,
    };
    res.status(200).json(data);
  }
  else{
    const data = {
      message: `Student not found`,
    };
    res.status(400).json(data);
  }
}
//membuat get(show)
async show(req, res) {
  // Destructuring Object (karena object jadi bisa diekstrak)
  const {id} = req.params;
  //cari id student yang ingin diupdate
  const student = await Student.find(id);
  
  if(student){
    const data = {
      message: `Menambahkan data Students`,
      data: students
    };
    res.status(200).json(data);
  }
  else{
    const data = {
      message: `Student not found`,
    };
    res.status(400).json(data);
  }
}

}

// buat object
const object = new StudentController();

// export
module.exports = object;