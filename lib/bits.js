'use strict';

const request = require('./request');
const querystring = require('querystring');

module.exports = {
    cheermotes: (data, callback) => {
        // Authentication: none
        // Required Parameters: none
        // Optional Parameters: channelID

        let params = {};
        if(data.channelID) params.channel_id = data.channelID;
        if(data.channel_id) params.channel_id = data.channelID;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/bits/actions?${querystring.stringify(params)}`;

        request('GET', options, callback);
    }
};