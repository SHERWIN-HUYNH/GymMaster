export class NotFoundException extends Error {
    status;
    constructor(message) {
        super(message);
        this.status = 404;
        this.message = message;
    }
}
export class BadRequestException extends Error {
    status;
    constructor(message) {
        super(message);
        this.status = 400;
        this.message = message;
    }
}
export class UnauthorizedException extends Error {
    status;
    constructor(message) {
        super(message);
        this.status = 401;
        this.message = message;
    }
}
export class ForbiddenException extends Error {
    status;
    constructor(message) {
        super(message);
        this.status = 403;
        this.message = message;
    }
}
export class ConflictException extends Error {
    status;
    constructor(message) {
        super(message);
        this.status = 409;
        this.message = message;
    }
}
