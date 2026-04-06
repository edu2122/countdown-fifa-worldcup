export type CountryCode = 'canada' | 'mexico' | 'usa';

export type HostCity = {
	name: string;
	country: CountryCode;
	countryLabel: string;
	flag: string;
};

export const hostCities: HostCity[] = [
	{ name: 'Vancouver', country: 'canada', countryLabel: 'Canada', flag: '/flags/canada.svg' },
	{ name: 'Toronto', country: 'canada', countryLabel: 'Canada', flag: '/flags/canada.svg' },
	{ name: 'Mexico City', country: 'mexico', countryLabel: 'Mexico', flag: '/flags/mexico.svg' },
	{ name: 'Guadalajara', country: 'mexico', countryLabel: 'Mexico', flag: '/flags/mexico.svg' },
	{ name: 'Monterrey', country: 'mexico', countryLabel: 'Mexico', flag: '/flags/mexico.svg' },
	{ name: 'Atlanta', country: 'usa', countryLabel: 'USA', flag: '/flags/usa.svg' },
	{ name: 'Boston', country: 'usa', countryLabel: 'USA', flag: '/flags/usa.svg' },
	{ name: 'Dallas', country: 'usa', countryLabel: 'USA', flag: '/flags/usa.svg' },
	{ name: 'Houston', country: 'usa', countryLabel: 'USA', flag: '/flags/usa.svg' },
	{ name: 'Kansas City', country: 'usa', countryLabel: 'USA', flag: '/flags/usa.svg' },
	{ name: 'Los Angeles', country: 'usa', countryLabel: 'USA', flag: '/flags/usa.svg' },
	{ name: 'Miami', country: 'usa', countryLabel: 'USA', flag: '/flags/usa.svg' },
	{ name: 'New York/New Jersey', country: 'usa', countryLabel: 'USA', flag: '/flags/usa.svg' },
	{ name: 'Philadelphia', country: 'usa', countryLabel: 'USA', flag: '/flags/usa.svg' },
	{ name: 'San Francisco Bay Area', country: 'usa', countryLabel: 'USA', flag: '/flags/usa.svg' },
	{ name: 'Seattle', country: 'usa', countryLabel: 'USA', flag: '/flags/usa.svg' }
];
