
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
        const pageNumber = parseInt(page, 10);// string to number using base 10 -> into decimal number
        const pageSize = parseInt(limit, 10)
        const skip = (pageNumber - 1) * pageSize;

        // fetching polls with pagination
        const polls = await PollModel.find(filter).populate("creator", "fullName username email profileImageUrl").populate({
            path: "responses.voterId",
            select: "username profileImageUrl fullName",
        }).skip(skip).limit(pageSize).sort({createdAt: -1});

        // adding "userHasVoted" flag for each poll
        const updatedPolls = polls.map((poll)=>{
            const userHasVoted = poll.voters.some((voterId)=>voterId.equals(userId)); //.some() returns true if any of the elements in the array pass the test implemented by the provided function
            return {
                ...poll.toObject(), 
                userHasVoted
            };
        })

        // get total count of polls for pagination metadata
        const totalPolls = await PollModel.countDocuments(filter);

        // this aggregate is running on all data, not just the filtered data
        const stats = await PollModel.aggregate([
            {
                $group:{
                    _id: "$type",
                    count: {$sum: 1},
                }
            },
            {
                $project:{
                    type: "$_id",
                    count: 1,
                    _id: 0,
                }
            }
        ]); // but his will not include the zero counts poll type

        // ensure all types are included in stats, even those with zero counts
        const allTypes=[
            {type: "single-choice", label: "Single Choice"},
            {type: "rating", label: "Rating"},
            {type: "yes/no", label: "Yes/No"},
            {type: "image-based", label: "Image Based"},
            {type: "open-ended", label: "Open Ended"},
        ];

        const statsWithDefaults = allTypes.map((pollType)=>{
            const newstat = stats.find((item)=> item.type === pollType.type);
            return {
                label: pollType.label,
                type: pollType.type,
                count: newstat ? newstat.count : 0,
            }
        }).sort((a,b) => b.count-a.count);

        res.status(200).json({
            polls: updatedPolls, // updated polls, i.e., userHasVoted on that poll or not
            currentPage: pageNumber,
            totalPages: Math.ceil(totalPolls/pageSize),
            totalPolls,
            stats: statsWithDefaults, // updated stats
        });
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
