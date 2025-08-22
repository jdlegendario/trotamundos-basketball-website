import { supabase, News, Event, Team, GalleryImage } from './supabase'

// =====================
// FUNCIONES PARA NOTICIAS
// =====================

export const newsService = {
  // Obtener todas las noticias
  async getAll(): Promise<News[]> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching news:', error)
      return []
    }
    return data || []
  },

  // Obtener noticias publicadas para el sitio web
  async getPublished(): Promise<News[]> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching published news:', error)
      return []
    }
    return data || []
  },

  // Crear una nueva noticia
  async create(news: Omit<News, 'id' | 'created_at' | 'updated_at'>): Promise<News | null> {
    const { data, error } = await supabase
      .from('news')
      .insert([news])
      .select()
      .single()
    
    if (error) {
      console.error('Error creating news:', error)
      return null
    }
    return data
  },

  // Actualizar una noticia
  async update(id: number, news: Partial<News>): Promise<News | null> {
    const { data, error } = await supabase
      .from('news')
      .update({ ...news, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      console.error('Error updating news:', error)
      return null
    }
    return data
  },

  // Eliminar una noticia
  async delete(id: number): Promise<boolean> {
    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error('Error deleting news:', error)
      return false
    }
    return true
  }
}

// =====================
// FUNCIONES PARA EVENTOS
// =====================

export const eventsService = {
  async getAll(): Promise<Event[]> {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true })
    
    if (error) {
      console.error('Error fetching events:', error)
      return []
    }
    return data || []
  },

  async getPublished(): Promise<Event[]> {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('published', true)
      .gte('date', new Date().toISOString().split('T')[0])
      .order('date', { ascending: true })
    
    if (error) {
      console.error('Error fetching published events:', error)
      return []
    }
    return data || []
  },

  async create(event: Omit<Event, 'id' | 'created_at' | 'updated_at'>): Promise<Event | null> {
    const { data, error } = await supabase
      .from('events')
      .insert([event])
      .select()
      .single()
    
    if (error) {
      console.error('Error creating event:', error)
      return null
    }
    return data
  },

  async update(id: number, event: Partial<Event>): Promise<Event | null> {
    const { data, error } = await supabase
      .from('events')
      .update({ ...event, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      console.error('Error updating event:', error)
      return null
    }
    return data
  },

  async delete(id: number): Promise<boolean> {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error('Error deleting event:', error)
      return false
    }
    return true
  }
}

// =====================
// FUNCIONES PARA EQUIPOS
// =====================

export const teamsService = {
  async getAll(): Promise<Team[]> {
    const { data, error } = await supabase
      .from('teams')
      .select('*')
      .order('name', { ascending: true })
    
    if (error) {
      console.error('Error fetching teams:', error)
      return []
    }
    return data || []
  },

  async getActive(): Promise<Team[]> {
    const { data, error } = await supabase
      .from('teams')
      .select('*')
      .eq('active', true)
      .order('name', { ascending: true })
    
    if (error) {
      console.error('Error fetching active teams:', error)
      return []
    }
    return data || []
  },

  async create(team: Omit<Team, 'id' | 'created_at' | 'updated_at'>): Promise<Team | null> {
    const { data, error } = await supabase
      .from('teams')
      .insert([team])
      .select()
      .single()
    
    if (error) {
      console.error('Error creating team:', error)
      return null
    }
    return data
  },

  async update(id: number, team: Partial<Team>): Promise<Team | null> {
    const { data, error } = await supabase
      .from('teams')
      .update({ ...team, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      console.error('Error updating team:', error)
      return null
    }
    return data
  },

  async delete(id: number): Promise<boolean> {
    const { error } = await supabase
      .from('teams')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error('Error deleting team:', error)
      return false
    }
    return true
  }
}

// =====================
// FUNCIONES PARA GALERÍA
// =====================

export const galleryService = {
  async getAll(): Promise<GalleryImage[]> {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching gallery:', error)
      return []
    }
    return data || []
  },

  async getByCategory(category: string): Promise<GalleryImage[]> {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching gallery by category:', error)
      return []
    }
    return data || []
  },

  async create(image: Omit<GalleryImage, 'id' | 'created_at'>): Promise<GalleryImage | null> {
    const { data, error } = await supabase
      .from('gallery')
      .insert([image])
      .select()
      .single()
    
    if (error) {
      console.error('Error creating gallery image:', error)
      return null
    }
    return data
  },

  async delete(id: number): Promise<boolean> {
    const { error } = await supabase
      .from('gallery')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error('Error deleting gallery image:', error)
      return false
    }
    return true
  }
}
