import { createClient } from '@supabase/supabase-js'

// Estas son las credenciales que necesitarás obtener de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://tu-proyecto.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'tu-clave-anonima'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para TypeScript
export interface News {
  id?: number
  title: string
  content: string
  excerpt: string
  image_url?: string
  author: string
  created_at?: string
  updated_at?: string
  published: boolean
}

export interface Event {
  id?: number
  title: string
  description: string
  date: string
  time: string
  location: string
  image_url?: string
  created_at?: string
  updated_at?: string
  published: boolean
}

export interface Team {
  id?: number
  name: string
  category: string
  description: string
  coach: string
  image_url?: string
  created_at?: string
  updated_at?: string
  active: boolean
}

export interface GalleryImage {
  id?: number
  title: string
  description?: string
  image_url: string
  category: string
  created_at?: string
}
