export enum UserRole{
    ADMIN = "ADMIN",
    USER = "USER",
}
export default interface User{
    userId: number;
    name: string;
    email: string;
    hashPassword: string;
    role: UserRole;
}

export const userRules = {
    name: (value: string) => {return value.length > 8;},
    email: (value: string) => {return (/^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/).test(value);}
}

declare global{
    namespace Express
}