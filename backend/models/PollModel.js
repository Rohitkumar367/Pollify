
import mongoose from "mongoose";

const PollSchema = new mongoose.Schema({
    question: {type: String, required: true},
    type: {type: String, required: true}, // ex: single-choice, image-based, etc
    options: [ // single-choice poll options
        {
            optionText: {type: String, required: true},
            votes: {type: Number, default: 0}, // for vote tracking i.e., how many votes each option has received
        },
    ],
    responses: [ // for open-ended polls
        {
            voterId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}, // which user has given the response
            responseText: {type: String, required: true}, // the response in text
            createdAt: {type: Date, default: Date.now} // and when it was created
        }
    ],
    creator: {type: mongoose.Schema.Types.ObjectId, ref: "User"}, // which creator created the poll
    voters: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}], // for tracking who has voted on the poll and to prevent dublicate voting
    createdAt: {type: Date, default: Date.now}, // when was the poll created
    closed: {type: Boolean, default: false}, // to mark polls as closed
});

const PollModel = mongoose.model('Poll', PollSchema);

export default PollModel;

