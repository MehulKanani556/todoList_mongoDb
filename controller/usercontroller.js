var user = require('../model/usermodel');

exports.insert= async(req,res)=>{
    var data = await user.create(req.body);
    res.status(200).json({
        status:'insert',
        data
    })
}
exports.select= async(req,res)=>{
    var data = await user.find();
    res.status(200).json({
        status:'select',
        data
    })
}
exports.delete = async(req,res)=>{
    var id = req.params.id;
    var data = await user.findByIdAndDelete(id);
    res.status(200).json({
        status:'delete',
        data
    })
}
exports.update = async(req,res)=>{
    var id = req.params.id;
    var data = await user.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        status:'update',
        data
    })
}
exports.run = async(req,res)=>{
    var id = req.params.id;
    var data = await user.findByIdAndUpdate(id,{status:'running'});
    res.status(200).json({
        status:'status update',
        data
    })
}
exports.running = async(req,res)=>{
   
    var data = await user.find({status:'running'});
    res.status(200).json({
        status:'status update',
        data
    })
}
exports.pen = async(req,res)=>{
    var id = req.params.id;
    var data = await user.findByIdAndUpdate(id,{status:'pending'});
    res.status(200).json({
        status:'status update',
        data
    })
}
exports.pending = async(req,res)=>{
   
    var data = await user.find({status:'pending'});
    res.status(200).json({
        status:'status update',
        data
    })
}
exports.dec = async(req,res)=>{
    var id = req.params.id;
    var data = await user.findByIdAndUpdate(id,{status:'decline'});
    res.status(200).json({
        status:'status update',
        data
    })
}
exports.decline = async(req,res)=>{
   
    var data = await user.find({status:'decline'});
    res.status(200).json({
        status:'status update',
        data
    })
}
exports.com = async(req,res)=>{
    var id = req.params.id;
    var data = await user.findByIdAndUpdate(id,{status:'completed'});
    res.status(200).json({
        status:'status update',
        data
    })
}
exports.completed = async(req,res)=>{
   
    var data = await user.find({status:'completed'});
    res.status(200).json({
        status:'status update',
        data
    })
}