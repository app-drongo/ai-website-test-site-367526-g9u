'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brandName: 'Test Site',
  tagline: 'Streamlined technology solutions that simplify complexity for everyday users.',
  copyright: '© 2024 Test Site. All rights reserved.',
  email: 'hello@testsite.com',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Street, Innovation City, IC 12345',
  quickLinks: [
    { title: 'About', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Contact', href: '/contact' },
  ],
  legalLinks: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
  ],
  socialLinks: [
    { title: 'GitHub', href: 'https://github.com' },
    { title: 'Twitter', href: 'https://twitter.com' },
    { title: 'LinkedIn', href: 'https://linkedin.com' },
  ],
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  return (
    <footer id="footer" className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  <span data-editable="brandName">{config.brandName}</span>
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                <span data-editable="tagline">{config.tagline}</span>
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span data-editable="email">{config.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span data-editable="phone">{config.phone}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span data-editable="address">{config.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <nav className="space-y-3">
                {config.quickLinks.map((link, idx) => (
                  <Button
                    key={idx}
                    variant="ghost"
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`quickLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`quickLinks[${idx}].title`}>{link.title}</span>
                  </Button>
                ))}
              </nav>
            </div>

            {/* Legal & Social */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <nav className="space-y-3 mb-6">
                {config.legalLinks.map((link, idx) => (
                  <Button
                    key={idx}
                    variant="ghost"
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`legalLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`legalLinks[${idx}].title`}>{link.title}</span>
                  </Button>
                ))}
              </nav>

              {/* Social Links */}
              <div>
                <h5 className="font-medium text-foreground mb-3 text-sm">Follow Us</h5>
                <div className="flex gap-2">
                  {config.socialLinks.map((social, idx) => (
                    <Button
                      key={idx}
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 p-0 text-muted-foreground hover:text-foreground hover:bg-accent"
                      onClick={() => handleLinkClick(social.href)}
                      data-editable-href={`socialLinks[${idx}].href`}
                      data-href={social.href}
                      aria-label={social.title}
                    >
                      {idx === 0 && <Github className="h-4 w-4" />}
                      {idx === 1 && <Twitter className="h-4 w-4" />}
                      {idx === 2 && <Linkedin className="h-4 w-4" />}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Copyright */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              <span data-editable="copyright">{config.copyright}</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Built with care for intuitive user experiences
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
