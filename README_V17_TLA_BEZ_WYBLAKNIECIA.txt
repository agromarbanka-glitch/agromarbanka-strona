AGRO-MAR v17 — tła bez wyblaknięcia

Poprawka dotyczy WYŁĄCZNIE kodu strony.
Nie generowano żadnych zdjęć.

Co poprawiono:
- usunięto efekt mlecznej mgły / wyblaknięcia,
- zdjęcia hero pozostają wyraźne,
- tło można zmieniać z panelu admina,
- dodano osobne pole hero_background.

W panelu /admin:

theme:
- bottle
- white
- lightgreen
- orchard
- goldcream

hero_background:
- bottle
- white
- lightgreen
- orchard

Przykłady ustawień:
1. Białe tło:
theme = white
hero_background = white

2. Jasna zieleń:
theme = lightgreen
hero_background = lightgreen

3. Zieleń sadu:
theme = orchard
hero_background = orchard

4. Butelkowa zieleń:
theme = bottle
hero_background = bottle

Po wgraniu:
1. Usuń stare pliki z GitHub.
2. Wgraj całą paczkę v17.
3. Commit changes.
4. Poczekaj na deploy Vercel.
5. W Supabase uruchom ponownie SUPABASE_CMS_SEO_V11.sql.
6. Wejdź w /admin, ustaw theme i hero_background.
7. Kliknij Zapisz ustawienia.
8. Odśwież stronę główną CTRL+F5.
