import 'dotenv/config';
import { init } from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

// Initialize Sentry with the Profiling integration
// No export required as we only need to initialize Sentry in the app
init({
    dsn: process.env.SENTRY_DSN,
    integrations: [
        nodeProfilingIntegration()
    ],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
})
