import dbInit from "./adapters/output/db/init";
import { startExpressApp } from "./adapters/input/rest";


// Initialize database
(async () => {
  await dbInit();
})();

// Start express server
startExpressApp();
