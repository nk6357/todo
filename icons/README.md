#!/bin/bash
# Генерация PWA иконок для приложения ЕГЭ 2026

# Этот скрипт создает необходимые иконки для PWA приложения
# Требует: ImageMagick (convert), или используйте онлайн генератор иконок

# Если у вас нет изображения с логотипом, можно использовать это:
# 1. Откройте https://realfavicongenerator.net/ 
# 2. Загрузите свое изображение (мин. 560x560 px)
# 3. Скачайте ZIP и распакуйте в папку icons/

# Если используется ImageMagick:
# convert icon-1024.png -resize 512x512 icon-512x512.png
# convert icon-1024.png -resize 192x192 icon-192x192.png

# Макет PWA иконки должен быть:
# - Размер: мин. 1024x1024 px
# - Формат: PNG с прозрачностью
# - Цвета: в стиле вашего приложения (красные оттенки)

# Папка icons/ должна содержать:
# - icon-192x192.png (192x192 px, PNG)
# - icon-512x512.png (512x512 px, PNG)
# - icon-1024x1024.png (1024x1024 px, PNG, опционально)

echo "Для использования PWA приложения на iPhone (iOS):"
echo "1. Загустите иконки в папку: icons/"
echo "   - icon-192x192.png"
echo "   - icon-512x512.png"
echo "   - icon-1024x1024.png (опционально)"
echo ""
echo "2. Откройте на iPhone в Safari: https://your-domain.com"
echo ""
echo "3. Нажмите кнопку 'Поделиться' (квадрат со стрелкой)"
echo ""
echo "4. Выберите 'На экран Домой' (Add to Home Screen)"
echo ""
echo "5. Приложение будет работать офлайн!"
echo ""
echo "Как создать иконки:"
echo "- Используйте realfavicongenerator.net"
echo "- Или преобразуйте PNG: convert original.png -resize 192x192 icon-192x192.png"
