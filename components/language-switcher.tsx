"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";

const languages = [{ code: "en" }];

export function LanguageSwitcher() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const t = useTranslations("navigation");

	const switchLanguage = (newLocale: string) => {
		if (newLocale === locale) return;
		const segments = pathname.split("/").filter(Boolean);
		if (segments.length === 0) {
			router.push(`/${newLocale}`);
			return;
		}
		if (languages.some((l) => l.code === segments[0])) {
			segments[0] = newLocale;
		} else {
			segments.unshift(newLocale);
		}
		router.push(`/${segments.join("/")}`);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="sm">
					<Languages className="h-4 w-4 mr-2" />
					{t(`languages.${locale}`)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{languages.map((lang) => (
					<DropdownMenuItem
						key={lang.code}
						onClick={() => switchLanguage(lang.code)}
						className={locale === lang.code ? "bg-accent" : ""}
					>
						{t(`languages.${lang.code}`)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
