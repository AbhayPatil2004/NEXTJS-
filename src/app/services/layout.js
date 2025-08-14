export const metadata = {
    title : "My app"
    
}

export default function servicesLayout({children}){
    return (
        <div>
            <h1>Header</h1>
            {children}
            <h1>Footer</h1>
        </div>
    )
}