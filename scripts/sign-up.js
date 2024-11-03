document.getElementById('signUp').addEventListener('click', async () => {
    const auth0 = await createAuth0Client(auth0Config);

    // Redirect to Auth0 sign-up page
    await auth0.loginWithRedirect({
        screen_hint: "signup"
    });
});
