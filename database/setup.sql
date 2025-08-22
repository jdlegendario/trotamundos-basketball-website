-- Crear tabla de noticias
CREATE TABLE IF NOT EXISTS news (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  image_url TEXT,
  author TEXT NOT NULL DEFAULT 'Admin',
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Crear tabla de eventos
CREATE TABLE IF NOT EXISTS events (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  location TEXT NOT NULL,
  image_url TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Crear tabla de equipos
CREATE TABLE IF NOT EXISTS teams (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  coach TEXT NOT NULL,
  image_url TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Crear tabla de galería
CREATE TABLE IF NOT EXISTS gallery (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insertar datos de ejemplo para noticias
INSERT INTO news (title, content, excerpt, author, published) VALUES
('¡Bienvenidos a Trotamundos!', 'Estamos emocionados de presentar nuestra nueva escuela de básquet. Nuestro objetivo es formar no solo grandes jugadores, sino también grandes personas con valores sólidos.', 'Nueva escuela de básquet con enfoque en valores y excelencia deportiva.', 'Equipo Trotamundos', true),
('Inscripciones Abiertas 2025', 'Ya están abiertas las inscripciones para la temporada 2025. Ofrecemos entrenamientos para todas las edades y niveles. ¡No te quedes sin tu lugar!', 'Inscripciones disponibles para la nueva temporada con cupos limitados.', 'Admin', true),
('Nuevo Entrenador Principal', 'Nos complace anunciar la llegada de nuestro nuevo entrenador principal, quien cuenta con más de 10 años de experiencia en básquet formativo.', 'Incorporación de entrenador experimentado para fortalecer nuestro equipo técnico.', 'Dirección', true);

-- Insertar datos de ejemplo para eventos
INSERT INTO events (title, description, date, time, location, published) VALUES
('Torneo Inaugural Trotamundos', 'Ven a conocer nuestras instalaciones y disfruta de un torneo amistoso entre nuestros equipos. Habrá premios y sorpresas para todos.', '2025-09-15', '09:00:00', 'Cancha Principal Trotamundos', true),
('Jornada de Puertas Abiertas', 'Visita nuestras instalaciones, conoce a nuestros entrenadores y descubre todo lo que Trotamundos tiene para ofrecer.', '2025-08-30', '10:00:00', 'Instalaciones Trotamundos', true),
('Clínica de Básquet Gratuita', 'Clínica gratuita para niños de 8 a 12 años. Una oportunidad perfecta para que los más pequeños descubran su pasión por el básquet.', '2025-09-01', '14:00:00', 'Cancha Exterior', true);

-- Insertar datos de ejemplo para equipos
INSERT INTO teams (name, category, description, coach, active) VALUES
('Trotamundos Mini', 'Sub-10', 'Nuestro equipo más joven, enfocado en aprender los fundamentos del básquet mientras se divierten.', 'Coach María González', true),
('Trotamundos Junior', 'Sub-14', 'Equipo intermedio donde desarrollamos habilidades técnicas y tácticas más avanzadas.', 'Coach Carlos Ruiz', true),
('Trotamundos Senior', 'Sub-18', 'Nuestro equipo más competitivo, preparando a los jóvenes para el básquet de alto nivel.', 'Coach Roberto Silva', true),
('Trotamundos Femenino', 'Femenino', 'Equipo dedicado al desarrollo del básquet femenino con entrenamientos especializados.', 'Coach Ana Martínez', true);

-- Insertar datos de ejemplo para galería
INSERT INTO gallery (title, description, image_url, category) VALUES
('Entrenamiento Matutino', 'Sesión de entrenamiento de fundamentos con el equipo Sub-14', 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800', 'entrenamientos'),
('Torneo Local 2024', 'Nuestros jugadores en acción durante el torneo local', 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800', 'competencias'),
('Nuevas Instalaciones', 'Vista de nuestra cancha principal recién inaugurada', 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800', 'instalaciones'),
('Ceremonia de Premiación', 'Entrega de trofeos a nuestros campeones juveniles', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800', 'eventos');

-- Crear políticas RLS (Row Level Security) - Opcional para mayor seguridad
-- ALTER TABLE news ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE events ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

-- Política para permitir lectura pública
-- CREATE POLICY "Allow public read access" ON news FOR SELECT USING (published = true);
-- CREATE POLICY "Allow public read access" ON events FOR SELECT USING (published = true);
-- CREATE POLICY "Allow public read access" ON teams FOR SELECT USING (active = true);
-- CREATE POLICY "Allow public read access" ON gallery FOR SELECT USING (true);
