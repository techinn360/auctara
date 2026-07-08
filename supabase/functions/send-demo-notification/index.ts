const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const recipients = ['hamed@techinn360.com', 'imran@techinn360.com']

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    const emailFrom = Deno.env.get('EMAIL_FROM')

    if (!resendApiKey || !emailFrom) {
      return new Response(
        JSON.stringify({ error: 'Missing RESEND_API_KEY or EMAIL_FROM secret.' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    const payload = await req.json()
    const {
      leadId,
      firstName,
      lastName,
      email,
      phone,
      company,
      industry,
      volume,
      calendlyEventUri,
      calendlyInviteeUri,
    } = payload

    const fullName = [firstName, lastName].filter(Boolean).join(' ').trim()

    const html = `
      <h2>New Book a Demo Confirmation</h2>
      <p>A new demo booking has been confirmed.</p>
      <ul>
        <li><strong>Lead ID:</strong> ${leadId ?? 'N/A'}</li>
        <li><strong>Name:</strong> ${fullName || 'N/A'}</li>
        <li><strong>Email:</strong> ${email || 'N/A'}</li>
        <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
        <li><strong>Company:</strong> ${company || 'N/A'}</li>
        <li><strong>Industry:</strong> ${industry || 'N/A'}</li>
        <li><strong>Volume:</strong> ${volume || 'N/A'}</li>
        <li><strong>Calendly Event:</strong> ${calendlyEventUri || 'N/A'}</li>
        <li><strong>Calendly Invitee:</strong> ${calendlyInviteeUri || 'N/A'}</li>
      </ul>
    `

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: emailFrom,
        to: recipients,
        subject: `New demo booking: ${fullName || email || 'Unknown lead'}`,
        reply_to: email || undefined,
        html,
      }),
    })

    const resendData = await resendResponse.json()

    if (!resendResponse.ok) {
      return new Response(JSON.stringify({ error: resendData }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ ok: true, data: resendData }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unexpected error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
