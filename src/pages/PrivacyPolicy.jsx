function PrivacyPolicy() {
    return (
        <div className="flex-1 flex flex-col w-full">
            <section className="flex flex-col w-full">
                <div className="bg-primary flex-1 w-full flex flex-col items-center py-36">
                    <h1 className="text-4xl lg:text-6xl font-serif">
                        Privacy Policy
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
                            Welcome to <span className="font-semibold text-primary">Squeeko</span> ("Squeeko," "we," "us," or "our"). Squeeko provides a cloud-based childcare management platform designed for licensed childcare centres, including standalone locations, home-based licensed providers, and school-based centres (the "Services").
                        </p>
                        <p>
                            This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you visit our website at <a href="/" className="font-mono text-blue-500 hover:underline">squeeko.ca</a> (the "Site") or use our web application.
                        </p>
                    </div>

                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            Important Legal Distinction: Role of Squeeko vs. Childcare Centres
                        </h4>
                        <p>
                            Under Canadian privacy laws (including the <span className="font-normal">Personal Information Protection and Electronic Documents Act</span> or <span className="font-normal">PIPEDA</span>) and applicable Ontario provincial legislation:
                        </p>

                        <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">
                            <li>
                                <span className="font-semibold text-muted-foreground">Squeeko as a Data Controller:</span> We are the "Data Controller" for personal information collected directly from visitors to our Site, our direct business subscribers (childcare owners/operators), and user account login credentials.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Squeeko as a Data Processor:</span> When licensed childcare centres, owners, administrators, or Early Childhood Educators (ECEs) use Squeeko to store, manage, and process information about enrolled children, parents/guardians, medical/allergy notes, and classroom logs ("Child Care Data"), <span className="font-normal">the Childcare Centre is the Data Controller</span>. Squeeko acts strictly as a <span className="font-normal">Data Processor</span> (or service provider) carrying out instructions on behalf of the Childcare Centre.
                            </li>
                        </ul>

                        <p>
                            Questions regarding child records, attendance, or daily media logs should be directed to the respective licensed Childcare Centre.
                        </p>

                    </div>

                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            Information We Collect
                        </h4>

                        <h5 className="text-lg lg:text-xl text-muted-foreground font-semibold">
                            Information Provided Directly to Us
                        </h5>

                        <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">
                            <li>
                                <span className="font-semibold text-muted-foreground">Account & Contact Information:</span> When a childcare centre registers or when an administrator, ECE, or parent creates an account, we collect names, email addresses, phone numbers, role titles, and account passwords.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Child & Household Information (Processed on behalf of Centres):</span> Childcare centres and authorized staff enter details about children, including full name, date of birth, classroom assignments, attendance records, incident/accident reports, and photos or media uploads.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Health & Medical Information:</span> Childcare centres may collect allergy details, dietary restrictions, and authorized medication administration instructions.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Parent & Guardian Details:</span> Contact details, emergency contact information, and billing details.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Lead Generation (Site Visitors):</span> When you request a demo or submit a sales contact form on our Site, we collect your name, email address, phone number, and childcare centre details.
                            </li>
                        </ul>

                        <h5 className="text-lg lg:text-xl text-muted-foreground font-semibold">
                            Payment Information
                        </h5>

                        <ul className="flex flex-col gap-2">
                            <li>
                                All payments, tuition fees, and subscription billing are processed directly by our third-party PCI-compliant payment processor, <span className="font-normal font-mono">Stripe, Inc.</span>
                            </li>
                            <li>
                                Squeeko does not store or process raw credit card numbers or bank account details on our servers. Please review <a href="https://stripe.com/privacy" className="font-mono text-blue-500 hover:underline">Stripe's Privacy Policy</a> for details on how Stripe handles payment data.
                            </li>
                        </ul>

                        <h5 className="text-lg lg:text-xl text-muted-foreground font-semibold">
                            Automatically Collected Information & Device Data
                        </h5>
                        
                        <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">
                            <li>
                                <span className="font-semibold text-muted-foreground">Log Data & Technical Details:</span> IP addresses, browser types, device information, operating systems, access times, and system interaction logs.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Browser Push Notifications:</span> If enabled, we use browser WebPush APIs to deliver in-app alert notifications. Notification banners delivered to your device browser contain generic operational alerts and do not contain sensitive child health or medical records in plain text.
                            </li>
                        </ul>

                    </div>

                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            How We Use Information
                        </h4>

                        <p>
                            We use collected information for the following business purposes:
                        </p>

                        <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">
                            <li>
                                <span className="font-semibold text-muted-foreground">To Provide and Maintain the Platform:</span> Managing user accounts, enabling classroom logging, facilitating in-app communication, rendering daily activity feeds, and tracking attendance.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Billing and Account Management:</span> Processing subscription payments and invoicing through Stripe.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Customer Support & Sales:</span> Responding to inquiries, sending demo information, and resolving technical support tickets.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">System Security & Debugging:</span> Detecting, preventing, and addressing security incidents, fraud, or technical bugs.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Legal & Regulatory Compliance:</span> Meeting legal obligations under applicable federal and provincial laws in Canada.
                            </li>
                        </ul>

                    </div>

                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            How Information is Shared
                        </h4>

                        <p>
                            We do <span className="font-normal">not</span> sell, rent, or trade personal information to third parties. We only disclose information under the following limited circumstances:
                        </p>

                        <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">
                            <li>
                                <span className="font-semibold text-muted-foreground">Childcare Centres & Authorized Users:</span> Information regarding a child is shared strictly within the assigned childcare centre and with that child's verified parent/guardian through role-based access controls (RBAC).
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Third-Party Service Providers (Sub-Processors):</span> We share data with trusted vendors who perform essential technical infrastructure services on our behalf, including:
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Database & Storage Services:</span> Cloud hosting and database management infrastructure (e.g., Supabase / PostgreSQL).
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Frontend & Backend Hosting:</span> Web app delivery platforms (e.g., Vercel, Fly.io).
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Payment Gateways:</span> Stripe for processing payment transactions.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Business Transfers:</span> If Squeeko is involved in a merger, acquisition, reorganization, or sale of assets, user data may be transferred as part of that transaction, subject to standard confidentiality commitments.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Legal Obligations:</span> We may disclose information if required to do so by law, court order, subpoena, or government authority.
                            </li>
                        </ul>
                    </div>

                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            Photo Sharing and In-App Media Rules
                        </h4>

                        <p>
                            Squeeko allows childcare staff to share daily photos, videos, and activity logs with parents/guardians via direct in-app messaging or an in-app daily feed.
                        </p>

                        <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">
                            
                            <li>
                                Media posted to a child's feed or sent via direct message is visible <span className="font-normal">only</span> to authorized staff and that specific child's verified parents/guardians.
                            </li>
                            <li>
                                Childcare centres are solely responsible for obtaining necessary media consent from parents/guardians prior to capturing and uploading photos or videos to Squeeko.
                            </li>
                        </ul>
                    </div>

                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            Data Retention and Deletion
                        </h4>

                        <p>
                            Squeeko retains personal information only for as long as necessary to fulfill the purposes outlined in this policy or to satisfy legal and regulatory requirements.
                        </p>
                        
                        <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">

                            <li>
                                <span className="font-semibold text-muted-foreground">Childcare Records Compliance (Ontario CCEYA):</span> Under Ontario's <span className="font-normal">Child Care and Early Years Act, 2014</span> (O. Reg. 137/15), childcare centres are required to maintain official attendance, health, and incident records for a minimum of <span className="font-normal">three (3) years</span> from the date a child is discharged. Squeeko archives child records upon account departure and permanently deletes or anonymizes them following the mandatory retention period, or upon formal instruction from the childcare centre.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Account Deletion:</span> Direct account holders may request deletion of their personal user account by contacting us at <a 
                                    href="mailto:squeekoapp@gmail.com" 
                                    className="font-normal font-mono uppercase text-sm hover:underline"
                                >
                                    squeekoapp@gmail.com
                                </a>.
                            </li>
                        </ul>

                    </div>

                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            Data Storage, Location, and Safeguards
                        </h4>

                        <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">
                            <li>
                                <span className="font-semibold text-muted-foreground">Data Residency:</span> Squeeko prioritizes housing user data within Canadian data centres (e.g., AWS / Supabase Canada region <span className="font-mono text-sm font-normal">'ca-central-1'</span>). Where cross-border data routing occurs via global edge infrastructure, we ensure appropriate technical safeguards are enforced.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Security Measures:</span> We maintain technical, administrative, and organizational safeguards designed to protect personal data against unauthorized access, loss, or alteration. These measures include Role-Based Access Controls (RBAC), Row-Level Security (RLS) policies, and HTTPS/TLS encryption for data in transit.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">No Guarantee:</span> While we take rigorous measures to safeguard data, no internet transmission or electronic storage system is 100% secure.
                            </li>
                        </ul>
                    </div>

                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            Your Rights & Choices

                        </h4>

                        <p>
                            Under PIPEDA and applicable Canadian privacy legislation, you have the right to:
                        </p>

                        <ul className="flex flex-col gap-2 pl-2 lg:pl-4 lg:list-disc marker:text-muted-foreground">

                            <li>
                                <span className="font-semibold text-muted-foreground">Access & Correct Data:</span> Request access to or correction of the personal information we hold about you.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Withdraw Consent:</span> Withdraw your consent to our processing of your personal data for non-essential services or marketing communications.
                            </li>
                            <li>
                                <span className="font-semibold text-muted-foreground">Submit Privacy Inquiries:</span> Contact our Privacy Officer if you have questions or concerns about our data practices.
                            </li>
                        </ul>
                        
                        <p className="font-normal">
                            Note: If you are a parent/guardian seeking to access, correct, or delete information relating to your child, please contact your Childcare Centre administrator directly.
                        </p>
                    </div>

                    <div className="w-full flex flex-col gap-4 py-4">
                        <h4 className="font-serif text-2xl lg:text-3xl text-primary">
                            Changes to This Privacy Policy
                        </h4>

                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in our platform, legal requirements, or operational practices. We will notify you of material changes by posting the updated policy on our Site and updating the "Last Updated" date above. Continued use of Squeeko after any updates signifies your acceptance of the revised policy.
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

export default PrivacyPolicy;
