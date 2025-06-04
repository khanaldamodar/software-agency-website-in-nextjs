import Link from "next/link"
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
             <div className="relative h-10 w-60 mr-2">
               <Image
              src={"/logo.png"}
              fill
              alt="Shakta Technology Logo"
              className="h-8 w-8 object-contain mr-2 filter-blue"
              />
             </div>
              {/* <span className="font-bold text-xl">Shakta Technology</span> */}
            </Link>
            <p className="text-[#334155]">
              Transforming ideas into powerful software solutions that drive business growth.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#334155] hover:text-[#2563EB]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#334155] hover:text-[#2563EB]">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#334155] hover:text-[#2563EB]">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#334155] hover:text-[#2563EB]">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-[#334155] hover:text-[#2563EB]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[#334155] hover:text-[#2563EB]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#334155] hover:text-[#2563EB]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#334155] hover:text-[#2563EB]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#334155] hover:text-[#2563EB]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-[#334155]">Web Development</span>
              </li>
              <li>
                <span className="text-[#334155]">Mobile Apps</span>
              </li>
              <li>
                <span className="text-[#334155]">UI/UX Design</span>
              </li>
              <li>
                <span className="text-[#334155]">Consulting</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#334155]">
                <Mail className="h-4 w-4" />
                <span>shaktatechnology.com</span>
              </div>
              <div className="flex items-center space-x-2 text-[#334155]">
                <Phone className="h-4 w-4" />
                <span>+977 9866437014</span>
              </div>
              <div className="flex items-center space-x-2 text-[#334155]">
                <MapPin className="h-4 w-4" />
                <span>Kuleshwor Kathmandu Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-[#334155]">
          <p>&copy; {new Date().getFullYear()} Shakta Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
