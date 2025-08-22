# 🎨 Animaciones Premium Apple MacBook Pro - Referencia de Implementación

> **Fuente:** https://www.apple.com/la/macbook-pro/  
> **Fecha de análisis:** 22 de agosto de 2025  
> **Estado:** Documentado para implementación futura  

## 🚀 **1. SCROLL PARALLAX AVANZADO**

### **Descripción:**
- Diferentes elementos se mueven a velocidades distintas durante el scroll
- Efectos de profundidad en múltiples capas
- Elementos que aparecen y desaparecen con el scroll

### **Implementación CSS:**
```css
.parallax-container {
  overflow-x: hidden;
}

.parallax-slow {
  transform: translateY(calc(var(--scroll) * 0.5px));
}

.parallax-fast {
  transform: translateY(calc(var(--scroll) * 1.2px));
}

.parallax-reverse {
  transform: translateY(calc(var(--scroll) * -0.3px));
}
```

### **Implementación JS:**
```javascript
window.addEventListener('scroll', () => {
  const scroll = window.pageYOffset;
  document.documentElement.style.setProperty('--scroll', scroll);
});
```

---

## 🎬 **2. VIDEO STICKY/PINNING**

### **Descripción:**
- Videos que se "pegan" en la pantalla mientras scrolleas
- Transiciones fluidas entre secciones de video
- Morphing de contenido mientras el video permanece fijo

### **Implementación CSS:**
```css
.video-sticky-container {
  height: 300vh; /* 3x viewport height */
  position: relative;
}

.video-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-content {
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.video-morph {
  transform: scale(var(--video-scale, 1));
  border-radius: calc(var(--video-progress, 0) * 20px);
}
```

---

## 🎭 **3. ANIMACIONES DE REVELADO AVANZADAS**

### **Descripción:**
- Elementos que aparecen con fade + slide combinados
- Stagger animations - elementos aparecen uno después del otro
- Masks que revelan contenido progresivamente

### **Implementación CSS:**
```css
.reveal-mask {
  overflow: hidden;
  position: relative;
}

.reveal-content {
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-content.active {
  transform: translateY(0);
  opacity: 1;
}

.stagger-container .reveal-content {
  transition-delay: calc(var(--stagger-index) * 0.1s);
}

.text-reveal {
  background: linear-gradient(90deg, transparent 0%, white 50%, transparent 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: textReveal 2s ease-out;
}

@keyframes textReveal {
  from { background-position: -100% 0; }
  to { background-position: 100% 0; }
}
```

---

## 🌀 **4. 3D TRANSFORMS SOFISTICADAS**

### **Descripción:**
- Rotaciones en 3D del MacBook con scroll
- Perspective transforms - elementos que giran en 3D
- Scale + rotate combinados para transiciones premium

### **Implementación CSS:**
```css
.transform-3d-container {
  perspective: 1000px;
  perspective-origin: center center;
}

.macbook-3d {
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.macbook-rotate {
  transform: 
    rotateX(calc(var(--scroll-progress) * 15deg))
    rotateY(calc(var(--scroll-progress) * 25deg))
    scale(calc(1 + var(--scroll-progress) * 0.2));
}

.floating-3d {
  animation: floating3D 4s ease-in-out infinite;
}

@keyframes floating3D {
  0%, 100% { 
    transform: translateY(0) rotateX(0deg) rotateY(0deg); 
  }
  25% { 
    transform: translateY(-10px) rotateX(5deg) rotateY(2deg); 
  }
  50% { 
    transform: translateY(0) rotateX(0deg) rotateY(-2deg); 
  }
  75% { 
    transform: translateY(-5px) rotateX(-5deg) rotateY(2deg); 
  }
}
```

---

## 💎 **5. GLASS MORPHISM AVANZADO**

### **Descripción:**
- Backgrounds con blur y transparencia
- Efectos de cristal con gradientes
- Overlays semitransparentes con backdrop-filter

### **Implementación CSS:**
```css
.glass-advanced {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(40px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 0.6s;
}

.glass-card:hover::before {
  left: 100%;
}
```

---

## ✨ **6. MICRO-ANIMACIONES PREMIUM**

### **Descripción:**
- Hover effects con scale + shadow
- Loading states con skeleton animations
- Button morphing - botones que cambian forma suavemente

### **Implementación CSS:**
```css
.btn-apple-advanced {
  background: linear-gradient(135deg, #007AFF, #0056b3);
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  color: white;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateZ(0); /* GPU acceleration */
}

.btn-apple-advanced::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.btn-apple-advanced:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 
    0 10px 25px rgba(0, 122, 255, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

.btn-apple-advanced:hover::before {
  left: 100%;
}

.btn-apple-advanced:active {
  transform: translateY(0) scale(0.98);
}

/* Loading Skeleton */
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

---

## 📜 **7. SCROLL-TRIGGERED ANIMATIONS**

### **Descripción:**
- GSAP ScrollTrigger style effects
- Elementos que se animan según posición del scroll
- Progress bars que avanzan con el scroll

### **Implementación JS:**
```javascript
// Intersection Observer para activar animaciones
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      
      // Progress animation
      if (entry.target.classList.contains('progress-bar')) {
        const progressValue = entry.target.dataset.progress;
        entry.target.style.setProperty('--progress', progressValue + '%');
      }
      
      // Counter animation
      if (entry.target.classList.contains('counter')) {
        animateCounter(entry.target);
      }
    }
  });
}, observerOptions);

