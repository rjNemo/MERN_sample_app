import * as ROLES from "./roles";

export const AUTHENTICATED = (authUser) => !!authUser.loggedIn;
export const ADMIN = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];
