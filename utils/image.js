// Contentful sirve imágenes desde images.ctfassets.net; otros archivos (p. ej. PDFs
// subidos como portada) llegan desde assets.ctfassets.net y rompen next/image.
export const imageOrNull = (url) => {
  if (!url) return null
  return url.startsWith('https://images.ctfassets.net') ? url : null
}
