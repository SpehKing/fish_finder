// netlify/functions/proxy.js
export async function handler(event, context) {
  const res = await fetch('http://lukamali.com/ttn2value/data/70B3D57ED007083A.json');
  const data = await res.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };
}