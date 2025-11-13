/**
 * SFS Menu Configuration
 *
 * Pre-configured menu items and sections for Smart Flow Systems applications.
 * Import and customize as needed for your specific application.
 */

import {
  LayoutDashboard,
  GitBranch,
  Users,
  CheckSquare,
  User,
  Settings,
  Shield,
  BarChart3,
  HelpCircle,
  FileText,
  MessageCircle,
  Phone,
  Home,
  ShoppingCart,
  Package,
  DollarSign,
  Calendar,
  Mail,
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  Heart,
  Star,
  Bookmark,
  Archive,
  Trash2,
  Edit,
  Eye,
  Clock,
  TrendingUp,
  Activity,
  Database,
  Server,
  Code,
  Terminal,
  Globe,
  Zap,
} from "lucide-react";

import type { MenuSection } from "./SFSHamburgerMenu";

/**
 * CRM Application Menu Sections
 */
export const crmMenuSections: MenuSection[] = [
  {
    title: "Main Navigation",
    items: [
      { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { id: "pipeline", label: "Pipeline", href: "/pipeline", icon: GitBranch },
      { id: "leads", label: "Leads", href: "/leads", icon: Users },
      { id: "tasks", label: "My Tasks", href: "/tasks", icon: CheckSquare },
    ],
  },
  {
    title: "User Profile & Settings",
    items: [
      { id: "profile", label: "My Profile", href: "/profile", icon: User },
      { id: "settings", label: "Settings", href: "/settings", icon: Settings },
      { id: "notifications", label: "Notifications", href: "/notifications", icon: Bell },
    ],
  },
  {
    title: "Admin & System Tools",
    items: [
      { id: "admin", label: "Admin Panel", href: "/admin", icon: Shield },
      { id: "analytics", label: "Analytics", href: "/analytics", icon: BarChart3 },
      { id: "users", label: "User Management", href: "/admin/users", icon: Users },
      { id: "system", label: "System Settings", href: "/admin/system", icon: Server },
    ],
  },
  {
    title: "Help & Resources",
    items: [
      { id: "help", label: "Help Center", href: "/help", icon: HelpCircle },
      { id: "docs", label: "Documentation", href: "/docs", icon: FileText },
      { id: "support", label: "Contact Support", href: "/support", icon: MessageCircle },
      { id: "contact", label: "Contact Us", href: "/contact", icon: Phone },
    ],
  },
];

/**
 * E-commerce/Store Application Menu Sections
 */
export const storeMenuSections: MenuSection[] = [
  {
    title: "Main Navigation",
    items: [
      { id: "home", label: "Home", href: "/", icon: Home },
      { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { id: "products", label: "Products", href: "/products", icon: Package },
      { id: "orders", label: "Orders", href: "/orders", icon: ShoppingCart },
      { id: "sales", label: "Sales", href: "/sales", icon: DollarSign },
    ],
  },
  {
    title: "User Profile & Settings",
    items: [
      { id: "profile", label: "My Profile", href: "/profile", icon: User },
      { id: "settings", label: "Settings", href: "/settings", icon: Settings },
      { id: "favorites", label: "Favorites", href: "/favorites", icon: Heart },
      { id: "orders-history", label: "Order History", href: "/my-orders", icon: Archive },
    ],
  },
  {
    title: "Admin & System Tools",
    items: [
      { id: "admin", label: "Admin Panel", href: "/admin", icon: Shield },
      { id: "analytics", label: "Analytics", href: "/analytics", icon: BarChart3 },
      { id: "inventory", label: "Inventory", href: "/admin/inventory", icon: Database },
      { id: "customers", label: "Customers", href: "/admin/customers", icon: Users },
    ],
  },
  {
    title: "Help & Resources",
    items: [
      { id: "help", label: "Help Center", href: "/help", icon: HelpCircle },
      { id: "docs", label: "Documentation", href: "/docs", icon: FileText },
      { id: "support", label: "Contact Support", href: "/support", icon: MessageCircle },
    ],
  },
];

/**
 * Marketing & Social Media Application Menu Sections
 */
export const marketingMenuSections: MenuSection[] = [
  {
    title: "Main Navigation",
    items: [
      { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { id: "campaigns", label: "Campaigns", href: "/campaigns", icon: Zap },
      { id: "content", label: "Content", href: "/content", icon: FileText },
      { id: "analytics", label: "Analytics", href: "/analytics", icon: TrendingUp },
      { id: "calendar", label: "Calendar", href: "/calendar", icon: Calendar },
    ],
  },
  {
    title: "Social Media",
    items: [
      { id: "posts", label: "Posts", href: "/posts", icon: Share2 },
      { id: "schedule", label: "Schedule", href: "/schedule", icon: Clock },
      { id: "engagement", label: "Engagement", href: "/engagement", icon: Activity },
    ],
  },
  {
    title: "User Profile & Settings",
    items: [
      { id: "profile", label: "My Profile", href: "/profile", icon: User },
      { id: "settings", label: "Settings", href: "/settings", icon: Settings },
    ],
  },
  {
    title: "Admin & System Tools",
    items: [
      { id: "admin", label: "Admin Panel", href: "/admin", icon: Shield },
      { id: "team", label: "Team Management", href: "/admin/team", icon: Users },
      { id: "integrations", label: "Integrations", href: "/admin/integrations", icon: Globe },
    ],
  },
  {
    title: "Help & Resources",
    items: [
      { id: "help", label: "Help Center", href: "/help", icon: HelpCircle },
      { id: "docs", label: "Documentation", href: "/docs", icon: FileText },
      { id: "support", label: "Contact Support", href: "/support", icon: MessageCircle },
    ],
  },
];

/**
 * Data Query/Analytics Application Menu Sections
 */
export const dataQueryMenuSections: MenuSection[] = [
  {
    title: "Main Navigation",
    items: [
      { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { id: "queries", label: "Queries", href: "/queries", icon: Search },
      { id: "data-sources", label: "Data Sources", href: "/data-sources", icon: Database },
      { id: "reports", label: "Reports", href: "/reports", icon: BarChart3 },
      { id: "visualizations", label: "Visualizations", href: "/visualizations", icon: Activity },
    ],
  },
  {
    title: "Tools",
    items: [
      { id: "query-builder", label: "Query Builder", href: "/query-builder", icon: Code },
      { id: "filters", label: "Filters", href: "/filters", icon: Filter },
      { id: "export", label: "Export Data", href: "/export", icon: Download },
      { id: "import", label: "Import Data", href: "/import", icon: Upload },
    ],
  },
  {
    title: "User Profile & Settings",
    items: [
      { id: "profile", label: "My Profile", href: "/profile", icon: User },
      { id: "settings", label: "Settings", href: "/settings", icon: Settings },
      { id: "saved", label: "Saved Queries", href: "/saved", icon: Bookmark },
    ],
  },
  {
    title: "Admin & System Tools",
    items: [
      { id: "admin", label: "Admin Panel", href: "/admin", icon: Shield },
      { id: "api", label: "API Management", href: "/admin/api", icon: Terminal },
      { id: "users", label: "User Management", href: "/admin/users", icon: Users },
    ],
  },
  {
    title: "Help & Resources",
    items: [
      { id: "help", label: "Help Center", href: "/help", icon: HelpCircle },
      { id: "docs", label: "Documentation", href: "/docs", icon: FileText },
      { id: "support", label: "Contact Support", href: "/support", icon: MessageCircle },
    ],
  },
];

/**
 * General Purpose Application Menu Sections
 */
export const generalMenuSections: MenuSection[] = [
  {
    title: "Main Navigation",
    items: [
      { id: "home", label: "Home", href: "/", icon: Home },
      { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    title: "User Profile & Settings",
    items: [
      { id: "profile", label: "My Profile", href: "/profile", icon: User },
      { id: "settings", label: "Settings", href: "/settings", icon: Settings },
    ],
  },
  {
    title: "Admin & System Tools",
    items: [
      { id: "admin", label: "Admin Panel", href: "/admin", icon: Shield },
      { id: "analytics", label: "Analytics", href: "/analytics", icon: BarChart3 },
    ],
  },
  {
    title: "Help & Resources",
    items: [
      { id: "help", label: "Help Center", href: "/help", icon: HelpCircle },
      { id: "docs", label: "Documentation", href: "/docs", icon: FileText },
      { id: "support", label: "Contact Support", href: "/support", icon: MessageCircle },
    ],
  },
];

// Export all available icons for custom menu configurations
export const menuIcons = {
  LayoutDashboard,
  GitBranch,
  Users,
  CheckSquare,
  User,
  Settings,
  Shield,
  BarChart3,
  HelpCircle,
  FileText,
  MessageCircle,
  Phone,
  Home,
  ShoppingCart,
  Package,
  DollarSign,
  Calendar,
  Mail,
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  Heart,
  Star,
  Bookmark,
  Archive,
  Trash2,
  Edit,
  Eye,
  Clock,
  TrendingUp,
  Activity,
  Database,
  Server,
  Code,
  Terminal,
  Globe,
  Zap,
};