// Counter Animation
function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const duration = 2000;
  const start = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(target * easeOutCubic);
    
    element.textContent = current.toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}
```

### **Implementación CSS:**
```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #007AFF, #00C896);
  transform: scaleX(var(--scroll-progress, 0));
  transform-origin: left;
  transition: transform 0.1s ease-out;
  z-index: 1000;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(0, 122, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: var(--progress, 0%);
  background: linear-gradient(90deg, #007AFF, #00C896);
  border-radius: 4px;
  transition: width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

---

## 🔤 **8. TYPOGRAPHY ANIMATIONS**

### **Descripción:**
- Counter animations - números que incrementan
- Text reveal línea por línea
- Gradient text que cambia color

### **Implementación CSS:**
```css
.gradient-text {
  background: linear-gradient(
    45deg,
    #007AFF,
    #00C896,
    #FF6B6B,
    #4ECDC4,
    #45B7D1
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 4s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.text-reveal-lines {
  overflow: hidden;
}

.text-reveal-lines span {
  display: inline-block;
  transform: translateY(100%);
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: calc(var(--line-index) * 0.1s);
}

.text-reveal-lines.active span {
  transform: translateY(0);
}

.typewriter {
  overflow: hidden;
  border-right: 2px solid #007AFF;
  white-space: nowrap;
  animation: 
    typewriter var(--duration, 3s) steps(var(--steps, 40)) 1s both,
    blinkCursor 1s step-end infinite;
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blinkCursor {
  50% { border-color: transparent; }
}
```

---

## 🎯 **9. CUBIC-BEZIER AVANZADAS**

### **Valores específicos de Apple:**
```css
/* Apple's signature easing */
.apple-ease { 
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); 
}

/* Bounce effect */
.apple-bounce { 
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); 
}

/* Smooth acceleration */
.apple-smooth { 
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); 
}

/* Quick start, slow end */
.apple-decelerate { 
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); 
}
```

---

## 🚀 **10. PERFORMANCE OPTIMIZATIONS**

### **GPU Acceleration:**
```css
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}

.smooth-scroll {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
```

### **Reduce Repaints:**
```css
.optimized-animation {
  will-change: transform, opacity;
  contain: layout style paint;
  transform: translateZ(0);
}
```

---

## 📋 **PLAN DE IMPLEMENTACIÓN**

### **Fase 1 - Básica (Ya implementada):**
- ✅ Animaciones fade, slide, scale básicas
- ✅ Hover effects simples
- ✅ Glass morphism básico

### **Fase 2 - Intermedia (Siguiente):**
- [ ] Scroll parallax avanzado
- [ ] 3D transforms en cards
- [ ] Counter animations
- [ ] Progress bars animadas

### **Fase 3 - Avanzada (Futuro):**
- [ ] Video sticky/pinning
- [ ] Reveal masks complejas
- [ ] Micro-animaciones premium
- [ ] Typography animations

### **Fase 4 - Expert (Opcional):**
- [ ] GSAP integration
- [ ] Custom scroll triggers
- [ ] Morphing transitions
- [ ] Advanced parallax scenes

---

## 🔧 **COMPONENTES PARA CREAR**

1. **ScrollParallax.tsx** - Componente de parallax avanzado
2. **VideoSticky.tsx** - Videos que se pegan durante scroll
3. **RevealMask.tsx** - Animaciones de revelado con máscaras
4. **Transform3D.tsx** - Transformaciones 3D complejas
5. **GlassAdvanced.tsx** - Glass morphism premium
6. **CounterAnimation.tsx** - Contadores animados
7. **ProgressBar.tsx** - Barras de progreso animadas
8. **TypeWriter.tsx** - Efectos de máquina de escribir

---

## 📝 **NOTAS IMPORTANTES**

- Todas las animaciones usan `cubic-bezier(0.25, 0.46, 0.45, 0.94)` para consistencia con Apple
- GPU acceleration con `transform: translateZ(0)` y `will-change`
- Usar `Intersection Observer` para performance óptima
- Considerar `prefers-reduced-motion` para accesibilidad
- Testear en diferentes dispositivos y navegadores

---

**🎯 Estado actual:** Documentación completa lista para implementación  
**🚀 Próximo paso:** Elegir qué animación implementar primero  
**💡 Recomendación:** Empezar con Scroll Parallax o Counter Animations  
