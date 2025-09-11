"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChevronLeft,
	ChevronRight,
	FileText,
	Video,
	Download,
	BookOpen,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function TradeResourcesCarousel() {
	const t = useTranslations("trade.resources");

	const resources = [
		{
			id: 1,
			title: t("settingUpTradeEscrow.title"),
			description: t("settingUpTradeEscrow.description"),
			type: t("settingUpTradeEscrow.type"),
			icon: BookOpen,
			buttonText: t("settingUpTradeEscrow.buttonText"),
			color: "bg-blue-50 border-blue-200",
			iconColor: "text-blue-600",
		},
		{
			id: 2,
			title: t("digitalVsTraditional.title"),
			description: t("digitalVsTraditional.description"),
			type: t("digitalVsTraditional.type"),
			icon: FileText,
			buttonText: t("digitalVsTraditional.buttonText"),
			color: "bg-green-50 border-green-200",
			iconColor: "text-green-600",
		},
		{
			id: 3,
			title: t("managingDisputes.title"),
			description: t("managingDisputes.description"),
			type: t("managingDisputes.type"),
			icon: Download,
			buttonText: t("managingDisputes.buttonText"),
			color: "bg-purple-50 border-purple-200",
			iconColor: "text-purple-600",
		},
		{
			id: 4,
			title: t("compliance.title"),
			description: t("compliance.description"),
			type: t("compliance.type"),
			icon: FileText,
			buttonText: t("compliance.buttonText"),
			color: "bg-orange-50 border-orange-200",
			iconColor: "text-orange-600",
		},
		{
			id: 5,
			title: t("videoSeries.title"),
			description: t("videoSeries.description"),
			type: t("videoSeries.type"),
			icon: Video,
			buttonText: t("videoSeries.buttonText"),
			color: "bg-red-50 border-red-200",
			iconColor: "text-red-600",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % resources.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + resources.length) % resources.length
		);
	};

	const currentResource = resources[currentIndex];
	const IconComponent = currentResource.icon;

	return (
		<div className="relative max-w-2xl mx-auto">
			{/* Main Resource Card */}
			<Card
				className={`border-2 shadow-lg transition-all duration-300 ${currentResource.color}`}
			>
				<CardHeader className="text-center pb-4">
					<div className="flex items-center justify-center mb-4">
						<div
							className={`w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md`}
						>
							<IconComponent
								className={`h-8 w-8 ${currentResource.iconColor}`}
							/>
						</div>
					</div>
					<div
						className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${currentResource.iconColor} bg-white`}
					>
						{currentResource.type}
					</div>
					<CardTitle className="text-xl">{currentResource.title}</CardTitle>
					<CardDescription className="text-base">
						{currentResource.description}
					</CardDescription>
				</CardHeader>
				<CardContent className="text-center">
					<Button variant="outline" className="bg-white hover:bg-gray-50">
						{currentResource.buttonText}
					</Button>
				</CardContent>
			</Card>

			{/* Navigation Arrows */}
			<Button
				variant="outline"
				size="icon"
				className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
				onClick={prevSlide}
			>
				<ChevronLeft className="h-4 w-4" />
			</Button>

			<Button
				variant="outline"
				size="icon"
				className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
				onClick={nextSlide}
			>
				<ChevronRight className="h-4 w-4" />
			</Button>

			{/* Dots Indicator */}
			<div className="flex justify-center mt-6 space-x-2">
				{resources.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 rounded-full transition-colors ${
							index === currentIndex ? "bg-primary" : "bg-gray-300"
						}`}
						onClick={() => setCurrentIndex(index)}
					/>
				))}
			</div>

			{/* Resource Counter */}
			<div className="text-center mt-4 text-sm text-muted-foreground">
				{t("counter", { current: currentIndex + 1, total: resources.length })}
			</div>
		</div>
	);
}
