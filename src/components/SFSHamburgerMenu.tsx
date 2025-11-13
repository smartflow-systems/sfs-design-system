/**
 * SFS Hamburger Menu Component
 *
 * A comprehensive slide-in sidebar navigation menu for Smart Flow Systems applications.
 * Features organized sections for main navigation, user profile, admin tools, and help resources.
 *
 * Usage:
 * import { SFSHamburgerMenu } from '@sfs/design-system';
 *
 * <SFSHamburgerMenu
 *   menuSections={menuSections}
 *   user={currentUser}
 *   onLogout={handleLogout}
 *   currentPath={location.pathname}
 * />
 */

import { useState } from "react";
import {
  Menu,
  X,
  User,
  LogOut
} from "lucide-react";

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface SFSUser {
  fullName?: string;
  name?: string;
  email?: string;
}

interface SFSHamburgerMenuProps {
  menuSections: MenuSection[];
  user?: SFSUser | null;
  onLogout?: () => void;
  currentPath: string;
  appName?: string;
  appSubtitle?: string;
  Link?: React.ComponentType<{ href: string; onClick?: () => void; children: React.ReactNode }>;
  showUserInfo?: boolean;
  showLogoutButton?: boolean;
  showFooter?: boolean;
}

export function SFSHamburgerMenu({
  menuSections,
  user,
  onLogout,
  currentPath,
  appName = "Smart Flow Systems",
  appSubtitle,
  Link: LinkComponent,
  showUserInfo = true,
  showLogoutButton = true,
  showFooter = true,
}: SFSHamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/dashboard" && (currentPath === "/" || currentPath === "/dashboard")) {
      return true;
    }
    if (href === "/" && currentPath === "/") {
      return true;
    }
    return currentPath === href || currentPath.startsWith(href + "/");
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setIsOpen(false);
  };

  // Default link component if none provided
  const DefaultLink = ({ href, onClick, children }: { href: string; onClick?: () => void; children: React.ReactNode }) => (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );

  const LinkElement = LinkComponent || DefaultLink;

  const userName = user?.fullName || user?.name || "User";

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gold-300 hover:text-gold-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-md"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-brown-900 border-r border-gold-800/30 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gold-800/30">
          <div className="flex flex-col">
            <div className="text-gold-shine text-lg font-extrabold">{appName}</div>
            {appSubtitle && (
              <span className="text-gold-300 text-xs">{appSubtitle}</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gold-300 hover:text-gold-100 transition-colors rounded-md"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* User Info */}
        {showUserInfo && user && (
          <div className="p-4 border-b border-gold-800/30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gold-600/20 border border-gold-500/30 flex items-center justify-center">
                <User className="h-5 w-5 text-gold-400" />
              </div>
              <div>
                <div className="text-gold-100 font-semibold text-sm">{userName}</div>
                {user.email && (
                  <div className="text-gold-400 text-xs">{user.email}</div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Menu Sections */}
        <div className="py-4">
          {menuSections.map((section, sectionIndex) => (
            <div key={section.title} className={sectionIndex > 0 ? "mt-6" : ""}>
              <div className="px-4 mb-2">
                <h3 className="text-gold-400 text-xs font-bold uppercase tracking-wider">
                  {section.title}
                </h3>
              </div>
              <div className="space-y-1 px-2">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <LinkElement
                      key={item.id}
                      href={item.href}
                      onClick={handleLinkClick}
                    >
                      <div
                        className={`flex items-center space-x-3 px-3 py-2.5 rounded-md transition-colors cursor-pointer ${
                          active
                            ? "bg-gold-600/20 text-gold-100 border-l-2 border-gold-500"
                            : "text-gold-300 hover:bg-gold-600/10 hover:text-gold-100"
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${active ? "text-gold-400" : ""}`} />
                        <span className="font-medium text-sm">{item.label}</span>
                      </div>
                    </LinkElement>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Logout Button */}
        {showLogoutButton && onLogout && (
          <div className="p-4 border-t border-gold-800/30 mt-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-gold-600/10 hover:bg-gold-600/20 text-gold-300 hover:text-gold-100 rounded-md transition-colors border border-gold-800/30"
            >
              <LogOut className="h-4 w-4" />
              <span className="font-medium text-sm">Sign Out</span>
            </button>
          </div>
        )}

        {/* Footer */}
        {showFooter && (
          <div className="p-4 text-center">
            <p className="text-gold-500 text-xs">
              © {new Date().getFullYear()} Smart Flow Systems
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default SFSHamburgerMenu;
