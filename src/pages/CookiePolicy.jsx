function CookiePolicy() {
    return (
        <div className="flex-1 flex flex-col w-full">
            <section className="flex flex-col w-full">
                <div className="bg-primary flex-1 w-full flex flex-col items-center py-36">
                    <h1 className="text-4xl lg:text-6xl font-serif">
                        Cookie Policy
                    </h1>
                </div>

                <div className="w-full py-8 px-8 lg:py-12 lg:px-36 flex flex-col gap-4 lg:gap-8 text-muted-foreground font-light">
                    <div className="w-full">
                        <h6 className="font-normal">
                            LAST UPDATED: Oct 1, 2026
                        </h6>
                    </div>

                    <div className="w-full flex flex-col gap-4 py-4">
                        <p>
                            This Cookie Policy explains how <span className="font-semibold text-primary">Squeeko</span> ("Squeeko," "we," "us," or "our") uses cookies and similar tracking technologies on our website at <a href="/" className="font-mono text-blue-500 hover:underline">squeeko.ca</a> (the "Site") and within our SaaS web application platform (the "Services").

                        </p>
                        <p>
                            This policy should be read alongside our <a href="/legal/privacy-policy" className="font-mono text-blue-500 hover:underline">Privacy Policy</a>, which explains how we collect, use, and protect your personal information under Canadian privacy laws (including PIPEDA) and Ontario provincial regulations.
                        </p>
                    </div>

                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            What Are Cookies?
                        </h4>
                        <p>
                            Cookies are small text files placed on your computer, smartphone, or other device when you visit a website or use a web application. They are widely used to make websites work efficiently, store user preferences, enable secure logins, and provide analytical insights to platform owners.
                        </p>
                        <p>
                            In addition to traditional cookies, we may use similar technologies such as:
                        </p>

                        <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">
                            <li className="">
                                <span className="font-semibold text-muted-foreground">Local Storage / Session Storage:</span> Browser-based storage used to temporarily store application session states and user preferences (e.g., active classroom views).
                            </li>                                
                            <li className="">
                                <span className="font-semibold text-muted-foreground">Web Beacons / Pixels:</span> Tiny graphic files embedded in emails or web pages to measure engagement and delivery success.
                            </li>
                        </ul>

                    </div>

                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            Why We Use Cookies
                        </h4>

                        <p>
                            Squeeko uses cookies and tracking technologies for the following core operational purposes:
                        </p>

                        <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">
                            <li className="">
                                <span className="font-semibold text-muted-foreground">Authentication & Session Security:</span> To keep you signed in securely as you navigate through different areas of the Squeeko platform.
                            </li>
                            <li className="">
                                <span className="font-semibold text-muted-foreground">Preference Management:</span> To remember your workspace choices, active classroom selections, and language settings.
                            </li>
                            <li className="">
                                <span className="font-semibold text-muted-foreground">Performance & Debugging:</span> To monitor web app load times, identify technical errors, and ensure high system reliability.
                            </li>
                            <li className="">
                                <span className="font-semibold text-muted-foreground">Site Lead Attribution:</span> To understand how childcare operators find our marketing Site <a href="/" className="font-mono text-blue-500 hover:underline">squeeko.ca</a> and optimize our demo request experience.
                            </li>
                        </ul>
                    </div>

                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            Categories of Cookies We Use
                        </h4>

                        <p>
                            We categorize the cookies used on our Site and Services into three main types:
                        </p>
                        
                        <div className="flex flex-1 flex-col gap-2">
                            <h5 className="text-lg lg:text-xl text-muted-foreground font-semibold">
                                Strictly Necessary (Essential) Cookies
                            </h5>
                            
                            <p>
                                These cookies are mandatory for the operation of the Squeeko web application. Without these cookies, essential functions such as user login, row-level data isolation, and account authorization cannot function.
                            </p>

                            <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">
                                <li className="">
                                    <span className="font-semibold text-muted-foreground">Purpose:</span> User authentication, session security, tenant isolation, and CSRF protection.
                                </li>
                                <li className="">
                                    <span className="font-semibold text-muted-foreground">Duration:</span> Session (deleted when browser is closed) or persistent (up to 30 days for "Remember Me" authentication).
                                </li>
                                <li className="">
                                    <span className="font-semibold text-muted-foreground">Opt-Out:</span> Essential cookies cannot be disabled, as the platform cannot function without them.
                                </li>
                            </ul>
                        </div>
                        
                        <div className="flex flex-1 flex-col gap-2">
                            <h5 className="text-lg lg:text-xl text-muted-foreground font-semibold">
                                Functional Cookies
                            </h5>

                            <p>
                                Functional cookies allow Squeeko to remember choices you make (such as your account role, active centre location, or display preferences) to provide a tailored user experience.
                            </p>

                            <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground"> 
                                <li className="">
                                    <span className="font-semibold text-muted-foreground">Purpose:</span> Saving UI state preferences, active classroom tabs, and form progress.
                                </li>
                                <li className="">
                                    <span className="font-semibold text-muted-foreground">Duration:</span> Persistent (up to 1 year).
                                </li>
                            </ul>
                        </div>
                        
                        <div className="flex flex-1 flex-col gap-2">
                            <h5 className="text-lg lg:text-xl text-muted-foreground font-semibold">
                                Performance & Analytics Cookies
                            </h5>
                            
                            <p>
                                These cookies collect anonymized statistical data about how visitors interact with <a href="/" className="font-mono text-blue-500 hover:underline">squeeko.ca</a> and how logged-in users navigate our platform. This helps us optimize navigation and improve platform features.
                            </p>

                            <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">
                                <li className="">
                                    <span className="font-semibold text-muted-foreground">Purpose:</span> Tracking page view counts, feature adoption metrics, and session performance.
                                </li>
                                <li className="">
                                    <span className="font-semibold text-muted-foreground">Service Providers:</span> Privacy-compliant web and product analytics engines.
                                </li>
                                <li className="">
                                    <span className="font-semibold text-muted-foreground">Privacy Guarantee:</span> Analytics data is processed in aggregate. <span className="font-normal">Squeeko strictly excludes child records, medical notes, photos, and parent billing details from all analytics tracking.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            Third-Party Cookies & Integrations
                        </h4>

                        <p>
                            Squeeko integrates with trusted third-party service providers who may set cookies or storage items on your device to perform essential platform functions:
                        </p>

                        <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">
                            <li>
                                <span className="font-semibold text-muted-foreground">Stripe, Inc. (Payments):</span> Stripe sets necessary security and fraud detection cookies when parents or childcare administrators interact with payment, billing, or subscription portals. Please review <a href="https://stripe.com/en-ca/legal/cookies-policy" className="font-mono text-blue-500 hover:underline">Stripe's Cookie Policy</a> for details.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Supabase / Vercel (Infrastructure):</span> Our web hosting and database infrastructure services set technical cookies to route traffic, maintain secure API connections, and deliver fast load times.
                            </li>
                        </ul>
                    </div>


                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            Browser Push Notifications & Local Preferences
                        </h4>

                        <p>
                            When accessing Squeeko on a desktop or mobile web browser, you may be prompted to accept <span className="font-normal">Browser Push Notifications</span> for real-time updates (e.g., incident logs or parent messages).
                        </p>

                        <div className="flex flex-col gap-2">
                            <p>
                                Notification preferences are saved locally in your web browser. You can grant, revoke, or modify notification permissions at any time through your browser's site settings
                            </p>    
                            <p className="font-mono text-sm font-normal">
                                Settings &rsaquo; Privacy & Security &rsaquo; Site Settings &rsaquo; Notifications.
                            </p>
                        </div>
                    </div>


                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            How You Can Control & Manage Cookies
                        </h4>

                        <p>
                            You have choices regarding how cookies are used on your device:
                        </p>

                        <div className="flex flex-1 flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <h5 className="text-lg lg:text-xl text-muted-foreground font-semibold">
                                    Browser Controls
                                </h5>

                                <p>
                                    Most web browsers allow you to block, manage, or delete cookies through their settings menu. Please note that if you disable or block <span className="font-normal">Strictly Necessary Cookies</span>, you will not be able to log in or use the Squeeko software platform.
                                </p>

                                <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">
                                    <li>
                                        <span className="font-semibold text-muted-foreground">Google Chrome:</span> <span className="font-mono text-sm font-normal">Settings &rsaquo; Privacy and Security &rsaquo; Third-party cookies</span>
                                    </li>
                                    <li>
                                        <span className="font-semibold text-muted-foreground">Apple Safari:</span> <span className="font-mono text-sm font-normal">Preferences &rsaquo; Privacy &rsaquo; Block all cookies</span>
                                    </li>
                                    <li>
                                        <span className="font-semibold text-muted-foreground">Mozilla Firefox:</span> <span className="font-mono text-sm font-normal">Settings &rsaquo; Privacy & Security &rsaquo; Cookies and Site Data</span>
                                    </li>
                                    <li>
                                        <span className="font-semibold text-muted-foreground">Microsoft Edge:</span> <span className="font-mono text-sm font-normal">Settings &rsaquo; Cookies and site permissions</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h5 className="text-lg lg:text-xl text-muted-foreground font-semibold">
                                    Mobile Device Settings
                                </h5>

                                <p>
                                    If accessing Squeeko via a tablet or mobile device, you can adjust your device operating system settings to manage tracking permissions and storage.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            Updates to This Cookie Policy
                        </h4>

                        <p>
                            We may update this Cookie Policy periodically to reflect changes in our technology stack, third-party services, or applicable Canadian privacy regulations. Any updates will be posted on this page with an updated "Last Updated" date.
                        </p>
                    </div>


                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            Contact Us
                        </h4>

                        <p>
                            If you have any questions about our use of cookies or tracking technologies, please contact us at <a 
                                    href="mailto:squeekoapp@gmail.com" 
                                    className="font-normal font-mono uppercase text-sm hover:underline"
                                >
                                    squeekoapp@gmail.com
                                </a>
                        </p>
                    </div>
                </div>
            </section>


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
                content="https://www.squeeko.ca/og-image.png"
            />
            <meta
                property="og:image:alt"
                content="SQUEEKO Child Care Management Software Logo"
            />
        </div>
    );
}

export default CookiePolicy;
