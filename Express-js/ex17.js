import mongoose from 'mongoose';

async function dbconnect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/school");
        console.log("MongoDB Connected");

        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            class: String
        });

        // COLLECTION NAME MUST MATCH COMPASS
        const Student = mongoose.model('student', studentSchema);

        const result = await Student.find({});
        console.log(result);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

dbconnect();
