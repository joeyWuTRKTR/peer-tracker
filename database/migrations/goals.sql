create type goal_type as enum ('quit_bad_habit', 'exercise', 'learn_skill', 'read_books', 'meditation');

create table goals (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) not null,
  type goal_type not null,
  started_at timestamp with time zone default now() not null,
  ended_at timestamp with time zone not null,
  support_runner_id uuid references auth.users(id),
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- Enable RLS
alter table goals enable row level security;

-- Create policies
create policy "Users can view their own goals"
  on goals for select
  using (auth.uid() = user_id);

create policy "Users can insert their own goals"
  on goals for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own goals"
  on goals for update
  using (auth.uid() = user_id);

-- Create updated_at trigger
create function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_goals_updated_at
  before update on goals
  for each row
  execute function set_updated_at();

