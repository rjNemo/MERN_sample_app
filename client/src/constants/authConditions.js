export const AUTHENTICATED = (authUser) => !!authUser;
export const ADMIN = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];
