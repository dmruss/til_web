// auth.js
let auth0Client = null;

async function initAuth() {
  auth0Client = await createAuth0Client({
    domain: "dev-j43dknw3zgcjd58k.us.auth0.com",
    clientId: "nwrZ4TR4Yx4CV0NRxnxZcOp9clEkHOiI",
  });

  const isAuthenticated = await auth0Client.isAuthenticated();

  if (!isAuthenticated) {
    if (window.location.pathname !== "./login.html") {
      window.location.replace("./login.html");
    }
  } else {
    if (window.location.pathname === "./login.html") {
      window.location.replace("./index.html");
    }
  }

  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    await auth0Client.handleRedirectCallback();
    window.history.replaceState({}, document.title, "./index.html");
  }
}

async function login() {
  await auth0Client.loginWithRedirect({
    redirect_uri: window.location.origin + "./index.html",
  });
}

async function logout() {
  auth0Client.logout({
    returnTo: window.location.origin + "./login.html",
  });
}

window.onload = initAuth;
