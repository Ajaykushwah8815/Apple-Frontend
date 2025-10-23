import React from "react";
import {
    Footer,
    FooterCopyright,
    FooterLink,
    FooterLinkGroup,
} from "flowbite-react";

const BACK_URL = import.meta.env.VITE_API_URL;

const FooterSection = () => {
    return (
        <Footer
            container
            className="bg-gradient-to-r from-green-600 via-teal-500 to-blue-600
 py-8"
        >
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-black">
                <FooterCopyright
                    className="text-black  font-bold text-sm    "
                    href="#"
                    by=" Self™ | Designed by Ajay Kushwah"
                    year={2025}

                />

                <FooterLinkGroup className="flex gap-6 text-sm font-medium text-black">
                    <FooterLink href="#" className="hover:text-blue-700 ">
                        About
                    </FooterLink>
                    <FooterLink href="#" className="hover:text-blue-700">
                        Privacy Policy
                    </FooterLink>
                    <FooterLink href="#" className="hover:text-blue-700">
                        Licensing
                    </FooterLink>
                    <FooterLink href="#" className="hover:text-blue-700">
                        Contact
                    </FooterLink>
                </FooterLinkGroup>
            </div>
        </Footer>
    );
};

export default FooterSection;
