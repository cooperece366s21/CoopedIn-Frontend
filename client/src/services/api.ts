export const BACKEND_URL = "http://localhost:4567";

function getCurrentUserId(): string {
    return localStorage.getItem("user") || "";
}

function setCurrentUser(user: User): void {
    localStorage.setItem("user", user.id);
}
export type User = {
    id: string;
    name: string;
};