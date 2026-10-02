Security & Trust at Squeeko
Last Updated: October 1, 2026

At Squeeko, protecting children’s data, personal health information, and family privacy is the cornerstone of our platform. We design our cloud architecture to meet and exceed Canadian privacy requirements, ensuring licensed childcare centres can operate with total confidence.

1. Data Residency & Hosting Infrastructure
We believe sensitive data belonging to Canadian children and families should stay in Canada.

Canadian Data Sovereignty: Squeeko’s primary database and file storage infrastructure are hosted exclusively in Canadian data centers (AWS / Supabase ca-central-1 region in Montreal, Canada).

Cloud Architecture: Our web applications and backend APIs run on modern, highly available edge infrastructure (Vercel and Fly.io), enforcing strict HTTPS/TLS encryption across all network requests.

Isolated Tenant Schemas: Customer data is segmented logically using Row-Level Security (RLS) policies at the database layer, ensuring one childcare centre can never access or query another centre's records.

2. Regulatory Compliance & Legal Standards
Squeeko aligns with federal and provincial regulations governing child records, health privacy, and commercial communications.

Ontario CCEYA Compliance: Our system is structured around the Child Care and Early Years Act, 2014 (O. Reg. 137/15), enabling automated 3-year record retention schedules for attendance, medical/allergy notes, and incident reports.

PIPEDA Compliant: We adhere to the 10 Fair Information Principles under Canada's Personal Information Protection and Electronic Documents Act.

CASL Verified: All lead generation, email notifications, and communication preferences strictly comply with Canada’s Anti-Spam Legislation.

3. Data Protection & Encryption
We enforce defense-in-depth security measures to protect data both at rest and in transit.

Encryption in Transit: All traffic between user browsers and Squeeko servers is encrypted using standard TLS 1.3 / HTTPS protocols.

Encryption at Rest: All database records, attendance logs, and uploaded files are encrypted at rest using industry-standard AES-256 encryption.

Protected Media Distribution: Photos and videos shared on student feeds are rendered using short-lived, signed storage URLs. Media files cannot be publicly indexed, scraped, or accessed via unauthenticated links.

4. Role-Based Access Control (RBAC)
Squeeko enforces granular, role-based access levels so users see only what they are explicitly authorized to view:

Administrators: Full operational management over billing, staffing, classroom configuration, and centre-wide records.

Teachers / ECEs: Access restricted strictly to their assigned classrooms, attendance lists, daily logs, and direct parent communications.

Parents / Guardians: Read-only access locked exclusively to their enrolled child's profile, feed, activity logs, and billing portal.

Database Enforced: Access constraints are enforced directly at the database engine level via Supabase Row-Level Security (RLS), preventing API-level bypasses.

5. Financial & Payment Security
Squeeko partners with Stripe, Inc. to process all tuition, subscription, and parent payment transactions.

PCI-DSS Level 1 Compliant: All payment processing is handled through Stripe's PCI-compliant infrastructure.

Zero Card Storage: Squeeko servers never receive, process, or store raw credit card numbers or bank account details.

Fraud Prevention: Transaction streams leverage Stripe's automated machine-learning radar for fraud detection and risk prevention.

6. System Reliability & Monitoring
System Health: Continuous automated monitoring tracks API response times, database query health, and system availability.

Data Backups: Point-in-time database snapshots are performed automatically to prevent data loss in the event of hardware failures.

Privacy-First Analytics: Product performance analytics are strictly aggregated and anonymized. Squeeko explicitly excludes child records, allergy details, media files, and health logs from any event analytics tracking.

7. Security Reporting & Vulnerability Disclosure
We welcome feedback from security researchers, childcare administrators, and developers to help keep Squeeko safe.

If you suspect a vulnerability or have a security-related inquiry, please contact our team directly at:

Squeeko Security & Privacy Team

Email: security@squeeko.ca (or privacy@squeeko.ca)

Website: squeeko.ca/security

Location: Ontario, Canada