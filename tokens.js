// status can be "online", "idle", "dnd", or "invisible" or "offline"

export default [

    {

        channelId: "1402895543742763131",

        serverId: "1237419554167197817",

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
