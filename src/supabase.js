import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qtyqsrjanlkosfsildgg.supabase.co'
const supabaseAnonKey = 'sb_publishable_aT1xRo9CsTneoHvyXrAwiA_1gIijNzF'
export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
)