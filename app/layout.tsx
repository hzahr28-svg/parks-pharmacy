export const metadata = {
  title: "Parks Pharmacy | Albion, MI",
  description:
    "Independent community pharmacy in Albion, Michigan offering refills, transfers, packaging, delivery, and clinical support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
