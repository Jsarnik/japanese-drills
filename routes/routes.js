"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cardService = require('../mongo/CardService');
const _ = require('lodash');

function configure(app) {
    const router = express.Router();
    // Register all our routes with /api
    app.use('/api', router);

    router.post('/getCards', getCards);
    router.get('/resetLesson', resetLesson);
    router.post('/setCard', setCard);
    router.post('/addCard', addCard);
    router.post('/updateCard', updateCard);
    router.post('/deleteCard', deleteCard);

    async function getCards(req, res, next){
        res.status(200);
        const cards = await cardService.CardService.GetCardsByType(req.body.type || null);
        res.json(cards);
    };

    async function setCard(req, res, next){
        res.status(200);
        let response = null;
        try{
            response = await cardService.CardService.UpdateCard(req.body.card);
        }catch(ex){
            response = {failure: ex};
        }

        res.json(response);
    };

    async function resetLesson(req, res, next){
        res.status(200);
        let response = null;
        try{
            response = await cardService.CardService.ResetLessons();
        }catch(ex){
            response = {failure: ex};
        }

        res.json(response);
    };

    async function addCard(req, res, next){
        res.status(200);
        let response = null; 
        try{
            response = await cardService.CardService.InsertCard(req.body.card);
        }catch(ex){
            response = ex;
        }
        
        res.json(response);
    };

    async function updateCard(req, res, next){
        res.status(200);
        let response = null; 
        try{
            response = await cardService.CardService.UpdateCard(req.body.card);
        }catch(ex){
            response = ex;
        }
        
        res.json(response);
    };

    async function deleteCard(req, res, next){
        res.status(200);
        let response = null; 
        try{
            response = await cardService.CardService.DeleteCard(req.body.card);
        }catch(ex){
            response = ex;
        }
        
        res.json(response);
    };
}
exports.configure = configure;