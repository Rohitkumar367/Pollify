
import PollModel from '../models/PollModel.js'
import UserModel from '../models/UserModel.js'

// to create new poll
export const createPoll = async (req, res) => {

    const {question, type, options, creatorId} = req.body;

    if(!question || !type || !creatorId){
        return res.status(400).json({message: "Question, Type and CreatorId are required"})
    }

    try {

        let processedOptions = [];

        switch(type){
            case "single-choice":
                if(!options || options.length<2){
                    return res.status(400).json({message: "Enter at least two options"});
                };
                processedOptions = options.map((option)=>(
                    {
                        optionText: option,
                    }
                ));
                break;

            case "rating":
                processedOptions = [1,2,3,4,5].map((value)=>(
                    {
                        optionText: value.toString(),
                    }
                ));
                break;

            case "yes/no":
                processedOptions = ["Yes", "No"].map((option)=>(
                    {
                        optionText: option,
                    }
                ))
                break;

            case "image-based":
                if(!options || options.length<2){
                    return res.status(400).json({message: "Select at least two images"});
                };
                processedOptions = options.map((url)=>(
                    {
                        optionText: url,
                    }
                ));
                break;

            case "open-ended":
                processedOptions = [];
                break;

            default:
                return res.status(400).json({message: "Invalid poll type"});
        }

        const newPoll = await PollModel.create({
            question,
            type,
            options: processedOptions,
            creator: creatorId,
        })

        res.status(201).json(newPoll)
        
    } catch (err) {
        res.status(500).json({message:"Error creating poll", error: err.message})
    }

}

//to get all polls
export const getAllPolls = async (req, res) => {
    const {type, creatorId, page=1, limit=10} = req.query;
    const filter={};
    const userId = req.user._id;

    if(type) filter.type=type;
    if(creatorId) filter.creator=creatorId;

    try {

    }catch(err){
        res.status(500).json({message:"Error getting all polls", error: err.message})
    }
}

// to get all voted polls
export const getVotedPolls = async (req, res) => {
    try {

    }catch(err){
        res.status(500).json({message:"Error getting all polls", error: err.message})
    }
}

// to get poll by id(perticular poll)
export const getPollById = async (req, res) => {
    try {

    }catch(err){
        res.status(500).json({message:"Error getting all polls", error: err.message})
    }
}


// to get total votes that a poll(id) has received
export const voteOnPoll = async (req, res) => {
    try {

    }catch(err){
        res.status(500).json({message:"Error getting all polls", error: err.message})
    }
}


// to close a poll
export const closePoll = async (req, res) => {
    try {

    }catch(err){
        res.status(500).json({message:"Error getting all polls", error: err.message})
    }
}

// to bookmark a poll
export const bookmarkPoll = async (req, res) => {
    try {

    }catch(err){
        res.status(500).json({message:"Error getting all polls", error: err.message})
    }
}

// to get all bookmarked polls
export const getBookmarkedPolls = async (req, res) => {
    try {

    }catch(err){
        res.status(500).json({message:"Error getting all polls", error: err.message})
    }
}

// to delete a poll
export const deletePoll = async (req, res) => {
    try {

    }catch(err){
        res.status(500).json({message:"Error getting all polls", error: err.message})
    }
}
