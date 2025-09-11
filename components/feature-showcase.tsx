"use client";

import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Globe, Users, FileText, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export function FeatureShowcase() {
	const t = useTranslations("home.features");

	const features = [
		{
			id: "security",
			icon: Shield,
			title: t("nonCustodial.title"),
			description: t("nonCustodial.description"),
			details: t("nonCustodial.details"),
			color: "bg-green-50 border-green-200",
		},
		{
			id: "payments",
			icon: Globe,
			title: t("payments.title"),
			description: t("payments.description"),
			details: t("payments.details"),
			color: "bg-blue-50 border-blue-200",
		},
		{
			id: "availability",
			icon: Clock,
			title: t("availability.title"),
			description: t("availability.description"),
			details: t("availability.details"),
			color: "bg-purple-50 border-purple-200",
		},
		{
			id: "signatures",
			icon: Users,
			title: t("approval.title"),
			description: t("approval.description"),
			details: t("approval.details"),
			color: "bg-orange-50 border-orange-200",
		},
		{
			id: "documents",
			icon: FileText,
			title: t("documents.title"),
			description: t("documents.description"),
			details: t("documents.details"),
			color: "bg-pink-50 border-pink-200",
		},
		{
			id: "milestones",
			icon: Zap,
			title: t("milestones.title"),
			description: t("milestones.description"),
			details: t("milestones.details"),
			color: "bg-yellow-50 border-yellow-200",
		},
	];

	const [activeFeature, setActiveFeature] = useState("security");

	const active = features.find((f) => f.id === activeFeature) || features[0];
	const Icon = active.icon;

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			{/* Feature List */}
			<div className="space-y-4">
				{features.map((feature) => {
					const FeatureIcon = feature.icon;
					const isActive = feature.id === activeFeature;

					return (
						<Card
							key={feature.id}
							className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
								isActive ? "ring-2 ring-primary shadow-lg" : "hover:shadow-sm"
							}`}
							onClick={() => setActiveFeature(feature.id)}
						>
							<CardHeader className="pb-3">
								<div className="flex items-center space-x-3">
									<div
										className={`p-2 rounded-lg ${
											isActive ? "bg-primary text-white" : "bg-gray-100"
										}`}
									>
										<FeatureIcon className="h-5 w-5" />
									</div>
									<CardTitle className="text-lg">{feature.title}</CardTitle>
								</div>
							</CardHeader>
							<CardContent className="pt-0">
								<CardDescription>{feature.description}</CardDescription>
							</CardContent>
						</Card>
					);
				})}
			</div>

			{/* Active Feature Details */}
			<div className="lg:sticky lg:top-24">
				<Card
					className={`border-2 ${active.color} transition-all duration-500`}
				>
					<CardHeader>
						<div className="flex items-center space-x-4 mb-4">
							<div className="p-4 bg-primary text-white rounded-xl">
								<Icon className="h-8 w-8" />
							</div>
							<div>
								<Badge variant="secondary" className="mb-2">
									{t("featured")}
								</Badge>
								<CardTitle className="text-2xl">{active.title}</CardTitle>
							</div>
						</div>
					</CardHeader>
					<CardContent>
						<p className="text-lg text-muted-foreground mb-4">
							{active.description}
						</p>
						<p className="text-sm leading-relaxed">{active.details}</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
