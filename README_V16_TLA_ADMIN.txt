AGRO-MAR v16 — tła zmieniane z panelu admina

Poprawka:
- nie generujemy żadnych obrazów,
- dodane zostało osobne pole w panelu: hero_background,
- tło pierwszej strony można zmieniać z panelu admina,
- motywy są wyraźnie inne.

W panelu /admin dostępne pola:

1. theme
Możliwe wartości:
- bottle
- white
- lightgreen
- orchard
- goldcream

2. hero_background
Możliwe wartości:
- white
- lightgreen
- orchard
- bottle

Przykłady:
- białe tło: theme = white, hero_background = white
- jasna zieleń: theme = lightgreen, hero_background = lightgreen
- tło sadu: theme = orchard, hero_background = orchard
- butelkowa zieleń: theme = bottle, hero_background = bottle

Po wgraniu:
1. Wgraj całą paczkę v16 na GitHub.
2. Commit changes.
3. Poczekaj na deploy Vercel.
4. W Supabase uruchom ponownie plik SUPABASE_CMS_SEO_V11.sql.
5. W /admin ustaw theme i hero_background.
6. Kliknij Zapisz ustawienia.
7. Odśwież stronę główną CTRL+F5.
