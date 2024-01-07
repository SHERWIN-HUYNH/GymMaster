import { Hono } from 'hono';
import { serve } from "@hono/node-server";
const bootstrap = async () => {
    const app = new Hono().basePath('/api');
    app.get('/', (c) => c.text('Hello world 23332142 TRUNG NE'));
    serve(app);
    console.log("TEST API");
};
bootstrap();
