function checkLogin(username, password, callback) {
    setTimeout(() => {
        const mockAdminUser = "admin";
        const mockAdminPass = "secret123";

        if (username === mockAdminUser && password === mockAdminPass) {
            callback(null, { username: username, role: "admin" });
        } else {
            callback("Invalid username or password", null);
        }
    }, 1000);
}

function handleLoginResponse(error, user) {
    if (error) {
        console.error(`Login Failed: ${error}`);
        return;
    }
    console.log(`Login Successful! Welcome back, ${user.username}.`);
}

console.log("Submitting credentials...");
checkLogin("admin", "secret123", handleLoginResponse);
checkLogin("user1", "wrongpass", handleLoginResponse);
