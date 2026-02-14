# Скрипт для загрузки изменений на GitHub
# Использование: Запустите этот файл после редактирования проекта

Write-Host "🔄 Загрузка изменений на GitHub..." -ForegroundColor Cyan

# Перейти в папку проекта
Set-Location "d:\ScamProject\vite-portfolio"

# Добавить все изменения
& "C:\Program Files\Git\cmd\git.exe" add .

# Создать commit (укажите своё описание)
$commitMessage = Read-Host "Введите описание изменений"
& "C:\Program Files\Git\cmd\git.exe" commit -m $commitMessage

# Загрузить на GitHub
& "C:\Program Files\Git\cmd\git.exe" push

Write-Host "✅ Готово! Изменения загружены на GitHub!" -ForegroundColor Green
Write-Host "🔗 https://github.com/murodxojasultonov/OurPortfolio" -ForegroundColor Yellow
