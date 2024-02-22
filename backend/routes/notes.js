const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

//ROUTE 1: Fetch all the notes using GET: "/api/auth/allnotes"
router.get('/allnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

//ROUTE 2: Adding  a new note for  a user using POST: "/api/auth/addnote"
router.post('/addnote', fetchuser, [
    body('title', 'Title must have atleast 3 characters').isLength({ min: 3 }),
    body('description', 'Description must have atleast 6 characters').isLength({ min: 6 }),

], async (req, res) => {
    const { title, description, tag } = req.body;

    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ error: "Internal Server error" });
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


//ROUTE 3: Update a note for a user using PUT: "/api/auth/updatenote"
router.put('/editnote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        const newNote = {};
        if (title) {
            newNote.title = title;
        }
        if (description) {
            newNote.description = description;
        }
        if (tag) {
            newNote.tag = tag;
        }

        //Finding the node to be updated
        let note = await Notes.findById(req.params.id);
        if (!note) { res.status(404).send({ error: "Note not found" }) }
        if (note.user.toString() !== req.user.id) { return res.status(401).send({ error: "Not found" }) }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({note});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

//ROUTE 4: Deleting a note for a user using DELETE: "/api/auth/deletenote"
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        //Finding the node to be deleted
        let note = await Notes.findById(req.params.id);
        if (!note) { res.status(404).send({ error: "Note not found" }) }
        if (note.user.toString() !== req.user.id) { res.status(401).send({ error: "Not found" }) }
        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Deleted note", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;