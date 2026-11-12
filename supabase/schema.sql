-- Project: sao-seba-map (zedpnwlnndiuxfvgfkyd). Public read-only table of spots.
create table public.spots (
  id text primary key,
  nome text not null,
  tipo text not null check (tipo in ('praia','trilha','cachoeira','passeio')),
  emoji text,
  cidade text not null default 'sao-sebastiao',
  lat double precision not null,
  lng double precision not null,
  descricao text not null default '',
  tags text[] not null default '{}'
);
alter table public.spots enable row level security;
create policy "spots are public to read" on public.spots for select to anon, authenticated using (true);
create index spots_cidade_idx on public.spots (cidade);
