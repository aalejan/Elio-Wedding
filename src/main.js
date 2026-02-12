import './style.css'
import { initI18n } from './i18n.js'

// Initialize language system
initI18n()

// Video modal
const openVideoBtn = document.getElementById('open-video-modal')
const closeVideoBtn = document.getElementById('close-video-modal')
const videoModal = document.getElementById('video-modal')
const proposalVideo = document.getElementById('proposal-video')

if (openVideoBtn && videoModal) {
  openVideoBtn.addEventListener('click', () => {
    videoModal.classList.remove('hidden')
    videoModal.classList.add('flex')
    document.body.style.overflow = 'hidden'
    if (proposalVideo) proposalVideo.play()
  })

  closeVideoBtn.addEventListener('click', () => {
    videoModal.classList.add('hidden')
    videoModal.classList.remove('flex')
    document.body.style.overflow = ''
    if (proposalVideo) proposalVideo.pause()
  })

  // Close on backdrop click
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      videoModal.classList.add('hidden')
      videoModal.classList.remove('flex')
      document.body.style.overflow = ''
      if (proposalVideo) proposalVideo.pause()
    }
  })

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) {
      videoModal.classList.add('hidden')
      videoModal.classList.remove('flex')
      document.body.style.overflow = ''
      if (proposalVideo) proposalVideo.pause()
    }
  })
}

// Zelle modal
const openZelleBtn = document.getElementById('open-zelle-modal')
const closeZelleBtn = document.getElementById('close-zelle-modal')
const zelleModal = document.getElementById('zelle-modal')

if (openZelleBtn && zelleModal) {
  openZelleBtn.addEventListener('click', () => {
    zelleModal.classList.remove('hidden')
    zelleModal.classList.add('flex')
    document.body.style.overflow = 'hidden'
  })

  closeZelleBtn.addEventListener('click', () => {
    zelleModal.classList.add('hidden')
    zelleModal.classList.remove('flex')
    document.body.style.overflow = ''
  })

  zelleModal.addEventListener('click', (e) => {
    if (e.target === zelleModal) {
      zelleModal.classList.add('hidden')
      zelleModal.classList.remove('flex')
      document.body.style.overflow = ''
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !zelleModal.classList.contains('hidden')) {
      zelleModal.classList.add('hidden')
      zelleModal.classList.remove('flex')
      document.body.style.overflow = ''
    }
  })
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const menuIcon = document.getElementById('menu-icon')

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('flex')

    if (isOpen) {
      mobileMenu.classList.remove('flex')
      mobileMenu.classList.add('hidden')
      menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16')
    } else {
      mobileMenu.classList.remove('hidden')
      mobileMenu.classList.add('flex')
      menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12')
    }
  })

  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('flex')
      mobileMenu.classList.add('hidden')
      menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16')
    })
  })
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      const navHeight = 70
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  })
})

// RSVP form submission to Google Forms
const rsvpForm = document.getElementById('rsvp-form')
if (rsvpForm) {
  rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const submitBtn = rsvpForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent
    submitBtn.disabled = true
    submitBtn.textContent = '...'

    const params = new URLSearchParams(new FormData(rsvpForm))
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSeoj-RCwc8Iv1KxPJpnyl7SYlm1OPh1vIQtYzXk9oJOYstVLw/formResponse?' + params.toString()

    const img = new Image()
    img.onload = img.onerror = () => {
      submitBtn.textContent = document.documentElement.lang === 'pt' ? 'Enviado!' : 'Sent!'
      submitBtn.classList.remove('bg-sage', 'hover:bg-sage-dark')
      submitBtn.classList.add('bg-green-700')
      rsvpForm.reset()
      setTimeout(() => {
        submitBtn.textContent = originalText
        submitBtn.classList.remove('bg-green-700')
        submitBtn.classList.add('bg-sage', 'hover:bg-sage-dark')
        submitBtn.disabled = false
      }, 3000)
    }
    img.src = url
  })
}

// Fade in elements on scroll
if ('IntersectionObserver' in window) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in')
    observer.observe(section)

    // Fallback: if section is already in viewport, show it immediately
    const rect = section.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.classList.add('fade-in-visible')
    }
  })

  // Safety fallback: ensure all content is visible after 2 seconds
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('fade-in-visible')
    })
  }, 2000)
}
