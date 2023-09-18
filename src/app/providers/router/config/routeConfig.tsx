import { MainPage } from '@/pages/MainPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RoutePath } from '@/shared/const/router';
import { AppRoutes, AppRoutesProps } from '@/shared/types/router';
import { FeaturesPage } from '@/pages/FeaturesPage';
import { BlogPage } from '@/pages/BlogPage';
import { AboutPage } from '@/pages/AboutPage';
import { PricingPage } from '@/pages/PricingPage';
import { HomePage } from '@/pages/HomePage';
import { HomeIdPage } from '@/pages/HomeIdPage';
import { HomeEditPage } from '@/pages/HomeEditPage';
import { UpgradePlanPage } from '@/pages/UpgradePlanPage';
import { ChatsPage } from '@/pages/ChatsPage';
import { FilesPage } from '@/pages/FilesPage';
import { FileViewPage } from '@/pages/FileViewPage';
import { SettingPage } from '@/pages/SettingPage';
import { ProductPage } from '@/pages/ProductPage';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';
import { FaqPage } from '@/pages/FaqPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.PRODUCT]: {
        path: RoutePath.PRODUCT(),
        element: <ProductPage />,
        withFooter: true,
    },
    [AppRoutes.FAQ]: {
        path: RoutePath.FAQ(),
        element: <FaqPage />,
        withFooter: true,
    },
    [AppRoutes.REGISTER]: {
        path: RoutePath.REGISTER(),
        element: <RegisterPage />,
        withFooter: true,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.LOGIN(),
        element: <LoginPage />,
        withFooter: true,
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.MAIN(),
        element: <MainPage />,
        withFooter: true,
    },
    [AppRoutes.FEATURES]: {
        path: RoutePath.FEATURES(),
        element: <FeaturesPage />,
        withFooter: true,
    },
    [AppRoutes.BLOG]: {
        path: RoutePath.BLOG(),
        element: <BlogPage />,
        withFooter: true,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.ABOUT(),
        element: <AboutPage />,
        withFooter: true,
    },
    [AppRoutes.PRICING]: {
        path: RoutePath.PRICING(),
        element: <PricingPage />,
        withFooter: true,
    },
    [AppRoutes.HOME]: {
        path: RoutePath.HOME(),
        // authOnly: true,
        withSidebar: true,
        element: <HomePage />,
    },
    [AppRoutes.HOME_ID]: {
        path: RoutePath.HOME_ID(':id'),
        // authOnly: true,
        withSidebar: true,
        element: <HomeIdPage />,
    },
    [AppRoutes.HOME_EDIT]: {
        path: RoutePath.HOME_EDIT(':id'),
        // authOnly: true,
        withSidebar: true,
        element: <HomeEditPage />,
    },
    [AppRoutes.UPGRADE_PLAN]: {
        path: RoutePath.UPGRADE_PLAN(),
        // authOnly: true,
        withSidebar: true,
        element: <UpgradePlanPage />,
    },
    [AppRoutes.CHATS]: {
        path: RoutePath.CHATS(),
        // authOnly: true,
        withSidebar: true,
        element: <ChatsPage />,
    },
    [AppRoutes.FILES]: {
        path: RoutePath.FILES(),
        // authOnly: true,
        withSidebar: true,
        element: <FilesPage />,
    },
    [AppRoutes.FILE_VIEW]: {
        path: RoutePath.FILE_VIEW(':id'),
        // authOnly: true,
        withSidebar: true,
        element: <FileViewPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.SETTINGS(),
        // authOnly: true,
        withSidebar: true,
        element: <SettingPage />,
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePath.FORBIDDEN(),
        element: <ForbiddenPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
