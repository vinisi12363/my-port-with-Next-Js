"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { GradientProvider, GradientBackground, GradientSwitcher } from "@/components/gradient-system";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	return (
		<NextUIProvider>
			<NextThemesProvider {...themeProps}>
				<LanguageProvider>
					<GradientProvider>
						<GradientBackground />
						{children}
						<GradientSwitcher />
					</GradientProvider>
				</LanguageProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}
