import { PRIVATE_DISCORD_WEBHOOK_URL } from "$env/static/private"

export async function load() {
    return {
        webhookURL: PRIVATE_DISCORD_WEBHOOK_URL
    }
}