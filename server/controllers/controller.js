const Person = require('../models/person');
const mongoose = require('mongoose');

exports.createPerson = async(req, res) => {
    const { id } = req.params;
    const foundPerson = await Person.findOne({ _id: id });

    if (!foundPerson || foundPerson.length == 0) {
        const p = new Person({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            age: req.body.age
        });

        const response = await p.save();
        res.status(200).json(response);
    } else {
        res.status(409).json({ message: "Person already exists!" });
    }
}

exports.readPerson = async(req, res) => {
    const foundPerson = await Person.findOne({ _id: req.params.id });

    if (!foundPerson || foundPerson.length == 0) {
        res.status(404).json({ message: "Person not found!" });
    } else {
        res.status(200).json(foundPerson);
    }
}

exports.readAllPeople = async(req, res) => {
    const people = await Person.find();

    if (!people || people.length == 0) {
        res.status(404).json({ message: "Can't find any people!" });
    } else {
        res.status(302).json(people);
    }
}

exports.updatePerson = async(req, res) => {
    await Person.updateOne({ _id: req.params.id }, req.body)
        .exec()
        .then(result => {
            if (result.nModified == 0) {
                res.status(404).json({ message: "Person not found!" });
            } else {
                res.status(200).json({ message: "Person updated!" });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

exports.deletePerson = async(req, res) => {
    await Person.deleteOne({ _id: req.params.id })
        .exec()
        .then(result => {
            if (result.deletedCount == 0) {
                res.status(404).json({ message: "Person not found!" });
            } else {
                res.status(200).json({ message: "Person deleted!" });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}