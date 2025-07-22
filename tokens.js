// status can be "online", "idle", "dnd", or "invisible" or "offline"

export default [

    {

        channelId: "1395901896845295666",

        serverId: "1274375300959961138",

        token: process.env.TOKEN,

        selfDeaf: false,

        autoReconnect: {

            enabled: true,

            delay: 50, // ثواني

            maxRetries: 5,

        },

        presence: {

            status: "dnd",

        },

        selfMute: true,

    },

];
