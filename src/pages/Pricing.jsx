function Pricing() {
    return (
        <div className="flex flex-col flex-1 w-9/10 lg:w-3/4 lg:py-16 py-8">
            <div className="w-full flex justify-center items-center pb-8">
                <h1 className="text-4xl lg:text-5xl font-serif">Pricing</h1>
            </div>

            <div className="flex flex-col justify-center items-center w-full text-muted-foreground">
                <p>
                    Copy the format that Brightwheel uses. Dont actually disclose pricing, just ask questions to add user to sales funnel. probably copy paste the form from the home page for now.
                </p>
            </div>

            {/* 
            
            <StructData schema={localBusinessSchema} />
            <StructData schema={organizationSchema} />
            <StructData schema={websiteSchema} /> 
            
            */}

            <title>Child Care Management Software | SQUEEKO</title>

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
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.squeeko.ca/" />
            <meta
                property="og:image"
                content="https://www.squeeko.ca/media/og-image.jpg"
            />
            <meta
                property="og:image:alt"
                content="SQUEEKO Child Care Management Software Logo"
            />
        </div>
    );
}

export default Pricing;
