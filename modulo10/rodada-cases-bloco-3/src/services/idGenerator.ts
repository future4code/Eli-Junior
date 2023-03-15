import { v4 } from "uuid";

export class idGenerator {
    generate(): string {
        return v4()
    }
}

export default new idGenerator()