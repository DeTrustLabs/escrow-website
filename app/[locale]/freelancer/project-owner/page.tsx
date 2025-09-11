import type { Metadata } from "next"
import ProjectOwnerClientPage from "./ProjectOwnerClientPage"

export const metadata: Metadata = {
  title: "Project Owner Benefits - Digital Escrow for Secure Hiring | Escrow Protocol",
  description:
    "Eliminate project risks and ensure quality delivery. Secure digital escrow protects project owners from non-delivery and poor quality work.",
  keywords:
    "project owner benefits, freelance hiring security, project protection, quality assurance, secure project payments",
}

export default function ProjectOwnerPage() {
  return <ProjectOwnerClientPage />
}
