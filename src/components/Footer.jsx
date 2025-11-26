export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto text-center px-4">

        <img 
          src="/EcoFair-Logo.png" 
          alt="EcoFair Logo" 
          className="w-20 mx-auto mb-3"
        />

        <h3 className="text-xl font-semibold">EcoFair – Hyderabad</h3>
        <p className="text-green-100 mt-1">
          Celebrating Sustainable Living & Local Eco Products
        </p>

        <p className="text-green-300 text-sm mt-4">
          📍 Hyderabad, Telangana
        </p>

        <p className="text-green-200 text-xs mt-6">
          © {new Date().getFullYear()} EcoFair. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
