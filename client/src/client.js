import { createClient } from '@supabase/supabase-js'

const URL = 'https://nychlgwrocrtcvielbxj.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55Y2hsZ3dyb2NydGN2aWVsYnhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NjEwNTIsImV4cCI6MjAyODUzNzA1Mn0.SQteX0vADMm6jcs1F-raykFXh_try88Pa4-yQIz_s_g';

export const supabase = createClient(URL, API_KEY);