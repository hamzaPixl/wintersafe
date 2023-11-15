import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import en from '../locales/en.json'
import fr from '../locales/fr.json'
import nl from '../locales/nl.json'
import ar from '../locales/ar.json'
import pl from '../locales/pl.json'
import ru from '../locales/ru.json'

const messages = {
  en,
  nl,
  fr,
  ru,
  ar,
  pl,
}

import injected from '../injected.json'

export const useLocale = () => {
  const router = useRouter()

  const flattenedMessages = useMemo(() => messages[router.locale], [router])

  const switchLocale = useCallback(
    (locale) => {
      if (locale === router.locale) {
        return
      }

      const path = router.asPath
      return router.push(path, path, { locale })
    },
    [router],
  )
  return {
    locale: router.locale || injected.defaultLocale,
    switchLocale,
    messages: flattenedMessages,
  }
}
