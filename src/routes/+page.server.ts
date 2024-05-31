import { DISCORD_WEBHOOK_URL } from "$env/static/private"

export async function load() {
    return {
        webhookURL: DISCORD_WEBHOOK_URL
    }
}