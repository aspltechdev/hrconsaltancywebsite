import { ReactNode } from "react";

export type ServiceDetail = {
    id: string;
    title: string;
    shortDescription: string;
    stats?: { label: string; value: string }[];
    features?: { title: string; desc: string }[];
    packages?: {
        name: string;
        target: string;
        features: string[];
        recommended?: boolean;
    }[];
    deliverables?: string[];
    process?: { step: number; title: string; desc: string }[];
    faqs?: { question: string; answer?: string }[];
};

export const servicesData: Record<string, ServiceDetail> = {
    "HR & Payroll": {
        id: "hr_payroll",
        title: "End-to-End HR & Payroll Management",
        shortDescription: "Ensure 100% compliant salary processing. From PF, ESI, TDS Filing to Payslip generation, we handle your entire HR lifecycle securely.",
        stats: [
            { value: "Zero", label: "Errors" },
            { value: "1000+", label: "Employees Managed" },
            { value: "100%", label: "Statutory Compliance" },
        ],
        features: [
            { title: "Error-Free Salaries", desc: "Automated calculation of attendance, leaves, overtime, and variable pay components." },
            { title: "Statutory Compliance", desc: "We handle PF, ESI, Professional Tax (PT), and TDS deductions and return filing on time." },
            { title: "Employee Support", desc: "Direct query resolution and professional payslips sent via email to every employee." },
        ],
        packages: [
            {
                name: "Basic Payroll",
                target: "Startups (1 - 10 Employees)",
                features: ["Monthly Salary Processing", "Leave & Attendance Mgmt", "Payslip Generation", "Bank Advice File"]
            },
            {
                name: "Compliant Payroll",
                target: "SMEs (11 - 50 Employees)",
                recommended: true,
                features: ["Everything in Basic", "PF & ESI Filing", "Professional Tax (PT) Filing", "TDS Calculation & Deduction"]
            },
            {
                name: "Managed HR Services",
                target: "Corporate (50+ Employees)",
                features: ["Everything in Compliant", "Form-16 Issuance", "Employee Onboarding/Exit", "HR Helpdesk Support"]
            }
        ],
        deliverables: [
            "Payroll Register (Gross to Net Salary)",
            "Bank Advice (For direct salary transfer)",
            "Tax Challans (PF, ESI, TDS Proofs)",
            "Digital Payslips (Emailed to employees)",
            "MIS Reports (Cost to Company analysis)"
        ],
        process: [
            { step: 1, title: "Data Collection", desc: "You send us attendance data and variable pay details (bonuses/incentives)." },
            { step: 2, title: "Processing & Draft", desc: "We process the payroll and send a draft register for your approval." },
            { step: 3, title: "Compliance Filing", desc: "Once approved, we generate challans for PF/ESI/TDS and file returns." },
            { step: 4, title: "Disbursement", desc: "We send payslips to employees and Bank Advice to you for payment." }
        ],
        faqs: [
            { question: "When does PF become mandatory?", answer: "Provident Fund (PF) registration is mandatory for any organization that has 20 or more employees. However, companies can also register voluntarily with fewer employees." },
            { question: "Do you handle Form 16?" },
            { question: "Is data confidentiality guaranteed?" }
        ]
    }
};

// Function to get or generate fallback block for simple items
export const getServiceDetail = (label: string): ServiceDetail => {
    if (servicesData[label]) {
        return servicesData[label];
    }

    // Generic fallback if no specific rich content exists yet
    return {
        id: label.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        title: `End-to-End ${label} Services`,
        shortDescription: `Ensure 100% compliant processing. We handle your entire ${label} lifecycle securely.`,
        stats: [
            { value: "Zero", label: "Errors" },
            { value: "1000+", label: "Clients Served" },
            { value: "100%", label: "Statutory Compliance" },
        ],
        features: [
            { title: "Error-Free Execution", desc: "Automated calculation and precise execution of all requirements." },
            { title: "Statutory Compliance", desc: "We handle all deductions, filings, and paperwork on time." },
            { title: "Dedicated Support", desc: "Direct query resolution and professional support sent via email." },
        ],
        packages: [
            {
                name: "Basic Plan",
                target: "Startups (1 - 10 Employees)",
                features: ["Standard Processing", "Leave & Attendance Mgmt", "Basic Filings", "Bank Advice File"]
            },
            {
                name: "Compliant Plan",
                target: "SMEs (11 - 50 Employees)",
                recommended: true,
                features: ["Everything in Basic", "Advanced Registration", "Professional Tax Filing", "TDS Calculation"]
            },
            {
                name: "Managed Services",
                target: "Corporate (50+ Employees)",
                features: ["Everything in Compliant", "Form-16 Issuance", "Employee Onboarding/Exit", "Helpdesk Support"]
            }
        ],
        deliverables: [
            "Process Register",
            "Compliance Proofs",
            "Digital Reports",
            "MIS Analytics"
        ],
        process: [
            { step: 1, title: "Data Collection", desc: "You send us attendance data and required details." },
            { step: 2, title: "Processing & Draft", desc: "We process the information and send a draft for your approval." },
            { step: 3, title: "Compliance Filing", desc: "Once approved, we generate challans and file returns." },
            { step: 4, title: "Disbursement", desc: "We send the final documents and bank advice to you." }
        ],
        faqs: [
            { question: `When is ${label} required for my business?`, answer: `Contact our experts to understand the specific thresholds and requirements.` },
            { question: "Do you handle Form 16 and related documents?" },
            { question: "Is data confidentiality guaranteed?" }
        ]
    };
};
