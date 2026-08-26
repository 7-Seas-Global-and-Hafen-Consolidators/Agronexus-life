import { useEffect } from 'react'

const SCRIPT_ID = 'agronexus-google-translate-script'

export default function AgroNexusTranslate() {
  useEffect(() => {
    const mount = () => {
      if (!window.google?.translate?.TranslateElement) return
      const host = document.getElementById('google_translate_element')
      if (!host || host.dataset.ready === '1') return

      host.dataset.ready = '1'
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'pt',
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      )
    }

    window.googleTranslateElementInit = mount

    if (window.google?.translate?.TranslateElement) {
      mount()
      return
    }

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script')
      script.id = SCRIPT_ID
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)
    }

    return () => {
      if (window.googleTranslateElementInit === mount) {
        delete window.googleTranslateElementInit
      }
    }
  }, [])

  return (
    <div className="agx-translate" aria-label="Traduzir site com Google Translate">
      <span className="agx-translate__label">Idioma</span>
      <div id="google_translate_element" />
    </div>
  )
}
