import type { Metadata } from "next"
import FreelancerClientPage from "./FreelancerClientPage"

export const metadata: Metadata = {
  title: "Freelancer Benefits - Digital Escrow for Secure Projects | Escrow Protocol",
  description:
    "Eliminate non-payment risk and project delays for freelancers. Secure digital escrow ensures guaranteed payments for freelance work.",
  keywords:
    "freelancer benefits, non-payment risk freelancers, trust issues freelance work, payment delays freelancing, secure freelance payments",
}

export default function FreelancerPage() {
  return <FreelancerClientPage />
}
