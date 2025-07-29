function core() {
    if (location.pathname.startsWith("/feed/")) {
        console.log("linkedin feed encountered");
        chrome.storage.local.get(
            ['in_posts_seen', 'in_time_spend', 'in_posts_speer', 'IN_TIME_LIM', 'IN_POSTS_LIM', 'in_hourly_reset', 'in_daily_reset'],
            ({ in_posts_seen = 0, in_time_spend = 0, in_posts_speer = 0, IN_TIME_LIM = 10, IN_POSTS_LIM = 10, in_hourly_reset = 0, in_daily_reset = 0 }) => {
                chrome.storage.local.set({
                    "LINKEDIN WOKING": true
                });
                const posts_urn = document.getElementsByClassName("scaffold-finite-scroll__content")[0];
                const timerID = setInterval(() => {
                    console.log("in timerID setInterval");
                    console.log(posts_urn.querySelector(`[data-finite-scroll-hotkey-item="${IN_POSTS_LIM - 1}"]`));
                    if (posts_urn.querySelector(`[data-finite-scroll-hotkey-item="${IN_POSTS_LIM - 1}"]`)) {
                        clearInterval(timerID);
                        console.log("POSTS LIMIT REACHED!!!!!!!!!!!!!!!!!");
                        posts_urn.parentNode.removeChild(posts_urn.nextElementSibling); // can use posts_urn.nextElementSibling.remove() but this one supports older (IE11) as well

                        chrome.storage.local.set({
                            "LIMIT REACHED": "true"
                        });

                        let i = 0;
                        const overflowed = posts_urn.querySelector(`[data-finite-scroll-hotkey-item="${IN_POSTS_LIM + i}"]`);
                        while (overflowed) {
                            console.log("remoing overflowed:", IN_POSTS_LIM + i);
                            overflowed.remove();
                            i++;
                            overflowed = posts_urn.querySelector(`[data-finite-scroll-hotkey-item="${IN_POSTS_LIM + i}"]`);
                        }

                        return;
                    }
                }, 1000);
            }
        );
    } else {
        console.log("linkedin but not core i.e. not /feed/");
        setTimeout(core, 1000);
    }
}

core();