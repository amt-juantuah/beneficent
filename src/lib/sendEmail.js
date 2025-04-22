
export default async function sendEmail(data, isFormData = false) {
  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: isFormData ? undefined : { 'Content-Type': 'application/json' },
      body: isFormData ? data : JSON.stringify(data),
    });

    const result = await res.json();
    return result.success;
  } catch (err) {
    console.error('Send email error:', err);
    return false;
  }
}
