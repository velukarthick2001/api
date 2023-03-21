  var dbConn = require('../../config/db.config');

var Doctor = function(doctor){
    this.id = doctor.id;
    this.ipd_id = doctor.ipd_id;
    this.consult_doctor = doctor.consult_doctor;
    this. created_at = doctor.created_at;
}

// get all doctors 
Doctor.getAllDoctors=(result) =>{
dbConn.query('SELECT * FROM doctors',(err,res)=>{
    if(err){
        console.log('Error occured',err);
        result(null,err);
    }else{
        console.log('Doctors valued fetched ');
        result(null,res);
    }
})
}
// get employees by id
Doctor.getDoctorById =(id,result) =>{
    dbConn.query('select * from doctors where id=?',id,(err,res)=>{
            if(err){
                console.log('Error occured while getting by id',err);
                result(null,err);
            }else{
                console.log('Doctors fetched by id');
                result(null,res);
            }
    })
}
// create new doctor
Doctor.createDoctor=(doctorReqData,result)=>{
    dbConn.query('insert into doctors SET ?',doctorReqData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('Doctor inserted Successfully');
            result(null,res)
        }
    })
}
// update doctor
Doctor.updateDoctor =(id,doctorReqData,result)=>{
    dbConn.query("UPDATE doctors SET id=?,ipd_id=?,consult_doctor=?,created_at=? WHERE id = ?",[doctorReqData.id,doctorReqData.ipd_id,doctorReqData.consult_doctor,doctorReqData.created_at,id],(err,res)=>{
        if(err){
            console.log('error while updating the record');
            console.log(doctorReqData.id);
            console.log(err);
            result(null,err)
        }else{
            console.log('Doctor updated successfully!!');
            result(null,res);
        }
       
    })
}

//delete doctor
Doctor.deleteDoctor=(id,result)=>{
    dbConn.query('delete from doctors where id=?',[id],(err,res)=>{
        if(err){
            console.log('Error while Deleting Doctor');
            result(null,err)
        }else{
            console.log('Deleted data');
            result(null,res);
        }
    })
}

module.exports = Doctor;