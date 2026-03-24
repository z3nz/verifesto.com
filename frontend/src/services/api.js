const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export async function submitInquiry(data) {
  const response = await fetch(`${API_URL}/api/intake/submit/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      full_name: data.fullName,
      email: data.email,
      phone: data.phone || '',
      company: data.company || '',
      vision: data.vision,
      nda_requested: data.ndaRequested || false,
    }),
  })
  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.detail || 'Submission failed. Please try again.')
  }
  return response.json()
}
