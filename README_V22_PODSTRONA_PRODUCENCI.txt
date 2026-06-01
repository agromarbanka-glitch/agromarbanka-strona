AGRO-MAR v22 — osobna podstrona dla Producenta Rolnego

Zmiany:
- zakładka „Dla Producenta Rolnego” prowadzi na osobną podstronę /producenci,
- bieżące komunikaty nie są już na stronie głównej,
- w panelu admina dodano sekcję:
  „Dla Producenta Rolnego — komunikaty, zdjęcia i pliki”,
- można dodawać tytuł, kategorię, treść, zdjęcie, plik/PDF, kolejność, widoczność i przypięcie na górze,
- zdjęcia w podstronie producentów nie powinny być ucinane.

Jak dodać komunikat:
1. Wejdź w /admin.
2. Znajdź „Dla Producenta Rolnego — komunikaty, zdjęcia i pliki”.
3. Kliknij Dodaj.
4. Wpisz:
   title — tytuł
   category — np. Komunikat / Skup / Dokumenty
   body — treść
   image_url — np. /images/nazwa-zdjecia.jpg
   file_url — np. /files/dokument.pdf albo zostaw puste
   sort_order — np. 10, 20, 30
   is_visible — zaznaczone
   is_pinned — zaznacz, jeśli ma być najważniejsze
5. Kliknij Zapisz.

Po wgraniu v22:
1. Usuń stare pliki z GitHub.
2. Wgraj całą paczkę v22.
3. Commit changes.
4. Poczekaj na deploy Vercel.
5. W Supabase uruchom SUPABASE_CMS_SEO_V11.sql.
6. Sprawdź /producenci.
