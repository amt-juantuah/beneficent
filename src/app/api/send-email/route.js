import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const type = formData.get('type');
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const text = formData.get('text');
    const cv = formData.get('cv'); // This is a File object

    let attachments = [];

    if (cv && typeof cv.arrayBuffer === 'function') {
      const buffer = Buffer.from(await cv.arrayBuffer());
      attachments.push({
        filename: cv.name,
        content: buffer,
      });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.co.uk',
      port: 587,
      secure: false,
      auth: {
        user: process.env.IONOS_SMTP_ENQUIRY_EMAIL,
        pass: process.env.IONOS_SMTP_ENQUIRY_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.IONOS_SMTP_ENQUIRY_EMAIL,
      to: process.env.IONOS_SMTP_ENQUIRY_EMAIL,
      subject: subject || 'New message from website',
      text: text,
      attachments,
      replyTo: `"${name}" <${email}>`,
    };

    // send email (enquiry or job application) to admin
    await transporter.sendMail(mailOptions);


    // auto-response to sender
    if (email) {
      let html;
      if (type === 'career') {
        html = `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8f8f8;">
            <div style="max-width: 600px; margin: auto; background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
              
              <h2 style="color: #006d77;">Hi ${name || ''},</h2>
              <p style="font-size: 16px; color: #333;">
                Thank you for submitting your job application to Beneficent Care and Support.
              </p>
              <p style="font-size: 16px; color: #333;">
                Our team will carefully review your application and get back to you if your qualifications match our needs.
              </p>
              <hr style="margin: 20px 0;" />
              <p style="font-size: 14px; color: #888;">
                — Recruitment Team<br />
                <a href="https://www.beneficent.uk" style="color: #006d77;">www.beneficent.uk</a>
              </p>
              <div style="text-align: center; margin-bottom: 20px;">
                <img src="https://res.cloudinary.com/dwrjq5nfa/image/upload/fl_preserve_transparency/v1745285347/10_ili1mc.jpg?_s=public-apps" alt="Beneficent Logo" style="height: 50px;" />
              </div>
            </div>
          </div>
        `;
      } else {
        html = `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8f8f8;">
            <div style="max-width: 600px; margin: auto; background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
            
            <h2 style="color: #006d77;">Hi ${name || ''},</h2>
              <p style="font-size: 16px; color: #333;">
                Thank you for reaching out to Beneficent Care and Support.
              </p>
              <p style="font-size: 16px; color: #333;">
                We've received your enquiry and someone from our team will respond as soon as possible.
              </p>
              <hr style="margin: 20px 0;" />
              <p style="font-size: 14px; color: #888;">
                — Client Support Team<br />
                <a href="https://www.beneficent.uk" style="color: #006d77;">www.beneficent.uk</a>
              </p>
              <div style="text-align: center; margin-bottom: 20px;">
                <img src="https://res.cloudinary.com/dwrjq5nfa/image/upload/fl_preserve_transparency/v1745285347/10_ili1mc.jpg?_s=public-apps" alt="Beneficent Logo" style="height: 50px;" />
              </div>
            </div>
          </div>
        `;
      }
    
      await transporter.sendMail({
        from: `"Beneficent CS" <${process.env.IONOS_SMTP_ENQUIRY_EMAIL}>`,
        to: email,
        subject: type === 'career' ? 'Your application has been received' : "We've received your enquiry",
        html,
      });
    } 

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Email error:', err);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}