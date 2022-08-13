import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';

export const appRouter = trpc
    .router()
    .query('get-games', {
        input: z.object({ platform: z.number(), genre: z.number() }),
        async resolve({ input }) {
            console.log(input);
            return input;
        }
    });

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => null,
});