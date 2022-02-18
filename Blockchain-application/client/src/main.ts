import { createApp } from "vue";
import App from "./App.vue";
import "./style.scss";
import { useSocket } from "./useSocket";
import { createLabox, LButton, LInput, LLoading, LTooltip } from "@larmbox/labox";
import { useLabox } from "@larmbox/labox";
useSocket().connect();
createApp(App)
  .use(
    createLabox({
      components: [LButton, LInput, LTooltip, LLoading],
    })
  )
  .mount("#app");

const { setTheme } = useLabox();

setTheme("default");
