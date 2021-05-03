export const BACKEND_URL = "http://localhost:4567";

function getCurrentUserId(): string {
    return localStorage.getItem("authtoken") || "";
}

function setCurrentUser(token: string): void {
    localStorage.setItem("authtoken", token);
}
export type User = {
    id: string;
    name: string;
};

export async function login(
    username: string,
    password: string
    )
{
    const response = await fetch(`${BACKEND_URL}/login`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        let token: User = await response.json();
        setCurrentUser(token);
        return { value: token, status: "success" };
    } else {
        return { error: response.status.toString(), status: "failure" };
    }
}