Разделение контроллера на view и api, а так же добавление разных путей в router, один для api, другой обычный: 

app.use("/products", ProductViewRouter); // HTML
app.use("/api/products", ProductApiRouter); // JSON



Верификация и валидация в middleware, интерфейс для req для сохранения данных в поля по типу user