import {createClient} from '@supabase/supabase-js';

const URL='https://cqsekdnqnlntnyqdgmqh.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxc2VrZG5xbmxudG55cWRnbXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3NTgxMTAsImV4cCI6MjAzNDMzNDExMH0.FHn4k8uyAQIIwYzY1FG4N0RWiAuulhXJWDQUafdJ3jg';
export const supabase=createClient(URL,API_KEY)