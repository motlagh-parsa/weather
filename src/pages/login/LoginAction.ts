import {redirect} from "react-router-dom";

const dispatchAuthEvent = () => {
    window.dispatchEvent(new Event('authStateChanged'));
};

export async function loginAction({request}: { request: Request }) {
    const formData = await request.formData();
    const username = formData.get("username")?.toString().trim();

    if (!username || username.length < 2) {
        return {error: "Please_enter_at_least_2_characters"};
    }

    await new Promise((res) => setTimeout(res, 400));

    localStorage.setItem("username", username);
    localStorage.setItem("isAuthenticated", "true");

    dispatchAuthEvent();

    return redirect("/");
}