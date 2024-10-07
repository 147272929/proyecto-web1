// Definir cuentas de acceso
const users = [
    { username: "estudiante1", password: "pass123", role: "student" },
    { username: "profesor1", password: "pass123", role: "professor" },
    { username: "admin1", password: "pass123", role: "admin" }
];

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;

    // Validar que todos los campos estén llenos
    if (username === "" || password === "" || role === "") {
        document.getElementById("errorMsg").innerText = "Todos los campos son obligatorios.";
        return false;
    }

    // Buscar el usuario en el array de cuentas
    const user = users.find(u => u.username === username && u.password === password && u.role === role);

    if (!user) {
        document.getElementById("errorMsg").innerText = "Credenciales incorrectas. Verifique su usuario, contraseña o rol.";
        return false;
    } else {
        // Redireccionar al panel correspondiente según el rol
        if (user.role === "student") {
            window.location.href = "student_dashboard.html";
        } else if (user.role === "professor") {
            window.location.href = "professor_dashboard.html";
        } else if (user.role === "admin") {
            window.location.href = "admin_dashboard.html";
        }
        return false; // Evita que el formulario se envíe
    }
}
