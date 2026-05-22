import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zglbpgsbvocfjcuszdch.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnbGJwZ3Nidm9jZmpjdXN6ZGNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzODU5NTUsImV4cCI6MjA5NDk2MTk1NX0.QpuGd4dbzmLSE194t5wu0CuIIx8O5FXKIQbmNLsduFI';

export const supabase = createClient(supabaseUrl, supabaseKey);
