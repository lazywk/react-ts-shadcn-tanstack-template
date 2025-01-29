import { CircleDollarSign } from "lucide-react"

import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { Link, linkOptions } from "@tanstack/react-router"

export function NavMain() {
    const { setOpenMobile } = useSidebar()
    const links = [
        linkOptions({
            to: "/",
            icon: <CircleDollarSign />,
            enabled: true,
            title: "Home",
        }),
    ]

    return (
        <SidebarGroup>
            <SidebarMenu>
                <Link
                    to="/"
                    className="rounded-lg mb-8"
                    onClick={() => {
                        setOpenMobile(false)
                    }}
                >
                    <SidebarMenuItem>
                        <SidebarMenuButton className="text-3xl text-primary font-extrabold gap-0 justify-center">
                            T<span>emplate</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </Link>
                {links.map(
                    ({ enabled, title, ...item }) =>
                        enabled && (
                            <Link
                                {...item}
                                key={item.to}
                                activeProps={{
                                    className:
                                        "[&_button]:bg-primary hover:[&_button]:bg-primary hover:[&_button]:text-primary-foreground text-primary-foreground",
                                }}
                                className="rounded-lg"
                                onClick={() => {
                                    setOpenMobile(false)
                                }}
                            >
                                <SidebarMenuItem>
                                    <SidebarMenuButton tooltip={title}>
                                        {item.icon}
                                        <span>{title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </Link>
                        ),
                )}
            </SidebarMenu>
        </SidebarGroup>
    )
}
