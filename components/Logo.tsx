import Image from "next/image";import Link from "next/link";
export function Logo(){return <Link className="logo" href="/" aria-label="Al Reem Ali Albuhendi home"><Image className="brand-logo" src="/al-reem-logo-clean.png" width={64} height={64} alt="Al Reem Ali Albuhendi shield logo" priority/><span><strong>ALREEM ALI ALBUHENDI</strong><small>ACCOUNTING & AUDITING</small></span></Link>}
