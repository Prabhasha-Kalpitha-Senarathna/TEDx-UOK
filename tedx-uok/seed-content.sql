-- Insert venue first
insert into public.venues (
  venue_id,
  name,
  address_line_1,
  city,
  google_maps_url,
  transport_info,
  parking_info,
  accessibility_info
) values (
  '11111111-1111-1111-1111-111111111111',
  'University of Kelaniya',
  'University of Kelaniya',
  'Kelaniya',
  'https://maps.google.com',
  'Accessible by public transport.',
  'Parking available on site.',
  'Wheelchair accessible venue.'
);

-- Insert event next
insert into public.events (
  event_id,
  name,
  date,
  theme,
  description,
  venue_id,
  is_active
) values (
  '22222222-2222-2222-2222-222222222222',
  'TEDx UoK 2026',
  '2026-08-15 09:00:00+05:30',
  'UNCHARTED',
  'An independently organised TEDx event at University of Kelaniya, bringing together curious minds to explore ideas that inspire dialogue, understanding, and meaningful change.',
  '11111111-1111-1111-1111-111111111111',
  true
);

-- Insert site settings
insert into public.settings (
  current_event_id,
  primary_cta_label,
  primary_cta_url,
  contact_email,
  social_links
) values (
  '22222222-2222-2222-2222-222222222222',
  'Register Now',
  '/register',
  'info@tedxuok.com',
  '{}'::jsonb
);

-- Optional blog post
insert into public.blog_posts (
  title,
  slug,
  content,
  author_name,
  is_published,
  published_at
) values (
  'UNCHARTED',
  'uncharted',
  'Progress begins at the edge of the known. UNCHARTED explores ideas born in uncertainty, where curiosity challenges convention, boundaries are questioned, and new perspectives emerge.',
  'TEDx UoK Team',
  true,
  now()
);