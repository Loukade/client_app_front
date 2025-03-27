/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type User = {
    id: string;
    username: string;
    password: string;
    role: User.role;
};
export namespace User {
    export enum role {
        USER = 'user',
        ADMIN = 'admin',
    }
}

