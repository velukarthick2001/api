//const Doctor = require('../models/doctor.model');
const DoctorModel = require('../models/doctor.model')

// get all doctors list
exports.getDoctorsList = (req,res)=>{
    console.log('all doctors are listed here !!!!!');
    DoctorModel.getAllDoctors((err, doctors)=>{
        console.log('we are here');
        if(err)
            res.send(err);
         
            console.log('Doctors',doctors);
            res.send(doctors);

         
    })
}
// get doctor by id
exports.getDoctorsById=(req,res) =>{
    console.log('get doctors by id');
    DoctorModel.getDoctorById(req.params.id,(err, doctors)=>{
         
        if(err)
            res.send(err);
           
            console.log('Single Doctors',doctors);
            res.send(doctors);
        })
}
// create new doctor
exports.createdNewDoctor=(req,res)=>{
    // console.log('req data ',req.body);
    const doctorReqData = new DoctorModel(req.body);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send(400).send({success:false,message:'please fill all fields'});
    }else{
       // console.log('valid data ');
        DoctorModel.createDoctor(doctorReqData,(err,doctor)=>{
                if(err)
                    res.send(err);
                    res.json({status:true,message:' Doctor added successfully',data:doctor.insertId});
               
        })
    }


}

// update doctor
exports.updateDoctor =(req,res)=>{
    const doctorReqData = new DoctorModel(req.body);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send(400).send({success:false,message:'please fill all fields'});
    }else{
       // console.log('valid data ');
        DoctorModel.updateDoctor(req.params.id,doctorReqData,(err,doctor)=>{
                if(err)
                    res.send(err);
                    res.json({status:true,message:' Doctor updated successfully'});
               
        })
    }
}

// delete doctor
exports.deleteDoctor =(req,res)=>{
    DoctorModel.deleteDoctor(req.params.id,(err,doctor)=>{
        if(err)
        res.send(err);
        res.json({success:true,message:'Doctor deleted Successfully'})
    })
}