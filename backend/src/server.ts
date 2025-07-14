import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { validatorCompiler, serializerCompiler, ZodTypeProvider, jsonSchemaTransform} from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { authRoutes } from "./modules/auth/routes";
import { userRoutes } from "./modules/users/routes";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)
app.register(fastifyCors, { origin: "*" })

app.register(fastifySwagger, { 
    openapi: {
        info: {
            title: "Typed API",
            version: "1.0.0"
        }
    },
    transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi, {
    routePrefix: "/docs",
})

app.get("/", () => {
    return "I'm alive"
})

app.register(authRoutes);
app.register(userRoutes);

app.listen({ port: 3000 }).then(() => {
    console.log("Server is running on port 3000");
});