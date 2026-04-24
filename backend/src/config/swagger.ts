import authDoc from '../docs/auth.docs.json'
import config from '../docs/swagger.json'

const swaggerDocumentation = {
    ...config,
    paths: {
        ...authDoc
    }
}

export { swaggerDocumentation };