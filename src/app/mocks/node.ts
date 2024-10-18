import {setupServer} from "msw/node";
import {handlers} from "@app/mocks/handlers.ts";

export const server = setupServer(...handlers);