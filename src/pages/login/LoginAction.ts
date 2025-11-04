import {redirect} from "react-router-dom";

export async function loginAction({ request }: { request: Request }) {
    const formData = await request.formData();
    const username = formData.get("username")?.toString().trim();

    if (!username || username.length < 2) {
        return { error: "Please enter at least 2 characters" };
    }

    // simulate async login delay
    await new Promise((res) => setTimeout(res, 400));

    localStorage.setItem("username", username);
    localStorage.setItem("isAuthenticated", "true");

    return redirect("/");
}