// import db
const db = require("../config/database");

// class Model Student
class Student {
    // method untuk query semua data
    static find(id) {
        return new Promise((resolve, reject) => {
            // query ke db
            const sql = "SELECT * FROM students";
            db.query(sql, id, (err, results) => {
                //destructing array
                const [student] = results ;
                resolve(results);
            });
        });
    }

    static async create(data,callback) {
        const id = await new Promise((resolve, reject) => {
            // insert data ke db
            const sql = "INSERT INTO students SET ?";
            db.query(sql, data, (err, results) => {
                resolve(results,insertId);
            });
        });

        //Refactor Promise 2: get data by Id
        const student = this.find(id);
        return student;
    }
    static async update(id,data) {
        const id = await new Promise((resolve, reject) => {
            // insert data ke db
            const sql = "UPDATE students SET ? WHERE id = ?";
            db.query(sql, [data,id], (err, results) => {
            });
        });
        //mencari data yang baru diupdate
        const student = await this.find(id);
        return student;
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            // insert data ke db
            const sql = "DELETE FROM students WHERE id = ?";
            db.query(sql, id, (err, results) => {
            });
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            // query ke db
            const sql = "SELECT * FROM students";
            db.query(sql, id, (err, results) => {
                //destructing array
                const [student] = results ;
                resolve(studet);
            });
        });
    }

}

// export class
module.exports = Student;