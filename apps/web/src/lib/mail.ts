import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onbording@resend.dev",
    to: email,
    subject: "Two-factor authentication",
    html: `
        <p>Here is your two-factor authentication code:</p>
        <h3>${token}</h3>
    `,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `
        <p>Click the link below to reset your password.</p>
        <a href="${confirmLink}">Reset your password</a>
    `,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email address",
    html: `
        <p>Click the link below to confirm your email address.</p>
        <a href="${confirmLink}">Confirm your email</a>
    `,
  });
};
