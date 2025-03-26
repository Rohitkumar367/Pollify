
import PollModel from '../models/PollModel.js'
import UserModel from '../models/UserModel.js'

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
                        optionText: option
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

