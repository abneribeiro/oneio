

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h2>Public</h2>
            {children}
        </div>
    );
}
