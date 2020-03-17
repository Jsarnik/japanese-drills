Object.defineProperty(exports, "__esModule", { value: true });
const Card = require('./CardSchema');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

class CardService{

    async InitialData(){
        try{
            let rawdata = fs.readFileSync(path.join(__dirname,'../data.json'));
            let categories = JSON.parse(rawdata);
            let cards = [];

            _.each(categories.questions, (q, key)=>{
                let card = q.question;
                cards.push({
                    type: 'question',
                    english: card.english,
                    hiragana: card.hiragana,
                    no_kanji: card.no_kanji,
                    romaji: card.romaji,
                    audioUrl:  card.audio || null,
                    isLesson:  false,
                    level: 0
                })
            })

            _.each(categories.phrases, card => {
                cards.push({
                    type: 'phrase',
                    english: card.english,
                    hiragana: card.hiragana,
                    no_kanji: card.no_kanji,
                    romaji: card.romaji,
                    audioUrl:  card.audio || null,
                    isLesson:  false,
                    level: 0
                })
            })
            
            let bulkInsertRes = await this.BulkInsert(cards);
            console.log(bulkInsertRes);
        }catch(ex){
            console.log(ex)
        }
       
    }

    async BulkInsert(cardsArray){
        try{
            let response = await Card.insertMany(buildSchema(cardsArray),{ ordered: false });  
            return Promise.resolve({success: true});
        }catch(ex){
            console.log(ex)
            return Promise.resolve({success: true});
        }

        function buildSchema(cards){
            let schemas = [];
            for(let i = 0; i<cards.length; i++){
                schemas.push(new Card(cards[i]));
            }
            return schemas;
        }
    }

    async InsertCard(card){
        try{
            let response = await Card.create(new Card(card));
            return Promise.resolve(response);
        }catch(ex){
            console.log(ex)
            return Promise.reject({message: ex.message});
        }
    }

    async ResetLessons(){
        try{
            let response = await Card.updateMany({ $set: { isLesson: false }});
            let cards = await this.GetCardsByType();
            return Promise.resolve(cards);
        }catch(ex){
            console.log(ex)
            return Promise.resolve({success: true});
        }
    }

    async UpdateCard(card){
        try{
            let response = await Card.findOneAndUpdate({_id: card._id}, card);
            return Promise.resolve(card);
        }catch(ex){
            console.log(ex)
            return Promise.reject({message: ex.message});
        }
    }

    async GetCardsByType(_type){
        try{
            let query = _type ? {type: _type} : {};
            let cards = await Card.find(query).lean();
            let response = {};
            _.each(cards, c=>{
                response[c._id] = c;
            });
            return Promise.resolve(response);
        }catch(ex){
            return Promise.reject(ex);
        }
    }

    async DeleteCard(card){
        try{
            let response = await Card.deleteOne(card);
            let cards = await this.GetCardsByType();
            return Promise.resolve(cards);
        }catch(ex){
            console.log(ex)
            return Promise.reject({message: ex.message});
        }
    }
}

exports.CardService = new CardService();