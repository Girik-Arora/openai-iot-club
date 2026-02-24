import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://aodwnlnvuiqxjclspqcs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvZHdubG52dWlxeGpjbHNwcWNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5NDQ5NTUsImV4cCI6MjA4NzUyMDk1NX0.N_lUT6DtWVTlmJAK8YrenGh2-bKM0krNIA1jeBdmLMI"
);