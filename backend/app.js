import express from "express"
import moviesRoutes from "./src/routers/movies.js"
import customersRoutes from "./src/routers/customers.js"
import registerCustomerRoutes from "./src/routers/registerCustomers.js"
import registerEmployeeRoutes from "./src/routers/registerEmployees.js"
import employee from "./src/routers/employees.js"
import login from "./src/routers/login.js"
import logout from "./src/routers/logout.js"
import recoveryPassword from "./src/routers/recoveryPassword.js"


import cookieParser from "cookie-parser"


//creo una constatnte igual a la libreria que importe
const app = express();

//permitir los archivos json
app.use(express.json())
app.use(cookieParser())

//definir las rutas de las funciones en la app
app.use("/api/movies", moviesRoutes)
app.use("/api/customers", customersRoutes)
app.use("/api/registercustomers", registerCustomerRoutes)
app.use("/api/employees", employee)
app.use("/api/registeremployee", registerEmployeeRoutes)
app.use("/api/login", login)
app.use("/api/logout", logout)
app.use("/api/recoveryPassword", recoveryPassword)


export default app;
                      