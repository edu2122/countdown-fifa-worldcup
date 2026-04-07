type SupportedLocale = 'es' | 'en' | 'fr'
type SupportedFilter = 'all' | 'canada' | 'mexico' | 'usa'

const supportedLocales: SupportedLocale[] = ['es', 'en', 'fr']
const supportedFilters: SupportedFilter[] = ['all', 'canada', 'mexico', 'usa']

const appEl = document.getElementById('countdown-app')

if (!appEl) {
	console.warn('Countdown root not found')
} else {
	const readDataset = (key: string, fallback: string) => appEl.dataset[key] ?? fallback

	const kickoffDate = new Date('2026-06-11T14:00:00-05:00')

	const getStoredLocale = () => localStorage.getItem('preferred-locale')
	const getStoredFilter = () => localStorage.getItem('preferred-city-filter')

	const getPathLocale = (): SupportedLocale => {
		const firstSegment = window.location.pathname.split('/').filter(Boolean)[0]
		return supportedLocales.includes(firstSegment as SupportedLocale)
			? (firstSegment as SupportedLocale)
			: 'es'
	}

	const redirectToStoredLocaleIfNeeded = () => {
		const storedLocale = getStoredLocale()
		if (!storedLocale || !supportedLocales.includes(storedLocale as SupportedLocale)) {
			return
		}

		const pathname = window.location.pathname
		const firstSegment = pathname.split('/').filter(Boolean)[0]
		const hasLocalePrefix = supportedLocales.includes(firstSegment as SupportedLocale)

		if (!hasLocalePrefix && storedLocale !== 'es') {
			const target = `/${storedLocale}${pathname === '/' ? '' : pathname}`
			window.location.replace(target)
		}
	}

	redirectToStoredLocaleIfNeeded()

	const currentLocale = (appEl.dataset.locale as SupportedLocale | undefined) ?? getPathLocale()
	localStorage.setItem('preferred-locale', currentLocale)

	document.querySelectorAll<HTMLElement>('[data-locale-link]').forEach((link) => {
		link.addEventListener('click', () => {
			const locale = link.dataset.localeLink
			if (locale && supportedLocales.includes(locale as SupportedLocale)) {
				localStorage.setItem('preferred-locale', locale)
			}
		})
	})

	const daysEl = document.getElementById('days')
	const hoursEl = document.getElementById('hours')
	const minutesEl = document.getElementById('minutes')
	const secondsEl = document.getElementById('seconds')
	const statusEl = document.getElementById('status')
	const kickoffLocalEl = document.getElementById('kickoff-local')

	const format = (value: number) => String(value).padStart(2, '0')

	const localeMap: Record<SupportedLocale, string> = {
		es: 'es-ES',
		en: 'en-US',
		fr: 'fr-FR'
	}

	const updateKickoffLocal = () => {
		if (!kickoffLocalEl || Number.isNaN(kickoffDate.getTime())) {
			return
		}

		const localeCode = localeMap[currentLocale] ?? 'es-ES'
		const visitorTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
		const formatter = new Intl.DateTimeFormat(localeCode, {
			timeZone: visitorTimeZone,
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		})

		kickoffLocalEl.textContent = `${formatter.format(kickoffDate)} (${visitorTimeZone})`
	}

	const updateCountdown = () => {
		if (!daysEl || !hoursEl || !minutesEl || !secondsEl || !statusEl) {
			return
		}

		const statusLoading = readDataset('statusLoading', 'Actualizando contador...')
		const statusStarted = readDataset('statusStarted', 'Ya empezo el Mundial 2026!')
		const diffMs = kickoffDate.getTime() - Date.now()

		if (Number.isNaN(diffMs) || diffMs <= 0) {
			daysEl.textContent = '00'
			hoursEl.textContent = '00'
			minutesEl.textContent = '00'
			secondsEl.textContent = '00'
			statusEl.textContent = statusStarted
			return
		}

		const totalSeconds = Math.floor(diffMs / 1000)
		const days = Math.floor(totalSeconds / 86400)
		const hours = Math.floor((totalSeconds % 86400) / 3600)
		const minutes = Math.floor((totalSeconds % 3600) / 60)
		const seconds = totalSeconds % 60

		daysEl.textContent = format(days)
		hoursEl.textContent = format(hours)
		minutesEl.textContent = format(minutes)
		secondsEl.textContent = format(seconds)
		statusEl.textContent = statusLoading
	}

	const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filter-btn')
	const cityCards = document.querySelectorAll<HTMLElement>('.city-card')

	const applyFilter = (filter: SupportedFilter) => {
		filterButtons.forEach((button) => {
			const isActive = button.dataset.filter === filter
			button.classList.toggle('filter-btn-active', isActive)
			button.setAttribute('aria-pressed', String(isActive))
		})

		cityCards.forEach((card) => {
			const country = card.dataset.country as SupportedFilter | undefined
			const isVisible = filter === 'all' || filter === country
			if (isVisible) {
				card.removeAttribute('hidden')
			} else {
				card.setAttribute('hidden', 'hidden')
			}
		})

		localStorage.setItem('preferred-city-filter', filter)
	}

	filterButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const selectedFilter = button.dataset.filter as SupportedFilter | undefined
			if (selectedFilter && supportedFilters.includes(selectedFilter)) {
				applyFilter(selectedFilter)
			}
		})
	})

	const initialFilter = getStoredFilter()
	if (initialFilter && supportedFilters.includes(initialFilter as SupportedFilter)) {
		applyFilter(initialFilter as SupportedFilter)
	} else {
		applyFilter('all')
	}

	updateKickoffLocal()
	updateCountdown()
	setInterval(updateCountdown, 1000)
}
