import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate()

    return (
        <div className="flex-1 flex flex-col justify-center items-center w-full">
            <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-16 w-full bg-[url('/404.svg')] bg-cover bg-center">
                <div className="flex">
                    <h1 className="text-5xl font-serif text-center font-semibold">
                        404 <br/>
                        Not Found
                    </h1>
                </div>
                <div className="w-1/4">
                    <Button
                        variant="default"
                        className="w-full cursor-pointer p-6 border border-primary-foreground"
                        onClick={() => navigate('/')}
                        >
                        Go Home!
                    </Button>
                </div>
            </section>

            {/* 
            
            <StructData schema={localBusinessSchema} />
            <StructData schema={organizationSchema} />
            <StructData schema={websiteSchema} /> 
            
            */}

            <title>
                404 Not Found | SQUEEKO
            </title>

            <meta
                name="description"
                content="SQUEEKO is childcare management software built to help centers stay organized, stay compliant, connect with families, and get paid in one simple platform."
            />

            <meta 
                property="og:title"
                content="Child Care Management Software | SQUEEKO"
            />
            <meta
                property="og:description"
                content="SQUEEKO is childcare management software built to help centers stay organized, stay compliant, connect with families, and get paid in one simple platform."
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content="https://www.squeeko.ca/"
            />
            <meta
                property="og:image"
                content="https://www.squeeko.ca/media/og-image.jpg"
            />
            <meta
                property="og:image:alt"
                content="SQUEEKO Child Care Management Software Logo"
            />
        </div>
    )
}

export default NotFound