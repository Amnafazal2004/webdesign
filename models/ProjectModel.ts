import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    projectdetails:{
        type:Array,
    }
})

const ProjectModel = mongoose.models.Projectdetail || mongoose.model('Projectdetail', Schema)
export default ProjectModel;