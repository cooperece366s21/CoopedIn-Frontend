export const BACKEND_URL = "http://localhost:4567";
export async function getTable(){
    const res = await fetch('${BACKEND_URL}/job/Internship/feed',{
        method:"GET",
        mode:"cors",
        headers:{
            "Content-Type": "application/json",
        }
    })
        .then(function(response){
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
export type Feed = {
    shelves: Shelf[];
};

export type Shelf = {
    title: String;
    shelfItems: Content[];
};

export type Content = {
    id: string;
    title: string;

};
//export default exports