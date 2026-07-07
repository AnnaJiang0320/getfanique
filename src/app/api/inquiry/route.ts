import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const formspreeResponse = await fetch('https://formspree.io/f/xgobwpep', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    const name = data.get('name') || 'N/A';
    const whatsapp = data.get('whatsapp') || 'N/A';
    const sendKey = 'SCT362786Trqu9hcO76SKRrLYYed2Bl5Vb';
    if (sendKey) {
      await fetch(`https://sctapi.ftqq.com/${sendKey}.send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ title: `Inquiry: ${name}`, desp: `Name: ${name}\nWA: ${whatsapp}` })
      });
    }
    return NextResponse.json({ ok: true });
  } catch (e: any) { return NextResponse.json({ ok: false, error: e.message }, { status: 500 }); }
}
