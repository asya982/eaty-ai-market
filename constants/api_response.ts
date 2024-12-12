export const Status = {
    INVALID_CREDENTIALS: 401,
    BAD_REQUEST: 400,
    CREATED: 201,
    SUCCESS: 200,
    SERVER_ERROR: 500,
    FORBIDDEN: 403,
    NOT_FOUND: 404
}

export const Errors = {
    [Status.BAD_REQUEST]: 'Provided data is not correct',
    [Status.INVALID_CREDENTIALS]: 'Invalid credentials',
    [Status.CREATED]: (entity: string) => `${entity} successfully created`,
    [Status.SUCCESS]: 'Success',
    [Status.FORBIDDEN]: 'You do not have sufficient access',
    [Status.NOT_FOUND]: (entity: string) => `${entity} was not found`,
    ALREADY_EXISTS: (entity: string) => `${entity} is already exists`,
}