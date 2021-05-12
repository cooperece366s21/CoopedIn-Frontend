export const BACKEND_URL = "http://localhost:4567";
export type Jobs = {
    shelves: Shelf[];
};
export type Shelf = {
    title: String;
    shelfItems: Job[];
};
export type Job = {
    id: string;
    company: string;
    jobTitle: string;
    available: boolean;
    location: string;
};
export function getTable_Internship(): Promise<any>{
    return  fetch(`${BACKEND_URL}/job/Internship/feed`,{
        method:"GET",
        mode:"cors",
        headers:{
            "Content-Type": "application/json",
        }
    })
        .then(response => {
            return response.json();
        })
}
export function getTable_FullTime(): Promise<any>{
    return  fetch(`${BACKEND_URL}/job/FullTime/feed`,{
        method:"GET",
        mode:"cors",
        headers:{
            "Content-Type": "application/json",
        }
    })
        .then(response => {
            return response.json();
        })
}
export function getTable_PartTime(): Promise<any>{
    return  fetch(`${BACKEND_URL}/job/PartTime/feed`,{
        method:"GET",
        mode:"cors",
        headers:{
            "Content-Type": "application/json",
        }
    })
        .then(response => {
            return response.json();
        })
}
export function getTable_Coop(): Promise<any>{
    return  fetch(`${BACKEND_URL}/job/Coop/feed`,{
        method:"GET",
        mode:"cors",
        headers:{
            "Content-Type": "application/json",
        }
    })
        .then(response => {
            return response.json();
        })
}
function getCurrentUserId(): string {
    return localStorage.getItem("authtoken") || "";
}

function setCurrentUser(user: User): void {
    localStorage.setItem("authtoken", user.id);
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

//export default exports
