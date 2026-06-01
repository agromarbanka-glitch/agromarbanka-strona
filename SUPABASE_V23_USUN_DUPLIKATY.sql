
-- AGRO-MAR v23 — usunięcie duplikatów po wielokrotnym uruchomieniu SQL
-- Uruchom w Supabase SQL Editor → Run

-- 1. Usuń powielone owoce, zostawiając pierwszy wpis dla każdej nazwy
delete from fruits a
using fruits b
where a.name = b.name
  and a.id > b.id;

-- 2. Usuń powielone kierunki transportu
delete from transport_directions a
using transport_directions b
where a.name = b.name
  and a.id > b.id;

-- 3. Usuń powielone elementy galerii
delete from gallery_items a
using gallery_items b
where a.title = b.title
  and coalesce(a.image_url,'') = coalesce(b.image_url,'')
  and a.id > b.id;

-- 4. Usuń powielone komunikaty dla producentów
delete from producer_posts a
using producer_posts b
where a.title = b.title
  and coalesce(a.image_url,'') = coalesce(b.image_url,'')
  and a.id > b.id;

-- 5. Upewnij się, że menu dla producenta istnieje, ale nie powielaj go
insert into site_sections (slug, menu_label, title, body, sort_order, is_visible)
values (
  'producent',
  'Dla Producenta Rolnego',
  'Dla Producenta Rolnego',
  'Aktualności, komunikaty, zdjęcia i dokumenty dla producentów rolnych.',
  25,
  true
)
on conflict (slug) do update set
  menu_label = excluded.menu_label,
  title = excluded.title,
  body = excluded.body,
  sort_order = excluded.sort_order,
  is_visible = true;
