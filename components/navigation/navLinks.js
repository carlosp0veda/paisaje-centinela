export const NAV_LINKS = [
    { href: '/acerca', label: 'Paisaje Centinela' },
    { href: '/articulos', label: 'Artículos' },
    { href: '/recursos', label: 'Recursos' },
    { href: '/investigadores', label: 'Equipo' },
]

export const isActive = (pathname, href) => pathname === href || pathname.startsWith(`${href}/`)
