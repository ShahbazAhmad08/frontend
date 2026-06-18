export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-3xl font-black">Nazra Software Solutions</h3>

            <p className="mt-4 text-slate-400">
              Helping businesses grow through web development, SEO, paid
              advertising, and digital transformation
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>

            <ul className="space-y-2 text-slate-400">
              <li>SEO</li>
              <li>Google Ads</li>
              <li>Meta Ads</li>
              <li>Web Development</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>

            <ul className="space-y-2 text-slate-400">
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>

            <ul className="space-y-2 text-slate-400">
              <li>info@nazra.com</li>
              <li>+91 XXXXX XXXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-slate-500 text-sm">
          © 2026 Nazra Software. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
