// Cuenta palabras de un documento de texto enriquecido de Contentful
const textoPlano = (node) => {
  if (!node) return ''
  if (node.nodeType === 'text') return node.value ?? ''
  return (node.content ?? []).map(textoPlano).join(' ')
}

// Minutos de lectura estimados (~200 palabras por minuto)
export const minutosDeLectura = (documento) => {
  const palabras = textoPlano(documento).split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(palabras / 200))
}
