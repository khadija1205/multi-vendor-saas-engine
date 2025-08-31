export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;
    public readonly details?: any;
    
    constructor(message: string, statusCode: number, isOperational = true, details?: any) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.details = details;
        (Error as any).captureStackTrace(this, AppError);
    }
}


// Not found Error
export class NotFoundError extends AppError{
    constructor(message = 'Resources not found') {
        super(message, 404);
    }
}


// Validation Error (Used for Joi/Zod/react-hook-form validation error)
export class ValidationError extends AppError{
    constructor(message = 'Invalid Request data', details?: any) {
        super(message, 400, true, details);
    }
}


// Authentication Error
export class AuthError extends AppError{
    constructor(message = 'Unauthorized') {
        super(message, 401);
    }
}


// Forbidden Error (for insufficient Permissions)
export class ForbiddenError extends AppError{
    constructor(message = 'Forbidden Access') {
        super(message, 403);
    }
}


//Database Error
export class DatabaseError extends AppError{
    constructor(message = 'Database Error', details?: any) {
        super(message, 500, true, details);
    }
}


// Rate Limit Error (If user exceeds API limits)
export class RateLimitError extends AppError{
    constructor(message = 'Too many requests, please try again later') {
        super(message, 429);
    }
}