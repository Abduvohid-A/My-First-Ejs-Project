import { app } from "./src/app.js";
import configuration from "./src/config/configuration.js";

const { PORT } = configuration;

app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`);
});