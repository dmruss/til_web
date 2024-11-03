
document.getElementById('login').addEventListener('click', async () => {
    // const auth0 = await createAuth0Client(auth0Config);
    const auth0 = await new Auth0Client(auth0Config);

    // Redirect to Auth0 login page
    await auth0.loginWithRedirect();
});
