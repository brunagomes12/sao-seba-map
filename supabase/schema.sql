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

-- Progress keyed by a secret "travel code" (uuid) that lives in the user's devices.
-- No direct table access: only the two functions below, which require knowing the code.
create table public.visits (
  code uuid not null,
  spot_id text not null references public.spots(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (code, spot_id)
);
alter table public.visits enable row level security;

create function public.get_visits(p_code uuid)
returns setof text
language sql stable security definer set search_path = ''
as $$ select spot_id from public.visits where code = p_code $$;

create function public.set_visit(p_code uuid, p_spot text, p_done boolean)
returns void
language plpgsql security definer set search_path = ''
as $$
begin
  if p_done then
    insert into public.visits (code, spot_id) values (p_code, p_spot) on conflict do nothing;
  else
    delete from public.visits where code = p_code and spot_id = p_spot;
  end if;
end $$;

revoke all on function public.get_visits(uuid) from public;
revoke all on function public.set_visit(uuid, text, boolean) from public;
grant execute on function public.get_visits(uuid) to anon, authenticated;
grant execute on function public.set_visit(uuid, text, boolean) to anon, authenticated;
