export default [
    {
        channelId: "1403466465092567090",
        serverId: "1237419554167197817",
        token: "token", // put your bot token here directly
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "dnd", // "online", "idle", "dnd", "invisible", or "offline"
        },
        selfMute: true,
    },
];
