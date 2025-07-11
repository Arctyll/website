import { Github, Mail, Heart, Code, Users, Book, FileText } from "lucide-react";
import { Link } from "wouter";
import arctyllLogo from "@assets/arctyll.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 gap-y-12">
          {/* Brand Section */}
          <div>
            <Link href="/">
              <div className="flex items-center space-x-2 mb-4 group cursor-pointer">
                <img 
                  src={arctyllLogo} 
                  alt="Arctyll" 
                  className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                  Arctyll
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-4">
              Building the future of Minecraft modding with open-source innovation and community collaboration.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/Arctyll" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:team@arctyll.com" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <Code className="h-4 w-4 mr-2" />
              Projects
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">All Projects</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Mods</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Clients</Link></li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Community
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/commitment" className="text-muted-foreground hover:text-primary transition-colors">Our Commitment</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <Book className="h-4 w-4 mr-2" />
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="https://github.com/Arctyll" className="text-muted-foreground hover:text-primary transition-colors">Source Code</a></li>
              <li><a href="https://github.com/Arctyll" className="text-muted-foreground hover:text-primary transition-colors">Report Issues</a></li>
              <li><a href="https://github.com/Arctyll/.github/blob/main/CONTRIBUTING.md" className="text-muted-foreground hover:text-primary transition-colors">Contributing</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/legal/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="/legal/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm text-center md:text-left space-y-1 max-w-md">
            <p>
              &copy; 2025{" "}
              <span className="font-bold gradient-text text-transparent bg-clip-text">
                Arctyll
              </span>. All rights reserved.
            </p>
            <p className="text-xs break-words">
              Not affiliated with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 transition-transform duration-200 hover:scale-105">
                Mojang
              </span> or{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 via-blue-500 to-yellow-400 transition-transform duration-200 hover:scale-105">
                Microsoft
              </span>.
            </p>
            <p className="text-xs">
              Licensed under the{" "}
              <a
                href="https://www.gnu.org/licenses/agpl-3.0.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 gradient-text bg-clip-text text-transparent transition-transform duration-200"
              >
                GNU AGPL v3.0
              </a>.
            </p>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>by the open source community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}